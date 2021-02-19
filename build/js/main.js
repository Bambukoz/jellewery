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

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n(function () {\n  var pageClass = {\n    PAGE__LOCKED: 'page--locked',\n    HEADER_NOJS: 'header--nojs',\n    MAIN_CONTAINER_NOJS: 'main__container--nojs',\n    FILTER_INPUT_NOJS: 'filter__inputs--nojs',\n    HEADER_OPEN: 'header--open',\n    BTN_MENU: 'js-btn-menu',\n    ACCORDION_CLASS: 'js-btn-accordion',\n    ACTIVE_CLASS: '--active',\n    FILTER_ACTIVE: 'filter--active'\n  };\n  var page = document.querySelector('.js-page');\n  var header = document.querySelector('.js-header');\n  var mainContainer = document.querySelectorAll('.js-main-container');\n  var btnMenu = document.querySelector('.js-btn-menu');\n  var accordionBlock = document.querySelector('.js-accordion');\n  var accordionBtn = document.querySelectorAll('.js-btn-accordion');\n  var accordionItems = document.querySelectorAll('.js-accordion-item');\n  var rangeInput = document.querySelector('.js-range-input');\n  var filterBlock = document.querySelector('.js-filter');\n  var filterForm = document.querySelector('.js-filter-form');\n  var filterOpenBtn = document.querySelector('.js-btn-filter-open');\n  var filterCloseBtn = document.querySelector('.js-btn-filter-close');\n\n  var toggleMenuHandler = function toggleMenuHandler() {\n    header.classList.toggle(pageClass.HEADER_OPEN);\n  };\n\n  var toggleAccordionHandler = function toggleAccordionHandler(evt) {\n    if (evt.target.classList.contains(pageClass.ACCORDION_CLASS)) {\n      var target = evt.target.parentElement;\n      var activeClass = \"\".concat(target.dataset.class).concat(pageClass.ACTIVE_CLASS);\n\n      if (target.classList.contains(activeClass)) {\n        target.classList.remove(activeClass);\n      } else {\n        var _iterator = _createForOfIteratorHelper(accordionItems),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var item = _step.value;\n\n            if (item.classList.contains(activeClass)) {\n              item.classList.remove(activeClass);\n            }\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        target.classList.add(activeClass);\n      }\n    }\n  };\n\n  var closeFilterHandler = function closeFilterHandler() {\n    filterBlock.classList.remove(pageClass.FILTER_ACTIVE);\n    page.classList.remove(pageClass.PAGE__LOCKED);\n    filterOpenBtn.addEventListener('click', openFilterHandler);\n    filterCloseBtn.removeEventListener('click', closeFilterHandler);\n  };\n\n  var openFilterHandler = function openFilterHandler() {\n    filterBlock.classList.add(pageClass.FILTER_ACTIVE);\n    page.classList.add(pageClass.PAGE__LOCKED);\n    filterCloseBtn.removeEventListener('click', closeFilterHandler);\n    filterCloseBtn.addEventListener('click', closeFilterHandler);\n  };\n\n  if (accordionBlock) {\n    var _iterator2 = _createForOfIteratorHelper(accordionBtn),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var btn = _step2.value;\n        btn.addEventListener('click', toggleAccordionHandler);\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  }\n\n  if (rangeInput) {\n    rangeInput.classList.remove(pageClass.FILTER_INPUT_NOJS);\n  }\n\n  var _iterator3 = _createForOfIteratorHelper(mainContainer),\n      _step3;\n\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var item = _step3.value;\n      item.classList.remove(pageClass.MAIN_CONTAINER_NOJS);\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n\n  header.classList.remove(pageClass.HEADER_NOJS);\n\n  if (filterOpenBtn) {\n    filterOpenBtn.addEventListener('click', openFilterHandler);\n  }\n\n  if (filterForm) {\n    filterForm.addEventListener('submit', closeFilterHandler);\n  }\n\n  btnMenu.addEventListener('click', toggleMenuHandler);\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvbWFpbi5qcz8wNDkzIl0sIm5hbWVzIjpbInBhZ2VDbGFzcyIsIlBBR0VfX0xPQ0tFRCIsIkhFQURFUl9OT0pTIiwiTUFJTl9DT05UQUlORVJfTk9KUyIsIkZJTFRFUl9JTlBVVF9OT0pTIiwiSEVBREVSX09QRU4iLCJCVE5fTUVOVSIsIkFDQ09SRElPTl9DTEFTUyIsIkFDVElWRV9DTEFTUyIsIkZJTFRFUl9BQ1RJVkUiLCJwYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwibWFpbkNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidG5NZW51IiwiYWNjb3JkaW9uQmxvY2siLCJhY2NvcmRpb25CdG4iLCJhY2NvcmRpb25JdGVtcyIsInJhbmdlSW5wdXQiLCJmaWx0ZXJCbG9jayIsImZpbHRlckZvcm0iLCJmaWx0ZXJPcGVuQnRuIiwiZmlsdGVyQ2xvc2VCdG4iLCJ0b2dnbGVNZW51SGFuZGxlciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZUFjY29yZGlvbkhhbmRsZXIiLCJldnQiLCJ0YXJnZXQiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJhY3RpdmVDbGFzcyIsImRhdGFzZXQiLCJjbGFzcyIsInJlbW92ZSIsIml0ZW0iLCJhZGQiLCJjbG9zZUZpbHRlckhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib3BlbkZpbHRlckhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxDQUFDLFlBQU07QUFDTCxNQUFNQSxTQUFTLEdBQUc7QUFDaEJDLGdCQUFZLEVBQUUsY0FERTtBQUVoQkMsZUFBVyxFQUFFLGNBRkc7QUFHaEJDLHVCQUFtQixFQUFFLHVCQUhMO0FBSWhCQyxxQkFBaUIsRUFBRSxzQkFKSDtBQUtoQkMsZUFBVyxFQUFFLGNBTEc7QUFNaEJDLFlBQVEsRUFBRSxhQU5NO0FBT2hCQyxtQkFBZSxFQUFF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QTRCLFFBQTVCLEVBQXNDRCxrQkFBdEM7QUFDRDs7QUFFRHZCLFNBQU8sQ0FBQ3dCLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDZixpQkFBbEM7QUFDRCxDQXBGRCIsImZpbGUiOiIuL3NvdXJjZS9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcbiAgY29uc3QgcGFnZUNsYXNzID0ge1xuICAgIFBBR0VfX0xPQ0tFRDogJ3BhZ2UtLWxvY2tlZCcsXG4gICAgSEVBREVSX05PSlM6ICdoZWFkZXItLW5vanMnLFxuICAgIE1BSU5fQ09OVEFJTkVSX05PSlM6ICdtYWluX19jb250YWluZXItLW5vanMnLFxuICAgIEZJTFRFUl9JTlBVVF9OT0pTOiAnZmlsdGVyX19pbnB1dHMtLW5vanMnLFxuICAgIEhFQURFUl9PUEVOOiAnaGVhZGVyLS1vcGVuJyxcbiAgICBCVE5fTUVOVTogJ2pzLWJ0bi1tZW51JyxcbiAgICBBQ0NPUkRJT05fQ0xBU1M6ICdqcy1idG4tYWNjb3JkaW9uJyxcbiAgICBBQ1RJVkVfQ0xBU1M6ICctLWFjdGl2ZScsXG4gICAgRklMVEVSX0FDVElWRTogJ2ZpbHRlci0tYWN0aXZlJyxcbiAgfTtcblxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBhZ2UnKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhlYWRlcicpO1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLW1haW4tY29udGFpbmVyJyk7XG4gIGNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnRuLW1lbnUnKTtcbiAgY29uc3QgYWNjb3JkaW9uQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYWNjb3JkaW9uJyk7XG4gIGNvbnN0IGFjY29yZGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1idG4tYWNjb3JkaW9uJyk7XG4gIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWFjY29yZGlvbi1pdGVtJyk7XG4gIGNvbnN0IHJhbmdlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcmFuZ2UtaW5wdXQnKTtcbiAgY29uc3QgZmlsdGVyQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZmlsdGVyJyk7XG4gIGNvbnN0IGZpbHRlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZmlsdGVyLWZvcm0nKTtcbiAgY29uc3QgZmlsdGVyT3BlbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4tZmlsdGVyLW9wZW4nKTtcbiAgY29uc3QgZmlsdGVyQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnRuLWZpbHRlci1jbG9zZScpO1xuXG4gIGNvbnN0IHRvZ2dsZU1lbnVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKHBhZ2VDbGFzcy5IRUFERVJfT1BFTik7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQWNjb3JkaW9uSGFuZGxlciA9IChldnQpID0+IHtcbiAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMocGFnZUNsYXNzLkFDQ09SRElPTl9DTEFTUykpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gYCR7dGFyZ2V0LmRhdGFzZXQuY2xhc3N9JHtwYWdlQ2xhc3MuQUNUSVZFX0NMQVNTfWA7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhhY3RpdmVDbGFzcykpIHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBhY2NvcmRpb25JdGVtcykge1xuICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucyhhY3RpdmVDbGFzcykpIHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xvc2VGaWx0ZXJIYW5kbGVyID0gKCkgPT4ge1xuICAgIGZpbHRlckJsb2NrLmNsYXNzTGlzdC5yZW1vdmUocGFnZUNsYXNzLkZJTFRFUl9BQ1RJVkUpO1xuICAgIHBhZ2UuY2xhc3NMaXN0LnJlbW92ZShwYWdlQ2xhc3MuUEFHRV9fTE9DS0VEKTtcbiAgICBmaWx0ZXJPcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkZpbHRlckhhbmRsZXIpO1xuICAgIGZpbHRlckNsb3NlQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGaWx0ZXJIYW5kbGVyKTtcbiAgfTtcblxuICBjb25zdCBvcGVuRmlsdGVySGFuZGxlciA9ICgpID0+IHtcbiAgICBmaWx0ZXJCbG9jay5jbGFzc0xpc3QuYWRkKHBhZ2VDbGFzcy5GSUxURVJfQUNUSVZFKTtcbiAgICBwYWdlLmNsYXNzTGlzdC5hZGQocGFnZUNsYXNzLlBBR0VfX0xPQ0tFRCk7XG4gICAgZmlsdGVyQ2xvc2VCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZpbHRlckhhbmRsZXIpO1xuICAgIGZpbHRlckNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGaWx0ZXJIYW5kbGVyKTtcbiAgfTtcblxuICBpZiAoYWNjb3JkaW9uQmxvY2spIHtcbiAgICBmb3IgKGxldCBidG4gb2YgYWNjb3JkaW9uQnRuKSB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBY2NvcmRpb25IYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBpZiAocmFuZ2VJbnB1dCkge1xuICAgIHJhbmdlSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShwYWdlQ2xhc3MuRklMVEVSX0lOUFVUX05PSlMpO1xuICB9XG4gIGZvciAobGV0IGl0ZW0gb2YgbWFpbkNvbnRhaW5lcikge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShwYWdlQ2xhc3MuTUFJTl9DT05UQUlORVJfTk9KUyk7XG4gIH1cbiAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUocGFnZUNsYXNzLkhFQURFUl9OT0pTKTtcblxuICBpZiAoZmlsdGVyT3BlbkJ0bikge1xuICAgIGZpbHRlck9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRmlsdGVySGFuZGxlcik7XG4gIH1cblxuICBpZiAoZmlsdGVyRm9ybSkge1xuICAgIGZpbHRlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY2xvc2VGaWx0ZXJIYW5kbGVyKTtcbiAgfVxuXG4gIGJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNZW51SGFuZGxlcik7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/js/main.js\n");

/***/ })

/******/ });