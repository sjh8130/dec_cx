/**
 * @license
 * Video.js 7.2.2 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
			(global.videojs = factory());
}(this, (function () {
	var version = "7.2.2";
	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
	var win;
	if (typeof window !== "undefined") {
		win = window;
	} else if (typeof commonjsGlobal !== "undefined") {
		win = commonjsGlobal;
	} else if (typeof self !== "undefined") {
		win = self;
	} else {
		win = {};
	}
	var window_1 = win;
	var empty = {};
	var empty$1 = Object.freeze({
		default: empty
	});
	var minDoc = (empty$1 && empty) || empty$1;
	var topLevel = typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof window !== 'undefined' ? window : {};
	var doccy;
	if (typeof document !== 'undefined') {
		doccy = document;
	} else {
		doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];
		if (!doccy) {
			doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
		}
	}
	var document_1 = doccy;
	var log = void 0;
	var level = 'info';
	var history = [];
	var logByType = function logByType(type, args) {
		var lvl = log.levels[level];
		var lvlRegExp = new RegExp('^(' + lvl + ')$');
		if (type !== 'log') {
			args.unshift(type.toUpperCase() + ':');
		}
		if (history) {
			history.push([].concat(args));
		}
		args.unshift('VIDEOJS:');
		if (!window_1.console) {
			return;
		}
		var fn = window_1.console[type];
		if (!fn && type === 'debug') {
			fn = window_1.console.info || window_1.console.log;
		}
		if (!fn || !lvl || !lvlRegExp.test(type)) {
			return;
		}
		fn[Array.isArray(args) ? 'apply' : 'call'](window_1.console, args);
	};
	log = function log() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}
		logByType('log', args);
	};
	log.levels = {
		all: 'debug|log|warn|error',
		off: '',
		debug: 'debug|log|warn|error',
		info: 'log|warn|error',
		warn: 'warn|error',
		error: 'error',
		DEFAULT: level
	};
	log.level = function (lvl) {
		if (typeof lvl === 'string') {
			if (!log.levels.hasOwnProperty(lvl)) {
				throw new Error('"' + lvl + '" in not a valid log level');
			}
			level = lvl;
		}
		return level;
	};
	log.history = function () {
		return history ? [].concat(history) : [];
	};
	log.history.clear = function () {
		if (history) {
			history.length = 0;
		}
	};
	log.history.disable = function () {
		if (history !== null) {
			history.length = 0;
			history = null;
		}
	};
	log.history.enable = function () {
		if (history === null) {
			history = [];
		}
	};
	log.error = function () {
		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}
		return logByType('error', args);
	};
	log.warn = function () {
		for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			args[_key3] = arguments[_key3];
		}
		return logByType('warn', args);
	};
	log.debug = function () {
		for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
			args[_key4] = arguments[_key4];
		}
		return logByType('debug', args);
	};
	var log$1 = log;
	function clean(s) {
		return s.replace(/\n\r?\s*/g, '');
	}
	var tsml = function tsml(sa) {
		var s = '',
			i = 0;
		for (; i < arguments.length; i++) {
			s += clean(sa[i]) + (arguments[i + 1] || '');
		} return s;
	};
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
		return typeof obj;
	} : function (obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	var classCallCheck = function (instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	};
	var inherits = function (subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	var possibleConstructorReturn = function (self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	var taggedTemplateLiteralLoose = function (strings, raw) {
		strings.raw = raw;
		return strings;
	};
	var toString = Object.prototype.toString;
	var keys = function keys(object) {
		return isObject(object) ? Object.keys(object) : [];
	};
	function each(object, fn) {
		keys(object).forEach(function (key) {
			return fn(object[key], key);
		});
	}
	function reduce(object, fn) {
		var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
		return keys(object).reduce(function (accum, key) {
			return fn(accum, object[key], key);
		}, initial);
	}
	function assign(target) {
		for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			sources[_key - 1] = arguments[_key];
		}
		if (Object.assign) {
			return Object.assign.apply(Object, [target].concat(sources));
		}
		sources.forEach(function (source) {
			if (!source) {
				return;
			}
			each(source, function (value, key) {
				target[key] = value;
			});
		});
		return target;
	}
	function isObject(value) {
		return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
	}
	function isPlain(value) {
		return isObject(value) && toString.call(value) === '[object Object]' && value.constructor === Object;
	}
	function computedStyle(el, prop) {
		if (!el || !prop) {
			return '';
		}
		if (typeof window_1.getComputedStyle === 'function') {
			var cs = window_1.getComputedStyle(el);
			return cs ? cs[prop] : '';
		}
		return '';
	}
	var _templateObject = taggedTemplateLiteralLoose(['Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ', ' to ', '.'], ['Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ', ' to ', '.']);
	function isNonBlankString(str) {
		return typeof str === 'string' && /\S/.test(str);
	}
	function throwIfWhitespace(str) {
		if (/\s/.test(str)) {
			throw new Error('class has illegal whitespace characters');
		}
	}
	function classRegExp(className) {
		return new RegExp('(^|\\s)' + className + '($|\\s)');
	}
	function isReal() {
		return document_1 === window_1.document;
	}
	function isEl(value) {
		return isObject(value) && value.nodeType === 1;
	}
	function isInFrame() {
		try {
			return window_1.parent !== window_1.self;
		} catch (x) {
			return true;
		}
	}
	function createQuerier(method) {
		return function (selector, context) {
			if (!isNonBlankString(selector)) {
				return document_1[method](null);
			}
			if (isNonBlankString(context)) {
				context = document_1.querySelector(context);
			}
			var ctx = isEl(context) ? context : document_1;
			return ctx[method] && ctx[method](selector);
		};
	}
	function createEl() {
		var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
		var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
		var content = arguments[3];
		var el = document_1.createElement(tagName);
		Object.getOwnPropertyNames(properties).forEach(function (propName) {
			var val = properties[propName];
			if (propName.indexOf('aria-') !== -1 || propName === 'role' || propName === 'type') {
				log$1.warn(tsml(_templateObject, propName, val));
				el.setAttribute(propName, val);
			} else if (propName === 'textContent') {
				textContent(el, val);
			} else {
				el[propName] = val;
			}
		});
		Object.getOwnPropertyNames(attributes).forEach(function (attrName) {
			el.setAttribute(attrName, attributes[attrName]);
		});
		if (content) {
			appendContent(el, content);
		}
		return el;
	}
	function textContent(el, text) {
		if (typeof el.textContent === 'undefined') {
			el.innerText = text;
		} else {
			el.textContent = text;
		}
		return el;
	}
	function prependTo(child, parent) {
		if (parent.firstChild) {
			parent.insertBefore(child, parent.firstChild);
		} else {
			parent.appendChild(child);
		}
	}
	function hasClass(element, classToCheck) {
		throwIfWhitespace(classToCheck);
		if (element.classList) {
			return element.classList.contains(classToCheck);
		}
		return classRegExp(classToCheck).test(element.className);
	}
	function addClass(element, classToAdd) {
		if (element.classList) {
			element.classList.add(classToAdd);
		} else if (!hasClass(element, classToAdd)) {
			element.className = (element.className + ' ' + classToAdd).trim();
		}
		return element;
	}
	function removeClass(element, classToRemove) {
		if (element.classList) {
			element.classList.remove(classToRemove);
		} else {
			throwIfWhitespace(classToRemove);
			element.className = element.className.split(/\s+/).filter(function (c) {
				return c !== classToRemove;
			}).join(' ');
		}
		return element;
	}
	function toggleClass(element, classToToggle, predicate) {
		var has = hasClass(element, classToToggle);
		if (typeof predicate === 'function') {
			predicate = predicate(element, classToToggle);
		}
		if (typeof predicate !== 'boolean') {
			predicate = !has;
		}
		if (predicate === has) {
			return;
		}
		if (predicate) {
			addClass(element, classToToggle);
		} else {
			removeClass(element, classToToggle);
		}
		return element;
	}
	function setAttributes(el, attributes) {
		Object.getOwnPropertyNames(attributes).forEach(function (attrName) {
			var attrValue = attributes[attrName];
			if (attrValue === null || typeof attrValue === 'undefined' || attrValue === false) {
				el.removeAttribute(attrName);
			} else {
				el.setAttribute(attrName, attrValue === true ? '' : attrValue);
			}
		});
	}
	function getAttributes(tag) {
		var obj = {};
		var knownBooleans = ',' + 'autoplay,controls,playsinline,loop,muted,default,defaultMuted' + ',';
		if (tag && tag.attributes && tag.attributes.length > 0) {
			var attrs = tag.attributes;
			for (var i = attrs.length - 1; i >= 0; i--) {
				var attrName = attrs[i].name;
				var attrVal = attrs[i].value;
				if (typeof tag[attrName] === 'boolean' || knownBooleans.indexOf(',' + attrName + ',') !== -1) {
					attrVal = attrVal !== null ? true : false;
				}
				obj[attrName] = attrVal;
			}
		}
		return obj;
	}
	function getAttribute(el, attribute) {
		return el.getAttribute(attribute);
	}
	function setAttribute(el, attribute, value) {
		el.setAttribute(attribute, value);
	}
	function removeAttribute(el, attribute) {
		el.removeAttribute(attribute);
	}
	function blockTextSelection() {
		document_1.body.focus();
		document_1.onselectstart = function () {
			return false;
		};
	}
	function unblockTextSelection() {
		document_1.onselectstart = function () {
			return true;
		};
	}
	function getBoundingClientRect(el) {
		if (el && el.getBoundingClientRect && el.parentNode) {
			var rect = el.getBoundingClientRect();
			var result = {};
			['bottom', 'height', 'left', 'right', 'top', 'width'].forEach(function (k) {
				if (rect[k] !== undefined) {
					result[k] = rect[k];
				}
			});
			if (!result.height) {
				result.height = parseFloat(computedStyle(el, 'height'));
			}
			if (!result.width) {
				result.width = parseFloat(computedStyle(el, 'width'));
			}
			return result;
		}
	}
	function findPosition(el) {
		var box = void 0;
		if (el.getBoundingClientRect && el.parentNode) {
			box = el.getBoundingClientRect();
		}
		if (!box) {
			return {
				left: 0,
				top: 0
			};
		}
		var docEl = document_1.documentElement;
		var body = document_1.body;
		var clientLeft = docEl.clientLeft || body.clientLeft || 0;
		var scrollLeft = window_1.pageXOffset || body.scrollLeft;
		var left = box.left + scrollLeft - clientLeft;
		var clientTop = docEl.clientTop || body.clientTop || 0;
		var scrollTop = window_1.pageYOffset || body.scrollTop;
		var top = box.top + scrollTop - clientTop;
		return {
			left: Math.round(left),
			top: Math.round(top)
		};
	}
	function getPointerPosition(el, event) {
		var position = {};
		var box = findPosition(el);
		var boxW = el.offsetWidth;
		var boxH = el.offsetHeight;
		var boxY = box.top;
		var boxX = box.left;
		var pageY = event.pageY;
		var pageX = event.pageX;
		if (event.changedTouches) {
			pageX = event.changedTouches[0].pageX;
			pageY = event.changedTouches[0].pageY;
		}
		position.y = Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH));
		position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW));
		return position;
	}
	function isTextNode(value) {
		return isObject(value) && value.nodeType === 3;
	}
	function emptyEl(el) {
		while (el.firstChild) {
			el.removeChild(el.firstChild);
		}
		return el;
	}
	function normalizeContent(content) {
		if (typeof content === 'function') {
			content = content();
		}
		return (Array.isArray(content) ? content : [content]).map(function (value) {
			if (typeof value === 'function') {
				value = value();
			}
			if (isEl(value) || isTextNode(value)) {
				return value;
			}
			if (typeof value === 'string' && /\S/.test(value)) {
				return document_1.createTextNode(value);
			}
		}).filter(function (value) {
			return value;
		});
	}
	function appendContent(el, content) {
		normalizeContent(content).forEach(function (node) {
			return el.appendChild(node);
		});
		return el;
	}
	function insertContent(el, content) {
		return appendContent(emptyEl(el), content);
	}
	function isSingleLeftClick(event) {
		if (event.button === undefined && event.buttons === undefined) {
			return true;
		}
		if (event.button === 0 && event.buttons === undefined) {
			return true;
		}
		if (event.button !== 0 || event.buttons !== 1) {
			return false;
		}
		return true;
	}
	var $ = createQuerier('querySelector');
	var $$ = createQuerier('querySelectorAll');
	var Dom = Object.freeze({
		isReal: isReal,
		isEl: isEl,
		isInFrame: isInFrame,
		createEl: createEl,
		textContent: textContent,
		prependTo: prependTo,
		hasClass: hasClass,
		addClass: addClass,
		removeClass: removeClass,
		toggleClass: toggleClass,
		setAttributes: setAttributes,
		getAttributes: getAttributes,
		getAttribute: getAttribute,
		setAttribute: setAttribute,
		removeAttribute: removeAttribute,
		blockTextSelection: blockTextSelection,
		unblockTextSelection: unblockTextSelection,
		getBoundingClientRect: getBoundingClientRect,
		findPosition: findPosition,
		getPointerPosition: getPointerPosition,
		isTextNode: isTextNode,
		emptyEl: emptyEl,
		normalizeContent: normalizeContent,
		appendContent: appendContent,
		insertContent: insertContent,
		isSingleLeftClick: isSingleLeftClick,
		$: $,
		$$: $$
	});
	var _guid = 1;
	function newGUID() {
		return _guid++;
	}
	var elData = {};
	var elIdAttr = 'vdata' + new Date().getTime();
	function getData(el) {
		var id = el[elIdAttr];
		if (!id) {
			id = el[elIdAttr] = newGUID();
		}
		if (!elData[id]) {
			elData[id] = {};
		}
		return elData[id];
	}
	function hasData(el) {
		var id = el[elIdAttr];
		if (!id) {
			return false;
		}
		return !!Object.getOwnPropertyNames(elData[id]).length;
	}
	function removeData(el) {
		var id = el[elIdAttr];
		if (!id) {
			return;
		}
		delete elData[id];
		try {
			delete el[elIdAttr];
		} catch (e) {
			if (el.removeAttribute) {
				el.removeAttribute(elIdAttr);
			} else {
				el[elIdAttr] = null;
			}
		}
	}
	function _cleanUpEvents(elem, type) {
		var data = getData(elem);
		if (data.handlers[type].length === 0) {
			delete data.handlers[type];
			if (elem.removeEventListener) {
				elem.removeEventListener(type, data.dispatcher, false);
			} else if (elem.detachEvent) {
				elem.detachEvent('on' + type, data.dispatcher);
			}
		}
		if (Object.getOwnPropertyNames(data.handlers).length <= 0) {
			delete data.handlers;
			delete data.dispatcher;
			delete data.disabled;
		}
		if (Object.getOwnPropertyNames(data).length === 0) {
			removeData(elem);
		}
	}
	function _handleMultipleEvents(fn, elem, types, callback) {
		types.forEach(function (type) {
			fn(elem, type, callback);
		});
	}
	function fixEvent(event) {
		function returnTrue() {
			return true;
		}
		function returnFalse() {
			return false;
		}
		if (!event || !event.isPropagationStopped) {
			var old = event || window_1.event;
			event = {};
			for (var key in old) {
				if (key !== 'layerX' && key !== 'layerY' && key !== 'keyLocation' && key !== 'webkitMovementX' && key !== 'webkitMovementY') {
					if (!(key === 'returnValue' && old.preventDefault)) {
						event[key] = old[key];
					}
				}
			}
			if (!event.target) {
				event.target = event.srcElement || document_1;
			}
			if (!event.relatedTarget) {
				event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;
			}
			event.preventDefault = function () {
				if (old.preventDefault) {
					old.preventDefault();
				}
				event.returnValue = false;
				old.returnValue = false;
				event.defaultPrevented = true;
			};
			event.defaultPrevented = false;
			event.stopPropagation = function () {
				if (old.stopPropagation) {
					old.stopPropagation();
				}
				event.cancelBubble = true;
				old.cancelBubble = true;
				event.isPropagationStopped = returnTrue;
			};
			event.isPropagationStopped = returnFalse;
			event.stopImmediatePropagation = function () {
				if (old.stopImmediatePropagation) {
					old.stopImmediatePropagation();
				}
				event.isImmediatePropagationStopped = returnTrue;
				event.stopPropagation();
			};
			event.isImmediatePropagationStopped = returnFalse;
			if (event.clientX !== null && event.clientX !== undefined) {
				var doc = document_1.documentElement;
				var body = document_1.body;
				event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
				event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
			}
			event.which = event.charCode || event.keyCode;
			if (event.button !== null && event.button !== undefined) {
				event.button = event.button & 1 ? 0 : event.button & 4 ? 1 : event.button & 2 ? 2 : 0;
			}
		}
		return event;
	}
	var _supportsPassive = false;
	(function () {
		try {
			var opts = Object.defineProperty({}, 'passive', {
				get: function get() {
					_supportsPassive = true;
				}
			});
			window_1.addEventListener('test', null, opts);
			window_1.removeEventListener('test', null, opts);
		} catch (e) {
		}
	})();
	var passiveEvents = ['touchstart', 'touchmove'];
	function on(elem, type, fn) {
		if (Array.isArray(type)) {
			return _handleMultipleEvents(on, elem, type, fn);
		}
		var data = getData(elem);
		if (!data.handlers) {
			data.handlers = {};
		}
		if (!data.handlers[type]) {
			data.handlers[type] = [];
		}
		if (!fn.guid) {
			fn.guid = newGUID();
		}
		data.handlers[type].push(fn);
		if (!data.dispatcher) {
			data.disabled = false;
			data.dispatcher = function (event, hash) {
				if (data.disabled) {
					return;
				}
				event = fixEvent(event);
				var handlers = data.handlers[event.type];
				if (handlers) {
					var handlersCopy = handlers.slice(0);
					for (var m = 0, n = handlersCopy.length; m < n; m++) {
						if (event.isImmediatePropagationStopped()) {
							break;
						} else {
							try {
								handlersCopy[m].call(elem, event, hash);
							} catch (e) {
								log$1.error(e);
							}
						}
					}
				}
			};
		}
		if (data.handlers[type].length === 1) {
			if (elem.addEventListener) {
				var options = false;
				if (_supportsPassive && passiveEvents.indexOf(type) > -1) {
					options = { passive: true };
				}
				elem.addEventListener(type, data.dispatcher, options);
			} else if (elem.attachEvent) {
				elem.attachEvent('on' + type, data.dispatcher);
			}
		}
	}
	function off(elem, type, fn) {
		if (!hasData(elem)) {
			return;
		}
		var data = getData(elem);
		if (!data.handlers) {
			return;
		}
		if (Array.isArray(type)) {
			return _handleMultipleEvents(off, elem, type, fn);
		}
		var removeType = function removeType(el, t) {
			data.handlers[t] = [];
			_cleanUpEvents(el, t);
		};
		if (type === undefined) {
			for (var t in data.handlers) {
				if (Object.prototype.hasOwnProperty.call(data.handlers || {}, t)) {
					removeType(elem, t);
				}
			}
			return;
		}
		var handlers = data.handlers[type];
		if (!handlers) {
			return;
		}
		if (!fn) {
			removeType(elem, type);
			return;
		}
		if (fn.guid) {
			for (var n = 0; n < handlers.length; n++) {
				if (handlers[n].guid === fn.guid) {
					handlers.splice(n--, 1);
				}
			}
		}
		_cleanUpEvents(elem, type);
	}
	function trigger(elem, event, hash) {
		var elemData = hasData(elem) ? getData(elem) : {};
		var parent = elem.parentNode || elem.ownerDocument;
		if (typeof event === 'string') {
			event = { type: event, target: elem };
		} else if (!event.target) {
			event.target = elem;
		}
		event = fixEvent(event);
		if (elemData.dispatcher) {
			elemData.dispatcher.call(elem, event, hash);
		}
		if (parent && !event.isPropagationStopped() && event.bubbles === true) {
			trigger.call(null, parent, event, hash);
		} else if (!parent && !event.defaultPrevented) {
			var targetData = getData(event.target);
			if (event.target[event.type]) {
				targetData.disabled = true;
				if (typeof event.target[event.type] === 'function') {
					event.target[event.type]();
				}
				targetData.disabled = false;
			}
		}
		return !event.defaultPrevented;
	}
	function one(elem, type, fn) {
		if (Array.isArray(type)) {
			return _handleMultipleEvents(one, elem, type, fn);
		}
		var func = function func() {
			off(elem, type, func);
			fn.apply(this, arguments);
		};
		func.guid = fn.guid = fn.guid || newGUID();
		on(elem, type, func);
	}
	var Events = Object.freeze({
		fixEvent: fixEvent,
		on: on,
		off: off,
		trigger: trigger,
		one: one
	});
	var _windowLoaded = false;
	var videojs = void 0;
	var autoSetup = function autoSetup() {
		if (!isReal() || videojs.options.autoSetup === false) {
			return;
		}
		var vids = Array.prototype.slice.call(document_1.getElementsByTagName('video'));
		var audios = Array.prototype.slice.call(document_1.getElementsByTagName('audio'));
		var divs = Array.prototype.slice.call(document_1.getElementsByTagName('video-js'));
		var mediaEls = vids.concat(audios, divs);
		if (mediaEls && mediaEls.length > 0) {
			for (var i = 0, e = mediaEls.length; i < e; i++) {
				var mediaEl = mediaEls[i];
				if (mediaEl && mediaEl.getAttribute) {
					if (mediaEl.player === undefined) {
						var options = mediaEl.getAttribute('data-setup');
						if (options !== null) {
							videojs(mediaEl);
						}
					}
				} else {
					autoSetupTimeout(1);
					break;
				}
			}
		} else if (!_windowLoaded) {
			autoSetupTimeout(1);
		}
	};
	function autoSetupTimeout(wait, vjs) {
		if (vjs) {
			videojs = vjs;
		}
		window_1.setTimeout(autoSetup, wait);
	}
	if (isReal() && document_1.readyState === 'complete') {
		_windowLoaded = true;
	} else {
		one(window_1, 'load', function () {
			_windowLoaded = true;
		});
	}
	var createStyleElement = function createStyleElement(className) {
		var style = document_1.createElement('style');
		style.className = className;
		return style;
	};
	var setTextContent = function setTextContent(el, content) {
		if (el.styleSheet) {
			el.styleSheet.cssText = content;
		} else {
			el.textContent = content;
		}
	};
	var bind = function bind(context, fn, uid) {
		if (!fn.guid) {
			fn.guid = newGUID();
		}
		var bound = function bound() {
			return fn.apply(context, arguments);
		};
		bound.guid = uid ? uid + '_' + fn.guid : fn.guid;
		return bound;
	};
	var throttle = function throttle(fn, wait) {
		var last = Date.now();
		var throttled = function throttled() {
			var now = Date.now();
			if (now - last >= wait) {
				fn.apply(undefined, arguments);
				last = now;
			}
		};
		return throttled;
	};
	var debounce = function debounce(func, wait, immediate) {
		var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window_1;
		var timeout = void 0;
		var cancel = function cancel() {
			context.clearTimeout(timeout);
			timeout = null;
		};
		var debounced = function debounced() {
			var self = this;
			var args = arguments;
			var _later = function later() {
				timeout = null;
				_later = null;
				if (!immediate) {
					func.apply(self, args);
				}
			};
			if (!timeout && immediate) {
				func.apply(self, args);
			}
			context.clearTimeout(timeout);
			timeout = context.setTimeout(_later, wait);
		};
		debounced.cancel = cancel;
		return debounced;
	};
	var EventTarget = function EventTarget() { };
	EventTarget.prototype.allowedEvents_ = {};
	EventTarget.prototype.on = function (type, fn) {
		var ael = this.addEventListener;
		this.addEventListener = function () { };
		on(this, type, fn);
		this.addEventListener = ael;
	};
	EventTarget.prototype.addEventListener = EventTarget.prototype.on;
	EventTarget.prototype.off = function (type, fn) {
		off(this, type, fn);
	};
	EventTarget.prototype.removeEventListener = EventTarget.prototype.off;
	EventTarget.prototype.one = function (type, fn) {
		var ael = this.addEventListener;
		this.addEventListener = function () { };
		one(this, type, fn);
		this.addEventListener = ael;
	};
	EventTarget.prototype.trigger = function (event) {
		var type = event.type || event;
		if (typeof event === 'string') {
			event = { type: type };
		}
		event = fixEvent(event);
		if (this.allowedEvents_[type] && this['on' + type]) {
			this['on' + type](event);
		}
		trigger(this, event);
	};
	EventTarget.prototype.dispatchEvent = EventTarget.prototype.trigger;
	var EVENT_MAP = void 0;
	EventTarget.prototype.queueTrigger = function (event) {
		var _this = this;
		if (!EVENT_MAP) {
			EVENT_MAP = new Map();
		}
		var type = event.type || event;
		var map = EVENT_MAP.get(this);
		if (!map) {
			map = new Map();
			EVENT_MAP.set(this, map);
		}
		var oldTimeout = map.get(type);
		map.delete(type);
		window_1.clearTimeout(oldTimeout);
		var timeout = window_1.setTimeout(function () {
			if (map.size === 0) {
				map = null;
				EVENT_MAP.delete(_this);
			}
			_this.trigger(event);
		}, 0);
		map.set(type, timeout);
	};
	var isEvented = function isEvented(object) {
		return object instanceof EventTarget || !!object.eventBusEl_ && ['on', 'one', 'off', 'trigger'].every(function (k) {
			return typeof object[k] === 'function';
		});
	};
	var isValidEventType = function isValidEventType(type) {
		return (
			typeof type === 'string' && /\S/.test(type) || Array.isArray(type) && !!type.length
		);
	};
	var validateTarget = function validateTarget(target) {
		if (!target.nodeName && !isEvented(target)) {
			throw new Error('Invalid target; must be a DOM node or evented object.');
		}
	};
	var validateEventType = function validateEventType(type) {
		if (!isValidEventType(type)) {
			throw new Error('Invalid event type; must be a non-empty string or array.');
		}
	};
	var validateListener = function validateListener(listener) {
		if (typeof listener !== 'function') {
			throw new Error('Invalid listener; must be a function.');
		}
	};
	var normalizeListenArgs = function normalizeListenArgs(self, args) {
		var isTargetingSelf = args.length < 3 || args[0] === self || args[0] === self.eventBusEl_;
		var target = void 0;
		var type = void 0;
		var listener = void 0;
		if (isTargetingSelf) {
			target = self.eventBusEl_;
			if (args.length >= 3) {
				args.shift();
			}
			type = args[0];
			listener = args[1];
		} else {
			target = args[0];
			type = args[1];
			listener = args[2];
		}
		validateTarget(target);
		validateEventType(type);
		validateListener(listener);
		listener = bind(self, listener);
		return { isTargetingSelf: isTargetingSelf, target: target, type: type, listener: listener };
	};
	var listen = function listen(target, method, type, listener) {
		validateTarget(target);
		if (target.nodeName) {
			Events[method](target, type, listener);
		} else {
			target[method](type, listener);
		}
	};
	var EventedMixin = {
		on: function on$$1() {
			var _this = this;
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
			var _normalizeListenArgs = normalizeListenArgs(this, args),
				isTargetingSelf = _normalizeListenArgs.isTargetingSelf,
				target = _normalizeListenArgs.target,
				type = _normalizeListenArgs.type,
				listener = _normalizeListenArgs.listener;
			listen(target, 'on', type, listener);
			if (!isTargetingSelf) {
				var removeListenerOnDispose = function removeListenerOnDispose() {
					return _this.off(target, type, listener);
				};
				removeListenerOnDispose.guid = listener.guid;
				var removeRemoverOnTargetDispose = function removeRemoverOnTargetDispose() {
					return _this.off('dispose', removeListenerOnDispose);
				};
				removeRemoverOnTargetDispose.guid = listener.guid;
				listen(this, 'on', 'dispose', removeListenerOnDispose);
				listen(target, 'on', 'dispose', removeRemoverOnTargetDispose);
			}
		},
		one: function one$$1() {
			var _this2 = this;
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}
			var _normalizeListenArgs2 = normalizeListenArgs(this, args),
				isTargetingSelf = _normalizeListenArgs2.isTargetingSelf,
				target = _normalizeListenArgs2.target,
				type = _normalizeListenArgs2.type,
				listener = _normalizeListenArgs2.listener;
			if (isTargetingSelf) {
				listen(target, 'one', type, listener);
			} else {
				var wrapper = function wrapper() {
					for (var _len3 = arguments.length, largs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
						largs[_key3] = arguments[_key3];
					}
					_this2.off(target, type, wrapper);
					listener.apply(null, largs);
				};
				wrapper.guid = listener.guid;
				listen(target, 'one', type, wrapper);
			}
		},
		off: function off$$1(targetOrType, typeOrListener, listener) {
			if (!targetOrType || isValidEventType(targetOrType)) {
				off(this.eventBusEl_, targetOrType, typeOrListener);
			} else {
				var target = targetOrType;
				var type = typeOrListener;
				validateTarget(target);
				validateEventType(type);
				validateListener(listener);
				listener = bind(this, listener);
				this.off('dispose', listener);
				if (target.nodeName) {
					off(target, type, listener);
					off(target, 'dispose', listener);
				} else if (isEvented(target)) {
					target.off(type, listener);
					target.off('dispose', listener);
				}
			}
		},
		trigger: function trigger$$1(event, hash) {
			return trigger(this.eventBusEl_, event, hash);
		}
	};
	function evented(target) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var eventBusKey = options.eventBusKey;
		if (eventBusKey) {
			if (!target[eventBusKey].nodeName) {
				throw new Error('The eventBusKey "' + eventBusKey + '" does not refer to an element.');
			}
			target.eventBusEl_ = target[eventBusKey];
		} else {
			target.eventBusEl_ = createEl('span', { className: 'vjs-event-bus' });
		}
		assign(target, EventedMixin);
		target.on('dispose', function () {
			target.off();
			window_1.setTimeout(function () {
				target.eventBusEl_ = null;
			}, 0);
		});
		return target;
	}
	var StatefulMixin = {
		state: {},
		setState: function setState(stateUpdates) {
			var _this = this;
			if (typeof stateUpdates === 'function') {
				stateUpdates = stateUpdates();
			}
			var changes = void 0;
			each(stateUpdates, function (value, key) {
				if (_this.state[key] !== value) {
					changes = changes || {};
					changes[key] = {
						from: _this.state[key],
						to: value
					};
				}
				_this.state[key] = value;
			});
			if (changes && isEvented(this)) {
				this.trigger({
					changes: changes,
					type: 'statechanged'
				});
			}
			return changes;
		}
	};
	function stateful(target, defaultState) {
		assign(target, StatefulMixin);
		target.state = assign({}, target.state, defaultState);
		if (typeof target.handleStateChanged === 'function' && isEvented(target)) {
			target.on('statechanged', target.handleStateChanged);
		}
		return target;
	}
	function toTitleCase(string) {
		if (typeof string !== 'string') {
			return string;
		}
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	function titleCaseEquals(str1, str2) {
		return toTitleCase(str1) === toTitleCase(str2);
	}
	function mergeOptions() {
		var result = {};
		for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
			sources[_key] = arguments[_key];
		}
		sources.forEach(function (source) {
			if (!source) {
				return;
			}
			each(source, function (value, key) {
				if (!isPlain(value)) {
					result[key] = value;
					return;
				}
				if (!isPlain(result[key])) {
					result[key] = {};
				}
				result[key] = mergeOptions(result[key], value);
			});
		});
		return result;
	}
	var Component = function () {
		function Component(player, options, ready) {
			classCallCheck(this, Component);
			if (!player && this.play) {
				this.player_ = player = this;
			} else {
				this.player_ = player;
			}
			this.options_ = mergeOptions({}, this.options_);
			options = this.options_ = mergeOptions(this.options_, options);
			this.id_ = options.id || options.el && options.el.id;
			if (!this.id_) {
				var id = player && player.id && player.id() || 'no_player';
				this.id_ = id + '_component_' + newGUID();
			}
			this.name_ = options.name || null;
			if (options.el) {
				this.el_ = options.el;
			} else if (options.createEl !== false) {
				this.el_ = this.createEl();
			}
			if (options.evented !== false) {
				evented(this, { eventBusKey: this.el_ ? 'el_' : null });
			}
			stateful(this, this.constructor.defaultState);
			this.children_ = [];
			this.childIndex_ = {};
			this.childNameIndex_ = {};
			if (options.initChildren !== false) {
				this.initChildren();
			}
			this.ready(ready);
			if (options.reportTouchActivity !== false) {
				this.enableTouchActivity();
			}
		}
		Component.prototype.dispose = function dispose() {
			this.trigger({ type: 'dispose', bubbles: false });
			if (this.children_) {
				for (var i = this.children_.length - 1; i >= 0; i--) {
					if (this.children_[i].dispose) {
						this.children_[i].dispose();
					}
				}
			}
			this.children_ = null;
			this.childIndex_ = null;
			this.childNameIndex_ = null;
			if (this.el_) {
				if (this.el_.parentNode) {
					this.el_.parentNode.removeChild(this.el_);
				}
				removeData(this.el_);
				this.el_ = null;
			}
			this.player_ = null;
		};
		Component.prototype.player = function player() {
			return this.player_;
		};
		Component.prototype.options = function options(obj) {
			log$1.warn('this.options() has been deprecated and will be moved to the constructor in 6.0');
			if (!obj) {
				return this.options_;
			}
			this.options_ = mergeOptions(this.options_, obj);
			return this.options_;
		};
		Component.prototype.el = function el() {
			return this.el_;
		};
		Component.prototype.createEl = function createEl$$1(tagName, properties, attributes) {
			return createEl(tagName, properties, attributes);
		};
		Component.prototype.localize = function localize(string, tokens) {
			var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : string;
			var code = this.player_.language && this.player_.language();
			var languages = this.player_.languages && this.player_.languages();
			var language = languages && languages[code];
			var primaryCode = code && code.split('-')[0];
			var primaryLang = languages && languages[primaryCode];
			var localizedString = defaultValue;
			if (language && language[string]) {
				localizedString = language[string];
			} else if (primaryLang && primaryLang[string]) {
				localizedString = primaryLang[string];
			}
			if (tokens) {
				localizedString = localizedString.replace(/\{(\d+)\}/g, function (match, index) {
					var value = tokens[index - 1];
					var ret = value;
					if (typeof value === 'undefined') {
						ret = match;
					}
					return ret;
				});
			}
			return localizedString;
		};
		Component.prototype.contentEl = function contentEl() {
			return this.contentEl_ || this.el_;
		};
		Component.prototype.id = function id() {
			return this.id_;
		};
		Component.prototype.name = function name() {
			return this.name_;
		};
		Component.prototype.children = function children() {
			return this.children_;
		};
		Component.prototype.getChildById = function getChildById(id) {
			return this.childIndex_[id];
		};
		Component.prototype.getChild = function getChild(name) {
			if (!name) {
				return;
			}
			name = toTitleCase(name);
			return this.childNameIndex_[name];
		};
		Component.prototype.addChild = function addChild(child) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.children_.length;
			var component = void 0;
			var componentName = void 0;
			if (typeof child === 'string') {
				componentName = toTitleCase(child);
				var componentClassName = options.componentClass || componentName;
				options.name = componentName;
				var ComponentClass = Component.getComponent(componentClassName);
				if (!ComponentClass) {
					throw new Error('Component ' + componentClassName + ' does not exist');
				}
				if (typeof ComponentClass !== 'function') {
					return null;
				}
				component = new ComponentClass(this.player_ || this, options);
			} else {
				component = child;
			}
			this.children_.splice(index, 0, component);
			if (typeof component.id === 'function') {
				this.childIndex_[component.id()] = component;
			}
			componentName = componentName || component.name && toTitleCase(component.name());
			if (componentName) {
				this.childNameIndex_[componentName] = component;
			}
			if (typeof component.el === 'function' && component.el()) {
				var childNodes = this.contentEl().children;
				var refNode = childNodes[index] || null;
				this.contentEl().insertBefore(component.el(), refNode);
			}
			return component;
		};
		Component.prototype.removeChild = function removeChild(component) {
			if (typeof component === 'string') {
				component = this.getChild(component);
			}
			if (!component || !this.children_) {
				return;
			}
			var childFound = false;
			for (var i = this.children_.length - 1; i >= 0; i--) {
				if (this.children_[i] === component) {
					childFound = true;
					this.children_.splice(i, 1);
					break;
				}
			}
			if (!childFound) {
				return;
			}
			this.childIndex_[component.id()] = null;
			this.childNameIndex_[component.name()] = null;
			var compEl = component.el();
			if (compEl && compEl.parentNode === this.contentEl()) {
				this.contentEl().removeChild(component.el());
			}
		};
		Component.prototype.initChildren = function initChildren() {
			var _this = this;
			var children = this.options_.children;
			if (children) {
				var parentOptions = this.options_;
				var handleAdd = function handleAdd(child) {
					var name = child.name;
					var opts = child.opts;
					if (parentOptions[name] !== undefined) {
						opts = parentOptions[name];
					}
					if (opts === false) {
						return;
					}
					if (opts === true) {
						opts = {};
					}
					opts.playerOptions = _this.options_.playerOptions;
					var newChild = _this.addChild(name, opts);
					if (newChild) {
						_this[name] = newChild;
					}
				};
				var workingChildren = void 0;
				var Tech = Component.getComponent('Tech');
				if (Array.isArray(children)) {
					workingChildren = children;
				} else {
					workingChildren = Object.keys(children);
				}
				workingChildren
					.concat(Object.keys(this.options_).filter(function (child) {
						return !workingChildren.some(function (wchild) {
							if (typeof wchild === 'string') {
								return child === wchild;
							}
							return child === wchild.name;
						});
					})).map(function (child) {
						var name = void 0;
						var opts = void 0;
						if (typeof child === 'string') {
							name = child;
							opts = children[name] || _this.options_[name] || {};
						} else {
							name = child.name;
							opts = child;
						}
						return { name: name, opts: opts };
					}).filter(function (child) {
						var c = Component.getComponent(child.opts.componentClass || toTitleCase(child.name));
						return c && !Tech.isTech(c);
					}).forEach(handleAdd);
			}
		};
		Component.prototype.buildCSSClass = function buildCSSClass() {
			return '';
		};
		Component.prototype.ready = function ready(fn) {
			var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			if (!fn) {
				return;
			}
			if (!this.isReady_) {
				this.readyQueue_ = this.readyQueue_ || [];
				this.readyQueue_.push(fn);
				return;
			}
			if (sync) {
				fn.call(this);
			} else {
				this.setTimeout(fn, 1);
			}
		};
		Component.prototype.triggerReady = function triggerReady() {
			this.isReady_ = true;
			this.setTimeout(function () {
				var readyQueue = this.readyQueue_;
				this.readyQueue_ = [];
				if (readyQueue && readyQueue.length > 0) {
					readyQueue.forEach(function (fn) {
						fn.call(this);
					}, this);
				}
				this.trigger('ready');
			}, 1);
		};
		Component.prototype.$ = function $$$1(selector, context) {
			return $(selector, context || this.contentEl());
		};
		Component.prototype.$$ = function $$$$1(selector, context) {
			return $$(selector, context || this.contentEl());
		};
		Component.prototype.hasClass = function hasClass$$1(classToCheck) {
			return hasClass(this.el_, classToCheck);
		};
		Component.prototype.addClass = function addClass$$1(classToAdd) {
			addClass(this.el_, classToAdd);
		};
		Component.prototype.removeClass = function removeClass$$1(classToRemove) {
			removeClass(this.el_, classToRemove);
		};
		Component.prototype.toggleClass = function toggleClass$$1(classToToggle, predicate) {
			toggleClass(this.el_, classToToggle, predicate);
		};
		Component.prototype.show = function show() {
			this.removeClass('vjs-hidden');
		};
		Component.prototype.hide = function hide() {
			this.addClass('vjs-hidden');
		};
		Component.prototype.lockShowing = function lockShowing() {
			this.addClass('vjs-lock-showing');
		};
		Component.prototype.unlockShowing = function unlockShowing() {
			this.removeClass('vjs-lock-showing');
		};
		Component.prototype.getAttribute = function getAttribute$$1(attribute) {
			return getAttribute(this.el_, attribute);
		};
		Component.prototype.setAttribute = function setAttribute$$1(attribute, value) {
			setAttribute(this.el_, attribute, value);
		};
		Component.prototype.removeAttribute = function removeAttribute$$1(attribute) {
			removeAttribute(this.el_, attribute);
		};
		Component.prototype.width = function width(num, skipListeners) {
			return this.dimension('width', num, skipListeners);
		};
		Component.prototype.height = function height(num, skipListeners) {
			return this.dimension('height', num, skipListeners);
		};
		Component.prototype.dimensions = function dimensions(width, height) {
			this.width(width, true);
			this.height(height);
		};
		Component.prototype.dimension = function dimension(widthOrHeight, num, skipListeners) {
			if (num !== undefined) {
				if (num === null || num !== num) {
					num = 0;
				}
				if (('' + num).indexOf('%') !== -1 || ('' + num).indexOf('px') !== -1) {
					this.el_.style[widthOrHeight] = num;
				} else if (num === 'auto') {
					this.el_.style[widthOrHeight] = '';
				} else {
					this.el_.style[widthOrHeight] = num + 'px';
				}
				if (!skipListeners) {
					this.trigger('componentresize');
				}
				return;
			}
			if (!this.el_) {
				return 0;
			}
			var val = this.el_.style[widthOrHeight];
			var pxIndex = val.indexOf('px');
			if (pxIndex !== -1) {
				return parseInt(val.slice(0, pxIndex), 10);
			}
			return parseInt(this.el_['offset' + toTitleCase(widthOrHeight)], 10);
		};
		Component.prototype.currentDimension = function currentDimension(widthOrHeight) {
			var computedWidthOrHeight = 0;
			if (widthOrHeight !== 'width' && widthOrHeight !== 'height') {
				throw new Error('currentDimension only accepts width or height value');
			}
			if (typeof window_1.getComputedStyle === 'function') {
				var computedStyle = window_1.getComputedStyle(this.el_);
				computedWidthOrHeight = computedStyle.getPropertyValue(widthOrHeight) || computedStyle[widthOrHeight];
			}
			computedWidthOrHeight = parseFloat(computedWidthOrHeight);
			if (computedWidthOrHeight === 0) {
				var rule = 'offset' + toTitleCase(widthOrHeight);
				computedWidthOrHeight = this.el_[rule];
			}
			return computedWidthOrHeight;
		};
		Component.prototype.currentDimensions = function currentDimensions() {
			return {
				width: this.currentDimension('width'),
				height: this.currentDimension('height')
			};
		};
		Component.prototype.currentWidth = function currentWidth() {
			return this.currentDimension('width');
		};
		Component.prototype.currentHeight = function currentHeight() {
			return this.currentDimension('height');
		};
		Component.prototype.focus = function focus() {
			this.el_.focus();
		};
		Component.prototype.blur = function blur() {
			this.el_.blur();
		};
		Component.prototype.emitTapEvents = function emitTapEvents() {
			var touchStart = 0;
			var firstTouch = null;
			var tapMovementThreshold = 10;
			var touchTimeThreshold = 200;
			var couldBeTap = void 0;
			this.on('touchstart', function (event) {
				if (event.touches.length === 1) {
					firstTouch = {
						pageX: event.touches[0].pageX,
						pageY: event.touches[0].pageY
					};
					touchStart = new Date().getTime();
					couldBeTap = true;
				}
			});
			this.on('touchmove', function (event) {
				if (event.touches.length > 1) {
					couldBeTap = false;
				} else if (firstTouch) {
					var xdiff = event.touches[0].pageX - firstTouch.pageX;
					var ydiff = event.touches[0].pageY - firstTouch.pageY;
					var touchDistance = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
					if (touchDistance > tapMovementThreshold) {
						couldBeTap = false;
					}
				}
			});
			var noTap = function noTap() {
				couldBeTap = false;
			};
			this.on('touchleave', noTap);
			this.on('touchcancel', noTap);
			this.on('touchend', function (event) {
				firstTouch = null;
				if (couldBeTap === true) {
					var touchTime = new Date().getTime() - touchStart;
					if (touchTime < touchTimeThreshold) {
						event.preventDefault();
						this.trigger('tap');
					}
				}
			});
		};
		Component.prototype.enableTouchActivity = function enableTouchActivity() {
			if (!this.player() || !this.player().reportUserActivity) {
				return;
			}
			var report = bind(this.player(), this.player().reportUserActivity);
			var touchHolding = void 0;
			this.on('touchstart', function () {
				report();
				this.clearInterval(touchHolding);
				touchHolding = this.setInterval(report, 250);
			});
			var touchEnd = function touchEnd(event) {
				report();
				this.clearInterval(touchHolding);
			};
			this.on('touchmove', report);
			this.on('touchend', touchEnd);
			this.on('touchcancel', touchEnd);
		};
		Component.prototype.setTimeout = function setTimeout(fn, timeout) {
			var _this2 = this;
			var timeoutId, disposeFn;
			fn = bind(this, fn);
			timeoutId = window_1.setTimeout(function () {
				_this2.off('dispose', disposeFn);
				fn();
			}, timeout);
			disposeFn = function disposeFn() {
				return _this2.clearTimeout(timeoutId);
			};
			disposeFn.guid = 'vjs-timeout-' + timeoutId;
			this.on('dispose', disposeFn);
			return timeoutId;
		};
		Component.prototype.clearTimeout = function clearTimeout(timeoutId) {
			window_1.clearTimeout(timeoutId);
			var disposeFn = function disposeFn() { };
			disposeFn.guid = 'vjs-timeout-' + timeoutId;
			this.off('dispose', disposeFn);
			return timeoutId;
		};
		Component.prototype.setInterval = function setInterval(fn, interval) {
			var _this3 = this;
			fn = bind(this, fn);
			var intervalId = window_1.setInterval(fn, interval);
			var disposeFn = function disposeFn() {
				return _this3.clearInterval(intervalId);
			};
			disposeFn.guid = 'vjs-interval-' + intervalId;
			this.on('dispose', disposeFn);
			return intervalId;
		};
		Component.prototype.clearInterval = function clearInterval(intervalId) {
			window_1.clearInterval(intervalId);
			var disposeFn = function disposeFn() { };
			disposeFn.guid = 'vjs-interval-' + intervalId;
			this.off('dispose', disposeFn);
			return intervalId;
		};
		Component.prototype.requestAnimationFrame = function requestAnimationFrame(fn) {
			var _this4 = this;
			var id, disposeFn;
			if (this.supportsRaf_) {
				fn = bind(this, fn);
				id = window_1.requestAnimationFrame(function () {
					_this4.off('dispose', disposeFn);
					fn();
				});
				disposeFn = function disposeFn() {
					return _this4.cancelAnimationFrame(id);
				};
				disposeFn.guid = 'vjs-raf-' + id;
				this.on('dispose', disposeFn);
				return id;
			}
			return this.setTimeout(fn, 1000 / 60);
		};
		Component.prototype.cancelAnimationFrame = function cancelAnimationFrame(id) {
			if (this.supportsRaf_) {
				window_1.cancelAnimationFrame(id);
				var disposeFn = function disposeFn() { };
				disposeFn.guid = 'vjs-raf-' + id;
				this.off('dispose', disposeFn);
				return id;
			}
			return this.clearTimeout(id);
		};
		Component.registerComponent = function registerComponent(name, ComponentToRegister) {
			if (typeof name !== 'string' || !name) {
				throw new Error('Illegal component name, "' + name + '"; must be a non-empty string.');
			}
			var Tech = Component.getComponent('Tech');
			var isTech = Tech && Tech.isTech(ComponentToRegister);
			var isComp = Component === ComponentToRegister || Component.prototype.isPrototypeOf(ComponentToRegister.prototype);
			if (isTech || !isComp) {
				var reason = void 0;
				if (isTech) {
					reason = 'techs must be registered using Tech.registerTech()';
				} else {
					reason = 'must be a Component subclass';
				}
				throw new Error('Illegal component, "' + name + '"; ' + reason + '.');
			}
			name = toTitleCase(name);
			if (!Component.components_) {
				Component.components_ = {};
			}
			var Player = Component.getComponent('Player');
			if (name === 'Player' && Player && Player.players) {
				var players = Player.players;
				var playerNames = Object.keys(players);
				if (players && playerNames.length > 0 && playerNames.map(function (pname) {
					return players[pname];
				}).every(Boolean)) {
					throw new Error('Can not register Player component after player has been created.');
				}
			}
			Component.components_[name] = ComponentToRegister;
			return ComponentToRegister;
		};
		Component.getComponent = function getComponent(name) {
			if (!name) {
				return;
			}
			name = toTitleCase(name);
			if (Component.components_ && Component.components_[name]) {
				return Component.components_[name];
			}
		};
		return Component;
	}();
	Component.prototype.supportsRaf_ = typeof window_1.requestAnimationFrame === 'function' && typeof window_1.cancelAnimationFrame === 'function';
	Component.registerComponent('Component', Component);
	var USER_AGENT = window_1.navigator && window_1.navigator.userAgent || '';
	var webkitVersionMap = /AppleWebKit\/([\d.]+)/i.exec(USER_AGENT);
	var appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;
	var IS_IPAD = /iPad/i.test(USER_AGENT);
	var IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
	var IS_IPOD = /iPod/i.test(USER_AGENT);
	var IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;
	var IOS_VERSION = function () {
		var match = USER_AGENT.match(/OS (\d+)_/i);
		if (match && match[1]) {
			return match[1];
		}
		return null;
	}();
	var IS_ANDROID = /Android/i.test(USER_AGENT);
	var ANDROID_VERSION = function () {
		var match = USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
		if (!match) {
			return null;
		}
		var major = match[1] && parseFloat(match[1]);
		var minor = match[2] && parseFloat(match[2]);
		if (major && minor) {
			return parseFloat(match[1] + '.' + match[2]);
		} else if (major) {
			return major;
		}
		return null;
	}();
	var IS_NATIVE_ANDROID = IS_ANDROID && ANDROID_VERSION < 5 && appleWebkitVersion < 537;
	var IS_FIREFOX = /Firefox/i.test(USER_AGENT);
	var IS_EDGE = /Edge/i.test(USER_AGENT);
	var IS_CHROME = !IS_EDGE && (/Chrome/i.test(USER_AGENT) || /CriOS/i.test(USER_AGENT));
	var CHROME_VERSION = function () {
		var match = USER_AGENT.match(/(Chrome|CriOS)\/(\d+)/);
		if (match && match[2]) {
			return parseFloat(match[2]);
		}
		return null;
	}();
	var IE_VERSION = function () {
		var result = /MSIE\s(\d+)\.\d/.exec(USER_AGENT);
		var version = result && parseFloat(result[1]);
		if (!version && /Trident\/7.0/i.test(USER_AGENT) && /rv:11.0/.test(USER_AGENT)) {
			version = 11.0;
		}
		return version;
	}();
	var IS_SAFARI = /Safari/i.test(USER_AGENT) && !IS_CHROME && !IS_ANDROID && !IS_EDGE;
	var IS_ANY_SAFARI = (IS_SAFARI || IS_IOS) && !IS_CHROME;
	var TOUCH_ENABLED = isReal() && ('ontouchstart' in window_1 || window_1.navigator.maxTouchPoints || window_1.DocumentTouch && window_1.document instanceof window_1.DocumentTouch);
	var browser = Object.freeze({
		IS_IPAD: IS_IPAD,
		IS_IPHONE: IS_IPHONE,
		IS_IPOD: IS_IPOD,
		IS_IOS: IS_IOS,
		IOS_VERSION: IOS_VERSION,
		IS_ANDROID: IS_ANDROID,
		ANDROID_VERSION: ANDROID_VERSION,
		IS_NATIVE_ANDROID: IS_NATIVE_ANDROID,
		IS_FIREFOX: IS_FIREFOX,
		IS_EDGE: IS_EDGE,
		IS_CHROME: IS_CHROME,
		CHROME_VERSION: CHROME_VERSION,
		IE_VERSION: IE_VERSION,
		IS_SAFARI: IS_SAFARI,
		IS_ANY_SAFARI: IS_ANY_SAFARI,
		TOUCH_ENABLED: TOUCH_ENABLED
	});
	function rangeCheck(fnName, index, maxIndex) {
		if (typeof index !== 'number' || index < 0 || index > maxIndex) {
			throw new Error('Failed to execute \'' + fnName + '\' on \'TimeRanges\': The index provided (' + index + ') is non-numeric or out of bounds (0-' + maxIndex + ').');
		}
	}
	function getRange(fnName, valueIndex, ranges, rangeIndex) {
		rangeCheck(fnName, rangeIndex, ranges.length - 1);
		return ranges[rangeIndex][valueIndex];
	}
	function createTimeRangesObj(ranges) {
		if (ranges === undefined || ranges.length === 0) {
			return {
				length: 0,
				start: function start() {
					throw new Error('This TimeRanges object is empty');
				},
				end: function end() {
					throw new Error('This TimeRanges object is empty');
				}
			};
		}
		return {
			length: ranges.length,
			start: getRange.bind(null, 'start', 0, ranges),
			end: getRange.bind(null, 'end', 1, ranges)
		};
	}
	function createTimeRanges(start, end) {
		if (Array.isArray(start)) {
			return createTimeRangesObj(start);
		} else if (start === undefined || end === undefined) {
			return createTimeRangesObj();
		}
		return createTimeRangesObj([[start, end]]);
	}
	function bufferedPercent(buffered, duration) {
		var bufferedDuration = 0;
		var start = void 0;
		var end = void 0;
		if (!duration) {
			return 0;
		}
		if (!buffered || !buffered.length) {
			buffered = createTimeRanges(0, 0);
		}
		for (var i = 0; i < buffered.length; i++) {
			start = buffered.start(i);
			end = buffered.end(i);
			if (end > duration) {
				end = duration;
			}
			bufferedDuration += end - start;
		}
		return bufferedDuration / duration;
	}
	var FullscreenApi = {};
	var apiMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'],
	['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'],
	['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'],
	['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'],
	['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
	var specApi = apiMap[0];
	var browserApi = void 0;
	for (var i = 0; i < apiMap.length; i++) {
		if (apiMap[i][1] in document_1) {
			browserApi = apiMap[i];
			break;
		}
	}
	if (browserApi) {
		for (var _i = 0; _i < browserApi.length; _i++) {
			FullscreenApi[specApi[_i]] = browserApi[_i];
		}
	}
	function MediaError(value) {
		if (value instanceof MediaError) {
			return value;
		}
		if (typeof value === 'number') {
			this.code = value;
		} else if (typeof value === 'string') {
			this.message = value;
		} else if (isObject(value)) {
			if (typeof value.code === 'number') {
				this.code = value.code;
			}
			assign(this, value);
		}
		if (!this.message) {
			this.message = MediaError.defaultMessages[this.code] || '';
		}
	}
	MediaError.prototype.code = 0;
	MediaError.prototype.message = '';
	MediaError.prototype.status = null;
	MediaError.errorTypes = ['MEDIA_ERR_CUSTOM', 'MEDIA_ERR_ABORTED', 'MEDIA_ERR_NETWORK', 'MEDIA_ERR_DECODE', 'MEDIA_ERR_SRC_NOT_SUPPORTED', 'MEDIA_ERR_ENCRYPTED'];
	MediaError.defaultMessages = {
		1: 'You aborted the media playback',
		2: 'A network error caused the media download to fail part-way.',
		3: 'The media playback was aborted due to a corruption problem or because the media used features your browser did not support.',
		4: 'The media could not be loaded, either because the server or network failed or because the format is not supported.',
		5: 'The media is encrypted and we do not have the keys to decrypt it.'
	};
	for (var errNum = 0; errNum < MediaError.errorTypes.length; errNum++) {
		MediaError[MediaError.errorTypes[errNum]] = errNum;
		MediaError.prototype[MediaError.errorTypes[errNum]] = errNum;
	}
	var tuple = SafeParseTuple;
	function SafeParseTuple(obj, reviver) {
		var json;
		var error = null;
		try {
			json = JSON.parse(obj, reviver);
		} catch (err) {
			error = err;
		}
		return [error, json];
	}
	function isPromise(value) {
		return value !== undefined && value !== null && typeof value.then === 'function';
	}
	function silencePromise(value) {
		if (isPromise(value)) {
			value.then(null, function (e) { });
		}
	}
	var trackToJson_ = function trackToJson_(track) {
		var ret = ['kind', 'label', 'language', 'id', 'inBandMetadataTrackDispatchType', 'mode', 'src'].reduce(function (acc, prop, i) {
			if (track[prop]) {
				acc[prop] = track[prop];
			}
			return acc;
		}, {
			cues: track.cues && Array.prototype.map.call(track.cues, function (cue) {
				return {
					startTime: cue.startTime,
					endTime: cue.endTime,
					text: cue.text,
					id: cue.id
				};
			})
		});
		return ret;
	};
	var textTracksToJson = function textTracksToJson(tech) {
		var trackEls = tech.$$('track');
		var trackObjs = Array.prototype.map.call(trackEls, function (t) {
			return t.track;
		});
		var tracks = Array.prototype.map.call(trackEls, function (trackEl) {
			var json = trackToJson_(trackEl.track);
			if (trackEl.src) {
				json.src = trackEl.src;
			}
			return json;
		});
		return tracks.concat(Array.prototype.filter.call(tech.textTracks(), function (track) {
			return trackObjs.indexOf(track) === -1;
		}).map(trackToJson_));
	};
	var jsonToTextTracks = function jsonToTextTracks(json, tech) {
		json.forEach(function (track) {
			var addedTrack = tech.addRemoteTextTrack(track).track;
			if (!track.src && track.cues) {
				track.cues.forEach(function (cue) {
					return addedTrack.addCue(cue);
				});
			}
		});
		return tech.textTracks();
	};
	var textTrackConverter = { textTracksToJson: textTracksToJson, jsonToTextTracks: jsonToTextTracks, trackToJson_: trackToJson_ };
	var MODAL_CLASS_NAME = 'vjs-modal-dialog';
	var ESC = 27;
	var ModalDialog = function (_Component) {
		inherits(ModalDialog, _Component);
		function ModalDialog(player, options) {
			classCallCheck(this, ModalDialog);
			var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
			_this.opened_ = _this.hasBeenOpened_ = _this.hasBeenFilled_ = false;
			_this.closeable(!_this.options_.uncloseable);
			_this.content(_this.options_.content);
			_this.contentEl_ = createEl('div', {
				className: MODAL_CLASS_NAME + '-content'
			}, {
				role: 'document'
			});
			_this.descEl_ = createEl('p', {
				className: MODAL_CLASS_NAME + '-description vjs-control-text',
				id: _this.el().getAttribute('aria-describedby')
			});
			textContent(_this.descEl_, _this.description());
			_this.el_.appendChild(_this.descEl_);
			_this.el_.appendChild(_this.contentEl_);
			return _this;
		}
		ModalDialog.prototype.createEl = function createEl$$1() {
			return _Component.prototype.createEl.call(this, 'div', {
				className: this.buildCSSClass(),
				tabIndex: -1
			}, {
				'aria-describedby': this.id() + '_description',
				'aria-hidden': 'true',
				'aria-label': this.label(),
				'role': 'dialog'
			});
		};
		ModalDialog.prototype.dispose = function dispose() {
			this.contentEl_ = null;
			this.descEl_ = null;
			this.previouslyActiveEl_ = null;
			_Component.prototype.dispose.call(this);
		};
		ModalDialog.prototype.buildCSSClass = function buildCSSClass() {
			return MODAL_CLASS_NAME + ' vjs-hidden ' + _Component.prototype.buildCSSClass.call(this);
		};
		ModalDialog.prototype.handleKeyPress = function handleKeyPress(e) {
			if (e.which === ESC && this.closeable()) {
				this.close();
			}
		};
		ModalDialog.prototype.label = function label() {
			return this.localize(this.options_.label || 'Modal Window');
		};
		ModalDialog.prototype.description = function description() {
			var desc = this.options_.description || this.localize('This is a modal window.');
			if (this.closeable()) {
				desc += ' ' + this.localize('This modal can be closed by pressing the Escape key or activating the close button.');
			}
			return desc;
		};
		ModalDialog.prototype.open = function open() {
			if (!this.opened_) {
				var player = this.player();
				this.trigger('beforemodalopen');
				this.opened_ = true;
				if (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) {
					this.fill();
				}
				this.wasPlaying_ = !player.paused();
				if (this.options_.pauseOnOpen && this.wasPlaying_) {
					player.pause();
				}
				if (this.closeable()) {
					this.on(this.el_.ownerDocument, 'keydown', bind(this, this.handleKeyPress));
				}
				this.hadControls_ = player.controls();
				player.controls(false);
				this.show();
				this.conditionalFocus_();
				this.el().setAttribute('aria-hidden', 'false');
				this.trigger('modalopen');
				this.hasBeenOpened_ = true;
			}
		};
		ModalDialog.prototype.opened = function opened(value) {
			if (typeof value === 'boolean') {
				this[value ? 'open' : 'close']();
			}
			return this.opened_;
		};
		ModalDialog.prototype.close = function close() {
			if (!this.opened_) {
				return;
			}
			var player = this.player();
			this.trigger('beforemodalclose');
			this.opened_ = false;
			if (this.wasPlaying_ && this.options_.pauseOnOpen) {
				player.play();
			}
			if (this.closeable()) {
				this.off(this.el_.ownerDocument, 'keydown', bind(this, this.handleKeyPress));
			}
			if (this.hadControls_) {
				player.controls(true);
			}
			this.hide();
			this.el().setAttribute('aria-hidden', 'true');
			this.trigger('modalclose');
			this.conditionalBlur_();
			if (this.options_.temporary) {
				this.dispose();
			}
		};
		ModalDialog.prototype.closeable = function closeable(value) {
			if (typeof value === 'boolean') {
				var closeable = this.closeable_ = !!value;
				var close = this.getChild('closeButton');
				if (closeable && !close) {
					var temp = this.contentEl_;
					this.contentEl_ = this.el_;
					close = this.addChild('closeButton', { controlText: 'Close Modal Dialog' });
					this.contentEl_ = temp;
					this.on(close, 'close', this.close);
				}
				if (!closeable && close) {
					this.off(close, 'close', this.close);
					this.removeChild(close);
					close.dispose();
				}
			}
			return this.closeable_;
		};
		ModalDialog.prototype.fill = function fill() {
			this.fillWith(this.content());
		};
		ModalDialog.prototype.fillWith = function fillWith(content) {
			var contentEl = this.contentEl();
			var parentEl = contentEl.parentNode;
			var nextSiblingEl = contentEl.nextSibling;
			this.trigger('beforemodalfill');
			this.hasBeenFilled_ = true;
			parentEl.removeChild(contentEl);
			this.empty();
			insertContent(contentEl, content);
			this.trigger('modalfill');
			if (nextSiblingEl) {
				parentEl.insertBefore(contentEl, nextSiblingEl);
			} else {
				parentEl.appendChild(contentEl);
			}
			var closeButton = this.getChild('closeButton');
			if (closeButton) {
				parentEl.appendChild(closeButton.el_);
			}
		};
		ModalDialog.prototype.empty = function empty() {
			this.trigger('beforemodalempty');
			emptyEl(this.contentEl());
			this.trigger('modalempty');
		};
		ModalDialog.prototype.content = function content(value) {
			if (typeof value !== 'undefined') {
				this.content_ = value;
			}
			return this.content_;
		};
		ModalDialog.prototype.conditionalFocus_ = function conditionalFocus_() {
			var activeEl = document_1.activeElement;
			var playerEl = this.player_.el_;
			this.previouslyActiveEl_ = null;
			if (playerEl.contains(activeEl) || playerEl === activeEl) {
				this.previouslyActiveEl_ = activeEl;
				this.focus();
				this.on(document_1, 'keydown', this.handleKeyDown);
			}
		};
		ModalDialog.prototype.conditionalBlur_ = function conditionalBlur_() {
			if (this.previouslyActiveEl_) {
				this.previouslyActiveEl_.focus();
				this.previouslyActiveEl_ = null;
			}
			this.off(document_1, 'keydown', this.handleKeyDown);
		};
		ModalDialog.prototype.handleKeyDown = function handleKeyDown(event) {
			if (event.which !== 9) {
				return;
			}
			var focusableEls = this.focusableEls_();
			var activeEl = this.el_.querySelector(':focus');
			var focusIndex = void 0;
			for (var i = 0; i < focusableEls.length; i++) {
				if (activeEl === focusableEls[i]) {
					focusIndex = i;
					break;
				}
			}
			if (document_1.activeElement === this.el_) {
				focusIndex = 0;
			}
			if (event.shiftKey && focusIndex === 0) {
				focusableEls[focusableEls.length - 1].focus();
				event.preventDefault();
			} else if (!event.shiftKey && focusIndex === focusableEls.length - 1) {
				focusableEls[0].focus();
				event.preventDefault();
			}
		};
		ModalDialog.prototype.focusableEls_ = function focusableEls_() {
			var allChildren = this.el_.querySelectorAll('*');
			return Array.prototype.filter.call(allChildren, function (child) {
				return (child instanceof window_1.HTMLAnchorElement || child instanceof window_1.HTMLAreaElement) && child.hasAttribute('href') || (child instanceof window_1.HTMLInputElement || child instanceof window_1.HTMLSelectElement || child instanceof window_1.HTMLTextAreaElement || child instanceof window_1.HTMLButtonElement) && !child.hasAttribute('disabled') || child instanceof window_1.HTMLIFrameElement || child instanceof window_1.HTMLObjectElement || child instanceof window_1.HTMLEmbedElement || child.hasAttribute('tabindex') && child.getAttribute('tabindex') !== -1 || child.hasAttribute('contenteditable');
			});
		};
		return ModalDialog;
	}(Component);
	ModalDialog.prototype.options_ = {
		pauseOnOpen: true,
		temporary: true
	};
	Component.registerComponent('ModalDialog', ModalDialog);
	var TrackList = function (_EventTarget) {
		inherits(TrackList, _EventTarget);
		function TrackList() {
			var tracks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			classCallCheck(this, TrackList);
			var _this = possibleConstructorReturn(this, _EventTarget.call(this));
			_this.tracks_ = [];
			Object.defineProperty(_this, 'length', {
				get: function get$$1() {
					return this.tracks_.length;
				}
			});
			for (var i = 0; i < tracks.length; i++) {
				_this.addTrack(tracks[i]);
			}
			return _this;
		}
		TrackList.prototype.addTrack = function addTrack(track) {
			var index = this.tracks_.length;
			if (!('' + index in this)) {
				Object.defineProperty(this, index, {
					get: function get$$1() {
						return this.tracks_[index];
					}
				});
			}
			if (this.tracks_.indexOf(track) === -1) {
				this.tracks_.push(track);
				this.trigger({
					track: track,
					type: 'addtrack'
				});
			}
		};
		TrackList.prototype.removeTrack = function removeTrack(rtrack) {
			var track = void 0;
			for (var i = 0, l = this.length; i < l; i++) {
				if (this[i] === rtrack) {
					track = this[i];
					if (track.off) {
						track.off();
					}
					this.tracks_.splice(i, 1);
					break;
				}
			}
			if (!track) {
				return;
			}
			this.trigger({
				track: track,
				type: 'removetrack'
			});
		};
		TrackList.prototype.getTrackById = function getTrackById(id) {
			var result = null;
			for (var i = 0, l = this.length; i < l; i++) {
				var track = this[i];
				if (track.id === id) {
					result = track;
					break;
				}
			}
			return result;
		};
		return TrackList;
	}(EventTarget);
	TrackList.prototype.allowedEvents_ = {
		change: 'change',
		addtrack: 'addtrack',
		removetrack: 'removetrack'
	};
	for (var event in TrackList.prototype.allowedEvents_) {
		TrackList.prototype['on' + event] = null;
	}
	var disableOthers = function disableOthers(list, track) {
		for (var i = 0; i < list.length; i++) {
			if (!Object.keys(list[i]).length || track.id === list[i].id) {
				continue;
			}
			list[i].enabled = false;
		}
	};
	var AudioTrackList = function (_TrackList) {
		inherits(AudioTrackList, _TrackList);
		function AudioTrackList() {
			var tracks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			classCallCheck(this, AudioTrackList);
			for (var i = tracks.length - 1; i >= 0; i--) {
				if (tracks[i].enabled) {
					disableOthers(tracks, tracks[i]);
					break;
				}
			}
			var _this = possibleConstructorReturn(this, _TrackList.call(this, tracks));
			_this.changing_ = false;
			return _this;
		}
		AudioTrackList.prototype.addTrack = function addTrack(track) {
			var _this2 = this;
			if (track.enabled) {
				disableOthers(this, track);
			}
			_TrackList.prototype.addTrack.call(this, track);
			if (!track.addEventListener) {
				return;
			}
			track.addEventListener('enabledchange', function () {
				if (_this2.changing_) {
					return;
				}
				_this2.changing_ = true;
				disableOthers(_this2, track);
				_this2.changing_ = false;
				_this2.trigger('change');
			});
		};
		return AudioTrackList;
	}(TrackList);
	var disableOthers$1 = function disableOthers(list, track) {
		for (var i = 0; i < list.length; i++) {
			if (!Object.keys(list[i]).length || track.id === list[i].id) {
				continue;
			}
			list[i].selected = false;
		}
	};
	var VideoTrackList = function (_TrackList) {
		inherits(VideoTrackList, _TrackList);
		function VideoTrackList() {
			var tracks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			classCallCheck(this, VideoTrackList);
			for (var i = tracks.length - 1; i >= 0; i--) {
				if (tracks[i].selected) {
					disableOthers$1(tracks, tracks[i]);
					break;
				}
			}
			var _this = possibleConstructorReturn(this, _TrackList.call(this, tracks));
			_this.changing_ = false;
			Object.defineProperty(_this, 'selectedIndex', {
				get: function get$$1() {
					for (var _i = 0; _i < this.length; _i++) {
						if (this[_i].selected) {
							return _i;
						}
					}
					return -1;
				},
				set: function set$$1() { }
			});
			return _this;
		}
		VideoTrackList.prototype.addTrack = function addTrack(track) {
			var _this2 = this;
			if (track.selected) {
				disableOthers$1(this, track);
			}
			_TrackList.prototype.addTrack.call(this, track);
			if (!track.addEventListener) {
				return;
			}
			track.addEventListener('selectedchange', function () {
				if (_this2.changing_) {
					return;
				}
				_this2.changing_ = true;
				disableOthers$1(_this2, track);
				_this2.changing_ = false;
				_this2.trigger('change');
			});
		};
		return VideoTrackList;
	}(TrackList);
	var TextTrackList = function (_TrackList) {
		inherits(TextTrackList, _TrackList);
		function TextTrackList() {
			classCallCheck(this, TextTrackList);
			return possibleConstructorReturn(this, _TrackList.apply(this, arguments));
		}
		TextTrackList.prototype.addTrack = function addTrack(track) {
			_TrackList.prototype.addTrack.call(this, track);
			track.addEventListener('modechange', bind(this, function () {
				this.queueTrigger('change');
			}));
			var nonLanguageTextTrackKind = ['metadata', 'chapters'];
			if (nonLanguageTextTrackKind.indexOf(track.kind) === -1) {
				track.addEventListener('modechange', bind(this, function () {
					this.trigger('selectedlanguagechange');
				}));
			}
		};
		return TextTrackList;
	}(TrackList);
	var HtmlTrackElementList = function () {
		function HtmlTrackElementList() {
			var trackElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			classCallCheck(this, HtmlTrackElementList);
			this.trackElements_ = [];
			Object.defineProperty(this, 'length', {
				get: function get$$1() {
					return this.trackElements_.length;
				}
			});
			for (var i = 0, length = trackElements.length; i < length; i++) {
				this.addTrackElement_(trackElements[i]);
			}
		}
		HtmlTrackElementList.prototype.addTrackElement_ = function addTrackElement_(trackElement) {
			var index = this.trackElements_.length;
			if (!('' + index in this)) {
				Object.defineProperty(this, index, {
					get: function get$$1() {
						return this.trackElements_[index];
					}
				});
			}
			if (this.trackElements_.indexOf(trackElement) === -1) {
				this.trackElements_.push(trackElement);
			}
		};
		HtmlTrackElementList.prototype.getTrackElementByTrack_ = function getTrackElementByTrack_(track) {
			var trackElement_ = void 0;
			for (var i = 0, length = this.trackElements_.length; i < length; i++) {
				if (track === this.trackElements_[i].track) {
					trackElement_ = this.trackElements_[i];
					break;
				}
			}
			return trackElement_;
		};
		HtmlTrackElementList.prototype.removeTrackElement_ = function removeTrackElement_(trackElement) {
			for (var i = 0, length = this.trackElements_.length; i < length; i++) {
				if (trackElement === this.trackElements_[i]) {
					this.trackElements_.splice(i, 1);
					break;
				}
			}
		};
		return HtmlTrackElementList;
	}();
	var TextTrackCueList = function () {
		function TextTrackCueList(cues) {
			classCallCheck(this, TextTrackCueList);
			TextTrackCueList.prototype.setCues_.call(this, cues);
			Object.defineProperty(this, 'length', {
				get: function get$$1() {
					return this.length_;
				}
			});
		}
		TextTrackCueList.prototype.setCues_ = function setCues_(cues) {
			var oldLength = this.length || 0;
			var i = 0;
			var l = cues.length;
			this.cues_ = cues;
			this.length_ = cues.length;
			var defineProp = function defineProp(index) {
				if (!('' + index in this)) {
					Object.defineProperty(this, '' + index, {
						get: function get$$1() {
							return this.cues_[index];
						}
					});
				}
			};
			if (oldLength < l) {
				i = oldLength;
				for (; i < l; i++) {
					defineProp.call(this, i);
				}
			}
		};
		TextTrackCueList.prototype.getCueById = function getCueById(id) {
			var result = null;
			for (var i = 0, l = this.length; i < l; i++) {
				var cue = this[i];
				if (cue.id === id) {
					result = cue;
					break;
				}
			}
			return result;
		};
		return TextTrackCueList;
	}();
	var VideoTrackKind = {
		alternative: 'alternative',
		captions: 'captions',
		main: 'main',
		sign: 'sign',
		subtitles: 'subtitles',
		commentary: 'commentary'
	};
	var AudioTrackKind = {
		'alternative': 'alternative',
		'descriptions': 'descriptions',
		'main': 'main',
		'main-desc': 'main-desc',
		'translation': 'translation',
		'commentary': 'commentary'
	};
	var TextTrackKind = {
		subtitles: 'subtitles',
		captions: 'captions',
		descriptions: 'descriptions',
		chapters: 'chapters',
		metadata: 'metadata'
	};
	var TextTrackMode = {
		disabled: 'disabled',
		hidden: 'hidden',
		showing: 'showing'
	};
	var Track = function (_EventTarget) {
		inherits(Track, _EventTarget);
		function Track() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			classCallCheck(this, Track);
			var _this = possibleConstructorReturn(this, _EventTarget.call(this));
			var trackProps = {
				id: options.id || 'vjs_track_' + newGUID(),
				kind: options.kind || '',
				label: options.label || '',
				language: options.language || ''
			};
			var _loop = function _loop(key) {
				Object.defineProperty(_this, key, {
					get: function get$$1() {
						return trackProps[key];
					},
					set: function set$$1() { }
				});
			};
			for (var key in trackProps) {
				_loop(key);
			}
			return _this;
		}
		return Track;
	}(EventTarget);
	var parseUrl = function parseUrl(url) {
		var props = ['protocol', 'hostname', 'port', 'pathname', 'search', 'hash', 'host'];
		var a = document_1.createElement('a');
		a.href = url;
		var addToBody = a.host === '' && a.protocol !== 'file:';
		var div = void 0;
		if (addToBody) {
			div = document_1.createElement('div');
			div.innerHTML = '<a href="' + url + '"></a>';
			a = div.firstChild;
			div.setAttribute('style', 'display:none; position:absolute;');
			document_1.body.appendChild(div);
		}
		var details = {};
		for (var i = 0; i < props.length; i++) {
			details[props[i]] = a[props[i]];
		}
		if (details.protocol === 'http:') {
			details.host = details.host.replace(/:80$/, '');
		}
		if (details.protocol === 'https:') {
			details.host = details.host.replace(/:443$/, '');
		}
		if (!details.protocol) {
			details.protocol = window_1.location.protocol;
		}
		if (addToBody) {
			document_1.body.removeChild(div);
		}
		return details;
	};
	var getAbsoluteURL = function getAbsoluteURL(url) {
		if (!url.match(/^https?:\/\//)) {
			var div = document_1.createElement('div');
			div.innerHTML = '<a href="' + url + '">x</a>';
			url = div.firstChild.href;
		}
		return url;
	};
	var getFileExtension = function getFileExtension(path) {
		if (typeof path === 'string') {
			var splitPathRe = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i;
			var pathParts = splitPathRe.exec(path);
			if (pathParts) {
				return pathParts.pop().toLowerCase();
			}
		}
		return '';
	};
	var isCrossOrigin = function isCrossOrigin(url) {
		var winLoc = window_1.location;
		var urlInfo = parseUrl(url);
		var srcProtocol = urlInfo.protocol === ':' ? winLoc.protocol : urlInfo.protocol;
		var crossOrigin = srcProtocol + urlInfo.host !== winLoc.protocol + winLoc.host;
		return crossOrigin;
	};
	var Url = Object.freeze({
		parseUrl: parseUrl,
		getAbsoluteURL: getAbsoluteURL,
		getFileExtension: getFileExtension,
		isCrossOrigin: isCrossOrigin
	});
	var isFunction_1 = isFunction;
	var toString$1 = Object.prototype.toString;
	function isFunction(fn) {
		var string = toString$1.call(fn);
		return string === '[object Function]' || typeof fn === 'function' && string !== '[object RegExp]' || typeof window !== 'undefined' && (
			fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt);
	}
	var isFunction$1 = Object.freeze({
		default: isFunction_1,
		__moduleExports: isFunction_1
	});
	var trim_1 = createCommonjsModule(function (module, exports) {
		exports = module.exports = trim;
		function trim(str) {
			return str.replace(/^\s*|\s*$/g, '');
		}
		exports.left = function (str) {
			return str.replace(/^\s*/, '');
		};
		exports.right = function (str) {
			return str.replace(/\s*$/, '');
		};
	});
	var trim_2 = trim_1.left;
	var trim_3 = trim_1.right;
	var trim = Object.freeze({
		default: trim_1,
		__moduleExports: trim_1,
		left: trim_2,
		right: trim_3
	});
	var isFunction$2 = (isFunction$1 && isFunction_1) || isFunction$1;
	var forEach_1 = forEach;
	var toString$2 = Object.prototype.toString;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function forEach(list, iterator, context) {
		if (!isFunction$2(iterator)) {
			throw new TypeError('iterator must be a function');
		}
		if (arguments.length < 3) {
			context = this;
		}
		if (toString$2.call(list) === '[object Array]') forEachArray(list, iterator, context); else if (typeof list === 'string') forEachString(list, iterator, context); else forEachObject(list, iterator, context);
	}
	function forEachArray(array, iterator, context) {
		for (var i = 0, len = array.length; i < len; i++) {
			if (hasOwnProperty.call(array, i)) {
				iterator.call(context, array[i], i, array);
			}
		}
	}
	function forEachString(string, iterator, context) {
		for (var i = 0, len = string.length; i < len; i++) {
			iterator.call(context, string.charAt(i), i, string);
		}
	}
	function forEachObject(object, iterator, context) {
		for (var k in object) {
			if (hasOwnProperty.call(object, k)) {
				iterator.call(context, object[k], k, object);
			}
		}
	}
	var forEach$1 = Object.freeze({
		default: forEach_1,
		__moduleExports: forEach_1
	});
	var trim$1 = (trim && trim_1) || trim;
	var forEach$2 = (forEach$1 && forEach_1) || forEach$1;
	var isArray = function isArray(arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
	var parseHeaders = function parseHeaders(headers) {
		if (!headers) return {};
		var result = {};
		forEach$2(trim$1(headers).split('\n'), function (row) {
			var index = row.indexOf(':'),
				key = trim$1(row.slice(0, index)).toLowerCase(),
				value = trim$1(row.slice(index + 1));
			if (typeof result[key] === 'undefined') {
				result[key] = value;
			} else if (isArray(result[key])) {
				result[key].push(value);
			} else {
				result[key] = [result[key], value];
			}
		});
		return result;
	};
	var parseHeaders$1 = Object.freeze({
		default: parseHeaders,
		__moduleExports: parseHeaders
	});
	var immutable = extend;
	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	function extend() {
		var target = {};
		for (var i = 0; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) {
				if (hasOwnProperty$1.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	}
	var immutable$1 = Object.freeze({
		default: immutable,
		__moduleExports: immutable
	});
	var parseHeaders$2 = (parseHeaders$1 && parseHeaders) || parseHeaders$1;
	var xtend = (immutable$1 && immutable) || immutable$1;
	var xhr = createXHR;
	createXHR.XMLHttpRequest = window_1.XMLHttpRequest || noop;
	createXHR.XDomainRequest = "withCredentials" in new createXHR.XMLHttpRequest() ? createXHR.XMLHttpRequest : window_1.XDomainRequest;
	forEachArray$1(["get", "put", "post", "patch", "head", "delete"], function (method) {
		createXHR[method === "delete" ? "del" : method] = function (uri, options, callback) {
			options = initParams(uri, options, callback);
			options.method = method.toUpperCase();
			return _createXHR(options);
		};
	});
	function forEachArray$1(array, iterator) {
		for (var i = 0; i < array.length; i++) {
			iterator(array[i]);
		}
	}
	function isEmpty(obj) {
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) return false;
		}
		return true;
	}
	function initParams(uri, options, callback) {
		var params = uri;
		if (isFunction$2(options)) {
			callback = options;
			if (typeof uri === "string") {
				params = { uri: uri };
			}
		} else {
			params = xtend(options, { uri: uri });
		}
		params.callback = callback;
		return params;
	}
	function createXHR(uri, options, callback) {
		options = initParams(uri, options, callback);
		return _createXHR(options);
	}
	function _createXHR(options) {
		if (typeof options.callback === "undefined") {
			throw new Error("callback argument missing");
		}
		var called = false;
		var callback = function cbOnce(err, response, body) {
			if (!called) {
				called = true;
				options.callback(err, response, body);
			}
		};
		function readystatechange() {
			if (xhr.readyState === 4) {
				setTimeout(loadFunc, 0);
			}
		}
		function getBody() {
			var body = undefined;
			if (xhr.response) {
				body = xhr.response;
			} else {
				body = xhr.responseText || getXml(xhr);
			}
			if (isJson) {
				try {
					body = JSON.parse(body);
				} catch (e) { }
			}
			return body;
		}
		function errorFunc(evt) {
			clearTimeout(timeoutTimer);
			if (!(evt instanceof Error)) {
				evt = new Error("" + (evt || "Unknown XMLHttpRequest Error"));
			}
			evt.statusCode = 0;
			return callback(evt, failureResponse);
		}
		function loadFunc() {
			if (aborted) return;
			var status;
			clearTimeout(timeoutTimer);
			if (options.useXDR && xhr.status === undefined) {
				status = 200;
			} else {
				status = xhr.status === 1223 ? 204 : xhr.status;
			}
			var response = failureResponse;
			var err = null;
			if (status !== 0) {
				response = {
					body: getBody(),
					statusCode: status,
					method: method,
					headers: {},
					url: uri,
					rawRequest: xhr
				};
				if (xhr.getAllResponseHeaders) {
					response.headers = parseHeaders$2(xhr.getAllResponseHeaders());
				}
			} else {
				err = new Error("Internal XMLHttpRequest Error");
			}
			return callback(err, response, response.body);
		}
		var xhr = options.xhr || null;
		if (!xhr) {
			if (options.cors || options.useXDR) {
				xhr = new createXHR.XDomainRequest();
			} else {
				xhr = new createXHR.XMLHttpRequest();
			}
		}
		var key;
		var aborted;
		var uri = xhr.url = options.uri || options.url;
		var method = xhr.method = options.method || "GET";
		var body = options.body || options.data;
		var headers = xhr.headers = options.headers || {};
		var sync = !!options.sync;
		var isJson = false;
		var timeoutTimer;
		var failureResponse = {
			body: undefined,
			headers: {},
			statusCode: 0,
			method: method,
			url: uri,
			rawRequest: xhr
		};
		if ("json" in options && options.json !== false) {
			isJson = true;
			headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json");
			if (method !== "GET" && method !== "HEAD") {
				headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json");
				body = JSON.stringify(options.json === true ? body : options.json);
			}
		}
		xhr.onreadystatechange = readystatechange;
		xhr.onload = loadFunc;
		xhr.onerror = errorFunc;
		xhr.onprogress = function () {
		};
		xhr.onabort = function () {
			aborted = true;
		};
		xhr.ontimeout = errorFunc;
		xhr.open(method, uri, !sync, options.username, options.password);
		if (!sync) {
			xhr.withCredentials = !!options.withCredentials;
		}
		if (!sync && options.timeout > 0) {
			timeoutTimer = setTimeout(function () {
				if (aborted) return;
				aborted = true;
				xhr.abort("timeout");
				var e = new Error("XMLHttpRequest timeout");
				e.code = "ETIMEDOUT";
				errorFunc(e);
			}, options.timeout);
		}
		if (xhr.setRequestHeader) {
			for (key in headers) {
				if (headers.hasOwnProperty(key)) {
					xhr.setRequestHeader(key, headers[key]);
				}
			}
		} else if (options.headers && !isEmpty(options.headers)) {
			throw new Error("Headers cannot be set on an XDomainRequest object");
		}
		if ("responseType" in options) {
			xhr.responseType = options.responseType;
		}
		if ("beforeSend" in options && typeof options.beforeSend === "function") {
			options.beforeSend(xhr);
		}
		xhr.send(body || null);
		return xhr;
	}
	function getXml(xhr) {
		if (xhr.responseType === "document") {
			return xhr.responseXML;
		}
		var firefoxBugTakenEffect = xhr.responseXML && xhr.responseXML.documentElement.nodeName === "parsererror";
		if (xhr.responseType === "" && !firefoxBugTakenEffect) {
			return xhr.responseXML;
		}
		return null;
	}
	function noop() { }
	var parseCues = function parseCues(srcContent, track) {
		var parser = new window_1.WebVTT.Parser(window_1, window_1.vttjs, window_1.WebVTT.StringDecoder());
		var errors = [];
		parser.oncue = function (cue) {
			track.addCue(cue);
		};
		parser.onparsingerror = function (error) {
			errors.push(error);
		};
		parser.onflush = function () {
			track.trigger({
				type: 'loadeddata',
				target: track
			});
		};
		parser.parse(srcContent);
		if (errors.length > 0) {
			if (window_1.console && window_1.console.groupCollapsed) {
				window_1.console.groupCollapsed('Text Track parsing errors for ' + track.src);
			}
			errors.forEach(function (error) {
				return log$1.error(error);
			});
			if (window_1.console && window_1.console.groupEnd) {
				window_1.console.groupEnd();
			}
		}
		parser.flush();
	};
	var loadTrack = function loadTrack(src, track) {
		var opts = {
			uri: src
		};
		var crossOrigin = isCrossOrigin(src);
		if (crossOrigin) {
			opts.cors = crossOrigin;
		}
		xhr(opts, bind(this, function (err, response, responseBody) {
			if (err) {
				return log$1.error(err, response);
			}
			track.loaded_ = true;
			if (typeof window_1.WebVTT !== 'function') {
				if (track.tech_) {
					var loadHandler = function loadHandler() {
						return parseCues(responseBody, track);
					};
					track.tech_.on('vttjsloaded', loadHandler);
					track.tech_.on('vttjserror', function () {
						log$1.error('vttjs failed to load, stopping trying to process ' + track.src);
						track.tech_.off('vttjsloaded', loadHandler);
					});
				}
			} else {
				parseCues(responseBody, track);
			}
		}));
	};
	var TextTrack = function (_Track) {
		inherits(TextTrack, _Track);
		function TextTrack() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			classCallCheck(this, TextTrack);
			if (!options.tech) {
				throw new Error('A tech was not provided.');
			}
			var settings = mergeOptions(options, {
				kind: TextTrackKind[options.kind] || 'subtitles',
				language: options.language || options.srclang || ''
			});
			var mode = TextTrackMode[settings.mode] || 'disabled';
			var default_ = settings.default;
			if (settings.kind === 'metadata' || settings.kind === 'chapters') {
				mode = 'hidden';
			}
			var _this = possibleConstructorReturn(this, _Track.call(this, settings));
			_this.tech_ = settings.tech;
			_this.cues_ = [];
			_this.activeCues_ = [];
			var cues = new TextTrackCueList(_this.cues_);
			var activeCues = new TextTrackCueList(_this.activeCues_);
			var changed = false;
			var timeupdateHandler = bind(_this, function () {
				this.activeCues = this.activeCues;
				if (changed) {
					this.trigger('cuechange');
					changed = false;
				}
			});
			if (mode !== 'disabled') {
				_this.tech_.ready(function () {
					_this.tech_.on('timeupdate', timeupdateHandler);
				}, true);
			}
			Object.defineProperties(_this, {
				default: {
					get: function get$$1() {
						return default_;
					},
					set: function set$$1() { }
				},
				mode: {
					get: function get$$1() {
						return mode;
					},
					set: function set$$1(newMode) {
						var _this2 = this;
						if (!TextTrackMode[newMode]) {
							return;
						}
						mode = newMode;
						if (mode === 'showing') {
							this.tech_.ready(function () {
								_this2.tech_.on('timeupdate', timeupdateHandler);
							}, true);
						}
						this.trigger('modechange');
					}
				},
				cues: {
					get: function get$$1() {
						if (!this.loaded_) {
							return null;
						}
						return cues;
					},
					set: function set$$1() { }
				},
				activeCues: {
					get: function get$$1() {
						if (!this.loaded_) {
							return null;
						}
						if (this.cues.length === 0) {
							return activeCues;
						}
						var ct = this.tech_.currentTime();
						var active = [];
						for (var i = 0, l = this.cues.length; i < l; i++) {
							var cue = this.cues[i];
							if (cue.startTime <= ct && cue.endTime >= ct) {
								active.push(cue);
							} else if (cue.startTime === cue.endTime && cue.startTime <= ct && cue.startTime + 0.5 >= ct) {
								active.push(cue);
							}
						}
						changed = false;
						if (active.length !== this.activeCues_.length) {
							changed = true;
						} else {
							for (var _i = 0; _i < active.length; _i++) {
								if (this.activeCues_.indexOf(active[_i]) === -1) {
									changed = true;
								}
							}
						}
						this.activeCues_ = active;
						activeCues.setCues_(this.activeCues_);
						return activeCues;
					},
					set: function set$$1() { }
				}
			});
			if (settings.src) {
				_this.src = settings.src;
				loadTrack(settings.src, _this);
			} else {
				_this.loaded_ = true;
			}
			return _this;
		}
		TextTrack.prototype.addCue = function addCue(originalCue) {
			var cue = originalCue;
			if (window_1.vttjs && !(originalCue instanceof window_1.vttjs.VTTCue)) {
				cue = new window_1.vttjs.VTTCue(originalCue.startTime, originalCue.endTime, originalCue.text);
				for (var prop in originalCue) {
					if (!(prop in cue)) {
						cue[prop] = originalCue[prop];
					}
				}
				cue.id = originalCue.id;
				cue.originalCue_ = originalCue;
			}
			var tracks = this.tech_.textTracks();
			for (var i = 0; i < tracks.length; i++) {
				if (tracks[i] !== this) {
					tracks[i].removeCue(cue);
				}
			}
			this.cues_.push(cue);
			this.cues.setCues_(this.cues_);
		};
		TextTrack.prototype.removeCue = function removeCue(_removeCue) {
			var i = this.cues_.length;
			while (i--) {
				var cue = this.cues_[i];
				if (cue === _removeCue || cue.originalCue_ && cue.originalCue_ === _removeCue) {
					this.cues_.splice(i, 1);
					this.cues.setCues_(this.cues_);
					break;
				}
			}
		};
		return TextTrack;
	}(Track);
	TextTrack.prototype.allowedEvents_ = {
		cuechange: 'cuechange'
	};
	var AudioTrack = function (_Track) {
		inherits(AudioTrack, _Track);
		function AudioTrack() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			classCallCheck(this, AudioTrack);
			var settings = mergeOptions(options, {
				kind: AudioTrackKind[options.kind] || ''
			});
			var _this = possibleConstructorReturn(this, _Track.call(this, settings));
			var enabled = false;
			Object.defineProperty(_this, 'enabled', {
				get: function get$$1() {
					return enabled;
				},
				set: function set$$1(newEnabled) {
					if (typeof newEnabled !== 'boolean' || newEnabled === enabled) {
						return;
					}
					enabled = newEnabled;
					this.trigger('enabledchange');
				}
			});
			if (settings.enabled) {
				_this.enabled = settings.enabled;
			}
			_this.loaded_ = true;
			return _this;
		}
		return AudioTrack;
	}(Track);
	var VideoTrack = function (_Track) {
		inherits(VideoTrack, _Track);
		function VideoTrack() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			classCallCheck(this, VideoTrack);
			var settings = mergeOptions(options, {
				kind: VideoTrackKind[options.kind] || ''
			});
			var _this = possibleConstructorReturn(this, _Track.call(this, settings));
			var selected = false;
			Object.defineProperty(_this, 'selected', {
				get: function get$$1() {
					return selected;
				},
				set: function set$$1(newSelected) {
					if (typeof newSelected !== 'boolean' || newSelected === selected) {
						return;
					}
					selected = newSelected;
					this.trigger('selectedchange');
				}
			});
			if (settings.selected) {
				_this.selected = settings.selected;
			}
			return _this;
		}
		return VideoTrack;
	}(Track);
	var NONE = 0;
	var LOADING = 1;
	var LOADED = 2;
	var ERROR = 3;
	var HTMLTrackElement = function (_EventTarget) {
		inherits(HTMLTrackElement, _EventTarget);
		function HTMLTrackElement() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			classCallCheck(this, HTMLTrackElement);
			var _this = possibleConstructorReturn(this, _EventTarget.call(this));
			var readyState = void 0;
			var track = new TextTrack(options);
			_this.kind = track.kind;
			_this.src = track.src;
			_this.srclang = track.language;
			_this.label = track.label;
			_this.default = track.default;
			Object.defineProperties(_this, {
				readyState: {
					get: function get$$1() {
						return readyState;
					}
				},
				track: {
					get: function get$$1() {
						return track;
					}
				}
			});
			readyState = NONE;
			track.addEventListener('loadeddata', function () {
				readyState = LOADED;
				_this.trigger({
					type: 'load',
					target: _this
				});
			});
			return _this;
		}
		return HTMLTrackElement;
	}(EventTarget);
	HTMLTrackElement.prototype.allowedEvents_ = {
		load: 'load'
	};
	HTMLTrackElement.NONE = NONE;
	HTMLTrackElement.LOADING = LOADING;
	HTMLTrackElement.LOADED = LOADED;
	HTMLTrackElement.ERROR = ERROR;
	var NORMAL = {
		audio: {
			ListClass: AudioTrackList,
			TrackClass: AudioTrack,
			capitalName: 'Audio'
		},
		video: {
			ListClass: VideoTrackList,
			TrackClass: VideoTrack,
			capitalName: 'Video'
		},
		text: {
			ListClass: TextTrackList,
			TrackClass: TextTrack,
			capitalName: 'Text'
		}
	};
	Object.keys(NORMAL).forEach(function (type) {
		NORMAL[type].getterName = type + 'Tracks';
		NORMAL[type].privateName = type + 'Tracks_';
	});
	var REMOTE = {
		remoteText: {
			ListClass: TextTrackList,
			TrackClass: TextTrack,
			capitalName: 'RemoteText',
			getterName: 'remoteTextTracks',
			privateName: 'remoteTextTracks_'
		},
		remoteTextEl: {
			ListClass: HtmlTrackElementList,
			TrackClass: HTMLTrackElement,
			capitalName: 'RemoteTextTrackEls',
			getterName: 'remoteTextTrackEls',
			privateName: 'remoteTextTrackEls_'
		}
	};
	var ALL = mergeOptions(NORMAL, REMOTE);
	REMOTE.names = Object.keys(REMOTE);
	NORMAL.names = Object.keys(NORMAL);
	ALL.names = [].concat(REMOTE.names).concat(NORMAL.names);
	var _objCreate = Object.create || function () {
		function F() { }
		return function (o) {
			if (arguments.length !== 1) {
				throw new Error('Object.create shim only accepts one parameter.');
			}
			F.prototype = o;
			return new F();
		};
	}();
	function ParsingError(errorData, message) {
		this.name = "ParsingError";
		this.code = errorData.code;
		this.message = message || errorData.message;
	}
	ParsingError.prototype = _objCreate(Error.prototype);
	ParsingError.prototype.constructor = ParsingError;
	ParsingError.Errors = {
		BadSignature: {
			code: 0,
			message: "Malformed WebVTT signature."
		},
		BadTimeStamp: {
			code: 1,
			message: "Malformed time stamp."
		}
	};
	function parseTimeStamp(input) {
		function computeSeconds(h, m, s, f) {
			return (h | 0) * 3600 + (m | 0) * 60 + (s | 0) + (f | 0) / 1000;
		}
		var m = input.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
		if (!m) {
			return null;
		}
		if (m[3]) {
			return computeSeconds(m[1], m[2], m[3].replace(":", ""), m[4]);
		} else if (m[1] > 59) {
			return computeSeconds(m[1], m[2], 0, m[4]);
		} else {
			return computeSeconds(0, m[1], m[2], m[4]);
		}
	}
	function Settings() {
		this.values = _objCreate(null);
	}
	Settings.prototype = {
		set: function set(k, v) {
			if (!this.get(k) && v !== "") {
				this.values[k] = v;
			}
		},
		get: function get(k, dflt, defaultKey) {
			if (defaultKey) {
				return this.has(k) ? this.values[k] : dflt[defaultKey];
			}
			return this.has(k) ? this.values[k] : dflt;
		},
		has: function has(k) {
			return k in this.values;
		},
		alt: function alt(k, v, a) {
			for (var n = 0; n < a.length; ++n) {
				if (v === a[n]) {
					this.set(k, v);
					break;
				}
			}
		},
		integer: function integer(k, v) {
			if (/^-?\d+$/.test(v)) {
				this.set(k, parseInt(v, 10));
			}
		},
		percent: function percent(k, v) {
			var m;
			if (m = v.match(/^([\d]{1,3})(\.[\d]*)?%$/)) {
				v = parseFloat(v);
				if (v >= 0 && v <= 100) {
					this.set(k, v);
					return true;
				}
			}
			return false;
		}
	};
	function parseOptions(input, callback, keyValueDelim, groupDelim) {
		var groups = groupDelim ? input.split(groupDelim) : [input];
		for (var i in groups) {
			if (typeof groups[i] !== "string") {
				continue;
			}
			var kv = groups[i].split(keyValueDelim);
			if (kv.length !== 2) {
				continue;
			}
			var k = kv[0];
			var v = kv[1];
			callback(k, v);
		}
	}
	function parseCue(input, cue, regionList) {
		var oInput = input;
		function consumeTimeStamp() {
			var ts = parseTimeStamp(input);
			if (ts === null) {
				throw new ParsingError(ParsingError.Errors.BadTimeStamp, "Malformed timestamp: " + oInput);
			}
			input = input.replace(/^[^\sa-zA-Z-]+/, "");
			return ts;
		}
		function consumeCueSettings(input, cue) {
			var settings = new Settings();
			parseOptions(input, function (k, v) {
				switch (k) {
					case "region":
						for (var i = regionList.length - 1; i >= 0; i--) {
							if (regionList[i].id === v) {
								settings.set(k, regionList[i].region);
								break;
							}
						}
						break;
					case "vertical":
						settings.alt(k, v, ["rl", "lr"]);
						break;
					case "line":
						var vals = v.split(","),
							vals0 = vals[0];
						settings.integer(k, vals0);
						settings.percent(k, vals0) ? settings.set("snapToLines", false) : null;
						settings.alt(k, vals0, ["auto"]);
						if (vals.length === 2) {
							settings.alt("lineAlign", vals[1], ["start", "middle", "end"]);
						}
						break;
					case "position":
						vals = v.split(",");
						settings.percent(k, vals[0]);
						if (vals.length === 2) {
							settings.alt("positionAlign", vals[1], ["start", "middle", "end"]);
						}
						break;
					case "size":
						settings.percent(k, v);
						break;
					case "align":
						settings.alt(k, v, ["start", "middle", "end", "left", "right"]);
						break;
				}
			}, /:/, /\s/);
			cue.region = settings.get("region", null);
			cue.vertical = settings.get("vertical", "");
			cue.line = settings.get("line", "auto");
			cue.lineAlign = settings.get("lineAlign", "start");
			cue.snapToLines = settings.get("snapToLines", true);
			cue.size = settings.get("size", 100);
			cue.align = settings.get("align", "middle");
			cue.position = settings.get("position", {
				start: 0,
				left: 0,
				middle: 50,
				end: 100,
				right: 100
			}, cue.align);
			cue.positionAlign = settings.get("positionAlign", {
				start: "start",
				left: "start",
				middle: "middle",
				end: "end",
				right: "end"
			}, cue.align);
		}
		function skipWhitespace() {
			input = input.replace(/^\s+/, "");
		}
		skipWhitespace();
		cue.startTime = consumeTimeStamp();
		skipWhitespace();
		if (input.substr(0, 3) !== "-->") {
			throw new ParsingError(ParsingError.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + oInput);
		}
		input = input.substr(3);
		skipWhitespace();
		cue.endTime = consumeTimeStamp();
		skipWhitespace();
		consumeCueSettings(input, cue);
	}
	var ESCAPE = {
		"&amp;": "&",
		"&lt;": "<",
		"&gt;": ">",
		"&lrm;": "\u200E",
		"&rlm;": "\u200F",
		"&nbsp;": "\xA0"
	};
	var TAG_NAME = {
		c: "span",
		i: "i",
		b: "b",
		u: "u",
		ruby: "ruby",
		rt: "rt",
		v: "span",
		lang: "span"
	};
	var TAG_ANNOTATION = {
		v: "title",
		lang: "lang"
	};
	var NEEDS_PARENT = {
		rt: "ruby"
	};
	function parseContent(window, input) {
		function nextToken() {
			if (!input) {
				return null;
			}
			function consume(result) {
				input = input.substr(result.length);
				return result;
			}
			var m = input.match(/^([^<]*)(<[^>]*>?)?/);
			return consume(m[1] ? m[1] : m[2]);
		}
		function unescape1(e) {
			return ESCAPE[e];
		}
		function unescape(s) {
			while (m = s.match(/&(amp|lt|gt|lrm|rlm|nbsp);/)) {
				s = s.replace(m[0], unescape1);
			}
			return s;
		}
		function shouldAdd(current, element) {
			return !NEEDS_PARENT[element.localName] || NEEDS_PARENT[element.localName] === current.localName;
		}
		function createElement(type, annotation) {
			var tagName = TAG_NAME[type];
			if (!tagName) {
				return null;
			}
			var element = window.document.createElement(tagName);
			element.localName = tagName;
			var name = TAG_ANNOTATION[type];
			if (name && annotation) {
				element[name] = annotation.trim();
			}
			return element;
		}
		var rootDiv = window.document.createElement("div"),
			current = rootDiv,
			t,
			tagStack = [];
		while ((t = nextToken()) !== null) {
			if (t[0] === '<') {
				if (t[1] === "/") {
					if (tagStack.length && tagStack[tagStack.length - 1] === t.substr(2).replace(">", "")) {
						tagStack.pop();
						current = current.parentNode;
					}
					continue;
				}
				var ts = parseTimeStamp(t.substr(1, t.length - 2));
				var node;
				if (ts) {
					node = window.document.createProcessingInstruction("timestamp", ts);
					current.appendChild(node);
					continue;
				}
				var m = t.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
				if (!m) {
					continue;
				}
				node = createElement(m[1], m[3]);
				if (!node) {
					continue;
				}
				if (!shouldAdd(current, node)) {
					continue;
				}
				if (m[2]) {
					node.className = m[2].substr(1).replace('.', ' ');
				}
				tagStack.push(m[1]);
				current.appendChild(node);
				current = node;
				continue;
			}
			current.appendChild(window.document.createTextNode(unescape(t)));
		}
		return rootDiv;
	}
	var strongRTLRanges = [[0x5be, 0x5be], [0x5c0, 0x5c0], [0x5c3, 0x5c3], [0x5c6, 0x5c6], [0x5d0, 0x5ea], [0x5f0, 0x5f4], [0x608, 0x608], [0x60b, 0x60b], [0x60d, 0x60d], [0x61b, 0x61b], [0x61e, 0x64a], [0x66d, 0x66f], [0x671, 0x6d5], [0x6e5, 0x6e6], [0x6ee, 0x6ef], [0x6fa, 0x70d], [0x70f, 0x710], [0x712, 0x72f], [0x74d, 0x7a5], [0x7b1, 0x7b1], [0x7c0, 0x7ea], [0x7f4, 0x7f5], [0x7fa, 0x7fa], [0x800, 0x815], [0x81a, 0x81a], [0x824, 0x824], [0x828, 0x828], [0x830, 0x83e], [0x840, 0x858], [0x85e, 0x85e], [0x8a0, 0x8a0], [0x8a2, 0x8ac], [0x200f, 0x200f], [0xfb1d, 0xfb1d], [0xfb1f, 0xfb28], [0xfb2a, 0xfb36], [0xfb38, 0xfb3c], [0xfb3e, 0xfb3e], [0xfb40, 0xfb41], [0xfb43, 0xfb44], [0xfb46, 0xfbc1], [0xfbd3, 0xfd3d], [0xfd50, 0xfd8f], [0xfd92, 0xfdc7], [0xfdf0, 0xfdfc], [0xfe70, 0xfe74], [0xfe76, 0xfefc], [0x10800, 0x10805], [0x10808, 0x10808], [0x1080a, 0x10835], [0x10837, 0x10838], [0x1083c, 0x1083c], [0x1083f, 0x10855], [0x10857, 0x1085f], [0x10900, 0x1091b], [0x10920, 0x10939], [0x1093f, 0x1093f], [0x10980, 0x109b7], [0x109be, 0x109bf], [0x10a00, 0x10a00], [0x10a10, 0x10a13], [0x10a15, 0x10a17], [0x10a19, 0x10a33], [0x10a40, 0x10a47], [0x10a50, 0x10a58], [0x10a60, 0x10a7f], [0x10b00, 0x10b35], [0x10b40, 0x10b55], [0x10b58, 0x10b72], [0x10b78, 0x10b7f], [0x10c00, 0x10c48], [0x1ee00, 0x1ee03], [0x1ee05, 0x1ee1f], [0x1ee21, 0x1ee22], [0x1ee24, 0x1ee24], [0x1ee27, 0x1ee27], [0x1ee29, 0x1ee32], [0x1ee34, 0x1ee37], [0x1ee39, 0x1ee39], [0x1ee3b, 0x1ee3b], [0x1ee42, 0x1ee42], [0x1ee47, 0x1ee47], [0x1ee49, 0x1ee49], [0x1ee4b, 0x1ee4b], [0x1ee4d, 0x1ee4f], [0x1ee51, 0x1ee52], [0x1ee54, 0x1ee54], [0x1ee57, 0x1ee57], [0x1ee59, 0x1ee59], [0x1ee5b, 0x1ee5b], [0x1ee5d, 0x1ee5d], [0x1ee5f, 0x1ee5f], [0x1ee61, 0x1ee62], [0x1ee64, 0x1ee64], [0x1ee67, 0x1ee6a], [0x1ee6c, 0x1ee72], [0x1ee74, 0x1ee77], [0x1ee79, 0x1ee7c], [0x1ee7e, 0x1ee7e], [0x1ee80, 0x1ee89], [0x1ee8b, 0x1ee9b], [0x1eea1, 0x1eea3], [0x1eea5, 0x1eea9], [0x1eeab, 0x1eebb], [0x10fffd, 0x10fffd]];
	function isStrongRTLChar(charCode) {
		for (var i = 0; i < strongRTLRanges.length; i++) {
			var currentRange = strongRTLRanges[i];
			if (charCode >= currentRange[0] && charCode <= currentRange[1]) {
				return true;
			}
		}
		return false;
	}
	function determineBidi(cueDiv) {
		var nodeStack = [],
			text = "",
			charCode;
		if (!cueDiv || !cueDiv.childNodes) {
			return "ltr";
		}
		function pushNodes(nodeStack, node) {
			for (var i = node.childNodes.length - 1; i >= 0; i--) {
				nodeStack.push(node.childNodes[i]);
			}
		}
		function nextTextNode(nodeStack) {
			if (!nodeStack || !nodeStack.length) {
				return null;
			}
			var node = nodeStack.pop(),
				text = node.textContent || node.innerText;
			if (text) {
				var m = text.match(/^.*(\n|\r)/);
				if (m) {
					nodeStack.length = 0;
					return m[0];
				}
				return text;
			}
			if (node.tagName === "ruby") {
				return nextTextNode(nodeStack);
			}
			if (node.childNodes) {
				pushNodes(nodeStack, node);
				return nextTextNode(nodeStack);
			}
		}
		pushNodes(nodeStack, cueDiv);
		while (text = nextTextNode(nodeStack)) {
			for (var i = 0; i < text.length; i++) {
				charCode = text.charCodeAt(i);
				if (isStrongRTLChar(charCode)) {
					return "rtl";
				}
			}
		}
		return "ltr";
	}
	function computeLinePos(cue) {
		if (typeof cue.line === "number" && (cue.snapToLines || cue.line >= 0 && cue.line <= 100)) {
			return cue.line;
		}
		if (!cue.track || !cue.track.textTrackList || !cue.track.textTrackList.mediaElement) {
			return -1;
		}
		var track = cue.track,
			trackList = track.textTrackList,
			count = 0;
		for (var i = 0; i < trackList.length && trackList[i] !== track; i++) {
			if (trackList[i].mode === "showing") {
				count++;
			}
		}
		return ++count * -1;
	}
	function StyleBox() { }
	StyleBox.prototype.applyStyles = function (styles, div) {
		div = div || this.div;
		for (var prop in styles) {
			if (styles.hasOwnProperty(prop)) {
				div.style[prop] = styles[prop];
			}
		}
	};
	StyleBox.prototype.formatStyle = function (val, unit) {
		return val === 0 ? 0 : val + unit;
	};
	function CueStyleBox(window, cue, styleOptions) {
		StyleBox.call(this);
		this.cue = cue;
		this.cueDiv = parseContent(window, cue.text);
		var styles = {
			color: "rgba(255, 255, 255, 1)",
			backgroundColor: "rgba(0, 0, 0, 0.8)",
			position: "relative",
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			display: "inline",
			writingMode: cue.vertical === "" ? "horizontal-tb" : cue.vertical === "lr" ? "vertical-lr" : "vertical-rl",
			unicodeBidi: "plaintext"
		};
		this.applyStyles(styles, this.cueDiv);
		this.div = window.document.createElement("div");
		styles = {
			direction: determineBidi(this.cueDiv),
			writingMode: cue.vertical === "" ? "horizontal-tb" : cue.vertical === "lr" ? "vertical-lr" : "vertical-rl",
			unicodeBidi: "plaintext",
			textAlign: cue.align === "middle" ? "center" : cue.align,
			font: styleOptions.font,
			whiteSpace: "pre-line",
			position: "absolute"
		};
		this.applyStyles(styles);
		this.div.appendChild(this.cueDiv);
		var textPos = 0;
		switch (cue.positionAlign) {
			case "start":
				textPos = cue.position;
				break;
			case "middle":
				textPos = cue.position - cue.size / 2;
				break;
			case "end":
				textPos = cue.position - cue.size;
				break;
		}
		if (cue.vertical === "") {
			this.applyStyles({
				left: this.formatStyle(textPos, "%"),
				width: this.formatStyle(cue.size, "%")
			});
		} else {
			this.applyStyles({
				top: this.formatStyle(textPos, "%"),
				height: this.formatStyle(cue.size, "%")
			});
		}
		this.move = function (box) {
			this.applyStyles({
				top: this.formatStyle(box.top, "px"),
				bottom: this.formatStyle(box.bottom, "px"),
				left: this.formatStyle(box.left, "px"),
				right: this.formatStyle(box.right, "px"),
				height: this.formatStyle(box.height, "px"),
				width: this.formatStyle(box.width, "px")
			});
		};
	}
	CueStyleBox.prototype = _objCreate(StyleBox.prototype);
	CueStyleBox.prototype.constructor = CueStyleBox;
	function BoxPosition(obj) {
		var lh, height, width, top;
		if (obj.div) {
			height = obj.div.offsetHeight;
			width = obj.div.offsetWidth;
			top = obj.div.offsetTop;
			var rects = (rects = obj.div.childNodes) && (rects = rects[0]) && rects.getClientRects && rects.getClientRects();
			obj = obj.div.getBoundingClientRect();
			lh = rects ? Math.max(rects[0] && rects[0].height || 0, obj.height / rects.length) : 0;
		}
		this.left = obj.left;
		this.right = obj.right;
		this.top = obj.top || top;
		this.height = obj.height || height;
		this.bottom = obj.bottom || top + (obj.height || height);
		this.width = obj.width || width;
		this.lineHeight = lh !== undefined ? lh : obj.lineHeight;
	}
	BoxPosition.prototype.move = function (axis, toMove) {
		toMove = toMove !== undefined ? toMove : this.lineHeight;
		switch (axis) {
			case "+x":
				this.left += toMove;
				this.right += toMove;
				break;
			case "-x":
				this.left -= toMove;
				this.right -= toMove;
				break;
			case "+y":
				this.top += toMove;
				this.bottom += toMove;
				break;
			case "-y":
				this.top -= toMove;
				this.bottom -= toMove;
				break;
		}
	};
	BoxPosition.prototype.overlaps = function (b2) {
		return this.left < b2.right && this.right > b2.left && this.top < b2.bottom && this.bottom > b2.top;
	};
	BoxPosition.prototype.overlapsAny = function (boxes) {
		for (var i = 0; i < boxes.length; i++) {
			if (this.overlaps(boxes[i])) {
				return true;
			}
		}
		return false;
	};
	BoxPosition.prototype.within = function (container) {
		return this.top >= container.top && this.bottom <= container.bottom && this.left >= container.left && this.right <= container.right;
	};
	BoxPosition.prototype.overlapsOppositeAxis = function (container, axis) {
		switch (axis) {
			case "+x":
				return this.left < container.left;
			case "-x":
				return this.right > container.right;
			case "+y":
				return this.top < container.top;
			case "-y":
				return this.bottom > container.bottom;
		}
	};
	BoxPosition.prototype.intersectPercentage = function (b2) {
		var x = Math.max(0, Math.min(this.right, b2.right) - Math.max(this.left, b2.left)),
			y = Math.max(0, Math.min(this.bottom, b2.bottom) - Math.max(this.top, b2.top)),
			intersectArea = x * y;
		return intersectArea / (this.height * this.width);
	};
	BoxPosition.prototype.toCSSCompatValues = function (reference) {
		return {
			top: this.top - reference.top,
			bottom: reference.bottom - this.bottom,
			left: this.left - reference.left,
			right: reference.right - this.right,
			height: this.height,
			width: this.width
		};
	};
	BoxPosition.getSimpleBoxPosition = function (obj) {
		var height = obj.div ? obj.div.offsetHeight : obj.tagName ? obj.offsetHeight : 0;
		var width = obj.div ? obj.div.offsetWidth : obj.tagName ? obj.offsetWidth : 0;
		var top = obj.div ? obj.div.offsetTop : obj.tagName ? obj.offsetTop : 0;
		obj = obj.div ? obj.div.getBoundingClientRect() : obj.tagName ? obj.getBoundingClientRect() : obj;
		var ret = {
			left: obj.left,
			right: obj.right,
			top: obj.top || top,
			height: obj.height || height,
			bottom: obj.bottom || top + (obj.height || height),
			width: obj.width || width
		};
		return ret;
	};
	function moveBoxToLinePosition(window, styleBox, containerBox, boxPositions) {
		function findBestPosition(b, axis) {
			var bestPosition,
				specifiedPosition = new BoxPosition(b),
				percentage = 1;
			for (var i = 0; i < axis.length; i++) {
				while (b.overlapsOppositeAxis(containerBox, axis[i]) || b.within(containerBox) && b.overlapsAny(boxPositions)) {
					b.move(axis[i]);
				}
				if (b.within(containerBox)) {
					return b;
				}
				var p = b.intersectPercentage(containerBox);
				if (percentage > p) {
					bestPosition = new BoxPosition(b);
					percentage = p;
				}
				b = new BoxPosition(specifiedPosition);
			}
			return bestPosition || specifiedPosition;
		}
		var boxPosition = new BoxPosition(styleBox),
			cue = styleBox.cue,
			linePos = computeLinePos(cue),
			axis = [];
		if (cue.snapToLines) {
			var size;
			switch (cue.vertical) {
				case "":
					axis = ["+y", "-y"];
					size = "height";
					break;
				case "rl":
					axis = ["+x", "-x"];
					size = "width";
					break;
				case "lr":
					axis = ["-x", "+x"];
					size = "width";
					break;
			}
			var step = boxPosition.lineHeight,
				position = step * Math.round(linePos),
				maxPosition = containerBox[size] + step,
				initialAxis = axis[0];
			if (Math.abs(position) > maxPosition) {
				position = position < 0 ? -1 : 1;
				position *= Math.ceil(maxPosition / step) * step;
			}
			if (linePos < 0) {
				position += cue.vertical === "" ? containerBox.height : containerBox.width;
				axis = axis.reverse();
			}
			boxPosition.move(initialAxis, position);
		} else {
			var calculatedPercentage = boxPosition.lineHeight / containerBox.height * 100;
			switch (cue.lineAlign) {
				case "middle":
					linePos -= calculatedPercentage / 2;
					break;
				case "end":
					linePos -= calculatedPercentage;
					break;
			}
			switch (cue.vertical) {
				case "":
					styleBox.applyStyles({
						top: styleBox.formatStyle(linePos, "%")
					});
					break;
				case "rl":
					styleBox.applyStyles({
						left: styleBox.formatStyle(linePos, "%")
					});
					break;
				case "lr":
					styleBox.applyStyles({
						right: styleBox.formatStyle(linePos, "%")
					});
					break;
			}
			axis = ["+y", "-x", "+x", "-y"];
			boxPosition = new BoxPosition(styleBox);
		}
		var bestPosition = findBestPosition(boxPosition, axis);
		styleBox.move(bestPosition.toCSSCompatValues(containerBox));
	}
	function WebVTT$1() { }
	WebVTT$1.StringDecoder = function () {
		return {
			decode: function decode(data) {
				if (!data) {
					return "";
				}
				if (typeof data !== "string") {
					throw new Error("Error - expected string data.");
				}
				return decodeURIComponent(encodeURIComponent(data));
			}
		};
	};
	WebVTT$1.convertCueToDOMTree = function (window, cuetext) {
		if (!window || !cuetext) {
			return null;
		}
		return parseContent(window, cuetext);
	};
	var FONT_SIZE_PERCENT = 0.05;
	var FONT_STYLE = "sans-serif";
	var CUE_BACKGROUND_PADDING = "1.5%";
	WebVTT$1.processCues = function (window, cues, overlay) {
		if (!window || !cues || !overlay) {
			return null;
		}
		while (overlay.firstChild) {
			overlay.removeChild(overlay.firstChild);
		}
		var paddedOverlay = window.document.createElement("div");
		paddedOverlay.style.position = "absolute";
		paddedOverlay.style.left = "0";
		paddedOverlay.style.right = "0";
		paddedOverlay.style.top = "0";
		paddedOverlay.style.bottom = "0";
		paddedOverlay.style.margin = CUE_BACKGROUND_PADDING;
		overlay.appendChild(paddedOverlay);
		function shouldCompute(cues) {
			for (var i = 0; i < cues.length; i++) {
				if (cues[i].hasBeenReset || !cues[i].displayState) {
					return true;
				}
			}
			return false;
		}
		if (!shouldCompute(cues)) {
			for (var i = 0; i < cues.length; i++) {
				paddedOverlay.appendChild(cues[i].displayState);
			}
			return;
		}
		var boxPositions = [],
			containerBox = BoxPosition.getSimpleBoxPosition(paddedOverlay),
			fontSize = Math.round(containerBox.height * FONT_SIZE_PERCENT * 100) / 100;
		var styleOptions = {
			font: fontSize + "px " + FONT_STYLE
		};
		(function () {
			var styleBox, cue;
			for (var i = 0; i < cues.length; i++) {
				cue = cues[i];
				styleBox = new CueStyleBox(window, cue, styleOptions);
				paddedOverlay.appendChild(styleBox.div);
				moveBoxToLinePosition(window, styleBox, containerBox, boxPositions);
				cue.displayState = styleBox.div;
				boxPositions.push(BoxPosition.getSimpleBoxPosition(styleBox));
			}
		})();
	};
	WebVTT$1.Parser = function (window, vttjs, decoder) {
		if (!decoder) {
			decoder = vttjs;
			vttjs = {};
		}
		if (!vttjs) {
			vttjs = {};
		}
		this.window = window;
		this.vttjs = vttjs;
		this.state = "INITIAL";
		this.buffer = "";
		this.decoder = decoder || new TextDecoder("utf8");
		this.regionList = [];
	};
	WebVTT$1.Parser.prototype = {
		reportOrThrowError: function reportOrThrowError(e) {
			if (e instanceof ParsingError) {
				this.onparsingerror && this.onparsingerror(e);
			} else {
				throw e;
			}
		},
		parse: function parse(data) {
			var self = this;
			if (data) {
				self.buffer += self.decoder.decode(data, { stream: true });
			}
			function collectNextLine() {
				var buffer = self.buffer;
				var pos = 0;
				while (pos < buffer.length && buffer[pos] !== '\r' && buffer[pos] !== '\n') {
					++pos;
				}
				var line = buffer.substr(0, pos);
				if (buffer[pos] === '\r') {
					++pos;
				}
				if (buffer[pos] === '\n') {
					++pos;
				}
				self.buffer = buffer.substr(pos);
				return line;
			}
			function parseRegion(input) {
				var settings = new Settings();
				parseOptions(input, function (k, v) {
					switch (k) {
						case "id":
							settings.set(k, v);
							break;
						case "width":
							settings.percent(k, v);
							break;
						case "lines":
							settings.integer(k, v);
							break;
						case "regionanchor":
						case "viewportanchor":
							var xy = v.split(',');
							if (xy.length !== 2) {
								break;
							}
							var anchor = new Settings();
							anchor.percent("x", xy[0]);
							anchor.percent("y", xy[1]);
							if (!anchor.has("x") || !anchor.has("y")) {
								break;
							}
							settings.set(k + "X", anchor.get("x"));
							settings.set(k + "Y", anchor.get("y"));
							break;
						case "scroll":
							settings.alt(k, v, ["up"]);
							break;
					}
				}, /=/, /\s/);
				if (settings.has("id")) {
					var region = new (self.vttjs.VTTRegion || self.window.VTTRegion)();
					region.width = settings.get("width", 100);
					region.lines = settings.get("lines", 3);
					region.regionAnchorX = settings.get("regionanchorX", 0);
					region.regionAnchorY = settings.get("regionanchorY", 100);
					region.viewportAnchorX = settings.get("viewportanchorX", 0);
					region.viewportAnchorY = settings.get("viewportanchorY", 100);
					region.scroll = settings.get("scroll", "");
					self.onregion && self.onregion(region);
					self.regionList.push({
						id: settings.get("id"),
						region: region
					});
				}
			}
			function parseTimestampMap(input) {
				var settings = new Settings();
				parseOptions(input, function (k, v) {
					switch (k) {
						case "MPEGT":
							settings.integer(k + 'S', v);
							break;
						case "LOCA":
							settings.set(k + 'L', parseTimeStamp(v));
							break;
					}
				}, /[^\d]:/, /,/);
				self.ontimestampmap && self.ontimestampmap({
					"MPEGTS": settings.get("MPEGTS"),
					"LOCAL": settings.get("LOCAL")
				});
			}
			function parseHeader(input) {
				if (input.match(/X-TIMESTAMP-MAP/)) {
					parseOptions(input, function (k, v) {
						switch (k) {
							case "X-TIMESTAMP-MAP":
								parseTimestampMap(v);
								break;
						}
					}, /=/);
				} else {
					parseOptions(input, function (k, v) {
						switch (k) {
							case "Region":
								parseRegion(v);
								break;
						}
					}, /:/);
				}
			}
			try {
				var line;
				if (self.state === "INITIAL") {
					if (!/\r\n|\n/.test(self.buffer)) {
						return this;
					}
					line = collectNextLine();
					var m = line.match(/^WEBVTT([ \t].*)?$/);
					if (!m || !m[0]) {
						throw new ParsingError(ParsingError.Errors.BadSignature);
					}
					self.state = "HEADER";
				}
				var alreadyCollectedLine = false;
				while (self.buffer) {
					if (!/\r\n|\n/.test(self.buffer)) {
						return this;
					}
					if (!alreadyCollectedLine) {
						line = collectNextLine();
					} else {
						alreadyCollectedLine = false;
					}
					switch (self.state) {
						case "HEADER":
							if (/:/.test(line)) {
								parseHeader(line);
							} else if (!line) {
								self.state = "ID";
							}
							continue;
						case "NOTE":
							if (!line) {
								self.state = "ID";
							}
							continue;
						case "ID":
							if (/^NOTE($|[ \t])/.test(line)) {
								self.state = "NOTE";
								break;
							}
							if (!line) {
								continue;
							}
							self.cue = new (self.vttjs.VTTCue || self.window.VTTCue)(0, 0, "");
							self.state = "CUE";
							if (line.indexOf("-->") === -1) {
								self.cue.id = line;
								continue;
							}
						case "CUE":
							try {
								parseCue(line, self.cue, self.regionList);
							} catch (e) {
								self.reportOrThrowError(e);
								self.cue = null;
								self.state = "BADCUE";
								continue;
							}
							self.state = "CUETEXT";
							continue;
						case "CUETEXT":
							var hasSubstring = line.indexOf("-->") !== -1;
							if (!line || hasSubstring && (alreadyCollectedLine = true)) {
								self.oncue && self.oncue(self.cue);
								self.cue = null;
								self.state = "ID";
								continue;
							}
							if (self.cue.text) {
								self.cue.text += "\n";
							}
							self.cue.text += line;
							continue;
						case "BADCUE":
							if (!line) {
								self.state = "ID";
							}
							continue;
					}
				}
			} catch (e) {
				self.reportOrThrowError(e);
				if (self.state === "CUETEXT" && self.cue && self.oncue) {
					self.oncue(self.cue);
				}
				self.cue = null;
				self.state = self.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
			}
			return this;
		},
		flush: function flush() {
			var self = this;
			try {
				self.buffer += self.decoder.decode();
				if (self.cue || self.state === "HEADER") {
					self.buffer += "\n\n";
					self.parse();
				}
				if (self.state === "INITIAL") {
					throw new ParsingError(ParsingError.Errors.BadSignature);
				}
			} catch (e) {
				self.reportOrThrowError(e);
			}
			self.onflush && self.onflush();
			return this;
		}
	};
	var vtt = WebVTT$1;
	var vtt$1 = Object.freeze({
		default: vtt,
		__moduleExports: vtt
	});
	var autoKeyword = "auto";
	var directionSetting = {
		"": 1,
		"lr": 1,
		"rl": 1
	};
	var alignSetting = {
		"start": 1,
		"middle": 1,
		"end": 1,
		"left": 1,
		"right": 1
	};
	function findDirectionSetting(value) {
		if (typeof value !== "string") {
			return false;
		}
		var dir = directionSetting[value.toLowerCase()];
		return dir ? value.toLowerCase() : false;
	}
	function findAlignSetting(value) {
		if (typeof value !== "string") {
			return false;
		}
		var align = alignSetting[value.toLowerCase()];
		return align ? value.toLowerCase() : false;
	}
	function VTTCue(startTime, endTime, text) {
		this.hasBeenReset = false;
		var _id = "";
		var _pauseOnExit = false;
		var _startTime = startTime;
		var _endTime = endTime;
		var _text = text;
		var _region = null;
		var _vertical = "";
		var _snapToLines = true;
		var _line = "auto";
		var _lineAlign = "start";
		var _position = 50;
		var _positionAlign = "middle";
		var _size = 50;
		var _align = "middle";
		Object.defineProperties(this, {
			"id": {
				enumerable: true,
				get: function get() {
					return _id;
				},
				set: function set(value) {
					_id = "" + value;
				}
			},
			"pauseOnExit": {
				enumerable: true,
				get: function get() {
					return _pauseOnExit;
				},
				set: function set(value) {
					_pauseOnExit = !!value;
				}
			},
			"startTime": {
				enumerable: true,
				get: function get() {
					return _startTime;
				},
				set: function set(value) {
					if (typeof value !== "number") {
						throw new TypeError("Start time must be set to a number.");
					}
					_startTime = value;
					this.hasBeenReset = true;
				}
			},
			"endTime": {
				enumerable: true,
				get: function get() {
					return _endTime;
				},
				set: function set(value) {
					if (typeof value !== "number") {
						throw new TypeError("End time must be set to a number.");
					}
					_endTime = value;
					this.hasBeenReset = true;
				}
			},
			"text": {
				enumerable: true,
				get: function get() {
					return _text;
				},
				set: function set(value) {
					_text = "" + value;
					this.hasBeenReset = true;
				}
			},
			"region": {
				enumerable: true,
				get: function get() {
					return _region;
				},
				set: function set(value) {
					_region = value;
					this.hasBeenReset = true;
				}
			},
			"vertical": {
				enumerable: true,
				get: function get() {
					return _vertical;
				},
				set: function set(value) {
					var setting = findDirectionSetting(value);
					if (setting === false) {
						throw new SyntaxError("An invalid or illegal string was specified.");
					}
					_vertical = setting;
					this.hasBeenReset = true;
				}
			},
			"snapToLines": {
				enumerable: true,
				get: function get() {
					return _snapToLines;
				},
				set: function set(value) {
					_snapToLines = !!value;
					this.hasBeenReset = true;
				}
			},
			"line": {
				enumerable: true,
				get: function get() {
					return _line;
				},
				set: function set(value) {
					if (typeof value !== "number" && value !== autoKeyword) {
						throw new SyntaxError("An invalid number or illegal string was specified.");
					}
					_line = value;
					this.hasBeenReset = true;
				}
			},
			"lineAlign": {
				enumerable: true,
				get: function get() {
					return _lineAlign;
				},
				set: function set(value) {
					var setting = findAlignSetting(value);
					if (!setting) {
						throw new SyntaxError("An invalid or illegal string was specified.");
					}
					_lineAlign = setting;
					this.hasBeenReset = true;
				}
			},
			"position": {
				enumerable: true,
				get: function get() {
					return _position;
				},
				set: function set(value) {
					if (value < 0 || value > 100) {
						throw new Error("Position must be between 0 and 100.");
					}
					_position = value;
					this.hasBeenReset = true;
				}
			},
			"positionAlign": {
				enumerable: true,
				get: function get() {
					return _positionAlign;
				},
				set: function set(value) {
					var setting = findAlignSetting(value);
					if (!setting) {
						throw new SyntaxError("An invalid or illegal string was specified.");
					}
					_positionAlign = setting;
					this.hasBeenReset = true;
				}
			},
			"size": {
				enumerable: true,
				get: function get() {
					return _size;
				},
				set: function set(value) {
					if (value < 0 || value > 100) {
						throw new Error("Size must be between 0 and 100.");
					}
					_size = value;
					this.hasBeenReset = true;
				}
			},
			"align": {
				enumerable: true,
				get: function get() {
					return _align;
				},
				set: function set(value) {
					var setting = findAlignSetting(value);
					if (!setting) {
						throw new SyntaxError("An invalid or illegal string was specified.");
					}
					_align = setting;
					this.hasBeenReset = true;
				}
			}
		});
		this.displayState = undefined;
	}
	VTTCue.prototype.getCueAsHTML = function () {
		return WebVTT.convertCueToDOMTree(window, this.text);
	};
	var vttcue = VTTCue;
	var vttcue$1 = Object.freeze({
		default: vttcue,
		__moduleExports: vttcue
	});
	var scrollSetting = {
		"": true,
		"up": true
	};
	function findScrollSetting(value) {
		if (typeof value !== "string") {
			return false;
		}
		var scroll = scrollSetting[value.toLowerCase()];
		return scroll ? value.toLowerCase() : false;
	}
	function isValidPercentValue(value) {
		return typeof value === "number" && value >= 0 && value <= 100;
	}
	function VTTRegion() {
		var _width = 100;
		var _lines = 3;
		var _regionAnchorX = 0;
		var _regionAnchorY = 100;
		var _viewportAnchorX = 0;
		var _viewportAnchorY = 100;
		var _scroll = "";
		Object.defineProperties(this, {
			"width": {
				enumerable: true,
				get: function get() {
					return _width;
				},
				set: function set(value) {
					if (!isValidPercentValue(value)) {
						throw new Error("Width must be between 0 and 100.");
					}
					_width = value;
				}
			},
			"lines": {
				enumerable: true,
				get: function get() {
					return _lines;
				},
				set: function set(value) {
					if (typeof value !== "number") {
						throw new TypeError("Lines must be set to a number.");
					}
					_lines = value;
				}
			},
			"regionAnchorY": {
				enumerable: true,
				get: function get() {
					return _regionAnchorY;
				},
				set: function set(value) {
					if (!isValidPercentValue(value)) {
						throw new Error("RegionAnchorX must be between 0 and 100.");
					}
					_regionAnchorY = value;
				}
			},
			"regionAnchorX": {
				enumerable: true,
				get: function get() {
					return _regionAnchorX;
				},
				set: function set(value) {
					if (!isValidPercentValue(value)) {
						throw new Error("RegionAnchorY must be between 0 and 100.");
					}
					_regionAnchorX = value;
				}
			},
			"viewportAnchorY": {
				enumerable: true,
				get: function get() {
					return _viewportAnchorY;
				},
				set: function set(value) {
					if (!isValidPercentValue(value)) {
						throw new Error("ViewportAnchorY must be between 0 and 100.");
					}
					_viewportAnchorY = value;
				}
			},
			"viewportAnchorX": {
				enumerable: true,
				get: function get() {
					return _viewportAnchorX;
				},
				set: function set(value) {
					if (!isValidPercentValue(value)) {
						throw new Error("ViewportAnchorX must be between 0 and 100.");
					}
					_viewportAnchorX = value;
				}
			},
			"scroll": {
				enumerable: true,
				get: function get() {
					return _scroll;
				},
				set: function set(value) {
					var setting = findScrollSetting(value);
					if (setting === false) {
						throw new SyntaxError("An invalid or illegal string was specified.");
					}
					_scroll = setting;
				}
			}
		});
	}
	var vttregion = VTTRegion;
	var vttregion$1 = Object.freeze({
		default: vttregion,
		__moduleExports: vttregion
	});
	var require$$0 = (vtt$1 && vtt) || vtt$1;
	var require$$1 = (vttcue$1 && vttcue) || vttcue$1;
	var require$$2 = (vttregion$1 && vttregion) || vttregion$1;
	var browserIndex = createCommonjsModule(function (module) {
		var vttjs = module.exports = {
			WebVTT: require$$0,
			VTTCue: require$$1,
			VTTRegion: require$$2
		};
		window_1.vttjs = vttjs;
		window_1.WebVTT = vttjs.WebVTT;
		var cueShim = vttjs.VTTCue;
		var regionShim = vttjs.VTTRegion;
		var nativeVTTCue = window_1.VTTCue;
		var nativeVTTRegion = window_1.VTTRegion;
		vttjs.shim = function () {
			window_1.VTTCue = cueShim;
			window_1.VTTRegion = regionShim;
		};
		vttjs.restore = function () {
			window_1.VTTCue = nativeVTTCue;
			window_1.VTTRegion = nativeVTTRegion;
		};
		if (!window_1.VTTCue) {
			vttjs.shim();
		}
	});
	var browserIndex_1 = browserIndex.WebVTT;
	var browserIndex_2 = browserIndex.VTTCue;
	var browserIndex_3 = browserIndex.VTTRegion;
	function createTrackHelper(self, kind, label, language) {
		var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
		var tracks = self.textTracks();
		options.kind = kind;
		if (label) {
			options.label = label;
		}
		if (language) {
			options.language = language;
		}
		options.tech = self;
		var track = new ALL.text.TrackClass(options);
		tracks.addTrack(track);
		return track;
	}
	var Tech = function (_Component) {
		inherits(Tech, _Component);
		function Tech() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var ready = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () { };
			classCallCheck(this, Tech);
			options.reportTouchActivity = false;
			var _this = possibleConstructorReturn(this, _Component.call(this, null, options, ready));
			_this.hasStarted_ = false;
			_this.on('playing', function () {
				this.hasStarted_ = true;
			});
			_this.on('loadstart', function () {
				this.hasStarted_ = false;
			});
			ALL.names.forEach(function (name) {
				var props = ALL[name];
				if (options && options[props.getterName]) {
					_this[props.privateName] = options[props.getterName];
				}
			});
			if (!_this.featuresProgressEvents) {
				_this.manualProgressOn();
			}
			if (!_this.featuresTimeupdateEvents) {
				_this.manualTimeUpdatesOn();
			}
			['Text', 'Audio', 'Video'].forEach(function (track) {
				if (options['native' + track + 'Tracks'] === false) {
					_this['featuresNative' + track + 'Tracks'] = false;
				}
			});
			if (options.nativeCaptions === false || options.nativeTextTracks === false) {
				_this.featuresNativeTextTracks = false;
			} else if (options.nativeCaptions === true || options.nativeTextTracks === true) {
				_this.featuresNativeTextTracks = true;
			}
			if (!_this.featuresNativeTextTracks) {
				_this.emulateTextTracks();
			}
			_this.autoRemoteTextTracks_ = new ALL.text.ListClass();
			_this.initTrackListeners();
			if (!options.nativeControlsForTouch) {
				_this.emitTapEvents();
			}
			if (_this.constructor) {
				_this.name_ = _this.constructor.name || 'Unknown Tech';
			}
			return _this;
		}
		Tech.prototype.triggerSourceset = function triggerSourceset(src) {
			var _this2 = this;
			if (!this.isReady_) {
				this.one('ready', function () {
					return _this2.setTimeout(function () {
						return _this2.triggerSourceset(src);
					}, 1);
				});
			}
			this.trigger({
				src: src,
				type: 'sourceset'
			});
		};
		Tech.prototype.manualProgressOn = function manualProgressOn() {
			this.on('durationchange', this.onDurationChange);
			this.manualProgress = true;
			this.one('ready', this.trackProgress);
		};
		Tech.prototype.manualProgressOff = function manualProgressOff() {
			this.manualProgress = false;
			this.stopTrackingProgress();
			this.off('durationchange', this.onDurationChange);
		};
		Tech.prototype.trackProgress = function trackProgress(event) {
			this.stopTrackingProgress();
			this.progressInterval = this.setInterval(bind(this, function () {
				var numBufferedPercent = this.bufferedPercent();
				if (this.bufferedPercent_ !== numBufferedPercent) {
					this.trigger('progress');
				}
				this.bufferedPercent_ = numBufferedPercent;
				if (numBufferedPercent === 1) {
					this.stopTrackingProgress();
				}
			}), 500);
		};
		Tech.prototype.onDurationChange = function onDurationChange(event) {
			this.duration_ = this.duration();
		};
		Tech.prototype.buffered = function buffered() {
			return createTimeRanges(0, 0);
		};
		Tech.prototype.bufferedPercent = function bufferedPercent$$1() {
			return bufferedPercent(this.buffered(), this.duration_);
		};
		Tech.prototype.stopTrackingProgress = function stopTrackingProgress() {
			this.clearInterval(this.progressInterval);
		};
		Tech.prototype.manualTimeUpdatesOn = function manualTimeUpdatesOn() {
			this.manualTimeUpdates = true;
			this.on('play', this.trackCurrentTime);
			this.on('pause', this.stopTrackingCurrentTime);
		};
		Tech.prototype.manualTimeUpdatesOff = function manualTimeUpdatesOff() {
			this.manualTimeUpdates = false;
			this.stopTrackingCurrentTime();
			this.off('play', this.trackCurrentTime);
			this.off('pause', this.stopTrackingCurrentTime);
		};
		Tech.prototype.trackCurrentTime = function trackCurrentTime() {
			if (this.currentTimeInterval) {
				this.stopTrackingCurrentTime();
			}
			this.currentTimeInterval = this.setInterval(function () {
				this.trigger({ type: 'timeupdate', target: this, manuallyTriggered: true });
			}, 250);
		};
		Tech.prototype.stopTrackingCurrentTime = function stopTrackingCurrentTime() {
			this.clearInterval(this.currentTimeInterval);
			this.trigger({ type: 'timeupdate', target: this, manuallyTriggered: true });
		};
		Tech.prototype.dispose = function dispose() {
			this.clearTracks(NORMAL.names);
			if (this.manualProgress) {
				this.manualProgressOff();
			}
			if (this.manualTimeUpdates) {
				this.manualTimeUpdatesOff();
			}
			_Component.prototype.dispose.call(this);
		};
		Tech.prototype.clearTracks = function clearTracks(types) {
			var _this3 = this;
			types = [].concat(types);
			types.forEach(function (type) {
				var list = _this3[type + 'Tracks']() || [];
				var i = list.length;
				while (i--) {
					var track = list[i];
					if (type === 'text') {
						_this3.removeRemoteTextTrack(track);
					}
					list.removeTrack(track);
				}
			});
		};
		Tech.prototype.cleanupAutoTextTracks = function cleanupAutoTextTracks() {
			var list = this.autoRemoteTextTracks_ || [];
			var i = list.length;
			while (i--) {
				var track = list[i];
				this.removeRemoteTextTrack(track);
			}
		};
		Tech.prototype.reset = function reset() { };
		Tech.prototype.error = function error(err) {
			if (err !== undefined) {
				this.error_ = new MediaError(err);
				this.trigger('error');
			}
			return this.error_;
		};
		Tech.prototype.played = function played() {
			if (this.hasStarted_) {
				return createTimeRanges(0, 0);
			}
			return createTimeRanges();
		};
		Tech.prototype.setCurrentTime = function setCurrentTime() {
			if (this.manualTimeUpdates) {
				this.trigger({ type: 'timeupdate', target: this, manuallyTriggered: true });
			}
		};
		Tech.prototype.initTrackListeners = function initTrackListeners() {
			var _this4 = this;
			NORMAL.names.forEach(function (name) {
				var props = NORMAL[name];
				var trackListChanges = function trackListChanges() {
					_this4.trigger(name + 'trackchange');
				};
				var tracks = _this4[props.getterName]();
				tracks.addEventListener('removetrack', trackListChanges);
				tracks.addEventListener('addtrack', trackListChanges);
				_this4.on('dispose', function () {
					tracks.removeEventListener('removetrack', trackListChanges);
					tracks.removeEventListener('addtrack', trackListChanges);
				});
			});
		};
		Tech.prototype.addWebVttScript_ = function addWebVttScript_() {
			var _this5 = this;
			if (window_1.WebVTT) {
				return;
			}
			if (document_1.body.contains(this.el())) {
				if (!this.options_['vtt.js'] && isPlain(browserIndex) && Object.keys(browserIndex).length > 0) {
					this.trigger('vttjsloaded');
					return;
				}
				var script = document_1.createElement('script');
				script.src = this.options_['vtt.js'] || 'https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js';
				script.onload = function () {
					_this5.trigger('vttjsloaded');
				};
				script.onerror = function () {
					_this5.trigger('vttjserror');
				};
				this.on('dispose', function () {
					script.onload = null;
					script.onerror = null;
				});
				window_1.WebVTT = true;
				this.el().parentNode.appendChild(script);
			} else {
				this.ready(this.addWebVttScript_);
			}
		};
		Tech.prototype.emulateTextTracks = function emulateTextTracks() {
			var _this6 = this;
			var tracks = this.textTracks();
			var remoteTracks = this.remoteTextTracks();
			var handleAddTrack = function handleAddTrack(e) {
				return tracks.addTrack(e.track);
			};
			var handleRemoveTrack = function handleRemoveTrack(e) {
				return tracks.removeTrack(e.track);
			};
			remoteTracks.on('addtrack', handleAddTrack);
			remoteTracks.on('removetrack', handleRemoveTrack);
			this.addWebVttScript_();
			var updateDisplay = function updateDisplay() {
				return _this6.trigger('texttrackchange');
			};
			var textTracksChanges = function textTracksChanges() {
				updateDisplay();
				for (var i = 0; i < tracks.length; i++) {
					var track = tracks[i];
					track.removeEventListener('cuechange', updateDisplay);
					if (track.mode === 'showing') {
						track.addEventListener('cuechange', updateDisplay);
					}
				}
			};
			textTracksChanges();
			tracks.addEventListener('change', textTracksChanges);
			tracks.addEventListener('addtrack', textTracksChanges);
			tracks.addEventListener('removetrack', textTracksChanges);
			this.on('dispose', function () {
				remoteTracks.off('addtrack', handleAddTrack);
				remoteTracks.off('removetrack', handleRemoveTrack);
				tracks.removeEventListener('change', textTracksChanges);
				tracks.removeEventListener('addtrack', textTracksChanges);
				tracks.removeEventListener('removetrack', textTracksChanges);
				for (var i = 0; i < tracks.length; i++) {
					var track = tracks[i];
					track.removeEventListener('cuechange', updateDisplay);
				}
			});
		};
		Tech.prototype.addTextTrack = function addTextTrack(kind, label, language) {
			if (!kind) {
				throw new Error('TextTrack kind is required but was not provided');
			}
			return createTrackHelper(this, kind, label, language);
		};
		Tech.prototype.createRemoteTextTrack = function createRemoteTextTrack(options) {
			var track = mergeOptions(options, {
				tech: this
			});
			return new REMOTE.remoteTextEl.TrackClass(track);
		};
		Tech.prototype.addRemoteTextTrack = function addRemoteTextTrack() {
			var _this7 = this;
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var manualCleanup = arguments[1];
			var htmlTrackElement = this.createRemoteTextTrack(options);
			if (manualCleanup !== true && manualCleanup !== false) {
				log$1.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js');
				manualCleanup = true;
			}
			this.remoteTextTrackEls().addTrackElement_(htmlTrackElement);
			this.remoteTextTracks().addTrack(htmlTrackElement.track);
			if (manualCleanup !== true) {
				this.ready(function () {
					return _this7.autoRemoteTextTracks_.addTrack(htmlTrackElement.track);
				});
			}
			return htmlTrackElement;
		};
		Tech.prototype.removeRemoteTextTrack = function removeRemoteTextTrack(track) {
			var trackElement = this.remoteTextTrackEls().getTrackElementByTrack_(track);
			this.remoteTextTrackEls().removeTrackElement_(trackElement);
			this.remoteTextTracks().removeTrack(track);
			this.autoRemoteTextTracks_.removeTrack(track);
		};
		Tech.prototype.getVideoPlaybackQuality = function getVideoPlaybackQuality() {
			return {};
		};
		Tech.prototype.setPoster = function setPoster() { };
		Tech.prototype.playsinline = function playsinline() { };
		Tech.prototype.setPlaysinline = function setPlaysinline() { };
		Tech.prototype.overrideNativeAudioTracks = function overrideNativeAudioTracks() { };
		Tech.prototype.overrideNativeVideoTracks = function overrideNativeVideoTracks() { };
		Tech.prototype.canPlayType = function canPlayType() {
			return '';
		};
		Tech.canPlayType = function canPlayType() {
			return '';
		};
		Tech.canPlaySource = function canPlaySource(srcObj, options) {
			return Tech.canPlayType(srcObj.type);
		};
		Tech.isTech = function isTech(component) {
			return component.prototype instanceof Tech || component instanceof Tech || component === Tech;
		};
		Tech.registerTech = function registerTech(name, tech) {
			if (!Tech.techs_) {
				Tech.techs_ = {};
			}
			if (!Tech.isTech(tech)) {
				throw new Error('Tech ' + name + ' must be a Tech');
			}
			if (!Tech.canPlayType) {
				throw new Error('Techs must have a static canPlayType method on them');
			}
			if (!Tech.canPlaySource) {
				throw new Error('Techs must have a static canPlaySource method on them');
			}
			name = toTitleCase(name);
			Tech.techs_[name] = tech;
			if (name !== 'Tech') {
				Tech.defaultTechOrder_.push(name);
			}
			return tech;
		};
		Tech.getTech = function getTech(name) {
			if (!name) {
				return;
			}
			name = toTitleCase(name);
			if (Tech.techs_ && Tech.techs_[name]) {
				return Tech.techs_[name];
			}
			if (window_1 && window_1.videojs && window_1.videojs[name]) {
				log$1.warn('The ' + name + ' tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)');
				return window_1.videojs[name];
			}
		};
		return Tech;
	}(Component);
	ALL.names.forEach(function (name) {
		var props = ALL[name];
		Tech.prototype[props.getterName] = function () {
			this[props.privateName] = this[props.privateName] || new props.ListClass();
			return this[props.privateName];
		};
	});
	Tech.prototype.featuresVolumeControl = true;
	Tech.prototype.featuresMuteControl = true;
	Tech.prototype.featuresFullscreenResize = false;
	Tech.prototype.featuresPlaybackRate = false;
	Tech.prototype.featuresProgressEvents = false;
	Tech.prototype.featuresSourceset = false;
	Tech.prototype.featuresTimeupdateEvents = false;
	Tech.prototype.featuresNativeTextTracks = false;
	Tech.withSourceHandlers = function (_Tech) {
		_Tech.registerSourceHandler = function (handler, index) {
			var handlers = _Tech.sourceHandlers;
			if (!handlers) {
				handlers = _Tech.sourceHandlers = [];
			}
			if (index === undefined) {
				index = handlers.length;
			}
			handlers.splice(index, 0, handler);
		};
		_Tech.canPlayType = function (type) {
			var handlers = _Tech.sourceHandlers || [];
			var can = void 0;
			for (var i = 0; i < handlers.length; i++) {
				can = handlers[i].canPlayType(type);
				if (can) {
					return can;
				}
			}
			return '';
		};
		_Tech.selectSourceHandler = function (source, options) {
			var handlers = _Tech.sourceHandlers || [];
			var can = void 0;
			for (var i = 0; i < handlers.length; i++) {
				can = handlers[i].canHandleSource(source, options);
				if (can) {
					return handlers[i];
				}
			}
			return null;
		};
		_Tech.canPlaySource = function (srcObj, options) {
			var sh = _Tech.selectSourceHandler(srcObj, options);
			if (sh) {
				return sh.canHandleSource(srcObj, options);
			}
			return '';
		};
		var deferrable = ['seekable', 'seeking', 'duration'];
		deferrable.forEach(function (fnName) {
			var originalFn = this[fnName];
			if (typeof originalFn !== 'function') {
				return;
			}
			this[fnName] = function () {
				if (this.sourceHandler_ && this.sourceHandler_[fnName]) {
					return this.sourceHandler_[fnName].apply(this.sourceHandler_, arguments);
				}
				return originalFn.apply(this, arguments);
			};
		}, _Tech.prototype);
		_Tech.prototype.setSource = function (source) {
			var sh = _Tech.selectSourceHandler(source, this.options_);
			if (!sh) {
				if (_Tech.nativeSourceHandler) {
					sh = _Tech.nativeSourceHandler;
				} else {
					log$1.error('No source handler found for the current source.');
				}
			}
			this.disposeSourceHandler();
			this.off('dispose', this.disposeSourceHandler);
			if (sh !== _Tech.nativeSourceHandler) {
				this.currentSource_ = source;
			}
			this.sourceHandler_ = sh.handleSource(source, this, this.options_);
			this.on('dispose', this.disposeSourceHandler);
		};
		_Tech.prototype.disposeSourceHandler = function () {
			if (this.currentSource_) {
				this.clearTracks(['audio', 'video']);
				this.currentSource_ = null;
			}
			this.cleanupAutoTextTracks();
			if (this.sourceHandler_) {
				if (this.sourceHandler_.dispose) {
					this.sourceHandler_.dispose();
				}
				this.sourceHandler_ = null;
			}
		};
	};
	Component.registerComponent('Tech', Tech);
	Tech.registerTech('Tech', Tech);
	Tech.defaultTechOrder_ = [];
	var middlewares = {};
	var middlewareInstances = {};
	var TERMINATOR = {};
	function use(type, middleware) {
		middlewares[type] = middlewares[type] || [];
		middlewares[type].push(middleware);
	}
	function setSource(player, src, next) {
		player.setTimeout(function () {
			return setSourceHelper(src, middlewares[src.type], next, player);
		}, 1);
	}
	function setTech(middleware, tech) {
		middleware.forEach(function (mw) {
			return mw.setTech && mw.setTech(tech);
		});
	}
	function get$1(middleware, tech, method) {
		return middleware.reduceRight(middlewareIterator(method), tech[method]());
	}
	function set$1(middleware, tech, method, arg) {
		return tech[method](middleware.reduce(middlewareIterator(method), arg));
	}
	function mediate(middleware, tech, method) {
		var arg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
		var callMethod = 'call' + toTitleCase(method);
		var middlewareValue = middleware.reduce(middlewareIterator(callMethod), arg);
		var terminated = middlewareValue === TERMINATOR;
		var returnValue = terminated ? null : tech[method](middlewareValue);
		executeRight(middleware, method, returnValue, terminated);
		return returnValue;
	}
	var allowedGetters = {
		buffered: 1,
		currentTime: 1,
		duration: 1,
		seekable: 1,
		played: 1,
		paused: 1
	};
	var allowedSetters = {
		setCurrentTime: 1
	};
	var allowedMediators = {
		play: 1,
		pause: 1
	};
	function middlewareIterator(method) {
		return function (value, mw) {
			if (value === TERMINATOR) {
				return TERMINATOR;
			}
			if (mw[method]) {
				return mw[method](value);
			}
			return value;
		};
	}
	function executeRight(mws, method, value, terminated) {
		for (var i = mws.length - 1; i >= 0; i--) {
			var mw = mws[i];
			if (mw[method]) {
				mw[method](terminated, value);
			}
		}
	}
	function clearCacheForPlayer(player) {
		middlewareInstances[player.id()] = null;
	}
	function getOrCreateFactory(player, mwFactory) {
		var mws = middlewareInstances[player.id()];
		var mw = null;
		if (mws === undefined || mws === null) {
			mw = mwFactory(player);
			middlewareInstances[player.id()] = [[mwFactory, mw]];
			return mw;
		}
		for (var i = 0; i < mws.length; i++) {
			var _mws$i = mws[i],
				mwf = _mws$i[0],
				mwi = _mws$i[1];
			if (mwf !== mwFactory) {
				continue;
			}
			mw = mwi;
		}
		if (mw === null) {
			mw = mwFactory(player);
			mws.push([mwFactory, mw]);
		}
		return mw;
	}
	function setSourceHelper() {
		var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		var next = arguments[2];
		var player = arguments[3];
		var acc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
		var lastRun = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
		var mwFactory = middleware[0],
			mwrest = middleware.slice(1);
		if (typeof mwFactory === 'string') {
			setSourceHelper(src, middlewares[mwFactory], next, player, acc, lastRun);
		} else if (mwFactory) {
			var mw = getOrCreateFactory(player, mwFactory);
			if (!mw.setSource) {
				acc.push(mw);
				return setSourceHelper(src, mwrest, next, player, acc, lastRun);
			}
			mw.setSource(assign({}, src), function (err, _src) {
				if (err) {
					return setSourceHelper(src, mwrest, next, player, acc, lastRun);
				}
				acc.push(mw);
				setSourceHelper(_src, src.type === _src.type ? mwrest : middlewares[_src.type], next, player, acc, lastRun);
			});
		} else if (mwrest.length) {
			setSourceHelper(src, mwrest, next, player, acc, lastRun);
		} else if (lastRun) {
			next(src, acc);
		} else {
			setSourceHelper(src, middlewares['*'], next, player, acc, true);
		}
	}
	var MimetypesKind = {
		opus: 'video/ogg',
		ogv: 'video/ogg',
		mp4: 'video/mp4',
		mov: 'video/mp4',
		m4v: 'video/mp4',
		mkv: 'video/x-matroska',
		mp3: 'audio/mpeg',
		aac: 'audio/aac',
		oga: 'audio/ogg',
		m3u8: 'application/x-mpegURL'
	};
	var getMimetype = function getMimetype() {
		var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		var ext = getFileExtension(src);
		var mimetype = MimetypesKind[ext.toLowerCase()];
		return mimetype || '';
	};
	var findMimetype = function findMimetype(player, src) {
		if (!src) {
			return '';
		}
		if (player.cache_.source.src === src && player.cache_.source.type) {
			return player.cache_.source.type;
		}
		var matchingSources = player.cache_.sources.filter(function (s) {
			return s.src === src;
		});
		if (matchingSources.length) {
			return matchingSources[0].type;
		}
		var sources = player.$$('source');
		for (var i = 0; i < sources.length; i++) {
			var s = sources[i];
			if (s.type && s.src && s.src === src) {
				return s.type;
			}
		}
		return getMimetype(src);
	};
	var filterSource = function filterSource(src) {
		if (Array.isArray(src)) {
			var newsrc = [];
			src.forEach(function (srcobj) {
				srcobj = filterSource(srcobj);
				if (Array.isArray(srcobj)) {
					newsrc = newsrc.concat(srcobj);
				} else if (isObject(srcobj)) {
					newsrc.push(srcobj);
				}
			});
			src = newsrc;
		} else if (typeof src === 'string' && src.trim()) {
			src = [fixSource({ src: src })];
		} else if (isObject(src) && typeof src.src === 'string' && src.src && src.src.trim()) {
			src = [fixSource(src)];
		} else {
			src = [];
		}
		return src;
	};
	function fixSource(src) {
		var mimetype = getMimetype(src.src);
		if (!src.type && mimetype) {
			src.type = mimetype;
		}
		return src;
	}
	var MediaLoader = function (_Component) {
		inherits(MediaLoader, _Component);
		function MediaLoader(player, options, ready) {
			classCallCheck(this, MediaLoader);
			var options_ = mergeOptions({ createEl: false }, options);
			var _this = possibleConstructorReturn(this, _Component.call(this, player, options_, ready));
			if (!options.playerOptions.sources || options.playerOptions.sources.length === 0) {
				for (var i = 0, j = options.playerOptions.techOrder; i < j.length; i++) {
					var techName = toTitleCase(j[i]);
					var tech = Tech.getTech(techName);
					if (!techName) {
						tech = Component.getComponent(techName);
					}
					if (tech && tech.isSupported()) {
						player.loadTech_(techName);
						break;
					}
				}
			} else {
				player.src(options.playerOptions.sources);
			}
			return _this;
		}
		return MediaLoader;
	}(Component);
	Component.registerComponent('MediaLoader', MediaLoader);
	var ClickableComponent = function (_Component) {
		inherits(ClickableComponent, _Component);
		function ClickableComponent(player, options) {
			classCallCheck(this, ClickableComponent);
			var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
			_this.emitTapEvents();
			_this.enable();
			return _this;
		}
		ClickableComponent.prototype.createEl = function createEl$$1() {
			var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
			var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			props = assign({
				innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
				className: this.buildCSSClass(),
				tabIndex: 0
			}, props);
			if (tag === 'button') {
				log$1.error('Creating a ClickableComponent with an HTML element of ' + tag + ' is not supported; use a Button instead.');
			}
			attributes = assign({
				role: 'button'
			}, attributes);
			this.tabIndex_ = props.tabIndex;
			var el = _Component.prototype.createEl.call(this, tag, props, attributes);
			this.createControlTextEl(el);
			return el;
		};
		ClickableComponent.prototype.dispose = function dispose() {
			this.controlTextEl_ = null;
			_Component.prototype.dispose.call(this);
		};
		ClickableComponent.prototype.createControlTextEl = function createControlTextEl(el) {
			this.controlTextEl_ = createEl('span', {
				className: 'vjs-control-text'
			}, {
				'aria-live': 'polite'
			});
			if (el) {
				el.appendChild(this.controlTextEl_);
			}
			this.controlText(this.controlText_, el);
			return this.controlTextEl_;
		};
		ClickableComponent.prototype.controlText = function controlText(text) {
			var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.el();
			if (text === undefined) {
				return this.controlText_ || 'Need Text';
			}
			var localizedText = this.localize(text);
			this.controlText_ = text;
			textContent(this.controlTextEl_, localizedText);
			if (!this.nonIconControl) {
				el.setAttribute('title', localizedText);
			}
		};
		ClickableComponent.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-control vjs-button ' + _Component.prototype.buildCSSClass.call(this);
		};
		ClickableComponent.prototype.enable = function enable() {
			if (!this.enabled_) {
				this.enabled_ = true;
				this.removeClass('vjs-disabled');
				this.el_.setAttribute('aria-disabled', 'false');
				if (typeof this.tabIndex_ !== 'undefined') {
					this.el_.setAttribute('tabIndex', this.tabIndex_);
				}
				this.on(['tap', 'click'], this.handleClick);
				this.on('focus', this.handleFocus);
				this.on('blur', this.handleBlur);
			}
		};
		ClickableComponent.prototype.disable = function disable() {
			this.enabled_ = false;
			this.addClass('vjs-disabled');
			this.el_.setAttribute('aria-disabled', 'true');
			if (typeof this.tabIndex_ !== 'undefined') {
				this.el_.removeAttribute('tabIndex');
			}
			this.off(['tap', 'click'], this.handleClick);
			this.off('focus', this.handleFocus);
			this.off('blur', this.handleBlur);
		};
		ClickableComponent.prototype.handleClick = function handleClick(event) { };
		ClickableComponent.prototype.handleFocus = function handleFocus(event) {
			on(document_1, 'keydown', bind(this, this.handleKeyPress));
		};
		ClickableComponent.prototype.handleKeyPress = function handleKeyPress(event) {
			if (event.which === 32 || event.which === 13) {
				event.preventDefault();
				this.trigger('click');
			} else if (_Component.prototype.handleKeyPress) {
				_Component.prototype.handleKeyPress.call(this, event);
			}
		};
		ClickableComponent.prototype.handleBlur = function handleBlur(event) {
			off(document_1, 'keydown', bind(this, this.handleKeyPress));
		};
		return ClickableComponent;
	}(Component);
	Component.registerComponent('ClickableComponent', ClickableComponent);
	var PosterImage = function (_ClickableComponent) {
		inherits(PosterImage, _ClickableComponent);
		function PosterImage(player, options) {
			classCallCheck(this, PosterImage);
			var _this = possibleConstructorReturn(this, _ClickableComponent.call(this, player, options));
			_this.update();
			player.on('posterchange', bind(_this, _this.update));
			return _this;
		}
		PosterImage.prototype.dispose = function dispose() {
			this.player().off('posterchange', this.update);
			_ClickableComponent.prototype.dispose.call(this);
		};
		PosterImage.prototype.createEl = function createEl$$1() {
			var el = createEl('div', {
				className: 'vjs-poster',
				tabIndex: -1
			});
			return el;
		};
		PosterImage.prototype.update = function update(event) {
			var url = this.player().poster();
			this.setSrc(url);
			if (url) {
				this.show();
			} else {
				this.hide();
			}
		};
		PosterImage.prototype.setSrc = function setSrc(url) {
			var backgroundImage = '';
			if (url) {
				backgroundImage = 'url("' + url + '")';
			}
			this.el_.style.backgroundImage = backgroundImage;
		};
		PosterImage.prototype.handleClick = function handleClick(event) {
			if (!this.player_.controls()) {
				return;
			}
			if (this.player_.paused()) {
				silencePromise(this.player_.play());
			} else {
				this.player_.pause();
			}
		};
		return PosterImage;
	}(ClickableComponent);
	Component.registerComponent('PosterImage', PosterImage);
	var darkGray = '#222';
	var lightGray = '#ccc';
	var fontMap = {
		monospace: 'monospace',
		sansSerif: 'sans-serif',
		serif: 'serif',
		monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
		monospaceSerif: '"Courier New", monospace',
		proportionalSansSerif: 'sans-serif',
		proportionalSerif: 'serif',
		casual: '"Comic Sans MS", Impact, fantasy',
		script: '"Monotype Corsiva", cursive',
		smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
	};
	function constructColor(color, opacity) {
		var hex = void 0;
		if (color.length === 4) {
			hex = color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
		} else if (color.length === 7) {
			hex = color.slice(1);
		} else {
			throw new Error('Invalid color code provided, ' + color + '; must be formatted as e.g. #f0e or #f604e2.');
		}
		return 'rgba(' + parseInt(hex.slice(0, 2), 16) + ',' + parseInt(hex.slice(2, 4), 16) + ',' + parseInt(hex.slice(4, 6), 16) + ',' + opacity + ')';
	}
	function tryUpdateStyle(el, style, rule) {
		try {
			el.style[style] = rule;
		} catch (e) {
			return;
		}
	}
	var TextTrackDisplay = function (_Component) {
		inherits(TextTrackDisplay, _Component);
		function TextTrackDisplay(player, options, ready) {
			classCallCheck(this, TextTrackDisplay);
			var _this = possibleConstructorReturn(this, _Component.call(this, player, options, ready));
			player.on('loadstart', bind(_this, _this.toggleDisplay));
			player.on('texttrackchange', bind(_this, _this.updateDisplay));
			player.on('loadstart', bind(_this, _this.preselectTrack));
			player.ready(bind(_this, function () {
				if (player.tech_ && player.tech_.featuresNativeTextTracks) {
					this.hide();
					return;
				}
				player.on('fullscreenchange', bind(this, this.updateDisplay));
				var tracks = this.options_.playerOptions.tracks || [];
				for (var i = 0; i < tracks.length; i++) {
					this.player_.addRemoteTextTrack(tracks[i], true);
				}
				this.preselectTrack();
			}));
			return _this;
		}
		TextTrackDisplay.prototype.preselectTrack = function preselectTrack() {
			var modes = { captions: 1, subtitles: 1 };
			var trackList = this.player_.textTracks();
			var userPref = this.player_.cache_.selectedLanguage;
			var firstDesc = void 0;
			var firstCaptions = void 0;
			var preferredTrack = void 0;
			for (var i = 0; i < trackList.length; i++) {
				var track = trackList[i];
				if (userPref && userPref.enabled && userPref.language === track.language) {
					if (track.kind === userPref.kind) {
						preferredTrack = track;
					} else if (!preferredTrack) {
						preferredTrack = track;
					}
				} else if (userPref && !userPref.enabled) {
					preferredTrack = null;
					firstDesc = null;
					firstCaptions = null;
				} else if (track.default) {
					if (track.kind === 'descriptions' && !firstDesc) {
						firstDesc = track;
					} else if (track.kind in modes && !firstCaptions) {
						firstCaptions = track;
					}
				}
			}
			if (preferredTrack) {
				preferredTrack.mode = 'showing';
			} else if (firstCaptions) {
				firstCaptions.mode = 'showing';
			} else if (firstDesc) {
				firstDesc.mode = 'showing';
			}
		};
		TextTrackDisplay.prototype.toggleDisplay = function toggleDisplay() {
			if (this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks) {
				this.hide();
			} else {
				this.show();
			}
		};
		TextTrackDisplay.prototype.createEl = function createEl() {
			return _Component.prototype.createEl.call(this, 'div', {
				className: 'vjs-text-track-display'
			}, {
				'aria-live': 'off',
				'aria-atomic': 'true'
			});
		};
		TextTrackDisplay.prototype.clearDisplay = function clearDisplay() {
			if (typeof window_1.WebVTT === 'function') {
				window_1.WebVTT.processCues(window_1, [], this.el_);
			}
		};
		TextTrackDisplay.prototype.updateDisplay = function updateDisplay() {
			var tracks = this.player_.textTracks();
			this.clearDisplay();
			var descriptionsTrack = null;
			var captionsSubtitlesTrack = null;
			var i = tracks.length;
			while (i--) {
				var track = tracks[i];
				if (track.mode === 'showing') {
					if (track.kind === 'descriptions') {
						descriptionsTrack = track;
					} else {
						captionsSubtitlesTrack = track;
					}
				}
			}
			if (captionsSubtitlesTrack) {
				if (this.getAttribute('aria-live') !== 'off') {
					this.setAttribute('aria-live', 'off');
				}
				this.updateForTrack(captionsSubtitlesTrack);
			} else if (descriptionsTrack) {
				if (this.getAttribute('aria-live') !== 'assertive') {
					this.setAttribute('aria-live', 'assertive');
				}
				this.updateForTrack(descriptionsTrack);
			}
		};
		TextTrackDisplay.prototype.updateForTrack = function updateForTrack(track) {
			if (typeof window_1.WebVTT !== 'function' || !track.activeCues) {
				return;
			}
			var cues = [];
			for (var _i = 0; _i < track.activeCues.length; _i++) {
				cues.push(track.activeCues[_i]);
			}
			window_1.WebVTT.processCues(window_1, cues, this.el_);
			if (!this.player_.textTrackSettings) {
				return;
			}
			var overrides = this.player_.textTrackSettings.getValues();
			var i = cues.length;
			while (i--) {
				var cue = cues[i];
				if (!cue) {
					continue;
				}
				var cueDiv = cue.displayState;
				if (overrides.color) {
					cueDiv.firstChild.style.color = overrides.color;
				}
				if (overrides.textOpacity) {
					tryUpdateStyle(cueDiv.firstChild, 'color', constructColor(overrides.color || '#fff', overrides.textOpacity));
				}
				if (overrides.backgroundColor) {
					cueDiv.firstChild.style.backgroundColor = overrides.backgroundColor;
				}
				if (overrides.backgroundOpacity) {
					tryUpdateStyle(cueDiv.firstChild, 'backgroundColor', constructColor(overrides.backgroundColor || '#000', overrides.backgroundOpacity));
				}
				if (overrides.windowColor) {
					if (overrides.windowOpacity) {
						tryUpdateStyle(cueDiv, 'backgroundColor', constructColor(overrides.windowColor, overrides.windowOpacity));
					} else {
						cueDiv.style.backgroundColor = overrides.windowColor;
					}
				}
				if (overrides.edgeStyle) {
					if (overrides.edgeStyle === 'dropshadow') {
						cueDiv.firstChild.style.textShadow = '2px 2px 3px ' + darkGray + ', 2px 2px 4px ' + darkGray + ', 2px 2px 5px ' + darkGray;
					} else if (overrides.edgeStyle === 'raised') {
						cueDiv.firstChild.style.textShadow = '1px 1px ' + darkGray + ', 2px 2px ' + darkGray + ', 3px 3px ' + darkGray;
					} else if (overrides.edgeStyle === 'depressed') {
						cueDiv.firstChild.style.textShadow = '1px 1px ' + lightGray + ', 0 1px ' + lightGray + ', -1px -1px ' + darkGray + ', 0 -1px ' + darkGray;
					} else if (overrides.edgeStyle === 'uniform') {
						cueDiv.firstChild.style.textShadow = '0 0 4px ' + darkGray + ', 0 0 4px ' + darkGray + ', 0 0 4px ' + darkGray + ', 0 0 4px ' + darkGray;
					}
				}
				if (overrides.fontPercent && overrides.fontPercent !== 1) {
					var fontSize = window_1.parseFloat(cueDiv.style.fontSize);
					cueDiv.style.fontSize = fontSize * overrides.fontPercent + 'px';
					cueDiv.style.height = 'auto';
					cueDiv.style.top = 'auto';
					cueDiv.style.bottom = '2px';
				}
				if (overrides.fontFamily && overrides.fontFamily !== 'default') {
					if (overrides.fontFamily === 'small-caps') {
						cueDiv.firstChild.style.fontVariant = 'small-caps';
					} else {
						cueDiv.firstChild.style.fontFamily = fontMap[overrides.fontFamily];
					}
				}
			}
		};
		return TextTrackDisplay;
	}(Component);
	Component.registerComponent('TextTrackDisplay', TextTrackDisplay);
	var LoadingSpinner = function (_Component) {
		inherits(LoadingSpinner, _Component);
		function LoadingSpinner() {
			classCallCheck(this, LoadingSpinner);
			return possibleConstructorReturn(this, _Component.apply(this, arguments));
		}
		LoadingSpinner.prototype.createEl = function createEl$$1() {
			var isAudio = this.player_.isAudio();
			var playerType = this.localize(isAudio ? 'Audio Player' : 'Video Player');
			var controlText = createEl('span', {
				className: 'vjs-control-text',
				innerHTML: this.localize('{1} is loading.', [playerType])
			});
			var el = _Component.prototype.createEl.call(this, 'div', {
				className: 'vjs-loading-spinner',
				dir: 'ltr'
			});
			el.appendChild(controlText);
			return el;
		};
		return LoadingSpinner;
	}(Component);
	Component.registerComponent('LoadingSpinner', LoadingSpinner);
	var Button = function (_ClickableComponent) {
		inherits(Button, _ClickableComponent);
		function Button() {
			classCallCheck(this, Button);
			return possibleConstructorReturn(this, _ClickableComponent.apply(this, arguments));
		}
		Button.prototype.createEl = function createEl(tag) {
			var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			tag = 'button';
			props = assign({
				innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
				className: this.buildCSSClass()
			}, props);
			attributes = assign({
				type: 'button'
			}, attributes);
			var el = Component.prototype.createEl.call(this, tag, props, attributes);
			this.createControlTextEl(el);
			return el;
		};
		Button.prototype.addChild = function addChild(child) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var className = this.constructor.name;
			log$1.warn('Adding an actionable (user controllable) child to a Button (' + className + ') is not supported; use a ClickableComponent instead.');
			return Component.prototype.addChild.call(this, child, options);
		};
		Button.prototype.enable = function enable() {
			_ClickableComponent.prototype.enable.call(this);
			this.el_.removeAttribute('disabled');
		};
		Button.prototype.disable = function disable() {
			_ClickableComponent.prototype.disable.call(this);
			this.el_.setAttribute('disabled', 'disabled');
		};
		Button.prototype.handleKeyPress = function handleKeyPress(event) {
			if (event.which === 32 || event.which === 13) {
				return;
			}
			_ClickableComponent.prototype.handleKeyPress.call(this, event);
		};
		return Button;
	}(ClickableComponent);
	Component.registerComponent('Button', Button);
	var BigPlayButton = function (_Button) {
		inherits(BigPlayButton, _Button);
		function BigPlayButton(player, options) {
			classCallCheck(this, BigPlayButton);
			var _this = possibleConstructorReturn(this, _Button.call(this, player, options));
			_this.mouseused_ = false;
			_this.on('mousedown', _this.handleMouseDown);
			return _this;
		}
		BigPlayButton.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-big-play-button';
		};
		BigPlayButton.prototype.handleClick = function handleClick(event) {
			var playPromise = this.player_.play();
			if (this.mouseused_ && event.clientX && event.clientY) {
				silencePromise(playPromise);
				return;
			}
			var cb = this.player_.getChild('controlBar');
			var playToggle = cb && cb.getChild('playToggle');
			if (!playToggle) {
				this.player_.focus();
				return;
			}
			var playFocus = function playFocus() {
				return playToggle.focus();
			};
			if (isPromise(playPromise)) {
				playPromise.then(playFocus, function () { });
			} else {
				this.setTimeout(playFocus, 1);
			}
		};
		BigPlayButton.prototype.handleKeyPress = function handleKeyPress(event) {
			this.mouseused_ = false;
			_Button.prototype.handleKeyPress.call(this, event);
		};
		BigPlayButton.prototype.handleMouseDown = function handleMouseDown(event) {
			this.mouseused_ = true;
		};
		return BigPlayButton;
	}(Button);
	BigPlayButton.prototype.controlText_ = 'Play Video';
	Component.registerComponent('BigPlayButton', BigPlayButton);
	var CloseButton = function (_Button) {
		inherits(CloseButton, _Button);
		function CloseButton(player, options) {
			classCallCheck(this, CloseButton);
			var _this = possibleConstructorReturn(this, _Button.call(this, player, options));
			_this.controlText(options && options.controlText || _this.localize('Close'));
			return _this;
		}
		CloseButton.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-close-button ' + _Button.prototype.buildCSSClass.call(this);
		};
		CloseButton.prototype.handleClick = function handleClick(event) {
			this.trigger({ type: 'close', bubbles: false });
		};
		return CloseButton;
	}(Button);
	Component.registerComponent('CloseButton', CloseButton);
	var PlayToggle = function (_Button) {
		inherits(PlayToggle, _Button);
		function PlayToggle(player, options) {
			classCallCheck(this, PlayToggle);
			var _this = possibleConstructorReturn(this, _Button.call(this, player, options));
			_this.on(player, 'play', _this.handlePlay);
			_this.on(player, 'pause', _this.handlePause);
			_this.on(player, 'ended', _this.handleEnded);
			return _this;
		}
		PlayToggle.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-play-control ' + _Button.prototype.buildCSSClass.call(this);
		};
		PlayToggle.prototype.handleClick = function handleClick(event) {
			if (this.player_.paused()) {
				this.player_.play();
			} else {
				this.player_.pause();
			}
		};
		PlayToggle.prototype.handleSeeked = function handleSeeked(event) {
			this.removeClass('vjs-ended');
			if (this.player_.paused()) {
				this.handlePause(event);
			} else {
				this.handlePlay(event);
			}
		};
		PlayToggle.prototype.handlePlay = function handlePlay(event) {
			this.removeClass('vjs-ended');
			this.removeClass('vjs-paused');
			this.addClass('vjs-playing');
			this.controlText('Pause');
		};
		PlayToggle.prototype.handlePause = function handlePause(event) {
			this.removeClass('vjs-playing');
			this.addClass('vjs-paused');
			this.controlText('Play');
		};
		PlayToggle.prototype.handleEnded = function handleEnded(event) {
			this.removeClass('vjs-playing');
			this.addClass('vjs-ended');
			this.controlText('Replay');
			this.one(this.player_, 'seeked', this.handleSeeked);
		};
		return PlayToggle;
	}(Button);
	PlayToggle.prototype.controlText_ = 'Play';
	Component.registerComponent('PlayToggle', PlayToggle);
	var defaultImplementation = function defaultImplementation(seconds, guide) {
		seconds = seconds < 0 ? 0 : seconds;
		var s = Math.floor(seconds % 60);
		var m = Math.floor(seconds / 60 % 60);
		var h = Math.floor(seconds / 3600);
		var gm = Math.floor(guide / 60 % 60);
		var gh = Math.floor(guide / 3600);
		if (isNaN(seconds) || seconds === Infinity) {
			h = m = s = '-';
		}
		h = h > 0 || gh > 0 ? h + ':' : '';
		m = ((h || gm >= 10) && m < 10 ? '0' + m : m) + ':';
		s = s < 10 ? '0' + s : s;
		return h + m + s;
	};
	var implementation = defaultImplementation;
	function setFormatTime(customImplementation) {
		implementation = customImplementation;
	}
	function resetFormatTime() {
		implementation = defaultImplementation;
	}
	function formatTime(seconds) {
		var guide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : seconds;
		return implementation(seconds, guide);
	}
	var TimeDisplay = function (_Component) {
		inherits(TimeDisplay, _Component);
		function TimeDisplay(player, options) {
			classCallCheck(this, TimeDisplay);
			var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
			_this.throttledUpdateContent = throttle(bind(_this, _this.updateContent), 25);
			_this.on(player, 'timeupdate', _this.throttledUpdateContent);
			return _this;
		}
		TimeDisplay.prototype.createEl = function createEl$$1(plainName) {
			var className = this.buildCSSClass();
			var el = _Component.prototype.createEl.call(this, 'div', {
				className: className + ' vjs-time-control vjs-control',
				innerHTML: '<span class="vjs-control-text">' + this.localize(this.labelText_) + '\xA0</span>'
			});
			this.contentEl_ = createEl('span', {
				className: className + '-display'
			}, {
				'aria-live': 'off'
			});
			this.updateTextNode_();
			el.appendChild(this.contentEl_);
			return el;
		};
		TimeDisplay.prototype.dispose = function dispose() {
			this.contentEl_ = null;
			this.textNode_ = null;
			_Component.prototype.dispose.call(this);
		};
		TimeDisplay.prototype.updateTextNode_ = function updateTextNode_() {
			if (!this.contentEl_) {
				return;
			}
			while (this.contentEl_.firstChild) {
				this.contentEl_.removeChild(this.contentEl_.firstChild);
			}
			this.textNode_ = document_1.createTextNode(this.formattedTime_ || this.formatTime_(0));
			this.contentEl_.appendChild(this.textNode_);
		};
		TimeDisplay.prototype.formatTime_ = function formatTime_(time) {
			return formatTime(time);
		};
		TimeDisplay.prototype.updateFormattedTime_ = function updateFormattedTime_(time) {
			var formattedTime = this.formatTime_(time);
			if (formattedTime === this.formattedTime_) {
				return;
			}
			this.formattedTime_ = formattedTime;
			this.requestAnimationFrame(this.updateTextNode_);
		};
		TimeDisplay.prototype.updateContent = function updateContent(event) { };
		return TimeDisplay;
	}(Component);
	TimeDisplay.prototype.labelText_ = 'Time';
	TimeDisplay.prototype.controlText_ = 'Time';
	Component.registerComponent('TimeDisplay', TimeDisplay);
	var CurrentTimeDisplay = function (_TimeDisplay) {
		inherits(CurrentTimeDisplay, _TimeDisplay);
		function CurrentTimeDisplay(player, options) {
			classCallCheck(this, CurrentTimeDisplay);
			var _this = possibleConstructorReturn(this, _TimeDisplay.call(this, player, options));
			_this.on(player, 'ended', _this.handleEnded);
			return _this;
		}
		CurrentTimeDisplay.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-current-time';
		};
		CurrentTimeDisplay.prototype.updateContent = function updateContent(event) {
			var time = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
			this.updateFormattedTime_(time);
		};
		CurrentTimeDisplay.prototype.handleEnded = function handleEnded(event) {
			if (!this.player_.duration()) {
				return;
			}
			this.updateFormattedTime_(this.player_.duration());
		};
		return CurrentTimeDisplay;
	}(TimeDisplay);
	CurrentTimeDisplay.prototype.labelText_ = 'Current Time';
	CurrentTimeDisplay.prototype.controlText_ = 'Current Time';
	Component.registerComponent('CurrentTimeDisplay', CurrentTimeDisplay);
	var DurationDisplay = function (_TimeDisplay) {
		inherits(DurationDisplay, _TimeDisplay);
		function DurationDisplay(player, options) {
			classCallCheck(this, DurationDisplay);
			var _this = possibleConstructorReturn(this, _TimeDisplay.call(this, player, options));
			_this.on(player, 'durationchange', _this.updateContent);
			_this.on(player, 'loadedmetadata', _this.throttledUpdateContent);
			return _this;
		}
		DurationDisplay.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-duration';
		};
		DurationDisplay.prototype.updateContent = function updateContent(event) {
			var duration = this.player_.duration();
			if (duration && this.duration_ !== duration) {
				this.duration_ = duration;
				this.updateFormattedTime_(duration);
			}
		};
		return DurationDisplay;
	}(TimeDisplay);
	DurationDisplay.prototype.labelText_ = 'Duration';
	DurationDisplay.prototype.controlText_ = 'Duration';
	Component.registerComponent('DurationDisplay', DurationDisplay);
	var TimeDivider = function (_Component) {
		inherits(TimeDivider, _Component);
		function TimeDivider() {
			classCallCheck(this, TimeDivider);
			return possibleConstructorReturn(this, _Component.apply(this, arguments));
		}
		TimeDivider.prototype.createEl = function createEl() {
			return _Component.prototype.createEl.call(this, 'div', {
				className: 'vjs-time-control vjs-time-divider',
				innerHTML: '<div><span>/</span></div>'
			});
		};
		return TimeDivider;
	}(Component);
	Component.registerComponent('TimeDivider', TimeDivider);
	var RemainingTimeDisplay = function (_TimeDisplay) {
		inherits(RemainingTimeDisplay, _TimeDisplay);
		function RemainingTimeDisplay(player, options) {
			classCallCheck(this, RemainingTimeDisplay);
			var _this = possibleConstructorReturn(this, _TimeDisplay.call(this, player, options));
			_this.on(player, 'durationchange', _this.throttledUpdateContent);
			_this.on(player, 'ended', _this.handleEnded);
			return _this;
		}
		RemainingTimeDisplay.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-remaining-time';
		};
		RemainingTimeDisplay.prototype.formatTime_ = function formatTime_(time) {
			return '-' + _TimeDisplay.prototype.formatTime_.call(this, time);
		};
		RemainingTimeDisplay.prototype.updateContent = function updateContent(event) {
			if (!this.player_.duration()) {
				return;
			}
			if (this.player_.remainingTimeDisplay) {
				this.updateFormattedTime_(this.player_.remainingTimeDisplay());
			} else {
				this.updateFormattedTime_(this.player_.remainingTime());
			}
		};
		RemainingTimeDisplay.prototype.handleEnded = function handleEnded(event) {
			if (!this.player_.duration()) {
				return;
			}
			this.updateFormattedTime_(0);
		};
		return RemainingTimeDisplay;
	}(TimeDisplay);
	RemainingTimeDisplay.prototype.labelText_ = 'Remaining Time';
	RemainingTimeDisplay.prototype.controlText_ = 'Remaining Time';
	Component.registerComponent('RemainingTimeDisplay', RemainingTimeDisplay);
	var LiveDisplay = function (_Component) {
		inherits(LiveDisplay, _Component);
		function LiveDisplay(player, options) {
			classCallCheck(this, LiveDisplay);
			var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
			_this.updateShowing();
			_this.on(_this.player(), 'durationchange', _this.updateShowing);
			return _this;
		}
		LiveDisplay.prototype.createEl = function createEl$$1() {
			var el = _Component.prototype.createEl.call(this, 'div', {
				className: 'vjs-live-control vjs-control'
			});
			this.contentEl_ = createEl('div', {
				className: 'vjs-live-display',
				innerHTML: '<span class="vjs-control-text">' + this.localize('Stream Type') + '\xA0</span>' + this.localize('LIVE')
			}, {
				'aria-live': 'off'
			});
			el.appendChild(this.contentEl_);
			return el;
		};
		LiveDisplay.prototype.dispose = function dispose() {
			this.contentEl_ = null;
			_Component.prototype.dispose.call(this);
		};
		LiveDisplay.prototype.updateShowing = function updateShowing(event) {
			if (this.player().duration() === Infinity) {
				this.show();
			} else {
				this.hide();
			}
		};
		return LiveDisplay;
	}(Component);
	Component.registerComponent('LiveDisplay', LiveDisplay);
	var Slider = function (_Component) {
		inherits(Slider, _Component);
		function Slider(player, options) {
			classCallCheck(this, Slider);
			var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
			_this.bar = _this.getChild(_this.options_.barName);
			_this.vertical(!!_this.options_.vertical);
			_this.enable();
			return _this;
		}
		Slider.prototype.enabled = function enabled() {
			return this.enabled_;
		};
		Slider.prototype.enable = function enable() {
			if (this.enabled()) {
				return;
			}
			this.on('mousedown', this.handleMouseDown);
			this.on('touchstart', this.handleMouseDown);
			this.on('focus', this.handleFocus);
			this.on('blur', this.handleBlur);
			this.on('click', this.handleClick);
			this.on(this.player_, 'controlsvisible', this.update);
			if (this.playerEvent) {
				this.on(this.player_, this.playerEvent, this.update);
			}
			this.removeClass('disabled');
			this.setAttribute('tabindex', 0);
			this.enabled_ = true;
		};
		Slider.prototype.disable = function disable() {
			if (!this.enabled()) {
				return;
			}
			var doc = this.bar.el_.ownerDocument;
			this.off('mousedown', this.handleMouseDown);
			this.off('touchstart', this.handleMouseDown);
			this.off('focus', this.handleFocus);
			this.off('blur', this.handleBlur);
			this.off('click', this.handleClick);
			this.off(this.player_, 'controlsvisible', this.update);
			this.off(doc, 'mousemove', this.handleMouseMove);
			this.off(doc, 'mouseup', this.handleMouseUp);
			this.off(doc, 'touchmove', this.handleMouseMove);
			this.off(doc, 'touchend', this.handleMouseUp);
			this.removeAttribute('tabindex');
			this.addClass('disabled');
			if (this.playerEvent) {
				this.off(this.player_, this.playerEvent, this.update);
			}
			this.enabled_ = false;
		};
		Slider.prototype.createEl = function createEl$$1(type) {
			var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			props.className = props.className + ' vjs-slider';
			props = assign({
				tabIndex: 0
			}, props);
			attributes = assign({
				'role': 'slider',
				'aria-valuenow': 0,
				'aria-valuemin': 0,
				'aria-valuemax': 100,
				'tabIndex': 0
			}, attributes);
			return _Component.prototype.createEl.call(this, type, props, attributes);
		};
		Slider.prototype.handleMouseDown = function handleMouseDown(event) {
			var doc = this.bar.el_.ownerDocument;
			if (event.type === 'mousedown') {
				event.preventDefault();
			}
			if (event.type === 'touchstart' && !IS_CHROME) {
				event.preventDefault();
			}
			blockTextSelection();
			this.addClass('vjs-sliding');
			this.trigger('slideractive');
			this.on(doc, 'mousemove', this.handleMouseMove);
			this.on(doc, 'mouseup', this.handleMouseUp);
			this.on(doc, 'touchmove', this.handleMouseMove);
			this.on(doc, 'touchend', this.handleMouseUp);
			this.handleMouseMove(event);
		};
		Slider.prototype.handleMouseMove = function handleMouseMove(event) { };
		Slider.prototype.handleMouseUp = function handleMouseUp() {
			var doc = this.bar.el_.ownerDocument;
			unblockTextSelection();
			this.removeClass('vjs-sliding');
			this.trigger('sliderinactive');
			this.off(doc, 'mousemove', this.handleMouseMove);
			this.off(doc, 'mouseup', this.handleMouseUp);
			this.off(doc, 'touchmove', this.handleMouseMove);
			this.off(doc, 'touchend', this.handleMouseUp);
			this.update();
		};
		Slider.prototype.update = function update() {
			if (!this.el_) {
				return;
			}
			var progress = this.getPercent();
			var bar = this.bar;
			if (!bar) {
				return;
			}
			if (typeof progress !== 'number' || progress !== progress || progress < 0 || progress === Infinity) {
				progress = 0;
			}
			var percentage = (progress * 100).toFixed(2) + '%';
			var style = bar.el().style;
			if (this.vertical()) {
				style.height = percentage;
			} else {
				style.width = percentage;
			}
			return progress;
		};
		Slider.prototype.calculateDistance = function calculateDistance(event) {
			var position = getPointerPosition(this.el_, event);
			if (this.vertical()) {
				return position.y;
			}
			return position.x;
		};
		Slider.prototype.handleFocus = function handleFocus() {
			this.on(this.bar.el_.ownerDocument, 'keydown', this.handleKeyPress);
		};
		Slider.prototype.handleKeyPress = function handleKeyPress(event) {
			if (event.which === 37 || event.which === 40) {
				event.preventDefault();
				this.stepBack();
			} else if (event.which === 38 || event.which === 39) {
				event.preventDefault();
				this.stepForward();
			}
		};
		Slider.prototype.handleBlur = function handleBlur() {
			this.off(this.bar.el_.ownerDocument, 'keydown', this.handleKeyPress);
		};
		Slider.prototype.handleClick = function handleClick(event) {
			event.stopImmediatePropagation();
			event.preventDefault();
		};
		Slider.prototype.vertical = function vertical(bool) {
			if (bool === undefined) {
				return this.vertical_ || false;
			}
			this.vertical_ = !!bool;
			if (this.vertical_) {
				this.addClass('vjs-slider-vertical');
			} else {
				this.addClass('vjs-slider-horizontal');
			}
		};
		return Slider;
	}(Component);
	Component.registerComponent('Slider', Slider);
	var LoadProgressBar = function (_Component) {
		inherits(LoadProgressBar, _Component);
		function LoadProgressBar(player, options) {
			classCallCheck(this, LoadProgressBar);
			var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
			_this.partEls_ = [];
			_this.on(player, 'progress', _this.update);
			return _this;
		}
		LoadProgressBar.prototype.createEl = function createEl$$1() {
			return _Component.prototype.createEl.call(this, 'div', {
				className: 'vjs-load-progress',
				innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Loaded') + '</span>: 0%</span>'
			});
		};
		LoadProgressBar.prototype.dispose = function dispose() {
			this.partEls_ = null;
			_Component.prototype.dispose.call(this);
		};
		LoadProgressBar.prototype.update = function update(event) {
			var buffered = this.player_.buffered();
			var duration = this.player_.duration();
			var bufferedEnd = this.player_.bufferedEnd();
			var children = this.partEls_;
			var percentify = function percentify(time, end) {
				var percent = time / end || 0;
				return (percent >= 1 ? 1 : percent) * 100 + '%';
			};
			this.el_.style.width = percentify(bufferedEnd, duration);
			for (var i = 0; i < buffered.length; i++) {
				var start = buffered.start(i);
				var end = buffered.end(i);
				var part = children[i];
				if (!part) {
					part = this.el_.appendChild(createEl());
					children[i] = part;
				}
				part.style.left = percentify(start, bufferedEnd);
				part.style.width = percentify(end - start, bufferedEnd);
			}
			for (var _i = children.length; _i > buffered.length; _i--) {
				this.el_.removeChild(children[_i - 1]);
			}
			children.length = buffered.length;
		};
		return LoadProgressBar;
	}(Component);
	Component.registerComponent('LoadProgressBar', LoadProgressBar);
	var TimeTooltip = function (_Component) {
		inherits(TimeTooltip, _Component);
		function TimeTooltip() {
			classCallCheck(this, TimeTooltip);
			return possibleConstructorReturn(this, _Component.apply(this, arguments));
		}
		TimeTooltip.prototype.createEl = function createEl$$1() {
			return _Component.prototype.createEl.call(this, 'div', {
				className: 'vjs-time-tooltip'
			});
		};
		TimeTooltip.prototype.update = function update(seekBarRect, seekBarPoint, content) {
			var tooltipRect = getBoundingClientRect(this.el_);
			var playerRect = getBoundingClientRect(this.player_.el());
			var seekBarPointPx = seekBarRect.width * seekBarPoint;
			if (!playerRect || !tooltipRect) {
				return;
			}
			var spaceLeftOfPoint = seekBarRect.left - playerRect.left + seekBarPointPx;
			var spaceRightOfPoint = seekBarRect.width - seekBarPointPx + (playerRect.right - seekBarRect.right);
			var pullTooltipBy = tooltipRect.width / 2;
			if (spaceLeftOfPoint < pullTooltipBy) {
				pullTooltipBy += pullTooltipBy - spaceLeftOfPoint;
			} else if (spaceRightOfPoint < pullTooltipBy) {
				pullTooltipBy = spaceRightOfPoint;
			}
			if (pullTooltipBy < 0) {
				pullTooltipBy = 0;
			} else if (pullTooltipBy > tooltipRect.width) {
				pullTooltipBy = tooltipRect.width;
			}
			this.el_.style.right = '-' + pullTooltipBy + 'px';
			textContent(this.el_, content);
		};
		return TimeTooltip;
	}(Component);
	Component.registerComponent('TimeTooltip', TimeTooltip);
	var PlayProgressBar = function (_Component) {
		inherits(PlayProgressBar, _Component);
		function PlayProgressBar() {
			classCallCheck(this, PlayProgressBar);
			return possibleConstructorReturn(this, _Component.apply(this, arguments));
		}
		PlayProgressBar.prototype.createEl = function createEl() {
			return _Component.prototype.createEl.call(this, 'div', {
				className: 'vjs-play-progress vjs-slider-bar',
				innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Progress') + '</span>: 0%</span>'
			});
		};
		PlayProgressBar.prototype.update = function update(seekBarRect, seekBarPoint) {
			var _this2 = this;
			if (this.rafId_) {
				this.cancelAnimationFrame(this.rafId_);
			}
			this.rafId_ = this.requestAnimationFrame(function () {
				var time = _this2.player_.scrubbing() ? _this2.player_.getCache().currentTime : _this2.player_.currentTime();
				var content = formatTime(time, _this2.player_.duration());
				var timeTooltip = _this2.getChild('timeTooltip');
				if (timeTooltip) {
					timeTooltip.update(seekBarRect, seekBarPoint, content);
				}
			});
		};
		return PlayProgressBar;
	}(Component);
	PlayProgressBar.prototype.options_ = {
		children: []
	};
	if (!IS_IOS && !IS_ANDROID) {
		PlayProgressBar.prototype.options_.children.push('timeTooltip');
	}
	Component.registerComponent('PlayProgressBar', PlayProgressBar);
	var MouseTimeDisplay = function (_Component) {
		inherits(MouseTimeDisplay, _Component);
		function MouseTimeDisplay(player, options) {
			classCallCheck(this, MouseTimeDisplay);
			var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
			_this.update = throttle(bind(_this, _this.update), 25);
			return _this;
		}
		MouseTimeDisplay.prototype.createEl = function createEl() {
			return _Component.prototype.createEl.call(this, 'div', {
				className: 'vjs-mouse-display'
			});
		};
		MouseTimeDisplay.prototype.update = function update(seekBarRect, seekBarPoint) {
			var _this2 = this;
			if (this.rafId_) {
				this.cancelAnimationFrame(this.rafId_);
			}
			this.rafId_ = this.requestAnimationFrame(function () {
				var duration = _this2.player_.duration();
				var content = formatTime(seekBarPoint * duration, duration);
				_this2.el_.style.left = seekBarRect.width * seekBarPoint + 'px';
				_this2.getChild('timeTooltip').update(seekBarRect, seekBarPoint, content);
			});
		};
		return MouseTimeDisplay;
	}(Component);
	MouseTimeDisplay.prototype.options_ = {
		children: ['timeTooltip']
	};
	Component.registerComponent('MouseTimeDisplay', MouseTimeDisplay);
	var STEP_SECONDS = 5;
	var UPDATE_REFRESH_INTERVAL = 30;
	var SeekBar = function (_Slider) {
		inherits(SeekBar, _Slider);
		function SeekBar(player, options) {
			classCallCheck(this, SeekBar);
			var _this = possibleConstructorReturn(this, _Slider.call(this, player, options));
			_this.setEventHandlers_();
			return _this;
		}
		SeekBar.prototype.setEventHandlers_ = function setEventHandlers_() {
			var _this2 = this;
			this.update = throttle(bind(this, this.update), UPDATE_REFRESH_INTERVAL);
			this.on(this.player_, 'timeupdate', this.update);
			this.on(this.player_, 'ended', this.handleEnded);
			this.updateInterval = null;
			this.on(this.player_, ['playing'], function () {
				_this2.clearInterval(_this2.updateInterval);
				_this2.updateInterval = _this2.setInterval(function () {
					_this2.requestAnimationFrame(function () {
						_this2.update();
					});
				}, UPDATE_REFRESH_INTERVAL);
			});
			this.on(this.player_, ['ended', 'pause', 'waiting'], function () {
				_this2.clearInterval(_this2.updateInterval);
			});
			this.on(this.player_, ['timeupdate', 'ended'], this.update);
		};
		SeekBar.prototype.createEl = function createEl$$1() {
			return _Slider.prototype.createEl.call(this, 'div', {
				className: 'vjs-progress-holder'
			}, {
				'aria-label': this.localize('Progress Bar')
			});
		};
		SeekBar.prototype.update_ = function update_(currentTime, percent) {
			var duration = this.player_.duration();
			this.el_.setAttribute('aria-valuenow', (percent * 100).toFixed(2));
			this.el_.setAttribute('aria-valuetext', this.localize('progress bar timing: currentTime={1} duration={2}', [formatTime(currentTime, duration), formatTime(duration, duration)], '{1} of {2}'));
			this.bar.update(getBoundingClientRect(this.el_), percent);
		};
		SeekBar.prototype.update = function update(event) {
			var percent = _Slider.prototype.update.call(this);
			this.update_(this.getCurrentTime_(), percent);
			return percent;
		};
		SeekBar.prototype.getCurrentTime_ = function getCurrentTime_() {
			return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
		};
		SeekBar.prototype.handleEnded = function handleEnded(event) {
			this.update_(this.player_.duration(), 1);
		};
		SeekBar.prototype.getPercent = function getPercent() {
			var percent = this.getCurrentTime_() / this.player_.duration();
			return percent >= 1 ? 1 : percent || 0;
		};
		SeekBar.prototype.handleMouseDown = function handleMouseDown(event) {
			if (!isSingleLeftClick(event)) {
				return;
			}
			event.stopPropagation();
			this.player_.scrubbing(true);
			this.videoWasPlaying = !this.player_.paused();
			this.player_.pause();
			_Slider.prototype.handleMouseDown.call(this, event);
		};
		SeekBar.prototype.handleMouseMove = function handleMouseMove(event) {
			if (!isSingleLeftClick(event)) {
				return;
			}
			var newTime = this.calculateDistance(event) * this.player_.duration();
			if (newTime === this.player_.duration()) {
				newTime = newTime - 0.1;
			}
			this.player_.currentTime(newTime);
		};
		SeekBar.prototype.enable = function enable() {
			_Slider.prototype.enable.call(this);
			var mouseTimeDisplay = this.getChild('mouseTimeDisplay');
			if (!mouseTimeDisplay) {
				return;
			}
			mouseTimeDisplay.show();
		};
		SeekBar.prototype.disable = function disable() {
			_Slider.prototype.disable.call(this);
			var mouseTimeDisplay = this.getChild('mouseTimeDisplay');
			if (!mouseTimeDisplay) {
				return;
			}
			mouseTimeDisplay.hide();
		};
		SeekBar.prototype.handleMouseUp = function handleMouseUp(event) {
			_Slider.prototype.handleMouseUp.call(this, event);
			if (event) {
				event.stopPropagation();
			}
			this.player_.scrubbing(false);
			this.player_.trigger({ type: 'timeupdate', target: this, manuallyTriggered: true });
			if (this.videoWasPlaying) {
				silencePromise(this.player_.play());
			}
		};
		SeekBar.prototype.stepForward = function stepForward() {
			this.player_.currentTime(this.player_.currentTime() + STEP_SECONDS);
		};
		SeekBar.prototype.stepBack = function stepBack() {
			this.player_.currentTime(this.player_.currentTime() - STEP_SECONDS);
		};
		SeekBar.prototype.handleAction = function handleAction(event) {
			if (this.player_.paused()) {
				this.player_.play();
			} else {
				this.player_.pause();
			}
		};
		SeekBar.prototype.handleKeyPress = function handleKeyPress(event) {
			if (event.which === 32 || event.which === 13) {
				event.preventDefault();
				this.handleAction(event);
			} else if (_Slider.prototype.handleKeyPress) {
				_Slider.prototype.handleKeyPress.call(this, event);
			}
		};
		return SeekBar;
	}(Slider);
	SeekBar.prototype.options_ = {
		children: ['loadProgressBar', 'playProgressBar'],
		barName: 'playProgressBar'
	};
	if (!IS_IOS && !IS_ANDROID) {
		SeekBar.prototype.options_.children.splice(1, 0, 'mouseTimeDisplay');
	}
	SeekBar.prototype.playerEvent = 'timeupdate';
	Component.registerComponent('SeekBar', SeekBar);
	var ProgressControl = function (_Component) {
		inherits(ProgressControl, _Component);
		function ProgressControl(player, options) {
			classCallCheck(this, ProgressControl);
			var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
			_this.handleMouseMove = throttle(bind(_this, _this.handleMouseMove), 25);
			_this.throttledHandleMouseSeek = throttle(bind(_this, _this.handleMouseSeek), 25);
			_this.enable();
			return _this;
		}
		ProgressControl.prototype.createEl = function createEl$$1() {
			return _Component.prototype.createEl.call(this, 'div', {
				className: 'vjs-progress-control vjs-control'
			});
		};
		ProgressControl.prototype.handleMouseMove = function handleMouseMove(event) {
			var seekBar = this.getChild('seekBar');
			if (seekBar) {
				var mouseTimeDisplay = seekBar.getChild('mouseTimeDisplay');
				var seekBarEl = seekBar.el();
				var seekBarRect = getBoundingClientRect(seekBarEl);
				var seekBarPoint = getPointerPosition(seekBarEl, event).x;
				if (seekBarPoint > 1) {
					seekBarPoint = 1;
				} else if (seekBarPoint < 0) {
					seekBarPoint = 0;
				}
				if (mouseTimeDisplay) {
					mouseTimeDisplay.update(seekBarRect, seekBarPoint);
				}
			}
		};
		ProgressControl.prototype.handleMouseSeek = function handleMouseSeek(event) {
			var seekBar = this.getChild('seekBar');
			if (seekBar) {
				seekBar.handleMouseMove(event);
			}
		};
		ProgressControl.prototype.enabled = function enabled() {
			return this.enabled_;
		};
		ProgressControl.prototype.disable = function disable() {
			this.children().forEach(function (child) {
				return child.disable && child.disable();
			});
			if (!this.enabled()) {
				return;
			}
			this.off(['mousedown', 'touchstart'], this.handleMouseDown);
			this.off(this.el_, 'mousemove', this.handleMouseMove);
			this.handleMouseUp();
			this.addClass('disabled');
			this.enabled_ = false;
		};
		ProgressControl.prototype.enable = function enable() {
			this.children().forEach(function (child) {
				return child.enable && child.enable();
			});
			if (this.enabled()) {
				return;
			}
			this.on(['mousedown', 'touchstart'], this.handleMouseDown);
			this.on(this.el_, 'mousemove', this.handleMouseMove);
			this.removeClass('disabled');
			this.enabled_ = true;
		};
		ProgressControl.prototype.handleMouseDown = function handleMouseDown(event) {
			var doc = this.el_.ownerDocument;
			var seekBar = this.getChild('seekBar');
			if (seekBar) {
				seekBar.handleMouseDown(event);
			}
			this.on(doc, 'mousemove', this.throttledHandleMouseSeek);
			this.on(doc, 'touchmove', this.throttledHandleMouseSeek);
			this.on(doc, 'mouseup', this.handleMouseUp);
			this.on(doc, 'touchend', this.handleMouseUp);
		};
		ProgressControl.prototype.handleMouseUp = function handleMouseUp(event) {
			var doc = this.el_.ownerDocument;
			var seekBar = this.getChild('seekBar');
			if (seekBar) {
				seekBar.handleMouseUp(event);
			}
			this.off(doc, 'mousemove', this.throttledHandleMouseSeek);
			this.off(doc, 'touchmove', this.throttledHandleMouseSeek);
			this.off(doc, 'mouseup', this.handleMouseUp);
			this.off(doc, 'touchend', this.handleMouseUp);
		};
		return ProgressControl;
	}(Component);
	ProgressControl.prototype.options_ = {
		children: ['seekBar']
	};
	Component.registerComponent('ProgressControl', ProgressControl);
	var FullscreenToggle = function (_Button) {
		inherits(FullscreenToggle, _Button);
		function FullscreenToggle(player, options) {
			classCallCheck(this, FullscreenToggle);
			var _this = possibleConstructorReturn(this, _Button.call(this, player, options));
			_this.on(player, 'fullscreenchange', _this.handleFullscreenChange);
			if (document_1[FullscreenApi.fullscreenEnabled] === false) {
				_this.disable();
			}
			return _this;
		}
		FullscreenToggle.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-fullscreen-control ' + _Button.prototype.buildCSSClass.call(this);
		};
		FullscreenToggle.prototype.handleFullscreenChange = function handleFullscreenChange(event) {
			if (this.player_.isFullscreen()) {
				this.controlText('Non-Fullscreen');
			} else {
				this.controlText('Fullscreen');
			}
		};
		FullscreenToggle.prototype.handleClick = function handleClick(event) {
			if (!this.player_.isFullscreen()) {
				this.player_.requestFullscreen();
			} else {
				this.player_.exitFullscreen();
			}
		};
		return FullscreenToggle;
	}(Button);
	FullscreenToggle.prototype.controlText_ = 'Fullscreen';
	Component.registerComponent('FullscreenToggle', FullscreenToggle);
	var checkVolumeSupport = function checkVolumeSupport(self, player) {
		if (player.tech_ && !player.tech_.featuresVolumeControl) {
			self.addClass('vjs-hidden');
		}
		self.on(player, 'loadstart', function () {
			if (!player.tech_.featuresVolumeControl) {
				self.addClass('vjs-hidden');
			} else {
				self.removeClass('vjs-hidden');
			}
		});
	};
	var VolumeLevel = function (_Component) {
		inherits(VolumeLevel, _Component);
		function VolumeLevel() {
			classCallCheck(this, VolumeLevel);
			return possibleConstructorReturn(this, _Component.apply(this, arguments));
		}
		VolumeLevel.prototype.createEl = function createEl() {
			return _Component.prototype.createEl.call(this, 'div', {
				className: 'vjs-volume-level',
				innerHTML: '<span class="vjs-control-text"></span>'
			});
		};
		return VolumeLevel;
	}(Component);
	Component.registerComponent('VolumeLevel', VolumeLevel);
	var VolumeBar = function (_Slider) {
		inherits(VolumeBar, _Slider);
		function VolumeBar(player, options) {
			classCallCheck(this, VolumeBar);
			var _this = possibleConstructorReturn(this, _Slider.call(this, player, options));
			_this.on('slideractive', _this.updateLastVolume_);
			_this.on(player, 'volumechange', _this.updateARIAAttributes);
			player.ready(function () {
				return _this.updateARIAAttributes();
			});
			return _this;
		}
		VolumeBar.prototype.createEl = function createEl$$1() {
			return _Slider.prototype.createEl.call(this, 'div', {
				className: 'vjs-volume-bar vjs-slider-bar'
			}, {
				'aria-label': this.localize('Volume Level'),
				'aria-live': 'polite'
			});
		};
		VolumeBar.prototype.handleMouseDown = function handleMouseDown(event) {
			if (!isSingleLeftClick(event)) {
				return;
			}
			_Slider.prototype.handleMouseDown.call(this, event);
		};
		VolumeBar.prototype.handleMouseMove = function handleMouseMove(event) {
			if (!isSingleLeftClick(event)) {
				return;
			}
			this.checkMuted();
			this.player_.volume(this.calculateDistance(event));
		};
		VolumeBar.prototype.checkMuted = function checkMuted() {
			if (this.player_.muted()) {
				this.player_.muted(false);
			}
		};
		VolumeBar.prototype.getPercent = function getPercent() {
			if (this.player_.muted()) {
				return 0;
			}
			return this.player_.volume();
		};
		VolumeBar.prototype.stepForward = function stepForward() {
			this.checkMuted();
			this.player_.volume(this.player_.volume() + 0.1);
		};
		VolumeBar.prototype.stepBack = function stepBack() {
			this.checkMuted();
			this.player_.volume(this.player_.volume() - 0.1);
		};
		VolumeBar.prototype.updateARIAAttributes = function updateARIAAttributes(event) {
			var ariaValue = this.player_.muted() ? 0 : this.volumeAsPercentage_();
			this.el_.setAttribute('aria-valuenow', ariaValue);
			this.el_.setAttribute('aria-valuetext', ariaValue + '%');
		};
		VolumeBar.prototype.volumeAsPercentage_ = function volumeAsPercentage_() {
			return Math.round(this.player_.volume() * 100);
		};
		VolumeBar.prototype.updateLastVolume_ = function updateLastVolume_() {
			var _this2 = this;
			var volumeBeforeDrag = this.player_.volume();
			this.one('sliderinactive', function () {
				if (_this2.player_.volume() === 0) {
					_this2.player_.lastVolume_(volumeBeforeDrag);
				}
			});
		};
		return VolumeBar;
	}(Slider);
	VolumeBar.prototype.options_ = {
		children: ['volumeLevel'],
		barName: 'volumeLevel'
	};
	VolumeBar.prototype.playerEvent = 'volumechange';
	Component.registerComponent('VolumeBar', VolumeBar);
	var VolumeControl = function (_Component) {
		inherits(VolumeControl, _Component);
		function VolumeControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			classCallCheck(this, VolumeControl);
			options.vertical = options.vertical || false;
			if (typeof options.volumeBar === 'undefined' || isPlain(options.volumeBar)) {
				options.volumeBar = options.volumeBar || {};
				options.volumeBar.vertical = options.vertical;
			}
			var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
			checkVolumeSupport(_this, player);
			_this.throttledHandleMouseMove = throttle(bind(_this, _this.handleMouseMove), 25);
			_this.on('mousedown', _this.handleMouseDown);
			_this.on('touchstart', _this.handleMouseDown);
			_this.on(_this.volumeBar, ['focus', 'slideractive'], function () {
				_this.volumeBar.addClass('vjs-slider-active');
				_this.addClass('vjs-slider-active');
				_this.trigger('slideractive');
			});
			_this.on(_this.volumeBar, ['blur', 'sliderinactive'], function () {
				_this.volumeBar.removeClass('vjs-slider-active');
				_this.removeClass('vjs-slider-active');
				_this.trigger('sliderinactive');
			});
			return _this;
		}
		VolumeControl.prototype.createEl = function createEl() {
			var orientationClass = 'vjs-volume-horizontal';
			if (this.options_.vertical) {
				orientationClass = 'vjs-volume-vertical';
			}
			return _Component.prototype.createEl.call(this, 'div', {
				className: 'vjs-volume-control vjs-control ' + orientationClass
			});
		};
		VolumeControl.prototype.handleMouseDown = function handleMouseDown(event) {
			var doc = this.el_.ownerDocument;
			this.on(doc, 'mousemove', this.throttledHandleMouseMove);
			this.on(doc, 'touchmove', this.throttledHandleMouseMove);
			this.on(doc, 'mouseup', this.handleMouseUp);
			this.on(doc, 'touchend', this.handleMouseUp);
		};
		VolumeControl.prototype.handleMouseUp = function handleMouseUp(event) {
			var doc = this.el_.ownerDocument;
			this.off(doc, 'mousemove', this.throttledHandleMouseMove);
			this.off(doc, 'touchmove', this.throttledHandleMouseMove);
			this.off(doc, 'mouseup', this.handleMouseUp);
			this.off(doc, 'touchend', this.handleMouseUp);
		};
		VolumeControl.prototype.handleMouseMove = function handleMouseMove(event) {
			this.volumeBar.handleMouseMove(event);
		};
		return VolumeControl;
	}(Component);
	VolumeControl.prototype.options_ = {
		children: ['volumeBar']
	};
	Component.registerComponent('VolumeControl', VolumeControl);
	var checkMuteSupport = function checkMuteSupport(self, player) {
		if (player.tech_ && !player.tech_.featuresMuteControl) {
			self.addClass('vjs-hidden');
		}
		self.on(player, 'loadstart', function () {
			if (!player.tech_.featuresMuteControl) {
				self.addClass('vjs-hidden');
			} else {
				self.removeClass('vjs-hidden');
			}
		});
	};
	var MuteToggle = function (_Button) {
		inherits(MuteToggle, _Button);
		function MuteToggle(player, options) {
			classCallCheck(this, MuteToggle);
			var _this = possibleConstructorReturn(this, _Button.call(this, player, options));
			checkMuteSupport(_this, player);
			_this.on(player, ['loadstart', 'volumechange'], _this.update);
			return _this;
		}
		MuteToggle.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-mute-control ' + _Button.prototype.buildCSSClass.call(this);
		};
		MuteToggle.prototype.handleClick = function handleClick(event) {
			var vol = this.player_.volume();
			var lastVolume = this.player_.lastVolume_();
			if (vol === 0) {
				var volumeToSet = lastVolume < 0.1 ? 0.1 : lastVolume;
				this.player_.volume(volumeToSet);
				this.player_.muted(false);
			} else {
				this.player_.muted(this.player_.muted() ? false : true);
			}
		};
		MuteToggle.prototype.update = function update(event) {
			this.updateIcon_();
			this.updateControlText_();
		};
		MuteToggle.prototype.updateIcon_ = function updateIcon_() {
			var vol = this.player_.volume();
			var level = 3;
			if (IS_IOS) {
				this.player_.muted(this.player_.tech_.el_.muted);
			}
			if (vol === 0 || this.player_.muted()) {
				level = 0;
			} else if (vol < 0.33) {
				level = 1;
			} else if (vol < 0.67) {
				level = 2;
			}
			for (var i = 0; i < 4; i++) {
				removeClass(this.el_, 'vjs-vol-' + i);
			}
			addClass(this.el_, 'vjs-vol-' + level);
		};
		MuteToggle.prototype.updateControlText_ = function updateControlText_() {
			var soundOff = this.player_.muted() || this.player_.volume() === 0;
			var text = soundOff ? 'Unmute' : 'Mute';
			if (this.controlText() !== text) {
				this.controlText(text);
			}
		};
		return MuteToggle;
	}(Button);
	MuteToggle.prototype.controlText_ = 'Mute';
	Component.registerComponent('MuteToggle', MuteToggle);
	var VolumePanel = function (_Component) {
		inherits(VolumePanel, _Component);
		function VolumePanel(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			classCallCheck(this, VolumePanel);
			if (typeof options.inline !== 'undefined') {
				options.inline = options.inline;
			} else {
				options.inline = true;
			}
			if (typeof options.volumeControl === 'undefined' || isPlain(options.volumeControl)) {
				options.volumeControl = options.volumeControl || {};
				options.volumeControl.vertical = !options.inline;
			}
			var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
			_this.on(player, ['loadstart'], _this.volumePanelState_);
			_this.on(_this.volumeControl, ['slideractive'], _this.sliderActive_);
			_this.on(_this.volumeControl, ['sliderinactive'], _this.sliderInactive_);
			return _this;
		}
		VolumePanel.prototype.sliderActive_ = function sliderActive_() {
			this.addClass('vjs-slider-active');
		};
		VolumePanel.prototype.sliderInactive_ = function sliderInactive_() {
			this.removeClass('vjs-slider-active');
		};
		VolumePanel.prototype.volumePanelState_ = function volumePanelState_() {
			if (this.volumeControl.hasClass('vjs-hidden') && this.muteToggle.hasClass('vjs-hidden')) {
				this.addClass('vjs-hidden');
			}
			if (this.volumeControl.hasClass('vjs-hidden') && !this.muteToggle.hasClass('vjs-hidden')) {
				this.addClass('vjs-mute-toggle-only');
			}
		};
		VolumePanel.prototype.createEl = function createEl() {
			var orientationClass = 'vjs-volume-panel-horizontal';
			if (!this.options_.inline) {
				orientationClass = 'vjs-volume-panel-vertical';
			}
			return _Component.prototype.createEl.call(this, 'div', {
				className: 'vjs-volume-panel vjs-control ' + orientationClass
			});
		};
		return VolumePanel;
	}(Component);
	VolumePanel.prototype.options_ = {
		children: ['muteToggle', 'volumeControl']
	};
	Component.registerComponent('VolumePanel', VolumePanel);
	var Menu = function (_Component) {
		inherits(Menu, _Component);
		function Menu(player, options) {
			classCallCheck(this, Menu);
			var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
			if (options) {
				_this.menuButton_ = options.menuButton;
			}
			_this.focusedChild_ = -1;
			_this.on('keydown', _this.handleKeyPress);
			return _this;
		}
		Menu.prototype.addItem = function addItem(component) {
			this.addChild(component);
			component.on('click', bind(this, function (event) {
				if (this.menuButton_) {
					this.menuButton_.unpressButton();
					if (component.name() !== 'CaptionSettingsMenuItem') {
						this.menuButton_.focus();
					}
				}
			}));
		};
		Menu.prototype.createEl = function createEl$$1() {
			var contentElType = this.options_.contentElType || 'ul';
			this.contentEl_ = createEl(contentElType, {
				className: 'vjs-menu-content'
			});
			this.contentEl_.setAttribute('role', 'menu');
			var el = _Component.prototype.createEl.call(this, 'div', {
				append: this.contentEl_,
				className: 'vjs-menu'
			});
			el.appendChild(this.contentEl_);
			on(el, 'click', function (event) {
				event.preventDefault();
				event.stopImmediatePropagation();
			});
			return el;
		};
		Menu.prototype.dispose = function dispose() {
			this.contentEl_ = null;
			_Component.prototype.dispose.call(this);
		};
		Menu.prototype.handleKeyPress = function handleKeyPress(event) {
			if (event.which === 37 || event.which === 40) {
				event.preventDefault();
				this.stepForward();
			} else if (event.which === 38 || event.which === 39) {
				event.preventDefault();
				this.stepBack();
			}
		};
		Menu.prototype.stepForward = function stepForward() {
			var stepChild = 0;
			if (this.focusedChild_ !== undefined) {
				stepChild = this.focusedChild_ + 1;
			}
			this.focus(stepChild);
		};
		Menu.prototype.stepBack = function stepBack() {
			var stepChild = 0;
			if (this.focusedChild_ !== undefined) {
				stepChild = this.focusedChild_ - 1;
			}
			this.focus(stepChild);
		};
		Menu.prototype.focus = function focus() {
			var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
			var children = this.children().slice();
			var haveTitle = children.length && children[0].className && /vjs-menu-title/.test(children[0].className);
			if (haveTitle) {
				children.shift();
			}
			if (children.length > 0) {
				if (item < 0) {
					item = 0;
				} else if (item >= children.length) {
					item = children.length - 1;
				}
				this.focusedChild_ = item;
				children[item].el_.focus();
			}
		};
		return Menu;
	}(Component);
	Component.registerComponent('Menu', Menu);
	var MenuButton = function (_Component) {
		inherits(MenuButton, _Component);
		function MenuButton(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			classCallCheck(this, MenuButton);
			var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
			_this.menuButton_ = new Button(player, options);
			_this.menuButton_.controlText(_this.controlText_);
			_this.menuButton_.el_.setAttribute('aria-haspopup', 'true');
			var buttonClass = Button.prototype.buildCSSClass();
			_this.menuButton_.el_.className = _this.buildCSSClass() + ' ' + buttonClass;
			_this.menuButton_.removeClass('vjs-control');
			_this.addChild(_this.menuButton_);
			_this.update();
			_this.enabled_ = true;
			_this.on(_this.menuButton_, 'tap', _this.handleClick);
			_this.on(_this.menuButton_, 'click', _this.handleClick);
			_this.on(_this.menuButton_, 'focus', _this.handleFocus);
			_this.on(_this.menuButton_, 'blur', _this.handleBlur);
			_this.on('keydown', _this.handleSubmenuKeyPress);
			return _this;
		}
		MenuButton.prototype.update = function update() {
			var menu = this.createMenu();
			if (this.menu) {
				this.menu.dispose();
				this.removeChild(this.menu);
			}
			this.menu = menu;
			this.addChild(menu);
			this.buttonPressed_ = false;
			this.menuButton_.el_.setAttribute('aria-expanded', 'false');
			if (this.items && this.items.length <= this.hideThreshold_) {
				this.hide();
			} else {
				this.show();
			}
		};
		MenuButton.prototype.createMenu = function createMenu() {
			var menu = new Menu(this.player_, { menuButton: this });
			this.hideThreshold_ = 0;
			if (this.options_.title) {
				var title = createEl('li', {
					className: 'vjs-menu-title',
					innerHTML: toTitleCase(this.options_.title),
					tabIndex: -1
				});
				this.hideThreshold_ += 1;
				menu.children_.unshift(title);
				prependTo(title, menu.contentEl());
			}
			this.items = this.createItems();
			if (this.items) {
				for (var i = 0; i < this.items.length; i++) {
					menu.addItem(this.items[i]);
				}
			}
			return menu;
		};
		MenuButton.prototype.createItems = function createItems() { };
		MenuButton.prototype.createEl = function createEl$$1() {
			return _Component.prototype.createEl.call(this, 'div', {
				className: this.buildWrapperCSSClass()
			}, {});
		};
		MenuButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
			var menuButtonClass = 'vjs-menu-button';
			if (this.options_.inline === true) {
				menuButtonClass += '-inline';
			} else {
				menuButtonClass += '-popup';
			}
			var buttonClass = Button.prototype.buildCSSClass();
			return 'vjs-menu-button ' + menuButtonClass + ' ' + buttonClass + ' ' + _Component.prototype.buildCSSClass.call(this);
		};
		MenuButton.prototype.buildCSSClass = function buildCSSClass() {
			var menuButtonClass = 'vjs-menu-button';
			if (this.options_.inline === true) {
				menuButtonClass += '-inline';
			} else {
				menuButtonClass += '-popup';
			}
			return 'vjs-menu-button ' + menuButtonClass + ' ' + _Component.prototype.buildCSSClass.call(this);
		};
		MenuButton.prototype.controlText = function controlText(text) {
			var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.menuButton_.el();
			return this.menuButton_.controlText(text, el);
		};
		MenuButton.prototype.handleClick = function handleClick(event) {
			this.one(this.menu.contentEl(), 'mouseleave', bind(this, function (e) {
				this.unpressButton();
				this.el_.blur();
			}));
			if (this.buttonPressed_) {
				this.unpressButton();
			} else {
				this.pressButton();
			}
		};
		MenuButton.prototype.focus = function focus() {
			this.menuButton_.focus();
		};
		MenuButton.prototype.blur = function blur() {
			this.menuButton_.blur();
		};
		MenuButton.prototype.handleFocus = function handleFocus() {
			on(document_1, 'keydown', bind(this, this.handleKeyPress));
		};
		MenuButton.prototype.handleBlur = function handleBlur() {
			off(document_1, 'keydown', bind(this, this.handleKeyPress));
		};
		MenuButton.prototype.handleKeyPress = function handleKeyPress(event) {
			if (event.which === 27 || event.which === 9) {
				if (this.buttonPressed_) {
					this.unpressButton();
				}
				if (event.which !== 9) {
					event.preventDefault();
					this.menuButton_.el_.focus();
				}
			} else if (event.which === 38 || event.which === 40) {
				if (!this.buttonPressed_) {
					this.pressButton();
					event.preventDefault();
				}
			}
		};
		MenuButton.prototype.handleSubmenuKeyPress = function handleSubmenuKeyPress(event) {
			if (event.which === 27 || event.which === 9) {
				if (this.buttonPressed_) {
					this.unpressButton();
				}
				if (event.which !== 9) {
					event.preventDefault();
					this.menuButton_.el_.focus();
				}
			}
		};
		MenuButton.prototype.pressButton = function pressButton() {
			if (this.enabled_) {
				this.buttonPressed_ = true;
				this.menu.lockShowing();
				this.menuButton_.el_.setAttribute('aria-expanded', 'true');
				if (IS_IOS && isInFrame()) {
					return;
				}
				this.menu.focus();
			}
		};
		MenuButton.prototype.unpressButton = function unpressButton() {
			if (this.enabled_) {
				this.buttonPressed_ = false;
				this.menu.unlockShowing();
				this.menuButton_.el_.setAttribute('aria-expanded', 'false');
			}
		};
		MenuButton.prototype.disable = function disable() {
			this.unpressButton();
			this.enabled_ = false;
			this.addClass('vjs-disabled');
			this.menuButton_.disable();
		};
		MenuButton.prototype.enable = function enable() {
			this.enabled_ = true;
			this.removeClass('vjs-disabled');
			this.menuButton_.enable();
		};
		return MenuButton;
	}(Component);
	Component.registerComponent('MenuButton', MenuButton);
	var TrackButton = function (_MenuButton) {
		inherits(TrackButton, _MenuButton);
		function TrackButton(player, options) {
			classCallCheck(this, TrackButton);
			var tracks = options.tracks;
			var _this = possibleConstructorReturn(this, _MenuButton.call(this, player, options));
			if (_this.items.length <= 1) {
				_this.hide();
			}
			if (!tracks) {
				return possibleConstructorReturn(_this);
			}
			var updateHandler = bind(_this, _this.update);
			tracks.addEventListener('removetrack', updateHandler);
			tracks.addEventListener('addtrack', updateHandler);
			_this.player_.on('ready', updateHandler);
			_this.player_.on('dispose', function () {
				tracks.removeEventListener('removetrack', updateHandler);
				tracks.removeEventListener('addtrack', updateHandler);
			});
			return _this;
		}
		return TrackButton;
	}(MenuButton);
	Component.registerComponent('TrackButton', TrackButton);
	var MenuItem = function (_ClickableComponent) {
		inherits(MenuItem, _ClickableComponent);
		function MenuItem(player, options) {
			classCallCheck(this, MenuItem);
			var _this = possibleConstructorReturn(this, _ClickableComponent.call(this, player, options));
			_this.selectable = options.selectable;
			_this.isSelected_ = options.selected || false;
			_this.multiSelectable = options.multiSelectable;
			_this.selected(_this.isSelected_);
			if (_this.selectable) {
				if (_this.multiSelectable) {
					_this.el_.setAttribute('role', 'menuitemcheckbox');
				} else {
					_this.el_.setAttribute('role', 'menuitemradio');
				}
			} else {
				_this.el_.setAttribute('role', 'menuitem');
			}
			return _this;
		}
		MenuItem.prototype.createEl = function createEl(type, props, attrs) {
			this.nonIconControl = true;
			return _ClickableComponent.prototype.createEl.call(this, 'li', assign({
				className: 'vjs-menu-item',
				innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + '</span>',
				tabIndex: -1
			}, props), attrs);
		};
		MenuItem.prototype.handleClick = function handleClick(event) {
			this.selected(true);
		};
		MenuItem.prototype.selected = function selected(_selected) {
			if (this.selectable) {
				if (_selected) {
					this.addClass('vjs-selected');
					this.el_.setAttribute('aria-checked', 'true');
					this.controlText(', selected');
					this.isSelected_ = true;
				} else {
					this.removeClass('vjs-selected');
					this.el_.setAttribute('aria-checked', 'false');
					this.controlText('');
					this.isSelected_ = false;
				}
			}
		};
		return MenuItem;
	}(ClickableComponent);
	Component.registerComponent('MenuItem', MenuItem);
	var TextTrackMenuItem = function (_MenuItem) {
		inherits(TextTrackMenuItem, _MenuItem);
		function TextTrackMenuItem(player, options) {
			classCallCheck(this, TextTrackMenuItem);
			var track = options.track;
			var tracks = player.textTracks();
			options.label = track.label || track.language || 'Unknown';
			options.selected = track.mode === 'showing';
			var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));
			_this.track = track;
			var changeHandler = function changeHandler() {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
				_this.handleTracksChange.apply(_this, args);
			};
			var selectedLanguageChangeHandler = function selectedLanguageChangeHandler() {
				for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					args[_key2] = arguments[_key2];
				}
				_this.handleSelectedLanguageChange.apply(_this, args);
			};
			player.on(['loadstart', 'texttrackchange'], changeHandler);
			tracks.addEventListener('change', changeHandler);
			tracks.addEventListener('selectedlanguagechange', selectedLanguageChangeHandler);
			_this.on('dispose', function () {
				player.off(['loadstart', 'texttrackchange'], changeHandler);
				tracks.removeEventListener('change', changeHandler);
				tracks.removeEventListener('selectedlanguagechange', selectedLanguageChangeHandler);
			});
			if (tracks.onchange === undefined) {
				var event = void 0;
				_this.on(['tap', 'click'], function () {
					if (_typeof(window_1.Event) !== 'object') {
						try {
							event = new window_1.Event('change');
						} catch (err) {
						}
					}
					if (!event) {
						event = document_1.createEvent('Event');
						event.initEvent('change', true, true);
					}
					tracks.dispatchEvent(event);
				});
			}
			_this.handleTracksChange();
			return _this;
		}
		TextTrackMenuItem.prototype.handleClick = function handleClick(event) {
			var kind = this.track.kind;
			var kinds = this.track.kinds;
			var tracks = this.player_.textTracks();
			if (!kinds) {
				kinds = [kind];
			}
			_MenuItem.prototype.handleClick.call(this, event);
			if (!tracks) {
				return;
			}
			for (var i = 0; i < tracks.length; i++) {
				var track = tracks[i];
				if (track === this.track && kinds.indexOf(track.kind) > -1) {
					if (track.mode !== 'showing') {
						track.mode = 'showing';
					}
				} else if (track.mode !== 'disabled') {
					track.mode = 'disabled';
				}
			}
		};
		TextTrackMenuItem.prototype.handleTracksChange = function handleTracksChange(event) {
			var shouldBeSelected = this.track.mode === 'showing';
			if (shouldBeSelected !== this.isSelected_) {
				this.selected(shouldBeSelected);
			}
		};
		TextTrackMenuItem.prototype.handleSelectedLanguageChange = function handleSelectedLanguageChange(event) {
			if (this.track.mode === 'showing') {
				var selectedLanguage = this.player_.cache_.selectedLanguage;
				if (selectedLanguage && selectedLanguage.enabled && selectedLanguage.language === this.track.language && selectedLanguage.kind !== this.track.kind) {
					return;
				}
				this.player_.cache_.selectedLanguage = {
					enabled: true,
					language: this.track.language,
					kind: this.track.kind
				};
			}
		};
		TextTrackMenuItem.prototype.dispose = function dispose() {
			this.track = null;
			_MenuItem.prototype.dispose.call(this);
		};
		return TextTrackMenuItem;
	}(MenuItem);
	Component.registerComponent('TextTrackMenuItem', TextTrackMenuItem);
	var OffTextTrackMenuItem = function (_TextTrackMenuItem) {
		inherits(OffTextTrackMenuItem, _TextTrackMenuItem);
		function OffTextTrackMenuItem(player, options) {
			classCallCheck(this, OffTextTrackMenuItem);
			options.track = {
				player: player,
				kind: options.kind,
				kinds: options.kinds,
				default: false,
				mode: 'disabled'
			};
			if (!options.kinds) {
				options.kinds = [options.kind];
			}
			if (options.label) {
				options.track.label = options.label;
			} else {
				options.track.label = options.kinds.join(' and ') + ' off';
			}
			options.selectable = true;
			options.multiSelectable = false;
			return possibleConstructorReturn(this, _TextTrackMenuItem.call(this, player, options));
		}
		OffTextTrackMenuItem.prototype.handleTracksChange = function handleTracksChange(event) {
			var tracks = this.player().textTracks();
			var shouldBeSelected = true;
			for (var i = 0, l = tracks.length; i < l; i++) {
				var track = tracks[i];
				if (this.options_.kinds.indexOf(track.kind) > -1 && track.mode === 'showing') {
					shouldBeSelected = false;
					break;
				}
			}
			if (shouldBeSelected !== this.isSelected_) {
				this.selected(shouldBeSelected);
			}
		};
		OffTextTrackMenuItem.prototype.handleSelectedLanguageChange = function handleSelectedLanguageChange(event) {
			var tracks = this.player().textTracks();
			var allHidden = true;
			for (var i = 0, l = tracks.length; i < l; i++) {
				var track = tracks[i];
				if (['captions', 'descriptions', 'subtitles'].indexOf(track.kind) > -1 && track.mode === 'showing') {
					allHidden = false;
					break;
				}
			}
			if (allHidden) {
				this.player_.cache_.selectedLanguage = {
					enabled: false
				};
			}
		};
		return OffTextTrackMenuItem;
	}(TextTrackMenuItem);
	Component.registerComponent('OffTextTrackMenuItem', OffTextTrackMenuItem);
	var TextTrackButton = function (_TrackButton) {
		inherits(TextTrackButton, _TrackButton);
		function TextTrackButton(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			classCallCheck(this, TextTrackButton);
			options.tracks = player.textTracks();
			return possibleConstructorReturn(this, _TrackButton.call(this, player, options));
		}
		TextTrackButton.prototype.createItems = function createItems() {
			var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			var TrackMenuItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TextTrackMenuItem;
			var label = void 0;
			if (this.label_) {
				label = this.label_ + ' off';
			}
			items.push(new OffTextTrackMenuItem(this.player_, {
				kinds: this.kinds_,
				kind: this.kind_,
				label: label
			}));
			this.hideThreshold_ += 1;
			var tracks = this.player_.textTracks();
			if (!Array.isArray(this.kinds_)) {
				this.kinds_ = [this.kind_];
			}
			for (var i = 0; i < tracks.length; i++) {
				var track = tracks[i];
				if (this.kinds_.indexOf(track.kind) > -1) {
					var item = new TrackMenuItem(this.player_, {
						track: track,
						selectable: true,
						multiSelectable: false
					});
					item.addClass('vjs-' + track.kind + '-menu-item');
					items.push(item);
				}
			}
			return items;
		};
		return TextTrackButton;
	}(TrackButton);
	Component.registerComponent('TextTrackButton', TextTrackButton);
	var ChaptersTrackMenuItem = function (_MenuItem) {
		inherits(ChaptersTrackMenuItem, _MenuItem);
		function ChaptersTrackMenuItem(player, options) {
			classCallCheck(this, ChaptersTrackMenuItem);
			var track = options.track;
			var cue = options.cue;
			var currentTime = player.currentTime();
			options.selectable = true;
			options.multiSelectable = false;
			options.label = cue.text;
			options.selected = cue.startTime <= currentTime && currentTime < cue.endTime;
			var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));
			_this.track = track;
			_this.cue = cue;
			track.addEventListener('cuechange', bind(_this, _this.update));
			return _this;
		}
		ChaptersTrackMenuItem.prototype.handleClick = function handleClick(event) {
			_MenuItem.prototype.handleClick.call(this);
			this.player_.currentTime(this.cue.startTime);
			this.update(this.cue.startTime);
		};
		ChaptersTrackMenuItem.prototype.update = function update(event) {
			var cue = this.cue;
			var currentTime = this.player_.currentTime();
			this.selected(cue.startTime <= currentTime && currentTime < cue.endTime);
		};
		return ChaptersTrackMenuItem;
	}(MenuItem);
	Component.registerComponent('ChaptersTrackMenuItem', ChaptersTrackMenuItem);
	var ChaptersButton = function (_TextTrackButton) {
		inherits(ChaptersButton, _TextTrackButton);
		function ChaptersButton(player, options, ready) {
			classCallCheck(this, ChaptersButton);
			return possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready));
		}
		ChaptersButton.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-chapters-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
		};
		ChaptersButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
			return 'vjs-chapters-button ' + _TextTrackButton.prototype.buildWrapperCSSClass.call(this);
		};
		ChaptersButton.prototype.update = function update(event) {
			if (!this.track_ || event && (event.type === 'addtrack' || event.type === 'removetrack')) {
				this.setTrack(this.findChaptersTrack());
			}
			_TextTrackButton.prototype.update.call(this);
		};
		ChaptersButton.prototype.setTrack = function setTrack(track) {
			if (this.track_ === track) {
				return;
			}
			if (!this.updateHandler_) {
				this.updateHandler_ = this.update.bind(this);
			}
			if (this.track_) {
				var remoteTextTrackEl = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
				if (remoteTextTrackEl) {
					remoteTextTrackEl.removeEventListener('load', this.updateHandler_);
				}
				this.track_ = null;
			}
			this.track_ = track;
			if (this.track_) {
				this.track_.mode = 'hidden';
				var _remoteTextTrackEl = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
				if (_remoteTextTrackEl) {
					_remoteTextTrackEl.addEventListener('load', this.updateHandler_);
				}
			}
		};
		ChaptersButton.prototype.findChaptersTrack = function findChaptersTrack() {
			var tracks = this.player_.textTracks() || [];
			for (var i = tracks.length - 1; i >= 0; i--) {
				var track = tracks[i];
				if (track.kind === this.kind_) {
					return track;
				}
			}
		};
		ChaptersButton.prototype.getMenuCaption = function getMenuCaption() {
			if (this.track_ && this.track_.label) {
				return this.track_.label;
			}
			return this.localize(toTitleCase(this.kind_));
		};
		ChaptersButton.prototype.createMenu = function createMenu() {
			this.options_.title = this.getMenuCaption();
			return _TextTrackButton.prototype.createMenu.call(this);
		};
		ChaptersButton.prototype.createItems = function createItems() {
			var items = [];
			if (!this.track_) {
				return items;
			}
			var cues = this.track_.cues;
			if (!cues) {
				return items;
			}
			for (var i = 0, l = cues.length; i < l; i++) {
				var cue = cues[i];
				var mi = new ChaptersTrackMenuItem(this.player_, { track: this.track_, cue: cue });
				items.push(mi);
			}
			return items;
		};
		return ChaptersButton;
	}(TextTrackButton);
	ChaptersButton.prototype.kind_ = 'chapters';
	ChaptersButton.prototype.controlText_ = 'Chapters';
	Component.registerComponent('ChaptersButton', ChaptersButton);
	var DescriptionsButton = function (_TextTrackButton) {
		inherits(DescriptionsButton, _TextTrackButton);
		function DescriptionsButton(player, options, ready) {
			classCallCheck(this, DescriptionsButton);
			var _this = possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready));
			var tracks = player.textTracks();
			var changeHandler = bind(_this, _this.handleTracksChange);
			tracks.addEventListener('change', changeHandler);
			_this.on('dispose', function () {
				tracks.removeEventListener('change', changeHandler);
			});
			return _this;
		}
		DescriptionsButton.prototype.handleTracksChange = function handleTracksChange(event) {
			var tracks = this.player().textTracks();
			var disabled = false;
			for (var i = 0, l = tracks.length; i < l; i++) {
				var track = tracks[i];
				if (track.kind !== this.kind_ && track.mode === 'showing') {
					disabled = true;
					break;
				}
			}
			if (disabled) {
				this.disable();
			} else {
				this.enable();
			}
		};
		DescriptionsButton.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-descriptions-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
		};
		DescriptionsButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
			return 'vjs-descriptions-button ' + _TextTrackButton.prototype.buildWrapperCSSClass.call(this);
		};
		return DescriptionsButton;
	}(TextTrackButton);
	DescriptionsButton.prototype.kind_ = 'descriptions';
	DescriptionsButton.prototype.controlText_ = 'Descriptions';
	Component.registerComponent('DescriptionsButton', DescriptionsButton);
	var SubtitlesButton = function (_TextTrackButton) {
		inherits(SubtitlesButton, _TextTrackButton);
		function SubtitlesButton(player, options, ready) {
			classCallCheck(this, SubtitlesButton);
			return possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready));
		}
		SubtitlesButton.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-subtitles-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
		};
		SubtitlesButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
			return 'vjs-subtitles-button ' + _TextTrackButton.prototype.buildWrapperCSSClass.call(this);
		};
		return SubtitlesButton;
	}(TextTrackButton);
	SubtitlesButton.prototype.kind_ = 'subtitles';
	SubtitlesButton.prototype.controlText_ = 'Subtitles';
	Component.registerComponent('SubtitlesButton', SubtitlesButton);
	var CaptionSettingsMenuItem = function (_TextTrackMenuItem) {
		inherits(CaptionSettingsMenuItem, _TextTrackMenuItem);
		function CaptionSettingsMenuItem(player, options) {
			classCallCheck(this, CaptionSettingsMenuItem);
			options.track = {
				player: player,
				kind: options.kind,
				label: options.kind + ' settings',
				selectable: false,
				default: false,
				mode: 'disabled'
			};
			options.selectable = false;
			options.name = 'CaptionSettingsMenuItem';
			var _this = possibleConstructorReturn(this, _TextTrackMenuItem.call(this, player, options));
			_this.addClass('vjs-texttrack-settings');
			_this.controlText(', opens ' + options.kind + ' settings dialog');
			return _this;
		}
		CaptionSettingsMenuItem.prototype.handleClick = function handleClick(event) {
			this.player().getChild('textTrackSettings').open();
		};
		return CaptionSettingsMenuItem;
	}(TextTrackMenuItem);
	Component.registerComponent('CaptionSettingsMenuItem', CaptionSettingsMenuItem);
	var CaptionsButton = function (_TextTrackButton) {
		inherits(CaptionsButton, _TextTrackButton);
		function CaptionsButton(player, options, ready) {
			classCallCheck(this, CaptionsButton);
			return possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready));
		}
		CaptionsButton.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-captions-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
		};
		CaptionsButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
			return 'vjs-captions-button ' + _TextTrackButton.prototype.buildWrapperCSSClass.call(this);
		};
		CaptionsButton.prototype.createItems = function createItems() {
			var items = [];
			if (!(this.player().tech_ && this.player().tech_.featuresNativeTextTracks) && this.player().getChild('textTrackSettings')) {
				items.push(new CaptionSettingsMenuItem(this.player_, { kind: this.kind_ }));
				this.hideThreshold_ += 1;
			}
			return _TextTrackButton.prototype.createItems.call(this, items);
		};
		return CaptionsButton;
	}(TextTrackButton);
	CaptionsButton.prototype.kind_ = 'captions';
	CaptionsButton.prototype.controlText_ = 'Captions';
	Component.registerComponent('CaptionsButton', CaptionsButton);
	var SubsCapsMenuItem = function (_TextTrackMenuItem) {
		inherits(SubsCapsMenuItem, _TextTrackMenuItem);
		function SubsCapsMenuItem() {
			classCallCheck(this, SubsCapsMenuItem);
			return possibleConstructorReturn(this, _TextTrackMenuItem.apply(this, arguments));
		}
		SubsCapsMenuItem.prototype.createEl = function createEl(type, props, attrs) {
			var innerHTML = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
			if (this.options_.track.kind === 'captions') {
				innerHTML += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize('Captions') + '</span>\n      ';
			}
			innerHTML += '</span>';
			var el = _TextTrackMenuItem.prototype.createEl.call(this, type, assign({
				innerHTML: innerHTML
			}, props), attrs);
			return el;
		};
		return SubsCapsMenuItem;
	}(TextTrackMenuItem);
	Component.registerComponent('SubsCapsMenuItem', SubsCapsMenuItem);
	var SubsCapsButton = function (_TextTrackButton) {
		inherits(SubsCapsButton, _TextTrackButton);
		function SubsCapsButton(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			classCallCheck(this, SubsCapsButton);
			var _this = possibleConstructorReturn(this, _TextTrackButton.call(this, player, options));
			_this.label_ = 'subtitles';
			if (['en', 'en-us', 'en-ca', 'fr-ca'].indexOf(_this.player_.language_) > -1) {
				_this.label_ = 'captions';
			}
			_this.menuButton_.controlText(toTitleCase(_this.label_));
			return _this;
		}
		SubsCapsButton.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-subs-caps-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
		};
		SubsCapsButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
			return 'vjs-subs-caps-button ' + _TextTrackButton.prototype.buildWrapperCSSClass.call(this);
		};
		SubsCapsButton.prototype.createItems = function createItems() {
			var items = [];
			if (!(this.player().tech_ && this.player().tech_.featuresNativeTextTracks) && this.player().getChild('textTrackSettings')) {
				items.push(new CaptionSettingsMenuItem(this.player_, { kind: this.label_ }));
				this.hideThreshold_ += 1;
			}
			items = _TextTrackButton.prototype.createItems.call(this, items, SubsCapsMenuItem);
			return items;
		};
		return SubsCapsButton;
	}(TextTrackButton);
	SubsCapsButton.prototype.kinds_ = ['captions', 'subtitles'];
	SubsCapsButton.prototype.controlText_ = 'Subtitles';
	Component.registerComponent('SubsCapsButton', SubsCapsButton);
	var AudioTrackMenuItem = function (_MenuItem) {
		inherits(AudioTrackMenuItem, _MenuItem);
		function AudioTrackMenuItem(player, options) {
			classCallCheck(this, AudioTrackMenuItem);
			var track = options.track;
			var tracks = player.audioTracks();
			options.label = track.label || track.language || 'Unknown';
			options.selected = track.enabled;
			var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));
			_this.track = track;
			_this.addClass('vjs-' + track.kind + '-menu-item');
			var changeHandler = function changeHandler() {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
				_this.handleTracksChange.apply(_this, args);
			};
			tracks.addEventListener('change', changeHandler);
			_this.on('dispose', function () {
				tracks.removeEventListener('change', changeHandler);
			});
			return _this;
		}
		AudioTrackMenuItem.prototype.createEl = function createEl(type, props, attrs) {
			var innerHTML = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
			if (this.options_.track.kind === 'main-desc') {
				innerHTML += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize('Descriptions') + '</span>\n      ';
			}
			innerHTML += '</span>';
			var el = _MenuItem.prototype.createEl.call(this, type, assign({
				innerHTML: innerHTML
			}, props), attrs);
			return el;
		};
		AudioTrackMenuItem.prototype.handleClick = function handleClick(event) {
			var tracks = this.player_.audioTracks();
			_MenuItem.prototype.handleClick.call(this, event);
			for (var i = 0; i < tracks.length; i++) {
				var track = tracks[i];
				track.enabled = track === this.track;
			}
		};
		AudioTrackMenuItem.prototype.handleTracksChange = function handleTracksChange(event) {
			this.selected(this.track.enabled);
		};
		return AudioTrackMenuItem;
	}(MenuItem);
	Component.registerComponent('AudioTrackMenuItem', AudioTrackMenuItem);
	var AudioTrackButton = function (_TrackButton) {
		inherits(AudioTrackButton, _TrackButton);
		function AudioTrackButton(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			classCallCheck(this, AudioTrackButton);
			options.tracks = player.audioTracks();
			return possibleConstructorReturn(this, _TrackButton.call(this, player, options));
		}
		AudioTrackButton.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-audio-button ' + _TrackButton.prototype.buildCSSClass.call(this);
		};
		AudioTrackButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
			return 'vjs-audio-button ' + _TrackButton.prototype.buildWrapperCSSClass.call(this);
		};
		AudioTrackButton.prototype.createItems = function createItems() {
			var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			this.hideThreshold_ = 1;
			var tracks = this.player_.audioTracks();
			for (var i = 0; i < tracks.length; i++) {
				var track = tracks[i];
				items.push(new AudioTrackMenuItem(this.player_, {
					track: track,
					selectable: true,
					multiSelectable: false
				}));
			}
			return items;
		};
		return AudioTrackButton;
	}(TrackButton);
	AudioTrackButton.prototype.controlText_ = 'Audio Track';
	Component.registerComponent('AudioTrackButton', AudioTrackButton);
	var PlaybackRateMenuItem = function (_MenuItem) {
		inherits(PlaybackRateMenuItem, _MenuItem);
		function PlaybackRateMenuItem(player, options) {
			classCallCheck(this, PlaybackRateMenuItem);
			var label = options.rate;
			var rate = parseFloat(label, 10);
			options.label = label;
			options.selected = rate === 1;
			options.selectable = true;
			options.multiSelectable = false;
			var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));
			_this.label = label;
			_this.rate = rate;
			_this.on(player, 'ratechange', _this.update);
			return _this;
		}
		PlaybackRateMenuItem.prototype.handleClick = function handleClick(event) {
			_MenuItem.prototype.handleClick.call(this);
			this.player().playbackRate(this.rate);
		};
		PlaybackRateMenuItem.prototype.update = function update(event) {
			this.selected(this.player().playbackRate() === this.rate);
		};
		return PlaybackRateMenuItem;
	}(MenuItem);
	PlaybackRateMenuItem.prototype.contentElType = 'button';
	Component.registerComponent('PlaybackRateMenuItem', PlaybackRateMenuItem);
	var PlaybackRateMenuButton = function (_MenuButton) {
		inherits(PlaybackRateMenuButton, _MenuButton);
		function PlaybackRateMenuButton(player, options) {
			classCallCheck(this, PlaybackRateMenuButton);
			var _this = possibleConstructorReturn(this, _MenuButton.call(this, player, options));
			_this.updateVisibility();
			_this.updateLabel();
			_this.on(player, 'loadstart', _this.updateVisibility);
			_this.on(player, 'ratechange', _this.updateLabel);
			return _this;
		}
		PlaybackRateMenuButton.prototype.createEl = function createEl$$1() {
			var el = _MenuButton.prototype.createEl.call(this);
			this.labelEl_ = createEl('div', {
				className: 'vjs-playback-rate-value',
				innerHTML: '1x'
			});
			el.appendChild(this.labelEl_);
			return el;
		};
		PlaybackRateMenuButton.prototype.dispose = function dispose() {
			this.labelEl_ = null;
			_MenuButton.prototype.dispose.call(this);
		};
		PlaybackRateMenuButton.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-playback-rate ' + _MenuButton.prototype.buildCSSClass.call(this);
		};
		PlaybackRateMenuButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
			return 'vjs-playback-rate ' + _MenuButton.prototype.buildWrapperCSSClass.call(this);
		};
		PlaybackRateMenuButton.prototype.createMenu = function createMenu() {
			var menu = new Menu(this.player());
			var rates = this.playbackRates();
			if (rates) {
				for (var i = rates.length - 1; i >= 0; i--) {
					menu.addChild(new PlaybackRateMenuItem(this.player(), { rate: rates[i] + 'x' }));
				}
			}
			return menu;
		};
		PlaybackRateMenuButton.prototype.updateARIAAttributes = function updateARIAAttributes() {
			this.el().setAttribute('aria-valuenow', this.player().playbackRate());
		};
		PlaybackRateMenuButton.prototype.handleClick = function handleClick(event) {
			var currentRate = this.player().playbackRate();
			var rates = this.playbackRates();
			var newRate = rates[0];
			for (var i = 0; i < rates.length; i++) {
				if (rates[i] > currentRate) {
					newRate = rates[i];
					break;
				}
			}
			this.player().playbackRate(newRate);
		};
		PlaybackRateMenuButton.prototype.playbackRates = function playbackRates() {
			return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates;
		};
		PlaybackRateMenuButton.prototype.playbackRateSupported = function playbackRateSupported() {
			return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0;
		};
		PlaybackRateMenuButton.prototype.updateVisibility = function updateVisibility(event) {
			if (this.playbackRateSupported()) {
				this.removeClass('vjs-hidden');
			} else {
				this.addClass('vjs-hidden');
			}
		};
		PlaybackRateMenuButton.prototype.updateLabel = function updateLabel(event) {
			if (this.playbackRateSupported()) {
				this.labelEl_.innerHTML = this.player().playbackRate() + 'x';
			}
		};
		return PlaybackRateMenuButton;
	}(MenuButton);
	PlaybackRateMenuButton.prototype.controlText_ = 'Playback Rate';
	Component.registerComponent('PlaybackRateMenuButton', PlaybackRateMenuButton);
	var Spacer = function (_Component) {
		inherits(Spacer, _Component);
		function Spacer() {
			classCallCheck(this, Spacer);
			return possibleConstructorReturn(this, _Component.apply(this, arguments));
		}
		Spacer.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-spacer ' + _Component.prototype.buildCSSClass.call(this);
		};
		Spacer.prototype.createEl = function createEl() {
			return _Component.prototype.createEl.call(this, 'div', {
				className: this.buildCSSClass()
			});
		};
		return Spacer;
	}(Component);
	Component.registerComponent('Spacer', Spacer);
	var CustomControlSpacer = function (_Spacer) {
		inherits(CustomControlSpacer, _Spacer);
		function CustomControlSpacer() {
			classCallCheck(this, CustomControlSpacer);
			return possibleConstructorReturn(this, _Spacer.apply(this, arguments));
		}
		CustomControlSpacer.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-custom-control-spacer ' + _Spacer.prototype.buildCSSClass.call(this);
		};
		CustomControlSpacer.prototype.createEl = function createEl() {
			var el = _Spacer.prototype.createEl.call(this, {
				className: this.buildCSSClass()
			});
			el.innerHTML = '\xA0';
			return el;
		};
		return CustomControlSpacer;
	}(Spacer);
	Component.registerComponent('CustomControlSpacer', CustomControlSpacer);
	var ControlBar = function (_Component) {
		inherits(ControlBar, _Component);
		function ControlBar() {
			classCallCheck(this, ControlBar);
			return possibleConstructorReturn(this, _Component.apply(this, arguments));
		}
		ControlBar.prototype.createEl = function createEl() {
			return _Component.prototype.createEl.call(this, 'div', {
				className: 'vjs-control-bar',
				dir: 'ltr'
			});
		};
		return ControlBar;
	}(Component);
	ControlBar.prototype.options_ = {
		children: ['playToggle', 'volumePanel', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'liveDisplay', 'remainingTimeDisplay', 'customControlSpacer', 'playbackRateMenuButton', 'chaptersButton', 'descriptionsButton', 'subsCapsButton', 'audioTrackButton', 'fullscreenToggle']
	};
	Component.registerComponent('ControlBar', ControlBar);
	var ErrorDisplay = function (_ModalDialog) {
		inherits(ErrorDisplay, _ModalDialog);
		function ErrorDisplay(player, options) {
			classCallCheck(this, ErrorDisplay);
			var _this = possibleConstructorReturn(this, _ModalDialog.call(this, player, options));
			_this.on(player, 'error', _this.open);
			return _this;
		}
		ErrorDisplay.prototype.buildCSSClass = function buildCSSClass() {
			return 'vjs-error-display ' + _ModalDialog.prototype.buildCSSClass.call(this);
		};
		ErrorDisplay.prototype.content = function content() {
			var error = this.player().error();
			return error ? this.localize(error.message) : '';
		};
		return ErrorDisplay;
	}(ModalDialog);
	ErrorDisplay.prototype.options_ = mergeOptions(ModalDialog.prototype.options_, {
		pauseOnOpen: false,
		fillAlways: true,
		temporary: false,
		uncloseable: true
	});
	Component.registerComponent('ErrorDisplay', ErrorDisplay);
	var LOCAL_STORAGE_KEY = 'vjs-text-track-settings';
	var COLOR_BLACK = ['#000', 'Black'];
	var COLOR_BLUE = ['#00F', 'Blue'];
	var COLOR_CYAN = ['#0FF', 'Cyan'];
	var COLOR_GREEN = ['#0F0', 'Green'];
	var COLOR_MAGENTA = ['#F0F', 'Magenta'];
	var COLOR_RED = ['#F00', 'Red'];
	var COLOR_WHITE = ['#FFF', 'White'];
	var COLOR_YELLOW = ['#FF0', 'Yellow'];
	var OPACITY_OPAQUE = ['1', 'Opaque'];
	var OPACITY_SEMI = ['0.5', 'Semi-Transparent'];
	var OPACITY_TRANS = ['0', 'Transparent'];
	var selectConfigs = {
		backgroundColor: {
			selector: '.vjs-bg-color > select',
			id: 'captions-background-color-%s',
			label: 'Color',
			options: [COLOR_BLACK, COLOR_WHITE, COLOR_RED, COLOR_GREEN, COLOR_BLUE, COLOR_YELLOW, COLOR_MAGENTA, COLOR_CYAN]
		},
		backgroundOpacity: {
			selector: '.vjs-bg-opacity > select',
			id: 'captions-background-opacity-%s',
			label: 'Transparency',
			options: [OPACITY_OPAQUE, OPACITY_SEMI, OPACITY_TRANS]
		},
		color: {
			selector: '.vjs-fg-color > select',
			id: 'captions-foreground-color-%s',
			label: 'Color',
			options: [COLOR_WHITE, COLOR_BLACK, COLOR_RED, COLOR_GREEN, COLOR_BLUE, COLOR_YELLOW, COLOR_MAGENTA, COLOR_CYAN]
		},
		edgeStyle: {
			selector: '.vjs-edge-style > select',
			id: '%s',
			label: 'Text Edge Style',
			options: [['none', 'None'], ['raised', 'Raised'], ['depressed', 'Depressed'], ['uniform', 'Uniform'], ['dropshadow', 'Dropshadow']]
		},
		fontFamily: {
			selector: '.vjs-font-family > select',
			id: 'captions-font-family-%s',
			label: 'Font Family',
			options: [['proportionalSansSerif', 'Proportional Sans-Serif'], ['monospaceSansSerif', 'Monospace Sans-Serif'], ['proportionalSerif', 'Proportional Serif'], ['monospaceSerif', 'Monospace Serif'], ['casual', 'Casual'], ['script', 'Script'], ['small-caps', 'Small Caps']]
		},
		fontPercent: {
			selector: '.vjs-font-percent > select',
			id: 'captions-font-size-%s',
			label: 'Font Size',
			options: [['0.50', '50%'], ['0.75', '75%'], ['1.00', '100%'], ['1.25', '125%'], ['1.50', '150%'], ['1.75', '175%'], ['2.00', '200%'], ['3.00', '300%'], ['4.00', '400%']],
			default: 2,
			parser: function parser(v) {
				return v === '1.00' ? null : Number(v);
			}
		},
		textOpacity: {
			selector: '.vjs-text-opacity > select',
			id: 'captions-foreground-opacity-%s',
			label: 'Transparency',
			options: [OPACITY_OPAQUE, OPACITY_SEMI]
		},
		windowColor: {
			selector: '.vjs-window-color > select',
			id: 'captions-window-color-%s',
			label: 'Color'
		},
		windowOpacity: {
			selector: '.vjs-window-opacity > select',
			id: 'captions-window-opacity-%s',
			label: 'Transparency',
			options: [OPACITY_TRANS, OPACITY_SEMI, OPACITY_OPAQUE]
		}
	};
	selectConfigs.windowColor.options = selectConfigs.backgroundColor.options;
	function parseOptionValue(value, parser) {
		if (parser) {
			value = parser(value);
		}
		if (value && value !== 'none') {
			return value;
		}
	}
	function getSelectedOptionValue(el, parser) {
		var value = el.options[el.options.selectedIndex].value;
		return parseOptionValue(value, parser);
	}
	function setSelectedOption(el, value, parser) {
		if (!value) {
			return;
		}
		for (var i = 0; i < el.options.length; i++) {
			if (parseOptionValue(el.options[i].value, parser) === value) {
				el.selectedIndex = i;
				break;
			}
		}
	}
	var TextTrackSettings = function (_ModalDialog) {
		inherits(TextTrackSettings, _ModalDialog);
		function TextTrackSettings(player, options) {
			classCallCheck(this, TextTrackSettings);
			options.temporary = false;
			var _this = possibleConstructorReturn(this, _ModalDialog.call(this, player, options));
			_this.updateDisplay = bind(_this, _this.updateDisplay);
			_this.fill();
			_this.hasBeenOpened_ = _this.hasBeenFilled_ = true;
			_this.endDialog = createEl('p', {
				className: 'vjs-control-text',
				textContent: _this.localize('End of dialog window.')
			});
			_this.el().appendChild(_this.endDialog);
			_this.setDefaults();
			if (options.persistTextTrackSettings === undefined) {
				_this.options_.persistTextTrackSettings = _this.options_.playerOptions.persistTextTrackSettings;
			}
			_this.on(_this.$('.vjs-done-button'), 'click', function () {
				_this.saveSettings();
				_this.close();
			});
			_this.on(_this.$('.vjs-default-button'), 'click', function () {
				_this.setDefaults();
				_this.updateDisplay();
			});
			each(selectConfigs, function (config) {
				_this.on(_this.$(config.selector), 'change', _this.updateDisplay);
			});
			if (_this.options_.persistTextTrackSettings) {
				_this.restoreSettings();
			}
			return _this;
		}
		TextTrackSettings.prototype.dispose = function dispose() {
			this.endDialog = null;
			_ModalDialog.prototype.dispose.call(this);
		};
		TextTrackSettings.prototype.createElSelect_ = function createElSelect_(key) {
			var _this2 = this;
			var legendId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
			var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'label';
			var config = selectConfigs[key];
			var id = config.id.replace('%s', this.id_);
			var selectLabelledbyIds = [legendId, id].join(' ').trim();
			return ['<' + type + ' id="' + id + '" class="' + (type === 'label' ? 'vjs-label' : '') + '">', this.localize(config.label), '</' + type + '>', '<select aria-labelledby="' + selectLabelledbyIds + '">'].concat(config.options.map(function (o) {
				var optionId = id + '-' + o[1].replace(/\W+/g, '');
				return ['<option id="' + optionId + '" value="' + o[0] + '" ', 'aria-labelledby="' + selectLabelledbyIds + ' ' + optionId + '">', _this2.localize(o[1]), '</option>'].join('');
			})).concat('</select>').join('');
		};
		TextTrackSettings.prototype.createElFgColor_ = function createElFgColor_() {
			var legendId = 'captions-text-legend-' + this.id_;
			return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + legendId + '">', this.localize('Text'), '</legend>', this.createElSelect_('color', legendId), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_('textOpacity', legendId), '</span>', '</fieldset>'].join('');
		};
		TextTrackSettings.prototype.createElBgColor_ = function createElBgColor_() {
			var legendId = 'captions-background-' + this.id_;
			return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + legendId + '">', this.localize('Background'), '</legend>', this.createElSelect_('backgroundColor', legendId), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_('backgroundOpacity', legendId), '</span>', '</fieldset>'].join('');
		};
		TextTrackSettings.prototype.createElWinColor_ = function createElWinColor_() {
			var legendId = 'captions-window-' + this.id_;
			return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + legendId + '">', this.localize('Window'), '</legend>', this.createElSelect_('windowColor', legendId), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_('windowOpacity', legendId), '</span>', '</fieldset>'].join('');
		};
		TextTrackSettings.prototype.createElColors_ = function createElColors_() {
			return createEl('div', {
				className: 'vjs-track-settings-colors',
				innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join('')
			});
		};
		TextTrackSettings.prototype.createElFont_ = function createElFont_() {
			return createEl('div', {
				className: 'vjs-track-settings-font',
				innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_('fontPercent', '', 'legend'), '</fieldset>', '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_('edgeStyle', '', 'legend'), '</fieldset>', '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_('fontFamily', '', 'legend'), '</fieldset>'].join('')
			});
		};
		TextTrackSettings.prototype.createElControls_ = function createElControls_() {
			var defaultsDescription = this.localize('restore all settings to the default values');
			return createEl('div', {
				className: 'vjs-track-settings-controls',
				innerHTML: ['<button class="vjs-default-button" title="' + defaultsDescription + '">', this.localize('Reset'), '<span class="vjs-control-text"> ' + defaultsDescription + '</span>', '</button>', '<button class="vjs-done-button">' + this.localize('Done') + '</button>'].join('')
			});
		};
		TextTrackSettings.prototype.content = function content() {
			return [this.createElColors_(), this.createElFont_(), this.createElControls_()];
		};
		TextTrackSettings.prototype.label = function label() {
			return this.localize('Caption Settings Dialog');
		};
		TextTrackSettings.prototype.description = function description() {
			return this.localize('Beginning of dialog window. Escape will cancel and close the window.');
		};
		TextTrackSettings.prototype.buildCSSClass = function buildCSSClass() {
			return _ModalDialog.prototype.buildCSSClass.call(this) + ' vjs-text-track-settings';
		};
		TextTrackSettings.prototype.getValues = function getValues() {
			var _this3 = this;
			return reduce(selectConfigs, function (accum, config, key) {
				var value = getSelectedOptionValue(_this3.$(config.selector), config.parser);
				if (value !== undefined) {
					accum[key] = value;
				}
				return accum;
			}, {});
		};
		TextTrackSettings.prototype.setValues = function setValues(values) {
			var _this4 = this;
			each(selectConfigs, function (config, key) {
				setSelectedOption(_this4.$(config.selector), values[key], config.parser);
			});
		};
		TextTrackSettings.prototype.setDefaults = function setDefaults() {
			var _this5 = this;
			each(selectConfigs, function (config) {
				var index = config.hasOwnProperty('default') ? config.default : 0;
				_this5.$(config.selector).selectedIndex = index;
			});
		};
		TextTrackSettings.prototype.restoreSettings = function restoreSettings() {
			var values = void 0;
			try {
				values = JSON.parse(window_1.localStorage.getItem(LOCAL_STORAGE_KEY));
			} catch (err) {
				log$1.warn(err);
			}
			if (values) {
				this.setValues(values);
			}
		};
		TextTrackSettings.prototype.saveSettings = function saveSettings() {
			if (!this.options_.persistTextTrackSettings) {
				return;
			}
			var values = this.getValues();
			try {
				if (Object.keys(values).length) {
					window_1.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
				} else {
					window_1.localStorage.removeItem(LOCAL_STORAGE_KEY);
				}
			} catch (err) {
				log$1.warn(err);
			}
		};
		TextTrackSettings.prototype.updateDisplay = function updateDisplay() {
			var ttDisplay = this.player_.getChild('textTrackDisplay');
			if (ttDisplay) {
				ttDisplay.updateDisplay();
			}
		};
		TextTrackSettings.prototype.conditionalBlur_ = function conditionalBlur_() {
			this.previouslyActiveEl_ = null;
			this.off(document_1, 'keydown', this.handleKeyDown);
			var cb = this.player_.controlBar;
			var subsCapsBtn = cb && cb.subsCapsButton;
			var ccBtn = cb && cb.captionsButton;
			if (subsCapsBtn) {
				subsCapsBtn.focus();
			} else if (ccBtn) {
				ccBtn.focus();
			}
		};
		return TextTrackSettings;
	}(ModalDialog);
	Component.registerComponent('TextTrackSettings', TextTrackSettings);
	var ResizeManager = function (_Component) {
		inherits(ResizeManager, _Component);
		function ResizeManager(player, options) {
			classCallCheck(this, ResizeManager);
			var RESIZE_OBSERVER_AVAILABLE = options.ResizeObserver || window_1.ResizeObserver;
			if (options.ResizeObserver === null) {
				RESIZE_OBSERVER_AVAILABLE = false;
			}
			var options_ = mergeOptions({
				createEl: !RESIZE_OBSERVER_AVAILABLE,
				reportTouchActivity: false
			}, options);
			var _this = possibleConstructorReturn(this, _Component.call(this, player, options_));
			_this.ResizeObserver = options.ResizeObserver || window_1.ResizeObserver;
			_this.loadListener_ = null;
			_this.resizeObserver_ = null;
			_this.debouncedHandler_ = debounce(function () {
				_this.resizeHandler();
			}, 100, false, player);
			if (RESIZE_OBSERVER_AVAILABLE) {
				_this.resizeObserver_ = new _this.ResizeObserver(_this.debouncedHandler_);
				_this.resizeObserver_.observe(player.el());
			} else {
				_this.loadListener_ = function () {
					if (_this.el_.contentWindow) {
						on(_this.el_.contentWindow, 'resize', _this.debouncedHandler_);
					}
					_this.off('load', _this.loadListener_);
				};
				_this.on('load', _this.loadListener_);
			}
			return _this;
		}
		ResizeManager.prototype.createEl = function createEl() {
			return _Component.prototype.createEl.call(this, 'iframe', {
				className: 'vjs-resize-manager'
			});
		};
		ResizeManager.prototype.resizeHandler = function resizeHandler() {
			this.player_.trigger('playerresize');
		};
		ResizeManager.prototype.dispose = function dispose() {
			if (this.resizeObserver_) {
				if (this.player_.el()) {
					this.resizeObserver_.unobserve(this.player_.el());
				}
				this.resizeObserver_.disconnect();
			}
			if (this.el_ && this.el_.contentWindow) {
				off(this.el_.contentWindow, 'resize', this.debouncedHandler_);
			}
			if (this.loadListener_) {
				this.off('load', this.loadListener_);
			}
			if (this.debouncedHandler_) {
				this.debouncedHandler_.cancel();
			}
			this.ResizeObserver = null;
			this.resizeObserver = null;
			this.debouncedHandler_ = null;
			this.loadListener_ = null;
			_Component.prototype.dispose.call(this);
		};
		return ResizeManager;
	}(Component);
	Component.registerComponent('ResizeManager', ResizeManager);
	var sourcesetLoad = function sourcesetLoad(tech) {
		var el = tech.el();
		if (el.hasAttribute('src')) {
			tech.triggerSourceset(el.src);
			return true;
		}
		var sources = tech.$$('source');
		var srcUrls = [];
		var src = '';
		if (!sources.length) {
			return false;
		}
		for (var i = 0; i < sources.length; i++) {
			var url = sources[i].src;
			if (url && srcUrls.indexOf(url) === -1) {
				srcUrls.push(url);
			}
		}
		if (!srcUrls.length) {
			return false;
		}
		if (srcUrls.length === 1) {
			src = srcUrls[0];
		}
		tech.triggerSourceset(src);
		return true;
	};
	var innerHTMLDescriptorPolyfill = Object.defineProperty({}, 'innerHTML', {
		get: function get() {
			return this.cloneNode(true).innerHTML;
		},
		set: function set(v) {
			var dummy = document_1.createElement(this.nodeName.toLowerCase());
			dummy.innerHTML = v;
			var docFrag = document_1.createDocumentFragment();
			while (dummy.childNodes.length) {
				docFrag.appendChild(dummy.childNodes[0]);
			}
			this.innerText = '';
			window_1.Element.prototype.appendChild.call(this, docFrag);
			return this.innerHTML;
		}
	});
	var getDescriptor = function getDescriptor(priority, prop) {
		var descriptor = {};
		for (var i = 0; i < priority.length; i++) {
			descriptor = Object.getOwnPropertyDescriptor(priority[i], prop);
			if (descriptor && descriptor.set && descriptor.get) {
				break;
			}
		}
		descriptor.enumerable = true;
		descriptor.configurable = true;
		return descriptor;
	};
	var getInnerHTMLDescriptor = function getInnerHTMLDescriptor(tech) {
		return getDescriptor([tech.el(), window_1.HTMLMediaElement.prototype, window_1.Element.prototype, innerHTMLDescriptorPolyfill], 'innerHTML');
	};
	var firstSourceWatch = function firstSourceWatch(tech) {
		var el = tech.el();
		if (el.resetSourceWatch_) {
			return;
		}
		var old = {};
		var innerDescriptor = getInnerHTMLDescriptor(tech);
		var appendWrapper = function appendWrapper(appendFn) {
			return function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
				var retval = appendFn.apply(el, args);
				sourcesetLoad(tech);
				return retval;
			};
		};
		['append', 'appendChild', 'insertAdjacentHTML'].forEach(function (k) {
			if (!el[k]) {
				return;
			}
			old[k] = el[k];
			el[k] = appendWrapper(old[k]);
		});
		Object.defineProperty(el, 'innerHTML', mergeOptions(innerDescriptor, {
			set: appendWrapper(innerDescriptor.set)
		}));
		el.resetSourceWatch_ = function () {
			el.resetSourceWatch_ = null;
			Object.keys(old).forEach(function (k) {
				el[k] = old[k];
			});
			Object.defineProperty(el, 'innerHTML', innerDescriptor);
		};
		tech.one('sourceset', el.resetSourceWatch_);
	};
	var srcDescriptorPolyfill = Object.defineProperty({}, 'src', {
		get: function get() {
			if (this.hasAttribute('src')) {
				return getAbsoluteURL(window_1.Element.prototype.getAttribute.call(this, 'src'));
			}
			return '';
		},
		set: function set(v) {
			window_1.Element.prototype.setAttribute.call(this, 'src', v);
			return v;
		}
	});
	var getSrcDescriptor = function getSrcDescriptor(tech) {
		return getDescriptor([tech.el(), window_1.HTMLMediaElement.prototype, srcDescriptorPolyfill], 'src');
	};
	var setupSourceset = function setupSourceset(tech) {
		if (!tech.featuresSourceset) {
			return;
		}
		var el = tech.el();
		if (el.resetSourceset_) {
			return;
		}
		var srcDescriptor = getSrcDescriptor(tech);
		var oldSetAttribute = el.setAttribute;
		var oldLoad = el.load;
		Object.defineProperty(el, 'src', mergeOptions(srcDescriptor, {
			set: function set(v) {
				var retval = srcDescriptor.set.call(el, v);
				tech.triggerSourceset(el.src);
				return retval;
			}
		}));
		el.setAttribute = function (n, v) {
			var retval = oldSetAttribute.call(el, n, v);
			if (/src/i.test(n)) {
				tech.triggerSourceset(el.src);
			}
			return retval;
		};
		el.load = function () {
			var retval = oldLoad.call(el);
			if (!sourcesetLoad(tech)) {
				tech.triggerSourceset('');
				firstSourceWatch(tech);
			}
			return retval;
		};
		if (el.currentSrc) {
			tech.triggerSourceset(el.currentSrc);
		} else if (!sourcesetLoad(tech)) {
			firstSourceWatch(tech);
		}
		el.resetSourceset_ = function () {
			el.resetSourceset_ = null;
			el.load = oldLoad;
			el.setAttribute = oldSetAttribute;
			Object.defineProperty(el, 'src', srcDescriptor);
			if (el.resetSourceWatch_) {
				el.resetSourceWatch_();
			}
		};
	};
	var _templateObject$1 = taggedTemplateLiteralLoose(['Text Tracks are being loaded from another origin but the crossorigin attribute isn\'t used.\n            This may prevent text tracks from loading.'], ['Text Tracks are being loaded from another origin but the crossorigin attribute isn\'t used.\n            This may prevent text tracks from loading.']);
	var Html5 = function (_Tech) {
		inherits(Html5, _Tech);
		function Html5(options, ready) {
			classCallCheck(this, Html5);
			var _this = possibleConstructorReturn(this, _Tech.call(this, options, ready));
			var source = options.source;
			var crossoriginTracks = false;
			if (source && (_this.el_.currentSrc !== source.src || options.tag && options.tag.initNetworkState_ === 3)) {
				_this.setSource(source);
			} else {
				_this.handleLateInit_(_this.el_);
			}
			if (options.enableSourceset) {
				_this.setupSourcesetHandling_();
			}
			if (_this.el_.hasChildNodes()) {
				var nodes = _this.el_.childNodes;
				var nodesLength = nodes.length;
				var removeNodes = [];
				while (nodesLength--) {
					var node = nodes[nodesLength];
					var nodeName = node.nodeName.toLowerCase();
					if (nodeName === 'track') {
						if (!_this.featuresNativeTextTracks) {
							removeNodes.push(node);
						} else {
							_this.remoteTextTrackEls().addTrackElement_(node);
							_this.remoteTextTracks().addTrack(node.track);
							_this.textTracks().addTrack(node.track);
							if (!crossoriginTracks && !_this.el_.hasAttribute('crossorigin') && isCrossOrigin(node.src)) {
								crossoriginTracks = true;
							}
						}
					}
				}
				for (var i = 0; i < removeNodes.length; i++) {
					_this.el_.removeChild(removeNodes[i]);
				}
			}
			_this.proxyNativeTracks_();
			if (_this.featuresNativeTextTracks && crossoriginTracks) {
				log$1.warn(tsml(_templateObject$1));
			}
			_this.restoreMetadataTracksInIOSNativePlayer_();
			if ((TOUCH_ENABLED || IS_IPHONE || IS_NATIVE_ANDROID) && options.nativeControlsForTouch === true) {
				_this.setControls(true);
			}
			_this.proxyWebkitFullscreen_();
			_this.triggerReady();
			return _this;
		}
		Html5.prototype.dispose = function dispose() {
			if (this.el_ && this.el_.resetSourceset_) {
				this.el_.resetSourceset_();
			}
			Html5.disposeMediaElement(this.el_);
			this.options_ = null;
			_Tech.prototype.dispose.call(this);
		};
		Html5.prototype.setupSourcesetHandling_ = function setupSourcesetHandling_() {
			setupSourceset(this);
		};
		Html5.prototype.restoreMetadataTracksInIOSNativePlayer_ = function restoreMetadataTracksInIOSNativePlayer_() {
			var textTracks = this.textTracks();
			var metadataTracksPreFullscreenState = void 0;
			var takeMetadataTrackSnapshot = function takeMetadataTrackSnapshot() {
				metadataTracksPreFullscreenState = [];
				for (var i = 0; i < textTracks.length; i++) {
					var track = textTracks[i];
					if (track.kind === 'metadata') {
						metadataTracksPreFullscreenState.push({
							track: track,
							storedMode: track.mode
						});
					}
				}
			};
			takeMetadataTrackSnapshot();
			textTracks.addEventListener('change', takeMetadataTrackSnapshot);
			this.on('dispose', function () {
				return textTracks.removeEventListener('change', takeMetadataTrackSnapshot);
			});
			var restoreTrackMode = function restoreTrackMode() {
				for (var i = 0; i < metadataTracksPreFullscreenState.length; i++) {
					var storedTrack = metadataTracksPreFullscreenState[i];
					if (storedTrack.track.mode === 'disabled' && storedTrack.track.mode !== storedTrack.storedMode) {
						storedTrack.track.mode = storedTrack.storedMode;
					}
				}
				textTracks.removeEventListener('change', restoreTrackMode);
			};
			this.on('webkitbeginfullscreen', function () {
				textTracks.removeEventListener('change', takeMetadataTrackSnapshot);
				textTracks.removeEventListener('change', restoreTrackMode);
				textTracks.addEventListener('change', restoreTrackMode);
			});
			this.on('webkitendfullscreen', function () {
				textTracks.removeEventListener('change', takeMetadataTrackSnapshot);
				textTracks.addEventListener('change', takeMetadataTrackSnapshot);
				textTracks.removeEventListener('change', restoreTrackMode);
			});
		};
		Html5.prototype.overrideNative_ = function overrideNative_(type, override) {
			var _this2 = this;
			if (override !== this['featuresNative' + type + 'Tracks']) {
				return;
			}
			var lowerCaseType = type.toLowerCase();
			if (this[lowerCaseType + 'TracksListeners_']) {
				Object.keys(this[lowerCaseType + 'TracksListeners_']).forEach(function (eventName) {
					var elTracks = _this2.el()[lowerCaseType + 'Tracks'];
					elTracks.removeEventListener(eventName, _this2[lowerCaseType + 'TracksListeners_'][eventName]);
				});
			}
			this['featuresNative' + type + 'Tracks'] = !override;
			this[lowerCaseType + 'TracksListeners_'] = null;
			this.proxyNativeTracksForType_(lowerCaseType);
		};
		Html5.prototype.overrideNativeAudioTracks = function overrideNativeAudioTracks(override) {
			this.overrideNative_('Audio', override);
		};
		Html5.prototype.overrideNativeVideoTracks = function overrideNativeVideoTracks(override) {
			this.overrideNative_('Video', override);
		};
		Html5.prototype.proxyNativeTracksForType_ = function proxyNativeTracksForType_(name) {
			var _this3 = this;
			var props = NORMAL[name];
			var elTracks = this.el()[props.getterName];
			var techTracks = this[props.getterName]();
			if (!this['featuresNative' + props.capitalName + 'Tracks'] || !elTracks || !elTracks.addEventListener) {
				return;
			}
			var listeners = {
				change: function change(e) {
					techTracks.trigger({
						type: 'change',
						target: techTracks,
						currentTarget: techTracks,
						srcElement: techTracks
					});
				},
				addtrack: function addtrack(e) {
					techTracks.addTrack(e.track);
				},
				removetrack: function removetrack(e) {
					techTracks.removeTrack(e.track);
				}
			};
			var removeOldTracks = function removeOldTracks() {
				var removeTracks = [];
				for (var i = 0; i < techTracks.length; i++) {
					var found = false;
					for (var j = 0; j < elTracks.length; j++) {
						if (elTracks[j] === techTracks[i]) {
							found = true;
							break;
						}
					}
					if (!found) {
						removeTracks.push(techTracks[i]);
					}
				}
				while (removeTracks.length) {
					techTracks.removeTrack(removeTracks.shift());
				}
			};
			this[props.getterName + 'Listeners_'] = listeners;
			Object.keys(listeners).forEach(function (eventName) {
				var listener = listeners[eventName];
				elTracks.addEventListener(eventName, listener);
				_this3.on('dispose', function (e) {
					return elTracks.removeEventListener(eventName, listener);
				});
			});
			this.on('loadstart', removeOldTracks);
			this.on('dispose', function (e) {
				return _this3.off('loadstart', removeOldTracks);
			});
		};
		Html5.prototype.proxyNativeTracks_ = function proxyNativeTracks_() {
			var _this4 = this;
			NORMAL.names.forEach(function (name) {
				_this4.proxyNativeTracksForType_(name);
			});
		};
		Html5.prototype.createEl = function createEl$$1() {
			var el = this.options_.tag;
			if (!el || !(this.options_.playerElIngest || this.movingMediaElementInDOM)) {
				if (el) {
					var clone = el.cloneNode(true);
					if (el.parentNode) {
						el.parentNode.insertBefore(clone, el);
					}
					Html5.disposeMediaElement(el);
					el = clone;
				} else {
					el = document_1.createElement('video');
					var tagAttributes = this.options_.tag && getAttributes(this.options_.tag);
					var attributes = mergeOptions({}, tagAttributes);
					if (!TOUCH_ENABLED || this.options_.nativeControlsForTouch !== true) {
						delete attributes.controls;
					}
					setAttributes(el, assign(attributes, {
						id: this.options_.techId,
						class: 'vjs-tech'
					}));
				}
				el.playerId = this.options_.playerId;
			}
			if (typeof this.options_.preload !== 'undefined') {
				setAttribute(el, 'preload', this.options_.preload);
			}
			var settingsAttrs = ['loop', 'muted', 'playsinline', 'autoplay'];
			for (var i = 0; i < settingsAttrs.length; i++) {
				var attr = settingsAttrs[i];
				var value = this.options_[attr];
				if (typeof value !== 'undefined') {
					if (value) {
						setAttribute(el, attr, attr);
					} else {
						removeAttribute(el, attr);
					}
					el[attr] = value;
				}
			}
			return el;
		};
		Html5.prototype.handleLateInit_ = function handleLateInit_(el) {
			if (el.networkState === 0 || el.networkState === 3) {
				return;
			}
			if (el.readyState === 0) {
				var loadstartFired = false;
				var setLoadstartFired = function setLoadstartFired() {
					loadstartFired = true;
				};
				this.on('loadstart', setLoadstartFired);
				var triggerLoadstart = function triggerLoadstart() {
					if (!loadstartFired) {
						this.trigger('loadstart');
					}
				};
				this.on('loadedmetadata', triggerLoadstart);
				this.ready(function () {
					this.off('loadstart', setLoadstartFired);
					this.off('loadedmetadata', triggerLoadstart);
					if (!loadstartFired) {
						this.trigger('loadstart');
					}
				});
				return;
			}
			var eventsToTrigger = ['loadstart'];
			eventsToTrigger.push('loadedmetadata');
			if (el.readyState >= 2) {
				eventsToTrigger.push('loadeddata');
			}
			if (el.readyState >= 3) {
				eventsToTrigger.push('canplay');
			}
			if (el.readyState >= 4) {
				eventsToTrigger.push('canplaythrough');
			}
			this.ready(function () {
				eventsToTrigger.forEach(function (type) {
					this.trigger(type);
				}, this);
			});
		};
		Html5.prototype.setCurrentTime = function setCurrentTime(seconds) {
			try {
				this.el_.currentTime = seconds;
			} catch (e) {
				log$1(e, 'Video is not ready. (Video.js)');
			}
		};
		Html5.prototype.duration = function duration() {
			var _this5 = this;
			if (this.el_.duration === Infinity && IS_ANDROID && IS_CHROME && this.el_.currentTime === 0) {
				var checkProgress = function checkProgress() {
					if (_this5.el_.currentTime > 0) {
						if (_this5.el_.duration === Infinity) {
							_this5.trigger('durationchange');
						}
						_this5.off('timeupdate', checkProgress);
					}
				};
				this.on('timeupdate', checkProgress);
				return NaN;
			}
			return this.el_.duration || NaN;
		};
		Html5.prototype.width = function width() {
			return this.el_.offsetWidth;
		};
		Html5.prototype.height = function height() {
			return this.el_.offsetHeight;
		};
		Html5.prototype.proxyWebkitFullscreen_ = function proxyWebkitFullscreen_() {
			var _this6 = this;
			if (!('webkitDisplayingFullscreen' in this.el_)) {
				return;
			}
			var endFn = function endFn() {
				this.trigger('fullscreenchange', { isFullscreen: false });
			};
			var beginFn = function beginFn() {
				if ('webkitPresentationMode' in this.el_ && this.el_.webkitPresentationMode !== 'picture-in-picture') {
					this.one('webkitendfullscreen', endFn);
					this.trigger('fullscreenchange', { isFullscreen: true });
				}
			};
			this.on('webkitbeginfullscreen', beginFn);
			this.on('dispose', function () {
				_this6.off('webkitbeginfullscreen', beginFn);
				_this6.off('webkitendfullscreen', endFn);
			});
		};
		Html5.prototype.supportsFullScreen = function supportsFullScreen() {
			if (typeof this.el_.webkitEnterFullScreen === 'function') {
				var userAgent = window_1.navigator && window_1.navigator.userAgent || '';
				if (/Android/.test(userAgent) || !/Chrome|Mac OS X 10.5/.test(userAgent)) {
					return true;
				}
			}
			return false;
		};
		Html5.prototype.enterFullScreen = function enterFullScreen() {
			var video = this.el_;
			if (video.paused && video.networkState <= video.HAVE_METADATA) {
				this.el_.play();
				this.setTimeout(function () {
					video.pause();
					video.webkitEnterFullScreen();
				}, 0);
			} else {
				video.webkitEnterFullScreen();
			}
		};
		Html5.prototype.exitFullScreen = function exitFullScreen() {
			this.el_.webkitExitFullScreen();
		};
		Html5.prototype.src = function src(_src) {
			if (_src === undefined) {
				return this.el_.src;
			}
			this.setSrc(_src);
		};
		Html5.prototype.reset = function reset() {
			Html5.resetMediaElement(this.el_);
		};
		Html5.prototype.currentSrc = function currentSrc() {
			if (this.currentSource_) {
				return this.currentSource_.src;
			}
			return this.el_.currentSrc;
		};
		Html5.prototype.setControls = function setControls(val) {
			this.el_.controls = !!val;
		};
		Html5.prototype.addTextTrack = function addTextTrack(kind, label, language) {
			if (!this.featuresNativeTextTracks) {
				return _Tech.prototype.addTextTrack.call(this, kind, label, language);
			}
			return this.el_.addTextTrack(kind, label, language);
		};
		Html5.prototype.createRemoteTextTrack = function createRemoteTextTrack(options) {
			if (!this.featuresNativeTextTracks) {
				return _Tech.prototype.createRemoteTextTrack.call(this, options);
			}
			var htmlTrackElement = document_1.createElement('track');
			if (options.kind) {
				htmlTrackElement.kind = options.kind;
			}
			if (options.label) {
				htmlTrackElement.label = options.label;
			}
			if (options.language || options.srclang) {
				htmlTrackElement.srclang = options.language || options.srclang;
			}
			if (options.default) {
				htmlTrackElement.default = options.default;
			}
			if (options.id) {
				htmlTrackElement.id = options.id;
			}
			if (options.src) {
				htmlTrackElement.src = options.src;
			}
			return htmlTrackElement;
		};
		Html5.prototype.addRemoteTextTrack = function addRemoteTextTrack(options, manualCleanup) {
			var htmlTrackElement = _Tech.prototype.addRemoteTextTrack.call(this, options, manualCleanup);
			if (this.featuresNativeTextTracks) {
				this.el().appendChild(htmlTrackElement);
			}
			return htmlTrackElement;
		};
		Html5.prototype.removeRemoteTextTrack = function removeRemoteTextTrack(track) {
			_Tech.prototype.removeRemoteTextTrack.call(this, track);
			if (this.featuresNativeTextTracks) {
				var tracks = this.$$('track');
				var i = tracks.length;
				while (i--) {
					if (track === tracks[i] || track === tracks[i].track) {
						this.el().removeChild(tracks[i]);
					}
				}
			}
		};
		Html5.prototype.getVideoPlaybackQuality = function getVideoPlaybackQuality() {
			if (typeof this.el().getVideoPlaybackQuality === 'function') {
				return this.el().getVideoPlaybackQuality();
			}
			var videoPlaybackQuality = {};
			if (typeof this.el().webkitDroppedFrameCount !== 'undefined' && typeof this.el().webkitDecodedFrameCount !== 'undefined') {
				videoPlaybackQuality.droppedVideoFrames = this.el().webkitDroppedFrameCount;
				videoPlaybackQuality.totalVideoFrames = this.el().webkitDecodedFrameCount;
			}
			if (window_1.performance && typeof window_1.performance.now === 'function') {
				videoPlaybackQuality.creationTime = window_1.performance.now();
			} else if (window_1.performance && window_1.performance.timing && typeof window_1.performance.timing.navigationStart === 'number') {
				videoPlaybackQuality.creationTime = window_1.Date.now() - window_1.performance.timing.navigationStart;
			}
			return videoPlaybackQuality;
		};
		return Html5;
	}(Tech);
	if (isReal()) {
		Html5.TEST_VID = document_1.createElement('video');
		var track = document_1.createElement('track');
		track.kind = 'captions';
		track.srclang = 'en';
		track.label = 'English';
		Html5.TEST_VID.appendChild(track);
	}
	Html5.isSupported = function () {
		try {
			Html5.TEST_VID.volume = 0.5;
		} catch (e) {
			return false;
		}
		return !!(Html5.TEST_VID && Html5.TEST_VID.canPlayType);
	};
	Html5.canPlayType = function (type) {
		return Html5.TEST_VID.canPlayType(type);
	};
	Html5.canPlaySource = function (srcObj, options) {
		return Html5.canPlayType(srcObj.type);
	};
	Html5.canControlVolume = function () {
		try {
			var volume = Html5.TEST_VID.volume;
			Html5.TEST_VID.volume = volume / 2 + 0.1;
			return volume !== Html5.TEST_VID.volume;
		} catch (e) {
			return false;
		}
	};
	Html5.canMuteVolume = function () {
		try {
			var muted = Html5.TEST_VID.muted;
			Html5.TEST_VID.muted = !muted;
			if (Html5.TEST_VID.muted) {
				setAttribute(Html5.TEST_VID, 'muted', 'muted');
			} else {
				removeAttribute(Html5.TEST_VID, 'muted', 'muted');
			}
			return muted !== Html5.TEST_VID.muted;
		} catch (e) {
			return false;
		}
	};
	Html5.canControlPlaybackRate = function () {
		if (IS_ANDROID && IS_CHROME && CHROME_VERSION < 58) {
			return false;
		}
		try {
			var playbackRate = Html5.TEST_VID.playbackRate;
			Html5.TEST_VID.playbackRate = playbackRate / 2 + 0.1;
			return playbackRate !== Html5.TEST_VID.playbackRate;
		} catch (e) {
			return false;
		}
	};
	Html5.canOverrideAttributes = function () {
		try {
			var noop = function noop() { };
			Object.defineProperty(document_1.createElement('video'), 'src', { get: noop, set: noop });
			Object.defineProperty(document_1.createElement('audio'), 'src', { get: noop, set: noop });
			Object.defineProperty(document_1.createElement('video'), 'innerHTML', { get: noop, set: noop });
			Object.defineProperty(document_1.createElement('audio'), 'innerHTML', { get: noop, set: noop });
		} catch (e) {
			return false;
		}
		return true;
	};
	Html5.supportsNativeTextTracks = function () {
		return IS_ANY_SAFARI || IS_IOS && IS_CHROME;
	};
	Html5.supportsNativeVideoTracks = function () {
		return !!(Html5.TEST_VID && Html5.TEST_VID.videoTracks);
	};
	Html5.supportsNativeAudioTracks = function () {
		return !!(Html5.TEST_VID && Html5.TEST_VID.audioTracks);
	};
	Html5.Events = ['loadstart', 'suspend', 'abort', 'error', 'emptied', 'stalled', 'loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough', 'playing', 'waiting', 'seeking', 'seeked', 'ended', 'durationchange', 'timeupdate', 'progress', 'play', 'pause', 'ratechange', 'resize', 'volumechange'];
	Html5.prototype.featuresVolumeControl = Html5.canControlVolume();
	Html5.prototype.featuresMuteControl = Html5.canMuteVolume();
	Html5.prototype.featuresPlaybackRate = Html5.canControlPlaybackRate();
	Html5.prototype.featuresSourceset = Html5.canOverrideAttributes();
	Html5.prototype.movingMediaElementInDOM = !IS_IOS;
	Html5.prototype.featuresFullscreenResize = true;
	Html5.prototype.featuresProgressEvents = true;
	Html5.prototype.featuresTimeupdateEvents = true;
	Html5.prototype.featuresNativeTextTracks = Html5.supportsNativeTextTracks();
	Html5.prototype.featuresNativeVideoTracks = Html5.supportsNativeVideoTracks();
	Html5.prototype.featuresNativeAudioTracks = Html5.supportsNativeAudioTracks();
	var canPlayType = Html5.TEST_VID && Html5.TEST_VID.constructor.prototype.canPlayType;
	var mpegurlRE = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;
	Html5.patchCanPlayType = function () {
		if (ANDROID_VERSION >= 4.0 && !IS_FIREFOX && !IS_CHROME) {
			Html5.TEST_VID.constructor.prototype.canPlayType = function (type) {
				if (type && mpegurlRE.test(type)) {
					return 'maybe';
				}
				return canPlayType.call(this, type);
			};
		}
	};
	Html5.unpatchCanPlayType = function () {
		var r = Html5.TEST_VID.constructor.prototype.canPlayType;
		Html5.TEST_VID.constructor.prototype.canPlayType = canPlayType;
		return r;
	};
	Html5.patchCanPlayType();
	Html5.disposeMediaElement = function (el) {
		if (!el) {
			return;
		}
		if (el.parentNode) {
			el.parentNode.removeChild(el);
		}
		while (el.hasChildNodes()) {
			el.removeChild(el.firstChild);
		}
		el.removeAttribute('src');
		if (typeof el.load === 'function') {
			(function () {
				try {
					el.load();
				} catch (e) {
				}
			})();
		}
	};
	Html5.resetMediaElement = function (el) {
		if (!el) {
			return;
		}
		var sources = el.querySelectorAll('source');
		var i = sources.length;
		while (i--) {
			el.removeChild(sources[i]);
		}
		el.removeAttribute('src');
		if (typeof el.load === 'function') {
			(function () {
				try {
					el.load();
				} catch (e) {
				}
			})();
		}
	};
	[
		'muted',
		'defaultMuted',
		'autoplay',
		'controls',
		'loop',
		'playsinline'].forEach(function (prop) {
			Html5.prototype[prop] = function () {
				return this.el_[prop] || this.el_.hasAttribute(prop);
			};
		});
	[
		'muted',
		'defaultMuted',
		'autoplay',
		'loop',
		'playsinline'].forEach(function (prop) {
			Html5.prototype['set' + toTitleCase(prop)] = function (v) {
				this.el_[prop] = v;
				if (v) {
					this.el_.setAttribute(prop, prop);
				} else {
					this.el_.removeAttribute(prop);
				}
			};
		});
	[
		'paused',
		'currentTime',
		'buffered',
		'volume',
		'poster',
		'preload',
		'error',
		'seeking',
		'seekable',
		'ended',
		'playbackRate',
		'defaultPlaybackRate',
		'played',
		'networkState',
		'readyState',
		'videoWidth',
		'videoHeight'].forEach(function (prop) {
			Html5.prototype[prop] = function () {
				return this.el_[prop];
			};
		});
	[
		'volume',
		'src',
		'poster',
		'preload',
		'playbackRate',
		'defaultPlaybackRate'].forEach(function (prop) {
			Html5.prototype['set' + toTitleCase(prop)] = function (v) {
				this.el_[prop] = v;
			};
		});
	[
		'pause',
		'load',
		'play'].forEach(function (prop) {
			Html5.prototype[prop] = function () {
				return this.el_[prop]();
			};
		});
	Tech.withSourceHandlers(Html5);
	Html5.nativeSourceHandler = {};
	Html5.nativeSourceHandler.canPlayType = function (type) {
		try {
			return Html5.TEST_VID.canPlayType(type);
		} catch (e) {
			return '';
		}
	};
	Html5.nativeSourceHandler.canHandleSource = function (source, options) {
		if (source.type) {
			return Html5.nativeSourceHandler.canPlayType(source.type);
		} else if (source.src) {
			var ext = getFileExtension(source.src);
			return Html5.nativeSourceHandler.canPlayType('video/' + ext);
		}
		return '';
	};
	Html5.nativeSourceHandler.handleSource = function (source, tech, options) {
		tech.setSrc(source.src);
	};
	Html5.nativeSourceHandler.dispose = function () { };
	Html5.registerSourceHandler(Html5.nativeSourceHandler);
	Tech.registerTech('Html5', Html5);
	var _templateObject$2 = taggedTemplateLiteralLoose(['\n        Using the tech directly can be dangerous. I hope you know what you\'re doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      '], ['\n        Using the tech directly can be dangerous. I hope you know what you\'re doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      ']);
	var TECH_EVENTS_RETRIGGER = [
		'progress',
		'abort',
		'suspend',
		'emptied',
		'stalled',
		'loadedmetadata',
		'loadeddata',
		'timeupdate',
		'resize',
		'volumechange',
		'texttrackchange'];
	var TECH_EVENTS_QUEUE = {
		canplay: 'CanPlay',
		canplaythrough: 'CanPlayThrough',
		playing: 'Playing',
		seeked: 'Seeked'
	};
	var Player = function (_Component) {
		inherits(Player, _Component);
		function Player(tag, options, ready) {
			classCallCheck(this, Player);
			tag.id = tag.id || options.id || 'vjs_video_' + newGUID();
			options = assign(Player.getTagSettings(tag), options);
			options.initChildren = false;
			options.createEl = false;
			options.evented = false;
			options.reportTouchActivity = false;
			if (!options.language) {
				if (typeof tag.closest === 'function') {
					var closest = tag.closest('[lang]');
					if (closest && closest.getAttribute) {
						options.language = closest.getAttribute('lang');
					}
				} else {
					var element = tag;
					while (element && element.nodeType === 1) {
						if (getAttributes(element).hasOwnProperty('lang')) {
							options.language = element.getAttribute('lang');
							break;
						}
						element = element.parentNode;
					}
				}
			}
			var _this = possibleConstructorReturn(this, _Component.call(this, null, options, ready));
			_this.isPosterFromTech_ = false;
			_this.queuedCallbacks_ = [];
			_this.isReady_ = false;
			_this.hasStarted_ = false;
			_this.userActive_ = false;
			if (!_this.options_ || !_this.options_.techOrder || !_this.options_.techOrder.length) {
				throw new Error('No techOrder specified. Did you overwrite ' + 'videojs.options instead of just changing the ' + 'properties you want to override?');
			}
			_this.tag = tag;
			_this.tagAttributes = tag && getAttributes(tag);
			_this.language(_this.options_.language);
			if (options.languages) {
				var languagesToLower = {};
				Object.getOwnPropertyNames(options.languages).forEach(function (name$$1) {
					languagesToLower[name$$1.toLowerCase()] = options.languages[name$$1];
				});
				_this.languages_ = languagesToLower;
			} else {
				_this.languages_ = Player.prototype.options_.languages;
			}
			_this.cache_ = {};
			_this.poster_ = options.poster || '';
			_this.controls_ = !!options.controls;
			_this.cache_.lastVolume = 1;
			tag.controls = false;
			tag.removeAttribute('controls');
			if (tag.hasAttribute('autoplay')) {
				_this.options_.autoplay = true;
			} else {
				_this.autoplay(_this.options_.autoplay);
			}
			_this.scrubbing_ = false;
			_this.el_ = _this.createEl();
			_this.cache_.lastPlaybackRate = _this.defaultPlaybackRate();
			evented(_this, { eventBusKey: 'el_' });
			var playerOptionsCopy = mergeOptions(_this.options_);
			if (options.plugins) {
				var plugins = options.plugins;
				Object.keys(plugins).forEach(function (name$$1) {
					if (typeof this[name$$1] === 'function') {
						this[name$$1](plugins[name$$1]);
					} else {
						throw new Error('plugin "' + name$$1 + '" does not exist');
					}
				}, _this);
			}
			_this.options_.playerOptions = playerOptionsCopy;
			_this.middleware_ = [];
			_this.initChildren();
			_this.isAudio(tag.nodeName.toLowerCase() === 'audio');
			if (_this.controls()) {
				_this.addClass('vjs-controls-enabled');
			} else {
				_this.addClass('vjs-controls-disabled');
			}
			_this.el_.setAttribute('role', 'region');
			if (_this.isAudio()) {
				_this.el_.setAttribute('aria-label', _this.localize('Audio Player'));
			} else {
				_this.el_.setAttribute('aria-label', _this.localize('Video Player'));
			}
			if (_this.isAudio()) {
				_this.addClass('vjs-audio');
			}
			if (_this.flexNotSupported_()) {
				_this.addClass('vjs-no-flex');
			}
			if (!IS_IOS) {
				_this.addClass('vjs-workinghover');
			}
			Player.players[_this.id_] = _this;
			var majorVersion = version.split('.')[0];
			_this.addClass('vjs-v' + majorVersion);
			_this.userActive(true);
			_this.reportUserActivity();
			_this.one('play', _this.listenForUserActivity_);
			_this.on('fullscreenchange', _this.handleFullscreenChange_);
			_this.on('stageclick', _this.handleStageClick_);
			_this.changingSrc_ = false;
			_this.playWaitingForReady_ = false;
			_this.playOnLoadstart_ = null;
			return _this;
		}
		Player.prototype.dispose = function dispose() {
			this.trigger('dispose');
			this.off('dispose');
			if (this.styleEl_ && this.styleEl_.parentNode) {
				this.styleEl_.parentNode.removeChild(this.styleEl_);
				this.styleEl_ = null;
			}
			Player.players[this.id_] = null;
			if (this.tag && this.tag.player) {
				this.tag.player = null;
			}
			if (this.el_ && this.el_.player) {
				this.el_.player = null;
			}
			if (this.tech_) {
				this.tech_.dispose();
				this.isPosterFromTech_ = false;
				this.poster_ = '';
			}
			if (this.playerElIngest_) {
				this.playerElIngest_ = null;
			}
			if (this.tag) {
				this.tag = null;
			}
			clearCacheForPlayer(this);
			_Component.prototype.dispose.call(this);
		};
		Player.prototype.createEl = function createEl$$1() {
			var tag = this.tag;
			var el = void 0;
			var playerElIngest = this.playerElIngest_ = tag.parentNode && tag.parentNode.hasAttribute && tag.parentNode.hasAttribute('data-vjs-player');
			var divEmbed = this.tag.tagName.toLowerCase() === 'video-js';
			if (playerElIngest) {
				el = this.el_ = tag.parentNode;
			} else if (!divEmbed) {
				el = this.el_ = _Component.prototype.createEl.call(this, 'div');
			}
			var attrs = getAttributes(tag);
			if (divEmbed) {
				el = this.el_ = tag;
				tag = this.tag = document_1.createElement('video');
				while (el.children.length) {
					tag.appendChild(el.firstChild);
				}
				if (!hasClass(el, 'video-js')) {
					addClass(el, 'video-js');
				}
				el.appendChild(tag);
				playerElIngest = this.playerElIngest_ = el;
				Object.keys(el).forEach(function (k) {
					tag[k] = el[k];
				});
			}
			tag.setAttribute('tabindex', '-1');
			if (IE_VERSION) {
				tag.setAttribute('role', 'application');
			}
			tag.removeAttribute('width');
			tag.removeAttribute('height');
			Object.getOwnPropertyNames(attrs).forEach(function (attr) {
				if (!(divEmbed && attr === 'class')) {
					el.setAttribute(attr, attrs[attr]);
				}
				if (divEmbed) {
					tag.setAttribute(attr, attrs[attr]);
				}
			});
			tag.playerId = tag.id;
			tag.id += '_html5_api';
			tag.className = 'vjs-tech';
			tag.player = el.player = this;
			this.addClass('vjs-paused');
			if (window_1.VIDEOJS_NO_DYNAMIC_STYLE !== true) {
				this.styleEl_ = createStyleElement('vjs-styles-dimensions');
				var defaultsStyleEl = $('.vjs-styles-defaults');
				var head = $('head');
				head.insertBefore(this.styleEl_, defaultsStyleEl ? defaultsStyleEl.nextSibling : head.firstChild);
			}
			this.width(this.options_.width);
			this.height(this.options_.height);
			this.fluid(this.options_.fluid);
			this.aspectRatio(this.options_.aspectRatio);
			var links = tag.getElementsByTagName('a');
			for (var i = 0; i < links.length; i++) {
				var linkEl = links.item(i);
				addClass(linkEl, 'vjs-hidden');
				linkEl.setAttribute('hidden', 'hidden');
			}
			tag.initNetworkState_ = tag.networkState;
			if (tag.parentNode && !playerElIngest) {
				tag.parentNode.insertBefore(el, tag);
			}
			prependTo(tag, el);
			this.children_.unshift(tag);
			this.el_.setAttribute('lang', this.language_);
			this.el_ = el;
			return el;
		};
		Player.prototype.width = function width(value) {
			return this.dimension('width', value);
		};
		Player.prototype.height = function height(value) {
			return this.dimension('height', value);
		};
		Player.prototype.dimension = function dimension(_dimension, value) {
			var privDimension = _dimension + '_';
			if (value === undefined) {
				return this[privDimension] || 0;
			}
			if (value === '') {
				this[privDimension] = undefined;
				this.updateStyleEl_();
				return;
			}
			var parsedVal = parseFloat(value);
			if (isNaN(parsedVal)) {
				log$1.error('Improper value "' + value + '" supplied for for ' + _dimension);
				return;
			}
			this[privDimension] = parsedVal;
			this.updateStyleEl_();
		};
		Player.prototype.fluid = function fluid(bool) {
			if (bool === undefined) {
				return !!this.fluid_;
			}
			this.fluid_ = !!bool;
			if (bool) {
				this.addClass('vjs-fluid');
			} else {
				this.removeClass('vjs-fluid');
			}
			this.updateStyleEl_();
		};
		Player.prototype.aspectRatio = function aspectRatio(ratio) {
			if (ratio === undefined) {
				return this.aspectRatio_;
			}
			if (!/^\d+\:\d+$/.test(ratio)) {
				throw new Error('Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.');
			}
			this.aspectRatio_ = ratio;
			this.fluid(true);
			this.updateStyleEl_();
		};
		Player.prototype.updateStyleEl_ = function updateStyleEl_() {
			if (window_1.VIDEOJS_NO_DYNAMIC_STYLE === true) {
				var _width = typeof this.width_ === 'number' ? this.width_ : this.options_.width;
				var _height = typeof this.height_ === 'number' ? this.height_ : this.options_.height;
				var techEl = this.tech_ && this.tech_.el();
				if (techEl) {
					if (_width >= 0) {
						techEl.width = _width;
					}
					if (_height >= 0) {
						techEl.height = _height;
					}
				}
				return;
			}
			var width = void 0;
			var height = void 0;
			var aspectRatio = void 0;
			var idClass = void 0;
			if (this.aspectRatio_ !== undefined && this.aspectRatio_ !== 'auto') {
				aspectRatio = this.aspectRatio_;
			} else if (this.videoWidth() > 0) {
				aspectRatio = this.videoWidth() + ':' + this.videoHeight();
			} else {
				aspectRatio = '16:9';
			}
			var ratioParts = aspectRatio.split(':');
			var ratioMultiplier = ratioParts[1] / ratioParts[0];
			if (this.width_ !== undefined) {
				width = this.width_;
			} else if (this.height_ !== undefined) {
				width = this.height_ / ratioMultiplier;
			} else {
				width = this.videoWidth() || 300;
			}
			if (this.height_ !== undefined) {
				height = this.height_;
			} else {
				height = width * ratioMultiplier;
			}
			if (/^[^a-zA-Z]/.test(this.id())) {
				idClass = 'dimensions-' + this.id();
			} else {
				idClass = this.id() + '-dimensions';
			}
			this.addClass(idClass);
			setTextContent(this.styleEl_, '\n      .' + idClass + ' {\n        width: ' + width + 'px;\n        height: ' + height + 'px;\n      }\n\n      .' + idClass + '.vjs-fluid {\n        padding-top: ' + ratioMultiplier * 100 + '%;\n      }\n    ');
		};
		Player.prototype.loadTech_ = function loadTech_(techName, source) {
			var _this2 = this;
			if (this.tech_) {
				this.unloadTech_();
			}
			var titleTechName = toTitleCase(techName);
			var camelTechName = techName.charAt(0).toLowerCase() + techName.slice(1);
			if (titleTechName !== 'Html5' && this.tag) {
				Tech.getTech('Html5').disposeMediaElement(this.tag);
				this.tag.player = null;
				this.tag = null;
			}
			this.techName_ = titleTechName;
			this.isReady_ = false;
			var autoplay = typeof this.autoplay() === 'string' ? false : this.autoplay();
			var techOptions = {
				source: source,
				autoplay: autoplay,
				'nativeControlsForTouch': this.options_.nativeControlsForTouch,
				'playerId': this.id(),
				'techId': this.id() + '_' + titleTechName + '_api',
				'playsinline': this.options_.playsinline,
				'preload': this.options_.preload,
				'loop': this.options_.loop,
				'muted': this.options_.muted,
				'poster': this.poster(),
				'language': this.language(),
				'playerElIngest': this.playerElIngest_ || false,
				'vtt.js': this.options_['vtt.js'],
				'canOverridePoster': !!this.options_.techCanOverridePoster,
				'enableSourceset': this.options_.enableSourceset
			};
			ALL.names.forEach(function (name$$1) {
				var props = ALL[name$$1];
				techOptions[props.getterName] = _this2[props.privateName];
			});
			assign(techOptions, this.options_[titleTechName]);
			assign(techOptions, this.options_[camelTechName]);
			assign(techOptions, this.options_[techName.toLowerCase()]);
			if (this.tag) {
				techOptions.tag = this.tag;
			}
			if (source && source.src === this.cache_.src && this.cache_.currentTime > 0) {
				techOptions.startTime = this.cache_.currentTime;
			}
			var TechClass = Tech.getTech(techName);
			if (!TechClass) {
				throw new Error('No Tech named \'' + titleTechName + '\' exists! \'' + titleTechName + '\' should be registered using videojs.registerTech()\'');
			}
			this.tech_ = new TechClass(techOptions);
			this.tech_.ready(bind(this, this.handleTechReady_), true);
			textTrackConverter.jsonToTextTracks(this.textTracksJson_ || [], this.tech_);
			TECH_EVENTS_RETRIGGER.forEach(function (event) {
				_this2.on(_this2.tech_, event, _this2['handleTech' + toTitleCase(event) + '_']);
			});
			Object.keys(TECH_EVENTS_QUEUE).forEach(function (event) {
				_this2.on(_this2.tech_, event, function (eventObj) {
					if (_this2.tech_.playbackRate() === 0 && _this2.tech_.seeking()) {
						_this2.queuedCallbacks_.push({
							callback: _this2['handleTech' + TECH_EVENTS_QUEUE[event] + '_'].bind(_this2),
							event: eventObj
						});
						return;
					}
					_this2['handleTech' + TECH_EVENTS_QUEUE[event] + '_'](eventObj);
				});
			});
			this.on(this.tech_, 'loadstart', this.handleTechLoadStart_);
			this.on(this.tech_, 'sourceset', this.handleTechSourceset_);
			this.on(this.tech_, 'waiting', this.handleTechWaiting_);
			this.on(this.tech_, 'ended', this.handleTechEnded_);
			this.on(this.tech_, 'seeking', this.handleTechSeeking_);
			this.on(this.tech_, 'play', this.handleTechPlay_);
			this.on(this.tech_, 'firstplay', this.handleTechFirstPlay_);
			this.on(this.tech_, 'pause', this.handleTechPause_);
			this.on(this.tech_, 'durationchange', this.handleTechDurationChange_);
			this.on(this.tech_, 'fullscreenchange', this.handleTechFullscreenChange_);
			this.on(this.tech_, 'error', this.handleTechError_);
			this.on(this.tech_, 'loadedmetadata', this.updateStyleEl_);
			this.on(this.tech_, 'posterchange', this.handleTechPosterChange_);
			this.on(this.tech_, 'textdata', this.handleTechTextData_);
			this.on(this.tech_, 'ratechange', this.handleTechRateChange_);
			this.usingNativeControls(this.techGet_('controls'));
			if (this.controls() && !this.usingNativeControls()) {
				this.addTechControlsListeners_();
			}
			if (this.tech_.el().parentNode !== this.el() && (titleTechName !== 'Html5' || !this.tag)) {
				prependTo(this.tech_.el(), this.el());
			}
			if (this.tag) {
				this.tag.player = null;
				this.tag = null;
			}
		};
		Player.prototype.unloadTech_ = function unloadTech_() {
			var _this3 = this;
			ALL.names.forEach(function (name$$1) {
				var props = ALL[name$$1];
				_this3[props.privateName] = _this3[props.getterName]();
			});
			this.textTracksJson_ = textTrackConverter.textTracksToJson(this.tech_);
			this.isReady_ = false;
			this.tech_.dispose();
			this.tech_ = false;
			if (this.isPosterFromTech_) {
				this.poster_ = '';
				this.trigger('posterchange');
			}
			this.isPosterFromTech_ = false;
		};
		Player.prototype.tech = function tech(safety) {
			if (safety === undefined) {
				log$1.warn(tsml(_templateObject$2));
			}
			return this.tech_;
		};
		Player.prototype.addTechControlsListeners_ = function addTechControlsListeners_() {
			this.removeTechControlsListeners_();
			this.on(this.tech_, 'mousedown', this.handleTechClick_);
			this.on(this.tech_, 'dblclick', this.handleTechDoubleClick_);
			this.on(this.tech_, 'touchstart', this.handleTechTouchStart_);
			this.on(this.tech_, 'touchmove', this.handleTechTouchMove_);
			this.on(this.tech_, 'touchend', this.handleTechTouchEnd_);
			this.on(this.tech_, 'tap', this.handleTechTap_);
		};
		Player.prototype.removeTechControlsListeners_ = function removeTechControlsListeners_() {
			this.off(this.tech_, 'tap', this.handleTechTap_);
			this.off(this.tech_, 'touchstart', this.handleTechTouchStart_);
			this.off(this.tech_, 'touchmove', this.handleTechTouchMove_);
			this.off(this.tech_, 'touchend', this.handleTechTouchEnd_);
			this.off(this.tech_, 'mousedown', this.handleTechClick_);
			this.off(this.tech_, 'dblclick', this.handleTechDoubleClick_);
		};
		Player.prototype.handleTechReady_ = function handleTechReady_() {
			this.triggerReady();
			if (this.cache_.volume) {
				this.techCall_('setVolume', this.cache_.volume);
			}
			this.handleTechPosterChange_();
			this.handleTechDurationChange_();
		};
		Player.prototype.handleTechLoadStart_ = function handleTechLoadStart_() {
			this.removeClass('vjs-ended');
			this.removeClass('vjs-seeking');
			this.error(null);
			if (!this.paused()) {
				this.trigger('loadstart');
				this.trigger('firstplay');
			} else {
				this.hasStarted(false);
				this.trigger('loadstart');
			}
			this.manualAutoplay_(this.autoplay());
		};
		Player.prototype.manualAutoplay_ = function manualAutoplay_(type) {
			var _this4 = this;
			if (!this.tech_ || typeof type !== 'string') {
				return;
			}
			var muted = function muted() {
				var previouslyMuted = _this4.muted();
				_this4.muted(true);
				var playPromise = _this4.play();
				if (!playPromise || !playPromise.then || !playPromise.catch) {
					return;
				}
				return playPromise.catch(function (e) {
					_this4.muted(previouslyMuted);
				});
			};
			var promise = void 0;
			if (type === 'any') {
				promise = this.play();
				if (promise && promise.then && promise.catch) {
					promise.catch(function () {
						return muted();
					});
				}
			} else if (type === 'muted') {
				promise = muted();
			} else {
				promise = this.play();
			}
			if (!promise || !promise.then || !promise.catch) {
				return;
			}
			return promise.then(function () {
				_this4.trigger({ type: 'autoplay-success', autoplay: type });
			}).catch(function (e) {
				_this4.trigger({ type: 'autoplay-failure', autoplay: type });
			});
		};
		Player.prototype.updateSourceCaches_ = function updateSourceCaches_() {
			var srcObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var src = srcObj;
			var type = '';
			if (typeof src !== 'string') {
				src = srcObj.src;
				type = srcObj.type;
			}
			if (/^blob:/.test(src)) {
				return;
			}
			this.cache_.source = this.cache_.source || {};
			this.cache_.sources = this.cache_.sources || [];
			if (src && !type) {
				type = findMimetype(this, src);
			}
			this.cache_.source = mergeOptions({}, srcObj, { src: src, type: type });
			var matchingSources = this.cache_.sources.filter(function (s) {
				return s.src && s.src === src;
			});
			var sourceElSources = [];
			var sourceEls = this.$$('source');
			var matchingSourceEls = [];
			for (var i = 0; i < sourceEls.length; i++) {
				var sourceObj = getAttributes(sourceEls[i]);
				sourceElSources.push(sourceObj);
				if (sourceObj.src && sourceObj.src === src) {
					matchingSourceEls.push(sourceObj.src);
				}
			}
			if (matchingSourceEls.length && !matchingSources.length) {
				this.cache_.sources = sourceElSources;
			} else if (!matchingSources.length) {
				this.cache_.sources = [this.cache_.source];
			}
			this.cache_.src = src;
		};
		Player.prototype.handleTechSourceset_ = function handleTechSourceset_(event) {
			var _this5 = this;
			if (!this.changingSrc_) {
				this.updateSourceCaches_(event.src);
				if (!event.src) {
					var updateCache = function updateCache(e) {
						if (e.type !== 'sourceset') {
							_this5.updateSourceCaches_(_this5.techGet_('currentSrc'));
						}
						_this5.tech_.off(['sourceset', 'loadstart'], updateCache);
					};
					this.tech_.one(['sourceset', 'loadstart'], updateCache);
				}
			}
			this.trigger({
				src: event.src,
				type: 'sourceset'
			});
		};
		Player.prototype.hasStarted = function hasStarted(request) {
			if (request === undefined) {
				return this.hasStarted_;
			}
			if (request === this.hasStarted_) {
				return;
			}
			this.hasStarted_ = request;
			if (this.hasStarted_) {
				this.addClass('vjs-has-started');
				this.trigger('firstplay');
			} else {
				this.removeClass('vjs-has-started');
			}
		};
		Player.prototype.handleTechPlay_ = function handleTechPlay_() {
			this.removeClass('vjs-ended');
			this.removeClass('vjs-paused');
			this.addClass('vjs-playing');
			this.hasStarted(true);
			this.trigger('play');
		};
		Player.prototype.handleTechRateChange_ = function handleTechRateChange_() {
			if (this.tech_.playbackRate() > 0 && this.cache_.lastPlaybackRate === 0) {
				this.queuedCallbacks_.forEach(function (queued) {
					return queued.callback(queued.event);
				});
				this.queuedCallbacks_ = [];
			}
			this.cache_.lastPlaybackRate = this.tech_.playbackRate();
			this.trigger('ratechange');
		};
		Player.prototype.handleTechWaiting_ = function handleTechWaiting_() {
			var _this6 = this;
			this.addClass('vjs-waiting');
			this.trigger('waiting');
			this.one('timeupdate', function () {
				return _this6.removeClass('vjs-waiting');
			});
		};
		Player.prototype.handleTechCanPlay_ = function handleTechCanPlay_() {
			this.removeClass('vjs-waiting');
			this.trigger('canplay');
		};
		Player.prototype.handleTechCanPlayThrough_ = function handleTechCanPlayThrough_() {
			this.removeClass('vjs-waiting');
			this.trigger('canplaythrough');
		};
		Player.prototype.handleTechPlaying_ = function handleTechPlaying_() {
			this.removeClass('vjs-waiting');
			this.trigger('playing');
		};
		Player.prototype.handleTechSeeking_ = function handleTechSeeking_() {
			this.addClass('vjs-seeking');
			this.trigger('seeking');
		};
		Player.prototype.handleTechSeeked_ = function handleTechSeeked_() {
			this.removeClass('vjs-seeking');
			this.trigger('seeked');
		};
		Player.prototype.handleTechFirstPlay_ = function handleTechFirstPlay_() {
			if (this.options_.starttime) {
				log$1.warn('Passing the `starttime` option to the player will be deprecated in 6.0');
				this.currentTime(this.options_.starttime);
			}
			this.addClass('vjs-has-started');
			this.trigger('firstplay');
		};
		Player.prototype.handleTechPause_ = function handleTechPause_() {
			this.removeClass('vjs-playing');
			this.addClass('vjs-paused');
			this.trigger('pause');
		};
		Player.prototype.handleTechEnded_ = function handleTechEnded_() {
			this.addClass('vjs-ended');
			if (this.options_.loop) {
				this.currentTime(0);
				this.play();
			} else if (!this.paused()) {
				this.pause();
			}
			this.trigger('ended');
		};
		Player.prototype.handleTechDurationChange_ = function handleTechDurationChange_() {
			this.duration(this.techGet_('duration'));
		};
		Player.prototype.handleTechClick_ = function handleTechClick_(event) {
			if (!isSingleLeftClick(event)) {
				return;
			}
			if (!this.controls_) {
				return;
			}
			if (this.paused()) {
				silencePromise(this.play());
			} else {
				this.pause();
			}
		};
		Player.prototype.handleTechDoubleClick_ = function handleTechDoubleClick_(event) {
			if (!this.controls_) {
				return;
			}
			var inAllowedEls = Array.prototype.some.call(this.$$('.vjs-control-bar, .vjs-modal-dialog'), function (el) {
				return el.contains(event.target);
			});
			if (!inAllowedEls) {
				if (this.isFullscreen()) {
					this.exitFullscreen();
				} else {
					this.requestFullscreen();
				}
			}
		};
		Player.prototype.handleTechTap_ = function handleTechTap_() {
			this.userActive(!this.userActive());
		};
		Player.prototype.handleTechTouchStart_ = function handleTechTouchStart_() {
			this.userWasActive = this.userActive();
		};
		Player.prototype.handleTechTouchMove_ = function handleTechTouchMove_() {
			if (this.userWasActive) {
				this.reportUserActivity();
			}
		};
		Player.prototype.handleTechTouchEnd_ = function handleTechTouchEnd_(event) {
			event.preventDefault();
		};
		Player.prototype.handleFullscreenChange_ = function handleFullscreenChange_() {
			if (this.isFullscreen()) {
				this.addClass('vjs-fullscreen');
			} else {
				this.removeClass('vjs-fullscreen');
			}
		};
		Player.prototype.handleStageClick_ = function handleStageClick_() {
			this.reportUserActivity();
		};
		Player.prototype.handleTechFullscreenChange_ = function handleTechFullscreenChange_(event, data) {
			if (data) {
				this.isFullscreen(data.isFullscreen);
			}
			this.trigger('fullscreenchange');
		};
		Player.prototype.handleTechError_ = function handleTechError_() {
			var error = this.tech_.error();
			this.error(error);
		};
		Player.prototype.handleTechTextData_ = function handleTechTextData_() {
			var data = null;
			if (arguments.length > 1) {
				data = arguments[1];
			}
			this.trigger('textdata', data);
		};
		Player.prototype.getCache = function getCache() {
			return this.cache_;
		};
		Player.prototype.techCall_ = function techCall_(method, arg) {
			this.ready(function () {
				if (method in allowedSetters) {
					return set$1(this.middleware_, this.tech_, method, arg);
				} else if (method in allowedMediators) {
					return mediate(this.middleware_, this.tech_, method, arg);
				}
				try {
					if (this.tech_) {
						this.tech_[method](arg);
					}
				} catch (e) {
					log$1(e);
					throw e;
				}
			}, true);
		};
		Player.prototype.techGet_ = function techGet_(method) {
			if (!this.tech_ || !this.tech_.isReady_) {
				return;
			}
			if (method in allowedGetters) {
				return get$1(this.middleware_, this.tech_, method);
			} else if (method in allowedMediators) {
				return mediate(this.middleware_, this.tech_, method);
			}
			try {
				return this.tech_[method]();
			} catch (e) {
				if (this.tech_[method] === undefined) {
					log$1('Video.js: ' + method + ' method not defined for ' + this.techName_ + ' playback technology.', e);
					throw e;
				}
				if (e.name === 'TypeError') {
					log$1('Video.js: ' + method + ' unavailable on ' + this.techName_ + ' playback technology element.', e);
					this.tech_.isReady_ = false;
					throw e;
				}
				log$1(e);
				throw e;
			}
		};
		Player.prototype.play = function play() {
			var _this7 = this;
			var PromiseClass = this.options_.Promise || window_1.Promise;
			if (PromiseClass) {
				return new PromiseClass(function (resolve) {
					_this7.play_(resolve);
				});
			}
			return this.play_();
		};
		Player.prototype.play_ = function play_() {
			var _this8 = this;
			var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : silencePromise;
			if (this.playOnLoadstart_) {
				this.off('loadstart', this.playOnLoadstart_);
			}
			if (!this.isReady_) {
				if (this.playWaitingForReady_) {
					return;
				}
				this.playWaitingForReady_ = true;
				this.ready(function () {
					_this8.playWaitingForReady_ = false;
					callback(_this8.play());
				});
			} else if (!this.changingSrc_ && (this.src() || this.currentSrc())) {
				callback(this.techGet_('play'));
				return;
			} else {
				this.playOnLoadstart_ = function () {
					_this8.playOnLoadstart_ = null;
					callback(_this8.play());
				};
				this.one('loadstart', this.playOnLoadstart_);
			}
		};
		Player.prototype.pause = function pause() {
			this.techCall_('pause');
		};
		Player.prototype.paused = function paused() {
			return this.techGet_('paused') === false ? false : true;
		};
		Player.prototype.played = function played() {
			return this.techGet_('played') || createTimeRanges(0, 0);
		};
		Player.prototype.scrubbing = function scrubbing(isScrubbing) {
			if (typeof isScrubbing === 'undefined') {
				return this.scrubbing_;
			}
			this.scrubbing_ = !!isScrubbing;
			if (isScrubbing) {
				this.addClass('vjs-scrubbing');
			} else {
				this.removeClass('vjs-scrubbing');
			}
		};
		Player.prototype.currentTime = function currentTime(seconds) {
			if (typeof seconds !== 'undefined') {
				if (seconds < 0) {
					seconds = 0;
				}
				this.techCall_('setCurrentTime', seconds);
				return;
			}
			this.cache_.currentTime = this.techGet_('currentTime') || 0;
			return this.cache_.currentTime;
		};
		Player.prototype.duration = function duration(seconds) {
			if (seconds === undefined) {
				return this.cache_.duration !== undefined ? this.cache_.duration : NaN;
			}
			seconds = parseFloat(seconds);
			if (seconds < 0) {
				seconds = Infinity;
			}
			if (seconds !== this.cache_.duration) {
				this.cache_.duration = seconds;
				if (seconds === Infinity) {
					this.addClass('vjs-live');
				} else {
					this.removeClass('vjs-live');
				}
				this.trigger('durationchange');
			}
		};
		Player.prototype.remainingTime = function remainingTime() {
			return this.duration() - this.currentTime();
		};
		Player.prototype.remainingTimeDisplay = function remainingTimeDisplay() {
			return Math.floor(this.duration()) - Math.floor(this.currentTime());
		};
		Player.prototype.buffered = function buffered() {
			var buffered = this.techGet_('buffered');
			if (!buffered || !buffered.length) {
				buffered = createTimeRanges(0, 0);
			}
			return buffered;
		};
		Player.prototype.bufferedPercent = function bufferedPercent$$1() {
			return bufferedPercent(this.buffered(), this.duration());
		};
		Player.prototype.bufferedEnd = function bufferedEnd() {
			var buffered = this.buffered();
			var duration = this.duration();
			var end = buffered.end(buffered.length - 1);
			if (end > duration) {
				end = duration;
			}
			return end;
		};
		Player.prototype.volume = function volume(percentAsDecimal) {
			var vol = void 0;
			if (percentAsDecimal !== undefined) {
				vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal)));
				this.cache_.volume = vol;
				this.techCall_('setVolume', vol);
				if (vol > 0) {
					this.lastVolume_(vol);
				}
				return;
			}
			vol = parseFloat(this.techGet_('volume'));
			return isNaN(vol) ? 1 : vol;
		};
		Player.prototype.muted = function muted(_muted) {
			if (_muted !== undefined) {
				this.techCall_('setMuted', _muted);
				return;
			}
			return this.techGet_('muted') || false;
		};
		Player.prototype.defaultMuted = function defaultMuted(_defaultMuted) {
			if (_defaultMuted !== undefined) {
				return this.techCall_('setDefaultMuted', _defaultMuted);
			}
			return this.techGet_('defaultMuted') || false;
		};
		Player.prototype.lastVolume_ = function lastVolume_(percentAsDecimal) {
			if (percentAsDecimal !== undefined && percentAsDecimal !== 0) {
				this.cache_.lastVolume = percentAsDecimal;
				return;
			}
			return this.cache_.lastVolume;
		};
		Player.prototype.supportsFullScreen = function supportsFullScreen() {
			return this.techGet_('supportsFullScreen') || false;
		};
		Player.prototype.isFullscreen = function isFullscreen(isFS) {
			if (isFS !== undefined) {
				this.isFullscreen_ = !!isFS;
				return;
			}
			return !!this.isFullscreen_;
		};
		Player.prototype.requestFullscreen = function requestFullscreen() {
			var fsApi = FullscreenApi;
			this.isFullscreen(true);
			if (fsApi.requestFullscreen) {
				on(document_1, fsApi.fullscreenchange, bind(this, function documentFullscreenChange(e) {
					this.isFullscreen(document_1[fsApi.fullscreenElement]);
					if (this.isFullscreen() === false) {
						off(document_1, fsApi.fullscreenchange, documentFullscreenChange);
					}
					this.trigger('fullscreenchange');
				}));
				this.el_[fsApi.requestFullscreen]();
			} else if (this.tech_.supportsFullScreen()) {
				this.techCall_('enterFullScreen');
			} else {
				this.enterFullWindow();
				this.trigger('fullscreenchange');
			}
		};
		Player.prototype.exitFullscreen = function exitFullscreen() {
			var fsApi = FullscreenApi;
			this.isFullscreen(false);
			if (fsApi.requestFullscreen) {
				document_1[fsApi.exitFullscreen]();
			} else if (this.tech_.supportsFullScreen()) {
				this.techCall_('exitFullScreen');
			} else {
				this.exitFullWindow();
				this.trigger('fullscreenchange');
			}
		};
		Player.prototype.enterFullWindow = function enterFullWindow() {
			this.isFullWindow = true;
			this.docOrigOverflow = document_1.documentElement.style.overflow;
			on(document_1, 'keydown', bind(this, this.fullWindowOnEscKey));
			document_1.documentElement.style.overflow = 'hidden';
			addClass(document_1.body, 'vjs-full-window');
			this.trigger('enterFullWindow');
		};
		Player.prototype.fullWindowOnEscKey = function fullWindowOnEscKey(event) {
			if (event.keyCode === 27) {
				if (this.isFullscreen() === true) {
					this.exitFullscreen();
				} else {
					this.exitFullWindow();
				}
			}
		};
		Player.prototype.exitFullWindow = function exitFullWindow() {
			this.isFullWindow = false;
			off(document_1, 'keydown', this.fullWindowOnEscKey);
			document_1.documentElement.style.overflow = this.docOrigOverflow;
			removeClass(document_1.body, 'vjs-full-window');
			this.trigger('exitFullWindow');
		};
		Player.prototype.canPlayType = function canPlayType(type) {
			var can = void 0;
			for (var i = 0, j = this.options_.techOrder; i < j.length; i++) {
				var techName = j[i];
				var tech = Tech.getTech(techName);
				if (!tech) {
					tech = Component.getComponent(techName);
				}
				if (!tech) {
					log$1.error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.');
					continue;
				}
				if (tech.isSupported()) {
					can = tech.canPlayType(type);
					if (can) {
						return can;
					}
				}
			}
			return '';
		};
		Player.prototype.selectSource = function selectSource(sources) {
			var _this9 = this;
			var techs = this.options_.techOrder.map(function (techName) {
				return [techName, Tech.getTech(techName)];
			}).filter(function (_ref) {
				var techName = _ref[0],
					tech = _ref[1];
				if (tech) {
					return tech.isSupported();
				}
				log$1.error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.');
				return false;
			});
			var findFirstPassingTechSourcePair = function findFirstPassingTechSourcePair(outerArray, innerArray, tester) {
				var found = void 0;
				outerArray.some(function (outerChoice) {
					return innerArray.some(function (innerChoice) {
						found = tester(outerChoice, innerChoice);
						if (found) {
							return true;
						}
					});
				});
				return found;
			};
			var foundSourceAndTech = void 0;
			var flip = function flip(fn) {
				return function (a, b) {
					return fn(b, a);
				};
			};
			var finder = function finder(_ref2, source) {
				var techName = _ref2[0],
					tech = _ref2[1];
				if (tech.canPlaySource(source, _this9.options_[techName.toLowerCase()])) {
					return { source: source, tech: techName };
				}
			};
			if (this.options_.sourceOrder) {
				foundSourceAndTech = findFirstPassingTechSourcePair(sources, techs, flip(finder));
			} else {
				foundSourceAndTech = findFirstPassingTechSourcePair(techs, sources, finder);
			}
			return foundSourceAndTech || false;
		};
		Player.prototype.src = function src(source) {
			var _this10 = this;
			if (typeof source === 'undefined') {
				return this.cache_.src || '';
			}
			var sources = filterSource(source);
			if (!sources.length) {
				this.setTimeout(function () {
					this.error({ code: 4, message: this.localize(this.options_.notSupportedMessage) });
				}, 0);
				return;
			}
			this.changingSrc_ = true;
			this.cache_.sources = sources;
			this.updateSourceCaches_(sources[0]);
			setSource(this, sources[0], function (middlewareSource, mws) {
				_this10.middleware_ = mws;
				_this10.cache_.sources = sources;
				_this10.updateSourceCaches_(middlewareSource);
				var err = _this10.src_(middlewareSource);
				if (err) {
					if (sources.length > 1) {
						return _this10.src(sources.slice(1));
					}
					_this10.changingSrc_ = false;
					_this10.setTimeout(function () {
						this.error({ code: 4, message: this.localize(this.options_.notSupportedMessage) });
					}, 0);
					_this10.triggerReady();
					return;
				}
				setTech(mws, _this10.tech_);
			});
		};
		Player.prototype.src_ = function src_(source) {
			var _this11 = this;
			var sourceTech = this.selectSource([source]);
			if (!sourceTech) {
				return true;
			}
			if (!titleCaseEquals(sourceTech.tech, this.techName_)) {
				this.changingSrc_ = true;
				this.loadTech_(sourceTech.tech, sourceTech.source);
				this.tech_.ready(function () {
					_this11.changingSrc_ = false;
				});
				return false;
			}
			this.ready(function () {
				if (this.tech_.constructor.prototype.hasOwnProperty('setSource')) {
					this.techCall_('setSource', source);
				} else {
					this.techCall_('src', source.src);
				}
				this.changingSrc_ = false;
			}, true);
			return false;
		};
		Player.prototype.load = function load() {
			this.techCall_('load');
		};
		Player.prototype.reset = function reset() {
			if (this.tech_) {
				this.tech_.clearTracks('text');
			}
			this.loadTech_(this.options_.techOrder[0], null);
			this.techCall_('reset');
		};
		Player.prototype.currentSources = function currentSources() {
			var source = this.currentSource();
			var sources = [];
			if (Object.keys(source).length !== 0) {
				sources.push(source);
			}
			return this.cache_.sources || sources;
		};
		Player.prototype.currentSource = function currentSource() {
			return this.cache_.source || {};
		};
		Player.prototype.currentSrc = function currentSrc() {
			return this.currentSource() && this.currentSource().src || '';
		};
		Player.prototype.currentType = function currentType() {
			return this.currentSource() && this.currentSource().type || '';
		};
		Player.prototype.preload = function preload(value) {
			if (value !== undefined) {
				this.techCall_('setPreload', value);
				this.options_.preload = value;
				return;
			}
			return this.techGet_('preload');
		};
		Player.prototype.autoplay = function autoplay(value) {
			if (value === undefined) {
				return this.options_.autoplay || false;
			}
			var techAutoplay = void 0;
			if (typeof value === 'string' && /(any|play|muted)/.test(value)) {
				this.options_.autoplay = value;
				this.manualAutoplay_(value);
				techAutoplay = false;
			} else if (!value) {
				this.options_.autoplay = false;
			} else {
				this.options_.autoplay = true;
			}
			techAutoplay = techAutoplay || this.options_.autoplay;
			if (this.tech_) {
				this.techCall_('setAutoplay', techAutoplay);
			}
		};
		Player.prototype.playsinline = function playsinline(value) {
			if (value !== undefined) {
				this.techCall_('setPlaysinline', value);
				this.options_.playsinline = value;
				return this;
			}
			return this.techGet_('playsinline');
		};
		Player.prototype.loop = function loop(value) {
			if (value !== undefined) {
				this.techCall_('setLoop', value);
				this.options_.loop = value;
				return;
			}
			return this.techGet_('loop');
		};
		Player.prototype.poster = function poster(src) {
			if (src === undefined) {
				return this.poster_;
			}
			if (!src) {
				src = '';
			}
			if (src === this.poster_) {
				return;
			}
			this.poster_ = src;
			this.techCall_('setPoster', src);
			this.isPosterFromTech_ = false;
			this.trigger('posterchange');
		};
		Player.prototype.handleTechPosterChange_ = function handleTechPosterChange_() {
			if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
				var newPoster = this.tech_.poster() || '';
				if (newPoster !== this.poster_) {
					this.poster_ = newPoster;
					this.isPosterFromTech_ = true;
					this.trigger('posterchange');
				}
			}
		};
		Player.prototype.controls = function controls(bool) {
			if (bool === undefined) {
				return !!this.controls_;
			}
			bool = !!bool;
			if (this.controls_ === bool) {
				return;
			}
			this.controls_ = bool;
			if (this.usingNativeControls()) {
				this.techCall_('setControls', bool);
			}
			if (this.controls_) {
				this.removeClass('vjs-controls-disabled');
				this.addClass('vjs-controls-enabled');
				this.trigger('controlsenabled');
				if (!this.usingNativeControls()) {
					this.addTechControlsListeners_();
				}
			} else {
				this.removeClass('vjs-controls-enabled');
				this.addClass('vjs-controls-disabled');
				this.trigger('controlsdisabled');
				if (!this.usingNativeControls()) {
					this.removeTechControlsListeners_();
				}
			}
		};
		Player.prototype.usingNativeControls = function usingNativeControls(bool) {
			if (bool === undefined) {
				return !!this.usingNativeControls_;
			}
			bool = !!bool;
			if (this.usingNativeControls_ === bool) {
				return;
			}
			this.usingNativeControls_ = bool;
			if (this.usingNativeControls_) {
				this.addClass('vjs-using-native-controls');
				this.trigger('usingnativecontrols');
			} else {
				this.removeClass('vjs-using-native-controls');
				this.trigger('usingcustomcontrols');
			}
		};
		Player.prototype.error = function error(err) {
			if (err === undefined) {
				return this.error_ || null;
			}
			if (err === null) {
				this.error_ = err;
				this.removeClass('vjs-error');
				if (this.errorDisplay) {
					this.errorDisplay.close();
				}
				return;
			}
			this.error_ = new MediaError(err);
			this.addClass('vjs-error');
			log$1.error('(CODE:' + this.error_.code + ' ' + MediaError.errorTypes[this.error_.code] + ')', this.error_.message, this.error_);
			this.trigger('error');
			return;
		};
		Player.prototype.reportUserActivity = function reportUserActivity(event) {
			this.userActivity_ = true;
		};
		Player.prototype.userActive = function userActive(bool) {
			if (bool === undefined) {
				return this.userActive_;
			}
			bool = !!bool;
			if (bool === this.userActive_) {
				return;
			}
			this.userActive_ = bool;
			if (this.userActive_) {
				this.userActivity_ = true;
				this.removeClass('vjs-user-inactive');
				this.addClass('vjs-user-active');
				this.trigger('useractive');
				return;
			}
			if (this.tech_) {
				this.tech_.one('mousemove', function (e) {
					e.stopPropagation();
					e.preventDefault();
				});
			}
			this.userActivity_ = false;
			this.removeClass('vjs-user-active');
			this.addClass('vjs-user-inactive');
			this.trigger('userinactive');
		};
		Player.prototype.listenForUserActivity_ = function listenForUserActivity_() {
			var mouseInProgress = void 0;
			var lastMoveX = void 0;
			var lastMoveY = void 0;
			var handleActivity = bind(this, this.reportUserActivity);
			var handleMouseMove = function handleMouseMove(e) {
				if (e.screenX !== lastMoveX || e.screenY !== lastMoveY) {
					lastMoveX = e.screenX;
					lastMoveY = e.screenY;
					handleActivity();
				}
			};
			var handleMouseDown = function handleMouseDown() {
				handleActivity();
				this.clearInterval(mouseInProgress);
				mouseInProgress = this.setInterval(handleActivity, 250);
			};
			var handleMouseUp = function handleMouseUp(event) {
				handleActivity();
				this.clearInterval(mouseInProgress);
			};
			this.on('mousedown', handleMouseDown);
			this.on('mousemove', handleMouseMove);
			this.on('mouseup', handleMouseUp);
			this.on('keydown', handleActivity);
			this.on('keyup', handleActivity);
			var inactivityTimeout = void 0;
			this.setInterval(function () {
				if (!this.userActivity_) {
					return;
				}
				this.userActivity_ = false;
				this.userActive(true);
				this.clearTimeout(inactivityTimeout);
				var timeout = this.options_.inactivityTimeout;
				if (timeout <= 0) {
					return;
				}
				inactivityTimeout = this.setTimeout(function () {
					if (!this.userActivity_) {
						this.userActive(false);
					}
				}, timeout);
			}, 250);
		};
		Player.prototype.playbackRate = function playbackRate(rate) {
			if (rate !== undefined) {
				this.techCall_('setPlaybackRate', rate);
				return;
			}
			if (this.tech_ && this.tech_.featuresPlaybackRate) {
				return this.cache_.lastPlaybackRate || this.techGet_('playbackRate');
			}
			return 1.0;
		};
		Player.prototype.defaultPlaybackRate = function defaultPlaybackRate(rate) {
			if (rate !== undefined) {
				return this.techCall_('setDefaultPlaybackRate', rate);
			}
			if (this.tech_ && this.tech_.featuresPlaybackRate) {
				return this.techGet_('defaultPlaybackRate');
			}
			return 1.0;
		};
		Player.prototype.isAudio = function isAudio(bool) {
			if (bool !== undefined) {
				this.isAudio_ = !!bool;
				return;
			}
			return !!this.isAudio_;
		};
		Player.prototype.addTextTrack = function addTextTrack(kind, label, language) {
			if (this.tech_) {
				return this.tech_.addTextTrack(kind, label, language);
			}
		};
		Player.prototype.addRemoteTextTrack = function addRemoteTextTrack(options, manualCleanup) {
			if (this.tech_) {
				return this.tech_.addRemoteTextTrack(options, manualCleanup);
			}
		};
		Player.prototype.removeRemoteTextTrack = function removeRemoteTextTrack() {
			var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
				_ref3$track = _ref3.track,
				track = _ref3$track === undefined ? arguments[0] : _ref3$track;
			if (this.tech_) {
				return this.tech_.removeRemoteTextTrack(track);
			}
		};
		Player.prototype.getVideoPlaybackQuality = function getVideoPlaybackQuality() {
			return this.techGet_('getVideoPlaybackQuality');
		};
		Player.prototype.videoWidth = function videoWidth() {
			return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0;
		};
		Player.prototype.videoHeight = function videoHeight() {
			return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0;
		};
		Player.prototype.language = function language(code) {
			if (code === undefined) {
				return this.language_;
			}
			this.language_ = String(code).toLowerCase();
		};
		Player.prototype.languages = function languages() {
			return mergeOptions(Player.prototype.options_.languages, this.languages_);
		};
		Player.prototype.toJSON = function toJSON() {
			var options = mergeOptions(this.options_);
			var tracks = options.tracks;
			options.tracks = [];
			for (var i = 0; i < tracks.length; i++) {
				var track = tracks[i];
				track = mergeOptions(track);
				track.player = undefined;
				options.tracks[i] = track;
			}
			return options;
		};
		Player.prototype.createModal = function createModal(content, options) {
			var _this12 = this;
			options = options || {};
			options.content = content || '';
			var modal = new ModalDialog(this, options);
			this.addChild(modal);
			modal.on('dispose', function () {
				_this12.removeChild(modal);
			});
			modal.open();
			return modal;
		};
		Player.getTagSettings = function getTagSettings(tag) {
			var baseOptions = {
				sources: [],
				tracks: []
			};
			var tagOptions = getAttributes(tag);
			var dataSetup = tagOptions['data-setup'];
			if (hasClass(tag, 'vjs-fluid')) {
				tagOptions.fluid = true;
			}
			if (dataSetup !== null) {
				var _safeParseTuple = tuple(dataSetup || '{}'),
					err = _safeParseTuple[0],
					data = _safeParseTuple[1];
				if (err) {
					log$1.error(err);
				}
				assign(tagOptions, data);
			}
			assign(baseOptions, tagOptions);
			if (tag.hasChildNodes()) {
				var children = tag.childNodes;
				for (var i = 0, j = children.length; i < j; i++) {
					var child = children[i];
					var childName = child.nodeName.toLowerCase();
					if (childName === 'source') {
						baseOptions.sources.push(getAttributes(child));
					} else if (childName === 'track') {
						baseOptions.tracks.push(getAttributes(child));
					}
				}
			}
			return baseOptions;
		};
		Player.prototype.flexNotSupported_ = function flexNotSupported_() {
			var elem = document_1.createElement('i');
			return !('flexBasis' in elem.style || 'webkitFlexBasis' in elem.style || 'mozFlexBasis' in elem.style || 'msFlexBasis' in elem.style ||
				'msFlexOrder' in elem.style);
		};
		return Player;
	}(Component);
	ALL.names.forEach(function (name$$1) {
		var props = ALL[name$$1];
		Player.prototype[props.getterName] = function () {
			if (this.tech_) {
				return this.tech_[props.getterName]();
			}
			this[props.privateName] = this[props.privateName] || new props.ListClass();
			return this[props.privateName];
		};
	});
	Player.players = {};
	var navigator = window_1.navigator;
	Player.prototype.options_ = {
		techOrder: Tech.defaultTechOrder_,
		html5: {},
		flash: {},
		inactivityTimeout: 2000,
		playbackRates: [],
		children: ['mediaLoader', 'posterImage', 'textTrackDisplay', 'loadingSpinner', 'bigPlayButton', 'controlBar', 'errorDisplay', 'textTrackSettings', 'resizeManager'],
		language: navigator && (navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language) || 'en',
		languages: {},
		notSupportedMessage: 'No compatible source was found for this media.'
	};
	[
		'ended',
		'seeking',
		'seekable',
		'networkState',
		'readyState'].forEach(function (fn) {
			Player.prototype[fn] = function () {
				return this.techGet_(fn);
			};
		});
	TECH_EVENTS_RETRIGGER.forEach(function (event) {
		Player.prototype['handleTech' + toTitleCase(event) + '_'] = function () {
			return this.trigger(event);
		};
	});
	Component.registerComponent('Player', Player);
	var BASE_PLUGIN_NAME = 'plugin';
	var PLUGIN_CACHE_KEY = 'activePlugins_';
	var pluginStorage = {};
	var pluginExists = function pluginExists(name) {
		return pluginStorage.hasOwnProperty(name);
	};
	var getPlugin = function getPlugin(name) {
		return pluginExists(name) ? pluginStorage[name] : undefined;
	};
	var markPluginAsActive = function markPluginAsActive(player, name) {
		player[PLUGIN_CACHE_KEY] = player[PLUGIN_CACHE_KEY] || {};
		player[PLUGIN_CACHE_KEY][name] = true;
	};
	var triggerSetupEvent = function triggerSetupEvent(player, hash, before) {
		var eventName = (before ? 'before' : '') + 'pluginsetup';
		player.trigger(eventName, hash);
		player.trigger(eventName + ':' + hash.name, hash);
	};
	var createBasicPlugin = function createBasicPlugin(name, plugin) {
		var basicPluginWrapper = function basicPluginWrapper() {
			triggerSetupEvent(this, { name: name, plugin: plugin, instance: null }, true);
			var instance = plugin.apply(this, arguments);
			markPluginAsActive(this, name);
			triggerSetupEvent(this, { name: name, plugin: plugin, instance: instance });
			return instance;
		};
		Object.keys(plugin).forEach(function (prop) {
			basicPluginWrapper[prop] = plugin[prop];
		});
		return basicPluginWrapper;
	};
	var createPluginFactory = function createPluginFactory(name, PluginSubClass) {
		PluginSubClass.prototype.name = name;
		return function () {
			triggerSetupEvent(this, { name: name, plugin: PluginSubClass, instance: null }, true);
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
			var instance = new (Function.prototype.bind.apply(PluginSubClass, [null].concat([this].concat(args))))();
			this[name] = function () {
				return instance;
			};
			triggerSetupEvent(this, instance.getEventHash());
			return instance;
		};
	};
	var Plugin = function () {
		function Plugin(player) {
			classCallCheck(this, Plugin);
			if (this.constructor === Plugin) {
				throw new Error('Plugin must be sub-classed; not directly instantiated.');
			}
			this.player = player;
			evented(this);
			delete this.trigger;
			stateful(this, this.constructor.defaultState);
			markPluginAsActive(player, this.name);
			this.dispose = bind(this, this.dispose);
			player.on('dispose', this.dispose);
		}
		Plugin.prototype.version = function version() {
			return this.constructor.VERSION;
		};
		Plugin.prototype.getEventHash = function getEventHash() {
			var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			hash.name = this.name;
			hash.plugin = this.constructor;
			hash.instance = this;
			return hash;
		};
		Plugin.prototype.trigger = function trigger$$1(event) {
			var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			return trigger(this.eventBusEl_, event, this.getEventHash(hash));
		};
		Plugin.prototype.handleStateChanged = function handleStateChanged(e) { };
		Plugin.prototype.dispose = function dispose() {
			var name = this.name,
				player = this.player;
			this.trigger('dispose');
			this.off();
			player.off('dispose', this.dispose);
			player[PLUGIN_CACHE_KEY][name] = false;
			this.player = this.state = null;
			player[name] = createPluginFactory(name, pluginStorage[name]);
		};
		Plugin.isBasic = function isBasic(plugin) {
			var p = typeof plugin === 'string' ? getPlugin(plugin) : plugin;
			return typeof p === 'function' && !Plugin.prototype.isPrototypeOf(p.prototype);
		};
		Plugin.registerPlugin = function registerPlugin(name, plugin) {
			if (typeof name !== 'string') {
				throw new Error('Illegal plugin name, "' + name + '", must be a string, was ' + (typeof name === 'undefined' ? 'undefined' : _typeof(name)) + '.');
			}
			if (pluginExists(name)) {
				log$1.warn('A plugin named "' + name + '" already exists. You may want to avoid re-registering plugins!');
			} else if (Player.prototype.hasOwnProperty(name)) {
				throw new Error('Illegal plugin name, "' + name + '", cannot share a name with an existing player method!');
			}
			if (typeof plugin !== 'function') {
				throw new Error('Illegal plugin for "' + name + '", must be a function, was ' + (typeof plugin === 'undefined' ? 'undefined' : _typeof(plugin)) + '.');
			}
			pluginStorage[name] = plugin;
			if (name !== BASE_PLUGIN_NAME) {
				if (Plugin.isBasic(plugin)) {
					Player.prototype[name] = createBasicPlugin(name, plugin);
				} else {
					Player.prototype[name] = createPluginFactory(name, plugin);
				}
			}
			return plugin;
		};
		Plugin.deregisterPlugin = function deregisterPlugin(name) {
			if (name === BASE_PLUGIN_NAME) {
				throw new Error('Cannot de-register base plugin.');
			}
			if (pluginExists(name)) {
				delete pluginStorage[name];
				delete Player.prototype[name];
			}
		};
		Plugin.getPlugins = function getPlugins() {
			var names = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.keys(pluginStorage);
			var result = void 0;
			names.forEach(function (name) {
				var plugin = getPlugin(name);
				if (plugin) {
					result = result || {};
					result[name] = plugin;
				}
			});
			return result;
		};
		Plugin.getPluginVersion = function getPluginVersion(name) {
			var plugin = getPlugin(name);
			return plugin && plugin.VERSION || '';
		};
		return Plugin;
	}();
	Plugin.getPlugin = getPlugin;
	Plugin.BASE_PLUGIN_NAME = BASE_PLUGIN_NAME;
	Plugin.registerPlugin(BASE_PLUGIN_NAME, Plugin);
	Player.prototype.usingPlugin = function (name) {
		return !!this[PLUGIN_CACHE_KEY] && this[PLUGIN_CACHE_KEY][name] === true;
	};
	Player.prototype.hasPlugin = function (name) {
		return !!pluginExists(name);
	};
	var _inherits = function _inherits(subClass, superClass) {
		if (typeof superClass !== 'function' && superClass !== null) {
			throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) {
			subClass.super_ = superClass;
		}
	};
	var extendFn = function extendFn(superClass) {
		var subClassMethods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var subClass = function subClass() {
			superClass.apply(this, arguments);
		};
		var methods = {};
		if ((typeof subClassMethods === 'undefined' ? 'undefined' : _typeof(subClassMethods)) === 'object') {
			if (subClassMethods.constructor !== Object.prototype.constructor) {
				subClass = subClassMethods.constructor;
			}
			methods = subClassMethods;
		} else if (typeof subClassMethods === 'function') {
			subClass = subClassMethods;
		}
		_inherits(subClass, superClass);
		for (var name in methods) {
			if (methods.hasOwnProperty(name)) {
				subClass.prototype[name] = methods[name];
			}
		}
		return subClass;
	};
	var normalizeId = function normalizeId(id) {
		return id.indexOf('#') === 0 ? id.slice(1) : id;
	};
	function videojs$1(id, options, ready) {
		var player = videojs$1.getPlayer(id);
		if (player) {
			if (options) {
				log$1.warn('Player "' + id + '" is already initialised. Options will not be applied.');
			}
			if (ready) {
				player.ready(ready);
			}
			return player;
		}
		var el = typeof id === 'string' ? $('#' + normalizeId(id)) : id;
		if (!isEl(el)) {
			throw new TypeError('The element or ID supplied is not valid. (videojs)');
		}
		if (!document_1.body.contains(el)) {
			log$1.warn('The element supplied is not included in the DOM');
		}
		options = options || {};
		videojs$1.hooks('beforesetup').forEach(function (hookFunction) {
			var opts = hookFunction(el, mergeOptions(options));
			if (!isObject(opts) || Array.isArray(opts)) {
				log$1.error('please return an object in beforesetup hooks');
				return;
			}
			options = mergeOptions(options, opts);
		});
		var PlayerComponent = Component.getComponent('Player');
		player = new PlayerComponent(el, options, ready);
		videojs$1.hooks('setup').forEach(function (hookFunction) {
			return hookFunction(player);
		});
		return player;
	}
	videojs$1.hooks_ = {};
	videojs$1.hooks = function (type, fn) {
		videojs$1.hooks_[type] = videojs$1.hooks_[type] || [];
		if (fn) {
			videojs$1.hooks_[type] = videojs$1.hooks_[type].concat(fn);
		}
		return videojs$1.hooks_[type];
	};
	videojs$1.hook = function (type, fn) {
		videojs$1.hooks(type, fn);
	};
	videojs$1.hookOnce = function (type, fn) {
		videojs$1.hooks(type, [].concat(fn).map(function (original) {
			var wrapper = function wrapper() {
				videojs$1.removeHook(type, wrapper);
				return original.apply(undefined, arguments);
			};
			return wrapper;
		}));
	};
	videojs$1.removeHook = function (type, fn) {
		var index = videojs$1.hooks(type).indexOf(fn);
		if (index <= -1) {
			return false;
		}
		videojs$1.hooks_[type] = videojs$1.hooks_[type].slice();
		videojs$1.hooks_[type].splice(index, 1);
		return true;
	};
	if (window_1.VIDEOJS_NO_DYNAMIC_STYLE !== true && isReal()) {
		var style$1 = $('.vjs-styles-defaults');
		if (!style$1) {
			style$1 = createStyleElement('vjs-styles-defaults');
			var head = $('head');
			if (head) {
				head.insertBefore(style$1, head.firstChild);
			}
			setTextContent(style$1, '\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ');
		}
	}
	autoSetupTimeout(1, videojs$1);
	videojs$1.VERSION = version;
	videojs$1.options = Player.prototype.options_;
	videojs$1.getPlayers = function () {
		return Player.players;
	};
	videojs$1.getPlayer = function (id) {
		var players = Player.players;
		var tag = void 0;
		if (typeof id === 'string') {
			var nId = normalizeId(id);
			var player = players[nId];
			if (player) {
				return player;
			}
			tag = $('#' + nId);
		} else {
			tag = id;
		}
		if (isEl(tag)) {
			var _tag = tag,
				_player = _tag.player,
				playerId = _tag.playerId;
			if (_player || players[playerId]) {
				return _player || players[playerId];
			}
		}
	};
	videojs$1.getAllPlayers = function () {
		return (
			Object.keys(Player.players).map(function (k) {
				return Player.players[k];
			}).filter(Boolean)
		);
	};
	videojs$1.players = Player.players;
	videojs$1.getComponent = Component.getComponent;
	videojs$1.registerComponent = function (name$$1, comp) {
		if (Tech.isTech(comp)) {
			log$1.warn('The ' + name$$1 + ' tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)');
		}
		Component.registerComponent.call(Component, name$$1, comp);
	};
	videojs$1.getTech = Tech.getTech;
	videojs$1.registerTech = Tech.registerTech;
	videojs$1.use = use;
	Object.defineProperty(videojs$1, 'middleware', {
		value: {},
		writeable: false,
		enumerable: true
	});
	Object.defineProperty(videojs$1.middleware, 'TERMINATOR', {
		value: TERMINATOR,
		writeable: false,
		enumerable: true
	});
	videojs$1.browser = browser;
	videojs$1.TOUCH_ENABLED = TOUCH_ENABLED;
	videojs$1.extend = extendFn;
	videojs$1.mergeOptions = mergeOptions;
	videojs$1.bind = bind;
	videojs$1.registerPlugin = Plugin.registerPlugin;
	videojs$1.deregisterPlugin = Plugin.deregisterPlugin;
	videojs$1.plugin = function (name$$1, plugin) {
		log$1.warn('videojs.plugin() is deprecated; use videojs.registerPlugin() instead');
		return Plugin.registerPlugin(name$$1, plugin);
	};
	videojs$1.getPlugins = Plugin.getPlugins;
	videojs$1.getPlugin = Plugin.getPlugin;
	videojs$1.getPluginVersion = Plugin.getPluginVersion;
	videojs$1.addLanguage = function (code, data) {
		var _mergeOptions;
		code = ('' + code).toLowerCase();
		videojs$1.options.languages = mergeOptions(videojs$1.options.languages, (_mergeOptions = {}, _mergeOptions[code] = data, _mergeOptions));
		return videojs$1.options.languages[code];
	};
	videojs$1.log = log$1;
	videojs$1.createTimeRange = videojs$1.createTimeRanges = createTimeRanges;
	videojs$1.formatTime = formatTime;
	videojs$1.setFormatTime = setFormatTime;
	videojs$1.resetFormatTime = resetFormatTime;
	videojs$1.parseUrl = parseUrl;
	videojs$1.isCrossOrigin = isCrossOrigin;
	videojs$1.EventTarget = EventTarget;
	videojs$1.on = on;
	videojs$1.one = one;
	videojs$1.off = off;
	videojs$1.trigger = trigger;
	videojs$1.xhr = xhr;
	videojs$1.TextTrack = TextTrack;
	videojs$1.AudioTrack = AudioTrack;
	videojs$1.VideoTrack = VideoTrack;
	['isEl', 'isTextNode', 'createEl', 'hasClass', 'addClass', 'removeClass', 'toggleClass', 'setAttributes', 'getAttributes', 'emptyEl', 'appendContent', 'insertContent'].forEach(function (k) {
		videojs$1[k] = function () {
			log$1.warn('videojs.' + k + '() is deprecated; use videojs.dom.' + k + '() instead');
			return Dom[k].apply(null, arguments);
		};
	});
	videojs$1.computedStyle = computedStyle;
	videojs$1.dom = Dom;
	videojs$1.url = Url;
	var urlToolkit = createCommonjsModule(function (module, exports) {
		(function (root) {
			var URL_REGEX = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/;
			var FIRST_SEGMENT_REGEX = /^([^\/;?#]*)(.*)$/;
			var SLASH_DOT_REGEX = /(?:\/|^)\.(?=\/)/g;
			var SLASH_DOT_DOT_REGEX = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g;
			var URLToolkit = {
				buildAbsoluteURL: function buildAbsoluteURL(baseURL, relativeURL, opts) {
					opts = opts || {};
					baseURL = baseURL.trim();
					relativeURL = relativeURL.trim();
					if (!relativeURL) {
						if (!opts.alwaysNormalize) {
							return baseURL;
						}
						var basePartsForNormalise = URLToolkit.parseURL(baseURL);
						if (!basePartsForNormalise) {
							throw new Error('Error trying to parse base URL.');
						}
						basePartsForNormalise.path = URLToolkit.normalizePath(basePartsForNormalise.path);
						return URLToolkit.buildURLFromParts(basePartsForNormalise);
					}
					var relativeParts = URLToolkit.parseURL(relativeURL);
					if (!relativeParts) {
						throw new Error('Error trying to parse relative URL.');
					}
					if (relativeParts.scheme) {
						if (!opts.alwaysNormalize) {
							return relativeURL;
						}
						relativeParts.path = URLToolkit.normalizePath(relativeParts.path);
						return URLToolkit.buildURLFromParts(relativeParts);
					}
					var baseParts = URLToolkit.parseURL(baseURL);
					if (!baseParts) {
						throw new Error('Error trying to parse base URL.');
					}
					if (!baseParts.netLoc && baseParts.path && baseParts.path[0] !== '/') {
						var pathParts = FIRST_SEGMENT_REGEX.exec(baseParts.path);
						baseParts.netLoc = pathParts[1];
						baseParts.path = pathParts[2];
					}
					if (baseParts.netLoc && !baseParts.path) {
						baseParts.path = '/';
					}
					var builtParts = {
						scheme: baseParts.scheme,
						netLoc: relativeParts.netLoc,
						path: null,
						params: relativeParts.params,
						query: relativeParts.query,
						fragment: relativeParts.fragment
					};
					if (!relativeParts.netLoc) {
						builtParts.netLoc = baseParts.netLoc;
						if (relativeParts.path[0] !== '/') {
							if (!relativeParts.path) {
								builtParts.path = baseParts.path;
								if (!relativeParts.params) {
									builtParts.params = baseParts.params;
									if (!relativeParts.query) {
										builtParts.query = baseParts.query;
									}
								}
							} else {
								var baseURLPath = baseParts.path;
								var newPath = baseURLPath.substring(0, baseURLPath.lastIndexOf('/') + 1) + relativeParts.path;
								builtParts.path = URLToolkit.normalizePath(newPath);
							}
						}
					}
					if (builtParts.path === null) {
						builtParts.path = opts.alwaysNormalize ? URLToolkit.normalizePath(relativeParts.path) : relativeParts.path;
					}
					return URLToolkit.buildURLFromParts(builtParts);
				},
				parseURL: function parseURL(url) {
					var parts = URL_REGEX.exec(url);
					if (!parts) {
						return null;
					}
					return {
						scheme: parts[1] || '',
						netLoc: parts[2] || '',
						path: parts[3] || '',
						params: parts[4] || '',
						query: parts[5] || '',
						fragment: parts[6] || ''
					};
				},
				normalizePath: function normalizePath(path) {
					path = path.split('').reverse().join('').replace(SLASH_DOT_REGEX, '');
					while (path.length !== (path = path.replace(SLASH_DOT_DOT_REGEX, '')).length) { }
					return path.split('').reverse().join('');
				},
				buildURLFromParts: function buildURLFromParts(parts) {
					return parts.scheme + parts.netLoc + parts.path + parts.params + parts.query + parts.fragment;
				}
			};
			module.exports = URLToolkit;
		})(commonjsGlobal);
	});
	var classCallCheck$1 = function classCallCheck$$1(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	};
	var _extends$1 = Object.assign || function (target) {
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
	var inherits$1 = function inherits$$1(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	var possibleConstructorReturn$1 = function possibleConstructorReturn$$1(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	};
	var Stream = function () {
		function Stream() {
			classCallCheck$1(this, Stream);
			this.listeners = {};
		}
		Stream.prototype.on = function on(type, listener) {
			if (!this.listeners[type]) {
				this.listeners[type] = [];
			}
			this.listeners[type].push(listener);
		};
		Stream.prototype.off = function off(type, listener) {
			if (!this.listeners[type]) {
				return false;
			}
			var index = this.listeners[type].indexOf(listener);
			this.listeners[type].splice(index, 1);
			return index > -1;
		};
		Stream.prototype.trigger = function trigger(type) {
			var callbacks = this.listeners[type];
			var i = void 0;
			var length = void 0;
			var args = void 0;
			if (!callbacks) {
				return;
			}
			if (arguments.length === 2) {
				length = callbacks.length;
				for (i = 0; i < length; ++i) {
					callbacks[i].call(this, arguments[1]);
				}
			} else {
				args = Array.prototype.slice.call(arguments, 1);
				length = callbacks.length;
				for (i = 0; i < length; ++i) {
					callbacks[i].apply(this, args);
				}
			}
		};
		Stream.prototype.dispose = function dispose() {
			this.listeners = {};
		};
		Stream.prototype.pipe = function pipe(destination) {
			this.on('data', function (data) {
				destination.push(data);
			});
		};
		return Stream;
	}();
	var LineStream = function (_Stream) {
		inherits$1(LineStream, _Stream);
		function LineStream() {
			classCallCheck$1(this, LineStream);
			var _this = possibleConstructorReturn$1(this, _Stream.call(this));
			_this.buffer = '';
			return _this;
		}
		LineStream.prototype.push = function push(data) {
			var nextNewline = void 0;
			this.buffer += data;
			nextNewline = this.buffer.indexOf('\n');
			for (; nextNewline > -1; nextNewline = this.buffer.indexOf('\n')) {
				this.trigger('data', this.buffer.substring(0, nextNewline));
				this.buffer = this.buffer.substring(nextNewline + 1);
			}
		};
		return LineStream;
	}(Stream);
	var attributeSeparator = function attributeSeparator() {
		var key = '[^=]*';
		var value = '"[^"]*"|[^,]*';
		var keyvalue = '(?:' + key + ')=(?:' + value + ')';
		return new RegExp('(?:^|,)(' + keyvalue + ')');
	};
	var parseAttributes = function parseAttributes(attributes) {
		var attrs = attributes.split(attributeSeparator());
		var result = {};
		var i = attrs.length;
		var attr = void 0;
		while (i--) {
			if (attrs[i] === '') {
				continue;
			}
			attr = /([^=]*)=(.*)/.exec(attrs[i]).slice(1);
			attr[0] = attr[0].replace(/^\s+|\s+$/g, '');
			attr[1] = attr[1].replace(/^\s+|\s+$/g, '');
			attr[1] = attr[1].replace(/^['"](.*)['"]$/g, '$1');
			result[attr[0]] = attr[1];
		}
		return result;
	};
	var ParseStream = function (_Stream) {
		inherits$1(ParseStream, _Stream);
		function ParseStream() {
			classCallCheck$1(this, ParseStream);
			var _this = possibleConstructorReturn$1(this, _Stream.call(this));
			_this.customParsers = [];
			return _this;
		}
		ParseStream.prototype.push = function push(line) {
			var match = void 0;
			var event = void 0;
			line = line.replace(/^[\u0000\s]+|[\u0000\s]+$/g, '');
			if (line.length === 0) {
				return;
			}
			if (line[0] !== '#') {
				this.trigger('data', {
					type: 'uri',
					uri: line
				});
				return;
			}
			for (var i = 0; i < this.customParsers.length; i++) {
				if (this.customParsers[i].call(this, line)) {
					return;
				}
			}
			if (line.indexOf('#EXT') !== 0) {
				this.trigger('data', {
					type: 'comment',
					text: line.slice(1)
				});
				return;
			}
			line = line.replace('\r', '');
			match = /^#EXTM3U/.exec(line);
			if (match) {
				this.trigger('data', {
					type: 'tag',
					tagType: 'm3u'
				});
				return;
			}
			match = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'inf'
				};
				if (match[1]) {
					event.duration = parseFloat(match[1]);
				}
				if (match[2]) {
					event.title = match[2];
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'targetduration'
				};
				if (match[1]) {
					event.duration = parseInt(match[1], 10);
				}
				this.trigger('data', event);
				return;
			}
			match = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'totalduration'
				};
				if (match[1]) {
					event.duration = parseInt(match[1], 10);
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'version'
				};
				if (match[1]) {
					event.version = parseInt(match[1], 10);
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'media-sequence'
				};
				if (match[1]) {
					event.number = parseInt(match[1], 10);
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'discontinuity-sequence'
				};
				if (match[1]) {
					event.number = parseInt(match[1], 10);
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'playlist-type'
				};
				if (match[1]) {
					event.playlistType = match[1];
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'byterange'
				};
				if (match[1]) {
					event.length = parseInt(match[1], 10);
				}
				if (match[2]) {
					event.offset = parseInt(match[2], 10);
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'allow-cache'
				};
				if (match[1]) {
					event.allowed = !/NO/.test(match[1]);
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-MAP:?(.*)$/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'map'
				};
				if (match[1]) {
					var attributes = parseAttributes(match[1]);
					if (attributes.URI) {
						event.uri = attributes.URI;
					}
					if (attributes.BYTERANGE) {
						var _attributes$BYTERANGE = attributes.BYTERANGE.split('@'),
							length = _attributes$BYTERANGE[0],
							offset = _attributes$BYTERANGE[1];
						event.byterange = {};
						if (length) {
							event.byterange.length = parseInt(length, 10);
						}
						if (offset) {
							event.byterange.offset = parseInt(offset, 10);
						}
					}
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-STREAM-INF:?(.*)$/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'stream-inf'
				};
				if (match[1]) {
					event.attributes = parseAttributes(match[1]);
					if (event.attributes.RESOLUTION) {
						var split = event.attributes.RESOLUTION.split('x');
						var resolution = {};
						if (split[0]) {
							resolution.width = parseInt(split[0], 10);
						}
						if (split[1]) {
							resolution.height = parseInt(split[1], 10);
						}
						event.attributes.RESOLUTION = resolution;
					}
					if (event.attributes.BANDWIDTH) {
						event.attributes.BANDWIDTH = parseInt(event.attributes.BANDWIDTH, 10);
					}
					if (event.attributes['PROGRAM-ID']) {
						event.attributes['PROGRAM-ID'] = parseInt(event.attributes['PROGRAM-ID'], 10);
					}
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-MEDIA:?(.*)$/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'media'
				};
				if (match[1]) {
					event.attributes = parseAttributes(match[1]);
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-ENDLIST/.exec(line);
			if (match) {
				this.trigger('data', {
					type: 'tag',
					tagType: 'endlist'
				});
				return;
			}
			match = /^#EXT-X-DISCONTINUITY/.exec(line);
			if (match) {
				this.trigger('data', {
					type: 'tag',
					tagType: 'discontinuity'
				});
				return;
			}
			match = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'program-date-time'
				};
				if (match[1]) {
					event.dateTimeString = match[1];
					event.dateTimeObject = new Date(match[1]);
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-KEY:?(.*)$/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'key'
				};
				if (match[1]) {
					event.attributes = parseAttributes(match[1]);
					if (event.attributes.IV) {
						if (event.attributes.IV.substring(0, 2).toLowerCase() === '0x') {
							event.attributes.IV = event.attributes.IV.substring(2);
						}
						event.attributes.IV = event.attributes.IV.match(/.{8}/g);
						event.attributes.IV[0] = parseInt(event.attributes.IV[0], 16);
						event.attributes.IV[1] = parseInt(event.attributes.IV[1], 16);
						event.attributes.IV[2] = parseInt(event.attributes.IV[2], 16);
						event.attributes.IV[3] = parseInt(event.attributes.IV[3], 16);
						event.attributes.IV = new Uint32Array(event.attributes.IV);
					}
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-START:?(.*)$/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'start'
				};
				if (match[1]) {
					event.attributes = parseAttributes(match[1]);
					event.attributes['TIME-OFFSET'] = parseFloat(event.attributes['TIME-OFFSET']);
					event.attributes.PRECISE = /YES/.test(event.attributes.PRECISE);
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'cue-out-cont'
				};
				if (match[1]) {
					event.data = match[1];
				} else {
					event.data = '';
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'cue-out'
				};
				if (match[1]) {
					event.data = match[1];
				} else {
					event.data = '';
				}
				this.trigger('data', event);
				return;
			}
			match = /^#EXT-X-CUE-IN:?(.*)?$/.exec(line);
			if (match) {
				event = {
					type: 'tag',
					tagType: 'cue-in'
				};
				if (match[1]) {
					event.data = match[1];
				} else {
					event.data = '';
				}
				this.trigger('data', event);
				return;
			}
			this.trigger('data', {
				type: 'tag',
				data: line.slice(4)
			});
		};
		ParseStream.prototype.addParser = function addParser(_ref) {
			var _this2 = this;
			var expression = _ref.expression,
				customType = _ref.customType,
				dataParser = _ref.dataParser,
				segment = _ref.segment;
			if (typeof dataParser !== 'function') {
				dataParser = function dataParser(line) {
					return line;
				};
			}
			this.customParsers.push(function (line) {
				var match = expression.exec(line);
				if (match) {
					_this2.trigger('data', {
						type: 'custom',
						data: dataParser(line),
						customType: customType,
						segment: segment
					});
					return true;
				}
			});
		};
		return ParseStream;
	}(Stream);
	var Parser = function (_Stream) {
		inherits$1(Parser, _Stream);
		function Parser() {
			classCallCheck$1(this, Parser);
			var _this = possibleConstructorReturn$1(this, _Stream.call(this));
			_this.lineStream = new LineStream();
			_this.parseStream = new ParseStream();
			_this.lineStream.pipe(_this.parseStream);
			var self = _this;
			var uris = [];
			var currentUri = {};
			var currentMap = void 0;
			var _key = void 0;
			var noop = function noop() { };
			var defaultMediaGroups = {
				'AUDIO': {},
				'VIDEO': {},
				'CLOSED-CAPTIONS': {},
				'SUBTITLES': {}
			};
			var currentTimeline = 0;
			_this.manifest = {
				allowCache: true,
				discontinuityStarts: [],
				segments: []
			};
			_this.parseStream.on('data', function (entry) {
				var mediaGroup = void 0;
				var rendition = void 0;
				({
					tag: function tag() {
						(({
							'allow-cache': function allowCache() {
								this.manifest.allowCache = entry.allowed;
								if (!('allowed' in entry)) {
									this.trigger('info', {
										message: 'defaulting allowCache to YES'
									});
									this.manifest.allowCache = true;
								}
							},
							byterange: function byterange() {
								var byterange = {};
								if ('length' in entry) {
									currentUri.byterange = byterange;
									byterange.length = entry.length;
									if (!('offset' in entry)) {
										this.trigger('info', {
											message: 'defaulting offset to zero'
										});
										entry.offset = 0;
									}
								}
								if ('offset' in entry) {
									currentUri.byterange = byterange;
									byterange.offset = entry.offset;
								}
							},
							endlist: function endlist() {
								this.manifest.endList = true;
							},
							inf: function inf() {
								if (!('mediaSequence' in this.manifest)) {
									this.manifest.mediaSequence = 0;
									this.trigger('info', {
										message: 'defaulting media sequence to zero'
									});
								}
								if (!('discontinuitySequence' in this.manifest)) {
									this.manifest.discontinuitySequence = 0;
									this.trigger('info', {
										message: 'defaulting discontinuity sequence to zero'
									});
								}
								if (entry.duration > 0) {
									currentUri.duration = entry.duration;
								}
								if (entry.duration === 0) {
									currentUri.duration = 0.01;
									this.trigger('info', {
										message: 'updating zero segment duration to a small value'
									});
								}
								this.manifest.segments = uris;
							},
							key: function key() {
								if (!entry.attributes) {
									this.trigger('warn', {
										message: 'ignoring key declaration without attribute list'
									});
									return;
								}
								if (entry.attributes.METHOD === 'NONE') {
									_key = null;
									return;
								}
								if (!entry.attributes.URI) {
									this.trigger('warn', {
										message: 'ignoring key declaration without URI'
									});
									return;
								}
								if (!entry.attributes.METHOD) {
									this.trigger('warn', {
										message: 'defaulting key method to AES-128'
									});
								}
								_key = {
									method: entry.attributes.METHOD || 'AES-128',
									uri: entry.attributes.URI
								};
								if (typeof entry.attributes.IV !== 'undefined') {
									_key.iv = entry.attributes.IV;
								}
							},
							'media-sequence': function mediaSequence() {
								if (!isFinite(entry.number)) {
									this.trigger('warn', {
										message: 'ignoring invalid media sequence: ' + entry.number
									});
									return;
								}
								this.manifest.mediaSequence = entry.number;
							},
							'discontinuity-sequence': function discontinuitySequence() {
								if (!isFinite(entry.number)) {
									this.trigger('warn', {
										message: 'ignoring invalid discontinuity sequence: ' + entry.number
									});
									return;
								}
								this.manifest.discontinuitySequence = entry.number;
								currentTimeline = entry.number;
							},
							'playlist-type': function playlistType() {
								if (!/VOD|EVENT/.test(entry.playlistType)) {
									this.trigger('warn', {
										message: 'ignoring unknown playlist type: ' + entry.playlist
									});
									return;
								}
								this.manifest.playlistType = entry.playlistType;
							},
							map: function map() {
								currentMap = {};
								if (entry.uri) {
									currentMap.uri = entry.uri;
								}
								if (entry.byterange) {
									currentMap.byterange = entry.byterange;
								}
							},
							'stream-inf': function streamInf() {
								this.manifest.playlists = uris;
								this.manifest.mediaGroups = this.manifest.mediaGroups || defaultMediaGroups;
								if (!entry.attributes) {
									this.trigger('warn', {
										message: 'ignoring empty stream-inf attributes'
									});
									return;
								}
								if (!currentUri.attributes) {
									currentUri.attributes = {};
								}
								_extends$1(currentUri.attributes, entry.attributes);
							},
							media: function media() {
								this.manifest.mediaGroups = this.manifest.mediaGroups || defaultMediaGroups;
								if (!(entry.attributes && entry.attributes.TYPE && entry.attributes['GROUP-ID'] && entry.attributes.NAME)) {
									this.trigger('warn', {
										message: 'ignoring incomplete or missing media group'
									});
									return;
								}
								var mediaGroupType = this.manifest.mediaGroups[entry.attributes.TYPE];
								mediaGroupType[entry.attributes['GROUP-ID']] = mediaGroupType[entry.attributes['GROUP-ID']] || {};
								mediaGroup = mediaGroupType[entry.attributes['GROUP-ID']];
								rendition = {
									'default': /yes/i.test(entry.attributes.DEFAULT)
								};
								if (rendition['default']) {
									rendition.autoselect = true;
								} else {
									rendition.autoselect = /yes/i.test(entry.attributes.AUTOSELECT);
								}
								if (entry.attributes.LANGUAGE) {
									rendition.language = entry.attributes.LANGUAGE;
								}
								if (entry.attributes.URI) {
									rendition.uri = entry.attributes.URI;
								}
								if (entry.attributes['INSTREAM-ID']) {
									rendition.instreamId = entry.attributes['INSTREAM-ID'];
								}
								if (entry.attributes.CHARACTERISTICS) {
									rendition.characteristics = entry.attributes.CHARACTERISTICS;
								}
								if (entry.attributes.FORCED) {
									rendition.forced = /yes/i.test(entry.attributes.FORCED);
								}
								mediaGroup[entry.attributes.NAME] = rendition;
							},
							discontinuity: function discontinuity() {
								currentTimeline += 1;
								currentUri.discontinuity = true;
								this.manifest.discontinuityStarts.push(uris.length);
							},
							'program-date-time': function programDateTime() {
								if (typeof this.manifest.dateTimeString === 'undefined') {
									this.manifest.dateTimeString = entry.dateTimeString;
									this.manifest.dateTimeObject = entry.dateTimeObject;
								}
								currentUri.dateTimeString = entry.dateTimeString;
								currentUri.dateTimeObject = entry.dateTimeObject;
							},
							targetduration: function targetduration() {
								if (!isFinite(entry.duration) || entry.duration < 0) {
									this.trigger('warn', {
										message: 'ignoring invalid target duration: ' + entry.duration
									});
									return;
								}
								this.manifest.targetDuration = entry.duration;
							},
							totalduration: function totalduration() {
								if (!isFinite(entry.duration) || entry.duration < 0) {
									this.trigger('warn', {
										message: 'ignoring invalid total duration: ' + entry.duration
									});
									return;
								}
								this.manifest.totalDuration = entry.duration;
							},
							start: function start() {
								if (!entry.attributes || isNaN(entry.attributes['TIME-OFFSET'])) {
									this.trigger('warn', {
										message: 'ignoring start declaration without appropriate attribute list'
									});
									return;
								}
								this.manifest.start = {
									timeOffset: entry.attributes['TIME-OFFSET'],
									precise: entry.attributes.PRECISE
								};
							},
							'cue-out': function cueOut() {
								currentUri.cueOut = entry.data;
							},
							'cue-out-cont': function cueOutCont() {
								currentUri.cueOutCont = entry.data;
							},
							'cue-in': function cueIn() {
								currentUri.cueIn = entry.data;
							}
						})[entry.tagType] || noop).call(self);
					},
					uri: function uri() {
						currentUri.uri = entry.uri;
						uris.push(currentUri);
						if (this.manifest.targetDuration && !('duration' in currentUri)) {
							this.trigger('warn', {
								message: 'defaulting segment duration to the target duration'
							});
							currentUri.duration = this.manifest.targetDuration;
						}
						if (_key) {
							currentUri.key = _key;
						}
						currentUri.timeline = currentTimeline;
						if (currentMap) {
							currentUri.map = currentMap;
						}
						currentUri = {};
					},
					comment: function comment() {
					},
					custom: function custom() {
						if (entry.segment) {
							currentUri.custom = currentUri.custom || {};
							currentUri.custom[entry.customType] = entry.data;
						} else {
							this.manifest.custom = this.manifest.custom || {};
							this.manifest.custom[entry.customType] = entry.data;
						}
					}
				})[entry.type].call(self);
			});
			return _this;
		}
		Parser.prototype.push = function push(chunk) {
			this.lineStream.push(chunk);
		};
		Parser.prototype.end = function end() {
			this.lineStream.push('\n');
		};
		Parser.prototype.addParser = function addParser(options) {
			this.parseStream.addParser(options);
		};
		return Parser;
	}(Stream);
	var formatAudioPlaylist = function formatAudioPlaylist(_ref) {
		var _attributes;
		var attributes = _ref.attributes,
			segments = _ref.segments;
		var playlist = {
			attributes: (_attributes = {
				NAME: attributes.id,
				BANDWIDTH: attributes.bandwidth,
				CODECS: attributes.codecs
			}, _attributes['PROGRAM-ID'] = 1, _attributes),
			uri: '',
			endList: (attributes.type || 'static') === 'static',
			timeline: attributes.periodIndex,
			resolvedUri: '',
			targetDuration: attributes.duration,
			segments: segments,
			mediaSequence: segments.length ? segments[0].number : 1
		};
		if (attributes.contentProtection) {
			playlist.contentProtection = attributes.contentProtection;
		}
		return playlist;
	};
	var formatVttPlaylist = function formatVttPlaylist(_ref2) {
		var _attributes2;
		var attributes = _ref2.attributes,
			segments = _ref2.segments;
		if (typeof segments === 'undefined') {
			segments = [{
				uri: attributes.baseUrl,
				timeline: attributes.periodIndex,
				resolvedUri: attributes.baseUrl || '',
				duration: attributes.sourceDuration,
				number: 0
			}];
			attributes.duration = attributes.sourceDuration;
		}
		return {
			attributes: (_attributes2 = {
				NAME: attributes.id,
				BANDWIDTH: attributes.bandwidth
			}, _attributes2['PROGRAM-ID'] = 1, _attributes2),
			uri: '',
			endList: (attributes.type || 'static') === 'static',
			timeline: attributes.periodIndex,
			resolvedUri: attributes.baseUrl || '',
			targetDuration: attributes.duration,
			segments: segments,
			mediaSequence: segments.length ? segments[0].number : 1
		};
	};
	var organizeAudioPlaylists = function organizeAudioPlaylists(playlists) {
		return playlists.reduce(function (a, playlist) {
			var role = playlist.attributes.role && playlist.attributes.role.value || 'main';
			var language = playlist.attributes.lang || '';
			var label = 'main';
			if (language) {
				label = playlist.attributes.lang + ' (' + role + ')';
			}
			if (a[label] && a[label].playlists[0].attributes.BANDWIDTH > playlist.attributes.bandwidth) {
				return a;
			}
			a[label] = {
				language: language,
				autoselect: true,
				'default': role === 'main',
				playlists: [formatAudioPlaylist(playlist)],
				uri: ''
			};
			return a;
		}, {});
	};
	var organizeVttPlaylists = function organizeVttPlaylists(playlists) {
		return playlists.reduce(function (a, playlist) {
			var label = playlist.attributes.lang || 'text';
			if (a[label]) {
				return a;
			}
			a[label] = {
				language: label,
				'default': false,
				autoselect: false,
				playlists: [formatVttPlaylist(playlist)],
				uri: ''
			};
			return a;
		}, {});
	};
	var formatVideoPlaylist = function formatVideoPlaylist(_ref3) {
		var _attributes3;
		var attributes = _ref3.attributes,
			segments = _ref3.segments;
		var playlist = {
			attributes: (_attributes3 = {
				NAME: attributes.id,
				AUDIO: 'audio',
				SUBTITLES: 'subs',
				RESOLUTION: {
					width: attributes.width,
					height: attributes.height
				},
				CODECS: attributes.codecs,
				BANDWIDTH: attributes.bandwidth
			}, _attributes3['PROGRAM-ID'] = 1, _attributes3),
			uri: '',
			endList: (attributes.type || 'static') === 'static',
			timeline: attributes.periodIndex,
			resolvedUri: '',
			targetDuration: attributes.duration,
			segments: segments,
			mediaSequence: segments.length ? segments[0].number : 1
		};
		if (attributes.contentProtection) {
			playlist.contentProtection = attributes.contentProtection;
		}
		return playlist;
	};
	var toM3u8 = function toM3u8(dashPlaylists) {
		var _mediaGroups;
		if (!dashPlaylists.length) {
			return {};
		}
		var _dashPlaylists$0$attr = dashPlaylists[0].attributes,
			duration = _dashPlaylists$0$attr.sourceDuration,
			_dashPlaylists$0$attr2 = _dashPlaylists$0$attr.minimumUpdatePeriod,
			minimumUpdatePeriod = _dashPlaylists$0$attr2 === undefined ? 0 : _dashPlaylists$0$attr2;
		var videoOnly = function videoOnly(_ref4) {
			var attributes = _ref4.attributes;
			return attributes.mimeType === 'video/mp4' || attributes.contentType === 'video';
		};
		var audioOnly = function audioOnly(_ref5) {
			var attributes = _ref5.attributes;
			return attributes.mimeType === 'audio/mp4' || attributes.contentType === 'audio';
		};
		var vttOnly = function vttOnly(_ref6) {
			var attributes = _ref6.attributes;
			return attributes.mimeType === 'text/vtt' || attributes.contentType === 'text';
		};
		var videoPlaylists = dashPlaylists.filter(videoOnly).map(formatVideoPlaylist);
		var audioPlaylists = dashPlaylists.filter(audioOnly);
		var vttPlaylists = dashPlaylists.filter(vttOnly);
		var master = {
			allowCache: true,
			discontinuityStarts: [],
			segments: [],
			endList: true,
			mediaGroups: (_mediaGroups = {
				AUDIO: {},
				VIDEO: {}
			}, _mediaGroups['CLOSED-CAPTIONS'] = {}, _mediaGroups.SUBTITLES = {}, _mediaGroups),
			uri: '',
			duration: duration,
			playlists: videoPlaylists,
			minimumUpdatePeriod: minimumUpdatePeriod * 1000
		};
		if (audioPlaylists.length) {
			master.mediaGroups.AUDIO.audio = organizeAudioPlaylists(audioPlaylists);
		}
		if (vttPlaylists.length) {
			master.mediaGroups.SUBTITLES.subs = organizeVttPlaylists(vttPlaylists);
		}
		return master;
	};
	var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
		return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	} : function (obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	};
	var isObject$1 = function isObject(obj) {
		return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof$1(obj)) === 'object';
	};
	var merge = function merge() {
		for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
			objects[_key] = arguments[_key];
		}
		return objects.reduce(function (result, source) {
			Object.keys(source).forEach(function (key) {
				if (Array.isArray(result[key]) && Array.isArray(source[key])) {
					result[key] = result[key].concat(source[key]);
				} else if (isObject$1(result[key]) && isObject$1(source[key])) {
					result[key] = merge(result[key], source[key]);
				} else {
					result[key] = source[key];
				}
			});
			return result;
		}, {});
	};
	var resolveUrl = function resolveUrl(baseUrl, relativeUrl) {
		if (/^[a-z]+:/i.test(relativeUrl)) {
			return relativeUrl;
		}
		if (!/\/\//i.test(baseUrl)) {
			baseUrl = urlToolkit.buildAbsoluteURL(window_1.location.href, baseUrl);
		}
		return urlToolkit.buildAbsoluteURL(baseUrl, relativeUrl);
	};
	var urlTypeToSegment = function urlTypeToSegment(_ref) {
		var _ref$baseUrl = _ref.baseUrl,
			baseUrl = _ref$baseUrl === undefined ? '' : _ref$baseUrl,
			_ref$source = _ref.source,
			source = _ref$source === undefined ? '' : _ref$source,
			_ref$range = _ref.range,
			range = _ref$range === undefined ? '' : _ref$range;
		var init = {
			uri: source,
			resolvedUri: resolveUrl(baseUrl || '', source)
		};
		if (range) {
			var ranges = range.split('-');
			var startRange = parseInt(ranges[0], 10);
			var endRange = parseInt(ranges[1], 10);
			init.byterange = {
				length: endRange - startRange,
				offset: startRange
			};
		}
		return init;
	};
	var getLiveRValue = function getLiveRValue(attributes, time, duration) {
		var NOW = attributes.NOW,
			clientOffset = attributes.clientOffset,
			availabilityStartTime = attributes.availabilityStartTime,
			_attributes$timescale = attributes.timescale,
			timescale = _attributes$timescale === undefined ? 1 : _attributes$timescale,
			_attributes$start = attributes.start,
			start = _attributes$start === undefined ? 0 : _attributes$start,
			_attributes$minimumUp = attributes.minimumUpdatePeriod,
			minimumUpdatePeriod = _attributes$minimumUp === undefined ? 0 : _attributes$minimumUp;
		var now = (NOW + clientOffset) / 1000;
		var periodStartWC = availabilityStartTime + start;
		var periodEndWC = now + minimumUpdatePeriod;
		var periodDuration = periodEndWC - periodStartWC;
		return Math.ceil((periodDuration * timescale - time) / duration);
	};
	var parseByTimeline = function parseByTimeline(attributes, segmentTimeline) {
		var _attributes$type = attributes.type,
			type = _attributes$type === undefined ? 'static' : _attributes$type,
			_attributes$minimumUp2 = attributes.minimumUpdatePeriod,
			minimumUpdatePeriod = _attributes$minimumUp2 === undefined ? 0 : _attributes$minimumUp2,
			_attributes$media = attributes.media,
			media = _attributes$media === undefined ? '' : _attributes$media,
			sourceDuration = attributes.sourceDuration,
			_attributes$timescale2 = attributes.timescale,
			timescale = _attributes$timescale2 === undefined ? 1 : _attributes$timescale2,
			_attributes$startNumb = attributes.startNumber,
			startNumber = _attributes$startNumb === undefined ? 1 : _attributes$startNumb,
			timeline = attributes.periodIndex;
		var segments = [];
		var time = -1;
		for (var sIndex = 0; sIndex < segmentTimeline.length; sIndex++) {
			var S = segmentTimeline[sIndex];
			var duration = S.d;
			var repeat = S.r || 0;
			var segmentTime = S.t || 0;
			if (time < 0) {
				time = segmentTime;
			}
			if (segmentTime && segmentTime > time) {
				time = segmentTime;
			}
			var count = void 0;
			if (repeat < 0) {
				var nextS = sIndex + 1;
				if (nextS === segmentTimeline.length) {
					if (type === 'dynamic' && minimumUpdatePeriod > 0 && media.indexOf('$Number$') > 0) {
						count = getLiveRValue(attributes, time, duration);
					} else {
						count = (sourceDuration * timescale - time) / duration;
					}
				} else {
					count = (segmentTimeline[nextS].t - time) / duration;
				}
			} else {
				count = repeat + 1;
			}
			var end = startNumber + segments.length + count;
			var number = startNumber + segments.length;
			while (number < end) {
				segments.push({ number: number, duration: duration / timescale, time: time, timeline: timeline });
				time += duration;
				number++;
			}
		}
		return segments;
	};
	var range = function range(start, end) {
		var result = [];
		for (var i = start; i < end; i++) {
			result.push(i);
		}
		return result;
	};
	var flatten = function flatten(lists) {
		return lists.reduce(function (x, y) {
			return x.concat(y);
		}, []);
	};
	var from = function from(list) {
		if (!list.length) {
			return [];
		}
		var result = [];
		for (var i = 0; i < list.length; i++) {
			result.push(list[i]);
		}
		return result;
	};
	var segmentRange = {
		'static': function _static(attributes) {
			var duration = attributes.duration,
				_attributes$timescale = attributes.timescale,
				timescale = _attributes$timescale === undefined ? 1 : _attributes$timescale,
				sourceDuration = attributes.sourceDuration;
			return {
				start: 0,
				end: Math.ceil(sourceDuration / (duration / timescale))
			};
		},
		dynamic: function dynamic(attributes) {
			var NOW = attributes.NOW,
				clientOffset = attributes.clientOffset,
				availabilityStartTime = attributes.availabilityStartTime,
				_attributes$timescale2 = attributes.timescale,
				timescale = _attributes$timescale2 === undefined ? 1 : _attributes$timescale2,
				duration = attributes.duration,
				_attributes$start = attributes.start,
				start = _attributes$start === undefined ? 0 : _attributes$start,
				_attributes$minimumUp = attributes.minimumUpdatePeriod,
				minimumUpdatePeriod = _attributes$minimumUp === undefined ? 0 : _attributes$minimumUp,
				_attributes$timeShift = attributes.timeShiftBufferDepth,
				timeShiftBufferDepth = _attributes$timeShift === undefined ? Infinity : _attributes$timeShift;
			var now = (NOW + clientOffset) / 1000;
			var periodStartWC = availabilityStartTime + start;
			var periodEndWC = now + minimumUpdatePeriod;
			var periodDuration = periodEndWC - periodStartWC;
			var segmentCount = Math.ceil(periodDuration * timescale / duration);
			var availableStart = Math.floor((now - periodStartWC - timeShiftBufferDepth) * timescale / duration);
			var availableEnd = Math.floor((now - periodStartWC) * timescale / duration);
			return {
				start: Math.max(0, availableStart),
				end: Math.min(segmentCount, availableEnd)
			};
		}
	};
	var toSegments = function toSegments(attributes) {
		return function (number, index) {
			var duration = attributes.duration,
				_attributes$timescale3 = attributes.timescale,
				timescale = _attributes$timescale3 === undefined ? 1 : _attributes$timescale3,
				periodIndex = attributes.periodIndex,
				_attributes$startNumb = attributes.startNumber,
				startNumber = _attributes$startNumb === undefined ? 1 : _attributes$startNumb;
			return {
				number: startNumber + number,
				duration: duration / timescale,
				timeline: periodIndex,
				time: index * duration
			};
		};
	};
	var parseByDuration = function parseByDuration(attributes) {
		var _attributes$type = attributes.type,
			type = _attributes$type === undefined ? 'static' : _attributes$type,
			duration = attributes.duration,
			_attributes$timescale4 = attributes.timescale,
			timescale = _attributes$timescale4 === undefined ? 1 : _attributes$timescale4,
			sourceDuration = attributes.sourceDuration;
		var _segmentRange$type = segmentRange[type](attributes),
			start = _segmentRange$type.start,
			end = _segmentRange$type.end;
		var segments = range(start, end).map(toSegments(attributes));
		if (type === 'static') {
			var index = segments.length - 1;
			segments[index].duration = sourceDuration - duration / timescale * index;
		}
		return segments;
	};
	var identifierPattern = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g;
	var identifierReplacement = function identifierReplacement(values) {
		return function (match, identifier, format, width) {
			if (match === '$$') {
				return '$';
			}
			if (typeof values[identifier] === 'undefined') {
				return match;
			}
			var value = '' + values[identifier];
			if (identifier === 'RepresentationID') {
				return value;
			}
			if (!format) {
				width = 1;
			} else {
				width = parseInt(width, 10);
			}
			if (value.length >= width) {
				return value;
			}
			return '' + new Array(width - value.length + 1).join('0') + value;
		};
	};
	var constructTemplateUrl = function constructTemplateUrl(url, values) {
		return url.replace(identifierPattern, identifierReplacement(values));
	};
	var parseTemplateInfo = function parseTemplateInfo(attributes, segmentTimeline) {
		if (!attributes.duration && !segmentTimeline) {
			return [{
				number: attributes.startNumber || 1,
				duration: attributes.sourceDuration,
				time: 0,
				timeline: attributes.periodIndex
			}];
		}
		if (attributes.duration) {
			return parseByDuration(attributes);
		}
		return parseByTimeline(attributes, segmentTimeline);
	};
	var segmentsFromTemplate = function segmentsFromTemplate(attributes, segmentTimeline) {
		var templateValues = {
			RepresentationID: attributes.id,
			Bandwidth: attributes.bandwidth || 0
		};
		var _attributes$initializ = attributes.initialization,
			initialization = _attributes$initializ === undefined ? { sourceURL: '', range: '' } : _attributes$initializ;
		var mapSegment = urlTypeToSegment({
			baseUrl: attributes.baseUrl,
			source: constructTemplateUrl(initialization.sourceURL, templateValues),
			range: initialization.range
		});
		var segments = parseTemplateInfo(attributes, segmentTimeline);
		return segments.map(function (segment) {
			templateValues.Number = segment.number;
			templateValues.Time = segment.time;
			var uri = constructTemplateUrl(attributes.media || '', templateValues);
			return {
				uri: uri,
				timeline: segment.timeline,
				duration: segment.duration,
				resolvedUri: resolveUrl(attributes.baseUrl || '', uri),
				map: mapSegment,
				number: segment.number
			};
		});
	};
	var errors = {
		INVALID_NUMBER_OF_PERIOD: 'INVALID_NUMBER_OF_PERIOD',
		DASH_EMPTY_MANIFEST: 'DASH_EMPTY_MANIFEST',
		DASH_INVALID_XML: 'DASH_INVALID_XML',
		NO_BASE_URL: 'NO_BASE_URL',
		MISSING_SEGMENT_INFORMATION: 'MISSING_SEGMENT_INFORMATION',
		SEGMENT_TIME_UNSPECIFIED: 'SEGMENT_TIME_UNSPECIFIED',
		UNSUPPORTED_UTC_TIMING_SCHEME: 'UNSUPPORTED_UTC_TIMING_SCHEME'
	};
	var SegmentURLToSegmentObject = function SegmentURLToSegmentObject(attributes, segmentUrl) {
		var baseUrl = attributes.baseUrl,
			_attributes$initializ = attributes.initialization,
			initialization = _attributes$initializ === undefined ? {} : _attributes$initializ;
		var initSegment = urlTypeToSegment({
			baseUrl: baseUrl,
			source: initialization.sourceURL,
			range: initialization.range
		});
		var segment = urlTypeToSegment({
			baseUrl: baseUrl,
			source: segmentUrl.media,
			range: segmentUrl.mediaRange
		});
		segment.map = initSegment;
		return segment;
	};
	var segmentsFromList = function segmentsFromList(attributes, segmentTimeline) {
		var duration = attributes.duration,
			_attributes$segmentUr = attributes.segmentUrls,
			segmentUrls = _attributes$segmentUr === undefined ? [] : _attributes$segmentUr;
		if (!duration && !segmentTimeline || duration && segmentTimeline) {
			throw new Error(errors.SEGMENT_TIME_UNSPECIFIED);
		}
		var segmentUrlMap = segmentUrls.map(function (segmentUrlObject) {
			return SegmentURLToSegmentObject(attributes, segmentUrlObject);
		});
		var segmentTimeInfo = void 0;
		if (duration) {
			segmentTimeInfo = parseByDuration(attributes);
		}
		if (segmentTimeline) {
			segmentTimeInfo = parseByTimeline(attributes, segmentTimeline);
		}
		var segments = segmentTimeInfo.map(function (segmentTime, index) {
			if (segmentUrlMap[index]) {
				var segment = segmentUrlMap[index];
				segment.timeline = segmentTime.timeline;
				segment.duration = segmentTime.duration;
				segment.number = segmentTime.number;
				return segment;
			}
		}).filter(function (segment) {
			return segment;
		});
		return segments;
	};
	var segmentsFromBase = function segmentsFromBase(attributes) {
		var baseUrl = attributes.baseUrl,
			_attributes$initializ = attributes.initialization,
			initialization = _attributes$initializ === undefined ? {} : _attributes$initializ,
			sourceDuration = attributes.sourceDuration,
			_attributes$timescale = attributes.timescale,
			timescale = _attributes$timescale === undefined ? 1 : _attributes$timescale,
			_attributes$indexRang = attributes.indexRange,
			indexRange = _attributes$indexRang === undefined ? '' : _attributes$indexRang,
			duration = attributes.duration;
		if (!baseUrl) {
			throw new Error(errors.NO_BASE_URL);
		}
		var initSegment = urlTypeToSegment({
			baseUrl: baseUrl,
			source: initialization.sourceURL,
			range: initialization.range
		});
		var segment = urlTypeToSegment({ baseUrl: baseUrl, source: baseUrl, range: indexRange });
		segment.map = initSegment;
		if (duration) {
			var segmentTimeInfo = parseByDuration(attributes);
			if (segmentTimeInfo.length) {
				segment.duration = segmentTimeInfo[0].duration;
				segment.timeline = segmentTimeInfo[0].timeline;
			}
		} else if (sourceDuration) {
			segment.duration = sourceDuration / timescale;
			segment.timeline = 0;
		}
		segment.number = 0;
		return [segment];
	};
	var generateSegments = function generateSegments(_ref) {
		var attributes = _ref.attributes,
			segmentInfo = _ref.segmentInfo;
		var segmentAttributes = void 0;
		var segmentsFn = void 0;
		if (segmentInfo.template) {
			segmentsFn = segmentsFromTemplate;
			segmentAttributes = merge(attributes, segmentInfo.template);
		} else if (segmentInfo.base) {
			segmentsFn = segmentsFromBase;
			segmentAttributes = merge(attributes, segmentInfo.base);
		} else if (segmentInfo.list) {
			segmentsFn = segmentsFromList;
			segmentAttributes = merge(attributes, segmentInfo.list);
		}
		if (!segmentsFn) {
			return { attributes: attributes };
		}
		var segments = segmentsFn(segmentAttributes, segmentInfo.timeline);
		if (segmentAttributes.duration) {
			var _segmentAttributes = segmentAttributes,
				duration = _segmentAttributes.duration,
				_segmentAttributes$ti = _segmentAttributes.timescale,
				timescale = _segmentAttributes$ti === undefined ? 1 : _segmentAttributes$ti;
			segmentAttributes.duration = duration / timescale;
		} else if (segments.length) {
			segmentAttributes.duration = segments.reduce(function (max, segment) {
				return Math.max(max, Math.ceil(segment.duration));
			}, 0);
		} else {
			segmentAttributes.duration = 0;
		}
		return {
			attributes: segmentAttributes,
			segments: segments
		};
	};
	var toPlaylists = function toPlaylists(representations) {
		return representations.map(generateSegments);
	};
	var findChildren = function findChildren(element, name) {
		return from(element.childNodes).filter(function (_ref) {
			var tagName = _ref.tagName;
			return tagName === name;
		});
	};
	var getContent = function getContent(element) {
		return element.textContent.trim();
	};
	var parseDuration = function parseDuration(str) {
		var SECONDS_IN_YEAR = 365 * 24 * 60 * 60;
		var SECONDS_IN_MONTH = 30 * 24 * 60 * 60;
		var SECONDS_IN_DAY = 24 * 60 * 60;
		var SECONDS_IN_HOUR = 60 * 60;
		var SECONDS_IN_MIN = 60;
		var durationRegex = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/;
		var match = durationRegex.exec(str);
		if (!match) {
			return 0;
		}
		var _match$slice = match.slice(1),
			year = _match$slice[0],
			month = _match$slice[1],
			day = _match$slice[2],
			hour = _match$slice[3],
			minute = _match$slice[4],
			second = _match$slice[5];
		return parseFloat(year || 0) * SECONDS_IN_YEAR + parseFloat(month || 0) * SECONDS_IN_MONTH + parseFloat(day || 0) * SECONDS_IN_DAY + parseFloat(hour || 0) * SECONDS_IN_HOUR + parseFloat(minute || 0) * SECONDS_IN_MIN + parseFloat(second || 0);
	};
	var parseDate = function parseDate(str) {
		var dateRegex = /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/;
		if (dateRegex.test(str)) {
			str += 'Z';
		}
		return Date.parse(str);
	};
	var parsers = {
		mediaPresentationDuration: function mediaPresentationDuration(value) {
			return parseDuration(value);
		},
		availabilityStartTime: function availabilityStartTime(value) {
			return parseDate(value) / 1000;
		},
		minimumUpdatePeriod: function minimumUpdatePeriod(value) {
			return parseDuration(value);
		},
		timeShiftBufferDepth: function timeShiftBufferDepth(value) {
			return parseDuration(value);
		},
		start: function start(value) {
			return parseDuration(value);
		},
		width: function width(value) {
			return parseInt(value, 10);
		},
		height: function height(value) {
			return parseInt(value, 10);
		},
		bandwidth: function bandwidth(value) {
			return parseInt(value, 10);
		},
		startNumber: function startNumber(value) {
			return parseInt(value, 10);
		},
		timescale: function timescale(value) {
			return parseInt(value, 10);
		},
		duration: function duration(value) {
			var parsedValue = parseInt(value, 10);
			if (isNaN(parsedValue)) {
				return parseDuration(value);
			}
			return parsedValue;
		},
		d: function d(value) {
			return parseInt(value, 10);
		},
		t: function t(value) {
			return parseInt(value, 10);
		},
		r: function r(value) {
			return parseInt(value, 10);
		},
		DEFAULT: function DEFAULT(value) {
			return value;
		}
	};
	var parseAttributes$1 = function parseAttributes(el) {
		if (!(el && el.attributes)) {
			return {};
		}
		return from(el.attributes).reduce(function (a, e) {
			var parseFn = parsers[e.name] || parsers.DEFAULT;
			a[e.name] = parseFn(e.value);
			return a;
		}, {});
	};
	function decodeB64ToUint8Array(b64Text) {
		var decodedString = window_1.atob(b64Text);
		var array = new Uint8Array(decodedString.length);
		for (var i = 0; i < decodedString.length; i++) {
			array[i] = decodedString.charCodeAt(i);
		}
		return array;
	}
	var keySystemsMap = {
		'urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b': 'org.w3.clearkey',
		'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed': 'com.widevine.alpha',
		'urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95': 'com.microsoft.playready',
		'urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb': 'com.adobe.primetime'
	};
	var buildBaseUrls = function buildBaseUrls(referenceUrls, baseUrlElements) {
		if (!baseUrlElements.length) {
			return referenceUrls;
		}
		return flatten(referenceUrls.map(function (reference) {
			return baseUrlElements.map(function (baseUrlElement) {
				return resolveUrl(reference, getContent(baseUrlElement));
			});
		}));
	};
	var getSegmentInformation = function getSegmentInformation(adaptationSet) {
		var segmentTemplate = findChildren(adaptationSet, 'SegmentTemplate')[0];
		var segmentList = findChildren(adaptationSet, 'SegmentList')[0];
		var segmentUrls = segmentList && findChildren(segmentList, 'SegmentURL').map(function (s) {
			return merge({ tag: 'SegmentURL' }, parseAttributes$1(s));
		});
		var segmentBase = findChildren(adaptationSet, 'SegmentBase')[0];
		var segmentTimelineParentNode = segmentList || segmentTemplate;
		var segmentTimeline = segmentTimelineParentNode && findChildren(segmentTimelineParentNode, 'SegmentTimeline')[0];
		var segmentInitializationParentNode = segmentList || segmentBase || segmentTemplate;
		var segmentInitialization = segmentInitializationParentNode && findChildren(segmentInitializationParentNode, 'Initialization')[0];
		var template = segmentTemplate && parseAttributes$1(segmentTemplate);
		if (template && segmentInitialization) {
			template.initialization = segmentInitialization && parseAttributes$1(segmentInitialization);
		} else if (template && template.initialization) {
			template.initialization = { sourceURL: template.initialization };
		}
		var segmentInfo = {
			template: template,
			timeline: segmentTimeline && findChildren(segmentTimeline, 'S').map(function (s) {
				return parseAttributes$1(s);
			}),
			list: segmentList && merge(parseAttributes$1(segmentList), {
				segmentUrls: segmentUrls,
				initialization: parseAttributes$1(segmentInitialization)
			}),
			base: segmentBase && merge(parseAttributes$1(segmentBase), {
				initialization: parseAttributes$1(segmentInitialization)
			})
		};
		Object.keys(segmentInfo).forEach(function (key) {
			if (!segmentInfo[key]) {
				delete segmentInfo[key];
			}
		});
		return segmentInfo;
	};
	var inheritBaseUrls = function inheritBaseUrls(adaptationSetAttributes, adaptationSetBaseUrls, adaptationSetSegmentInfo) {
		return function (representation) {
			var repBaseUrlElements = findChildren(representation, 'BaseURL');
			var repBaseUrls = buildBaseUrls(adaptationSetBaseUrls, repBaseUrlElements);
			var attributes = merge(adaptationSetAttributes, parseAttributes$1(representation));
			var representationSegmentInfo = getSegmentInformation(representation);
			return repBaseUrls.map(function (baseUrl) {
				return {
					segmentInfo: merge(adaptationSetSegmentInfo, representationSegmentInfo),
					attributes: merge(attributes, { baseUrl: baseUrl })
				};
			});
		};
	};
	var generateKeySystemInformation = function generateKeySystemInformation(contentProtectionNodes) {
		return contentProtectionNodes.reduce(function (acc, node) {
			var attributes = parseAttributes$1(node);
			var keySystem = keySystemsMap[attributes.schemeIdUri];
			if (keySystem) {
				acc[keySystem] = { attributes: attributes };
				var psshNode = findChildren(node, 'cenc:pssh')[0];
				if (psshNode) {
					var pssh = getContent(psshNode);
					var psshBuffer = pssh && decodeB64ToUint8Array(pssh);
					acc[keySystem].pssh = psshBuffer;
				}
			}
			return acc;
		}, {});
	};
	var toRepresentations = function toRepresentations(periodAttributes, periodBaseUrls, periodSegmentInfo) {
		return function (adaptationSet) {
			var adaptationSetAttributes = parseAttributes$1(adaptationSet);
			var adaptationSetBaseUrls = buildBaseUrls(periodBaseUrls, findChildren(adaptationSet, 'BaseURL'));
			var role = findChildren(adaptationSet, 'Role')[0];
			var roleAttributes = { role: parseAttributes$1(role) };
			var attrs = merge(periodAttributes, adaptationSetAttributes, roleAttributes);
			var contentProtection = generateKeySystemInformation(findChildren(adaptationSet, 'ContentProtection'));
			if (Object.keys(contentProtection).length) {
				attrs = merge(attrs, { contentProtection: contentProtection });
			}
			var segmentInfo = getSegmentInformation(adaptationSet);
			var representations = findChildren(adaptationSet, 'Representation');
			var adaptationSetSegmentInfo = merge(periodSegmentInfo, segmentInfo);
			return flatten(representations.map(inheritBaseUrls(attrs, adaptationSetBaseUrls, adaptationSetSegmentInfo)));
		};
	};
	var toAdaptationSets = function toAdaptationSets(mpdAttributes, mpdBaseUrls) {
		return function (period, periodIndex) {
			var periodBaseUrls = buildBaseUrls(mpdBaseUrls, findChildren(period, 'BaseURL'));
			var periodAtt = parseAttributes$1(period);
			var periodAttributes = merge(mpdAttributes, periodAtt, { periodIndex: periodIndex });
			var adaptationSets = findChildren(period, 'AdaptationSet');
			var periodSegmentInfo = getSegmentInformation(period);
			return flatten(adaptationSets.map(toRepresentations(periodAttributes, periodBaseUrls, periodSegmentInfo)));
		};
	};
	var inheritAttributes = function inheritAttributes(mpd) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var _options$manifestUri = options.manifestUri,
			manifestUri = _options$manifestUri === undefined ? '' : _options$manifestUri,
			_options$NOW = options.NOW,
			NOW = _options$NOW === undefined ? Date.now() : _options$NOW,
			_options$clientOffset = options.clientOffset,
			clientOffset = _options$clientOffset === undefined ? 0 : _options$clientOffset;
		var periods = findChildren(mpd, 'Period');
		if (periods.length !== 1) {
			throw new Error(errors.INVALID_NUMBER_OF_PERIOD);
		}
		var mpdAttributes = parseAttributes$1(mpd);
		var mpdBaseUrls = buildBaseUrls([manifestUri], findChildren(mpd, 'BaseURL'));
		mpdAttributes.sourceDuration = mpdAttributes.mediaPresentationDuration || 0;
		mpdAttributes.NOW = NOW;
		mpdAttributes.clientOffset = clientOffset;
		return flatten(periods.map(toAdaptationSets(mpdAttributes, mpdBaseUrls)));
	};
	var stringToMpdXml = function stringToMpdXml(manifestString) {
		if (manifestString === '') {
			throw new Error(errors.DASH_EMPTY_MANIFEST);
		}
		var parser = new window_1.DOMParser();
		var xml = parser.parseFromString(manifestString, 'application/xml');
		var mpd = xml && xml.documentElement.tagName === 'MPD' ? xml.documentElement : null;
		if (!mpd || mpd && mpd.getElementsByTagName('parsererror').length > 0) {
			throw new Error(errors.DASH_INVALID_XML);
		}
		return mpd;
	};
	var parseUTCTimingScheme = function parseUTCTimingScheme(mpd) {
		var UTCTimingNode = findChildren(mpd, 'UTCTiming')[0];
		if (!UTCTimingNode) {
			return null;
		}
		var attributes = parseAttributes$1(UTCTimingNode);
		switch (attributes.schemeIdUri) {
			case 'urn:mpeg:dash:utc:http-head:2014':
			case 'urn:mpeg:dash:utc:http-head:2012':
				attributes.method = 'HEAD';
				break;
			case 'urn:mpeg:dash:utc:http-xsdate:2014':
			case 'urn:mpeg:dash:utc:http-iso:2014':
			case 'urn:mpeg:dash:utc:http-xsdate:2012':
			case 'urn:mpeg:dash:utc:http-iso:2012':
				attributes.method = 'GET';
				break;
			case 'urn:mpeg:dash:utc:direct:2014':
			case 'urn:mpeg:dash:utc:direct:2012':
				attributes.method = 'DIRECT';
				attributes.value = Date.parse(attributes.value);
				break;
			case 'urn:mpeg:dash:utc:http-ntp:2014':
			case 'urn:mpeg:dash:utc:ntp:2014':
			case 'urn:mpeg:dash:utc:sntp:2014':
			default:
				throw new Error(errors.UNSUPPORTED_UTC_TIMING_SCHEME);
		}
		return attributes;
	};
	var parse = function parse(manifestString, options) {
		return toM3u8(toPlaylists(inheritAttributes(stringToMpdXml(manifestString), options)));
	};
	var parseUTCTiming = function parseUTCTiming(manifestString) {
		return parseUTCTimingScheme(stringToMpdXml(manifestString));
	};
	var toUnsigned = function toUnsigned(value) {
		return value >>> 0;
	};
	var bin = {
		toUnsigned: toUnsigned
	};
	var bin_1 = bin.toUnsigned;
	var bin$1 = Object.freeze({
		default: bin,
		__moduleExports: bin,
		toUnsigned: bin_1
	});
	var require$$0$1 = (bin$1 && bin) || bin$1;
	var toUnsigned$1 = require$$0$1.toUnsigned;
	var _findBox, parseType, timescale, startTime, getVideoTrackIds;
	_findBox = function findBox(data, path) {
		var results = [],
			i,
			size,
			type,
			end,
			subresults;
		if (!path.length) {
			return null;
		}
		for (i = 0; i < data.byteLength;) {
			size = toUnsigned$1(data[i] << 24 | data[i + 1] << 16 | data[i + 2] << 8 | data[i + 3]);
			type = parseType(data.subarray(i + 4, i + 8));
			end = size > 1 ? i + size : data.byteLength;
			if (type === path[0]) {
				if (path.length === 1) {
					results.push(data.subarray(i + 8, end));
				} else {
					subresults = _findBox(data.subarray(i + 8, end), path.slice(1));
					if (subresults.length) {
						results = results.concat(subresults);
					}
				}
			}
			i = end;
		}
		return results;
	};
	parseType = function parseType(buffer) {
		var result = '';
		result += String.fromCharCode(buffer[0]);
		result += String.fromCharCode(buffer[1]);
		result += String.fromCharCode(buffer[2]);
		result += String.fromCharCode(buffer[3]);
		return result;
	};
	timescale = function timescale(init) {
		var result = {},
			traks = _findBox(init, ['moov', 'trak']);
		return traks.reduce(function (result, trak) {
			var tkhd, version, index, id, mdhd;
			tkhd = _findBox(trak, ['tkhd'])[0];
			if (!tkhd) {
				return null;
			}
			version = tkhd[0];
			index = version === 0 ? 12 : 20;
			id = toUnsigned$1(tkhd[index] << 24 | tkhd[index + 1] << 16 | tkhd[index + 2] << 8 | tkhd[index + 3]);
			mdhd = _findBox(trak, ['mdia', 'mdhd'])[0];
			if (!mdhd) {
				return null;
			}
			version = mdhd[0];
			index = version === 0 ? 12 : 20;
			result[id] = toUnsigned$1(mdhd[index] << 24 | mdhd[index + 1] << 16 | mdhd[index + 2] << 8 | mdhd[index + 3]);
			return result;
		}, result);
	};
	startTime = function startTime(timescale, fragment) {
		var trafs, baseTimes, result;
		trafs = _findBox(fragment, ['moof', 'traf']);
		baseTimes = [].concat.apply([], trafs.map(function (traf) {
			return _findBox(traf, ['tfhd']).map(function (tfhd) {
				var id, scale, baseTime;
				id = toUnsigned$1(tfhd[4] << 24 | tfhd[5] << 16 | tfhd[6] << 8 | tfhd[7]);
				scale = timescale[id] || 90e3;
				baseTime = _findBox(traf, ['tfdt']).map(function (tfdt) {
					var version, result;
					version = tfdt[0];
					result = toUnsigned$1(tfdt[4] << 24 | tfdt[5] << 16 | tfdt[6] << 8 | tfdt[7]);
					if (version === 1) {
						result *= Math.pow(2, 32);
						result += toUnsigned$1(tfdt[8] << 24 | tfdt[9] << 16 | tfdt[10] << 8 | tfdt[11]);
					}
					return result;
				})[0];
				baseTime = baseTime || Infinity;
				return baseTime / scale;
			});
		}));
		result = Math.min.apply(null, baseTimes);
		return isFinite(result) ? result : 0;
	};
	getVideoTrackIds = function getVideoTrackIds(init) {
		var traks = _findBox(init, ['moov', 'trak']);
		var videoTrackIds = [];
		traks.forEach(function (trak) {
			var hdlrs = _findBox(trak, ['mdia', 'hdlr']);
			var tkhds = _findBox(trak, ['tkhd']);
			hdlrs.forEach(function (hdlr, index) {
				var handlerType = parseType(hdlr.subarray(8, 12));
				var tkhd = tkhds[index];
				var view;
				var version;
				var trackId;
				if (handlerType === 'vide') {
					view = new DataView(tkhd.buffer, tkhd.byteOffset, tkhd.byteLength);
					version = view.getUint8(0);
					trackId = version === 0 ? view.getUint32(12) : view.getUint32(20);
					videoTrackIds.push(trackId);
				}
			});
		});
		return videoTrackIds;
	};
	var probe = {
		findBox: _findBox,
		parseType: parseType,
		timescale: timescale,
		startTime: startTime,
		videoTrackIds: getVideoTrackIds
	};
	var UINT32_MAX = Math.pow(2, 32) - 1;
	var box, dinf, esds, ftyp, mdat, mfhd, minf, moof, moov, mvex, mvhd, trak, tkhd, mdia, mdhd, hdlr, sdtp, stbl, stsd, traf, trex, trun, types, MAJOR_BRAND, MINOR_VERSION, AVC1_BRAND, VIDEO_HDLR, AUDIO_HDLR, HDLR_TYPES, VMHD, SMHD, DREF, STCO, STSC, STSZ, STTS;
	(function () {
		var i;
		types = {
			avc1: [],
			avcC: [],
			btrt: [],
			dinf: [],
			dref: [],
			esds: [],
			ftyp: [],
			hdlr: [],
			mdat: [],
			mdhd: [],
			mdia: [],
			mfhd: [],
			minf: [],
			moof: [],
			moov: [],
			mp4a: [],
			mvex: [],
			mvhd: [],
			sdtp: [],
			smhd: [],
			stbl: [],
			stco: [],
			stsc: [],
			stsd: [],
			stsz: [],
			stts: [],
			styp: [],
			tfdt: [],
			tfhd: [],
			traf: [],
			trak: [],
			trun: [],
			trex: [],
			tkhd: [],
			vmhd: []
		};
		if (typeof Uint8Array === 'undefined') {
			return;
		}
		for (i in types) {
			if (types.hasOwnProperty(i)) {
				types[i] = [i.charCodeAt(0), i.charCodeAt(1), i.charCodeAt(2), i.charCodeAt(3)];
			}
		}
		MAJOR_BRAND = new Uint8Array(['i'.charCodeAt(0), 's'.charCodeAt(0), 'o'.charCodeAt(0), 'm'.charCodeAt(0)]);
		AVC1_BRAND = new Uint8Array(['a'.charCodeAt(0), 'v'.charCodeAt(0), 'c'.charCodeAt(0), '1'.charCodeAt(0)]);
		MINOR_VERSION = new Uint8Array([0, 0, 0, 1]);
		VIDEO_HDLR = new Uint8Array([0x00,
			0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x00,
			0x76, 0x69, 0x64, 0x65,
			0x00, 0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x00,
			0x56, 0x69, 0x64, 0x65, 0x6f, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00
		]);
		AUDIO_HDLR = new Uint8Array([0x00,
			0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x00,
			0x73, 0x6f, 0x75, 0x6e,
			0x00, 0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x00,
			0x53, 0x6f, 0x75, 0x6e, 0x64, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00
		]);
		HDLR_TYPES = {
			video: VIDEO_HDLR,
			audio: AUDIO_HDLR
		};
		DREF = new Uint8Array([0x00,
			0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x01,
			0x00, 0x00, 0x00, 0x0c,
			0x75, 0x72, 0x6c, 0x20,
			0x00,
			0x00, 0x00, 0x01
		]);
		SMHD = new Uint8Array([0x00,
			0x00, 0x00, 0x00,
			0x00, 0x00,
			0x00, 0x00
		]);
		STCO = new Uint8Array([0x00,
			0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x00
		]);
		STSC = STCO;
		STSZ = new Uint8Array([0x00,
			0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x00
		]);
		STTS = STCO;
		VMHD = new Uint8Array([0x00,
			0x00, 0x00, 0x01,
			0x00, 0x00,
			0x00, 0x00, 0x00, 0x00, 0x00, 0x00
		]);
	})();
	box = function box(type) {
		var payload = [],
			size = 0,
			i,
			result,
			view;
		for (i = 1; i < arguments.length; i++) {
			payload.push(arguments[i]);
		}
		i = payload.length;
		while (i--) {
			size += payload[i].byteLength;
		}
		result = new Uint8Array(size + 8);
		view = new DataView(result.buffer, result.byteOffset, result.byteLength);
		view.setUint32(0, result.byteLength);
		result.set(type, 4);
		for (i = 0, size = 8; i < payload.length; i++) {
			result.set(payload[i], size);
			size += payload[i].byteLength;
		}
		return result;
	};
	dinf = function dinf() {
		return box(types.dinf, box(types.dref, DREF));
	};
	esds = function esds(track) {
		return box(types.esds, new Uint8Array([0x00,
			0x00, 0x00, 0x00,
			0x03,
			0x19,
			0x00, 0x00,
			0x00,
			0x04,
			0x11,
			0x40,
			0x15,
			0x00, 0x06, 0x00,
			0x00, 0x00, 0xda, 0xc0,
			0x00, 0x00, 0xda, 0xc0,
			0x05,
			0x02,
			track.audioobjecttype << 3 | track.samplingfrequencyindex >>> 1, track.samplingfrequencyindex << 7 | track.channelcount << 3, 0x06, 0x01, 0x02
		]));
	};
	ftyp = function ftyp() {
		return box(types.ftyp, MAJOR_BRAND, MINOR_VERSION, MAJOR_BRAND, AVC1_BRAND);
	};
	hdlr = function hdlr(type) {
		return box(types.hdlr, HDLR_TYPES[type]);
	};
	mdat = function mdat(data) {
		return box(types.mdat, data);
	};
	mdhd = function mdhd(track) {
		var result = new Uint8Array([0x00,
			0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x02,
			0x00, 0x00, 0x00, 0x03,
			0x00, 0x01, 0x5f, 0x90,
			track.duration >>> 24 & 0xFF, track.duration >>> 16 & 0xFF, track.duration >>> 8 & 0xFF, track.duration & 0xFF,
			0x55, 0xc4,
			0x00, 0x00]);
		if (track.samplerate) {
			result[12] = track.samplerate >>> 24 & 0xFF;
			result[13] = track.samplerate >>> 16 & 0xFF;
			result[14] = track.samplerate >>> 8 & 0xFF;
			result[15] = track.samplerate & 0xFF;
		}
		return box(types.mdhd, result);
	};
	mdia = function mdia(track) {
		return box(types.mdia, mdhd(track), hdlr(track.type), minf(track));
	};
	mfhd = function mfhd(sequenceNumber) {
		return box(types.mfhd, new Uint8Array([0x00, 0x00, 0x00, 0x00,
			(sequenceNumber & 0xFF000000) >> 24, (sequenceNumber & 0xFF0000) >> 16, (sequenceNumber & 0xFF00) >> 8, sequenceNumber & 0xFF
		]));
	};
	minf = function minf(track) {
		return box(types.minf, track.type === 'video' ? box(types.vmhd, VMHD) : box(types.smhd, SMHD), dinf(), stbl(track));
	};
	moof = function moof(sequenceNumber, tracks) {
		var trackFragments = [],
			i = tracks.length;
		while (i--) {
			trackFragments[i] = traf(tracks[i]);
		}
		return box.apply(null, [types.moof, mfhd(sequenceNumber)].concat(trackFragments));
	};
	moov = function moov(tracks) {
		var i = tracks.length,
			boxes = [];
		while (i--) {
			boxes[i] = trak(tracks[i]);
		}
		return box.apply(null, [types.moov, mvhd(0xffffffff)].concat(boxes).concat(mvex(tracks)));
	};
	mvex = function mvex(tracks) {
		var i = tracks.length,
			boxes = [];
		while (i--) {
			boxes[i] = trex(tracks[i]);
		}
		return box.apply(null, [types.mvex].concat(boxes));
	};
	mvhd = function mvhd(duration) {
		var bytes = new Uint8Array([0x00,
			0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x01,
			0x00, 0x00, 0x00, 0x02,
			0x00, 0x01, 0x5f, 0x90,
			(duration & 0xFF000000) >> 24, (duration & 0xFF0000) >> 16, (duration & 0xFF00) >> 8, duration & 0xFF,
			0x00, 0x01, 0x00, 0x00,
			0x01, 0x00,
			0x00, 0x00,
			0x00, 0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x00,
			0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
			0xff, 0xff, 0xff, 0xff
		]);
		return box(types.mvhd, bytes);
	};
	sdtp = function sdtp(track) {
		var samples = track.samples || [],
			bytes = new Uint8Array(4 + samples.length),
			flags,
			i;
		for (i = 0; i < samples.length; i++) {
			flags = samples[i].flags;
			bytes[i + 4] = flags.dependsOn << 4 | flags.isDependedOn << 2 | flags.hasRedundancy;
		}
		return box(types.sdtp, bytes);
	};
	stbl = function stbl(track) {
		return box(types.stbl, stsd(track), box(types.stts, STTS), box(types.stsc, STSC), box(types.stsz, STSZ), box(types.stco, STCO));
	};
	(function () {
		var videoSample, audioSample;
		stsd = function stsd(track) {
			return box(types.stsd, new Uint8Array([0x00,
				0x00, 0x00, 0x00,
				0x00, 0x00, 0x00, 0x01]), track.type === 'video' ? videoSample(track) : audioSample(track));
		};
		videoSample = function videoSample(track) {
			var sps = track.sps || [],
				pps = track.pps || [],
				sequenceParameterSets = [],
				pictureParameterSets = [],
				i;
			for (i = 0; i < sps.length; i++) {
				sequenceParameterSets.push((sps[i].byteLength & 0xFF00) >>> 8);
				sequenceParameterSets.push(sps[i].byteLength & 0xFF);
				sequenceParameterSets = sequenceParameterSets.concat(Array.prototype.slice.call(sps[i]));
			}
			for (i = 0; i < pps.length; i++) {
				pictureParameterSets.push((pps[i].byteLength & 0xFF00) >>> 8);
				pictureParameterSets.push(pps[i].byteLength & 0xFF);
				pictureParameterSets = pictureParameterSets.concat(Array.prototype.slice.call(pps[i]));
			}
			return box(types.avc1, new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
				0x00, 0x01,
				0x00, 0x00,
				0x00, 0x00,
				0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
				(track.width & 0xff00) >> 8, track.width & 0xff,
				(track.height & 0xff00) >> 8, track.height & 0xff,
				0x00, 0x48, 0x00, 0x00,
				0x00, 0x48, 0x00, 0x00,
				0x00, 0x00, 0x00, 0x00,
				0x00, 0x01,
				0x13, 0x76, 0x69, 0x64, 0x65, 0x6f, 0x6a, 0x73, 0x2d, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x69, 0x62, 0x2d, 0x68, 0x6c, 0x73, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
				0x00, 0x18,
				0x11, 0x11
			]), box(types.avcC, new Uint8Array([0x01,
				track.profileIdc,
				track.profileCompatibility,
				track.levelIdc,
				0xff
			].concat([sps.length
			]).concat(sequenceParameterSets).concat([pps.length
			]).concat(pictureParameterSets))),
				box(types.btrt, new Uint8Array([0x00, 0x1c, 0x9c, 0x80,
					0x00, 0x2d, 0xc6, 0xc0,
					0x00, 0x2d, 0xc6, 0xc0]))
			);
		};
		audioSample = function audioSample(track) {
			return box(types.mp4a, new Uint8Array([
				0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
				0x00, 0x01,
				0x00, 0x00, 0x00, 0x00,
				0x00, 0x00, 0x00, 0x00,
				(track.channelcount & 0xff00) >> 8, track.channelcount & 0xff,
				(track.samplesize & 0xff00) >> 8, track.samplesize & 0xff,
				0x00, 0x00,
				0x00, 0x00,
				(track.samplerate & 0xff00) >> 8, track.samplerate & 0xff, 0x00, 0x00
			]), esds(track));
		};
	})();
	tkhd = function tkhd(track) {
		var result = new Uint8Array([0x00,
			0x00, 0x00, 0x07,
			0x00, 0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x00,
			(track.id & 0xFF000000) >> 24, (track.id & 0xFF0000) >> 16, (track.id & 0xFF00) >> 8, track.id & 0xFF,
			0x00, 0x00, 0x00, 0x00,
			(track.duration & 0xFF000000) >> 24, (track.duration & 0xFF0000) >> 16, (track.duration & 0xFF00) >> 8, track.duration & 0xFF,
			0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
			0x00, 0x00,
			0x00, 0x00,
			0x01, 0x00,
			0x00, 0x00,
			0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00,
			(track.width & 0xFF00) >> 8, track.width & 0xFF, 0x00, 0x00,
			(track.height & 0xFF00) >> 8, track.height & 0xFF, 0x00, 0x00
		]);
		return box(types.tkhd, result);
	};
	traf = function traf(track) {
		var trackFragmentHeader, trackFragmentDecodeTime, trackFragmentRun, sampleDependencyTable, dataOffset, upperWordBaseMediaDecodeTime, lowerWordBaseMediaDecodeTime;
		trackFragmentHeader = box(types.tfhd, new Uint8Array([0x00,
			0x00, 0x00, 0x3a,
			(track.id & 0xFF000000) >> 24, (track.id & 0xFF0000) >> 16, (track.id & 0xFF00) >> 8, track.id & 0xFF,
			0x00, 0x00, 0x00, 0x01,
			0x00, 0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x00
		]));
		upperWordBaseMediaDecodeTime = Math.floor(track.baseMediaDecodeTime / (UINT32_MAX + 1));
		lowerWordBaseMediaDecodeTime = Math.floor(track.baseMediaDecodeTime % (UINT32_MAX + 1));
		trackFragmentDecodeTime = box(types.tfdt, new Uint8Array([0x01,
			0x00, 0x00, 0x00,
			upperWordBaseMediaDecodeTime >>> 24 & 0xFF, upperWordBaseMediaDecodeTime >>> 16 & 0xFF, upperWordBaseMediaDecodeTime >>> 8 & 0xFF, upperWordBaseMediaDecodeTime & 0xFF, lowerWordBaseMediaDecodeTime >>> 24 & 0xFF, lowerWordBaseMediaDecodeTime >>> 16 & 0xFF, lowerWordBaseMediaDecodeTime >>> 8 & 0xFF, lowerWordBaseMediaDecodeTime & 0xFF]));
		dataOffset = 32 +
			20 +
			8 +
			16 +
			8 +
			8;
		if (track.type === 'audio') {
			trackFragmentRun = trun(track, dataOffset);
			return box(types.traf, trackFragmentHeader, trackFragmentDecodeTime, trackFragmentRun);
		}
		sampleDependencyTable = sdtp(track);
		trackFragmentRun = trun(track, sampleDependencyTable.length + dataOffset);
		return box(types.traf, trackFragmentHeader, trackFragmentDecodeTime, trackFragmentRun, sampleDependencyTable);
	};
	trak = function trak(track) {
		track.duration = track.duration || 0xffffffff;
		return box(types.trak, tkhd(track), mdia(track));
	};
	trex = function trex(track) {
		var result = new Uint8Array([0x00,
			0x00, 0x00, 0x00,
			(track.id & 0xFF000000) >> 24, (track.id & 0xFF0000) >> 16, (track.id & 0xFF00) >> 8, track.id & 0xFF,
			0x00, 0x00, 0x00, 0x01,
			0x00, 0x00, 0x00, 0x00,
			0x00, 0x00, 0x00, 0x00,
			0x00, 0x01, 0x00, 0x01
		]);
		if (track.type !== 'video') {
			result[result.length - 1] = 0x00;
		}
		return box(types.trex, result);
	};
	(function () {
		var audioTrun, videoTrun, trunHeader;
		trunHeader = function trunHeader(samples, offset) {
			var durationPresent = 0,
				sizePresent = 0,
				flagsPresent = 0,
				compositionTimeOffset = 0;
			if (samples.length) {
				if (samples[0].duration !== undefined) {
					durationPresent = 0x1;
				}
				if (samples[0].size !== undefined) {
					sizePresent = 0x2;
				}
				if (samples[0].flags !== undefined) {
					flagsPresent = 0x4;
				}
				if (samples[0].compositionTimeOffset !== undefined) {
					compositionTimeOffset = 0x8;
				}
			}
			return [0x00,
				0x00, durationPresent | sizePresent | flagsPresent | compositionTimeOffset, 0x01,
				(samples.length & 0xFF000000) >>> 24, (samples.length & 0xFF0000) >>> 16, (samples.length & 0xFF00) >>> 8, samples.length & 0xFF,
				(offset & 0xFF000000) >>> 24, (offset & 0xFF0000) >>> 16, (offset & 0xFF00) >>> 8, offset & 0xFF
			];
		};
		videoTrun = function videoTrun(track, offset) {
			var bytes, samples, sample, i;
			samples = track.samples || [];
			offset += 8 + 12 + 16 * samples.length;
			bytes = trunHeader(samples, offset);
			for (i = 0; i < samples.length; i++) {
				sample = samples[i];
				bytes = bytes.concat([(sample.duration & 0xFF000000) >>> 24, (sample.duration & 0xFF0000) >>> 16, (sample.duration & 0xFF00) >>> 8, sample.duration & 0xFF,
				(sample.size & 0xFF000000) >>> 24, (sample.size & 0xFF0000) >>> 16, (sample.size & 0xFF00) >>> 8, sample.size & 0xFF,
				sample.flags.isLeading << 2 | sample.flags.dependsOn, sample.flags.isDependedOn << 6 | sample.flags.hasRedundancy << 4 | sample.flags.paddingValue << 1 | sample.flags.isNonSyncSample, sample.flags.degradationPriority & 0xF0 << 8, sample.flags.degradationPriority & 0x0F,
				(sample.compositionTimeOffset & 0xFF000000) >>> 24, (sample.compositionTimeOffset & 0xFF0000) >>> 16, (sample.compositionTimeOffset & 0xFF00) >>> 8, sample.compositionTimeOffset & 0xFF
				]);
			}
			return box(types.trun, new Uint8Array(bytes));
		};
		audioTrun = function audioTrun(track, offset) {
			var bytes, samples, sample, i;
			samples = track.samples || [];
			offset += 8 + 12 + 8 * samples.length;
			bytes = trunHeader(samples, offset);
			for (i = 0; i < samples.length; i++) {
				sample = samples[i];
				bytes = bytes.concat([(sample.duration & 0xFF000000) >>> 24, (sample.duration & 0xFF0000) >>> 16, (sample.duration & 0xFF00) >>> 8, sample.duration & 0xFF,
				(sample.size & 0xFF000000) >>> 24, (sample.size & 0xFF0000) >>> 16, (sample.size & 0xFF00) >>> 8, sample.size & 0xFF]);
			}
			return box(types.trun, new Uint8Array(bytes));
		};
		trun = function trun(track, offset) {
			if (track.type === 'audio') {
				return audioTrun(track, offset);
			}
			return videoTrun(track, offset);
		};
	})();
	var mp4Generator = {
		ftyp: ftyp,
		mdat: mdat,
		moof: moof,
		moov: moov,
		initSegment: function initSegment(tracks) {
			var fileType = ftyp(),
				movie = moov(tracks),
				result;
			result = new Uint8Array(fileType.byteLength + movie.byteLength);
			result.set(fileType);
			result.set(movie, fileType.byteLength);
			return result;
		}
	};
	var mp4Generator_1 = mp4Generator.ftyp;
	var mp4Generator_2 = mp4Generator.mdat;
	var mp4Generator_3 = mp4Generator.moof;
	var mp4Generator_4 = mp4Generator.moov;
	var mp4Generator_5 = mp4Generator.initSegment;
	var mp4Generator$1 = Object.freeze({
		default: mp4Generator,
		__moduleExports: mp4Generator,
		ftyp: mp4Generator_1,
		mdat: mp4Generator_2,
		moof: mp4Generator_3,
		moov: mp4Generator_4,
		initSegment: mp4Generator_5
	});
	var Stream$1 = function Stream() {
		this.init = function () {
			var listeners = {};
			this.on = function (type, listener) {
				if (!listeners[type]) {
					listeners[type] = [];
				}
				listeners[type] = listeners[type].concat(listener);
			};
			this.off = function (type, listener) {
				var index;
				if (!listeners[type]) {
					return false;
				}
				index = listeners[type].indexOf(listener);
				listeners[type] = listeners[type].slice();
				listeners[type].splice(index, 1);
				return index > -1;
			};
			this.trigger = function (type) {
				var callbacks, i, length, args;
				callbacks = listeners[type];
				if (!callbacks) {
					return;
				}
				if (arguments.length === 2) {
					length = callbacks.length;
					for (i = 0; i < length; ++i) {
						callbacks[i].call(this, arguments[1]);
					}
				} else {
					args = [];
					i = arguments.length;
					for (i = 1; i < arguments.length; ++i) {
						args.push(arguments[i]);
					}
					length = callbacks.length;
					for (i = 0; i < length; ++i) {
						callbacks[i].apply(this, args);
					}
				}
			};
			this.dispose = function () {
				listeners = {};
			};
		};
	};
	Stream$1.prototype.pipe = function (destination) {
		this.on('data', function (data) {
			destination.push(data);
		});
		this.on('done', function (flushSource) {
			destination.flush(flushSource);
		});
		return destination;
	};
	Stream$1.prototype.push = function (data) {
		this.trigger('data', data);
	};
	Stream$1.prototype.flush = function (flushSource) {
		this.trigger('done', flushSource);
	};
	var stream = Stream$1;
	var stream$1 = Object.freeze({
		default: stream,
		__moduleExports: stream
	});
	var groupNalsIntoFrames = function groupNalsIntoFrames(nalUnits) {
		var i,
			currentNal,
			currentFrame = [],
			frames = [];
		currentFrame.byteLength = 0;
		for (i = 0; i < nalUnits.length; i++) {
			currentNal = nalUnits[i];
			if (currentNal.nalUnitType === 'access_unit_delimiter_rbsp') {
				if (currentFrame.length) {
					currentFrame.duration = currentNal.dts - currentFrame.dts;
					frames.push(currentFrame);
				}
				currentFrame = [currentNal];
				currentFrame.byteLength = currentNal.data.byteLength;
				currentFrame.pts = currentNal.pts;
				currentFrame.dts = currentNal.dts;
			} else {
				if (currentNal.nalUnitType === 'slice_layer_without_partitioning_rbsp_idr') {
					currentFrame.keyFrame = true;
				}
				currentFrame.duration = currentNal.dts - currentFrame.dts;
				currentFrame.byteLength += currentNal.data.byteLength;
				currentFrame.push(currentNal);
			}
		}
		if (frames.length && (!currentFrame.duration || currentFrame.duration <= 0)) {
			currentFrame.duration = frames[frames.length - 1].duration;
		}
		frames.push(currentFrame);
		return frames;
	};
	var groupFramesIntoGops = function groupFramesIntoGops(frames) {
		var i,
			currentFrame,
			currentGop = [],
			gops = [];
		currentGop.byteLength = 0;
		currentGop.nalCount = 0;
		currentGop.duration = 0;
		currentGop.pts = frames[0].pts;
		currentGop.dts = frames[0].dts;
		gops.byteLength = 0;
		gops.nalCount = 0;
		gops.duration = 0;
		gops.pts = frames[0].pts;
		gops.dts = frames[0].dts;
		for (i = 0; i < frames.length; i++) {
			currentFrame = frames[i];
			if (currentFrame.keyFrame) {
				if (currentGop.length) {
					gops.push(currentGop);
					gops.byteLength += currentGop.byteLength;
					gops.nalCount += currentGop.nalCount;
					gops.duration += currentGop.duration;
				}
				currentGop = [currentFrame];
				currentGop.nalCount = currentFrame.length;
				currentGop.byteLength = currentFrame.byteLength;
				currentGop.pts = currentFrame.pts;
				currentGop.dts = currentFrame.dts;
				currentGop.duration = currentFrame.duration;
			} else {
				currentGop.duration += currentFrame.duration;
				currentGop.nalCount += currentFrame.length;
				currentGop.byteLength += currentFrame.byteLength;
				currentGop.push(currentFrame);
			}
		}
		if (gops.length && currentGop.duration <= 0) {
			currentGop.duration = gops[gops.length - 1].duration;
		}
		gops.byteLength += currentGop.byteLength;
		gops.nalCount += currentGop.nalCount;
		gops.duration += currentGop.duration;
		gops.push(currentGop);
		return gops;
	};
	var extendFirstKeyFrame = function extendFirstKeyFrame(gops) {
		var currentGop;
		if (!gops[0][0].keyFrame && gops.length > 1) {
			currentGop = gops.shift();
			gops.byteLength -= currentGop.byteLength;
			gops.nalCount -= currentGop.nalCount;
			gops[0][0].dts = currentGop.dts;
			gops[0][0].pts = currentGop.pts;
			gops[0][0].duration += currentGop.duration;
		}
		return gops;
	};
	var createDefaultSample = function createDefaultSample() {
		return {
			size: 0,
			flags: {
				isLeading: 0,
				dependsOn: 1,
				isDependedOn: 0,
				hasRedundancy: 0,
				degradationPriority: 0,
				isNonSyncSample: 1
			}
		};
	};
	var sampleForFrame = function sampleForFrame(frame, dataOffset) {
		var sample = createDefaultSample();
		sample.dataOffset = dataOffset;
		sample.compositionTimeOffset = frame.pts - frame.dts;
		sample.duration = frame.duration;
		sample.size = 4 * frame.length;
		sample.size += frame.byteLength;
		if (frame.keyFrame) {
			sample.flags.dependsOn = 2;
			sample.flags.isNonSyncSample = 0;
		}
		return sample;
	};
	var generateSampleTable = function generateSampleTable(gops, baseDataOffset) {
		var h,
			i,
			sample,
			currentGop,
			currentFrame,
			dataOffset = baseDataOffset || 0,
			samples = [];
		for (h = 0; h < gops.length; h++) {
			currentGop = gops[h];
			for (i = 0; i < currentGop.length; i++) {
				currentFrame = currentGop[i];
				sample = sampleForFrame(currentFrame, dataOffset);
				dataOffset += sample.size;
				samples.push(sample);
			}
		}
		return samples;
	};
	var concatenateNalData = function concatenateNalData(gops) {
		var h,
			i,
			j,
			currentGop,
			currentFrame,
			currentNal,
			dataOffset = 0,
			nalsByteLength = gops.byteLength,
			numberOfNals = gops.nalCount,
			totalByteLength = nalsByteLength + 4 * numberOfNals,
			data = new Uint8Array(totalByteLength),
			view = new DataView(data.buffer);
		for (h = 0; h < gops.length; h++) {
			currentGop = gops[h];
			for (i = 0; i < currentGop.length; i++) {
				currentFrame = currentGop[i];
				for (j = 0; j < currentFrame.length; j++) {
					currentNal = currentFrame[j];
					view.setUint32(dataOffset, currentNal.data.byteLength);
					dataOffset += 4;
					data.set(currentNal.data, dataOffset);
					dataOffset += currentNal.data.byteLength;
				}
			}
		}
		return data;
	};
	var frameUtils = {
		groupNalsIntoFrames: groupNalsIntoFrames,
		groupFramesIntoGops: groupFramesIntoGops,
		extendFirstKeyFrame: extendFirstKeyFrame,
		generateSampleTable: generateSampleTable,
		concatenateNalData: concatenateNalData
	};
	var frameUtils_1 = frameUtils.groupNalsIntoFrames;
	var frameUtils_2 = frameUtils.groupFramesIntoGops;
	var frameUtils_3 = frameUtils.extendFirstKeyFrame;
	var frameUtils_4 = frameUtils.generateSampleTable;
	var frameUtils_5 = frameUtils.concatenateNalData;
	var frameUtils$1 = Object.freeze({
		default: frameUtils,
		__moduleExports: frameUtils,
		groupNalsIntoFrames: frameUtils_1,
		groupFramesIntoGops: frameUtils_2,
		extendFirstKeyFrame: frameUtils_3,
		generateSampleTable: frameUtils_4,
		concatenateNalData: frameUtils_5
	});
	var ONE_SECOND_IN_TS = 90000;
	var collectDtsInfo = function collectDtsInfo(track, data) {
		if (typeof data.pts === 'number') {
			if (track.timelineStartInfo.pts === undefined) {
				track.timelineStartInfo.pts = data.pts;
			}
			if (track.minSegmentPts === undefined) {
				track.minSegmentPts = data.pts;
			} else {
				track.minSegmentPts = Math.min(track.minSegmentPts, data.pts);
			}
			if (track.maxSegmentPts === undefined) {
				track.maxSegmentPts = data.pts;
			} else {
				track.maxSegmentPts = Math.max(track.maxSegmentPts, data.pts);
			}
		}
		if (typeof data.dts === 'number') {
			if (track.timelineStartInfo.dts === undefined) {
				track.timelineStartInfo.dts = data.dts;
			}
			if (track.minSegmentDts === undefined) {
				track.minSegmentDts = data.dts;
			} else {
				track.minSegmentDts = Math.min(track.minSegmentDts, data.dts);
			}
			if (track.maxSegmentDts === undefined) {
				track.maxSegmentDts = data.dts;
			} else {
				track.maxSegmentDts = Math.max(track.maxSegmentDts, data.dts);
			}
		}
	};
	var clearDtsInfo = function clearDtsInfo(track) {
		delete track.minSegmentDts;
		delete track.maxSegmentDts;
		delete track.minSegmentPts;
		delete track.maxSegmentPts;
	};
	var calculateTrackBaseMediaDecodeTime = function calculateTrackBaseMediaDecodeTime(track, keepOriginalTimestamps) {
		var baseMediaDecodeTime,
			scale,
			minSegmentDts = track.minSegmentDts;
		if (!keepOriginalTimestamps) {
			minSegmentDts -= track.timelineStartInfo.dts;
		}
		baseMediaDecodeTime = track.timelineStartInfo.baseMediaDecodeTime;
		baseMediaDecodeTime += minSegmentDts;
		baseMediaDecodeTime = Math.max(0, baseMediaDecodeTime);
		if (track.type === 'audio') {
			scale = track.samplerate / ONE_SECOND_IN_TS;
			baseMediaDecodeTime *= scale;
			baseMediaDecodeTime = Math.floor(baseMediaDecodeTime);
		}
		return baseMediaDecodeTime;
	};
	var trackDecodeInfo = {
		clearDtsInfo: clearDtsInfo,
		calculateTrackBaseMediaDecodeTime: calculateTrackBaseMediaDecodeTime,
		collectDtsInfo: collectDtsInfo
	};
	var trackDecodeInfo_1 = trackDecodeInfo.clearDtsInfo;
	var trackDecodeInfo_2 = trackDecodeInfo.calculateTrackBaseMediaDecodeTime;
	var trackDecodeInfo_3 = trackDecodeInfo.collectDtsInfo;
	var trackDecodeInfo$1 = Object.freeze({
		default: trackDecodeInfo,
		__moduleExports: trackDecodeInfo,
		clearDtsInfo: trackDecodeInfo_1,
		calculateTrackBaseMediaDecodeTime: trackDecodeInfo_2,
		collectDtsInfo: trackDecodeInfo_3
	});
	var USER_DATA_REGISTERED_ITU_T_T35 = 4,
		RBSP_TRAILING_BITS = 128;
	var parseSei = function parseSei(bytes) {
		var i = 0,
			result = {
				payloadType: -1,
				payloadSize: 0
			},
			payloadType = 0,
			payloadSize = 0;
		while (i < bytes.byteLength) {
			if (bytes[i] === RBSP_TRAILING_BITS) {
				break;
			}
			while (bytes[i] === 0xFF) {
				payloadType += 255;
				i++;
			}
			payloadType += bytes[i++];
			while (bytes[i] === 0xFF) {
				payloadSize += 255;
				i++;
			}
			payloadSize += bytes[i++];
			if (!result.payload && payloadType === USER_DATA_REGISTERED_ITU_T_T35) {
				result.payloadType = payloadType;
				result.payloadSize = payloadSize;
				result.payload = bytes.subarray(i, i + payloadSize);
				break;
			}
			i += payloadSize;
			payloadType = 0;
			payloadSize = 0;
		}
		return result;
	};
	var parseUserData = function parseUserData(sei) {
		if (sei.payload[0] !== 181) {
			return null;
		}
		if ((sei.payload[1] << 8 | sei.payload[2]) !== 49) {
			return null;
		}
		if (String.fromCharCode(sei.payload[3], sei.payload[4], sei.payload[5], sei.payload[6]) !== 'GA94') {
			return null;
		}
		if (sei.payload[7] !== 0x03) {
			return null;
		}
		return sei.payload.subarray(8, sei.payload.length - 1);
	};
	var parseCaptionPackets = function parseCaptionPackets(pts, userData) {
		var results = [],
			i,
			count,
			offset,
			data;
		if (!(userData[0] & 0x40)) {
			return results;
		}
		count = userData[0] & 0x1f;
		for (i = 0; i < count; i++) {
			offset = i * 3;
			data = {
				type: userData[offset + 2] & 0x03,
				pts: pts
			};
			if (userData[offset + 2] & 0x04) {
				data.ccData = userData[offset + 3] << 8 | userData[offset + 4];
				results.push(data);
			}
		}
		return results;
	};
	var discardEmulationPreventionBytes = function discardEmulationPreventionBytes(data) {
		var length = data.byteLength,
			emulationPreventionBytesPositions = [],
			i = 1,
			newLength,
			newData;
		while (i < length - 2) {
			if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0x03) {
				emulationPreventionBytesPositions.push(i + 2);
				i += 2;
			} else {
				i++;
			}
		}
		if (emulationPreventionBytesPositions.length === 0) {
			return data;
		}
		newLength = length - emulationPreventionBytesPositions.length;
		newData = new Uint8Array(newLength);
		var sourceIndex = 0;
		for (i = 0; i < newLength; sourceIndex++, i++) {
			if (sourceIndex === emulationPreventionBytesPositions[0]) {
				sourceIndex++;
				emulationPreventionBytesPositions.shift();
			}
			newData[i] = data[sourceIndex];
		}
		return newData;
	};
	var captionPacketParser = {
		parseSei: parseSei,
		parseUserData: parseUserData,
		parseCaptionPackets: parseCaptionPackets,
		discardEmulationPreventionBytes: discardEmulationPreventionBytes,
		USER_DATA_REGISTERED_ITU_T_T35: USER_DATA_REGISTERED_ITU_T_T35
	};
	var captionPacketParser_1 = captionPacketParser.parseSei;
	var captionPacketParser_2 = captionPacketParser.parseUserData;
	var captionPacketParser_3 = captionPacketParser.parseCaptionPackets;
	var captionPacketParser_4 = captionPacketParser.discardEmulationPreventionBytes;
	var captionPacketParser_5 = captionPacketParser.USER_DATA_REGISTERED_ITU_T_T35;
	var captionPacketParser$1 = Object.freeze({
		default: captionPacketParser,
		__moduleExports: captionPacketParser,
		parseSei: captionPacketParser_1,
		parseUserData: captionPacketParser_2,
		parseCaptionPackets: captionPacketParser_3,
		discardEmulationPreventionBytes: captionPacketParser_4,
		USER_DATA_REGISTERED_ITU_T_T35: captionPacketParser_5
	});
	var Stream$2 = (stream$1 && stream) || stream$1;
	var cea708Parser = (captionPacketParser$1 && captionPacketParser) || captionPacketParser$1;
	var CaptionStream = function CaptionStream() {
		CaptionStream.prototype.init.call(this);
		this.captionPackets_ = [];
		this.ccStreams_ = [new Cea608Stream(0, 0),
		new Cea608Stream(0, 1),
		new Cea608Stream(1, 0),
		new Cea608Stream(1, 1)
		];
		this.reset();
		this.ccStreams_.forEach(function (cc) {
			cc.on('data', this.trigger.bind(this, 'data'));
			cc.on('done', this.trigger.bind(this, 'done'));
		}, this);
	};
	CaptionStream.prototype = new Stream$2();
	CaptionStream.prototype.push = function (event) {
		var sei, userData, newCaptionPackets;
		if (event.nalUnitType !== 'sei_rbsp') {
			return;
		}
		sei = cea708Parser.parseSei(event.escapedRBSP);
		if (sei.payloadType !== cea708Parser.USER_DATA_REGISTERED_ITU_T_T35) {
			return;
		}
		userData = cea708Parser.parseUserData(sei);
		if (!userData) {
			return;
		}
		if (event.dts < this.latestDts_) {
			this.ignoreNextEqualDts_ = true;
			return;
		} else if (event.dts === this.latestDts_ && this.ignoreNextEqualDts_) {
			this.numSameDts_--;
			if (!this.numSameDts_) {
				this.ignoreNextEqualDts_ = false;
			}
			return;
		}
		newCaptionPackets = cea708Parser.parseCaptionPackets(event.pts, userData);
		this.captionPackets_ = this.captionPackets_.concat(newCaptionPackets);
		if (this.latestDts_ !== event.dts) {
			this.numSameDts_ = 0;
		}
		this.numSameDts_++;
		this.latestDts_ = event.dts;
	};
	CaptionStream.prototype.flush = function () {
		if (!this.captionPackets_.length) {
			this.ccStreams_.forEach(function (cc) {
				cc.flush();
			}, this);
			return;
		}
		this.captionPackets_.forEach(function (elem, idx) {
			elem.presortIndex = idx;
		});
		this.captionPackets_.sort(function (a, b) {
			if (a.pts === b.pts) {
				return a.presortIndex - b.presortIndex;
			}
			return a.pts - b.pts;
		});
		this.captionPackets_.forEach(function (packet) {
			if (packet.type < 2) {
				this.dispatchCea608Packet(packet);
			}
		}, this);
		this.captionPackets_.length = 0;
		this.ccStreams_.forEach(function (cc) {
			cc.flush();
		}, this);
		return;
	};
	CaptionStream.prototype.reset = function () {
		this.latestDts_ = null;
		this.ignoreNextEqualDts_ = false;
		this.numSameDts_ = 0;
		this.activeCea608Channel_ = [null, null];
		this.ccStreams_.forEach(function (ccStream) {
			ccStream.reset();
		});
	};
	CaptionStream.prototype.dispatchCea608Packet = function (packet) {
		if (this.setsChannel1Active(packet)) {
			this.activeCea608Channel_[packet.type] = 0;
		} else if (this.setsChannel2Active(packet)) {
			this.activeCea608Channel_[packet.type] = 1;
		}
		if (this.activeCea608Channel_[packet.type] === null) {
			return;
		}
		this.ccStreams_[(packet.type << 1) + this.activeCea608Channel_[packet.type]].push(packet);
	};
	CaptionStream.prototype.setsChannel1Active = function (packet) {
		return (packet.ccData & 0x7800) === 0x1000;
	};
	CaptionStream.prototype.setsChannel2Active = function (packet) {
		return (packet.ccData & 0x7800) === 0x1800;
	};
	var CHARACTER_TRANSLATION = {
		0x2a: 0xe1,
		0x5c: 0xe9,
		0x5e: 0xed,
		0x5f: 0xf3,
		0x60: 0xfa,
		0x7b: 0xe7,
		0x7c: 0xf7,
		0x7d: 0xd1,
		0x7e: 0xf1,
		0x7f: 0x2588,
		0x0130: 0xae,
		0x0131: 0xb0,
		0x0132: 0xbd,
		0x0133: 0xbf,
		0x0134: 0x2122,
		0x0135: 0xa2,
		0x0136: 0xa3,
		0x0137: 0x266a,
		0x0138: 0xe0,
		0x0139: 0xa0,
		0x013a: 0xe8,
		0x013b: 0xe2,
		0x013c: 0xea,
		0x013d: 0xee,
		0x013e: 0xf4,
		0x013f: 0xfb,
		0x0220: 0xc1,
		0x0221: 0xc9,
		0x0222: 0xd3,
		0x0223: 0xda,
		0x0224: 0xdc,
		0x0225: 0xfc,
		0x0226: 0x2018,
		0x0227: 0xa1,
		0x0228: 0x2a,
		0x0229: 0x27,
		0x022a: 0x2014,
		0x022b: 0xa9,
		0x022c: 0x2120,
		0x022d: 0x2022,
		0x022e: 0x201c,
		0x022f: 0x201d,
		0x0230: 0xc0,
		0x0231: 0xc2,
		0x0232: 0xc7,
		0x0233: 0xc8,
		0x0234: 0xca,
		0x0235: 0xcb,
		0x0236: 0xeb,
		0x0237: 0xce,
		0x0238: 0xcf,
		0x0239: 0xef,
		0x023a: 0xd4,
		0x023b: 0xd9,
		0x023c: 0xf9,
		0x023d: 0xdb,
		0x023e: 0xab,
		0x023f: 0xbb,
		0x0320: 0xc3,
		0x0321: 0xe3,
		0x0322: 0xcd,
		0x0323: 0xcc,
		0x0324: 0xec,
		0x0325: 0xd2,
		0x0326: 0xf2,
		0x0327: 0xd5,
		0x0328: 0xf5,
		0x0329: 0x7b,
		0x032a: 0x7d,
		0x032b: 0x5c,
		0x032c: 0x5e,
		0x032d: 0x5f,
		0x032e: 0x7c,
		0x032f: 0x7e,
		0x0330: 0xc4,
		0x0331: 0xe4,
		0x0332: 0xd6,
		0x0333: 0xf6,
		0x0334: 0xdf,
		0x0335: 0xa5,
		0x0336: 0xa4,
		0x0337: 0x2502,
		0x0338: 0xc5,
		0x0339: 0xe5,
		0x033a: 0xd8,
		0x033b: 0xf8,
		0x033c: 0x250c,
		0x033d: 0x2510,
		0x033e: 0x2514,
		0x033f: 0x2518
	};
	var getCharFromCode = function getCharFromCode(code) {
		if (code === null) {
			return '';
		}
		code = CHARACTER_TRANSLATION[code] || code;
		return String.fromCharCode(code);
	};
	var BOTTOM_ROW = 14;
	var ROWS = [0x1100, 0x1120, 0x1200, 0x1220, 0x1500, 0x1520, 0x1600, 0x1620, 0x1700, 0x1720, 0x1000, 0x1300, 0x1320, 0x1400, 0x1420];
	var createDisplayBuffer = function createDisplayBuffer() {
		var result = [],
			i = BOTTOM_ROW + 1;
		while (i--) {
			result.push('');
		}
		return result;
	};
	var Cea608Stream = function Cea608Stream(field, dataChannel) {
		Cea608Stream.prototype.init.call(this);
		this.field_ = field || 0;
		this.dataChannel_ = dataChannel || 0;
		this.name_ = 'CC' + ((this.field_ << 1 | this.dataChannel_) + 1);
		this.setConstants();
		this.reset();
		this.push = function (packet) {
			var data, swap, char0, char1, text;
			data = packet.ccData & 0x7f7f;
			if (data === this.lastControlCode_) {
				this.lastControlCode_ = null;
				return;
			}
			if ((data & 0xf000) === 0x1000) {
				this.lastControlCode_ = data;
			} else if (data !== this.PADDING_) {
				this.lastControlCode_ = null;
			}
			char0 = data >>> 8;
			char1 = data & 0xff;
			if (data === this.PADDING_) {
				return;
			} else if (data === this.RESUME_CAPTION_LOADING_) {
				this.mode_ = 'popOn';
			} else if (data === this.END_OF_CAPTION_) {
				this.mode_ = 'popOn';
				this.clearFormatting(packet.pts);
				this.flushDisplayed(packet.pts);
				swap = this.displayed_;
				this.displayed_ = this.nonDisplayed_;
				this.nonDisplayed_ = swap;
				this.startPts_ = packet.pts;
			} else if (data === this.ROLL_UP_2_ROWS_) {
				this.rollUpRows_ = 2;
				this.setRollUp(packet.pts);
			} else if (data === this.ROLL_UP_3_ROWS_) {
				this.rollUpRows_ = 3;
				this.setRollUp(packet.pts);
			} else if (data === this.ROLL_UP_4_ROWS_) {
				this.rollUpRows_ = 4;
				this.setRollUp(packet.pts);
			} else if (data === this.CARRIAGE_RETURN_) {
				this.clearFormatting(packet.pts);
				this.flushDisplayed(packet.pts);
				this.shiftRowsUp_();
				this.startPts_ = packet.pts;
			} else if (data === this.BACKSPACE_) {
				if (this.mode_ === 'popOn') {
					this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1);
				} else {
					this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
				}
			} else if (data === this.ERASE_DISPLAYED_MEMORY_) {
				this.flushDisplayed(packet.pts);
				this.displayed_ = createDisplayBuffer();
			} else if (data === this.ERASE_NON_DISPLAYED_MEMORY_) {
				this.nonDisplayed_ = createDisplayBuffer();
			} else if (data === this.RESUME_DIRECT_CAPTIONING_) {
				if (this.mode_ !== 'paintOn') {
					this.flushDisplayed(packet.pts);
					this.displayed_ = createDisplayBuffer();
				}
				this.mode_ = 'paintOn';
				this.startPts_ = packet.pts;
			} else if (this.isSpecialCharacter(char0, char1)) {
				char0 = (char0 & 0x03) << 8;
				text = getCharFromCode(char0 | char1);
				this[this.mode_](packet.pts, text);
				this.column_++;
			} else if (this.isExtCharacter(char0, char1)) {
				if (this.mode_ === 'popOn') {
					this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1);
				} else {
					this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
				}
				char0 = (char0 & 0x03) << 8;
				text = getCharFromCode(char0 | char1);
				this[this.mode_](packet.pts, text);
				this.column_++;
			} else if (this.isMidRowCode(char0, char1)) {
				this.clearFormatting(packet.pts);
				this[this.mode_](packet.pts, ' ');
				this.column_++;
				if ((char1 & 0xe) === 0xe) {
					this.addFormatting(packet.pts, ['i']);
				}
				if ((char1 & 0x1) === 0x1) {
					this.addFormatting(packet.pts, ['u']);
				}
			} else if (this.isOffsetControlCode(char0, char1)) {
				this.column_ += char1 & 0x03;
			} else if (this.isPAC(char0, char1)) {
				var row = ROWS.indexOf(data & 0x1f20);
				if (this.mode_ === 'rollUp') {
					this.setRollUp(packet.pts, row);
				}
				if (row !== this.row_) {
					this.clearFormatting(packet.pts);
					this.row_ = row;
				}
				if (char1 & 0x1 && this.formatting_.indexOf('u') === -1) {
					this.addFormatting(packet.pts, ['u']);
				}
				if ((data & 0x10) === 0x10) {
					this.column_ = ((data & 0xe) >> 1) * 4;
				}
				if (this.isColorPAC(char1)) {
					if ((char1 & 0xe) === 0xe) {
						this.addFormatting(packet.pts, ['i']);
					}
				}
			} else if (this.isNormalChar(char0)) {
				if (char1 === 0x00) {
					char1 = null;
				}
				text = getCharFromCode(char0);
				text += getCharFromCode(char1);
				this[this.mode_](packet.pts, text);
				this.column_ += text.length;
			}
		};
	};
	Cea608Stream.prototype = new Stream$2();
	Cea608Stream.prototype.flushDisplayed = function (pts) {
		var content = this.displayed_
			.map(function (row) {
				return row.trim();
			})
			.join('\n')
			.replace(/^\n+|\n+$/g, '');
		if (content.length) {
			this.trigger('data', {
				startPts: this.startPts_,
				endPts: pts,
				text: content,
				stream: this.name_
			});
		}
	};
	Cea608Stream.prototype.reset = function () {
		this.mode_ = 'popOn';
		this.topRow_ = 0;
		this.startPts_ = 0;
		this.displayed_ = createDisplayBuffer();
		this.nonDisplayed_ = createDisplayBuffer();
		this.lastControlCode_ = null;
		this.column_ = 0;
		this.row_ = BOTTOM_ROW;
		this.rollUpRows_ = 2;
		this.formatting_ = [];
	};
	Cea608Stream.prototype.setConstants = function () {
		if (this.dataChannel_ === 0) {
			this.BASE_ = 0x10;
			this.EXT_ = 0x11;
			this.CONTROL_ = (0x14 | this.field_) << 8;
			this.OFFSET_ = 0x17;
		} else if (this.dataChannel_ === 1) {
			this.BASE_ = 0x18;
			this.EXT_ = 0x19;
			this.CONTROL_ = (0x1c | this.field_) << 8;
			this.OFFSET_ = 0x1f;
		}
		this.PADDING_ = 0x0000;
		this.RESUME_CAPTION_LOADING_ = this.CONTROL_ | 0x20;
		this.END_OF_CAPTION_ = this.CONTROL_ | 0x2f;
		this.ROLL_UP_2_ROWS_ = this.CONTROL_ | 0x25;
		this.ROLL_UP_3_ROWS_ = this.CONTROL_ | 0x26;
		this.ROLL_UP_4_ROWS_ = this.CONTROL_ | 0x27;
		this.CARRIAGE_RETURN_ = this.CONTROL_ | 0x2d;
		this.RESUME_DIRECT_CAPTIONING_ = this.CONTROL_ | 0x29;
		this.BACKSPACE_ = this.CONTROL_ | 0x21;
		this.ERASE_DISPLAYED_MEMORY_ = this.CONTROL_ | 0x2c;
		this.ERASE_NON_DISPLAYED_MEMORY_ = this.CONTROL_ | 0x2e;
	};
	Cea608Stream.prototype.isSpecialCharacter = function (char0, char1) {
		return char0 === this.EXT_ && char1 >= 0x30 && char1 <= 0x3f;
	};
	Cea608Stream.prototype.isExtCharacter = function (char0, char1) {
		return (char0 === this.EXT_ + 1 || char0 === this.EXT_ + 2) && char1 >= 0x20 && char1 <= 0x3f;
	};
	Cea608Stream.prototype.isMidRowCode = function (char0, char1) {
		return char0 === this.EXT_ && char1 >= 0x20 && char1 <= 0x2f;
	};
	Cea608Stream.prototype.isOffsetControlCode = function (char0, char1) {
		return char0 === this.OFFSET_ && char1 >= 0x21 && char1 <= 0x23;
	};
	Cea608Stream.prototype.isPAC = function (char0, char1) {
		return char0 >= this.BASE_ && char0 < this.BASE_ + 8 && char1 >= 0x40 && char1 <= 0x7f;
	};
	Cea608Stream.prototype.isColorPAC = function (char1) {
		return char1 >= 0x40 && char1 <= 0x4f || char1 >= 0x60 && char1 <= 0x7f;
	};
	Cea608Stream.prototype.isNormalChar = function (char) {
		return char >= 0x20 && char <= 0x7f;
	};
	Cea608Stream.prototype.setRollUp = function (pts, newBaseRow) {
		if (this.mode_ !== 'rollUp') {
			this.row_ = BOTTOM_ROW;
			this.mode_ = 'rollUp';
			this.flushDisplayed(pts);
			this.nonDisplayed_ = createDisplayBuffer();
			this.displayed_ = createDisplayBuffer();
		}
		if (newBaseRow !== undefined && newBaseRow !== this.row_) {
			for (var i = 0; i < this.rollUpRows_; i++) {
				this.displayed_[newBaseRow - i] = this.displayed_[this.row_ - i];
				this.displayed_[this.row_ - i] = '';
			}
		}
		if (newBaseRow === undefined) {
			newBaseRow = this.row_;
		}
		this.topRow_ = newBaseRow - this.rollUpRows_ + 1;
	};
	Cea608Stream.prototype.addFormatting = function (pts, format) {
		this.formatting_ = this.formatting_.concat(format);
		var text = format.reduce(function (text, format) {
			return text + '<' + format + '>';
		}, '');
		this[this.mode_](pts, text);
	};
	Cea608Stream.prototype.clearFormatting = function (pts) {
		if (!this.formatting_.length) {
			return;
		}
		var text = this.formatting_.reverse().reduce(function (text, format) {
			return text + '</' + format + '>';
		}, '');
		this.formatting_ = [];
		this[this.mode_](pts, text);
	};
	Cea608Stream.prototype.popOn = function (pts, text) {
		var baseRow = this.nonDisplayed_[this.row_];
		baseRow += text;
		this.nonDisplayed_[this.row_] = baseRow;
	};
	Cea608Stream.prototype.rollUp = function (pts, text) {
		var baseRow = this.displayed_[this.row_];
		baseRow += text;
		this.displayed_[this.row_] = baseRow;
	};
	Cea608Stream.prototype.shiftRowsUp_ = function () {
		var i;
		for (i = 0; i < this.topRow_; i++) {
			this.displayed_[i] = '';
		}
		for (i = this.row_ + 1; i < BOTTOM_ROW + 1; i++) {
			this.displayed_[i] = '';
		}
		for (i = this.topRow_; i < this.row_; i++) {
			this.displayed_[i] = this.displayed_[i + 1];
		}
		this.displayed_[this.row_] = '';
	};
	Cea608Stream.prototype.paintOn = function (pts, text) {
		var baseRow = this.displayed_[this.row_];
		baseRow += text;
		this.displayed_[this.row_] = baseRow;
	};
	var captionStream = {
		CaptionStream: CaptionStream,
		Cea608Stream: Cea608Stream
	};
	var captionStream_1 = captionStream.CaptionStream;
	var captionStream_2 = captionStream.Cea608Stream;
	var captionStream$1 = Object.freeze({
		default: captionStream,
		__moduleExports: captionStream,
		CaptionStream: captionStream_1,
		Cea608Stream: captionStream_2
	});
	var streamTypes = {
		H264_STREAM_TYPE: 0x1B,
		ADTS_STREAM_TYPE: 0x0F,
		METADATA_STREAM_TYPE: 0x15
	};
	var streamTypes_1 = streamTypes.H264_STREAM_TYPE;
	var streamTypes_2 = streamTypes.ADTS_STREAM_TYPE;
	var streamTypes_3 = streamTypes.METADATA_STREAM_TYPE;
	var streamTypes$1 = Object.freeze({
		default: streamTypes,
		__moduleExports: streamTypes,
		H264_STREAM_TYPE: streamTypes_1,
		ADTS_STREAM_TYPE: streamTypes_2,
		METADATA_STREAM_TYPE: streamTypes_3
	});
	var MAX_TS = 8589934592;
	var RO_THRESH = 4294967296;
	var handleRollover = function handleRollover(value, reference) {
		var direction = 1;
		if (value > reference) {
			direction = -1;
		}
		while (Math.abs(reference - value) > RO_THRESH) {
			value += direction * MAX_TS;
		}
		return value;
	};
	var TimestampRolloverStream = function TimestampRolloverStream(type) {
		var lastDTS, referenceDTS;
		TimestampRolloverStream.prototype.init.call(this);
		this.type_ = type;
		this.push = function (data) {
			if (data.type !== this.type_) {
				return;
			}
			if (referenceDTS === undefined) {
				referenceDTS = data.dts;
			}
			data.dts = handleRollover(data.dts, referenceDTS);
			data.pts = handleRollover(data.pts, referenceDTS);
			lastDTS = data.dts;
			this.trigger('data', data);
		};
		this.flush = function () {
			referenceDTS = lastDTS;
			this.trigger('done');
		};
		this.discontinuity = function () {
			referenceDTS = void 0;
			lastDTS = void 0;
		};
	};
	TimestampRolloverStream.prototype = new Stream$2();
	var timestampRolloverStream = {
		TimestampRolloverStream: TimestampRolloverStream,
		handleRollover: handleRollover
	};
	var timestampRolloverStream_1 = timestampRolloverStream.TimestampRolloverStream;
	var timestampRolloverStream_2 = timestampRolloverStream.handleRollover;
	var timestampRolloverStream$1 = Object.freeze({
		default: timestampRolloverStream,
		__moduleExports: timestampRolloverStream,
		TimestampRolloverStream: timestampRolloverStream_1,
		handleRollover: timestampRolloverStream_2
	});
	var StreamTypes = (streamTypes$1 && streamTypes) || streamTypes$1;
	var percentEncode = function percentEncode(bytes, start, end) {
		var i,
			result = '';
		for (i = start; i < end; i++) {
			result += '%' + ('00' + bytes[i].toString(16)).slice(-2);
		}
		return result;
	},
		parseUtf8 = function parseUtf8(bytes, start, end) {
			return decodeURIComponent(percentEncode(bytes, start, end));
		},
		parseIso88591 = function parseIso88591(bytes, start, end) {
			return unescape(percentEncode(bytes, start, end));
		},
		parseSyncSafeInteger = function parseSyncSafeInteger(data) {
			return data[0] << 21 | data[1] << 14 | data[2] << 7 | data[3];
		},
		tagParsers = {
			TXXX: function TXXX(tag) {
				var i;
				if (tag.data[0] !== 3) {
					return;
				}
				for (i = 1; i < tag.data.length; i++) {
					if (tag.data[i] === 0) {
						tag.description = parseUtf8(tag.data, 1, i);
						tag.value = parseUtf8(tag.data, i + 1, tag.data.length).replace(/\0*$/, '');
						break;
					}
				}
				tag.data = tag.value;
			},
			WXXX: function WXXX(tag) {
				var i;
				if (tag.data[0] !== 3) {
					return;
				}
				for (i = 1; i < tag.data.length; i++) {
					if (tag.data[i] === 0) {
						tag.description = parseUtf8(tag.data, 1, i);
						tag.url = parseUtf8(tag.data, i + 1, tag.data.length);
						break;
					}
				}
			},
			PRIV: function PRIV(tag) {
				var i;
				for (i = 0; i < tag.data.length; i++) {
					if (tag.data[i] === 0) {
						tag.owner = parseIso88591(tag.data, 0, i);
						break;
					}
				}
				tag.privateData = tag.data.subarray(i + 1);
				tag.data = tag.privateData;
			}
		},
		_MetadataStream;
	_MetadataStream = function MetadataStream(options) {
		var settings = {
			debug: !!(options && options.debug),
			descriptor: options && options.descriptor
		},
			tagSize = 0,
			buffer = [],
			bufferSize = 0,
			i;
		_MetadataStream.prototype.init.call(this);
		this.dispatchType = StreamTypes.METADATA_STREAM_TYPE.toString(16);
		if (settings.descriptor) {
			for (i = 0; i < settings.descriptor.length; i++) {
				this.dispatchType += ('00' + settings.descriptor[i].toString(16)).slice(-2);
			}
		}
		this.push = function (chunk) {
			var tag, frameStart, frameSize, frame, i, frameHeader;
			if (chunk.type !== 'timed-metadata') {
				return;
			}
			if (chunk.dataAlignmentIndicator) {
				bufferSize = 0;
				buffer.length = 0;
			}
			if (buffer.length === 0 && (chunk.data.length < 10 || chunk.data[0] !== 'I'.charCodeAt(0) || chunk.data[1] !== 'D'.charCodeAt(0) || chunk.data[2] !== '3'.charCodeAt(0))) {
				if (settings.debug) {
					console.log('Skipping unrecognized metadata packet');
				}
				return;
			}
			buffer.push(chunk);
			bufferSize += chunk.data.byteLength;
			if (buffer.length === 1) {
				tagSize = parseSyncSafeInteger(chunk.data.subarray(6, 10));
				tagSize += 10;
			}
			if (bufferSize < tagSize) {
				return;
			}
			tag = {
				data: new Uint8Array(tagSize),
				frames: [],
				pts: buffer[0].pts,
				dts: buffer[0].dts
			};
			for (i = 0; i < tagSize;) {
				tag.data.set(buffer[0].data.subarray(0, tagSize - i), i);
				i += buffer[0].data.byteLength;
				bufferSize -= buffer[0].data.byteLength;
				buffer.shift();
			}
			frameStart = 10;
			if (tag.data[5] & 0x40) {
				frameStart += 4;
				frameStart += parseSyncSafeInteger(tag.data.subarray(10, 14));
				tagSize -= parseSyncSafeInteger(tag.data.subarray(16, 20));
			}
			do {
				frameSize = parseSyncSafeInteger(tag.data.subarray(frameStart + 4, frameStart + 8));
				if (frameSize < 1) {
					return console.log('Malformed ID3 frame encountered. Skipping metadata parsing.');
				}
				frameHeader = String.fromCharCode(tag.data[frameStart], tag.data[frameStart + 1], tag.data[frameStart + 2], tag.data[frameStart + 3]);
				frame = {
					id: frameHeader,
					data: tag.data.subarray(frameStart + 10, frameStart + frameSize + 10)
				};
				frame.key = frame.id;
				if (tagParsers[frame.id]) {
					tagParsers[frame.id](frame);
					if (frame.owner === 'com.apple.streaming.transportStreamTimestamp') {
						var d = frame.data,
							size = (d[3] & 0x01) << 30 | d[4] << 22 | d[5] << 14 | d[6] << 6 | d[7] >>> 2;
						size *= 4;
						size += d[7] & 0x03;
						frame.timeStamp = size;
						if (tag.pts === undefined && tag.dts === undefined) {
							tag.pts = frame.timeStamp;
							tag.dts = frame.timeStamp;
						}
						this.trigger('timestamp', frame);
					}
				}
				tag.frames.push(frame);
				frameStart += 10;
				frameStart += frameSize;
			} while (frameStart < tagSize);
			this.trigger('data', tag);
		};
	};
	_MetadataStream.prototype = new Stream$2();
	var metadataStream = _MetadataStream;
	var metadataStream$1 = Object.freeze({
		default: metadataStream,
		__moduleExports: metadataStream
	});
	var CaptionStream$1 = (captionStream$1 && captionStream) || captionStream$1;
	var require$$0$2 = (timestampRolloverStream$1 && timestampRolloverStream) || timestampRolloverStream$1;
	var require$$1$1 = (metadataStream$1 && metadataStream) || metadataStream$1;
	var TimestampRolloverStream$1 = require$$0$2.TimestampRolloverStream;
	var _TransportPacketStream, _TransportParseStream, _ElementaryStream;
	var MP2T_PACKET_LENGTH = 188,
		SYNC_BYTE = 0x47;
	_TransportPacketStream = function TransportPacketStream() {
		var buffer = new Uint8Array(MP2T_PACKET_LENGTH),
			bytesInBuffer = 0;
		_TransportPacketStream.prototype.init.call(this);
		this.push = function (bytes) {
			var startIndex = 0,
				endIndex = MP2T_PACKET_LENGTH,
				everything;
			if (bytesInBuffer) {
				everything = new Uint8Array(bytes.byteLength + bytesInBuffer);
				everything.set(buffer.subarray(0, bytesInBuffer));
				everything.set(bytes, bytesInBuffer);
				bytesInBuffer = 0;
			} else {
				everything = bytes;
			}
			while (endIndex < everything.byteLength) {
				if (everything[startIndex] === SYNC_BYTE && everything[endIndex] === SYNC_BYTE) {
					this.trigger('data', everything.subarray(startIndex, endIndex));
					startIndex += MP2T_PACKET_LENGTH;
					endIndex += MP2T_PACKET_LENGTH;
					continue;
				}
				startIndex++;
				endIndex++;
			}
			if (startIndex < everything.byteLength) {
				buffer.set(everything.subarray(startIndex), 0);
				bytesInBuffer = everything.byteLength - startIndex;
			}
		};
		this.flush = function () {
			if (bytesInBuffer === MP2T_PACKET_LENGTH && buffer[0] === SYNC_BYTE) {
				this.trigger('data', buffer);
				bytesInBuffer = 0;
			}
			this.trigger('done');
		};
	};
	_TransportPacketStream.prototype = new Stream$2();
	_TransportParseStream = function TransportParseStream() {
		var parsePsi, parsePat, parsePmt, self;
		_TransportParseStream.prototype.init.call(this);
		self = this;
		this.packetsWaitingForPmt = [];
		this.programMapTable = undefined;
		parsePsi = function parsePsi(payload, psi) {
			var offset = 0;
			if (psi.payloadUnitStartIndicator) {
				offset += payload[offset] + 1;
			}
			if (psi.type === 'pat') {
				parsePat(payload.subarray(offset), psi);
			} else {
				parsePmt(payload.subarray(offset), psi);
			}
		};
		parsePat = function parsePat(payload, pat) {
			pat.section_number = payload[7];
			pat.last_section_number = payload[8];
			self.pmtPid = (payload[10] & 0x1F) << 8 | payload[11];
			pat.pmtPid = self.pmtPid;
		};
		parsePmt = function parsePmt(payload, pmt) {
			var sectionLength, tableEnd, programInfoLength, offset;
			if (!(payload[5] & 0x01)) {
				return;
			}
			self.programMapTable = {
				video: null,
				audio: null,
				'timed-metadata': {}
			};
			sectionLength = (payload[1] & 0x0f) << 8 | payload[2];
			tableEnd = 3 + sectionLength - 4;
			programInfoLength = (payload[10] & 0x0f) << 8 | payload[11];
			offset = 12 + programInfoLength;
			while (offset < tableEnd) {
				var streamType = payload[offset];
				var pid = (payload[offset + 1] & 0x1F) << 8 | payload[offset + 2];
				if (streamType === StreamTypes.H264_STREAM_TYPE && self.programMapTable.video === null) {
					self.programMapTable.video = pid;
				} else if (streamType === StreamTypes.ADTS_STREAM_TYPE && self.programMapTable.audio === null) {
					self.programMapTable.audio = pid;
				} else if (streamType === StreamTypes.METADATA_STREAM_TYPE) {
					self.programMapTable['timed-metadata'][pid] = streamType;
				}
				offset += ((payload[offset + 3] & 0x0F) << 8 | payload[offset + 4]) + 5;
			}
			pmt.programMapTable = self.programMapTable;
		};
		this.push = function (packet) {
			var result = {},
				offset = 4;
			result.payloadUnitStartIndicator = !!(packet[1] & 0x40);
			result.pid = packet[1] & 0x1f;
			result.pid <<= 8;
			result.pid |= packet[2];
			if ((packet[3] & 0x30) >>> 4 > 0x01) {
				offset += packet[offset] + 1;
			}
			if (result.pid === 0) {
				result.type = 'pat';
				parsePsi(packet.subarray(offset), result);
				this.trigger('data', result);
			} else if (result.pid === this.pmtPid) {
				result.type = 'pmt';
				parsePsi(packet.subarray(offset), result);
				this.trigger('data', result);
				while (this.packetsWaitingForPmt.length) {
					this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
				}
			} else if (this.programMapTable === undefined) {
				this.packetsWaitingForPmt.push([packet, offset, result]);
			} else {
				this.processPes_(packet, offset, result);
			}
		};
		this.processPes_ = function (packet, offset, result) {
			if (result.pid === this.programMapTable.video) {
				result.streamType = StreamTypes.H264_STREAM_TYPE;
			} else if (result.pid === this.programMapTable.audio) {
				result.streamType = StreamTypes.ADTS_STREAM_TYPE;
			} else {
				result.streamType = this.programMapTable['timed-metadata'][result.pid];
			}
			result.type = 'pes';
			result.data = packet.subarray(offset);
			this.trigger('data', result);
		};
	};
	_TransportParseStream.prototype = new Stream$2();
	_TransportParseStream.STREAM_TYPES = {
		h264: 0x1b,
		adts: 0x0f
	};
	_ElementaryStream = function ElementaryStream() {
		var self = this,
			video = {
				data: [],
				size: 0
			},
			audio = {
				data: [],
				size: 0
			},
			timedMetadata = {
				data: [],
				size: 0
			},
			parsePes = function parsePes(payload, pes) {
				var ptsDtsFlags;
				pes.packetLength = 6 + (payload[4] << 8 | payload[5]);
				pes.dataAlignmentIndicator = (payload[6] & 0x04) !== 0;
				ptsDtsFlags = payload[7];
				if (ptsDtsFlags & 0xC0) {
					pes.pts = (payload[9] & 0x0E) << 27 | (payload[10] & 0xFF) << 20 | (payload[11] & 0xFE) << 12 | (payload[12] & 0xFF) << 5 | (payload[13] & 0xFE) >>> 3;
					pes.pts *= 4;
					pes.pts += (payload[13] & 0x06) >>> 1;
					pes.dts = pes.pts;
					if (ptsDtsFlags & 0x40) {
						pes.dts = (payload[14] & 0x0E) << 27 | (payload[15] & 0xFF) << 20 | (payload[16] & 0xFE) << 12 | (payload[17] & 0xFF) << 5 | (payload[18] & 0xFE) >>> 3;
						pes.dts *= 4;
						pes.dts += (payload[18] & 0x06) >>> 1;
					}
				}
				pes.data = payload.subarray(9 + payload[8]);
			},
			flushStream = function flushStream(stream, type, forceFlush) {
				var packetData = new Uint8Array(stream.size),
					event = {
						type: type
					},
					i = 0,
					offset = 0,
					packetFlushable = false,
					fragment;
				if (!stream.data.length || stream.size < 9) {
					return;
				}
				event.trackId = stream.data[0].pid;
				for (i = 0; i < stream.data.length; i++) {
					fragment = stream.data[i];
					packetData.set(fragment.data, offset);
					offset += fragment.data.byteLength;
				}
				parsePes(packetData, event);
				packetFlushable = type === 'video' || event.packetLength <= stream.size;
				if (forceFlush || packetFlushable) {
					stream.size = 0;
					stream.data.length = 0;
				}
				if (packetFlushable) {
					self.trigger('data', event);
				}
			};
		_ElementaryStream.prototype.init.call(this);
		this.push = function (data) {
			({
				pat: function pat() {
				},
				pes: function pes() {
					var stream, streamType;
					switch (data.streamType) {
						case StreamTypes.H264_STREAM_TYPE:
						case StreamTypes.H264_STREAM_TYPE:
							stream = video;
							streamType = 'video';
							break;
						case StreamTypes.ADTS_STREAM_TYPE:
							stream = audio;
							streamType = 'audio';
							break;
						case StreamTypes.METADATA_STREAM_TYPE:
							stream = timedMetadata;
							streamType = 'timed-metadata';
							break;
						default:
							return;
					}
					if (data.payloadUnitStartIndicator) {
						flushStream(stream, streamType, true);
					}
					stream.data.push(data);
					stream.size += data.data.byteLength;
				},
				pmt: function pmt() {
					var event = {
						type: 'metadata',
						tracks: []
					},
						programMapTable = data.programMapTable;
					if (programMapTable.video !== null) {
						event.tracks.push({
							timelineStartInfo: {
								baseMediaDecodeTime: 0
							},
							id: +programMapTable.video,
							codec: 'avc',
							type: 'video'
						});
					}
					if (programMapTable.audio !== null) {
						event.tracks.push({
							timelineStartInfo: {
								baseMediaDecodeTime: 0
							},
							id: +programMapTable.audio,
							codec: 'adts',
							type: 'audio'
						});
					}
					self.trigger('data', event);
				}
			})[data.type]();
		};
		this.flush = function () {
			flushStream(video, 'video');
			flushStream(audio, 'audio');
			flushStream(timedMetadata, 'timed-metadata');
			this.trigger('done');
		};
	};
	_ElementaryStream.prototype = new Stream$2();
	var m2ts = {
		PAT_PID: 0x0000,
		MP2T_PACKET_LENGTH: MP2T_PACKET_LENGTH,
		TransportPacketStream: _TransportPacketStream,
		TransportParseStream: _TransportParseStream,
		ElementaryStream: _ElementaryStream,
		TimestampRolloverStream: TimestampRolloverStream$1,
		CaptionStream: CaptionStream$1.CaptionStream,
		Cea608Stream: CaptionStream$1.Cea608Stream,
		MetadataStream: require$$1$1
	};
	for (var type$1 in StreamTypes) {
		if (StreamTypes.hasOwnProperty(type$1)) {
			m2ts[type$1] = StreamTypes[type$1];
		}
	}
	var m2ts_1 = m2ts;
	var m2ts$1 = Object.freeze({
		default: m2ts_1,
		__moduleExports: m2ts_1
	});
	var _AdtsStream;
	var ADTS_SAMPLING_FREQUENCIES = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
	_AdtsStream = function AdtsStream() {
		var buffer;
		_AdtsStream.prototype.init.call(this);
		this.push = function (packet) {
			var i = 0,
				frameNum = 0,
				frameLength,
				protectionSkipBytes,
				frameEnd,
				oldBuffer,
				sampleCount,
				adtsFrameDuration;
			if (packet.type !== 'audio') {
				return;
			}
			if (buffer) {
				oldBuffer = buffer;
				buffer = new Uint8Array(oldBuffer.byteLength + packet.data.byteLength);
				buffer.set(oldBuffer);
				buffer.set(packet.data, oldBuffer.byteLength);
			} else {
				buffer = packet.data;
			}
			while (i + 5 < buffer.length) {
				if (buffer[i] !== 0xFF || (buffer[i + 1] & 0xF6) !== 0xF0) {
					i++;
					continue;
				}
				protectionSkipBytes = (~buffer[i + 1] & 0x01) * 2;
				frameLength = (buffer[i + 3] & 0x03) << 11 | buffer[i + 4] << 3 | (buffer[i + 5] & 0xe0) >> 5;
				sampleCount = ((buffer[i + 6] & 0x03) + 1) * 1024;
				adtsFrameDuration = sampleCount * 90000 / ADTS_SAMPLING_FREQUENCIES[(buffer[i + 2] & 0x3c) >>> 2];
				frameEnd = i + frameLength;
				if (buffer.byteLength < frameEnd) {
					return;
				}
				this.trigger('data', {
					pts: packet.pts + frameNum * adtsFrameDuration,
					dts: packet.dts + frameNum * adtsFrameDuration,
					sampleCount: sampleCount,
					audioobjecttype: (buffer[i + 2] >>> 6 & 0x03) + 1,
					channelcount: (buffer[i + 2] & 1) << 2 | (buffer[i + 3] & 0xc0) >>> 6,
					samplerate: ADTS_SAMPLING_FREQUENCIES[(buffer[i + 2] & 0x3c) >>> 2],
					samplingfrequencyindex: (buffer[i + 2] & 0x3c) >>> 2,
					samplesize: 16,
					data: buffer.subarray(i + 7 + protectionSkipBytes, frameEnd)
				});
				if (buffer.byteLength === frameEnd) {
					buffer = undefined;
					return;
				}
				frameNum++;
				buffer = buffer.subarray(frameEnd);
			}
		};
		this.flush = function () {
			this.trigger('done');
		};
	};
	_AdtsStream.prototype = new Stream$2();
	var adts = _AdtsStream;
	var adts$1 = Object.freeze({
		default: adts,
		__moduleExports: adts
	});
	var ExpGolomb;
	ExpGolomb = function ExpGolomb(workingData) {
		var
			workingBytesAvailable = workingData.byteLength,
			workingWord = 0,
			workingBitsAvailable = 0;
		this.length = function () {
			return 8 * workingBytesAvailable;
		};
		this.bitsAvailable = function () {
			return 8 * workingBytesAvailable + workingBitsAvailable;
		};
		this.loadWord = function () {
			var position = workingData.byteLength - workingBytesAvailable,
				workingBytes = new Uint8Array(4),
				availableBytes = Math.min(4, workingBytesAvailable);
			if (availableBytes === 0) {
				throw new Error('no bytes available');
			}
			workingBytes.set(workingData.subarray(position, position + availableBytes));
			workingWord = new DataView(workingBytes.buffer).getUint32(0);
			workingBitsAvailable = availableBytes * 8;
			workingBytesAvailable -= availableBytes;
		};
		this.skipBits = function (count) {
			var skipBytes;
			if (workingBitsAvailable > count) {
				workingWord <<= count;
				workingBitsAvailable -= count;
			} else {
				count -= workingBitsAvailable;
				skipBytes = Math.floor(count / 8);
				count -= skipBytes * 8;
				workingBytesAvailable -= skipBytes;
				this.loadWord();
				workingWord <<= count;
				workingBitsAvailable -= count;
			}
		};
		this.readBits = function (size) {
			var bits = Math.min(workingBitsAvailable, size),
				valu = workingWord >>> 32 - bits;
			workingBitsAvailable -= bits;
			if (workingBitsAvailable > 0) {
				workingWord <<= bits;
			} else if (workingBytesAvailable > 0) {
				this.loadWord();
			}
			bits = size - bits;
			if (bits > 0) {
				return valu << bits | this.readBits(bits);
			}
			return valu;
		};
		this.skipLeadingZeros = function () {
			var leadingZeroCount;
			for (leadingZeroCount = 0; leadingZeroCount < workingBitsAvailable; ++leadingZeroCount) {
				if ((workingWord & 0x80000000 >>> leadingZeroCount) !== 0) {
					workingWord <<= leadingZeroCount;
					workingBitsAvailable -= leadingZeroCount;
					return leadingZeroCount;
				}
			}
			this.loadWord();
			return leadingZeroCount + this.skipLeadingZeros();
		};
		this.skipUnsignedExpGolomb = function () {
			this.skipBits(1 + this.skipLeadingZeros());
		};
		this.skipExpGolomb = function () {
			this.skipBits(1 + this.skipLeadingZeros());
		};
		this.readUnsignedExpGolomb = function () {
			var clz = this.skipLeadingZeros();
			return this.readBits(clz + 1) - 1;
		};
		this.readExpGolomb = function () {
			var valu = this.readUnsignedExpGolomb();
			if (0x01 & valu) {
				return 1 + valu >>> 1;
			}
			return -1 * (valu >>> 1);
		};
		this.readBoolean = function () {
			return this.readBits(1) === 1;
		};
		this.readUnsignedByte = function () {
			return this.readBits(8);
		};
		this.loadWord();
	};
	var expGolomb = ExpGolomb;
	var expGolomb$1 = Object.freeze({
		default: expGolomb,
		__moduleExports: expGolomb
	});
	var ExpGolomb$1 = (expGolomb$1 && expGolomb) || expGolomb$1;
	var _H264Stream, _NalByteStream;
	var PROFILES_WITH_OPTIONAL_SPS_DATA;
	_NalByteStream = function NalByteStream() {
		var syncPoint = 0,
			i,
			buffer;
		_NalByteStream.prototype.init.call(this);
		this.push = function (data) {
			var swapBuffer;
			if (!buffer) {
				buffer = data.data;
			} else {
				swapBuffer = new Uint8Array(buffer.byteLength + data.data.byteLength);
				swapBuffer.set(buffer);
				swapBuffer.set(data.data, buffer.byteLength);
				buffer = swapBuffer;
			}
			for (; syncPoint < buffer.byteLength - 3; syncPoint++) {
				if (buffer[syncPoint + 2] === 1) {
					i = syncPoint + 5;
					break;
				}
			}
			while (i < buffer.byteLength) {
				switch (buffer[i]) {
					case 0:
						if (buffer[i - 1] !== 0) {
							i += 2;
							break;
						} else if (buffer[i - 2] !== 0) {
							i++;
							break;
						}
						if (syncPoint + 3 !== i - 2) {
							this.trigger('data', buffer.subarray(syncPoint + 3, i - 2));
						}
						do {
							i++;
						} while (buffer[i] !== 1 && i < buffer.length);
						syncPoint = i - 2;
						i += 3;
						break;
					case 1:
						if (buffer[i - 1] !== 0 || buffer[i - 2] !== 0) {
							i += 3;
							break;
						}
						this.trigger('data', buffer.subarray(syncPoint + 3, i - 2));
						syncPoint = i - 2;
						i += 3;
						break;
					default:
						i += 3;
						break;
				}
			}
			buffer = buffer.subarray(syncPoint);
			i -= syncPoint;
			syncPoint = 0;
		};
		this.flush = function () {
			if (buffer && buffer.byteLength > 3) {
				this.trigger('data', buffer.subarray(syncPoint + 3));
			}
			buffer = null;
			syncPoint = 0;
			this.trigger('done');
		};
	};
	_NalByteStream.prototype = new Stream$2();
	PROFILES_WITH_OPTIONAL_SPS_DATA = {
		100: true,
		110: true,
		122: true,
		244: true,
		44: true,
		83: true,
		86: true,
		118: true,
		128: true,
		138: true,
		139: true,
		134: true
	};
	_H264Stream = function H264Stream() {
		var nalByteStream = new _NalByteStream(),
			self,
			trackId,
			currentPts,
			currentDts,
			discardEmulationPreventionBytes,
			readSequenceParameterSet,
			skipScalingList;
		_H264Stream.prototype.init.call(this);
		self = this;
		this.push = function (packet) {
			if (packet.type !== 'video') {
				return;
			}
			trackId = packet.trackId;
			currentPts = packet.pts;
			currentDts = packet.dts;
			nalByteStream.push(packet);
		};
		nalByteStream.on('data', function (data) {
			var event = {
				trackId: trackId,
				pts: currentPts,
				dts: currentDts,
				data: data
			};
			switch (data[0] & 0x1f) {
				case 0x05:
					event.nalUnitType = 'slice_layer_without_partitioning_rbsp_idr';
					break;
				case 0x06:
					event.nalUnitType = 'sei_rbsp';
					event.escapedRBSP = discardEmulationPreventionBytes(data.subarray(1));
					break;
				case 0x07:
					event.nalUnitType = 'seq_parameter_set_rbsp';
					event.escapedRBSP = discardEmulationPreventionBytes(data.subarray(1));
					event.config = readSequenceParameterSet(event.escapedRBSP);
					break;
				case 0x08:
					event.nalUnitType = 'pic_parameter_set_rbsp';
					break;
				case 0x09:
					event.nalUnitType = 'access_unit_delimiter_rbsp';
					break;
				default:
					break;
			}
			self.trigger('data', event);
		});
		nalByteStream.on('done', function () {
			self.trigger('done');
		});
		this.flush = function () {
			nalByteStream.flush();
		};
		skipScalingList = function skipScalingList(count, expGolombDecoder) {
			var lastScale = 8,
				nextScale = 8,
				j,
				deltaScale;
			for (j = 0; j < count; j++) {
				if (nextScale !== 0) {
					deltaScale = expGolombDecoder.readExpGolomb();
					nextScale = (lastScale + deltaScale + 256) % 256;
				}
				lastScale = nextScale === 0 ? lastScale : nextScale;
			}
		};
		discardEmulationPreventionBytes = function discardEmulationPreventionBytes(data) {
			var length = data.byteLength,
				emulationPreventionBytesPositions = [],
				i = 1,
				newLength,
				newData;
			while (i < length - 2) {
				if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0x03) {
					emulationPreventionBytesPositions.push(i + 2);
					i += 2;
				} else {
					i++;
				}
			}
			if (emulationPreventionBytesPositions.length === 0) {
				return data;
			}
			newLength = length - emulationPreventionBytesPositions.length;
			newData = new Uint8Array(newLength);
			var sourceIndex = 0;
			for (i = 0; i < newLength; sourceIndex++, i++) {
				if (sourceIndex === emulationPreventionBytesPositions[0]) {
					sourceIndex++;
					emulationPreventionBytesPositions.shift();
				}
				newData[i] = data[sourceIndex];
			}
			return newData;
		};
		readSequenceParameterSet = function readSequenceParameterSet(data) {
			var frameCropLeftOffset = 0,
				frameCropRightOffset = 0,
				frameCropTopOffset = 0,
				frameCropBottomOffset = 0,
				sarScale = 1,
				expGolombDecoder,
				profileIdc,
				levelIdc,
				profileCompatibility,
				chromaFormatIdc,
				picOrderCntType,
				numRefFramesInPicOrderCntCycle,
				picWidthInMbsMinus1,
				picHeightInMapUnitsMinus1,
				frameMbsOnlyFlag,
				scalingListCount,
				sarRatio,
				aspectRatioIdc,
				i;
			expGolombDecoder = new ExpGolomb$1(data);
			profileIdc = expGolombDecoder.readUnsignedByte();
			profileCompatibility = expGolombDecoder.readUnsignedByte();
			levelIdc = expGolombDecoder.readUnsignedByte();
			expGolombDecoder.skipUnsignedExpGolomb();
			if (PROFILES_WITH_OPTIONAL_SPS_DATA[profileIdc]) {
				chromaFormatIdc = expGolombDecoder.readUnsignedExpGolomb();
				if (chromaFormatIdc === 3) {
					expGolombDecoder.skipBits(1);
				}
				expGolombDecoder.skipUnsignedExpGolomb();
				expGolombDecoder.skipUnsignedExpGolomb();
				expGolombDecoder.skipBits(1);
				if (expGolombDecoder.readBoolean()) {
					scalingListCount = chromaFormatIdc !== 3 ? 8 : 12;
					for (i = 0; i < scalingListCount; i++) {
						if (expGolombDecoder.readBoolean()) {
							if (i < 6) {
								skipScalingList(16, expGolombDecoder);
							} else {
								skipScalingList(64, expGolombDecoder);
							}
						}
					}
				}
			}
			expGolombDecoder.skipUnsignedExpGolomb();
			picOrderCntType = expGolombDecoder.readUnsignedExpGolomb();
			if (picOrderCntType === 0) {
				expGolombDecoder.readUnsignedExpGolomb();
			} else if (picOrderCntType === 1) {
				expGolombDecoder.skipBits(1);
				expGolombDecoder.skipExpGolomb();
				expGolombDecoder.skipExpGolomb();
				numRefFramesInPicOrderCntCycle = expGolombDecoder.readUnsignedExpGolomb();
				for (i = 0; i < numRefFramesInPicOrderCntCycle; i++) {
					expGolombDecoder.skipExpGolomb();
				}
			}
			expGolombDecoder.skipUnsignedExpGolomb();
			expGolombDecoder.skipBits(1);
			picWidthInMbsMinus1 = expGolombDecoder.readUnsignedExpGolomb();
			picHeightInMapUnitsMinus1 = expGolombDecoder.readUnsignedExpGolomb();
			frameMbsOnlyFlag = expGolombDecoder.readBits(1);
			if (frameMbsOnlyFlag === 0) {
				expGolombDecoder.skipBits(1);
			}
			expGolombDecoder.skipBits(1);
			if (expGolombDecoder.readBoolean()) {
				frameCropLeftOffset = expGolombDecoder.readUnsignedExpGolomb();
				frameCropRightOffset = expGolombDecoder.readUnsignedExpGolomb();
				frameCropTopOffset = expGolombDecoder.readUnsignedExpGolomb();
				frameCropBottomOffset = expGolombDecoder.readUnsignedExpGolomb();
			}
			if (expGolombDecoder.readBoolean()) {
				if (expGolombDecoder.readBoolean()) {
					aspectRatioIdc = expGolombDecoder.readUnsignedByte();
					switch (aspectRatioIdc) {
						case 1:
							sarRatio = [1, 1]; break;
						case 2:
							sarRatio = [12, 11]; break;
						case 3:
							sarRatio = [10, 11]; break;
						case 4:
							sarRatio = [16, 11]; break;
						case 5:
							sarRatio = [40, 33]; break;
						case 6:
							sarRatio = [24, 11]; break;
						case 7:
							sarRatio = [20, 11]; break;
						case 8:
							sarRatio = [32, 11]; break;
						case 9:
							sarRatio = [80, 33]; break;
						case 10:
							sarRatio = [18, 11]; break;
						case 11:
							sarRatio = [15, 11]; break;
						case 12:
							sarRatio = [64, 33]; break;
						case 13:
							sarRatio = [160, 99]; break;
						case 14:
							sarRatio = [4, 3]; break;
						case 15:
							sarRatio = [3, 2]; break;
						case 16:
							sarRatio = [2, 1]; break;
						case 255:
							{
								sarRatio = [expGolombDecoder.readUnsignedByte() << 8 | expGolombDecoder.readUnsignedByte(), expGolombDecoder.readUnsignedByte() << 8 | expGolombDecoder.readUnsignedByte()];
								break;
							}
					}
					if (sarRatio) {
						sarScale = sarRatio[0] / sarRatio[1];
					}
				}
			}
			return {
				profileIdc: profileIdc,
				levelIdc: levelIdc,
				profileCompatibility: profileCompatibility,
				width: Math.ceil(((picWidthInMbsMinus1 + 1) * 16 - frameCropLeftOffset * 2 - frameCropRightOffset * 2) * sarScale),
				height: (2 - frameMbsOnlyFlag) * (picHeightInMapUnitsMinus1 + 1) * 16 - frameCropTopOffset * 2 - frameCropBottomOffset * 2
			};
		};
	};
	_H264Stream.prototype = new Stream$2();
	var h264 = {
		H264Stream: _H264Stream,
		NalByteStream: _NalByteStream
	};
	var h264_1 = h264.H264Stream;
	var h264_2 = h264.NalByteStream;
	var h264$1 = Object.freeze({
		default: h264,
		__moduleExports: h264,
		H264Stream: h264_1,
		NalByteStream: h264_2
	});
	var _AacStream;
	_AacStream = function AacStream() {
		var everything = new Uint8Array(),
			timeStamp = 0;
		_AacStream.prototype.init.call(this);
		this.setTimestamp = function (timestamp) {
			timeStamp = timestamp;
		};
		this.parseId3TagSize = function (header, byteIndex) {
			var returnSize = header[byteIndex + 6] << 21 | header[byteIndex + 7] << 14 | header[byteIndex + 8] << 7 | header[byteIndex + 9],
				flags = header[byteIndex + 5],
				footerPresent = (flags & 16) >> 4;
			if (footerPresent) {
				return returnSize + 20;
			}
			return returnSize + 10;
		};
		this.parseAdtsSize = function (header, byteIndex) {
			var lowThree = (header[byteIndex + 5] & 0xE0) >> 5,
				middle = header[byteIndex + 4] << 3,
				highTwo = header[byteIndex + 3] & 0x3 << 11;
			return highTwo | middle | lowThree;
		};
		this.push = function (bytes) {
			var frameSize = 0,
				byteIndex = 0,
				bytesLeft,
				chunk,
				packet,
				tempLength;
			if (everything.length) {
				tempLength = everything.length;
				everything = new Uint8Array(bytes.byteLength + tempLength);
				everything.set(everything.subarray(0, tempLength));
				everything.set(bytes, tempLength);
			} else {
				everything = bytes;
			}
			while (everything.length - byteIndex >= 3) {
				if (everything[byteIndex] === 'I'.charCodeAt(0) && everything[byteIndex + 1] === 'D'.charCodeAt(0) && everything[byteIndex + 2] === '3'.charCodeAt(0)) {
					if (everything.length - byteIndex < 10) {
						break;
					}
					frameSize = this.parseId3TagSize(everything, byteIndex);
					if (frameSize > everything.length) {
						break;
					}
					chunk = {
						type: 'timed-metadata',
						data: everything.subarray(byteIndex, byteIndex + frameSize)
					};
					this.trigger('data', chunk);
					byteIndex += frameSize;
					continue;
				} else if (everything[byteIndex] & 0xff === 0xff && (everything[byteIndex + 1] & 0xf0) === 0xf0) {
					if (everything.length - byteIndex < 7) {
						break;
					}
					frameSize = this.parseAdtsSize(everything, byteIndex);
					if (frameSize > everything.length) {
						break;
					}
					packet = {
						type: 'audio',
						data: everything.subarray(byteIndex, byteIndex + frameSize),
						pts: timeStamp,
						dts: timeStamp
					};
					this.trigger('data', packet);
					byteIndex += frameSize;
					continue;
				}
				byteIndex++;
			}
			bytesLeft = everything.length - byteIndex;
			if (bytesLeft > 0) {
				everything = everything.subarray(byteIndex);
			} else {
				everything = new Uint8Array();
			}
		};
	};
	_AacStream.prototype = new Stream$2();
	var aac = _AacStream;
	var aac$1 = Object.freeze({
		default: aac,
		__moduleExports: aac
	});
	var highPrefix = [33, 16, 5, 32, 164, 27];
	var lowPrefix = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252];
	var zeroFill = function zeroFill(count) {
		var a = [];
		while (count--) {
			a.push(0);
		}
		return a;
	};
	var makeTable = function makeTable(metaTable) {
		return Object.keys(metaTable).reduce(function (obj, key) {
			obj[key] = new Uint8Array(metaTable[key].reduce(function (arr, part) {
				return arr.concat(part);
			}, []));
			return obj;
		}, {});
	};
	var coneOfSilence = {
		96000: [highPrefix, [227, 64], zeroFill(154), [56]],
		88200: [highPrefix, [231], zeroFill(170), [56]],
		64000: [highPrefix, [248, 192], zeroFill(240), [56]],
		48000: [highPrefix, [255, 192], zeroFill(268), [55, 148, 128], zeroFill(54), [112]],
		44100: [highPrefix, [255, 192], zeroFill(268), [55, 163, 128], zeroFill(84), [112]],
		32000: [highPrefix, [255, 192], zeroFill(268), [55, 234], zeroFill(226), [112]],
		24000: [highPrefix, [255, 192], zeroFill(268), [55, 255, 128], zeroFill(268), [111, 112], zeroFill(126), [224]],
		16000: [highPrefix, [255, 192], zeroFill(268), [55, 255, 128], zeroFill(268), [111, 255], zeroFill(269), [223, 108], zeroFill(195), [1, 192]],
		12000: [lowPrefix, zeroFill(268), [3, 127, 248], zeroFill(268), [6, 255, 240], zeroFill(268), [13, 255, 224], zeroFill(268), [27, 253, 128], zeroFill(259), [56]],
		11025: [lowPrefix, zeroFill(268), [3, 127, 248], zeroFill(268), [6, 255, 240], zeroFill(268), [13, 255, 224], zeroFill(268), [27, 255, 192], zeroFill(268), [55, 175, 128], zeroFill(108), [112]],
		8000: [lowPrefix, zeroFill(268), [3, 121, 16], zeroFill(47), [7]]
	};
	var silence = makeTable(coneOfSilence);
	var silence$1 = Object.freeze({
		default: silence,
		__moduleExports: silence
	});
	var ONE_SECOND_IN_TS$1 = 90000,
		secondsToVideoTs,
		secondsToAudioTs,
		videoTsToSeconds,
		audioTsToSeconds,
		audioTsToVideoTs,
		videoTsToAudioTs;
	secondsToVideoTs = function secondsToVideoTs(seconds) {
		return seconds * ONE_SECOND_IN_TS$1;
	};
	secondsToAudioTs = function secondsToAudioTs(seconds, sampleRate) {
		return seconds * sampleRate;
	};
	videoTsToSeconds = function videoTsToSeconds(timestamp) {
		return timestamp / ONE_SECOND_IN_TS$1;
	};
	audioTsToSeconds = function audioTsToSeconds(timestamp, sampleRate) {
		return timestamp / sampleRate;
	};
	audioTsToVideoTs = function audioTsToVideoTs(timestamp, sampleRate) {
		return secondsToVideoTs(audioTsToSeconds(timestamp, sampleRate));
	};
	videoTsToAudioTs = function videoTsToAudioTs(timestamp, sampleRate) {
		return secondsToAudioTs(videoTsToSeconds(timestamp), sampleRate);
	};
	var clock = {
		secondsToVideoTs: secondsToVideoTs,
		secondsToAudioTs: secondsToAudioTs,
		videoTsToSeconds: videoTsToSeconds,
		audioTsToSeconds: audioTsToSeconds,
		audioTsToVideoTs: audioTsToVideoTs,
		videoTsToAudioTs: videoTsToAudioTs
	};
	var clock_1 = clock.secondsToVideoTs;
	var clock_2 = clock.secondsToAudioTs;
	var clock_3 = clock.videoTsToSeconds;
	var clock_4 = clock.audioTsToSeconds;
	var clock_5 = clock.audioTsToVideoTs;
	var clock_6 = clock.videoTsToAudioTs;
	var clock$1 = Object.freeze({
		default: clock,
		__moduleExports: clock,
		secondsToVideoTs: clock_1,
		secondsToAudioTs: clock_2,
		videoTsToSeconds: clock_3,
		audioTsToSeconds: clock_4,
		audioTsToVideoTs: clock_5,
		videoTsToAudioTs: clock_6
	});
	var mp4 = (mp4Generator$1 && mp4Generator) || mp4Generator$1;
	var frameUtils$2 = (frameUtils$1 && frameUtils) || frameUtils$1;
	var trackDecodeInfo$2 = (trackDecodeInfo$1 && trackDecodeInfo) || trackDecodeInfo$1;
	var m2ts$2 = (m2ts$1 && m2ts_1) || m2ts$1;
	var AdtsStream = (adts$1 && adts) || adts$1;
	var require$$0$3 = (h264$1 && h264) || h264$1;
	var AacStream = (aac$1 && aac) || aac$1;
	var coneOfSilence$1 = (silence$1 && silence) || silence$1;
	var clock$2 = (clock$1 && clock) || clock$1;
	var H264Stream = require$$0$3.H264Stream;
	var AUDIO_PROPERTIES = ['audioobjecttype', 'channelcount', 'samplerate', 'samplingfrequencyindex', 'samplesize'];
	var VIDEO_PROPERTIES = ['width', 'height', 'profileIdc', 'levelIdc', 'profileCompatibility'];
	var ONE_SECOND_IN_TS$2 = 90000;
	var _VideoSegmentStream, _AudioSegmentStream, _Transmuxer, _CoalesceStream;
	var isLikelyAacData, arrayEquals, sumFrameByteLengths;
	isLikelyAacData = function isLikelyAacData(data) {
		if (data[0] === 'I'.charCodeAt(0) && data[1] === 'D'.charCodeAt(0) && data[2] === '3'.charCodeAt(0)) {
			return true;
		}
		return false;
	};
	arrayEquals = function arrayEquals(a, b) {
		var i;
		if (a.length !== b.length) {
			return false;
		}
		for (i = 0; i < a.length; i++) {
			if (a[i] !== b[i]) {
				return false;
			}
		}
		return true;
	};
	sumFrameByteLengths = function sumFrameByteLengths(array) {
		var i,
			currentObj,
			sum = 0;
		for (i = 0; i < array.length; i++) {
			currentObj = array[i];
			sum += currentObj.data.byteLength;
		}
		return sum;
	};
	_AudioSegmentStream = function AudioSegmentStream(track, options) {
		var adtsFrames = [],
			sequenceNumber = 0,
			earliestAllowedDts = 0,
			audioAppendStartTs = 0,
			videoBaseMediaDecodeTime = Infinity;
		options = options || {};
		_AudioSegmentStream.prototype.init.call(this);
		this.push = function (data) {
			trackDecodeInfo$2.collectDtsInfo(track, data);
			if (track) {
				AUDIO_PROPERTIES.forEach(function (prop) {
					track[prop] = data[prop];
				});
			}
			adtsFrames.push(data);
		};
		this.setEarliestDts = function (earliestDts) {
			earliestAllowedDts = earliestDts - track.timelineStartInfo.baseMediaDecodeTime;
		};
		this.setVideoBaseMediaDecodeTime = function (baseMediaDecodeTime) {
			videoBaseMediaDecodeTime = baseMediaDecodeTime;
		};
		this.setAudioAppendStart = function (timestamp) {
			audioAppendStartTs = timestamp;
		};
		this.flush = function () {
			var frames, moof, mdat, boxes;
			if (adtsFrames.length === 0) {
				this.trigger('done', 'AudioSegmentStream');
				return;
			}
			frames = this.trimAdtsFramesByEarliestDts_(adtsFrames);
			track.baseMediaDecodeTime = trackDecodeInfo$2.calculateTrackBaseMediaDecodeTime(track, options.keepOriginalTimestamps);
			this.prefixWithSilence_(track, frames);
			track.samples = this.generateSampleTable_(frames);
			mdat = mp4.mdat(this.concatenateFrameData_(frames));
			adtsFrames = [];
			moof = mp4.moof(sequenceNumber, [track]);
			boxes = new Uint8Array(moof.byteLength + mdat.byteLength);
			sequenceNumber++;
			boxes.set(moof);
			boxes.set(mdat, moof.byteLength);
			trackDecodeInfo$2.clearDtsInfo(track);
			this.trigger('data', { track: track, boxes: boxes });
			this.trigger('done', 'AudioSegmentStream');
		};
		this.prefixWithSilence_ = function (track, frames) {
			var baseMediaDecodeTimeTs,
				frameDuration = 0,
				audioGapDuration = 0,
				audioFillFrameCount = 0,
				audioFillDuration = 0,
				silentFrame,
				i;
			if (!frames.length) {
				return;
			}
			baseMediaDecodeTimeTs = clock$2.audioTsToVideoTs(track.baseMediaDecodeTime, track.samplerate);
			frameDuration = Math.ceil(ONE_SECOND_IN_TS$2 / (track.samplerate / 1024));
			if (audioAppendStartTs && videoBaseMediaDecodeTime) {
				audioGapDuration = baseMediaDecodeTimeTs - Math.max(audioAppendStartTs, videoBaseMediaDecodeTime);
				audioFillFrameCount = Math.floor(audioGapDuration / frameDuration);
				audioFillDuration = audioFillFrameCount * frameDuration;
			}
			if (audioFillFrameCount < 1 || audioFillDuration > ONE_SECOND_IN_TS$2 / 2) {
				return;
			}
			silentFrame = coneOfSilence$1[track.samplerate];
			if (!silentFrame) {
				silentFrame = frames[0].data;
			}
			for (i = 0; i < audioFillFrameCount; i++) {
				frames.splice(i, 0, {
					data: silentFrame
				});
			}
			track.baseMediaDecodeTime -= Math.floor(clock$2.videoTsToAudioTs(audioFillDuration, track.samplerate));
		};
		this.trimAdtsFramesByEarliestDts_ = function (adtsFrames) {
			if (track.minSegmentDts >= earliestAllowedDts) {
				return adtsFrames;
			}
			track.minSegmentDts = Infinity;
			return adtsFrames.filter(function (currentFrame) {
				if (currentFrame.dts >= earliestAllowedDts) {
					track.minSegmentDts = Math.min(track.minSegmentDts, currentFrame.dts);
					track.minSegmentPts = track.minSegmentDts;
					return true;
				}
				return false;
			});
		};
		this.generateSampleTable_ = function (frames) {
			var i,
				currentFrame,
				samples = [];
			for (i = 0; i < frames.length; i++) {
				currentFrame = frames[i];
				samples.push({
					size: currentFrame.data.byteLength,
					duration: 1024
				});
			}
			return samples;
		};
		this.concatenateFrameData_ = function (frames) {
			var i,
				currentFrame,
				dataOffset = 0,
				data = new Uint8Array(sumFrameByteLengths(frames));
			for (i = 0; i < frames.length; i++) {
				currentFrame = frames[i];
				data.set(currentFrame.data, dataOffset);
				dataOffset += currentFrame.data.byteLength;
			}
			return data;
		};
	};
	_AudioSegmentStream.prototype = new Stream$2();
	_VideoSegmentStream = function VideoSegmentStream(track, options) {
		var sequenceNumber = 0,
			nalUnits = [],
			gopsToAlignWith = [],
			config,
			pps;
		options = options || {};
		_VideoSegmentStream.prototype.init.call(this);
		delete track.minPTS;
		this.gopCache_ = [];
		this.push = function (nalUnit) {
			trackDecodeInfo$2.collectDtsInfo(track, nalUnit);
			if (nalUnit.nalUnitType === 'seq_parameter_set_rbsp' && !config) {
				config = nalUnit.config;
				track.sps = [nalUnit.data];
				VIDEO_PROPERTIES.forEach(function (prop) {
					track[prop] = config[prop];
				}, this);
			}
			if (nalUnit.nalUnitType === 'pic_parameter_set_rbsp' && !pps) {
				pps = nalUnit.data;
				track.pps = [nalUnit.data];
			}
			nalUnits.push(nalUnit);
		};
		this.flush = function () {
			var frames, gopForFusion, gops, moof, mdat, boxes;
			while (nalUnits.length) {
				if (nalUnits[0].nalUnitType === 'access_unit_delimiter_rbsp') {
					break;
				}
				nalUnits.shift();
			}
			if (nalUnits.length === 0) {
				this.resetStream_();
				this.trigger('done', 'VideoSegmentStream');
				return;
			}
			frames = frameUtils$2.groupNalsIntoFrames(nalUnits);
			gops = frameUtils$2.groupFramesIntoGops(frames);
			if (!gops[0][0].keyFrame) {
				gopForFusion = this.getGopForFusion_(nalUnits[0], track);
				if (gopForFusion) {
					gops.unshift(gopForFusion);
					gops.byteLength += gopForFusion.byteLength;
					gops.nalCount += gopForFusion.nalCount;
					gops.pts = gopForFusion.pts;
					gops.dts = gopForFusion.dts;
					gops.duration += gopForFusion.duration;
				} else {
					gops = frameUtils$2.extendFirstKeyFrame(gops);
				}
			}
			if (gopsToAlignWith.length) {
				var alignedGops;
				if (options.alignGopsAtEnd) {
					alignedGops = this.alignGopsAtEnd_(gops);
				} else {
					alignedGops = this.alignGopsAtStart_(gops);
				}
				if (!alignedGops) {
					this.gopCache_.unshift({
						gop: gops.pop(),
						pps: track.pps,
						sps: track.sps
					});
					this.gopCache_.length = Math.min(6, this.gopCache_.length);
					nalUnits = [];
					this.resetStream_();
					this.trigger('done', 'VideoSegmentStream');
					return;
				}
				trackDecodeInfo$2.clearDtsInfo(track);
				gops = alignedGops;
			}
			trackDecodeInfo$2.collectDtsInfo(track, gops);
			track.samples = frameUtils$2.generateSampleTable(gops);
			mdat = mp4.mdat(frameUtils$2.concatenateNalData(gops));
			track.baseMediaDecodeTime = trackDecodeInfo$2.calculateTrackBaseMediaDecodeTime(track, options.keepOriginalTimestamps);
			this.trigger('processedGopsInfo', gops.map(function (gop) {
				return {
					pts: gop.pts,
					dts: gop.dts,
					byteLength: gop.byteLength
				};
			}));
			this.gopCache_.unshift({
				gop: gops.pop(),
				pps: track.pps,
				sps: track.sps
			});
			this.gopCache_.length = Math.min(6, this.gopCache_.length);
			nalUnits = [];
			this.trigger('baseMediaDecodeTime', track.baseMediaDecodeTime);
			this.trigger('timelineStartInfo', track.timelineStartInfo);
			moof = mp4.moof(sequenceNumber, [track]);
			boxes = new Uint8Array(moof.byteLength + mdat.byteLength);
			sequenceNumber++;
			boxes.set(moof);
			boxes.set(mdat, moof.byteLength);
			this.trigger('data', { track: track, boxes: boxes });
			this.resetStream_();
			this.trigger('done', 'VideoSegmentStream');
		};
		this.resetStream_ = function () {
			trackDecodeInfo$2.clearDtsInfo(track);
			config = undefined;
			pps = undefined;
		};
		this.getGopForFusion_ = function (nalUnit) {
			var halfSecond = 45000,
				allowableOverlap = 10000,
				nearestDistance = Infinity,
				dtsDistance,
				nearestGopObj,
				currentGop,
				currentGopObj,
				i;
			for (i = 0; i < this.gopCache_.length; i++) {
				currentGopObj = this.gopCache_[i];
				currentGop = currentGopObj.gop;
				if (!(track.pps && arrayEquals(track.pps[0], currentGopObj.pps[0])) || !(track.sps && arrayEquals(track.sps[0], currentGopObj.sps[0]))) {
					continue;
				}
				if (currentGop.dts < track.timelineStartInfo.dts) {
					continue;
				}
				dtsDistance = nalUnit.dts - currentGop.dts - currentGop.duration;
				if (dtsDistance >= -allowableOverlap && dtsDistance <= halfSecond) {
					if (!nearestGopObj || nearestDistance > dtsDistance) {
						nearestGopObj = currentGopObj;
						nearestDistance = dtsDistance;
					}
				}
			}
			if (nearestGopObj) {
				return nearestGopObj.gop;
			}
			return null;
		};
		this.alignGopsAtStart_ = function (gops) {
			var alignIndex, gopIndex, align, gop, byteLength, nalCount, duration, alignedGops;
			byteLength = gops.byteLength;
			nalCount = gops.nalCount;
			duration = gops.duration;
			alignIndex = gopIndex = 0;
			while (alignIndex < gopsToAlignWith.length && gopIndex < gops.length) {
				align = gopsToAlignWith[alignIndex];
				gop = gops[gopIndex];
				if (align.pts === gop.pts) {
					break;
				}
				if (gop.pts > align.pts) {
					alignIndex++;
					continue;
				}
				gopIndex++;
				byteLength -= gop.byteLength;
				nalCount -= gop.nalCount;
				duration -= gop.duration;
			}
			if (gopIndex === 0) {
				return gops;
			}
			if (gopIndex === gops.length) {
				return null;
			}
			alignedGops = gops.slice(gopIndex);
			alignedGops.byteLength = byteLength;
			alignedGops.duration = duration;
			alignedGops.nalCount = nalCount;
			alignedGops.pts = alignedGops[0].pts;
			alignedGops.dts = alignedGops[0].dts;
			return alignedGops;
		};
		this.alignGopsAtEnd_ = function (gops) {
			var alignIndex, gopIndex, align, gop, alignEndIndex, matchFound;
			alignIndex = gopsToAlignWith.length - 1;
			gopIndex = gops.length - 1;
			alignEndIndex = null;
			matchFound = false;
			while (alignIndex >= 0 && gopIndex >= 0) {
				align = gopsToAlignWith[alignIndex];
				gop = gops[gopIndex];
				if (align.pts === gop.pts) {
					matchFound = true;
					break;
				}
				if (align.pts > gop.pts) {
					alignIndex--;
					continue;
				}
				if (alignIndex === gopsToAlignWith.length - 1) {
					alignEndIndex = gopIndex;
				}
				gopIndex--;
			}
			if (!matchFound && alignEndIndex === null) {
				return null;
			}
			var trimIndex;
			if (matchFound) {
				trimIndex = gopIndex;
			} else {
				trimIndex = alignEndIndex;
			}
			if (trimIndex === 0) {
				return gops;
			}
			var alignedGops = gops.slice(trimIndex);
			var metadata = alignedGops.reduce(function (total, gop) {
				total.byteLength += gop.byteLength;
				total.duration += gop.duration;
				total.nalCount += gop.nalCount;
				return total;
			}, { byteLength: 0, duration: 0, nalCount: 0 });
			alignedGops.byteLength = metadata.byteLength;
			alignedGops.duration = metadata.duration;
			alignedGops.nalCount = metadata.nalCount;
			alignedGops.pts = alignedGops[0].pts;
			alignedGops.dts = alignedGops[0].dts;
			return alignedGops;
		};
		this.alignGopsWith = function (newGopsToAlignWith) {
			gopsToAlignWith = newGopsToAlignWith;
		};
	};
	_VideoSegmentStream.prototype = new Stream$2();
	_CoalesceStream = function CoalesceStream(options, metadataStream) {
		this.numberOfTracks = 0;
		this.metadataStream = metadataStream;
		if (typeof options.remux !== 'undefined') {
			this.remuxTracks = !!options.remux;
		} else {
			this.remuxTracks = true;
		}
		this.pendingTracks = [];
		this.videoTrack = null;
		this.pendingBoxes = [];
		this.pendingCaptions = [];
		this.pendingMetadata = [];
		this.pendingBytes = 0;
		this.emittedTracks = 0;
		_CoalesceStream.prototype.init.call(this);
		this.push = function (output) {
			if (output.text) {
				return this.pendingCaptions.push(output);
			}
			if (output.frames) {
				return this.pendingMetadata.push(output);
			}
			this.pendingTracks.push(output.track);
			this.pendingBoxes.push(output.boxes);
			this.pendingBytes += output.boxes.byteLength;
			if (output.track.type === 'video') {
				this.videoTrack = output.track;
			}
			if (output.track.type === 'audio') {
				this.audioTrack = output.track;
			}
		};
	};
	_CoalesceStream.prototype = new Stream$2();
	_CoalesceStream.prototype.flush = function (flushSource) {
		var offset = 0,
			event = {
				captions: [],
				captionStreams: {},
				metadata: [],
				info: {}
			},
			caption,
			id3,
			initSegment,
			timelineStartPts = 0,
			i;
		if (this.pendingTracks.length < this.numberOfTracks) {
			if (flushSource !== 'VideoSegmentStream' && flushSource !== 'AudioSegmentStream') {
				return;
			} else if (this.remuxTracks) {
				return;
			} else if (this.pendingTracks.length === 0) {
				this.emittedTracks++;
				if (this.emittedTracks >= this.numberOfTracks) {
					this.trigger('done');
					this.emittedTracks = 0;
				}
				return;
			}
		}
		if (this.videoTrack) {
			timelineStartPts = this.videoTrack.timelineStartInfo.pts;
			VIDEO_PROPERTIES.forEach(function (prop) {
				event.info[prop] = this.videoTrack[prop];
			}, this);
		} else if (this.audioTrack) {
			timelineStartPts = this.audioTrack.timelineStartInfo.pts;
			AUDIO_PROPERTIES.forEach(function (prop) {
				event.info[prop] = this.audioTrack[prop];
			}, this);
		}
		if (this.pendingTracks.length === 1) {
			event.type = this.pendingTracks[0].type;
		} else {
			event.type = 'combined';
		}
		this.emittedTracks += this.pendingTracks.length;
		initSegment = mp4.initSegment(this.pendingTracks);
		event.initSegment = new Uint8Array(initSegment.byteLength);
		event.initSegment.set(initSegment);
		event.data = new Uint8Array(this.pendingBytes);
		for (i = 0; i < this.pendingBoxes.length; i++) {
			event.data.set(this.pendingBoxes[i], offset);
			offset += this.pendingBoxes[i].byteLength;
		}
		for (i = 0; i < this.pendingCaptions.length; i++) {
			caption = this.pendingCaptions[i];
			caption.startTime = caption.startPts - timelineStartPts;
			caption.startTime /= 90e3;
			caption.endTime = caption.endPts - timelineStartPts;
			caption.endTime /= 90e3;
			event.captionStreams[caption.stream] = true;
			event.captions.push(caption);
		}
		for (i = 0; i < this.pendingMetadata.length; i++) {
			id3 = this.pendingMetadata[i];
			id3.cueTime = id3.pts - timelineStartPts;
			id3.cueTime /= 90e3;
			event.metadata.push(id3);
		}
		event.metadata.dispatchType = this.metadataStream.dispatchType;
		this.pendingTracks.length = 0;
		this.videoTrack = null;
		this.pendingBoxes.length = 0;
		this.pendingCaptions.length = 0;
		this.pendingBytes = 0;
		this.pendingMetadata.length = 0;
		this.trigger('data', event);
		if (this.emittedTracks >= this.numberOfTracks) {
			this.trigger('done');
			this.emittedTracks = 0;
		}
	};
	_Transmuxer = function Transmuxer(options) {
		var self = this,
			hasFlushed = true,
			videoTrack,
			audioTrack;
		_Transmuxer.prototype.init.call(this);
		options = options || {};
		this.baseMediaDecodeTime = options.baseMediaDecodeTime || 0;
		this.transmuxPipeline_ = {};
		this.setupAacPipeline = function () {
			var pipeline = {};
			this.transmuxPipeline_ = pipeline;
			pipeline.type = 'aac';
			pipeline.metadataStream = new m2ts$2.MetadataStream();
			pipeline.aacStream = new AacStream();
			pipeline.audioTimestampRolloverStream = new m2ts$2.TimestampRolloverStream('audio');
			pipeline.timedMetadataTimestampRolloverStream = new m2ts$2.TimestampRolloverStream('timed-metadata');
			pipeline.adtsStream = new AdtsStream();
			pipeline.coalesceStream = new _CoalesceStream(options, pipeline.metadataStream);
			pipeline.headOfPipeline = pipeline.aacStream;
			pipeline.aacStream.pipe(pipeline.audioTimestampRolloverStream).pipe(pipeline.adtsStream);
			pipeline.aacStream.pipe(pipeline.timedMetadataTimestampRolloverStream).pipe(pipeline.metadataStream).pipe(pipeline.coalesceStream);
			pipeline.metadataStream.on('timestamp', function (frame) {
				pipeline.aacStream.setTimestamp(frame.timeStamp);
			});
			pipeline.aacStream.on('data', function (data) {
				if (data.type === 'timed-metadata' && !pipeline.audioSegmentStream) {
					audioTrack = audioTrack || {
						timelineStartInfo: {
							baseMediaDecodeTime: self.baseMediaDecodeTime
						},
						codec: 'adts',
						type: 'audio'
					};
					pipeline.coalesceStream.numberOfTracks++;
					pipeline.audioSegmentStream = new _AudioSegmentStream(audioTrack, options);
					pipeline.adtsStream.pipe(pipeline.audioSegmentStream).pipe(pipeline.coalesceStream);
				}
			});
			pipeline.coalesceStream.on('data', this.trigger.bind(this, 'data'));
			pipeline.coalesceStream.on('done', this.trigger.bind(this, 'done'));
		};
		this.setupTsPipeline = function () {
			var pipeline = {};
			this.transmuxPipeline_ = pipeline;
			pipeline.type = 'ts';
			pipeline.metadataStream = new m2ts$2.MetadataStream();
			pipeline.packetStream = new m2ts$2.TransportPacketStream();
			pipeline.parseStream = new m2ts$2.TransportParseStream();
			pipeline.elementaryStream = new m2ts$2.ElementaryStream();
			pipeline.videoTimestampRolloverStream = new m2ts$2.TimestampRolloverStream('video');
			pipeline.audioTimestampRolloverStream = new m2ts$2.TimestampRolloverStream('audio');
			pipeline.timedMetadataTimestampRolloverStream = new m2ts$2.TimestampRolloverStream('timed-metadata');
			pipeline.adtsStream = new AdtsStream();
			pipeline.h264Stream = new H264Stream();
			pipeline.captionStream = new m2ts$2.CaptionStream();
			pipeline.coalesceStream = new _CoalesceStream(options, pipeline.metadataStream);
			pipeline.headOfPipeline = pipeline.packetStream;
			pipeline.packetStream.pipe(pipeline.parseStream).pipe(pipeline.elementaryStream);
			pipeline.elementaryStream.pipe(pipeline.videoTimestampRolloverStream).pipe(pipeline.h264Stream);
			pipeline.elementaryStream.pipe(pipeline.audioTimestampRolloverStream).pipe(pipeline.adtsStream);
			pipeline.elementaryStream.pipe(pipeline.timedMetadataTimestampRolloverStream).pipe(pipeline.metadataStream).pipe(pipeline.coalesceStream);
			pipeline.h264Stream.pipe(pipeline.captionStream).pipe(pipeline.coalesceStream);
			pipeline.elementaryStream.on('data', function (data) {
				var i;
				if (data.type === 'metadata') {
					i = data.tracks.length;
					while (i--) {
						if (!videoTrack && data.tracks[i].type === 'video') {
							videoTrack = data.tracks[i];
							videoTrack.timelineStartInfo.baseMediaDecodeTime = self.baseMediaDecodeTime;
						} else if (!audioTrack && data.tracks[i].type === 'audio') {
							audioTrack = data.tracks[i];
							audioTrack.timelineStartInfo.baseMediaDecodeTime = self.baseMediaDecodeTime;
						}
					}
					if (videoTrack && !pipeline.videoSegmentStream) {
						pipeline.coalesceStream.numberOfTracks++;
						pipeline.videoSegmentStream = new _VideoSegmentStream(videoTrack, options);
						pipeline.videoSegmentStream.on('timelineStartInfo', function (timelineStartInfo) {
							if (audioTrack) {
								audioTrack.timelineStartInfo = timelineStartInfo;
								pipeline.audioSegmentStream.setEarliestDts(timelineStartInfo.dts);
							}
						});
						pipeline.videoSegmentStream.on('processedGopsInfo', self.trigger.bind(self, 'gopInfo'));
						pipeline.videoSegmentStream.on('baseMediaDecodeTime', function (baseMediaDecodeTime) {
							if (audioTrack) {
								pipeline.audioSegmentStream.setVideoBaseMediaDecodeTime(baseMediaDecodeTime);
							}
						});
						pipeline.h264Stream.pipe(pipeline.videoSegmentStream).pipe(pipeline.coalesceStream);
					}
					if (audioTrack && !pipeline.audioSegmentStream) {
						pipeline.coalesceStream.numberOfTracks++;
						pipeline.audioSegmentStream = new _AudioSegmentStream(audioTrack, options);
						pipeline.adtsStream.pipe(pipeline.audioSegmentStream).pipe(pipeline.coalesceStream);
					}
				}
			});
			pipeline.coalesceStream.on('data', this.trigger.bind(this, 'data'));
			pipeline.coalesceStream.on('done', this.trigger.bind(this, 'done'));
		};
		this.setBaseMediaDecodeTime = function (baseMediaDecodeTime) {
			var pipeline = this.transmuxPipeline_;
			this.baseMediaDecodeTime = baseMediaDecodeTime;
			if (audioTrack) {
				audioTrack.timelineStartInfo.dts = undefined;
				audioTrack.timelineStartInfo.pts = undefined;
				trackDecodeInfo$2.clearDtsInfo(audioTrack);
				audioTrack.timelineStartInfo.baseMediaDecodeTime = baseMediaDecodeTime;
				if (pipeline.audioTimestampRolloverStream) {
					pipeline.audioTimestampRolloverStream.discontinuity();
				}
			}
			if (videoTrack) {
				if (pipeline.videoSegmentStream) {
					pipeline.videoSegmentStream.gopCache_ = [];
					pipeline.videoTimestampRolloverStream.discontinuity();
				}
				videoTrack.timelineStartInfo.dts = undefined;
				videoTrack.timelineStartInfo.pts = undefined;
				trackDecodeInfo$2.clearDtsInfo(videoTrack);
				pipeline.captionStream.reset();
				videoTrack.timelineStartInfo.baseMediaDecodeTime = baseMediaDecodeTime;
			}
			if (pipeline.timedMetadataTimestampRolloverStream) {
				pipeline.timedMetadataTimestampRolloverStream.discontinuity();
			}
		};
		this.setAudioAppendStart = function (timestamp) {
			if (audioTrack) {
				this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(timestamp);
			}
		};
		this.alignGopsWith = function (gopsToAlignWith) {
			if (videoTrack && this.transmuxPipeline_.videoSegmentStream) {
				this.transmuxPipeline_.videoSegmentStream.alignGopsWith(gopsToAlignWith);
			}
		};
		this.push = function (data) {
			if (hasFlushed) {
				var isAac = isLikelyAacData(data);
				if (isAac && this.transmuxPipeline_.type !== 'aac') {
					this.setupAacPipeline();
				} else if (!isAac && this.transmuxPipeline_.type !== 'ts') {
					this.setupTsPipeline();
				}
				hasFlushed = false;
			}
			this.transmuxPipeline_.headOfPipeline.push(data);
		};
		this.flush = function () {
			hasFlushed = true;
			this.transmuxPipeline_.headOfPipeline.flush();
		};
		this.resetCaptions = function () {
			if (this.transmuxPipeline_.captionStream) {
				this.transmuxPipeline_.captionStream.reset();
			}
		};
	};
	_Transmuxer.prototype = new Stream$2();
	var transmuxer = {
		Transmuxer: _Transmuxer,
		VideoSegmentStream: _VideoSegmentStream,
		AudioSegmentStream: _AudioSegmentStream,
		AUDIO_PROPERTIES: AUDIO_PROPERTIES,
		VIDEO_PROPERTIES: VIDEO_PROPERTIES
	};
	var transmuxer_1 = transmuxer.Transmuxer;
	var transmuxer_2 = transmuxer.VideoSegmentStream;
	var transmuxer_3 = transmuxer.AudioSegmentStream;
	var transmuxer_4 = transmuxer.AUDIO_PROPERTIES;
	var transmuxer_5 = transmuxer.VIDEO_PROPERTIES;
	var transmuxer$1 = Object.freeze({
		default: transmuxer,
		__moduleExports: transmuxer,
		Transmuxer: transmuxer_1,
		VideoSegmentStream: transmuxer_2,
		AudioSegmentStream: transmuxer_3,
		AUDIO_PROPERTIES: transmuxer_4,
		VIDEO_PROPERTIES: transmuxer_5
	});
	var inspectMp4,
		_textifyMp,
		parseType$1 = probe.parseType,
		parseMp4Date = function parseMp4Date(seconds) {
			return new Date(seconds * 1000 - 2082844800000);
		},
		parseSampleFlags = function parseSampleFlags(flags) {
			return {
				isLeading: (flags[0] & 0x0c) >>> 2,
				dependsOn: flags[0] & 0x03,
				isDependedOn: (flags[1] & 0xc0) >>> 6,
				hasRedundancy: (flags[1] & 0x30) >>> 4,
				paddingValue: (flags[1] & 0x0e) >>> 1,
				isNonSyncSample: flags[1] & 0x01,
				degradationPriority: flags[2] << 8 | flags[3]
			};
		},
		nalParse = function nalParse(avcStream) {
			var avcView = new DataView(avcStream.buffer, avcStream.byteOffset, avcStream.byteLength),
				result = [],
				i,
				length;
			for (i = 0; i + 4 < avcStream.length; i += length) {
				length = avcView.getUint32(i);
				i += 4;
				if (length <= 0) {
					result.push('<span style=\'color:red;\'>MALFORMED DATA</span>');
					continue;
				}
				switch (avcStream[i] & 0x1F) {
					case 0x01:
						result.push('slice_layer_without_partitioning_rbsp');
						break;
					case 0x05:
						result.push('slice_layer_without_partitioning_rbsp_idr');
						break;
					case 0x06:
						result.push('sei_rbsp');
						break;
					case 0x07:
						result.push('seq_parameter_set_rbsp');
						break;
					case 0x08:
						result.push('pic_parameter_set_rbsp');
						break;
					case 0x09:
						result.push('access_unit_delimiter_rbsp');
						break;
					default:
						result.push('UNKNOWN NAL - ' + avcStream[i] & 0x1F);
						break;
				}
			}
			return result;
		},
		parse$1 = {
			avc1: function avc1(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
				return {
					dataReferenceIndex: view.getUint16(6),
					width: view.getUint16(24),
					height: view.getUint16(26),
					horizresolution: view.getUint16(28) + view.getUint16(30) / 16,
					vertresolution: view.getUint16(32) + view.getUint16(34) / 16,
					frameCount: view.getUint16(40),
					depth: view.getUint16(74),
					config: inspectMp4(data.subarray(78, data.byteLength))
				};
			},
			avcC: function avcC(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
					result = {
						configurationVersion: data[0],
						avcProfileIndication: data[1],
						profileCompatibility: data[2],
						avcLevelIndication: data[3],
						lengthSizeMinusOne: data[4] & 0x03,
						sps: [],
						pps: []
					},
					numOfSequenceParameterSets = data[5] & 0x1f,
					numOfPictureParameterSets,
					nalSize,
					offset,
					i;
				offset = 6;
				for (i = 0; i < numOfSequenceParameterSets; i++) {
					nalSize = view.getUint16(offset);
					offset += 2;
					result.sps.push(new Uint8Array(data.subarray(offset, offset + nalSize)));
					offset += nalSize;
				}
				numOfPictureParameterSets = data[offset];
				offset++;
				for (i = 0; i < numOfPictureParameterSets; i++) {
					nalSize = view.getUint16(offset);
					offset += 2;
					result.pps.push(new Uint8Array(data.subarray(offset, offset + nalSize)));
					offset += nalSize;
				}
				return result;
			},
			btrt: function btrt(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
				return {
					bufferSizeDB: view.getUint32(0),
					maxBitrate: view.getUint32(4),
					avgBitrate: view.getUint32(8)
				};
			},
			esds: function esds(data) {
				return {
					version: data[0],
					flags: new Uint8Array(data.subarray(1, 4)),
					esId: data[6] << 8 | data[7],
					streamPriority: data[8] & 0x1f,
					decoderConfig: {
						objectProfileIndication: data[11],
						streamType: data[12] >>> 2 & 0x3f,
						bufferSize: data[13] << 16 | data[14] << 8 | data[15],
						maxBitrate: data[16] << 24 | data[17] << 16 | data[18] << 8 | data[19],
						avgBitrate: data[20] << 24 | data[21] << 16 | data[22] << 8 | data[23],
						decoderConfigDescriptor: {
							tag: data[24],
							length: data[25],
							audioObjectType: data[26] >>> 3 & 0x1f,
							samplingFrequencyIndex: (data[26] & 0x07) << 1 | data[27] >>> 7 & 0x01,
							channelConfiguration: data[27] >>> 3 & 0x0f
						}
					}
				};
			},
			ftyp: function ftyp(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
					result = {
						majorBrand: parseType$1(data.subarray(0, 4)),
						minorVersion: view.getUint32(4),
						compatibleBrands: []
					},
					i = 8;
				while (i < data.byteLength) {
					result.compatibleBrands.push(parseType$1(data.subarray(i, i + 4)));
					i += 4;
				}
				return result;
			},
			dinf: function dinf(data) {
				return {
					boxes: inspectMp4(data)
				};
			},
			dref: function dref(data) {
				return {
					version: data[0],
					flags: new Uint8Array(data.subarray(1, 4)),
					dataReferences: inspectMp4(data.subarray(8))
				};
			},
			hdlr: function hdlr(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
					result = {
						version: view.getUint8(0),
						flags: new Uint8Array(data.subarray(1, 4)),
						handlerType: parseType$1(data.subarray(8, 12)),
						name: ''
					},
					i = 8;
				for (i = 24; i < data.byteLength; i++) {
					if (data[i] === 0x00) {
						i++;
						break;
					}
					result.name += String.fromCharCode(data[i]);
				}
				result.name = decodeURIComponent(escape(result.name));
				return result;
			},
			mdat: function mdat(data) {
				return {
					byteLength: data.byteLength,
					nals: nalParse(data)
				};
			},
			mdhd: function mdhd(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
					i = 4,
					language,
					result = {
						version: view.getUint8(0),
						flags: new Uint8Array(data.subarray(1, 4)),
						language: ''
					};
				if (result.version === 1) {
					i += 4;
					result.creationTime = parseMp4Date(view.getUint32(i));
					i += 8;
					result.modificationTime = parseMp4Date(view.getUint32(i));
					i += 4;
					result.timescale = view.getUint32(i);
					i += 8;
					result.duration = view.getUint32(i);
				} else {
					result.creationTime = parseMp4Date(view.getUint32(i));
					i += 4;
					result.modificationTime = parseMp4Date(view.getUint32(i));
					i += 4;
					result.timescale = view.getUint32(i);
					i += 4;
					result.duration = view.getUint32(i);
				}
				i += 4;
				language = view.getUint16(i);
				result.language += String.fromCharCode((language >> 10) + 0x60);
				result.language += String.fromCharCode(((language & 0x03e0) >> 5) + 0x60);
				result.language += String.fromCharCode((language & 0x1f) + 0x60);
				return result;
			},
			mdia: function mdia(data) {
				return {
					boxes: inspectMp4(data)
				};
			},
			mfhd: function mfhd(data) {
				return {
					version: data[0],
					flags: new Uint8Array(data.subarray(1, 4)),
					sequenceNumber: data[4] << 24 | data[5] << 16 | data[6] << 8 | data[7]
				};
			},
			minf: function minf(data) {
				return {
					boxes: inspectMp4(data)
				};
			},
			mp4a: function mp4a(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
					result = {
						dataReferenceIndex: view.getUint16(6),
						channelcount: view.getUint16(16),
						samplesize: view.getUint16(18),
						samplerate: view.getUint16(24) + view.getUint16(26) / 65536
					};
				if (data.byteLength > 28) {
					result.streamDescriptor = inspectMp4(data.subarray(28))[0];
				}
				return result;
			},
			moof: function moof(data) {
				return {
					boxes: inspectMp4(data)
				};
			},
			moov: function moov(data) {
				return {
					boxes: inspectMp4(data)
				};
			},
			mvex: function mvex(data) {
				return {
					boxes: inspectMp4(data)
				};
			},
			mvhd: function mvhd(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
					i = 4,
					result = {
						version: view.getUint8(0),
						flags: new Uint8Array(data.subarray(1, 4))
					};
				if (result.version === 1) {
					i += 4;
					result.creationTime = parseMp4Date(view.getUint32(i));
					i += 8;
					result.modificationTime = parseMp4Date(view.getUint32(i));
					i += 4;
					result.timescale = view.getUint32(i);
					i += 8;
					result.duration = view.getUint32(i);
				} else {
					result.creationTime = parseMp4Date(view.getUint32(i));
					i += 4;
					result.modificationTime = parseMp4Date(view.getUint32(i));
					i += 4;
					result.timescale = view.getUint32(i);
					i += 4;
					result.duration = view.getUint32(i);
				}
				i += 4;
				result.rate = view.getUint16(i) + view.getUint16(i + 2) / 16;
				i += 4;
				result.volume = view.getUint8(i) + view.getUint8(i + 1) / 8;
				i += 2;
				i += 2;
				i += 2 * 4;
				result.matrix = new Uint32Array(data.subarray(i, i + 9 * 4));
				i += 9 * 4;
				i += 6 * 4;
				result.nextTrackId = view.getUint32(i);
				return result;
			},
			pdin: function pdin(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
				return {
					version: view.getUint8(0),
					flags: new Uint8Array(data.subarray(1, 4)),
					rate: view.getUint32(4),
					initialDelay: view.getUint32(8)
				};
			},
			sdtp: function sdtp(data) {
				var result = {
					version: data[0],
					flags: new Uint8Array(data.subarray(1, 4)),
					samples: []
				},
					i;
				for (i = 4; i < data.byteLength; i++) {
					result.samples.push({
						dependsOn: (data[i] & 0x30) >> 4,
						isDependedOn: (data[i] & 0x0c) >> 2,
						hasRedundancy: data[i] & 0x03
					});
				}
				return result;
			},
			sidx: function sidx(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
					result = {
						version: data[0],
						flags: new Uint8Array(data.subarray(1, 4)),
						references: [],
						referenceId: view.getUint32(4),
						timescale: view.getUint32(8),
						earliestPresentationTime: view.getUint32(12),
						firstOffset: view.getUint32(16)
					},
					referenceCount = view.getUint16(22),
					i;
				for (i = 24; referenceCount; i += 12, referenceCount--) {
					result.references.push({
						referenceType: (data[i] & 0x80) >>> 7,
						referencedSize: view.getUint32(i) & 0x7FFFFFFF,
						subsegmentDuration: view.getUint32(i + 4),
						startsWithSap: !!(data[i + 8] & 0x80),
						sapType: (data[i + 8] & 0x70) >>> 4,
						sapDeltaTime: view.getUint32(i + 8) & 0x0FFFFFFF
					});
				}
				return result;
			},
			smhd: function smhd(data) {
				return {
					version: data[0],
					flags: new Uint8Array(data.subarray(1, 4)),
					balance: data[4] + data[5] / 256
				};
			},
			stbl: function stbl(data) {
				return {
					boxes: inspectMp4(data)
				};
			},
			stco: function stco(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
					result = {
						version: data[0],
						flags: new Uint8Array(data.subarray(1, 4)),
						chunkOffsets: []
					},
					entryCount = view.getUint32(4),
					i;
				for (i = 8; entryCount; i += 4, entryCount--) {
					result.chunkOffsets.push(view.getUint32(i));
				}
				return result;
			},
			stsc: function stsc(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
					entryCount = view.getUint32(4),
					result = {
						version: data[0],
						flags: new Uint8Array(data.subarray(1, 4)),
						sampleToChunks: []
					},
					i;
				for (i = 8; entryCount; i += 12, entryCount--) {
					result.sampleToChunks.push({
						firstChunk: view.getUint32(i),
						samplesPerChunk: view.getUint32(i + 4),
						sampleDescriptionIndex: view.getUint32(i + 8)
					});
				}
				return result;
			},
			stsd: function stsd(data) {
				return {
					version: data[0],
					flags: new Uint8Array(data.subarray(1, 4)),
					sampleDescriptions: inspectMp4(data.subarray(8))
				};
			},
			stsz: function stsz(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
					result = {
						version: data[0],
						flags: new Uint8Array(data.subarray(1, 4)),
						sampleSize: view.getUint32(4),
						entries: []
					},
					i;
				for (i = 12; i < data.byteLength; i += 4) {
					result.entries.push(view.getUint32(i));
				}
				return result;
			},
			stts: function stts(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
					result = {
						version: data[0],
						flags: new Uint8Array(data.subarray(1, 4)),
						timeToSamples: []
					},
					entryCount = view.getUint32(4),
					i;
				for (i = 8; entryCount; i += 8, entryCount--) {
					result.timeToSamples.push({
						sampleCount: view.getUint32(i),
						sampleDelta: view.getUint32(i + 4)
					});
				}
				return result;
			},
			styp: function styp(data) {
				return parse$1.ftyp(data);
			},
			tfdt: function tfdt(data) {
				var result = {
					version: data[0],
					flags: new Uint8Array(data.subarray(1, 4)),
					baseMediaDecodeTime: data[4] << 24 | data[5] << 16 | data[6] << 8 | data[7]
				};
				if (result.version === 1) {
					result.baseMediaDecodeTime *= Math.pow(2, 32);
					result.baseMediaDecodeTime += data[8] << 24 | data[9] << 16 | data[10] << 8 | data[11];
				}
				return result;
			},
			tfhd: function tfhd(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
					result = {
						version: data[0],
						flags: new Uint8Array(data.subarray(1, 4)),
						trackId: view.getUint32(4)
					},
					baseDataOffsetPresent = result.flags[2] & 0x01,
					sampleDescriptionIndexPresent = result.flags[2] & 0x02,
					defaultSampleDurationPresent = result.flags[2] & 0x08,
					defaultSampleSizePresent = result.flags[2] & 0x10,
					defaultSampleFlagsPresent = result.flags[2] & 0x20,
					durationIsEmpty = result.flags[0] & 0x010000,
					defaultBaseIsMoof = result.flags[0] & 0x020000,
					i;
				i = 8;
				if (baseDataOffsetPresent) {
					i += 4;
					result.baseDataOffset = view.getUint32(12);
					i += 4;
				}
				if (sampleDescriptionIndexPresent) {
					result.sampleDescriptionIndex = view.getUint32(i);
					i += 4;
				}
				if (defaultSampleDurationPresent) {
					result.defaultSampleDuration = view.getUint32(i);
					i += 4;
				}
				if (defaultSampleSizePresent) {
					result.defaultSampleSize = view.getUint32(i);
					i += 4;
				}
				if (defaultSampleFlagsPresent) {
					result.defaultSampleFlags = view.getUint32(i);
				}
				if (durationIsEmpty) {
					result.durationIsEmpty = true;
				}
				if (!baseDataOffsetPresent && defaultBaseIsMoof) {
					result.baseDataOffsetIsMoof = true;
				}
				return result;
			},
			tkhd: function tkhd(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
					i = 4,
					result = {
						version: view.getUint8(0),
						flags: new Uint8Array(data.subarray(1, 4))
					};
				if (result.version === 1) {
					i += 4;
					result.creationTime = parseMp4Date(view.getUint32(i));
					i += 8;
					result.modificationTime = parseMp4Date(view.getUint32(i));
					i += 4;
					result.trackId = view.getUint32(i);
					i += 4;
					i += 8;
					result.duration = view.getUint32(i);
				} else {
					result.creationTime = parseMp4Date(view.getUint32(i));
					i += 4;
					result.modificationTime = parseMp4Date(view.getUint32(i));
					i += 4;
					result.trackId = view.getUint32(i);
					i += 4;
					i += 4;
					result.duration = view.getUint32(i);
				}
				i += 4;
				i += 2 * 4;
				result.layer = view.getUint16(i);
				i += 2;
				result.alternateGroup = view.getUint16(i);
				i += 2;
				result.volume = view.getUint8(i) + view.getUint8(i + 1) / 8;
				i += 2;
				i += 2;
				result.matrix = new Uint32Array(data.subarray(i, i + 9 * 4));
				i += 9 * 4;
				result.width = view.getUint16(i) + view.getUint16(i + 2) / 16;
				i += 4;
				result.height = view.getUint16(i) + view.getUint16(i + 2) / 16;
				return result;
			},
			traf: function traf(data) {
				return {
					boxes: inspectMp4(data)
				};
			},
			trak: function trak(data) {
				return {
					boxes: inspectMp4(data)
				};
			},
			trex: function trex(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
				return {
					version: data[0],
					flags: new Uint8Array(data.subarray(1, 4)),
					trackId: view.getUint32(4),
					defaultSampleDescriptionIndex: view.getUint32(8),
					defaultSampleDuration: view.getUint32(12),
					defaultSampleSize: view.getUint32(16),
					sampleDependsOn: data[20] & 0x03,
					sampleIsDependedOn: (data[21] & 0xc0) >> 6,
					sampleHasRedundancy: (data[21] & 0x30) >> 4,
					samplePaddingValue: (data[21] & 0x0e) >> 1,
					sampleIsDifferenceSample: !!(data[21] & 0x01),
					sampleDegradationPriority: view.getUint16(22)
				};
			},
			trun: function trun(data) {
				var result = {
					version: data[0],
					flags: new Uint8Array(data.subarray(1, 4)),
					samples: []
				},
					view = new DataView(data.buffer, data.byteOffset, data.byteLength),
					dataOffsetPresent = result.flags[2] & 0x01,
					firstSampleFlagsPresent = result.flags[2] & 0x04,
					sampleDurationPresent = result.flags[1] & 0x01,
					sampleSizePresent = result.flags[1] & 0x02,
					sampleFlagsPresent = result.flags[1] & 0x04,
					sampleCompositionTimeOffsetPresent = result.flags[1] & 0x08,
					sampleCount = view.getUint32(4),
					offset = 8,
					sample;
				if (dataOffsetPresent) {
					result.dataOffset = view.getInt32(offset);
					offset += 4;
				}
				if (firstSampleFlagsPresent && sampleCount) {
					sample = {
						flags: parseSampleFlags(data.subarray(offset, offset + 4))
					};
					offset += 4;
					if (sampleDurationPresent) {
						sample.duration = view.getUint32(offset);
						offset += 4;
					}
					if (sampleSizePresent) {
						sample.size = view.getUint32(offset);
						offset += 4;
					}
					if (sampleCompositionTimeOffsetPresent) {
						sample.compositionTimeOffset = view.getUint32(offset);
						offset += 4;
					}
					result.samples.push(sample);
					sampleCount--;
				}
				while (sampleCount--) {
					sample = {};
					if (sampleDurationPresent) {
						sample.duration = view.getUint32(offset);
						offset += 4;
					}
					if (sampleSizePresent) {
						sample.size = view.getUint32(offset);
						offset += 4;
					}
					if (sampleFlagsPresent) {
						sample.flags = parseSampleFlags(data.subarray(offset, offset + 4));
						offset += 4;
					}
					if (sampleCompositionTimeOffsetPresent) {
						sample.compositionTimeOffset = view.getUint32(offset);
						offset += 4;
					}
					result.samples.push(sample);
				}
				return result;
			},
			'url ': function url(data) {
				return {
					version: data[0],
					flags: new Uint8Array(data.subarray(1, 4))
				};
			},
			vmhd: function vmhd(data) {
				var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
				return {
					version: data[0],
					flags: new Uint8Array(data.subarray(1, 4)),
					graphicsmode: view.getUint16(4),
					opcolor: new Uint16Array([view.getUint16(6), view.getUint16(8), view.getUint16(10)])
				};
			}
		};
	inspectMp4 = function inspectMp4(data) {
		var i = 0,
			result = [],
			view,
			size,
			type,
			end,
			box;
		var ab = new ArrayBuffer(data.length);
		var v = new Uint8Array(ab);
		for (var z = 0; z < data.length; ++z) {
			v[z] = data[z];
		}
		view = new DataView(ab);
		while (i < data.byteLength) {
			size = view.getUint32(i);
			type = parseType$1(data.subarray(i + 4, i + 8));
			end = size > 1 ? i + size : data.byteLength;
			box = (parse$1[type] || function (data) {
				return {
					data: data
				};
			})(data.subarray(i + 8, end));
			box.size = size;
			box.type = type;
			result.push(box);
			i = end;
		}
		return result;
	};
	_textifyMp = function textifyMp4(inspectedMp4, depth) {
		var indent;
		depth = depth || 0;
		indent = new Array(depth * 2 + 1).join(' ');
		return inspectedMp4.map(function (box, index) {
			return indent + box.type + '\n' +
				Object.keys(box).filter(function (key) {
					return key !== 'type' && key !== 'boxes';
				}).map(function (key) {
					var prefix = indent + '  ' + key + ': ',
						value = box[key];
					if (value instanceof Uint8Array || value instanceof Uint32Array) {
						var bytes = Array.prototype.slice.call(new Uint8Array(value.buffer, value.byteOffset, value.byteLength)).map(function (byte) {
							return ' ' + ('00' + byte.toString(16)).slice(-2);
						}).join('').match(/.{1,24}/g);
						if (!bytes) {
							return prefix + '<>';
						}
						if (bytes.length === 1) {
							return prefix + '<' + bytes.join('').slice(1) + '>';
						}
						return prefix + '<\n' + bytes.map(function (line) {
							return indent + '  ' + line;
						}).join('\n') + '\n' + indent + '  >';
					}
					return prefix + JSON.stringify(value, null, 2).split('\n').map(function (line, index) {
						if (index === 0) {
							return line;
						}
						return indent + '  ' + line;
					}).join('\n');
				}).join('\n') + (
					box.boxes ? '\n' + _textifyMp(box.boxes, depth + 1) : '');
		}).join('\n');
	};
	var mp4Inspector = {
		inspect: inspectMp4,
		textify: _textifyMp,
		parseTfdt: parse$1.tfdt,
		parseHdlr: parse$1.hdlr,
		parseTfhd: parse$1.tfhd,
		parseTrun: parse$1.trun
	};
	var mp4Inspector_1 = mp4Inspector.inspect;
	var mp4Inspector_2 = mp4Inspector.textify;
	var mp4Inspector_3 = mp4Inspector.parseTfdt;
	var mp4Inspector_4 = mp4Inspector.parseHdlr;
	var mp4Inspector_5 = mp4Inspector.parseTfhd;
	var mp4Inspector_6 = mp4Inspector.parseTrun;
	var mp4Inspector$1 = Object.freeze({
		default: mp4Inspector,
		__moduleExports: mp4Inspector,
		inspect: mp4Inspector_1,
		textify: mp4Inspector_2,
		parseTfdt: mp4Inspector_3,
		parseHdlr: mp4Inspector_4,
		parseTfhd: mp4Inspector_5,
		parseTrun: mp4Inspector_6
	});
	var inspect = (mp4Inspector$1 && mp4Inspector) || mp4Inspector$1;
	var discardEmulationPreventionBytes$1 = cea708Parser.discardEmulationPreventionBytes;
	var CaptionStream$2 = CaptionStream$1.CaptionStream;
	var mapToSample = function mapToSample(offset, samples) {
		var approximateOffset = offset;
		for (var i = 0; i < samples.length; i++) {
			var sample = samples[i];
			if (approximateOffset < sample.size) {
				return sample;
			}
			approximateOffset -= sample.size;
		}
		return null;
	};
	var findSeiNals = function findSeiNals(avcStream, samples, trackId) {
		var avcView = new DataView(avcStream.buffer, avcStream.byteOffset, avcStream.byteLength),
			result = [],
			seiNal,
			i,
			length,
			lastMatchedSample;
		for (i = 0; i + 4 < avcStream.length; i += length) {
			length = avcView.getUint32(i);
			i += 4;
			if (length <= 0) {
				continue;
			}
			switch (avcStream[i] & 0x1F) {
				case 0x06:
					var data = avcStream.subarray(i + 1, i + 1 + length);
					var matchingSample = mapToSample(i, samples);
					seiNal = {
						nalUnitType: 'sei_rbsp',
						size: length,
						data: data,
						escapedRBSP: discardEmulationPreventionBytes$1(data),
						trackId: trackId
					};
					if (matchingSample) {
						seiNal.pts = matchingSample.pts;
						seiNal.dts = matchingSample.dts;
						lastMatchedSample = matchingSample;
					} else {
						seiNal.pts = lastMatchedSample.pts;
						seiNal.dts = lastMatchedSample.dts;
					}
					result.push(seiNal);
					break;
				default:
					break;
			}
		}
		return result;
	};
	var parseSamples = function parseSamples(truns, baseMediaDecodeTime, tfhd) {
		var currentDts = baseMediaDecodeTime;
		var defaultSampleDuration = tfhd.defaultSampleDuration || 0;
		var defaultSampleSize = tfhd.defaultSampleSize || 0;
		var trackId = tfhd.trackId;
		var allSamples = [];
		truns.forEach(function (trun) {
			var trackRun = inspect.parseTrun(trun);
			var samples = trackRun.samples;
			samples.forEach(function (sample) {
				if (sample.duration === undefined) {
					sample.duration = defaultSampleDuration;
				}
				if (sample.size === undefined) {
					sample.size = defaultSampleSize;
				}
				sample.trackId = trackId;
				sample.dts = currentDts;
				if (sample.compositionTimeOffset === undefined) {
					sample.compositionTimeOffset = 0;
				}
				sample.pts = currentDts + sample.compositionTimeOffset;
				currentDts += sample.duration;
			});
			allSamples = allSamples.concat(samples);
		});
		return allSamples;
	};
	var parseCaptionNals = function parseCaptionNals(segment, videoTrackId) {
		var trafs = probe.findBox(segment, ['moof', 'traf']);
		var mdats = probe.findBox(segment, ['mdat']);
		var captionNals = {};
		var mdatTrafPairs = [];
		mdats.forEach(function (mdat, index) {
			var matchingTraf = trafs[index];
			mdatTrafPairs.push({
				mdat: mdat,
				traf: matchingTraf
			});
		});
		mdatTrafPairs.forEach(function (pair) {
			var mdat = pair.mdat;
			var traf = pair.traf;
			var tfhd = probe.findBox(traf, ['tfhd']);
			var headerInfo = inspect.parseTfhd(tfhd[0]);
			var trackId = headerInfo.trackId;
			var tfdt = probe.findBox(traf, ['tfdt']);
			var baseMediaDecodeTime = tfdt.length > 0 ? inspect.parseTfdt(tfdt[0]).baseMediaDecodeTime : 0;
			var truns = probe.findBox(traf, ['trun']);
			var samples;
			var seiNals;
			if (videoTrackId === trackId && truns.length > 0) {
				samples = parseSamples(truns, baseMediaDecodeTime, headerInfo);
				seiNals = findSeiNals(mdat, samples, trackId);
				if (!captionNals[trackId]) {
					captionNals[trackId] = [];
				}
				captionNals[trackId] = captionNals[trackId].concat(seiNals);
			}
		});
		return captionNals;
	};
	var parseEmbeddedCaptions = function parseEmbeddedCaptions(segment, trackId, timescale) {
		var seiNals;
		if (!trackId) {
			return null;
		}
		seiNals = parseCaptionNals(segment, trackId);
		return {
			seiNals: seiNals[trackId],
			timescale: timescale
		};
	};
	var CaptionParser = function CaptionParser() {
		var isInitialized = false;
		var captionStream;
		var segmentCache;
		var trackId;
		var timescale;
		var parsedCaptions;
		this.isInitialized = function () {
			return isInitialized;
		};
		this.init = function () {
			captionStream = new CaptionStream$2();
			isInitialized = true;
			captionStream.on('data', function (event) {
				event.startTime = event.startPts / timescale;
				event.endTime = event.endPts / timescale;
				parsedCaptions.captions.push(event);
				parsedCaptions.captionStreams[event.stream] = true;
			});
		};
		this.isNewInit = function (videoTrackIds, timescales) {
			if (videoTrackIds && videoTrackIds.length === 0 || timescales && (typeof timescales === 'undefined' ? 'undefined' : _typeof(timescales)) === 'object' && Object.keys(timescales).length === 0) {
				return false;
			}
			return trackId !== videoTrackIds[0] || timescale !== timescales[trackId];
		};
		this.parse = function (segment, videoTrackIds, timescales) {
			var parsedData;
			if (!this.isInitialized()) {
				return null;
			} else if (!videoTrackIds || !timescales) {
				return null;
			} else if (this.isNewInit(videoTrackIds, timescales)) {
				trackId = videoTrackIds[0];
				timescale = timescales[trackId];
			} else if (!trackId || !timescale) {
				segmentCache.push(segment);
				return null;
			}
			while (segmentCache.length > 0) {
				var cachedSegment = segmentCache.shift();
				this.parse(cachedSegment, videoTrackIds, timescales);
			}
			parsedData = parseEmbeddedCaptions(segment, trackId, timescale);
			if (parsedData === null || !parsedData.seiNals) {
				return null;
			}
			this.pushNals(parsedData.seiNals);
			this.flushStream();
			return parsedCaptions;
		};
		this.pushNals = function (nals) {
			if (!this.isInitialized() || !nals || nals.length === 0) {
				return null;
			}
			nals.forEach(function (nal) {
				captionStream.push(nal);
			});
		};
		this.flushStream = function () {
			if (!this.isInitialized()) {
				return null;
			}
			captionStream.flush();
		};
		this.clearParsedCaptions = function () {
			parsedCaptions.captions = [];
			parsedCaptions.captionStreams = {};
		};
		this.resetCaptionStream = function () {
			if (!this.isInitialized()) {
				return null;
			}
			captionStream.reset();
		};
		this.clearAllCaptions = function () {
			this.clearParsedCaptions();
			this.resetCaptionStream();
		};
		this.reset = function () {
			segmentCache = [];
			trackId = null;
			timescale = null;
			if (!parsedCaptions) {
				parsedCaptions = {
					captions: [],
					captionStreams: {}
				};
			} else {
				this.clearParsedCaptions();
			}
			this.resetCaptionStream();
		};
		this.reset();
	};
	var captionParser = CaptionParser;
	var captionParser$1 = Object.freeze({
		default: captionParser,
		__moduleExports: captionParser
	});
	var require$$2$1 = (transmuxer$1 && transmuxer) || transmuxer$1;
	var require$$3 = (captionParser$1 && captionParser) || captionParser$1;
	var mp4$1 = {
		generator: mp4,
		probe: probe,
		Transmuxer: require$$2$1.Transmuxer,
		AudioSegmentStream: require$$2$1.AudioSegmentStream,
		VideoSegmentStream: require$$2$1.VideoSegmentStream,
		CaptionParser: require$$3
	};
	var mp4_6 = mp4$1.CaptionParser;
	var parsePid = function parsePid(packet) {
		var pid = packet[1] & 0x1f;
		pid <<= 8;
		pid |= packet[2];
		return pid;
	};
	var parsePayloadUnitStartIndicator = function parsePayloadUnitStartIndicator(packet) {
		return !!(packet[1] & 0x40);
	};
	var parseAdaptionField = function parseAdaptionField(packet) {
		var offset = 0;
		if ((packet[3] & 0x30) >>> 4 > 0x01) {
			offset += packet[4] + 1;
		}
		return offset;
	};
	var parseType$2 = function parseType(packet, pmtPid) {
		var pid = parsePid(packet);
		if (pid === 0) {
			return 'pat';
		} else if (pid === pmtPid) {
			return 'pmt';
		} else if (pmtPid) {
			return 'pes';
		}
		return null;
	};
	var parsePat = function parsePat(packet) {
		var pusi = parsePayloadUnitStartIndicator(packet);
		var offset = 4 + parseAdaptionField(packet);
		if (pusi) {
			offset += packet[offset] + 1;
		}
		return (packet[offset + 10] & 0x1f) << 8 | packet[offset + 11];
	};
	var parsePmt = function parsePmt(packet) {
		var programMapTable = {};
		var pusi = parsePayloadUnitStartIndicator(packet);
		var payloadOffset = 4 + parseAdaptionField(packet);
		if (pusi) {
			payloadOffset += packet[payloadOffset] + 1;
		}
		if (!(packet[payloadOffset + 5] & 0x01)) {
			return;
		}
		var sectionLength, tableEnd, programInfoLength;
		sectionLength = (packet[payloadOffset + 1] & 0x0f) << 8 | packet[payloadOffset + 2];
		tableEnd = 3 + sectionLength - 4;
		programInfoLength = (packet[payloadOffset + 10] & 0x0f) << 8 | packet[payloadOffset + 11];
		var offset = 12 + programInfoLength;
		while (offset < tableEnd) {
			var i = payloadOffset + offset;
			programMapTable[(packet[i + 1] & 0x1F) << 8 | packet[i + 2]] = packet[i];
			offset += ((packet[i + 3] & 0x0F) << 8 | packet[i + 4]) + 5;
		}
		return programMapTable;
	};
	var parsePesType = function parsePesType(packet, programMapTable) {
		var pid = parsePid(packet);
		var type = programMapTable[pid];
		switch (type) {
			case StreamTypes.H264_STREAM_TYPE:
				return 'video';
			case StreamTypes.ADTS_STREAM_TYPE:
				return 'audio';
			case StreamTypes.METADATA_STREAM_TYPE:
				return 'timed-metadata';
			default:
				return null;
		}
	};
	var parsePesTime = function parsePesTime(packet) {
		var pusi = parsePayloadUnitStartIndicator(packet);
		if (!pusi) {
			return null;
		}
		var offset = 4 + parseAdaptionField(packet);
		if (offset >= packet.byteLength) {
			return null;
		}
		var pes = null;
		var ptsDtsFlags;
		ptsDtsFlags = packet[offset + 7];
		if (ptsDtsFlags & 0xC0) {
			pes = {};
			pes.pts = (packet[offset + 9] & 0x0E) << 27 | (packet[offset + 10] & 0xFF) << 20 | (packet[offset + 11] & 0xFE) << 12 | (packet[offset + 12] & 0xFF) << 5 | (packet[offset + 13] & 0xFE) >>> 3;
			pes.pts *= 4;
			pes.pts += (packet[offset + 13] & 0x06) >>> 1;
			pes.dts = pes.pts;
			if (ptsDtsFlags & 0x40) {
				pes.dts = (packet[offset + 14] & 0x0E) << 27 | (packet[offset + 15] & 0xFF) << 20 | (packet[offset + 16] & 0xFE) << 12 | (packet[offset + 17] & 0xFF) << 5 | (packet[offset + 18] & 0xFE) >>> 3;
				pes.dts *= 4;
				pes.dts += (packet[offset + 18] & 0x06) >>> 1;
			}
		}
		return pes;
	};
	var parseNalUnitType = function parseNalUnitType(type) {
		switch (type) {
			case 0x05:
				return 'slice_layer_without_partitioning_rbsp_idr';
			case 0x06:
				return 'sei_rbsp';
			case 0x07:
				return 'seq_parameter_set_rbsp';
			case 0x08:
				return 'pic_parameter_set_rbsp';
			case 0x09:
				return 'access_unit_delimiter_rbsp';
			default:
				return null;
		}
	};
	var videoPacketContainsKeyFrame = function videoPacketContainsKeyFrame(packet) {
		var offset = 4 + parseAdaptionField(packet);
		var frameBuffer = packet.subarray(offset);
		var frameI = 0;
		var frameSyncPoint = 0;
		var foundKeyFrame = false;
		var nalType;
		for (; frameSyncPoint < frameBuffer.byteLength - 3; frameSyncPoint++) {
			if (frameBuffer[frameSyncPoint + 2] === 1) {
				frameI = frameSyncPoint + 5;
				break;
			}
		}
		while (frameI < frameBuffer.byteLength) {
			switch (frameBuffer[frameI]) {
				case 0:
					if (frameBuffer[frameI - 1] !== 0) {
						frameI += 2;
						break;
					} else if (frameBuffer[frameI - 2] !== 0) {
						frameI++;
						break;
					}
					if (frameSyncPoint + 3 !== frameI - 2) {
						nalType = parseNalUnitType(frameBuffer[frameSyncPoint + 3] & 0x1f);
						if (nalType === 'slice_layer_without_partitioning_rbsp_idr') {
							foundKeyFrame = true;
						}
					}
					do {
						frameI++;
					} while (frameBuffer[frameI] !== 1 && frameI < frameBuffer.length);
					frameSyncPoint = frameI - 2;
					frameI += 3;
					break;
				case 1:
					if (frameBuffer[frameI - 1] !== 0 || frameBuffer[frameI - 2] !== 0) {
						frameI += 3;
						break;
					}
					nalType = parseNalUnitType(frameBuffer[frameSyncPoint + 3] & 0x1f);
					if (nalType === 'slice_layer_without_partitioning_rbsp_idr') {
						foundKeyFrame = true;
					}
					frameSyncPoint = frameI - 2;
					frameI += 3;
					break;
				default:
					frameI += 3;
					break;
			}
		}
		frameBuffer = frameBuffer.subarray(frameSyncPoint);
		frameI -= frameSyncPoint;
		frameSyncPoint = 0;
		if (frameBuffer && frameBuffer.byteLength > 3) {
			nalType = parseNalUnitType(frameBuffer[frameSyncPoint + 3] & 0x1f);
			if (nalType === 'slice_layer_without_partitioning_rbsp_idr') {
				foundKeyFrame = true;
			}
		}
		return foundKeyFrame;
	};
	var probe$1 = {
		parseType: parseType$2,
		parsePat: parsePat,
		parsePmt: parsePmt,
		parsePayloadUnitStartIndicator: parsePayloadUnitStartIndicator,
		parsePesType: parsePesType,
		parsePesTime: parsePesTime,
		videoPacketContainsKeyFrame: videoPacketContainsKeyFrame
	};
	var probe_1$1 = probe$1.parseType;
	var probe_2$1 = probe$1.parsePat;
	var probe_3$1 = probe$1.parsePmt;
	var probe_4$1 = probe$1.parsePayloadUnitStartIndicator;
	var probe_5$1 = probe$1.parsePesType;
	var probe_6 = probe$1.parsePesTime;
	var probe_7 = probe$1.videoPacketContainsKeyFrame;
	var probe$2 = Object.freeze({
		default: probe$1,
		__moduleExports: probe$1,
		parseType: probe_1$1,
		parsePat: probe_2$1,
		parsePmt: probe_3$1,
		parsePayloadUnitStartIndicator: probe_4$1,
		parsePesType: probe_5$1,
		parsePesTime: probe_6,
		videoPacketContainsKeyFrame: probe_7
	});
	var ADTS_SAMPLING_FREQUENCIES$1 = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
	var parseSyncSafeInteger$1 = function parseSyncSafeInteger(data) {
		return data[0] << 21 | data[1] << 14 | data[2] << 7 | data[3];
	};
	var percentEncode$1 = function percentEncode(bytes, start, end) {
		var i,
			result = '';
		for (i = start; i < end; i++) {
			result += '%' + ('00' + bytes[i].toString(16)).slice(-2);
		}
		return result;
	};
	var parseIso88591$1 = function parseIso88591(bytes, start, end) {
		return unescape(percentEncode$1(bytes, start, end));
	};
	var parseId3TagSize = function parseId3TagSize(header, byteIndex) {
		var returnSize = header[byteIndex + 6] << 21 | header[byteIndex + 7] << 14 | header[byteIndex + 8] << 7 | header[byteIndex + 9],
			flags = header[byteIndex + 5],
			footerPresent = (flags & 16) >> 4;
		if (footerPresent) {
			return returnSize + 20;
		}
		return returnSize + 10;
	};
	var parseAdtsSize = function parseAdtsSize(header, byteIndex) {
		var lowThree = (header[byteIndex + 5] & 0xE0) >> 5,
			middle = header[byteIndex + 4] << 3,
			highTwo = header[byteIndex + 3] & 0x3 << 11;
		return highTwo | middle | lowThree;
	};
	var parseType$3 = function parseType(header, byteIndex) {
		if (header[byteIndex] === 'I'.charCodeAt(0) && header[byteIndex + 1] === 'D'.charCodeAt(0) && header[byteIndex + 2] === '3'.charCodeAt(0)) {
			return 'timed-metadata';
		} else if (header[byteIndex] & 0xff === 0xff && (header[byteIndex + 1] & 0xf0) === 0xf0) {
			return 'audio';
		}
		return null;
	};
	var parseSampleRate = function parseSampleRate(packet) {
		var i = 0;
		while (i + 5 < packet.length) {
			if (packet[i] !== 0xFF || (packet[i + 1] & 0xF6) !== 0xF0) {
				i++;
				continue;
			}
			return ADTS_SAMPLING_FREQUENCIES$1[(packet[i + 2] & 0x3c) >>> 2];
		}
		return null;
	};
	var parseAacTimestamp = function parseAacTimestamp(packet) {
		var frameStart, frameSize, frame, frameHeader;
		frameStart = 10;
		if (packet[5] & 0x40) {
			frameStart += 4;
			frameStart += parseSyncSafeInteger$1(packet.subarray(10, 14));
		}
		do {
			frameSize = parseSyncSafeInteger$1(packet.subarray(frameStart + 4, frameStart + 8));
			if (frameSize < 1) {
				return null;
			}
			frameHeader = String.fromCharCode(packet[frameStart], packet[frameStart + 1], packet[frameStart + 2], packet[frameStart + 3]);
			if (frameHeader === 'PRIV') {
				frame = packet.subarray(frameStart + 10, frameStart + frameSize + 10);
				for (var i = 0; i < frame.byteLength; i++) {
					if (frame[i] === 0) {
						var owner = parseIso88591$1(frame, 0, i);
						if (owner === 'com.apple.streaming.transportStreamTimestamp') {
							var d = frame.subarray(i + 1);
							var size = (d[3] & 0x01) << 30 | d[4] << 22 | d[5] << 14 | d[6] << 6 | d[7] >>> 2;
							size *= 4;
							size += d[7] & 0x03;
							return size;
						}
						break;
					}
				}
			}
			frameStart += 10;
			frameStart += frameSize;
		} while (frameStart < packet.byteLength);
		return null;
	};
	var probe$3 = {
		parseId3TagSize: parseId3TagSize,
		parseAdtsSize: parseAdtsSize,
		parseType: parseType$3,
		parseSampleRate: parseSampleRate,
		parseAacTimestamp: parseAacTimestamp
	};
	var probe_1$2 = probe$3.parseId3TagSize;
	var probe_2$2 = probe$3.parseAdtsSize;
	var probe_3$2 = probe$3.parseType;
	var probe_4$2 = probe$3.parseSampleRate;
	var probe_5$2 = probe$3.parseAacTimestamp;
	var probe$4 = Object.freeze({
		default: probe$3,
		__moduleExports: probe$3,
		parseId3TagSize: probe_1$2,
		parseAdtsSize: probe_2$2,
		parseType: probe_3$2,
		parseSampleRate: probe_4$2,
		parseAacTimestamp: probe_5$2
	});
	var require$$1$2 = (probe$2 && probe$1) || probe$2;
	var require$$2$2 = (probe$4 && probe$3) || probe$4;
	var handleRollover$1 = require$$0$2.handleRollover;
	var probe$5 = {};
	probe$5.ts = require$$1$2;
	probe$5.aac = require$$2$2;
	var PES_TIMESCALE = 90000,
		MP2T_PACKET_LENGTH$1 = 188,
		SYNC_BYTE$1 = 0x47;
	var isLikelyAacData$1 = function isLikelyAacData(data) {
		if (data[0] === 'I'.charCodeAt(0) && data[1] === 'D'.charCodeAt(0) && data[2] === '3'.charCodeAt(0)) {
			return true;
		}
		return false;
	};
	var parsePsi_ = function parsePsi_(bytes, pmt) {
		var startIndex = 0,
			endIndex = MP2T_PACKET_LENGTH$1,
			packet,
			type;
		while (endIndex < bytes.byteLength) {
			if (bytes[startIndex] === SYNC_BYTE$1 && bytes[endIndex] === SYNC_BYTE$1) {
				packet = bytes.subarray(startIndex, endIndex);
				type = probe$5.ts.parseType(packet, pmt.pid);
				switch (type) {
					case 'pat':
						if (!pmt.pid) {
							pmt.pid = probe$5.ts.parsePat(packet);
						}
						break;
					case 'pmt':
						if (!pmt.table) {
							pmt.table = probe$5.ts.parsePmt(packet);
						}
						break;
					default:
						break;
				}
				if (pmt.pid && pmt.table) {
					return;
				}
				startIndex += MP2T_PACKET_LENGTH$1;
				endIndex += MP2T_PACKET_LENGTH$1;
				continue;
			}
			startIndex++;
			endIndex++;
		}
	};
	var parseAudioPes_ = function parseAudioPes_(bytes, pmt, result) {
		var startIndex = 0,
			endIndex = MP2T_PACKET_LENGTH$1,
			packet,
			type,
			pesType,
			pusi,
			parsed;
		var endLoop = false;
		while (endIndex < bytes.byteLength) {
			if (bytes[startIndex] === SYNC_BYTE$1 && bytes[endIndex] === SYNC_BYTE$1) {
				packet = bytes.subarray(startIndex, endIndex);
				type = probe$5.ts.parseType(packet, pmt.pid);
				switch (type) {
					case 'pes':
						pesType = probe$5.ts.parsePesType(packet, pmt.table);
						pusi = probe$5.ts.parsePayloadUnitStartIndicator(packet);
						if (pesType === 'audio' && pusi) {
							parsed = probe$5.ts.parsePesTime(packet);
							if (parsed) {
								parsed.type = 'audio';
								result.audio.push(parsed);
								endLoop = true;
							}
						}
						break;
					default:
						break;
				}
				if (endLoop) {
					break;
				}
				startIndex += MP2T_PACKET_LENGTH$1;
				endIndex += MP2T_PACKET_LENGTH$1;
				continue;
			}
			startIndex++;
			endIndex++;
		}
		endIndex = bytes.byteLength;
		startIndex = endIndex - MP2T_PACKET_LENGTH$1;
		endLoop = false;
		while (startIndex >= 0) {
			if (bytes[startIndex] === SYNC_BYTE$1 && bytes[endIndex] === SYNC_BYTE$1) {
				packet = bytes.subarray(startIndex, endIndex);
				type = probe$5.ts.parseType(packet, pmt.pid);
				switch (type) {
					case 'pes':
						pesType = probe$5.ts.parsePesType(packet, pmt.table);
						pusi = probe$5.ts.parsePayloadUnitStartIndicator(packet);
						if (pesType === 'audio' && pusi) {
							parsed = probe$5.ts.parsePesTime(packet);
							if (parsed) {
								parsed.type = 'audio';
								result.audio.push(parsed);
								endLoop = true;
							}
						}
						break;
					default:
						break;
				}
				if (endLoop) {
					break;
				}
				startIndex -= MP2T_PACKET_LENGTH$1;
				endIndex -= MP2T_PACKET_LENGTH$1;
				continue;
			}
			startIndex--;
			endIndex--;
		}
	};
	var parseVideoPes_ = function parseVideoPes_(bytes, pmt, result) {
		var startIndex = 0,
			endIndex = MP2T_PACKET_LENGTH$1,
			packet,
			type,
			pesType,
			pusi,
			parsed,
			frame,
			i,
			pes;
		var endLoop = false;
		var currentFrame = {
			data: [],
			size: 0
		};
		while (endIndex < bytes.byteLength) {
			if (bytes[startIndex] === SYNC_BYTE$1 && bytes[endIndex] === SYNC_BYTE$1) {
				packet = bytes.subarray(startIndex, endIndex);
				type = probe$5.ts.parseType(packet, pmt.pid);
				switch (type) {
					case 'pes':
						pesType = probe$5.ts.parsePesType(packet, pmt.table);
						pusi = probe$5.ts.parsePayloadUnitStartIndicator(packet);
						if (pesType === 'video') {
							if (pusi && !endLoop) {
								parsed = probe$5.ts.parsePesTime(packet);
								if (parsed) {
									parsed.type = 'video';
									result.video.push(parsed);
									endLoop = true;
								}
							}
							if (!result.firstKeyFrame) {
								if (pusi) {
									if (currentFrame.size !== 0) {
										frame = new Uint8Array(currentFrame.size);
										i = 0;
										while (currentFrame.data.length) {
											pes = currentFrame.data.shift();
											frame.set(pes, i);
											i += pes.byteLength;
										}
										if (probe$5.ts.videoPacketContainsKeyFrame(frame)) {
											result.firstKeyFrame = probe$5.ts.parsePesTime(frame);
											result.firstKeyFrame.type = 'video';
										}
										currentFrame.size = 0;
									}
								}
								currentFrame.data.push(packet);
								currentFrame.size += packet.byteLength;
							}
						}
						break;
					default:
						break;
				}
				if (endLoop && result.firstKeyFrame) {
					break;
				}
				startIndex += MP2T_PACKET_LENGTH$1;
				endIndex += MP2T_PACKET_LENGTH$1;
				continue;
			}
			startIndex++;
			endIndex++;
		}
		endIndex = bytes.byteLength;
		startIndex = endIndex - MP2T_PACKET_LENGTH$1;
		endLoop = false;
		while (startIndex >= 0) {
			if (bytes[startIndex] === SYNC_BYTE$1 && bytes[endIndex] === SYNC_BYTE$1) {
				packet = bytes.subarray(startIndex, endIndex);
				type = probe$5.ts.parseType(packet, pmt.pid);
				switch (type) {
					case 'pes':
						pesType = probe$5.ts.parsePesType(packet, pmt.table);
						pusi = probe$5.ts.parsePayloadUnitStartIndicator(packet);
						if (pesType === 'video' && pusi) {
							parsed = probe$5.ts.parsePesTime(packet);
							if (parsed) {
								parsed.type = 'video';
								result.video.push(parsed);
								endLoop = true;
							}
						}
						break;
					default:
						break;
				}
				if (endLoop) {
					break;
				}
				startIndex -= MP2T_PACKET_LENGTH$1;
				endIndex -= MP2T_PACKET_LENGTH$1;
				continue;
			}
			startIndex--;
			endIndex--;
		}
	};
	var adjustTimestamp_ = function adjustTimestamp_(segmentInfo, baseTimestamp) {
		if (segmentInfo.audio && segmentInfo.audio.length) {
			var audioBaseTimestamp = baseTimestamp;
			if (typeof audioBaseTimestamp === 'undefined') {
				audioBaseTimestamp = segmentInfo.audio[0].dts;
			}
			segmentInfo.audio.forEach(function (info) {
				info.dts = handleRollover$1(info.dts, audioBaseTimestamp);
				info.pts = handleRollover$1(info.pts, audioBaseTimestamp);
				info.dtsTime = info.dts / PES_TIMESCALE;
				info.ptsTime = info.pts / PES_TIMESCALE;
			});
		}
		if (segmentInfo.video && segmentInfo.video.length) {
			var videoBaseTimestamp = baseTimestamp;
			if (typeof videoBaseTimestamp === 'undefined') {
				videoBaseTimestamp = segmentInfo.video[0].dts;
			}
			segmentInfo.video.forEach(function (info) {
				info.dts = handleRollover$1(info.dts, videoBaseTimestamp);
				info.pts = handleRollover$1(info.pts, videoBaseTimestamp);
				info.dtsTime = info.dts / PES_TIMESCALE;
				info.ptsTime = info.pts / PES_TIMESCALE;
			});
			if (segmentInfo.firstKeyFrame) {
				var frame = segmentInfo.firstKeyFrame;
				frame.dts = handleRollover$1(frame.dts, videoBaseTimestamp);
				frame.pts = handleRollover$1(frame.pts, videoBaseTimestamp);
				frame.dtsTime = frame.dts / PES_TIMESCALE;
				frame.ptsTime = frame.dts / PES_TIMESCALE;
			}
		}
	};
	var inspectAac_ = function inspectAac_(bytes) {
		var endLoop = false,
			audioCount = 0,
			sampleRate = null,
			timestamp = null,
			frameSize = 0,
			byteIndex = 0,
			packet;
		while (bytes.length - byteIndex >= 3) {
			var type = probe$5.aac.parseType(bytes, byteIndex);
			switch (type) {
				case 'timed-metadata':
					if (bytes.length - byteIndex < 10) {
						endLoop = true;
						break;
					}
					frameSize = probe$5.aac.parseId3TagSize(bytes, byteIndex);
					if (frameSize > bytes.length) {
						endLoop = true;
						break;
					}
					if (timestamp === null) {
						packet = bytes.subarray(byteIndex, byteIndex + frameSize);
						timestamp = probe$5.aac.parseAacTimestamp(packet);
					}
					byteIndex += frameSize;
					break;
				case 'audio':
					if (bytes.length - byteIndex < 7) {
						endLoop = true;
						break;
					}
					frameSize = probe$5.aac.parseAdtsSize(bytes, byteIndex);
					if (frameSize > bytes.length) {
						endLoop = true;
						break;
					}
					if (sampleRate === null) {
						packet = bytes.subarray(byteIndex, byteIndex + frameSize);
						sampleRate = probe$5.aac.parseSampleRate(packet);
					}
					audioCount++;
					byteIndex += frameSize;
					break;
				default:
					byteIndex++;
					break;
			}
			if (endLoop) {
				return null;
			}
		}
		if (sampleRate === null || timestamp === null) {
			return null;
		}
		var audioTimescale = PES_TIMESCALE / sampleRate;
		var result = {
			audio: [{
				type: 'audio',
				dts: timestamp,
				pts: timestamp
			}, {
				type: 'audio',
				dts: timestamp + audioCount * 1024 * audioTimescale,
				pts: timestamp + audioCount * 1024 * audioTimescale
			}]
		};
		return result;
	};
	var inspectTs_ = function inspectTs_(bytes) {
		var pmt = {
			pid: null,
			table: null
		};
		var result = {};
		parsePsi_(bytes, pmt);
		for (var pid in pmt.table) {
			if (pmt.table.hasOwnProperty(pid)) {
				var type = pmt.table[pid];
				switch (type) {
					case StreamTypes.H264_STREAM_TYPE:
						result.video = [];
						parseVideoPes_(bytes, pmt, result);
						if (result.video.length === 0) {
							delete result.video;
						}
						break;
					case StreamTypes.ADTS_STREAM_TYPE:
						result.audio = [];
						parseAudioPes_(bytes, pmt, result);
						if (result.audio.length === 0) {
							delete result.audio;
						}
						break;
					default:
						break;
				}
			}
		}
		return result;
	};
	var inspect$1 = function inspect(bytes, baseTimestamp) {
		var isAacData = isLikelyAacData$1(bytes);
		var result;
		if (isAacData) {
			result = inspectAac_(bytes);
		} else {
			result = inspectTs_(bytes);
		}
		if (!result || !result.audio && !result.video) {
			return null;
		}
		adjustTimestamp_(result, baseTimestamp);
		return result;
	};
	var tsInspector = {
		inspect: inspect$1
	};
	function unpad(padded) {
		return padded.subarray(0, padded.byteLength - padded[padded.byteLength - 1]);
	}
	var classCallCheck$2 = function classCallCheck$$1(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	};
	var createClass$1 = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var inherits$2 = function inherits$$1(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	var possibleConstructorReturn$2 = function possibleConstructorReturn$$1(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	};
	var precompute = function precompute() {
		var tables = [[[], [], [], [], []], [[], [], [], [], []]];
		var encTable = tables[0];
		var decTable = tables[1];
		var sbox = encTable[4];
		var sboxInv = decTable[4];
		var i = void 0;
		var x = void 0;
		var xInv = void 0;
		var d = [];
		var th = [];
		var x2 = void 0;
		var x4 = void 0;
		var x8 = void 0;
		var s = void 0;
		var tEnc = void 0;
		var tDec = void 0;
		for (i = 0; i < 256; i++) {
			th[(d[i] = i << 1 ^ (i >> 7) * 283) ^ i] = i;
		}
		for (x = xInv = 0; !sbox[x]; x ^= x2 || 1, xInv = th[xInv] || 1) {
			s = xInv ^ xInv << 1 ^ xInv << 2 ^ xInv << 3 ^ xInv << 4;
			s = s >> 8 ^ s & 255 ^ 99;
			sbox[x] = s;
			sboxInv[s] = x;
			x8 = d[x4 = d[x2 = d[x]]];
			tDec = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
			tEnc = d[s] * 0x101 ^ s * 0x1010100;
			for (i = 0; i < 4; i++) {
				encTable[i][x] = tEnc = tEnc << 24 ^ tEnc >>> 8;
				decTable[i][s] = tDec = tDec << 24 ^ tDec >>> 8;
			}
		}
		for (i = 0; i < 5; i++) {
			encTable[i] = encTable[i].slice(0);
			decTable[i] = decTable[i].slice(0);
		}
		return tables;
	};
	var aesTables = null;
	var AES = function () {
		function AES(key) {
			classCallCheck$2(this, AES);
			if (!aesTables) {
				aesTables = precompute();
			}
			this._tables = [[aesTables[0][0].slice(), aesTables[0][1].slice(), aesTables[0][2].slice(), aesTables[0][3].slice(), aesTables[0][4].slice()], [aesTables[1][0].slice(), aesTables[1][1].slice(), aesTables[1][2].slice(), aesTables[1][3].slice(), aesTables[1][4].slice()]];
			var i = void 0;
			var j = void 0;
			var tmp = void 0;
			var encKey = void 0;
			var decKey = void 0;
			var sbox = this._tables[0][4];
			var decTable = this._tables[1];
			var keyLen = key.length;
			var rcon = 1;
			if (keyLen !== 4 && keyLen !== 6 && keyLen !== 8) {
				throw new Error('Invalid aes key size');
			}
			encKey = key.slice(0);
			decKey = [];
			this._key = [encKey, decKey];
			for (i = keyLen; i < 4 * keyLen + 28; i++) {
				tmp = encKey[i - 1];
				if (i % keyLen === 0 || keyLen === 8 && i % keyLen === 4) {
					tmp = sbox[tmp >>> 24] << 24 ^ sbox[tmp >> 16 & 255] << 16 ^ sbox[tmp >> 8 & 255] << 8 ^ sbox[tmp & 255];
					if (i % keyLen === 0) {
						tmp = tmp << 8 ^ tmp >>> 24 ^ rcon << 24;
						rcon = rcon << 1 ^ (rcon >> 7) * 283;
					}
				}
				encKey[i] = encKey[i - keyLen] ^ tmp;
			}
			for (j = 0; i; j++, i--) {
				tmp = encKey[j & 3 ? i : i - 4];
				if (i <= 4 || j < 4) {
					decKey[j] = tmp;
				} else {
					decKey[j] = decTable[0][sbox[tmp >>> 24]] ^ decTable[1][sbox[tmp >> 16 & 255]] ^ decTable[2][sbox[tmp >> 8 & 255]] ^ decTable[3][sbox[tmp & 255]];
				}
			}
		}
		AES.prototype.decrypt = function decrypt(encrypted0, encrypted1, encrypted2, encrypted3, out, offset) {
			var key = this._key[1];
			var a = encrypted0 ^ key[0];
			var b = encrypted3 ^ key[1];
			var c = encrypted2 ^ key[2];
			var d = encrypted1 ^ key[3];
			var a2 = void 0;
			var b2 = void 0;
			var c2 = void 0;
			var nInnerRounds = key.length / 4 - 2;
			var i = void 0;
			var kIndex = 4;
			var table = this._tables[1];
			var table0 = table[0];
			var table1 = table[1];
			var table2 = table[2];
			var table3 = table[3];
			var sbox = table[4];
			for (i = 0; i < nInnerRounds; i++) {
				a2 = table0[a >>> 24] ^ table1[b >> 16 & 255] ^ table2[c >> 8 & 255] ^ table3[d & 255] ^ key[kIndex];
				b2 = table0[b >>> 24] ^ table1[c >> 16 & 255] ^ table2[d >> 8 & 255] ^ table3[a & 255] ^ key[kIndex + 1];
				c2 = table0[c >>> 24] ^ table1[d >> 16 & 255] ^ table2[a >> 8 & 255] ^ table3[b & 255] ^ key[kIndex + 2];
				d = table0[d >>> 24] ^ table1[a >> 16 & 255] ^ table2[b >> 8 & 255] ^ table3[c & 255] ^ key[kIndex + 3];
				kIndex += 4;
				a = a2; b = b2; c = c2;
			}
			for (i = 0; i < 4; i++) {
				out[(3 & -i) + offset] = sbox[a >>> 24] << 24 ^ sbox[b >> 16 & 255] << 16 ^ sbox[c >> 8 & 255] << 8 ^ sbox[d & 255] ^ key[kIndex++];
				a2 = a; a = b; b = c; c = d; d = a2;
			}
		};
		return AES;
	}();
	var Stream$3 = function () {
		function Stream() {
			classCallCheck$2(this, Stream);
			this.listeners = {};
		}
		Stream.prototype.on = function on(type, listener) {
			if (!this.listeners[type]) {
				this.listeners[type] = [];
			}
			this.listeners[type].push(listener);
		};
		Stream.prototype.off = function off(type, listener) {
			if (!this.listeners[type]) {
				return false;
			}
			var index = this.listeners[type].indexOf(listener);
			this.listeners[type].splice(index, 1);
			return index > -1;
		};
		Stream.prototype.trigger = function trigger(type) {
			var callbacks = this.listeners[type];
			if (!callbacks) {
				return;
			}
			if (arguments.length === 2) {
				var length = callbacks.length;
				for (var i = 0; i < length; ++i) {
					callbacks[i].call(this, arguments[1]);
				}
			} else {
				var args = Array.prototype.slice.call(arguments, 1);
				var _length = callbacks.length;
				for (var _i = 0; _i < _length; ++_i) {
					callbacks[_i].apply(this, args);
				}
			}
		};
		Stream.prototype.dispose = function dispose() {
			this.listeners = {};
		};
		Stream.prototype.pipe = function pipe(destination) {
			this.on('data', function (data) {
				destination.push(data);
			});
		};
		return Stream;
	}();
	var AsyncStream = function (_Stream) {
		inherits$2(AsyncStream, _Stream);
		function AsyncStream() {
			classCallCheck$2(this, AsyncStream);
			var _this = possibleConstructorReturn$2(this, _Stream.call(this, Stream$3));
			_this.jobs = [];
			_this.delay = 1;
			_this.timeout_ = null;
			return _this;
		}
		AsyncStream.prototype.processJob_ = function processJob_() {
			this.jobs.shift()();
			if (this.jobs.length) {
				this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay);
			} else {
				this.timeout_ = null;
			}
		};
		AsyncStream.prototype.push = function push(job) {
			this.jobs.push(job);
			if (!this.timeout_) {
				this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay);
			}
		};
		return AsyncStream;
	}(Stream$3);
	var ntoh = function ntoh(word) {
		return word << 24 | (word & 0xff00) << 8 | (word & 0xff0000) >> 8 | word >>> 24;
	};
	var decrypt = function decrypt(encrypted, key, initVector) {
		var encrypted32 = new Int32Array(encrypted.buffer, encrypted.byteOffset, encrypted.byteLength >> 2);
		var decipher = new AES(Array.prototype.slice.call(key));
		var decrypted = new Uint8Array(encrypted.byteLength);
		var decrypted32 = new Int32Array(decrypted.buffer);
		var init0 = void 0;
		var init1 = void 0;
		var init2 = void 0;
		var init3 = void 0;
		var encrypted0 = void 0;
		var encrypted1 = void 0;
		var encrypted2 = void 0;
		var encrypted3 = void 0;
		var wordIx = void 0;
		init0 = initVector[0];
		init1 = initVector[1];
		init2 = initVector[2];
		init3 = initVector[3];
		for (wordIx = 0; wordIx < encrypted32.length; wordIx += 4) {
			encrypted0 = ntoh(encrypted32[wordIx]);
			encrypted1 = ntoh(encrypted32[wordIx + 1]);
			encrypted2 = ntoh(encrypted32[wordIx + 2]);
			encrypted3 = ntoh(encrypted32[wordIx + 3]);
			decipher.decrypt(encrypted0, encrypted1, encrypted2, encrypted3, decrypted32, wordIx);
			decrypted32[wordIx] = ntoh(decrypted32[wordIx] ^ init0);
			decrypted32[wordIx + 1] = ntoh(decrypted32[wordIx + 1] ^ init1);
			decrypted32[wordIx + 2] = ntoh(decrypted32[wordIx + 2] ^ init2);
			decrypted32[wordIx + 3] = ntoh(decrypted32[wordIx + 3] ^ init3);
			init0 = encrypted0;
			init1 = encrypted1;
			init2 = encrypted2;
			init3 = encrypted3;
		}
		return decrypted;
	};
	var Decrypter = function () {
		function Decrypter(encrypted, key, initVector, done) {
			classCallCheck$2(this, Decrypter);
			var step = Decrypter.STEP;
			var encrypted32 = new Int32Array(encrypted.buffer);
			var decrypted = new Uint8Array(encrypted.byteLength);
			var i = 0;
			this.asyncStream_ = new AsyncStream();
			this.asyncStream_.push(this.decryptChunk_(encrypted32.subarray(i, i + step), key, initVector, decrypted));
			for (i = step; i < encrypted32.length; i += step) {
				initVector = new Uint32Array([ntoh(encrypted32[i - 4]), ntoh(encrypted32[i - 3]), ntoh(encrypted32[i - 2]), ntoh(encrypted32[i - 1])]);
				this.asyncStream_.push(this.decryptChunk_(encrypted32.subarray(i, i + step), key, initVector, decrypted));
			}
			this.asyncStream_.push(function () {
				done(null, unpad(decrypted));
			});
		}
		Decrypter.prototype.decryptChunk_ = function decryptChunk_(encrypted, key, initVector, decrypted) {
			return function () {
				var bytes = decrypt(encrypted, key, initVector);
				decrypted.set(bytes, encrypted.byteOffset);
			};
		};
		createClass$1(Decrypter, null, [{
			key: 'STEP',
			get: function get$$1() {
				return 32000;
			}
		}]);
		return Decrypter;
	}();
	var resolveUrl$1 = function resolveUrl(baseURL, relativeURL) {
		if (/^[a-z]+:/i.test(relativeURL)) {
			return relativeURL;
		}
		if (!/\/\//i.test(baseURL)) {
			baseURL = urlToolkit.buildAbsoluteURL(window_1.location.href, baseURL);
		}
		return urlToolkit.buildAbsoluteURL(baseURL, relativeURL);
	};
	var classCallCheck$3 = function classCallCheck$$1(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	};
	var createClass$2 = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var get$2 = function get$$1(object, property, receiver) {
		if (object === null) object = Function.prototype;
		var desc = Object.getOwnPropertyDescriptor(object, property);
		if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);
			if (parent === null) {
				return undefined;
			} else {
				return get$$1(parent, property, receiver);
			}
		} else if ("value" in desc) {
			return desc.value;
		} else {
			var getter = desc.get;
			if (getter === undefined) {
				return undefined;
			}
			return getter.call(receiver);
		}
	};
	var inherits$3 = function inherits$$1(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
		}
		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	var possibleConstructorReturn$3 = function possibleConstructorReturn$$1(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}
		return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	};
	var slicedToArray$1 = function () {
		function sliceIterator(arr, i) {
			var _arr = [];
			var _n = true;
			var _d = false;
			var _e = undefined;
			try {
				for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
					_arr.push(_s.value);
					if (i && _arr.length === i) break;
				}
			} catch (err) {
				_d = true;
				_e = err;
			} finally {
				try {
					if (!_n && _i["return"]) _i["return"]();
				} finally {
					if (_d) throw _e;
				}
			}
			return _arr;
		}
		return function (arr, i) {
			if (Array.isArray(arr)) {
				return arr;
			} else if (Symbol.iterator in Object(arr)) {
				return sliceIterator(arr, i);
			} else {
				throw new TypeError("Invalid attempt to destructure non-iterable instance");
			}
		};
	}();
	var mergeOptions$1 = videojs$1.mergeOptions,
		EventTarget$1 = videojs$1.EventTarget,
		log$2 = videojs$1.log;
	var forEachMediaGroup = function forEachMediaGroup(master, callback) {
		['AUDIO', 'SUBTITLES'].forEach(function (mediaType) {
			for (var groupKey in master.mediaGroups[mediaType]) {
				for (var labelKey in master.mediaGroups[mediaType][groupKey]) {
					var mediaProperties = master.mediaGroups[mediaType][groupKey][labelKey];
					callback(mediaProperties, mediaType, groupKey, labelKey);
				}
			}
		});
	};
	var updateSegments = function updateSegments(original, update, offset) {
		var result = update.slice();
		offset = offset || 0;
		var length = Math.min(original.length, update.length + offset);
		for (var i = offset; i < length; i++) {
			result[i - offset] = mergeOptions$1(original[i], result[i - offset]);
		}
		return result;
	};
	var resolveSegmentUris = function resolveSegmentUris(segment, baseUri) {
		if (!segment.resolvedUri) {
			segment.resolvedUri = resolveUrl$1(baseUri, segment.uri);
		}
		if (segment.key && !segment.key.resolvedUri) {
			segment.key.resolvedUri = resolveUrl$1(baseUri, segment.key.uri);
		}
		if (segment.map && !segment.map.resolvedUri) {
			segment.map.resolvedUri = resolveUrl$1(baseUri, segment.map.uri);
		}
	};
	var updateMaster = function updateMaster(master, media) {
		var result = mergeOptions$1(master, {});
		var playlist = result.playlists[media.uri];
		if (!playlist) {
			return null;
		}
		if (playlist.segments && media.segments && playlist.segments.length === media.segments.length && playlist.mediaSequence === media.mediaSequence) {
			return null;
		}
		var mergedPlaylist = mergeOptions$1(playlist, media);
		if (playlist.segments) {
			mergedPlaylist.segments = updateSegments(playlist.segments, media.segments, media.mediaSequence - playlist.mediaSequence);
		}
		mergedPlaylist.segments.forEach(function (segment) {
			resolveSegmentUris(segment, mergedPlaylist.resolvedUri);
		});
		for (var i = 0; i < result.playlists.length; i++) {
			if (result.playlists[i].uri === media.uri) {
				result.playlists[i] = mergedPlaylist;
			}
		}
		result.playlists[media.uri] = mergedPlaylist;
		return result;
	};
	var setupMediaPlaylists = function setupMediaPlaylists(master) {
		var i = master.playlists.length;
		while (i--) {
			var playlist = master.playlists[i];
			master.playlists[playlist.uri] = playlist;
			playlist.resolvedUri = resolveUrl$1(master.uri, playlist.uri);
			playlist.id = i;
			if (!playlist.attributes) {
				playlist.attributes = {};
				log$2.warn('Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.');
			}
		}
	};
	var resolveMediaGroupUris = function resolveMediaGroupUris(master) {
		forEachMediaGroup(master, function (properties) {
			if (properties.uri) {
				properties.resolvedUri = resolveUrl$1(master.uri, properties.uri);
			}
		});
	};
	var refreshDelay = function refreshDelay(media, update) {
		var lastSegment = media.segments[media.segments.length - 1];
		var delay = void 0;
		if (update && lastSegment && lastSegment.duration) {
			delay = lastSegment.duration * 1000;
		} else {
			delay = (media.targetDuration || 10) * 500;
		}
		return delay;
	};
	var PlaylistLoader = function (_EventTarget) {
		inherits$3(PlaylistLoader, _EventTarget);
		function PlaylistLoader(srcUrl, hls, withCredentials) {
			classCallCheck$3(this, PlaylistLoader);
			var _this = possibleConstructorReturn$3(this, (PlaylistLoader.__proto__ || Object.getPrototypeOf(PlaylistLoader)).call(this));
			_this.srcUrl = srcUrl;
			_this.hls_ = hls;
			_this.withCredentials = withCredentials;
			if (!_this.srcUrl) {
				throw new Error('A non-empty playlist URL is required');
			}
			_this.state = 'HAVE_NOTHING';
			_this.on('mediaupdatetimeout', function () {
				if (_this.state !== 'HAVE_METADATA') {
					return;
				}
				_this.state = 'HAVE_CURRENT_METADATA';
				_this.request = _this.hls_.xhr({
					uri: resolveUrl$1(_this.master.uri, _this.media().uri),
					withCredentials: _this.withCredentials
				}, function (error, req) {
					if (!_this.request) {
						return;
					}
					if (error) {
						return _this.playlistRequestError(_this.request, _this.media().uri, 'HAVE_METADATA');
					}
					_this.haveMetadata(_this.request, _this.media().uri);
				});
			});
			return _this;
		}
		createClass$2(PlaylistLoader, [{
			key: 'playlistRequestError',
			value: function playlistRequestError(xhr, url, startingState) {
				this.request = null;
				if (startingState) {
					this.state = startingState;
				}
				this.error = {
					playlist: this.master.playlists[url],
					status: xhr.status,
					message: 'HLS playlist request error at URL: ' + url,
					responseText: xhr.responseText,
					code: xhr.status >= 500 ? 4 : 2
				};
				this.trigger('error');
			}
		}, {
			key: 'haveMetadata',
			value: function haveMetadata(xhr, url) {
				var _this2 = this;
				this.request = null;
				this.state = 'HAVE_METADATA';
				var parser = new Parser();
				parser.push(xhr.responseText);
				parser.end();
				parser.manifest.uri = url;
				parser.manifest.attributes = parser.manifest.attributes || {};
				var update = updateMaster(this.master, parser.manifest);
				this.targetDuration = parser.manifest.targetDuration;
				if (update) {
					this.master = update;
					this.media_ = this.master.playlists[parser.manifest.uri];
				} else {
					this.trigger('playlistunchanged');
				}
				if (!this.media().endList) {
					window_1.clearTimeout(this.mediaUpdateTimeout);
					this.mediaUpdateTimeout = window_1.setTimeout(function () {
						_this2.trigger('mediaupdatetimeout');
					}, refreshDelay(this.media(), !!update));
				}
				this.trigger('loadedplaylist');
			}
		}, {
			key: 'dispose',
			value: function dispose() {
				this.stopRequest();
				window_1.clearTimeout(this.mediaUpdateTimeout);
			}
		}, {
			key: 'stopRequest',
			value: function stopRequest() {
				if (this.request) {
					var oldRequest = this.request;
					this.request = null;
					oldRequest.onreadystatechange = null;
					oldRequest.abort();
				}
			}
		}, {
			key: 'media',
			value: function media(playlist) {
				var _this3 = this;
				if (!playlist) {
					return this.media_;
				}
				if (this.state === 'HAVE_NOTHING') {
					throw new Error('Cannot switch media playlist from ' + this.state);
				}
				var startingState = this.state;
				if (typeof playlist === 'string') {
					if (!this.master.playlists[playlist]) {
						throw new Error('Unknown playlist URI: ' + playlist);
					}
					playlist = this.master.playlists[playlist];
				}
				var mediaChange = !this.media_ || playlist.uri !== this.media_.uri;
				if (this.master.playlists[playlist.uri].endList) {
					if (this.request) {
						this.request.onreadystatechange = null;
						this.request.abort();
						this.request = null;
					}
					this.state = 'HAVE_METADATA';
					this.media_ = playlist;
					if (mediaChange) {
						this.trigger('mediachanging');
						this.trigger('mediachange');
					}
					return;
				}
				if (!mediaChange) {
					return;
				}
				this.state = 'SWITCHING_MEDIA';
				if (this.request) {
					if (resolveUrl$1(this.master.uri, playlist.uri) === this.request.url) {
						return;
					}
					this.request.onreadystatechange = null;
					this.request.abort();
					this.request = null;
				}
				if (this.media_) {
					this.trigger('mediachanging');
				}
				this.request = this.hls_.xhr({
					uri: resolveUrl$1(this.master.uri, playlist.uri),
					withCredentials: this.withCredentials
				}, function (error, req) {
					if (!_this3.request) {
						return;
					}
					if (error) {
						return _this3.playlistRequestError(_this3.request, playlist.uri, startingState);
					}
					_this3.haveMetadata(req, playlist.uri);
					if (startingState === 'HAVE_MASTER') {
						_this3.trigger('loadedmetadata');
					} else {
						_this3.trigger('mediachange');
					}
				});
			}
		}, {
			key: 'pause',
			value: function pause() {
				this.stopRequest();
				window_1.clearTimeout(this.mediaUpdateTimeout);
				if (this.state === 'HAVE_NOTHING') {
					this.started = false;
				}
				if (this.state === 'SWITCHING_MEDIA') {
					if (this.media_) {
						this.state = 'HAVE_METADATA';
					} else {
						this.state = 'HAVE_MASTER';
					}
				} else if (this.state === 'HAVE_CURRENT_METADATA') {
					this.state = 'HAVE_METADATA';
				}
			}
		}, {
			key: 'load',
			value: function load(isFinalRendition) {
				var _this4 = this;
				window_1.clearTimeout(this.mediaUpdateTimeout);
				var media = this.media();
				if (isFinalRendition) {
					var delay = media ? media.targetDuration / 2 * 1000 : 5 * 1000;
					this.mediaUpdateTimeout = window_1.setTimeout(function () {
						return _this4.load();
					}, delay);
					return;
				}
				if (!this.started) {
					this.start();
					return;
				}
				if (media && !media.endList) {
					this.trigger('mediaupdatetimeout');
				} else {
					this.trigger('loadedplaylist');
				}
			}
		}, {
			key: 'start',
			value: function start() {
				var _this5 = this;
				this.started = true;
				this.request = this.hls_.xhr({
					uri: this.srcUrl,
					withCredentials: this.withCredentials
				}, function (error, req) {
					if (!_this5.request) {
						return;
					}
					_this5.request = null;
					if (error) {
						_this5.error = {
							status: req.status,
							message: 'HLS playlist request error at URL: ' + _this5.srcUrl,
							responseText: req.responseText,
							code: 2
						};
						if (_this5.state === 'HAVE_NOTHING') {
							_this5.started = false;
						}
						return _this5.trigger('error');
					}
					var parser = new Parser();
					parser.push(req.responseText);
					parser.end();
					_this5.state = 'HAVE_MASTER';
					parser.manifest.uri = _this5.srcUrl;
					if (parser.manifest.playlists) {
						_this5.master = parser.manifest;
						setupMediaPlaylists(_this5.master);
						resolveMediaGroupUris(_this5.master);
						_this5.trigger('loadedplaylist');
						if (!_this5.request) {
							_this5.media(parser.manifest.playlists[0]);
						}
						return;
					}
					_this5.master = {
						mediaGroups: {
							'AUDIO': {},
							'VIDEO': {},
							'CLOSED-CAPTIONS': {},
							'SUBTITLES': {}
						},
						uri: window_1.location.href,
						playlists: [{
							uri: _this5.srcUrl,
							id: 0
						}]
					};
					_this5.master.playlists[_this5.srcUrl] = _this5.master.playlists[0];
					_this5.master.playlists[0].resolvedUri = _this5.srcUrl;
					_this5.master.playlists[0].attributes = _this5.master.playlists[0].attributes || {};
					_this5.haveMetadata(req, _this5.srcUrl);
					return _this5.trigger('loadedmetadata');
				});
			}
		}]);
		return PlaylistLoader;
	}(EventTarget$1);
	var createTimeRange = videojs$1.createTimeRange;
	var backwardDuration = function backwardDuration(playlist, endSequence) {
		var result = 0;
		var i = endSequence - playlist.mediaSequence;
		var segment = playlist.segments[i];
		if (segment) {
			if (typeof segment.start !== 'undefined') {
				return { result: segment.start, precise: true };
			}
			if (typeof segment.end !== 'undefined') {
				return {
					result: segment.end - segment.duration,
					precise: true
				};
			}
		}
		while (i--) {
			segment = playlist.segments[i];
			if (typeof segment.end !== 'undefined') {
				return { result: result + segment.end, precise: true };
			}
			result += segment.duration;
			if (typeof segment.start !== 'undefined') {
				return { result: result + segment.start, precise: true };
			}
		}
		return { result: result, precise: false };
	};
	var forwardDuration = function forwardDuration(playlist, endSequence) {
		var result = 0;
		var segment = void 0;
		var i = endSequence - playlist.mediaSequence;
		for (; i < playlist.segments.length; i++) {
			segment = playlist.segments[i];
			if (typeof segment.start !== 'undefined') {
				return {
					result: segment.start - result,
					precise: true
				};
			}
			result += segment.duration;
			if (typeof segment.end !== 'undefined') {
				return {
					result: segment.end - result,
					precise: true
				};
			}
		}
		return { result: -1, precise: false };
	};
	var intervalDuration = function intervalDuration(playlist, endSequence, expired) {
		var backward = void 0;
		var forward = void 0;
		if (typeof endSequence === 'undefined') {
			endSequence = playlist.mediaSequence + playlist.segments.length;
		}
		if (endSequence < playlist.mediaSequence) {
			return 0;
		}
		backward = backwardDuration(playlist, endSequence);
		if (backward.precise) {
			return backward.result;
		}
		forward = forwardDuration(playlist, endSequence);
		if (forward.precise) {
			return forward.result;
		}
		return backward.result + expired;
	};
	var duration = function duration(playlist, endSequence, expired) {
		if (!playlist) {
			return 0;
		}
		if (typeof expired !== 'number') {
			expired = 0;
		}
		if (typeof endSequence === 'undefined') {
			if (playlist.totalDuration) {
				return playlist.totalDuration;
			}
			if (!playlist.endList) {
				return window_1.Infinity;
			}
		}
		return intervalDuration(playlist, endSequence, expired);
	};
	var sumDurations = function sumDurations(playlist, startIndex, endIndex) {
		var durations = 0;
		if (startIndex > endIndex) {
			var _ref = [endIndex, startIndex];
			startIndex = _ref[0];
			endIndex = _ref[1];
		}
		if (startIndex < 0) {
			for (var i = startIndex; i < Math.min(0, endIndex); i++) {
				durations += playlist.targetDuration;
			}
			startIndex = 0;
		}
		for (var _i = startIndex; _i < endIndex; _i++) {
			durations += playlist.segments[_i].duration;
		}
		return durations;
	};
	var safeLiveIndex = function safeLiveIndex(playlist) {
		if (!playlist.segments.length) {
			return 0;
		}
		var i = playlist.segments.length - 1;
		var distanceFromEnd = playlist.segments[i].duration || playlist.targetDuration;
		var safeDistance = distanceFromEnd + playlist.targetDuration * 2;
		while (i--) {
			distanceFromEnd += playlist.segments[i].duration;
			if (distanceFromEnd >= safeDistance) {
				break;
			}
		}
		return Math.max(0, i);
	};
	var playlistEnd = function playlistEnd(playlist, expired, useSafeLiveEnd) {
		if (!playlist || !playlist.segments) {
			return null;
		}
		if (playlist.endList) {
			return duration(playlist);
		}
		if (expired === null) {
			return null;
		}
		expired = expired || 0;
		var endSequence = useSafeLiveEnd ? safeLiveIndex(playlist) : playlist.segments.length;
		return intervalDuration(playlist, playlist.mediaSequence + endSequence, expired);
	};
	var seekable = function seekable(playlist, expired) {
		var useSafeLiveEnd = true;
		var seekableStart = expired || 0;
		var seekableEnd = playlistEnd(playlist, expired, useSafeLiveEnd);
		if (seekableEnd === null) {
			return createTimeRange();
		}
		return createTimeRange(seekableStart, seekableEnd);
	};
	var isWholeNumber = function isWholeNumber(num) {
		return num - Math.floor(num) === 0;
	};
	var roundSignificantDigit = function roundSignificantDigit(increment, num) {
		if (isWholeNumber(num)) {
			return num + increment * 0.1;
		}
		var numDecimalDigits = num.toString().split('.')[1].length;
		for (var i = 1; i <= numDecimalDigits; i++) {
			var scale = Math.pow(10, i);
			var temp = num * scale;
			if (isWholeNumber(temp) || i === numDecimalDigits) {
				return (temp + increment) / scale;
			}
		}
	};
	var ceilLeastSignificantDigit = roundSignificantDigit.bind(null, 1);
	var floorLeastSignificantDigit = roundSignificantDigit.bind(null, -1);
	var getMediaInfoForTime = function getMediaInfoForTime(playlist, currentTime, startIndex, startTime) {
		var i = void 0;
		var segment = void 0;
		var numSegments = playlist.segments.length;
		var time = currentTime - startTime;
		if (time < 0) {
			if (startIndex > 0) {
				for (i = startIndex - 1; i >= 0; i--) {
					segment = playlist.segments[i];
					time += floorLeastSignificantDigit(segment.duration);
					if (time > 0) {
						return {
							mediaIndex: i,
							startTime: startTime - sumDurations(playlist, startIndex, i)
						};
					}
				}
			}
			return {
				mediaIndex: 0,
				startTime: currentTime
			};
		}
		if (startIndex < 0) {
			for (i = startIndex; i < 0; i++) {
				time -= playlist.targetDuration;
				if (time < 0) {
					return {
						mediaIndex: 0,
						startTime: currentTime
					};
				}
			}
			startIndex = 0;
		}
		for (i = startIndex; i < numSegments; i++) {
			segment = playlist.segments[i];
			time -= ceilLeastSignificantDigit(segment.duration);
			if (time < 0) {
				return {
					mediaIndex: i,
					startTime: startTime + sumDurations(playlist, startIndex, i)
				};
			}
		}
		return {
			mediaIndex: numSegments - 1,
			startTime: currentTime
		};
	};
	var isBlacklisted = function isBlacklisted(playlist) {
		return playlist.excludeUntil && playlist.excludeUntil > Date.now();
	};
	var isIncompatible = function isIncompatible(playlist) {
		return playlist.excludeUntil && playlist.excludeUntil === Infinity;
	};
	var isEnabled = function isEnabled(playlist) {
		var blacklisted = isBlacklisted(playlist);
		return !playlist.disabled && !blacklisted;
	};
	var isDisabled = function isDisabled(playlist) {
		return playlist.disabled;
	};
	var isAes = function isAes(media) {
		for (var i = 0; i < media.segments.length; i++) {
			if (media.segments[i].key) {
				return true;
			}
		}
		return false;
	};
	var isFmp4 = function isFmp4(media) {
		for (var i = 0; i < media.segments.length; i++) {
			if (media.segments[i].map) {
				return true;
			}
		}
		return false;
	};
	var hasAttribute = function hasAttribute(attr, playlist) {
		return playlist.attributes && playlist.attributes[attr];
	};
	var estimateSegmentRequestTime = function estimateSegmentRequestTime(segmentDuration, bandwidth, playlist) {
		var bytesReceived = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
		if (!hasAttribute('BANDWIDTH', playlist)) {
			return NaN;
		}
		var size = segmentDuration * playlist.attributes.BANDWIDTH;
		return (size - bytesReceived * 8) / bandwidth;
	};
	var isLowestEnabledRendition = function isLowestEnabledRendition(master, media) {
		if (master.playlists.length === 1) {
			return true;
		}
		var currentBandwidth = media.attributes.BANDWIDTH || Number.MAX_VALUE;
		return master.playlists.filter(function (playlist) {
			if (!isEnabled(playlist)) {
				return false;
			}
			return (playlist.attributes.BANDWIDTH || 0) < currentBandwidth;
		}).length === 0;
	};
	var Playlist = {
		duration: duration,
		seekable: seekable,
		safeLiveIndex: safeLiveIndex,
		getMediaInfoForTime: getMediaInfoForTime,
		isEnabled: isEnabled,
		isDisabled: isDisabled,
		isBlacklisted: isBlacklisted,
		isIncompatible: isIncompatible,
		playlistEnd: playlistEnd,
		isAes: isAes,
		isFmp4: isFmp4,
		hasAttribute: hasAttribute,
		estimateSegmentRequestTime: estimateSegmentRequestTime,
		isLowestEnabledRendition: isLowestEnabledRendition
	};
	var videojsXHR = videojs$1.xhr,
		mergeOptions$1$1 = videojs$1.mergeOptions;
	var xhrFactory = function xhrFactory() {
		var xhr = function XhrFunction(options, callback) {
			options = mergeOptions$1$1({
				timeout: 45e3
			}, options);
			var beforeRequest = XhrFunction.beforeRequest || videojs$1.Hls.xhr.beforeRequest;
			if (beforeRequest && typeof beforeRequest === 'function') {
				var newOptions = beforeRequest(options);
				if (newOptions) {
					options = newOptions;
				}
			}
			var request = videojsXHR(options, function (error, response) {
				var reqResponse = request.response;
				if (!error && reqResponse) {
					request.responseTime = Date.now();
					request.roundTripTime = request.responseTime - request.requestTime;
					request.bytesReceived = reqResponse.byteLength || reqResponse.length;
					if (!request.bandwidth) {
						request.bandwidth = Math.floor(request.bytesReceived / request.roundTripTime * 8 * 1000);
					}
				}
				if (response.headers) {
					request.responseHeaders = response.headers;
				}
				if (error && error.code === 'ETIMEDOUT') {
					request.timedout = true;
				}
				if (!error && !request.aborted && response.statusCode !== 200 && response.statusCode !== 206 && response.statusCode !== 0) {
					error = new Error('XHR Failed with a response of: ' + (request && (reqResponse || request.responseText)));
				}
				callback(error, request);
			});
			var originalAbort = request.abort;
			request.abort = function () {
				request.aborted = true;
				return originalAbort.apply(request, arguments);
			};
			request.uri = options.uri;
			request.requestTime = Date.now();
			return request;
		};
		return xhr;
	};
	var textRange = function textRange(range, i) {
		return range.start(i) + '-' + range.end(i);
	};
	var formatHexString = function formatHexString(e, i) {
		var value = e.toString(16);
		return '00'.substring(0, 2 - value.length) + value + (i % 2 ? ' ' : '');
	};
	var formatAsciiString = function formatAsciiString(e) {
		if (e >= 0x20 && e < 0x7e) {
			return String.fromCharCode(e);
		}
		return '.';
	};
	var createTransferableMessage = function createTransferableMessage(message) {
		var transferable = {};
		Object.keys(message).forEach(function (key) {
			var value = message[key];
			if (ArrayBuffer.isView(value)) {
				transferable[key] = {
					bytes: value.buffer,
					byteOffset: value.byteOffset,
					byteLength: value.byteLength
				};
			} else {
				transferable[key] = value;
			}
		});
		return transferable;
	};
	var initSegmentId = function initSegmentId(initSegment) {
		var byterange = initSegment.byterange || {
			length: Infinity,
			offset: 0
		};
		return [byterange.length, byterange.offset, initSegment.resolvedUri].join(',');
	};
	var hexDump = function hexDump(data) {
		var bytes = Array.prototype.slice.call(data);
		var step = 16;
		var result = '';
		var hex = void 0;
		var ascii = void 0;
		for (var j = 0; j < bytes.length / step; j++) {
			hex = bytes.slice(j * step, j * step + step).map(formatHexString).join('');
			ascii = bytes.slice(j * step, j * step + step).map(formatAsciiString).join('');
			result += hex + ' ' + ascii + '\n';
		}
		return result;
	};
	var tagDump = function tagDump(_ref) {
		var bytes = _ref.bytes;
		return hexDump(bytes);
	};
	var textRanges = function textRanges(ranges) {
		var result = '';
		var i = void 0;
		for (i = 0; i < ranges.length; i++) {
			result += textRange(ranges, i) + ' ';
		}
		return result;
	};
	var utils = Object.freeze({
		createTransferableMessage: createTransferableMessage,
		initSegmentId: initSegmentId,
		hexDump: hexDump,
		tagDump: tagDump,
		textRanges: textRanges
	});
	var TIME_FUDGE_FACTOR = 1 / 30;
	var SAFE_TIME_DELTA = TIME_FUDGE_FACTOR * 3;
	var filterRanges = function filterRanges(timeRanges, predicate) {
		var results = [];
		var i = void 0;
		if (timeRanges && timeRanges.length) {
			for (i = 0; i < timeRanges.length; i++) {
				if (predicate(timeRanges.start(i), timeRanges.end(i))) {
					results.push([timeRanges.start(i), timeRanges.end(i)]);
				}
			}
		}
		return videojs$1.createTimeRanges(results);
	};
	var findRange = function findRange(buffered, time) {
		return filterRanges(buffered, function (start, end) {
			return start - TIME_FUDGE_FACTOR <= time && end + TIME_FUDGE_FACTOR >= time;
		});
	};
	var findNextRange = function findNextRange(timeRanges, time) {
		return filterRanges(timeRanges, function (start) {
			return start - TIME_FUDGE_FACTOR >= time;
		});
	};
	var findGaps = function findGaps(buffered) {
		if (buffered.length < 2) {
			return videojs$1.createTimeRanges();
		}
		var ranges = [];
		for (var i = 1; i < buffered.length; i++) {
			var start = buffered.end(i - 1);
			var end = buffered.start(i);
			ranges.push([start, end]);
		}
		return videojs$1.createTimeRanges(ranges);
	};
	var printableRange = function printableRange(range) {
		var strArr = [];
		if (!range || !range.length) {
			return '';
		}
		for (var i = 0; i < range.length; i++) {
			strArr.push(range.start(i) + ' => ' + range.end(i));
		}
		return strArr.join(', ');
	};
	var timeUntilRebuffer = function timeUntilRebuffer(buffered, currentTime) {
		var playbackRate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
		var bufferedEnd = buffered.length ? buffered.end(buffered.length - 1) : 0;
		return (bufferedEnd - currentTime) / playbackRate;
	};
	var timeRangesToArray = function timeRangesToArray(timeRanges) {
		var timeRangesList = [];
		for (var i = 0; i < timeRanges.length; i++) {
			timeRangesList.push({
				start: timeRanges.start(i),
				end: timeRanges.end(i)
			});
		}
		return timeRangesList;
	};
	var createTextTracksIfNecessary = function createTextTracksIfNecessary(sourceBuffer, mediaSource, segment) {
		var player = mediaSource.player_;
		if (segment.captions && segment.captions.length) {
			if (!sourceBuffer.inbandTextTracks_) {
				sourceBuffer.inbandTextTracks_ = {};
			}
			for (var trackId in segment.captionStreams) {
				if (!sourceBuffer.inbandTextTracks_[trackId]) {
					player.tech_.trigger({ type: 'usage', name: 'hls-608' });
					var track = player.textTracks().getTrackById(trackId);
					if (track) {
						sourceBuffer.inbandTextTracks_[trackId] = track;
					} else {
						sourceBuffer.inbandTextTracks_[trackId] = player.addRemoteTextTrack({
							kind: 'captions',
							id: trackId,
							label: trackId
						}, false).track;
					}
				}
			}
		}
		if (segment.metadata && segment.metadata.length && !sourceBuffer.metadataTrack_) {
			sourceBuffer.metadataTrack_ = player.addRemoteTextTrack({
				kind: 'metadata',
				label: 'Timed Metadata'
			}, false).track;
			sourceBuffer.metadataTrack_.inBandMetadataTrackDispatchType = segment.metadata.dispatchType;
		}
	};
	var removeCuesFromTrack = function removeCuesFromTrack(start, end, track) {
		var i = void 0;
		var cue = void 0;
		if (!track) {
			return;
		}
		if (!track.cues) {
			return;
		}
		i = track.cues.length;
		while (i--) {
			cue = track.cues[i];
			if (cue.startTime <= end && cue.endTime >= start) {
				track.removeCue(cue);
			}
		}
	};
	var deprecateOldCue = function deprecateOldCue(cue) {
		Object.defineProperties(cue.frame, {
			id: {
				get: function get$$1() {
					videojs$1.log.warn('cue.frame.id is deprecated. Use cue.value.key instead.');
					return cue.value.key;
				}
			},
			value: {
				get: function get$$1() {
					videojs$1.log.warn('cue.frame.value is deprecated. Use cue.value.data instead.');
					return cue.value.data;
				}
			},
			privateData: {
				get: function get$$1() {
					videojs$1.log.warn('cue.frame.privateData is deprecated. Use cue.value.data instead.');
					return cue.value.data;
				}
			}
		});
	};
	var durationOfVideo = function durationOfVideo(duration) {
		var dur = void 0;
		if (isNaN(duration) || Math.abs(duration) === Infinity) {
			dur = Number.MAX_VALUE;
		} else {
			dur = duration;
		}
		return dur;
	};
	var addTextTrackData = function addTextTrackData(sourceHandler, captionArray, metadataArray) {
		var Cue = window_1.WebKitDataCue || window_1.VTTCue;
		if (captionArray) {
			captionArray.forEach(function (caption) {
				var track = caption.stream;
				this.inbandTextTracks_[track].addCue(new Cue(caption.startTime + this.timestampOffset, caption.endTime + this.timestampOffset, caption.text));
			}, sourceHandler);
		}
		if (metadataArray) {
			var videoDuration = durationOfVideo(sourceHandler.mediaSource_.duration);
			metadataArray.forEach(function (metadata) {
				var time = metadata.cueTime + this.timestampOffset;
				metadata.frames.forEach(function (frame) {
					var cue = new Cue(time, time, frame.value || frame.url || frame.data || '');
					cue.frame = frame;
					cue.value = frame;
					deprecateOldCue(cue);
					this.metadataTrack_.addCue(cue);
				}, this);
			}, sourceHandler);
			if (sourceHandler.metadataTrack_ && sourceHandler.metadataTrack_.cues && sourceHandler.metadataTrack_.cues.length) {
				var cues = sourceHandler.metadataTrack_.cues;
				var cuesArray = [];
				for (var i = 0; i < cues.length; i++) {
					if (cues[i]) {
						cuesArray.push(cues[i]);
					}
				}
				var cuesGroupedByStartTime = cuesArray.reduce(function (obj, cue) {
					var timeSlot = obj[cue.startTime] || [];
					timeSlot.push(cue);
					obj[cue.startTime] = timeSlot;
					return obj;
				}, {});
				var sortedStartTimes = Object.keys(cuesGroupedByStartTime).sort(function (a, b) {
					return Number(a) - Number(b);
				});
				sortedStartTimes.forEach(function (startTime, idx) {
					var cueGroup = cuesGroupedByStartTime[startTime];
					var nextTime = Number(sortedStartTimes[idx + 1]) || videoDuration;
					cueGroup.forEach(function (cue) {
						cue.endTime = nextTime;
					});
				});
			}
		}
	};
	var win$1 = typeof window !== 'undefined' ? window : {},
		TARGET = typeof Symbol === 'undefined' ? '__target' : Symbol(),
		SCRIPT_TYPE = 'application/javascript',
		BlobBuilder = win$1.BlobBuilder || win$1.WebKitBlobBuilder || win$1.MozBlobBuilder || win$1.MSBlobBuilder,
		URL = win$1.URL || win$1.webkitURL || URL && URL.msURL,
		Worker = win$1.Worker;
	function shimWorker(filename, fn) {
		return function ShimWorker(forceFallback) {
			var o = this;
			if (!fn) {
				return new Worker(filename);
			} else if (Worker && !forceFallback) {
				var source = fn.toString().replace(/^function.+?{/, '').slice(0, -1),
					objURL = createSourceObject(source);
				this[TARGET] = new Worker(objURL);
				wrapTerminate(this[TARGET], objURL);
				return this[TARGET];
			} else {
				var selfShim = {
					postMessage: function postMessage(m) {
						if (o.onmessage) {
							setTimeout(function () {
								o.onmessage({ data: m, target: selfShim });
							});
						}
					}
				};
				fn.call(selfShim);
				this.postMessage = function (m) {
					setTimeout(function () {
						selfShim.onmessage({ data: m, target: o });
					});
				};
				this.isThisThread = true;
			}
		};
	}
	if (Worker) {
		var testWorker,
			objURL = createSourceObject('self.onmessage = function () {}'),
			testArray = new Uint8Array(1);
		try {
			testWorker = new Worker(objURL);
			testWorker.postMessage(testArray, [testArray.buffer]);
		} catch (e) {
			Worker = null;
		} finally {
			URL.revokeObjectURL(objURL);
			if (testWorker) {
				testWorker.terminate();
			}
		}
	}
	function createSourceObject(str) {
		try {
			return URL.createObjectURL(new Blob([str], { type: SCRIPT_TYPE }));
		} catch (e) {
			var blob = new BlobBuilder();
			blob.append(str);
			return URL.createObjectURL(blob.getBlob(type));
		}
	}
	function wrapTerminate(worker, objURL) {
		if (!worker || !objURL) return;
		var term = worker.terminate;
		worker.objURL = objURL;
		worker.terminate = function () {
			if (worker.objURL) URL.revokeObjectURL(worker.objURL);
			term.call(worker);
		};
	}
	var TransmuxWorker = new shimWorker("./transmuxer-worker.worker.js", function (window, document$$1) {
		var self = this;
		var transmuxerWorker = function () {
			var UINT32_MAX = Math.pow(2, 32) - 1;
			var box, dinf, esds, ftyp, mdat, mfhd, minf, moof, moov, mvex, mvhd, trak, tkhd, mdia, mdhd, hdlr, sdtp, stbl, stsd, traf, trex, trun, types, MAJOR_BRAND, MINOR_VERSION, AVC1_BRAND, VIDEO_HDLR, AUDIO_HDLR, HDLR_TYPES, VMHD, SMHD, DREF, STCO, STSC, STSZ, STTS;
			(function () {
				var i;
				types = {
					avc1: [],
					avcC: [],
					btrt: [],
					dinf: [],
					dref: [],
					esds: [],
					ftyp: [],
					hdlr: [],
					mdat: [],
					mdhd: [],
					mdia: [],
					mfhd: [],
					minf: [],
					moof: [],
					moov: [],
					mp4a: [],
					mvex: [],
					mvhd: [],
					sdtp: [],
					smhd: [],
					stbl: [],
					stco: [],
					stsc: [],
					stsd: [],
					stsz: [],
					stts: [],
					styp: [],
					tfdt: [],
					tfhd: [],
					traf: [],
					trak: [],
					trun: [],
					trex: [],
					tkhd: [],
					vmhd: []
				};
				if (typeof Uint8Array === 'undefined') {
					return;
				}
				for (i in types) {
					if (types.hasOwnProperty(i)) {
						types[i] = [i.charCodeAt(0), i.charCodeAt(1), i.charCodeAt(2), i.charCodeAt(3)];
					}
				}
				MAJOR_BRAND = new Uint8Array(['i'.charCodeAt(0), 's'.charCodeAt(0), 'o'.charCodeAt(0), 'm'.charCodeAt(0)]);
				AVC1_BRAND = new Uint8Array(['a'.charCodeAt(0), 'v'.charCodeAt(0), 'c'.charCodeAt(0), '1'.charCodeAt(0)]);
				MINOR_VERSION = new Uint8Array([0, 0, 0, 1]);
				VIDEO_HDLR = new Uint8Array([0x00,
					0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x00,
					0x76, 0x69, 0x64, 0x65,
					0x00, 0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x00,
					0x56, 0x69, 0x64, 0x65, 0x6f, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00
				]);
				AUDIO_HDLR = new Uint8Array([0x00,
					0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x00,
					0x73, 0x6f, 0x75, 0x6e,
					0x00, 0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x00,
					0x53, 0x6f, 0x75, 0x6e, 0x64, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00
				]);
				HDLR_TYPES = {
					video: VIDEO_HDLR,
					audio: AUDIO_HDLR
				};
				DREF = new Uint8Array([0x00,
					0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x01,
					0x00, 0x00, 0x00, 0x0c,
					0x75, 0x72, 0x6c, 0x20,
					0x00,
					0x00, 0x00, 0x01
				]);
				SMHD = new Uint8Array([0x00,
					0x00, 0x00, 0x00,
					0x00, 0x00,
					0x00, 0x00
				]);
				STCO = new Uint8Array([0x00,
					0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x00
				]);
				STSC = STCO;
				STSZ = new Uint8Array([0x00,
					0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x00
				]);
				STTS = STCO;
				VMHD = new Uint8Array([0x00,
					0x00, 0x00, 0x01,
					0x00, 0x00,
					0x00, 0x00, 0x00, 0x00, 0x00, 0x00
				]);
			})();
			box = function box(type) {
				var payload = [],
					size = 0,
					i,
					result,
					view;
				for (i = 1; i < arguments.length; i++) {
					payload.push(arguments[i]);
				}
				i = payload.length;
				while (i--) {
					size += payload[i].byteLength;
				}
				result = new Uint8Array(size + 8);
				view = new DataView(result.buffer, result.byteOffset, result.byteLength);
				view.setUint32(0, result.byteLength);
				result.set(type, 4);
				for (i = 0, size = 8; i < payload.length; i++) {
					result.set(payload[i], size);
					size += payload[i].byteLength;
				}
				return result;
			};
			dinf = function dinf() {
				return box(types.dinf, box(types.dref, DREF));
			};
			esds = function esds(track) {
				return box(types.esds, new Uint8Array([0x00,
					0x00, 0x00, 0x00,
					0x03,
					0x19,
					0x00, 0x00,
					0x00,
					0x04,
					0x11,
					0x40,
					0x15,
					0x00, 0x06, 0x00,
					0x00, 0x00, 0xda, 0xc0,
					0x00, 0x00, 0xda, 0xc0,
					0x05,
					0x02,
					track.audioobjecttype << 3 | track.samplingfrequencyindex >>> 1, track.samplingfrequencyindex << 7 | track.channelcount << 3, 0x06, 0x01, 0x02
				]));
			};
			ftyp = function ftyp() {
				return box(types.ftyp, MAJOR_BRAND, MINOR_VERSION, MAJOR_BRAND, AVC1_BRAND);
			};
			hdlr = function hdlr(type) {
				return box(types.hdlr, HDLR_TYPES[type]);
			};
			mdat = function mdat(data) {
				return box(types.mdat, data);
			};
			mdhd = function mdhd(track) {
				var result = new Uint8Array([0x00,
					0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x02,
					0x00, 0x00, 0x00, 0x03,
					0x00, 0x01, 0x5f, 0x90,
					track.duration >>> 24 & 0xFF, track.duration >>> 16 & 0xFF, track.duration >>> 8 & 0xFF, track.duration & 0xFF,
					0x55, 0xc4,
					0x00, 0x00]);
				if (track.samplerate) {
					result[12] = track.samplerate >>> 24 & 0xFF;
					result[13] = track.samplerate >>> 16 & 0xFF;
					result[14] = track.samplerate >>> 8 & 0xFF;
					result[15] = track.samplerate & 0xFF;
				}
				return box(types.mdhd, result);
			};
			mdia = function mdia(track) {
				return box(types.mdia, mdhd(track), hdlr(track.type), minf(track));
			};
			mfhd = function mfhd(sequenceNumber) {
				return box(types.mfhd, new Uint8Array([0x00, 0x00, 0x00, 0x00,
					(sequenceNumber & 0xFF000000) >> 24, (sequenceNumber & 0xFF0000) >> 16, (sequenceNumber & 0xFF00) >> 8, sequenceNumber & 0xFF
				]));
			};
			minf = function minf(track) {
				return box(types.minf, track.type === 'video' ? box(types.vmhd, VMHD) : box(types.smhd, SMHD), dinf(), stbl(track));
			};
			moof = function moof(sequenceNumber, tracks) {
				var trackFragments = [],
					i = tracks.length;
				while (i--) {
					trackFragments[i] = traf(tracks[i]);
				}
				return box.apply(null, [types.moof, mfhd(sequenceNumber)].concat(trackFragments));
			};
			moov = function moov(tracks) {
				var i = tracks.length,
					boxes = [];
				while (i--) {
					boxes[i] = trak(tracks[i]);
				}
				return box.apply(null, [types.moov, mvhd(0xffffffff)].concat(boxes).concat(mvex(tracks)));
			};
			mvex = function mvex(tracks) {
				var i = tracks.length,
					boxes = [];
				while (i--) {
					boxes[i] = trex(tracks[i]);
				}
				return box.apply(null, [types.mvex].concat(boxes));
			};
			mvhd = function mvhd(duration) {
				var bytes = new Uint8Array([0x00,
					0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x01,
					0x00, 0x00, 0x00, 0x02,
					0x00, 0x01, 0x5f, 0x90,
					(duration & 0xFF000000) >> 24, (duration & 0xFF0000) >> 16, (duration & 0xFF00) >> 8, duration & 0xFF,
					0x00, 0x01, 0x00, 0x00,
					0x01, 0x00,
					0x00, 0x00,
					0x00, 0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x00,
					0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
					0xff, 0xff, 0xff, 0xff
				]);
				return box(types.mvhd, bytes);
			};
			sdtp = function sdtp(track) {
				var samples = track.samples || [],
					bytes = new Uint8Array(4 + samples.length),
					flags,
					i;
				for (i = 0; i < samples.length; i++) {
					flags = samples[i].flags;
					bytes[i + 4] = flags.dependsOn << 4 | flags.isDependedOn << 2 | flags.hasRedundancy;
				}
				return box(types.sdtp, bytes);
			};
			stbl = function stbl(track) {
				return box(types.stbl, stsd(track), box(types.stts, STTS), box(types.stsc, STSC), box(types.stsz, STSZ), box(types.stco, STCO));
			};
			(function () {
				var videoSample, audioSample;
				stsd = function stsd(track) {
					return box(types.stsd, new Uint8Array([0x00,
						0x00, 0x00, 0x00,
						0x00, 0x00, 0x00, 0x01]), track.type === 'video' ? videoSample(track) : audioSample(track));
				};
				videoSample = function videoSample(track) {
					var sps = track.sps || [],
						pps = track.pps || [],
						sequenceParameterSets = [],
						pictureParameterSets = [],
						i;
					for (i = 0; i < sps.length; i++) {
						sequenceParameterSets.push((sps[i].byteLength & 0xFF00) >>> 8);
						sequenceParameterSets.push(sps[i].byteLength & 0xFF);
						sequenceParameterSets = sequenceParameterSets.concat(Array.prototype.slice.call(sps[i]));
					}
					for (i = 0; i < pps.length; i++) {
						pictureParameterSets.push((pps[i].byteLength & 0xFF00) >>> 8);
						pictureParameterSets.push(pps[i].byteLength & 0xFF);
						pictureParameterSets = pictureParameterSets.concat(Array.prototype.slice.call(pps[i]));
					}
					return box(types.avc1, new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
						0x00, 0x01,
						0x00, 0x00,
						0x00, 0x00,
						0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
						(track.width & 0xff00) >> 8, track.width & 0xff,
						(track.height & 0xff00) >> 8, track.height & 0xff,
						0x00, 0x48, 0x00, 0x00,
						0x00, 0x48, 0x00, 0x00,
						0x00, 0x00, 0x00, 0x00,
						0x00, 0x01,
						0x13, 0x76, 0x69, 0x64, 0x65, 0x6f, 0x6a, 0x73, 0x2d, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x69, 0x62, 0x2d, 0x68, 0x6c, 0x73, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
						0x00, 0x18,
						0x11, 0x11
					]), box(types.avcC, new Uint8Array([0x01,
						track.profileIdc,
						track.profileCompatibility,
						track.levelIdc,
						0xff
					].concat([sps.length
					]).concat(sequenceParameterSets).concat([pps.length
					]).concat(pictureParameterSets))),
						box(types.btrt, new Uint8Array([0x00, 0x1c, 0x9c, 0x80,
							0x00, 0x2d, 0xc6, 0xc0,
							0x00, 0x2d, 0xc6, 0xc0]))
					);
				};
				audioSample = function audioSample(track) {
					return box(types.mp4a, new Uint8Array([
						0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
						0x00, 0x01,
						0x00, 0x00, 0x00, 0x00,
						0x00, 0x00, 0x00, 0x00,
						(track.channelcount & 0xff00) >> 8, track.channelcount & 0xff,
						(track.samplesize & 0xff00) >> 8, track.samplesize & 0xff,
						0x00, 0x00,
						0x00, 0x00,
						(track.samplerate & 0xff00) >> 8, track.samplerate & 0xff, 0x00, 0x00
					]), esds(track));
				};
			})();
			tkhd = function tkhd(track) {
				var result = new Uint8Array([0x00,
					0x00, 0x00, 0x07,
					0x00, 0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x00,
					(track.id & 0xFF000000) >> 24, (track.id & 0xFF0000) >> 16, (track.id & 0xFF00) >> 8, track.id & 0xFF,
					0x00, 0x00, 0x00, 0x00,
					(track.duration & 0xFF000000) >> 24, (track.duration & 0xFF0000) >> 16, (track.duration & 0xFF00) >> 8, track.duration & 0xFF,
					0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
					0x00, 0x00,
					0x00, 0x00,
					0x01, 0x00,
					0x00, 0x00,
					0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00,
					(track.width & 0xFF00) >> 8, track.width & 0xFF, 0x00, 0x00,
					(track.height & 0xFF00) >> 8, track.height & 0xFF, 0x00, 0x00
				]);
				return box(types.tkhd, result);
			};
			traf = function traf(track) {
				var trackFragmentHeader, trackFragmentDecodeTime, trackFragmentRun, sampleDependencyTable, dataOffset, upperWordBaseMediaDecodeTime, lowerWordBaseMediaDecodeTime;
				trackFragmentHeader = box(types.tfhd, new Uint8Array([0x00,
					0x00, 0x00, 0x3a,
					(track.id & 0xFF000000) >> 24, (track.id & 0xFF0000) >> 16, (track.id & 0xFF00) >> 8, track.id & 0xFF,
					0x00, 0x00, 0x00, 0x01,
					0x00, 0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x00
				]));
				upperWordBaseMediaDecodeTime = Math.floor(track.baseMediaDecodeTime / (UINT32_MAX + 1));
				lowerWordBaseMediaDecodeTime = Math.floor(track.baseMediaDecodeTime % (UINT32_MAX + 1));
				trackFragmentDecodeTime = box(types.tfdt, new Uint8Array([0x01,
					0x00, 0x00, 0x00,
					upperWordBaseMediaDecodeTime >>> 24 & 0xFF, upperWordBaseMediaDecodeTime >>> 16 & 0xFF, upperWordBaseMediaDecodeTime >>> 8 & 0xFF, upperWordBaseMediaDecodeTime & 0xFF, lowerWordBaseMediaDecodeTime >>> 24 & 0xFF, lowerWordBaseMediaDecodeTime >>> 16 & 0xFF, lowerWordBaseMediaDecodeTime >>> 8 & 0xFF, lowerWordBaseMediaDecodeTime & 0xFF]));
				dataOffset = 32 +
					20 +
					8 +
					16 +
					8 +
					8;
				if (track.type === 'audio') {
					trackFragmentRun = trun(track, dataOffset);
					return box(types.traf, trackFragmentHeader, trackFragmentDecodeTime, trackFragmentRun);
				}
				sampleDependencyTable = sdtp(track);
				trackFragmentRun = trun(track, sampleDependencyTable.length + dataOffset);
				return box(types.traf, trackFragmentHeader, trackFragmentDecodeTime, trackFragmentRun, sampleDependencyTable);
			};
			trak = function trak(track) {
				track.duration = track.duration || 0xffffffff;
				return box(types.trak, tkhd(track), mdia(track));
			};
			trex = function trex(track) {
				var result = new Uint8Array([0x00,
					0x00, 0x00, 0x00,
					(track.id & 0xFF000000) >> 24, (track.id & 0xFF0000) >> 16, (track.id & 0xFF00) >> 8, track.id & 0xFF,
					0x00, 0x00, 0x00, 0x01,
					0x00, 0x00, 0x00, 0x00,
					0x00, 0x00, 0x00, 0x00,
					0x00, 0x01, 0x00, 0x01
				]);
				if (track.type !== 'video') {
					result[result.length - 1] = 0x00;
				}
				return box(types.trex, result);
			};
			(function () {
				var audioTrun, videoTrun, trunHeader;
				trunHeader = function trunHeader(samples, offset) {
					var durationPresent = 0,
						sizePresent = 0,
						flagsPresent = 0,
						compositionTimeOffset = 0;
					if (samples.length) {
						if (samples[0].duration !== undefined) {
							durationPresent = 0x1;
						}
						if (samples[0].size !== undefined) {
							sizePresent = 0x2;
						}
						if (samples[0].flags !== undefined) {
							flagsPresent = 0x4;
						}
						if (samples[0].compositionTimeOffset !== undefined) {
							compositionTimeOffset = 0x8;
						}
					}
					return [0x00,
						0x00, durationPresent | sizePresent | flagsPresent | compositionTimeOffset, 0x01,
						(samples.length & 0xFF000000) >>> 24, (samples.length & 0xFF0000) >>> 16, (samples.length & 0xFF00) >>> 8, samples.length & 0xFF,
						(offset & 0xFF000000) >>> 24, (offset & 0xFF0000) >>> 16, (offset & 0xFF00) >>> 8, offset & 0xFF
					];
				};
				videoTrun = function videoTrun(track, offset) {
					var bytes, samples, sample, i;
					samples = track.samples || [];
					offset += 8 + 12 + 16 * samples.length;
					bytes = trunHeader(samples, offset);
					for (i = 0; i < samples.length; i++) {
						sample = samples[i];
						bytes = bytes.concat([(sample.duration & 0xFF000000) >>> 24, (sample.duration & 0xFF0000) >>> 16, (sample.duration & 0xFF00) >>> 8, sample.duration & 0xFF,
						(sample.size & 0xFF000000) >>> 24, (sample.size & 0xFF0000) >>> 16, (sample.size & 0xFF00) >>> 8, sample.size & 0xFF,
						sample.flags.isLeading << 2 | sample.flags.dependsOn, sample.flags.isDependedOn << 6 | sample.flags.hasRedundancy << 4 | sample.flags.paddingValue << 1 | sample.flags.isNonSyncSample, sample.flags.degradationPriority & 0xF0 << 8, sample.flags.degradationPriority & 0x0F,
						(sample.compositionTimeOffset & 0xFF000000) >>> 24, (sample.compositionTimeOffset & 0xFF0000) >>> 16, (sample.compositionTimeOffset & 0xFF00) >>> 8, sample.compositionTimeOffset & 0xFF
						]);
					}
					return box(types.trun, new Uint8Array(bytes));
				};
				audioTrun = function audioTrun(track, offset) {
					var bytes, samples, sample, i;
					samples = track.samples || [];
					offset += 8 + 12 + 8 * samples.length;
					bytes = trunHeader(samples, offset);
					for (i = 0; i < samples.length; i++) {
						sample = samples[i];
						bytes = bytes.concat([(sample.duration & 0xFF000000) >>> 24, (sample.duration & 0xFF0000) >>> 16, (sample.duration & 0xFF00) >>> 8, sample.duration & 0xFF,
						(sample.size & 0xFF000000) >>> 24, (sample.size & 0xFF0000) >>> 16, (sample.size & 0xFF00) >>> 8, sample.size & 0xFF]);
					}
					return box(types.trun, new Uint8Array(bytes));
				};
				trun = function trun(track, offset) {
					if (track.type === 'audio') {
						return audioTrun(track, offset);
					}
					return videoTrun(track, offset);
				};
			})();
			var mp4Generator = {
				ftyp: ftyp,
				mdat: mdat,
				moof: moof,
				moov: moov,
				initSegment: function initSegment(tracks) {
					var fileType = ftyp(),
						movie = moov(tracks),
						result;
					result = new Uint8Array(fileType.byteLength + movie.byteLength);
					result.set(fileType);
					result.set(movie, fileType.byteLength);
					return result;
				}
			};
			var toUnsigned = function toUnsigned(value) {
				return value >>> 0;
			};
			var bin = {
				toUnsigned: toUnsigned
			};
			var toUnsigned$1 = bin.toUnsigned;
			var _findBox, parseType, timescale, startTime, getVideoTrackIds;
			_findBox = function findBox(data, path) {
				var results = [],
					i,
					size,
					type,
					end,
					subresults;
				if (!path.length) {
					return null;
				}
				for (i = 0; i < data.byteLength;) {
					size = toUnsigned$1(data[i] << 24 | data[i + 1] << 16 | data[i + 2] << 8 | data[i + 3]);
					type = parseType(data.subarray(i + 4, i + 8));
					end = size > 1 ? i + size : data.byteLength;
					if (type === path[0]) {
						if (path.length === 1) {
							results.push(data.subarray(i + 8, end));
						} else {
							subresults = _findBox(data.subarray(i + 8, end), path.slice(1));
							if (subresults.length) {
								results = results.concat(subresults);
							}
						}
					}
					i = end;
				}
				return results;
			};
			parseType = function parseType(buffer) {
				var result = '';
				result += String.fromCharCode(buffer[0]);
				result += String.fromCharCode(buffer[1]);
				result += String.fromCharCode(buffer[2]);
				result += String.fromCharCode(buffer[3]);
				return result;
			};
			timescale = function timescale(init) {
				var result = {},
					traks = _findBox(init, ['moov', 'trak']);
				return traks.reduce(function (result, trak) {
					var tkhd, version, index, id, mdhd;
					tkhd = _findBox(trak, ['tkhd'])[0];
					if (!tkhd) {
						return null;
					}
					version = tkhd[0];
					index = version === 0 ? 12 : 20;
					id = toUnsigned$1(tkhd[index] << 24 | tkhd[index + 1] << 16 | tkhd[index + 2] << 8 | tkhd[index + 3]);
					mdhd = _findBox(trak, ['mdia', 'mdhd'])[0];
					if (!mdhd) {
						return null;
					}
					version = mdhd[0];
					index = version === 0 ? 12 : 20;
					result[id] = toUnsigned$1(mdhd[index] << 24 | mdhd[index + 1] << 16 | mdhd[index + 2] << 8 | mdhd[index + 3]);
					return result;
				}, result);
			};
			startTime = function startTime(timescale, fragment) {
				var trafs, baseTimes, result;
				trafs = _findBox(fragment, ['moof', 'traf']);
				baseTimes = [].concat.apply([], trafs.map(function (traf) {
					return _findBox(traf, ['tfhd']).map(function (tfhd) {
						var id, scale, baseTime;
						id = toUnsigned$1(tfhd[4] << 24 | tfhd[5] << 16 | tfhd[6] << 8 | tfhd[7]);
						scale = timescale[id] || 90e3;
						baseTime = _findBox(traf, ['tfdt']).map(function (tfdt) {
							var version, result;
							version = tfdt[0];
							result = toUnsigned$1(tfdt[4] << 24 | tfdt[5] << 16 | tfdt[6] << 8 | tfdt[7]);
							if (version === 1) {
								result *= Math.pow(2, 32);
								result += toUnsigned$1(tfdt[8] << 24 | tfdt[9] << 16 | tfdt[10] << 8 | tfdt[11]);
							}
							return result;
						})[0];
						baseTime = baseTime || Infinity;
						return baseTime / scale;
					});
				}));
				result = Math.min.apply(null, baseTimes);
				return isFinite(result) ? result : 0;
			};
			getVideoTrackIds = function getVideoTrackIds(init) {
				var traks = _findBox(init, ['moov', 'trak']);
				var videoTrackIds = [];
				traks.forEach(function (trak) {
					var hdlrs = _findBox(trak, ['mdia', 'hdlr']);
					var tkhds = _findBox(trak, ['tkhd']);
					hdlrs.forEach(function (hdlr, index) {
						var handlerType = parseType(hdlr.subarray(8, 12));
						var tkhd = tkhds[index];
						var view;
						var version;
						var trackId;
						if (handlerType === 'vide') {
							view = new DataView(tkhd.buffer, tkhd.byteOffset, tkhd.byteLength);
							version = view.getUint8(0);
							trackId = version === 0 ? view.getUint32(12) : view.getUint32(20);
							videoTrackIds.push(trackId);
						}
					});
				});
				return videoTrackIds;
			};
			var probe$$1 = {
				findBox: _findBox,
				parseType: parseType,
				timescale: timescale,
				startTime: startTime,
				videoTrackIds: getVideoTrackIds
			};
			var Stream = function Stream() {
				this.init = function () {
					var listeners = {};
					this.on = function (type, listener) {
						if (!listeners[type]) {
							listeners[type] = [];
						}
						listeners[type] = listeners[type].concat(listener);
					};
					this.off = function (type, listener) {
						var index;
						if (!listeners[type]) {
							return false;
						}
						index = listeners[type].indexOf(listener);
						listeners[type] = listeners[type].slice();
						listeners[type].splice(index, 1);
						return index > -1;
					};
					this.trigger = function (type) {
						var callbacks, i, length, args;
						callbacks = listeners[type];
						if (!callbacks) {
							return;
						}
						if (arguments.length === 2) {
							length = callbacks.length;
							for (i = 0; i < length; ++i) {
								callbacks[i].call(this, arguments[1]);
							}
						} else {
							args = [];
							i = arguments.length;
							for (i = 1; i < arguments.length; ++i) {
								args.push(arguments[i]);
							}
							length = callbacks.length;
							for (i = 0; i < length; ++i) {
								callbacks[i].apply(this, args);
							}
						}
					};
					this.dispose = function () {
						listeners = {};
					};
				};
			};
			Stream.prototype.pipe = function (destination) {
				this.on('data', function (data) {
					destination.push(data);
				});
				this.on('done', function (flushSource) {
					destination.flush(flushSource);
				});
				return destination;
			};
			Stream.prototype.push = function (data) {
				this.trigger('data', data);
			};
			Stream.prototype.flush = function (flushSource) {
				this.trigger('done', flushSource);
			};
			var stream = Stream;
			var groupNalsIntoFrames = function groupNalsIntoFrames(nalUnits) {
				var i,
					currentNal,
					currentFrame = [],
					frames = [];
				currentFrame.byteLength = 0;
				for (i = 0; i < nalUnits.length; i++) {
					currentNal = nalUnits[i];
					if (currentNal.nalUnitType === 'access_unit_delimiter_rbsp') {
						if (currentFrame.length) {
							currentFrame.duration = currentNal.dts - currentFrame.dts;
							frames.push(currentFrame);
						}
						currentFrame = [currentNal];
						currentFrame.byteLength = currentNal.data.byteLength;
						currentFrame.pts = currentNal.pts;
						currentFrame.dts = currentNal.dts;
					} else {
						if (currentNal.nalUnitType === 'slice_layer_without_partitioning_rbsp_idr') {
							currentFrame.keyFrame = true;
						}
						currentFrame.duration = currentNal.dts - currentFrame.dts;
						currentFrame.byteLength += currentNal.data.byteLength;
						currentFrame.push(currentNal);
					}
				}
				if (frames.length && (!currentFrame.duration || currentFrame.duration <= 0)) {
					currentFrame.duration = frames[frames.length - 1].duration;
				}
				frames.push(currentFrame);
				return frames;
			};
			var groupFramesIntoGops = function groupFramesIntoGops(frames) {
				var i,
					currentFrame,
					currentGop = [],
					gops = [];
				currentGop.byteLength = 0;
				currentGop.nalCount = 0;
				currentGop.duration = 0;
				currentGop.pts = frames[0].pts;
				currentGop.dts = frames[0].dts;
				gops.byteLength = 0;
				gops.nalCount = 0;
				gops.duration = 0;
				gops.pts = frames[0].pts;
				gops.dts = frames[0].dts;
				for (i = 0; i < frames.length; i++) {
					currentFrame = frames[i];
					if (currentFrame.keyFrame) {
						if (currentGop.length) {
							gops.push(currentGop);
							gops.byteLength += currentGop.byteLength;
							gops.nalCount += currentGop.nalCount;
							gops.duration += currentGop.duration;
						}
						currentGop = [currentFrame];
						currentGop.nalCount = currentFrame.length;
						currentGop.byteLength = currentFrame.byteLength;
						currentGop.pts = currentFrame.pts;
						currentGop.dts = currentFrame.dts;
						currentGop.duration = currentFrame.duration;
					} else {
						currentGop.duration += currentFrame.duration;
						currentGop.nalCount += currentFrame.length;
						currentGop.byteLength += currentFrame.byteLength;
						currentGop.push(currentFrame);
					}
				}
				if (gops.length && currentGop.duration <= 0) {
					currentGop.duration = gops[gops.length - 1].duration;
				}
				gops.byteLength += currentGop.byteLength;
				gops.nalCount += currentGop.nalCount;
				gops.duration += currentGop.duration;
				gops.push(currentGop);
				return gops;
			};
			var extendFirstKeyFrame = function extendFirstKeyFrame(gops) {
				var currentGop;
				if (!gops[0][0].keyFrame && gops.length > 1) {
					currentGop = gops.shift();
					gops.byteLength -= currentGop.byteLength;
					gops.nalCount -= currentGop.nalCount;
					gops[0][0].dts = currentGop.dts;
					gops[0][0].pts = currentGop.pts;
					gops[0][0].duration += currentGop.duration;
				}
				return gops;
			};
			var createDefaultSample = function createDefaultSample() {
				return {
					size: 0,
					flags: {
						isLeading: 0,
						dependsOn: 1,
						isDependedOn: 0,
						hasRedundancy: 0,
						degradationPriority: 0,
						isNonSyncSample: 1
					}
				};
			};
			var sampleForFrame = function sampleForFrame(frame, dataOffset) {
				var sample = createDefaultSample();
				sample.dataOffset = dataOffset;
				sample.compositionTimeOffset = frame.pts - frame.dts;
				sample.duration = frame.duration;
				sample.size = 4 * frame.length;
				sample.size += frame.byteLength;
				if (frame.keyFrame) {
					sample.flags.dependsOn = 2;
					sample.flags.isNonSyncSample = 0;
				}
				return sample;
			};
			var generateSampleTable = function generateSampleTable(gops, baseDataOffset) {
				var h,
					i,
					sample,
					currentGop,
					currentFrame,
					dataOffset = baseDataOffset || 0,
					samples = [];
				for (h = 0; h < gops.length; h++) {
					currentGop = gops[h];
					for (i = 0; i < currentGop.length; i++) {
						currentFrame = currentGop[i];
						sample = sampleForFrame(currentFrame, dataOffset);
						dataOffset += sample.size;
						samples.push(sample);
					}
				}
				return samples;
			};
			var concatenateNalData = function concatenateNalData(gops) {
				var h,
					i,
					j,
					currentGop,
					currentFrame,
					currentNal,
					dataOffset = 0,
					nalsByteLength = gops.byteLength,
					numberOfNals = gops.nalCount,
					totalByteLength = nalsByteLength + 4 * numberOfNals,
					data = new Uint8Array(totalByteLength),
					view = new DataView(data.buffer);
				for (h = 0; h < gops.length; h++) {
					currentGop = gops[h];
					for (i = 0; i < currentGop.length; i++) {
						currentFrame = currentGop[i];
						for (j = 0; j < currentFrame.length; j++) {
							currentNal = currentFrame[j];
							view.setUint32(dataOffset, currentNal.data.byteLength);
							dataOffset += 4;
							data.set(currentNal.data, dataOffset);
							dataOffset += currentNal.data.byteLength;
						}
					}
				}
				return data;
			};
			var frameUtils = {
				groupNalsIntoFrames: groupNalsIntoFrames,
				groupFramesIntoGops: groupFramesIntoGops,
				extendFirstKeyFrame: extendFirstKeyFrame,
				generateSampleTable: generateSampleTable,
				concatenateNalData: concatenateNalData
			};
			var ONE_SECOND_IN_TS = 90000;
			var collectDtsInfo = function collectDtsInfo(track, data) {
				if (typeof data.pts === 'number') {
					if (track.timelineStartInfo.pts === undefined) {
						track.timelineStartInfo.pts = data.pts;
					}
					if (track.minSegmentPts === undefined) {
						track.minSegmentPts = data.pts;
					} else {
						track.minSegmentPts = Math.min(track.minSegmentPts, data.pts);
					}
					if (track.maxSegmentPts === undefined) {
						track.maxSegmentPts = data.pts;
					} else {
						track.maxSegmentPts = Math.max(track.maxSegmentPts, data.pts);
					}
				}
				if (typeof data.dts === 'number') {
					if (track.timelineStartInfo.dts === undefined) {
						track.timelineStartInfo.dts = data.dts;
					}
					if (track.minSegmentDts === undefined) {
						track.minSegmentDts = data.dts;
					} else {
						track.minSegmentDts = Math.min(track.minSegmentDts, data.dts);
					}
					if (track.maxSegmentDts === undefined) {
						track.maxSegmentDts = data.dts;
					} else {
						track.maxSegmentDts = Math.max(track.maxSegmentDts, data.dts);
					}
				}
			};
			var clearDtsInfo = function clearDtsInfo(track) {
				delete track.minSegmentDts;
				delete track.maxSegmentDts;
				delete track.minSegmentPts;
				delete track.maxSegmentPts;
			};
			var calculateTrackBaseMediaDecodeTime = function calculateTrackBaseMediaDecodeTime(track, keepOriginalTimestamps) {
				var baseMediaDecodeTime,
					scale,
					minSegmentDts = track.minSegmentDts;
				if (!keepOriginalTimestamps) {
					minSegmentDts -= track.timelineStartInfo.dts;
				}
				baseMediaDecodeTime = track.timelineStartInfo.baseMediaDecodeTime;
				baseMediaDecodeTime += minSegmentDts;
				baseMediaDecodeTime = Math.max(0, baseMediaDecodeTime);
				if (track.type === 'audio') {
					scale = track.samplerate / ONE_SECOND_IN_TS;
					baseMediaDecodeTime *= scale;
					baseMediaDecodeTime = Math.floor(baseMediaDecodeTime);
				}
				return baseMediaDecodeTime;
			};
			var trackDecodeInfo = {
				clearDtsInfo: clearDtsInfo,
				calculateTrackBaseMediaDecodeTime: calculateTrackBaseMediaDecodeTime,
				collectDtsInfo: collectDtsInfo
			};
			var USER_DATA_REGISTERED_ITU_T_T35 = 4,
				RBSP_TRAILING_BITS = 128;
			var parseSei = function parseSei(bytes) {
				var i = 0,
					result = {
						payloadType: -1,
						payloadSize: 0
					},
					payloadType = 0,
					payloadSize = 0;
				while (i < bytes.byteLength) {
					if (bytes[i] === RBSP_TRAILING_BITS) {
						break;
					}
					while (bytes[i] === 0xFF) {
						payloadType += 255;
						i++;
					}
					payloadType += bytes[i++];
					while (bytes[i] === 0xFF) {
						payloadSize += 255;
						i++;
					}
					payloadSize += bytes[i++];
					if (!result.payload && payloadType === USER_DATA_REGISTERED_ITU_T_T35) {
						result.payloadType = payloadType;
						result.payloadSize = payloadSize;
						result.payload = bytes.subarray(i, i + payloadSize);
						break;
					}
					i += payloadSize;
					payloadType = 0;
					payloadSize = 0;
				}
				return result;
			};
			var parseUserData = function parseUserData(sei) {
				if (sei.payload[0] !== 181) {
					return null;
				}
				if ((sei.payload[1] << 8 | sei.payload[2]) !== 49) {
					return null;
				}
				if (String.fromCharCode(sei.payload[3], sei.payload[4], sei.payload[5], sei.payload[6]) !== 'GA94') {
					return null;
				}
				if (sei.payload[7] !== 0x03) {
					return null;
				}
				return sei.payload.subarray(8, sei.payload.length - 1);
			};
			var parseCaptionPackets = function parseCaptionPackets(pts, userData) {
				var results = [],
					i,
					count,
					offset,
					data;
				if (!(userData[0] & 0x40)) {
					return results;
				}
				count = userData[0] & 0x1f;
				for (i = 0; i < count; i++) {
					offset = i * 3;
					data = {
						type: userData[offset + 2] & 0x03,
						pts: pts
					};
					if (userData[offset + 2] & 0x04) {
						data.ccData = userData[offset + 3] << 8 | userData[offset + 4];
						results.push(data);
					}
				}
				return results;
			};
			var discardEmulationPreventionBytes = function discardEmulationPreventionBytes(data) {
				var length = data.byteLength,
					emulationPreventionBytesPositions = [],
					i = 1,
					newLength,
					newData;
				while (i < length - 2) {
					if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0x03) {
						emulationPreventionBytesPositions.push(i + 2);
						i += 2;
					} else {
						i++;
					}
				}
				if (emulationPreventionBytesPositions.length === 0) {
					return data;
				}
				newLength = length - emulationPreventionBytesPositions.length;
				newData = new Uint8Array(newLength);
				var sourceIndex = 0;
				for (i = 0; i < newLength; sourceIndex++, i++) {
					if (sourceIndex === emulationPreventionBytesPositions[0]) {
						sourceIndex++;
						emulationPreventionBytesPositions.shift();
					}
					newData[i] = data[sourceIndex];
				}
				return newData;
			};
			var captionPacketParser = {
				parseSei: parseSei,
				parseUserData: parseUserData,
				parseCaptionPackets: parseCaptionPackets,
				discardEmulationPreventionBytes: discardEmulationPreventionBytes,
				USER_DATA_REGISTERED_ITU_T_T35: USER_DATA_REGISTERED_ITU_T_T35
			};
			var CaptionStream = function CaptionStream() {
				CaptionStream.prototype.init.call(this);
				this.captionPackets_ = [];
				this.ccStreams_ = [new Cea608Stream(0, 0),
				new Cea608Stream(0, 1),
				new Cea608Stream(1, 0),
				new Cea608Stream(1, 1)
				];
				this.reset();
				this.ccStreams_.forEach(function (cc) {
					cc.on('data', this.trigger.bind(this, 'data'));
					cc.on('done', this.trigger.bind(this, 'done'));
				}, this);
			};
			CaptionStream.prototype = new stream();
			CaptionStream.prototype.push = function (event) {
				var sei, userData, newCaptionPackets;
				if (event.nalUnitType !== 'sei_rbsp') {
					return;
				}
				sei = captionPacketParser.parseSei(event.escapedRBSP);
				if (sei.payloadType !== captionPacketParser.USER_DATA_REGISTERED_ITU_T_T35) {
					return;
				}
				userData = captionPacketParser.parseUserData(sei);
				if (!userData) {
					return;
				}
				if (event.dts < this.latestDts_) {
					this.ignoreNextEqualDts_ = true;
					return;
				} else if (event.dts === this.latestDts_ && this.ignoreNextEqualDts_) {
					this.numSameDts_--;
					if (!this.numSameDts_) {
						this.ignoreNextEqualDts_ = false;
					}
					return;
				}
				newCaptionPackets = captionPacketParser.parseCaptionPackets(event.pts, userData);
				this.captionPackets_ = this.captionPackets_.concat(newCaptionPackets);
				if (this.latestDts_ !== event.dts) {
					this.numSameDts_ = 0;
				}
				this.numSameDts_++;
				this.latestDts_ = event.dts;
			};
			CaptionStream.prototype.flush = function () {
				if (!this.captionPackets_.length) {
					this.ccStreams_.forEach(function (cc) {
						cc.flush();
					}, this);
					return;
				}
				this.captionPackets_.forEach(function (elem, idx) {
					elem.presortIndex = idx;
				});
				this.captionPackets_.sort(function (a, b) {
					if (a.pts === b.pts) {
						return a.presortIndex - b.presortIndex;
					}
					return a.pts - b.pts;
				});
				this.captionPackets_.forEach(function (packet) {
					if (packet.type < 2) {
						this.dispatchCea608Packet(packet);
					}
				}, this);
				this.captionPackets_.length = 0;
				this.ccStreams_.forEach(function (cc) {
					cc.flush();
				}, this);
				return;
			};
			CaptionStream.prototype.reset = function () {
				this.latestDts_ = null;
				this.ignoreNextEqualDts_ = false;
				this.numSameDts_ = 0;
				this.activeCea608Channel_ = [null, null];
				this.ccStreams_.forEach(function (ccStream) {
					ccStream.reset();
				});
			};
			CaptionStream.prototype.dispatchCea608Packet = function (packet) {
				if (this.setsChannel1Active(packet)) {
					this.activeCea608Channel_[packet.type] = 0;
				} else if (this.setsChannel2Active(packet)) {
					this.activeCea608Channel_[packet.type] = 1;
				}
				if (this.activeCea608Channel_[packet.type] === null) {
					return;
				}
				this.ccStreams_[(packet.type << 1) + this.activeCea608Channel_[packet.type]].push(packet);
			};
			CaptionStream.prototype.setsChannel1Active = function (packet) {
				return (packet.ccData & 0x7800) === 0x1000;
			};
			CaptionStream.prototype.setsChannel2Active = function (packet) {
				return (packet.ccData & 0x7800) === 0x1800;
			};
			var CHARACTER_TRANSLATION = {
				0x2a: 0xe1,
				0x5c: 0xe9,
				0x5e: 0xed,
				0x5f: 0xf3,
				0x60: 0xfa,
				0x7b: 0xe7,
				0x7c: 0xf7,
				0x7d: 0xd1,
				0x7e: 0xf1,
				0x7f: 0x2588,
				0x0130: 0xae,
				0x0131: 0xb0,
				0x0132: 0xbd,
				0x0133: 0xbf,
				0x0134: 0x2122,
				0x0135: 0xa2,
				0x0136: 0xa3,
				0x0137: 0x266a,
				0x0138: 0xe0,
				0x0139: 0xa0,
				0x013a: 0xe8,
				0x013b: 0xe2,
				0x013c: 0xea,
				0x013d: 0xee,
				0x013e: 0xf4,
				0x013f: 0xfb,
				0x0220: 0xc1,
				0x0221: 0xc9,
				0x0222: 0xd3,
				0x0223: 0xda,
				0x0224: 0xdc,
				0x0225: 0xfc,
				0x0226: 0x2018,
				0x0227: 0xa1,
				0x0228: 0x2a,
				0x0229: 0x27,
				0x022a: 0x2014,
				0x022b: 0xa9,
				0x022c: 0x2120,
				0x022d: 0x2022,
				0x022e: 0x201c,
				0x022f: 0x201d,
				0x0230: 0xc0,
				0x0231: 0xc2,
				0x0232: 0xc7,
				0x0233: 0xc8,
				0x0234: 0xca,
				0x0235: 0xcb,
				0x0236: 0xeb,
				0x0237: 0xce,
				0x0238: 0xcf,
				0x0239: 0xef,
				0x023a: 0xd4,
				0x023b: 0xd9,
				0x023c: 0xf9,
				0x023d: 0xdb,
				0x023e: 0xab,
				0x023f: 0xbb,
				0x0320: 0xc3,
				0x0321: 0xe3,
				0x0322: 0xcd,
				0x0323: 0xcc,
				0x0324: 0xec,
				0x0325: 0xd2,
				0x0326: 0xf2,
				0x0327: 0xd5,
				0x0328: 0xf5,
				0x0329: 0x7b,
				0x032a: 0x7d,
				0x032b: 0x5c,
				0x032c: 0x5e,
				0x032d: 0x5f,
				0x032e: 0x7c,
				0x032f: 0x7e,
				0x0330: 0xc4,
				0x0331: 0xe4,
				0x0332: 0xd6,
				0x0333: 0xf6,
				0x0334: 0xdf,
				0x0335: 0xa5,
				0x0336: 0xa4,
				0x0337: 0x2502,
				0x0338: 0xc5,
				0x0339: 0xe5,
				0x033a: 0xd8,
				0x033b: 0xf8,
				0x033c: 0x250c,
				0x033d: 0x2510,
				0x033e: 0x2514,
				0x033f: 0x2518
			};
			var getCharFromCode = function getCharFromCode(code) {
				if (code === null) {
					return '';
				}
				code = CHARACTER_TRANSLATION[code] || code;
				return String.fromCharCode(code);
			};
			var BOTTOM_ROW = 14;
			var ROWS = [0x1100, 0x1120, 0x1200, 0x1220, 0x1500, 0x1520, 0x1600, 0x1620, 0x1700, 0x1720, 0x1000, 0x1300, 0x1320, 0x1400, 0x1420];
			var createDisplayBuffer = function createDisplayBuffer() {
				var result = [],
					i = BOTTOM_ROW + 1;
				while (i--) {
					result.push('');
				}
				return result;
			};
			var Cea608Stream = function Cea608Stream(field, dataChannel) {
				Cea608Stream.prototype.init.call(this);
				this.field_ = field || 0;
				this.dataChannel_ = dataChannel || 0;
				this.name_ = 'CC' + ((this.field_ << 1 | this.dataChannel_) + 1);
				this.setConstants();
				this.reset();
				this.push = function (packet) {
					var data, swap, char0, char1, text;
					data = packet.ccData & 0x7f7f;
					if (data === this.lastControlCode_) {
						this.lastControlCode_ = null;
						return;
					}
					if ((data & 0xf000) === 0x1000) {
						this.lastControlCode_ = data;
					} else if (data !== this.PADDING_) {
						this.lastControlCode_ = null;
					}
					char0 = data >>> 8;
					char1 = data & 0xff;
					if (data === this.PADDING_) {
						return;
					} else if (data === this.RESUME_CAPTION_LOADING_) {
						this.mode_ = 'popOn';
					} else if (data === this.END_OF_CAPTION_) {
						this.mode_ = 'popOn';
						this.clearFormatting(packet.pts);
						this.flushDisplayed(packet.pts);
						swap = this.displayed_;
						this.displayed_ = this.nonDisplayed_;
						this.nonDisplayed_ = swap;
						this.startPts_ = packet.pts;
					} else if (data === this.ROLL_UP_2_ROWS_) {
						this.rollUpRows_ = 2;
						this.setRollUp(packet.pts);
					} else if (data === this.ROLL_UP_3_ROWS_) {
						this.rollUpRows_ = 3;
						this.setRollUp(packet.pts);
					} else if (data === this.ROLL_UP_4_ROWS_) {
						this.rollUpRows_ = 4;
						this.setRollUp(packet.pts);
					} else if (data === this.CARRIAGE_RETURN_) {
						this.clearFormatting(packet.pts);
						this.flushDisplayed(packet.pts);
						this.shiftRowsUp_();
						this.startPts_ = packet.pts;
					} else if (data === this.BACKSPACE_) {
						if (this.mode_ === 'popOn') {
							this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1);
						} else {
							this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
						}
					} else if (data === this.ERASE_DISPLAYED_MEMORY_) {
						this.flushDisplayed(packet.pts);
						this.displayed_ = createDisplayBuffer();
					} else if (data === this.ERASE_NON_DISPLAYED_MEMORY_) {
						this.nonDisplayed_ = createDisplayBuffer();
					} else if (data === this.RESUME_DIRECT_CAPTIONING_) {
						if (this.mode_ !== 'paintOn') {
							this.flushDisplayed(packet.pts);
							this.displayed_ = createDisplayBuffer();
						}
						this.mode_ = 'paintOn';
						this.startPts_ = packet.pts;
					} else if (this.isSpecialCharacter(char0, char1)) {
						char0 = (char0 & 0x03) << 8;
						text = getCharFromCode(char0 | char1);
						this[this.mode_](packet.pts, text);
						this.column_++;
					} else if (this.isExtCharacter(char0, char1)) {
						if (this.mode_ === 'popOn') {
							this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1);
						} else {
							this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
						}
						char0 = (char0 & 0x03) << 8;
						text = getCharFromCode(char0 | char1);
						this[this.mode_](packet.pts, text);
						this.column_++;
					} else if (this.isMidRowCode(char0, char1)) {
						this.clearFormatting(packet.pts);
						this[this.mode_](packet.pts, ' ');
						this.column_++;
						if ((char1 & 0xe) === 0xe) {
							this.addFormatting(packet.pts, ['i']);
						}
						if ((char1 & 0x1) === 0x1) {
							this.addFormatting(packet.pts, ['u']);
						}
					} else if (this.isOffsetControlCode(char0, char1)) {
						this.column_ += char1 & 0x03;
					} else if (this.isPAC(char0, char1)) {
						var row = ROWS.indexOf(data & 0x1f20);
						if (this.mode_ === 'rollUp') {
							this.setRollUp(packet.pts, row);
						}
						if (row !== this.row_) {
							this.clearFormatting(packet.pts);
							this.row_ = row;
						}
						if (char1 & 0x1 && this.formatting_.indexOf('u') === -1) {
							this.addFormatting(packet.pts, ['u']);
						}
						if ((data & 0x10) === 0x10) {
							this.column_ = ((data & 0xe) >> 1) * 4;
						}
						if (this.isColorPAC(char1)) {
							if ((char1 & 0xe) === 0xe) {
								this.addFormatting(packet.pts, ['i']);
							}
						}
					} else if (this.isNormalChar(char0)) {
						if (char1 === 0x00) {
							char1 = null;
						}
						text = getCharFromCode(char0);
						text += getCharFromCode(char1);
						this[this.mode_](packet.pts, text);
						this.column_ += text.length;
					}
				};
			};
			Cea608Stream.prototype = new stream();
			Cea608Stream.prototype.flushDisplayed = function (pts) {
				var content = this.displayed_
					.map(function (row) {
						return row.trim();
					})
					.join('\n')
					.replace(/^\n+|\n+$/g, '');
				if (content.length) {
					this.trigger('data', {
						startPts: this.startPts_,
						endPts: pts,
						text: content,
						stream: this.name_
					});
				}
			};
			Cea608Stream.prototype.reset = function () {
				this.mode_ = 'popOn';
				this.topRow_ = 0;
				this.startPts_ = 0;
				this.displayed_ = createDisplayBuffer();
				this.nonDisplayed_ = createDisplayBuffer();
				this.lastControlCode_ = null;
				this.column_ = 0;
				this.row_ = BOTTOM_ROW;
				this.rollUpRows_ = 2;
				this.formatting_ = [];
			};
			Cea608Stream.prototype.setConstants = function () {
				if (this.dataChannel_ === 0) {
					this.BASE_ = 0x10;
					this.EXT_ = 0x11;
					this.CONTROL_ = (0x14 | this.field_) << 8;
					this.OFFSET_ = 0x17;
				} else if (this.dataChannel_ === 1) {
					this.BASE_ = 0x18;
					this.EXT_ = 0x19;
					this.CONTROL_ = (0x1c | this.field_) << 8;
					this.OFFSET_ = 0x1f;
				}
				this.PADDING_ = 0x0000;
				this.RESUME_CAPTION_LOADING_ = this.CONTROL_ | 0x20;
				this.END_OF_CAPTION_ = this.CONTROL_ | 0x2f;
				this.ROLL_UP_2_ROWS_ = this.CONTROL_ | 0x25;
				this.ROLL_UP_3_ROWS_ = this.CONTROL_ | 0x26;
				this.ROLL_UP_4_ROWS_ = this.CONTROL_ | 0x27;
				this.CARRIAGE_RETURN_ = this.CONTROL_ | 0x2d;
				this.RESUME_DIRECT_CAPTIONING_ = this.CONTROL_ | 0x29;
				this.BACKSPACE_ = this.CONTROL_ | 0x21;
				this.ERASE_DISPLAYED_MEMORY_ = this.CONTROL_ | 0x2c;
				this.ERASE_NON_DISPLAYED_MEMORY_ = this.CONTROL_ | 0x2e;
			};
			Cea608Stream.prototype.isSpecialCharacter = function (char0, char1) {
				return char0 === this.EXT_ && char1 >= 0x30 && char1 <= 0x3f;
			};
			Cea608Stream.prototype.isExtCharacter = function (char0, char1) {
				return (char0 === this.EXT_ + 1 || char0 === this.EXT_ + 2) && char1 >= 0x20 && char1 <= 0x3f;
			};
			Cea608Stream.prototype.isMidRowCode = function (char0, char1) {
				return char0 === this.EXT_ && char1 >= 0x20 && char1 <= 0x2f;
			};
			Cea608Stream.prototype.isOffsetControlCode = function (char0, char1) {
				return char0 === this.OFFSET_ && char1 >= 0x21 && char1 <= 0x23;
			};
			Cea608Stream.prototype.isPAC = function (char0, char1) {
				return char0 >= this.BASE_ && char0 < this.BASE_ + 8 && char1 >= 0x40 && char1 <= 0x7f;
			};
			Cea608Stream.prototype.isColorPAC = function (char1) {
				return char1 >= 0x40 && char1 <= 0x4f || char1 >= 0x60 && char1 <= 0x7f;
			};
			Cea608Stream.prototype.isNormalChar = function (char) {
				return char >= 0x20 && char <= 0x7f;
			};
			Cea608Stream.prototype.setRollUp = function (pts, newBaseRow) {
				if (this.mode_ !== 'rollUp') {
					this.row_ = BOTTOM_ROW;
					this.mode_ = 'rollUp';
					this.flushDisplayed(pts);
					this.nonDisplayed_ = createDisplayBuffer();
					this.displayed_ = createDisplayBuffer();
				}
				if (newBaseRow !== undefined && newBaseRow !== this.row_) {
					for (var i = 0; i < this.rollUpRows_; i++) {
						this.displayed_[newBaseRow - i] = this.displayed_[this.row_ - i];
						this.displayed_[this.row_ - i] = '';
					}
				}
				if (newBaseRow === undefined) {
					newBaseRow = this.row_;
				}
				this.topRow_ = newBaseRow - this.rollUpRows_ + 1;
			};
			Cea608Stream.prototype.addFormatting = function (pts, format) {
				this.formatting_ = this.formatting_.concat(format);
				var text = format.reduce(function (text, format) {
					return text + '<' + format + '>';
				}, '');
				this[this.mode_](pts, text);
			};
			Cea608Stream.prototype.clearFormatting = function (pts) {
				if (!this.formatting_.length) {
					return;
				}
				var text = this.formatting_.reverse().reduce(function (text, format) {
					return text + '</' + format + '>';
				}, '');
				this.formatting_ = [];
				this[this.mode_](pts, text);
			};
			Cea608Stream.prototype.popOn = function (pts, text) {
				var baseRow = this.nonDisplayed_[this.row_];
				baseRow += text;
				this.nonDisplayed_[this.row_] = baseRow;
			};
			Cea608Stream.prototype.rollUp = function (pts, text) {
				var baseRow = this.displayed_[this.row_];
				baseRow += text;
				this.displayed_[this.row_] = baseRow;
			};
			Cea608Stream.prototype.shiftRowsUp_ = function () {
				var i;
				for (i = 0; i < this.topRow_; i++) {
					this.displayed_[i] = '';
				}
				for (i = this.row_ + 1; i < BOTTOM_ROW + 1; i++) {
					this.displayed_[i] = '';
				}
				for (i = this.topRow_; i < this.row_; i++) {
					this.displayed_[i] = this.displayed_[i + 1];
				}
				this.displayed_[this.row_] = '';
			};
			Cea608Stream.prototype.paintOn = function (pts, text) {
				var baseRow = this.displayed_[this.row_];
				baseRow += text;
				this.displayed_[this.row_] = baseRow;
			};
			var captionStream = {
				CaptionStream: CaptionStream,
				Cea608Stream: Cea608Stream
			};
			var streamTypes = {
				H264_STREAM_TYPE: 0x1B,
				ADTS_STREAM_TYPE: 0x0F,
				METADATA_STREAM_TYPE: 0x15
			};
			var MAX_TS = 8589934592;
			var RO_THRESH = 4294967296;
			var handleRollover = function handleRollover(value, reference) {
				var direction = 1;
				if (value > reference) {
					direction = -1;
				}
				while (Math.abs(reference - value) > RO_THRESH) {
					value += direction * MAX_TS;
				}
				return value;
			};
			var TimestampRolloverStream = function TimestampRolloverStream(type) {
				var lastDTS, referenceDTS;
				TimestampRolloverStream.prototype.init.call(this);
				this.type_ = type;
				this.push = function (data) {
					if (data.type !== this.type_) {
						return;
					}
					if (referenceDTS === undefined) {
						referenceDTS = data.dts;
					}
					data.dts = handleRollover(data.dts, referenceDTS);
					data.pts = handleRollover(data.pts, referenceDTS);
					lastDTS = data.dts;
					this.trigger('data', data);
				};
				this.flush = function () {
					referenceDTS = lastDTS;
					this.trigger('done');
				};
				this.discontinuity = function () {
					referenceDTS = void 0;
					lastDTS = void 0;
				};
			};
			TimestampRolloverStream.prototype = new stream();
			var timestampRolloverStream = {
				TimestampRolloverStream: TimestampRolloverStream,
				handleRollover: handleRollover
			};
			var percentEncode = function percentEncode(bytes, start, end) {
				var i,
					result = '';
				for (i = start; i < end; i++) {
					result += '%' + ('00' + bytes[i].toString(16)).slice(-2);
				}
				return result;
			},
				parseUtf8 = function parseUtf8(bytes, start, end) {
					return decodeURIComponent(percentEncode(bytes, start, end));
				},
				parseIso88591 = function parseIso88591(bytes, start, end) {
					return unescape(percentEncode(bytes, start, end));
				},
				parseSyncSafeInteger = function parseSyncSafeInteger(data) {
					return data[0] << 21 | data[1] << 14 | data[2] << 7 | data[3];
				},
				tagParsers = {
					TXXX: function TXXX(tag) {
						var i;
						if (tag.data[0] !== 3) {
							return;
						}
						for (i = 1; i < tag.data.length; i++) {
							if (tag.data[i] === 0) {
								tag.description = parseUtf8(tag.data, 1, i);
								tag.value = parseUtf8(tag.data, i + 1, tag.data.length).replace(/\0*$/, '');
								break;
							}
						}
						tag.data = tag.value;
					},
					WXXX: function WXXX(tag) {
						var i;
						if (tag.data[0] !== 3) {
							return;
						}
						for (i = 1; i < tag.data.length; i++) {
							if (tag.data[i] === 0) {
								tag.description = parseUtf8(tag.data, 1, i);
								tag.url = parseUtf8(tag.data, i + 1, tag.data.length);
								break;
							}
						}
					},
					PRIV: function PRIV(tag) {
						var i;
						for (i = 0; i < tag.data.length; i++) {
							if (tag.data[i] === 0) {
								tag.owner = parseIso88591(tag.data, 0, i);
								break;
							}
						}
						tag.privateData = tag.data.subarray(i + 1);
						tag.data = tag.privateData;
					}
				},
				_MetadataStream;
			_MetadataStream = function MetadataStream(options) {
				var settings = {
					debug: !!(options && options.debug),
					descriptor: options && options.descriptor
				},
					tagSize = 0,
					buffer = [],
					bufferSize = 0,
					i;
				_MetadataStream.prototype.init.call(this);
				this.dispatchType = streamTypes.METADATA_STREAM_TYPE.toString(16);
				if (settings.descriptor) {
					for (i = 0; i < settings.descriptor.length; i++) {
						this.dispatchType += ('00' + settings.descriptor[i].toString(16)).slice(-2);
					}
				}
				this.push = function (chunk) {
					var tag, frameStart, frameSize, frame, i, frameHeader;
					if (chunk.type !== 'timed-metadata') {
						return;
					}
					if (chunk.dataAlignmentIndicator) {
						bufferSize = 0;
						buffer.length = 0;
					}
					if (buffer.length === 0 && (chunk.data.length < 10 || chunk.data[0] !== 'I'.charCodeAt(0) || chunk.data[1] !== 'D'.charCodeAt(0) || chunk.data[2] !== '3'.charCodeAt(0))) {
						if (settings.debug) {
							console.log('Skipping unrecognized metadata packet');
						}
						return;
					}
					buffer.push(chunk);
					bufferSize += chunk.data.byteLength;
					if (buffer.length === 1) {
						tagSize = parseSyncSafeInteger(chunk.data.subarray(6, 10));
						tagSize += 10;
					}
					if (bufferSize < tagSize) {
						return;
					}
					tag = {
						data: new Uint8Array(tagSize),
						frames: [],
						pts: buffer[0].pts,
						dts: buffer[0].dts
					};
					for (i = 0; i < tagSize;) {
						tag.data.set(buffer[0].data.subarray(0, tagSize - i), i);
						i += buffer[0].data.byteLength;
						bufferSize -= buffer[0].data.byteLength;
						buffer.shift();
					}
					frameStart = 10;
					if (tag.data[5] & 0x40) {
						frameStart += 4;
						frameStart += parseSyncSafeInteger(tag.data.subarray(10, 14));
						tagSize -= parseSyncSafeInteger(tag.data.subarray(16, 20));
					}
					do {
						frameSize = parseSyncSafeInteger(tag.data.subarray(frameStart + 4, frameStart + 8));
						if (frameSize < 1) {
							return console.log('Malformed ID3 frame encountered. Skipping metadata parsing.');
						}
						frameHeader = String.fromCharCode(tag.data[frameStart], tag.data[frameStart + 1], tag.data[frameStart + 2], tag.data[frameStart + 3]);
						frame = {
							id: frameHeader,
							data: tag.data.subarray(frameStart + 10, frameStart + frameSize + 10)
						};
						frame.key = frame.id;
						if (tagParsers[frame.id]) {
							tagParsers[frame.id](frame);
							if (frame.owner === 'com.apple.streaming.transportStreamTimestamp') {
								var d = frame.data,
									size = (d[3] & 0x01) << 30 | d[4] << 22 | d[5] << 14 | d[6] << 6 | d[7] >>> 2;
								size *= 4;
								size += d[7] & 0x03;
								frame.timeStamp = size;
								if (tag.pts === undefined && tag.dts === undefined) {
									tag.pts = frame.timeStamp;
									tag.dts = frame.timeStamp;
								}
								this.trigger('timestamp', frame);
							}
						}
						tag.frames.push(frame);
						frameStart += 10;
						frameStart += frameSize;
					} while (frameStart < tagSize);
					this.trigger('data', tag);
				};
			};
			_MetadataStream.prototype = new stream();
			var metadataStream = _MetadataStream;
			var TimestampRolloverStream$1 = timestampRolloverStream.TimestampRolloverStream;
			var _TransportPacketStream, _TransportParseStream, _ElementaryStream;
			var MP2T_PACKET_LENGTH = 188,
				SYNC_BYTE = 0x47;
			_TransportPacketStream = function TransportPacketStream() {
				var buffer = new Uint8Array(MP2T_PACKET_LENGTH),
					bytesInBuffer = 0;
				_TransportPacketStream.prototype.init.call(this);
				this.push = function (bytes) {
					var startIndex = 0,
						endIndex = MP2T_PACKET_LENGTH,
						everything;
					if (bytesInBuffer) {
						everything = new Uint8Array(bytes.byteLength + bytesInBuffer);
						everything.set(buffer.subarray(0, bytesInBuffer));
						everything.set(bytes, bytesInBuffer);
						bytesInBuffer = 0;
					} else {
						everything = bytes;
					}
					while (endIndex < everything.byteLength) {
						if (everything[startIndex] === SYNC_BYTE && everything[endIndex] === SYNC_BYTE) {
							this.trigger('data', everything.subarray(startIndex, endIndex));
							startIndex += MP2T_PACKET_LENGTH;
							endIndex += MP2T_PACKET_LENGTH;
							continue;
						}
						startIndex++;
						endIndex++;
					}
					if (startIndex < everything.byteLength) {
						buffer.set(everything.subarray(startIndex), 0);
						bytesInBuffer = everything.byteLength - startIndex;
					}
				};
				this.flush = function () {
					if (bytesInBuffer === MP2T_PACKET_LENGTH && buffer[0] === SYNC_BYTE) {
						this.trigger('data', buffer);
						bytesInBuffer = 0;
					}
					this.trigger('done');
				};
			};
			_TransportPacketStream.prototype = new stream();
			_TransportParseStream = function TransportParseStream() {
				var parsePsi, parsePat, parsePmt, self;
				_TransportParseStream.prototype.init.call(this);
				self = this;
				this.packetsWaitingForPmt = [];
				this.programMapTable = undefined;
				parsePsi = function parsePsi(payload, psi) {
					var offset = 0;
					if (psi.payloadUnitStartIndicator) {
						offset += payload[offset] + 1;
					}
					if (psi.type === 'pat') {
						parsePat(payload.subarray(offset), psi);
					} else {
						parsePmt(payload.subarray(offset), psi);
					}
				};
				parsePat = function parsePat(payload, pat) {
					pat.section_number = payload[7];
					pat.last_section_number = payload[8];
					self.pmtPid = (payload[10] & 0x1F) << 8 | payload[11];
					pat.pmtPid = self.pmtPid;
				};
				parsePmt = function parsePmt(payload, pmt) {
					var sectionLength, tableEnd, programInfoLength, offset;
					if (!(payload[5] & 0x01)) {
						return;
					}
					self.programMapTable = {
						video: null,
						audio: null,
						'timed-metadata': {}
					};
					sectionLength = (payload[1] & 0x0f) << 8 | payload[2];
					tableEnd = 3 + sectionLength - 4;
					programInfoLength = (payload[10] & 0x0f) << 8 | payload[11];
					offset = 12 + programInfoLength;
					while (offset < tableEnd) {
						var streamType = payload[offset];
						var pid = (payload[offset + 1] & 0x1F) << 8 | payload[offset + 2];
						if (streamType === streamTypes.H264_STREAM_TYPE && self.programMapTable.video === null) {
							self.programMapTable.video = pid;
						} else if (streamType === streamTypes.ADTS_STREAM_TYPE && self.programMapTable.audio === null) {
							self.programMapTable.audio = pid;
						} else if (streamType === streamTypes.METADATA_STREAM_TYPE) {
							self.programMapTable['timed-metadata'][pid] = streamType;
						}
						offset += ((payload[offset + 3] & 0x0F) << 8 | payload[offset + 4]) + 5;
					}
					pmt.programMapTable = self.programMapTable;
				};
				this.push = function (packet) {
					var result = {},
						offset = 4;
					result.payloadUnitStartIndicator = !!(packet[1] & 0x40);
					result.pid = packet[1] & 0x1f;
					result.pid <<= 8;
					result.pid |= packet[2];
					if ((packet[3] & 0x30) >>> 4 > 0x01) {
						offset += packet[offset] + 1;
					}
					if (result.pid === 0) {
						result.type = 'pat';
						parsePsi(packet.subarray(offset), result);
						this.trigger('data', result);
					} else if (result.pid === this.pmtPid) {
						result.type = 'pmt';
						parsePsi(packet.subarray(offset), result);
						this.trigger('data', result);
						while (this.packetsWaitingForPmt.length) {
							this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
						}
					} else if (this.programMapTable === undefined) {
						this.packetsWaitingForPmt.push([packet, offset, result]);
					} else {
						this.processPes_(packet, offset, result);
					}
				};
				this.processPes_ = function (packet, offset, result) {
					if (result.pid === this.programMapTable.video) {
						result.streamType = streamTypes.H264_STREAM_TYPE;
					} else if (result.pid === this.programMapTable.audio) {
						result.streamType = streamTypes.ADTS_STREAM_TYPE;
					} else {
						result.streamType = this.programMapTable['timed-metadata'][result.pid];
					}
					result.type = 'pes';
					result.data = packet.subarray(offset);
					this.trigger('data', result);
				};
			};
			_TransportParseStream.prototype = new stream();
			_TransportParseStream.STREAM_TYPES = {
				h264: 0x1b,
				adts: 0x0f
			};
			_ElementaryStream = function ElementaryStream() {
				var self = this,
					video = {
						data: [],
						size: 0
					},
					audio = {
						data: [],
						size: 0
					},
					timedMetadata = {
						data: [],
						size: 0
					},
					parsePes = function parsePes(payload, pes) {
						var ptsDtsFlags;
						pes.packetLength = 6 + (payload[4] << 8 | payload[5]);
						pes.dataAlignmentIndicator = (payload[6] & 0x04) !== 0;
						ptsDtsFlags = payload[7];
						if (ptsDtsFlags & 0xC0) {
							pes.pts = (payload[9] & 0x0E) << 27 | (payload[10] & 0xFF) << 20 | (payload[11] & 0xFE) << 12 | (payload[12] & 0xFF) << 5 | (payload[13] & 0xFE) >>> 3;
							pes.pts *= 4;
							pes.pts += (payload[13] & 0x06) >>> 1;
							pes.dts = pes.pts;
							if (ptsDtsFlags & 0x40) {
								pes.dts = (payload[14] & 0x0E) << 27 | (payload[15] & 0xFF) << 20 | (payload[16] & 0xFE) << 12 | (payload[17] & 0xFF) << 5 | (payload[18] & 0xFE) >>> 3;
								pes.dts *= 4;
								pes.dts += (payload[18] & 0x06) >>> 1;
							}
						}
						pes.data = payload.subarray(9 + payload[8]);
					},
					flushStream = function flushStream(stream$$1, type, forceFlush) {
						var packetData = new Uint8Array(stream$$1.size),
							event = {
								type: type
							},
							i = 0,
							offset = 0,
							packetFlushable = false,
							fragment;
						if (!stream$$1.data.length || stream$$1.size < 9) {
							return;
						}
						event.trackId = stream$$1.data[0].pid;
						for (i = 0; i < stream$$1.data.length; i++) {
							fragment = stream$$1.data[i];
							packetData.set(fragment.data, offset);
							offset += fragment.data.byteLength;
						}
						parsePes(packetData, event);
						packetFlushable = type === 'video' || event.packetLength <= stream$$1.size;
						if (forceFlush || packetFlushable) {
							stream$$1.size = 0;
							stream$$1.data.length = 0;
						}
						if (packetFlushable) {
							self.trigger('data', event);
						}
					};
				_ElementaryStream.prototype.init.call(this);
				this.push = function (data) {
					({
						pat: function pat() {
						},
						pes: function pes() {
							var stream$$1, streamType;
							switch (data.streamType) {
								case streamTypes.H264_STREAM_TYPE:
								case streamTypes.H264_STREAM_TYPE:
									stream$$1 = video;
									streamType = 'video';
									break;
								case streamTypes.ADTS_STREAM_TYPE:
									stream$$1 = audio;
									streamType = 'audio';
									break;
								case streamTypes.METADATA_STREAM_TYPE:
									stream$$1 = timedMetadata;
									streamType = 'timed-metadata';
									break;
								default:
									return;
							}
							if (data.payloadUnitStartIndicator) {
								flushStream(stream$$1, streamType, true);
							}
							stream$$1.data.push(data);
							stream$$1.size += data.data.byteLength;
						},
						pmt: function pmt() {
							var event = {
								type: 'metadata',
								tracks: []
							},
								programMapTable = data.programMapTable;
							if (programMapTable.video !== null) {
								event.tracks.push({
									timelineStartInfo: {
										baseMediaDecodeTime: 0
									},
									id: +programMapTable.video,
									codec: 'avc',
									type: 'video'
								});
							}
							if (programMapTable.audio !== null) {
								event.tracks.push({
									timelineStartInfo: {
										baseMediaDecodeTime: 0
									},
									id: +programMapTable.audio,
									codec: 'adts',
									type: 'audio'
								});
							}
							self.trigger('data', event);
						}
					})[data.type]();
				};
				this.flush = function () {
					flushStream(video, 'video');
					flushStream(audio, 'audio');
					flushStream(timedMetadata, 'timed-metadata');
					this.trigger('done');
				};
			};
			_ElementaryStream.prototype = new stream();
			var m2ts = {
				PAT_PID: 0x0000,
				MP2T_PACKET_LENGTH: MP2T_PACKET_LENGTH,
				TransportPacketStream: _TransportPacketStream,
				TransportParseStream: _TransportParseStream,
				ElementaryStream: _ElementaryStream,
				TimestampRolloverStream: TimestampRolloverStream$1,
				CaptionStream: captionStream.CaptionStream,
				Cea608Stream: captionStream.Cea608Stream,
				MetadataStream: metadataStream
			};
			for (var type in streamTypes) {
				if (streamTypes.hasOwnProperty(type)) {
					m2ts[type] = streamTypes[type];
				}
			}
			var m2ts_1 = m2ts;
			var _AdtsStream;
			var ADTS_SAMPLING_FREQUENCIES = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
			_AdtsStream = function AdtsStream() {
				var buffer;
				_AdtsStream.prototype.init.call(this);
				this.push = function (packet) {
					var i = 0,
						frameNum = 0,
						frameLength,
						protectionSkipBytes,
						frameEnd,
						oldBuffer,
						sampleCount,
						adtsFrameDuration;
					if (packet.type !== 'audio') {
						return;
					}
					if (buffer) {
						oldBuffer = buffer;
						buffer = new Uint8Array(oldBuffer.byteLength + packet.data.byteLength);
						buffer.set(oldBuffer);
						buffer.set(packet.data, oldBuffer.byteLength);
					} else {
						buffer = packet.data;
					}
					while (i + 5 < buffer.length) {
						if (buffer[i] !== 0xFF || (buffer[i + 1] & 0xF6) !== 0xF0) {
							i++;
							continue;
						}
						protectionSkipBytes = (~buffer[i + 1] & 0x01) * 2;
						frameLength = (buffer[i + 3] & 0x03) << 11 | buffer[i + 4] << 3 | (buffer[i + 5] & 0xe0) >> 5;
						sampleCount = ((buffer[i + 6] & 0x03) + 1) * 1024;
						adtsFrameDuration = sampleCount * 90000 / ADTS_SAMPLING_FREQUENCIES[(buffer[i + 2] & 0x3c) >>> 2];
						frameEnd = i + frameLength;
						if (buffer.byteLength < frameEnd) {
							return;
						}
						this.trigger('data', {
							pts: packet.pts + frameNum * adtsFrameDuration,
							dts: packet.dts + frameNum * adtsFrameDuration,
							sampleCount: sampleCount,
							audioobjecttype: (buffer[i + 2] >>> 6 & 0x03) + 1,
							channelcount: (buffer[i + 2] & 1) << 2 | (buffer[i + 3] & 0xc0) >>> 6,
							samplerate: ADTS_SAMPLING_FREQUENCIES[(buffer[i + 2] & 0x3c) >>> 2],
							samplingfrequencyindex: (buffer[i + 2] & 0x3c) >>> 2,
							samplesize: 16,
							data: buffer.subarray(i + 7 + protectionSkipBytes, frameEnd)
						});
						if (buffer.byteLength === frameEnd) {
							buffer = undefined;
							return;
						}
						frameNum++;
						buffer = buffer.subarray(frameEnd);
					}
				};
				this.flush = function () {
					this.trigger('done');
				};
			};
			_AdtsStream.prototype = new stream();
			var adts = _AdtsStream;
			var ExpGolomb;
			ExpGolomb = function ExpGolomb(workingData) {
				var
					workingBytesAvailable = workingData.byteLength,
					workingWord = 0,
					workingBitsAvailable = 0;
				this.length = function () {
					return 8 * workingBytesAvailable;
				};
				this.bitsAvailable = function () {
					return 8 * workingBytesAvailable + workingBitsAvailable;
				};
				this.loadWord = function () {
					var position = workingData.byteLength - workingBytesAvailable,
						workingBytes = new Uint8Array(4),
						availableBytes = Math.min(4, workingBytesAvailable);
					if (availableBytes === 0) {
						throw new Error('no bytes available');
					}
					workingBytes.set(workingData.subarray(position, position + availableBytes));
					workingWord = new DataView(workingBytes.buffer).getUint32(0);
					workingBitsAvailable = availableBytes * 8;
					workingBytesAvailable -= availableBytes;
				};
				this.skipBits = function (count) {
					var skipBytes;
					if (workingBitsAvailable > count) {
						workingWord <<= count;
						workingBitsAvailable -= count;
					} else {
						count -= workingBitsAvailable;
						skipBytes = Math.floor(count / 8);
						count -= skipBytes * 8;
						workingBytesAvailable -= skipBytes;
						this.loadWord();
						workingWord <<= count;
						workingBitsAvailable -= count;
					}
				};
				this.readBits = function (size) {
					var bits = Math.min(workingBitsAvailable, size),
						valu = workingWord >>> 32 - bits;
					workingBitsAvailable -= bits;
					if (workingBitsAvailable > 0) {
						workingWord <<= bits;
					} else if (workingBytesAvailable > 0) {
						this.loadWord();
					}
					bits = size - bits;
					if (bits > 0) {
						return valu << bits | this.readBits(bits);
					}
					return valu;
				};
				this.skipLeadingZeros = function () {
					var leadingZeroCount;
					for (leadingZeroCount = 0; leadingZeroCount < workingBitsAvailable; ++leadingZeroCount) {
						if ((workingWord & 0x80000000 >>> leadingZeroCount) !== 0) {
							workingWord <<= leadingZeroCount;
							workingBitsAvailable -= leadingZeroCount;
							return leadingZeroCount;
						}
					}
					this.loadWord();
					return leadingZeroCount + this.skipLeadingZeros();
				};
				this.skipUnsignedExpGolomb = function () {
					this.skipBits(1 + this.skipLeadingZeros());
				};
				this.skipExpGolomb = function () {
					this.skipBits(1 + this.skipLeadingZeros());
				};
				this.readUnsignedExpGolomb = function () {
					var clz = this.skipLeadingZeros();
					return this.readBits(clz + 1) - 1;
				};
				this.readExpGolomb = function () {
					var valu = this.readUnsignedExpGolomb();
					if (0x01 & valu) {
						return 1 + valu >>> 1;
					}
					return -1 * (valu >>> 1);
				};
				this.readBoolean = function () {
					return this.readBits(1) === 1;
				};
				this.readUnsignedByte = function () {
					return this.readBits(8);
				};
				this.loadWord();
			};
			var expGolomb = ExpGolomb;
			var _H264Stream, _NalByteStream;
			var PROFILES_WITH_OPTIONAL_SPS_DATA;
			_NalByteStream = function NalByteStream() {
				var syncPoint = 0,
					i,
					buffer;
				_NalByteStream.prototype.init.call(this);
				this.push = function (data) {
					var swapBuffer;
					if (!buffer) {
						buffer = data.data;
					} else {
						swapBuffer = new Uint8Array(buffer.byteLength + data.data.byteLength);
						swapBuffer.set(buffer);
						swapBuffer.set(data.data, buffer.byteLength);
						buffer = swapBuffer;
					}
					for (; syncPoint < buffer.byteLength - 3; syncPoint++) {
						if (buffer[syncPoint + 2] === 1) {
							i = syncPoint + 5;
							break;
						}
					}
					while (i < buffer.byteLength) {
						switch (buffer[i]) {
							case 0:
								if (buffer[i - 1] !== 0) {
									i += 2;
									break;
								} else if (buffer[i - 2] !== 0) {
									i++;
									break;
								}
								if (syncPoint + 3 !== i - 2) {
									this.trigger('data', buffer.subarray(syncPoint + 3, i - 2));
								}
								do {
									i++;
								} while (buffer[i] !== 1 && i < buffer.length);
								syncPoint = i - 2;
								i += 3;
								break;
							case 1:
								if (buffer[i - 1] !== 0 || buffer[i - 2] !== 0) {
									i += 3;
									break;
								}
								this.trigger('data', buffer.subarray(syncPoint + 3, i - 2));
								syncPoint = i - 2;
								i += 3;
								break;
							default:
								i += 3;
								break;
						}
					}
					buffer = buffer.subarray(syncPoint);
					i -= syncPoint;
					syncPoint = 0;
				};
				this.flush = function () {
					if (buffer && buffer.byteLength > 3) {
						this.trigger('data', buffer.subarray(syncPoint + 3));
					}
					buffer = null;
					syncPoint = 0;
					this.trigger('done');
				};
			};
			_NalByteStream.prototype = new stream();
			PROFILES_WITH_OPTIONAL_SPS_DATA = {
				100: true,
				110: true,
				122: true,
				244: true,
				44: true,
				83: true,
				86: true,
				118: true,
				128: true,
				138: true,
				139: true,
				134: true
			};
			_H264Stream = function H264Stream() {
				var nalByteStream = new _NalByteStream(),
					self,
					trackId,
					currentPts,
					currentDts,
					discardEmulationPreventionBytes,
					readSequenceParameterSet,
					skipScalingList;
				_H264Stream.prototype.init.call(this);
				self = this;
				this.push = function (packet) {
					if (packet.type !== 'video') {
						return;
					}
					trackId = packet.trackId;
					currentPts = packet.pts;
					currentDts = packet.dts;
					nalByteStream.push(packet);
				};
				nalByteStream.on('data', function (data) {
					var event = {
						trackId: trackId,
						pts: currentPts,
						dts: currentDts,
						data: data
					};
					switch (data[0] & 0x1f) {
						case 0x05:
							event.nalUnitType = 'slice_layer_without_partitioning_rbsp_idr';
							break;
						case 0x06:
							event.nalUnitType = 'sei_rbsp';
							event.escapedRBSP = discardEmulationPreventionBytes(data.subarray(1));
							break;
						case 0x07:
							event.nalUnitType = 'seq_parameter_set_rbsp';
							event.escapedRBSP = discardEmulationPreventionBytes(data.subarray(1));
							event.config = readSequenceParameterSet(event.escapedRBSP);
							break;
						case 0x08:
							event.nalUnitType = 'pic_parameter_set_rbsp';
							break;
						case 0x09:
							event.nalUnitType = 'access_unit_delimiter_rbsp';
							break;
						default:
							break;
					}
					self.trigger('data', event);
				});
				nalByteStream.on('done', function () {
					self.trigger('done');
				});
				this.flush = function () {
					nalByteStream.flush();
				};
				skipScalingList = function skipScalingList(count, expGolombDecoder) {
					var lastScale = 8,
						nextScale = 8,
						j,
						deltaScale;
					for (j = 0; j < count; j++) {
						if (nextScale !== 0) {
							deltaScale = expGolombDecoder.readExpGolomb();
							nextScale = (lastScale + deltaScale + 256) % 256;
						}
						lastScale = nextScale === 0 ? lastScale : nextScale;
					}
				};
				discardEmulationPreventionBytes = function discardEmulationPreventionBytes(data) {
					var length = data.byteLength,
						emulationPreventionBytesPositions = [],
						i = 1,
						newLength,
						newData;
					while (i < length - 2) {
						if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0x03) {
							emulationPreventionBytesPositions.push(i + 2);
							i += 2;
						} else {
							i++;
						}
					}
					if (emulationPreventionBytesPositions.length === 0) {
						return data;
					}
					newLength = length - emulationPreventionBytesPositions.length;
					newData = new Uint8Array(newLength);
					var sourceIndex = 0;
					for (i = 0; i < newLength; sourceIndex++, i++) {
						if (sourceIndex === emulationPreventionBytesPositions[0]) {
							sourceIndex++;
							emulationPreventionBytesPositions.shift();
						}
						newData[i] = data[sourceIndex];
					}
					return newData;
				};
				readSequenceParameterSet = function readSequenceParameterSet(data) {
					var frameCropLeftOffset = 0,
						frameCropRightOffset = 0,
						frameCropTopOffset = 0,
						frameCropBottomOffset = 0,
						sarScale = 1,
						expGolombDecoder,
						profileIdc,
						levelIdc,
						profileCompatibility,
						chromaFormatIdc,
						picOrderCntType,
						numRefFramesInPicOrderCntCycle,
						picWidthInMbsMinus1,
						picHeightInMapUnitsMinus1,
						frameMbsOnlyFlag,
						scalingListCount,
						sarRatio,
						aspectRatioIdc,
						i;
					expGolombDecoder = new expGolomb(data);
					profileIdc = expGolombDecoder.readUnsignedByte();
					profileCompatibility = expGolombDecoder.readUnsignedByte();
					levelIdc = expGolombDecoder.readUnsignedByte();
					expGolombDecoder.skipUnsignedExpGolomb();
					if (PROFILES_WITH_OPTIONAL_SPS_DATA[profileIdc]) {
						chromaFormatIdc = expGolombDecoder.readUnsignedExpGolomb();
						if (chromaFormatIdc === 3) {
							expGolombDecoder.skipBits(1);
						}
						expGolombDecoder.skipUnsignedExpGolomb();
						expGolombDecoder.skipUnsignedExpGolomb();
						expGolombDecoder.skipBits(1);
						if (expGolombDecoder.readBoolean()) {
							scalingListCount = chromaFormatIdc !== 3 ? 8 : 12;
							for (i = 0; i < scalingListCount; i++) {
								if (expGolombDecoder.readBoolean()) {
									if (i < 6) {
										skipScalingList(16, expGolombDecoder);
									} else {
										skipScalingList(64, expGolombDecoder);
									}
								}
							}
						}
					}
					expGolombDecoder.skipUnsignedExpGolomb();
					picOrderCntType = expGolombDecoder.readUnsignedExpGolomb();
					if (picOrderCntType === 0) {
						expGolombDecoder.readUnsignedExpGolomb();
					} else if (picOrderCntType === 1) {
						expGolombDecoder.skipBits(1);
						expGolombDecoder.skipExpGolomb();
						expGolombDecoder.skipExpGolomb();
						numRefFramesInPicOrderCntCycle = expGolombDecoder.readUnsignedExpGolomb();
						for (i = 0; i < numRefFramesInPicOrderCntCycle; i++) {
							expGolombDecoder.skipExpGolomb();
						}
					}
					expGolombDecoder.skipUnsignedExpGolomb();
					expGolombDecoder.skipBits(1);
					picWidthInMbsMinus1 = expGolombDecoder.readUnsignedExpGolomb();
					picHeightInMapUnitsMinus1 = expGolombDecoder.readUnsignedExpGolomb();
					frameMbsOnlyFlag = expGolombDecoder.readBits(1);
					if (frameMbsOnlyFlag === 0) {
						expGolombDecoder.skipBits(1);
					}
					expGolombDecoder.skipBits(1);
					if (expGolombDecoder.readBoolean()) {
						frameCropLeftOffset = expGolombDecoder.readUnsignedExpGolomb();
						frameCropRightOffset = expGolombDecoder.readUnsignedExpGolomb();
						frameCropTopOffset = expGolombDecoder.readUnsignedExpGolomb();
						frameCropBottomOffset = expGolombDecoder.readUnsignedExpGolomb();
					}
					if (expGolombDecoder.readBoolean()) {
						if (expGolombDecoder.readBoolean()) {
							aspectRatioIdc = expGolombDecoder.readUnsignedByte();
							switch (aspectRatioIdc) {
								case 1:
									sarRatio = [1, 1]; break;
								case 2:
									sarRatio = [12, 11]; break;
								case 3:
									sarRatio = [10, 11]; break;
								case 4:
									sarRatio = [16, 11]; break;
								case 5:
									sarRatio = [40, 33]; break;
								case 6:
									sarRatio = [24, 11]; break;
								case 7:
									sarRatio = [20, 11]; break;
								case 8:
									sarRatio = [32, 11]; break;
								case 9:
									sarRatio = [80, 33]; break;
								case 10:
									sarRatio = [18, 11]; break;
								case 11:
									sarRatio = [15, 11]; break;
								case 12:
									sarRatio = [64, 33]; break;
								case 13:
									sarRatio = [160, 99]; break;
								case 14:
									sarRatio = [4, 3]; break;
								case 15:
									sarRatio = [3, 2]; break;
								case 16:
									sarRatio = [2, 1]; break;
								case 255:
									{
										sarRatio = [expGolombDecoder.readUnsignedByte() << 8 | expGolombDecoder.readUnsignedByte(), expGolombDecoder.readUnsignedByte() << 8 | expGolombDecoder.readUnsignedByte()];
										break;
									}
							}
							if (sarRatio) {
								sarScale = sarRatio[0] / sarRatio[1];
							}
						}
					}
					return {
						profileIdc: profileIdc,
						levelIdc: levelIdc,
						profileCompatibility: profileCompatibility,
						width: Math.ceil(((picWidthInMbsMinus1 + 1) * 16 - frameCropLeftOffset * 2 - frameCropRightOffset * 2) * sarScale),
						height: (2 - frameMbsOnlyFlag) * (picHeightInMapUnitsMinus1 + 1) * 16 - frameCropTopOffset * 2 - frameCropBottomOffset * 2
					};
				};
			};
			_H264Stream.prototype = new stream();
			var h264 = {
				H264Stream: _H264Stream,
				NalByteStream: _NalByteStream
			};
			var _AacStream;
			_AacStream = function AacStream() {
				var everything = new Uint8Array(),
					timeStamp = 0;
				_AacStream.prototype.init.call(this);
				this.setTimestamp = function (timestamp) {
					timeStamp = timestamp;
				};
				this.parseId3TagSize = function (header, byteIndex) {
					var returnSize = header[byteIndex + 6] << 21 | header[byteIndex + 7] << 14 | header[byteIndex + 8] << 7 | header[byteIndex + 9],
						flags = header[byteIndex + 5],
						footerPresent = (flags & 16) >> 4;
					if (footerPresent) {
						return returnSize + 20;
					}
					return returnSize + 10;
				};
				this.parseAdtsSize = function (header, byteIndex) {
					var lowThree = (header[byteIndex + 5] & 0xE0) >> 5,
						middle = header[byteIndex + 4] << 3,
						highTwo = header[byteIndex + 3] & 0x3 << 11;
					return highTwo | middle | lowThree;
				};
				this.push = function (bytes) {
					var frameSize = 0,
						byteIndex = 0,
						bytesLeft,
						chunk,
						packet,
						tempLength;
					if (everything.length) {
						tempLength = everything.length;
						everything = new Uint8Array(bytes.byteLength + tempLength);
						everything.set(everything.subarray(0, tempLength));
						everything.set(bytes, tempLength);
					} else {
						everything = bytes;
					}
					while (everything.length - byteIndex >= 3) {
						if (everything[byteIndex] === 'I'.charCodeAt(0) && everything[byteIndex + 1] === 'D'.charCodeAt(0) && everything[byteIndex + 2] === '3'.charCodeAt(0)) {
							if (everything.length - byteIndex < 10) {
								break;
							}
							frameSize = this.parseId3TagSize(everything, byteIndex);
							if (frameSize > everything.length) {
								break;
							}
							chunk = {
								type: 'timed-metadata',
								data: everything.subarray(byteIndex, byteIndex + frameSize)
							};
							this.trigger('data', chunk);
							byteIndex += frameSize;
							continue;
						} else if (everything[byteIndex] & 0xff === 0xff && (everything[byteIndex + 1] & 0xf0) === 0xf0) {
							if (everything.length - byteIndex < 7) {
								break;
							}
							frameSize = this.parseAdtsSize(everything, byteIndex);
							if (frameSize > everything.length) {
								break;
							}
							packet = {
								type: 'audio',
								data: everything.subarray(byteIndex, byteIndex + frameSize),
								pts: timeStamp,
								dts: timeStamp
							};
							this.trigger('data', packet);
							byteIndex += frameSize;
							continue;
						}
						byteIndex++;
					}
					bytesLeft = everything.length - byteIndex;
					if (bytesLeft > 0) {
						everything = everything.subarray(byteIndex);
					} else {
						everything = new Uint8Array();
					}
				};
			};
			_AacStream.prototype = new stream();
			var aac = _AacStream;
			var highPrefix = [33, 16, 5, 32, 164, 27];
			var lowPrefix = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252];
			var zeroFill = function zeroFill(count) {
				var a = [];
				while (count--) {
					a.push(0);
				}
				return a;
			};
			var makeTable = function makeTable(metaTable) {
				return Object.keys(metaTable).reduce(function (obj, key) {
					obj[key] = new Uint8Array(metaTable[key].reduce(function (arr, part) {
						return arr.concat(part);
					}, []));
					return obj;
				}, {});
			};
			var coneOfSilence = {
				96000: [highPrefix, [227, 64], zeroFill(154), [56]],
				88200: [highPrefix, [231], zeroFill(170), [56]],
				64000: [highPrefix, [248, 192], zeroFill(240), [56]],
				48000: [highPrefix, [255, 192], zeroFill(268), [55, 148, 128], zeroFill(54), [112]],
				44100: [highPrefix, [255, 192], zeroFill(268), [55, 163, 128], zeroFill(84), [112]],
				32000: [highPrefix, [255, 192], zeroFill(268), [55, 234], zeroFill(226), [112]],
				24000: [highPrefix, [255, 192], zeroFill(268), [55, 255, 128], zeroFill(268), [111, 112], zeroFill(126), [224]],
				16000: [highPrefix, [255, 192], zeroFill(268), [55, 255, 128], zeroFill(268), [111, 255], zeroFill(269), [223, 108], zeroFill(195), [1, 192]],
				12000: [lowPrefix, zeroFill(268), [3, 127, 248], zeroFill(268), [6, 255, 240], zeroFill(268), [13, 255, 224], zeroFill(268), [27, 253, 128], zeroFill(259), [56]],
				11025: [lowPrefix, zeroFill(268), [3, 127, 248], zeroFill(268), [6, 255, 240], zeroFill(268), [13, 255, 224], zeroFill(268), [27, 255, 192], zeroFill(268), [55, 175, 128], zeroFill(108), [112]],
				8000: [lowPrefix, zeroFill(268), [3, 121, 16], zeroFill(47), [7]]
			};
			var silence = makeTable(coneOfSilence);
			var ONE_SECOND_IN_TS$1 = 90000,
				secondsToVideoTs,
				secondsToAudioTs,
				videoTsToSeconds,
				audioTsToSeconds,
				audioTsToVideoTs,
				videoTsToAudioTs;
			secondsToVideoTs = function secondsToVideoTs(seconds) {
				return seconds * ONE_SECOND_IN_TS$1;
			};
			secondsToAudioTs = function secondsToAudioTs(seconds, sampleRate) {
				return seconds * sampleRate;
			};
			videoTsToSeconds = function videoTsToSeconds(timestamp) {
				return timestamp / ONE_SECOND_IN_TS$1;
			};
			audioTsToSeconds = function audioTsToSeconds(timestamp, sampleRate) {
				return timestamp / sampleRate;
			};
			audioTsToVideoTs = function audioTsToVideoTs(timestamp, sampleRate) {
				return secondsToVideoTs(audioTsToSeconds(timestamp, sampleRate));
			};
			videoTsToAudioTs = function videoTsToAudioTs(timestamp, sampleRate) {
				return secondsToAudioTs(videoTsToSeconds(timestamp), sampleRate);
			};
			var clock = {
				secondsToVideoTs: secondsToVideoTs,
				secondsToAudioTs: secondsToAudioTs,
				videoTsToSeconds: videoTsToSeconds,
				audioTsToSeconds: audioTsToSeconds,
				audioTsToVideoTs: audioTsToVideoTs,
				videoTsToAudioTs: videoTsToAudioTs
			};
			var H264Stream = h264.H264Stream;
			var AUDIO_PROPERTIES = ['audioobjecttype', 'channelcount', 'samplerate', 'samplingfrequencyindex', 'samplesize'];
			var VIDEO_PROPERTIES = ['width', 'height', 'profileIdc', 'levelIdc', 'profileCompatibility'];
			var ONE_SECOND_IN_TS$2 = 90000;
			var _VideoSegmentStream, _AudioSegmentStream, _Transmuxer, _CoalesceStream;
			var isLikelyAacData, arrayEquals, sumFrameByteLengths;
			isLikelyAacData = function isLikelyAacData(data) {
				if (data[0] === 'I'.charCodeAt(0) && data[1] === 'D'.charCodeAt(0) && data[2] === '3'.charCodeAt(0)) {
					return true;
				}
				return false;
			};
			arrayEquals = function arrayEquals(a, b) {
				var i;
				if (a.length !== b.length) {
					return false;
				}
				for (i = 0; i < a.length; i++) {
					if (a[i] !== b[i]) {
						return false;
					}
				}
				return true;
			};
			sumFrameByteLengths = function sumFrameByteLengths(array) {
				var i,
					currentObj,
					sum = 0;
				for (i = 0; i < array.length; i++) {
					currentObj = array[i];
					sum += currentObj.data.byteLength;
				}
				return sum;
			};
			_AudioSegmentStream = function AudioSegmentStream(track, options) {
				var adtsFrames = [],
					sequenceNumber = 0,
					earliestAllowedDts = 0,
					audioAppendStartTs = 0,
					videoBaseMediaDecodeTime = Infinity;
				options = options || {};
				_AudioSegmentStream.prototype.init.call(this);
				this.push = function (data) {
					trackDecodeInfo.collectDtsInfo(track, data);
					if (track) {
						AUDIO_PROPERTIES.forEach(function (prop) {
							track[prop] = data[prop];
						});
					}
					adtsFrames.push(data);
				};
				this.setEarliestDts = function (earliestDts) {
					earliestAllowedDts = earliestDts - track.timelineStartInfo.baseMediaDecodeTime;
				};
				this.setVideoBaseMediaDecodeTime = function (baseMediaDecodeTime) {
					videoBaseMediaDecodeTime = baseMediaDecodeTime;
				};
				this.setAudioAppendStart = function (timestamp) {
					audioAppendStartTs = timestamp;
				};
				this.flush = function () {
					var frames, moof, mdat, boxes;
					if (adtsFrames.length === 0) {
						this.trigger('done', 'AudioSegmentStream');
						return;
					}
					frames = this.trimAdtsFramesByEarliestDts_(adtsFrames);
					track.baseMediaDecodeTime = trackDecodeInfo.calculateTrackBaseMediaDecodeTime(track, options.keepOriginalTimestamps);
					this.prefixWithSilence_(track, frames);
					track.samples = this.generateSampleTable_(frames);
					mdat = mp4Generator.mdat(this.concatenateFrameData_(frames));
					adtsFrames = [];
					moof = mp4Generator.moof(sequenceNumber, [track]);
					boxes = new Uint8Array(moof.byteLength + mdat.byteLength);
					sequenceNumber++;
					boxes.set(moof);
					boxes.set(mdat, moof.byteLength);
					trackDecodeInfo.clearDtsInfo(track);
					this.trigger('data', { track: track, boxes: boxes });
					this.trigger('done', 'AudioSegmentStream');
				};
				this.prefixWithSilence_ = function (track, frames) {
					var baseMediaDecodeTimeTs,
						frameDuration = 0,
						audioGapDuration = 0,
						audioFillFrameCount = 0,
						audioFillDuration = 0,
						silentFrame,
						i;
					if (!frames.length) {
						return;
					}
					baseMediaDecodeTimeTs = clock.audioTsToVideoTs(track.baseMediaDecodeTime, track.samplerate);
					frameDuration = Math.ceil(ONE_SECOND_IN_TS$2 / (track.samplerate / 1024));
					if (audioAppendStartTs && videoBaseMediaDecodeTime) {
						audioGapDuration = baseMediaDecodeTimeTs - Math.max(audioAppendStartTs, videoBaseMediaDecodeTime);
						audioFillFrameCount = Math.floor(audioGapDuration / frameDuration);
						audioFillDuration = audioFillFrameCount * frameDuration;
					}
					if (audioFillFrameCount < 1 || audioFillDuration > ONE_SECOND_IN_TS$2 / 2) {
						return;
					}
					silentFrame = silence[track.samplerate];
					if (!silentFrame) {
						silentFrame = frames[0].data;
					}
					for (i = 0; i < audioFillFrameCount; i++) {
						frames.splice(i, 0, {
							data: silentFrame
						});
					}
					track.baseMediaDecodeTime -= Math.floor(clock.videoTsToAudioTs(audioFillDuration, track.samplerate));
				};
				this.trimAdtsFramesByEarliestDts_ = function (adtsFrames) {
					if (track.minSegmentDts >= earliestAllowedDts) {
						return adtsFrames;
					}
					track.minSegmentDts = Infinity;
					return adtsFrames.filter(function (currentFrame) {
						if (currentFrame.dts >= earliestAllowedDts) {
							track.minSegmentDts = Math.min(track.minSegmentDts, currentFrame.dts);
							track.minSegmentPts = track.minSegmentDts;
							return true;
						}
						return false;
					});
				};
				this.generateSampleTable_ = function (frames) {
					var i,
						currentFrame,
						samples = [];
					for (i = 0; i < frames.length; i++) {
						currentFrame = frames[i];
						samples.push({
							size: currentFrame.data.byteLength,
							duration: 1024
						});
					}
					return samples;
				};
				this.concatenateFrameData_ = function (frames) {
					var i,
						currentFrame,
						dataOffset = 0,
						data = new Uint8Array(sumFrameByteLengths(frames));
					for (i = 0; i < frames.length; i++) {
						currentFrame = frames[i];
						data.set(currentFrame.data, dataOffset);
						dataOffset += currentFrame.data.byteLength;
					}
					return data;
				};
			};
			_AudioSegmentStream.prototype = new stream();
			_VideoSegmentStream = function VideoSegmentStream(track, options) {
				var sequenceNumber = 0,
					nalUnits = [],
					gopsToAlignWith = [],
					config,
					pps;
				options = options || {};
				_VideoSegmentStream.prototype.init.call(this);
				delete track.minPTS;
				this.gopCache_ = [];
				this.push = function (nalUnit) {
					trackDecodeInfo.collectDtsInfo(track, nalUnit);
					if (nalUnit.nalUnitType === 'seq_parameter_set_rbsp' && !config) {
						config = nalUnit.config;
						track.sps = [nalUnit.data];
						VIDEO_PROPERTIES.forEach(function (prop) {
							track[prop] = config[prop];
						}, this);
					}
					if (nalUnit.nalUnitType === 'pic_parameter_set_rbsp' && !pps) {
						pps = nalUnit.data;
						track.pps = [nalUnit.data];
					}
					nalUnits.push(nalUnit);
				};
				this.flush = function () {
					var frames, gopForFusion, gops, moof, mdat, boxes;
					while (nalUnits.length) {
						if (nalUnits[0].nalUnitType === 'access_unit_delimiter_rbsp') {
							break;
						}
						nalUnits.shift();
					}
					if (nalUnits.length === 0) {
						this.resetStream_();
						this.trigger('done', 'VideoSegmentStream');
						return;
					}
					frames = frameUtils.groupNalsIntoFrames(nalUnits);
					gops = frameUtils.groupFramesIntoGops(frames);
					if (!gops[0][0].keyFrame) {
						gopForFusion = this.getGopForFusion_(nalUnits[0], track);
						if (gopForFusion) {
							gops.unshift(gopForFusion);
							gops.byteLength += gopForFusion.byteLength;
							gops.nalCount += gopForFusion.nalCount;
							gops.pts = gopForFusion.pts;
							gops.dts = gopForFusion.dts;
							gops.duration += gopForFusion.duration;
						} else {
							gops = frameUtils.extendFirstKeyFrame(gops);
						}
					}
					if (gopsToAlignWith.length) {
						var alignedGops;
						if (options.alignGopsAtEnd) {
							alignedGops = this.alignGopsAtEnd_(gops);
						} else {
							alignedGops = this.alignGopsAtStart_(gops);
						}
						if (!alignedGops) {
							this.gopCache_.unshift({
								gop: gops.pop(),
								pps: track.pps,
								sps: track.sps
							});
							this.gopCache_.length = Math.min(6, this.gopCache_.length);
							nalUnits = [];
							this.resetStream_();
							this.trigger('done', 'VideoSegmentStream');
							return;
						}
						trackDecodeInfo.clearDtsInfo(track);
						gops = alignedGops;
					}
					trackDecodeInfo.collectDtsInfo(track, gops);
					track.samples = frameUtils.generateSampleTable(gops);
					mdat = mp4Generator.mdat(frameUtils.concatenateNalData(gops));
					track.baseMediaDecodeTime = trackDecodeInfo.calculateTrackBaseMediaDecodeTime(track, options.keepOriginalTimestamps);
					this.trigger('processedGopsInfo', gops.map(function (gop) {
						return {
							pts: gop.pts,
							dts: gop.dts,
							byteLength: gop.byteLength
						};
					}));
					this.gopCache_.unshift({
						gop: gops.pop(),
						pps: track.pps,
						sps: track.sps
					});
					this.gopCache_.length = Math.min(6, this.gopCache_.length);
					nalUnits = [];
					this.trigger('baseMediaDecodeTime', track.baseMediaDecodeTime);
					this.trigger('timelineStartInfo', track.timelineStartInfo);
					moof = mp4Generator.moof(sequenceNumber, [track]);
					boxes = new Uint8Array(moof.byteLength + mdat.byteLength);
					sequenceNumber++;
					boxes.set(moof);
					boxes.set(mdat, moof.byteLength);
					this.trigger('data', { track: track, boxes: boxes });
					this.resetStream_();
					this.trigger('done', 'VideoSegmentStream');
				};
				this.resetStream_ = function () {
					trackDecodeInfo.clearDtsInfo(track);
					config = undefined;
					pps = undefined;
				};
				this.getGopForFusion_ = function (nalUnit) {
					var halfSecond = 45000,
						allowableOverlap = 10000,
						nearestDistance = Infinity,
						dtsDistance,
						nearestGopObj,
						currentGop,
						currentGopObj,
						i;
					for (i = 0; i < this.gopCache_.length; i++) {
						currentGopObj = this.gopCache_[i];
						currentGop = currentGopObj.gop;
						if (!(track.pps && arrayEquals(track.pps[0], currentGopObj.pps[0])) || !(track.sps && arrayEquals(track.sps[0], currentGopObj.sps[0]))) {
							continue;
						}
						if (currentGop.dts < track.timelineStartInfo.dts) {
							continue;
						}
						dtsDistance = nalUnit.dts - currentGop.dts - currentGop.duration;
						if (dtsDistance >= -allowableOverlap && dtsDistance <= halfSecond) {
							if (!nearestGopObj || nearestDistance > dtsDistance) {
								nearestGopObj = currentGopObj;
								nearestDistance = dtsDistance;
							}
						}
					}
					if (nearestGopObj) {
						return nearestGopObj.gop;
					}
					return null;
				};
				this.alignGopsAtStart_ = function (gops) {
					var alignIndex, gopIndex, align, gop, byteLength, nalCount, duration, alignedGops;
					byteLength = gops.byteLength;
					nalCount = gops.nalCount;
					duration = gops.duration;
					alignIndex = gopIndex = 0;
					while (alignIndex < gopsToAlignWith.length && gopIndex < gops.length) {
						align = gopsToAlignWith[alignIndex];
						gop = gops[gopIndex];
						if (align.pts === gop.pts) {
							break;
						}
						if (gop.pts > align.pts) {
							alignIndex++;
							continue;
						}
						gopIndex++;
						byteLength -= gop.byteLength;
						nalCount -= gop.nalCount;
						duration -= gop.duration;
					}
					if (gopIndex === 0) {
						return gops;
					}
					if (gopIndex === gops.length) {
						return null;
					}
					alignedGops = gops.slice(gopIndex);
					alignedGops.byteLength = byteLength;
					alignedGops.duration = duration;
					alignedGops.nalCount = nalCount;
					alignedGops.pts = alignedGops[0].pts;
					alignedGops.dts = alignedGops[0].dts;
					return alignedGops;
				};
				this.alignGopsAtEnd_ = function (gops) {
					var alignIndex, gopIndex, align, gop, alignEndIndex, matchFound;
					alignIndex = gopsToAlignWith.length - 1;
					gopIndex = gops.length - 1;
					alignEndIndex = null;
					matchFound = false;
					while (alignIndex >= 0 && gopIndex >= 0) {
						align = gopsToAlignWith[alignIndex];
						gop = gops[gopIndex];
						if (align.pts === gop.pts) {
							matchFound = true;
							break;
						}
						if (align.pts > gop.pts) {
							alignIndex--;
							continue;
						}
						if (alignIndex === gopsToAlignWith.length - 1) {
							alignEndIndex = gopIndex;
						}
						gopIndex--;
					}
					if (!matchFound && alignEndIndex === null) {
						return null;
					}
					var trimIndex;
					if (matchFound) {
						trimIndex = gopIndex;
					} else {
						trimIndex = alignEndIndex;
					}
					if (trimIndex === 0) {
						return gops;
					}
					var alignedGops = gops.slice(trimIndex);
					var metadata = alignedGops.reduce(function (total, gop) {
						total.byteLength += gop.byteLength;
						total.duration += gop.duration;
						total.nalCount += gop.nalCount;
						return total;
					}, { byteLength: 0, duration: 0, nalCount: 0 });
					alignedGops.byteLength = metadata.byteLength;
					alignedGops.duration = metadata.duration;
					alignedGops.nalCount = metadata.nalCount;
					alignedGops.pts = alignedGops[0].pts;
					alignedGops.dts = alignedGops[0].dts;
					return alignedGops;
				};
				this.alignGopsWith = function (newGopsToAlignWith) {
					gopsToAlignWith = newGopsToAlignWith;
				};
			};
			_VideoSegmentStream.prototype = new stream();
			_CoalesceStream = function CoalesceStream(options, metadataStream) {
				this.numberOfTracks = 0;
				this.metadataStream = metadataStream;
				if (typeof options.remux !== 'undefined') {
					this.remuxTracks = !!options.remux;
				} else {
					this.remuxTracks = true;
				}
				this.pendingTracks = [];
				this.videoTrack = null;
				this.pendingBoxes = [];
				this.pendingCaptions = [];
				this.pendingMetadata = [];
				this.pendingBytes = 0;
				this.emittedTracks = 0;
				_CoalesceStream.prototype.init.call(this);
				this.push = function (output) {
					if (output.text) {
						return this.pendingCaptions.push(output);
					}
					if (output.frames) {
						return this.pendingMetadata.push(output);
					}
					this.pendingTracks.push(output.track);
					this.pendingBoxes.push(output.boxes);
					this.pendingBytes += output.boxes.byteLength;
					if (output.track.type === 'video') {
						this.videoTrack = output.track;
					}
					if (output.track.type === 'audio') {
						this.audioTrack = output.track;
					}
				};
			};
			_CoalesceStream.prototype = new stream();
			_CoalesceStream.prototype.flush = function (flushSource) {
				var offset = 0,
					event = {
						captions: [],
						captionStreams: {},
						metadata: [],
						info: {}
					},
					caption,
					id3,
					initSegment,
					timelineStartPts = 0,
					i;
				if (this.pendingTracks.length < this.numberOfTracks) {
					if (flushSource !== 'VideoSegmentStream' && flushSource !== 'AudioSegmentStream') {
						return;
					} else if (this.remuxTracks) {
						return;
					} else if (this.pendingTracks.length === 0) {
						this.emittedTracks++;
						if (this.emittedTracks >= this.numberOfTracks) {
							this.trigger('done');
							this.emittedTracks = 0;
						}
						return;
					}
				}
				if (this.videoTrack) {
					timelineStartPts = this.videoTrack.timelineStartInfo.pts;
					VIDEO_PROPERTIES.forEach(function (prop) {
						event.info[prop] = this.videoTrack[prop];
					}, this);
				} else if (this.audioTrack) {
					timelineStartPts = this.audioTrack.timelineStartInfo.pts;
					AUDIO_PROPERTIES.forEach(function (prop) {
						event.info[prop] = this.audioTrack[prop];
					}, this);
				}
				if (this.pendingTracks.length === 1) {
					event.type = this.pendingTracks[0].type;
				} else {
					event.type = 'combined';
				}
				this.emittedTracks += this.pendingTracks.length;
				initSegment = mp4Generator.initSegment(this.pendingTracks);
				event.initSegment = new Uint8Array(initSegment.byteLength);
				event.initSegment.set(initSegment);
				event.data = new Uint8Array(this.pendingBytes);
				for (i = 0; i < this.pendingBoxes.length; i++) {
					event.data.set(this.pendingBoxes[i], offset);
					offset += this.pendingBoxes[i].byteLength;
				}
				for (i = 0; i < this.pendingCaptions.length; i++) {
					caption = this.pendingCaptions[i];
					caption.startTime = caption.startPts - timelineStartPts;
					caption.startTime /= 90e3;
					caption.endTime = caption.endPts - timelineStartPts;
					caption.endTime /= 90e3;
					event.captionStreams[caption.stream] = true;
					event.captions.push(caption);
				}
				for (i = 0; i < this.pendingMetadata.length; i++) {
					id3 = this.pendingMetadata[i];
					id3.cueTime = id3.pts - timelineStartPts;
					id3.cueTime /= 90e3;
					event.metadata.push(id3);
				}
				event.metadata.dispatchType = this.metadataStream.dispatchType;
				this.pendingTracks.length = 0;
				this.videoTrack = null;
				this.pendingBoxes.length = 0;
				this.pendingCaptions.length = 0;
				this.pendingBytes = 0;
				this.pendingMetadata.length = 0;
				this.trigger('data', event);
				if (this.emittedTracks >= this.numberOfTracks) {
					this.trigger('done');
					this.emittedTracks = 0;
				}
			};
			_Transmuxer = function Transmuxer(options) {
				var self = this,
					hasFlushed = true,
					videoTrack,
					audioTrack;
				_Transmuxer.prototype.init.call(this);
				options = options || {};
				this.baseMediaDecodeTime = options.baseMediaDecodeTime || 0;
				this.transmuxPipeline_ = {};
				this.setupAacPipeline = function () {
					var pipeline = {};
					this.transmuxPipeline_ = pipeline;
					pipeline.type = 'aac';
					pipeline.metadataStream = new m2ts_1.MetadataStream();
					pipeline.aacStream = new aac();
					pipeline.audioTimestampRolloverStream = new m2ts_1.TimestampRolloverStream('audio');
					pipeline.timedMetadataTimestampRolloverStream = new m2ts_1.TimestampRolloverStream('timed-metadata');
					pipeline.adtsStream = new adts();
					pipeline.coalesceStream = new _CoalesceStream(options, pipeline.metadataStream);
					pipeline.headOfPipeline = pipeline.aacStream;
					pipeline.aacStream.pipe(pipeline.audioTimestampRolloverStream).pipe(pipeline.adtsStream);
					pipeline.aacStream.pipe(pipeline.timedMetadataTimestampRolloverStream).pipe(pipeline.metadataStream).pipe(pipeline.coalesceStream);
					pipeline.metadataStream.on('timestamp', function (frame) {
						pipeline.aacStream.setTimestamp(frame.timeStamp);
					});
					pipeline.aacStream.on('data', function (data) {
						if (data.type === 'timed-metadata' && !pipeline.audioSegmentStream) {
							audioTrack = audioTrack || {
								timelineStartInfo: {
									baseMediaDecodeTime: self.baseMediaDecodeTime
								},
								codec: 'adts',
								type: 'audio'
							};
							pipeline.coalesceStream.numberOfTracks++;
							pipeline.audioSegmentStream = new _AudioSegmentStream(audioTrack, options);
							pipeline.adtsStream.pipe(pipeline.audioSegmentStream).pipe(pipeline.coalesceStream);
						}
					});
					pipeline.coalesceStream.on('data', this.trigger.bind(this, 'data'));
					pipeline.coalesceStream.on('done', this.trigger.bind(this, 'done'));
				};
				this.setupTsPipeline = function () {
					var pipeline = {};
					this.transmuxPipeline_ = pipeline;
					pipeline.type = 'ts';
					pipeline.metadataStream = new m2ts_1.MetadataStream();
					pipeline.packetStream = new m2ts_1.TransportPacketStream();
					pipeline.parseStream = new m2ts_1.TransportParseStream();
					pipeline.elementaryStream = new m2ts_1.ElementaryStream();
					pipeline.videoTimestampRolloverStream = new m2ts_1.TimestampRolloverStream('video');
					pipeline.audioTimestampRolloverStream = new m2ts_1.TimestampRolloverStream('audio');
					pipeline.timedMetadataTimestampRolloverStream = new m2ts_1.TimestampRolloverStream('timed-metadata');
					pipeline.adtsStream = new adts();
					pipeline.h264Stream = new H264Stream();
					pipeline.captionStream = new m2ts_1.CaptionStream();
					pipeline.coalesceStream = new _CoalesceStream(options, pipeline.metadataStream);
					pipeline.headOfPipeline = pipeline.packetStream;
					pipeline.packetStream.pipe(pipeline.parseStream).pipe(pipeline.elementaryStream);
					pipeline.elementaryStream.pipe(pipeline.videoTimestampRolloverStream).pipe(pipeline.h264Stream);
					pipeline.elementaryStream.pipe(pipeline.audioTimestampRolloverStream).pipe(pipeline.adtsStream);
					pipeline.elementaryStream.pipe(pipeline.timedMetadataTimestampRolloverStream).pipe(pipeline.metadataStream).pipe(pipeline.coalesceStream);
					pipeline.h264Stream.pipe(pipeline.captionStream).pipe(pipeline.coalesceStream);
					pipeline.elementaryStream.on('data', function (data) {
						var i;
						if (data.type === 'metadata') {
							i = data.tracks.length;
							while (i--) {
								if (!videoTrack && data.tracks[i].type === 'video') {
									videoTrack = data.tracks[i];
									videoTrack.timelineStartInfo.baseMediaDecodeTime = self.baseMediaDecodeTime;
								} else if (!audioTrack && data.tracks[i].type === 'audio') {
									audioTrack = data.tracks[i];
									audioTrack.timelineStartInfo.baseMediaDecodeTime = self.baseMediaDecodeTime;
								}
							}
							if (videoTrack && !pipeline.videoSegmentStream) {
								pipeline.coalesceStream.numberOfTracks++;
								pipeline.videoSegmentStream = new _VideoSegmentStream(videoTrack, options);
								pipeline.videoSegmentStream.on('timelineStartInfo', function (timelineStartInfo) {
									if (audioTrack) {
										audioTrack.timelineStartInfo = timelineStartInfo;
										pipeline.audioSegmentStream.setEarliestDts(timelineStartInfo.dts);
									}
								});
								pipeline.videoSegmentStream.on('processedGopsInfo', self.trigger.bind(self, 'gopInfo'));
								pipeline.videoSegmentStream.on('baseMediaDecodeTime', function (baseMediaDecodeTime) {
									if (audioTrack) {
										pipeline.audioSegmentStream.setVideoBaseMediaDecodeTime(baseMediaDecodeTime);
									}
								});
								pipeline.h264Stream.pipe(pipeline.videoSegmentStream).pipe(pipeline.coalesceStream);
							}
							if (audioTrack && !pipeline.audioSegmentStream) {
								pipeline.coalesceStream.numberOfTracks++;
								pipeline.audioSegmentStream = new _AudioSegmentStream(audioTrack, options);
								pipeline.adtsStream.pipe(pipeline.audioSegmentStream).pipe(pipeline.coalesceStream);
							}
						}
					});
					pipeline.coalesceStream.on('data', this.trigger.bind(this, 'data'));
					pipeline.coalesceStream.on('done', this.trigger.bind(this, 'done'));
				};
				this.setBaseMediaDecodeTime = function (baseMediaDecodeTime) {
					var pipeline = this.transmuxPipeline_;
					this.baseMediaDecodeTime = baseMediaDecodeTime;
					if (audioTrack) {
						audioTrack.timelineStartInfo.dts = undefined;
						audioTrack.timelineStartInfo.pts = undefined;
						trackDecodeInfo.clearDtsInfo(audioTrack);
						audioTrack.timelineStartInfo.baseMediaDecodeTime = baseMediaDecodeTime;
						if (pipeline.audioTimestampRolloverStream) {
							pipeline.audioTimestampRolloverStream.discontinuity();
						}
					}
					if (videoTrack) {
						if (pipeline.videoSegmentStream) {
							pipeline.videoSegmentStream.gopCache_ = [];
							pipeline.videoTimestampRolloverStream.discontinuity();
						}
						videoTrack.timelineStartInfo.dts = undefined;
						videoTrack.timelineStartInfo.pts = undefined;
						trackDecodeInfo.clearDtsInfo(videoTrack);
						pipeline.captionStream.reset();
						videoTrack.timelineStartInfo.baseMediaDecodeTime = baseMediaDecodeTime;
					}
					if (pipeline.timedMetadataTimestampRolloverStream) {
						pipeline.timedMetadataTimestampRolloverStream.discontinuity();
					}
				};
				this.setAudioAppendStart = function (timestamp) {
					if (audioTrack) {
						this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(timestamp);
					}
				};
				this.alignGopsWith = function (gopsToAlignWith) {
					if (videoTrack && this.transmuxPipeline_.videoSegmentStream) {
						this.transmuxPipeline_.videoSegmentStream.alignGopsWith(gopsToAlignWith);
					}
				};
				this.push = function (data) {
					if (hasFlushed) {
						var isAac = isLikelyAacData(data);
						if (isAac && this.transmuxPipeline_.type !== 'aac') {
							this.setupAacPipeline();
						} else if (!isAac && this.transmuxPipeline_.type !== 'ts') {
							this.setupTsPipeline();
						}
						hasFlushed = false;
					}
					this.transmuxPipeline_.headOfPipeline.push(data);
				};
				this.flush = function () {
					hasFlushed = true;
					this.transmuxPipeline_.headOfPipeline.flush();
				};
				this.resetCaptions = function () {
					if (this.transmuxPipeline_.captionStream) {
						this.transmuxPipeline_.captionStream.reset();
					}
				};
			};
			_Transmuxer.prototype = new stream();
			var transmuxer = {
				Transmuxer: _Transmuxer,
				VideoSegmentStream: _VideoSegmentStream,
				AudioSegmentStream: _AudioSegmentStream,
				AUDIO_PROPERTIES: AUDIO_PROPERTIES,
				VIDEO_PROPERTIES: VIDEO_PROPERTIES
			};
			var inspectMp4,
				_textifyMp,
				parseType$1 = probe$$1.parseType,
				parseMp4Date = function parseMp4Date(seconds) {
					return new Date(seconds * 1000 - 2082844800000);
				},
				parseSampleFlags = function parseSampleFlags(flags) {
					return {
						isLeading: (flags[0] & 0x0c) >>> 2,
						dependsOn: flags[0] & 0x03,
						isDependedOn: (flags[1] & 0xc0) >>> 6,
						hasRedundancy: (flags[1] & 0x30) >>> 4,
						paddingValue: (flags[1] & 0x0e) >>> 1,
						isNonSyncSample: flags[1] & 0x01,
						degradationPriority: flags[2] << 8 | flags[3]
					};
				},
				nalParse = function nalParse(avcStream) {
					var avcView = new DataView(avcStream.buffer, avcStream.byteOffset, avcStream.byteLength),
						result = [],
						i,
						length;
					for (i = 0; i + 4 < avcStream.length; i += length) {
						length = avcView.getUint32(i);
						i += 4;
						if (length <= 0) {
							result.push('<span style=\'color:red;\'>MALFORMED DATA</span>');
							continue;
						}
						switch (avcStream[i] & 0x1F) {
							case 0x01:
								result.push('slice_layer_without_partitioning_rbsp');
								break;
							case 0x05:
								result.push('slice_layer_without_partitioning_rbsp_idr');
								break;
							case 0x06:
								result.push('sei_rbsp');
								break;
							case 0x07:
								result.push('seq_parameter_set_rbsp');
								break;
							case 0x08:
								result.push('pic_parameter_set_rbsp');
								break;
							case 0x09:
								result.push('access_unit_delimiter_rbsp');
								break;
							default:
								result.push('UNKNOWN NAL - ' + avcStream[i] & 0x1F);
								break;
						}
					}
					return result;
				},
				parse$$1 = {
					avc1: function avc1(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
						return {
							dataReferenceIndex: view.getUint16(6),
							width: view.getUint16(24),
							height: view.getUint16(26),
							horizresolution: view.getUint16(28) + view.getUint16(30) / 16,
							vertresolution: view.getUint16(32) + view.getUint16(34) / 16,
							frameCount: view.getUint16(40),
							depth: view.getUint16(74),
							config: inspectMp4(data.subarray(78, data.byteLength))
						};
					},
					avcC: function avcC(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
							result = {
								configurationVersion: data[0],
								avcProfileIndication: data[1],
								profileCompatibility: data[2],
								avcLevelIndication: data[3],
								lengthSizeMinusOne: data[4] & 0x03,
								sps: [],
								pps: []
							},
							numOfSequenceParameterSets = data[5] & 0x1f,
							numOfPictureParameterSets,
							nalSize,
							offset,
							i;
						offset = 6;
						for (i = 0; i < numOfSequenceParameterSets; i++) {
							nalSize = view.getUint16(offset);
							offset += 2;
							result.sps.push(new Uint8Array(data.subarray(offset, offset + nalSize)));
							offset += nalSize;
						}
						numOfPictureParameterSets = data[offset];
						offset++;
						for (i = 0; i < numOfPictureParameterSets; i++) {
							nalSize = view.getUint16(offset);
							offset += 2;
							result.pps.push(new Uint8Array(data.subarray(offset, offset + nalSize)));
							offset += nalSize;
						}
						return result;
					},
					btrt: function btrt(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
						return {
							bufferSizeDB: view.getUint32(0),
							maxBitrate: view.getUint32(4),
							avgBitrate: view.getUint32(8)
						};
					},
					esds: function esds(data) {
						return {
							version: data[0],
							flags: new Uint8Array(data.subarray(1, 4)),
							esId: data[6] << 8 | data[7],
							streamPriority: data[8] & 0x1f,
							decoderConfig: {
								objectProfileIndication: data[11],
								streamType: data[12] >>> 2 & 0x3f,
								bufferSize: data[13] << 16 | data[14] << 8 | data[15],
								maxBitrate: data[16] << 24 | data[17] << 16 | data[18] << 8 | data[19],
								avgBitrate: data[20] << 24 | data[21] << 16 | data[22] << 8 | data[23],
								decoderConfigDescriptor: {
									tag: data[24],
									length: data[25],
									audioObjectType: data[26] >>> 3 & 0x1f,
									samplingFrequencyIndex: (data[26] & 0x07) << 1 | data[27] >>> 7 & 0x01,
									channelConfiguration: data[27] >>> 3 & 0x0f
								}
							}
						};
					},
					ftyp: function ftyp(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
							result = {
								majorBrand: parseType$1(data.subarray(0, 4)),
								minorVersion: view.getUint32(4),
								compatibleBrands: []
							},
							i = 8;
						while (i < data.byteLength) {
							result.compatibleBrands.push(parseType$1(data.subarray(i, i + 4)));
							i += 4;
						}
						return result;
					},
					dinf: function dinf(data) {
						return {
							boxes: inspectMp4(data)
						};
					},
					dref: function dref(data) {
						return {
							version: data[0],
							flags: new Uint8Array(data.subarray(1, 4)),
							dataReferences: inspectMp4(data.subarray(8))
						};
					},
					hdlr: function hdlr(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
							result = {
								version: view.getUint8(0),
								flags: new Uint8Array(data.subarray(1, 4)),
								handlerType: parseType$1(data.subarray(8, 12)),
								name: ''
							},
							i = 8;
						for (i = 24; i < data.byteLength; i++) {
							if (data[i] === 0x00) {
								i++;
								break;
							}
							result.name += String.fromCharCode(data[i]);
						}
						result.name = decodeURIComponent(escape(result.name));
						return result;
					},
					mdat: function mdat(data) {
						return {
							byteLength: data.byteLength,
							nals: nalParse(data)
						};
					},
					mdhd: function mdhd(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
							i = 4,
							language,
							result = {
								version: view.getUint8(0),
								flags: new Uint8Array(data.subarray(1, 4)),
								language: ''
							};
						if (result.version === 1) {
							i += 4;
							result.creationTime = parseMp4Date(view.getUint32(i));
							i += 8;
							result.modificationTime = parseMp4Date(view.getUint32(i));
							i += 4;
							result.timescale = view.getUint32(i);
							i += 8;
							result.duration = view.getUint32(i);
						} else {
							result.creationTime = parseMp4Date(view.getUint32(i));
							i += 4;
							result.modificationTime = parseMp4Date(view.getUint32(i));
							i += 4;
							result.timescale = view.getUint32(i);
							i += 4;
							result.duration = view.getUint32(i);
						}
						i += 4;
						language = view.getUint16(i);
						result.language += String.fromCharCode((language >> 10) + 0x60);
						result.language += String.fromCharCode(((language & 0x03e0) >> 5) + 0x60);
						result.language += String.fromCharCode((language & 0x1f) + 0x60);
						return result;
					},
					mdia: function mdia(data) {
						return {
							boxes: inspectMp4(data)
						};
					},
					mfhd: function mfhd(data) {
						return {
							version: data[0],
							flags: new Uint8Array(data.subarray(1, 4)),
							sequenceNumber: data[4] << 24 | data[5] << 16 | data[6] << 8 | data[7]
						};
					},
					minf: function minf(data) {
						return {
							boxes: inspectMp4(data)
						};
					},
					mp4a: function mp4a(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
							result = {
								dataReferenceIndex: view.getUint16(6),
								channelcount: view.getUint16(16),
								samplesize: view.getUint16(18),
								samplerate: view.getUint16(24) + view.getUint16(26) / 65536
							};
						if (data.byteLength > 28) {
							result.streamDescriptor = inspectMp4(data.subarray(28))[0];
						}
						return result;
					},
					moof: function moof(data) {
						return {
							boxes: inspectMp4(data)
						};
					},
					moov: function moov(data) {
						return {
							boxes: inspectMp4(data)
						};
					},
					mvex: function mvex(data) {
						return {
							boxes: inspectMp4(data)
						};
					},
					mvhd: function mvhd(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
							i = 4,
							result = {
								version: view.getUint8(0),
								flags: new Uint8Array(data.subarray(1, 4))
							};
						if (result.version === 1) {
							i += 4;
							result.creationTime = parseMp4Date(view.getUint32(i));
							i += 8;
							result.modificationTime = parseMp4Date(view.getUint32(i));
							i += 4;
							result.timescale = view.getUint32(i);
							i += 8;
							result.duration = view.getUint32(i);
						} else {
							result.creationTime = parseMp4Date(view.getUint32(i));
							i += 4;
							result.modificationTime = parseMp4Date(view.getUint32(i));
							i += 4;
							result.timescale = view.getUint32(i);
							i += 4;
							result.duration = view.getUint32(i);
						}
						i += 4;
						result.rate = view.getUint16(i) + view.getUint16(i + 2) / 16;
						i += 4;
						result.volume = view.getUint8(i) + view.getUint8(i + 1) / 8;
						i += 2;
						i += 2;
						i += 2 * 4;
						result.matrix = new Uint32Array(data.subarray(i, i + 9 * 4));
						i += 9 * 4;
						i += 6 * 4;
						result.nextTrackId = view.getUint32(i);
						return result;
					},
					pdin: function pdin(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
						return {
							version: view.getUint8(0),
							flags: new Uint8Array(data.subarray(1, 4)),
							rate: view.getUint32(4),
							initialDelay: view.getUint32(8)
						};
					},
					sdtp: function sdtp(data) {
						var result = {
							version: data[0],
							flags: new Uint8Array(data.subarray(1, 4)),
							samples: []
						},
							i;
						for (i = 4; i < data.byteLength; i++) {
							result.samples.push({
								dependsOn: (data[i] & 0x30) >> 4,
								isDependedOn: (data[i] & 0x0c) >> 2,
								hasRedundancy: data[i] & 0x03
							});
						}
						return result;
					},
					sidx: function sidx(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
							result = {
								version: data[0],
								flags: new Uint8Array(data.subarray(1, 4)),
								references: [],
								referenceId: view.getUint32(4),
								timescale: view.getUint32(8),
								earliestPresentationTime: view.getUint32(12),
								firstOffset: view.getUint32(16)
							},
							referenceCount = view.getUint16(22),
							i;
						for (i = 24; referenceCount; i += 12, referenceCount--) {
							result.references.push({
								referenceType: (data[i] & 0x80) >>> 7,
								referencedSize: view.getUint32(i) & 0x7FFFFFFF,
								subsegmentDuration: view.getUint32(i + 4),
								startsWithSap: !!(data[i + 8] & 0x80),
								sapType: (data[i + 8] & 0x70) >>> 4,
								sapDeltaTime: view.getUint32(i + 8) & 0x0FFFFFFF
							});
						}
						return result;
					},
					smhd: function smhd(data) {
						return {
							version: data[0],
							flags: new Uint8Array(data.subarray(1, 4)),
							balance: data[4] + data[5] / 256
						};
					},
					stbl: function stbl(data) {
						return {
							boxes: inspectMp4(data)
						};
					},
					stco: function stco(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
							result = {
								version: data[0],
								flags: new Uint8Array(data.subarray(1, 4)),
								chunkOffsets: []
							},
							entryCount = view.getUint32(4),
							i;
						for (i = 8; entryCount; i += 4, entryCount--) {
							result.chunkOffsets.push(view.getUint32(i));
						}
						return result;
					},
					stsc: function stsc(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
							entryCount = view.getUint32(4),
							result = {
								version: data[0],
								flags: new Uint8Array(data.subarray(1, 4)),
								sampleToChunks: []
							},
							i;
						for (i = 8; entryCount; i += 12, entryCount--) {
							result.sampleToChunks.push({
								firstChunk: view.getUint32(i),
								samplesPerChunk: view.getUint32(i + 4),
								sampleDescriptionIndex: view.getUint32(i + 8)
							});
						}
						return result;
					},
					stsd: function stsd(data) {
						return {
							version: data[0],
							flags: new Uint8Array(data.subarray(1, 4)),
							sampleDescriptions: inspectMp4(data.subarray(8))
						};
					},
					stsz: function stsz(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
							result = {
								version: data[0],
								flags: new Uint8Array(data.subarray(1, 4)),
								sampleSize: view.getUint32(4),
								entries: []
							},
							i;
						for (i = 12; i < data.byteLength; i += 4) {
							result.entries.push(view.getUint32(i));
						}
						return result;
					},
					stts: function stts(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
							result = {
								version: data[0],
								flags: new Uint8Array(data.subarray(1, 4)),
								timeToSamples: []
							},
							entryCount = view.getUint32(4),
							i;
						for (i = 8; entryCount; i += 8, entryCount--) {
							result.timeToSamples.push({
								sampleCount: view.getUint32(i),
								sampleDelta: view.getUint32(i + 4)
							});
						}
						return result;
					},
					styp: function styp(data) {
						return parse$$1.ftyp(data);
					},
					tfdt: function tfdt(data) {
						var result = {
							version: data[0],
							flags: new Uint8Array(data.subarray(1, 4)),
							baseMediaDecodeTime: data[4] << 24 | data[5] << 16 | data[6] << 8 | data[7]
						};
						if (result.version === 1) {
							result.baseMediaDecodeTime *= Math.pow(2, 32);
							result.baseMediaDecodeTime += data[8] << 24 | data[9] << 16 | data[10] << 8 | data[11];
						}
						return result;
					},
					tfhd: function tfhd(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
							result = {
								version: data[0],
								flags: new Uint8Array(data.subarray(1, 4)),
								trackId: view.getUint32(4)
							},
							baseDataOffsetPresent = result.flags[2] & 0x01,
							sampleDescriptionIndexPresent = result.flags[2] & 0x02,
							defaultSampleDurationPresent = result.flags[2] & 0x08,
							defaultSampleSizePresent = result.flags[2] & 0x10,
							defaultSampleFlagsPresent = result.flags[2] & 0x20,
							durationIsEmpty = result.flags[0] & 0x010000,
							defaultBaseIsMoof = result.flags[0] & 0x020000,
							i;
						i = 8;
						if (baseDataOffsetPresent) {
							i += 4;
							result.baseDataOffset = view.getUint32(12);
							i += 4;
						}
						if (sampleDescriptionIndexPresent) {
							result.sampleDescriptionIndex = view.getUint32(i);
							i += 4;
						}
						if (defaultSampleDurationPresent) {
							result.defaultSampleDuration = view.getUint32(i);
							i += 4;
						}
						if (defaultSampleSizePresent) {
							result.defaultSampleSize = view.getUint32(i);
							i += 4;
						}
						if (defaultSampleFlagsPresent) {
							result.defaultSampleFlags = view.getUint32(i);
						}
						if (durationIsEmpty) {
							result.durationIsEmpty = true;
						}
						if (!baseDataOffsetPresent && defaultBaseIsMoof) {
							result.baseDataOffsetIsMoof = true;
						}
						return result;
					},
					tkhd: function tkhd(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
							i = 4,
							result = {
								version: view.getUint8(0),
								flags: new Uint8Array(data.subarray(1, 4))
							};
						if (result.version === 1) {
							i += 4;
							result.creationTime = parseMp4Date(view.getUint32(i));
							i += 8;
							result.modificationTime = parseMp4Date(view.getUint32(i));
							i += 4;
							result.trackId = view.getUint32(i);
							i += 4;
							i += 8;
							result.duration = view.getUint32(i);
						} else {
							result.creationTime = parseMp4Date(view.getUint32(i));
							i += 4;
							result.modificationTime = parseMp4Date(view.getUint32(i));
							i += 4;
							result.trackId = view.getUint32(i);
							i += 4;
							i += 4;
							result.duration = view.getUint32(i);
						}
						i += 4;
						i += 2 * 4;
						result.layer = view.getUint16(i);
						i += 2;
						result.alternateGroup = view.getUint16(i);
						i += 2;
						result.volume = view.getUint8(i) + view.getUint8(i + 1) / 8;
						i += 2;
						i += 2;
						result.matrix = new Uint32Array(data.subarray(i, i + 9 * 4));
						i += 9 * 4;
						result.width = view.getUint16(i) + view.getUint16(i + 2) / 16;
						i += 4;
						result.height = view.getUint16(i) + view.getUint16(i + 2) / 16;
						return result;
					},
					traf: function traf(data) {
						return {
							boxes: inspectMp4(data)
						};
					},
					trak: function trak(data) {
						return {
							boxes: inspectMp4(data)
						};
					},
					trex: function trex(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
						return {
							version: data[0],
							flags: new Uint8Array(data.subarray(1, 4)),
							trackId: view.getUint32(4),
							defaultSampleDescriptionIndex: view.getUint32(8),
							defaultSampleDuration: view.getUint32(12),
							defaultSampleSize: view.getUint32(16),
							sampleDependsOn: data[20] & 0x03,
							sampleIsDependedOn: (data[21] & 0xc0) >> 6,
							sampleHasRedundancy: (data[21] & 0x30) >> 4,
							samplePaddingValue: (data[21] & 0x0e) >> 1,
							sampleIsDifferenceSample: !!(data[21] & 0x01),
							sampleDegradationPriority: view.getUint16(22)
						};
					},
					trun: function trun(data) {
						var result = {
							version: data[0],
							flags: new Uint8Array(data.subarray(1, 4)),
							samples: []
						},
							view = new DataView(data.buffer, data.byteOffset, data.byteLength),
							dataOffsetPresent = result.flags[2] & 0x01,
							firstSampleFlagsPresent = result.flags[2] & 0x04,
							sampleDurationPresent = result.flags[1] & 0x01,
							sampleSizePresent = result.flags[1] & 0x02,
							sampleFlagsPresent = result.flags[1] & 0x04,
							sampleCompositionTimeOffsetPresent = result.flags[1] & 0x08,
							sampleCount = view.getUint32(4),
							offset = 8,
							sample;
						if (dataOffsetPresent) {
							result.dataOffset = view.getInt32(offset);
							offset += 4;
						}
						if (firstSampleFlagsPresent && sampleCount) {
							sample = {
								flags: parseSampleFlags(data.subarray(offset, offset + 4))
							};
							offset += 4;
							if (sampleDurationPresent) {
								sample.duration = view.getUint32(offset);
								offset += 4;
							}
							if (sampleSizePresent) {
								sample.size = view.getUint32(offset);
								offset += 4;
							}
							if (sampleCompositionTimeOffsetPresent) {
								sample.compositionTimeOffset = view.getUint32(offset);
								offset += 4;
							}
							result.samples.push(sample);
							sampleCount--;
						}
						while (sampleCount--) {
							sample = {};
							if (sampleDurationPresent) {
								sample.duration = view.getUint32(offset);
								offset += 4;
							}
							if (sampleSizePresent) {
								sample.size = view.getUint32(offset);
								offset += 4;
							}
							if (sampleFlagsPresent) {
								sample.flags = parseSampleFlags(data.subarray(offset, offset + 4));
								offset += 4;
							}
							if (sampleCompositionTimeOffsetPresent) {
								sample.compositionTimeOffset = view.getUint32(offset);
								offset += 4;
							}
							result.samples.push(sample);
						}
						return result;
					},
					'url ': function url(data) {
						return {
							version: data[0],
							flags: new Uint8Array(data.subarray(1, 4))
						};
					},
					vmhd: function vmhd(data) {
						var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
						return {
							version: data[0],
							flags: new Uint8Array(data.subarray(1, 4)),
							graphicsmode: view.getUint16(4),
							opcolor: new Uint16Array([view.getUint16(6), view.getUint16(8), view.getUint16(10)])
						};
					}
				};
			inspectMp4 = function inspectMp4(data) {
				var i = 0,
					result = [],
					view,
					size,
					type,
					end,
					box;
				var ab = new ArrayBuffer(data.length);
				var v = new Uint8Array(ab);
				for (var z = 0; z < data.length; ++z) {
					v[z] = data[z];
				}
				view = new DataView(ab);
				while (i < data.byteLength) {
					size = view.getUint32(i);
					type = parseType$1(data.subarray(i + 4, i + 8));
					end = size > 1 ? i + size : data.byteLength;
					box = (parse$$1[type] || function (data) {
						return {
							data: data
						};
					})(data.subarray(i + 8, end));
					box.size = size;
					box.type = type;
					result.push(box);
					i = end;
				}
				return result;
			};
			_textifyMp = function textifyMp4(inspectedMp4, depth) {
				var indent;
				depth = depth || 0;
				indent = new Array(depth * 2 + 1).join(' ');
				return inspectedMp4.map(function (box, index) {
					return indent + box.type + '\n' +
						Object.keys(box).filter(function (key) {
							return key !== 'type' && key !== 'boxes';
						}).map(function (key) {
							var prefix = indent + '  ' + key + ': ',
								value = box[key];
							if (value instanceof Uint8Array || value instanceof Uint32Array) {
								var bytes = Array.prototype.slice.call(new Uint8Array(value.buffer, value.byteOffset, value.byteLength)).map(function (byte) {
									return ' ' + ('00' + byte.toString(16)).slice(-2);
								}).join('').match(/.{1,24}/g);
								if (!bytes) {
									return prefix + '<>';
								}
								if (bytes.length === 1) {
									return prefix + '<' + bytes.join('').slice(1) + '>';
								}
								return prefix + '<\n' + bytes.map(function (line) {
									return indent + '  ' + line;
								}).join('\n') + '\n' + indent + '  >';
							}
							return prefix + JSON.stringify(value, null, 2).split('\n').map(function (line, index) {
								if (index === 0) {
									return line;
								}
								return indent + '  ' + line;
							}).join('\n');
						}).join('\n') + (
							box.boxes ? '\n' + _textifyMp(box.boxes, depth + 1) : '');
				}).join('\n');
			};
			var mp4Inspector = {
				inspect: inspectMp4,
				textify: _textifyMp,
				parseTfdt: parse$$1.tfdt,
				parseHdlr: parse$$1.hdlr,
				parseTfhd: parse$$1.tfhd,
				parseTrun: parse$$1.trun
			};
			var discardEmulationPreventionBytes$1 = captionPacketParser.discardEmulationPreventionBytes;
			var CaptionStream$1 = captionStream.CaptionStream;
			var mapToSample = function mapToSample(offset, samples) {
				var approximateOffset = offset;
				for (var i = 0; i < samples.length; i++) {
					var sample = samples[i];
					if (approximateOffset < sample.size) {
						return sample;
					}
					approximateOffset -= sample.size;
				}
				return null;
			};
			var findSeiNals = function findSeiNals(avcStream, samples, trackId) {
				var avcView = new DataView(avcStream.buffer, avcStream.byteOffset, avcStream.byteLength),
					result = [],
					seiNal,
					i,
					length,
					lastMatchedSample;
				for (i = 0; i + 4 < avcStream.length; i += length) {
					length = avcView.getUint32(i);
					i += 4;
					if (length <= 0) {
						continue;
					}
					switch (avcStream[i] & 0x1F) {
						case 0x06:
							var data = avcStream.subarray(i + 1, i + 1 + length);
							var matchingSample = mapToSample(i, samples);
							seiNal = {
								nalUnitType: 'sei_rbsp',
								size: length,
								data: data,
								escapedRBSP: discardEmulationPreventionBytes$1(data),
								trackId: trackId
							};
							if (matchingSample) {
								seiNal.pts = matchingSample.pts;
								seiNal.dts = matchingSample.dts;
								lastMatchedSample = matchingSample;
							} else {
								seiNal.pts = lastMatchedSample.pts;
								seiNal.dts = lastMatchedSample.dts;
							}
							result.push(seiNal);
							break;
						default:
							break;
					}
				}
				return result;
			};
			var parseSamples = function parseSamples(truns, baseMediaDecodeTime, tfhd) {
				var currentDts = baseMediaDecodeTime;
				var defaultSampleDuration = tfhd.defaultSampleDuration || 0;
				var defaultSampleSize = tfhd.defaultSampleSize || 0;
				var trackId = tfhd.trackId;
				var allSamples = [];
				truns.forEach(function (trun) {
					var trackRun = mp4Inspector.parseTrun(trun);
					var samples = trackRun.samples;
					samples.forEach(function (sample) {
						if (sample.duration === undefined) {
							sample.duration = defaultSampleDuration;
						}
						if (sample.size === undefined) {
							sample.size = defaultSampleSize;
						}
						sample.trackId = trackId;
						sample.dts = currentDts;
						if (sample.compositionTimeOffset === undefined) {
							sample.compositionTimeOffset = 0;
						}
						sample.pts = currentDts + sample.compositionTimeOffset;
						currentDts += sample.duration;
					});
					allSamples = allSamples.concat(samples);
				});
				return allSamples;
			};
			var parseCaptionNals = function parseCaptionNals(segment, videoTrackId) {
				var trafs = probe$$1.findBox(segment, ['moof', 'traf']);
				var mdats = probe$$1.findBox(segment, ['mdat']);
				var captionNals = {};
				var mdatTrafPairs = [];
				mdats.forEach(function (mdat, index) {
					var matchingTraf = trafs[index];
					mdatTrafPairs.push({
						mdat: mdat,
						traf: matchingTraf
					});
				});
				mdatTrafPairs.forEach(function (pair) {
					var mdat = pair.mdat;
					var traf = pair.traf;
					var tfhd = probe$$1.findBox(traf, ['tfhd']);
					var headerInfo = mp4Inspector.parseTfhd(tfhd[0]);
					var trackId = headerInfo.trackId;
					var tfdt = probe$$1.findBox(traf, ['tfdt']);
					var baseMediaDecodeTime = tfdt.length > 0 ? mp4Inspector.parseTfdt(tfdt[0]).baseMediaDecodeTime : 0;
					var truns = probe$$1.findBox(traf, ['trun']);
					var samples;
					var seiNals;
					if (videoTrackId === trackId && truns.length > 0) {
						samples = parseSamples(truns, baseMediaDecodeTime, headerInfo);
						seiNals = findSeiNals(mdat, samples, trackId);
						if (!captionNals[trackId]) {
							captionNals[trackId] = [];
						}
						captionNals[trackId] = captionNals[trackId].concat(seiNals);
					}
				});
				return captionNals;
			};
			var parseEmbeddedCaptions = function parseEmbeddedCaptions(segment, trackId, timescale) {
				var seiNals;
				if (!trackId) {
					return null;
				}
				seiNals = parseCaptionNals(segment, trackId);
				return {
					seiNals: seiNals[trackId],
					timescale: timescale
				};
			};
			var CaptionParser$$1 = function CaptionParser$$1() {
				var isInitialized = false;
				var captionStream$$1;
				var segmentCache;
				var trackId;
				var timescale;
				var parsedCaptions;
				this.isInitialized = function () {
					return isInitialized;
				};
				this.init = function () {
					captionStream$$1 = new CaptionStream$1();
					isInitialized = true;
					captionStream$$1.on('data', function (event) {
						event.startTime = event.startPts / timescale;
						event.endTime = event.endPts / timescale;
						parsedCaptions.captions.push(event);
						parsedCaptions.captionStreams[event.stream] = true;
					});
				};
				this.isNewInit = function (videoTrackIds, timescales) {
					if (videoTrackIds && videoTrackIds.length === 0 || timescales && (typeof timescales === 'undefined' ? 'undefined' : _typeof(timescales)) === 'object' && Object.keys(timescales).length === 0) {
						return false;
					}
					return trackId !== videoTrackIds[0] || timescale !== timescales[trackId];
				};
				this.parse = function (segment, videoTrackIds, timescales) {
					var parsedData;
					if (!this.isInitialized()) {
						return null;
					} else if (!videoTrackIds || !timescales) {
						return null;
					} else if (this.isNewInit(videoTrackIds, timescales)) {
						trackId = videoTrackIds[0];
						timescale = timescales[trackId];
					} else if (!trackId || !timescale) {
						segmentCache.push(segment);
						return null;
					}
					while (segmentCache.length > 0) {
						var cachedSegment = segmentCache.shift();
						this.parse(cachedSegment, videoTrackIds, timescales);
					}
					parsedData = parseEmbeddedCaptions(segment, trackId, timescale);
					if (parsedData === null || !parsedData.seiNals) {
						return null;
					}
					this.pushNals(parsedData.seiNals);
					this.flushStream();
					return parsedCaptions;
				};
				this.pushNals = function (nals) {
					if (!this.isInitialized() || !nals || nals.length === 0) {
						return null;
					}
					nals.forEach(function (nal) {
						captionStream$$1.push(nal);
					});
				};
				this.flushStream = function () {
					if (!this.isInitialized()) {
						return null;
					}
					captionStream$$1.flush();
				};
				this.clearParsedCaptions = function () {
					parsedCaptions.captions = [];
					parsedCaptions.captionStreams = {};
				};
				this.resetCaptionStream = function () {
					if (!this.isInitialized()) {
						return null;
					}
					captionStream$$1.reset();
				};
				this.clearAllCaptions = function () {
					this.clearParsedCaptions();
					this.resetCaptionStream();
				};
				this.reset = function () {
					segmentCache = [];
					trackId = null;
					timescale = null;
					if (!parsedCaptions) {
						parsedCaptions = {
							captions: [],
							captionStreams: {}
						};
					} else {
						this.clearParsedCaptions();
					}
					this.resetCaptionStream();
				};
				this.reset();
			};
			var captionParser = CaptionParser$$1;
			var mp4 = {
				generator: mp4Generator,
				probe: probe$$1,
				Transmuxer: transmuxer.Transmuxer,
				AudioSegmentStream: transmuxer.AudioSegmentStream,
				VideoSegmentStream: transmuxer.VideoSegmentStream,
				CaptionParser: captionParser
			};
			var classCallCheck$$1 = function classCallCheck$$1(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			};
			var createClass$$1 = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}
				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			}();
			var wireTransmuxerEvents = function wireTransmuxerEvents(self, transmuxer) {
				transmuxer.on('data', function (segment) {
					var initArray = segment.initSegment;
					segment.initSegment = {
						data: initArray.buffer,
						byteOffset: initArray.byteOffset,
						byteLength: initArray.byteLength
					};
					var typedArray = segment.data;
					segment.data = typedArray.buffer;
					self.postMessage({
						action: 'data',
						segment: segment,
						byteOffset: typedArray.byteOffset,
						byteLength: typedArray.byteLength
					}, [segment.data]);
				});
				if (transmuxer.captionStream) {
					transmuxer.captionStream.on('data', function (caption) {
						self.postMessage({
							action: 'caption',
							data: caption
						});
					});
				}
				transmuxer.on('done', function (data) {
					self.postMessage({ action: 'done' });
				});
				transmuxer.on('gopInfo', function (gopInfo) {
					self.postMessage({
						action: 'gopInfo',
						gopInfo: gopInfo
					});
				});
			};
			var MessageHandlers = function () {
				function MessageHandlers(self, options) {
					classCallCheck$$1(this, MessageHandlers);
					this.options = options || {};
					this.self = self;
					this.init();
				}
				createClass$$1(MessageHandlers, [{
					key: 'init',
					value: function init() {
						if (this.transmuxer) {
							this.transmuxer.dispose();
						}
						this.transmuxer = new mp4.Transmuxer(this.options);
						wireTransmuxerEvents(this.self, this.transmuxer);
					}
				}, {
					key: 'push',
					value: function push(data) {
						var segment = new Uint8Array(data.data, data.byteOffset, data.byteLength);
						this.transmuxer.push(segment);
					}
				}, {
					key: 'reset',
					value: function reset() {
						this.init();
					}
				}, {
					key: 'setTimestampOffset',
					value: function setTimestampOffset(data) {
						var timestampOffset = data.timestampOffset || 0;
						this.transmuxer.setBaseMediaDecodeTime(Math.round(timestampOffset * 90000));
					}
				}, {
					key: 'setAudioAppendStart',
					value: function setAudioAppendStart(data) {
						this.transmuxer.setAudioAppendStart(Math.ceil(data.appendStart * 90000));
					}
				}, {
					key: 'flush',
					value: function flush(data) {
						this.transmuxer.flush();
					}
				}, {
					key: 'resetCaptions',
					value: function resetCaptions() {
						this.transmuxer.resetCaptions();
					}
				}, {
					key: 'alignGopsWith',
					value: function alignGopsWith(data) {
						this.transmuxer.alignGopsWith(data.gopsToAlignWith.slice());
					}
				}]);
				return MessageHandlers;
			}();
			var TransmuxerWorker = function TransmuxerWorker(self) {
				self.onmessage = function (event) {
					if (event.data.action === 'init' && event.data.options) {
						this.messageHandlers = new MessageHandlers(self, event.data.options);
						return;
					}
					if (!this.messageHandlers) {
						this.messageHandlers = new MessageHandlers(self);
					}
					if (event.data && event.data.action && event.data.action !== 'init') {
						if (this.messageHandlers[event.data.action]) {
							this.messageHandlers[event.data.action](event.data);
						}
					}
				};
			};
			var transmuxerWorker = new TransmuxerWorker(self);
			return transmuxerWorker;
		}();
	});
	var defaultCodecs = {
		videoCodec: 'avc1',
		videoObjectTypeIndicator: '.4d400d',
		audioProfile: '2'
	};
	var translateLegacyCodecs = function translateLegacyCodecs(codecs) {
		return codecs.map(function (codec) {
			return codec.replace(/avc1\.(\d+)\.(\d+)/i, function (orig, profile, avcLevel) {
				var profileHex = ('00' + Number(profile).toString(16)).slice(-2);
				var avcLevelHex = ('00' + Number(avcLevel).toString(16)).slice(-2);
				return 'avc1.' + profileHex + '00' + avcLevelHex;
			});
		});
	};
	var parseCodecs = function parseCodecs() {
		var codecs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		var result = {
			codecCount: 0
		};
		var parsed = void 0;
		result.codecCount = codecs.split(',').length;
		result.codecCount = result.codecCount || 2;
		parsed = /(^|\s|,)+(avc[13])([^ ,]*)/i.exec(codecs);
		if (parsed) {
			result.videoCodec = parsed[2];
			result.videoObjectTypeIndicator = parsed[3];
		}
		result.audioProfile = /(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(codecs);
		result.audioProfile = result.audioProfile && result.audioProfile[2];
		return result;
	};
	var mapLegacyAvcCodecs = function mapLegacyAvcCodecs(codecString) {
		return codecString.replace(/avc1\.(\d+)\.(\d+)/i, function (match) {
			return translateLegacyCodecs([match])[0];
		});
	};
	var makeMimeTypeString = function makeMimeTypeString(type, container, codecs) {
		return type + '/' + container + '; codecs="' + codecs.filter(function (c) {
			return !!c;
		}).join(', ') + '"';
	};
	var getContainerType = function getContainerType(media) {
		if (media.segments && media.segments.length && media.segments[0].map) {
			return 'mp4';
		}
		return 'mp2t';
	};
	var getCodecs = function getCodecs(media) {
		var mediaAttributes = media.attributes || {};
		if (mediaAttributes.CODECS) {
			return parseCodecs(mediaAttributes.CODECS);
		}
		return defaultCodecs;
	};
	var audioProfileFromDefault = function audioProfileFromDefault(master, audioGroupId) {
		if (!master.mediaGroups.AUDIO || !audioGroupId) {
			return null;
		}
		var audioGroup = master.mediaGroups.AUDIO[audioGroupId];
		if (!audioGroup) {
			return null;
		}
		for (var name in audioGroup) {
			var audioType = audioGroup[name];
			if (audioType.default && audioType.playlists) {
				return parseCodecs(audioType.playlists[0].attributes.CODECS).audioProfile;
			}
		}
		return null;
	};
	var mimeTypesForPlaylist = function mimeTypesForPlaylist(master, media) {
		var containerType = getContainerType(media);
		var codecInfo = getCodecs(media);
		var mediaAttributes = media.attributes || {};
		var isMuxed = true;
		var isMaat = false;
		if (!media) {
			return [];
		}
		if (master.mediaGroups.AUDIO && mediaAttributes.AUDIO) {
			var audioGroup = master.mediaGroups.AUDIO[mediaAttributes.AUDIO];
			if (audioGroup) {
				isMaat = true;
				isMuxed = false;
				for (var groupId in audioGroup) {
					if (!audioGroup[groupId].uri && !audioGroup[groupId].playlists) {
						isMuxed = true;
						break;
					}
				}
			}
		}
		if (isMaat && !codecInfo.audioProfile) {
			if (!isMuxed) {
				codecInfo.audioProfile = audioProfileFromDefault(master, mediaAttributes.AUDIO);
			}
			if (!codecInfo.audioProfile) {
				videojs$1.log.warn('Multiple audio tracks present but no audio codec string is specified. ' + 'Attempting to use the default audio codec (mp4a.40.2)');
				codecInfo.audioProfile = defaultCodecs.audioProfile;
			}
		}
		var codecStrings = {};
		if (codecInfo.videoCodec) {
			codecStrings.video = '' + codecInfo.videoCodec + codecInfo.videoObjectTypeIndicator;
		}
		if (codecInfo.audioProfile) {
			codecStrings.audio = 'mp4a.40.' + codecInfo.audioProfile;
		}
		var justAudio = makeMimeTypeString('audio', containerType, [codecStrings.audio]);
		var justVideo = makeMimeTypeString('video', containerType, [codecStrings.video]);
		var bothVideoAudio = makeMimeTypeString('video', containerType, [codecStrings.video, codecStrings.audio]);
		if (isMaat) {
			if (!isMuxed && codecStrings.video) {
				return [justVideo, justAudio];
			}
			if (!isMuxed && !codecStrings.video) {
				return [justAudio, justAudio];
			}
			return [bothVideoAudio, justAudio];
		}
		if (!codecStrings.video) {
			return [justAudio];
		}
		return [bothVideoAudio];
	};
	var parseContentType = function parseContentType(type) {
		var object = { type: '', parameters: {} };
		var parameters = type.trim().split(';');
		object.type = parameters.shift().trim();
		parameters.forEach(function (parameter) {
			var pair = parameter.trim().split('=');
			if (pair.length > 1) {
				var name = pair[0].replace(/"/g, '').trim();
				var value = pair[1].replace(/"/g, '').trim();
				object.parameters[name] = value;
			}
		});
		return object;
	};
	var isAudioCodec = function isAudioCodec(codec) {
		return (/mp4a\.\d+.\d+/i.test(codec)
		);
	};
	var isVideoCodec = function isVideoCodec(codec) {
		return (/avc1\.[\da-f]+/i.test(codec)
		);
	};
	var gopsSafeToAlignWith = function gopsSafeToAlignWith(buffer, currentTime, mapping) {
		if (typeof currentTime === 'undefined' || currentTime === null || !buffer.length) {
			return [];
		}
		var currentTimePts = Math.ceil((currentTime - mapping + 3) * 90000);
		var i = void 0;
		for (i = 0; i < buffer.length; i++) {
			if (buffer[i].pts > currentTimePts) {
				break;
			}
		}
		return buffer.slice(i);
	};
	var updateGopBuffer = function updateGopBuffer(buffer, gops, replace) {
		if (!gops.length) {
			return buffer;
		}
		if (replace) {
			return gops.slice();
		}
		var start = gops[0].pts;
		var i = 0;
		for (i; i < buffer.length; i++) {
			if (buffer[i].pts >= start) {
				break;
			}
		}
		return buffer.slice(0, i).concat(gops);
	};
	var removeGopBuffer = function removeGopBuffer(buffer, start, end, mapping) {
		var startPts = Math.ceil((start - mapping) * 90000);
		var endPts = Math.ceil((end - mapping) * 90000);
		var updatedBuffer = buffer.slice();
		var i = buffer.length;
		while (i--) {
			if (buffer[i].pts <= endPts) {
				break;
			}
		}
		if (i === -1) {
			return updatedBuffer;
		}
		var j = i + 1;
		while (j--) {
			if (buffer[j].pts <= startPts) {
				break;
			}
		}
		j = Math.max(j, 0);
		updatedBuffer.splice(j, i - j + 1);
		return updatedBuffer;
	};
	var buffered = function buffered(videoBuffer, audioBuffer, audioDisabled) {
		var start = null;
		var end = null;
		var arity = 0;
		var extents = [];
		var ranges = [];
		if (!videoBuffer && !audioBuffer) {
			return videojs$1.createTimeRange();
		}
		if (!videoBuffer) {
			return audioBuffer.buffered;
		}
		if (!audioBuffer) {
			return videoBuffer.buffered;
		}
		if (audioDisabled) {
			return videoBuffer.buffered;
		}
		if (videoBuffer.buffered.length === 0 && audioBuffer.buffered.length === 0) {
			return videojs$1.createTimeRange();
		}
		var videoBuffered = videoBuffer.buffered;
		var audioBuffered = audioBuffer.buffered;
		var count = videoBuffered.length;
		while (count--) {
			extents.push({ time: videoBuffered.start(count), type: 'start' });
			extents.push({ time: videoBuffered.end(count), type: 'end' });
		}
		count = audioBuffered.length;
		while (count--) {
			extents.push({ time: audioBuffered.start(count), type: 'start' });
			extents.push({ time: audioBuffered.end(count), type: 'end' });
		}
		extents.sort(function (a, b) {
			return a.time - b.time;
		});
		for (count = 0; count < extents.length; count++) {
			if (extents[count].type === 'start') {
				arity++;
				if (arity === 2) {
					start = extents[count].time;
				}
			} else if (extents[count].type === 'end') {
				arity--;
				if (arity === 1) {
					end = extents[count].time;
				}
			}
			if (start !== null && end !== null) {
				ranges.push([start, end]);
				start = null;
				end = null;
			}
		}
		return videojs$1.createTimeRanges(ranges);
	};
	var makeWrappedSourceBuffer = function makeWrappedSourceBuffer(mediaSource, mimeType) {
		var sourceBuffer = mediaSource.addSourceBuffer(mimeType);
		var wrapper = Object.create(null);
		wrapper.updating = false;
		wrapper.realBuffer_ = sourceBuffer;
		var _loop = function _loop(key) {
			if (typeof sourceBuffer[key] === 'function') {
				wrapper[key] = function () {
					return sourceBuffer[key].apply(sourceBuffer, arguments);
				};
			} else if (typeof wrapper[key] === 'undefined') {
				Object.defineProperty(wrapper, key, {
					get: function get$$1() {
						return sourceBuffer[key];
					},
					set: function set$$1(v) {
						return sourceBuffer[key] = v;
					}
				});
			}
		};
		for (var key in sourceBuffer) {
			_loop(key);
		}
		return wrapper;
	};
	var VirtualSourceBuffer = function (_videojs$EventTarget) {
		inherits$3(VirtualSourceBuffer, _videojs$EventTarget);
		function VirtualSourceBuffer(mediaSource, codecs) {
			classCallCheck$3(this, VirtualSourceBuffer);
			var _this = possibleConstructorReturn$3(this, (VirtualSourceBuffer.__proto__ || Object.getPrototypeOf(VirtualSourceBuffer)).call(this, videojs$1.EventTarget));
			_this.timestampOffset_ = 0;
			_this.pendingBuffers_ = [];
			_this.bufferUpdating_ = false;
			_this.mediaSource_ = mediaSource;
			_this.codecs_ = codecs;
			_this.audioCodec_ = null;
			_this.videoCodec_ = null;
			_this.audioDisabled_ = false;
			_this.appendAudioInitSegment_ = true;
			_this.gopBuffer_ = [];
			_this.timeMapping_ = 0;
			_this.safeAppend_ = videojs$1.browser.IE_VERSION >= 11;
			var options = {
				remux: false,
				alignGopsAtEnd: _this.safeAppend_
			};
			_this.codecs_.forEach(function (codec) {
				if (isAudioCodec(codec)) {
					_this.audioCodec_ = codec;
				} else if (isVideoCodec(codec)) {
					_this.videoCodec_ = codec;
				}
			});
			_this.transmuxer_ = new TransmuxWorker();
			_this.transmuxer_.postMessage({ action: 'init', options: options });
			_this.transmuxer_.onmessage = function (event) {
				if (event.data.action === 'data') {
					return _this.data_(event);
				}
				if (event.data.action === 'done') {
					return _this.done_(event);
				}
				if (event.data.action === 'gopInfo') {
					return _this.appendGopInfo_(event);
				}
			};
			Object.defineProperty(_this, 'timestampOffset', {
				get: function get$$1() {
					return this.timestampOffset_;
				},
				set: function set$$1(val) {
					if (typeof val === 'number' && val >= 0) {
						this.timestampOffset_ = val;
						this.appendAudioInitSegment_ = true;
						this.gopBuffer_.length = 0;
						this.timeMapping_ = 0;
						this.transmuxer_.postMessage({
							action: 'setTimestampOffset',
							timestampOffset: val
						});
					}
				}
			});
			Object.defineProperty(_this, 'appendWindowStart', {
				get: function get$$1() {
					return (this.videoBuffer_ || this.audioBuffer_).appendWindowStart;
				},
				set: function set$$1(start) {
					if (this.videoBuffer_) {
						this.videoBuffer_.appendWindowStart = start;
					}
					if (this.audioBuffer_) {
						this.audioBuffer_.appendWindowStart = start;
					}
				}
			});
			Object.defineProperty(_this, 'updating', {
				get: function get$$1() {
					return !!(this.bufferUpdating_ || !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.updating || this.videoBuffer_ && this.videoBuffer_.updating);
				}
			});
			Object.defineProperty(_this, 'buffered', {
				get: function get$$1() {
					return buffered(this.videoBuffer_, this.audioBuffer_, this.audioDisabled_);
				}
			});
			return _this;
		}
		createClass$2(VirtualSourceBuffer, [{
			key: 'data_',
			value: function data_(event) {
				var segment = event.data.segment;
				segment.data = new Uint8Array(segment.data, event.data.byteOffset, event.data.byteLength);
				segment.initSegment = new Uint8Array(segment.initSegment.data, segment.initSegment.byteOffset, segment.initSegment.byteLength);
				createTextTracksIfNecessary(this, this.mediaSource_, segment);
				this.pendingBuffers_.push(segment);
				return;
			}
		}, {
			key: 'done_',
			value: function done_(event) {
				if (this.mediaSource_.readyState === 'closed') {
					this.pendingBuffers_.length = 0;
					return;
				}
				this.processPendingSegments_();
				return;
			}
		}, {
			key: 'createRealSourceBuffers_',
			value: function createRealSourceBuffers_() {
				var _this2 = this;
				var types = ['audio', 'video'];
				types.forEach(function (type) {
					if (!_this2[type + 'Codec_']) {
						return;
					}
					if (_this2[type + 'Buffer_']) {
						return;
					}
					var buffer = null;
					if (_this2.mediaSource_[type + 'Buffer_']) {
						buffer = _this2.mediaSource_[type + 'Buffer_'];
						buffer.updating = false;
					} else {
						var codecProperty = type + 'Codec_';
						var mimeType = type + '/mp4;codecs="' + _this2[codecProperty] + '"';
						buffer = makeWrappedSourceBuffer(_this2.mediaSource_.nativeMediaSource_, mimeType);
						_this2.mediaSource_[type + 'Buffer_'] = buffer;
					}
					_this2[type + 'Buffer_'] = buffer;
					['update', 'updatestart', 'updateend'].forEach(function (event) {
						buffer.addEventListener(event, function () {
							if (type === 'audio' && _this2.audioDisabled_) {
								return;
							}
							if (event === 'updateend') {
								_this2[type + 'Buffer_'].updating = false;
							}
							var shouldTrigger = types.every(function (t) {
								if (t === 'audio' && _this2.audioDisabled_) {
									return true;
								}
								if (type !== t && _this2[t + 'Buffer_'] && _this2[t + 'Buffer_'].updating) {
									return false;
								}
								return true;
							});
							if (shouldTrigger) {
								return _this2.trigger(event);
							}
						});
					});
				});
			}
		}, {
			key: 'appendBuffer',
			value: function appendBuffer(segment) {
				this.bufferUpdating_ = true;
				if (this.audioBuffer_ && this.audioBuffer_.buffered.length) {
					var audioBuffered = this.audioBuffer_.buffered;
					this.transmuxer_.postMessage({
						action: 'setAudioAppendStart',
						appendStart: audioBuffered.end(audioBuffered.length - 1)
					});
				}
				if (this.videoBuffer_) {
					this.transmuxer_.postMessage({
						action: 'alignGopsWith',
						gopsToAlignWith: gopsSafeToAlignWith(this.gopBuffer_, this.mediaSource_.player_ ? this.mediaSource_.player_.currentTime() : null, this.timeMapping_)
					});
				}
				this.transmuxer_.postMessage({
					action: 'push',
					data: segment.buffer,
					byteOffset: segment.byteOffset,
					byteLength: segment.byteLength
				}, [segment.buffer]);
				this.transmuxer_.postMessage({ action: 'flush' });
			}
		}, {
			key: 'appendGopInfo_',
			value: function appendGopInfo_(event) {
				this.gopBuffer_ = updateGopBuffer(this.gopBuffer_, event.data.gopInfo, this.safeAppend_);
			}
		}, {
			key: 'remove',
			value: function remove(start, end) {
				if (this.videoBuffer_) {
					this.videoBuffer_.updating = true;
					this.videoBuffer_.remove(start, end);
					this.gopBuffer_ = removeGopBuffer(this.gopBuffer_, start, end, this.timeMapping_);
				}
				if (!this.audioDisabled_ && this.audioBuffer_) {
					this.audioBuffer_.updating = true;
					this.audioBuffer_.remove(start, end);
				}
				removeCuesFromTrack(start, end, this.metadataTrack_);
				if (this.inbandTextTracks_) {
					for (var track in this.inbandTextTracks_) {
						removeCuesFromTrack(start, end, this.inbandTextTracks_[track]);
					}
				}
			}
		}, {
			key: 'processPendingSegments_',
			value: function processPendingSegments_() {
				var sortedSegments = {
					video: {
						segments: [],
						bytes: 0
					},
					audio: {
						segments: [],
						bytes: 0
					},
					captions: [],
					metadata: []
				};
				sortedSegments = this.pendingBuffers_.reduce(function (segmentObj, segment) {
					var type = segment.type;
					var data = segment.data;
					var initSegment = segment.initSegment;
					segmentObj[type].segments.push(data);
					segmentObj[type].bytes += data.byteLength;
					segmentObj[type].initSegment = initSegment;
					if (segment.captions) {
						segmentObj.captions = segmentObj.captions.concat(segment.captions);
					}
					if (segment.info) {
						segmentObj[type].info = segment.info;
					}
					if (segment.metadata) {
						segmentObj.metadata = segmentObj.metadata.concat(segment.metadata);
					}
					return segmentObj;
				}, sortedSegments);
				if (!this.videoBuffer_ && !this.audioBuffer_) {
					if (sortedSegments.video.bytes === 0) {
						this.videoCodec_ = null;
					}
					if (sortedSegments.audio.bytes === 0) {
						this.audioCodec_ = null;
					}
					this.createRealSourceBuffers_();
				}
				if (sortedSegments.audio.info) {
					this.mediaSource_.trigger({ type: 'audioinfo', info: sortedSegments.audio.info });
				}
				if (sortedSegments.video.info) {
					this.mediaSource_.trigger({ type: 'videoinfo', info: sortedSegments.video.info });
				}
				if (this.appendAudioInitSegment_) {
					if (!this.audioDisabled_ && this.audioBuffer_) {
						sortedSegments.audio.segments.unshift(sortedSegments.audio.initSegment);
						sortedSegments.audio.bytes += sortedSegments.audio.initSegment.byteLength;
					}
					this.appendAudioInitSegment_ = false;
				}
				var triggerUpdateend = false;
				if (this.videoBuffer_ && sortedSegments.video.bytes) {
					sortedSegments.video.segments.unshift(sortedSegments.video.initSegment);
					sortedSegments.video.bytes += sortedSegments.video.initSegment.byteLength;
					this.concatAndAppendSegments_(sortedSegments.video, this.videoBuffer_);
					addTextTrackData(this, sortedSegments.captions, sortedSegments.metadata);
				} else if (this.videoBuffer_ && (this.audioDisabled_ || !this.audioBuffer_)) {
					triggerUpdateend = true;
				}
				if (!this.audioDisabled_ && this.audioBuffer_) {
					this.concatAndAppendSegments_(sortedSegments.audio, this.audioBuffer_);
				}
				this.pendingBuffers_.length = 0;
				if (triggerUpdateend) {
					this.trigger('updateend');
				}
				this.bufferUpdating_ = false;
			}
		}, {
			key: 'concatAndAppendSegments_',
			value: function concatAndAppendSegments_(segmentObj, destinationBuffer) {
				var offset = 0;
				var tempBuffer = void 0;
				if (segmentObj.bytes) {
					tempBuffer = new Uint8Array(segmentObj.bytes);
					segmentObj.segments.forEach(function (segment) {
						tempBuffer.set(segment, offset);
						offset += segment.byteLength;
					});
					try {
						destinationBuffer.updating = true;
						destinationBuffer.appendBuffer(tempBuffer);
					} catch (error) {
						if (this.mediaSource_.player_) {
							this.mediaSource_.player_.error({
								code: -3,
								type: 'APPEND_BUFFER_ERR',
								message: error.message,
								originalError: error
							});
						}
					}
				}
			}
		}, {
			key: 'abort',
			value: function abort() {
				if (this.videoBuffer_) {
					this.videoBuffer_.abort();
				}
				if (!this.audioDisabled_ && this.audioBuffer_) {
					this.audioBuffer_.abort();
				}
				if (this.transmuxer_) {
					this.transmuxer_.postMessage({ action: 'reset' });
				}
				this.pendingBuffers_.length = 0;
				this.bufferUpdating_ = false;
			}
		}]);
		return VirtualSourceBuffer;
	}(videojs$1.EventTarget);
	var HtmlMediaSource = function (_videojs$EventTarget) {
		inherits$3(HtmlMediaSource, _videojs$EventTarget);
		function HtmlMediaSource() {
			classCallCheck$3(this, HtmlMediaSource);
			var _this = possibleConstructorReturn$3(this, (HtmlMediaSource.__proto__ || Object.getPrototypeOf(HtmlMediaSource)).call(this));
			var property = void 0;
			_this.nativeMediaSource_ = new window_1.MediaSource();
			for (property in _this.nativeMediaSource_) {
				if (!(property in HtmlMediaSource.prototype) && typeof _this.nativeMediaSource_[property] === 'function') {
					_this[property] = _this.nativeMediaSource_[property].bind(_this.nativeMediaSource_);
				}
			}
			_this.duration_ = NaN;
			Object.defineProperty(_this, 'duration', {
				get: function get$$1() {
					if (this.duration_ === Infinity) {
						return this.duration_;
					}
					return this.nativeMediaSource_.duration;
				},
				set: function set$$1(duration) {
					this.duration_ = duration;
					if (duration !== Infinity) {
						this.nativeMediaSource_.duration = duration;
						return;
					}
				}
			});
			Object.defineProperty(_this, 'seekable', {
				get: function get$$1() {
					if (this.duration_ === Infinity) {
						return videojs$1.createTimeRanges([[0, this.nativeMediaSource_.duration]]);
					}
					return this.nativeMediaSource_.seekable;
				}
			});
			Object.defineProperty(_this, 'readyState', {
				get: function get$$1() {
					return this.nativeMediaSource_.readyState;
				}
			});
			Object.defineProperty(_this, 'activeSourceBuffers', {
				get: function get$$1() {
					return this.activeSourceBuffers_;
				}
			});
			_this.sourceBuffers = [];
			_this.activeSourceBuffers_ = [];
			_this.updateActiveSourceBuffers_ = function () {
				_this.activeSourceBuffers_.length = 0;
				if (_this.sourceBuffers.length === 1) {
					var sourceBuffer = _this.sourceBuffers[0];
					sourceBuffer.appendAudioInitSegment_ = true;
					sourceBuffer.audioDisabled_ = !sourceBuffer.audioCodec_;
					_this.activeSourceBuffers_.push(sourceBuffer);
					return;
				}
				var disableCombined = false;
				var disableAudioOnly = true;
				for (var i = 0; i < _this.player_.audioTracks().length; i++) {
					var track = _this.player_.audioTracks()[i];
					if (track.enabled && track.kind !== 'main') {
						disableCombined = true;
						disableAudioOnly = false;
						break;
					}
				}
				_this.sourceBuffers.forEach(function (sourceBuffer, index) {
					sourceBuffer.appendAudioInitSegment_ = true;
					if (sourceBuffer.videoCodec_ && sourceBuffer.audioCodec_) {
						sourceBuffer.audioDisabled_ = disableCombined;
					} else if (sourceBuffer.videoCodec_ && !sourceBuffer.audioCodec_) {
						sourceBuffer.audioDisabled_ = true;
						disableAudioOnly = false;
					} else if (!sourceBuffer.videoCodec_ && sourceBuffer.audioCodec_) {
						sourceBuffer.audioDisabled_ = index ? disableAudioOnly : !disableAudioOnly;
						if (sourceBuffer.audioDisabled_) {
							return;
						}
					}
					_this.activeSourceBuffers_.push(sourceBuffer);
				});
			};
			_this.onPlayerMediachange_ = function () {
				_this.sourceBuffers.forEach(function (sourceBuffer) {
					sourceBuffer.appendAudioInitSegment_ = true;
				});
			};
			_this.onHlsReset_ = function () {
				_this.sourceBuffers.forEach(function (sourceBuffer) {
					if (sourceBuffer.transmuxer_) {
						sourceBuffer.transmuxer_.postMessage({ action: 'resetCaptions' });
					}
				});
			};
			_this.onHlsSegmentTimeMapping_ = function (event) {
				_this.sourceBuffers.forEach(function (buffer) {
					return buffer.timeMapping_ = event.mapping;
				});
			};
			['sourceopen', 'sourceclose', 'sourceended'].forEach(function (eventName) {
				this.nativeMediaSource_.addEventListener(eventName, this.trigger.bind(this));
			}, _this);
			_this.on('sourceopen', function (event) {
				var video = document_1.querySelector('[src="' + _this.url_ + '"]');
				if (!video) {
					return;
				}
				_this.player_ = videojs$1(video.parentNode);
				_this.player_.tech_.on('hls-reset', _this.onHlsReset_);
				_this.player_.tech_.on('hls-segment-time-mapping', _this.onHlsSegmentTimeMapping_);
				if (_this.player_.audioTracks && _this.player_.audioTracks()) {
					_this.player_.audioTracks().on('change', _this.updateActiveSourceBuffers_);
					_this.player_.audioTracks().on('addtrack', _this.updateActiveSourceBuffers_);
					_this.player_.audioTracks().on('removetrack', _this.updateActiveSourceBuffers_);
				}
				_this.player_.on('mediachange', _this.onPlayerMediachange_);
			});
			_this.on('sourceended', function (event) {
				var duration = durationOfVideo(_this.duration);
				for (var i = 0; i < _this.sourceBuffers.length; i++) {
					var sourcebuffer = _this.sourceBuffers[i];
					var cues = sourcebuffer.metadataTrack_ && sourcebuffer.metadataTrack_.cues;
					if (cues && cues.length) {
						cues[cues.length - 1].endTime = duration;
					}
				}
			});
			_this.on('sourceclose', function (event) {
				this.sourceBuffers.forEach(function (sourceBuffer) {
					if (sourceBuffer.transmuxer_) {
						sourceBuffer.transmuxer_.terminate();
					}
				});
				this.sourceBuffers.length = 0;
				if (!this.player_) {
					return;
				}
				if (this.player_.audioTracks && this.player_.audioTracks()) {
					this.player_.audioTracks().off('change', this.updateActiveSourceBuffers_);
					this.player_.audioTracks().off('addtrack', this.updateActiveSourceBuffers_);
					this.player_.audioTracks().off('removetrack', this.updateActiveSourceBuffers_);
				}
				if (this.player_.el_) {
					this.player_.off('mediachange', this.onPlayerMediachange_);
					this.player_.tech_.off('hls-reset', this.onHlsReset_);
					this.player_.tech_.off('hls-segment-time-mapping', this.onHlsSegmentTimeMapping_);
				}
			});
			return _this;
		}
		createClass$2(HtmlMediaSource, [{
			key: 'addSeekableRange_',
			value: function addSeekableRange_(start, end) {
				var error = void 0;
				if (this.duration !== Infinity) {
					error = new Error('MediaSource.addSeekableRange() can only be invoked ' + 'when the duration is Infinity');
					error.name = 'InvalidStateError';
					error.code = 11;
					throw error;
				}
				if (end > this.nativeMediaSource_.duration || isNaN(this.nativeMediaSource_.duration)) {
					this.nativeMediaSource_.duration = end;
				}
			}
		}, {
			key: 'addSourceBuffer',
			value: function addSourceBuffer(type) {
				var buffer = void 0;
				var parsedType = parseContentType(type);
				if (/^(video|audio)\/mp2t$/i.test(parsedType.type)) {
					var codecs = [];
					if (parsedType.parameters && parsedType.parameters.codecs) {
						codecs = parsedType.parameters.codecs.split(',');
						codecs = translateLegacyCodecs(codecs);
						codecs = codecs.filter(function (codec) {
							return isAudioCodec(codec) || isVideoCodec(codec);
						});
					}
					if (codecs.length === 0) {
						codecs = ['avc1.4d400d', 'mp4a.40.2'];
					}
					buffer = new VirtualSourceBuffer(this, codecs);
					if (this.sourceBuffers.length !== 0) {
						this.sourceBuffers[0].createRealSourceBuffers_();
						buffer.createRealSourceBuffers_();
						this.sourceBuffers[0].audioDisabled_ = true;
					}
				} else {
					buffer = this.nativeMediaSource_.addSourceBuffer(type);
				}
				this.sourceBuffers.push(buffer);
				return buffer;
			}
		}]);
		return HtmlMediaSource;
	}(videojs$1.EventTarget);
	var urlCount = 0;
	videojs$1.mediaSources = {};
	var open = function open(msObjectURL, swfId) {
		var mediaSource = videojs$1.mediaSources[msObjectURL];
		if (mediaSource) {
			mediaSource.trigger({ type: 'sourceopen', swfId: swfId });
		} else {
			throw new Error('Media Source not found (Video.js)');
		}
	};
	var supportsNativeMediaSources = function supportsNativeMediaSources() {
		return !!window_1.MediaSource && !!window_1.MediaSource.isTypeSupported && window_1.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"');
	};
	var MediaSource = function MediaSource() {
		this.MediaSource = {
			open: open,
			supportsNativeMediaSources: supportsNativeMediaSources
		};
		if (supportsNativeMediaSources()) {
			return new HtmlMediaSource();
		}
		throw new Error('Cannot use create a virtual MediaSource for this video');
	};
	MediaSource.open = open;
	MediaSource.supportsNativeMediaSources = supportsNativeMediaSources;
	var URL$1 = {
		createObjectURL: function createObjectURL(object) {
			var objectUrlPrefix = 'blob:vjs-media-source/';
			var url = void 0;
			if (object instanceof HtmlMediaSource) {
				url = window_1.URL.createObjectURL(object.nativeMediaSource_);
				object.url_ = url;
				return url;
			}
			if (!(object instanceof HtmlMediaSource)) {
				url = window_1.URL.createObjectURL(object);
				object.url_ = url;
				return url;
			}
			url = objectUrlPrefix + urlCount;
			urlCount++;
			videojs$1.mediaSources[url] = object;
			return url;
		}
	};
	videojs$1.MediaSource = MediaSource;
	videojs$1.URL = URL$1;
	var EventTarget$1$1 = videojs$1.EventTarget,
		mergeOptions$2 = videojs$1.mergeOptions;
	var updateMaster$1 = function updateMaster$$1(oldMaster, newMaster) {
		var update = mergeOptions$2(oldMaster, {
			duration: newMaster.duration,
			minimumUpdatePeriod: newMaster.minimumUpdatePeriod
		});
		for (var i = 0; i < newMaster.playlists.length; i++) {
			var playlistUpdate = updateMaster(update, newMaster.playlists[i]);
			if (playlistUpdate) {
				update = playlistUpdate;
			}
		}
		forEachMediaGroup(newMaster, function (properties, type, group, label) {
			if (properties.playlists && properties.playlists.length) {
				var uri = properties.playlists[0].uri;
				var _playlistUpdate = updateMaster(update, properties.playlists[0]);
				if (_playlistUpdate) {
					update = _playlistUpdate;
					update.mediaGroups[type][group][label].playlists[0] = update.playlists[uri];
				}
			}
		});
		return update;
	};
	var DashPlaylistLoader = function (_EventTarget) {
		inherits$3(DashPlaylistLoader, _EventTarget);
		function DashPlaylistLoader(srcUrlOrPlaylist, hls, withCredentials, masterPlaylistLoader) {
			classCallCheck$3(this, DashPlaylistLoader);
			var _this = possibleConstructorReturn$3(this, (DashPlaylistLoader.__proto__ || Object.getPrototypeOf(DashPlaylistLoader)).call(this));
			_this.hls_ = hls;
			_this.withCredentials = withCredentials;
			if (!srcUrlOrPlaylist) {
				throw new Error('A non-empty playlist URL or playlist is required');
			}
			_this.on('minimumUpdatePeriod', function () {
				_this.refreshXml_();
			});
			_this.on('mediaupdatetimeout', function () {
				_this.refreshMedia_();
			});
			if (typeof srcUrlOrPlaylist === 'string') {
				_this.srcUrl = srcUrlOrPlaylist;
				_this.state = 'HAVE_NOTHING';
				return possibleConstructorReturn$3(_this);
			}
			_this.masterPlaylistLoader_ = masterPlaylistLoader;
			_this.state = 'HAVE_METADATA';
			_this.started = true;
			_this.media(srcUrlOrPlaylist);
			window_1.setTimeout(function () {
				_this.trigger('loadedmetadata');
			}, 0);
			return _this;
		}
		createClass$2(DashPlaylistLoader, [{
			key: 'dispose',
			value: function dispose() {
				this.stopRequest();
				window_1.clearTimeout(this.mediaUpdateTimeout);
			}
		}, {
			key: 'stopRequest',
			value: function stopRequest() {
				if (this.request) {
					var oldRequest = this.request;
					this.request = null;
					oldRequest.onreadystatechange = null;
					oldRequest.abort();
				}
			}
		}, {
			key: 'media',
			value: function media(playlist) {
				if (!playlist) {
					return this.media_;
				}
				if (this.state === 'HAVE_NOTHING') {
					throw new Error('Cannot switch media playlist from ' + this.state);
				}
				var startingState = this.state;
				if (typeof playlist === 'string') {
					if (!this.master.playlists[playlist]) {
						throw new Error('Unknown playlist URI: ' + playlist);
					}
					playlist = this.master.playlists[playlist];
				}
				var mediaChange = !this.media_ || playlist.uri !== this.media_.uri;
				this.state = 'HAVE_METADATA';
				if (!mediaChange) {
					return;
				}
				if (this.media_) {
					this.trigger('mediachanging');
				}
				this.media_ = playlist;
				this.refreshMedia_();
				if (startingState !== 'HAVE_MASTER') {
					this.trigger('mediachange');
				}
			}
		}, {
			key: 'pause',
			value: function pause() {
				this.stopRequest();
				if (this.state === 'HAVE_NOTHING') {
					this.started = false;
				}
			}
		}, {
			key: 'load',
			value: function load() {
				if (!this.started) {
					this.start();
					return;
				}
				this.trigger('loadedplaylist');
			}
		}, {
			key: 'parseMasterXml',
			value: function parseMasterXml() {
				var master = parse(this.masterXml_, {
					manifestUri: this.srcUrl,
					clientOffset: this.clientOffset_
				});
				master.uri = this.srcUrl;
				for (var i = 0; i < master.playlists.length; i++) {
					var phonyUri = 'placeholder-uri-' + i;
					master.playlists[i].uri = phonyUri;
					master.playlists[phonyUri] = master.playlists[i];
				}
				forEachMediaGroup(master, function (properties, mediaType, groupKey, labelKey) {
					if (properties.playlists && properties.playlists.length) {
						var _phonyUri = 'placeholder-uri-' + mediaType + '-' + groupKey + '-' + labelKey;
						properties.playlists[0].uri = _phonyUri;
						master.playlists[_phonyUri] = properties.playlists[0];
					}
				});
				setupMediaPlaylists(master);
				resolveMediaGroupUris(master);
				return master;
			}
		}, {
			key: 'start',
			value: function start() {
				var _this2 = this;
				this.started = true;
				this.request = this.hls_.xhr({
					uri: this.srcUrl,
					withCredentials: this.withCredentials
				}, function (error, req) {
					if (!_this2.request) {
						return;
					}
					_this2.request = null;
					if (error) {
						_this2.error = {
							status: req.status,
							message: 'DASH playlist request error at URL: ' + _this2.srcUrl,
							responseText: req.responseText,
							code: 2
						};
						if (_this2.state === 'HAVE_NOTHING') {
							_this2.started = false;
						}
						return _this2.trigger('error');
					}
					_this2.masterXml_ = req.responseText;
					if (req.responseHeaders && req.responseHeaders.date) {
						_this2.masterLoaded_ = Date.parse(req.responseHeaders.date);
					} else {
						_this2.masterLoaded_ = Date.now();
					}
					_this2.syncClientServerClock_(_this2.onClientServerClockSync_.bind(_this2));
				});
			}
		}, {
			key: 'syncClientServerClock_',
			value: function syncClientServerClock_(done) {
				var _this3 = this;
				var utcTiming = parseUTCTiming(this.masterXml_);
				if (utcTiming === null) {
					this.clientOffset_ = this.masterLoaded_ - Date.now();
					return done();
				}
				if (utcTiming.method === 'DIRECT') {
					this.clientOffset_ = utcTiming.value - Date.now();
					return done();
				}
				this.request = this.hls_.xhr({
					uri: resolveUrl$1(this.srcUrl, utcTiming.value),
					method: utcTiming.method,
					withCredentials: this.withCredentials
				}, function (error, req) {
					if (!_this3.request) {
						return;
					}
					if (error) {
						_this3.clientOffset_ = _this3.masterLoaded_ - Date.now();
						return done();
					}
					var serverTime = void 0;
					if (utcTiming.method === 'HEAD') {
						if (!req.responseHeaders || !req.responseHeaders.date) {
							serverTime = _this3.masterLoaded_;
						} else {
							serverTime = Date.parse(req.responseHeaders.date);
						}
					} else {
						serverTime = Date.parse(req.responseText);
					}
					_this3.clientOffset_ = serverTime - Date.now();
					done();
				});
			}
		}, {
			key: 'onClientServerClockSync_',
			value: function onClientServerClockSync_() {
				var _this4 = this;
				this.master = this.parseMasterXml();
				this.state = 'HAVE_MASTER';
				this.trigger('loadedplaylist');
				if (!this.media_) {
					this.media(this.master.playlists[0]);
				}
				window_1.setTimeout(function () {
					_this4.trigger('loadedmetadata');
				}, 0);
				if (this.master.minimumUpdatePeriod) {
					window_1.setTimeout(function () {
						_this4.trigger('minimumUpdatePeriod');
					}, this.master.minimumUpdatePeriod);
				}
			}
		}, {
			key: 'refreshXml_',
			value: function refreshXml_() {
				var _this5 = this;
				this.request = this.hls_.xhr({
					uri: this.srcUrl,
					withCredentials: this.withCredentials
				}, function (error, req) {
					if (!_this5.request) {
						return;
					}
					_this5.request = null;
					if (error) {
						_this5.error = {
							status: req.status,
							message: 'DASH playlist request error at URL: ' + _this5.srcUrl,
							responseText: req.responseText,
							code: 2
						};
						if (_this5.state === 'HAVE_NOTHING') {
							_this5.started = false;
						}
						return _this5.trigger('error');
					}
					_this5.masterXml_ = req.responseText;
					var newMaster = _this5.parseMasterXml();
					_this5.master = updateMaster$1(_this5.master, newMaster);
					window_1.setTimeout(function () {
						_this5.trigger('minimumUpdatePeriod');
					}, _this5.master.minimumUpdatePeriod);
				});
			}
		}, {
			key: 'refreshMedia_',
			value: function refreshMedia_() {
				var _this6 = this;
				var oldMaster = void 0;
				var newMaster = void 0;
				if (this.masterPlaylistLoader_) {
					oldMaster = this.masterPlaylistLoader_.master;
					newMaster = this.masterPlaylistLoader_.parseMasterXml();
				} else {
					oldMaster = this.master;
					newMaster = this.parseMasterXml();
				}
				var updatedMaster = updateMaster$1(oldMaster, newMaster);
				if (updatedMaster) {
					if (this.masterPlaylistLoader_) {
						this.masterPlaylistLoader_.master = updatedMaster;
					} else {
						this.master = updatedMaster;
					}
					this.media_ = updatedMaster.playlists[this.media_.uri];
				} else {
					this.trigger('playlistunchanged');
				}
				if (!this.media().endList) {
					this.mediaUpdateTimeout = window_1.setTimeout(function () {
						_this6.trigger('mediaupdatetimeout');
					}, refreshDelay(this.media(), !!updatedMaster));
				}
				this.trigger('loadedplaylist');
			}
		}]);
		return DashPlaylistLoader;
	}(EventTarget$1$1);
	var logger = function logger(source) {
		if (videojs$1.log.debug) {
			return videojs$1.log.debug.bind(videojs$1, 'VHS:', source + ' >');
		}
		return function () { };
	};
	function noop$1() { }
	var SourceUpdater = function () {
		function SourceUpdater(mediaSource, mimeType, type, sourceBufferEmitter) {
			classCallCheck$3(this, SourceUpdater);
			this.callbacks_ = [];
			this.pendingCallback_ = null;
			this.timestampOffset_ = 0;
			this.mediaSource = mediaSource;
			this.processedAppend_ = false;
			this.type_ = type;
			this.mimeType_ = mimeType;
			this.logger_ = logger('SourceUpdater[' + type + '][' + mimeType + ']');
			if (mediaSource.readyState === 'closed') {
				mediaSource.addEventListener('sourceopen', this.createSourceBuffer_.bind(this, mimeType, sourceBufferEmitter));
			} else {
				this.createSourceBuffer_(mimeType, sourceBufferEmitter);
			}
		}
		createClass$2(SourceUpdater, [{
			key: 'createSourceBuffer_',
			value: function createSourceBuffer_(mimeType, sourceBufferEmitter) {
				var _this = this;
				this.sourceBuffer_ = this.mediaSource.addSourceBuffer(mimeType);
				this.logger_('created SourceBuffer');
				if (sourceBufferEmitter) {
					sourceBufferEmitter.trigger('sourcebufferadded');
					if (this.mediaSource.sourceBuffers.length < 2) {
						sourceBufferEmitter.on('sourcebufferadded', function () {
							_this.start_();
						});
						return;
					}
				}
				this.start_();
			}
		}, {
			key: 'start_',
			value: function start_() {
				var _this2 = this;
				this.started_ = true;
				this.onUpdateendCallback_ = function () {
					var pendingCallback = _this2.pendingCallback_;
					_this2.pendingCallback_ = null;
					_this2.logger_('buffered [' + printableRange(_this2.buffered()) + ']');
					if (pendingCallback) {
						pendingCallback();
					}
					_this2.runCallback_();
				};
				this.sourceBuffer_.addEventListener('updateend', this.onUpdateendCallback_);
				this.runCallback_();
			}
		}, {
			key: 'abort',
			value: function abort(done) {
				var _this3 = this;
				if (this.processedAppend_) {
					this.queueCallback_(function () {
						_this3.sourceBuffer_.abort();
					}, done);
				}
			}
		}, {
			key: 'appendBuffer',
			value: function appendBuffer(bytes, done) {
				var _this4 = this;
				this.processedAppend_ = true;
				this.queueCallback_(function () {
					_this4.sourceBuffer_.appendBuffer(bytes);
				}, done);
			}
		}, {
			key: 'buffered',
			value: function buffered() {
				if (!this.sourceBuffer_) {
					return videojs$1.createTimeRanges();
				}
				return this.sourceBuffer_.buffered;
			}
		}, {
			key: 'remove',
			value: function remove(start, end) {
				var _this5 = this;
				var done = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop$1;
				if (this.processedAppend_) {
					this.queueCallback_(function () {
						_this5.logger_('remove [' + start + ' => ' + end + ']');
						_this5.sourceBuffer_.remove(start, end);
					}, done);
				}
			}
		}, {
			key: 'updating',
			value: function updating() {
				return !this.sourceBuffer_ || this.sourceBuffer_.updating || this.pendingCallback_;
			}
		}, {
			key: 'timestampOffset',
			value: function timestampOffset(offset) {
				var _this6 = this;
				if (typeof offset !== 'undefined') {
					this.queueCallback_(function () {
						_this6.sourceBuffer_.timestampOffset = offset;
					});
					this.timestampOffset_ = offset;
				}
				return this.timestampOffset_;
			}
		}, {
			key: 'queueCallback_',
			value: function queueCallback_(callback, done) {
				this.callbacks_.push([callback.bind(this), done]);
				this.runCallback_();
			}
		}, {
			key: 'runCallback_',
			value: function runCallback_() {
				var callbacks = void 0;
				if (!this.updating() && this.callbacks_.length && this.started_) {
					callbacks = this.callbacks_.shift();
					this.pendingCallback_ = callbacks[1];
					callbacks[0]();
				}
			}
		}, {
			key: 'dispose',
			value: function dispose() {
				this.sourceBuffer_.removeEventListener('updateend', this.onUpdateendCallback_);
				if (this.sourceBuffer_ && this.mediaSource.readyState === 'open') {
					this.sourceBuffer_.abort();
				}
			}
		}]);
		return SourceUpdater;
	}();
	var Config = {
		GOAL_BUFFER_LENGTH: 30,
		MAX_GOAL_BUFFER_LENGTH: 60,
		GOAL_BUFFER_LENGTH_RATE: 1,
		BANDWIDTH_VARIANCE: 1.2,
		BUFFER_LOW_WATER_LINE: 0,
		MAX_BUFFER_LOW_WATER_LINE: 30,
		BUFFER_LOW_WATER_LINE_RATE: 1
	};
	var REQUEST_ERRORS = {
		FAILURE: 2,
		TIMEOUT: -101,
		ABORTED: -102
	};
	var byterangeStr = function byterangeStr(byterange) {
		var byterangeStart = void 0;
		var byterangeEnd = void 0;
		byterangeEnd = byterange.offset + byterange.length - 1;
		byterangeStart = byterange.offset;
		return 'bytes=' + byterangeStart + '-' + byterangeEnd;
	};
	var segmentXhrHeaders = function segmentXhrHeaders(segment) {
		var headers = {};
		if (segment.byterange) {
			headers.Range = byterangeStr(segment.byterange);
		}
		return headers;
	};
	var abortAll = function abortAll(activeXhrs) {
		activeXhrs.forEach(function (xhr) {
			xhr.abort();
		});
	};
	var getRequestStats = function getRequestStats(request) {
		return {
			bandwidth: request.bandwidth,
			bytesReceived: request.bytesReceived || 0,
			roundTripTime: request.roundTripTime || 0
		};
	};
	var getProgressStats = function getProgressStats(progressEvent) {
		var request = progressEvent.target;
		var roundTripTime = Date.now() - request.requestTime;
		var stats = {
			bandwidth: Infinity,
			bytesReceived: 0,
			roundTripTime: roundTripTime || 0
		};
		stats.bytesReceived = progressEvent.loaded;
		stats.bandwidth = Math.floor(stats.bytesReceived / stats.roundTripTime * 8 * 1000);
		return stats;
	};
	var handleErrors = function handleErrors(error, request) {
		if (request.timedout) {
			return {
				status: request.status,
				message: 'HLS request timed-out at URL: ' + request.uri,
				code: REQUEST_ERRORS.TIMEOUT,
				xhr: request
			};
		}
		if (request.aborted) {
			return {
				status: request.status,
				message: 'HLS request aborted at URL: ' + request.uri,
				code: REQUEST_ERRORS.ABORTED,
				xhr: request
			};
		}
		if (error) {
			return {
				status: request.status,
				message: 'HLS request errored at URL: ' + request.uri,
				code: REQUEST_ERRORS.FAILURE,
				xhr: request
			};
		}
		return null;
	};
	var handleKeyResponse = function handleKeyResponse(segment, finishProcessingFn) {
		return function (error, request) {
			var response = request.response;
			var errorObj = handleErrors(error, request);
			if (errorObj) {
				return finishProcessingFn(errorObj, segment);
			}
			if (response.byteLength !== 16) {
				return finishProcessingFn({
					status: request.status,
					message: 'Invalid HLS key at URL: ' + request.uri,
					code: REQUEST_ERRORS.FAILURE,
					xhr: request
				}, segment);
			}
			var view = new DataView(response);
			segment.key.bytes = new Uint32Array([view.getUint32(0), view.getUint32(4), view.getUint32(8), view.getUint32(12)]);
			return finishProcessingFn(null, segment);
		};
	};
	var handleInitSegmentResponse = function handleInitSegmentResponse(segment, captionParser, finishProcessingFn) {
		return function (error, request) {
			var response = request.response;
			var errorObj = handleErrors(error, request);
			if (errorObj) {
				return finishProcessingFn(errorObj, segment);
			}
			if (response.byteLength === 0) {
				return finishProcessingFn({
					status: request.status,
					message: 'Empty HLS segment content at URL: ' + request.uri,
					code: REQUEST_ERRORS.FAILURE,
					xhr: request
				}, segment);
			}
			segment.map.bytes = new Uint8Array(request.response);
			if (!captionParser.isInitialized()) {
				captionParser.init();
			}
			segment.map.timescales = probe.timescale(segment.map.bytes);
			segment.map.videoTrackIds = probe.videoTrackIds(segment.map.bytes);
			return finishProcessingFn(null, segment);
		};
	};
	var handleSegmentResponse = function handleSegmentResponse(segment, captionParser, finishProcessingFn) {
		return function (error, request) {
			var response = request.response;
			var errorObj = handleErrors(error, request);
			var parsed = void 0;
			if (errorObj) {
				return finishProcessingFn(errorObj, segment);
			}
			if (response.byteLength === 0) {
				return finishProcessingFn({
					status: request.status,
					message: 'Empty HLS segment content at URL: ' + request.uri,
					code: REQUEST_ERRORS.FAILURE,
					xhr: request
				}, segment);
			}
			segment.stats = getRequestStats(request);
			if (segment.key) {
				segment.encryptedBytes = new Uint8Array(request.response);
			} else {
				segment.bytes = new Uint8Array(request.response);
			}
			if (segment.map && segment.map.bytes) {
				if (!captionParser.isInitialized()) {
					captionParser.init();
				}
				parsed = captionParser.parse(segment.bytes, segment.map.videoTrackIds, segment.map.timescales);
				if (parsed && parsed.captions) {
					segment.captionStreams = parsed.captionStreams;
					segment.fmp4Captions = parsed.captions;
				}
			}
			return finishProcessingFn(null, segment);
		};
	};
	var decryptSegment = function decryptSegment(decrypter, segment, doneFn) {
		var decryptionHandler = function decryptionHandler(event) {
			if (event.data.source === segment.requestId) {
				decrypter.removeEventListener('message', decryptionHandler);
				var decrypted = event.data.decrypted;
				segment.bytes = new Uint8Array(decrypted.bytes, decrypted.byteOffset, decrypted.byteLength);
				return doneFn(null, segment);
			}
		};
		decrypter.addEventListener('message', decryptionHandler);
		decrypter.postMessage(createTransferableMessage({
			source: segment.requestId,
			encrypted: segment.encryptedBytes,
			key: segment.key.bytes,
			iv: segment.key.iv
		}), [segment.encryptedBytes.buffer, segment.key.bytes.buffer]);
	};
	var getMostImportantError = function getMostImportantError(errors) {
		return errors.reduce(function (prev, err) {
			return err.code > prev.code ? err : prev;
		});
	};
	var waitForCompletion = function waitForCompletion(activeXhrs, decrypter, doneFn) {
		var errors = [];
		var count = 0;
		return function (error, segment) {
			if (error) {
				abortAll(activeXhrs);
				errors.push(error);
			}
			count += 1;
			if (count === activeXhrs.length) {
				segment.endOfAllRequests = Date.now();
				if (errors.length > 0) {
					var worstError = getMostImportantError(errors);
					return doneFn(worstError, segment);
				}
				if (segment.encryptedBytes) {
					return decryptSegment(decrypter, segment, doneFn);
				}
				return doneFn(null, segment);
			}
		};
	};
	var handleProgress = function handleProgress(segment, progressFn) {
		return function (event) {
			segment.stats = videojs$1.mergeOptions(segment.stats, getProgressStats(event));
			if (!segment.stats.firstBytesReceivedAt && segment.stats.bytesReceived) {
				segment.stats.firstBytesReceivedAt = Date.now();
			}
			return progressFn(event, segment);
		};
	};
	var mediaSegmentRequest = function mediaSegmentRequest(xhr, xhrOptions, decryptionWorker, captionParser, segment, progressFn, doneFn) {
		var activeXhrs = [];
		var finishProcessingFn = waitForCompletion(activeXhrs, decryptionWorker, doneFn);
		if (segment.key) {
			var keyRequestOptions = videojs$1.mergeOptions(xhrOptions, {
				uri: segment.key.resolvedUri,
				responseType: 'arraybuffer'
			});
			var keyRequestCallback = handleKeyResponse(segment, finishProcessingFn);
			var keyXhr = xhr(keyRequestOptions, keyRequestCallback);
			activeXhrs.push(keyXhr);
		}
		if (segment.map && !segment.map.bytes) {
			var initSegmentOptions = videojs$1.mergeOptions(xhrOptions, {
				uri: segment.map.resolvedUri,
				responseType: 'arraybuffer',
				headers: segmentXhrHeaders(segment.map)
			});
			var initSegmentRequestCallback = handleInitSegmentResponse(segment, captionParser, finishProcessingFn);
			var initSegmentXhr = xhr(initSegmentOptions, initSegmentRequestCallback);
			activeXhrs.push(initSegmentXhr);
		}
		var segmentRequestOptions = videojs$1.mergeOptions(xhrOptions, {
			uri: segment.resolvedUri,
			responseType: 'arraybuffer',
			headers: segmentXhrHeaders(segment)
		});
		var segmentRequestCallback = handleSegmentResponse(segment, captionParser, finishProcessingFn);
		var segmentXhr = xhr(segmentRequestOptions, segmentRequestCallback);
		segmentXhr.addEventListener('progress', handleProgress(segment, progressFn));
		activeXhrs.push(segmentXhr);
		return function () {
			return abortAll(activeXhrs);
		};
	};
	var safeGetComputedStyle = function safeGetComputedStyle(el, property) {
		var result = void 0;
		if (!el) {
			return '';
		}
		result = window_1.getComputedStyle(el);
		if (!result) {
			return '';
		}
		return result[property];
	};
	var stableSort = function stableSort(array, sortFn) {
		var newArray = array.slice();
		array.sort(function (left, right) {
			var cmp = sortFn(left, right);
			if (cmp === 0) {
				return newArray.indexOf(left) - newArray.indexOf(right);
			}
			return cmp;
		});
	};
	var comparePlaylistBandwidth = function comparePlaylistBandwidth(left, right) {
		var leftBandwidth = void 0;
		var rightBandwidth = void 0;
		if (left.attributes.BANDWIDTH) {
			leftBandwidth = left.attributes.BANDWIDTH;
		}
		leftBandwidth = leftBandwidth || window_1.Number.MAX_VALUE;
		if (right.attributes.BANDWIDTH) {
			rightBandwidth = right.attributes.BANDWIDTH;
		}
		rightBandwidth = rightBandwidth || window_1.Number.MAX_VALUE;
		return leftBandwidth - rightBandwidth;
	};
	var comparePlaylistResolution = function comparePlaylistResolution(left, right) {
		var leftWidth = void 0;
		var rightWidth = void 0;
		if (left.attributes.RESOLUTION && left.attributes.RESOLUTION.width) {
			leftWidth = left.attributes.RESOLUTION.width;
		}
		leftWidth = leftWidth || window_1.Number.MAX_VALUE;
		if (right.attributes.RESOLUTION && right.attributes.RESOLUTION.width) {
			rightWidth = right.attributes.RESOLUTION.width;
		}
		rightWidth = rightWidth || window_1.Number.MAX_VALUE;
		if (leftWidth === rightWidth && left.attributes.BANDWIDTH && right.attributes.BANDWIDTH) {
			return left.attributes.BANDWIDTH - right.attributes.BANDWIDTH;
		}
		return leftWidth - rightWidth;
	};
	var simpleSelector = function simpleSelector(master, playerBandwidth, playerWidth, playerHeight) {
		var sortedPlaylistReps = master.playlists.map(function (playlist) {
			var width = void 0;
			var height = void 0;
			var bandwidth = void 0;
			width = playlist.attributes.RESOLUTION && playlist.attributes.RESOLUTION.width;
			height = playlist.attributes.RESOLUTION && playlist.attributes.RESOLUTION.height;
			bandwidth = playlist.attributes.BANDWIDTH;
			bandwidth = bandwidth || window_1.Number.MAX_VALUE;
			return {
				bandwidth: bandwidth,
				width: width,
				height: height,
				playlist: playlist
			};
		});
		stableSort(sortedPlaylistReps, function (left, right) {
			return left.bandwidth - right.bandwidth;
		});
		sortedPlaylistReps = sortedPlaylistReps.filter(function (rep) {
			return !Playlist.isIncompatible(rep.playlist);
		});
		var enabledPlaylistReps = sortedPlaylistReps.filter(function (rep) {
			return Playlist.isEnabled(rep.playlist);
		});
		if (!enabledPlaylistReps.length) {
			enabledPlaylistReps = sortedPlaylistReps.filter(function (rep) {
				return !Playlist.isDisabled(rep.playlist);
			});
		}
		var bandwidthPlaylistReps = enabledPlaylistReps.filter(function (rep) {
			return rep.bandwidth * Config.BANDWIDTH_VARIANCE < playerBandwidth;
		});
		var highestRemainingBandwidthRep = bandwidthPlaylistReps[bandwidthPlaylistReps.length - 1];
		var bandwidthBestRep = bandwidthPlaylistReps.filter(function (rep) {
			return rep.bandwidth === highestRemainingBandwidthRep.bandwidth;
		})[0];
		var haveResolution = bandwidthPlaylistReps.filter(function (rep) {
			return rep.width && rep.height;
		});
		stableSort(haveResolution, function (left, right) {
			return left.width - right.width;
		});
		var resolutionBestRepList = haveResolution.filter(function (rep) {
			return rep.width === playerWidth && rep.height === playerHeight;
		});
		highestRemainingBandwidthRep = resolutionBestRepList[resolutionBestRepList.length - 1];
		var resolutionBestRep = resolutionBestRepList.filter(function (rep) {
			return rep.bandwidth === highestRemainingBandwidthRep.bandwidth;
		})[0];
		var resolutionPlusOneList = void 0;
		var resolutionPlusOneSmallest = void 0;
		var resolutionPlusOneRep = void 0;
		if (!resolutionBestRep) {
			resolutionPlusOneList = haveResolution.filter(function (rep) {
				return rep.width > playerWidth || rep.height > playerHeight;
			});
			resolutionPlusOneSmallest = resolutionPlusOneList.filter(function (rep) {
				return rep.width === resolutionPlusOneList[0].width && rep.height === resolutionPlusOneList[0].height;
			});
			highestRemainingBandwidthRep = resolutionPlusOneSmallest[resolutionPlusOneSmallest.length - 1];
			resolutionPlusOneRep = resolutionPlusOneSmallest.filter(function (rep) {
				return rep.bandwidth === highestRemainingBandwidthRep.bandwidth;
			})[0];
		}
		var chosenRep = resolutionPlusOneRep || resolutionBestRep || bandwidthBestRep || enabledPlaylistReps[0] || sortedPlaylistReps[0];
		return chosenRep ? chosenRep.playlist : null;
	};
	var lastBandwidthSelector = function lastBandwidthSelector() {
		return simpleSelector(this.playlists.master, this.systemBandwidth, parseInt(safeGetComputedStyle(this.tech_.el(), 'width'), 10), parseInt(safeGetComputedStyle(this.tech_.el(), 'height'), 10));
	};
	var minRebufferMaxBandwidthSelector = function minRebufferMaxBandwidthSelector(settings) {
		var master = settings.master,
			currentTime = settings.currentTime,
			bandwidth = settings.bandwidth,
			duration$$1 = settings.duration,
			segmentDuration = settings.segmentDuration,
			timeUntilRebuffer = settings.timeUntilRebuffer,
			currentTimeline = settings.currentTimeline,
			syncController = settings.syncController;
		var compatiblePlaylists = master.playlists.filter(function (playlist) {
			return !Playlist.isIncompatible(playlist);
		});
		var enabledPlaylists = compatiblePlaylists.filter(Playlist.isEnabled);
		if (!enabledPlaylists.length) {
			enabledPlaylists = compatiblePlaylists.filter(function (playlist) {
				return !Playlist.isDisabled(playlist);
			});
		}
		var bandwidthPlaylists = enabledPlaylists.filter(Playlist.hasAttribute.bind(null, 'BANDWIDTH'));
		var rebufferingEstimates = bandwidthPlaylists.map(function (playlist) {
			var syncPoint = syncController.getSyncPoint(playlist, duration$$1, currentTimeline, currentTime);
			var numRequests = syncPoint ? 1 : 2;
			var requestTimeEstimate = Playlist.estimateSegmentRequestTime(segmentDuration, bandwidth, playlist);
			var rebufferingImpact = requestTimeEstimate * numRequests - timeUntilRebuffer;
			return {
				playlist: playlist,
				rebufferingImpact: rebufferingImpact
			};
		});
		var noRebufferingPlaylists = rebufferingEstimates.filter(function (estimate) {
			return estimate.rebufferingImpact <= 0;
		});
		stableSort(noRebufferingPlaylists, function (a, b) {
			return comparePlaylistBandwidth(b.playlist, a.playlist);
		});
		if (noRebufferingPlaylists.length) {
			return noRebufferingPlaylists[0];
		}
		stableSort(rebufferingEstimates, function (a, b) {
			return a.rebufferingImpact - b.rebufferingImpact;
		});
		return rebufferingEstimates[0] || null;
	};
	var lowestBitrateCompatibleVariantSelector = function lowestBitrateCompatibleVariantSelector() {
		var playlists = this.playlists.master.playlists.filter(Playlist.isEnabled);
		stableSort(playlists, function (a, b) {
			return comparePlaylistBandwidth(a, b);
		});
		var playlistsWithVideo = playlists.filter(function (playlist) {
			return parseCodecs(playlist.attributes.CODECS).videoCodec;
		});
		return playlistsWithVideo[0] || null;
	};
	var createCaptionsTrackIfNotExists = function createCaptionsTrackIfNotExists(inbandTextTracks, tech, captionStreams) {
		for (var trackId in captionStreams) {
			if (!inbandTextTracks[trackId]) {
				tech.trigger({ type: 'usage', name: 'hls-608' });
				var track = tech.textTracks().getTrackById(trackId);
				if (track) {
					inbandTextTracks[trackId] = track;
				} else {
					inbandTextTracks[trackId] = tech.addRemoteTextTrack({
						kind: 'captions',
						id: trackId,
						label: trackId
					}, false).track;
				}
			}
		}
	};
	var addCaptionData = function addCaptionData(_ref) {
		var inbandTextTracks = _ref.inbandTextTracks,
			captionArray = _ref.captionArray,
			timestampOffset = _ref.timestampOffset;
		if (!captionArray) {
			return;
		}
		var Cue = window.WebKitDataCue || window.VTTCue;
		captionArray.forEach(function (caption) {
			var track = caption.stream;
			var startTime = caption.startTime;
			var endTime = caption.endTime;
			if (!inbandTextTracks[track]) {
				return;
			}
			startTime += timestampOffset;
			endTime += timestampOffset;
			inbandTextTracks[track].addCue(new Cue(startTime, endTime, caption.text));
		});
	};
	var CHECK_BUFFER_DELAY = 500;
	var detectEndOfStream = function detectEndOfStream(playlist, mediaSource, segmentIndex) {
		if (!playlist || !mediaSource) {
			return false;
		}
		var segments = playlist.segments;
		var appendedLastSegment = segmentIndex === segments.length;
		return playlist.endList && mediaSource.readyState === 'open' && appendedLastSegment;
	};
	var finite = function finite(num) {
		return typeof num === 'number' && isFinite(num);
	};
	var illegalMediaSwitch = function illegalMediaSwitch(loaderType, startingMedia, newSegmentMedia) {
		if (loaderType !== 'main' || !startingMedia || !newSegmentMedia) {
			return null;
		}
		if (!newSegmentMedia.containsAudio && !newSegmentMedia.containsVideo) {
			return 'Neither audio nor video found in segment.';
		}
		if (startingMedia.containsVideo && !newSegmentMedia.containsVideo) {
			return 'Only audio found in segment when we expected video.' + ' We can\'t switch to audio only from a stream that had video.' + ' To get rid of this message, please add codec information to the manifest.';
		}
		if (!startingMedia.containsVideo && newSegmentMedia.containsVideo) {
			return 'Video found in segment when we expected only audio.' + ' We can\'t switch to a stream with video from an audio only stream.' + ' To get rid of this message, please add codec information to the manifest.';
		}
		return null;
	};
	var safeBackBufferTrimTime = function safeBackBufferTrimTime(seekable$$1, currentTime, targetDuration) {
		var removeToTime = void 0;
		if (seekable$$1.length && seekable$$1.start(0) > 0 && seekable$$1.start(0) < currentTime) {
			removeToTime = seekable$$1.start(0);
		} else {
			removeToTime = currentTime - 30;
		}
		return Math.min(removeToTime, currentTime - targetDuration);
	};
	var segmentInfoString = function segmentInfoString(segmentInfo) {
		var _segmentInfo$segment = segmentInfo.segment,
			start = _segmentInfo$segment.start,
			end = _segmentInfo$segment.end,
			_segmentInfo$playlist = segmentInfo.playlist,
			seq = _segmentInfo$playlist.mediaSequence,
			id = _segmentInfo$playlist.id,
			_segmentInfo$playlist2 = _segmentInfo$playlist.segments,
			segments = _segmentInfo$playlist2 === undefined ? [] : _segmentInfo$playlist2,
			index = segmentInfo.mediaIndex,
			timeline = segmentInfo.timeline;
		return ['appending [' + index + '] of [' + seq + ', ' + (seq + segments.length) + '] from playlist [' + id + ']', '[' + start + ' => ' + end + '] in timeline [' + timeline + ']'].join(' ');
	};
	var SegmentLoader = function (_videojs$EventTarget) {
		inherits$3(SegmentLoader, _videojs$EventTarget);
		function SegmentLoader(settings) {
			classCallCheck$3(this, SegmentLoader);
			var _this = possibleConstructorReturn$3(this, (SegmentLoader.__proto__ || Object.getPrototypeOf(SegmentLoader)).call(this));
			if (!settings) {
				throw new TypeError('Initialization settings are required');
			}
			if (typeof settings.currentTime !== 'function') {
				throw new TypeError('No currentTime getter specified');
			}
			if (!settings.mediaSource) {
				throw new TypeError('No MediaSource specified');
			}
			_this.bandwidth = settings.bandwidth;
			_this.throughput = { rate: 0, count: 0 };
			_this.roundTrip = NaN;
			_this.resetStats_();
			_this.mediaIndex = null;
			_this.hasPlayed_ = settings.hasPlayed;
			_this.currentTime_ = settings.currentTime;
			_this.seekable_ = settings.seekable;
			_this.seeking_ = settings.seeking;
			_this.duration_ = settings.duration;
			_this.mediaSource_ = settings.mediaSource;
			_this.hls_ = settings.hls;
			_this.loaderType_ = settings.loaderType;
			_this.startingMedia_ = void 0;
			_this.segmentMetadataTrack_ = settings.segmentMetadataTrack;
			_this.goalBufferLength_ = settings.goalBufferLength;
			_this.sourceType_ = settings.sourceType;
			_this.inbandTextTracks_ = settings.inbandTextTracks;
			_this.state_ = 'INIT';
			_this.checkBufferTimeout_ = null;
			_this.error_ = void 0;
			_this.currentTimeline_ = -1;
			_this.pendingSegment_ = null;
			_this.mimeType_ = null;
			_this.sourceUpdater_ = null;
			_this.xhrOptions_ = null;
			_this.activeInitSegmentId_ = null;
			_this.initSegments_ = {};
			_this.captionParser_ = new mp4_6();
			_this.decrypter_ = settings.decrypter;
			_this.syncController_ = settings.syncController;
			_this.syncPoint_ = {
				segmentIndex: 0,
				time: 0
			};
			_this.syncController_.on('syncinfoupdate', function () {
				return _this.trigger('syncinfoupdate');
			});
			_this.mediaSource_.addEventListener('sourceopen', function () {
				return _this.ended_ = false;
			});
			_this.fetchAtBuffer_ = false;
			_this.logger_ = logger('SegmentLoader[' + _this.loaderType_ + ']');
			Object.defineProperty(_this, 'state', {
				get: function get$$1() {
					return this.state_;
				},
				set: function set$$1(newState) {
					if (newState !== this.state_) {
						this.logger_(this.state_ + ' -> ' + newState);
						this.state_ = newState;
					}
				}
			});
			return _this;
		}
		createClass$2(SegmentLoader, [{
			key: 'resetStats_',
			value: function resetStats_() {
				this.mediaBytesTransferred = 0;
				this.mediaRequests = 0;
				this.mediaRequestsAborted = 0;
				this.mediaRequestsTimedout = 0;
				this.mediaRequestsErrored = 0;
				this.mediaTransferDuration = 0;
				this.mediaSecondsLoaded = 0;
			}
		}, {
			key: 'dispose',
			value: function dispose() {
				this.state = 'DISPOSED';
				this.pause();
				this.abort_();
				if (this.sourceUpdater_) {
					this.sourceUpdater_.dispose();
				}
				this.resetStats_();
				this.captionParser_.reset();
			}
		}, {
			key: 'abort',
			value: function abort() {
				if (this.state !== 'WAITING') {
					if (this.pendingSegment_) {
						this.pendingSegment_ = null;
					}
					return;
				}
				this.abort_();
				this.state = 'READY';
				if (!this.paused()) {
					this.monitorBuffer_();
				}
			}
		}, {
			key: 'abort_',
			value: function abort_() {
				if (this.pendingSegment_) {
					this.pendingSegment_.abortRequests();
				}
				this.pendingSegment_ = null;
			}
		}, {
			key: 'error',
			value: function error(_error) {
				if (typeof _error !== 'undefined') {
					this.error_ = _error;
				}
				this.pendingSegment_ = null;
				return this.error_;
			}
		}, {
			key: 'endOfStream',
			value: function endOfStream() {
				this.ended_ = true;
				this.pause();
				this.trigger('ended');
			}
		}, {
			key: 'buffered_',
			value: function buffered_() {
				if (!this.sourceUpdater_) {
					return videojs$1.createTimeRanges();
				}
				return this.sourceUpdater_.buffered();
			}
		}, {
			key: 'initSegment',
			value: function initSegment(map) {
				var set$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
				if (!map) {
					return null;
				}
				var id = initSegmentId(map);
				var storedMap = this.initSegments_[id];
				if (set$$1 && !storedMap && map.bytes) {
					this.initSegments_[id] = storedMap = {
						resolvedUri: map.resolvedUri,
						byterange: map.byterange,
						bytes: map.bytes,
						timescales: map.timescales,
						videoTrackIds: map.videoTrackIds
					};
				}
				return storedMap || map;
			}
		}, {
			key: 'couldBeginLoading_',
			value: function couldBeginLoading_() {
				return this.playlist_ && (
					this.sourceUpdater_ || this.mimeType_ && this.state === 'INIT') && !this.paused();
			}
		}, {
			key: 'load',
			value: function load() {
				this.monitorBuffer_();
				if (!this.playlist_) {
					return;
				}
				this.syncController_.setDateTimeMapping(this.playlist_);
				if (this.state === 'INIT' && this.couldBeginLoading_()) {
					return this.init_();
				}
				if (!this.couldBeginLoading_() || this.state !== 'READY' && this.state !== 'INIT') {
					return;
				}
				this.state = 'READY';
			}
		}, {
			key: 'init_',
			value: function init_() {
				this.state = 'READY';
				this.sourceUpdater_ = new SourceUpdater(this.mediaSource_, this.mimeType_, this.loaderType_, this.sourceBufferEmitter_);
				this.resetEverything();
				return this.monitorBuffer_();
			}
		}, {
			key: 'playlist',
			value: function playlist(newPlaylist) {
				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				if (!newPlaylist) {
					return;
				}
				var oldPlaylist = this.playlist_;
				var segmentInfo = this.pendingSegment_;
				this.playlist_ = newPlaylist;
				this.xhrOptions_ = options;
				if (!this.hasPlayed_()) {
					newPlaylist.syncInfo = {
						mediaSequence: newPlaylist.mediaSequence,
						time: 0
					};
				}
				var oldId = oldPlaylist ? oldPlaylist.id : null;
				this.logger_('playlist update [' + oldId + ' => ' + newPlaylist.id + ']');
				this.trigger('syncinfoupdate');
				if (this.state === 'INIT' && this.couldBeginLoading_()) {
					return this.init_();
				}
				if (!oldPlaylist || oldPlaylist.uri !== newPlaylist.uri) {
					if (this.mediaIndex !== null) {
						this.resyncLoader();
					}
					return;
				}
				var mediaSequenceDiff = newPlaylist.mediaSequence - oldPlaylist.mediaSequence;
				this.logger_('live window shift [' + mediaSequenceDiff + ']');
				if (this.mediaIndex !== null) {
					this.mediaIndex -= mediaSequenceDiff;
				}
				if (segmentInfo) {
					segmentInfo.mediaIndex -= mediaSequenceDiff;
					if (segmentInfo.mediaIndex >= 0) {
						segmentInfo.segment = newPlaylist.segments[segmentInfo.mediaIndex];
					}
				}
				this.syncController_.saveExpiredSegmentInfo(oldPlaylist, newPlaylist);
			}
		}, {
			key: 'pause',
			value: function pause() {
				if (this.checkBufferTimeout_) {
					window_1.clearTimeout(this.checkBufferTimeout_);
					this.checkBufferTimeout_ = null;
				}
			}
		}, {
			key: 'paused',
			value: function paused() {
				return this.checkBufferTimeout_ === null;
			}
		}, {
			key: 'mimeType',
			value: function mimeType(_mimeType, sourceBufferEmitter) {
				if (this.mimeType_) {
					return;
				}
				this.mimeType_ = _mimeType;
				this.sourceBufferEmitter_ = sourceBufferEmitter;
				if (this.state === 'INIT' && this.couldBeginLoading_()) {
					this.init_();
				}
			}
		}, {
			key: 'resetEverything',
			value: function resetEverything(done) {
				this.ended_ = false;
				this.resetLoader();
				this.remove(0, this.duration_(), done);
				this.captionParser_.clearAllCaptions();
				this.trigger('reseteverything');
			}
		}, {
			key: 'resetLoader',
			value: function resetLoader() {
				this.fetchAtBuffer_ = false;
				this.resyncLoader();
			}
		}, {
			key: 'resyncLoader',
			value: function resyncLoader() {
				this.mediaIndex = null;
				this.syncPoint_ = null;
				this.abort();
			}
		}, {
			key: 'remove',
			value: function remove(start, end, done) {
				if (this.sourceUpdater_) {
					this.sourceUpdater_.remove(start, end, done);
				}
				removeCuesFromTrack(start, end, this.segmentMetadataTrack_);
				if (this.inbandTextTracks_) {
					for (var id in this.inbandTextTracks_) {
						removeCuesFromTrack(start, end, this.inbandTextTracks_[id]);
					}
				}
			}
		}, {
			key: 'monitorBuffer_',
			value: function monitorBuffer_() {
				if (this.checkBufferTimeout_) {
					window_1.clearTimeout(this.checkBufferTimeout_);
				}
				this.checkBufferTimeout_ = window_1.setTimeout(this.monitorBufferTick_.bind(this), 1);
			}
		}, {
			key: 'monitorBufferTick_',
			value: function monitorBufferTick_() {
				if (this.state === 'READY') {
					this.fillBuffer_();
				}
				if (this.checkBufferTimeout_) {
					window_1.clearTimeout(this.checkBufferTimeout_);
				}
				this.checkBufferTimeout_ = window_1.setTimeout(this.monitorBufferTick_.bind(this), CHECK_BUFFER_DELAY);
			}
		}, {
			key: 'fillBuffer_',
			value: function fillBuffer_() {
				if (this.sourceUpdater_.updating()) {
					return;
				}
				if (!this.syncPoint_) {
					this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_());
				}
				var segmentInfo = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
				if (!segmentInfo) {
					return;
				}
				var isEndOfStream = detectEndOfStream(this.playlist_, this.mediaSource_, segmentInfo.mediaIndex);
				if (isEndOfStream) {
					this.endOfStream();
					return;
				}
				if (segmentInfo.mediaIndex === this.playlist_.segments.length - 1 && this.mediaSource_.readyState === 'ended' && !this.seeking_()) {
					return;
				}
				if (segmentInfo.timeline !== this.currentTimeline_ || segmentInfo.startOfSegment !== null && segmentInfo.startOfSegment < this.sourceUpdater_.timestampOffset()) {
					this.syncController_.reset();
					segmentInfo.timestampOffset = segmentInfo.startOfSegment;
					this.captionParser_.clearAllCaptions();
				}
				this.loadSegment_(segmentInfo);
			}
		}, {
			key: 'checkBuffer_',
			value: function checkBuffer_(buffered, playlist, mediaIndex, hasPlayed, currentTime, syncPoint) {
				var lastBufferedEnd = 0;
				var startOfSegment = void 0;
				if (buffered.length) {
					lastBufferedEnd = buffered.end(buffered.length - 1);
				}
				var bufferedTime = Math.max(0, lastBufferedEnd - currentTime);
				if (!playlist.segments.length) {
					return null;
				}
				if (bufferedTime >= this.goalBufferLength_()) {
					return null;
				}
				if (!hasPlayed && bufferedTime >= 1) {
					return null;
				}
				if (syncPoint === null) {
					mediaIndex = this.getSyncSegmentCandidate_(playlist);
					return this.generateSegmentInfo_(playlist, mediaIndex, null, true);
				}
				if (mediaIndex !== null) {
					var segment = playlist.segments[mediaIndex];
					if (segment && segment.end) {
						startOfSegment = segment.end;
					} else {
						startOfSegment = lastBufferedEnd;
					}
					return this.generateSegmentInfo_(playlist, mediaIndex + 1, startOfSegment, false);
				}
				if (this.fetchAtBuffer_) {
					var mediaSourceInfo = Playlist.getMediaInfoForTime(playlist, lastBufferedEnd, syncPoint.segmentIndex, syncPoint.time);
					mediaIndex = mediaSourceInfo.mediaIndex;
					startOfSegment = mediaSourceInfo.startTime;
				} else {
					var _mediaSourceInfo = Playlist.getMediaInfoForTime(playlist, currentTime, syncPoint.segmentIndex, syncPoint.time);
					mediaIndex = _mediaSourceInfo.mediaIndex;
					startOfSegment = _mediaSourceInfo.startTime;
				}
				return this.generateSegmentInfo_(playlist, mediaIndex, startOfSegment, false);
			}
		}, {
			key: 'getSyncSegmentCandidate_',
			value: function getSyncSegmentCandidate_(playlist) {
				var _this2 = this;
				if (this.currentTimeline_ === -1) {
					return 0;
				}
				var segmentIndexArray = playlist.segments.map(function (s, i) {
					return {
						timeline: s.timeline,
						segmentIndex: i
					};
				}).filter(function (s) {
					return s.timeline === _this2.currentTimeline_;
				});
				if (segmentIndexArray.length) {
					return segmentIndexArray[Math.min(segmentIndexArray.length - 1, 1)].segmentIndex;
				}
				return Math.max(playlist.segments.length - 1, 0);
			}
		}, {
			key: 'generateSegmentInfo_',
			value: function generateSegmentInfo_(playlist, mediaIndex, startOfSegment, isSyncRequest) {
				if (mediaIndex < 0 || mediaIndex >= playlist.segments.length) {
					return null;
				}
				var segment = playlist.segments[mediaIndex];
				return {
					requestId: 'segment-loader-' + Math.random(),
					uri: segment.resolvedUri,
					mediaIndex: mediaIndex,
					isSyncRequest: isSyncRequest,
					startOfSegment: startOfSegment,
					playlist: playlist,
					bytes: null,
					encryptedBytes: null,
					timestampOffset: null,
					timeline: segment.timeline,
					duration: segment.duration,
					segment: segment
				};
			}
		}, {
			key: 'abortRequestEarly_',
			value: function abortRequestEarly_(stats) {
				if (this.hls_.tech_.paused() ||
					!this.xhrOptions_.timeout ||
					!this.playlist_.attributes.BANDWIDTH) {
					return false;
				}
				if (Date.now() - (stats.firstBytesReceivedAt || Date.now()) < 1000) {
					return false;
				}
				var currentTime = this.currentTime_();
				var measuredBandwidth = stats.bandwidth;
				var segmentDuration = this.pendingSegment_.duration;
				var requestTimeRemaining = Playlist.estimateSegmentRequestTime(segmentDuration, measuredBandwidth, this.playlist_, stats.bytesReceived);
				var timeUntilRebuffer$$1 = timeUntilRebuffer(this.buffered_(), currentTime, this.hls_.tech_.playbackRate()) - 1;
				if (requestTimeRemaining <= timeUntilRebuffer$$1) {
					return false;
				}
				var switchCandidate = minRebufferMaxBandwidthSelector({
					master: this.hls_.playlists.master,
					currentTime: currentTime,
					bandwidth: measuredBandwidth,
					duration: this.duration_(),
					segmentDuration: segmentDuration,
					timeUntilRebuffer: timeUntilRebuffer$$1,
					currentTimeline: this.currentTimeline_,
					syncController: this.syncController_
				});
				if (!switchCandidate) {
					return;
				}
				var rebufferingImpact = requestTimeRemaining - timeUntilRebuffer$$1;
				var timeSavedBySwitching = rebufferingImpact - switchCandidate.rebufferingImpact;
				var minimumTimeSaving = 0.5;
				if (timeUntilRebuffer$$1 <= TIME_FUDGE_FACTOR) {
					minimumTimeSaving = 1;
				}
				if (!switchCandidate.playlist || switchCandidate.playlist.uri === this.playlist_.uri || timeSavedBySwitching < minimumTimeSaving) {
					return false;
				}
				this.bandwidth = switchCandidate.playlist.attributes.BANDWIDTH * Config.BANDWIDTH_VARIANCE + 1;
				this.abort();
				this.trigger('earlyabort');
				return true;
			}
		}, {
			key: 'handleProgress_',
			value: function handleProgress_(event, simpleSegment) {
				if (!this.pendingSegment_ || simpleSegment.requestId !== this.pendingSegment_.requestId || this.abortRequestEarly_(simpleSegment.stats)) {
					return;
				}
				this.trigger('progress');
			}
		}, {
			key: 'loadSegment_',
			value: function loadSegment_(segmentInfo) {
				this.state = 'WAITING';
				this.pendingSegment_ = segmentInfo;
				this.trimBackBuffer_(segmentInfo);
				segmentInfo.abortRequests = mediaSegmentRequest(this.hls_.xhr, this.xhrOptions_, this.decrypter_, this.captionParser_, this.createSimplifiedSegmentObj_(segmentInfo),
					this.handleProgress_.bind(this), this.segmentRequestFinished_.bind(this));
			}
		}, {
			key: 'trimBackBuffer_',
			value: function trimBackBuffer_(segmentInfo) {
				var removeToTime = safeBackBufferTrimTime(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
				if (removeToTime > 0) {
					this.remove(0, removeToTime);
				}
			}
		}, {
			key: 'createSimplifiedSegmentObj_',
			value: function createSimplifiedSegmentObj_(segmentInfo) {
				var segment = segmentInfo.segment;
				var simpleSegment = {
					resolvedUri: segment.resolvedUri,
					byterange: segment.byterange,
					requestId: segmentInfo.requestId
				};
				if (segment.key) {
					var iv = segment.key.iv || new Uint32Array([0, 0, 0, segmentInfo.mediaIndex + segmentInfo.playlist.mediaSequence]);
					simpleSegment.key = {
						resolvedUri: segment.key.resolvedUri,
						iv: iv
					};
				}
				if (segment.map) {
					simpleSegment.map = this.initSegment(segment.map);
				}
				return simpleSegment;
			}
		}, {
			key: 'segmentRequestFinished_',
			value: function segmentRequestFinished_(error, simpleSegment) {
				this.mediaRequests += 1;
				if (simpleSegment.stats) {
					this.mediaBytesTransferred += simpleSegment.stats.bytesReceived;
					this.mediaTransferDuration += simpleSegment.stats.roundTripTime;
				}
				if (!this.pendingSegment_) {
					this.mediaRequestsAborted += 1;
					return;
				}
				if (simpleSegment.requestId !== this.pendingSegment_.requestId) {
					return;
				}
				if (error) {
					this.pendingSegment_ = null;
					this.state = 'READY';
					if (error.code === REQUEST_ERRORS.ABORTED) {
						this.mediaRequestsAborted += 1;
						return;
					}
					this.pause();
					if (error.code === REQUEST_ERRORS.TIMEOUT) {
						this.mediaRequestsTimedout += 1;
						this.bandwidth = 1;
						this.roundTrip = NaN;
						this.trigger('bandwidthupdate');
						return;
					}
					this.mediaRequestsErrored += 1;
					this.error(error);
					this.trigger('error');
					return;
				}
				this.bandwidth = simpleSegment.stats.bandwidth;
				this.roundTrip = simpleSegment.stats.roundTripTime;
				if (simpleSegment.map) {
					simpleSegment.map = this.initSegment(simpleSegment.map, true);
				}
				this.processSegmentResponse_(simpleSegment);
			}
		}, {
			key: 'processSegmentResponse_',
			value: function processSegmentResponse_(simpleSegment) {
				var segmentInfo = this.pendingSegment_;
				segmentInfo.bytes = simpleSegment.bytes;
				if (simpleSegment.map) {
					segmentInfo.segment.map.bytes = simpleSegment.map.bytes;
				}
				segmentInfo.endOfAllRequests = simpleSegment.endOfAllRequests;
				if (simpleSegment.fmp4Captions) {
					createCaptionsTrackIfNotExists(this.inbandTextTracks_, this.hls_.tech_, simpleSegment.captionStreams);
					addCaptionData({
						inbandTextTracks: this.inbandTextTracks_,
						captionArray: simpleSegment.fmp4Captions,
						timestampOffset: 0
					});
					this.captionParser_.clearParsedCaptions();
				}
				this.handleSegment_();
			}
		}, {
			key: 'handleSegment_',
			value: function handleSegment_() {
				var _this3 = this;
				if (!this.pendingSegment_) {
					this.state = 'READY';
					return;
				}
				var segmentInfo = this.pendingSegment_;
				var segment = segmentInfo.segment;
				var timingInfo = this.syncController_.probeSegmentInfo(segmentInfo);
				if (typeof this.startingMedia_ === 'undefined' && timingInfo && (
					timingInfo.containsAudio || timingInfo.containsVideo)) {
					this.startingMedia_ = {
						containsAudio: timingInfo.containsAudio,
						containsVideo: timingInfo.containsVideo
					};
				}
				var illegalMediaSwitchError = illegalMediaSwitch(this.loaderType_, this.startingMedia_, timingInfo);
				if (illegalMediaSwitchError) {
					this.error({
						message: illegalMediaSwitchError,
						blacklistDuration: Infinity
					});
					this.trigger('error');
					return;
				}
				if (segmentInfo.isSyncRequest) {
					this.trigger('syncinfoupdate');
					this.pendingSegment_ = null;
					this.state = 'READY';
					return;
				}
				if (segmentInfo.timestampOffset !== null && segmentInfo.timestampOffset !== this.sourceUpdater_.timestampOffset()) {
					this.sourceUpdater_.timestampOffset(segmentInfo.timestampOffset);
					this.trigger('timestampoffset');
				}
				var timelineMapping = this.syncController_.mappingForTimeline(segmentInfo.timeline);
				if (timelineMapping !== null) {
					this.trigger({
						type: 'segmenttimemapping',
						mapping: timelineMapping
					});
				}
				this.state = 'APPENDING';
				if (segment.map) {
					var initId = initSegmentId(segment.map);
					if (!this.activeInitSegmentId_ || this.activeInitSegmentId_ !== initId) {
						var initSegment = this.initSegment(segment.map);
						this.sourceUpdater_.appendBuffer(initSegment.bytes, function () {
							_this3.activeInitSegmentId_ = initId;
						});
					}
				}
				segmentInfo.byteLength = segmentInfo.bytes.byteLength;
				if (typeof segment.start === 'number' && typeof segment.end === 'number') {
					this.mediaSecondsLoaded += segment.end - segment.start;
				} else {
					this.mediaSecondsLoaded += segment.duration;
				}
				this.logger_(segmentInfoString(segmentInfo));
				this.sourceUpdater_.appendBuffer(segmentInfo.bytes, this.handleUpdateEnd_.bind(this));
			}
		}, {
			key: 'handleUpdateEnd_',
			value: function handleUpdateEnd_() {
				if (!this.pendingSegment_) {
					this.state = 'READY';
					if (!this.paused()) {
						this.monitorBuffer_();
					}
					return;
				}
				var segmentInfo = this.pendingSegment_;
				var segment = segmentInfo.segment;
				var isWalkingForward = this.mediaIndex !== null;
				this.pendingSegment_ = null;
				this.recordThroughput_(segmentInfo);
				this.addSegmentMetadataCue_(segmentInfo);
				this.state = 'READY';
				this.mediaIndex = segmentInfo.mediaIndex;
				this.fetchAtBuffer_ = true;
				this.currentTimeline_ = segmentInfo.timeline;
				this.trigger('syncinfoupdate');
				if (segment.end && this.currentTime_() - segment.end > segmentInfo.playlist.targetDuration * 3) {
					this.resetEverything();
					return;
				}
				if (isWalkingForward) {
					this.trigger('bandwidthupdate');
				}
				this.trigger('progress');
				var isEndOfStream = detectEndOfStream(segmentInfo.playlist, this.mediaSource_, segmentInfo.mediaIndex + 1);
				if (isEndOfStream) {
					this.endOfStream();
				}
				if (!this.paused()) {
					this.monitorBuffer_();
				}
			}
		}, {
			key: 'recordThroughput_',
			value: function recordThroughput_(segmentInfo) {
				var rate = this.throughput.rate;
				var segmentProcessingTime = Date.now() - segmentInfo.endOfAllRequests + 1;
				var segmentProcessingThroughput = Math.floor(segmentInfo.byteLength / segmentProcessingTime * 8 * 1000);
				this.throughput.rate += (segmentProcessingThroughput - rate) / ++this.throughput.count;
			}
		}, {
			key: 'addSegmentMetadataCue_',
			value: function addSegmentMetadataCue_(segmentInfo) {
				if (!this.segmentMetadataTrack_) {
					return;
				}
				var segment = segmentInfo.segment;
				var start = segment.start;
				var end = segment.end;
				if (!finite(start) || !finite(end)) {
					return;
				}
				removeCuesFromTrack(start, end, this.segmentMetadataTrack_);
				var Cue = window_1.WebKitDataCue || window_1.VTTCue;
				var value = {
					bandwidth: segmentInfo.playlist.attributes.BANDWIDTH,
					resolution: segmentInfo.playlist.attributes.RESOLUTION,
					codecs: segmentInfo.playlist.attributes.CODECS,
					byteLength: segmentInfo.byteLength,
					uri: segmentInfo.uri,
					timeline: segmentInfo.timeline,
					playlist: segmentInfo.playlist.uri,
					start: start,
					end: end
				};
				var data = JSON.stringify(value);
				var cue = new Cue(start, end, data);
				cue.value = value;
				this.segmentMetadataTrack_.addCue(cue);
			}
		}]);
		return SegmentLoader;
	}(videojs$1.EventTarget);
	var uint8ToUtf8 = function uint8ToUtf8(uintArray) {
		return decodeURIComponent(escape(String.fromCharCode.apply(null, uintArray)));
	};
	var VTT_LINE_TERMINATORS = new Uint8Array('\n\n'.split('').map(function (char) {
		return char.charCodeAt(0);
	}));
	var VTTSegmentLoader = function (_SegmentLoader) {
		inherits$3(VTTSegmentLoader, _SegmentLoader);
		function VTTSegmentLoader(settings) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			classCallCheck$3(this, VTTSegmentLoader);
			var _this = possibleConstructorReturn$3(this, (VTTSegmentLoader.__proto__ || Object.getPrototypeOf(VTTSegmentLoader)).call(this, settings, options));
			_this.mediaSource_ = null;
			_this.subtitlesTrack_ = null;
			return _this;
		}
		createClass$2(VTTSegmentLoader, [{
			key: 'buffered_',
			value: function buffered_() {
				if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length) {
					return videojs$1.createTimeRanges();
				}
				var cues = this.subtitlesTrack_.cues;
				var start = cues[0].startTime;
				var end = cues[cues.length - 1].startTime;
				return videojs$1.createTimeRanges([[start, end]]);
			}
		}, {
			key: 'initSegment',
			value: function initSegment(map) {
				var set$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
				if (!map) {
					return null;
				}
				var id = initSegmentId(map);
				var storedMap = this.initSegments_[id];
				if (set$$1 && !storedMap && map.bytes) {
					var combinedByteLength = VTT_LINE_TERMINATORS.byteLength + map.bytes.byteLength;
					var combinedSegment = new Uint8Array(combinedByteLength);
					combinedSegment.set(map.bytes);
					combinedSegment.set(VTT_LINE_TERMINATORS, map.bytes.byteLength);
					this.initSegments_[id] = storedMap = {
						resolvedUri: map.resolvedUri,
						byterange: map.byterange,
						bytes: combinedSegment
					};
				}
				return storedMap || map;
			}
		}, {
			key: 'couldBeginLoading_',
			value: function couldBeginLoading_() {
				return this.playlist_ && this.subtitlesTrack_ && !this.paused();
			}
		}, {
			key: 'init_',
			value: function init_() {
				this.state = 'READY';
				this.resetEverything();
				return this.monitorBuffer_();
			}
		}, {
			key: 'track',
			value: function track(_track) {
				if (typeof _track === 'undefined') {
					return this.subtitlesTrack_;
				}
				this.subtitlesTrack_ = _track;
				if (this.state === 'INIT' && this.couldBeginLoading_()) {
					this.init_();
				}
				return this.subtitlesTrack_;
			}
		}, {
			key: 'remove',
			value: function remove(start, end) {
				removeCuesFromTrack(start, end, this.subtitlesTrack_);
			}
		}, {
			key: 'fillBuffer_',
			value: function fillBuffer_() {
				var _this2 = this;
				if (!this.syncPoint_) {
					this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_());
				}
				var segmentInfo = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
				segmentInfo = this.skipEmptySegments_(segmentInfo);
				if (!segmentInfo) {
					return;
				}
				if (this.syncController_.timestampOffsetForTimeline(segmentInfo.timeline) === null) {
					var checkTimestampOffset = function checkTimestampOffset() {
						_this2.state = 'READY';
						if (!_this2.paused()) {
							_this2.monitorBuffer_();
						}
					};
					this.syncController_.one('timestampoffset', checkTimestampOffset);
					this.state = 'WAITING_ON_TIMELINE';
					return;
				}
				this.loadSegment_(segmentInfo);
			}
		}, {
			key: 'skipEmptySegments_',
			value: function skipEmptySegments_(segmentInfo) {
				while (segmentInfo && segmentInfo.segment.empty) {
					segmentInfo = this.generateSegmentInfo_(segmentInfo.playlist, segmentInfo.mediaIndex + 1, segmentInfo.startOfSegment + segmentInfo.duration, segmentInfo.isSyncRequest);
				}
				return segmentInfo;
			}
		}, {
			key: 'handleSegment_',
			value: function handleSegment_() {
				var _this3 = this;
				if (!this.pendingSegment_ || !this.subtitlesTrack_) {
					this.state = 'READY';
					return;
				}
				this.state = 'APPENDING';
				var segmentInfo = this.pendingSegment_;
				var segment = segmentInfo.segment;
				if (typeof window_1.WebVTT !== 'function' && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
					var loadHandler = function loadHandler() {
						_this3.handleSegment_();
					};
					this.state = 'WAITING_ON_VTTJS';
					this.subtitlesTrack_.tech_.one('vttjsloaded', loadHandler);
					this.subtitlesTrack_.tech_.one('vttjserror', function () {
						_this3.subtitlesTrack_.tech_.off('vttjsloaded', loadHandler);
						_this3.error({
							message: 'Error loading vtt.js'
						});
						_this3.state = 'READY';
						_this3.pause();
						_this3.trigger('error');
					});
					return;
				}
				segment.requested = true;
				try {
					this.parseVTTCues_(segmentInfo);
				} catch (e) {
					this.error({
						message: e.message
					});
					this.state = 'READY';
					this.pause();
					return this.trigger('error');
				}
				this.updateTimeMapping_(segmentInfo, this.syncController_.timelines[segmentInfo.timeline], this.playlist_);
				if (segmentInfo.isSyncRequest) {
					this.trigger('syncinfoupdate');
					this.pendingSegment_ = null;
					this.state = 'READY';
					return;
				}
				segmentInfo.byteLength = segmentInfo.bytes.byteLength;
				this.mediaSecondsLoaded += segment.duration;
				if (segmentInfo.cues.length) {
					this.remove(segmentInfo.cues[0].endTime, segmentInfo.cues[segmentInfo.cues.length - 1].endTime);
				}
				segmentInfo.cues.forEach(function (cue) {
					_this3.subtitlesTrack_.addCue(cue);
				});
				this.handleUpdateEnd_();
			}
		}, {
			key: 'parseVTTCues_',
			value: function parseVTTCues_(segmentInfo) {
				var decoder = void 0;
				var decodeBytesToString = false;
				if (typeof window_1.TextDecoder === 'function') {
					decoder = new window_1.TextDecoder('utf8');
				} else {
					decoder = window_1.WebVTT.StringDecoder();
					decodeBytesToString = true;
				}
				var parser = new window_1.WebVTT.Parser(window_1, window_1.vttjs, decoder);
				segmentInfo.cues = [];
				segmentInfo.timestampmap = { MPEGTS: 0, LOCAL: 0 };
				parser.oncue = segmentInfo.cues.push.bind(segmentInfo.cues);
				parser.ontimestampmap = function (map) {
					return segmentInfo.timestampmap = map;
				};
				parser.onparsingerror = function (error) {
					videojs$1.log.warn('Error encountered when parsing cues: ' + error.message);
				};
				if (segmentInfo.segment.map) {
					var mapData = segmentInfo.segment.map.bytes;
					if (decodeBytesToString) {
						mapData = uint8ToUtf8(mapData);
					}
					parser.parse(mapData);
				}
				var segmentData = segmentInfo.bytes;
				if (decodeBytesToString) {
					segmentData = uint8ToUtf8(segmentData);
				}
				parser.parse(segmentData);
				parser.flush();
			}
		}, {
			key: 'updateTimeMapping_',
			value: function updateTimeMapping_(segmentInfo, mappingObj, playlist) {
				var segment = segmentInfo.segment;
				if (!mappingObj) {
					return;
				}
				if (!segmentInfo.cues.length) {
					segment.empty = true;
					return;
				}
				var timestampmap = segmentInfo.timestampmap;
				var diff = timestampmap.MPEGTS / 90000 - timestampmap.LOCAL + mappingObj.mapping;
				segmentInfo.cues.forEach(function (cue) {
					cue.startTime += diff;
					cue.endTime += diff;
				});
				if (!playlist.syncInfo) {
					var firstStart = segmentInfo.cues[0].startTime;
					var lastStart = segmentInfo.cues[segmentInfo.cues.length - 1].startTime;
					playlist.syncInfo = {
						mediaSequence: playlist.mediaSequence + segmentInfo.mediaIndex,
						time: Math.min(firstStart, lastStart - segment.duration)
					};
				}
			}
		}]);
		return VTTSegmentLoader;
	}(SegmentLoader);
	var findAdCue = function findAdCue(track, mediaTime) {
		var cues = track.cues;
		for (var i = 0; i < cues.length; i++) {
			var cue = cues[i];
			if (mediaTime >= cue.adStartTime && mediaTime <= cue.adEndTime) {
				return cue;
			}
		}
		return null;
	};
	var updateAdCues = function updateAdCues(media, track) {
		var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
		if (!media.segments) {
			return;
		}
		var mediaTime = offset;
		var cue = void 0;
		for (var i = 0; i < media.segments.length; i++) {
			var segment = media.segments[i];
			if (!cue) {
				cue = findAdCue(track, mediaTime + segment.duration / 2);
			}
			if (cue) {
				if ('cueIn' in segment) {
					cue.endTime = mediaTime;
					cue.adEndTime = mediaTime;
					mediaTime += segment.duration;
					cue = null;
					continue;
				}
				if (mediaTime < cue.endTime) {
					mediaTime += segment.duration;
					continue;
				}
				cue.endTime += segment.duration;
			} else {
				if ('cueOut' in segment) {
					cue = new window_1.VTTCue(mediaTime, mediaTime + segment.duration, segment.cueOut);
					cue.adStartTime = mediaTime;
					cue.adEndTime = mediaTime + parseFloat(segment.cueOut);
					track.addCue(cue);
				}
				if ('cueOutCont' in segment) {
					var adOffset = void 0;
					var adTotal = void 0;
					var _segment$cueOutCont$s = segment.cueOutCont.split('/').map(parseFloat);
					var _segment$cueOutCont$s2 = slicedToArray$1(_segment$cueOutCont$s, 2);
					adOffset = _segment$cueOutCont$s2[0];
					adTotal = _segment$cueOutCont$s2[1];
					cue = new window_1.VTTCue(mediaTime, mediaTime + segment.duration, '');
					cue.adStartTime = mediaTime - adOffset;
					cue.adEndTime = cue.adStartTime + adTotal;
					track.addCue(cue);
				}
			}
			mediaTime += segment.duration;
		}
	};
	var tsprobe = tsInspector.inspect;
	var syncPointStrategies = [
		{
			name: 'VOD',
			run: function run(syncController, playlist, duration$$1, currentTimeline, currentTime) {
				if (duration$$1 !== Infinity) {
					var syncPoint = {
						time: 0,
						segmentIndex: 0
					};
					return syncPoint;
				}
				return null;
			}
		},
		{
			name: 'ProgramDateTime',
			run: function run(syncController, playlist, duration$$1, currentTimeline, currentTime) {
				if (!syncController.datetimeToDisplayTime) {
					return null;
				}
				var segments = playlist.segments || [];
				var syncPoint = null;
				var lastDistance = null;
				currentTime = currentTime || 0;
				for (var i = 0; i < segments.length; i++) {
					var segment = segments[i];
					if (segment.dateTimeObject) {
						var segmentTime = segment.dateTimeObject.getTime() / 1000;
						var segmentStart = segmentTime + syncController.datetimeToDisplayTime;
						var distance = Math.abs(currentTime - segmentStart);
						if (lastDistance !== null && lastDistance < distance) {
							break;
						}
						lastDistance = distance;
						syncPoint = {
							time: segmentStart,
							segmentIndex: i
						};
					}
				}
				return syncPoint;
			}
		},
		{
			name: 'Segment',
			run: function run(syncController, playlist, duration$$1, currentTimeline, currentTime) {
				var segments = playlist.segments || [];
				var syncPoint = null;
				var lastDistance = null;
				currentTime = currentTime || 0;
				for (var i = 0; i < segments.length; i++) {
					var segment = segments[i];
					if (segment.timeline === currentTimeline && typeof segment.start !== 'undefined') {
						var distance = Math.abs(currentTime - segment.start);
						if (lastDistance !== null && lastDistance < distance) {
							break;
						}
						if (!syncPoint || lastDistance === null || lastDistance >= distance) {
							lastDistance = distance;
							syncPoint = {
								time: segment.start,
								segmentIndex: i
							};
						}
					}
				}
				return syncPoint;
			}
		},
		{
			name: 'Discontinuity',
			run: function run(syncController, playlist, duration$$1, currentTimeline, currentTime) {
				var syncPoint = null;
				currentTime = currentTime || 0;
				if (playlist.discontinuityStarts && playlist.discontinuityStarts.length) {
					var lastDistance = null;
					for (var i = 0; i < playlist.discontinuityStarts.length; i++) {
						var segmentIndex = playlist.discontinuityStarts[i];
						var discontinuity = playlist.discontinuitySequence + i + 1;
						var discontinuitySync = syncController.discontinuities[discontinuity];
						if (discontinuitySync) {
							var distance = Math.abs(currentTime - discontinuitySync.time);
							if (lastDistance !== null && lastDistance < distance) {
								break;
							}
							if (!syncPoint || lastDistance === null || lastDistance >= distance) {
								lastDistance = distance;
								syncPoint = {
									time: discontinuitySync.time,
									segmentIndex: segmentIndex
								};
							}
						}
					}
				}
				return syncPoint;
			}
		},
		{
			name: 'Playlist',
			run: function run(syncController, playlist, duration$$1, currentTimeline, currentTime) {
				if (playlist.syncInfo) {
					var syncPoint = {
						time: playlist.syncInfo.time,
						segmentIndex: playlist.syncInfo.mediaSequence - playlist.mediaSequence
					};
					return syncPoint;
				}
				return null;
			}
		}];
	var SyncController = function (_videojs$EventTarget) {
		inherits$3(SyncController, _videojs$EventTarget);
		function SyncController() {
			classCallCheck$3(this, SyncController);
			var _this = possibleConstructorReturn$3(this, (SyncController.__proto__ || Object.getPrototypeOf(SyncController)).call(this));
			_this.inspectCache_ = undefined;
			_this.timelines = [];
			_this.discontinuities = [];
			_this.datetimeToDisplayTime = null;
			_this.logger_ = logger('SyncController');
			return _this;
		}
		createClass$2(SyncController, [{
			key: 'getSyncPoint',
			value: function getSyncPoint(playlist, duration$$1, currentTimeline, currentTime) {
				var syncPoints = this.runStrategies_(playlist, duration$$1, currentTimeline, currentTime);
				if (!syncPoints.length) {
					return null;
				}
				return this.selectSyncPoint_(syncPoints, { key: 'time', value: currentTime });
			}
		}, {
			key: 'getExpiredTime',
			value: function getExpiredTime(playlist, duration$$1) {
				if (!playlist || !playlist.segments) {
					return null;
				}
				var syncPoints = this.runStrategies_(playlist, duration$$1, playlist.discontinuitySequence, 0);
				if (!syncPoints.length) {
					return null;
				}
				var syncPoint = this.selectSyncPoint_(syncPoints, {
					key: 'segmentIndex',
					value: 0
				});
				if (syncPoint.segmentIndex > 0) {
					syncPoint.time *= -1;
				}
				return Math.abs(syncPoint.time + sumDurations(playlist, syncPoint.segmentIndex, 0));
			}
		}, {
			key: 'runStrategies_',
			value: function runStrategies_(playlist, duration$$1, currentTimeline, currentTime) {
				var syncPoints = [];
				for (var i = 0; i < syncPointStrategies.length; i++) {
					var strategy = syncPointStrategies[i];
					var syncPoint = strategy.run(this, playlist, duration$$1, currentTimeline, currentTime);
					if (syncPoint) {
						syncPoint.strategy = strategy.name;
						syncPoints.push({
							strategy: strategy.name,
							syncPoint: syncPoint
						});
					}
				}
				return syncPoints;
			}
		}, {
			key: 'selectSyncPoint_',
			value: function selectSyncPoint_(syncPoints, target) {
				var bestSyncPoint = syncPoints[0].syncPoint;
				var bestDistance = Math.abs(syncPoints[0].syncPoint[target.key] - target.value);
				var bestStrategy = syncPoints[0].strategy;
				for (var i = 1; i < syncPoints.length; i++) {
					var newDistance = Math.abs(syncPoints[i].syncPoint[target.key] - target.value);
					if (newDistance < bestDistance) {
						bestDistance = newDistance;
						bestSyncPoint = syncPoints[i].syncPoint;
						bestStrategy = syncPoints[i].strategy;
					}
				}
				this.logger_('syncPoint for [' + target.key + ': ' + target.value + '] chosen with strategy' + (' [' + bestStrategy + ']: [time:' + bestSyncPoint.time + ',') + (' segmentIndex:' + bestSyncPoint.segmentIndex + ']'));
				return bestSyncPoint;
			}
		}, {
			key: 'saveExpiredSegmentInfo',
			value: function saveExpiredSegmentInfo(oldPlaylist, newPlaylist) {
				var mediaSequenceDiff = newPlaylist.mediaSequence - oldPlaylist.mediaSequence;
				for (var i = mediaSequenceDiff - 1; i >= 0; i--) {
					var lastRemovedSegment = oldPlaylist.segments[i];
					if (lastRemovedSegment && typeof lastRemovedSegment.start !== 'undefined') {
						newPlaylist.syncInfo = {
							mediaSequence: oldPlaylist.mediaSequence + i,
							time: lastRemovedSegment.start
						};
						this.logger_('playlist refresh sync: [time:' + newPlaylist.syncInfo.time + ',' + (' mediaSequence: ' + newPlaylist.syncInfo.mediaSequence + ']'));
						this.trigger('syncinfoupdate');
						break;
					}
				}
			}
		}, {
			key: 'setDateTimeMapping',
			value: function setDateTimeMapping(playlist) {
				if (!this.datetimeToDisplayTime && playlist.segments && playlist.segments.length && playlist.segments[0].dateTimeObject) {
					var playlistTimestamp = playlist.segments[0].dateTimeObject.getTime() / 1000;
					this.datetimeToDisplayTime = -playlistTimestamp;
				}
			}
		}, {
			key: 'reset',
			value: function reset() {
				this.inspectCache_ = undefined;
			}
		}, {
			key: 'probeSegmentInfo',
			value: function probeSegmentInfo(segmentInfo) {
				var segment = segmentInfo.segment;
				var playlist = segmentInfo.playlist;
				var timingInfo = void 0;
				if (segment.map) {
					timingInfo = this.probeMp4Segment_(segmentInfo);
				} else {
					timingInfo = this.probeTsSegment_(segmentInfo);
				}
				if (timingInfo) {
					if (this.calculateSegmentTimeMapping_(segmentInfo, timingInfo)) {
						this.saveDiscontinuitySyncInfo_(segmentInfo);
						if (!playlist.syncInfo) {
							playlist.syncInfo = {
								mediaSequence: playlist.mediaSequence + segmentInfo.mediaIndex,
								time: segment.start
							};
						}
					}
				}
				return timingInfo;
			}
		}, {
			key: 'probeMp4Segment_',
			value: function probeMp4Segment_(segmentInfo) {
				var segment = segmentInfo.segment;
				var timescales = probe.timescale(segment.map.bytes);
				var startTime = probe.startTime(timescales, segmentInfo.bytes);
				if (segmentInfo.timestampOffset !== null) {
					segmentInfo.timestampOffset -= startTime;
				}
				return {
					start: startTime,
					end: startTime + segment.duration
				};
			}
		}, {
			key: 'probeTsSegment_',
			value: function probeTsSegment_(segmentInfo) {
				var timeInfo = tsprobe(segmentInfo.bytes, this.inspectCache_);
				var segmentStartTime = void 0;
				var segmentEndTime = void 0;
				if (!timeInfo) {
					return null;
				}
				if (timeInfo.video && timeInfo.video.length === 2) {
					this.inspectCache_ = timeInfo.video[1].dts;
					segmentStartTime = timeInfo.video[0].dtsTime;
					segmentEndTime = timeInfo.video[1].dtsTime;
				} else if (timeInfo.audio && timeInfo.audio.length === 2) {
					this.inspectCache_ = timeInfo.audio[1].dts;
					segmentStartTime = timeInfo.audio[0].dtsTime;
					segmentEndTime = timeInfo.audio[1].dtsTime;
				}
				return {
					start: segmentStartTime,
					end: segmentEndTime,
					containsVideo: timeInfo.video && timeInfo.video.length === 2,
					containsAudio: timeInfo.audio && timeInfo.audio.length === 2
				};
			}
		}, {
			key: 'timestampOffsetForTimeline',
			value: function timestampOffsetForTimeline(timeline) {
				if (typeof this.timelines[timeline] === 'undefined') {
					return null;
				}
				return this.timelines[timeline].time;
			}
		}, {
			key: 'mappingForTimeline',
			value: function mappingForTimeline(timeline) {
				if (typeof this.timelines[timeline] === 'undefined') {
					return null;
				}
				return this.timelines[timeline].mapping;
			}
		}, {
			key: 'calculateSegmentTimeMapping_',
			value: function calculateSegmentTimeMapping_(segmentInfo, timingInfo) {
				var segment = segmentInfo.segment;
				var mappingObj = this.timelines[segmentInfo.timeline];
				if (segmentInfo.timestampOffset !== null) {
					mappingObj = {
						time: segmentInfo.startOfSegment,
						mapping: segmentInfo.startOfSegment - timingInfo.start
					};
					this.timelines[segmentInfo.timeline] = mappingObj;
					this.trigger('timestampoffset');
					this.logger_('time mapping for timeline ' + segmentInfo.timeline + ': ' + ('[time: ' + mappingObj.time + '] [mapping: ' + mappingObj.mapping + ']'));
					segment.start = segmentInfo.startOfSegment;
					segment.end = timingInfo.end + mappingObj.mapping;
				} else if (mappingObj) {
					segment.start = timingInfo.start + mappingObj.mapping;
					segment.end = timingInfo.end + mappingObj.mapping;
				} else {
					return false;
				}
				return true;
			}
		}, {
			key: 'saveDiscontinuitySyncInfo_',
			value: function saveDiscontinuitySyncInfo_(segmentInfo) {
				var playlist = segmentInfo.playlist;
				var segment = segmentInfo.segment;
				if (segment.discontinuity) {
					this.discontinuities[segment.timeline] = {
						time: segment.start,
						accuracy: 0
					};
				} else if (playlist.discontinuityStarts && playlist.discontinuityStarts.length) {
					for (var i = 0; i < playlist.discontinuityStarts.length; i++) {
						var segmentIndex = playlist.discontinuityStarts[i];
						var discontinuity = playlist.discontinuitySequence + i + 1;
						var mediaIndexDiff = segmentIndex - segmentInfo.mediaIndex;
						var accuracy = Math.abs(mediaIndexDiff);
						if (!this.discontinuities[discontinuity] || this.discontinuities[discontinuity].accuracy > accuracy) {
							var time = void 0;
							if (mediaIndexDiff < 0) {
								time = segment.start - sumDurations(playlist, segmentInfo.mediaIndex, segmentIndex);
							} else {
								time = segment.end + sumDurations(playlist, segmentInfo.mediaIndex + 1, segmentIndex);
							}
							this.discontinuities[discontinuity] = {
								time: time,
								accuracy: accuracy
							};
						}
					}
				}
			}
		}]);
		return SyncController;
	}(videojs$1.EventTarget);
	var Decrypter$1 = new shimWorker("./decrypter-worker.worker.js", function (window, document$$1) {
		var self = this;
		var decrypterWorker = function () {
			function unpad(padded) {
				return padded.subarray(0, padded.byteLength - padded[padded.byteLength - 1]);
			}
			var classCallCheck$$1 = function classCallCheck$$1(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			};
			var createClass$$1 = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}
				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			}();
			var inherits$$1 = function inherits$$1(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
				}
				subClass.prototype = Object.create(superClass && superClass.prototype, {
					constructor: {
						value: subClass,
						enumerable: false,
						writable: true,
						configurable: true
					}
				});
				if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			};
			var possibleConstructorReturn$$1 = function possibleConstructorReturn$$1(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}
				return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
			};
			var precompute = function precompute() {
				var tables = [[[], [], [], [], []], [[], [], [], [], []]];
				var encTable = tables[0];
				var decTable = tables[1];
				var sbox = encTable[4];
				var sboxInv = decTable[4];
				var i = void 0;
				var x = void 0;
				var xInv = void 0;
				var d = [];
				var th = [];
				var x2 = void 0;
				var x4 = void 0;
				var x8 = void 0;
				var s = void 0;
				var tEnc = void 0;
				var tDec = void 0;
				for (i = 0; i < 256; i++) {
					th[(d[i] = i << 1 ^ (i >> 7) * 283) ^ i] = i;
				}
				for (x = xInv = 0; !sbox[x]; x ^= x2 || 1, xInv = th[xInv] || 1) {
					s = xInv ^ xInv << 1 ^ xInv << 2 ^ xInv << 3 ^ xInv << 4;
					s = s >> 8 ^ s & 255 ^ 99;
					sbox[x] = s;
					sboxInv[s] = x;
					x8 = d[x4 = d[x2 = d[x]]];
					tDec = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
					tEnc = d[s] * 0x101 ^ s * 0x1010100;
					for (i = 0; i < 4; i++) {
						encTable[i][x] = tEnc = tEnc << 24 ^ tEnc >>> 8;
						decTable[i][s] = tDec = tDec << 24 ^ tDec >>> 8;
					}
				}
				for (i = 0; i < 5; i++) {
					encTable[i] = encTable[i].slice(0);
					decTable[i] = decTable[i].slice(0);
				}
				return tables;
			};
			var aesTables = null;
			var AES = function () {
				function AES(key) {
					classCallCheck$$1(this, AES);
					if (!aesTables) {
						aesTables = precompute();
					}
					this._tables = [[aesTables[0][0].slice(), aesTables[0][1].slice(), aesTables[0][2].slice(), aesTables[0][3].slice(), aesTables[0][4].slice()], [aesTables[1][0].slice(), aesTables[1][1].slice(), aesTables[1][2].slice(), aesTables[1][3].slice(), aesTables[1][4].slice()]];
					var i = void 0;
					var j = void 0;
					var tmp = void 0;
					var encKey = void 0;
					var decKey = void 0;
					var sbox = this._tables[0][4];
					var decTable = this._tables[1];
					var keyLen = key.length;
					var rcon = 1;
					if (keyLen !== 4 && keyLen !== 6 && keyLen !== 8) {
						throw new Error('Invalid aes key size');
					}
					encKey = key.slice(0);
					decKey = [];
					this._key = [encKey, decKey];
					for (i = keyLen; i < 4 * keyLen + 28; i++) {
						tmp = encKey[i - 1];
						if (i % keyLen === 0 || keyLen === 8 && i % keyLen === 4) {
							tmp = sbox[tmp >>> 24] << 24 ^ sbox[tmp >> 16 & 255] << 16 ^ sbox[tmp >> 8 & 255] << 8 ^ sbox[tmp & 255];
							if (i % keyLen === 0) {
								tmp = tmp << 8 ^ tmp >>> 24 ^ rcon << 24;
								rcon = rcon << 1 ^ (rcon >> 7) * 283;
							}
						}
						encKey[i] = encKey[i - keyLen] ^ tmp;
					}
					for (j = 0; i; j++, i--) {
						tmp = encKey[j & 3 ? i : i - 4];
						if (i <= 4 || j < 4) {
							decKey[j] = tmp;
						} else {
							decKey[j] = decTable[0][sbox[tmp >>> 24]] ^ decTable[1][sbox[tmp >> 16 & 255]] ^ decTable[2][sbox[tmp >> 8 & 255]] ^ decTable[3][sbox[tmp & 255]];
						}
					}
				}
				AES.prototype.decrypt = function decrypt$$1(encrypted0, encrypted1, encrypted2, encrypted3, out, offset) {
					var key = this._key[1];
					var a = encrypted0 ^ key[0];
					var b = encrypted3 ^ key[1];
					var c = encrypted2 ^ key[2];
					var d = encrypted1 ^ key[3];
					var a2 = void 0;
					var b2 = void 0;
					var c2 = void 0;
					var nInnerRounds = key.length / 4 - 2;
					var i = void 0;
					var kIndex = 4;
					var table = this._tables[1];
					var table0 = table[0];
					var table1 = table[1];
					var table2 = table[2];
					var table3 = table[3];
					var sbox = table[4];
					for (i = 0; i < nInnerRounds; i++) {
						a2 = table0[a >>> 24] ^ table1[b >> 16 & 255] ^ table2[c >> 8 & 255] ^ table3[d & 255] ^ key[kIndex];
						b2 = table0[b >>> 24] ^ table1[c >> 16 & 255] ^ table2[d >> 8 & 255] ^ table3[a & 255] ^ key[kIndex + 1];
						c2 = table0[c >>> 24] ^ table1[d >> 16 & 255] ^ table2[a >> 8 & 255] ^ table3[b & 255] ^ key[kIndex + 2];
						d = table0[d >>> 24] ^ table1[a >> 16 & 255] ^ table2[b >> 8 & 255] ^ table3[c & 255] ^ key[kIndex + 3];
						kIndex += 4;
						a = a2; b = b2; c = c2;
					}
					for (i = 0; i < 4; i++) {
						out[(3 & -i) + offset] = sbox[a >>> 24] << 24 ^ sbox[b >> 16 & 255] << 16 ^ sbox[c >> 8 & 255] << 8 ^ sbox[d & 255] ^ key[kIndex++];
						a2 = a; a = b; b = c; c = d; d = a2;
					}
				};
				return AES;
			}();
			var Stream = function () {
				function Stream() {
					classCallCheck$$1(this, Stream);
					this.listeners = {};
				}
				Stream.prototype.on = function on(type, listener) {
					if (!this.listeners[type]) {
						this.listeners[type] = [];
					}
					this.listeners[type].push(listener);
				};
				Stream.prototype.off = function off(type, listener) {
					if (!this.listeners[type]) {
						return false;
					}
					var index = this.listeners[type].indexOf(listener);
					this.listeners[type].splice(index, 1);
					return index > -1;
				};
				Stream.prototype.trigger = function trigger(type) {
					var callbacks = this.listeners[type];
					if (!callbacks) {
						return;
					}
					if (arguments.length === 2) {
						var length = callbacks.length;
						for (var i = 0; i < length; ++i) {
							callbacks[i].call(this, arguments[1]);
						}
					} else {
						var args = Array.prototype.slice.call(arguments, 1);
						var _length = callbacks.length;
						for (var _i = 0; _i < _length; ++_i) {
							callbacks[_i].apply(this, args);
						}
					}
				};
				Stream.prototype.dispose = function dispose() {
					this.listeners = {};
				};
				Stream.prototype.pipe = function pipe(destination) {
					this.on('data', function (data) {
						destination.push(data);
					});
				};
				return Stream;
			}();
			var AsyncStream$$1 = function (_Stream) {
				inherits$$1(AsyncStream$$1, _Stream);
				function AsyncStream$$1() {
					classCallCheck$$1(this, AsyncStream$$1);
					var _this = possibleConstructorReturn$$1(this, _Stream.call(this, Stream));
					_this.jobs = [];
					_this.delay = 1;
					_this.timeout_ = null;
					return _this;
				}
				AsyncStream$$1.prototype.processJob_ = function processJob_() {
					this.jobs.shift()();
					if (this.jobs.length) {
						this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay);
					} else {
						this.timeout_ = null;
					}
				};
				AsyncStream$$1.prototype.push = function push(job) {
					this.jobs.push(job);
					if (!this.timeout_) {
						this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay);
					}
				};
				return AsyncStream$$1;
			}(Stream);
			var ntoh = function ntoh(word) {
				return word << 24 | (word & 0xff00) << 8 | (word & 0xff0000) >> 8 | word >>> 24;
			};
			var decrypt$$1 = function decrypt$$1(encrypted, key, initVector) {
				var encrypted32 = new Int32Array(encrypted.buffer, encrypted.byteOffset, encrypted.byteLength >> 2);
				var decipher = new AES(Array.prototype.slice.call(key));
				var decrypted = new Uint8Array(encrypted.byteLength);
				var decrypted32 = new Int32Array(decrypted.buffer);
				var init0 = void 0;
				var init1 = void 0;
				var init2 = void 0;
				var init3 = void 0;
				var encrypted0 = void 0;
				var encrypted1 = void 0;
				var encrypted2 = void 0;
				var encrypted3 = void 0;
				var wordIx = void 0;
				init0 = initVector[0];
				init1 = initVector[1];
				init2 = initVector[2];
				init3 = initVector[3];
				for (wordIx = 0; wordIx < encrypted32.length; wordIx += 4) {
					encrypted0 = ntoh(encrypted32[wordIx]);
					encrypted1 = ntoh(encrypted32[wordIx + 1]);
					encrypted2 = ntoh(encrypted32[wordIx + 2]);
					encrypted3 = ntoh(encrypted32[wordIx + 3]);
					decipher.decrypt(encrypted0, encrypted1, encrypted2, encrypted3, decrypted32, wordIx);
					decrypted32[wordIx] = ntoh(decrypted32[wordIx] ^ init0);
					decrypted32[wordIx + 1] = ntoh(decrypted32[wordIx + 1] ^ init1);
					decrypted32[wordIx + 2] = ntoh(decrypted32[wordIx + 2] ^ init2);
					decrypted32[wordIx + 3] = ntoh(decrypted32[wordIx + 3] ^ init3);
					init0 = encrypted0;
					init1 = encrypted1;
					init2 = encrypted2;
					init3 = encrypted3;
				}
				return decrypted;
			};
			var Decrypter$$1 = function () {
				function Decrypter$$1(encrypted, key, initVector, done) {
					classCallCheck$$1(this, Decrypter$$1);
					var step = Decrypter$$1.STEP;
					var encrypted32 = new Int32Array(encrypted.buffer);
					var decrypted = new Uint8Array(encrypted.byteLength);
					var i = 0;
					this.asyncStream_ = new AsyncStream$$1();
					this.asyncStream_.push(this.decryptChunk_(encrypted32.subarray(i, i + step), key, initVector, decrypted));
					for (i = step; i < encrypted32.length; i += step) {
						initVector = new Uint32Array([ntoh(encrypted32[i - 4]), ntoh(encrypted32[i - 3]), ntoh(encrypted32[i - 2]), ntoh(encrypted32[i - 1])]);
						this.asyncStream_.push(this.decryptChunk_(encrypted32.subarray(i, i + step), key, initVector, decrypted));
					}
					this.asyncStream_.push(function () {
						done(null, unpad(decrypted));
					});
				}
				Decrypter$$1.prototype.decryptChunk_ = function decryptChunk_(encrypted, key, initVector, decrypted) {
					return function () {
						var bytes = decrypt$$1(encrypted, key, initVector);
						decrypted.set(bytes, encrypted.byteOffset);
					};
				};
				createClass$$1(Decrypter$$1, null, [{
					key: 'STEP',
					get: function get$$1() {
						return 32000;
					}
				}]);
				return Decrypter$$1;
			}();
			var createTransferableMessage = function createTransferableMessage(message) {
				var transferable = {};
				Object.keys(message).forEach(function (key) {
					var value = message[key];
					if (ArrayBuffer.isView(value)) {
						transferable[key] = {
							bytes: value.buffer,
							byteOffset: value.byteOffset,
							byteLength: value.byteLength
						};
					} else {
						transferable[key] = value;
					}
				});
				return transferable;
			};
			var DecrypterWorker = function DecrypterWorker(self) {
				self.onmessage = function (event) {
					var data = event.data;
					var encrypted = new Uint8Array(data.encrypted.bytes, data.encrypted.byteOffset, data.encrypted.byteLength);
					var key = new Uint32Array(data.key.bytes, data.key.byteOffset, data.key.byteLength / 4);
					var iv = new Uint32Array(data.iv.bytes, data.iv.byteOffset, data.iv.byteLength / 4);
					new Decrypter$$1(encrypted, key, iv, function (err, bytes) {
						self.postMessage(createTransferableMessage({
							source: data.source,
							decrypted: bytes
						}), [bytes.buffer]);
					});
				};
			};
			var decrypterWorker = new DecrypterWorker(self);
			return decrypterWorker;
		}();
	});
	var audioTrackKind_ = function audioTrackKind_(properties) {
		var kind = properties.default ? 'main' : 'alternative';
		if (properties.characteristics && properties.characteristics.indexOf('public.accessibility.describes-video') >= 0) {
			kind = 'main-desc';
		}
		return kind;
	};
	var stopLoaders = function stopLoaders(segmentLoader, mediaType) {
		segmentLoader.abort();
		segmentLoader.pause();
		if (mediaType && mediaType.activePlaylistLoader) {
			mediaType.activePlaylistLoader.pause();
			mediaType.activePlaylistLoader = null;
		}
	};
	var startLoaders = function startLoaders(playlistLoader, mediaType) {
		mediaType.activePlaylistLoader = playlistLoader;
		playlistLoader.load();
	};
	var onGroupChanged = function onGroupChanged(type, settings) {
		return function () {
			var _settings$segmentLoad = settings.segmentLoaders,
				segmentLoader = _settings$segmentLoad[type],
				mainSegmentLoader = _settings$segmentLoad.main,
				mediaType = settings.mediaTypes[type];
			var activeTrack = mediaType.activeTrack();
			var activeGroup = mediaType.activeGroup(activeTrack);
			var previousActiveLoader = mediaType.activePlaylistLoader;
			stopLoaders(segmentLoader, mediaType);
			if (!activeGroup) {
				return;
			}
			if (!activeGroup.playlistLoader) {
				if (previousActiveLoader) {
					mainSegmentLoader.resetEverything();
				}
				return;
			}
			segmentLoader.resyncLoader();
			startLoaders(activeGroup.playlistLoader, mediaType);
		};
	};
	var onTrackChanged = function onTrackChanged(type, settings) {
		return function () {
			var _settings$segmentLoad2 = settings.segmentLoaders,
				segmentLoader = _settings$segmentLoad2[type],
				mainSegmentLoader = _settings$segmentLoad2.main,
				mediaType = settings.mediaTypes[type];
			var activeTrack = mediaType.activeTrack();
			var activeGroup = mediaType.activeGroup(activeTrack);
			var previousActiveLoader = mediaType.activePlaylistLoader;
			stopLoaders(segmentLoader, mediaType);
			if (!activeGroup) {
				return;
			}
			if (!activeGroup.playlistLoader) {
				mainSegmentLoader.resetEverything();
				return;
			}
			if (previousActiveLoader === activeGroup.playlistLoader) {
				startLoaders(activeGroup.playlistLoader, mediaType);
				return;
			}
			if (segmentLoader.track) {
				segmentLoader.track(activeTrack);
			}
			segmentLoader.resetEverything();
			startLoaders(activeGroup.playlistLoader, mediaType);
		};
	};
	var onError = {
		AUDIO: function AUDIO(type, settings) {
			return function () {
				var segmentLoader = settings.segmentLoaders[type],
					mediaType = settings.mediaTypes[type],
					blacklistCurrentPlaylist = settings.blacklistCurrentPlaylist;
				stopLoaders(segmentLoader, mediaType);
				var activeTrack = mediaType.activeTrack();
				var activeGroup = mediaType.activeGroup();
				var id = (activeGroup.filter(function (group) {
					return group.default;
				})[0] || activeGroup[0]).id;
				var defaultTrack = mediaType.tracks[id];
				if (activeTrack === defaultTrack) {
					blacklistCurrentPlaylist({
						message: 'Problem encountered loading the default audio track.'
					});
					return;
				}
				videojs$1.log.warn('Problem encountered loading the alternate audio track.' + 'Switching back to default.');
				for (var trackId in mediaType.tracks) {
					mediaType.tracks[trackId].enabled = mediaType.tracks[trackId] === defaultTrack;
				}
				mediaType.onTrackChanged();
			};
		},
		SUBTITLES: function SUBTITLES(type, settings) {
			return function () {
				var segmentLoader = settings.segmentLoaders[type],
					mediaType = settings.mediaTypes[type];
				videojs$1.log.warn('Problem encountered loading the subtitle track.' + 'Disabling subtitle track.');
				stopLoaders(segmentLoader, mediaType);
				var track = mediaType.activeTrack();
				if (track) {
					track.mode = 'disabled';
				}
				mediaType.onTrackChanged();
			};
		}
	};
	var setupListeners = {
		AUDIO: function AUDIO(type, playlistLoader, settings) {
			if (!playlistLoader) {
				return;
			}
			var tech = settings.tech,
				requestOptions = settings.requestOptions,
				segmentLoader = settings.segmentLoaders[type];
			playlistLoader.on('loadedmetadata', function () {
				var media = playlistLoader.media();
				segmentLoader.playlist(media, requestOptions);
				if (!tech.paused() || media.endList && tech.preload() !== 'none') {
					segmentLoader.load();
				}
			});
			playlistLoader.on('loadedplaylist', function () {
				segmentLoader.playlist(playlistLoader.media(), requestOptions);
				if (!tech.paused()) {
					segmentLoader.load();
				}
			});
			playlistLoader.on('error', onError[type](type, settings));
		},
		SUBTITLES: function SUBTITLES(type, playlistLoader, settings) {
			var tech = settings.tech,
				requestOptions = settings.requestOptions,
				segmentLoader = settings.segmentLoaders[type],
				mediaType = settings.mediaTypes[type];
			playlistLoader.on('loadedmetadata', function () {
				var media = playlistLoader.media();
				segmentLoader.playlist(media, requestOptions);
				segmentLoader.track(mediaType.activeTrack());
				if (!tech.paused() || media.endList && tech.preload() !== 'none') {
					segmentLoader.load();
				}
			});
			playlistLoader.on('loadedplaylist', function () {
				segmentLoader.playlist(playlistLoader.media(), requestOptions);
				if (!tech.paused()) {
					segmentLoader.load();
				}
			});
			playlistLoader.on('error', onError[type](type, settings));
		}
	};
	var byGroupId = function byGroupId(type, groupId) {
		return function (playlist) {
			return playlist.attributes[type] === groupId;
		};
	};
	var byResolvedUri = function byResolvedUri(resolvedUri) {
		return function (playlist) {
			return playlist.resolvedUri === resolvedUri;
		};
	};
	var initialize = {
		'AUDIO': function AUDIO(type, settings) {
			var hls = settings.hls,
				sourceType = settings.sourceType,
				segmentLoader = settings.segmentLoaders[type],
				withCredentials = settings.requestOptions.withCredentials,
				_settings$master = settings.master,
				mediaGroups = _settings$master.mediaGroups,
				playlists = _settings$master.playlists,
				_settings$mediaTypes$ = settings.mediaTypes[type],
				groups = _settings$mediaTypes$.groups,
				tracks = _settings$mediaTypes$.tracks,
				masterPlaylistLoader = settings.masterPlaylistLoader;
			if (!mediaGroups[type] || Object.keys(mediaGroups[type]).length === 0) {
				mediaGroups[type] = { main: { default: { default: true } } };
			}
			for (var groupId in mediaGroups[type]) {
				if (!groups[groupId]) {
					groups[groupId] = [];
				}
				var groupPlaylists = playlists.filter(byGroupId(type, groupId));
				for (var variantLabel in mediaGroups[type][groupId]) {
					var properties = mediaGroups[type][groupId][variantLabel];
					var matchingPlaylists = groupPlaylists.filter(byResolvedUri(properties.resolvedUri));
					if (matchingPlaylists.length) {
						delete properties.resolvedUri;
					}
					var playlistLoader = void 0;
					if (properties.resolvedUri) {
						playlistLoader = new PlaylistLoader(properties.resolvedUri, hls, withCredentials);
					} else if (properties.playlists && sourceType === 'dash') {
						playlistLoader = new DashPlaylistLoader(properties.playlists[0], hls, withCredentials, masterPlaylistLoader);
					} else {
						playlistLoader = null;
					}
					properties = videojs$1.mergeOptions({ id: variantLabel, playlistLoader: playlistLoader }, properties);
					setupListeners[type](type, properties.playlistLoader, settings);
					groups[groupId].push(properties);
					if (typeof tracks[variantLabel] === 'undefined') {
						var track = new videojs$1.AudioTrack({
							id: variantLabel,
							kind: audioTrackKind_(properties),
							enabled: false,
							language: properties.language,
							default: properties.default,
							label: variantLabel
						});
						tracks[variantLabel] = track;
					}
				}
			}
			segmentLoader.on('error', onError[type](type, settings));
		},
		'SUBTITLES': function SUBTITLES(type, settings) {
			var tech = settings.tech,
				hls = settings.hls,
				sourceType = settings.sourceType,
				segmentLoader = settings.segmentLoaders[type],
				withCredentials = settings.requestOptions.withCredentials,
				mediaGroups = settings.master.mediaGroups,
				_settings$mediaTypes$2 = settings.mediaTypes[type],
				groups = _settings$mediaTypes$2.groups,
				tracks = _settings$mediaTypes$2.tracks,
				masterPlaylistLoader = settings.masterPlaylistLoader;
			for (var groupId in mediaGroups[type]) {
				if (!groups[groupId]) {
					groups[groupId] = [];
				}
				for (var variantLabel in mediaGroups[type][groupId]) {
					if (mediaGroups[type][groupId][variantLabel].forced) {
						continue;
					}
					var properties = mediaGroups[type][groupId][variantLabel];
					var playlistLoader = void 0;
					if (sourceType === 'hls') {
						playlistLoader = new PlaylistLoader(properties.resolvedUri, hls, withCredentials);
					} else if (sourceType === 'dash') {
						playlistLoader = new DashPlaylistLoader(properties.playlists[0], hls, withCredentials, masterPlaylistLoader);
					}
					properties = videojs$1.mergeOptions({
						id: variantLabel,
						playlistLoader: playlistLoader
					}, properties);
					setupListeners[type](type, properties.playlistLoader, settings);
					groups[groupId].push(properties);
					if (typeof tracks[variantLabel] === 'undefined') {
						var track = tech.addRemoteTextTrack({
							id: variantLabel,
							kind: 'subtitles',
							enabled: false,
							language: properties.language,
							label: variantLabel
						}, false).track;
						tracks[variantLabel] = track;
					}
				}
			}
			segmentLoader.on('error', onError[type](type, settings));
		},
		'CLOSED-CAPTIONS': function CLOSEDCAPTIONS(type, settings) {
			var tech = settings.tech,
				mediaGroups = settings.master.mediaGroups,
				_settings$mediaTypes$3 = settings.mediaTypes[type],
				groups = _settings$mediaTypes$3.groups,
				tracks = _settings$mediaTypes$3.tracks;
			for (var groupId in mediaGroups[type]) {
				if (!groups[groupId]) {
					groups[groupId] = [];
				}
				for (var variantLabel in mediaGroups[type][groupId]) {
					var properties = mediaGroups[type][groupId][variantLabel];
					if (!properties.instreamId.match(/CC\d/)) {
						continue;
					}
					groups[groupId].push(videojs$1.mergeOptions({ id: variantLabel }, properties));
					if (typeof tracks[variantLabel] === 'undefined') {
						var track = tech.addRemoteTextTrack({
							id: properties.instreamId,
							kind: 'captions',
							enabled: false,
							language: properties.language,
							label: variantLabel
						}, false).track;
						tracks[variantLabel] = track;
					}
				}
			}
		}
	};
	var activeGroup = function activeGroup(type, settings) {
		return function (track) {
			var masterPlaylistLoader = settings.masterPlaylistLoader,
				groups = settings.mediaTypes[type].groups;
			var media = masterPlaylistLoader.media();
			if (!media) {
				return null;
			}
			var variants = null;
			if (media.attributes[type]) {
				variants = groups[media.attributes[type]];
			}
			variants = variants || groups.main;
			if (typeof track === 'undefined') {
				return variants;
			}
			if (track === null) {
				return null;
			}
			return variants.filter(function (props) {
				return props.id === track.id;
			})[0] || null;
		};
	};
	var activeTrack = {
		AUDIO: function AUDIO(type, settings) {
			return function () {
				var tracks = settings.mediaTypes[type].tracks;
				for (var id in tracks) {
					if (tracks[id].enabled) {
						return tracks[id];
					}
				}
				return null;
			};
		},
		SUBTITLES: function SUBTITLES(type, settings) {
			return function () {
				var tracks = settings.mediaTypes[type].tracks;
				for (var id in tracks) {
					if (tracks[id].mode === 'showing') {
						return tracks[id];
					}
				}
				return null;
			};
		}
	};
	var setupMediaGroups = function setupMediaGroups(settings) {
		['AUDIO', 'SUBTITLES', 'CLOSED-CAPTIONS'].forEach(function (type) {
			initialize[type](type, settings);
		});
		var mediaTypes = settings.mediaTypes,
			masterPlaylistLoader = settings.masterPlaylistLoader,
			tech = settings.tech,
			hls = settings.hls;
		['AUDIO', 'SUBTITLES'].forEach(function (type) {
			mediaTypes[type].activeGroup = activeGroup(type, settings);
			mediaTypes[type].activeTrack = activeTrack[type](type, settings);
			mediaTypes[type].onGroupChanged = onGroupChanged(type, settings);
			mediaTypes[type].onTrackChanged = onTrackChanged(type, settings);
		});
		var audioGroup = mediaTypes.AUDIO.activeGroup();
		var groupId = (audioGroup.filter(function (group) {
			return group.default;
		})[0] || audioGroup[0]).id;
		mediaTypes.AUDIO.tracks[groupId].enabled = true;
		mediaTypes.AUDIO.onTrackChanged();
		masterPlaylistLoader.on('mediachange', function () {
			['AUDIO', 'SUBTITLES'].forEach(function (type) {
				return mediaTypes[type].onGroupChanged();
			});
		});
		var onAudioTrackChanged = function onAudioTrackChanged() {
			mediaTypes.AUDIO.onTrackChanged();
			tech.trigger({ type: 'usage', name: 'hls-audio-change' });
		};
		tech.audioTracks().addEventListener('change', onAudioTrackChanged);
		tech.remoteTextTracks().addEventListener('change', mediaTypes.SUBTITLES.onTrackChanged);
		hls.on('dispose', function () {
			tech.audioTracks().removeEventListener('change', onAudioTrackChanged);
			tech.remoteTextTracks().removeEventListener('change', mediaTypes.SUBTITLES.onTrackChanged);
		});
		tech.clearTracks('audio');
		for (var id in mediaTypes.AUDIO.tracks) {
			tech.audioTracks().addTrack(mediaTypes.AUDIO.tracks[id]);
		}
	};
	var createMediaTypes = function createMediaTypes() {
		var mediaTypes = {};
		['AUDIO', 'SUBTITLES', 'CLOSED-CAPTIONS'].forEach(function (type) {
			mediaTypes[type] = {
				groups: {},
				tracks: {},
				activePlaylistLoader: null,
				activeGroup: noop$1,
				activeTrack: noop$1,
				onGroupChanged: noop$1,
				onTrackChanged: noop$1
			};
		});
		return mediaTypes;
	};
	var ABORT_EARLY_BLACKLIST_SECONDS = 60 * 2;
	var Hls = void 0;
	var loaderStats = ['mediaRequests', 'mediaRequestsAborted', 'mediaRequestsTimedout', 'mediaRequestsErrored', 'mediaTransferDuration', 'mediaBytesTransferred'];
	var sumLoaderStat = function sumLoaderStat(stat) {
		return this.audioSegmentLoader_[stat] + this.mainSegmentLoader_[stat];
	};
	var MasterPlaylistController = function (_videojs$EventTarget) {
		inherits$3(MasterPlaylistController, _videojs$EventTarget);
		function MasterPlaylistController(options) {
			classCallCheck$3(this, MasterPlaylistController);
			var _this = possibleConstructorReturn$3(this, (MasterPlaylistController.__proto__ || Object.getPrototypeOf(MasterPlaylistController)).call(this));
			var url = options.url,
				withCredentials = options.withCredentials,
				tech = options.tech,
				bandwidth = options.bandwidth,
				externHls = options.externHls,
				useCueTags = options.useCueTags,
				blacklistDuration = options.blacklistDuration,
				enableLowInitialPlaylist = options.enableLowInitialPlaylist,
				sourceType = options.sourceType,
				seekTo = options.seekTo;
			if (!url) {
				throw new Error('A non-empty playlist URL is required');
			}
			Hls = externHls;
			_this.withCredentials = withCredentials;
			_this.tech_ = tech;
			_this.hls_ = tech.hls;
			_this.seekTo_ = seekTo;
			_this.sourceType_ = sourceType;
			_this.useCueTags_ = useCueTags;
			_this.blacklistDuration = blacklistDuration;
			_this.enableLowInitialPlaylist = enableLowInitialPlaylist;
			if (_this.useCueTags_) {
				_this.cueTagsTrack_ = _this.tech_.addTextTrack('metadata', 'ad-cues');
				_this.cueTagsTrack_.inBandMetadataTrackDispatchType = '';
			}
			_this.requestOptions_ = {
				withCredentials: _this.withCredentials,
				timeout: null
			};
			_this.mediaTypes_ = createMediaTypes();
			_this.mediaSource = new videojs$1.MediaSource();
			_this.mediaSource.addEventListener('sourceopen', _this.handleSourceOpen_.bind(_this));
			_this.seekable_ = videojs$1.createTimeRanges();
			_this.hasPlayed_ = function () {
				return false;
			};
			_this.syncController_ = new SyncController(options);
			_this.segmentMetadataTrack_ = tech.addRemoteTextTrack({
				kind: 'metadata',
				label: 'segment-metadata'
			}, false).track;
			_this.decrypter_ = new Decrypter$1();
			_this.inbandTextTracks_ = {};
			var segmentLoaderSettings = {
				hls: _this.hls_,
				mediaSource: _this.mediaSource,
				currentTime: _this.tech_.currentTime.bind(_this.tech_),
				seekable: function seekable$$1() {
					return _this.seekable();
				},
				seeking: function seeking() {
					return _this.tech_.seeking();
				},
				duration: function duration$$1() {
					return _this.mediaSource.duration;
				},
				hasPlayed: function hasPlayed() {
					return _this.hasPlayed_();
				},
				goalBufferLength: function goalBufferLength() {
					return _this.goalBufferLength();
				},
				bandwidth: bandwidth,
				syncController: _this.syncController_,
				decrypter: _this.decrypter_,
				sourceType: _this.sourceType_,
				inbandTextTracks: _this.inbandTextTracks_
			};
			_this.masterPlaylistLoader_ = _this.sourceType_ === 'dash' ? new DashPlaylistLoader(url, _this.hls_, _this.withCredentials) : new PlaylistLoader(url, _this.hls_, _this.withCredentials);
			_this.setupMasterPlaylistLoaderListeners_();
			_this.mainSegmentLoader_ = new SegmentLoader(videojs$1.mergeOptions(segmentLoaderSettings, {
				segmentMetadataTrack: _this.segmentMetadataTrack_,
				loaderType: 'main'
			}), options);
			_this.audioSegmentLoader_ = new SegmentLoader(videojs$1.mergeOptions(segmentLoaderSettings, {
				loaderType: 'audio'
			}), options);
			_this.subtitleSegmentLoader_ = new VTTSegmentLoader(videojs$1.mergeOptions(segmentLoaderSettings, {
				loaderType: 'vtt'
			}), options);
			_this.setupSegmentLoaderListeners_();
			loaderStats.forEach(function (stat) {
				_this[stat + '_'] = sumLoaderStat.bind(_this, stat);
			});
			_this.logger_ = logger('MPC');
			_this.masterPlaylistLoader_.load();
			return _this;
		}
		createClass$2(MasterPlaylistController, [{
			key: 'setupMasterPlaylistLoaderListeners_',
			value: function setupMasterPlaylistLoaderListeners_() {
				var _this2 = this;
				this.masterPlaylistLoader_.on('loadedmetadata', function () {
					var media = _this2.masterPlaylistLoader_.media();
					var requestTimeout = _this2.masterPlaylistLoader_.targetDuration * 1.5 * 1000;
					if (isLowestEnabledRendition(_this2.masterPlaylistLoader_.master, _this2.masterPlaylistLoader_.media())) {
						_this2.requestOptions_.timeout = 0;
					} else {
						_this2.requestOptions_.timeout = requestTimeout;
					}
					if (media.endList && _this2.tech_.preload() !== 'none') {
						_this2.mainSegmentLoader_.playlist(media, _this2.requestOptions_);
						_this2.mainSegmentLoader_.load();
					}
					setupMediaGroups({
						sourceType: _this2.sourceType_,
						segmentLoaders: {
							AUDIO: _this2.audioSegmentLoader_,
							SUBTITLES: _this2.subtitleSegmentLoader_,
							main: _this2.mainSegmentLoader_
						},
						tech: _this2.tech_,
						requestOptions: _this2.requestOptions_,
						masterPlaylistLoader: _this2.masterPlaylistLoader_,
						hls: _this2.hls_,
						master: _this2.master(),
						mediaTypes: _this2.mediaTypes_,
						blacklistCurrentPlaylist: _this2.blacklistCurrentPlaylist.bind(_this2)
					});
					_this2.triggerPresenceUsage_(_this2.master(), media);
					try {
						_this2.setupSourceBuffers_();
					} catch (e) {
						videojs$1.log.warn('Failed to create SourceBuffers', e);
						return _this2.mediaSource.endOfStream('decode');
					}
					_this2.setupFirstPlay();
					_this2.trigger('selectedinitialmedia');
				});
				this.masterPlaylistLoader_.on('loadedplaylist', function () {
					var updatedPlaylist = _this2.masterPlaylistLoader_.media();
					if (!updatedPlaylist) {
						_this2.excludeUnsupportedVariants_();
						var selectedMedia = void 0;
						if (_this2.enableLowInitialPlaylist) {
							selectedMedia = _this2.selectInitialPlaylist();
						}
						if (!selectedMedia) {
							selectedMedia = _this2.selectPlaylist();
						}
						_this2.initialMedia_ = selectedMedia;
						_this2.masterPlaylistLoader_.media(_this2.initialMedia_);
						return;
					}
					if (_this2.useCueTags_) {
						_this2.updateAdCues_(updatedPlaylist);
					}
					_this2.mainSegmentLoader_.playlist(updatedPlaylist, _this2.requestOptions_);
					_this2.updateDuration();
					if (!_this2.tech_.paused()) {
						_this2.mainSegmentLoader_.load();
						if (_this2.audioSegmentLoader_) {
							_this2.audioSegmentLoader_.load();
						}
					}
					if (!updatedPlaylist.endList) {
						var addSeekableRange = function addSeekableRange() {
							var seekable$$1 = _this2.seekable();
							if (seekable$$1.length !== 0) {
								_this2.mediaSource.addSeekableRange_(seekable$$1.start(0), seekable$$1.end(0));
							}
						};
						if (_this2.duration() !== Infinity) {
							var onDurationchange = function onDurationchange() {
								if (_this2.duration() === Infinity) {
									addSeekableRange();
								} else {
									_this2.tech_.one('durationchange', onDurationchange);
								}
							};
							_this2.tech_.one('durationchange', onDurationchange);
						} else {
							addSeekableRange();
						}
					}
				});
				this.masterPlaylistLoader_.on('error', function () {
					_this2.blacklistCurrentPlaylist(_this2.masterPlaylistLoader_.error);
				});
				this.masterPlaylistLoader_.on('mediachanging', function () {
					_this2.mainSegmentLoader_.abort();
					_this2.mainSegmentLoader_.pause();
				});
				this.masterPlaylistLoader_.on('mediachange', function () {
					var media = _this2.masterPlaylistLoader_.media();
					var requestTimeout = _this2.masterPlaylistLoader_.targetDuration * 1.5 * 1000;
					if (isLowestEnabledRendition(_this2.masterPlaylistLoader_.master, _this2.masterPlaylistLoader_.media())) {
						_this2.requestOptions_.timeout = 0;
					} else {
						_this2.requestOptions_.timeout = requestTimeout;
					}
					_this2.mainSegmentLoader_.playlist(media, _this2.requestOptions_);
					_this2.mainSegmentLoader_.load();
					_this2.tech_.trigger({
						type: 'mediachange',
						bubbles: true
					});
				});
				this.masterPlaylistLoader_.on('playlistunchanged', function () {
					var updatedPlaylist = _this2.masterPlaylistLoader_.media();
					var playlistOutdated = _this2.stuckAtPlaylistEnd_(updatedPlaylist);
					if (playlistOutdated) {
						_this2.blacklistCurrentPlaylist({
							message: 'Playlist no longer updating.'
						});
						_this2.tech_.trigger('playliststuck');
					}
				});
				this.masterPlaylistLoader_.on('renditiondisabled', function () {
					_this2.tech_.trigger({ type: 'usage', name: 'hls-rendition-disabled' });
				});
				this.masterPlaylistLoader_.on('renditionenabled', function () {
					_this2.tech_.trigger({ type: 'usage', name: 'hls-rendition-enabled' });
				});
			}
		}, {
			key: 'triggerPresenceUsage_',
			value: function triggerPresenceUsage_(master, media) {
				var mediaGroups = master.mediaGroups || {};
				var defaultDemuxed = true;
				var audioGroupKeys = Object.keys(mediaGroups.AUDIO);
				for (var mediaGroup in mediaGroups.AUDIO) {
					for (var label in mediaGroups.AUDIO[mediaGroup]) {
						var properties = mediaGroups.AUDIO[mediaGroup][label];
						if (!properties.uri) {
							defaultDemuxed = false;
						}
					}
				}
				if (defaultDemuxed) {
					this.tech_.trigger({ type: 'usage', name: 'hls-demuxed' });
				}
				if (Object.keys(mediaGroups.SUBTITLES).length) {
					this.tech_.trigger({ type: 'usage', name: 'hls-webvtt' });
				}
				if (Hls.Playlist.isAes(media)) {
					this.tech_.trigger({ type: 'usage', name: 'hls-aes' });
				}
				if (Hls.Playlist.isFmp4(media)) {
					this.tech_.trigger({ type: 'usage', name: 'hls-fmp4' });
				}
				if (audioGroupKeys.length && Object.keys(mediaGroups.AUDIO[audioGroupKeys[0]]).length > 1) {
					this.tech_.trigger({ type: 'usage', name: 'hls-alternate-audio' });
				}
				if (this.useCueTags_) {
					this.tech_.trigger({ type: 'usage', name: 'hls-playlist-cue-tags' });
				}
			}
		}, {
			key: 'setupSegmentLoaderListeners_',
			value: function setupSegmentLoaderListeners_() {
				var _this3 = this;
				this.mainSegmentLoader_.on('bandwidthupdate', function () {
					var nextPlaylist = _this3.selectPlaylist();
					var currentPlaylist = _this3.masterPlaylistLoader_.media();
					var buffered = _this3.tech_.buffered();
					var forwardBuffer = buffered.length ? buffered.end(buffered.length - 1) - _this3.tech_.currentTime() : 0;
					var bufferLowWaterLine = _this3.bufferLowWaterLine();
					if (!currentPlaylist.endList ||
						_this3.duration() < Config.MAX_BUFFER_LOW_WATER_LINE ||
						nextPlaylist.attributes.BANDWIDTH < currentPlaylist.attributes.BANDWIDTH ||
						forwardBuffer >= bufferLowWaterLine) {
						_this3.masterPlaylistLoader_.media(nextPlaylist);
					}
					_this3.tech_.trigger('bandwidthupdate');
				});
				this.mainSegmentLoader_.on('progress', function () {
					_this3.trigger('progress');
				});
				this.mainSegmentLoader_.on('error', function () {
					_this3.blacklistCurrentPlaylist(_this3.mainSegmentLoader_.error());
				});
				this.mainSegmentLoader_.on('syncinfoupdate', function () {
					_this3.onSyncInfoUpdate_();
				});
				this.mainSegmentLoader_.on('timestampoffset', function () {
					_this3.tech_.trigger({ type: 'usage', name: 'hls-timestamp-offset' });
				});
				this.audioSegmentLoader_.on('syncinfoupdate', function () {
					_this3.onSyncInfoUpdate_();
				});
				this.mainSegmentLoader_.on('ended', function () {
					_this3.onEndOfStream();
				});
				this.mainSegmentLoader_.on('earlyabort', function () {
					_this3.blacklistCurrentPlaylist({
						message: 'Aborted early because there isn\'t enough bandwidth to complete the ' + 'request without rebuffering.'
					}, ABORT_EARLY_BLACKLIST_SECONDS);
				});
				this.mainSegmentLoader_.on('reseteverything', function () {
					_this3.tech_.trigger('hls-reset');
				});
				this.mainSegmentLoader_.on('segmenttimemapping', function (event) {
					_this3.tech_.trigger({
						type: 'hls-segment-time-mapping',
						mapping: event.mapping
					});
				});
				this.audioSegmentLoader_.on('ended', function () {
					_this3.onEndOfStream();
				});
			}
		}, {
			key: 'mediaSecondsLoaded_',
			value: function mediaSecondsLoaded_() {
				return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded);
			}
		}, {
			key: 'load',
			value: function load() {
				this.mainSegmentLoader_.load();
				if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
					this.audioSegmentLoader_.load();
				}
				if (this.mediaTypes_.SUBTITLES.activePlaylistLoader) {
					this.subtitleSegmentLoader_.load();
				}
			}
		}, {
			key: 'smoothQualityChange_',
			value: function smoothQualityChange_() {
				var media = this.selectPlaylist();
				if (media !== this.masterPlaylistLoader_.media()) {
					this.masterPlaylistLoader_.media(media);
					this.mainSegmentLoader_.resetLoader();
				}
			}
		}, {
			key: 'fastQualityChange_',
			value: function fastQualityChange_() {
				var _this4 = this;
				var media = this.selectPlaylist();
				if (media === this.masterPlaylistLoader_.media()) {
					return;
				}
				this.masterPlaylistLoader_.media(media);
				this.mainSegmentLoader_.resetEverything(function () {
					_this4.tech_.setCurrentTime(_this4.tech_.currentTime());
				});
			}
		}, {
			key: 'play',
			value: function play() {
				if (this.setupFirstPlay()) {
					return;
				}
				if (this.tech_.ended()) {
					this.seekTo_(0);
				}
				if (this.hasPlayed_()) {
					this.load();
				}
				var seekable$$1 = this.tech_.seekable();
				if (this.tech_.duration() === Infinity) {
					if (this.tech_.currentTime() < seekable$$1.start(0)) {
						return this.seekTo_(seekable$$1.end(seekable$$1.length - 1));
					}
				}
			}
		}, {
			key: 'setupFirstPlay',
			value: function setupFirstPlay() {
				var _this5 = this;
				var media = this.masterPlaylistLoader_.media();
				if (!media || this.tech_.paused() || this.hasPlayed_()) {
					return false;
				}
				if (!media.endList) {
					var seekable$$1 = this.seekable();
					if (!seekable$$1.length) {
						return false;
					}
					if (videojs$1.browser.IE_VERSION && this.tech_.readyState() === 0) {
						this.tech_.one('loadedmetadata', function () {
							_this5.trigger('firstplay');
							_this5.seekTo_(seekable$$1.end(0));
							_this5.hasPlayed_ = function () {
								return true;
							};
						});
						return false;
					}
					this.trigger('firstplay');
					this.seekTo_(seekable$$1.end(0));
				}
				this.hasPlayed_ = function () {
					return true;
				};
				this.load();
				return true;
			}
		}, {
			key: 'handleSourceOpen_',
			value: function handleSourceOpen_() {
				try {
					this.setupSourceBuffers_();
				} catch (e) {
					videojs$1.log.warn('Failed to create Source Buffers', e);
					return this.mediaSource.endOfStream('decode');
				}
				if (this.tech_.autoplay()) {
					var playPromise = this.tech_.play();
					if (typeof playPromise !== 'undefined' && typeof playPromise.then === 'function') {
						playPromise.then(null, function (e) { });
					}
				}
				this.trigger('sourceopen');
			}
		}, {
			key: 'onEndOfStream',
			value: function onEndOfStream() {
				var isEndOfStream = this.mainSegmentLoader_.ended_;
				if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
					if (!this.mainSegmentLoader_.startingMedia_ || this.mainSegmentLoader_.startingMedia_.containsVideo) {
						isEndOfStream = isEndOfStream && this.audioSegmentLoader_.ended_;
					} else {
						isEndOfStream = this.audioSegmentLoader_.ended_;
					}
				}
				if (isEndOfStream) {
					this.mediaSource.endOfStream();
				}
			}
		}, {
			key: 'stuckAtPlaylistEnd_',
			value: function stuckAtPlaylistEnd_(playlist) {
				var seekable$$1 = this.seekable();
				if (!seekable$$1.length) {
					return false;
				}
				var expired = this.syncController_.getExpiredTime(playlist, this.mediaSource.duration);
				if (expired === null) {
					return false;
				}
				var absolutePlaylistEnd = Hls.Playlist.playlistEnd(playlist, expired);
				var currentTime = this.tech_.currentTime();
				var buffered = this.tech_.buffered();
				if (!buffered.length) {
					return absolutePlaylistEnd - currentTime <= SAFE_TIME_DELTA;
				}
				var bufferedEnd = buffered.end(buffered.length - 1);
				return bufferedEnd - currentTime <= SAFE_TIME_DELTA && absolutePlaylistEnd - bufferedEnd <= SAFE_TIME_DELTA;
			}
		}, {
			key: 'blacklistCurrentPlaylist',
			value: function blacklistCurrentPlaylist() {
				var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var blacklistDuration = arguments[1];
				var currentPlaylist = void 0;
				var nextPlaylist = void 0;
				currentPlaylist = error.playlist || this.masterPlaylistLoader_.media();
				blacklistDuration = blacklistDuration || error.blacklistDuration || this.blacklistDuration;
				if (!currentPlaylist) {
					this.error = error;
					try {
						return this.mediaSource.endOfStream('network');
					} catch (e) {
						return this.trigger('error');
					}
				}
				var isFinalRendition = this.masterPlaylistLoader_.master.playlists.filter(isEnabled).length === 1;
				if (isFinalRendition) {
					videojs$1.log.warn('Problem encountered with the current ' + 'HLS playlist. Trying again since it is the final playlist.');
					this.tech_.trigger('retryplaylist');
					return this.masterPlaylistLoader_.load(isFinalRendition);
				}
				currentPlaylist.excludeUntil = Date.now() + blacklistDuration * 1000;
				this.tech_.trigger('blacklistplaylist');
				this.tech_.trigger({ type: 'usage', name: 'hls-rendition-blacklisted' });
				nextPlaylist = this.selectPlaylist();
				videojs$1.log.warn('Problem encountered with the current HLS playlist.' + (error.message ? ' ' + error.message : '') + ' Switching to another playlist.');
				return this.masterPlaylistLoader_.media(nextPlaylist);
			}
		}, {
			key: 'pauseLoading',
			value: function pauseLoading() {
				this.mainSegmentLoader_.pause();
				if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
					this.audioSegmentLoader_.pause();
				}
				if (this.mediaTypes_.SUBTITLES.activePlaylistLoader) {
					this.subtitleSegmentLoader_.pause();
				}
			}
		}, {
			key: 'setCurrentTime',
			value: function setCurrentTime(currentTime) {
				var buffered = findRange(this.tech_.buffered(), currentTime);
				if (!(this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media())) {
					return 0;
				}
				if (!this.masterPlaylistLoader_.media().segments) {
					return 0;
				}
				if (buffered && buffered.length) {
					return currentTime;
				}
				this.mainSegmentLoader_.resetEverything();
				this.mainSegmentLoader_.abort();
				if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
					this.audioSegmentLoader_.resetEverything();
					this.audioSegmentLoader_.abort();
				}
				if (this.mediaTypes_.SUBTITLES.activePlaylistLoader) {
					this.subtitleSegmentLoader_.resetEverything();
					this.subtitleSegmentLoader_.abort();
				}
				this.load();
			}
		}, {
			key: 'duration',
			value: function duration$$1() {
				if (!this.masterPlaylistLoader_) {
					return 0;
				}
				if (this.mediaSource) {
					return this.mediaSource.duration;
				}
				return Hls.Playlist.duration(this.masterPlaylistLoader_.media());
			}
		}, {
			key: 'seekable',
			value: function seekable$$1() {
				return this.seekable_;
			}
		}, {
			key: 'onSyncInfoUpdate_',
			value: function onSyncInfoUpdate_() {
				var mainSeekable = void 0;
				var audioSeekable = void 0;
				if (!this.masterPlaylistLoader_) {
					return;
				}
				var media = this.masterPlaylistLoader_.media();
				if (!media) {
					return;
				}
				var expired = this.syncController_.getExpiredTime(media, this.mediaSource.duration);
				if (expired === null) {
					return;
				}
				mainSeekable = Hls.Playlist.seekable(media, expired);
				if (mainSeekable.length === 0) {
					return;
				}
				if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
					media = this.mediaTypes_.AUDIO.activePlaylistLoader.media();
					expired = this.syncController_.getExpiredTime(media, this.mediaSource.duration);
					if (expired === null) {
						return;
					}
					audioSeekable = Hls.Playlist.seekable(media, expired);
					if (audioSeekable.length === 0) {
						return;
					}
				}
				if (!audioSeekable) {
					this.seekable_ = mainSeekable;
				} else if (audioSeekable.start(0) > mainSeekable.end(0) || mainSeekable.start(0) > audioSeekable.end(0)) {
					this.seekable_ = mainSeekable;
				} else {
					this.seekable_ = videojs$1.createTimeRanges([[audioSeekable.start(0) > mainSeekable.start(0) ? audioSeekable.start(0) : mainSeekable.start(0), audioSeekable.end(0) < mainSeekable.end(0) ? audioSeekable.end(0) : mainSeekable.end(0)]]);
				}
				this.logger_('seekable updated [' + printableRange(this.seekable_) + ']');
				this.tech_.trigger('seekablechanged');
			}
		}, {
			key: 'updateDuration',
			value: function updateDuration() {
				var _this6 = this;
				var oldDuration = this.mediaSource.duration;
				var newDuration = Hls.Playlist.duration(this.masterPlaylistLoader_.media());
				var buffered = this.tech_.buffered();
				var setDuration = function setDuration() {
					_this6.mediaSource.duration = newDuration;
					_this6.tech_.trigger('durationchange');
					_this6.mediaSource.removeEventListener('sourceopen', setDuration);
				};
				if (buffered.length > 0) {
					newDuration = Math.max(newDuration, buffered.end(buffered.length - 1));
				}
				if (oldDuration !== newDuration) {
					if (this.mediaSource.readyState !== 'open') {
						this.mediaSource.addEventListener('sourceopen', setDuration);
					} else {
						setDuration();
					}
				}
			}
		}, {
			key: 'dispose',
			value: function dispose() {
				var _this7 = this;
				this.decrypter_.terminate();
				this.masterPlaylistLoader_.dispose();
				this.mainSegmentLoader_.dispose();
				['AUDIO', 'SUBTITLES'].forEach(function (type) {
					var groups = _this7.mediaTypes_[type].groups;
					for (var id in groups) {
						groups[id].forEach(function (group) {
							if (group.playlistLoader) {
								group.playlistLoader.dispose();
							}
						});
					}
				});
				this.audioSegmentLoader_.dispose();
				this.subtitleSegmentLoader_.dispose();
			}
		}, {
			key: 'master',
			value: function master() {
				return this.masterPlaylistLoader_.master;
			}
		}, {
			key: 'media',
			value: function media() {
				return this.masterPlaylistLoader_.media() || this.initialMedia_;
			}
		}, {
			key: 'setupSourceBuffers_',
			value: function setupSourceBuffers_() {
				var media = this.masterPlaylistLoader_.media();
				var mimeTypes = void 0;
				if (!media || this.mediaSource.readyState !== 'open') {
					return;
				}
				mimeTypes = mimeTypesForPlaylist(this.masterPlaylistLoader_.master, media);
				if (mimeTypes.length < 1) {
					this.error = 'No compatible SourceBuffer configuration for the variant stream:' + media.resolvedUri;
					return this.mediaSource.endOfStream('decode');
				}
				this.configureLoaderMimeTypes_(mimeTypes);
				this.excludeIncompatibleVariants_(media);
			}
		}, {
			key: 'configureLoaderMimeTypes_',
			value: function configureLoaderMimeTypes_(mimeTypes) {
				var sourceBufferEmitter =
					mimeTypes.length > 1 &&
						mimeTypes[0].indexOf(',') === -1 &&
						mimeTypes[0] !== mimeTypes[1] ?
						new videojs$1.EventTarget() :
						null;
				this.mainSegmentLoader_.mimeType(mimeTypes[0], sourceBufferEmitter);
				if (mimeTypes[1]) {
					this.audioSegmentLoader_.mimeType(mimeTypes[1], sourceBufferEmitter);
				}
			}
		}, {
			key: 'excludeUnsupportedVariants_',
			value: function excludeUnsupportedVariants_() {
				this.master().playlists.forEach(function (variant) {
					if (variant.attributes.CODECS && window_1.MediaSource && window_1.MediaSource.isTypeSupported && !window_1.MediaSource.isTypeSupported('video/mp4; codecs="' + mapLegacyAvcCodecs(variant.attributes.CODECS) + '"')) {
						variant.excludeUntil = Infinity;
					}
				});
			}
		}, {
			key: 'excludeIncompatibleVariants_',
			value: function excludeIncompatibleVariants_(media) {
				var codecCount = 2;
				var videoCodec = null;
				var codecs = void 0;
				if (media.attributes.CODECS) {
					codecs = parseCodecs(media.attributes.CODECS);
					videoCodec = codecs.videoCodec;
					codecCount = codecs.codecCount;
				}
				this.master().playlists.forEach(function (variant) {
					var variantCodecs = {
						codecCount: 2,
						videoCodec: null
					};
					if (variant.attributes.CODECS) {
						variantCodecs = parseCodecs(variant.attributes.CODECS);
					}
					if (variantCodecs.codecCount !== codecCount) {
						variant.excludeUntil = Infinity;
					}
					if (variantCodecs.videoCodec !== videoCodec) {
						variant.excludeUntil = Infinity;
					}
				});
			}
		}, {
			key: 'updateAdCues_',
			value: function updateAdCues_(media) {
				var offset = 0;
				var seekable$$1 = this.seekable();
				if (seekable$$1.length) {
					offset = seekable$$1.start(0);
				}
				updateAdCues(media, this.cueTagsTrack_, offset);
			}
		}, {
			key: 'goalBufferLength',
			value: function goalBufferLength() {
				var currentTime = this.tech_.currentTime();
				var initial = Config.GOAL_BUFFER_LENGTH;
				var rate = Config.GOAL_BUFFER_LENGTH_RATE;
				var max = Math.max(initial, Config.MAX_GOAL_BUFFER_LENGTH);
				return Math.min(initial + currentTime * rate, max);
			}
		}, {
			key: 'bufferLowWaterLine',
			value: function bufferLowWaterLine() {
				var currentTime = this.tech_.currentTime();
				var initial = Config.BUFFER_LOW_WATER_LINE;
				var rate = Config.BUFFER_LOW_WATER_LINE_RATE;
				var max = Math.max(initial, Config.MAX_BUFFER_LOW_WATER_LINE);
				return Math.min(initial + currentTime * rate, max);
			}
		}]);
		return MasterPlaylistController;
	}(videojs$1.EventTarget);
	var enableFunction = function enableFunction(loader, playlistUri, changePlaylistFn) {
		return function (enable) {
			var playlist = loader.master.playlists[playlistUri];
			var incompatible = isIncompatible(playlist);
			var currentlyEnabled = isEnabled(playlist);
			if (typeof enable === 'undefined') {
				return currentlyEnabled;
			}
			if (enable) {
				delete playlist.disabled;
			} else {
				playlist.disabled = true;
			}
			if (enable !== currentlyEnabled && !incompatible) {
				changePlaylistFn();
				if (enable) {
					loader.trigger('renditionenabled');
				} else {
					loader.trigger('renditiondisabled');
				}
			}
			return enable;
		};
	};
	var Representation = function Representation(hlsHandler, playlist, id) {
		classCallCheck$3(this, Representation);
		var fastChangeFunction = hlsHandler.masterPlaylistController_.fastQualityChange_.bind(hlsHandler.masterPlaylistController_);
		if (playlist.attributes.RESOLUTION) {
			var resolution = playlist.attributes.RESOLUTION;
			this.width = resolution.width;
			this.height = resolution.height;
		}
		this.bandwidth = playlist.attributes.BANDWIDTH;
		this.id = id;
		this.enabled = enableFunction(hlsHandler.playlists, playlist.uri, fastChangeFunction);
	};
	var renditionSelectionMixin = function renditionSelectionMixin(hlsHandler) {
		var playlists = hlsHandler.playlists;
		hlsHandler.representations = function () {
			return playlists.master.playlists.filter(function (media) {
				return !isIncompatible(media);
			}).map(function (e, i) {
				return new Representation(hlsHandler, e, e.uri);
			});
		};
	};
	var timerCancelEvents = ['seeking', 'seeked', 'pause', 'playing', 'error'];
	var PlaybackWatcher = function () {
		function PlaybackWatcher(options) {
			var _this = this;
			classCallCheck$3(this, PlaybackWatcher);
			this.tech_ = options.tech;
			this.seekable = options.seekable;
			this.seekTo = options.seekTo;
			this.consecutiveUpdates = 0;
			this.lastRecordedTime = null;
			this.timer_ = null;
			this.checkCurrentTimeTimeout_ = null;
			this.logger_ = logger('PlaybackWatcher');
			this.logger_('initialize');
			var canPlayHandler = function canPlayHandler() {
				return _this.monitorCurrentTime_();
			};
			var waitingHandler = function waitingHandler() {
				return _this.techWaiting_();
			};
			var cancelTimerHandler = function cancelTimerHandler() {
				return _this.cancelTimer_();
			};
			var fixesBadSeeksHandler = function fixesBadSeeksHandler() {
				return _this.fixesBadSeeks_();
			};
			this.tech_.on('seekablechanged', fixesBadSeeksHandler);
			this.tech_.on('waiting', waitingHandler);
			this.tech_.on(timerCancelEvents, cancelTimerHandler);
			this.tech_.on('canplay', canPlayHandler);
			this.dispose = function () {
				_this.logger_('dispose');
				_this.tech_.off('seekablechanged', fixesBadSeeksHandler);
				_this.tech_.off('waiting', waitingHandler);
				_this.tech_.off(timerCancelEvents, cancelTimerHandler);
				_this.tech_.off('canplay', canPlayHandler);
				if (_this.checkCurrentTimeTimeout_) {
					window_1.clearTimeout(_this.checkCurrentTimeTimeout_);
				}
				_this.cancelTimer_();
			};
		}
		createClass$2(PlaybackWatcher, [{
			key: 'monitorCurrentTime_',
			value: function monitorCurrentTime_() {
				this.checkCurrentTime_();
				if (this.checkCurrentTimeTimeout_) {
					window_1.clearTimeout(this.checkCurrentTimeTimeout_);
				}
				this.checkCurrentTimeTimeout_ = window_1.setTimeout(this.monitorCurrentTime_.bind(this), 250);
			}
		}, {
			key: 'checkCurrentTime_',
			value: function checkCurrentTime_() {
				if (this.tech_.seeking() && this.fixesBadSeeks_()) {
					this.consecutiveUpdates = 0;
					this.lastRecordedTime = this.tech_.currentTime();
					return;
				}
				if (this.tech_.paused() || this.tech_.seeking()) {
					return;
				}
				var currentTime = this.tech_.currentTime();
				var buffered = this.tech_.buffered();
				if (this.lastRecordedTime === currentTime && (!buffered.length || currentTime + SAFE_TIME_DELTA >= buffered.end(buffered.length - 1))) {
					return this.techWaiting_();
				}
				if (this.consecutiveUpdates >= 5 && currentTime === this.lastRecordedTime) {
					this.consecutiveUpdates++;
					this.waiting_();
				} else if (currentTime === this.lastRecordedTime) {
					this.consecutiveUpdates++;
				} else {
					this.consecutiveUpdates = 0;
					this.lastRecordedTime = currentTime;
				}
			}
		}, {
			key: 'cancelTimer_',
			value: function cancelTimer_() {
				this.consecutiveUpdates = 0;
				if (this.timer_) {
					this.logger_('cancelTimer_');
					clearTimeout(this.timer_);
				}
				this.timer_ = null;
			}
		}, {
			key: 'fixesBadSeeks_',
			value: function fixesBadSeeks_() {
				var seeking = this.tech_.seeking();
				var seekable = this.seekable();
				var currentTime = this.tech_.currentTime();
				var seekTo = void 0;
				if (seeking && this.afterSeekableWindow_(seekable, currentTime)) {
					var seekableEnd = seekable.end(seekable.length - 1);
					seekTo = seekableEnd;
				}
				if (seeking && this.beforeSeekableWindow_(seekable, currentTime)) {
					var seekableStart = seekable.start(0);
					seekTo = seekableStart + SAFE_TIME_DELTA;
				}
				if (typeof seekTo !== 'undefined') {
					this.logger_('Trying to seek outside of seekable at time ' + currentTime + ' with ' + ('seekable range ' + printableRange(seekable) + '. Seeking to ') + (seekTo + '.'));
					this.seekTo(seekTo);
					return true;
				}
				return false;
			}
		}, {
			key: 'waiting_',
			value: function waiting_() {
				if (this.techWaiting_()) {
					return;
				}
				var currentTime = this.tech_.currentTime();
				var buffered = this.tech_.buffered();
				var currentRange = findRange(buffered, currentTime);
				if (currentRange.length && currentTime + 3 <= currentRange.end(0)) {
					this.cancelTimer_();
					this.seekTo(currentTime);
					this.logger_('Stopped at ' + currentTime + ' while inside a buffered region ' + ('[' + currentRange.start(0) + ' -> ' + currentRange.end(0) + ']. Attempting to resume ') + 'playback by seeking to the current time.');
					this.tech_.trigger({ type: 'usage', name: 'hls-unknown-waiting' });
					return;
				}
			}
		}, {
			key: 'techWaiting_',
			value: function techWaiting_() {
				var seekable = this.seekable();
				var currentTime = this.tech_.currentTime();
				if (this.tech_.seeking() && this.fixesBadSeeks_()) {
					return true;
				}
				if (this.tech_.seeking() || this.timer_ !== null) {
					return true;
				}
				if (this.beforeSeekableWindow_(seekable, currentTime)) {
					var livePoint = seekable.end(seekable.length - 1);
					this.logger_('Fell out of live window at time ' + currentTime + '. Seeking to ' + ('live point (seekable end) ' + livePoint));
					this.cancelTimer_();
					this.seekTo(livePoint);
					this.tech_.trigger({ type: 'usage', name: 'hls-live-resync' });
					return true;
				}
				var buffered = this.tech_.buffered();
				var nextRange = findNextRange(buffered, currentTime);
				if (this.videoUnderflow_(nextRange, buffered, currentTime)) {
					this.cancelTimer_();
					this.seekTo(currentTime);
					this.tech_.trigger({ type: 'usage', name: 'hls-video-underflow' });
					return true;
				}
				if (nextRange.length > 0) {
					var difference = nextRange.start(0) - currentTime;
					this.logger_('Stopped at ' + currentTime + ', setting timer for ' + difference + ', seeking ' + ('to ' + nextRange.start(0)));
					this.timer_ = setTimeout(this.skipTheGap_.bind(this), difference * 1000, currentTime);
					return true;
				}
				return false;
			}
		}, {
			key: 'afterSeekableWindow_',
			value: function afterSeekableWindow_(seekable, currentTime) {
				if (!seekable.length) {
					return false;
				}
				if (currentTime > seekable.end(seekable.length - 1) + SAFE_TIME_DELTA) {
					return true;
				}
				return false;
			}
		}, {
			key: 'beforeSeekableWindow_',
			value: function beforeSeekableWindow_(seekable, currentTime) {
				if (seekable.length &&
					seekable.start(0) > 0 && currentTime < seekable.start(0) - SAFE_TIME_DELTA) {
					return true;
				}
				return false;
			}
		}, {
			key: 'videoUnderflow_',
			value: function videoUnderflow_(nextRange, buffered, currentTime) {
				if (nextRange.length === 0) {
					var gap = this.gapFromVideoUnderflow_(buffered, currentTime);
					if (gap) {
						this.logger_('Encountered a gap in video from ' + gap.start + ' to ' + gap.end + '. ' + ('Seeking to current time ' + currentTime));
						return true;
					}
				}
				return false;
			}
		}, {
			key: 'skipTheGap_',
			value: function skipTheGap_(scheduledCurrentTime) {
				var buffered = this.tech_.buffered();
				var currentTime = this.tech_.currentTime();
				var nextRange = findNextRange(buffered, currentTime);
				this.cancelTimer_();
				if (nextRange.length === 0 || currentTime !== scheduledCurrentTime) {
					return;
				}
				this.logger_('skipTheGap_:', 'currentTime:', currentTime, 'scheduled currentTime:', scheduledCurrentTime, 'nextRange start:', nextRange.start(0));
				this.seekTo(nextRange.start(0) + TIME_FUDGE_FACTOR);
				this.tech_.trigger({ type: 'usage', name: 'hls-gap-skip' });
			}
		}, {
			key: 'gapFromVideoUnderflow_',
			value: function gapFromVideoUnderflow_(buffered, currentTime) {
				var gaps = findGaps(buffered);
				for (var i = 0; i < gaps.length; i++) {
					var start = gaps.start(i);
					var end = gaps.end(i);
					if (currentTime - start < 4 && currentTime - start > 2) {
						return {
							start: start,
							end: end
						};
					}
				}
				return null;
			}
		}]);
		return PlaybackWatcher;
	}();
	var defaultOptions = {
		errorInterval: 30,
		getSource: function getSource(next) {
			var tech = this.tech({ IWillNotUseThisInPlugins: true });
			var sourceObj = tech.currentSource_;
			return next(sourceObj);
		}
	};
	var initPlugin = function initPlugin(player, options) {
		var lastCalled = 0;
		var seekTo = 0;
		var localOptions = videojs$1.mergeOptions(defaultOptions, options);
		player.ready(function () {
			player.trigger({ type: 'usage', name: 'hls-error-reload-initialized' });
		});
		var loadedMetadataHandler = function loadedMetadataHandler() {
			if (seekTo) {
				player.currentTime(seekTo);
			}
		};
		var setSource = function setSource(sourceObj) {
			if (sourceObj === null || sourceObj === undefined) {
				return;
			}
			seekTo = player.duration() !== Infinity && player.currentTime() || 0;
			player.one('loadedmetadata', loadedMetadataHandler);
			player.src(sourceObj);
			player.trigger({ type: 'usage', name: 'hls-error-reload' });
			player.play();
		};
		var errorHandler = function errorHandler() {
			if (Date.now() - lastCalled < localOptions.errorInterval * 1000) {
				player.trigger({ type: 'usage', name: 'hls-error-reload-canceled' });
				return;
			}
			if (!localOptions.getSource || typeof localOptions.getSource !== 'function') {
				videojs$1.log.error('ERROR: reloadSourceOnError - The option getSource must be a function!');
				return;
			}
			lastCalled = Date.now();
			return localOptions.getSource.call(player, setSource);
		};
		var cleanupEvents = function cleanupEvents() {
			player.off('loadedmetadata', loadedMetadataHandler);
			player.off('error', errorHandler);
			player.off('dispose', cleanupEvents);
		};
		var reinitPlugin = function reinitPlugin(newOptions) {
			cleanupEvents();
			initPlugin(player, newOptions);
		};
		player.on('error', errorHandler);
		player.on('dispose', cleanupEvents);
		player.reloadSourceOnError = reinitPlugin;
	};
	var reloadSourceOnError = function reloadSourceOnError(options) {
		initPlugin(this, options);
	};
	var version$3 = "1.2.4";
	videojs$1.use('*', function (player) {
		return {
			setSource: function setSource(srcObj, next) {
				next(null, srcObj);
			},
			setCurrentTime: function setCurrentTime(time) {
				if (player.vhs && player.currentSource().src === player.vhs.source_.src) {
					player.vhs.setCurrentTime(time);
				}
				return time;
			}
		};
	});
	var Hls$1 = {
		PlaylistLoader: PlaylistLoader,
		Playlist: Playlist,
		Decrypter: Decrypter,
		AsyncStream: AsyncStream,
		decrypt: decrypt,
		utils: utils,
		STANDARD_PLAYLIST_SELECTOR: lastBandwidthSelector,
		INITIAL_PLAYLIST_SELECTOR: lowestBitrateCompatibleVariantSelector,
		comparePlaylistBandwidth: comparePlaylistBandwidth,
		comparePlaylistResolution: comparePlaylistResolution,
		xhr: xhrFactory()
	};
	var INITIAL_BANDWIDTH = 4194304;
	['GOAL_BUFFER_LENGTH', 'MAX_GOAL_BUFFER_LENGTH', 'GOAL_BUFFER_LENGTH_RATE', 'BUFFER_LOW_WATER_LINE', 'MAX_BUFFER_LOW_WATER_LINE', 'BUFFER_LOW_WATER_LINE_RATE', 'BANDWIDTH_VARIANCE'].forEach(function (prop) {
		Object.defineProperty(Hls$1, prop, {
			get: function get$$1() {
				videojs$1.log.warn('using Hls.' + prop + ' is UNSAFE be sure you know what you are doing');
				return Config[prop];
			},
			set: function set$$1(value) {
				videojs$1.log.warn('using Hls.' + prop + ' is UNSAFE be sure you know what you are doing');
				if (typeof value !== 'number' || value < 0) {
					videojs$1.log.warn('value of Hls.' + prop + ' must be greater than or equal to 0');
					return;
				}
				Config[prop] = value;
			}
		});
	});
	var simpleTypeFromSourceType = function simpleTypeFromSourceType(type) {
		var mpegurlRE = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i;
		if (mpegurlRE.test(type)) {
			return 'hls';
		}
		var dashRE = /^application\/dash\+xml/i;
		if (dashRE.test(type)) {
			return 'dash';
		}
		return null;
	};
	var handleHlsMediaChange = function handleHlsMediaChange(qualityLevels, playlistLoader) {
		var newPlaylist = playlistLoader.media();
		var selectedIndex = -1;
		for (var i = 0; i < qualityLevels.length; i++) {
			if (qualityLevels[i].id === newPlaylist.uri) {
				selectedIndex = i;
				break;
			}
		}
		qualityLevels.selectedIndex_ = selectedIndex;
		qualityLevels.trigger({
			selectedIndex: selectedIndex,
			type: 'change'
		});
	};
	var handleHlsLoadedMetadata = function handleHlsLoadedMetadata(qualityLevels, hls) {
		hls.representations().forEach(function (rep) {
			qualityLevels.addQualityLevel(rep);
		});
		handleHlsMediaChange(qualityLevels, hls.playlists);
	};
	Hls$1.canPlaySource = function () {
		return videojs$1.log.warn('HLS is no longer a tech. Please remove it from ' + 'your player\'s techOrder.');
	};
	var emeKeySystems = function emeKeySystems(keySystemOptions, videoPlaylist, audioPlaylist) {
		if (!keySystemOptions) {
			return keySystemOptions;
		}
		var keySystemContentTypes = {};
		for (var keySystem in keySystemOptions) {
			keySystemContentTypes[keySystem] = {
				audioContentType: 'audio/mp4; codecs="' + audioPlaylist.attributes.CODECS + '"',
				videoContentType: 'video/mp4; codecs="' + videoPlaylist.attributes.CODECS + '"'
			};
			if (videoPlaylist.contentProtection && videoPlaylist.contentProtection[keySystem] && videoPlaylist.contentProtection[keySystem].pssh) {
				keySystemContentTypes[keySystem].pssh = videoPlaylist.contentProtection[keySystem].pssh;
			}
			if (typeof keySystemOptions[keySystem] === 'string') {
				keySystemContentTypes[keySystem].url = keySystemOptions[keySystem];
			}
		}
		return videojs$1.mergeOptions(keySystemOptions, keySystemContentTypes);
	};
	var setupEmeOptions = function setupEmeOptions(hlsHandler) {
		if (hlsHandler.options_.sourceType !== 'dash') {
			return;
		}
		var player = videojs$1.players[hlsHandler.tech_.options_.playerId];
		if (player.eme) {
			var sourceOptions = emeKeySystems(hlsHandler.source_.keySystems, hlsHandler.playlists.media(), hlsHandler.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader.media());
			if (sourceOptions) {
				player.currentSource().keySystems = sourceOptions;
			}
		}
	};
	Hls$1.supportsNativeHls = function () {
		var video = document_1.createElement('video');
		if (!videojs$1.getTech('Html5').isSupported()) {
			return false;
		}
		var canPlay = [
			'application/vnd.apple.mpegurl',
			'audio/mpegurl',
			'audio/x-mpegurl',
			'application/x-mpegurl',
			'video/x-mpegurl', 'video/mpegurl', 'application/mpegurl'];
		return canPlay.some(function (canItPlay) {
			return (/maybe|probably/i.test(video.canPlayType(canItPlay))
			);
		});
	}();
	Hls$1.supportsNativeDash = function () {
		if (!videojs$1.getTech('Html5').isSupported()) {
			return false;
		}
		return (/maybe|probably/i.test(document_1.createElement('video').canPlayType('application/dash+xml'))
		);
	}();
	Hls$1.supportsTypeNatively = function (type) {
		if (type === 'hls') {
			return Hls$1.supportsNativeHls;
		}
		if (type === 'dash') {
			return Hls$1.supportsNativeDash;
		}
		return false;
	};
	Hls$1.isSupported = function () {
		return videojs$1.log.warn('HLS is no longer a tech. Please remove it from ' + 'your player\'s techOrder.');
	};
	var Component$1 = videojs$1.getComponent('Component');
	var HlsHandler = function (_Component) {
		inherits$3(HlsHandler, _Component);
		function HlsHandler(source, tech, options) {
			classCallCheck$3(this, HlsHandler);
			var _this = possibleConstructorReturn$3(this, (HlsHandler.__proto__ || Object.getPrototypeOf(HlsHandler)).call(this, tech, options.hls));
			if (tech.options_ && tech.options_.playerId) {
				var _player = videojs$1(tech.options_.playerId);
				if (!_player.hasOwnProperty('hls')) {
					Object.defineProperty(_player, 'hls', {
						get: function get$$1() {
							videojs$1.log.warn('player.hls is deprecated. Use player.tech().hls instead.');
							tech.trigger({ type: 'usage', name: 'hls-player-access' });
							return _this;
						}
					});
				}
				_player.vhs = _this;
				_player.dash = _this;
			}
			_this.tech_ = tech;
			_this.source_ = source;
			_this.stats = {};
			_this.setOptions_();
			if (_this.options_.overrideNative && tech.overrideNativeAudioTracks && tech.overrideNativeVideoTracks) {
				tech.overrideNativeAudioTracks(true);
				tech.overrideNativeVideoTracks(true);
			} else if (_this.options_.overrideNative && (tech.featuresNativeVideoTracks || tech.featuresNativeAudioTracks)) {
				throw new Error('Overriding native HLS requires emulated tracks. ' + 'See https://git.io/vMpjB');
			}
			_this.on(document_1, ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'], function (event) {
				var fullscreenElement = document_1.fullscreenElement || document_1.webkitFullscreenElement || document_1.mozFullScreenElement || document_1.msFullscreenElement;
				if (fullscreenElement && fullscreenElement.contains(_this.tech_.el())) {
					_this.masterPlaylistController_.smoothQualityChange_();
				}
			});
			_this.on(_this.tech_, 'error', function () {
				if (this.masterPlaylistController_) {
					this.masterPlaylistController_.pauseLoading();
				}
			});
			_this.on(_this.tech_, 'play', _this.play);
			return _this;
		}
		createClass$2(HlsHandler, [{
			key: 'setOptions_',
			value: function setOptions_() {
				var _this2 = this;
				this.options_.withCredentials = this.options_.withCredentials || false;
				if (typeof this.options_.blacklistDuration !== 'number') {
					this.options_.blacklistDuration = 5 * 60;
				}
				if (typeof this.options_.bandwidth !== 'number') {
					this.options_.bandwidth = INITIAL_BANDWIDTH;
				}
				this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === INITIAL_BANDWIDTH;
				['withCredentials', 'bandwidth'].forEach(function (option) {
					if (typeof _this2.source_[option] !== 'undefined') {
						_this2.options_[option] = _this2.source_[option];
					}
				});
				this.bandwidth = this.options_.bandwidth;
			}
		}, {
			key: 'src',
			value: function src(_src, type) {
				var _this3 = this;
				if (!_src) {
					return;
				}
				this.setOptions_();
				this.options_.url = this.source_.src;
				this.options_.tech = this.tech_;
				this.options_.externHls = Hls$1;
				this.options_.sourceType = simpleTypeFromSourceType(type);
				this.options_.seekTo = function (time) {
					_this3.tech_.setCurrentTime(time);
					_this3.setCurrentTime(time);
				};
				this.masterPlaylistController_ = new MasterPlaylistController(this.options_);
				this.playbackWatcher_ = new PlaybackWatcher(videojs$1.mergeOptions(this.options_, {
					seekable: function seekable$$1() {
						return _this3.seekable();
					}
				}));
				this.masterPlaylistController_.on('error', function () {
					var player = videojs$1.players[_this3.tech_.options_.playerId];
					player.error(_this3.masterPlaylistController_.error);
				});
				this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : Hls$1.STANDARD_PLAYLIST_SELECTOR.bind(this);
				this.masterPlaylistController_.selectInitialPlaylist = Hls$1.INITIAL_PLAYLIST_SELECTOR.bind(this);
				this.playlists = this.masterPlaylistController_.masterPlaylistLoader_;
				this.mediaSource = this.masterPlaylistController_.mediaSource;
				Object.defineProperties(this, {
					selectPlaylist: {
						get: function get$$1() {
							return this.masterPlaylistController_.selectPlaylist;
						},
						set: function set$$1(selectPlaylist) {
							this.masterPlaylistController_.selectPlaylist = selectPlaylist.bind(this);
						}
					},
					throughput: {
						get: function get$$1() {
							return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate;
						},
						set: function set$$1(throughput) {
							this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = throughput;
							this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1;
						}
					},
					bandwidth: {
						get: function get$$1() {
							return this.masterPlaylistController_.mainSegmentLoader_.bandwidth;
						},
						set: function set$$1(bandwidth) {
							this.masterPlaylistController_.mainSegmentLoader_.bandwidth = bandwidth;
							this.masterPlaylistController_.mainSegmentLoader_.throughput = {
								rate: 0,
								count: 0
							};
						}
					},
					systemBandwidth: {
						get: function get$$1() {
							var invBandwidth = 1 / (this.bandwidth || 1);
							var invThroughput = void 0;
							if (this.throughput > 0) {
								invThroughput = 1 / this.throughput;
							} else {
								invThroughput = 0;
							}
							var systemBitrate = Math.floor(1 / (invBandwidth + invThroughput));
							return systemBitrate;
						},
						set: function set$$1() {
							videojs$1.log.error('The "systemBandwidth" property is read-only');
						}
					}
				});
				Object.defineProperties(this.stats, {
					bandwidth: {
						get: function get$$1() {
							return _this3.bandwidth || 0;
						},
						enumerable: true
					},
					mediaRequests: {
						get: function get$$1() {
							return _this3.masterPlaylistController_.mediaRequests_() || 0;
						},
						enumerable: true
					},
					mediaRequestsAborted: {
						get: function get$$1() {
							return _this3.masterPlaylistController_.mediaRequestsAborted_() || 0;
						},
						enumerable: true
					},
					mediaRequestsTimedout: {
						get: function get$$1() {
							return _this3.masterPlaylistController_.mediaRequestsTimedout_() || 0;
						},
						enumerable: true
					},
					mediaRequestsErrored: {
						get: function get$$1() {
							return _this3.masterPlaylistController_.mediaRequestsErrored_() || 0;
						},
						enumerable: true
					},
					mediaTransferDuration: {
						get: function get$$1() {
							return _this3.masterPlaylistController_.mediaTransferDuration_() || 0;
						},
						enumerable: true
					},
					mediaBytesTransferred: {
						get: function get$$1() {
							return _this3.masterPlaylistController_.mediaBytesTransferred_() || 0;
						},
						enumerable: true
					},
					mediaSecondsLoaded: {
						get: function get$$1() {
							return _this3.masterPlaylistController_.mediaSecondsLoaded_() || 0;
						},
						enumerable: true
					},
					buffered: {
						get: function get$$1() {
							return timeRangesToArray(_this3.tech_.buffered());
						},
						enumerable: true
					},
					currentTime: {
						get: function get$$1() {
							return _this3.tech_.currentTime();
						},
						enumerable: true
					},
					currentSource: {
						get: function get$$1() {
							return _this3.tech_.currentSource_;
						},
						enumerable: true
					},
					currentTech: {
						get: function get$$1() {
							return _this3.tech_.name_;
						},
						enumerable: true
					},
					duration: {
						get: function get$$1() {
							return _this3.tech_.duration();
						},
						enumerable: true
					},
					master: {
						get: function get$$1() {
							return _this3.playlists.master;
						},
						enumerable: true
					},
					playerDimensions: {
						get: function get$$1() {
							return _this3.tech_.currentDimensions();
						},
						enumerable: true
					},
					seekable: {
						get: function get$$1() {
							return timeRangesToArray(_this3.tech_.seekable());
						},
						enumerable: true
					},
					timestamp: {
						get: function get$$1() {
							return Date.now();
						},
						enumerable: true
					},
					videoPlaybackQuality: {
						get: function get$$1() {
							return _this3.tech_.getVideoPlaybackQuality();
						},
						enumerable: true
					}
				});
				this.tech_.one('canplay', this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_));
				this.masterPlaylistController_.on('selectedinitialmedia', function () {
					renditionSelectionMixin(_this3);
					setupEmeOptions(_this3);
				});
				this.on(this.masterPlaylistController_, 'progress', function () {
					this.tech_.trigger('progress');
				});
				this.tech_.ready(function () {
					return _this3.setupQualityLevels_();
				});
				if (!this.tech_.el()) {
					return;
				}
				this.tech_.src(videojs$1.URL.createObjectURL(this.masterPlaylistController_.mediaSource));
			}
		}, {
			key: 'setupQualityLevels_',
			value: function setupQualityLevels_() {
				var _this4 = this;
				var player = videojs$1.players[this.tech_.options_.playerId];
				if (player && player.qualityLevels) {
					this.qualityLevels_ = player.qualityLevels();
					this.masterPlaylistController_.on('selectedinitialmedia', function () {
						handleHlsLoadedMetadata(_this4.qualityLevels_, _this4);
					});
					this.playlists.on('mediachange', function () {
						handleHlsMediaChange(_this4.qualityLevels_, _this4.playlists);
					});
				}
			}
		}, {
			key: 'play',
			value: function play() {
				this.masterPlaylistController_.play();
			}
		}, {
			key: 'setCurrentTime',
			value: function setCurrentTime(currentTime) {
				this.masterPlaylistController_.setCurrentTime(currentTime);
			}
		}, {
			key: 'duration',
			value: function duration$$1() {
				return this.masterPlaylistController_.duration();
			}
		}, {
			key: 'seekable',
			value: function seekable$$1() {
				return this.masterPlaylistController_.seekable();
			}
		}, {
			key: 'dispose',
			value: function dispose() {
				if (this.playbackWatcher_) {
					this.playbackWatcher_.dispose();
				}
				if (this.masterPlaylistController_) {
					this.masterPlaylistController_.dispose();
				}
				if (this.qualityLevels_) {
					this.qualityLevels_.dispose();
				}
				get$2(HlsHandler.prototype.__proto__ || Object.getPrototypeOf(HlsHandler.prototype), 'dispose', this).call(this);
			}
		}]);
		return HlsHandler;
	}(Component$1);
	var HlsSourceHandler = {
		name: 'videojs-http-streaming',
		VERSION: version$3,
		canHandleSource: function canHandleSource(srcObj) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var localOptions = videojs$1.mergeOptions(videojs$1.options, options);
			return HlsSourceHandler.canPlayType(srcObj.type, localOptions);
		},
		handleSource: function handleSource(source, tech) {
			var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			var localOptions = videojs$1.mergeOptions(videojs$1.options, options);
			tech.hls = new HlsHandler(source, tech, localOptions);
			tech.hls.xhr = xhrFactory();
			tech.hls.src(source.src, source.type);
			return tech.hls;
		},
		canPlayType: function canPlayType(type) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var _videojs$mergeOptions = videojs$1.mergeOptions(videojs$1.options, options),
				overrideNative = _videojs$mergeOptions.hls.overrideNative;
			var supportedType = simpleTypeFromSourceType(type);
			var canUseMsePlayback = supportedType && (!Hls$1.supportsTypeNatively(supportedType) || overrideNative);
			return canUseMsePlayback ? 'maybe' : '';
		}
	};
	if (typeof videojs$1.MediaSource === 'undefined' || typeof videojs$1.URL === 'undefined') {
		videojs$1.MediaSource = MediaSource;
		videojs$1.URL = URL$1;
	}
	if (MediaSource.supportsNativeMediaSources()) {
		videojs$1.getTech('Html5').registerSourceHandler(HlsSourceHandler, 0);
	}
	videojs$1.HlsHandler = HlsHandler;
	videojs$1.HlsSourceHandler = HlsSourceHandler;
	videojs$1.Hls = Hls$1;
	if (!videojs$1.use) {
		videojs$1.registerComponent('Hls', Hls$1);
	}
	videojs$1.options.hls = videojs$1.options.hls || {};
	if (videojs$1.registerPlugin) {
		videojs$1.registerPlugin('reloadSourceOnError', reloadSourceOnError);
	} else {
		videojs$1.plugin('reloadSourceOnError', reloadSourceOnError);
	}
	return videojs$1;
})));