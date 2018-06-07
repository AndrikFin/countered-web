
$(function() {
	createNavMenu()
	upateGamesItem()
	prepareImgViewer()
});



let links = [{ref: "index.html", title: "SHIFTED REALMS"},
{ref: "", title: "GAMES"},
{ref: "company.html", title: "COMPANY"},
{ref: "support.html", title: "SUPPORT"},
{ref: "contacts.html", title: "CONTACTS"}]

let socials = [{ref: "#", src: "images/social_twitter_logo.png", alt: "twitter logo"},
{ref: "#", src: "images/social_facebook_logo.png", alt: "facebook logo"},
{ref: "#", src: "images/social_instagram_logo.png", alt: "instagram logo"}]

function createNavMenu() {
	let img = $("<img>").addClass("logo__img");
	img.attr("src", "images/logo_white.png")
	img.attr("alt", "logo")

	let link = $("<a>");
	link.attr("href", "index.html");
	link.addClass("logo")
	link.append(img)

	$("nav").append(link)

	let humburger = $("<a>")
	humburger.addClass("hamburger")
	humburger.click( function() { showMenu(); return})

	for (var i = 0; i < 3; i++) {
		let div = $("<div>")
		div.addClass("hamburger__line")
		humburger.append(div)
	}
	$("nav").append(humburger)

	let menuList = $("<ul>").addClass("menu").attr("id", "js-menu")
	for (i in links) {
		let linkClass = links[parseInt(i)]
		let link = $("<a>").text(linkClass.title)
		link.attr("href", linkClass.ref)
		menuList.append($("<li>").append(link))
	}
	$("nav").append(menuList)

	let socialList = $("<ul>").addClass("social")
	for (i in socials) {
		let socialsClass = socials[parseInt(i)]
		let link = $("<a>")
		link.attr("href", socialsClass.ref)

		let img = $("<img>")
		img.attr("src", socialsClass.src)
		img.attr("alt", socialsClass.alt)

		link.append(img)
		socialList.append($("<li>").append(link))
	}
	$("nav").append(socialList)
}

function upateGamesItem() {
	$.each($(".menu li a"), function(index, value) {
		let item = $(value)
		if (item.attr("href") == "") {
			item.addClass("games")
			item.click(function (event) { event.preventDefault()});
			let parent = item.parent()
			parent.addClass("menu__games")

			let link = $("<a>").attr("href", "countered.html").text("COUNTERED")
			parent.append($("<ul>").append($("<li>").addClass("menu__games__countered").append(link)))
		}
	})
}


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

function prepareImgViewer() {
	var viewer = new Viewer(document.getElementsByClassName("screenshots")[0], {
		button: true,
		title: false,
		navbar: false,
		toolbar: {
			zoomIn: 0,
			zoomOut: 0,
			oneToOne: 0,
			reset: 0,
			prev: true,
			play: 0,
			next: true,
			rotateLeft: 0,
			rotateRight: 0,
			flipHorizontal: 0,
			flipVertical: 0
		},
		movable: false,
		zoomable: false
	})
	$(viewer.options.container).addClass("pixelated")
}