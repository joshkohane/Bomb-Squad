/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./src/timer.js\");\n \n \n class Game {\n     constructor(word, level) {\n        this.word = word;\n        this.level = level;\n        this.hiddenWord = new Array(this.word.length).fill('_');\n        this.attempted = ['a', 'b', 'c'];\n        this.remaining = Math.floor(this.word.length * 1.5);\n        this.timer = new _timer__WEBPACK_IMPORTED_MODULE_0__.default(this.level);\n\n        this.appendWord();\n        this.appendLetter();\n        this.appendGuesses();\n     }\n\n     appendGuesses() {\n         const remainingContainer = document.getElementById(\"bomb-remaining-number\");\n         let p = document.createElement('p');\n         p.textContent = this.remaining;\n         remainingContainer.appendChild(p);\n     }\n\n     appendLetter() {\n        const letterContainer = document.getElementById(\"bomb-attempted-letters\");\n        let p = document.createElement('p');\n        let letters = this.attempted.map(char => char.toUpperCase());\n        p.textContent = this.attempted.join('');\n        letterContainer.appendChild(p);\n     }\n\n     appendWord() {\n         const word = document.getElementById(\"word-container\");\n         let p = document.createElement('p');\n         p.textContent = this.hiddenWord.join(' ');\n         word.appendChild(p);\n     }\n\n     attempedLetter(char) {\n         if (this.word.includes(char)) {\n            this.word.split('').map(idx => {\n                if (this.word[idx] === char) {\n                    this.hiddenWord[idx] = char;\n                }\n            })\n         } else {\n             this.attempted.push(char);\n             this.remaining = this.remaining - 1;\n             // CALL ANOTHER METHOD THAT SHOWS A BIG RED X\n         }\n     }\n\n     won() {\n         let won = true;\n         this.hiddenWord.forEach(char => {\n             if (char === '_') {\n                 won = false;\n             }\n         })\n         return won;\n     }\n\n     lost() {\n         let lost = false\n         if (this.remaining === 0 || this.timer.timerOver()) {\n             lost = true;\n         }\n         return lost;\n     }\n\n     gameOver() {\n         if (this.won() || this.lost()) {\n             return true;\n         }\n         return false;\n     }\n }\n\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://bomb_squad/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconsole.log('WEBPACK IS WORKING')\n\n;\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    console.log('WEBPACK');\n    const canvas = document.getElementById('game-canvas');\n    const gameStartBtn = document.getElementById('game-start-btn');\n    const gameStart = document.getElementById('game-start-container');\n    const gameWinBtn = document.getElementById('game-win-btn');\n    const gameWin = document.getElementById('game-win-container');\n    const gameLoseBtn = document.getElementById('game-lose-btn');\n    const gameLose = document.getElementById('game-lose-container');\n\n\n    gameStartBtn.addEventListener('click', () => {\n        gameStart.classList.add('hidden')\n    })\n\n    gameWinBtn.addEventListener('click', () => {\n        gameWin.classList.add('hidden')\n    })\n\n    gameLoseBtn.addEventListener('click', () => {\n        gameLose.classList.add('hidden')\n    })\n\n    let game = new _game__WEBPACK_IMPORTED_MODULE_0__.default('active', 1)\n})\n\n//# sourceURL=webpack://bomb_squad/./src/index.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\nclass Timer {\n    constructor(level) {\n        this.level = level;\n        this.timeLeft = 20;\n        this.interval = 1001 - level;\n        \n        this.appendTime();\n        this.warning();\n        setInterval(this.tick.bind(this), this.interval);\n    }\n    \n    appendTime() {\n        const clock = document.getElementById(\"clock-container\");\n        let p = document.createElement('p');\n        p.textContent = this.timeLeft;\n        clock.appendChild(p);\n    }\n\n    tick() {\n        this.timeLeft -= 1;\n    }\n\n    timerOver() {\n        if (this.timeLeft === 0) {\n            return true;\n        }\n        return false;\n    }\n\n    warning() {\n        if (this.timeLeft <= 5) {\n            this.blink();\n        }\n    }\n\n    blink() {\n        const time = document.getElementById(\"time-outer-container\")\n        time.classList.add(\"blink\")\n        setTimeout(time.classList.remove(\"blink\"), 10)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);\n\n//# sourceURL=webpack://bomb_squad/./src/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;