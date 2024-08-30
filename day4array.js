//............DAY 4 Chapter 4 .ARRAY >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Array is a collection of items ......

let superheros = ["iron man","thor","spiderman","batman","hulk"];
let smarks = [98,55,97,82,92];
let studentandmarks = ["ironman", 98,"thor",55,"spiderman",97,"batman",82,"hulk",92];
console.log(superheros.length);          //Tells the length of an  array 
console.log(smarks);                    //  Array is a object type 
console.log(studentandmarks);
console.log(smarks[3] , smarks[2]=94);       //we can only  change the array number value outside the array Not on string  
console.log(smarks);      

//LOOPING OVER AN ARRAY >>>>>>>> PRINT ALL ELIMENTS OF AN ARRAY>>>>>>>>.

let fevheros = ["iron man","thor","spiderman","batman","hulk"];
for(let i = 0;i < fevheros.length; i++){                //NOTE use the length of the variable i.e {i < arr.length}
    console.log(fevheros[i]);              //print array in column
}

//for of arr>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let friend = ["GIKI","RAJU","ABDUL","MAHMOOD","DANISH","SAKIB"];
for(let j of friend){
    console.log(j)                             //Print array in column............
    // console.log(j.toLowerCase());
}
//Q/1...>> FOR A GIVEN ARRAY WITH MARKS OF STUDENT -> [85,97,44,37,76,60] FIND THE AVERAGE MARKS OF THE ENTIRE CLASS /+.

let student_marks = [85,97,44,37,76,60] ;
let ans = 0;
for (let k of student_marks){
    ans +=k;
}
let avg = ans/student_marks.length;
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

let items = [250,645,300,900,50];

for(let f = 0; f< items.length ; f++){
    console.log(`the  actual item ${f} prise is ${items[f]}`);
    let offer = items[f]/10;
    items[f] = items[f] - offer ;
    console.log(`item ${f} prise fter offer is ${items[f]}`);
}
console.log(items)
//ARRAY METHODS >>.. Push(): add to end, Pop(): delete from end & return, toString(): converts array to string,
// push(): i.e varriable.push("ADD");
let vegitables = ["patato","tamato","cucumber","cabbage","chilli"];
console.log(vegitables);
vegitables.push("carrot");                //PRINT CARROT IN THE END WITHOUT DELEATING IT
console.log(vegitables);

// pop(): i.e varriable.pop();      

let vegitable = ["patato","tamato","cucumber","cabbage","chilli"];
console.log(vegitable);
let deleateditems = vegitable.pop();
console.log(vegitable);                   //DELEATS ITEMS FROM THE END
console.log(deleateditems);              //you can also print the deleated items

//toString():
//make 
let pariba = ["patato","tamato","cucumber","cabbage","chilli"];
let smarkses = [98,55,97,82,92];
pariba.toString();
console.log(pariba.toString());  
console.log(smarkses.toString());

//concat():.IT IS USED TO JOIN MULTIPLE ARRAYS & RETURNS RESULT

let goats_heros = ["khabib","roman","mahmood","Ronaldo","virat"];
let marvel_heros = ["ironman","batman","spiderman","thor"];
let heros_food = ["patato","tamato","cucumber","cabbage","chilli"];
console.log(goats_heros.concat(marvel_heros,heros_food));
//                             OR
let heros_combined = heros_food.concat(marvel_heros,goats_heros);
console.log(heros_combined );                            //you can write like this too

// unshift();   ADD TO START

let marvel_hero = ["ironman","batman","spiderman","thor"];
// marvel_hero.unshift("hulk");               //unshift IS USED TO ONLY ADD ELEMENT IN THE START WITHOUT DELEAYING
// console.log(marvel_hero );  
// marvel_hero.shift()
console.log(marvel_hero );
let deleated_item =  marvel_hero.shift();         //It is used to deleat items from the end
console.log(marvel_hero );
console.log(deleated_item);

//slice():
let cold_drinks = ["sprite","thumbsup","coca cola","spice up","sting"] ;

console.log(cold_drinks.slice(1,3));

//splice(): CHANGE ORIGNAL ARRAY (ADD,REMOVE,REPLACE) : splice(startidx,delcount,newEl1)

// let arrrr = [1,2,3,4,5,6];
// arrrr.splice(1,1,101,102);
// console.log(arrrr);

//ADD ELEMENT:
let numss = [1,2,3,4,5,6];
numss.splice(2,0,1222);   //ADD ELEMENTS WITHOUT DELEATING
console.log("ADD ELEMENTS BEFORE 3 = 1222 OF ",numss);

//DELEAT ELEMENT:
let seno = [100,200,300,400,500,600,700,800];
seno.splice(3,1)
console.log("DELEAT ELEMENT FROM INDEX NO 3",seno);

//REPLACE ELEMENT
let marksess = [10,20,30,40,50];
marksess.splice(2,1,90)
console.log("REPLACE ELEMENT FROM INDEX NO 2 TO 90  ",marksess);

//Q/3..>>CREAT AN ARRAY TO STORE COMPANIES = ["BLOOMBERG","MICROSOFT","UBRE","GOOGLE","IBM","NETFLIX"];

let  companies = ["BLOOMBERG","MICROSOFT","UBRE","GOOGLE","IBM","NETFLIX"];

//REMOVING THE FIRST COMPANY FROM THE ARRAY:
companies.shift();
// companies.splice(0,1);
console.log(companies);

//REMOVE UBAR AND ADD OLA IN ITS PLACE:
companies.splice(1,1,"ola");
console.log(companies);

//ADD AMAZON AT THE END :

companies.push("AMAZON")

// companies.splice(5,0,"AMAZON");
console.log(companies);







