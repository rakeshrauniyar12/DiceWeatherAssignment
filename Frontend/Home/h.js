document.querySelector("#button").addEventListener("click",()=>{
    showData()
})
document.querySelector("#btn").addEventListener("click",()=>{
    showData1()
})
let cont=document.querySelector("#main");
let  showData= async()=>{
    let city=document.querySelector("#city").value;
    fetch(`http://localhost:8080/Location/hourly?city=${city}`)
    .then((res)=>{
       return res.json();
      
    })
    .then((res)=>{
        console.log(res);
    })
}
let  showData1= async()=>{
    let city=document.querySelector("#city").value;
    fetch(`http://localhost:8080/Location/hourly?city=${city}`)
    .then((res)=>{
       return res.json();
      
    })
    .then((res)=>{
        console.log(res);
    })
}
