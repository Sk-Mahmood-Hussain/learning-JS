// ..............................DAY 2 OPERATORS IN JAVASCRIPT...>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//ARTIMETIC OPERATORS............................+,-,*,/,%.....................

let a = 10;
let b= 20;
console.log("a = " ,a, "b = ", b )
console.log("a + b= ",a+b);         // "/"USED TO ADD TWO NUMBERS
console.log("a - b= ",a-b);        // "-"USED TO SUBSTRACT TWO NUMBERS
console.log("a * b= ",a*b);       // "*"USED TO MULTIPLAY TWO NUMBERS
console.log("a / b= ",a/b);      // "/"USED TO DEVIDE TWO NUMBERS 
console.log("a % b= ",a%b);     // MODULUS :. FIND THE REMINDER ID TWO NUMBERS 
console.log("a ** b= ",a**b);  // USED TO FIND THE SQUARE OF TWO NUMBERS  :. EXPONENTATION

//Unary Operator................
let c=4;
let d=8;
console.log("c =", c, "& d = ", d);
// c++;             //c = c + 1;
// d--;             //d = d - 1;               
console.log("c=",c);
console.log("d=",d);
/*IMP TO NOTE */
console.log("c++ = ", c++); // :: THIS WILL PRINT PRINT THE ACTUAL VALUE i.e (4)
console.log("c = ",c);  //:: THIS WILL PRINT PRINT THE ADDITION VALUE i.e (5)

//ASIGNMENT OPERATOR>>>>>>>>>>>>>
// =, +=, *=, %= **=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...............

let e = 5;   //Equal to operator (=)......................
 e += 4;    //a =a+4;
console.log("e = ", e)

{
    let e = 10;
    e *= 4;    //e =e*4;
console.log("e = ", e);
}
{
    let e = 6;
    e **=3;
    console.log("e = ", e);

}
//  COMPARISION OPERATORS ....................
//Equal to (==), Not Equal To (!=), Equal to & type (===), Not Equal TO and Type(!==),>,>=,<=,............. 

let f = 5;
let g = 4;
console.log("f(5) == g(4)", f==g);   //THE ANSWER WILL BE ON BOOLEN i.e ON TRUE OR FALSE........
    ++g;
console.log("F==G ",f == g);  //The Answer Wil Be True

{
    let f =10;
    let g =5;
    console.log("f!=g", f!=g ); //Answer will be true
}
{
    let f = 5;
    let g= "5";
    console.log("f==g",f==g);    //Javascript can convert string to number in some terms like this 
    // ..............TO AVOIDE THIS PROBLEM WRITE (===) EQUAL TO & TYPE ......
    console.log("f===g",f===g);  //the answer will be false     
    console.log("f!==g",f!==g);  //the answer will be false     
}
    {
        let a = 5;
        let b = 5;
    console.log("a>b",a>b)   //Answer will be false
    console.log("a>=b",a>=b)   //Answer will be True
    }

// LOGICAL OPERATORS.........>>>>>>>>>>>>>>>>>>>>>
//LOGICAL AND(&&), LOGICAL OR (||), LOGICAL NOR(!).

/*LIKE EXAMPLE*/ 
{
    let a= 6;
    let b= 5;
    //BOTH THE CONDITION MUST HAVE TO BE TRUE...
    let count1 = a>b;  //CONDITION IS TRUE
    let count2 = a ===6;  //CONDITION IS TRUE
    console.log("count1 && count2", count1 && count2);   //ansewr will be true
}
{
let a= 6;
let b= 5;
// let count1 = a<b; //CONDITION IS FALSE
// let count2 = a ===6;  // TRUE CONDITION
console.log("count1 && count2", a<b && a===b);   //ansewr will be FALSE
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
    let a= 6;
    let b= 5;
    //ATLEAST A SINGLE CONDITION MUST BE TRUE TO GET A TRUE RESULT...................
    // let count1 = a<b; //CONDITION IS FALSE
    // let count2 = a ===6;  // TRUE CONDITION
    console.log("count1 || count2" , a<b || a===6);   //ansewr will be TRUE
}
{
    let i= 5;               //T=F & F=T.  i.e TRUE WILL BE FALSE AND FALSE WIL BE TRUE.
    let j= 6 ;
    console.log("!(j>i)",!(j>i));  //ANSWER WILL BE FALSE 
}

//Conditional statement...........

let age =28;
if(age>=18){
    console.log("Person Able to Vote");
}
if (age<18){
    console.log("Person is not eligible for Vote");
}
//ANOTHER EXAMPLE.............

let mode = "light";
let color;
if(mode === "dark"){
    color = "black";
}
else{
    color = "light";
}
console.log("color =" , color);
//Q/1.........FIND ODD AND EVEN NUMBER..........
{
    let num = 5;
    if(num%2===0){
        console.log("Number is even");
    }
    else{
        console.log("Number is odd");
    }
}
// else if ....................
    let themes = "blue";
    let colors;
    if(themes === "dark" ){
        color = "black";
    }
    else if(themes === "blue"){
        color = "blue";
    }
    else if(themes === "green"){
        color = "green";
    }
    else{
        color = "white";
    }

console.log(color);

//TERNARY OPERATOR................................
//CONDITION?TRUE OUTPUT:FALSE OUTPUT

let old = 20//CONDITION // IF?     ELSE:        CAN BE USED LIKE THIS 
let result = old >=18? "aduld" : "Not adult"; //SIMPLER AND COMPACT IF ELSE 
console.log(result);

//SWITCH STATEMENT ...........

const fruit = 'apple';
switch (fruit){
    case 'mangoes':
        console.log("Mangoes are $ 2.05 a pound");
    break;
    case 'apple':
            case 'orange':
        console.log("orange and Apple  are $ 2.05 a pound");
        break;
    default:
        console.log('Sorry We are Out Of Stocks Now ${expr}.');
    }

    //INPUT FROM USER................................... 
    let nameee = prompt("hello");
    console.log(nameee);
// (Q/2)....GET USER TO INPUT A NUMBER USING PROMPT ("ENTER A NUMBER:"). CHECK IF THE NUMBER IS A MULTIPLE OF 5 OR NOT.

let nums = prompt("Enter your  number to check weather the number is multiple of 5 or not. ");
if(nums % 5 === 0 ){
    console.log("the number is multiple of 5" );
}
else{
    console.log("the number is not a multiple of 5");
}

//(Q/3)....WRITE A CODE WHICH CAN GIVE GRADES TO STUDENTS ACCORDING TO TEIR SCORES:
/*  *90-100 A
    *70-89 B
    *60-69 C
    *50-59 D
    *0-49 F
*/

let score = prompt("Enter the Marks (0-100) ");
let greads;
if(score >=90 && score <=100){
    greads = "A";
}
else if( score >=70 && score <=89){
    greads ="B";
}

else if( score >=60 && score <=69){
    greads ="C";
}

else if( score >=50 && score <=59){
    greads ="D";
}

else if( score >=0 && score <=49){
    greads ="F";
}
else{
    console.log("Invalid input");
}
console.log("Student Gread is ", greads);
