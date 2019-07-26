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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({

    methods: {
        formatNextRunAt: function formatNextRunAt(date) {
            return moment(date).fromNow().replace(/^\w/, function (c) {
                return c.toUpperCase();
            });
        }
    }

});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router) {
    Vue.component('nova-scheduled-jobs', __webpack_require__(4));
    Vue.component('dispatch-job-modal', __webpack_require__(7));

    router.addRoutes([{
        name: 'NovaScheduledJobs',
        path: '/scheduled-jobs',
        component: __webpack_require__(10)
    }]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(5)
/* template */
var __vue_template__ = __webpack_require__(6)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b9bc2c0a", Component.options)
  } else {
    hotAPI.reload("data-v-b9bc2c0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_formatters__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_formatters__["a" /* default */]],

    props: ['card'],

    data: function data() {
        return {
            loading: false,
            jobs: []
        };
    },

    mounted: function mounted() {
        this.fetchJobs();
    },


    methods: {
        fetchJobs: function fetchJobs() {
            var _this = this;

            this.loading = true;

            Nova.request().get('/nova-vendor/nikhilbaby/nova-scheduled/jobs').then(function (response) {
                _this.loading = false;
                _this.jobs = response.data;

                setTimeout(_this.fetchJobs, 60 * 1000);
            });
        }
    }

});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "card",
    { staticClass: "h-auto p-4" },
    [
      _c("h2", { staticClass: "text-90 font-light mb-4" }, [
        _vm._v("Scheduled Jobs")
      ]),
      _vm._v(" "),
      !_vm.loading && !_vm.jobs.length
        ? _c("p", [_vm._v("You do not currently have any scheduled jobs.")])
        : _vm._e(),
      _vm._v(" "),
      _vm.loading ? _c("loader", { staticClass: "mb-4" }) : _vm._e(),
      _vm._v(" "),
      !_vm.loading && _vm.jobs.length
        ? _c("table", { staticClass: "table w-full" }, [
            _c("thead", [
              _c("tr", [
                _c("th", { staticClass: "text-left" }, [_vm._v("Command/Job")]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" }, [_vm._v("Expression")]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" }, [_vm._v("Next Run At")])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.jobs, function(job, index) {
                return _c("tr", { attrs: { job: job } }, [
                  _c("td", [_vm._v(_vm._s(job.command))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(job.expression))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.formatNextRunAt(job.nextRunAt)))])
                ])
              }),
              0
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b9bc2c0a", module.exports)
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(8)
/* template */
var __vue_template__ = __webpack_require__(9)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/DispatchJobModal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-622088f5", Component.options)
  } else {
    hotAPI.reload("data-v-622088f5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        command: String
    },
    methods: {
        handleClose: function handleClose() {
            this.$emit('close');
        },
        handleConfirm: function handleConfirm() {
            this.$emit('confirm');
        }
    },
    mounted: function mounted() {
        this.$refs.confirmButton.focus();
    }
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("modal", {
    on: { "modal-close": _vm.handleClose },
    scopedSlots: _vm._u(
      [
        {
          key: "default",
          fn: function(props) {
            return _c(
              "form",
              {
                staticClass: "bg-white rounded-lg shadow-lg overflow-hidden",
                staticStyle: { width: "460px" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.handleConfirm($event)
                  }
                }
              },
              [
                _vm._t(
                  "default",
                  [
                    _c(
                      "div",
                      { staticClass: "p-8" },
                      [
                        _c(
                          "heading",
                          { staticClass: "mb-6", attrs: { level: 2 } },
                          [
                            _vm._v("Dispatch - "),
                            _c("b", [_vm._v(_vm._s(_vm.command))])
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-80 leading-normal" }, [
                          _vm._v("Are you sure you want to dispatch the Job?")
                        ])
                      ],
                      1
                    )
                  ],
                  { command: _vm.command }
                ),
                _vm._v(" "),
                _c("div", { staticClass: "bg-30 px-6 py-3 flex" }, [
                  _c("div", { staticClass: "ml-auto" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn text-80 font-normal h-9 px-3 mr-3 btn-link",
                        attrs: {
                          type: "button",
                          "data-testid": "cancel-button",
                          dusk: "cancel-dispatch-job-button"
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.handleClose($event)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.__("Cancel")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        ref: "confirmButton",
                        staticClass: "btn btn-default btn-primary",
                        attrs: {
                          id: "confirm-dispatch-job-button",
                          "data-testid": "confirm-button",
                          type: "submit"
                        }
                      },
                      [_vm._v("Dispatch")]
                    )
                  ])
                ])
              ],
              2
            )
          }
        }
      ],
      null,
      true
    )
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-622088f5", module.exports)
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(11)
/* template */
var __vue_template__ = __webpack_require__(12)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Tool.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68ff5483", Component.options)
  } else {
    hotAPI.reload("data-v-68ff5483", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_formatters__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_formatters__["a" /* default */]],

    data: function data() {
        return {
            jobs: [],
            loading: false,
            dispatchJob: null,
            confirmDispatchJobModal: false
        };
    },

    mounted: function mounted() {
        this.fetchJobs();
    },


    methods: {
        canDispatchCommand: function canDispatchCommand(command) {
            if (command) {
                return true;
            }

            return false;
        },
        openConfirmationModal: function openConfirmationModal(job) {
            this.dispatchJob = job;
            this.confirmDispatchJobModal = true;
        },
        confirmDispatchJob: function confirmDispatchJob() {
            var _this = this;

            var job = this.dispatchJob;
            Nova.request().post('/nova-vendor/nikhilbaby/nova-scheduled/dispatch-job', { command: job.command }).then(function (response) {
                _this.confirmDispatchJobModal = false;
                _this.$toasted.show('The job was dispatched!', { type: 'success' });

                if (response) {
                    _this.$toasted.show('Response: <br>' + response.data, { type: 'success' });
                }
            }).catch(function (error) {
                _this.confirmDispatchJobModal = false;
                _this.$toasted.show(error.response.data.message, { type: 'error' });
            });
        },
        fetchJobs: function fetchJobs() {
            var _this2 = this;

            this.loading = true;

            Nova.request().get('/nova-vendor/nikhilbaby/nova-scheduled/jobs').then(function (response) {
                _this2.loading = false;
                _this2.jobs = response.data;

                setTimeout(_this2.fetchJobs, 60 * 1000);
            });
        }
    }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("heading", { staticClass: "mb-4" }, [
        _vm._v("\n        Scheduled Jobs\n    ")
      ]),
      _vm._v(" "),
      _c(
        "card",
        { staticClass: "h-auto p-4 mb-4 overflow-scroll" },
        [
          !_vm.loading && !_vm.jobs.length
            ? _c("p", [_vm._v("You do not currently have any scheduled jobs.")])
            : _vm._e(),
          _vm._v(" "),
          _vm.loading ? _c("loader", { staticClass: "mb-4" }) : _vm._e(),
          _vm._v(" "),
          !_vm.loading && _vm.jobs.length
            ? _c("table", { staticClass: "table w-full" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Command/Job")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Description")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Schedule")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Expression")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Next Run At")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Without Overlapping")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("On One Server")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Run In Maintenance Mode")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Dispatch")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.jobs, function(job, index) {
                    return _c("tr", { attrs: { job: job } }, [
                      _c("td", [_vm._v(_vm._s(job.command))]),
                      _vm._v(" "),
                      _c("td", { staticClass: "py-2" }, [
                        _vm._v(_vm._s(job.description))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "py-2" }, [
                        _vm._v(_vm._s(job.humanReadableExpression))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(job.expression))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.formatNextRunAt(job.nextRunAt)))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(job.withoutOverlapping ? "Yes" : "No"))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(job.onOneServer ? "Yes" : "No"))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(job.evenInMaintenanceMode ? "Yes" : "No"))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "appearance-none mr-3",
                            class: _vm.canDispatchCommand(job.command)
                              ? "text-70 hover:text-primary"
                              : "cursor-default text-40",
                            attrs: {
                              title: "Dispatch",
                              disabled: !_vm.canDispatchCommand(job.command)
                            },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.openConfirmationModal(job)
                              }
                            }
                          },
                          [_c("icon", { attrs: { type: "play" } })],
                          1
                        )
                      ])
                    ])
                  }),
                  0
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "portal",
            { attrs: { to: "modals" } },
            [
              _c(
                "transition",
                { attrs: { name: "fade" } },
                [
                  _vm.confirmDispatchJobModal
                    ? _c("dispatch-job-modal", {
                        attrs: { command: _vm.dispatchJob.command },
                        on: {
                          confirm: _vm.confirmDispatchJob,
                          close: function($event) {
                            _vm.confirmDispatchJobModal = false
                          }
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68ff5483", module.exports)
  }
}

/***/ })
/******/ ]);