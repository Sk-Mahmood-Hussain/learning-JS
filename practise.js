let them = document.querySelector("#mode");
let body = document.querySelector("body")
color = "light";
them.addEventListener("click", () =>{
if(color === "light"){
    color = "dark";
    // body.style.backgroundColor="black";
    body.classList.add("dark")
    body.classList.remove("light")
    
}
else{
    color = "light"
    // body.style.backgroundColor="white";
    body.classList.add("light")
    body.classList.remove("dark")
}
console.log(color);
});