import { Formation } from "./data.js ";
let content='';
Formation.forEach(((item)=>{
   content=content+`
    <div class="fifthBodyChildren1">
       <img src="${item.img}" class="langueImg">
       <p class="LangueTest">${item.name}</p>
     </div>
    `

}));
document.querySelector('.fifthBodyChildren').innerHTML=content;