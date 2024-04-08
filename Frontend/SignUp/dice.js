document.querySelector("#main").addEventListener("submit",()=>{
    addUser(event);
})
let userArr=JSON.parse(localStorage.getItem("cart"))||[];

let addUser=  (e)=>{
    e.preventDefault();
    let Name=document.querySelector("#name").value;
    let Email=document.querySelector("#email").value;
    let Mobile_No=document.querySelector("#number").value;
    let Password=document.querySelector("#password").value;
   
    let userData={Name,Email,Mobile_No,Password};
    userArr.push(userData);
    localStorage.setItem("cart",JSON.stringify(userArr));
    console.log(userArr);
}
