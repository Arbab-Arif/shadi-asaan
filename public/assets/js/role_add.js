(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["role_add"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/role/Add.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/role/Add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
  props: {
    "permissions": {
      type: Array,
      "default": []
    }
  },
  data: function data() {
    return {
      data: {
        label: '',
        permissions: []
      },
      submitting: false
    };
  },
  methods: {
    choosePermission: function choosePermission(evt, permission) {
      if (evt.target.checked === true) {
        this.data.permissions.push(permission.id);
      }

      if (evt.target.checked === false) {
        var index = this.data.permissions.indexOf(permission.id);
        this.data.permissions.splice(index, 1);
      }
    },
    submit: function submit() {
      var _this = this;

      if (this.data.label === '') {
        this.$alertify.error("Role Name Is Required");
        return false;
      }

      this.submitting = true;
      axios.post('/admin/role', this.data).then(function () {
        _this.$alertify.success("Role Created Successfully!");

        setTimeout(function () {
          window.location.href = '/admin/role';
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/role/Add.vue?vue&type=template&id=73334c38&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/role/Add.vue?vue&type=template&id=73334c38& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "p-5" }, [
            _c("div", { staticClass: "preview" }, [
              _c("div", { staticClass: "flex flex-wrap -mx-3 mb-2" }, [
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/2 px-3 mb-6 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Name\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.label,
                          expression: "data.label"
                        }
                      ],
                      staticClass: "cols-3 input w-full border mt-2",
                      attrs: {
                        type: "text",
                        name: "label",
                        placeholder: "Enter Role Name"
                      },
                      domProps: { value: _vm.data.label },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.data, "label", $event.target.value)
                        }
                      }
                    })
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "p-5 flex flex-wrap",
              attrs: { id: "form-validation" }
            },
            _vm._l(_vm.permissions, function(permission, key) {
              return _c("div", { staticClass: "preview w-full md:w-1/3" }, [
                _c("input", {
                  staticClass:
                    "input flex-wrap flex-none border border-gray-500 mt-1",
                  attrs: { name: "permissions[]", type: "checkbox" },
                  on: {
                    change: function($event) {
                      return _vm.choosePermission($event, permission)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  domProps: { textContent: _vm._s(permission.label) }
                })
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c("div", { staticClass: "p-5" }, [
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
              [_vm._v("\n                        Submit\n                    ")]
            ),
            _vm._v(" "),
            _vm._m(3)
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
        _vm._v("\n            Create Role & Permission\n        ")
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
          _vm._v("\n                        Role\n                    ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "flex flex-col sm:flex-row items-center pl-5 border-b border-gray-200 dark:border-dark-5"
      },
      [
        _c("h2", { staticClass: "font-medium text-base mr-auto mb-5" }, [
          _vm._v("\n                        Permissions\n                    ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/admin/role" } }, [
      _c("button", { staticClass: "button bg-red-600 text-white" }, [
        _vm._v("Cancel")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/role/Add.vue":
/*!******************************************************!*\
  !*** ./resources/js/backend/components/role/Add.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_73334c38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=73334c38& */ "./resources/js/backend/components/role/Add.vue?vue&type=template&id=73334c38&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/role/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_73334c38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_73334c38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/role/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/role/Add.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/backend/components/role/Add.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/role/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/role/Add.vue?vue&type=template&id=73334c38&":
/*!*************************************************************************************!*\
  !*** ./resources/js/backend/components/role/Add.vue?vue&type=template&id=73334c38& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_73334c38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=73334c38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/role/Add.vue?vue&type=template&id=73334c38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_73334c38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_73334c38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);