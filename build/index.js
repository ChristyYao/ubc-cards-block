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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.esm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmurhash2_32_gc);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.esm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e, m).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e, m).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        switch (d.constructor) {
          case Array:
            for (var c = 0, e = d.length; c < e; ++c) {
              T(d[c]);
            }

            break;

          case Function:
            S[A++] = d;
            break;

          case Boolean:
            Y = !!d | 0;
        }

    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 * React FontIconPicker
 * 
 * React Component to show a picker element to pick font-icons & svg
 * 
 * @author Swashata Ghosh <swashata@wpquark.com>
 * @version 1.2.0
 * @link https://github.com/fontIconPicker/react-fonticonpicker
 * @license MIT
 * 
 * Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 */
!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "react"),__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"),__webpack_require__(/*! react-dom */ "react-dom"),__webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js")):undefined}(window,function(e,t,r,n,a){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.flattenPossiblyCategorizedSource=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Array.isArray(e))return o(e);if(null!==t)return void 0!==e[t]?o(e[t]):[];var r=[],n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}({},e);return Object.keys(n).forEach(function(e){r=o(r).concat(o(n[e]))}),r},t.getPossibleCategories=function(e){return Array.isArray(e)?null:Object.keys(e)},t.convertToHex=function(e){return String.fromCodePoint(parseInt(e,10))},t.isArrayEqual=function(e,t){if(!Array.isArray(e)||!Array.isArray(t))return!1;var r=o(e);r.sort();var n=o(t);return n.sort(),JSON.stringify(r)===JSON.stringify(n)},t.getOffset=function(e){var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+r}},t.getSourceType=function(e){return null===e?"null":"object"!==n(e)||Array.isArray(e)?Array.isArray(e)?"array":n(e):"object"},t.InvalidSourceException=function(e,t){this.givenType=e,this.requiredType=t,this.message="Expected of type: ".concat(this.requiredType,", found: ").concat(this.givenType),this.toString=function(){return"Invalid Source Exception: ".concat(this.message)}},t.fuzzySearch=function(e,t){e=e.toLowerCase();var r=(t=t.toLowerCase()).length,n=e.length;if(n>r)return!1;if(n===r)return e===t;e:for(var a=0,o=0;a<n;a++){for(var l=e.codePointAt(a);o<r;)if(t.codePointAt(o++)===l)continue e;return!1}return!0},t.debounce=void 0,t.debounce=function(e,t){var r;return function(){var n=this,a=arguments;clearTimeout(r),r=setTimeout(function(){return e.apply(n,a)},t)}}},function(e,t){e.exports=r},,,function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(1)),a=r(6),o=u(r(0)),l=u(r(3)),i=r(2);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==c(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"syncPortalPosition",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.resetPortalPosition(),r.fixWindowOverflow()}}),Object.defineProperty(d(r),"fixWindowOverflow",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props.domRef.current.offsetWidth,t=r.props.domRef.current.offsetHeight,n=window,a=n.innerWidth,o=n.pageYOffset,l=document.documentElement.clientHeight,u=(0,i.getOffset)(r.props.domRef.current),c=u.left,s=u.top,f="self"===r.state.appendRoot?r.props.domRef.current:r.state.appendRoot,d=(0,i.getOffset)(f),p=r.props.btnRef.current,h=r.props.domRef.current,y=(0,i.getOffset)(p),b=getComputedStyle(p),g=(parseInt(b.borderTop,10)||0)+(parseInt(b.borderBottom,10)||0);if(c+e>a-20){var m=y.left+r.props.btnRef.current.offsetWidth-(e+d.left);m+d.left<0&&(m=10-d.left),h.style.left="".concat(m,"px")}t+s-o>l&&y.top-t>0&&("self"===r.state.appendRoot?h.style.top="-".concat(t-g,"px"):h.style.top="".concat(y.top+g-t,"px"))}}),r.state={},r.debouncedSyncPortalPosition=(0,i.debounce)(r.syncPortalPosition,250),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e){var r=t.calculateAppendAndClass(e.appendRoot);return{appendRoot:r.appendRoot,portalClasses:r.portalClasses}}},{key:"calculateAppendAndClass",value:function(e){var t="self",r=(0,l.default)({"rfipdropdown--portal":!1!==e});return!1!==e&&(t=document.querySelector(e)),{portalClasses:r,appendRoot:t}}}]),f(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.debouncedSyncPortalPosition),window.addEventListener("scroll",this.debouncedSyncPortalPosition),this.syncPortalPosition()}},{key:"componentDidUpdate",value:function(){this.syncPortalPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedSyncPortalPosition),window.removeEventListener("scroll",this.debouncedSyncPortalPosition)}},{key:"positionPortal",value:function(){var e=this.props.domRef.current.style.display;this.props.domRef.current.style.display="none";var t=this.props.btnRef.current,r=(0,i.getOffset)(t),n=(0,i.getOffset)(this.state.appendRoot),a=t.offsetHeight;this.props.domRef.current.style.left="".concat(r.left-n.left,"px"),this.props.domRef.current.style.top="".concat(r.top+a,"px"),this.props.domRef.current.style.display=e}},{key:"resetPortalPosition",value:function(){var e=this.props.domRef.current;"self"===this.state.appendRoot?e.style.top="":this.positionPortal()}},{key:"render",value:function(){var e=(0,l.default)(this.props.className,this.state.portalClasses),t=n.default.createElement("div",{className:e,ref:this.props.domRef},this.props.children);return"self"===this.state.appendRoot?t:(0,a.createPortal)(t,this.state.appendRoot)}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:o.default.oneOfType([o.default.bool,o.default.string]),children:o.default.node.isRequired,domRef:o.default.object.isRequired,btnRef:o.default.object.isRequired,className:o.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:!1}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(1)),a=i(r(0)),o=i(r(3)),l=r(2);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==u(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=r.props.currentPage,o=r.state.totalPage;null!==n?"next"===n?a+=1:a-=1:a=parseInt(e.target.value,10)-1,a<0&&(a=0),a>o-1&&(a=o-1),t=a+1,null===n&&Number.isNaN(a)&&(a=0,t=""),r.setState({viewPage:t}),r.props.handleChangePage(a)}}),Object.defineProperty(d(r),"handlePageKeyBoard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangePage({},t)}}),Object.defineProperty(d(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.props.handleChangeValue(e)}}),Object.defineProperty(d(r),"handleValueKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangeValue(t)}}),r.state={viewPage:r.props.currentPage+1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n=t.getCategoryFilteredState(e.currentCategory,e.categories,e.icons),a=t.getCategoryFilteredState(e.currentCategory,e.categories,null===e.search?e.icons:e.search),o=t.getActiveIcons(n,a,e.currentSearch),l=o.activeIcons,i=o.activeTitles,u=e.currentPage,c=e.iconsPerPage,s={iconView:t.getCurrentViewIcons(l,c,u),titleView:t.getCurrentViewIcons(i,c,u),totalPage:Math.ceil(l.length/c)};return""!==r.viewPage&&(s.viewPage=e.currentPage+1),s}},{key:"getActiveIcons",value:function(e,t,r){var n=c(e),a=c(t);if(""===r||null===r)return{activeIcons:n,activeTitles:a};var o=[],i=[];return n.forEach(function(e,n){(0,l.fuzzySearch)(r,t[n])&&(o.push(e),i.push(t[n]))}),{activeIcons:o,activeTitles:i}}},{key:"getCategoryFilteredState",value:function(e,t,r){var n=null,a=(0,l.getSourceType)(r);if(Array.isArray(t)){if("object"!==a)throw new l.InvalidSourceException(a,"object")}else if("array"!==a)throw new l.InvalidSourceException(a,"array");return 0!==e&&Array.isArray(t)&&(n=t[e]||null),(0,l.flattenPossiblyCategorizedSource)(r,n)}},{key:"getCurrentViewIcons",value:function(e,t,r){var n=r*t,a=(r+1)*t;return e.slice(n,a)}}]),f(t,[{key:"renderPager",value:function(){var e=this;if(this.state.totalPage<1)return null;var t=this.props.currentPage>0?n.default.createElement("span",{className:"rfipicons__left",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"prev")},onClick:function(t){return e.handleChangePage(t,"prev")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Left"},n.default.createElement("i",{className:"fipicon-angle-left"}))):null,r=this.props.currentPage<this.state.totalPage-1?n.default.createElement("span",{className:"rfipicons__right",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"next")},onClick:function(t){return e.handleChangePage(t,"next")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Right"},n.default.createElement("i",{className:"fipicon-angle-right"}))):null;return n.default.createElement("div",{className:"rfipicons__pager"},n.default.createElement("div",{className:"rfipicons__num"},n.default.createElement("input",{value:this.state.viewPage,onChange:this.handleChangePage,className:"rfipicons__cp",type:"tel",min:1}),n.default.createElement("span",{className:"rfipicons__sp"},"/"),n.default.createElement("span",{className:"rfipicons__tp"},this.state.totalPage)),n.default.createElement("div",{className:"rfipicons__arrow"},t,r))}},{key:"renderIconView",value:function(){var e=this;return this.state.totalPage>0?this.state.iconView.map(function(t,r){var a=(0,o.default)("rfipicons__icon",{"rfipicons__icon--selected":e.props.value===t||Array.isArray(e.props.value)&&e.props.value.includes(t)});return n.default.createElement("span",{className:a,key:t,title:e.state.titleView[r]},n.default.createElement("span",{className:"rfipicons__ibox",tabIndex:0,role:"button",onClick:function(){return e.handleChangeValue(t)},onKeyDown:function(r){return e.handleValueKeyboard(r,t)}},e.props.renderIcon(t)))}):n.default.createElement("span",{className:"rfipicons__icon--error"},n.default.createElement("span",{className:"rfipicons__ibox--error"},this.props.noIconPlaceholder))}},{key:"render",value:function(){return n.default.createElement("div",{className:"rfipicons"},this.renderPager(),n.default.createElement("div",{className:"rfipicons__selector"},this.renderIconView()))}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{categories:a.default.arrayOf(a.default.string),currentCategory:a.default.number,isMulti:a.default.bool.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,currentSearch:a.default.string.isRequired,handleChangeValue:a.default.func.isRequired,currentPage:a.default.number.isRequired,iconsPerPage:a.default.number.isRequired,handleChangePage:a.default.func.isRequired,renderIcon:a.default.func.isRequired,noIconPlaceholder:a.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{categories:null,currentCategory:null,search:null}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return n.default.createElement("div",{className:"rfipsearch"},n.default.createElement("input",{type:"text",className:"rfipsearch__input",value:e.value,onChange:e.handleSearch,placeholder:e.placeholder}))};l.propTypes={handleSearch:a.default.func.isRequired,value:a.default.string.isRequired,placeholder:a.default.string.isRequired};var i=l;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipcategory"},n.default.createElement("select",{className:"rfipcategory__select",onChange:this.props.handleCategory,value:this.props.value},this.props.categories.map(function(e,t){return n.default.createElement("option",{className:"rfipcategory__select__option",key:e,value:t},e)})),n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"}))}}])&&i(r.prototype,a),t}();Object.defineProperty(u,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{handleCategory:a.default.func.isRequired,value:a.default.number.isRequired,categories:a.default.arrayOf(a.default.string).isRequired}});var c=u;t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(1)),a=c(r(0)),o=c(r(10)),l=c(r(9)),i=c(r(8)),u=r(2);function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==s(n)&&"function"!=typeof n?p(this):n,Object.defineProperty(p(r),"handleCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=parseInt(e.target.value,10);Number.isNaN(t)&&(t=0),r.props.handleChangeCategory(t),r.props.handleChangePage(0)}}),Object.defineProperty(p(r),"handleSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target.value;r.props.handleChangeSearch(t)}}),r.state={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),d(t,null,[{key:"getDerivedStateFromProps",value:function(e){var t=(0,u.getPossibleCategories)(e.icons);return null!==t&&(t=[e.allCatPlaceholder].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t))),{categories:t,searchString:e.currentSearch}}}]),d(t,[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipdropdown__selector"},this.props.showSearch?n.default.createElement(l.default,{handleSearch:this.handleSearch,value:this.state.searchString,placeholder:this.props.searchPlaceholder}):null,this.props.showCategory&&this.state.categories&&this.state.categories.length?n.default.createElement(o.default,{handleCategory:this.handleCategory,value:this.props.currentCategory,categories:this.state.categories}):null,n.default.createElement(i.default,{categories:this.state.categories,currentCategory:this.props.currentCategory,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,value:this.props.value,currentSearch:this.props.currentSearch,handleChangeValue:this.props.handleChangeValue,currentPage:this.props.currentPage,iconsPerPage:this.props.iconsPerPage,handleChangePage:this.props.handleChangePage,renderIcon:this.props.renderIcon,noIconPlaceholder:this.props.noIconPlaceholder}))}}]),t}();Object.defineProperty(h,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.any)]).isRequired,currentCategory:a.default.number.isRequired,currentPage:a.default.number.isRequired,currentSearch:a.default.string.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.object,a.default.arrayOf(a.default.string)]),showCategory:a.default.bool.isRequired,showSearch:a.default.bool.isRequired,iconsPerPage:a.default.number.isRequired,allCatPlaceholder:a.default.string.isRequired,searchPlaceholder:a.default.string.isRequired,noIconPlaceholder:a.default.string.isRequired,renderIcon:a.default.func.isRequired,handleChangeValue:a.default.func.isRequired,handleChangeCategory:a.default.func.isRequired,handleChangePage:a.default.func.isRequired,handleChangeSearch:a.default.func.isRequired}}),Object.defineProperty(h,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null}});var y=h;t.default=y},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(1)),a=l(r(0)),o=l(r(3));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){function t(){var e,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return s(a,(r=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),Object.defineProperty(f(a),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(){a.props.onClick()}}),Object.defineProperty(f(a),"handleKeyDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){32!==e.keyCode&&13!==e.keyCode||a.props.onClick()}}),Object.defineProperty(f(a),"handleDelete",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){e.stopPropagation(),a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"handleDeleteKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){32!==e.keyCode&&13!==e.keyCode||a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"renderEmptyIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(){return n.default.createElement("span",{className:"rfipbtn__icon--empty"},a.props.noSelectedPlaceholder)}}),r))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"renderIcon",value:function(e){var t=this;return""===e||null===e||void 0===e?this.renderEmptyIcon():n.default.createElement("span",{className:"rfipbtn__icon",key:e},n.default.createElement("span",{className:"rfipbtn__elm"},this.props.renderIcon(e)),n.default.createElement("span",{className:"rfipbtn__del",onClick:function(r){return t.handleDelete(r,e)},onKeyDown:function(r){return t.handleDeleteKeyboard(r,e)},tabIndex:0,role:"button"},"×"))}},{key:"renderCurrentIcons",value:function(){var e=this;return this.props.isMulti?this.props.value.length?this.props.value.map(function(t){return e.renderIcon(t)}):this.renderEmptyIcon():this.renderIcon(this.props.value)}},{key:"render",value:function(){var e={onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0},t=(0,o.default)("rfipbtn__button","rfipbtn__button--".concat(this.props.isOpen?"open":"close")),r=(0,o.default)(this.props.className);return n.default.createElement("div",u({className:r,ref:this.props.domRef},e),n.default.createElement("div",{className:"rfipbtn__current"},this.renderCurrentIcons()),n.default.createElement("div",{className:t},n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"})))}}])&&c(r.prototype,a),t}();Object.defineProperty(d,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{className:a.default.string.isRequired,isOpen:a.default.bool.isRequired,onClick:a.default.func.isRequired,domRef:a.default.object.isRequired,isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,renderIcon:a.default.func.isRequired,handleDeleteValue:a.default.func.isRequired,noSelectedPlaceholder:a.default.string.isRequired}});var p=d;t.default=p},function(e,t){e.exports=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(1)),a=f(r(0)),o=f(r(3)),l=r(13),i=f(r(12)),u=f(r(11)),c=f(r(7)),s=r(2);function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&y(e.prototype,t),r&&y(e,r),e}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=[],v="",P=function(e){function t(e){var r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!a||"object"!==d(a)&&"function"!=typeof a?g(this):a,Object.defineProperty(g(r),"handleOuterClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target;r.isClickWithin(t)||r.closeDropdown()}}),Object.defineProperty(g(r),"handleEscapeKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e){27===e.keyCode&&r.closeDropdown()}}),Object.defineProperty(g(r),"isClickWithin",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return r.fipButtonRef.current.contains(e)||r.fipDropDownRef.current&&r.fipDropDownRef.current.contains(e)}}),Object.defineProperty(g(r),"handleToggle",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.setState(function(e){return r.handleDropDown(!e.isOpen,!1)})}}),Object.defineProperty(g(r),"closeDropdown",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.handleDropDown(!1)}}),Object.defineProperty(g(r),"handleDropDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a={isOpen:e};return a.elemClass=t.getDerivedClassName("rfip",r.props.theme,r.props.isMulti,e),a.btnClass=t.getDerivedClassName("rfipbtn",r.props.theme,r.props.isMulti,e),a.ddClass=t.getDerivedClassName("rfipdropdown",r.props.theme,r.props.isMulti,e),n&&r.setState(a),a}}),Object.defineProperty(g(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t;r.props.isMulti?(t=p(r.state.value)).includes(e)?(t=t.filter(function(t){return t!==e})).length||(t=m):t.push(e):t=e===r.state.value?v:e,r.setState({value:t,isOpen:!r.props.closeOnSelect}),r.props.onChange(t)}}),Object.defineProperty(g(r),"handleDeleteValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n;n=r.props.isMulti?r.state.value.filter(function(t){return t!==e}):t.getDerivedValue(n,r.props.isMulti),r.setState({value:n}),r.props.onChange(n)}}),Object.defineProperty(g(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentPage:e})}}),Object.defineProperty(g(r),"handleChangeCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentCategory:e,currentPage:0})}}),Object.defineProperty(g(r),"handleChangeSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentSearch:e,currentPage:0})}}),Object.defineProperty(g(r),"resetPortalStyle",{configurable:!0,enumerable:!0,writable:!0,value:function(e){["maxHeight","paddingTop","paddingBottom"].forEach(function(t){e.style[t]=null})}}),Object.defineProperty(g(r),"handlePortalEnter",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t);r.fipPortalComputedStyle={height:n.height,paddingTop:n.paddingTop,paddingBottom:n.paddingBottom},["maxHeight","paddingTop","paddingBottom"].forEach(function(e){t.style[e]="0px"})}}),Object.defineProperty(g(r),"handlePortalEntering",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight=r.fipPortalComputedStyle.height,t.style.paddingTop=r.fipPortalComputedStyle.paddingTop,t.style.paddingBottom=r.fipPortalComputedStyle.paddingBottom}}),Object.defineProperty(g(r),"handlePortalEntered",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t),r.props.showSearch&&void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&t.querySelector(".rfipsearch__input").focus()}}),Object.defineProperty(g(r),"handlePortalExit",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t).height;t.style.maxHeight=n}}),Object.defineProperty(g(r),"handlePortalExiting",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px"}}),Object.defineProperty(g(r),"renderIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if("function"==typeof r.props.renderFunc)return r.props.renderFunc(e);if("class"===r.props.renderUsing)return n.default.createElement("i",{className:e});var t=h({},r.props.renderUsing,r.props.convertHex?(0,s.convertToHex)(e):e);return n.default.createElement("i",t)}}),r.fipButtonRef=n.default.createRef(),r.fipDropDownRef=n.default.createRef(),r.state={currentCategory:0,currentPage:0,isOpen:!1,currentSearch:""},r.fipPortalComputedStyle=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),b(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n={};return n.elemClass=t.getDerivedClassName("rfip",e.theme,e.isMulti,r.isOpen),n.btnClass=t.getDerivedClassName("rfipbtn",e.theme,e.isMulti,r.isOpen),n.ddClass=t.getDerivedClassName("rfipdropdown",e.theme,e.isMulti,r.isOpen),n.value=t.getDerivedValue(e.value,e.isMulti),e.showCategory||(n.currentCategory=0,n.currentPage=0),e.showSearch||(n.currentSearch="",n.currentPage=0),n}},{key:"getDerivedClassName",value:function(e,t,r,n){return(0,o.default)(e,"".concat(e,"--").concat(t),h({},"".concat(e,"--multi"),r),"".concat(e,"--").concat(n?"open":"close"))}},{key:"getDerivedValue",value:function(e,t){var r=e;return t?r=Array.isArray(e)?p(e):m:"number"!=typeof e&&"string"!=typeof e&&(r=v),r}}]),b(t,[{key:"componentDidMount",value:function(){var e=this;["click"].forEach(function(t){document.addEventListener(t,e.handleOuterClick,!1)}),document.addEventListener("keydown",this.handleEscapeKeyboard,!1),this.props.onChange(this.state.value)}},{key:"componentWillUnmount",value:function(){var e=this;["click"].forEach(function(t){document.removeEventListener(t,e.handleOuterClick,!1)}),document.removeEventListener("keydown",this.handleEscapeKeyboard,!1)}},{key:"render",value:function(){var e={currentCategory:this.state.currentCategory,currentPage:this.state.currentPage,currentSearch:this.state.currentSearch,value:this.state.value,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,showCategory:this.props.showCategory,showSearch:this.props.showSearch,iconsPerPage:this.props.iconsPerPage,allCatPlaceholder:this.props.allCatPlaceholder,searchPlaceholder:this.props.searchPlaceholder,noIconPlaceholder:this.props.noIconPlaceholder,renderIcon:this.renderIcon,handleChangeValue:this.handleChangeValue,handleChangeCategory:this.handleChangeCategory,handleChangePage:this.handleChangePage,handleChangeSearch:this.handleChangeSearch};return n.default.createElement("div",{className:this.state.elemClass,ref:this.fipRef},n.default.createElement(i.default,{className:this.state.btnClass,isOpen:this.state.isOpen,onClick:this.handleToggle,domRef:this.fipButtonRef,isMulti:this.props.isMulti,value:this.state.value,renderIcon:this.renderIcon,handleDeleteValue:this.handleDeleteValue,noSelectedPlaceholder:this.props.noSelectedPlaceholder}),n.default.createElement(l.CSSTransition,{classNames:"fipappear",timeout:300,in:this.state.isOpen,unmountOnExit:!0,onEnter:this.handlePortalEnter,onEntering:this.handlePortalEntering,onEntered:this.handlePortalEntered,onExit:this.handlePortalExit,onExiting:this.handlePortalExiting},n.default.createElement(c.default,{appendRoot:this.props.appendTo,domRef:this.fipDropDownRef,btnRef:this.fipButtonRef,className:this.state.ddClass},n.default.createElement(u.default,e))))}}]),t}();Object.defineProperty(P,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),iconsPerPage:a.default.number,theme:a.default.string,onChange:a.default.func.isRequired,showCategory:a.default.bool,showSearch:a.default.bool,value:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.number,a.default.string]),isMulti:a.default.bool,renderUsing:a.default.string,convertHex:a.default.bool,renderFunc:a.default.func,appendTo:a.default.oneOfType([a.default.bool,a.default.string]),allCatPlaceholder:a.default.string,searchPlaceholder:a.default.string,noIconPlaceholder:a.default.string,noSelectedPlaceholder:a.default.string,closeOnSelect:a.default.bool}}),Object.defineProperty(P,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null,iconsPerPage:20,theme:"default",showCategory:!0,showSearch:!0,value:null,isMulti:!1,renderUsing:"class",convertHex:!0,renderFunc:null,appendTo:!1,allCatPlaceholder:"Show from all",searchPlaceholder:"Search Icons",noIconPlaceholder:"No icons found",noSelectedPlaceholder:"Select icon",closeOnSelect:!1}}),Object.defineProperty(P,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"FontIconPicker"});var O=P;t.default=O},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(14))&&n.__esModule?n:{default:n}).default;t.default=a}]).default});


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/create-emotion/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/create-emotion/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.esm.js");
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.esm.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__);






var hyphenateRegex = /[A-Z]|^ms/g;
var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (styleName) {
  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  if (value == null || typeof value === 'boolean') {
    return '';
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
  !isNaN(value) && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    return oldProcessStyleValue(key, value);
  };
}

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'function':
        if (true) {
          console.error('Passing functions to cx is deprecated and will be removed in the next major version of Emotion.\n' + 'Please call the function before passing it to cx.');
        }

        toAdd = classnames([arg()]);
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};
var isBrowser = typeof document !== 'undefined';

/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side

// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function makeStyleTag(opts) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', opts.key || '');

  if (opts.nonce !== undefined) {
    tag.setAttribute('nonce', opts.nonce);
  }

  tag.appendChild(document.createTextNode('')) // $FlowFixMe
  ;
  (opts.container !== undefined ? opts.container : document.head).appendChild(tag);
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = "development" === 'production'; // the big drawback here is that the css won't be editable in devtools

    this.tags = [];
    this.ctr = 0;
    this.opts = options;
  }

  var _proto = StyleSheet.prototype;

  _proto.inject = function inject() {
    if (this.injected) {
      throw new Error('already injected!');
    }

    this.tags[0] = makeStyleTag(this.opts);
    this.injected = true;
  };

  _proto.speedy = function speedy(bool) {
    if (this.ctr !== 0) {
      // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})
      throw new Error("cannot change speedy now");
    }

    this.isSpeedy = !!bool;
  };

  _proto.insert = function insert(rule, sourceMap) {
    // this is the ultrafast version, works across browsers
    if (this.isSpeedy) {
      var tag = this.tags[this.tags.length - 1];
      var sheet = sheetForTag(tag);

      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn('illegal rule', rule); // eslint-disable-line no-console
        }
      }
    } else {
      var _tag = makeStyleTag(this.opts);

      this.tags.push(_tag);

      _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));
    }

    this.ctr++;

    if (this.ctr % 65000 === 0) {
      this.tags.push(makeStyleTag(this.opts));
    }
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0; // todo - look for remnants in document.styleSheets

    this.injected = false;
  };

  return StyleSheet;
}();

function createEmotion(context, options) {
  if (context.__SECRET_EMOTION__ !== undefined) {
    return context.__SECRET_EMOTION__;
  }

  if (options === undefined) options = {};
  var key = options.key || 'css';

  if (true) {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var current;

  function insertRule(rule) {
    current += rule;

    if (isBrowser) {
      sheet.insert(rule, currentSourceMap);
    }
  }

  var insertionPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default()(insertRule);
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var caches = {
    registered: {},
    inserted: {},
    nonce: options.nonce,
    key: key
  };
  var sheet = new StyleSheet(options);

  if (isBrowser) {
    // 🚀
    sheet.inject();
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](stylisOptions);
  stylis.use(options.stylisPlugins)(insertionPlugin);
  var currentSourceMap = '';

  function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
      return '';
    }

    switch (typeof interpolation) {
      case 'boolean':
        return '';

      case 'function':
        if (interpolation.__emotion_styles !== undefined) {
          var selector = interpolation.toString();

          if (selector === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          return selector;
        }

        if (this === undefined && "development" !== 'production') {
          console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        return handleInterpolation.call(this, this === undefined ? interpolation() : // $FlowFixMe
        interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);

      case 'object':
        return createStringFromObject.call(this, interpolation);

      default:
        var cached = caches.registered[interpolation];
        return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;
    }
  }

  var objectToStringCache = new WeakMap();

  function createStringFromObject(obj) {
    if (objectToStringCache.has(obj)) {
      // $FlowFixMe
      return objectToStringCache.get(obj);
    }

    var string = '';

    if (Array.isArray(obj)) {
      obj.forEach(function (interpolation) {
        string += handleInterpolation.call(this, interpolation, false);
      }, this);
    } else {
      Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] !== 'object') {
          if (caches.registered[obj[key]] !== undefined) {
            string += key + "{" + caches.registered[obj[key]] + "}";
          } else {
            string += processStyleName(key) + ":" + processStyleValue(key, obj[key]) + ";";
          }
        } else {
          if (key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {
            obj[key].forEach(function (value) {
              string += processStyleName(key) + ":" + processStyleValue(key, value) + ";";
            });
          } else {
            string += key + "{" + handleInterpolation.call(this, obj[key], false) + "}";
          }
        }
      }, this);
    }

    objectToStringCache.set(obj, string);
    return string;
  }

  var name;
  var stylesWithLabel;
  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;

  var createClassName = function createClassName(styles, identifierName) {
    return Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_2__["default"])(styles + identifierName) + identifierName;
  };

  if (true) {
    var oldCreateClassName = createClassName;
    var sourceMappingUrlPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;

    createClassName = function createClassName(styles, identifierName) {
      return oldCreateClassName(styles.replace(sourceMappingUrlPattern, function (sourceMap) {
        currentSourceMap = sourceMap;
        return '';
      }), identifierName);
    };
  }

  var createStyles = function createStyles(strings) {
    var stringMode = true;
    var styles = '';
    var identifierName = '';

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation.call(this, strings, false);
    } else {
      styles += strings[0];
    }

    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    interpolations.forEach(function (interpolation, i) {
      styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46 // .
      );

      if (stringMode === true && strings[i + 1] !== undefined) {
        styles += strings[i + 1];
      }
    }, this);
    stylesWithLabel = styles;
    styles = styles.replace(labelPattern, function (match, p1) {
      identifierName += "-" + p1;
      return '';
    });
    name = createClassName(styles, identifierName);
    return styles;
  };

  if (true) {
    var oldStylis = stylis;

    stylis = function stylis(selector, styles) {
      oldStylis(selector, styles);
      currentSourceMap = '';
    };
  }

  function insert(scope, styles) {
    if (caches.inserted[name] === undefined) {
      current = '';
      stylis(scope, styles);
      caches.inserted[name] = current;
    }
  }

  var css = function css() {
    var styles = createStyles.apply(this, arguments);
    var selector = key + "-" + name;

    if (caches.registered[selector] === undefined) {
      caches.registered[selector] = stylesWithLabel;
    }

    insert("." + selector, styles);
    return selector;
  };

  var keyframes = function keyframes() {
    var styles = createStyles.apply(this, arguments);
    var animation = "animation-" + name;
    insert('', "@keyframes " + animation + "{" + styles + "}");
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    var styles = createStyles.apply(this, arguments);
    insert('', styles);
  };

  function getRegisteredStyles(registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (caches.registered[className] !== undefined) {
        registeredStyles.push(className);
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }

  function merge(className, sourceMap) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css(registeredStyles, sourceMap);
  }

  function cx() {
    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classNames[_key2] = arguments[_key2];
    }

    return merge(classnames(classNames));
  }

  function hydrateSingleId(id) {
    caches.inserted[id] = true;
  }

  function hydrate(ids) {
    ids.forEach(hydrateSingleId);
  }

  function flush() {
    if (isBrowser) {
      sheet.flush();
      sheet.inject();
    }

    caches.inserted = {};
    caches.registered = {};
  }

  if (isBrowser) {
    var chunks = document.querySelectorAll("[data-emotion-" + key + "]");
    Array.prototype.forEach.call(chunks, function (node) {
      // $FlowFixMe
      sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]); // $FlowFixMe

      node.getAttribute("data-emotion-" + key).split(' ').forEach(hydrateSingleId);
    });
  }

  var emotion = {
    flush: flush,
    hydrate: hydrate,
    cx: cx,
    merge: merge,
    getRegisteredStyles: getRegisteredStyles,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    css: css,
    sheet: sheet,
    caches: caches
  };
  context.__SECRET_EMOTION__ = emotion;
  return emotion;
}

/* harmony default export */ __webpack_exports__["default"] = (createEmotion);


/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/emotion/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/emotion/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: flush, hydrate, cx, merge, getRegisteredStyles, injectGlobal, keyframes, css, sheet, caches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return cx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return sheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caches", function() { return caches; });
/* harmony import */ var create_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-emotion */ "./node_modules/create-emotion/dist/index.esm.js");


var context = typeof global !== 'undefined' ? global : {};

var _createEmotion = Object(create_emotion__WEBPACK_IMPORTED_MODULE_0__["default"])(context),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    caches = _createEmotion.caches;



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/raf/index.js":
/*!***********************************!*\
  !*** ./node_modules/raf/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js")
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-input-autosize/lib/AutosizeInput.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-input-autosize/lib/AutosizeInput.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'UNSAFE_componentWillReceiveProps',
		value: function UNSAFE_componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-select/dist/react-select.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/react-select/dist/react-select.esm.js ***!
  \************************************************************/
/*! exports provided: default, SelectBase, Async, makeAsyncSelect, AsyncCreatable, Creatable, makeCreatableSelect, createFilter, makeAnimated, components, mergeStyles, defaultTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBase", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return Async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncSelect", function() { return makeAsyncSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncCreatable", function() { return AsyncCreatable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creatable", function() { return Creatable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCreatableSelect", function() { return makeCreatableSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAnimated", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return mergeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return defaultTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_7__);









function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, cssKey, state, className) {
  var arr = [cssKey, className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (_typeof(value) === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      raf__WEBPACK_IMPORTED_MODULE_5___default()(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}

function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        scrollTo(scrollParent, scrollDown);
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, _defineProperty(_ref3, alignToControl(placement), '100%'), _defineProperty(_ref3, "backgroundColor", colors.neutral0), _defineProperty(_ref3, "borderRadius", borderRadius), _defineProperty(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), _defineProperty(_ref3, "marginBottom", spacing.menuGutter), _defineProperty(_ref3, "marginTop", spacing.menuGutter), _defineProperty(_ref3, "position", 'absolute'), _defineProperty(_ref3, "width", '100%'), _defineProperty(_ref3, "zIndex", 1), _ref3;
}; // NOTE: internal only

var MenuPlacer =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuPlacer, _Component);

  function MenuPlacer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MenuPlacer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuPlacer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPlacement", function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getUpdatedProps", function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _objectSpread({}, _this.props, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    });

    return _this;
  }

  _createClass(MenuPlacer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);

  return MenuPlacer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(MenuPlacer, "contextTypes", {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
});

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  var cn = cx(
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('menu', props)), {
    menu: true
  }, className);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: cn
  }, innerProps, {
    ref: innerRef
  }), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('menuList', props)), {
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('noOptionsMessage', props)), {
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('loadingMessage', props)), {
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal =
/*#__PURE__*/
function (_Component2) {
  _inherits(MenuPortal, _Component2);

  function MenuPortal() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, MenuPortal);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(MenuPortal)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      placement: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "getPortalPlacement", function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    });

    return _this2;
  }

  _createClass(MenuPortal, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        getPortalPlacement: this.getPortalPlacement
      };
    } // callback for occassions where the menu must "flip"

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          controlElement = _this$props2.controlElement,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === 'fixed'; // bail early if required elements aren't present

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset: offset,
        position: position,
        rect: rect
      }; // same wrapper element whether fixed or portalled

      var menuWrapper = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('menuPortal', state))
      }, children);
      return appendTo ? Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["createPortal"])(menuWrapper, appendTo) : menuWrapper;
    }
  }]);

  return MenuPortal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(MenuPortal, "childContextTypes", {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
});

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // Custom handling for React


    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
}

var diacritics = [{
  base: 'A',
  letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
}, {
  base: 'AA',
  letters: /[\uA732]/g
}, {
  base: 'AE',
  letters: /[\u00C6\u01FC\u01E2]/g
}, {
  base: 'AO',
  letters: /[\uA734]/g
}, {
  base: 'AU',
  letters: /[\uA736]/g
}, {
  base: 'AV',
  letters: /[\uA738\uA73A]/g
}, {
  base: 'AY',
  letters: /[\uA73C]/g
}, {
  base: 'B',
  letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
}, {
  base: 'C',
  letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
}, {
  base: 'D',
  letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
}, {
  base: 'DZ',
  letters: /[\u01F1\u01C4]/g
}, {
  base: 'Dz',
  letters: /[\u01F2\u01C5]/g
}, {
  base: 'E',
  letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
}, {
  base: 'F',
  letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
}, {
  base: 'G',
  letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
}, {
  base: 'H',
  letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
}, {
  base: 'I',
  letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
}, {
  base: 'J',
  letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
}, {
  base: 'K',
  letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
}, {
  base: 'L',
  letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
}, {
  base: 'LJ',
  letters: /[\u01C7]/g
}, {
  base: 'Lj',
  letters: /[\u01C8]/g
}, {
  base: 'M',
  letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
}, {
  base: 'N',
  letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
}, {
  base: 'NJ',
  letters: /[\u01CA]/g
}, {
  base: 'Nj',
  letters: /[\u01CB]/g
}, {
  base: 'O',
  letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
}, {
  base: 'OI',
  letters: /[\u01A2]/g
}, {
  base: 'OO',
  letters: /[\uA74E]/g
}, {
  base: 'OU',
  letters: /[\u0222]/g
}, {
  base: 'P',
  letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
}, {
  base: 'Q',
  letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
}, {
  base: 'R',
  letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
}, {
  base: 'S',
  letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
}, {
  base: 'T',
  letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
}, {
  base: 'TZ',
  letters: /[\uA728]/g
}, {
  base: 'U',
  letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
}, {
  base: 'V',
  letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
}, {
  base: 'VY',
  letters: /[\uA760]/g
}, {
  base: 'W',
  letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
}, {
  base: 'X',
  letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
}, {
  base: 'Y',
  letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
}, {
  base: 'Z',
  letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
}, {
  base: 'a',
  letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
}, {
  base: 'aa',
  letters: /[\uA733]/g
}, {
  base: 'ae',
  letters: /[\u00E6\u01FD\u01E3]/g
}, {
  base: 'ao',
  letters: /[\uA735]/g
}, {
  base: 'au',
  letters: /[\uA737]/g
}, {
  base: 'av',
  letters: /[\uA739\uA73B]/g
}, {
  base: 'ay',
  letters: /[\uA73D]/g
}, {
  base: 'b',
  letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
}, {
  base: 'c',
  letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
}, {
  base: 'd',
  letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
}, {
  base: 'dz',
  letters: /[\u01F3\u01C6]/g
}, {
  base: 'e',
  letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
}, {
  base: 'f',
  letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
}, {
  base: 'g',
  letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
}, {
  base: 'h',
  letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
}, {
  base: 'hv',
  letters: /[\u0195]/g
}, {
  base: 'i',
  letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
}, {
  base: 'j',
  letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
}, {
  base: 'k',
  letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
}, {
  base: 'l',
  letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
}, {
  base: 'lj',
  letters: /[\u01C9]/g
}, {
  base: 'm',
  letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
}, {
  base: 'n',
  letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
}, {
  base: 'nj',
  letters: /[\u01CC]/g
}, {
  base: 'o',
  letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
}, {
  base: 'oi',
  letters: /[\u01A3]/g
}, {
  base: 'ou',
  letters: /[\u0223]/g
}, {
  base: 'oo',
  letters: /[\uA74F]/g
}, {
  base: 'p',
  letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
}, {
  base: 'q',
  letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
}, {
  base: 'r',
  letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
}, {
  base: 's',
  letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
}, {
  base: 't',
  letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
}, {
  base: 'tz',
  letters: /[\uA729]/g
}, {
  base: 'u',
  letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
}, {
  base: 'v',
  letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
}, {
  base: 'vy',
  letters: /[\uA761]/g
}, {
  base: 'w',
  letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
}, {
  base: 'x',
  letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
}, {
  base: 'y',
  letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
}, {
  base: 'z',
  letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
}];
var stripDiacritics = function stripDiacritics(str) {
  for (var i = 0; i < diacritics.length; i++) {
    str = str.replace(diacritics[i].letters, diacritics[i].base);
  }

  return str;
};

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _objectSpread({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

var A11yText = function A11yText(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", _extends({
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])({
      label: 'a11yText',
      zIndex: 9999,
      border: 0,
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: 1,
      width: 1,
      position: 'absolute',
      overflow: 'hidden',
      padding: 0,
      whiteSpace: 'nowrap',
      backgroundColor: 'red',
      color: 'blue'
    })
  }, props));
};

var DummyInput =
/*#__PURE__*/
function (_Component) {
  _inherits(DummyInput, _Component);

  function DummyInput() {
    _classCallCheck(this, DummyInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(DummyInput).apply(this, arguments));
  }

  _createClass(DummyInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          inProp = _this$props.in,
          out = _this$props.out,
          onExited = _this$props.onExited,
          appear = _this$props.appear,
          enter = _this$props.enter,
          exit = _this$props.exit,
          innerRef = _this$props.innerRef,
          emotion = _this$props.emotion,
          props = _objectWithoutProperties(_this$props, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
        ref: innerRef
      }, props, {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])({
          label: 'dummyInput',
          // get rid of any default styles
          background: 0,
          border: 0,
          fontSize: 'inherit',
          outline: 0,
          padding: 0,
          // important! without `width` browsers won't allow focus
          width: 1,
          // remove cursor on desktop
          color: 'transparent',
          // remove cursor on mobile whilst maintaining "scroll into view" behaviour
          left: -100,
          opacity: 0,
          position: 'relative',
          transform: 'scale(0)'
        })
      }));
    }
  }]);

  return DummyInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var NodeResolver =
/*#__PURE__*/
function (_Component) {
  _inherits(NodeResolver, _Component);

  function NodeResolver() {
    _classCallCheck(this, NodeResolver);

    return _possibleConstructorReturn(this, _getPrototypeOf(NodeResolver).apply(this, arguments));
  }

  _createClass(NodeResolver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.innerRef(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.innerRef(null);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return NodeResolver;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var activeScrollLocks = 0;

var ScrollLock =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollLock, _Component);

  function ScrollLock() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScrollLock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScrollLock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "originalStyles", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "listenerOptions", {
      capture: false,
      passive: false
    });

    return _this;
  }

  _createClass(ScrollLock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!canUseDOM) return;
      var _this$props = this.props,
          accountForScrollbars = _this$props.accountForScrollbars,
          touchScrollTarget = _this$props.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style;

      if (accountForScrollbars) {
        // store any styles already applied to the body
        STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          _this2.originalStyles[key] = val;
        });
      } // apply the lock styles and padding if this is the first scroll lock


      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
        Object.keys(LOCK_STYLES).forEach(function (key) {
          var val = LOCK_STYLES[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });

        if (targetStyle) {
          targetStyle.paddingRight = "".concat(adjustedPadding, "px");
        }
      } // account for touch devices


      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      } // increment active scroll locks


      activeScrollLocks += 1;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (!canUseDOM) return;
      var _this$props2 = this.props,
          accountForScrollbars = _this$props2.accountForScrollbars,
          touchScrollTarget = _this$props2.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style; // safely decrement active scroll locks

      activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

      if (accountForScrollbars && activeScrollLocks < 1) {
        STYLE_KEYS.forEach(function (key) {
          var val = _this3.originalStyles[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      } // remove touch listeners


      if (target && isTouchDevice()) {
        target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ScrollLock;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(ScrollLock, "defaultProps", {
  accountForScrollbars: true
});

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
var ScrollBlock =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ScrollBlock, _PureComponent);

  function ScrollBlock() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScrollBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScrollBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      touchScrollTarget: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getScrollTarget", function (ref) {
      if (ref === _this.state.touchScrollTarget) return;

      _this.setState({
        touchScrollTarget: ref
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blurSelectInput", function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    });

    return _this;
  }

  _createClass(ScrollBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isEnabled = _this$props.isEnabled;
      var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

      if (!isEnabled) return children;
      /*
       * Div
       * ------------------------------
       * blocks scrolling on non-body elements behind the menu
        * NodeResolver
       * ------------------------------
       * we need a reference to the scrollable element to "unlock" scroll on
       * mobile devices
        * ScrollLock
       * ------------------------------
       * actually does the scroll locking
       */

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.blurSelectInput,
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])({
          position: 'fixed',
          left: 0,
          bottom: 0,
          right: 0,
          top: 0
        })
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NodeResolver, {
        innerRef: this.getScrollTarget
      }, children), touchScrollTarget ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollLock, {
        touchScrollTarget: touchScrollTarget
      }) : null);
    }
  }]);

  return ScrollBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var ScrollCaptor =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollCaptor, _Component);

  function ScrollCaptor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScrollCaptor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScrollCaptor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isBottom", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isTop", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollTarget", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "touchStart", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cancelScroll", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEventDelta", function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;
      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false; // reset bottom/top flags

      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }

      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      } // bottom limit


      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }

        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true; // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }

        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      } // cancel scroll


      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWheel", function (event) {
      _this.handleEventDelta(event, event.deltaY);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchStart", function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchMove", function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;

      _this.handleEventDelta(event, deltaY);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getScrollTarget", function (ref) {
      _this.scrollTarget = ref;
    });

    return _this;
  }

  _createClass(ScrollCaptor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListening(this.scrollTarget);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListening(this.scrollTarget);
    }
  }, {
    key: "startListening",
    value: function startListening(el) {
      // bail early if no scroll available
      if (!el) return;
      if (el.scrollHeight <= el.clientHeight) return; // all the if statements are to appease Flow 😢

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "stopListening",
    value: function stopListening(el) {
      // bail early if no scroll available
      if (el.scrollHeight <= el.clientHeight) return; // all the if statements are to appease Flow 😢

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NodeResolver, {
        innerRef: this.getScrollTarget
      }, this.props.children);
    }
  }]);

  return ScrollCaptor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var ScrollCaptorSwitch =
/*#__PURE__*/
function (_Component2) {
  _inherits(ScrollCaptorSwitch, _Component2);

  function ScrollCaptorSwitch() {
    _classCallCheck(this, ScrollCaptorSwitch);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollCaptorSwitch).apply(this, arguments));
  }

  _createClass(ScrollCaptorSwitch, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isEnabled = _this$props2.isEnabled,
          props = _objectWithoutProperties(_this$props2, ["isEnabled"]);

      return isEnabled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollCaptor, props) : this.props.children;
    }
  }]);

  return ScrollCaptorSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(ScrollCaptorSwitch, "defaultProps", {
  isEnabled: true
});

var instructionsAriaMessage = function instructionsAriaMessage(event) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isSearchable = context.isSearchable,
      isMulti = context.isMulti,
      label = context.label,
      isDisabled = context.isDisabled;

  switch (event) {
    case 'menu':
      return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu, press Tab to select the option and exit the menu.");

    case 'input':
      return "".concat(label ? label : 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');

    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
  }
};
var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value,
      isDisabled = context.isDisabled;
  if (!value) return;

  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return "option ".concat(value, ", deselected.");

    case 'select-option':
      return isDisabled ? "option ".concat(value, " is disabled. Select another option.") : "option ".concat(value, ", selected.");
  }
};
var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return "value ".concat(getOptionLabel(focusedValue), " focused, ").concat(selectValue.indexOf(focusedValue) + 1, " of ").concat(selectValue.length, ".");
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return "option ".concat(getOptionLabel(focusedOption), " focused").concat(focusedOption.isDisabled ? ' disabled' : '', ", ").concat(options.indexOf(focusedOption) + 1, " of ").concat(options.length, ".");
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return "".concat(screenReaderMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('container', props)), {
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ValueContainer, _Component);

  function ValueContainer() {
    _classCallCheck(this, ValueContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ValueContainer).apply(this, arguments));
  }

  _createClass(ValueContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          cx = _this$props.cx,
          isMulti = _this$props.isMulti,
          getStyles = _this$props.getStyles,
          hasValue = _this$props.hasValue;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: cx(
        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('valueContainer', this.props)), {
          'value-container': true,
          'value-container--is-multi': isMulti,
          'value-container--has-value': hasValue
        }, className)
      }, children);
    }
  }]);

  return ValueContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('indicatorsContainer', props)), {
      'indicators': true
    }, className)
  }, children);
};

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])({
      display: 'inline-block',
      fill: 'currentColor',
      lineHeight: 1,
      stroke: 'currentColor',
      strokeWidth: 0
    })
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Svg, _extends({
    size: 20
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Svg, _extends({
    size: 20
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref2) {
  var isFocused = _ref2.isFocused,
      _ref2$theme = _ref2.theme,
      baseUnit = _ref2$theme.spacing.baseUnit,
      colors = _ref2$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('dropdownIndicator', props)), {
      'indicator': true,
      'dropdown-indicator': true
    }, className)
  }), children || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('clearIndicator', props)), {
      'indicator': true,
      'clear-indicator': true
    }, className)
  }), children || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref3) {
  var isDisabled = _ref3.isDisabled,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", _extends({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('indicatorSeparator', props)), {
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var keyframesName = 'react-select-loading-indicator';
var keyframesInjected = false;
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref4) {
  var isFocused = _ref4.isFocused,
      size = _ref4.size,
      _ref4$theme = _ref4.theme,
      colors = _ref4$theme.colors,
      baseUnit = _ref4$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref5) {
  var color = _ref5.color,
      delay = _ref5.delay,
      offset = _ref5.offset;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])({
      animationDuration: '1s',
      animationDelay: "".concat(delay, "ms"),
      animationIterationCount: 'infinite',
      animationName: keyframesName,
      animationTimingFunction: 'ease-in-out',
      backgroundColor: color,
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    })
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isFocused = props.isFocused,
      isRtl = props.isRtl,
      colors = props.theme.colors;
  var color = isFocused ? colors.neutral80 : colors.neutral20;

  if (!keyframesInjected) {
    // eslint-disable-next-line no-unused-expressions
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["injectGlobal"])("@keyframes ", keyframesName, "{0%,80%,100%{opacity:0;}40%{opacity:1;}};");
    keyframesInjected = true;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('loadingIndicator', props)), {
      'indicator': true,
      'loading-indicator': true
    }, className)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingDot, {
    color: color,
    delay: 0,
    offset: isRtl
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingDot, {
    color: color,
    delay: 160,
    offset: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingDot, {
    color: color,
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

var css$1 = function css$$1(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    ref: innerRef,
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('control', props)), {
      'control': true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('group', props)), {
      'group': true
    }, className)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Heading, _extends({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = _objectWithoutProperties(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('groupHeading', _objectSpread({
      theme: theme
    }, cleanProps))), {
      'group-heading': true
    }, className)
  }, cleanProps));
};

var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = _objectWithoutProperties(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('input', _objectSpread({
      theme: theme
    }, props)))
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_input_autosize__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    className: cx(null, {
      'input': true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, props)));
};

var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
var MultiValueRemove =
/*#__PURE__*/
function (_Component) {
  _inherits(MultiValueRemove, _Component);

  function MultiValueRemove() {
    _classCallCheck(this, MultiValueRemove);

    return _possibleConstructorReturn(this, _getPrototypeOf(MultiValueRemove).apply(this, arguments));
  }

  _createClass(MultiValueRemove, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          innerProps = _this$props.innerProps;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", innerProps, children || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CrossIcon, {
        size: 14
      }));
    }
  }]);

  return MultiValueRemove;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var MultiValue =
/*#__PURE__*/
function (_Component2) {
  _inherits(MultiValue, _Component2);

  function MultiValue() {
    _classCallCheck(this, MultiValue);

    return _possibleConstructorReturn(this, _getPrototypeOf(MultiValue).apply(this, arguments));
  }

  _createClass(MultiValue, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          components = _this$props2.components,
          cx = _this$props2.cx,
          data = _this$props2.data,
          getStyles = _this$props2.getStyles,
          innerProps = _this$props2.innerProps,
          isDisabled = _this$props2.isDisabled,
          removeProps = _this$props2.removeProps,
          selectProps = _this$props2.selectProps;
      var Container = components.Container,
          Label = components.Label,
          Remove = components.Remove;

      var containerInnerProps = _objectSpread({
        className: cx(
        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('multiValue', this.props)), {
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className)
      }, innerProps);

      var labelInnerProps = {
        className: cx(
        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('multiValueLabel', this.props)), {
          'multi-value__label': true
        }, className)
      };

      var removeInnerProps = _objectSpread({
        className: cx(
        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('multiValueRemove', this.props)), {
          'multi-value__remove': true
        }, className)
      }, removeProps);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        data: data,
        innerProps: containerInnerProps,
        selectProps: selectProps
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
        data: data,
        innerProps: labelInnerProps,
        selectProps: selectProps
      }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Remove, {
        data: data,
        innerProps: removeInnerProps,
        selectProps: selectProps
      }));
    }
  }]);

  return MultiValue;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(MultiValue, "defaultProps", {
  cropWithEllipsis: true
});

var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    ref: innerRef,
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('option', props)), {
      'option': true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className)
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('placeholder', props)), {
      'placeholder': true
    }, className)
  }, innerProps), children);
};

var css$2 = function css$$1(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - ".concat(spacing.baseUnit * 2, "px)"),
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('singleValue', props)), {
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _objectSpread({}, components, props.components);
};

var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css$2,
  valueContainer: valueContainerCSS
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // initialize with source styles
  var styles = _objectSpread({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4;
var baseUnit = 4;
/* Used to calculate consistent margin/padding on elements */

var controlHeight = 38;
/* The minimum height of the control */

var menuGutter = baseUnit * 2;
/* The amount of space between the control and menu */

var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};
var instanceId = 1;

var Select =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, _props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      ariaLiveSelection: '',
      ariaLiveContext: '',
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      menuOptions: {
        render: [],
        focusable: []
      },
      selectValue: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blockOptionHover", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isComposing", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearFocusValueOnUpdate", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "commonProps", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "components", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hasGroups", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initialTouchX", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initialTouchY", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputIsHiddenAfterUpdate", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "instancePrefix", '');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openAfterFocus", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToFocusedOptionOnUpdate", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "userIsDragging", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "controlRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getControlRef", function (ref) {
      _this.controlRef = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "focusedOptionRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getFocusedOptionRef", function (ref) {
      _this.focusedOptionRef = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "menuListRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMenuListRef", function (ref) {
      _this.menuListRef = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getInputRef", function (ref) {
      _this.inputRef = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cacheComponents", function (components$$1) {
      _this.components = defaultComponents({
        components: components$$1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "focus", _this.focusInput);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blur", _this.blurInput);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      onChange(newValue, _objectSpread({}, actionMeta, {
        name: name
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setValue", function (newValue) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
      var option = arguments.length > 2 ? arguments[2] : undefined;
      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.clearFocusValueOnUpdate = true;

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectOption", function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti;
      var selectValue = _this.state.selectValue;

      if (isMulti) {
        if (_this.isOptionSelected(newValue, selectValue)) {
          var candidate = _this.getOptionValue(newValue);

          _this.setValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          }), 'deselect-option', newValue);

          _this.announceAriaLiveSelection({
            event: 'deselect-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue([].concat(_toConsumableArray(selectValue), [newValue]), 'select-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
      } else {
        if (!_this.isOptionDisabled(newValue, selectValue)) {
          _this.setValue(newValue, 'select-option');

          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          // announce that option is disabled
          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue),
              isDisabled: true
            }
          });
        }
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeValue", function (removedValue) {
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      _this.onChange(selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      }), {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.announceAriaLiveSelection({
        event: 'remove-value',
        context: {
          value: removedValue ? _this.getOptionLabel(removedValue) : ''
        }
      });

      _this.focusInput();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearValue", function () {
      var isMulti = _this.props.isMulti;

      _this.onChange(isMulti ? [] : null, {
        action: 'clear'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popValue", function () {
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];

      _this.announceAriaLiveSelection({
        event: 'pop-value',
        context: {
          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
        }
      });

      _this.onChange(selectValue.slice(0, selectValue.length - 1), {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOptionLabel", function (data) {
      return _this.props.getOptionLabel(data);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOptionValue", function (data) {
      return _this.props.getOptionValue(data);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getStyles", function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getElementId", function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getActiveDescendentId", function () {
      var menuIsOpen = _this.props.menuIsOpen;
      var _this$state = _this.state,
          menuOptions = _this$state.menuOptions,
          focusedOption = _this$state.focusedOption;
      if (!focusedOption || !menuIsOpen) return undefined;
      var index = menuOptions.focusable.indexOf(focusedOption);
      var option = menuOptions.render[index];
      return option && option.key;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "announceAriaLiveSelection", function (_ref2) {
      var event = _ref2.event,
          context = _ref2.context;

      _this.setState({
        ariaLiveSelection: valueEventAriaMessage(event, context)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "announceAriaLiveContext", function (_ref3) {
      var event = _ref3.event,
          context = _ref3.context;

      _this.setState({
        ariaLiveContext: instructionsAriaMessage(event, _objectSpread({}, context, {
          label: _this.props['aria-label']
        }))
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMenuMouseDown", function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMenuMouseMove", function (event) {
      _this.blockOptionHover = false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onControlMouseDown", function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        //$FlowFixMe
        if (event.target.tagName !== 'INPUT') {
          _this.onMenuClose();
        }
      } //$FlowFixMe


      if (event.target.tagName !== 'INPUT') {
        event.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDropdownIndicatorMouseDown", function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClearIndicatorMouseDown", function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;
      setTimeout(function () {
        return _this.focusInput();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onScroll", function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCompositionStart", function () {
      _this.isComposing = true;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCompositionEnd", function () {
      _this.isComposing = false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchStart", function (_ref4) {
      var touches = _ref4.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchMove", function (_ref5) {
      var touches = _ref5.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchEnd", function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onControlTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClearIndicatorTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDropdownIndicatorTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChange", function (event) {
      var inputValue = event.currentTarget.value;
      _this.inputIsHiddenAfterUpdate = false;

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      _this.onMenuOpen();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputFocus", function (event) {
      var _this$props5 = _this.props,
          isSearchable = _this$props5.isSearchable,
          isMulti = _this$props5.isMulti;

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.inputIsHiddenAfterUpdate = false;

      _this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });

      _this.setState({
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputBlur", function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOptionHover", function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shouldHideSelectedOptions", function () {
      var _this$props6 = _this.props,
          hideSelectedOptions = _this$props6.hideSelectedOptions,
          isMulti = _this$props6.isMulti;
      if (hideSelectedOptions === undefined) return isMulti;
      return hideSelectedOptions;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event) {
      var _this$props7 = _this.props,
          isMulti = _this$props7.isMulti,
          backspaceRemovesValue = _this$props7.backspaceRemovesValue,
          escapeClearsValue = _this$props7.escapeClearsValue,
          inputValue = _this$props7.inputValue,
          isClearable = _this$props7.isClearable,
          isDisabled = _this$props7.isDisabled,
          menuIsOpen = _this$props7.menuIsOpen,
          onKeyDown = _this$props7.onKeyDown,
          tabSelectsValue = _this$props7.tabSelectsValue,
          openMenuOnFocus = _this$props7.openMenuOnFocus;
      var _this$state2 = _this.state,
          focusedOption = _this$state2.focusedOption,
          focusedValue = _this$state2.focusedValue,
          selectValue = _this$state2.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.inputIsHiddenAfterUpdate = false;

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    });

    var value = _props.value;
    _this.cacheComponents = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.cacheComponents, exportedEqual).bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.cacheComponents(_props.components);

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var _selectValue = cleanValue(value);

    var _menuOptions = _this.buildMenuOptions(_props, _selectValue);

    _this.state.menuOptions = _menuOptions;
    _this.state.selectValue = _selectValue;
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props8 = this.props,
          options = _this$props8.options,
          value = _this$props8.value,
          inputValue = _this$props8.inputValue; // re-cache custom components

      this.cacheComponents(nextProps.components); // rebuild the menu options

      if (nextProps.value !== value || nextProps.options !== options || nextProps.inputValue !== inputValue) {
        var selectValue = cleanValue(nextProps.value);
        var menuOptions = this.buildMenuOptions(nextProps, selectValue);
        var focusedValue = this.getNextFocusedValue(selectValue);
        var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
        this.setState({
          menuOptions: menuOptions,
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue
        });
      } // some updates should toggle the state of the input visibility


      if (this.inputIsHiddenAfterUpdate != null) {
        this.setState({
          inputIsHidden: this.inputIsHiddenAfterUpdate
        });
        delete this.inputIsHiddenAfterUpdate;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props9 = this.props,
          isDisabled = _this$props9.isDisabled,
          menuIsOpen = _this$props9.menuIsOpen;
      var isFocused = this.state.isFocused;

      if ( // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      } // scroll the focused option into view if necessary


      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
      }

      this.scrollToFocusedOptionOnUpdate = false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }
  }, {
    key: "onMenuOpen",
    // ==============================
    // Consumer Handlers
    // ==============================
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      var _this$props10 = this.props,
          isSearchable = _this$props10.isSearchable,
          isMulti = _this$props10.isMulti;
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
      this.onInputChange('', {
        action: 'menu-close'
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    } // ==============================
    // Methods
    // ==============================

  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    } // aliased for consumers

  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this$state3 = this.state,
          menuOptions = _this$state3.menuOptions,
          selectValue = _this$state3.selectValue,
          isFocused = _this$state3.isFocused;
      var isMulti = this.props.isMulti;
      var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

      if (!isMulti) {
        var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      } // only scroll if the menu isn't already open


      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.inputIsHiddenAfterUpdate = false;
      this.onMenuOpen();
      this.setState({
        focusedValue: null,
        focusedOption: menuOptions.focusable[openAtIndex]
      });
      this.announceAriaLiveContext({
        event: 'menu'
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$props11 = this.props,
          isMulti = _this$props11.isMulti,
          isSearchable = _this$props11.isSearchable;
      var _this$state4 = this.state,
          selectValue = _this$state4.selectValue,
          focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

      if (!isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'value'
        });
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      if (nextFocus === -1) {
        this.announceAriaLiveContext({
          event: 'input',
          context: {
            isSearchable: isSearchable,
            isMulti: isMulti
          }
        });
      }

      this.setState({
        inputIsHidden: nextFocus === -1 ? false : true,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var _this$state5 = this.state,
          focusedOption = _this$state5.focusedOption,
          menuOptions = _this$state5.menuOptions;
      var options = menuOptions.focusable;
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'

      var focusedIndex = options.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'menu'
        });
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
      this.announceAriaLiveContext({
        event: 'menu',
        context: {
          isDisabled: isOptionDisabled(options[nextFocus])
        }
      });
    }
  }, {
    key: "getTheme",
    // ==============================
    // Getters
    // ==============================
    value: function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      } // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.


      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      } // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.


      return _objectSpread({}, defaultTheme, this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          getStyles = this.getStyles,
          setValue = this.setValue,
          selectOption = this.selectOption,
          props = this.props;
      var classNamePrefix = props.classNamePrefix,
          isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var selectValue = this.state.selectValue;
      var hasValue = this.hasValue();

      var getValue = function getValue() {
        return selectValue;
      };

      var cx = classNames.bind(null, classNamePrefix);
      return {
        cx: cx,
        clearValue: clearValue,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        setValue: setValue,
        selectProps: props,
        theme: this.getTheme()
      };
    }
  }, {
    key: "getNextFocusedValue",
    value: function getNextFocusedValue(nextSelectValue) {
      if (this.clearFocusValueOnUpdate) {
        this.clearFocusValueOnUpdate = false;
        return null;
      }

      var _this$state6 = this.state,
          focusedValue = _this$state6.focusedValue,
          lastSelectValue = _this$state6.selectValue;
      var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

      if (lastFocusedIndex > -1) {
        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

        if (nextFocusedIndex > -1) {
          // the focused value is still in the selectValue, return it
          return focusedValue;
        } else if (lastFocusedIndex < nextSelectValue.length) {
          // the focusedValue is not present in the next selectValue array by
          // reference, so return the new value at the same index
          return nextSelectValue[lastFocusedIndex];
        }
      }

      return null;
    }
  }, {
    key: "getNextFocusedOption",
    value: function getNextFocusedOption(options) {
      var lastFocusedOption = this.state.focusedOption;
      return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.state.menuOptions.render.length;
    }
  }, {
    key: "countOptions",
    value: function countOptions() {
      return this.state.menuOptions.focusable.length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props12 = this.props,
          isClearable = _this$props12.isClearable,
          isMulti = _this$props12.isMulti; // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled$$1(option, selectValue) {
      return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      var _this2 = this;

      if (selectValue.indexOf(option) > -1) return true;

      if (typeof this.props.isOptionSelected === 'function') {
        return this.props.isOptionSelected(option, selectValue);
      }

      var candidate = this.getOptionValue(option);
      return selectValue.some(function (i) {
        return _this2.getOptionValue(i) === candidate;
      });
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var inputValue = this.props.inputValue;
        var selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: inputValue,
          selectValue: selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel$$1(data) {
      return this.props.formatGroupLabel(data);
    } // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: "startListeningComposition",
    // ==============================
    // Composition Handlers
    // ==============================
    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    // ==============================
    // Touch Handlers
    // ==============================
    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "buildMenuOptions",
    // ==============================
    // Menu Options
    // ==============================
    value: function buildMenuOptions(props, selectValue) {
      var _this3 = this;

      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
          options = props.options;

      var toOption = function toOption(option, id) {
        var isDisabled = _this3.isOptionDisabled(option, selectValue);

        var isSelected = _this3.isOptionSelected(option, selectValue);

        var label = _this3.getOptionLabel(option);

        var value = _this3.getOptionValue(option);

        if (_this3.shouldHideSelectedOptions() && isSelected || !_this3.filterOption({
          label: label,
          value: value,
          data: option
        }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this3.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this3.selectOption(option);
        };
        var optionId = "".concat(_this3.getElementId('option'), "-").concat(id);
        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this3.hasGroups) _this3.hasGroups = true;
          var items = item.options;
          var children = items.map(function (child, i) {
            var option = toOption(child, "".concat(itemIndex, "-").concat(i));
            if (option) acc.focusable.push(child);
            return option;
          }).filter(Boolean);

          if (children.length) {
            var groupId = "".concat(_this3.getElementId('group'), "-").concat(itemIndex);
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, "".concat(itemIndex));

          if (option) {
            acc.render.push(option);
            acc.focusable.push(item);
          }
        }

        return acc;
      }, {
        render: [],
        focusable: []
      });
    } // ==============================
    // Renderers
    // ==============================

  }, {
    key: "constructAriaLiveMessage",
    value: function constructAriaLiveMessage() {
      var _this$state7 = this.state,
          ariaLiveContext = _this$state7.ariaLiveContext,
          selectValue = _this$state7.selectValue,
          focusedValue = _this$state7.focusedValue,
          focusedOption = _this$state7.focusedOption;
      var _this$props13 = this.props,
          options = _this$props13.options,
          menuIsOpen = _this$props13.menuIsOpen,
          inputValue = _this$props13.inputValue,
          screenReaderStatus = _this$props13.screenReaderStatus; // An aria live message representing the currently focused value in the select.

      var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
        focusedValue: focusedValue,
        getOptionLabel: this.getOptionLabel,
        selectValue: selectValue
      }) : ''; // An aria live message representing the currently focused option in the select.

      var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
        focusedOption: focusedOption,
        getOptionLabel: this.getOptionLabel,
        options: options
      }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

      var resultsMsg = resultsAriaMessage({
        inputValue: inputValue,
        screenReaderMessage: screenReaderStatus({
          count: this.countOptions()
        })
      });
      return "".concat(focusedValueMsg, " ").concat(focusedOptionMsg, " ").concat(resultsMsg, " ").concat(ariaLiveContext);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props14 = this.props,
          isDisabled = _this$props14.isDisabled,
          isSearchable = _this$props14.isSearchable,
          inputId = _this$props14.inputId,
          inputValue = _this$props14.inputValue,
          tabIndex = _this$props14.tabIndex;
      var Input = this.components.Input;
      var inputIsHidden = this.state.inputIsHidden;
      var id = inputId || this.getElementId('input');

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DummyInput, {
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex: tabIndex,
          value: ""
        });
      } // aria attributes makes the JSX "noisy", separated for clarity


      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };
      var _this$commonProps = this.commonProps,
          cx = _this$commonProps.cx,
          theme = _this$commonProps.theme,
          selectProps = _this$commonProps.selectProps;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, _extends({
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        cx: cx,
        getStyles: this.getStyles,
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        selectProps: selectProps,
        spellCheck: "false",
        tabIndex: tabIndex,
        theme: theme,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this4 = this;

      var _this$components = this.components,
          MultiValue = _this$components.MultiValue,
          MultiValueContainer = _this$components.MultiValueContainer,
          MultiValueLabel = _this$components.MultiValueLabel,
          MultiValueRemove = _this$components.MultiValueRemove,
          SingleValue = _this$components.SingleValue,
          Placeholder = _this$components.Placeholder;
      var commonProps = this.commonProps;
      var _this$props15 = this.props,
          controlShouldRenderValue = _this$props15.controlShouldRenderValue,
          isDisabled = _this$props15.isDisabled,
          isMulti = _this$props15.isMulti,
          inputValue = _this$props15.inputValue,
          placeholder = _this$props15.placeholder;
      var _this$state8 = this.state,
          selectValue = _this$state8.selectValue,
          focusedValue = _this$state8.focusedValue,
          isFocused = _this$state8.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Placeholder, _extends({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused
        }), placeholder);
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt) {
          var isOptionFocused = opt === focusedValue;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MultiValue, _extends({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: _this4.getOptionValue(opt),
            removeProps: {
              onClick: function onClick() {
                return _this4.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this4.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            },
            data: opt
          }), _this4.formatOptionLabel(opt, 'value'));
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleValue, _extends({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var ClearIndicator = this.components.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props16 = this.props,
          isDisabled = _this$props16.isDisabled,
          isLoading = _this$props16.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClearIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var LoadingIndicator = this.components.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props17 = this.props,
          isDisabled = _this$props17.isDisabled,
          isLoading = _this$props17.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$components2 = this.components,
          DropdownIndicator = _this$components2.DropdownIndicator,
          IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndicatorSeparator, _extends({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var DropdownIndicator = this.components.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this5 = this;

      var _this$components3 = this.components,
          Group = _this$components3.Group,
          GroupHeading = _this$components3.GroupHeading,
          Menu$$1 = _this$components3.Menu,
          MenuList$$1 = _this$components3.MenuList,
          MenuPortal$$1 = _this$components3.MenuPortal,
          LoadingMessage$$1 = _this$components3.LoadingMessage,
          NoOptionsMessage$$1 = _this$components3.NoOptionsMessage,
          Option = _this$components3.Option;
      var commonProps = this.commonProps;
      var _this$state9 = this.state,
          focusedOption = _this$state9.focusedOption,
          menuOptions = _this$state9.menuOptions;
      var _this$props18 = this.props,
          captureMenuScroll = _this$props18.captureMenuScroll,
          inputValue = _this$props18.inputValue,
          isLoading = _this$props18.isLoading,
          loadingMessage = _this$props18.loadingMessage,
          minMenuHeight = _this$props18.minMenuHeight,
          maxMenuHeight = _this$props18.maxMenuHeight,
          menuIsOpen = _this$props18.menuIsOpen,
          menuPlacement = _this$props18.menuPlacement,
          menuPosition = _this$props18.menuPosition,
          menuPortalTarget = _this$props18.menuPortalTarget,
          menuShouldBlockScroll = _this$props18.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props18.menuShouldScrollIntoView,
          noOptionsMessage = _this$props18.noOptionsMessage,
          onMenuScrollToTop = _this$props18.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props18.onMenuScrollToBottom;
      if (!menuIsOpen) return null; // TODO: Internal Option Type here

      var render = function render(props) {
        // for performance, the menu options in state aren't changed when the
        // focused option changes so we calculate additional props based on that
        var isFocused = focusedOption === props.data;
        props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, _extends({}, commonProps, props, {
          isFocused: isFocused
        }), _this5.formatOptionLabel(props.data, 'menu'));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = menuOptions.render.map(function (item) {
          if (item.type === 'group') {
            var type = item.type,
                group = _objectWithoutProperties(item, ["type"]);

            var headingId = "".concat(item.key, "-heading");
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Group, _extends({}, commonProps, group, {
              Heading: GroupHeading,
              headingProps: {
                id: headingId
              },
              label: _this5.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option);
            }));
          } else if (item.type === 'option') {
            return render(item);
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingMessage$$1, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });

        if (_message === null) return null;
        menuUI = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoOptionsMessage$$1, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref6) {
        var ref = _ref6.ref,
            _ref6$placerProps = _ref6.placerProps,
            placement = _ref6$placerProps.placement,
            maxHeight = _ref6$placerProps.maxHeight;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu$$1, _extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this5.onMenuMouseDown,
            onMouseMove: _this5.onMenuMouseMove
          },
          isLoading: isLoading,
          placement: placement
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollCaptorSwitch, {
          isEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollBlock, {
          isEnabled: menuShouldBlockScroll
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuList$$1, _extends({}, commonProps, {
          innerRef: _this5.getMenuListRef,
          isLoading: isLoading,
          maxHeight: maxHeight
        }), menuUI))));
      }); // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`

      return menuPortalTarget || menuPosition === 'fixed' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuPortal$$1, _extends({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this6 = this;

      var _this$props19 = this.props,
          delimiter = _this$props19.delimiter,
          isDisabled = _this$props19.isDisabled,
          isMulti = _this$props19.isMulti,
          name = _this$props19.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this6.getOptionValue(opt);
          }).join(delimiter);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this6.getOptionValue(opt)
            });
          }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            name: name,
            type: "hidden"
          });
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      if (!this.state.isFocused) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A11yText, {
        "aria-live": "assertive"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        id: "aria-selection-event"
      }, "\xA0", this.state.ariaLiveSelection), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        id: "aria-context"
      }, "\xA0", this.constructAriaLiveMessage()));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$components4 = this.components,
          Control = _this$components4.Control,
          IndicatorsContainer = _this$components4.IndicatorsContainer,
          SelectContainer = _this$components4.SelectContainer,
          ValueContainer = _this$components4.ValueContainer;
      var _this$props20 = this.props,
          className = _this$props20.className,
          id = _this$props20.id,
          isDisabled = _this$props20.isDisabled,
          menuIsOpen = _this$props20.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectContainer, _extends({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Control, _extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ValueContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndicatorsContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Select, "defaultProps", defaultProps);

var defaultProps$1 = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(StateManager, _Component);

    function StateManager() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, StateManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StateManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "select", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputChange", function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMenuOpen", function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMenuClose", function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      });

      return _this;
    }

    _createClass(StateManager, [{
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      } // FIXME: untyped flow code, return any

    }, {
      key: "getProp",
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      } // FIXME: untyped flow code, return any

    }, {
      key: "callProp",
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _this$props;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_this$props = this.props)[name].apply(_this$props, args);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            defaultInputValue = _this$props2.defaultInputValue,
            defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
            defaultValue = _this$props2.defaultValue,
            props = _objectWithoutProperties(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);

    return StateManager;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _defineProperty(_class, "defaultProps", defaultProps$1), _temp;
};

var defaultProps$2 = {
  cacheOptions: false,
  defaultOptions: false,
  filterOption: null
};
var makeAsyncSelect = function makeAsyncSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Async, _Component);

    function Async(props) {
      var _this;

      _classCallCheck(this, Async);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Async).call(this));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "select", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lastRequest", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mounted", false);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "optionsCache", {});

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChange", function (newValue, actionMeta) {
        var _this$props = _this.props,
            cacheOptions = _this$props.cacheOptions,
            onInputChange = _this$props.onInputChange; // TODO

        var inputValue = handleInputChange(newValue, actionMeta, onInputChange);

        if (!inputValue) {
          delete _this.lastRequest;

          _this.setState({
            inputValue: '',
            loadedInputValue: '',
            loadedOptions: [],
            isLoading: false,
            passEmptyOptions: false
          });

          return;
        }

        if (cacheOptions && _this.optionsCache[inputValue]) {
          _this.setState({
            inputValue: inputValue,
            loadedInputValue: inputValue,
            loadedOptions: _this.optionsCache[inputValue],
            isLoading: false,
            passEmptyOptions: false
          });
        } else {
          var request = _this.lastRequest = {};

          _this.setState({
            inputValue: inputValue,
            isLoading: true,
            passEmptyOptions: !_this.state.loadedInputValue
          }, function () {
            _this.loadOptions(inputValue, function (options) {
              if (!_this.mounted) return;

              if (options) {
                _this.optionsCache[inputValue] = options;
              }

              if (request !== _this.lastRequest) return;
              delete _this.lastRequest;

              _this.setState({
                isLoading: false,
                loadedInputValue: inputValue,
                loadedOptions: options || [],
                passEmptyOptions: false
              });
            });
          });
        }

        return inputValue;
      });

      _this.state = {
        defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : undefined,
        inputValue: typeof props.inputValue !== 'undefined' ? props.inputValue : '',
        isLoading: props.defaultOptions === true ? true : false,
        loadedOptions: [],
        passEmptyOptions: false
      };
      return _this;
    }

    _createClass(Async, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.mounted = true;
        var defaultOptions = this.props.defaultOptions;
        var inputValue = this.state.inputValue;

        if (defaultOptions === true) {
          this.loadOptions(inputValue, function (options) {
            if (!_this2.mounted) return;
            var isLoading = !!_this2.lastRequest;

            _this2.setState({
              defaultOptions: options || [],
              isLoading: isLoading
            });
          });
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        // if the cacheOptions prop changes, clear the cache
        if (nextProps.cacheOptions !== this.props.cacheOptions) {
          this.optionsCache = {};
        }

        if (nextProps.defaultOptions !== this.props.defaultOptions) {
          this.setState({
            defaultOptions: Array.isArray(nextProps.defaultOptions) ? nextProps.defaultOptions : undefined
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "loadOptions",
      value: function loadOptions(inputValue, callback) {
        var loadOptions = this.props.loadOptions;
        if (!loadOptions) return callback();
        var loader = loadOptions(inputValue, callback);

        if (loader && typeof loader.then === 'function') {
          loader.then(callback, function () {
            return callback();
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props2 = this.props,
            loadOptions = _this$props2.loadOptions,
            props = _objectWithoutProperties(_this$props2, ["loadOptions"]);

        var _this$state = this.state,
            defaultOptions = _this$state.defaultOptions,
            inputValue = _this$state.inputValue,
            isLoading = _this$state.isLoading,
            loadedInputValue = _this$state.loadedInputValue,
            loadedOptions = _this$state.loadedOptions,
            passEmptyOptions = _this$state.passEmptyOptions;
        var options = passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref) {
            _this3.select = _ref;
          },
          options: options,
          isLoading: isLoading,
          onInputChange: this.handleInputChange
        }));
      }
    }]);

    return Async;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _defineProperty(_class, "defaultProps", defaultProps$2), _temp;
};
var SelectState = manageState(Select);
var Async = makeAsyncSelect(SelectState);

var compareOption = function compareOption() {
  var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var option = arguments.length > 1 ? arguments[1] : undefined;
  var candidate = String(inputValue).toLowerCase();
  var optionValue = String(option.value).toLowerCase();
  var optionLabel = String(option.label).toLowerCase();
  return optionValue === candidate || optionLabel === candidate;
};

var builtins = {
  formatCreateLabel: function formatCreateLabel(inputValue) {
    return "Create \"".concat(inputValue, "\"");
  },
  isValidNewOption: function isValidNewOption(inputValue, selectValue, selectOptions) {
    return !(!inputValue || selectValue.some(function (option) {
      return compareOption(inputValue, option);
    }) || selectOptions.some(function (option) {
      return compareOption(inputValue, option);
    }));
  },
  getNewOptionData: function getNewOptionData(inputValue, optionLabel) {
    return {
      label: optionLabel,
      value: inputValue,
      __isNew__: true
    };
  }
};
var defaultProps$3 = _objectSpread({
  allowCreateWhileLoading: false,
  createOptionPosition: 'last'
}, builtins);
var makeCreatableSelect = function makeCreatableSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Creatable, _Component);

    function Creatable(props) {
      var _this;

      _classCallCheck(this, Creatable);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Creatable).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "select", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (newValue, actionMeta) {
        var _this$props = _this.props,
            getNewOptionData = _this$props.getNewOptionData,
            inputValue = _this$props.inputValue,
            isMulti = _this$props.isMulti,
            onChange = _this$props.onChange,
            onCreateOption = _this$props.onCreateOption,
            value = _this$props.value;

        if (actionMeta.action !== 'select-option') {
          return onChange(newValue, actionMeta);
        }

        var newOption = _this.state.newOption;
        var valueArray = Array.isArray(newValue) ? newValue : [newValue];

        if (valueArray[valueArray.length - 1] === newOption) {
          if (onCreateOption) onCreateOption(inputValue);else {
            var newOptionData = getNewOptionData(inputValue, inputValue);
            var newActionMeta = {
              action: 'create-option'
            };

            if (isMulti) {
              onChange([].concat(_toConsumableArray(cleanValue(value)), [newOptionData]), newActionMeta);
            } else {
              onChange(newOptionData, newActionMeta);
            }
          }
          return;
        }

        onChange(newValue, actionMeta);
      });

      var options = props.options || [];
      _this.state = {
        newOption: undefined,
        options: options
      };
      return _this;
    }

    _createClass(Creatable, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var allowCreateWhileLoading = nextProps.allowCreateWhileLoading,
            createOptionPosition = nextProps.createOptionPosition,
            formatCreateLabel = nextProps.formatCreateLabel,
            getNewOptionData = nextProps.getNewOptionData,
            inputValue = nextProps.inputValue,
            isLoading = nextProps.isLoading,
            isValidNewOption = nextProps.isValidNewOption,
            value = nextProps.value;
        var options = nextProps.options || [];
        var newOption = this.state.newOption;

        if (isValidNewOption(inputValue, cleanValue(value), options)) {
          newOption = getNewOptionData(inputValue, formatCreateLabel(inputValue));
        } else {
          newOption = undefined;
        }

        this.setState({
          newOption: newOption,
          options: (allowCreateWhileLoading || !isLoading) && newOption ? createOptionPosition === 'first' ? [newOption].concat(_toConsumableArray(options)) : [].concat(_toConsumableArray(options), [newOption]) : options
        });
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var props = _extends({}, this.props);

        var options = this.state.options;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          options: options,
          onChange: this.onChange
        }));
      }
    }]);

    return Creatable;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _defineProperty(_class, "defaultProps", defaultProps$3), _temp;
}; // TODO: do this in package entrypoint

var SelectCreatable = makeCreatableSelect(Select);
var Creatable = manageState(SelectCreatable);

var SelectCreatable$1 = makeCreatableSelect(Select);
var SelectCreatableState = manageState(SelectCreatable$1);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

// strip transition props off before spreading onto select component
// note we need to be explicit about innerRef for flow
var AnimatedInput = function AnimatedInput(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        appear = _ref.appear,
        enter = _ref.enter,
        exit = _ref.exit,
        props = _objectWithoutProperties(_ref, ["in", "onExited", "appear", "enter", "exit"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, props);
  };
};

var Fade = function Fade(_ref) {
  var Tag = _ref.component,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1 : _ref$duration,
      inProp = _ref.in,
      onExited = _ref.onExited,
      props = _objectWithoutProperties(_ref, ["component", "duration", "in", "onExited"]);

  var transition = {
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1,
      transition: "opacity ".concat(duration, "ms")
    },
    exiting: {
      opacity: 0
    },
    exited: {
      opacity: 0
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["Transition"], {
    mountOnEnter: true,
    unmountOnExit: true,
    in: inProp,
    timeout: duration
  }, function (state) {
    var innerProps = {
      style: _objectSpread({}, transition[state])
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      innerProps: innerProps
    }, props));
  });
}; // ==============================
// Collapse Transition
// ==============================

var collapseDuration = 260;
// wrap each MultiValue with a collapse transition; decreases width until
// finally removing from DOM
var Collapse =
/*#__PURE__*/
function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Collapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Collapse)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "duration", collapseDuration);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rafID", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      width: 'auto'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "transition", {
      exiting: {
        width: 0,
        transition: "width ".concat(_this.duration, "ms ease-out")
      },
      exited: {
        width: 0
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getWidth", function (ref) {
      if (ref && isNaN(_this.state.width)) {
        /*
          Here we're invoking requestAnimationFrame with a callback invoking our
          call to getBoundingClientRect and setState in order to resolve an edge case
          around portalling. Certain portalling solutions briefly remove children from the DOM
          before appending them to the target node. This is to avoid us trying to call getBoundingClientrect
          while the Select component is in this state.
        */
        // cannot use `offsetWidth` because it is rounded
        _this.rafID = window.requestAnimationFrame(function () {
          var _ref$getBoundingClien = ref.getBoundingClientRect(),
              width = _ref$getBoundingClien.width;

          _this.setState({
            width: width
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getStyle", function (width) {
      return {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: width
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTransition", function (state) {
      return _this.transition[state];
    });

    return _this;
  }

  _createClass(Collapse, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rafID) {
        window.cancelAnimationFrame(this.rafID);
      }
    } // width must be calculated; cannot transition from `undefined` to `number`

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          inProp = _this$props.in;
      var width = this.state.width;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["Transition"], {
        enter: false,
        mountOnEnter: true,
        unmountOnExit: true,
        in: inProp,
        timeout: this.duration
      }, function (state) {
        var style = _objectSpread({}, _this2.getStyle(width), _this2.getTransition(state));

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          ref: _this2.getWidth,
          style: style
        }, children);
      });
    }
  }]);

  return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var AnimatedMultiValue = function AnimatedMultiValue(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        props = _objectWithoutProperties(_ref, ["in", "onExited"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Collapse, {
      in: inProp,
      onExited: onExited
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
      cropWithEllipsis: inProp
    }, props)));
  };
};

var AnimatedPlaceholder = function AnimatedPlaceholder(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fade, _extends({
      component: WrappedComponent,
      duration: props.isMulti ? collapseDuration : 1
    }, props));
  };
};

var AnimatedSingleValue = function AnimatedSingleValue(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fade, _extends({
      component: WrappedComponent
    }, props));
  };
};

// make ValueContainer a transition group
var AnimatedValueContainer = function AnimatedValueContainer(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["TransitionGroup"], _extends({
      component: WrappedComponent
    }, props));
  };
};

var makeAnimated = function makeAnimated() {
  var externalComponents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var components$$1 = defaultComponents({
    components: externalComponents
  });

  var Input = components$$1.Input,
      MultiValue = components$$1.MultiValue,
      Placeholder = components$$1.Placeholder,
      SingleValue = components$$1.SingleValue,
      ValueContainer = components$$1.ValueContainer,
      rest = _objectWithoutProperties(components$$1, ["Input", "MultiValue", "Placeholder", "SingleValue", "ValueContainer"]);

  return _objectSpread({
    Input: AnimatedInput(Input),
    MultiValue: AnimatedMultiValue(MultiValue),
    Placeholder: AnimatedPlaceholder(Placeholder),
    SingleValue: AnimatedSingleValue(SingleValue),
    ValueContainer: AnimatedValueContainer(ValueContainer)
  }, rest);
};

var AnimatedComponents = makeAnimated();
var Input$1 = AnimatedComponents.Input;
var MultiValue$1 = AnimatedComponents.MultiValue;
var Placeholder$1 = AnimatedComponents.Placeholder;
var SingleValue$1 = AnimatedComponents.SingleValue;
var ValueContainer$1 = AnimatedComponents.ValueContainer;
var index = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(makeAnimated, exportedEqual);

var index$1 = manageState(Select);

/* harmony default export */ __webpack_exports__["default"] = (index$1);



/***/ }),

/***/ "./node_modules/react-transition-group/CSSTransition.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-transition-group/CSSTransition.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _addClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/addClass */ "./node_modules/dom-helpers/class/addClass.js"));

var _removeClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/removeClass */ "./node_modules/dom-helpers/class/removeClass.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or
   * has finished the transition. A single name can be provided and it will be
   * suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : undefined;
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/ReplaceTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/ReplaceTransition.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  true ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/Transition.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/Transition.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/TransitionGroup.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-transition-group/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/CSSTransition.js"));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/ReplaceTransition.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ "react");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/PropTypes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : undefined;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  true ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : undefined;
exports.classNamesShape = classNamesShape;

/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}());


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/blocks/call-to-action/attributes.js":
/*!*************************************************!*\
  !*** ./src/blocks/call-to-action/attributes.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * BLOCK: Call To Action - Attributes
 */
var attributes = {
  ctaTitle: {
    source: "html",
    selector: "h1,h2,h3,h4,h5,h6",
    default: "Call To Action"
  },
  description: {
    source: "html",
    selector: "p",
    default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  textAlign: {
    type: "string",
    default: "left"
  },
  titleColor: {
    type: "string"
  },
  descColor: {
    type: "string"
  },
  ctaPosition: {
    type: "string",
    default: "right"
  },
  titleTag: {
    type: "string",
    default: "h3"
  },
  titleFontSize: {
    type: "number"
  },
  titleFontSizeType: {
    type: "string",
    default: "px"
  },
  titleFontSizeMobile: {
    type: "number"
  },
  titleFontSizeTablet: {
    type: "number"
  },
  titleFontFamily: {
    type: "string",
    default: "Default"
  },
  titleFontWeight: {
    type: "string"
  },
  titleFontSubset: {
    type: "string"
  },
  titleLineHeightType: {
    type: "string",
    default: "em"
  },
  titleLineHeight: {
    type: "number"
  },
  titleLineHeightTablet: {
    type: "number"
  },
  titleLineHeightMobile: {
    type: "number"
  },
  titleLoadGoogleFonts: {
    type: "boolean",
    default: false
  },
  descFontSize: {
    type: "number"
  },
  descFontSizeType: {
    type: "string",
    default: "px"
  },
  descFontSizeMobile: {
    type: "number"
  },
  descFontSizeTablet: {
    type: "number"
  },
  descFontFamily: {
    type: "string",
    default: "Default"
  },
  descFontWeight: {
    type: "string"
  },
  descFontSubset: {
    type: "string"
  },
  descLineHeightType: {
    type: "string",
    default: "em"
  },
  descLineHeight: {
    type: "number"
  },
  descLineHeightTablet: {
    type: "number"
  },
  descLineHeightMobile: {
    type: "number"
  },
  descLoadGoogleFonts: {
    type: "boolean",
    default: false
  },
  titleSpace: {
    type: "number",
    default: 10
  },
  descSpace: {
    type: "number",
    default: 10
  },
  block_id: {
    type: "string",
    default: "not_set"
  },
  buttonAlign: {
    type: "string",
    default: "middle"
  },
  ctaTarget: {
    type: "boolean",
    default: false
  },
  ctaIcon: {
    type: "string",
    default: ""
  },
  ctaIconPosition: {
    type: "string",
    default: "after"
  },
  ctaIconSpace: {
    type: "number",
    default: 5
  },
  ctaType: {
    type: "string",
    default: "button"
  },
  ctaText: {
    type: "string",
    default: "Read More"
  },
  ctaLink: {
    type: "string",
    default: "#"
  },
  ctaFontSize: {
    type: "number"
  },
  ctaFontSizeType: {
    type: "string",
    default: "px"
  },
  ctaFontSizeMobile: {
    type: "number"
  },
  ctaFontSizeTablet: {
    type: "number"
  },
  ctaFontFamily: {
    type: "string",
    default: "Default"
  },
  ctaFontWeight: {
    type: "string"
  },
  ctaFontSubset: {
    type: "string"
  },
  ctaLoadGoogleFonts: {
    type: "boolean",
    default: false
  },
  contentWidth: {
    type: "number",
    default: "70"
  },
  ctaBtnLinkColor: {
    type: "string",
    default: "#333"
  },
  ctaLinkHoverColor: {
    type: "string",
    default: ""
  },
  ctaBgColor: {
    type: "string",
    default: "transparent"
  },
  ctaBgHoverColor: {
    type: "string",
    default: "transparent"
  },
  ctaBorderColor: {
    type: "string",
    default: "#333"
  },
  ctaBorderhoverColor: {
    type: "string",
    default: ""
  },
  ctaBorderStyle: {
    type: "string",
    default: "solid"
  },
  ctaBtnVertPadding: {
    type: "number",
    default: 10
  },
  ctaBtnHrPadding: {
    type: "number",
    default: 14
  },
  ctaBorderWidth: {
    type: "number",
    default: 1
  },
  ctaBorderRadius: {
    type: "number",
    default: 0
  },
  stack: {
    type: "string",
    default: "tablet"
  },
  ctaLeftSpace: {
    type: "number",
    default: 5
  },
  ctaRightSpace: {
    type: "number",
    default: 5
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/blocks/call-to-action/block.js":
/*!********************************************!*\
  !*** ./src/blocks/call-to-action/block.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_uagb_controls_block_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/uagb-controls/block-icons */ "./src/blocks/call-to-action/components/uagb-controls/block-icons.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Title */ "./src/blocks/call-to-action/components/Title.js");
/* harmony import */ var _components_Description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Description */ "./src/blocks/call-to-action/components/Description.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes */ "./src/blocks/call-to-action/classes.js");
/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CallToAction */ "./src/blocks/call-to-action/components/CallToAction.js");
/* harmony import */ var _components_CTA__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/CTA */ "./src/blocks/call-to-action/components/CTA.js");
/* harmony import */ var _inline_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inline-styles */ "./src/blocks/call-to-action/inline-styles.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit */ "./src/blocks/call-to-action/edit.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attributes */ "./src/blocks/call-to-action/attributes.js");



/**
 * BLOCK: Call To Action.
 */
// Import block dependencies and components.

 // Import icon.








 // import "./editor.css"
// import "./style.css"

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.blockEditor.RichText;
var Fragment = wp.element.Fragment;
registerBlockType("ubc/call-to-action", {
  title: 'UBC Cards Block',
  description: 'Some description',
  icon: 'book-alt',
  keywords: [__("cta"), __("call to action")],
  category: 'layout',
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_11__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_10__["default"],
  save: function save(props) {
    var _props$attributes = props.attributes,
        ctaPosition = _props$attributes.ctaPosition,
        block_id = _props$attributes.block_id,
        ctaType = _props$attributes.ctaType,
        ctaLink = _props$attributes.ctaLink,
        ctaTarget = _props$attributes.ctaTarget,
        className = _props$attributes.className,
        ctaTitle = _props$attributes.ctaTitle,
        description = _props$attributes.description;
    var is_cta = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_CTA__WEBPACK_IMPORTED_MODULE_8__["default"], {
      attributes: props.attributes,
      setAttributes: "not_set"
    }); // Get description and seperator components.

    var desc = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, "" !== description && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "uagb-cta-text-wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_Description__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: props.attributes,
      setAttributes: "not_set"
    }))); // Get Title components.

    var title_text = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, "" !== ctaTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "uagb-cta__title-wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: props.attributes,
      setAttributes: "not_set"
    })));
    var output = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default.a.apply(void 0, ["uagb-cta__content-wrap"].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_classes__WEBPACK_IMPORTED_MODULE_6__["default"])(props.attributes))))
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "uagb-cta__left-right-wrap"
    }, ctaPosition == "left" && is_cta, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "uagb-cta__content"
    }, ctaPosition == "above-title" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, is_cta, title_text, desc), ctaPosition == "below-title" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, title_text, desc, is_cta), (ctaPosition == "left" || ctaPosition == "right") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, title_text, desc)), ctaPosition == "right" && is_cta)));
    var target = "";

    if (ctaTarget) {
      target = "_blank";
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, "uagb-cta__outer-wrap"),
      id: "uagb-cta-block-".concat(block_id)
    }, ctaType == "all" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: ctaLink,
      className: "uagb-cta__block-link-wrap uagb-cta__link-to-all",
      target: target,
      rel: "noopener noreferrer"
    }), output), ctaType !== "all" && output));
  },
  deprecated: [{
    attributes: _attributes__WEBPACK_IMPORTED_MODULE_11__["default"],
    save: function save(props) {
      var _props$attributes2 = props.attributes,
          ctaPosition = _props$attributes2.ctaPosition,
          block_id = _props$attributes2.block_id,
          ctaType = _props$attributes2.ctaType,
          ctaLink = _props$attributes2.ctaLink,
          ctaTarget = _props$attributes2.ctaTarget,
          className = _props$attributes2.className,
          ctaTitle = _props$attributes2.ctaTitle,
          description = _props$attributes2.description;
      var is_cta = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_CallToAction__WEBPACK_IMPORTED_MODULE_7__["default"], {
        attributes: props.attributes,
        setAttributes: "not_set"
      }); // Get description and seperator components.

      var desc = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, "" !== description && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "uagb-cta-text-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_Description__WEBPACK_IMPORTED_MODULE_5__["default"], {
        attributes: props.attributes,
        setAttributes: "not_set"
      }))); // Get Title components.

      var title_text = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, "" !== ctaTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "uagb-cta__title-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: props.attributes,
        setAttributes: "not_set"
      })));
      var output = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default.a.apply(void 0, ["uagb-cta__content-wrap"].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_classes__WEBPACK_IMPORTED_MODULE_6__["default"])(props.attributes))))
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "uagb-cta__left-right-wrap"
      }, ctaPosition == "left" && is_cta, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "uagb-cta__content"
      }, ctaPosition == "above-title" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, is_cta, title_text, desc), ctaPosition == "below-title" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, title_text, desc, is_cta), (ctaPosition == "left" || ctaPosition == "right") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, title_text, desc)), ctaPosition == "right" && is_cta)));
      var target = "";

      if (ctaTarget) {
        target = "_blank";
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, "uagb-cta__outer-wrap"),
        id: "uagb-cta-block-".concat(block_id)
      }, ctaType == "all" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
        href: ctaLink,
        className: "uagb-cta__block-link-wrap uagb-cta__link-to-all",
        target: target,
        rel: "noopener noreferrer"
      }), output), ctaType !== "all" && output));
    }
  }]
});

/***/ }),

/***/ "./src/blocks/call-to-action/classes.js":
/*!**********************************************!*\
  !*** ./src/blocks/call-to-action/classes.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Returns Dynamic Generated Classes
 */
function CtaPositionClasses(attributes) {
  var iconimgStyle_class = "";
  iconimgStyle_class += "uagb-cta__block" + " ";
  iconimgStyle_class += "uagb-cta__icon-position-" + attributes.ctaPosition + " ";

  if (attributes.ctaPosition === "right") {
    iconimgStyle_class += "uagb-cta__content-right" + " ";
  }

  if (attributes.ctaPosition === "right" && attributes.stack !== "none") {
    iconimgStyle_class += "uagb-cta__content-stacked-" + attributes.stack + " ";
  }

  if (attributes.ctaPosition !== "below-title") {
    iconimgStyle_class += "uagb-cta__button-valign-" + attributes.buttonAlign + " ";
  }

  if (attributes.ctaType !== "text" && attributes.ctaType !== "button") {
    iconimgStyle_class += "uagb-cta__button-type-none" + " ";
  }

  return [iconimgStyle_class];
}

/* harmony default export */ __webpack_exports__["default"] = (CtaPositionClasses);

/***/ }),

/***/ "./src/blocks/call-to-action/components/CTA.js":
/*!*****************************************************!*\
  !*** ./src/blocks/call-to-action/components/CTA.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _uagb_controls_renderIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uagb-controls/renderIcon */ "./src/blocks/call-to-action/components/uagb-controls/renderIcon.js");






var __ = wp.i18n.__;



var CTA =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CTA, _React$Component);

  function CTA() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CTA);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CTA).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CTA, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var ctaBtnClass = "uagb-cta__block-link uagb-cta__button-link-wrapper uagb-cta-typeof-" + attributes.ctaType;
      var target = "_self";
      var rel = "noopener noreferrer";

      if (attributes.ctaTarget) {
        target = "_blank";
      }

      var cta_icon_output = "";

      if (attributes.ctaIcon !== "") {
        cta_icon_output = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("uagb-cta-".concat(attributes.ctaType, "-icon"), "uagb-cta__align-button-".concat(attributes.ctaIconPosition), "uagb-cta-with-svg")
        }, Object(_uagb_controls_renderIcon__WEBPACK_IMPORTED_MODULE_7__["default"])(attributes.ctaIcon));
      }

      var link = "javascript:void(0)";

      if (setAttributes == "not_set") {
        link = attributes.ctaLink;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "uagb-cta__link-wrapper uagb-cta__block-link-style"
      }, (attributes.ctaType === "button" || attributes.ctaType === "text") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "uagb-cta__button-wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
        href: link,
        className: ctaBtnClass,
        target: target,
        rel: rel
      }, attributes.ctaIconPosition === "before" && cta_icon_output, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "uagb-cta__link-content-inner"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, attributes.ctaText)), attributes.ctaIconPosition === "after" && cta_icon_output)));
    }
  }]);

  return CTA;
}(React.Component);

/* harmony default export */ __webpack_exports__["default"] = (CTA);

/***/ }),

/***/ "./src/blocks/call-to-action/components/CallToAction.js":
/*!**************************************************************!*\
  !*** ./src/blocks/call-to-action/components/CallToAction.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);






var __ = wp.i18n.__;


var CallToAction =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CallToAction, _React$Component);

  function CallToAction() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CallToAction);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CallToAction).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CallToAction, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var ctaBtnClass = "uagb-cta__block-link uagb-cta__button-link-wrapper uagb-cta-typeof-" + attributes.ctaType;
      var target = "_self";
      var rel = "noopener noreferrer";

      if (attributes.ctaTarget) {
        target = "_blank";
      }

      var cta_icon_output = "";

      if (attributes.ctaIcon !== "") {
        cta_icon_output = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("uagb-cta-".concat(attributes.ctaType, "-icon"), "uagb-cta__align-button-".concat(attributes.ctaIconPosition))
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("i", {
          className: attributes.ctaIcon
        }));
      }

      var link = "javascript:void(0)";

      if (setAttributes == "not_set") {
        link = attributes.ctaLink;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "uagb-cta__link-wrapper uagb-cta__block-link-style"
      }, (attributes.ctaType === "button" || attributes.ctaType === "text") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "uagb-cta__button-wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
        href: link,
        className: ctaBtnClass,
        target: target,
        rel: rel
      }, attributes.ctaIconPosition === "before" && cta_icon_output, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "uagb-cta__link-content-inner"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, attributes.ctaText)), attributes.ctaIconPosition === "after" && cta_icon_output)));
    }
  }]);

  return CallToAction;
}(React.Component);

/* harmony default export */ __webpack_exports__["default"] = (CallToAction);

/***/ }),

/***/ "./src/blocks/call-to-action/components/Description.js":
/*!*************************************************************!*\
  !*** ./src/blocks/call-to-action/components/Description.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






var RichText = wp.blockEditor.RichText;
var __ = wp.i18n.__;
var createBlock = wp.blocks.createBlock;

var Description =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Description, _React$Component);

  function Description() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Description);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Description).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Description, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          props = _this$props.props;

      if (setAttributes !== "not_set") {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RichText, {
          tagName: "p",
          value: attributes.description,
          placeholder: __("Write a Description"),
          className: "uagb-cta__desc",
          onChange: function onChange(value) {
            return setAttributes({
              description: value
            });
          },
          onMerge: props.mergeBlocks,
          unstableOnSplit: props.insertBlocksAfter ? function (before, after) {
            setAttributes({
              content: before
            });

            for (var _len = arguments.length, blocks = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              blocks[_key - 2] = arguments[_key];
            }

            props.insertBlocksAfter([].concat(blocks, [createBlock("core/paragraph", {
              content: after
            })]));
          } : undefined,
          onRemove: function onRemove() {
            return props.onReplace([]);
          }
        });
      } else {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RichText.Content, {
          tagName: "p",
          value: attributes.description,
          className: "uagb-cta__desc"
        });
      }
    }
  }]);

  return Description;
}(React.Component);

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./src/blocks/call-to-action/components/Title.js":
/*!*******************************************************!*\
  !*** ./src/blocks/call-to-action/components/Title.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






var RichText = wp.blockEditor.RichText;
var createBlock = wp.blocks.createBlock;
var __ = wp.i18n.__;

var Title =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Title, _React$Component);

  function Title() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Title);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Title).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Title, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          props = _this$props.props;

      if (setAttributes !== "not_set") {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RichText, {
          tagName: attributes.titleTag,
          placeholder: __("Write a Heading"),
          value: attributes.ctaTitle,
          className: "uagb-cta__title",
          onChange: function onChange(value) {
            return setAttributes({
              ctaTitle: value
            });
          },
          multiline: false,
          onMerge: props.mergeBlocks,
          unstableOnSplit: props.insertBlocksAfter ? function (before, after) {
            setAttributes({
              content: before
            });

            for (var _len = arguments.length, blocks = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              blocks[_key - 2] = arguments[_key];
            }

            props.insertBlocksAfter([].concat(blocks, [createBlock("core/paragraph", {
              content: after
            })]));
          } : undefined,
          onRemove: function onRemove() {
            return props.onReplace([]);
          }
        });
      } else {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RichText.Content, {
          tagName: attributes.titleTag,
          value: attributes.ctaTitle,
          className: "uagb-cta__title"
        });
      }
    }
  }]);

  return Title;
}(React.Component);

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/blocks/call-to-action/components/typography/font-typography.js":
/*!****************************************************************************!*\
  !*** ./src/blocks/call-to-action/components/typography/font-typography.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fonts */ "./src/blocks/call-to-action/components/typography/fonts.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");




/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var SelectControl = wp.components.SelectControl; // Extend component

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
/**
 * Internal dependencies
 */





function FontFamilyControl(props) {
  var fonts = [{
    value: "",
    label: __("Default"),
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    google: false
  }, {
    value: "Arial",
    label: "Arial",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    google: false
  }, {
    value: "Helvetica",
    label: "Helvetica",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    google: false
  }, {
    value: "Times New Roman",
    label: "Times New Roman",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    google: false
  }, {
    value: "Georgia",
    label: "Georgia",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    google: false
  }];
  var fontWeight = "";
  var fontSubset = ""; //Push Google Fonts into stytem fonts object

  Object.keys(_fonts__WEBPACK_IMPORTED_MODULE_4__["default"]).map(function (k, v) {
    fonts.push({
      value: k,
      label: k,
      weight: _fonts__WEBPACK_IMPORTED_MODULE_4__["default"][k].weight
    });

    if (k === props.fontFamily.value) {
      fontWeight = _fonts__WEBPACK_IMPORTED_MODULE_4__["default"][k].weight;
      fontSubset = _fonts__WEBPACK_IMPORTED_MODULE_4__["default"][k].subset;
    }
  }); // check if the font is a system font and then apply the font weight accordingly.

  if (fontWeight === "") {
    fontWeight = fonts[0].weight;
  }

  var fontWeightObj = [];
  fontWeight.forEach(function (item) {
    fontWeightObj.push({
      value: item,
      label: item
    });
  });
  var fontSubsetObj = [];

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(fontSubset) == "object") {
    fontSubset.forEach(function (item) {
      fontSubsetObj.push({
        value: item,
        label: item
      });
    });
  }

  var onFontfamilyChange = function onFontfamilyChange(value) {
    var loadGoogleFonts = props.loadGoogleFonts,
        fontFamily = props.fontFamily,
        fontWeight = props.fontWeight,
        fontSubset = props.fontSubset;
    props.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, fontFamily.label, value.label));
    onLoadGoogleFonts(loadGoogleFonts, value.label);
    onFontChange(fontWeight, fontSubset, value.label);
  };

  var onFontChange = function onFontChange(fontWeight, fontSubset, fontFamily) {
    var font_flag;
    var new_value;

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(_fonts__WEBPACK_IMPORTED_MODULE_4__["default"][fontFamily]) == "object") {
      var gfontsObj = _fonts__WEBPACK_IMPORTED_MODULE_4__["default"][fontFamily].weight;
      var gfontSubsetObj = _fonts__WEBPACK_IMPORTED_MODULE_4__["default"][fontFamily].subset;

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(gfontsObj) == "object") {
        gfontsObj.forEach(function (item) {
          if (fontWeight.value == item) {
            font_flag = false;
          } else {
            new_value = item;
            font_flag = true;
            props.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.fontWeight.label, new_value));
            return;
          }
        });
        gfontSubsetObj.forEach(function (item) {
          if (fontSubset.value == item) {
            font_flag = false;
          } else {
            new_value = item;
            font_flag = true;
            props.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.fontSubset.label, new_value));
            return;
          }
        });
      }
    }
  };

  var onLoadGoogleFonts = function onLoadGoogleFonts(loadGoogleFonts, fontFamily) {
    var value;

    if (fontFamily != "" && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(_fonts__WEBPACK_IMPORTED_MODULE_4__["default"][fontFamily]) != "object") {
      value = false;
    } else {
      value = true;
    }

    props.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, loadGoogleFonts.label, value));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "uag-typography-font-family-options"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: "uag-typography-font-family-label"
  }, __("Font Family")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: fonts,
    value: {
      value: props.fontFamily.value,
      label: props.fontFamily.value,
      weight: fontWeightObj
    },
    isMulti: false,
    maxMenuHeight: 300,
    onChange: onFontfamilyChange,
    className: "react-select-container",
    classNamePrefix: "react-select"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
    label: __("Font Weight"),
    value: props.fontWeight.value,
    onChange: function onChange(value) {
      return props.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.fontWeight.label, value));
    },
    options: fontWeightObj
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
    label: __("Font Subset"),
    value: props.fontSubset.value,
    onChange: function onChange(value) {
      return props.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.fontSubset.label, value));
    },
    options: fontSubsetObj
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FontFamilyControl);

/***/ }),

/***/ "./src/blocks/call-to-action/components/typography/fontloader.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/call-to-action/components/typography/fontloader.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_7__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

if (googlefonts === undefined) {
  var googlefonts = [];
}

var Component = wp.element.Component;


var statuses = {
  inactive: "inactive",
  active: "active",
  loading: "loading"
};

var noop = function noop() {};

var WebfontLoader =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(WebfontLoader, _Component);

  function WebfontLoader(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, WebfontLoader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(WebfontLoader).call(this, props));
    _this.state = {
      status: undefined
    };

    _this.handleLoading = function () {
      _this.setState({
        status: statuses.loading
      });
    };

    _this.addFont = function (font) {
      if (!googlefonts.includes(font)) {
        googlefonts.push(font);
      }
    };

    _this.handleActive = function () {
      _this.setState({
        status: statuses.active
      });
    };

    _this.handleInactive = function () {
      _this.setState({
        status: statuses.inactive
      });
    };

    _this.loadFonts = function () {
      //if ( ! this.state.fonts.includes( this.props.config.google.families[ 0 ] ) ) {
      if (!googlefonts.includes(_this.props.config.google.families[0])) {
        webfontloader__WEBPACK_IMPORTED_MODULE_7___default.a.load(_objectSpread({}, _this.props.config, {
          loading: _this.handleLoading,
          active: _this.handleActive,
          inactive: _this.handleInactive
        }));

        _this.addFont(_this.props.config.google.families[0]);
      }
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(WebfontLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadFonts();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          onStatus = _this$props.onStatus,
          config = _this$props.config;

      if (prevState.status !== this.state.status) {
        onStatus(this.state.status);
      }

      if (prevProps.config !== config) {
        this.loadFonts();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children || null;
    }
  }]);

  return WebfontLoader;
}(Component);

WebfontLoader.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element,
  onStatus: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
WebfontLoader.defaultProps = {
  onStatus: noop
};
/* harmony default export */ __webpack_exports__["default"] = (WebfontLoader);

/***/ }),

/***/ "./src/blocks/call-to-action/components/typography/fonts.js":
/*!******************************************************************!*\
  !*** ./src/blocks/call-to-action/components/typography/fonts.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Google Fonts for the FontFamily component.
 */
var fonts = {};
fonts["ABeeZee"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Abel"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Abhaya Libre"] = {
  "v": ["regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "sinhala", "latin"],
  "weight": ["400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Abril Fatface"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Aclonica"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Acme"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Actor"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Adamina"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Advent Pro"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "greek", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Aguafina Script"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Akronim"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Aladin"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Aldrich"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Alef"] = {
  "v": ["regular", "700"],
  "subset": ["hebrew", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Alegreya"] = {
  "v": ["regular", "italic", "500", "500italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["400", "500", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Alegreya SC"] = {
  "v": ["regular", "italic", "500", "500italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["400", "500", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Alegreya Sans"] = {
  "v": ["100", "100italic", "300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "500", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Alegreya Sans SC"] = {
  "v": ["100", "100italic", "300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "500", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Alex Brush"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Alfa Slab One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Alice"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Alike"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Alike Angular"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Allan"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Allerta"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Allerta Stencil"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Allura"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Almendra"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Almendra Display"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Almendra SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Amarante"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Amaranth"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Amatic SC"] = {
  "v": ["regular", "700"],
  "subset": ["cyrillic", "latin-ext", "hebrew", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Amethysta"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Amiko"] = {
  "v": ["regular", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "600", "700"],
  "i": ["normal"]
};
fonts["Amiri"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "arabic", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Amita"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Anaheim"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Andada"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Andika"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Angkor"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Annie Use Your Telescope"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Anonymous Pro"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "latin-ext", "greek", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Antic"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Antic Didone"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Antic Slab"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Anton"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Arapey"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Arbutus"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Arbutus Slab"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Architects Daughter"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Archivo"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Archivo Black"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Archivo Narrow"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Aref Ruqaa"] = {
  "v": ["regular", "700"],
  "subset": ["arabic", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Arima Madurai"] = {
  "v": ["100", "200", "300", "regular", "500", "700", "800", "900"],
  "subset": ["latin-ext", "tamil", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Arimo"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "hebrew", "greek", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Arizonia"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Armata"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Arsenal"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Artifika"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Arvo"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Arya"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Asap"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Asap Condensed"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Asar"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Asset"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Assistant"] = {
  "v": ["200", "300", "regular", "600", "700", "800"],
  "subset": ["hebrew", "latin"],
  "weight": ["200", "300", "400", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Astloch"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Asul"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Athiti"] = {
  "v": ["200", "300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Atma"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "bengali", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Atomic Age"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Aubrey"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Audiowide"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Autour One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Average"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Average Sans"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Averia Gruesa Libre"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Averia Libre"] = {
  "v": ["300", "300italic", "regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal", "italic"]
};
fonts["Averia Sans Libre"] = {
  "v": ["300", "300italic", "regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal", "italic"]
};
fonts["Averia Serif Libre"] = {
  "v": ["300", "300italic", "regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal", "italic"]
};
fonts["Bad Script"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bahiana"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "devanagari", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Bhai"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "gujarati", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Bhaijaan"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "arabic", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Bhaina"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "oriya", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Chettan"] = {
  "v": ["regular"],
  "subset": ["malayalam", "latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Da"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "bengali", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Paaji"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "gurmukhi", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Tamma"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin", "kannada"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Tammudu"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "telugu", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Thambi"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "tamil", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Balthazar"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bangers"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Barlow"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Barlow Condensed"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Barlow Semi Condensed"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Barrio"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Basic"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Battambang"] = {
  "v": ["regular", "700"],
  "subset": ["khmer"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Baumans"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bayon"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Belgrano"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bellefair"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "hebrew", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Belleza"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["BenchNine"] = {
  "v": ["300", "regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal"]
};
fonts["Bentham"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Berkshire Swash"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bevan"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bigelow Rules"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bigshot One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bilbo"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bilbo Swash Caps"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["BioRhyme"] = {
  "v": ["200", "300", "regular", "700", "800"],
  "subset": ["latin-ext", "latin"],
  "weight": ["200", "300", "400", "700", "800"],
  "i": ["normal"]
};
fonts["BioRhyme Expanded"] = {
  "v": ["200", "300", "regular", "700", "800"],
  "subset": ["latin-ext", "latin"],
  "weight": ["200", "300", "400", "700", "800"],
  "i": ["normal"]
};
fonts["Biryani"] = {
  "v": ["200", "300", "regular", "600", "700", "800", "900"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["200", "300", "400", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Bitter"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Black And White Picture"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Black Han Sans"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Black Ops One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bokor"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bonbon"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Boogaloo"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bowlby One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bowlby One SC"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Brawler"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bree Serif"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bubblegum Sans"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bubbler One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Buda"] = {
  "v": ["300"],
  "subset": ["latin"],
  "weight": ["300"],
  "i": []
};
fonts["Buenard"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Bungee"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bungee Hairline"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bungee Inline"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bungee Outline"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bungee Shade"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Butcherman"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Butterfly Kids"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cabin"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Cabin Condensed"] = {
  "v": ["regular", "500", "600", "700"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Cabin Sketch"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Caesar Dressing"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cagliostro"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cairo"] = {
  "v": ["200", "300", "regular", "600", "700", "900"],
  "subset": ["latin-ext", "arabic", "latin"],
  "weight": ["200", "300", "400", "600", "700", "900"],
  "i": ["normal"]
};
fonts["Calligraffitti"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cambay"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Cambo"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Candal"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cantarell"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Cantata One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cantora One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Capriola"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cardo"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["greek-ext", "latin-ext", "greek", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Carme"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Carrois Gothic"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Carrois Gothic SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Carter One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Catamaran"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "tamil", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Caudex"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["greek-ext", "latin-ext", "greek", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Caveat"] = {
  "v": ["regular", "700"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Caveat Brush"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cedarville Cursive"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ceviche One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Changa"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "arabic", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Changa One"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Chango"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Chathura"] = {
  "v": ["100", "300", "regular", "700", "800"],
  "subset": ["telugu", "latin"],
  "weight": ["100", "300", "400", "700", "800"],
  "i": ["normal"]
};
fonts["Chau Philomene One"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Chela One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Chelsea Market"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Chenla"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cherry Cream Soda"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cherry Swash"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Chewy"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Chicle"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Chivo"] = {
  "v": ["300", "300italic", "regular", "italic", "700", "700italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Chonburi"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cinzel"] = {
  "v": ["regular", "700", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal"]
};
fonts["Cinzel Decorative"] = {
  "v": ["regular", "700", "900"],
  "subset": ["latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal"]
};
fonts["Clicker Script"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Coda"] = {
  "v": ["regular", "800"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "800"],
  "i": ["normal"]
};
fonts["Coda Caption"] = {
  "v": ["800"],
  "subset": ["latin-ext", "latin"],
  "weight": ["800"],
  "i": []
};
fonts["Codystar"] = {
  "v": ["300", "regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400"],
  "i": ["normal"]
};
fonts["Coiny"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "tamil", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Combo"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Comfortaa"] = {
  "v": ["300", "regular", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal"]
};
fonts["Coming Soon"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Concert One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Condiment"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Content"] = {
  "v": ["regular", "700"],
  "subset": ["khmer"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Contrail One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Convergence"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cookie"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Copse"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Corben"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Cormorant"] = {
  "v": ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Cormorant Garamond"] = {
  "v": ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Cormorant Infant"] = {
  "v": ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Cormorant SC"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Cormorant Unicase"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Cormorant Upright"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Courgette"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cousine"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "hebrew", "greek", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Coustard"] = {
  "v": ["regular", "900"],
  "subset": ["latin"],
  "weight": ["400", "900"],
  "i": ["normal"]
};
fonts["Covered By Your Grace"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Crafty Girls"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Creepster"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Crete Round"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Crimson Text"] = {
  "v": ["regular", "italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Croissant One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Crushed"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cuprum"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Cute Font"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cutive"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cutive Mono"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Damion"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Dancing Script"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Dangrek"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["David Libre"] = {
  "v": ["regular", "500", "700"],
  "subset": ["latin-ext", "hebrew", "vietnamese", "latin"],
  "weight": ["400", "500", "700"],
  "i": ["normal"]
};
fonts["Dawning of a New Day"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Days One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Dekko"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Delius"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Delius Swash Caps"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Delius Unicase"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Della Respira"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Denk One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Devonshire"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Dhurjati"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Didact Gothic"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Diplomata"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Diplomata SC"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Do Hyeon"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Dokdo"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Domine"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Donegal One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Doppio One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Dorsa"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Dosis"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Dr Sugiyama"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Duru Sans"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Dynalight"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["EB Garamond"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700", "800"],
  "i": ["normal", "italic"]
};
fonts["Eagle Lake"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["East Sea Dokdo"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Eater"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Economica"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Eczar"] = {
  "v": ["regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["El Messiri"] = {
  "v": ["regular", "500", "600", "700"],
  "subset": ["cyrillic", "arabic", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Electrolize"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Elsie"] = {
  "v": ["regular", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "900"],
  "i": ["normal"]
};
fonts["Elsie Swash Caps"] = {
  "v": ["regular", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "900"],
  "i": ["normal"]
};
fonts["Emblema One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Emilys Candy"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Encode Sans"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Encode Sans Condensed"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Encode Sans Expanded"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Encode Sans Semi Condensed"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Encode Sans Semi Expanded"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Engagement"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Englebert"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Enriqueta"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Erica One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Esteban"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Euphoria Script"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ewert"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Exo"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Exo 2"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Expletus Sans"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Fanwood Text"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Farsan"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "gujarati", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fascinate"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fascinate Inline"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Faster One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fasthand"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fauna One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Faustina"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Federant"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Federo"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Felipa"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fenix"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Finger Paint"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fira Mono"] = {
  "v": ["regular", "500", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "latin"],
  "weight": ["400", "500", "700"],
  "i": ["normal"]
};
fonts["Fira Sans"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Fira Sans Condensed"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Fira Sans Extra Condensed"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Fjalla One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fjord One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Flamenco"] = {
  "v": ["300", "regular"],
  "subset": ["latin"],
  "weight": ["300", "400"],
  "i": ["normal"]
};
fonts["Flavors"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fondamento"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Fontdiner Swanky"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Forum"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Francois One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Frank Ruhl Libre"] = {
  "v": ["300", "regular", "500", "700", "900"],
  "subset": ["latin-ext", "hebrew", "latin"],
  "weight": ["300", "400", "500", "700", "900"],
  "i": ["normal"]
};
fonts["Freckle Face"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fredericka the Great"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fredoka One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Freehand"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fresca"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Frijole"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fruktur"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fugaz One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["GFS Didot"] = {
  "v": ["regular"],
  "subset": ["greek"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["GFS Neohellenic"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["greek"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Gabriela"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gaegu"] = {
  "v": ["300", "regular", "700"],
  "subset": ["korean", "latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal"]
};
fonts["Gafata"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Galada"] = {
  "v": ["regular"],
  "subset": ["bengali", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Galdeano"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Galindo"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gamja Flower"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gentium Basic"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Gentium Book Basic"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Geo"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Geostar"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Geostar Fill"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Germania One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gidugu"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gilda Display"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Give You Glory"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Glass Antiqua"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Glegoo"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Gloria Hallelujah"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Goblin One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gochi Hand"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gorditas"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Gothic A1"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["korean", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Goudy Bookletter 1911"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Graduate"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Grand Hotel"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gravitas One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Great Vibes"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Griffy"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gruppo"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gudea"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Gugi"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gurajada"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Habibi"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Halant"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Hammersmith One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Hanalei"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Hanalei Fill"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Handlee"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Hanuman"] = {
  "v": ["regular", "700"],
  "subset": ["khmer"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Happy Monkey"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Harmattan"] = {
  "v": ["regular"],
  "subset": ["arabic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Headland One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Heebo"] = {
  "v": ["100", "300", "regular", "500", "700", "800", "900"],
  "subset": ["hebrew", "latin"],
  "weight": ["100", "300", "400", "500", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Henny Penny"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Herr Von Muellerhoff"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Hi Melody"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Hind"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Hind Guntur"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "telugu", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Hind Madurai"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "tamil", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Hind Siliguri"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "bengali", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Hind Vadodara"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "gujarati", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Holtwood One SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Homemade Apple"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Homenaje"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["IBM Plex Mono"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["IBM Plex Sans"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["IBM Plex Sans Condensed"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["IBM Plex Serif"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["IM Fell DW Pica"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["IM Fell DW Pica SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["IM Fell Double Pica"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["IM Fell Double Pica SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["IM Fell English"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["IM Fell English SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["IM Fell French Canon"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["IM Fell French Canon SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["IM Fell Great Primer"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["IM Fell Great Primer SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Iceberg"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Iceland"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Imprima"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Inconsolata"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Inder"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Indie Flower"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Inika"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Inknut Antiqua"] = {
  "v": ["300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Irish Grover"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Istok Web"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Italiana"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Italianno"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Itim"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jacques Francois"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jacques Francois Shadow"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jaldi"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Jim Nightshade"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jockey One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jolly Lodger"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jomhuria"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "arabic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Josefin Sans"] = {
  "v": ["100", "100italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Josefin Slab"] = {
  "v": ["100", "100italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["100", "300", "400", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Joti One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jua"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Judson"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Julee"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Julius Sans One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Junge"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jura"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Just Another Hand"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Just Me Again Down Here"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kadwa"] = {
  "v": ["regular", "700"],
  "subset": ["devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Kalam"] = {
  "v": ["300", "regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal"]
};
fonts["Kameron"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Kanit"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Kantumruy"] = {
  "v": ["300", "regular", "700"],
  "subset": ["khmer"],
  "weight": ["300", "400", "700"],
  "i": ["normal"]
};
fonts["Karla"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Karma"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Katibeh"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "arabic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kaushan Script"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kavivanar"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "tamil", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kavoon"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kdam Thmor"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Keania One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kelly Slab"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kenia"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Khand"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Khmer"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Khula"] = {
  "v": ["300", "regular", "600", "700", "800"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Kirang Haerang"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kite One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Knewave"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kosugi"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "japanese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kosugi Maru"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "japanese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kotta One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Koulen"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kranky"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kreon"] = {
  "v": ["300", "regular", "700"],
  "subset": ["latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal"]
};
fonts["Kristi"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Krona One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kumar One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "gujarati", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kumar One Outline"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "gujarati", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kurale"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "devanagari", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["La Belle Aurore"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Laila"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Lakki Reddy"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lalezar"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "arabic", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lancelot"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lateef"] = {
  "v": ["regular"],
  "subset": ["arabic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lato"] = {
  "v": ["100", "100italic", "300", "300italic", "regular", "italic", "700", "700italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "300", "400", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["League Script"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Leckerli One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ledger"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lekton"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Lemon"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lemonada"] = {
  "v": ["300", "regular", "600", "700"],
  "subset": ["latin-ext", "arabic", "vietnamese", "latin"],
  "weight": ["300", "400", "600", "700"],
  "i": ["normal"]
};
fonts["Libre Barcode 128"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Libre Barcode 128 Text"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Libre Barcode 39"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Libre Barcode 39 Extended"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Libre Barcode 39 Extended Text"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Libre Barcode 39 Text"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Libre Baskerville"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Libre Franklin"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Life Savers"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Lilita One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lily Script One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Limelight"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Linden Hill"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Lobster"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lobster Two"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Londrina Outline"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Londrina Shadow"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Londrina Sketch"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Londrina Solid"] = {
  "v": ["100", "300", "regular", "900"],
  "subset": ["latin"],
  "weight": ["100", "300", "400", "900"],
  "i": ["normal"]
};
fonts["Lora"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Love Ya Like A Sister"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Loved by the King"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lovers Quarrel"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Luckiest Guy"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lusitana"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Lustria"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["M PLUS 1p"] = {
  "v": ["100", "300", "regular", "500", "700", "800", "900"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "japanese", "latin-ext", "hebrew", "greek", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "500", "700", "800", "900"],
  "i": ["normal"]
};
fonts["M PLUS Rounded 1c"] = {
  "v": ["100", "300", "regular", "500", "700", "800", "900"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "japanese", "latin-ext", "hebrew", "greek", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "500", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Macondo"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Macondo Swash Caps"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mada"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "900"],
  "subset": ["arabic", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "900"],
  "i": ["normal"]
};
fonts["Magra"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Maiden Orange"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Maitree"] = {
  "v": ["200", "300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Mako"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mallanna"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mandali"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Manuale"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Marcellus"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Marcellus SC"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Marck Script"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Margarine"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Markazi Text"] = {
  "v": ["regular", "500", "600", "700"],
  "subset": ["latin-ext", "arabic", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Marko One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Marmelad"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Martel"] = {
  "v": ["200", "300", "regular", "600", "700", "800", "900"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["200", "300", "400", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Martel Sans"] = {
  "v": ["200", "300", "regular", "600", "700", "800", "900"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["200", "300", "400", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Marvel"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Mate"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Mate SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Maven Pro"] = {
  "v": ["regular", "500", "700", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "700", "900"],
  "i": ["normal"]
};
fonts["McLaren"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Meddon"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["MedievalSharp"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Medula One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Meera Inimai"] = {
  "v": ["regular"],
  "subset": ["tamil", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Megrim"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Meie Script"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Merienda"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Merienda One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Merriweather"] = {
  "v": ["300", "300italic", "regular", "italic", "700", "700italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Merriweather Sans"] = {
  "v": ["300", "300italic", "regular", "italic", "700", "700italic", "800", "800italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "700", "800"],
  "i": ["normal", "italic"]
};
fonts["Metal"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Metal Mania"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Metamorphous"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Metrophobic"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Michroma"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Milonga"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Miltonian"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Miltonian Tattoo"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mina"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "bengali", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Miniver"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Miriam Libre"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "hebrew", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Mirza"] = {
  "v": ["regular", "500", "600", "700"],
  "subset": ["latin-ext", "arabic", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Miss Fajardose"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mitr"] = {
  "v": ["200", "300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Modak"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Modern Antiqua"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mogra"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "gujarati", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Molengo"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Molle"] = {
  "v": ["italic"],
  "subset": ["latin-ext", "latin"],
  "weight": [],
  "i": ["italic"]
};
fonts["Monda"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Monofett"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Monoton"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Monsieur La Doulaise"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Montaga"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Montez"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Montserrat"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Montserrat Alternates"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Montserrat Subrayada"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Moul"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Moulpali"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mountains of Christmas"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Mouse Memoirs"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mr Bedfort"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mr Dafoe"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mr De Haviland"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mrs Saint Delafield"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mrs Sheppards"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mukta"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Mukta Mahee"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "gurmukhi", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Mukta Malar"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "tamil", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Mukta Vaani"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "gujarati", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Muli"] = {
  "v": ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Mystery Quest"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["NTR"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nanum Brush Script"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nanum Gothic"] = {
  "v": ["regular", "700", "800"],
  "subset": ["korean", "latin"],
  "weight": ["400", "700", "800"],
  "i": ["normal"]
};
fonts["Nanum Gothic Coding"] = {
  "v": ["regular", "700"],
  "subset": ["korean", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Nanum Myeongjo"] = {
  "v": ["regular", "700", "800"],
  "subset": ["korean", "latin"],
  "weight": ["400", "700", "800"],
  "i": ["normal"]
};
fonts["Nanum Pen Script"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Neucha"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Neuton"] = {
  "v": ["200", "300", "regular", "italic", "700", "800"],
  "subset": ["latin-ext", "latin"],
  "weight": ["200", "300", "400", "700", "800"],
  "i": ["normal", "italic"]
};
fonts["New Rocker"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["News Cycle"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Niconne"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nixie One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nobile"] = {
  "v": ["regular", "italic", "500", "500italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "500", "700"],
  "i": ["normal", "italic"]
};
fonts["Nokora"] = {
  "v": ["regular", "700"],
  "subset": ["khmer"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Norican"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nosifer"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nothing You Could Do"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Noticia Text"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Noto Sans"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "devanagari", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Noto Sans JP"] = {
  "v": ["100", "300", "regular", "500", "700", "900"],
  "subset": ["japanese", "latin"],
  "weight": ["100", "300", "400", "500", "700", "900"],
  "i": ["normal"]
};
fonts["Noto Sans KR"] = {
  "v": ["100", "300", "regular", "500", "700", "900"],
  "subset": ["korean", "latin"],
  "weight": ["100", "300", "400", "500", "700", "900"],
  "i": ["normal"]
};
fonts["Noto Serif"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Noto Serif JP"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "900"],
  "subset": ["japanese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "900"],
  "i": ["normal"]
};
fonts["Noto Serif KR"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "900"],
  "subset": ["korean", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "900"],
  "i": ["normal"]
};
fonts["Nova Cut"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nova Flat"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nova Mono"] = {
  "v": ["regular"],
  "subset": ["greek", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nova Oval"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nova Round"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nova Script"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nova Slim"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nova Square"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Numans"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nunito"] = {
  "v": ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Nunito Sans"] = {
  "v": ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Odor Mean Chey"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Offside"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Old Standard TT"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Oldenburg"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Oleo Script"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Oleo Script Swash Caps"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Open Sans"] = {
  "v": ["300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "800", "800italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["300", "400", "600", "700", "800"],
  "i": ["normal", "italic"]
};
fonts["Open Sans Condensed"] = {
  "v": ["300", "300italic", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["300", "700"],
  "i": []
};
fonts["Oranienbaum"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Orbitron"] = {
  "v": ["regular", "500", "700", "900"],
  "subset": ["latin"],
  "weight": ["400", "500", "700", "900"],
  "i": ["normal"]
};
fonts["Oregano"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Orienta"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Original Surfer"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Oswald"] = {
  "v": ["200", "300", "regular", "500", "600", "700"],
  "subset": ["cyrillic", "latin-ext", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Over the Rainbow"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Overlock"] = {
  "v": ["regular", "italic", "700", "700italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Overlock SC"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Overpass"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Overpass Mono"] = {
  "v": ["300", "regular", "600", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "600", "700"],
  "i": ["normal"]
};
fonts["Ovo"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Oxygen"] = {
  "v": ["300", "regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal"]
};
fonts["Oxygen Mono"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["PT Mono"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["PT Sans"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["PT Sans Caption"] = {
  "v": ["regular", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["PT Sans Narrow"] = {
  "v": ["regular", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["PT Serif"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["PT Serif Caption"] = {
  "v": ["regular", "italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Pacifico"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Padauk"] = {
  "v": ["regular", "700"],
  "subset": ["myanmar", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Palanquin"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Palanquin Dark"] = {
  "v": ["regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Pangolin"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Paprika"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Parisienne"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Passero One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Passion One"] = {
  "v": ["regular", "700", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal"]
};
fonts["Pathway Gothic One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Patrick Hand"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Patrick Hand SC"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Pattaya"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Patua One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Pavanam"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "tamil", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Paytone One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Peddana"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Peralta"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Permanent Marker"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Petit Formal Script"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Petrona"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Philosopher"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Piedra"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Pinyon Script"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Pirata One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Plaster"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Play"] = {
  "v": ["regular", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Playball"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Playfair Display"] = {
  "v": ["regular", "italic", "700", "700italic", "900", "900italic"],
  "subset": ["cyrillic", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Playfair Display SC"] = {
  "v": ["regular", "italic", "700", "700italic", "900", "900italic"],
  "subset": ["cyrillic", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Podkova"] = {
  "v": ["regular", "500", "600", "700", "800"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Poiret One"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Poller One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Poly"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Pompiere"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Pontano Sans"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Poor Story"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Poppins"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Port Lligat Sans"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Port Lligat Slab"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Pragati Narrow"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Prata"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Preahvihear"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Press Start 2P"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "greek", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Pridi"] = {
  "v": ["200", "300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Princess Sofia"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Prociono"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Prompt"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Prosto One"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Proza Libre"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "500", "600", "700", "800"],
  "i": ["normal", "italic"]
};
fonts["Puritan"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Purple Purse"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Quando"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Quantico"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Quattrocento"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Quattrocento Sans"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Questrial"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Quicksand"] = {
  "v": ["300", "regular", "500", "700"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "700"],
  "i": ["normal"]
};
fonts["Quintessential"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Qwigley"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Racing Sans One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Radley"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Rajdhani"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Rakkas"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "arabic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Raleway"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Raleway Dots"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ramabhadra"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ramaraja"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rambla"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Rammetto One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ranchers"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rancho"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ranga"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Rasa"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "gujarati", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Rationale"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ravi Prakash"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Redressed"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Reem Kufi"] = {
  "v": ["regular"],
  "subset": ["arabic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Reenie Beanie"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Revalia"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rhodium Libre"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ribeye"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ribeye Marrow"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Righteous"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Risque"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Roboto"] = {
  "v": ["100", "100italic", "300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "500", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Roboto Condensed"] = {
  "v": ["300", "300italic", "regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal", "italic"]
};
fonts["Roboto Mono"] = {
  "v": ["100", "100italic", "300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "500", "700"],
  "i": ["normal", "italic"]
};
fonts["Roboto Slab"] = {
  "v": ["100", "300", "regular", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "700"],
  "i": ["normal"]
};
fonts["Rochester"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rock Salt"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rokkitt"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Romanesco"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ropa Sans"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Rosario"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Rosarivo"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Rouge Script"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rozha One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rubik"] = {
  "v": ["300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic", "900", "900italic"],
  "subset": ["cyrillic", "latin-ext", "hebrew", "latin"],
  "weight": ["300", "400", "500", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Rubik Mono One"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ruda"] = {
  "v": ["regular", "700", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal"]
};
fonts["Rufina"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Ruge Boogie"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ruluko"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rum Raisin"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ruslan Display"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Russo One"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ruthie"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rye"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sacramento"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sahitya"] = {
  "v": ["regular", "700"],
  "subset": ["devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Sail"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Saira"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Saira Condensed"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Saira Extra Condensed"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Saira Semi Condensed"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Salsa"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sanchez"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Sancreek"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sansita"] = {
  "v": ["regular", "italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Sarala"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Sarina"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sarpanch"] = {
  "v": ["regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Satisfy"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sawarabi Gothic"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "japanese", "latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sawarabi Mincho"] = {
  "v": ["regular"],
  "subset": ["japanese", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Scada"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Scheherazade"] = {
  "v": ["regular", "700"],
  "subset": ["arabic", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Schoolbell"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Scope One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Seaweed Script"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Secular One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "hebrew", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sedgwick Ave"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sedgwick Ave Display"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sevillana"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Seymour One"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Shadows Into Light"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Shadows Into Light Two"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Shanti"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Share"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Share Tech"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Share Tech Mono"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Shojumaru"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Short Stack"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Shrikhand"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "gujarati", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Siemreap"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sigmar One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Signika"] = {
  "v": ["300", "regular", "600", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "600", "700"],
  "i": ["normal"]
};
fonts["Signika Negative"] = {
  "v": ["300", "regular", "600", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "600", "700"],
  "i": ["normal"]
};
fonts["Simonetta"] = {
  "v": ["regular", "italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "900"],
  "i": ["normal", "italic"]
};
fonts["Sintony"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Sirin Stencil"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Six Caps"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Skranji"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Slabo 13px"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Slabo 27px"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Slackey"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Smokum"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Smythe"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sniglet"] = {
  "v": ["regular", "800"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "800"],
  "i": ["normal"]
};
fonts["Snippet"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Snowburst One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sofadi One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sofia"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Song Myung"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sonsie One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sorts Mill Goudy"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Source Code Pro"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "900"],
  "i": ["normal"]
};
fonts["Source Sans Pro"] = {
  "v": ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "600", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Source Serif Pro"] = {
  "v": ["regular", "600", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "600", "700"],
  "i": ["normal"]
};
fonts["Space Mono"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Special Elite"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Spectral"] = {
  "v": ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"],
  "subset": ["cyrillic", "latin-ext", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal", "italic"]
};
fonts["Spectral SC"] = {
  "v": ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"],
  "subset": ["cyrillic", "latin-ext", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal", "italic"]
};
fonts["Spicy Rice"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Spinnaker"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Spirax"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Squada One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sree Krushnadevaraya"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sriracha"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Stalemate"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Stalinist One"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Stardos Stencil"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Stint Ultra Condensed"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Stint Ultra Expanded"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Stoke"] = {
  "v": ["300", "regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400"],
  "i": ["normal"]
};
fonts["Strait"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Stylish"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sue Ellen Francisco"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Suez One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "hebrew", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sumana"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Sunflower"] = {
  "v": ["300", "500", "700"],
  "subset": ["korean", "latin"],
  "weight": ["300", "500", "700"],
  "i": []
};
fonts["Sunshiney"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Supermercado One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sura"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Suranna"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Suravaram"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Suwannaphum"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Swanky and Moo Moo"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Syncopate"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Tajawal"] = {
  "v": ["200", "300", "regular", "500", "700", "800", "900"],
  "subset": ["arabic", "latin"],
  "weight": ["200", "300", "400", "500", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Tangerine"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Taprom"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Tauri"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Taviraj"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Teko"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Telex"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Tenali Ramakrishna"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Tenor Sans"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Text Me One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["The Girl Next Door"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Tienne"] = {
  "v": ["regular", "700", "900"],
  "subset": ["latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal"]
};
fonts["Tillana"] = {
  "v": ["regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Timmana"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Tinos"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "hebrew", "greek", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Titan One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Titillium Web"] = {
  "v": ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["200", "300", "400", "600", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Trade Winds"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Trirong"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Trocchi"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Trochut"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Trykker"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Tulpen One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ubuntu"] = {
  "v": ["300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "latin"],
  "weight": ["300", "400", "500", "700"],
  "i": ["normal", "italic"]
};
fonts["Ubuntu Condensed"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ubuntu Mono"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Ultra"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Uncial Antiqua"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Underdog"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Unica One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["UnifrakturCook"] = {
  "v": ["700"],
  "subset": ["latin"],
  "weight": ["700"],
  "i": []
};
fonts["UnifrakturMaguntia"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Unkempt"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Unlock"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Unna"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["VT323"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Vampiro One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Varela"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Varela Round"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "hebrew", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Vast Shadow"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Vesper Libre"] = {
  "v": ["regular", "500", "700", "900"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "500", "700", "900"],
  "i": ["normal"]
};
fonts["Vibur"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Vidaloka"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Viga"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Voces"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Volkhov"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Vollkorn"] = {
  "v": ["regular", "italic", "600", "600italic", "700", "700italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["400", "600", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Vollkorn SC"] = {
  "v": ["regular", "600", "700", "900"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "600", "700", "900"],
  "i": ["normal"]
};
fonts["Voltaire"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Waiting for the Sunrise"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Wallpoet"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Walter Turncoat"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Warnes"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Wellfleet"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Wendy One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Wire One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Work Sans"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Yanone Kaffeesatz"] = {
  "v": ["200", "300", "regular", "700"],
  "subset": ["cyrillic", "latin-ext", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "700"],
  "i": ["normal"]
};
fonts["Yantramanav"] = {
  "v": ["100", "300", "regular", "500", "700", "900"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["100", "300", "400", "500", "700", "900"],
  "i": ["normal"]
};
fonts["Yatra One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Yellowtail"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Yeon Sung"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Yeseva One"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Yesteryear"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Yrsa"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Zeyada"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Zilla Slab"] = {
  "v": ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Zilla Slab Highlight"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
/* harmony default export */ __webpack_exports__["default"] = (fonts);

/***/ }),

/***/ "./src/blocks/call-to-action/components/typography/index.js":
/*!******************************************************************!*\
  !*** ./src/blocks/call-to-action/components/typography/index.js ***!
  \******************************************************************/
/*! exports provided: TypographyStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _font_typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./font-typography */ "./src/blocks/call-to-action/components/typography/font-typography.js");
/* harmony import */ var _range_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./range-typography */ "./src/blocks/call-to-action/components/typography/range-typography.js");
/* harmony import */ var _inline_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inline-styles */ "./src/blocks/call-to-action/components/typography/inline-styles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypographyStyles", function() { return _inline_styles__WEBPACK_IMPORTED_MODULE_11__["default"]; });











/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/**
 * Internal dependencies
 */



 // import "./editor.css"

var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon; // Extend component

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment; // Export for ease of importing in individual blocks.



var TypographyControl =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(TypographyControl, _Component);

  function TypographyControl() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TypographyControl);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(TypographyControl).apply(this, arguments));
    _this.onAdvancedControlClick = _this.onAdvancedControlClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    _this.onAdvancedControlReset = _this.onAdvancedControlReset.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TypographyControl, [{
    key: "onAdvancedControlClick",
    value: function onAdvancedControlClick() {
      var control = true;

      var label = __("Hide Advanced");

      if (this.state !== null && this.state.showAdvancedControls === true) {
        control = false;
        label = __("Advanced");
      }

      this.setState({
        showAdvancedControls: control,
        showAdvancedControlsLabel: label
      });
    }
  }, {
    key: "onAdvancedControlReset",
    value: function onAdvancedControlReset() {
      var setAttributes = this.props.setAttributes; // Reset Font family to default.

      setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.fontFamily.label, ""));
      setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.fontWeight.label, ""));
      setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.fontSubset.label, "")); // Reset Font Size to default.

      setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.fontSize.label, ""));
      setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.fontSizeType.label, "px"));
      setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.fontSizeMobile.label, ""));
      setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.fontSizeTablet.label, "")); // Reset Line Height to default.

      setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.lineHeight.label, ""));
      setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.lineHeightType.label, "em"));
      setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.lineHeightMobile.label, ""));
      setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.lineHeightTablet.label, "")); // Reset Google Fonts to default.

      setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.loadGoogleFonts.label, false));
    }
  }, {
    key: "render",
    value: function render() {
      var fontSize;
      var fontWeight;
      var fontFamily;
      var fontAdvancedControls;
      var fontTypoAdvancedControls;
      var showAdvancedFontControls;
      var resetFontAdvancedControls;
      var _this$props = this.props,
          disableFontFamily = _this$props.disableFontFamily,
          disableFontSize = _this$props.disableFontSize,
          disableLineHeight = _this$props.disableLineHeight,
          _this$props$disableAd = _this$props.disableAdvancedOptions,
          disableAdvancedOptions = _this$props$disableAd === void 0 ? false : _this$props$disableAd;

      if (true !== disableFontFamily) {
        fontFamily = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_font_typography__WEBPACK_IMPORTED_MODULE_9__["default"], this.props);
      }

      if (true !== disableLineHeight) {
        fontWeight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_range_typography__WEBPACK_IMPORTED_MODULE_10__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          type: this.props.lineHeightType,
          typeLabel: this.props.lineHeightType.label,
          sizeMobile: this.props.lineHeightMobile,
          sizeMobileLabel: this.props.lineHeightMobile.label,
          sizeTablet: this.props.lineHeightTablet,
          sizeTabletLabel: this.props.lineHeightTablet.label,
          size: this.props.lineHeight,
          sizeLabel: this.props.lineHeight.label,
          sizeMobileText: __("Line Height"),
          sizeTabletText: __("Line Height"),
          sizeText: __("Line Height"),
          steps: 0.1
        }, this.props));
      }

      if (true !== disableFontSize) {
        fontSize = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_range_typography__WEBPACK_IMPORTED_MODULE_10__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          type: this.props.fontSizeType,
          typeLabel: this.props.fontSizeType.label,
          sizeMobile: this.props.fontSizeMobile,
          sizeMobileLabel: this.props.fontSizeMobile.label,
          sizeTablet: this.props.fontSizeTablet,
          sizeTabletLabel: this.props.fontSizeTablet.label,
          size: this.props.fontSize,
          sizeLabel: this.props.fontSize.label,
          sizeMobileText: !this.props.fontSizeLabel ? __("Font Size") : this.props.fontSizeLabel,
          sizeTabletText: !this.props.fontSizeLabel ? __("Font Size") : this.props.fontSizeLabel,
          sizeText: !this.props.fontSizeLabel ? __("Font Size") : this.props.fontSizeLabel,
          steps: 0.1
        }, this.props));
      }

      if (true !== disableFontFamily && true !== disableFontSize) {
        fontAdvancedControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(Button, {
          className: "uagb-size-btn uagb-typography-control-btn",
          isSmall: true,
          "aria-pressed": this.state !== null,
          onClick: this.onAdvancedControlClick
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(Dashicon, {
          icon: "admin-tools"
        }));
        resetFontAdvancedControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(Button, {
          className: "uagb-size-btn uagb-typography-reset-btn",
          isSmall: true,
          "aria-pressed": this.state !== null,
          onClick: this.onAdvancedControlReset
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(Dashicon, {
          icon: "image-rotate"
        }));
      } else {
        showAdvancedFontControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(Fragment, null, fontSize, fontFamily, fontWeight);
      }

      if (this.state !== null && this.state.showAdvancedControls === true) {
        showAdvancedFontControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
          className: "uagb-typography-advanced"
        }, fontSize, fontFamily, fontWeight);
      }

      if (true !== disableFontFamily && true !== disableFontSize) {
        fontTypoAdvancedControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
          className: "uag-typography-option-actions"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("span", null, this.props.label), fontAdvancedControls, resetFontAdvancedControls);
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
        className: "uag-typography-options"
      }, !disableAdvancedOptions && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(Fragment, null, fontTypoAdvancedControls, showAdvancedFontControls));
    }
  }]);

  return TypographyControl;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (TypographyControl);

/***/ }),

/***/ "./src/blocks/call-to-action/components/typography/inline-styles.js":
/*!**************************************************************************!*\
  !*** ./src/blocks/call-to-action/components/typography/inline-styles.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Set inline styles.
 * @param {object} props - The block object.
 * @return {object} The inline text color CSS.
 */
function TypographyStyles(props) {
  return {};
}

/* harmony default export */ __webpack_exports__["default"] = (TypographyStyles);

/***/ }),

/***/ "./src/blocks/call-to-action/components/typography/range-typography.js":
/*!*****************************************************************************!*\
  !*** ./src/blocks/call-to-action/components/typography/range-typography.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_2__);



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button,
    TabPanel = _wp$components.TabPanel,
    Dashicon = _wp$components.Dashicon; // Extend component

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
/**
 * Internal dependencies
 */



function RangeTypographyControl(props) {
  var sizeTypes;

  if ("sizeTypes" in props) {
    sizeTypes = props.sizeTypes;
  } else {
    sizeTypes = [{
      key: "px",
      name: __("px")
    }, {
      key: "em",
      name: __("em")
    }];
  }

  var sizeTypesControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, {
    className: "uagb-size-type-field",
    "aria-label": __("Size Type")
  }, lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(sizeTypes, function (_ref) {
    var name = _ref.name,
        key = _ref.key;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      key: key,
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: props.type.value === key,
      "aria-pressed": props.type.value === key,
      onClick: function onClick() {
        return props.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.typeLabel, key));
      }
    }, name);
  }));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "uag-typography-range-options"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TabPanel, {
    className: "uagb-size-type-field-tabs",
    activeClass: "active-tab",
    tabs: [{
      name: "desktop",
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Dashicon, {
        icon: "desktop"
      }),
      className: "uagb-desktop-tab uagb-responsive-tabs"
    }, {
      name: "tablet",
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Dashicon, {
        icon: "tablet"
      }),
      className: "uagb-tablet-tab uagb-responsive-tabs"
    }, {
      name: "mobile",
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Dashicon, {
        icon: "smartphone"
      }),
      className: "uagb-mobile-tab uagb-responsive-tabs"
    }]
  }, function (tab) {
    var tabout;

    if ("mobile" === tab.name) {
      tabout = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, sizeTypesControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __(props.sizeMobileText),
        value: props.sizeMobile.value,
        onChange: function onChange(value) {
          return props.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.sizeMobileLabel, value));
        },
        min: 0,
        max: 100,
        step: props.steps,
        beforeIcon: "editor-textcolor",
        allowReset: true,
        initialPosition: 30
      }));
    } else if ("tablet" === tab.name) {
      tabout = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, sizeTypesControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __(props.sizeTabletText),
        value: props.sizeTablet.value,
        onChange: function onChange(value) {
          return props.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.sizeTabletLabel, value));
        },
        min: 0,
        max: 100,
        step: props.steps,
        beforeIcon: "editor-textcolor",
        allowReset: true,
        initialPosition: 30
      }));
    } else {
      tabout = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, sizeTypesControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __(props.sizeText),
        value: props.size.value,
        onChange: function onChange(value) {
          return props.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.sizeLabel, value));
        },
        min: 0,
        max: 100,
        step: props.steps,
        beforeIcon: "editor-textcolor",
        allowReset: true,
        initialPosition: 30
      }));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, tabout);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RangeTypographyControl);

/***/ }),

/***/ "./src/blocks/call-to-action/components/uagb-controls/UAGBIcon.json":
/*!**************************************************************************!*\
  !*** ./src/blocks/call-to-action/components/uagb-controls/UAGBIcon.json ***!
  \**************************************************************************/
/*! exports provided: 500px, accessible-icon, accusoft, acquisitions-incorporated, ad, address-book, address-card, adjust, adn, adversal, affiliatetheme, air-freshener, algolia, align-center, align-justify, align-left, align-right, alipay, allergies, amazon, amazon-pay, ambulance, american-sign-language-interpreting, amilia, anchor, android, angellist, angle-double-down, angle-double-left, angle-double-right, angle-double-up, angle-down, angle-left, angle-right, angle-up, angry, angrycreative, angular, ankh, app-store, app-store-ios, apper, apple, apple-alt, apple-pay, archive, archway, arrow-alt-circle-down, arrow-alt-circle-left, arrow-alt-circle-right, arrow-alt-circle-up, arrow-circle-down, arrow-circle-left, arrow-circle-right, arrow-circle-up, arrow-down, arrow-left, arrow-right, arrow-up, arrows-alt, arrows-alt-h, arrows-alt-v, assistive-listening-systems, asterisk, asymmetrik, at, atlas, atom, audible, audio-description, autoprefixer, avianex, aviato, award, aws, backspace, backward, balance-scale, ban, band-aid, bandcamp, barcode, bars, baseball-ball, basketball-ball, bath, battery-empty, battery-full, battery-half, battery-quarter, battery-three-quarters, bed, beer, behance, behance-square, bell, bell-slash, bezier-curve, bible, bicycle, bimobject, binoculars, birthday-cake, bitbucket, bitcoin, bity, black-tie, blackberry, blender, blender-phone, blind, blogger, blogger-b, bluetooth, bluetooth-b, bold, bolt, bomb, bone, bong, book, book-dead, book-open, book-reader, bookmark, bowling-ball, box, box-open, boxes, braille, brain, briefcase, briefcase-medical, broadcast-tower, broom, brush, btc, bug, building, bullhorn, bullseye, burn, buromobelexperte, bus, bus-alt, business-time, buysellads, calculator, calendar, calendar-alt, calendar-check, calendar-minus, calendar-plus, calendar-times, camera, camera-retro, campground, cannabis, capsules, car, car-alt, car-battery, car-crash, car-side, caret-down, caret-left, caret-right, caret-square-down, caret-square-left, caret-square-right, caret-square-up, caret-up, cart-arrow-down, cart-plus, cat, cc-amazon-pay, cc-amex, cc-apple-pay, cc-diners-club, cc-discover, cc-jcb, cc-mastercard, cc-paypal, cc-stripe, cc-visa, centercode, certificate, chair, chalkboard, chalkboard-teacher, charging-station, chart-area, chart-bar, chart-line, chart-pie, check, check-circle, check-double, check-square, chess, chess-bishop, chess-board, chess-king, chess-knight, chess-pawn, chess-queen, chess-rook, chevron-circle-down, chevron-circle-left, chevron-circle-right, chevron-circle-up, chevron-down, chevron-left, chevron-right, chevron-up, child, chrome, church, circle, circle-notch, city, clipboard, clipboard-check, clipboard-list, clock, clone, closed-captioning, cloud, cloud-download-alt, cloud-moon, cloud-sun, cloud-upload-alt, cloudscale, cloudsmith, cloudversify, cocktail, code, code-branch, codepen, codiepie, coffee, cog, cogs, coins, columns, comment, comment-alt, comment-dollar, comment-dots, comment-slash, comments, comments-dollar, compact-disc, compass, compress, concierge-bell, connectdevelop, contao, cookie, cookie-bite, copy, copyright, couch, cpanel, creative-commons, creative-commons-by, creative-commons-nc, creative-commons-nc-eu, creative-commons-nc-jp, creative-commons-nd, creative-commons-pd, creative-commons-pd-alt, creative-commons-remix, creative-commons-sa, creative-commons-sampling, creative-commons-sampling-plus, creative-commons-share, creative-commons-zero, credit-card, critical-role, crop, crop-alt, cross, crosshairs, crow, crown, css3, css3-alt, cube, cubes, cut, cuttlefish, d-and-d, dashcube, database, deaf, delicious, deploydog, deskpro, desktop, dev, deviantart, dharmachakra, diagnoses, dice, dice-d20, dice-d6, dice-five, dice-four, dice-one, dice-six, dice-three, dice-two, digg, digital-ocean, digital-tachograph, directions, discord, discourse, divide, dizzy, dna, dochub, docker, dog, dollar-sign, dolly, dolly-flatbed, donate, door-closed, door-open, dot-circle, dove, download, draft2digital, drafting-compass, dragon, draw-polygon, dribbble, dribbble-square, dropbox, drum, drum-steelpan, drumstick-bite, drupal, dumbbell, dungeon, dyalog, earlybirds, ebay, edge, edit, eject, elementor, ellipsis-h, ellipsis-v, ello, ember, empire, envelope, envelope-open, envelope-open-text, envelope-square, envira, equals, eraser, erlang, ethereum, etsy, euro-sign, exchange-alt, exclamation, exclamation-circle, exclamation-triangle, expand, expand-arrows-alt, expeditedssl, external-link-alt, external-link-square-alt, eye, eye-dropper, eye-slash, facebook, facebook-f, facebook-messenger, facebook-square, fantasy-flight-games, fast-backward, fast-forward, fax, feather, feather-alt, female, fighter-jet, file, file-alt, file-archive, file-audio, file-code, file-contract, file-csv, file-download, file-excel, file-export, file-image, file-import, file-invoice, file-invoice-dollar, file-medical, file-medical-alt, file-pdf, file-powerpoint, file-prescription, file-signature, file-upload, file-video, file-word, fill, fill-drip, film, filter, fingerprint, fire, fire-extinguisher, firefox, first-aid, first-order, first-order-alt, firstdraft, fish, fist-raised, flag, flag-checkered, flask, flickr, flipboard, flushed, fly, folder, folder-minus, folder-open, folder-plus, font, font-awesome, font-awesome-alt, font-awesome-flag, font-awesome-logo-full, fonticons, fonticons-fi, football-ball, fort-awesome, fort-awesome-alt, forumbee, forward, foursquare, free-code-camp, freebsd, frog, frown, frown-open, fulcrum, funnel-dollar, futbol, galactic-republic, galactic-senate, gamepad, gas-pump, gavel, gem, genderless, get-pocket, gg, gg-circle, ghost, gift, git, git-square, github, github-alt, github-square, gitkraken, gitlab, gitter, glass-martini, glass-martini-alt, glasses, glide, glide-g, globe, globe-africa, globe-americas, globe-asia, gofore, golf-ball, goodreads, goodreads-g, google, google-drive, google-play, google-plus, google-plus-g, google-plus-square, google-wallet, gopuram, graduation-cap, gratipay, grav, greater-than, greater-than-equal, grimace, grin, grin-alt, grin-beam, grin-beam-sweat, grin-hearts, grin-squint, grin-squint-tears, grin-stars, grin-tears, grin-tongue, grin-tongue-squint, grin-tongue-wink, grin-wink, grip-horizontal, grip-vertical, gripfire, grunt, gulp, h-square, hacker-news, hacker-news-square, hackerrank, hammer, hamsa, hand-holding, hand-holding-heart, hand-holding-usd, hand-lizard, hand-paper, hand-peace, hand-point-down, hand-point-left, hand-point-right, hand-point-up, hand-pointer, hand-rock, hand-scissors, hand-spock, hands, hands-helping, handshake, hanukiah, hashtag, hat-wizard, haykal, hdd, heading, headphones, headphones-alt, headset, heart, heartbeat, helicopter, highlighter, hiking, hippo, hips, hire-a-helper, history, hockey-puck, home, hooli, hornbill, horse, hospital, hospital-alt, hospital-symbol, hot-tub, hotel, hotjar, hourglass, hourglass-end, hourglass-half, hourglass-start, house-damage, houzz, hryvnia, html5, hubspot, i-cursor, id-badge, id-card, id-card-alt, image, images, imdb, inbox, indent, industry, infinity, info, info-circle, instagram, internet-explorer, ioxhost, italic, itunes, itunes-note, java, jedi, jedi-order, jenkins, joget, joint, joomla, journal-whills, js, js-square, jsfiddle, kaaba, kaggle, key, keybase, keyboard, keycdn, khanda, kickstarter, kickstarter-k, kiss, kiss-beam, kiss-wink-heart, kiwi-bird, korvue, landmark, language, laptop, laptop-code, laravel, lastfm, lastfm-square, laugh, laugh-beam, laugh-squint, laugh-wink, layer-group, leaf, leanpub, lemon, less, less-than, less-than-equal, level-down-alt, level-up-alt, life-ring, lightbulb, line, link, linkedin, linkedin-in, linode, linux, lira-sign, list, list-alt, list-ol, list-ul, location-arrow, lock, lock-open, long-arrow-alt-down, long-arrow-alt-left, long-arrow-alt-right, long-arrow-alt-up, low-vision, luggage-cart, lyft, magento, magic, magnet, mail-bulk, mailchimp, male, mandalorian, map, map-marked, map-marked-alt, map-marker, map-marker-alt, map-pin, map-signs, markdown, marker, mars, mars-double, mars-stroke, mars-stroke-h, mars-stroke-v, mask, mastodon, maxcdn, medal, medapps, medium, medium-m, medkit, medrt, meetup, megaport, meh, meh-blank, meh-rolling-eyes, memory, menorah, mercury, microchip, microphone, microphone-alt, microphone-alt-slash, microphone-slash, microscope, microsoft, minus, minus-circle, minus-square, mix, mixcloud, mizuni, mobile, mobile-alt, modx, monero, money-bill, money-bill-alt, money-bill-wave, money-bill-wave-alt, money-check, money-check-alt, monument, moon, mortar-pestle, mosque, motorcycle, mountain, mouse-pointer, music, napster, neos, network-wired, neuter, newspaper, nimblr, nintendo-switch, node, node-js, not-equal, notes-medical, npm, ns8, nutritionix, object-group, object-ungroup, odnoklassniki, odnoklassniki-square, oil-can, old-republic, om, opencart, openid, opera, optin-monster, osi, otter, outdent, page4, pagelines, paint-brush, paint-roller, palette, palfed, pallet, paper-plane, paperclip, parachute-box, paragraph, parking, passport, pastafarianism, paste, patreon, pause, pause-circle, paw, paypal, peace, pen, pen-alt, pen-fancy, pen-nib, pen-square, pencil-alt, pencil-ruler, penny-arcade, people-carry, percent, percentage, periscope, phabricator, phoenix-framework, phoenix-squadron, phone, phone-slash, phone-square, phone-volume, php, pied-piper, pied-piper-alt, pied-piper-hat, pied-piper-pp, piggy-bank, pills, pinterest, pinterest-p, pinterest-square, place-of-worship, plane, plane-arrival, plane-departure, play, play-circle, playstation, plug, plus, plus-circle, plus-square, podcast, poll, poll-h, poo, poop, portrait, pound-sign, power-off, pray, praying-hands, prescription, prescription-bottle, prescription-bottle-alt, print, procedures, product-hunt, project-diagram, pushed, puzzle-piece, python, qq, qrcode, question, question-circle, quidditch, quinscape, quora, quote-left, quote-right, quran, r-project, random, ravelry, react, readme, rebel, receipt, recycle, red-river, reddit, reddit-alien, reddit-square, redo, redo-alt, registered, rendact, renren, reply, reply-all, replyd, researchgate, resolving, retweet, rev, ribbon, ring, road, robot, rocket, rocketchat, rockrms, route, rss, rss-square, ruble-sign, ruler, ruler-combined, ruler-horizontal, ruler-vertical, running, rupee-sign, sad-cry, sad-tear, safari, sass, save, schlix, school, screwdriver, scribd, scroll, search, search-dollar, search-location, search-minus, search-plus, searchengin, seedling, sellcast, sellsy, server, servicestack, shapes, share, share-alt, share-alt-square, share-square, shekel-sign, shield-alt, ship, shipping-fast, shirtsinbulk, shoe-prints, shopping-bag, shopping-basket, shopping-cart, shopware, shower, shuttle-van, sign, sign-in-alt, sign-language, sign-out-alt, signal, signature, simplybuilt, sistrix, sitemap, sith, skull, skull-crossbones, skyatlas, skype, slack, slack-hash, slash, sliders-h, slideshare, smile, smile-beam, smile-wink, smoking, smoking-ban, snapchat, snapchat-ghost, snapchat-square, snowflake, socks, solar-panel, sort, sort-alpha-down, sort-alpha-up, sort-amount-down, sort-amount-up, sort-down, sort-numeric-down, sort-numeric-up, sort-up, soundcloud, spa, space-shuttle, speakap, spider, spinner, splotch, spotify, spray-can, square, square-full, square-root-alt, squarespace, stack-exchange, stack-overflow, stamp, star, star-and-crescent, star-half, star-half-alt, star-of-david, star-of-life, staylinked, steam, steam-square, steam-symbol, step-backward, step-forward, stethoscope, sticker-mule, sticky-note, stop, stop-circle, stopwatch, store, store-alt, strava, stream, street-view, strikethrough, stripe, stripe-s, stroopwafel, studiovinari, stumbleupon, stumbleupon-circle, subscript, subway, suitcase, suitcase-rolling, sun, superpowers, superscript, supple, surprise, swatchbook, swimmer, swimming-pool, synagogue, sync, sync-alt, syringe, table, table-tennis, tablet, tablet-alt, tablets, tachometer-alt, tag, tags, tape, tasks, taxi, teamspeak, teeth, teeth-open, telegram, telegram-plane, tencent-weibo, terminal, text-height, text-width, th, th-large, th-list, the-red-yeti, theater-masks, themeco, themeisle, thermometer, thermometer-empty, thermometer-full, thermometer-half, thermometer-quarter, thermometer-three-quarters, thumbs-down, thumbs-up, thumbtack, ticket-alt, times, times-circle, tint, tint-slash, tired, toggle-off, toggle-on, toilet-paper, toolbox, tooth, torah, torii-gate, tractor, trade-federation, trademark, traffic-light, train, transgender, transgender-alt, trash, trash-alt, tree, trello, tripadvisor, trophy, truck, truck-loading, truck-monster, truck-moving, truck-pickup, tshirt, tty, tumblr, tumblr-square, tv, twitch, twitter, twitter-square, typo3, uber, uikit, umbrella, umbrella-beach, underline, undo, undo-alt, uniregistry, universal-access, university, unlink, unlock, unlock-alt, untappd, upload, usb, user, user-alt, user-alt-slash, user-astronaut, user-check, user-circle, user-clock, user-cog, user-edit, user-friends, user-graduate, user-injured, user-lock, user-md, user-minus, user-ninja, user-plus, user-secret, user-shield, user-slash, user-tag, user-tie, user-times, users, users-cog, ussunnah, utensil-spoon, utensils, vaadin, vector-square, venus, venus-double, venus-mars, viacoin, viadeo, viadeo-square, vial, vials, viber, video, video-slash, vihara, vimeo, vimeo-square, vimeo-v, vine, vk, vnv, volleyball-ball, volume-down, volume-mute, volume-off, volume-up, vuejs, walking, wallet, warehouse, weebly, weibo, weight, weight-hanging, weixin, whatsapp, whatsapp-square, wheelchair, whmcs, wifi, wikipedia-w, wind, window-close, window-maximize, window-minimize, window-restore, windows, wine-bottle, wine-glass, wine-glass-alt, wix, wizards-of-the-coast, wolf-pack-battalion, won-sign, wordpress, wordpress-simple, wpbeginner, wpexplorer, wpforms, wrench, x-ray, xbox, xing, xing-square, y-combinator, yahoo, yandex, yandex-international, yelp, yen-sign, yin-yang, yoast, youtube, youtube-square, zhihu, default */
/***/ (function(module) {


/***/ }),

/***/ "./src/blocks/call-to-action/components/uagb-controls/block-icons.js":
/*!***************************************************************************!*\
  !*** ./src/blocks/call-to-action/components/uagb-controls/block-icons.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Block Icons
 */
var el = wp.element.createElement;
var UAGB_Block_Icons = {
  "section": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M20 18.008h-20v-16.016h20v16.016zM1.172 16.836h17.656v-13.672h-17.656v13.672z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M7.617 4.604h4.766v1.172h-4.766v-1.172z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M8.998 14.385h-6.237v-6.238h6.238v6.238zM3.932 13.213h3.894v-3.894h-3.894v3.894z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M17.24 11.852h-6.237v-3.705h6.238v3.705zM12.174 10.68h3.894v-1.361h-3.894v1.361z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M11.588 13.024h5.066v1.172h-5.066v-1.172z"
  })),
  "buttons": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M20 18.008h-20v-16.016h20v16.016zM1.172 16.836h17.656v-13.672h-17.656v13.672z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M10.758 6.289h-7.421v7.421l12.987 0.001v-7.422h-5.566zM5.192 11.855v-3.711h3.711v3.711h-3.711zM14.469 11.855h-3.711v-3.711h3.711v3.711z"
  })),
  "advanced_heading": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M0 18h20v2h-20v-2z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M11 0h-2l-7.25 16h2.25l2.21-5h7.59l2.2 5h2.25l-7.25-16zM7.090 9l2.91-6.59 2.91 6.59h-5.82z"
  })),
  "google_map": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M10 0c-4.112 0-7.458 3.347-7.458 7.461 0 6.13 6.716 12.115 7.002 12.367 0.131 0.115 0.293 0.172 0.456 0.172s0.326-0.058 0.456-0.172c0.286-0.252 7.002-6.237 7.002-12.367 0-4.114-3.345-7.461-7.458-7.461v0zM10 18.363c-1.485-1.439-6.077-6.265-6.077-10.902 0-3.353 2.726-6.080 6.077-6.080s6.077 2.728 6.077 6.080c0 4.637-4.592 9.463-6.077 10.902v0z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M10 3.986c-1.904 0-3.453 1.559-3.453 3.475s1.549 3.476 3.453 3.476c1.904 0 3.453-1.559 3.453-3.476s-1.549-3.475-3.453-3.475v0zM10 9.555c-1.142 0-2.071-0.939-2.071-2.094s0.929-2.095 2.071-2.095 2.072 0.94 2.072 2.095c0 1.155-0.93 2.094-2.072 2.094v0z"
  })),
  "info_box": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M0 1.992v16.016h20v-16.016h-20zM11.406 16.836h-10.234v-10.898h10.234v10.898zM18.828 16.836h-6.25v-2.852h6.25v2.852zM18.828 12.813h-6.25v-6.875h6.25v6.875zM1.172 4.766v-1.602h17.656v1.602h-17.656z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M2.652 15.325h7.274v-7.877h-7.274v7.877zM3.824 8.62h4.931v5.534h-4.931v-5.534z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M13.486 10.13h4.434v1.172h-4.434v-1.172z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M13.486 7.448h4.434v1.172h-4.434v-1.172z"
  })),
  "post_carousel": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M7.554 12.936h4.893v-5.871h-4.893v5.871zM8.888 8.399h2.224v3.202h-2.224v-3.202z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M13.913 8.868l1.132 1.132-1.132 1.132 0.944 0.944 2.076-2.076-2.076-2.076-0.943 0.943z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M5.144 7.924l-2.076 2.076 2.076 2.076 0.943-0.944-1.132-1.132 1.132-1.132-0.944-0.943z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M19.31 0h-18.619c-0.381 0-0.691 0.309-0.691 0.691v18.619c0 0.382 0.309 0.691 0.691 0.691h18.619c0.382 0 0.691-0.309 0.691-0.691v-18.619c0-0.381-0.309-0.691-0.69-0.691v0zM1.32 18.62v-17.301h17.3v17.3h-17.3z"
  })),
  "post_masonry": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M19.31 0h-18.619c-0.381 0-0.691 0.309-0.691 0.691v18.619c0 0.382 0.309 0.691 0.691 0.691h18.619c0.382 0 0.691-0.309 0.691-0.691v-18.619c0-0.381-0.309-0.691-0.69-0.691v0zM18.62 6.206h-4.825v-4.825h4.825v4.825zM18.62 12.413h-4.825v-4.825h4.825v4.825zM7.588 5.788h4.825v8.825h-4.825v-8.825zM12.413 1.381v3.025h-4.825v-3.025h4.825zM6.206 1.381v11.025h-4.825v-11.025h4.825zM1.381 13.794h4.825v4.826h-4.825v-4.826zM7.588 18.62v-2.826h4.825v2.826h-4.825zM13.794 18.62v-4.826h4.825v4.826h-4.825z"
  })),
  "post_grid": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M19.31 0h-18.619c-0.381 0-0.691 0.309-0.691 0.691v18.619c0 0.382 0.309 0.691 0.691 0.691h18.619c0.382 0 0.691-0.309 0.691-0.691v-18.619c0-0.381-0.309-0.691-0.69-0.691v0zM18.62 6.206h-4.825v-4.825h4.825v4.825zM18.62 12.413h-4.825v-4.825h4.825v4.825zM1.381 7.588h4.825v4.825h-4.825v-4.825zM7.588 7.588h4.825v4.825h-4.825v-4.825zM12.413 1.381v4.825h-4.825v-4.825h4.825zM6.206 1.381v4.825h-4.825v-4.825h4.825zM1.381 13.794h4.825v4.826h-4.825v-4.826zM7.588 18.62v-4.826h4.825v4.826h-4.825zM13.794 18.62v-4.826h4.825v4.826h-4.825z"
  })),
  "testimonial": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M9.996 0c-5.516 0-9.996 4.479-9.996 9.997 0 5.523 4.48 10.003 9.996 10.003 5.524 0 10.004-4.48 10.004-10.003 0-5.518-4.48-9.997-10.004-9.997v0zM9.996 18.749c-4.821 0-8.745-3.926-8.745-8.752 0-4.822 3.923-8.746 8.745-8.746 4.829 0 8.753 3.924 8.753 8.746 0 4.826-3.924 8.752-8.753 8.752v0z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M8.007 6.732l-0.292-0.201-0.006-0.012-0.019-0.006-0.214-0.098 0.006 0.012c-0.201-0.079-0.416-0.14-0.641-0.14-1.018 0-1.843 0.854-1.843 1.91s0.825 1.917 1.843 1.917c0.323 0 0.622-0.098 0.891-0.25-0.091 1.019-0.605 2.514-2.491 4.034-0.267 0.212-0.317 0.604-0.109 0.879 0.121 0.159 0.3 0.243 0.476 0.243 0.134 0 0.263-0.041 0.372-0.134 2.319-1.866 2.894-3.784 2.971-5.070 0.134-1.636-0.365-2.502-0.817-2.948l-0.128-0.134z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M14.068 6.732l-0.293-0.201-0.008-0.012-0.017-0.006-0.214-0.098 0.006 0.012c-0.202-0.079-0.415-0.14-0.641-0.14-1.019 0-1.843 0.854-1.843 1.91s0.824 1.917 1.843 1.917c0.324 0 0.623-0.098 0.891-0.25-0.092 1.019-0.604 2.514-2.496 4.034-0.262 0.212-0.311 0.604-0.104 0.879 0.116 0.159 0.299 0.243 0.476 0.243 0.134 0 0.263-0.041 0.372-0.134 2.319-1.866 2.893-3.784 2.972-5.070 0.134-1.636-0.366-2.502-0.818-2.948l-0.128-0.134z"
  })),
  "cf7_styler": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M0 2.969v14.063h20v-14.063h-20zM18.828 15.859h-17.656v-11.719h17.656v11.719z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M11.758 13.516h5.898v1.172h-5.898v-1.172z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M11.758 11.172h5.898v1.172h-5.898v-1.172z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M11.758 8.828h5.898v1.172h-5.898v-1.172z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M11.758 6.484h3.555v1.172h-3.555v-1.172z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M16.484 6.484h1.172v1.172h-1.172v-1.172z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M8.386 10.468c0.629-0.538 1.028-1.336 1.028-2.226 0-1.615-1.314-2.93-2.93-2.93s-2.93 1.314-2.93 2.93c0 0.89 0.4 1.688 1.028 2.226-1.307 0.687-2.2 2.057-2.2 3.633v0.586h8.203v-0.586c0-1.576-0.893-2.947-2.2-3.633zM6.484 6.484c0.969 0 1.758 0.789 1.758 1.758s-0.789 1.758-1.758 1.758-1.758-0.789-1.758-1.758 0.789-1.758 1.758-1.758zM3.614 13.516c0.272-1.336 1.456-2.344 2.871-2.344s2.599 1.008 2.871 2.344h-5.742z"
  })),
  "gf_styler": el("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 100 100"
  }, el("path", {
    fill: "#4a00e0",
    d: "M20.509,26.661H38.2c1.783,0,3.229-1.447,3.229-3.226c0-1.784-1.447-3.227-3.229-3.227H20.509 c-1.783,0-3.229,1.443-3.229,3.227C17.28,25.214,18.726,26.661,20.509,26.661L20.509,26.661z M20.509,26.661"
  }), el("path", {
    fill: "#4a00e0",
    d: "M20.509,38.465h41.285c1.78,0,3.229-1.442,3.229-3.223c0-1.783-1.449-3.227-3.229-3.227H20.509 c-1.783,0-3.229,1.444-3.229,3.227C17.28,37.022,18.726,38.465,20.509,38.465L20.509,38.465z M20.509,38.465"
  }), el("path", {
    fill: "#4a00e0",
    d: "M38.2,49.727H20.509c-1.783,0-3.229,1.443-3.229,3.227c0,1.78,1.446,3.224,3.229,3.224H38.2 c1.783,0,3.229-1.443,3.229-3.224C41.429,51.17,39.982,49.727,38.2,49.727L38.2,49.727z M38.2,49.727"
  }), el("path", {
    fill: "#4a00e0",
    d: "M92.334,14.48c-1.304-0.447-2.744-0.014-3.593,1.071l-6.021,7.754V5.723c0-1.778-1.446-3.223-3.23-3.223H8.71 c-1.783,0-3.226,1.445-3.226,3.223v88.552c0,1.78,1.443,3.226,3.226,3.226h70.78c1.784,0,3.23-1.445,3.23-3.226V51.129 l11.088-13.875c0.456-0.57,0.707-1.279,0.707-2.012V17.531C94.516,16.153,93.637,14.928,92.334,14.48L92.334,14.48z M76.267,91.045 h-64.33V8.951h64.33v22.653L47.452,68.679c-1.096,1.409-0.835,3.432,0.568,4.527c0.59,0.457,1.286,0.677,1.975,0.677 c0.962,0,1.915-0.424,2.547-1.241l3.619-4.657h11.534c0.979,0,1.906-0.446,2.518-1.214l6.054-7.572V91.045z M88.062,34.11 L66.144,61.53H61.18l26.882-34.591V34.11z M88.062,34.11"
  })),
  "content_timeline": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M9.375 0h1.25v20h-1.25v-20z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M1.875 3.125h5v2.5h-5v-2.5zM0.625 6.875h7.5v-5h-7.5v5z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M1.875 14.592h5v2.5h-5v-2.5zM0.625 18.342h7.5v-5h-7.5v5z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M18.125 11.25h-5v-2.5h5v2.5zM11.875 7.5v5h7.5v-5h-7.5z"
  })),
  "call_to_action": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M19.304 16.848l-2.352-2.352 1.192-1.192c0.154-0.154 0.224-0.373 0.187-0.588s-0.177-0.398-0.374-0.491l-9.486-4.494c-0.256-0.122-0.561-0.068-0.761 0.132s-0.253 0.505-0.132 0.761l4.494 9.485c0.093 0.197 0.277 0.336 0.492 0.373s0.434-0.033 0.588-0.187l1.192-1.192 2.353 2.352c0.131 0.131 0.303 0.196 0.474 0.196s0.343-0.065 0.474-0.196l1.659-1.659c0.262-0.262 0.262-0.686 0-0.948v0zM17.17 18.033l-2.353-2.352c-0.131-0.131-0.303-0.196-0.474-0.196s-0.343 0.065-0.474 0.196l-0.993 0.993-3.283-6.929 6.929 3.282-0.993 0.994c-0.262 0.262-0.262 0.686 0 0.948l2.352 2.352-0.711 0.711z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M7.645 10.992h-5.804v-9.303h9.303v6.647c0 0.37 0.3 0.671 0.671 0.671s0.671-0.3 0.671-0.671v-7.317c0-0.37-0.3-0.671-0.671-0.671h-10.644c-0.37 0-0.671 0.3-0.671 0.671v10.644c0 0.371 0.3 0.671 0.671 0.671h6.474c0.37 0 0.671-0.3 0.671-0.671s-0.3-0.671-0.671-0.671v0z"
  })),
  "post_timeline": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M7.048 8.364c-0.001 0.019-0.001 0.037 0 0.056 0.016 0.286 0.26 0.505 0.545 0.489h9.134c0.019 0.001 0.037 0.001 0.056 0 0.286-0.015 0.505-0.26 0.489-0.545v-5.453c0.001-0.019 0.001-0.037 0-0.056-0.016-0.286-0.26-0.505-0.545-0.489h-9.134c-0.019-0.001-0.037-0.001-0.056 0-0.286 0.015-0.505 0.26-0.489 0.545v5.453zM8.138 3.456h8.044v4.363h-8.044v-4.363z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M19.999 17.089v-5.453c0.001-0.019 0.001-0.037 0-0.056-0.015-0.286-0.26-0.505-0.545-0.489h-11.861c-0.019-0.001-0.037-0.001-0.056 0-0.286 0.015-0.505 0.26-0.489 0.545v5.453c-0.001 0.019-0.001 0.037 0 0.056 0.016 0.286 0.26 0.505 0.545 0.489h11.861c0.019 0.001 0.037 0.001 0.056 0 0.286-0.016 0.505-0.26 0.489-0.546zM18.909 16.544h-10.77v-4.363h10.77v4.363z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M4.754 4.795c-0.286-1.279-1.554-2.083-2.833-1.797-1.083 0.242-1.853 1.203-1.854 2.312-0.028 1.102 0.725 2.071 1.8 2.318v4.417c-1.28 0.279-2.091 1.543-1.812 2.823 0.198 0.906 0.906 1.614 1.812 1.812h1.091c1.080-0.245 1.841-1.211 1.827-2.318 0.014-1.107-0.747-2.073-1.827-2.318v-4.417c1.279-0.286 2.083-1.555 1.797-2.833zM3.722 14.362c0 0.708-0.573 1.282-1.281 1.282-0 0-0.001 0-0.002 0-0.697-0.015-1.254-0.584-1.254-1.281s0.557-1.267 1.254-1.282c0.708-0.001 1.282 0.573 1.282 1.281zM2.44 6.592c-0.697-0.015-1.254-0.584-1.254-1.281s0.557-1.267 1.254-1.281c0.712-0 1.294 0.569 1.309 1.281-0.015 0.712-0.597 1.282-1.309 1.281z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M9.229 5.365h3.136c0.301 0 0.545-0.244 0.545-0.545s-0.244-0.545-0.545-0.545h-3.136c-0.301 0-0.545 0.244-0.545 0.545s0.244 0.545 0.545 0.545z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M15.091 5.91h-5.862c-0.301 0-0.545 0.244-0.545 0.545s0.244 0.546 0.545 0.546h5.863c0.301 0 0.545-0.244 0.545-0.546s-0.245-0.545-0.546-0.545z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M9.229 14.090h3.136c0.301 0 0.545-0.244 0.545-0.545s-0.244-0.545-0.545-0.545h-3.136c-0.301 0-0.545 0.244-0.545 0.545s0.244 0.545 0.545 0.545z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M9.229 15.726h5.863c0.301 0 0.545-0.244 0.545-0.545s-0.244-0.545-0.545-0.545h-5.863c-0.301 0-0.545 0.244-0.545 0.545s0.244 0.545 0.545 0.545z"
  })),
  "icon_list": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M1.44 15.48c-0.76 0-1.44 0.64-1.44 1.4s0.68 1.44 1.44 1.44 1.4-0.68 1.4-1.44c0-0.76-0.64-1.4-1.4-1.4v0z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M1.44 8.6c-0.76 0-1.44 0.64-1.44 1.4s0.68 1.4 1.44 1.4 1.4-0.64 1.4-1.4c0-0.76-0.64-1.4-1.4-1.4v0z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M6.56 4.4h12.12c0.72 0 1.32-0.56 1.32-1.28s-0.6-1.32-1.32-1.32h-12.12c-0.72 0-1.32 0.6-1.32 1.32s0.6 1.28 1.32 1.28v0z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M1.44 1.68c-0.76 0-1.44 0.68-1.44 1.44s0.68 1.4 1.44 1.4 1.4-0.64 1.4-1.4-0.64-1.44-1.4-1.44v0z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M18.68 8.68h-12.12c-0.72 0-1.32 0.6-1.32 1.32s0.6 1.32 1.32 1.32h12.12c0.72 0 1.32-0.6 1.32-1.32s-0.6-1.32-1.32-1.32v0z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M18.68 15.56h-12.12c-0.72 0-1.32 0.6-1.32 1.32s0.6 1.32 1.32 1.32h12.12c0.72 0 1.32-0.6 1.32-1.32s-0.6-1.32-1.32-1.32v0z"
  })),
  "team": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M20 14.124c0-1.17-0.35-2.3-1.013-3.268-0.477-0.696-1.091-1.274-1.803-1.703 0.838-0.794 1.362-1.915 1.362-3.158 0-2.399-1.952-4.351-4.351-4.351-1.423 0-2.755 0.704-3.565 1.859-0.206-0.030-0.416-0.046-0.63-0.046s-0.424 0.016-0.63 0.046c-0.81-1.155-2.142-1.859-3.565-1.859-2.399 0-4.351 1.952-4.351 4.351 0 1.242 0.524 2.364 1.362 3.158-0.712 0.429-1.326 1.008-1.803 1.703-0.663 0.968-1.014 2.098-1.014 3.268v2.42h4.195v1.813h11.611v-1.813h4.194v-2.42h-0zM14.195 2.717c1.807 0 3.277 1.47 3.277 3.278s-1.47 3.277-3.277 3.277c-0.032 0-0.065-0-0.097-0.001 0.002-0.007 0.005-0.014 0.007-0.021 0.056-0.159 0.102-0.322 0.14-0.488 0.003-0.012 0.006-0.024 0.008-0.035 0.010-0.045 0.018-0.090 0.027-0.136 0.004-0.021 0.008-0.043 0.012-0.064 0.007-0.041 0.013-0.081 0.018-0.122 0.004-0.029 0.008-0.057 0.011-0.085 0.004-0.036 0.009-0.072 0.012-0.109s0.006-0.074 0.008-0.111c0.002-0.029 0.004-0.059 0.006-0.088 0.003-0.063 0.004-0.127 0.005-0.19 0-0.004 0-0.009 0-0.014 0-0.002-0-0.005-0-0.007 0-0.065-0.002-0.129-0.005-0.193-0.001-0.019-0.002-0.037-0.003-0.056-0.003-0.054-0.007-0.109-0.012-0.163-0.001-0.012-0.002-0.024-0.004-0.037-0.162-1.568-1.153-2.911-2.582-3.531 0.616-0.692 1.507-1.103 2.45-1.103v0zM8.866 4.732c0.010-0.004 0.021-0.008 0.031-0.011 0.033-0.012 0.066-0.023 0.099-0.033 0.025-0.008 0.050-0.016 0.075-0.023 0.018-0.005 0.037-0.011 0.055-0.016 0.033-0.009 0.066-0.018 0.1-0.026 0.248-0.060 0.507-0.093 0.773-0.093s0.525 0.033 0.773 0.094c0.033 0.008 0.066 0.017 0.099 0.026 0.019 0.005 0.038 0.010 0.056 0.016 0.025 0.007 0.050 0.015 0.075 0.023 0.033 0.011 0.066 0.022 0.1 0.034 0.010 0.004 0.020 0.007 0.030 0.011 1.096 0.405 1.918 1.381 2.104 2.565 0.002 0.009 0.003 0.019 0.004 0.028 0.006 0.040 0.011 0.080 0.015 0.121 0.002 0.015 0.003 0.030 0.005 0.045 0.004 0.037 0.006 0.074 0.009 0.112 0.001 0.016 0.002 0.032 0.003 0.048 0.002 0.048 0.003 0.096 0.004 0.144 0 0.004 0 0.008 0 0.012 0 0.002-0 0.004-0 0.006 0 0.047-0.002 0.093-0.003 0.139-0.001 0.015-0.001 0.029-0.002 0.044-0.002 0.045-0.006 0.089-0.010 0.133-0.002 0.017-0.004 0.034-0.006 0.051-0.003 0.029-0.007 0.057-0.011 0.085-0.003 0.022-0.006 0.044-0.010 0.066-0.005 0.033-0.011 0.066-0.018 0.1-0.006 0.029-0.012 0.059-0.019 0.088-0.004 0.018-0.008 0.035-0.012 0.053-0.010 0.044-0.022 0.087-0.034 0.13-0.005 0.017-0.010 0.034-0.014 0.051-0.008 0.025-0.016 0.049-0.024 0.074-0.006 0.020-0.013 0.039-0.020 0.058-0.007 0.022-0.015 0.044-0.023 0.066-0.014 0.037-0.029 0.074-0.044 0.111-0.007 0.016-0.014 0.032-0.021 0.049-0.013 0.031-0.027 0.061-0.041 0.091l-0.005 0.011c-0.005 0.011-0.010 0.021-0.015 0.032-0.016 0.032-0.032 0.064-0.049 0.096-0.007 0.012-0.013 0.025-0.020 0.037-0 0.001-0.001 0.002-0.001 0.002-0.019 0.034-0.038 0.067-0.058 0.1-0.008 0.013-0.016 0.026-0.024 0.039-0.021 0.035-0.044 0.070-0.066 0.103-0.014 0.021-0.029 0.042-0.043 0.063-0.013 0.018-0.025 0.035-0.038 0.052-0.017 0.023-0.033 0.045-0.050 0.067-0.012 0.015-0.023 0.030-0.035 0.045-0.018 0.022-0.036 0.045-0.055 0.067-0.012 0.014-0.023 0.027-0.035 0.041-0.020 0.022-0.039 0.044-0.059 0.066-0.012 0.013-0.024 0.025-0.036 0.038-0.032 0.034-0.065 0.067-0.099 0.1-0.020 0.019-0.040 0.039-0.061 0.058-0.014 0.013-0.029 0.026-0.043 0.038-0.024 0.021-0.047 0.041-0.071 0.062-0.012 0.011-0.025 0.021-0.037 0.031-0.029 0.024-0.059 0.047-0.089 0.070-0.008 0.006-0.016 0.012-0.025 0.019-0.545 0.405-1.221 0.646-1.951 0.646s-1.406-0.24-1.951-0.646c-0.008-0.006-0.016-0.012-0.024-0.018-0.030-0.023-0.060-0.046-0.089-0.070-0.012-0.010-0.025-0.020-0.037-0.030-0.024-0.021-0.048-0.041-0.072-0.062-0.014-0.013-0.029-0.025-0.043-0.038-0.021-0.019-0.041-0.038-0.061-0.058-0.034-0.033-0.067-0.066-0.1-0.101-0.012-0.012-0.024-0.025-0.036-0.037-0.020-0.022-0.039-0.044-0.058-0.066-0.012-0.013-0.024-0.027-0.035-0.040-0.019-0.022-0.037-0.045-0.055-0.067-0.012-0.015-0.024-0.030-0.035-0.045-0.017-0.022-0.034-0.044-0.050-0.067-0.013-0.017-0.025-0.035-0.037-0.053-0.015-0.021-0.029-0.041-0.044-0.062-0.023-0.034-0.045-0.069-0.066-0.104-0.008-0.013-0.016-0.026-0.023-0.039-0.020-0.034-0.040-0.067-0.058-0.102-0.007-0.013-0.013-0.025-0.020-0.038-0.017-0.032-0.034-0.064-0.050-0.096-0.006-0.012-0.011-0.023-0.017-0.035-0.001-0.002-0.002-0.003-0.003-0.005-0.015-0.031-0.029-0.063-0.043-0.095-0.007-0.015-0.013-0.030-0.020-0.046-0.015-0.038-0.030-0.075-0.045-0.113-0.008-0.021-0.015-0.041-0.022-0.062s-0.015-0.043-0.022-0.064c-0.008-0.023-0.015-0.046-0.022-0.069-0.010-0.035-0.020-0.070-0.030-0.105-0.007-0.025-0.013-0.049-0.019-0.074-0.005-0.020-0.009-0.039-0.014-0.059-0.005-0.024-0.011-0.048-0.016-0.073-0.007-0.038-0.014-0.076-0.020-0.114-0.003-0.020-0.006-0.041-0.009-0.062-0.004-0.030-0.008-0.061-0.012-0.092-0.002-0.015-0.004-0.030-0.005-0.046-0.004-0.046-0.008-0.091-0.010-0.137-0.001-0.013-0.001-0.026-0.002-0.039-0.002-0.049-0.004-0.098-0.004-0.148 0-0.053 0.002-0.105 0.004-0.158 0-0.014 0.002-0.028 0.003-0.042 0.002-0.039 0.005-0.079 0.009-0.118 0.001-0.014 0.003-0.027 0.004-0.041 0.005-0.042 0.010-0.084 0.016-0.126 0.001-0.008 0.002-0.016 0.004-0.024 0.186-1.185 1.008-2.161 2.105-2.566v0zM2.528 5.995c0-1.807 1.47-3.278 3.277-3.278 0.943 0 1.834 0.411 2.45 1.103-1.43 0.621-2.421 1.964-2.582 3.533-0.001 0.011-0.002 0.021-0.003 0.032-0.005 0.056-0.009 0.112-0.013 0.168-0.001 0.017-0.002 0.034-0.003 0.052-0.003 0.067-0.005 0.135-0.005 0.202s0.002 0.137 0.005 0.205c0.001 0.027 0.003 0.055 0.005 0.082 0.003 0.039 0.005 0.079 0.009 0.118 0.003 0.035 0.007 0.070 0.011 0.104 0.004 0.030 0.007 0.060 0.012 0.090 0.005 0.040 0.011 0.079 0.018 0.118 0.004 0.023 0.008 0.046 0.013 0.070 0.008 0.044 0.016 0.088 0.025 0.131 0.003 0.014 0.007 0.028 0.010 0.043 0.036 0.161 0.082 0.319 0.136 0.473 0.003 0.010 0.007 0.020 0.010 0.030-0.032 0.001-0.065 0.001-0.097 0.001-1.807-0-3.277-1.47-3.277-3.277v0zM5.095 12.841c-0.012 0.019-0.023 0.038-0.035 0.056-0.025 0.040-0.049 0.079-0.072 0.12-0.013 0.022-0.026 0.045-0.039 0.067-0.021 0.037-0.042 0.075-0.062 0.112-0.013 0.024-0.025 0.047-0.038 0.071-0.019 0.037-0.039 0.075-0.057 0.113-0.012 0.024-0.024 0.048-0.035 0.071-0.019 0.040-0.037 0.080-0.055 0.12-0.010 0.022-0.020 0.044-0.030 0.065-0.021 0.048-0.041 0.097-0.060 0.145-0.006 0.014-0.012 0.028-0.018 0.043-0.025 0.063-0.048 0.127-0.071 0.191-0.005 0.015-0.010 0.029-0.015 0.044-0.017 0.049-0.034 0.098-0.049 0.148-0.007 0.023-0.014 0.046-0.021 0.069-0.013 0.042-0.025 0.084-0.037 0.127-0.007 0.025-0.014 0.051-0.020 0.076-0.010 0.041-0.021 0.082-0.030 0.122-0.006 0.026-0.012 0.052-0.018 0.078-0.009 0.041-0.018 0.083-0.026 0.125-0.005 0.025-0.010 0.050-0.015 0.075-0.008 0.046-0.016 0.091-0.023 0.137-0.003 0.021-0.007 0.043-0.011 0.064-0.010 0.067-0.019 0.134-0.027 0.202 0 0.001-0 0.002-0 0.002-0.007 0.062-0.013 0.123-0.018 0.185h-3.139v-1.346c0-1.839 1.057-3.491 2.714-4.276 0.604 0.317 1.29 0.498 2.017 0.498 0.211 0 0.422-0.015 0.631-0.046 0.033 0.047 0.066 0.093 0.1 0.138 0.012 0.015 0.024 0.030 0.036 0.045 0.034 0.043 0.068 0.086 0.104 0.128 0.014 0.017 0.029 0.034 0.044 0.051 0.033 0.038 0.067 0.076 0.102 0.113 0.018 0.020 0.036 0.039 0.055 0.058 0.031 0.032 0.064 0.065 0.096 0.096 0.012 0.012 0.024 0.024 0.036 0.036-0.047 0.028-0.093 0.057-0.139 0.087-0.008 0.005-0.015 0.010-0.022 0.015-0.046 0.030-0.091 0.060-0.136 0.091-0.016 0.011-0.031 0.021-0.046 0.032-0.040 0.028-0.079 0.057-0.119 0.086-0.012 0.009-0.025 0.018-0.037 0.028-0.050 0.038-0.099 0.076-0.148 0.116-0.011 0.008-0.021 0.017-0.032 0.026-0.039 0.032-0.077 0.064-0.115 0.097-0.015 0.013-0.029 0.025-0.044 0.038-0.038 0.034-0.075 0.067-0.113 0.102-0.010 0.009-0.020 0.018-0.029 0.027-0.046 0.043-0.091 0.087-0.135 0.131-0.012 0.012-0.023 0.023-0.034 0.035-0.034 0.035-0.067 0.070-0.1 0.105-0.013 0.014-0.026 0.028-0.039 0.043-0.037 0.041-0.074 0.081-0.11 0.123-0.006 0.006-0.012 0.013-0.017 0.019-0.041 0.048-0.081 0.097-0.121 0.146-0.011 0.014-0.022 0.028-0.033 0.042-0.029 0.038-0.059 0.076-0.088 0.115-0.011 0.015-0.023 0.030-0.034 0.045-0.038 0.052-0.075 0.104-0.111 0.157-0.039 0.057-0.076 0.114-0.113 0.172v0zM5.268 17.283v-1.346c0-0.060 0.001-0.119 0.003-0.178 0.001-0.020 0.002-0.039 0.003-0.058 0.002-0.039 0.004-0.079 0.007-0.118 0.002-0.024 0.004-0.048 0.007-0.071 0.003-0.035 0.006-0.070 0.010-0.104 0.003-0.025 0.007-0.050 0.010-0.076 0.004-0.033 0.008-0.065 0.013-0.098 0.004-0.026 0.009-0.052 0.013-0.078 0.005-0.031 0.010-0.063 0.016-0.094 0.005-0.027 0.011-0.053 0.016-0.079 0.006-0.030 0.012-0.061 0.019-0.091 0.006-0.027 0.013-0.053 0.019-0.079 0.007-0.030 0.014-0.059 0.022-0.089 0.007-0.027 0.015-0.053 0.023-0.080 0.008-0.029 0.016-0.058 0.025-0.086 0.008-0.027 0.017-0.053 0.026-0.079 0.009-0.028 0.018-0.056 0.028-0.084 0.009-0.026 0.019-0.053 0.029-0.079 0.010-0.028 0.020-0.055 0.030-0.082s0.021-0.052 0.031-0.078c0.011-0.027 0.022-0.054 0.033-0.081s0.023-0.051 0.034-0.077c0.012-0.026 0.024-0.053 0.036-0.079s0.025-0.051 0.037-0.076c0.013-0.026 0.025-0.051 0.039-0.077s0.026-0.050 0.040-0.075c0.014-0.025 0.027-0.050 0.041-0.075s0.028-0.049 0.043-0.073c0.014-0.025 0.029-0.049 0.044-0.074s0.030-0.048 0.046-0.072c0.015-0.024 0.031-0.048 0.046-0.072s0.032-0.047 0.048-0.071c0.016-0.024 0.032-0.047 0.049-0.070s0.034-0.046 0.051-0.069c0.017-0.023 0.034-0.046 0.051-0.068s0.036-0.045 0.054-0.067c0.018-0.022 0.036-0.044 0.054-0.066s0.037-0.044 0.056-0.065 0.038-0.043 0.056-0.064 0.039-0.042 0.058-0.063c0.019-0.021 0.039-0.042 0.058-0.062s0.040-0.041 0.061-0.061c0.020-0.020 0.041-0.040 0.061-0.060s0.041-0.039 0.063-0.059c0.021-0.020 0.042-0.039 0.063-0.058s0.043-0.038 0.065-0.057c0.022-0.019 0.044-0.038 0.066-0.056s0.045-0.036 0.067-0.054c0.023-0.018 0.045-0.036 0.068-0.054s0.046-0.035 0.069-0.052c0.023-0.017 0.047-0.035 0.071-0.052s0.047-0.033 0.071-0.050c0.024-0.016 0.049-0.033 0.073-0.049s0.048-0.031 0.072-0.047c0.025-0.016 0.050-0.032 0.075-0.047s0.049-0.029 0.074-0.044c0.026-0.015 0.052-0.030 0.078-0.045 0.025-0.014 0.050-0.028 0.075-0.041 0.027-0.014 0.054-0.028 0.080-0.042 0.025-0.013 0.051-0.026 0.077-0.039 0.020-0.010 0.041-0.020 0.061-0.029 0.603 0.317 1.289 0.498 2.017 0.498s1.414-0.18 2.017-0.498c0.021 0.010 0.041 0.019 0.061 0.029 0.026 0.013 0.052 0.026 0.078 0.039s0.053 0.028 0.079 0.042c0.026 0.014 0.051 0.028 0.077 0.042s0.052 0.029 0.077 0.044c0.025 0.015 0.050 0.030 0.075 0.045s0.050 0.031 0.075 0.047c0.025 0.015 0.049 0.031 0.073 0.047s0.048 0.032 0.072 0.049c0.024 0.017 0.048 0.033 0.071 0.050s0.047 0.034 0.070 0.051c0.023 0.017 0.047 0.035 0.069 0.053s0.046 0.035 0.068 0.053c0.022 0.018 0.045 0.036 0.067 0.055s0.044 0.037 0.066 0.055c0.022 0.019 0.043 0.038 0.065 0.057s0.042 0.039 0.063 0.058c0.021 0.020 0.042 0.039 0.063 0.059s0.041 0.040 0.061 0.060c0.020 0.021 0.041 0.041 0.061 0.062s0.039 0.041 0.058 0.062c0.020 0.021 0.039 0.043 0.058 0.064s0.038 0.043 0.056 0.064c0.019 0.022 0.038 0.043 0.056 0.066s0.036 0.043 0.054 0.065c0.018 0.022 0.036 0.045 0.054 0.068s0.034 0.045 0.051 0.067c0.017 0.023 0.034 0.046 0.051 0.070s0.032 0.046 0.049 0.070c0.016 0.023 0.033 0.047 0.048 0.071s0.031 0.047 0.046 0.071c0.015 0.024 0.031 0.048 0.046 0.072s0.029 0.049 0.044 0.073c0.014 0.024 0.029 0.049 0.043 0.074s0.027 0.050 0.041 0.075c0.013 0.025 0.027 0.050 0.040 0.075s0.026 0.051 0.038 0.077c0.013 0.025 0.025 0.050 0.037 0.076s0.024 0.052 0.036 0.079c0.012 0.026 0.023 0.051 0.034 0.077s0.022 0.054 0.033 0.080c0.011 0.026 0.021 0.052 0.032 0.079s0.020 0.055 0.030 0.082c0.010 0.026 0.020 0.052 0.029 0.079 0.010 0.028 0.019 0.056 0.028 0.084 0.009 0.027 0.017 0.053 0.026 0.079 0.009 0.029 0.017 0.058 0.025 0.087 0.008 0.026 0.015 0.053 0.022 0.079 0.008 0.029 0.015 0.059 0.022 0.089 0.006 0.027 0.013 0.053 0.019 0.079 0.007 0.030 0.013 0.061 0.019 0.091 0.005 0.026 0.011 0.053 0.016 0.079 0.006 0.031 0.011 0.062 0.016 0.094 0.004 0.026 0.009 0.052 0.013 0.079 0.005 0.032 0.009 0.065 0.013 0.097 0.003 0.025 0.007 0.051 0.010 0.076 0.004 0.034 0.007 0.069 0.010 0.104 0.002 0.024 0.005 0.047 0.007 0.071 0.003 0.040 0.005 0.079 0.006 0.119 0.001 0.019 0.003 0.039 0.003 0.058 0.002 0.059 0.003 0.119 0.003 0.178v1.346h-9.463zM15.787 15.47c-0.010-0.13-0.026-0.261-0.045-0.39-0.003-0.021-0.007-0.041-0.010-0.061-0.008-0.047-0.015-0.094-0.024-0.14-0.005-0.024-0.010-0.049-0.014-0.074-0.008-0.042-0.017-0.085-0.027-0.127-0.006-0.025-0.012-0.051-0.018-0.076-0.010-0.041-0.020-0.083-0.031-0.124-0.007-0.025-0.013-0.050-0.020-0.075-0.012-0.043-0.024-0.086-0.037-0.128-0.007-0.023-0.013-0.045-0.020-0.067-0.016-0.050-0.033-0.101-0.050-0.151-0.005-0.014-0.009-0.028-0.014-0.042-0.023-0.064-0.047-0.128-0.072-0.191-0.005-0.013-0.011-0.027-0.017-0.041-0.020-0.049-0.040-0.098-0.061-0.147-0.009-0.021-0.019-0.043-0.029-0.064-0.018-0.041-0.037-0.081-0.056-0.121-0.011-0.024-0.023-0.047-0.034-0.070-0.019-0.038-0.038-0.076-0.058-0.114-0.012-0.023-0.025-0.047-0.038-0.071-0.021-0.038-0.041-0.075-0.063-0.113-0.013-0.022-0.025-0.045-0.038-0.067-0.023-0.040-0.048-0.080-0.073-0.12-0.012-0.019-0.022-0.038-0.034-0.056-0.037-0.058-0.074-0.115-0.113-0.172-0.037-0.053-0.074-0.105-0.111-0.157-0.011-0.015-0.022-0.029-0.033-0.045-0.029-0.039-0.058-0.077-0.088-0.115-0.011-0.014-0.021-0.028-0.032-0.041-0.040-0.049-0.080-0.098-0.121-0.146-0.005-0.006-0.011-0.012-0.016-0.018-0.036-0.042-0.073-0.084-0.111-0.125-0.013-0.014-0.026-0.028-0.039-0.042-0.033-0.036-0.067-0.071-0.101-0.105-0.011-0.012-0.022-0.023-0.034-0.034-0.044-0.044-0.089-0.088-0.135-0.131-0.010-0.009-0.019-0.018-0.029-0.027-0.037-0.035-0.075-0.069-0.113-0.102-0.015-0.013-0.029-0.025-0.044-0.038-0.038-0.033-0.076-0.065-0.115-0.097-0.011-0.009-0.021-0.018-0.032-0.026-0.048-0.039-0.098-0.078-0.148-0.116-0.012-0.009-0.025-0.018-0.037-0.028-0.039-0.029-0.079-0.057-0.119-0.085-0.015-0.011-0.031-0.022-0.047-0.033-0.044-0.031-0.089-0.061-0.134-0.090-0.008-0.005-0.016-0.011-0.024-0.016-0.046-0.029-0.092-0.058-0.138-0.086 0.012-0.012 0.023-0.024 0.035-0.035 0.033-0.032 0.066-0.065 0.098-0.098 0.018-0.019 0.036-0.037 0.054-0.056 0.035-0.038 0.070-0.076 0.103-0.115 0.014-0.017 0.029-0.033 0.043-0.050 0.036-0.043 0.071-0.086 0.105-0.13 0.011-0.014 0.023-0.029 0.034-0.043 0.034-0.046 0.068-0.092 0.101-0.138 0.21 0.031 0.421 0.046 0.631 0.046 0.728 0 1.414-0.18 2.017-0.498 1.657 0.785 2.714 2.436 2.714 4.276v1.346h-3.139z"
  })),
  "social_share": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M13.751 4.999l1.25 1.25-8.753 8.753-1.25-1.25 8.753-8.753z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M13.749 12.502l-1.874-1.874 1.255-1.256 0.619 0.628 3.749-3.749-3.749-3.749-3.749 3.749 0.628 0.619-1.256 1.255-1.874-1.874 6.251-6.251 6.251 6.251-6.251 6.251z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M6.251 20l-6.251-6.251 6.251-6.251 1.874 1.874-1.255 1.256-0.619-0.628-3.749 3.749 3.749 3.749 3.749-3.749-0.628-0.619 1.256-1.256 1.874 1.874-6.251 6.251z"
  })),
  "restaurant_menu": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M0 2.136v15.729h20v-15.729h-20zM18.828 7.038h-8.242v-3.73h8.242v3.73zM1.172 3.307h8.242v13.385h-8.242v-13.385zM10.586 16.693v-8.483h8.242v8.483h-8.242z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M2.742 4.661v4.492c0 1.188 0.826 2.185 1.934 2.45v2.563h-0.898v1.172h2.969v-1.172h-0.898v-2.563c1.108-0.265 1.934-1.263 1.934-2.45v-4.492h-5.039zM6.61 9.154c0 0.743-0.605 1.348-1.348 1.348s-1.348-0.604-1.348-1.348v-3.32h2.695v3.32z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M13.050 4.661h3.275v1.172h-3.275v-1.172z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M12.109 9.414h5.156v1.172h-5.156v-1.172z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M12.109 11.79h5.156v1.172h-5.156v-1.172z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M12.109 14.167h5.156v1.172h-5.156v-1.172z"
  })),
  "blockquote": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M6.347 8.539h-0.62c0.471-0.817 1.061-1.648 1.557-2.233 0.783-0.921 0.674-2.305-0.249-3.089-0.412-0.351-0.917-0.524-1.42-0.524-0.619 0-1.233 0.26-1.667 0.769-0.577 0.674-3.448 3.615-3.448 7.269v3.654c0 1.614 1.309 2.923 2.923 2.923h2.923c1.613 0 2.922-1.309 2.922-2.923v-2.924c0.001-1.613-1.308-2.922-2.921-2.922v0zM7.808 14.385c0 0.806-0.655 1.462-1.461 1.462h-2.923c-0.806 0-1.462-0.656-1.462-1.462v-3.655c0-2.822 2.192-5.296 2.912-6.108l0.187-0.211c0.19-0.223 0.43-0.257 0.555-0.257 0.122 0 0.303 0.032 0.475 0.177 0.305 0.26 0.343 0.722 0.080 1.029-0.579 0.683-1.219 1.599-1.708 2.449-0.262 0.454-0.262 1.009 0.001 1.462 0.26 0.452 0.742 0.73 1.264 0.73h0.62c0.806 0 1.461 0.656 1.461 1.461v2.923zM16.576 8.539h-0.618c0.471-0.817 1.060-1.648 1.557-2.233 0.783-0.921 0.674-2.305-0.248-3.089-0.412-0.351-0.919-0.524-1.422-0.524-0.618 0-1.232 0.26-1.666 0.769-0.576 0.674-3.448 3.615-3.448 7.269v3.654c0 1.614 1.31 2.923 2.924 2.923h2.923c1.614 0 2.923-1.309 2.923-2.923v-2.924c-0.001-1.613-1.31-2.922-2.925-2.922v0zM18.038 14.385c0 0.806-0.655 1.462-1.462 1.462h-2.922c-0.807 0-1.463-0.656-1.463-1.462v-3.655c0-2.824 2.193-5.297 2.913-6.109l0.186-0.211c0.191-0.223 0.429-0.256 0.555-0.256 0.122 0 0.303 0.032 0.475 0.177 0.307 0.26 0.343 0.723 0.082 1.029-0.581 0.683-1.221 1.599-1.71 2.449-0.261 0.453-0.261 1.009 0 1.462s0.743 0.73 1.267 0.73h0.618c0.807 0 1.462 0.656 1.462 1.461v2.923z"
  })),
  "quote_1": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    d: "M15.581 10.226h-15.162c-0.233 0-0.419 0.37-0.419 0.826 0 0.458 0.186 0.828 0.419 0.828h15.161c0.233 0 0.419-0.37 0.419-0.828 0.001-0.455-0.186-0.826-0.418-0.826v0z"
  }), el("path", {
    d: "M15.581 14.285h-15.162c-0.233 0-0.419 0.373-0.419 0.827 0 0.458 0.186 0.826 0.419 0.826h15.161c0.233 0 0.419-0.369 0.419-0.826 0.001-0.454-0.186-0.827-0.418-0.827v0z"
  }), el("path", {
    d: "M15.581 18.346h-15.162c-0.233 0-0.419 0.37-0.419 0.826 0 0.459 0.186 0.828 0.419 0.828h15.161c0.233 0 0.419-0.369 0.419-0.828 0.001-0.455-0.186-0.826-0.418-0.826v0z"
  }), el("path", {
    d: "M9.126 0.595c-0.46 0.465-0.974 1.35-0.835 3.042 0.081 1.319 0.666 3.29 3.048 5.216 0.112 0.090 0.241 0.136 0.38 0.136 0.183 0 0.362-0.086 0.487-0.251 0.214-0.283 0.164-0.683-0.113-0.902-1.935-1.566-2.458-3.105-2.551-4.154 0.274 0.156 0.582 0.258 0.913 0.258 1.045 0 1.89-0.886 1.89-1.972 0-1.088-0.846-1.966-1.89-1.966-0.233 0-0.451 0.062-0.657 0.143l0.004-0.011-0.218 0.101-0.018 0.011-0.007 0.006-0.299 0.214-0.134 0.131z"
  }), el("path", {
    d: "M4.517 0.595c-0.465 0.465-0.974 1.35-0.841 3.042 0.085 1.319 0.671 3.29 3.049 5.216 0.116 0.090 0.245 0.136 0.383 0.136 0.178 0 0.366-0.086 0.487-0.251 0.214-0.283 0.165-0.683-0.108-0.902-1.939-1.566-2.467-3.105-2.56-4.154 0.278 0.156 0.584 0.258 0.92 0.258 1.046 0 1.885-0.886 1.885-1.972 0-1.088-0.845-1.966-1.885-1.966-0.236 0-0.447 0.062-0.657 0.143l0.010-0.011-0.218 0.101-0.022 0.011-0.009 0.006-0.305 0.214-0.129 0.13z"
  })),
  "quote_2": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    d: "M4.599 6.686c-0.39 0.397-0.822 1.149-0.705 2.586 0.068 1.123 0.561 2.799 2.561 4.434 0.096 0.080 0.205 0.115 0.321 0.115 0.153 0 0.306-0.071 0.409-0.214 0.181-0.239 0.135-0.58-0.095-0.766-1.626-1.332-2.066-2.639-2.144-3.531 0.231 0.132 0.488 0.218 0.769 0.218 0.874 0 1.587-0.753 1.587-1.677s-0.711-1.672-1.587-1.672c-0.196 0-0.38 0.054-0.552 0.121l0.003-0.010-0.184 0.085-0.016 0.010-0.006 0.006-0.252 0.181-0.109 0.114z"
  }), el("path", {
    d: "M0.725 6.686c-0.389 0.397-0.821 1.149-0.706 2.586 0.068 1.123 0.562 2.799 2.56 4.434 0.094 0.077 0.204 0.114 0.322 0.114 0.151 0 0.31-0.073 0.409-0.213 0.177-0.239 0.136-0.582-0.090-0.767-1.63-1.332-2.072-2.639-2.149-3.531 0.23 0.132 0.486 0.218 0.772 0.218 0.879 0 1.583-0.753 1.583-1.677s-0.71-1.672-1.583-1.672c-0.199 0-0.378 0.054-0.554 0.121l0.008-0.010-0.184 0.085-0.018 0.010-0.009 0.006-0.253 0.182-0.108 0.114z"
  }), el("path", {
    d: "M19.25 6.929h-10.041c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75h10.041c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75z"
  }), el("path", {
    d: "M19.25 10.75h-10.041c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75h10.041c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75z"
  }), el("path", {
    d: "M19.25 14.571h-10.041c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75h10.041c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75z"
  })),
  "quote_inline_icon": el("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 32 32"
  }, el("path", {
    d: "M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z"
  })),
  "quote_tweet_icon": el("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 512 512"
  }, el("path", {
    d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
  })),
  "at_the_rate": el("svg", {
    width: 30,
    height: 30
  }, el("path", {
    d: "M5.605 17.2c0-2.131 0.499-4.074 1.499-5.829 1-1.754 2.395-3.136 4.19-4.15 1.794-1.013 3.81-1.52 6.046-1.52 2.712 0 4.901 0.773 6.562 2.323 1.662 1.549 2.493 3.589 2.493 6.118 0 2.051-0.542 3.786-1.626 5.202-1.088 1.418-2.304 2.125-3.656 2.125-0.781 0-1.355-0.232-1.717-0.696-0.365-0.462-0.533-1.037-0.506-1.726-1.006 1.614-2.378 2.422-4.11 2.422-1.39 0-2.507-0.539-3.347-1.619-0.842-1.077-1.142-2.442-0.904-4.088 0.237-1.65 0.946-2.982 2.125-4.002 1.179-1.021 2.509-1.53 3.992-1.53s2.638 0.518 3.467 1.558c0.829 1.040 1.122 2.322 0.883 3.843l-0.494 3.2c-0.094 0.739 0.165 1.11 0.77 1.11 0.77 0 1.502-0.56 2.205-1.678 0.701-1.12 1.054-2.493 1.054-4.122 0-2.106-0.656-3.787-1.966-5.046-1.312-1.258-3.133-1.886-5.462-1.886-2.794 0-5.098 0.96-6.91 2.88-1.814 1.92-2.722 4.29-2.722 7.109 0 2.382 0.738 4.227 2.214 5.533 1.477 1.302 3.459 1.989 5.947 2.056l-0.376 1.509c-2.862-0.069-5.184-0.899-6.971-2.494-1.787-1.594-2.68-3.794-2.68-6.602zM19.15 15.85c0.17-1.15-0.014-2.118-0.558-2.899-0.542-0.781-1.28-1.173-2.214-1.173-0.933 0-1.79 0.392-2.571 1.173s-1.259 1.749-1.43 2.899c-0.171 1.152 0.013 2.122 0.557 2.91 0.542 0.787 1.282 1.181 2.214 1.181s1.79-0.394 2.573-1.181c0.781-0.789 1.256-1.758 1.43-2.91z"
  })),
  "columns": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M19.091 0.301h-18.182c-0.503 0-0.909 0.408-0.909 0.908v17.576c0 0.504 0.406 0.913 0.909 0.913h18.182c0.504 0 0.909-0.409 0.909-0.913v-17.576c0-0.5-0.405-0.908-0.909-0.908v0zM9.091 17.877h-7.275v-14.343h7.275v14.343zM18.183 17.877h-7.273v-14.343h7.273v14.343z"
  })),
  "column": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M19.091 0.301h-18.182c-0.503 0-0.909 0.408-0.909 0.908v17.576c0 0.504 0.406 0.913 0.909 0.913h18.182c0.504 0 0.909-0.409 0.909-0.913v-17.576c0-0.5-0.405-0.908-0.909-0.908zM18.304 17.21h-16.608v-14.343h16.608v14.343z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M15.667 8.5h-11.333c-0.553 0-1-0.447-1-1s0.447-1 1-1h11.333c0.552 0 1 0.447 1 1s-0.448 1-1 1z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M15.667 13.5h-11.333c-0.553 0-1-0.448-1-1s0.447-1 1-1h11.333c0.552 0 1 0.448 1 1s-0.448 1-1 1z"
  })),
  "top_align": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    d: "M1.5 0.438v2.125h17v-2.125h-17zM5.75 8.938h3.188v10.625h2.125v-10.625h3.187l-4.25-4.25-4.25 4.25z"
  })),
  "middle_align": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    d: "M18.5 11.063v-2.125h-17v2.125h17z"
  }), el("path", {
    d: "M12.707 3.519l-2.707-2.707-2.707 2.707h2.030v4.368h1.354v-4.368h2.030z"
  }), el("path", {
    d: "M7.293 16.48l2.707 2.707 2.707-2.707h-2.030v-4.368h-1.354v4.368h-2.030z"
  })),
  "bottom_align": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    d: "M18.5 20v-2.125h-17v2.125h17zM14.25 11.5h-3.187v-10.625h-2.125v10.625h-3.188l4.25 4.25 4.25-4.25z"
  })),
  "carousel_left": el("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 256 512"
  }, el("path", {
    d: "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
  })),
  "carousel_right": el("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 256 512"
  }, el("path", {
    d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
  })),
  "top_margin": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#999",
    d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
  }), el("path", {
    fill: "#575E67",
    d: "M17 0.984h-14c-1.103 0-2 0.897-2 2v0.797h18v-0.797c0-1.103-0.897-2-2-2z"
  })),
  "bottom_margin": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#999",
    d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.656 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
  }), el("path", {
    fill: "#575E67",
    d: "M3 19.016h14c1.103 0 2-0.896 2-2v-0.797h-18v0.797c0 1.103 0.897 2 2 2z"
  })),
  "left_margin": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#999",
    d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.656 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
  }), el("path", {
    fill: "#575E67",
    d: "M0.984 2.999v14c0 1.103 0.896 2 2 2h0.797v-18h-0.797c-1.104 0-2 0.897-2 2z"
  })),
  "right_margin": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#999",
    d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.656 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
  }), el("path", {
    fill: "#575E67",
    d: "M19.015 16.999v-14c0-1.103-0.896-2-2-2h-0.797v18h0.797c1.104 0 2-0.896 2-2z"
  })),
  "vertical_spacing": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#999",
    d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.656-1.343-3-3-3v0z"
  }), el("path", {
    fill: "#575E67",
    d: "M17 0.983h-14c-1.103 0-2 0.896-2 2v0.797h18v-0.797c0-1.103-0.896-2-2-2z"
  }), el("path", {
    fill: "#575E67",
    d: "M3 19.031h14c1.103 0 2-0.896 2-2v-0.797h-18v0.797c0 1.104 0.896 2 2 2z"
  })),
  "horizontal_spacing": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#999",
    d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.656 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
  }), el("path", {
    fill: "#575E67",
    d: "M19.016 16.999v-14c0-1.103-0.896-2-2-2h-0.797v18h0.797c1.103 0 2-0.896 2-2z"
  }), el("path", {
    fill: "#575E67",
    d: "M0.968 2.999v14c0 1.103 0.896 2 2 2h0.797v-18h-0.797c-1.104 0-2 0.897-2 2z"
  })),
  "logo": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M10 0.858c5.039 0 9.139 4.102 9.139 9.142s-4.1 9.142-9.139 9.142c-5.040 0-9.139-4.101-9.139-9.142s4.1-9.142 9.139-9.142zM10 0c-5.524 0-10 4.478-10 10s4.476 10 10 10c5.523 0 10-4.478 10-10s-4.477-10-10-10v0z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M6.405 12.326c0.252 0 0.465-0.053 0.639-0.157s0.314-0.244 0.422-0.418 0.185-0.373 0.229-0.598c0.045-0.226 0.067-0.454 0.067-0.688v-3.264h1.475v3.264c0 0.444-0.056 0.857-0.167 1.241s-0.282 0.719-0.513 1.007c-0.23 0.288-0.524 0.515-0.881 0.679s-0.78 0.248-1.271 0.248c-0.509 0-0.944-0.087-1.304-0.261s-0.652-0.406-0.876-0.697c-0.225-0.291-0.39-0.628-0.495-1.012s-0.158-0.785-0.158-1.205v-3.264h1.475v3.264c0 0.246 0.024 0.479 0.072 0.702s0.126 0.419 0.234 0.593 0.247 0.312 0.418 0.413c0.171 0.102 0.382 0.153 0.634 0.153z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M14.768 12.956c-0.486 0.449-1.047 0.674-1.682 0.674-0.42 0-0.815-0.079-1.188-0.238-0.371-0.158-0.696-0.382-0.975-0.67-0.279-0.287-0.5-0.634-0.661-1.038s-0.243-0.85-0.243-1.336c0-0.437 0.082-0.851 0.243-1.24s0.385-0.729 0.67-1.017c0.284-0.287 0.622-0.515 1.011-0.683 0.391-0.168 0.81-0.252 1.26-0.252 0.593 0 1.111 0.125 1.555 0.373s0.777 0.589 0.998 1.021l-1.097 0.827c-0.144-0.288-0.353-0.512-0.624-0.67-0.273-0.158-0.568-0.238-0.887-0.238-0.246 0-0.469 0.049-0.67 0.148s-0.373 0.236-0.517 0.414c-0.144 0.177-0.255 0.382-0.333 0.615s-0.117 0.485-0.117 0.755c0 0.276 0.042 0.531 0.127 0.765 0.083 0.233 0.2 0.437 0.35 0.607s0.328 0.304 0.535 0.399c0.207 0.097 0.436 0.145 0.688 0.145 0.576 0 1.095-0.267 1.557-0.801v-0.197h-1.241v-1.069h2.464v3.335h-1.223v-0.629z"
  })),
  "marketing_button": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M12.997 2.99c-0.050-0.153-0.158-0.28-0.302-0.353s-0.31-0.086-0.463-0.036l-2.54 0.825c-0.319 0.104-0.493 0.446-0.39 0.765l0.127 0.391-6.461 4.746-2.549 0.828c-0.153 0.050-0.28 0.158-0.353 0.302s-0.086 0.31-0.036 0.463l1.548 4.765c0.083 0.257 0.321 0.42 0.577 0.42 0.062 0 0.125-0.010 0.188-0.030l2.548-0.828 1.309 0.007c0.263 1.241 1.367 2.176 2.686 2.176 1.308 0 2.405-0.92 2.679-2.148l1.343 0.007 0.127 0.391c0.050 0.153 0.158 0.28 0.302 0.353 0.086 0.044 0.181 0.066 0.276 0.066 0.063 0 0.127-0.010 0.188-0.030l2.54-0.825c0.319-0.104 0.493-0.446 0.39-0.765l-3.733-11.489zM2.545 14.732l-1.173-3.61 1.487-0.483 1.173 3.61-1.486 0.483zM8.886 16.215c-0.64 0-1.189-0.396-1.418-0.955l2.83 0.015c-0.232 0.552-0.777 0.94-1.412 0.94zM5.239 14.034l-1.277-3.93 5.862-4.306 2.689 8.275-7.274-0.038zM14.002 14.727l-0.075-0.229c-0-0-0-0.001-0-0.001l-3.283-10.104 1.385-0.45 3.358 10.335-1.385 0.45z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M15.041 5.941c0.088 0.045 0.182 0.066 0.275 0.066 0.221 0 0.434-0.121 0.541-0.332l1.090-2.138c0.152-0.299 0.034-0.664-0.265-0.817s-0.664-0.034-0.817 0.265l-1.090 2.138c-0.152 0.299-0.034 0.664 0.265 0.817z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M19.604 11.714l-2.138-1.089c-0.299-0.152-0.664-0.033-0.817 0.265s-0.033 0.664 0.265 0.817l2.138 1.089c0.088 0.045 0.182 0.066 0.275 0.066 0.221 0 0.434-0.121 0.541-0.332 0.152-0.299 0.033-0.664-0.265-0.817z"
  }), el("path", {
    fill: "#4a00e0",
    d: "M16.533 8.193c0.083 0.257 0.321 0.42 0.577 0.42 0.062 0 0.125-0.010 0.188-0.030l2.282-0.742c0.319-0.104 0.493-0.446 0.39-0.765s-0.446-0.493-0.765-0.39l-2.282 0.742c-0.319 0.104-0.493 0.446-0.39 0.765z"
  })),
  "table_of_contents": el("svg", {
    width: 20,
    height: 20
  }, el("path", {
    fill: "#4a00e0",
    d: "M0 0h1.25v20h-1.25v-20zM18.75 0h1.25v20h-1.25v-20zM1.25 1.25v-1.25h17.5v1.25h-17.5zM1.25 20v-1.25h17.5v1.25h-17.5zM1.25 4.063v-1.25h17.5v1.25h-17.5zM13.75 1.25h1.25v1.563h-1.25v-1.563zM4.375 5c-0.938 0-1.875 0.938-1.875 1.875s0.938 1.875 1.875 1.875c0.938 0 1.875-0.938 1.875-1.875s-0.938-1.875-1.875-1.875zM4.375 5.938c0.625 0 0.938 0.313 0.938 0.938s-0.313 0.938-0.938 0.938c-0.625 0-0.938-0.313-0.938-0.938s0.313-0.938 0.938-0.938zM7.813 7.5h9.688v-1.25h-9.688v1.25zM4.375 9.688c-0.938 0-1.875 0.625-1.875 1.875 0 0.938 0.938 1.875 1.875 1.875s1.875-0.938 1.875-1.875c0-1.25-0.938-1.875-1.875-1.875zM4.375 10.313c0.625 0 0.938 0.625 0.938 1.25 0 0.313-0.313 0.938-0.938 0.938s-0.938-0.625-0.938-0.938c0-0.625 0.313-1.25 0.938-1.25zM7.813 12.188h9.688v-1.25h-9.688v1.25zM4.375 14.063c0.938 0 1.875 0.938 1.875 1.875s-0.938 1.875-1.875 1.875c-0.938 0-1.875-0.938-1.875-1.875s0.938-1.875 1.875-1.875zM4.375 15c-0.625 0-0.938 0.313-0.938 0.938s0.313 0.938 0.938 0.938c0.625 0 0.938-0.313 0.938-0.938s-0.313-0.938-0.938-0.938zM7.813 16.563h9.688v-1.25h-9.688v1.25z"
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (UAGB_Block_Icons);

/***/ }),

/***/ "./src/blocks/call-to-action/components/uagb-controls/generateCSS.js":
/*!***************************************************************************!*\
  !*** ./src/blocks/call-to-action/components/uagb-controls/generateCSS.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function generateCSS(selectors, id) {
  var isResponsive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var responsiveType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var styling_css = "";
  var breakpoint = "";
  var gen_styling_css = "";
  var res_styling_css = "";

  if (responsiveType == "tablet") {
    breakpoint = '976';
  } else if (responsiveType == "mobile") {
    breakpoint = '767';
  }

  for (var i in selectors) {
    var sel = selectors[i];
    var css = "";

    for (var j in sel) {
      var checkString = true;

      if (typeof sel[j] === "string" && sel[j].length === 0) {
        checkString = false;
      }

      if ('font-family' === j && typeof sel[j] != "undefined" && 'Default' === sel[j]) {
        continue;
      }

      if (typeof sel[j] != "undefined" && checkString) {
        css += j + ": " + sel[j] + ";";
      }
    }

    if (css.length !== 0) {
      gen_styling_css += id;
      gen_styling_css += i + "{";
      gen_styling_css += css;
      gen_styling_css += "}";
    }
  }

  if (isResponsive && typeof gen_styling_css !== "undefined" && gen_styling_css.length !== 0) {
    res_styling_css += "@media only screen and (max-width: " + breakpoint + "px) {";
    res_styling_css += gen_styling_css;
    res_styling_css += "}";
  }

  if (isResponsive) {
    return res_styling_css;
  } else {
    return gen_styling_css;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (generateCSS);

/***/ }),

/***/ "./src/blocks/call-to-action/components/uagb-controls/generateCSSUnit.js":
/*!*******************************************************************************!*\
  !*** ./src/blocks/call-to-action/components/uagb-controls/generateCSSUnit.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function generateCSSUnit(value, unit) {
  var css = "";

  if (typeof value != "undefined") {
    css += value + unit;
  }

  return css;
}

/* harmony default export */ __webpack_exports__["default"] = (generateCSSUnit);

/***/ }),

/***/ "./src/blocks/call-to-action/components/uagb-controls/parseIcon.js":
/*!*************************************************************************!*\
  !*** ./src/blocks/call-to-action/components/uagb-controls/parseIcon.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function parseSVG(svg) {
  svg = svg.replace("far ", "");
  svg = svg.replace("fas ", "");
  svg = svg.replace("fab ", "");
  svg = svg.replace("fa-", "");
  svg = svg.replace("fa ", "");
  return svg;
}

/* harmony default export */ __webpack_exports__["default"] = (parseSVG);

/***/ }),

/***/ "./src/blocks/call-to-action/components/uagb-controls/renderIcon.js":
/*!**************************************************************************!*\
  !*** ./src/blocks/call-to-action/components/uagb-controls/renderIcon.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UAGBIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UAGBIcon */ "./src/blocks/call-to-action/components/uagb-controls/UAGBIcon.json");
var _UAGBIcon__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./UAGBIcon */ "./src/blocks/call-to-action/components/uagb-controls/UAGBIcon.json", 1);
/* harmony import */ var _parseIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parseIcon */ "./src/blocks/call-to-action/components/uagb-controls/parseIcon.js");


/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */



function renderSVG(svg) {
  svg = Object(_parseIcon__WEBPACK_IMPORTED_MODULE_2__["default"])(svg);
  var fontAwesome = _UAGBIcon__WEBPACK_IMPORTED_MODULE_1__[svg];

  if ("undefined" != typeof fontAwesome) {
    var viewbox_array = fontAwesome["svg"].hasOwnProperty("brands") ? fontAwesome["svg"]["brands"]["viewBox"] : fontAwesome["svg"]["solid"]["viewBox"];
    var path = fontAwesome["svg"].hasOwnProperty("brands") ? fontAwesome["svg"]["brands"]["path"] : fontAwesome["svg"]["solid"]["path"];
    var viewBox = viewbox_array.join(" ");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: viewBox
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: path
    }));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (renderSVG);

/***/ }),

/***/ "./src/blocks/call-to-action/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/call-to-action/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_uagb_controls_UAGBIcon_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/uagb-controls/UAGBIcon.json */ "./src/blocks/call-to-action/components/uagb-controls/UAGBIcon.json");
var _components_uagb_controls_UAGBIcon_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./components/uagb-controls/UAGBIcon.json */ "./src/blocks/call-to-action/components/uagb-controls/UAGBIcon.json", 1);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Title */ "./src/blocks/call-to-action/components/Title.js");
/* harmony import */ var _components_Description__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Description */ "./src/blocks/call-to-action/components/Description.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./classes */ "./src/blocks/call-to-action/classes.js");
/* harmony import */ var _components_CTA__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/CTA */ "./src/blocks/call-to-action/components/CTA.js");
/* harmony import */ var _components_uagb_controls_block_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/uagb-controls/block-icons */ "./src/blocks/call-to-action/components/uagb-controls/block-icons.js");
/* harmony import */ var _inline_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./inline-styles */ "./src/blocks/call-to-action/inline-styles.js");
/* harmony import */ var _components_uagb_controls_renderIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/uagb-controls/renderIcon */ "./src/blocks/call-to-action/components/uagb-controls/renderIcon.js");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/typography */ "./src/blocks/call-to-action/components/typography/index.js");
/* harmony import */ var _components_typography_fontloader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/typography/fontloader */ "./src/blocks/call-to-action/components/typography/fontloader.js");









/**
 * BLOCK: Call To Action
 */










 // Import all of our Text Options requirements.

 // Import Web font loader for google fonts.


var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    InspectorControls = _wp$blockEditor.InspectorControls,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    TabPanel = _wp$components.TabPanel,
    Dashicon = _wp$components.Dashicon,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl;
var svg_icons = Object.keys(_components_uagb_controls_UAGBIcon_json__WEBPACK_IMPORTED_MODULE_10__);
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;

var UAGBCallToAction =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(UAGBCallToAction, _Component);

  function UAGBCallToAction() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UAGBCallToAction);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(UAGBCallToAction).apply(this, arguments));
    _this.toggleTarget = _this.toggleTarget.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.setCtaIcon = _this.setCtaIcon.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UAGBCallToAction, [{
    key: "setCtaIcon",
    value: function setCtaIcon(value) {
      this.props.setAttributes({
        ctaIcon: value
      });
    }
    /**
     * Function Name: toggleTarget.
     */

  }, {
    key: "toggleTarget",
    value: function toggleTarget() {
      var ctaTarget = this.props.attributes.ctaTarget;
      var setAttributes = this.props.setAttributes;
      setAttributes({
        ctaTarget: !ctaTarget
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          setAttributes = _this$props.setAttributes,
          attributes = _this$props.attributes; // Setup the attributes.

      var textAlign = attributes.textAlign,
          titleColor = attributes.titleColor,
          descColor = attributes.descColor,
          titleTag = attributes.titleTag,
          titleFontSize = attributes.titleFontSize,
          titleFontSizeType = attributes.titleFontSizeType,
          titleFontSizeMobile = attributes.titleFontSizeMobile,
          titleFontSizeTablet = attributes.titleFontSizeTablet,
          titleFontFamily = attributes.titleFontFamily,
          titleFontWeight = attributes.titleFontWeight,
          titleFontSubset = attributes.titleFontSubset,
          titleLineHeightType = attributes.titleLineHeightType,
          titleLineHeight = attributes.titleLineHeight,
          titleLineHeightTablet = attributes.titleLineHeightTablet,
          titleLineHeightMobile = attributes.titleLineHeightMobile,
          titleLoadGoogleFonts = attributes.titleLoadGoogleFonts,
          descFontSize = attributes.descFontSize,
          descFontSizeType = attributes.descFontSizeType,
          descFontSizeMobile = attributes.descFontSizeMobile,
          descFontSizeTablet = attributes.descFontSizeTablet,
          descFontFamily = attributes.descFontFamily,
          descFontWeight = attributes.descFontWeight,
          descFontSubset = attributes.descFontSubset,
          descLineHeightType = attributes.descLineHeightType,
          descLineHeight = attributes.descLineHeight,
          descLineHeightTablet = attributes.descLineHeightTablet,
          descLineHeightMobile = attributes.descLineHeightMobile,
          descLoadGoogleFonts = attributes.descLoadGoogleFonts,
          separatorWidth = attributes.separatorWidth,
          separatorHeight = attributes.separatorHeight,
          titleSpace = attributes.titleSpace,
          separatorSpace = attributes.separatorSpace,
          descSpace = attributes.descSpace,
          ctaPosition = attributes.ctaPosition,
          block_id = attributes.block_id,
          buttonAlign = attributes.buttonAlign,
          ctaType = attributes.ctaType,
          ctaText = attributes.ctaText,
          ctaLink = attributes.ctaLink,
          ctaTarget = attributes.ctaTarget,
          ctaIcon = attributes.ctaIcon,
          ctaIconPosition = attributes.ctaIconPosition,
          ctaIconSpace = attributes.ctaIconSpace,
          ctaFontSize = attributes.ctaFontSize,
          ctaFontSizeType = attributes.ctaFontSizeType,
          ctaFontSizeMobile = attributes.ctaFontSizeMobile,
          ctaFontSizeTablet = attributes.ctaFontSizeTablet,
          ctaFontFamily = attributes.ctaFontFamily,
          ctaFontWeight = attributes.ctaFontWeight,
          ctaFontSubset = attributes.ctaFontSubset,
          ctaLoadGoogleFonts = attributes.ctaLoadGoogleFonts,
          contentWidth = attributes.contentWidth,
          ctaBtnLinkColor = attributes.ctaBtnLinkColor,
          ctaBgHoverColor = attributes.ctaBgHoverColor,
          ctaBgColor = attributes.ctaBgColor,
          ctaBtnVertPadding = attributes.ctaBtnVertPadding,
          ctaBtnHrPadding = attributes.ctaBtnHrPadding,
          ctaBorderStyle = attributes.ctaBorderStyle,
          ctaBorderColor = attributes.ctaBorderColor,
          ctaBorderhoverColor = attributes.ctaBorderhoverColor,
          ctaBorderWidth = attributes.ctaBorderWidth,
          ctaBorderRadius = attributes.ctaBorderRadius,
          stack = attributes.stack,
          ctaLeftSpace = attributes.ctaLeftSpace,
          ctaRightSpace = attributes.ctaRightSpace,
          ctaLinkHoverColor = attributes.ctaLinkHoverColor; // Add CSS.

      var element = document.getElementById("uagb-cta-style-" + this.props.clientId);

      if (null != element && "undefined" != typeof element) {
        element.innerHTML = Object(_inline_styles__WEBPACK_IMPORTED_MODULE_17__["default"])(this.props);
      }

      var sizeTypes = [{
        key: "px",
        name: __("px")
      }, {
        key: "em",
        name: __("em")
      }];
      var loadCtaGoogleFonts;
      var loadTitleGoogleFonts;
      var loadDescGoogleFonts;

      if (ctaLoadGoogleFonts == true) {
        var ctaconfig = {
          google: {
            families: [ctaFontFamily + (ctaFontWeight ? ":" + ctaFontWeight : "")]
          }
        };
        loadCtaGoogleFonts = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_typography_fontloader__WEBPACK_IMPORTED_MODULE_20__["default"], {
          config: ctaconfig
        });
      }

      if (titleLoadGoogleFonts == true) {
        var titleconfig = {
          google: {
            families: [titleFontFamily + (titleFontWeight ? ":" + titleFontWeight : "")]
          }
        };
        loadTitleGoogleFonts = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_typography_fontloader__WEBPACK_IMPORTED_MODULE_20__["default"], {
          config: titleconfig
        });
      }

      if (descLoadGoogleFonts == true) {
        var descconfig = {
          google: {
            families: [descFontFamily + (descFontWeight ? ":" + descFontWeight : "")]
          }
        };
        loadDescGoogleFonts = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_typography_fontloader__WEBPACK_IMPORTED_MODULE_20__["default"], {
          config: descconfig
        });
      } // Icon properties.


      var cta_icon_props = {
        icons: svg_icons,
        value: ctaIcon,
        onChange: this.setCtaIcon,
        isMulti: false,
        renderFunc: _components_uagb_controls_renderIcon__WEBPACK_IMPORTED_MODULE_18__["default"],
        noSelectedPlaceholder: __("Select Icon")
      }; // CTA settings.

      var ctaSettings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelBody, {
        title: __("Button"),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SelectControl, {
        label: __("Type"),
        value: ctaType,
        onChange: function onChange(value) {
          return setAttributes({
            ctaType: value
          });
        },
        options: [{
          value: "none",
          label: __("None")
        }, {
          value: "text",
          label: __("Text")
        }, {
          value: "button",
          label: __("Button")
        }, {
          value: "all",
          label: __("Complete Box")
        }]
      }), (ctaType === "text" || ctaType === "button") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(TextControl, {
        label: __("Text"),
        value: ctaText,
        onChange: function onChange(value) {
          return setAttributes({
            ctaText: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_typography__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: __("Typography"),
        attributes: attributes,
        setAttributes: setAttributes,
        loadGoogleFonts: {
          value: ctaLoadGoogleFonts,
          label: __("ctaLoadGoogleFonts")
        },
        fontFamily: {
          value: ctaFontFamily,
          label: __("ctaFontFamily")
        },
        fontWeight: {
          value: ctaFontWeight,
          label: __("ctaFontWeight")
        },
        fontSubset: {
          value: ctaFontSubset,
          label: __("ctaFontSubset")
        },
        fontSizeType: {
          value: ctaFontSizeType,
          label: __("ctaFontSizeType")
        },
        fontSize: {
          value: ctaFontSize,
          label: __("ctaFontSize")
        },
        fontSizeMobile: {
          value: ctaFontSizeMobile,
          label: __("ctaFontSizeMobile")
        },
        fontSizeTablet: {
          value: ctaFontSizeTablet,
          label: __("ctaFontSizeTablet")
        },
        disableLineHeight: true
      })), ctaType !== "none" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(TextControl, {
        label: __("Link"),
        value: ctaLink,
        onChange: function onChange(value) {
          return setAttributes({
            ctaLink: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
        label: __("Open in new Window"),
        checked: ctaTarget,
        onChange: this.toggleTarget
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("hr", {
        className: "uagb-editor__separator"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h2", null, __("Button Icon")), ctaType !== "all" && ctaType !== "none" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_11___default.a, cta_icon_props), ctaIcon != "" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SelectControl, {
        label: __("Icon Position"),
        value: ctaIconPosition,
        onChange: function onChange(value) {
          return setAttributes({
            ctaIconPosition: value
          });
        },
        options: [{
          value: "before",
          label: __("Before Text")
        }, {
          value: "after",
          label: __("After Text")
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        label: __("Icon Spacing"),
        value: ctaIconSpace,
        onChange: function onChange(value) {
          return setAttributes({
            ctaIconSpace: value
          });
        },
        min: 0,
        max: 50,
        beforeIcon: "",
        allowReset: true
      }))), ctaType == "button" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("hr", {
        className: "uagb-editor__separator"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h2", null, __("Button Padding (px)")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        label: _components_uagb_controls_block_icons__WEBPACK_IMPORTED_MODULE_16__["default"].vertical_spacing,
        className: "uagb-margin-control",
        value: ctaBtnVertPadding,
        onChange: function onChange(value) {
          return setAttributes({
            ctaBtnVertPadding: value
          });
        },
        min: 0,
        max: 500,
        beforeIcon: "",
        allowReset: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        label: _components_uagb_controls_block_icons__WEBPACK_IMPORTED_MODULE_16__["default"].horizontal_spacing,
        className: "uagb-margin-control",
        value: ctaBtnHrPadding,
        onChange: function onChange(value) {
          return setAttributes({
            ctaBtnHrPadding: value
          });
        },
        min: 0,
        max: 500,
        beforeIcon: "",
        allowReset: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("hr", {
        className: "uagb-editor__separator"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h2", null, __("Button Border")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SelectControl, {
        label: __("Style"),
        value: ctaBorderStyle,
        onChange: function onChange(value) {
          return setAttributes({
            ctaBorderStyle: value
          });
        },
        options: [{
          value: "none",
          label: __("None")
        }, {
          value: "solid",
          label: __("Solid")
        }, {
          value: "double",
          label: __("Double")
        }, {
          value: "dashed",
          label: __("Dashed")
        }, {
          value: "dotted",
          label: __("Dotted")
        }]
      }), ctaBorderStyle != "none" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        label: __("Width"),
        value: ctaBorderWidth,
        onChange: function onChange(value) {
          return setAttributes({
            ctaBorderWidth: value
          });
        },
        min: 0,
        max: 10,
        beforeIcon: "",
        allowReset: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        label: __("Rounded Corner"),
        value: ctaBorderRadius,
        onChange: function onChange(value) {
          return setAttributes({
            ctaBorderRadius: value
          });
        },
        min: 0,
        max: 100,
        beforeIcon: "",
        allowReset: true
      }))), ctaType === "text" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(TabPanel, {
        className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
        activeClass: "active-tab",
        tabs: [{
          name: "normal",
          title: __("Normal"),
          className: "uagb-normal-tab"
        }, {
          name: "hover",
          title: __("Hover"),
          className: "uagb-hover-tab"
        }]
      }, function (tabName) {
        var cta_text_tab;

        if ("normal" === tabName.name) {
          cta_text_tab = cta_txt_color;
        } else {
          cta_text_tab = cta_txt_hover_color;
        }

        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, cta_text_tab);
      }), ctaType === "button" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(TabPanel, {
        className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
        activeClass: "active-tab",
        tabs: [{
          name: "normal",
          title: __("Normal"),
          className: "uagb-normal-tab"
        }, {
          name: "hover",
          title: __("Hover"),
          className: "uagb-focus-tab"
        }]
      }, function (tabName) {
        var tabout;

        if ("normal" === tabName.name) {
          tabout = ctaNormalSettings;
        } else {
          tabout = ctaHoverSettings;
        }

        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, tabout);
      }));
      var ctaNormalSettings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", {
        className: "uagb-setting-label"
      }, __("Text Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "components-base-control__label"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: ctaBtnLinkColor
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ColorPalette, {
        value: ctaBtnLinkColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            ctaBtnLinkColor: colorValue
          });
        },
        allowReset: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", {
        className: "uagb-setting-label"
      }, __("Background Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "components-base-control__label"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: ctaBgColor
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ColorPalette, {
        value: ctaBgColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            ctaBgColor: colorValue
          });
        },
        allowReset: true
      }), ctaBorderStyle !== "none" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", {
        className: "uagb-setting-label"
      }, __("Border Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "components-base-control__label"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: ctaBorderColor
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ColorPalette, {
        value: ctaBorderColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            ctaBorderColor: colorValue
          });
        },
        allowReset: true
      })));
      var ctaHoverSettings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", {
        className: "uagb-setting-label"
      }, __("Text Hover Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "components-base-control__label"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: ctaLinkHoverColor
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ColorPalette, {
        value: ctaLinkHoverColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            ctaLinkHoverColor: colorValue
          });
        },
        allowReset: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", {
        className: "uagb-setting-label"
      }, __("Background Hover Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "components-base-control__label"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: ctaBgHoverColor
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ColorPalette, {
        value: ctaBgHoverColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            ctaBgHoverColor: colorValue
          });
        },
        allowReset: true
      }), ctaBorderStyle !== "none" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", {
        className: "uagb-setting-label"
      }, __("Border Hover Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "components-base-control__label"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: ctaBorderhoverColor
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ColorPalette, {
        value: ctaBorderhoverColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            ctaBorderhoverColor: colorValue
          });
        },
        allowReset: true
      })));
      var cta_txt_color = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", {
        className: "uagb-setting-label"
      }, __("CTA Text Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "components-base-control__label"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: ctaBtnLinkColor
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ColorPalette, {
        value: ctaBtnLinkColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            ctaBtnLinkColor: colorValue
          });
        },
        allowReset: true
      }));
      var cta_txt_hover_color = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", {
        className: "uagb-setting-label"
      }, __("CTA Text Hover Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "components-base-control__label"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: ctaLinkHoverColor
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ColorPalette, {
        value: ctaLinkHoverColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            ctaLinkHoverColor: colorValue
          });
        },
        allowReset: true
      })); // Typography settings.

      var TypographySettings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelBody, {
        title: __("Content"),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h2", null, __("Heading")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SelectControl, {
        label: __("Tag"),
        value: titleTag,
        onChange: function onChange(value) {
          return setAttributes({
            titleTag: value
          });
        },
        options: [{
          value: "h1",
          label: __("H1")
        }, {
          value: "h2",
          label: __("H2")
        }, {
          value: "h3",
          label: __("H3")
        }, {
          value: "h4",
          label: __("H4")
        }, {
          value: "h5",
          label: __("H5")
        }, {
          value: "h6",
          label: __("H6")
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_typography__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: __("Typography"),
        attributes: attributes,
        setAttributes: setAttributes,
        loadGoogleFonts: {
          value: titleLoadGoogleFonts,
          label: __("titleLoadGoogleFonts")
        },
        fontFamily: {
          value: titleFontFamily,
          label: __("titleFontFamily")
        },
        fontWeight: {
          value: titleFontWeight,
          label: __("titleFontWeight")
        },
        fontSubset: {
          value: titleFontSubset,
          label: __("titleFontSubset")
        },
        fontSizeType: {
          value: titleFontSizeType,
          label: __("titleFontSizeType")
        },
        fontSize: {
          value: titleFontSize,
          label: __("titleFontSize")
        },
        fontSizeMobile: {
          value: titleFontSizeMobile,
          label: __("titleFontSizeMobile")
        },
        fontSizeTablet: {
          value: titleFontSizeTablet,
          label: __("titleFontSizeTablet")
        },
        lineHeightType: {
          value: titleLineHeightType,
          label: __("titleLineHeightType")
        },
        lineHeight: {
          value: titleLineHeight,
          label: __("titleLineHeight")
        },
        lineHeightMobile: {
          value: titleLineHeightMobile,
          label: __("titleLineHeightMobile")
        },
        lineHeightTablet: {
          value: titleLineHeightTablet,
          label: __("titleLineHeightTablet")
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", {
        className: "uagb-setting-label"
      }, __("Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "components-base-control__label"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: titleColor
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ColorPalette, {
        value: titleColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            titleColor: colorValue
          });
        },
        allowReset: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("hr", {
        className: "uagb-editor__separator"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h2", null, __("Description")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_typography__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: __("Typography"),
        attributes: attributes,
        setAttributes: setAttributes,
        loadGoogleFonts: {
          value: descLoadGoogleFonts,
          label: __("descLoadGoogleFonts")
        },
        fontFamily: {
          value: descFontFamily,
          label: __("descFontFamily")
        },
        fontWeight: {
          value: descFontWeight,
          label: __("descFontWeight")
        },
        fontSubset: {
          value: descFontSubset,
          label: __("descFontSubset")
        },
        fontSizeType: {
          value: descFontSizeType,
          label: __("descFontSizeType")
        },
        fontSize: {
          value: descFontSize,
          label: __("descFontSize")
        },
        fontSizeMobile: {
          value: descFontSizeMobile,
          label: __("descFontSizeMobile")
        },
        fontSizeTablet: {
          value: descFontSizeTablet,
          label: __("descFontSizeTablet")
        },
        lineHeightType: {
          value: descLineHeightType,
          label: __("descLineHeightType")
        },
        lineHeight: {
          value: descLineHeight,
          label: __("descLineHeight")
        },
        lineHeightMobile: {
          value: descLineHeightMobile,
          label: __("descLineHeightMobile")
        },
        lineHeightTablet: {
          value: descLineHeightTablet,
          label: __("descLineHeightTablet")
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", {
        className: "uagb-setting-label"
      }, __("Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "components-base-control__label"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: descColor
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ColorPalette, {
        value: descColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            descColor: colorValue
          });
        },
        allowReset: true
      })); // Margin Settings.

      var marginSettings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelBody, {
        title: __("Spacing"),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        label: __("Heading Bottom Margin"),
        value: titleSpace,
        onChange: function onChange(value) {
          return setAttributes({
            titleSpace: value
          });
        },
        min: 0,
        max: 500,
        beforeIcon: "",
        allowReset: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        label: __("Description Bottom Margin"),
        value: descSpace,
        onChange: function onChange(value) {
          return setAttributes({
            descSpace: value
          });
        },
        min: 0,
        max: 500,
        beforeIcon: "",
        allowReset: true
      }), textAlign === "left" && ctaPosition === "right" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        label: __("Content Left Margin"),
        value: ctaLeftSpace,
        onChange: function onChange(value) {
          return setAttributes({
            ctaLeftSpace: value
          });
        },
        min: 0,
        max: 500,
        beforeIcon: "",
        allowReset: true
      }), textAlign === "right" && ctaPosition === "right" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        label: __("Content Right Margin"),
        value: ctaRightSpace,
        onChange: function onChange(value) {
          return setAttributes({
            ctaRightSpace: value
          });
        },
        min: 0,
        max: 500,
        beforeIcon: "",
        allowReset: true
      }));
      var layouts = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelBody, {
        title: __("Layout"),
        initialOpen: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SelectControl, {
        label: __("Button Position"),
        value: ctaPosition,
        onChange: function onChange(value) {
          return setAttributes({
            ctaPosition: value
          });
        },
        options: [{
          value: "right",
          label: __("Normal")
        }, {
          value: "below-title",
          label: __("Stack")
        }]
      }), ctaPosition == "right" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SelectControl, {
        label: __("Stack on"),
        value: stack,
        options: [{
          value: "none",
          label: __("None")
        }, {
          value: "tablet",
          label: __("Tablet")
        }, {
          value: "mobile",
          label: __("Mobile")
        }],
        help: __("Note: Choose on what breakpoint the CTA button will stack."),
        onChange: function onChange(value) {
          return setAttributes({
            stack: value
          });
        }
      }), (ctaType === "text" || ctaType === "button") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, ctaPosition === "right" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        label: __("Content Width (%)"),
        value: contentWidth,
        onChange: function onChange(value) {
          return setAttributes({
            contentWidth: value
          });
        },
        min: 0,
        max: 100,
        initialPosition: 70,
        allowReset: true
      })), ctaPosition && ctaPosition === "right" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SelectControl, {
        label: __("Verticle Alignment"),
        value: buttonAlign,
        onChange: function onChange(value) {
          return setAttributes({
            buttonAlign: value
          });
        },
        options: [{
          value: "top",
          label: __("Top")
        }, {
          value: "middle",
          label: __("Middle")
        }]
      })); // Global Controls.

      var inspect_control = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(InspectorControls, null, ctaType !== "all" && ctaType !== "none" && layouts, TypographySettings, ctaSettings); // Get icon/Image components.

      var is_cta = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_CTA__WEBPACK_IMPORTED_MODULE_15__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      }); // Get description components.

      var desc = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "uagb-cta-text-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_Description__WEBPACK_IMPORTED_MODULE_13__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        props: this.props
      })); // Get Title components.

      var title_text = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "uagb-cta__title-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_Title__WEBPACK_IMPORTED_MODULE_12__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        props: this.props
      }));
      var output = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default.a.apply(void 0, ["uagb-cta__content-wrap"].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_classes__WEBPACK_IMPORTED_MODULE_14__["default"])(attributes))))
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "uagb-cta__left-right-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "uagb-cta__content"
      }, ctaPosition == "below-title" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, title_text, desc, is_cta), ctaPosition == "right" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, title_text, desc)), ctaPosition == "right" && is_cta));
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(BlockControls, {
        key: "controls"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(AlignmentToolbar, {
        value: textAlign,
        onChange: function onChange(value) {
          return setAttributes({
            textAlign: value
          });
        }
      })), inspect_control, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(className, "uagb-cta__outer-wrap"),
        id: "uagb-cta-block-".concat(this.props.clientId)
      }, ctaType == "all" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("a", {
        href: "javascript:void(0)",
        className: "uagb-cta__block-link-wrap uagb-cta__link-to-all",
        rel: "noopener noreferrer"
      }, " "), output), ctaType !== "all" && output), loadCtaGoogleFonts, loadTitleGoogleFonts, loadDescGoogleFonts);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // Assigning block_id in the attribute.
      this.props.setAttributes({
        block_id: this.props.clientId
      }); // Pushing Style tag for this block css.

      var $style = document.createElement("style");
      $style.setAttribute("id", "uagb-cta-style-" + this.props.clientId);
      document.head.appendChild($style);
    }
  }]);

  return UAGBCallToAction;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (UAGBCallToAction);

/***/ }),

/***/ "./src/blocks/call-to-action/inline-styles.js":
/*!****************************************************!*\
  !*** ./src/blocks/call-to-action/inline-styles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_uagb_controls_generateCSS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/uagb-controls/generateCSS */ "./src/blocks/call-to-action/components/uagb-controls/generateCSS.js");
/* harmony import */ var _components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/uagb-controls/generateCSSUnit */ "./src/blocks/call-to-action/components/uagb-controls/generateCSSUnit.js");
/**
 * Returns Dynamic Generated CSS
 */



function CtaStyle(props) {
  var _props$attributes = props.attributes,
      textAlign = _props$attributes.textAlign,
      titleColor = _props$attributes.titleColor,
      descColor = _props$attributes.descColor,
      titleFontSize = _props$attributes.titleFontSize,
      titleFontSizeType = _props$attributes.titleFontSizeType,
      titleFontSizeMobile = _props$attributes.titleFontSizeMobile,
      titleFontSizeTablet = _props$attributes.titleFontSizeTablet,
      titleFontFamily = _props$attributes.titleFontFamily,
      titleFontWeight = _props$attributes.titleFontWeight,
      titleFontSubset = _props$attributes.titleFontSubset,
      titleLineHeightType = _props$attributes.titleLineHeightType,
      titleLineHeight = _props$attributes.titleLineHeight,
      titleLineHeightTablet = _props$attributes.titleLineHeightTablet,
      titleLineHeightMobile = _props$attributes.titleLineHeightMobile,
      titleLoadGoogleFonts = _props$attributes.titleLoadGoogleFonts,
      descFontSize = _props$attributes.descFontSize,
      descFontSizeType = _props$attributes.descFontSizeType,
      descFontSizeMobile = _props$attributes.descFontSizeMobile,
      descFontSizeTablet = _props$attributes.descFontSizeTablet,
      descFontFamily = _props$attributes.descFontFamily,
      descFontWeight = _props$attributes.descFontWeight,
      descFontSubset = _props$attributes.descFontSubset,
      descLineHeightType = _props$attributes.descLineHeightType,
      descLineHeight = _props$attributes.descLineHeight,
      descLineHeightTablet = _props$attributes.descLineHeightTablet,
      descLineHeightMobile = _props$attributes.descLineHeightMobile,
      descLoadGoogleFonts = _props$attributes.descLoadGoogleFonts,
      titleSpace = _props$attributes.titleSpace,
      descSpace = _props$attributes.descSpace,
      ctaPosition = _props$attributes.ctaPosition,
      block_id = _props$attributes.block_id,
      ctaFontSize = _props$attributes.ctaFontSize,
      ctaFontSizeType = _props$attributes.ctaFontSizeType,
      ctaFontSizeMobile = _props$attributes.ctaFontSizeMobile,
      ctaFontSizeTablet = _props$attributes.ctaFontSizeTablet,
      ctaFontFamily = _props$attributes.ctaFontFamily,
      ctaFontWeight = _props$attributes.ctaFontWeight,
      ctaFontSubset = _props$attributes.ctaFontSubset,
      ctaLoadGoogleFonts = _props$attributes.ctaLoadGoogleFonts,
      ctaBtnSize = _props$attributes.ctaBtnSize,
      ctaBtnLinkColor = _props$attributes.ctaBtnLinkColor,
      ctaBgColor = _props$attributes.ctaBgColor,
      ctaBtnVertPadding = _props$attributes.ctaBtnVertPadding,
      ctaBtnHrPadding = _props$attributes.ctaBtnHrPadding,
      ctaBorderStyle = _props$attributes.ctaBorderStyle,
      ctaBorderColor = _props$attributes.ctaBorderColor,
      ctaBorderWidth = _props$attributes.ctaBorderWidth,
      ctaBorderRadius = _props$attributes.ctaBorderRadius,
      ctaLinkHoverColor = _props$attributes.ctaLinkHoverColor,
      ctaBgHoverColor = _props$attributes.ctaBgHoverColor,
      ctaBorderhoverColor = _props$attributes.ctaBorderhoverColor,
      ctaIconSpace = _props$attributes.ctaIconSpace,
      ctaLeftSpace = _props$attributes.ctaLeftSpace,
      ctaRightSpace = _props$attributes.ctaRightSpace,
      contentWidth = _props$attributes.contentWidth,
      ctaType = _props$attributes.ctaType;
  var clientId = "uagb-cta-block-" + props.clientId;
  var selectors = {
    " .uagb-cta__content-wrap": {
      "text-align": textAlign
    },
    // CTA style
    " .uagb-cta__button-wrapper a.uagb-cta-typeof-text": {
      "font-size": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSize, ctaFontSizeType),
      "font-family": ctaFontFamily,
      "font-weight": ctaFontWeight,
      "color": ctaBtnLinkColor
    },
    " .uagb-cta__button-wrapper:hover a.uagb-cta-typeof-text": {
      "color": ctaLinkHoverColor
    },
    " .uagb-cta__button-wrapper a.uagb-cta-typeof-button": {
      "font-size": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSize, ctaFontSizeType),
      "font-family": ctaFontFamily,
      "font-weight": ctaFontWeight,
      "color": ctaBtnLinkColor,
      "background-color": ctaBgColor,
      "border-style": ctaBorderStyle,
      "border-color": ctaBorderColor,
      "border-radius": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaBorderRadius, "px"),
      "border-width": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaBorderWidth, "px"),
      "padding-top": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaBtnVertPadding, "px"),
      "padding-bottom": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaBtnVertPadding, "px"),
      "padding-left": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaBtnHrPadding, "px"),
      "padding-right": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaBtnHrPadding, "px")
    },
    " .uagb-cta__button-wrapper:hover a.uagb-cta-typeof-button": {
      "color": ctaLinkHoverColor,
      "background-color": ctaBgHoverColor,
      "border-color": ctaBorderhoverColor
    },
    " .uagb-cta__button-wrapper .uagb-cta-with-svg": {
      "font-size": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSize, ctaFontSizeType),
      "height": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSize, ctaFontSizeType),
      "width": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSize, ctaFontSizeType),
      "line-height": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSize, ctaFontSizeType)
    },
    " .uagb-cta__button-wrapper .uagb-cta__block-link svg": {
      "fill": ctaBtnLinkColor
    },
    " .uagb-cta__button-wrapper:hover .uagb-cta__block-link svg": {
      "fill": ctaLinkHoverColor
    },
    // Title Style
    " .editor-rich-text .uagb-cta__title": {
      "font-size": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(titleFontSize, titleFontSizeType),
      "font-family": titleFontFamily,
      "font-weight": titleFontWeight,
      "line-height": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(titleLineHeight, titleLineHeightType),
      "color": titleColor,
      "margin-bottom": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(titleSpace, "px")
    },
    // Description Style
    " .editor-rich-text .uagb-cta__desc": {
      "font-size": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(descFontSize, descFontSizeType),
      "font-family": descFontFamily,
      "font-weight": descFontWeight,
      "line-height": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(descLineHeight, descLineHeightType),
      "color": descColor,
      "margin-bottom": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(descSpace, "px")
    },
    " .uagb-cta__align-button-after": {
      "margin-left": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaIconSpace, "px")
    },
    " .uagb-cta__align-button-before": {
      "margin-right": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaIconSpace, "px")
    }
  };

  if (textAlign === "left" && ctaPosition === "right") {
    selectors[" .uagb-cta__left-right-wrap .uagb-cta__content"] = {
      "margin-left": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaLeftSpace, "px"),
      "margin-right": "0"
    };
  }

  if (textAlign === "right" && ctaPosition === "right") {
    selectors[" .uagb-cta__left-right-wrap .uagb-cta__content"] = {
      "margin-right": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaRightSpace, "px"),
      "margin-left": "0"
    };
  }

  if (ctaPosition === "right" && (ctaType === "text" || ctaType === "button")) {
    selectors[" .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__content"] = {
      "width": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(contentWidth, "%")
    };
    selectors[" .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__link-wrapper"] = {
      "width": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(100 - contentWidth, "%")
    };
  }

  var tablet_selectors = {
    " .editor-rich-text .uagb-cta__title": {
      "font-size": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(titleFontSizeTablet, titleFontSizeType),
      "line-height": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(titleLineHeightTablet, titleLineHeightType)
    },
    " .editor-rich-text .uagb-cta__desc": {
      "font-size": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(descFontSizeTablet, descFontSizeType),
      "line-height": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(descLineHeightTablet, descLineHeightType)
    },
    " .uagb-cta__button-wrapper a.uagb-cta-typeof-text": {
      "font-size": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSizeTablet, ctaFontSizeType)
    },
    " .uagb-cta__button-wrapper a.uagb-cta-typeof-button": {
      "font-size": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSizeTablet, ctaFontSizeType)
    },
    " .uagb-cta__button-wrapper .uagb-cta-with-svg": {
      "font-size": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSizeTablet, ctaFontSizeType),
      "height": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSizeTablet, ctaFontSizeType),
      "width": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSizeTablet, ctaFontSizeType),
      "line-height": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSizeTablet, ctaFontSizeType)
    }
  };
  var mobile_selectors = {
    " .editor-rich-text .uagb-cta__title": {
      "font-size": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(titleFontSizeMobile, titleFontSizeType),
      "line-height": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(titleLineHeightMobile, titleLineHeightType)
    },
    " .editor-rich-text .uagb-cta__desc": {
      "font-size": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(descFontSizeMobile, descFontSizeType),
      "line-height": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(descLineHeightMobile, descLineHeightType)
    },
    " .uagb-cta__button-wrapper a.uagb-cta-typeof-text": {
      "font-size": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSizeMobile, ctaFontSizeType)
    },
    " .uagb-cta__button-wrapper a.uagb-cta-typeof-button": {
      "font-size": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSizeMobile, ctaFontSizeType)
    },
    " .uagb-cta__button-wrapper .uagb-cta-with-svg": {
      "font-size": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSizeMobile, ctaFontSizeType),
      "height": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSizeMobile, ctaFontSizeType),
      "width": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSizeMobile, ctaFontSizeType),
      "line-height": Object(_components_uagb_controls_generateCSSUnit__WEBPACK_IMPORTED_MODULE_1__["default"])(ctaFontSizeMobile, ctaFontSizeType)
    }
  };
  var id = ".block-editor-page #wpwrap #".concat(clientId);
  var styling_css = Object(_components_uagb_controls_generateCSS__WEBPACK_IMPORTED_MODULE_0__["default"])(selectors, id);
  styling_css += Object(_components_uagb_controls_generateCSS__WEBPACK_IMPORTED_MODULE_0__["default"])(tablet_selectors, id, true, "tablet");
  styling_css += Object(_components_uagb_controls_generateCSS__WEBPACK_IMPORTED_MODULE_0__["default"])(mobile_selectors, id, true, "mobile");
  return styling_css;
}

/* harmony default export */ __webpack_exports__["default"] = (CtaStyle);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_call_to_action_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/call-to-action/block */ "./src/blocks/call-to-action/block.js");
// import CallToAction from './blocks/call-to-action/components/CallToAction';


/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map