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
    function abc(){
        //function statement
    }
    var abc = function (){
        // function expression
    }
    //function(){
        // function anonymous
    //}
    var abc = () => {
        // arrow function
    }
    var abc = param => {
        // arrow function with one parameter
    }
    var abc = () => ans; //arrow function with implicit return

// array
    let arr=[1,2]
    arr.push(3); //used to add new element
    arr.splice(2,1); // used to remove

// object
    var colin = {
        name : "Colin" ,
        price : 150
    }
    colin.name;
    console.log(colin.price);

// DOM
    var h1 = document.querySelector ("h1"); // selecting element in index
    h1.innerHTML="heyheyhey"; // HTML change
    h1.style.color="red"; // style change
    h1.style.backgroundColor="black"; // style change
    h1.addEventListener("click",function(){
        h1.style.color="black";
        h1.style.backgroundColor="initial"
    })