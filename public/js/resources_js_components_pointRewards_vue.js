"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pointRewards_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pointRewards.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pointRewards.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "dashboard",
  data: function data() {
    var header = "เช็คอินทุกวันเพื่อรับ Points";
    return {
      header: header,
      user: this.$store.state.auth.user,
      check_point_day: 0,
      apiData: null,
      isButtonDisabled: false,
      check_day_point_recive: false,
      point_return: 0,
      first_day: 0,
      mid_day: 0,
      last_day: 0
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    updateProfile: 'auth/updateprofile'
  })), {}, {
    getUser: function getUser() {
      var _this = this;
      axios.get('/get_point_reward', {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem('token'))
        }
      }).then(function (response) {
        var spinBtn = document.getElementById("dailycheckin_btn");
        _this.check_point_day = response.data.check_point_day;
        _this.check_day_point_recive = response.data.check_day_point_recive;
        var d = document.getElementById("sp_" + parseInt(response.data.check_point_day + 1));
        console.log('00', "sp_" + parseInt(response.data.check_point_day + 1));
        _this.first_day = response.data.first_day;
        _this.mid_day = response.data.mid_day;
        _this.last_day = response.data.last_day;
        console.log('------', _this.check_point_day);
        if (_this.check_day_point_recive == false) {
          _this.isButtonDisabled = true;
          spinBtn.innerText = "แวะเข้ามาอีกพรุ่งนี้ รับเลย " + response.data.point_return + " coins";
        } else {
          _this.isButtonDisabled = false;
          d.className += " active";
        }
        document.getElementById('dailycheckin_btn').dataset.inactive = _this.isButtonDisabled;
        console.log('------', _this.check_day_point_recive);
      });
    },
    getPoint: function getPoint(event) {
      var _this2 = this;
      // ตั้งค่ารางวัลอยู่ที่ DB settings (วันแรก : first_day , ช่วงหลังวันแรกและก่อนวันสุดท้าย mid_day, วันสุดท้าย : last_day)
      axios.get('/getPoint', {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem('token'))
        }
      }).then(function (response) {
        _this2.apiData = response.data;
        _this2.isButtonDisabled = true;
        if (response.data.success == true) {
          _this2.updateProfile();
          var spinBtn = document.getElementById("dailycheckin_btn");
          spinBtn.innerText = "แวะเข้ามาอีกพรุ่งนี้ รับเลย " + response.data.next_point + " coins";
          document.getElementById("my_point_old").innerHTML = '';
          document.getElementById("my_point_old").innerHTML = response.data.last_point;
          document.getElementById('dailycheckin_btn').dataset.inactive = _this2.isButtonDisabled;
        } else {
          alert(response.data.msg);
        }
      });
    }
  }),
  created: function created() {
    this.getUser();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pointRewards.vue?vue&type=template&id=79c2cd3f&lang=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pointRewards.vue?vue&type=template&id=79c2cd3f&lang=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  style: {
    "color": "#fff"
  }
};
var _hoisted_2 = {
  "class": "ps-section__content"
};
var _hoisted_3 = {
  "class": "card-yello text-center"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-white"
}, "Cavia168 Point Rewards", -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "h-30",
  src: "/img/coin.png"
}, null, -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "text-white",
  id: "my_point_old"
};
var _hoisted_8 = {
  "class": "card-wh"
};
var _hoisted_9 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_10 = ["id"];
var _hoisted_11 = {
  key: 0,
  "class": "pcmall-point"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/img/coin.png",
  "class": "chakra-coin mt-10"
}, null, -1 /* HOISTED */);
var _hoisted_13 = {
  key: 1,
  "class": "pcmall-point"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/img/coin.png",
  "class": "chakra-coin mt-10"
}, null, -1 /* HOISTED */);
var _hoisted_15 = {
  key: 2,
  "class": "pcmall-point"
};
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/img/coin.png",
  "class": "chakra-coin mt-10"
}, null, -1 /* HOISTED */);
var _hoisted_17 = ["id"];
var _hoisted_18 = {
  key: 0,
  "class": "pcmall-point"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/img/coin.png",
  "class": "chakra-coin mt-10"
}, null, -1 /* HOISTED */);
var _hoisted_20 = {
  key: 1,
  "class": "pcmall-point"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/img/coin.png",
  "class": "chakra-coin mt-10"
}, null, -1 /* HOISTED */);
var _hoisted_22 = {
  key: 2,
  "class": "pcmall-point"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/img/coin.png",
  "class": "chakra-coin mt-10"
}, null, -1 /* HOISTED */);
var _hoisted_24 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.header), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.point), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(7, function (i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "pcmall",
      key: i
    }, [i <= $data.check_point_day ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 0,
      id: 'sp_' + i,
      "class": "pcmall-dailycheckin active"
    }, [i === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "+ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.first_day), 1 /* TEXT */)])) : i > 1 && i < 7 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "+ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.mid_day), 1 /* TEXT */)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "+ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.last_day), 1 /* TEXT */)])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "วันที่ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(i), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_10)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 1,
      id: 'sp_' + i,
      "class": "pcmall-dailycheckin"
    }, [i === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "+ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.first_day), 1 /* TEXT */)])) : i > 1 && i < 7 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, " + " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.mid_day), 1 /* TEXT */)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, " + " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.last_day), 1 /* TEXT */)])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "วันที่ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(i), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_17))]);
  }), 64 /* STABLE_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "pcmall-dailycheckin_btn",
    id: "dailycheckin_btn",
    "data-inactive": "true",
    disabled: $data.isButtonDisabled,
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.getPoint();
    })
  }, " เช็คอินทุกวันเพื่อรับ Point ", 8 /* PROPS */, _hoisted_24)])])])]);
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/components/pointRewards.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/pointRewards.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pointRewards_vue_vue_type_template_id_79c2cd3f_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointRewards.vue?vue&type=template&id=79c2cd3f&lang=true */ "./resources/js/components/pointRewards.vue?vue&type=template&id=79c2cd3f&lang=true");
/* harmony import */ var _pointRewards_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointRewards.vue?vue&type=script&lang=js */ "./resources/js/components/pointRewards.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_lucky_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_lucky_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_pointRewards_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_pointRewards_vue_vue_type_template_id_79c2cd3f_lang_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pointRewards.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pointRewards.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/pointRewards.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pointRewards_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pointRewards_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./pointRewards.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pointRewards.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pointRewards.vue?vue&type=template&id=79c2cd3f&lang=true":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/pointRewards.vue?vue&type=template&id=79c2cd3f&lang=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pointRewards_vue_vue_type_template_id_79c2cd3f_lang_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pointRewards_vue_vue_type_template_id_79c2cd3f_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./pointRewards.vue?vue&type=template&id=79c2cd3f&lang=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pointRewards.vue?vue&type=template&id=79c2cd3f&lang=true");


/***/ })

}]);