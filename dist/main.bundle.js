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

/* Footer */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;AACd;;AAEA,WAAW;;;AAGX,SAAS;;AAET,eAAe;;AAEf;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,sCAAsC;IACtC,yCAAyC;AAC7C;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA,WAAW","sourcesContent":["h2 {\n    color: red;\n}\n\n/* Header */\n\n\n/* Body */\n\n/* Gameboards */\n\n.gameboards {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.gameboards div {\n    border: 1px solid red;\n    display: grid;\n    grid-template-rows: repeat(11, 2.5rem);\n    grid-template-columns: repeat(11, 2.5rem);\n}\n\n.player-board .gridsquare:hover {\n    background-color: black;\n}\n\n.opponent-board .gridsquare:hover {\n    background-color: red;\n}\n\n.ship {\n    background-color: blue;\n}\n\n/* Footer */"],"sourceRoot":""}]);
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
    
    generateBoard(parentNode){
        for (let i = 0; i <= 10; i += 1){
            for (let j = 0; j <= 10; j += 1){
                const gridSquare = document.createElement('div');
                gridSquare.classList.add(this.generateGridMarker(i, j));
                gridSquare.classList.add('gridsquare');
                parentNode.appendChild(gridSquare);

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

        return hitStatus;
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

displayManager.initialPageSetup();
turnManager.setupGame();

console.log('Testamuo.');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDa0I7QUFDRTtBQUNYOzs7O0FBSTlCLDJCQUEyQixvREFBVTtBQUNyQyx3QkFBd0IscURBQVc7O0FBRW5DO0FBQ0E7O0FBRUEseUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR1VJLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdHVybi1tYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGgyIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4vKiBIZWFkZXIgKi9cblxuXG4vKiBCb2R5ICovXG5cbi8qIEdhbWVib2FyZHMgKi9cblxuLmdhbWVib2FyZHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xufVxuXG4uZ2FtZWJvYXJkcyBkaXYge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAyLjVyZW0pO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAyLjVyZW0pO1xufVxuXG4ucGxheWVyLWJvYXJkIC5ncmlkc3F1YXJlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm9wcG9uZW50LWJvYXJkIC5ncmlkc3F1YXJlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4vKiBGb290ZXIgKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUEsV0FBVzs7O0FBR1gsU0FBUzs7QUFFVCxlQUFlOztBQUVmO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSxXQUFXXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImgyIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuXFxuLyogQm9keSAqL1xcblxcbi8qIEdhbWVib2FyZHMgKi9cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLmdhbWVib2FyZHMgZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMi41cmVtKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDIuNXJlbSk7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQgLmdyaWRzcXVhcmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLm9wcG9uZW50LWJvYXJkIC5ncmlkc3F1YXJlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi8qIEZvb3RlciAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBHVUlNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUdyaWRNYXJrZXIoeSx4ID0gbnVsbCl7XG4gICAgICAgIGNvbnN0IG51bWJlclRvTGV0dGVyID0ge1xuICAgICAgICAgICAgMDogJ0xhYmVsJyxcbiAgICAgICAgICAgIDE6ICdBJyxcbiAgICAgICAgICAgIDI6ICdCJyxcbiAgICAgICAgICAgIDM6ICdDJyxcbiAgICAgICAgICAgIDQ6ICdEJyxcbiAgICAgICAgICAgIDU6ICdFJyxcbiAgICAgICAgICAgIDY6ICdGJyxcbiAgICAgICAgICAgIDc6ICdHJyxcbiAgICAgICAgICAgIDg6ICdIJyxcbiAgICAgICAgICAgIDk6ICdJJyxcbiAgICAgICAgICAgIDEwOiAnSidcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjb252ZXJ0ZWRMb2NhdGlvbiA9IFtcbiAgICAgICAgICAgIG51bWJlclRvTGV0dGVyW3ldLFxuICAgICAgICAgICAgeFxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiBjb252ZXJ0ZWRMb2NhdGlvbi5qb2luKCcnKTtcbiAgICB9XG4gICAgXG4gICAgZ2VuZXJhdGVCb2FyZChwYXJlbnROb2RlKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMTA7IGkgKz0gMSl7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSAxMDsgaiArPSAxKXtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QuYWRkKHRoaXMuZ2VuZXJhdGVHcmlkTWFya2VyKGksIGopKTtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2dyaWRzcXVhcmUnKTtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGdyaWRTcXVhcmUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGkgPCAxICYmIGogIT09IDApe1xuICAgICAgICAgICAgICAgICAgICBncmlkU3F1YXJlLnRleHRDb250ZW50ID0gajtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWRzcXVhcmUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPiAwICYmIGogPT09IDApe1xuICAgICAgICAgICAgICAgICAgICBncmlkU3F1YXJlLnRleHRDb250ZW50ID0gdGhpcy5nZW5lcmF0ZUdyaWRNYXJrZXIoaSk7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdncmlkc3F1YXJlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAwICYmIGogPT09IDApe1xuICAgICAgICAgICAgICAgICAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZHNxdWFyZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdGlhbFBhZ2VTZXR1cCgpe1xuICAgICAgICBjb25zb2xlLmxvZyhgV2UncmUgc2V0dGluZyB1cCB0aGUgcGFnZWApO1xuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRzIC5wbGF5ZXItYm9hcmQnKTtcbiAgICAgICAgY29uc3Qgb3Bwb25lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRzIC5vcHBvbmVudC1ib2FyZCcpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQm9hcmQocGxheWVyQm9hcmQpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQm9hcmQob3Bwb25lbnRCb2FyZCk7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwcyhzaGlwcywgZ2FtZWJvYXJkKXtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKXtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNbaV0ubG9jYXRpb25zLmxlbmd0aDsgaiArPSAxKXtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkQ29vcmQgPSBzaGlwc1tpXS5sb2NhdGlvbnNbal07XG4gICAgICAgICAgICAgICAgY29uc3QgY29udmVydGVkQ29vcmQgPSB0aGlzLmdlbmVyYXRlR3JpZE1hcmtlciguLi5ncmlkQ29vcmQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnZlcnRlZENvb3JkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGAuJHtnYW1lYm9hcmR9LWJvYXJkIC4ke2NvbnZlcnRlZENvb3JkfWA7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBncmlkRGl2LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdVSU1hbmFnZXI7IiwiY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm1pc3Nlc1JlY2VpdmVkID0gW107XG4gICAgICAgIHRoaXMuaGl0c1JlY2VpdmVkID0gW107XG4gICAgICAgIHRoaXMucmVtYWluaW5nU2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWRTaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWQgPSAwO1xuICAgICAgICB0aGlzLmJvYXJkQ2xlYXJlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBsYWNlKHNoaXAsIGJvd0xvY2F0aW9uLCBvcmllbnRhdGlvbikge1xuICAgICAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLmNoZWNrUGxhY2VtZW50QXZhaWxhYmxlKGJvd0xvY2F0aW9uLCBvcmllbnRhdGlvbiwgc2hpcC5sZW5ndGgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHBsYWNlbWVudCl7XG5cbiAgICAgICAgICAgIHNoaXAuaWQgPSB0aGlzLmN1cnJlbnRTaGlwSWQ7XG4gICAgICAgICAgICBzaGlwLmxvY2F0aW9ucyA9IHBsYWNlbWVudDtcbiAgICAgICAgICAgIHRoaXMucmVtYWluaW5nU2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJZCArPSAxO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gU2hpcCBjYW5ub3QgYmUgbGVnYWxseSBwbGFjZWQgaGVyZSwgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ1NoaXBzO1xuICAgIH1cblxuICAgIGNoZWNrRm9yQ29sbGlzaW9uKHBsYWNlbWVudCwgcmVtYWluaW5nU2hpcHMpIHtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgcHJvcG9zZWQgcGxhY2VtZW50IHdvdWxkIGNvbGxpZGUgd2l0aCBwbGFjZWQgc2hpcHNcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbWFpbmluZ1NoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1NoaXAgPSByZW1haW5pbmdTaGlwc1tpXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGFjZW1lbnQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wb3NlZENvb3JkaW5hdGUgPSBwbGFjZW1lbnRbal07XG4gICAgICAgICAgICAgICAgY29uc3QgZm91bmQgPSBleGlzdGluZ1NoaXAubG9jYXRpb25zLnNvbWUoXG4gICAgICAgICAgICAgICAgICAgIChsb2NhdGlvbikgPT4gXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uWzBdID09PSBwcm9wb3NlZENvb3JkaW5hdGVbMF0gJiYgXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uWzFdID09PSBwcm9wb3NlZENvb3JkaW5hdGVbMV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gQ29sbGlzaW9uIGRldGVjdGVkLCByZXR1cm4gdHJ1ZVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAgIC8vIE5vIGNvbGxpc2lvbiBkZXRlY3RlZCwgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY2hlY2tQbGFjZW1lbnRBdmFpbGFibGUoc3RhcnQsIG9yaWVudGF0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgY29uc3QgaW52YWxpZFBsYWNlbWVudCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjb252ZXJ0ZWRTdGFydCA9IHRoaXMuY29udmVydExvY2F0aW9uRnJvbVN0cmluZyhzdGFydCk7XG4gICAgICAgIGNvbnN0IHByb3Bvc2VkUGxhY2VtZW50ID0gW2NvbnZlcnRlZFN0YXJ0XTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgUGxhY2luZyBhdCAke3N0YXJ0fSB3aXRoIG9yaWVudGF0aW9uICR7b3JpZW50YXRpb259IGZvciBhIHNoaXAgb2YgbGVuZ3RoICR7bGVuZ3RofWApO1xuXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVDaGFuZ2VzID0ge1xuICAgICAgICAgICAgTm9ydGg6IFstMSwgMF0sXG4gICAgICAgICAgICBFYXN0OiBbMCwgMV0sXG4gICAgICAgICAgICBTb3V0aDogWzEsIDBdLFxuICAgICAgICAgICAgV2VzdDogWzAsIC0xXSxcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBbcm93Q2hhbmdlLCBjb2xDaGFuZ2VdID0gY29vcmRpbmF0ZUNoYW5nZXNbb3JpZW50YXRpb25dO1xuICAgICAgICAgICAgcHJvcG9zZWRQbGFjZW1lbnQucHVzaChbY29udmVydGVkU3RhcnRbMF0gKyBpICogcm93Q2hhbmdlLCBjb252ZXJ0ZWRTdGFydFsxXSArIGkgKiBjb2xDaGFuZ2VdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzUGxhY2VtZW50T2ZmQm9hcmQocHJvcG9zZWRQbGFjZW1lbnQsIGxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnZhbGlkUGxhY2VtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2hlY2tGb3JDb2xsaXNpb24ocHJvcG9zZWRQbGFjZW1lbnQsIHRoaXMucmVtYWluaW5nU2hpcHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW52YWxpZFBsYWNlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9wb3NlZFBsYWNlbWVudDtcbiAgICB9XG4gICAgXG4gICAgaXNQbGFjZW1lbnRPZmZCb2FyZChwbGFjZW1lbnQsIGxlbmd0aCkge1xuICAgICAgICBjb25zdCBib2FyZFNpemUgPSAxMDtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gcGxhY2VtZW50W2pdO1xuICAgICAgICAgICAgaWYgKHJvdyA8PSAwIHx8IHJvdyA+IGJvYXJkU2l6ZSB8fCBjb2wgPD0gMCB8fCBjb2wgPiBib2FyZFNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgY29udmVydExvY2F0aW9uRnJvbVN0cmluZyhsb2Mpe1xuXG4gICAgICAgIGNvbnN0IGxldHRlclRvTnVtYmVyID0ge1xuICAgICAgICAgICAgQTogMSxcbiAgICAgICAgICAgIEI6IDIsXG4gICAgICAgICAgICBDOiAzLFxuICAgICAgICAgICAgRDogNCxcbiAgICAgICAgICAgIEU6IDUsXG4gICAgICAgICAgICBGOiA2LFxuICAgICAgICAgICAgRzogNyxcbiAgICAgICAgICAgIEg6IDgsXG4gICAgICAgICAgICBJOiA5LFxuICAgICAgICAgICAgSjogMTBcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjb252ZXJ0ZWRMb2NhdGlvbiA9IFtcbiAgICAgICAgICAgIGxldHRlclRvTnVtYmVyW2xvY1swXV0sXG4gICAgICAgICAgICBwYXJzZUludChsb2Muc2xpY2UoMSksIDEwKVxuICAgICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlZExvY2F0aW9uO1xuICAgIH1cblxuICAgIHJlY29yZE1pc3NlZEF0dGFjayhtaXNzKXtcbiAgICAgICAgdGhpcy5taXNzZXNSZWNlaXZlZC5wdXNoKG1pc3MpO1xuICAgIH1cblxuICAgIGNoZWNrQXR0YWNrUHJlZXhpc3RpbmcoaGl0KSB7XG4gICAgICAgIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGF0dGFjayBoYXMgYWxyZWFkeSBvY2N1cmVkXG4gICAgICAgIGNvbnN0IGFsbEF0dGFja3MgPSB0aGlzLm1pc3Nlc1JlY2VpdmVkLmNvbmNhdCh0aGlzLmhpdHNSZWNlaXZlZCk7XG5cbiAgICAgICAgY29uc3QgZm91bmQgPSBhbGxBdHRhY2tzLnNvbWUoaW5uZXJBcnJheSA9PiBcbiAgICAgICAgICAgIGlubmVyQXJyYXlbMF0gPT09IGhpdFswXSAmJiBpbm5lckFycmF5WzFdID09PSBoaXRbMV1cbiAgICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBjaGVja0F0dGFja0hpdFNoaXAoaGl0TG9jLCByZW1haW5pbmdTaGlwcyl7XG4gICAgICAgIC8vIFNlYXJjaCB0aGUgbGlzdCBvZiByZW1haW5pbmcgc2hpcCBsb2NhdGlvbnMgdG8gc2VlIGlmIGl0IG1hdGNoZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1haW5pbmdTaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHJlbWFpbmluZ1NoaXBzW2ldO1xuICAgICAgICAgICAgY29uc3QgZm91bmQgPSBzaGlwLmxvY2F0aW9ucy5zb21lKFxuICAgICAgICAgICAgICAobG9jYXRpb24pID0+IGxvY2F0aW9uWzBdID09PSBoaXRMb2NbMF0gJiYgbG9jYXRpb25bMV0gPT09IGhpdExvY1sxXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0cnVja1NoaXAgPSByZW1haW5pbmdTaGlwc1tpXTtcbiAgICAgICAgICAgICAgICBzdHJ1Y2tTaGlwLmhpdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGl0c1JlY2VpdmVkLnB1c2goaGl0TG9jKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RydWNrU2hpcC5zaW5rU3RhdHVzKXsgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNoaXBEZXN0cm95ZWQoc3RydWNrU2hpcCk7XG4gICAgICAgICAgICAgICAgfTsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm8gaGl0IGRldGVjdGVkLCByZXR1cm4gZmFsc2VcbiAgICAgICAgdGhpcy5yZWNvcmRNaXNzZWRBdHRhY2soaGl0TG9jKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgcmVjZWl2ZUF0dGFjayhoaXQpIHtcbiAgICAgICAgY29uc3QgY29udmVydGVkSGl0ID0gdGhpcy5jb252ZXJ0TG9jYXRpb25Gcm9tU3RyaW5nKGhpdCk7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrQXR0YWNrUHJlZXhpc3RpbmcoY29udmVydGVkSGl0KSkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBhdHRhY2sgaGFzIGFscmVhZHkgb2NjdXJlZCwgcmVuZGVyIGl0IGludmFsaWRcbiAgICAgICAgICAgIHJldHVybiAnSW52YWxpZCBhdHRhY2snO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICB0aGlzLmNoZWNrQXR0YWNrSGl0U2hpcChjb252ZXJ0ZWRIaXQsIHRoaXMucmVtYWluaW5nU2hpcHMpO1xuICAgIH1cblxuICAgIHNoaXBEZXN0cm95ZWQoZGVzdHJveWVkU2hpcCl7XG4gICAgICAgIHRoaXMuZGVzdHJveWVkU2hpcHMucHVzaChkZXN0cm95ZWRTaGlwKTtcbiAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRoaXMucmVtYWluaW5nU2hpcHNcbiAgICAgICAgICAgIC5maW5kSW5kZXgoc2hpcCA9PiBzaGlwLmlkID09PSBkZXN0cm95ZWRTaGlwLmlkKTtcbiAgICAgICAgdGhpcy5yZW1haW5pbmdTaGlwcy5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XG4gICAgICAgIHRoaXMuY2hlY2tCb2FyZENsZWFyZWQoKVxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZENsZWFyZWQgPyAnWW91IHdpbiEnIDogZGVzdHJveWVkU2hpcC5uYW1lO1xuICAgIH1cblxuICAgIGNoZWNrQm9hcmRDbGVhcmVkKCl7XG4gICAgICAgIGlmICh0aGlzLnJlbWFpbmluZ1NoaXBzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLmJvYXJkQ2xlYXJlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDsiLCJpbXBvcnQgR1VJTWFuYWdlciBmcm9tIFwiLi9HVUktbWFuYWdlclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGlzSHVtYW4sIGhhc0N1cnJlbnRUdXJuLCBnYW1lYm9hcmQpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmlzSHVtYW4gPSBpc0h1bWFuO1xuICAgICAgICB0aGlzLmhhc0N1cnJlbnRUdXJuID0gaGFzQ3VycmVudFR1cm47XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gZ2FtZWJvYXJkO1xuICAgICAgICB0aGlzLm9wcG9uZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnB1cnN1aW5nSGl0U2hpcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RUd29Nb3Zlc0hpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RSYW5kb21BdHRhY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZGVsaWJlcmF0ZUF0dGFja3MgPSBbXTtcbiAgICAgICAgdGhpcy5zdGFydGluZ0ludmVudG9yeSA9IHtcbiAgICAgICAgICAgICAgICBjYXJyaWVyOiBuZXcgU2hpcCgnQ2FycmllcicpLFxuICAgICAgICAgICAgICAgIGJhdHRsZXNoaXA6IG5ldyBTaGlwKCdCYXR0bGVzaGlwJyksXG4gICAgICAgICAgICAgICAgY3J1aXNlcjogbmV3IFNoaXAoJ0NydWlzZXInKSxcbiAgICAgICAgICAgICAgICBzdWJtYXJpbmU6IG5ldyBTaGlwKCdTdWJtYXJpbmUnKSxcbiAgICAgICAgICAgICAgICBkZXN0cm95ZXI6IG5ldyBTaGlwKCdEZXN0cm95ZXInKVxuICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLmxlZ2FsQXR0YWNrcyA9IHRoaXMuZ2VuZXJhdGVBbGxMZWdhbEF0dGFja3MoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUFsbExlZ2FsQXR0YWNrcygpe1xuICAgICAgICBjb25zdCBtb3ZlcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkgKz0gMSl7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaiArPSAxKXtcbiAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoaSArIDY1KSArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vdmVzO1xuICAgIH1cblxuICAgIHlvdVdpbigpe1xuICAgICAgICBjb25zb2xlLmxvZygnV0lOTkVSIScpO1xuICAgIH1cblxuICAgIHlvdUxvc2UoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1dlIGxvc2UnKTtcbiAgICB9XG5cbiAgICBkZXN0cm95ZWRFbmVteVNoaXAoc2hpcCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGBXZSBkZXN0cm95ZWQgYSAke3NoaXB9YCk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh0YXJnZXRMb2NhdGlvbil7XG5cbiAgICAgICAgY29uc3QgaGl0U3RhdHVzID0gdGhpcy5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh0YXJnZXRMb2NhdGlvbik7XG5cbiAgICAgICAgaWYgKGhpdFN0YXR1cyA9PT0gJ1lvdSB3aW4hJyl7XG4gICAgICAgICAgICB0aGlzLnlvdUxvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoaXRTdGF0dXM7XG4gICAgfVxuXG4gICAgc2VuZEF0dGFjayh0YXJnZXRMb2NhdGlvbil7XG5cbiAgICAgICAgY29uc3QgaGl0U3RhdHVzID0gdGhpcy5vcHBvbmVudC5yZWNlaXZlQXR0YWNrKHRhcmdldExvY2F0aW9uKTtcblxuICAgICAgICBpZiAoaGl0U3RhdHVzID09PSAnWW91IHdpbiEnKXtcbiAgICAgICAgICAgIHRoaXMueW91V2luKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGhpdFN0YXR1cyA9PT0gJ3N0cmluZycgJiYgaGl0U3RhdHVzICE9PSAnSW52YWxpZCBhdHRhY2snKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTSElQIEhBUyBCRUVOIERFU1RST1lFRCAtLS0tLS0tLScpXG4gICAgICAgICAgICB0aGlzLnB1cnN1aW5nSGl0U2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sYXN0VHdvTW92ZXNIaXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGVsaWJlcmF0ZUF0dGFja3MgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveWVkRW5lbXlTaGlwKGhpdFN0YXR1cyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGl0U3RhdHVzID09PSB0cnVlICYmICF0aGlzLnB1cnN1aW5nSGl0U2hpcCl7XG4gICAgICAgICAgICB0aGlzLnB1cnN1aW5nSGl0U2hpcCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRlbGliZXJhdGVBdHRhY2tzLnB1c2godGFyZ2V0TG9jYXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKGhpdFN0YXR1cyA9PT0gdHJ1ZSAmJiB0aGlzLnB1cnN1aW5nSGl0U2hpcCl7XG4gICAgICAgICAgICB0aGlzLmxhc3RUd29Nb3Zlc0hpdCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRlbGliZXJhdGVBdHRhY2tzLnB1c2godGFyZ2V0TG9jYXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKGhpdFN0YXR1cyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgdGhpcy5sYXN0VHdvTW92ZXNIaXQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyAke3RhcmdldExvY2F0aW9ufSBmcm9tIHRoZSBsZWdhbCBsaXN0YCk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVBdHRhY2tGcm9tTGVnYWxMaXN0KHRhcmdldExvY2F0aW9uKTtcblxuICAgICAgICByZXR1cm4gaGl0U3RhdHVzO1xuICAgIH1cblxuICAgIHJlbW92ZUF0dGFja0Zyb21MZWdhbExpc3QoYXR0YWNrKXtcblxuICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IHRoaXMubGVnYWxBdHRhY2tzLmluZGV4T2YoYXR0YWNrKTtcblxuICAgICAgICB0aGlzLmxlZ2FsQXR0YWNrcy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlUmFuZG9tTGVnYWxBdHRhY2soKXtcbiAgICAgICAgY29uc3QgYXR0YWNrSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxlZ2FsQXR0YWNrcy5sZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmxlZ2FsQXR0YWNrc1thdHRhY2tJbmRleF07XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVSYW5kb21Gb2xsb3d1cEF0dGFjayhhdHRhY2tDZW50ZXIpe1xuXG4gICAgICAgIGNvbnN0IGF0dGFja0NlbnRlckNvZGVOb3J0aCA9IGF0dGFja0NlbnRlci5jaGFyQ29kZUF0KDApIC0gMTtcbiAgICAgICAgY29uc3QgYXR0YWNrQ2VudGVyQ29kZVNvdXRoID0gYXR0YWNrQ2VudGVyLmNoYXJDb2RlQXQoMCkgKyAxO1xuXG4gICAgICAgIGNvbnN0IG5vcnRoID0gU3RyaW5nLmZyb21DaGFyQ29kZShhdHRhY2tDZW50ZXJDb2RlTm9ydGgpICsgYXR0YWNrQ2VudGVyWzFdO1xuICAgICAgICBjb25zdCBzb3V0aCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYXR0YWNrQ2VudGVyQ29kZVNvdXRoKSArIGF0dGFja0NlbnRlclsxXTtcbiAgICAgICAgY29uc3QgZWFzdCA9IGF0dGFja0NlbnRlclswXSArIChhdHRhY2tDZW50ZXJbMV0gLSAxKTtcbiAgICAgICAgY29uc3Qgd2VzdCA9IGF0dGFja0NlbnRlclswXSArIChwYXJzZUludChhdHRhY2tDZW50ZXJbMV0sIDEwKSArIDEpO1xuXG4gICAgICAgIGNvbnN0IGZvbGxvd3VwTW92ZXMgPSBbbm9ydGgsIHNvdXRoLCBlYXN0LCB3ZXN0XTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgU3RhcnRpbmcgd2l0aCB0aGUgZm9sbG93dXAgbW92ZXMgJHtKU09OLnN0cmluZ2lmeShmb2xsb3d1cE1vdmVzKX1gKTtcblxuICAgICAgICBjb25zdCBtb3Zlc1RvUmVtb3ZlID0gW107XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBpbGxlZ2FsIG9wdGlvbnNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9MSApe1xuICAgICAgICAgICAgaWYgKHRoaXMubGVnYWxBdHRhY2tzLmluZGV4T2YoZm9sbG93dXBNb3Zlc1tpXSkgPCAwKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgKioqKioqKlJlbW92aW5nICR7Zm9sbG93dXBNb3Zlc1tpXX0gYXQgaW5kZXggJHtpfSBmb3IgZnVja3Mgc2FrZWApO1xuICAgICAgICAgICAgICAgIG1vdmVzVG9SZW1vdmUucHVzaChmb2xsb3d1cE1vdmVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBIZXJlJ3MgdGhlIG1vdmVzIHdlIGFyZSByZW1vdmluZyAke0pTT04uc3RyaW5naWZ5KG1vdmVzVG9SZW1vdmUpfWApO1xuXG4gICAgICAgIGlmIChtb3Zlc1RvUmVtb3ZlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlc1RvUmVtb3ZlLmxlbmd0aDsgaSArPSAxKXtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGZvbGxvd3VwTW92ZXMuaW5kZXhPZihtb3Zlc1RvUmVtb3ZlW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBmb2xsb3d1cE1vdmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coYC0tIC0tIC0tIFBpY2tpbmcgYSBmb2xsb3d1cCBtb3ZlIGZyb20gJHtKU09OLnN0cmluZ2lmeShmb2xsb3d1cE1vdmVzKX0gLS0gLS0gLS1gKTtcblxuICAgICAgICBpZiAoZm9sbG93dXBNb3Zlcy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVSYW5kb21MZWdhbEF0dGFjaygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZm9sbG93dXBNb3Zlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmb2xsb3d1cE1vdmVzLmxlbmd0aCldO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGVsaWJlcmF0ZUZvbGxvd3VwQXR0YWNrKCl7XG4gICAgICAgIGxldCBhdHRhY2s7XG5cbiAgICAgICAgY29uc3QgdHdvQXR0YWNrc0JhY2sgPSB0aGlzLmRlbGliZXJhdGVBdHRhY2tzW3RoaXMuZGVsaWJlcmF0ZUF0dGFja3MubGVuZ3RoIC0gMl07XG4gICAgICAgIGNvbnN0IG9uZUF0dGFja0JhY2sgPSB0aGlzLmRlbGliZXJhdGVBdHRhY2tzW3RoaXMuZGVsaWJlcmF0ZUF0dGFja3MubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKG9uZUF0dGFja0JhY2tbMF0uY2hhckNvZGVBdCgwKSA+IHR3b0F0dGFja3NCYWNrLmNoYXJDb2RlQXQoMCkpe1xuXG4gICAgICAgICAgICBhdHRhY2sgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG9uZUF0dGFja0JhY2suY2hhckNvZGVBdCgwKSArIDEpIFxuICAgICAgICAgICAgICAgICsgb25lQXR0YWNrQmFja1sxXTtcblxuICAgICAgICB9IGVsc2UgaWYgKG9uZUF0dGFja0JhY2tbMF0uY2hhckNvZGVBdCgwKSA8IHR3b0F0dGFja3NCYWNrLmNoYXJDb2RlQXQoMCkpe1xuXG4gICAgICAgICAgICBhdHRhY2sgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG9uZUF0dGFja0JhY2suY2hhckNvZGVBdCgwKSAtMSkgXG4gICAgICAgICAgICAgICAgKyBvbmVBdHRhY2tCYWNrWzFdO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob25lQXR0YWNrQmFja1sxXSA+IHR3b0F0dGFja3NCYWNrWzFdKXtcblxuICAgICAgICAgICAgYXR0YWNrID0gb25lQXR0YWNrQmFja1swXSArIChwYXJzZUludChvbmVBdHRhY2tCYWNrWzFdLCAxMCkgKyAxKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG9uZUF0dGFja0JhY2tbMV0gPCB0d29BdHRhY2tzQmFja1sxXSl7XG5cbiAgICAgICAgICAgIGF0dGFjayA9IG9uZUF0dGFja0JhY2tbMF0gKyAocGFyc2VJbnQob25lQXR0YWNrQmFja1sxXSwgMTApIC0gMSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmxlZ2FsQXR0YWNrcy5pbmRleE9mKGF0dGFjaykgPiAwID8gXG4gICAgICAgICAgICBhdHRhY2sgOiBcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVSYW5kb21Gb2xsb3d1cEF0dGFjayh0aGlzLmRlbGliZXJhdGVBdHRhY2tzWzBdKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUF0dGFjaygpe1xuICAgICAgICBsZXQgYXR0YWNrO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBUaGUgY3VycmVudCBzdGF0ZSBvZiBvdXIgbWFueSBib29sczogTGFzdCB0d28gbW92ZXMgaGl0IGlzICR7dGhpcy5sYXN0VHdvTW92ZXNIaXR9LCBQdXJzdWluZyBoaXQgc2hpcCBpcyAke3RoaXMucHVyc3VpbmdIaXRTaGlwfSwgYW5kIG91ciBEZWxpYmVyYXRlIGF0dGFjayBpcyBsaXN0ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5kZWxpYmVyYXRlQXR0YWNrcyl9LCB3aGlsZSBsYXN0IHJhbmRvbSBhdHRhY2sgd2FzICR7dGhpcy5sYXN0UmFuZG9tQXR0YWNrfWApO1xuXG4gICAgICAgIC8vIElmIGEgc2hpcCBoYXMgYWxyZWFkeSBiZWVuIHN0cnVjaywgcHVyc3VlIHNpbmtpbmcgaXRcblxuICAgICAgICBpZiAodGhpcy5wdXJzdWluZ0hpdFNoaXAgJiYgIXRoaXMubGFzdFR3b01vdmVzSGl0KXtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZGVsaWJlcmF0ZUF0dGFja3MubGVuZ3RoID49IDIpe1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgYSBzaGlwIGhhcyBiZWVuIHN0cnVjayB0d2ljZSwgYnV0IHdlIGp1c3QgbWlzc2VkLFxuICAgICAgICAgICAgICAgIC8vIGF0dGFjayBpbiBhIGdyaWQgZW1hbmF0aW5nIGZyb20gdGhlIGZpcnN0IGhpdFxuXG4gICAgICAgICAgICAgICAgYXR0YWNrID0gdGhpcy5nZW5lcmF0ZVJhbmRvbUZvbGxvd3VwQXR0YWNrKHRoaXMuZGVsaWJlcmF0ZUF0dGFja3NbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEb3VibGluZyBiYWNrIHRvICR7YXR0YWNrfWApO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgYXR0YWNrID0gdGhpcy5nZW5lcmF0ZVJhbmRvbUZvbGxvd3VwQXR0YWNrKHRoaXMubGFzdFJhbmRvbUF0dGFjayk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIHJhbmRvbSBmb2xsb3d1cCBtb3ZlIGlzICR7YXR0YWNrfWApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnB1cnN1aW5nSGl0U2hpcCAmJiB0aGlzLmxhc3RUd29Nb3Zlc0hpdCl7XG5cbiAgICAgICAgICAgIGF0dGFjayA9IHRoaXMuZ2VuZXJhdGVEZWxpYmVyYXRlRm9sbG93dXBBdHRhY2soKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgbGFzdCB0d28gYXR0YWNrcyBoaXQsIGFuZCB0aGUgbW92ZXMgdGhhdCBoYXZlIGhpdCBhcmUgJHt0aGlzLmRlbGliZXJhdGVBdHRhY2tzfSwgbWVhbmluZyB0aGUgZGVsaWJlcmF0ZSBmb2xsb3d1cCBpcyAke2F0dGFja31gKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBJZiBhIHNoaXAgaGFzIG5vdCBiZWVuIHN0cnVjaywgYXR0YWNrIHJhbmRvbWx5XG5cbiAgICAgICAgICAgIGF0dGFjayA9IHRoaXMuZ2VuZXJhdGVSYW5kb21MZWdhbEF0dGFjaygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEdlbmVyYXRpbmcgcmFuZG9tIGF0dGFjayAke2F0dGFja31gKTtcbiAgICAgICAgICAgIHRoaXMubGFzdFJhbmRvbUF0dGFjayA9IGF0dGFjaztcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZEF0dGFjayhhdHRhY2spO1xuICAgIH1cblxuICAgIHJhbmRvbWx5UG9wdWxhdGVCb2FyZFdpdGhTaGlwcygpe1xuICAgICAgICBsZXQgcGxhY2VkU2hpcHMgPSA0O1xuXG4gICAgICAgIGNvbnN0IHJhbmRvbU9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uO1xuICAgICAgICAgICAgc3dpdGNoIChNYXRoLmZsb29yKDEgKyBNYXRoLnJhbmRvbSgpICogMykpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ05vcnRoJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbiA9ICdTb3V0aCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnRWFzdCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnV2VzdCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnRGlyZWN0aW9uIHVudmFpbGFibGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICAgICAgICB9XG5cblxuICAgICAgICB3aGlsZSAocGxhY2VkU2hpcHMgPj0gMCl7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gT2JqZWN0LmVudHJpZXModGhpcy5zdGFydGluZ0ludmVudG9yeSlbcGxhY2VkU2hpcHNdWzFdO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQXR0ZW1wdGluZyB0byBwbGFjZSAke0pTT04uc3RyaW5naWZ5KHNoaXApfWApO1xuXG4gICAgICAgICAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLmdhbWVib2FyZC5wbGFjZShcbiAgICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVSYW5kb21MZWdhbEF0dGFjaygpLFxuICAgICAgICAgICAgICAgIHJhbmRvbU9yaWVudGF0aW9uKClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHBsYWNlbWVudCAhPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgIHBsYWNlZFNoaXBzIC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLmlkID0gMDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5zaW5rU3RhdHVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGV0ZXJtaW5lVHlwZShuYW1lKTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICBkZXRlcm1pbmVUeXBlKG5hbWUpIHtcbiAgICAgICAgc3dpdGNoKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0NhcnJpZXInOlxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0JhdHRsZXNoaXAnOlxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0NydWlzZXInOlxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1N1Ym1hcmluZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRGVzdHJveWVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUaGlzICR7dGhpcy5uYW1lfSBoYXMgc3VzdGFpbmVkICR7dGhpcy5oaXRzfSBoaXRzYCk7XG4gICAgICAgIHRoaXMuY2hlY2tJZlN1bmsoKTtcbiAgICB9XG5cbiAgICBjaGVja0lmU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLnNpbmtTdGF0dXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5jbGFzcyBUdXJuTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoZ3VpKXtcbiAgICAgICAgdGhpcy5ndWkgPSBndWk7XG4gICAgICAgIHRoaXMucGxheWVyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNwdSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzZXR1cEdhbWUoKXtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIGNvbnN0IGNwdUJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoJ1BsYXllcicsIHRydWUsIHRydWUsIHBsYXllckJvYXJkKTtcbiAgICAgICAgdGhpcy5jcHUgPSBuZXcgUGxheWVyKCdDUFUnLCBmYWxzZSwgZmFsc2UsIGNwdUJvYXJkKTtcblxuICAgICAgICB0aGlzLnBsYXllci5vcHBvbmVudCA9IHRoaXMuY3B1O1xuICAgICAgICB0aGlzLmNwdS5vcHBvbmVudCA9IHRoaXMucGxheWVyO1xuXG4gICAgICAgIHRoaXMucGxheWVyLnJhbmRvbWx5UG9wdWxhdGVCb2FyZFdpdGhTaGlwcygpO1xuICAgICAgICB0aGlzLmd1aS5wbGFjZVNoaXBzKHRoaXMucGxheWVyLmdhbWVib2FyZC5yZW1haW5pbmdTaGlwcywgJ3BsYXllcicpO1xuICAgICAgICB0aGlzLmNwdS5yYW5kb21seVBvcHVsYXRlQm9hcmRXaXRoU2hpcHMoKTtcbiAgICAgICAgdGhpcy5ndWkucGxhY2VTaGlwcyh0aGlzLmNwdS5nYW1lYm9hcmQucmVtYWluaW5nU2hpcHMsICdvcHBvbmVudCcpO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFR1cm5NYW5hZ2VyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEdVSU1hbmFnZXIgZnJvbSAnLi9HVUktbWFuYWdlcic7XG5pbXBvcnQgVHVybk1hbmFnZXIgZnJvbSAnLi90dXJuLW1hbmFnZXInO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cblxuXG5jb25zdCBkaXNwbGF5TWFuYWdlciA9IG5ldyBHVUlNYW5hZ2VyKCk7XG5jb25zdCB0dXJuTWFuYWdlciA9IG5ldyBUdXJuTWFuYWdlcihkaXNwbGF5TWFuYWdlcik7XG5cbmRpc3BsYXlNYW5hZ2VyLmluaXRpYWxQYWdlU2V0dXAoKTtcbnR1cm5NYW5hZ2VyLnNldHVwR2FtZSgpO1xuXG5jb25zb2xlLmxvZygnVGVzdGFtdW8uJyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9