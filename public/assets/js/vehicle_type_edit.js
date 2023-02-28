(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle_type_edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/driver/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/driver/Edit.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    'driver': {
      required: true
    },
    'vehicle': {
      type: Object,
      "default": []
    },
    'vehicle-types': {
      type: Array,
      "default": []
    },
    'countries': {
      type: Array,
      "default": []
    },
    'cities': {
      type: Array,
      "default": []
    },
    'areas': {
      type: Array,
      "default": []
    }
  },
  // props: ['driver', 'vehicle', 'vehicleTypes'],
  data: function data() {
    return {
      updating: false,
      data: {
        firstName: this.driver.firstName,
        lastName: this.driver.lastName,
        email: this.driver.email,
        phone: this.driver.phone,
        password: this.driver.password,
        picture: this.driver.picture,
        postal_code: this.driver.postal_code,
        country_id: this.driver.country_id,
        city_id: this.driver.city_id,
        area_id: this.driver.area_id,
        cnic: this.driver.cnic,
        address: this.driver.address,
        vehicle_type_id: this.vehicle.vehicle_type_id,
        vehicle_no: this.vehicle.vehicle_no,
        license_no: this.vehicle.license_no,
        vehicle_image: this.vehicle.vehicle_image,
        cnic_front_image: this.vehicle.cnic_front_image,
        cnic_back_image: this.vehicle.cnic_back_image,
        license_front_image: this.vehicle.license_front_image,
        license_back_image: this.vehicle.license_back_image,
        vehicle_reg_image: this.vehicle.vehicle_reg_image
      },
      required: {
        'name': "Name",
        'email': 'Email',
        'phone': 'Phone'
      }
    };
  },
  methods: {
    getFullUrl: function getFullUrl(src) {
      return "".concat(location.origin, "/storage/").concat(src);
    },
    fileSelected: function fileSelected(files) {
      this.data.picture = '';

      var _iterator = _createForOfIteratorHelper(files),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var file = _step.value;
          this.data.picture = file;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    vehiclePicture: function vehiclePicture(vehicleFiles) {
      this.data.vehicle_image = '';

      var _iterator2 = _createForOfIteratorHelper(vehicleFiles),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var vehicleFile = _step2.value;
          this.data.vehicle_image = vehicleFile;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    },
    cnicFront: function cnicFront(cincFiles) {
      this.data.cnic_front_image = '';

      var _iterator3 = _createForOfIteratorHelper(cincFiles),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var cincFile = _step3.value;
          this.data.cnic_front_image = cincFile;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    },
    cnicBack: function cnicBack(backFiles) {
      this.data.cnic_back_image = '';

      var _iterator4 = _createForOfIteratorHelper(backFiles),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var backFile = _step4.value;
          this.data.cnic_back_image = backFile;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    },
    licenseFront: function licenseFront(licenseFiles) {
      this.data.license_front_image = '';

      var _iterator5 = _createForOfIteratorHelper(licenseFiles),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var licenseFile = _step5.value;
          this.data.license_front_image = licenseFile;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    },
    licenseBack: function licenseBack(backLicenseFiles) {
      this.data.license_back_image = '';

      var _iterator6 = _createForOfIteratorHelper(backLicenseFiles),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var backLicenseFile = _step6.value;
          this.data.license_back_image = backLicenseFile;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    },
    vehicleRegImage: function vehicleRegImage(regFiles) {
      this.data.vehicle_reg_image = '';

      var _iterator7 = _createForOfIteratorHelper(regFiles),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var regFile = _step7.value;
          this.data.vehicle_reg_image = regFile;
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    },
    buildFormData: function buildFormData() {
      var formData = new FormData();
      formData.append('_method', 'put');
      formData.append('first_name', this.data.firstName);
      formData.append('last_name', this.data.lastName);
      formData.append('email', this.data.email);
      formData.append('phone', this.data.phone);
      formData.append('password', this.data.password);
      formData.append('picture', this.data.picture);
      formData.append('postal_code', this.data.postal_code);
      formData.append('country_id', this.data.country_id);
      formData.append('city_id', this.data.city_id);
      formData.append('cnic', this.data.cnic);
      formData.append('address', this.data.address);
      formData.append('vehicle_name', this.data.vehicle_name);
      formData.append('vehicle_type_id', this.data.vehicle_type_id);
      formData.append('vehicle_cc', this.data.vehicle_cc);
      formData.append('vehicle_no', this.data.vehicle_no);
      formData.append('license_no', this.data.license_no);
      formData.append('make', this.data.make);
      formData.append('model', this.data.model);
      formData.append('color', this.data.color);
      formData.append('year', this.data.year);
      formData.append('vehicle_image', this.data.vehicle_image);
      formData.append('cnic_front_image', this.data.cnic_front_image);
      formData.append('cnic_back_image', this.data.cnic_back_image);
      formData.append('license_front_image', this.data.license_front_image);
      formData.append('license_back_image', this.data.license_back_image);
      formData.append('vehicle_reg_image', this.data.vehicle_reg_image);
      return formData;
    },
    update: function update() {
      var _this = this;

      delete this.data.id;

      for (var input in this.required) {
        if (this.data[input] === '') {
          this.$alertify.error("".concat(this.required[input], " is required"));
          return false;
        }
      }

      if (this.data.password === '') {
        delete this.data.password;
      }

      this.updating = true;
      axios.post("/admin/driver/".concat(this.driver.id), this.buildFormData()).then(function () {
        _this.$alertify.success("Driver Updated Successfully!");

        setTimeout(function () {
          window.location.href = '/admin/driver';
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'vehicle_type': {
      required: true
    },
    'items': {
      type: Array,
      "default": []
    },
    'category': {
      type: Array,
      "default": []
    }
  },
  data: function data() {
    return {
      data: {
        vehicle_category_id: this.vehicle_type.vehicle_category_id,
        name: this.vehicle_type.name,
        width: this.vehicle_type.width,
        height: this.vehicle_type.height,
        breath: this.vehicle_type.breath,
        per_km: this.vehicle_type.per_km,
        per_min: this.vehicle_type.per_min,
        base_fare: this.vehicle_type.base_fare,
        base_waiting_time: this.vehicle_type.base_waiting_time,
        waiting_time_penalty: this.vehicle_type.waiting_time_penalty,
        base_distance: this.vehicle_type.base_distance,
        commission: this.vehicle_type.commission,
        description: this.vehicle_type.description,
        status: this.vehicle_type.status,
        areas: []
      }
    };
  },
  mounted: function mounted() {
    var _iterator = _createForOfIteratorHelper(this.vehicle_type.areas),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var area = _step.value;
        this.data.areas.push({
          area_id: area.area_id,
          area_per_km: area.area_per_km,
          area_per_min: area.area_per_min,
          price: area.price
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
  methods: {
    addRow: function addRow() {
      if (this.data.areas.length === 4) {
        this.$alertify.error("Only 4 Area Can Be Added");
        return false;
      }

      this.data.areas.push({
        area_id: '',
        area_per_km: '',
        area_per_min: '',
        price: ''
      });
    },
    removeRow: function removeRow(key) {
      this.data.areas.splice(key, 1);
    },
    submit: function submit() {
      var _this = this;

      for (var input in this.data) {
        if (this.data[input] === '') {
          this.$alertify.error("".concat(input, " is required"));
          return false;
        }
      }

      axios.put("/admin/vehicle_type/".concat(this.vehicle_type.id), this.data).then(function () {
        _this.$alertify.success("Commercial Type Updated Successfully!");

        setTimeout(function () {
          window.location.href = '/admin/vehicle_type';
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/driver/Edit.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/driver/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".select2 {\n  width: 100% !important;\n  padding-top: 4px;\n  border: 1px solid #e2e2e2;\n  border-radius: 7px;\n  padding-bottom: 4px;\n}\n.select2-container--default .select2-selection--single {\n  border: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".select2 {\n  width: 100% !important;\n  padding-top: 4px;\n  border: 1px solid #e2e2e2;\n  border-radius: 7px;\n  padding-bottom: 4px;\n  margin-top: 8px;\n}\n.select2-container--default .select2-selection--single {\n  border: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/driver/Edit.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/driver/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/driver/Edit.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/driver/Edit.vue?vue&type=template&id=67884091&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/driver/Edit.vue?vue&type=template&id=67884091& ***!
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
          _c(
            "div",
            { staticClass: "py-2 px-5", attrs: { id: "form-validation" } },
            [
              _c("div", { staticClass: "preview" }, [
                _c("div", { staticClass: "flex flex-wrap -mx-3 mb-2" }, [
                  _c(
                    "div",
                    { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" },
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        },
                        [
                          _vm._v(
                            "\n                                    First Name\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.firstName,
                            expression: "data.firstName"
                          }
                        ],
                        staticClass: "cols-3 input w-full border mt-2",
                        attrs: {
                          type: "text",
                          name: "first_name",
                          id: "first_name",
                          placeholder: "Enter First Name",
                          minlength: "2"
                        },
                        domProps: { value: _vm.data.firstName },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "firstName", $event.target.value)
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" },
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        },
                        [
                          _vm._v(
                            "\n                                    Last Name\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.lastName,
                            expression: "data.lastName"
                          }
                        ],
                        staticClass: "cols-3 input w-full border mt-2",
                        attrs: {
                          type: "text",
                          name: "last_name",
                          id: "last_name",
                          placeholder: "Enter Last Name",
                          minlength: "2"
                        },
                        domProps: { value: _vm.data.lastName },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "lastName", $event.target.value)
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" },
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        },
                        [
                          _vm._v(
                            "\n                                    Email\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.email,
                            expression: "data.email"
                          }
                        ],
                        staticClass: "cols-3 input w-full border mt-2",
                        attrs: {
                          type: "email",
                          name: "email",
                          id: "email",
                          placeholder: "Please Enter Your Email",
                          minlength: "2"
                        },
                        domProps: { value: _vm.data.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "email", $event.target.value)
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-4" },
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        },
                        [
                          _vm._v(
                            "\n                                    Phone No # (92-333-1234567)\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "+92-###-#######",
                            expression: "'+92-###-#######'"
                          },
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.phone,
                            expression: "data.phone"
                          }
                        ],
                        staticClass: "cols-3 input w-full border mt-2",
                        attrs: {
                          type: "text",
                          name: "phone",
                          id: "phone",
                          placeholder: "Ex # +92-000-0000000",
                          minlength: "2",
                          maxlength: "15",
                          pattern: "[0-9]{4}-[0-9]{7}"
                        },
                        domProps: { value: _vm.data.phone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "phone", $event.target.value)
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-full md:w-1/3 px-3 mt-4 mb-6 md:mb-0" },
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        },
                        [
                          _vm._v(
                            "\n                                    Postal Code\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.postal_code,
                            expression: "data.postal_code"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "#####",
                            expression: "'#####'"
                          }
                        ],
                        staticClass: "cols-3 input w-full border mt-2",
                        attrs: {
                          type: "text",
                          name: "postal_code",
                          placeholder: "75600",
                          minlength: "2",
                          maxlength: "5"
                        },
                        domProps: { value: _vm.data.postal_code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.data,
                              "postal_code",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-full md:w-1/3 px-3 mt-4 mb-6 md:mb-0" },
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        },
                        [
                          _vm._v(
                            "\n                                    Cnic # (42000-0000000-0)\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.cnic,
                            expression: "data.cnic"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "#####-#######-#",
                            expression: "'#####-#######-#'"
                          }
                        ],
                        staticClass: "cols-3 input w-full border mt-2",
                        attrs: {
                          type: "text",
                          name: "cnic",
                          id: "cnic",
                          placeholder: "EX # 42101-8909877-2",
                          minlength: "2",
                          maxlength: "15"
                        },
                        domProps: { value: _vm.data.cnic },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "cnic", $event.target.value)
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-full md:w-1/3 px-3 mb-6 mt-4 md:mb-0" },
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
                        },
                        [
                          _vm._v(
                            "\n                                    Country\n                                "
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
                              value: _vm.data.country_id,
                              expression: "data.country_id"
                            }
                          ],
                          staticClass:
                            "tail-select cols-3 w-full mt-2 input input-sm border mr-2",
                          attrs: {
                            "data-search": "true",
                            name: "country",
                            id: "country"
                          },
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
                                "country_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.countries, function(country) {
                          return _c(
                            "option",
                            { domProps: { value: country.id } },
                            [
                              _vm._v(
                                _vm._s(country.title) +
                                  "\n                                    "
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-full md:w-1/3 px-3 mb-6 mt-4 md:mb-0" },
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
                        },
                        [
                          _vm._v(
                            "\n                                    City\n                                "
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
                              value: _vm.data.city_id,
                              expression: "data.city_id"
                            }
                          ],
                          staticClass:
                            "tail-select cols-3 w-full mt-2 input input-sm border mr-2",
                          attrs: {
                            "data-search": "true",
                            name: "city_id",
                            id: "city_id"
                          },
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
                                "city_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.cities, function(city) {
                          return _c(
                            "option",
                            { domProps: { value: city.id } },
                            [_vm._v(_vm._s(city.title))]
                          )
                        }),
                        0
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-full md:w-1/3 px-3 mb-6 mt-4 md:mb-0" },
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
                        },
                        [
                          _vm._v(
                            "\n                                    Areas\n                                "
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
                              value: _vm.data.area_id,
                              expression: "data.area_id"
                            }
                          ],
                          staticClass:
                            "tail-select cols-3 w-full mt-2 input input-sm border mr-2",
                          attrs: {
                            "data-search": "true",
                            name: "area_id",
                            id: "area_id"
                          },
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
                                "area_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.areas, function(area) {
                          return _c(
                            "option",
                            { domProps: { value: area.id } },
                            [_vm._v(_vm._s(area.title))]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
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
                            "\n                                    Picture\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("file-upload", { on: { upload: _vm.fileSelected } })
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
                            "\n                                    Driver Picture\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "img-fluid",
                        staticStyle: { height: "200px", width: "460px" },
                        attrs: {
                          src: _vm.getFullUrl(_vm.data.picture),
                          alt: "Driver Documents"
                        }
                      })
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
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Address\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.address,
                          expression: "data.address"
                        }
                      ],
                      staticClass:
                        "resize border w-full rounded focus:outline-none focus:shadow-outline",
                      attrs: { name: "address", id: "address", rows: "5" },
                      domProps: { value: _vm.data.address },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.data, "address", $event.target.value)
                        }
                      }
                    })
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "p-5", attrs: { id: "form-2" } }, [
            _c("div", { staticClass: "preview" }, [
              _c("div", { staticClass: "flex flex-wrap -mx-3 mb-2" }, [
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/3 px-3 mb-6" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
                      },
                      [
                        _vm._v(
                          "\n                                    Commercial Type\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("select2", {
                      attrs: {
                        options: _vm.vehicleTypes,
                        placeholder: "Please Select Commercial Type"
                      },
                      model: {
                        value: _vm.data.vehicle_type_id,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "vehicle_type_id", $$v)
                        },
                        expression: "data.vehicle_type_id"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Vehicle Number\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.vehicle_no,
                          expression: "data.vehicle_no"
                        }
                      ],
                      staticClass: "cols-3 input w-full border mt-2",
                      attrs: {
                        type: "text",
                        name: "vehicle_no",
                        placeholder: "Ex # KHI-1234",
                        minlength: "2"
                      },
                      domProps: { value: _vm.data.vehicle_no },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.data, "vehicle_no", $event.target.value)
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    License No\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.license_no,
                          expression: "data.license_no"
                        }
                      ],
                      staticClass: "cols-3 input w-full border mt-2",
                      attrs: {
                        type: "text",
                        name: "license_no",
                        placeholder: "Ex # SAD-86684",
                        minlength: "2"
                      },
                      domProps: { value: _vm.data.license_no },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.data, "license_no", $event.target.value)
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/4 px-3 mb-6 mt-4 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Vehicle Image\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("file-upload", { on: { upload: _vm.vehiclePicture } })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/4 px-3 mb-6 mt-4 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Vehicle Image\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "img-fluid",
                      staticStyle: { height: "200px" },
                      attrs: {
                        src: _vm.getFullUrl(_vm.data.vehicle_image),
                        alt: "Driver Documents"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/4 px-3 mb-6 mt-4 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Cnic Front\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("file-upload", { on: { upload: _vm.cnicFront } })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/4 px-3 mb-6 mt-4 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Cnic Front\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "img-fluid",
                      staticStyle: { height: "200px" },
                      attrs: {
                        src: _vm.getFullUrl(_vm.data.cnic_front_image),
                        alt: "Driver Documents"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/4 px-3 mb-6 mt-4 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Cnic Back\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("file-upload", { on: { upload: _vm.cnicBack } })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/4 px-3 mb-6 mt-4 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Cnic Back\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "img-fluid",
                      staticStyle: { height: "200px" },
                      attrs: {
                        src: _vm.getFullUrl(_vm.data.cnic_back_image),
                        alt: "Driver Documents"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/4 px-3 mb-6 mt-4 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    License Front\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("file-upload", { on: { upload: _vm.licenseFront } })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/4 px-3 mb-6 mt-4 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    License Front\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "img-fluid",
                      staticStyle: { height: "200px" },
                      attrs: {
                        src: _vm.getFullUrl(_vm.data.license_front_image),
                        alt: "Driver Documents"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/4 px-3 mb-6 mt-4 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    License Back\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("file-upload", { on: { upload: _vm.licenseBack } })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/4 px-3 mb-6 mt-4 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    License Back\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "img-fluid",
                      staticStyle: { height: "200px" },
                      attrs: {
                        src: _vm.getFullUrl(_vm.data.license_back_image),
                        alt: "Driver Documents"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/4 px-3 mb-6 mt-4 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Vehicle Registration Image\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("file-upload", { on: { upload: _vm.vehicleRegImage } })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/4 px-3 mb-6 mt-4 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Vehicle Registration Image\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "img-fluid",
                      staticStyle: { height: "200px" },
                      attrs: {
                        src: _vm.getFullUrl(_vm.data.vehicle_reg_image),
                        alt: "Driver Documents"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("button", {
                staticClass: "button bg-theme-1 text-white mt-5",
                attrs: { disabled: _vm.updating },
                domProps: {
                  textContent: _vm._s(_vm.updating ? "Updating..." : "Update")
                },
                on: { click: _vm.update }
              }),
              _vm._v(" "),
              _vm._m(3)
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
        _vm._v("\n            Edit Driver\n        ")
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
          _vm._v(
            "\n                        Driver Information\n                    "
          )
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
          "flex flex-col sm:flex-row items-center py-2 px-5 border-b border-gray-200 dark:border-dark-5"
      },
      [
        _c("h2", { staticClass: "font-medium text-base mr-auto" }, [
          _vm._v(
            "\n                        Vehicle Information\n                    "
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/admin/driver" } }, [
      _c("button", { staticClass: "button bg-red-600 text-white" }, [
        _vm._v("Cancel")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=template&id=5dfe2a44&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=template&id=5dfe2a44& ***!
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
                  { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" },
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
                          value: _vm.data.name,
                          expression: "data.name"
                        }
                      ],
                      staticClass: "cols-3 input w-full border mt-2",
                      attrs: {
                        type: "text",
                        name: "name",
                        id: "name",
                        placeholder: "Enter Name",
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
                  { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Vehicle Category\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("select2", {
                      attrs: {
                        options: _vm.category,
                        placeholder: "Please Select Category"
                      },
                      model: {
                        value: _vm.data.vehicle_category_id,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "vehicle_category_id", $$v)
                        },
                        expression: "data.vehicle_category_id"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Per Km\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.per_km,
                          expression: "data.per_km"
                        }
                      ],
                      staticClass: "cols-3 input w-full border mt-2",
                      attrs: {
                        type: "number",
                        name: "per_km",
                        id: "per_km",
                        placeholder: "20 Per Km",
                        minlength: "2"
                      },
                      domProps: { value: _vm.data.per_km },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.data, "per_km", $event.target.value)
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide mt-4 text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Base Fare\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.base_fare,
                          expression: "data.base_fare"
                        }
                      ],
                      staticClass: "cols-3 input w-full border mt-2",
                      attrs: {
                        type: "number",
                        name: "base_fare",
                        id: "base_fare",
                        placeholder: "109",
                        minlength: "2"
                      },
                      domProps: { value: _vm.data.base_fare },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.data, "base_fare", $event.target.value)
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/3 mt-4 px-3 mb-6 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Width\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.width,
                          expression: "data.width"
                        }
                      ],
                      staticClass: "cols-3 input w-full border mt-2",
                      attrs: {
                        type: "text",
                        name: "width",
                        id: "width",
                        placeholder: "John Legend",
                        minlength: "2"
                      },
                      domProps: { value: _vm.data.width },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.data, "width", $event.target.value)
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/3 mt-4 px-3 mb-6 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Height\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.height,
                          expression: "data.height"
                        }
                      ],
                      staticClass: "cols-3 input w-full border mt-2",
                      attrs: {
                        type: "number",
                        name: "height",
                        id: "height",
                        placeholder: "20 Per Km",
                        minlength: "2"
                      },
                      domProps: { value: _vm.data.height },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.data, "height", $event.target.value)
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/3 px-3 mt-4 mb-6 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Breath\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.breath,
                          expression: "data.breath"
                        }
                      ],
                      staticClass: "cols-3 input w-full border mt-2",
                      attrs: {
                        type: "number",
                        name: "breath",
                        id: "breath",
                        placeholder: "10 Per Min",
                        minlength: "2"
                      },
                      domProps: { value: _vm.data.breath },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.data, "breath", $event.target.value)
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/3 px-3 mt-4 mb-6 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Base Distance\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.base_distance,
                          expression: "data.base_distance"
                        }
                      ],
                      staticClass: "cols-3 input w-full border mt-2",
                      attrs: {
                        type: "number",
                        name: "base_distance",
                        id: "base_distance",
                        placeholder: "40 Distance",
                        minlength: "2"
                      },
                      domProps: { value: _vm.data.base_distance },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.data,
                            "base_distance",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-1/3 px-3 mb-6 mt-4 md:mb-0" },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      },
                      [
                        _vm._v(
                          "\n                                    Commission (Percentage %)\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.commission,
                          expression: "data.commission"
                        }
                      ],
                      staticClass: "cols-3 input w-full border mt-2",
                      attrs: {
                        type: "number",
                        name: "commission",
                        id: "commission",
                        placeholder: "100",
                        minlength: "2"
                      },
                      domProps: { value: _vm.data.commission },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.data, "commission", $event.target.value)
                        }
                      }
                    })
                  ]
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
                          "\n                                    Base Waiting Time (In Minutes)\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.base_waiting_time,
                          expression: "data.base_waiting_time"
                        }
                      ],
                      staticClass: "cols-3 input w-full border mt-2",
                      attrs: {
                        type: "number",
                        name: "base_waiting_time",
                        id: "base_waiting_time",
                        placeholder: "30",
                        minlength: "2"
                      },
                      domProps: { value: _vm.data.base_waiting_time },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.data,
                            "base_waiting_time",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
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
                          "\n                                    Waiting Time Penalty\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.waiting_time_penalty,
                          expression: "data.waiting_time_penalty"
                        }
                      ],
                      staticClass: "cols-3 input w-full border mt-2",
                      attrs: {
                        type: "number",
                        name: "waiting_time_penalty",
                        id: "waiting_time_penalty",
                        placeholder: "112",
                        minlength: "2"
                      },
                      domProps: { value: _vm.data.waiting_time_penalty },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.data,
                            "waiting_time_penalty",
                            $event.target.value
                          )
                        }
                      }
                    })
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
                        "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    },
                    [
                      _vm._v(
                        "\n                                    Description\n                                "
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
                    attrs: {
                      rows: "5",
                      name: "description",
                      id: "description"
                    },
                    domProps: { value: _vm.data.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data, "description", $event.target.value)
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
                              "\n                                            Add Area\n                                        "
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
                    _vm._l(_vm.data.areas, function(area, key) {
                      return _c("tr", [
                        _c(
                          "td",
                          { staticClass: "border-b whitespace-no-wrap" },
                          [
                            _c("select2", {
                              attrs: {
                                options: _vm.items,
                                placeholder: "Please Select Area"
                              },
                              model: {
                                value: area.area_id,
                                callback: function($$v) {
                                  _vm.$set(area, "area_id", $$v)
                                },
                                expression: "area.area_id"
                              }
                            })
                          ],
                          1
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
                                  value: area.area_per_km,
                                  expression: "area.area_per_km"
                                }
                              ],
                              staticClass: "cols-3 input w-full border mt-2",
                              attrs: {
                                type: "number",
                                name: "name",
                                placeholder: "Ex # Box",
                                minlength: "2"
                              },
                              domProps: { value: area.area_per_km },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    area,
                                    "area_per_km",
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
                                  value: area.area_per_min,
                                  expression: "area.area_per_min"
                                }
                              ],
                              staticClass: "cols-3 input w-full border mt-2",
                              attrs: {
                                type: "number",
                                name: "name",
                                placeholder: "Ex # Box",
                                minlength: "2"
                              },
                              domProps: { value: area.area_per_min },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    area,
                                    "area_per_min",
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
                                  value: area.price,
                                  expression: "area.price"
                                }
                              ],
                              staticClass: "cols-3 input w-full border mt-2",
                              attrs: {
                                type: "number",
                                name: "name",
                                placeholder: "Ex # Box",
                                minlength: "2"
                              },
                              domProps: { value: area.price },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(area, "price", $event.target.value)
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
                                    staticClass: "button bg-red-600 text-white",
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
                [_vm._v("Update")]
              ),
              _vm._v(" "),
              _vm._m(3)
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
        _vm._v("\n            Edit Commercial Type\n        ")
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
          _vm._v(
            "\n                        Commercial Type\n                    "
          )
        ])
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
          [_vm._v("Area")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "border-b-2 dark:border-dark-5 whitespace-no-wrap" },
          [_vm._v("Area Per Km")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "border-b-2 dark:border-dark-5 whitespace-no-wrap" },
          [_vm._v("Area Per Min")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "border-b-2 dark:border-dark-5 whitespace-no-wrap" },
          [_vm._v("Price")]
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
    return _c("a", { attrs: { href: "/admin/vehicle_type" } }, [
      _c("button", { staticClass: "button bg-red-600 text-white" }, [
        _vm._v("Cancel")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/driver/Edit.vue":
/*!*********************************************************!*\
  !*** ./resources/js/backend/components/driver/Edit.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_67884091___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=67884091& */ "./resources/js/backend/components/driver/Edit.vue?vue&type=template&id=67884091&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/driver/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/backend/components/driver/Edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_67884091___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_67884091___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/driver/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/driver/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/backend/components/driver/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/driver/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/driver/Edit.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/backend/components/driver/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/driver/Edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/driver/Edit.vue?vue&type=template&id=67884091&":
/*!****************************************************************************************!*\
  !*** ./resources/js/backend/components/driver/Edit.vue?vue&type=template&id=67884091& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_67884091___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=67884091& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/driver/Edit.vue?vue&type=template&id=67884091&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_67884091___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_67884091___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/components/vehicle-type/Edit.vue":
/*!***************************************************************!*\
  !*** ./resources/js/backend/components/vehicle-type/Edit.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_5dfe2a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=5dfe2a44& */ "./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=template&id=5dfe2a44&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_5dfe2a44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_5dfe2a44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/vehicle-type/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=template&id=5dfe2a44&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=template&id=5dfe2a44& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5dfe2a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=5dfe2a44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/vehicle-type/Edit.vue?vue&type=template&id=5dfe2a44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5dfe2a44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5dfe2a44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);