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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Mooli&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    box-sizing: border-box;\r\n}\r\nbody{\r\n    overflow-x: hidden;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: rgb(238,174,202);\r\n    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);\r\n    font-family: 'Mooli', sans-serif;\r\n    color: #f5f5ff;\r\n}\r\n\r\n/* Icon */\r\ni{\r\n    margin: 0 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Sections */\r\n.top-bar{\r\n    background-color: #333;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    width: 100vw;\r\n    height: 70px;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 36px;\r\n    padding: 0 20px;\r\n}\r\n.main-section{\r\n    display: flex;\r\n}\r\n.side-panel-container{\r\n    width: 400px;\r\n    height: 100vh;\r\n    background-color: #fff;\r\n    color: #333;\r\n    padding: 20px;\r\n    position: fixed;\r\n    left: -400px;\r\n    transition: 0.3s ease-in-out;\r\n}\r\n.side-panel-container.active{\r\n    left: 0;\r\n}\r\n.task-display{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 20px;\r\n    width: 100%;\r\n}\r\n\r\n/* Elements */\r\n.side-panel-toggle{\r\n    position: absolute;\r\n    right: -10%;\r\n    top: 40%;\r\n    font-weight: bold;\r\n    font-size: 36px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    width: 100px;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    padding: 10px;\r\n}\r\n\r\n/* Side panel icon */\r\n.side-panel-container.active .fa-arrow-left{\r\n    display: inline;\r\n}\r\n.side-panel-container.active .fa-arrow-right{\r\n    display: none;\r\n}\r\n.side-panel-container .fa-arrow-left{\r\n    display: none;\r\n}\r\n.side-panel-container .fa-arrow-right{\r\n    display: inline;\r\n}\r\n/* tasks */\r\n.task{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background-color: #6a6a6a;\r\n    color: #fff;\r\n    width: 90%;\r\n    padding: 15px 25px;\r\n    margin: 10px 0;\r\n}\r\n.task.low{\r\n    border-left: 4px solid green;\r\n}\r\n.task.medium{\r\n    border-left: 4px solid yellow;\r\n}\r\n.task.high{\r\n    border-left: 4px solid red;\r\n}\r\n.new-task-btn{\r\n    border: none;\r\n    background-color: #fff;\r\n    color: #333;\r\n    position: fixed;\r\n    bottom: 10px;\r\n    right: 10px;\r\n    border-radius: 5px;\r\n    padding: 20px 30px;\r\n    cursor: pointer;\r\n    font-family: inherit;\r\n}\r\n\r\n\r\n/* Done Tasks */\r\n.task .fa-check-square{\r\n    display: none;\r\n}\r\n.task.done .fa-check-square{\r\n    display: inline;\r\n}\r\n.task.done .fa-square{\r\n    display: none;\r\n}\r\n.task.done .task-name{\r\n    text-decoration: line-through;\r\n}\r\n.task.done {\r\n    border-left: 4px solid dimgray;\r\n    color: #eee;\r\n    background-color: #56565650;\r\n}\r\n\r\n/* Link Style */\r\na{\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\n\r\n/* List Styles */\r\nul{\r\n    list-style: none;\r\n}\r\nli{\r\n    color: #9d9d9d;\r\n    font-size: 18px;\r\n    margin: 20px 0;\r\n    cursor: pointer;\r\n}\r\nli:hover{\r\n    transform: scale(1.1);\r\n}\r\n.stat-mark{\r\n    color: #333;\r\n    font-weight: bold;\r\n}\r\nli.active{\r\n    color: #333;\r\n}\r\n.stat-mark{\r\n    display: none;\r\n}\r\nli.active .stat-mark{\r\n    display: inline;\r\n}\r\n\r\n/* new task form */\r\n.new-task-btn.open{\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n\r\n.new-task-form{\r\n    display: none;\r\n}\r\n.new-task-btn.open .new-task-form{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    margin-top: 30px;\r\n}\r\ninput{\r\n    outline: none;\r\n    border: none;\r\n    border-bottom: 2px solid #333;\r\n    background-color: transparent;\r\n    color: #333;\r\n}\r\ninput[type=\"submit\"]{\r\n    border: none;\r\n    background-color: #333;\r\n    color: #fff;\r\n    font-family: inherit;\r\n    border-radius: 5px;\r\n}\r\n.btn.close{\r\n    font-family: inherit;\r\n    background-color: rgb(237, 147, 114);\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    border: none;\r\n}\r\n/* new project form */\r\n\r\n.new-project-form{\r\n    display: none;\r\n}\r\n#add-project-btn.open{\r\n    color: #333;\r\n\r\n}\r\n#add-project-btn.open .new-project-form{\r\n    color: #333;\r\n    display: flex;\r\n    gap: 5px;\r\n    margin-top: 10px;\r\n    font-size: 14px;\r\n}\r\n.new-project-form input[type=\"text\"]{\r\n    width: 35%;\r\n}\r\n/* priority buttons */\r\n\r\n.priority-btns{\r\n    margin-top: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    align-items: center;\r\n}\r\n.priority-btns button{\r\n    border: none;\r\n    padding: 5px 10px;\r\n    font-family: inherit;\r\n    color: #333;\r\n    border-radius: 5px;\r\n}\r\n.priority-btns button:active{\r\n    transform: scale(1.1);\r\n}\r\n.low-btn{\r\n    background-color: rgb(125, 167, 125);\r\n}\r\n.med-btn{\r\n    background-color: rgb(207, 207, 131);\r\n}\r\n.high-btn{\r\n    background-color: rgb(203, 108, 108);\r\n}\r\n\r\n/* responsive options */\r\n@media screen and (max-width: 768px) {\r\n    .side-panel-container{\r\n        width: 300px;\r\n        left: -300px;\r\n        font-size: 12px;\r\n    }\r\n    .side-panel-toggle{\r\n        right: -13%;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-app/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-app/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UI: () => (/* binding */ UI)\n/* harmony export */ });\nclass UI{\r\n    static displayTasks(projectName){\r\n        document.getElementById('task-display').innerHTML = ''\r\n        projectName.todos.forEach((task)=> UI.addTaskToList(task))\r\n    }\r\n    static displayProjects(projects){\r\n        projects.forEach((project) => UI.addProjectToList(project))\r\n    }\r\n    static addTaskToList(task){\r\n        const taskList = document.getElementById('task-display')\r\n        const newTask = document.createElement('div')\r\n        newTask.classList.add('task')\r\n        if(task.isDone === true){\r\n            newTask.classList.add('done')\r\n        }\r\n        switch(task.priority){\r\n            case 'high':\r\n                newTask.classList.add('high')\r\n                break;\r\n            case 'medium':\r\n                newTask.classList.add('medium')\r\n                break;\r\n            case 'low':\r\n                newTask.classList.add('low')\r\n                break;\r\n        }\r\n        newTask.innerHTML = `\r\n            <div class=\"task-head\">\r\n                <i class=\"fa fa-check-square check-box\"></i>\r\n                <i class=\"fa fa-square check-box\"></i>\r\n                <span class=\"task-name\">${task.name}</span>\r\n            </div>\r\n            <div class=\"task-control\">\r\n                <span class=\"task-date\">${task.date}</span>\r\n                <i class=\"fa fa-pen\"></i>\r\n                <i class=\"fa fa-times remove\"></i>\r\n            </div>\r\n        `\r\n        taskList.appendChild(newTask)\r\n    }\r\n    static addProjectToList(project){\r\n        const projectList = document.getElementById('projects')\r\n        const newProject = document.createElement('li')\r\n        newProject.classList.add('project-nav')\r\n        newProject.innerHTML = `<span class=\"stat-mark\">></span>${project.name}`\r\n        projectList.appendChild(newProject)\r\n    }\r\n    static removeTask(el){\r\n        el.parentElement.parentElement.remove()\r\n    }\r\n    static checkTask(el){\r\n        el.parentElement.parentElement.classList.toggle('done')\r\n    }\r\n    static toggleProject(el){\r\n        const projectNavs = document.querySelectorAll('.project-nav')\r\n        projectNavs.forEach((nav) =>{\r\n            if(nav.classList.contains('active')){\r\n                nav.classList.remove('active')\r\n            }\r\n        })\r\n        el.classList.add('active')\r\n    }\r\n    static clearFields(){\r\n        document.getElementById('project-name').value = ''\r\n        document.getElementById('task-name').value = ''\r\n        document.getElementById('task-date').value = ''\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-app/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst panelToggle = document.getElementById('panel-toggle')\r\nconst sidePanel = document.getElementById('side-panel')\r\nvar currentProject = undefined\r\nconst projects = _localStorage__WEBPACK_IMPORTED_MODULE_4__.storage.getProjects()\r\n\r\n// Panel toggle\r\npanelToggle.addEventListener('click', ()=>{\r\n    sidePanel.classList.toggle('active')\r\n})\r\n\r\n// Get selected priority\r\nconst priorityBtns = document.querySelectorAll('.priority')\r\nvar priority = undefined\r\n\r\npriorityBtns.forEach((button) => {\r\n    button.addEventListener('click', (e) => {\r\n        priority = e.target.id\r\n    })\r\n})\r\n\r\n// Add task form\r\ndocument.getElementById('new-task-form').addEventListener('submit', (e) =>{\r\n    e.preventDefault()\r\n\r\n    // Get Form Values\r\n    const taskName = document.getElementById('task-name').value\r\n    const taskDate = document.getElementById('task-date').value\r\n    if(taskName === '' || taskDate === '' || priority === undefined){\r\n        alert('please fill all the fields')\r\n    }\r\n    else if(currentProject === undefined){\r\n        alert('Please select a project')\r\n    }\r\n    else{\r\n        currentProject.addTodo(taskName, taskDate, priority)\r\n        addTaskBtn.classList.remove('open')\r\n        _UI__WEBPACK_IMPORTED_MODULE_1__.UI.addTaskToList(currentProject.todos[(currentProject.todos).length - 1])\r\n        _UI__WEBPACK_IMPORTED_MODULE_1__.UI.clearFields()\r\n    }\r\n})\r\n\r\n// Add Project Form\r\ndocument.getElementById('new-project-form').addEventListener('submit', (e) => {\r\n    e.preventDefault()\r\n    // Get form values\r\n    const projectName = document.getElementById('project-name').value\r\n    if(projectName === ''){\r\n        alert('please fill all the fields')\r\n    }\r\n    else{\r\n        const newProject = new _projects__WEBPACK_IMPORTED_MODULE_3__.project(projectName)\r\n        projects.push(newProject)\r\n        _UI__WEBPACK_IMPORTED_MODULE_1__.UI.addProjectToList(newProject)\r\n        addProjectBtn.classList.remove('open')\r\n        _UI__WEBPACK_IMPORTED_MODULE_1__.UI.clearFields()\r\n    }\r\n\r\n})\r\n\r\n// Toggle add task form \r\nconst addTaskBtn = document.getElementById('add-task-btn')\r\naddTaskBtn.addEventListener('click', (e)=>{\r\n    addTaskBtn.classList.add('open')\r\n    if(e.target.classList.contains('close')){\r\n        addTaskBtn.classList.remove('open')\r\n    }\r\n})\r\n// Toggle new project form\r\nconst addProjectBtn = document.getElementById('add-project-btn')\r\naddProjectBtn.addEventListener('click', (e)=>{\r\n    addProjectBtn.classList.add('open')\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Toggle active project\r\nconst projectList = document.getElementById('projects')\r\nprojectList.addEventListener('click', (e)=>{\r\n    if(e.target.classList.contains('project-nav')){\r\n        _UI__WEBPACK_IMPORTED_MODULE_1__.UI.toggleProject(e.target)\r\n        projects.forEach((project)=>{\r\n            if(`>${project.name}` === e.target.textContent){\r\n                currentProject = project\r\n                _UI__WEBPACK_IMPORTED_MODULE_1__.UI.displayTasks(currentProject)\r\n            }\r\n        })\r\n    }\r\n})\r\n\r\n\r\n// Load Projects\r\ndocument.addEventListener('DOMContentLoaded', _UI__WEBPACK_IMPORTED_MODULE_1__.UI.displayProjects(projects))\r\n\r\n// Task control\r\nconst taskList = document.getElementById('task-display')\r\ntaskList.addEventListener('click', (e)=>{\r\n    if(e.target.classList.contains('remove')){\r\n        _UI__WEBPACK_IMPORTED_MODULE_1__.UI.removeTask(e.target)\r\n    }\r\n    if(e.target.classList.contains('check-box')){\r\n        _UI__WEBPACK_IMPORTED_MODULE_1__.UI.checkTask(e.target)\r\n    }\r\n})\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   storage: () => (/* binding */ storage)\n/* harmony export */ });\nclass storage {\r\n    static updateProjects(){\r\n\r\n    }\r\n    static getProjects(){\r\n        let projects\r\n        if(localStorage.getItem('projects') === null) {\r\n            projects = []\r\n        }\r\n        else{\r\n            projects = JSON.parse(localStorage.getItem('projects'))\r\n        }\r\n        return projects\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-app/./src/localStorage.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\r\n\r\n\r\nclass project {\r\n    constructor(name){\r\n        this.name = name\r\n        this.todos = []\r\n    }\r\n    addTodo(name, date, priority){\r\n        const newTodo = new _tasks__WEBPACK_IMPORTED_MODULE_0__.task(name,date,priority)\r\n        this.todos.push(newTodo)\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-app/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   task: () => (/* binding */ task)\n/* harmony export */ });\nclass task {\r\n    constructor(name, date, priority){\r\n        this.name = name\r\n        this.date = date\r\n        this.isDone = false\r\n        this.priority = priority\r\n    }\r\n    markDone(){\r\n        this.isDone = true\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-app/./src/tasks.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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