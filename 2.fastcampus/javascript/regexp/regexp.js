const str = `
010-1234-4567
yoon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aasdffasdf
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