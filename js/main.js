/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const pageClass = {\n  HEADER_NOJS: 'header--nojs',\n  MAIN_CONTAINER_NOJS: 'main__container--nojs',\n  FAQ_NOJS: 'faq--nojs',\n  HEADER_OPEN: 'header--open',\n  BTN_MENU: 'js-btn-menu',\n  FAQ_ACTIVE: 'faq__item--active'\n};\n\nconst header = document.querySelector('.js-header');\nconst mainContainer = document.querySelector('.js-main-container');\nconst btnMenu = document.querySelector('.js-btn-menu');\nconst faqBlock = document.querySelector('.js-faq');\nconst accordionBtn = document.querySelectorAll('.js-btn-faq');\nconst accordionItems = document.querySelectorAll('.faq__item');\n\nconst toggleMenuHandler = () => {\n  header.classList.toggle(pageClass.HEADER_OPEN);\n};\n\nheader.classList.remove(pageClass.HEADER_NOJS);\nmainContainer.classList.remove(pageClass.MAIN_CONTAINER_NOJS);\nfaqBlock.classList.remove(pageClass.FAQ_NOJS);\n\nconst toggleAccordionHandler = (evt) => {\n  const target = evt.target.parentElement;\n  if (target.classList.contains(pageClass.FAQ_ACTIVE)) {\n    target.classList.remove(pageClass.FAQ_ACTIVE);\n  } else {\n    for (let item of accordionItems) {\n      if (item.classList.contains(pageClass.FAQ_ACTIVE)) {\n        item.classList.remove(pageClass.FAQ_ACTIVE);\n      }\n    }\n    target.classList.add(pageClass.FAQ_ACTIVE);\n  }\n};\n\nfor (let btn of accordionBtn) {\n  btn.addEventListener('click', toggleAccordionHandler);\n}\n\nbtnMenu.addEventListener('click', toggleMenuHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvbWFpbi5qcz8wNDkzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9zb3VyY2UvanMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhZ2VDbGFzcyA9IHtcbiAgSEVBREVSX05PSlM6ICdoZWFkZXItLW5vanMnLFxuICBNQUlOX0NPTlRBSU5FUl9OT0pTOiAnbWFpbl9fY29udGFpbmVyLS1ub2pzJyxcbiAgRkFRX05PSlM6ICdmYXEtLW5vanMnLFxuICBIRUFERVJfT1BFTjogJ2hlYWRlci0tb3BlbicsXG4gIEJUTl9NRU5VOiAnanMtYnRuLW1lbnUnLFxuICBGQVFfQUNUSVZFOiAnZmFxX19pdGVtLS1hY3RpdmUnXG59O1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyJyk7XG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW1haW4tY29udGFpbmVyJyk7XG5jb25zdCBidG5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJ0bi1tZW51Jyk7XG5jb25zdCBmYXFCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mYXEnKTtcbmNvbnN0IGFjY29yZGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1idG4tZmFxJyk7XG5jb25zdCBhY2NvcmRpb25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXFfX2l0ZW0nKTtcblxuY29uc3QgdG9nZ2xlTWVudUhhbmRsZXIgPSAoKSA9PiB7XG4gIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKHBhZ2VDbGFzcy5IRUFERVJfT1BFTik7XG59O1xuXG5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShwYWdlQ2xhc3MuSEVBREVSX05PSlMpO1xubWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHBhZ2VDbGFzcy5NQUlOX0NPTlRBSU5FUl9OT0pTKTtcbmZhcUJsb2NrLmNsYXNzTGlzdC5yZW1vdmUocGFnZUNsYXNzLkZBUV9OT0pTKTtcblxuY29uc3QgdG9nZ2xlQWNjb3JkaW9uSGFuZGxlciA9IChldnQpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhwYWdlQ2xhc3MuRkFRX0FDVElWRSkpIHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShwYWdlQ2xhc3MuRkFRX0FDVElWRSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBhY2NvcmRpb25JdGVtcykge1xuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKHBhZ2VDbGFzcy5GQVFfQUNUSVZFKSkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUocGFnZUNsYXNzLkZBUV9BQ1RJVkUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChwYWdlQ2xhc3MuRkFRX0FDVElWRSk7XG4gIH1cbn07XG5cbmZvciAobGV0IGJ0biBvZiBhY2NvcmRpb25CdG4pIHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQWNjb3JkaW9uSGFuZGxlcik7XG59XG5cbmJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNZW51SGFuZGxlcik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/js/main.js\n");

/***/ })

/******/ });