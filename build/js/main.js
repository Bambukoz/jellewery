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

eval("const pageClass = {\n  HEADER_NOJS: 'header--nojs',\n  HEADER_OPEN: 'header--open',\n  BTN_MENU: 'js-btn-menu',\n};\n\nconst header = document.querySelector('.js-header');\nconst btnMenu = document.querySelector('.js-btn-menu');\n\nconst toggleMenuHandler = () => {\n  header.classList.toggle(pageClass.HEADER_OPEN);\n};\n\nheader.classList.remove(pageClass.HEADER_NOJS);\n\nbtnMenu.addEventListener('click', toggleMenuHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvbWFpbi5qcz8wNDkzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJmaWxlIjoiLi9zb3VyY2UvanMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhZ2VDbGFzcyA9IHtcbiAgSEVBREVSX05PSlM6ICdoZWFkZXItLW5vanMnLFxuICBIRUFERVJfT1BFTjogJ2hlYWRlci0tb3BlbicsXG4gIEJUTl9NRU5VOiAnanMtYnRuLW1lbnUnLFxufTtcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhlYWRlcicpO1xuY29uc3QgYnRuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4tbWVudScpO1xuXG5jb25zdCB0b2dnbGVNZW51SGFuZGxlciA9ICgpID0+IHtcbiAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUocGFnZUNsYXNzLkhFQURFUl9PUEVOKTtcbn07XG5cbmhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKHBhZ2VDbGFzcy5IRUFERVJfTk9KUyk7XG5cbmJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNZW51SGFuZGxlcik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/js/main.js\n");

/***/ })

/******/ });