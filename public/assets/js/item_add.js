(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item_add"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/item/Add.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/item/Add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_Add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category/Add */ "./resources/js/backend/components/item/category/Add.vue");
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
    itemCategoryAdd: _category_Add__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    "category": {
      type: Array,
      "default": []
    }
  },
  data: function data() {
    return {
      data: {
        category_id: '',
        name: '',
        unit: 'KG',
        description: '',
        sizeChart: [{
          label: '',
          weight: '',
          width: '',
          height: '',
          breath: ''
        }]
      },
      categories: this.category
    };
  },
  methods: {
    showCategoryForm: function showCategoryForm() {
      this.$modal.show('category-add');
    },
    updateCategory: function updateCategory(data) {
      this.categories.push({
        id: data.id,
        text: data.name
      });
    },
    addRow: function addRow() {
      if (this.data.sizeChart.length === 10) {
        this.$alertify.error("Only 10 Size Chart Can Be Added");
        return false;
      }

      this.data.sizeChart.push({
        label: '',
        weight: '',
        width: '',
        height: '',
        breath: ''
      });
    },
    removeRow: function removeRow(key) {
      this.data.sizeChart.splice(key, 1);
    },
    submit: function submit() {
      var _this = this;

      for (var input in this.data) {
        if (this.data[input] === '') {
          this.$alertify.error("".concat(input, " is required"));
          return false;
        }
      }

      if (this.data.sizeChart[0].label === '' || this.data.sizeChart[0].breath === '' || this.data.sizeChart[0].weight === '' || this.data.sizeChart[0].width === '' || this.data.sizeChart[0].height === '') {
        this.$alertify.error("Please Fill Size Chart Properly");
        return false;
      }

      axios.post('/admin/item', this.data).then(function () {
        _this.$alertify.success("Item Created Successfully!");

        setTimeout(function () {
          window.location.href = '/admin/item';
        }, 1000);
      })["catch"](function (err) {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/item/category/Add.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/item/category/Add.vue?vue&type=script&lang=js& ***!
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: {
        name: ''
      },
      submitting: false
    };
  },
  methods: {
    dismissModal: function dismissModal() {
      this.$modal.hide('category-add');
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

        _this.data.name = '';
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/item/Add.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/item/Add.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".select2 {\n  width: 100% !important;\n  padding-top: 4px;\n  border: 1px solid #e2e2e2;\n  border-radius: 7px;\n  padding-bottom: 4px;\n}\n.select2-container--default .select2-selection--single {\n  border: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/item/Add.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/item/Add.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/item/Add.vue?vue&type=style&index=0&lang=css&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/item/Add.vue?vue&type=template&id=0a8d59d5&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/item/Add.vue?vue&type=template&id=0a8d59d5& ***!
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
  return _c(
    "div",
    { staticClass: "content" },
    [
      _c("itemCategoryAdd", { on: { "category-added": _vm.updateCategory } }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "grid grid-cols-12 gap-6 mt-5" }, [
        _c("div", { staticClass: "intro-y col-span-12 lg:col-span-12" }, [
          _c("div", { staticClass: "intro-y box" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "p-5", attrs: { id: "form-validation" } },
              [
                _c("div", { staticClass: "preview" }, [
                  _c("div", { staticClass: "flex flex-wrap -mx-3 mb-4" }, [
                    _c(
                      "div",
                      { staticClass: "w-full md:w-1/2 px-3 mb-6 md:mb-0" },
                      [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-0"
                          },
                          [
                            _vm._v(
                              "\n                                    Item name\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.data.name,
                              expression: "data.name"
                            }
                          ],
                          staticClass: "cols-3 input w-full border mt-2",
                          attrs: {
                            type: "text",
                            name: "name",
                            id: "name",
                            placeholder: "Ex # Flex Box",
                            minlength: "2"
                          },
                          domProps: { value: _vm.data.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.data, "name", $event.target.value)
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
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
                              "\n                                    Unit\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.data.unit,
                                expression: "data.unit"
                              }
                            ],
                            staticClass:
                              "tail-select cols-3 w-full input input-sm border mr-2",
                            attrs: { name: "unit", id: "unit" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.data,
                                  "unit",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", [_vm._v("KG")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Gallon")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Liter")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Piece")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Crates")])
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-wrap -mx-3 mb-4" }, [
                    _c(
                      "div",
                      { staticClass: "w-full md:w-1/2 px-3 mb-6 md:mb-0" },
                      [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
                          },
                          [
                            _vm._v(
                              "\n                                    Item Category\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("select2", {
                          attrs: {
                            options: _vm.categories,
                            placeholder: "Please Select Category"
                          },
                          model: {
                            value: _vm.data.category_id,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "category_id", $$v)
                            },
                            expression: "data.category_id"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
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
                              "\n                                    Manage Category\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "button bg-theme-1 text-white cols-3 input border mt-2",
                            on: {
                              click: function($event) {
                                return _vm.showCategoryForm()
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    Add Category\n                                "
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                    _c("div", { staticClass: "w-full px-3 mt-4" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-0"
                        },
                        [
                          _vm._v(
                            "\n                                    Item Description\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.description,
                            expression: "data.description"
                          }
                        ],
                        staticClass:
                          "resize border w-full rounded focus:outline-none focus:shadow-outline",
                        attrs: { name: "address", id: "address", rows: "5" },
                        domProps: { value: _vm.data.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.data,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-wrap -mx-3 mb-4" }, [
                    _c("table", { staticClass: "table" }, [
                      _c("thead", [
                        _c("tr", [
                          _c("td", { attrs: { colspan: "3" } }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "button bg-theme-1 text-white cols-3 input border mt-2",
                                attrs: { type: "button" },
                                on: { click: _vm.addRow }
                              },
                              [
                                _vm._v(
                                  "\n                                            Add Size Chart\n                                        "
                                )
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.data.sizeChart, function(size, key) {
                          return _c("tr", [
                            _c(
                              "td",
                              { staticClass: "border-b whitespace-no-wrap" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: size.label,
                                      expression: "size.label"
                                    }
                                  ],
                                  staticClass:
                                    "cols-3 input w-full border mt-2",
                                  attrs: {
                                    type: "text",
                                    name: "label",
                                    placeholder: "Ex # Small",
                                    minlength: "2"
                                  },
                                  domProps: { value: size.label },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        size,
                                        "label",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "border-b whitespace-no-wrap" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: size.weight,
                                      expression: "size.weight"
                                    }
                                  ],
                                  staticClass:
                                    "cols-3 input w-full border mt-2",
                                  attrs: {
                                    type: "number",
                                    name: "weight",
                                    placeholder: "Ex # Weight - 23",
                                    minlength: "2"
                                  },
                                  domProps: { value: size.weight },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        size,
                                        "weight",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "border-b whitespace-no-wrap" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: size.width,
                                      expression: "size.width"
                                    }
                                  ],
                                  staticClass:
                                    "cols-3 input w-full border mt-2",
                                  attrs: {
                                    type: "number",
                                    name: "width",
                                    placeholder: "Ex # Width - 12",
                                    minlength: "2"
                                  },
                                  domProps: { value: size.width },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        size,
                                        "width",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "border-b whitespace-no-wrap" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: size.height,
                                      expression: "size.height"
                                    }
                                  ],
                                  staticClass:
                                    "cols-3 input w-full border mt-2",
                                  attrs: {
                                    type: "number",
                                    name: "height",
                                    placeholder: "Ex # Height - 2",
                                    minlength: "2"
                                  },
                                  domProps: { value: size.height },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        size,
                                        "height",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "border-b whitespace-no-wrap" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: size.breath,
                                      expression: "size.breath"
                                    }
                                  ],
                                  staticClass:
                                    "cols-3 input w-full border mt-2",
                                  attrs: {
                                    type: "number",
                                    name: "breath",
                                    placeholder: "Ex # Length 4",
                                    minlength: "2"
                                  },
                                  domProps: { value: size.breath },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        size,
                                        "breath",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "border-b whitespace-no-wrap" },
                              [
                                key > 0
                                  ? _c(
                                      "button",
                                      {
                                        staticClass:
                                          "button bg-red-600 text-white",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.removeRow(key)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "Remove\n                                        "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          ])
                        }),
                        0
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "button bg-theme-1 text-white mt-5",
                      on: { click: _vm.submit }
                    },
                    [_vm._v("Submit")]
                  ),
                  _vm._v(" "),
                  _vm._m(3)
                ])
              ]
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "intro-y flex items-center mt-8" }, [
      _c("h2", { staticClass: "text-lg font-medium mr-auto" }, [
        _vm._v("\n            Create Item\n        ")
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
        _c("h2", { staticClass: "flex-1 font-medium text-base mr-auto" }, [
          _vm._v("\n                        Item\n                    ")
        ]),
        _vm._v(" "),
        _c("h2", {
          staticClass: "flex-1 font-medium text-base mr-auto text-right"
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          { staticClass: "border-b-2 dark:border-dark-5 whitespace-no-wrap" },
          [_vm._v("Label")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "border-b-2 dark:border-dark-5 whitespace-no-wrap" },
          [_vm._v("Weight")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "border-b-2 dark:border-dark-5 whitespace-no-wrap" },
          [_vm._v("Width")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "border-b-2 dark:border-dark-5 whitespace-no-wrap" },
          [_vm._v("Height")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "border-b-2 dark:border-dark-5 whitespace-no-wrap" },
          [_vm._v("Length")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "border-b-2 dark:border-dark-5 whitespace-no-wrap" },
          [_vm._v("Action")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/admin/item" } }, [
      _c("button", { staticClass: "button bg-red-600 text-white" }, [
        _vm._v("Cancel")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/item/category/Add.vue?vue&type=template&id=4da93acc&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/item/category/Add.vue?vue&type=template&id=4da93acc& ***!
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
    { staticClass: "center", attrs: { name: "category-add", height: "auto" } },
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
                        value: _vm.data.name,
                        expression: "data.name"
                      }
                    ],
                    staticClass: "input w-full border mt-2 flex-1",
                    attrs: { type: "text", name: "name", id: "name" },
                    domProps: { value: _vm.data.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data, "name", $event.target.value)
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
                    staticClass: " button bg-theme-1 text-white mt-5",
                    domProps: {
                      textContent: _vm._s(
                        _vm.submitting ? "Submitting..." : "Submit"
                      )
                    },
                    on: { click: _vm.submit }
                  },
                  [_vm._v("\n                    Submit\n                ")]
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

/***/ "./resources/js/backend/components/item/Add.vue":
/*!******************************************************!*\
  !*** ./resources/js/backend/components/item/Add.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_0a8d59d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=0a8d59d5& */ "./resources/js/backend/components/item/Add.vue?vue&type=template&id=0a8d59d5&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/item/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&lang=css& */ "./resources/js/backend/components/item/Add.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_0a8d59d5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_0a8d59d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/item/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/item/Add.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/backend/components/item/Add.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/item/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/item/Add.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/backend/components/item/Add.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/item/Add.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/item/Add.vue?vue&type=template&id=0a8d59d5&":
/*!*************************************************************************************!*\
  !*** ./resources/js/backend/components/item/Add.vue?vue&type=template&id=0a8d59d5& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_0a8d59d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=0a8d59d5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/item/Add.vue?vue&type=template&id=0a8d59d5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_0a8d59d5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_0a8d59d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/components/item/category/Add.vue":
/*!***************************************************************!*\
  !*** ./resources/js/backend/components/item/category/Add.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_4da93acc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=4da93acc& */ "./resources/js/backend/components/item/category/Add.vue?vue&type=template&id=4da93acc&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/item/category/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_4da93acc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_4da93acc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/item/category/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/item/category/Add.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/backend/components/item/category/Add.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/item/category/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/item/category/Add.vue?vue&type=template&id=4da93acc&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/backend/components/item/category/Add.vue?vue&type=template&id=4da93acc& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_4da93acc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=4da93acc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/item/category/Add.vue?vue&type=template&id=4da93acc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_4da93acc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_4da93acc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);