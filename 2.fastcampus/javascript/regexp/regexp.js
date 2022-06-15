const str = `
010-1234-4567
yoon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aasdffasdfdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`


// const regexp = new RegExp('the','gi')    //g플래그
const regexp = /the/gi
console.log(str.match(regexp))

const regexp2 = /fox/gi
console.log(regexp2.test(str))
console.log(str.replace(regexp2, 'AAA'))

const regexp3 = /the/gi
console.log(str.match(regexp3))

console.log(str.match(/\.$/gim))  // \(백슬래시) 일반적인 문자로 해석할수있는. 문자끝에 마침표가 있는지.

console.log(str.match(/.^t/gim))

console.log(str.match(/dog|fox/g))

console.log(str.match(/https?/g)) //?는 있을수도 있고 없을수도 있는 

console.log(str.match(/\b\w{2,3}\b/g))

console.log(str.match(/[0-9]{1,}/g))
console.log(str.match(/[가-힣]{1,}/g))

console.log(str.match(/\bf\w{1,}\b/g))  //숫자 f로 시작되는 단어

const h = `   the hello world     !!

`
console.log(h.replace(/\s/g,''))

const str2 = `
010-1234-4567
yoon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aasdffasdf
`

console.log(str.match(/(?=>@).{1,}/g))
console.log(str.match(/.{1,}(?=@)/g))