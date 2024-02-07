//  // JavaScript essential
// // Promise based Async
// const ash = new Promise((res,err)=>{
//    if(Math.random()<0.5){
//     res("promise resolved");}
// else 
//   err (new Error ("unlucky"));
// })

// ash.then(message=>{
//   console.log(message)
// }).catch(error=>{
//    console.log(error);
// })

// // Async..await

// const ashAsync=async()=>{
//     let data=await ash;
//     console.log("I am resolved!!")
//     return data;
// }

// ashAsync();

// //settimeOut and setInterval

// const showAlert = () => {
   
//     setInterval(() => {
//       console.log('I show every 5 seconds!')
//     }, 5000);
//   };
  

//   //showAlert();
//   const showTimeOut=()=>{
//     setTimeout(()=>{
//         console.log("I am timeOut")
//     },5000)
//   }

//   //showTimeOut();

//   //iterator 
//   //The .reduce() method iterates through an array and returns a single value. 

//   const arrayAsh=[1,2,3,4];
//   const sum=arrayAsh.reduce((acc,cuur)=>{
//     return  acc+cuur;
//   })
//   console.log(arrayAsh);
//   console.log(sum);
//   // The .forEach() method executes a callback function on each of the elements in an array in order.
//   const king= arrayAsh.forEach(number=>{
//     console.log(number);
//   })

//   //The .filter() method executes a callback function on each element in an array
//   const randomArray=arrayAsh.filter(n=>{
//     return n>2;
//   })
//   console.log(randomArray);

//   //The .map() method executes a callback function on each element in an array.
//   // It returns a new array made up of the return values from the callback function.

//   const newArr=randomArray.map((item,index)=>{
//     console.log("index "+index)
//     return item*100;
//   })
//   console.log(newArr);
  
//   // Functions Assigned to Variables
//   let plusFive = (number) => {
//     return number + 5;  
//   };
//   // f is assigned the value of plusFive
//   let f = plusFive;
//   console.log(plusFive(78));
//   console.log(f(8));
//   //Callback Functions
// //In JavaScript, a callback function is a function that is passed
// // into another function as an argument. This function can then be invoked during
// // the execution of that higher order function (that it is an argument of).
// //Since, in JavaScript, functions are objects, functions can be passed as arguments.

// const isEven=(number)=>{
//   if(number%2)
//   return true;
// return false;
// }

// const myFunct=(var1,num)=>{
//   const localvar=var1(num);
//   console.log(`The number ${num} is an even number: ${var1}.`)
  
// }

// console.log(myFunct(isEven,9));




