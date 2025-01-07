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
let mode = document.querySelector("#modes");
let body = document.querySelector("body");
let curmode = "light";
mode.addEventListener("click", () => {
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