//DAY $ .........>>>>>Chapter 4.....>>>>>>>>>>>>>>>
// ............DOM MANUPULATION...............>>>>>>//
//DOM is besically A way to access HTML in JS
console.log("hello");
window.console.log("helo2");

console.dir(document.body);  //Used to print the windows document object
console.log(document.body)   //Used to print the html body part 

// document.body.style.background = ("green");   //This will make body part of the page into green

// Dom manupulation 
/*Selecting with ID 
document.getElementById("myld")
*/
let heads = document.getElementById("heads");
console.log(heads)         //accessing the id by .log
console.dir(heads);      //accessing thr objects by .dir

/*Selecting with class 
document.getElementsByCllassName("myld")
*/
let hno4 = document.getElementsByClassName("hno4");  //use s after element 
console.log(hno4);
console.dir(hno4);

/*Selecting with Tag
document.getElementsByTagName("tag")
*/

let but = document.getElementsByTagName("button");
console.log(but);
console.dir(but);

//TO ACCESS  ALL THE TAGS,IDs AND CLASS WE USE  THIS  QUERY SELECTOR
//EX :- document.querySelector("name");
let pra = document.querySelector("p");
console.log(pra);
console.dir(pra);
//SIMILARLY TO USE ALL THE PRESENT SIMMILAR TAG LIKE ALL P TAG YOU NEED TO WRITE THIS COMMAND

let allel = document.querySelectorAll("p");
console.log(allel);
console.dir(allel);
//just like if you want to call them by ther objects like id s and class
let clasel = document.querySelectorAll(".p3");
console.log(clasel);
console.dir(clasel);
//Simillarly use # for IDs........ 















