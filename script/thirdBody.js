document.querySelector('.thirdBody').innerHTML=`
<p>
    Matières (Tous Les Niveaux):
  </p>
  <div class="thirdBodyChildren" id="targetDiv" >
    <div class="thirdBodyChildren1">
     <img class="mathIcon" src="icons/mathIcon.png">
     <p class="thirdBodyChildren1Tittle">Math</p>
    </div>  
    <div class="thirdBodyChildren1">
        <img class="mathIcon" src="icons/physiqueIcon.png">
        <p class="thirdBodyChildren1Tittle">Physique & Chimie</p>
       </div>  
       <div class="thirdBodyChildren1">
        <img class="mathIcon" src="icons/svt.png">
        <p class="thirdBodyChildren1Tittle">SVT</p>
       </div>     
       <div class="thirdBodyChildren1">
        <img class="mathIcon" src="icons/economie.png">
        <p class="thirdBodyChildren1Tittle">Eco-Compta-Orga</p>
       </div>
       <div class="thirdBodyChildren1">
        <img class="mathIcon" src="icons/Plus.png">
        <p class="thirdBodyChildren1Tittle">Tous Les Marière</p>
       </div> 
       <div class="thirdBodyChildren1">
        <img class="mathIcon" src="icons/etudiant.png">
        <p class="thirdBodyChildren1Tittle">+Preparation Bac Libre</p>
       </div>       
`

const target = document.querySelector("#targetDiv");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    target.classList.add("visible");
                } else {
                    target.classList.remove("visible");
                }
            });
        });

        observer.observe(target);
