import { random,userlist } from './getRandom.js';
import myData from './myData.json';

console.log(myData)
console.log(random(),userlist);



/* 
    string
    math
    array
        .length()
        .concat()
        .forEach()
        .map()
        .filter()
        .find()
        .findIndex()
        .includes()
        .push()
        .unshift()
        .reverse()
        .splice()
    object
        .assign()
        .keys()
*/


//******** string 
console.log('----------------------------------STRING----------------------------------')
const str = 'Hello world!';

// 0번째부터 3개 자르기
console.log(str.slice(0,3))

// 문자 대체하기 (왼쪽거를 오른쪽거로 대체)
console.log(str.replace('world','MY HOME'))

const str2 = 'xduathx@naver.com';

// 이메일에서 아이디만 가져오기
console.log(str2.match(/.+(?=@)/)[0]) //골뱅이의 앞쪽텍스트 가져오기

const str3 = '             Hello World       '

//공백문자 없애줌
console.log(str3.trim())



//********* math
console.log('----------------------------------MATH----------------------------------')
const pi = 3.14159265358979
console.log(pi)

const pi2 = pi.toFixed(2)
console.log(pi2)
console.log(typeof pi2) //숫자가아니라 string으로 나옴. (문자데이터)

const integer = parseInt(pi2)   //정수부분 추출
const float = parseFloat(pi2)   //실수로 추출
console.log(integer);
console.log(float);
console.log(typeof integer, typeof float)   //숫자로 추출

console.log('abs', Math.abs(-12))   //절대값
console.log('min', Math.min(2,8))   //작은수
console.log('max', Math.max(2,8))   //큰수
console.log('ceil', Math.ceil(3.14))   //올림
console.log('floor', Math.floor(3.14))   //내림
console.log('round', Math.round(3.14))   //반올림
console.log('random', Math.random())   //숫자 랜덤(난수)

console.log(Math.floor(Math.random()*10))   //0~9까지 숫자 랜덤으로



//********* array
console.log('----------------------------------ARRAY----------------------------------')

// .length 배열 데이터 몇개인지
const numbers = [1,2,3,4]
const fruits  = ['Apple','Banana','Cherry']

console.log(numbers.length)
console.log(fruits.length)
console.log([1,2].length)

console.log([].length)

// .concat() 두개의 배열데이터 병합. 기존데이터에는 영향끼치지 않음.
console.log(numbers.concat(fruits))
console.log(numbers)
console.log(fruits)

// .forEach() 배열의 요소들을 반복적으로 작업
fruits.forEach(function(element,index,array){
    console.log(element,index,array)
})

// .map() 새로운 배열을 반환.
const a = fruits.forEach(function(fruit,index){
    console.log(`${fruit}-${index}`)
})
console.log(a)

const b = fruits.map((fruit,index)=>{
    //반환값을 b에 할당
    return `${fruit}-${index}`
})
const c = fruits.map((fruit,index)=>({
    id: index,
    name: fruit
}))

console.log(b)
console.log(c)

// .filter() 각각의 필터링 된 아이템들의 배열.  원본데이터에 영향 X
const d = numbers.map(number=> number < 3)
console.log(d)

const e = numbers.filter(number=>number < 3)
console.log(e)

// .find() 찾은 아이템 반환
// .findIndex() 찾은 아이템 index값 반환

const f = fruits.find(fruit => {
    return /^B/.test(fruit) //정규표현식 > B로 시작하는 문자데이터 의미, 일치하면 true
})
console.log(f)

const g = fruits.findIndex(fruit => {
    return /^B/.test(fruit) //정규표현식 > B로 시작하는 문자데이터 의미, 일치하면 true
})
console.log(g)

// .includes()  원하는 값이 포함되어있는지 false,true
const h = numbers.includes(3)
console.log(h)

const i = fruits.includes('HEROPY')
console.log(i)


console.log('--------------원본수정됨주의--------------')
// .push() 맨뒤쪽에 데이터 삽입
// .unshift() 맨앞쪽에 데이터 삽입
// 원본 수정됨 주의!!
numbers.push(5)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)

// .reverse()
// 원본 수정됨 주의!!
numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)

// .splice()  인덱스번호에서,몇개 지우는지, 그자리에 추가
// 원본 수정됨 주의!!
const numbers2 = [1,2,3,4]
numbers2.splice(2,1,999)
console.log(numbers2)



//********* object / 정적메소드
console.log('----------------------------------OBJECT----------------------------------')

// .assign()  속성을 복사해 대상객체에 붙여넣기. 후 반환
const userAge = {
    // key:value
    name:'heropy',
    age:85
}
const userAge2 = {
    // key:value
    name:'heropy',
    age:85
}
const userEmail = {
    name:'heropy',
    email:'heropy@gmail.com'
}

//userage 에 속성이 추가됨.
const target = Object.assign(userAge,userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge)

//age와 email을 합쳐서 새로운 객체 만들기
const target2 = Object.assign({},userAge2,userEmail)
console.log(target2)
console.log(userAge2)
console.log(target2 === userAge2)

const oba = { k:123 }  
const obb = { k:123 }
//console.log(aba === abb)    // 참조형 데이터 이므로 false


// .keys()  객체안의 프로퍼티(key)만 추출되어 배열데이터로 반환
const keyuser = {
    name:'heropy',
    age:85,
    email:'heropy@gmail.com'
}

const keys = Object.keys(keyuser)
console.log(keys)

console.log(keyuser['email'])

// 값들만 추출되어 배열데이터로 반환
const values = keys.map(key => keyuser[key])

console.log(values)

// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당
const user2 = {
    name:'heropy',
    age:85,
    email:'heropy@gmail.com',
    address:'USA'
}
const {name, age, email, address = 'korea'} = user2     // 이부분에 넣는 값은 데이터 없을때 기본값

console.log(`사용자의 이름은 ${name}입니다`)
console.log(`${name}의 나이는 ${age}입니다`)
console.log(`${name}의 이메일 주소는 ${email}입니다.`)
console.log(address)

//배열데이터 구조분해할당
const fruits2 = ['Apple','Banana','Cherry'];
const [a2,b2,c2,d2] = fruits2   //네번째 값 없어서 undefined로 출력됨.
console.log(a2,b2,c2,d2)


//전개연산자 (Spread)
const fruits3 = ['Apple','Banana','Cherry','Orange']
console.log(fruits3)
console.log(...fruits3)
/*
function toObject(a,b,...c){
    return{
        a,   //a:a, 
        b,   //b:b,
        c   //c:c
    }
}*/
//위의 코드 축약형
const toObject = (a,b,...c)=>({a,b,c})

console.log(toObject(...fruits3))


// 데이터 불변성
// 원시데이터 : String, Number, Boolean, undefined, null
// 참조형데이터 : Object, Array, Function

//원시데이터
let aa = 1
let bb = 4
console.log(aa,bb,aa===bb) //메모리의 주소가 다르기에 false가 나옴
bb=aa   //bb는 aa의 메모리주소를 바라봄
console.log(aa,bb,aa===bb)
aa=7
console.log(aa,bb,aa===bb)
let cc = 1
console.log(bb,cc,bb===cc)  //메모리를 추가하지 않고 기존에 있는 메모리를 바라봄, 서로 같은 주소를 바라봄 - 데이터불변성

//참조형데이터
let aaa = {k:1}
let bbb = {k:1}
console.log(aaa,bbb,aaa===bbb)
aaa.k = 7
bbb = aaa
console.log(aaa,bbb,aaa===bbb)
aaa.k = 2   //aaa값만 바꿨는데 bbb의 값도 바뀜, 위에서 aaa와bbb가 같은 메모리를 바라보게했기 때문.
console.log(aaa,bbb,aaa===bbb)
let ccc = bbb
console.log(aaa,bbb,ccc,aaa===ccc)
aaa.k = 9
console.log(aaa,bbb,ccc,aaa===ccc)


// 얕은 복사(shallow copy), 깊은 복사(deep copy)
const user3 = {
    name:'heropy',
    age:85,
    emails:['email@naver.com']
}
const copyUser = user3
console.log(copyUser === user3) //둘은 같은 메모리주소를 바라보고있다.

user3.age=22
console.log('user',user3)
console.log('copyUser',copyUser) //한쪽에서 수정했을때, 다른쪽도 같이 수정됨.

const copyUser2 = Object.assign({},user3) //복사
console.log(copyUser2 === user3) 

user3.age=24
console.log('user',user3)
console.log('copyUser2',copyUser2) 

const copyUser3 = {...user3} //전개연산자로 복사, 얕은복사
console.log(copyUser3=== user3) 
user3.age=25
console.log('user',user3)
console.log('copyUser3',copyUser3) 

user3.emails.push('hi@naver.com')
console.log(user3.emails===copyUser3.emails)
console.log('user3',user3)
console.log('copyUser3',copyUser3)


//JSON
const str4 = JSON.stringify(user3)  //json화 시키기
console.log('str',str4)

const obj = JSON.parse(str4)    //json을 object로 만들기
console.log('obj',obj);