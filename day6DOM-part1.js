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


//Child and parent node
console.log(document.body.firstChild);            //will print text that is a hidden node
console.log(document.querySelector("div").children);   //to access thhe chldren 

// INNER TEXT >>>> returns the text conte tt of the element and all its children EX:-

let div = document.querySelector("div");
console.dir(div)

// inner HTML
// let inhtml = document.querySelector("html");
// console.log(inhtml);
//TEXT CONTENT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//in console you can change the div just by div.innerText = "ABCD" 

let h3ii = document.querySelector("h3");
console.dir(h3ii);                  //In console write .... h3ii.innerText = "H3 Heading" //You Can vhange the text style by h3ii innerHTML = "<i>Hello </i>";

//Q/1 ..>> Creat a h2 heading element with text -"Hello javaScript". Append "From Apna College Student" to This using Js


let h2ii = document.querySelector("h2");
h2ii.innerText = h2ii.innerText + "From Apna College"; //Concatinning
console.dir(h2ii)

// Q/2..CREAT A DIVS WITH COMMON CLASS NAME -"BOX". ACCESS THEN & ADD SOME UNIQUE TEXT TO EACH OF THEM .
let dives = document.querySelectorAll(".box");
console.log(dives);
// dives[0].innerText = "kese hai re babuaa";
// dives[1].innerText = "kese hai re babuaa";
// dives[2].innerText = "kese hai re babuaa";

// for(let t of dives){
//     t.innerText = " i love you";
// }
// ind =1;
// for(let k of dives){
//     k.innerText=`yooo boys ${ind}`;
//     ind++;
// }










