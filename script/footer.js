import { centreLocation } from "./data.js"
let content='';
centreLocation.forEach((item)=>{
content+=`
<div class="footer-column">
<h3 class="footer-title">Isli ${item.name}</h3>
<div class="footer-info">
    <span class="footer-text">Address: ${item.adress})</span>
</div>
<div class="footer-info">
    <span class="footer-text">Phone: ${item.num}</span>
</div>
<div class="footer-info">
    <span class="footer-text">Email:isli@gmail.com</span>
</div>
</div>
`
});

document.querySelector('.footer').innerHTML=
` <div class="footer-container">
${content}
</div>
<div class="social-icons">
<a href="https://www.instagram.com/isli_school?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
    <img src="icons/insta.png" alt="Instagram">
</a>
<a href="https://www.facebook.com/isli.temara/?locale=ar_AR" target="_blank" rel="noopener noreferrer" aria-label="Like us on Facebook">
    <img src="icons/face.png" alt="Facebook">
</a>
</div>
`;