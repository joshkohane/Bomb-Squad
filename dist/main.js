/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("console.log('WEBPACK IS WORKING')\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    console.log('WEBPACK');\n    const canvas = document.getElementById('game-canvas');\n    const gameStartBtn = document.getElementById('game-start-btn');\n    const gameStart = document.getElementById('game-start-container');\n\n\n    gameStartBtn.addEventListener('click', () => {\n        gameStart.classList.add('hidden')\n    })\n})\n\n//# sourceURL=webpack:///./src/index.js?");
/******/ })()
;