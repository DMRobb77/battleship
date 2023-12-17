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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `h2 {
    color: red;
}

/* Header */


/* Body */

/* Gameboards */

.gameboards {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.gameboards div {
    border: 1px solid red;
    display: grid;
    grid-template-rows: repeat(11, 2.5rem);
    grid-template-columns: repeat(11, 2.5rem);
}

.player-board .gridsquare:hover {
    background-color: black;
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

/* Footer */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;AACd;;AAEA,WAAW;;;AAGX,SAAS;;AAET,eAAe;;AAEf;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,sCAAsC;IACtC,yCAAyC;AAC7C;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA,WAAW","sourcesContent":["h2 {\n    color: red;\n}\n\n/* Header */\n\n\n/* Body */\n\n/* Gameboards */\n\n.gameboards {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.gameboards div {\n    border: 1px solid red;\n    display: grid;\n    grid-template-rows: repeat(11, 2.5rem);\n    grid-template-columns: repeat(11, 2.5rem);\n}\n\n.player-board .gridsquare:hover {\n    background-color: black;\n}\n\n.opponent-board .gridsquare:hover {\n    background-color: red;\n}\n\n.ship {\n    background-color: blue;\n}\n\n.struck {\n    background-color: green;\n}\n\n.miss {\n    background-color: yellow;\n}\n\n/* Footer */"],"sourceRoot":""}]);
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
class GUIManager {
    constructor() {
        this.turnManager = undefined;
        this.currentPhase = {
            setup: true,
            playerTurn: false,
            cpuTurn: false
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

        this.turnManager.cpuMove();
    }
    
    playerSquareClicked(square){

    }

    gridSquareClicked(e){
        const clickedSquare = e.target;
        const parentElement = clickedSquare.parentNode;

        if (clickedSquare.classList.contains('label') || 
            clickedSquare.classList.contains('inert')){
            return;
        }

        if (parentElement.classList.contains('opponent-board')){
            this.opponentSquareClicked(clickedSquare);
        } else if (parentElement.classList.contains('player-board')){
            this.playerSquareClicked(clickedSquare);
        }
        console.log(clickedSquare);
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

    initialPageSetup(){
        console.log(`We're setting up the page`);
        const playerBoard = document.querySelector('.gameboards .player-board');
        const opponentBoard = document.querySelector('.gameboards .opponent-board');
        this.generateBoard(playerBoard);
        this.generateBoard(opponentBoard);
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
                console.log(`*******Removing ${followupMoves[i]} at index ${i} for fucks sake`);
                movesToRemove.push(followupMoves[i]);
            }
        }

        console.log(`Here's the moves we are removing ${JSON.stringify(movesToRemove)}`);

        if (movesToRemove.length > 0){
            for (let i = 0; i < movesToRemove.length; i += 1){
                const index = followupMoves.indexOf(movesToRemove[i])
                if (index > 0){
                    followupMoves.splice(index, 1);
                }
            }
        }

        console.log(`-- -- -- Picking a followup move from ${JSON.stringify(followupMoves)} -- -- --`);

        if (followupMoves.length === 0){
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
    }

    setupGame(){
        const playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
        const cpuBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player', true, true, playerBoard);
        this.cpu = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]('CPU', false, false, cpuBoard);

        this.player.opponent = this.cpu;
        this.cpu.opponent = this.player;

        this.player.randomlyPopulateBoardWithShips();
        this.gui.placeShips(this.player.gameboard.remainingShips, 'player');
        this.cpu.randomlyPopulateBoardWithShips();
        this.gui.placeShips(this.cpu.gameboard.remainingShips, 'opponent');

        this.gui.currentPhase = false;
        this.player.currentPhase = true;
    }
    
    playerMove(coord){
        console.log(coord);

        this.player.sendAttack(coord);
    }

    cpuMove(){
        const attack = this.cpu.generateAttack()
        const gridSquare = attack.targetLocation;
        this.gui.attackPlayerSquare(gridSquare);

    }

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TurnManager);

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
turnManager.setupGame();

console.log('Testamuo.');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixXQUFXLGdCQUFnQixXQUFXO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q1c7QUFDTTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLGtEQUFTO0FBQ3pDLDZCQUE2QixrREFBUztBQUN0QywwQkFBMEIsK0NBQU07QUFDaEMsdUJBQXVCLCtDQUFNOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxpRUFBZSxXQUFXOzs7Ozs7VUM1QzFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDa0I7QUFDRTtBQUNYOztBQUU5QiwyQkFBMkIsb0RBQVU7QUFDckMsd0JBQXdCLHFEQUFXO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUEseUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR1VJLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdHVybi1tYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGgyIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4vKiBIZWFkZXIgKi9cblxuXG4vKiBCb2R5ICovXG5cbi8qIEdhbWVib2FyZHMgKi9cblxuLmdhbWVib2FyZHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xufVxuXG4uZ2FtZWJvYXJkcyBkaXYge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAyLjVyZW0pO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAyLjVyZW0pO1xufVxuXG4ucGxheWVyLWJvYXJkIC5ncmlkc3F1YXJlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm9wcG9uZW50LWJvYXJkIC5ncmlkc3F1YXJlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uc3RydWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLyogRm9vdGVyICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBLFdBQVc7OztBQUdYLFNBQVM7O0FBRVQsZUFBZTs7QUFFZjtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNDQUFzQztJQUN0Qyx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUEsV0FBV1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoMiB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcblxcbi8qIEJvZHkgKi9cXG5cXG4vKiBHYW1lYm9hcmRzICovXFxuXFxuLmdhbWVib2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5nYW1lYm9hcmRzIGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDIuNXJlbSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAyLjVyZW0pO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIC5ncmlkc3F1YXJlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5vcHBvbmVudC1ib2FyZCAuZ3JpZHNxdWFyZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uc3RydWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgR1VJTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudHVybk1hbmFnZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY3VycmVudFBoYXNlID0ge1xuICAgICAgICAgICAgc2V0dXA6IHRydWUsXG4gICAgICAgICAgICBwbGF5ZXJUdXJuOiBmYWxzZSxcbiAgICAgICAgICAgIGNwdVR1cm46IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0VHVybk1hbmFnZXIobWFuYWdlcil7XG4gICAgICAgIHRoaXMudHVybk1hbmFnZXIgPSBtYW5hZ2VyO1xuICAgIH1cblxuICAgIGdlbmVyYXRlR3JpZE1hcmtlcih5LHggPSBudWxsKXtcbiAgICAgICAgY29uc3QgbnVtYmVyVG9MZXR0ZXIgPSB7XG4gICAgICAgICAgICAwOiAnTGFiZWwnLFxuICAgICAgICAgICAgMTogJ0EnLFxuICAgICAgICAgICAgMjogJ0InLFxuICAgICAgICAgICAgMzogJ0MnLFxuICAgICAgICAgICAgNDogJ0QnLFxuICAgICAgICAgICAgNTogJ0UnLFxuICAgICAgICAgICAgNjogJ0YnLFxuICAgICAgICAgICAgNzogJ0cnLFxuICAgICAgICAgICAgODogJ0gnLFxuICAgICAgICAgICAgOTogJ0knLFxuICAgICAgICAgICAgMTA6ICdKJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZExvY2F0aW9uID0gW1xuICAgICAgICAgICAgbnVtYmVyVG9MZXR0ZXJbeV0sXG4gICAgICAgICAgICB4XG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlZExvY2F0aW9uLmpvaW4oJycpO1xuICAgIH1cblxuICAgIGF0dGFja1BsYXllclNxdWFyZShzcXVhcmUpe1xuICAgICAgICBjb25zdCBwb3NzaWJsZVNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtzcXVhcmV9YCk7XG4gICAgICAgIGxldCB0YXJnZXRTcXVhcmU7XG4gICAgICAgIHBvc3NpYmxlU3F1YXJlcy5mb3JFYWNoKHBvc3NpYmxlU3F1YXJlID0+IHtcbiAgICAgICAgICAgIGlmIChwb3NzaWJsZVNxdWFyZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygncGxheWVyLWJvYXJkJykpe1xuICAgICAgICAgICAgICAgIHRhcmdldFNxdWFyZSA9IHBvc3NpYmxlU3F1YXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGFyZ2V0U3F1YXJlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKXtcbiAgICAgICAgICAgIHRhcmdldFNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICAgICAgICB0YXJnZXRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnaW5lcnQnKTtcbiAgICAgICAgICAgIHRhcmdldFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdHJ1Y2snKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdpbmVydCcpO1xuICAgICAgICAgICAgdGFyZ2V0U3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wcG9uZW50U3F1YXJlQ2xpY2tlZChzcXVhcmUpe1xuICAgICAgICBpZiAoc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKXtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaW5lcnQnKTtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdHJ1Y2snKTtcblxuICAgICAgICAgICAgY29uc3QgZ3JpZENvb3JkID0gQXJyYXkuZnJvbShzcXVhcmUuY2xhc3NMaXN0KTtcbiAgICAgICAgICAgIHRoaXMudHVybk1hbmFnZXIucGxheWVyTW92ZShncmlkQ29vcmRbMF0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaW5lcnQnKTtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyaWRDb29yZCA9IEFycmF5LmZyb20oc3F1YXJlLmNsYXNzTGlzdCk7XG4gICAgICAgICAgICB0aGlzLnR1cm5NYW5hZ2VyLnBsYXllck1vdmUoZ3JpZENvb3JkWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHVybk1hbmFnZXIuY3B1TW92ZSgpO1xuICAgIH1cbiAgICBcbiAgICBwbGF5ZXJTcXVhcmVDbGlja2VkKHNxdWFyZSl7XG5cbiAgICB9XG5cbiAgICBncmlkU3F1YXJlQ2xpY2tlZChlKXtcbiAgICAgICAgY29uc3QgY2xpY2tlZFNxdWFyZSA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gY2xpY2tlZFNxdWFyZS5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmIChjbGlja2VkU3F1YXJlLmNsYXNzTGlzdC5jb250YWlucygnbGFiZWwnKSB8fCBcbiAgICAgICAgICAgIGNsaWNrZWRTcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmVydCcpKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnb3Bwb25lbnQtYm9hcmQnKSl7XG4gICAgICAgICAgICB0aGlzLm9wcG9uZW50U3F1YXJlQ2xpY2tlZChjbGlja2VkU3F1YXJlKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncGxheWVyLWJvYXJkJykpe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcXVhcmVDbGlja2VkKGNsaWNrZWRTcXVhcmUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGNsaWNrZWRTcXVhcmUpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQm9hcmQocGFyZW50Tm9kZSl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDEwOyBpICs9IDEpe1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gMTA7IGogKz0gMSl7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LmFkZCh0aGlzLmdlbmVyYXRlR3JpZE1hcmtlcihpLCBqKSk7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdncmlkc3F1YXJlJyk7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChncmlkU3F1YXJlKTtcblxuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRTcXVhcmVDbGlja2VkKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChpIDwgMSAmJiBqICE9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS50ZXh0Q29udGVudCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdncmlkc3F1YXJlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMCAmJiBqID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS50ZXh0Q29udGVudCA9IHRoaXMuZ2VuZXJhdGVHcmlkTWFya2VyKGkpO1xuICAgICAgICAgICAgICAgICAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZHNxdWFyZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMCAmJiBqID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWRzcXVhcmUnKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRpYWxQYWdlU2V0dXAoKXtcbiAgICAgICAgY29uc29sZS5sb2coYFdlJ3JlIHNldHRpbmcgdXAgdGhlIHBhZ2VgKTtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkcyAucGxheWVyLWJvYXJkJyk7XG4gICAgICAgIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkcyAub3Bwb25lbnQtYm9hcmQnKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUJvYXJkKHBsYXllckJvYXJkKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUJvYXJkKG9wcG9uZW50Qm9hcmQpO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcHMoc2hpcHMsIGdhbWVib2FyZCl7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkgKz0gMSl7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBzW2ldLmxvY2F0aW9ucy5sZW5ndGg7IGogKz0gMSl7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZENvb3JkID0gc2hpcHNbaV0ubG9jYXRpb25zW2pdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZENvb3JkID0gdGhpcy5nZW5lcmF0ZUdyaWRNYXJrZXIoLi4uZ3JpZENvb3JkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb252ZXJ0ZWRDb29yZCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBgLiR7Z2FtZWJvYXJkfS1ib2FyZCAuJHtjb252ZXJ0ZWRDb29yZH1gO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgZ3JpZERpdi5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR1VJTWFuYWdlcjsiLCJjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubWlzc2VzUmVjZWl2ZWQgPSBbXTtcbiAgICAgICAgdGhpcy5oaXRzUmVjZWl2ZWQgPSBbXTtcbiAgICAgICAgdGhpcy5yZW1haW5pbmdTaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLmRlc3Ryb3llZFNoaXBzID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudFNoaXBJZCA9IDA7XG4gICAgICAgIHRoaXMuYm9hcmRDbGVhcmVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcGxhY2Uoc2hpcCwgYm93TG9jYXRpb24sIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHBsYWNlbWVudCA9IHRoaXMuY2hlY2tQbGFjZW1lbnRBdmFpbGFibGUoYm93TG9jYXRpb24sIG9yaWVudGF0aW9uLCBzaGlwLmxlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICBpZiAocGxhY2VtZW50KXtcblxuICAgICAgICAgICAgc2hpcC5pZCA9IHRoaXMuY3VycmVudFNoaXBJZDtcbiAgICAgICAgICAgIHNoaXAubG9jYXRpb25zID0gcGxhY2VtZW50O1xuICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdTaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcElkICs9IDE7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBTaGlwIGNhbm5vdCBiZSBsZWdhbGx5IHBsYWNlZCBoZXJlLCByZXR1cm4gZmFsc2VcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nU2hpcHM7XG4gICAgfVxuXG4gICAgY2hlY2tGb3JDb2xsaXNpb24ocGxhY2VtZW50LCByZW1haW5pbmdTaGlwcykge1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBwcm9wb3NlZCBwbGFjZW1lbnQgd291bGQgY29sbGlkZSB3aXRoIHBsYWNlZCBzaGlwc1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtYWluaW5nU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nU2hpcCA9IHJlbWFpbmluZ1NoaXBzW2ldO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYWNlbWVudC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3Bvc2VkQ29vcmRpbmF0ZSA9IHBsYWNlbWVudFtqXTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3VuZCA9IGV4aXN0aW5nU2hpcC5sb2NhdGlvbnMuc29tZShcbiAgICAgICAgICAgICAgICAgICAgKGxvY2F0aW9uKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25bMF0gPT09IHByb3Bvc2VkQ29vcmRpbmF0ZVswXSAmJiBcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25bMV0gPT09IHByb3Bvc2VkQ29vcmRpbmF0ZVsxXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBDb2xsaXNpb24gZGV0ZWN0ZWQsIHJldHVybiB0cnVlXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICByZXR1cm4gZmFsc2U7ICAgLy8gTm8gY29sbGlzaW9uIGRldGVjdGVkLCByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjaGVja1BsYWNlbWVudEF2YWlsYWJsZShzdGFydCwgb3JpZW50YXRpb24sIGxlbmd0aCkge1xuICAgICAgICBjb25zdCBpbnZhbGlkUGxhY2VtZW50ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZFN0YXJ0ID0gdGhpcy5jb252ZXJ0TG9jYXRpb25Gcm9tU3RyaW5nKHN0YXJ0KTtcbiAgICAgICAgY29uc3QgcHJvcG9zZWRQbGFjZW1lbnQgPSBbY29udmVydGVkU3RhcnRdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBQbGFjaW5nIGF0ICR7c3RhcnR9IHdpdGggb3JpZW50YXRpb24gJHtvcmllbnRhdGlvbn0gZm9yIGEgc2hpcCBvZiBsZW5ndGggJHtsZW5ndGh9YCk7XG5cbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZUNoYW5nZXMgPSB7XG4gICAgICAgICAgICBOb3J0aDogWy0xLCAwXSxcbiAgICAgICAgICAgIEVhc3Q6IFswLCAxXSxcbiAgICAgICAgICAgIFNvdXRoOiBbMSwgMF0sXG4gICAgICAgICAgICBXZXN0OiBbMCwgLTFdLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IFtyb3dDaGFuZ2UsIGNvbENoYW5nZV0gPSBjb29yZGluYXRlQ2hhbmdlc1tvcmllbnRhdGlvbl07XG4gICAgICAgICAgICBwcm9wb3NlZFBsYWNlbWVudC5wdXNoKFtjb252ZXJ0ZWRTdGFydFswXSArIGkgKiByb3dDaGFuZ2UsIGNvbnZlcnRlZFN0YXJ0WzFdICsgaSAqIGNvbENoYW5nZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNQbGFjZW1lbnRPZmZCb2FyZChwcm9wb3NlZFBsYWNlbWVudCwgbGVuZ3RoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGludmFsaWRQbGFjZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jaGVja0ZvckNvbGxpc2lvbihwcm9wb3NlZFBsYWNlbWVudCwgdGhpcy5yZW1haW5pbmdTaGlwcykpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnZhbGlkUGxhY2VtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb3Bvc2VkUGxhY2VtZW50O1xuICAgIH1cbiAgICBcbiAgICBpc1BsYWNlbWVudE9mZkJvYXJkKHBsYWNlbWVudCwgbGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkU2l6ZSA9IDEwO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBwbGFjZW1lbnRbal07XG4gICAgICAgICAgICBpZiAocm93IDw9IDAgfHwgcm93ID4gYm9hcmRTaXplIHx8IGNvbCA8PSAwIHx8IGNvbCA+IGJvYXJkU2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBjb252ZXJ0TG9jYXRpb25Gcm9tU3RyaW5nKGxvYyl7XG5cbiAgICAgICAgY29uc3QgbGV0dGVyVG9OdW1iZXIgPSB7XG4gICAgICAgICAgICBBOiAxLFxuICAgICAgICAgICAgQjogMixcbiAgICAgICAgICAgIEM6IDMsXG4gICAgICAgICAgICBEOiA0LFxuICAgICAgICAgICAgRTogNSxcbiAgICAgICAgICAgIEY6IDYsXG4gICAgICAgICAgICBHOiA3LFxuICAgICAgICAgICAgSDogOCxcbiAgICAgICAgICAgIEk6IDksXG4gICAgICAgICAgICBKOiAxMFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZExvY2F0aW9uID0gW1xuICAgICAgICAgICAgbGV0dGVyVG9OdW1iZXJbbG9jWzBdXSxcbiAgICAgICAgICAgIHBhcnNlSW50KGxvYy5zbGljZSgxKSwgMTApXG4gICAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gY29udmVydGVkTG9jYXRpb247XG4gICAgfVxuXG4gICAgcmVjb3JkTWlzc2VkQXR0YWNrKG1pc3Mpe1xuICAgICAgICB0aGlzLm1pc3Nlc1JlY2VpdmVkLnB1c2gobWlzcyk7XG4gICAgfVxuXG4gICAgY2hlY2tBdHRhY2tQcmVleGlzdGluZyhoaXQpIHtcbiAgICAgICAgLy8gUmV0dXJucyB0cnVlIGlmIHRoaXMgYXR0YWNrIGhhcyBhbHJlYWR5IG9jY3VyZWRcbiAgICAgICAgY29uc3QgYWxsQXR0YWNrcyA9IHRoaXMubWlzc2VzUmVjZWl2ZWQuY29uY2F0KHRoaXMuaGl0c1JlY2VpdmVkKTtcblxuICAgICAgICBjb25zdCBmb3VuZCA9IGFsbEF0dGFja3Muc29tZShpbm5lckFycmF5ID0+IFxuICAgICAgICAgICAgaW5uZXJBcnJheVswXSA9PT0gaGl0WzBdICYmIGlubmVyQXJyYXlbMV0gPT09IGhpdFsxXVxuICAgICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGNoZWNrQXR0YWNrSGl0U2hpcChoaXRMb2MsIHJlbWFpbmluZ1NoaXBzKXtcbiAgICAgICAgLy8gU2VhcmNoIHRoZSBsaXN0IG9mIHJlbWFpbmluZyBzaGlwIGxvY2F0aW9ucyB0byBzZWUgaWYgaXQgbWF0Y2hlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbWFpbmluZ1NoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gcmVtYWluaW5nU2hpcHNbaV07XG4gICAgICAgICAgICBjb25zdCBmb3VuZCA9IHNoaXAubG9jYXRpb25zLnNvbWUoXG4gICAgICAgICAgICAgIChsb2NhdGlvbikgPT4gbG9jYXRpb25bMF0gPT09IGhpdExvY1swXSAmJiBsb2NhdGlvblsxXSA9PT0gaGl0TG9jWzFdXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RydWNrU2hpcCA9IHJlbWFpbmluZ1NoaXBzW2ldO1xuICAgICAgICAgICAgICAgIHN0cnVja1NoaXAuaGl0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXRzUmVjZWl2ZWQucHVzaChoaXRMb2MpO1xuICAgICAgICAgICAgICAgIGlmIChzdHJ1Y2tTaGlwLnNpbmtTdGF0dXMpeyBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hpcERlc3Ryb3llZChzdHJ1Y2tTaGlwKTtcbiAgICAgICAgICAgICAgICB9OyBcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBObyBoaXQgZGV0ZWN0ZWQsIHJldHVybiBmYWxzZVxuICAgICAgICB0aGlzLnJlY29yZE1pc3NlZEF0dGFjayhoaXRMb2MpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICByZWNlaXZlQXR0YWNrKGhpdCkge1xuICAgICAgICBjb25zdCBjb252ZXJ0ZWRIaXQgPSB0aGlzLmNvbnZlcnRMb2NhdGlvbkZyb21TdHJpbmcoaGl0KTtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tBdHRhY2tQcmVleGlzdGluZyhjb252ZXJ0ZWRIaXQpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGF0dGFjayBoYXMgYWxyZWFkeSBvY2N1cmVkLCByZW5kZXIgaXQgaW52YWxpZFxuICAgICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGF0dGFjayc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIHRoaXMuY2hlY2tBdHRhY2tIaXRTaGlwKGNvbnZlcnRlZEhpdCwgdGhpcy5yZW1haW5pbmdTaGlwcyk7XG4gICAgfVxuXG4gICAgc2hpcERlc3Ryb3llZChkZXN0cm95ZWRTaGlwKXtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWRTaGlwcy5wdXNoKGRlc3Ryb3llZFNoaXApO1xuICAgICAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gdGhpcy5yZW1haW5pbmdTaGlwc1xuICAgICAgICAgICAgLmZpbmRJbmRleChzaGlwID0+IHNoaXAuaWQgPT09IGRlc3Ryb3llZFNoaXAuaWQpO1xuICAgICAgICB0aGlzLnJlbWFpbmluZ1NoaXBzLnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcbiAgICAgICAgdGhpcy5jaGVja0JvYXJkQ2xlYXJlZCgpXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkQ2xlYXJlZCA/ICdZb3Ugd2luIScgOiBkZXN0cm95ZWRTaGlwLm5hbWU7XG4gICAgfVxuXG4gICAgY2hlY2tCb2FyZENsZWFyZWQoKXtcbiAgICAgICAgaWYgKHRoaXMucmVtYWluaW5nU2hpcHMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRDbGVhcmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCBHVUlNYW5hZ2VyIGZyb20gXCIuL0dVSS1tYW5hZ2VyXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgaXNIdW1hbiwgaGFzQ3VycmVudFR1cm4sIGdhbWVib2FyZCl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXNIdW1hbiA9IGlzSHVtYW47XG4gICAgICAgIHRoaXMuaGFzQ3VycmVudFR1cm4gPSBoYXNDdXJyZW50VHVybjtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lYm9hcmQ7XG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucHVyc3VpbmdIaXRTaGlwID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFR3b01vdmVzSGl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFJhbmRvbUF0dGFjayA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5kZWxpYmVyYXRlQXR0YWNrcyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXJ0aW5nSW52ZW50b3J5ID0ge1xuICAgICAgICAgICAgICAgIGNhcnJpZXI6IG5ldyBTaGlwKCdDYXJyaWVyJyksXG4gICAgICAgICAgICAgICAgYmF0dGxlc2hpcDogbmV3IFNoaXAoJ0JhdHRsZXNoaXAnKSxcbiAgICAgICAgICAgICAgICBjcnVpc2VyOiBuZXcgU2hpcCgnQ3J1aXNlcicpLFxuICAgICAgICAgICAgICAgIHN1Ym1hcmluZTogbmV3IFNoaXAoJ1N1Ym1hcmluZScpLFxuICAgICAgICAgICAgICAgIGRlc3Ryb3llcjogbmV3IFNoaXAoJ0Rlc3Ryb3llcicpXG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMubGVnYWxBdHRhY2tzID0gdGhpcy5nZW5lcmF0ZUFsbExlZ2FsQXR0YWNrcygpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQWxsTGVnYWxBdHRhY2tzKCl7XG4gICAgICAgIGNvbnN0IG1vdmVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSArPSAxKXtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqICs9IDEpe1xuICAgICAgICAgICAgICAgIG1vdmVzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShpICsgNjUpICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW92ZXM7XG4gICAgfVxuXG4gICAgeW91V2luKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdXSU5ORVIhJyk7XG4gICAgfVxuXG4gICAgeW91TG9zZSgpe1xuICAgICAgICBjb25zb2xlLmxvZygnV2UgbG9zZScpO1xuICAgIH1cblxuICAgIGRlc3Ryb3llZEVuZW15U2hpcChzaGlwKXtcbiAgICAgICAgY29uc29sZS5sb2coYFdlIGRlc3Ryb3llZCBhICR7c2hpcH1gKTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKHRhcmdldExvY2F0aW9uKXtcblxuICAgICAgICBjb25zdCBoaXRTdGF0dXMgPSB0aGlzLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHRhcmdldExvY2F0aW9uKTtcblxuICAgICAgICBpZiAoaGl0U3RhdHVzID09PSAnWW91IHdpbiEnKXtcbiAgICAgICAgICAgIHRoaXMueW91TG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhpdFN0YXR1cztcbiAgICB9XG5cbiAgICBzZW5kQXR0YWNrKHRhcmdldExvY2F0aW9uKXtcblxuICAgICAgICBjb25zdCBoaXRTdGF0dXMgPSB0aGlzLm9wcG9uZW50LnJlY2VpdmVBdHRhY2sodGFyZ2V0TG9jYXRpb24pO1xuXG4gICAgICAgIGlmIChoaXRTdGF0dXMgPT09ICdZb3Ugd2luIScpe1xuICAgICAgICAgICAgdGhpcy55b3VXaW4oKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaGl0U3RhdHVzID09PSAnc3RyaW5nJyAmJiBoaXRTdGF0dXMgIT09ICdJbnZhbGlkIGF0dGFjaycpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NISVAgSEFTIEJFRU4gREVTVFJPWUVEIC0tLS0tLS0tJylcbiAgICAgICAgICAgIHRoaXMucHVyc3VpbmdIaXRTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxhc3RUd29Nb3Zlc0hpdCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kZWxpYmVyYXRlQXR0YWNrcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95ZWRFbmVteVNoaXAoaGl0U3RhdHVzKTtcbiAgICAgICAgfSBlbHNlIGlmIChoaXRTdGF0dXMgPT09IHRydWUgJiYgIXRoaXMucHVyc3VpbmdIaXRTaGlwKXtcbiAgICAgICAgICAgIHRoaXMucHVyc3VpbmdIaXRTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZGVsaWJlcmF0ZUF0dGFja3MucHVzaCh0YXJnZXRMb2NhdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAoaGl0U3RhdHVzID09PSB0cnVlICYmIHRoaXMucHVyc3VpbmdIaXRTaGlwKXtcbiAgICAgICAgICAgIHRoaXMubGFzdFR3b01vdmVzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZGVsaWJlcmF0ZUF0dGFja3MucHVzaCh0YXJnZXRMb2NhdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAoaGl0U3RhdHVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLmxhc3RUd29Nb3Zlc0hpdCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nICR7dGFyZ2V0TG9jYXRpb259IGZyb20gdGhlIGxlZ2FsIGxpc3RgKTtcblxuICAgICAgICB0aGlzLnJlbW92ZUF0dGFja0Zyb21MZWdhbExpc3QodGFyZ2V0TG9jYXRpb24pO1xuXG4gICAgICAgIHJldHVybiB7IGhpdFN0YXR1cywgdGFyZ2V0TG9jYXRpb259IDtcbiAgICB9XG5cbiAgICByZW1vdmVBdHRhY2tGcm9tTGVnYWxMaXN0KGF0dGFjayl7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLmxlZ2FsQXR0YWNrcy5pbmRleE9mKGF0dGFjayk7XG5cbiAgICAgICAgdGhpcy5sZWdhbEF0dGFja3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVJhbmRvbUxlZ2FsQXR0YWNrKCl7XG4gICAgICAgIGNvbnN0IGF0dGFja0luZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5sZWdhbEF0dGFja3MubGVuZ3RoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5sZWdhbEF0dGFja3NbYXR0YWNrSW5kZXhdO1xuICAgIH1cblxuICAgIGdlbmVyYXRlUmFuZG9tRm9sbG93dXBBdHRhY2soYXR0YWNrQ2VudGVyKXtcblxuICAgICAgICBjb25zdCBhdHRhY2tDZW50ZXJDb2RlTm9ydGggPSBhdHRhY2tDZW50ZXIuY2hhckNvZGVBdCgwKSAtIDE7XG4gICAgICAgIGNvbnN0IGF0dGFja0NlbnRlckNvZGVTb3V0aCA9IGF0dGFja0NlbnRlci5jaGFyQ29kZUF0KDApICsgMTtcblxuICAgICAgICBjb25zdCBub3J0aCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYXR0YWNrQ2VudGVyQ29kZU5vcnRoKSArIGF0dGFja0NlbnRlclsxXTtcbiAgICAgICAgY29uc3Qgc291dGggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGF0dGFja0NlbnRlckNvZGVTb3V0aCkgKyBhdHRhY2tDZW50ZXJbMV07XG4gICAgICAgIGNvbnN0IGVhc3QgPSBhdHRhY2tDZW50ZXJbMF0gKyAoYXR0YWNrQ2VudGVyWzFdIC0gMSk7XG4gICAgICAgIGNvbnN0IHdlc3QgPSBhdHRhY2tDZW50ZXJbMF0gKyAocGFyc2VJbnQoYXR0YWNrQ2VudGVyWzFdLCAxMCkgKyAxKTtcblxuICAgICAgICBjb25zdCBmb2xsb3d1cE1vdmVzID0gW25vcnRoLCBzb3V0aCwgZWFzdCwgd2VzdF07XG5cbiAgICAgICAgY29uc29sZS5sb2coYFN0YXJ0aW5nIHdpdGggdGhlIGZvbGxvd3VwIG1vdmVzICR7SlNPTi5zdHJpbmdpZnkoZm9sbG93dXBNb3Zlcyl9YCk7XG5cbiAgICAgICAgY29uc3QgbW92ZXNUb1JlbW92ZSA9IFtdO1xuXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgaWxsZWdhbCBvcHRpb25zXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSArPTEgKXtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlZ2FsQXR0YWNrcy5pbmRleE9mKGZvbGxvd3VwTW92ZXNbaV0pIDwgMCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCoqKioqKipSZW1vdmluZyAke2ZvbGxvd3VwTW92ZXNbaV19IGF0IGluZGV4ICR7aX0gZm9yIGZ1Y2tzIHNha2VgKTtcbiAgICAgICAgICAgICAgICBtb3Zlc1RvUmVtb3ZlLnB1c2goZm9sbG93dXBNb3Zlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhgSGVyZSdzIHRoZSBtb3ZlcyB3ZSBhcmUgcmVtb3ZpbmcgJHtKU09OLnN0cmluZ2lmeShtb3Zlc1RvUmVtb3ZlKX1gKTtcblxuICAgICAgICBpZiAobW92ZXNUb1JlbW92ZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW92ZXNUb1JlbW92ZS5sZW5ndGg7IGkgKz0gMSl7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBmb2xsb3d1cE1vdmVzLmluZGV4T2YobW92ZXNUb1JlbW92ZVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgZm9sbG93dXBNb3Zlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGAtLSAtLSAtLSBQaWNraW5nIGEgZm9sbG93dXAgbW92ZSBmcm9tICR7SlNPTi5zdHJpbmdpZnkoZm9sbG93dXBNb3Zlcyl9IC0tIC0tIC0tYCk7XG5cbiAgICAgICAgaWYgKGZvbGxvd3VwTW92ZXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlUmFuZG9tTGVnYWxBdHRhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZvbGxvd3VwTW92ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZm9sbG93dXBNb3Zlcy5sZW5ndGgpXTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURlbGliZXJhdGVGb2xsb3d1cEF0dGFjaygpe1xuICAgICAgICBsZXQgYXR0YWNrO1xuXG4gICAgICAgIGNvbnN0IHR3b0F0dGFja3NCYWNrID0gdGhpcy5kZWxpYmVyYXRlQXR0YWNrc1t0aGlzLmRlbGliZXJhdGVBdHRhY2tzLmxlbmd0aCAtIDJdO1xuICAgICAgICBjb25zdCBvbmVBdHRhY2tCYWNrID0gdGhpcy5kZWxpYmVyYXRlQXR0YWNrc1t0aGlzLmRlbGliZXJhdGVBdHRhY2tzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGlmIChvbmVBdHRhY2tCYWNrWzBdLmNoYXJDb2RlQXQoMCkgPiB0d29BdHRhY2tzQmFjay5jaGFyQ29kZUF0KDApKXtcblxuICAgICAgICAgICAgYXR0YWNrID0gU3RyaW5nLmZyb21DaGFyQ29kZShvbmVBdHRhY2tCYWNrLmNoYXJDb2RlQXQoMCkgKyAxKSBcbiAgICAgICAgICAgICAgICArIG9uZUF0dGFja0JhY2tbMV07XG5cbiAgICAgICAgfSBlbHNlIGlmIChvbmVBdHRhY2tCYWNrWzBdLmNoYXJDb2RlQXQoMCkgPCB0d29BdHRhY2tzQmFjay5jaGFyQ29kZUF0KDApKXtcblxuICAgICAgICAgICAgYXR0YWNrID0gU3RyaW5nLmZyb21DaGFyQ29kZShvbmVBdHRhY2tCYWNrLmNoYXJDb2RlQXQoMCkgLTEpIFxuICAgICAgICAgICAgICAgICsgb25lQXR0YWNrQmFja1sxXTtcblxuICAgICAgICB9IGVsc2UgaWYgKG9uZUF0dGFja0JhY2tbMV0gPiB0d29BdHRhY2tzQmFja1sxXSl7XG5cbiAgICAgICAgICAgIGF0dGFjayA9IG9uZUF0dGFja0JhY2tbMF0gKyAocGFyc2VJbnQob25lQXR0YWNrQmFja1sxXSwgMTApICsgMSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvbmVBdHRhY2tCYWNrWzFdIDwgdHdvQXR0YWNrc0JhY2tbMV0pe1xuXG4gICAgICAgICAgICBhdHRhY2sgPSBvbmVBdHRhY2tCYWNrWzBdICsgKHBhcnNlSW50KG9uZUF0dGFja0JhY2tbMV0sIDEwKSAtIDEpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5sZWdhbEF0dGFja3MuaW5kZXhPZihhdHRhY2spID4gMCA/IFxuICAgICAgICAgICAgYXR0YWNrIDogXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlUmFuZG9tRm9sbG93dXBBdHRhY2sodGhpcy5kZWxpYmVyYXRlQXR0YWNrc1swXSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVBdHRhY2soKXtcbiAgICAgICAgbGV0IGF0dGFjaztcblxuICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGN1cnJlbnQgc3RhdGUgb2Ygb3VyIG1hbnkgYm9vbHM6IExhc3QgdHdvIG1vdmVzIGhpdCBpcyAke3RoaXMubGFzdFR3b01vdmVzSGl0fSwgUHVyc3VpbmcgaGl0IHNoaXAgaXMgJHt0aGlzLnB1cnN1aW5nSGl0U2hpcH0sIGFuZCBvdXIgRGVsaWJlcmF0ZSBhdHRhY2sgaXMgbGlzdCAke0pTT04uc3RyaW5naWZ5KHRoaXMuZGVsaWJlcmF0ZUF0dGFja3MpfSwgd2hpbGUgbGFzdCByYW5kb20gYXR0YWNrIHdhcyAke3RoaXMubGFzdFJhbmRvbUF0dGFja31gKTtcblxuICAgICAgICAvLyBJZiBhIHNoaXAgaGFzIGFscmVhZHkgYmVlbiBzdHJ1Y2ssIHB1cnN1ZSBzaW5raW5nIGl0XG5cbiAgICAgICAgaWYgKHRoaXMucHVyc3VpbmdIaXRTaGlwICYmICF0aGlzLmxhc3RUd29Nb3Zlc0hpdCl7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRlbGliZXJhdGVBdHRhY2tzLmxlbmd0aCA+PSAyKXtcblxuICAgICAgICAgICAgICAgIC8vIElmIGEgc2hpcCBoYXMgYmVlbiBzdHJ1Y2sgdHdpY2UsIGJ1dCB3ZSBqdXN0IG1pc3NlZCxcbiAgICAgICAgICAgICAgICAvLyBhdHRhY2sgaW4gYSBncmlkIGVtYW5hdGluZyBmcm9tIHRoZSBmaXJzdCBoaXRcblxuICAgICAgICAgICAgICAgIGF0dGFjayA9IHRoaXMuZ2VuZXJhdGVSYW5kb21Gb2xsb3d1cEF0dGFjayh0aGlzLmRlbGliZXJhdGVBdHRhY2tzWzBdKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRG91YmxpbmcgYmFjayB0byAke2F0dGFja31gKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGF0dGFjayA9IHRoaXMuZ2VuZXJhdGVSYW5kb21Gb2xsb3d1cEF0dGFjayh0aGlzLmxhc3RSYW5kb21BdHRhY2spO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRoZSByYW5kb20gZm9sbG93dXAgbW92ZSBpcyAke2F0dGFja31gKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wdXJzdWluZ0hpdFNoaXAgJiYgdGhpcy5sYXN0VHdvTW92ZXNIaXQpe1xuXG4gICAgICAgICAgICBhdHRhY2sgPSB0aGlzLmdlbmVyYXRlRGVsaWJlcmF0ZUZvbGxvd3VwQXR0YWNrKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGxhc3QgdHdvIGF0dGFja3MgaGl0LCBhbmQgdGhlIG1vdmVzIHRoYXQgaGF2ZSBoaXQgYXJlICR7dGhpcy5kZWxpYmVyYXRlQXR0YWNrc30sIG1lYW5pbmcgdGhlIGRlbGliZXJhdGUgZm9sbG93dXAgaXMgJHthdHRhY2t9YCk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gSWYgYSBzaGlwIGhhcyBub3QgYmVlbiBzdHJ1Y2ssIGF0dGFjayByYW5kb21seVxuXG4gICAgICAgICAgICBhdHRhY2sgPSB0aGlzLmdlbmVyYXRlUmFuZG9tTGVnYWxBdHRhY2soKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBHZW5lcmF0aW5nIHJhbmRvbSBhdHRhY2sgJHthdHRhY2t9YCk7XG4gICAgICAgICAgICB0aGlzLmxhc3RSYW5kb21BdHRhY2sgPSBhdHRhY2s7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRBdHRhY2soYXR0YWNrKTtcbiAgICB9XG5cbiAgICByYW5kb21seVBvcHVsYXRlQm9hcmRXaXRoU2hpcHMoKXtcbiAgICAgICAgbGV0IHBsYWNlZFNoaXBzID0gNDtcblxuICAgICAgICBjb25zdCByYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbjtcbiAgICAgICAgICAgIHN3aXRjaCAoTWF0aC5mbG9vcigxICsgTWF0aC5yYW5kb20oKSAqIDMpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbiA9ICdOb3J0aCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnU291dGgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ0Vhc3QnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ1dlc3QnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0RpcmVjdGlvbiB1bnZhaWxhYmxlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgd2hpbGUgKHBsYWNlZFNoaXBzID49IDApe1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IE9iamVjdC5lbnRyaWVzKHRoaXMuc3RhcnRpbmdJbnZlbnRvcnkpW3BsYWNlZFNoaXBzXVsxXTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYEF0dGVtcHRpbmcgdG8gcGxhY2UgJHtKU09OLnN0cmluZ2lmeShzaGlwKX1gKTtcblxuICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gdGhpcy5nYW1lYm9hcmQucGxhY2UoXG4gICAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlUmFuZG9tTGVnYWxBdHRhY2soKSxcbiAgICAgICAgICAgICAgICByYW5kb21PcmllbnRhdGlvbigpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChwbGFjZW1lbnQgIT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICBwbGFjZWRTaGlwcyAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5pZCA9IDA7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgICAgIHRoaXMuc2lua1N0YXR1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRldGVybWluZVR5cGUobmFtZSk7XG4gICAgICAgIHRoaXMubG9jYXRpb25zID0gW107XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5lVHlwZShuYW1lKSB7XG4gICAgICAgIHN3aXRjaChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdDYXJyaWVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdCYXR0bGVzaGlwJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDcnVpc2VyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTdWJtYXJpbmUnOlxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Rlc3Ryb3llcic6XG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGhpcyAke3RoaXMubmFtZX0gaGFzIHN1c3RhaW5lZCAke3RoaXMuaGl0c30gaGl0c2ApO1xuICAgICAgICB0aGlzLmNoZWNrSWZTdW5rKCk7XG4gICAgfVxuXG4gICAgY2hlY2tJZlN1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpe1xuICAgICAgICAgICAgdGhpcy5zaW5rU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcblxuY2xhc3MgVHVybk1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGd1aSl7XG4gICAgICAgIHRoaXMuZ3VpID0gZ3VpO1xuICAgICAgICB0aGlzLnBsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jcHUgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgc2V0dXBHYW1lKCl7XG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgICAgICBjb25zdCBjcHVCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCdQbGF5ZXInLCB0cnVlLCB0cnVlLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIHRoaXMuY3B1ID0gbmV3IFBsYXllcignQ1BVJywgZmFsc2UsIGZhbHNlLCBjcHVCb2FyZCk7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIub3Bwb25lbnQgPSB0aGlzLmNwdTtcbiAgICAgICAgdGhpcy5jcHUub3Bwb25lbnQgPSB0aGlzLnBsYXllcjtcblxuICAgICAgICB0aGlzLnBsYXllci5yYW5kb21seVBvcHVsYXRlQm9hcmRXaXRoU2hpcHMoKTtcbiAgICAgICAgdGhpcy5ndWkucGxhY2VTaGlwcyh0aGlzLnBsYXllci5nYW1lYm9hcmQucmVtYWluaW5nU2hpcHMsICdwbGF5ZXInKTtcbiAgICAgICAgdGhpcy5jcHUucmFuZG9tbHlQb3B1bGF0ZUJvYXJkV2l0aFNoaXBzKCk7XG4gICAgICAgIHRoaXMuZ3VpLnBsYWNlU2hpcHModGhpcy5jcHUuZ2FtZWJvYXJkLnJlbWFpbmluZ1NoaXBzLCAnb3Bwb25lbnQnKTtcblxuICAgICAgICB0aGlzLmd1aS5jdXJyZW50UGhhc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuY3VycmVudFBoYXNlID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgcGxheWVyTW92ZShjb29yZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkKTtcblxuICAgICAgICB0aGlzLnBsYXllci5zZW5kQXR0YWNrKGNvb3JkKTtcbiAgICB9XG5cbiAgICBjcHVNb3ZlKCl7XG4gICAgICAgIGNvbnN0IGF0dGFjayA9IHRoaXMuY3B1LmdlbmVyYXRlQXR0YWNrKClcbiAgICAgICAgY29uc3QgZ3JpZFNxdWFyZSA9IGF0dGFjay50YXJnZXRMb2NhdGlvbjtcbiAgICAgICAgdGhpcy5ndWkuYXR0YWNrUGxheWVyU3F1YXJlKGdyaWRTcXVhcmUpO1xuXG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVHVybk1hbmFnZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgR1VJTWFuYWdlciBmcm9tICcuL0dVSS1tYW5hZ2VyJztcbmltcG9ydCBUdXJuTWFuYWdlciBmcm9tICcuL3R1cm4tbWFuYWdlcic7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuY29uc3QgZGlzcGxheU1hbmFnZXIgPSBuZXcgR1VJTWFuYWdlcigpO1xuY29uc3QgdHVybk1hbmFnZXIgPSBuZXcgVHVybk1hbmFnZXIoZGlzcGxheU1hbmFnZXIpO1xuZGlzcGxheU1hbmFnZXIuc2V0VHVybk1hbmFnZXIodHVybk1hbmFnZXIpO1xuXG5kaXNwbGF5TWFuYWdlci5pbml0aWFsUGFnZVNldHVwKCk7XG50dXJuTWFuYWdlci5zZXR1cEdhbWUoKTtcblxuY29uc29sZS5sb2coJ1Rlc3RhbXVvLicpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==