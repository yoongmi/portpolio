import getType from './getType'

console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof [])
console.log(typeof {})

console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))


// 화살표 함수
// () => {} vs function() {}

const double = function(x){
    return x+2
}
console.log('double:',double(7))


const doubleArrow = (x) => x+2
const doubleArrow2 = x => x+2
const doubleArrow3 = x => ({name:'hello'}); 
console.log('doubleArrow',doubleArrow(7),doubleArrow2(7));
console.log(doubleArrow3(name));


// 즉시실행함수
