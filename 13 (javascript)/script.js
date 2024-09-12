// alert
// alert("hey");

// prompt
// let ans = prompt("enter");

// console

let ans = "ahmed";
console.log(ans);
console.warn(ans);
console.error(ans);

// functions

function abc() {
  //function statement
}
var abc = function () {
  // function expression
};
//function(){
// function anonymous
//}
var abc = () => {
  // arrow function
};
var abc = (param) => {
  // arrow function with one parameter
};
var abc = () => ans; //arrow function with implicit return

// array

let arr = [1, 2];
arr.push(3); //used to add new element
arr.splice(2, 1); // used to remove

// object

var colin = {
  name: "Colin",
  price: 150,
};
colin.name;
console.log(colin.price);

// DOM

// var h1 = document.querySelector ("h1"); // selecting element in index
// h1.innerHTML="heyheyhey"; // HTML change
// h1.style.color="red"; // style change
// h1.style.backgroundColor="black"; // style change
// h1.addEventListener("click",function(){
//     h1.style.color="black";
//     h1.style.backgroundColor="initial"
// })

// question

//we have an array contiaining n numbers of elements and we want to keep all positives and remove negative
var array = [1, 2, -3, 4, -4, -56, 6, -7, -6, 4, -3, -3, 2, -2, -4, 3, 3];
// array.forEach(function(val,index){
//     if(val<0){
//         array.splice(index,1);
//     }
// });

// for each main break us nahi ho sakta isi liya normal for loop use kar rahay hain
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] < 0) {
      array.splice(j, 1);
      break;
    }
  }
}
console.log(array);

//remove all the candidates which are younger than 12
var array=[
    {name:"harsh",age:24},
    {name:"harshit",age:14},
    {name:"harshita",age:50},
    {name:"abhay",age:240},
    {name:"jordan",age:2},
    {name:"rohit",age:5},
]
var notYounger=array.filter(function(val){
    return val.age>12;
})
console.log(notYounger)