const header=document.querySelector('.header');
document.addEventListener('DOMContentLoaded', function() {
  var menuButton = document.getElementById('menuButton');
  var nav = document.getElementById('nav');

  menuButton.addEventListener('click', function() {
      nav.classList.toggle('show');
  });

  window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
          nav.classList.remove('show');
      }
  });
});
if (window.innerWidth >= 768) {
  header.innerHTML=`
   <!--<button class="button" data-text="Awesome">
        <span class="actual-text">&nbsp;uiverse&nbsp;</span>
        <span aria-hidden="true" class="hover-text">&nbsp;uiverse&nbsp;</span>
       </button> -->
       <div class="container">
        <div class="header-bar">
            <h1 class="logo">
            <a href="index.html"><img class="logoImg" src="img/isliLogo.png" ></a>
            </h1>
            <ul class="slider-menu">
                <li><a href="index.html">à propos</a></li>
                <li><a href="inscription.html">pré-inscription</a></li>
                <li><a href="location.html">Location</a></li>
                <li><a href="contact.html">contact</a></li>
            </ul>
        </div>
    </div>
  
    `

  }else {
    header.classList.add('headerr');
    document.querySelector('.headerr').innerHTML=`
    <a href="index.html"><img src="img/isliLogo.png" alt="Logo" class="logoo"></a>
    <button class="menu-button" id="menuButton">☰</button>
    <nav class="nav" id="nav">
       <a href="index.html"> <button>à propos</button></a>
       <a href="inscription.html"><button>pré-inscription</button></a>
       <a href="location.html"> <button>Nos Centres</button></a>
       <a href="contact.html"> <button>contact</button></a>
    </nav>
     `
  }
  