/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/binders/index.ts":
/*!**********************************!*\
  !*** ./scripts/binders/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./scripts/components/link-list/link-list.component.ts":
/*!*************************************************************!*\
  !*** ./scripts/components/link-list/link-list.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkListComponent": function() { return /* binding */ LinkListComponent; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ribajs/core */ "../../../packages/core/src/index.ts");


class LinkListComponent extends _ribajs_core__WEBPACK_IMPORTED_MODULE_1__.Component {
  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_debug", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autobind", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scope", {
      items: [{
        label: "Home",
        url: "/"
      }, {
        label: "Cool",
        url: "/pages/cool"
      }, {
        label: "Nice",
        url: "/pages/nice"
      }, {
        label: "Different",
        url: "/pages/different"
      }, {
        label: "404",
        url: "/pages/simulate-404"
      }, {
        label: "500",
        url: "/pages/simulate-500"
      }]
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.init(LinkListComponent.observedAttributes);
  }

  template() {
    return null;
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(LinkListComponent, "tagName", "link-list");

/***/ }),

/***/ "./scripts/formatters/index.ts":
/*!*************************************!*\
  !*** ./scripts/formatters/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./scripts/pages/404/404.component.ts":
/*!********************************************!*\
  !*** ./scripts/pages/404/404.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageComponent": function() { return /* binding */ NotFoundPageComponent; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ribajs_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ribajs/ssr */ "../../../packages/ssr/src/index.ts");
/* harmony import */ var _404_component_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./404.component.pug */ "./scripts/pages/404/404.component.pug");
/* harmony import */ var _404_component_pug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_404_component_pug__WEBPACK_IMPORTED_MODULE_2__);



class NotFoundPageComponent extends _ribajs_ssr__WEBPACK_IMPORTED_MODULE_1__.PageComponent {
  static get observedAttributes() {
    return [];
  }

  constructor() {
    var _this$ctx$status, _this$ctx$errorObj;

    super();

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_debug", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autobind", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scope", {
      title: "",
      content: "",
      params: {},
      error: undefined
    });

    this.head.title = "404 Not found";
    this.scope.params = this.ctx.params;
    this.scope.title = ((_this$ctx$status = this.ctx.status) === null || _this$ctx$status === void 0 ? void 0 : _this$ctx$status.toString()) || "404";
    this.scope.content = ((_this$ctx$errorObj = this.ctx.errorObj) === null || _this$ctx$errorObj === void 0 ? void 0 : _this$ctx$errorObj.message) || "Not found";
    this.scope.error = this.ctx.errorObj;
  }

  connectedCallback() {
    super.connectedCallback();
    this.init(NotFoundPageComponent.observedAttributes);
  }

  template() {
    return _404_component_pug__WEBPACK_IMPORTED_MODULE_2___default()(this.scope);
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(NotFoundPageComponent, "tagName", "not-found-page");

/***/ }),

/***/ "./scripts/pages/500/500.component.ts":
/*!********************************************!*\
  !*** ./scripts/pages/500/500.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InternalErrorPageComponent": function() { return /* binding */ InternalErrorPageComponent; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ribajs_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ribajs/ssr */ "../../../packages/ssr/src/index.ts");
/* harmony import */ var _500_component_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./500.component.pug */ "./scripts/pages/500/500.component.pug");
/* harmony import */ var _500_component_pug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_500_component_pug__WEBPACK_IMPORTED_MODULE_2__);



class InternalErrorPageComponent extends _ribajs_ssr__WEBPACK_IMPORTED_MODULE_1__.PageComponent {
  static get observedAttributes() {
    return [];
  }

  constructor() {
    var _this$ctx$status, _this$ctx$errorObj;

    super();

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_debug", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autobind", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scope", {
      title: "",
      content: "",
      params: {},
      error: undefined
    });

    this.head.title = "500 Internal server error";
    this.scope.params = this.ctx.params;
    this.scope.title = ((_this$ctx$status = this.ctx.status) === null || _this$ctx$status === void 0 ? void 0 : _this$ctx$status.toString()) || "500";
    this.scope.content = "".concat((_this$ctx$errorObj = this.ctx.errorObj) === null || _this$ctx$errorObj === void 0 ? void 0 : _this$ctx$errorObj.message) || "Internal server error";

    if (typeof this.scope.content === "string") {
      this.scope.content = this.scope.content.replace(/\n/g, "<br >");
    }

    this.scope.error = this.ctx.errorObj;
  }

  connectedCallback() {
    super.connectedCallback();
    this.init(InternalErrorPageComponent.observedAttributes);
  }

  template() {
    return _500_component_pug__WEBPACK_IMPORTED_MODULE_2___default()(this.scope);
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(InternalErrorPageComponent, "tagName", "error-page");

/***/ }),

/***/ "./scripts/pages/index.ts":
/*!********************************!*\
  !*** ./scripts/pages/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageComponent": function() { return /* reexport safe */ _404_404_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundPageComponent; },
/* harmony export */   "InternalErrorPageComponent": function() { return /* reexport safe */ _500_500_component__WEBPACK_IMPORTED_MODULE_1__.InternalErrorPageComponent; },
/* harmony export */   "IndexPageComponent": function() { return /* reexport safe */ _index_index_component__WEBPACK_IMPORTED_MODULE_2__.IndexPageComponent; },
/* harmony export */   "PagesPageComponent": function() { return /* reexport safe */ _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__.PagesPageComponent; }
/* harmony export */ });
/* harmony import */ var _404_404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404/404.component */ "./scripts/pages/404/404.component.ts");
/* harmony import */ var _500_500_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./500/500.component */ "./scripts/pages/500/500.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index/index.component */ "./scripts/pages/index/index.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.component */ "./scripts/pages/pages/pages.component.ts");





/***/ }),

/***/ "./scripts/pages/index/index.component.ts":
/*!************************************************!*\
  !*** ./scripts/pages/index/index.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPageComponent": function() { return /* binding */ IndexPageComponent; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ribajs_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ribajs/ssr */ "../../../packages/ssr/src/index.ts");
/* harmony import */ var _index_component_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.component.pug */ "./scripts/pages/index/index.component.pug");
/* harmony import */ var _index_component_pug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_component_pug__WEBPACK_IMPORTED_MODULE_2__);



class IndexPageComponent extends _ribajs_ssr__WEBPACK_IMPORTED_MODULE_1__.PageComponent {
  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_debug", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autobind", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "head", {
      title: "You are on home"
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scope", {
      title: "Hello from ssr",
      content: "When you can see this, ssr works :)",
      obj: {
        foo: "bar",
        note: "This is an example to test the json formatter"
      }
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.init(IndexPageComponent.observedAttributes);
  }

  requiredAttributes() {
    return [];
  }

  async beforeBind() {
    await super.beforeBind();
  }

  async afterBind() {
    await super.afterBind();
  }

  template() {
    return _index_component_pug__WEBPACK_IMPORTED_MODULE_2___default()(this.scope);
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(IndexPageComponent, "tagName", "index-page");

/***/ }),

/***/ "./scripts/pages/pages/pages.component.ts":
/*!************************************************!*\
  !*** ./scripts/pages/pages/pages.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPageComponent": function() { return /* binding */ PagesPageComponent; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ribajs_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ribajs/ssr */ "../../../packages/ssr/src/index.ts");
/* harmony import */ var _pages_component_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component.pug */ "./scripts/pages/pages/pages.component.pug");
/* harmony import */ var _pages_component_pug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_component_pug__WEBPACK_IMPORTED_MODULE_2__);



class PagesPageComponent extends _ribajs_ssr__WEBPACK_IMPORTED_MODULE_1__.PageComponent {
  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_debug", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autobind", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scope", {
      title: "[ params.handle | capitalize ]",
      content: "<p>We are [ params.handle ]!</a>",
      params: {}
    });

    this.scope.params = this.ctx.params;
  }

  connectedCallback() {
    super.connectedCallback();
    this.init(PagesPageComponent.observedAttributes);
  }

  requiredAttributes() {
    return [];
  }

  async beforeBind() {
    await super.beforeBind();
    this.head.title = "You are " + this.ctx.params.handle;

    if (this.ctx.params.handle === "simulate-404") {
      throw new _ribajs_ssr__WEBPACK_IMPORTED_MODULE_1__.HttpError("Simulated 404 not found error!", 404);
    }

    if (this.ctx.params.handle === "simulate-500") {
      console.error("Start simulate 500 internal error..");
      throw new _ribajs_ssr__WEBPACK_IMPORTED_MODULE_1__.HttpError("Simulated 500 internal error!", 500);
    }
  }

  async afterBind() {
    await super.afterBind();
  }

  template() {
    return _pages_component_pug__WEBPACK_IMPORTED_MODULE_2___default()(this.scope);
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(PagesPageComponent, "tagName", "pages-page");

/***/ }),

/***/ "../../../infra/types/index.js":
/*!*************************************!*\
  !*** ../../../infra/types/index.js ***!
  \*************************************/
/***/ (function() {



/***/ }),

/***/ "../../../packages/core/src/adapters/dot.adapter.ts":
/*!**********************************************************!*\
  !*** ../../../packages/core/src/adapters/dot.adapter.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DotAdapter": function() { return /* binding */ DotAdapter; },
/* harmony export */   "dotAdapter": function() { return /* binding */ dotAdapter; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");

class DotAdapter {
  constructor() {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "name", ".");

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "counter", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "weakmap", {});
  }

  weakReference(obj) {
    if (!obj.hasOwnProperty("__rv")) {
      const id = this.counter++;
      Object.defineProperty(obj, "__rv", {
        value: id
      });
    }

    if (!this.weakmap[obj.__rv]) {
      this.weakmap[obj.__rv] = {
        callbacks: {}
      };
    }

    return this.weakmap[obj.__rv];
  }

  cleanupWeakReference(ref, id) {
    if (!Object.keys(ref.callbacks).length) {
      if (!(ref.pointers && Object.keys(ref.pointers).length)) {
        delete this.weakmap[id];
      }
    }
  }

  stubFunction(obj, fn) {
    const original = obj[fn];
    const map = this.weakReference(obj);
    const weakmap = this.weakmap;

    obj[fn] = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      const response = original.apply(obj, args);
      Object.keys(map.pointers).forEach(r => {
        const k = map.pointers[r];

        if (weakmap[r]) {
          if (Array.isArray(weakmap[r].callbacks[k])) {
            weakmap[r].callbacks[k].forEach(callback => {
              callback.sync();
            });
          }
        }
      });
      return response;
    };
  }

  observeMutations(obj, ref, keypath) {
    if (Array.isArray(obj)) {
      const map = this.weakReference(obj);

      if (!map.pointers) {
        map.pointers = {};
        DotAdapter.ARRAY_METHODS.forEach(fn => {
          this.stubFunction(obj, fn);
        });
      }

      if (!map.pointers[ref]) {
        map.pointers[ref] = [];
      }

      if (map.pointers[ref].indexOf(keypath) === -1) {
        map.pointers[ref].push(keypath);
      }
    }
  }

  unobserveMutations(obj, ref, keypath) {
    if (Array.isArray(obj) && obj.__rv != null) {
      const map = this.weakmap[obj.__rv];

      if (map) {
        const pointers = map.pointers[ref];

        if (pointers) {
          const idx = pointers.indexOf(keypath);

          if (idx > -1) {
            pointers.splice(idx, 1);
          }

          if (!pointers.length) {
            delete map.pointers[ref];
          }

          this.cleanupWeakReference(map, obj.__rv);
        }
      }
    }
  }

  observe(obj, keypath, callback) {
    let value;
    const callbacks = this.weakReference(obj).callbacks;

    if (!callbacks[keypath]) {
      callbacks[keypath] = [];
      const desc = Object.getOwnPropertyDescriptor(obj, keypath);

      if (!desc || !(desc.get || desc.set || !desc.configurable)) {
        value = obj[keypath];
        Object.defineProperty(obj, keypath, {
          enumerable: true,
          get: () => {
            return value;
          },
          set: newValue => {
            if (newValue !== value) {
              this.unobserveMutations(value, obj.__rv, keypath);
              value = newValue;
              const map = this.weakmap[obj.__rv];

              if (map) {
                const _callbacks = map.callbacks[keypath];

                if (_callbacks) {
                  _callbacks.forEach(cb => {
                    cb.sync();
                  });
                }

                this.observeMutations(newValue, obj.__rv, keypath);
              }
            }
          }
        });
      }
    }

    if (callbacks[keypath].indexOf(callback) === -1) {
      callbacks[keypath].push(callback);
    }

    this.observeMutations(obj[keypath], obj.__rv, keypath);
  }

  unobserve(obj, keypath, callback) {
    const map = this.weakmap[obj.__rv];

    if (map) {
      const callbacks = map.callbacks[keypath];

      if (callbacks) {
        const idx = callbacks.indexOf(callback);

        if (idx > -1) {
          callbacks.splice(idx, 1);

          if (!callbacks.length) {
            delete map.callbacks[keypath];
            this.unobserveMutations(obj[keypath], obj.__rv, keypath);
          }
        }

        this.cleanupWeakReference(map, obj.__rv);
      }
    }
  }

  get(obj, keypath) {
    return obj[keypath];
  }

  set(obj, keypath, value) {
    obj[keypath] = value;
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(DotAdapter, "ARRAY_METHODS", ["push", "pop", "shift", "unshift", "sort", "reverse", "splice"]);

const dotAdapter = new DotAdapter();


/***/ }),

/***/ "../../../packages/core/src/adapters/index.ts":
/*!****************************************************!*\
  !*** ../../../packages/core/src/adapters/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dotAdapter": function() { return /* reexport safe */ _dot_adapter__WEBPACK_IMPORTED_MODULE_0__.dotAdapter; }
/* harmony export */ });
/* harmony import */ var _dot_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dot.adapter */ "../../../packages/core/src/adapters/dot.adapter.ts");


/***/ }),

/***/ "../../../packages/core/src/binder.ts":
/*!********************************************!*\
  !*** ../../../packages/core/src/binder.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Binder": function() { return /* binding */ Binder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _parse_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse-type */ "../../../packages/core/src/parse-type.ts");
/* harmony import */ var _constants_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/parser */ "../../../packages/core/src/constants/parser.ts");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observer */ "../../../packages/core/src/observer.ts");
/* harmony import */ var _constants_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/formatter */ "../../../packages/core/src/constants/formatter.ts");
/* harmony import */ var _ribajs_utils_src_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ribajs/utils/src/dom */ "../../../packages/utils/src/dom.ts");






/**
 * A single binding between a model attribute and a DOM element.
 */

class Binder {
  /**
   * The name of the binder to access the binder by
   */

  /**
   * Blocks the current node and child nodes from being parsed (used for iteration binding as well as the if/unless binders).
   */

  /**
   * Set this to true if you want view.publish() to call publish on these bindings.
   */

  /**
   * Priority of the binder, binders with higher priority are applied first
   */

  /**
   * The routine function is called when an observed attribute on the model changes and is used to update the DOM. When defining a one-way binder as a single function, it is actually the routine function that you're defining.
   */

  /**
   * This function will get called for this binding on the initial `view.bind()`. Use it to store some initial state on the binding, or to set up any event listeners on the element.
   */

  /**
   * This function will get called for this binding on `view.unbind()`. Use it to reset any state on the element that would have been changed from the routine getting called, or to unbind any event listeners on the element that you've set up in the `binder.bind` function.
   */

  /**
   * Updates the binding's model from what is currently set on the view.
   * Unbinds the old model first and then re-binds with the new model.
   */

  /**
   * The getValue function is called when the binder wants to set the value on the model. This function takes the HTML element as only parameter
   */

  /**
   * All information about the binding is passed into the constructor; the
   * containing view, the DOM node, the type of binding, the model object and the
   * keypath at which to listen for changes.
   * @param {*} view
   * @param {*} el
   * @param {*} type
   * @param {*} keypath
   * @param {*} binder
   * @param {*} args The start binders, on `class-*` args[0] wil be the classname.
   * @param {*} formatters
   */
  constructor(view, el, type, name, keypath, formatters, identifier) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "publishes", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "formatterObservers", {});

    this.view = view;
    this.el = el;
    this.type = type;
    this.name = name;
    this.keypath = keypath;
    this.formatters = formatters;
    this.model = undefined;

    if (identifier && type) {
      this.args = this.getStarArguments(identifier, type);
    } else {
      this.args = new Array();
    }
  }
  /**
   * Observes the object keypath
   * @param obj
   * @param keypath
   */


  observe(obj, keypath, callback) {
    return new _observer__WEBPACK_IMPORTED_MODULE_3__.Observer(obj, keypath, callback);
  }

  parseTarget() {
    if (this.keypath) {
      const token = (0,_parse_type__WEBPACK_IMPORTED_MODULE_1__.parseType)(this.keypath);

      if (token.type === _constants_parser__WEBPACK_IMPORTED_MODULE_2__.PRIMITIVE) {
        this.value = token.value;
      } else if (token.type === _constants_parser__WEBPACK_IMPORTED_MODULE_2__.KEYPATH) {
        this.observer = this.observe(this.view.models, this.keypath, this);
        this.model = this.observer.target;
      } else {
        throw new Error("[".concat(this.name, "] Unknown type in token"));
      }
    } else {
      this.value = undefined;
    }
  }
  /**
   * Get the iteration alias, used in the interation binders like `each-*`
   * @param {*} modelName
   * @see https://github.com/mikeric/rivets/blob/master/dist/rivets.js#L26
   * @see https://github.com/mikeric/rivets/blob/master/dist/rivets.js#L1175
   */


  getIterationAlias(modelName) {
    return "%" + modelName + "%";
  }

  parseFormatterArguments(args, formatterIndex) {
    return args.map(_parse_type__WEBPACK_IMPORTED_MODULE_1__.parseType).map((_ref, ai) => {
      let {
        type,
        value
      } = _ref;

      if (type === _constants_parser__WEBPACK_IMPORTED_MODULE_2__.PRIMITIVE) {
        const primitiveValue = value;
        return primitiveValue;
      } else if (type === _constants_parser__WEBPACK_IMPORTED_MODULE_2__.KEYPATH) {
        // keypath is string
        const keypath = value;

        if (!this.formatterObservers[formatterIndex]) {
          this.formatterObservers[formatterIndex] = {};
        }

        let observer = this.formatterObservers[formatterIndex][ai];

        if (!observer) {
          observer = this.observe(this.view.models, keypath, this);
          this.formatterObservers[formatterIndex][ai] = observer;
        }

        return observer.value();
      } else {
        throw new Error("[".concat(this.name, "] Unknown argument type"));
      }
    });
  }
  /**
   * Applies all the current formatters to the supplied value and returns the
   * formatted value.
   */


  formattedValue(value) {
    let startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (this.formatters === null) {
      throw new Error("[".concat(this.name, " formatters is null"));
    } // If any intermediate result is a promise continue the chain (with startIndex set) after it is resolved.


    let promised = false;
    const formatters = startIndex ? this.formatters.slice(startIndex) : this.formatters;
    return formatters.reduce((result, declaration, index) => {
      if (promised) {
        return result;
      }

      const args = declaration.match(_constants_formatter__WEBPACK_IMPORTED_MODULE_4__.FORMATTER_ARGS);

      if (args === null) {
        console.warn(new Error("[".concat(this.name, "] No args matched with regex \"FORMATTER_ARGS\"!\nvalue: ").concat(JSON.stringify(value), "\nresult: ").concat(JSON.stringify(result), "\ndeclaration: ").concat(JSON.stringify(declaration), "\nindex: ").concat(index, "\n")));
        return result;
      }

      const id = args.shift();

      if (!id) {
        throw new Error("[".concat(this.name, "] No formatter id found in args!"));
      }

      if (!this.view.options.formatters) {
        throw new Error("[".concat(this.name, "] No formatters are defined!"));
      }

      const formatter = this.view.options.formatters[id];

      if (!formatter) {
        throw new Error("[".concat(this.name, "] No formatters with id \"").concat(id, "\" found!"));
      }

      const processedArgs = this.parseFormatterArguments(args, index); // get formatter read funcion

      if (formatter && typeof formatter.read === "function") {
        result = formatter.read.apply(this.model, [result, ...processedArgs]);
      } // If result is a promise, and this is not the last formatter in the chain


      if (index < formatters.length - 1 && result && typeof result.then === "function" && typeof result.catch === "function") {
        promised = true;
        return result.then(value => this.formattedValue(value, index + 1));
      }

      return result;
    }, value);
  }
  /**
   * Returns an event handler for the binding around the supplied function.
   * This event Handler is mainly used by the on-* binder
   * @param fn The function to call by the handler
   * @param el The element the event was triggered from
   */


  eventHandler(fn, el) {
    const handler = this.view.options.handler;
    return ev => {
      if (!handler) {
        throw new Error("No handler defined in binding.view.options.handler");
      }

      handler.call(fn, this, ev, this, el);
    };
  }
  /**
   * Sets the value for the binding. This Basically just runs the binding routine
   * with the supplied value formatted.
   */


  set(value) {
    try {
      value = this.formattedValue(value);
    } catch (error) {
      console.error(error);
      return value;
    }

    if (typeof this.routine === "function") {
      // If value is a promise
      if (value && typeof value.then === "function" && typeof value.catch === "function") {
        value.then(realValue => {
          this.routine(this.el, realValue);
        }).catch(error => {
          console.error(error);
        });
      } else {
        this.routine(this.el, value);
      }
    }
  }
  /**
   * Syncs up the view binding with the model.
   */


  sync() {
    if (this.observer) {
      this.model = this.observer.target;
      this.set(this.observer.value());
    } else {
      this.set(this.value);
    }
  }
  /**
   * Publishes the value currently set on the input element (or any other wich implements getValue) back to the model.
   */


  publish() {
    if (this.observer) {
      if (this.formatters === null) {
        throw new Error("formatters is null");
      }

      const value = this.formatters.reduceRight((result, declaration, index) => {
        const args = declaration.split(_constants_formatter__WEBPACK_IMPORTED_MODULE_4__.FORMATTER_SPLIT);
        const id = args.shift();

        if (!id) {
          throw new Error("id not defined");
        }

        if (!this.view.options.formatters) {
          return undefined;
        }

        const formatter = this.view.options.formatters[id];
        const processedArgs = this.parseFormatterArguments(args, index);

        if (formatter && typeof formatter.publish === "function") {
          result = formatter.publish(result, ...processedArgs);
        }

        return result;
      }, this._getValue(this.el));
      this.observer.setValue(value);
    }
  }
  /**
   * Subscribes to the model for changes at the specified keypath. Bi-directional
   * routines will also listen for changes on the element to propagate them back
   * to the model.
   */


  _bind() {
    this.parseTarget();

    if (this.bind) {
      if (typeof this.bind !== "function") {
        throw new Error("the method bind is not a function");
      }

      this.bind(this.el);
    }

    if (this.view.options.preloadData) {
      this.sync();
    }
  }
  /**
   * Unsubscribes from the model and the element.
   */


  _unbind() {
    if (this.unbind) {
      this.unbind(this.el);
    }

    if (this.observer) {
      this.observer.unobserve();
    }

    Object.keys(this.formatterObservers).forEach(fi => {
      const args = this.formatterObservers[fi];
      Object.keys(args).forEach(ai => {
        args[ai].unobserve();
      });
    });
    this.formatterObservers = {};
  }
  /**
   * Updates the binding's model from what is currently set on the view. Unbinds
   * the old model first and then re-binds with the new model.
   * @param {any} models
   */


  _update() {
    let models = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (this.observer) {
      this.model = this.observer.target;
    }

    if (typeof this.update === "function") {
      this.update(models);
    }
  }
  /**
   * Returns elements value
   * @param el
   */


  _getValue(el) {
    if (typeof this.getValue === "function") {
      return this.getValue(el);
    } else {
      return (0,_ribajs_utils_src_dom__WEBPACK_IMPORTED_MODULE_5__.getInputValue)(el);
    }
  }

  getStarArguments(identifier, type) {
    const regexp = new RegExp("^".concat(identifier.replace(/\*/g, "(.+)"), "$"));
    const match = type.match(regexp);
    return match && match.slice(1) || [];
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Binder, "key", "");

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Binder, "block", false);

/***/ }),

/***/ "../../../packages/core/src/binders/add-class.binder.ts":
/*!**************************************************************!*\
  !*** ../../../packages/core/src/binders/add-class.binder.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddClassBinder": function() { return /* binding */ AddClassBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * add-class
 * Adds the value of the attribute to the class.
 * Instead of `class-[classname]` the classname is defined by the
 * attribute value and not by the star value.
 * @example
 * <ul>
 *   <li rv-each-todo="todos">
 *     <div rv-add-class="todo.state"></div>
 *   </li>
 * <ul>
 */

class AddClassBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  constructor() {
    super(...arguments);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "function", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 1000);
  }

  bind(el) {
    this.staticClasses = el.className.split(" ");
  }

  unbind() {
    delete this.staticClasses;
  }

  routine(el, newValue) {
    if (newValue) {
      var _this$staticClasses;

      if (((_this$staticClasses = this.staticClasses) === null || _this$staticClasses === void 0 ? void 0 : _this$staticClasses.indexOf(newValue)) === -1) {
        el.className = this.staticClasses.join(" ") + " " + newValue;
      }
    } else {
      if (this.staticClasses) {
        el.className = this.staticClasses.join(" ");
      }
    }

    el.className = el.className.trim();
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(AddClassBinder, "key", "add-class");

/***/ }),

/***/ "../../../packages/core/src/binders/animate-classname.binder.ts":
/*!**********************************************************************!*\
  !*** ../../../packages/core/src/binders/animate-classname.binder.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimateStarBinder": function() { return /* binding */ AnimateStarBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * animate-{class}
 * Add / remove animation class with start and done affix
 */

class AnimateStarBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  constructor() {
    super(...arguments);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "function", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 1000);
  }

  bind(el) {
    const animateClassName = this.args[0];
    el.classList.add(animateClassName);
  }

  routine(el, start) {
    const animateClassName = this.args[0];

    if (start) {
      el.classList.add(animateClassName + "-start");
      el.classList.remove(animateClassName + "-done");
    } else {
      el.classList.remove(animateClassName + "-start");
      el.classList.add(animateClassName + "-done");
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimateStarBinder, "key", "animate-*");

/***/ }),

/***/ "../../../packages/core/src/binders/assign-property.binder.ts":
/*!********************************************************************!*\
  !*** ../../../packages/core/src/binders/assign-property.binder.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignPropertyBinder": function() { return /* binding */ AssignPropertyBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");



/**
 * assign-*
 * Assign a value in your model.
 * Sets or overwrites a value by his property name (named whatever value is in place of [property]) in your model.
 * @example
 * <div rv-assign-new='"hello"'>{new}</div>
 */

class AssignPropertyBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, value) {
    const propertyName = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_2__.camelCase)(this.args[0].trim());
    const obj = {};
    obj[propertyName] = value;
    this.view.models[propertyName] = value;
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(AssignPropertyBinder, "key", "assign-*");

/***/ }),

/***/ "../../../packages/core/src/binders/assign.binder.ts":
/*!***********************************************************!*\
  !*** ../../../packages/core/src/binders/assign.binder.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignBinder": function() { return /* binding */ AssignBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");



/**
 * assign
 * Assign a value in your model.
 * The value you want to assign must be an object and will be concatenate with your model.
 * @example
 * <div rv-assign='{"newValue": "hello", "anotherNewValue": "world"}'>{newValue} {anotherNewValue}!</div>
 */

class AssignBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, value) {
    if (typeof value === "object") {
      return (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_2__.extend)({
        deep: false
      }, this.view.models, value);
    }

    console.warn("Value must be an object or propertyName is required");
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(AssignBinder, "key", "assign");

/***/ }),

/***/ "../../../packages/core/src/binders/attribute.binder.ts":
/*!**************************************************************!*\
  !*** ../../../packages/core/src/binders/attribute.binder.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeBinder": function() { return /* binding */ AttributeBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _formatters_type_json_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatters/type/json.formatter */ "../../../packages/core/src/formatters/type/json.formatter.ts");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");




/**
 * Sets the attribute on the element. If no binder above is matched it will fall
 * back to using this binder.
 */
class AttributeBinder extends _binder__WEBPACK_IMPORTED_MODULE_2__.Binder {
  routine(el, newValue) {
    if (!this.type) {
      throw new Error("Can't set attribute of " + this.type);
    }

    const oldValue = el.getAttribute(this.type);
    let newValueFormatted;

    switch (typeof newValue) {
      case "string":
        newValueFormatted = newValue;
        break;

      case "number":
        newValueFormatted = newValue;
        break;

      case "boolean":
        newValueFormatted = newValue;
        break;

      case "object":
        if (newValue === null) {
          newValue = null;
        } else {
          newValueFormatted = _formatters_type_json_formatter__WEBPACK_IMPORTED_MODULE_1__.jsonFormatter.read(newValue, 0);
        }

        break;

      default:
        newValueFormatted = newValue;
        break;
    }

    if (newValueFormatted != null) {
      if (String(oldValue).toString() !== String(newValueFormatted).toString()) {
        el.setAttribute(this.type, newValueFormatted);
        el.dispatchEvent(new CustomEvent("binder-changed", {
          detail: {
            name: this.type,
            newValue: newValueFormatted,
            oldValue
          }
        }));
      }
    } else {
      el.removeAttribute(this.type);
      el.dispatchEvent(new CustomEvent("binder-changed", {
        detail: {
          name: this.type,
          newValue: newValueFormatted,
          oldValue
        }
      }));
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(AttributeBinder, "key", "*");

/***/ }),

/***/ "../../../packages/core/src/binders/block.binder.ts":
/*!**********************************************************!*\
  !*** ../../../packages/core/src/binders/block.binder.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockBinder": function() { return /* binding */ BlockBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * block
 * Blocks the binding for the current element and his childs.
 * @note Please note that `<script></script>`, `<style type="text/css"></style>`, `<template></template>` and `<code></code>` tags are blocked by default.
 * You can change this by setting the `blockNodeNames` option.
 * @example
 * <div rv-block="">
 *  <!-- After binding you should see `{ value }` because the binding is blocked here -->
 *  { value }
 * </div>
 */

class BlockBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine() {
    /**/
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(BlockBinder, "key", "block");

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(BlockBinder, "block", true);

/***/ }),

/***/ "../../../packages/core/src/binders/checked.binder.ts":
/*!************************************************************!*\
  !*** ../../../packages/core/src/binders/checked.binder.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckedBinder": function() { return /* binding */ CheckedBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");
/* harmony import */ var _ribajs_utils_src_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ribajs/utils/src/dom */ "../../../packages/utils/src/dom.ts");
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");




/**
 * checked
 * Checks a checkbox or radio input when the value is true. Also sets the model
 * property when the input is checked or unchecked (two-way binder).
 */

class CheckedBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  constructor() {
    super(...arguments);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "publishes", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 2000);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChange", this.publish.bind(this));
  }

  bind(el) {
    el.addEventListener("change", this.onChange);
  }

  unbind(el) {
    el.removeEventListener("change", this.onChange);
  }

  routine(el, newValue) {
    let oldValue;

    if (!this._getValue) {
      console.warn("this._getValue is not a function, this: ", this);
      oldValue = (0,_ribajs_utils_src_dom__WEBPACK_IMPORTED_MODULE_2__.getInputValue)(el);
    } else {
      oldValue = this._getValue(el);
    }

    if (el.type === "radio") {
      el.checked = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__.getString)(oldValue) === (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__.getString)(newValue);
    } else {
      if (oldValue !== newValue) {
        el.checked = !!newValue;
      }
    }
  }

  getValue(el) {
    return (0,_ribajs_utils_src_dom__WEBPACK_IMPORTED_MODULE_2__.getInputValue)(el);
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CheckedBinder, "key", "checked");

/***/ }),

/***/ "../../../packages/core/src/binders/class-name.binder.ts":
/*!***************************************************************!*\
  !*** ../../../packages/core/src/binders/class-name.binder.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassStarBinder": function() { return /* binding */ ClassStarBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * class-*
 * class-[classname]
 *
 * Adds a class (whatever value is in place of [classname]) on the element
 * when the value evaluates to true and removes that class if the value
 * evaluates to false.
 * @example
 * <li rv-class-completed="todo.done">{ todo.name }</li>
 */

class ClassStarBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, value) {
    if (this.args === null) {
      throw new Error("args is null");
    }

    const classList = el.className.split(" ").filter(ele => ele !== "");
    const arg = this.args[0].trim();
    const idx = classList.indexOf(arg);

    if (idx === -1) {
      if (value) {
        el.className += " ".concat(arg);
      }
    } else if (!value) {
      el.className = classList.filter((_, i) => i !== idx).join(" ");
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ClassStarBinder, "key", "class-*");

/***/ }),

/***/ "../../../packages/core/src/binders/co-attribute.binder.ts":
/*!*****************************************************************!*\
  !*** ../../../packages/core/src/binders/co-attribute.binder.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentAttributeBinder": function() { return /* binding */ ComponentAttributeBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");
/* harmony import */ var _ribajs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ribajs/utils */ "../../../packages/utils/src/index.ts");



/**
 * co-*
 * Pass a riba model / scope value to your component without first converting it as an attribute
 */

class ComponentAttributeBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  constructor() {
    super(...arguments);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "publishes", true);
  }

  routineIntern(el, value) {
    const attrName = this.args[0].trim();

    if (el.setBinderAttribute) {
      if (typeof value !== "undefined") {
        el.setBinderAttribute(attrName, value);
      }
    } else {
      console.warn("[componentAttributeBinder] You can only use this binder on Riba components", el);
    }
  }

  async routine(el, value) {
    if ((0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_2__.isCustomElement)(el, true, true)) {
      this.routineIntern(el, value);
    } else if ((0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_2__.isCustomElement)(el, true)) {
      await (0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_2__.waitForCustomElement)(el);
      this.routineIntern(el, value);
    } else {
      console.warn("[componentAttributeBinder] You can only use this binder on Riba components", el);
    }
  }

  bindIntern(el) {
    const attrName = this.args[0].trim();

    if (typeof el.observeAttribute !== "function") {
      console.warn("[componentAttributeBinder] You can only use this binder on Riba components", el);
      return;
    }

    this.componentAttributeObserver = el.observeAttribute(attrName, {
      sync: () => {
        this.publish();
      }
    });
  }

  async bind(el) {
    if ((0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_2__.isCustomElement)(el, true, true)) {
      this.bindIntern(el);
    } else if ((0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_2__.isCustomElement)(el, true)) {
      await (0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_2__.waitForCustomElement)(el);
      this.bindIntern(el);
    } else {
      console.warn("[componentAttributeBinder] You can only use this binder on Riba components", el);
    }
  }

  unbind() {
    var _this$componentAttrib;

    (_this$componentAttrib = this.componentAttributeObserver) === null || _this$componentAttrib === void 0 ? void 0 : _this$componentAttrib.unobserve();
  }

  getValue(el) {
    const attrName = this.args[0].trim();
    const val = el.getBinderAttribute(attrName);
    return val;
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ComponentAttributeBinder, "key", "co-*");

/***/ }),

/***/ "../../../packages/core/src/binders/disabled.binder.ts":
/*!*************************************************************!*\
  !*** ../../../packages/core/src/binders/disabled.binder.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisabledBinder": function() { return /* binding */ DisabledBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * Disables the element when value is true (negated version of `enabled` binder).
 */

class DisabledBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, value) {
    el.disabled = !!value;
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(DisabledBinder, "key", "disabled");

/***/ }),

/***/ "../../../packages/core/src/binders/each-item.binder.ts":
/*!**************************************************************!*\
  !*** ../../../packages/core/src/binders/each-item.binder.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EachStarBinder": function() { return /* binding */ EachStarBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "../../../packages/core/src/view.ts");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");
/* harmony import */ var _ribajs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ribajs/utils */ "../../../packages/utils/src/index.ts");




/**
 * each-*
 * Appends bound instances of the element in place for each item in the array.
 */

class EachStarBinder extends _binder__WEBPACK_IMPORTED_MODULE_2__.Binder {
  constructor() {
    super(...arguments);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 4000);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "iterated", []);
  }

  bind(el) {
    if (!this.marker) {
      var _window, _window$document, _el$parentNode;

      this.marker = (_window = window) === null || _window === void 0 ? void 0 : (_window$document = _window.document) === null || _window$document === void 0 ? void 0 : _window$document.createComment(" riba: ".concat(this.type, " "));

      if (!((_el$parentNode = el.parentNode) !== null && _el$parentNode !== void 0 && _el$parentNode.insertBefore) || !this.marker) {// console.warn('No parent node!');
      } else {
        el.parentNode.insertBefore(this.marker, el);
        el.parentNode.removeChild(el);
      }
    } else {
      this.iterated.forEach(view => {
        view.bind();
      });
    }
  }

  unbind() {
    if (this.iterated) {
      this.iterated.forEach(view => {
        view.unbind();
      });
    }
  }

  routine(el, collection) {
    if (this.args === null) {
      throw new Error("args is null");
    }

    let isObject = false;
    const modelName = (0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_3__.camelCase)(this.args[0].toString());
    collection = collection || []; // Transform object to array to iterate over

    if (!Array.isArray(collection) && typeof collection === "object" && collection !== null) {
      collection = Object.entries(collection).map(_ref => {
        let [key, value] = _ref;
        return {
          key,
          value
        };
      });
      isObject = true;
    }

    if (!Array.isArray(collection)) {
      throw new Error("each-".concat(this.args[0], " needs an array or object to iterate over, but it is ").concat(typeof collection));
    } // if index name is set by `index-property` use this name, otherwise `%[modelName]%`


    const indexProp = el.getAttribute("index-property") || this.getIterationAlias(modelName);
    collection.forEach((model, index) => {
      const scope = {
        $parent: this.view.models
      }; // Is object transformed to array

      if (isObject) {
        scope[indexProp] = model.key;
        scope[modelName] = model.value;
      } // Is Array
      else {
        scope[indexProp] = index;
        scope[modelName] = model;
      }

      let view = this.iterated[index];

      if (!view) {
        let previous;

        if (this.iterated.length) {
          previous = this.iterated[this.iterated.length - 1].els[0];
        } else if (this.marker) {
          previous = this.marker;
        }

        if (!previous) {
          return;
        }

        view = _view__WEBPACK_IMPORTED_MODULE_1__.View.create(this, scope, previous.nextSibling);
        this.iterated.push(view);
      } else {
        if (view.models[modelName] !== model) {
          // search for a view that matches the model
          let matchIndex;
          let nextView = this.iterated[index];

          for (let nextIndex = index + 1; nextIndex < this.iterated.length; nextIndex++) {
            nextView = this.iterated[nextIndex];

            if (nextView.models[modelName] === model) {
              matchIndex = nextIndex;
              break;
            }
          }

          if (matchIndex !== undefined) {
            var _this$marker$parentNo;

            // model is in other position
            // TODO: consider avoiding the splice here by setting a flag
            // profile performance before implementing such change
            this.iterated.splice(matchIndex, 1);

            if (!this.marker || !((_this$marker$parentNo = this.marker.parentNode) !== null && _this$marker$parentNo !== void 0 && _this$marker$parentNo.insertBefore)) {
              throw new Error("Marker has no parent node");
            }

            if (nextView && nextView.els[0] && view.els[0]) {
              this.marker.parentNode.insertBefore(nextView.els[0], view.els[0]);
            }

            nextView.models[indexProp] = index;
          } else {
            // new model
            nextView = _view__WEBPACK_IMPORTED_MODULE_1__.View.create(this, scope, view.els[0]);
          }

          this.iterated.splice(index, 0, nextView);
        } else {
          view.models[indexProp] = index;
        }
      }
    });

    if (this.iterated.length > collection.length) {
      (0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_3__.times)(this.iterated.length - collection.length, () => {
        const view = this.iterated.pop();

        if (!view) {
          throw new Error("view is undefined!");
        }

        view.unbind();

        if (!this.marker || !this.marker.parentNode) {
          throw new Error("Marker has no parent node");
        }

        this.marker.parentNode.removeChild(view.els[0]);
      });
    }

    if (el.nodeName === "OPTION" && this.view.bindings) {
      this.view.bindings.forEach(binding => {
        if (this.marker && binding.el === this.marker.parentNode && binding.type === "value" && binding.sync) {
          binding.sync();
        }
      });
    }
  }

  update(models) {
    const data = {}; // TODO: add test and fix if necessary

    Object.keys(models).forEach(key => {
      if (this.args === null) {
        throw new Error("args is null");
      }

      if (key !== this.args[0]) {
        data[key] = models[key];
      }
    });
    this.iterated.forEach(view => {
      view.update(data);
    });
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(EachStarBinder, "key", "each-*");

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(EachStarBinder, "block", true);

/***/ }),

/***/ "../../../packages/core/src/binders/enabled.binder.ts":
/*!************************************************************!*\
  !*** ../../../packages/core/src/binders/enabled.binder.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnabledBinder": function() { return /* binding */ EnabledBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * Enables the element when value is true.
 */

class EnabledBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, value) {
    el.disabled = !value;
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(EnabledBinder, "key", "enabled");

/***/ }),

/***/ "../../../packages/core/src/binders/flex-sort-childs.binder.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/binders/flex-sort-childs.binder.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlexSortChildsBinder": function() { return /* binding */ FlexSortChildsBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * sort-childs using flex order
 */

class FlexSortChildsBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  constructor() {
    super(...arguments);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 90000);
  }

  routine(el, descending) {
    const childrens = Array.from(el.children);
    childrens.sort((a, b) => {
      if (!a.dataset.sortBy || !b.dataset.sortBy) {
        return 0;
      }

      if (a.dataset.sortBy < b.dataset.sortBy) {
        return descending ? 1 : -1;
      }

      if (a.dataset.sortBy > b.dataset.sortBy) {
        return descending ? -1 : 1;
      }

      return 0;
    });

    for (let i = 0; i < childrens.length; i++) {
      const child = childrens[i];
      child.style.order = i.toString();
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(FlexSortChildsBinder, "key", "flex-sort-childs");

/***/ }),

/***/ "../../../packages/core/src/binders/hide.binder.ts":
/*!*********************************************************!*\
  !*** ../../../packages/core/src/binders/hide.binder.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideBinder": function() { return /* binding */ HideBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * Hides the element when value is true (negated version of `show` binder).
 */

class HideBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, value) {
    el.style.display = value ? "none" : "";

    if (value) {
      el.setAttribute("hidden", "true");
    } else {
      el.removeAttribute("hidden");
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(HideBinder, "key", "hide");

/***/ }),

/***/ "../../../packages/core/src/binders/html.binder.ts":
/*!*********************************************************!*\
  !*** ../../../packages/core/src/binders/html.binder.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlBinder": function() { return /* binding */ HtmlBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * Sets the element's text value.
 */

class HtmlBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, value) {
    el.innerHTML = typeof value !== "undefined" ? value.toString() : "";
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlBinder, "key", "html");

/***/ }),

/***/ "../../../packages/core/src/binders/if.binder.ts":
/*!*******************************************************!*\
  !*** ../../../packages/core/src/binders/if.binder.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IfBinder": function() { return /* binding */ IfBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ "../../../packages/core/src/view.ts");



/**
 * if
 * Inserts and binds the element and it's child nodes into the DOM when true.
 */

class IfBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  constructor() {
    super(...arguments);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 4000);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "attached", false);
  }

  bind(el) {
    if (!this.marker) {
      var _window, _window$document, _el$parentNode;

      this.marker = (_window = window) === null || _window === void 0 ? void 0 : (_window$document = _window.document) === null || _window$document === void 0 ? void 0 : _window$document.createComment(" riba: " + this.type + " " + this.keypath + " ");
      this.attached = false;

      if (!((_el$parentNode = el.parentNode) !== null && _el$parentNode !== void 0 && _el$parentNode.insertBefore)) {// console.warn('Element has no parent node');
      } else {
        el.parentNode.insertBefore(this.marker, el);
        el.parentNode.removeChild(el);
      }
    } else if (this.nested) {
      this.nested.bind();
    }
  }

  unbind() {
    if (this.nested) {
      this.nested.unbind();
    }
  }

  routine(el, value) {
    value = !!value;

    if (value !== this.attached) {
      if (value) {
        if (!this.nested) {
          this.nested = new _view__WEBPACK_IMPORTED_MODULE_2__.View(el, this.view.models, this.view.options);
          this.nested.bind();
        }

        if (!this.marker || !this.marker.parentNode) {// console.warn('Marker has no parent node');
        } else {
          this.marker.parentNode.insertBefore(el, this.marker.nextSibling);
        }

        this.attached = true;
      } else {
        if (!el.parentNode) {// console.warn('Element has no parent node');
        } else {
          el.parentNode.removeChild(el);
        }

        this.attached = false;
      }
    }
  }

  update(models) {
    if (this.nested) {
      this.nested.update(models);
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(IfBinder, "key", "if");

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(IfBinder, "block", true);

/***/ }),

/***/ "../../../packages/core/src/binders/index.ts":
/*!***************************************************!*\
  !*** ../../../packages/core/src/binders/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimateStarBinder": function() { return /* reexport safe */ _animate_classname_binder__WEBPACK_IMPORTED_MODULE_0__.AnimateStarBinder; },
/* harmony export */   "AddClassBinder": function() { return /* reexport safe */ _add_class_binder__WEBPACK_IMPORTED_MODULE_1__.AddClassBinder; },
/* harmony export */   "AssignPropertyBinder": function() { return /* reexport safe */ _assign_property_binder__WEBPACK_IMPORTED_MODULE_2__.AssignPropertyBinder; },
/* harmony export */   "AssignBinder": function() { return /* reexport safe */ _assign_binder__WEBPACK_IMPORTED_MODULE_3__.AssignBinder; },
/* harmony export */   "BlockBinder": function() { return /* reexport safe */ _block_binder__WEBPACK_IMPORTED_MODULE_4__.BlockBinder; },
/* harmony export */   "CheckedBinder": function() { return /* reexport safe */ _checked_binder__WEBPACK_IMPORTED_MODULE_5__.CheckedBinder; },
/* harmony export */   "ClassStarBinder": function() { return /* reexport safe */ _class_name_binder__WEBPACK_IMPORTED_MODULE_6__.ClassStarBinder; },
/* harmony export */   "ComponentAttributeBinder": function() { return /* reexport safe */ _co_attribute_binder__WEBPACK_IMPORTED_MODULE_7__.ComponentAttributeBinder; },
/* harmony export */   "DisabledBinder": function() { return /* reexport safe */ _disabled_binder__WEBPACK_IMPORTED_MODULE_8__.DisabledBinder; },
/* harmony export */   "EachStarBinder": function() { return /* reexport safe */ _each_item_binder__WEBPACK_IMPORTED_MODULE_9__.EachStarBinder; },
/* harmony export */   "EnabledBinder": function() { return /* reexport safe */ _enabled_binder__WEBPACK_IMPORTED_MODULE_10__.EnabledBinder; },
/* harmony export */   "FlexSortChildsBinder": function() { return /* reexport safe */ _flex_sort_childs_binder__WEBPACK_IMPORTED_MODULE_11__.FlexSortChildsBinder; },
/* harmony export */   "HideBinder": function() { return /* reexport safe */ _hide_binder__WEBPACK_IMPORTED_MODULE_12__.HideBinder; },
/* harmony export */   "HtmlBinder": function() { return /* reexport safe */ _html_binder__WEBPACK_IMPORTED_MODULE_13__.HtmlBinder; },
/* harmony export */   "IfBinder": function() { return /* reexport safe */ _if_binder__WEBPACK_IMPORTED_MODULE_14__.IfBinder; },
/* harmony export */   "MaxlengthBinder": function() { return /* reexport safe */ _maxlength_binder__WEBPACK_IMPORTED_MODULE_15__.MaxlengthBinder; },
/* harmony export */   "NotDraggableBinder": function() { return /* reexport safe */ _not_draggable__WEBPACK_IMPORTED_MODULE_16__.NotDraggableBinder; },
/* harmony export */   "OnEventBinder": function() { return /* reexport safe */ _on_event_binder__WEBPACK_IMPORTED_MODULE_17__.OnEventBinder; },
/* harmony export */   "ParentBinder": function() { return /* reexport safe */ _parent_binder__WEBPACK_IMPORTED_MODULE_18__.ParentBinder; },
/* harmony export */   "ReadonlyBinder": function() { return /* reexport safe */ _readonly_binder__WEBPACK_IMPORTED_MODULE_19__.ReadonlyBinder; },
/* harmony export */   "RemoveClassBinder": function() { return /* reexport safe */ _remove_class_binder__WEBPACK_IMPORTED_MODULE_20__.RemoveClassBinder; },
/* harmony export */   "ShowBinder": function() { return /* reexport safe */ _show_binder__WEBPACK_IMPORTED_MODULE_21__.ShowBinder; },
/* harmony export */   "SrcsetSizeBinder": function() { return /* reexport safe */ _srcset_size_binder__WEBPACK_IMPORTED_MODULE_22__.SrcsetSizeBinder; },
/* harmony export */   "StyleBackgroundImageBinder": function() { return /* reexport safe */ _style_background_image_binder__WEBPACK_IMPORTED_MODULE_23__.StyleBackgroundImageBinder; },
/* harmony export */   "StyleStarBinder": function() { return /* reexport safe */ _style_css_property_binder__WEBPACK_IMPORTED_MODULE_24__.StyleStarBinder; },
/* harmony export */   "StyleBinder": function() { return /* reexport safe */ _style_property_binder__WEBPACK_IMPORTED_MODULE_25__.StyleBinder; },
/* harmony export */   "TagStarBinder": function() { return /* reexport safe */ _tag_name_binder__WEBPACK_IMPORTED_MODULE_26__.TagStarBinder; },
/* harmony export */   "TemplateBinder": function() { return /* reexport safe */ _template_binder__WEBPACK_IMPORTED_MODULE_27__.TemplateBinder; },
/* harmony export */   "TextBinder": function() { return /* reexport safe */ _text_binder__WEBPACK_IMPORTED_MODULE_28__.TextBinder; },
/* harmony export */   "ToggleOnEventBinder": function() { return /* reexport safe */ _toggle_on_event_binder__WEBPACK_IMPORTED_MODULE_29__.ToggleOnEventBinder; },
/* harmony export */   "UncheckedBinder": function() { return /* reexport safe */ _unchecked_binder__WEBPACK_IMPORTED_MODULE_30__.UncheckedBinder; },
/* harmony export */   "UnlessBinder": function() { return /* reexport safe */ _unless_binder__WEBPACK_IMPORTED_MODULE_31__.UnlessBinder; },
/* harmony export */   "ValueBinder": function() { return /* reexport safe */ _value_binder__WEBPACK_IMPORTED_MODULE_32__.ValueBinder; }
/* harmony export */ });
/* harmony import */ var _animate_classname_binder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate-classname.binder */ "../../../packages/core/src/binders/animate-classname.binder.ts");
/* harmony import */ var _add_class_binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-class.binder */ "../../../packages/core/src/binders/add-class.binder.ts");
/* harmony import */ var _assign_property_binder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assign-property.binder */ "../../../packages/core/src/binders/assign-property.binder.ts");
/* harmony import */ var _assign_binder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assign.binder */ "../../../packages/core/src/binders/assign.binder.ts");
/* harmony import */ var _block_binder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.binder */ "../../../packages/core/src/binders/block.binder.ts");
/* harmony import */ var _checked_binder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checked.binder */ "../../../packages/core/src/binders/checked.binder.ts");
/* harmony import */ var _class_name_binder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./class-name.binder */ "../../../packages/core/src/binders/class-name.binder.ts");
/* harmony import */ var _co_attribute_binder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./co-attribute.binder */ "../../../packages/core/src/binders/co-attribute.binder.ts");
/* harmony import */ var _disabled_binder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./disabled.binder */ "../../../packages/core/src/binders/disabled.binder.ts");
/* harmony import */ var _each_item_binder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./each-item.binder */ "../../../packages/core/src/binders/each-item.binder.ts");
/* harmony import */ var _enabled_binder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./enabled.binder */ "../../../packages/core/src/binders/enabled.binder.ts");
/* harmony import */ var _flex_sort_childs_binder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./flex-sort-childs.binder */ "../../../packages/core/src/binders/flex-sort-childs.binder.ts");
/* harmony import */ var _hide_binder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hide.binder */ "../../../packages/core/src/binders/hide.binder.ts");
/* harmony import */ var _html_binder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./html.binder */ "../../../packages/core/src/binders/html.binder.ts");
/* harmony import */ var _if_binder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./if.binder */ "../../../packages/core/src/binders/if.binder.ts");
/* harmony import */ var _maxlength_binder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./maxlength.binder */ "../../../packages/core/src/binders/maxlength.binder.ts");
/* harmony import */ var _not_draggable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./not-draggable */ "../../../packages/core/src/binders/not-draggable.ts");
/* harmony import */ var _on_event_binder__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./on-event.binder */ "../../../packages/core/src/binders/on-event.binder.ts");
/* harmony import */ var _parent_binder__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parent.binder */ "../../../packages/core/src/binders/parent.binder.ts");
/* harmony import */ var _readonly_binder__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./readonly.binder */ "../../../packages/core/src/binders/readonly.binder.ts");
/* harmony import */ var _remove_class_binder__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./remove-class.binder */ "../../../packages/core/src/binders/remove-class.binder.ts");
/* harmony import */ var _show_binder__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./show.binder */ "../../../packages/core/src/binders/show.binder.ts");
/* harmony import */ var _srcset_size_binder__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./srcset-size.binder */ "../../../packages/core/src/binders/srcset-size.binder.ts");
/* harmony import */ var _style_background_image_binder__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./style-background-image.binder */ "../../../packages/core/src/binders/style-background-image.binder.ts");
/* harmony import */ var _style_css_property_binder__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./style-css-property.binder */ "../../../packages/core/src/binders/style-css-property.binder.ts");
/* harmony import */ var _style_property_binder__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./style-property.binder */ "../../../packages/core/src/binders/style-property.binder.ts");
/* harmony import */ var _tag_name_binder__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tag-name.binder */ "../../../packages/core/src/binders/tag-name.binder.ts");
/* harmony import */ var _template_binder__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./template.binder */ "../../../packages/core/src/binders/template.binder.ts");
/* harmony import */ var _text_binder__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./text.binder */ "../../../packages/core/src/binders/text.binder.ts");
/* harmony import */ var _toggle_on_event_binder__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./toggle-on-event.binder */ "../../../packages/core/src/binders/toggle-on-event.binder.ts");
/* harmony import */ var _unchecked_binder__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./unchecked.binder */ "../../../packages/core/src/binders/unchecked.binder.ts");
/* harmony import */ var _unless_binder__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./unless.binder */ "../../../packages/core/src/binders/unless.binder.ts");
/* harmony import */ var _value_binder__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./value.binder */ "../../../packages/core/src/binders/value.binder.ts");



 // export * from "./attribute.binder";












 // export * from "./mustache-text.binder";



















/***/ }),

/***/ "../../../packages/core/src/binders/maxlength.binder.ts":
/*!**************************************************************!*\
  !*** ../../../packages/core/src/binders/maxlength.binder.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaxlengthBinder": function() { return /* binding */ MaxlengthBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * maxlength
 */

class MaxlengthBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, maxLength) {
    if (typeof maxLength === "number") {
      el.setAttribute("maxlength", maxLength.toString());
      el.maxLength = maxLength;
    } else {
      el.removeAttribute("maxlength");
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(MaxlengthBinder, "key", "maxlength");

/***/ }),

/***/ "../../../packages/core/src/binders/mustache-text.binder.ts":
/*!******************************************************************!*\
  !*** ../../../packages/core/src/binders/mustache-text.binder.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MustacheTextBinder": function() { return /* binding */ MustacheTextBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


class MustacheTextBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(node, value) {
    node.data = value != null ? value : "";
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(MustacheTextBinder, "key", "mustache-text");

/***/ }),

/***/ "../../../packages/core/src/binders/not-draggable.ts":
/*!***********************************************************!*\
  !*** ../../../packages/core/src/binders/not-draggable.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotDraggableBinder": function() { return /* binding */ NotDraggableBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * not-draggable
 * Useful to prevent dragging of ghost image
 */

class NotDraggableBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el) {
    el.addEventListener("dragstart", event => {
      event.preventDefault();
      return false;
    });
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(NotDraggableBinder, "key", "not-draggable");

/***/ }),

/***/ "../../../packages/core/src/binders/on-event.binder.ts":
/*!*************************************************************!*\
  !*** ../../../packages/core/src/binders/on-event.binder.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnEventBinder": function() { return /* binding */ OnEventBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * Binds an event handler on the element.
 */

class OnEventBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  constructor() {
    super(...arguments);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "function", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 1000);
  }

  unbind(el) {
    if (this.handler) {
      if (this.args === null) {
        throw new Error("args is null");
      }

      const eventName = this.args[0];
      el.removeEventListener(eventName, this.handler);
    }
  }

  routine(el, value) {
    if (this.args === null) {
      throw new Error("args is null");
    }

    const eventName = this.args[0]; // see https://github.com/microsoft/TypeScript/issues/32912

    const options = {
      passive: this.el.dataset.passive === "true" // data-passive="true"

    };

    if (this.handler) {
      el.removeEventListener(eventName, this.handler, options);
    }

    this.handler = this.eventHandler(value, el).bind(this);
    el.addEventListener(eventName, this.handler, options);
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(OnEventBinder, "key", "on-*");

/***/ }),

/***/ "../../../packages/core/src/binders/parent.binder.ts":
/*!***********************************************************!*\
  !*** ../../../packages/core/src/binders/parent.binder.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParentBinder": function() { return /* binding */ ParentBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");
/* harmony import */ var _ribajs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ribajs/utils */ "../../../packages/utils/src/index.ts");



/**
 * parent
 * Binds the parent scope to your component
 */

class ParentBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine() {
    /**/
  }

  bindIntern(el) {
    if (el.setBinderAttribute) {
      el.setBinderAttribute("$parent", this.view.models);
    } else {
      console.warn("[parentBinder] You can only use this binder on Riba components", el.localName, customElements.get(el.localName));
    }
  }

  async bind(el) {
    if ((0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_2__.isCustomElement)(el, true, true)) {
      this.bindIntern(el);
    } else if ((0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_2__.isCustomElement)(el, true)) {
      console.info("[parentBinder] CustomElement ".concat(el.localName, " has been defined, but is not yet upgraded. Waiting for upgrade.."), el);
      await (0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_2__.waitForCustomElement)(el);
      this.bindIntern(el);
    } else {
      console.warn("[parentBinder] You can only use this binder on Riba components", el.localName);
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ParentBinder, "key", "parent");

/***/ }),

/***/ "../../../packages/core/src/binders/readonly.binder.ts":
/*!*************************************************************!*\
  !*** ../../../packages/core/src/binders/readonly.binder.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadonlyBinder": function() { return /* binding */ ReadonlyBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * readonly
 */

class ReadonlyBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, readOnly) {
    readOnly = !!readOnly;
    el.readOnly = readOnly;

    if (readOnly) {
      el.setAttribute("readonly", "");
    } else {
      el.removeAttribute("readonly");
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ReadonlyBinder, "key", "readonly");

/***/ }),

/***/ "../../../packages/core/src/binders/remove-class.binder.ts":
/*!*****************************************************************!*\
  !*** ../../../packages/core/src/binders/remove-class.binder.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveClassBinder": function() { return /* binding */ RemoveClassBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * remove-class
 * Removes the given class string the class attibute.
 * Instead of `class-[classname]` the classname is removed by the
 * given attribute and not by the star value,
 * @example
 * <img class="loading" rv-src="img.src" rv-remove-class="loadingClass">
 */

class RemoveClassBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  bind(el) {
    this.staticClassesString = el.className;
  }

  routine(el, value) {
    const regex = new RegExp("\\b".concat(value, "\\b"), "g");

    if (!this.staticClassesString) {
      throw new Error("staticClassesString is undefined!");
    }

    el.className = this.staticClassesString.replace(regex, "").trim();
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(RemoveClassBinder, "key", "remove-class");

/***/ }),

/***/ "../../../packages/core/src/binders/show.binder.ts":
/*!*********************************************************!*\
  !*** ../../../packages/core/src/binders/show.binder.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowBinder": function() { return /* binding */ ShowBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * Shows the element when value is true (negated version of `hide` binder).
 */

class ShowBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, value) {
    el.style.display = value ? "" : "none";

    if (value) {
      el.removeAttribute("hidden");
    } else {
      el.setAttribute("hidden", "true");
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ShowBinder, "key", "show");

/***/ }),

/***/ "../../../packages/core/src/binders/srcset-size.binder.ts":
/*!****************************************************************!*\
  !*** ../../../packages/core/src/binders/srcset-size.binder.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SrcsetSizeBinder": function() { return /* binding */ SrcsetSizeBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * srcset-size
 * Sets an url with size to the `srcset` attribute
 */

class SrcsetSizeBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, url) {
    const size = this.args[0];
    let srcset = el.getAttribute("srcset");

    if (typeof srcset !== "string") {
      srcset = "";
    }

    if (typeof url === "string" && url.length > 0) {
      const seperator = srcset.length > 0 ? ", " : ""; // Add size to srcset attribute

      srcset += "".concat(seperator).concat(url, " ").concat(size);
    } else {
      // Remove size from srcset attribute
      let sizes = srcset.split(",");
      sizes = sizes.map(iterSize => iterSize.trim());
      sizes = sizes.filter(iterSize => !(iterSize.indexOf(size) !== -1));
      srcset = sizes.join(", ") || "";
    }

    el.setAttribute("srcset", srcset);
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(SrcsetSizeBinder, "key", "srcset-*");

/***/ }),

/***/ "../../../packages/core/src/binders/style-background-image.binder.ts":
/*!***************************************************************************!*\
  !*** ../../../packages/core/src/binders/style-background-image.binder.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleBackgroundImageBinder": function() { return /* binding */ StyleBackgroundImageBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * style-*
 * Adds a style to the element.
 *
 * ```html
 * <div rv-style-background-image="'/image.png'"></div>
 * ```
 */

class StyleBackgroundImageBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, value) {
    const prop = "background-image";

    if (value === null || value === undefined || value === "") {
      el.style.removeProperty(prop);
    } else {
      el.style.setProperty(prop, "url(".concat(value, ")"));
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(StyleBackgroundImageBinder, "key", "style-background-image");

/***/ }),

/***/ "../../../packages/core/src/binders/style-css-property.binder.ts":
/*!***********************************************************************!*\
  !*** ../../../packages/core/src/binders/style-css-property.binder.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleStarBinder": function() { return /* binding */ StyleStarBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * style-*
 * Adds a style to the element.
 *
 * ```html
 * <div rv-style-background-color="'blue'"></div>
 * ```
 */

class StyleStarBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, value) {
    const propertyName = this.args[0];

    if (value === null || value === undefined || value === "") {
      el.style.removeProperty(propertyName.toString());
    } else {
      el.style.setProperty(propertyName.toString(), value);
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(StyleStarBinder, "key", "style-*");

/***/ }),

/***/ "../../../packages/core/src/binders/style-property.binder.ts":
/*!*******************************************************************!*\
  !*** ../../../packages/core/src/binders/style-property.binder.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleBinder": function() { return /* binding */ StyleBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");
/* harmony import */ var _ribajs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ribajs/utils */ "../../../packages/utils/src/index.ts");



/**
 * style
 * Adds a style to the element.
 *
 * ```html
 * <div rv-style="{'backgroundColor':'blue'}"></div>
 * ```
 */

class StyleBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, value) {
    if (value) {
      if (typeof value === "string") {
        el.setAttribute("style", value);
      } else {
        for (const key of Object.keys(value)) {
          el.style.setProperty((0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_2__.kebabCase)(key), value[key] || null);
        }
      }
    } else {
      for (const key of Object.keys(el.style)) {
        el.style.removeProperty(key);
      }
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(StyleBinder, "key", "style");

/***/ }),

/***/ "../../../packages/core/src/binders/tag-name.binder.ts":
/*!*************************************************************!*\
  !*** ../../../packages/core/src/binders/tag-name.binder.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagStarBinder": function() { return /* binding */ TagStarBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * tag-*
 * tag-[tagname]
 *
 * Changes the html tag (whatever value is in place of [tagname]) of the element
 * when the value evaluates to true and reverts to the original tag name if the value evaluates to false.
 *
 * TODO test me on value change
 *
 * @example
 * <div rv-tag-a="item.hasHref">{ item.label }</div>
 */

class TagStarBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  constructor() {
    super(...arguments);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", -1000);
  }

  bind(el) {
    this.originalTag = el.tagName.toLowerCase();
  }

  routine(oldEl, value) {
    if (this.args === null) {
      throw new Error("args is null");
    }

    const curTagName = this.el.tagName.toLowerCase();
    let tagName;

    if (value) {
      tagName = this.args[0].trim().toLowerCase();
    } else if (this.originalTag) {
      tagName = this.originalTag.toLowerCase();
    } else {
      throw new Error("Tag name not found!");
    }

    if (curTagName !== tagName) {
      const newEl = document.createElement(tagName); // Move childs to new element we use this instead if innerHTML to keep the binders alive on this childs

      while (oldEl.childNodes.length > 0) {
        if (oldEl.firstChild) {
          newEl.appendChild(oldEl.firstChild);
        }
      } // Copy attributes to new element


      const attributes = Array.prototype.slice.call(oldEl.attributes);

      for (const attribute of attributes) {
        newEl.setAttribute(attribute.name, attribute.value);
      } // Replace the old element with the new element


      if (oldEl.parentNode) {
        oldEl.parentNode.replaceChild(newEl, oldEl);
      } else {
        console.warn("No parent");
      }

      this.el = newEl;
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(TagStarBinder, "key", "tag-*");

/***/ }),

/***/ "../../../packages/core/src/binders/template.binder.ts":
/*!*************************************************************!*\
  !*** ../../../packages/core/src/binders/template.binder.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateBinder": function() { return /* binding */ TemplateBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ "../../../packages/core/src/view.ts");



/**
 * template
 * Similar to rv-html but also binds the html with riba, so you can also use binders and components in this templates.
 */

class TemplateBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  bind(el) {
    this.nested = new _view__WEBPACK_IMPORTED_MODULE_2__.View(el, this.view.models, this.view.options);
  }

  routine(el, value) {
    var _this$nested, _this$nested2;

    (_this$nested = this.nested) === null || _this$nested === void 0 ? void 0 : _this$nested.unbind();
    el.innerHTML = value ? value : "";
    this.nested = new _view__WEBPACK_IMPORTED_MODULE_2__.View(el, this.view.models, this.view.options);
    (_this$nested2 = this.nested) === null || _this$nested2 === void 0 ? void 0 : _this$nested2.bind();
  }

  unbind() {
    var _this$nested3;

    (_this$nested3 = this.nested) === null || _this$nested3 === void 0 ? void 0 : _this$nested3.unbind();
  }

  update(models) {
    var _this$nested4;

    (_this$nested4 = this.nested) === null || _this$nested4 === void 0 ? void 0 : _this$nested4.update(models);
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(TemplateBinder, "key", "template");

/***/ }),

/***/ "../../../packages/core/src/binders/text.binder.ts":
/*!*********************************************************!*\
  !*** ../../../packages/core/src/binders/text.binder.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextBinder": function() { return /* binding */ TextBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * Sets the element's text value.
 */

class TextBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, value) {
    el.textContent = value != null ? value.toString() : "";
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(TextBinder, "key", "text");

/***/ }),

/***/ "../../../packages/core/src/binders/toggle-on-event.binder.ts":
/*!********************************************************************!*\
  !*** ../../../packages/core/src/binders/toggle-on-event.binder.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleOnEventBinder": function() { return /* binding */ ToggleOnEventBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");


/**
 * Toggles a boolean variable to true/false if the event is triggered.
 */

class ToggleOnEventBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  toggle() {
    if (this.propertyKey) {
      this.view.models[this.propertyKey] = !this.view.models[this.propertyKey];
    }
  }

  bind(el) {
    const eventName = this.args[0];
    const passive = this.el.dataset.passive === "true"; // data-passive="true"

    el.addEventListener(eventName, this.toggle, {
      passive
    });
  }

  unbind(el) {
    if (this.args === null) {
      throw new Error("args is null");
    }

    const eventName = this.args[0];
    el.removeEventListener(eventName, this.toggle);
  }

  routine(el, propertyKey) {
    if (this.args === null) {
      throw new Error("args is null");
    }

    this.propertyKey = propertyKey;
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ToggleOnEventBinder, "key", "toggle-on-*");

/***/ }),

/***/ "../../../packages/core/src/binders/unchecked.binder.ts":
/*!**************************************************************!*\
  !*** ../../../packages/core/src/binders/unchecked.binder.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UncheckedBinder": function() { return /* binding */ UncheckedBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");
/* harmony import */ var _ribajs_utils_src_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ribajs/utils/src/dom */ "../../../packages/utils/src/dom.ts");
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");




/**
 * unchecked
 * Unchecks a checkbox or radio input when the value is true (negated version of
 * `checked` binder). Also sets the model property when the input is checked or
 * unchecked (two-way binder).
 */

class UncheckedBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  constructor() {
    super(...arguments);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "publishes", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 2000);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChange", this.publish.bind(this));
  }

  bind(el) {
    el.addEventListener("change", this.onChange);
  }

  unbind(el) {
    el.removeEventListener("change", this.onChange);
  }

  routine(el, value) {
    if (el.type === "radio") {
      el.checked = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__.getString)(el.value) !== (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__.getString)(value);
    } else {
      el.checked = !value;
    }
  }

  getValue(el) {
    return (0,_ribajs_utils_src_dom__WEBPACK_IMPORTED_MODULE_2__.getInputValue)(el);
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(UncheckedBinder, "key", "unchecked");

/***/ }),

/***/ "../../../packages/core/src/binders/unless.binder.ts":
/*!***********************************************************!*\
  !*** ../../../packages/core/src/binders/unless.binder.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnlessBinder": function() { return /* binding */ UnlessBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _if_binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./if.binder */ "../../../packages/core/src/binders/if.binder.ts");


/**
 * unless
 * Removes and unbinds the element and it's child nodes into the DOM when true
 * (negated version of `if` binder).
 */

class UnlessBinder extends _if_binder__WEBPACK_IMPORTED_MODULE_1__.IfBinder {
  routine(el, value) {
    return super.routine(el, !value);
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(UnlessBinder, "key", "unless");

/***/ }),

/***/ "../../../packages/core/src/binders/value.binder.ts":
/*!**********************************************************!*\
  !*** ../../../packages/core/src/binders/value.binder.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValueBinder": function() { return /* binding */ ValueBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../binder */ "../../../packages/core/src/binder.ts");
/* harmony import */ var _ribajs_utils_src_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ribajs/utils/src/dom */ "../../../packages/utils/src/dom.ts");
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");




const DEFAULT_EVENTS = "change input paste blur focus";
/**
 * Sets the element's value. Also sets the model property when the input changes
 * (two-way binder).
 */

class ValueBinder extends _binder__WEBPACK_IMPORTED_MODULE_1__.Binder {
  constructor() {
    super(...arguments);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "publishes", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 3000);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChange", this.publish.bind(this));
  }

  getData(el) {
    const data = {
      type: el.type,
      tagName: el.tagName,
      contenteditable: el.getAttribute("contenteditable") ? true : false,
      isRadio: false
    };
    data.isRadio = data.tagName === "INPUT" && data.type === "radio";
    return data;
  }

  bind(el) {
    const data = this.getData(el);

    if (!data.isRadio) {
      this.event = el.getAttribute("event-name") || DEFAULT_EVENTS;
      const events = this.event.split(" ");

      for (const event of events) {
        el.addEventListener(event.trim(), this.onChange, false);
      }
    }
  }

  unbind(el) {
    if (this.event) {
      const events = this.event.split(" ");

      for (const event in events) {
        el.removeEventListener(event.trim(), this.onChange);
      }
    }
  }

  routine(el, value) {
    let oldValue = this.getValue(el);

    if (!Array.isArray(value)) {
      if (value != null) {
        value = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__.getString)(value);
      } else {
        value = "";
      }
    }

    if (!Array.isArray(oldValue)) {
      if (oldValue != null) {
        oldValue = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__.getString)(oldValue);
      } else {
        oldValue = "";
      }
    }

    if (oldValue === value) {
      // nothing changed
      return;
    }

    const data = this.getData(el);

    if (data.isRadio) {
      el.setAttribute("value", value);
    } else {
      if (el.type === "select-multiple") {
        if (Array.isArray(value)) {
          for (let i = 0; i < el.options.length; i++) {
            const option = el.options[i];
            option.selected = value.indexOf(option.value) > -1;
          }
        }
      } else if (el.getAttribute("contenteditable")) {
        el.innerHTML = value; // TODO write test for contenteditable
      } else {
        el.value = value;
      }
    }
  }

  getValue(el) {
    return (0,_ribajs_utils_src_dom__WEBPACK_IMPORTED_MODULE_2__.getInputValue)(el);
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ValueBinder, "key", "value");

/***/ }),

/***/ "../../../packages/core/src/component/basic-component.ts":
/*!***************************************************************!*\
  !*** ../../../packages/core/src/component/basic-component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicComponent": function() { return /* binding */ BasicComponent; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ribajs_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ribajs/types */ "../../../infra/types/index.js");
/* harmony import */ var _ribajs_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ribajs_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer */ "../../../packages/core/src/observer.ts");
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");
/* harmony import */ var _ribajs_utils_src_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ribajs/utils/src/color */ "../../../packages/utils/src/color.ts");


/**
 * Auto parse custom element attributes
 *
 * @see https://developer.mozilla.org/de/docs/Web/Web_Components/Using_custom_elements
 */




class BasicComponent extends HTMLElement {
  /**
   * Used to check if all passed observedAttributes are initialized
   */
  constructor() {
    super();

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_debug", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templateLoaded", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "observedAttributesToCheck", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "observedAttributes", []);

    if (this._debug) {
      this._color = (0,_ribajs_utils_src_color__WEBPACK_IMPORTED_MODULE_4__.getRandomColor)();
    }
  }
  /**
   * Remove this custom element
   */


  remove() {
    if (this && this.parentElement) {
      this.parentElement.removeChild(this);
    }
  }

  _log(mode) {
    const namespace = this.constructor.name || this.tagName;

    if (!this._color) {
      this._color = (0,_ribajs_utils_src_color__WEBPACK_IMPORTED_MODULE_4__.getRandomColor)();
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (0,_ribajs_utils_src_color__WEBPACK_IMPORTED_MODULE_4__.consoleColoured)({
      namespace,
      color: this._color,
      mode
    }, ...args);
  }

  info() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return this._log("info", ...args);
  }

  debug() {
    if (!this._debug) {
      return;
    }

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return this._log("debug", ...args);
  }

  error() {
    console.error(...arguments);
  }
  /**
   * returns a list of attributes which are required until the riba binding starts
   */


  requiredAttributes() {
    return [];
  }

  async init(observedAttributes) {
    this.loadAttributes(observedAttributes);
    this.getPassedObservedAttributes(observedAttributes);
    return;
  }

  ready() {
    return this.allPassedObservedAttributesAreInitialized() && this.checkRequiredAttributes();
  }
  /**
   * Check if the attribute (e.g. `src`) is passed to this custom element
   * @param observedAttribute
   */


  attributeIsPassed(observedAttribute) {
    return this.hasAttribute(observedAttribute);
  }
  /**
   * Get passed observed attributes, used to check if all passed attributes are initialized
   * @param observedAttributes
   */


  getPassedObservedAttributes(observedAttributes) {
    const oa2c = this.observedAttributesToCheck;

    for (const observedAttribute of observedAttributes) {
      if (!oa2c[observedAttribute]) {
        oa2c[observedAttribute] = {
          passed: false,
          initialized: false
        };
      } else {
        if (!oa2c[observedAttribute].passed) {
          oa2c[observedAttribute].passed = this.attributeIsPassed(observedAttribute);
        }
      }
    }
  }
  /**
   * Checks if all passed observed attributes are initialized
   */


  allPassedObservedAttributesAreInitialized() {
    return Object.keys(this.observedAttributesToCheck).every(key => {
      var _this$observedAttribu, _this$observedAttribu2;

      return !((_this$observedAttribu = this.observedAttributesToCheck[key]) !== null && _this$observedAttribu !== void 0 && _this$observedAttribu.passed) || ((_this$observedAttribu2 = this.observedAttributesToCheck[key]) === null || _this$observedAttribu2 === void 0 ? void 0 : _this$observedAttribu2.initialized);
    });
  }
  /**
   * Required attributes before the view is bound
   *
   * The attributeChangedCallback is called for each attribute which updates the riba view each time
   * which can have a big impact on performance or required attributes are not yet available which can lead to errors.
   * So define required attributes and the view is ony bind the first time after all this attributes are transmitted.
   */


  checkRequiredAttributes() {
    return this.requiredAttributes().every(requiredAttribute => {
      requiredAttribute = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__.camelCase)(requiredAttribute);
      return this.scope.hasOwnProperty(requiredAttribute) && typeof this.scope[requiredAttribute] !== "undefined";
    });
  }

  parseAttribute(attr) {
    let value = attr;

    if (attr === "true") {
      value = true;
    } else if (attr === "false") {
      value = false;
    } else if (attr === "null") {
      value = null;
    } else if (attr === "undefined") {
      value = undefined;
    } else if (attr === "") {
      value = undefined;
    } else if (!isNaN(Number(attr))) {
      value = Number(attr); // If number is too large store the value as string

      if (value >= Number.MAX_SAFE_INTEGER) {
        value = attr;
      }
    } else {
      const jsonString = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__.parseJsonString)(value);
      value = jsonString ? jsonString : value;
    }

    return value;
  }
  /**
   * Returns an event handler for the bindings (most on-*) inside this component.
   */


  eventHandler(self) {
    // IMPORTANT this must be a function and not a Arrow Functions
    return function (context, event, binding, el) {
      if (!this || !this.call) {
        const error = new Error("[rv-".concat(binding.type, "=\"").concat(binding.keypath, "\"] Event handler \"").concat(binding.keypath, "\" not found!\""));
        console.error(binding, el);
        throw error;
      }

      this.call(self, event, binding.view.models, el);
    };
  }
  /**
   * Default custom Element method
   * Invoked when the custom element is first connected to the document's DOM.
   */


  connectedCallback() {// console.warn('connectedCallback called');
  }
  /**
   * Default custom Element method
   * Invoked when the custom element is disconnected from the document's DOM.
   */


  disconnectedCallback() {// if (this.bound && this.view) {
    //   // IMPORTANT ROUTE FIXME, if we unbind the component then it will no longer work if it is retrieved from the cache and the connectedCallback is called
    //   // because the riba attributes are removed. We need a solution for that, maybe we do not remove the attributes or we recreate the attributes
    //   // See view bind / unbind methods for that.
    //   // only unbind if cache is not enabled?
    //   this.unbind();
    // }
  }
  /**
   * Default custom Element method
   * Invoked when one of the custom element's attributes is added, removed, or changed.
   * @param attributeName
   * @param oldValue
   * @param newValue
   * @param namespace
   */


  async attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
    // this.debug("attributeChangedCallback", attributeName, newValue);
    if (this.observedAttributesToCheck && this.observedAttributesToCheck[attributeName]) {
      this.observedAttributesToCheck[attributeName].initialized = true;
    }

    newValue = this.parseAttribute(newValue);
    const parsedAttributeName = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__.camelCase)(attributeName);

    if (this.scope && this.scope[parsedAttributeName]) {
      oldValue = this.scope[parsedAttributeName];
    } // automatically inject observed attributes to view scope


    this.scope[parsedAttributeName] = newValue; // call custom attribute changed callback with parsed values

    this.parsedAttributeChangedCallback(parsedAttributeName, oldValue, newValue, namespace);
  }
  /**
   * Similar to attributeChangedCallback but attribute arguments are already parsed as they are stored in the scope
   * @param attributeName
   * @param oldValue
   * @param newValue
   * @param namespace
   */


  parsedAttributeChangedCallback(attributeName, oldValue, newValue, namespace) {
    this.debug("parsedAttributeChangedCallback called", attributeName, oldValue, newValue, namespace);
  }
  /**
   * Default custom Element method
   * Invoked when one of the custom element's attributes is added, removed, or changed.
   * Note: Not supported on polyfill: https://github.com/webcomponents/custom-elements#known-bugs-and-limitations
   * @param oldDocument
   * @param newDocument
   */


  adoptedCallback(oldDocument, newDocument) {
    this.debug("adoptedCallback called", oldDocument, newDocument);
  }

  async loadTemplate() {
    if (this.templateLoaded === true) {
      // this.debug("template already loaded");
      return null;
    }

    if (!this.checkRequiredAttributes()) {
      this.debug("Not all required attributes are set to load the template");
      return null;
    }

    this.templateLoaded = true; // if innerHTML is null this component uses the innerHTML which he already has!

    return Promise.resolve(this.template()).then(template => {
      if (template instanceof HTMLElement) {
        this.innerHTML = "";
        this.appendChild(template);
      } else if (template !== null) {
        this.innerHTML = template;
      }

      return template;
    }).catch(error => {
      console.error(error);
      this.templateLoaded = false;
      return null;
    });
  }

  async beforeTemplate() {// this.debug('beforeTemplate');
  }

  async afterTemplate(template) {
    this.debug("afterTemplate", template);
  }

  async onReady() {// this.debug('onReady', this.bound);
  }
  /**
   * Observes a object keypath in the scope
   * @param keypath
   * @param callback
   */


  observe(keypath, callback) {
    return new _observer__WEBPACK_IMPORTED_MODULE_2__.Observer(this.scope, keypath, callback);
  }
  /**
   * Observes a attributeName
   * @param attributeName
   * @param callback
   */


  observeAttribute(attributeName, callback) {
    const parsedAttributeName = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__.camelCase)(attributeName);
    return this.observe(parsedAttributeName, callback);
  }
  /**
   * Directly set a attribute value in the scope.
   * This method is meant to be called from the outside, e.g. from a binder or another component.
   * @note This method is used in the componentAttributeBinder
   * @param attributeName
   * @param newValue
   * @param namespace
   */


  setBinderAttribute(attributeName, newValue) {
    let namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    const parsedAttributeName = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__.camelCase)(attributeName);
    const oldValue = this.scope[parsedAttributeName];
    this.attributeChangedCallback(attributeName, oldValue, newValue, namespace);
  }
  /**
   * Directly get a attribute value from the scope.
   * This method is meant to be called from the outside, e.g. from a binder or another component.
   * @note This method is used in the componentAttributeBinder
   * @param attributeName
   * @returns
   */


  getBinderAttribute(attributeName) {
    const parsedAttributeName = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_3__.camelCase)(attributeName);
    const value = this.scope[parsedAttributeName];
    return value;
  }
  /**
   * Load all attributes and calls the attributeChangedCallback for each attribute.
   * Please note: Normally the browser calls the attributeChangedCallback for you
   */


  loadAttributes(observedAttributes) {
    const attributes = this.attributes;

    for (const i in attributes) {
      const attribute = attributes[i];
      const name = attribute.nodeName;

      if (observedAttributes.indexOf(name) !== -1) {
        const newValue = attribute.nodeValue;
        this.attributeChangedCallback(name, undefined, newValue, null);
      }
    }
  }

}

/***/ }),

/***/ "../../../packages/core/src/component/component.ts":
/*!*********************************************************!*\
  !*** ../../../packages/core/src/component/component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": function() { return /* binding */ Component; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "../../../packages/core/src/view.ts");
/* harmony import */ var _riba__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../riba */ "../../../packages/core/src/riba.ts");
/* harmony import */ var _basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-component */ "../../../packages/core/src/component/basic-component.ts");
/* harmony import */ var _ribajs_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ribajs/events */ "../../../packages/events/dist/esm/index.js");


/**
 * This implementation of components replaces the old components of rivets following the Web Components v1 specs
 *
 * @see https://developer.mozilla.org/de/docs/Web/Web_Components/Using_custom_elements
 */




class Component extends _basic_component__WEBPACK_IMPORTED_MODULE_3__.BasicComponent {
  /** true when binding is in progress */

  /** true when binding is done */

  /** true when component is connected to the dom */

  /** true when component is disconnected from the dom */

  /** true when binding is in progress */
  get binds() {
    return this._binds;
  }
  /** true when binding is done */


  get bound() {
    return this._bound;
  }
  /** true when component is connected to the dom */


  get connected() {
    return this._connected;
  }
  /** true when component is disconnected from the dom */


  get disconnected() {
    return this._disconnected;
  }
  /**
   * If true the component will automatically bind the component to riba if all required attributes are set.
   */


  constructor() {
    super();

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "view", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_binds", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_bound", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_connected", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_disconnected", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lifecycleEvents", _ribajs_events__WEBPACK_IMPORTED_MODULE_4__.EventDispatcher.getInstance("lifecycle"));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autobind", true);

    this.lifecycleEvents.trigger("Component:constructor", this.getLifecycleEventData());
    this.lifecycleEvents.on("ComponentLifecycle:allBound", this.afterAllBind, this);
  }

  async init(observedAttributes) {
    try {
      await super.init(observedAttributes);
      this.lifecycleEvents.trigger("Component:init", this.getLifecycleEventData());
      return this.bindIfReady();
    } catch (error) {
      this.throw(error);
    }
  }
  /**
   * Use this to throw critical errors within the component
   *
   * @protected
   * @param {Error} error
   * @memberof Component
   */


  throw(error) {
    if (error.message) {
      console.error("[".concat(this.tagName, "] ").concat(error.message));
    }

    this.lifecycleEvents.trigger("Component:error", error, this.getLifecycleEventData());
    this.error(error);
  }
  /**
   * If `autobind` is true this component will bind riba automatically in this component if all all passed observed and required attributes are initialized
   */


  async bindIfReady() {
    /**
     * After all required and passed attributes are set we load the template and bind the component
     */
    if (this.ready()) {
      await this.beforeTemplate();
      const template = await this.loadTemplate();
      await this.afterTemplate(template);

      if (this.autobind) {
        await this.bind();
      }

      await this.onReady();
      return;
    }

    this.debug("Not all required or passed attributes are set to load and bind the template", this.observedAttributesToCheck, this.scope);
    return;
  }
  /** Only internal used */


  async _beforeBind() {
    this._binds = true;
    this.debug("Start to bind Riba");
    this.lifecycleEvents.trigger("Component:beforeBind", this.getLifecycleEventData());
  }
  /** Used to handle stuff before binding starts */


  async beforeBind() {// this.debug("beforeBind", this.scope);
  }
  /** Only internal used */


  async _afterBind() {
    this._binds = false;
    this._bound = true;
    this.lifecycleEvents.trigger("Component:afterBind", this.getLifecycleEventData());
  }
  /** Used to handle stuff after binding is done */


  async afterBind() {// this.debug("afterBind", this.scope);
  }
  /**
   * Called after component binding is done for all current components.
   * Please note: this method is called every time a route changes, so be careful with this method.
   */


  async afterAllBind() {// this.debug("afterBind", this.scope);
  }

  getLifecycleEventData() {
    const data = {
      tagName: this.tagName.toLowerCase(),
      // scope: this.scope,
      component: this // id: this.id,

    };
    return data;
  }
  /**
   * Event handler to listen for publish binder event for two-way-binding in web components
   */
  // protected publish(name: string, newValue: any, namespace: string | null) {
  //   this.dispatchEvent(
  //     new CustomEvent("publish-binder-change:" + name, {
  //       detail: {
  //         name,
  //         newValue,
  //         namespace: null, // TODO
  //       },
  //     })
  //   );
  // }

  /**
   * Default custom Element method
   * Invoked when the custom element is disconnected from the document's DOM.
   */


  disconnectedCallback() {
    try {
      this._disconnected = true;
      this._connected = false;
      super.disconnectedCallback(); // IMPORTANT ROUTE FIXME, if we unbind the component then it will no longer work if it is retrieved from the cache and the connectedCallback is called
      // because the riba attributes are removed. We need a solution for that, maybe we do not remove the attributes or we recreate the attributes
      // See view bind / unbind methods for that.
      // only unbind if cache is not enabled?
      // if (this._binds && this.view) {
      //   this.unbind();
      // }

      this.lifecycleEvents.trigger("Component:disconnected", this.getLifecycleEventData());
      this.lifecycleEvents.off("ComponentLifecycle:allBound", this.afterAllBind, this);
    } catch (error) {
      this.throw(error);
    }
  }
  /**
   * Default custom Element method
   * Invoked when the custom element is first connected to the document's DOM.
   */


  connectedCallback() {
    try {
      this._disconnected = false;
      this._connected = true;
      super.connectedCallback();
      this.lifecycleEvents.trigger("Component:connected", this.getLifecycleEventData());
    } catch (error) {
      this.throw(error);
    }
  }
  /**
   * Default custom Element method
   * Invoked when one of the custom element's attributes is added, removed, or changed.
   * @param attributeName
   * @param oldValue
   * @param newValue
   * @param namespace
   */


  async attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
    try {
      super.attributeChangedCallback(attributeName, oldValue, newValue, namespace);
      await this.bindIfReady();
    } catch (error) {
      this.throw(error);
    }
  }
  /**
   * Extra call formatter to avoid the "this" context problem
   */


  callFormatterHandler(self) {
    return {
      name: "call",
      read: function (fn) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        if (!fn) {
          throw new Error("[".concat(self.tagName, "] Can not use \"call\" formatter: fn is undefined!"));
        }

        return fn.apply(self, args);
      }
    };
  }
  /**
   * Extra args formatter to avoid the "this" context problem
   *
   * Sets arguments to a function without directly call them
   * @param fn The function you wish to call
   * @param args the parameters you wish to call the function with
   */


  argsFormatterHandler(self) {
    return {
      name: "args",
      read: function (fn) {
        for (var _len2 = arguments.length, fnArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          fnArgs[_key2 - 1] = arguments[_key2];
        }

        return (event, scope, el, binding) => {
          if (!fn) {
            throw new Error("[".concat(self.tagName, "] Can not use \"args\" formatter: fn is undefined!"));
          } // append the event handler args to passed args


          fnArgs.push(event);
          fnArgs.push(scope);
          fnArgs.push(el);
          fnArgs.push(binding);
          return fn.apply(self, fnArgs);
        };
      }
    };
  }

  async bind() {
    if (this.binds || this.bound) {
      // this.debug("component already bound");
      return this.view;
    }

    if (!this.checkRequiredAttributes()) {
      this.debug("Not all required attributes are set for bind");
      return;
    }

    try {
      await this._beforeBind();
      await this.beforeBind();
      this.riba = new _riba__WEBPACK_IMPORTED_MODULE_2__.Riba();
      this.view = this.getView();

      if (this.view) {
        this.scope = this.view.models;
        this.view.bind();
      }

      await this._afterBind();
      await this.afterBind();
    } catch (error) {
      this._binds = false;
      this._bound = false;
      this.throw(error);
    }

    return this.view;
  }

  getView() {
    try {
      var _this$riba;

      const viewOptions = (_this$riba = this.riba) === null || _this$riba === void 0 ? void 0 : _this$riba.getViewOptions({
        handler: this.eventHandler(this),
        formatters: {
          call: this.callFormatterHandler(this),
          args: this.argsFormatterHandler(this)
        }
      });

      if (viewOptions) {
        const view = new _view__WEBPACK_IMPORTED_MODULE_1__.View(Array.prototype.slice.call(this.childNodes), this.scope, viewOptions);
        return view;
      }

      return null;
    } catch (error) {
      this.throw(error);
    }
  }

  async unbind() {
    try {
      if (this.view) {
        this._binds = false;
        this._bound = false;
        this.view.unbind();
        this.view = null;
      }
    } catch (error) {
      this.throw(error);
    }
  }

  async build() {
    try {
      if (this.view) {
        this.view.build();
      }
    } catch (error) {
      this.throw(error);
    }
  }

}

/***/ }),

/***/ "../../../packages/core/src/component/index.ts":
/*!*****************************************************!*\
  !*** ../../../packages/core/src/component/index.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentService": function() { return /* reexport safe */ _services_component_service__WEBPACK_IMPORTED_MODULE_0__.ComponentService; },
/* harmony export */   "Component": function() { return /* reexport safe */ _component_component__WEBPACK_IMPORTED_MODULE_1__.Component; },
/* harmony export */   "BasicComponent": function() { return /* reexport safe */ _component_basic_component__WEBPACK_IMPORTED_MODULE_2__.BasicComponent; }
/* harmony export */ });
/* harmony import */ var _services_component_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/component.service */ "../../../packages/core/src/services/component.service.ts");
/* harmony import */ var _component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/component */ "../../../packages/core/src/component/component.ts");
/* harmony import */ var _component_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/basic-component */ "../../../packages/core/src/component/basic-component.ts");




/***/ }),

/***/ "../../../packages/core/src/components/index.ts":
/*!******************************************************!*\
  !*** ../../../packages/core/src/components/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoComponent": function() { return /* reexport safe */ _video_video_component__WEBPACK_IMPORTED_MODULE_0__.VideoComponent; }
/* harmony export */ });
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video/video.component */ "../../../packages/core/src/components/video/video.component.ts");
// Do not export abstract components: export { TemplatesComponent } from "./templates/templates.component";


/***/ }),

/***/ "../../../packages/core/src/components/templates/templates.component.ts":
/*!******************************************************************************!*\
  !*** ../../../packages/core/src/components/templates/templates.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesComponent": function() { return /* binding */ TemplatesComponent; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ribajs/core */ "../../../packages/core/src/index.ts");
/* harmony import */ var _ribajs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ribajs/utils */ "../../../packages/utils/src/index.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



class TemplatesComponent extends _ribajs_core__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super(...arguments);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templateAttributes", []);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templateReady", false);
  }

  connectedCallback() {
    this.addItemsByTemplate();
    super.connectedCallback();
    this.removeTemplates();
    this.bindIfReady();
  }

  ready() {
    return super.ready() && this.templateReady;
  }
  /**
   * Called before getting attribute value, use this method to transform the attribute value if you wish
   * @param name Attribute name
   * @param value Attribute value
   */


  transformTemplateAttribute(name, value, type) {
    switch (type) {
      case "number":
        return Number(value);

      case "boolean":
        return value === "true";

      case "string":
        if (typeof value === "string") {
          return value;
        }

        if (typeof value.toString === "function") {
          return value.toString();
        }

      case "object":
        return (0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_2__.parseJsonString)(value);
    }

    return (0,_ribajs_core__WEBPACK_IMPORTED_MODULE_1__.parseType)(value).value;
  }
  /**
   * Called before getting all attribute values, use this method to transform the attribute values if you wish
   * @param attributes
   */


  transformTemplateAttributes(attributes, index) {
    attributes.index = attributes.index || index;
    return attributes;
  }

  getTemplateAttributes(tpl, index) {
    const attributes = {};

    for (const attribute of this.templateAttributes) {
      const attrValue = tpl.getAttribute(attribute.name);

      if (typeof attrValue !== "string" && attribute.required) {
        console.error(new Error("template \"".concat(attribute.name, "\" attribute is required!")));
      } else {
        attributes[(0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_2__.camelCase)(attribute.name)] = this.transformTemplateAttribute(attribute.name, tpl.getAttribute(attribute.name));
      }
    }

    return this.transformTemplateAttributes(attributes, index);
  }

  addItemByTemplate(tpl, index) {
    const attributes = this.getTemplateAttributes(tpl, index);
    const content = tpl.innerHTML;

    if (!this.scope.items) {
      this.scope.items = [];
    }

    this.scope.items.push(_objectSpread(_objectSpread({}, attributes), {}, {
      content
    }));
  }

  addItemsByTemplate() {
    const templates = this.querySelectorAll("template, .template");

    for (let index = 0; index < templates.length; index++) {
      const tpl = templates[index];
      this.addItemByTemplate(tpl, index);
    }

    this.templateReady = true;
  }

  removeTemplates() {
    const templates = this.querySelectorAll("template, .template");

    for (let index = 0; index < templates.length; index++) {
      const tpl = templates[index];
      this.removeChild(tpl);
    }
  }

  hasOnlyTemplateChilds() {
    return !Array.from(this.children).some(child => {
      var _child$classList;

      return child.nodeName !== "TEMPLATE" && !((_child$classList = child.classList) !== null && _child$classList !== void 0 && _child$classList.contains("template")) && child.nodeName !== "#text";
    });
  }

}

/***/ }),

/***/ "../../../packages/core/src/components/video/video.component.ts":
/*!**********************************************************************!*\
  !*** ../../../packages/core/src/components/video/video.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoComponent": function() { return /* binding */ VideoComponent; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/component */ "../../../packages/core/src/component/component.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "../../../packages/core/src/types/index.ts");
/* harmony import */ var _ribajs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ribajs/utils */ "../../../packages/utils/src/index.ts");




class VideoComponent extends _component_component__WEBPACK_IMPORTED_MODULE_1__.Component {
  static get observedAttributes() {
    return ["video-src", "autoplay-on-min-buffer", "autoplay-media-query"];
  }

  get muted() {
    return this.video && this.video.muted;
  }

  set muted(muted) {
    this.video.muted = muted;
    this.scope.muted = this.video.muted;

    if (muted) {
      this.video.setAttribute("muted", "");
    } else {
      this.video.removeAttribute("muted");
    }

    this.onUpdate();
  }
  /**
   * * 1.0 is highest volume (100%. This is default)
   * * 0.5 is half volume (50%)
   * * 0.0 is silent (same as mute)
   */


  get volume() {
    var _this$video;

    return ((_this$video = this.video) === null || _this$video === void 0 ? void 0 : _this$video.volume) || 0;
  }

  set volume(volume) {
    this.video.volume = volume;
    this.onUpdate();
  }

  get loop() {
    var _this$video2;

    return (_this$video2 = this.video) === null || _this$video2 === void 0 ? void 0 : _this$video2.loop;
  }

  set loop(loop) {
    this.video.loop = loop;

    if (loop) {
      this.video.setAttribute("loop", "");
    } else {
      this.video.removeAttribute("loop");
    }

    this.onUpdate();
  }

  get controls() {
    var _this$video3;

    return (_this$video3 = this.video) === null || _this$video3 === void 0 ? void 0 : _this$video3.controls;
  }

  set controls(controls) {
    this.video.controls = controls;
    this.scope.controls = this.video.controls;

    if (controls) {
      this.video.setAttribute("controls", ""); // show controls

      this.video.dispatchEvent(new Event("mouseover"));
      this.video.dispatchEvent(new Event("mouseenter"));
      this.video.dispatchEvent(new Event("mousemove"));
    } else {
      this.video.removeAttribute("controls");
    }

    this.onUpdate();
  }

  get currentTime() {
    var _this$video4;

    return ((_this$video4 = this.video) === null || _this$video4 === void 0 ? void 0 : _this$video4.currentTime) || 0;
  }

  set currentTime(currentTime) {
    this.video.currentTime = currentTime;
    this.onUpdate();
  }

  get autoplay() {
    var _this$video5;

    return ((_this$video5 = this.video) === null || _this$video5 === void 0 ? void 0 : _this$video5.autoplay) || false;
  }

  set autoplay(autoplay) {
    this.video.autoplay = autoplay;
    this.onUpdate();
  }

  get height() {
    var _this$video6;

    return ((_this$video6 = this.video) === null || _this$video6 === void 0 ? void 0 : _this$video6.height) || 0;
  }

  set height(height) {
    this.video.height = height;
    this.onUpdate();
  }

  get width() {
    var _this$video7;

    return ((_this$video7 = this.video) === null || _this$video7 === void 0 ? void 0 : _this$video7.width) || 0;
  }

  set width(width) {
    this.video.width = width;
    this.onUpdate();
  }

  get poster() {
    var _this$video8;

    return (_this$video8 = this.video) === null || _this$video8 === void 0 ? void 0 : _this$video8.poster;
  }

  set poster(poster) {
    this.video.poster = poster;
    this.onUpdate();
  }

  get preload() {
    var _this$video9;

    return (_this$video9 = this.video) === null || _this$video9 === void 0 ? void 0 : _this$video9.preload;
  }

  set preload(preload) {
    this.video.preload = preload;
    this.onUpdate();
  }

  get disablePictureInPicture() {
    var _this$video10, _this$video11;

    return ((_this$video10 = this.video) === null || _this$video10 === void 0 ? void 0 : _this$video10.disablePictureInPicture) || ((_this$video11 = this.video) === null || _this$video11 === void 0 ? void 0 : _this$video11.hasAttribute("disablePictureInPicture")) || false;
  }

  set disablePictureInPicture(disablePictureInPicture) {
    var _this$video12;

    if (typeof ((_this$video12 = this.video) === null || _this$video12 === void 0 ? void 0 : _this$video12.disablePictureInPicture) !== "undefined") {
      this.video.disablePictureInPicture = disablePictureInPicture;
    }

    if (disablePictureInPicture) {
      this.video.setAttribute("disablePictureInPicture", "");
    } else {
      this.video.removeAttribute("disablePictureInPicture");
    }

    this.onUpdate();
  }
  /**
   * @readonly
   */


  get paused() {
    var _this$video$paused, _this$video13;

    return (_this$video$paused = (_this$video13 = this.video) === null || _this$video13 === void 0 ? void 0 : _this$video13.paused) !== null && _this$video$paused !== void 0 ? _this$video$paused : true;
  }

  constructor() {
    super();

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autobind", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "alreadyStartedPlaying", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "wasPaused", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_debug", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scope", {
      // properties
      muted: this.muted,
      volume: this.volume,
      loop: this.loop,
      controls: this.controls,
      currentTime: this.currentTime,
      videoSrc: undefined,
      autoplayOnMinBuffer: 0,
      autoplayMediaQuery: "",
      disablePictureInPicture: this.disablePictureInPicture,

      /**
       * @readonly
       */
      paused: this.paused,
      loading: false,
      duration: 0,
      readyState: _types__WEBPACK_IMPORTED_MODULE_2__.MediaReadyState.HAVE_NOTHING,
      buffer: 0,
      // methods
      toggleMute: this.toggleMute,
      toggleControls: this.toggleControls,
      play: this.play,
      pause: this.pause,
      togglePlay: this.togglePlay,
      togglePause: this.togglePause,
      reset: this.reset
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onUpdate", this._onUpdate.bind(this));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "forceAutoplay", this._forceAutoplay.bind(this));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onMediaQueryListEvent", this._onMediaQueryListEvent.bind(this));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onVideoProgress", this._onVideoProgress.bind(this));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onLoadStart", this._onLoadStart.bind(this));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCanPlay", this._onCanPlay.bind(this));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCanPlayThrough", this._onCanPlayThrough.bind(this));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onWaiting", this._onWaiting.bind(this));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onDurationChange", this._onDurationChange.bind(this));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onTimeUpdate", this._onTimeUpdate.bind(this));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onPlay", this._onPlay.bind(this));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onPause", this._onPause.bind(this));

    const video = this.querySelector("video");
    this.video = video;
  }

  toggleMute() {
    this.debug("toggleMute");
    this.muted = !this.muted;
    this.onUpdate();
  }

  toggleControls() {
    this.debug("toggleControls");
    this.controls = !this.controls;
    this.onUpdate();
  }

  play() {
    this.debug("play");
    this.video.play();
  }

  pause() {
    this.debug("pause");
    this.video.pause();
    this.onUpdate();
  }

  togglePlay() {
    if (this.paused) {
      return this.play();
    } else {
      return this.pause();
    }
  }

  togglePause() {
    this.debug("togglePause");
    return this.togglePlay();
  }

  reset() {
    this.debug("reset");
    this.video.currentTime = 0;
    this.onUpdate();
  }

  connectedCallback() {
    super.connectedCallback();
    this.init(VideoComponent.observedAttributes);
  }

  initVideoElement() {
    const video = this.querySelector("video");

    if (!video) {
      throw new Error("The video child element is required!");
    }

    this.video = video;
    this.addEventListeners();
    this.onUpdate();
  }
  /**
   * Used to load new video source file
   */


  resetVideo() {
    this.video.innerHTML = "";
    const videoEl = this.video.cloneNode(true);
    const videoWrapperEl = this.querySelector(".video-wrapper");
    this.removeEventListeners();
    this.video.remove();

    if (videoWrapperEl) {
      videoWrapperEl.appendChild(videoEl);
    } else {
      this.appendChild(videoEl);
    }

    this.video = videoEl;

    if (this.video.hasAttribute("muted")) {
      this.muted = true;
    } else {
      this.muted = false;
    }

    if (this.video.hasAttribute("controls")) {
      this.controls = true;
    } else {
      this.controls = false;
    }

    if (this.video.hasAttribute("autoplay")) {
      this.autoplay = true;
    } else {
      this.autoplay = false;
    }

    if (this.video.hasAttribute("height")) {
      this.height = (0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_3__.justDigits)(this.video.getAttribute("height") || 0);
    }

    if (this.video.hasAttribute("width")) {
      this.width = (0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_3__.justDigits)(this.video.getAttribute("width") || 0);
    }

    if (this.video.hasAttribute("loop")) {
      this.loop = true;
    } else {
      this.loop = false;
    }

    if (this.video.hasAttribute("muted")) {
      this.muted = true;
    } else {
      this.muted = false;
    }

    if (this.video.hasAttribute("poster")) {
      this.poster = this.video.getAttribute("poster") || "";
    }

    if (this.video.hasAttribute("preload")) {
      this.preload = this.video.getAttribute("preload") || "";
    }

    if (this.video.hasAttribute("disablePictureInPicture")) {
      this.disablePictureInPicture = true;
    } else {
      this.disablePictureInPicture = false;
    }

    this.scope.readyState = _types__WEBPACK_IMPORTED_MODULE_2__.MediaReadyState.HAVE_NOTHING;
    this.alreadyStartedPlaying = false;
    this.scope.loading = false;
    this.initVideoElement();
  }

  setVideoSource() {
    if (this.scope.videoSrc) {
      this.resetVideo();
      let sourceElement = this.video.querySelector("source");

      if (!sourceElement) {
        sourceElement = document.createElement("source");
        this.video.appendChild(sourceElement);
      }

      sourceElement.setAttribute("src", this.scope.videoSrc);
    }
  }

  parsedAttributeChangedCallback(attributeName, oldValue, newValue, namespace) {
    super.parsedAttributeChangedCallback(attributeName, oldValue, newValue, namespace);
    this.debug("parsedAttributeChangedCallback", attributeName);

    if (attributeName === "videoSrc") {
      this.setVideoSource();
    }
  }

  addEventListeners() {
    if (this.scope.autoplayMediaQuery) {
      // autoplay-media-query attribute
      const mediaQueryList = window.matchMedia(this.scope.autoplayMediaQuery);
      mediaQueryList.addEventListener("change", this.onMediaQueryListEvent); // Initial check

      if (mediaQueryList.matches) {
        this.startAutoplay();
      }
    }

    this.video.addEventListener("progress", this.onVideoProgress);
    this.video.addEventListener("loadstart", this.onLoadStart);
    this.video.addEventListener("canplay", this.onCanPlay);
    this.video.addEventListener("canplaythrough", this.onCanPlayThrough);
    this.video.addEventListener("waiting", this.onWaiting);
    this.video.addEventListener("durationchange", this.onDurationChange);
    this.video.addEventListener("timeupdate", this.onTimeUpdate);
    this.video.addEventListener("play", this.onPlay);
    this.video.addEventListener("pause", this.onPause);
  }

  removeEventListeners() {
    if (this.scope.autoplayMediaQuery) {
      // autoplay-media-query attribute
      const mediaQueryList = window.matchMedia(this.scope.autoplayMediaQuery);
      mediaQueryList.removeEventListener("change", this.onMediaQueryListEvent);
    }

    this.video.removeEventListener("progress", this.onVideoProgress);
    this.video.removeEventListener("loadstart", this.onLoadStart);
    this.video.removeEventListener("canplay", this.onCanPlay);
    this.video.removeEventListener("canplaythrough", this.onCanPlayThrough);
    this.video.removeEventListener("waiting", this.onWaiting);
    this.video.removeEventListener("durationchange", this.onDurationChange);
    this.video.removeEventListener("timeupdate", this.onTimeUpdate);
    this.video.removeEventListener("play", this.onPlay);
    this.video.removeEventListener("pause", this.onPause);
  }

  _onUpdate() {
    if (this.scope.muted !== this.video.muted) {
      this.scope.muted = this.video.muted;
    }

    if (this.scope.volume !== this.video.volume) {
      this.scope.volume = this.video.volume;
    }

    if (this.scope.loop !== this.video.loop) {
      this.scope.loop = this.video.loop;
    }

    if (this.scope.controls !== this.video.controls) {
      this.scope.controls = this.video.controls;
    }

    if (this.scope.currentTime !== this.video.currentTime) {
      this.scope.currentTime = this.video.currentTime;
    }

    if (this.scope.paused !== this.video.paused) {
      this.scope.paused = this.video.paused;
    }

    if (this.scope.duration !== this.video.duration) {
      this.scope.duration = this.video.duration;
    }

    if (this.scope.readyState !== this.video.readyState) {
      this.scope.readyState = this.video.readyState;
    }
  }

  async beforeBind() {
    this.initVideoElement();
  }
  /**
   * Loads the media and checks if the autoplay-on-min-buffer is set
   */


  startAutoplay() {
    if (this.scope.autoplayOnMinBuffer) {
      this.forceLoad();
    } else {
      this.forceAutoplay();
    }
  }

  forceLoad() {
    this.video.setAttribute("preload", "auto");
    this.video.load();
  }
  /**
   * Forces autoplay without checking for the autoplay-on-min-buffer event
   */


  _forceAutoplay() {
    if (!this.alreadyStartedPlaying) {
      this.alreadyStartedPlaying = true;
      this.video.muted = true; //video is required to be muted if autoplay video is supposed to autoplay

      this.forceLoad();
      this.play();
    }
  }
  /**
   * Forces autoplay without checking for the autoplay-on-min-buffer event
   */


  /*********************
   * Event listener start
   *********************/
  _onMediaQueryListEvent(event) {
    if (event.matches) {
      //if mediaquery matches, play video or start autoplay
      if (this.alreadyStartedPlaying) {
        if (!this.wasPaused) {
          this.play();
        }
      } else {
        this.startAutoplay();
      }
    } else {
      //if mediaquery stops matching, pause video if not already paused
      this.wasPaused = this.video.paused;
      this.pause();
    }
  }

  _onVideoProgress() {
    this.debug("_onVideoProgress");
    if (this.alreadyStartedPlaying) return;

    if (isNaN(this.video.duration)) {
      console.warn("Video duration is NaN");
      return;
    } // Calculate already buffered amount


    let bufferedAmount = 0;

    for (let i = 0; i < this.video.buffered.length; i++) {
      bufferedAmount += this.video.buffered.end(i) - this.video.buffered.start(i);
    }

    this.scope.buffer = bufferedAmount / this.video.duration; // If buffered amount is over given percentage in scope, force autoplay

    if (this.scope.autoplayOnMinBuffer && this.scope.buffer > this.scope.autoplayOnMinBuffer) {
      this.forceAutoplay();
    }
  }

  _onLoadStart() {
    this.debug("_onLoadStart");
    this.scope.loading = true;
    this.onUpdate();
  }

  _onCanPlay() {
    this.debug("_onCanPlay"); // this.scope.loading = false;

    this.onUpdate();
  }

  _onCanPlayThrough() {
    this.scope.loading = false;

    if (this.scope.autoplayOnMinBuffer) {
      this.forceAutoplay(); // trust browser more than ourselves
    }

    this.onUpdate();
  }

  _onWaiting() {
    this.debug("_onPlay");
    this.scope.loading = true;
    this.onUpdate();
  }

  _onDurationChange() {
    this.onUpdate();
  }

  _onTimeUpdate() {
    this.onUpdate();
  }

  _onPlay() {
    this.debug("_onPlay");
    this.scope.loading = false;
    this.alreadyStartedPlaying = true;
    this.scope.paused = false;
    this.onUpdate();
  }

  _onPause() {
    this.scope.paused = true;
    this.onUpdate();
  }

  /*********************
   * Event listener end
   *********************/
  async init(observedAttributes) {
    return super.init(observedAttributes).then(view => {
      return view;
    });
  } // deconstruction


  disconnectedCallback() {
    super.disconnectedCallback();
  }

  template() {
    return null;
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(VideoComponent, "tagName", "rv-video");

/***/ }),

/***/ "../../../packages/core/src/constants/formatter.ts":
/*!*********************************************************!*\
  !*** ../../../packages/core/src/constants/formatter.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FORMATTER_ARGS": function() { return /* binding */ FORMATTER_ARGS; },
/* harmony export */   "FORMATTER_SPLIT": function() { return /* binding */ FORMATTER_SPLIT; }
/* harmony export */ });
const FORMATTER_ARGS = /[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g;
const FORMATTER_SPLIT = /\s+/;

/***/ }),

/***/ "../../../packages/core/src/constants/parser.ts":
/*!******************************************************!*\
  !*** ../../../packages/core/src/constants/parser.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PRIMITIVE": function() { return /* binding */ PRIMITIVE; },
/* harmony export */   "KEYPATH": function() { return /* binding */ KEYPATH; },
/* harmony export */   "TEXT": function() { return /* binding */ TEXT; },
/* harmony export */   "BINDING": function() { return /* binding */ BINDING; },
/* harmony export */   "QUOTED_STR": function() { return /* binding */ QUOTED_STR; },
/* harmony export */   "DECLARATION_SPLIT": function() { return /* binding */ DECLARATION_SPLIT; }
/* harmony export */ });
const PRIMITIVE = 0;
const KEYPATH = 1;
const TEXT = 0;
const BINDING = 1;
const QUOTED_STR = /^'.*'$|^".*"$/; // regex to test if string is wrapped in " or '

const DECLARATION_SPLIT = /((?:'[^']*')*(?:(?:[^|']*(?:'[^']*')+[^|']*)+|[^|]+))|^$/g;

/***/ }),

/***/ "../../../packages/core/src/core.module.ts":
/*!*************************************************!*\
  !*** ../../../packages/core/src/core.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coreModule": function() { return /* binding */ coreModule; }
/* harmony export */ });
/* harmony import */ var _binders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binders */ "../../../packages/core/src/binders/index.ts");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatters */ "../../../packages/core/src/formatters/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "../../../packages/core/src/services/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "../../../packages/core/src/components/index.ts");
/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adapters */ "../../../packages/core/src/adapters/index.ts");





const coreModule = {
  formatters: _formatters__WEBPACK_IMPORTED_MODULE_1__,
  binders: _binders__WEBPACK_IMPORTED_MODULE_0__,
  services: _services__WEBPACK_IMPORTED_MODULE_2__,
  components: _components__WEBPACK_IMPORTED_MODULE_3__,
  adapters: _adapters__WEBPACK_IMPORTED_MODULE_4__,

  init() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _services__WEBPACK_IMPORTED_MODULE_2__.CoreService.setSingleton(options);

    window.onerror = (msg, url, line, col, error) => {
      console.error(msg, url, line, col, error);
    };

    window.addEventListener("error", event => {
      console.error(event);
    });
    return this;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/array/contains.formatter.ts":
/*!*************************************************************************!*\
  !*** ../../../packages/core/src/formatters/array/contains.formatter.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "containsFormatter": function() { return /* binding */ containsFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Returns true if an object, array or string contains an index, object, property or substring.
 * @see https://gist.github.com/der-On/cdafe908847e2b882691
 */

const containsFormatter = {
  name: "contains",

  read(value, attr, search) {
    if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {
      return value.indexOf(attr) > -1;
    } else if (Array.isArray(value)) {
      if (!(0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isNumber)(attr)) {
        console.warn("[containsFormatter] The second parameter must be of type number for arrays but is " + typeof attr);
      }

      attr = Number(attr);

      if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isDefined)(attr)) {
        if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isDefined)(search)) {
          return value[attr] === search;
        } else {
          return value.indexOf(attr) !== -1;
        }
      }
    } else if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)) {
      if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isDefined)(attr)) {
        if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isDefined)(search)) {
          return value[attr] === search;
        } else {
          if (!(0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isString)(attr)) {
            console.warn("[containsFormatter] The second parameter must be of type string for objects" + typeof attr);
          }

          return Object.keys(value).indexOf(String(attr)) !== -1;
        }
      }
    }

    return false;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/array/empty.formatter.ts":
/*!**********************************************************************!*\
  !*** ../../../packages/core/src/formatters/array/empty.formatter.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyFormatter": function() { return /* binding */ emptyFormatter; }
/* harmony export */ });
/* harmony import */ var _size_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./size.formatter */ "../../../packages/core/src/formatters/array/size.formatter.ts");

const emptyFormatter = {
  name: "empty",

  read(a) {
    return _size_formatter__WEBPACK_IMPORTED_MODULE_0__.sizeFormatter.read(a) <= 0;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/array/first.formatter.ts":
/*!**********************************************************************!*\
  !*** ../../../packages/core/src/formatters/array/first.formatter.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstFormatter": function() { return /* binding */ firstFormatter; }
/* harmony export */ });
/* harmony import */ var _get_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.formatter */ "../../../packages/core/src/formatters/array/get.formatter.ts");

/**
 * Array formatter to get the first element of an array
 */

const firstFormatter = {
  name: "first",

  read(value) {
    return _get_formatter__WEBPACK_IMPORTED_MODULE_0__.getFormatter.read(value, 0);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/array/get.formatter.ts":
/*!********************************************************************!*\
  !*** ../../../packages/core/src/formatters/array/get.formatter.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormatter": function() { return /* binding */ getFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Get property of object or array
 * @see https://gist.github.com/der-On/cdafe908847e2b882691
 */

const getFormatter = {
  name: "get",

  read(value, key) {
    if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) || Array.isArray(value)) {
      return value[key];
    }

    if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {
      if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isNumber)(key)) {
        return value.charAt(key);
      }
    }

    return null;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/array/index.ts":
/*!************************************************************!*\
  !*** ../../../packages/core/src/formatters/array/index.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "containsFormatter": function() { return /* reexport safe */ _contains_formatter__WEBPACK_IMPORTED_MODULE_0__.containsFormatter; },
/* harmony export */   "emptyFormatter": function() { return /* reexport safe */ _empty_formatter__WEBPACK_IMPORTED_MODULE_1__.emptyFormatter; },
/* harmony export */   "firstFormatter": function() { return /* reexport safe */ _first_formatter__WEBPACK_IMPORTED_MODULE_2__.firstFormatter; },
/* harmony export */   "getFormatter": function() { return /* reexport safe */ _get_formatter__WEBPACK_IMPORTED_MODULE_3__.getFormatter; },
/* harmony export */   "isLastFormatter": function() { return /* reexport safe */ _is_last_formatter__WEBPACK_IMPORTED_MODULE_4__.isLastFormatter; },
/* harmony export */   "lastFormatter": function() { return /* reexport safe */ _last_formatter__WEBPACK_IMPORTED_MODULE_5__.lastFormatter; },
/* harmony export */   "randomFormatter": function() { return /* reexport safe */ _random_formatter__WEBPACK_IMPORTED_MODULE_6__.randomFormatter; },
/* harmony export */   "rangeFormatter": function() { return /* reexport safe */ _range_formatter__WEBPACK_IMPORTED_MODULE_7__.rangeFormatter; },
/* harmony export */   "setFormatter": function() { return /* reexport safe */ _set_formatter__WEBPACK_IMPORTED_MODULE_8__.setFormatter; },
/* harmony export */   "sizeFormatter": function() { return /* reexport safe */ _size_formatter__WEBPACK_IMPORTED_MODULE_9__.sizeFormatter; },
/* harmony export */   "overlapsFormatter": function() { return /* reexport safe */ _overlaps_formatter__WEBPACK_IMPORTED_MODULE_10__.overlapsFormatter; },
/* harmony export */   "joinFormatter": function() { return /* reexport safe */ _join_formatter__WEBPACK_IMPORTED_MODULE_11__.joinFormatter; }
/* harmony export */ });
/* harmony import */ var _contains_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contains.formatter */ "../../../packages/core/src/formatters/array/contains.formatter.ts");
/* harmony import */ var _empty_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty.formatter */ "../../../packages/core/src/formatters/array/empty.formatter.ts");
/* harmony import */ var _first_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first.formatter */ "../../../packages/core/src/formatters/array/first.formatter.ts");
/* harmony import */ var _get_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get.formatter */ "../../../packages/core/src/formatters/array/get.formatter.ts");
/* harmony import */ var _is_last_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-last.formatter */ "../../../packages/core/src/formatters/array/is-last.formatter.ts");
/* harmony import */ var _last_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./last.formatter */ "../../../packages/core/src/formatters/array/last.formatter.ts");
/* harmony import */ var _random_formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random.formatter */ "../../../packages/core/src/formatters/array/random.formatter.ts");
/* harmony import */ var _range_formatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./range.formatter */ "../../../packages/core/src/formatters/array/range.formatter.ts");
/* harmony import */ var _set_formatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./set.formatter */ "../../../packages/core/src/formatters/array/set.formatter.ts");
/* harmony import */ var _size_formatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./size.formatter */ "../../../packages/core/src/formatters/array/size.formatter.ts");
/* harmony import */ var _overlaps_formatter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./overlaps.formatter */ "../../../packages/core/src/formatters/array/overlaps.formatter.ts");
/* harmony import */ var _join_formatter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./join.formatter */ "../../../packages/core/src/formatters/array/join.formatter.ts");
// property / object / array formatters













/***/ }),

/***/ "../../../packages/core/src/formatters/array/is-last.formatter.ts":
/*!************************************************************************!*\
  !*** ../../../packages/core/src/formatters/array/is-last.formatter.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLastFormatter": function() { return /* binding */ isLastFormatter; }
/* harmony export */ });
/**
 * Returns true if value index is the last index of the array. Returns false if it is not the last index.
 * ```
 *  <div rv-each-image="product.images" rv-hide="product.images | last %image%"></div>
 * ```
 * @see https://help.shopify.com/themes/liquid/objects/for-loops#forloop-last
 */
const isLastFormatter = {
  name: "isLast",

  read(array, i) {
    return array.length === i + 1;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/array/join.formatter.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/formatters/array/join.formatter.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "joinFormatter": function() { return /* binding */ joinFormatter; }
/* harmony export */ });
/**
 * Joins value with a given delimeter
 */
const joinFormatter = {
  name: "join",

  read(value, delimeter) {
    return value.join(delimeter);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/array/last.formatter.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/formatters/array/last.formatter.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lastFormatter": function() { return /* binding */ lastFormatter; }
/* harmony export */ });
/* harmony import */ var _get_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.formatter */ "../../../packages/core/src/formatters/array/get.formatter.ts");

/**
 * Array formatter to get the last element of an array
 */

const lastFormatter = {
  name: "last",

  read(array) {
    return _get_formatter__WEBPACK_IMPORTED_MODULE_0__.getFormatter.read(array, array.length - 1);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/array/overlaps.formatter.ts":
/*!*************************************************************************!*\
  !*** ../../../packages/core/src/formatters/array/overlaps.formatter.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "overlapsFormatter": function() { return /* binding */ overlapsFormatter; }
/* harmony export */ });
/**
 * Returns true if an array overlaps with another array.
 * @see https://gist.github.com/der-On/cdafe908847e2b882691
 */
const overlapsFormatter = {
  name: "overlaps",

  read(value, search) {
    for (const a of value) {
      for (const b of search) {
        if (a.equals && a.equals(b)) {
          return true;
        }

        if (a === b) {
          return true;
        }
      }
    }

    return false;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/array/random.formatter.ts":
/*!***********************************************************************!*\
  !*** ../../../packages/core/src/formatters/array/random.formatter.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomFormatter": function() { return /* binding */ randomFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Gets back random value of array
 * @example <div rv-add-class='"["col-2", "col-3", "col-4", "col-5", "col-6"]" | parse | random'>
 *
 * Or gets back a randon number
 * Random number between 0 and 6:
 * @example <div rv-add-class='6 | random'>
 * Random number between 1 and 6:
 * @example <div rv-add-class='6 | random 1'>
 */

const randomFormatter = {
  name: "random",

  read(arrayOrMaxNumber) {
    let min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    // If is array
    if (Array.isArray(arrayOrMaxNumber)) {
      return arrayOrMaxNumber[Math.floor(Math.random() * arrayOrMaxNumber.length)];
    } // If is number


    if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isNumber)(arrayOrMaxNumber)) {
      const max = arrayOrMaxNumber;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return null;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/array/range.formatter.ts":
/*!**********************************************************************!*\
  !*** ../../../packages/core/src/formatters/array/range.formatter.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rangeFormatter": function() { return /* binding */ rangeFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Array formatter to get a subarray from array
 */

const rangeFormatter = {
  name: "range",

  read(arr, start, end) {
    start = Number((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isNumber)(start) ? start : 0);
    end = Number((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isNumber)(end) ? end : arr.length - 1);

    if (end > arr.length - 1) {
      end = arr.length - 1;
    }

    if (start > end) {
      return [];
    }

    return arr.slice(Number(start || 0), 1 + end);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/array/set.formatter.ts":
/*!********************************************************************!*\
  !*** ../../../packages/core/src/formatters/array/set.formatter.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setFormatter": function() { return /* binding */ setFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Sets property of object, array or value
 * @see https://gist.github.com/der-On/cdafe908847e2b882691
 */

const setFormatter = {
  name: "set",

  read(obj, key, value) {
    // the key is the value if value is not set
    if (!value) {
      value = key;
    }

    if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isObject)(obj) || Array.isArray(obj)) {
      obj[key] = value;
    } else {
      obj = value;
    }

    return obj;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/array/size.formatter.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/formatters/array/size.formatter.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sizeFormatter": function() { return /* binding */ sizeFormatter; }
/* harmony export */ });
/**
 * Returns the size of a string (the number of characters) or an array (the number of elements).
 * @see https://help.shopify.com/themes/liquid/filters/array-filters#size
 */
const sizeFormatter = {
  name: "size",

  read(value) {
    return value && value.length ? value.length : 0;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/compare/and.formatter.ts":
/*!**********************************************************************!*\
  !*** ../../../packages/core/src/formatters/compare/and.formatter.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "andFormatter": function() { return /* binding */ andFormatter; }
/* harmony export */ });
/**
 * a && b
 */
const andFormatter = {
  name: "and",

  read(a, b) {
    return a && b;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/compare/between.formatter.ts":
/*!**************************************************************************!*\
  !*** ../../../packages/core/src/formatters/compare/between.formatter.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "betweenFormatter": function() { return /* binding */ betweenFormatter; }
/* harmony export */ });
/**
 * a >= b && a <= c
 */
const betweenFormatter = {
  name: "between",

  read(num) {
    return num >= (arguments.length <= 1 ? undefined : arguments[1]) && num <= (arguments.length <= 2 ? undefined : arguments[2]);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/compare/egt.formatter.ts":
/*!**********************************************************************!*\
  !*** ../../../packages/core/src/formatters/compare/egt.formatter.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "egtFormatter": function() { return /* binding */ egtFormatter; }
/* harmony export */ });
/**
 * equal or greater than
 * a >= b
 */
const egtFormatter = {
  name: "egt",

  read(a, b) {
    return a >= b;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/compare/elt.formatter.ts":
/*!**********************************************************************!*\
  !*** ../../../packages/core/src/formatters/compare/elt.formatter.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eltFormatter": function() { return /* binding */ eltFormatter; }
/* harmony export */ });
/**
 * euqal or lower than
 * a <= b
 */
const eltFormatter = {
  name: "elt",

  read(a, b) {
    return a <= b;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/compare/eq.formatter.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/formatters/compare/eq.formatter.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eqFormatter": function() { return /* binding */ eqFormatter; }
/* harmony export */ });
/**
 * a === b
 */
const eqFormatter = {
  name: "eq",

  read(a, b) {
    return a === b;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/compare/gt.formatter.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/formatters/compare/gt.formatter.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gtFormatter": function() { return /* binding */ gtFormatter; }
/* harmony export */ });
/**
 * greater than
 * a > b
 */
const gtFormatter = {
  name: "gt",

  read(a, b) {
    return a > b;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/compare/index.ts":
/*!**************************************************************!*\
  !*** ../../../packages/core/src/formatters/compare/index.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "andFormatter": function() { return /* reexport safe */ _and_formatter__WEBPACK_IMPORTED_MODULE_0__.andFormatter; },
/* harmony export */   "betweenFormatter": function() { return /* reexport safe */ _between_formatter__WEBPACK_IMPORTED_MODULE_1__.betweenFormatter; },
/* harmony export */   "egtFormatter": function() { return /* reexport safe */ _egt_formatter__WEBPACK_IMPORTED_MODULE_2__.egtFormatter; },
/* harmony export */   "eqFormatter": function() { return /* reexport safe */ _eq_formatter__WEBPACK_IMPORTED_MODULE_3__.eqFormatter; },
/* harmony export */   "gtFormatter": function() { return /* reexport safe */ _gt_formatter__WEBPACK_IMPORTED_MODULE_4__.gtFormatter; },
/* harmony export */   "neFormatter": function() { return /* reexport safe */ _ne_formatter__WEBPACK_IMPORTED_MODULE_5__.neFormatter; },
/* harmony export */   "ltFormatter": function() { return /* reexport safe */ _lt_formatter__WEBPACK_IMPORTED_MODULE_6__.ltFormatter; },
/* harmony export */   "eltFormatter": function() { return /* reexport safe */ _elt_formatter__WEBPACK_IMPORTED_MODULE_7__.eltFormatter; },
/* harmony export */   "orFormatter": function() { return /* reexport safe */ _or_formatter__WEBPACK_IMPORTED_MODULE_8__.orFormatter; },
/* harmony export */   "notFormatter": function() { return /* reexport safe */ _not_formatter__WEBPACK_IMPORTED_MODULE_9__.notFormatter; }
/* harmony export */ });
/* harmony import */ var _and_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./and.formatter */ "../../../packages/core/src/formatters/compare/and.formatter.ts");
/* harmony import */ var _between_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./between.formatter */ "../../../packages/core/src/formatters/compare/between.formatter.ts");
/* harmony import */ var _egt_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./egt.formatter */ "../../../packages/core/src/formatters/compare/egt.formatter.ts");
/* harmony import */ var _eq_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eq.formatter */ "../../../packages/core/src/formatters/compare/eq.formatter.ts");
/* harmony import */ var _gt_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gt.formatter */ "../../../packages/core/src/formatters/compare/gt.formatter.ts");
/* harmony import */ var _ne_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ne.formatter */ "../../../packages/core/src/formatters/compare/ne.formatter.ts");
/* harmony import */ var _lt_formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lt.formatter */ "../../../packages/core/src/formatters/compare/lt.formatter.ts");
/* harmony import */ var _elt_formatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elt.formatter */ "../../../packages/core/src/formatters/compare/elt.formatter.ts");
/* harmony import */ var _or_formatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./or.formatter */ "../../../packages/core/src/formatters/compare/or.formatter.ts");
/* harmony import */ var _not_formatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not.formatter */ "../../../packages/core/src/formatters/compare/not.formatter.ts");
/**
 * compare functions
 * Add useful general-purpose formatters for Rivets.js
 * Some formatters from cart.js and rivetsjs-stdlib
 * @see https://github.com/discolabs/cartjs/
 * @see https://github.com/matthieuriolo/rivetsjs-stdlib
 * @see https://github.com/JumpLinkNetwork/shopify-productjs
 */











/***/ }),

/***/ "../../../packages/core/src/formatters/compare/lt.formatter.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/formatters/compare/lt.formatter.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ltFormatter": function() { return /* binding */ ltFormatter; }
/* harmony export */ });
/**
 * lower than
 * a < b
 */
const ltFormatter = {
  name: "lt",

  read(a, b) {
    return a < b;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/compare/ne.formatter.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/formatters/compare/ne.formatter.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neFormatter": function() { return /* binding */ neFormatter; }
/* harmony export */ });
/**
 * a !== b
 */
const neFormatter = {
  name: "ne",

  read(a, b) {
    return a !== b;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/compare/not.formatter.ts":
/*!**********************************************************************!*\
  !*** ../../../packages/core/src/formatters/compare/not.formatter.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notFormatter": function() { return /* binding */ notFormatter; }
/* harmony export */ });
/**
 * !a
 */
const notFormatter = {
  name: "not",

  read(a) {
    return !a;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/compare/or.formatter.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/formatters/compare/or.formatter.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "orFormatter": function() { return /* binding */ orFormatter; }
/* harmony export */ });
/**
 * a || b
 */
const orFormatter = {
  name: "or",

  read(a, b) {
    return a || b;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/index.ts":
/*!******************************************************!*\
  !*** ../../../packages/core/src/formatters/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "containsFormatter": function() { return /* reexport safe */ _array_index__WEBPACK_IMPORTED_MODULE_0__.containsFormatter; },
/* harmony export */   "emptyFormatter": function() { return /* reexport safe */ _array_index__WEBPACK_IMPORTED_MODULE_0__.emptyFormatter; },
/* harmony export */   "firstFormatter": function() { return /* reexport safe */ _array_index__WEBPACK_IMPORTED_MODULE_0__.firstFormatter; },
/* harmony export */   "getFormatter": function() { return /* reexport safe */ _array_index__WEBPACK_IMPORTED_MODULE_0__.getFormatter; },
/* harmony export */   "isLastFormatter": function() { return /* reexport safe */ _array_index__WEBPACK_IMPORTED_MODULE_0__.isLastFormatter; },
/* harmony export */   "joinFormatter": function() { return /* reexport safe */ _array_index__WEBPACK_IMPORTED_MODULE_0__.joinFormatter; },
/* harmony export */   "lastFormatter": function() { return /* reexport safe */ _array_index__WEBPACK_IMPORTED_MODULE_0__.lastFormatter; },
/* harmony export */   "overlapsFormatter": function() { return /* reexport safe */ _array_index__WEBPACK_IMPORTED_MODULE_0__.overlapsFormatter; },
/* harmony export */   "randomFormatter": function() { return /* reexport safe */ _array_index__WEBPACK_IMPORTED_MODULE_0__.randomFormatter; },
/* harmony export */   "rangeFormatter": function() { return /* reexport safe */ _array_index__WEBPACK_IMPORTED_MODULE_0__.rangeFormatter; },
/* harmony export */   "setFormatter": function() { return /* reexport safe */ _array_index__WEBPACK_IMPORTED_MODULE_0__.setFormatter; },
/* harmony export */   "sizeFormatter": function() { return /* reexport safe */ _array_index__WEBPACK_IMPORTED_MODULE_0__.sizeFormatter; },
/* harmony export */   "andFormatter": function() { return /* reexport safe */ _compare_index__WEBPACK_IMPORTED_MODULE_1__.andFormatter; },
/* harmony export */   "betweenFormatter": function() { return /* reexport safe */ _compare_index__WEBPACK_IMPORTED_MODULE_1__.betweenFormatter; },
/* harmony export */   "egtFormatter": function() { return /* reexport safe */ _compare_index__WEBPACK_IMPORTED_MODULE_1__.egtFormatter; },
/* harmony export */   "eltFormatter": function() { return /* reexport safe */ _compare_index__WEBPACK_IMPORTED_MODULE_1__.eltFormatter; },
/* harmony export */   "eqFormatter": function() { return /* reexport safe */ _compare_index__WEBPACK_IMPORTED_MODULE_1__.eqFormatter; },
/* harmony export */   "gtFormatter": function() { return /* reexport safe */ _compare_index__WEBPACK_IMPORTED_MODULE_1__.gtFormatter; },
/* harmony export */   "ltFormatter": function() { return /* reexport safe */ _compare_index__WEBPACK_IMPORTED_MODULE_1__.ltFormatter; },
/* harmony export */   "neFormatter": function() { return /* reexport safe */ _compare_index__WEBPACK_IMPORTED_MODULE_1__.neFormatter; },
/* harmony export */   "notFormatter": function() { return /* reexport safe */ _compare_index__WEBPACK_IMPORTED_MODULE_1__.notFormatter; },
/* harmony export */   "orFormatter": function() { return /* reexport safe */ _compare_index__WEBPACK_IMPORTED_MODULE_1__.orFormatter; },
/* harmony export */   "digitsFormatter": function() { return /* reexport safe */ _math_index__WEBPACK_IMPORTED_MODULE_2__.digitsFormatter; },
/* harmony export */   "dividedByFormatter": function() { return /* reexport safe */ _math_index__WEBPACK_IMPORTED_MODULE_2__.dividedByFormatter; },
/* harmony export */   "evenFormatter": function() { return /* reexport safe */ _math_index__WEBPACK_IMPORTED_MODULE_2__.evenFormatter; },
/* harmony export */   "gcdFormatter": function() { return /* reexport safe */ _math_index__WEBPACK_IMPORTED_MODULE_2__.gcdFormatter; },
/* harmony export */   "minusFormatter": function() { return /* reexport safe */ _math_index__WEBPACK_IMPORTED_MODULE_2__.minusFormatter; },
/* harmony export */   "moduloFormatter": function() { return /* reexport safe */ _math_index__WEBPACK_IMPORTED_MODULE_2__.moduloFormatter; },
/* harmony export */   "plusFormatter": function() { return /* reexport safe */ _math_index__WEBPACK_IMPORTED_MODULE_2__.plusFormatter; },
/* harmony export */   "timesFormatter": function() { return /* reexport safe */ _math_index__WEBPACK_IMPORTED_MODULE_2__.timesFormatter; },
/* harmony export */   "unevenFormatter": function() { return /* reexport safe */ _math_index__WEBPACK_IMPORTED_MODULE_2__.unevenFormatter; },
/* harmony export */   "argsFormatter": function() { return /* reexport safe */ _special_index__WEBPACK_IMPORTED_MODULE_3__.argsFormatter; },
/* harmony export */   "callFormatter": function() { return /* reexport safe */ _special_index__WEBPACK_IMPORTED_MODULE_3__.callFormatter; },
/* harmony export */   "callNameFormatter": function() { return /* reexport safe */ _special_index__WEBPACK_IMPORTED_MODULE_3__.callNameFormatter; },
/* harmony export */   "debugFormatter": function() { return /* reexport safe */ _special_index__WEBPACK_IMPORTED_MODULE_3__.debugFormatter; },
/* harmony export */   "defaultFormatter": function() { return /* reexport safe */ _special_index__WEBPACK_IMPORTED_MODULE_3__.defaultFormatter; },
/* harmony export */   "isDesktopFormatter": function() { return /* reexport safe */ _special_index__WEBPACK_IMPORTED_MODULE_3__.isDesktopFormatter; },
/* harmony export */   "isMobileFormatter": function() { return /* reexport safe */ _special_index__WEBPACK_IMPORTED_MODULE_3__.isMobileFormatter; },
/* harmony export */   "mapFormatter": function() { return /* reexport safe */ _special_index__WEBPACK_IMPORTED_MODULE_3__.mapFormatter; },
/* harmony export */   "osFormatter": function() { return /* reexport safe */ _special_index__WEBPACK_IMPORTED_MODULE_3__.osFormatter; },
/* harmony export */   "preferFormatter": function() { return /* reexport safe */ _special_index__WEBPACK_IMPORTED_MODULE_3__.preferFormatter; },
/* harmony export */   "ternaryFormatter": function() { return /* reexport safe */ _special_index__WEBPACK_IMPORTED_MODULE_3__.ternaryFormatter; },
/* harmony export */   "appendFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.appendFormatter; },
/* harmony export */   "capitalizeFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.capitalizeFormatter; },
/* harmony export */   "cutFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.cutFormatter; },
/* harmony export */   "downcaseFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.downcaseFormatter; },
/* harmony export */   "endsWithFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.endsWithFormatter; },
/* harmony export */   "filledFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.filledFormatter; },
/* harmony export */   "handleizeFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.handleizeFormatter; },
/* harmony export */   "matchFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.matchFormatter; },
/* harmony export */   "numberFormatFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.numberFormatFormatter; },
/* harmony export */   "padEndFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.padEndFormatter; },
/* harmony export */   "padStartFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.padStartFormatter; },
/* harmony export */   "pluralizeFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.pluralizeFormatter; },
/* harmony export */   "prependFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.prependFormatter; },
/* harmony export */   "replaceFirstFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.replaceFirstFormatter; },
/* harmony export */   "replaceFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.replaceFormatter; },
/* harmony export */   "sliceFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.sliceFormatter; },
/* harmony export */   "startsWithFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.startsWithFormatter; },
/* harmony export */   "stripFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.stripFormatter; },
/* harmony export */   "stripHtmlFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.stripHtmlFormatter; },
/* harmony export */   "upcaseFormatter": function() { return /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_4__.upcaseFormatter; },
/* harmony export */   "booleanFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.booleanFormatter; },
/* harmony export */   "isArrayFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.isArrayFormatter; },
/* harmony export */   "isBooleanFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.isBooleanFormatter; },
/* harmony export */   "isDefinedFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.isDefinedFormatter; },
/* harmony export */   "isIntegerFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.isIntegerFormatter; },
/* harmony export */   "isNumberFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.isNumberFormatter; },
/* harmony export */   "isObjectFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.isObjectFormatter; },
/* harmony export */   "isStringFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.isStringFormatter; },
/* harmony export */   "isUndefinedFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.isUndefinedFormatter; },
/* harmony export */   "jsonFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.jsonFormatter; },
/* harmony export */   "parseFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.parseFormatter; },
/* harmony export */   "toDecimalFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.toDecimalFormatter; },
/* harmony export */   "toFloatFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.toFloatFormatter; },
/* harmony export */   "toIntegerFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.toIntegerFormatter; },
/* harmony export */   "toNumberFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.toNumberFormatter; },
/* harmony export */   "toStringFormatter": function() { return /* reexport safe */ _type_index__WEBPACK_IMPORTED_MODULE_5__.toStringFormatter; }
/* harmony export */ });
/* harmony import */ var _array_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array/index */ "../../../packages/core/src/formatters/array/index.ts");
/* harmony import */ var _compare_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare/index */ "../../../packages/core/src/formatters/compare/index.ts");
/* harmony import */ var _math_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math/index */ "../../../packages/core/src/formatters/math/index.ts");
/* harmony import */ var _special_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./special/index */ "../../../packages/core/src/formatters/special/index.ts");
/* harmony import */ var _string_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string/index */ "../../../packages/core/src/formatters/string/index.ts");
/* harmony import */ var _type_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type/index */ "../../../packages/core/src/formatters/type/index.ts");







/***/ }),

/***/ "../../../packages/core/src/formatters/math/digits.formatter.ts":
/*!**********************************************************************!*\
  !*** ../../../packages/core/src/formatters/math/digits.formatter.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "digitsFormatter": function() { return /* binding */ digitsFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Just get the digits of a string, useful to remove px from css value
 * @see http://stackoverflow.com/a/1100653/1465919
 */

const digitsFormatter = {
  name: "digits",

  read(str) {
    if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isNumber)(str)) {
      return str;
    }

    return (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.justDigits)(str);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/math/divided-by.formatter.ts":
/*!**************************************************************************!*\
  !*** ../../../packages/core/src/formatters/math/divided-by.formatter.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dividedByFormatter": function() { return /* binding */ dividedByFormatter; }
/* harmony export */ });
/**
 * Divides an output by a number. The output is rounded down to the nearest integer.
 * @see https://help.shopify.com/themes/liquid/filters/math-filters#divided_by
 */
const dividedByFormatter = {
  name: "dividedBy",

  read(a, b) {
    return Number(a) / Number(b);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/math/even.formatter.ts":
/*!********************************************************************!*\
  !*** ../../../packages/core/src/formatters/math/even.formatter.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evenFormatter": function() { return /* binding */ evenFormatter; }
/* harmony export */ });
/**
 * Check if a number is even or not
 */
const evenFormatter = {
  name: "even",

  read(num) {
    return num % 2 === 0;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/math/gcd.formatter.ts":
/*!*******************************************************************!*\
  !*** ../../../packages/core/src/formatters/math/gcd.formatter.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gcdFormatter": function() { return /* binding */ gcdFormatter; }
/* harmony export */ });
/**
 * Greatest common divisor (GCD) useful to calculate a ratio
 * @see https://stackoverflow.com/a/1186465/1465919
 */
const _gcd = (a, b) => {
  return b === 0 ? a : _gcd(b, a % b);
};

const gcdFormatter = {
  name: "gcd",
  read: _gcd
};

/***/ }),

/***/ "../../../packages/core/src/formatters/math/index.ts":
/*!***********************************************************!*\
  !*** ../../../packages/core/src/formatters/math/index.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plusFormatter": function() { return /* reexport safe */ _plus_formatter__WEBPACK_IMPORTED_MODULE_0__.plusFormatter; },
/* harmony export */   "minusFormatter": function() { return /* reexport safe */ _minus_formatter__WEBPACK_IMPORTED_MODULE_1__.minusFormatter; },
/* harmony export */   "timesFormatter": function() { return /* reexport safe */ _times_formatter__WEBPACK_IMPORTED_MODULE_2__.timesFormatter; },
/* harmony export */   "dividedByFormatter": function() { return /* reexport safe */ _divided_by_formatter__WEBPACK_IMPORTED_MODULE_3__.dividedByFormatter; },
/* harmony export */   "moduloFormatter": function() { return /* reexport safe */ _modulo_formatter__WEBPACK_IMPORTED_MODULE_4__.moduloFormatter; },
/* harmony export */   "gcdFormatter": function() { return /* reexport safe */ _gcd_formatter__WEBPACK_IMPORTED_MODULE_5__.gcdFormatter; },
/* harmony export */   "evenFormatter": function() { return /* reexport safe */ _even_formatter__WEBPACK_IMPORTED_MODULE_6__.evenFormatter; },
/* harmony export */   "unevenFormatter": function() { return /* reexport safe */ _uneven_formatter__WEBPACK_IMPORTED_MODULE_7__.unevenFormatter; },
/* harmony export */   "digitsFormatter": function() { return /* reexport safe */ _digits_formatter__WEBPACK_IMPORTED_MODULE_8__.digitsFormatter; }
/* harmony export */ });
/* harmony import */ var _plus_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plus.formatter */ "../../../packages/core/src/formatters/math/plus.formatter.ts");
/* harmony import */ var _minus_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minus.formatter */ "../../../packages/core/src/formatters/math/minus.formatter.ts");
/* harmony import */ var _times_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./times.formatter */ "../../../packages/core/src/formatters/math/times.formatter.ts");
/* harmony import */ var _divided_by_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divided-by.formatter */ "../../../packages/core/src/formatters/math/divided-by.formatter.ts");
/* harmony import */ var _modulo_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulo.formatter */ "../../../packages/core/src/formatters/math/modulo.formatter.ts");
/* harmony import */ var _gcd_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gcd.formatter */ "../../../packages/core/src/formatters/math/gcd.formatter.ts");
/* harmony import */ var _even_formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./even.formatter */ "../../../packages/core/src/formatters/math/even.formatter.ts");
/* harmony import */ var _uneven_formatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uneven.formatter */ "../../../packages/core/src/formatters/math/uneven.formatter.ts");
/* harmony import */ var _digits_formatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./digits.formatter */ "../../../packages/core/src/formatters/math/digits.formatter.ts");
// math formatters










/***/ }),

/***/ "../../../packages/core/src/formatters/math/minus.formatter.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/formatters/math/minus.formatter.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "minusFormatter": function() { return /* binding */ minusFormatter; }
/* harmony export */ });
/**
 * Subtracts a number from an output.
 * @see https://help.shopify.com/themes/liquid/filters/math-filters#minus
 */
const minusFormatter = {
  name: "minus",

  read(a, b) {
    return Number(a) - Number(b);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/math/modulo.formatter.ts":
/*!**********************************************************************!*\
  !*** ../../../packages/core/src/formatters/math/modulo.formatter.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduloFormatter": function() { return /* binding */ moduloFormatter; }
/* harmony export */ });
/**
 * Divides an value by a number and returns the remainder.
 * @see https://help.shopify.com/themes/liquid/filters/math-filters#modulo
 */
const moduloFormatter = {
  name: "modulo",

  read(a, b) {
    return Number(a) % Number(b);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/math/plus.formatter.ts":
/*!********************************************************************!*\
  !*** ../../../packages/core/src/formatters/math/plus.formatter.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plusFormatter": function() { return /* binding */ plusFormatter; }
/* harmony export */ });
/**
 * Adds a number to an value.
 * @see https://help.shopify.com/themes/liquid/filters/math-filters#plus
 */
const plusFormatter = {
  name: "plus",

  read(a, b) {
    return Number(a) + Number(b);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/math/times.formatter.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/formatters/math/times.formatter.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timesFormatter": function() { return /* binding */ timesFormatter; }
/* harmony export */ });
/**
 * Multiplies an value by a number.
 * @see https://help.shopify.com/themes/liquid/filters/math-filters#times
 */
const timesFormatter = {
  name: "times",

  read(a, b) {
    return Number(a) * Number(b);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/math/uneven.formatter.ts":
/*!**********************************************************************!*\
  !*** ../../../packages/core/src/formatters/math/uneven.formatter.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unevenFormatter": function() { return /* binding */ unevenFormatter; }
/* harmony export */ });
const unevenFormatter = {
  name: "uneven",

  read(num) {
    return num % 2 !== 0;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/special/args.formatter.ts":
/*!***********************************************************************!*\
  !*** ../../../packages/core/src/formatters/special/args.formatter.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "argsFormatter": function() { return /* binding */ argsFormatter; }
/* harmony export */ });
/**
 * Sets arguments to a function without directly call them
 * ```html
 * <button rv-on-click="sum | args 1 2"></button>
 * ```
 * @param fn The function the event handler should call
 * @param fnArgs the parameters you wish to get called the function with
 */
const argsFormatter = {
  name: "args",

  read(fn) {
    for (var _len = arguments.length, fnArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      fnArgs[_key - 1] = arguments[_key];
    }

    return (event, scope, el, binder) => {
      // append the event handler args to passed args
      fnArgs.push(event);
      fnArgs.push(scope);
      fnArgs.push(el);
      fnArgs.push(binder);
      return fn.apply(this, fnArgs);
    };
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/special/call-name.formatter.ts":
/*!****************************************************************************!*\
  !*** ../../../packages/core/src/formatters/special/call-name.formatter.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callNameFormatter": function() { return /* binding */ callNameFormatter; }
/* harmony export */ });
/**
 * Calls a function by name with arguments
 * @param object The object that contains the function you wish to call
 * @param name The name of the function you wish to call
 * @param args the parameters you wish to call the function with
 */
const callNameFormatter = {
  name: "call-name",
  read: function (object, name) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return object[name](...args);
  }
};

/***/ }),

/***/ "../../../packages/core/src/formatters/special/call.formatter.ts":
/*!***********************************************************************!*\
  !*** ../../../packages/core/src/formatters/special/call.formatter.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callFormatter": function() { return /* binding */ callFormatter; }
/* harmony export */ });
// babel misinterprets the "this" fake parameter, so we define it in this interfaces

/**
 * Calls a function with arguments
 * @param fn The function you wish to call
 * @param args the parameters you wish to call the function with
 */
const callFormatter = {
  name: "call",

  read(fn) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(this, args);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/special/debug.formatter.ts":
/*!************************************************************************!*\
  !*** ../../../packages/core/src/formatters/special/debug.formatter.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debugFormatter": function() { return /* binding */ debugFormatter; }
/* harmony export */ });
const debugFormatter = {
  name: "debug",

  read(toPrint) {
    let level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "debug";
    console[level](toPrint);
    return toPrint;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/special/default.formatter.ts":
/*!**************************************************************************!*\
  !*** ../../../packages/core/src/formatters/special/default.formatter.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultFormatter": function() { return /* binding */ defaultFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Sets a default value if the first value is not set
 * @see https://gist.github.com/der-On/cdafe908847e2b882691
 */

const defaultFormatter = {
  name: "default",

  read(value, defaultValue) {
    if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isDefined)(value)) {
      if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {
        if (value.length > 0) {
          return value;
        } else {
          return defaultValue;
        }
      }

      if (value === null) {
        return defaultValue;
      }

      return value;
    }

    return defaultValue;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/special/index.ts":
/*!**************************************************************!*\
  !*** ../../../packages/core/src/formatters/special/index.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "argsFormatter": function() { return /* reexport safe */ _args_formatter__WEBPACK_IMPORTED_MODULE_0__.argsFormatter; },
/* harmony export */   "debugFormatter": function() { return /* reexport safe */ _debug_formatter__WEBPACK_IMPORTED_MODULE_1__.debugFormatter; },
/* harmony export */   "defaultFormatter": function() { return /* reexport safe */ _default_formatter__WEBPACK_IMPORTED_MODULE_2__.defaultFormatter; },
/* harmony export */   "isDesktopFormatter": function() { return /* reexport safe */ _is_desktop_formatter__WEBPACK_IMPORTED_MODULE_3__.isDesktopFormatter; },
/* harmony export */   "isMobileFormatter": function() { return /* reexport safe */ _is_mobile_formatter__WEBPACK_IMPORTED_MODULE_4__.isMobileFormatter; },
/* harmony export */   "callFormatter": function() { return /* reexport safe */ _call_formatter__WEBPACK_IMPORTED_MODULE_5__.callFormatter; },
/* harmony export */   "callNameFormatter": function() { return /* reexport safe */ _call_name_formatter__WEBPACK_IMPORTED_MODULE_6__.callNameFormatter; },
/* harmony export */   "mapFormatter": function() { return /* reexport safe */ _map_formatter__WEBPACK_IMPORTED_MODULE_7__.mapFormatter; },
/* harmony export */   "osFormatter": function() { return /* reexport safe */ _os_formatter__WEBPACK_IMPORTED_MODULE_8__.osFormatter; },
/* harmony export */   "preferFormatter": function() { return /* reexport safe */ _prefer_formatter__WEBPACK_IMPORTED_MODULE_9__.preferFormatter; },
/* harmony export */   "ternaryFormatter": function() { return /* reexport safe */ _ternary_formatter__WEBPACK_IMPORTED_MODULE_10__.ternaryFormatter; }
/* harmony export */ });
/* harmony import */ var _args_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./args.formatter */ "../../../packages/core/src/formatters/special/args.formatter.ts");
/* harmony import */ var _debug_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug.formatter */ "../../../packages/core/src/formatters/special/debug.formatter.ts");
/* harmony import */ var _default_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.formatter */ "../../../packages/core/src/formatters/special/default.formatter.ts");
/* harmony import */ var _is_desktop_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-desktop.formatter */ "../../../packages/core/src/formatters/special/is-desktop.formatter.ts");
/* harmony import */ var _is_mobile_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-mobile.formatter */ "../../../packages/core/src/formatters/special/is-mobile.formatter.ts");
/* harmony import */ var _call_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./call.formatter */ "../../../packages/core/src/formatters/special/call.formatter.ts");
/* harmony import */ var _call_name_formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./call-name.formatter */ "../../../packages/core/src/formatters/special/call-name.formatter.ts");
/* harmony import */ var _map_formatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map.formatter */ "../../../packages/core/src/formatters/special/map.formatter.ts");
/* harmony import */ var _os_formatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./os.formatter */ "../../../packages/core/src/formatters/special/os.formatter.ts");
/* harmony import */ var _prefer_formatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./prefer.formatter */ "../../../packages/core/src/formatters/special/prefer.formatter.ts");
/* harmony import */ var _ternary_formatter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ternary.formatter */ "../../../packages/core/src/formatters/special/ternary.formatter.ts");
// special helper formatters












/***/ }),

/***/ "../../../packages/core/src/formatters/special/is-desktop.formatter.ts":
/*!*****************************************************************************!*\
  !*** ../../../packages/core/src/formatters/special/is-desktop.formatter.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDesktopFormatter": function() { return /* binding */ isDesktopFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils */ "../../../packages/utils/src/index.ts");

const isDesktopFormatter = {
  name: "is-desktop",

  read() {
    return (0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_0__.isDesktop)();
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/special/is-mobile.formatter.ts":
/*!****************************************************************************!*\
  !*** ../../../packages/core/src/formatters/special/is-mobile.formatter.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMobileFormatter": function() { return /* binding */ isMobileFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils */ "../../../packages/utils/src/index.ts");

const isMobileFormatter = {
  name: "is-mobile",

  read() {
    return (0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_0__.isMobile)();
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/special/map.formatter.ts":
/*!**********************************************************************!*\
  !*** ../../../packages/core/src/formatters/special/map.formatter.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapFormatter": function() { return /* binding */ mapFormatter; }
/* harmony export */ });
/* eslint-disable prefer-spread */

/* eslint-disable prefer-rest-params */

/**
 * Calls a method on the given object. The first parameters defines the object and the second the methodname.
 * Target will be passed as the first argument to the method.
 * @see https://github.com/matthieuriolo/rivetsjs-stdlib#map
 * @example
 * ```html
 * <span rv-text="10 | map 'Math' 'sin'"></span>
 * ```
 * @returns e.g. as in the example: `<span>-0.5440211108893699</span>`
 */
const mapFormatter = {
  name: "map",

  /**
   * Calls a method on the given object. The first parameters defines the object and the second the method name.
   * Target will be passed as the first argument to the method.
   * @see https://github.com/matthieuriolo/rivetsjs-stdlib#map
   * @example
   * ```html
   * <span rv-text="10 | map 'Math' 'sin'"></span>
   * ```
   * @returns e.g. as in the example: `<span>-0.5440211108893699</span>`
   * @param target
   * @param obj
   * @param prop
   */
  read(target, obj, prop) {
    const args = Array.prototype.slice.call(arguments);
    args.splice(1, 2);
    return obj[prop].apply(obj, args);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/special/os.formatter.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/formatters/special/os.formatter.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "osFormatter": function() { return /* binding */ osFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils */ "../../../packages/utils/src/index.ts");

const osFormatter = {
  name: "os",

  read() {
    return (0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_0__.getOS)();
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/special/prefer.formatter.ts":
/*!*************************************************************************!*\
  !*** ../../../packages/core/src/formatters/special/prefer.formatter.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preferFormatter": function() { return /* binding */ preferFormatter; }
/* harmony export */ });
/**
 * Prefers the first formatter parameter before left parameter
 */
const preferFormatter = {
  name: "prefer",

  read(value, preferValue) {
    return preferValue || value;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/special/ternary.formatter.ts":
/*!**************************************************************************!*\
  !*** ../../../packages/core/src/formatters/special/ternary.formatter.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ternaryFormatter": function() { return /* binding */ ternaryFormatter; }
/* harmony export */ });
/**
 * a ? b : c
 */
const ternaryFormatter = {
  name: "ternary",

  read(condition, yes, no) {
    return condition ? yes : no;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/append.formatter.ts":
/*!************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/append.formatter.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendFormatter": function() { return /* binding */ appendFormatter; }
/* harmony export */ });
/**
 * Appends characters to a string.
 * @see https://help.shopify.com/themes/liquid/filters/string-filters#append
 */
const appendFormatter = {
  name: "append",

  read(a, b) {
    return a + b;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/capitalize.formatter.ts":
/*!****************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/capitalize.formatter.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeFormatter": function() { return /* binding */ capitalizeFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Uppercases the first letter of a string
 */

const capitalizeFormatter = {
  name: "capitalize",

  read(str) {
    return (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.capitalize)(str);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/cut.formatter.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/cut.formatter.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cutFormatter": function() { return /* binding */ cutFormatter; }
/* harmony export */ });
/**
 * Cats a string
 * If the first parameter is -1 the string will not be uncut
 * @example
 * <p rv-text="'abcdefghijklnmopqrstuvwxyzabcdefghijklnmopqrstuvwxyz' | cut 3 '...'"></p>
 * -> <p>abc...</p>
 *
 * <p rv-text="'abcdefghijklnmopqrstuvwxyzabcdefghijklnmopqrstuvwxyz' | cut 3"></p>
 * -> <p>abc</p>
 */
const cutFormatter = {
  name: "cut",

  read(str, cutAt) {
    let delimitation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    if (!str) {
      return "";
    }

    if (typeof str !== "string") {
      console.warn("[cutFormatter] Value must be of type string");
      return str;
    }

    if (str.length > cutAt) {
      return str.substring(cutAt, cutAt === -1 ? undefined : -1) + delimitation;
    } else {
      return str;
    }
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/downcase.formatter.ts":
/*!**************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/downcase.formatter.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "downcaseFormatter": function() { return /* binding */ downcaseFormatter; }
/* harmony export */ });
/**
 * Converts a string into lowercase.
 * @see https://help.shopify.com/themes/liquid/filters/string-filters#downcase
 */
const downcaseFormatter = {
  name: "downcase",

  read(str) {
    return str.toLowerCase();
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/ends-with.formatter.ts":
/*!***************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/ends-with.formatter.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endsWithFormatter": function() { return /* binding */ endsWithFormatter; }
/* harmony export */ });
/**
 * Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this).
 * Otherwise returns false.
 *
 * @example
 * <p rv-if="'abcdefg' | ends-with 'efg'">Hello World!</p>
 * -> <p>Hello World!</p>
 */
const endsWithFormatter = {
  name: "ends-with",

  read(str, checkStart) {
    if (typeof str !== "string") {
      console.warn("[endsWithFormatter] Value must be of type string");
      return str;
    }

    return str.endsWith(checkStart);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/filled.formatter.ts":
/*!************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/filled.formatter.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filledFormatter": function() { return /* binding */ filledFormatter; }
/* harmony export */ });
/* harmony import */ var _array_empty_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/empty.formatter */ "../../../packages/core/src/formatters/array/empty.formatter.ts");
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");


/**
 * Check if value is a string and not empty
 */

const filledFormatter = {
  name: "filled",

  read(str) {
    return (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_1__.isString)(str) && !_array_empty_formatter__WEBPACK_IMPORTED_MODULE_0__.emptyFormatter.read(str.replace(/\s/g, ""));
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/handleize.formatter.ts":
/*!***************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/handleize.formatter.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleizeFormatter": function() { return /* binding */ handleizeFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Formats a string into a handle.
 * E.g. '100% M & Ms!!!' -> 100-m-ms
 * @see https://help.shopify.com/themes/liquid/filters/string-filters#handle-handleize
 */

const handleizeFormatter = {
  name: "handleize",

  read(str) {
    if (!str) {
      console.warn("[handleizeFormatter] str is not set");
      return "";
    }

    return (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.handleize)(str);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/index.ts":
/*!*************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/index.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendFormatter": function() { return /* reexport safe */ _append_formatter__WEBPACK_IMPORTED_MODULE_0__.appendFormatter; },
/* harmony export */   "capitalizeFormatter": function() { return /* reexport safe */ _capitalize_formatter__WEBPACK_IMPORTED_MODULE_1__.capitalizeFormatter; },
/* harmony export */   "cutFormatter": function() { return /* reexport safe */ _cut_formatter__WEBPACK_IMPORTED_MODULE_2__.cutFormatter; },
/* harmony export */   "downcaseFormatter": function() { return /* reexport safe */ _downcase_formatter__WEBPACK_IMPORTED_MODULE_3__.downcaseFormatter; },
/* harmony export */   "endsWithFormatter": function() { return /* reexport safe */ _ends_with_formatter__WEBPACK_IMPORTED_MODULE_4__.endsWithFormatter; },
/* harmony export */   "filledFormatter": function() { return /* reexport safe */ _filled_formatter__WEBPACK_IMPORTED_MODULE_5__.filledFormatter; },
/* harmony export */   "handleizeFormatter": function() { return /* reexport safe */ _handleize_formatter__WEBPACK_IMPORTED_MODULE_6__.handleizeFormatter; },
/* harmony export */   "matchFormatter": function() { return /* reexport safe */ _match_formatter__WEBPACK_IMPORTED_MODULE_7__.matchFormatter; },
/* harmony export */   "padStartFormatter": function() { return /* reexport safe */ _pad_start_formatter__WEBPACK_IMPORTED_MODULE_8__.padStartFormatter; },
/* harmony export */   "padEndFormatter": function() { return /* reexport safe */ _pad_end_formatter__WEBPACK_IMPORTED_MODULE_9__.padEndFormatter; },
/* harmony export */   "numberFormatFormatter": function() { return /* reexport safe */ _number_format_formatter__WEBPACK_IMPORTED_MODULE_10__.numberFormatFormatter; },
/* harmony export */   "pluralizeFormatter": function() { return /* reexport safe */ _pluralize_formatter__WEBPACK_IMPORTED_MODULE_11__.pluralizeFormatter; },
/* harmony export */   "prependFormatter": function() { return /* reexport safe */ _prepend_formatter__WEBPACK_IMPORTED_MODULE_12__.prependFormatter; },
/* harmony export */   "upcaseFormatter": function() { return /* reexport safe */ _upcase_formatter__WEBPACK_IMPORTED_MODULE_13__.upcaseFormatter; },
/* harmony export */   "replaceFormatter": function() { return /* reexport safe */ _replace_formatter__WEBPACK_IMPORTED_MODULE_14__.replaceFormatter; },
/* harmony export */   "replaceFirstFormatter": function() { return /* reexport safe */ _replace_first_formatter__WEBPACK_IMPORTED_MODULE_15__.replaceFirstFormatter; },
/* harmony export */   "sliceFormatter": function() { return /* reexport safe */ _slice_formatter__WEBPACK_IMPORTED_MODULE_16__.sliceFormatter; },
/* harmony export */   "startsWithFormatter": function() { return /* reexport safe */ _starts_with_formatter__WEBPACK_IMPORTED_MODULE_17__.startsWithFormatter; },
/* harmony export */   "stripFormatter": function() { return /* reexport safe */ _strip_formatter__WEBPACK_IMPORTED_MODULE_18__.stripFormatter; },
/* harmony export */   "stripHtmlFormatter": function() { return /* reexport safe */ _strip_html_formatter__WEBPACK_IMPORTED_MODULE_19__.stripHtmlFormatter; }
/* harmony export */ });
/* harmony import */ var _append_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append.formatter */ "../../../packages/core/src/formatters/string/append.formatter.ts");
/* harmony import */ var _capitalize_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capitalize.formatter */ "../../../packages/core/src/formatters/string/capitalize.formatter.ts");
/* harmony import */ var _cut_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cut.formatter */ "../../../packages/core/src/formatters/string/cut.formatter.ts");
/* harmony import */ var _downcase_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./downcase.formatter */ "../../../packages/core/src/formatters/string/downcase.formatter.ts");
/* harmony import */ var _ends_with_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ends-with.formatter */ "../../../packages/core/src/formatters/string/ends-with.formatter.ts");
/* harmony import */ var _filled_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filled.formatter */ "../../../packages/core/src/formatters/string/filled.formatter.ts");
/* harmony import */ var _handleize_formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handleize.formatter */ "../../../packages/core/src/formatters/string/handleize.formatter.ts");
/* harmony import */ var _match_formatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./match.formatter */ "../../../packages/core/src/formatters/string/match.formatter.ts");
/* harmony import */ var _pad_start_formatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pad-start.formatter */ "../../../packages/core/src/formatters/string/pad-start.formatter.ts");
/* harmony import */ var _pad_end_formatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pad-end.formatter */ "../../../packages/core/src/formatters/string/pad-end.formatter.ts");
/* harmony import */ var _number_format_formatter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./number-format.formatter */ "../../../packages/core/src/formatters/string/number-format.formatter.ts");
/* harmony import */ var _pluralize_formatter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pluralize.formatter */ "../../../packages/core/src/formatters/string/pluralize.formatter.ts");
/* harmony import */ var _prepend_formatter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./prepend.formatter */ "../../../packages/core/src/formatters/string/prepend.formatter.ts");
/* harmony import */ var _upcase_formatter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./upcase.formatter */ "../../../packages/core/src/formatters/string/upcase.formatter.ts");
/* harmony import */ var _replace_formatter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./replace.formatter */ "../../../packages/core/src/formatters/string/replace.formatter.ts");
/* harmony import */ var _replace_first_formatter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./replace-first.formatter */ "../../../packages/core/src/formatters/string/replace-first.formatter.ts");
/* harmony import */ var _slice_formatter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./slice.formatter */ "../../../packages/core/src/formatters/string/slice.formatter.ts");
/* harmony import */ var _starts_with_formatter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./starts-with.formatter */ "../../../packages/core/src/formatters/string/starts-with.formatter.ts");
/* harmony import */ var _strip_formatter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./strip.formatter */ "../../../packages/core/src/formatters/string/strip.formatter.ts");
/* harmony import */ var _strip_html_formatter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./strip-html.formatter */ "../../../packages/core/src/formatters/string/strip-html.formatter.ts");
// string formatters





















/***/ }),

/***/ "../../../packages/core/src/formatters/string/match.formatter.ts":
/*!***********************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/match.formatter.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchFormatter": function() { return /* binding */ matchFormatter; }
/* harmony export */ });
const matchFormatter = {
  name: "match",

  read(a, regexp, flags) {
    if (!a || !regexp) {
      return false;
    }

    return a.match(new RegExp(regexp, flags));
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/number-format.formatter.ts":
/*!*******************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/number-format.formatter.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numberFormatFormatter": function() { return /* binding */ numberFormatFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");
/* harmony import */ var _type_to_decimal_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/to-decimal.formatter */ "../../../packages/core/src/formatters/type/to-decimal.formatter.ts");
/* harmony import */ var _type_is_integer_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/is-integer.formatter */ "../../../packages/core/src/formatters/type/is-integer.formatter.ts");


 // TODO set by current locale

const DEFAULT_DECIMAL_SEPARATOR = ".";
const DEFAULT_THOUSAND_SEPARATOR = "'";
const DEFAULT_PRECISION = 2;
/**
 * Returns a formatted version of the target as string.
 * The number will always be rounded after the DIN 1333 (1.55 => 1.6 and -1.55 => -1.6)
 */

const numberFormatFormatter = {
  name: "numberFormat",

  /**
   * Returns a formatted version of the target as string.
   * The number will always be rounded after the DIN 1333 (1.55 => 1.6 and -1.55 => -1.6)
   * @param target
   * @param precision (default: 2)
   * @param decimalSeparator (default: ".")
   * @param thousandSeparator (default: "'")
   */
  read(target) {
    let precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_PRECISION;
    let decimalSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_DECIMAL_SEPARATOR;
    let thousandSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THOUSAND_SEPARATOR;

    if (!_type_to_decimal_formatter__WEBPACK_IMPORTED_MODULE_1__.toDecimalFormatter.read) {
      throw new Error("toDecimalFormatter must have a read function");
    }

    if (!_type_is_integer_formatter__WEBPACK_IMPORTED_MODULE_2__.isIntegerFormatter.read) {
      throw new Error("isIntegerFormatter must have a read function");
    }

    target = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isNumber)(target) ? target : _type_to_decimal_formatter__WEBPACK_IMPORTED_MODULE_1__.toDecimalFormatter.read(target);

    if (!_type_is_integer_formatter__WEBPACK_IMPORTED_MODULE_2__.isIntegerFormatter.read(precision)) {
      precision = DEFAULT_PRECISION;
    }
    /*
     * Thanks to user2823670
     * http://stackoverflow.com/questions/10015027/javascript-tofixed-not-rounding
     */


    let retStr = (+(Math.round(+(Math.abs(target) + "e" + precision)) + "e" + -precision)).toFixed(precision);
    if (target < 0) retStr = "-" + retStr;
    /**
     * Thanks to Elias Zamaria
     * http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
     */

    const ret = retStr.split(".");

    if (ret.length == 2) {
      return ret[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator) + decimalSeparator + ret[1];
    }

    return ret[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/pad-end.formatter.ts":
/*!*************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/pad-end.formatter.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "padEndFormatter": function() { return /* binding */ padEndFormatter; }
/* harmony export */ });
/**
 * The padEnd formatters pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.
 * The padding is applied from the end of the current string.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
 */
const padEndFormatter = {
  name: "padEnd",

  /**
   *
   * The padEnd formatters pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.
   * The padding is applied from the end of the current string.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
   *
   * @param target
   * @param length The length of the resulting string once the current `str` has been padded. If the value is lower than `str.length`, the current string will be returned as-is.
   * @param padString The string to pad the current `str` with. If `padString` is too long to stay within `targetLength`, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is " " (`U+0020`).
   */
  read(target) {
    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    let padString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";
    return target.padEnd(length, padString);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/pad-start.formatter.ts":
/*!***************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/pad-start.formatter.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "padStartFormatter": function() { return /* binding */ padStartFormatter; }
/* harmony export */ });
/**
 * The padStart formatter pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
 * The padding is applied from the start of the current string.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 */
const padStartFormatter = {
  name: "padStart",

  /**
   * The padStart formatter pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
   * The padding is applied from the start of the current string.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
   * @param target
   * @param length The length of the resulting string once the current `str` has been padded. If the value is less than `str.length`, then `str` is returned as-is.
   * @param padString The string to pad the current `str` with. If `padString` is too long to stay within the `targetLength`, it will be truncated from the end. The default value is `" "` (`U+0020 'SPACE'`).
   */
  read(target) {
    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    let padString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";
    return target.padStart(length, padString);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/pluralize.formatter.ts":
/*!***************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/pluralize.formatter.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pluralizeFormatter": function() { return /* binding */ pluralizeFormatter; }
/* harmony export */ });
const pluralizeFormatter = {
  name: "pluralize",

  read(input, singular, plural) {
    if (plural === null) {
      plural = singular + "s";
    }

    if (Array.isArray(input)) {
      input = input.length;
    }

    if (input === 1) {
      return singular;
    } else {
      return plural;
    }
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/prepend.formatter.ts":
/*!*************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/prepend.formatter.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prependFormatter": function() { return /* binding */ prependFormatter; }
/* harmony export */ });
/**
 * Prepends characters to a string.
 * @see https://help.shopify.com/themes/liquid/filters/string-filters#prepend
 */
const prependFormatter = {
  name: "prepend",

  read(a, b) {
    return b + a;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/replace-first.formatter.ts":
/*!*******************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/replace-first.formatter.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "replaceFirstFormatter": function() { return /* binding */ replaceFirstFormatter; }
/* harmony export */ });
/* tslint:disable:variable-name */

/**
 * Replaces the first occurrence of a string with a substring.
 * @see https://help.shopify.com/en/themes/liquid/filters/string-filters#replace_first
 */
const replaceFirstFormatter = {
  name: "replaceFirst",

  read(str, value, replaceValue) {
    return str.replace(value, replaceValue);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/replace.formatter.ts":
/*!*************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/replace.formatter.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "replaceFormatter": function() { return /* binding */ replaceFormatter; }
/* harmony export */ });
/**
 * Replaces all occurrences of a string with a substring.
 * @see https://help.shopify.com/en/themes/liquid/filters/string-filters#replace
 */
const replaceFormatter = {
  name: "replace",

  read(str, value, replaceValue) {
    return str.replace(new RegExp(value, "g"), replaceValue);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/slice.formatter.ts":
/*!***********************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/slice.formatter.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliceFormatter": function() { return /* binding */ sliceFormatter; }
/* harmony export */ });
/**
 * The `slice` formatter returns a substring, starting at the specified index.
 * An optional second parameter can be passed to specify the length of the substring.
 * If no second parameter is given, the substring continues to the end of string.
 * @see https://help.shopify.com/themes/liquid/filters/string-filters#slice
 */
const sliceFormatter = {
  name: "slice",

  read(value, start, end) {
    return value.slice(start, end);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/starts-with.formatter.ts":
/*!*****************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/starts-with.formatter.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startsWithFormatter": function() { return /* binding */ startsWithFormatter; }
/* harmony export */ });
/**
 * Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position.
 * Otherwise returns false.
 *
 * @example
 * <p rv-if="'abcdefg' | starts-with 'abc'">Hello World!</p>
 * -> <p>Hello World!</p>
 */
const startsWithFormatter = {
  name: "starts-with",

  read(str, checkStart) {
    if (typeof str !== "string") {
      console.warn("[startsWithFormatter] Value must be of type string");
      return str;
    }

    return str.startsWith(checkStart);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/strip-html.formatter.ts":
/*!****************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/strip-html.formatter.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripHtmlFormatter": function() { return /* binding */ stripHtmlFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Strips all HTML tags from a string.
 * @see https://help.shopify.com/en/themes/liquid/filters/string-filters#strip_html
 */

const stripHtmlFormatter = {
  name: "strip-html",

  read(html) {
    return (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.stripHtml)(html);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/strip.formatter.ts":
/*!***********************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/strip.formatter.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripFormatter": function() { return /* binding */ stripFormatter; }
/* harmony export */ });
/**
 * Strips tabs, spaces, and newlines (all whitespace) from the left and right side of a string.
 * @see https://help.shopify.com/themes/liquid/filters/string-filters#strip
 */
const stripFormatter = {
  name: "strip",

  read(str) {
    return str.trim();
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/string/upcase.formatter.ts":
/*!************************************************************************!*\
  !*** ../../../packages/core/src/formatters/string/upcase.formatter.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "upcaseFormatter": function() { return /* binding */ upcaseFormatter; }
/* harmony export */ });
/**
 * Converts a string into uppercase.
 * @see https://help.shopify.com/themes/liquid/filters/string-filters#upcase
 */
const upcaseFormatter = {
  name: "upcase",

  read(str) {
    return str.toUpperCase();
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/boolean.formatter.ts":
/*!***********************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/boolean.formatter.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "booleanFormatter": function() { return /* binding */ booleanFormatter; }
/* harmony export */ });
/**
 * Converts a variable to boolean
 */
const booleanFormatter = {
  name: "boolean",

  read(value) {
    if (value === "true") {
      return true;
    } else if (value === "false") {
      return false;
    } else {
      return !!value;
    }
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/index.ts":
/*!***********************************************************!*\
  !*** ../../../packages/core/src/formatters/type/index.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "booleanFormatter": function() { return /* reexport safe */ _boolean_formatter__WEBPACK_IMPORTED_MODULE_0__.booleanFormatter; },
/* harmony export */   "isArrayFormatter": function() { return /* reexport safe */ _is_array_formatter__WEBPACK_IMPORTED_MODULE_1__.isArrayFormatter; },
/* harmony export */   "isBooleanFormatter": function() { return /* reexport safe */ _is_boolean_formatter__WEBPACK_IMPORTED_MODULE_2__.isBooleanFormatter; },
/* harmony export */   "isDefinedFormatter": function() { return /* reexport safe */ _is_defined_formatter__WEBPACK_IMPORTED_MODULE_3__.isDefinedFormatter; },
/* harmony export */   "isIntegerFormatter": function() { return /* reexport safe */ _is_integer_formatter__WEBPACK_IMPORTED_MODULE_4__.isIntegerFormatter; },
/* harmony export */   "isNumberFormatter": function() { return /* reexport safe */ _is_number_formatter__WEBPACK_IMPORTED_MODULE_5__.isNumberFormatter; },
/* harmony export */   "isObjectFormatter": function() { return /* reexport safe */ _is_object_formatter__WEBPACK_IMPORTED_MODULE_6__.isObjectFormatter; },
/* harmony export */   "isStringFormatter": function() { return /* reexport safe */ _is_string_formatter__WEBPACK_IMPORTED_MODULE_7__.isStringFormatter; },
/* harmony export */   "isUndefinedFormatter": function() { return /* reexport safe */ _is_undefined_formatter__WEBPACK_IMPORTED_MODULE_8__.isUndefinedFormatter; },
/* harmony export */   "jsonFormatter": function() { return /* reexport safe */ _json_formatter__WEBPACK_IMPORTED_MODULE_9__.jsonFormatter; },
/* harmony export */   "parseFormatter": function() { return /* reexport safe */ _parse_formatter__WEBPACK_IMPORTED_MODULE_10__.parseFormatter; },
/* harmony export */   "toStringFormatter": function() { return /* reexport safe */ _to_string_formatter__WEBPACK_IMPORTED_MODULE_11__.toStringFormatter; },
/* harmony export */   "toDecimalFormatter": function() { return /* reexport safe */ _to_decimal_formatter__WEBPACK_IMPORTED_MODULE_12__.toDecimalFormatter; },
/* harmony export */   "toFloatFormatter": function() { return /* reexport safe */ _to_float_formatter__WEBPACK_IMPORTED_MODULE_13__.toFloatFormatter; },
/* harmony export */   "toIntegerFormatter": function() { return /* reexport safe */ _to_integer_formatter__WEBPACK_IMPORTED_MODULE_14__.toIntegerFormatter; },
/* harmony export */   "toNumberFormatter": function() { return /* reexport safe */ _type_to_number_formatter__WEBPACK_IMPORTED_MODULE_15__.toNumberFormatter; }
/* harmony export */ });
/* harmony import */ var _boolean_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boolean.formatter */ "../../../packages/core/src/formatters/type/boolean.formatter.ts");
/* harmony import */ var _is_array_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-array.formatter */ "../../../packages/core/src/formatters/type/is-array.formatter.ts");
/* harmony import */ var _is_boolean_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-boolean.formatter */ "../../../packages/core/src/formatters/type/is-boolean.formatter.ts");
/* harmony import */ var _is_defined_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-defined.formatter */ "../../../packages/core/src/formatters/type/is-defined.formatter.ts");
/* harmony import */ var _is_integer_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-integer.formatter */ "../../../packages/core/src/formatters/type/is-integer.formatter.ts");
/* harmony import */ var _is_number_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-number.formatter */ "../../../packages/core/src/formatters/type/is-number.formatter.ts");
/* harmony import */ var _is_object_formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./is-object.formatter */ "../../../packages/core/src/formatters/type/is-object.formatter.ts");
/* harmony import */ var _is_string_formatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./is-string.formatter */ "../../../packages/core/src/formatters/type/is-string.formatter.ts");
/* harmony import */ var _is_undefined_formatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./is-undefined.formatter */ "../../../packages/core/src/formatters/type/is-undefined.formatter.ts");
/* harmony import */ var _json_formatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./json.formatter */ "../../../packages/core/src/formatters/type/json.formatter.ts");
/* harmony import */ var _parse_formatter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parse.formatter */ "../../../packages/core/src/formatters/type/parse.formatter.ts");
/* harmony import */ var _to_string_formatter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./to-string.formatter */ "../../../packages/core/src/formatters/type/to-string.formatter.ts");
/* harmony import */ var _to_decimal_formatter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./to-decimal.formatter */ "../../../packages/core/src/formatters/type/to-decimal.formatter.ts");
/* harmony import */ var _to_float_formatter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./to-float.formatter */ "../../../packages/core/src/formatters/type/to-float.formatter.ts");
/* harmony import */ var _to_integer_formatter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./to-integer.formatter */ "../../../packages/core/src/formatters/type/to-integer.formatter.ts");
/* harmony import */ var _type_to_number_formatter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../type/to-number.formatter */ "../../../packages/core/src/formatters/type/to-number.formatter.ts");
// property / object formatters

















/***/ }),

/***/ "../../../packages/core/src/formatters/type/is-array.formatter.ts":
/*!************************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/is-array.formatter.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArrayFormatter": function() { return /* binding */ isArrayFormatter; }
/* harmony export */ });
/**
 * Checks if value is an array
 */
const isArrayFormatter = {
  name: "is-array",
  read: Array.isArray
};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/is-boolean.formatter.ts":
/*!**************************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/is-boolean.formatter.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBooleanFormatter": function() { return /* binding */ isBooleanFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Checks if value is an boolean
 */

const isBooleanFormatter = {
  name: "is-boolean",
  read: _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isBoolean
};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/is-defined.formatter.ts":
/*!**************************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/is-defined.formatter.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDefinedFormatter": function() { return /* binding */ isDefinedFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Checks if value is defined
 */

const isDefinedFormatter = {
  name: "is-defined",
  read: _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isDefined
};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/is-integer.formatter.ts":
/*!**************************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/is-integer.formatter.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isIntegerFormatter": function() { return /* binding */ isIntegerFormatter; }
/* harmony export */ });
/**
 * Checks if value is a number
 * @see https://github.com/matthieuriolo/rivetsjs-stdlib/blob/master/src/rivetsstdlib.js#L82
 */
const isIntegerFormatter = {
  name: "is-integer",

  read(n) {
    /**
     * Thanks a lot to Dagg Nabbit
     * http://stackoverflow.com/questions/3885817/how-to-check-if-a-number-is-float-or-integer
     */
    return n === +n && n === (n | 0);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/is-number.formatter.ts":
/*!*************************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/is-number.formatter.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumberFormatter": function() { return /* binding */ isNumberFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Checks if value is a number
 */

const isNumberFormatter = {
  name: "is-number",
  read: _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isNumber
};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/is-object.formatter.ts":
/*!*************************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/is-object.formatter.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObjectFormatter": function() { return /* binding */ isObjectFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Checks if value is a object
 */

const isObjectFormatter = {
  name: "is-object",
  read: _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isObject
};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/is-string.formatter.ts":
/*!*************************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/is-string.formatter.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isStringFormatter": function() { return /* binding */ isStringFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Check if value is a string
 */

const isStringFormatter = {
  name: "is-string",

  read(str) {
    return (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isString)(str);
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/is-undefined.formatter.ts":
/*!****************************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/is-undefined.formatter.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUndefinedFormatter": function() { return /* binding */ isUndefinedFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Check if value is undefined
 */

const isUndefinedFormatter = {
  name: "is-undefined",
  read: _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isUndefined
};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/json.formatter.ts":
/*!********************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/json.formatter.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jsonFormatter": function() { return /* binding */ jsonFormatter; }
/* harmony export */ });
/**
 * Converts a string into a JSON string.
 * @see https://help.shopify.com/themes/liquid/filters/additional-filters#json
 */
const jsonFormatter = {
  name: "json",

  read(object) {
    let space = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    let replaceSingleQuote = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    const result = JSON.stringify(object, null, space);

    if (replaceSingleQuote && result) {
      return result.replace(/'/g, "&#39;");
    }

    return result;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/parse.formatter.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/parse.formatter.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseFormatter": function() { return /* binding */ parseFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * parse json string to object
 * @example <div rv-add-class='"["col-2", "col-3", "col-4", "col-5", "col-6"]" | parse | random'>
 */

const parseFormatter = {
  name: "parse",

  read(jsonString) {
    if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isString)(jsonString)) {
      return (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.parseJsonString)(jsonString);
    } else if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isObject)(jsonString) || Array.isArray(jsonString)) {
      console.warn("[parseFormatter] You do not need to parse the value because since it already been parsed");
      return jsonString;
    }

    return null;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/to-decimal.formatter.ts":
/*!**************************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/to-decimal.formatter.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDecimalFormatter": function() { return /* binding */ toDecimalFormatter; }
/* harmony export */ });
/* harmony import */ var _to_integer_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-integer.formatter */ "../../../packages/core/src/formatters/type/to-integer.formatter.ts");
/* harmony import */ var _to_float_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-float.formatter */ "../../../packages/core/src/formatters/type/to-float.formatter.ts");


const toDecimalFormatter = {
  name: "to-decimal",

  read(target) {
    if (!_to_integer_formatter__WEBPACK_IMPORTED_MODULE_0__.toIntegerFormatter.read) {
      throw new Error("toIntegerFormatter must have a read function");
    }

    if (!_to_float_formatter__WEBPACK_IMPORTED_MODULE_1__.toFloatFormatter.read) {
      throw new Error("toFloatFormatter must have a read function");
    }

    const retI = _to_integer_formatter__WEBPACK_IMPORTED_MODULE_0__.toIntegerFormatter.read(target * 1);
    const retF = _to_float_formatter__WEBPACK_IMPORTED_MODULE_1__.toFloatFormatter.read(target);
    return retI == retF ? retI : retF;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/to-float.formatter.ts":
/*!************************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/to-float.formatter.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toFloatFormatter": function() { return /* binding */ toFloatFormatter; }
/* harmony export */ });
/**
 * Returns the float representation of the given target
 * @see https://github.com/matthieuriolo/rivetsjs-stdlib/blob/master/src/rivetsstdlib.js#L133
 */
const toFloatFormatter = {
  name: "to-float",

  /**
   * Returns the integer representation of the given target.
   * @param target
   */
  read(target) {
    const ret = parseFloat(target * 1.0);
    return isNaN(ret) ? 0.0 : ret;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/to-integer.formatter.ts":
/*!**************************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/to-integer.formatter.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toIntegerFormatter": function() { return /* binding */ toIntegerFormatter; }
/* harmony export */ });
/**
 * Returns the integer representation of the given target.
 * @see https://github.com/matthieuriolo/rivetsjs-stdlib/blob/master/src/rivetsstdlib.js#L128
 */
const toIntegerFormatter = {
  name: "to-integer",

  /**
   * Returns the integer representation of the given target.
   * @param target
   */
  read(target) {
    const ret = parseInt(target * 1, 10);
    return isNaN(ret) ? 0 : ret;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/to-number.formatter.ts":
/*!*************************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/to-number.formatter.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toNumberFormatter": function() { return /* binding */ toNumberFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Parse a string to number / float
 * @see http://stackoverflow.com/a/1100653/1465919
 */

const toNumberFormatter = {
  name: "to-number",

  read(str, def) {
    const num = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.getNumber)(str); // If default value is set return the default value if num is 0, null or undefined

    if (def) {
      return num ? num : def;
    }

    return num;
  }

};

/***/ }),

/***/ "../../../packages/core/src/formatters/type/to-string.formatter.ts":
/*!*************************************************************************!*\
  !*** ../../../packages/core/src/formatters/type/to-string.formatter.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toStringFormatter": function() { return /* binding */ toStringFormatter; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

/**
 * Parses a value to string
 * @param value The value you want to parse to string
 * @param def Default value if value is undefined
 */

const toStringFormatter = {
  name: "to-string",

  read(value, def) {
    // If value is an array convert each value in array to string
    if (Array.isArray(value)) {
      for (const i in value) {
        if (value[i]) {
          value[i] = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.getString)(value[i]);
        }
      }
    } else if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)) {
      for (const key in value) {
        value[key] = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.getString)(value[key]);
      }
    } else {
      value = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.getString)(value);
    } // If default value is set return the default value if num is 0, null or undefined


    if (def) {
      return value ? value : def;
    }

    return value;
  }

};

/***/ }),

/***/ "../../../packages/core/src/index.ts":
/*!*******************************************!*\
  !*** ../../../packages/core/src/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Adapter": function() { return /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.Adapter; },
/* harmony export */   "MediaReadyState": function() { return /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.MediaReadyState; },
/* harmony export */   "AdapterService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.AdapterService; },
/* harmony export */   "BindersService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.BindersService; },
/* harmony export */   "ComponentService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.ComponentService; },
/* harmony export */   "CoreService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.CoreService; },
/* harmony export */   "FormatterService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.FormatterService; },
/* harmony export */   "HttpService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.HttpService; },
/* harmony export */   "LifecycleService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.LifecycleService; },
/* harmony export */   "dotAdapter": function() { return /* reexport safe */ _adapters__WEBPACK_IMPORTED_MODULE_3__.dotAdapter; },
/* harmony export */   "AddClassBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.AddClassBinder; },
/* harmony export */   "AnimateStarBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.AnimateStarBinder; },
/* harmony export */   "AssignBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.AssignBinder; },
/* harmony export */   "AssignPropertyBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.AssignPropertyBinder; },
/* harmony export */   "BlockBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.BlockBinder; },
/* harmony export */   "CheckedBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.CheckedBinder; },
/* harmony export */   "ClassStarBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.ClassStarBinder; },
/* harmony export */   "ComponentAttributeBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.ComponentAttributeBinder; },
/* harmony export */   "DisabledBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.DisabledBinder; },
/* harmony export */   "EachStarBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.EachStarBinder; },
/* harmony export */   "EnabledBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.EnabledBinder; },
/* harmony export */   "FlexSortChildsBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.FlexSortChildsBinder; },
/* harmony export */   "HideBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.HideBinder; },
/* harmony export */   "HtmlBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.HtmlBinder; },
/* harmony export */   "IfBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.IfBinder; },
/* harmony export */   "MaxlengthBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.MaxlengthBinder; },
/* harmony export */   "NotDraggableBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.NotDraggableBinder; },
/* harmony export */   "OnEventBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.OnEventBinder; },
/* harmony export */   "ParentBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.ParentBinder; },
/* harmony export */   "ReadonlyBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.ReadonlyBinder; },
/* harmony export */   "RemoveClassBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.RemoveClassBinder; },
/* harmony export */   "ShowBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.ShowBinder; },
/* harmony export */   "SrcsetSizeBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.SrcsetSizeBinder; },
/* harmony export */   "StyleBackgroundImageBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.StyleBackgroundImageBinder; },
/* harmony export */   "StyleBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.StyleBinder; },
/* harmony export */   "StyleStarBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.StyleStarBinder; },
/* harmony export */   "TagStarBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.TagStarBinder; },
/* harmony export */   "TemplateBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.TemplateBinder; },
/* harmony export */   "TextBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.TextBinder; },
/* harmony export */   "ToggleOnEventBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.ToggleOnEventBinder; },
/* harmony export */   "UncheckedBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.UncheckedBinder; },
/* harmony export */   "UnlessBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.UnlessBinder; },
/* harmony export */   "ValueBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_4__.ValueBinder; },
/* harmony export */   "BasicComponent": function() { return /* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_5__.BasicComponent; },
/* harmony export */   "Component": function() { return /* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_5__.Component; },
/* harmony export */   "VideoComponent": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_6__.VideoComponent; },
/* harmony export */   "TemplatesComponent": function() { return /* reexport safe */ _components_templates_templates_component__WEBPACK_IMPORTED_MODULE_7__.TemplatesComponent; },
/* harmony export */   "andFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.andFormatter; },
/* harmony export */   "appendFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.appendFormatter; },
/* harmony export */   "argsFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.argsFormatter; },
/* harmony export */   "betweenFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.betweenFormatter; },
/* harmony export */   "booleanFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.booleanFormatter; },
/* harmony export */   "callFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.callFormatter; },
/* harmony export */   "callNameFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.callNameFormatter; },
/* harmony export */   "capitalizeFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.capitalizeFormatter; },
/* harmony export */   "containsFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.containsFormatter; },
/* harmony export */   "cutFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.cutFormatter; },
/* harmony export */   "debugFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.debugFormatter; },
/* harmony export */   "defaultFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.defaultFormatter; },
/* harmony export */   "digitsFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.digitsFormatter; },
/* harmony export */   "dividedByFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.dividedByFormatter; },
/* harmony export */   "downcaseFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.downcaseFormatter; },
/* harmony export */   "egtFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.egtFormatter; },
/* harmony export */   "eltFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.eltFormatter; },
/* harmony export */   "emptyFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.emptyFormatter; },
/* harmony export */   "endsWithFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.endsWithFormatter; },
/* harmony export */   "eqFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.eqFormatter; },
/* harmony export */   "evenFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.evenFormatter; },
/* harmony export */   "filledFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.filledFormatter; },
/* harmony export */   "firstFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.firstFormatter; },
/* harmony export */   "gcdFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.gcdFormatter; },
/* harmony export */   "getFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.getFormatter; },
/* harmony export */   "gtFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.gtFormatter; },
/* harmony export */   "handleizeFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.handleizeFormatter; },
/* harmony export */   "isArrayFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.isArrayFormatter; },
/* harmony export */   "isBooleanFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.isBooleanFormatter; },
/* harmony export */   "isDefinedFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.isDefinedFormatter; },
/* harmony export */   "isDesktopFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.isDesktopFormatter; },
/* harmony export */   "isIntegerFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.isIntegerFormatter; },
/* harmony export */   "isLastFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.isLastFormatter; },
/* harmony export */   "isMobileFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.isMobileFormatter; },
/* harmony export */   "isNumberFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.isNumberFormatter; },
/* harmony export */   "isObjectFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.isObjectFormatter; },
/* harmony export */   "isStringFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.isStringFormatter; },
/* harmony export */   "isUndefinedFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.isUndefinedFormatter; },
/* harmony export */   "joinFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.joinFormatter; },
/* harmony export */   "jsonFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.jsonFormatter; },
/* harmony export */   "lastFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.lastFormatter; },
/* harmony export */   "ltFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.ltFormatter; },
/* harmony export */   "mapFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.mapFormatter; },
/* harmony export */   "matchFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.matchFormatter; },
/* harmony export */   "minusFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.minusFormatter; },
/* harmony export */   "moduloFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.moduloFormatter; },
/* harmony export */   "neFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.neFormatter; },
/* harmony export */   "notFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.notFormatter; },
/* harmony export */   "numberFormatFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.numberFormatFormatter; },
/* harmony export */   "orFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.orFormatter; },
/* harmony export */   "osFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.osFormatter; },
/* harmony export */   "overlapsFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.overlapsFormatter; },
/* harmony export */   "padEndFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.padEndFormatter; },
/* harmony export */   "padStartFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.padStartFormatter; },
/* harmony export */   "parseFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.parseFormatter; },
/* harmony export */   "pluralizeFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.pluralizeFormatter; },
/* harmony export */   "plusFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.plusFormatter; },
/* harmony export */   "preferFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.preferFormatter; },
/* harmony export */   "prependFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.prependFormatter; },
/* harmony export */   "randomFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.randomFormatter; },
/* harmony export */   "rangeFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.rangeFormatter; },
/* harmony export */   "replaceFirstFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.replaceFirstFormatter; },
/* harmony export */   "replaceFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.replaceFormatter; },
/* harmony export */   "setFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.setFormatter; },
/* harmony export */   "sizeFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.sizeFormatter; },
/* harmony export */   "sliceFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.sliceFormatter; },
/* harmony export */   "startsWithFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.startsWithFormatter; },
/* harmony export */   "stripFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.stripFormatter; },
/* harmony export */   "stripHtmlFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.stripHtmlFormatter; },
/* harmony export */   "ternaryFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.ternaryFormatter; },
/* harmony export */   "timesFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.timesFormatter; },
/* harmony export */   "toDecimalFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.toDecimalFormatter; },
/* harmony export */   "toFloatFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.toFloatFormatter; },
/* harmony export */   "toIntegerFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.toIntegerFormatter; },
/* harmony export */   "toNumberFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.toNumberFormatter; },
/* harmony export */   "toStringFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.toStringFormatter; },
/* harmony export */   "unevenFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.unevenFormatter; },
/* harmony export */   "upcaseFormatter": function() { return /* reexport safe */ _formatters__WEBPACK_IMPORTED_MODULE_8__.upcaseFormatter; },
/* harmony export */   "Binder": function() { return /* reexport safe */ _binder__WEBPACK_IMPORTED_MODULE_9__.Binder; },
/* harmony export */   "parseDeclaration": function() { return /* reexport safe */ _parse_declaration__WEBPACK_IMPORTED_MODULE_10__.parseDeclaration; },
/* harmony export */   "parseNode": function() { return /* reexport safe */ _parse_node__WEBPACK_IMPORTED_MODULE_11__.parseNode; },
/* harmony export */   "parseTemplate": function() { return /* reexport safe */ _parse_template__WEBPACK_IMPORTED_MODULE_12__.parseTemplate; },
/* harmony export */   "parseType": function() { return /* reexport safe */ _parse_type__WEBPACK_IMPORTED_MODULE_13__.parseType; },
/* harmony export */   "Riba": function() { return /* reexport safe */ _riba__WEBPACK_IMPORTED_MODULE_14__.Riba; },
/* harmony export */   "View": function() { return /* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_15__.View; },
/* harmony export */   "coreModule": function() { return /* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_16__.coreModule; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "../../../packages/core/src/types/index.ts");
/* harmony import */ var _vendors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendors */ "../../../packages/core/src/vendors/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "../../../packages/core/src/services/index.ts");
/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adapters */ "../../../packages/core/src/adapters/index.ts");
/* harmony import */ var _binders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binders */ "../../../packages/core/src/binders/index.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component */ "../../../packages/core/src/component/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "../../../packages/core/src/components/index.ts");
/* harmony import */ var _components_templates_templates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/templates/templates.component */ "../../../packages/core/src/components/templates/templates.component.ts");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formatters */ "../../../packages/core/src/formatters/index.ts");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./binder */ "../../../packages/core/src/binder.ts");
/* harmony import */ var _parse_declaration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parse-declaration */ "../../../packages/core/src/parse-declaration.ts");
/* harmony import */ var _parse_node__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parse-node */ "../../../packages/core/src/parse-node.ts");
/* harmony import */ var _parse_template__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parse-template */ "../../../packages/core/src/parse-template.ts");
/* harmony import */ var _parse_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parse-type */ "../../../packages/core/src/parse-type.ts");
/* harmony import */ var _riba__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./riba */ "../../../packages/core/src/riba.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view */ "../../../packages/core/src/view.ts");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core.module */ "../../../packages/core/src/core.module.ts");


















/***/ }),

/***/ "../../../packages/core/src/observer.ts":
/*!**********************************************!*\
  !*** ../../../packages/core/src/observer.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observer": function() { return /* binding */ Observer; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

class Observer {
  static updateOptions(options) {
    if (!options.adapters) {
      throw new Error("adapters are required!");
    }

    if (options.adapters) {
      Observer.adapters = _objectSpread(_objectSpread({}, Observer.adapters), options.adapters);
      Observer.interfaces = Object.keys(Observer.adapters);
    }

    Observer.rootInterface = options.rootInterface || Observer.interfaces[0];

    if (!Observer.rootInterface) {
      throw new Error("rootInterface is required!");
    }
  }
  /**
   * Tokenizes the provided keypath string into interface + path tokens for the
   * observer to work with.
   */


  static tokenize(keypath, root) {
    const tokens = [];
    let current = {
      i: root,
      path: ""
    };
    let index;
    let chr;

    for (index = 0; index < keypath.length; index++) {
      chr = keypath.charAt(index);

      if (~Observer.interfaces.indexOf(chr)) {
        tokens.push(current);
        current = {
          i: chr,
          path: ""
        };
      } else {
        current.path += chr;
      }
    }

    tokens.push(current);
    return tokens;
  }
  /**
   * Gets the provided key on an object.
   * @param key
   * @param obj
   */


  static get(key, obj) {
    return Observer.adapters[key.i].get(obj, key.path);
  }
  /**
   * Observes or unobserves a callback on the object using the provided key.
   * @param active
   * @param key
   * @param obj
   * @param callback
   */


  static set(active, key, obj, callback) {
    if (active) {
      Observer.adapters[key.i].observe(obj, key.path, callback);
    } else {
      Observer.adapters[key.i].unobserve(obj, key.path, callback);
    }
  }

  /**
   * Constructs a new keypath observer and kicks things off.
   * @param obj
   * @param keypath
   * @param callback
   */
  constructor(obj, keypath, callback) {
    this.keypath = keypath;
    this.callback = callback;
    this.objectPath = [];
    const parseResult = this.parse();
    this.key = parseResult.key;
    this.tokens = parseResult.tokens;
    this.obj = this.getRootObject(obj);
    this.target = this.realize();

    if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_1__.isObject)(this.target)) {
      Observer.set(true, this.key, this.target, this.callback);
    }
  }
  /**
   * Parses the keypath using the interfaces defined on the view. Sets variables
   * for the tokenized keypath as well as the end key.
   */


  parse() {
    let path;
    let root;

    if (!Observer.interfaces || !Observer.interfaces.length) {
      throw new Error("[Observer] Must define at least one adapter interface. interfaces: \"".concat(JSON.stringify(Observer.interfaces), "\" adapters: \"").concat(JSON.stringify(Observer.adapters), "\""));
    }

    if (~Observer.interfaces.indexOf(this.keypath[0])) {
      root = this.keypath[0];
      path = this.keypath.substr(1);
    } else {
      root = Observer.rootInterface;
      path = this.keypath;
    }

    this.tokens = Observer.tokenize(path, root);

    if (!this.tokens.length) {
      throw new Error("[Observer] No tokens");
    }

    this.key = this.tokens.pop();
    return {
      key: this.key,
      tokens: this.tokens
    };
  }
  /**
   * Realizes the full keypath, attaching observers for every key and correcting
   * old observers to any changed objects in the keypath.
   */


  realize() {
    let current = this.obj;
    let unreached = -1;
    let prev;
    let token;

    for (let index = 0; index < this.tokens.length; index++) {
      token = this.tokens[index];

      if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_1__.isObject)(current)) {
        if (typeof this.objectPath[index] !== "undefined") {
          prev = this.objectPath[index];

          if (current !== prev) {
            Observer.set(false, token, prev, this);
            Observer.set(true, token, current, this);
            this.objectPath[index] = current;
          }
        } else {
          Observer.set(true, token, current, this);
          this.objectPath[index] = current;
        }

        current = Observer.get(token, current);
      } else {
        if (unreached === -1) {
          unreached = index;
        }

        prev = this.objectPath[index];

        if (prev) {
          Observer.set(false, token, prev, this);
        }
      }
    }

    if (unreached !== -1) {
      this.objectPath.splice(unreached);
    }

    return current;
  }
  /**
   * Updates the keypath. This is called when any intermediary key is changed.
   */


  sync() {
    let oldValue;
    let newValue;
    const next = this.realize();

    if (next !== this.target) {
      if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_1__.isObject)(this.target)) {
        Observer.set(false, this.key, this.target, this.callback);
      }

      if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_1__.isObject)(next)) {
        Observer.set(true, this.key, next, this.callback);
      }

      oldValue = this.value();
      this.target = next;
      newValue = this.value();

      if (newValue !== oldValue || Array.isArray(newValue)) {
        this.callback.sync();
      }
    } else if (Array.isArray(next)) {
      this.callback.sync();
    }
  }
  /**
   * Reads the current end value of the observed keypath. Returns undefined if
   * the full keypath is unreachable.
   */


  value() {
    if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_1__.isObject)(this.target)) {
      return Observer.get(this.key, this.target);
    }
  }
  /**
   * Sets the current end value of the observed keypath. Calling setValue when
   *  the full keypath is unreachable is a no-op.
   * @param value
   */


  setValue(value) {
    if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_1__.isObject)(this.target)) {
      Observer.adapters[this.key.i].set(this.target, this.key.path, value);
    }
  }
  /**
   * Unobserves the entire keypath.
   */


  unobserve() {
    let obj;
    let token;

    for (let index = 0; index < this.tokens.length; index++) {
      token = this.tokens[index];
      obj = this.objectPath[index];

      if (obj) {
        Observer.set(false, token, obj, this);
      }
    }

    if ((0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_1__.isObject)(this.target)) {
      Observer.set(false, this.key, this.target, this.callback);
    }
  }
  /**
   * traverse the scope chain to find the scope which has the root property
   * if the property is not found in chain, returns the root scope
   * @param obj
   */


  getRootObject(obj) {
    let rootProp;
    let current;

    if (!obj.$parent) {
      return obj;
    }

    if (this.tokens.length) {
      rootProp = this.tokens[0].path;
    } else {
      rootProp = this.key.path;
    }

    current = obj;

    while (current.$parent && current[rootProp] === undefined) {
      current = current.$parent;
    }

    return current;
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Observer, "interfaces", []);

/***/ }),

/***/ "../../../packages/core/src/parse-declaration.ts":
/*!*******************************************************!*\
  !*** ../../../packages/core/src/parse-declaration.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseDeclaration": function() { return /* binding */ parseDeclaration; }
/* harmony export */ });
/* harmony import */ var _constants_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/parser */ "../../../packages/core/src/constants/parser.ts");

/**
 * Parses an attribute argument to his keypath and splits the formatter names into a pipes array.
 * @param declaration e.g. `object.data | validate | json`
 *
 * if declaration is
 * ```
 * object.data | validate | json`
 * ``
 *
 * the result is
 * ```
 * {
 *    keypath: "object.data",
 *    pipes: ["validate", "json"]
 * }
 * ```
 */

function parseDeclaration(declaration) {
  const matches = declaration.match(_constants_parser__WEBPACK_IMPORTED_MODULE_0__.DECLARATION_SPLIT);

  if (matches === null) {
    throw new Error("[View] No matches");
  }

  const pipes = matches.map(str => {
    return str.trim();
  });
  const keypath = pipes.shift() || undefined;
  return {
    keypath,
    pipes
  };
}

/***/ }),

/***/ "../../../packages/core/src/parse-node.ts":
/*!************************************************!*\
  !*** ../../../packages/core/src/parse-node.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseNode": function() { return /* binding */ parseNode; }
/* harmony export */ });
/* harmony import */ var _binders_mustache_text_binder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binders/mustache-text.binder */ "../../../packages/core/src/binders/mustache-text.binder.ts");
/* harmony import */ var _constants_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/parser */ "../../../packages/core/src/constants/parser.ts");
/* harmony import */ var _parse_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parse-template */ "../../../packages/core/src/parse-template.ts");



function parseNode(view, node, templateDelimiters) {
  /** If true stop / block the parseNode  recursion */
  let blockRecursion = false;
  node = node;

  if (node.nodeType === Node.TEXT_NODE) {
    let tokens = null;

    if (node.data) {
      tokens = (0,_parse_template__WEBPACK_IMPORTED_MODULE_2__.parseTemplate)(node.data, templateDelimiters);
    }

    if (tokens && tokens.length) {
      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const text = document.createTextNode(token.value);

        if (node.parentNode && text && node) {
          node.parentNode.insertBefore(text, node);
        }

        if (token.type === _constants_parser__WEBPACK_IMPORTED_MODULE_1__.BINDING) {
          // TODO fix circular dependency
          view.buildBinding(text, null, token.value, _binders_mustache_text_binder__WEBPACK_IMPORTED_MODULE_0__.MustacheTextBinder, null);
        }
      }

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }

    blockRecursion = true;
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    // traverse binds attributes and components
    blockRecursion = view.traverse(node);
  }

  if (!blockRecursion) {
    if (node.childNodes && node.childNodes.length > 0) {
      for (let i = 0; i < node.childNodes.length; i++) {
        const childNode = node.childNodes[i];

        if (childNode) {
          parseNode(view, childNode, templateDelimiters);
        }
      }
    }
  }
}

/***/ }),

/***/ "../../../packages/core/src/parse-template.ts":
/*!****************************************************!*\
  !*** ../../../packages/core/src/parse-template.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseTemplate": function() { return /* binding */ parseTemplate; }
/* harmony export */ });
/* harmony import */ var _constants_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/parser */ "../../../packages/core/src/constants/parser.ts");

/**
 * Template parser and tokenizer for {{ mustache-style }} text content bindings.
 * Parses the template and returns a set of tokens, separating static portions
 * of text from binding declarations.
 * @param template
 * @param delimiters
 */

function parseTemplate(template, delimiters) {
  let tokens = null;
  const length = template.length;
  let index = 0;
  let lastIndex = 0;
  const open = delimiters[0];
  const close = delimiters[1];

  while (lastIndex < length) {
    index = template.indexOf(open, lastIndex);

    if (index < 0) {
      if (tokens) {
        tokens.push({
          type: _constants_parser__WEBPACK_IMPORTED_MODULE_0__.TEXT,
          value: template.slice(lastIndex)
        });
      }

      break;
    } else {
      tokens = tokens || [];

      if (index > 0 && lastIndex < index) {
        tokens.push({
          type: _constants_parser__WEBPACK_IMPORTED_MODULE_0__.TEXT,
          value: template.slice(lastIndex, index)
        });
      }

      lastIndex = index + open.length;
      index = template.indexOf(close, lastIndex);

      if (index < 0) {
        const substring = template.slice(lastIndex - open.length);
        const lastToken = tokens[tokens.length - 1];

        if (lastToken && lastToken.type === _constants_parser__WEBPACK_IMPORTED_MODULE_0__.TEXT) {
          lastToken.value += substring;
        } else {
          tokens.push({
            type: _constants_parser__WEBPACK_IMPORTED_MODULE_0__.TEXT,
            value: substring
          });
        }

        break;
      }

      const value = template.slice(lastIndex, index).trim();
      tokens.push({
        type: _constants_parser__WEBPACK_IMPORTED_MODULE_0__.BINDING,
        value
      });
      lastIndex = index + close.length;
    }
  }

  return tokens;
}

/***/ }),

/***/ "../../../packages/core/src/parse-type.ts":
/*!************************************************!*\
  !*** ../../../packages/core/src/parse-type.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseType": function() { return /* binding */ parseType; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils */ "../../../packages/utils/src/index.ts");
/* harmony import */ var _constants_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/parser */ "../../../packages/core/src/constants/parser.ts");


/**
 * Parser and tokenizer for getting the type and value from a string.
 * @param string
 */

function parseType(str) {
  let type = _constants_parser__WEBPACK_IMPORTED_MODULE_1__.PRIMITIVE;
  let value = str;

  if (str === undefined) {
    return {
      type,
      value: undefined
    };
  }

  if (_constants_parser__WEBPACK_IMPORTED_MODULE_1__.QUOTED_STR.test(str)) {
    value = str.slice(1, -1);
    const jsonString = (0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_0__.parseJsonString)(value);
    value = jsonString ? jsonString : value;
  } else if (str === "true") {
    value = true;
  } else if (str === "false") {
    value = false;
  } else if (str === "null") {
    value = null;
  } else if (str === "undefined") {
    value = undefined;
  } else if (str === "") {
    value = undefined;
  } else if (!isNaN(Number(str))) {
    value = Number(str);
  } else if ((0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_0__.couldBeJson)(value)) {
    const jsonString = (0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_0__.parseJsonString)(value);
    value = jsonString ? jsonString : value;
  } else {
    type = _constants_parser__WEBPACK_IMPORTED_MODULE_1__.KEYPATH;
  }

  return {
    type,
    value
  };
}

/***/ }),

/***/ "../../../packages/core/src/riba.ts":
/*!******************************************!*\
  !*** ../../../packages/core/src/riba.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Riba": function() { return /* binding */ Riba; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _parse_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse-template */ "../../../packages/core/src/parse-template.ts");
/* harmony import */ var _parse_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parse-type */ "../../../packages/core/src/parse-type.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ "../../../packages/core/src/view.ts");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observer */ "../../../packages/core/src/observer.ts");
/* harmony import */ var _services_module_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/module.service */ "../../../packages/core/src/services/module.service.ts");
/* harmony import */ var _services_lifecycle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/lifecycle.service */ "../../../packages/core/src/services/lifecycle.service.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







class Riba {
  /**
   * Default event handler, calls the function defined in his binder
   * @see Binding.eventHandler
   * @param el The element the event was triggered from
   */
  static handler(context, ev, binder, el) {
    if (!this || !this.call) {
      const error = new Error("[rv-".concat(binder.type, "=\"").concat(binder.keypath, "\"] Event handler \"").concat(binder.keypath, "\" not found!\""));
      console.error(error, binder, el, binder.view.models);
      throw error;
    }

    this.call(context, ev, binder.view.models, el);
  }
  /** singleton instance */


  set prefix(value) {
    if (Array.isArray(value)) {
      this._prefix = [];
      this._fullPrefix = [];

      for (const val of value) {
        this._prefix.push(val);

        this._fullPrefix.push(val + "-");
      }
    }
  }

  get prefix() {
    return this._prefix;
  }

  get fullPrefix() {
    return this._fullPrefix;
  }
  /**
   * Creates an singleton instance of Riba.
   */


  constructor() {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lifecycle", _services_lifecycle_service__WEBPACK_IMPORTED_MODULE_6__.LifecycleService.getInstance());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "binders", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "components", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "formatters", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "adapters", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "parseTemplate", _parse_template__WEBPACK_IMPORTED_MODULE_1__.parseTemplate);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "parseType", _parse_type__WEBPACK_IMPORTED_MODULE_2__.parseType);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templateDelimiters", ["{", "}"]);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rootInterface", ".");

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "preloadData", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "removeBinderAttributes", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "blockNodeNames", ["SCRIPT", "STYLE", "TEMPLATE", "CODE"]);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "blockUnknownCustomElements", true);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_prefix", ["rv"]);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_fullPrefix", ["rv-"]);

    this.module = new _services_module_service__WEBPACK_IMPORTED_MODULE_5__.ModulesService(this.binders, this.components, this.formatters, this.adapters);

    if (Riba.instance) {
      return Riba.instance;
    }

    Riba.instance = this;
  }
  /**
   * Merges an object literal into the corresponding global options.
   * @param options
   */


  configure(options) {
    if (!options) {
      return;
    }

    for (const [option, value] of Object.entries(options)) {
      switch (option) {
        case "binders":
          this.binders = _objectSpread(_objectSpread({}, this.binders), value);
          break;

        case "formatters":
          this.formatters = _objectSpread(_objectSpread({}, this.formatters), value);
          break;

        case "components":
          this.components = _objectSpread(_objectSpread({}, this.components), value);
          break;

        case "adapters":
          this.adapters = _objectSpread(_objectSpread({}, this.adapters), value);
          break;

        case "prefix":
          this.prefix = value;
          break;

        case "parseTemplate":
          this.parseTemplate = value;
          break;

        case "parseType":
          this.parseType = value;
          break;

        case "templateDelimiters":
          this.templateDelimiters = value;
          break;

        case "rootInterface":
          this.rootInterface = value;
          break;

        case "preloadData":
          this.preloadData = value;
          break;

        case "blockNodeNames":
          this.blockNodeNames = value;
          break;

        case "blockUnknownCustomElements":
          this.blockUnknownCustomElements = Boolean(value);
          break;

        default:
          console.warn("Option not supported", option, value);
          break;
      }
    }
  }

  getViewOptions(options) {
    const viewOptions = {
      // EXTENSIONS
      adapters: {},
      binders: {},
      components: {},
      formatters: {},
      // other
      attributeBinders: [],
      // sightglass
      rootInterface: {}
    };

    if (options) {
      viewOptions.binders = _objectSpread(_objectSpread({}, viewOptions.binders), options.binders);
      viewOptions.formatters = _objectSpread(_objectSpread({}, viewOptions.formatters), options.formatters);
      viewOptions.components = _objectSpread(_objectSpread({}, viewOptions.components), options.components);
      viewOptions.adapters = _objectSpread(_objectSpread({}, viewOptions.adapters), options.adapters);
    } // Prefix


    if (options !== null && options !== void 0 && options.prefix && Array.isArray(options === null || options === void 0 ? void 0 : options.prefix)) {
      viewOptions.prefix = [];
      viewOptions.fullPrefix = [];

      for (const prefix of options.prefix) {
        viewOptions.prefix.push(prefix);
        viewOptions.fullPrefix.push(prefix + "-");
      }
    } else {
      viewOptions.prefix = this.prefix;
      viewOptions.fullPrefix = this.fullPrefix;
    }

    viewOptions.templateDelimiters = (options === null || options === void 0 ? void 0 : options.templateDelimiters) || this.templateDelimiters;
    viewOptions.rootInterface = (options === null || options === void 0 ? void 0 : options.rootInterface) || this.rootInterface;
    viewOptions.removeBinderAttributes = typeof (options === null || options === void 0 ? void 0 : options.removeBinderAttributes) === "boolean" ? options.removeBinderAttributes : this.removeBinderAttributes;
    viewOptions.blockNodeNames = (options === null || options === void 0 ? void 0 : options.blockNodeNames) || this.blockNodeNames;
    viewOptions.preloadData = typeof (options === null || options === void 0 ? void 0 : options.preloadData) === "boolean" ? options.preloadData : this.preloadData;
    viewOptions.handler = (options === null || options === void 0 ? void 0 : options.handler) || Riba.handler; // merge extensions

    viewOptions.binders = _objectSpread(_objectSpread({}, this.binders), viewOptions.binders);
    viewOptions.formatters = _objectSpread(_objectSpread({}, this.formatters), viewOptions.formatters);
    viewOptions.components = _objectSpread(_objectSpread({}, this.components), viewOptions.components);
    viewOptions.adapters = _objectSpread(_objectSpread({}, this.adapters), viewOptions.adapters);

    if (!viewOptions.attributeBinders) {
      viewOptions.attributeBinders = [];
    } // get all attributeBinders from available binders


    if (viewOptions.binders) {
      const attributeBinders = Object.keys(viewOptions.binders).filter(key => key.indexOf("*") >= 1 // Should contain, but not start with, *
      );
      viewOptions.attributeBinders.push(...attributeBinders);
    }

    return viewOptions;
  }
  /**
   * Binds some data to a template / element. Returns a riba.View instance.
   */


  bind(el, models, options) {
    const viewOptions = this.getViewOptions(options);
    models = models || Object.create(null);
    _observer__WEBPACK_IMPORTED_MODULE_4__.Observer.updateOptions(viewOptions);
    const view = new _view__WEBPACK_IMPORTED_MODULE_3__.View(el, models, viewOptions);
    view.bind();
    return view;
  }

}
window.Riba = Riba;

/***/ }),

/***/ "../../../packages/core/src/services/adapter.service.ts":
/*!**************************************************************!*\
  !*** ../../../packages/core/src/services/adapter.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdapterService": function() { return /* binding */ AdapterService; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _module_element_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-element.service */ "../../../packages/core/src/services/module-element.service.ts");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer */ "../../../packages/core/src/observer.ts");



class AdapterService extends _module_element_service__WEBPACK_IMPORTED_MODULE_1__.ModuleElementService {
  /**
   *
   */
  constructor(adapters) {
    super(adapters);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "type", "adapter");
  }
  /**
   * Regist a adapter with his name
   * @param adapter
   * @param name
   */


  regist(adapter, fallbackName) {
    let forceFallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    const name = forceFallback ? fallbackName || adapter.name : adapter.name || fallbackName;

    if (!name) {
      throw new Error("Adapter name not found!");
    }

    this.elements[name] = adapter;
    const options = {
      adapters: this.elements
    };
    _observer__WEBPACK_IMPORTED_MODULE_2__.Observer.updateOptions(options);
    return this.elements;
  }

}

/***/ }),

/***/ "../../../packages/core/src/services/binder.service.ts":
/*!*************************************************************!*\
  !*** ../../../packages/core/src/services/binder.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindersService": function() { return /* binding */ BindersService; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _module_element_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-element.service */ "../../../packages/core/src/services/module-element.service.ts");


/**
 *
 */

class BindersService extends _module_element_service__WEBPACK_IMPORTED_MODULE_1__.ModuleElementService {
  /**
   *
   * @param binders;
   */
  constructor(binders) {
    super(binders);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "type", "binder");
  }
  /**
   * Regist a binder
   * @param binder
   * @param name  Overwrites the name to access the binder over
   */


  regist(Binder, fallbackName) {
    let forceFallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!Binder) {
      throw new Error("No Binder passed to register!");
    }

    const name = forceFallback ? fallbackName || Binder.key : Binder.key || fallbackName;

    if (!name) {
      throw new Error("Binder name not found!");
    }

    this.elements[name] = Binder;
    return this.elements;
  }

}

/***/ }),

/***/ "../../../packages/core/src/services/component.service.ts":
/*!****************************************************************!*\
  !*** ../../../packages/core/src/services/component.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentService": function() { return /* binding */ ComponentService; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _module_element_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-element.service */ "../../../packages/core/src/services/module-element.service.ts");


class ComponentService extends _module_element_service__WEBPACK_IMPORTED_MODULE_1__.ModuleElementService {
  /**
   *
   * @param components
   */
  constructor(components) {
    super(components);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "type", "components");
  }
  /**
   * Regist a component with his name
   * @param component
   * @param name
   */


  regist(component, fallbackName) {
    let forceFallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    const name = forceFallback ? fallbackName || component.tagName : component.tagName || fallbackName;

    if (!name) {
      console.warn(new Error("Component name not found!"), component);
      return this.elements;
    }

    this.elements[name] = component;
    return this.elements;
  }

}

/***/ }),

/***/ "../../../packages/core/src/services/core.service.ts":
/*!***********************************************************!*\
  !*** ../../../packages/core/src/services/core.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreService": function() { return /* binding */ CoreService; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");

class CoreService {
  static get options() {
    return this._options;
  }

  constructor() {
    /**/
  }

  static getSingleton() {
    if (this.instance) {
      return this.instance;
    }

    throw new Error("Singleton of CoreService not defined, please call setSingleton first!");
  }

  static setSingleton() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (this.instance) {
      throw new Error("Singleton of CoreService already defined!");
    }

    this._options = options;
    this.instance = new this();
    return this.instance;
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CoreService, "_options", {});

/***/ }),

/***/ "../../../packages/core/src/services/formatter.service.ts":
/*!****************************************************************!*\
  !*** ../../../packages/core/src/services/formatter.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatterService": function() { return /* binding */ FormatterService; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _module_element_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-element.service */ "../../../packages/core/src/services/module-element.service.ts");


class FormatterService extends _module_element_service__WEBPACK_IMPORTED_MODULE_1__.ModuleElementService {
  /**
   *
   */
  constructor(formatters) {
    super(formatters);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "type", "formatter");
  }
  /**
   * Regist a formatter with his name
   * @param formatter
   * @param name
   */


  regist(formatter, fallbackName) {
    let forceFallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    const name = forceFallback ? fallbackName || formatter.name : formatter.name || fallbackName;

    if (!name) {
      throw new Error("Formatter name not found!");
    }

    this.elements[name] = formatter;
    return this.elements;
  }

}

/***/ }),

/***/ "../../../packages/core/src/services/http.service.ts":
/*!***********************************************************!*\
  !*** ../../../packages/core/src/services/http.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": function() { return /* binding */ HttpService; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");


class HttpService {
  /**
   * Set header for each request
   * @param name Header name
   * @param value Header value
   */
  static setRequestHeaderEachRequest(name, value) {
    this._requestHeadersEachRequest.push({
      name,
      value
    });
  }
  /**
   * Load JSON-encoded data from the server using a GET HTTP request.
   * @param url A string containing the URL to which the request is sent.
   * @param data A plain object or string that is sent to the server with the request.
   * @see https://api.jquery.com/jquery.getjson/
   */


  static async getJSON(url, data) {
    let headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return this.fetch(url, "GET", data, "json", headers, options);
  }
  /**
   * Load data from the server using a HTTP POST request.
   * @param url A string containing the URL to which the request is sent.
   * @param data A plain object or string that is sent to the server with the request.
   * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
   * @see https://api.jquery.com/jquery.post/
   */


  static async post(url, data, dataType) {
    let headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    return this.fetch(url, "POST", data, dataType, headers, options);
  }

  static async delete(url, data, dataType) {
    let headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    return this.fetch(url, "DELETE", data, dataType, headers, options);
  }

  static async put(url, data, dataType) {
    let headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    return this.fetch(url, "PUT", data, dataType, headers, options);
  }
  /**
   * Load data from the server using a HTTP GET request.
   * @param url A string containing the URL to which the request is sent.
   * @param data A plain object or string that is sent to the server with the request.
   * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
   * @see https://api.jquery.com/jquery.get/
   */


  static async get(url, data, dataType) {
    let headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    return this.fetch(url, "GET", data, dataType, headers, options);
  }
  /**
   *
   * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
   */


  static parseDataType(dataType) {
    const headers = {};
    let contentType = "application/x-www-form-urlencoded";
    let accept = "*/*";

    switch (dataType) {
      case "script":
        contentType = "application/javascript";
        break;

      case "json":
        contentType = "application/json";
        accept = "application/json, text/javascript";
        break;

      case "xml":
        contentType = "application/xml";
        accept = "application/xml, text/xml";
        break;

      case "text":
        contentType = "text/plain";
        accept = "text/plain";
        break;

      case "html":
        contentType = "text/html";
        accept = "text/html";
        break;

      case "form":
        contentType = "application/x-www-form-urlencoded";
        break;
      // case "multi-form":
      //   contentType = "multipart/form-data";
      //   break;
    }

    if (contentType) {
      headers["Content-Type"] = contentType; // tslint:disable-next-line:no-string-literal

      headers["Accept"] = accept;
    }

    return headers;
  }

  static async fetch(url) {
    let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
    let data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let dataType = arguments.length > 3 ? arguments[3] : undefined;
    let headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    let options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

    if (!fetch) {
      throw new Error("Your browser does not support the fetch API, use xhr instead or install a polyfill.");
    }

    let body; // headers

    for (const header of this._requestHeadersEachRequest) {
      headers[header.name] = header.value;
    }

    if (dataType) {
      headers = (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_1__.extend)({
        deep: false
      }, headers, this.parseDataType(dataType));
    }

    if (!options.crossDomain && !headers["X-Requested-With"]) {
      headers["X-Requested-With"] = "XMLHttpRequest";
    }

    const cache = options.cache ? options.cache : "default";

    if (method === "GET" && data) {
      const queryStr = new URLSearchParams(data).toString();

      if (queryStr) {
        const separator = url.indexOf("?") !== -1 ? "&" : "?";
        url = url + separator + new URLSearchParams(data).toString();
      }
    } else if (data) {
      if (dataType === "form") {
        body = new URLSearchParams(data);
      } else {
        body = JSON.stringify(data);
      }
    }

    const response = await fetch(url, {
      credentials: "same-origin",
      cache,
      method,
      body,
      headers,
      mode: options.mode || "cors"
    });
    let bodyResult = await response.text();

    if (typeof bodyResult === "string" && (0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_1__.isJson)(bodyResult)) {
      bodyResult = JSON.parse(bodyResult);
    }

    if (typeof bodyResult === "string") {
      switch (bodyResult) {
        case "null":
          bodyResult = null;
          break;

        case "true":
          bodyResult = true;
          break;

        case "false":
          bodyResult = false;
          break;

        case "undefined":
          bodyResult = undefined;
          break;
      }
    }

    const result = {
      status: response.status,
      headers: response.headers,
      ok: response.ok,
      redirected: response.redirected,
      statusText: response.statusText,
      // trailer: response.trailer,
      type: response.type,
      url: response.url,
      arrayBuffer: response.arrayBuffer,
      blob: response.blob,
      bodyUsed: response.bodyUsed,
      clone: response.clone,
      formData: response.formData,
      text: response.text,
      body: bodyResult
    };
    return result;
  }
  /**
   * Header name value pair to send on each request
   */


}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(HttpService, "_requestHeadersEachRequest", []);

/***/ }),

/***/ "../../../packages/core/src/services/index.ts":
/*!****************************************************!*\
  !*** ../../../packages/core/src/services/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdapterService": function() { return /* reexport safe */ _adapter_service__WEBPACK_IMPORTED_MODULE_0__.AdapterService; },
/* harmony export */   "BindersService": function() { return /* reexport safe */ _binder_service__WEBPACK_IMPORTED_MODULE_1__.BindersService; },
/* harmony export */   "LifecycleService": function() { return /* reexport safe */ _lifecycle_service__WEBPACK_IMPORTED_MODULE_2__.LifecycleService; },
/* harmony export */   "ComponentService": function() { return /* reexport safe */ _component_service__WEBPACK_IMPORTED_MODULE_3__.ComponentService; },
/* harmony export */   "CoreService": function() { return /* reexport safe */ _core_service__WEBPACK_IMPORTED_MODULE_4__.CoreService; },
/* harmony export */   "FormatterService": function() { return /* reexport safe */ _formatter_service__WEBPACK_IMPORTED_MODULE_5__.FormatterService; },
/* harmony export */   "HttpService": function() { return /* reexport safe */ _http_service__WEBPACK_IMPORTED_MODULE_6__.HttpService; }
/* harmony export */ });
/* harmony import */ var _adapter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter.service */ "../../../packages/core/src/services/adapter.service.ts");
/* harmony import */ var _binder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binder.service */ "../../../packages/core/src/services/binder.service.ts");
/* harmony import */ var _lifecycle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifecycle.service */ "../../../packages/core/src/services/lifecycle.service.ts");
/* harmony import */ var _component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component.service */ "../../../packages/core/src/services/component.service.ts");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core.service */ "../../../packages/core/src/services/core.service.ts");
/* harmony import */ var _formatter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatter.service */ "../../../packages/core/src/services/formatter.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http.service */ "../../../packages/core/src/services/http.service.ts");








/***/ }),

/***/ "../../../packages/core/src/services/lifecycle.service.ts":
/*!****************************************************************!*\
  !*** ../../../packages/core/src/services/lifecycle.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LifecycleService": function() { return /* binding */ LifecycleService; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ribajs_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ribajs/events */ "../../../packages/events/dist/esm/index.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.service */ "../../../packages/core/src/services/core.service.ts");




/**
 * Component lifecycle control service.
 * Useful to check if all current components are bound and ready.
 */
class LifecycleService {
  constructor() {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "events", _ribajs_events__WEBPACK_IMPORTED_MODULE_1__.EventDispatcher.getInstance("lifecycle"));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "debug", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "routerEvents", _ribajs_events__WEBPACK_IMPORTED_MODULE_1__.EventDispatcher.getInstance());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "timeout", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "components", {});

    this.addEventListeners();
    this.reset();
    LifecycleService.instance = this;
  }

  static getInstance() {
    if (LifecycleService.instance) {
      return LifecycleService.instance;
    }

    LifecycleService.instance = new LifecycleService();
    return LifecycleService.instance;
  }

  getEmpty() {
    return {
      components: []
    };
  }

  addEventListeners() {
    this.events.on("Component:connected", data => {
      this.resetTimeout();
      this.components[data.tagName] = this.components[data.tagName] || this.getEmpty();
      this.components[data.tagName].components.push(data.component);
    });
    this.events.on("Component:disconnected", () => {
      this.resetTimeout();
      this.checkStates();
    });
    this.events.on("Component:afterBind", () => {
      this.resetTimeout();
      this.checkStates();
    });
    this.events.on("Component:error", (error, data) => {
      this.onError(error, data);
    }); // Router

    this.routerEvents.on("newPageReady", (viewId, newStatus, oldStatus, container, containerHtml, dataset, firstPageLoad) => {
      if (this.debug) console.debug("newPageReady", viewId, newStatus, oldStatus, "firstPageLoad", firstPageLoad);

      if (!firstPageLoad) {
        this.reset();
      }
    });
  }

  getState(tagName) {
    let connected = 0;
    let bound = 0;

    for (const component of this.components[tagName].components) {
      if (component.connected) {
        connected++;

        if (component.bound) {
          bound++;
        }
      }
    }

    return {
      connected,
      bound
    };
  }

  getStates() {
    const states = {};

    for (const tagName in this.components) {
      const state = this.getState(tagName);
      states[tagName] = {
        state,
        components: this.components[tagName].components
      };
    }

    return states;
  }

  checkStates() {
    let allBound = true;
    const states = this.getStates();

    for (const tagName in states) {
      const state = states[tagName].state;

      if (state.connected !== state.bound) {
        allBound = false;
        break;
      }
    }

    if (allBound) {
      this.onAllBound();
    }

    return {
      states,
      allBound
    };
  }

  onAllBound() {
    this.clearTimeout();
    this.events.trigger("ComponentLifecycle:allBound", this.components);
    if (this.debug) console.debug("[ComponentLifecycle] All components bound!");
  }

  onError(error, data) {
    this.clearTimeout();
    console.error("The component \"".concat(data.tagName, "\" has caused an error:"), error);
    this.events.trigger("ComponentLifecycle:error", error, data);
  }

  onTimeout() {
    this.clearTimeout();
    const states = this.getStates();

    if (Object.keys(states).length <= 0) {
      console.warn("No component found");
      return;
    }

    let errorMessage = "[ComponentLifecycle] Timeout! {count} component(s) takes too long!\nUnfinished components:\n";
    let count = 0;

    for (const tagName in states) {
      const state = states[tagName].state;

      if (state.connected !== state.bound) {
        count++;
        errorMessage += "".concat(tagName, ": ").concat(JSON.stringify(states[tagName].state, null, 2), " + \n");
      }
    }

    errorMessage = errorMessage.replace("{count}", count.toString());
    this.events.trigger("ComponentLifecycle:error", new Error(errorMessage), {});
  }

  clearTimeout() {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
  }

  resetTimeout() {
    var _CoreService$options$;

    if (this.debug) console.debug("[ComponentLifecycle] reset timeout..");
    this.clearTimeout();
    this.timeout = window.setTimeout(this.onTimeout.bind(this), ((_CoreService$options$ = _core_service__WEBPACK_IMPORTED_MODULE_2__.CoreService.options.lifecycle) === null || _CoreService$options$ === void 0 ? void 0 : _CoreService$options$.timeout) || 5000);
    return this.timeout;
  }

  reset() {
    if (this.debug) console.debug("[ComponentLifecycle] reset!");
    this.components = {};
    this.resetTimeout();
  }

}

/***/ }),

/***/ "../../../packages/core/src/services/module-element.service.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/services/module-element.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleElementService": function() { return /* binding */ ModuleElementService; }
/* harmony export */ });
/* harmony import */ var _ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ribajs/utils/src/type */ "../../../packages/utils/src/type.ts");

class ModuleElementService {
  /**
   *
   * @param elements;
   */
  constructor(elements) {
    this.elements = elements;
  }
  /**
   * Regist a element
   * @param element
   * @param name  Overwrites the name to access the element over
   */


  /**
   * Regist a set / array of elements
   * @param elements
   */
  regists(elements) {
    if (!(0,_ribajs_utils_src_type__WEBPACK_IMPORTED_MODULE_0__.isObject)(elements)) {
      throw new Error("Elements to register must be an object of elements");
    }

    for (const key in elements) {
      if (elements[key] && key !== "__esModule") {
        const element = elements[key];
        this.regist(element, key);
      }
    }

    return this.elements;
  }

}

/***/ }),

/***/ "../../../packages/core/src/services/module.service.ts":
/*!*************************************************************!*\
  !*** ../../../packages/core/src/services/module.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModulesService": function() { return /* binding */ ModulesService; }
/* harmony export */ });
/* harmony import */ var _binder_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binder.service */ "../../../packages/core/src/services/binder.service.ts");
/* harmony import */ var _component_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.service */ "../../../packages/core/src/services/component.service.ts");
/* harmony import */ var _formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatter.service */ "../../../packages/core/src/services/formatter.service.ts");
/* harmony import */ var _adapter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adapter.service */ "../../../packages/core/src/services/adapter.service.ts");




class ModulesService {
  /**
   *
   * @param binders;
   * @param components;
   * @param formatters;
   * @param adapters;
   */
  constructor(binders, components, formatters, adapters) {
    this.binder = new _binder_service__WEBPACK_IMPORTED_MODULE_0__.BindersService(binders);
    this.component = new _component_service__WEBPACK_IMPORTED_MODULE_1__.ComponentService(components);
    this.formatter = new _formatter_service__WEBPACK_IMPORTED_MODULE_2__.FormatterService(formatters);
    this.adapter = new _adapter_service__WEBPACK_IMPORTED_MODULE_3__.AdapterService(adapters);
  }

  regist(module) {
    if (!module) {
      console.error(module);
      throw new Error("The Riba module is falsy!");
    }

    if (module.binders) {
      this.binder.regists(module.binders);
    }

    if (module.components) {
      this.component.regists(module.components);
    }

    if (module.formatters) {
      this.formatter.regists(module.formatters);
    }

    if (module.adapters) {
      this.adapter.regists(module.adapters);
    }
  }

}

/***/ }),

/***/ "../../../packages/core/src/types/adapter.ts":
/*!***************************************************!*\
  !*** ../../../packages/core/src/types/adapter.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Adapter": function() { return /* binding */ Adapter; }
/* harmony export */ });
/**
 * The default `.` adapter that comes with riba.js. Allows subscribing to
 * properties on plain objects, implemented in ES5 natives using
 * `Object.defineProperty`.
 */

/**
 * TODO For what is this?
 */
class Adapter {}

/***/ }),

/***/ "../../../packages/core/src/types/adapters.ts":
/*!****************************************************!*\
  !*** ../../../packages/core/src/types/adapters.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/any-component.ts":
/*!*********************************************************!*\
  !*** ../../../packages/core/src/types/any-component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/any-constructor.ts":
/*!***********************************************************!*\
  !*** ../../../packages/core/src/types/any-constructor.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/any-service.ts":
/*!*******************************************************!*\
  !*** ../../../packages/core/src/types/any-service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/any-singleton.ts":
/*!*********************************************************!*\
  !*** ../../../packages/core/src/types/any-singleton.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/assign.ts":
/*!**************************************************!*\
  !*** ../../../packages/core/src/types/assign.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/bindable-element.ts":
/*!************************************************************!*\
  !*** ../../../packages/core/src/types/bindable-element.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/binder-attribute-changed-event.ts":
/*!**************************************************************************!*\
  !*** ../../../packages/core/src/types/binder-attribute-changed-event.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/binders.ts":
/*!***************************************************!*\
  !*** ../../../packages/core/src/types/binders.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/binding.ts":
/*!***************************************************!*\
  !*** ../../../packages/core/src/types/binding.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/class-of-binder.ts":
/*!***********************************************************!*\
  !*** ../../../packages/core/src/types/class-of-binder.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/class-of-component.ts":
/*!**************************************************************!*\
  !*** ../../../packages/core/src/types/class-of-component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/class-of.ts":
/*!****************************************************!*\
  !*** ../../../packages/core/src/types/class-of.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/component-lifecycle-event-data.ts":
/*!**************************************************************************!*\
  !*** ../../../packages/core/src/types/component-lifecycle-event-data.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/component-lifecycle-object.ts":
/*!**********************************************************************!*\
  !*** ../../../packages/core/src/types/component-lifecycle-object.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/component-lifecycle-state.ts":
/*!*********************************************************************!*\
  !*** ../../../packages/core/src/types/component-lifecycle-state.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/component-lifecycle-states.ts":
/*!**********************************************************************!*\
  !*** ../../../packages/core/src/types/component-lifecycle-states.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/components.ts":
/*!******************************************************!*\
  !*** ../../../packages/core/src/types/components.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/data-element.ts":
/*!********************************************************!*\
  !*** ../../../packages/core/src/types/data-element.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/elements.ts":
/*!****************************************************!*\
  !*** ../../../packages/core/src/types/elements.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/event-handler-function.ts":
/*!******************************************************************!*\
  !*** ../../../packages/core/src/types/event-handler-function.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/event-handler.ts":
/*!*********************************************************!*\
  !*** ../../../packages/core/src/types/event-handler.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/extensions.ts":
/*!******************************************************!*\
  !*** ../../../packages/core/src/types/extensions.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/formatter-observers.ts":
/*!***************************************************************!*\
  !*** ../../../packages/core/src/types/formatter-observers.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/formatter.ts":
/*!*****************************************************!*\
  !*** ../../../packages/core/src/types/formatter.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/formatters.ts":
/*!******************************************************!*\
  !*** ../../../packages/core/src/types/formatters.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/http-data-type.ts":
/*!**********************************************************!*\
  !*** ../../../packages/core/src/types/http-data-type.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/http-method.ts":
/*!*******************************************************!*\
  !*** ../../../packages/core/src/types/http-method.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/http-service-options.ts":
/*!****************************************************************!*\
  !*** ../../../packages/core/src/types/http-service-options.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/http-service-response.ts":
/*!*****************************************************************!*\
  !*** ../../../packages/core/src/types/http-service-response.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/index.ts":
/*!*************************************************!*\
  !*** ../../../packages/core/src/types/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Adapter": function() { return /* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.Adapter; },
/* harmony export */   "MediaReadyState": function() { return /* reexport safe */ _media_ready_state__WEBPACK_IMPORTED_MODULE_31__.MediaReadyState; }
/* harmony export */ });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "../../../packages/core/src/types/adapter.ts");
/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adapters */ "../../../packages/core/src/types/adapters.ts");
/* harmony import */ var _any_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./any-component */ "../../../packages/core/src/types/any-component.ts");
/* harmony import */ var _any_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./any-constructor */ "../../../packages/core/src/types/any-constructor.ts");
/* harmony import */ var _any_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./any-service */ "../../../packages/core/src/types/any-service.ts");
/* harmony import */ var _any_singleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./any-singleton */ "../../../packages/core/src/types/any-singleton.ts");
/* harmony import */ var _assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assign */ "../../../packages/core/src/types/assign.ts");
/* harmony import */ var _bindable_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bindable-element */ "../../../packages/core/src/types/bindable-element.ts");
/* harmony import */ var _binder_attribute_changed_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./binder-attribute-changed-event */ "../../../packages/core/src/types/binder-attribute-changed-event.ts");
/* harmony import */ var _binders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./binders */ "../../../packages/core/src/types/binders.ts");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./binding */ "../../../packages/core/src/types/binding.ts");
/* harmony import */ var _class_of_binder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./class-of-binder */ "../../../packages/core/src/types/class-of-binder.ts");
/* harmony import */ var _class_of_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./class-of-component */ "../../../packages/core/src/types/class-of-component.ts");
/* harmony import */ var _class_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./class-of */ "../../../packages/core/src/types/class-of.ts");
/* harmony import */ var _component_lifecycle_event_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component-lifecycle-event-data */ "../../../packages/core/src/types/component-lifecycle-event-data.ts");
/* harmony import */ var _component_lifecycle_object__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component-lifecycle-object */ "../../../packages/core/src/types/component-lifecycle-object.ts");
/* harmony import */ var _component_lifecycle_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component-lifecycle-state */ "../../../packages/core/src/types/component-lifecycle-state.ts");
/* harmony import */ var _component_lifecycle_states__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component-lifecycle-states */ "../../../packages/core/src/types/component-lifecycle-states.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components */ "../../../packages/core/src/types/components.ts");
/* harmony import */ var _data_element__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./data-element */ "../../../packages/core/src/types/data-element.ts");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./elements */ "../../../packages/core/src/types/elements.ts");
/* harmony import */ var _event_handler_function__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./event-handler-function */ "../../../packages/core/src/types/event-handler-function.ts");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./event-handler */ "../../../packages/core/src/types/event-handler.ts");
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./extensions */ "../../../packages/core/src/types/extensions.ts");
/* harmony import */ var _formatter_observers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./formatter-observers */ "../../../packages/core/src/types/formatter-observers.ts");
/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./formatter */ "../../../packages/core/src/types/formatter.ts");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./formatters */ "../../../packages/core/src/types/formatters.ts");
/* harmony import */ var _http_data_type__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./http-data-type */ "../../../packages/core/src/types/http-data-type.ts");
/* harmony import */ var _http_method__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./http-method */ "../../../packages/core/src/types/http-method.ts");
/* harmony import */ var _http_service_options__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./http-service-options */ "../../../packages/core/src/types/http-service-options.ts");
/* harmony import */ var _http_service_response__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./http-service-response */ "../../../packages/core/src/types/http-service-response.ts");
/* harmony import */ var _media_ready_state__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./media-ready-state */ "../../../packages/core/src/types/media-ready-state.ts");
/* harmony import */ var _module_element_type__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./module-element-type */ "../../../packages/core/src/types/module-element-type.ts");
/* harmony import */ var _module_options__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./module-options */ "../../../packages/core/src/types/module-options.ts");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./module */ "../../../packages/core/src/types/module.ts");
/* harmony import */ var _observed_attribute_to_check__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./observed-attribute-to-check */ "../../../packages/core/src/types/observed-attribute-to-check.ts");
/* harmony import */ var _observed_attributes_to_check__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./observed-attributes-to-check */ "../../../packages/core/src/types/observed-attributes-to-check.ts");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./observer */ "../../../packages/core/src/types/observer.ts");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./options */ "../../../packages/core/src/types/options.ts");
/* harmony import */ var _parsed_declarations__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./parsed-declarations */ "../../../packages/core/src/types/parsed-declarations.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services */ "../../../packages/core/src/types/services.ts");
/* harmony import */ var _template_function__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./template-function */ "../../../packages/core/src/types/template-function.ts");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./tokens */ "../../../packages/core/src/types/tokens.ts");
/* harmony import */ var _video_component_scope__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./video-component-scope */ "../../../packages/core/src/types/video-component-scope.ts");













































/***/ }),

/***/ "../../../packages/core/src/types/media-ready-state.ts":
/*!*************************************************************!*\
  !*** ../../../packages/core/src/types/media-ready-state.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaReadyState": function() { return /* binding */ MediaReadyState; }
/* harmony export */ });
/**
 * Represents the ready state of the audio/video element
 * @see https://www.w3schools.com/TAgs/av_prop_readystate.asp
 */
let MediaReadyState;

(function (MediaReadyState) {
  MediaReadyState[MediaReadyState["HAVE_NOTHING"] = 0] = "HAVE_NOTHING";
  MediaReadyState[MediaReadyState["HAVE_METADATA"] = 1] = "HAVE_METADATA";
  MediaReadyState[MediaReadyState["HAVE_CURRENT_DATA"] = 2] = "HAVE_CURRENT_DATA";
  MediaReadyState[MediaReadyState["HAVE_FUTURE_DATA"] = 3] = "HAVE_FUTURE_DATA";
  MediaReadyState[MediaReadyState["HAVE_ENOUGH_DATA"] = 4] = "HAVE_ENOUGH_DATA";
})(MediaReadyState || (MediaReadyState = {}));

/***/ }),

/***/ "../../../packages/core/src/types/module-element-type.ts":
/*!***************************************************************!*\
  !*** ../../../packages/core/src/types/module-element-type.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/module-options.ts":
/*!**********************************************************!*\
  !*** ../../../packages/core/src/types/module-options.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/module.ts":
/*!**************************************************!*\
  !*** ../../../packages/core/src/types/module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/observed-attribute-to-check.ts":
/*!***********************************************************************!*\
  !*** ../../../packages/core/src/types/observed-attribute-to-check.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/observed-attributes-to-check.ts":
/*!************************************************************************!*\
  !*** ../../../packages/core/src/types/observed-attributes-to-check.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/observer.ts":
/*!****************************************************!*\
  !*** ../../../packages/core/src/types/observer.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/options.ts":
/*!***************************************************!*\
  !*** ../../../packages/core/src/types/options.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/parsed-declarations.ts":
/*!***************************************************************!*\
  !*** ../../../packages/core/src/types/parsed-declarations.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/services.ts":
/*!****************************************************!*\
  !*** ../../../packages/core/src/types/services.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/template-function.ts":
/*!*************************************************************!*\
  !*** ../../../packages/core/src/types/template-function.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/tokens.ts":
/*!**************************************************!*\
  !*** ../../../packages/core/src/types/tokens.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/types/video-component-scope.ts":
/*!*****************************************************************!*\
  !*** ../../../packages/core/src/types/video-component-scope.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/core/src/vendors/index.ts":
/*!***************************************************!*\
  !*** ../../../packages/core/src/vendors/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.module */ "../../../packages/core/src/vendors/polyfills.module.ts");
/* harmony import */ var _polyfills_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills_module__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../../../packages/core/src/vendors/polyfills.module.ts":
/*!**************************************************************!*\
  !*** ../../../packages/core/src/vendors/polyfills.module.ts ***!
  \**************************************************************/
/***/ (function() {

// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill#Polyfill
(() => {
  if (typeof window.CustomEvent === "function") {
    return false;
  }

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    const evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();

/***/ }),

/***/ "../../../packages/core/src/view.ts":
/*!******************************************!*\
  !*** ../../../packages/core/src/view.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": function() { return /* binding */ View; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _parse_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse-node */ "../../../packages/core/src/parse-node.ts");
/* harmony import */ var _parse_declaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parse-declaration */ "../../../packages/core/src/parse-declaration.ts");
/* harmony import */ var _ribajs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ribajs/utils */ "../../../packages/utils/src/index.ts");
/* harmony import */ var _binders_attribute_binder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binders/attribute.binder */ "../../../packages/core/src/binders/attribute.binder.ts");





/**
 * Sets the attribute on the element. If no binder is matched it will fall
 * back to using this binder.
 */

/**
 * A collection of bindings built from a set of parent nodes.
 */

class View {
  /**
   * Helper function to create a new view inside of a binding
   * @param binding
   * @param models
   * @param anchorEl
   */
  static create(binder, models, anchorEl) {
    var _binder$marker;

    const template = binder.el.cloneNode(true);
    const view = new View(template, models, binder.view.options);
    view.bind();

    if (!(binder !== null && binder !== void 0 && (_binder$marker = binder.marker) !== null && _binder$marker !== void 0 && _binder$marker.parentNode)) {
      console.warn("[View]: No parent node for binding!");
    } else {
      binder.marker.parentNode.insertBefore(template, anchorEl);
    }

    return view;
  }

  // public componentView: View | null = null;

  /**
   * The DOM elements and the model objects for binding are passed into the
   * constructor along with any local options that should be used throughout the
   * context of the view and it's bindings.
   * @param els
   * @param models
   * @param options
   */
  constructor(els, models, options) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "bindings", []);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "webComponents", []);

    if (Array.isArray(els)) {
      this.els = els;
    } else {
      this.els = [els];
    }

    this.models = models;
    this.options = options;
    this.build();
  }
  /**
   * Regist all components
   * This can sometimes be useful so that the browser automatically recognizes whether a component is inserted into the dom.
   * However, the components are already registered when they are found by riba in the DOM.
   *
   * Please note, this method does not support the browser fallback for browsers that cannot use custom elements.
   */


  registComponents() {
    for (const nodeName in this.options.components) {
      if (this.options.components[nodeName]) {
        // Not already registered?
        if (!customElements.get(nodeName)) {
          const COMPONENT = this.options.components[nodeName];
          this.registComponent(COMPONENT, nodeName);
        }
      }
    }
  }
  /**
   * Binds all of the current bindings for this view.
   */


  bind() {
    this.bindings.forEach(binding => {
      binding._bind();
    });
  }
  /**
   * Unbinds all of the current bindings for this view.
   */


  unbind() {
    if (Array.isArray(this.bindings)) {
      this.bindings.forEach(binding => {
        binding._unbind();

        if (typeof binding.el && this.options.removeBinderAttributes) {// TODO reset attribute ?
          // binding.el.setAttribute(attribute.name);
        }
      });
    } // TODO fallback to unbind web components


    if (Array.isArray(this.webComponents)) {
      this.webComponents.forEach(webComponent => {
        if (typeof webComponent.unbind === "function") {
          webComponent.unbind();
        }
      });
    }
  }
  /**
   * Syncs up the view with the model by running the routines on all bindings.
   */


  sync() {
    this.bindings.forEach(binding => {
      if (binding.sync) {
        binding.sync();
      }
    });
  }
  /**
   * Publishes the input values from the view back to the model (reverse sync).
   */


  publish() {
    this.bindings.forEach(binder => {
      if (binder.publishes && binder.publish) {
        binder.publish();
      }
    });
  }
  /**
   * Updates the view's models along with any affected bindings.
   * @param models
   */


  update() {
    let models = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    Object.keys(models).forEach(key => {
      this.models[key] = models[key];
    });

    for (const binding of this.bindings) {
      if (binding._update) {
        binding._update(models);
      }
    }
  }
  /**
   * Parses the DOM tree and builds `Binding` instances for every matched
   * binding declaration.
   */


  build() {
    this.bindings = []; // this.bindings || [];

    if (!this.options.templateDelimiters) {
      throw new Error("templateDelimiters required");
    }

    const elements = this.els;

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

      if (element) {
        (0,_parse_node__WEBPACK_IMPORTED_MODULE_1__.parseNode)(this, element, this.options.templateDelimiters);
      }
    }

    this.bindings.sort(View.bindingComparator);
  }

  startsWithPrefix(name) {
    const bindingFullPrefixes = this.options.fullPrefix;

    if (!bindingFullPrefixes) {
      throw new Error("prefix is required");
    }

    for (const fullPrefix of bindingFullPrefixes) {
      if (name.startsWith(fullPrefix)) {
        return fullPrefix;
      }
    }

    return undefined;
  }
  /**
   *
   */


  bindBinders(attributes, node) {
    let attributeBinders = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.options.attributeBinders;
    let block = false;

    if (!this.options.binders) {
      return block;
    }

    const bindInfos = [];

    for (let i = 0, len = attributes.length; i < len; i++) {
      let nodeName = "";
      let Binder = null;
      const attribute = attributes[i]; // if attribute starts with the binding prefix. E.g. rv-

      const startingPrefix = this.startsWithPrefix(attribute.name);

      if (startingPrefix) {
        let identifier = "";
        nodeName = attribute.name.slice(startingPrefix.length); // if binder is not a attributeBinder binder should be set

        if (this.options.binders[nodeName]) {
          Binder = this.options.binders[nodeName];
        }

        if (Binder === null) {
          // seems to be a star binder
          // Check if any attributeBinder match's
          for (let k = 0; k < attributeBinders.length; k++) {
            identifier = attributeBinders[k];
            const regexp = new RegExp("^".concat(identifier.replace(/\*/g, ".+"), "$"));

            if (regexp.test(nodeName)) {
              Binder = this.options.binders[identifier];
              break;
            }
          }
        }

        if (Binder === null) {
          if (this.options.binders["*"]) {
            Binder = this.options.binders["*"];
            identifier = "*";
          } else {
            Binder = _binders_attribute_binder__WEBPACK_IMPORTED_MODULE_4__.AttributeBinder;
          }
        } // if block is set, do not bind its child's (this means the binder bound it by itself)
        // and build binding directly (do not push it to bindInfos array)


        if (Binder.block) {
          this.buildBinding(node, nodeName, attribute.value, Binder, identifier);

          if (node.removeAttribute && this.options.removeBinderAttributes) {
            node.removeAttribute(attribute.name);
          }

          block = true;
          return block;
        }

        bindInfos.push({
          attr: attribute,
          Binder,
          nodeName,
          identifier
        });
      }
    }

    for (let i = 0; i < bindInfos.length; i++) {
      const bindInfo = bindInfos[i];
      this.buildBinding(node, bindInfo.nodeName, bindInfo.attr.value, bindInfo.Binder, bindInfo.identifier);

      if (node.removeAttribute && this.options.removeBinderAttributes) {
        node.removeAttribute(bindInfo.attr.name);
      }
    }

    return block;
  }

  bindComponent(node) {
    let block = false;

    if (!this.options.components) {
      return block;
    }

    const nodeName = node.nodeName.toLowerCase();
    const COMPONENT = this.options.components[nodeName];

    if (COMPONENT) {
      // this.registComponentWithFallback(node, COMPONENT, nodeName);
      this.registComponent(COMPONENT, nodeName);
      block = true;
    } // Also block unknown custom elements except page components
    else if (this.options.blockUnknownCustomElements && (0,_ribajs_utils__WEBPACK_IMPORTED_MODULE_3__.isCustomElement)(node) && !nodeName.endsWith("-page")) {
      block = true;
    }

    return block;
  }

  traverse(node) {
    /** If true stop / block the parseNode recursion */
    let block = this.options.blockNodeNames.indexOf(node.nodeName) !== -1;
    const attributes = node.attributes; // bind attribute binders if available

    if (attributes && this.options.binders) {
      block = this.bindBinders(attributes, node);

      if (block) {
        return block;
      }
    } // bind components


    if (!block && !node._bound && this.options.components) {
      block = this.bindComponent(node);
    }

    return block;
  }

  buildBinding(node, type, declaration, Binder, identifier) {
    const parsedDeclaration = (0,_parse_declaration__WEBPACK_IMPORTED_MODULE_2__.parseDeclaration)(declaration);
    const keypath = parsedDeclaration.keypath;
    const pipes = parsedDeclaration.pipes;
    this.bindings.push(new Binder(this, node, type, Binder.key, keypath, pipes, identifier));
  }
  /**
   * Register a custom element using the native customElements feature.
   * @param COMPONENT
   * @param nodeName
   */


  registComponent(COMPONENT, nodeName) {
    if (!customElements) {
      console.error("customElements not supported by your browser!");
      throw new Error("customElements not supported by your browser!");
    }

    const resolveNodeName = nodeName || COMPONENT.tagName;

    if (!customElements.get(resolveNodeName)) {
      customElements.define(COMPONENT.tagName, COMPONENT);
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(View, "bindingComparator", (a, b) => {
  const aPriority = a.priority || 0;
  const bPriority = b.priority || 0;
  return bPriority - aPriority;
});

/***/ }),

/***/ "../../../packages/events/dist/esm/index.js":
/*!**************************************************!*\
  !*** ../../../packages/events/dist/esm/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDispatcher": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.EventDispatcher; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "../../../packages/events/dist/esm/types/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "../../../packages/events/dist/esm/services/index.js");



/***/ }),

/***/ "../../../packages/events/dist/esm/services/event-dispatcher.service.js":
/*!******************************************************************************!*\
  !*** ../../../packages/events/dist/esm/services/event-dispatcher.service.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDispatcher": function() { return /* binding */ EventDispatcher; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");

class EventDispatcher {
  static getNamespaces() {
    return Object.keys(this.instances);
  }

  static getInstance() {
    let namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "main";
    const result = EventDispatcher.instances[namespace];

    if (!result) {
      return new this(namespace);
    }

    return result;
  }

  static getAllInstances() {
    return EventDispatcher.instances;
  }

  static clearInstance() {
    let namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "main";
    const instance = EventDispatcher.instances[namespace];
    instance.events = {};
    instance.eventsOnce = {};
    return instance;
  }

  static deleteInstance() {
    let namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "main";
    this.clearInstance(namespace);
    delete this.instances[namespace];
  }

  static clearAllInstances() {
    const namespaces = this.getNamespaces();

    for (const namespace of namespaces) {
      this.clearInstance(namespace);
    }
  }

  static deleteAllInstances() {
    this.clearAllInstances();
    this.instances = {};
  }

  get namespace() {
    return this._namespace;
  }

  constructor(namespace) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "events", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "eventsOnce", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_namespace", "anonymous");

    if (namespace) {
      if (EventDispatcher.instances[namespace]) {
        return EventDispatcher.instances[namespace];
      }

      this._namespace = namespace;
      EventDispatcher.instances[namespace] = this;
      return EventDispatcher.instances[namespace];
    }
  }

  once(eventName, cb, thisContext) {
    this.eventsOnce[eventName] = this.eventsOnce[eventName] || [];

    if (typeof thisContext !== "undefined") {
      this.eventsOnce[eventName].push({
        cb: cb.bind(thisContext),
        orgCb: cb,
        thisContext
      });
    } else {
      this.eventsOnce[eventName].push(cb);
    }
  }

  on(eventName, cb, thisContext) {
    this.events[eventName] = this.events[eventName] || [];

    if (typeof thisContext !== "undefined") {
      this.events[eventName].push({
        cb: cb.bind(thisContext),
        orgCb: cb,
        thisContext
      });
    } else {
      this.events[eventName].push(cb);
    }
  }

  off(eventName, cb, thisContext) {
    if (eventName === undefined) {
      this.events = {};
      this.eventsOnce = {};
      return;
    }

    if (cb !== undefined) {
      if (thisContext !== undefined) {
        if (eventName in this.events) {
          for (const [i, event] of this.events[eventName].entries()) {
            const curEvent = event;

            if (curEvent.orgCb === cb && curEvent.thisContext === thisContext) {
              this.events[eventName].splice(i, 1);
            }
          }
        }

        if (eventName in this.eventsOnce) {
          for (const [i, event] of this.eventsOnce[eventName].entries()) {
            const curEvent = event;

            if (curEvent.orgCb === cb && curEvent.thisContext === thisContext) {
              this.eventsOnce[eventName].splice(i, 1);
            }
          }
        }
      } else {
        if (eventName in this.events) {
          for (const [i, event] of this.events[eventName].entries()) {
            const curEvent = event;

            if (curEvent === cb) {
              this.events[eventName].splice(i, 1);
            }
          }
        }

        if (eventName in this.eventsOnce) {
          for (const [i, event] of this.eventsOnce[eventName].entries()) {
            const curEvent = event;

            if (curEvent === cb) {
              this.eventsOnce[eventName].splice(i, 1);
            }
          }
        }
      }
    } else {
      this.events[eventName] = [];
      this.eventsOnce[eventName] = [];
    }
  }

  trigger(eventName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (eventName in this.events) {
      for (const event of this.events[eventName]) {
        if (event !== null && event !== void 0 && event.cb) {
          event.cb(...args);
        } else {
          event(...args);
        }
      }
    }

    if (eventName in this.eventsOnce) {
      for (const [i, event] of this.eventsOnce[eventName].entries()) {
        if (event !== null && event !== void 0 && event.cb) {
          event.cb(...args);
          this.eventsOnce[eventName].splice(i, 1);
        } else {
          event(...args);
          this.eventsOnce[eventName].splice(i, 1);
        }
      }
    }
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(EventDispatcher, "instances", {});

/***/ }),

/***/ "../../../packages/events/dist/esm/services/index.js":
/*!***********************************************************!*\
  !*** ../../../packages/events/dist/esm/services/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDispatcher": function() { return /* reexport safe */ _event_dispatcher_service__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher; }
/* harmony export */ });
/* harmony import */ var _event_dispatcher_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-dispatcher.service */ "../../../packages/events/dist/esm/services/event-dispatcher.service.js");


/***/ }),

/***/ "../../../packages/events/dist/esm/types/event-dispatcher.js":
/*!*******************************************************************!*\
  !*** ../../../packages/events/dist/esm/types/event-dispatcher.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/events/dist/esm/types/index.js":
/*!********************************************************!*\
  !*** ../../../packages/events/dist/esm/types/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-dispatcher */ "../../../packages/events/dist/esm/types/event-dispatcher.js");


/***/ }),

/***/ "../../../packages/ssr/src/binders/csr.binder.ts":
/*!*******************************************************!*\
  !*** ../../../packages/ssr/src/binders/csr.binder.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsrBinder": function() { return /* binding */ CsrBinder; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ribajs/core */ "../../../packages/core/src/index.ts");


/**
 * csr
 * Binder to pass a SSR binder to a CSR binder
 *
 * ```html
 * <div rv-csr-style="{'backgroundColor':'blue'}"></div>
 * ```
 */

class CsrBinder extends _ribajs_core__WEBPACK_IMPORTED_MODULE_1__.Binder {
  routine(el, value) {
    const binderName = this.args[0]; // TODO use prefix from config and remove single quotes in json string (if present)

    el.setAttribute("rv-".concat(binderName), "'".concat(JSON.stringify(value), "'"));
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CsrBinder, "key", "csr-*");

/***/ }),

/***/ "../../../packages/ssr/src/binders/index.ts":
/*!**************************************************!*\
  !*** ../../../packages/ssr/src/binders/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsrBinder": function() { return /* reexport safe */ _csr_binder__WEBPACK_IMPORTED_MODULE_0__.CsrBinder; }
/* harmony export */ });
/* harmony import */ var _csr_binder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csr.binder */ "../../../packages/ssr/src/binders/csr.binder.ts");


/***/ }),

/***/ "../../../packages/ssr/src/components/index.ts":
/*!*****************************************************!*\
  !*** ../../../packages/ssr/src/components/index.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/ssr/src/formatters/index.ts":
/*!*****************************************************!*\
  !*** ../../../packages/ssr/src/formatters/index.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/ssr/src/http-error.ts":
/*!***********************************************!*\
  !*** ../../../packages/ssr/src/http-error.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpError": function() { return /* binding */ HttpError; }
/* harmony export */ });
class HttpError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }

}

/***/ }),

/***/ "../../../packages/ssr/src/index.ts":
/*!******************************************!*\
  !*** ../../../packages/ssr/src/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsrBinder": function() { return /* reexport safe */ _binders__WEBPACK_IMPORTED_MODULE_1__.CsrBinder; },
/* harmony export */   "ModuleService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_3__.ModuleService; },
/* harmony export */   "OpenGraphService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_3__.OpenGraphService; },
/* harmony export */   "PageComponent": function() { return /* reexport safe */ _page_component__WEBPACK_IMPORTED_MODULE_5__.PageComponent; },
/* harmony export */   "SSRModule": function() { return /* reexport safe */ _ssr_module__WEBPACK_IMPORTED_MODULE_6__.SSRModule; },
/* harmony export */   "HttpError": function() { return /* reexport safe */ _http_error__WEBPACK_IMPORTED_MODULE_7__.HttpError; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "../../../packages/ssr/src/types/index.ts");
/* harmony import */ var _binders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binders */ "../../../packages/ssr/src/binders/index.ts");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatters */ "../../../packages/ssr/src/formatters/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "../../../packages/ssr/src/services/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "../../../packages/ssr/src/components/index.ts");
/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-component */ "../../../packages/ssr/src/page-component.ts");
/* harmony import */ var _ssr_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ssr.module */ "../../../packages/ssr/src/ssr.module.ts");
/* harmony import */ var _http_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http-error */ "../../../packages/ssr/src/http-error.ts");









/***/ }),

/***/ "../../../packages/ssr/src/page-component.ts":
/*!***************************************************!*\
  !*** ../../../packages/ssr/src/page-component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageComponent": function() { return /* binding */ PageComponent; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ribajs/core */ "../../../packages/core/src/index.ts");
/* harmony import */ var _ribajs_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ribajs/events */ "../../../packages/events/dist/esm/index.js");



class PageComponent extends _ribajs_core__WEBPACK_IMPORTED_MODULE_1__.Component {
  /**
   * Overwrite / add tags in the html head like the page title
   *
   * TODO add support for more head tags
   */
  constructor() {
    super();

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lifecycleEvents", _ribajs_events__WEBPACK_IMPORTED_MODULE_2__.EventDispatcher.getInstance("lifecycle"));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "head", {});

    this.ctx = window.ssr.ctx;
    this.env = window.ssr.env;
  }

  setHtmlHead() {
    if (this.head.title && document) {
      document.title = this.head.title;
    }
  }

  async beforeBind() {
    await super.beforeBind();
    this.setHtmlHead();
  }

  async afterBind() {
    this.setHtmlHead();
    await super.afterBind();
  }

}

/***/ }),

/***/ "../../../packages/ssr/src/polyfills/index.ts":
/*!****************************************************!*\
  !*** ../../../packages/ssr/src/polyfills/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/ssr/src/services/index.ts":
/*!***************************************************!*\
  !*** ../../../packages/ssr/src/services/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleService": function() { return /* reexport safe */ _module_service__WEBPACK_IMPORTED_MODULE_0__.ModuleService; },
/* harmony export */   "OpenGraphService": function() { return /* reexport safe */ _open_graph_service__WEBPACK_IMPORTED_MODULE_1__.OpenGraphService; }
/* harmony export */ });
/* harmony import */ var _module_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.service */ "../../../packages/ssr/src/services/module.service.ts");
/* harmony import */ var _open_graph_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./open-graph.service */ "../../../packages/ssr/src/services/open-graph.service.ts");



/***/ }),

/***/ "../../../packages/ssr/src/services/module.service.ts":
/*!************************************************************!*\
  !*** ../../../packages/ssr/src/services/module.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleService": function() { return /* binding */ ModuleService; }
/* harmony export */ });
class ModuleService {
  static get options() {
    return this._options;
  }

  constructor() {
    /**/
  }

  static getSingleton() {
    if (this.instance) {
      return this.instance;
    }

    throw new Error("Singleton of ModuleService not defined, please call setSingleton first!");
  }

  static setSingleton() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (this.instance) {
      throw new Error("Singleton of ModuleService already defined!");
    }

    this._options = options;
    this.instance = new this();
    return this.instance;
  }

}

/***/ }),

/***/ "../../../packages/ssr/src/services/open-graph.service.ts":
/*!****************************************************************!*\
  !*** ../../../packages/ssr/src/services/open-graph.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenGraphService": function() { return /* binding */ OpenGraphService; }
/* harmony export */ });
class OpenGraphService {
  static getHeadElement() {
    var _document;

    return ((_document = document) === null || _document === void 0 ? void 0 : _document.head) || document.getElementsByName("head")[0];
  }

  static getHtmlElement() {
    var _document2, _document2$body;

    return ((_document2 = document) === null || _document2 === void 0 ? void 0 : (_document2$body = _document2.body) === null || _document2$body === void 0 ? void 0 : _document2$body.parentNode) || document.getElementsByName("html")[0];
  }

  static createMetaTags(data) {
    let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "og";
    const metaElements = [];
    const properties = Object.keys(data);

    for (const property of properties) {
      const contents = Array.isArray(data[property]) ? data[property] : [data[property]];

      for (const content of contents) {
        if (typeof content === "object") {
          metaElements.push(...this.createMetaTags(content, "".concat(prefix, ":").concat(property)));
        } else {
          const meta = document.createElement("meta");

          if ((prefix === "og:image" || prefix === "og:audio") && property === "url") {
            meta.setAttribute("property", prefix);
          } else {
            meta.setAttribute("property", "".concat(prefix, ":").concat(property));
          }

          meta.setAttribute("content", content);
          metaElements.push(meta);
        }
      }
    }

    return metaElements;
  }

  static setMetaTags(data) {
    const metaElements = this.createMetaTags(data);
    const head = this.getHeadElement();

    for (const metaElement of metaElements) {
      head.appendChild(metaElement);
    }
  }
  /**
   * @example
   *  <head prefix='og: https://ogp.me/ns# fb: https://ogp.me/ns/fb# website: https://ogp.me/ns/website#'>
   **/


  static setNamespaces(namespaces) {
    const htmlEl = this.getHtmlElement();
    let prefixStr = "";

    for (const prefix of Object.keys(namespaces)) {
      const ns = namespaces[prefix];

      if (prefixStr) {
        prefixStr += " ";
      }

      prefixStr += "".concat(prefix, ": ").concat(ns);
    }

    htmlEl.setAttribute("prefix", prefixStr);
  }

  static setLocale(locale) {
    const htmlEl = this.getHtmlElement();
    htmlEl.setAttribute("lang", locale);
  }

  static set(data) {
    let namespaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      og: "https://ogp.me/ns#"
    };
    this.setNamespaces(namespaces);
    this.setMetaTags(data);

    if (typeof data.locale === "string") {
      this.setLocale(data.locale);
    }
  }

}

/***/ }),

/***/ "../../../packages/ssr/src/ssr.module.ts":
/*!***********************************************!*\
  !*** ../../../packages/ssr/src/ssr.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SSRModule": function() { return /* binding */ SSRModule; }
/* harmony export */ });
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/global */ "../../../packages/ssr/src/types/global.ts");
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ribajs/core */ "../../../packages/core/src/index.ts");
/* harmony import */ var _binders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binders */ "../../../packages/ssr/src/binders/index.ts");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatters */ "../../../packages/ssr/src/formatters/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "../../../packages/ssr/src/services/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "../../../packages/ssr/src/components/index.ts");






const SSRModule = {
  binders: _binders__WEBPACK_IMPORTED_MODULE_2__,
  services: _services__WEBPACK_IMPORTED_MODULE_4__,
  formatters: _formatters__WEBPACK_IMPORTED_MODULE_3__,
  components: _components__WEBPACK_IMPORTED_MODULE_5__,

  init() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _services__WEBPACK_IMPORTED_MODULE_4__.ModuleService.setSingleton(options);
    const lifecycle = _ribajs_core__WEBPACK_IMPORTED_MODULE_1__.LifecycleService.getInstance(); // After all components are bound wie trigger the ssr ready event,
    // as soon as this event is triggered the ssr rendering will be done and returns the rendered html

    lifecycle.events.on("ComponentLifecycle:allBound", () => {
      var _window$ssr$events;

      (_window$ssr$events = window.ssr.events) === null || _window$ssr$events === void 0 ? void 0 : _window$ssr$events.trigger("ready");
    });
    lifecycle.events.on("ComponentLifecycle:error", error => {
      var _window$ssr$events2;

      (_window$ssr$events2 = window.ssr.events) === null || _window$ssr$events2 === void 0 ? void 0 : _window$ssr$events2.trigger("error", error);
    });
    return this;
  }

};

/***/ }),

/***/ "../../../packages/ssr/src/types/error-obj.ts":
/*!****************************************************!*\
  !*** ../../../packages/ssr/src/types/error-obj.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/global.ts":
/*!*************************************************!*\
  !*** ../../../packages/ssr/src/types/global.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/ssr/src/types/html-head.ts":
/*!****************************************************!*\
  !*** ../../../packages/ssr/src/types/html-head.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/index.ts":
/*!************************************************!*\
  !*** ../../../packages/ssr/src/types/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_obj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-obj */ "../../../packages/ssr/src/types/error-obj.ts");
/* harmony import */ var _html_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-head */ "../../../packages/ssr/src/types/html-head.ts");
/* harmony import */ var _module_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-options */ "../../../packages/ssr/src/types/module-options.ts");
/* harmony import */ var _open_graph_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./open-graph-article */ "../../../packages/ssr/src/types/open-graph-article.ts");
/* harmony import */ var _open_graph_audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./open-graph-audio */ "../../../packages/ssr/src/types/open-graph-audio.ts");
/* harmony import */ var _open_graph_book__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./open-graph-book */ "../../../packages/ssr/src/types/open-graph-book.ts");
/* harmony import */ var _open_graph_determiner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./open-graph-determiner */ "../../../packages/ssr/src/types/open-graph-determiner.ts");
/* harmony import */ var _open_graph_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./open-graph-image */ "../../../packages/ssr/src/types/open-graph-image.ts");
/* harmony import */ var _open_graph_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./open-graph-locale */ "../../../packages/ssr/src/types/open-graph-locale.ts");
/* harmony import */ var _open_graph_music_album__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./open-graph-music-album */ "../../../packages/ssr/src/types/open-graph-music-album.ts");
/* harmony import */ var _open_graph_music_song__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./open-graph-music-song */ "../../../packages/ssr/src/types/open-graph-music-song.ts");
/* harmony import */ var _open_graph_music__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./open-graph-music */ "../../../packages/ssr/src/types/open-graph-music.ts");
/* harmony import */ var _open_graph_namespace__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./open-graph-namespace */ "../../../packages/ssr/src/types/open-graph-namespace.ts");
/* harmony import */ var _open_graph_namespaces__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./open-graph-namespaces */ "../../../packages/ssr/src/types/open-graph-namespaces.ts");
/* harmony import */ var _open_graph_profile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./open-graph-profile */ "../../../packages/ssr/src/types/open-graph-profile.ts");
/* harmony import */ var _open_graph_property__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./open-graph-property */ "../../../packages/ssr/src/types/open-graph-property.ts");
/* harmony import */ var _open_graph_tree__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./open-graph-tree */ "../../../packages/ssr/src/types/open-graph-tree.ts");
/* harmony import */ var _open_graph_type__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./open-graph-type */ "../../../packages/ssr/src/types/open-graph-type.ts");
/* harmony import */ var _open_graph_video_actor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./open-graph-video-actor */ "../../../packages/ssr/src/types/open-graph-video-actor.ts");
/* harmony import */ var _open_graph_video__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./open-graph-video */ "../../../packages/ssr/src/types/open-graph-video.ts");
/* harmony import */ var _open_graph__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./open-graph */ "../../../packages/ssr/src/types/open-graph.ts");
/* harmony import */ var _parsed_query__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./parsed-query */ "../../../packages/ssr/src/types/parsed-query.ts");
/* harmony import */ var _request_context__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./request-context */ "../../../packages/ssr/src/types/request-context.ts");
/* harmony import */ var _shared_context__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared-context */ "../../../packages/ssr/src/types/shared-context.ts");

























/***/ }),

/***/ "../../../packages/ssr/src/types/module-options.ts":
/*!*********************************************************!*\
  !*** ../../../packages/ssr/src/types/module-options.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-article.ts":
/*!*************************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-article.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-audio.ts":
/*!***********************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-audio.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-book.ts":
/*!**********************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-book.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-determiner.ts":
/*!****************************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-determiner.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-image.ts":
/*!***********************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-image.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-locale.ts":
/*!************************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-locale.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-music-album.ts":
/*!*****************************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-music-album.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-music-song.ts":
/*!****************************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-music-song.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-music.ts":
/*!***********************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-music.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-namespace.ts":
/*!***************************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-namespace.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-namespaces.ts":
/*!****************************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-namespaces.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-profile.ts":
/*!*************************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-profile.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-property.ts":
/*!**************************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-property.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-tree.ts":
/*!**********************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-tree.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-type.ts":
/*!**********************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-type.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-video-actor.ts":
/*!*****************************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-video-actor.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph-video.ts":
/*!***********************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph-video.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/open-graph.ts":
/*!*****************************************************!*\
  !*** ../../../packages/ssr/src/types/open-graph.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/parsed-query.ts":
/*!*******************************************************!*\
  !*** ../../../packages/ssr/src/types/parsed-query.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/request-context.ts":
/*!**********************************************************!*\
  !*** ../../../packages/ssr/src/types/request-context.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/ssr/src/types/shared-context.ts":
/*!*********************************************************!*\
  !*** ../../../packages/ssr/src/types/shared-context.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/utils/src/color.ts":
/*!********************************************!*\
  !*** ../../../packages/utils/src/color.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomColor": function() { return /* binding */ getRandomColor; },
/* harmony export */   "consoleColoured": function() { return /* binding */ consoleColoured; }
/* harmony export */ });
/**
 * Generates a random color
 * @see https://stackoverflow.com/a/1484514/1465919
 */
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};
const consoleColoured = function (options) {
  const printArgs = [];

  if (options.color) {
    if (options.namespace) {
      printArgs.push("%c[".concat(options.namespace, "] ").concat(options.mode.toUpperCase(), ": "));
    } else {
      printArgs.push("%c".concat(options.mode.toUpperCase(), ": "));
    }

    printArgs.push("color: ".concat(options.color));
  } else {
    if (options.namespace) {
      printArgs.push("[".concat(options.namespace, "] ").concat(options.mode.toUpperCase(), ": "));
    } else {
      printArgs.push("".concat(options.mode.toUpperCase(), ": "));
    }
  }

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  printArgs.push(...args);
  console[options.mode](...printArgs);
};

/***/ }),

/***/ "../../../packages/utils/src/control.ts":
/*!**********************************************!*\
  !*** ../../../packages/utils/src/control.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": function() { return /* binding */ noop; },
/* harmony export */   "times": function() { return /* binding */ times; },
/* harmony export */   "sleep": function() { return /* binding */ sleep; },
/* harmony export */   "waitForProp": function() { return /* binding */ waitForProp; },
/* harmony export */   "deferred": function() { return /* binding */ deferred; },
/* harmony export */   "debounce": function() { return /* binding */ debounce; },
/* harmony export */   "throttle": function() { return /* binding */ throttle; }
/* harmony export */ });
const noop = () => {
  /** do nothing */
};
const times = (n, cb) => {
  for (let i = 0; i < n; i++) {
    cb();
  }
};
const sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};
const waitForProp = async function (propName) {
  let obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  let delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;

  while (!obj[propName]) {
    await sleep(delay);
  }

  return obj[propName];
};
/**
 * Return a new "Deferred" object
 * https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred
 *
 * @return
 */

const deferred = () => {
  const obj = {};
  const prom = new Promise((resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  });
  obj.promise = prom;
  return obj;
};
/**
 * The debounce function receives our function as a parameter
 * It is recommended to use this method for scroll events, but the event should still be passive.
 * In the debouncing technique, no matter how many times the user fires the event,
 * the attached function will be executed only after the specified time once the user stops firing the event.
 * This method uses internally the requestAnimationFrame method
 * @see https://css-tricks.com/styling-based-on-scroll-position/
 * @see https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript
 */

const debounce = fn => {
  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame = null;
  let resolve, reject;
  let promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  }); // The debounce function returns a new function that can receive a variable number of arguments

  return function () {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame);
    } // Queue our function call for the next frame


    frame = window.requestAnimationFrame(() => {
      // Call our function and pass any params we received
      try {
        resolve(fn(...params));
      } catch (error) {
        reject(error);
      } // reset frame and initialize new promise for next call


      frame = null;
      promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
    });
    return promise;
  };
};
/**
 * The throttle function receives our function as a parameter
 * It is recommended to use this method for resize events
 * Throttling is a technique in which, no matter how many times the user fires the event,
 * the attached function will be executed only once in a given time interval.
 * @see https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript
 * @see https://gist.github.com/peduarte/969217eac456538789e8fac8f45143b4
 */

const throttle = function (fn) {
  let wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  let timerId = null;
  let resolve;
  let reject;
  let promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return function () {
    if (timerId === null) {
      timerId = window.setTimeout(() => {
        // reset timerId and initialize new promise for next call
        timerId = null;
        promise = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
      }, wait);

      try {
        resolve(fn(...arguments));
      } catch (error) {
        reject(error);
      }
    }

    return promise;
  };
};

/***/ }),

/***/ "../../../packages/utils/src/dom.ts":
/*!******************************************!*\
  !*** ../../../packages/utils/src/dom.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAX_UID": function() { return /* binding */ MAX_UID; },
/* harmony export */   "parseAttribute": function() { return /* binding */ parseAttribute; },
/* harmony export */   "getDataset": function() { return /* binding */ getDataset; },
/* harmony export */   "hasChildNodesTrim": function() { return /* binding */ hasChildNodesTrim; },
/* harmony export */   "getInputValue": function() { return /* binding */ getInputValue; },
/* harmony export */   "elementIsHidden": function() { return /* binding */ elementIsHidden; },
/* harmony export */   "elementIsVisible": function() { return /* binding */ elementIsVisible; },
/* harmony export */   "scrolling": function() { return /* binding */ scrolling; },
/* harmony export */   "scrollTo": function() { return /* binding */ scrollTo; },
/* harmony export */   "scrollToPosition": function() { return /* binding */ scrollToPosition; },
/* harmony export */   "getElementFromEvent": function() { return /* binding */ getElementFromEvent; },
/* harmony export */   "getViewportDimensions": function() { return /* binding */ getViewportDimensions; },
/* harmony export */   "isInViewport": function() { return /* binding */ isInViewport; },
/* harmony export */   "selectAll": function() { return /* binding */ selectAll; },
/* harmony export */   "ready": function() { return /* binding */ ready; },
/* harmony export */   "loadScript": function() { return /* binding */ loadScript; },
/* harmony export */   "getUID": function() { return /* binding */ getUID; },
/* harmony export */   "isCustomElement": function() { return /* binding */ isCustomElement; },
/* harmony export */   "waitForCustomElement": function() { return /* binding */ waitForCustomElement; },
/* harmony export */   "htmlToElement": function() { return /* binding */ htmlToElement; },
/* harmony export */   "htmlToElements": function() { return /* binding */ htmlToElements; },
/* harmony export */   "toArray": function() { return /* binding */ toArray; },
/* harmony export */   "isVisible": function() { return /* binding */ isVisible; },
/* harmony export */   "getElementIndex": function() { return /* binding */ getElementIndex; }
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../../packages/utils/src/type.ts");

const MAX_UID = 1000;
const parseAttribute = attr => {
  let value = attr;

  if (attr === "true") {
    value = true;
  } else if (attr === "false") {
    value = false;
  } else if (attr === "null") {
    value = null;
  } else if (attr === "undefined") {
    value = undefined;
  } else if (attr === "") {
    value = undefined;
  } else if (!isNaN(Number(attr))) {
    value = Number(attr); // If number is too large store the value as string

    if (value >= Number.MAX_SAFE_INTEGER) {
      value = attr;
    }
  } else {
    const jsonString = (0,_type__WEBPACK_IMPORTED_MODULE_0__.parseJsonString)(value);
    value = jsonString ? jsonString : value;
  }

  return value;
};
const getDataset = element => {
  const dataset = (0,_type__WEBPACK_IMPORTED_MODULE_0__.clone)(false, element.dataset);

  for (const attr in dataset) {
    if (dataset[attr]) {
      dataset[attr] = parseAttribute(dataset[attr]);
    }
  }

  return dataset;
};
/**
 * Calls el.hasChildNodes but ignores empty strings, the default hasChildNodes would return true on `<div> </div>`.
 * Very useful to check within a component if the component has set child elements to load or overwrite the component template
 * @param el
 */

const hasChildNodesTrim = el => {
  if (!el.hasChildNodes()) {
    return false;
  }

  const childNodes = el.childNodes;

  if (childNodes.length === 1 && childNodes[0].nodeType === 3) {
    var _childNodes$0$nodeVal;

    if (!childNodes[0].nodeValue || ((_childNodes$0$nodeVal = childNodes[0].nodeValue) === null || _childNodes$0$nodeVal === void 0 ? void 0 : _childNodes$0$nodeVal.trim()) === "") {
      return false;
    }
  }

  return true;
};
/**
 *
 */

const getInputValue = el => {
  const results = [];

  if (el.type === "checkbox") {
    return el.checked;
  } else if (el.type === "select-multiple") {
    const options = el.options;

    for (const key in options) {
      if (options[key]) {
        const option = options[key];

        if (option.selected) {
          results.push(option.value);
        }
      }
    }

    return results;
  } else if (el.hasAttribute && el.hasAttribute("contenteditable")) {
    return el.innerHTML; // TODO write test for contenteditable
  } else {
    return el.value;
  }
};
const elementIsHidden = el => {
  return el.hasAttribute("hidden") || el.style.display === "none" || el.style.visibility === "hidden" || window.getComputedStyle(el).display === "none" || window.getComputedStyle(el).visibility === "hidden";
};
const elementIsVisible = el => {
  return !elementIsHidden(el);
};
/**
 * Observe scroll event
 * @param scrollElement The element or window you want to observe
 * @returns Returns a promise which resolves when an element stops scrolling
 */

const scrolling = async scrollElement => {
  return new Promise(resolve => {
    let scrollTimeout;

    const checkScroll = () => {
      if (scrollTimeout !== undefined) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        resolve();
      }, 100);
    };

    scrollElement.removeEventListener("scroll", checkScroll);
    scrollElement.addEventListener("scroll", checkScroll);
    checkScroll();
  });
};
/**
 * Scrolls to an element
 *
 * @see https://stackoverflow.com/a/31987330
 * @see https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
 * @param element
 * @param to
 * @param duration
 */

const scrollTo = async function (to) {
  let offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let scrollElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
  let angle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "vertical";
  let behavior = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "smooth";

  if (!scrollElement) {
    scrollElement = window;
  }

  const scrollPromise = scrolling(scrollElement);
  let top = 0;
  let left = 0; // If element is window

  if (scrollElement.document) {
    if (angle === "vertical") {
      const scrollY = scrollElement.scrollY || scrollElement.pageYOffset;
      top = Math.round(to.getBoundingClientRect().top + scrollY - offset);
    } else {
      const scrollX = scrollElement.scrollX || scrollElement.pageXOffset;
      left = Math.round(to.getBoundingClientRect().left + scrollX - offset);
    }
  } else {
    if (angle === "vertical") {
      const marginTop = (0,_type__WEBPACK_IMPORTED_MODULE_0__.justDigits)(window.getComputedStyle(scrollElement).marginTop);
      top = Math.round(to.offsetTop - offset - marginTop);
    } else {
      const marginLeft = (0,_type__WEBPACK_IMPORTED_MODULE_0__.justDigits)(window.getComputedStyle(scrollElement).marginLeft);
      left = Math.round(to.offsetLeft - offset - marginLeft);
    }
  }

  scrollElement.scroll({
    behavior,
    left,
    top
  });
  return scrollPromise;
};
const scrollToPosition = async function (scrollElement, position) {
  let angle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "vertical";
  let behavior = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "smooth";
  let top;
  let left;

  if (!scrollElement) {
    return;
  }

  const scrollPromise = scrolling(scrollElement);

  if (angle === "vertical" || angle === "both") {
    switch (position) {
      case "start":
        top = 0;
        break;

      case "end":
        // if element is window
        if (scrollElement.document) {
          const win = scrollElement;
          const doc = win.document;
          top = win.scrollMaxY || Math.max(doc.body.scrollHeight, doc.body.offsetHeight, doc.documentElement.clientHeight, doc.documentElement.scrollHeight, doc.documentElement.offsetHeight);
        } else {
          top = scrollElement.scrollHeight;
        }

        break;

      default:
        top = position;
        break;
    }
  }

  if (angle === "horizontal" || angle === "both") {
    switch (position) {
      case "start":
        left = 0;
        break;

      case "end":
        // if element is window
        if (scrollElement.document) {
          const win = scrollElement;
          const doc = win.document;
          left = win.scrollMaxX || Math.max(doc.body.scrollWidth, doc.body.offsetWidth, doc.documentElement.clientWidth, doc.documentElement.scrollWidth, doc.documentElement.offsetWidth);
        } else {
          left = scrollElement.scrollWidth;
        }

        break;

      default:
        left = position;
        break;
    }
  }

  scrollElement.scroll({
    behavior,
    top,
    left
  });
  return scrollPromise;
};
window.scrollToPosition = scrollToPosition;
const getElementFromEvent = event => {
  const el = event.target || event.currentTarget || event.relatedTarget || // JQuery event
  event.delegateTarget || event.fromElement;
  return el;
};
const getViewportDimensions = () => {
  const w = Math.max(document.documentElement ? document.documentElement.clientWidth : 0, window.innerWidth || 0);
  const h = Math.max(document.documentElement ? document.documentElement.clientHeight : 0, window.innerHeight || 0);
  return {
    h,
    w
  };
};
/**
 * Determine if an element is in the viewport
 * @param elem The element
 * @param offsetTop (Default  Distance to the top of the screen, if this is 0, the element must be scrolled until the top of the screen.
 * @param offsetBottom Distance to the bottom of the screen, if this is 0, the scroll position must be over the element
 * @return Returns true if element is in the viewport
 */

const isInViewport = function (elem, offsetTop) {
  let offsetBottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (!elem) {
    return false;
  }

  const distance = elem.getBoundingClientRect();

  if (!offsetTop) {
    const vp = getViewportDimensions();
    offsetTop = vp.h - distance.height;
  }

  return distance.top + distance.height >= offsetBottom && distance.bottom - distance.height <= offsetTop;
};
/**
 * Select all of an contenteditable or input element
 * @param element The element you want to select
 */

const selectAll = element => {
  // need setTimeout for safari
  setTimeout(() => {
    if (typeof element.selectionStart !== "undefined") {
      element.selectionStart = 0;
      element.selectionEnd = 999;
    }

    if (typeof element.select === "function") {
      element.select();
    }

    if (typeof element.setSelectionRange === "function") {
      element.setSelectionRange(0, 999);
    }

    if (window.getSelection) {
      const range = document.createRange();
      range.selectNodeContents(element);
      const selection = window.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        selection.selectAllChildren(element);
      }
    }

    if (document.body.createTextRange) {
      const range = document.body.createTextRange(); // Creates TextRange object

      range.moveToElementText(element); // sets Range

      range.select(); // make selection.
    }

    if (document.execCommand) {
      document.execCommand("selectAll", false, undefined);
    }
  }, 0);
};
/**
 * Cross-browser Document Ready check
 * @see https://www.competa.com/blog/cross-browser-document-ready-with-vanilla-javascript/
 * @param callback
 */

const ready = callback => {
  if (!callback || typeof callback !== "function") {
    return new Error("The callback is required!");
  }

  const checkReady = () => {
    if (document.readyState !== "loading") {
      callback();

      if (document.attachEvent) {
        document.detachEvent("onreadystatechange", checkReady);
      }

      document.removeEventListener("DOMContentLoaded", checkReady);
    }
  };

  if (document.attachEvent) {
    document.attachEvent("onreadystatechange", checkReady);
  }

  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", checkReady);
  }

  checkReady();
};
const loadScript = async function (src, id) {
  let async = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  let defer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  const script = await new Promise((resolve, reject) => {
    let script = document.getElementById(id);

    if (script) {
      console.warn("script already loaded, do nothing.");

      if (script.hasAttribute("loaded")) {
        return resolve(script);
      }
    } else {
      script = document.createElement("script");
      script.type = "text/javascript";
      script.id = id;
      script.src = src;

      if (async) {
        script.async = true;
      }

      if (defer) {
        script.defer = true;
      }

      const head = document.head || document.getElementsByTagName("head")[0];
      head.appendChild(script);
    } // IE


    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          var _script;

          script.onreadystatechange = null;
          (_script = script) === null || _script === void 0 ? void 0 : _script.setAttribute("loaded", "true");
          resolve(script);
        }
      };
    } // Other browsers


    script.addEventListener("load", () => {
      var _script2;

      (_script2 = script) === null || _script2 === void 0 ? void 0 : _script2.setAttribute("loaded", "true");
      resolve(script);
    });
    script.addEventListener("error", function () {
      var _script3;

      const error = new Error("Error on load script " + ((_script3 = script) === null || _script3 === void 0 ? void 0 : _script3.src));
      console.error(error);
      console.error(...arguments);
      reject(error);
    });
  });
  return script;
};
const getUID = prefix => {
  do {
    prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
  } while (document.getElementById(prefix));

  return prefix;
};
/**
 * Detects if dom element is custom element or native / default html element
 * @see https://stackoverflow.com/a/47737765/1465919
 * @param element The element you want to test
 */

const isCustomElement = function (element) {
  let isRegistered = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let isUpgraded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // A custom element's name is required to contain a -, whereas an HTML-defined element will not. So:
  const isCustomElement = element.localName.indexOf("-") !== -1;

  if (isCustomElement && isRegistered && customElements) {
    const customConstructor = customElements.get(element.localName);

    if (!customConstructor) {
      return false;
    } // If the element is not yet upgraded the constructor is still equal to HTMLElement


    if (isUpgraded) {
      return customConstructor === element.constructor;
    } // If we don't need to check for upgraded status


    return true;
  }

  return isCustomElement;
};
/**
 * Waits for CustomElement to be upgraded, returns the element.
 * @param element The custom Element waiting for an upgrade.
 * @returns the element after the upgrade
 */

const waitForCustomElement = async element => {
  await customElements.whenDefined(element.localName);
  return element;
};
/**
 * Creating a new DOM element from an HTML string
 * @param html representing a single element
 * @example
 * ```js
 *   const td = htmlToElement("<td>foo</td>");
 *   const div = htmlToElement("<div><span>nested</span> <span>stuff</span></div>");
 * ```
 */

const htmlToElement = html => {
  const template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result

  template.innerHTML = html;
  return template.content.firstChild;
};
/**
 * Creating a new DOM elements from an HTML string
 * @param html representing any number of sibling elements
 * @example
 * ```js
 *   var rows = htmlToElements('<tr><td>foo</td></tr><tr><td>bar</td></tr>');
 * ```
 */

const htmlToElements = html => {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.childNodes;
};
/**
 * Converts a NodeList or HTMLCollection to an Array
 * @param nodeList
 * @returns
 */

const toArray = nodeList => {
  if (!nodeList) {
    return [];
  }

  return [].slice.call(nodeList);
};
/**
 * Check if any html element is visible in the dom
 * @param element
 * @returns
 */

const isVisible = element => {
  if (!element) {
    return false;
  }

  if (element.style && element.parentNode && element.parentNode.style) {
    const elementStyle = getComputedStyle(element);
    const parentNodeStyle = getComputedStyle(element.parentNode);
    return elementStyle.display !== "none" && parentNodeStyle.display !== "none" && elementStyle.visibility !== "hidden";
  }

  return false;
};
/**
 * Similar to JQuery's `$(el).index();`
 * @param el
 */

const getElementIndex = el => {
  if (!el) {
    return -1;
  }

  let i = 0;

  do {
    i++;
    el = el.previousElementSibling;
  } while (el);

  return i;
};

/***/ }),

/***/ "../../../packages/utils/src/immediate.ts":
/*!************************************************!*\
  !*** ../../../packages/utils/src/immediate.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setImmediate": function() { return /* binding */ setImmediate; },
/* harmony export */   "clearImmediate": function() { return /* binding */ clearImmediate; }
/* harmony export */ });
/**
 * Simplified version of https://github.com/YuzuJS/setImmediate
 * TODO Port tests
 */
let nextHandle = 1; // Spec says greater than zero

const tasksByHandle = {};
let currentlyRunningATask = false;
const messagePrefix = "setImmediate$" + Math.random() + "$";

const onGlobalMessage = function (event) {
  if (event.source === window && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
    runIfPresent(+event.data.slice(messagePrefix.length));
  }
};

window.addEventListener("message", onGlobalMessage, false);

function registerImmediate(handle) {
  window.postMessage(messagePrefix + handle, "*");
}

function _setImmediate(callback) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  console.debug("Use setImmediate polyfill"); // Callback can either be a function or a string

  if (typeof callback !== "function") {
    callback = new Function("" + callback);
  } // Store and register the task


  const task = {
    callback: callback,
    args
  };
  tasksByHandle[nextHandle] = task;
  registerImmediate(nextHandle);
  return nextHandle++;
}

function _clearImmediate(handle) {
  delete tasksByHandle[handle];
}

function run(task) {
  const callback = task.callback;
  const args = task.args;
  callback(...args);
}

function runIfPresent(handle) {
  // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
  // So if we're currently running a task, we'll need to delay this invocation.
  if (currentlyRunningATask) {
    // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
    // "too much recursion" error.
    setTimeout(runIfPresent, 0, handle);
  } else {
    const task = tasksByHandle[handle];

    if (task) {
      currentlyRunningATask = true;

      try {
        run(task);
      } finally {
        _clearImmediate(handle);

        currentlyRunningATask = false;
      }
    }
  }
}

const setImmediate = window.setImmediate || _setImmediate;
const clearImmediate = window.clearImmediate || _clearImmediate;

/***/ }),

/***/ "../../../packages/utils/src/index.ts":
/*!********************************************!*\
  !*** ../../../packages/utils/src/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "consoleColoured": function() { return /* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.consoleColoured; },
/* harmony export */   "getRandomColor": function() { return /* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.getRandomColor; },
/* harmony export */   "debounce": function() { return /* reexport safe */ _control__WEBPACK_IMPORTED_MODULE_2__.debounce; },
/* harmony export */   "deferred": function() { return /* reexport safe */ _control__WEBPACK_IMPORTED_MODULE_2__.deferred; },
/* harmony export */   "noop": function() { return /* reexport safe */ _control__WEBPACK_IMPORTED_MODULE_2__.noop; },
/* harmony export */   "sleep": function() { return /* reexport safe */ _control__WEBPACK_IMPORTED_MODULE_2__.sleep; },
/* harmony export */   "throttle": function() { return /* reexport safe */ _control__WEBPACK_IMPORTED_MODULE_2__.throttle; },
/* harmony export */   "times": function() { return /* reexport safe */ _control__WEBPACK_IMPORTED_MODULE_2__.times; },
/* harmony export */   "waitForProp": function() { return /* reexport safe */ _control__WEBPACK_IMPORTED_MODULE_2__.waitForProp; },
/* harmony export */   "MAX_UID": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.MAX_UID; },
/* harmony export */   "elementIsHidden": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.elementIsHidden; },
/* harmony export */   "elementIsVisible": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.elementIsVisible; },
/* harmony export */   "getDataset": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.getDataset; },
/* harmony export */   "getElementFromEvent": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.getElementFromEvent; },
/* harmony export */   "getElementIndex": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.getElementIndex; },
/* harmony export */   "getInputValue": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.getInputValue; },
/* harmony export */   "getUID": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.getUID; },
/* harmony export */   "getViewportDimensions": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.getViewportDimensions; },
/* harmony export */   "hasChildNodesTrim": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.hasChildNodesTrim; },
/* harmony export */   "htmlToElement": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.htmlToElement; },
/* harmony export */   "htmlToElements": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.htmlToElements; },
/* harmony export */   "isCustomElement": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.isCustomElement; },
/* harmony export */   "isInViewport": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.isInViewport; },
/* harmony export */   "isVisible": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.isVisible; },
/* harmony export */   "loadScript": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.loadScript; },
/* harmony export */   "parseAttribute": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.parseAttribute; },
/* harmony export */   "ready": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.ready; },
/* harmony export */   "scrollTo": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.scrollTo; },
/* harmony export */   "scrollToPosition": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.scrollToPosition; },
/* harmony export */   "scrolling": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.scrolling; },
/* harmony export */   "selectAll": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.selectAll; },
/* harmony export */   "toArray": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.toArray; },
/* harmony export */   "waitForCustomElement": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_3__.waitForCustomElement; },
/* harmony export */   "clearImmediate": function() { return /* reexport safe */ _immediate__WEBPACK_IMPORTED_MODULE_4__.clearImmediate; },
/* harmony export */   "setImmediate": function() { return /* reexport safe */ _immediate__WEBPACK_IMPORTED_MODULE_4__.setImmediate; },
/* harmony export */   "copyTextToClipboard": function() { return /* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_5__.copyTextToClipboard; },
/* harmony export */   "getOS": function() { return /* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_5__.getOS; },
/* harmony export */   "getOSType": function() { return /* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_5__.getOSType; },
/* harmony export */   "isDesktop": function() { return /* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_5__.isDesktop; },
/* harmony export */   "isGameConsole": function() { return /* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_5__.isGameConsole; },
/* harmony export */   "isMobile": function() { return /* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_5__.isMobile; },
/* harmony export */   "camelCase": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.camelCase; },
/* harmony export */   "capitalize": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.capitalize; },
/* harmony export */   "classOf": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.classOf; },
/* harmony export */   "clearObjFromRiba": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.clearObjFromRiba; },
/* harmony export */   "clone": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.clone; },
/* harmony export */   "couldBeJson": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.couldBeJson; },
/* harmony export */   "escapeHtml": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.escapeHtml; },
/* harmony export */   "extend": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.extend; },
/* harmony export */   "getNumber": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.getNumber; },
/* harmony export */   "getString": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.getString; },
/* harmony export */   "handleize": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.handleize; },
/* harmony export */   "hashCode": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.hashCode; },
/* harmony export */   "isBoolean": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.isBoolean; },
/* harmony export */   "isDefined": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.isDefined; },
/* harmony export */   "isFunction": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.isFunction; },
/* harmony export */   "isJson": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.isJson; },
/* harmony export */   "isNumber": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.isNumber; },
/* harmony export */   "isObject": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.isObject; },
/* harmony export */   "isString": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.isString; },
/* harmony export */   "isUndefined": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.isUndefined; },
/* harmony export */   "justDigits": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.justDigits; },
/* harmony export */   "kebabCase": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.kebabCase; },
/* harmony export */   "parseJsonString": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.parseJsonString; },
/* harmony export */   "parseType": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.parseType; },
/* harmony export */   "replaceUmlautChars": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.replaceUmlautChars; },
/* harmony export */   "stringHasNumber": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.stringHasNumber; },
/* harmony export */   "stringHasOnlyNumbers": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.stringHasOnlyNumbers; },
/* harmony export */   "stringIsPhoneNumber": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.stringIsPhoneNumber; },
/* harmony export */   "stripHtml": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.stripHtml; },
/* harmony export */   "toType": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.toType; },
/* harmony export */   "withoutMultiWhitespace": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.withoutMultiWhitespace; },
/* harmony export */   "withoutSpecialChars": function() { return /* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_6__.withoutSpecialChars; },
/* harmony export */   "cleanLink": function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_7__.cleanLink; },
/* harmony export */   "getHash": function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_7__.getHash; },
/* harmony export */   "getLocation": function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_7__.getLocation; },
/* harmony export */   "getPort": function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_7__.getPort; },
/* harmony export */   "getUrl": function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_7__.getUrl; },
/* harmony export */   "getUrlParameter": function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_7__.getUrlParameter; },
/* harmony export */   "isAbsoluteUrl": function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_7__.isAbsoluteUrl; },
/* harmony export */   "isExternalUrl": function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_7__.isExternalUrl; },
/* harmony export */   "isInternalUrl": function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_7__.isInternalUrl; },
/* harmony export */   "normalizeUrl": function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_7__.normalizeUrl; },
/* harmony export */   "onParentRoute": function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_7__.onParentRoute; },
/* harmony export */   "onRoute": function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_7__.onRoute; },
/* harmony export */   "removeHash": function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_7__.removeHash; },
/* harmony export */   "updateHash": function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_7__.updateHash; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "../../../packages/utils/src/types/index.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "../../../packages/utils/src/color.ts");
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control */ "../../../packages/utils/src/control.ts");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "../../../packages/utils/src/dom.ts");
/* harmony import */ var _immediate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./immediate */ "../../../packages/utils/src/immediate.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools */ "../../../packages/utils/src/tools.ts");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type */ "../../../packages/utils/src/type.ts");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./url */ "../../../packages/utils/src/url.ts");









/***/ }),

/***/ "../../../packages/utils/src/tools.ts":
/*!********************************************!*\
  !*** ../../../packages/utils/src/tools.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyTextToClipboard": function() { return /* binding */ copyTextToClipboard; },
/* harmony export */   "getOS": function() { return /* binding */ getOS; },
/* harmony export */   "getOSType": function() { return /* binding */ getOSType; },
/* harmony export */   "isMobile": function() { return /* binding */ isMobile; },
/* harmony export */   "isDesktop": function() { return /* binding */ isDesktop; },
/* harmony export */   "isGameConsole": function() { return /* binding */ isGameConsole; }
/* harmony export */ });
const fallbackCopyTextToClipboard = text => {
  const textArea = document.createElement("textarea");
  textArea.value = text; // Avoid scrolling to bottom

  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    const msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was ".concat(msg, ": ").concat(text));
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
};
/**
 * Copy text to clipboard
 * @see https://stackoverflow.com/a/30810322
 */


const copyTextToClipboard = async text => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    console.log("Copying to clipboard was successful: " + text);
  } catch (error) {
    console.error("Could not copy text: ", error);
  }
};
/**
 * Get the Operating system the browser is running on
 * @see https://stackoverflow.com/questions/19877924/what-is-the-list-of-possible-values-for-navigator-platform-as-of-today
 * @see https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
 * @see https://github.com/podlove/podlove-subscribe-button/blob/master/src/coffee/user_agent.coffee
 */

const getOS = () => {
  const ua = navigator.userAgent;
  const platform = window.navigator.platform;
  const uAs = {
    windows7: /Windows NT 6.1/,
    windows8: /Windows NT 6.2/,
    windows81: /Windows NT 6.3/,
    windows10: /Windows NT 10.0/,
    windows: /windows/i,
    windowsPhone: /trident/i,
    android: /android/i,
    ios: /(ipad|iphone|ipod)/i,
    linux: /(linux)/i,
    unix: /(openbsd|freebsd|netbsd)/i,
    osxCatalina: /macintosh.+10(_|\.)15/i,
    osxBigSur: /macintosh.+((10(_|\.)16)|(11(_|\.)))/i,
    osx: /macintosh/i,
    mac: /mac/i
  };
  const platforms = {
    linux: /Linux/i,
    unix: /(FreeBSD|OpenBSD|X11|SunOS)/i,
    webOS: /webOS/i,
    playstation3: /playstation 3/i,
    playstation4: /playstation 4/i,
    PlaystationPortable: /psp/i,
    newNintendo3Ds: /new nintendo 3ds/i,
    nintendoDsi: /nintendo dsi/i,
    nintendo3Ds: /nintendo 3ds/i,
    nintendoWii: /nintendo wii/i,
    nintendoWiiU: /nintendo wiiu/i,
    palmos: /palmos/i,
    symbian: /(nokia_series_40|s60|symbian)/i
  };

  for (const uAKey of Object.keys(uAs)) {
    const regex = uAs[uAKey];

    if (regex.test(ua)) {
      // iPad on iOS 13 detection
      if (uAKey === "mac" && "ontouchend" in document) {
        return "ios";
      }

      return uAKey;
    }
  }

  for (const platformKey of Object.keys(platforms)) {
    const regex = platforms[platformKey];

    if (regex.test(platform)) {
      return platformKey;
    }
  }

  return "Unknown";
}; // TODO test TV

const getOSType = () => {
  const os = getOS();
  let isMobile = false;
  let isDesktop = false;
  let isGameConsole = false;

  switch (os) {
    case "windows":
    case "windows10":
    case "windows7":
    case "windows8":
    case "windows81":
    case "osxBigSur":
    case "osxCatalina":
    case "osx":
    case "mac":
    case "linux":
    case "unix":
      isDesktop = true;
      break;

    case "ios":
    case "android":
    case "windowsPhone":
    case "symbian":
      isMobile = true;
      break;
  }

  if (os.indexOf("playstation") !== -1 || os.indexOf("nintendo") !== -1) {
    isGameConsole = true;
  }

  return {
    isMobile,
    isDesktop,
    isGameConsole
  };
};
const isMobile = () => {
  return getOSType().isMobile;
};
const isDesktop = () => {
  return getOSType().isDesktop;
};
const isGameConsole = () => {
  return getOSType().isGameConsole;
};

/***/ }),

/***/ "../../../packages/utils/src/type.ts":
/*!*******************************************!*\
  !*** ../../../packages/utils/src/type.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toType": function() { return /* binding */ toType; },
/* harmony export */   "couldBeJson": function() { return /* binding */ couldBeJson; },
/* harmony export */   "isJson": function() { return /* binding */ isJson; },
/* harmony export */   "parseType": function() { return /* binding */ parseType; },
/* harmony export */   "parseJsonString": function() { return /* binding */ parseJsonString; },
/* harmony export */   "isUndefined": function() { return /* binding */ isUndefined; },
/* harmony export */   "isDefined": function() { return /* binding */ isDefined; },
/* harmony export */   "isObject": function() { return /* binding */ isObject; },
/* harmony export */   "getString": function() { return /* binding */ getString; },
/* harmony export */   "getNumber": function() { return /* binding */ getNumber; },
/* harmony export */   "isFunction": function() { return /* binding */ isFunction; },
/* harmony export */   "isNumber": function() { return /* binding */ isNumber; },
/* harmony export */   "isBoolean": function() { return /* binding */ isBoolean; },
/* harmony export */   "isString": function() { return /* binding */ isString; },
/* harmony export */   "stringHasNumber": function() { return /* binding */ stringHasNumber; },
/* harmony export */   "stringHasOnlyNumbers": function() { return /* binding */ stringHasOnlyNumbers; },
/* harmony export */   "stringIsPhoneNumber": function() { return /* binding */ stringIsPhoneNumber; },
/* harmony export */   "justDigits": function() { return /* binding */ justDigits; },
/* harmony export */   "escapeHtml": function() { return /* binding */ escapeHtml; },
/* harmony export */   "withoutSpecialChars": function() { return /* binding */ withoutSpecialChars; },
/* harmony export */   "replaceUmlautChars": function() { return /* binding */ replaceUmlautChars; },
/* harmony export */   "withoutMultiWhitespace": function() { return /* binding */ withoutMultiWhitespace; },
/* harmony export */   "handleize": function() { return /* binding */ handleize; },
/* harmony export */   "stripHtml": function() { return /* binding */ stripHtml; },
/* harmony export */   "camelCase": function() { return /* binding */ camelCase; },
/* harmony export */   "kebabCase": function() { return /* binding */ kebabCase; },
/* harmony export */   "capitalize": function() { return /* binding */ capitalize; },
/* harmony export */   "extend": function() { return /* binding */ extend; },
/* harmony export */   "clone": function() { return /* binding */ clone; },
/* harmony export */   "classOf": function() { return /* binding */ classOf; },
/* harmony export */   "clearObjFromRiba": function() { return /* binding */ clearObjFromRiba; },
/* harmony export */   "hashCode": function() { return /* binding */ hashCode; }
/* harmony export */ });
/**
 * Fixed version of typeof operator
 * @param obj
 * @see https://goo.gl/pxwQGp
 */
const toType = obj => {
  const matches = {}.toString.call(obj).match(/\s([a-z]+)/i);
  return matches ? matches[1].toLowerCase() : null;
};
const couldBeJson = str => {
  if (!str || typeof str !== "string") {
    return false;
  }

  str = str.trim();
  return str.charAt(0) === "{" || str.charAt(0) === "[";
};
/**
 * Test if string is a json string
 * @param str
 */

const isJson = str => {
  if (!str || !couldBeJson(str)) {
    return false;
  }

  try {
    const val = JSON.parse(str);
    return Array.isArray(val) || typeof val === "object" ? true : false;
  } catch (error) {
    return false;
  }
};
/**
 * TODO merge with parseType in ./packages/core/src/parsers.ts
 */

const parseType = input => {
  let type = "undefined";
  let value = input;

  if (input === undefined) {
    return {
      type,
      value: undefined
    };
  }

  if (input === "true") {
    value = true;
  } else if (input === "false") {
    value = false;
  } else if (input === "null") {
    value = null;
  } else if (input === "undefined") {
    value = undefined;
  } else if (input === "") {
    value = "";
  } else if (!isNaN(Number(input))) {
    value = Number(input);
  } else if (couldBeJson(value)) {
    const jsonString = parseJsonString(value);
    value = jsonString ? jsonString : value;
  }

  type = typeof value;
  return {
    type,
    value
  };
};
/**
 * Parses a json string with the special feature that json strings
 * can also have single quotations for defining the properties and values
 */

const parseJsonString = value => {
  let object = null;

  if (!couldBeJson(value)) {
    return object;
  }

  if (isJson(value)) {
    object = JSON.parse(value) || null;
  } else {
    try {
      // Transform an invalid json string with single quotation to a valid json string with double quotation
      object = JSON.parse(value.replace(/'/g, '"')) || null;
    } catch (error) {
      console.warn(error);
    }
  }

  return object;
};
/**
 * Check if value is undefined
 */

const isUndefined = value => {
  return typeof value === "undefined";
};
/**
 * Check if value is undefined
 */

const isDefined = value => {
  return !isUndefined(value);
};
/**
 * Check if type is Object
 * @see https://stackoverflow.com/a/4775737/1465919
 */

const isObject = obj => {
  return isDefined(obj) && typeof obj === "object" && obj !== null;
};
/**
 * Parse value to string or return undefined if value is null
 * @param value
 */

const getString = value => {
  return value !== null && value !== void 0 && value.toString ? value.toString() : undefined;
};
/**
 * Parse value to number or return 0 if value is null or undefined
 * @param value
 */

const getNumber = value => {
  return value ? parseFloat(value) : undefined;
};
/**
 * Check if value is a function
 */

const isFunction = value => {
  return typeof value === "function";
};
/**
 * Check whether variable is number or a string with numbers in JavaScript
 * @see https://stackoverflow.com/a/1421988/1465919
 */

const isNumber = value => {
  return !isNaN(parseFloat(value)) && !isNaN(value - 0);
};
/**
 * Check if type is Boolean
 * @see https://stackoverflow.com/a/28814615/1465919
 */

const isBoolean = value => {
  return typeof value === typeof true;
};
/**
 * Check if value is a string
 */

const isString = value => {
  return typeof value === "string";
};
/**
 * Check if string contains a number
 */

const stringHasNumber = value => {
  return isString(value) && /\d/.test(value);
};
/**
 * Check if string contains only numbers
 */

const stringHasOnlyNumbers = value => {
  return /^\d+$/.test(value);
};
/**
 * Check if string contains only numbers, +, - and ()
 */

const stringIsPhoneNumber = value => {
  return /^[0-9 ()+-]+$/.test(value);
};
/**
 * Just get the digits of a string, useful to remove px pixel from css value
 *
 * @see http://stackoverflow.com/a/1100653/1465919
 */

const justDigits = str => {
  if (typeof str === "number") {
    return str;
  }

  const num = str.replace(/[^-\d.]/g, "");

  if (!isNumber(num)) {
    return 0;
  } else {
    return Number(num);
  }
};
const escapeHtml = str => {
  const tagsToReplace = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
  };
  return str.replace(/[&<>]/g, tag => {
    return tagsToReplace[tag] || tag;
  });
};
/**
 * Remove all special chars from a string
 * @see https://stackoverflow.com/a/11090301/1465919
 * @param str
 */

const withoutSpecialChars = str => {
  // str = str.replace(/[^\w\s]/gi, ""); // http://stackoverflow.com/a/4374890
  str = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, "");
  return str;
};
/**
 * Replace all umlaut chars from string like ä with ae
 * @param str
 */

const replaceUmlautChars = str => {
  str = str.replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").replace(/Ä/g, "Ae").replace(/Ö/g, "Oe").replace(/Ü/g, "Üe");
  return str;
};
/**
 * Removes multiple tabs, newlines, etc from a string
 * @param str
 */

const withoutMultiWhitespace = str => {
  str = str.replace(/\s\s+/g, " ");
  return str;
};
/**
 * Formats a string into a handle.
 * E.g. '100% M & Ms!!!' -> 100-m-ms
 * @see https://help.shopify.com/themes/liquid/filters/string-filters#handle-handleize
 */

const handleize = str => {
  str = str.trim();
  str = str.toLowerCase();
  str = withoutMultiWhitespace(str);
  str = withoutSpecialChars(str);
  str = replaceUmlautChars(str);
  str = str.replace(/ /g, "-");
  return str;
};
const stripHtml = html => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};
/**
 * foo-bar -> fooBar
 * Returns a camel-cased version of the string. Used when translating an
 * element's attribute name into a property name for the component's scope.
 * @param str
 */

const camelCase = str => {
  return str.replace(/-([a-z0-9])/g, grouped => {
    return grouped[1].toUpperCase();
  });
};
/**
 * fooBar -> foo-bar
 */

const kebabCase = str => {
  return str.replace(/[A-Z]/g, letter => "-".concat(letter.toLowerCase()));
};
/**
 * uppercase's the first letter of a string
 * @param str
 */

const capitalize = str => {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * Merge the contents of two or more objects together into the first object.
 * @param deep If true, the merge becomes recursive (aka. deep copy).
 * @param target An object that will receive the new properties
 * @param objects The objects containing additional properties to merge in.
 * @see http://www.damirscorner.com/blog/posts/20180216-VariableNumberOfArgumentsInTypescript.html
 * @see https://gomakethings.com/merging-objects-with-vanilla-javascript/
 */

const extend = function () {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let extended = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Merge the object into the extended object
  const merge = obj => {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (options.deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") {
          // If we're doing a deep merge and the property is an object
          extended[prop] = extend(options, extended[prop], obj[prop]);
        } else {
          // Otherwise, do a regular merge
          if (options.keepValues) {
            // Only overwrite target value if the target value is undefined
            if (typeof extended[prop] === "undefined") {
              extended[prop] = obj[prop];
            }
          } else if (options.onlyDefined) {
            // Only overwrite target value if the source value is defined / not undefined
            if (typeof obj[prop] !== "undefined") {
              extended[prop] = obj[prop];
            }
          } else if (options.mergeArrays) {
            // Merge array if both values are array's
            if (Array.isArray(extended[prop]) && Array.isArray(obj[prop])) {
              extended[prop] = [...extended[prop], ...obj[prop]];
            } else {
              extended[prop] = obj[prop];
            }
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    }
  }; // Loop through each object and conduct a merge


  for (let i = 0; i < (arguments.length <= 2 ? 0 : arguments.length - 2); i++) {
    merge(i + 2 < 2 || arguments.length <= i + 2 ? undefined : arguments[i + 2]);
  }

  return extended;
};
/**
 * Clone an object, array or any primitive type like numbers or strings.
 * @param deep If true, the merge becomes recursive (aka. deep copy).
 * @param val The value(s) to clone
 */

const clone = (deep, val) => {
  if (Array.isArray(val)) {
    if (deep) {
      return val.map(x => clone(true, x));
    } else {
      return val.slice();
    }
  }

  if (isObject(val)) {
    return extend({
      deep
    }, {}, val);
  } // Primitive types like numbers and strings are copied by default


  return val;
};
/**
 * Get the class `"that"`
 * @param that
 */

const classOf = that => {
  return that.constructor;
};
/**
 * Removes internal riba properties from an object
 * @param obj
 * @return Cleared new object
 */

const clearObjFromRiba = obj => {
  if (Array.isArray(obj)) {
    return obj.map(x => isObject(x) ? clearObjFromRiba(x) : x);
  }

  const newObj = {};

  for (const key in obj) {
    if (key !== "__rv") {
      if (isObject(obj[key])) {
        newObj[key] = clearObjFromRiba(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  return newObj;
};
/**
 * Generate a Hash from string
 * @param str The string
 * @returns hash code
 * @see https://stackoverflow.com/a/7616484
 */

const hashCode = str => {
  let hash = 0;
  let i;
  let chr;
  if (str.length === 0) return hash;

  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }

  return hash;
};

/***/ }),

/***/ "../../../packages/utils/src/types/deferred.ts":
/*!*****************************************************!*\
  !*** ../../../packages/utils/src/types/deferred.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../packages/utils/src/types/index.ts":
/*!**************************************************!*\
  !*** ../../../packages/utils/src/types/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deferred__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deferred */ "../../../packages/utils/src/types/deferred.ts");


/***/ }),

/***/ "../../../packages/utils/src/url.ts":
/*!******************************************!*\
  !*** ../../../packages/utils/src/url.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUrlParameter": function() { return /* binding */ getUrlParameter; },
/* harmony export */   "getLocation": function() { return /* binding */ getLocation; },
/* harmony export */   "normalizeUrl": function() { return /* binding */ normalizeUrl; },
/* harmony export */   "getUrl": function() { return /* binding */ getUrl; },
/* harmony export */   "onRoute": function() { return /* binding */ onRoute; },
/* harmony export */   "onParentRoute": function() { return /* binding */ onParentRoute; },
/* harmony export */   "cleanLink": function() { return /* binding */ cleanLink; },
/* harmony export */   "getPort": function() { return /* binding */ getPort; },
/* harmony export */   "isAbsoluteUrl": function() { return /* binding */ isAbsoluteUrl; },
/* harmony export */   "isExternalUrl": function() { return /* binding */ isExternalUrl; },
/* harmony export */   "isInternalUrl": function() { return /* binding */ isInternalUrl; },
/* harmony export */   "getHash": function() { return /* binding */ getHash; },
/* harmony export */   "updateHash": function() { return /* binding */ updateHash; },
/* harmony export */   "removeHash": function() { return /* binding */ removeHash; }
/* harmony export */ });
/**
 * get param from hash
 */
const getUrlParameter = (name, url) => {
  if (!url) {
    url = window.location.href;
  }

  name = name.replace(/[[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }

  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
};
/**
 * get location object ofpath or address bar
 * @see http://stackoverflow.com/a/736970/1465919
 *
 * @example
 * var l = getLocation("http://example.com:3000/pathname/?search=test#hash");
 * =>
 * l.protocol; // => "http:"
 * l.host;     // => "example.com:3000"
 * l.hostname; // => "example.com"
 * l.port;     // => "3000"
 * l.pathname; // => "/pathname/"
 * l.hash;     // => "#hash"
 * l.search;   // => "?search=test"
 * l.origin;   // => "http://example.com:3000"
 */

const getLocation = url => {
  if (!url) {
    return window.location;
  }

  const l = document.createElement("a");
  l.href = url;
  return l;
};
/**
 * If the webapps url is https://mysupersite.org and the url is https://mysupersite.org/subpage?search=test
 * this method will return /subpage?search=test
 * If the url is https://anothersite.org/subpage?search=test this method will return https://anothersite.org/subpage?search=test
 * @param url
 */

const normalizeUrl = url => {
  const location = getLocation(url);
  const hostname = getLocation().hostname;

  if (location.hostname === hostname) {
    return {
      url: location.pathname + location.search + location.hash,
      location
    };
  } else {
    return {
      url: getUrl(url),
      location
    };
  }
};
/**
 * Return the current full url
 *
 * @return {string} currentUrl
 */

const getUrl = url => {
  const location = getLocation(url);
  return location.protocol + "//" + location.host + location.pathname + location.search + location.hash;
};
/**
 * Check if we are on the route
 */

const onRoute = function (checkUrl) {
  let compareQueryParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (checkUrl) {
    const location1 = getLocation();
    const location2 = getLocation(checkUrl);

    if (compareQueryParam) {
      // TODO ignore query parameter order
      if (location1.search !== location2.search) {
        return false;
      }
    }

    return location1.hostname === location2.hostname && location1.pathname === location2.pathname;
  }

  return false;
};
/**
 * Check if the current location url stats with a url or is equal
 */

const onParentRoute = checkUrl => {
  if (checkUrl) {
    const location = getLocation();
    const pathname = location.pathname;
    const hostname = location.hostname;
    const checkLocation = getLocation(checkUrl);
    const checkPathname = checkLocation.pathname;
    const checkHostname = checkLocation.hostname;
    return hostname === checkHostname && pathname.startsWith(checkPathname);
  }

  return false;
};
/**
 * Given an url, return it without the hash
 *
 * @param url
 * @return newCleanUrl
 */

const cleanLink = url => {
  return url.replace(/#.*/, "");
};
/**
 * Return the port number normalized, eventually you can pass a string to be normalized.
 *
 * @param p
 * @return port
 */

const getPort = (p, url) => {
  const location = getLocation(url);
  const port = typeof p !== "undefined" ? p : location.port;
  const protocol = location.protocol;

  if (port !== "") {
    return Number(port);
  }

  if (protocol === "http:") {
    return 80;
  }

  if (protocol === "https:") {
    return 443;
  }
};
/**
 * Test if url is absolute or relative
 * @see https://stackoverflow.com/a/19709846/1465919
 */

const isAbsoluteUrl = url => {
  if (!url) {
    return false;
  }

  const isProtokoll = new RegExp("^(?:[a-z]+:)?//", "i");
  const isAbsolute = isProtokoll.test(url) || url.startsWith("mailto:") || url.startsWith("tel:") || url.startsWith("fax:");
  return isAbsolute;
};
const isExternalUrl = absoluteUrl => {
  if (isAbsoluteUrl(absoluteUrl)) {
    const location = getLocation();
    const host = location.protocol + "//" + location.hostname;
    let isExternal = true;

    if (absoluteUrl.startsWith(host)) {
      isExternal = false;
    }

    return isExternal;
  }

  return false;
};
const isInternalUrl = url => {
  return !isExternalUrl(url);
};
/**
 * Get hash from address bar or url if set
 */

const getHash = url => {
  return getLocation(url).hash;
};
/**
 * Change hash from address bar
 */

const updateHash = hash => {
  return window.location.hash = hash;
};
/**
 * Remove hash from address bar
 */

const removeHash = () => {
  return history.pushState("", document.title, window.location.pathname + window.location.search);
};

/***/ }),

/***/ "./scripts/pages/404/404.component.pug":
/*!*********************************************!*\
  !*** ./scripts/pages/404/404.component.pug ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(/*! !../../../../../../.yarn/cache/pug-runtime-npm-3.0.1-13038c62ae-48a71b587c.zip/node_modules/pug-runtime/index.js */ "../../../.yarn/cache/pug-runtime-npm-3.0.1-13038c62ae-48a71b587c.zip/node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"container container-md py-5 my-5 text-center bg-white\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-12\"\u003E\u003Ch1 ssr-rv-text=\"title\"\u003E\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Csection class=\"row\"\u003E\u003Cdiv class=\"col-12\"\u003E\u003Cdiv ssr-rv-text=\"content\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./scripts/pages/500/500.component.pug":
/*!*********************************************!*\
  !*** ./scripts/pages/500/500.component.pug ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(/*! !../../../../../../.yarn/cache/pug-runtime-npm-3.0.1-13038c62ae-48a71b587c.zip/node_modules/pug-runtime/index.js */ "../../../.yarn/cache/pug-runtime-npm-3.0.1-13038c62ae-48a71b587c.zip/node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"container container-md py-5 my-5 bg-white\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-12\"\u003E\u003Ch1 class=\"text-center\" ssr-rv-text=\"title\"\u003E\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Csection class=\"row\"\u003E\u003Cdiv class=\"col-12\"\u003E\u003Cdiv class=\"text-center my-3\" ssr-rv-html=\"content\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"alert alert-danger text-left\" role=\"alert\"\u003E\u003Cspan ssr-rv-each-line=\"error.stack\"\u003E[ line ]\u003Cbr\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./scripts/pages/index/index.component.pug":
/*!*************************************************!*\
  !*** ./scripts/pages/index/index.component.pug ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(/*! !../../../../../../.yarn/cache/pug-runtime-npm-3.0.1-13038c62ae-48a71b587c.zip/node_modules/pug-runtime/index.js */ "../../../.yarn/cache/pug-runtime-npm-3.0.1-13038c62ae-48a71b587c.zip/node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"container-fluid py-5 my-5 text-center\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-12\"\u003E\u003Ch1 ssr-rv-html=\"title\"\u003E\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Csection class=\"row\"\u003E\u003Cdiv class=\"col-12\"\u003E\u003Cp ssr-rv-html=\"content\"\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003Crv-logger ssr-rv-log-me=\"content\"\u003E\u003C\u002Frv-logger\u003E\u003Crv-logger ssr-rv-log-me=\"obj | json\"\u003E\u003C\u002Frv-logger\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./scripts/pages/pages/pages.component.pug":
/*!*************************************************!*\
  !*** ./scripts/pages/pages/pages.component.pug ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(/*! !../../../../../../.yarn/cache/pug-runtime-npm-3.0.1-13038c62ae-48a71b587c.zip/node_modules/pug-runtime/index.js */ "../../../.yarn/cache/pug-runtime-npm-3.0.1-13038c62ae-48a71b587c.zip/node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"container container-md py-5 my-5 text-center\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-12\"\u003E\u003Ch1 ssr-rv-template=\"title\"\u003E\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Csection class=\"row\"\u003E\u003Cdiv class=\"col-12\"\u003E\u003Cdiv ssr-rv-template=\"content\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "../../../.yarn/cache/pug-runtime-npm-3.0.1-13038c62ae-48a71b587c.zip/node_modules/pug-runtime/index.js":
/*!**************************************************************************************************************!*\
  !*** ../../../.yarn/cache/pug-runtime-npm-3.0.1-13038c62ae-48a71b587c.zip/node_modules/pug-runtime/index.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
}

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '',
    className,
    padding = '',
    escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '',
    padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
}

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (
    val === false ||
    val == null ||
    (!val && (key === 'class' || key === 'style'))
  ) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if (
    (type === 'object' || type === 'function') &&
    typeof val.toJSON === 'function'
  ) {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + "='" + val.replace(/'/g, '&#39;') + "'";
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse) {
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
}

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html) {
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34:
        escape = '&quot;';
        break;
      case 38:
        escape = '&amp;';
        break;
      case 60:
        escape = '&lt;';
        break;
      case 62:
        escape = '&gt;';
        break;
      default:
        continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
}

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str) {
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  var context, lines, start, end;
  try {
    str = str || (__webpack_require__(/*! fs */ "?5fca").readFileSync)(filename, {encoding: 'utf8'});
    context = 3;
    lines = str.split('\n');
    start = Math.max(lineno - context, 0);
    end = Math.min(lines.length, lineno + context);
  } catch (ex) {
    err.message +=
      ' - could not read from ' + filename + ' (' + ex.message + ')';
    pug_rethrow(err, null, lineno);
    return;
  }

  // Error context
  context = lines
    .slice(start, end)
    .map(function(line, i) {
      var curr = i + start + 1;
      return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;
    })
    .join('\n');

  // Alter exception message
  err.path = filename;
  try {
    err.message =
      (filename || 'Pug') +
      ':' +
      lineno +
      '\n' +
      context +
      '\n\n' +
      err.message;
  } catch (e) {}
  throw err;
}


/***/ }),

/***/ "?5fca":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!******************************************************************************************************************************************!*\
  !*** ../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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
/******/ 			// no module.id needed
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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************!*\
  !*** ./scripts/ssr.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../.yarn/cache/@babel-runtime-npm-7.16.5-324a158d8a-b96e67280e.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ribajs_ssr_src_polyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ribajs/ssr/src/polyfills */ "../../../packages/ssr/src/polyfills/index.ts");
/* harmony import */ var _ribajs_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ribajs/ssr */ "../../../packages/ssr/src/index.ts");
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ribajs/core */ "../../../packages/core/src/index.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages */ "./scripts/pages/index.ts");
/* harmony import */ var _components_link_list_link_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/link-list/link-list.component */ "./scripts/components/link-list/link-list.component.ts");
/* harmony import */ var _binders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./binders */ "./scripts/binders/index.ts");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formatters */ "./scripts/formatters/index.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



 // import { i18nModule, LocalesStaticService } from "@ribajs/i18n";
// Own




 // import locales from "./locales";

const riba = new _ribajs_core__WEBPACK_IMPORTED_MODULE_3__.Riba(); // These Riba settings are necessary for the ssr

riba.configure({
  prefix: ["rv", "ssr-rv"],
  blockUnknownCustomElements: false,
  templateDelimiters: ["[", "]"]
}); // Regist custom components

riba.module.component.regists(_objectSpread(_objectSpread({}, _pages__WEBPACK_IMPORTED_MODULE_4__), {}, {
  LinkListComponent: _components_link_list_link_list_component__WEBPACK_IMPORTED_MODULE_5__.LinkListComponent
}));
riba.module.binder.regists(_binders__WEBPACK_IMPORTED_MODULE_6__);
riba.module.formatter.regists(_formatters__WEBPACK_IMPORTED_MODULE_7__); // const localesService = new LocalesStaticService(locales, undefined, false);
// riba.module.regist(i18nModule.init({ localesService }));
// Regist modules

riba.module.regist(_ribajs_core__WEBPACK_IMPORTED_MODULE_3__.coreModule.init());
riba.module.regist(_ribajs_ssr__WEBPACK_IMPORTED_MODULE_2__.SSRModule.init());
console.log("Hello from Riba");
const view = riba.bind(document.body); // WORKAROUND / FIXME view.traverse method seems not to be working in jsdom
// view.registComponents();
}();
/******/ })()
;