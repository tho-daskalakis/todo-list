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
const projectFactory = (name = 'New project') => {
  const taskArr = [];

  let div;

  let projectName = name;

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
    div,
    getTasks,
    projectName,
    addTask,
    removeTask,
    logTasks,
  };
};




/***/ }),

/***/ "./src/projects/projectClicked.js":
/*!****************************************!*\
  !*** ./src/projects/projectClicked.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectClicked": () => (/* binding */ projectClicked)
/* harmony export */ });
/* harmony import */ var _view_displayManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/displayManager */ "./src/view/displayManager.js");
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager */ "./src/projects/projectManager.js");



function projectClicked(e, project) {
  //   console.log('clicked%', project.projectName);
  // Change selected project

  // Find index of the clicked project
  // Use name as a unique id
  const projects = _projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager.getProjects();
  let clickedIndex;
  projects.forEach((project) => {
    if (project.projectName === e.target.textContent) {
      clickedIndex = projects.findIndex((element) => element === project);
    }
  });

  _projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager.setSelectedProject(clickedIndex);

  _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.highlightSelectedProject();

  // Display related content (tasks)
  _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.updateProjectContent();
}




/***/ }),

/***/ "./src/projects/projectDblClicked.js":
/*!*******************************************!*\
  !*** ./src/projects/projectDblClicked.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectDblClicked": () => (/* binding */ projectDblClicked)
/* harmony export */ });
/* harmony import */ var _view_displayManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/displayManager */ "./src/view/displayManager.js");


function projectDblClicked(project) {
  // console.log('dbl clicked', project.projectName);

  _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.toggleAddProjectBtn();
  _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.showEditDialog(project);
  _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.selectProjectInput();
}




/***/ }),

/***/ "./src/projects/projectDelete.js":
/*!***************************************!*\
  !*** ./src/projects/projectDelete.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectDelete": () => (/* binding */ projectDelete)
/* harmony export */ });
/* harmony import */ var _view_displayManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/displayManager */ "./src/view/displayManager.js");
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager */ "./src/projects/projectManager.js");



function projectDelete(project) {
  //   console.log('delete', project.projectName);
  _projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager.removeProject(project);

  // Check for remaining projects
  if (_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager.getProjects().length === 0) {
    // No projects, set index to null
    _projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager.setSelectedProject(null);
    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.updateProjectList();
    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.toggleAddProjectBtn();
  } else {
    // Select first project
    _projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager.setSelectedProject(0);
    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.updateProjectList();
    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.highlightSelectedProject();
    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.updateProjectContent();
    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.toggleAddProjectBtn();
  }
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
/* harmony import */ var _view_projectDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/projectDisplay */ "./src/view/projectDisplay.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/projects/project.js");




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

    // Create project
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_2__.projectFactory)();
    addProject(project);
    setSelectedProject(projectArr.length - 1);

    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.showEditDialog(project);
    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.selectProjectInput();
  }

  // Return true if name already exists
  function checkDuplicateName(project, inputValue) {
    let isDuplicate = false;

    projectArr.forEach((element) => {
      if (element !== project && element.projectName === inputValue) {
        isDuplicate = true;
      }
    });

    return isDuplicate;
  }

  function checkEmptyName(nameToCheck) {
    if (nameToCheck === '') return true;

    return false;
  }

  function getSelectedProject() {
    return selectedProject;
  }

  function setSelectedProject(int) {
    selectedProject = int;
  }

  function applyChanges(project) {
    // console.log(project);
    // console.table(projectArr);
    project.div = (0,_view_projectDisplay__WEBPACK_IMPORTED_MODULE_1__.projectDisplay)(project);
    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.highlightSelectedProject();
    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.updateProjectList();
    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.updateProjectContent();
    _view_displayManager__WEBPACK_IMPORTED_MODULE_0__.displayManager.toggleAddProjectBtn();
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
    checkEmptyName,
    applyChanges,
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

  // TODO: Handle task deletion
  function deleteTask(task) {
    const project = _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getCurrentProject();
    project.removeTask(task);
    _view_displayManager__WEBPACK_IMPORTED_MODULE_2__.displayManager.updateProjectContent();
  }

  return {
    createTask,
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
/* harmony import */ var _highlightSelectedProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlightSelectedProject */ "./src/view/highlightSelectedProject.js");
/* harmony import */ var _projectEditDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectEditDialog */ "./src/view/projectEditDialog.js");
/* harmony import */ var _selectProjectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectProjectInput */ "./src/view/selectProjectInput.js");
/* harmony import */ var _selectTaskInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectTaskInput */ "./src/view/selectTaskInput.js");
/* harmony import */ var _taskDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskDisplay */ "./src/view/taskDisplay.js");
/* harmony import */ var _taskEditDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskEditDialog */ "./src/view/taskEditDialog.js");
/* harmony import */ var _toggleTaskDisplayMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toggleTaskDisplayMode */ "./src/view/toggleTaskDisplayMode.js");
/* harmony import */ var _updateProjectContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateProjectContent */ "./src/view/updateProjectContent.js");
/* harmony import */ var _updateProjectList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./updateProjectList */ "./src/view/updateProjectList.js");











const displayManager = (() => {
  function showEditDialog(project) {
    (0,_clearMainContent__WEBPACK_IMPORTED_MODULE_0__.clearMainContent)();
    const main = document.querySelector('.main-content');
    main.appendChild((0,_projectEditDialog__WEBPACK_IMPORTED_MODULE_2__.projectEditDialog)(project));
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
    projectEditDialog: _projectEditDialog__WEBPACK_IMPORTED_MODULE_2__.projectEditDialog,
    clearMainContent: _clearMainContent__WEBPACK_IMPORTED_MODULE_0__.clearMainContent,
    selectProjectInput: _selectProjectInput__WEBPACK_IMPORTED_MODULE_3__.selectProjectInput,
    selectTaskInput: _selectTaskInput__WEBPACK_IMPORTED_MODULE_4__.selectTaskInput,
    updateProjectList: _updateProjectList__WEBPACK_IMPORTED_MODULE_9__.updateProjectList,
    updateProjectContent: _updateProjectContent__WEBPACK_IMPORTED_MODULE_8__.updateProjectContent,
    taskDisplay: _taskDisplay__WEBPACK_IMPORTED_MODULE_5__.taskDisplay,
    taskEditDialog: _taskEditDialog__WEBPACK_IMPORTED_MODULE_6__.taskEditDialog,
    toggleTaskDisplayMode: _toggleTaskDisplayMode__WEBPACK_IMPORTED_MODULE_7__.toggleTaskDisplayMode,
    highlightSelectedProject: _highlightSelectedProject__WEBPACK_IMPORTED_MODULE_1__.highlightSelectedProject,
  };
})();




/***/ }),

/***/ "./src/view/highlightSelectedProject.js":
/*!**********************************************!*\
  !*** ./src/view/highlightSelectedProject.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlightSelectedProject": () => (/* binding */ highlightSelectedProject)
/* harmony export */ });
/* harmony import */ var _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/projectManager */ "./src/projects/projectManager.js");


function highlightSelectedProject() {
  // Update selected project class
  _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getProjects().forEach((project) => {
    project.div.classList.remove('selected-project');
  });
  _projects_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getCurrentProject().div.classList.add('selected-project');
}




/***/ }),

/***/ "./src/view/projectDisplay.js":
/*!************************************!*\
  !*** ./src/view/projectDisplay.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectDisplay": () => (/* binding */ projectDisplay)
/* harmony export */ });
/* harmony import */ var _projects_projectClicked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/projectClicked */ "./src/projects/projectClicked.js");
/* harmony import */ var _projects_projectDblClicked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects/projectDblClicked */ "./src/projects/projectDblClicked.js");



function projectDisplay(project) {
  const div = document.createElement('div');
  div.classList.add('project');
  div.textContent = project.projectName;

  div.addEventListener('click', (e) => {
    (0,_projects_projectClicked__WEBPACK_IMPORTED_MODULE_0__.projectClicked)(e, project);
  });

  div.addEventListener('dblclick', (e) => {
    (0,_projects_projectDblClicked__WEBPACK_IMPORTED_MODULE_1__.projectDblClicked)(project);
  });

  return div;
}




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
/* harmony import */ var _projects_projectDelete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/projectDelete */ "./src/projects/projectDelete.js");
/* harmony import */ var _projects_projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects/projectManager */ "./src/projects/projectManager.js");
/* harmony import */ var _svg_delete_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/delete_FILL0_wght400_GRAD0_opsz48.svg */ "./src/svg/delete_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _svg_done_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/done_FILL0_wght400_GRAD0_opsz48.svg */ "./src/svg/done_FILL0_wght400_GRAD0_opsz48.svg");





function projectEditDialog(project) {
  // TODO: modify project name if project exists instead of creating new one

  // Use already made CSS for task dialog to create/edit projects

  // The dialog container
  const div = document.createElement('div');
  div.classList.add('task');

  // Input field
  const input = document.createElement('input');
  input.value = project.projectName;

  const title = document.createElement('div');
  title.classList.add('task-title');
  title.appendChild(input);
  div.appendChild(title);

  // Apply changes button

  const editImg = document.createElement('img');
  editImg.setAttribute('src', _svg_done_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__);
  editImg.setAttribute('alt', 'Apply changes');

  const editBtn = document.createElement('button');
  editBtn.appendChild(editImg);

  editBtn.addEventListener('click', (e) => {
    if (_projects_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager.checkEmptyName(input.value)) {
      alert('Project name cannot be empty.');
      return;
    }

    if (_projects_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager.checkDuplicateName(project, input.value)) {
      alert('Project name already exists. Cannot have duplicate project names');
      return;
    }

    project.projectName = input.value;
    // Call projectManager to handle project edit
    _projects_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager.applyChanges(project);
  });

  const edit = document.createElement('div');
  edit.classList.add('task-edit');
  edit.appendChild(editBtn);

  div.appendChild(edit);

  // Delete button
  const deleteImg = document.createElement('img');
  deleteImg.setAttribute('src', _svg_delete_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__);
  deleteImg.setAttribute('alt', 'Delete project');

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('task-delete');
  deleteBtn.appendChild(deleteImg);

  deleteBtn.addEventListener('click', (e) => {
    (0,_projects_projectDelete__WEBPACK_IMPORTED_MODULE_0__.projectDelete)(project);
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
/* harmony import */ var _displayManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayManager */ "./src/view/displayManager.js");




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
  editBtn.addEventListener('click', (e) => {
    // Update editDiv
    task.editDiv = _displayManager__WEBPACK_IMPORTED_MODULE_2__.displayManager.taskEditDialog(task);

    // Switch to edit mode
    _displayManager__WEBPACK_IMPORTED_MODULE_2__.displayManager.toggleTaskDisplayMode(task);
  });
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

    // Update task displayDiv
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

  // Delete task
  deleteBtn.addEventListener('click', (e) => {
    _tasks_taskManager__WEBPACK_IMPORTED_MODULE_2__.taskManager.deleteTask(task);
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

  task.inDisplayMode = !task.inDisplayMode;
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
      if (task.inDisplayMode) {
        main.appendChild(task.displayDiv);
      } else {
        main.appendChild(task.editDiv);
      }
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
/* harmony import */ var _init_mainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../init/mainContent */ "./src/init/mainContent.js");
/* harmony import */ var _projects_projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects/projectManager */ "./src/projects/projectManager.js");



function updateProjectList() {
  const projectsBody = document.querySelector('.projects-body');

  // Clear existing projects before appending the ones in the list
  [...projectsBody.childNodes].forEach((child) => {
    if (child.classList.contains('project')) {
      projectsBody.removeChild(child);
    }
  });

  // null = no projects in list
  if (_projects_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager.getSelectedProject() !== null) {
    // Append existing projects to the project list
    _projects_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager.getProjects().forEach((project) => {
      let div = project.div;
      projectsBody.appendChild(div);
    });
  } else {
    // No projects, render default main page
    const main = document.querySelector('.main-content');
    const holyGrail = document.querySelector('.holy-grail');
    holyGrail.replaceChild((0,_init_mainContent__WEBPACK_IMPORTED_MODULE_0__.createMainContent)(), main);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQ3pCOztBQUV2Qiw2REFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5pdC9hZGRQcm9qZWN0QnRuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbml0L2luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luaXQvbWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luaXQvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5pdC90b3BiYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzL3Byb2plY3RDbGlja2VkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy9wcm9qZWN0RGJsQ2xpY2tlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMvcHJvamVjdERlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzL3Rhc2tNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L2FkZFRhc2tCdG4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvY2xlYXJNYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9kaXNwbGF5TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9oaWdobGlnaHRTZWxlY3RlZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvcHJvamVjdERpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvcHJvamVjdEVkaXREaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvc2VsZWN0UHJvamVjdElucHV0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3NlbGVjdFRhc2tJbnB1dC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90YXNrRWRpdERpYWxvZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2dnbGVUYXNrRGlzcGxheU1vZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdXBkYXRlUHJvamVjdENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdXBkYXRlUHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvTnVuaXRvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ29sb3IgcGFsZXR0ZSAqL1xcbi8qIEZvbnRzICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTnVuaXRvO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLyogTWl4aW5zICovXFxuLyogU3R5bGVzICovXFxuaHRtbCxcXG5ib2R5LFxcbi5jb250YWluZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXNpemU6IG1pbig0dm1pbiwgMi44dm1heCk7XFxufVxcblxcbi5ob2x5LWdyYWlsIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA5MCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxufVxcbi5ob2x5LWdyYWlsID4gKiB7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcbi5ob2x5LWdyYWlsID4gLnRvcC1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0YjhhNjtcXG4gIGNvbG9yOiAjY2NmYmYxO1xcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDM4cHg7XFxuICBmb250LXNpemU6IG1pbig3dm1pbiwgNXZtYXgpO1xcbiAgZ3JpZC1yb3c6IDEvc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhvbHktZ3JhaWwgPiAuc2lkZS1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNWU1OTtcXG4gIGNvbG9yOiAjY2NmYmYxO1xcbiAgZ3JpZC1yb3c6IDIvc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG59XFxuLmhvbHktZ3JhaWwgPiAubWFpbi1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGZkZmE7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGdyaWQtcm93OiAyL3NwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiAyL3NwYW4gMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza3MtY2xpcGFydCB7XFxuICB3aWR0aDogY2xhbXAoMTIwcHgsIDMwJSwgMjIwcHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgcGFkZGluZzogMiU7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNGI4YTY7XFxufVxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNTMsIDI1MCwgMC42KTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByb2plY3Q6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiBjbGFtcCgyNHB4LCA1dm1pbiwgNDhweCk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkZC1wcm9qZWN0IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OWY2ZTQ7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbi5hZGQtcHJvamVjdCBpbWc6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0cy10aXRsZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucHJvamVjdHMtYm9keSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogb3ZlcmxheTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudDtcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjUzLCAyNTAsIDAuOSk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5zZWxlY3RlZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNTMsIDI1MCwgMC45KTtcXG59XFxuXFxuLnNlbGVjdGVkLXByb2plY3QtZGlzcGxheSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gIHdpZHRoOiBjbGFtcCgyMHB4LCA0dm1heCwgNDRweCk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkZC10YXNrIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OWY2ZTQ7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBncmF5O1xcbn1cXG4uYWRkLXRhc2sgaW1nOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4udGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbig0dm1heCwgNTBweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW4obWF4KDM0cHgsIDR2bWF4KSwgMTA0cHgpO1xcbn1cXG4udGFzayA+ICoge1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG4udGFzayAudGFzay10aXRsZSB7XFxuICBjb2xvcjogIzExNWU1OTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBncmlkLXJvdzogMS9zcGFuIDE7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2sgLnRhc2stdGl0bGUgPiBpbnB1dCB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBmb250LXNpemU6IG1pbig0dm1pbiwgMi44dm1heCk7XFxufVxcbi50YXNrIC50YXNrLWNvbXBsZXRlIHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDtcXG59XFxuLnRhc2sgLnRhc2stZWRpdCB7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxuICBncmlkLXJvdzogMS9zcGFuIDI7XFxuICBncmlkLWNvbHVtbjogMi9zcGFuIDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzayAudGFzay1lZGl0ID4gYnV0dG9uIHtcXG4gIHdpZHRoOiBjbGFtcCgyMHB4LCA0dm1heCwgNDRweCk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NzcwNjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2sgLnRhc2stZWRpdCA+IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrIC50YXNrLWVkaXQgPiBidXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi50YXNrIC50YXNrLWVkaXQgPiBidXR0b24gPiBpbWcge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG4udGFzayAudGFzay1hY3Rpb24ge1xcbiAgcGFkZGluZzogMDtcXG4gIGdyaWQtcm93OiAyL3NwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrIC50YXNrLWFjdGlvbiA+IGJ1dHRvbiB7XFxuICB3aWR0aDogY2xhbXAoMjBweCwgNHZtYXgsIDQ0cHgpO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNGI4YTY7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrIC50YXNrLWFjdGlvbiA+IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrIC50YXNrLWFjdGlvbiA+IGJ1dHRvbjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnRhc2sgLnRhc2stYWN0aW9uID4gYnV0dG9uID4gaW1nIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG59XFxuLnRhc2sgLnRhc2stYWN0aW9uID4gYnV0dG9uLnRhc2stZGVsZXRlIHtcXG4gIHdpZHRoOiBjbGFtcCgyMHB4LCA0dm1heCwgNDRweCk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzayAudGFzay1hY3Rpb24gPiBidXR0b24udGFzay1kZWxldGU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzayAudGFzay1hY3Rpb24gPiBidXR0b24udGFzay1kZWxldGU6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi50YXNrIC50YXNrLWFjdGlvbiA+IGJ1dHRvbi50YXNrLWRlbGV0ZSA+IGltZyB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbi5kZWFjdGl2YXRlZCBpbWcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBQTtBQWtCQSxVQUFBO0FBRUE7RUFDRSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWpCRjtBQW9CQSxXQUFBO0FBY0EsV0FBQTtBQUVBOzs7RUFHRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0UsWUFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBbENGO0FBb0NFO0VBQ0UsWUFBQTtBQWxDSjtBQXFDRTtFQUNFLHlCQS9ETztFQWdFUCxjQWxFTztFQW1FUCwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBckNKO0FBd0NFO0VBQ0UseUJBOUVPO0VBK0VQLGNBbEZPO0VBb0ZQLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBeENKO0FBMkNFO0VBQ0UseUJBOUZNO0VBK0ZOLGNBQUE7RUFFQSxrQkFBQTtFQUNB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L05FO0VBQ0UsZUFBQTtBQWlPSjtBQXdETTtFQUNFLGdCQUFBO0FBdERSO0FBeURNO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUF2RFI7QUEyREk7RUExU0YsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQXlTSSx3QkEzVFk7RUE0VFosa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdkROO0FBeFBFO0VBQ0UsZUFBQTtBQTBQSjtBQXNETTtFQUNFLGdCQUFBO0FBcERSO0FBdURNO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFyRFI7O0FBNERFO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQXpESlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDb2xvciBwYWxldHRlICovXFxuXFxuJHRlYWwtNTA6ICNmMGZkZmE7XFxuJHRlYWwtMTAwOiAjY2NmYmYxO1xcbiR0ZWFsLTIwMDogIzk5ZjZlNDtcXG4kdGVhbC01MDA6ICMxNGI4YTY7XFxuJHRlYWwtODAwOiAjMTE1ZTU5O1xcblxcbiRhbWJlci02MDA6ICNkOTc3MDY7XFxuXFxuJHRvcC1iYXItYmc6ICR0ZWFsLTUwMDtcXG4kc2lkZS1iYXItYmc6ICR0ZWFsLTgwMDtcXG4kbWFpbi1jb250ZW50LWJnOiAkdGVhbC01MDtcXG5cXG4kZWRpdC10YXNrLWJ0bjogJGFtYmVyLTYwMDtcXG4kYWN0aW9uLXRhc2stYnRuOiAkdGVhbC01MDA7XFxuJGRlbGV0ZS10YXNrLWJ0bjogdG9tYXRvO1xcblxcbi8qIEZvbnRzICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTnVuaXRvO1xcbiAgc3JjOiB1cmwoLi9mb250cy9OdW5pdG8tUmVndWxhci50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyogTWl4aW5zICovXFxuXFxuQG1peGluIGNpcmN1bGFyLWJ0biB7XFxuICB3aWR0aDogY2xhbXAoMjBweCwgNHZtYXgsIDQ0cHgpO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblxcbi8qIFN0eWxlcyAqL1xcblxcbmh0bWwsXFxuYm9keSxcXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1zaXplOiBtaW4oNHZtaW4sIDIuOHZtYXgpO1xcbn1cXG5cXG4uaG9seS1ncmFpbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgOTAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xcblxcbiAgJiA+ICoge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICB9XFxuXFxuICAmID4gLnRvcC1iYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9wLWJhci1iZztcXG4gICAgY29sb3I6ICR0ZWFsLTEwMDtcXG4gICAgdGV4dC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjgpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIGZvbnQtc2l6ZTogbWluKDd2bWluLCA1dm1heCk7XFxuXFxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAmID4gLnNpZGUtYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWwtODAwO1xcbiAgICBjb2xvcjogJHRlYWwtMTAwO1xcblxcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbiAgfVxcblxcbiAgJiA+IC5tYWluLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb250ZW50LWJnO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAgZ3JpZC1yb3c6IDIgLyBzcGFuIDE7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4udGFza3MtY2xpcGFydCB7XFxuICB3aWR0aDogY2xhbXAoMTIwcHgsIDMwJSwgMjIwcHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgcGFkZGluZzogMiU7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWwtNTAwO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkdGVhbC01MCwgJGFscGhhOiAwLjYpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gICY6YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IGNsYW1wKDI0cHgsIDV2bWluLCA0OHB4KTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWwtMjAwO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKCRjb2xvcjogYmxhY2ssICRhbHBoYTogMC41KTtcXG5cXG4gICAgJjphY3RpdmUge1xcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnByb2plY3RzLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5wcm9qZWN0cy1ib2R5IHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBvdmVybGF5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5zZWxlY3RlZC1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkdGVhbC01MCwgJGFscGhhOiAwLjkpO1xcbiAgY29sb3I6IGJsYWNrO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkdGVhbC01MCwgJGFscGhhOiAwLjkpO1xcbiAgfVxcbn1cXG5cXG4uc2VsZWN0ZWQtcHJvamVjdC1kaXNwbGF5IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgQGluY2x1ZGUgY2lyY3VsYXItYnRuKCk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWwtMjAwO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBncmF5O1xcblxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4udGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IGdyYXksICRhbHBoYTogMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4oNHZtYXgsIDUwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluKG1heCgzNHB4LCA0dm1heCksIDEwNHB4KTtcXG5cXG4gICYgPiAqIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgfVxcblxcbiAgLnRhc2stdGl0bGUge1xcbiAgICBjb2xvcjogJHRlYWwtODAwO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICYgPiBpbnB1dCB7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBoZWlnaHQ6IDYwJTtcXG4gICAgICBmb250LXNpemU6IG1pbig0dm1pbiwgMi44dm1heCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50YXNrLWNvbXBsZXRlIHtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XFxuICB9XFxuXFxuICAudGFzay1lZGl0IHtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxuXFxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICYgPiBidXR0b24ge1xcbiAgICAgIEBpbmNsdWRlIGNpcmN1bGFyLWJ0bigpO1xcblxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRlZGl0LXRhc2stYnRuO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuMjUpO1xcblxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAmID4gaW1nIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50YXNrLWFjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICYgPiBidXR0b24ge1xcbiAgICAgIEBpbmNsdWRlIGNpcmN1bGFyLWJ0bigpO1xcblxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY3Rpb24tdGFzay1idG47XFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjI1KTtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgJiA+IGltZyB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYgPiBidXR0b24udGFzay1kZWxldGUge1xcbiAgICAgIEBpbmNsdWRlIGNpcmN1bGFyLWJ0bigpO1xcblxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWxldGUtdGFzay1idG47XFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAwLjI1KTtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICB9XFxuXFxuICAgICAgJiA+IGltZyB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5kZWFjdGl2YXRlZCB7XFxuICBpbWcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tICcuLi9wcm9qZWN0cy9wcm9qZWN0TWFuYWdlcic7XG5pbXBvcnQgYWRkU1ZHIGZyb20gJy4uL3N2Zy9hZGRfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJztcblxuZnVuY3Rpb24gY3JlYXRlQWRkUHJvamVjdEJ0bigpIHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFkZFNWRyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdDcmVhdGUgcHJvamVjdCcpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QnKTtcblxuICBidXR0b24uYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAvLyBIYW5kbGUgcHJvamVjdCBjcmVhdGlvblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHByb2plY3RNYW5hZ2VyLnByb2plY3RDcmVhdGlvbk1hbmFnZXIoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQWRkUHJvamVjdEJ0biB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlTWFpbkNvbnRlbnQgfSBmcm9tICcuL21haW5Db250ZW50JztcbmltcG9ydCB7IGNyZWF0ZVNpZGVCYXIgfSBmcm9tICcuL3NpZGViYXInO1xuaW1wb3J0IHsgY3JlYXRlVG9wQmFyIH0gZnJvbSAnLi90b3BiYXInO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplUGFnZSgpIHtcbiAgY29uc3QgaG9seUdyYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbHlHcmFpbC5jbGFzc0xpc3QuYWRkKCdob2x5LWdyYWlsJyk7XG5cbiAgaG9seUdyYWlsLmFwcGVuZENoaWxkKGNyZWF0ZVRvcEJhcigpKTtcbiAgaG9seUdyYWlsLmFwcGVuZENoaWxkKGNyZWF0ZU1haW5Db250ZW50KCkpO1xuICBob2x5R3JhaWwuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZUJhcigpKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob2x5R3JhaWwpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsaXplUGFnZSB9O1xuIiwiaW1wb3J0IHRhc2tzU1ZHIGZyb20gJy4uL3N2Zy9jbGlwYm9hcmQtY2hlY2suc3ZnJztcblxuZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZCcpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gJ1RvIGdldCBzdGFydGVkLCBjcmVhdGUgYSBuZXcgcHJvamVjdCc7XG4gIG1haW4uYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5jbGFzc0xpc3QuYWRkKCd0YXNrcy1jbGlwYXJ0Jyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRhc2tzU1ZHKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1Rhc2tzIGNsaXBhcnQnKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5leHBvcnQgeyBjcmVhdGVNYWluQ29udGVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQWRkUHJvamVjdEJ0biB9IGZyb20gJy4vYWRkUHJvamVjdEJ0bic7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVCYXIoKSB7XG4gIC8vIFNpZGUtYmFyIHRleHRcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLXRpdGxlJyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXG4gIC8vIENyZWF0ZSBidXR0b24gdG8gYWRkIHByb2plY3RzXG4gIGNvbnN0IGFkZFByb2plY3QgPSBjcmVhdGVBZGRQcm9qZWN0QnRuKCk7XG5cbiAgY29uc3QgcHJvamVjdHNCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RzQm9keS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1ib2R5Jyk7XG5cbiAgcHJvamVjdHNCb2R5LmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG4gIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdzaWRlLWJhcicpO1xuXG4gIHNpZGVCYXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIHNpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNCb2R5KTtcblxuICByZXR1cm4gc2lkZUJhcjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU2lkZUJhciB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlVG9wQmFyKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b3AtYmFyJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ1RvZG8gYXBwJztcblxuICByZXR1cm4gdGl0bGU7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvcEJhciB9O1xuIiwiY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSA9ICdOZXcgcHJvamVjdCcpID0+IHtcbiAgY29uc3QgdGFza0FyciA9IFtdO1xuXG4gIGxldCBkaXY7XG5cbiAgbGV0IHByb2plY3ROYW1lID0gbmFtZTtcblxuICBmdW5jdGlvbiBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGFza0FycjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICAgIHRhc2tBcnIucHVzaCh0YXNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFzaykge1xuICAgIGNvbnN0IGluZGV4ID0gdGFza0Fyci5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IHRhc2spO1xuICAgIHRhc2tBcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIC8vIEZvciB0ZXN0aW5nXG4gIGZ1bmN0aW9uIGxvZ1Rhc2tzKCkge1xuICAgIGNvbnNvbGUudGFibGUodGFza0Fycik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRpdixcbiAgICBnZXRUYXNrcyxcbiAgICBwcm9qZWN0TmFtZSxcbiAgICBhZGRUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gICAgbG9nVGFza3MsXG4gIH07XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0RmFjdG9yeSB9O1xuIiwiaW1wb3J0IHsgZGlzcGxheU1hbmFnZXIgfSBmcm9tICcuLi92aWV3L2Rpc3BsYXlNYW5hZ2VyJztcbmltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSAnLi9wcm9qZWN0TWFuYWdlcic7XG5cbmZ1bmN0aW9uIHByb2plY3RDbGlja2VkKGUsIHByb2plY3QpIHtcbiAgLy8gICBjb25zb2xlLmxvZygnY2xpY2tlZCUnLCBwcm9qZWN0LnByb2plY3ROYW1lKTtcbiAgLy8gQ2hhbmdlIHNlbGVjdGVkIHByb2plY3RcblxuICAvLyBGaW5kIGluZGV4IG9mIHRoZSBjbGlja2VkIHByb2plY3RcbiAgLy8gVXNlIG5hbWUgYXMgYSB1bmlxdWUgaWRcbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpO1xuICBsZXQgY2xpY2tlZEluZGV4O1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKHByb2plY3QucHJvamVjdE5hbWUgPT09IGUudGFyZ2V0LnRleHRDb250ZW50KSB7XG4gICAgICBjbGlja2VkSW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IHByb2plY3QpO1xuICAgIH1cbiAgfSk7XG5cbiAgcHJvamVjdE1hbmFnZXIuc2V0U2VsZWN0ZWRQcm9qZWN0KGNsaWNrZWRJbmRleCk7XG5cbiAgZGlzcGxheU1hbmFnZXIuaGlnaGxpZ2h0U2VsZWN0ZWRQcm9qZWN0KCk7XG5cbiAgLy8gRGlzcGxheSByZWxhdGVkIGNvbnRlbnQgKHRhc2tzKVxuICBkaXNwbGF5TWFuYWdlci51cGRhdGVQcm9qZWN0Q29udGVudCgpO1xufVxuXG5leHBvcnQgeyBwcm9qZWN0Q2xpY2tlZCB9O1xuIiwiaW1wb3J0IHsgZGlzcGxheU1hbmFnZXIgfSBmcm9tICcuLi92aWV3L2Rpc3BsYXlNYW5hZ2VyJztcblxuZnVuY3Rpb24gcHJvamVjdERibENsaWNrZWQocHJvamVjdCkge1xuICAvLyBjb25zb2xlLmxvZygnZGJsIGNsaWNrZWQnLCBwcm9qZWN0LnByb2plY3ROYW1lKTtcblxuICBkaXNwbGF5TWFuYWdlci50b2dnbGVBZGRQcm9qZWN0QnRuKCk7XG4gIGRpc3BsYXlNYW5hZ2VyLnNob3dFZGl0RGlhbG9nKHByb2plY3QpO1xuICBkaXNwbGF5TWFuYWdlci5zZWxlY3RQcm9qZWN0SW5wdXQoKTtcbn1cblxuZXhwb3J0IHsgcHJvamVjdERibENsaWNrZWQgfTtcbiIsImltcG9ydCB7IGRpc3BsYXlNYW5hZ2VyIH0gZnJvbSAnLi4vdmlldy9kaXNwbGF5TWFuYWdlcic7XG5pbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gJy4vcHJvamVjdE1hbmFnZXInO1xuXG5mdW5jdGlvbiBwcm9qZWN0RGVsZXRlKHByb2plY3QpIHtcbiAgLy8gICBjb25zb2xlLmxvZygnZGVsZXRlJywgcHJvamVjdC5wcm9qZWN0TmFtZSk7XG4gIHByb2plY3RNYW5hZ2VyLnJlbW92ZVByb2plY3QocHJvamVjdCk7XG5cbiAgLy8gQ2hlY2sgZm9yIHJlbWFpbmluZyBwcm9qZWN0c1xuICBpZiAocHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKS5sZW5ndGggPT09IDApIHtcbiAgICAvLyBObyBwcm9qZWN0cywgc2V0IGluZGV4IHRvIG51bGxcbiAgICBwcm9qZWN0TWFuYWdlci5zZXRTZWxlY3RlZFByb2plY3QobnVsbCk7XG4gICAgZGlzcGxheU1hbmFnZXIudXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICBkaXNwbGF5TWFuYWdlci50b2dnbGVBZGRQcm9qZWN0QnRuKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gU2VsZWN0IGZpcnN0IHByb2plY3RcbiAgICBwcm9qZWN0TWFuYWdlci5zZXRTZWxlY3RlZFByb2plY3QoMCk7XG4gICAgZGlzcGxheU1hbmFnZXIudXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICBkaXNwbGF5TWFuYWdlci5oaWdobGlnaHRTZWxlY3RlZFByb2plY3QoKTtcbiAgICBkaXNwbGF5TWFuYWdlci51cGRhdGVQcm9qZWN0Q29udGVudCgpO1xuICAgIGRpc3BsYXlNYW5hZ2VyLnRvZ2dsZUFkZFByb2plY3RCdG4oKTtcbiAgfVxufVxuXG5leHBvcnQgeyBwcm9qZWN0RGVsZXRlIH07XG4iLCJpbXBvcnQgeyBkaXNwbGF5TWFuYWdlciB9IGZyb20gJy4uL3ZpZXcvZGlzcGxheU1hbmFnZXInO1xuaW1wb3J0IHsgcHJvamVjdERpc3BsYXkgfSBmcm9tICcuLi92aWV3L3Byb2plY3REaXNwbGF5JztcbmltcG9ydCB7IHByb2plY3RGYWN0b3J5IH0gZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0QXJyID0gW107XG5cbiAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgc2VsZWN0ZWQgcHJvamVjdCBpbmRleCwgbnVsbCA9IG5vIHByb2plY3Qgc2VsZWN0ZWRcbiAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdEFyci5wdXNoKHByb2plY3QpO1xuICAgIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RBcnIubGVuZ3RoIC0gMTtcbiAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0ZWQgcHJvamVjdCBpbmRleCcsIHNlbGVjdGVkUHJvamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RBcnIuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBwcm9qZWN0KTtcbiAgICBwcm9qZWN0QXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gcHJvamVjdEFycjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgIHJldHVybiBwcm9qZWN0QXJyW3NlbGVjdGVkUHJvamVjdF07XG4gIH1cblxuICAvLyBGb3IgdGVzdGluZ1xuICBmdW5jdGlvbiBsb2dQcm9qZWN0cygpIHtcbiAgICBjb25zb2xlLnRhYmxlKHByb2plY3RBcnIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvamVjdENyZWF0aW9uTWFuYWdlcigpIHtcbiAgICBkaXNwbGF5TWFuYWdlci5jbGVhck1haW5Db250ZW50KCk7XG4gICAgZGlzcGxheU1hbmFnZXIudG9nZ2xlQWRkUHJvamVjdEJ0bigpO1xuXG4gICAgLy8gQ3JlYXRlIHByb2plY3RcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoKTtcbiAgICBhZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIHNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0QXJyLmxlbmd0aCAtIDEpO1xuXG4gICAgZGlzcGxheU1hbmFnZXIuc2hvd0VkaXREaWFsb2cocHJvamVjdCk7XG4gICAgZGlzcGxheU1hbmFnZXIuc2VsZWN0UHJvamVjdElucHV0KCk7XG4gIH1cblxuICAvLyBSZXR1cm4gdHJ1ZSBpZiBuYW1lIGFscmVhZHkgZXhpc3RzXG4gIGZ1bmN0aW9uIGNoZWNrRHVwbGljYXRlTmFtZShwcm9qZWN0LCBpbnB1dFZhbHVlKSB7XG4gICAgbGV0IGlzRHVwbGljYXRlID0gZmFsc2U7XG5cbiAgICBwcm9qZWN0QXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50ICE9PSBwcm9qZWN0ICYmIGVsZW1lbnQucHJvamVjdE5hbWUgPT09IGlucHV0VmFsdWUpIHtcbiAgICAgICAgaXNEdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGlzRHVwbGljYXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tFbXB0eU5hbWUobmFtZVRvQ2hlY2spIHtcbiAgICBpZiAobmFtZVRvQ2hlY2sgPT09ICcnKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNlbGVjdGVkUHJvamVjdCgpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0U2VsZWN0ZWRQcm9qZWN0KGludCkge1xuICAgIHNlbGVjdGVkUHJvamVjdCA9IGludDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5Q2hhbmdlcyhwcm9qZWN0KSB7XG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgLy8gY29uc29sZS50YWJsZShwcm9qZWN0QXJyKTtcbiAgICBwcm9qZWN0LmRpdiA9IHByb2plY3REaXNwbGF5KHByb2plY3QpO1xuICAgIGRpc3BsYXlNYW5hZ2VyLmhpZ2hsaWdodFNlbGVjdGVkUHJvamVjdCgpO1xuICAgIGRpc3BsYXlNYW5hZ2VyLnVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgZGlzcGxheU1hbmFnZXIudXBkYXRlUHJvamVjdENvbnRlbnQoKTtcbiAgICBkaXNwbGF5TWFuYWdlci50b2dnbGVBZGRQcm9qZWN0QnRuKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFNlbGVjdGVkUHJvamVjdCxcbiAgICBzZXRTZWxlY3RlZFByb2plY3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGdldFByb2plY3RzLFxuICAgIGdldEN1cnJlbnRQcm9qZWN0LFxuICAgIGxvZ1Byb2plY3RzLCAvLyBGb3IgdGVzdGluZ1xuICAgIHByb2plY3RDcmVhdGlvbk1hbmFnZXIsXG4gICAgY2hlY2tEdXBsaWNhdGVOYW1lLFxuICAgIGNoZWNrRW1wdHlOYW1lLFxuICAgIGFwcGx5Q2hhbmdlcyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3RNYW5hZ2VyIH07XG4iLCJmdW5jdGlvbiB0YXNrRmFjdG9yeSh0YXNrVGV4dCkge1xuICBsZXQgdGV4dCA9IHRhc2tUZXh0O1xuXG4gIGxldCBpbkRpc3BsYXlNb2RlID0gZmFsc2U7XG5cbiAgbGV0IGlzRG9uZSA9IGZhbHNlO1xuXG4gIGxldCBkaXNwbGF5RGl2O1xuXG4gIGxldCBlZGl0RGl2O1xuXG4gIHJldHVybiB7XG4gICAgdGV4dCxcbiAgICBpbkRpc3BsYXlNb2RlLFxuICAgIGlzRG9uZSxcbiAgICBkaXNwbGF5RGl2LFxuICAgIGVkaXREaXYsXG4gIH07XG59XG5cbmV4cG9ydCB7IHRhc2tGYWN0b3J5IH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gJy4uL3Byb2plY3RzL3Byb2plY3RNYW5hZ2VyJztcbmltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSAnLi4vdGFza3MvdGFzayc7XG5pbXBvcnQgeyBkaXNwbGF5TWFuYWdlciB9IGZyb20gJy4uL3ZpZXcvZGlzcGxheU1hbmFnZXInO1xuXG5jb25zdCB0YXNrTWFuYWdlciA9ICgoKSA9PiB7XG4gIC8vIFRPRE86IEhhbmRsZSB0YXNrIGNyZWF0aW9uLCBjaGVjayBmb3IgZHVwbGljYXRlc1xuICBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICAgIC8vIFRPRE86IENyZWF0ZSB0YXNrIGRpdiB3aXRoIHRhc2tUZXh0XG5cbiAgICAvLyBDcmVhdGUgdGFza1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrRmFjdG9yeSgnTmV3IHRhc2snKTtcbiAgICB0YXNrLmVkaXREaXYgPSBkaXNwbGF5TWFuYWdlci50YXNrRWRpdERpYWxvZyh0YXNrKTtcblxuICAgIC8vIEFkZCB0YXNrIHRvIHByb2plY3QncyB0YXNrQXJyXG4gICAgcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKS5hZGRUYXNrKHRhc2spO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0VGFza3MoKSk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFzay5lZGl0RGl2KTtcbiAgfVxuXG4gIC8vIFRPRE86IEhhbmRsZSB0YXNrIGRlbGV0aW9uXG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFzaykge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIHByb2plY3QucmVtb3ZlVGFzayh0YXNrKTtcbiAgICBkaXNwbGF5TWFuYWdlci51cGRhdGVQcm9qZWN0Q29udGVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUYXNrLFxuICAgIGRlbGV0ZVRhc2ssXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyB0YXNrTWFuYWdlciB9O1xuIiwiaW1wb3J0IGFkZFNWRyBmcm9tICcuLi9zdmcvYWRkX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Zyc7XG5pbXBvcnQgeyB0YXNrTWFuYWdlciB9IGZyb20gJy4uL3Rhc2tzL3Rhc2tNYW5hZ2VyJztcbmltcG9ydCB7IGRpc3BsYXlNYW5hZ2VyIH0gZnJvbSAnLi9kaXNwbGF5TWFuYWdlcic7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2tCdG4oKSB7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBhZGRTVkcpO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcbiAgYnRuLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICB0YXNrTWFuYWdlci5jcmVhdGVUYXNrKCk7XG4gIH0pO1xuXG4gIHJldHVybiBidG47XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUFkZFRhc2tCdG4gfTtcbiIsImZ1bmN0aW9uIGNsZWFyTWFpbkNvbnRlbnQoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gIFsuLi5tYWluLmNoaWxkTm9kZXNdLmZvckVhY2goKGNoaWxkKSA9PiBtYWluLnJlbW92ZUNoaWxkKGNoaWxkKSk7XG59XG5cbmV4cG9ydCB7IGNsZWFyTWFpbkNvbnRlbnQgfTtcbiIsImltcG9ydCB7IGNsZWFyTWFpbkNvbnRlbnQgfSBmcm9tICcuL2NsZWFyTWFpbkNvbnRlbnQnO1xuaW1wb3J0IHsgaGlnaGxpZ2h0U2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSAnLi9oaWdobGlnaHRTZWxlY3RlZFByb2plY3QnO1xuaW1wb3J0IHsgcHJvamVjdEVkaXREaWFsb2cgfSBmcm9tICcuL3Byb2plY3RFZGl0RGlhbG9nJztcbmltcG9ydCB7IHNlbGVjdFByb2plY3RJbnB1dCB9IGZyb20gJy4vc2VsZWN0UHJvamVjdElucHV0JztcbmltcG9ydCB7IHNlbGVjdFRhc2tJbnB1dCB9IGZyb20gJy4vc2VsZWN0VGFza0lucHV0JztcbmltcG9ydCB7IHRhc2tEaXNwbGF5IH0gZnJvbSAnLi90YXNrRGlzcGxheSc7XG5pbXBvcnQgeyB0YXNrRWRpdERpYWxvZyB9IGZyb20gJy4vdGFza0VkaXREaWFsb2cnO1xuaW1wb3J0IHsgdG9nZ2xlVGFza0Rpc3BsYXlNb2RlIH0gZnJvbSAnLi90b2dnbGVUYXNrRGlzcGxheU1vZGUnO1xuaW1wb3J0IHsgdXBkYXRlUHJvamVjdENvbnRlbnQgfSBmcm9tICcuL3VwZGF0ZVByb2plY3RDb250ZW50JztcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RMaXN0IH0gZnJvbSAnLi91cGRhdGVQcm9qZWN0TGlzdCc7XG5cbmNvbnN0IGRpc3BsYXlNYW5hZ2VyID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gc2hvd0VkaXREaWFsb2cocHJvamVjdCkge1xuICAgIGNsZWFyTWFpbkNvbnRlbnQoKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdEVkaXREaWFsb2cocHJvamVjdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQWRkUHJvamVjdEJ0bigpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gICAgYWRkUHJvamVjdC5kaXNhYmxlZCA9ICFhZGRQcm9qZWN0LmRpc2FibGVkO1xuICAgIGFkZFByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZSgnZGVhY3RpdmF0ZWQnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFkZFRhc2tCdG4oKSB7XG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuICAgIGFkZFRhc2suZGlzYWJsZWQgPSAhYWRkVGFzay5kaXNhYmxlZDtcbiAgICBhZGRUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2RlYWN0aXZhdGVkJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNob3dFZGl0RGlhbG9nLFxuICAgIHRvZ2dsZUFkZFByb2plY3RCdG4sXG4gICAgdG9nZ2xlQWRkVGFza0J0bixcbiAgICBwcm9qZWN0RWRpdERpYWxvZyxcbiAgICBjbGVhck1haW5Db250ZW50LFxuICAgIHNlbGVjdFByb2plY3RJbnB1dCxcbiAgICBzZWxlY3RUYXNrSW5wdXQsXG4gICAgdXBkYXRlUHJvamVjdExpc3QsXG4gICAgdXBkYXRlUHJvamVjdENvbnRlbnQsXG4gICAgdGFza0Rpc3BsYXksXG4gICAgdGFza0VkaXREaWFsb2csXG4gICAgdG9nZ2xlVGFza0Rpc3BsYXlNb2RlLFxuICAgIGhpZ2hsaWdodFNlbGVjdGVkUHJvamVjdCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRpc3BsYXlNYW5hZ2VyIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gJy4uL3Byb2plY3RzL3Byb2plY3RNYW5hZ2VyJztcblxuZnVuY3Rpb24gaGlnaGxpZ2h0U2VsZWN0ZWRQcm9qZWN0KCkge1xuICAvLyBVcGRhdGUgc2VsZWN0ZWQgcHJvamVjdCBjbGFzc1xuICBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LmRpdi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1wcm9qZWN0Jyk7XG4gIH0pO1xuICBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLmRpdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1wcm9qZWN0Jyk7XG59XG5cbmV4cG9ydCB7IGhpZ2hsaWdodFNlbGVjdGVkUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdENsaWNrZWQgfSBmcm9tICcuLi9wcm9qZWN0cy9wcm9qZWN0Q2xpY2tlZCc7XG5pbXBvcnQgeyBwcm9qZWN0RGJsQ2xpY2tlZCB9IGZyb20gJy4uL3Byb2plY3RzL3Byb2plY3REYmxDbGlja2VkJztcblxuZnVuY3Rpb24gcHJvamVjdERpc3BsYXkocHJvamVjdCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgZGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0TmFtZTtcblxuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHByb2plY3RDbGlja2VkKGUsIHByb2plY3QpO1xuICB9KTtcblxuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoZSkgPT4ge1xuICAgIHByb2plY3REYmxDbGlja2VkKHByb2plY3QpO1xuICB9KTtcblxuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgeyBwcm9qZWN0RGlzcGxheSB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdERlbGV0ZSB9IGZyb20gJy4uL3Byb2plY3RzL3Byb2plY3REZWxldGUnO1xuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tICcuLi9wcm9qZWN0cy9wcm9qZWN0TWFuYWdlcic7XG5pbXBvcnQgZGVsZXRlU1ZHIGZyb20gJy4uL3N2Zy9kZWxldGVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJztcbmltcG9ydCBkb25lU1ZHIGZyb20gJy4uL3N2Zy9kb25lX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Zyc7XG5cbmZ1bmN0aW9uIHByb2plY3RFZGl0RGlhbG9nKHByb2plY3QpIHtcbiAgLy8gVE9ETzogbW9kaWZ5IHByb2plY3QgbmFtZSBpZiBwcm9qZWN0IGV4aXN0cyBpbnN0ZWFkIG9mIGNyZWF0aW5nIG5ldyBvbmVcblxuICAvLyBVc2UgYWxyZWFkeSBtYWRlIENTUyBmb3IgdGFzayBkaWFsb2cgdG8gY3JlYXRlL2VkaXQgcHJvamVjdHNcblxuICAvLyBUaGUgZGlhbG9nIGNvbnRhaW5lclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAvLyBJbnB1dCBmaWVsZFxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnZhbHVlID0gcHJvamVjdC5wcm9qZWN0TmFtZTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gIHRpdGxlLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAvLyBBcHBseSBjaGFuZ2VzIGJ1dHRvblxuXG4gIGNvbnN0IGVkaXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZWRpdEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRvbmVTVkcpO1xuICBlZGl0SW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0FwcGx5IGNoYW5nZXMnKTtcblxuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEltZyk7XG5cbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKHByb2plY3RNYW5hZ2VyLmNoZWNrRW1wdHlOYW1lKGlucHV0LnZhbHVlKSkge1xuICAgICAgYWxlcnQoJ1Byb2plY3QgbmFtZSBjYW5ub3QgYmUgZW1wdHkuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RNYW5hZ2VyLmNoZWNrRHVwbGljYXRlTmFtZShwcm9qZWN0LCBpbnB1dC52YWx1ZSkpIHtcbiAgICAgIGFsZXJ0KCdQcm9qZWN0IG5hbWUgYWxyZWFkeSBleGlzdHMuIENhbm5vdCBoYXZlIGR1cGxpY2F0ZSBwcm9qZWN0IG5hbWVzJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvamVjdC5wcm9qZWN0TmFtZSA9IGlucHV0LnZhbHVlO1xuICAgIC8vIENhbGwgcHJvamVjdE1hbmFnZXIgdG8gaGFuZGxlIHByb2plY3QgZWRpdFxuICAgIHByb2plY3RNYW5hZ2VyLmFwcGx5Q2hhbmdlcyhwcm9qZWN0KTtcbiAgfSk7XG5cbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZWRpdCcpO1xuICBlZGl0LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChlZGl0KTtcblxuICAvLyBEZWxldGUgYnV0dG9uXG4gIGNvbnN0IGRlbGV0ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBkZWxldGVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBkZWxldGVTVkcpO1xuICBkZWxldGVJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnRGVsZXRlIHByb2plY3QnKTtcblxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsZXRlJyk7XG4gIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJbWcpO1xuXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcHJvamVjdERlbGV0ZShwcm9qZWN0KTtcbiAgfSk7XG5cbiAgY29uc3QgYWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFjdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWFjdGlvbicpO1xuICBhY3Rpb24uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICBkaXYuYXBwZW5kQ2hpbGQoYWN0aW9uKTtcblxuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgeyBwcm9qZWN0RWRpdERpYWxvZyB9O1xuIiwiZnVuY3Rpb24gc2VsZWN0UHJvamVjdElucHV0KCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlID4gaW5wdXQnKTtcbiAgaW5wdXQuc2VsZWN0KCk7XG59XG5cbmV4cG9ydCB7IHNlbGVjdFByb2plY3RJbnB1dCB9O1xuIiwiZnVuY3Rpb24gc2VsZWN0VGFza0lucHV0KCkge1xuICAvLyBTZWxlY3QgYWxsIHRhc2tzIGJlaW5nIGVkaXRlZFxuICBjb25zdCB0YXNrSW5wdXRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLXRpdGxlID4gaW5wdXQnKV07XG4gIGNvbnNvbGUubG9nKHRhc2tJbnB1dHMpO1xuXG4gIHRhc2tJbnB1dHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5zZWxlY3QoKSk7XG59XG5cbmV4cG9ydCB7IHNlbGVjdFRhc2tJbnB1dCB9O1xuIiwiaW1wb3J0IGRvbmVTVkcgZnJvbSAnLi4vc3ZnL2RvbmVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJztcbmltcG9ydCBlZGl0U1ZHIGZyb20gJy4uL3N2Zy9lZGl0X3NxdWFyZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnO1xuaW1wb3J0IHsgZGlzcGxheU1hbmFnZXIgfSBmcm9tICcuL2Rpc3BsYXlNYW5hZ2VyJztcblxuZnVuY3Rpb24gdGFza0Rpc3BsYXkodGFzaykge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50ZXh0O1xuICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXQnKTtcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyBVcGRhdGUgZWRpdERpdlxuICAgIHRhc2suZWRpdERpdiA9IGRpc3BsYXlNYW5hZ2VyLnRhc2tFZGl0RGlhbG9nKHRhc2spO1xuXG4gICAgLy8gU3dpdGNoIHRvIGVkaXQgbW9kZVxuICAgIGRpc3BsYXlNYW5hZ2VyLnRvZ2dsZVRhc2tEaXNwbGF5TW9kZSh0YXNrKTtcbiAgfSk7XG4gIGNvbnN0IGVkaXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZWRpdEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGVkaXRTVkcpO1xuICBlZGl0SW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0VkaXQgdGFzaycpO1xuXG4gIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEltZyk7XG4gIGVkaXQuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIGRpdi5hcHBlbmRDaGlsZChlZGl0KTtcblxuICBjb25zdCBhY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYWN0aW9uJyk7XG4gIGNvbnN0IGFjdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIE1hcmsgdGFzayBhcyBkb25lXG4gICAgdGl0bGUuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1jb21wbGV0ZScpO1xuXG4gICAgdGFzay5pc0RvbmUgPSAhdGFzay5pc0RvbmU7XG4gIH0pO1xuICBjb25zdCBhY3Rpb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgYWN0aW9uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgZG9uZVNWRyk7XG4gIGFjdGlvbkltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdNYXJrIHRhc2sgYXMgZG9uZScpO1xuICBhY3Rpb25CdG4uYXBwZW5kQ2hpbGQoYWN0aW9uSW1nKTtcbiAgYWN0aW9uLmFwcGVuZENoaWxkKGFjdGlvbkJ0bik7XG4gIGRpdi5hcHBlbmRDaGlsZChhY3Rpb24pO1xuXG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCB7IHRhc2tEaXNwbGF5IH07XG4iLCJpbXBvcnQgZGVsZXRlU1ZHIGZyb20gJy4uL3N2Zy9kZWxldGVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJztcbmltcG9ydCBkb25lU1ZHIGZyb20gJy4uL3N2Zy9kb25lX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Zyc7XG5pbXBvcnQgeyB0YXNrTWFuYWdlciB9IGZyb20gJy4uL3Rhc2tzL3Rhc2tNYW5hZ2VyJztcbmltcG9ydCB7IGRpc3BsYXlNYW5hZ2VyIH0gZnJvbSAnLi9kaXNwbGF5TWFuYWdlcic7XG5cbmZ1bmN0aW9uIHRhc2tFZGl0RGlhbG9nKHRhc2spIHtcbiAgLy8gVGhlIGRpYWxvZyBjb250YWluZXJcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAvLyBJbnB1dCBmaWVsZFxuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICBpbnB1dC52YWx1ZSA9IHRhc2sudGV4dDtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gIHRpdGxlLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIC8vIEFwcGx5IGNoYW5nZXMgYnV0dG9uXG5cbiAgY29uc3QgZWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBlZGl0SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgZG9uZVNWRyk7XG4gIGVkaXRJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnQXBwbHkgY2hhbmdlcycpO1xuXG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0SW1nKTtcblxuICAvLyBBcHBseSBjaGFuZ2VzXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIFVwZGF0ZSB0YXNrIHRleHQgdmFsdWVcbiAgICB0YXNrLnRleHQgPSBpbnB1dC52YWx1ZTtcblxuICAgIC8vIFVwZGF0ZSB0YXNrIGRpc3BsYXlEaXZcbiAgICB0YXNrLmRpc3BsYXlEaXYgPSBkaXNwbGF5TWFuYWdlci50YXNrRGlzcGxheSh0YXNrKTtcblxuICAgIC8vIENhbGwgZGlzcGxheU1hbmFnZXIgdG8gcmVwbGFjZSBlZGl0RGl2IHdpdGggZGlzcGxheURpdlxuICAgIGRpc3BsYXlNYW5hZ2VyLnRvZ2dsZVRhc2tEaXNwbGF5TW9kZSh0YXNrKTtcbiAgfSk7XG5cbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZWRpdCcpO1xuICBlZGl0LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChlZGl0KTtcblxuICAvLyBEZWxldGUgYnV0dG9uXG5cbiAgY29uc3QgZGVsZXRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRlbGV0ZUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRlbGV0ZVNWRyk7XG4gIGRlbGV0ZUltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdEZWxldGUgcHJvamVjdCcpO1xuXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUnKTtcbiAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUltZyk7XG5cbiAgLy8gRGVsZXRlIHRhc2tcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICB0YXNrTWFuYWdlci5kZWxldGVUYXNrKHRhc2spO1xuICB9KTtcblxuICBjb25zdCBhY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYWN0aW9uJyk7XG4gIGFjdGlvbi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChhY3Rpb24pO1xuXG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCB7IHRhc2tFZGl0RGlhbG9nIH07XG4iLCJmdW5jdGlvbiB0b2dnbGVUYXNrRGlzcGxheU1vZGUodGFzaykge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuXG4gIGlmICh0YXNrLmluRGlzcGxheU1vZGUpIHtcbiAgICBtYWluLnJlcGxhY2VDaGlsZCh0YXNrLmVkaXREaXYsIHRhc2suZGlzcGxheURpdik7XG4gIH1cblxuICBpZiAoIXRhc2suaW5EaXNwbGF5TW9kZSkge1xuICAgIG1haW4ucmVwbGFjZUNoaWxkKHRhc2suZGlzcGxheURpdiwgdGFzay5lZGl0RGl2KTtcbiAgfVxuXG4gIHRhc2suaW5EaXNwbGF5TW9kZSA9ICF0YXNrLmluRGlzcGxheU1vZGU7XG59XG5cbmV4cG9ydCB7IHRvZ2dsZVRhc2tEaXNwbGF5TW9kZSB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tICcuLi9wcm9qZWN0cy9wcm9qZWN0TWFuYWdlcic7XG5pbXBvcnQgeyBjcmVhdGVBZGRUYXNrQnRuIH0gZnJvbSAnLi9hZGRUYXNrQnRuJztcbmltcG9ydCB7IGRpc3BsYXlNYW5hZ2VyIH0gZnJvbSAnLi9kaXNwbGF5TWFuYWdlcic7XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RDb250ZW50KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuXG4gIC8vIENsZWFyIGNvbnRlbnRcbiAgWy4uLm1haW4uY2hpbGROb2Rlc10uZm9yRWFjaCgoY2hpbGQpID0+IG1haW4ucmVtb3ZlQ2hpbGQoY2hpbGQpKTtcblxuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5nZXRTZWxlY3RlZFByb2plY3QoKSk7XG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdEluZGV4ID0gcHJvamVjdE1hbmFnZXIuZ2V0U2VsZWN0ZWRQcm9qZWN0KCk7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKVtzZWxlY3RlZFByb2plY3RJbmRleF07XG5cbiAgLy8gRGlzcGxheSBwcm9qZWN0IG5hbWVcbiAgY29uc3QgZGlzcGxheVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlzcGxheVByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtcHJvamVjdC1kaXNwbGF5Jyk7XG4gIGRpc3BsYXlQcm9qZWN0LnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QucHJvamVjdE5hbWU7XG4gIG1haW4uYXBwZW5kQ2hpbGQoZGlzcGxheVByb2plY3QpO1xuXG4gIC8vIENyZWF0ZSBhZGQgdGFzayBidXR0b25cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVBZGRUYXNrQnRuKCkpO1xuXG4gIC8vIFRPRE86IHJlbmRlciB0YXNrc1xuICBwcm9qZWN0TWFuYWdlclxuICAgIC5nZXRDdXJyZW50UHJvamVjdCgpXG4gICAgLmdldFRhc2tzKClcbiAgICAuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2suaW5EaXNwbGF5TW9kZSkge1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRhc2suZGlzcGxheURpdik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRhc2suZWRpdERpdik7XG4gICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IHVwZGF0ZVByb2plY3RDb250ZW50IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVNYWluQ29udGVudCB9IGZyb20gJy4uL2luaXQvbWFpbkNvbnRlbnQnO1xuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tICcuLi9wcm9qZWN0cy9wcm9qZWN0TWFuYWdlcic7XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RMaXN0KCkge1xuICBjb25zdCBwcm9qZWN0c0JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtYm9keScpO1xuXG4gIC8vIENsZWFyIGV4aXN0aW5nIHByb2plY3RzIGJlZm9yZSBhcHBlbmRpbmcgdGhlIG9uZXMgaW4gdGhlIGxpc3RcbiAgWy4uLnByb2plY3RzQm9keS5jaGlsZE5vZGVzXS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGlmIChjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSkge1xuICAgICAgcHJvamVjdHNCb2R5LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIG51bGwgPSBubyBwcm9qZWN0cyBpbiBsaXN0XG4gIGlmIChwcm9qZWN0TWFuYWdlci5nZXRTZWxlY3RlZFByb2plY3QoKSAhPT0gbnVsbCkge1xuICAgIC8vIEFwcGVuZCBleGlzdGluZyBwcm9qZWN0cyB0byB0aGUgcHJvamVjdCBsaXN0XG4gICAgcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBsZXQgZGl2ID0gcHJvamVjdC5kaXY7XG4gICAgICBwcm9qZWN0c0JvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBObyBwcm9qZWN0cywgcmVuZGVyIGRlZmF1bHQgbWFpbiBwYWdlXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbiAgICBjb25zdCBob2x5R3JhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9seS1ncmFpbCcpO1xuICAgIGhvbHlHcmFpbC5yZXBsYWNlQ2hpbGQoY3JlYXRlTWFpbkNvbnRlbnQoKSwgbWFpbik7XG4gIH1cbn1cblxuZXhwb3J0IHsgdXBkYXRlUHJvamVjdExpc3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBpbml0aWFsaXplUGFnZSB9IGZyb20gJy4vaW5pdC9pbml0aWFsJztcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmluaXRpYWxpemVQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=