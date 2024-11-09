//DOM MANIPULATION 
// >>>>>>>>>>>>>>>>>>>>Attributes>>>>>>>>

// getAttribute( attr)//to get the attributes value.
// setAttribute(attr,value)//To set the attribute val th

let divss = document.querySelector("div");// Remember you neet to call the lone or code you want to access first `here it is div` 
console.log(divss);                                                                                                    //~
//                                                                                                                       |
let id = divss.getAttribute("id");//only after that you can call the attributes value.                                   |
console.log(id);                                                                                                       //|
//                                                                                                                       |
let yest = divss.getAttribute("yest")//NOTE :-to call the attributes value you first need to folow the above explanation | 
console.log(yest)                   // and in let call the attributes name and then call the variable name you used in quarry selector .then so on

let beb = document.querySelector("span");
console.log(beb.getAttribute("class"));  //YOU can write it like that too
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Set attribute>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let bebt = document.querySelector("span");
console.log(bebt.setAttribute("class" , "baby")); //Here we change the class attribute name from oye to baby , but it only change in the brouser inspect element section ,nither in my html file nor in my console, 
// Node.style         //this is used to access the whole style of the div or anything
console.log(divss.style)
divss.style.backgroundColor="green"; //you can change the background color directly from js by camel letter
divss.style.fontSize="18px"; //you can change the background color directly from js by camel letter

//INSERT ELEMENT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//There are different tupes of node.>>> node.append(),prepend(),before(),after().

//node.append(el)>>>>>>Adds at the end of the node(inside)

let newBtn = document.createElement("button");
newBtn.innerText= "click me";                 //using creatElement you can creat an tag or forms in js.
console.log(newBtn);

let yo = document.getElementById("men");
yo.append(newBtn);

//node.prepend()  >>>>>> adds at the start of node(inside)
let you = document.getElementById("men");
you.prepend(newBtn);

//node.before()  >>>>>> adds before the node(outside)
let yous = document.getElementById("men");
yous.before(boyy);
//node.after()  >>>>>> adds after the node(outside)
let yousd = document.getElementById("men");
yousd.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML="<i>i am hussain baby </i>";
console.log(newHeading);

document.querySelector("body").prepend(newHeading);  //IMP

let secHeading = document.createElement("h2");
secHeading.innerText="kesa hai bhai";

document.querySelector("section").after(secHeading);

//node.remove >>>>>>>>REMOVE THE NODE............

let rev = document.querySelector("h2");
rev.remove();

//PRACTISE QUESTIONS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Q1>>,:-- CREATE A NEW BUTTON ELEMENT .HIVE IT A TEXT "CLICK ME" , BACKGROUND COLOR RED & TEXT COLOR OF WHITE. INSERT THE BUTTEN AS THE ELEMENT INSIDE THE BODY TAG;

let butN = document.createElement("button");
butN.innerText="click Me! ";
butN.style.backgroundColor="red";
butN.style.color = "white";

document.querySelector("body").prepend(butN);

//create a <p>tag in HTML give it a class and some styling. now create a new class in CSS and try to append this class to the <p> element did you notice how you overwrite the class name when you add a new one? Solve this problem using classList.

let paragraPH = document.querySelector("p");
// paragraPH.setAttribute("class", "newpara");
paragraPH.classList.add("newpara");