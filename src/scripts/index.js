import "../styles/index.scss";
// import throttle from "lodash.throttle";
// import Swiper from "swiper";
// import { Autoplay } from "swiper/modules";

import { isMobile } from "./utils.js";
// import initDisclosures from "./disclosure.js";
// import Lenis from 'lenis';


window.app = window.app || {};
window.app.hoverMedia = window.matchMedia("(any-hover: hover)");
// window.app.events = new EventEmitter();

document.documentElement.classList.toggle("is-mobile", isMobile.any());

window.app.drawers.init();
document.documentElement.classList.add("is-loaded");