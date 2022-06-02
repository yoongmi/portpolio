
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