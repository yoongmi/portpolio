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