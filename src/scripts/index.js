import "../styles/index.scss";
// import throttle from "lodash.throttle";
// import Swiper from "swiper";
// import { Autoplay } from "swiper/modules";
import { initPortals } from "./portal.js";

import { isMobile } from "./utils.js";
// import initDisclosures from "./disclosure.js";
// import Lenis from 'lenis';

import './range.js';
import './study-modules.js';
import './scroll-up.js';
import './slider.js';
import './comments-sort-button.js';
import './rate-cards.js';
import './faq.js';
import './hero-parallax.js';

window.app = window.app || {};
window.app.hoverMedia = window.matchMedia("(any-hover: hover)");
// window.app.events = new EventEmitter();

document.documentElement.classList.toggle("is-mobile", isMobile.any());

window.app.drawers.init();
document.documentElement.classList.add("is-loaded");
window.app.drawers.get("cabinet-menu").setOptions({ lockPageScroll: false });
window.app.drawers.get("main-menu").setOptions({ lockPageScroll: false });

initThemes();
initPortals();

function initThemes() {
	const elems = document.querySelectorAll(".theme-switch__switch");

	const currentTheme = localStorage.getItem("theme") || "light";
	document.documentElement.setAttribute("data-theme", currentTheme);

	const switchTheme = () => {
		const currentTheme  = localStorage.getItem("theme") || "light";
		const nextTheme = currentTheme === "light" ? "dark" : "light";
		localStorage.setItem("theme", nextTheme);
		document.documentElement.setAttribute("data-theme", nextTheme);
	};

	elems.forEach(elem => elem.addEventListener("click", switchTheme));
}