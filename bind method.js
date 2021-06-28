const userOne = {
    firstname: 'vishal',
    lastname: 'chindam'
}
const userTwo = {
    firstname: 'mahesh',
    lastname: 'puli'
}
const fullName = function(){
    return '${this.lastname},${this.firstname}'; //normal function
},
/*const fullName = () => {                      
 return '${this.lastname},${this.firstname}';     //arrow function
}*/

const vishal = fullName.bind(userOne);  //binding the method1 and method2
const mahesh = fullName.bind(userTwo);
vishal()  //?  chindam vishal
mahesh()   //?  puli mahesh