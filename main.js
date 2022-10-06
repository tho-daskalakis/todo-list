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
___CSS_LOADER_EXPORT___.push([module.id, "/* Color palette */\n/* Fonts */\n@font-face {\n  font-family: Nunito;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 500;\n  font-style: normal;\n}\n/* Mixins */\n/* Styles */\nhtml,\nbody,\n.container {\n  margin: 0;\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n  font-family: \"Nunito\";\n  font-size: 24px;\n  font-size: min(4vmin, 2.8vmax);\n}\n\n.holy-grail {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 10% 90%;\n  grid-template-columns: 20% 80%;\n}\n.holy-grail > * {\n  padding: 8px;\n}\n.holy-grail > .top-bar {\n  background-color: #14b8a6;\n  color: #ccfbf1;\n  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.8);\n  font-weight: 600;\n  font-size: 38px;\n  font-size: min(7vmin, 5vmax);\n  grid-row: 1/span 1;\n  grid-column: 1/span 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.holy-grail > .side-bar {\n  background-color: #115e59;\n  color: #ccfbf1;\n  grid-row: 2/span 1;\n  grid-column: 1/span 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.holy-grail > .main-content {\n  background-color: #f0fdfa;\n  overflow: auto;\n  grid-row: 2/span 1;\n  grid-column: 2/span 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.tasks-clipart {\n  width: clamp(120px, 30%, 220px);\n  height: auto;\n}\n\n.project {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 2%;\n  margin-right: 5px;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n  background-color: #14b8a6;\n}\n.project:hover {\n  background-color: rgba(240, 253, 250, 0.6);\n  color: black;\n  cursor: pointer;\n}\n.project:active {\n  box-shadow: none;\n}\n\n.add-project {\n  justify-self: center;\n  width: clamp(24px, 5vmin, 48px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.add-project:hover {\n  cursor: pointer;\n}\n.add-project img {\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background-color: #99f6e4;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n}\n.add-project img:active {\n  box-shadow: none;\n}\n\n.projects-title {\n  font-weight: 600;\n}\n\n.projects-body {\n  white-space: nowrap;\n  overflow-x: hidden;\n  overflow-y: overlay;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: max-content;\n  grid-auto-rows: max-content;\n  gap: 8px;\n}\n\n.selected-project {\n  background-color: rgba(240, 253, 250, 0.9);\n  color: black;\n}\n.selected-project:hover {\n  background-color: rgba(240, 253, 250, 0.9);\n}\n\n.selected-project-display {\n  font-weight: 600;\n  overflow-wrap: break-word;\n  max-width: 100%;\n}\n\n.add-task {\n  width: clamp(20px, 4vmax, 44px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.add-task:hover {\n  cursor: pointer;\n}\n.add-task:hover {\n  cursor: pointer;\n}\n.add-task img {\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background-color: #99f6e4;\n  box-shadow: 5px 5px 5px gray;\n}\n.add-task img:active {\n  box-shadow: none;\n}\n\n.task {\n  width: 100%;\n  height: 10vh;\n  min-height: 140px;\n  background-color: rgba(128, 128, 128, 0.2);\n  border-radius: 5px;\n  display: grid;\n  grid-template-rows: 1fr min(4vmax, 50px);\n  grid-template-columns: 1fr min(max(34px, 4vmax), 104px);\n}\n.task > * {\n  padding: 8px;\n}\n.task .task-title {\n  color: #115e59;\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n  overflow: auto;\n  grid-row: 1/span 1;\n  grid-column: 1/span 1;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.task .task-title > input {\n  width: 80%;\n  height: 60%;\n  font-size: min(4vmin, 2.8vmax);\n}\n.task .task-complete {\n  color: gray;\n  text-decoration-line: line-through;\n}\n.task .task-edit {\n  padding: 4px;\n  padding-right: 8px;\n  grid-row: 1/span 2;\n  grid-column: 2/span 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task .task-edit > button {\n  width: clamp(20px, 4vmax, 44px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background-color: #d97706;\n  border-radius: 10px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task .task-edit > button:hover {\n  cursor: pointer;\n}\n.task .task-edit > button:active {\n  box-shadow: none;\n}\n.task .task-edit > button > img {\n  width: 90%;\n  height: 90%;\n}\n.task .task-action {\n  padding: 0;\n  grid-row: 2/span 1;\n  grid-column: 1/span 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task .task-action > button {\n  width: clamp(20px, 4vmax, 44px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background-color: #14b8a6;\n  margin-bottom: 8px;\n  height: auto;\n  border-radius: 10px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task .task-action > button:hover {\n  cursor: pointer;\n}\n.task .task-action > button:active {\n  box-shadow: none;\n}\n.task .task-action > button > img {\n  width: 90%;\n  height: 90%;\n}\n.task .task-action > button.task-delete {\n  width: clamp(20px, 4vmax, 44px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background-color: tomato;\n  margin-bottom: 8px;\n  height: auto;\n  border-radius: 10px;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.task .task-action > button.task-delete:hover {\n  cursor: pointer;\n}\n.task .task-action > button.task-delete:active {\n  box-shadow: none;\n}\n.task .task-action > button.task-delete > img {\n  width: 90%;\n  height: 90%;\n}\n\n.deactivated img {\n  background-color: gray;\n  box-shadow: none;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["/* Color palette */\n\n$teal-50: #f0fdfa;\n$teal-100: #ccfbf1;\n$teal-200: #99f6e4;\n$teal-500: #14b8a6;\n$teal-800: #115e59;\n\n$amber-600: #d97706;\n\n$top-bar-bg: $teal-500;\n$side-bar-bg: $teal-800;\n$main-content-bg: $teal-50;\n\n$edit-task-btn: $amber-600;\n$action-task-btn: $teal-500;\n$delete-task-btn: tomato;\n\n/* Fonts */\n\n@font-face {\n  font-family: Nunito;\n  src: url(./fonts/Nunito-Regular.ttf);\n  font-weight: 500;\n  font-style: normal;\n}\n\n/* Mixins */\n\n@mixin circular-btn {\n  width: clamp(20px, 4vmax, 44px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n/* Styles */\n\nhtml,\nbody,\n.container {\n  margin: 0;\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n\n  font-family: 'Nunito';\n  font-size: 24px;\n  font-size: min(4vmin, 2.8vmax);\n}\n\n.holy-grail {\n  height: 100%;\n\n  display: grid;\n  grid-template-rows: 10% 90%;\n  grid-template-columns: 20% 80%;\n\n  & > * {\n    padding: 8px;\n  }\n\n  & > .top-bar {\n    background-color: $top-bar-bg;\n    color: $teal-100;\n    text-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.8);\n    font-weight: 600;\n    font-size: 38px;\n    font-size: min(7vmin, 5vmax);\n\n    grid-row: 1 / span 1;\n    grid-column: 1 / span 2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  & > .side-bar {\n    background-color: $teal-800;\n    color: $teal-100;\n\n    grid-row: 2 / span 1;\n    grid-column: 1 / span 1;\n\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  & > .main-content {\n    background-color: $main-content-bg;\n    overflow: auto;\n\n    grid-row: 2 / span 1;\n    grid-column: 2 / span 1;\n\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    justify-content: flex-start;\n    align-items: center;\n  }\n}\n\n.tasks-clipart {\n  width: clamp(120px, 30%, 220px);\n  height: auto;\n}\n\n.project {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 2%;\n  margin-right: 5px;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.5);\n  background-color: $teal-500;\n\n  &:hover {\n    background-color: rgba($color: $teal-50, $alpha: 0.6);\n    color: black;\n    cursor: pointer;\n  }\n\n  &:active {\n    box-shadow: none;\n  }\n}\n\n.add-project {\n  justify-self: center;\n  width: clamp(24px, 5vmin, 48px);\n  aspect-ratio: 1;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  img {\n    width: 100%;\n    aspect-ratio: 1;\n    border-radius: 50%;\n    background-color: $teal-200;\n    box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.5);\n\n    &:active {\n      box-shadow: none;\n    }\n  }\n}\n\n.projects-title {\n  font-weight: 600;\n}\n\n.projects-body {\n  white-space: nowrap;\n  overflow-x: hidden;\n  overflow-y: overlay;\n  width: 100%;\n  height: 100%;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: max-content;\n  grid-auto-rows: max-content;\n  gap: 8px;\n}\n\n.selected-project {\n  background-color: rgba($color: $teal-50, $alpha: 0.9);\n  color: black;\n\n  &:hover {\n    background-color: rgba($color: $teal-50, $alpha: 0.9);\n  }\n}\n\n.selected-project-display {\n  font-weight: 600;\n  overflow-wrap: break-word;\n  max-width: 100%;\n}\n\n.add-task {\n  @include circular-btn();\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  img {\n    width: 100%;\n    aspect-ratio: 1;\n    border-radius: 50%;\n    background-color: $teal-200;\n    box-shadow: 5px 5px 5px gray;\n\n    &:active {\n      box-shadow: none;\n    }\n  }\n}\n\n.task {\n  width: 100%;\n  height: 10vh;\n  min-height: 140px;\n  background-color: rgba($color: gray, $alpha: 0.2);\n  border-radius: 5px;\n\n  display: grid;\n  grid-template-rows: 1fr min(4vmax, 50px);\n  grid-template-columns: 1fr min(max(34px, 4vmax), 104px);\n\n  & > * {\n    padding: 8px;\n  }\n\n  .task-title {\n    color: $teal-800;\n    word-wrap: break-word;\n    text-overflow: ellipsis;\n    overflow: auto;\n\n    grid-row: 1 / span 1;\n    grid-column: 1 / span 1;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    & > input {\n      width: 80%;\n      height: 60%;\n      font-size: min(4vmin, 2.8vmax);\n    }\n  }\n\n  .task-complete {\n    color: gray;\n    text-decoration-line: line-through;\n  }\n\n  .task-edit {\n    padding: 4px;\n    padding-right: 8px;\n\n    grid-row: 1 / span 2;\n    grid-column: 2 / span 1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    & > button {\n      @include circular-btn();\n\n      background-color: $edit-task-btn;\n      border-radius: 10px;\n      box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.25);\n\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      &:active {\n        box-shadow: none;\n      }\n\n      & > img {\n        width: 90%;\n        height: 90%;\n      }\n    }\n  }\n\n  .task-action {\n    padding: 0;\n\n    grid-row: 2 / span 1;\n    grid-column: 1 / span 2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    & > button {\n      @include circular-btn();\n\n      background-color: $action-task-btn;\n      margin-bottom: 8px;\n      height: auto;\n      border-radius: 10px;\n      box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.25);\n\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      &:active {\n        box-shadow: none;\n      }\n\n      & > img {\n        width: 90%;\n        height: 90%;\n      }\n    }\n\n    & > button.task-delete {\n      @include circular-btn();\n\n      background-color: $delete-task-btn;\n      margin-bottom: 8px;\n      height: auto;\n      border-radius: 10px;\n      box-shadow: 5px 5px 5px rgba($color: black, $alpha: 0.25);\n\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      &:active {\n        box-shadow: none;\n      }\n\n      & > img {\n        width: 90%;\n        height: 90%;\n      }\n    }\n  }\n}\n\n.deactivated {\n  img {\n    background-color: gray;\n    box-shadow: none;\n  }\n}\n"],"sourceRoot":""}]);
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

  function getTasks() {
    return taskArr;
  }

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
    getTasks,
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
    return projectArr;
  }

  function getCurrentProject() {
    return projectArr[selectedProject];
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
    getCurrentProject,
    logProjects, // For testing
    projectCreationManager,
    checkDuplicateName,
  };
})();




/***/ }),

/***/ "./src/tasks/task.js":
/*!***************************!*\
  !*** ./src/tasks/task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskFactory": () => (/* binding */ taskFactory)
/* harmony export */ });
function taskFactory(taskText) {
  let text = taskText;

  let inDisplayMode = false;

  let isDone = false;

  let displayDiv;

  let editDiv;

  return {
    text,
    inDisplayMode,
    isDone,
    displayDiv,
    editDiv,
  };
}




/***/ }),

/***/ "./src/tasks/taskManager.js":
/*!**********************************!*\
  !*** ./src/tasks/taskManager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskManager": () => (/* binding */ taskManager)
/* harmony export */ });
/* harmony import */ var _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/projectManager */ "./src/projects/projectManager.js");
/* harmony import */ var _tasks_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks/task */ "./src/tasks/task.js");
/* harmony import */ var _view_displayManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/displayManager */ "./src/view/displayManager.js");




const taskManager = (() => {
  // TODO: Handle task creation, check for duplicates
  function createTask() {
    // TODO: Create task div with taskText

    // Create task
    const task = (0,_tasks_task__WEBPACK_IMPORTED_MODULE_1__.taskFactory)('New task');
    task.editDiv = _view_displayManager__WEBPACK_IMPORTED_MODULE_2__.displayManager.taskEditDialog(task);

    // Add task to project's taskArr
    _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getCurrentProject().addTask(task);
    // console.log(projectManager.getCurrentProject().getTasks());

    const main = document.querySelector('.main-content');
    main.appendChild(task.editDiv);
  }

  // TODO: Handle task modification
  function editTask() {}

  // TODO: Handle task deletion
  function deleteTask() {}

  return {
    createTask,
    editTask,
    deleteTask,
  };
})();




/***/ }),

/***/ "./src/view/addTaskBtn.js":
/*!********************************!*\
  !*** ./src/view/addTaskBtn.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAddTaskBtn": () => (/* binding */ createAddTaskBtn)
/* harmony export */ });
/* harmony import */ var _svg_add_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg/add_FILL0_wght400_GRAD0_opsz48.svg */ "./src/svg/add_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _tasks_taskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks/taskManager */ "./src/tasks/taskManager.js");
/* harmony import */ var _displayManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayManager */ "./src/view/displayManager.js");




function createAddTaskBtn() {
  const img = document.createElement('img');
  img.setAttribute('src', _svg_add_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__);

  const btn = document.createElement('button');
  btn.classList.add('add-task');
  btn.appendChild(img);

  btn.addEventListener('click', (e) => {
    _tasks_taskManager__WEBPACK_IMPORTED_MODULE_1__.taskManager.createTask();
  });

  return btn;
}




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
/* harmony import */ var _selectTaskInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectTaskInput */ "./src/view/selectTaskInput.js");
/* harmony import */ var _taskDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskDisplay */ "./src/view/taskDisplay.js");
/* harmony import */ var _taskEditDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskEditDialog */ "./src/view/taskEditDialog.js");
/* harmony import */ var _toggleTaskDisplayMode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggleTaskDisplayMode */ "./src/view/toggleTaskDisplayMode.js");
/* harmony import */ var _updateProjectContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateProjectContent */ "./src/view/updateProjectContent.js");
/* harmony import */ var _updateProjectList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateProjectList */ "./src/view/updateProjectList.js");










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

  function toggleAddTaskBtn() {
    const addTask = document.querySelector('.add-task');
    addTask.disabled = !addTask.disabled;
    addTask.classList.toggle('deactivated');
  }

  return {
    showEditDialog,
    toggleAddProjectBtn,
    toggleAddTaskBtn,
    projectEditDialog: _projectEditDialog__WEBPACK_IMPORTED_MODULE_1__.projectEditDialog,
    clearMainContent: _clearMainContent__WEBPACK_IMPORTED_MODULE_0__.clearMainContent,
    selectProjectInput: _selectProjectInput__WEBPACK_IMPORTED_MODULE_2__.selectProjectInput,
    selectTaskInput: _selectTaskInput__WEBPACK_IMPORTED_MODULE_3__.selectTaskInput,
    updateProjectList: _updateProjectList__WEBPACK_IMPORTED_MODULE_8__.updateProjectList,
    updateProjectContent: _updateProjectContent__WEBPACK_IMPORTED_MODULE_7__.updateProjectContent,
    taskDisplay: _taskDisplay__WEBPACK_IMPORTED_MODULE_4__.taskDisplay,
    taskEditDialog: _taskEditDialog__WEBPACK_IMPORTED_MODULE_5__.taskEditDialog,
    toggleTaskDisplayMode: _toggleTaskDisplayMode__WEBPACK_IMPORTED_MODULE_6__.toggleTaskDisplayMode,
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
  // TODO: modify project name if project exists instead of creating new one

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

/***/ "./src/view/selectTaskInput.js":
/*!*************************************!*\
  !*** ./src/view/selectTaskInput.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectTaskInput": () => (/* binding */ selectTaskInput)
/* harmony export */ });
function selectTaskInput() {
  // Select all tasks being edited
  const taskInputs = [...document.querySelectorAll('.task-title > input')];
  console.log(taskInputs);

  taskInputs.forEach((element) => element.select());
}




/***/ }),

/***/ "./src/view/taskDisplay.js":
/*!*********************************!*\
  !*** ./src/view/taskDisplay.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskDisplay": () => (/* binding */ taskDisplay)
/* harmony export */ });
/* harmony import */ var _svg_done_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg/done_FILL0_wght400_GRAD0_opsz48.svg */ "./src/svg/done_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _svg_edit_square_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/edit_square_FILL0_wght400_GRAD0_opsz48.svg */ "./src/svg/edit_square_FILL0_wght400_GRAD0_opsz48.svg");



function taskDisplay(task) {
  const div = document.createElement('div');
  div.classList.add('task');

  const title = document.createElement('div');
  title.classList.add('task-title');
  title.textContent = task.text;
  div.appendChild(title);

  const edit = document.createElement('div');
  edit.classList.add('task-edit');
  const editBtn = document.createElement('button');
  const editImg = document.createElement('img');
  editImg.setAttribute('src', _svg_edit_square_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__);
  editImg.setAttribute('alt', 'Edit task');

  editBtn.appendChild(editImg);
  edit.appendChild(editBtn);
  div.appendChild(edit);

  const action = document.createElement('div');
  action.classList.add('task-action');
  const actionBtn = document.createElement('button');
  actionBtn.addEventListener('click', (e) => {
    // Mark task as done
    title.classList.toggle('task-complete');

    task.isDone = !task.isDone;
  });
  const actionImg = document.createElement('img');
  actionImg.setAttribute('src', _svg_done_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__);
  actionImg.setAttribute('alt', 'Mark task as done');
  actionBtn.appendChild(actionImg);
  action.appendChild(actionBtn);
  div.appendChild(action);

  return div;
}




/***/ }),

/***/ "./src/view/taskEditDialog.js":
/*!************************************!*\
  !*** ./src/view/taskEditDialog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskEditDialog": () => (/* binding */ taskEditDialog)
/* harmony export */ });
/* harmony import */ var _svg_delete_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg/delete_FILL0_wght400_GRAD0_opsz48.svg */ "./src/svg/delete_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _svg_done_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/done_FILL0_wght400_GRAD0_opsz48.svg */ "./src/svg/done_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _tasks_taskManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/taskManager */ "./src/tasks/taskManager.js");
/* harmony import */ var _displayManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayManager */ "./src/view/displayManager.js");





function taskEditDialog(task) {
  // The dialog container

  const div = document.createElement('div');
  div.classList.add('task');

  // Input field

  const input = document.createElement('input');

  input.value = task.text;

  const title = document.createElement('div');
  title.classList.add('task-title');
  title.appendChild(input);

  div.appendChild(title);

  // Apply changes button

  const editImg = document.createElement('img');
  editImg.setAttribute('src', _svg_done_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__);
  editImg.setAttribute('alt', 'Apply changes');

  const editBtn = document.createElement('button');
  editBtn.appendChild(editImg);

  // Apply changes
  editBtn.addEventListener('click', (e) => {
    // Update task text value
    task.text = input.value;
    console.log(task);

    // Update task editDiv & replace it with displayDiv
    task.displayDiv = _displayManager__WEBPACK_IMPORTED_MODULE_3__.displayManager.taskDisplay(task);

    // Call displayManager to replace editDiv with displayDiv
    _displayManager__WEBPACK_IMPORTED_MODULE_3__.displayManager.toggleTaskDisplayMode(task);
  });

  const edit = document.createElement('div');
  edit.classList.add('task-edit');
  edit.appendChild(editBtn);

  div.appendChild(edit);

  // Delete button

  const deleteImg = document.createElement('img');
  deleteImg.setAttribute('src', _svg_delete_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__);
  deleteImg.setAttribute('alt', 'Delete project');

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('task-delete');
  deleteBtn.appendChild(deleteImg);

  deleteBtn.addEventListener('click', (e) => {
    // TODO: implement
  });

  const action = document.createElement('div');
  action.classList.add('task-action');
  action.appendChild(deleteBtn);

  div.appendChild(action);

  return div;
}




/***/ }),

/***/ "./src/view/toggleTaskDisplayMode.js":
/*!*******************************************!*\
  !*** ./src/view/toggleTaskDisplayMode.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleTaskDisplayMode": () => (/* binding */ toggleTaskDisplayMode)
/* harmony export */ });
function toggleTaskDisplayMode(task) {
  const main = document.querySelector('.main-content');

  if (task.inDisplayMode) {
    main.replaceChild(task.editDiv, task.displayDiv);
  }

  if (!task.inDisplayMode) {
    main.replaceChild(task.displayDiv, task.editDiv);
  }
}




/***/ }),

/***/ "./src/view/updateProjectContent.js":
/*!******************************************!*\
  !*** ./src/view/updateProjectContent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateProjectContent": () => (/* binding */ updateProjectContent)
/* harmony export */ });
/* harmony import */ var _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/projectManager */ "./src/projects/projectManager.js");
/* harmony import */ var _addTaskBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskBtn */ "./src/view/addTaskBtn.js");
/* harmony import */ var _displayManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayManager */ "./src/view/displayManager.js");




function updateProjectContent() {
  const main = document.querySelector('.main-content');

  // Clear content
  [...main.childNodes].forEach((child) => main.removeChild(child));

  // console.log(projectManager.getSelectedProject());
  const selectedProjectIndex = _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getSelectedProject();
  const currentProject = _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getProjects()[selectedProjectIndex];
  const tasks = currentProject.getTasks();

  // Display project name
  const displayProject = document.createElement('div');
  displayProject.classList.add('selected-project-display');
  displayProject.textContent = currentProject.projectName;
  main.appendChild(displayProject);

  // Create add task button
  main.appendChild((0,_addTaskBtn__WEBPACK_IMPORTED_MODULE_1__.createAddTaskBtn)());

  // TODO: render tasks
  _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getCurrentProject()
    .getTasks()
    .forEach((task) => {
      main.appendChild(_displayManager__WEBPACK_IMPORTED_MODULE_2__.displayManager.taskDisplay(task));
    });
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
/* harmony import */ var _updateProjectContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateProjectContent */ "./src/view/updateProjectContent.js");



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
    // TODO: outsource div creation

    // Append existing projects to the project list
    _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getProjects().forEach((project) => {
      const div = document.createElement('div');
      div.classList.add('project');
      div.textContent = project.projectName;
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

    // Render project's content
    (0,_updateProjectContent__WEBPACK_IMPORTED_MODULE_1__.updateProjectContent)();
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

/***/ }),

/***/ "./src/svg/edit_square_FILL0_wght400_GRAD0_opsz48.svg":
/*!************************************************************!*\
  !*** ./src/svg/edit_square_FILL0_wght400_GRAD0_opsz48.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e5845c324db02887871.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkQ3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDekI7O0FBRXZCLDZEQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbml0L2FkZFByb2plY3RCdG4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luaXQvaW5pdGlhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5pdC9tYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5pdC9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbml0L3RvcGJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMvcHJvamVjdEVkaXRBcHBseS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzL3Rhc2tNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L2FkZFRhc2tCdG4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvY2xlYXJNYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9kaXNwbGF5TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9wcm9qZWN0RWRpdERpYWxvZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9zZWxlY3RQcm9qZWN0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvc2VsZWN0VGFza0lucHV0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2tEaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Rhc2tFZGl0RGlhbG9nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3RvZ2dsZVRhc2tEaXNwbGF5TW9kZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy91cGRhdGVQcm9qZWN0Q29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy91cGRhdGVQcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9OdW5pdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDb2xvciBwYWxldHRlICovXFxuLyogRm9udHMgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4vKiBNaXhpbnMgKi9cXG4vKiBTdHlsZXMgKi9cXG5odG1sLFxcbmJvZHksXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtc2l6ZTogbWluKDR2bWluLCAyLjh2bWF4KTtcXG59XFxuXFxuLmhvbHktZ3JhaWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDkwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcXG59XFxuLmhvbHktZ3JhaWwgPiAqIHtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuLmhvbHktZ3JhaWwgPiAudG9wLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRiOGE2O1xcbiAgY29sb3I6ICNjY2ZiZjE7XFxuICB0ZXh0LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMzhweDtcXG4gIGZvbnQtc2l6ZTogbWluKDd2bWluLCA1dm1heCk7XFxuICBncmlkLXJvdzogMS9zcGFuIDE7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaG9seS1ncmFpbCA+IC5zaWRlLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE1ZTU5O1xcbiAgY29sb3I6ICNjY2ZiZjE7XFxuICBncmlkLXJvdzogMi9zcGFuIDE7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOHB4O1xcbn1cXG4uaG9seS1ncmFpbCA+IC5tYWluLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmRmYTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZ3JpZC1yb3c6IDIvc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IDIvc3BhbiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcy1jbGlwYXJ0IHtcXG4gIHdpZHRoOiBjbGFtcCgxMjBweCwgMzAlLCAyMjBweCk7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBwYWRkaW5nOiAyJTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0YjhhNjtcXG59XFxuLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI1MywgMjUwLCAwLjYpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJvamVjdDphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IGNsYW1wKDI0cHgsIDV2bWluLCA0OHB4KTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkLXByb2plY3QgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5ZjZlNDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuLmFkZC1wcm9qZWN0IGltZzphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnByb2plY3RzLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5wcm9qZWN0cy1ib2R5IHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBvdmVybGF5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5zZWxlY3RlZC1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNTMsIDI1MCwgMC45KTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLnNlbGVjdGVkLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI1MywgMjUwLCAwLjkpO1xcbn1cXG5cXG4uc2VsZWN0ZWQtcHJvamVjdC1kaXNwbGF5IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgd2lkdGg6IGNsYW1wKDIwcHgsIDR2bWF4LCA0NHB4KTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkLXRhc2sgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5ZjZlNDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGdyYXk7XFxufVxcbi5hZGQtdGFzayBpbWc6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi50YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbWluLWhlaWdodDogMTQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluKDR2bWF4LCA1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbihtYXgoMzRweCwgNHZtYXgpLCAxMDRweCk7XFxufVxcbi50YXNrID4gKiB7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcbi50YXNrIC50YXNrLXRpdGxlIHtcXG4gIGNvbG9yOiAjMTE1ZTU5O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGdyaWQtcm93OiAxL3NwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzayAudGFzay10aXRsZSA+IGlucHV0IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIGZvbnQtc2l6ZTogbWluKDR2bWluLCAyLjh2bWF4KTtcXG59XFxuLnRhc2sgLnRhc2stY29tcGxldGUge1xcbiAgY29sb3I6IGdyYXk7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xcbn1cXG4udGFzayAudGFzay1lZGl0IHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gIGdyaWQtcm93OiAxL3NwYW4gMjtcXG4gIGdyaWQtY29sdW1uOiAyL3NwYW4gMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrIC50YXNrLWVkaXQgPiBidXR0b24ge1xcbiAgd2lkdGg6IGNsYW1wKDIwcHgsIDR2bWF4LCA0NHB4KTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk3NzA2O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzayAudGFzay1lZGl0ID4gYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhc2sgLnRhc2stZWRpdCA+IGJ1dHRvbjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnRhc2sgLnRhc2stZWRpdCA+IGJ1dHRvbiA+IGltZyB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcbi50YXNrIC50YXNrLWFjdGlvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgZ3JpZC1yb3c6IDIvc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2sgLnRhc2stYWN0aW9uID4gYnV0dG9uIHtcXG4gIHdpZHRoOiBjbGFtcCgyMHB4LCA0dm1heCwgNDRweCk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0YjhhNjtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2sgLnRhc2stYWN0aW9uID4gYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhc2sgLnRhc2stYWN0aW9uID4gYnV0dG9uOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4udGFzayAudGFzay1hY3Rpb24gPiBidXR0b24gPiBpbWcge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG4udGFzayAudGFzay1hY3Rpb24gPiBidXR0b24udGFzay1kZWxldGUge1xcbiAgd2lkdGg6IGNsYW1wKDIwcHgsIDR2bWF4LCA0NHB4KTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrIC50YXNrLWFjdGlvbiA+IGJ1dHRvbi50YXNrLWRlbGV0ZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrIC50YXNrLWFjdGlvbiA+IGJ1dHRvbi50YXNrLWRlbGV0ZTphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnRhc2sgLnRhc2stYWN0aW9uID4gYnV0dG9uLnRhc2stZGVsZXRlID4gaW1nIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG59XFxuXFxuLmRlYWN0aXZhdGVkIGltZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFBO0FBa0JBLFVBQUE7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBakJGO0FBb0JBLFdBQUE7QUFjQSxXQUFBO0FBRUE7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQWpDRjs7QUFvQ0E7RUFDRSxZQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFsQ0Y7QUFvQ0U7RUFDRSxZQUFBO0FBbENKO0FBcUNFO0VBQ0UseUJBL0RPO0VBZ0VQLGNBbEVPO0VBbUVQLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFFQSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFyQ0o7QUF3Q0U7RUFDRSx5QkE5RU87RUErRVAsY0FsRk87RUFvRlAsa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUF4Q0o7QUEyQ0U7RUFDRSx5QkE5Rk07RUErRk4sY0FBQTtFQUVBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQTNDSjs7QUErQ0E7RUFDRSwrQkFBQTtFQUNBLFlBQUE7QUE1Q0Y7O0FBK0NBO0VBQ0UsZ0JBQUE7RUFDQSxt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QUNBLGtCQUFBO0VBeVNJLHdCQTNUWTtFQTRUWixrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF2RE47QUF4UEU7RUFDRSxlQUFBO0FBMFBKO0FBc0RNO0VBQ0UsZ0JBQUE7QUFwRFI7QUF1RE07RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQXJEUjs7QUE0REU7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FBekRKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENvbG9yIHBhbGV0dGUgKi9cXG5cXG4kdGVhbC01MDogI2YwZmRmYTtcXG4kdGVhbC0xMDA6ICNjY2ZiZjE7XFxuJHRlYWwtMjAwOiAjOTlmNmU0O1xcbiR0ZWFsLTUwMDogIzE0YjhhNjtcXG4kdGVhbC04MDA6ICMxMTVlNTk7XFxuXFxuJGFtYmVyLTYwMDogI2Q5NzcwNjtcXG5cXG4kdG9wLWJhci1iZzogJHRlYWwtNTAwO1xcbiRzaWRlLWJhci1iZzogJHRlYWwtODAwO1xcbiRtYWluLWNvbnRlbnQtYmc6ICR0ZWFsLTUwO1xcblxcbiRlZGl0LXRhc2stYnRuOiAkYW1iZXItNjAwO1xcbiRhY3Rpb24tdGFzay1idG46ICR0ZWFsLTUwMDtcXG4kZGVsZXRlLXRhc2stYnRuOiB0b21hdG87XFxuXFxuLyogRm9udHMgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XFxuICBzcmM6IHVybCguL2ZvbnRzL051bml0by1SZWd1bGFyLnR0Zik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKiBNaXhpbnMgKi9cXG5cXG5AbWl4aW4gY2lyY3VsYXItYnRuIHtcXG4gIHdpZHRoOiBjbGFtcCgyMHB4LCA0dm1heCwgNDRweCk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuXFxuLyogU3R5bGVzICovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbi5jb250YWluZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBmb250LWZhbWlseTogJ051bml0byc7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXNpemU6IG1pbig0dm1pbiwgMi44dm1heCk7XFxufVxcblxcbi5ob2x5LWdyYWlsIHtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA5MCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuXFxuICAmID4gKiB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gIH1cXG5cXG4gICYgPiAudG9wLWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3AtYmFyLWJnO1xcbiAgICBjb2xvcjogJHRlYWwtMTAwO1xcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuOCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG4gICAgZm9udC1zaXplOiBtaW4oN3ZtaW4sIDV2bWF4KTtcXG5cXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICYgPiAuc2lkZS1iYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbC04MDA7XFxuICAgIGNvbG9yOiAkdGVhbC0xMDA7XFxuXFxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICB9XFxuXFxuICAmID4gLm1haW4tY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbnRlbnQtYmc7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi50YXNrcy1jbGlwYXJ0IHtcXG4gIHdpZHRoOiBjbGFtcCgxMjBweCwgMzAlLCAyMjBweCk7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBwYWRkaW5nOiAyJTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbC01MDA7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICR0ZWFsLTUwLCAkYWxwaGE6IDAuNik7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgJjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgfVxcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogY2xhbXAoMjRweCwgNXZtaW4sIDQ4cHgpO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbC0yMDA7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjUpO1xcblxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ucHJvamVjdHMtdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnByb2plY3RzLWJvZHkge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IG92ZXJsYXk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQ7XFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnNlbGVjdGVkLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICR0ZWFsLTUwLCAkYWxwaGE6IDAuOSk7XFxuICBjb2xvcjogYmxhY2s7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICR0ZWFsLTUwLCAkYWxwaGE6IDAuOSk7XFxuICB9XFxufVxcblxcbi5zZWxlY3RlZC1wcm9qZWN0LWRpc3BsYXkge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICBAaW5jbHVkZSBjaXJjdWxhci1idG4oKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbC0yMDA7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGdyYXk7XFxuXFxuICAgICY6YWN0aXZlIHtcXG4gICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi50YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbWluLWhlaWdodDogMTQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogZ3JheSwgJGFscGhhOiAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbig0dm1heCwgNTBweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW4obWF4KDM0cHgsIDR2bWF4KSwgMTA0cHgpO1xcblxcbiAgJiA+ICoge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICB9XFxuXFxuICAudGFzay10aXRsZSB7XFxuICAgIGNvbG9yOiAkdGVhbC04MDA7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgJiA+IGlucHV0IHtcXG4gICAgICB3aWR0aDogODAlO1xcbiAgICAgIGhlaWdodDogNjAlO1xcbiAgICAgIGZvbnQtc2l6ZTogbWluKDR2bWluLCAyLjh2bWF4KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRhc2stY29tcGxldGUge1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDtcXG4gIH1cXG5cXG4gIC50YXNrLWVkaXQge1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG5cXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgJiA+IGJ1dHRvbiB7XFxuICAgICAgQGluY2x1ZGUgY2lyY3VsYXItYnRuKCk7XFxuXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVkaXQtdGFzay1idG47XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKCRjb2xvcjogYmxhY2ssICRhbHBoYTogMC4yNSk7XFxuXFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgfVxcblxcbiAgICAgICYgPiBpbWcge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLnRhc2stYWN0aW9uIHtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgZ3JpZC1yb3c6IDIgLyBzcGFuIDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgJiA+IGJ1dHRvbiB7XFxuICAgICAgQGluY2x1ZGUgY2lyY3VsYXItYnRuKCk7XFxuXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjdGlvbi10YXNrLWJ0bjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuMjUpO1xcblxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAmID4gaW1nIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgJiA+IGJ1dHRvbi50YXNrLWRlbGV0ZSB7XFxuICAgICAgQGluY2x1ZGUgY2lyY3VsYXItYnRuKCk7XFxuXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlbGV0ZS10YXNrLWJ0bjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuMjUpO1xcblxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAmID4gaW1nIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmRlYWN0aXZhdGVkIHtcXG4gIGltZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gJy4uL3Byb2plY3RzL3Byb2plY3RNYW5hZ2VyJztcbmltcG9ydCBhZGRTVkcgZnJvbSAnLi4vc3ZnL2FkZF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVBZGRQcm9qZWN0QnRuKCkge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYWRkU1ZHKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0NyZWF0ZSBwcm9qZWN0Jyk7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdCcpO1xuXG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIC8vIEhhbmRsZSBwcm9qZWN0IGNyZWF0aW9uXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcHJvamVjdE1hbmFnZXIucHJvamVjdENyZWF0aW9uTWFuYWdlcigpO1xuICB9KTtcblxuICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgeyBjcmVhdGVBZGRQcm9qZWN0QnRuIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVNYWluQ29udGVudCB9IGZyb20gJy4vbWFpbkNvbnRlbnQnO1xuaW1wb3J0IHsgY3JlYXRlU2lkZUJhciB9IGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQgeyBjcmVhdGVUb3BCYXIgfSBmcm9tICcuL3RvcGJhcic7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVQYWdlKCkge1xuICBjb25zdCBob2x5R3JhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9seUdyYWlsLmNsYXNzTGlzdC5hZGQoJ2hvbHktZ3JhaWwnKTtcblxuICBob2x5R3JhaWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9wQmFyKCkpO1xuICBob2x5R3JhaWwuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbkNvbnRlbnQoKSk7XG4gIGhvbHlHcmFpbC5hcHBlbmRDaGlsZChjcmVhdGVTaWRlQmFyKCkpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbHlHcmFpbCk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxpemVQYWdlIH07XG4iLCJpbXBvcnQgdGFza3NTVkcgZnJvbSAnLi4vc3ZnL2NsaXBib2FyZC1jaGVjay5zdmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkJyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSAnVG8gZ2V0IHN0YXJ0ZWQsIGNyZWF0ZSBhIG5ldyBwcm9qZWN0JztcbiAgbWFpbi5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzLWNsaXBhcnQnKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgdGFza3NTVkcpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnVGFza3MgY2xpcGFydCcpO1xuICBtYWluLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1haW5Db250ZW50IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVBZGRQcm9qZWN0QnRuIH0gZnJvbSAnLi9hZGRQcm9qZWN0QnRuJztcblxuZnVuY3Rpb24gY3JlYXRlU2lkZUJhcigpIHtcbiAgLy8gU2lkZS1iYXIgdGV4dFxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRleHQuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtdGl0bGUnKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgLy8gQ3JlYXRlIGJ1dHRvbiB0byBhZGQgcHJvamVjdHNcbiAgY29uc3QgYWRkUHJvamVjdCA9IGNyZWF0ZUFkZFByb2plY3RCdG4oKTtcblxuICBjb25zdCBwcm9qZWN0c0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdHNCb2R5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWJvZHknKTtcblxuICBwcm9qZWN0c0JvZHkuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtYmFyJyk7XG5cbiAgc2lkZUJhci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0JvZHkpO1xuXG4gIHJldHVybiBzaWRlQmFyO1xufVxuXG5leHBvcnQgeyBjcmVhdGVTaWRlQmFyIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVUb3BCYXIoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvcC1iYXInKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnVG9kbyBhcHAnO1xuXG4gIHJldHVybiB0aXRsZTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9wQmFyIH07XG4iLCJjb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHRhc2tBcnIgPSBbXTtcbiAgbGV0IHByb2plY3ROYW1lID0gbmFtZSA/IG5hbWUgOiAnTmV3IHByb2plY3QnO1xuXG4gIGZ1bmN0aW9uIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0YXNrQXJyO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVGFzayh0YXNrKSB7XG4gICAgdGFza0Fyci5wdXNoKHRhc2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrKSB7XG4gICAgY29uc3QgaW5kZXggPSB0YXNrQXJyLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gdGFzayk7XG4gICAgdGFza0Fyci5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgLy8gRm9yIHRlc3RpbmdcbiAgZnVuY3Rpb24gbG9nVGFza3MoKSB7XG4gICAgY29uc29sZS50YWJsZSh0YXNrQXJyKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0VGFza3MsXG4gICAgcHJvamVjdE5hbWUsXG4gICAgYWRkVGFzayxcbiAgICByZW1vdmVUYXNrLFxuICAgIGxvZ1Rhc2tzLFxuICB9O1xufTtcblxuZXhwb3J0IHsgcHJvamVjdEZhY3RvcnkgfTtcbiIsImltcG9ydCB7IGRpc3BsYXlNYW5hZ2VyIH0gZnJvbSAnLi4vdmlldy9kaXNwbGF5TWFuYWdlcic7XG5pbXBvcnQgeyBwcm9qZWN0RmFjdG9yeSB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gJy4vcHJvamVjdE1hbmFnZXInO1xuXG4vLyBDaGFuZ2VzIHRoZSBwcm9qZWN0J3MgbmFtZVxuZnVuY3Rpb24gcHJvamVjdEVkaXRBcHBseSgpIHtcbiAgLy8gICBjb25zb2xlLmxvZygnYXBwbHkgY2hhbmdlcyB0byBwcm9qZWN0Jyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUgPiBpbnB1dCcpO1xuICAvLyBHZXQgbmFtZSBmcm9tIGlucHV0IGZpZWxkXG4gIGNvbnN0IHByb2plY3ROYW1lID0gaW5wdXQudmFsdWU7XG5cbiAgLy8gQ2hlY2sgZm9yIGVtcHR5IG5hbWVcbiAgaWYgKHByb2plY3ROYW1lID09PSAnJykge1xuICAgIGFsZXJ0KCdQcm9qZWN0IG5hbWUgY2Fubm90IGJlIGVtcHR5LicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIENoZWNrIGZvciBkdXBsaWNhdGUgcHJvamVjdCBuYW1lc1xuICBsZXQgcHJvamVjdEV4aXN0cyA9IHByb2plY3RNYW5hZ2VyLmNoZWNrRHVwbGljYXRlTmFtZShwcm9qZWN0TmFtZSk7XG5cbiAgLy8gY29uc29sZS5sb2coYHByb2plY3RFeGlzdHM6ICR7cHJvamVjdEV4aXN0c31gKTtcbiAgaWYgKHByb2plY3RFeGlzdHMpIHtcbiAgICBhbGVydCgnUHJvamVjdCBuYW1lIGFscmVhZHkgZXhpc3RzLiBDYW5ub3QgaGF2ZSBkdXBsaWNhdGUgbmFtZXMnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBDcmVhdGUgcHJvamVjdFxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdE5hbWUpO1xuXG4gIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdCk7XG4gIC8vIHByb2plY3RNYW5hZ2VyLmxvZ1Byb2plY3RzKCk7XG5cbiAgZGlzcGxheU1hbmFnZXIuY2xlYXJNYWluQ29udGVudCgpO1xuICBkaXNwbGF5TWFuYWdlci51cGRhdGVQcm9qZWN0TGlzdCgpO1xuXG4gIGRpc3BsYXlNYW5hZ2VyLnRvZ2dsZUFkZFByb2plY3RCdG4oKTtcbn1cblxuZXhwb3J0IHsgcHJvamVjdEVkaXRBcHBseSB9O1xuIiwiaW1wb3J0IHsgZGlzcGxheU1hbmFnZXIgfSBmcm9tICcuLi92aWV3L2Rpc3BsYXlNYW5hZ2VyJztcblxuY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0QXJyID0gW107XG5cbiAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgc2VsZWN0ZWQgcHJvamVjdCBpbmRleCwgbnVsbCA9IG5vIHByb2plY3Qgc2VsZWN0ZWRcbiAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdEFyci5wdXNoKHByb2plY3QpO1xuICAgIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RBcnIubGVuZ3RoIC0gMTtcbiAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0ZWQgcHJvamVjdCBpbmRleCcsIHNlbGVjdGVkUHJvamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RBcnIuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBwcm9qZWN0KTtcbiAgICBwcm9qZWN0QXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gcHJvamVjdEFycjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgIHJldHVybiBwcm9qZWN0QXJyW3NlbGVjdGVkUHJvamVjdF07XG4gIH1cblxuICAvLyBGb3IgdGVzdGluZ1xuICBmdW5jdGlvbiBsb2dQcm9qZWN0cygpIHtcbiAgICBjb25zb2xlLnRhYmxlKHByb2plY3RBcnIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvamVjdENyZWF0aW9uTWFuYWdlcigpIHtcbiAgICBkaXNwbGF5TWFuYWdlci5jbGVhck1haW5Db250ZW50KCk7XG4gICAgZGlzcGxheU1hbmFnZXIudG9nZ2xlQWRkUHJvamVjdEJ0bigpO1xuICAgIGRpc3BsYXlNYW5hZ2VyLnNob3dFZGl0RGlhbG9nKCk7XG4gICAgZGlzcGxheU1hbmFnZXIuc2VsZWN0UHJvamVjdElucHV0KCk7XG4gIH1cblxuICAvLyBSZXR1cm4gdHJ1ZSBpZiBuYW1lIGFscmVhZHkgZXhpc3RzXG4gIGZ1bmN0aW9uIGNoZWNrRHVwbGljYXRlTmFtZShuYW1lVG9DaGVjaykge1xuICAgIGxldCBpc0R1cGxpY2F0ZSA9IGZhbHNlO1xuXG4gICAgcHJvamVjdEFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5wcm9qZWN0TmFtZSA9PT0gbmFtZVRvQ2hlY2spIHtcbiAgICAgICAgaXNEdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGlzRHVwbGljYXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRQcm9qZWN0KCkge1xuICAgIHJldHVybiBzZWxlY3RlZFByb2plY3Q7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRTZWxlY3RlZFByb2plY3QoaW50KSB7XG4gICAgc2VsZWN0ZWRQcm9qZWN0ID0gaW50O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRTZWxlY3RlZFByb2plY3QsXG4gICAgc2V0U2VsZWN0ZWRQcm9qZWN0LFxuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBnZXRDdXJyZW50UHJvamVjdCxcbiAgICBsb2dQcm9qZWN0cywgLy8gRm9yIHRlc3RpbmdcbiAgICBwcm9qZWN0Q3JlYXRpb25NYW5hZ2VyLFxuICAgIGNoZWNrRHVwbGljYXRlTmFtZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3RNYW5hZ2VyIH07XG4iLCJmdW5jdGlvbiB0YXNrRmFjdG9yeSh0YXNrVGV4dCkge1xuICBsZXQgdGV4dCA9IHRhc2tUZXh0O1xuXG4gIGxldCBpbkRpc3BsYXlNb2RlID0gZmFsc2U7XG5cbiAgbGV0IGlzRG9uZSA9IGZhbHNlO1xuXG4gIGxldCBkaXNwbGF5RGl2O1xuXG4gIGxldCBlZGl0RGl2O1xuXG4gIHJldHVybiB7XG4gICAgdGV4dCxcbiAgICBpbkRpc3BsYXlNb2RlLFxuICAgIGlzRG9uZSxcbiAgICBkaXNwbGF5RGl2LFxuICAgIGVkaXREaXYsXG4gIH07XG59XG5cbmV4cG9ydCB7IHRhc2tGYWN0b3J5IH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gJy4uL3Byb2plY3RzL3Byb2plY3RNYW5hZ2VyJztcbmltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSAnLi4vdGFza3MvdGFzayc7XG5pbXBvcnQgeyBkaXNwbGF5TWFuYWdlciB9IGZyb20gJy4uL3ZpZXcvZGlzcGxheU1hbmFnZXInO1xuXG5jb25zdCB0YXNrTWFuYWdlciA9ICgoKSA9PiB7XG4gIC8vIFRPRE86IEhhbmRsZSB0YXNrIGNyZWF0aW9uLCBjaGVjayBmb3IgZHVwbGljYXRlc1xuICBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICAgIC8vIFRPRE86IENyZWF0ZSB0YXNrIGRpdiB3aXRoIHRhc2tUZXh0XG5cbiAgICAvLyBDcmVhdGUgdGFza1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrRmFjdG9yeSgnTmV3IHRhc2snKTtcbiAgICB0YXNrLmVkaXREaXYgPSBkaXNwbGF5TWFuYWdlci50YXNrRWRpdERpYWxvZyh0YXNrKTtcblxuICAgIC8vIEFkZCB0YXNrIHRvIHByb2plY3QncyB0YXNrQXJyXG4gICAgcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKS5hZGRUYXNrKHRhc2spO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0VGFza3MoKSk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFzay5lZGl0RGl2KTtcbiAgfVxuXG4gIC8vIFRPRE86IEhhbmRsZSB0YXNrIG1vZGlmaWNhdGlvblxuICBmdW5jdGlvbiBlZGl0VGFzaygpIHt9XG5cbiAgLy8gVE9ETzogSGFuZGxlIHRhc2sgZGVsZXRpb25cbiAgZnVuY3Rpb24gZGVsZXRlVGFzaygpIHt9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUYXNrLFxuICAgIGVkaXRUYXNrLFxuICAgIGRlbGV0ZVRhc2ssXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyB0YXNrTWFuYWdlciB9O1xuIiwiaW1wb3J0IGFkZFNWRyBmcm9tICcuLi9zdmcvYWRkX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Zyc7XG5pbXBvcnQgeyB0YXNrTWFuYWdlciB9IGZyb20gJy4uL3Rhc2tzL3Rhc2tNYW5hZ2VyJztcbmltcG9ydCB7IGRpc3BsYXlNYW5hZ2VyIH0gZnJvbSAnLi9kaXNwbGF5TWFuYWdlcic7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2tCdG4oKSB7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBhZGRTVkcpO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcbiAgYnRuLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICB0YXNrTWFuYWdlci5jcmVhdGVUYXNrKCk7XG4gIH0pO1xuXG4gIHJldHVybiBidG47XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUFkZFRhc2tCdG4gfTtcbiIsImZ1bmN0aW9uIGNsZWFyTWFpbkNvbnRlbnQoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gIFsuLi5tYWluLmNoaWxkTm9kZXNdLmZvckVhY2goKGNoaWxkKSA9PiBtYWluLnJlbW92ZUNoaWxkKGNoaWxkKSk7XG59XG5cbmV4cG9ydCB7IGNsZWFyTWFpbkNvbnRlbnQgfTtcbiIsImltcG9ydCB7IGNsZWFyTWFpbkNvbnRlbnQgfSBmcm9tICcuL2NsZWFyTWFpbkNvbnRlbnQnO1xuaW1wb3J0IHsgcHJvamVjdEVkaXREaWFsb2cgfSBmcm9tICcuL3Byb2plY3RFZGl0RGlhbG9nJztcbmltcG9ydCB7IHNlbGVjdFByb2plY3RJbnB1dCB9IGZyb20gJy4vc2VsZWN0UHJvamVjdElucHV0JztcbmltcG9ydCB7IHNlbGVjdFRhc2tJbnB1dCB9IGZyb20gJy4vc2VsZWN0VGFza0lucHV0JztcbmltcG9ydCB7IHRhc2tEaXNwbGF5IH0gZnJvbSAnLi90YXNrRGlzcGxheSc7XG5pbXBvcnQgeyB0YXNrRWRpdERpYWxvZyB9IGZyb20gJy4vdGFza0VkaXREaWFsb2cnO1xuaW1wb3J0IHsgdG9nZ2xlVGFza0Rpc3BsYXlNb2RlIH0gZnJvbSAnLi90b2dnbGVUYXNrRGlzcGxheU1vZGUnO1xuaW1wb3J0IHsgdXBkYXRlUHJvamVjdENvbnRlbnQgfSBmcm9tICcuL3VwZGF0ZVByb2plY3RDb250ZW50JztcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RMaXN0IH0gZnJvbSAnLi91cGRhdGVQcm9qZWN0TGlzdCc7XG5cbmNvbnN0IGRpc3BsYXlNYW5hZ2VyID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gc2hvd0VkaXREaWFsb2coKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGRpc3BsYXlNYW5hZ2VyLnByb2plY3RFZGl0RGlhbG9nKCdOZXcgcHJvamVjdCcpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFkZFByb2plY3RCdG4oKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgIGFkZFByb2plY3QuZGlzYWJsZWQgPSAhYWRkUHJvamVjdC5kaXNhYmxlZDtcbiAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2RlYWN0aXZhdGVkJyk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVBZGRUYXNrQnRuKCkge1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgICBhZGRUYXNrLmRpc2FibGVkID0gIWFkZFRhc2suZGlzYWJsZWQ7XG4gICAgYWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdkZWFjdGl2YXRlZCcpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93RWRpdERpYWxvZyxcbiAgICB0b2dnbGVBZGRQcm9qZWN0QnRuLFxuICAgIHRvZ2dsZUFkZFRhc2tCdG4sXG4gICAgcHJvamVjdEVkaXREaWFsb2csXG4gICAgY2xlYXJNYWluQ29udGVudCxcbiAgICBzZWxlY3RQcm9qZWN0SW5wdXQsXG4gICAgc2VsZWN0VGFza0lucHV0LFxuICAgIHVwZGF0ZVByb2plY3RMaXN0LFxuICAgIHVwZGF0ZVByb2plY3RDb250ZW50LFxuICAgIHRhc2tEaXNwbGF5LFxuICAgIHRhc2tFZGl0RGlhbG9nLFxuICAgIHRvZ2dsZVRhc2tEaXNwbGF5TW9kZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRpc3BsYXlNYW5hZ2VyIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0RWRpdEFwcGx5IH0gZnJvbSAnLi4vcHJvamVjdHMvcHJvamVjdEVkaXRBcHBseSc7XG5pbXBvcnQgZGVsZXRlU1ZHIGZyb20gJy4uL3N2Zy9kZWxldGVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJztcbmltcG9ydCBkb25lU1ZHIGZyb20gJy4uL3N2Zy9kb25lX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Zyc7XG5cbmZ1bmN0aW9uIHByb2plY3RFZGl0RGlhbG9nKHByb2plY3ROYW1lKSB7XG4gIC8vIFRPRE86IG1vZGlmeSBwcm9qZWN0IG5hbWUgaWYgcHJvamVjdCBleGlzdHMgaW5zdGVhZCBvZiBjcmVhdGluZyBuZXcgb25lXG5cbiAgLy8gVXNlIGFscmVhZHkgbWFkZSBDU1MgZm9yIHRhc2sgZGlhbG9nIHRvIGNyZWF0ZS9lZGl0IHByb2plY3RzXG5cbiAgLy8gVGhlIGRpYWxvZyBjb250YWluZXJcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAvLyBJbnB1dCBmaWVsZFxuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICBpbnB1dC52YWx1ZSA9IHByb2plY3ROYW1lO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgLy8gQXBwbHkgY2hhbmdlcyBidXR0b25cblxuICBjb25zdCBlZGl0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGVkaXRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBkb25lU1ZHKTtcbiAgZWRpdEltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdBcHBseSBjaGFuZ2VzJyk7XG5cbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJbWcpO1xuXG4gIGZ1bmN0aW9uIGFwcGx5Q2hhbmdlcygpIHtcbiAgICBwcm9qZWN0RWRpdEFwcGx5KCk7XG4gIH1cblxuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBhcHBseUNoYW5nZXMoKTtcbiAgfSk7XG5cbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZWRpdCcpO1xuICBlZGl0LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChlZGl0KTtcblxuICAvLyBEZWxldGUgYnV0dG9uXG5cbiAgY29uc3QgZGVsZXRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRlbGV0ZUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRlbGV0ZVNWRyk7XG4gIGRlbGV0ZUltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdEZWxldGUgcHJvamVjdCcpO1xuXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUnKTtcbiAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUltZyk7XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBjb25zb2xlLmxvZygnRGVsZXRlIHByb2plY3QnKTtcbiAgICAvLyBUT0RPOiBpbXBsZW1lbnRcbiAgfVxuXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZGVsZXRlUHJvamVjdCgpO1xuICB9KTtcblxuICBjb25zdCBhY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYWN0aW9uJyk7XG4gIGFjdGlvbi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChhY3Rpb24pO1xuXG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCB7IHByb2plY3RFZGl0RGlhbG9nIH07XG4iLCJmdW5jdGlvbiBzZWxlY3RQcm9qZWN0SW5wdXQoKSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUgPiBpbnB1dCcpO1xuICBpbnB1dC5zZWxlY3QoKTtcbn1cblxuZXhwb3J0IHsgc2VsZWN0UHJvamVjdElucHV0IH07XG4iLCJmdW5jdGlvbiBzZWxlY3RUYXNrSW5wdXQoKSB7XG4gIC8vIFNlbGVjdCBhbGwgdGFza3MgYmVpbmcgZWRpdGVkXG4gIGNvbnN0IHRhc2tJbnB1dHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stdGl0bGUgPiBpbnB1dCcpXTtcbiAgY29uc29sZS5sb2codGFza0lucHV0cyk7XG5cbiAgdGFza0lucHV0cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnNlbGVjdCgpKTtcbn1cblxuZXhwb3J0IHsgc2VsZWN0VGFza0lucHV0IH07XG4iLCJpbXBvcnQgZG9uZVNWRyBmcm9tICcuLi9zdmcvZG9uZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnO1xuaW1wb3J0IGVkaXRTVkcgZnJvbSAnLi4vc3ZnL2VkaXRfc3F1YXJlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Zyc7XG5cbmZ1bmN0aW9uIHRhc2tEaXNwbGF5KHRhc2spIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGV4dDtcbiAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0Jyk7XG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgZWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBlZGl0SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgZWRpdFNWRyk7XG4gIGVkaXRJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnRWRpdCB0YXNrJyk7XG5cbiAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0SW1nKTtcbiAgZWRpdC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgZGl2LmFwcGVuZENoaWxkKGVkaXQpO1xuXG4gIGNvbnN0IGFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFzay1hY3Rpb24nKTtcbiAgY29uc3QgYWN0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gTWFyayB0YXNrIGFzIGRvbmVcbiAgICB0aXRsZS5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrLWNvbXBsZXRlJyk7XG5cbiAgICB0YXNrLmlzRG9uZSA9ICF0YXNrLmlzRG9uZTtcbiAgfSk7XG4gIGNvbnN0IGFjdGlvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBhY3Rpb25JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBkb25lU1ZHKTtcbiAgYWN0aW9uSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ01hcmsgdGFzayBhcyBkb25lJyk7XG4gIGFjdGlvbkJ0bi5hcHBlbmRDaGlsZChhY3Rpb25JbWcpO1xuICBhY3Rpb24uYXBwZW5kQ2hpbGQoYWN0aW9uQnRuKTtcbiAgZGl2LmFwcGVuZENoaWxkKGFjdGlvbik7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IHsgdGFza0Rpc3BsYXkgfTtcbiIsImltcG9ydCBkZWxldGVTVkcgZnJvbSAnLi4vc3ZnL2RlbGV0ZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnO1xuaW1wb3J0IGRvbmVTVkcgZnJvbSAnLi4vc3ZnL2RvbmVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJztcbmltcG9ydCB7IHRhc2tNYW5hZ2VyIH0gZnJvbSAnLi4vdGFza3MvdGFza01hbmFnZXInO1xuaW1wb3J0IHsgZGlzcGxheU1hbmFnZXIgfSBmcm9tICcuL2Rpc3BsYXlNYW5hZ2VyJztcblxuZnVuY3Rpb24gdGFza0VkaXREaWFsb2codGFzaykge1xuICAvLyBUaGUgZGlhbG9nIGNvbnRhaW5lclxuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gIC8vIElucHV0IGZpZWxkXG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gIGlucHV0LnZhbHVlID0gdGFzay50ZXh0O1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgLy8gQXBwbHkgY2hhbmdlcyBidXR0b25cblxuICBjb25zdCBlZGl0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGVkaXRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBkb25lU1ZHKTtcbiAgZWRpdEltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdBcHBseSBjaGFuZ2VzJyk7XG5cbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJbWcpO1xuXG4gIC8vIEFwcGx5IGNoYW5nZXNcbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gVXBkYXRlIHRhc2sgdGV4dCB2YWx1ZVxuICAgIHRhc2sudGV4dCA9IGlucHV0LnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKHRhc2spO1xuXG4gICAgLy8gVXBkYXRlIHRhc2sgZWRpdERpdiAmIHJlcGxhY2UgaXQgd2l0aCBkaXNwbGF5RGl2XG4gICAgdGFzay5kaXNwbGF5RGl2ID0gZGlzcGxheU1hbmFnZXIudGFza0Rpc3BsYXkodGFzayk7XG5cbiAgICAvLyBDYWxsIGRpc3BsYXlNYW5hZ2VyIHRvIHJlcGxhY2UgZWRpdERpdiB3aXRoIGRpc3BsYXlEaXZcbiAgICBkaXNwbGF5TWFuYWdlci50b2dnbGVUYXNrRGlzcGxheU1vZGUodGFzayk7XG4gIH0pO1xuXG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXQnKTtcbiAgZWRpdC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICBkaXYuYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgLy8gRGVsZXRlIGJ1dHRvblxuXG4gIGNvbnN0IGRlbGV0ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBkZWxldGVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBkZWxldGVTVkcpO1xuICBkZWxldGVJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnRGVsZXRlIHByb2plY3QnKTtcblxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsZXRlJyk7XG4gIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJbWcpO1xuXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gVE9ETzogaW1wbGVtZW50XG4gIH0pO1xuXG4gIGNvbnN0IGFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFzay1hY3Rpb24nKTtcbiAgYWN0aW9uLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgZGl2LmFwcGVuZENoaWxkKGFjdGlvbik7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IHsgdGFza0VkaXREaWFsb2cgfTtcbiIsImZ1bmN0aW9uIHRvZ2dsZVRhc2tEaXNwbGF5TW9kZSh0YXNrKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG5cbiAgaWYgKHRhc2suaW5EaXNwbGF5TW9kZSkge1xuICAgIG1haW4ucmVwbGFjZUNoaWxkKHRhc2suZWRpdERpdiwgdGFzay5kaXNwbGF5RGl2KTtcbiAgfVxuXG4gIGlmICghdGFzay5pbkRpc3BsYXlNb2RlKSB7XG4gICAgbWFpbi5yZXBsYWNlQ2hpbGQodGFzay5kaXNwbGF5RGl2LCB0YXNrLmVkaXREaXYpO1xuICB9XG59XG5cbmV4cG9ydCB7IHRvZ2dsZVRhc2tEaXNwbGF5TW9kZSB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tICcuLi9wcm9qZWN0cy9wcm9qZWN0TWFuYWdlcic7XG5pbXBvcnQgeyBjcmVhdGVBZGRUYXNrQnRuIH0gZnJvbSAnLi9hZGRUYXNrQnRuJztcbmltcG9ydCB7IGRpc3BsYXlNYW5hZ2VyIH0gZnJvbSAnLi9kaXNwbGF5TWFuYWdlcic7XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RDb250ZW50KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuXG4gIC8vIENsZWFyIGNvbnRlbnRcbiAgWy4uLm1haW4uY2hpbGROb2Rlc10uZm9yRWFjaCgoY2hpbGQpID0+IG1haW4ucmVtb3ZlQ2hpbGQoY2hpbGQpKTtcblxuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5nZXRTZWxlY3RlZFByb2plY3QoKSk7XG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdEluZGV4ID0gcHJvamVjdE1hbmFnZXIuZ2V0U2VsZWN0ZWRQcm9qZWN0KCk7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKVtzZWxlY3RlZFByb2plY3RJbmRleF07XG4gIGNvbnN0IHRhc2tzID0gY3VycmVudFByb2plY3QuZ2V0VGFza3MoKTtcblxuICAvLyBEaXNwbGF5IHByb2plY3QgbmFtZVxuICBjb25zdCBkaXNwbGF5UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXNwbGF5UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1wcm9qZWN0LWRpc3BsYXknKTtcbiAgZGlzcGxheVByb2plY3QudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgbWFpbi5hcHBlbmRDaGlsZChkaXNwbGF5UHJvamVjdCk7XG5cbiAgLy8gQ3JlYXRlIGFkZCB0YXNrIGJ1dHRvblxuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUFkZFRhc2tCdG4oKSk7XG5cbiAgLy8gVE9ETzogcmVuZGVyIHRhc2tzXG4gIHByb2plY3RNYW5hZ2VyXG4gICAgLmdldEN1cnJlbnRQcm9qZWN0KClcbiAgICAuZ2V0VGFza3MoKVxuICAgIC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBtYWluLmFwcGVuZENoaWxkKGRpc3BsYXlNYW5hZ2VyLnRhc2tEaXNwbGF5KHRhc2spKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgdXBkYXRlUHJvamVjdENvbnRlbnQgfTtcbiIsImltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSAnLi4vcHJvamVjdHMvcHJvamVjdE1hbmFnZXInO1xuaW1wb3J0IHsgdXBkYXRlUHJvamVjdENvbnRlbnQgfSBmcm9tICcuL3VwZGF0ZVByb2plY3RDb250ZW50JztcblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdExpc3QoKSB7XG4gIGNvbnN0IHByb2plY3RzQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1ib2R5Jyk7XG5cbiAgLy8gQ2xlYXIgZXhpc3RpbmcgcHJvamVjdHMgYmVmb3JlIGFwcGVuZGluZyB0aGUgb25lcyBpbiB0aGUgbGlzdFxuICBbLi4ucHJvamVjdHNCb2R5LmNoaWxkTm9kZXNdLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgaWYgKGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKSB7XG4gICAgICBwcm9qZWN0c0JvZHkucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gbnVsbCA9IG5vIHByb2plY3RzIGluIGxpc3RcbiAgaWYgKHByb2plY3RNYW5hZ2VyLmdldFNlbGVjdGVkUHJvamVjdCAhPT0gbnVsbCkge1xuICAgIC8vIFRPRE86IG91dHNvdXJjZSBkaXYgY3JlYXRpb25cblxuICAgIC8vIEFwcGVuZCBleGlzdGluZyBwcm9qZWN0cyB0byB0aGUgcHJvamVjdCBsaXN0XG4gICAgcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICBkaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3ROYW1lO1xuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgLy8gRmluZCBpbmRleCBvZiB0aGUgY2xpY2tlZCBwcm9qZWN0XG4gICAgICAgIC8vIFVzZSBuYW1lIGFzIGEgdW5pcXVlIGlkXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgbGV0IGNsaWNrZWRJbmRleDtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgIGlmIChwcm9qZWN0LnByb2plY3ROYW1lID09PSBlLnRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgY2xpY2tlZEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBwcm9qZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RNYW5hZ2VyLnNldFNlbGVjdGVkUHJvamVjdChjbGlja2VkSW5kZXgpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHByb2plY3RzQm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIHNlbGVjdGVkIHByb2plY3QgY2xhc3NcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFsuLi5wcm9qZWN0c0JvZHkucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKV07XG4gICAgcHJvamVjdExpc3RbcHJvamVjdE1hbmFnZXIuZ2V0U2VsZWN0ZWRQcm9qZWN0KCldLmNsYXNzTGlzdC5hZGQoXG4gICAgICAnc2VsZWN0ZWQtcHJvamVjdCdcbiAgICApO1xuXG4gICAgLy8gUmVuZGVyIHByb2plY3QncyBjb250ZW50XG4gICAgdXBkYXRlUHJvamVjdENvbnRlbnQoKTtcbiAgfVxufVxuXG5leHBvcnQgeyB1cGRhdGVQcm9qZWN0TGlzdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXRpYWxpemVQYWdlIH0gZnJvbSAnLi9pbml0L2luaXRpYWwnO1xuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuaW5pdGlhbGl6ZVBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==