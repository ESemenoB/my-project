let navMain=document.querySelector(".menu-nav"),navToggle=document.querySelector(".menu-nav__toggle");navMain.classList.remove("menu-nav--nojs"),navToggle.addEventListener("click",(function(){navMain.classList.contains("menu-nav--closed")?(navMain.classList.remove("menu-nav--closed"),navMain.classList.add("menu-nav--opened")):(navMain.classList.add("menu-nav--closed"),navMain.classList.remove("menu-nav--opened"))}));