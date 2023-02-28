(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slider_edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/slider/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/slider/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FileUpload: _FileUpload__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['slider'],
  data: function data() {
    return {
      data: this.slider,
      updating: false
    };
  },
  methods: {
    getFullUrl: function getFullUrl(src) {
      return "".concat(location.origin, "/storage/").concat(src);
    },
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
      formData.append('_method', 'PUT');
      formData.append('image', this.data.image);
      return formData;
    },
    update: function update() {
      var _this = this;

      for (var input in this.data) {
        if (this.data[input] === '') {
          this.$alertify.error("".concat(input, " is required"));
          return false;
        }
      }

      this.updating = true;
      axios.post("/admin/slider/".concat(this.slider.id), this.buildFormData()).then(function () {
        _this.$alertify.success("Category Updated Successfully!");

        setTimeout(function () {
          window.location.href = '/admin/slider';
        }, 1000);
      })["catch"](function (err) {
        _this.updating = false;

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/slider/Edit.vue?vue&type=template&id=5499c010&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/slider/Edit.vue?vue&type=template&id=5499c010& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
                  { staticClass: "w-full md:w-1/2 px-3 mb-6 mt-4 md:mb-0" },
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
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/2 px-3 mb-6 mt-4 md:mb-0" },
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
                    _c("img", {
                      staticClass: "img-fluid",
                      staticStyle: { height: "200px", width: "460px" },
                      attrs: {
                        src: _vm.getFullUrl(_vm.data.image),
                        alt: "Driver Documents"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("button", {
                staticClass: "button bg-theme-1 text-white mt-5",
                domProps: {
                  textContent: _vm._s(_vm.updating ? "Updating..." : "Update")
                },
                on: { click: _vm.update }
              }),
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
        _vm._v("\n            Edit Slider\n        ")
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

/***/ "./resources/js/backend/components/slider/Edit.vue":
/*!*********************************************************!*\
  !*** ./resources/js/backend/components/slider/Edit.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_5499c010___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=5499c010& */ "./resources/js/backend/components/slider/Edit.vue?vue&type=template&id=5499c010&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/slider/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_5499c010___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_5499c010___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/slider/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/slider/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/backend/components/slider/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/slider/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/slider/Edit.vue?vue&type=template&id=5499c010&":
/*!****************************************************************************************!*\
  !*** ./resources/js/backend/components/slider/Edit.vue?vue&type=template&id=5499c010& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5499c010___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=5499c010& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/slider/Edit.vue?vue&type=template&id=5499c010&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5499c010___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5499c010___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);