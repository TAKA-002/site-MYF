/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_js_common_common_parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/js/common/common_parts.js */ \"./src/modules/js/common/common_parts.js\");\n/* harmony import */ var _modules_js_plugin_config_swiper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/js/plugin/config_swiper.js */ \"./src/modules/js/plugin/config_swiper.js\");\n/*=============================================================================\njavascriptのモジュール\n=============================================================================*/\n//テスト\n//import dev from \"./modules/js/main.js\";\n//dev();\n\n//共通部分の呼び出し\n\n\n_modules_js_common_common_parts_js__WEBPACK_IMPORTED_MODULE_0__.header();\n_modules_js_common_common_parts_js__WEBPACK_IMPORTED_MODULE_0__.footer();\n_modules_js_common_common_parts_js__WEBPACK_IMPORTED_MODULE_0__.toTopBtn();\n_modules_js_common_common_parts_js__WEBPACK_IMPORTED_MODULE_0__.menuBtn();\n\n\n\n/*=============================================================================\ncssのモジュール（scssはgulpでコンパイルのためコメントアウト）\n=============================================================================*/\n\n// import \"./modules/css/style.scss\";\n\n\n//# sourceURL=webpack://site-monphy/./src/index.js?");

/***/ }),

/***/ "./src/modules/js/common/common_parts.js":
/*!***********************************************!*\
  !*** ./src/modules/js/common/common_parts.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"toTopBtn\": () => (/* binding */ toTopBtn),\n/* harmony export */   \"menuBtn\": () => (/* binding */ menuBtn)\n/* harmony export */ });\n//==================================================\n//ヘッダーの共通部分を呼び出す\n//==================================================\n\n//=============\n//ヘッダー\n//=============\nfunction header() {\n  $.ajax({\n    url: \"includes/mod_header.html\",\n    cache: false,\n    dataType: \"html\",\n    success: function (data) {\n      $(\"#header\").html(data);\n    },\n    // error: function (data) {\n    //   $(\"#header\").text(\"えらー\");\n    // },\n  });\n}\n\n//=============\n//フッダー\n//=============\nfunction footer() {\n  $.ajax({\n    url: \"includes/mod_footer.html\",\n    cache: false,\n    dataType: \"html\",\n    success: function (data) {\n      $(\"#footer\").html(data);\n    },\n    // error: function (data) {\n    //   $(\"#footer\").text(\"えらー\");\n    // },\n  });\n}\n\n//=============\n//トップへ戻るボタン\n//=============\nfunction toTopBtn() {\n  $(function () {\n    var toPageTopBtn = $(\"#toPageTop\");\n    toPageTopBtn.hide();\n\n    $(window).scroll(function () {\n      if ($(this).scrollTop() > 100) {\n        toPageTopBtn.fadeIn();\n      } else {\n        toPageTopBtn.fadeOut();\n      }\n    });\n\n    toPageTopBtn.click(function () {\n      $(\"body,html\").animate(\n        {\n          scrollTop: 0,\n        },\n        500\n      );\n    });\n  });\n}\n\n//=============\n//menuボタン\n//=============\nfunction menuBtn() {\n  $(function () {\n    $(document).on(\"click\", \"#menu__btn\", function () {\n      console.log(\"クリックはされている\");\n\n      // #menu_btnに.activeがあるかどうか;\n      if ($(this).hasClass(\"active\")) {\n        // .activeがあるときの処理\n        $(this).removeClass(\"active\");\n        $(this).text(\"MENU\");\n        $(\"#menu\").removeClass(\"open\");\n        $(\".menu__background\").removeClass(\"open\");\n      } else {\n        // .activeがないときの処理\n        $(this).addClass(\"active\");\n        $(this).text(\"CLOSE\");\n        $(\"#menu\").addClass(\"open\");\n        $(\".menu__background\").addClass(\"open\");\n      }\n    });\n\n    // メニューの背景がクリックされたときの処理\n    $(document).on(\"click\", \".menu__background\", function () {\n      // .menu-backgroundに.openがあるかどうか\n      if ($(this).hasClass(\"open\")) {\n        // .openがあるときの処理\n        $(this).removeClass(\"open\");\n        $(\"#menu__btn\").removeClass(\"active\").text(\"MENU\");\n        $(\"#menu\").removeClass(\"open\");\n      }\n    });\n  });\n}\n\n\n//# sourceURL=webpack://site-monphy/./src/modules/js/common/common_parts.js?");

/***/ }),

/***/ "./src/modules/js/plugin/config_swiper.js":
/*!************************************************!*\
  !*** ./src/modules/js/plugin/config_swiper.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mySwiper\": () => (/* binding */ mySwiper)\n/* harmony export */ });\nvar mySwiper = new Swiper(\".swiper-container\", {\n  autoplay: {\n    delay: 0,\n  },\n  loop: true,\n  speed: 10000,\n});\n\n\n//# sourceURL=webpack://site-monphy/./src/modules/js/plugin/config_swiper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;