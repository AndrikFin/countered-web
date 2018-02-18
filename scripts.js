function showMenu() {
	document.getElementById("js-menu").classList.toggle("js-show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches(".hamburger")) {

		let menu = document.getElementById("js-menu");
		if (menu.classList.contains("js-show")) {
			menu.classList.remove("js-show");
		}
	}
}