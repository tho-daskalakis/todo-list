/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Nunito-Regular.ttf */ "./src/fonts/Nunito-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Color palette */\n/* Fonts */\n@font-face {\n  font-family: Nunito;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 500;\n  font-style: normal;\n}\n/* Mixins */\n/* Styles */\nhtml,\nbody,\n.container {\n  margin: 0;\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n  font-family: \"Nunito\";\n  font-size: 24px;\n  font-size: min(4vmin, 2.8vmax);\n}\n\n.holy-grail {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 10% 90%;\n  grid-template-columns: 20% 80%;\n}\n.holy-grail > * {\n  padding: 8px;\n}\n.holy-grail > .top-bar {\n  background-color: #14b8a6;\n  color: #ccfbf1;\n  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.8);\n  font-weight: 600;\n  font-size: 38px;\n  font-size: min(7vmin, 5vmax);\n  grid-row: 1/span 1;\n  grid-column: 1/span 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.holy-grail > .side-bar {\n  background-color: #115e59;\n  color: #ccfbf1;\n  grid-row: 2/span 1;\n  grid-column: 1/span 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.holy-grail > .main-content {\n  background-color: #f0fdfa;\n  overflow: auto;\n  grid-row: 2/span 1;\n  grid-column: 2/span 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.project {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 2%;\n  margin-right: 5px;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n}\n.project:hover {\n  background-color: rgba(240, 253, 250, 0.6);\n  color: black;\n  cursor: pointer;\n}\n.project:active {\n  box-shadow: none;\n}\n\n.add-project {\n  justify-self: center;\n  width: clamp(24px, 5vmin, 48px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.add-project:hover {\n  cursor: pointer;\n}\n.add-project img {\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background-color: #99f6e4;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n}\n.add-project img:active {\n  box-shadow: none;\n}\n\n.projects-title {\n  font-weight: 600;\n}\n\n.projects-body {\n  white-space: nowrap;\n  overflow-x: hidden;\n  overflow-y: overlay;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: max-content;\n  grid-auto-rows: max-content;\n  gap: 8px;\n}\n\n.selected-project {\n  background-color: rgba(240, 253, 250, 0.9);\n  color: black;\n}\n.selected-project:hover {\n  background-color: rgba(240, 253, 250, 0.9);\n}\n\n.selected-project-display {\n  font-weight: 600;\n}\n\n.add-task {\n  width: clamp(20px, 4vmax, 44px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.add-task:hover {\n  cursor: pointer;\n}\n.add-task:hover {\n  cursor: pointer;\n}\n.add-task img {\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background-color: #99f6e4;\n  box-shadow: 5px 5px 5px gray;\n}\n.add-task img:active {\n  box-shadow: none;\n}\n\n.task {\n  width: 100%;\n  height: 10vh;\n  min-height: 140px;\n  background-color: rgba(128, 128, 128, 0.2);\n  border-radius: 5px;\n  display: grid;\n  grid-template-rows: 1fr min(4vmax, 50px);\n  grid-template-columns: 1fr min(max(34px, 4vmax), 104px);\n}\n.task > * {\n  padding: 8px;\n}\n.task .task-title {\n  color: #115e59;\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n  overflow: auto;\n  grid-row: 1/span 1;\n  grid-column: 1/span 1;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.task .task-title > input {\n  width: 80%;\n  height: 60%;\n  font-size: min(4vmin, 2.8vmax);\n}\n.task .task-edit {\n  padding: 4px;\n  padding-right: 8px;\n  grid-row: 1/span 2;\n  grid-column: 2/span 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task .task-edit > button {\n  width: clamp(20px, 4vmax, 44px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background-color: #d97706;\n  border-radius: 10px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task .task-edit > button:hover {\n  cursor: pointer;\n}\n.task .task-edit > button:active {\n  box-shadow: none;\n}\n.task .task-edit > button > img {\n  width: 90%;\n  height: 90%;\n}\n.task .task-action {\n  padding: 0;\n  grid-row: 2/span 1;\n  grid-column: 1/span 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task .task-action > button {\n  width: clamp(20px, 4vmax, 44px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background-color: #14b8a6;\n  margin-bottom: 8px;\n  height: auto;\n  border-radius: 10px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task .task-action > button:hover {\n  cursor: pointer;\n}\n.task .task-action > button:active {\n  box-shadow: none;\n}\n.task .task-action > button > img {\n  width: 90%;\n  height: 90%;\n}\n.task .task-action > button.task-delete {\n  width: clamp(20px, 4vmax, 44px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background-color: tomato;\n  margin-bottom: 8px;\n  height: auto;\n  border-radius: 10px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task .task-action > button.task-delete:hover {\n  cursor: pointer;\n}\n.task .task-action > button.task-delete:active {\n  box-shadow: none;\n}\n.task .task-action > button.task-delete > img {\n  width: 90%;\n  height: 90%;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["/* Color palette */\n\n$teal-50: #f0fdfa;\n$teal-100: #ccfbf1;\n$teal-200: #99f6e4;\n$teal-500: #14b8a6;\n$teal-800: #115e59;\n\n$amber-600: #d97706;\n\n$top-bar-bg: $teal-500;\n$side-bar-bg: $teal-800;\n$main-content-bg: $teal-50;\n\n$edit-task-btn: $amber-600;\n$action-task-btn: $teal-500;\n$delete-task-btn: tomato;\n\n/* Fonts */\n\n@font-face {\n  font-family: Nunito;\n  src: url(./fonts/Nunito-Regular.ttf);\n  font-weight: 500;\n  font-style: normal;\n}\n\n/* Mixins */\n\n@mixin circular-btn {\n  width: clamp(20px, 4vmax, 44px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n/* Styles */\n\nhtml,\nbody,\n.container {\n  margin: 0;\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n\n  font-family: 'Nunito';\n  font-size: 24px;\n  font-size: min(4vmin, 2.8vmax);\n}\n\n.holy-grail {\n  height: 100%;\n\n  display: grid;\n  grid-template-rows: 10% 90%;\n  grid-template-columns: 20% 80%;\n\n  & > * {\n    padding: 8px;\n  }\n\n  & > .top-bar {\n    background-color: $top-bar-bg;\n    color: $teal-100;\n    text-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.8);\n    font-weight: 600;\n    font-size: 38px;\n    font-size: min(7vmin, 5vmax);\n\n    grid-row: 1 / span 1;\n    grid-column: 1 / span 2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  & > .side-bar {\n    background-color: $teal-800;\n    color: $teal-100;\n\n    grid-row: 2 / span 1;\n    grid-column: 1 / span 1;\n\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  & > .main-content {\n    background-color: $main-content-bg;\n    overflow: auto;\n\n    grid-row: 2 / span 1;\n    grid-column: 2 / span 1;\n\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    justify-content: flex-start;\n    align-items: center;\n  }\n}\n\n.project {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 2%;\n  margin-right: 5px;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.5);\n\n  &:hover {\n    background-color: rgba($color: $teal-50, $alpha: 0.6);\n    color: black;\n    cursor: pointer;\n  }\n\n  &:active {\n    box-shadow: none;\n  }\n}\n\n.add-project {\n  justify-self: center;\n  width: clamp(24px, 5vmin, 48px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  img {\n    width: 100%;\n    aspect-ratio: 1;\n    border-radius: 50%;\n    background-color: $teal-200;\n    box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.5);\n\n    &:active {\n      box-shadow: none;\n    }\n  }\n}\n\n.projects-title {\n  font-weight: 600;\n}\n\n.projects-body {\n  white-space: nowrap;\n  overflow-x: hidden;\n  overflow-y: overlay;\n  width: 100%;\n  height: 100%;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: max-content;\n  grid-auto-rows: max-content;\n  gap: 8px;\n}\n\n.selected-project {\n  background-color: rgba($color: $teal-50, $alpha: 0.9);\n  color: black;\n\n  &:hover {\n    background-color: rgba($color: $teal-50, $alpha: 0.9);\n  }\n}\n\n.selected-project-display {\n  font-weight: 600;\n}\n\n.add-task {\n  @include circular-btn();\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  img {\n    width: 100%;\n    aspect-ratio: 1;\n    border-radius: 50%;\n    background-color: $teal-200;\n    box-shadow: 5px 5px 5px gray;\n\n    &:active {\n      box-shadow: none;\n    }\n  }\n}\n\n.task {\n  width: 100%;\n  height: 10vh;\n  min-height: 140px;\n  background-color: rgba($color: gray, $alpha: 0.2);\n  border-radius: 5px;\n\n  display: grid;\n  grid-template-rows: 1fr min(4vmax, 50px);\n  grid-template-columns: 1fr min(max(34px, 4vmax), 104px);\n\n  & > * {\n    padding: 8px;\n  }\n\n  .task-title {\n    color: $teal-800;\n    word-wrap: break-word;\n    text-overflow: ellipsis;\n    overflow: auto;\n\n    grid-row: 1 / span 1;\n    grid-column: 1 / span 1;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    & > input {\n      width: 80%;\n      height: 60%;\n      font-size: min(4vmin, 2.8vmax);\n    }\n  }\n\n  .task-edit {\n    padding: 4px;\n    padding-right: 8px;\n\n    grid-row: 1 / span 2;\n    grid-column: 2 / span 1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    & > button {\n      @include circular-btn();\n\n      background-color: $edit-task-btn;\n      border-radius: 10px;\n      box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.25);\n\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      &:active {\n        box-shadow: none;\n      }\n\n      & > img {\n        width: 90%;\n        height: 90%;\n      }\n    }\n  }\n\n  .task-action {\n    padding: 0;\n\n    grid-row: 2 / span 1;\n    grid-column: 1 / span 2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    & > button {\n      @include circular-btn();\n\n      background-color: $action-task-btn;\n      margin-bottom: 8px;\n      height: auto;\n      border-radius: 10px;\n      box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.25);\n\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      &:active {\n        box-shadow: none;\n      }\n\n      & > img {\n        width: 90%;\n        height: 90%;\n      }\n    }\n\n    & > button.task-delete {\n      @include circular-btn();\n\n      background-color: $delete-task-btn;\n      margin-bottom: 8px;\n      height: auto;\n      border-radius: 10px;\n      box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.25);\n\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      &:active {\n        box-shadow: none;\n      }\n\n      & > img {\n        width: 90%;\n        height: 90%;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/pages/addTask.js":
/*!******************************!*\
  !*** ./src/pages/addTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/pages/createTask.js");


function addTask(tasks) {
  const main = document.querySelector('.main-content');

  // Create a new task

  const taskObj = new _createTask__WEBPACK_IMPORTED_MODULE_0__.Task(tasks);

  const task = taskObj.editTask;

  // Add to task array

  tasks.push(taskObj);

  // Add to display

  main.appendChild(task);
}




/***/ }),

/***/ "./src/pages/createTask.js":
/*!*********************************!*\
  !*** ./src/pages/createTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(tasks) {
    this.taskIndex = tasks.length;
    this.tasks = tasks;
    this.main = document.querySelector('.main-content');
  }

  _text = 'New task';

  _div = document.createElement('div');

  _editDiv = document.createElement('div');

  set text(text) {
    if (!text) return;

    this._text = text;
  }

  get text() {
    return this._text;
  }

  set div(div) {
    this._div = div;
  }

  get div() {
    return this._div;
  }

  get task() {
    const task = document.createElement('div');

    task.classList.add('task');

    // Task title

    const taskTitle = document.createElement('div');

    taskTitle.classList.add('task-title');

    taskTitle.textContent = `${this._text}`;

    task.appendChild(taskTitle);

    // Task edit

    const taskEdit = document.createElement('div');

    taskEdit.classList.add('task-edit');

    const editIcon = document.createElement('img');

    editIcon.setAttribute(
      'src',
      '../src/svg/edit_square_FILL0_wght400_GRAD0_opsz48.svg'
    );

    editIcon.setAttribute('alt', 'Edit task');

    const editBtn = document.createElement('button');

    editBtn.addEventListener('click', (e) => {
      // Call edit mode

      this.editMode;
    });

    editBtn.appendChild(editIcon);

    taskEdit.appendChild(editBtn);

    task.appendChild(taskEdit);

    // Task actions

    const taskActions = document.createElement('div');

    taskActions.classList.add('task-action');

    const actionsImg = document.createElement('img');

    actionsImg.setAttribute(
      'src',
      '../src/svg/done_FILL0_wght400_GRAD0_opsz48.svg'
    );

    actionsImg.setAttribute('alt', 'Mark task as done');

    const actionsBtn = document.createElement('button');

    actionsBtn.appendChild(actionsImg);

    taskActions.appendChild(actionsBtn);

    task.appendChild(taskActions);

    this.div = task;

    return this.div;
  }

  get editTask() {
    const task = document.createElement('div');
    task.classList.add('task');

    // Create new elements

    // Create text

    const editTitle = document.createElement('div');
    editTitle.classList.add('task-title');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.value = this.text;

    editTitle.appendChild(input);
    task.appendChild(editTitle);

    // Create apply edit button

    const applyChanges = document.createElement('div');
    applyChanges.classList.add('task-edit');

    const applyBtn = document.createElement('button');
    applyBtn.addEventListener('click', (e) => {
      // Apply changes

      this.text = input.value;
      this.applyEdit;
    });

    const applyImg = document.createElement('img');
    applyImg.setAttribute(
      'src',
      '../src/svg/done_FILL0_wght400_GRAD0_opsz48.svg'
    );

    applyBtn.appendChild(applyImg);
    applyChanges.appendChild(applyBtn);
    task.appendChild(applyChanges);

    // Create delete task button

    const deleteAction = document.createElement('div');
    deleteAction.classList.add('task-action');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('task-delete');
    deleteBtn.addEventListener('click', (e) => {
      console.log('Delete task');
    });

    const deleteImg = document.createElement('img');
    deleteImg.setAttribute(
      'src',
      '../src/svg/delete_FILL0_wght400_GRAD0_opsz48.svg'
    );

    deleteBtn.appendChild(deleteImg);
    deleteAction.appendChild(deleteBtn);
    task.appendChild(deleteAction);

    this._editDiv = task;
    return this._editDiv;
  }

  get applyEdit() {
    // console.log('Apply edit');
    // console.log(this.main);
    // console.log(this.div);
    this.main.replaceChild(this.task, this._editDiv);
  }

  get editMode() {
    this.main.replaceChild(this.editTask, this._div);
  }
}




/***/ }),

/***/ "./src/pages/initial.js":
/*!******************************!*\
  !*** ./src/pages/initial.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initial": () => (/* binding */ initial)
/* harmony export */ });
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ "./src/pages/addTask.js");


function initial() {
  // Get container

  const container = document.querySelector('.container');

  const holyGrail = document.createElement('div');

  holyGrail.classList.add('holy-grail');

  // Top bar

  const topBar = document.createElement('div');

  topBar.classList.add('top-bar');

  topBar.textContent = 'Todo app';

  // Side bar

  // Projects title

  const projectsTitle = document.createElement('div');

  projectsTitle.classList.add('projects-title');

  projectsTitle.textContent = 'Projects';

  // Projects body

  // Add project

  const addProjectIcon = document.createElement('img');

  addProjectIcon.setAttribute(
    'src',
    '../src/svg/add_FILL0_wght400_GRAD0_opsz48.svg'
  );

  addProjectIcon.setAttribute('alt', 'Add task icon');

  const addProjectBtn = document.createElement('button');

  addProjectBtn.classList.add('add-project');

  addProjectBtn.appendChild(addProjectIcon);

  const defaultProject = document.createElement('div');

  defaultProject.classList.add('project', 'selected-project');

  defaultProject.textContent = 'My tasks';

  const projectsBody = document.createElement('div');

  projectsBody.classList.add('projects-body');

  projectsBody.appendChild(addProjectBtn);
  projectsBody.appendChild(defaultProject);

  const sideBar = document.createElement('div');

  sideBar.classList.add('side-bar');

  sideBar.appendChild(projectsTitle);
  sideBar.appendChild(projectsBody);

  // Main content

  // Add task

  const addTaskIcon = document.createElement('img');

  addTaskIcon.setAttribute(
    'src',
    '../src/svg/add_FILL0_wght400_GRAD0_opsz48.svg'
  );

  addTaskIcon.setAttribute('alt', 'Add task icon');

  const addTaskBtn = document.createElement('button');

  addTaskBtn.classList.add('add-task');

  addTaskBtn.appendChild(addTaskIcon);

  let tasks = [];
  addTaskBtn.addEventListener('click', (e) => {
    (0,_addTask__WEBPACK_IMPORTED_MODULE_0__.addTask)(tasks);
  });

  // Selected project display

  const selectedProjectDisplay = document.createElement('div');

  selectedProjectDisplay.classList.add('selected-project-display');

  selectedProjectDisplay.textContent = defaultProject.textContent;

  const mainContent = document.createElement('div');

  mainContent.classList.add('main-content');

  mainContent.appendChild(selectedProjectDisplay);
  mainContent.appendChild(addTaskBtn);

  // Append to holy grail

  holyGrail.appendChild(sideBar);
  holyGrail.appendChild(mainContent);
  holyGrail.appendChild(topBar);

  // Append to container

  container.appendChild(holyGrail);
}




/***/ }),

/***/ "./src/fonts/Nunito-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Nunito-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99a3b019e7727ac19479.ttf";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/* harmony import */ var _pages_initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/initial */ "./src/pages/initial.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");



(0,_pages_initial__WEBPACK_IMPORTED_MODULE_0__.initial)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvQzs7QUFFcEM7QUFDQTs7QUFFQTs7QUFFQSxzQkFBc0IsNkNBQUk7O0FBRTFCOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7QUNwQm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSwrQkFBK0IsV0FBVzs7QUFFMUM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3JMb0I7O0FBRXBDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlEQUFPO0FBQ1gsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0SG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0EwQztBQUNuQjs7QUFFdkIsdURBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL2luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvTnVuaXRvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ29sb3IgcGFsZXR0ZSAqL1xcbi8qIEZvbnRzICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTnVuaXRvO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLyogTWl4aW5zICovXFxuLyogU3R5bGVzICovXFxuaHRtbCxcXG5ib2R5LFxcbi5jb250YWluZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXNpemU6IG1pbig0dm1pbiwgMi44dm1heCk7XFxufVxcblxcbi5ob2x5LWdyYWlsIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA5MCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxufVxcbi5ob2x5LWdyYWlsID4gKiB7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcbi5ob2x5LWdyYWlsID4gLnRvcC1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0YjhhNjtcXG4gIGNvbG9yOiAjY2NmYmYxO1xcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDM4cHg7XFxuICBmb250LXNpemU6IG1pbig3dm1pbiwgNXZtYXgpO1xcbiAgZ3JpZC1yb3c6IDEvc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhvbHktZ3JhaWwgPiAuc2lkZS1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNWU1OTtcXG4gIGNvbG9yOiAjY2NmYmYxO1xcbiAgZ3JpZC1yb3c6IDIvc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG59XFxuLmhvbHktZ3JhaWwgPiAubWFpbi1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGZkZmE7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGdyaWQtcm93OiAyL3NwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiAyL3NwYW4gMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgcGFkZGluZzogMiU7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI1MywgMjUwLCAwLjYpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJvamVjdDphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IGNsYW1wKDI0cHgsIDV2bWluLCA0OHB4KTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkLXByb2plY3QgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5ZjZlNDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuLmFkZC1wcm9qZWN0IGltZzphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnByb2plY3RzLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5wcm9qZWN0cy1ib2R5IHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBvdmVybGF5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5zZWxlY3RlZC1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNTMsIDI1MCwgMC45KTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLnNlbGVjdGVkLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI1MywgMjUwLCAwLjkpO1xcbn1cXG5cXG4uc2VsZWN0ZWQtcHJvamVjdC1kaXNwbGF5IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICB3aWR0aDogY2xhbXAoMjBweCwgNHZtYXgsIDQ0cHgpO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hZGQtdGFzazpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZGQtdGFzazpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZGQtdGFzayBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTlmNmU0O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggZ3JheTtcXG59XFxuLmFkZC10YXNrIGltZzphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnRhc2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBtaW4taGVpZ2h0OiAxNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4oNHZtYXgsIDUwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluKG1heCgzNHB4LCA0dm1heCksIDEwNHB4KTtcXG59XFxuLnRhc2sgPiAqIHtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuLnRhc2sgLnRhc2stdGl0bGUge1xcbiAgY29sb3I6ICMxMTVlNTk7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZ3JpZC1yb3c6IDEvc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrIC50YXNrLXRpdGxlID4gaW5wdXQge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogNjAlO1xcbiAgZm9udC1zaXplOiBtaW4oNHZtaW4sIDIuOHZtYXgpO1xcbn1cXG4udGFzayAudGFzay1lZGl0IHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gIGdyaWQtcm93OiAxL3NwYW4gMjtcXG4gIGdyaWQtY29sdW1uOiAyL3NwYW4gMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrIC50YXNrLWVkaXQgPiBidXR0b24ge1xcbiAgd2lkdGg6IGNsYW1wKDIwcHgsIDR2bWF4LCA0NHB4KTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk3NzA2O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzayAudGFzay1lZGl0ID4gYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhc2sgLnRhc2stZWRpdCA+IGJ1dHRvbjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnRhc2sgLnRhc2stZWRpdCA+IGJ1dHRvbiA+IGltZyB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcbi50YXNrIC50YXNrLWFjdGlvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgZ3JpZC1yb3c6IDIvc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2sgLnRhc2stYWN0aW9uID4gYnV0dG9uIHtcXG4gIHdpZHRoOiBjbGFtcCgyMHB4LCA0dm1heCwgNDRweCk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0YjhhNjtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2sgLnRhc2stYWN0aW9uID4gYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhc2sgLnRhc2stYWN0aW9uID4gYnV0dG9uOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4udGFzayAudGFzay1hY3Rpb24gPiBidXR0b24gPiBpbWcge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG4udGFzayAudGFzay1hY3Rpb24gPiBidXR0b24udGFzay1kZWxldGUge1xcbiAgd2lkdGg6IGNsYW1wKDIwcHgsIDR2bWF4LCA0NHB4KTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrIC50YXNrLWFjdGlvbiA+IGJ1dHRvbi50YXNrLWRlbGV0ZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrIC50YXNrLWFjdGlvbiA+IGJ1dHRvbi50YXNrLWRlbGV0ZTphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnRhc2sgLnRhc2stYWN0aW9uID4gYnV0dG9uLnRhc2stZGVsZXRlID4gaW1nIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFBO0FBa0JBLFVBQUE7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBakJGO0FBb0JBLFdBQUE7QUFjQSxXQUFBO0FBRUE7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQWpDRjs7QUFvQ0E7RUFDRSxZQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFsQ0Y7QUFvQ0U7RUFDRSxZQUFBO0FBbENKO0FBcUNFO0VBQ0UseUJBL0RPO0VBZ0VQLGNBbEVPO0VBbUVQLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFFQSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFyQ0o7QUF3Q0U7RUFDRSx5QkE5RU87RUErRVAsY0FsRk87RUFvRlAsa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUF4Q0o7QUEyQ0U7RUFDRSx5QkE5Rk07RUErRk4sY0FBQTtFQUVBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQTNDSjs7QUErQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBNUNGO0FBOENFO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQTVDSjtBQStDRTtFQUNFLGdCQUFBO0FBN0NKOztBQWlEQTtFQUNFLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBL0NGO0FBaURFO0VBQ0UsZUFBQTtBQS9DSjtBQWtERTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFsSk87RUFtSlAsMENBQUE7QUFoREo7QUFrREk7RUFDRSxnQkFBQTtBQWhETjs7QUFxREE7RUFDRSxnQkFBQTtBQWxERjs7QUFxREE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxRQUFBO0FBbkRGOztBQXNEQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtBQW5ERjtBQXFERTtFQUNFLDBDQUFBO0FBbkRKOztBQXVEQTtFQUNFLGdCQUFBO0FBcERGOztBQXVEQTtFQWhLRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBK0pBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBakRGO0FBOUdFO0VBQ0UsZUFBQTtBQWdISjtBQWdERTtFQUNFLGVBQUE7QUE5Q0o7QUFpREU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBek1PO0VBME1QLDRCQUFBO0FBL0NKO0FBaURJO0VBQ0UsZ0JBQUE7QUEvQ047O0FBb0RBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSx1REFBQTtBQWxERjtBQW9ERTtFQUNFLFlBQUE7QUFsREo7QUFxREU7RUFDRSxjQWhPTztFQWlPUCxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQXJESjtBQXVESTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFyRE47QUF5REU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF6REo7QUEyREk7RUF0T0YsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQXFPSSx5QkEvUE07RUFnUU4sbUJBQUE7RUFDQSwyQ0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdkROO0FBbExFO0VBQ0UsZUFBQTtBQW9MSjtBQXNETTtFQUNFLGdCQUFBO0FBcERSO0FBdURNO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFyRFI7QUEwREU7RUFDRSxVQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBMURKO0FBNERJO0VBdFFGLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFxUUkseUJBbFNLO0VBbVNMLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXhETjtBQW5ORTtFQUNFLGVBQUE7QUFxTko7QUF1RE07RUFDRSxnQkFBQTtBQXJEUjtBQXdETTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBdERSO0FBMERJO0VBN1JGLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUE0Ukksd0JBOVNZO0VBK1NaLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXRETjtBQTVPRTtFQUNFLGVBQUE7QUE4T0o7QUFxRE07RUFDRSxnQkFBQTtBQW5EUjtBQXNETTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBcERSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENvbG9yIHBhbGV0dGUgKi9cXG5cXG4kdGVhbC01MDogI2YwZmRmYTtcXG4kdGVhbC0xMDA6ICNjY2ZiZjE7XFxuJHRlYWwtMjAwOiAjOTlmNmU0O1xcbiR0ZWFsLTUwMDogIzE0YjhhNjtcXG4kdGVhbC04MDA6ICMxMTVlNTk7XFxuXFxuJGFtYmVyLTYwMDogI2Q5NzcwNjtcXG5cXG4kdG9wLWJhci1iZzogJHRlYWwtNTAwO1xcbiRzaWRlLWJhci1iZzogJHRlYWwtODAwO1xcbiRtYWluLWNvbnRlbnQtYmc6ICR0ZWFsLTUwO1xcblxcbiRlZGl0LXRhc2stYnRuOiAkYW1iZXItNjAwO1xcbiRhY3Rpb24tdGFzay1idG46ICR0ZWFsLTUwMDtcXG4kZGVsZXRlLXRhc2stYnRuOiB0b21hdG87XFxuXFxuLyogRm9udHMgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XFxuICBzcmM6IHVybCguL2ZvbnRzL051bml0by1SZWd1bGFyLnR0Zik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKiBNaXhpbnMgKi9cXG5cXG5AbWl4aW4gY2lyY3VsYXItYnRuIHtcXG4gIHdpZHRoOiBjbGFtcCgyMHB4LCA0dm1heCwgNDRweCk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuXFxuLyogU3R5bGVzICovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbi5jb250YWluZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBmb250LWZhbWlseTogJ051bml0byc7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXNpemU6IG1pbig0dm1pbiwgMi44dm1heCk7XFxufVxcblxcbi5ob2x5LWdyYWlsIHtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA5MCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuXFxuICAmID4gKiB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gIH1cXG5cXG4gICYgPiAudG9wLWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3AtYmFyLWJnO1xcbiAgICBjb2xvcjogJHRlYWwtMTAwO1xcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuOCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG4gICAgZm9udC1zaXplOiBtaW4oN3ZtaW4sIDV2bWF4KTtcXG5cXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICYgPiAuc2lkZS1iYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbC04MDA7XFxuICAgIGNvbG9yOiAkdGVhbC0xMDA7XFxuXFxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICB9XFxuXFxuICAmID4gLm1haW4tY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbnRlbnQtYmc7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBwYWRkaW5nOiAyJTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuNSk7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICR0ZWFsLTUwLCAkYWxwaGE6IDAuNik7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgJjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgfVxcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogY2xhbXAoMjRweCwgNXZtaW4sIDQ4cHgpO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbC0yMDA7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjUpO1xcblxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ucHJvamVjdHMtdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnByb2plY3RzLWJvZHkge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IG92ZXJsYXk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQ7XFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnNlbGVjdGVkLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICR0ZWFsLTUwLCAkYWxwaGE6IDAuOSk7XFxuICBjb2xvcjogYmxhY2s7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICR0ZWFsLTUwLCAkYWxwaGE6IDAuOSk7XFxuICB9XFxufVxcblxcbi5zZWxlY3RlZC1wcm9qZWN0LWRpc3BsYXkge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gIEBpbmNsdWRlIGNpcmN1bGFyLWJ0bigpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsLTIwMDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggZ3JheTtcXG5cXG4gICAgJjphY3RpdmUge1xcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnRhc2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBtaW4taGVpZ2h0OiAxNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiBncmF5LCAkYWxwaGE6IDAuMik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluKDR2bWF4LCA1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbihtYXgoMzRweCwgNHZtYXgpLCAxMDRweCk7XFxuXFxuICAmID4gKiB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gIH1cXG5cXG4gIC50YXNrLXRpdGxlIHtcXG4gICAgY29sb3I6ICR0ZWFsLTgwMDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAmID4gaW5wdXQge1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgaGVpZ2h0OiA2MCU7XFxuICAgICAgZm9udC1zaXplOiBtaW4oNHZtaW4sIDIuOHZtYXgpO1xcbiAgICB9XFxuICB9XFxuXFxuICAudGFzay1lZGl0IHtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxuXFxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICYgPiBidXR0b24ge1xcbiAgICAgIEBpbmNsdWRlIGNpcmN1bGFyLWJ0bigpO1xcblxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRlZGl0LXRhc2stYnRuO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuMjUpO1xcblxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAmID4gaW1nIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50YXNrLWFjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICYgPiBidXR0b24ge1xcbiAgICAgIEBpbmNsdWRlIGNpcmN1bGFyLWJ0bigpO1xcblxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY3Rpb24tdGFzay1idG47XFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjI1KTtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgJiA+IGltZyB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYgPiBidXR0b24udGFzay1kZWxldGUge1xcbiAgICAgIEBpbmNsdWRlIGNpcmN1bGFyLWJ0bigpO1xcblxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWxldGUtdGFzay1idG47XFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjI1KTtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgJiA+IGltZyB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi9jcmVhdGVUYXNrJztcblxuZnVuY3Rpb24gYWRkVGFzayh0YXNrcykge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuXG4gIC8vIENyZWF0ZSBhIG5ldyB0YXNrXG5cbiAgY29uc3QgdGFza09iaiA9IG5ldyBUYXNrKHRhc2tzKTtcblxuICBjb25zdCB0YXNrID0gdGFza09iai5lZGl0VGFzaztcblxuICAvLyBBZGQgdG8gdGFzayBhcnJheVxuXG4gIHRhc2tzLnB1c2godGFza09iaik7XG5cbiAgLy8gQWRkIHRvIGRpc3BsYXlcblxuICBtYWluLmFwcGVuZENoaWxkKHRhc2spO1xufVxuXG5leHBvcnQgeyBhZGRUYXNrIH07XG4iLCJjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGFza3MpIHtcbiAgICB0aGlzLnRhc2tJbmRleCA9IHRhc2tzLmxlbmd0aDtcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICB9XG5cbiAgX3RleHQgPSAnTmV3IHRhc2snO1xuXG4gIF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBfZWRpdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHNldCB0ZXh0KHRleHQpIHtcbiAgICBpZiAoIXRleHQpIHJldHVybjtcblxuICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cblxuICBzZXQgZGl2KGRpdikge1xuICAgIHRoaXMuX2RpdiA9IGRpdjtcbiAgfVxuXG4gIGdldCBkaXYoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpdjtcbiAgfVxuXG4gIGdldCB0YXNrKCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gICAgLy8gVGFzayB0aXRsZVxuXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gYCR7dGhpcy5fdGV4dH1gO1xuXG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXG4gICAgLy8gVGFzayBlZGl0XG5cbiAgICBjb25zdCB0YXNrRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGFza0VkaXQuY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0Jyk7XG5cbiAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgZWRpdEljb24uc2V0QXR0cmlidXRlKFxuICAgICAgJ3NyYycsXG4gICAgICAnLi4vc3JjL3N2Zy9lZGl0X3NxdWFyZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnXG4gICAgKTtcblxuICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0VkaXQgdGFzaycpO1xuXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAvLyBDYWxsIGVkaXQgbW9kZVxuXG4gICAgICB0aGlzLmVkaXRNb2RlO1xuICAgIH0pO1xuXG4gICAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG5cbiAgICB0YXNrRWRpdC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0VkaXQpO1xuXG4gICAgLy8gVGFzayBhY3Rpb25zXG5cbiAgICBjb25zdCB0YXNrQWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGFza0FjdGlvbnMuY2xhc3NMaXN0LmFkZCgndGFzay1hY3Rpb24nKTtcblxuICAgIGNvbnN0IGFjdGlvbnNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGFjdGlvbnNJbWcuc2V0QXR0cmlidXRlKFxuICAgICAgJ3NyYycsXG4gICAgICAnLi4vc3JjL3N2Zy9kb25lX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2ZydcbiAgICApO1xuXG4gICAgYWN0aW9uc0ltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdNYXJrIHRhc2sgYXMgZG9uZScpO1xuXG4gICAgY29uc3QgYWN0aW9uc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgYWN0aW9uc0J0bi5hcHBlbmRDaGlsZChhY3Rpb25zSW1nKTtcblxuICAgIHRhc2tBY3Rpb25zLmFwcGVuZENoaWxkKGFjdGlvbnNCdG4pO1xuXG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrQWN0aW9ucyk7XG5cbiAgICB0aGlzLmRpdiA9IHRhc2s7XG5cbiAgICByZXR1cm4gdGhpcy5kaXY7XG4gIH1cblxuICBnZXQgZWRpdFRhc2soKSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gICAgLy8gQ3JlYXRlIG5ldyBlbGVtZW50c1xuXG4gICAgLy8gQ3JlYXRlIHRleHRcblxuICAgIGNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXRUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBpbnB1dC52YWx1ZSA9IHRoaXMudGV4dDtcblxuICAgIGVkaXRUaXRsZS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgdGFzay5hcHBlbmRDaGlsZChlZGl0VGl0bGUpO1xuXG4gICAgLy8gQ3JlYXRlIGFwcGx5IGVkaXQgYnV0dG9uXG5cbiAgICBjb25zdCBhcHBseUNoYW5nZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcHBseUNoYW5nZXMuY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0Jyk7XG5cbiAgICBjb25zdCBhcHBseUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFwcGx5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIC8vIEFwcGx5IGNoYW5nZXNcblxuICAgICAgdGhpcy50ZXh0ID0gaW5wdXQudmFsdWU7XG4gICAgICB0aGlzLmFwcGx5RWRpdDtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFwcGx5SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYXBwbHlJbWcuc2V0QXR0cmlidXRlKFxuICAgICAgJ3NyYycsXG4gICAgICAnLi4vc3JjL3N2Zy9kb25lX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2ZydcbiAgICApO1xuXG4gICAgYXBwbHlCdG4uYXBwZW5kQ2hpbGQoYXBwbHlJbWcpO1xuICAgIGFwcGx5Q2hhbmdlcy5hcHBlbmRDaGlsZChhcHBseUJ0bik7XG4gICAgdGFzay5hcHBlbmRDaGlsZChhcHBseUNoYW5nZXMpO1xuXG4gICAgLy8gQ3JlYXRlIGRlbGV0ZSB0YXNrIGJ1dHRvblxuXG4gICAgY29uc3QgZGVsZXRlQWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVsZXRlQWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYWN0aW9uJyk7XG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUnKTtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZSB0YXNrJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWxldGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZWxldGVJbWcuc2V0QXR0cmlidXRlKFxuICAgICAgJ3NyYycsXG4gICAgICAnLi4vc3JjL3N2Zy9kZWxldGVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJ1xuICAgICk7XG5cbiAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSW1nKTtcbiAgICBkZWxldGVBY3Rpb24uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKGRlbGV0ZUFjdGlvbik7XG5cbiAgICB0aGlzLl9lZGl0RGl2ID0gdGFzaztcbiAgICByZXR1cm4gdGhpcy5fZWRpdERpdjtcbiAgfVxuXG4gIGdldCBhcHBseUVkaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0FwcGx5IGVkaXQnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1haW4pO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGl2KTtcbiAgICB0aGlzLm1haW4ucmVwbGFjZUNoaWxkKHRoaXMudGFzaywgdGhpcy5fZWRpdERpdik7XG4gIH1cblxuICBnZXQgZWRpdE1vZGUoKSB7XG4gICAgdGhpcy5tYWluLnJlcGxhY2VDaGlsZCh0aGlzLmVkaXRUYXNrLCB0aGlzLl9kaXYpO1xuICB9XG59XG5cbmV4cG9ydCB7IFRhc2sgfTtcbiIsImltcG9ydCB7IGFkZFRhc2sgfSBmcm9tICcuL2FkZFRhc2snO1xuXG5mdW5jdGlvbiBpbml0aWFsKCkge1xuICAvLyBHZXQgY29udGFpbmVyXG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGhvbHlHcmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGhvbHlHcmFpbC5jbGFzc0xpc3QuYWRkKCdob2x5LWdyYWlsJyk7XG5cbiAgLy8gVG9wIGJhclxuXG4gIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHRvcEJhci5jbGFzc0xpc3QuYWRkKCd0b3AtYmFyJyk7XG5cbiAgdG9wQmFyLnRleHRDb250ZW50ID0gJ1RvZG8gYXBwJztcblxuICAvLyBTaWRlIGJhclxuXG4gIC8vIFByb2plY3RzIHRpdGxlXG5cbiAgY29uc3QgcHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHByb2plY3RzVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtdGl0bGUnKTtcblxuICBwcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcblxuICAvLyBQcm9qZWN0cyBib2R5XG5cbiAgLy8gQWRkIHByb2plY3RcblxuICBjb25zdCBhZGRQcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gIGFkZFByb2plY3RJY29uLnNldEF0dHJpYnV0ZShcbiAgICAnc3JjJyxcbiAgICAnLi4vc3JjL3N2Zy9hZGRfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJ1xuICApO1xuXG4gIGFkZFByb2plY3RJY29uLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0FkZCB0YXNrIGljb24nKTtcblxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdCcpO1xuXG4gIGFkZFByb2plY3RCdG4uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEljb24pO1xuXG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZGVmYXVsdFByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICdzZWxlY3RlZC1wcm9qZWN0Jyk7XG5cbiAgZGVmYXVsdFByb2plY3QudGV4dENvbnRlbnQgPSAnTXkgdGFza3MnO1xuXG4gIGNvbnN0IHByb2plY3RzQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHByb2plY3RzQm9keS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1ib2R5Jyk7XG5cbiAgcHJvamVjdHNCb2R5LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuICBwcm9qZWN0c0JvZHkuYXBwZW5kQ2hpbGQoZGVmYXVsdFByb2plY3QpO1xuXG4gIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtYmFyJyk7XG5cbiAgc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcbiAgc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0JvZHkpO1xuXG4gIC8vIE1haW4gY29udGVudFxuXG4gIC8vIEFkZCB0YXNrXG5cbiAgY29uc3QgYWRkVGFza0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICBhZGRUYXNrSWNvbi5zZXRBdHRyaWJ1dGUoXG4gICAgJ3NyYycsXG4gICAgJy4uL3NyYy9zdmcvYWRkX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2ZydcbiAgKTtcblxuICBhZGRUYXNrSWNvbi5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdBZGQgdGFzayBpY29uJyk7XG5cbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcblxuICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZFRhc2tJY29uKTtcblxuICBsZXQgdGFza3MgPSBbXTtcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgYWRkVGFzayh0YXNrcyk7XG4gIH0pO1xuXG4gIC8vIFNlbGVjdGVkIHByb2plY3QgZGlzcGxheVxuXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBzZWxlY3RlZFByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXByb2plY3QtZGlzcGxheScpO1xuXG4gIHNlbGVjdGVkUHJvamVjdERpc3BsYXkudGV4dENvbnRlbnQgPSBkZWZhdWx0UHJvamVjdC50ZXh0Q29udGVudDtcblxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHNlbGVjdGVkUHJvamVjdERpc3BsYXkpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcblxuICAvLyBBcHBlbmQgdG8gaG9seSBncmFpbFxuXG4gIGhvbHlHcmFpbC5hcHBlbmRDaGlsZChzaWRlQmFyKTtcbiAgaG9seUdyYWlsLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbiAgaG9seUdyYWlsLmFwcGVuZENoaWxkKHRvcEJhcik7XG5cbiAgLy8gQXBwZW5kIHRvIGNvbnRhaW5lclxuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob2x5R3JhaWwpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdGlhbCB9IGZyb20gJy4vcGFnZXMvaW5pdGlhbCc7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5pbml0aWFsKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=