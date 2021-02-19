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

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n(function () {\n  var pageClass = {\n    HEADER_NOJS: 'header--nojs',\n    MAIN_CONTAINER_NOJS: 'main__container--nojs',\n    FILTER_INPUT_NOJS: 'filter__inputs--nojs',\n    HEADER_OPEN: 'header--open',\n    BTN_MENU: 'js-btn-menu',\n    ACCORDION_CLASS: 'js-btn-accordion',\n    ACTIVE_CLASS: '--active'\n  };\n  var header = document.querySelector('.js-header');\n  var mainContainer = document.querySelectorAll('.js-main-container');\n  var btnMenu = document.querySelector('.js-btn-menu');\n  var accordionBlock = document.querySelector('.js-accordion');\n  var accordionBtn = document.querySelectorAll('.js-btn-accordion');\n  var accordionItems = document.querySelectorAll('.js-accordion-item');\n  var rangeInput = document.querySelector('.js-range-input');\n\n  var toggleMenuHandler = function toggleMenuHandler() {\n    header.classList.toggle(pageClass.HEADER_OPEN);\n  };\n\n  var toggleAccordionHandler = function toggleAccordionHandler(evt) {\n    if (evt.target.classList.contains(pageClass.ACCORDION_CLASS)) {\n      var target = evt.target.parentElement;\n      var activeClass = \"\".concat(target.dataset.class).concat(pageClass.ACTIVE_CLASS);\n\n      if (target.classList.contains(activeClass)) {\n        target.classList.remove(activeClass);\n      } else {\n        var _iterator = _createForOfIteratorHelper(accordionItems),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var item = _step.value;\n\n            if (item.classList.contains(activeClass)) {\n              item.classList.remove(activeClass);\n            }\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        target.classList.add(activeClass);\n      }\n    }\n  };\n\n  if (accordionBlock) {\n    var _iterator2 = _createForOfIteratorHelper(accordionBtn),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var btn = _step2.value;\n        btn.addEventListener('click', toggleAccordionHandler);\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  }\n\n  if (rangeInput) {\n    rangeInput.classList.remove(pageClass.FILTER_INPUT_NOJS);\n  }\n\n  var _iterator3 = _createForOfIteratorHelper(mainContainer),\n      _step3;\n\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var item = _step3.value;\n      item.classList.remove(pageClass.MAIN_CONTAINER_NOJS);\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n\n  header.classList.remove(pageClass.HEADER_NOJS);\n  btnMenu.addEventListener('click', toggleMenuHandler);\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvbWFpbi5qcz8wNDkzIl0sIm5hbWVzIjpbInBhZ2VDbGFzcyIsIkhFQURFUl9OT0pTIiwiTUFJTl9DT05UQUlORVJfTk9KUyIsIkZJTFRFUl9JTlBVVF9OT0pTIiwiSEVBREVSX09QRU4iLCJCVE5fTUVOVSIsIkFDQ09SRElPTl9DTEFTUyIsIkFDVElWRV9DTEFTUyIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1haW5Db250YWluZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRuTWVudSIsImFjY29yZGlvbkJsb2NrIiwiYWNjb3JkaW9uQnRuIiwiYWNjb3JkaW9uSXRlbXMiLCJyYW5nZUlucHV0IiwidG9nZ2xlTWVudUhhbmRsZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVBY2NvcmRpb25IYW5kbGVyIiwiZXZ0IiwidGFyZ2V0IiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwiYWN0aXZlQ2xhc3MiLCJkYXRhc2V0IiwiY2xhc3MiLCJyZW1vdmUiLCJpdGVtIiwiYWRkIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQ0FBQyxZQUFNO0FBQ0wsTUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxlQUFXLEVBQUUsY0FERztBQUVoQkMsdUJBQW1CLEVBQUUsdUJBRkw7QUFHaEJDLHFCQUFpQixFQUFFLHNCQUhIO0FBSWhCQyxlQUFXLEVBQUUsY0FKRztBQUtoQkMsWUFBUSxFQUFFLGFBTE07QUFNaEJDLG1CQUFlLEVBQUUsa0JBTkQ7QUFPaEJDLGdCQUFZLEVBQUU7QUFQRSxHQUFsQjtBQVVBLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWY7QUFDQSxNQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsb0JBQTFCLENBQXRCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBaEI7QUFDQSxNQUFNSSxjQUFjLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUF2QjtBQUNBLE1BQU1LLFlBQVksR0FBR04sUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FBckI7QUFDQSxNQUFNSSxjQUFjLEdBQUdQLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsb0JBQTFCLENBQXZCO0FBQ0EsTUFBTUssVUFBVSxHQUFHUixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQW5COztBQUVBLE1BQU1RLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QlYsVUFBTSxDQUFDVyxTQUFQLENBQWlCQyxNQUFqQixDQUF3QnBCLFNBQVMsQ0FBQ0ksV0FBbEM7QUFDRCxHQUZEOztBQUlBLE1BQU1pQixzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLEdBQUQsRUFBUztBQUN0QyxRQUFJQSxHQUFHLENBQUNDLE1BQUosQ0FBV0osU0FBWCxDQUFxQkssUUFBckIsQ0FBOEJ4QixTQUFTLENBQUNNLGVBQXhDLENBQUosRUFBOEQ7QUFDNUQsVUFBTWlCLE1BQU0sR0FBR0QsR0FBRyxDQUFDQyxNQUFKLENBQVdFLGFBQTFCO0FBQ0EsVUFBTUMsV0FBVyxhQUFNSCxNQUFNLENBQUNJLE9BQVAsQ0FBZUMsS0FBckIsU0FBNkI1QixTQUFTLENBQUNPLFlBQXZDLENBQWpCOztBQUNBLFVBQUlnQixNQUFNLENBQUNKLFNBQVAsQ0FBaUJLLFFBQWpCLENBQTBCRSxXQUExQixDQUFKLEVBQTRDO0FBQzFDSCxjQUFNLENBQUNKLFNBQVAsQ0FBaUJVLE1BQWpCLENBQXdCSCxXQUF4QjtBQUNELE9BRkQsTUFFTztBQUFBLG1EQUNZVixjQURaO0FBQUE7O0FBQUE7QUFDTCw4REFBaUM7QUFBQSxnQkFBeEJjLElBQXdCOztBQUMvQixnQkFBSUEsSUFBSSxDQUFDWCxTQUFMLENBQWVLLFFBQWYsQ0FBd0JFLFdBQXhCLENBQUosRUFBMEM7QUFDeENJLGtCQUFJLENBQUNYLFNBQUwsQ0FBZVUsTUFBZixDQUFzQkgsV0FBdEI7QUFDRDtBQUNGO0FBTEk7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNTEgsY0FBTSxDQUFDSixTQUFQLENBQWlCWSxHQUFqQixDQUFxQkwsV0FBckI7QUFDRDtBQUNGO0FBQ0YsR0FmRDs7QUFpQkEsTUFBSVosY0FBSixFQUFvQjtBQUFBLGdEQUNGQyxZQURFO0FBQUE7O0FBQUE7QUFDbEIsNkRBQThCO0FBQUEsWUFBckJpQixHQUFxQjtBQUM1QkEsV0FBRyxDQUFDQyxnQkFBSixDQUFxQixPQUFyQixFQUE4Qlosc0JBQTlCO0FBQ0Q7QUFIaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUluQjs7QUFFRCxNQUFJSixVQUFKLEVBQWdCO0FBQ2RBLGNBQVUsQ0FBQ0UsU0FBWCxDQUFxQlUsTUFBckIsQ0FBNEI3QixTQUFTLENBQUNHLGlCQUF0QztBQUNEOztBQWhESSw4Q0FpRFlRLGFBakRaO0FBQUE7O0FBQUE7QUFpREwsMkRBQWdDO0FBQUEsVUFBdkJtQixJQUF1QjtBQUM5QkEsVUFBSSxDQUFDWCxTQUFMLENBQWVVLE1BQWYsQ0FBc0I3QixTQUFTLENBQUNFLG1CQUFoQztBQUNEO0FBbkRJO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0RMTSxRQUFNLENBQUNXLFNBQVAsQ0FBaUJVLE1BQWpCLENBQXdCN0IsU0FBUyxDQUFDQyxXQUFsQztBQUVBWSxTQUFPLENBQUNvQixnQkFBUixDQUF5QixPQUF6QixFQUFrQ2YsaUJBQWxDO0FBQ0QsQ0F2REQiLCJmaWxlIjoiLi9zb3VyY2UvanMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XG4gIGNvbnN0IHBhZ2VDbGFzcyA9IHtcbiAgICBIRUFERVJfTk9KUzogJ2hlYWRlci0tbm9qcycsXG4gICAgTUFJTl9DT05UQUlORVJfTk9KUzogJ21haW5fX2NvbnRhaW5lci0tbm9qcycsXG4gICAgRklMVEVSX0lOUFVUX05PSlM6ICdmaWx0ZXJfX2lucHV0cy0tbm9qcycsXG4gICAgSEVBREVSX09QRU46ICdoZWFkZXItLW9wZW4nLFxuICAgIEJUTl9NRU5VOiAnanMtYnRuLW1lbnUnLFxuICAgIEFDQ09SRElPTl9DTEFTUzogJ2pzLWJ0bi1hY2NvcmRpb24nLFxuICAgIEFDVElWRV9DTEFTUzogJy0tYWN0aXZlJyxcbiAgfTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyJyk7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtbWFpbi1jb250YWluZXInKTtcbiAgY29uc3QgYnRuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4tbWVudScpO1xuICBjb25zdCBhY2NvcmRpb25CbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1hY2NvcmRpb24nKTtcbiAgY29uc3QgYWNjb3JkaW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJ0bi1hY2NvcmRpb24nKTtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYWNjb3JkaW9uLWl0ZW0nKTtcbiAgY29uc3QgcmFuZ2VJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1yYW5nZS1pbnB1dCcpO1xuXG4gIGNvbnN0IHRvZ2dsZU1lbnVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKHBhZ2VDbGFzcy5IRUFERVJfT1BFTik7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQWNjb3JkaW9uSGFuZGxlciA9IChldnQpID0+IHtcbiAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMocGFnZUNsYXNzLkFDQ09SRElPTl9DTEFTUykpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gYCR7dGFyZ2V0LmRhdGFzZXQuY2xhc3N9JHtwYWdlQ2xhc3MuQUNUSVZFX0NMQVNTfWA7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhhY3RpdmVDbGFzcykpIHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBhY2NvcmRpb25JdGVtcykge1xuICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucyhhY3RpdmVDbGFzcykpIHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaWYgKGFjY29yZGlvbkJsb2NrKSB7XG4gICAgZm9yIChsZXQgYnRuIG9mIGFjY29yZGlvbkJ0bikge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQWNjb3JkaW9uSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJhbmdlSW5wdXQpIHtcbiAgICByYW5nZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUocGFnZUNsYXNzLkZJTFRFUl9JTlBVVF9OT0pTKTtcbiAgfVxuICBmb3IgKGxldCBpdGVtIG9mIG1haW5Db250YWluZXIpIHtcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUocGFnZUNsYXNzLk1BSU5fQ09OVEFJTkVSX05PSlMpO1xuICB9XG4gIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKHBhZ2VDbGFzcy5IRUFERVJfTk9KUyk7XG5cbiAgYnRuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1lbnVIYW5kbGVyKTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/js/main.js\n");

/***/ })

/******/ });