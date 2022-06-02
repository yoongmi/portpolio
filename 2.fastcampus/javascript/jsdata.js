
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

const b = fruits.map(function(fruit,index){
    //반환값을 b에 할당
    return `${fruit}-${index}`
})
console.log(b)