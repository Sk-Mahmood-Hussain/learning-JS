// let them = document.querySelector("#mode");
// let body = document.querySelector("body")
// color = "light";
// them.addEventListener("mouseover", () =>{
// if(color === "light"){
//     color = "dark";
//     // body.style.backgroundColor="black";
//     body.classList.add("dark")
//     body.classList.remove("light")
    
// }
// else{
//     color = "light"
//     // body.style.backgroundColor="white";
//     body.classList.add("light")
//     body.classList.remove("dark")
// }
// console.log(color);
// });

// let bttn = document.querySelector("#btn5");
// bttn.addEventListener("mouseover", (evt) =>{
//     console.log("addEventlistener - 1")
// });
// bttn.addEventListener("click", () =>{
//     console.log("addEventlistener - 2")
// });
// bttn.addEventListener("dblclick", () =>{
//     console.log("addEventlistener - 3")
// });
// bttn.addEventListener("click", () =>{
//     console.log("addEventlistener - 4")
// });

//CREAT THE SAME PROGRAM WITH ARROW FUNCTION .....
// const stri = (dataa) =>{
//     let indx = 0;
//     for(const p of dataa){
//         if(p === "a" || p === "e" ||p === "i" || p === "o" || p === "u"){
//         indx++;
//     }
// }
// console.log(indx)    
// }
// const userValue = prompt("Enter a string to count the number of vowels in it");
// let voulcounts = stri(userValue);

// const text = document.querySelector(".str");
// const send = document.querySelector(".smt");
// const data = document.querySelector("#Number");

// const work = () => {
//     let index = 0;
//     for (const i of text.value){
//         if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u" || i === "A" || i === "E" || i === "I" || i === "O" || i === "U"){
//             index++;
//         }
//     }
//     data.innerText = index;

// }
// send.addEventListener("click", work);