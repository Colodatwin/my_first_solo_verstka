const menu = document.querySelector('.menu__nav')
const menuBtn = document.querySelector('.menu__burger')
const overlay = document.querySelector('.overlay')

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    overlay.classList.toggle('overlay_show')
    body.classList.toggle('lock')

  })
  overlay.addEventListener('click', () => {
    menu.classList.remove('active')
    menuBtn.classList.remove('active')
    overlay.classList.remove('overlay_show')
    body.classList.remove('lock')
  })
  menu.querySelectorAll('.menu__link').forEach(link =>{
    link.addEventListener('click', () =>{
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      overlay.classList.remove('overlay_show')
      body.classList.remove('lock')
    })
  })
}

/*====================================================*/

const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})