
//HTML 요소 검색/찾기
const boxEl = document.querySelector('.box');

//HTML 요소에 적용할 수 있는 메소드
// boxEl.addEventListener();

//인수를 추가 기능
// boxEl.addEventListener(1,2);

// 핸들러(handler, 실행할함수)
// boxEl.addEventListener('click',function(){
// })

//HTML 요소 모두 검색/찾기
const boxEls = document.querySelectorAll('.box')

//찾은 요소들 반복해서 함수 실행
//익명 함수를 인수로 추가
boxEls.forEach(function(){})

//첫 번째 매개변수(boxEl) : 반복중인 요소,
//두 번째 매개변수(index) : 반복중인 번호
boxEls.forEach(function(boxEl,index){})

//출력
boxEls.forEach(function(boxEl,index){
    boxEl.classList.add(`order-${index}`);
    console.log(index,boxEl)
})

// getter 값을 얻는 용도
console.log(boxEl.textContent);

// setter 값을 지정하는 용도
boxEl.textContent='하나둣!!!';


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


// 즉시실행함수 IIFE
const a = 5;
/*
(function(){
    console.log(a*2)
})()

(function(){
    console.log(a*2)
}())
*/

// 타이머 
/*
const timer = setInterval(() =>{
    console.log('HEROPY!')
},1000)

const title = document.querySelector('h1');
title.addEventListener('click',() => {
    clearInterval(timer)
})
*/

//콜백함수
/*
function timeout(cb){
    setTimeout(()=>{
        console.log('hihi')
        cb()
    },3000)
}
timeout(()=>{
    console.log('Done!')
})
*/
//prototype
/*
const heropy = {
    firstName: 'Heropy',
    lastName: 'Park',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(heropy.getFullName());

const neo = {
    firstName: 'Neo',
    lastName: 'Smith',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(neo.getFullName());
*/
/*
function User(first, last){
    this.firstName = first
    this.lastName = last
}
User.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

const park = new User("Heropy","Park")  //생성자함수
const amy = new User("amy","Park")
const neo = new User("neo","Park")

console.log(park.getFullName())
console.log(amy)
console.log(neo)
*/
/*
const thisstudy = {
    name: 'yoonmi',
    normal : function(){
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}
thisstudy.normal()
thisstudy.arrow()

const any = {
    name:'Any',
    normal: heropy.normal,
    arrow:heropy.arrow
}
any.normal()
any.arrow()


const teraphy = {
    name:"yoon",
    timeout:function(){
        setTimeout(()=>{
            console.log(this.name)
        },2000)
    }
}
teraphy.timeout();
*/

class User {
    constructor(first,last){
        this.firstName = first
        this.lastName = last
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const park = new User("Heropy","Park")  //생성자함수

console.log(park.getFullName())


//상속(확장)
class Vehicle{
    constructor(name,wheel){
        this.name = name
        this.wheel = wheel
    }
}

const myVehicle = new Vehicle('운송수단',2)
console.log(myVehicle)

class Bicycle extends Vehicle{
    constructor(name,wheel){
        super(name,wheel)
    }
}

const myBicycle = new Bicycle('삼천리',2)
const daughtersBicycle = new Bicycle('세발',3)
console.log(myBicycle)
console.log(daughtersBicycle)

class Car extends Vehicle{
    constructor(name,wheel,license){
        super(name,wheel)
        this.license = license
    }
}

const myCar = new Car ('벤츠',4,true)
const daughtersCar = new Car ('포르쉐',4,false)
console.log(myCar)
console.log(daughtersCar)