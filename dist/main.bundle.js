/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/ocean-bg.jpg */ "./src/ocean-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `h2 {
    color: red;
}

/* Header */


/* Body */
body{
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-repeat: no-repeat;
}

.player-labels{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.player-labels>span{
    color: white;
    justify-self: center;
}

/* Gameboards */

.gameboards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 4rem;
    justify-content: space-between;
}

.gameboards div {
    border: 1px solid red;
    display: grid;
    grid-template-rows: repeat(11, 2.5rem);
    grid-template-columns: repeat(11, 2.5rem);
}

.gameboards>div {
    justify-self: center;
    border: none;
}

.gameboards .label{
    border: none;
    color: white;
    text-align: center;
    font-size: 1.4rem;
    padding-top: 0.3rem;
}

.opponent-board .gridsquare:hover {
    background-color: red;
}

.ship {
    background-color: blue;
}

.struck {
    background-color: green;
}

.miss {
    background-color: yellow;
}

/* Footer */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;AACd;;AAEA,WAAW;;;AAGX,SAAS;AACT;IACI,mDAAoC;IACpC,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA,eAAe;;AAEf;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,sCAAsC;IACtC,yCAAyC;AAC7C;;AAEA;IACI,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA,WAAW","sourcesContent":["h2 {\n    color: red;\n}\n\n/* Header */\n\n\n/* Body */\nbody{\n    background: url('/src/ocean-bg.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.player-labels{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.player-labels>span{\n    color: white;\n    justify-self: center;\n}\n\n/* Gameboards */\n\n.gameboards {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    padding: 0 4rem;\n    justify-content: space-between;\n}\n\n.gameboards div {\n    border: 1px solid red;\n    display: grid;\n    grid-template-rows: repeat(11, 2.5rem);\n    grid-template-columns: repeat(11, 2.5rem);\n}\n\n.gameboards>div {\n    justify-self: center;\n    border: none;\n}\n\n.gameboards .label{\n    border: none;\n    color: white;\n    text-align: center;\n    font-size: 1.4rem;\n    padding-top: 0.3rem;\n}\n\n.opponent-board .gridsquare:hover {\n    background-color: red;\n}\n\n.ship {\n    background-color: blue;\n}\n\n.struck {\n    background-color: green;\n}\n\n.miss {\n    background-color: yellow;\n}\n\n/* Footer */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/GUI-manager.js":
/*!****************************!*\
  !*** ./src/GUI-manager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _turn_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./turn-manager */ "./src/turn-manager.js");


class GUIManager {
    constructor() {
        this.turnManager = undefined;
        this.currentPhase = {
            setup: true,
            playerTurn: false,
            cpuTurn: false,
            over: false
        };
    }

    setTurnManager(manager){
        this.turnManager = manager;
    }

    generateGridMarker(y,x = null){
        const numberToLetter = {
            0: 'Label',
            1: 'A',
            2: 'B',
            3: 'C',
            4: 'D',
            5: 'E',
            6: 'F',
            7: 'G',
            8: 'H',
            9: 'I',
            10: 'J'
        };

        const convertedLocation = [
            numberToLetter[y],
            x
        ];

        return convertedLocation.join('');
    }

    attackPlayerSquare(square){
        const possibleSquares = document.querySelectorAll(`.${square}`);
        let targetSquare;
        possibleSquares.forEach(possibleSquare => {
            if (possibleSquare.parentNode.classList.contains('player-board')){
                targetSquare = possibleSquare;
            }
        });

        if (targetSquare.classList.contains('ship')){
            targetSquare.classList.remove('ship');
            targetSquare.classList.add('inert');
            targetSquare.classList.add('struck');
        } else {
            targetSquare.classList.add('inert');
            targetSquare.classList.add('miss');
        }
    }

    opponentSquareClicked(square){
        if (this.currentPhase.playerTurn !== true){
            return false;
        } 

            if (square.classList.contains('ship')){
                square.classList.remove('ship');
                square.classList.add('inert');
                square.classList.add('struck');
    
                const gridCoord = Array.from(square.classList);
                this.turnManager.playerMove(gridCoord[0]);
    
            } else {
                square.classList.add('inert');
                square.classList.add('miss');
    
                const gridCoord = Array.from(square.classList);
                this.turnManager.playerMove(gridCoord[0]);
            }
    
            this.currentPhase.playerTurn = false;
            this.currentPhase.cpuTurn = true;
    
            setTimeout(() => {
                this.turnManager.cpuMove();
            }, 1000);
        
    }

    gridSquareClicked(e){
        const clickedSquare = e.target;
        const parentElement = clickedSquare.parentNode;

        if (this.currentPhase.playerTurn){
            if (clickedSquare.classList.contains('label') || 
                clickedSquare.classList.contains('inert')){
                return;
            }

            if (parentElement.classList.contains('opponent-board')){
                this.opponentSquareClicked(clickedSquare);
            } else if (parentElement.classList.contains('player-board')){
                this.playerSquareClicked(clickedSquare);
            }

        }


    }

    generateBoard(parentNode){
        for (let i = 0; i <= 10; i += 1){
            for (let j = 0; j <= 10; j += 1){
                const gridSquare = document.createElement('div');
                gridSquare.classList.add(this.generateGridMarker(i, j));
                gridSquare.classList.add('gridsquare');
                parentNode.appendChild(gridSquare);

                gridSquare.addEventListener('click', (event) =>{
                    this.gridSquareClicked(event);
                });

                if (i < 1 && j !== 0){
                    gridSquare.textContent = j;
                    gridSquare.classList.add('label');
                    gridSquare.classList.remove('gridsquare');
                } else if (i > 0 && j === 0){
                    gridSquare.textContent = this.generateGridMarker(i);
                    gridSquare.classList.add('label');
                    gridSquare.classList.remove('gridsquare');
                } else if (i === 0 && j === 0){
                    gridSquare.classList.add('label');
                    gridSquare.classList.remove('gridsquare');

                }
            }
        }
    }

    gameOver(winner){
        this.currentPhase.cpuTurn = false;
        this.currentPhase.playerTurn = false;
        this.currentPhase.over = true;

        const announcements = document.querySelector('.announcements span');

        if (winner === "player"){
            announcements.innerText = `You win!`;
        } else {
            announcements.innerText = 'You lose!';
        }
    }

    alertShipDestroyed(shipName, owner){
        const announcements = document.querySelector('.announcements span');

        if (shipName === 'You win!'){
            this.gameOver(owner);
        } else if (owner === 'player'){
            announcements.innerText = `You destroyed the enemy ${shipName}!`;
            this.displayEnemyShipDestroyed(shipName);
        } else {
            announcements.innerText = `Your ${shipName} has been destroyed!`;
        }
    }

    displayEnemyShipDestroyed(shipName){
        const destroyedList = document.querySelector('.destroyed-ships');
        const shipDiv = document.createElement('div');
        destroyedList.append(shipDiv);
        shipDiv.classList.add(`destroyed-shipname`);
        
        const shipText = document.createElement('span');
        shipText.innerText = shipName;
        shipDiv.append(shipText);
    }

    initialPageSetup(){
        console.log(`We're setting up the page`);
        const playerBoard = document.querySelector('.gameboards .player-board');
        const opponentBoard = document.querySelector('.gameboards .opponent-board');
        this.generateBoard(playerBoard);
        this.generateBoard(opponentBoard);
        this.shipTraySetup();
    }

    shipTraySetup(){
        const coordInputTextBoxes = document.querySelectorAll('.ship-tray input[type="text"');
        const shipSubmitForms = document.querySelectorAll('.ship-tray form');

        // Set a custom error message on the coordinate inputs
        coordInputTextBoxes.forEach((inputBox) => {
            inputBox.addEventListener('input', () => {
                if (inputBox.validity.patternMismatch){
                    inputBox.setCustomValidity(`Please enter a viable grid coordinate. 
                    Examples: D5, J9, B10`)
                } else {
                    inputBox.setCustomValidity('');
                }
            })
        })

        shipSubmitForms.forEach((form) => {
            console.log(form.parentElement);
            form.addEventListener("submit", (event) => {
                event.preventDefault();
                const ship = form.parentElement.className;

                let noseCoord = form.querySelector('input[type="text"]');
                noseCoord = noseCoord.value;
                noseCoord = noseCoord.charAt(0).toUpperCase() + noseCoord.slice(1);

                let orientation = form.querySelector('select');
                orientation = orientation.value;

                // Attempt to place the ship on the board using input values
                const attempt = this.turnManager.placeUserShip(ship, noseCoord, orientation)
                if (!attempt){
                    this.shipCannotBePlaced();
                } else {
                    this.hideShipInput(form);
                }
            })
        })
    }

    hideShipInput(form){
        form.style.visibility = 'hidden';
    }

    shipCannotBePlaced(){
        console.log('Invalid placement');
    }

    placeShips(ships, gameboard){

        for (let i = 0; i < ships.length; i += 1){
            for (let j = 0; j < ships[i].locations.length; j += 1){
                const gridCoord = ships[i].locations[j];
                const convertedCoord = this.generateGridMarker(...gridCoord);
                console.log(convertedCoord);
                const selector = `.${gameboard}-board .${convertedCoord}`;
                console.log(selector);
                const gridDiv = document.querySelector(selector);
                gridDiv.classList.add('ship');
            }
        }

    }



}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GUIManager);

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Gameboard {
    constructor(){
        this.missesReceived = [];
        this.hitsReceived = [];
        this.remainingShips = [];
        this.destroyedShips = [];
        this.currentShipId = 0;
        this.boardCleared = false;
    }

    place(ship, bowLocation, orientation) {
        const placement = this.checkPlacementAvailable(bowLocation, orientation, ship.length);
        
        if (placement){

            ship.id = this.currentShipId;
            ship.locations = placement;
            this.remainingShips.push(ship);
            this.currentShipId += 1;

        } else {

            return false; // Ship cannot be legally placed here, return false

        }

        return this.remainingShips;
    }

    checkForCollision(placement, remainingShips) {

        // Check if the proposed placement would collide with placed ships

        for (let i = 0; i < remainingShips.length; i += 1) {
            const existingShip = remainingShips[i];

            for (let j = 0; j < placement.length; j += 1) {
                const proposedCoordinate = placement[j];
                const found = existingShip.locations.some(
                    (location) => 
                    location[0] === proposedCoordinate[0] && 
                    location[1] === proposedCoordinate[1]
                );
        
                if (found) {

                    return true; // Collision detected, return true

                }
            }
        }
      
        return false;   // No collision detected, return false
    }

    checkPlacementAvailable(start, orientation, length) {
        const invalidPlacement = false;
        const convertedStart = this.convertLocationFromString(start);
        const proposedPlacement = [convertedStart];

        console.log(`Placing at ${start} with orientation ${orientation} for a ship of length ${length}`);

        const coordinateChanges = {
            North: [-1, 0],
            East: [0, 1],
            South: [1, 0],
            West: [0, -1],
        };

        for (let i = 1; i < length; i += 1) {
            const [rowChange, colChange] = coordinateChanges[orientation];
            proposedPlacement.push([convertedStart[0] + i * rowChange, convertedStart[1] + i * colChange]);
        }

        if (this.isPlacementOffBoard(proposedPlacement, length)) {
            return invalidPlacement;
        }

        if (this.checkForCollision(proposedPlacement, this.remainingShips)) {
            return invalidPlacement;
        }

        return proposedPlacement;
    }
    
    isPlacementOffBoard(placement, length) {
        const boardSize = 10;

        for (let j = 0; j < length; j += 1) {
            const [row, col] = placement[j];
            if (row <= 0 || row > boardSize || col <= 0 || col > boardSize) {
            return true;
            }
        }

        return false;
    }


    convertLocationFromString(loc){

        const letterToNumber = {
            A: 1,
            B: 2,
            C: 3,
            D: 4,
            E: 5,
            F: 6,
            G: 7,
            H: 8,
            I: 9,
            J: 10
        };

        const convertedLocation = [
            letterToNumber[loc[0]],
            parseInt(loc.slice(1), 10)
          ];

        return convertedLocation;
    }

    recordMissedAttack(miss){
        this.missesReceived.push(miss);
    }

    checkAttackPreexisting(hit) {
        // Returns true if this attack has already occured
        const allAttacks = this.missesReceived.concat(this.hitsReceived);

        const found = allAttacks.some(innerArray => 
            innerArray[0] === hit[0] && innerArray[1] === hit[1]
          );

        return found;
    }

    checkAttackHitShip(hitLoc, remainingShips){
        // Search the list of remaining ship locations to see if it matches
        for (let i = 0; i < remainingShips.length; i += 1) {
            const ship = remainingShips[i];
            const found = ship.locations.some(
              (location) => location[0] === hitLoc[0] && location[1] === hitLoc[1]
            );
            if (found) {
                const struckShip = remainingShips[i];
                struckShip.hit();
                this.hitsReceived.push(hitLoc);
                if (struckShip.sinkStatus){ 
                    return this.shipDestroyed(struckShip);
                }; 
                return true;
            }
        }
        // No hit detected, return false
        this.recordMissedAttack(hitLoc);
        return false;
    }


    receiveAttack(hit) {
        const convertedHit = this.convertLocationFromString(hit);
        if (this.checkAttackPreexisting(convertedHit)) {
            // If this attack has already occured, render it invalid
            return 'Invalid attack';
        }

        return  this.checkAttackHitShip(convertedHit, this.remainingShips);
    }

    shipDestroyed(destroyedShip){
        this.destroyedShips.push(destroyedShip);
        const indexToRemove = this.remainingShips
            .findIndex(ship => ship.id === destroyedShip.id);
        this.remainingShips.splice(indexToRemove, 1);
        this.checkBoardCleared()
        return this.boardCleared ? 'You win!' : destroyedShip.name;
    }

    checkBoardCleared(){
        if (this.remainingShips.length === 0){
            this.boardCleared = true;
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GUI_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GUI-manager */ "./src/GUI-manager.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



class Player {
    constructor(name, isHuman, hasCurrentTurn, gameboard){
        this.name = name;
        this.isHuman = isHuman;
        this.hasCurrentTurn = hasCurrentTurn;
        this.gameboard = gameboard;
        this.opponent = undefined;
        this.pursuingHitShip = false;
        this.lastTwoMovesHit = false;
        this.lastRandomAttack = undefined;
        this.deliberateAttacks = [];
        this.startingInventory = {
                carrier: new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]('Carrier'),
                battleship: new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]('Battleship'),
                cruiser: new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]('Cruiser'),
                submarine: new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]('Submarine'),
                destroyer: new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]('Destroyer')
            }
        this.legalAttacks = this.generateAllLegalAttacks();
    }

    generateAllLegalAttacks(){
        const moves = [];

        for (let i = 0; i <= 9; i += 1){
            for (let j = 1; j <= 10; j += 1){
                moves.push(String.fromCharCode(i + 65) + j);
            }
        }

        return moves;
    }

    youWin(){
        console.log('WINNER!');
    }

    youLose(){
        console.log('We lose');
    }

    destroyedEnemyShip(ship){
        console.log(`We destroyed a ${ship}`);
    }

    receiveAttack(targetLocation){

        const hitStatus = this.gameboard.receiveAttack(targetLocation);

        if (hitStatus === 'You win!'){
            this.youLose();
        }

        return hitStatus;
    }

    sendAttack(targetLocation){

        const hitStatus = this.opponent.receiveAttack(targetLocation);

        if (hitStatus === 'You win!'){
            this.youWin();
        } else if (typeof hitStatus === 'string' && hitStatus !== 'Invalid attack'){
            console.log('SHIP HAS BEEN DESTROYED --------')
            this.pursuingHitShip = false;
            this.lastTwoMovesHit = false;
            this.deliberateAttacks = [];
            this.destroyedEnemyShip(hitStatus);
        } else if (hitStatus === true && !this.pursuingHitShip){
            this.pursuingHitShip = true;
            this.deliberateAttacks.push(targetLocation);
        } else if (hitStatus === true && this.pursuingHitShip){
            this.lastTwoMovesHit = true;
            this.deliberateAttacks.push(targetLocation);
        } else if (hitStatus === false){
            this.lastTwoMovesHit = false;
        }

        console.log(`Removing ${targetLocation} from the legal list`);

        this.removeAttackFromLegalList(targetLocation);

        return { hitStatus, targetLocation} ;
    }

    removeAttackFromLegalList(attack){

        const targetIndex = this.legalAttacks.indexOf(attack);

        this.legalAttacks.splice(targetIndex, 1);
    }

    generateRandomLegalAttack(){
        const attackIndex = Math.floor(Math.random() * this.legalAttacks.length);

        return this.legalAttacks[attackIndex];
    }

    generateRandomFollowupAttack(attackCenter){

        const attackCenterCodeNorth = attackCenter.charCodeAt(0) - 1;
        const attackCenterCodeSouth = attackCenter.charCodeAt(0) + 1;

        const north = String.fromCharCode(attackCenterCodeNorth) + attackCenter[1];
        const south = String.fromCharCode(attackCenterCodeSouth) + attackCenter[1];
        const east = attackCenter[0] + (attackCenter[1] - 1);
        const west = attackCenter[0] + (parseInt(attackCenter[1], 10) + 1);

        const followupMoves = [north, south, east, west];

        console.log(`Starting with the followup moves ${JSON.stringify(followupMoves)}`);

        const movesToRemove = [];

        // Remove all illegal options
        for (let i = 0; i < 4; i +=1 ){
            if (this.legalAttacks.indexOf(followupMoves[i]) < 0){
                console.log(`*******Removing ${followupMoves[i]} at index ${i}`);
                movesToRemove.push(followupMoves[i]);
            }
        }

        console.log(`Here's the moves we are removing ${JSON.stringify(movesToRemove)}`);

        if (movesToRemove.length > 0){
            for (let i = 0; i < movesToRemove.length; i += 1){
                const index = followupMoves.indexOf(movesToRemove[i])
                if (index >= 0){
                    followupMoves.splice(index, 1);
                }
            }
        }

        console.log(`-- -- -- Picking a followup move from ${JSON.stringify(followupMoves)} -- -- --`);

        if (followupMoves.length === 0 || movesToRemove.length === 4){
            return this.generateRandomLegalAttack();
        }
        
        return followupMoves[Math.floor(Math.random() * followupMoves.length)];
    }

    generateDeliberateFollowupAttack(){
        let attack;

        const twoAttacksBack = this.deliberateAttacks[this.deliberateAttacks.length - 2];
        const oneAttackBack = this.deliberateAttacks[this.deliberateAttacks.length - 1];

        if (oneAttackBack[0].charCodeAt(0) > twoAttacksBack.charCodeAt(0)){

            attack = String.fromCharCode(oneAttackBack.charCodeAt(0) + 1) 
                + oneAttackBack[1];

        } else if (oneAttackBack[0].charCodeAt(0) < twoAttacksBack.charCodeAt(0)){

            attack = String.fromCharCode(oneAttackBack.charCodeAt(0) -1) 
                + oneAttackBack[1];

        } else if (oneAttackBack[1] > twoAttacksBack[1]){

            attack = oneAttackBack[0] + (parseInt(oneAttackBack[1], 10) + 1);

        } else if (oneAttackBack[1] < twoAttacksBack[1]){

            attack = oneAttackBack[0] + (parseInt(oneAttackBack[1], 10) - 1);

        }

        return this.legalAttacks.indexOf(attack) > 0 ? 
            attack : 
            this.generateRandomFollowupAttack(this.deliberateAttacks[0]);
    }

    generateAttack(){
        let attack;

        console.log(`The current state of our many bools: Last two moves hit is ${this.lastTwoMovesHit}, Pursuing hit ship is ${this.pursuingHitShip}, and our Deliberate attack is list ${JSON.stringify(this.deliberateAttacks)}, while last random attack was ${this.lastRandomAttack}`);

        // If a ship has already been struck, pursue sinking it

        if (this.pursuingHitShip && !this.lastTwoMovesHit){

            if (this.deliberateAttacks.length >= 2){

                // If a ship has been struck twice, but we just missed,
                // attack in a grid emanating from the first hit

                attack = this.generateRandomFollowupAttack(this.deliberateAttacks[0]);
                console.log(`Doubling back to ${attack}`);

            } else {

                attack = this.generateRandomFollowupAttack(this.lastRandomAttack);

                console.log(`The random followup move is ${attack}`);

            }

        } else if (this.pursuingHitShip && this.lastTwoMovesHit){

            attack = this.generateDeliberateFollowupAttack();
            console.log(`The last two attacks hit, and the moves that have hit are ${this.deliberateAttacks}, meaning the deliberate followup is ${attack}`);

        } else {

            // If a ship has not been struck, attack randomly

            attack = this.generateRandomLegalAttack();
            console.log(`Generating random attack ${attack}`);
            this.lastRandomAttack = attack;

        }

        return this.sendAttack(attack);
    }

    randomlyPopulateBoardWithShips(){
        let placedShips = 4;

        const randomOrientation = () => {
            let orientation;
            switch (Math.floor(1 + Math.random() * 3)) {
                case 1:
                    orientation = 'North';
                    break;
                case 2:
                    orientation = 'South';
                    break;
                case 3:
                    orientation = 'East';
                    break;
                case 4:
                    orientation = 'West';
                    break;
                default:
                    return 'Direction unvailable';
            }
            return orientation;
        }


        while (placedShips >= 0){
            const ship = Object.entries(this.startingInventory)[placedShips][1];

            console.log(`Attempting to place ${JSON.stringify(ship)}`);

            const placement = this.gameboard.place(
                ship,
                this.generateRandomLegalAttack(),
                randomOrientation()
                );
            if (placement !== false){
                placedShips -= 1;
            }
        }
    }

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
    constructor(name) {
        this.id = 0;
        this.name = name;
        this.hits = 0;
        this.sinkStatus = false;
        this.determineType(name);
        this.locations = [];
    }

    determineType(name) {
        switch(name) {
            case 'Carrier':
                this.length = 5;
                break;
            case 'Battleship':
                this.length = 4;
                break;
            case 'Cruiser':
                this.length = 3;
                break;
            case 'Submarine':
                this.length = 3;
                break;
            case 'Destroyer':
                this.length = 2;
                break;
            default:
                this.length = 0;
        }
    }

    hit() {
        this.hits += 1;
        console.log(`This ${this.name} has sustained ${this.hits} hits`);
        this.checkIfSunk();
    }

    checkIfSunk() {
        if (this.hits >= this.length){
            this.sinkStatus = true;
        }
    }    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/turn-manager.js":
/*!*****************************!*\
  !*** ./src/turn-manager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");



class TurnManager {
    constructor(gui){
        this.gui = gui;
        this.player = undefined;
        this.cpu = undefined;
        this.playerShipsPlaced = 0;
    }

    setupBoard(){
        const playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
        const cpuBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player', true, true, playerBoard);
        this.cpu = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]('CPU', false, false, cpuBoard);

        this.player.opponent = this.cpu;
        this.cpu.opponent = this.player;

        this.generateCpuShips();
    }
    
    placeUserShip(name, location, orientation){
        console.log(`Over here at ${[name, location, orientation]}`);
        const ship = this.player.startingInventory[name];

        const placement = this.player.gameboard.place(ship, location, orientation);
        if (!placement){
            // This placement isn't legal
            return false;
        }

        this.gui.placeShips(this.player.gameboard.remainingShips, 'player');

        this.playerShipsPlaced += 1;
        if (this.playerShipsPlaced === 5){
            this.allUserShipsPlaced();
        }

        return true;
    }

    generateCpuShips(){
        this.cpu.randomlyPopulateBoardWithShips();
        this.gui.placeShips(this.cpu.gameboard.remainingShips, 'opponent');
    }

    allUserShipsPlaced(){
        this.gui.currentPhase.setup = false;
        this.gui.currentPhase.playerTurn = true;
    }

    playerMove(coord){
        console.log(coord);

        const attack = this.player.sendAttack(coord);

        // We destroyed a ship
        if (typeof attack.hitStatus === 'string' && attack.hitStatus !== 'Invalid attack'){
            this.gui.alertShipDestroyed(attack.hitStatus, 'player');
        }
    }

    cpuMove(){
        if (!this.gui.currentPhase.over){
            const attack = this.cpu.generateAttack()
            const gridSquare = attack.targetLocation;
            this.gui.attackPlayerSquare(gridSquare);
    
            // We destroyed a ship
            if (typeof attack.hitStatus === 'string' && attack.hitStatus !== 'Invalid attack'){
                this.gui.alertShipDestroyed(attack.hitStatus, 'cpu');
            }
    
            this.gui.currentPhase.cpuTurn = false;
            this.gui.currentPhase.playerTurn = true;
        }
    }

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TurnManager);

/***/ }),

/***/ "./src/ocean-bg.jpg":
/*!**************************!*\
  !*** ./src/ocean-bg.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "097fb0627c1599c8e582.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _GUI_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GUI-manager */ "./src/GUI-manager.js");
/* harmony import */ var _turn_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./turn-manager */ "./src/turn-manager.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");





const displayManager = new _GUI_manager__WEBPACK_IMPORTED_MODULE_1__["default"]();
const turnManager = new _turn_manager__WEBPACK_IMPORTED_MODULE_2__["default"](displayManager);
displayManager.setTurnManager(turnManager);

displayManager.initialPageSetup();
turnManager.setupBoard();

console.log('Testamuo.');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2tCO0FBQ0U7QUFDWDs7QUFFOUIsMkJBQTJCLG9EQUFVO0FBQ3JDLHdCQUF3QixxREFBVztBQUNuQzs7QUFFQTtBQUNBOztBQUVBLHlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dVSS1tYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3R1cm4tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvb2NlYW4tYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBoMiB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLyogSGVhZGVyICovXG5cblxuLyogQm9keSAqL1xuYm9keXtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ucGxheWVyLWxhYmVsc3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbn1cblxuLnBsYXllci1sYWJlbHM+c3BhbntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi8qIEdhbWVib2FyZHMgKi9cblxuLmdhbWVib2FyZHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIHBhZGRpbmc6IDAgNHJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5nYW1lYm9hcmRzIGRpdiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDIuNXJlbSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDIuNXJlbSk7XG59XG5cbi5nYW1lYm9hcmRzPmRpdiB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uZ2FtZWJvYXJkcyAubGFiZWx7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcbn1cblxuLm9wcG9uZW50LWJvYXJkIC5ncmlkc3F1YXJlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uc3RydWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLyogRm9vdGVyICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBLFdBQVc7OztBQUdYLFNBQVM7QUFDVDtJQUNJLG1EQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQSxXQUFXXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImgyIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuXFxuLyogQm9keSAqL1xcbmJvZHl7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnL3NyYy9vY2Vhbi1iZy5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLnBsYXllci1sYWJlbHN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLnBsYXllci1sYWJlbHM+c3BhbntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogR2FtZWJvYXJkcyAqL1xcblxcbi5nYW1lYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBwYWRkaW5nOiAwIDRyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmdhbWVib2FyZHMgZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMi41cmVtKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDIuNXJlbSk7XFxufVxcblxcbi5nYW1lYm9hcmRzPmRpdiB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5nYW1lYm9hcmRzIC5sYWJlbHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XFxufVxcblxcbi5vcHBvbmVudC1ib2FyZCAuZ3JpZHNxdWFyZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uc3RydWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUdXJuTWFuYWdlciBmcm9tIFwiLi90dXJuLW1hbmFnZXJcIjtcblxuY2xhc3MgR1VJTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudHVybk1hbmFnZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY3VycmVudFBoYXNlID0ge1xuICAgICAgICAgICAgc2V0dXA6IHRydWUsXG4gICAgICAgICAgICBwbGF5ZXJUdXJuOiBmYWxzZSxcbiAgICAgICAgICAgIGNwdVR1cm46IGZhbHNlLFxuICAgICAgICAgICAgb3ZlcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRUdXJuTWFuYWdlcihtYW5hZ2VyKXtcbiAgICAgICAgdGhpcy50dXJuTWFuYWdlciA9IG1hbmFnZXI7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVHcmlkTWFya2VyKHkseCA9IG51bGwpe1xuICAgICAgICBjb25zdCBudW1iZXJUb0xldHRlciA9IHtcbiAgICAgICAgICAgIDA6ICdMYWJlbCcsXG4gICAgICAgICAgICAxOiAnQScsXG4gICAgICAgICAgICAyOiAnQicsXG4gICAgICAgICAgICAzOiAnQycsXG4gICAgICAgICAgICA0OiAnRCcsXG4gICAgICAgICAgICA1OiAnRScsXG4gICAgICAgICAgICA2OiAnRicsXG4gICAgICAgICAgICA3OiAnRycsXG4gICAgICAgICAgICA4OiAnSCcsXG4gICAgICAgICAgICA5OiAnSScsXG4gICAgICAgICAgICAxMDogJ0onXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29udmVydGVkTG9jYXRpb24gPSBbXG4gICAgICAgICAgICBudW1iZXJUb0xldHRlclt5XSxcbiAgICAgICAgICAgIHhcbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gY29udmVydGVkTG9jYXRpb24uam9pbignJyk7XG4gICAgfVxuXG4gICAgYXR0YWNrUGxheWVyU3F1YXJlKHNxdWFyZSl7XG4gICAgICAgIGNvbnN0IHBvc3NpYmxlU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3NxdWFyZX1gKTtcbiAgICAgICAgbGV0IHRhcmdldFNxdWFyZTtcbiAgICAgICAgcG9zc2libGVTcXVhcmVzLmZvckVhY2gocG9zc2libGVTcXVhcmUgPT4ge1xuICAgICAgICAgICAgaWYgKHBvc3NpYmxlU3F1YXJlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5ZXItYm9hcmQnKSl7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U3F1YXJlID0gcG9zc2libGVTcXVhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0YXJnZXRTcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpe1xuICAgICAgICAgICAgdGFyZ2V0U3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICAgICAgICAgIHRhcmdldFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdpbmVydCcpO1xuICAgICAgICAgICAgdGFyZ2V0U3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N0cnVjaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0U3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2luZXJ0Jyk7XG4gICAgICAgICAgICB0YXJnZXRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3Bwb25lbnRTcXVhcmVDbGlja2VkKHNxdWFyZSl7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaGFzZS5wbGF5ZXJUdXJuICE9PSB0cnVlKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBcblxuICAgICAgICAgICAgaWYgKHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSl7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3RydWNrJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZENvb3JkID0gQXJyYXkuZnJvbShzcXVhcmUuY2xhc3NMaXN0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5NYW5hZ2VyLnBsYXllck1vdmUoZ3JpZENvb3JkWzBdKTtcbiAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2luZXJ0Jyk7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkQ29vcmQgPSBBcnJheS5mcm9tKHNxdWFyZS5jbGFzc0xpc3QpO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybk1hbmFnZXIucGxheWVyTW92ZShncmlkQ29vcmRbMF0pO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGhhc2UucGxheWVyVHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGhhc2UuY3B1VHVybiA9IHRydWU7XG4gICAgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5NYW5hZ2VyLmNwdU1vdmUoKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBncmlkU3F1YXJlQ2xpY2tlZChlKXtcbiAgICAgICAgY29uc3QgY2xpY2tlZFNxdWFyZSA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gY2xpY2tlZFNxdWFyZS5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaGFzZS5wbGF5ZXJUdXJuKXtcbiAgICAgICAgICAgIGlmIChjbGlja2VkU3F1YXJlLmNsYXNzTGlzdC5jb250YWlucygnbGFiZWwnKSB8fCBcbiAgICAgICAgICAgICAgICBjbGlja2VkU3F1YXJlLmNsYXNzTGlzdC5jb250YWlucygnaW5lcnQnKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ29wcG9uZW50LWJvYXJkJykpe1xuICAgICAgICAgICAgICAgIHRoaXMub3Bwb25lbnRTcXVhcmVDbGlja2VkKGNsaWNrZWRTcXVhcmUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncGxheWVyLWJvYXJkJykpe1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3F1YXJlQ2xpY2tlZChjbGlja2VkU3F1YXJlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGdlbmVyYXRlQm9hcmQocGFyZW50Tm9kZSl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDEwOyBpICs9IDEpe1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gMTA7IGogKz0gMSl7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LmFkZCh0aGlzLmdlbmVyYXRlR3JpZE1hcmtlcihpLCBqKSk7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdncmlkc3F1YXJlJyk7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChncmlkU3F1YXJlKTtcblxuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRTcXVhcmVDbGlja2VkKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChpIDwgMSAmJiBqICE9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS50ZXh0Q29udGVudCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdncmlkc3F1YXJlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMCAmJiBqID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS50ZXh0Q29udGVudCA9IHRoaXMuZ2VuZXJhdGVHcmlkTWFya2VyKGkpO1xuICAgICAgICAgICAgICAgICAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZHNxdWFyZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMCAmJiBqID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWRzcXVhcmUnKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyKHdpbm5lcil7XG4gICAgICAgIHRoaXMuY3VycmVudFBoYXNlLmNwdVR1cm4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGhhc2UucGxheWVyVHVybiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaGFzZS5vdmVyID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBhbm5vdW5jZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFubm91bmNlbWVudHMgc3BhbicpO1xuXG4gICAgICAgIGlmICh3aW5uZXIgPT09IFwicGxheWVyXCIpe1xuICAgICAgICAgICAgYW5ub3VuY2VtZW50cy5pbm5lclRleHQgPSBgWW91IHdpbiFgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5ub3VuY2VtZW50cy5pbm5lclRleHQgPSAnWW91IGxvc2UhJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFsZXJ0U2hpcERlc3Ryb3llZChzaGlwTmFtZSwgb3duZXIpe1xuICAgICAgICBjb25zdCBhbm5vdW5jZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFubm91bmNlbWVudHMgc3BhbicpO1xuXG4gICAgICAgIGlmIChzaGlwTmFtZSA9PT0gJ1lvdSB3aW4hJyl7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKG93bmVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChvd25lciA9PT0gJ3BsYXllcicpe1xuICAgICAgICAgICAgYW5ub3VuY2VtZW50cy5pbm5lclRleHQgPSBgWW91IGRlc3Ryb3llZCB0aGUgZW5lbXkgJHtzaGlwTmFtZX0hYDtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUVuZW15U2hpcERlc3Ryb3llZChzaGlwTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbm5vdW5jZW1lbnRzLmlubmVyVGV4dCA9IGBZb3VyICR7c2hpcE5hbWV9IGhhcyBiZWVuIGRlc3Ryb3llZCFgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheUVuZW15U2hpcERlc3Ryb3llZChzaGlwTmFtZSl7XG4gICAgICAgIGNvbnN0IGRlc3Ryb3llZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdHJveWVkLXNoaXBzJyk7XG4gICAgICAgIGNvbnN0IHNoaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzdHJveWVkTGlzdC5hcHBlbmQoc2hpcERpdik7XG4gICAgICAgIHNoaXBEaXYuY2xhc3NMaXN0LmFkZChgZGVzdHJveWVkLXNoaXBuYW1lYCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaGlwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc2hpcFRleHQuaW5uZXJUZXh0ID0gc2hpcE5hbWU7XG4gICAgICAgIHNoaXBEaXYuYXBwZW5kKHNoaXBUZXh0KTtcbiAgICB9XG5cbiAgICBpbml0aWFsUGFnZVNldHVwKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGBXZSdyZSBzZXR0aW5nIHVwIHRoZSBwYWdlYCk7XG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZHMgLnBsYXllci1ib2FyZCcpO1xuICAgICAgICBjb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZHMgLm9wcG9uZW50LWJvYXJkJyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVCb2FyZChwbGF5ZXJCb2FyZCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVCb2FyZChvcHBvbmVudEJvYXJkKTtcbiAgICAgICAgdGhpcy5zaGlwVHJheVNldHVwKCk7XG4gICAgfVxuXG4gICAgc2hpcFRyYXlTZXR1cCgpe1xuICAgICAgICBjb25zdCBjb29yZElucHV0VGV4dEJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtdHJheSBpbnB1dFt0eXBlPVwidGV4dFwiJyk7XG4gICAgICAgIGNvbnN0IHNoaXBTdWJtaXRGb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLXRyYXkgZm9ybScpO1xuXG4gICAgICAgIC8vIFNldCBhIGN1c3RvbSBlcnJvciBtZXNzYWdlIG9uIHRoZSBjb29yZGluYXRlIGlucHV0c1xuICAgICAgICBjb29yZElucHV0VGV4dEJveGVzLmZvckVhY2goKGlucHV0Qm94KSA9PiB7XG4gICAgICAgICAgICBpbnB1dEJveC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRCb3gudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKXtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRCb3guc2V0Q3VzdG9tVmFsaWRpdHkoYFBsZWFzZSBlbnRlciBhIHZpYWJsZSBncmlkIGNvb3JkaW5hdGUuIFxuICAgICAgICAgICAgICAgICAgICBFeGFtcGxlczogRDUsIEo5LCBCMTBgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0Qm94LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHNoaXBTdWJtaXRGb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtLnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGZvcm0ucGFyZW50RWxlbWVudC5jbGFzc05hbWU7XG5cbiAgICAgICAgICAgICAgICBsZXQgbm9zZUNvb3JkID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpO1xuICAgICAgICAgICAgICAgIG5vc2VDb29yZCA9IG5vc2VDb29yZC52YWx1ZTtcbiAgICAgICAgICAgICAgICBub3NlQ29vcmQgPSBub3NlQ29vcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBub3NlQ29vcmQuc2xpY2UoMSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gb3JpZW50YXRpb24udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBBdHRlbXB0IHRvIHBsYWNlIHRoZSBzaGlwIG9uIHRoZSBib2FyZCB1c2luZyBpbnB1dCB2YWx1ZXNcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRlbXB0ID0gdGhpcy50dXJuTWFuYWdlci5wbGFjZVVzZXJTaGlwKHNoaXAsIG5vc2VDb29yZCwgb3JpZW50YXRpb24pXG4gICAgICAgICAgICAgICAgaWYgKCFhdHRlbXB0KXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwQ2Fubm90QmVQbGFjZWQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVTaGlwSW5wdXQoZm9ybSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoaWRlU2hpcElucHV0KGZvcm0pe1xuICAgICAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9XG5cbiAgICBzaGlwQ2Fubm90QmVQbGFjZWQoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgcGxhY2VtZW50Jyk7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwcyhzaGlwcywgZ2FtZWJvYXJkKXtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKXtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNbaV0ubG9jYXRpb25zLmxlbmd0aDsgaiArPSAxKXtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkQ29vcmQgPSBzaGlwc1tpXS5sb2NhdGlvbnNbal07XG4gICAgICAgICAgICAgICAgY29uc3QgY29udmVydGVkQ29vcmQgPSB0aGlzLmdlbmVyYXRlR3JpZE1hcmtlciguLi5ncmlkQ29vcmQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnZlcnRlZENvb3JkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGAuJHtnYW1lYm9hcmR9LWJvYXJkIC4ke2NvbnZlcnRlZENvb3JkfWA7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBncmlkRGl2LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHVUlNYW5hZ2VyOyIsImNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5taXNzZXNSZWNlaXZlZCA9IFtdO1xuICAgICAgICB0aGlzLmhpdHNSZWNlaXZlZCA9IFtdO1xuICAgICAgICB0aGlzLnJlbWFpbmluZ1NoaXBzID0gW107XG4gICAgICAgIHRoaXMuZGVzdHJveWVkU2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcElkID0gMDtcbiAgICAgICAgdGhpcy5ib2FyZENsZWFyZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwbGFjZShzaGlwLCBib3dMb2NhdGlvbiwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gdGhpcy5jaGVja1BsYWNlbWVudEF2YWlsYWJsZShib3dMb2NhdGlvbiwgb3JpZW50YXRpb24sIHNoaXAubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwbGFjZW1lbnQpe1xuXG4gICAgICAgICAgICBzaGlwLmlkID0gdGhpcy5jdXJyZW50U2hpcElkO1xuICAgICAgICAgICAgc2hpcC5sb2NhdGlvbnMgPSBwbGFjZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLnJlbWFpbmluZ1NoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWQgKz0gMTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIFNoaXAgY2Fubm90IGJlIGxlZ2FsbHkgcGxhY2VkIGhlcmUsIHJldHVybiBmYWxzZVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdTaGlwcztcbiAgICB9XG5cbiAgICBjaGVja0ZvckNvbGxpc2lvbihwbGFjZW1lbnQsIHJlbWFpbmluZ1NoaXBzKSB7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByb3Bvc2VkIHBsYWNlbWVudCB3b3VsZCBjb2xsaWRlIHdpdGggcGxhY2VkIHNoaXBzXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1haW5pbmdTaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdTaGlwID0gcmVtYWluaW5nU2hpcHNbaV07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxhY2VtZW50Lmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcG9zZWRDb29yZGluYXRlID0gcGxhY2VtZW50W2pdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kID0gZXhpc3RpbmdTaGlwLmxvY2F0aW9ucy5zb21lKFxuICAgICAgICAgICAgICAgICAgICAobG9jYXRpb24pID0+IFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvblswXSA9PT0gcHJvcG9zZWRDb29yZGluYXRlWzBdICYmIFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvblsxXSA9PT0gcHJvcG9zZWRDb29yZGluYXRlWzFdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIENvbGxpc2lvbiBkZXRlY3RlZCwgcmV0dXJuIHRydWVcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIHJldHVybiBmYWxzZTsgICAvLyBObyBjb2xsaXNpb24gZGV0ZWN0ZWQsIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNoZWNrUGxhY2VtZW50QXZhaWxhYmxlKHN0YXJ0LCBvcmllbnRhdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGludmFsaWRQbGFjZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY29udmVydGVkU3RhcnQgPSB0aGlzLmNvbnZlcnRMb2NhdGlvbkZyb21TdHJpbmcoc3RhcnQpO1xuICAgICAgICBjb25zdCBwcm9wb3NlZFBsYWNlbWVudCA9IFtjb252ZXJ0ZWRTdGFydF07XG5cbiAgICAgICAgY29uc29sZS5sb2coYFBsYWNpbmcgYXQgJHtzdGFydH0gd2l0aCBvcmllbnRhdGlvbiAke29yaWVudGF0aW9ufSBmb3IgYSBzaGlwIG9mIGxlbmd0aCAke2xlbmd0aH1gKTtcblxuICAgICAgICBjb25zdCBjb29yZGluYXRlQ2hhbmdlcyA9IHtcbiAgICAgICAgICAgIE5vcnRoOiBbLTEsIDBdLFxuICAgICAgICAgICAgRWFzdDogWzAsIDFdLFxuICAgICAgICAgICAgU291dGg6IFsxLCAwXSxcbiAgICAgICAgICAgIFdlc3Q6IFswLCAtMV0sXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgW3Jvd0NoYW5nZSwgY29sQ2hhbmdlXSA9IGNvb3JkaW5hdGVDaGFuZ2VzW29yaWVudGF0aW9uXTtcbiAgICAgICAgICAgIHByb3Bvc2VkUGxhY2VtZW50LnB1c2goW2NvbnZlcnRlZFN0YXJ0WzBdICsgaSAqIHJvd0NoYW5nZSwgY29udmVydGVkU3RhcnRbMV0gKyBpICogY29sQ2hhbmdlXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1BsYWNlbWVudE9mZkJvYXJkKHByb3Bvc2VkUGxhY2VtZW50LCBsZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW52YWxpZFBsYWNlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNoZWNrRm9yQ29sbGlzaW9uKHByb3Bvc2VkUGxhY2VtZW50LCB0aGlzLnJlbWFpbmluZ1NoaXBzKSkge1xuICAgICAgICAgICAgcmV0dXJuIGludmFsaWRQbGFjZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvcG9zZWRQbGFjZW1lbnQ7XG4gICAgfVxuICAgIFxuICAgIGlzUGxhY2VtZW50T2ZmQm9hcmQocGxhY2VtZW50LCBsZW5ndGgpIHtcbiAgICAgICAgY29uc3QgYm9hcmRTaXplID0gMTA7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IHBsYWNlbWVudFtqXTtcbiAgICAgICAgICAgIGlmIChyb3cgPD0gMCB8fCByb3cgPiBib2FyZFNpemUgfHwgY29sIDw9IDAgfHwgY29sID4gYm9hcmRTaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIGNvbnZlcnRMb2NhdGlvbkZyb21TdHJpbmcobG9jKXtcblxuICAgICAgICBjb25zdCBsZXR0ZXJUb051bWJlciA9IHtcbiAgICAgICAgICAgIEE6IDEsXG4gICAgICAgICAgICBCOiAyLFxuICAgICAgICAgICAgQzogMyxcbiAgICAgICAgICAgIEQ6IDQsXG4gICAgICAgICAgICBFOiA1LFxuICAgICAgICAgICAgRjogNixcbiAgICAgICAgICAgIEc6IDcsXG4gICAgICAgICAgICBIOiA4LFxuICAgICAgICAgICAgSTogOSxcbiAgICAgICAgICAgIEo6IDEwXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29udmVydGVkTG9jYXRpb24gPSBbXG4gICAgICAgICAgICBsZXR0ZXJUb051bWJlcltsb2NbMF1dLFxuICAgICAgICAgICAgcGFyc2VJbnQobG9jLnNsaWNlKDEpLCAxMClcbiAgICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiBjb252ZXJ0ZWRMb2NhdGlvbjtcbiAgICB9XG5cbiAgICByZWNvcmRNaXNzZWRBdHRhY2sobWlzcyl7XG4gICAgICAgIHRoaXMubWlzc2VzUmVjZWl2ZWQucHVzaChtaXNzKTtcbiAgICB9XG5cbiAgICBjaGVja0F0dGFja1ByZWV4aXN0aW5nKGhpdCkge1xuICAgICAgICAvLyBSZXR1cm5zIHRydWUgaWYgdGhpcyBhdHRhY2sgaGFzIGFscmVhZHkgb2NjdXJlZFxuICAgICAgICBjb25zdCBhbGxBdHRhY2tzID0gdGhpcy5taXNzZXNSZWNlaXZlZC5jb25jYXQodGhpcy5oaXRzUmVjZWl2ZWQpO1xuXG4gICAgICAgIGNvbnN0IGZvdW5kID0gYWxsQXR0YWNrcy5zb21lKGlubmVyQXJyYXkgPT4gXG4gICAgICAgICAgICBpbm5lckFycmF5WzBdID09PSBoaXRbMF0gJiYgaW5uZXJBcnJheVsxXSA9PT0gaGl0WzFdXG4gICAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgY2hlY2tBdHRhY2tIaXRTaGlwKGhpdExvYywgcmVtYWluaW5nU2hpcHMpe1xuICAgICAgICAvLyBTZWFyY2ggdGhlIGxpc3Qgb2YgcmVtYWluaW5nIHNoaXAgbG9jYXRpb25zIHRvIHNlZSBpZiBpdCBtYXRjaGVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtYWluaW5nU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSByZW1haW5pbmdTaGlwc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kID0gc2hpcC5sb2NhdGlvbnMuc29tZShcbiAgICAgICAgICAgICAgKGxvY2F0aW9uKSA9PiBsb2NhdGlvblswXSA9PT0gaGl0TG9jWzBdICYmIGxvY2F0aW9uWzFdID09PSBoaXRMb2NbMV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJ1Y2tTaGlwID0gcmVtYWluaW5nU2hpcHNbaV07XG4gICAgICAgICAgICAgICAgc3RydWNrU2hpcC5oaXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdHNSZWNlaXZlZC5wdXNoKGhpdExvYyk7XG4gICAgICAgICAgICAgICAgaWYgKHN0cnVja1NoaXAuc2lua1N0YXR1cyl7IFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaGlwRGVzdHJveWVkKHN0cnVja1NoaXApO1xuICAgICAgICAgICAgICAgIH07IFxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE5vIGhpdCBkZXRlY3RlZCwgcmV0dXJuIGZhbHNlXG4gICAgICAgIHRoaXMucmVjb3JkTWlzc2VkQXR0YWNrKGhpdExvYyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIHJlY2VpdmVBdHRhY2soaGl0KSB7XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZEhpdCA9IHRoaXMuY29udmVydExvY2F0aW9uRnJvbVN0cmluZyhoaXQpO1xuICAgICAgICBpZiAodGhpcy5jaGVja0F0dGFja1ByZWV4aXN0aW5nKGNvbnZlcnRlZEhpdCkpIHtcbiAgICAgICAgICAgIC8vIElmIHRoaXMgYXR0YWNrIGhhcyBhbHJlYWR5IG9jY3VyZWQsIHJlbmRlciBpdCBpbnZhbGlkXG4gICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgYXR0YWNrJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgdGhpcy5jaGVja0F0dGFja0hpdFNoaXAoY29udmVydGVkSGl0LCB0aGlzLnJlbWFpbmluZ1NoaXBzKTtcbiAgICB9XG5cbiAgICBzaGlwRGVzdHJveWVkKGRlc3Ryb3llZFNoaXApe1xuICAgICAgICB0aGlzLmRlc3Ryb3llZFNoaXBzLnB1c2goZGVzdHJveWVkU2hpcCk7XG4gICAgICAgIGNvbnN0IGluZGV4VG9SZW1vdmUgPSB0aGlzLnJlbWFpbmluZ1NoaXBzXG4gICAgICAgICAgICAuZmluZEluZGV4KHNoaXAgPT4gc2hpcC5pZCA9PT0gZGVzdHJveWVkU2hpcC5pZCk7XG4gICAgICAgIHRoaXMucmVtYWluaW5nU2hpcHMuc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuICAgICAgICB0aGlzLmNoZWNrQm9hcmRDbGVhcmVkKClcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRDbGVhcmVkID8gJ1lvdSB3aW4hJyA6IGRlc3Ryb3llZFNoaXAubmFtZTtcbiAgICB9XG5cbiAgICBjaGVja0JvYXJkQ2xlYXJlZCgpe1xuICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdTaGlwcy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgdGhpcy5ib2FyZENsZWFyZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7IiwiaW1wb3J0IEdVSU1hbmFnZXIgZnJvbSBcIi4vR1VJLW1hbmFnZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpc0h1bWFuLCBoYXNDdXJyZW50VHVybiwgZ2FtZWJvYXJkKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pc0h1bWFuID0gaXNIdW1hbjtcbiAgICAgICAgdGhpcy5oYXNDdXJyZW50VHVybiA9IGhhc0N1cnJlbnRUdXJuO1xuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZDtcbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5wdXJzdWluZ0hpdFNoaXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0VHdvTW92ZXNIaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0UmFuZG9tQXR0YWNrID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRlbGliZXJhdGVBdHRhY2tzID0gW107XG4gICAgICAgIHRoaXMuc3RhcnRpbmdJbnZlbnRvcnkgPSB7XG4gICAgICAgICAgICAgICAgY2FycmllcjogbmV3IFNoaXAoJ0NhcnJpZXInKSxcbiAgICAgICAgICAgICAgICBiYXR0bGVzaGlwOiBuZXcgU2hpcCgnQmF0dGxlc2hpcCcpLFxuICAgICAgICAgICAgICAgIGNydWlzZXI6IG5ldyBTaGlwKCdDcnVpc2VyJyksXG4gICAgICAgICAgICAgICAgc3VibWFyaW5lOiBuZXcgU2hpcCgnU3VibWFyaW5lJyksXG4gICAgICAgICAgICAgICAgZGVzdHJveWVyOiBuZXcgU2hpcCgnRGVzdHJveWVyJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5sZWdhbEF0dGFja3MgPSB0aGlzLmdlbmVyYXRlQWxsTGVnYWxBdHRhY2tzKCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVBbGxMZWdhbEF0dGFja3MoKXtcbiAgICAgICAgY29uc3QgbW92ZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpICs9IDEpe1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGogKz0gMSl7XG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKyA2NSkgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb3ZlcztcbiAgICB9XG5cbiAgICB5b3VXaW4oKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1dJTk5FUiEnKTtcbiAgICB9XG5cbiAgICB5b3VMb3NlKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdXZSBsb3NlJyk7XG4gICAgfVxuXG4gICAgZGVzdHJveWVkRW5lbXlTaGlwKHNoaXApe1xuICAgICAgICBjb25zb2xlLmxvZyhgV2UgZGVzdHJveWVkIGEgJHtzaGlwfWApO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2sodGFyZ2V0TG9jYXRpb24pe1xuXG4gICAgICAgIGNvbnN0IGhpdFN0YXR1cyA9IHRoaXMuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sodGFyZ2V0TG9jYXRpb24pO1xuXG4gICAgICAgIGlmIChoaXRTdGF0dXMgPT09ICdZb3Ugd2luIScpe1xuICAgICAgICAgICAgdGhpcy55b3VMb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGl0U3RhdHVzO1xuICAgIH1cblxuICAgIHNlbmRBdHRhY2sodGFyZ2V0TG9jYXRpb24pe1xuXG4gICAgICAgIGNvbnN0IGhpdFN0YXR1cyA9IHRoaXMub3Bwb25lbnQucmVjZWl2ZUF0dGFjayh0YXJnZXRMb2NhdGlvbik7XG5cbiAgICAgICAgaWYgKGhpdFN0YXR1cyA9PT0gJ1lvdSB3aW4hJyl7XG4gICAgICAgICAgICB0aGlzLnlvdVdpbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBoaXRTdGF0dXMgPT09ICdzdHJpbmcnICYmIGhpdFN0YXR1cyAhPT0gJ0ludmFsaWQgYXR0YWNrJyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU0hJUCBIQVMgQkVFTiBERVNUUk9ZRUQgLS0tLS0tLS0nKVxuICAgICAgICAgICAgdGhpcy5wdXJzdWluZ0hpdFNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGFzdFR3b01vdmVzSGl0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRlbGliZXJhdGVBdHRhY2tzID0gW107XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3llZEVuZW15U2hpcChoaXRTdGF0dXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGhpdFN0YXR1cyA9PT0gdHJ1ZSAmJiAhdGhpcy5wdXJzdWluZ0hpdFNoaXApe1xuICAgICAgICAgICAgdGhpcy5wdXJzdWluZ0hpdFNoaXAgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kZWxpYmVyYXRlQXR0YWNrcy5wdXNoKHRhcmdldExvY2F0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChoaXRTdGF0dXMgPT09IHRydWUgJiYgdGhpcy5wdXJzdWluZ0hpdFNoaXApe1xuICAgICAgICAgICAgdGhpcy5sYXN0VHdvTW92ZXNIaXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kZWxpYmVyYXRlQXR0YWNrcy5wdXNoKHRhcmdldExvY2F0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChoaXRTdGF0dXMgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIHRoaXMubGFzdFR3b01vdmVzSGl0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgJHt0YXJnZXRMb2NhdGlvbn0gZnJvbSB0aGUgbGVnYWwgbGlzdGApO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlQXR0YWNrRnJvbUxlZ2FsTGlzdCh0YXJnZXRMb2NhdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHsgaGl0U3RhdHVzLCB0YXJnZXRMb2NhdGlvbn0gO1xuICAgIH1cblxuICAgIHJlbW92ZUF0dGFja0Zyb21MZWdhbExpc3QoYXR0YWNrKXtcblxuICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IHRoaXMubGVnYWxBdHRhY2tzLmluZGV4T2YoYXR0YWNrKTtcblxuICAgICAgICB0aGlzLmxlZ2FsQXR0YWNrcy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlUmFuZG9tTGVnYWxBdHRhY2soKXtcbiAgICAgICAgY29uc3QgYXR0YWNrSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxlZ2FsQXR0YWNrcy5sZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmxlZ2FsQXR0YWNrc1thdHRhY2tJbmRleF07XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVSYW5kb21Gb2xsb3d1cEF0dGFjayhhdHRhY2tDZW50ZXIpe1xuXG4gICAgICAgIGNvbnN0IGF0dGFja0NlbnRlckNvZGVOb3J0aCA9IGF0dGFja0NlbnRlci5jaGFyQ29kZUF0KDApIC0gMTtcbiAgICAgICAgY29uc3QgYXR0YWNrQ2VudGVyQ29kZVNvdXRoID0gYXR0YWNrQ2VudGVyLmNoYXJDb2RlQXQoMCkgKyAxO1xuXG4gICAgICAgIGNvbnN0IG5vcnRoID0gU3RyaW5nLmZyb21DaGFyQ29kZShhdHRhY2tDZW50ZXJDb2RlTm9ydGgpICsgYXR0YWNrQ2VudGVyWzFdO1xuICAgICAgICBjb25zdCBzb3V0aCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYXR0YWNrQ2VudGVyQ29kZVNvdXRoKSArIGF0dGFja0NlbnRlclsxXTtcbiAgICAgICAgY29uc3QgZWFzdCA9IGF0dGFja0NlbnRlclswXSArIChhdHRhY2tDZW50ZXJbMV0gLSAxKTtcbiAgICAgICAgY29uc3Qgd2VzdCA9IGF0dGFja0NlbnRlclswXSArIChwYXJzZUludChhdHRhY2tDZW50ZXJbMV0sIDEwKSArIDEpO1xuXG4gICAgICAgIGNvbnN0IGZvbGxvd3VwTW92ZXMgPSBbbm9ydGgsIHNvdXRoLCBlYXN0LCB3ZXN0XTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgU3RhcnRpbmcgd2l0aCB0aGUgZm9sbG93dXAgbW92ZXMgJHtKU09OLnN0cmluZ2lmeShmb2xsb3d1cE1vdmVzKX1gKTtcblxuICAgICAgICBjb25zdCBtb3Zlc1RvUmVtb3ZlID0gW107XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBpbGxlZ2FsIG9wdGlvbnNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9MSApe1xuICAgICAgICAgICAgaWYgKHRoaXMubGVnYWxBdHRhY2tzLmluZGV4T2YoZm9sbG93dXBNb3Zlc1tpXSkgPCAwKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgKioqKioqKlJlbW92aW5nICR7Zm9sbG93dXBNb3Zlc1tpXX0gYXQgaW5kZXggJHtpfWApO1xuICAgICAgICAgICAgICAgIG1vdmVzVG9SZW1vdmUucHVzaChmb2xsb3d1cE1vdmVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBIZXJlJ3MgdGhlIG1vdmVzIHdlIGFyZSByZW1vdmluZyAke0pTT04uc3RyaW5naWZ5KG1vdmVzVG9SZW1vdmUpfWApO1xuXG4gICAgICAgIGlmIChtb3Zlc1RvUmVtb3ZlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlc1RvUmVtb3ZlLmxlbmd0aDsgaSArPSAxKXtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGZvbGxvd3VwTW92ZXMuaW5kZXhPZihtb3Zlc1RvUmVtb3ZlW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgZm9sbG93dXBNb3Zlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGAtLSAtLSAtLSBQaWNraW5nIGEgZm9sbG93dXAgbW92ZSBmcm9tICR7SlNPTi5zdHJpbmdpZnkoZm9sbG93dXBNb3Zlcyl9IC0tIC0tIC0tYCk7XG5cbiAgICAgICAgaWYgKGZvbGxvd3VwTW92ZXMubGVuZ3RoID09PSAwIHx8IG1vdmVzVG9SZW1vdmUubGVuZ3RoID09PSA0KXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlUmFuZG9tTGVnYWxBdHRhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZvbGxvd3VwTW92ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZm9sbG93dXBNb3Zlcy5sZW5ndGgpXTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURlbGliZXJhdGVGb2xsb3d1cEF0dGFjaygpe1xuICAgICAgICBsZXQgYXR0YWNrO1xuXG4gICAgICAgIGNvbnN0IHR3b0F0dGFja3NCYWNrID0gdGhpcy5kZWxpYmVyYXRlQXR0YWNrc1t0aGlzLmRlbGliZXJhdGVBdHRhY2tzLmxlbmd0aCAtIDJdO1xuICAgICAgICBjb25zdCBvbmVBdHRhY2tCYWNrID0gdGhpcy5kZWxpYmVyYXRlQXR0YWNrc1t0aGlzLmRlbGliZXJhdGVBdHRhY2tzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGlmIChvbmVBdHRhY2tCYWNrWzBdLmNoYXJDb2RlQXQoMCkgPiB0d29BdHRhY2tzQmFjay5jaGFyQ29kZUF0KDApKXtcblxuICAgICAgICAgICAgYXR0YWNrID0gU3RyaW5nLmZyb21DaGFyQ29kZShvbmVBdHRhY2tCYWNrLmNoYXJDb2RlQXQoMCkgKyAxKSBcbiAgICAgICAgICAgICAgICArIG9uZUF0dGFja0JhY2tbMV07XG5cbiAgICAgICAgfSBlbHNlIGlmIChvbmVBdHRhY2tCYWNrWzBdLmNoYXJDb2RlQXQoMCkgPCB0d29BdHRhY2tzQmFjay5jaGFyQ29kZUF0KDApKXtcblxuICAgICAgICAgICAgYXR0YWNrID0gU3RyaW5nLmZyb21DaGFyQ29kZShvbmVBdHRhY2tCYWNrLmNoYXJDb2RlQXQoMCkgLTEpIFxuICAgICAgICAgICAgICAgICsgb25lQXR0YWNrQmFja1sxXTtcblxuICAgICAgICB9IGVsc2UgaWYgKG9uZUF0dGFja0JhY2tbMV0gPiB0d29BdHRhY2tzQmFja1sxXSl7XG5cbiAgICAgICAgICAgIGF0dGFjayA9IG9uZUF0dGFja0JhY2tbMF0gKyAocGFyc2VJbnQob25lQXR0YWNrQmFja1sxXSwgMTApICsgMSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvbmVBdHRhY2tCYWNrWzFdIDwgdHdvQXR0YWNrc0JhY2tbMV0pe1xuXG4gICAgICAgICAgICBhdHRhY2sgPSBvbmVBdHRhY2tCYWNrWzBdICsgKHBhcnNlSW50KG9uZUF0dGFja0JhY2tbMV0sIDEwKSAtIDEpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5sZWdhbEF0dGFja3MuaW5kZXhPZihhdHRhY2spID4gMCA/IFxuICAgICAgICAgICAgYXR0YWNrIDogXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlUmFuZG9tRm9sbG93dXBBdHRhY2sodGhpcy5kZWxpYmVyYXRlQXR0YWNrc1swXSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVBdHRhY2soKXtcbiAgICAgICAgbGV0IGF0dGFjaztcblxuICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGN1cnJlbnQgc3RhdGUgb2Ygb3VyIG1hbnkgYm9vbHM6IExhc3QgdHdvIG1vdmVzIGhpdCBpcyAke3RoaXMubGFzdFR3b01vdmVzSGl0fSwgUHVyc3VpbmcgaGl0IHNoaXAgaXMgJHt0aGlzLnB1cnN1aW5nSGl0U2hpcH0sIGFuZCBvdXIgRGVsaWJlcmF0ZSBhdHRhY2sgaXMgbGlzdCAke0pTT04uc3RyaW5naWZ5KHRoaXMuZGVsaWJlcmF0ZUF0dGFja3MpfSwgd2hpbGUgbGFzdCByYW5kb20gYXR0YWNrIHdhcyAke3RoaXMubGFzdFJhbmRvbUF0dGFja31gKTtcblxuICAgICAgICAvLyBJZiBhIHNoaXAgaGFzIGFscmVhZHkgYmVlbiBzdHJ1Y2ssIHB1cnN1ZSBzaW5raW5nIGl0XG5cbiAgICAgICAgaWYgKHRoaXMucHVyc3VpbmdIaXRTaGlwICYmICF0aGlzLmxhc3RUd29Nb3Zlc0hpdCl7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRlbGliZXJhdGVBdHRhY2tzLmxlbmd0aCA+PSAyKXtcblxuICAgICAgICAgICAgICAgIC8vIElmIGEgc2hpcCBoYXMgYmVlbiBzdHJ1Y2sgdHdpY2UsIGJ1dCB3ZSBqdXN0IG1pc3NlZCxcbiAgICAgICAgICAgICAgICAvLyBhdHRhY2sgaW4gYSBncmlkIGVtYW5hdGluZyBmcm9tIHRoZSBmaXJzdCBoaXRcblxuICAgICAgICAgICAgICAgIGF0dGFjayA9IHRoaXMuZ2VuZXJhdGVSYW5kb21Gb2xsb3d1cEF0dGFjayh0aGlzLmRlbGliZXJhdGVBdHRhY2tzWzBdKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRG91YmxpbmcgYmFjayB0byAke2F0dGFja31gKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGF0dGFjayA9IHRoaXMuZ2VuZXJhdGVSYW5kb21Gb2xsb3d1cEF0dGFjayh0aGlzLmxhc3RSYW5kb21BdHRhY2spO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRoZSByYW5kb20gZm9sbG93dXAgbW92ZSBpcyAke2F0dGFja31gKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wdXJzdWluZ0hpdFNoaXAgJiYgdGhpcy5sYXN0VHdvTW92ZXNIaXQpe1xuXG4gICAgICAgICAgICBhdHRhY2sgPSB0aGlzLmdlbmVyYXRlRGVsaWJlcmF0ZUZvbGxvd3VwQXR0YWNrKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGxhc3QgdHdvIGF0dGFja3MgaGl0LCBhbmQgdGhlIG1vdmVzIHRoYXQgaGF2ZSBoaXQgYXJlICR7dGhpcy5kZWxpYmVyYXRlQXR0YWNrc30sIG1lYW5pbmcgdGhlIGRlbGliZXJhdGUgZm9sbG93dXAgaXMgJHthdHRhY2t9YCk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gSWYgYSBzaGlwIGhhcyBub3QgYmVlbiBzdHJ1Y2ssIGF0dGFjayByYW5kb21seVxuXG4gICAgICAgICAgICBhdHRhY2sgPSB0aGlzLmdlbmVyYXRlUmFuZG9tTGVnYWxBdHRhY2soKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBHZW5lcmF0aW5nIHJhbmRvbSBhdHRhY2sgJHthdHRhY2t9YCk7XG4gICAgICAgICAgICB0aGlzLmxhc3RSYW5kb21BdHRhY2sgPSBhdHRhY2s7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRBdHRhY2soYXR0YWNrKTtcbiAgICB9XG5cbiAgICByYW5kb21seVBvcHVsYXRlQm9hcmRXaXRoU2hpcHMoKXtcbiAgICAgICAgbGV0IHBsYWNlZFNoaXBzID0gNDtcblxuICAgICAgICBjb25zdCByYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbjtcbiAgICAgICAgICAgIHN3aXRjaCAoTWF0aC5mbG9vcigxICsgTWF0aC5yYW5kb20oKSAqIDMpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbiA9ICdOb3J0aCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnU291dGgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ0Vhc3QnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ1dlc3QnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0RpcmVjdGlvbiB1bnZhaWxhYmxlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgd2hpbGUgKHBsYWNlZFNoaXBzID49IDApe1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IE9iamVjdC5lbnRyaWVzKHRoaXMuc3RhcnRpbmdJbnZlbnRvcnkpW3BsYWNlZFNoaXBzXVsxXTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYEF0dGVtcHRpbmcgdG8gcGxhY2UgJHtKU09OLnN0cmluZ2lmeShzaGlwKX1gKTtcblxuICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gdGhpcy5nYW1lYm9hcmQucGxhY2UoXG4gICAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlUmFuZG9tTGVnYWxBdHRhY2soKSxcbiAgICAgICAgICAgICAgICByYW5kb21PcmllbnRhdGlvbigpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChwbGFjZW1lbnQgIT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICBwbGFjZWRTaGlwcyAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5pZCA9IDA7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgICAgIHRoaXMuc2lua1N0YXR1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRldGVybWluZVR5cGUobmFtZSk7XG4gICAgICAgIHRoaXMubG9jYXRpb25zID0gW107XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5lVHlwZShuYW1lKSB7XG4gICAgICAgIHN3aXRjaChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdDYXJyaWVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdCYXR0bGVzaGlwJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDcnVpc2VyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTdWJtYXJpbmUnOlxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Rlc3Ryb3llcic6XG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGhpcyAke3RoaXMubmFtZX0gaGFzIHN1c3RhaW5lZCAke3RoaXMuaGl0c30gaGl0c2ApO1xuICAgICAgICB0aGlzLmNoZWNrSWZTdW5rKCk7XG4gICAgfVxuXG4gICAgY2hlY2tJZlN1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpe1xuICAgICAgICAgICAgdGhpcy5zaW5rU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcblxuY2xhc3MgVHVybk1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGd1aSl7XG4gICAgICAgIHRoaXMuZ3VpID0gZ3VpO1xuICAgICAgICB0aGlzLnBsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jcHUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucGxheWVyU2hpcHNQbGFjZWQgPSAwO1xuICAgIH1cblxuICAgIHNldHVwQm9hcmQoKXtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIGNvbnN0IGNwdUJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoJ1BsYXllcicsIHRydWUsIHRydWUsIHBsYXllckJvYXJkKTtcbiAgICAgICAgdGhpcy5jcHUgPSBuZXcgUGxheWVyKCdDUFUnLCBmYWxzZSwgZmFsc2UsIGNwdUJvYXJkKTtcblxuICAgICAgICB0aGlzLnBsYXllci5vcHBvbmVudCA9IHRoaXMuY3B1O1xuICAgICAgICB0aGlzLmNwdS5vcHBvbmVudCA9IHRoaXMucGxheWVyO1xuXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDcHVTaGlwcygpO1xuICAgIH1cbiAgICBcbiAgICBwbGFjZVVzZXJTaGlwKG5hbWUsIGxvY2F0aW9uLCBvcmllbnRhdGlvbil7XG4gICAgICAgIGNvbnNvbGUubG9nKGBPdmVyIGhlcmUgYXQgJHtbbmFtZSwgbG9jYXRpb24sIG9yaWVudGF0aW9uXX1gKTtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMucGxheWVyLnN0YXJ0aW5nSW52ZW50b3J5W25hbWVdO1xuXG4gICAgICAgIGNvbnN0IHBsYWNlbWVudCA9IHRoaXMucGxheWVyLmdhbWVib2FyZC5wbGFjZShzaGlwLCBsb2NhdGlvbiwgb3JpZW50YXRpb24pO1xuICAgICAgICBpZiAoIXBsYWNlbWVudCl7XG4gICAgICAgICAgICAvLyBUaGlzIHBsYWNlbWVudCBpc24ndCBsZWdhbFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ndWkucGxhY2VTaGlwcyh0aGlzLnBsYXllci5nYW1lYm9hcmQucmVtYWluaW5nU2hpcHMsICdwbGF5ZXInKTtcblxuICAgICAgICB0aGlzLnBsYXllclNoaXBzUGxhY2VkICs9IDE7XG4gICAgICAgIGlmICh0aGlzLnBsYXllclNoaXBzUGxhY2VkID09PSA1KXtcbiAgICAgICAgICAgIHRoaXMuYWxsVXNlclNoaXBzUGxhY2VkKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUNwdVNoaXBzKCl7XG4gICAgICAgIHRoaXMuY3B1LnJhbmRvbWx5UG9wdWxhdGVCb2FyZFdpdGhTaGlwcygpO1xuICAgICAgICB0aGlzLmd1aS5wbGFjZVNoaXBzKHRoaXMuY3B1LmdhbWVib2FyZC5yZW1haW5pbmdTaGlwcywgJ29wcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgYWxsVXNlclNoaXBzUGxhY2VkKCl7XG4gICAgICAgIHRoaXMuZ3VpLmN1cnJlbnRQaGFzZS5zZXR1cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmd1aS5jdXJyZW50UGhhc2UucGxheWVyVHVybiA9IHRydWU7XG4gICAgfVxuXG4gICAgcGxheWVyTW92ZShjb29yZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkKTtcblxuICAgICAgICBjb25zdCBhdHRhY2sgPSB0aGlzLnBsYXllci5zZW5kQXR0YWNrKGNvb3JkKTtcblxuICAgICAgICAvLyBXZSBkZXN0cm95ZWQgYSBzaGlwXG4gICAgICAgIGlmICh0eXBlb2YgYXR0YWNrLmhpdFN0YXR1cyA9PT0gJ3N0cmluZycgJiYgYXR0YWNrLmhpdFN0YXR1cyAhPT0gJ0ludmFsaWQgYXR0YWNrJyl7XG4gICAgICAgICAgICB0aGlzLmd1aS5hbGVydFNoaXBEZXN0cm95ZWQoYXR0YWNrLmhpdFN0YXR1cywgJ3BsYXllcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3B1TW92ZSgpe1xuICAgICAgICBpZiAoIXRoaXMuZ3VpLmN1cnJlbnRQaGFzZS5vdmVyKXtcbiAgICAgICAgICAgIGNvbnN0IGF0dGFjayA9IHRoaXMuY3B1LmdlbmVyYXRlQXR0YWNrKClcbiAgICAgICAgICAgIGNvbnN0IGdyaWRTcXVhcmUgPSBhdHRhY2sudGFyZ2V0TG9jYXRpb247XG4gICAgICAgICAgICB0aGlzLmd1aS5hdHRhY2tQbGF5ZXJTcXVhcmUoZ3JpZFNxdWFyZSk7XG4gICAgXG4gICAgICAgICAgICAvLyBXZSBkZXN0cm95ZWQgYSBzaGlwXG4gICAgICAgICAgICBpZiAodHlwZW9mIGF0dGFjay5oaXRTdGF0dXMgPT09ICdzdHJpbmcnICYmIGF0dGFjay5oaXRTdGF0dXMgIT09ICdJbnZhbGlkIGF0dGFjaycpe1xuICAgICAgICAgICAgICAgIHRoaXMuZ3VpLmFsZXJ0U2hpcERlc3Ryb3llZChhdHRhY2suaGl0U3RhdHVzLCAnY3B1Jyk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB0aGlzLmd1aS5jdXJyZW50UGhhc2UuY3B1VHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ndWkuY3VycmVudFBoYXNlLnBsYXllclR1cm4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVHVybk1hbmFnZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBHVUlNYW5hZ2VyIGZyb20gJy4vR1VJLW1hbmFnZXInO1xuaW1wb3J0IFR1cm5NYW5hZ2VyIGZyb20gJy4vdHVybi1tYW5hZ2VyJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuXG5jb25zdCBkaXNwbGF5TWFuYWdlciA9IG5ldyBHVUlNYW5hZ2VyKCk7XG5jb25zdCB0dXJuTWFuYWdlciA9IG5ldyBUdXJuTWFuYWdlcihkaXNwbGF5TWFuYWdlcik7XG5kaXNwbGF5TWFuYWdlci5zZXRUdXJuTWFuYWdlcih0dXJuTWFuYWdlcik7XG5cbmRpc3BsYXlNYW5hZ2VyLmluaXRpYWxQYWdlU2V0dXAoKTtcbnR1cm5NYW5hZ2VyLnNldHVwQm9hcmQoKTtcblxuY29uc29sZS5sb2coJ1Rlc3RhbXVvLicpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==