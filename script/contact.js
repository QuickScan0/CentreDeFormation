document.querySelector('.container1').innerHTML=`
<div class="contact-container">
            <div class="contactt-info">
                <h2>Restons en Contact</h2>
                <p>Nous serions ravis d'avoir de vos nouvelles. Veuillez utiliser les informations de contact ci-dessous ou remplir le formulaire pour nous contacter.</p>
                <ul>
                    <li>Email : Isli@gmail.com</li>
                </ul>
            </div>
            <div class="contact-form">
                <h2>Envoyez-nous un Message</h2>
                <div class="form">
                    <input type="text" class="name" name="nom" placeholder="Votre Nom" required>
                    <input type="email" class="email" name="email" placeholder="Votre Email" required>
                    <input type="text" class="sujet" name="sujet" placeholder="Sujet" required>
                    <textarea name="message" class="message" placeholder="Votre Message" rows="5" required></textarea>
                    <button class="submit" type="submit">Envoyer le Message</button>
                </div>
            </div>
        </div>
`
let Message={
name:"",
email:"",
sujet:"",
message:""
};
document.querySelector('.submit').addEventListener('click',()=>{
Message.name=document.querySelector('.name').value;
Message.email=document.querySelector('.email').value;
Message.sujet=document.querySelector('.sujet').value;
Message.message=document.querySelector('.message').value;
console.log(Message);
})