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
___CSS_LOADER_EXPORT___.push([module.id, "/* Color palette */\n/* Fonts */\n@font-face {\n  font-family: Nunito;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 500;\n  font-style: normal;\n}\n/* Mixins */\n/* Styles */\nhtml,\nbody,\n.container {\n  margin: 0;\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n  font-family: \"Nunito\";\n  font-size: 24px;\n  font-size: min(4vmin, 2.8vmax);\n}\n\n.holy-grail {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 10% 90%;\n  grid-template-columns: 20% 80%;\n}\n.holy-grail > * {\n  padding: 8px;\n}\n.holy-grail > .top-bar {\n  background-color: #14b8a6;\n  color: #ccfbf1;\n  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.8);\n  font-weight: 600;\n  font-size: 38px;\n  font-size: min(7vmin, 5vmax);\n  grid-row: 1/span 1;\n  grid-column: 1/span 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.holy-grail > .side-bar {\n  background-color: #115e59;\n  color: #ccfbf1;\n  grid-row: 2/span 1;\n  grid-column: 1/span 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.holy-grail > .main-content {\n  background-color: #f0fdfa;\n  overflow: auto;\n  grid-row: 2/span 1;\n  grid-column: 2/span 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.tasks-clipart {\n  width: clamp(120px, 30%, 220px);\n  height: auto;\n}\n\n.project {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 2%;\n  margin-right: 5px;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n  background-color: #14b8a6;\n}\n.project:hover {\n  background-color: rgba(240, 253, 250, 0.6);\n  color: black;\n  cursor: pointer;\n}\n.project:active {\n  box-shadow: none;\n}\n\n.add-project {\n  justify-self: center;\n  width: clamp(24px, 5vmin, 48px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.add-project:hover {\n  cursor: pointer;\n}\n.add-project img {\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background-color: #99f6e4;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n}\n.add-project img:active {\n  box-shadow: none;\n}\n\n.deactivated img {\n  background-color: gray;\n  box-shadow: none;\n}\n\n.projects-title {\n  font-weight: 600;\n}\n\n.projects-body {\n  white-space: nowrap;\n  overflow-x: hidden;\n  overflow-y: overlay;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: max-content;\n  grid-auto-rows: max-content;\n  gap: 8px;\n}\n\n.selected-project {\n  background-color: rgba(240, 253, 250, 0.9);\n  color: black;\n}\n.selected-project:hover {\n  background-color: rgba(240, 253, 250, 0.9);\n}\n\n.selected-project-display {\n  font-weight: 600;\n}\n\n.add-task {\n  width: clamp(20px, 4vmax, 44px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.add-task:hover {\n  cursor: pointer;\n}\n.add-task:hover {\n  cursor: pointer;\n}\n.add-task img {\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background-color: #99f6e4;\n  box-shadow: 5px 5px 5px gray;\n}\n.add-task img:active {\n  box-shadow: none;\n}\n\n.task {\n  width: 100%;\n  height: 10vh;\n  min-height: 140px;\n  background-color: rgba(128, 128, 128, 0.2);\n  border-radius: 5px;\n  display: grid;\n  grid-template-rows: 1fr min(4vmax, 50px);\n  grid-template-columns: 1fr min(max(34px, 4vmax), 104px);\n}\n.task > * {\n  padding: 8px;\n}\n.task .task-title {\n  color: #115e59;\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n  overflow: auto;\n  grid-row: 1/span 1;\n  grid-column: 1/span 1;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.task .task-title > input {\n  width: 80%;\n  height: 60%;\n  font-size: min(4vmin, 2.8vmax);\n}\n.task .task-complete {\n  color: gray;\n  text-decoration-line: line-through;\n}\n.task .task-edit {\n  padding: 4px;\n  padding-right: 8px;\n  grid-row: 1/span 2;\n  grid-column: 2/span 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task .task-edit > button {\n  width: clamp(20px, 4vmax, 44px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background-color: #d97706;\n  border-radius: 10px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task .task-edit > button:hover {\n  cursor: pointer;\n}\n.task .task-edit > button:active {\n  box-shadow: none;\n}\n.task .task-edit > button > img {\n  width: 90%;\n  height: 90%;\n}\n.task .task-action {\n  padding: 0;\n  grid-row: 2/span 1;\n  grid-column: 1/span 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task .task-action > button {\n  width: clamp(20px, 4vmax, 44px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background-color: #14b8a6;\n  margin-bottom: 8px;\n  height: auto;\n  border-radius: 10px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task .task-action > button:hover {\n  cursor: pointer;\n}\n.task .task-action > button:active {\n  box-shadow: none;\n}\n.task .task-action > button > img {\n  width: 90%;\n  height: 90%;\n}\n.task .task-action > button.task-delete {\n  width: clamp(20px, 4vmax, 44px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background-color: tomato;\n  margin-bottom: 8px;\n  height: auto;\n  border-radius: 10px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task .task-action > button.task-delete:hover {\n  cursor: pointer;\n}\n.task .task-action > button.task-delete:active {\n  box-shadow: none;\n}\n.task .task-action > button.task-delete > img {\n  width: 90%;\n  height: 90%;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["/* Color palette */\n\n$teal-50: #f0fdfa;\n$teal-100: #ccfbf1;\n$teal-200: #99f6e4;\n$teal-500: #14b8a6;\n$teal-800: #115e59;\n\n$amber-600: #d97706;\n\n$top-bar-bg: $teal-500;\n$side-bar-bg: $teal-800;\n$main-content-bg: $teal-50;\n\n$edit-task-btn: $amber-600;\n$action-task-btn: $teal-500;\n$delete-task-btn: tomato;\n\n/* Fonts */\n\n@font-face {\n  font-family: Nunito;\n  src: url(./fonts/Nunito-Regular.ttf);\n  font-weight: 500;\n  font-style: normal;\n}\n\n/* Mixins */\n\n@mixin circular-btn {\n  width: clamp(20px, 4vmax, 44px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n/* Styles */\n\nhtml,\nbody,\n.container {\n  margin: 0;\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n\n  font-family: 'Nunito';\n  font-size: 24px;\n  font-size: min(4vmin, 2.8vmax);\n}\n\n.holy-grail {\n  height: 100%;\n\n  display: grid;\n  grid-template-rows: 10% 90%;\n  grid-template-columns: 20% 80%;\n\n  & > * {\n    padding: 8px;\n  }\n\n  & > .top-bar {\n    background-color: $top-bar-bg;\n    color: $teal-100;\n    text-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.8);\n    font-weight: 600;\n    font-size: 38px;\n    font-size: min(7vmin, 5vmax);\n\n    grid-row: 1 / span 1;\n    grid-column: 1 / span 2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  & > .side-bar {\n    background-color: $teal-800;\n    color: $teal-100;\n\n    grid-row: 2 / span 1;\n    grid-column: 1 / span 1;\n\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  & > .main-content {\n    background-color: $main-content-bg;\n    overflow: auto;\n\n    grid-row: 2 / span 1;\n    grid-column: 2 / span 1;\n\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    justify-content: flex-start;\n    align-items: center;\n  }\n}\n\n.tasks-clipart {\n  width: clamp(120px, 30%, 220px);\n  height: auto;\n}\n\n.project {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 2%;\n  margin-right: 5px;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.5);\n  background-color: $teal-500;\n\n  &:hover {\n    background-color: rgba($color: $teal-50, $alpha: 0.6);\n    color: black;\n    cursor: pointer;\n  }\n\n  &:active {\n    box-shadow: none;\n  }\n}\n\n.add-project {\n  justify-self: center;\n  width: clamp(24px, 5vmin, 48px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  img {\n    width: 100%;\n    aspect-ratio: 1;\n    border-radius: 50%;\n    background-color: $teal-200;\n    box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.5);\n\n    &:active {\n      box-shadow: none;\n    }\n  }\n}\n\n.deactivated {\n  img {\n    background-color: gray;\n    box-shadow: none;\n  }\n}\n\n.projects-title {\n  font-weight: 600;\n}\n\n.projects-body {\n  white-space: nowrap;\n  overflow-x: hidden;\n  overflow-y: overlay;\n  width: 100%;\n  height: 100%;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: max-content;\n  grid-auto-rows: max-content;\n  gap: 8px;\n}\n\n.selected-project {\n  background-color: rgba($color: $teal-50, $alpha: 0.9);\n  color: black;\n\n  &:hover {\n    background-color: rgba($color: $teal-50, $alpha: 0.9);\n  }\n}\n\n.selected-project-display {\n  font-weight: 600;\n}\n\n.add-task {\n  @include circular-btn();\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  img {\n    width: 100%;\n    aspect-ratio: 1;\n    border-radius: 50%;\n    background-color: $teal-200;\n    box-shadow: 5px 5px 5px gray;\n\n    &:active {\n      box-shadow: none;\n    }\n  }\n}\n\n.task {\n  width: 100%;\n  height: 10vh;\n  min-height: 140px;\n  background-color: rgba($color: gray, $alpha: 0.2);\n  border-radius: 5px;\n\n  display: grid;\n  grid-template-rows: 1fr min(4vmax, 50px);\n  grid-template-columns: 1fr min(max(34px, 4vmax), 104px);\n\n  & > * {\n    padding: 8px;\n  }\n\n  .task-title {\n    color: $teal-800;\n    word-wrap: break-word;\n    text-overflow: ellipsis;\n    overflow: auto;\n\n    grid-row: 1 / span 1;\n    grid-column: 1 / span 1;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    & > input {\n      width: 80%;\n      height: 60%;\n      font-size: min(4vmin, 2.8vmax);\n    }\n  }\n\n  .task-complete {\n    color: gray;\n    text-decoration-line: line-through;\n  }\n\n  .task-edit {\n    padding: 4px;\n    padding-right: 8px;\n\n    grid-row: 1 / span 2;\n    grid-column: 2 / span 1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    & > button {\n      @include circular-btn();\n\n      background-color: $edit-task-btn;\n      border-radius: 10px;\n      box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.25);\n\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      &:active {\n        box-shadow: none;\n      }\n\n      & > img {\n        width: 90%;\n        height: 90%;\n      }\n    }\n  }\n\n  .task-action {\n    padding: 0;\n\n    grid-row: 2 / span 1;\n    grid-column: 1 / span 2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    & > button {\n      @include circular-btn();\n\n      background-color: $action-task-btn;\n      margin-bottom: 8px;\n      height: auto;\n      border-radius: 10px;\n      box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.25);\n\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      &:active {\n        box-shadow: none;\n      }\n\n      & > img {\n        width: 90%;\n        height: 90%;\n      }\n    }\n\n    & > button.task-delete {\n      @include circular-btn();\n\n      background-color: $delete-task-btn;\n      margin-bottom: 8px;\n      height: auto;\n      border-radius: 10px;\n      box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.25);\n\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      &:active {\n        box-shadow: none;\n      }\n\n      & > img {\n        width: 90%;\n        height: 90%;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/init/addProjectBtn.js":
/*!***********************************!*\
  !*** ./src/init/addProjectBtn.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAddProjectBtn": () => (/* binding */ createAddProjectBtn)
/* harmony export */ });
/* harmony import */ var _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/projectManager */ "./src/projects/projectManager.js");
/* harmony import */ var _svg_add_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/add_FILL0_wght400_GRAD0_opsz48.svg */ "./src/svg/add_FILL0_wght400_GRAD0_opsz48.svg");



function createAddProjectBtn() {
  const img = document.createElement('img');
  img.setAttribute('src', _svg_add_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__);
  img.setAttribute('alt', 'Create project');

  const button = document.createElement('button');
  button.classList.add('add-project');

  button.appendChild(img);

  // Handle project creation
  button.addEventListener('click', (e) => {
    _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.projectCreationManager();
  });

  return button;
}




/***/ }),

/***/ "./src/init/initial.js":
/*!*****************************!*\
  !*** ./src/init/initial.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializePage": () => (/* binding */ initializePage)
/* harmony export */ });
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContent */ "./src/init/mainContent.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/init/sidebar.js");
/* harmony import */ var _topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topbar */ "./src/init/topbar.js");




function initializePage() {
  const holyGrail = document.createElement('div');
  holyGrail.classList.add('holy-grail');

  holyGrail.appendChild((0,_topbar__WEBPACK_IMPORTED_MODULE_2__.createTopBar)());
  holyGrail.appendChild((0,_mainContent__WEBPACK_IMPORTED_MODULE_0__.createMainContent)());
  holyGrail.appendChild((0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.createSideBar)());

  const container = document.querySelector('.container');
  container.appendChild(holyGrail);
}




/***/ }),

/***/ "./src/init/mainContent.js":
/*!*********************************!*\
  !*** ./src/init/mainContent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMainContent": () => (/* binding */ createMainContent)
/* harmony export */ });
/* harmony import */ var _svg_clipboard_check_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg/clipboard-check.svg */ "./src/svg/clipboard-check.svg");


function createMainContent() {
  const main = document.createElement('div');
  main.classList.add('main-content');

  const text = document.createElement('d');
  text.textContent = 'To get started, create a new project';
  main.appendChild(text);

  const img = document.createElement('img');
  img.classList.add('tasks-clipart');
  img.setAttribute('src', _svg_clipboard_check_svg__WEBPACK_IMPORTED_MODULE_0__);
  img.setAttribute('alt', 'Tasks clipart');
  main.appendChild(img);

  return main;
}




/***/ }),

/***/ "./src/init/sidebar.js":
/*!*****************************!*\
  !*** ./src/init/sidebar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSideBar": () => (/* binding */ createSideBar)
/* harmony export */ });
/* harmony import */ var _addProjectBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProjectBtn */ "./src/init/addProjectBtn.js");


function createSideBar() {
  // Side-bar text
  const text = document.createElement('div');
  text.classList.add('projects-title');
  text.textContent = 'Projects';

  // Create button to add projects
  const addProject = (0,_addProjectBtn__WEBPACK_IMPORTED_MODULE_0__.createAddProjectBtn)();

  const projectsBody = document.createElement('div');
  projectsBody.classList.add('projects-body');

  projectsBody.appendChild(addProject);

  const sideBar = document.createElement('div');
  sideBar.classList.add('side-bar');

  sideBar.appendChild(text);
  sideBar.appendChild(projectsBody);

  return sideBar;
}




/***/ }),

/***/ "./src/init/topbar.js":
/*!****************************!*\
  !*** ./src/init/topbar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTopBar": () => (/* binding */ createTopBar)
/* harmony export */ });
function createTopBar() {
  const title = document.createElement('div');
  title.classList.add('top-bar');
  title.textContent = 'Todo app';

  return title;
}




/***/ }),

/***/ "./src/projects/project.js":
/*!*********************************!*\
  !*** ./src/projects/project.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory)
/* harmony export */ });
const projectFactory = (name) => {
  const taskArr = [];
  let projectName = name ? name : 'New project';

  function addTask(task) {
    taskArr.push(task);
  }

  function removeTask(task) {
    const index = taskArr.findIndex((element) => element === task);
    taskArr.splice(index, 1);
  }

  // For testing
  function logTasks() {
    console.table(taskArr);
  }

  return {
    projectName,
    addTask,
    removeTask,
    logTasks,
  };
};




/***/ }),

/***/ "./src/projects/projectEditApply.js":
/*!******************************************!*\
  !*** ./src/projects/projectEditApply.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectEditApply": () => (/* binding */ projectEditApply)
/* harmony export */ });
/* harmony import */ var _view_displayManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/displayManager */ "./src/view/displayManager.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/projects/project.js");
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager */ "./src/projects/projectManager.js");




// Changes the project's name
function projectEditApply() {
  //   console.log('apply changes to project');
  const input = document.querySelector('.task-title > input');
  // Get name from input field
  const projectName = input.value;

  // Check for empty name
  if (projectName === '') {
    alert('Project name cannot be empty.');
    return;
  }

  // Check for duplicate project names
  let projectExists = _projectManager__WEBPACK_IMPORTED_MODULE_2__.projectManager.checkDuplicateName(projectName);

  // console.log(`projectExists: ${projectExists}`);
  if (projectExists) {
    alert('Project name already exists. Cannot have duplicate names');
    return;
  }

  // Create project
  const project = (0,_project__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(projectName);

  _projectManager__WEBPACK_IMPORTED_MODULE_2__.projectManager.addProject(project);
  // projectManager.logProjects();

  _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.clearMainContent();
  _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.updateProjectList();

  _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.toggleAddProjectBtn();
}




/***/ }),

/***/ "./src/projects/projectManager.js":
/*!****************************************!*\
  !*** ./src/projects/projectManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectManager": () => (/* binding */ projectManager)
/* harmony export */ });
/* harmony import */ var _view_displayManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/displayManager */ "./src/view/displayManager.js");


const projectManager = (() => {
  const projectArr = [];

  // Keep a reference to the selected project index, null = no project selected
  let selectedProject = null;

  function addProject(project) {
    projectArr.push(project);
    selectedProject = projectArr.length - 1;
    // console.log('selected project index', selectedProject);
  }

  function removeProject(project) {
    const index = projectArr.findIndex((element) => element === project);
    projectArr.splice(index, 1);
  }

  function getProjects() {
    return [...projectArr];
  }

  // For testing
  function logProjects() {
    console.table(projectArr);
  }

  function projectCreationManager() {
    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.clearMainContent();
    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.toggleAddProjectBtn();
    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.showEditDialog();
    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.selectProjectInput();
  }

  // Return true if name already exists
  function checkDuplicateName(nameToCheck) {
    let isDuplicate = false;

    projectArr.forEach((project) => {
      if (project.projectName === nameToCheck) {
        isDuplicate = true;
      }
    });

    return isDuplicate;
  }

  function getSelectedProject() {
    return selectedProject;
  }

  function setSelectedProject(int) {
    selectedProject = int;
  }

  return {
    getSelectedProject,
    setSelectedProject,
    addProject,
    removeProject,
    getProjects,
    logProjects, // For testing
    projectCreationManager,
    checkDuplicateName,
  };
})();




/***/ }),

/***/ "./src/view/clearMainContent.js":
/*!**************************************!*\
  !*** ./src/view/clearMainContent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearMainContent": () => (/* binding */ clearMainContent)
/* harmony export */ });
function clearMainContent() {
  const main = document.querySelector('.main-content');
  [...main.childNodes].forEach((child) => main.removeChild(child));
}




/***/ }),

/***/ "./src/view/displayManager.js":
/*!************************************!*\
  !*** ./src/view/displayManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayManager": () => (/* binding */ displayManager)
/* harmony export */ });
/* harmony import */ var _clearMainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearMainContent */ "./src/view/clearMainContent.js");
/* harmony import */ var _projectEditDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectEditDialog */ "./src/view/projectEditDialog.js");
/* harmony import */ var _selectProjectInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectProjectInput */ "./src/view/selectProjectInput.js");
/* harmony import */ var _updateProjectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateProjectList */ "./src/view/updateProjectList.js");





const displayManager = (() => {
  function showEditDialog() {
    const main = document.querySelector('.main-content');
    main.appendChild(displayManager.projectEditDialog('New project'));
  }

  function toggleAddProjectBtn() {
    const addProject = document.querySelector('.add-project');
    addProject.disabled = !addProject.disabled;
    addProject.classList.toggle('deactivated');
  }

  return {
    showEditDialog,
    toggleAddProjectBtn,
    projectEditDialog: _projectEditDialog__WEBPACK_IMPORTED_MODULE_1__.projectEditDialog,
    clearMainContent: _clearMainContent__WEBPACK_IMPORTED_MODULE_0__.clearMainContent,
    selectProjectInput: _selectProjectInput__WEBPACK_IMPORTED_MODULE_2__.selectProjectInput,
    updateProjectList: _updateProjectList__WEBPACK_IMPORTED_MODULE_3__.updateProjectList,
  };
})();




/***/ }),

/***/ "./src/view/projectEditDialog.js":
/*!***************************************!*\
  !*** ./src/view/projectEditDialog.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectEditDialog": () => (/* binding */ projectEditDialog)
/* harmony export */ });
/* harmony import */ var _projects_projectEditApply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/projectEditApply */ "./src/projects/projectEditApply.js");
/* harmony import */ var _svg_delete_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/delete_FILL0_wght400_GRAD0_opsz48.svg */ "./src/svg/delete_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _svg_done_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/done_FILL0_wght400_GRAD0_opsz48.svg */ "./src/svg/done_FILL0_wght400_GRAD0_opsz48.svg");




function projectEditDialog(projectName) {
  // Use already made CSS for task dialog to create/edit projects

  // The dialog container

  const div = document.createElement('div');
  div.classList.add('task');

  // Input field

  const input = document.createElement('input');

  input.value = projectName;

  const title = document.createElement('div');
  title.classList.add('task-title');
  title.appendChild(input);

  div.appendChild(title);

  // Apply changes button

  const editImg = document.createElement('img');
  editImg.setAttribute('src', _svg_done_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__);
  editImg.setAttribute('alt', 'Apply changes');

  const editBtn = document.createElement('button');
  editBtn.appendChild(editImg);

  function applyChanges() {
    (0,_projects_projectEditApply__WEBPACK_IMPORTED_MODULE_0__.projectEditApply)();
  }

  editBtn.addEventListener('click', (e) => {
    applyChanges();
  });

  const edit = document.createElement('div');
  edit.classList.add('task-edit');
  edit.appendChild(editBtn);

  div.appendChild(edit);

  // Delete button

  const deleteImg = document.createElement('img');
  deleteImg.setAttribute('src', _svg_delete_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__);
  deleteImg.setAttribute('alt', 'Delete project');

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('task-delete');
  deleteBtn.appendChild(deleteImg);

  function deleteProject() {
    console.log('Delete project');
    // TODO: implement
  }

  deleteBtn.addEventListener('click', (e) => {
    deleteProject();
  });

  const action = document.createElement('div');
  action.classList.add('task-action');
  action.appendChild(deleteBtn);

  div.appendChild(action);

  return div;
}




/***/ }),

/***/ "./src/view/selectProjectInput.js":
/*!****************************************!*\
  !*** ./src/view/selectProjectInput.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectProjectInput": () => (/* binding */ selectProjectInput)
/* harmony export */ });
function selectProjectInput() {
  const input = document.querySelector('.task-title > input');
  input.select();
}




/***/ }),

/***/ "./src/view/updateProjectList.js":
/*!***************************************!*\
  !*** ./src/view/updateProjectList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateProjectList": () => (/* binding */ updateProjectList)
/* harmony export */ });
/* harmony import */ var _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/projectManager */ "./src/projects/projectManager.js");


function updateProjectList() {
  const projectsBody = document.querySelector('.projects-body');

  // Clear existing projects before appending the ones in the list
  [...projectsBody.childNodes].forEach((child) => {
    if (child.classList.contains('project')) {
      projectsBody.removeChild(child);
    }
  });

  // null = no projects in list
  if (_projects_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getSelectedProject !== null) {
    // Append existing projects to the project list
    _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getProjects().forEach((project) => {
      const div = document.createElement('div');
      div.classList.add('project');
      div.textContent = project.projectName;
      // TODO: add event listeners to change displayed project on click
      div.addEventListener('click', (e) => {
        // Find index of the clicked project
        // Use name as a unique id
        const projects = _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getProjects();
        let clickedIndex;
        projects.forEach((project) => {
          if (project.projectName === e.target.textContent) {
            clickedIndex = projects.findIndex((element) => element === project);
          }
        });

        _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.setSelectedProject(clickedIndex);
        updateProjectList();
      });

      projectsBody.appendChild(div);
    });

    // Update selected project class
    const projectList = [...projectsBody.querySelectorAll('.project')];
    projectList[_projects_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getSelectedProject()].classList.add(
      'selected-project'
    );
  }
}




/***/ }),

/***/ "./src/fonts/Nunito-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Nunito-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99a3b019e7727ac19479.ttf";

/***/ }),

/***/ "./src/svg/add_FILL0_wght400_GRAD0_opsz48.svg":
/*!****************************************************!*\
  !*** ./src/svg/add_FILL0_wght400_GRAD0_opsz48.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46ae0e09d1132337aa92.svg";

/***/ }),

/***/ "./src/svg/clipboard-check.svg":
/*!*************************************!*\
  !*** ./src/svg/clipboard-check.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c5a5cce32b610f222d9.svg";

/***/ }),

/***/ "./src/svg/delete_FILL0_wght400_GRAD0_opsz48.svg":
/*!*******************************************************!*\
  !*** ./src/svg/delete_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3270f2c93c8c138fa6cc.svg";

/***/ }),

/***/ "./src/svg/done_FILL0_wght400_GRAD0_opsz48.svg":
/*!*****************************************************!*\
  !*** ./src/svg/done_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa0a208ac7ceea63d93e.svg";

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
/* harmony import */ var _init_initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init/initial */ "./src/init/initial.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");



(0,_init_initial__WEBPACK_IMPORTED_MODULE_0__.initializePage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RVQsUUFBUSx1RkFBaUM7QUFDekM7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLHVGQUFpQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlDN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQ3pCOztBQUV2Qiw2REFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5pdC9hZGRQcm9qZWN0QnRuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbml0L2luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luaXQvbWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luaXQvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5pdC90b3BiYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzL3Byb2plY3RFZGl0QXBwbHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L2NsZWFyTWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvZGlzcGxheU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvcHJvamVjdEVkaXREaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvc2VsZWN0UHJvamVjdElucHV0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3VwZGF0ZVByb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL051bml0by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIENvbG9yIHBhbGV0dGUgKi9cXG4vKiBGb250cyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE51bml0bztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi8qIE1peGlucyAqL1xcbi8qIFN0eWxlcyAqL1xcbmh0bWwsXFxuYm9keSxcXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1zaXplOiBtaW4oNHZtaW4sIDIuOHZtYXgpO1xcbn1cXG5cXG4uaG9seS1ncmFpbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgOTAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xcbn1cXG4uaG9seS1ncmFpbCA+ICoge1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG4uaG9seS1ncmFpbCA+IC50b3AtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNGI4YTY7XFxuICBjb2xvcjogI2NjZmJmMTtcXG4gIHRleHQtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAzOHB4O1xcbiAgZm9udC1zaXplOiBtaW4oN3ZtaW4sIDV2bWF4KTtcXG4gIGdyaWQtcm93OiAxL3NwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ob2x5LWdyYWlsID4gLnNpZGUtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTVlNTk7XFxuICBjb2xvcjogI2NjZmJmMTtcXG4gIGdyaWQtcm93OiAyL3NwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxufVxcbi5ob2x5LWdyYWlsID4gLm1haW4tY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZGZhO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBncmlkLXJvdzogMi9zcGFuIDE7XFxuICBncmlkLWNvbHVtbjogMi9zcGFuIDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tzLWNsaXBhcnQge1xcbiAgd2lkdGg6IGNsYW1wKDEyMHB4LCAzMCUsIDIyMHB4KTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHBhZGRpbmc6IDIlO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRiOGE2O1xcbn1cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjUzLCAyNTAsIDAuNik7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9qZWN0OmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogY2xhbXAoMjRweCwgNXZtaW4sIDQ4cHgpO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZGQtcHJvamVjdCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTlmNmU0O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4uYWRkLXByb2plY3QgaW1nOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uZGVhY3RpdmF0ZWQgaW1nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdHMtdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnByb2plY3RzLWJvZHkge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IG92ZXJsYXk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQ7XFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnNlbGVjdGVkLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI1MywgMjUwLCAwLjkpO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uc2VsZWN0ZWQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjUzLCAyNTAsIDAuOSk7XFxufVxcblxcbi5zZWxlY3RlZC1wcm9qZWN0LWRpc3BsYXkge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gIHdpZHRoOiBjbGFtcCgyMHB4LCA0dm1heCwgNDRweCk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkZC10YXNrIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OWY2ZTQ7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBncmF5O1xcbn1cXG4uYWRkLXRhc2sgaW1nOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4udGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbig0dm1heCwgNTBweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW4obWF4KDM0cHgsIDR2bWF4KSwgMTA0cHgpO1xcbn1cXG4udGFzayA+ICoge1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG4udGFzayAudGFzay10aXRsZSB7XFxuICBjb2xvcjogIzExNWU1OTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBncmlkLXJvdzogMS9zcGFuIDE7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2sgLnRhc2stdGl0bGUgPiBpbnB1dCB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBmb250LXNpemU6IG1pbig0dm1pbiwgMi44dm1heCk7XFxufVxcbi50YXNrIC50YXNrLWNvbXBsZXRlIHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDtcXG59XFxuLnRhc2sgLnRhc2stZWRpdCB7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxuICBncmlkLXJvdzogMS9zcGFuIDI7XFxuICBncmlkLWNvbHVtbjogMi9zcGFuIDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzayAudGFzay1lZGl0ID4gYnV0dG9uIHtcXG4gIHdpZHRoOiBjbGFtcCgyMHB4LCA0dm1heCwgNDRweCk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NzcwNjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2sgLnRhc2stZWRpdCA+IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrIC50YXNrLWVkaXQgPiBidXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi50YXNrIC50YXNrLWVkaXQgPiBidXR0b24gPiBpbWcge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG4udGFzayAudGFzay1hY3Rpb24ge1xcbiAgcGFkZGluZzogMDtcXG4gIGdyaWQtcm93OiAyL3NwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrIC50YXNrLWFjdGlvbiA+IGJ1dHRvbiB7XFxuICB3aWR0aDogY2xhbXAoMjBweCwgNHZtYXgsIDQ0cHgpO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNGI4YTY7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrIC50YXNrLWFjdGlvbiA+IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrIC50YXNrLWFjdGlvbiA+IGJ1dHRvbjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnRhc2sgLnRhc2stYWN0aW9uID4gYnV0dG9uID4gaW1nIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG59XFxuLnRhc2sgLnRhc2stYWN0aW9uID4gYnV0dG9uLnRhc2stZGVsZXRlIHtcXG4gIHdpZHRoOiBjbGFtcCgyMHB4LCA0dm1heCwgNDRweCk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzayAudGFzay1hY3Rpb24gPiBidXR0b24udGFzay1kZWxldGU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzayAudGFzay1hY3Rpb24gPiBidXR0b24udGFzay1kZWxldGU6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi50YXNrIC50YXNrLWFjdGlvbiA+IGJ1dHRvbi50YXNrLWRlbGV0ZSA+IGltZyB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBQTtBQWtCQSxVQUFBO0FBRUE7RUFDRSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxr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LGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBNURKO0FBOERJO0VBeFBGLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUF1UEkseUJBalJNO0VBa1JOLG1CQUFBO0VBQ0EsMkNBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTFETjtBQWpNRTtFQUNFLGVBQUE7QUFtTUo7QUF5RE07RUFDRSxnQkFBQTtBQXZEUjtBQTBETTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBeERSO0FBNkRFO0VBQ0UsVUFBQTtFQUVBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTdESjtBQStESTtFQXhSRiwrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBdVJJLHlCQXBUSztFQXFUTCxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUEzRE47QUFsT0U7RUFDRSxlQUFBO0FBb09KO0FBMERNO0VBQ0UsZ0JBQUE7QUF4RFI7QUEyRE07RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQXpEUjtBQTZESTtFQS9TRiwrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBOFNJLHdCQWhVWTtFQWlVWixrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF6RE47QUEzUEU7RUFDRSxlQUFBO0FBNlBKO0FBd0RNO0VBQ0UsZ0JBQUE7QUF0RFI7QUF5RE07RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQXZEUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDb2xvciBwYWxldHRlICovXFxuXFxuJHRlYWwtNTA6ICNmMGZkZmE7XFxuJHRlYWwtMTAwOiAjY2NmYmYxO1xcbiR0ZWFsLTIwMDogIzk5ZjZlNDtcXG4kdGVhbC01MDA6ICMxNGI4YTY7XFxuJHRlYWwtODAwOiAjMTE1ZTU5O1xcblxcbiRhbWJlci02MDA6ICNkOTc3MDY7XFxuXFxuJHRvcC1iYXItYmc6ICR0ZWFsLTUwMDtcXG4kc2lkZS1iYXItYmc6ICR0ZWFsLTgwMDtcXG4kbWFpbi1jb250ZW50LWJnOiAkdGVhbC01MDtcXG5cXG4kZWRpdC10YXNrLWJ0bjogJGFtYmVyLTYwMDtcXG4kYWN0aW9uLXRhc2stYnRuOiAkdGVhbC01MDA7XFxuJGRlbGV0ZS10YXNrLWJ0bjogdG9tYXRvO1xcblxcbi8qIEZvbnRzICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTnVuaXRvO1xcbiAgc3JjOiB1cmwoLi9mb250cy9OdW5pdG8tUmVndWxhci50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyogTWl4aW5zICovXFxuXFxuQG1peGluIGNpcmN1bGFyLWJ0biB7XFxuICB3aWR0aDogY2xhbXAoMjBweCwgNHZtYXgsIDQ0cHgpO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblxcbi8qIFN0eWxlcyAqL1xcblxcbmh0bWwsXFxuYm9keSxcXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1zaXplOiBtaW4oNHZtaW4sIDIuOHZtYXgpO1xcbn1cXG5cXG4uaG9seS1ncmFpbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgOTAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xcblxcbiAgJiA+ICoge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICB9XFxuXFxuICAmID4gLnRvcC1iYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9wLWJhci1iZztcXG4gICAgY29sb3I6ICR0ZWFsLTEwMDtcXG4gICAgdGV4dC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjgpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIGZvbnQtc2l6ZTogbWluKDd2bWluLCA1dm1heCk7XFxuXFxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAmID4gLnNpZGUtYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWwtODAwO1xcbiAgICBjb2xvcjogJHRlYWwtMTAwO1xcblxcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbiAgfVxcblxcbiAgJiA+IC5tYWluLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb250ZW50LWJnO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAgZ3JpZC1yb3c6IDIgLyBzcGFuIDE7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4udGFza3MtY2xpcGFydCB7XFxuICB3aWR0aDogY2xhbXAoMTIwcHgsIDMwJSwgMjIwcHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgcGFkZGluZzogMiU7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWwtNTAwO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkdGVhbC01MCwgJGFscGhhOiAwLjYpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gICY6YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IGNsYW1wKDI0cHgsIDV2bWluLCA0OHB4KTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWwtMjAwO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKCRjb2xvcjogYmxhY2ssICRhbHBoYTogMC41KTtcXG5cXG4gICAgJjphY3RpdmUge1xcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmRlYWN0aXZhdGVkIHtcXG4gIGltZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICB9XFxufVxcblxcbi5wcm9qZWN0cy10aXRsZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucHJvamVjdHMtYm9keSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogb3ZlcmxheTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudDtcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJHRlYWwtNTAsICRhbHBoYTogMC45KTtcXG4gIGNvbG9yOiBibGFjaztcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJHRlYWwtNTAsICRhbHBoYTogMC45KTtcXG4gIH1cXG59XFxuXFxuLnNlbGVjdGVkLXByb2plY3QtZGlzcGxheSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgQGluY2x1ZGUgY2lyY3VsYXItYnRuKCk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWwtMjAwO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBncmF5O1xcblxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4udGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IGdyYXksICRhbHBoYTogMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4oNHZtYXgsIDUwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluKG1heCgzNHB4LCA0dm1heCksIDEwNHB4KTtcXG5cXG4gICYgPiAqIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgfVxcblxcbiAgLnRhc2stdGl0bGUge1xcbiAgICBjb2xvcjogJHRlYWwtODAwO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICYgPiBpbnB1dCB7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBoZWlnaHQ6IDYwJTtcXG4gICAgICBmb250LXNpemU6IG1pbig0dm1pbiwgMi44dm1heCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50YXNrLWNvbXBsZXRlIHtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XFxuICB9XFxuXFxuICAudGFzay1lZGl0IHtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxuXFxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICYgPiBidXR0b24ge1xcbiAgICAgIEBpbmNsdWRlIGNpcmN1bGFyLWJ0bigpO1xcblxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRlZGl0LXRhc2stYnRuO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuMjUpO1xcblxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAmID4gaW1nIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50YXNrLWFjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICYgPiBidXR0b24ge1xcbiAgICAgIEBpbmNsdWRlIGNpcmN1bGFyLWJ0bigpO1xcblxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY3Rpb24tdGFzay1idG47XFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjI1KTtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgJiA+IGltZyB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYgPiBidXR0b24udGFzay1kZWxldGUge1xcbiAgICAgIEBpbmNsdWRlIGNpcmN1bGFyLWJ0bigpO1xcblxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWxldGUtdGFzay1idG47XFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjI1KTtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgJiA+IGltZyB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gJy4uL3Byb2plY3RzL3Byb2plY3RNYW5hZ2VyJztcbmltcG9ydCBhZGRTVkcgZnJvbSAnLi4vc3ZnL2FkZF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVBZGRQcm9qZWN0QnRuKCkge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYWRkU1ZHKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0NyZWF0ZSBwcm9qZWN0Jyk7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdCcpO1xuXG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIC8vIEhhbmRsZSBwcm9qZWN0IGNyZWF0aW9uXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcHJvamVjdE1hbmFnZXIucHJvamVjdENyZWF0aW9uTWFuYWdlcigpO1xuICB9KTtcblxuICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgeyBjcmVhdGVBZGRQcm9qZWN0QnRuIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVNYWluQ29udGVudCB9IGZyb20gJy4vbWFpbkNvbnRlbnQnO1xuaW1wb3J0IHsgY3JlYXRlU2lkZUJhciB9IGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQgeyBjcmVhdGVUb3BCYXIgfSBmcm9tICcuL3RvcGJhcic7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVQYWdlKCkge1xuICBjb25zdCBob2x5R3JhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9seUdyYWlsLmNsYXNzTGlzdC5hZGQoJ2hvbHktZ3JhaWwnKTtcblxuICBob2x5R3JhaWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9wQmFyKCkpO1xuICBob2x5R3JhaWwuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbkNvbnRlbnQoKSk7XG4gIGhvbHlHcmFpbC5hcHBlbmRDaGlsZChjcmVhdGVTaWRlQmFyKCkpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbHlHcmFpbCk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxpemVQYWdlIH07XG4iLCJpbXBvcnQgdGFza3NTVkcgZnJvbSAnLi4vc3ZnL2NsaXBib2FyZC1jaGVjay5zdmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkJyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSAnVG8gZ2V0IHN0YXJ0ZWQsIGNyZWF0ZSBhIG5ldyBwcm9qZWN0JztcbiAgbWFpbi5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzLWNsaXBhcnQnKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgdGFza3NTVkcpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnVGFza3MgY2xpcGFydCcpO1xuICBtYWluLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1haW5Db250ZW50IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVBZGRQcm9qZWN0QnRuIH0gZnJvbSAnLi9hZGRQcm9qZWN0QnRuJztcblxuZnVuY3Rpb24gY3JlYXRlU2lkZUJhcigpIHtcbiAgLy8gU2lkZS1iYXIgdGV4dFxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRleHQuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtdGl0bGUnKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgLy8gQ3JlYXRlIGJ1dHRvbiB0byBhZGQgcHJvamVjdHNcbiAgY29uc3QgYWRkUHJvamVjdCA9IGNyZWF0ZUFkZFByb2plY3RCdG4oKTtcblxuICBjb25zdCBwcm9qZWN0c0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdHNCb2R5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWJvZHknKTtcblxuICBwcm9qZWN0c0JvZHkuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtYmFyJyk7XG5cbiAgc2lkZUJhci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0JvZHkpO1xuXG4gIHJldHVybiBzaWRlQmFyO1xufVxuXG5leHBvcnQgeyBjcmVhdGVTaWRlQmFyIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVUb3BCYXIoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvcC1iYXInKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnVG9kbyBhcHAnO1xuXG4gIHJldHVybiB0aXRsZTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9wQmFyIH07XG4iLCJjb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHRhc2tBcnIgPSBbXTtcbiAgbGV0IHByb2plY3ROYW1lID0gbmFtZSA/IG5hbWUgOiAnTmV3IHByb2plY3QnO1xuXG4gIGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICAgIHRhc2tBcnIucHVzaCh0YXNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFzaykge1xuICAgIGNvbnN0IGluZGV4ID0gdGFza0Fyci5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IHRhc2spO1xuICAgIHRhc2tBcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIC8vIEZvciB0ZXN0aW5nXG4gIGZ1bmN0aW9uIGxvZ1Rhc2tzKCkge1xuICAgIGNvbnNvbGUudGFibGUodGFza0Fycik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb2plY3ROYW1lLFxuICAgIGFkZFRhc2ssXG4gICAgcmVtb3ZlVGFzayxcbiAgICBsb2dUYXNrcyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHByb2plY3RGYWN0b3J5IH07XG4iLCJpbXBvcnQgeyBkaXNwbGF5TWFuYWdlciB9IGZyb20gJy4uL3ZpZXcvZGlzcGxheU1hbmFnZXInO1xuaW1wb3J0IHsgcHJvamVjdEZhY3RvcnkgfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tICcuL3Byb2plY3RNYW5hZ2VyJztcblxuLy8gQ2hhbmdlcyB0aGUgcHJvamVjdCdzIG5hbWVcbmZ1bmN0aW9uIHByb2plY3RFZGl0QXBwbHkoKSB7XG4gIC8vICAgY29uc29sZS5sb2coJ2FwcGx5IGNoYW5nZXMgdG8gcHJvamVjdCcpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlID4gaW5wdXQnKTtcbiAgLy8gR2V0IG5hbWUgZnJvbSBpbnB1dCBmaWVsZFxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGlucHV0LnZhbHVlO1xuXG4gIC8vIENoZWNrIGZvciBlbXB0eSBuYW1lXG4gIGlmIChwcm9qZWN0TmFtZSA9PT0gJycpIHtcbiAgICBhbGVydCgnUHJvamVjdCBuYW1lIGNhbm5vdCBiZSBlbXB0eS4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIHByb2plY3QgbmFtZXNcbiAgbGV0IHByb2plY3RFeGlzdHMgPSBwcm9qZWN0TWFuYWdlci5jaGVja0R1cGxpY2F0ZU5hbWUocHJvamVjdE5hbWUpO1xuXG4gIC8vIGNvbnNvbGUubG9nKGBwcm9qZWN0RXhpc3RzOiAke3Byb2plY3RFeGlzdHN9YCk7XG4gIGlmIChwcm9qZWN0RXhpc3RzKSB7XG4gICAgYWxlcnQoJ1Byb2plY3QgbmFtZSBhbHJlYWR5IGV4aXN0cy4gQ2Fubm90IGhhdmUgZHVwbGljYXRlIG5hbWVzJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHByb2plY3RcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lKTtcblxuICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAvLyBwcm9qZWN0TWFuYWdlci5sb2dQcm9qZWN0cygpO1xuXG4gIGRpc3BsYXlNYW5hZ2VyLmNsZWFyTWFpbkNvbnRlbnQoKTtcbiAgZGlzcGxheU1hbmFnZXIudXBkYXRlUHJvamVjdExpc3QoKTtcblxuICBkaXNwbGF5TWFuYWdlci50b2dnbGVBZGRQcm9qZWN0QnRuKCk7XG59XG5cbmV4cG9ydCB7IHByb2plY3RFZGl0QXBwbHkgfTtcbiIsImltcG9ydCB7IGRpc3BsYXlNYW5hZ2VyIH0gZnJvbSAnLi4vdmlldy9kaXNwbGF5TWFuYWdlcic7XG5cbmNvbnN0IHByb2plY3RNYW5hZ2VyID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdEFyciA9IFtdO1xuXG4gIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIHNlbGVjdGVkIHByb2plY3QgaW5kZXgsIG51bGwgPSBubyBwcm9qZWN0IHNlbGVjdGVkXG4gIGxldCBzZWxlY3RlZFByb2plY3QgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3RBcnIucHVzaChwcm9qZWN0KTtcbiAgICBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0QXJyLmxlbmd0aCAtIDE7XG4gICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdGVkIHByb2plY3QgaW5kZXgnLCBzZWxlY3RlZFByb2plY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0QXJyLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gcHJvamVjdCk7XG4gICAgcHJvamVjdEFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIFsuLi5wcm9qZWN0QXJyXTtcbiAgfVxuXG4gIC8vIEZvciB0ZXN0aW5nXG4gIGZ1bmN0aW9uIGxvZ1Byb2plY3RzKCkge1xuICAgIGNvbnNvbGUudGFibGUocHJvamVjdEFycik7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9qZWN0Q3JlYXRpb25NYW5hZ2VyKCkge1xuICAgIGRpc3BsYXlNYW5hZ2VyLmNsZWFyTWFpbkNvbnRlbnQoKTtcbiAgICBkaXNwbGF5TWFuYWdlci50b2dnbGVBZGRQcm9qZWN0QnRuKCk7XG4gICAgZGlzcGxheU1hbmFnZXIuc2hvd0VkaXREaWFsb2coKTtcbiAgICBkaXNwbGF5TWFuYWdlci5zZWxlY3RQcm9qZWN0SW5wdXQoKTtcbiAgfVxuXG4gIC8vIFJldHVybiB0cnVlIGlmIG5hbWUgYWxyZWFkeSBleGlzdHNcbiAgZnVuY3Rpb24gY2hlY2tEdXBsaWNhdGVOYW1lKG5hbWVUb0NoZWNrKSB7XG4gICAgbGV0IGlzRHVwbGljYXRlID0gZmFsc2U7XG5cbiAgICBwcm9qZWN0QXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0LnByb2plY3ROYW1lID09PSBuYW1lVG9DaGVjaykge1xuICAgICAgICBpc0R1cGxpY2F0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaXNEdXBsaWNhdGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTZWxlY3RlZFByb2plY3QoKSB7XG4gICAgcmV0dXJuIHNlbGVjdGVkUHJvamVjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFNlbGVjdGVkUHJvamVjdChpbnQpIHtcbiAgICBzZWxlY3RlZFByb2plY3QgPSBpbnQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFNlbGVjdGVkUHJvamVjdCxcbiAgICBzZXRTZWxlY3RlZFByb2plY3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGdldFByb2plY3RzLFxuICAgIGxvZ1Byb2plY3RzLCAvLyBGb3IgdGVzdGluZ1xuICAgIHByb2plY3RDcmVhdGlvbk1hbmFnZXIsXG4gICAgY2hlY2tEdXBsaWNhdGVOYW1lLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdE1hbmFnZXIgfTtcbiIsImZ1bmN0aW9uIGNsZWFyTWFpbkNvbnRlbnQoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gIFsuLi5tYWluLmNoaWxkTm9kZXNdLmZvckVhY2goKGNoaWxkKSA9PiBtYWluLnJlbW92ZUNoaWxkKGNoaWxkKSk7XG59XG5cbmV4cG9ydCB7IGNsZWFyTWFpbkNvbnRlbnQgfTtcbiIsImltcG9ydCB7IGNsZWFyTWFpbkNvbnRlbnQgfSBmcm9tICcuL2NsZWFyTWFpbkNvbnRlbnQnO1xuaW1wb3J0IHsgcHJvamVjdEVkaXREaWFsb2cgfSBmcm9tICcuL3Byb2plY3RFZGl0RGlhbG9nJztcbmltcG9ydCB7IHNlbGVjdFByb2plY3RJbnB1dCB9IGZyb20gJy4vc2VsZWN0UHJvamVjdElucHV0JztcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RMaXN0IH0gZnJvbSAnLi91cGRhdGVQcm9qZWN0TGlzdCc7XG5cbmNvbnN0IGRpc3BsYXlNYW5hZ2VyID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gc2hvd0VkaXREaWFsb2coKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGRpc3BsYXlNYW5hZ2VyLnByb2plY3RFZGl0RGlhbG9nKCdOZXcgcHJvamVjdCcpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFkZFByb2plY3RCdG4oKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgIGFkZFByb2plY3QuZGlzYWJsZWQgPSAhYWRkUHJvamVjdC5kaXNhYmxlZDtcbiAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2RlYWN0aXZhdGVkJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNob3dFZGl0RGlhbG9nLFxuICAgIHRvZ2dsZUFkZFByb2plY3RCdG4sXG4gICAgcHJvamVjdEVkaXREaWFsb2csXG4gICAgY2xlYXJNYWluQ29udGVudCxcbiAgICBzZWxlY3RQcm9qZWN0SW5wdXQsXG4gICAgdXBkYXRlUHJvamVjdExpc3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBkaXNwbGF5TWFuYWdlciB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdEVkaXRBcHBseSB9IGZyb20gJy4uL3Byb2plY3RzL3Byb2plY3RFZGl0QXBwbHknO1xuaW1wb3J0IGRlbGV0ZVNWRyBmcm9tICcuLi9zdmcvZGVsZXRlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Zyc7XG5pbXBvcnQgZG9uZVNWRyBmcm9tICcuLi9zdmcvZG9uZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnO1xuXG5mdW5jdGlvbiBwcm9qZWN0RWRpdERpYWxvZyhwcm9qZWN0TmFtZSkge1xuICAvLyBVc2UgYWxyZWFkeSBtYWRlIENTUyBmb3IgdGFzayBkaWFsb2cgdG8gY3JlYXRlL2VkaXQgcHJvamVjdHNcblxuICAvLyBUaGUgZGlhbG9nIGNvbnRhaW5lclxuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gIC8vIElucHV0IGZpZWxkXG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gIGlucHV0LnZhbHVlID0gcHJvamVjdE5hbWU7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICB0aXRsZS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAvLyBBcHBseSBjaGFuZ2VzIGJ1dHRvblxuXG4gIGNvbnN0IGVkaXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZWRpdEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRvbmVTVkcpO1xuICBlZGl0SW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0FwcGx5IGNoYW5nZXMnKTtcblxuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEltZyk7XG5cbiAgZnVuY3Rpb24gYXBwbHlDaGFuZ2VzKCkge1xuICAgIHByb2plY3RFZGl0QXBwbHkoKTtcbiAgfVxuXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGFwcGx5Q2hhbmdlcygpO1xuICB9KTtcblxuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0Jyk7XG4gIGVkaXQuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgZGl2LmFwcGVuZENoaWxkKGVkaXQpO1xuXG4gIC8vIERlbGV0ZSBidXR0b25cblxuICBjb25zdCBkZWxldGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZGVsZXRlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgZGVsZXRlU1ZHKTtcbiAgZGVsZXRlSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0RlbGV0ZSBwcm9qZWN0Jyk7XG5cbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZScpO1xuICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSW1nKTtcblxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnNvbGUubG9nKCdEZWxldGUgcHJvamVjdCcpO1xuICAgIC8vIFRPRE86IGltcGxlbWVudFxuICB9XG5cbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBkZWxldGVQcm9qZWN0KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFzay1hY3Rpb24nKTtcbiAgYWN0aW9uLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgZGl2LmFwcGVuZENoaWxkKGFjdGlvbik7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IHsgcHJvamVjdEVkaXREaWFsb2cgfTtcbiIsImZ1bmN0aW9uIHNlbGVjdFByb2plY3RJbnB1dCgpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZSA+IGlucHV0Jyk7XG4gIGlucHV0LnNlbGVjdCgpO1xufVxuXG5leHBvcnQgeyBzZWxlY3RQcm9qZWN0SW5wdXQgfTtcbiIsImltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSAnLi4vcHJvamVjdHMvcHJvamVjdE1hbmFnZXInO1xuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0TGlzdCgpIHtcbiAgY29uc3QgcHJvamVjdHNCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWJvZHknKTtcblxuICAvLyBDbGVhciBleGlzdGluZyBwcm9qZWN0cyBiZWZvcmUgYXBwZW5kaW5nIHRoZSBvbmVzIGluIHRoZSBsaXN0XG4gIFsuLi5wcm9qZWN0c0JvZHkuY2hpbGROb2Rlc10uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBpZiAoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0JykpIHtcbiAgICAgIHByb2plY3RzQm9keS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBudWxsID0gbm8gcHJvamVjdHMgaW4gbGlzdFxuICBpZiAocHJvamVjdE1hbmFnZXIuZ2V0U2VsZWN0ZWRQcm9qZWN0ICE9PSBudWxsKSB7XG4gICAgLy8gQXBwZW5kIGV4aXN0aW5nIHByb2plY3RzIHRvIHRoZSBwcm9qZWN0IGxpc3RcbiAgICBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgIGRpdi50ZXh0Q29udGVudCA9IHByb2plY3QucHJvamVjdE5hbWU7XG4gICAgICAvLyBUT0RPOiBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGNoYW5nZSBkaXNwbGF5ZWQgcHJvamVjdCBvbiBjbGlja1xuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgLy8gRmluZCBpbmRleCBvZiB0aGUgY2xpY2tlZCBwcm9qZWN0XG4gICAgICAgIC8vIFVzZSBuYW1lIGFzIGEgdW5pcXVlIGlkXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgbGV0IGNsaWNrZWRJbmRleDtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgIGlmIChwcm9qZWN0LnByb2plY3ROYW1lID09PSBlLnRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgY2xpY2tlZEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBwcm9qZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RNYW5hZ2VyLnNldFNlbGVjdGVkUHJvamVjdChjbGlja2VkSW5kZXgpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHByb2plY3RzQm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIHNlbGVjdGVkIHByb2plY3QgY2xhc3NcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFsuLi5wcm9qZWN0c0JvZHkucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKV07XG4gICAgcHJvamVjdExpc3RbcHJvamVjdE1hbmFnZXIuZ2V0U2VsZWN0ZWRQcm9qZWN0KCldLmNsYXNzTGlzdC5hZGQoXG4gICAgICAnc2VsZWN0ZWQtcHJvamVjdCdcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IHVwZGF0ZVByb2plY3RMaXN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdGlhbGl6ZVBhZ2UgfSBmcm9tICcuL2luaXQvaW5pdGlhbCc7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5pbml0aWFsaXplUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9