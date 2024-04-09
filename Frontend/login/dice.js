document.querySelector("#main").addEventListener("submit",()=>{
    addUser(event);
})
let userArr=JSON.parse(localStorage.getItem("cart"))||[];

let addUser=  (e)=>{
    e.preventDefault();
  
    let Email=document.querySelector("#email").value

    let Password=document.querySelector("#password").value;
    userArr.forEach((el)=>{
         if(el.Email===Email && el.Password===Password){
            alert("You are successfully login");
            window.location.href="http://127.0.0.1:5500/Home/h.html";
         }
    })
    
}
  

