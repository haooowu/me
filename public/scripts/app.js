!function o(r,u,i){function c(e,t){if(!u[e]){if(!r[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(a)return a(e,!0);throw(n=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",n}n=u[e]={exports:{}},r[e][0].call(n.exports,function(t){return c(r[e][1][t]||t)},n,n.exports,o,r,u,i)}return u[e].exports}for(var a="function"==typeof require&&require,t=0;t<i.length;t++)c(i[t]);return c}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,r=(o=t("./debounce"))&&o.__esModule?o:{default:o};function u(t){var e=t.getBoundingClientRect();if(t!==document.getElementById("contactsec"))return e.top<=-10&&0<e.bottom||e.top<=0&&0<e.bottom;t=document.documentElement.scrollTop+window.innerHeight;return document.documentElement.offsetHeight-140<=t||e.bottom<955}r=new Vue({el:"#app",data:function(){return{navFlag:{main:!0,about:!1,skill:!1,work:!1,contact:!1}}},created:function(){"ontouchstart"in window||navigator.maxTouchPoints||document.getElementById("sidenav").classList.add("no-touch")},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:(0,r.default)(function(){this.navFlag.main=u(document.getElementById("main")),this.navFlag.about=u(document.getElementById("aboutsec")),this.navFlag.skill=u(document.getElementById("skillsec")),this.navFlag.work=u(document.getElementById("worksec")),this.navFlag.contact=u(document.getElementById("contactsec")),this.navFlag.contact&&(this.navFlag.work=!1)},30)}});n.default=r},{"./debounce":2}],2:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,e){var n=!1;return function(){n||(t.apply(this,arguments),n=!0,setTimeout(function(){n=!1},e))}}},{}]},{},[1]);