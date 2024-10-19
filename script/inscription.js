let inscriptionForm=`
<p class="title">ISLI </p>
<div class="flex">
<label>
    <input required="" placeholder="" type="text" class="input jsName">
    <span>Firstname</span>
</label>

<label>
    <input required="" placeholder="" type="text" class="input jsLastName">
    <span>Lastname</span>
</label>
</div>  
    
<label>
<input required="" placeholder="" type="email" class="input jsEmail">
<span>Email</span>
</label> 

<label>
<input required="" placeholder="" type="text" class="input jsNumero">
<span>Numero</span>
</label>
<label>
<input required="" placeholder="" type="text" class="input jsNiveau">
<span>Niveau</span>
</label>
<label>
<input required="" placeholder="" type="text" class="input jsFormation">
<span>Matiere/langue/Formation</span>
</label>
<button class="confirm">Confirmer</button>
`;
document.querySelector('.form').innerHTML=inscriptionForm;
let form=[{
 
} ];


document.querySelector('.confirm').addEventListener('click',()=>{
    form=[{
        Name:`${document.querySelector('.jsName').value}`,
        LastName: document.querySelector('.jsLastName').value,
        Email: document.querySelector('.jsEmail').value,
        Numero: document.querySelector('.jsNumero').value,
        Niveau: document.querySelector('.jsNiveau').value,
        Formation: document.querySelector('.jsFormation').value
    } ];
   console.log(form)
})
