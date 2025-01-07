// >>>>>>>>>>>>>>>>>>>>>>>     DAY 1   {VARIABLES AND }       >>>>>>>>>>>>>>>>>>>>>>>

/*
..........................JS CHAPTER 1.......DAY 1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\\\\\\\\\\\
*/
// ................PRINT STATEMENT .............>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log("I am hussain I love you");
console.log("Kese hain aap log");
// ..........................VARIABLE..........>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

fullname = "Sk Mahmood Hussain";
console.log("Full name :", fullname); //String variable
age = 24 + 1;
console.log("AGE :", age); //NUMBER SYSTEM
X = null;
console.log("NULL is :", X); // NULL VALUE
i_am_mairred = false;
console.log("I am mairrade :", i_am_mairred); //BOOLEN VALUE

// .................. DECLAR VARIABLE .............
//var , let , const.........
// var variable can be re-declared
let myAge = 20; //  let variable declaration ..variable cannot be re-declared
console.log(myAge);

const yourAge = 95;
console.log("AGE :", yourAge); // const variable declaration...you cannot change the variable

//Block  in JS.......>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

{
  let myAge = 20;
  console.log(myAge);
}
{
  //YOU CAN ONLY RE DECLARED A VARIABLE ONLY IN A 1 BLOCK
  let myAge = 20;
  console.log(myAge);
}

//>>............PREMMITIVE DATA TYPES ............>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//  NUMBER , STRING , BOOLEAN , UNDEFINED , NULL , BIGLNT , SYMBOL.....

let weight = 50;
console.log(typeof weight); // Check the data type i.e number
let personName = "HUSSAIN";
console.log(typeof personName); // Check the data type i.e String
let commited = false;
console.log(typeof commited); //Check the data type i.e boolean
let GF;
console.log(typeof GF); //Check the data type i.e undefined
X = null;
console.log(typeof X); // Check the data type i.e NULL VALUE
let largeNumber = BigInt(1234);
console.log(typeof largeNumber); // Check the data type i.e bigint
console.log(largeNumber);
let charect = Symbol("IAMHUSSAIN");
console.log(typeof charect); // Check the data type i.e symbol :.S is capital in Symbol
console.log(charect);

// ......NON-PREMITIVE...........Objects.....>>>>>>>>>>>>>>>>>>>>>>>>

const student = {
  fullName: "SK Mahmood Hussain",
  age: 14,
  cgpa: 7.1,
  inpass: true,
};
console.log(typeof student); //Calling The Student Object
console.log(student);
console.log(student.age); //TWO METHOD TO DEFINE OBJECTS......YOU CAN ALSO CALL IT ON THE BROWESER
console.log(student["age"]); //like :- student["fullName"]   , student , student["age"]

student["age"] = student["age"] + 1; // You Can Change The value Outside the functrion
console.log("THE AGE IS NOW INCREASE TO 15 :- ", student["age"]);
//ANOTHER EXAMPLE ON STRING .................................
student["Name"] = "DR. SK Mahmood Hussain "; //............(NOTE):- YOU CAN ONLY CHANGE THE CONST OBJECT KEY LIKE AGE, NAME, ETC
console.log(student["Name"]); //YOu can do that on browser too :- student["fullName"]

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>PRACTISE SET 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// {Q/11}:-  CREAT A CONST OBJECT CALLED "PRODUCT" TO STORE INFORMATION SHOWN IN THE PICTURE ?

const product = {
  title: "Ball pen",
  rating: 4,
  offer: 5,
  prise: 1000,
};
console.log(product);
//  {Q/2}: CREAT A CONST OBJECT CALLED "PROFILE" TO STORE INFORMATION SHOWN IN THE PICTURE?

const profile = {
  userName: "shradhakhapra",
  isfollow: true,
  posts: 195 + " posts",
  followers: 596 + " k followers",
  following: 4 + " Following",
  threadID: "@shradhakhapra",
  bio: "Apna College | Ex-Microsoft, DRDO To Educate Someone is the highest privilage❤️",
};
console.log(profile);

// SOURCE CODE TO RUN IN HTML

//     <script src="day1.js"></script>

// ...........DAY 2 OPERATORS, CONDITIONAL STATEMENTS ,INPUT ,SWITCH, IN JAVASCRIPT...>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//............CHAPTER 2 .....ARTIMETIC OPERATORS  ............................+,-,*,/,%.....................

let a = 10;
let b = 20;
console.log("a = ", a, "b = ", b);
console.log("a + b= ", a + b); // "/"USED TO ADD TWO NUMBERS
console.log("a - b= ", a - b); // "-"USED TO SUBSTRACT TWO NUMBERS
console.log("a * b= ", a * b); // "*"USED TO MULTIPLAY TWO NUMBERS
console.log("a / b= ", a / b); // "/"USED TO DEVIDE TWO NUMBERS
console.log("a % b= ", a % b); // MODULUS :. FIND THE REMINDER ID TWO NUMBERS
console.log("a ** b= ", a ** b); // USED TO FIND THE SQUARE OF TWO NUMBERS  :. EXPONENTATION

//Unary Operator................
let c = 4;
let d = 8;
console.log("c =", c, "& d = ", d);
// c++;             //c = c + 1;
// d--;             //d = d - 1;
console.log("c=", c);
console.log("d=", d);
/*IMP TO NOTE */
console.log("c++ = ", c++); // :: THIS WILL PRINT PRINT THE ACTUAL VALUE i.e (4)
console.log("c = ", c); //:: THIS WILL PRINT PRINT THE ADDITION VALUE i.e (5)

//ASIGNMENT OPERATOR>>>>>>>>>>>>>
// =, +=, *=, %= **=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...............

let e = 5; //Equal to operator (=)......................
e += 4; //a =a+4;
console.log("e = ", e);

{
  let e = 10;
  e *= 4; //e =e*4;
  console.log("e = ", e);
}
{
  let e = 6;
  e **= 3;
  console.log("e = ", e);
}
//  COMPARISION OPERATORS ....................
//Equal to (==), Not Equal To (!=), Equal to & type (===), Not Equal TO and Type(!==),>,>=,<=,.............

let f = 5;
let g = 4;
console.log("f(5) == g(4)", f == g); //THE ANSWER WILL BE ON BOOLEN i.e ON TRUE OR FALSE........
++g;
console.log("F==G ", f == g); //The Answer Wil Be True

{
  let f = 10;
  let g = 5;
  console.log("f!=g", f != g); //Answer will be true
}
{
  let f = 5;
  let g = "5";
  console.log("f==g", f == g); //Javascript can convert string to number in some terms like this
  // ..............TO AVOIDE THIS PROBLEM WRITE (===) EQUAL TO & TYPE ......
  console.log("f===g", f === g); //the answer will be false
  console.log("f!==g", f !== g); //the answer will be false
}
{
  let a = 5;
  let b = 5;
  console.log("a>b", a > b); //Answer will be false
  console.log("a>=b", a >= b); //Answer will be True
}

// LOGICAL OPERATORS.........>>>>>>>>>>>>>>>>>>>>>
//LOGICAL AND(&&), LOGICAL OR (||), LOGICAL NOR(!).

/*LIKE EXAMPLE*/
{
  let a = 6;
  let b = 5;
  //BOTH THE CONDITION MUST HAVE TO BE TRUE...
  let count1 = a > b; //CONDITION IS TRUE
  let count2 = a === 6; //CONDITION IS TRUE
  console.log("count1 && count2", count1 && count2); //ansewr will be true
}
{
  let a = 6;
  let b = 5;
  // let count1 = a<b; //CONDITION IS FALSE
  // let count2 = a ===6;  // TRUE CONDITION
  console.log("count1 && count2", a < b && a === b); //ansewr will be FALSE
}

// TABLE OF AND OPERATORS (&&).....
/*
CONDI 1 | CONDI 2 | RESULT (&&) | RESULT (||) |
    T         T         T             T
    T         F         F             T
    F         T         F             T
    F         F         F             F
*/

//EXAMPLE OF OR OPERATOR......

{
  let a = 6;
  let b = 5;
  //ATLEAST A SINGLE CONDITION MUST BE TRUE TO GET A TRUE RESULT...................
  // let count1 = a<b; //CONDITION IS FALSE
  // let count2 = a ===6;  // TRUE CONDITION
  console.log("count1 || count2", a < b || a === 6); //ansewr will be TRUE
}
{
  let i = 5; //T=F & F=T.  i.e TRUE WILL BE FALSE AND FALSE WIL BE TRUE.
  let j = 6;
  console.log("!(j>i)", !(j > i)); //ANSWER WILL BE FALSE
}

//Conditional statement...........

let age = 28;
if (age >= 18) {
  console.log("Person Able to Vote");
}
if (age < 18) {
  console.log("Person is not eligible for Vote");
}
//ANOTHER EXAMPLE.............

let mode = "light";
let color;
if (mode === "dark") {
  color = "black";
} else {
  color = "light";
}
console.log("color =", color);
//Q/1.........FIND ODD AND EVEN NUMBER..........
{
  let num = 5;
  if (num % 2 === 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
}
// else if ....................
let themes = "blue";
let colors;
if (themes === "dark") {
  color = "black";
} else if (themes === "blue") {
  color = "blue";
} else if (themes === "green") {
  color = "green";
} else {
  color = "white";
}

console.log(color);

//TERNARY OPERATOR................................
//CONDITION?TRUE OUTPUT:FALSE OUTPUT

let old = 20; //CONDITION // IF?     ELSE:        CAN BE USED LIKE THIS
let result = old >= 18 ? "aduld" : "Not adult"; //SIMPLER AND COMPACT IF ELSE
console.log(result);

//SWITCH STATEMENT ...........

const fruit = "apple";
switch (fruit) {
  case "mangoes":
    console.log("Mangoes are $ 2.05 a pound");
    break;
  case "apple":
  case "orange":
    console.log("orange and Apple  are $ 2.05 a pound");
    break;
  default:
    console.log("Sorry We are Out Of Stocks Now ${expr}.");
}

//INPUT FROM USER...................................
let nameee = prompt("hello");
console.log(nameee);
// (Q/2)....GET USER TO INPUT A NUMBER USING PROMPT ("ENTER A NUMBER:"). CHECK IF THE NUMBER IS A MULTIPLE OF 5 OR NOT.

let nums = prompt(
  "Enter your  number to check weather the number is multiple of 5 or not. "
);
if (nums % 5 === 0) {
  console.log("the number is multiple of 5");
} else {
  console.log("the number is not a multiple of 5");
}

//(Q/3)....WRITE A CODE WHICH CAN GIVE GRADES TO STUDENTS ACCORDING TO TEIR SCIRES:
/*  *90-100 A
 *70-89 B
 *60-69 C
 *50-59 D
 *0-49 F
 */

let score = prompt("Enter the Marks (0-100) ");
let greads;
if (score >= 90 && score <= 100) {
  greads = "A";
} else if (score >= 70 && score <= 89) {
  gread = "B";
} else if (score >= 60 && score <= 69) {
  gread = "C";
} else if (score >= 50 && score <= 59) {
  gread = "D";
} else if (score >= 0 && score <= 49) {
  gread = "F";
} else {
  console.log("Invalid input");
}
console.log("Student Gread is ", gread);

// SOURCE CODE TO RUN IN HTML

//     <script src="day2.js"></script>

//........CHAPTER 3...LOOPS.......DAY 3..>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let num = prompt("enter the number of which you want find the sum ");
// let i , sum =0 ;
// for(i = 1; i<=num;i++){
//     sum = sum+i;
//     // console.log(sum);
// }
// console.log("The sum of num is  ",sum);

//for (let val of strVar){//do some work}  [for-of Loop]

let str = "hussain";
let length = 0;
for (let i of str) {
  //THIS LOOPS HELPS US TO BREAK DOWN STRINGS INTO CHAR
  console.log("i of string = ", i);
  length++;
}
console.log(length);

//for(let key in objVar for ) [for-in Loop]
let student = {
  name: "sk mahmood hussain",
  cgpa: 8.9,
  inpass: true,
  age: 20,
};
for (let j in student) {
  console.log("key = ", j, ", key value = ", student[j], typeof j);
}

//Q/1......PRINT ALL EVEN NUMBERS FROM 0 TO 100. <<<<<<<<<<

for (let z = 0; z <= 100; z++) {
  if (z % 2 === 0) {
    console.log(z);
  }
}

//Q/2........CREAT A GAME WHERE YIU START WITH A ANY RANDOM GAME NUMBER . ASK THE USER TO KEEP GUESSING THE GAME NUM UNTIL THE USER ENTERS CORRECT VALUE.

// let value = 28;
// let nums = prompt("Enter your number");
// while( nums != value){
//     nums = prompt("Re Enter your Number");                  || IMP IMP ||
//     }
//         console.log("YOU WON ");

//STRINGS.....................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let strr = "Hussain";
// let ansss = strr.length;
console.log(strr.length);
console.log(strr[0]); //Print H
//Template Literals
let specialString = `I love you`;
console.log(typeof specialString);
//use of template Literals.............

let shiyam = {
  class: 8,
  study: "bad",
  inpasss: false,
};
console.log(
  "class is ",
  shiyam.class,
  " Profamance at study ",
  shiyam.study,
  "pass in school",
  shiyam.inpasss
); //normal print in double Quotations
console.log(
  `class is ${shiyam.class} profamanse at study ${shiyam.study} pass in school ${shiyam.inpasss}`
);
//String interpolation....................// to creat string by using subsitution placeholder ...
let eeee = `the addition of this num is = ${1 + 40 + 6}`;
console.log(eeee);

//STRINGS METHODS.......>> str.toUpperCase()..>> st.toLowerCase()...>> str.trim() {Remove white space }.............>>>
//str.toUpperCase()
let capit = "mahmood Hussain";
console.log(capit.toUpperCase()); //MAKE STRING TO CAPITAL CASE
console.log(capit); //BUT WILL NAOTE CHANGE THE ORIGNAL STRING ....BECAUSE STRINGS ARE IMMUTABLE
//str.toLowerCase()
let lowcas = "Gulzar E Eram";
console.log(lowcas.toLowerCase());
console.log(lowcas); //BUT WILL NAOTE CHANGE THE ORIGNAL STRING ....BECAUSE STRINGS ARE IMMUTABLE

//str.trim()
let trimm = "                            kese hoo aap                  "; //TRIM ALL THE SPACES FROM THE BEGNING AND FROM THE END .
console.log(trimm.trim()); //USED TO TRIM THE SPACE

//str.slice(start,end?)

let strnum = "0123456789";
console.log(strnum.slice(1, 5));
// str1.concat(str2)
let name1 = "Sk Mahmood ";
let name2 = "Hussain ";
console.log(name2.concat(name1)); //THERE ARE DIFFERENT WAYS TO CONCAT YOUR STRING
console.log(name1, name2);
console.log(name2 + name1);
console.log("hello " + 123);

// str.replace(searchVal,newval)
let stree1 = "wow"; //NOTE IF THE STRING HASS REPEAT CHARECTERS LOKE "HHHII" ,IN CASE OF REPLACEMENT OF "H" WITH "Y" ONLY FIRST H WILL CHANGE i.e YHHII
console.log(stree1.replace("wow", "kaddu")); //you can change the whole string
console.log(stree1.replace("w", "k")); //you can also change a charecter

/*.>>Q/3..PROMPT THE USER TO ENTER THEIR FULL NAME . GENERATE A USERNAME FOR THEM BASED ON THE INPUT. 
START USERNAME WITH@ FOLLOWED BY THEIR FULL AND ENDING WITH THE FULLNAME LENGTH. EX: @HUSSAIN7
*/

let inp = prompt("Enter your name");
console.log("@" + inp + inp.length); //USE + SINGH FOR NO SPACE

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>HTML DAY3 LINK.......

//<script src="day3.js"></script>

//............DAY 4 Chapter 4 .ARRAY >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Array is a collection of items ......

let superheros = ["iron man", "thor", "spiderman", "batman", "hulk"];
let smarks = [98, 55, 97, 82, 92];
let studentandmarks = [
  "ironman",
  98,
  "thor",
  55,
  "spiderman",
  97,
  "batman",
  82,
  "hulk",
  92,
];
console.log(superheros.length); //Tells the length of an  array
console.log(smarks); //  Array is a object type
console.log(studentandmarks);
console.log(smarks[3], (smarks[2] = 94)); //we can only  change the array number value outside the array Not on string
console.log(smarks);

//LOOPING OVER AN ARRAY >>>>>>>> PRINT ALL ELIMENTS OF AN ARRAY>>>>>>>>.

let fevheros = ["iron man", "thor", "spiderman", "batman", "hulk"];
for (let i = 0; i < fevheros.length; i++) {
  //NOTE use the length of the variable i.e {i < arr.length}
  console.log(fevheros[i]); //print array in column
}

//for of arr>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let friend = ["GIKI", "RAJU", "ABDUL", "MAHMOOD", "DANISH", "SAKIB"];
for (let j of friend) {
  console.log(j); //Print array in column............
  // console.log(j.toLowerCase());
}
//Q/1...>> FOR A GIVEN ARRAY WITH MARKS OF STUDENT -> [85,97,44,37,76,60] FIND THE AVERAGE MARKS OF THE ENTIRE CLASS /+.

let student_marks = [85, 97, 44, 37, 76, 60];
let ans = 0;
for (let k of student_marks) {
  ans += k;
}
let avg = ans / student_marks.length;
console.log(ans);
console.log(`the average of the students marks is ${avg}`);
console.log("          ");

//Q/2..>> FOR A GIVEN ARRAY WITH PRICE OF 5 ITEMS -> [250,645,300,900,50] ALL ITEMS HAVE AN OFFER OF 10% OFF ON THEM .CHANGE THE ARRAY TO STORE FINAL PRICE AFTER APPLING OFFER

// let items = [250,645,300,900,50];
// let ii = 0;
// for(let l of items){
//     console.log(`the price of the items ${ii} is ${l}`);
//     let offer = l/10;
//     items[ii] = items[ii]-offer;
//     console.log("-"+offer);
//     console.log(`Items offer after offer  ${items[ii]}`);
//     ii++;
// }

let items = [250, 645, 300, 900, 50];

for (let f = 0; f < items.length; f++) {
  console.log(`the  actual item ${f} prise is ${items[f]}`);
  let offer = items[f] / 10;
  items[f] = items[f] - offer;
  console.log(`item ${f} prise fter offer is ${items[f]}`);
}
console.log(items);
//ARRAY METHODS >>.. Push(): add to end, Pop(): delete from end & return, toString(): converts array to string,
// push(): i.e varriable.push("ADD");
let vegitables = ["patato", "tamato", "cucumber", "cabbage", "chilli"];
console.log(vegitables);
vegitables.push("carrot"); //PRINT CARROT IN THE END WITHOUT DELEATING IT
console.log(vegitables);

// pop(): i.e varriable.pop();

let vegitable = ["patato", "tamato", "cucumber", "cabbage", "chilli"];
console.log(vegitable);
let deleateditems = vegitable.pop();
console.log(vegitable); //DELEATS ITEMS FROM THE END
console.log(deleateditems); //you can also print the deleated items

//toString():
//make
let pariba = ["patato", "tamato", "cucumber", "cabbage", "chilli"];
let smarkses = [98, 55, 97, 82, 92];
pariba.toString();
console.log(pariba.toString());
console.log(smarkses.toString());

//concat():.IT IS USED TO JOIN MULTIPLE ARRAYS & RETURNS RESULT

let goats_heros = ["khabib", "roman", "mahmood", "Ronaldo", "virat"];
let marvel_heros = ["ironman", "batman", "spiderman", "thor"];
let heros_food = ["patato", "tamato", "cucumber", "cabbage", "chilli"];
console.log(goats_heros.concat(marvel_heros, heros_food));
//                             OR
let heros_combined = heros_food.concat(marvel_heros, goats_heros);
console.log(heros_combined); //you can write like this too

// unshift();   ADD TO START

let marvel_hero = ["ironman", "batman", "spiderman", "thor"];
// marvel_hero.unshift("hulk");               //unshift IS USED TO ONLY ADD ELEMENT IN THE START WITHOUT DELEAYING
// console.log(marvel_hero );
// marvel_hero.shift()
console.log(marvel_hero);
let deleated_item = marvel_hero.shift(); //It is used to deleat items from the end
console.log(marvel_hero);
console.log(deleated_item);

//slice():
let cold_drinks = ["sprite", "thumbsup", "coca cola", "spice up", "sting"];

console.log(cold_drinks.slice(1, 3));

//splice(): CHANGE ORIGNAL ARRAY (ADD,REMOVE,REPLACE) : splice(startidx,delcount,newEl1)

// let arrrr = [1,2,3,4,5,6];
// arrrr.splice(1,1,101,102);
// console.log(arrrr);

//ADD ELEMENT:
let numss = [1, 2, 3, 4, 5, 6];
numss.splice(2, 0, 1222); //ADD ELEMENTS WITHOUT DELEATING
console.log("ADD ELEMENTS BEFORE 3 = 1222 OF ", numss);

//DELEAT ELEMENT:
let seno = [100, 200, 300, 400, 500, 600, 700, 800];
seno.splice(3, 1);
console.log("DELEAT ELEMENT FROM INDEX NO 3", seno);

//REPLACE ELEMENT
let marksess = [10, 20, 30, 40, 50];
marksess.splice(2, 1, 90);
console.log("REPLACE ELEMENT FROM INDEX NO 2 TO 90  ", marksess);

//Q/3..>>CREAT AN ARRAY TO STORE COMPANIES = ["BLOOMBERG","MICROSOFT","UBRE","GOOGLE","IBM","NETFLIX"];

let companies = ["BLOOMBERG", "MICROSOFT", "UBRE", "GOOGLE", "IBM", "NETFLIX"];

//REMOVING THE FIRST COMPANY FROM THE ARRAY:
companies.shift();
// companies.splice(0,1);
console.log(companies);

//REMOVE UBAR AND ADD OLA IN ITS PLACE:
companies.splice(1, 1, "ola");
console.log(companies);

//ADD AMAZON AT THE END :

companies.push("AMAZON");

// companies.splice(5,0,"AMAZON");
console.log(companies);

//DAY 4 .........>>>>>Chapter 4........................................................................>>>>>>>>>>>>>>
// ............>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>DOM MANUPULATION...............>>>>>>//
//DOM is besically A way to access HTML in JS
console.log("hello");
window.console.log("helo2");

console.dir(document.body); //Used to print the windows document object
console.log(document.body); //Used to print the html body part

// document.body.style.background = ("green");   //This will make body part of the page into green

// Dom manupulation
/*Selecting with ID  
document.getElementById("myld")
*/
let heads = document.getElementById("heads");
console.log(heads); //accessing the id by .log
console.dir(heads); //accessing thr objects by .dir

/*Selecting with class 
document.getElementsByCllassName("myld")
*/
let hno4 = document.getElementsByClassName("hno4"); //use s after element
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
console.log(document.body.firstChild); //will print text that is a hidden node
console.log(document.querySelector("div").children); //to access thhe chldren

// INNER TEXT >>>> returns the text conte tt of the element and all its children EX:-

let div = document.querySelector("div");
console.dir(div);

// inner HTML
// let inhtml = document.querySelector("html");
// console.log(inhtml);
//TEXT CONTENT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//in console you can change the div just by div.innerText = "ABCD"

let h3ii = document.querySelector("h3");
console.dir(h3ii); //In console write .... h3ii.innerText = "H3 Heading" //You Can vhange the text style by h3ii innerHTML = "<i>Hello </i>";

//Q/1 ..>> Creat a h2 heading element with text -"Hello javaScript". Append "From Apna College Student" to This using Js

let h2ii = document.querySelector("h2");
h2ii.innerText = h2ii.innerText + "From Apna College"; //Concatinning
console.dir(h2ii);

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

//DAY 8 EVENTS.......................................................................................................

// Node.event = () => {          
//     //handel here
// }
//this is how you can add events in any node

let divs = document.querySelector("#div");
divs.onmouseover = () => {
    console.log(alert("5634"))             
};

let btn = document.querySelector("#btn");
btn.ondblclick = () =>{
    console.log("hello bhai")
};

//Events Object>>>>>>It is a special object that has details about the events.
// Node.event = (e) => {          //E is taken as event,like variable.
//     //handel here
// }
//ex e.target, e.type,e.clientX, e.clintY 

let submit = document.querySelector(".submit");
submit.ondblclick = () => {
    submit.style.backgroundColor="red";
};

let hov= document.querySelector("#love");
hov.onmouseover = () =>{
    console.log(alert("kar liya kaand"));
};
let touch= document.querySelector("#nee");
touch.onmouseover = () => {
    touch.innerText = "kar di na galti";
    console.log(touch);
}; 
//performing two Event using one node .................................
let mul = document.querySelector("#multi");
mul.onmouseover = () => {
console.log("button was hover");
};

//Event using Object.........................................
//its a special object that has a detauls about the event....
/*
node.event=(e) =>{
//handle here
}
e.target,e.type, e.clintX,e.clintY
*/
mul.onclick = (e) => {
    // console.log("button was clicked");
    console.log(e);
    console.log(e.type);
    console.log(e.clientX)
    };
//Event Handeller...Listener.............
//node.eventlistener(event,callbackfunction)
    
let bttn = document.querySelector("#btn5");
bttn.addEventListener("click", (evt) =>{
    console.log("addEventlistener - 1")
});
bttn.addEventListener("click", () =>{
    console.log("addEventlistener - 2")
});
bttn.addEventListener("click", () =>{
    console.log("addEventlistener - 3")
});
bttn.addEventListener("click", () =>{
    console.log("addEventlistener - 4")
});
//Practise project........................
let modei = document.querySelector("#modes");
let body = document.querySelector("body");
let curmode = "light";
modei.addEventListener("click", () => {
    if (curmode === "light"){
        curmode = "dark";
        // document.querySelector("body").style.backgroundColor ="black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        curmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        // document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(curmode);
});