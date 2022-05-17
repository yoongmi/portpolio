import gulp from "gulp"
import gpug from "gulp-pug";    //pug파일 html파일로 
import del from "del";  //파일을 삭제
import ws from "gulp-webserver";    //웹서버 구동
import image from "gulp-image";     //이미지최적화
const sass = require('gulp-sass')(require('sass'));     //sass > css로 
import autoprefixer from "gulp-autoprefixer";   //벤더프리픽스 자동으로 해줌
import miniCSS from "gulp-csso";    //css파일 압축(한줄로 다보이게)
import ghPages from "gulp-gh-pages"; 

const routes = {
    pug: {
        watch : "src/**/*.pug",
        src:"src/*.pug",
        dest:"build"
    },
    img: {
        src: "src/img/*",
        dest: "build/img"
    },
    scss : {
        watch: "src/scss/**/*.scss",
        src: "src/scss/style.scss",
        dest: "build/css"
    }
}

export const pug = () => 
    gulp
    .src(routes.pug.src)
    .pipe(gpug())
    .pipe(gulp.dest(routes.pug.dest));

const clean = () => del(["build/",".publish"]); 

const webserver = () => gulp.src("build").pipe(ws({livereload: true, open:true}));

const styles = () => 
    gulp
    .src(routes.scss.src)
    .pipe(sass().on("error",sass.logError))
    .pipe(
        autoprefixer({
            browsers: ["last 2 versions"]
        })
    )
    .pipe(miniCSS())
    .pipe(gulp.dest(routes.scss.dest));

const img = () => 
    gulp
    .src(routes.img.src)
    .pipe(image())
    .pipe(gulp.dest(routes.img.dest));

const gh = () => 
    gulp
    .src("build/**/*")
    .pipe(ghPages());

const watch = () => {
    gulp.watch(routes.pug.watch, pug);
    gulp.watch(routes.pug.src, img);
    gulp.watch(routes.scss.watch, styles);
}

const prepare = gulp.series([clean, img]);

const assets = gulp.series([pug, styles]);

const live = gulp.parallel([webserver, watch]);

export const build = gulp.series([prepare,assets]);
export const dev = gulp.series([build, live]);
export const deploy = gulp.series([build,gh,clean]);