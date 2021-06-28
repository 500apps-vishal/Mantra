//normal array concat() method
/* let arr = [1,2,3];
let arr2 = [4,5];
  
arr = arr.concat(arr2);
  
console.log(arr);

 


//using spread operator
let arr = [1,2,3];
let arr2 = [4,5];
  
arr = [...arr,...arr2];
console.log(arr);
*/



//iterables:arrays,strings,maps,sets,  not objects
 const str="vishal";
 const letters=[...str];
 console.log(letters);
 console.log(...str);