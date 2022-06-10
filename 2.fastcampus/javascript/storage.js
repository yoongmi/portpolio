const user = {
    name:'heropy',
    age:85,
    email:'yoon@gmail.com'
}

localStorage.setItem('user',JSON.stringify(user))
console.log(JSON.parse(localStorage.getItem('user')));
// localStorage.removeItem('user')


const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age=28
console.log(obj)
localStorage.setItem('user',JSON.stringify(obj))