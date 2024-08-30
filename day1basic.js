/*
..........................JS CHAPTER 1.......DAY 1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\\\\\\\\\\\
*/
// ................PRINT STATEMENT .............>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log("I am hussain I love you");
console.log("Kese hain aap log");
// ..........................VARIABLE..........>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

fullname="Sk Mahmood Hussain";
console.log("Full name :", fullname); //String variable
age= 24 + 1 ;
console.log("AGE :",age); //NUMBER SYSTEM
X= null;
console.log("NULL is :",X); // NULL VALUE
i_am_mairred= false;
console.log("I am mairrade :", i_am_mairred); //BOOLEN VALUE

// .................. DECLAR VARIABLE .............
//var , let , const.........
// var variable can be re-declared 
let myAge = 20; //  let variable declaration ..variable cannot be re-declared
console.log(myAge) ;

const yourAge= 95;
console.log("AGE :",yourAge); // const variable declaration...you cannot change the variable 

//Block  in JS.......>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

{
    let myAge = 20;
console.log(myAge);
}                        
{                 //YOU CAN ONLY RE DECLARED A VARIABLE ONLY IN A 1 BLOCK 
    let myAge = 20;
console.log(myAge);
}

//>>............PREMMITIVE DATA TYPES ............>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//  NUMBER , STRING , BOOLEAN , UNDEFINED , NULL , BIGLNT , SYMBOL.....

let weight=50;
console.log (typeof(weight)); // Check the data type i.e number
let personName="HUSSAIN"
console.log (typeof(personName)); // Check the data type i.e String
let commited=false;
console.log (typeof(commited)); //Check the data type i.e boolean
let GF;
console.log (typeof(GF)); //Check the data type i.e undefined
X= null;
console.log(typeof(X)); // Check the data type i.e NULL VALUE
let largeNumber= BigInt(1234);
console.log(typeof(largeNumber)); // Check the data type i.e bigint
console.log(largeNumber); 
let charect = Symbol("IAMHUSSAIN");
console.log(typeof(charect)); // Check the data type i.e symbol :.S is capital in Symbol
console.log(charect); 

// ......NON-PREMITIVE...........Objects.....>>>>>>>>>>>>>>>>>>>>>>>>

const student={
fullName:"SK Mahmood Hussain",
age:14,
cgpa: 7.10,
inpass: true,
};
console.log(typeof(studennt));      //Calling The Student Object 
console.log(student); 
console.log(student.age);                //TWO METHODA TO DEFINE OBJECTS......YOU CAN ALSO CALL IT ON THE BROWESER
console.log(student["age"]) ;             //like :- student["fullName"]   , student , student["age"]

student["age"] = student["age"] + 1;                              // You Can Change The value Outside the functrion   
console.log("THE AGE IS NOW INCREASE TO 15 :- ", student["age"]);
 //ANOTHER EXAMPLE ON STRING .................................
student["Name"] = "DR. SK Mahmood Hussain ";    //............(NOTE):- YOU CAN ONLY CHANGE THE CONST OBJECT KEY LIKE AGE, NAME, ETC
console.log(student["Name"]);            //YOu can do that on browser too :- student["fullName"]

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>PRACTISE SET 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// {Q/11}:-  CREAT A CONST OBJECT CALLED "PRODUCT" TO STORE INFORMATION SHOWN IN THE PICTURE ?

const product ={
title: "Ball pen",
rating: 4,
offer:5,
prise:1000,
};
console.log(product);
//  {Q/2}: CREAT A CONST OBJECT CALLED "PROFILE" TO STORE INFORMATION SHOWN IN THE PICTURE?

const profile = {
    userName:"shradhakhapra",
    isfollow: true,
    posts: 195 + " posts",
    followers:596 + " k followers",
    following:4 + " Following",
    threadID:"@shradhakhapra",
    bio:"Apna College | Ex-Microsoft, DRDO To Educate Someone is the highest privilage❤️",

};
console.log(profile);









