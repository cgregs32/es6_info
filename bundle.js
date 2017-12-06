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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$(document).ready( () => {
  data = [
    {title: "Default Parameters",
    desc: "Remember we had to do these statements to define default parameters? They were okay until the value was 0 and because 0 is falsy in JavaScript it would default to the hard-coded value instead of becoming the value itself. Of course, who needs 0 as a value (#sarcasmfont), so we just ignored this flaw and used the logic OR anyway",
    answer: "No more! In ES6, we can put the default values right in the signature of the functions"},
    {title: "Template Literals",
    desc: "Template literals or interpolation in other languages is a way to output variables in the string. So in ES5 we had to break the string.",
    answer: "Luckily, in ES6 we can use a new syntax ${NAME} inside of the back-ticked string."},
    {title: "Const & let",
    desc: "What is the most important new feature of Let and Const variables?",
    answer: "They are Block Scoped. Var is function scoped."},
    {title: "Benefit of let and const",
    desc: "Name the most important benefit of using let and consts and explain why it is important.",
    answer: "Rather than being scoped to the function, it is scoped to the block. This prevents variables leaking out of blocks into parent functions and even the window in certain cases."},
    {title: "Const & let",
    desc: "Can you redefine a let in the same scope?",
    answer: "No, it will throw an error."},
    {title: "Const & Obj.",
    desc: "Can you reassign a const variable object. Name an example that illustrates this relationship.",
    answer: "You can't reassign them. The same object will always be used and cannot be wiped. Properties updatable. Just like a person you wouldn't change their name or body, but their age be changed."},
    {title: "IIFE",
    desc: "What does an IIFE stand for?",
    answer: "Immediately invoked function expression."}

  ]

  getData(0)

  let count = 1

  $(document).on('click', '#next-info', () => {
    if (count >= data.length) count = 0;
    console.log("click")
    getData(count)
    count++;
  });
});

let getData = (num) => {
  $('.title').hide().text(data[num].title).fadeIn("slow")
  $('#card-content').hide().text(data[num].desc).fadeIn(1000)
  $('#answer').text(data[num].answer)
}


/***/ })
/******/ ]);