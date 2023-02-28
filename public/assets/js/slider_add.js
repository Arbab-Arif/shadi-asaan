(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slider_add"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/slider/Add.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/slider/Add.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FileUpload */ "./resources/js/backend/components/FileUpload.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  components: {
    FileUpload: _FileUpload__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      data: {
        image: ''
      },
      submitting: false
    };
  },
  methods: {
    sliderImage: function sliderImage(files) {
      this.data.image = '';

      var _iterator = _createForOfIteratorHelper(files),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var file = _step.value;
          this.data.image = file;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    buildFormData: function buildFormData() {
      var formData = new FormData();
      formData.append('image', this.data.image);
      return formData;
    },
    submit: function submit() {
      var _this = this;

      for (var input in this.data) {
        if (this.data[input] === '') {
          this.$alertify.error("".concat(input, " is required"));
          return false;
        }
      }

      this.submitting = true;
      axios.post('/admin/slider', this.buildFormData()).then(function () {
        _this.$alertify.success("Slider Created Successfully!");

        setTimeout(function () {
          window.location.href = '/admin/slider';
        }, 1000);
      })["catch"](function (err) {
        _this.submitting = false;

        if (err.response.status === 422) {
          var errors = Object.values(err.response.data.errors);

          for (var _i = 0, _errors = errors; _i < _errors.length; _i++) {
            var error = _errors[_i];

            _this.$alertify.error(error[0]);
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/slider/Add.vue?vue&type=template&id=6472fba3&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/slider/Add.vue?vue&type=template&id=6472fba3& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "grid grid-cols-12 gap-6 mt-5" }, [
      _c("div", { staticClass: "intro-y col-span-12 lg:col-span-12" }, [
        _c("div", { staticClass: "intro-y box" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "p-5", attrs: { id: "form-validation" } }, [
            _c("div", { staticClass: "preview" }, [
              _c("div", { staticClass: "flex flex-wrap -mx-3 mb-2" }, [
                _c(
                  "div",
                  { staticClass: "w-full px-3 mb-6 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Image\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("file-upload", { on: { upload: _vm.sliderImage } })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("span", { staticClass: "text-red-600 ml-4 mt-4" }, [
                  _vm._v("Note: Slide Size 1920px By 800px")
                ])
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: " button bg-theme-1 text-white mt-5",
                  domProps: {
                    textContent: _vm._s(
                      _vm.submitting ? "Submitting..." : "Submit"
                    )
                  },
                  on: { click: _vm.submit }
                },
                [
                  _vm._v(
                    "\n                            Submit\n                        "
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(2)
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "intro-y flex items-center mt-8" }, [
      _c("h2", { staticClass: "text-lg font-medium mr-auto" }, [
        _vm._v("\n            Create Slider\n        ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
      },
      [
        _c("h2", { staticClass: "font-medium text-base mr-auto" }, [
          _vm._v("\n                        Slider\n                    ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/admin/slider" } }, [
      _c("button", { staticClass: "button bg-red-600 text-white" }, [
        _vm._v("Cancel")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/slider/Add.vue":
/*!********************************************************!*\
  !*** ./resources/js/backend/components/slider/Add.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_6472fba3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=6472fba3& */ "./resources/js/backend/components/slider/Add.vue?vue&type=template&id=6472fba3&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/slider/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_6472fba3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_6472fba3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/slider/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/slider/Add.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/backend/components/slider/Add.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/slider/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/slider/Add.vue?vue&type=template&id=6472fba3&":
/*!***************************************************************************************!*\
  !*** ./resources/js/backend/components/slider/Add.vue?vue&type=template&id=6472fba3& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_6472fba3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=6472fba3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/slider/Add.vue?vue&type=template&id=6472fba3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_6472fba3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_6472fba3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);