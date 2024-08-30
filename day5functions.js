//..........................JS CHAPTER 1.......DAY 1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\\\\\\\\\\\
//FUNCTION..>> BLOCK OF CODE THAT PERFORMS A SPACFIC TASK ,CAN BE INVOKED WHENEVER NEEDED
/* function defination                              function call 
function functionName(){                      functionName();
    do some work
}*/

//Defining a function........
function college(){
    console.log("i am hussain !");
    console.log("I Love You");
}
//CALLING A FUNCTION.........
college();

//PARAMEATERS & ARGUMENTS  -> INPUT
function school(greeting,n){ //parameters //they are local variables
    console.log("kkyfvh",greeting,n)
}
school("hello bhai kese ho aap",1000)    //arguments

//ANOTHER EXAMPLE............ADDITION OF TWO NUMBERS

function numbe(number1,number2){
    // console.log(number1+number2);   you can use return keywords for this but you have to define the concept i.e
    sum = number1+number2;
    return sum;           //LAST LINE OF A FUNCTION DEFINATION
}
sum = numbe(1000,2000);  //you can directly use the define variable 
console.log(sum);
sum = numbe(5000,2000);  
console.log(sum);
let val = numbe(100,200);
console.log(val);
let anothe =numbe(40,500);            //This is how you can use function
console.log(anothe);

//ARROW FUNCTION =>  ........ COMPACT WAY OF WRITING A FUNCTION 
/*
const functionName = (param1,param2) => {
    //do some work
    } 
*/
const nums = (numss1,numss2) =>{
    ans = numss1+numss2; 
    console.log("bhai Assalamu alaikum")
return ans;
}
let addd = nums(5,6);
console.log(ans)

//MULTIPLICATION FUNCTION .......
const multi=(nume1,nume2)=>{
    console.log(nume1*nume2);
}

//BREAF DISCRIPTION........
/*Before Arrow:                           //
hello = function() {
return "Hello World!";
.........................................<<<<<<<<<<<<<<<<<<<<<<<<<<<
With Arrow Function:
hello = () => {
  return "Hello World!";
}
}*/

hello = ()=>"hello bhai";   //It gets shorter! If the function has only one statement, and the 
//                            statement returns a value, you can remove the brackets and the return keyword:


you = ()=>  {
    console.log("hello bhai");     //WE define here so we have to call the function out side the defination
}
you()                       //here you call the function
console.log(you)           // here you print the function defination part

//Q/1..CREAT A FUNCTION USING THE "FUNCTION" KEYWORD THAT TAKES A STRING AS AN ARGUMENT & RETURNS THE NUMBER OF VOWELS IN THE STRING.

function inputss(str){
    // let inp= prompt("Enter your number");
let count =0;
    for (const k of str){
        if (k === "a" || k === "e" || k === "i" || k === "o" || k=== "u"){
                count ++; 
            }
            console.log("The number of vowels are " , count);
}
}
inputss("ino")
//CREAT THE SAME PROGRAM WITH ARROW FUNCTION .....
stri = (dataa) =>{
    let indx = 0;
    for(const p of dataa){
        if(p === "a" || p === "e" ||p === "i" || p === "o" || p === "u"){
        indx++;
    }
}
console.log(indx)    
}
//FOREACH LOOP IN ARRAYS............

//arr.foreach(callFunction)               The forEach() method calls a function for each element in an array.
/* arr.forEach ((val)=>{
    console.log(val);
})*/
let nummys = [1,2,3,4,5,6];                    //REMEMBER YOU ARE DOINNG THIS IN ARRAY
nummys.forEach(function printval(val) {            //NORMAL ARRAY FUNCTION ,,YOU FIRST HAVE TO DECLARED THE ARRAY NORMALLY
    console.log(val);                         //
});

//ARRAY FUNCTION USING ARROW FUNCTION
let newarrs = ["raju","mahmood","jiki",5];  //this is only for array not for strings 
newarrs.forEach((nots,idx)=>{
    console.log(nots,idx,newarrs);  //you can print the index and the array itself
});

//Q/2..FOR A GIVEN ARRAY OF NUMBERS ,PRINT THE SQUARE OF EACH VALUE USING THE FOR EACH LOP.

let squar = [2,3,4,5,6];
squar.forEach((valls)=>{
    valls = valls**2;
    console.log(valls)
});

//Some more methods of array
//MAP..... CREAT A NEW ARRAY WITH THE RESULT OF SOME OPERATIONS .THE VALUE ITS CALLBACK RETURNS ARE USED TO FORM NEW ARRAY
    //arr.map(callbackfnx(val))

let mapss = [100,200,300,400];
let newarray = mapss.map((owl) =>{
    return owl;;
});
console.log(newarray);

/* let arr = arr.filter((val)=>{
    return val%2 === 0;});*/
//Q...filter methods....CREATS A NEW ARRAY ELEMENTS THAT GIVES TRUE FOR A CONDITIONS/FILTER.
//EX:-ALL EVEN ELEMENTS
let aressss = [1,2,3,4,5,6,7,8,9,10];
let evenarr = aressss.filter((mentos)=>{
    return mentos%2 === 0;
});
console.log(aressss);
console.log(evenarr);            //ANOTHER NEW ARRAY...

//REDUCE METODS....... REDUCE ALWAYS RETURN SINGLE VALUE
let mdar =[25,75,50,100];
let cho = mdar.reduce((resultt,values)=>{  //here result is previous value i,e 25 and value is current value i.e 50;
        return resultt>values ? resultt :values ;

});
console.log(cho);

//Q/3...WE ARE GIVEN ARRAY OF MARKS OF STUDENT FILTER OUT OF YHE MARKS OF STUDENTS THAT SCORED 90+

let studt = [40,30,95,100,92,99,96,34,56,90];
let ansee = studt.filter((ones)=>{
    return ones>90;
    
});
console.log(ansee);

/*//Q/4...Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.
*/
let n = prompt("Enter a number");
let ares = [];
for(nes =1;nes<=n;nes++){
    ares[nes-1] = nes; //nes1[0],nes2[1],nes3[2],nes4[3]......nesn[nes-1]
}
console.log("according to the given number the calculation is ",ares)
let anci = ares.reduce((prev,currt)=>{
    return prev + currt;
});
console.log("sum of all  numbers",anci);

let anc = ares.reduce((prev,currt)=>{
    return prev * currt;
});
console.log("factorial/product = ",anci);