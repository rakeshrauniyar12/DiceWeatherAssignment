


let cont=document.querySelector("#main");
let  showData= async()=>{
    let city=document.querySelector("#city").value;
    console.log(city)
    fetch(`http://localhost:8080/Location/hourly?city=${city}`)
    .then((res)=>{
       return res.json();
     })
    .then((res)=>{
        console.log(res);
        res.list.forEach((el)=>{
            let div=document.createElement("div");
          div.setAttribute("class","div")
            let p=document.createElement("p");
            p.setAttribute("class","p1")
            p.innerText=`City_Name:- ${city}`;
            let p2=document.createElement("p");
            p2.setAttribute("class","p1")
            p2.innerText=`Average_Daily_Temp:- ${el.main.temp-273.15}`;
            let p3=document.createElement("p");
            p3.setAttribute("class","p1")
            p3.innerText=`Daily_Temp_Min:- ${el.main.temp_min-273.15}`;
            let p4=document.createElement("p");
            p4.setAttribute("class","p1")
            p4.innerText=`Daily_Temp_Max:- ${el.main.temp_max-273.15}`;
            
            div.append(p,p2,p3,p4)
            cont.append(div);
           })
       
    })
}
let  showDataHourly= async()=>{
    let city=document.querySelector("#city1").value;
    fetch(`http://localhost:8080/Location/summary?city=${city}`)
    .then((res)=>{
       return res.json();
      
    })
    .then((res)=>{
        console.log(res);
       
            let div=document.createElement("div");
            div.setAttribute("class","div")
              let p=document.createElement("p");
              p.setAttribute("class","p1")
              p.innerText=`City_Name:- ${city}`;
              let p2=document.createElement("p");
              p2.setAttribute("class","p1")
              p2.innerText=`Average_Daily_Temp:- ${res.main.temp-273.15}`;
              let p3=document.createElement("p");
              p3.setAttribute("class","p1")
              p3.innerText=`Daily_Temp_Min:- ${res.main.temp_min-273.15}`;
              let p4=document.createElement("p");
              p4.setAttribute("class","p1")
              p4.innerText=`Daily_Temp_Max:- ${res.main.temp_max-273.15}`;
              
              div.append(p,p2,p3,p4)
              cont.append(div);
           

    })
   
}
