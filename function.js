const menu = document.querySelector('#mobilemenu');
const menulinks = document.querySelector('.navbarmenu');

const Mobilemenu = () => {
	menu.classList.toggle('is-active');
	menulinks.classList.toggle('active');
}

menu.addEventListener('click',Mobilemenu);

const hightlightmenu =()=>{
	const elem = document.querySelector(".highlight")
	const homemenu = document.querySelector("#homepage");
	const aboutmenu = document.querySelector("#aboutpage");
	const services = document.querySelector("#servicespage");
	const contactmenu = document.querySelector("#contactpage");
	let scroll = window.scrollY
	console.log(scroll);



	if (window.innerWidth > 960 && scroll < 300) {
		homemenu.classList.add('highlight');
		aboutmenu.classList.remove('highlight');
	}
}

window.addEventListener('scroll',hightlightmenu);