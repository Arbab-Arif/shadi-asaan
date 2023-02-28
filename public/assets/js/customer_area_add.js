(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer_area_add"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/customer/area/Add.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/customer/area/Add.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      data: {
        title: ''
      },
      submitting: false
    };
  },
  methods: {
    dismissModal: function dismissModal() {
      this.$modal.hide('area-add');
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
      axios.post('/admin/category', this.data).then(function (_ref) {
        var data = _ref.data;

        _this.$alertify.success("Category Created Successfully!");

        _this.$emit('category-added', data);

        _this.dismissModal();

        _this.data.title = '';
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/customer/area/Add.vue?vue&type=template&id=199bca70&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/customer/area/Add.vue?vue&type=template&id=199bca70& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "modal",
    { staticClass: "center", attrs: { name: "area-add", height: "auto" } },
    [
      _c(
        "div",
        {
          staticStyle: {
            "margin-top": "0px",
            "margin-left": "0px",
            "padding-left": "0px",
            "z-index": "53"
          },
          attrs: { id: "header-footer-modal-preview" }
        },
        [
          _c("div", { staticClass: "modal__content" }, [
            _c(
              "div",
              {
                staticClass:
                  "flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5"
              },
              [
                _c(
                  "h2",
                  {
                    staticClass:
                      "font-medium text-base-center mr-auto text-center"
                  },
                  [
                    _vm._v(
                      "\n                    Add Category\n                "
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "p-5 grid grid-cols-12 gap-4 row-gap-3" },
              [
                _c("div", { staticClass: "col-span-12 sm:col-span-12" }, [
                  _c("label", [_vm._v("Category Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.title,
                        expression: "data.title"
                      }
                    ],
                    staticClass: "input w-full border mt-2 flex-1",
                    attrs: { type: "text", name: "title", id: "title" },
                    domProps: { value: _vm.data.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data, "title", $event.target.value)
                      }
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "px-5 py-3 text-right border-t border-gray-200 dark:border-dark-5"
              },
              [
                _c(
                  "button",
                  {
                    staticClass: "button w-20 bg-theme-1 text-white",
                    on: { click: _vm.submit }
                  },
                  [_vm._v("Submit")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "button w-20 border text-gray-700 dark:border-dark-5 dark:text-gray-300 mr-1",
                    attrs: { "data-dismiss": "modal" },
                    on: { click: _vm.dismissModal }
                  },
                  [_vm._v("Cancel\n                ")]
                )
              ]
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/customer/area/Add.vue":
/*!***************************************************************!*\
  !*** ./resources/js/backend/components/customer/area/Add.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_199bca70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=199bca70& */ "./resources/js/backend/components/customer/area/Add.vue?vue&type=template&id=199bca70&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/customer/area/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_199bca70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_199bca70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/customer/area/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/customer/area/Add.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/backend/components/customer/area/Add.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/customer/area/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/customer/area/Add.vue?vue&type=template&id=199bca70&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/backend/components/customer/area/Add.vue?vue&type=template&id=199bca70& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_199bca70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=199bca70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/customer/area/Add.vue?vue&type=template&id=199bca70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_199bca70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_199bca70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);