import _ from './node_modules/lodash';

console.log(_.camelCase('the hello world'))

const userA = [
    {userId:'1', name:'heropy'},
    {userId:'2', name:'neo'}
]

const userB = [
    {userId:'1', name:'heropy'},
    {userId:'3', name:'Amy'}
]
const userC = userA.concat(userB)
console.log('concat',userC)
console.log('uniqBy',_.uniqBy(userC,'userId'))  //하나의 배열데이터에서 합칠때

const userD = _.unionBy(userA,userB,'userId')   //여러개의 배열데이터 합칠때
console.log('unionBy',userD)

const users = [
    {userId:'1',name:'heropy'},
    {userId:'2',name:'heo'},
    {userId:'3',name:'amy'},
    {userId:'4',name:'evan'},
    {userId:'5',name:'lewis'}
]

const foundUser = _.find(users,{name:'amy'})    //찾기
const foundIndex = _.findIndex(users,{name:'amy'})  //인덱스번호 찾기
console.log(foundUser)
console.log(foundIndex)

_.remove(users,{name:'heropy'})
console.log(users)

