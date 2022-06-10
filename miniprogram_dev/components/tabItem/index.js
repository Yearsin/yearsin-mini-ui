module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Component({
  properties: {
    typeList: {
      type: Array,
      value: [{ type: '1', name: 'tab1', select: true, deptType: "0" }, { type: '2', name: 'tab2', select: false, deptType: '1' }, { type: '3', name: 'tab3', select: false, deptType: '2' }, { type: '4', name: 'tab4', select: false, deptType: '1' }, { type: '5', name: 'tab5', select: false, deptType: '2' }, { type: '6', name: 'tab6', select: false, deptType: '1' }, { type: '7', name: 'tab7', select: false, deptType: '2' }, { type: '8', name: 'tab8', select: false, deptType: '1' }, { type: '9', name: 'tab9', select: false, deptType: '2' }]
    }
  },
  data: {
    scrollLeft: 0
  },
  methods: {
    onButtonChange: function onButtonChange(e) {
      var list = this.data.typeList;
      var that = this;
      list.forEach(function (item) {
        if (item.type === e.currentTarget.dataset.type) {
          item.select = true;
        } else {
          item.select = false;
        }
      });
      that.setData({
        typeList: list
      });
      var query = wx.createSelectorQuery().in(that); //创建节点查询器
      query.select('#item-' + e.currentTarget.dataset.type).boundingClientRect(); //选择id='#item-' + selectedId的节点，获取节点位置信息的查询请求
      query.select('#scroll-view').boundingClientRect(); //获取滑块的位置信息
      query.select('#scroll-view').scrollOffset(); //获取页面滑动位置的查询请求
      query.exec(function (res) {
        // console.log(res[2].scrollLeft + res[0].left + res[0].width / 2 - res[1].width / 2)
        that.setData({
          scrollLeft: res[2].scrollLeft + res[0].left + res[0].width / 2 - res[1].width / 2
        });
      });
      this.triggerEvent('chooseType', e.currentTarget);
    }
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map