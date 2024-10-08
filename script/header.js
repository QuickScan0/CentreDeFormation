const header=document.querySelector('.header');
if (window.innerWidth >= 768) {
  header.innerHTML=`
   <!--<button class="button" data-text="Awesome">
        <span class="actual-text">&nbsp;uiverse&nbsp;</span>
        <span aria-hidden="true" class="hover-text">&nbsp;uiverse&nbsp;</span>
       </button> -->
       <div class="container">
        <div class="header-bar">
            <h1 class="logo">
            <img class="logoImg" src="img/isliLogo.png" >
            </h1>
            <ul class="slider-menu">
                <li>à propos</li>
                <li>pré-inscription</li>
                <li>Nos Centres</li>
                <li>contact</li>
            </ul>
        </div>
    </div>
  
    `

  }else {
    header.innerHTML=`
     <div class="PhoneHeader">
       <h1 class="logoo">
       <img class="logooImg" src="img/isliLogo.png" >
        </button>
       </h1>
<nav role='navigation'>
		<div id="menuToggle">
			<input type="checkbox" />
			<span></span>
			<span></span>
			<span></span>
			<ul id="menu">
				<a href="#">
					<li>à propos</li>
				</a>
				<a href="#">
					<li>pré-inscription</li>
				</a>
				<a href="#">
					<li>Nos Centres</li>
				</a>
				<a href="#">
					<li>Contact</li>
				</a>
			</ul>
		</div>
	</nav>
     </div>
     `
  }
  