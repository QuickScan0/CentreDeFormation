const header=document.querySelector('.header');
if (window.innerWidth >= 768) {
  header.innerHTML=`
   <!-- <button class="button" data-text="Awesome">
        <span class="actual-text">&nbsp;uiverse&nbsp;</span>
        <span aria-hidden="true" class="hover-text">&nbsp;uiverse&nbsp;</span>
       </button>-->
       <div class="container">
        <div class="header-bar">
            <h1 class="logo">
             <button class="button" data-text="Awesome">
                <span class="actual-text">&nbsp;Isli&nbsp;</span>
                <span aria-hidden="true" class="hover-text">&nbsp;Isli&nbsp;</span>
             </button>
            </h1>
            <ul class="slider-menu">
                <li>à propos</li>
                <li>Nos Centres</li>
                <li>pré-inscription</li>
            </ul>
        </div>
    </div>
    `

  }else {
    header.innerHTML=`
    <h1>hello</h1>
     `
  }