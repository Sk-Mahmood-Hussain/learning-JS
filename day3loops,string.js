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
for(let i of str){                      //THIS LOOPS HELPS US TO BREAK DOWN STRINGS INTO CHAR
    console.log("i of string = ", i);        
    length++;
}
console.log(length);

//for(let key in objVar for ) [for-in Loop]
let student = {
    name : "sk mahmood hussain",
    cgpa : 8.9,
    inpass : true,
    age : 20,
};
for(let j in student){
    console.log( "key = ",j, ", key value = ", student[j], typeof(j));
}

//Q/1......PRINT ALL EVEN NUMBERS FROM 0 TO 100. <<<<<<<<<<

for(let z = 0; z<=100;z++){
    if( z %2 === 0){
        console.log(z);
    }
}

//Q/2........CREAT A GAME WHERE YOU START WITH A ANY RANDOM GAME NUMBER . 
//ASK THE USER TO KEEP GUESSING THE GAME NUM UNTIL THE USER ENTERS CORRECT VALUE.

// let value = 28;
// let nums = prompt("Enter your number");
// while( nums != value){ 
//     nums = prompt("Re Enter your Number");                  || IMP IMP ||
//     }
//         console.log("YOU WON ");

//STRINGS.....................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let strr = "Hussain";
// let ansss = strr.length;
console.log (strr.length);
console.log(strr[0]); //Print H 
//Template Literals
let specialString = `I love you`;
console.log(typeof  specialString)
//use of template Literals.............

let shiyam ={
    class:8,
    study:"bad",
    inpasss:false,
};
console.log("class is " , shiyam.class ," Profamance at study ", shiyam.study, "pass in school", shiyam.inpasss);  //normal print in double Quotations
console.log(`class is ${shiyam.class} profamanse at study ${shiyam.study} pass in school ${shiyam.inpasss}`); 
//String interpolation....................// to creat string by using subsitution placeholder ...
let eeee = `the addition of this num is = ${1+ 40 + 6}`;
console.log(eeee);

//STRINGS METHODS.......>> str.toUpperCase()..>> st.toLowerCase()...>> str.trim() {Remove white space }.............>>>
//str.toUpperCase()
let capit = "mahmood Hussain";
console.log(capit.toUpperCase()); //MAKE STRING TO CAPITAL CASE
console.log(capit);//BUT WILL NAOTE CHANGE THE ORIGNAL STRING ....BECAUSE STRINGS ARE IMMUTABLE
//str.toLowerCase()
let lowcas = "Gulzar E Eram";
console.log(lowcas.toLowerCase());
console.log(lowcas);//BUT WILL NAOTE CHANGE THE ORIGNAL STRING ....BECAUSE STRINGS ARE IMMUTABLE

//str.trim()
let trimm = "                            kese hoo aap                  "; //TRIM ALL THE SPACES FROM THE BEGNING AND FROM THE END .
console.log(trimm.trim());  //USED TO TRIM THE SPACE

//str.slice(start,end?)

let strnum = "0123456789";
console.log(strnum.slice(1,5));
// str1.concat(str2)
let name1 = "Sk Mahmood ";
let name2 = "Hussain " ;
console.log(name2.concat(name1))                 //THERE ARE DIFFERENT WAYS TO CONCAT YOUR STRING
console.log(name1,name2)
console.log(name2 + name1)
console.log("hello " + 123);

// str.replace(searchVal,newval)                    
let stree1 = "wow" ;                               //NOTE IF THE STRING HASS REPEAT CHARECTERS LOKE "HHHII" ,IN CASE OF REPLACEMENT OF "H" WITH "Y" ONLY FIRST H WILL CHANGE i.e YHHII
console.log(stree1.replace("wow","kaddu"));       //you can change the whole string 
console.log(stree1.replace("w","k"));            //you can also change a charecter

/*.>>Q/3..PROMPT THE USER TO ENTER THEIR FULL NAME . GENERATE A USERNAME FOR THEM BASED ON THE INPUT. 
START USERNAME WITH@ FOLLOWED BY THEIR FULL AND ENDING WITH THE FULLNAME LENGTH. EX: @HUSSAIN7
*/

let inp = prompt("Enter your name");
console.log("@"+inp+inp.length);          //USE + SINGH FOR NO SPACE 


//We KNOW IN STRING
/*  str.replace        stree1.replace("wow","kaddu")
    str1.concat(str2)  name2.concat(name1)
    str.slice(start,end?)    strnum = "0123456789"; // strnum.slice(1,5)
    str.trim()
    trimm.trim()         Kese hoo aap                "; 
    str.toLowerCase() lowcas.toLowerCase()
    str.toLowerCase() upcas.toupperCase()
*/

