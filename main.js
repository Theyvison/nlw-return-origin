window.addEventListener("scroll", onScroll)

onscroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll")
  } else {
    navigation.classList.remove("scroll")
  }
}

function showBackToTopButtonOnScroll() {
  let menu = document.querySelector('#menu')
  if (scrollY > 600) {
    backToTopButton.classList.add("show")
  } else {
    backToTopButton.classList.remove("show")
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded")
}

function closeMenu() {
  document.body.classList.remove("menu-expanded")
}

ScrollReveal({
  origin: "top",
  distance: "30px",
}).reveal(`
#home, 
#home img, 
#home .stats
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
`);
