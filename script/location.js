import { centreLocation } from "./data.js"
let bodyy="";
centreLocation.forEach((centre)=>{
bodyy=bodyy+
`<div class="locationBody">
<p class="Locationtittle">Isli ${centre.name}</p>
<p class="num"> <span class="icon">&#128383;</span>: ${centre.num}</p>
<iframe classe="map" src="${centre.lien}" width="100%" height="300px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>`
})
document.querySelector('.locationBody').innerHTML=bodyy;

