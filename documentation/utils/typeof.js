/**
 * typeof.js - 校验数据类型的功能函数集合
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.9
 */

/**
 * 检测对象自身属性中是否具有指定的属性。
 * =============================================================
 * @param {Object} obj
 * @param {String} prop
 * @returns {boolean}
 */
export const hasOwn = (obj, prop) => {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}

export const _typeof = (val) => {
  return Object.prototype.toString.apply(val)
}

/**
 * 判断是否为 Number 类型值
 * =============================================================
 * @param {Number} val - 待检测的数
 * @returns {boolean}
 */
export const isNumber = (val) => {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * 判断是否为 Integer 整数数值
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isInteger = (val) => {
  if (Number.isInteger) {
    return Number.isInteger(val)
  } else {
    return isNumber(val) && isFinite(val) && Math.floor(val) === val
  }
}

/**
 * 判断是否为 Float 浮点数数值
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isFloat = (val) => {
  return isNumber(val) && !isNaN(val) && !isInteger(val)
}

/**
 * 判断是否为 String 类型值
 * =============================================================
 * @param {String} val - 待检测的字符串
 * @returns {boolean}
 */
export const isString = (val) => {
  return typeof val === 'string'
}

/**
 * 判断是否为 Boolean 类型值
 * =============================================================
 * @param {String} val - 待检测的字符串
 * @returns {boolean}
 */
export const isBoolean = (val) => {
  return typeof val === 'boolean'
}

/**
 * 判断是否 Undefined
 * =============================================================
 * @param {any} val
 * @returns {boolean}
 */
export const isUndefined = (val) => {
  return val === 'undefined'
}

/**
 * 检测测试数据是否为 null
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isNull = (val) => {
  return val === null
}

/**
 * 判断是否为 prototype 对象
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isPrototype = (val) => {
  const OP = Object.prototype
  const Ctor = val && val.constructor
  const proto = (isFunction(Ctor) && Ctor.prototype) || OP

  return val === proto
}

/**
 * 检测测试数据是否为 Object 类型
 * =============================================================
 * @method isFunction
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 是 Function 类型返回 true，否则返回 false
 */
export const isObject = (val) => {
  return (
    (typeof val === 'object' || _typeof(val) === '[object Object]') &&
    !isNull(val)
  )
}

/**
 * 检测测试数据是否为类似 Object 类型
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isObjectLike = (val) => {
  return typeof val === 'object' && val !== null
}

/**
 * 检测测试数据是否为 Object 类型
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isPlainObject = (val) => {
  const getPrototypeOf = Object.getPrototypeOf
  let proto = val

  if (!isObjectLike(val) || _typeof(val) !== '[object Object]') {
    return false
  }

  if (getPrototypeOf(val) === null) {
    return true
  }

  while (getPrototypeOf(proto) !== null) {
    proto = getPrototypeOf(proto)
  }

  return getPrototypeOf(val) === proto
}

/**
 * 检测测试数据是否为 Date 类型
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isDate = (val) => {
  return isObjectLike(val) && _typeof(val) === '[object Date]'
}

/**
 * 检测测试数据是否为 Function 类型
 * =============================================================
 * @method isFunction
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 是 Function 类型返回 true，否则返回 false
 */
export const isFunction = (val) => {
  return typeof val === 'function' || _typeof(val) === '[object Function]'
}

/**
 * 检测测试数据是否为有效 length 值
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isLength = (val) => {
  const MAX_SAFE_INTEGER = 9007199254740991

  return isNumber(val) && val > -1 && val % 1 === 0 && val <= MAX_SAFE_INTEGER
}

/**
 * 检测测试数据是否为 Array 类型
 * =============================================================
 * @method isArray
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 是 Array 类型返回 true，否则返回 false
 */
export const isArray = (val) => {
  if (Array.isArray) {
    return Array.isArray(val)
  } else {
    return _typeof(val) === '[object Array]'
  }
}

/**
 * 检测测试数据是否为类似 Array 类型（NodeList 或者 Arguments）
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isArrayLike = (val) => {
  return !isNull(val) && !isFunction(val) && isLength(val.length)
}

/**
 * 检测测试数据是否为 TypedArray 类型
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isTypedArray = (val) => {
  const isTyped =
    /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/
  return isObjectLike(val) && isTyped.test(_typeof(val))
}

/**
 * 检测测试数据是否为 ArrayLike 的对象数据
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isArrayLikeObject = (val) => {
  return isObjectLike(val) && isArrayLike(val)
}

/**
 * 检测测试数据是否为 Arguments 对象
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isArguments = (val) => {
  return isObjectLike(val) && _typeof(val) === '[object Arguments]'
}

/**
 * 检测测试数据是否为 Map 类型
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isMap = (val) => {
  return isObjectLike(val) && _typeof(val) === '[object Map]'
}

/**
 * 检测测试数据是否为 Set 类型
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isSet = (val) => {
  return isObjectLike(val) && _typeof(val) === '[object Set]'
}

/**
 * 检测测试数据是否为 RegExp 类型
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isRegExp = (val) => {
  return isObjectLike(val) && _typeof(val) === '[object RegExp]'
}

/**
 * 检测测试数据是否为 Error 类型
 * =============================================================
 * @param value
 * @returns {boolean}
 */
export const isError = (value) => {
  let type

  if (!isObjectLike(value)) {
    return false
  }

  type = _typeof(value)

  return (
    type === '[object Error]' ||
    type === '[object DOMException]' ||
    (isString(value.message) && isString(value.name) && !isPlainObject(value))
  )
}

/**
 * 检测是否为 HTMLElement 元素节点
 * =============================================================
 * @param {*} el - 要测试的数据
 * @returns {boolean}
 */
export const isElement = (el) => {
  return el && el.nodeName && el.tagName && el.nodeType === 1
}

/**
 * 判断是否未 VNode 对象
 * =============================================================
 * @param node
 * @returns {boolean}
 */
export const isVNode = (node) => {
  return (
    node !== null &&
    typeof node === 'object' &&
    hasOwn(node, 'componentOptions')
  )
}

/**
 * 判断是否为空值
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isEmpty = (val) => {
  if (isNull(val)) {
    return true
  }

  if (
    isArrayLike(val) &&
    (isArray(val) ||
      isString(val) ||
      isFunction(val.splice) ||
      isTypedArray(val) ||
      isArguments(val))
  ) {
    return !val.length
  }

  const type = _typeof(val)

  if (type === '[object Map]' || type === '[object Set]') {
    return !val.size
  }

  if (isPrototype(val)) {
    return !Object.keys(val).length
  }

  for (const key in val) {
    if (hasOwn(val, key)) {
      return false
    }
  }

  return true
}

/**
 * 判断字符串是否为有效的 URL 地址
 * =============================================================
 * @param {String} val - 要检测的字符串
 * @returns {boolean}
 */
export const isURL = (val) => {
  // fragment locator
  const pattern = new RegExp(
    '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
    'i'
  )

  return !!pattern.test(val)
}

/**
 * 判断字符串是否为有效的 Email 地址
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isEmail = (val) => {
  const pattern =
    /^(([^<>()[]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.、d{1,3}])|(([a-zA-Z\-\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/
  return pattern.test(val)
}

/**
 * 判断字符串是否为有效的 16 进制数值
 * =============================================================
 * @param val
 * @returns {boolean}
 */
export const isHex = (val) => {
  const pattern = /^#?([a-f\d]{6}|[a-f\d]{3})$/i
  return pattern.test(val)
}
