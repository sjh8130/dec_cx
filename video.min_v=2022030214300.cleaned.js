(function (_0x236e5b, _0x46e2b8) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = _0x46e2b8() : typeof define === 'function' && define.amd ? define(_0x46e2b8) : (_0x236e5b.videojs = _0x46e2b8(), Object.defineProperty(Object, 'defineProperty', {
		'configurable': false,
		'writable': false
	}), Object.defineProperty(_0x236e5b, 'videojs', {
		'configurable': false,
		'writable': false
	}), Object.freeze(_0x236e5b.videojs));
}(this, function () {
	var _0x4aafcf = '7.2.2', _0x260c1f = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
	function _0x3b14ad(_0x3e13ff, _0x9890f) {
		return _0x9890f = { 'exports': {} }, _0x3e13ff(_0x9890f, _0x9890f.exports), _0x9890f.exports;
	}
	var _0x2673c4;
	if (typeof window !== 'undefined') {
		_0x2673c4 = window;
	} else {
		if (typeof _0x260c1f !== 'undefined') {
			_0x2673c4 = _0x260c1f;
		} else {
			typeof self !== 'undefined' ? _0x2673c4 = self : _0x2673c4 = {};
		}
	}
	var _0x562c10 = _0x2673c4, _0x419be3 = {}, _0x51c06f = Object.freeze({ 'default': _0x419be3 }), _0x5c9f8f = _0x51c06f && _0x419be3 || _0x51c06f, _0x1e40b6 = typeof _0x260c1f !== 'undefined' ? _0x260c1f : typeof window !== 'undefined' ? window : {}, _0x3e5c2d;
	typeof document !== 'undefined' ? _0x3e5c2d = document : (_0x3e5c2d = _0x1e40b6['__GLOBAL_DOCUMENT_CACHE@4'], !_0x3e5c2d && (_0x3e5c2d = _0x1e40b6['__GLOBAL_DOCUMENT_CACHE@4'] = _0x5c9f8f));
	var _0x5d8ee4 = _0x3e5c2d, _0x1cc548 = void 0, _0x16cb7b = 'info', _0x5d6b4a = [], _0x107ba8 = function _0x29d7e4(_0x53fbe8, _0x52b4e1) {
		var _0x4f0c8b = _0x1cc548.levels[_0x16cb7b], _0x2843b1 = new RegExp('^(' + _0x4f0c8b + ')$');
		_0x53fbe8 !== 'log' && _0x52b4e1.unshift(_0x53fbe8.toUpperCase() + ':');
		_0x5d6b4a && _0x5d6b4a.push([].concat(_0x52b4e1));
		_0x52b4e1.unshift('VIDEOJS:');
		if (!_0x562c10.console) {
			return;
		}
		var _0x1c5578 = _0x562c10.console[_0x53fbe8];
		!_0x1c5578 && _0x53fbe8 === 'debug' && (_0x1c5578 = _0x562c10.console.info || _0x562c10.console.log);
		if (!_0x1c5578 || !_0x4f0c8b || !_0x2843b1.test(_0x53fbe8)) {
			return;
		}
		_0x1c5578[Array.isArray(_0x52b4e1) ? 'apply' : 'call'](_0x562c10.console, _0x52b4e1);
	};
	_0x1cc548 = function _0x1510b5() {
		for (var _0xe52f93 = arguments.length, _0x2f2b18 = Array(_0xe52f93), _0x36848d = 0; _0x36848d < _0xe52f93; _0x36848d++) {
			_0x2f2b18[_0x36848d] = arguments[_0x36848d];
		}
		_0x107ba8('log', _0x2f2b18);
	};
	_0x1cc548.levels = {
		'all': 'debug|log|warn|error',
		'off': '',
		'debug': 'debug|log|warn|error',
		'info': 'log|warn|error',
		'warn': 'warn|error',
		'error': 'error',
		'DEFAULT': _0x16cb7b
	};
	_0x1cc548.level = function (_0x33391e) {
		if (typeof _0x33391e === 'string') {
			if (!_0x1cc548.levels.hasOwnProperty(_0x33391e)) {
				throw new Error('"' + _0x33391e + '" in not a valid log level');
			}
			_0x16cb7b = _0x33391e;
		}
		return _0x16cb7b;
	};
	_0x1cc548.history = function () {
		return _0x5d6b4a ? [].concat(_0x5d6b4a) : [];
	};
	_0x1cc548.history.clear = function () {
		_0x5d6b4a && (_0x5d6b4a.length = 0);
	};
	_0x1cc548.history.disable = function () {
		if (_0x5d6b4a !== null) {
			_0x5d6b4a.length = 0;
			_0x5d6b4a = null;
		}
	};
	_0x1cc548.history.enable = function () {
		_0x5d6b4a === null && (_0x5d6b4a = []);
	};
	_0x1cc548.error = function () {
		for (var _0x2afcef = arguments.length, _0x41131a = Array(_0x2afcef), _0x5d59d3 = 0; _0x5d59d3 < _0x2afcef; _0x5d59d3++) {
			_0x41131a[_0x5d59d3] = arguments[_0x5d59d3];
		}
		return _0x107ba8('error', _0x41131a);
	};
	_0x1cc548.warn = function () {
		for (var _0x7b2b5c = arguments.length, _0x3108ad = Array(_0x7b2b5c), _0x2fb06d = 0; _0x2fb06d < _0x7b2b5c; _0x2fb06d++) {
			_0x3108ad[_0x2fb06d] = arguments[_0x2fb06d];
		}
		return _0x107ba8('warn', _0x3108ad);
	};
	_0x1cc548.debug = function () {
		for (var _0x44fe4f = arguments.length, _0x137ec3 = Array(_0x44fe4f), _0x52e145 = 0; _0x52e145 < _0x44fe4f; _0x52e145++) {
			_0x137ec3[_0x52e145] = arguments[_0x52e145];
		}
		return _0x107ba8('debug', _0x137ec3);
	};
	var _0x50330f = _0x1cc548;
	function _0x11e3fa(_0x1d2f9e) {
		return _0x1d2f9e.replace(/\n\r?\s*/g, '');
	}
	var _0x9a968 = function _0x1b6ae8(_0x46c258) {
		var _0x514a21 = '', _0x245a49 = 0;
		for (; _0x245a49 < arguments.length; _0x245a49++) {
			_0x514a21 += _0x11e3fa(_0x46c258[_0x245a49]) + (arguments[_0x245a49 + 1] || '');
		}
		return _0x514a21;
	}, _0x65b994 = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (_0x56be6d) {
		return typeof _0x56be6d;
	} : function (_0x51ed5c) {
		return _0x51ed5c && typeof Symbol === 'function' && _0x51ed5c.constructor === Symbol && _0x51ed5c !== Symbol.prototype ? 'symbol' : typeof _0x51ed5c;
	}, _0x2ab3d2 = function (_0x2a4ded, _0x382cd5) {
		if (!(_0x2a4ded instanceof _0x382cd5)) {
			throw new TypeError('Cannot call a class as a function');
		}
	}, _0x24aed7 = function (_0x244b21, _0x181e62) {
		if (typeof _0x181e62 !== 'function' && _0x181e62 !== null) {
			throw new TypeError('Super expression must either be null or a function, not ' + typeof _0x181e62);
		}
		_0x244b21.prototype = Object.create(_0x181e62 && _0x181e62.prototype, {
			'constructor': {
				'value': _0x244b21,
				'enumerable': false,
				'writable': true,
				'configurable': true
			}
		});
		if (_0x181e62) {
			Object.setPrototypeOf ? Object.setPrototypeOf(_0x244b21, _0x181e62) : _0x244b21['__proto__'] = _0x181e62;
		}
	}, _0x245593 = function (_0x587354, _0x24bbf5) {
		if (!_0x587354) {
			throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
		}
		return _0x24bbf5 && (typeof _0x24bbf5 === 'object' || typeof _0x24bbf5 === 'function') ? _0x24bbf5 : _0x587354;
	}, _0x4d2b57 = function (_0x4366c3, _0x24216e) {
		return _0x4366c3.raw = _0x24216e, _0x4366c3;
	}, _0x16f881 = Object.prototype.toString, _0x378e5f = function _0x23aa02(_0x386e37) {
		return _0x2d2c83(_0x386e37) ? Object.keys(_0x386e37) : [];
	};
	function _0x5e2c44(_0x10580e, _0x39c2e5) {
		_0x378e5f(_0x10580e).forEach(function (_0x47bebc) {
			return _0x39c2e5(_0x10580e[_0x47bebc], _0x47bebc);
		});
	}
	function _0x27643f(_0x553105, _0x4813f0) {
		var _0x50db52 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
		return _0x378e5f(_0x553105).reduce(function (_0x186a43, _0x446556) {
			return _0x4813f0(_0x186a43, _0x553105[_0x446556], _0x446556);
		}, _0x50db52);
	}
	function _0x2476f0(_0x1df800) {
		for (var _0x574b92 = arguments.length, _0x396693 = Array(_0x574b92 > 1 ? _0x574b92 - 1 : 0), _0x44d35c = 1; _0x44d35c < _0x574b92; _0x44d35c++) {
			_0x396693[_0x44d35c - 1] = arguments[_0x44d35c];
		}
		if (Object.assign) {
			return Object.assign.apply(Object, [_0x1df800].concat(_0x396693));
		}
		return _0x396693.forEach(function (_0x50ca00) {
			if (!_0x50ca00) {
				return;
			}
			_0x5e2c44(_0x50ca00, function (_0x3220a3, _0x4656e1) {
				_0x1df800[_0x4656e1] = _0x3220a3;
			});
		}), _0x1df800;
	}
	function _0x2d2c83(_0x15e2e7) {
		return !!_0x15e2e7 && (typeof _0x15e2e7 === 'undefined' ? 'undefined' : _0x65b994(_0x15e2e7)) === 'object';
	}
	function _0x15e475(_0x219a57) {
		return _0x2d2c83(_0x219a57) && _0x16f881.call(_0x219a57) === '[object Object]' && _0x219a57.constructor === Object;
	}
	function _0x39019d(_0x5121ae, _0x1d19e3) {
		if (!_0x5121ae || !_0x1d19e3) {
			return '';
		}
		if (typeof _0x562c10.getComputedStyle === 'function') {
			var _0x5c6333 = _0x562c10.getComputedStyle(_0x5121ae);
			return _0x5c6333 ? _0x5c6333[_0x1d19e3] : '';
		}
		return '';
	}
	var _0x277c12 = _0x4d2b57([
		'Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ',
		' to ',
		'.'
	], [
		'Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ',
		' to ',
		'.'
	]);
	function _0x3e162f(_0x386519) {
		return typeof _0x386519 === 'string' && /\S/.test(_0x386519);
	}
	function _0xafeee8(_0x4051c8) {
		if (/\s/.test(_0x4051c8)) {
			throw new Error('class has illegal whitespace characters');
		}
	}
	function _0x31ecba(_0x10e772) {
		return new RegExp('(^|\\s)' + _0x10e772 + '($|\\s)');
	}
	function _0x2e6e42() {
		return _0x5d8ee4 === _0x562c10.document;
	}
	function _0x21e288(_0x60033e) {
		return _0x2d2c83(_0x60033e) && _0x60033e.nodeType === 1;
	}
	function _0x52312e() {
		try {
			return _0x562c10.parent !== _0x562c10.self;
		} catch (_0x5545fb) {
			return true;
		}
	}
	function _0x35a8d3(_0x252c34) {
		return function (_0x510505, _0x288365) {
			if (!_0x3e162f(_0x510505)) {
				return _0x5d8ee4[_0x252c34](null);
			}
			_0x3e162f(_0x288365) && (_0x288365 = _0x5d8ee4.querySelector(_0x288365));
			var _0x189630 = _0x21e288(_0x288365) ? _0x288365 : _0x5d8ee4;
			return _0x189630[_0x252c34] && _0x189630[_0x252c34](_0x510505);
		};
	}
	function _0x30c03e() {
		var _0x12ff12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div', _0x44f62c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _0x51c8ae = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, _0x38dc01 = arguments[3], _0x3dde62 = _0x5d8ee4.createElement(_0x12ff12);
		return Object.getOwnPropertyNames(_0x44f62c).forEach(function (_0x2c94a6) {
			var _0x4bfb0d = _0x44f62c[_0x2c94a6];
			if (_0x2c94a6.indexOf('aria-') !== -1 || _0x2c94a6 === 'role' || _0x2c94a6 === 'type') {
				_0x50330f.warn(_0x9a968(_0x277c12, _0x2c94a6, _0x4bfb0d));
				_0x3dde62.setAttribute(_0x2c94a6, _0x4bfb0d);
			} else {
				_0x2c94a6 === 'textContent' ? _0x18dd6e(_0x3dde62, _0x4bfb0d) : _0x3dde62[_0x2c94a6] = _0x4bfb0d;
			}
		}), Object.getOwnPropertyNames(_0x51c8ae).forEach(function (_0x4f3530) {
			_0x3dde62.setAttribute(_0x4f3530, _0x51c8ae[_0x4f3530]);
		}), _0x38dc01 && _0x2b2d7a(_0x3dde62, _0x38dc01), _0x3dde62;
	}
	function _0x18dd6e(_0xc62c59, _0x10a4fe) {
		return typeof _0xc62c59.textContent === 'undefined' ? _0xc62c59.innerText = _0x10a4fe : _0xc62c59.textContent = _0x10a4fe, _0xc62c59;
	}
	function _0x19c260(_0x4dbdca, _0x41b8f9) {
		_0x41b8f9.firstChild ? _0x41b8f9.insertBefore(_0x4dbdca, _0x41b8f9.firstChild) : _0x41b8f9.appendChild(_0x4dbdca);
	}
	function _0x46db82(_0x1a727e, _0x46bf84) {
		_0xafeee8(_0x46bf84);
		if (_0x1a727e.classList) {
			return _0x1a727e.classList.contains(_0x46bf84);
		}
		return _0x31ecba(_0x46bf84).test(_0x1a727e.className);
	}
	function _0x235eb5(_0x2ade28, _0x452295) {
		if (_0x2ade28.classList) {
			_0x2ade28.classList.add(_0x452295);
		} else {
			!_0x46db82(_0x2ade28, _0x452295) && (_0x2ade28.className = (_0x2ade28.className + ' ' + _0x452295).trim());
		}
		return _0x2ade28;
	}
	function _0x564c01(_0x38d9f0, _0x23a280) {
		return _0x38d9f0.classList ? _0x38d9f0.classList.remove(_0x23a280) : (_0xafeee8(_0x23a280), _0x38d9f0.className = _0x38d9f0.className.split(/\s+/).filter(function (_0x4770d6) {
			return _0x4770d6 !== _0x23a280;
		}).join(' ')), _0x38d9f0;
	}
	function _0xe35bb2(_0x123b9c, _0x186d6, _0x443fcf) {
		var _0x380aab = _0x46db82(_0x123b9c, _0x186d6);
		typeof _0x443fcf === 'function' && (_0x443fcf = _0x443fcf(_0x123b9c, _0x186d6));
		typeof _0x443fcf !== 'boolean' && (_0x443fcf = !_0x380aab);
		if (_0x443fcf === _0x380aab) {
			return;
		}
		return _0x443fcf ? _0x235eb5(_0x123b9c, _0x186d6) : _0x564c01(_0x123b9c, _0x186d6), _0x123b9c;
	}
	function _0x512187(_0x29a389, _0x3e98ec) {
		Object.getOwnPropertyNames(_0x3e98ec).forEach(function (_0x543630) {
			var _0x3376db = _0x3e98ec[_0x543630];
			_0x3376db === null || typeof _0x3376db === 'undefined' || _0x3376db === false ? _0x29a389.removeAttribute(_0x543630) : _0x29a389.setAttribute(_0x543630, _0x3376db === true ? '' : _0x3376db);
		});
	}
	function _0x1ac51a(_0x2bcb2b) {
		var _0x1a7043 = { _0x167edb: _0x5df4d1 };
		if (_0x2bcb2b && _0x2bcb2b.attributes && _0x2bcb2b.attributes.length > 0) {
			var _0x504628 = _0x2bcb2b.attributes;
			for (var _0xc51cfb = _0x504628.length - 1; _0xc51cfb >= 0; _0xc51cfb--) {
				var _0x167edb = _0x504628[_0xc51cfb].name, _0x5df4d1 = _0x504628[_0xc51cfb].value;
				(typeof _0x2bcb2b[_0x167edb] === 'boolean' || ',autoplay,controls,playsinline,loop,muted,default,defaultMuted,'.indexOf(',' + _0x167edb + ',') !== -1) && (_0x5df4d1 = _0x5df4d1 !== null ? true : false);
			}
		}
		return _0x1a7043;
	}
	function _0x880f71(_0x5e33f1, _0x1bec85) {
		return _0x5e33f1.getAttribute(_0x1bec85);
	}
	function _0x125f72(_0x47f46a, _0x51bb08, _0x165733) {
		_0x47f46a.setAttribute(_0x51bb08, _0x165733);
	}
	function _0x151189(_0x2a3574, _0x3f600c) {
		_0x2a3574.removeAttribute(_0x3f600c);
	}
	function _0x421c11() {
		_0x5d8ee4.body.focus();
		_0x5d8ee4.onselectstart = function () {
			return false;
		};
	}
	function _0x5c9d59() {
		_0x5d8ee4.onselectstart = function () {
			return true;
		};
	}
	function _0x14bbdb(_0x514cd0) {
		if (_0x514cd0 && _0x514cd0.getBoundingClientRect && _0x514cd0.parentNode) {
			var _0x2e4bf3 = _0x514cd0.getBoundingClientRect(), _0x383516 = {};
			return [
				'bottom',
				'height',
				'left',
				'right',
				'top',
				'width'
			].forEach(function (_0x58fd05) {
				_0x2e4bf3[_0x58fd05] !== undefined && (_0x383516[_0x58fd05] = _0x2e4bf3[_0x58fd05]);
			}), !_0x383516.height && (_0x383516.height = parseFloat(_0x39019d(_0x514cd0, 'height'))), !_0x383516.width && (_0x383516.width = parseFloat(_0x39019d(_0x514cd0, 'width'))), _0x383516;
		}
	}
	function _0xc8ebd0(_0x2b9b58) {
		var _0x1107da = void 0;
		_0x2b9b58.getBoundingClientRect && _0x2b9b58.parentNode && (_0x1107da = _0x2b9b58.getBoundingClientRect());
		if (!_0x1107da) {
			return {
				'left': 0,
				'top': 0
			};
		}
		var _0x58815c = _0x5d8ee4.documentElement, _0x5847fb = _0x5d8ee4.body, _0x20fc4a = _0x58815c.clientLeft || _0x5847fb.clientLeft || 0, _0x583cdb = _0x562c10.pageXOffset || _0x5847fb.scrollLeft, _0x32201c = _0x1107da.left + _0x583cdb - _0x20fc4a, _0x266a86 = _0x58815c.clientTop || _0x5847fb.clientTop || 0, _0x40fec5 = _0x562c10.pageYOffset || _0x5847fb.scrollTop, _0x1ecef1 = _0x1107da.top + _0x40fec5 - _0x266a86;
		return {
			'left': Math.round(_0x32201c),
			'top': Math.round(_0x1ecef1)
		};
	}
	function _0x4d9317(_0x1e3af8, _0x117112) {
		var _0x1070e7 = {}, _0x4eb669 = _0xc8ebd0(_0x1e3af8), _0x11496e = _0x1e3af8.offsetWidth, _0x71ff93 = _0x1e3af8.offsetHeight, _0x179a1f = _0x4eb669.top, _0x1862fe = _0x4eb669.left, _0x30fea7 = _0x117112.pageY, _0x1ecda1 = _0x117112.pageX;
		return _0x117112.changedTouches && (_0x1ecda1 = _0x117112.changedTouches[0].pageX, _0x30fea7 = _0x117112.changedTouches[0].pageY), _0x1070e7.y = Math.max(0, Math.min(1, (_0x179a1f - _0x30fea7 + _0x71ff93) / _0x71ff93)), _0x1070e7.x = Math.max(0, Math.min(1, (_0x1ecda1 - _0x1862fe) / _0x11496e)), _0x1070e7;
	}
	function _0x5e9c2d(_0x3322bf) {
		return _0x2d2c83(_0x3322bf) && _0x3322bf.nodeType === 3;
	}
	function _0x3d9086(_0x337ca6) {
		while (_0x337ca6.firstChild) {
			_0x337ca6.removeChild(_0x337ca6.firstChild);
		}
		return _0x337ca6;
	}
	function _0x95a104(_0x3e4bc0) {
		return typeof _0x3e4bc0 === 'function' && (_0x3e4bc0 = _0x3e4bc0()), (Array.isArray(_0x3e4bc0) ? _0x3e4bc0 : [_0x3e4bc0]).map(function (_0x1d4e9f) {
			typeof _0x1d4e9f === 'function' && (_0x1d4e9f = _0x1d4e9f());
			if (_0x21e288(_0x1d4e9f) || _0x5e9c2d(_0x1d4e9f)) {
				return _0x1d4e9f;
			}
			if (typeof _0x1d4e9f === 'string' && /\S/.test(_0x1d4e9f)) {
				return _0x5d8ee4.createTextNode(_0x1d4e9f);
			}
		}).filter(function (_0x475b59) {
			return _0x475b59;
		});
	}
	function _0x2b2d7a(_0x4d99c7, _0x2e191f) {
		return _0x95a104(_0x2e191f).forEach(function (_0x353494) {
			return _0x4d99c7.appendChild(_0x353494);
		}), _0x4d99c7;
	}
	function _0xdbf59e(_0x114359, _0x1cd74b) {
		return _0x2b2d7a(_0x3d9086(_0x114359), _0x1cd74b);
	}
	function _0x23351a(_0x250671) {
		if (_0x250671.button === undefined && _0x250671.buttons === undefined) {
			return true;
		}
		if (_0x250671.button === 0 && _0x250671.buttons === undefined) {
			return true;
		}
		if (_0x250671.button !== 0 || _0x250671.buttons !== 1) {
			return false;
		}
		return true;
	}
	var _0x12e31e = _0x35a8d3('querySelector'), _0x1f63ed = _0x35a8d3('querySelectorAll'), _0x561a5e = Object.freeze({
		'isReal': _0x2e6e42,
		'isEl': _0x21e288,
		'isInFrame': _0x52312e,
		'createEl': _0x30c03e,
		'textContent': _0x18dd6e,
		'prependTo': _0x19c260,
		'hasClass': _0x46db82,
		'addClass': _0x235eb5,
		'removeClass': _0x564c01,
		'toggleClass': _0xe35bb2,
		'setAttributes': _0x512187,
		'getAttributes': _0x1ac51a,
		'getAttribute': _0x880f71,
		'setAttribute': _0x125f72,
		'removeAttribute': _0x151189,
		'blockTextSelection': _0x421c11,
		'unblockTextSelection': _0x5c9d59,
		'getBoundingClientRect': _0x14bbdb,
		'findPosition': _0xc8ebd0,
		'getPointerPosition': _0x4d9317,
		'isTextNode': _0x5e9c2d,
		'emptyEl': _0x3d9086,
		'normalizeContent': _0x95a104,
		'appendContent': _0x2b2d7a,
		'insertContent': _0xdbf59e,
		'isSingleLeftClick': _0x23351a,
		'$': _0x12e31e,
		'$$': _0x1f63ed
	}), _0x448661 = 1;
	function _0x32cfd7() {
		return _0x448661++;
	}
	var _0x3eb66b = {}, _0x22ac13 = 'vdata' + new Date().getTime();
	function _0x3cc9da(_0x324ecb) {
		var _0x307e8a = _0x324ecb[_0x22ac13];
		return !_0x307e8a && (_0x307e8a = _0x324ecb[_0x22ac13] = _0x32cfd7()), !_0x3eb66b[_0x307e8a] && (_0x3eb66b[_0x307e8a] = {}), _0x3eb66b[_0x307e8a];
	}
	function _0x3ba579(_0x12c603) {
		var _0x39ee63 = _0x12c603[_0x22ac13];
		if (!_0x39ee63) {
			return false;
		}
		return !!Object.getOwnPropertyNames(_0x3eb66b[_0x39ee63]).length;
	}
	function _0x2ccba8(_0xe7c8ec) {
		var _0x527a78 = _0xe7c8ec[_0x22ac13];
		if (!_0x527a78) {
			return;
		}
		delete _0x3eb66b[_0x527a78];
		try {
			delete _0xe7c8ec[_0x22ac13];
		} catch (_0x84668f) {
			_0xe7c8ec.removeAttribute ? _0xe7c8ec.removeAttribute(_0x22ac13) : _0xe7c8ec[_0x22ac13] = null;
		}
	}
	function _0x3176ee(_0x33e76a, _0x438a61) {
		var _0x2b720f = _0x3cc9da(_0x33e76a);
		if (_0x2b720f.handlers[_0x438a61].length === 0) {
			delete _0x2b720f.handlers[_0x438a61];
			if (_0x33e76a.removeEventListener) {
				_0x33e76a.removeEventListener(_0x438a61, _0x2b720f.dispatcher, false);
			} else {
				_0x33e76a.detachEvent && _0x33e76a.detachEvent('on' + _0x438a61, _0x2b720f.dispatcher);
			}
		}
		if (Object.getOwnPropertyNames(_0x2b720f.handlers).length <= 0) {
			delete _0x2b720f.handlers;
			delete _0x2b720f.dispatcher;
			delete _0x2b720f.disabled;
		}
		Object.getOwnPropertyNames(_0x2b720f).length === 0 && _0x2ccba8(_0x33e76a);
	}
	function _0x8f0579(_0x2efaff, _0x45fb4c, _0x58d04a, _0x1adc76) {
		_0x58d04a.forEach(function (_0x598e26) {
			_0x2efaff(_0x45fb4c, _0x598e26, _0x1adc76);
		});
	}
	function _0x1b8ed7(_0x4bc3a4) {
		function _0x299433() {
			return true;
		}
		function _0x5b793b() {
			return false;
		}
		if (!_0x4bc3a4 || !_0x4bc3a4.isPropagationStopped) {
			var _0x26e40d = _0x4bc3a4 || _0x562c10.event;
			_0x4bc3a4 = {};
			for (var _0xfbafdd in _0x26e40d) {
				_0xfbafdd !== 'layerX' && _0xfbafdd !== 'layerY' && _0xfbafdd !== 'keyLocation' && _0xfbafdd !== 'webkitMovementX' && _0xfbafdd !== 'webkitMovementY' && (!(_0xfbafdd === 'returnValue' && _0x26e40d.preventDefault) && (_0x4bc3a4[_0xfbafdd] = _0x26e40d[_0xfbafdd]));
			}
			!_0x4bc3a4.target && (_0x4bc3a4.target = _0x4bc3a4.srcElement || _0x5d8ee4);
			!_0x4bc3a4.relatedTarget && (_0x4bc3a4.relatedTarget = _0x4bc3a4.fromElement === _0x4bc3a4.target ? _0x4bc3a4.toElement : _0x4bc3a4.fromElement);
			_0x4bc3a4.preventDefault = function () {
				_0x26e40d.preventDefault && _0x26e40d.preventDefault();
				_0x4bc3a4.returnValue = false;
				_0x26e40d.returnValue = false;
				_0x4bc3a4.defaultPrevented = true;
			};
			_0x4bc3a4.defaultPrevented = false;
			_0x4bc3a4.stopPropagation = function () {
				_0x26e40d.stopPropagation && _0x26e40d.stopPropagation();
				_0x4bc3a4.cancelBubble = true;
				_0x26e40d.cancelBubble = true;
				_0x4bc3a4.isPropagationStopped = _0x299433;
			};
			_0x4bc3a4.isPropagationStopped = _0x5b793b;
			_0x4bc3a4.stopImmediatePropagation = function () {
				_0x26e40d.stopImmediatePropagation && _0x26e40d.stopImmediatePropagation();
				_0x4bc3a4.isImmediatePropagationStopped = _0x299433;
				_0x4bc3a4.stopPropagation();
			};
			_0x4bc3a4.isImmediatePropagationStopped = _0x5b793b;
			if (_0x4bc3a4.clientX !== null && _0x4bc3a4.clientX !== undefined) {
				var _0x45abe5 = _0x5d8ee4.documentElement, _0x1bcb8d = _0x5d8ee4.body;
				_0x4bc3a4.pageX = _0x4bc3a4.clientX + (_0x45abe5 && _0x45abe5.scrollLeft || _0x1bcb8d && _0x1bcb8d.scrollLeft || 0) - (_0x45abe5 && _0x45abe5.clientLeft || _0x1bcb8d && _0x1bcb8d.clientLeft || 0);
				_0x4bc3a4.pageY = _0x4bc3a4.clientY + (_0x45abe5 && _0x45abe5.scrollTop || _0x1bcb8d && _0x1bcb8d.scrollTop || 0) - (_0x45abe5 && _0x45abe5.clientTop || _0x1bcb8d && _0x1bcb8d.clientTop || 0);
			}
			_0x4bc3a4.which = _0x4bc3a4.charCode || _0x4bc3a4.keyCode;
			_0x4bc3a4.button !== null && _0x4bc3a4.button !== undefined && (_0x4bc3a4.button = _0x4bc3a4.button & 1 ? 0 : _0x4bc3a4.button & 4 ? 1 : _0x4bc3a4.button & 2 ? 2 : 0);
		}
		return _0x4bc3a4;
	}
	var _0x3dd14e = false;
	(function () {
		try {
			var _0x465fea = Object.defineProperty({}, 'passive', {
				'get': function _0x57732c() {
					_0x3dd14e = true;
				}
			});
			_0x562c10.addEventListener('test', null, _0x465fea);
			_0x562c10.removeEventListener('test', null, _0x465fea);
		} catch (_0x5d1d72) {
		}
	}());
	var _0x2fe868 = [
		'touchstart',
		'touchmove'
	];
	function _0x7b0228(_0x490dcb, _0x5acfbd, _0x811352) {
		if (Array.isArray(_0x5acfbd)) {
			return _0x8f0579(_0x7b0228, _0x490dcb, _0x5acfbd, _0x811352);
		}
		var _0x295188 = _0x3cc9da(_0x490dcb);
		!_0x295188.handlers && (_0x295188.handlers = {});
		!_0x295188.handlers[_0x5acfbd] && (_0x295188.handlers[_0x5acfbd] = []);
		!_0x811352.guid && (_0x811352.guid = _0x32cfd7());
		_0x295188.handlers[_0x5acfbd].push(_0x811352);
		!_0x295188.dispatcher && (_0x295188.disabled = false, _0x295188.dispatcher = function (_0x436529, _0x199743) {
			if (_0x295188.disabled) {
				return;
			}
			_0x436529 = _0x1b8ed7(_0x436529);
			var _0x25e5b5 = _0x295188.handlers[_0x436529.type];
			if (_0x25e5b5) {
				var _0x541303 = _0x25e5b5.slice(0);
				for (var _0x4a3bf2 = 0, _0xb41cff = _0x541303.length; _0x4a3bf2 < _0xb41cff; _0x4a3bf2++) {
					if (_0x436529.isImmediatePropagationStopped()) {
						break;
					} else {
						try {
							_0x541303[_0x4a3bf2].call(_0x490dcb, _0x436529, _0x199743);
						} catch (_0x42c9fd) {
							_0x50330f.error(_0x42c9fd);
						}
					}
				}
			}
		});
		if (_0x295188.handlers[_0x5acfbd].length === 1) {
			if (_0x490dcb.addEventListener) {
				var _0x20ecfb = false;
				_0x3dd14e && _0x2fe868.indexOf(_0x5acfbd) > -1 && (_0x20ecfb = { 'passive': true });
				_0x490dcb.addEventListener(_0x5acfbd, _0x295188.dispatcher, _0x20ecfb);
			} else {
				_0x490dcb.attachEvent && _0x490dcb.attachEvent('on' + _0x5acfbd, _0x295188.dispatcher);
			}
		}
	}
	function _0x706013(_0x1c178a, _0x5da57d, _0xc1565d) {
		if (!_0x3ba579(_0x1c178a)) {
			return;
		}
		var _0x333073 = _0x3cc9da(_0x1c178a);
		if (!_0x333073.handlers) {
			return;
		}
		if (Array.isArray(_0x5da57d)) {
			return _0x8f0579(_0x706013, _0x1c178a, _0x5da57d, _0xc1565d);
		}
		var _0x23ac42 = function _0x435832(_0x57c94b, _0x452d5a) {
			_0x333073.handlers[_0x452d5a] = [];
			_0x3176ee(_0x57c94b, _0x452d5a);
		};
		if (_0x5da57d === undefined) {
			for (var _0x200cb7 in _0x333073.handlers) {
				Object.prototype.hasOwnProperty.call(_0x333073.handlers || {}, _0x200cb7) && _0x23ac42(_0x1c178a, _0x200cb7);
			}
			return;
		}
		var _0x3f7f17 = _0x333073.handlers[_0x5da57d];
		if (!_0x3f7f17) {
			return;
		}
		if (!_0xc1565d) {
			_0x23ac42(_0x1c178a, _0x5da57d);
			return;
		}
		if (_0xc1565d.guid) {
			for (var _0x34a73e = 0; _0x34a73e < _0x3f7f17.length; _0x34a73e++) {
				_0x3f7f17[_0x34a73e].guid === _0xc1565d.guid && _0x3f7f17.splice(_0x34a73e--, 1);
			}
		}
		_0x3176ee(_0x1c178a, _0x5da57d);
	}
	function _0x3c77e0(_0xf6d37a, _0x57fb84, _0x5e248f) {
		var _0x3d2ccb = _0x3ba579(_0xf6d37a) ? _0x3cc9da(_0xf6d37a) : {}, _0x223a19 = _0xf6d37a.parentNode || _0xf6d37a.ownerDocument;
		if (typeof _0x57fb84 === 'string') {
			_0x57fb84 = {
				'type': _0x57fb84,
				'target': _0xf6d37a
			};
		} else {
			!_0x57fb84.target && (_0x57fb84.target = _0xf6d37a);
		}
		_0x57fb84 = _0x1b8ed7(_0x57fb84);
		_0x3d2ccb.dispatcher && _0x3d2ccb.dispatcher.call(_0xf6d37a, _0x57fb84, _0x5e248f);
		if (_0x223a19 && !_0x57fb84.isPropagationStopped() && _0x57fb84.bubbles === true) {
			_0x3c77e0.call(null, _0x223a19, _0x57fb84, _0x5e248f);
		} else {
			if (!_0x223a19 && !_0x57fb84.defaultPrevented) {
				var _0x21147b = _0x3cc9da(_0x57fb84.target);
				_0x57fb84.target[_0x57fb84.type] && (_0x21147b.disabled = true, typeof _0x57fb84.target[_0x57fb84.type] === 'function' && _0x57fb84.target[_0x57fb84.type](), _0x21147b.disabled = false);
			}
		}
		return !_0x57fb84.defaultPrevented;
	}
	function _0x53446c(_0x5ebced, _0x5c41ea, _0x36eb1b) {
		if (Array.isArray(_0x5c41ea)) {
			return _0x8f0579(_0x53446c, _0x5ebced, _0x5c41ea, _0x36eb1b);
		}
		var _0x180805 = function _0x4285bf() {
			_0x706013(_0x5ebced, _0x5c41ea, _0x4285bf);
			_0x36eb1b.apply(this, arguments);
		};
		_0x180805.guid = _0x36eb1b.guid = _0x36eb1b.guid || _0x32cfd7();
		_0x7b0228(_0x5ebced, _0x5c41ea, _0x180805);
	}
	var _0x1475fc = Object.freeze({
		'fixEvent': _0x1b8ed7,
		'on': _0x7b0228,
		'off': _0x706013,
		'trigger': _0x3c77e0,
		'one': _0x53446c
	}), _0xb4839a = false, _0x4d4cc0 = void 0, _0x1ed0e3 = function _0x466f57() {
		if (!_0x2e6e42() || _0x4d4cc0.options.autoSetup === false) {
			return;
		}
		var _0x43f6ec = Array.prototype.slice.call(_0x5d8ee4.getElementsByTagName('video')), _0x1981ef = Array.prototype.slice.call(_0x5d8ee4.getElementsByTagName('audio')), _0x653497 = Array.prototype.slice.call(_0x5d8ee4.getElementsByTagName('video-js')), _0xe9acc0 = _0x43f6ec.concat(_0x1981ef, _0x653497);
		if (_0xe9acc0 && _0xe9acc0.length > 0) {
			for (var _0x2b0d84 = 0, _0x5ee2d0 = _0xe9acc0.length; _0x2b0d84 < _0x5ee2d0; _0x2b0d84++) {
				var _0x19251c = _0xe9acc0[_0x2b0d84];
				if (_0x19251c && _0x19251c.getAttribute) {
					if (_0x19251c.player === undefined) {
						var _0x3b66f7 = _0x19251c.getAttribute('data-setup');
						_0x3b66f7 !== null && _0x4d4cc0(_0x19251c);
					}
				} else {
					_0x4157c6(1);
					break;
				}
			}
		} else {
			!_0xb4839a && _0x4157c6(1);
		}
	};
	function _0x4157c6(_0x5b0f4b, _0x578929) {
		_0x578929 && (_0x4d4cc0 = _0x578929);
		_0x562c10.setTimeout(_0x1ed0e3, _0x5b0f4b);
	}
	_0x2e6e42() && _0x5d8ee4.readyState === 'complete' ? _0xb4839a = true : _0x53446c(_0x562c10, 'load', function () {
		_0xb4839a = true;
	});
	var _0xf5e320 = function _0x32bfbf(_0x326cca) {
		var _0x9fcd2e = _0x5d8ee4.createElement('style');
		return _0x9fcd2e.className = _0x326cca, _0x9fcd2e;
	}, _0x12a3e6 = function _0x4cffd7(_0xb91040, _0x1efd57) {
		_0xb91040.styleSheet ? _0xb91040.styleSheet.cssText = _0x1efd57 : _0xb91040.textContent = _0x1efd57;
	}, _0x2e578a = function _0x51e835(_0x399d69, _0x338e64, _0x4ce582) {
		!_0x338e64.guid && (_0x338e64.guid = _0x32cfd7());
		var _0x3b4e57 = function _0x585724() {
			return _0x338e64.apply(_0x399d69, arguments);
		};
		return _0x3b4e57.guid = _0x4ce582 ? _0x4ce582 + '_' + _0x338e64.guid : _0x338e64.guid, _0x3b4e57;
	}, _0x3b73a1 = function _0xb44a0f(_0x2149e8, _0x130c94) {
		var _0x39b3f7 = Date.now(), _0x5ba49d = function _0x594f0a() {
			var _0x75ca7f = Date.now();
			if (_0x75ca7f - _0x39b3f7 >= _0x130c94) {
				_0x2149e8.apply(undefined, arguments);
				_0x39b3f7 = _0x75ca7f;
			}
		};
		return _0x5ba49d;
	}, _0x1abf42 = function _0x221176(_0x4f8133, _0x4652af, _0x30965d) {
		var _0x99b759 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _0x562c10, _0xbf62b = void 0, _0x2168fd = function _0x6639fd() {
			_0x99b759.clearTimeout(_0xbf62b);
			_0xbf62b = null;
		}, _0xe24176 = function _0x39176b() {
			var _0x251059 = this, _0x53f7de = arguments, _0x33f82c = function _0x41ae94() {
				_0xbf62b = null;
				_0x33f82c = null;
				!_0x30965d && _0x4f8133.apply(_0x251059, _0x53f7de);
			};
			!_0xbf62b && _0x30965d && _0x4f8133.apply(_0x251059, _0x53f7de);
			_0x99b759.clearTimeout(_0xbf62b);
			_0xbf62b = _0x99b759.setTimeout(_0x33f82c, _0x4652af);
		};
		return _0xe24176.cancel = _0x2168fd, _0xe24176;
	}, _0x37a20c = function _0x1e854a() {
	};
	_0x37a20c.prototype.allowedEvents_ = {};
	_0x37a20c.prototype.on = function (_0x4973cf, _0x26e5da) {
		var _0x567e24 = this.addEventListener;
		this.addEventListener = function () {
		};
		_0x7b0228(this, _0x4973cf, _0x26e5da);
		this.addEventListener = _0x567e24;
	};
	_0x37a20c.prototype.addEventListener = _0x37a20c.prototype.on;
	_0x37a20c.prototype.off = function (_0x112126, _0x34e738) {
		_0x706013(this, _0x112126, _0x34e738);
	};
	_0x37a20c.prototype.removeEventListener = _0x37a20c.prototype.off;
	_0x37a20c.prototype.one = function (_0x2a8d4f, _0x23f3fd) {
		var _0x397bdc = this.addEventListener;
		this.addEventListener = function () {
		};
		_0x53446c(this, _0x2a8d4f, _0x23f3fd);
		this.addEventListener = _0x397bdc;
	};
	_0x37a20c.prototype.trigger = function (_0x2feff9) {
		var _0x26b3f = _0x2feff9.type || _0x2feff9;
		typeof _0x2feff9 === 'string' && (_0x2feff9 = { 'type': _0x26b3f });
		_0x2feff9 = _0x1b8ed7(_0x2feff9);
		this.allowedEvents_[_0x26b3f] && this['on' + _0x26b3f] && this['on' + _0x26b3f](_0x2feff9);
		_0x3c77e0(this, _0x2feff9);
	};
	_0x37a20c.prototype.dispatchEvent = _0x37a20c.prototype.trigger;
	var _0x1e745d = void 0;
	_0x37a20c.prototype.queueTrigger = function (_0x1fbf83) {
		var _0x1c41d9 = this;
		!_0x1e745d && (_0x1e745d = new Map());
		var _0x4c0ca4 = _0x1fbf83.type || _0x1fbf83, _0x5388cb = _0x1e745d.get(this);
		!_0x5388cb && (_0x5388cb = new Map(), _0x1e745d.set(this, _0x5388cb));
		var _0x44a3bd = _0x5388cb.get(_0x4c0ca4);
		_0x5388cb.delete(_0x4c0ca4);
		_0x562c10.clearTimeout(_0x44a3bd);
		var _0x5b2d8e = _0x562c10.setTimeout(function () {
			if (_0x5388cb.size === 0) {
				_0x5388cb = null;
				_0x1e745d.delete(_0x1c41d9);
			}
			_0x1c41d9.trigger(_0x1fbf83);
		}, 0);
		_0x5388cb.set(_0x4c0ca4, _0x5b2d8e);
	};
	var _0x5a4af6 = function _0x7463d4(_0x1eb191) {
		return _0x1eb191 instanceof _0x37a20c || !!_0x1eb191.eventBusEl_ && [
			'on',
			'one',
			'off',
			'trigger'
		].every(function (_0x5df68d) {
			return typeof _0x1eb191[_0x5df68d] === 'function';
		});
	}, _0x5abf95 = function _0x436e60(_0x4471d9) {
		return typeof _0x4471d9 === 'string' && /\S/.test(_0x4471d9) || Array.isArray(_0x4471d9) && !!_0x4471d9.length;
	}, _0x5374ec = function _0x241989(_0x35dd71) {
		if (!_0x35dd71.nodeName && !_0x5a4af6(_0x35dd71)) {
			throw new Error('Invalid target; must be a DOM node or evented object.');
		}
	}, _0x4096e0 = function _0xdd2325(_0x429d69) {
		if (!_0x5abf95(_0x429d69)) {
			throw new Error('Invalid event type; must be a non-empty string or array.');
		}
	}, _0x50a647 = function _0x277d76(_0x3eb086) {
		if (typeof _0x3eb086 !== 'function') {
			throw new Error('Invalid listener; must be a function.');
		}
	}, _0x1f405c = function _0x4124b1(_0x11189a, _0xecc24c) {
		var _0x431d51 = _0xecc24c.length < 3 || _0xecc24c[0] === _0x11189a || _0xecc24c[0] === _0x11189a.eventBusEl_, _0x2692d4 = void 0, _0x3e6364 = void 0, _0x8d2d4 = void 0;
		return _0x431d51 ? (_0x2692d4 = _0x11189a.eventBusEl_, _0xecc24c.length >= 3 && _0xecc24c.shift(), _0x3e6364 = _0xecc24c[0], _0x8d2d4 = _0xecc24c[1]) : (_0x2692d4 = _0xecc24c[0], _0x3e6364 = _0xecc24c[1], _0x8d2d4 = _0xecc24c[2]), _0x5374ec(_0x2692d4), _0x4096e0(_0x3e6364), _0x50a647(_0x8d2d4), _0x8d2d4 = _0x2e578a(_0x11189a, _0x8d2d4), {
			'isTargetingSelf': _0x431d51,
			'target': _0x2692d4,
			'type': _0x3e6364,
			'listener': _0x8d2d4
		};
	}, _0x430d4d = function _0x10ecc1(_0x28831d, _0x12522b, _0x94cb13, _0x4d62ce) {
		_0x5374ec(_0x28831d);
		_0x28831d.nodeName ? _0x1475fc[_0x12522b](_0x28831d, _0x94cb13, _0x4d62ce) : _0x28831d[_0x12522b](_0x94cb13, _0x4d62ce);
	}, _0x528327 = {
		'on': function _0x40c17b() {
			var _0x212c49 = this;
			for (var _0x13e543 = arguments.length, _0x4c1c63 = Array(_0x13e543), _0x342263 = 0; _0x342263 < _0x13e543; _0x342263++) {
				_0x4c1c63[_0x342263] = arguments[_0x342263];
			}
			var _0xddf232 = _0x1f405c(this, _0x4c1c63), _0x10e43c = _0xddf232.isTargetingSelf, _0x50d8d1 = _0xddf232.target, _0x2edaa2 = _0xddf232.type, _0x5526cb = _0xddf232.listener;
			_0x430d4d(_0x50d8d1, 'on', _0x2edaa2, _0x5526cb);
			if (!_0x10e43c) {
				var _0x4e7de7 = function _0x487594() {
					return _0x212c49.off(_0x50d8d1, _0x2edaa2, _0x5526cb);
				};
				_0x4e7de7.guid = _0x5526cb.guid;
				var _0x2da064 = function _0x9672fd() {
					return _0x212c49.off('dispose', _0x4e7de7);
				};
				_0x2da064.guid = _0x5526cb.guid;
				_0x430d4d(this, 'on', 'dispose', _0x4e7de7);
				_0x430d4d(_0x50d8d1, 'on', 'dispose', _0x2da064);
			}
		},
		'one': function _0x124fa9() {
			var _0x40ed79 = this;
			for (var _0x178138 = arguments.length, _0x2ec7c6 = Array(_0x178138), _0x1ce2c8 = 0; _0x1ce2c8 < _0x178138; _0x1ce2c8++) {
				_0x2ec7c6[_0x1ce2c8] = arguments[_0x1ce2c8];
			}
			var _0x5cd390 = _0x1f405c(this, _0x2ec7c6), _0x197e44 = _0x5cd390.isTargetingSelf, _0x55adc0 = _0x5cd390.target, _0x4ad008 = _0x5cd390.type, _0x2ff5bc = _0x5cd390.listener;
			if (_0x197e44) {
				_0x430d4d(_0x55adc0, 'one', _0x4ad008, _0x2ff5bc);
			} else {
				var _0x1becff = function _0x4a7848() {
					for (var _0x5a40e1 = arguments.length, _0x5c22f7 = Array(_0x5a40e1), _0x21dcbf = 0; _0x21dcbf < _0x5a40e1; _0x21dcbf++) {
						_0x5c22f7[_0x21dcbf] = arguments[_0x21dcbf];
					}
					_0x40ed79.off(_0x55adc0, _0x4ad008, _0x4a7848);
					_0x2ff5bc.apply(null, _0x5c22f7);
				};
				_0x1becff.guid = _0x2ff5bc.guid;
				_0x430d4d(_0x55adc0, 'one', _0x4ad008, _0x1becff);
			}
		},
		'off': function _0x16c59d(_0x20948b, _0x5977b6, _0x3c887e) {
			if (!_0x20948b || _0x5abf95(_0x20948b)) {
				_0x706013(this.eventBusEl_, _0x20948b, _0x5977b6);
			} else {
				var _0x4e8162 = _0x20948b, _0x174e98 = _0x5977b6;
				_0x5374ec(_0x4e8162);
				_0x4096e0(_0x174e98);
				_0x50a647(_0x3c887e);
				_0x3c887e = _0x2e578a(this, _0x3c887e);
				this.off('dispose', _0x3c887e);
				if (_0x4e8162.nodeName) {
					_0x706013(_0x4e8162, _0x174e98, _0x3c887e);
					_0x706013(_0x4e8162, 'dispose', _0x3c887e);
				} else {
					_0x5a4af6(_0x4e8162) && (_0x4e8162.off(_0x174e98, _0x3c887e), _0x4e8162.off('dispose', _0x3c887e));
				}
			}
		},
		'trigger': function _0x5e0298(_0x39fb31, _0x1fef05) {
			return _0x3c77e0(this.eventBusEl_, _0x39fb31, _0x1fef05);
		}
	};
	function _0x3d7203(_0x1fda34) {
		var _0x5697be = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _0x4beb27 = _0x5697be.eventBusKey;
		if (_0x4beb27) {
			if (!_0x1fda34[_0x4beb27].nodeName) {
				throw new Error('The eventBusKey "' + _0x4beb27 + '" does not refer to an element.');
			}
			_0x1fda34.eventBusEl_ = _0x1fda34[_0x4beb27];
		} else {
			_0x1fda34.eventBusEl_ = _0x30c03e('span', { 'className': 'vjs-event-bus' });
		}
		return _0x2476f0(_0x1fda34, _0x528327), _0x1fda34.on('dispose', function () {
			_0x1fda34.off();
			_0x562c10.setTimeout(function () {
				_0x1fda34.eventBusEl_ = null;
			}, 0);
		}), _0x1fda34;
	}
	var _0x57996a = {
		'state': {},
		'setState': function _0x20936f(_0x36a352) {
			var _0x55e857 = this;
			typeof _0x36a352 === 'function' && (_0x36a352 = _0x36a352());
			var _0x4012c5 = void 0;
			return _0x5e2c44(_0x36a352, function (_0x27b833, _0xf10276) {
				if (_0x55e857.state[_0xf10276] !== _0x27b833) {
					_0x4012c5 = _0x4012c5 || {};
					_0x4012c5[_0xf10276] = {
						'from': _0x55e857.state[_0xf10276],
						'to': _0x27b833
					};
				}
				_0x55e857.state[_0xf10276] = _0x27b833;
			}), _0x4012c5 && _0x5a4af6(this) && this.trigger({
				'changes': _0x4012c5,
				'type': 'statechanged'
			}), _0x4012c5;
		}
	};
	function _0x42a346(_0x34d517, _0x42937d) {
		return _0x2476f0(_0x34d517, _0x57996a), _0x34d517.state = _0x2476f0({}, _0x34d517.state, _0x42937d), typeof _0x34d517.handleStateChanged === 'function' && _0x5a4af6(_0x34d517) && _0x34d517.on('statechanged', _0x34d517.handleStateChanged), _0x34d517;
	}
	function _0x104f7f(_0x3fc09d) {
		if (typeof _0x3fc09d !== 'string') {
			return _0x3fc09d;
		}
		return _0x3fc09d.charAt(0).toUpperCase() + _0x3fc09d.slice(1);
	}
	function _0x3eb97d(_0x3fec1b, _0x31513c) {
		return _0x104f7f(_0x3fec1b) === _0x104f7f(_0x31513c);
	}
	function _0x47ec58() {
		var _0x3fdcdc = {
			_0x47c4e9: _0x2468e3,
			_0x47c4e9: _0x47ec58(_0x3fdcdc[_0x47c4e9], _0x2468e3)
		};
		for (var _0x555f23 = arguments.length, _0xae1fbe = Array(_0x555f23), _0x1fd204 = 0; _0x1fd204 < _0x555f23; _0x1fd204++) {
			_0xae1fbe[_0x1fd204] = arguments[_0x1fd204];
		}
		return _0xae1fbe.forEach(function (_0x8db783) {
			if (!_0x8db783) {
				return;
			}
			_0x5e2c44(_0x8db783, function (_0x2468e3, _0x47c4e9) {
				if (!_0x15e475(_0x2468e3)) {
					return;
				}
				!_0x15e475(_0x3fdcdc[_0x47c4e9]) && (_0x3fdcdc[_0x47c4e9] = {});
			});
		}), _0x3fdcdc;
	}
	var _0x197ed7 = (function () {
		function _0x5ef75a(_0x5286d1, _0x2684d0, _0x39cdb6) {
			_0x2ab3d2(this, _0x5ef75a);
			!_0x5286d1 && this.play ? this.player_ = _0x5286d1 = this : this.player_ = _0x5286d1;
			this.options_ = _0x47ec58({}, this.options_);
			_0x2684d0 = this.options_ = _0x47ec58(this.options_, _0x2684d0);
			this.id_ = _0x2684d0.id || _0x2684d0.el && _0x2684d0.el.id;
			if (!this.id_) {
				var _0x5db37e = _0x5286d1 && _0x5286d1.id && _0x5286d1.id() || 'no_player';
				this.id_ = _0x5db37e + '_component_' + _0x32cfd7();
			}
			this.name_ = _0x2684d0.name || null;
			if (_0x2684d0.el) {
				this.el_ = _0x2684d0.el;
			} else {
				_0x2684d0.createEl !== false && (this.el_ = this.createEl());
			}
			_0x2684d0.evented !== false && _0x3d7203(this, { 'eventBusKey': this.el_ ? 'el_' : null });
			_0x42a346(this, this.constructor.defaultState);
			this.children_ = [];
			this.childIndex_ = {};
			this.childNameIndex_ = {};
			_0x2684d0.initChildren !== false && this.initChildren();
			this.ready(_0x39cdb6);
			_0x2684d0.reportTouchActivity !== false && this.enableTouchActivity();
		}
		return _0x5ef75a.prototype.dispose = function _0x1ab221() {
			this.trigger({
				'type': 'dispose',
				'bubbles': false
			});
			if (this.children_) {
				for (var _0x13c1fc = this.children_.length - 1; _0x13c1fc >= 0; _0x13c1fc--) {
					this.children_[_0x13c1fc].dispose && this.children_[_0x13c1fc].dispose();
				}
			}
			this.children_ = null;
			this.childIndex_ = null;
			this.childNameIndex_ = null;
			this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), _0x2ccba8(this.el_), this.el_ = null);
			this.player_ = null;
		}, _0x5ef75a.prototype.player = function _0x511ca9() {
			return this.player_;
		}, _0x5ef75a.prototype.options = function _0xb3bb7d(_0x49e2fa) {
			_0x50330f.warn('this.options() has been deprecated and will be moved to the constructor in 6.0');
			if (!_0x49e2fa) {
				return this.options_;
			}
			return this.options_ = _0x47ec58(this.options_, _0x49e2fa), this.options_;
		}, _0x5ef75a.prototype.el = function _0x57539a() {
			return this.el_;
		}, _0x5ef75a.prototype.createEl = function _0x2a3cdb(_0x50444b, _0x4a0f05, _0x2e932f) {
			return _0x30c03e(_0x50444b, _0x4a0f05, _0x2e932f);
		}, _0x5ef75a.prototype.localize = function _0x5966ba(_0x310f59, _0x3909b2) {
			var _0x4be651 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _0x310f59, _0x100823 = this.player_.language && this.player_.language(), _0x31f295 = this.player_.languages && this.player_.languages(), _0x41a616 = _0x31f295 && _0x31f295[_0x100823], _0x45a1ec = _0x100823 && _0x100823.split('-')[0], _0x3c3360 = _0x31f295 && _0x31f295[_0x45a1ec], _0x1f2dce = _0x4be651;
			if (_0x41a616 && _0x41a616[_0x310f59]) {
				_0x1f2dce = _0x41a616[_0x310f59];
			} else {
				_0x3c3360 && _0x3c3360[_0x310f59] && (_0x1f2dce = _0x3c3360[_0x310f59]);
			}
			return _0x3909b2 && (_0x1f2dce = _0x1f2dce.replace(/\{(\d+)\}/g, function (_0x7e453, _0x51802c) {
				var _0x334c4b = _0x3909b2[_0x51802c - 1], _0x52a813 = _0x334c4b;
				return typeof _0x334c4b === 'undefined' && (_0x52a813 = _0x7e453), _0x52a813;
			})), _0x1f2dce;
		}, _0x5ef75a.prototype.contentEl = function _0x41fb83() {
			return this.contentEl_ || this.el_;
		}, _0x5ef75a.prototype.id = function _0x56e48a() {
			return this.id_;
		}, _0x5ef75a.prototype.name = function _0x4e9aac() {
			return this.name_;
		}, _0x5ef75a.prototype.children = function _0x32575c() {
			return this.children_;
		}, _0x5ef75a.prototype.getChildById = function _0x16ed75(_0x5ba327) {
			return this.childIndex_[_0x5ba327];
		}, _0x5ef75a.prototype.getChild = function _0x3aa783(_0x364263) {
			if (!_0x364263) {
				return;
			}
			return _0x364263 = _0x104f7f(_0x364263), this.childNameIndex_[_0x364263];
		}, _0x5ef75a.prototype.addChild = function _0x3e0a3c(_0x1b8180) {
			var _0x5da0cf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _0x8da956 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.children_.length, _0x2485c9 = void 0, _0x516554 = void 0;
			if (typeof _0x1b8180 === 'string') {
				_0x516554 = _0x104f7f(_0x1b8180);
				var _0x26a2e5 = _0x5da0cf.componentClass || _0x516554;
				_0x5da0cf.name = _0x516554;
				var _0x52a42d = _0x5ef75a.getComponent(_0x26a2e5);
				if (!_0x52a42d) {
					throw new Error('Component ' + _0x26a2e5 + ' does not exist');
				}
				if (typeof _0x52a42d !== 'function') {
					return null;
				}
				_0x2485c9 = new _0x52a42d(this.player_ || this, _0x5da0cf);
			} else {
				_0x2485c9 = _0x1b8180;
			}
			this.children_.splice(_0x8da956, 0, _0x2485c9);
			typeof _0x2485c9.id === 'function' && (this.childIndex_[_0x2485c9.id()] = _0x2485c9);
			_0x516554 = _0x516554 || _0x2485c9.name && _0x104f7f(_0x2485c9.name());
			_0x516554 && (this.childNameIndex_[_0x516554] = _0x2485c9);
			if (typeof _0x2485c9.el === 'function' && _0x2485c9.el()) {
				var _0x14ab74 = this.contentEl().children, _0x38cdf3 = _0x14ab74[_0x8da956] || null;
				this.contentEl().insertBefore(_0x2485c9.el(), _0x38cdf3);
			}
			return _0x2485c9;
		}, _0x5ef75a.prototype.removeChild = function _0x272ff5(_0x26aaae) {
			typeof _0x26aaae === 'string' && (_0x26aaae = this.getChild(_0x26aaae));
			if (!_0x26aaae || !this.children_) {
				return;
			}
			var _0xf4047a = false;
			for (var _0x330961 = this.children_.length - 1; _0x330961 >= 0; _0x330961--) {
				if (this.children_[_0x330961] === _0x26aaae) {
					_0xf4047a = true;
					this.children_.splice(_0x330961, 1);
					break;
				}
			}
			if (!_0xf4047a) {
				return;
			}
			this.childIndex_[_0x26aaae.id()] = null;
			this.childNameIndex_[_0x26aaae.name()] = null;
			var _0x49538d = _0x26aaae.el();
			_0x49538d && _0x49538d.parentNode === this.contentEl() && this.contentEl().removeChild(_0x26aaae.el());
		}, _0x5ef75a.prototype.initChildren = function _0x1b367a() {
			var _0x4101e9 = this, _0x480387 = this.options_.children;
			if (_0x480387) {
				var _0x4ecb46 = this.options_, _0x527b80 = function _0x347e03(_0x12a559) {
					var _0x1788b9 = _0x12a559.name, _0x352127 = _0x12a559.opts;
					_0x4ecb46[_0x1788b9] !== undefined && (_0x352127 = _0x4ecb46[_0x1788b9]);
					if (_0x352127 === false) {
						return;
					}
					_0x352127 === true && (_0x352127 = {});
					_0x352127.playerOptions = _0x4101e9.options_.playerOptions;
					var _0x1beb48 = _0x4101e9.addChild(_0x1788b9, _0x352127);
					_0x1beb48 && (_0x4101e9[_0x1788b9] = _0x1beb48);
				}, _0x47679b = void 0, _0x8ea501 = _0x5ef75a.getComponent('Tech');
				Array.isArray(_0x480387) ? _0x47679b = _0x480387 : _0x47679b = Object.keys(_0x480387);
				_0x47679b.concat(Object.keys(this.options_).filter(function (_0x42b153) {
					return !_0x47679b.some(function (_0x5cb109) {
						if (typeof _0x5cb109 === 'string') {
							return _0x42b153 === _0x5cb109;
						}
						return _0x42b153 === _0x5cb109.name;
					});
				})).map(function (_0x39d21e) {
					var _0x2476fe = void 0, _0xee300f = void 0;
					return typeof _0x39d21e === 'string' ? (_0x2476fe = _0x39d21e, _0xee300f = _0x480387[_0x2476fe] || _0x4101e9.options_[_0x2476fe] || {}) : (_0x2476fe = _0x39d21e.name, _0xee300f = _0x39d21e), {
						'name': _0x2476fe,
						'opts': _0xee300f
					};
				}).filter(function (_0x12b14a) {
					var _0x4d904b = _0x5ef75a.getComponent(_0x12b14a.opts.componentClass || _0x104f7f(_0x12b14a.name));
					return _0x4d904b && !_0x8ea501.isTech(_0x4d904b);
				}).forEach(_0x527b80);
			}
		}, _0x5ef75a.prototype.buildCSSClass = function _0x595a31() {
			return '';
		}, _0x5ef75a.prototype.ready = function _0x30f8de(_0x28523a) {
			var _0x1bdb71 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			if (!_0x28523a) {
				return;
			}
			if (!this.isReady_) {
				this.readyQueue_ = this.readyQueue_ || [];
				this.readyQueue_.push(_0x28523a);
				return;
			}
			_0x1bdb71 ? _0x28523a.call(this) : this.setTimeout(_0x28523a, 1);
		}, _0x5ef75a.prototype.triggerReady = function _0x5c117c() {
			this.isReady_ = true;
			this.setTimeout(function () {
				var _0x3bb003 = this.readyQueue_;
				this.readyQueue_ = [];
				_0x3bb003 && _0x3bb003.length > 0 && _0x3bb003.forEach(function (_0x47e475) {
					_0x47e475.call(this);
				}, this);
				this.trigger('ready');
			}, 1);
		}, _0x5ef75a.prototype['$'] = function _0x1600ac(_0x425332, _0x1f6ea6) {
			return _0x12e31e(_0x425332, _0x1f6ea6 || this.contentEl());
		}, _0x5ef75a.prototype['$$'] = function _0x824a85(_0xe9fc94, _0x894f61) {
			return _0x1f63ed(_0xe9fc94, _0x894f61 || this.contentEl());
		}, _0x5ef75a.prototype.hasClass = function _0xea4194(_0x4dcc2c) {
			return _0x46db82(this.el_, _0x4dcc2c);
		}, _0x5ef75a.prototype.addClass = function _0x257421(_0x3a9041) {
			_0x235eb5(this.el_, _0x3a9041);
		}, _0x5ef75a.prototype.removeClass = function _0x2960e2(_0x5d7535) {
			_0x564c01(this.el_, _0x5d7535);
		}, _0x5ef75a.prototype.toggleClass = function _0x459717(_0x5a42e6, _0x104be7) {
			_0xe35bb2(this.el_, _0x5a42e6, _0x104be7);
		}, _0x5ef75a.prototype.show = function _0x5c2bde() {
			this.removeClass('vjs-hidden');
		}, _0x5ef75a.prototype.hide = function _0x2f4d0e() {
			this.addClass('vjs-hidden');
		}, _0x5ef75a.prototype.lockShowing = function _0x994db9() {
			this.addClass('vjs-lock-showing');
		}, _0x5ef75a.prototype.unlockShowing = function _0x523928() {
			this.removeClass('vjs-lock-showing');
		}, _0x5ef75a.prototype.getAttribute = function _0x51b551(_0x39960b) {
			return _0x880f71(this.el_, _0x39960b);
		}, _0x5ef75a.prototype.setAttribute = function _0x21a44d(_0x158cd1, _0x55510f) {
			_0x125f72(this.el_, _0x158cd1, _0x55510f);
		}, _0x5ef75a.prototype.removeAttribute = function _0x10e7ad(_0x37e63c) {
			_0x151189(this.el_, _0x37e63c);
		}, _0x5ef75a.prototype.width = function _0x460b5a(_0x27ec91, _0x49eb29) {
			return this.dimension('width', _0x27ec91, _0x49eb29);
		}, _0x5ef75a.prototype.height = function _0x192770(_0x2c10b8, _0x84a9aa) {
			return this.dimension('height', _0x2c10b8, _0x84a9aa);
		}, _0x5ef75a.prototype.dimensions = function _0x5b68ee(_0x150a87, _0x51118b) {
			this.width(_0x150a87, true);
			this.height(_0x51118b);
		}, _0x5ef75a.prototype.dimension = function _0x551f9a(_0x1419e0, _0x1823c9, _0x3dc2c9) {
			if (_0x1823c9 !== undefined) {
				(_0x1823c9 === null || _0x1823c9 !== _0x1823c9) && (_0x1823c9 = 0);
				if (('' + _0x1823c9).indexOf('%') !== -1 || ('' + _0x1823c9).indexOf('px') !== -1) {
					this.el_.style[_0x1419e0] = _0x1823c9;
				} else {
					_0x1823c9 === 'auto' ? this.el_.style[_0x1419e0] = '' : this.el_.style[_0x1419e0] = _0x1823c9 + 'px';
				}
				!_0x3dc2c9 && this.trigger('componentresize');
				return;
			}
			if (!this.el_) {
				return 0;
			}
			var _0x24e719 = this.el_.style[_0x1419e0], _0x578a30 = _0x24e719.indexOf('px');
			if (_0x578a30 !== -1) {
				return parseInt(_0x24e719.slice(0, _0x578a30), 10);
			}
			return parseInt(this.el_['offset' + _0x104f7f(_0x1419e0)], 10);
		}, _0x5ef75a.prototype.currentDimension = function _0x55ee16(_0x4422cb) {
			var _0x1afa09 = 0;
			if (_0x4422cb !== 'width' && _0x4422cb !== 'height') {
				throw new Error('currentDimension only accepts width or height value');
			}
			if (typeof _0x562c10.getComputedStyle === 'function') {
				var _0x62d45c = _0x562c10.getComputedStyle(this.el_);
				_0x1afa09 = _0x62d45c.getPropertyValue(_0x4422cb) || _0x62d45c[_0x4422cb];
			}
			_0x1afa09 = parseFloat(_0x1afa09);
			if (_0x1afa09 === 0) {
				var _0x2c9cb9 = 'offset' + _0x104f7f(_0x4422cb);
				_0x1afa09 = this.el_[_0x2c9cb9];
			}
			return _0x1afa09;
		}, _0x5ef75a.prototype.currentDimensions = function _0x58e041() {
			return {
				'width': this.currentDimension('width'),
				'height': this.currentDimension('height')
			};
		}, _0x5ef75a.prototype.currentWidth = function _0x25c07b() {
			return this.currentDimension('width');
		}, _0x5ef75a.prototype.currentHeight = function _0x1ca328() {
			return this.currentDimension('height');
		}, _0x5ef75a.prototype.focus = function _0x5cac7b() {
			this.el_.focus();
		}, _0x5ef75a.prototype.blur = function _0x1e95fa() {
			this.el_.blur();
		}, _0x5ef75a.prototype.emitTapEvents = function _0x5d9456() {
			var _0xf45a11 = 0, _0x193b84 = null, _0x3eea74 = 10, _0x2ca883 = 200, _0x49accb = void 0;
			this.on('touchstart', function (_0xf80e70) {
				if (_0xf80e70.touches.length === 1) {
					_0x193b84 = {
						'pageX': _0xf80e70.touches[0].pageX,
						'pageY': _0xf80e70.touches[0].pageY
					};
					_0xf45a11 = new Date().getTime();
					_0x49accb = true;
				}
			});
			this.on('touchmove', function (_0x32c822) {
				if (_0x32c822.touches.length > 1) {
					_0x49accb = false;
				} else {
					if (_0x193b84) {
						var _0x55b88f = _0x32c822.touches[0].pageX - _0x193b84.pageX, _0x43d604 = _0x32c822.touches[0].pageY - _0x193b84.pageY, _0x3a391f = Math.sqrt(_0x55b88f * _0x55b88f + _0x43d604 * _0x43d604);
						_0x3a391f > _0x3eea74 && (_0x49accb = false);
					}
				}
			});
			var _0x1ecdc8 = function _0x1f6f9a() {
				_0x49accb = false;
			};
			this.on('touchleave', _0x1ecdc8);
			this.on('touchcancel', _0x1ecdc8);
			this.on('touchend', function (_0x2935b2) {
				_0x193b84 = null;
				if (_0x49accb === true) {
					var _0x569a39 = new Date().getTime() - _0xf45a11;
					if (_0x569a39 < _0x2ca883) {
						_0x2935b2.preventDefault();
						this.trigger('tap');
					}
				}
			});
		}, _0x5ef75a.prototype.enableTouchActivity = function _0x4d7723() {
			if (!this.player() || !this.player().reportUserActivity) {
				return;
			}
			var _0x1e7a85 = _0x2e578a(this.player(), this.player().reportUserActivity), _0x8b7eb2 = void 0;
			this.on('touchstart', function () {
				_0x1e7a85();
				this.clearInterval(_0x8b7eb2);
				_0x8b7eb2 = this.setInterval(_0x1e7a85, 250);
			});
			var _0x439090 = function _0xa783e9(_0x370796) {
				_0x1e7a85();
				this.clearInterval(_0x8b7eb2);
			};
			this.on('touchmove', _0x1e7a85);
			this.on('touchend', _0x439090);
			this.on('touchcancel', _0x439090);
		}, _0x5ef75a.prototype.setTimeout = function _0x5ed47d(_0xe06baa, _0x3ae90a) {
			var _0x13cc17 = this, _0x17dac4, _0xfd502a;
			return _0xe06baa = _0x2e578a(this, _0xe06baa), _0x17dac4 = _0x562c10.setTimeout(function () {
				_0x13cc17.off('dispose', _0xfd502a);
				_0xe06baa();
			}, _0x3ae90a), _0xfd502a = function _0x365d3d() {
				return _0x13cc17.clearTimeout(_0x17dac4);
			}, _0xfd502a.guid = 'vjs-timeout-' + _0x17dac4, this.on('dispose', _0xfd502a), _0x17dac4;
		}, _0x5ef75a.prototype.clearTimeout = function _0x19ad3b(_0x2fa2c7) {
			_0x562c10.clearTimeout(_0x2fa2c7);
			var _0x1000ae = function _0xd04f19() {
			};
			return _0x1000ae.guid = 'vjs-timeout-' + _0x2fa2c7, this.off('dispose', _0x1000ae), _0x2fa2c7;
		}, _0x5ef75a.prototype.setInterval = function _0x1930d7(_0x4e7759, _0x28c975) {
			var _0x3e330a = this;
			_0x4e7759 = _0x2e578a(this, _0x4e7759);
			var _0x2dc4d0 = _0x562c10.setInterval(_0x4e7759, _0x28c975), _0x4c7355 = function _0x2a99eb() {
				return _0x3e330a.clearInterval(_0x2dc4d0);
			};
			return _0x4c7355.guid = 'vjs-interval-' + _0x2dc4d0, this.on('dispose', _0x4c7355), _0x2dc4d0;
		}, _0x5ef75a.prototype.clearInterval = function _0x2eeb32(_0x30da28) {
			_0x562c10.clearInterval(_0x30da28);
			var _0x32a9a1 = function _0x5af1d1() {
			};
			return _0x32a9a1.guid = 'vjs-interval-' + _0x30da28, this.off('dispose', _0x32a9a1), _0x30da28;
		}, _0x5ef75a.prototype.requestAnimationFrame = function _0x536802(_0x537cf1) {
			var _0x2d8338 = this, _0x4de8f1, _0x55fa32;
			if (this.supportsRaf_) {
				return _0x537cf1 = _0x2e578a(this, _0x537cf1), _0x4de8f1 = _0x562c10.requestAnimationFrame(function () {
					_0x2d8338.off('dispose', _0x55fa32);
					_0x537cf1();
				}), _0x55fa32 = function _0x127a73() {
					return _0x2d8338.cancelAnimationFrame(_0x4de8f1);
				}, _0x55fa32.guid = 'vjs-raf-' + _0x4de8f1, this.on('dispose', _0x55fa32), _0x4de8f1;
			}
			return this.setTimeout(_0x537cf1, 16.666666666666668);
		}, _0x5ef75a.prototype.cancelAnimationFrame = function _0x2076a5(_0x3ecfbf) {
			if (this.supportsRaf_) {
				_0x562c10.cancelAnimationFrame(_0x3ecfbf);
				var _0x4eed65 = function _0x326d34() {
				};
				return _0x4eed65.guid = 'vjs-raf-' + _0x3ecfbf, this.off('dispose', _0x4eed65), _0x3ecfbf;
			}
			return this.clearTimeout(_0x3ecfbf);
		}, _0x5ef75a.registerComponent = function _0x1b060b(_0x4ed5ee, _0x1d659c) {
			if (typeof _0x4ed5ee !== 'string' || !_0x4ed5ee) {
				throw new Error('Illegal component name, "' + _0x4ed5ee + '"; must be a non-empty string.');
			}
			var _0x488fbd = _0x5ef75a.getComponent('Tech'), _0x1dda60 = _0x488fbd && _0x488fbd.isTech(_0x1d659c), _0x3c4215 = _0x5ef75a === _0x1d659c || _0x5ef75a.prototype.isPrototypeOf(_0x1d659c.prototype);
			if (_0x1dda60 || !_0x3c4215) {
				var _0x422efd = void 0;
				_0x1dda60 ? _0x422efd = 'techs must be registered using Tech.registerTech()' : _0x422efd = 'must be a Component subclass';
				throw new Error('Illegal component, "' + _0x4ed5ee + '"; ' + _0x422efd + '.');
			}
			_0x4ed5ee = _0x104f7f(_0x4ed5ee);
			!_0x5ef75a.components_ && (_0x5ef75a.components_ = {});
			var _0x32fc4e = _0x5ef75a.getComponent('Player');
			if (_0x4ed5ee === 'Player' && _0x32fc4e) {
				return _0x32fc4e;
			}
			return _0x5ef75a.components_[_0x4ed5ee] = _0x1d659c, _0x1d659c;
		}, _0x5ef75a.getComponent = function _0x59a63b(_0xb8baea) {
			if (!_0xb8baea) {
				return;
			}
			_0xb8baea = _0x104f7f(_0xb8baea);
			if (_0x5ef75a.components_ && _0x5ef75a.components_[_0xb8baea]) {
				return _0x5ef75a.components_[_0xb8baea];
			}
		}, !_0x5ef75a.components_ && (_0x5ef75a.components_ = {}), Object.freeze(_0x5ef75a), _0x5ef75a;
	}());
	_0x197ed7.prototype.supportsRaf_ = typeof _0x562c10.requestAnimationFrame === 'function' && typeof _0x562c10.cancelAnimationFrame === 'function';
	_0x197ed7.registerComponent('Component', _0x197ed7);
	var _0xaf7ff0 = _0x562c10.navigator && _0x562c10.navigator.userAgent || '', _0x4940c0 = /AppleWebKit\/([\d.]+)/i.exec(_0xaf7ff0), _0x515c55 = _0x4940c0 ? parseFloat(_0x4940c0.pop()) : null, _0x28235f = /iPad/i.test(_0xaf7ff0), _0x4565d5 = /iPhone/i.test(_0xaf7ff0) && !_0x28235f, _0x40fe0d = /iPod/i.test(_0xaf7ff0), _0xb76ea2 = _0x4565d5 || _0x28235f || _0x40fe0d, _0x4e4dd4 = (function () {
		var _0x47451a = _0xaf7ff0.match(/OS (\d+)_/i);
		if (_0x47451a && _0x47451a[1]) {
			return _0x47451a[1];
		}
		return null;
	}()), _0x4c1649 = /Android/i.test(_0xaf7ff0), _0x568e35 = (function () {
		var _0xdd0dc8 = _0xaf7ff0.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
		if (!_0xdd0dc8) {
			return null;
		}
		var _0x27a6ea = _0xdd0dc8[1] && parseFloat(_0xdd0dc8[1]), _0x4d1d0b = _0xdd0dc8[2] && parseFloat(_0xdd0dc8[2]);
		if (_0x27a6ea && _0x4d1d0b) {
			return parseFloat(_0xdd0dc8[1] + '.' + _0xdd0dc8[2]);
		} else {
			if (_0x27a6ea) {
				return _0x27a6ea;
			}
		}
		return null;
	}()), _0x4e2ff6 = _0x4c1649 && _0x568e35 < 5 && _0x515c55 < 537, _0x1b7d83 = /Firefox/i.test(_0xaf7ff0), _0x5cacac = /Edge/i.test(_0xaf7ff0), _0x5e4c1c = !_0x5cacac && (/Chrome/i.test(_0xaf7ff0) || /CriOS/i.test(_0xaf7ff0)), _0x472c75 = (function () {
		var _0x525501 = _0xaf7ff0.match(/(Chrome|CriOS)\/(\d+)/);
		if (_0x525501 && _0x525501[2]) {
			return parseFloat(_0x525501[2]);
		}
		return null;
	}()), _0x3c9115 = (function () {
		var _0x1ec033 = /MSIE\s(\d+)\.\d/.exec(_0xaf7ff0), _0x1979d6 = _0x1ec033 && parseFloat(_0x1ec033[1]);
		return !_0x1979d6 && /Trident\/7.0/i.test(_0xaf7ff0) && /rv:11.0/.test(_0xaf7ff0) && (_0x1979d6 = 11), _0x1979d6;
	}()), _0x214092 = /Safari/i.test(_0xaf7ff0) && !_0x5e4c1c && !_0x4c1649 && !_0x5cacac, _0x5258aa = (_0x214092 || _0xb76ea2) && !_0x5e4c1c, _0x721419 = _0x2e6e42() && ('ontouchstart' in _0x562c10 || _0x562c10.navigator.maxTouchPoints || _0x562c10.DocumentTouch && _0x562c10.document instanceof _0x562c10.DocumentTouch), _0x1455c0 = Object.freeze({
		'IS_IPAD': _0x28235f,
		'IS_IPHONE': _0x4565d5,
		'IS_IPOD': _0x40fe0d,
		'IS_IOS': _0xb76ea2,
		'IOS_VERSION': _0x4e4dd4,
		'IS_ANDROID': _0x4c1649,
		'ANDROID_VERSION': _0x568e35,
		'IS_NATIVE_ANDROID': _0x4e2ff6,
		'IS_FIREFOX': _0x1b7d83,
		'IS_EDGE': _0x5cacac,
		'IS_CHROME': _0x5e4c1c,
		'CHROME_VERSION': _0x472c75,
		'IE_VERSION': _0x3c9115,
		'IS_SAFARI': _0x214092,
		'IS_ANY_SAFARI': _0x5258aa,
		'TOUCH_ENABLED': _0x721419
	});
	function _0x324ced(_0x33a3be, _0x18d4a7, _0x421ebe) {
		if (typeof _0x18d4a7 !== 'number' || _0x18d4a7 < 0 || _0x18d4a7 > _0x421ebe) {
			throw new Error('Failed to execute \'' + _0x33a3be + '\' on \'TimeRanges\': The index provided (' + _0x18d4a7 + ') is non-numeric or out of bounds (0-' + _0x421ebe + ').');
		}
	}
	function _0x73d224(_0x2e3af7, _0x38be3f, _0x2b791e, _0xeb58c9) {
		return _0x324ced(_0x2e3af7, _0xeb58c9, _0x2b791e.length - 1), _0x2b791e[_0xeb58c9][_0x38be3f];
	}
	function _0x1164ec(_0x145e64) {
		if (_0x145e64 === undefined || _0x145e64.length === 0) {
			return {
				'length': 0,
				'start': function _0x4a2543() {
					throw new Error('This TimeRanges object is empty');
				},
				'end': function _0x2ce686() {
					throw new Error('This TimeRanges object is empty');
				}
			};
		}
		return {
			'length': _0x145e64.length,
			'start': _0x73d224.bind(null, 'start', 0, _0x145e64),
			'end': _0x73d224.bind(null, 'end', 1, _0x145e64)
		};
	}
	function _0x5e23d4(_0xb2ca06, _0x543f54) {
		if (Array.isArray(_0xb2ca06)) {
			return _0x1164ec(_0xb2ca06);
		} else {
			if (_0xb2ca06 === undefined || _0x543f54 === undefined) {
				return _0x1164ec();
			}
		}
		return _0x1164ec([[
			_0xb2ca06,
			_0x543f54
		]]);
	}
	function _0x30ed6c(_0x5c9e5a, _0x40aa4a) {
		var _0xcb138c = 0, _0x4985b1 = void 0, _0x54d4ef = void 0;
		if (!_0x40aa4a) {
			return 0;
		}
		(!_0x5c9e5a || !_0x5c9e5a.length) && (_0x5c9e5a = _0x5e23d4(0, 0));
		for (var _0x3543af = 0; _0x3543af < _0x5c9e5a.length; _0x3543af++) {
			_0x4985b1 = _0x5c9e5a.start(_0x3543af);
			_0x54d4ef = _0x5c9e5a.end(_0x3543af);
			_0x54d4ef > _0x40aa4a && (_0x54d4ef = _0x40aa4a);
			_0xcb138c += _0x54d4ef - _0x4985b1;
		}
		return _0xcb138c / _0x40aa4a;
	}
	var _0x30351b = {}, _0x2f457e = [
		[
			'requestFullscreen',
			'exitFullscreen',
			'fullscreenElement',
			'fullscreenEnabled',
			'fullscreenchange',
			'fullscreenerror'
		],
		[
			'webkitRequestFullscreen',
			'webkitExitFullscreen',
			'webkitFullscreenElement',
			'webkitFullscreenEnabled',
			'webkitfullscreenchange',
			'webkitfullscreenerror'
		],
		[
			'webkitRequestFullScreen',
			'webkitCancelFullScreen',
			'webkitCurrentFullScreenElement',
			'webkitCancelFullScreen',
			'webkitfullscreenchange',
			'webkitfullscreenerror'
		],
		[
			'mozRequestFullScreen',
			'mozCancelFullScreen',
			'mozFullScreenElement',
			'mozFullScreenEnabled',
			'mozfullscreenchange',
			'mozfullscreenerror'
		],
		[
			'msRequestFullscreen',
			'msExitFullscreen',
			'msFullscreenElement',
			'msFullscreenEnabled',
			'MSFullscreenChange',
			'MSFullscreenError'
		]
	], _0x2de29e = _0x2f457e[0], _0x4f622f = void 0;
	for (var _0x4f7731 = 0; _0x4f7731 < _0x2f457e.length; _0x4f7731++) {
		if (_0x2f457e[_0x4f7731][1] in _0x5d8ee4) {
			_0x4f622f = _0x2f457e[_0x4f7731];
			break;
		}
	}
	if (_0x4f622f) {
		for (var _0xf3f9f8 = 0; _0xf3f9f8 < _0x4f622f.length; _0xf3f9f8++) {
			_0x30351b[_0x2de29e[_0xf3f9f8]] = _0x4f622f[_0xf3f9f8];
		}
	}
	function _0x41ecc7(_0xb8943f) {
		if (_0xb8943f instanceof _0x41ecc7) {
			return _0xb8943f;
		}
		if (typeof _0xb8943f === 'number') {
			this.code = _0xb8943f;
		} else {
			if (typeof _0xb8943f === 'string') {
				this.message = _0xb8943f;
			} else {
				_0x2d2c83(_0xb8943f) && (typeof _0xb8943f.code === 'number' && (this.code = _0xb8943f.code), _0x2476f0(this, _0xb8943f));
			}
		}
		!this.message && (this.message = _0x41ecc7.defaultMessages[this.code] || '');
	}
	_0x41ecc7.prototype.code = 0;
	_0x41ecc7.prototype.message = '';
	_0x41ecc7.prototype.status = null;
	_0x41ecc7.errorTypes = [
		'MEDIA_ERR_CUSTOM',
		'MEDIA_ERR_ABORTED',
		'MEDIA_ERR_NETWORK',
		'MEDIA_ERR_DECODE',
		'MEDIA_ERR_SRC_NOT_SUPPORTED',
		'MEDIA_ERR_ENCRYPTED'
	];
	_0x41ecc7.defaultMessages = {
		1: 'You aborted the media playback',
		2: 'A network error caused the media download to fail part-way.',
		3: 'The media playback was aborted due to a corruption problem or because the media used features your browser did not support.',
		4: 'The media could not be loaded, either because the server or network failed or because the format is not supported.',
		5: 'The media is encrypted and we do not have the keys to decrypt it.'
	};
	for (var _0xb878f6 = 0; _0xb878f6 < _0x41ecc7.errorTypes.length; _0xb878f6++) {
		_0x41ecc7[_0x41ecc7.errorTypes[_0xb878f6]] = _0xb878f6;
		_0x41ecc7.prototype[_0x41ecc7.errorTypes[_0xb878f6]] = _0xb878f6;
	}
	var _0x46b4f0 = _0x4132ca;
	function _0x4132ca(_0x157653, _0x49e719) {
		var _0x4f251e, _0x2124a3 = null;
		try {
			_0x4f251e = JSON.parse(_0x157653, _0x49e719);
		} catch (_0x34f7e9) {
			_0x2124a3 = _0x34f7e9;
		}
		return [
			_0x2124a3,
			_0x4f251e
		];
	}
	function _0x2939d9(_0x521019) {
		return _0x521019 !== undefined && _0x521019 !== null && typeof _0x521019.then === 'function';
	}
	function _0x5def48(_0x45116d) {
		_0x2939d9(_0x45116d) && _0x45116d.then(null, function (_0x5cf21b) {
		});
	}
	var _0x36b73 = function _0x4f1cd8(_0x2f6f1a) {
		var _0x256578 = [
			'kind',
			'label',
			'language',
			'id',
			'inBandMetadataTrackDispatchType',
			'mode',
			'src'
		].reduce(function (_0x150cab, _0x252435, _0x4ce05) {
			return _0x2f6f1a[_0x252435] && (_0x150cab[_0x252435] = _0x2f6f1a[_0x252435]), _0x150cab;
		}, {
			'cues': _0x2f6f1a.cues && Array.prototype.map.call(_0x2f6f1a.cues, function (_0x275036) {
				return {
					'startTime': _0x275036.startTime,
					'endTime': _0x275036.endTime,
					'text': _0x275036.text,
					'id': _0x275036.id
				};
			})
		});
		return _0x256578;
	}, _0x483ec9 = function _0x1c841a(_0x519834) {
		var _0x462deb = _0x519834['$$']('track'), _0x35f3e4 = Array.prototype.map.call(_0x462deb, function (_0x4247d0) {
			return _0x4247d0.track;
		}), _0xea1a3a = Array.prototype.map.call(_0x462deb, function (_0x47d0e3) {
			var _0x5195be = _0x36b73(_0x47d0e3.track);
			return _0x47d0e3.src && (_0x5195be.src = _0x47d0e3.src), _0x5195be;
		});
		return _0xea1a3a.concat(Array.prototype.filter.call(_0x519834.textTracks(), function (_0x1d3cb6) {
			return _0x35f3e4.indexOf(_0x1d3cb6) === -1;
		}).map(_0x36b73));
	}, _0x5e083b = function _0x3a6655(_0x1f7adf, _0x32b02b) {
		return _0x1f7adf.forEach(function (_0x164a24) {
			var _0x35c66d = _0x32b02b.addRemoteTextTrack(_0x164a24).track;
			!_0x164a24.src && _0x164a24.cues && _0x164a24.cues.forEach(function (_0x5028d5) {
				return _0x35c66d.addCue(_0x5028d5);
			});
		}), _0x32b02b.textTracks();
	}, _0x13a437 = {
		'textTracksToJson': _0x483ec9,
		'jsonToTextTracks': _0x5e083b,
		'trackToJson_': _0x36b73
	}, _0x52769a = 'vjs-modal-dialog', _0xb4c1b9 = function (_0x362722) {
		_0x24aed7(_0xb17d48, _0x362722);
		function _0xb17d48(_0x578da1, _0x2747fc) {
			_0x2ab3d2(this, _0xb17d48);
			var _0xba86cd = _0x245593(this, _0x362722.call(this, _0x578da1, _0x2747fc));
			return _0xba86cd.opened_ = _0xba86cd.hasBeenOpened_ = _0xba86cd.hasBeenFilled_ = false, _0xba86cd.closeable(!_0xba86cd.options_.uncloseable), _0xba86cd.content(_0xba86cd.options_.content), _0xba86cd.contentEl_ = _0x30c03e('div', { 'className': _0x52769a + '-content' }, { 'role': 'document' }), _0xba86cd.descEl_ = _0x30c03e('p', {
				'className': _0x52769a + '-description vjs-control-text',
				'id': _0xba86cd.el().getAttribute('aria-describedby')
			}), _0x18dd6e(_0xba86cd.descEl_, _0xba86cd.description()), _0xba86cd.el_.appendChild(_0xba86cd.descEl_), _0xba86cd.el_.appendChild(_0xba86cd.contentEl_), _0xba86cd;
		}
		return _0xb17d48.prototype.createEl = function _0x1528ed() {
			return _0x362722.prototype.createEl.call(this, 'div', {
				'className': this.buildCSSClass(),
				'tabIndex': -1
			}, {
				'aria-describedby': this.id() + '_description',
				'aria-hidden': 'true',
				'aria-label': this.label(),
				'role': 'dialog'
			});
		}, _0xb17d48.prototype.dispose = function _0x5787a6() {
			this.contentEl_ = null;
			this.descEl_ = null;
			this.previouslyActiveEl_ = null;
			_0x362722.prototype.dispose.call(this);
		}, _0xb17d48.prototype.buildCSSClass = function _0x55b278() {
			return _0x52769a + ' vjs-hidden ' + _0x362722.prototype.buildCSSClass.call(this);
		}, _0xb17d48.prototype.handleKeyPress = function _0x19c616(_0x46b071) {
			_0x46b071.which === 27 && this.closeable() && this.close();
		}, _0xb17d48.prototype.label = function _0x28c6c6() {
			return this.localize(this.options_.label || 'Modal Window');
		}, _0xb17d48.prototype.description = function _0x217b13() {
			var _0x51a982 = this.options_.description || this.localize('This is a modal window.');
			return this.closeable() && (_0x51a982 += ' ' + this.localize('This modal can be closed by pressing the Escape key or activating the close button.')), _0x51a982;
		}, _0xb17d48.prototype.open = function _0x12dfdb() {
			if (!this.opened_) {
				var _0x353c01 = this.player();
				this.trigger('beforemodalopen');
				this.opened_ = true;
				(this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill();
				this.wasPlaying_ = !_0x353c01.paused();
				this.options_.pauseOnOpen && this.wasPlaying_ && _0x353c01.pause();
				this.closeable() && this.on(this.el_.ownerDocument, 'keydown', _0x2e578a(this, this.handleKeyPress));
				this.hadControls_ = _0x353c01.controls();
				_0x353c01.controls(false);
				this.show();
				this.conditionalFocus_();
				this.el().setAttribute('aria-hidden', 'false');
				this.trigger('modalopen');
				this.hasBeenOpened_ = true;
			}
		}, _0xb17d48.prototype.opened = function _0xd0bdda(_0x29de6b) {
			return typeof _0x29de6b === 'boolean' && this[_0x29de6b ? 'open' : 'close'](), this.opened_;
		}, _0xb17d48.prototype.close = function _0xc0f920() {
			if (!this.opened_) {
				return;
			}
			var _0x2bc720 = this.player();
			this.trigger('beforemodalclose');
			this.opened_ = false;
			this.wasPlaying_ && this.options_.pauseOnOpen && _0x2bc720.play();
			this.closeable() && this.off(this.el_.ownerDocument, 'keydown', _0x2e578a(this, this.handleKeyPress));
			this.hadControls_ && _0x2bc720.controls(true);
			this.hide();
			this.el().setAttribute('aria-hidden', 'true');
			this.trigger('modalclose');
			this.conditionalBlur_();
			this.options_.temporary && this.dispose();
		}, _0xb17d48.prototype.closeable = function _0x33b6cf(_0x21a6ff) {
			if (typeof _0x21a6ff === 'boolean') {
				var _0xc41f48 = this.closeable_ = !!_0x21a6ff, _0x29cac2 = this.getChild('closeButton');
				if (_0xc41f48 && !_0x29cac2) {
					var _0x490bdc = this.contentEl_;
					this.contentEl_ = this.el_;
					_0x29cac2 = this.addChild('closeButton', { 'controlText': 'Close Modal Dialog' });
					this.contentEl_ = _0x490bdc;
					this.on(_0x29cac2, 'close', this.close);
				}
				!_0xc41f48 && _0x29cac2 && (this.off(_0x29cac2, 'close', this.close), this.removeChild(_0x29cac2), _0x29cac2.dispose());
			}
			return this.closeable_;
		}, _0xb17d48.prototype.fill = function _0x365ded() {
			this.fillWith(this.content());
		}, _0xb17d48.prototype.fillWith = function _0x30c56c(_0x5da6c5) {
			var _0xe2e7af = this.contentEl(), _0x57c7ff = _0xe2e7af.parentNode, _0x582e48 = _0xe2e7af.nextSibling;
			this.trigger('beforemodalfill');
			this.hasBeenFilled_ = true;
			_0x57c7ff.removeChild(_0xe2e7af);
			this.empty();
			_0xdbf59e(_0xe2e7af, _0x5da6c5);
			this.trigger('modalfill');
			_0x582e48 ? _0x57c7ff.insertBefore(_0xe2e7af, _0x582e48) : _0x57c7ff.appendChild(_0xe2e7af);
			var _0x55fd12 = this.getChild('closeButton');
			_0x55fd12 && _0x57c7ff.appendChild(_0x55fd12.el_);
		}, _0xb17d48.prototype.empty = function _0x4dc805() {
			this.trigger('beforemodalempty');
			_0x3d9086(this.contentEl());
			this.trigger('modalempty');
		}, _0xb17d48.prototype.content = function _0x3a57f5(_0x1fdc38) {
			return typeof _0x1fdc38 !== 'undefined' && (this.content_ = _0x1fdc38), this.content_;
		}, _0xb17d48.prototype.conditionalFocus_ = function _0x189e17() {
			var _0x374ec7 = _0x5d8ee4.activeElement, _0x3d4f01 = this.player_.el_;
			this.previouslyActiveEl_ = null;
			(_0x3d4f01.contains(_0x374ec7) || _0x3d4f01 === _0x374ec7) && (this.previouslyActiveEl_ = _0x374ec7, this.focus(), this.on(_0x5d8ee4, 'keydown', this.handleKeyDown));
		}, _0xb17d48.prototype.conditionalBlur_ = function _0x1aa9ea() {
			this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null);
			this.off(_0x5d8ee4, 'keydown', this.handleKeyDown);
		}, _0xb17d48.prototype.handleKeyDown = function _0x186d7e(_0x4b027f) {
			if (_0x4b027f.which !== 9) {
				return;
			}
			var _0x42c83d = this.focusableEls_(), _0x4619ff = this.el_.querySelector(':focus'), _0x2f3102 = void 0;
			for (var _0x108085 = 0; _0x108085 < _0x42c83d.length; _0x108085++) {
				if (_0x4619ff === _0x42c83d[_0x108085]) {
					_0x2f3102 = _0x108085;
					break;
				}
			}
			_0x5d8ee4.activeElement === this.el_ && (_0x2f3102 = 0);
			if (_0x4b027f.shiftKey && _0x2f3102 === 0) {
				_0x42c83d[_0x42c83d.length - 1].focus();
				_0x4b027f.preventDefault();
			} else {
				!_0x4b027f.shiftKey && _0x2f3102 === _0x42c83d.length - 1 && (_0x42c83d[0].focus(), _0x4b027f.preventDefault());
			}
		}, _0xb17d48.prototype.focusableEls_ = function _0x8626b8() {
			var _0x25ffa1 = this.el_.querySelectorAll('*');
			return Array.prototype.filter.call(_0x25ffa1, function (_0x132921) {
				return (_0x132921 instanceof _0x562c10.HTMLAnchorElement || _0x132921 instanceof _0x562c10.HTMLAreaElement) && _0x132921.hasAttribute('href') || (_0x132921 instanceof _0x562c10.HTMLInputElement || _0x132921 instanceof _0x562c10.HTMLSelectElement || _0x132921 instanceof _0x562c10.HTMLTextAreaElement || _0x132921 instanceof _0x562c10.HTMLButtonElement) && !_0x132921.hasAttribute('disabled') || _0x132921 instanceof _0x562c10.HTMLIFrameElement || _0x132921 instanceof _0x562c10.HTMLObjectElement || _0x132921 instanceof _0x562c10.HTMLEmbedElement || _0x132921.hasAttribute('tabindex') && _0x132921.getAttribute('tabindex') !== -1 || _0x132921.hasAttribute('contenteditable');
			});
		}, _0xb17d48;
	}(_0x197ed7);
	_0xb4c1b9.prototype.options_ = {
		'pauseOnOpen': true,
		'temporary': true
	};
	_0x197ed7.registerComponent('ModalDialog', _0xb4c1b9);
	var _0x17c101 = function (_0x540bf6) {
		_0x24aed7(_0x4854aa, _0x540bf6);
		function _0x4854aa() {
			var _0x1b98b1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			_0x2ab3d2(this, _0x4854aa);
			var _0x1aa777 = _0x245593(this, _0x540bf6.call(this));
			_0x1aa777.tracks_ = [];
			Object.defineProperty(_0x1aa777, 'length', {
				'get': function _0x56f87b() {
					return this.tracks_.length;
				}
			});
			for (var _0x1acd5f = 0; _0x1acd5f < _0x1b98b1.length; _0x1acd5f++) {
				_0x1aa777.addTrack(_0x1b98b1[_0x1acd5f]);
			}
			return _0x1aa777;
		}
		return _0x4854aa.prototype.addTrack = function _0x45cb64(_0x586d27) {
			var _0x537b27 = this.tracks_.length;
			!('' + _0x537b27 in this) && Object.defineProperty(this, _0x537b27, {
				'get': function _0x15265b() {
					return this.tracks_[_0x537b27];
				}
			});
			if (this.tracks_.indexOf(_0x586d27) === -1) {
				this.tracks_.push(_0x586d27);
				this.trigger({
					'track': _0x586d27,
					'type': 'addtrack'
				});
			}
		}, _0x4854aa.prototype.removeTrack = function _0x2b8bee(_0x532238) {
			var _0x4bc009 = void 0;
			for (var _0x229fc5 = 0, _0x27e8e7 = this.length; _0x229fc5 < _0x27e8e7; _0x229fc5++) {
				if (this[_0x229fc5] === _0x532238) {
					_0x4bc009 = this[_0x229fc5];
					_0x4bc009.off && _0x4bc009.off();
					this.tracks_.splice(_0x229fc5, 1);
					break;
				}
			}
			if (!_0x4bc009) {
				return;
			}
			this.trigger({
				'track': _0x4bc009,
				'type': 'removetrack'
			});
		}, _0x4854aa.prototype.getTrackById = function _0x39efe9(_0x284cf1) {
			var _0x54ad78 = null;
			for (var _0xa74432 = 0, _0x42ceff = this.length; _0xa74432 < _0x42ceff; _0xa74432++) {
				var _0x5a8d6e = this[_0xa74432];
				if (_0x5a8d6e.id === _0x284cf1) {
					_0x54ad78 = _0x5a8d6e;
					break;
				}
			}
			return _0x54ad78;
		}, _0x4854aa;
	}(_0x37a20c);
	_0x17c101.prototype.allowedEvents_ = {
		'change': 'change',
		'addtrack': 'addtrack',
		'removetrack': 'removetrack'
	};
	for (var _0x3198a4 in _0x17c101.prototype.allowedEvents_) {
		_0x17c101.prototype['on' + _0x3198a4] = null;
	}
	var _0x4e36ef = function _0x5a8054(_0x349fb3, _0xcf811f) {
		for (var _0x5437ed = 0; _0x5437ed < _0x349fb3.length; _0x5437ed++) {
			if (!Object.keys(_0x349fb3[_0x5437ed]).length || _0xcf811f.id === _0x349fb3[_0x5437ed].id) {
				continue;
			}
			_0x349fb3[_0x5437ed].enabled = false;
		}
	}, _0x49f1e9 = function (_0x2712a4) {
		_0x24aed7(_0x4284d1, _0x2712a4);
		function _0x4284d1() {
			var _0x5e73f5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			_0x2ab3d2(this, _0x4284d1);
			for (var _0xe99c44 = _0x5e73f5.length - 1; _0xe99c44 >= 0; _0xe99c44--) {
				if (_0x5e73f5[_0xe99c44].enabled) {
					_0x4e36ef(_0x5e73f5, _0x5e73f5[_0xe99c44]);
					break;
				}
			}
			var _0x2f5645 = _0x245593(this, _0x2712a4.call(this, _0x5e73f5));
			return _0x2f5645.changing_ = false, _0x2f5645;
		}
		return _0x4284d1.prototype.addTrack = function _0x15cbed(_0x13f080) {
			var _0x21542f = this;
			_0x13f080.enabled && _0x4e36ef(this, _0x13f080);
			_0x2712a4.prototype.addTrack.call(this, _0x13f080);
			if (!_0x13f080.addEventListener) {
				return;
			}
			_0x13f080.addEventListener('enabledchange', function () {
				if (_0x21542f.changing_) {
					return;
				}
				_0x21542f.changing_ = true;
				_0x4e36ef(_0x21542f, _0x13f080);
				_0x21542f.changing_ = false;
				_0x21542f.trigger('change');
			});
		}, _0x4284d1;
	}(_0x17c101), _0x582713 = function _0x3b4c6c(_0x3209cf, _0x136485) {
		for (var _0x1b6793 = 0; _0x1b6793 < _0x3209cf.length; _0x1b6793++) {
			if (!Object.keys(_0x3209cf[_0x1b6793]).length || _0x136485.id === _0x3209cf[_0x1b6793].id) {
				continue;
			}
			_0x3209cf[_0x1b6793].selected = false;
		}
	}, _0x4df5d3 = function (_0x2c25fe) {
		_0x24aed7(_0x1dfaa3, _0x2c25fe);
		function _0x1dfaa3() {
			var _0x1759e7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			_0x2ab3d2(this, _0x1dfaa3);
			for (var _0x309134 = _0x1759e7.length - 1; _0x309134 >= 0; _0x309134--) {
				if (_0x1759e7[_0x309134].selected) {
					_0x582713(_0x1759e7, _0x1759e7[_0x309134]);
					break;
				}
			}
			var _0x3eacb8 = _0x245593(this, _0x2c25fe.call(this, _0x1759e7));
			return _0x3eacb8.changing_ = false, Object.defineProperty(_0x3eacb8, 'selectedIndex', {
				'get': function _0x2d8cfd() {
					for (var _0x37828e = 0; _0x37828e < this.length; _0x37828e++) {
						if (this[_0x37828e].selected) {
							return _0x37828e;
						}
					}
					return -1;
				},
				'set': function _0x37e058() {
				}
			}), _0x3eacb8;
		}
		return _0x1dfaa3.prototype.addTrack = function _0x31f550(_0x5a6abd) {
			var _0x135069 = this;
			_0x5a6abd.selected && _0x582713(this, _0x5a6abd);
			_0x2c25fe.prototype.addTrack.call(this, _0x5a6abd);
			if (!_0x5a6abd.addEventListener) {
				return;
			}
			_0x5a6abd.addEventListener('selectedchange', function () {
				if (_0x135069.changing_) {
					return;
				}
				_0x135069.changing_ = true;
				_0x582713(_0x135069, _0x5a6abd);
				_0x135069.changing_ = false;
				_0x135069.trigger('change');
			});
		}, _0x1dfaa3;
	}(_0x17c101), _0x52aa7b = function (_0x3d6848) {
		_0x24aed7(_0x57e439, _0x3d6848);
		function _0x57e439() {
			return _0x2ab3d2(this, _0x57e439), _0x245593(this, _0x3d6848.apply(this, arguments));
		}
		return _0x57e439.prototype.addTrack = function _0x4c37da(_0x25357d) {
			_0x3d6848.prototype.addTrack.call(this, _0x25357d);
			_0x25357d.addEventListener('modechange', _0x2e578a(this, function () {
				this.queueTrigger('change');
			}));
			var _0x8ef061 = [
				'metadata',
				'chapters'
			];
			_0x8ef061.indexOf(_0x25357d.kind) === -1 && _0x25357d.addEventListener('modechange', _0x2e578a(this, function () {
				this.trigger('selectedlanguagechange');
			}));
		}, _0x57e439;
	}(_0x17c101), _0x57da68 = (function () {
		function _0x1e687f() {
			var _0x213a6c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			_0x2ab3d2(this, _0x1e687f);
			this.trackElements_ = [];
			Object.defineProperty(this, 'length', {
				'get': function _0x343671() {
					return this.trackElements_.length;
				}
			});
			for (var _0x257616 = 0, _0x3b4ece = _0x213a6c.length; _0x257616 < _0x3b4ece; _0x257616++) {
				this.addTrackElement_(_0x213a6c[_0x257616]);
			}
		}
		return _0x1e687f.prototype.addTrackElement_ = function _0x450520(_0x30d987) {
			var _0x3345ef = this.trackElements_.length;
			!('' + _0x3345ef in this) && Object.defineProperty(this, _0x3345ef, {
				'get': function _0x2c0b0e() {
					return this.trackElements_[_0x3345ef];
				}
			});
			this.trackElements_.indexOf(_0x30d987) === -1 && this.trackElements_.push(_0x30d987);
		}, _0x1e687f.prototype.getTrackElementByTrack_ = function _0x46238c(_0x57264d) {
			var _0x597008 = void 0;
			for (var _0x457183 = 0, _0x500506 = this.trackElements_.length; _0x457183 < _0x500506; _0x457183++) {
				if (_0x57264d === this.trackElements_[_0x457183].track) {
					_0x597008 = this.trackElements_[_0x457183];
					break;
				}
			}
			return _0x597008;
		}, _0x1e687f.prototype.removeTrackElement_ = function _0x10fd15(_0x3d8f56) {
			for (var _0x4bc7df = 0, _0x3e6cc5 = this.trackElements_.length; _0x4bc7df < _0x3e6cc5; _0x4bc7df++) {
				if (_0x3d8f56 === this.trackElements_[_0x4bc7df]) {
					this.trackElements_.splice(_0x4bc7df, 1);
					break;
				}
			}
		}, _0x1e687f;
	}()), _0x4c3a31 = (function () {
		function _0x567d7d(_0x635409) {
			_0x2ab3d2(this, _0x567d7d);
			_0x567d7d.prototype.setCues_.call(this, _0x635409);
			Object.defineProperty(this, 'length', {
				'get': function _0x184d1f() {
					return this.length_;
				}
			});
		}
		return _0x567d7d.prototype.setCues_ = function _0x6a7112(_0x42c279) {
			var _0x596e20 = this.length || 0, _0x12c4b8 = 0, _0x1c36bf = _0x42c279.length;
			this.cues_ = _0x42c279;
			this.length_ = _0x42c279.length;
			var _0x30e69f = function _0x3061ab(_0x149e1b) {
				!('' + _0x149e1b in this) && Object.defineProperty(this, '' + _0x149e1b, {
					'get': function _0x3f7d11() {
						return this.cues_[_0x149e1b];
					}
				});
			};
			if (_0x596e20 < _0x1c36bf) {
				_0x12c4b8 = _0x596e20;
				for (; _0x12c4b8 < _0x1c36bf; _0x12c4b8++) {
					_0x30e69f.call(this, _0x12c4b8);
				}
			}
		}, _0x567d7d.prototype.getCueById = function _0x4f8f2a(_0x535ac2) {
			var _0x2fd523 = null;
			for (var _0x2782c2 = 0, _0x8d2b0f = this.length; _0x2782c2 < _0x8d2b0f; _0x2782c2++) {
				var _0x327217 = this[_0x2782c2];
				if (_0x327217.id === _0x535ac2) {
					_0x2fd523 = _0x327217;
					break;
				}
			}
			return _0x2fd523;
		}, _0x567d7d;
	}()), _0x1e1968 = {
		'alternative': 'alternative',
		'captions': 'captions',
		'main': 'main',
		'sign': 'sign',
		'subtitles': 'subtitles',
		'commentary': 'commentary'
	}, _0x164b5f = {
		'alternative': 'alternative',
		'descriptions': 'descriptions',
		'main': 'main',
		'main-desc': 'main-desc',
		'translation': 'translation',
		'commentary': 'commentary'
	}, _0x2086b6 = {
		'subtitles': 'subtitles',
		'captions': 'captions',
		'descriptions': 'descriptions',
		'chapters': 'chapters',
		'metadata': 'metadata'
	}, _0x130dda = {
		'disabled': 'disabled',
		'hidden': 'hidden',
		'showing': 'showing'
	}, _0x3f4ed5 = function (_0x2ee664) {
		_0x24aed7(_0x563c52, _0x2ee664);
		function _0x563c52() {
			var _0x12f4bf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			_0x2ab3d2(this, _0x563c52);
			var _0x2ed5b9 = _0x245593(this, _0x2ee664.call(this)), _0x44eacd = {
				'id': _0x12f4bf.id || 'vjs_track_' + _0x32cfd7(),
				'kind': _0x12f4bf.kind || '',
				'label': _0x12f4bf.label || '',
				'language': _0x12f4bf.language || ''
			}, _0x38fb23 = function _0x316aff(_0x2f8c80) {
				Object.defineProperty(_0x2ed5b9, _0x2f8c80, {
					'get': function _0x219c41() {
						return _0x44eacd[_0x2f8c80];
					},
					'set': function _0x1a79ed() {
					}
				});
			};
			for (var _0x434a20 in _0x44eacd) {
				_0x38fb23(_0x434a20);
			}
			return _0x2ed5b9;
		}
		return _0x563c52;
	}(_0x37a20c), _0x24fe04 = function _0x1ac95f(_0x5ac019) {
		var _0x58727e = [
			'protocol',
			'hostname',
			'port',
			'pathname',
			'search',
			'hash',
			'host'
		], _0x53a3f5 = _0x5d8ee4.createElement('a');
		_0x53a3f5.href = _0x5ac019;
		var _0x20228c = _0x53a3f5.host === '' && _0x53a3f5.protocol !== 'file:', _0x1fd9f7 = void 0;
		_0x20228c && (_0x1fd9f7 = _0x5d8ee4.createElement('div'), _0x1fd9f7.innerHTML = '<a href="' + _0x5ac019 + '"></a>', _0x53a3f5 = _0x1fd9f7.firstChild, _0x1fd9f7.setAttribute('style', 'display:none; position:absolute;'), _0x5d8ee4.body.appendChild(_0x1fd9f7));
		var _0x582688 = {};
		for (var _0x3c7f4e = 0; _0x3c7f4e < _0x58727e.length; _0x3c7f4e++) {
			_0x582688[_0x58727e[_0x3c7f4e]] = _0x53a3f5[_0x58727e[_0x3c7f4e]];
		}
		return _0x582688.protocol === 'http:' && (_0x582688.host = _0x582688.host.replace(/:80$/, '')), _0x582688.protocol === 'https:' && (_0x582688.host = _0x582688.host.replace(/:443$/, '')), !_0x582688.protocol && (_0x582688.protocol = _0x562c10.location.protocol), _0x20228c && _0x5d8ee4.body.removeChild(_0x1fd9f7), _0x582688;
	}, _0x1ca1ea = function _0x48dd0b(_0x10ead4) {
		if (!_0x10ead4.match(/^https?:\/\//)) {
			var _0x265856 = _0x5d8ee4.createElement('div');
			_0x265856.innerHTML = '<a href="' + _0x10ead4 + '">x</a>';
			_0x10ead4 = _0x265856.firstChild.href;
		}
		return _0x10ead4;
	}, _0x4f9541 = function _0x46016b(_0x49c7b9) {
		if (typeof _0x49c7b9 === 'string') {
			var _0x19bc7e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i, _0x1c1620 = _0x19bc7e.exec(_0x49c7b9);
			if (_0x1c1620) {
				return _0x1c1620.pop().toLowerCase();
			}
		}
		return '';
	}, _0x6e9b63 = function _0xbeca3e(_0x17c9d8) {
		var _0x457ea6 = _0x562c10.location, _0x4bf29f = _0x24fe04(_0x17c9d8), _0x3a1015 = _0x4bf29f.protocol === ':' ? _0x457ea6.protocol : _0x4bf29f.protocol, _0x22ac2 = _0x3a1015 + _0x4bf29f.host !== _0x457ea6.protocol + _0x457ea6.host;
		return _0x22ac2;
	}, _0x2177ed = Object.freeze({
		'parseUrl': _0x24fe04,
		'getAbsoluteURL': _0x1ca1ea,
		'getFileExtension': _0x4f9541,
		'isCrossOrigin': _0x6e9b63
	}), _0x1e1b0e = _0x29e2ca, _0x4b2c0d = Object.prototype.toString;
	function _0x29e2ca(_0x285faa) {
		var _0x597c3a = _0x4b2c0d.call(_0x285faa);
		return _0x597c3a === '[object Function]' || typeof _0x285faa === 'function' && _0x597c3a !== '[object RegExp]' || typeof window !== 'undefined' && (_0x285faa === window.setTimeout || _0x285faa === window.alert || _0x285faa === window.confirm || _0x285faa === window.prompt);
	}
	var _0x2e4b0d = Object.freeze({
		'default': _0x1e1b0e,
		'__moduleExports': _0x1e1b0e
	}), _0x28c9fe = _0x3b14ad(function (_0x59bc18, _0x58d034) {
		_0x58d034 = _0x59bc18.exports = _0x9ea9b4;
		function _0x9ea9b4(_0x12d54e) {
			return _0x12d54e.replace(/^\s*|\s*$/g, '');
		}
		_0x58d034.left = function (_0x51c5ae) {
			return _0x51c5ae.replace(/^\s*/, '');
		};
		_0x58d034.right = function (_0x49b43e) {
			return _0x49b43e.replace(/\s*$/, '');
		};
	}), _0x1ee911 = _0x28c9fe.left, _0x275398 = _0x28c9fe.right, _0x5dce8f = Object.freeze({
		'default': _0x28c9fe,
		'__moduleExports': _0x28c9fe,
		'left': _0x1ee911,
		'right': _0x275398
	}), _0xd92762 = _0x2e4b0d && _0x1e1b0e || _0x2e4b0d, _0x493786 = _0x4b11c7, _0x532464 = Object.prototype.toString, _0xbfa418 = Object.prototype.hasOwnProperty;
	function _0x4b11c7(_0xd5d0b, _0x44ba60, _0x18d786) {
		if (!_0xd92762(_0x44ba60)) {
			throw new TypeError('iterator must be a function');
		}
		arguments.length < 3 && (_0x18d786 = this);
		if (_0x532464.call(_0xd5d0b) === '[object Array]') {
			_0xc653fa(_0xd5d0b, _0x44ba60, _0x18d786);
		} else {
			if (typeof _0xd5d0b === 'string') {
				_0x572f19(_0xd5d0b, _0x44ba60, _0x18d786);
			} else {
				_0x565959(_0xd5d0b, _0x44ba60, _0x18d786);
			}
		}
	}
	function _0xc653fa(_0x192fa9, _0x5d8344, _0x3c4869) {
		for (var _0xc9d09c = 0, _0x525224 = _0x192fa9.length; _0xc9d09c < _0x525224; _0xc9d09c++) {
			_0xbfa418.call(_0x192fa9, _0xc9d09c) && _0x5d8344.call(_0x3c4869, _0x192fa9[_0xc9d09c], _0xc9d09c, _0x192fa9);
		}
	}
	function _0x572f19(_0x19f53e, _0x957933, _0x46ce95) {
		for (var _0x8e6cf7 = 0, _0x4823f3 = _0x19f53e.length; _0x8e6cf7 < _0x4823f3; _0x8e6cf7++) {
			_0x957933.call(_0x46ce95, _0x19f53e.charAt(_0x8e6cf7), _0x8e6cf7, _0x19f53e);
		}
	}
	function _0x565959(_0x200c2f, _0x24bacc, _0x5bfba0) {
		for (var _0x4b9ff8 in _0x200c2f) {
			_0xbfa418.call(_0x200c2f, _0x4b9ff8) && _0x24bacc.call(_0x5bfba0, _0x200c2f[_0x4b9ff8], _0x4b9ff8, _0x200c2f);
		}
	}
	var _0x520029 = Object.freeze({
		'default': _0x493786,
		'__moduleExports': _0x493786
	}), _0x504ef5 = _0x5dce8f && _0x28c9fe || _0x5dce8f, _0x514c1f = _0x520029 && _0x493786 || _0x520029, _0x321f65 = function _0x53b5f0(_0x494756) {
		return Object.prototype.toString.call(_0x494756) === '[object Array]';
	}, _0x5cf462 = function _0x425aed(_0x4cc7c7) {
		if (!_0x4cc7c7) {
			return {};
		}
		var _0x33cefc = { _0xf30adb: _0x38a010 };
		return _0x514c1f(_0x504ef5(_0x4cc7c7).split('\n'), function (_0x517f55) {
			var _0x3a4db4 = _0x517f55.indexOf(':'), _0xf30adb = _0x504ef5(_0x517f55.slice(0, _0x3a4db4)).toLowerCase(), _0x38a010 = _0x504ef5(_0x517f55.slice(_0x3a4db4 + 1));
			if (typeof _0x33cefc[_0xf30adb] === 'undefined') {
			} else {
				_0x321f65(_0x33cefc[_0xf30adb]) ? _0x33cefc[_0xf30adb].push(_0x38a010) : _0x33cefc[_0xf30adb] = [
					_0x33cefc[_0xf30adb],
					_0x38a010
				];
			}
		}), _0x33cefc;
	}, _0xc3557 = Object.freeze({
		'default': _0x5cf462,
		'__moduleExports': _0x5cf462
	}), _0x313c8c = _0x353302, _0x3dab92 = Object.prototype.hasOwnProperty;
	function _0x353302() {
		var _0x2de611 = {};
		for (var _0x22acdf = 0; _0x22acdf < arguments.length; _0x22acdf++) {
			var _0x2701e1 = arguments[_0x22acdf];
			for (var _0x47db5f in _0x2701e1) {
				_0x3dab92.call(_0x2701e1, _0x47db5f) && (_0x2de611[_0x47db5f] = _0x2701e1[_0x47db5f]);
			}
		}
		return _0x2de611;
	}
	var _0x56a8df = Object.freeze({
		'default': _0x313c8c,
		'__moduleExports': _0x313c8c
	}), _0x55301b = _0xc3557 && _0x5cf462 || _0xc3557, _0xa23b26 = _0x56a8df && _0x313c8c || _0x56a8df, _0x36f92f = _0x4af396;
	_0x4af396.XMLHttpRequest = _0x562c10.XMLHttpRequest || _0x47e68b;
	_0x4af396.XDomainRequest = 'withCredentials' in new _0x4af396.XMLHttpRequest() ? _0x4af396.XMLHttpRequest : _0x562c10.XDomainRequest;
	_0x1d096e([
		'get',
		'put',
		'post',
		'patch',
		'head',
		'delete'
	], function (_0x3b724d) {
		_0x4af396[_0x3b724d === 'delete' ? 'del' : _0x3b724d] = function (_0x278a6d, _0x51054a, _0x3d78cd) {
			return _0x51054a = _0x475869(_0x278a6d, _0x51054a, _0x3d78cd), _0x51054a.method = _0x3b724d.toUpperCase(), _0x52a0c6(_0x51054a);
		};
	});
	function _0x1d096e(_0x3094c7, _0xaac655) {
		for (var _0x2156c9 = 0; _0x2156c9 < _0x3094c7.length; _0x2156c9++) {
			_0xaac655(_0x3094c7[_0x2156c9]);
		}
	}
	function _0x2699ba(_0x533703) {
		for (var _0x17c898 in _0x533703) {
			if (_0x533703.hasOwnProperty(_0x17c898)) {
				return false;
			}
		}
		return true;
	}
	function _0x475869(_0x48e6fe, _0x1d5502, _0x5f0e18) {
		var _0x8732d6 = _0x48e6fe;
		return _0xd92762(_0x1d5502) ? (_0x5f0e18 = _0x1d5502, typeof _0x48e6fe === 'string' && (_0x8732d6 = { 'uri': _0x48e6fe })) : _0x8732d6 = _0xa23b26(_0x1d5502, { 'uri': _0x48e6fe }), _0x8732d6.callback = _0x5f0e18, _0x8732d6;
	}
	function _0x4af396(_0x56043d, _0x1bf605, _0x10bd90) {
		return _0x1bf605 = _0x475869(_0x56043d, _0x1bf605, _0x10bd90), _0x52a0c6(_0x1bf605);
	}
	function _0x52a0c6(_0x52827b) {
		if (typeof _0x52827b.callback === 'undefined') {
			throw new Error('callback argument missing');
		}
		var _0x59e377 = false, _0x15bef1 = function _0x445a7b(_0x5a98db, _0x352434, _0x4d7a5f) {
			!_0x59e377 && (_0x59e377 = true, _0x52827b.callback(_0x5a98db, _0x352434, _0x4d7a5f));
		};
		function _0x496a66() {
			_0x5bb0d6.readyState === 4 && setTimeout(_0x3f798b, 0);
		}
		function _0x233c33() {
			var _0x2e3e2c = undefined;
			_0x5bb0d6.response ? _0x2e3e2c = _0x5bb0d6.response : _0x2e3e2c = _0x5bb0d6.responseText || _0x160565(_0x5bb0d6);
			if (_0x59376f) {
				try {
					_0x2e3e2c = JSON.parse(_0x2e3e2c);
				} catch (_0x407fb6) {
				}
			}
			return _0x2e3e2c;
		}
		function _0x4f5f39(_0x3a6b3c) {
			return clearTimeout(_0x409ce9), !(_0x3a6b3c instanceof Error) && (_0x3a6b3c = new Error('' + (_0x3a6b3c || 'Unknown XMLHttpRequest Error'))), _0x3a6b3c.statusCode = 0, _0x15bef1(_0x3a6b3c, _0x22ccb4);
		}
		function _0x3f798b() {
			if (_0x1952c7) {
				return;
			}
			var _0x6beed4;
			clearTimeout(_0x409ce9);
			_0x52827b.useXDR && _0x5bb0d6.status === undefined ? _0x6beed4 = 200 : _0x6beed4 = _0x5bb0d6.status === 1223 ? 204 : _0x5bb0d6.status;
			var _0x589492 = _0x22ccb4, _0x515743 = null;
			return _0x6beed4 !== 0 ? (_0x589492 = {
				'body': _0x233c33(),
				'statusCode': _0x6beed4,
				'method': _0x44751b,
				'headers': {},
				'url': _0x1e38b5,
				'rawRequest': _0x5bb0d6
			}, _0x5bb0d6.getAllResponseHeaders && (_0x589492.headers = _0x55301b(_0x5bb0d6.getAllResponseHeaders()))) : _0x515743 = new Error('Internal XMLHttpRequest Error'), _0x15bef1(_0x515743, _0x589492, _0x589492.body);
		}
		var _0x5bb0d6 = _0x52827b.xhr || null;
		!_0x5bb0d6 && (_0x52827b.cors || _0x52827b.useXDR ? _0x5bb0d6 = new _0x4af396.XDomainRequest() : _0x5bb0d6 = new _0x4af396.XMLHttpRequest());
		var _0x1faff2, _0x1952c7, _0x1e38b5 = _0x5bb0d6.url = _0x52827b.uri || _0x52827b.url, _0x44751b = _0x5bb0d6.method = _0x52827b.method || 'GET', _0x18b9c9 = _0x52827b.body || _0x52827b.data, _0x4a1229 = _0x5bb0d6.headers = _0x52827b.headers || {}, _0xa2253e = !!_0x52827b.sync, _0x59376f = false, _0x409ce9, _0x22ccb4 = {
			'body': undefined,
			'headers': {},
			'statusCode': 0,
			'method': _0x44751b,
			'url': _0x1e38b5,
			'rawRequest': _0x5bb0d6
		};
		'json' in _0x52827b && _0x52827b.json !== false && (_0x59376f = true, _0x4a1229.accept || _0x4a1229.Accept || (_0x4a1229.Accept = 'application/json'), _0x44751b !== 'GET' && _0x44751b !== 'HEAD' && (_0x4a1229['content-type'] || _0x4a1229['Content-Type'] || (_0x4a1229['Content-Type'] = 'application/json'), _0x18b9c9 = JSON.stringify(_0x52827b.json === true ? _0x18b9c9 : _0x52827b.json)));
		_0x5bb0d6.onreadystatechange = _0x496a66;
		_0x5bb0d6.onload = _0x3f798b;
		_0x5bb0d6.onerror = _0x4f5f39;
		_0x5bb0d6.onprogress = function () {
		};
		_0x5bb0d6.onabort = function () {
			_0x1952c7 = true;
		};
		_0x5bb0d6.ontimeout = _0x4f5f39;
		_0x5bb0d6.open(_0x44751b, _0x1e38b5, !_0xa2253e, _0x52827b.username, _0x52827b.password);
		!_0xa2253e && (_0x5bb0d6.withCredentials = !!_0x52827b.withCredentials);
		!_0xa2253e && _0x52827b.timeout > 0 && (_0x409ce9 = setTimeout(function () {
			if (_0x1952c7) {
				return;
			}
			_0x1952c7 = true;
			_0x5bb0d6.abort('timeout');
			var _0x43137e = new Error('XMLHttpRequest timeout');
			_0x43137e.code = 'ETIMEDOUT';
			_0x4f5f39(_0x43137e);
		}, _0x52827b.timeout));
		if (_0x5bb0d6.setRequestHeader) {
			for (_0x1faff2 in _0x4a1229) {
				_0x4a1229.hasOwnProperty(_0x1faff2) && _0x5bb0d6.setRequestHeader(_0x1faff2, _0x4a1229[_0x1faff2]);
			}
		} else {
			if (_0x52827b.headers && !_0x2699ba(_0x52827b.headers)) {
				throw new Error('Headers cannot be set on an XDomainRequest object');
			}
		}
		return 'responseType' in _0x52827b && (_0x5bb0d6.responseType = _0x52827b.responseType), 'beforeSend' in _0x52827b && typeof _0x52827b.beforeSend === 'function' && _0x52827b.beforeSend(_0x5bb0d6), _0x5bb0d6.send(_0x18b9c9 || null), _0x5bb0d6;
	}
	function _0x160565(_0x1176d2) {
		if (_0x1176d2.responseType === 'document') {
			return _0x1176d2.responseXML;
		}
		var _0x3aa7d5 = _0x1176d2.responseXML && _0x1176d2.responseXML.documentElement.nodeName === 'parsererror';
		if (_0x1176d2.responseType === '' && !_0x3aa7d5) {
			return _0x1176d2.responseXML;
		}
		return null;
	}
	function _0x47e68b() {
	}
	var _0x5631f3 = function _0x26ff25(_0x1e740b, _0x378cab) {
		var _0x40dbd2 = new _0x562c10.WebVTT.Parser(_0x562c10, _0x562c10.vttjs, _0x562c10.WebVTT.StringDecoder()), _0x2f0950 = [];
		_0x40dbd2.oncue = function (_0x128bef) {
			_0x378cab.addCue(_0x128bef);
		};
		_0x40dbd2.onparsingerror = function (_0x32ff64) {
			_0x2f0950.push(_0x32ff64);
		};
		_0x40dbd2.onflush = function () {
			_0x378cab.trigger({
				'type': 'loadeddata',
				'target': _0x378cab
			});
		};
		_0x40dbd2.parse(_0x1e740b);
		if (_0x2f0950.length > 0) {
			_0x562c10.console && _0x562c10.console.groupCollapsed && _0x562c10.console.groupCollapsed('Text Track parsing errors for ' + _0x378cab.src);
			_0x2f0950.forEach(function (_0x22ad7b) {
				return _0x50330f.error(_0x22ad7b);
			});
			_0x562c10.console && _0x562c10.console.groupEnd && _0x562c10.console.groupEnd();
		}
		_0x40dbd2.flush();
	}, _0x71ee7a = function _0x18c908(_0x1f2e9c, _0x22c291) {
		var _0x29ed80 = { 'uri': _0x1f2e9c }, _0x5c0aee = _0x6e9b63(_0x1f2e9c);
		_0x5c0aee && (_0x29ed80.cors = _0x5c0aee);
		_0x36f92f(_0x29ed80, _0x2e578a(this, function (_0x4f9c60, _0x32a95b, _0x476eee) {
			if (_0x4f9c60) {
				return _0x50330f.error(_0x4f9c60, _0x32a95b);
			}
			_0x22c291.loaded_ = true;
			if (typeof _0x562c10.WebVTT !== 'function') {
				if (_0x22c291.tech_) {
					var _0x283abf = function _0x5e458c() {
						return _0x5631f3(_0x476eee, _0x22c291);
					};
					_0x22c291.tech_.on('vttjsloaded', _0x283abf);
					_0x22c291.tech_.on('vttjserror', function () {
						_0x50330f.error('vttjs failed to load, stopping trying to process ' + _0x22c291.src);
						_0x22c291.tech_.off('vttjsloaded', _0x283abf);
					});
				}
			} else {
				_0x5631f3(_0x476eee, _0x22c291);
			}
		}));
	}, _0x5a9a69 = function (_0x35e2cd) {
		_0x24aed7(_0x29265a, _0x35e2cd);
		function _0x29265a() {
			var _0x5766db = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			_0x2ab3d2(this, _0x29265a);
			if (!_0x5766db.tech) {
				throw new Error('A tech was not provided.');
			}
			var _0x86e549 = _0x47ec58(_0x5766db, {
				'kind': _0x2086b6[_0x5766db.kind] || 'subtitles',
				'language': _0x5766db.language || _0x5766db.srclang || ''
			}), _0x1d5ff2 = _0x130dda[_0x86e549.mode] || 'disabled', _0x17df6a = _0x86e549.default;
			(_0x86e549.kind === 'metadata' || _0x86e549.kind === 'chapters') && (_0x1d5ff2 = 'hidden');
			var _0x34d68e = _0x245593(this, _0x35e2cd.call(this, _0x86e549));
			_0x34d68e.tech_ = _0x86e549.tech;
			_0x34d68e.cues_ = [];
			_0x34d68e.activeCues_ = [];
			var _0x3c81f9 = new _0x4c3a31(_0x34d68e.cues_), _0x286f7f = new _0x4c3a31(_0x34d68e.activeCues_), _0x1c6d94 = false, _0x131c46 = _0x2e578a(_0x34d68e, function () {
				this.activeCues = this.activeCues;
				_0x1c6d94 && (this.trigger('cuechange'), _0x1c6d94 = false);
			});
			return _0x1d5ff2 !== 'disabled' && _0x34d68e.tech_.ready(function () {
				_0x34d68e.tech_.on('timeupdate', _0x131c46);
			}, true), Object.defineProperties(_0x34d68e, {
				'default': {
					'get': function _0x47d752() {
						return _0x17df6a;
					},
					'set': function _0x46deae() {
					}
				},
				'mode': {
					'get': function _0x540aea() {
						return _0x1d5ff2;
					},
					'set': function _0x216fa9(_0x5ad30b) {
						var _0x4aa5ad = this;
						if (!_0x130dda[_0x5ad30b]) {
							return;
						}
						_0x1d5ff2 = _0x5ad30b;
						_0x1d5ff2 === 'showing' && this.tech_.ready(function () {
							_0x4aa5ad.tech_.on('timeupdate', _0x131c46);
						}, true);
						this.trigger('modechange');
					}
				},
				'cues': {
					'get': function _0x20ba96() {
						if (!this.loaded_) {
							return null;
						}
						return _0x3c81f9;
					},
					'set': function _0x18dae0() {
					}
				},
				'activeCues': {
					'get': function _0x2b7106() {
						if (!this.loaded_) {
							return null;
						}
						if (this.cues.length === 0) {
							return _0x286f7f;
						}
						var _0x2eb136 = this.tech_.currentTime(), _0x3c4e84 = [];
						for (var _0x1a60d5 = 0, _0x3a735e = this.cues.length; _0x1a60d5 < _0x3a735e; _0x1a60d5++) {
							var _0x1f79d4 = this.cues[_0x1a60d5];
							if (_0x1f79d4.startTime <= _0x2eb136 && _0x1f79d4.endTime >= _0x2eb136) {
								_0x3c4e84.push(_0x1f79d4);
							} else {
								_0x1f79d4.startTime === _0x1f79d4.endTime && _0x1f79d4.startTime <= _0x2eb136 && _0x1f79d4.startTime + 0.5 >= _0x2eb136 && _0x3c4e84.push(_0x1f79d4);
							}
						}
						_0x1c6d94 = false;
						if (_0x3c4e84.length !== this.activeCues_.length) {
							_0x1c6d94 = true;
						} else {
							for (var _0x347306 = 0; _0x347306 < _0x3c4e84.length; _0x347306++) {
								this.activeCues_.indexOf(_0x3c4e84[_0x347306]) === -1 && (_0x1c6d94 = true);
							}
						}
						return this.activeCues_ = _0x3c4e84, _0x286f7f.setCues_(this.activeCues_), _0x286f7f;
					},
					'set': function _0x3d2a91() {
					}
				}
			}), _0x86e549.src ? (_0x34d68e.src = _0x86e549.src, _0x71ee7a(_0x86e549.src, _0x34d68e)) : _0x34d68e.loaded_ = true, _0x34d68e;
		}
		return _0x29265a.prototype.addCue = function _0x2e3516(_0x34e068) {
			var _0x2d2d07 = _0x34e068;
			if (_0x562c10.vttjs && !(_0x34e068 instanceof _0x562c10.vttjs.VTTCue)) {
				_0x2d2d07 = new _0x562c10.vttjs.VTTCue(_0x34e068.startTime, _0x34e068.endTime, _0x34e068.text);
				for (var _0x39e39e in _0x34e068) {
					!(_0x39e39e in _0x2d2d07) && (_0x2d2d07[_0x39e39e] = _0x34e068[_0x39e39e]);
				}
				_0x2d2d07.id = _0x34e068.id;
				_0x2d2d07.originalCue_ = _0x34e068;
			}
			var _0x53a43a = this.tech_.textTracks();
			for (var _0x29d881 = 0; _0x29d881 < _0x53a43a.length; _0x29d881++) {
				_0x53a43a[_0x29d881] !== this && _0x53a43a[_0x29d881].removeCue(_0x2d2d07);
			}
			this.cues_.push(_0x2d2d07);
			this.cues.setCues_(this.cues_);
		}, _0x29265a.prototype.removeCue = function _0x1197a0(_0x51ec4b) {
			var _0x582b5b = this.cues_.length;
			while (_0x582b5b--) {
				var _0x5850ff = this.cues_[_0x582b5b];
				if (_0x5850ff === _0x51ec4b || _0x5850ff.originalCue_ && _0x5850ff.originalCue_ === _0x51ec4b) {
					this.cues_.splice(_0x582b5b, 1);
					this.cues.setCues_(this.cues_);
					break;
				}
			}
		}, _0x29265a;
	}(_0x3f4ed5);
	_0x5a9a69.prototype.allowedEvents_ = { 'cuechange': 'cuechange' };
	var _0x1336a9 = function (_0xc5ed51) {
		_0x24aed7(_0x5aed8f, _0xc5ed51);
		function _0x5aed8f() {
			var _0x431605 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			_0x2ab3d2(this, _0x5aed8f);
			var _0x490ef3 = _0x47ec58(_0x431605, { 'kind': _0x164b5f[_0x431605.kind] || '' }), _0x80601d = _0x245593(this, _0xc5ed51.call(this, _0x490ef3)), _0x33b7be = false;
			return Object.defineProperty(_0x80601d, 'enabled', {
				'get': function _0x2215b0() {
					return _0x33b7be;
				},
				'set': function _0x1dfd93(_0x3f6d38) {
					if (typeof _0x3f6d38 !== 'boolean' || _0x3f6d38 === _0x33b7be) {
						return;
					}
					_0x33b7be = _0x3f6d38;
					this.trigger('enabledchange');
				}
			}), _0x490ef3.enabled && (_0x80601d.enabled = _0x490ef3.enabled), _0x80601d.loaded_ = true, _0x80601d;
		}
		return _0x5aed8f;
	}(_0x3f4ed5), _0x140294 = function (_0x1d6bc3) {
		_0x24aed7(_0x1ff578, _0x1d6bc3);
		function _0x1ff578() {
			var _0x5ed030 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			_0x2ab3d2(this, _0x1ff578);
			var _0x2abcb5 = _0x47ec58(_0x5ed030, { 'kind': _0x1e1968[_0x5ed030.kind] || '' }), _0x425559 = _0x245593(this, _0x1d6bc3.call(this, _0x2abcb5)), _0x137220 = false;
			return Object.defineProperty(_0x425559, 'selected', {
				'get': function _0xa6a9b4() {
					return _0x137220;
				},
				'set': function _0x460a61(_0x10b2a5) {
					if (typeof _0x10b2a5 !== 'boolean' || _0x10b2a5 === _0x137220) {
						return;
					}
					_0x137220 = _0x10b2a5;
					this.trigger('selectedchange');
				}
			}), _0x2abcb5.selected && (_0x425559.selected = _0x2abcb5.selected), _0x425559;
		}
		return _0x1ff578;
	}(_0x3f4ed5), _0x4979c1 = function (_0x4a436d) {
		_0x24aed7(_0x4ecd4a, _0x4a436d);
		function _0x4ecd4a() {
			var _0x43ce74 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			_0x2ab3d2(this, _0x4ecd4a);
			var _0x522c05 = _0x245593(this, _0x4a436d.call(this)), _0x1ef3e7 = void 0, _0x2b567a = new _0x5a9a69(_0x43ce74);
			return _0x522c05.kind = _0x2b567a.kind, _0x522c05.src = _0x2b567a.src, _0x522c05.srclang = _0x2b567a.language, _0x522c05.label = _0x2b567a.label, _0x522c05.default = _0x2b567a.default, Object.defineProperties(_0x522c05, {
				'readyState': {
					'get': function _0x55dce4() {
						return _0x1ef3e7;
					}
				},
				'track': {
					'get': function _0x46d307() {
						return _0x2b567a;
					}
				}
			}), _0x1ef3e7 = 0, _0x2b567a.addEventListener('loadeddata', function () {
				_0x1ef3e7 = 2;
				_0x522c05.trigger({
					'type': 'load',
					'target': _0x522c05
				});
			}), _0x522c05;
		}
		return _0x4ecd4a;
	}(_0x37a20c);
	_0x4979c1.prototype.allowedEvents_ = { 'load': 'load' };
	_0x4979c1.NONE = 0;
	_0x4979c1.LOADING = 1;
	_0x4979c1.LOADED = 2;
	_0x4979c1.ERROR = 3;
	var _0x2edb32 = {
		'audio': {
			'ListClass': _0x49f1e9,
			'TrackClass': _0x1336a9,
			'capitalName': 'Audio'
		},
		'video': {
			'ListClass': _0x4df5d3,
			'TrackClass': _0x140294,
			'capitalName': 'Video'
		},
		'text': {
			'ListClass': _0x52aa7b,
			'TrackClass': _0x5a9a69,
			'capitalName': 'Text'
		}
	};
	Object.keys(_0x2edb32).forEach(function (_0x3e6f87) {
		_0x2edb32[_0x3e6f87].getterName = _0x3e6f87 + 'Tracks';
		_0x2edb32[_0x3e6f87].privateName = _0x3e6f87 + 'Tracks_';
	});
	var _0x33729a = {
		'remoteText': {
			'ListClass': _0x52aa7b,
			'TrackClass': _0x5a9a69,
			'capitalName': 'RemoteText',
			'getterName': 'remoteTextTracks',
			'privateName': 'remoteTextTracks_'
		},
		'remoteTextEl': {
			'ListClass': _0x57da68,
			'TrackClass': _0x4979c1,
			'capitalName': 'RemoteTextTrackEls',
			'getterName': 'remoteTextTrackEls',
			'privateName': 'remoteTextTrackEls_'
		}
	}, _0x39a6af = _0x47ec58(_0x2edb32, _0x33729a);
	_0x33729a.names = Object.keys(_0x33729a);
	_0x2edb32.names = Object.keys(_0x2edb32);
	_0x39a6af.names = [].concat(_0x33729a.names).concat(_0x2edb32.names);
	var _0x1d9ef1 = Object.create || (function () {
		function _0x5c1295() {
		}
		return function (_0x1c220d) {
			if (arguments.length !== 1) {
				throw new Error('Object.create shim only accepts one parameter.');
			}
			return _0x5c1295.prototype = _0x1c220d, new _0x5c1295();
		};
	}());
	function _0x4e0746(_0x588b11, _0x5ec62e) {
		this.name = 'ParsingError';
		this.code = _0x588b11.code;
		this.message = _0x5ec62e || _0x588b11.message;
	}
	_0x4e0746.prototype = _0x1d9ef1(Error.prototype);
	_0x4e0746.prototype.constructor = _0x4e0746;
	_0x4e0746.Errors = {
		'BadSignature': {
			'code': 0,
			'message': 'Malformed WebVTT signature.'
		},
		'BadTimeStamp': {
			'code': 1,
			'message': 'Malformed time stamp.'
		}
	};
	function _0x5a6f5f(_0x174d37) {
		function _0x20f3fc(_0x45cad3, _0x5f0686, _0x539f38, _0x57d9d3) {
			return (_0x45cad3 | 0) * 3600 + (_0x5f0686 | 0) * 60 + (_0x539f38 | 0) + (_0x57d9d3 | 0) / 1000;
		}
		var _0x3e8689 = _0x174d37.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
		if (!_0x3e8689) {
			return null;
		}
		if (_0x3e8689[3]) {
			return _0x20f3fc(_0x3e8689[1], _0x3e8689[2], _0x3e8689[3].replace(':', ''), _0x3e8689[4]);
		} else {
			return _0x3e8689[1] > 59 ? _0x20f3fc(_0x3e8689[1], _0x3e8689[2], 0, _0x3e8689[4]) : _0x20f3fc(0, _0x3e8689[1], _0x3e8689[2], _0x3e8689[4]);
		}
	}
	function _0x86bcec() {
		this.values = _0x1d9ef1(null);
	}
	_0x86bcec.prototype = {
		'set': function _0x78d797(_0x13e19f, _0x1168bf) {
			!this.get(_0x13e19f) && _0x1168bf !== '' && (this.values[_0x13e19f] = _0x1168bf);
		},
		'get': function _0x2c30eb(_0x2b9b0c, _0x5ca51b, _0x5a6021) {
			if (_0x5a6021) {
				return this.has(_0x2b9b0c) ? this.values[_0x2b9b0c] : _0x5ca51b[_0x5a6021];
			}
			return this.has(_0x2b9b0c) ? this.values[_0x2b9b0c] : _0x5ca51b;
		},
		'has': function _0xc9ecf7(_0x36dfcf) {
			return _0x36dfcf in this.values;
		},
		'alt': function _0x3ed073(_0x433af3, _0x9487b6, _0x5aae34) {
			for (var _0x1d9e6c = 0; _0x1d9e6c < _0x5aae34.length; ++_0x1d9e6c) {
				if (_0x9487b6 === _0x5aae34[_0x1d9e6c]) {
					this.set(_0x433af3, _0x9487b6);
					break;
				}
			}
		},
		'integer': function _0x2bfc79(_0x382c21, _0x592ea5) {
			/^-?\d+$/.test(_0x592ea5) && this.set(_0x382c21, parseInt(_0x592ea5, 10));
		},
		'percent': function _0x5222ad(_0x4d0306, _0x3f672a) {
			var _0x3dede3;
			if (_0x3dede3 = _0x3f672a.match(/^([\d]{1,3})(\.[\d]*)?%$/)) {
				_0x3f672a = parseFloat(_0x3f672a);
				if (_0x3f672a >= 0 && _0x3f672a <= 100) {
					return this.set(_0x4d0306, _0x3f672a), true;
				}
			}
			return false;
		}
	};
	function _0x22a3a8(_0x3ddb56, _0x67432c, _0x58f245, _0x369942) {
		var _0x27fd77 = _0x369942 ? _0x3ddb56.split(_0x369942) : [_0x3ddb56];
		for (var _0x4a57ca in _0x27fd77) {
			if (typeof _0x27fd77[_0x4a57ca] !== 'string') {
				continue;
			}
			var _0x57cfc0 = _0x27fd77[_0x4a57ca].split(_0x58f245);
			if (_0x57cfc0.length !== 2) {
				continue;
			}
			var _0x3253b4 = _0x57cfc0[0], _0x49d0d4 = _0x57cfc0[1];
			_0x67432c(_0x3253b4, _0x49d0d4);
		}
	}
	function _0xb9003a(_0xa1376, _0x3ceffc, _0xd5e58d) {
		var _0x5e8f97 = _0xa1376;
		function _0x40e17a() {
			var _0x10272e = _0x5a6f5f(_0xa1376);
			if (_0x10272e === null) {
				throw new _0x4e0746(_0x4e0746.Errors.BadTimeStamp, 'Malformed timestamp: ' + _0x5e8f97);
			}
			return _0xa1376 = _0xa1376.replace(/^[^\sa-zA-Z-]+/, ''), _0x10272e;
		}
		function _0x3fbf17(_0x5f2f21, _0x430126) {
			var _0x24f59b = new _0x86bcec();
			_0x22a3a8(_0x5f2f21, function (_0x1fc48d, _0x4a5537) {
				switch (_0x1fc48d) {
					case 'region':
						for (var _0x5f623c = _0xd5e58d.length - 1; _0x5f623c >= 0; _0x5f623c--) {
							if (_0xd5e58d[_0x5f623c].id === _0x4a5537) {
								_0x24f59b.set(_0x1fc48d, _0xd5e58d[_0x5f623c].region);
								break;
							}
						}
						break;
					case 'vertical':
						_0x24f59b.alt(_0x1fc48d, _0x4a5537, [
							'rl',
							'lr'
						]);
						break;
					case 'line':
						var _0x6bdad7 = _0x4a5537.split(','), _0x29f4d6 = _0x6bdad7[0];
						_0x24f59b.integer(_0x1fc48d, _0x29f4d6), _0x24f59b.percent(_0x1fc48d, _0x29f4d6) ? _0x24f59b.set('snapToLines', false) : null, _0x24f59b.alt(_0x1fc48d, _0x29f4d6, ['auto']);
						_0x6bdad7.length === 2 && _0x24f59b.alt('lineAlign', _0x6bdad7[1], [
							'start',
							'middle',
							'end'
						]);
						break;
					case 'position':
						_0x6bdad7 = _0x4a5537.split(','), _0x24f59b.percent(_0x1fc48d, _0x6bdad7[0]);
						_0x6bdad7.length === 2 && _0x24f59b.alt('positionAlign', _0x6bdad7[1], [
							'start',
							'middle',
							'end'
						]);
						break;
					case 'size':
						_0x24f59b.percent(_0x1fc48d, _0x4a5537);
						break;
					case 'align':
						_0x24f59b.alt(_0x1fc48d, _0x4a5537, [
							'start',
							'middle',
							'end',
							'left',
							'right'
						]);
						break;
				}
			}, /:/, /\s/);
			_0x430126.region = _0x24f59b.get('region', null);
			_0x430126.vertical = _0x24f59b.get('vertical', '');
			_0x430126.line = _0x24f59b.get('line', 'auto');
			_0x430126.lineAlign = _0x24f59b.get('lineAlign', 'start');
			_0x430126.snapToLines = _0x24f59b.get('snapToLines', true);
			_0x430126.size = _0x24f59b.get('size', 100);
			_0x430126.align = _0x24f59b.get('align', 'middle');
			_0x430126.position = _0x24f59b.get('position', {
				'start': 0,
				'left': 0,
				'middle': 50,
				'end': 100,
				'right': 100
			}, _0x430126.align);
			_0x430126.positionAlign = _0x24f59b.get('positionAlign', {
				'start': 'start',
				'left': 'start',
				'middle': 'middle',
				'end': 'end',
				'right': 'end'
			}, _0x430126.align);
		}
		function _0x20199b() {
			_0xa1376 = _0xa1376.replace(/^\s+/, '');
		}
		_0x20199b();
		_0x3ceffc.startTime = _0x40e17a();
		_0x20199b();
		if (_0xa1376.substr(0, 3) !== '-->') {
			throw new _0x4e0746(_0x4e0746.Errors.BadTimeStamp, 'Malformed time stamp (time stamps must be separated by \'-->\'): ' + _0x5e8f97);
		}
		_0xa1376 = _0xa1376.substr(3);
		_0x20199b();
		_0x3ceffc.endTime = _0x40e17a();
		_0x20199b();
		_0x3fbf17(_0xa1376, _0x3ceffc);
	}
	var _0x4a4b9f = {
		'c': 'span',
		'i': 'i',
		'b': 'b',
		'u': 'u',
		'ruby': 'ruby',
		'rt': 'rt',
		'v': 'span',
		'lang': 'span'
	}, _0x4c0371 = {
		'v': 'title',
		'lang': 'lang'
	};
	function _0x34f2e1(_0x3aea5f, _0x38c931) {
		function _0x2b5128() {
			if (!_0x38c931) {
				return null;
			}
			function _0x2e94c8(_0x340aa6) {
				return _0x38c931 = _0x38c931.substr(_0x340aa6.length), _0x340aa6;
			}
			var _0x12f973 = _0x38c931.match(/^([^<]*)(<[^>]*>?)?/);
			return _0x2e94c8(_0x12f973[1] ? _0x12f973[1] : _0x12f973[2]);
		}
		function _0x23f7c4(_0x4425b3) {
			return _0x20fbb0[_0x4425b3];
		}
		function _0xfb53ae(_0x3754d1) {
			while (_0x49b91d = _0x3754d1.match(/&(amp|lt|gt|lrm|rlm|nbsp);/)) {
				_0x3754d1 = _0x3754d1.replace(_0x49b91d[0], _0x23f7c4);
			}
			return _0x3754d1;
		}
		function _0x58cec5(_0xfe61cd, _0x1f3c0c) {
			return !_0x475a90[_0x1f3c0c.localName] || _0x475a90[_0x1f3c0c.localName] === _0xfe61cd.localName;
		}
		function _0x52251a(_0x3b3f6a, _0x4184a8) {
			var _0x3e7ef9 = _0x4a4b9f[_0x3b3f6a];
			if (!_0x3e7ef9) {
				return null;
			}
			var _0x2a5994 = _0x3aea5f.document.createElement(_0x3e7ef9);
			_0x2a5994.localName = _0x3e7ef9;
			var _0x47537f = _0x4c0371[_0x3b3f6a];
			return _0x47537f && _0x4184a8 && (_0x2a5994[_0x47537f] = _0x4184a8.trim()), _0x2a5994;
		}
		var _0x299df7 = _0x3aea5f.document.createElement('div'), _0x3bf1fe = _0x299df7, _0x1afae7, _0x563eaa = [];
		while ((_0x1afae7 = _0x2b5128()) !== null) {
			if (_0x1afae7[0] === '<') {
				if (_0x1afae7[1] === '/') {
					_0x563eaa.length && _0x563eaa[_0x563eaa.length - 1] === _0x1afae7.substr(2).replace('>', '') && (_0x563eaa.pop(), _0x3bf1fe = _0x3bf1fe.parentNode);
					continue;
				}
				var _0x43ba88 = _0x5a6f5f(_0x1afae7.substr(1, _0x1afae7.length - 2)), _0x121621;
				if (_0x43ba88) {
					_0x121621 = _0x3aea5f.document.createProcessingInstruction('timestamp', _0x43ba88);
					_0x3bf1fe.appendChild(_0x121621);
					continue;
				}
				var _0x49b91d = _0x1afae7.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
				if (!_0x49b91d) {
					continue;
				}
				_0x121621 = _0x52251a(_0x49b91d[1], _0x49b91d[3]);
				if (!_0x121621) {
					continue;
				}
				if (!_0x58cec5(_0x3bf1fe, _0x121621)) {
					continue;
				}
				_0x49b91d[2] && (_0x121621.className = _0x49b91d[2].substr(1).replace('.', ' '));
				_0x563eaa.push(_0x49b91d[1]);
				_0x3bf1fe.appendChild(_0x121621);
				_0x3bf1fe = _0x121621;
				continue;
			}
			_0x3bf1fe.appendChild(_0x3aea5f.document.createTextNode(_0xfb53ae(_0x1afae7)));
		}
		return _0x299df7;
	}
	var _0x327b71 = [
		[
			1470,
			1470
		],
		[
			1472,
			1472
		],
		[
			1475,
			1475
		],
		[
			1478,
			1478
		],
		[
			1488,
			1514
		],
		[
			1520,
			1524
		],
		[
			1544,
			1544
		],
		[
			1547,
			1547
		],
		[
			1549,
			1549
		],
		[
			1563,
			1563
		],
		[
			1566,
			1610
		],
		[
			1645,
			1647
		],
		[
			1649,
			1749
		],
		[
			1765,
			1766
		],
		[
			1774,
			1775
		],
		[
			1786,
			1805
		],
		[
			1807,
			1808
		],
		[
			1810,
			1839
		],
		[
			1869,
			1957
		],
		[
			1969,
			1969
		],
		[
			1984,
			2026
		],
		[
			2036,
			2037
		],
		[
			2042,
			2042
		],
		[
			2048,
			2069
		],
		[
			2074,
			2074
		],
		[
			2084,
			2084
		],
		[
			2088,
			2088
		],
		[
			2096,
			2110
		],
		[
			2112,
			2136
		],
		[
			2142,
			2142
		],
		[
			2208,
			2208
		],
		[
			2210,
			2220
		],
		[
			8207,
			8207
		],
		[
			64285,
			64285
		],
		[
			64287,
			64296
		],
		[
			64298,
			64310
		],
		[
			64312,
			64316
		],
		[
			64318,
			64318
		],
		[
			64320,
			64321
		],
		[
			64323,
			64324
		],
		[
			64326,
			64449
		],
		[
			64467,
			64829
		],
		[
			64848,
			64911
		],
		[
			64914,
			64967
		],
		[
			65008,
			65020
		],
		[
			65136,
			65140
		],
		[
			65142,
			65276
		],
		[
			67584,
			67589
		],
		[
			67592,
			67592
		],
		[
			67594,
			67637
		],
		[
			67639,
			67640
		],
		[
			67644,
			67644
		],
		[
			67647,
			67669
		],
		[
			67671,
			67679
		],
		[
			67840,
			67867
		],
		[
			67872,
			67897
		],
		[
			67903,
			67903
		],
		[
			67968,
			68023
		],
		[
			68030,
			68031
		],
		[
			68096,
			68096
		],
		[
			68112,
			68115
		],
		[
			68117,
			68119
		],
		[
			68121,
			68147
		],
		[
			68160,
			68167
		],
		[
			68176,
			68184
		],
		[
			68192,
			68223
		],
		[
			68352,
			68405
		],
		[
			68416,
			68437
		],
		[
			68440,
			68466
		],
		[
			68472,
			68479
		],
		[
			68608,
			68680
		],
		[
			126464,
			126467
		],
		[
			126469,
			126495
		],
		[
			126497,
			126498
		],
		[
			126500,
			126500
		],
		[
			126503,
			126503
		],
		[
			126505,
			126514
		],
		[
			126516,
			126519
		],
		[
			126521,
			126521
		],
		[
			126523,
			126523
		],
		[
			126530,
			126530
		],
		[
			126535,
			126535
		],
		[
			126537,
			126537
		],
		[
			126539,
			126539
		],
		[
			126541,
			126543
		],
		[
			126545,
			126546
		],
		[
			126548,
			126548
		],
		[
			126551,
			126551
		],
		[
			126553,
			126553
		],
		[
			126555,
			126555
		],
		[
			126557,
			126557
		],
		[
			126559,
			126559
		],
		[
			126561,
			126562
		],
		[
			126564,
			126564
		],
		[
			126567,
			126570
		],
		[
			126572,
			126578
		],
		[
			126580,
			126583
		],
		[
			126585,
			126588
		],
		[
			126590,
			126590
		],
		[
			126592,
			126601
		],
		[
			126603,
			126619
		],
		[
			126625,
			126627
		],
		[
			126629,
			126633
		],
		[
			126635,
			126651
		],
		[
			1114109,
			1114109
		]
	];
	function _0x565193(_0x1ee16e) {
		for (var _0x6f09b = 0; _0x6f09b < _0x327b71.length; _0x6f09b++) {
			var _0x45dedb = _0x327b71[_0x6f09b];
			if (_0x1ee16e >= _0x45dedb[0] && _0x1ee16e <= _0x45dedb[1]) {
				return true;
			}
		}
		return false;
	}
	function _0x26b558(_0x6edcda) {
		var _0x101907 = [], _0x4d37b2 = '', _0x2f5ddb;
		if (!_0x6edcda || !_0x6edcda.childNodes) {
			return 'ltr';
		}
		function _0x56ffbd(_0x2014bc, _0x57bff8) {
			for (var _0x1a5188 = _0x57bff8.childNodes.length - 1; _0x1a5188 >= 0; _0x1a5188--) {
				_0x2014bc.push(_0x57bff8.childNodes[_0x1a5188]);
			}
		}
		function _0x13449e(_0x4a9a44) {
			if (!_0x4a9a44 || !_0x4a9a44.length) {
				return null;
			}
			var _0x1c78f2 = _0x4a9a44.pop(), _0x28050d = _0x1c78f2.textContent || _0x1c78f2.innerText;
			if (_0x28050d) {
				var _0x5b72b1 = _0x28050d.match(/^.*(\n|\r)/);
				if (_0x5b72b1) {
					return _0x4a9a44.length = 0, _0x5b72b1[0];
				}
				return _0x28050d;
			}
			if (_0x1c78f2.tagName === 'ruby') {
				return _0x13449e(_0x4a9a44);
			}
			if (_0x1c78f2.childNodes) {
				return _0x56ffbd(_0x4a9a44, _0x1c78f2), _0x13449e(_0x4a9a44);
			}
		}
		_0x56ffbd(_0x101907, _0x6edcda);
		while (_0x4d37b2 = _0x13449e(_0x101907)) {
			for (var _0x17660b = 0; _0x17660b < _0x4d37b2.length; _0x17660b++) {
				_0x2f5ddb = _0x4d37b2.charCodeAt(_0x17660b);
				if (_0x565193(_0x2f5ddb)) {
					return 'rtl';
				}
			}
		}
		return 'ltr';
	}
	function _0x155b75(_0xe73d5e) {
		if (typeof _0xe73d5e.line === 'number' && (_0xe73d5e.snapToLines || _0xe73d5e.line >= 0 && _0xe73d5e.line <= 100)) {
			return _0xe73d5e.line;
		}
		if (!_0xe73d5e.track || !_0xe73d5e.track.textTrackList || !_0xe73d5e.track.textTrackList.mediaElement) {
			return -1;
		}
		var _0x418b35 = _0xe73d5e.track, _0x2512d0 = _0x418b35.textTrackList, _0x4879bd = 0;
		for (var _0x3c7f3e = 0; _0x3c7f3e < _0x2512d0.length && _0x2512d0[_0x3c7f3e] !== _0x418b35; _0x3c7f3e++) {
			_0x2512d0[_0x3c7f3e].mode === 'showing' && _0x4879bd++;
		}
		return ++_0x4879bd * -1;
	}
	function _0xf92891() {
	}
	_0xf92891.prototype.applyStyles = function (_0x393c49, _0x32afd7) {
		_0x32afd7 = _0x32afd7 || this.div;
		for (var _0x171758 in _0x393c49) {
			_0x393c49.hasOwnProperty(_0x171758) && (_0x32afd7.style[_0x171758] = _0x393c49[_0x171758]);
		}
	};
	_0xf92891.prototype.formatStyle = function (_0xfe1433, _0x3817ac) {
		return _0xfe1433 === 0 ? 0 : _0xfe1433 + _0x3817ac;
	};
	function _0x3c54b6(_0x5c3175, _0x2a6490, _0x40d18a) {
		_0xf92891.call(this);
		this.cue = _0x2a6490;
		this.cueDiv = _0x34f2e1(_0x5c3175, _0x2a6490.text);
		var _0x282863 = {
			'color': 'rgba(255, 255, 255, 1)',
			'backgroundColor': 'rgba(0, 0, 0, 0.8)',
			'position': 'relative',
			'left': 0,
			'right': 0,
			'top': 0,
			'bottom': 0,
			'display': 'inline',
			'writingMode': _0x2a6490.vertical === '' ? 'horizontal-tb' : _0x2a6490.vertical === 'lr' ? 'vertical-lr' : 'vertical-rl',
			'unicodeBidi': 'plaintext'
		};
		this.applyStyles(_0x282863, this.cueDiv);
		this.div = _0x5c3175.document.createElement('div');
		_0x282863 = {
			'direction': _0x26b558(this.cueDiv),
			'writingMode': _0x2a6490.vertical === '' ? 'horizontal-tb' : _0x2a6490.vertical === 'lr' ? 'vertical-lr' : 'vertical-rl',
			'unicodeBidi': 'plaintext',
			'textAlign': _0x2a6490.align === 'middle' ? 'center' : _0x2a6490.align,
			'font': _0x40d18a.font,
			'whiteSpace': 'pre-line',
			'position': 'absolute'
		};
		this.applyStyles(_0x282863);
		this.div.appendChild(this.cueDiv);
		var _0x1cdb0c = 0;
		switch (_0x2a6490.positionAlign) {
			case 'start':
				_0x1cdb0c = _0x2a6490.position;
				break;
			case 'middle':
				_0x1cdb0c = _0x2a6490.position - _0x2a6490.size / 2;
				break;
			case 'end':
				_0x1cdb0c = _0x2a6490.position - _0x2a6490.size;
				break;
		}
		_0x2a6490.vertical === '' ? this.applyStyles({
			'left': this.formatStyle(_0x1cdb0c, '%'),
			'width': this.formatStyle(_0x2a6490.size, '%')
		}) : this.applyStyles({
			'top': this.formatStyle(_0x1cdb0c, '%'),
			'height': this.formatStyle(_0x2a6490.size, '%')
		});
		this.move = function (_0x17a261) {
			this.applyStyles({
				'top': this.formatStyle(_0x17a261.top, 'px'),
				'bottom': this.formatStyle(_0x17a261.bottom, 'px'),
				'left': this.formatStyle(_0x17a261.left, 'px'),
				'right': this.formatStyle(_0x17a261.right, 'px'),
				'height': this.formatStyle(_0x17a261.height, 'px'),
				'width': this.formatStyle(_0x17a261.width, 'px')
			});
		};
	}
	_0x3c54b6.prototype = _0x1d9ef1(_0xf92891.prototype);
	_0x3c54b6.prototype.constructor = _0x3c54b6;
	function _0x15b975(_0x525ea6) {
		var _0x521642, _0x319c4c, _0x359a3c, _0x564e00;
		if (_0x525ea6.div) {
			_0x319c4c = _0x525ea6.div.offsetHeight;
			_0x359a3c = _0x525ea6.div.offsetWidth;
			_0x564e00 = _0x525ea6.div.offsetTop;
			var _0xf8dc86 = (_0xf8dc86 = _0x525ea6.div.childNodes) && (_0xf8dc86 = _0xf8dc86[0]) && _0xf8dc86.getClientRects && _0xf8dc86.getClientRects();
			_0x525ea6 = _0x525ea6.div.getBoundingClientRect();
			_0x521642 = _0xf8dc86 ? Math.max(_0xf8dc86[0] && _0xf8dc86[0].height || 0, _0x525ea6.height / _0xf8dc86.length) : 0;
		}
		this.left = _0x525ea6.left;
		this.right = _0x525ea6.right;
		this.top = _0x525ea6.top || _0x564e00;
		this.height = _0x525ea6.height || _0x319c4c;
		this.bottom = _0x525ea6.bottom || _0x564e00 + (_0x525ea6.height || _0x319c4c);
		this.width = _0x525ea6.width || _0x359a3c;
		this.lineHeight = _0x521642 !== undefined ? _0x521642 : _0x525ea6.lineHeight;
	}
	_0x15b975.prototype.move = function (_0x1ea0e3, _0x47c82a) {
		_0x47c82a = _0x47c82a !== undefined ? _0x47c82a : this.lineHeight;
		switch (_0x1ea0e3) {
			case '+x':
				this.left += _0x47c82a, this.right += _0x47c82a;
				break;
			case '-x':
				this.left -= _0x47c82a, this.right -= _0x47c82a;
				break;
			case '+y':
				this.top += _0x47c82a, this.bottom += _0x47c82a;
				break;
			case '-y':
				this.top -= _0x47c82a, this.bottom -= _0x47c82a;
				break;
		}
	};
	_0x15b975.prototype.overlaps = function (_0x49f781) {
		return this.left < _0x49f781.right && this.right > _0x49f781.left && this.top < _0x49f781.bottom && this.bottom > _0x49f781.top;
	};
	_0x15b975.prototype.overlapsAny = function (_0x3b7c73) {
		for (var _0x15ba84 = 0; _0x15ba84 < _0x3b7c73.length; _0x15ba84++) {
			if (this.overlaps(_0x3b7c73[_0x15ba84])) {
				return true;
			}
		}
		return false;
	};
	_0x15b975.prototype.within = function (_0xb254dc) {
		return this.top >= _0xb254dc.top && this.bottom <= _0xb254dc.bottom && this.left >= _0xb254dc.left && this.right <= _0xb254dc.right;
	};
	_0x15b975.prototype.overlapsOppositeAxis = function (_0x51194f, _0x350fcc) {
		switch (_0x350fcc) {
			case '+x':
				return this.left < _0x51194f.left;
			case '-x':
				return this.right > _0x51194f.right;
			case '+y':
				return this.top < _0x51194f.top;
			case '-y':
				return this.bottom > _0x51194f.bottom;
		}
	};
	_0x15b975.prototype.intersectPercentage = function (_0x25cda2) {
		var _0x9f5b29 = Math.max(0, Math.min(this.right, _0x25cda2.right) - Math.max(this.left, _0x25cda2.left)), _0x32fa75 = Math.max(0, Math.min(this.bottom, _0x25cda2.bottom) - Math.max(this.top, _0x25cda2.top)), _0x1dc8aa = _0x9f5b29 * _0x32fa75;
		return _0x1dc8aa / (this.height * this.width);
	};
	_0x15b975.prototype.toCSSCompatValues = function (_0x53bb37) {
		return {
			'top': this.top - _0x53bb37.top,
			'bottom': _0x53bb37.bottom - this.bottom,
			'left': this.left - _0x53bb37.left,
			'right': _0x53bb37.right - this.right,
			'height': this.height,
			'width': this.width
		};
	};
	_0x15b975.getSimpleBoxPosition = function (_0x287dc1) {
		var _0x28c148 = _0x287dc1.div ? _0x287dc1.div.offsetHeight : _0x287dc1.tagName ? _0x287dc1.offsetHeight : 0, _0x7960d0 = _0x287dc1.div ? _0x287dc1.div.offsetWidth : _0x287dc1.tagName ? _0x287dc1.offsetWidth : 0, _0x59cadf = _0x287dc1.div ? _0x287dc1.div.offsetTop : _0x287dc1.tagName ? _0x287dc1.offsetTop : 0;
		_0x287dc1 = _0x287dc1.div ? _0x287dc1.div.getBoundingClientRect() : _0x287dc1.tagName ? _0x287dc1.getBoundingClientRect() : _0x287dc1;
		var _0x1a2a10 = {
			'left': _0x287dc1.left,
			'right': _0x287dc1.right,
			'top': _0x287dc1.top || _0x59cadf,
			'height': _0x287dc1.height || _0x28c148,
			'bottom': _0x287dc1.bottom || _0x59cadf + (_0x287dc1.height || _0x28c148),
			'width': _0x287dc1.width || _0x7960d0
		};
		return _0x1a2a10;
	};
	function _0x5c8542(_0x2dbdc2, _0x3ecdc9, _0x4b9f90, _0x3caa0e) {
		function _0xdf20fe(_0x4460c2, _0x5ea0f4) {
			var _0x103d7c, _0x48f7fc = new _0x15b975(_0x4460c2), _0x482351 = 1;
			for (var _0x5cfd2f = 0; _0x5cfd2f < _0x5ea0f4.length; _0x5cfd2f++) {
				while (_0x4460c2.overlapsOppositeAxis(_0x4b9f90, _0x5ea0f4[_0x5cfd2f]) || _0x4460c2.within(_0x4b9f90) && _0x4460c2.overlapsAny(_0x3caa0e)) {
					_0x4460c2.move(_0x5ea0f4[_0x5cfd2f]);
				}
				if (_0x4460c2.within(_0x4b9f90)) {
					return _0x4460c2;
				}
				var _0x5a1fb2 = _0x4460c2.intersectPercentage(_0x4b9f90);
				if (_0x482351 > _0x5a1fb2) {
					_0x103d7c = new _0x15b975(_0x4460c2);
					_0x482351 = _0x5a1fb2;
				}
				_0x4460c2 = new _0x15b975(_0x48f7fc);
			}
			return _0x103d7c || _0x48f7fc;
		}
		var _0x23a30f = new _0x15b975(_0x3ecdc9), _0x387c81 = _0x3ecdc9.cue, _0x2466c3 = _0x155b75(_0x387c81), _0x11a49d = [];
		if (_0x387c81.snapToLines) {
			var _0x37d440;
			switch (_0x387c81.vertical) {
				case '':
					_0x11a49d = [
						'+y',
						'-y'
					], _0x37d440 = 'height';
					break;
				case 'rl':
					_0x11a49d = [
						'+x',
						'-x'
					], _0x37d440 = 'width';
					break;
				case 'lr':
					_0x11a49d = [
						'-x',
						'+x'
					], _0x37d440 = 'width';
					break;
			}
			var _0x1edaeb = _0x23a30f.lineHeight, _0x395a98 = _0x1edaeb * Math.round(_0x2466c3), _0x310b3c = _0x4b9f90[_0x37d440] + _0x1edaeb, _0x5ac6aa = _0x11a49d[0];
			if (Math.abs(_0x395a98) > _0x310b3c) {
				_0x395a98 = _0x395a98 < 0 ? -1 : 1;
				_0x395a98 *= Math.ceil(_0x310b3c / _0x1edaeb) * _0x1edaeb;
			}
			if (_0x2466c3 < 0) {
				_0x395a98 += _0x387c81.vertical === '' ? _0x4b9f90.height : _0x4b9f90.width;
				_0x11a49d = _0x11a49d.reverse();
			}
			_0x23a30f.move(_0x5ac6aa, _0x395a98);
		} else {
			var _0x484023 = _0x23a30f.lineHeight / _0x4b9f90.height * 100;
			switch (_0x387c81.lineAlign) {
				case 'middle':
					_0x2466c3 -= _0x484023 / 2;
					break;
				case 'end':
					_0x2466c3 -= _0x484023;
					break;
			}
			switch (_0x387c81.vertical) {
				case '':
					_0x3ecdc9.applyStyles({ 'top': _0x3ecdc9.formatStyle(_0x2466c3, '%') });
					break;
				case 'rl':
					_0x3ecdc9.applyStyles({ 'left': _0x3ecdc9.formatStyle(_0x2466c3, '%') });
					break;
				case 'lr':
					_0x3ecdc9.applyStyles({ 'right': _0x3ecdc9.formatStyle(_0x2466c3, '%') });
					break;
			}
			_0x11a49d = [
				'+y',
				'-x',
				'+x',
				'-y'
			];
			_0x23a30f = new _0x15b975(_0x3ecdc9);
		}
		var _0x3b7f96 = _0xdf20fe(_0x23a30f, _0x11a49d);
		_0x3ecdc9.move(_0x3b7f96.toCSSCompatValues(_0x4b9f90));
	}
	function _0x24c4b7() {
	}
	_0x24c4b7.StringDecoder = function () {
		return {
			'decode': function _0x3149b8(_0x3e3118) {
				if (!_0x3e3118) {
					return '';
				}
				if (typeof _0x3e3118 !== 'string') {
					throw new Error('Error - expected string data.');
				}
				return decodeURIComponent(encodeURIComponent(_0x3e3118));
			}
		};
	};
	_0x24c4b7.convertCueToDOMTree = function (_0x496362, _0x497c8e) {
		if (!_0x496362 || !_0x497c8e) {
			return null;
		}
		return _0x34f2e1(_0x496362, _0x497c8e);
	};
	var _0x2df2cf = 'sans-serif', _0x52bcf4 = '1.5%';
	_0x24c4b7.processCues = function (_0x4e1f4b, _0x387dd6, _0x367052) {
		if (!_0x4e1f4b || !_0x387dd6 || !_0x367052) {
			return null;
		}
		while (_0x367052.firstChild) {
			_0x367052.removeChild(_0x367052.firstChild);
		}
		var _0x486cca = _0x4e1f4b.document.createElement('div');
		_0x486cca.style.position = 'absolute';
		_0x486cca.style.left = '0';
		_0x486cca.style.right = '0';
		_0x486cca.style.top = '0';
		_0x486cca.style.bottom = '0';
		_0x486cca.style.margin = _0x52bcf4;
		_0x367052.appendChild(_0x486cca);
		function _0x1d9153(_0x146dbb) {
			for (var _0x5d2159 = 0; _0x5d2159 < _0x146dbb.length; _0x5d2159++) {
				if (_0x146dbb[_0x5d2159].hasBeenReset || !_0x146dbb[_0x5d2159].displayState) {
					return true;
				}
			}
			return false;
		}
		if (!_0x1d9153(_0x387dd6)) {
			for (var _0x571976 = 0; _0x571976 < _0x387dd6.length; _0x571976++) {
				_0x486cca.appendChild(_0x387dd6[_0x571976].displayState);
			}
			return;
		}
		var _0x385453 = [], _0x27bb45 = _0x15b975.getSimpleBoxPosition(_0x486cca), _0x2df38e = Math.round(_0x27bb45.height * 0.05 * 100) / 100, _0x292bf2 = { 'font': _0x2df38e + 'px ' + _0x2df2cf };
		(function () {
			var _0x220fbb, _0x53c332;
			for (var _0xe410b5 = 0; _0xe410b5 < _0x387dd6.length; _0xe410b5++) {
				_0x53c332 = _0x387dd6[_0xe410b5];
				_0x220fbb = new _0x3c54b6(_0x4e1f4b, _0x53c332, _0x292bf2);
				_0x486cca.appendChild(_0x220fbb.div);
				_0x5c8542(_0x4e1f4b, _0x220fbb, _0x27bb45, _0x385453);
				_0x53c332.displayState = _0x220fbb.div;
				_0x385453.push(_0x15b975.getSimpleBoxPosition(_0x220fbb));
			}
		}());
	};
	_0x24c4b7.Parser = function (_0x452b78, _0xa8ff51, _0xa22aa7) {
		!_0xa22aa7 && (_0xa22aa7 = _0xa8ff51, _0xa8ff51 = {});
		!_0xa8ff51 && (_0xa8ff51 = {});
		this.window = _0x452b78;
		this.vttjs = _0xa8ff51;
		this.state = 'INITIAL';
		this.buffer = '';
		this.decoder = _0xa22aa7 || new TextDecoder('utf8');
		this.regionList = [];
	};
	_0x24c4b7.Parser.prototype = {
		'reportOrThrowError': function _0x4e296(_0x64cb62) {
			if (_0x64cb62 instanceof _0x4e0746) {
				this.onparsingerror && this.onparsingerror(_0x64cb62);
			} else {
				throw _0x64cb62;
			}
		},
		'parse': function _0x578f81(_0x3223da) {
			var _0x7a8e46 = this;
			_0x3223da && (_0x7a8e46.buffer += _0x7a8e46.decoder.decode(_0x3223da, { 'stream': true }));
			function _0xf1a2e7() {
				var _0x562155 = _0x7a8e46.buffer, _0x539bc8 = 0;
				while (_0x539bc8 < _0x562155.length && _0x562155[_0x539bc8] !== '\r' && _0x562155[_0x539bc8] !== '\n') {
					++_0x539bc8;
				}
				var _0x391642 = _0x562155.substr(0, _0x539bc8);
				return _0x562155[_0x539bc8] === '\r' && ++_0x539bc8, _0x562155[_0x539bc8] === '\n' && ++_0x539bc8, _0x7a8e46.buffer = _0x562155.substr(_0x539bc8), _0x391642;
			}
			function _0x48e1da(_0x489c69) {
				var _0x446069 = new _0x86bcec();
				_0x22a3a8(_0x489c69, function (_0x4207a5, _0x41f7f0) {
					switch (_0x4207a5) {
						case 'id':
							_0x446069.set(_0x4207a5, _0x41f7f0);
							break;
						case 'width':
							_0x446069.percent(_0x4207a5, _0x41f7f0);
							break;
						case 'lines':
							_0x446069.integer(_0x4207a5, _0x41f7f0);
							break;
						case 'regionanchor':
						case 'viewportanchor':
							var _0x551534 = _0x41f7f0.split(',');
							if (_0x551534.length !== 2) {
								break;
							}
							var _0x114cf7 = new _0x86bcec();
							_0x114cf7.percent('x', _0x551534[0]), _0x114cf7.percent('y', _0x551534[1]);
							if (!_0x114cf7.has('x') || !_0x114cf7.has('y')) {
								break;
							}
							_0x446069.set(_0x4207a5 + 'X', _0x114cf7.get('x')), _0x446069.set(_0x4207a5 + 'Y', _0x114cf7.get('y'));
							break;
						case 'scroll':
							_0x446069.alt(_0x4207a5, _0x41f7f0, ['up']);
							break;
					}
				}, /=/, /\s/);
				if (_0x446069.has('id')) {
					var _0x5bb78e = new (_0x7a8e46.vttjs.VTTRegion || _0x7a8e46.window.VTTRegion)();
					_0x5bb78e.width = _0x446069.get('width', 100);
					_0x5bb78e.lines = _0x446069.get('lines', 3);
					_0x5bb78e.regionAnchorX = _0x446069.get('regionanchorX', 0);
					_0x5bb78e.regionAnchorY = _0x446069.get('regionanchorY', 100);
					_0x5bb78e.viewportAnchorX = _0x446069.get('viewportanchorX', 0);
					_0x5bb78e.viewportAnchorY = _0x446069.get('viewportanchorY', 100);
					_0x5bb78e.scroll = _0x446069.get('scroll', '');
					_0x7a8e46.onregion && _0x7a8e46.onregion(_0x5bb78e);
					_0x7a8e46.regionList.push({
						'id': _0x446069.get('id'),
						'region': _0x5bb78e
					});
				}
			}
			function _0x42325e(_0x3c2470) {
				var _0x307f69 = new _0x86bcec();
				_0x22a3a8(_0x3c2470, function (_0x42210d, _0x1d3cdd) {
					switch (_0x42210d) {
						case 'MPEGT':
							_0x307f69.integer(_0x42210d + 'S', _0x1d3cdd);
							break;
						case 'LOCA':
							_0x307f69.set(_0x42210d + 'L', _0x5a6f5f(_0x1d3cdd));
							break;
					}
				}, /[^\d]:/, /,/);
				_0x7a8e46.ontimestampmap && _0x7a8e46.ontimestampmap({
					'MPEGTS': _0x307f69.get('MPEGTS'),
					'LOCAL': _0x307f69.get('LOCAL')
				});
			}
			function _0x14ddc6(_0x2da28e) {
				_0x2da28e.match(/X-TIMESTAMP-MAP/) ? _0x22a3a8(_0x2da28e, function (_0xd9b7b6, _0x31a7c9) {
					switch (_0xd9b7b6) {
						case 'X-TIMESTAMP-MAP':
							_0x42325e(_0x31a7c9);
							break;
					}
				}, /=/) : _0x22a3a8(_0x2da28e, function (_0x17451a, _0x2e1a6e) {
					switch (_0x17451a) {
						case 'Region':
							_0x48e1da(_0x2e1a6e);
							break;
					}
				}, /:/);
			}
			try {
				var _0x3c7301;
				if (_0x7a8e46.state === 'INITIAL') {
					if (!/\r\n|\n/.test(_0x7a8e46.buffer)) {
						return this;
					}
					_0x3c7301 = _0xf1a2e7();
					var _0x529993 = _0x3c7301.match(/^WEBVTT([ \t].*)?$/);
					if (!_0x529993 || !_0x529993[0]) {
						throw new _0x4e0746(_0x4e0746.Errors.BadSignature);
					}
					_0x7a8e46.state = 'HEADER';
				}
				var _0x3be87e = false;
				while (_0x7a8e46.buffer) {
					if (!/\r\n|\n/.test(_0x7a8e46.buffer)) {
						return this;
					}
					!_0x3be87e ? _0x3c7301 = _0xf1a2e7() : _0x3be87e = false;
					switch (_0x7a8e46.state) {
						case 'HEADER':
							if (/:/.test(_0x3c7301)) {
								_0x14ddc6(_0x3c7301);
							} else {
								!_0x3c7301 && (_0x7a8e46.state = 'ID');
							}
							continue;
						case 'NOTE':
							!_0x3c7301 && (_0x7a8e46.state = 'ID');
							continue;
						case 'ID':
							if (/^NOTE($|[ \t])/.test(_0x3c7301)) {
								_0x7a8e46.state = 'NOTE';
								break;
							}
							if (!_0x3c7301) {
								continue;
							}
							_0x7a8e46.cue = new (_0x7a8e46.vttjs.VTTCue || _0x7a8e46.window.VTTCue)(0, 0, ''), _0x7a8e46.state = 'CUE';
							if (_0x3c7301.indexOf('-->') === -1) {
								_0x7a8e46.cue.id = _0x3c7301;
								continue;
							}
						case 'CUE':
							try {
								_0xb9003a(_0x3c7301, _0x7a8e46.cue, _0x7a8e46.regionList);
							} catch (_0x2e127d) {
								_0x7a8e46.reportOrThrowError(_0x2e127d);
								_0x7a8e46.cue = null;
								_0x7a8e46.state = 'BADCUE';
								continue;
							}
							_0x7a8e46.state = 'CUETEXT';
							continue;
						case 'CUETEXT':
							var _0x50a663 = _0x3c7301.indexOf('-->') !== -1;
							if (!_0x3c7301 || _0x50a663 && (_0x3be87e = true)) {
								_0x7a8e46.oncue && _0x7a8e46.oncue(_0x7a8e46.cue);
								_0x7a8e46.cue = null;
								_0x7a8e46.state = 'ID';
								continue;
							}
							_0x7a8e46.cue.text && (_0x7a8e46.cue.text += '\n');
							_0x7a8e46.cue.text += _0x3c7301;
							continue;
						case 'BADCUE':
							!_0x3c7301 && (_0x7a8e46.state = 'ID');
							continue;
					}
				}
			} catch (_0x326873) {
				_0x7a8e46.reportOrThrowError(_0x326873);
				_0x7a8e46.state === 'CUETEXT' && _0x7a8e46.cue && _0x7a8e46.oncue && _0x7a8e46.oncue(_0x7a8e46.cue);
				_0x7a8e46.cue = null;
				_0x7a8e46.state = _0x7a8e46.state === 'INITIAL' ? 'BADWEBVTT' : 'BADCUE';
			}
			return this;
		},
		'flush': function _0xe67f00() {
			var _0x418d94 = this;
			try {
				_0x418d94.buffer += _0x418d94.decoder.decode();
				(_0x418d94.cue || _0x418d94.state === 'HEADER') && (_0x418d94.buffer += '\n\n', _0x418d94.parse());
				if (_0x418d94.state === 'INITIAL') {
					throw new _0x4e0746(_0x4e0746.Errors.BadSignature);
				}
			} catch (_0xc39d00) {
				_0x418d94.reportOrThrowError(_0xc39d00);
			}
			return _0x418d94.onflush && _0x418d94.onflush(), this;
		}
	};
	var _0x4f064b = _0x24c4b7, _0x538be8 = Object.freeze({
		'default': _0x4f064b,
		'__moduleExports': _0x4f064b
	});
	function _0x46046b(_0x10f1af) {
		if (typeof _0x10f1af !== 'string') {
			return false;
		}
		var _0x18d063 = _0x2e6f76[_0x10f1af.toLowerCase()];
		return _0x18d063 ? _0x10f1af.toLowerCase() : false;
	}
	function _0x10b43c(_0x2adba9) {
		if (typeof _0x2adba9 !== 'string') {
			return false;
		}
		var _0x298a59 = _0x20ed0e[_0x2adba9.toLowerCase()];
		return _0x298a59 ? _0x2adba9.toLowerCase() : false;
	}
	function _0x4c4e6a(_0x131ed6, _0x57d452, _0x2e720c) {
		this.hasBeenReset = false;
		var _0x106efa = '', _0xebf725 = false, _0xfafb35 = _0x131ed6, _0x53f5d9 = _0x57d452, _0x4cdea9 = _0x2e720c, _0x3bd33b = null, _0x259b81 = '', _0x1f62dc = true, _0x508dc9 = 'auto', _0x1da0ba = 'start', _0x5e8433 = 50, _0x537608 = 'middle', _0x2f0981 = 50, _0x391011 = 'middle';
		Object.defineProperties(this, {
			'id': {
				'enumerable': true,
				'get': function _0x14c128() {
					return _0x106efa;
				},
				'set': function _0x261cdc(_0xb7b12b) {
					_0x106efa = '' + _0xb7b12b;
				}
			},
			'pauseOnExit': {
				'enumerable': true,
				'get': function _0x27b123() {
					return _0xebf725;
				},
				'set': function _0x12de6c(_0x495493) {
					_0xebf725 = !!_0x495493;
				}
			},
			'startTime': {
				'enumerable': true,
				'get': function _0xe9e4d5() {
					return _0xfafb35;
				},
				'set': function _0x2f0c73(_0x24f0df) {
					if (typeof _0x24f0df !== 'number') {
						throw new TypeError('Start time must be set to a number.');
					}
					_0xfafb35 = _0x24f0df;
					this.hasBeenReset = true;
				}
			},
			'endTime': {
				'enumerable': true,
				'get': function _0x9caa32() {
					return _0x53f5d9;
				},
				'set': function _0x2cb088(_0x5eb6c2) {
					if (typeof _0x5eb6c2 !== 'number') {
						throw new TypeError('End time must be set to a number.');
					}
					_0x53f5d9 = _0x5eb6c2;
					this.hasBeenReset = true;
				}
			},
			'text': {
				'enumerable': true,
				'get': function _0x504907() {
					return _0x4cdea9;
				},
				'set': function _0x2ebe1b(_0x4bc775) {
					_0x4cdea9 = '' + _0x4bc775;
					this.hasBeenReset = true;
				}
			},
			'region': {
				'enumerable': true,
				'get': function _0x54b917() {
					return _0x3bd33b;
				},
				'set': function _0xe14e71(_0x257f61) {
					_0x3bd33b = _0x257f61;
					this.hasBeenReset = true;
				}
			},
			'vertical': {
				'enumerable': true,
				'get': function _0x42e9ba() {
					return _0x259b81;
				},
				'set': function _0x2c734f(_0x1e8472) {
					var _0x4c35e4 = _0x46046b(_0x1e8472);
					if (_0x4c35e4 === false) {
						throw new SyntaxError('An invalid or illegal string was specified.');
					}
					_0x259b81 = _0x4c35e4;
					this.hasBeenReset = true;
				}
			},
			'snapToLines': {
				'enumerable': true,
				'get': function _0x5c7d78() {
					return _0x1f62dc;
				},
				'set': function _0x4cfedc(_0x398c8c) {
					_0x1f62dc = !!_0x398c8c;
					this.hasBeenReset = true;
				}
			},
			'line': {
				'enumerable': true,
				'get': function _0x17e1bd() {
					return _0x508dc9;
				},
				'set': function _0x507919(_0x27ff97) {
					if (typeof _0x27ff97 !== 'number' && _0x27ff97 !== 'auto') {
						throw new SyntaxError('An invalid number or illegal string was specified.');
					}
					_0x508dc9 = _0x27ff97;
					this.hasBeenReset = true;
				}
			},
			'lineAlign': {
				'enumerable': true,
				'get': function _0x4f6629() {
					return _0x1da0ba;
				},
				'set': function _0x292c59(_0x36ba2f) {
					var _0x14e2b4 = _0x10b43c(_0x36ba2f);
					if (!_0x14e2b4) {
						throw new SyntaxError('An invalid or illegal string was specified.');
					}
					_0x1da0ba = _0x14e2b4;
					this.hasBeenReset = true;
				}
			},
			'position': {
				'enumerable': true,
				'get': function _0x16e51a() {
					return _0x5e8433;
				},
				'set': function _0x3c7451(_0x5eb783) {
					if (_0x5eb783 < 0 || _0x5eb783 > 100) {
						throw new Error('Position must be between 0 and 100.');
					}
					_0x5e8433 = _0x5eb783;
					this.hasBeenReset = true;
				}
			},
			'positionAlign': {
				'enumerable': true,
				'get': function _0x5272fa() {
					return _0x537608;
				},
				'set': function _0x4f8ac9(_0x80608c) {
					var _0x4bd9e3 = _0x10b43c(_0x80608c);
					if (!_0x4bd9e3) {
						throw new SyntaxError('An invalid or illegal string was specified.');
					}
					_0x537608 = _0x4bd9e3;
					this.hasBeenReset = true;
				}
			},
			'size': {
				'enumerable': true,
				'get': function _0x5e75d2() {
					return _0x2f0981;
				},
				'set': function _0x56d31a(_0x3c08da) {
					if (_0x3c08da < 0 || _0x3c08da > 100) {
						throw new Error('Size must be between 0 and 100.');
					}
					_0x2f0981 = _0x3c08da;
					this.hasBeenReset = true;
				}
			},
			'align': {
				'enumerable': true,
				'get': function _0x4a5421() {
					return _0x391011;
				},
				'set': function _0x1d983c(_0x53d6d2) {
					var _0x1ef73a = _0x10b43c(_0x53d6d2);
					if (!_0x1ef73a) {
						throw new SyntaxError('An invalid or illegal string was specified.');
					}
					_0x391011 = _0x1ef73a;
					this.hasBeenReset = true;
				}
			}
		});
		this.displayState = undefined;
	}
	_0x4c4e6a.prototype.getCueAsHTML = function () {
		return WebVTT.convertCueToDOMTree(window, this.text);
	};
	var _0x276b53 = _0x4c4e6a, _0xe6e915 = Object.freeze({
		'default': _0x276b53,
		'__moduleExports': _0x276b53
	});
	function _0x4b39c3(_0xb44540) {
		if (typeof _0xb44540 !== 'string') {
			return false;
		}
		var _0x7ad565 = _0x198785[_0xb44540.toLowerCase()];
		return _0x7ad565 ? _0xb44540.toLowerCase() : false;
	}
	function _0x16e94a(_0x91bfbd) {
		return typeof _0x91bfbd === 'number' && _0x91bfbd >= 0 && _0x91bfbd <= 100;
	}
	function _0x20d611() {
		var _0x332557 = 100, _0x55dfc8 = 3, _0x1f7946 = 0, _0x584090 = 100, _0x259813 = 0, _0xadd015 = 100, _0x2fc9f5 = '';
		Object.defineProperties(this, {
			'width': {
				'enumerable': true,
				'get': function _0x19bcb3() {
					return _0x332557;
				},
				'set': function _0x2b3395(_0x185f72) {
					if (!_0x16e94a(_0x185f72)) {
						throw new Error('Width must be between 0 and 100.');
					}
					_0x332557 = _0x185f72;
				}
			},
			'lines': {
				'enumerable': true,
				'get': function _0x5a6646() {
					return _0x55dfc8;
				},
				'set': function _0x248a8a(_0xadbac4) {
					if (typeof _0xadbac4 !== 'number') {
						throw new TypeError('Lines must be set to a number.');
					}
					_0x55dfc8 = _0xadbac4;
				}
			},
			'regionAnchorY': {
				'enumerable': true,
				'get': function _0x7c065() {
					return _0x584090;
				},
				'set': function _0x22065f(_0x55ec5e) {
					if (!_0x16e94a(_0x55ec5e)) {
						throw new Error('RegionAnchorX must be between 0 and 100.');
					}
					_0x584090 = _0x55ec5e;
				}
			},
			'regionAnchorX': {
				'enumerable': true,
				'get': function _0x18602a() {
					return _0x1f7946;
				},
				'set': function _0x37665d(_0x333b1a) {
					if (!_0x16e94a(_0x333b1a)) {
						throw new Error('RegionAnchorY must be between 0 and 100.');
					}
					_0x1f7946 = _0x333b1a;
				}
			},
			'viewportAnchorY': {
				'enumerable': true,
				'get': function _0x4cae10() {
					return _0xadd015;
				},
				'set': function _0x2ca786(_0xd7d36a) {
					if (!_0x16e94a(_0xd7d36a)) {
						throw new Error('ViewportAnchorY must be between 0 and 100.');
					}
					_0xadd015 = _0xd7d36a;
				}
			},
			'viewportAnchorX': {
				'enumerable': true,
				'get': function _0x585061() {
					return _0x259813;
				},
				'set': function _0x2135f6(_0x3f094a) {
					if (!_0x16e94a(_0x3f094a)) {
						throw new Error('ViewportAnchorX must be between 0 and 100.');
					}
					_0x259813 = _0x3f094a;
				}
			},
			'scroll': {
				'enumerable': true,
				'get': function _0x2f1308() {
					return _0x2fc9f5;
				},
				'set': function _0x42be0d(_0xcbb98a) {
					var _0x19b71b = _0x4b39c3(_0xcbb98a);
					if (_0x19b71b === false) {
						throw new SyntaxError('An invalid or illegal string was specified.');
					}
					_0x2fc9f5 = _0x19b71b;
				}
			}
		});
	}
	var _0x30b244 = _0x20d611, _0x1ec129 = Object.freeze({
		'default': _0x30b244,
		'__moduleExports': _0x30b244
	}), _0x398c74 = _0x538be8 && _0x4f064b || _0x538be8, _0xe7cd82 = _0xe6e915 && _0x276b53 || _0xe6e915, _0xc37a01 = _0x1ec129 && _0x30b244 || _0x1ec129, _0x45f355 = _0x3b14ad(function (_0x4b52b4) {
		var _0x1e8bfa = _0x4b52b4.exports = {
			'WebVTT': _0x398c74,
			'VTTCue': _0xe7cd82,
			'VTTRegion': _0xc37a01
		};
		_0x562c10.vttjs = _0x1e8bfa;
		_0x562c10.WebVTT = _0x1e8bfa.WebVTT;
		var _0x254426 = _0x1e8bfa.VTTCue, _0xe0c9d6 = _0x1e8bfa.VTTRegion, _0x4a35a5 = _0x562c10.VTTCue, _0x35a6ed = _0x562c10.VTTRegion;
		_0x1e8bfa.shim = function () {
			_0x562c10.VTTCue = _0x254426;
			_0x562c10.VTTRegion = _0xe0c9d6;
		};
		_0x1e8bfa.restore = function () {
			_0x562c10.VTTCue = _0x4a35a5;
			_0x562c10.VTTRegion = _0x35a6ed;
		};
		!_0x562c10.VTTCue && _0x1e8bfa.shim();
	}), _0xd88d7d = _0x45f355.WebVTT, _0x247e76 = _0x45f355.VTTCue, _0x59366f = _0x45f355.VTTRegion;
	function _0x404bce(_0x45a8ec, _0xa92591, _0x2ca873, _0x3b9cdf) {
		var _0x4a2df8 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {}, _0x1fc305 = _0x45a8ec.textTracks();
		_0x4a2df8.kind = _0xa92591;
		_0x2ca873 && (_0x4a2df8.label = _0x2ca873);
		_0x3b9cdf && (_0x4a2df8.language = _0x3b9cdf);
		_0x4a2df8.tech = _0x45a8ec;
		var _0x27299e = new _0x39a6af.text.TrackClass(_0x4a2df8);
		return _0x1fc305.addTrack(_0x27299e), _0x27299e;
	}
	var _0x3ed9ba = function (_0x33ef49) {
		_0x24aed7(_0x3bac4e, _0x33ef49);
		function _0x3bac4e() {
			var _0x5c4d36 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _0x25bcc3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
			};
			_0x2ab3d2(this, _0x3bac4e);
			_0x5c4d36.reportTouchActivity = false;
			var _0x49409a = _0x245593(this, _0x33ef49.call(this, null, _0x5c4d36, _0x25bcc3));
			_0x49409a.hasStarted_ = false;
			_0x49409a.on('playing', function () {
				this.hasStarted_ = true;
			});
			_0x49409a.on('loadstart', function () {
				this.hasStarted_ = false;
			});
			_0x39a6af.names.forEach(function (_0x1c56a2) {
				var _0x181ef9 = _0x39a6af[_0x1c56a2];
				_0x5c4d36 && _0x5c4d36[_0x181ef9.getterName] && (_0x49409a[_0x181ef9.privateName] = _0x5c4d36[_0x181ef9.getterName]);
			});
			!_0x49409a.featuresProgressEvents && _0x49409a.manualProgressOn();
			!_0x49409a.featuresTimeupdateEvents && _0x49409a.manualTimeUpdatesOn();
			[
				'Text',
				'Audio',
				'Video'
			].forEach(function (_0x4460c5) {
				_0x5c4d36['native' + _0x4460c5 + 'Tracks'] === false && (_0x49409a['featuresNative' + _0x4460c5 + 'Tracks'] = false);
			});
			if (_0x5c4d36.nativeCaptions === false || _0x5c4d36.nativeTextTracks === false) {
				_0x49409a.featuresNativeTextTracks = false;
			} else {
				(_0x5c4d36.nativeCaptions === true || _0x5c4d36.nativeTextTracks === true) && (_0x49409a.featuresNativeTextTracks = true);
			}
			return !_0x49409a.featuresNativeTextTracks && _0x49409a.emulateTextTracks(), _0x49409a.autoRemoteTextTracks_ = new _0x39a6af.text.ListClass(), _0x49409a.initTrackListeners(), !_0x5c4d36.nativeControlsForTouch && _0x49409a.emitTapEvents(), _0x49409a.constructor && (_0x49409a.name_ = _0x49409a.constructor.name || 'Unknown Tech'), _0x49409a;
		}
		return _0x3bac4e.prototype.triggerSourceset = function _0x51a3ae(_0x2e1d72) {
			var _0xa68d9e = this;
			!this.isReady_ && this.one('ready', function () {
				return _0xa68d9e.setTimeout(function () {
					return _0xa68d9e.triggerSourceset(_0x2e1d72);
				}, 1);
			});
			this.trigger({
				'src': _0x2e1d72,
				'type': 'sourceset'
			});
		}, _0x3bac4e.prototype.manualProgressOn = function _0x2ebd29() {
			this.on('durationchange', this.onDurationChange);
			this.manualProgress = true;
			this.one('ready', this.trackProgress);
		}, _0x3bac4e.prototype.manualProgressOff = function _0x518ed6() {
			this.manualProgress = false;
			this.stopTrackingProgress();
			this.off('durationchange', this.onDurationChange);
		}, _0x3bac4e.prototype.trackProgress = function _0x2d2038(_0x4476c7) {
			this.stopTrackingProgress();
			this.progressInterval = this.setInterval(_0x2e578a(this, function () {
				var _0x29811e = this.bufferedPercent();
				this.bufferedPercent_ !== _0x29811e && this.trigger('progress');
				this.bufferedPercent_ = _0x29811e;
				_0x29811e === 1 && this.stopTrackingProgress();
			}), 500);
		}, _0x3bac4e.prototype.onDurationChange = function _0x5dec1d(_0xbbd6f4) {
			this.duration_ = this.duration();
		}, _0x3bac4e.prototype.buffered = function _0x41721a() {
			return _0x5e23d4(0, 0);
		}, _0x3bac4e.prototype.bufferedPercent = function _0x3cf363() {
			return _0x30ed6c(this.buffered(), this.duration_);
		}, _0x3bac4e.prototype.stopTrackingProgress = function _0x2a67bf() {
			this.clearInterval(this.progressInterval);
		}, _0x3bac4e.prototype.manualTimeUpdatesOn = function _0x291c5c() {
			this.manualTimeUpdates = true;
			this.on('play', this.trackCurrentTime);
			this.on('pause', this.stopTrackingCurrentTime);
		}, _0x3bac4e.prototype.manualTimeUpdatesOff = function _0x1ee35b() {
			this.manualTimeUpdates = false;
			this.stopTrackingCurrentTime();
			this.off('play', this.trackCurrentTime);
			this.off('pause', this.stopTrackingCurrentTime);
		}, _0x3bac4e.prototype.trackCurrentTime = function _0x37d0a3() {
			this.currentTimeInterval && this.stopTrackingCurrentTime();
			this.currentTimeInterval = this.setInterval(function () {
				this.trigger({
					'type': 'timeupdate',
					'target': this,
					'manuallyTriggered': true
				});
			}, 250);
		}, _0x3bac4e.prototype.stopTrackingCurrentTime = function _0x1983f7() {
			this.clearInterval(this.currentTimeInterval);
			this.trigger({
				'type': 'timeupdate',
				'target': this,
				'manuallyTriggered': true
			});
		}, _0x3bac4e.prototype.dispose = function _0x48cae9() {
			this.clearTracks(_0x2edb32.names);
			this.manualProgress && this.manualProgressOff();
			this.manualTimeUpdates && this.manualTimeUpdatesOff();
			_0x33ef49.prototype.dispose.call(this);
		}, _0x3bac4e.prototype.clearTracks = function _0x20efea(_0x483408) {
			var _0x2bb572 = this;
			_0x483408 = [].concat(_0x483408);
			_0x483408.forEach(function (_0x1d8544) {
				var _0xb8a78e = _0x2bb572[_0x1d8544 + 'Tracks']() || [], _0x121bfc = _0xb8a78e.length;
				while (_0x121bfc--) {
					var _0x587744 = _0xb8a78e[_0x121bfc];
					_0x1d8544 === 'text' && _0x2bb572.removeRemoteTextTrack(_0x587744);
					_0xb8a78e.removeTrack(_0x587744);
				}
			});
		}, _0x3bac4e.prototype.cleanupAutoTextTracks = function _0x16c7d3() {
			var _0x45e34a = this.autoRemoteTextTracks_ || [], _0x1f6255 = _0x45e34a.length;
			while (_0x1f6255--) {
				var _0x3ca02c = _0x45e34a[_0x1f6255];
				this.removeRemoteTextTrack(_0x3ca02c);
			}
		}, _0x3bac4e.prototype.reset = function _0xebbcbf() {
		}, _0x3bac4e.prototype.error = function _0x435132(_0x3d5b58) {
			return _0x3d5b58 !== undefined && (this.error_ = new _0x41ecc7(_0x3d5b58), this.trigger('error')), this.error_;
		}, _0x3bac4e.prototype.played = function _0x1dd29b() {
			if (this.hasStarted_) {
				return _0x5e23d4(0, 0);
			}
			return _0x5e23d4();
		}, _0x3bac4e.prototype.setCurrentTime = function _0x52bd76() {
			this.manualTimeUpdates && this.trigger({
				'type': 'timeupdate',
				'target': this,
				'manuallyTriggered': true
			});
		}, _0x3bac4e.prototype.initTrackListeners = function _0x2a2cc1() {
			var _0x5d0a3f = this;
			_0x2edb32.names.forEach(function (_0x1600a3) {
				var _0x561caf = _0x2edb32[_0x1600a3], _0x42b5b7 = function _0x95a382() {
					_0x5d0a3f.trigger(_0x1600a3 + 'trackchange');
				}, _0xea4974 = _0x5d0a3f[_0x561caf.getterName]();
				_0xea4974.addEventListener('removetrack', _0x42b5b7);
				_0xea4974.addEventListener('addtrack', _0x42b5b7);
				_0x5d0a3f.on('dispose', function () {
					_0xea4974.removeEventListener('removetrack', _0x42b5b7);
					_0xea4974.removeEventListener('addtrack', _0x42b5b7);
				});
			});
		}, _0x3bac4e.prototype.addWebVttScript_ = function _0x4468a4() {
			var _0x1438bf = this;
			if (_0x562c10.WebVTT) {
				return;
			}
			if (_0x5d8ee4.body.contains(this.el())) {
				if (!this.options_['vtt.js'] && _0x15e475(_0x45f355) && Object.keys(_0x45f355).length > 0) {
					this.trigger('vttjsloaded');
					return;
				}
				var _0x8d6a1e = _0x5d8ee4.createElement('script');
				_0x8d6a1e.src = this.options_['vtt.js'] || 'https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js';
				_0x8d6a1e.onload = function () {
					_0x1438bf.trigger('vttjsloaded');
				};
				_0x8d6a1e.onerror = function () {
					_0x1438bf.trigger('vttjserror');
				};
				this.on('dispose', function () {
					_0x8d6a1e.onload = null;
					_0x8d6a1e.onerror = null;
				});
				_0x562c10.WebVTT = true;
				this.el().parentNode.appendChild(_0x8d6a1e);
			} else {
				this.ready(this.addWebVttScript_);
			}
		}, _0x3bac4e.prototype.emulateTextTracks = function _0x285a70() {
			var _0x221f07 = this, _0x2d77c3 = this.textTracks(), _0x3a4083 = this.remoteTextTracks(), _0x4640c3 = function _0x3a0d6b(_0x27215f) {
				return _0x2d77c3.addTrack(_0x27215f.track);
			}, _0x1c2938 = function _0x2fd670(_0xd21233) {
				return _0x2d77c3.removeTrack(_0xd21233.track);
			};
			_0x3a4083.on('addtrack', _0x4640c3);
			_0x3a4083.on('removetrack', _0x1c2938);
			this.addWebVttScript_();
			var _0x3474e0 = function _0x46dd6c() {
				return _0x221f07.trigger('texttrackchange');
			}, _0x139223 = function _0x106d4c() {
				_0x3474e0();
				for (var _0x3e3a6e = 0; _0x3e3a6e < _0x2d77c3.length; _0x3e3a6e++) {
					var _0x4018c1 = _0x2d77c3[_0x3e3a6e];
					_0x4018c1.removeEventListener('cuechange', _0x3474e0);
					_0x4018c1.mode === 'showing' && _0x4018c1.addEventListener('cuechange', _0x3474e0);
				}
			};
			_0x139223();
			_0x2d77c3.addEventListener('change', _0x139223);
			_0x2d77c3.addEventListener('addtrack', _0x139223);
			_0x2d77c3.addEventListener('removetrack', _0x139223);
			this.on('dispose', function () {
				_0x3a4083.off('addtrack', _0x4640c3);
				_0x3a4083.off('removetrack', _0x1c2938);
				_0x2d77c3.removeEventListener('change', _0x139223);
				_0x2d77c3.removeEventListener('addtrack', _0x139223);
				_0x2d77c3.removeEventListener('removetrack', _0x139223);
				for (var _0x1c5636 = 0; _0x1c5636 < _0x2d77c3.length; _0x1c5636++) {
					var _0x365b8c = _0x2d77c3[_0x1c5636];
					_0x365b8c.removeEventListener('cuechange', _0x3474e0);
				}
			});
		}, _0x3bac4e.prototype.addTextTrack = function _0x25eb9a(_0x42b6b7, _0x3ecc95, _0x432cf5) {
			if (!_0x42b6b7) {
				throw new Error('TextTrack kind is required but was not provided');
			}
			return _0x404bce(this, _0x42b6b7, _0x3ecc95, _0x432cf5);
		}, _0x3bac4e.prototype.createRemoteTextTrack = function _0x4c94ff(_0x5490e2) {
			var _0x3af273 = _0x47ec58(_0x5490e2, { 'tech': this });
			return new _0x33729a.remoteTextEl.TrackClass(_0x3af273);
		}, _0x3bac4e.prototype.addRemoteTextTrack = function _0x95e630() {
			var _0x404297 = this, _0x3e5210 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _0xbf5b93 = arguments[1], _0xceb31b = this.createRemoteTextTrack(_0x3e5210);
			return _0xbf5b93 !== true && _0xbf5b93 !== false && (_0x50330f.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), _0xbf5b93 = true), this.remoteTextTrackEls().addTrackElement_(_0xceb31b), this.remoteTextTracks().addTrack(_0xceb31b.track), _0xbf5b93 !== true && this.ready(function () {
				return _0x404297.autoRemoteTextTracks_.addTrack(_0xceb31b.track);
			}), _0xceb31b;
		}, _0x3bac4e.prototype.removeRemoteTextTrack = function _0x5c3d42(_0x463fd4) {
			var _0x5a27c8 = this.remoteTextTrackEls().getTrackElementByTrack_(_0x463fd4);
			this.remoteTextTrackEls().removeTrackElement_(_0x5a27c8);
			this.remoteTextTracks().removeTrack(_0x463fd4);
			this.autoRemoteTextTracks_.removeTrack(_0x463fd4);
		}, _0x3bac4e.prototype.getVideoPlaybackQuality = function _0x52f35e() {
			return {};
		}, _0x3bac4e.prototype.setPoster = function _0x245f26() {
		}, _0x3bac4e.prototype.playsinline = function _0x3d27b4() {
		}, _0x3bac4e.prototype.setPlaysinline = function _0x5ce168() {
		}, _0x3bac4e.prototype.overrideNativeAudioTracks = function _0x4fe6a9() {
		}, _0x3bac4e.prototype.overrideNativeVideoTracks = function _0x588ff3() {
		}, _0x3bac4e.prototype.canPlayType = function _0x2f866c() {
			return '';
		}, _0x3bac4e.canPlayType = function _0x41a622() {
			return '';
		}, _0x3bac4e.canPlaySource = function _0x2e8c9d(_0x41636, _0x4fa56c) {
			return _0x3bac4e.canPlayType(_0x41636.type);
		}, _0x3bac4e.isTech = function _0x343b35(_0x29c315) {
			return _0x29c315.prototype instanceof _0x3bac4e || _0x29c315 instanceof _0x3bac4e || _0x29c315 === _0x3bac4e;
		}, _0x3bac4e.registerTech = function _0x137714(_0x8ec065, _0x56584f) {
			!_0x3bac4e.techs_ && (_0x3bac4e.techs_ = {});
			if (!_0x3bac4e.isTech(_0x56584f)) {
				throw new Error('Tech ' + _0x8ec065 + ' must be a Tech');
			}
			if (!_0x3bac4e.canPlayType) {
				throw new Error('Techs must have a static canPlayType method on them');
			}
			if (!_0x3bac4e.canPlaySource) {
				throw new Error('Techs must have a static canPlaySource method on them');
			}
			return _0x8ec065 = _0x104f7f(_0x8ec065), _0x3bac4e.techs_[_0x8ec065] = _0x56584f, _0x8ec065 !== 'Tech' && _0x3bac4e.defaultTechOrder_.push(_0x8ec065), _0x56584f;
		}, _0x3bac4e.getTech = function _0xbf4fd6(_0x676ca3) {
			if (!_0x676ca3) {
				return;
			}
			_0x676ca3 = _0x104f7f(_0x676ca3);
			if (_0x3bac4e.techs_ && _0x3bac4e.techs_[_0x676ca3]) {
				return _0x3bac4e.techs_[_0x676ca3];
			}
			if (_0x562c10 && _0x562c10.videojs && _0x562c10.videojs[_0x676ca3]) {
				return _0x50330f.warn('The ' + _0x676ca3 + ' tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)'), _0x562c10.videojs[_0x676ca3];
			}
		}, _0x3bac4e;
	}(_0x197ed7);
	_0x39a6af.names.forEach(function (_0x4e2f2c) {
		var _0x56b7fe = _0x39a6af[_0x4e2f2c];
		_0x3ed9ba.prototype[_0x56b7fe.getterName] = function () {
			return this[_0x56b7fe.privateName] = this[_0x56b7fe.privateName] || new _0x56b7fe.ListClass(), this[_0x56b7fe.privateName];
		};
	});
	_0x3ed9ba.prototype.featuresVolumeControl = true;
	_0x3ed9ba.prototype.featuresMuteControl = true;
	_0x3ed9ba.prototype.featuresFullscreenResize = false;
	_0x3ed9ba.prototype.featuresPlaybackRate = false;
	_0x3ed9ba.prototype.featuresProgressEvents = false;
	_0x3ed9ba.prototype.featuresSourceset = false;
	_0x3ed9ba.prototype.featuresTimeupdateEvents = false;
	_0x3ed9ba.prototype.featuresNativeTextTracks = false;
	_0x3ed9ba.withSourceHandlers = function (_0xabd82c) {
		_0xabd82c.registerSourceHandler = function (_0x6474c8, _0x565631) {
			var _0x3c34dd = _0xabd82c.sourceHandlers;
			!_0x3c34dd && (_0x3c34dd = _0xabd82c.sourceHandlers = []);
			_0x565631 === undefined && (_0x565631 = _0x3c34dd.length);
			_0x3c34dd.splice(_0x565631, 0, _0x6474c8);
		};
		_0xabd82c.canPlayType = function (_0xc8a3af) {
			var _0x20d300 = _0xabd82c.sourceHandlers || [], _0x43e8f8 = void 0;
			for (var _0x3d261e = 0; _0x3d261e < _0x20d300.length; _0x3d261e++) {
				_0x43e8f8 = _0x20d300[_0x3d261e].canPlayType(_0xc8a3af);
				if (_0x43e8f8) {
					return _0x43e8f8;
				}
			}
			return '';
		};
		_0xabd82c.selectSourceHandler = function (_0x4f70ba, _0x2af747) {
			var _0x21debd = _0xabd82c.sourceHandlers || [], _0x9099ea = void 0;
			for (var _0x480baa = 0; _0x480baa < _0x21debd.length; _0x480baa++) {
				_0x9099ea = _0x21debd[_0x480baa].canHandleSource(_0x4f70ba, _0x2af747);
				if (_0x9099ea) {
					return _0x21debd[_0x480baa];
				}
			}
			return null;
		};
		_0xabd82c.canPlaySource = function (_0x470004, _0x38a6f3) {
			var _0x4e2cf9 = _0xabd82c.selectSourceHandler(_0x470004, _0x38a6f3);
			if (_0x4e2cf9) {
				return _0x4e2cf9.canHandleSource(_0x470004, _0x38a6f3);
			}
			return '';
		};
		var _0x5c713b = [
			'seekable',
			'seeking',
			'duration'
		];
		_0x5c713b.forEach(function (_0x48c664) {
			var _0x4f209d = this[_0x48c664];
			if (typeof _0x4f209d !== 'function') {
				return;
			}
			this[_0x48c664] = function () {
				if (this.sourceHandler_ && this.sourceHandler_[_0x48c664]) {
					return this.sourceHandler_[_0x48c664].apply(this.sourceHandler_, arguments);
				}
				return _0x4f209d.apply(this, arguments);
			};
		}, _0xabd82c.prototype);
		_0xabd82c.prototype.setSource = function (_0x1cc00b) {
			var _0x35e4d6 = _0xabd82c.selectSourceHandler(_0x1cc00b, this.options_);
			!_0x35e4d6 && (_0xabd82c.nativeSourceHandler ? _0x35e4d6 = _0xabd82c.nativeSourceHandler : _0x50330f.error('No source handler found for the current source.'));
			this.disposeSourceHandler();
			this.off('dispose', this.disposeSourceHandler);
			_0x35e4d6 !== _0xabd82c.nativeSourceHandler && (this.currentSource_ = _0x1cc00b);
			this.sourceHandler_ = _0x35e4d6.handleSource(_0x1cc00b, this, this.options_);
			this.on('dispose', this.disposeSourceHandler);
		};
		_0xabd82c.prototype.disposeSourceHandler = function () {
			this.currentSource_ && (this.clearTracks([
				'audio',
				'video'
			]), this.currentSource_ = null);
			this.cleanupAutoTextTracks();
			this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null);
		};
	};
	_0x197ed7.registerComponent('Tech', _0x3ed9ba);
	_0x3ed9ba.registerTech('Tech', _0x3ed9ba);
	_0x3ed9ba.defaultTechOrder_ = [];
	var _0x5b4eaa = { _0x372c83: _0x5b4eaa[_0x372c83] || [] }, _0x5a43aa = {}, _0x1ae7e6 = {};
	function _0x438703(_0x372c83, _0x5c8315) {
		_0x5b4eaa[_0x372c83].push(_0x5c8315);
	}
	function _0x34d5f9(_0x3e4a3c, _0x504409, _0xfb8a83) {
		_0x3e4a3c.setTimeout(function () {
			return _0x1d931a(_0x504409, _0x5b4eaa[_0x504409.type], _0xfb8a83, _0x3e4a3c);
		}, 1);
	}
	function _0x1f3438(_0x5c2174, _0x4a75e4) {
		_0x5c2174.forEach(function (_0x4b31ae) {
			return _0x4b31ae.setTech && _0x4b31ae.setTech(_0x4a75e4);
		});
	}
	function _0x3b1f30(_0x36b8fe, _0x5256f6, _0x5036d1) {
		return _0x36b8fe.reduceRight(_0x4b9f91(_0x5036d1), _0x5256f6[_0x5036d1]());
	}
	function _0x9aba11(_0x9c928f, _0x127f2d, _0x1b269a, _0x134935) {
		return _0x127f2d[_0x1b269a](_0x9c928f.reduce(_0x4b9f91(_0x1b269a), _0x134935));
	}
	function _0x298403(_0xffc93a, _0x1b603c, _0x12666b) {
		var _0x11d843 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null, _0x42ac35 = 'call' + _0x104f7f(_0x12666b), _0x4738be = _0xffc93a.reduce(_0x4b9f91(_0x42ac35), _0x11d843), _0x1db884 = _0x4738be === _0x1ae7e6, _0x514e79 = _0x1db884 ? null : _0x1b603c[_0x12666b](_0x4738be);
		return _0x3dcafa(_0xffc93a, _0x12666b, _0x514e79, _0x1db884), _0x514e79;
	}
	function _0x4b9f91(_0x25269c) {
		return function (_0x2e7df2, _0x554245) {
			if (_0x2e7df2 === _0x1ae7e6) {
				return _0x1ae7e6;
			}
			if (_0x554245[_0x25269c]) {
				return _0x554245[_0x25269c](_0x2e7df2);
			}
			return _0x2e7df2;
		};
	}
	function _0x3dcafa(_0x130859, _0xd20e7, _0x34012c, _0x5f2252) {
		for (var _0x10d30f = _0x130859.length - 1; _0x10d30f >= 0; _0x10d30f--) {
			var _0x263cda = _0x130859[_0x10d30f];
			_0x263cda[_0xd20e7] && _0x263cda[_0xd20e7](_0x5f2252, _0x34012c);
		}
	}
	function _0x2abb65(_0x595de0) {
		_0x5a43aa[_0x595de0.id()] = null;
	}
	function _0x553447(_0x57fdfd, _0x232444) {
		var _0x1d6d3f = _0x5a43aa[_0x57fdfd.id()], _0x3ee8ef = null;
		if (_0x1d6d3f === undefined || _0x1d6d3f === null) {
			return _0x3ee8ef = _0x232444(_0x57fdfd), _0x5a43aa[_0x57fdfd.id()] = [[
				_0x232444,
				_0x3ee8ef
			]], _0x3ee8ef;
		}
		for (var _0x4dcc87 = 0; _0x4dcc87 < _0x1d6d3f.length; _0x4dcc87++) {
			var _0x102eb0 = _0x1d6d3f[_0x4dcc87], _0x3bc48f = _0x102eb0[0], _0x42a6d2 = _0x102eb0[1];
			if (_0x3bc48f !== _0x232444) {
				continue;
			}
			_0x3ee8ef = _0x42a6d2;
		}
		return _0x3ee8ef === null && (_0x3ee8ef = _0x232444(_0x57fdfd), _0x1d6d3f.push([
			_0x232444,
			_0x3ee8ef
		])), _0x3ee8ef;
	}
	function _0x1d931a() {
		var _0x5bd669 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _0x46e759 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [], _0x17083c = arguments[2], _0x85f6e6 = arguments[3], _0x59d731 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [], _0x38c67a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false, _0x4e29ce = _0x46e759[0], _0x589349 = _0x46e759.slice(1);
		if (typeof _0x4e29ce === 'string') {
			_0x1d931a(_0x5bd669, _0x5b4eaa[_0x4e29ce], _0x17083c, _0x85f6e6, _0x59d731, _0x38c67a);
		} else {
			if (_0x4e29ce) {
				var _0x16f78d = _0x553447(_0x85f6e6, _0x4e29ce);
				if (!_0x16f78d.setSource) {
					return _0x59d731.push(_0x16f78d), _0x1d931a(_0x5bd669, _0x589349, _0x17083c, _0x85f6e6, _0x59d731, _0x38c67a);
				}
				_0x16f78d.setSource(_0x2476f0({}, _0x5bd669), function (_0x2eb3b7, _0x22eae2) {
					if (_0x2eb3b7) {
						return _0x1d931a(_0x5bd669, _0x589349, _0x17083c, _0x85f6e6, _0x59d731, _0x38c67a);
					}
					_0x59d731.push(_0x16f78d);
					_0x1d931a(_0x22eae2, _0x5bd669.type === _0x22eae2.type ? _0x589349 : _0x5b4eaa[_0x22eae2.type], _0x17083c, _0x85f6e6, _0x59d731, _0x38c67a);
				});
			} else {
				if (_0x589349.length) {
					_0x1d931a(_0x5bd669, _0x589349, _0x17083c, _0x85f6e6, _0x59d731, _0x38c67a);
				} else {
					_0x38c67a ? _0x17083c(_0x5bd669, _0x59d731) : _0x1d931a(_0x5bd669, _0x5b4eaa['*'], _0x17083c, _0x85f6e6, _0x59d731, true);
				}
			}
		}
	}
	var _0x58234f = {
		'opus': 'video/ogg',
		'ogv': 'video/ogg',
		'mp4': 'video/mp4',
		'mov': 'video/mp4',
		'm4v': 'video/mp4',
		'mkv': 'video/x-matroska',
		'mp3': 'audio/mpeg',
		'aac': 'audio/aac',
		'oga': 'audio/ogg',
		'm3u8': 'application/x-mpegURL'
	}, _0x152da3 = function _0x49512b() {
		var _0x7aad3e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '', _0x583fcc = _0x4f9541(_0x7aad3e), _0x5f440a = _0x58234f[_0x583fcc.toLowerCase()];
		return _0x5f440a || '';
	}, _0x5536fe = function _0x33a675(_0x9b32a0, _0x55a990) {
		if (!_0x55a990) {
			return '';
		}
		if (_0x9b32a0.cache_.source.src === _0x55a990 && _0x9b32a0.cache_.source.type) {
			return _0x9b32a0.cache_.source.type;
		}
		var _0x30d765 = _0x9b32a0.cache_.sources.filter(function (_0x490323) {
			return _0x490323.src === _0x55a990;
		});
		if (_0x30d765.length) {
			return _0x30d765[0].type;
		}
		var _0x354752 = _0x9b32a0['$$']('source');
		for (var _0x2018c9 = 0; _0x2018c9 < _0x354752.length; _0x2018c9++) {
			var _0x20941c = _0x354752[_0x2018c9];
			if (_0x20941c.type && _0x20941c.src && _0x20941c.src === _0x55a990) {
				return _0x20941c.type;
			}
		}
		return _0x152da3(_0x55a990);
	}, _0x5aa643 = function _0xb9b55c(_0x72eb58) {
		if (Array.isArray(_0x72eb58)) {
			var _0x981808 = [];
			_0x72eb58.forEach(function (_0x553bf5) {
				_0x553bf5 = _0xb9b55c(_0x553bf5);
				if (Array.isArray(_0x553bf5)) {
					_0x981808 = _0x981808.concat(_0x553bf5);
				} else {
					_0x2d2c83(_0x553bf5) && _0x981808.push(_0x553bf5);
				}
			});
			_0x72eb58 = _0x981808;
		} else {
			if (typeof _0x72eb58 === 'string' && _0x72eb58.trim()) {
				_0x72eb58 = [_0x2d09d5({ 'src': _0x72eb58 })];
			} else {
				_0x2d2c83(_0x72eb58) && typeof _0x72eb58.src === 'string' && _0x72eb58.src && _0x72eb58.src.trim() ? _0x72eb58 = [_0x2d09d5(_0x72eb58)] : _0x72eb58 = [];
			}
		}
		return _0x72eb58;
	};
	function _0x2d09d5(_0x5ef730) {
		var _0x5eaf08 = _0x152da3(_0x5ef730.src);
		return !_0x5ef730.type && _0x5eaf08 && (_0x5ef730.type = _0x5eaf08), _0x5ef730;
	}
	var _0x382380 = function (_0x2421a4) {
		_0x24aed7(_0x1d9532, _0x2421a4);
		function _0x1d9532(_0x54012e, _0x42b209, _0x5065cd) {
			_0x2ab3d2(this, _0x1d9532);
			var _0x54ae39 = _0x47ec58({ 'createEl': false }, _0x42b209), _0x390bab = _0x245593(this, _0x2421a4.call(this, _0x54012e, _0x54ae39, _0x5065cd));
			if (!_0x42b209.playerOptions.sources || _0x42b209.playerOptions.sources.length === 0) {
				for (var _0x5fbffb = 0, _0x49f58c = _0x42b209.playerOptions.techOrder; _0x5fbffb < _0x49f58c.length; _0x5fbffb++) {
					var _0x4a80d3 = _0x104f7f(_0x49f58c[_0x5fbffb]), _0x4e8306 = _0x3ed9ba.getTech(_0x4a80d3);
					!_0x4a80d3 && (_0x4e8306 = _0x197ed7.getComponent(_0x4a80d3));
					if (_0x4e8306 && _0x4e8306.isSupported()) {
						_0x54012e.loadTech_(_0x4a80d3);
						break;
					}
				}
			} else {
				_0x54012e.src(_0x42b209.playerOptions.sources);
			}
			return _0x390bab;
		}
		return _0x1d9532;
	}(_0x197ed7);
	_0x197ed7.registerComponent('MediaLoader', _0x382380);
	var _0x347db1 = function (_0x2c5fed) {
		_0x24aed7(_0x5d0a71, _0x2c5fed);
		function _0x5d0a71(_0x377166, _0x38a9ab) {
			_0x2ab3d2(this, _0x5d0a71);
			var _0x439984 = _0x245593(this, _0x2c5fed.call(this, _0x377166, _0x38a9ab));
			return _0x439984.emitTapEvents(), _0x439984.enable(), _0x439984;
		}
		return _0x5d0a71.prototype.createEl = function _0x120c07() {
			var _0x287365 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div', _0x202da0 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _0x57b75b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			_0x202da0 = _0x2476f0({
				'innerHTML': '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
				'className': this.buildCSSClass(),
				'tabIndex': 0
			}, _0x202da0);
			_0x287365 === 'button' && _0x50330f.error('Creating a ClickableComponent with an HTML element of ' + _0x287365 + ' is not supported; use a Button instead.');
			_0x57b75b = _0x2476f0({ 'role': 'button' }, _0x57b75b);
			this.tabIndex_ = _0x202da0.tabIndex;
			var _0x341370 = _0x2c5fed.prototype.createEl.call(this, _0x287365, _0x202da0, _0x57b75b);
			return this.createControlTextEl(_0x341370), _0x341370;
		}, _0x5d0a71.prototype.dispose = function _0x292924() {
			this.controlTextEl_ = null;
			_0x2c5fed.prototype.dispose.call(this);
		}, _0x5d0a71.prototype.createControlTextEl = function _0xaa041b(_0x5ceb8e) {
			return this.controlTextEl_ = _0x30c03e('span', { 'className': 'vjs-control-text' }, { 'aria-live': 'polite' }), _0x5ceb8e && _0x5ceb8e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, _0x5ceb8e), this.controlTextEl_;
		}, _0x5d0a71.prototype.controlText = function _0x48c9c9(_0x17e2c9) {
			var _0x10ea52 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.el();
			if (_0x17e2c9 === undefined) {
				return this.controlText_ || 'Need Text';
			}
			var _0x5941d8 = this.localize(_0x17e2c9);
			this.controlText_ = _0x17e2c9;
			_0x18dd6e(this.controlTextEl_, _0x5941d8);
			!this.nonIconControl && _0x10ea52.setAttribute('title', _0x5941d8);
		}, _0x5d0a71.prototype.buildCSSClass = function _0x569e1e() {
			return 'vjs-control vjs-button ' + _0x2c5fed.prototype.buildCSSClass.call(this);
		}, _0x5d0a71.prototype.enable = function _0x2da2a9() {
			!this.enabled_ && (this.enabled_ = true, this.removeClass('vjs-disabled'), this.el_.setAttribute('aria-disabled', 'false'), typeof this.tabIndex_ !== 'undefined' && this.el_.setAttribute('tabIndex', this.tabIndex_), this.on([
				'tap',
				'click'
			], this.handleClick), this.on('focus', this.handleFocus), this.on('blur', this.handleBlur));
		}, _0x5d0a71.prototype.disable = function _0x489c08() {
			this.enabled_ = false;
			this.addClass('vjs-disabled');
			this.el_.setAttribute('aria-disabled', 'true');
			typeof this.tabIndex_ !== 'undefined' && this.el_.removeAttribute('tabIndex');
			this.off([
				'tap',
				'click'
			], this.handleClick);
			this.off('focus', this.handleFocus);
			this.off('blur', this.handleBlur);
		}, _0x5d0a71.prototype.handleClick = function _0x5d0604(_0x1f5732) {
		}, _0x5d0a71.prototype.handleFocus = function _0x3e5ddb(_0x15b789) {
			_0x7b0228(_0x5d8ee4, 'keydown', _0x2e578a(this, this.handleKeyPress));
		}, _0x5d0a71.prototype.handleKeyPress = function _0x47e54b(_0x19c0e0) {
			if (_0x19c0e0.which === 32 || _0x19c0e0.which === 13) {
				_0x19c0e0.preventDefault();
				this.trigger('click');
			} else {
				_0x2c5fed.prototype.handleKeyPress && _0x2c5fed.prototype.handleKeyPress.call(this, _0x19c0e0);
			}
		}, _0x5d0a71.prototype.handleBlur = function _0x418040(_0xfe1b84) {
			_0x706013(_0x5d8ee4, 'keydown', _0x2e578a(this, this.handleKeyPress));
		}, _0x5d0a71;
	}(_0x197ed7);
	_0x197ed7.registerComponent('ClickableComponent', _0x347db1);
	var _0x1de70a = function (_0x36d069) {
		_0x24aed7(_0x1fca15, _0x36d069);
		function _0x1fca15(_0x3e8d86, _0x3e9d9f) {
			_0x2ab3d2(this, _0x1fca15);
			var _0x2c9175 = _0x245593(this, _0x36d069.call(this, _0x3e8d86, _0x3e9d9f));
			return _0x2c9175.update(), _0x3e8d86.on('posterchange', _0x2e578a(_0x2c9175, _0x2c9175.update)), _0x2c9175;
		}
		return _0x1fca15.prototype.dispose = function _0x138ab7() {
			this.player().off('posterchange', this.update);
			_0x36d069.prototype.dispose.call(this);
		}, _0x1fca15.prototype.createEl = function _0x55a454() {
			var _0x49300d = _0x30c03e('div', {
				'className': 'vjs-poster',
				'tabIndex': -1
			});
			return _0x49300d;
		}, _0x1fca15.prototype.update = function _0xaed8b3(_0x3459ed) {
			var _0x1bb69c = this.player().poster();
			this.setSrc(_0x1bb69c);
			_0x1bb69c ? this.show() : this.hide();
		}, _0x1fca15.prototype.setSrc = function _0x26b2a7(_0x4a8058) {
			var _0x28c1dd = '';
			_0x4a8058 && (_0x28c1dd = 'url("' + _0x4a8058 + '")');
			this.el_.style.backgroundImage = _0x28c1dd;
		}, _0x1fca15.prototype.handleClick = function _0x195d4c(_0x21a904) {
			if (!this.player_.controls()) {
				return;
			}
			this.player_.paused() ? _0x5def48(this.player_.play()) : this.player_.pause();
		}, _0x1fca15;
	}(_0x347db1);
	_0x197ed7.registerComponent('PosterImage', _0x1de70a);
	var _0x4ed9cc = '#222', _0x33a78f = '#ccc', _0x304469 = {
		'monospace': 'monospace',
		'sansSerif': 'sans-serif',
		'serif': 'serif',
		'monospaceSansSerif': '"Andale Mono", "Lucida Console", monospace',
		'monospaceSerif': '"Courier New", monospace',
		'proportionalSansSerif': 'sans-serif',
		'proportionalSerif': 'serif',
		'casual': '"Comic Sans MS", Impact, fantasy',
		'script': '"Monotype Corsiva", cursive',
		'smallcaps': '"Andale Mono", "Lucida Console", monospace, sans-serif'
	};
	function _0x117bef(_0x1a05ea, _0x345839) {
		var _0x401c86 = void 0;
		if (_0x1a05ea.length === 4) {
			_0x401c86 = _0x1a05ea[1] + _0x1a05ea[1] + _0x1a05ea[2] + _0x1a05ea[2] + _0x1a05ea[3] + _0x1a05ea[3];
		} else {
			if (_0x1a05ea.length === 7) {
				_0x401c86 = _0x1a05ea.slice(1);
			} else {
				throw new Error('Invalid color code provided, ' + _0x1a05ea + '; must be formatted as e.g. #f0e or #f604e2.');
			}
		}
		return 'rgba(' + parseInt(_0x401c86.slice(0, 2), 16) + ',' + parseInt(_0x401c86.slice(2, 4), 16) + ',' + parseInt(_0x401c86.slice(4, 6), 16) + ',' + _0x345839 + ')';
	}
	function _0x5e87f9(_0x26b0c8, _0x5a93ac, _0x37b6ce) {
		try {
			_0x26b0c8.style[_0x5a93ac] = _0x37b6ce;
		} catch (_0x2e19e8) {
			return;
		}
	}
	var _0x4ed1a5 = function (_0x36e6df) {
		_0x24aed7(_0x3f3be6, _0x36e6df);
		function _0x3f3be6(_0x3b36aa, _0x1673d5, _0x2b79d2) {
			_0x2ab3d2(this, _0x3f3be6);
			var _0x22aab9 = _0x245593(this, _0x36e6df.call(this, _0x3b36aa, _0x1673d5, _0x2b79d2));
			return _0x3b36aa.on('loadstart', _0x2e578a(_0x22aab9, _0x22aab9.toggleDisplay)), _0x3b36aa.on('texttrackchange', _0x2e578a(_0x22aab9, _0x22aab9.updateDisplay)), _0x3b36aa.on('loadstart', _0x2e578a(_0x22aab9, _0x22aab9.preselectTrack)), _0x3b36aa.ready(_0x2e578a(_0x22aab9, function () {
				if (_0x3b36aa.tech_ && _0x3b36aa.tech_.featuresNativeTextTracks) {
					this.hide();
					return;
				}
				_0x3b36aa.on('fullscreenchange', _0x2e578a(this, this.updateDisplay));
				var _0x43d3da = this.options_.playerOptions.tracks || [];
				for (var _0x49dc3c = 0; _0x49dc3c < _0x43d3da.length; _0x49dc3c++) {
					this.player_.addRemoteTextTrack(_0x43d3da[_0x49dc3c], true);
				}
				this.preselectTrack();
			})), _0x22aab9;
		}
		return _0x3f3be6.prototype.preselectTrack = function _0x186c31() {
			var _0x41158a = this.player_.textTracks(), _0xae79c3 = this.player_.cache_.selectedLanguage, _0x1af414 = void 0, _0x2c6afb = void 0, _0x4ddfc0 = void 0;
			for (var _0x44813c = 0; _0x44813c < _0x41158a.length; _0x44813c++) {
				var _0xc5da8f = _0x41158a[_0x44813c];
				if (_0xae79c3 && _0xae79c3.enabled && _0xae79c3.language === _0xc5da8f.language) {
					if (_0xc5da8f.kind === _0xae79c3.kind) {
						_0x4ddfc0 = _0xc5da8f;
					} else {
						!_0x4ddfc0 && (_0x4ddfc0 = _0xc5da8f);
					}
				} else {
					if (_0xae79c3 && !_0xae79c3.enabled) {
						_0x4ddfc0 = null;
						_0x1af414 = null;
						_0x2c6afb = null;
					} else {
						if (_0xc5da8f.default) {
							if (_0xc5da8f.kind === 'descriptions' && !_0x1af414) {
								_0x1af414 = _0xc5da8f;
							} else {
								_0xc5da8f.kind in _0x3a7f10 && !_0x2c6afb && (_0x2c6afb = _0xc5da8f);
							}
						}
					}
				}
			}
			if (_0x4ddfc0) {
				_0x4ddfc0.mode = 'showing';
			} else {
				if (_0x2c6afb) {
					_0x2c6afb.mode = 'showing';
				} else {
					_0x1af414 && (_0x1af414.mode = 'showing');
				}
			}
		}, _0x3f3be6.prototype.toggleDisplay = function _0x3a2cbc() {
			this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show();
		}, _0x3f3be6.prototype.createEl = function _0x9295f3() {
			return _0x36e6df.prototype.createEl.call(this, 'div', { 'className': 'vjs-text-track-display' }, {
				'aria-live': 'off',
				'aria-atomic': 'true'
			});
		}, _0x3f3be6.prototype.clearDisplay = function _0x1d46db() {
			typeof _0x562c10.WebVTT === 'function' && _0x562c10.WebVTT.processCues(_0x562c10, [], this.el_);
		}, _0x3f3be6.prototype.updateDisplay = function _0x20a1b5() {
			var _0x5d8d91 = this.player_.textTracks();
			this.clearDisplay();
			var _0x4db581 = null, _0x1fb196 = null, _0x2ba5b2 = _0x5d8d91.length;
			while (_0x2ba5b2--) {
				var _0x4f346f = _0x5d8d91[_0x2ba5b2];
				_0x4f346f.mode === 'showing' && (_0x4f346f.kind === 'descriptions' ? _0x4db581 = _0x4f346f : _0x1fb196 = _0x4f346f);
			}
			if (_0x1fb196) {
				this.getAttribute('aria-live') !== 'off' && this.setAttribute('aria-live', 'off');
				this.updateForTrack(_0x1fb196);
			} else {
				_0x4db581 && (this.getAttribute('aria-live') !== 'assertive' && this.setAttribute('aria-live', 'assertive'), this.updateForTrack(_0x4db581));
			}
		}, _0x3f3be6.prototype.updateForTrack = function _0x2a7fe0(_0x1af3c9) {
			if (typeof _0x562c10.WebVTT !== 'function' || !_0x1af3c9.activeCues) {
				return;
			}
			var _0x17f7ed = [];
			for (var _0x352398 = 0; _0x352398 < _0x1af3c9.activeCues.length; _0x352398++) {
				_0x17f7ed.push(_0x1af3c9.activeCues[_0x352398]);
			}
			_0x562c10.WebVTT.processCues(_0x562c10, _0x17f7ed, this.el_);
			if (!this.player_.textTrackSettings) {
				return;
			}
			var _0x44124d = this.player_.textTrackSettings.getValues(), _0x3f6278 = _0x17f7ed.length;
			while (_0x3f6278--) {
				var _0xc42592 = _0x17f7ed[_0x3f6278];
				if (!_0xc42592) {
					continue;
				}
				var _0xae3a38 = _0xc42592.displayState;
				_0x44124d.color && (_0xae3a38.firstChild.style.color = _0x44124d.color);
				_0x44124d.textOpacity && _0x5e87f9(_0xae3a38.firstChild, 'color', _0x117bef(_0x44124d.color || '#fff', _0x44124d.textOpacity));
				_0x44124d.backgroundColor && (_0xae3a38.firstChild.style.backgroundColor = _0x44124d.backgroundColor);
				_0x44124d.backgroundOpacity && _0x5e87f9(_0xae3a38.firstChild, 'backgroundColor', _0x117bef(_0x44124d.backgroundColor || '#000', _0x44124d.backgroundOpacity));
				_0x44124d.windowColor && (_0x44124d.windowOpacity ? _0x5e87f9(_0xae3a38, 'backgroundColor', _0x117bef(_0x44124d.windowColor, _0x44124d.windowOpacity)) : _0xae3a38.style.backgroundColor = _0x44124d.windowColor);
				if (_0x44124d.edgeStyle) {
					if (_0x44124d.edgeStyle === 'dropshadow') {
						_0xae3a38.firstChild.style.textShadow = '2px 2px 3px ' + _0x4ed9cc + ', 2px 2px 4px ' + _0x4ed9cc + ', 2px 2px 5px ' + _0x4ed9cc;
					} else {
						if (_0x44124d.edgeStyle === 'raised') {
							_0xae3a38.firstChild.style.textShadow = '1px 1px ' + _0x4ed9cc + ', 2px 2px ' + _0x4ed9cc + ', 3px 3px ' + _0x4ed9cc;
						} else {
							if (_0x44124d.edgeStyle === 'depressed') {
								_0xae3a38.firstChild.style.textShadow = '1px 1px ' + _0x33a78f + ', 0 1px ' + _0x33a78f + ', -1px -1px ' + _0x4ed9cc + ', 0 -1px ' + _0x4ed9cc;
							} else {
								_0x44124d.edgeStyle === 'uniform' && (_0xae3a38.firstChild.style.textShadow = '0 0 4px ' + _0x4ed9cc + ', 0 0 4px ' + _0x4ed9cc + ', 0 0 4px ' + _0x4ed9cc + ', 0 0 4px ' + _0x4ed9cc);
							}
						}
					}
				}
				if (_0x44124d.fontPercent && _0x44124d.fontPercent !== 1) {
					var _0x5abf0f = _0x562c10.parseFloat(_0xae3a38.style.fontSize);
					_0xae3a38.style.fontSize = _0x5abf0f * _0x44124d.fontPercent + 'px';
					_0xae3a38.style.height = 'auto';
					_0xae3a38.style.top = 'auto';
					_0xae3a38.style.bottom = '2px';
				}
				_0x44124d.fontFamily && _0x44124d.fontFamily !== 'default' && (_0x44124d.fontFamily === 'small-caps' ? _0xae3a38.firstChild.style.fontVariant = 'small-caps' : _0xae3a38.firstChild.style.fontFamily = _0x304469[_0x44124d.fontFamily]);
			}
		}, _0x3f3be6;
	}(_0x197ed7);
	_0x197ed7.registerComponent('TextTrackDisplay', _0x4ed1a5);
	var _0x3888d8 = function (_0x12717d) {
		_0x24aed7(_0x53b98e, _0x12717d);
		function _0x53b98e() {
			return _0x2ab3d2(this, _0x53b98e), _0x245593(this, _0x12717d.apply(this, arguments));
		}
		return _0x53b98e.prototype.createEl = function _0x5d1084() {
			var _0x240457 = this.player_.isAudio(), _0x441462 = this.localize(_0x240457 ? 'Audio Player' : 'Video Player'), _0x359bec = _0x30c03e('span', {
				'className': 'vjs-control-text',
				'innerHTML': this.localize('{1} is loading.', [_0x441462])
			}), _0x203521 = _0x12717d.prototype.createEl.call(this, 'div', {
				'className': 'vjs-loading-spinner',
				'dir': 'ltr'
			});
			return _0x203521.appendChild(_0x359bec), _0x203521;
		}, _0x53b98e;
	}(_0x197ed7);
	_0x197ed7.registerComponent('LoadingSpinner', _0x3888d8);
	var _0x186e86 = function (_0x21abf1) {
		_0x24aed7(_0x3d26bb, _0x21abf1);
		function _0x3d26bb() {
			return _0x2ab3d2(this, _0x3d26bb), _0x245593(this, _0x21abf1.apply(this, arguments));
		}
		return _0x3d26bb.prototype.createEl = function _0x3fb743(_0x2da5b9) {
			var _0x210ed8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _0x1e566d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			_0x2da5b9 = 'button';
			_0x210ed8 = _0x2476f0({
				'innerHTML': '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
				'className': this.buildCSSClass()
			}, _0x210ed8);
			_0x1e566d = _0x2476f0({ 'type': 'button' }, _0x1e566d);
			var _0x2adad2 = _0x197ed7.prototype.createEl.call(this, _0x2da5b9, _0x210ed8, _0x1e566d);
			return this.createControlTextEl(_0x2adad2), _0x2adad2;
		}, _0x3d26bb.prototype.addChild = function _0x4acba7(_0x45a480) {
			var _0x4f11e3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _0x1ae3fc = this.constructor.name;
			return _0x50330f.warn('Adding an actionable (user controllable) child to a Button (' + _0x1ae3fc + ') is not supported; use a ClickableComponent instead.'), _0x197ed7.prototype.addChild.call(this, _0x45a480, _0x4f11e3);
		}, _0x3d26bb.prototype.enable = function _0xb5ca3d() {
			_0x21abf1.prototype.enable.call(this);
			this.el_.removeAttribute('disabled');
		}, _0x3d26bb.prototype.disable = function _0x815f65() {
			_0x21abf1.prototype.disable.call(this);
			this.el_.setAttribute('disabled', 'disabled');
		}, _0x3d26bb.prototype.handleKeyPress = function _0x3646b0(_0xf44fb5) {
			if (_0xf44fb5.which === 32 || _0xf44fb5.which === 13) {
				return;
			}
			_0x21abf1.prototype.handleKeyPress.call(this, _0xf44fb5);
		}, _0x3d26bb;
	}(_0x347db1);
	_0x197ed7.registerComponent('Button', _0x186e86);
	var _0x472c02 = function (_0x4fbf8b) {
		_0x24aed7(_0x5d101e, _0x4fbf8b);
		function _0x5d101e(_0x1e8b12, _0x21c1a2) {
			_0x2ab3d2(this, _0x5d101e);
			var _0xd37c71 = _0x245593(this, _0x4fbf8b.call(this, _0x1e8b12, _0x21c1a2));
			return _0xd37c71.mouseused_ = false, _0xd37c71.on('mousedown', _0xd37c71.handleMouseDown), _0xd37c71;
		}
		return _0x5d101e.prototype.buildCSSClass = function _0x3f664e() {
			return 'vjs-big-play-button';
		}, _0x5d101e.prototype.handleClick = function _0x26ba13(_0x57b7ab) {
			var _0x38a156 = this.player_.play();
			if (this.mouseused_ && _0x57b7ab.clientX && _0x57b7ab.clientY) {
				_0x5def48(_0x38a156);
				return;
			}
			var _0x110699 = this.player_.getChild('controlBar'), _0x53c25a = _0x110699 && _0x110699.getChild('playToggle');
			if (!_0x53c25a) {
				this.player_.focus();
				return;
			}
			var _0xaf3c80 = function _0x2aebbe() {
				return _0x53c25a.focus();
			};
			_0x2939d9(_0x38a156) ? _0x38a156.then(_0xaf3c80, function () {
			}) : this.setTimeout(_0xaf3c80, 1);
		}, _0x5d101e.prototype.handleKeyPress = function _0x21ba89(_0x3e5193) {
			this.mouseused_ = false;
			_0x4fbf8b.prototype.handleKeyPress.call(this, _0x3e5193);
		}, _0x5d101e.prototype.handleMouseDown = function _0x2d7f07(_0x527f3d) {
			this.mouseused_ = true;
		}, _0x5d101e;
	}(_0x186e86);
	_0x472c02.prototype.controlText_ = 'Play Video';
	_0x197ed7.registerComponent('BigPlayButton', _0x472c02);
	var _0x4d63c2 = function (_0x43a656) {
		_0x24aed7(_0x5fac48, _0x43a656);
		function _0x5fac48(_0xec4c6d, _0x385c3e) {
			_0x2ab3d2(this, _0x5fac48);
			var _0x7b6c5a = _0x245593(this, _0x43a656.call(this, _0xec4c6d, _0x385c3e));
			return _0x7b6c5a.controlText(_0x385c3e && _0x385c3e.controlText || _0x7b6c5a.localize('Close')), _0x7b6c5a;
		}
		return _0x5fac48.prototype.buildCSSClass = function _0x39ff90() {
			return 'vjs-close-button ' + _0x43a656.prototype.buildCSSClass.call(this);
		}, _0x5fac48.prototype.handleClick = function _0x168ee0(_0x2e1cb0) {
			this.trigger({
				'type': 'close',
				'bubbles': false
			});
		}, _0x5fac48;
	}(_0x186e86);
	_0x197ed7.registerComponent('CloseButton', _0x4d63c2);
	var _0x51d601 = function (_0x5e0351) {
		_0x24aed7(_0x44212a, _0x5e0351);
		function _0x44212a(_0x1c6dd2, _0x5dd34f) {
			_0x2ab3d2(this, _0x44212a);
			var _0xc38522 = _0x245593(this, _0x5e0351.call(this, _0x1c6dd2, _0x5dd34f));
			return _0xc38522.on(_0x1c6dd2, 'play', _0xc38522.handlePlay), _0xc38522.on(_0x1c6dd2, 'pause', _0xc38522.handlePause), _0xc38522.on(_0x1c6dd2, 'ended', _0xc38522.handleEnded), _0xc38522;
		}
		return _0x44212a.prototype.buildCSSClass = function _0x3d3ec1() {
			return 'vjs-play-control ' + _0x5e0351.prototype.buildCSSClass.call(this);
		}, _0x44212a.prototype.handleClick = function _0x545aa3(_0x4dea90) {
			this.player_.paused() ? this.player_.play() : this.player_.pause();
		}, _0x44212a.prototype.handleSeeked = function _0x3c87ea(_0x37e0e7) {
			this.removeClass('vjs-ended');
			this.player_.paused() ? this.handlePause(_0x37e0e7) : this.handlePlay(_0x37e0e7);
		}, _0x44212a.prototype.handlePlay = function _0x4e9e33(_0x305060) {
			this.removeClass('vjs-ended');
			this.removeClass('vjs-paused');
			this.addClass('vjs-playing');
			this.controlText('Pause');
		}, _0x44212a.prototype.handlePause = function _0x449314(_0x5c2021) {
			this.removeClass('vjs-playing');
			this.addClass('vjs-paused');
			this.controlText('Play');
		}, _0x44212a.prototype.handleEnded = function _0x28b8c4(_0x3e1589) {
			this.removeClass('vjs-playing');
			this.addClass('vjs-ended');
			this.controlText('Replay');
			this.one(this.player_, 'seeked', this.handleSeeked);
		}, _0x44212a;
	}(_0x186e86);
	_0x51d601.prototype.controlText_ = 'Play';
	_0x197ed7.registerComponent('PlayToggle', _0x51d601);
	var _0x2cc196 = function _0x174b9d(_0x5e1fb2, _0xec881a) {
		_0x5e1fb2 = _0x5e1fb2 < 0 ? 0 : _0x5e1fb2;
		var _0x404f1e = Math.floor(_0x5e1fb2 % 60), _0x263cd9 = Math.floor(_0x5e1fb2 / 60 % 60), _0xfeba08 = Math.floor(_0x5e1fb2 / 3600), _0x422229 = Math.floor(_0xec881a / 60 % 60), _0x3b3e8a = Math.floor(_0xec881a / 3600);
		return (isNaN(_0x5e1fb2) || _0x5e1fb2 === Infinity) && (_0xfeba08 = _0x263cd9 = _0x404f1e = '-'), _0xfeba08 = _0xfeba08 > 0 || _0x3b3e8a > 0 ? _0xfeba08 + ':' : '', _0x263cd9 = ((_0xfeba08 || _0x422229 >= 10) && _0x263cd9 < 10 ? '0' + _0x263cd9 : _0x263cd9) + ':', _0x404f1e = _0x404f1e < 10 ? '0' + _0x404f1e : _0x404f1e, _0xfeba08 + _0x263cd9 + _0x404f1e;
	}, _0x4618da = _0x2cc196;
	function _0x53179b(_0x3922b6) {
		_0x4618da = _0x3922b6;
	}
	function _0x2c9647() {
		_0x4618da = _0x2cc196;
	}
	function _0x298a89(_0x5d396c) {
		var _0x5973b2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _0x5d396c;
		return _0x4618da(_0x5d396c, _0x5973b2);
	}
	var _0x156c31 = function (_0x451e13) {
		_0x24aed7(_0x33b71d, _0x451e13);
		function _0x33b71d(_0x541384, _0x646606) {
			_0x2ab3d2(this, _0x33b71d);
			var _0x5c0176 = _0x245593(this, _0x451e13.call(this, _0x541384, _0x646606));
			return _0x5c0176.throttledUpdateContent = _0x3b73a1(_0x2e578a(_0x5c0176, _0x5c0176.updateContent), 25), _0x5c0176.on(_0x541384, 'timeupdate', _0x5c0176.throttledUpdateContent), _0x5c0176;
		}
		return _0x33b71d.prototype.createEl = function _0x20f343(_0xd32373) {
			var _0x3a7b9e = this.buildCSSClass(), _0x20b157 = _0x451e13.prototype.createEl.call(this, 'div', {
				'className': _0x3a7b9e + ' vjs-time-control vjs-control',
				'innerHTML': '<span class="vjs-control-text">' + this.localize(this.labelText_) + '\xA0</span>'
			});
			return this.contentEl_ = _0x30c03e('span', { 'className': _0x3a7b9e + '-display' }, { 'aria-live': 'off' }), this.updateTextNode_(), _0x20b157.appendChild(this.contentEl_), _0x20b157;
		}, _0x33b71d.prototype.dispose = function _0x2f9a1c() {
			this.contentEl_ = null;
			this.textNode_ = null;
			_0x451e13.prototype.dispose.call(this);
		}, _0x33b71d.prototype.updateTextNode_ = function _0x3221de() {
			if (!this.contentEl_) {
				return;
			}
			while (this.contentEl_.firstChild) {
				this.contentEl_.removeChild(this.contentEl_.firstChild);
			}
			this.textNode_ = _0x5d8ee4.createTextNode(this.formattedTime_ || this.formatTime_(0));
			this.contentEl_.appendChild(this.textNode_);
		}, _0x33b71d.prototype.formatTime_ = function _0x21c175(_0x28a6ae) {
			return _0x298a89(_0x28a6ae);
		}, _0x33b71d.prototype.updateFormattedTime_ = function _0x32d697(_0x13864e) {
			var _0x30ad17 = this.formatTime_(_0x13864e);
			if (_0x30ad17 === this.formattedTime_) {
				return;
			}
			this.formattedTime_ = _0x30ad17;
			this.requestAnimationFrame(this.updateTextNode_);
		}, _0x33b71d.prototype.updateContent = function _0x55ee9a(_0x4298cb) {
		}, _0x33b71d;
	}(_0x197ed7);
	_0x156c31.prototype.labelText_ = 'Time';
	_0x156c31.prototype.controlText_ = 'Time';
	_0x197ed7.registerComponent('TimeDisplay', _0x156c31);
	var _0x21ed63 = function (_0x2fcafa) {
		_0x24aed7(_0x2fbbbc, _0x2fcafa);
		function _0x2fbbbc(_0x5dba2f, _0x3eff39) {
			_0x2ab3d2(this, _0x2fbbbc);
			var _0x23f7ba = _0x245593(this, _0x2fcafa.call(this, _0x5dba2f, _0x3eff39));
			return _0x23f7ba.on(_0x5dba2f, 'ended', _0x23f7ba.handleEnded), _0x23f7ba;
		}
		return _0x2fbbbc.prototype.buildCSSClass = function _0x4283ec() {
			return 'vjs-current-time';
		}, _0x2fbbbc.prototype.updateContent = function _0x1064c1(_0x44c7a7) {
			var _0x344fcd = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
			this.updateFormattedTime_(_0x344fcd);
		}, _0x2fbbbc.prototype.handleEnded = function _0x1de32e(_0x5d0efc) {
			if (!this.player_.duration()) {
				return;
			}
			this.updateFormattedTime_(this.player_.duration());
		}, _0x2fbbbc;
	}(_0x156c31);
	_0x21ed63.prototype.labelText_ = 'Current Time';
	_0x21ed63.prototype.controlText_ = 'Current Time';
	_0x197ed7.registerComponent('CurrentTimeDisplay', _0x21ed63);
	var _0x1bf024 = function (_0x21a309) {
		_0x24aed7(_0x437ca1, _0x21a309);
		function _0x437ca1(_0x34e862, _0x40c9fc) {
			_0x2ab3d2(this, _0x437ca1);
			var _0x15a38c = _0x245593(this, _0x21a309.call(this, _0x34e862, _0x40c9fc));
			return _0x15a38c.on(_0x34e862, 'durationchange', _0x15a38c.updateContent), _0x15a38c.on(_0x34e862, 'loadedmetadata', _0x15a38c.throttledUpdateContent), _0x15a38c;
		}
		return _0x437ca1.prototype.buildCSSClass = function _0x4fc140() {
			return 'vjs-duration';
		}, _0x437ca1.prototype.updateContent = function _0x443dee(_0x1b1223) {
			var _0x576a13 = this.player_.duration();
			_0x576a13 && this.duration_ !== _0x576a13 && (this.duration_ = _0x576a13, this.updateFormattedTime_(_0x576a13));
		}, _0x437ca1;
	}(_0x156c31);
	_0x1bf024.prototype.labelText_ = 'Duration';
	_0x1bf024.prototype.controlText_ = 'Duration';
	_0x197ed7.registerComponent('DurationDisplay', _0x1bf024);
	var _0x46a8ab = function (_0x29df17) {
		_0x24aed7(_0x1e7a61, _0x29df17);
		function _0x1e7a61() {
			return _0x2ab3d2(this, _0x1e7a61), _0x245593(this, _0x29df17.apply(this, arguments));
		}
		return _0x1e7a61.prototype.createEl = function _0x1bafc3() {
			return _0x29df17.prototype.createEl.call(this, 'div', {
				'className': 'vjs-time-control vjs-time-divider',
				'innerHTML': '<div><span>/</span></div>'
			});
		}, _0x1e7a61;
	}(_0x197ed7);
	_0x197ed7.registerComponent('TimeDivider', _0x46a8ab);
	var _0x396692 = function (_0x10d8ff) {
		_0x24aed7(_0x37ac6e, _0x10d8ff);
		function _0x37ac6e(_0x176d34, _0x4e2e9b) {
			_0x2ab3d2(this, _0x37ac6e);
			var _0x3cb1fc = _0x245593(this, _0x10d8ff.call(this, _0x176d34, _0x4e2e9b));
			return _0x3cb1fc.on(_0x176d34, 'durationchange', _0x3cb1fc.throttledUpdateContent), _0x3cb1fc.on(_0x176d34, 'ended', _0x3cb1fc.handleEnded), _0x3cb1fc;
		}
		return _0x37ac6e.prototype.buildCSSClass = function _0x54ab19() {
			return 'vjs-remaining-time';
		}, _0x37ac6e.prototype.formatTime_ = function _0x428c2c(_0x40e385) {
			return '-' + _0x10d8ff.prototype.formatTime_.call(this, _0x40e385);
		}, _0x37ac6e.prototype.updateContent = function _0x3cff2f(_0x30e777) {
			if (!this.player_.duration()) {
				return;
			}
			this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime());
		}, _0x37ac6e.prototype.handleEnded = function _0x2bb61e(_0x5d7dd4) {
			if (!this.player_.duration()) {
				return;
			}
			this.updateFormattedTime_(0);
		}, _0x37ac6e;
	}(_0x156c31);
	_0x396692.prototype.labelText_ = 'Remaining Time';
	_0x396692.prototype.controlText_ = 'Remaining Time';
	_0x197ed7.registerComponent('RemainingTimeDisplay', _0x396692);
	var _0x938be2 = function (_0x4b9ca0) {
		_0x24aed7(_0x5b2955, _0x4b9ca0);
		function _0x5b2955(_0xf3f6b9, _0x630b74) {
			_0x2ab3d2(this, _0x5b2955);
			var _0x813673 = _0x245593(this, _0x4b9ca0.call(this, _0xf3f6b9, _0x630b74));
			return _0x813673.updateShowing(), _0x813673.on(_0x813673.player(), 'durationchange', _0x813673.updateShowing), _0x813673;
		}
		return _0x5b2955.prototype.createEl = function _0x3974a8() {
			var _0x203d93 = _0x4b9ca0.prototype.createEl.call(this, 'div', { 'className': 'vjs-live-control vjs-control' });
			return this.contentEl_ = _0x30c03e('div', {
				'className': 'vjs-live-display',
				'innerHTML': '<span class="vjs-control-text">' + this.localize('Stream Type') + '\xA0</span>' + this.localize('LIVE')
			}, { 'aria-live': 'off' }), _0x203d93.appendChild(this.contentEl_), _0x203d93;
		}, _0x5b2955.prototype.dispose = function _0x2b73f1() {
			this.contentEl_ = null;
			_0x4b9ca0.prototype.dispose.call(this);
		}, _0x5b2955.prototype.updateShowing = function _0x19ef19(_0x149b72) {
			this.player().duration() === Infinity ? this.show() : this.hide();
		}, _0x5b2955;
	}(_0x197ed7);
	_0x197ed7.registerComponent('LiveDisplay', _0x938be2);
	var _0x122dc3 = function (_0x3208dd) {
		_0x24aed7(_0x420daf, _0x3208dd);
		function _0x420daf(_0x2002f1, _0x18b1d5) {
			_0x2ab3d2(this, _0x420daf);
			var _0x206263 = _0x245593(this, _0x3208dd.call(this, _0x2002f1, _0x18b1d5));
			return _0x206263.bar = _0x206263.getChild(_0x206263.options_.barName), _0x206263.vertical(!!_0x206263.options_.vertical), _0x206263.enable(), _0x206263;
		}
		return _0x420daf.prototype.enabled = function _0x2c5487() {
			return this.enabled_;
		}, _0x420daf.prototype.enable = function _0x3ef91e() {
			if (this.enabled()) {
				return;
			}
			this.on('mousedown', this.handleMouseDown);
			this.on('touchstart', this.handleMouseDown);
			this.on('focus', this.handleFocus);
			this.on('blur', this.handleBlur);
			this.on('click', this.handleClick);
			this.on(this.player_, 'controlsvisible', this.update);
			this.playerEvent && this.on(this.player_, this.playerEvent, this.update);
			this.removeClass('disabled');
			this.setAttribute('tabindex', 0);
			this.enabled_ = true;
		}, _0x420daf.prototype.disable = function _0x3fbf56() {
			if (!this.enabled()) {
				return;
			}
			var _0x193cf9 = this.bar.el_.ownerDocument;
			this.off('mousedown', this.handleMouseDown);
			this.off('touchstart', this.handleMouseDown);
			this.off('focus', this.handleFocus);
			this.off('blur', this.handleBlur);
			this.off('click', this.handleClick);
			this.off(this.player_, 'controlsvisible', this.update);
			this.off(_0x193cf9, 'mousemove', this.handleMouseMove);
			this.off(_0x193cf9, 'mouseup', this.handleMouseUp);
			this.off(_0x193cf9, 'touchmove', this.handleMouseMove);
			this.off(_0x193cf9, 'touchend', this.handleMouseUp);
			this.removeAttribute('tabindex');
			this.addClass('disabled');
			this.playerEvent && this.off(this.player_, this.playerEvent, this.update);
			this.enabled_ = false;
		}, _0x420daf.prototype.createEl = function _0x4f61c8(_0x18b365) {
			var _0x33bfea = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _0x2ebcb6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			return _0x33bfea.className = _0x33bfea.className + ' vjs-slider', _0x33bfea = _0x2476f0({ 'tabIndex': 0 }, _0x33bfea), _0x2ebcb6 = _0x2476f0({
				'role': 'slider',
				'aria-valuenow': 0,
				'aria-valuemin': 0,
				'aria-valuemax': 100,
				'tabIndex': 0
			}, _0x2ebcb6), _0x3208dd.prototype.createEl.call(this, _0x18b365, _0x33bfea, _0x2ebcb6);
		}, _0x420daf.prototype.handleMouseDown = function _0x2d7212(_0x244c85) {
			var _0x1ba960 = this.bar.el_.ownerDocument;
			_0x244c85.type === 'mousedown' && _0x244c85.preventDefault();
			_0x244c85.type === 'touchstart' && !_0x5e4c1c && _0x244c85.preventDefault();
			_0x421c11();
			this.addClass('vjs-sliding');
			this.trigger('slideractive');
			this.on(_0x1ba960, 'mousemove', this.handleMouseMove);
			this.on(_0x1ba960, 'mouseup', this.handleMouseUp);
			this.on(_0x1ba960, 'touchmove', this.handleMouseMove);
			this.on(_0x1ba960, 'touchend', this.handleMouseUp);
			this.handleMouseMove(_0x244c85);
		}, _0x420daf.prototype.handleMouseMove = function _0x580811(_0x1d4065) {
		}, _0x420daf.prototype.handleMouseUp = function _0x35bb42() {
			var _0x3a5cb4 = this.bar.el_.ownerDocument;
			_0x5c9d59();
			this.removeClass('vjs-sliding');
			this.trigger('sliderinactive');
			this.off(_0x3a5cb4, 'mousemove', this.handleMouseMove);
			this.off(_0x3a5cb4, 'mouseup', this.handleMouseUp);
			this.off(_0x3a5cb4, 'touchmove', this.handleMouseMove);
			this.off(_0x3a5cb4, 'touchend', this.handleMouseUp);
			this.update();
		}, _0x420daf.prototype.update = function _0x27c16a() {
			if (!this.el_) {
				return;
			}
			var _0x2b0064 = this.getPercent(), _0xcedb49 = this.bar;
			if (!_0xcedb49) {
				return;
			}
			(typeof _0x2b0064 !== 'number' || _0x2b0064 !== _0x2b0064 || _0x2b0064 < 0 || _0x2b0064 === Infinity) && (_0x2b0064 = 0);
			var _0x2a6001 = (_0x2b0064 * 100).toFixed(2) + '%', _0x59d0c9 = _0xcedb49.el().style;
			return this.vertical() ? _0x59d0c9.height = _0x2a6001 : _0x59d0c9.width = _0x2a6001, _0x2b0064;
		}, _0x420daf.prototype.calculateDistance = function _0x4c23eb(_0xbc95c7) {
			var _0x2a2135 = _0x4d9317(this.el_, _0xbc95c7);
			if (this.vertical()) {
				return _0x2a2135.y;
			}
			return _0x2a2135.x;
		}, _0x420daf.prototype.handleFocus = function _0x2c3a0f() {
			this.on(this.bar.el_.ownerDocument, 'keydown', this.handleKeyPress);
		}, _0x420daf.prototype.handleKeyPress = function _0x715978(_0x39dcd1) {
			if (_0x39dcd1.which === 37 || _0x39dcd1.which === 40) {
				_0x39dcd1.preventDefault();
				this.stepBack();
			} else {
				(_0x39dcd1.which === 38 || _0x39dcd1.which === 39) && (_0x39dcd1.preventDefault(), this.stepForward());
			}
		}, _0x420daf.prototype.handleBlur = function _0x50c132() {
			this.off(this.bar.el_.ownerDocument, 'keydown', this.handleKeyPress);
		}, _0x420daf.prototype.handleClick = function _0xe9eabe(_0x3c1e7a) {
			_0x3c1e7a.stopImmediatePropagation();
			_0x3c1e7a.preventDefault();
		}, _0x420daf.prototype.vertical = function _0x39df67(_0x3a29ff) {
			if (_0x3a29ff === undefined) {
				return this.vertical_ || false;
			}
			this.vertical_ = !!_0x3a29ff;
			this.vertical_ ? this.addClass('vjs-slider-vertical') : this.addClass('vjs-slider-horizontal');
		}, _0x420daf;
	}(_0x197ed7);
	_0x197ed7.registerComponent('Slider', _0x122dc3);
	var _0x12b368 = function (_0x16d1e3) {
		_0x24aed7(_0x1eddaf, _0x16d1e3);
		function _0x1eddaf(_0x1a4848, _0x36bef8) {
			_0x2ab3d2(this, _0x1eddaf);
			var _0x43a609 = _0x245593(this, _0x16d1e3.call(this, _0x1a4848, _0x36bef8));
			return _0x43a609.partEls_ = [], _0x43a609.on(_0x1a4848, 'progress', _0x43a609.update), _0x43a609;
		}
		return _0x1eddaf.prototype.createEl = function _0x241509() {
			return _0x16d1e3.prototype.createEl.call(this, 'div', {
				'className': 'vjs-load-progress',
				'innerHTML': '<span class="vjs-control-text"><span>' + this.localize('Loaded') + '</span>: 0%</span>'
			});
		}, _0x1eddaf.prototype.dispose = function _0x54c66d() {
			this.partEls_ = null;
			_0x16d1e3.prototype.dispose.call(this);
		}, _0x1eddaf.prototype.update = function _0x529319(_0x1dcdb2) {
			var _0x80db81 = this.player_.buffered(), _0x209eba = this.player_.duration(), _0x503c01 = this.player_.bufferedEnd(), _0x534b6c = this.partEls_, _0x3bb0e8 = function _0x54de38(_0x475048, _0x4a2fe9) {
				var _0x11848a = _0x475048 / _0x4a2fe9 || 0;
				return (_0x11848a >= 1 ? 1 : _0x11848a) * 100 + '%';
			};
			this.el_.style.width = _0x3bb0e8(_0x503c01, _0x209eba);
			for (var _0x10464f = 0; _0x10464f < _0x80db81.length; _0x10464f++) {
				var _0x5ade2a = _0x80db81.start(_0x10464f), _0x2a7d31 = _0x80db81.end(_0x10464f), _0x16e429 = _0x534b6c[_0x10464f];
				!_0x16e429 && (_0x16e429 = this.el_.appendChild(_0x30c03e()), _0x534b6c[_0x10464f] = _0x16e429);
				_0x16e429.style.left = _0x3bb0e8(_0x5ade2a, _0x503c01);
				_0x16e429.style.width = _0x3bb0e8(_0x2a7d31 - _0x5ade2a, _0x503c01);
			}
			for (var _0x220ae6 = _0x534b6c.length; _0x220ae6 > _0x80db81.length; _0x220ae6--) {
				this.el_.removeChild(_0x534b6c[_0x220ae6 - 1]);
			}
			_0x534b6c.length = _0x80db81.length;
		}, _0x1eddaf;
	}(_0x197ed7);
	_0x197ed7.registerComponent('LoadProgressBar', _0x12b368);
	var _0x16d35e = function (_0x4bed2b) {
		_0x24aed7(_0x319886, _0x4bed2b);
		function _0x319886() {
			return _0x2ab3d2(this, _0x319886), _0x245593(this, _0x4bed2b.apply(this, arguments));
		}
		return _0x319886.prototype.createEl = function _0x31497d() {
			return _0x4bed2b.prototype.createEl.call(this, 'div', { 'className': 'vjs-time-tooltip' });
		}, _0x319886.prototype.update = function _0x29974a(_0x2aa9d2, _0x4d7c75, _0x144bb3) {
			var _0x14e520 = _0x14bbdb(this.el_), _0x163c38 = _0x14bbdb(this.player_.el()), _0x1b2c66 = _0x2aa9d2.width * _0x4d7c75;
			if (!_0x163c38 || !_0x14e520) {
				return;
			}
			var _0x49a678 = _0x2aa9d2.left - _0x163c38.left + _0x1b2c66, _0x1dbac0 = _0x2aa9d2.width - _0x1b2c66 + (_0x163c38.right - _0x2aa9d2.right), _0x4198f6 = _0x14e520.width / 2;
			if (_0x49a678 < _0x4198f6) {
				_0x4198f6 += _0x4198f6 - _0x49a678;
			} else {
				_0x1dbac0 < _0x4198f6 && (_0x4198f6 = _0x1dbac0);
			}
			if (_0x4198f6 < 0) {
				_0x4198f6 = 0;
			} else {
				_0x4198f6 > _0x14e520.width && (_0x4198f6 = _0x14e520.width);
			}
			this.el_.style.right = '-' + _0x4198f6 + 'px';
			_0x18dd6e(this.el_, _0x144bb3);
		}, _0x319886;
	}(_0x197ed7);
	_0x197ed7.registerComponent('TimeTooltip', _0x16d35e);
	var _0x36fa8d = function (_0x482cdd) {
		_0x24aed7(_0x13e546, _0x482cdd);
		function _0x13e546() {
			return _0x2ab3d2(this, _0x13e546), _0x245593(this, _0x482cdd.apply(this, arguments));
		}
		return _0x13e546.prototype.createEl = function _0x5e3687() {
			return _0x482cdd.prototype.createEl.call(this, 'div', {
				'className': 'vjs-play-progress vjs-slider-bar',
				'innerHTML': '<span class="vjs-control-text"><span>' + this.localize('Progress') + '</span>: 0%</span>'
			});
		}, _0x13e546.prototype.update = function _0x522c52(_0x5d6a87, _0x9b7891) {
			var _0xc85e16 = this;
			this.rafId_ && this.cancelAnimationFrame(this.rafId_);
			this.rafId_ = this.requestAnimationFrame(function () {
				var _0x5a1dae = _0xc85e16.player_.scrubbing() ? _0xc85e16.player_.getCache().currentTime : _0xc85e16.player_.currentTime(), _0x31ed81 = _0x298a89(_0x5a1dae, _0xc85e16.player_.duration()), _0x379dee = _0xc85e16.getChild('timeTooltip');
				_0x379dee && _0x379dee.update(_0x5d6a87, _0x9b7891, _0x31ed81);
			});
		}, _0x13e546;
	}(_0x197ed7);
	_0x36fa8d.prototype.options_ = { 'children': [] };
	!_0xb76ea2 && !_0x4c1649 && _0x36fa8d.prototype.options_.children.push('timeTooltip');
	_0x197ed7.registerComponent('PlayProgressBar', _0x36fa8d);
	var _0x26ec60 = function (_0x2688b1) {
		_0x24aed7(_0xac341e, _0x2688b1);
		function _0xac341e(_0x47dea5, _0x44c370) {
			_0x2ab3d2(this, _0xac341e);
			var _0x5cc56d = _0x245593(this, _0x2688b1.call(this, _0x47dea5, _0x44c370));
			return _0x5cc56d.update = _0x3b73a1(_0x2e578a(_0x5cc56d, _0x5cc56d.update), 25), _0x5cc56d;
		}
		return _0xac341e.prototype.createEl = function _0x383253() {
			return _0x2688b1.prototype.createEl.call(this, 'div', { 'className': 'vjs-mouse-display' });
		}, _0xac341e.prototype.update = function _0x5b29c8(_0x471b94, _0x475b20) {
			var _0x2e2f4d = this;
			this.rafId_ && this.cancelAnimationFrame(this.rafId_);
			this.rafId_ = this.requestAnimationFrame(function () {
				var _0x51b8c1 = _0x2e2f4d.player_.duration(), _0x5e9c02 = _0x298a89(_0x475b20 * _0x51b8c1, _0x51b8c1);
				_0x2e2f4d.el_.style.left = _0x471b94.width * _0x475b20 + 'px';
				_0x2e2f4d.getChild('timeTooltip').update(_0x471b94, _0x475b20, _0x5e9c02);
			});
		}, _0xac341e;
	}(_0x197ed7);
	_0x26ec60.prototype.options_ = { 'children': ['timeTooltip'] };
	_0x197ed7.registerComponent('MouseTimeDisplay', _0x26ec60);
	var _0x4a7c7b = function (_0x4b52e3) {
		_0x24aed7(_0x19b413, _0x4b52e3);
		function _0x19b413(_0x271149, _0x19bce5) {
			_0x2ab3d2(this, _0x19b413);
			var _0x38161f = _0x245593(this, _0x4b52e3.call(this, _0x271149, _0x19bce5));
			return _0x38161f.setEventHandlers_(), _0x38161f;
		}
		return _0x19b413.prototype.setEventHandlers_ = function _0x423693() {
			var _0x52c24a = this;
			this.update = _0x3b73a1(_0x2e578a(this, this.update), 30);
			this.on(this.player_, 'timeupdate', this.update);
			this.on(this.player_, 'ended', this.handleEnded);
			this.updateInterval = null;
			this.on(this.player_, ['playing'], function () {
				_0x52c24a.clearInterval(_0x52c24a.updateInterval);
				_0x52c24a.updateInterval = _0x52c24a.setInterval(function () {
					_0x52c24a.requestAnimationFrame(function () {
						_0x52c24a.update();
					});
				}, 30);
			});
			this.on(this.player_, [
				'ended',
				'pause',
				'waiting'
			], function () {
				_0x52c24a.clearInterval(_0x52c24a.updateInterval);
			});
			this.on(this.player_, [
				'timeupdate',
				'ended'
			], this.update);
		}, _0x19b413.prototype.createEl = function _0x43488f() {
			return _0x4b52e3.prototype.createEl.call(this, 'div', { 'className': 'vjs-progress-holder' }, { 'aria-label': this.localize('Progress Bar') });
		}, _0x19b413.prototype.update_ = function _0x1a2cb8(_0x5553c, _0x4fd342) {
			var _0xa703da = this.player_.duration();
			this.el_.setAttribute('aria-valuenow', (_0x4fd342 * 100).toFixed(2));
			this.el_.setAttribute('aria-valuetext', this.localize('progress bar timing: currentTime={1} duration={2}', [
				_0x298a89(_0x5553c, _0xa703da),
				_0x298a89(_0xa703da, _0xa703da)
			], '{1} of {2}'));
			this.bar.update(_0x14bbdb(this.el_), _0x4fd342);
		}, _0x19b413.prototype.update = function _0x331e5a(_0x1e253c) {
			var _0x5ce9f9 = _0x4b52e3.prototype.update.call(this);
			return this.update_(this.getCurrentTime_(), _0x5ce9f9), _0x5ce9f9;
		}, _0x19b413.prototype.getCurrentTime_ = function _0x4c96a2() {
			return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
		}, _0x19b413.prototype.handleEnded = function _0x5a4d9d(_0x28c863) {
			this.update_(this.player_.duration(), 1);
		}, _0x19b413.prototype.getPercent = function _0x233c66() {
			var _0x403413 = this.getCurrentTime_() / this.player_.duration();
			return _0x403413 >= 1 ? 1 : _0x403413 || 0;
		}, _0x19b413.prototype.handleMouseDown = function _0xbc6490(_0x33631b) {
			if (!_0x23351a(_0x33631b)) {
				return;
			}
			_0x33631b.stopPropagation();
			this.player_.scrubbing(true);
			this.videoWasPlaying = !this.player_.paused();
			this.player_.pause();
			_0x4b52e3.prototype.handleMouseDown.call(this, _0x33631b);
		}, _0x19b413.prototype.handleMouseMove = function _0x316141(_0x151888) {
			if (!_0x23351a(_0x151888)) {
				return;
			}
			var _0x537368 = this.calculateDistance(_0x151888) * this.player_.duration();
			_0x537368 === this.player_.duration() && (_0x537368 = _0x537368 - 0.1);
			this.player_.currentTime(_0x537368);
		}, _0x19b413.prototype.enable = function _0xd4bec4() {
			_0x4b52e3.prototype.enable.call(this);
			var _0xfa71b2 = this.getChild('mouseTimeDisplay');
			if (!_0xfa71b2) {
				return;
			}
			_0xfa71b2.show();
		}, _0x19b413.prototype.disable = function _0x4949de() {
			_0x4b52e3.prototype.disable.call(this);
			var _0x3e1898 = this.getChild('mouseTimeDisplay');
			if (!_0x3e1898) {
				return;
			}
			_0x3e1898.hide();
		}, _0x19b413.prototype.handleMouseUp = function _0x22e300(_0x3c09e0) {
			_0x4b52e3.prototype.handleMouseUp.call(this, _0x3c09e0);
			_0x3c09e0 && _0x3c09e0.stopPropagation();
			this.player_.scrubbing(false);
			this.player_.trigger({
				'type': 'timeupdate',
				'target': this,
				'manuallyTriggered': true
			});
			this.videoWasPlaying && _0x5def48(this.player_.play());
		}, _0x19b413.prototype.stepForward = function _0x1883b3() {
			this.player_.currentTime(this.player_.currentTime() + 5);
		}, _0x19b413.prototype.stepBack = function _0x4275ac() {
			this.player_.currentTime(this.player_.currentTime() - 5);
		}, _0x19b413.prototype.handleAction = function _0x5ade6b(_0x100ea1) {
			this.player_.paused() ? this.player_.play() : this.player_.pause();
		}, _0x19b413.prototype.handleKeyPress = function _0x1da01d(_0x51b453) {
			if (_0x51b453.which === 32 || _0x51b453.which === 13) {
				_0x51b453.preventDefault();
				this.handleAction(_0x51b453);
			} else {
				_0x4b52e3.prototype.handleKeyPress && _0x4b52e3.prototype.handleKeyPress.call(this, _0x51b453);
			}
		}, _0x19b413;
	}(_0x122dc3);
	_0x4a7c7b.prototype.options_ = {
		'children': [
			'loadProgressBar',
			'playProgressBar'
		],
		'barName': 'playProgressBar'
	};
	!_0xb76ea2 && !_0x4c1649 && _0x4a7c7b.prototype.options_.children.splice(1, 0, 'mouseTimeDisplay');
	_0x4a7c7b.prototype.playerEvent = 'timeupdate';
	_0x197ed7.registerComponent('SeekBar', _0x4a7c7b);
	var _0xc674a = function (_0x41a3b2) {
		_0x24aed7(_0x5062ba, _0x41a3b2);
		function _0x5062ba(_0x42fb5e, _0x46db00) {
			_0x2ab3d2(this, _0x5062ba);
			var _0x4cfd43 = _0x245593(this, _0x41a3b2.call(this, _0x42fb5e, _0x46db00));
			return _0x4cfd43.handleMouseMove = _0x3b73a1(_0x2e578a(_0x4cfd43, _0x4cfd43.handleMouseMove), 25), _0x4cfd43.throttledHandleMouseSeek = _0x3b73a1(_0x2e578a(_0x4cfd43, _0x4cfd43.handleMouseSeek), 25), _0x4cfd43.enable(), _0x4cfd43;
		}
		return _0x5062ba.prototype.createEl = function _0x1f0c8d() {
			return _0x41a3b2.prototype.createEl.call(this, 'div', { 'className': 'vjs-progress-control vjs-control' });
		}, _0x5062ba.prototype.handleMouseMove = function _0x5d7f3b(_0xa885d3) {
			var _0x2505e4 = this.getChild('seekBar');
			if (_0x2505e4) {
				var _0x246ad7 = _0x2505e4.getChild('mouseTimeDisplay'), _0x39731e = _0x2505e4.el(), _0x56325c = _0x14bbdb(_0x39731e), _0x526d03 = _0x4d9317(_0x39731e, _0xa885d3).x;
				if (_0x526d03 > 1) {
					_0x526d03 = 1;
				} else {
					_0x526d03 < 0 && (_0x526d03 = 0);
				}
				_0x246ad7 && _0x246ad7.update(_0x56325c, _0x526d03);
			}
		}, _0x5062ba.prototype.handleMouseSeek = function _0x2c37e6(_0x413c44) {
			var _0x5aa979 = this.getChild('seekBar');
			_0x5aa979 && _0x5aa979.handleMouseMove(_0x413c44);
		}, _0x5062ba.prototype.enabled = function _0x49df00() {
			return this.enabled_;
		}, _0x5062ba.prototype.disable = function _0xc4e7fa() {
			this.children().forEach(function (_0x33cfc3) {
				return _0x33cfc3.disable && _0x33cfc3.disable();
			});
			if (!this.enabled()) {
				return;
			}
			this.off([
				'mousedown',
				'touchstart'
			], this.handleMouseDown);
			this.off(this.el_, 'mousemove', this.handleMouseMove);
			this.handleMouseUp();
			this.addClass('disabled');
			this.enabled_ = false;
		}, _0x5062ba.prototype.enable = function _0xc3e3e6() {
			this.children().forEach(function (_0x1dd911) {
				return _0x1dd911.enable && _0x1dd911.enable();
			});
			if (this.enabled()) {
				return;
			}
			this.on([
				'mousedown',
				'touchstart'
			], this.handleMouseDown);
			this.on(this.el_, 'mousemove', this.handleMouseMove);
			this.removeClass('disabled');
			this.enabled_ = true;
		}, _0x5062ba.prototype.handleMouseDown = function _0x2b7778(_0x5b928c) {
			var _0xb63edb = this.el_.ownerDocument, _0x3b5638 = this.getChild('seekBar');
			_0x3b5638 && _0x3b5638.handleMouseDown(_0x5b928c);
			this.on(_0xb63edb, 'mousemove', this.throttledHandleMouseSeek);
			this.on(_0xb63edb, 'touchmove', this.throttledHandleMouseSeek);
			this.on(_0xb63edb, 'mouseup', this.handleMouseUp);
			this.on(_0xb63edb, 'touchend', this.handleMouseUp);
		}, _0x5062ba.prototype.handleMouseUp = function _0x5654e7(_0x350a2a) {
			var _0x425f30 = this.el_.ownerDocument, _0x82c93b = this.getChild('seekBar');
			_0x82c93b && _0x82c93b.handleMouseUp(_0x350a2a);
			this.off(_0x425f30, 'mousemove', this.throttledHandleMouseSeek);
			this.off(_0x425f30, 'touchmove', this.throttledHandleMouseSeek);
			this.off(_0x425f30, 'mouseup', this.handleMouseUp);
			this.off(_0x425f30, 'touchend', this.handleMouseUp);
		}, _0x5062ba;
	}(_0x197ed7);
	_0xc674a.prototype.options_ = { 'children': ['seekBar'] };
	_0x197ed7.registerComponent('ProgressControl', _0xc674a);
	var _0x1313f4 = function (_0x57256b) {
		_0x24aed7(_0xff0779, _0x57256b);
		function _0xff0779(_0x17aaca, _0x2e4c68) {
			_0x2ab3d2(this, _0xff0779);
			var _0x16d905 = _0x245593(this, _0x57256b.call(this, _0x17aaca, _0x2e4c68));
			return _0x16d905.on(_0x17aaca, 'fullscreenchange', _0x16d905.handleFullscreenChange), _0x5d8ee4[_0x30351b.fullscreenEnabled] === false && _0x16d905.disable(), _0x16d905;
		}
		return _0xff0779.prototype.buildCSSClass = function _0x1faad8() {
			return 'vjs-fullscreen-control ' + _0x57256b.prototype.buildCSSClass.call(this);
		}, _0xff0779.prototype.handleFullscreenChange = function _0x2f0527(_0x4f97da) {
			this.player_.isFullscreen() ? this.controlText('Non-Fullscreen') : this.controlText('Fullscreen');
		}, _0xff0779.prototype.handleClick = function _0x125cd9(_0x141b17) {
			!this.player_.isFullscreen() ? this.player_.requestFullscreen() : this.player_.exitFullscreen();
		}, _0xff0779;
	}(_0x186e86);
	_0x1313f4.prototype.controlText_ = 'Fullscreen';
	_0x197ed7.registerComponent('FullscreenToggle', _0x1313f4);
	var _0x45d383 = function _0x5d6a46(_0x220f94, _0x27a0b4) {
		_0x27a0b4.tech_ && !_0x27a0b4.tech_.featuresVolumeControl && _0x220f94.addClass('vjs-hidden');
		_0x220f94.on(_0x27a0b4, 'loadstart', function () {
			!_0x27a0b4.tech_.featuresVolumeControl ? _0x220f94.addClass('vjs-hidden') : _0x220f94.removeClass('vjs-hidden');
		});
	}, _0x114a4a = function (_0x4cd21c) {
		_0x24aed7(_0x57c3a3, _0x4cd21c);
		function _0x57c3a3() {
			return _0x2ab3d2(this, _0x57c3a3), _0x245593(this, _0x4cd21c.apply(this, arguments));
		}
		return _0x57c3a3.prototype.createEl = function _0x21f0e0() {
			return _0x4cd21c.prototype.createEl.call(this, 'div', {
				'className': 'vjs-volume-level',
				'innerHTML': '<span class="vjs-control-text"></span>'
			});
		}, _0x57c3a3;
	}(_0x197ed7);
	_0x197ed7.registerComponent('VolumeLevel', _0x114a4a);
	var _0x2e9201 = function (_0x4acfeb) {
		_0x24aed7(_0x1388a9, _0x4acfeb);
		function _0x1388a9(_0x4d3406, _0x525363) {
			_0x2ab3d2(this, _0x1388a9);
			var _0x14efd2 = _0x245593(this, _0x4acfeb.call(this, _0x4d3406, _0x525363));
			return _0x14efd2.on('slideractive', _0x14efd2.updateLastVolume_), _0x14efd2.on(_0x4d3406, 'volumechange', _0x14efd2.updateARIAAttributes), _0x4d3406.ready(function () {
				return _0x14efd2.updateARIAAttributes();
			}), _0x14efd2;
		}
		return _0x1388a9.prototype.createEl = function _0x376eee() {
			return _0x4acfeb.prototype.createEl.call(this, 'div', { 'className': 'vjs-volume-bar vjs-slider-bar' }, {
				'aria-label': this.localize('Volume Level'),
				'aria-live': 'polite'
			});
		}, _0x1388a9.prototype.handleMouseDown = function _0xb2e54b(_0x5cb0c3) {
			if (!_0x23351a(_0x5cb0c3)) {
				return;
			}
			_0x4acfeb.prototype.handleMouseDown.call(this, _0x5cb0c3);
		}, _0x1388a9.prototype.handleMouseMove = function _0x37ea3c(_0x558d70) {
			if (!_0x23351a(_0x558d70)) {
				return;
			}
			this.checkMuted();
			this.player_.volume(this.calculateDistance(_0x558d70));
		}, _0x1388a9.prototype.checkMuted = function _0x566d84() {
			this.player_.muted() && this.player_.muted(false);
		}, _0x1388a9.prototype.getPercent = function _0x3b4555() {
			if (this.player_.muted()) {
				return 0;
			}
			return this.player_.volume();
		}, _0x1388a9.prototype.stepForward = function _0x4793b9() {
			this.checkMuted();
			this.player_.volume(this.player_.volume() + 0.1);
		}, _0x1388a9.prototype.stepBack = function _0x1703b4() {
			this.checkMuted();
			this.player_.volume(this.player_.volume() - 0.1);
		}, _0x1388a9.prototype.updateARIAAttributes = function _0x81f575(_0x74e93c) {
			var _0x260ffb = this.player_.muted() ? 0 : this.volumeAsPercentage_();
			this.el_.setAttribute('aria-valuenow', _0x260ffb);
			this.el_.setAttribute('aria-valuetext', _0x260ffb + '%');
		}, _0x1388a9.prototype.volumeAsPercentage_ = function _0x491ef7() {
			return Math.round(this.player_.volume() * 100);
		}, _0x1388a9.prototype.updateLastVolume_ = function _0x2ea10c() {
			var _0x56bf57 = this, _0x2a9c79 = this.player_.volume();
			this.one('sliderinactive', function () {
				_0x56bf57.player_.volume() === 0 && _0x56bf57.player_.lastVolume_(_0x2a9c79);
			});
		}, _0x1388a9;
	}(_0x122dc3);
	_0x2e9201.prototype.options_ = {
		'children': ['volumeLevel'],
		'barName': 'volumeLevel'
	};
	_0x2e9201.prototype.playerEvent = 'volumechange';
	_0x197ed7.registerComponent('VolumeBar', _0x2e9201);
	var _0x436f67 = function (_0x4391ea) {
		_0x24aed7(_0xedda6b, _0x4391ea);
		function _0xedda6b(_0x2f0fc5) {
			var _0x356c58 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			_0x2ab3d2(this, _0xedda6b);
			_0x356c58.vertical = _0x356c58.vertical || false;
			(typeof _0x356c58.volumeBar === 'undefined' || _0x15e475(_0x356c58.volumeBar)) && (_0x356c58.volumeBar = _0x356c58.volumeBar || {}, _0x356c58.volumeBar.vertical = _0x356c58.vertical);
			var _0x2f8cb0 = _0x245593(this, _0x4391ea.call(this, _0x2f0fc5, _0x356c58));
			return _0x45d383(_0x2f8cb0, _0x2f0fc5), _0x2f8cb0.throttledHandleMouseMove = _0x3b73a1(_0x2e578a(_0x2f8cb0, _0x2f8cb0.handleMouseMove), 25), _0x2f8cb0.on('mousedown', _0x2f8cb0.handleMouseDown), _0x2f8cb0.on('touchstart', _0x2f8cb0.handleMouseDown), _0x2f8cb0.on(_0x2f8cb0.volumeBar, [
				'focus',
				'slideractive'
			], function () {
				_0x2f8cb0.volumeBar.addClass('vjs-slider-active');
				_0x2f8cb0.addClass('vjs-slider-active');
				_0x2f8cb0.trigger('slideractive');
			}), _0x2f8cb0.on(_0x2f8cb0.volumeBar, [
				'blur',
				'sliderinactive'
			], function () {
				_0x2f8cb0.volumeBar.removeClass('vjs-slider-active');
				_0x2f8cb0.removeClass('vjs-slider-active');
				_0x2f8cb0.trigger('sliderinactive');
			}), _0x2f8cb0;
		}
		return _0xedda6b.prototype.createEl = function _0x1d77a2() {
			var _0x1d988c = 'vjs-volume-horizontal';
			return this.options_.vertical && (_0x1d988c = 'vjs-volume-vertical'), _0x4391ea.prototype.createEl.call(this, 'div', { 'className': 'vjs-volume-control vjs-control ' + _0x1d988c });
		}, _0xedda6b.prototype.handleMouseDown = function _0x402fe7(_0x4fc7c2) {
			var _0x305fcd = this.el_.ownerDocument;
			this.on(_0x305fcd, 'mousemove', this.throttledHandleMouseMove);
			this.on(_0x305fcd, 'touchmove', this.throttledHandleMouseMove);
			this.on(_0x305fcd, 'mouseup', this.handleMouseUp);
			this.on(_0x305fcd, 'touchend', this.handleMouseUp);
		}, _0xedda6b.prototype.handleMouseUp = function _0x3669a6(_0x196050) {
			var _0x504a4c = this.el_.ownerDocument;
			this.off(_0x504a4c, 'mousemove', this.throttledHandleMouseMove);
			this.off(_0x504a4c, 'touchmove', this.throttledHandleMouseMove);
			this.off(_0x504a4c, 'mouseup', this.handleMouseUp);
			this.off(_0x504a4c, 'touchend', this.handleMouseUp);
		}, _0xedda6b.prototype.handleMouseMove = function _0x5763be(_0x27fd2c) {
			this.volumeBar.handleMouseMove(_0x27fd2c);
		}, _0xedda6b;
	}(_0x197ed7);
	_0x436f67.prototype.options_ = { 'children': ['volumeBar'] };
	_0x197ed7.registerComponent('VolumeControl', _0x436f67);
	var _0x1060ac = function _0x3dac3e(_0x1e9c41, _0x2ed830) {
		_0x2ed830.tech_ && !_0x2ed830.tech_.featuresMuteControl && _0x1e9c41.addClass('vjs-hidden');
		_0x1e9c41.on(_0x2ed830, 'loadstart', function () {
			!_0x2ed830.tech_.featuresMuteControl ? _0x1e9c41.addClass('vjs-hidden') : _0x1e9c41.removeClass('vjs-hidden');
		});
	}, _0x27fd81 = function (_0x31e5ad) {
		_0x24aed7(_0xe0f282, _0x31e5ad);
		function _0xe0f282(_0x28d22a, _0x42d386) {
			_0x2ab3d2(this, _0xe0f282);
			var _0x1d0fc5 = _0x245593(this, _0x31e5ad.call(this, _0x28d22a, _0x42d386));
			return _0x1060ac(_0x1d0fc5, _0x28d22a), _0x1d0fc5.on(_0x28d22a, [
				'loadstart',
				'volumechange'
			], _0x1d0fc5.update), _0x1d0fc5;
		}
		return _0xe0f282.prototype.buildCSSClass = function _0x1ae828() {
			return 'vjs-mute-control ' + _0x31e5ad.prototype.buildCSSClass.call(this);
		}, _0xe0f282.prototype.handleClick = function _0x5e01c8(_0x303395) {
			var _0x520532 = this.player_.volume(), _0x12c64b = this.player_.lastVolume_();
			if (_0x520532 === 0) {
				var _0x1809b1 = _0x12c64b < 0.1 ? 0.1 : _0x12c64b;
				this.player_.volume(_0x1809b1);
				this.player_.muted(false);
			} else {
				this.player_.muted(this.player_.muted() ? false : true);
			}
		}, _0xe0f282.prototype.update = function _0x24db65(_0x30ce8b) {
			this.updateIcon_();
			this.updateControlText_();
		}, _0xe0f282.prototype.updateIcon_ = function _0xbd00a6() {
			var _0x207d4c = this.player_.volume(), _0x1db632 = 3;
			_0xb76ea2 && this.player_.muted(this.player_.tech_.el_.muted);
			if (_0x207d4c === 0 || this.player_.muted()) {
				_0x1db632 = 0;
			} else {
				if (_0x207d4c < 0.33) {
					_0x1db632 = 1;
				} else {
					_0x207d4c < 0.67 && (_0x1db632 = 2);
				}
			}
			for (var _0x462211 = 0; _0x462211 < 4; _0x462211++) {
				_0x564c01(this.el_, 'vjs-vol-' + _0x462211);
			}
			_0x235eb5(this.el_, 'vjs-vol-' + _0x1db632);
		}, _0xe0f282.prototype.updateControlText_ = function _0x2d909e() {
			var _0x28a046 = this.player_.muted() || this.player_.volume() === 0, _0x117114 = _0x28a046 ? 'Unmute' : 'Mute';
			this.controlText() !== _0x117114 && this.controlText(_0x117114);
		}, _0xe0f282;
	}(_0x186e86);
	_0x27fd81.prototype.controlText_ = 'Mute';
	_0x197ed7.registerComponent('MuteToggle', _0x27fd81);
	var _0x368e9a = function (_0x3066fc) {
		_0x24aed7(_0x1f7354, _0x3066fc);
		function _0x1f7354(_0x887f23) {
			var _0x1a6357 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			_0x2ab3d2(this, _0x1f7354);
			typeof _0x1a6357.inline !== 'undefined' ? _0x1a6357.inline = _0x1a6357.inline : _0x1a6357.inline = true;
			(typeof _0x1a6357.volumeControl === 'undefined' || _0x15e475(_0x1a6357.volumeControl)) && (_0x1a6357.volumeControl = _0x1a6357.volumeControl || {}, _0x1a6357.volumeControl.vertical = !_0x1a6357.inline);
			var _0x1f6f58 = _0x245593(this, _0x3066fc.call(this, _0x887f23, _0x1a6357));
			return _0x1f6f58.on(_0x887f23, ['loadstart'], _0x1f6f58.volumePanelState_), _0x1f6f58.on(_0x1f6f58.volumeControl, ['slideractive'], _0x1f6f58.sliderActive_), _0x1f6f58.on(_0x1f6f58.volumeControl, ['sliderinactive'], _0x1f6f58.sliderInactive_), _0x1f6f58;
		}
		return _0x1f7354.prototype.sliderActive_ = function _0x511c08() {
			this.addClass('vjs-slider-active');
		}, _0x1f7354.prototype.sliderInactive_ = function _0x2720b2() {
			this.removeClass('vjs-slider-active');
		}, _0x1f7354.prototype.volumePanelState_ = function _0x18f19a() {
			this.volumeControl.hasClass('vjs-hidden') && this.muteToggle.hasClass('vjs-hidden') && this.addClass('vjs-hidden');
			this.volumeControl.hasClass('vjs-hidden') && !this.muteToggle.hasClass('vjs-hidden') && this.addClass('vjs-mute-toggle-only');
		}, _0x1f7354.prototype.createEl = function _0x985a92() {
			var _0x1c7adc = 'vjs-volume-panel-horizontal';
			return !this.options_.inline && (_0x1c7adc = 'vjs-volume-panel-vertical'), _0x3066fc.prototype.createEl.call(this, 'div', { 'className': 'vjs-volume-panel vjs-control ' + _0x1c7adc });
		}, _0x1f7354;
	}(_0x197ed7);
	_0x368e9a.prototype.options_ = {
		'children': [
			'muteToggle',
			'volumeControl'
		]
	};
	_0x197ed7.registerComponent('VolumePanel', _0x368e9a);
	var _0x2081d = function (_0x50fed6) {
		_0x24aed7(_0x112531, _0x50fed6);
		function _0x112531(_0x341833, _0x40c136) {
			_0x2ab3d2(this, _0x112531);
			var _0x1df649 = _0x245593(this, _0x50fed6.call(this, _0x341833, _0x40c136));
			return _0x40c136 && (_0x1df649.menuButton_ = _0x40c136.menuButton), _0x1df649.focusedChild_ = -1, _0x1df649.on('keydown', _0x1df649.handleKeyPress), _0x1df649;
		}
		return _0x112531.prototype.addItem = function _0x2e5f99(_0x592e41) {
			this.addChild(_0x592e41);
			_0x592e41.on('click', _0x2e578a(this, function (_0x2c981e) {
				this.menuButton_ && (this.menuButton_.unpressButton(), _0x592e41.name() !== 'CaptionSettingsMenuItem' && this.menuButton_.focus());
			}));
		}, _0x112531.prototype.createEl = function _0x3a9352() {
			var _0x58fbbf = this.options_.contentElType || 'ul';
			this.contentEl_ = _0x30c03e(_0x58fbbf, { 'className': 'vjs-menu-content' });
			this.contentEl_.setAttribute('role', 'menu');
			var _0x22b117 = _0x50fed6.prototype.createEl.call(this, 'div', {
				'append': this.contentEl_,
				'className': 'vjs-menu'
			});
			return _0x22b117.appendChild(this.contentEl_), _0x7b0228(_0x22b117, 'click', function (_0x3cde0d) {
				_0x3cde0d.preventDefault();
				_0x3cde0d.stopImmediatePropagation();
			}), _0x22b117;
		}, _0x112531.prototype.dispose = function _0x39dafd() {
			this.contentEl_ = null;
			_0x50fed6.prototype.dispose.call(this);
		}, _0x112531.prototype.handleKeyPress = function _0x3c3cc3(_0x19b6b2) {
			if (_0x19b6b2.which === 37 || _0x19b6b2.which === 40) {
				_0x19b6b2.preventDefault();
				this.stepForward();
			} else {
				(_0x19b6b2.which === 38 || _0x19b6b2.which === 39) && (_0x19b6b2.preventDefault(), this.stepBack());
			}
		}, _0x112531.prototype.stepForward = function _0x51b464() {
			var _0x39e286 = 0;
			this.focusedChild_ !== undefined && (_0x39e286 = this.focusedChild_ + 1);
			this.focus(_0x39e286);
		}, _0x112531.prototype.stepBack = function _0x7be680() {
			var _0x1c5c68 = 0;
			this.focusedChild_ !== undefined && (_0x1c5c68 = this.focusedChild_ - 1);
			this.focus(_0x1c5c68);
		}, _0x112531.prototype.focus = function _0x4cbeaa() {
			var _0x579609 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0, _0x41cc66 = this.children().slice(), _0x35ba9a = _0x41cc66.length && _0x41cc66[0].className && /vjs-menu-title/.test(_0x41cc66[0].className);
			_0x35ba9a && _0x41cc66.shift();
			if (_0x41cc66.length > 0) {
				if (_0x579609 < 0) {
					_0x579609 = 0;
				} else {
					_0x579609 >= _0x41cc66.length && (_0x579609 = _0x41cc66.length - 1);
				}
				this.focusedChild_ = _0x579609;
				_0x41cc66[_0x579609].el_.focus();
			}
		}, _0x112531;
	}(_0x197ed7);
	_0x197ed7.registerComponent('Menu', _0x2081d);
	var _0x17444d = function (_0x3a5783) {
		_0x24aed7(_0x1a1d1f, _0x3a5783);
		function _0x1a1d1f(_0x28a35a) {
			var _0x93023f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			_0x2ab3d2(this, _0x1a1d1f);
			var _0x66d482 = _0x245593(this, _0x3a5783.call(this, _0x28a35a, _0x93023f));
			_0x66d482.menuButton_ = new _0x186e86(_0x28a35a, _0x93023f);
			_0x66d482.menuButton_.controlText(_0x66d482.controlText_);
			_0x66d482.menuButton_.el_.setAttribute('aria-haspopup', 'true');
			var _0xcc13aa = _0x186e86.prototype.buildCSSClass();
			return _0x66d482.menuButton_.el_.className = _0x66d482.buildCSSClass() + ' ' + _0xcc13aa, _0x66d482.menuButton_.removeClass('vjs-control'), _0x66d482.addChild(_0x66d482.menuButton_), _0x66d482.update(), _0x66d482.enabled_ = true, _0x66d482.on(_0x66d482.menuButton_, 'tap', _0x66d482.handleClick), _0x66d482.on(_0x66d482.menuButton_, 'click', _0x66d482.handleClick), _0x66d482.on(_0x66d482.menuButton_, 'focus', _0x66d482.handleFocus), _0x66d482.on(_0x66d482.menuButton_, 'blur', _0x66d482.handleBlur), _0x66d482.on('keydown', _0x66d482.handleSubmenuKeyPress), _0x66d482;
		}
		return _0x1a1d1f.prototype.update = function _0x4e767f() {
			var _0x428f73 = this.createMenu();
			this.menu && (this.menu.dispose(), this.removeChild(this.menu));
			this.menu = _0x428f73;
			this.addChild(_0x428f73);
			this.buttonPressed_ = false;
			this.menuButton_.el_.setAttribute('aria-expanded', 'false');
			this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show();
		}, _0x1a1d1f.prototype.createMenu = function _0x5f4d3f() {
			var _0x32801c = new _0x2081d(this.player_, { 'menuButton': this });
			this.hideThreshold_ = 0;
			if (this.options_.title) {
				var _0x4fb738 = _0x30c03e('li', {
					'className': 'vjs-menu-title',
					'innerHTML': _0x104f7f(this.options_.title),
					'tabIndex': -1
				});
				this.hideThreshold_ += 1;
				_0x32801c.children_.unshift(_0x4fb738);
				_0x19c260(_0x4fb738, _0x32801c.contentEl());
			}
			this.items = this.createItems();
			if (this.items) {
				for (var _0x562d4e = 0; _0x562d4e < this.items.length; _0x562d4e++) {
					_0x32801c.addItem(this.items[_0x562d4e]);
				}
			}
			return _0x32801c;
		}, _0x1a1d1f.prototype.createItems = function _0x522d80() {
		}, _0x1a1d1f.prototype.createEl = function _0x62ae9a() {
			return _0x3a5783.prototype.createEl.call(this, 'div', { 'className': this.buildWrapperCSSClass() }, {});
		}, _0x1a1d1f.prototype.buildWrapperCSSClass = function _0x17c15c() {
			var _0x4a248d = 'vjs-menu-button';
			this.options_.inline === true ? _0x4a248d += '-inline' : _0x4a248d += '-popup';
			var _0x18c2e9 = _0x186e86.prototype.buildCSSClass();
			return 'vjs-menu-button ' + _0x4a248d + ' ' + _0x18c2e9 + ' ' + _0x3a5783.prototype.buildCSSClass.call(this);
		}, _0x1a1d1f.prototype.buildCSSClass = function _0x17975f() {
			var _0x5a5792 = 'vjs-menu-button';
			return this.options_.inline === true ? _0x5a5792 += '-inline' : _0x5a5792 += '-popup', 'vjs-menu-button ' + _0x5a5792 + ' ' + _0x3a5783.prototype.buildCSSClass.call(this);
		}, _0x1a1d1f.prototype.controlText = function _0x5cd0aa(_0xf1760a) {
			var _0xc7da65 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.menuButton_.el();
			return this.menuButton_.controlText(_0xf1760a, _0xc7da65);
		}, _0x1a1d1f.prototype.handleClick = function _0x595d48(_0x5c18c8) {
			this.one(this.menu.contentEl(), 'mouseleave', _0x2e578a(this, function (_0x5e5e14) {
				this.unpressButton();
				this.el_.blur();
			}));
			this.buttonPressed_ ? this.unpressButton() : this.pressButton();
		}, _0x1a1d1f.prototype.focus = function _0x2c7afd() {
			this.menuButton_.focus();
		}, _0x1a1d1f.prototype.blur = function _0x5c670b() {
			this.menuButton_.blur();
		}, _0x1a1d1f.prototype.handleFocus = function _0x52eaae() {
			_0x7b0228(_0x5d8ee4, 'keydown', _0x2e578a(this, this.handleKeyPress));
		}, _0x1a1d1f.prototype.handleBlur = function _0x229b67() {
			_0x706013(_0x5d8ee4, 'keydown', _0x2e578a(this, this.handleKeyPress));
		}, _0x1a1d1f.prototype.handleKeyPress = function _0x400917(_0x388965) {
			if (_0x388965.which === 27 || _0x388965.which === 9) {
				this.buttonPressed_ && this.unpressButton();
				if (_0x388965.which !== 9) {
					_0x388965.preventDefault();
					this.menuButton_.el_.focus();
				}
			} else {
				(_0x388965.which === 38 || _0x388965.which === 40) && (!this.buttonPressed_ && (this.pressButton(), _0x388965.preventDefault()));
			}
		}, _0x1a1d1f.prototype.handleSubmenuKeyPress = function _0x3bd816(_0x41eb4c) {
			(_0x41eb4c.which === 27 || _0x41eb4c.which === 9) && (this.buttonPressed_ && this.unpressButton(), _0x41eb4c.which !== 9 && (_0x41eb4c.preventDefault(), this.menuButton_.el_.focus()));
		}, _0x1a1d1f.prototype.pressButton = function _0x5bb248() {
			if (this.enabled_) {
				this.buttonPressed_ = true;
				this.menu.lockShowing();
				this.menuButton_.el_.setAttribute('aria-expanded', 'true');
				if (_0xb76ea2 && _0x52312e()) {
					return;
				}
				this.menu.focus();
			}
		}, _0x1a1d1f.prototype.unpressButton = function _0x21f1b5() {
			this.enabled_ && (this.buttonPressed_ = false, this.menu.unlockShowing(), this.menuButton_.el_.setAttribute('aria-expanded', 'false'));
		}, _0x1a1d1f.prototype.disable = function _0x1e3b61() {
			this.unpressButton();
			this.enabled_ = false;
			this.addClass('vjs-disabled');
			this.menuButton_.disable();
		}, _0x1a1d1f.prototype.enable = function _0x46426a() {
			this.enabled_ = true;
			this.removeClass('vjs-disabled');
			this.menuButton_.enable();
		}, _0x1a1d1f;
	}(_0x197ed7);
	_0x197ed7.registerComponent('MenuButton', _0x17444d);
	var _0x3be544 = function (_0x199e88) {
		_0x24aed7(_0x5b3f27, _0x199e88);
		function _0x5b3f27(_0x4be7b7, _0x171296) {
			_0x2ab3d2(this, _0x5b3f27);
			var _0xae0220 = _0x171296.tracks, _0x11fe09 = _0x245593(this, _0x199e88.call(this, _0x4be7b7, _0x171296));
			_0x11fe09.items.length <= 1 && _0x11fe09.hide();
			if (!_0xae0220) {
				return _0x245593(_0x11fe09);
			}
			var _0x28db73 = _0x2e578a(_0x11fe09, _0x11fe09.update);
			return _0xae0220.addEventListener('removetrack', _0x28db73), _0xae0220.addEventListener('addtrack', _0x28db73), _0x11fe09.player_.on('ready', _0x28db73), _0x11fe09.player_.on('dispose', function () {
				_0xae0220.removeEventListener('removetrack', _0x28db73);
				_0xae0220.removeEventListener('addtrack', _0x28db73);
			}), _0x11fe09;
		}
		return _0x5b3f27;
	}(_0x17444d);
	_0x197ed7.registerComponent('TrackButton', _0x3be544);
	var _0x5522c8 = function (_0x212a8d) {
		_0x24aed7(_0xb77ff8, _0x212a8d);
		function _0xb77ff8(_0x4540d8, _0x923595) {
			_0x2ab3d2(this, _0xb77ff8);
			var _0x197c83 = _0x245593(this, _0x212a8d.call(this, _0x4540d8, _0x923595));
			return _0x197c83.selectable = _0x923595.selectable, _0x197c83.isSelected_ = _0x923595.selected || false, _0x197c83.multiSelectable = _0x923595.multiSelectable, _0x197c83.selected(_0x197c83.isSelected_), _0x197c83.selectable ? _0x197c83.multiSelectable ? _0x197c83.el_.setAttribute('role', 'menuitemcheckbox') : _0x197c83.el_.setAttribute('role', 'menuitemradio') : _0x197c83.el_.setAttribute('role', 'menuitem'), _0x197c83;
		}
		return _0xb77ff8.prototype.createEl = function _0x37ce20(_0x4b4e6d, _0x54d42c, _0x1d611d) {
			return this.nonIconControl = true, _0x212a8d.prototype.createEl.call(this, 'li', _0x2476f0({
				'className': 'vjs-menu-item',
				'innerHTML': '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + '</span>',
				'tabIndex': -1
			}, _0x54d42c), _0x1d611d);
		}, _0xb77ff8.prototype.handleClick = function _0x246ada(_0x50db0b) {
			this.selected(true);
		}, _0xb77ff8.prototype.selected = function _0x934f53(_0x457924) {
			this.selectable && (_0x457924 ? (this.addClass('vjs-selected'), this.el_.setAttribute('aria-checked', 'true'), this.controlText(', selected'), this.isSelected_ = true) : (this.removeClass('vjs-selected'), this.el_.setAttribute('aria-checked', 'false'), this.controlText(''), this.isSelected_ = false));
		}, _0xb77ff8;
	}(_0x347db1);
	_0x197ed7.registerComponent('MenuItem', _0x5522c8);
	var _0x509c8f = function (_0x6d1a4a) {
		_0x24aed7(_0x120a28, _0x6d1a4a);
		function _0x120a28(_0x11205c, _0x4f7899) {
			_0x2ab3d2(this, _0x120a28);
			var _0xc8269b = _0x4f7899.track, _0x35f275 = _0x11205c.textTracks();
			_0x4f7899.label = _0xc8269b.label || _0xc8269b.language || 'Unknown';
			_0x4f7899.selected = _0xc8269b.mode === 'showing';
			var _0x47ef7e = _0x245593(this, _0x6d1a4a.call(this, _0x11205c, _0x4f7899));
			_0x47ef7e.track = _0xc8269b;
			var _0x51fa6e = function _0x27b30c() {
				for (var _0x5994eb = arguments.length, _0xda2ff0 = Array(_0x5994eb), _0x543dee = 0; _0x543dee < _0x5994eb; _0x543dee++) {
					_0xda2ff0[_0x543dee] = arguments[_0x543dee];
				}
				_0x47ef7e.handleTracksChange.apply(_0x47ef7e, _0xda2ff0);
			}, _0x174a3d = function _0x5f209c() {
				for (var _0x392542 = arguments.length, _0xf163ae = Array(_0x392542), _0x42818e = 0; _0x42818e < _0x392542; _0x42818e++) {
					_0xf163ae[_0x42818e] = arguments[_0x42818e];
				}
				_0x47ef7e.handleSelectedLanguageChange.apply(_0x47ef7e, _0xf163ae);
			};
			_0x11205c.on([
				'loadstart',
				'texttrackchange'
			], _0x51fa6e);
			_0x35f275.addEventListener('change', _0x51fa6e);
			_0x35f275.addEventListener('selectedlanguagechange', _0x174a3d);
			_0x47ef7e.on('dispose', function () {
				_0x11205c.off([
					'loadstart',
					'texttrackchange'
				], _0x51fa6e);
				_0x35f275.removeEventListener('change', _0x51fa6e);
				_0x35f275.removeEventListener('selectedlanguagechange', _0x174a3d);
			});
			if (_0x35f275.onchange === undefined) {
				var _0x144014 = void 0;
				_0x47ef7e.on([
					'tap',
					'click'
				], function () {
					if (_0x65b994(_0x562c10.Event) !== 'object') {
						try {
							_0x144014 = new _0x562c10.Event('change');
						} catch (_0x59af57) {
						}
					}
					!_0x144014 && (_0x144014 = _0x5d8ee4.createEvent('Event'), _0x144014.initEvent('change', true, true));
					_0x35f275.dispatchEvent(_0x144014);
				});
			}
			return _0x47ef7e.handleTracksChange(), _0x47ef7e;
		}
		return _0x120a28.prototype.handleClick = function _0x26f248(_0x55d017) {
			var _0x65e2b5 = this.track.kind, _0x4e9645 = this.track.kinds, _0x2c657f = this.player_.textTracks();
			!_0x4e9645 && (_0x4e9645 = [_0x65e2b5]);
			_0x6d1a4a.prototype.handleClick.call(this, _0x55d017);
			if (!_0x2c657f) {
				return;
			}
			for (var _0x38be85 = 0; _0x38be85 < _0x2c657f.length; _0x38be85++) {
				var _0x3b6809 = _0x2c657f[_0x38be85];
				if (_0x3b6809 === this.track && _0x4e9645.indexOf(_0x3b6809.kind) > -1) {
					_0x3b6809.mode !== 'showing' && (_0x3b6809.mode = 'showing');
				} else {
					_0x3b6809.mode !== 'disabled' && (_0x3b6809.mode = 'disabled');
				}
			}
		}, _0x120a28.prototype.handleTracksChange = function _0x29ea02(_0xe0137d) {
			var _0x584a3a = this.track.mode === 'showing';
			_0x584a3a !== this.isSelected_ && this.selected(_0x584a3a);
		}, _0x120a28.prototype.handleSelectedLanguageChange = function _0x1d08d8(_0x3c2e0b) {
			if (this.track.mode === 'showing') {
				var _0x5a046d = this.player_.cache_.selectedLanguage;
				if (_0x5a046d && _0x5a046d.enabled && _0x5a046d.language === this.track.language && _0x5a046d.kind !== this.track.kind) {
					return;
				}
				this.player_.cache_.selectedLanguage = {
					'enabled': true,
					'language': this.track.language,
					'kind': this.track.kind
				};
			}
		}, _0x120a28.prototype.dispose = function _0x4849c4() {
			this.track = null;
			_0x6d1a4a.prototype.dispose.call(this);
		}, _0x120a28;
	}(_0x5522c8);
	_0x197ed7.registerComponent('TextTrackMenuItem', _0x509c8f);
	var _0x49f4fc = function (_0x5b716e) {
		_0x24aed7(_0x22f60f, _0x5b716e);
		function _0x22f60f(_0x4fe9d6, _0x413124) {
			return _0x2ab3d2(this, _0x22f60f), _0x413124.track = {
				'player': _0x4fe9d6,
				'kind': _0x413124.kind,
				'kinds': _0x413124.kinds,
				'default': false,
				'mode': 'disabled'
			}, !_0x413124.kinds && (_0x413124.kinds = [_0x413124.kind]), _0x413124.label ? _0x413124.track.label = _0x413124.label : _0x413124.track.label = _0x413124.kinds.join(' and ') + ' off', _0x413124.selectable = true, _0x413124.multiSelectable = false, _0x245593(this, _0x5b716e.call(this, _0x4fe9d6, _0x413124));
		}
		return _0x22f60f.prototype.handleTracksChange = function _0x1ec5b7(_0x28db55) {
			var _0x5eadeb = this.player().textTracks(), _0x391fb3 = true;
			for (var _0x5af0c0 = 0, _0x5c4e67 = _0x5eadeb.length; _0x5af0c0 < _0x5c4e67; _0x5af0c0++) {
				var _0x246214 = _0x5eadeb[_0x5af0c0];
				if (this.options_.kinds.indexOf(_0x246214.kind) > -1 && _0x246214.mode === 'showing') {
					_0x391fb3 = false;
					break;
				}
			}
			_0x391fb3 !== this.isSelected_ && this.selected(_0x391fb3);
		}, _0x22f60f.prototype.handleSelectedLanguageChange = function _0x219dfe(_0x430d1b) {
			var _0x18d74 = this.player().textTracks(), _0x3a5ede = true;
			for (var _0x3d8c51 = 0, _0x133fe1 = _0x18d74.length; _0x3d8c51 < _0x133fe1; _0x3d8c51++) {
				var _0x5d8663 = _0x18d74[_0x3d8c51];
				if ([
					'captions',
					'descriptions',
					'subtitles'
				].indexOf(_0x5d8663.kind) > -1 && _0x5d8663.mode === 'showing') {
					_0x3a5ede = false;
					break;
				}
			}
			_0x3a5ede && (this.player_.cache_.selectedLanguage = { 'enabled': false });
		}, _0x22f60f;
	}(_0x509c8f);
	_0x197ed7.registerComponent('OffTextTrackMenuItem', _0x49f4fc);
	var _0x51656e = function (_0x47bdb7) {
		_0x24aed7(_0x574bf9, _0x47bdb7);
		function _0x574bf9(_0x1ff115) {
			var _0x22f946 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			return _0x2ab3d2(this, _0x574bf9), _0x22f946.tracks = _0x1ff115.textTracks(), _0x245593(this, _0x47bdb7.call(this, _0x1ff115, _0x22f946));
		}
		return _0x574bf9.prototype.createItems = function _0x577dfb() {
			var _0x58568c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [], _0x10ac56 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _0x509c8f, _0x2b9b42 = void 0;
			this.label_ && (_0x2b9b42 = this.label_ + ' off');
			_0x58568c.push(new _0x49f4fc(this.player_, {
				'kinds': this.kinds_,
				'kind': this.kind_,
				'label': _0x2b9b42
			}));
			this.hideThreshold_ += 1;
			var _0x1a97d3 = this.player_.textTracks();
			!Array.isArray(this.kinds_) && (this.kinds_ = [this.kind_]);
			for (var _0x593ba1 = 0; _0x593ba1 < _0x1a97d3.length; _0x593ba1++) {
				var _0x4c2dd1 = _0x1a97d3[_0x593ba1];
				if (this.kinds_.indexOf(_0x4c2dd1.kind) > -1) {
					var _0x579148 = new _0x10ac56(this.player_, {
						'track': _0x4c2dd1,
						'selectable': true,
						'multiSelectable': false
					});
					_0x579148.addClass('vjs-' + _0x4c2dd1.kind + '-menu-item');
					_0x58568c.push(_0x579148);
				}
			}
			return _0x58568c;
		}, _0x574bf9;
	}(_0x3be544);
	_0x197ed7.registerComponent('TextTrackButton', _0x51656e);
	var _0x177a70 = function (_0x13e0b6) {
		_0x24aed7(_0x48c96c, _0x13e0b6);
		function _0x48c96c(_0x3a5c70, _0x124db2) {
			_0x2ab3d2(this, _0x48c96c);
			var _0x314a3b = _0x124db2.track, _0x213d94 = _0x124db2.cue, _0x524f81 = _0x3a5c70.currentTime();
			_0x124db2.selectable = true;
			_0x124db2.multiSelectable = false;
			_0x124db2.label = _0x213d94.text;
			_0x124db2.selected = _0x213d94.startTime <= _0x524f81 && _0x524f81 < _0x213d94.endTime;
			var _0x131c91 = _0x245593(this, _0x13e0b6.call(this, _0x3a5c70, _0x124db2));
			return _0x131c91.track = _0x314a3b, _0x131c91.cue = _0x213d94, _0x314a3b.addEventListener('cuechange', _0x2e578a(_0x131c91, _0x131c91.update)), _0x131c91;
		}
		return _0x48c96c.prototype.handleClick = function _0x2af693(_0x141cda) {
			_0x13e0b6.prototype.handleClick.call(this);
			this.player_.currentTime(this.cue.startTime);
			this.update(this.cue.startTime);
		}, _0x48c96c.prototype.update = function _0x1dbcdb(_0x54a76c) {
			var _0x4d990f = this.cue, _0x17d840 = this.player_.currentTime();
			this.selected(_0x4d990f.startTime <= _0x17d840 && _0x17d840 < _0x4d990f.endTime);
		}, _0x48c96c;
	}(_0x5522c8);
	_0x197ed7.registerComponent('ChaptersTrackMenuItem', _0x177a70);
	var _0xe65ad0 = function (_0x1eb38d) {
		_0x24aed7(_0x46ac82, _0x1eb38d);
		function _0x46ac82(_0x33a7bd, _0x12ac5a, _0x174915) {
			return _0x2ab3d2(this, _0x46ac82), _0x245593(this, _0x1eb38d.call(this, _0x33a7bd, _0x12ac5a, _0x174915));
		}
		return _0x46ac82.prototype.buildCSSClass = function _0x1d6134() {
			return 'vjs-chapters-button ' + _0x1eb38d.prototype.buildCSSClass.call(this);
		}, _0x46ac82.prototype.buildWrapperCSSClass = function _0x385ad9() {
			return 'vjs-chapters-button ' + _0x1eb38d.prototype.buildWrapperCSSClass.call(this);
		}, _0x46ac82.prototype.update = function _0x3eff3a(_0x1d64da) {
			(!this.track_ || _0x1d64da && (_0x1d64da.type === 'addtrack' || _0x1d64da.type === 'removetrack')) && this.setTrack(this.findChaptersTrack());
			_0x1eb38d.prototype.update.call(this);
		}, _0x46ac82.prototype.setTrack = function _0x3c92a6(_0x303b3f) {
			if (this.track_ === _0x303b3f) {
				return;
			}
			!this.updateHandler_ && (this.updateHandler_ = this.update.bind(this));
			if (this.track_) {
				var _0x5a711a = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
				_0x5a711a && _0x5a711a.removeEventListener('load', this.updateHandler_);
				this.track_ = null;
			}
			this.track_ = _0x303b3f;
			if (this.track_) {
				this.track_.mode = 'hidden';
				var _0x7443 = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
				_0x7443 && _0x7443.addEventListener('load', this.updateHandler_);
			}
		}, _0x46ac82.prototype.findChaptersTrack = function _0x3ee0c4() {
			var _0x157e97 = this.player_.textTracks() || [];
			for (var _0x555f52 = _0x157e97.length - 1; _0x555f52 >= 0; _0x555f52--) {
				var _0x49be8e = _0x157e97[_0x555f52];
				if (_0x49be8e.kind === this.kind_) {
					return _0x49be8e;
				}
			}
		}, _0x46ac82.prototype.getMenuCaption = function _0x1e9027() {
			if (this.track_ && this.track_.label) {
				return this.track_.label;
			}
			return this.localize(_0x104f7f(this.kind_));
		}, _0x46ac82.prototype.createMenu = function _0x475f0e() {
			return this.options_.title = this.getMenuCaption(), _0x1eb38d.prototype.createMenu.call(this);
		}, _0x46ac82.prototype.createItems = function _0x4e9f9d() {
			var _0x391264 = [];
			if (!this.track_) {
				return _0x391264;
			}
			var _0x794fa6 = this.track_.cues;
			if (!_0x794fa6) {
				return _0x391264;
			}
			for (var _0x1390dc = 0, _0x5eac01 = _0x794fa6.length; _0x1390dc < _0x5eac01; _0x1390dc++) {
				var _0x235bf3 = _0x794fa6[_0x1390dc], _0x303f18 = new _0x177a70(this.player_, {
					'track': this.track_,
					'cue': _0x235bf3
				});
				_0x391264.push(_0x303f18);
			}
			return _0x391264;
		}, _0x46ac82;
	}(_0x51656e);
	_0xe65ad0.prototype.kind_ = 'chapters';
	_0xe65ad0.prototype.controlText_ = 'Chapters';
	_0x197ed7.registerComponent('ChaptersButton', _0xe65ad0);
	var _0x58b91d = function (_0x4ecf70) {
		_0x24aed7(_0x20a964, _0x4ecf70);
		function _0x20a964(_0x15b74d, _0x2bdf67, _0x44180d) {
			_0x2ab3d2(this, _0x20a964);
			var _0x34725a = _0x245593(this, _0x4ecf70.call(this, _0x15b74d, _0x2bdf67, _0x44180d)), _0x2206c2 = _0x15b74d.textTracks(), _0x5750a7 = _0x2e578a(_0x34725a, _0x34725a.handleTracksChange);
			return _0x2206c2.addEventListener('change', _0x5750a7), _0x34725a.on('dispose', function () {
				_0x2206c2.removeEventListener('change', _0x5750a7);
			}), _0x34725a;
		}
		return _0x20a964.prototype.handleTracksChange = function _0x57cebc(_0x19fb72) {
			var _0x10b280 = this.player().textTracks(), _0x327eb4 = false;
			for (var _0x5eff78 = 0, _0x44a0a6 = _0x10b280.length; _0x5eff78 < _0x44a0a6; _0x5eff78++) {
				var _0x349682 = _0x10b280[_0x5eff78];
				if (_0x349682.kind !== this.kind_ && _0x349682.mode === 'showing') {
					_0x327eb4 = true;
					break;
				}
			}
			_0x327eb4 ? this.disable() : this.enable();
		}, _0x20a964.prototype.buildCSSClass = function _0x337ef7() {
			return 'vjs-descriptions-button ' + _0x4ecf70.prototype.buildCSSClass.call(this);
		}, _0x20a964.prototype.buildWrapperCSSClass = function _0x8d8abf() {
			return 'vjs-descriptions-button ' + _0x4ecf70.prototype.buildWrapperCSSClass.call(this);
		}, _0x20a964;
	}(_0x51656e);
	_0x58b91d.prototype.kind_ = 'descriptions';
	_0x58b91d.prototype.controlText_ = 'Descriptions';
	_0x197ed7.registerComponent('DescriptionsButton', _0x58b91d);
	var _0x3e8ced = function (_0x7d767a) {
		_0x24aed7(_0x2b8a3a, _0x7d767a);
		function _0x2b8a3a(_0x2a68e, _0x30da4e, _0x15d2af) {
			return _0x2ab3d2(this, _0x2b8a3a), _0x245593(this, _0x7d767a.call(this, _0x2a68e, _0x30da4e, _0x15d2af));
		}
		return _0x2b8a3a.prototype.buildCSSClass = function _0x204608() {
			return 'vjs-subtitles-button ' + _0x7d767a.prototype.buildCSSClass.call(this);
		}, _0x2b8a3a.prototype.buildWrapperCSSClass = function _0x189539() {
			return 'vjs-subtitles-button ' + _0x7d767a.prototype.buildWrapperCSSClass.call(this);
		}, _0x2b8a3a;
	}(_0x51656e);
	_0x3e8ced.prototype.kind_ = 'subtitles';
	_0x3e8ced.prototype.controlText_ = 'Subtitles';
	_0x197ed7.registerComponent('SubtitlesButton', _0x3e8ced);
	var _0x25b0eb = function (_0x4721c3) {
		_0x24aed7(_0x4ea6ab, _0x4721c3);
		function _0x4ea6ab(_0x534eeb, _0x31f698) {
			_0x2ab3d2(this, _0x4ea6ab);
			_0x31f698.track = {
				'player': _0x534eeb,
				'kind': _0x31f698.kind,
				'label': _0x31f698.kind + ' settings',
				'selectable': false,
				'default': false,
				'mode': 'disabled'
			};
			_0x31f698.selectable = false;
			_0x31f698.name = 'CaptionSettingsMenuItem';
			var _0x4ccc0b = _0x245593(this, _0x4721c3.call(this, _0x534eeb, _0x31f698));
			return _0x4ccc0b.addClass('vjs-texttrack-settings'), _0x4ccc0b.controlText(', opens ' + _0x31f698.kind + ' settings dialog'), _0x4ccc0b;
		}
		return _0x4ea6ab.prototype.handleClick = function _0x567d4e(_0x40f5aa) {
			this.player().getChild('textTrackSettings').open();
		}, _0x4ea6ab;
	}(_0x509c8f);
	_0x197ed7.registerComponent('CaptionSettingsMenuItem', _0x25b0eb);
	var _0x306fcd = function (_0xed9f5a) {
		_0x24aed7(_0x457feb, _0xed9f5a);
		function _0x457feb(_0xa010b5, _0x14ade0, _0xa0b394) {
			return _0x2ab3d2(this, _0x457feb), _0x245593(this, _0xed9f5a.call(this, _0xa010b5, _0x14ade0, _0xa0b394));
		}
		return _0x457feb.prototype.buildCSSClass = function _0x3a1c25() {
			return 'vjs-captions-button ' + _0xed9f5a.prototype.buildCSSClass.call(this);
		}, _0x457feb.prototype.buildWrapperCSSClass = function _0x29fcbf() {
			return 'vjs-captions-button ' + _0xed9f5a.prototype.buildWrapperCSSClass.call(this);
		}, _0x457feb.prototype.createItems = function _0x4da01d() {
			var _0x27c80a = [];
			return !(this.player().tech_ && this.player().tech_.featuresNativeTextTracks) && this.player().getChild('textTrackSettings') && (_0x27c80a.push(new _0x25b0eb(this.player_, { 'kind': this.kind_ })), this.hideThreshold_ += 1), _0xed9f5a.prototype.createItems.call(this, _0x27c80a);
		}, _0x457feb;
	}(_0x51656e);
	_0x306fcd.prototype.kind_ = 'captions';
	_0x306fcd.prototype.controlText_ = 'Captions';
	_0x197ed7.registerComponent('CaptionsButton', _0x306fcd);
	var _0x4713f1 = function (_0x3a2190) {
		_0x24aed7(_0x5c894c, _0x3a2190);
		function _0x5c894c() {
			return _0x2ab3d2(this, _0x5c894c), _0x245593(this, _0x3a2190.apply(this, arguments));
		}
		return _0x5c894c.prototype.createEl = function _0xf0373b(_0x79a3bb, _0xa5c1f4, _0x526544) {
			var _0x1dcb55 = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
			this.options_.track.kind === 'captions' && (_0x1dcb55 += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize('Captions') + '</span>\n      ');
			_0x1dcb55 += '</span>';
			var _0x2bdd8a = _0x3a2190.prototype.createEl.call(this, _0x79a3bb, _0x2476f0({ 'innerHTML': _0x1dcb55 }, _0xa5c1f4), _0x526544);
			return _0x2bdd8a;
		}, _0x5c894c;
	}(_0x509c8f);
	_0x197ed7.registerComponent('SubsCapsMenuItem', _0x4713f1);
	var _0x2e4cbf = function (_0x5d5a7d) {
		_0x24aed7(_0x5ae33c, _0x5d5a7d);
		function _0x5ae33c(_0x37e35d) {
			var _0x4cc67f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			_0x2ab3d2(this, _0x5ae33c);
			var _0x51e18d = _0x245593(this, _0x5d5a7d.call(this, _0x37e35d, _0x4cc67f));
			return _0x51e18d.label_ = 'subtitles', [
				'en',
				'en-us',
				'en-ca',
				'fr-ca'
			].indexOf(_0x51e18d.player_.language_) > -1 && (_0x51e18d.label_ = 'captions'), _0x51e18d.menuButton_.controlText(_0x104f7f(_0x51e18d.label_)), _0x51e18d;
		}
		return _0x5ae33c.prototype.buildCSSClass = function _0x40c154() {
			return 'vjs-subs-caps-button ' + _0x5d5a7d.prototype.buildCSSClass.call(this);
		}, _0x5ae33c.prototype.buildWrapperCSSClass = function _0x2aa94b() {
			return 'vjs-subs-caps-button ' + _0x5d5a7d.prototype.buildWrapperCSSClass.call(this);
		}, _0x5ae33c.prototype.createItems = function _0x5146d2() {
			var _0x320ff7 = [];
			return !(this.player().tech_ && this.player().tech_.featuresNativeTextTracks) && this.player().getChild('textTrackSettings') && (_0x320ff7.push(new _0x25b0eb(this.player_, { 'kind': this.label_ })), this.hideThreshold_ += 1), _0x320ff7 = _0x5d5a7d.prototype.createItems.call(this, _0x320ff7, _0x4713f1), _0x320ff7;
		}, _0x5ae33c;
	}(_0x51656e);
	_0x2e4cbf.prototype.kinds_ = [
		'captions',
		'subtitles'
	];
	_0x2e4cbf.prototype.controlText_ = 'Subtitles';
	_0x197ed7.registerComponent('SubsCapsButton', _0x2e4cbf);
	var _0x377885 = function (_0x4d7331) {
		_0x24aed7(_0x9694b8, _0x4d7331);
		function _0x9694b8(_0x39e7dc, _0x34d476) {
			_0x2ab3d2(this, _0x9694b8);
			var _0xb91a10 = _0x34d476.track, _0x1234a9 = _0x39e7dc.audioTracks();
			_0x34d476.label = _0xb91a10.label || _0xb91a10.language || 'Unknown';
			_0x34d476.selected = _0xb91a10.enabled;
			var _0x3a392f = _0x245593(this, _0x4d7331.call(this, _0x39e7dc, _0x34d476));
			_0x3a392f.track = _0xb91a10;
			_0x3a392f.addClass('vjs-' + _0xb91a10.kind + '-menu-item');
			var _0x1ed060 = function _0x24a6ac() {
				for (var _0x44c298 = arguments.length, _0x491b1b = Array(_0x44c298), _0x41d260 = 0; _0x41d260 < _0x44c298; _0x41d260++) {
					_0x491b1b[_0x41d260] = arguments[_0x41d260];
				}
				_0x3a392f.handleTracksChange.apply(_0x3a392f, _0x491b1b);
			};
			return _0x1234a9.addEventListener('change', _0x1ed060), _0x3a392f.on('dispose', function () {
				_0x1234a9.removeEventListener('change', _0x1ed060);
			}), _0x3a392f;
		}
		return _0x9694b8.prototype.createEl = function _0x3d93f2(_0x1028cc, _0x7fe1b1, _0x4dcdb9) {
			var _0x1f8402 = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
			this.options_.track.kind === 'main-desc' && (_0x1f8402 += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize('Descriptions') + '</span>\n      ');
			_0x1f8402 += '</span>';
			var _0x189390 = _0x4d7331.prototype.createEl.call(this, _0x1028cc, _0x2476f0({ 'innerHTML': _0x1f8402 }, _0x7fe1b1), _0x4dcdb9);
			return _0x189390;
		}, _0x9694b8.prototype.handleClick = function _0x4ee4dd(_0x244487) {
			var _0x21b4f2 = this.player_.audioTracks();
			_0x4d7331.prototype.handleClick.call(this, _0x244487);
			for (var _0x1e75dc = 0; _0x1e75dc < _0x21b4f2.length; _0x1e75dc++) {
				var _0x135711 = _0x21b4f2[_0x1e75dc];
				_0x135711.enabled = _0x135711 === this.track;
			}
		}, _0x9694b8.prototype.handleTracksChange = function _0x37e6bd(_0x1220d5) {
			this.selected(this.track.enabled);
		}, _0x9694b8;
	}(_0x5522c8);
	_0x197ed7.registerComponent('AudioTrackMenuItem', _0x377885);
	var _0x307cf0 = function (_0x51d415) {
		_0x24aed7(_0x2f0fce, _0x51d415);
		function _0x2f0fce(_0x1261a1) {
			var _0x47dd8a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			return _0x2ab3d2(this, _0x2f0fce), _0x47dd8a.tracks = _0x1261a1.audioTracks(), _0x245593(this, _0x51d415.call(this, _0x1261a1, _0x47dd8a));
		}
		return _0x2f0fce.prototype.buildCSSClass = function _0x5d1546() {
			return 'vjs-audio-button ' + _0x51d415.prototype.buildCSSClass.call(this);
		}, _0x2f0fce.prototype.buildWrapperCSSClass = function _0xa10faf() {
			return 'vjs-audio-button ' + _0x51d415.prototype.buildWrapperCSSClass.call(this);
		}, _0x2f0fce.prototype.createItems = function _0x31c761() {
			var _0x2c1f24 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			this.hideThreshold_ = 1;
			var _0x4b752d = this.player_.audioTracks();
			for (var _0x3fdbd0 = 0; _0x3fdbd0 < _0x4b752d.length; _0x3fdbd0++) {
				var _0xee3ab1 = _0x4b752d[_0x3fdbd0];
				_0x2c1f24.push(new _0x377885(this.player_, {
					'track': _0xee3ab1,
					'selectable': true,
					'multiSelectable': false
				}));
			}
			return _0x2c1f24;
		}, _0x2f0fce;
	}(_0x3be544);
	_0x307cf0.prototype.controlText_ = 'Audio Track';
	_0x197ed7.registerComponent('AudioTrackButton', _0x307cf0);
	var _0x36e80c = function (_0x56f1fd) {
		_0x24aed7(_0x54442f, _0x56f1fd);
		function _0x54442f(_0x278ea5, _0x1c051d) {
			_0x2ab3d2(this, _0x54442f);
			var _0x418be8 = _0x1c051d.rate, _0x871994 = parseFloat(_0x418be8, 10);
			_0x1c051d.label = _0x418be8;
			_0x1c051d.selected = _0x871994 === 1;
			_0x1c051d.selectable = true;
			_0x1c051d.multiSelectable = false;
			var _0x308380 = _0x245593(this, _0x56f1fd.call(this, _0x278ea5, _0x1c051d));
			return _0x308380.label = _0x418be8, _0x308380.rate = _0x871994, _0x308380.on(_0x278ea5, 'ratechange', _0x308380.update), _0x308380;
		}
		return _0x54442f.prototype.handleClick = function _0xd6fc16(_0x344ac8) {
			_0x56f1fd.prototype.handleClick.call(this);
			this.player().playbackRate(this.rate);
		}, _0x54442f.prototype.update = function _0x48275e(_0x2fae22) {
			this.selected(this.player().playbackRate() === this.rate);
		}, _0x54442f;
	}(_0x5522c8);
	_0x36e80c.prototype.contentElType = 'button';
	_0x197ed7.registerComponent('PlaybackRateMenuItem', _0x36e80c);
	var _0x1c8f47 = function (_0x5b75b9) {
		_0x24aed7(_0x4a7e04, _0x5b75b9);
		function _0x4a7e04(_0x24b572, _0x32fa19) {
			_0x2ab3d2(this, _0x4a7e04);
			var _0x2038b2 = _0x245593(this, _0x5b75b9.call(this, _0x24b572, _0x32fa19));
			return _0x2038b2.updateVisibility(), _0x2038b2.updateLabel(), _0x2038b2.on(_0x24b572, 'loadstart', _0x2038b2.updateVisibility), _0x2038b2.on(_0x24b572, 'ratechange', _0x2038b2.updateLabel), _0x2038b2;
		}
		return _0x4a7e04.prototype.createEl = function _0x1a2752() {
			var _0x4a86be = _0x5b75b9.prototype.createEl.call(this);
			return this.labelEl_ = _0x30c03e('div', {
				'className': 'vjs-playback-rate-value',
				'innerHTML': '1x'
			}), _0x4a86be.appendChild(this.labelEl_), _0x4a86be;
		}, _0x4a7e04.prototype.dispose = function _0x4d4d2a() {
			this.labelEl_ = null;
			_0x5b75b9.prototype.dispose.call(this);
		}, _0x4a7e04.prototype.buildCSSClass = function _0x34bafb() {
			return 'vjs-playback-rate ' + _0x5b75b9.prototype.buildCSSClass.call(this);
		}, _0x4a7e04.prototype.buildWrapperCSSClass = function _0x290eff() {
			return 'vjs-playback-rate ' + _0x5b75b9.prototype.buildWrapperCSSClass.call(this);
		}, _0x4a7e04.prototype.createMenu = function _0x3809f5() {
			var _0xa2e83f = new _0x2081d(this.player()), _0x730273 = this.playbackRates();
			if (_0x730273) {
				for (var _0x49ac1f = _0x730273.length - 1; _0x49ac1f >= 0; _0x49ac1f--) {
					_0xa2e83f.addChild(new _0x36e80c(this.player(), { 'rate': _0x730273[_0x49ac1f] + 'x' }));
				}
			}
			return _0xa2e83f;
		}, _0x4a7e04.prototype.updateARIAAttributes = function _0x1c9a3f() {
			this.el().setAttribute('aria-valuenow', this.player().playbackRate());
		}, _0x4a7e04.prototype.handleClick = function _0x13c9a2(_0x3611ef) {
			var _0x40de1b = this.player().playbackRate(), _0x135cb8 = this.playbackRates(), _0x56a402 = _0x135cb8[0];
			for (var _0x3c3703 = 0; _0x3c3703 < _0x135cb8.length; _0x3c3703++) {
				if (_0x135cb8[_0x3c3703] > _0x40de1b) {
					_0x56a402 = _0x135cb8[_0x3c3703];
					break;
				}
			}
			this.player().playbackRate(_0x56a402);
		}, _0x4a7e04.prototype.playbackRates = function _0xbd2880() {
			return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates;
		}, _0x4a7e04.prototype.playbackRateSupported = function _0x43418f() {
			return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0;
		}, _0x4a7e04.prototype.updateVisibility = function _0x247e02(_0x5e7b22) {
			this.playbackRateSupported() ? this.removeClass('vjs-hidden') : this.addClass('vjs-hidden');
		}, _0x4a7e04.prototype.updateLabel = function _0x51bc91(_0x509f08) {
			this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + 'x');
		}, _0x4a7e04;
	}(_0x17444d);
	_0x1c8f47.prototype.controlText_ = 'Playback Rate';
	_0x197ed7.registerComponent('PlaybackRateMenuButton', _0x1c8f47);
	var _0x33e1f6 = function (_0x4d7716) {
		_0x24aed7(_0x2b0162, _0x4d7716);
		function _0x2b0162() {
			return _0x2ab3d2(this, _0x2b0162), _0x245593(this, _0x4d7716.apply(this, arguments));
		}
		return _0x2b0162.prototype.buildCSSClass = function _0x2262e8() {
			return 'vjs-spacer ' + _0x4d7716.prototype.buildCSSClass.call(this);
		}, _0x2b0162.prototype.createEl = function _0x5a64a8() {
			return _0x4d7716.prototype.createEl.call(this, 'div', { 'className': this.buildCSSClass() });
		}, _0x2b0162;
	}(_0x197ed7);
	_0x197ed7.registerComponent('Spacer', _0x33e1f6);
	var _0x1b7649 = function (_0x132f42) {
		_0x24aed7(_0x3552bb, _0x132f42);
		function _0x3552bb() {
			return _0x2ab3d2(this, _0x3552bb), _0x245593(this, _0x132f42.apply(this, arguments));
		}
		return _0x3552bb.prototype.buildCSSClass = function _0x373858() {
			return 'vjs-custom-control-spacer ' + _0x132f42.prototype.buildCSSClass.call(this);
		}, _0x3552bb.prototype.createEl = function _0xab307a() {
			var _0x4097e8 = _0x132f42.prototype.createEl.call(this, { 'className': this.buildCSSClass() });
			return _0x4097e8.innerHTML = '\xA0', _0x4097e8;
		}, _0x3552bb;
	}(_0x33e1f6);
	_0x197ed7.registerComponent('CustomControlSpacer', _0x1b7649);
	var _0x1de685 = function (_0x2fcb90) {
		_0x24aed7(_0x366c16, _0x2fcb90);
		function _0x366c16() {
			return _0x2ab3d2(this, _0x366c16), _0x245593(this, _0x2fcb90.apply(this, arguments));
		}
		return _0x366c16.prototype.createEl = function _0x6d2d56() {
			return _0x2fcb90.prototype.createEl.call(this, 'div', {
				'className': 'vjs-control-bar',
				'dir': 'ltr'
			});
		}, _0x366c16;
	}(_0x197ed7);
	_0x1de685.prototype.options_ = {
		'children': [
			'playToggle',
			'volumePanel',
			'currentTimeDisplay',
			'timeDivider',
			'durationDisplay',
			'progressControl',
			'liveDisplay',
			'remainingTimeDisplay',
			'customControlSpacer',
			'playbackRateMenuButton',
			'chaptersButton',
			'descriptionsButton',
			'subsCapsButton',
			'audioTrackButton',
			'fullscreenToggle'
		]
	};
	_0x197ed7.registerComponent('ControlBar', _0x1de685);
	var _0x27973a = function (_0x4710fc) {
		_0x24aed7(_0x1f3ca9, _0x4710fc);
		function _0x1f3ca9(_0x223cc1, _0x400c44) {
			_0x2ab3d2(this, _0x1f3ca9);
			var _0x6d9f9d = _0x245593(this, _0x4710fc.call(this, _0x223cc1, _0x400c44));
			return _0x6d9f9d.on(_0x223cc1, 'error', _0x6d9f9d.open), _0x6d9f9d;
		}
		return _0x1f3ca9.prototype.buildCSSClass = function _0x5ead04() {
			return 'vjs-error-display ' + _0x4710fc.prototype.buildCSSClass.call(this);
		}, _0x1f3ca9.prototype.content = function _0x530098() {
			var _0x115cac = this.player().error();
			return _0x115cac ? this.localize(_0x115cac.message) : '';
		}, _0x1f3ca9;
	}(_0xb4c1b9);
	_0x27973a.prototype.options_ = _0x47ec58(_0xb4c1b9.prototype.options_, {
		'pauseOnOpen': false,
		'fillAlways': true,
		'temporary': false,
		'uncloseable': true
	});
	_0x197ed7.registerComponent('ErrorDisplay', _0x27973a);
	var _0x2194ae = 'vjs-text-track-settings', _0x5953d6 = [
		'#000',
		'Black'
	], _0xd040ed = [
		'#00F',
		'Blue'
	], _0x1b852f = [
		'#0FF',
		'Cyan'
	], _0x4fd863 = [
		'#0F0',
		'Green'
	], _0x53a0eb = [
		'#F0F',
		'Magenta'
	], _0x58f958 = [
		'#F00',
		'Red'
	], _0x1e85d9 = [
		'#FFF',
		'White'
	], _0x544fde = [
		'#FF0',
		'Yellow'
	], _0x318f90 = [
		'1',
		'Opaque'
	], _0x4cab28 = [
		'0.5',
		'Semi-Transparent'
	], _0x1bd5ce = [
		'0',
		'Transparent'
	], _0xdab2f0 = {
		'backgroundColor': {
			'selector': '.vjs-bg-color > select',
			'id': 'captions-background-color-%s',
			'label': 'Color',
			'options': [
				_0x5953d6,
				_0x1e85d9,
				_0x58f958,
				_0x4fd863,
				_0xd040ed,
				_0x544fde,
				_0x53a0eb,
				_0x1b852f
			]
		},
		'backgroundOpacity': {
			'selector': '.vjs-bg-opacity > select',
			'id': 'captions-background-opacity-%s',
			'label': 'Transparency',
			'options': [
				_0x318f90,
				_0x4cab28,
				_0x1bd5ce
			]
		},
		'color': {
			'selector': '.vjs-fg-color > select',
			'id': 'captions-foreground-color-%s',
			'label': 'Color',
			'options': [
				_0x1e85d9,
				_0x5953d6,
				_0x58f958,
				_0x4fd863,
				_0xd040ed,
				_0x544fde,
				_0x53a0eb,
				_0x1b852f
			]
		},
		'edgeStyle': {
			'selector': '.vjs-edge-style > select',
			'id': '%s',
			'label': 'Text Edge Style',
			'options': [
				[
					'none',
					'None'
				],
				[
					'raised',
					'Raised'
				],
				[
					'depressed',
					'Depressed'
				],
				[
					'uniform',
					'Uniform'
				],
				[
					'dropshadow',
					'Dropshadow'
				]
			]
		},
		'fontFamily': {
			'selector': '.vjs-font-family > select',
			'id': 'captions-font-family-%s',
			'label': 'Font Family',
			'options': [
				[
					'proportionalSansSerif',
					'Proportional Sans-Serif'
				],
				[
					'monospaceSansSerif',
					'Monospace Sans-Serif'
				],
				[
					'proportionalSerif',
					'Proportional Serif'
				],
				[
					'monospaceSerif',
					'Monospace Serif'
				],
				[
					'casual',
					'Casual'
				],
				[
					'script',
					'Script'
				],
				[
					'small-caps',
					'Small Caps'
				]
			]
		},
		'fontPercent': {
			'selector': '.vjs-font-percent > select',
			'id': 'captions-font-size-%s',
			'label': 'Font Size',
			'options': [
				[
					'0.50',
					'50%'
				],
				[
					'0.75',
					'75%'
				],
				[
					'1.00',
					'100%'
				],
				[
					'1.25',
					'125%'
				],
				[
					'1.50',
					'150%'
				],
				[
					'1.75',
					'175%'
				],
				[
					'2.00',
					'200%'
				],
				[
					'3.00',
					'300%'
				],
				[
					'4.00',
					'400%'
				]
			],
			'default': 2,
			'parser': function _0x2640e9(_0x3562bf) {
				return _0x3562bf === '1.00' ? null : Number(_0x3562bf);
			}
		},
		'textOpacity': {
			'selector': '.vjs-text-opacity > select',
			'id': 'captions-foreground-opacity-%s',
			'label': 'Transparency',
			'options': [
				_0x318f90,
				_0x4cab28
			]
		},
		'windowColor': {
			'selector': '.vjs-window-color > select',
			'id': 'captions-window-color-%s',
			'label': 'Color'
		},
		'windowOpacity': {
			'selector': '.vjs-window-opacity > select',
			'id': 'captions-window-opacity-%s',
			'label': 'Transparency',
			'options': [
				_0x1bd5ce,
				_0x4cab28,
				_0x318f90
			]
		}
	};
	_0xdab2f0.windowColor.options = _0xdab2f0.backgroundColor.options;
	function _0x2e6044(_0x595da9, _0x2d6d60) {
		_0x2d6d60 && (_0x595da9 = _0x2d6d60(_0x595da9));
		if (_0x595da9 && _0x595da9 !== 'none') {
			return _0x595da9;
		}
	}
	function _0x34d9a1(_0x519291, _0xb785e6) {
		var _0xf77f43 = _0x519291.options[_0x519291.options.selectedIndex].value;
		return _0x2e6044(_0xf77f43, _0xb785e6);
	}
	function _0x348f2d(_0x37c1db, _0x3aac46, _0x5b0c50) {
		if (!_0x3aac46) {
			return;
		}
		for (var _0x4cb041 = 0; _0x4cb041 < _0x37c1db.options.length; _0x4cb041++) {
			if (_0x2e6044(_0x37c1db.options[_0x4cb041].value, _0x5b0c50) === _0x3aac46) {
				_0x37c1db.selectedIndex = _0x4cb041;
				break;
			}
		}
	}
	var _0x24cfd1 = function (_0x57d2f1) {
		_0x24aed7(_0x4192d1, _0x57d2f1);
		function _0x4192d1(_0x2b25f9, _0x5903c1) {
			_0x2ab3d2(this, _0x4192d1);
			_0x5903c1.temporary = false;
			var _0x5b98e3 = _0x245593(this, _0x57d2f1.call(this, _0x2b25f9, _0x5903c1));
			return _0x5b98e3.updateDisplay = _0x2e578a(_0x5b98e3, _0x5b98e3.updateDisplay), _0x5b98e3.fill(), _0x5b98e3.hasBeenOpened_ = _0x5b98e3.hasBeenFilled_ = true, _0x5b98e3.endDialog = _0x30c03e('p', {
				'className': 'vjs-control-text',
				'textContent': _0x5b98e3.localize('End of dialog window.')
			}), _0x5b98e3.el().appendChild(_0x5b98e3.endDialog), _0x5b98e3.setDefaults(), _0x5903c1.persistTextTrackSettings === undefined && (_0x5b98e3.options_.persistTextTrackSettings = _0x5b98e3.options_.playerOptions.persistTextTrackSettings), _0x5b98e3.on(_0x5b98e3['$']('.vjs-done-button'), 'click', function () {
				_0x5b98e3.saveSettings();
				_0x5b98e3.close();
			}), _0x5b98e3.on(_0x5b98e3['$']('.vjs-default-button'), 'click', function () {
				_0x5b98e3.setDefaults();
				_0x5b98e3.updateDisplay();
			}), _0x5e2c44(_0xdab2f0, function (_0x21dc2d) {
				_0x5b98e3.on(_0x5b98e3['$'](_0x21dc2d.selector), 'change', _0x5b98e3.updateDisplay);
			}), _0x5b98e3.options_.persistTextTrackSettings && _0x5b98e3.restoreSettings(), _0x5b98e3;
		}
		return _0x4192d1.prototype.dispose = function _0xae6c3f() {
			this.endDialog = null;
			_0x57d2f1.prototype.dispose.call(this);
		}, _0x4192d1.prototype.createElSelect_ = function _0x3f0d7b(_0x11d222) {
			var _0x2061f5 = this, _0x3f6d67 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '', _0x3ce258 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'label', _0xfb6eb8 = _0xdab2f0[_0x11d222], _0x3f1c70 = _0xfb6eb8.id.replace('%s', this.id_), _0x2bdaa2 = [
				_0x3f6d67,
				_0x3f1c70
			].join(' ').trim();
			return [
				'<' + _0x3ce258 + ' id="' + _0x3f1c70 + '" class="' + (_0x3ce258 === 'label' ? 'vjs-label' : '') + '">',
				this.localize(_0xfb6eb8.label),
				'</' + _0x3ce258 + '>',
				'<select aria-labelledby="' + _0x2bdaa2 + '">'
			].concat(_0xfb6eb8.options.map(function (_0x3b9316) {
				var _0x282f3f = _0x3f1c70 + '-' + _0x3b9316[1].replace(/\W+/g, '');
				return [
					'<option id="' + _0x282f3f + '" value="' + _0x3b9316[0] + '" ',
					'aria-labelledby="' + _0x2bdaa2 + ' ' + _0x282f3f + '">',
					_0x2061f5.localize(_0x3b9316[1]),
					'</option>'
				].join('');
			})).concat('</select>').join('');
		}, _0x4192d1.prototype.createElFgColor_ = function _0x26e04f() {
			var _0x34cca6 = 'captions-text-legend-' + this.id_;
			return [
				'<fieldset class="vjs-fg-color vjs-track-setting">',
				'<legend id="' + _0x34cca6 + '">',
				this.localize('Text'),
				'</legend>',
				this.createElSelect_('color', _0x34cca6),
				'<span class="vjs-text-opacity vjs-opacity">',
				this.createElSelect_('textOpacity', _0x34cca6),
				'</span>',
				'</fieldset>'
			].join('');
		}, _0x4192d1.prototype.createElBgColor_ = function _0x1b6fec() {
			var _0x5053fb = 'captions-background-' + this.id_;
			return [
				'<fieldset class="vjs-bg-color vjs-track-setting">',
				'<legend id="' + _0x5053fb + '">',
				this.localize('Background'),
				'</legend>',
				this.createElSelect_('backgroundColor', _0x5053fb),
				'<span class="vjs-bg-opacity vjs-opacity">',
				this.createElSelect_('backgroundOpacity', _0x5053fb),
				'</span>',
				'</fieldset>'
			].join('');
		}, _0x4192d1.prototype.createElWinColor_ = function _0x5d3992() {
			var _0xb24c8d = 'captions-window-' + this.id_;
			return [
				'<fieldset class="vjs-window-color vjs-track-setting">',
				'<legend id="' + _0xb24c8d + '">',
				this.localize('Window'),
				'</legend>',
				this.createElSelect_('windowColor', _0xb24c8d),
				'<span class="vjs-window-opacity vjs-opacity">',
				this.createElSelect_('windowOpacity', _0xb24c8d),
				'</span>',
				'</fieldset>'
			].join('');
		}, _0x4192d1.prototype.createElColors_ = function _0x277050() {
			return _0x30c03e('div', {
				'className': 'vjs-track-settings-colors',
				'innerHTML': [
					this.createElFgColor_(),
					this.createElBgColor_(),
					this.createElWinColor_()
				].join('')
			});
		}, _0x4192d1.prototype.createElFont_ = function _0x11f307() {
			return _0x30c03e('div', {
				'className': 'vjs-track-settings-font',
				'innerHTML': [
					'<fieldset class="vjs-font-percent vjs-track-setting">',
					this.createElSelect_('fontPercent', '', 'legend'),
					'</fieldset>',
					'<fieldset class="vjs-edge-style vjs-track-setting">',
					this.createElSelect_('edgeStyle', '', 'legend'),
					'</fieldset>',
					'<fieldset class="vjs-font-family vjs-track-setting">',
					this.createElSelect_('fontFamily', '', 'legend'),
					'</fieldset>'
				].join('')
			});
		}, _0x4192d1.prototype.createElControls_ = function _0x419d58() {
			var _0x1e9f18 = this.localize('restore all settings to the default values');
			return _0x30c03e('div', {
				'className': 'vjs-track-settings-controls',
				'innerHTML': [
					'<button class="vjs-default-button" title="' + _0x1e9f18 + '">',
					this.localize('Reset'),
					'<span class="vjs-control-text"> ' + _0x1e9f18 + '</span>',
					'</button>',
					'<button class="vjs-done-button">' + this.localize('Done') + '</button>'
				].join('')
			});
		}, _0x4192d1.prototype.content = function _0x27c1e9() {
			return [
				this.createElColors_(),
				this.createElFont_(),
				this.createElControls_()
			];
		}, _0x4192d1.prototype.label = function _0x2370fa() {
			return this.localize('Caption Settings Dialog');
		}, _0x4192d1.prototype.description = function _0x137ec0() {
			return this.localize('Beginning of dialog window. Escape will cancel and close the window.');
		}, _0x4192d1.prototype.buildCSSClass = function _0x946ddf() {
			return _0x57d2f1.prototype.buildCSSClass.call(this) + ' vjs-text-track-settings';
		}, _0x4192d1.prototype.getValues = function _0x26795e() {
			var _0x16edda = this;
			return _0x27643f(_0xdab2f0, function (_0x4e8415, _0x2acc6a, _0x47c7fb) {
				var _0x6fc34b = _0x34d9a1(_0x16edda['$'](_0x2acc6a.selector), _0x2acc6a.parser);
				return _0x6fc34b !== undefined && (_0x4e8415[_0x47c7fb] = _0x6fc34b), _0x4e8415;
			}, {});
		}, _0x4192d1.prototype.setValues = function _0x1a0f85(_0x37c0bc) {
			var _0x5617ff = this;
			_0x5e2c44(_0xdab2f0, function (_0x5c2fe8, _0x47f721) {
				_0x348f2d(_0x5617ff['$'](_0x5c2fe8.selector), _0x37c0bc[_0x47f721], _0x5c2fe8.parser);
			});
		}, _0x4192d1.prototype.setDefaults = function _0x364d50() {
			var _0x4b5598 = this;
			_0x5e2c44(_0xdab2f0, function (_0x33cb2b) {
				var _0x23520c = _0x33cb2b.hasOwnProperty('default') ? _0x33cb2b.default : 0;
				_0x4b5598['$'](_0x33cb2b.selector).selectedIndex = _0x23520c;
			});
		}, _0x4192d1.prototype.restoreSettings = function _0x176bed() {
			var _0x39b9b5 = void 0;
			try {
				_0x39b9b5 = JSON.parse(_0x562c10.localStorage.getItem(_0x2194ae));
			} catch (_0x4404ec) {
				_0x50330f.warn(_0x4404ec);
			}
			_0x39b9b5 && this.setValues(_0x39b9b5);
		}, _0x4192d1.prototype.saveSettings = function _0xcb5caa() {
			if (!this.options_.persistTextTrackSettings) {
				return;
			}
			var _0x33c436 = this.getValues();
			try {
				Object.keys(_0x33c436).length ? _0x562c10.localStorage.setItem(_0x2194ae, JSON.stringify(_0x33c436)) : _0x562c10.localStorage.removeItem(_0x2194ae);
			} catch (_0x4716ee) {
				_0x50330f.warn(_0x4716ee);
			}
		}, _0x4192d1.prototype.updateDisplay = function _0x423167() {
			var _0x486e81 = this.player_.getChild('textTrackDisplay');
			_0x486e81 && _0x486e81.updateDisplay();
		}, _0x4192d1.prototype.conditionalBlur_ = function _0x46fad9() {
			this.previouslyActiveEl_ = null;
			this.off(_0x5d8ee4, 'keydown', this.handleKeyDown);
			var _0x3eb0be = this.player_.controlBar, _0x26226f = _0x3eb0be && _0x3eb0be.subsCapsButton, _0x3daafd = _0x3eb0be && _0x3eb0be.captionsButton;
			if (_0x26226f) {
				_0x26226f.focus();
			} else {
				_0x3daafd && _0x3daafd.focus();
			}
		}, _0x4192d1;
	}(_0xb4c1b9);
	_0x197ed7.registerComponent('TextTrackSettings', _0x24cfd1);
	var _0x5507d2 = function (_0x360bb5) {
		_0x24aed7(_0x169f1c, _0x360bb5);
		function _0x169f1c(_0x20ad4b, _0x1c9e6c) {
			_0x2ab3d2(this, _0x169f1c);
			var _0xcd280c = _0x1c9e6c.ResizeObserver || _0x562c10.ResizeObserver;
			_0x1c9e6c.ResizeObserver === null && (_0xcd280c = false);
			var _0x2ffac8 = _0x47ec58({
				'createEl': !_0xcd280c,
				'reportTouchActivity': false
			}, _0x1c9e6c), _0xf18009 = _0x245593(this, _0x360bb5.call(this, _0x20ad4b, _0x2ffac8));
			return _0xf18009.ResizeObserver = _0x1c9e6c.ResizeObserver || _0x562c10.ResizeObserver, _0xf18009.loadListener_ = null, _0xf18009.resizeObserver_ = null, _0xf18009.debouncedHandler_ = _0x1abf42(function () {
				_0xf18009.resizeHandler();
			}, 100, false, _0x20ad4b), _0xcd280c ? (_0xf18009.resizeObserver_ = new _0xf18009.ResizeObserver(_0xf18009.debouncedHandler_), _0xf18009.resizeObserver_.observe(_0x20ad4b.el())) : (_0xf18009.loadListener_ = function () {
				_0xf18009.el_.contentWindow && _0x7b0228(_0xf18009.el_.contentWindow, 'resize', _0xf18009.debouncedHandler_);
				_0xf18009.off('load', _0xf18009.loadListener_);
			}, _0xf18009.on('load', _0xf18009.loadListener_)), _0xf18009;
		}
		return _0x169f1c.prototype.createEl = function _0x41e1bd() {
			return _0x360bb5.prototype.createEl.call(this, 'iframe', { 'className': 'vjs-resize-manager' });
		}, _0x169f1c.prototype.resizeHandler = function _0x53d5fe() {
			this.player_.trigger('playerresize');
		}, _0x169f1c.prototype.dispose = function _0x42df6a() {
			this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect());
			this.el_ && this.el_.contentWindow && _0x706013(this.el_.contentWindow, 'resize', this.debouncedHandler_);
			this.loadListener_ && this.off('load', this.loadListener_);
			this.debouncedHandler_ && this.debouncedHandler_.cancel();
			this.ResizeObserver = null;
			this.resizeObserver = null;
			this.debouncedHandler_ = null;
			this.loadListener_ = null;
			_0x360bb5.prototype.dispose.call(this);
		}, _0x169f1c;
	}(_0x197ed7);
	_0x197ed7.registerComponent('ResizeManager', _0x5507d2);
	var _0x2f36c7 = function _0x3dd9c3(_0x129f11) {
		var _0x4ce91a = _0x129f11.el();
		if (_0x4ce91a.hasAttribute('src')) {
			return _0x129f11.triggerSourceset(_0x4ce91a.src), true;
		}
		var _0x3f7655 = _0x129f11['$$']('source'), _0x372856 = [], _0x2f80a2 = '';
		if (!_0x3f7655.length) {
			return false;
		}
		for (var _0x5561ec = 0; _0x5561ec < _0x3f7655.length; _0x5561ec++) {
			var _0x148bfe = _0x3f7655[_0x5561ec].src;
			_0x148bfe && _0x372856.indexOf(_0x148bfe) === -1 && _0x372856.push(_0x148bfe);
		}
		if (!_0x372856.length) {
			return false;
		}
		return _0x372856.length === 1 && (_0x2f80a2 = _0x372856[0]), _0x129f11.triggerSourceset(_0x2f80a2), true;
	}, _0x5e0105 = Object.defineProperty({}, 'innerHTML', {
		'get': function _0x317a98() {
			return this.cloneNode(true).innerHTML;
		},
		'set': function _0x34cc29(_0x2c059d) {
			var _0x4536d3 = _0x5d8ee4.createElement(this.nodeName.toLowerCase());
			_0x4536d3.innerHTML = _0x2c059d;
			var _0x1e2201 = _0x5d8ee4.createDocumentFragment();
			while (_0x4536d3.childNodes.length) {
				_0x1e2201.appendChild(_0x4536d3.childNodes[0]);
			}
			return this.innerText = '', _0x562c10.Element.prototype.appendChild.call(this, _0x1e2201), this.innerHTML;
		}
	}), _0x40a1e8 = function _0x45b1cf(_0x45583f, _0x400eba) {
		var _0x4cef84 = {};
		for (var _0x6a4f6d = 0; _0x6a4f6d < _0x45583f.length; _0x6a4f6d++) {
			_0x4cef84 = Object.getOwnPropertyDescriptor(_0x45583f[_0x6a4f6d], _0x400eba);
			if (_0x4cef84 && _0x4cef84.set && _0x4cef84.get) {
				break;
			}
		}
		return _0x4cef84.enumerable = true, _0x4cef84.configurable = true, _0x4cef84;
	}, _0x3c50ba = function _0x3502d8(_0x1f7843) {
		return _0x40a1e8([
			_0x1f7843.el(),
			_0x562c10.HTMLMediaElement.prototype,
			_0x562c10.Element.prototype,
			_0x5e0105
		], 'innerHTML');
	}, _0x4fc23e = function _0x514279(_0x4dc841) {
		var _0x17a212 = _0x4dc841.el();
		if (_0x17a212.resetSourceWatch_) {
			return;
		}
		var _0xa7e5d0 = { _0x2b65a3: _0x17a212[_0x2b65a3] }, _0x217189 = _0x3c50ba(_0x4dc841), _0x32604e = function _0x1925ae(_0x1c0a15) {
			return function () {
				for (var _0x1e5f22 = arguments.length, _0x3bd9a1 = Array(_0x1e5f22), _0x2327d7 = 0; _0x2327d7 < _0x1e5f22; _0x2327d7++) {
					_0x3bd9a1[_0x2327d7] = arguments[_0x2327d7];
				}
				var _0x551aa7 = _0x1c0a15.apply(_0x17a212, _0x3bd9a1);
				return _0x2f36c7(_0x4dc841), _0x551aa7;
			};
		};
		[
			'append',
			'appendChild',
			'insertAdjacentHTML'
		].forEach(function (_0x2b65a3) {
			if (!_0x17a212[_0x2b65a3]) {
				return;
			}
			_0x17a212[_0x2b65a3] = _0x32604e(_0xa7e5d0[_0x2b65a3]);
		});
		Object.defineProperty(_0x17a212, 'innerHTML', _0x47ec58(_0x217189, { 'set': _0x32604e(_0x217189.set) }));
		_0x17a212.resetSourceWatch_ = function () {
			_0x17a212.resetSourceWatch_ = null;
			Object.keys(_0xa7e5d0).forEach(function (_0x2a9264) {
				_0x17a212[_0x2a9264] = _0xa7e5d0[_0x2a9264];
			});
			Object.defineProperty(_0x17a212, 'innerHTML', _0x217189);
		};
		_0x4dc841.one('sourceset', _0x17a212.resetSourceWatch_);
	}, _0x3ed118 = Object.defineProperty({}, 'src', {
		'get': function _0x4b6196() {
			if (this.hasAttribute('src')) {
				return _0x1ca1ea(_0x562c10.Element.prototype.getAttribute.call(this, 'src'));
			}
			return '';
		},
		'set': function _0x267265(_0x21bc44) {
			return _0x562c10.Element.prototype.setAttribute.call(this, 'src', _0x21bc44), _0x21bc44;
		}
	}), _0x22240e = function _0x46feab(_0x10ecad) {
		return _0x40a1e8([
			_0x10ecad.el(),
			_0x562c10.HTMLMediaElement.prototype,
			_0x3ed118
		], 'src');
	}, _0x1954ed = function _0xe991a1(_0x40b9be) {
		if (!_0x40b9be.featuresSourceset) {
			return;
		}
		var _0x33888c = _0x40b9be.el();
		if (_0x33888c.resetSourceset_) {
			return;
		}
		var _0x438136 = _0x22240e(_0x40b9be), _0x157090 = _0x33888c.setAttribute, _0x1bd2ec = _0x33888c.load;
		Object.defineProperty(_0x33888c, 'src', _0x47ec58(_0x438136, {
			'set': function _0x1e2cbb(_0x46b2ce) {
				var _0x1762d9 = _0x438136.set.call(_0x33888c, _0x46b2ce);
				return _0x40b9be.triggerSourceset(_0x33888c.src), _0x1762d9;
			}
		}));
		_0x33888c.setAttribute = function (_0x3a0f80, _0x275010) {
			var _0x2dac86 = _0x157090.call(_0x33888c, _0x3a0f80, _0x275010);
			return /src/i.test(_0x3a0f80) && _0x40b9be.triggerSourceset(_0x33888c.src), _0x2dac86;
		};
		_0x33888c.load = function () {
			var _0x433dd8 = _0x1bd2ec.call(_0x33888c);
			return !_0x2f36c7(_0x40b9be) && (_0x40b9be.triggerSourceset(''), _0x4fc23e(_0x40b9be)), _0x433dd8;
		};
		if (_0x33888c.currentSrc) {
			_0x40b9be.triggerSourceset(_0x33888c.currentSrc);
		} else {
			!_0x2f36c7(_0x40b9be) && _0x4fc23e(_0x40b9be);
		}
		_0x33888c.resetSourceset_ = function () {
			_0x33888c.resetSourceset_ = null;
			_0x33888c.load = _0x1bd2ec;
			_0x33888c.setAttribute = _0x157090;
			Object.defineProperty(_0x33888c, 'src', _0x438136);
			_0x33888c.resetSourceWatch_ && _0x33888c.resetSourceWatch_();
		};
	}, _0x55938e = _0x4d2b57(['Text Tracks are being loaded from another origin but the crossorigin attribute isn\'t used.\n            This may prevent text tracks from loading.'], ['Text Tracks are being loaded from another origin but the crossorigin attribute isn\'t used.\n            This may prevent text tracks from loading.']), _0x5bbdf6 = function (_0x3e1d2d) {
		_0x24aed7(_0x2191e3, _0x3e1d2d);
		function _0x2191e3(_0x7e0fa8, _0x4713a8) {
			_0x2ab3d2(this, _0x2191e3);
			var _0x154f9f = _0x245593(this, _0x3e1d2d.call(this, _0x7e0fa8, _0x4713a8)), _0x3cc044 = _0x7e0fa8.source, _0x4ba289 = false;
			_0x3cc044 && (_0x154f9f.el_.currentSrc !== _0x3cc044.src || _0x7e0fa8.tag && _0x7e0fa8.tag.initNetworkState_ === 3) ? _0x154f9f.setSource(_0x3cc044) : _0x154f9f.handleLateInit_(_0x154f9f.el_);
			_0x7e0fa8.enableSourceset && _0x154f9f.setupSourcesetHandling_();
			if (_0x154f9f.el_.hasChildNodes()) {
				var _0x33de8f = _0x154f9f.el_.childNodes, _0x4c8445 = _0x33de8f.length, _0x4aadac = [];
				while (_0x4c8445--) {
					var _0x259f2f = _0x33de8f[_0x4c8445], _0x9c8a46 = _0x259f2f.nodeName.toLowerCase();
					_0x9c8a46 === 'track' && (!_0x154f9f.featuresNativeTextTracks ? _0x4aadac.push(_0x259f2f) : (_0x154f9f.remoteTextTrackEls().addTrackElement_(_0x259f2f), _0x154f9f.remoteTextTracks().addTrack(_0x259f2f.track), _0x154f9f.textTracks().addTrack(_0x259f2f.track), !_0x4ba289 && !_0x154f9f.el_.hasAttribute('crossorigin') && _0x6e9b63(_0x259f2f.src) && (_0x4ba289 = true)));
				}
				for (var _0x43d412 = 0; _0x43d412 < _0x4aadac.length; _0x43d412++) {
					_0x154f9f.el_.removeChild(_0x4aadac[_0x43d412]);
				}
			}
			return _0x154f9f.proxyNativeTracks_(), _0x154f9f.featuresNativeTextTracks && _0x4ba289 && _0x50330f.warn(_0x9a968(_0x55938e)), _0x154f9f.restoreMetadataTracksInIOSNativePlayer_(), (_0x721419 || _0x4565d5 || _0x4e2ff6) && _0x7e0fa8.nativeControlsForTouch === true && _0x154f9f.setControls(true), _0x154f9f.proxyWebkitFullscreen_(), _0x154f9f.triggerReady(), _0x154f9f;
		}
		return _0x2191e3.prototype.dispose = function _0x45cd23() {
			this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_();
			_0x2191e3.disposeMediaElement(this.el_);
			this.options_ = null;
			_0x3e1d2d.prototype.dispose.call(this);
		}, _0x2191e3.prototype.setupSourcesetHandling_ = function _0x4f1e78() {
			_0x1954ed(this);
		}, _0x2191e3.prototype.restoreMetadataTracksInIOSNativePlayer_ = function _0x201ab5() {
			var _0x1dc983 = this.textTracks(), _0x271415 = void 0, _0x49ebf1 = function _0x439f8d() {
				_0x271415 = [];
				for (var _0x42c3e9 = 0; _0x42c3e9 < _0x1dc983.length; _0x42c3e9++) {
					var _0x2c57c0 = _0x1dc983[_0x42c3e9];
					_0x2c57c0.kind === 'metadata' && _0x271415.push({
						'track': _0x2c57c0,
						'storedMode': _0x2c57c0.mode
					});
				}
			};
			_0x49ebf1();
			_0x1dc983.addEventListener('change', _0x49ebf1);
			this.on('dispose', function () {
				return _0x1dc983.removeEventListener('change', _0x49ebf1);
			});
			var _0x576d71 = function _0x564d4c() {
				for (var _0x813289 = 0; _0x813289 < _0x271415.length; _0x813289++) {
					var _0x4a7583 = _0x271415[_0x813289];
					_0x4a7583.track.mode === 'disabled' && _0x4a7583.track.mode !== _0x4a7583.storedMode && (_0x4a7583.track.mode = _0x4a7583.storedMode);
				}
				_0x1dc983.removeEventListener('change', _0x564d4c);
			};
			this.on('webkitbeginfullscreen', function () {
				_0x1dc983.removeEventListener('change', _0x49ebf1);
				_0x1dc983.removeEventListener('change', _0x576d71);
				_0x1dc983.addEventListener('change', _0x576d71);
			});
			this.on('webkitendfullscreen', function () {
				_0x1dc983.removeEventListener('change', _0x49ebf1);
				_0x1dc983.addEventListener('change', _0x49ebf1);
				_0x1dc983.removeEventListener('change', _0x576d71);
			});
		}, _0x2191e3.prototype.overrideNative_ = function _0x372d22(_0x714e04, _0x4f22af) {
			var _0x566bda = this;
			if (_0x4f22af !== this['featuresNative' + _0x714e04 + 'Tracks']) {
				return;
			}
			var _0x4d3a90 = _0x714e04.toLowerCase();
			this[_0x4d3a90 + 'TracksListeners_'] && Object.keys(this[_0x4d3a90 + 'TracksListeners_']).forEach(function (_0x1a5217) {
				var _0xc05439 = _0x566bda.el()[_0x4d3a90 + 'Tracks'];
				_0xc05439.removeEventListener(_0x1a5217, _0x566bda[_0x4d3a90 + 'TracksListeners_'][_0x1a5217]);
			});
			this['featuresNative' + _0x714e04 + 'Tracks'] = !_0x4f22af;
			this[_0x4d3a90 + 'TracksListeners_'] = null;
			this.proxyNativeTracksForType_(_0x4d3a90);
		}, _0x2191e3.prototype.overrideNativeAudioTracks = function _0x4508ce(_0x3faeec) {
			this.overrideNative_('Audio', _0x3faeec);
		}, _0x2191e3.prototype.overrideNativeVideoTracks = function _0x5c51cf(_0x145489) {
			this.overrideNative_('Video', _0x145489);
		}, _0x2191e3.prototype.proxyNativeTracksForType_ = function _0xff04cd(_0x1b4324) {
			var _0x5942db = this, _0x53b009 = _0x2edb32[_0x1b4324], _0x2515cc = this.el()[_0x53b009.getterName], _0x8b6fda = this[_0x53b009.getterName]();
			if (!this['featuresNative' + _0x53b009.capitalName + 'Tracks'] || !_0x2515cc || !_0x2515cc.addEventListener) {
				return;
			}
			var _0x1430aa = {
				'change': function _0x58c085(_0x2d5e0e) {
					_0x8b6fda.trigger({
						'type': 'change',
						'target': _0x8b6fda,
						'currentTarget': _0x8b6fda,
						'srcElement': _0x8b6fda
					});
				},
				'addtrack': function _0x503713(_0x2a0dd7) {
					_0x8b6fda.addTrack(_0x2a0dd7.track);
				},
				'removetrack': function _0x4f3e72(_0x197bd3) {
					_0x8b6fda.removeTrack(_0x197bd3.track);
				}
			}, _0x2657e2 = function _0x1bc313() {
				var _0x3d9929 = [];
				for (var _0x15d2c5 = 0; _0x15d2c5 < _0x8b6fda.length; _0x15d2c5++) {
					var _0x386d55 = false;
					for (var _0x171513 = 0; _0x171513 < _0x2515cc.length; _0x171513++) {
						if (_0x2515cc[_0x171513] === _0x8b6fda[_0x15d2c5]) {
							_0x386d55 = true;
							break;
						}
					}
					!_0x386d55 && _0x3d9929.push(_0x8b6fda[_0x15d2c5]);
				}
				while (_0x3d9929.length) {
					_0x8b6fda.removeTrack(_0x3d9929.shift());
				}
			};
			this[_0x53b009.getterName + 'Listeners_'] = _0x1430aa;
			Object.keys(_0x1430aa).forEach(function (_0xe5a8d3) {
				var _0x2cc0db = _0x1430aa[_0xe5a8d3];
				_0x2515cc.addEventListener(_0xe5a8d3, _0x2cc0db);
				_0x5942db.on('dispose', function (_0x2ef5b3) {
					return _0x2515cc.removeEventListener(_0xe5a8d3, _0x2cc0db);
				});
			});
			this.on('loadstart', _0x2657e2);
			this.on('dispose', function (_0x4eefee) {
				return _0x5942db.off('loadstart', _0x2657e2);
			});
		}, _0x2191e3.prototype.proxyNativeTracks_ = function _0x51fee0() {
			var _0x2f4c5d = this;
			_0x2edb32.names.forEach(function (_0x10525c) {
				_0x2f4c5d.proxyNativeTracksForType_(_0x10525c);
			});
		}, _0x2191e3.prototype.createEl = function _0x2724c2() {
			var _0x5bb1ae = this.options_.tag;
			if (!_0x5bb1ae || !(this.options_.playerElIngest || this.movingMediaElementInDOM)) {
				if (_0x5bb1ae) {
					var _0x2a33ac = _0x5bb1ae.cloneNode(true);
					_0x5bb1ae.parentNode && _0x5bb1ae.parentNode.insertBefore(_0x2a33ac, _0x5bb1ae);
					_0x2191e3.disposeMediaElement(_0x5bb1ae);
					_0x5bb1ae = _0x2a33ac;
				} else {
					_0x5bb1ae = _0x5d8ee4.createElement('video');
					var _0x17efd9 = this.options_.tag && _0x1ac51a(this.options_.tag), _0x22577d = _0x47ec58({}, _0x17efd9);
					(!_0x721419 || this.options_.nativeControlsForTouch !== true) && delete _0x22577d.controls;
					_0x512187(_0x5bb1ae, _0x2476f0(_0x22577d, {
						'id': this.options_.techId,
						'class': 'vjs-tech'
					}));
				}
				_0x5bb1ae.playerId = this.options_.playerId;
			}
			typeof this.options_.preload !== 'undefined' && _0x125f72(_0x5bb1ae, 'preload', this.options_.preload);
			var _0x24132a = [
				'loop',
				'muted',
				'playsinline',
				'autoplay'
			];
			for (var _0x1584cf = 0; _0x1584cf < _0x24132a.length; _0x1584cf++) {
				var _0x3cf5c8 = _0x24132a[_0x1584cf], _0x40b8ad = this.options_[_0x3cf5c8];
				if (typeof _0x40b8ad !== 'undefined') {
					_0x40b8ad ? _0x125f72(_0x5bb1ae, _0x3cf5c8, _0x3cf5c8) : _0x151189(_0x5bb1ae, _0x3cf5c8);
					_0x5bb1ae[_0x3cf5c8] = _0x40b8ad;
				}
			}
			return _0x5bb1ae;
		}, _0x2191e3.prototype.handleLateInit_ = function _0x3cb3aa(_0x2e839d) {
			if (_0x2e839d.networkState === 0 || _0x2e839d.networkState === 3) {
				return;
			}
			if (_0x2e839d.readyState === 0) {
				var _0x4f3110 = false, _0x175c38 = function _0x5bdef2() {
					_0x4f3110 = true;
				};
				this.on('loadstart', _0x175c38);
				var _0x1835d5 = function _0x2bb6f7() {
					!_0x4f3110 && this.trigger('loadstart');
				};
				this.on('loadedmetadata', _0x1835d5);
				this.ready(function () {
					this.off('loadstart', _0x175c38);
					this.off('loadedmetadata', _0x1835d5);
					!_0x4f3110 && this.trigger('loadstart');
				});
				return;
			}
			var _0x1f8d0a = ['loadstart'];
			_0x1f8d0a.push('loadedmetadata');
			_0x2e839d.readyState >= 2 && _0x1f8d0a.push('loadeddata');
			_0x2e839d.readyState >= 3 && _0x1f8d0a.push('canplay');
			_0x2e839d.readyState >= 4 && _0x1f8d0a.push('canplaythrough');
			this.ready(function () {
				_0x1f8d0a.forEach(function (_0x58ea74) {
					this.trigger(_0x58ea74);
				}, this);
			});
		}, _0x2191e3.prototype.setCurrentTime = function _0x2642a2(_0x4b265a) {
			try {
				this.el_.currentTime = _0x4b265a;
			} catch (_0x5602d7) {
				_0x50330f(_0x5602d7, 'Video is not ready. (Video.js)');
			}
		}, _0x2191e3.prototype.duration = function _0x4834f5() {
			var _0x2a240c = this;
			if (this.el_.duration === Infinity && _0x4c1649 && _0x5e4c1c && this.el_.currentTime === 0) {
				var _0x2a9a16 = function _0x25321e() {
					if (_0x2a240c.el_.currentTime > 0) {
						_0x2a240c.el_.duration === Infinity && _0x2a240c.trigger('durationchange');
						_0x2a240c.off('timeupdate', _0x25321e);
					}
				};
				return this.on('timeupdate', _0x2a9a16), NaN;
			}
			return this.el_.duration || NaN;
		}, _0x2191e3.prototype.width = function _0x2c66bc() {
			return this.el_.offsetWidth;
		}, _0x2191e3.prototype.height = function _0x368ab2() {
			return this.el_.offsetHeight;
		}, _0x2191e3.prototype.proxyWebkitFullscreen_ = function _0x288ada() {
			var _0x128e85 = this;
			if (!('webkitDisplayingFullscreen' in this.el_)) {
				return;
			}
			var _0x1d62ec = function _0x1a6a79() {
				this.trigger('fullscreenchange', { 'isFullscreen': false });
			}, _0x446f94 = function _0x55769e() {
				'webkitPresentationMode' in this.el_ && this.el_.webkitPresentationMode !== 'picture-in-picture' && (this.one('webkitendfullscreen', _0x1d62ec), this.trigger('fullscreenchange', { 'isFullscreen': true }));
			};
			this.on('webkitbeginfullscreen', _0x446f94);
			this.on('dispose', function () {
				_0x128e85.off('webkitbeginfullscreen', _0x446f94);
				_0x128e85.off('webkitendfullscreen', _0x1d62ec);
			});
		}, _0x2191e3.prototype.supportsFullScreen = function _0x1c1d94() {
			if (typeof this.el_.webkitEnterFullScreen === 'function') {
				var _0x4b3b01 = _0x562c10.navigator && _0x562c10.navigator.userAgent || '';
				if (/Android/.test(_0x4b3b01) || !/Chrome|Mac OS X 10.5/.test(_0x4b3b01)) {
					return true;
				}
			}
			return false;
		}, _0x2191e3.prototype.enterFullScreen = function _0x5609be() {
			var _0xf249b2 = this.el_;
			_0xf249b2.paused && _0xf249b2.networkState <= _0xf249b2.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function () {
				_0xf249b2.pause();
				_0xf249b2.webkitEnterFullScreen();
			}, 0)) : _0xf249b2.webkitEnterFullScreen();
		}, _0x2191e3.prototype.exitFullScreen = function _0x22f781() {
			this.el_.webkitExitFullScreen();
		}, _0x2191e3.prototype.src = function _0x40a887(_0x346080) {
			if (_0x346080 === undefined) {
				return this.el_.src;
			}
			this.setSrc(_0x346080);
		}, _0x2191e3.prototype.reset = function _0x5c79a5() {
			_0x2191e3.resetMediaElement(this.el_);
		}, _0x2191e3.prototype.currentSrc = function _0x5bc885() {
			if (this.currentSource_) {
				return this.currentSource_.src;
			}
			return this.el_.currentSrc;
		}, _0x2191e3.prototype.setControls = function _0x553b1b(_0xfc4e1f) {
			this.el_.controls = !!_0xfc4e1f;
		}, _0x2191e3.prototype.addTextTrack = function _0x15396e(_0x19e829, _0x35f67e, _0x49959f) {
			if (!this.featuresNativeTextTracks) {
				return _0x3e1d2d.prototype.addTextTrack.call(this, _0x19e829, _0x35f67e, _0x49959f);
			}
			return this.el_.addTextTrack(_0x19e829, _0x35f67e, _0x49959f);
		}, _0x2191e3.prototype.createRemoteTextTrack = function _0xe811fa(_0x1cf4b5) {
			if (!this.featuresNativeTextTracks) {
				return _0x3e1d2d.prototype.createRemoteTextTrack.call(this, _0x1cf4b5);
			}
			var _0x4b8f9e = _0x5d8ee4.createElement('track');
			return _0x1cf4b5.kind && (_0x4b8f9e.kind = _0x1cf4b5.kind), _0x1cf4b5.label && (_0x4b8f9e.label = _0x1cf4b5.label), (_0x1cf4b5.language || _0x1cf4b5.srclang) && (_0x4b8f9e.srclang = _0x1cf4b5.language || _0x1cf4b5.srclang), _0x1cf4b5.default && (_0x4b8f9e.default = _0x1cf4b5.default), _0x1cf4b5.id && (_0x4b8f9e.id = _0x1cf4b5.id), _0x1cf4b5.src && (_0x4b8f9e.src = _0x1cf4b5.src), _0x4b8f9e;
		}, _0x2191e3.prototype.addRemoteTextTrack = function _0x29f393(_0x557f9c, _0x3e10f8) {
			var _0x4a238e = _0x3e1d2d.prototype.addRemoteTextTrack.call(this, _0x557f9c, _0x3e10f8);
			return this.featuresNativeTextTracks && this.el().appendChild(_0x4a238e), _0x4a238e;
		}, _0x2191e3.prototype.removeRemoteTextTrack = function _0x35154c(_0x35ae3c) {
			_0x3e1d2d.prototype.removeRemoteTextTrack.call(this, _0x35ae3c);
			if (this.featuresNativeTextTracks) {
				var _0x1a927d = this['$$']('track'), _0x44bd2e = _0x1a927d.length;
				while (_0x44bd2e--) {
					(_0x35ae3c === _0x1a927d[_0x44bd2e] || _0x35ae3c === _0x1a927d[_0x44bd2e].track) && this.el().removeChild(_0x1a927d[_0x44bd2e]);
				}
			}
		}, _0x2191e3.prototype.getVideoPlaybackQuality = function _0x6c5f33() {
			if (typeof this.el().getVideoPlaybackQuality === 'function') {
				return this.el().getVideoPlaybackQuality();
			}
			var _0x542984 = { creationTime: _0x562c10.performance.now() };
			typeof this.el().webkitDroppedFrameCount !== 'undefined' && typeof this.el().webkitDecodedFrameCount !== 'undefined' && (_0x542984.droppedVideoFrames = this.el().webkitDroppedFrameCount, _0x542984.totalVideoFrames = this.el().webkitDecodedFrameCount);
			if (_0x562c10.performance && typeof _0x562c10.performance.now === 'function') {
			} else {
				_0x562c10.performance && _0x562c10.performance.timing && typeof _0x562c10.performance.timing.navigationStart === 'number' && (_0x542984.creationTime = _0x562c10.Date.now() - _0x562c10.performance.timing.navigationStart);
			}
			return _0x542984;
		}, _0x2191e3;
	}(_0x3ed9ba);
	if (_0x2e6e42()) {
		_0x5bbdf6.TEST_VID = _0x5d8ee4.createElement('video');
		var _0x10620f = _0x5d8ee4.createElement('track');
		_0x10620f.kind = 'captions';
		_0x10620f.srclang = 'en';
		_0x10620f.label = 'English';
		_0x5bbdf6.TEST_VID.appendChild(_0x10620f);
	}
	_0x5bbdf6.isSupported = function () {
		try {
			_0x5bbdf6.TEST_VID.volume = 0.5;
		} catch (_0x29a596) {
			return false;
		}
		return !!(_0x5bbdf6.TEST_VID && _0x5bbdf6.TEST_VID.canPlayType);
	};
	_0x5bbdf6.canPlayType = function (_0x5a8a83) {
		return _0x5bbdf6.TEST_VID.canPlayType(_0x5a8a83);
	};
	_0x5bbdf6.canPlaySource = function (_0x4541a9, _0xb6f594) {
		return _0x5bbdf6.canPlayType(_0x4541a9.type);
	};
	_0x5bbdf6.canControlVolume = function () {
		try {
			var _0x5c6448 = _0x5bbdf6.TEST_VID.volume;
			return _0x5bbdf6.TEST_VID.volume = _0x5c6448 / 2 + 0.1, _0x5c6448 !== _0x5bbdf6.TEST_VID.volume;
		} catch (_0x86d377) {
			return false;
		}
	};
	_0x5bbdf6.canMuteVolume = function () {
		try {
			var _0x131e7e = _0x5bbdf6.TEST_VID.muted;
			return _0x5bbdf6.TEST_VID.muted = !_0x131e7e, _0x5bbdf6.TEST_VID.muted ? _0x125f72(_0x5bbdf6.TEST_VID, 'muted', 'muted') : _0x151189(_0x5bbdf6.TEST_VID, 'muted', 'muted'), _0x131e7e !== _0x5bbdf6.TEST_VID.muted;
		} catch (_0xfd7d4f) {
			return false;
		}
	};
	_0x5bbdf6.canControlPlaybackRate = function () {
		if (_0x4c1649 && _0x5e4c1c && _0x472c75 < 58) {
			return false;
		}
		try {
			var _0x53d087 = _0x5bbdf6.TEST_VID.playbackRate;
			return _0x5bbdf6.TEST_VID.playbackRate = _0x53d087 / 2 + 0.1, _0x53d087 !== _0x5bbdf6.TEST_VID.playbackRate;
		} catch (_0x3cc82f) {
			return false;
		}
	};
	_0x5bbdf6.canOverrideAttributes = function () {
		try {
			var _0x3ea97b = function _0x1056d4() {
			};
			Object.defineProperty(_0x5d8ee4.createElement('video'), 'src', {
				'get': _0x3ea97b,
				'set': _0x3ea97b
			});
			Object.defineProperty(_0x5d8ee4.createElement('audio'), 'src', {
				'get': _0x3ea97b,
				'set': _0x3ea97b
			});
			Object.defineProperty(_0x5d8ee4.createElement('video'), 'innerHTML', {
				'get': _0x3ea97b,
				'set': _0x3ea97b
			});
			Object.defineProperty(_0x5d8ee4.createElement('audio'), 'innerHTML', {
				'get': _0x3ea97b,
				'set': _0x3ea97b
			});
		} catch (_0x12ef8a) {
			return false;
		}
		return true;
	};
	_0x5bbdf6.supportsNativeTextTracks = function () {
		return _0x5258aa || _0xb76ea2 && _0x5e4c1c;
	};
	_0x5bbdf6.supportsNativeVideoTracks = function () {
		return !!(_0x5bbdf6.TEST_VID && _0x5bbdf6.TEST_VID.videoTracks);
	};
	_0x5bbdf6.supportsNativeAudioTracks = function () {
		return !!(_0x5bbdf6.TEST_VID && _0x5bbdf6.TEST_VID.audioTracks);
	};
	_0x5bbdf6.Events = [
		'loadstart',
		'suspend',
		'abort',
		'error',
		'emptied',
		'stalled',
		'loadedmetadata',
		'loadeddata',
		'canplay',
		'canplaythrough',
		'playing',
		'waiting',
		'seeking',
		'seeked',
		'ended',
		'durationchange',
		'timeupdate',
		'progress',
		'play',
		'pause',
		'ratechange',
		'resize',
		'volumechange'
	];
	_0x5bbdf6.prototype.featuresVolumeControl = _0x5bbdf6.canControlVolume();
	_0x5bbdf6.prototype.featuresMuteControl = _0x5bbdf6.canMuteVolume();
	_0x5bbdf6.prototype.featuresPlaybackRate = _0x5bbdf6.canControlPlaybackRate();
	_0x5bbdf6.prototype.featuresSourceset = _0x5bbdf6.canOverrideAttributes();
	_0x5bbdf6.prototype.movingMediaElementInDOM = !_0xb76ea2;
	_0x5bbdf6.prototype.featuresFullscreenResize = true;
	_0x5bbdf6.prototype.featuresProgressEvents = true;
	_0x5bbdf6.prototype.featuresTimeupdateEvents = true;
	_0x5bbdf6.prototype.featuresNativeTextTracks = _0x5bbdf6.supportsNativeTextTracks();
	_0x5bbdf6.prototype.featuresNativeVideoTracks = _0x5bbdf6.supportsNativeVideoTracks();
	_0x5bbdf6.prototype.featuresNativeAudioTracks = _0x5bbdf6.supportsNativeAudioTracks();
	var _0x1a0690 = _0x5bbdf6.TEST_VID && _0x5bbdf6.TEST_VID.constructor.prototype.canPlayType;
	_0x5bbdf6.patchCanPlayType = function () {
		_0x568e35 >= 4 && !_0x1b7d83 && !_0x5e4c1c && (_0x5bbdf6.TEST_VID.constructor.prototype.canPlayType = function (_0x1925f2) {
			if (_0x1925f2 && /^application\/(?:x-|vnd\.apple\.)mpegurl/i.test(_0x1925f2)) {
				return 'maybe';
			}
			return _0x1a0690.call(this, _0x1925f2);
		});
	};
	_0x5bbdf6.unpatchCanPlayType = function () {
		var _0x381cc5 = _0x5bbdf6.TEST_VID.constructor.prototype.canPlayType;
		return _0x5bbdf6.TEST_VID.constructor.prototype.canPlayType = _0x1a0690, _0x381cc5;
	};
	_0x5bbdf6.patchCanPlayType();
	_0x5bbdf6.disposeMediaElement = function (_0x409cf5) {
		if (!_0x409cf5) {
			return;
		}
		_0x409cf5.parentNode && _0x409cf5.parentNode.removeChild(_0x409cf5);
		while (_0x409cf5.hasChildNodes()) {
			_0x409cf5.removeChild(_0x409cf5.firstChild);
		}
		_0x409cf5.removeAttribute('src');
		typeof _0x409cf5.load === 'function' && (function () {
			try {
				_0x409cf5.load();
			} catch (_0x193500) {
			}
		}());
	};
	_0x5bbdf6.resetMediaElement = function (_0x3b6002) {
		if (!_0x3b6002) {
			return;
		}
		var _0x11e557 = _0x3b6002.querySelectorAll('source'), _0x18f0df = _0x11e557.length;
		while (_0x18f0df--) {
			_0x3b6002.removeChild(_0x11e557[_0x18f0df]);
		}
		_0x3b6002.removeAttribute('src');
		typeof _0x3b6002.load === 'function' && (function () {
			try {
				_0x3b6002.load();
			} catch (_0x3616f4) {
			}
		}());
	};
	[
		'muted',
		'defaultMuted',
		'autoplay',
		'controls',
		'loop',
		'playsinline'
	].forEach(function (_0x25b47b) {
		_0x5bbdf6.prototype[_0x25b47b] = function () {
			return this.el_[_0x25b47b] || this.el_.hasAttribute(_0x25b47b);
		};
	});
	[
		'muted',
		'defaultMuted',
		'autoplay',
		'loop',
		'playsinline'
	].forEach(function (_0x1b5618) {
		_0x5bbdf6.prototype['set' + _0x104f7f(_0x1b5618)] = function (_0x340e6f) {
			this.el_[_0x1b5618] = _0x340e6f;
			_0x340e6f ? this.el_.setAttribute(_0x1b5618, _0x1b5618) : this.el_.removeAttribute(_0x1b5618);
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
		'videoHeight'
	].forEach(function (_0xc064f4) {
		_0x5bbdf6.prototype[_0xc064f4] = function () {
			return this.el_[_0xc064f4];
		};
	});
	[
		'volume',
		'src',
		'poster',
		'preload',
		'playbackRate',
		'defaultPlaybackRate'
	].forEach(function (_0x3fbfac) {
		_0x5bbdf6.prototype['set' + _0x104f7f(_0x3fbfac)] = function (_0x126e36) {
			this.el_[_0x3fbfac] = _0x126e36;
		};
	});
	[
		'pause',
		'load',
		'play'
	].forEach(function (_0x41e3e8) {
		_0x5bbdf6.prototype[_0x41e3e8] = function () {
			return this.el_[_0x41e3e8]();
		};
	});
	_0x3ed9ba.withSourceHandlers(_0x5bbdf6);
	_0x5bbdf6.nativeSourceHandler = {};
	_0x5bbdf6.nativeSourceHandler.canPlayType = function (_0x4aa7ff) {
		try {
			return _0x5bbdf6.TEST_VID.canPlayType(_0x4aa7ff);
		} catch (_0x4a36b5) {
			return '';
		}
	};
	_0x5bbdf6.nativeSourceHandler.canHandleSource = function (_0x1ad752, _0x2876a) {
		if (_0x1ad752.type) {
			return _0x5bbdf6.nativeSourceHandler.canPlayType(_0x1ad752.type);
		} else {
			if (_0x1ad752.src) {
				var _0x5e535a = _0x4f9541(_0x1ad752.src);
				return _0x5bbdf6.nativeSourceHandler.canPlayType('video/' + _0x5e535a);
			}
		}
		return '';
	};
	_0x5bbdf6.nativeSourceHandler.handleSource = function (_0x54f596, _0x50cbec, _0x40903a) {
		_0x50cbec.setSrc(_0x54f596.src);
	};
	_0x5bbdf6.nativeSourceHandler.dispose = function () {
	};
	_0x5bbdf6.registerSourceHandler(_0x5bbdf6.nativeSourceHandler);
	_0x3ed9ba.registerTech('Html5', _0x5bbdf6);
	var _0x5493a0 = _0x4d2b57(['\n        Using the tech directly can be dangerous. I hope you know what you\'re doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      '], ['\n        Using the tech directly can be dangerous. I hope you know what you\'re doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      ']), _0x188678 = [
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
		'texttrackchange'
	], _0x11cef4 = {
		'canplay': 'CanPlay',
		'canplaythrough': 'CanPlayThrough',
		'playing': 'Playing',
		'seeked': 'Seeked'
	}, _0x18b894 = function (_0x42f77e) {
		_0x24aed7(_0x128fcf, _0x42f77e);
		function _0x128fcf(_0x57c13e, _0xf73894, _0x5ca968) {
			_0x2ab3d2(this, _0x128fcf);
			_0x57c13e.id = _0x57c13e.id || _0xf73894.id || 'vjs_video_' + _0x32cfd7();
			_0xf73894 = _0x2476f0(_0x128fcf.getTagSettings(_0x57c13e), _0xf73894);
			_0xf73894.initChildren = false;
			_0xf73894.createEl = false;
			_0xf73894.evented = false;
			_0xf73894.reportTouchActivity = false;
			if (!_0xf73894.language) {
				if (typeof _0x57c13e.closest === 'function') {
					var _0x55f56f = _0x57c13e.closest('[lang]');
					_0x55f56f && _0x55f56f.getAttribute && (_0xf73894.language = _0x55f56f.getAttribute('lang'));
				} else {
					var _0x56a401 = _0x57c13e;
					while (_0x56a401 && _0x56a401.nodeType === 1) {
						if (_0x1ac51a(_0x56a401).hasOwnProperty('lang')) {
							_0xf73894.language = _0x56a401.getAttribute('lang');
							break;
						}
						_0x56a401 = _0x56a401.parentNode;
					}
				}
			}
			var _0x3fe24f = _0x245593(this, _0x42f77e.call(this, null, _0xf73894, _0x5ca968));
			_0x3fe24f.isPosterFromTech_ = false;
			_0x3fe24f.queuedCallbacks_ = [];
			_0x3fe24f.isReady_ = false;
			_0x3fe24f.hasStarted_ = false;
			_0x3fe24f.userActive_ = false;
			if (!_0x3fe24f.options_ || !_0x3fe24f.options_.techOrder || !_0x3fe24f.options_.techOrder.length) {
				throw new Error('No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?');
			}
			_0x3fe24f.tag = _0x57c13e;
			_0x3fe24f.tagAttributes = _0x57c13e && _0x1ac51a(_0x57c13e);
			_0x3fe24f.language(_0x3fe24f.options_.language);
			if (_0xf73894.languages) {
				var _0x1c1c15 = {};
				Object.getOwnPropertyNames(_0xf73894.languages).forEach(function (_0x4e08ac) {
					_0x1c1c15[_0x4e08ac.toLowerCase()] = _0xf73894.languages[_0x4e08ac];
				});
				_0x3fe24f.languages_ = _0x1c1c15;
			} else {
				_0x3fe24f.languages_ = _0x128fcf.prototype.options_.languages;
			}
			_0x3fe24f.cache_ = {};
			_0x3fe24f.poster_ = _0xf73894.poster || '';
			_0x3fe24f.controls_ = !!_0xf73894.controls;
			_0x3fe24f.cache_.lastVolume = 1;
			_0x57c13e.controls = false;
			_0x57c13e.removeAttribute('controls');
			_0x57c13e.hasAttribute('autoplay') ? _0x3fe24f.options_.autoplay = true : _0x3fe24f.autoplay(_0x3fe24f.options_.autoplay);
			_0x3fe24f.scrubbing_ = false;
			_0x3fe24f.el_ = _0x3fe24f.createEl();
			_0x3fe24f.cache_.lastPlaybackRate = _0x3fe24f.defaultPlaybackRate();
			_0x3d7203(_0x3fe24f, { 'eventBusKey': 'el_' });
			var _0x58a062 = _0x47ec58(_0x3fe24f.options_);
			if (_0xf73894.plugins) {
				var _0x2706b7 = _0xf73894.plugins;
				Object.keys(_0x2706b7).forEach(function (_0x2b8576) {
					if (typeof this[_0x2b8576] === 'function') {
						this[_0x2b8576](_0x2706b7[_0x2b8576]);
					} else {
						throw new Error('plugin "' + _0x2b8576 + '" does not exist');
					}
				}, _0x3fe24f);
			}
			_0x3fe24f.options_.playerOptions = _0x58a062;
			_0x3fe24f.middleware_ = [];
			_0x3fe24f.initChildren();
			_0x3fe24f.isAudio(_0x57c13e.nodeName.toLowerCase() === 'audio');
			_0x3fe24f.controls() ? _0x3fe24f.addClass('vjs-controls-enabled') : _0x3fe24f.addClass('vjs-controls-disabled');
			_0x3fe24f.el_.setAttribute('role', 'region');
			_0x3fe24f.isAudio() ? _0x3fe24f.el_.setAttribute('aria-label', _0x3fe24f.localize('Audio Player')) : _0x3fe24f.el_.setAttribute('aria-label', _0x3fe24f.localize('Video Player'));
			_0x3fe24f.isAudio() && _0x3fe24f.addClass('vjs-audio');
			_0x3fe24f.flexNotSupported_() && _0x3fe24f.addClass('vjs-no-flex');
			!_0xb76ea2 && _0x3fe24f.addClass('vjs-workinghover');
			_0x128fcf.players[_0x3fe24f.id_] = _0x3fe24f;
			var _0x4825bb = _0x4aafcf.split('.')[0];
			return _0x3fe24f.addClass('vjs-v' + _0x4825bb), _0x3fe24f.userActive(true), _0x3fe24f.reportUserActivity(), _0x3fe24f.one('play', _0x3fe24f.listenForUserActivity_), _0x3fe24f.on('fullscreenchange', _0x3fe24f.handleFullscreenChange_), _0x3fe24f.on('stageclick', _0x3fe24f.handleStageClick_), _0x3fe24f.changingSrc_ = false, _0x3fe24f.playWaitingForReady_ = false, _0x3fe24f.playOnLoadstart_ = null, _0x3fe24f;
		}
		return _0x128fcf.prototype.dispose = function _0x2fdca7() {
			this.trigger('dispose');
			this.off('dispose');
			this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null);
			_0x128fcf.players[this.id_] = null;
			this.tag && this.tag.player && (this.tag.player = null);
			this.el_ && this.el_.player && (this.el_.player = null);
			this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = false, this.poster_ = '');
			this.playerElIngest_ && (this.playerElIngest_ = null);
			this.tag && (this.tag = null);
			_0x2abb65(this);
			_0x42f77e.prototype.dispose.call(this);
		}, _0x128fcf.prototype.createEl = function _0x139270() {
			var _0x128a32 = this.tag, _0x2c7c58 = void 0, _0xd0b80e = this.playerElIngest_ = _0x128a32.parentNode && _0x128a32.parentNode.hasAttribute && _0x128a32.parentNode.hasAttribute('data-vjs-player'), _0x21db66 = this.tag.tagName.toLowerCase() === 'video-js';
			if (_0xd0b80e) {
				_0x2c7c58 = this.el_ = _0x128a32.parentNode;
			} else {
				!_0x21db66 && (_0x2c7c58 = this.el_ = _0x42f77e.prototype.createEl.call(this, 'div'));
			}
			var _0x5102fe = _0x1ac51a(_0x128a32);
			if (_0x21db66) {
				_0x2c7c58 = this.el_ = _0x128a32;
				_0x128a32 = this.tag = _0x5d8ee4.createElement('video');
				while (_0x2c7c58.children.length) {
					_0x128a32.appendChild(_0x2c7c58.firstChild);
				}
				!_0x46db82(_0x2c7c58, 'video-js') && _0x235eb5(_0x2c7c58, 'video-js');
				_0x2c7c58.appendChild(_0x128a32);
				_0xd0b80e = this.playerElIngest_ = _0x2c7c58;
				Object.keys(_0x2c7c58).forEach(function (_0x1366c1) {
					_0x128a32[_0x1366c1] = _0x2c7c58[_0x1366c1];
				});
			}
			_0x128a32.setAttribute('tabindex', '-1');
			_0x3c9115 && _0x128a32.setAttribute('role', 'application');
			_0x128a32.removeAttribute('width');
			_0x128a32.removeAttribute('height');
			Object.getOwnPropertyNames(_0x5102fe).forEach(function (_0x5cdfdd) {
				!(_0x21db66 && _0x5cdfdd === 'class') && _0x2c7c58.setAttribute(_0x5cdfdd, _0x5102fe[_0x5cdfdd]);
				_0x21db66 && _0x128a32.setAttribute(_0x5cdfdd, _0x5102fe[_0x5cdfdd]);
			});
			_0x128a32.playerId = _0x128a32.id;
			_0x128a32.id += '_html5_api';
			_0x128a32.className = 'vjs-tech';
			_0x128a32.player = _0x2c7c58.player = this;
			this.addClass('vjs-paused');
			if (_0x562c10.VIDEOJS_NO_DYNAMIC_STYLE !== true) {
				this.styleEl_ = _0xf5e320('vjs-styles-dimensions');
				var _0x4da5dc = _0x12e31e('.vjs-styles-defaults'), _0x417e32 = _0x12e31e('head');
				_0x417e32.insertBefore(this.styleEl_, _0x4da5dc ? _0x4da5dc.nextSibling : _0x417e32.firstChild);
			}
			this.width(this.options_.width);
			this.height(this.options_.height);
			this.fluid(this.options_.fluid);
			this.aspectRatio(this.options_.aspectRatio);
			var _0x937bb0 = _0x128a32.getElementsByTagName('a');
			for (var _0x4c5e7a = 0; _0x4c5e7a < _0x937bb0.length; _0x4c5e7a++) {
				var _0x545bda = _0x937bb0.item(_0x4c5e7a);
				_0x235eb5(_0x545bda, 'vjs-hidden');
				_0x545bda.setAttribute('hidden', 'hidden');
			}
			return _0x128a32.initNetworkState_ = _0x128a32.networkState, _0x128a32.parentNode && !_0xd0b80e && _0x128a32.parentNode.insertBefore(_0x2c7c58, _0x128a32), _0x19c260(_0x128a32, _0x2c7c58), this.children_.unshift(_0x128a32), this.el_.setAttribute('lang', this.language_), this.el_ = _0x2c7c58, _0x2c7c58;
		}, _0x128fcf.prototype.width = function _0x433fdf(_0x1d4084) {
			return this.dimension('width', _0x1d4084);
		}, _0x128fcf.prototype.height = function _0x2538a3(_0x37fca0) {
			return this.dimension('height', _0x37fca0);
		}, _0x128fcf.prototype.dimension = function _0x204692(_0x1e312a, _0x443e87) {
			var _0x260adc = _0x1e312a + '_';
			if (_0x443e87 === undefined) {
				return this[_0x260adc] || 0;
			}
			if (_0x443e87 === '') {
				this[_0x260adc] = undefined;
				this.updateStyleEl_();
				return;
			}
			var _0x3f0cab = parseFloat(_0x443e87);
			if (isNaN(_0x3f0cab)) {
				_0x50330f.error('Improper value "' + _0x443e87 + '" supplied for for ' + _0x1e312a);
				return;
			}
			this[_0x260adc] = _0x3f0cab;
			this.updateStyleEl_();
		}, _0x128fcf.prototype.fluid = function _0x5c8031(_0x2e3dc9) {
			if (_0x2e3dc9 === undefined) {
				return !!this.fluid_;
			}
			this.fluid_ = !!_0x2e3dc9;
			_0x2e3dc9 ? this.addClass('vjs-fluid') : this.removeClass('vjs-fluid');
			this.updateStyleEl_();
		}, _0x128fcf.prototype.aspectRatio = function _0x11e988(_0x25cf20) {
			if (_0x25cf20 === undefined) {
				return this.aspectRatio_;
			}
			if (!/^\d+\:\d+$/.test(_0x25cf20)) {
				throw new Error('Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.');
			}
			this.aspectRatio_ = _0x25cf20;
			this.fluid(true);
			this.updateStyleEl_();
		}, _0x128fcf.prototype.updateStyleEl_ = function _0xc91f12() {
			if (_0x562c10.VIDEOJS_NO_DYNAMIC_STYLE === true) {
				var _0x1319dd = typeof this.width_ === 'number' ? this.width_ : this.options_.width, _0x56ea70 = typeof this.height_ === 'number' ? this.height_ : this.options_.height, _0x19bab2 = this.tech_ && this.tech_.el();
				_0x19bab2 && (_0x1319dd >= 0 && (_0x19bab2.width = _0x1319dd), _0x56ea70 >= 0 && (_0x19bab2.height = _0x56ea70));
				return;
			}
			var _0x40c4dc = void 0, _0x48469b = void 0, _0x55fc8e = void 0, _0x382dcb = void 0;
			if (this.aspectRatio_ !== undefined && this.aspectRatio_ !== 'auto') {
				_0x55fc8e = this.aspectRatio_;
			} else {
				this.videoWidth() > 0 ? _0x55fc8e = this.videoWidth() + ':' + this.videoHeight() : _0x55fc8e = '16:9';
			}
			var _0x17b742 = _0x55fc8e.split(':'), _0x327fa5 = _0x17b742[1] / _0x17b742[0];
			if (this.width_ !== undefined) {
				_0x40c4dc = this.width_;
			} else {
				this.height_ !== undefined ? _0x40c4dc = this.height_ / _0x327fa5 : _0x40c4dc = this.videoWidth() || 300;
			}
			this.height_ !== undefined ? _0x48469b = this.height_ : _0x48469b = _0x40c4dc * _0x327fa5;
			/^[^a-zA-Z]/.test(this.id()) ? _0x382dcb = 'dimensions-' + this.id() : _0x382dcb = this.id() + '-dimensions';
			this.addClass(_0x382dcb);
			_0x12a3e6(this.styleEl_, '\n      .' + _0x382dcb + ' {\n        width: ' + _0x40c4dc + 'px;\n        height: ' + _0x48469b + 'px;\n      }\n\n      .' + _0x382dcb + '.vjs-fluid {\n        padding-top: ' + _0x327fa5 * 100 + '%;\n      }\n    ');
		}, _0x128fcf.prototype.loadTech_ = function _0x280edc(_0x25ddf7, _0x159fb4) {
			var _0x3367a9 = this;
			this.tech_ && this.unloadTech_();
			var _0x46d5e9 = _0x104f7f(_0x25ddf7), _0x34ce43 = _0x25ddf7.charAt(0).toLowerCase() + _0x25ddf7.slice(1);
			_0x46d5e9 !== 'Html5' && this.tag && (_0x3ed9ba.getTech('Html5').disposeMediaElement(this.tag), this.tag.player = null, this.tag = null);
			this.techName_ = _0x46d5e9;
			this.isReady_ = false;
			var _0x5e9630 = typeof this.autoplay() === 'string' ? false : this.autoplay(), _0x20085b = {
				'source': _0x159fb4,
				'autoplay': _0x5e9630,
				'nativeControlsForTouch': this.options_.nativeControlsForTouch,
				'playerId': this.id(),
				'techId': this.id() + '_' + _0x46d5e9 + '_api',
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
			_0x39a6af.names.forEach(function (_0x15bf43) {
				var _0x4f6905 = _0x39a6af[_0x15bf43];
				_0x20085b[_0x4f6905.getterName] = _0x3367a9[_0x4f6905.privateName];
			});
			_0x2476f0(_0x20085b, this.options_[_0x46d5e9]);
			_0x2476f0(_0x20085b, this.options_[_0x34ce43]);
			_0x2476f0(_0x20085b, this.options_[_0x25ddf7.toLowerCase()]);
			this.tag && (_0x20085b.tag = this.tag);
			_0x159fb4 && _0x159fb4.src === this.cache_.src && this.cache_.currentTime > 0 && (_0x20085b.startTime = this.cache_.currentTime);
			var _0x138ace = _0x3ed9ba.getTech(_0x25ddf7);
			if (!_0x138ace) {
				throw new Error('No Tech named \'' + _0x46d5e9 + '\' exists! \'' + _0x46d5e9 + '\' should be registered using videojs.registerTech()\'');
			}
			this.tech_ = new _0x138ace(_0x20085b);
			this.tech_.ready(_0x2e578a(this, this.handleTechReady_), true);
			_0x13a437.jsonToTextTracks(this.textTracksJson_ || [], this.tech_);
			_0x188678.forEach(function (_0x578833) {
				_0x3367a9.on(_0x3367a9.tech_, _0x578833, _0x3367a9['handleTech' + _0x104f7f(_0x578833) + '_']);
			});
			Object.keys(_0x11cef4).forEach(function (_0x1cf446) {
				_0x3367a9.on(_0x3367a9.tech_, _0x1cf446, function (_0x59a1f5) {
					if (_0x3367a9.tech_.playbackRate() === 0 && _0x3367a9.tech_.seeking()) {
						_0x3367a9.queuedCallbacks_.push({
							'callback': _0x3367a9['handleTech' + _0x11cef4[_0x1cf446] + '_'].bind(_0x3367a9),
							'event': _0x59a1f5
						});
						return;
					}
					_0x3367a9['handleTech' + _0x11cef4[_0x1cf446] + '_'](_0x59a1f5);
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
			this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_();
			this.tech_.el().parentNode !== this.el() && (_0x46d5e9 !== 'Html5' || !this.tag) && _0x19c260(this.tech_.el(), this.el());
			this.tag && (this.tag.player = null, this.tag = null);
		}, _0x128fcf.prototype.unloadTech_ = function _0x355309() {
			var _0x42bf9a = this;
			_0x39a6af.names.forEach(function (_0x16f90d) {
				var _0x144c95 = _0x39a6af[_0x16f90d];
				_0x42bf9a[_0x144c95.privateName] = _0x42bf9a[_0x144c95.getterName]();
			});
			this.textTracksJson_ = _0x13a437.textTracksToJson(this.tech_);
			this.isReady_ = false;
			this.tech_.dispose();
			this.tech_ = false;
			this.isPosterFromTech_ && (this.poster_ = '', this.trigger('posterchange'));
			this.isPosterFromTech_ = false;
		}, _0x128fcf.prototype.tech = function _0x3e06a0(_0xc5bec4) {
			return _0xc5bec4 === undefined && _0x50330f.warn(_0x9a968(_0x5493a0)), this.tech_;
		}, _0x128fcf.prototype.addTechControlsListeners_ = function _0x1b3556() {
			this.removeTechControlsListeners_();
			this.on(this.tech_, 'mousedown', this.handleTechClick_);
			this.on(this.tech_, 'dblclick', this.handleTechDoubleClick_);
			this.on(this.tech_, 'touchstart', this.handleTechTouchStart_);
			this.on(this.tech_, 'touchmove', this.handleTechTouchMove_);
			this.on(this.tech_, 'touchend', this.handleTechTouchEnd_);
			this.on(this.tech_, 'tap', this.handleTechTap_);
		}, _0x128fcf.prototype.removeTechControlsListeners_ = function _0x527bc3() {
			this.off(this.tech_, 'tap', this.handleTechTap_);
			this.off(this.tech_, 'touchstart', this.handleTechTouchStart_);
			this.off(this.tech_, 'touchmove', this.handleTechTouchMove_);
			this.off(this.tech_, 'touchend', this.handleTechTouchEnd_);
			this.off(this.tech_, 'mousedown', this.handleTechClick_);
			this.off(this.tech_, 'dblclick', this.handleTechDoubleClick_);
		}, _0x128fcf.prototype.handleTechReady_ = function _0x3de2a1() {
			this.triggerReady();
			this.cache_.volume && this.techCall_('setVolume', this.cache_.volume);
			this.handleTechPosterChange_();
			this.handleTechDurationChange_();
		}, _0x128fcf.prototype.handleTechLoadStart_ = function _0x2f10db() {
			this.removeClass('vjs-ended');
			this.removeClass('vjs-seeking');
			this.error(null);
			!this.paused() ? (this.trigger('loadstart'), this.trigger('firstplay')) : (this.hasStarted(false), this.trigger('loadstart'));
			this.manualAutoplay_(this.autoplay());
		}, _0x128fcf.prototype.manualAutoplay_ = function _0x330f88(_0x13dd7b) {
			var _0x1207dd = this;
			if (!this.tech_ || typeof _0x13dd7b !== 'string') {
				return;
			}
			var _0x3a1b1e = function _0x37a9ce() {
				var _0x530719 = _0x1207dd.muted();
				_0x1207dd.muted(true);
				var _0x4ac4d9 = _0x1207dd.play();
				if (!_0x4ac4d9 || !_0x4ac4d9.then || !_0x4ac4d9.catch) {
					return;
				}
				return _0x4ac4d9.catch(function (_0x210c70) {
					_0x1207dd.muted(_0x530719);
				});
			}, _0x10257c = void 0;
			if (_0x13dd7b === 'any') {
				_0x10257c = this.play();
				_0x10257c && _0x10257c.then && _0x10257c.catch && _0x10257c.catch(function () {
					return _0x3a1b1e();
				});
			} else {
				_0x13dd7b === 'muted' ? _0x10257c = _0x3a1b1e() : _0x10257c = this.play();
			}
			if (!_0x10257c || !_0x10257c.then || !_0x10257c.catch) {
				return;
			}
			return _0x10257c.then(function () {
				_0x1207dd.trigger({
					'type': 'autoplay-success',
					'autoplay': _0x13dd7b
				});
			}).catch(function (_0x2f5b9c) {
				_0x1207dd.trigger({
					'type': 'autoplay-failure',
					'autoplay': _0x13dd7b
				});
			});
		}, _0x128fcf.prototype.updateSourceCaches_ = function _0x3d17bb() {
			var _0x4a88c7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '', _0xe0501a = _0x4a88c7, _0x214d2a = '';
			if (typeof _0xe0501a !== 'string') {
				_0xe0501a = _0x4a88c7.src;
				_0x214d2a = _0x4a88c7.type;
			}
			if (/^blob:/.test(_0xe0501a)) {
				return;
			}
			this.cache_.source = this.cache_.source || {};
			this.cache_.sources = this.cache_.sources || [];
			_0xe0501a && !_0x214d2a && (_0x214d2a = _0x5536fe(this, _0xe0501a));
			this.cache_.source = _0x47ec58({}, _0x4a88c7, {
				'src': _0xe0501a,
				'type': _0x214d2a
			});
			var _0x18f4eb = this.cache_.sources.filter(function (_0x1e1d89) {
				return _0x1e1d89.src && _0x1e1d89.src === _0xe0501a;
			}), _0x18304c = [], _0x82715e = this['$$']('source'), _0x5008a0 = [];
			for (var _0x5c8d44 = 0; _0x5c8d44 < _0x82715e.length; _0x5c8d44++) {
				var _0x40fc1f = _0x1ac51a(_0x82715e[_0x5c8d44]);
				_0x18304c.push(_0x40fc1f);
				_0x40fc1f.src && _0x40fc1f.src === _0xe0501a && _0x5008a0.push(_0x40fc1f.src);
			}
			if (_0x5008a0.length && !_0x18f4eb.length) {
				this.cache_.sources = _0x18304c;
			} else {
				!_0x18f4eb.length && (this.cache_.sources = [this.cache_.source]);
			}
			this.cache_.src = _0xe0501a;
		}, _0x128fcf.prototype.handleTechSourceset_ = function _0x2e3306(_0x45104a) {
			var _0xbb5904 = this;
			if (!this.changingSrc_) {
				this.updateSourceCaches_(_0x45104a.src);
				if (!_0x45104a.src) {
					var _0x5c2b46 = function _0x1482e7(_0x49fe26) {
						_0x49fe26.type !== 'sourceset' && _0xbb5904.updateSourceCaches_(_0xbb5904.techGet_('currentSrc'));
						_0xbb5904.tech_.off([
							'sourceset',
							'loadstart'
						], _0x1482e7);
					};
					this.tech_.one([
						'sourceset',
						'loadstart'
					], _0x5c2b46);
				}
			}
			this.trigger({
				'src': _0x45104a.src,
				'type': 'sourceset'
			});
		}, _0x128fcf.prototype.hasStarted = function _0x16e9b4(_0x49b86d) {
			if (_0x49b86d === undefined) {
				return this.hasStarted_;
			}
			if (_0x49b86d === this.hasStarted_) {
				return;
			}
			this.hasStarted_ = _0x49b86d;
			this.hasStarted_ ? (this.addClass('vjs-has-started'), this.trigger('firstplay')) : this.removeClass('vjs-has-started');
		}, _0x128fcf.prototype.handleTechPlay_ = function _0x3b13f8() {
			this.removeClass('vjs-ended');
			this.removeClass('vjs-paused');
			this.addClass('vjs-playing');
			this.hasStarted(true);
			this.trigger('play');
		}, _0x128fcf.prototype.handleTechRateChange_ = function _0xc209d5() {
			this.tech_.playbackRate() > 0 && this.cache_.lastPlaybackRate === 0 && (this.queuedCallbacks_.forEach(function (_0x34b0c3) {
				return _0x34b0c3.callback(_0x34b0c3.event);
			}), this.queuedCallbacks_ = []);
			this.cache_.lastPlaybackRate = this.tech_.playbackRate();
			this.trigger('ratechange');
		}, _0x128fcf.prototype.handleTechWaiting_ = function _0x12706b() {
			var _0x1a8753 = this;
			this.addClass('vjs-waiting');
			this.trigger('waiting');
			this.one('timeupdate', function () {
				return _0x1a8753.removeClass('vjs-waiting');
			});
		}, _0x128fcf.prototype.handleTechCanPlay_ = function _0x3e8de9() {
			this.removeClass('vjs-waiting');
			this.trigger('canplay');
		}, _0x128fcf.prototype.handleTechCanPlayThrough_ = function _0x30da3b() {
			this.removeClass('vjs-waiting');
			this.trigger('canplaythrough');
		}, _0x128fcf.prototype.handleTechPlaying_ = function _0x2a952c() {
			this.removeClass('vjs-waiting');
			this.trigger('playing');
		}, _0x128fcf.prototype.handleTechSeeking_ = function _0x474e84() {
			this.addClass('vjs-seeking');
			this.trigger('seeking');
		}, _0x128fcf.prototype.handleTechSeeked_ = function _0x833249() {
			this.removeClass('vjs-seeking');
			this.trigger('seeked');
		}, _0x128fcf.prototype.handleTechFirstPlay_ = function _0x296824() {
			this.options_.starttime && (_0x50330f.warn('Passing the `starttime` option to the player will be deprecated in 6.0'), this.currentTime(this.options_.starttime));
			this.addClass('vjs-has-started');
			this.trigger('firstplay');
		}, _0x128fcf.prototype.handleTechPause_ = function _0x61933e() {
			this.removeClass('vjs-playing');
			this.addClass('vjs-paused');
			this.trigger('pause');
		}, _0x128fcf.prototype.handleTechEnded_ = function _0x407dfc() {
			this.addClass('vjs-ended');
			if (this.options_.loop) {
				this.currentTime(0);
				this.play();
			} else {
				!this.paused() && this.pause();
			}
			this.trigger('ended');
		}, _0x128fcf.prototype.handleTechDurationChange_ = function _0x274c97() {
			this.duration(this.techGet_('duration'));
		}, _0x128fcf.prototype.handleTechClick_ = function _0xbd4c5d(_0x2caa30) {
			if (!_0x23351a(_0x2caa30)) {
				return;
			}
			if (!this.controls_) {
				return;
			}
			this.paused() ? _0x5def48(this.play()) : this.pause();
		}, _0x128fcf.prototype.handleTechDoubleClick_ = function _0x417006(_0x1c3ed3) {
			if (!this.controls_) {
				return;
			}
			var _0x4f462e = Array.prototype.some.call(this['$$']('.vjs-control-bar, .vjs-modal-dialog'), function (_0x293273) {
				return _0x293273.contains(_0x1c3ed3.target);
			});
			!_0x4f462e && (this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen());
		}, _0x128fcf.prototype.handleTechTap_ = function _0x5cb763() {
			this.userActive(!this.userActive());
		}, _0x128fcf.prototype.handleTechTouchStart_ = function _0x2f6547() {
			this.userWasActive = this.userActive();
		}, _0x128fcf.prototype.handleTechTouchMove_ = function _0x6bb8a5() {
			this.userWasActive && this.reportUserActivity();
		}, _0x128fcf.prototype.handleTechTouchEnd_ = function _0x4d89a9(_0x1b2ef7) {
			_0x1b2ef7.preventDefault();
		}, _0x128fcf.prototype.handleFullscreenChange_ = function _0x7101d() {
			this.isFullscreen() ? this.addClass('vjs-fullscreen') : this.removeClass('vjs-fullscreen');
		}, _0x128fcf.prototype.handleStageClick_ = function _0x3ab663() {
			this.reportUserActivity();
		}, _0x128fcf.prototype.handleTechFullscreenChange_ = function _0x171c41(_0x48b20d, _0x1bda0c) {
			_0x1bda0c && this.isFullscreen(_0x1bda0c.isFullscreen);
			this.trigger('fullscreenchange');
		}, _0x128fcf.prototype.handleTechError_ = function _0x44d90e() {
			var _0x19038b = this.tech_.error();
			this.error(_0x19038b);
		}, _0x128fcf.prototype.handleTechTextData_ = function _0x481007() {
			var _0x1f0aea = null;
			arguments.length > 1 && (_0x1f0aea = arguments[1]);
			this.trigger('textdata', _0x1f0aea);
		}, _0x128fcf.prototype.getCache = function _0x5ba8a0() {
			return this.cache_;
		}, _0x128fcf.prototype.techCall_ = function _0x5354b1(_0x502d3d, _0x121525) {
			this.ready(function () {
				if (_0x502d3d in _0x40978e) {
					return _0x9aba11(this.middleware_, this.tech_, _0x502d3d, _0x121525);
				} else {
					if (_0x502d3d in _0x24dc4e) {
						return _0x298403(this.middleware_, this.tech_, _0x502d3d, _0x121525);
					}
				}
				try {
					this.tech_ && this.tech_[_0x502d3d](_0x121525);
				} catch (_0x1269a1) {
					_0x50330f(_0x1269a1);
					throw _0x1269a1;
				}
			}, true);
		}, _0x128fcf.prototype.techGet_ = function _0x48dcef(_0x3ff20e) {
			if (!this.tech_ || !this.tech_.isReady_) {
				return;
			}
			if (_0x3ff20e in _0x5a3747) {
				return _0x3b1f30(this.middleware_, this.tech_, _0x3ff20e);
			} else {
				if (_0x3ff20e in _0x24dc4e) {
					return _0x298403(this.middleware_, this.tech_, _0x3ff20e);
				}
			}
			try {
				return this.tech_[_0x3ff20e]();
			} catch (_0x790e3c) {
				if (this.tech_[_0x3ff20e] === undefined) {
					_0x50330f('Video.js: ' + _0x3ff20e + ' method not defined for ' + this.techName_ + ' playback technology.', _0x790e3c);
					throw _0x790e3c;
				}
				if (_0x790e3c.name === 'TypeError') {
					_0x50330f('Video.js: ' + _0x3ff20e + ' unavailable on ' + this.techName_ + ' playback technology element.', _0x790e3c);
					this.tech_.isReady_ = false;
					throw _0x790e3c;
				}
				_0x50330f(_0x790e3c);
				throw _0x790e3c;
			}
		}, _0x128fcf.prototype.play = function _0x4130f8() {
			var _0xf74f20 = this, _0x502c90 = this.options_.Promise || _0x562c10.Promise;
			if (_0x502c90) {
				return new _0x502c90(function (_0x3278ff) {
					_0xf74f20.play_(_0x3278ff);
				});
			}
			return this.play_();
		}, _0x128fcf.prototype.play_ = function _0x2b81b6() {
			var _0x1e2962 = this, _0x4ed85f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _0x5def48;
			this.playOnLoadstart_ && this.off('loadstart', this.playOnLoadstart_);
			if (!this.isReady_) {
				if (this.playWaitingForReady_) {
					return;
				}
				this.playWaitingForReady_ = true;
				this.ready(function () {
					_0x1e2962.playWaitingForReady_ = false;
					_0x4ed85f(_0x1e2962.play());
				});
			} else {
				if (!this.changingSrc_ && (this.src() || this.currentSrc())) {
					_0x4ed85f(this.techGet_('play'));
					return;
				} else {
					this.playOnLoadstart_ = function () {
						_0x1e2962.playOnLoadstart_ = null;
						_0x4ed85f(_0x1e2962.play());
					};
					this.one('loadstart', this.playOnLoadstart_);
				}
			}
		}, _0x128fcf.prototype.pause = function _0x445598() {
			this.techCall_('pause');
		}, _0x128fcf.prototype.paused = function _0x5837f6() {
			return this.techGet_('paused') === false ? false : true;
		}, _0x128fcf.prototype.played = function _0x4837a0() {
			return this.techGet_('played') || _0x5e23d4(0, 0);
		}, _0x128fcf.prototype.scrubbing = function _0x93b805(_0x5334d3) {
			if (typeof _0x5334d3 === 'undefined') {
				return this.scrubbing_;
			}
			this.scrubbing_ = !!_0x5334d3;
			_0x5334d3 ? this.addClass('vjs-scrubbing') : this.removeClass('vjs-scrubbing');
		}, _0x128fcf.prototype.currentTime = function _0x46fd59(_0x5c1cd9) {
			if (typeof _0x5c1cd9 !== 'undefined') {
				_0x5c1cd9 < 0 && (_0x5c1cd9 = 0);
				this.techCall_('setCurrentTime', _0x5c1cd9);
				return;
			}
			return this.cache_.currentTime = this.techGet_('currentTime') || 0, this.cache_.currentTime;
		}, _0x128fcf.prototype.duration = function _0x4fb637(_0x1e32fa) {
			if (_0x1e32fa === undefined) {
				return this.cache_.duration !== undefined ? this.cache_.duration : NaN;
			}
			_0x1e32fa = parseFloat(_0x1e32fa);
			_0x1e32fa < 0 && (_0x1e32fa = Infinity);
			if (_0x1e32fa !== this.cache_.duration) {
				this.cache_.duration = _0x1e32fa;
				_0x1e32fa === Infinity ? this.addClass('vjs-live') : this.removeClass('vjs-live');
				this.trigger('durationchange');
			}
		}, _0x128fcf.prototype.remainingTime = function _0x5abc7a() {
			return this.duration() - this.currentTime();
		}, _0x128fcf.prototype.remainingTimeDisplay = function _0x1128ea() {
			return Math.floor(this.duration()) - Math.floor(this.currentTime());
		}, _0x128fcf.prototype.buffered = function _0x325682() {
			var _0x3b3845 = this.techGet_('buffered');
			return (!_0x3b3845 || !_0x3b3845.length) && (_0x3b3845 = _0x5e23d4(0, 0)), _0x3b3845;
		}, _0x128fcf.prototype.bufferedPercent = function _0x47f2f8() {
			return _0x30ed6c(this.buffered(), this.duration());
		}, _0x128fcf.prototype.bufferedEnd = function _0x18efd6() {
			var _0xbfdeb1 = this.buffered(), _0x1364ff = this.duration(), _0x5818e6 = _0xbfdeb1.end(_0xbfdeb1.length - 1);
			return _0x5818e6 > _0x1364ff && (_0x5818e6 = _0x1364ff), _0x5818e6;
		}, _0x128fcf.prototype.volume = function _0x36f138(_0x1f1295) {
			var _0x304a5d = void 0;
			if (_0x1f1295 !== undefined) {
				_0x304a5d = Math.max(0, Math.min(1, parseFloat(_0x1f1295)));
				this.cache_.volume = _0x304a5d;
				this.techCall_('setVolume', _0x304a5d);
				_0x304a5d > 0 && this.lastVolume_(_0x304a5d);
				return;
			}
			return _0x304a5d = parseFloat(this.techGet_('volume')), isNaN(_0x304a5d) ? 1 : _0x304a5d;
		}, _0x128fcf.prototype.muted = function _0x33386d(_0x133d44) {
			if (_0x133d44 !== undefined) {
				this.techCall_('setMuted', _0x133d44);
				return;
			}
			return this.techGet_('muted') || false;
		}, _0x128fcf.prototype.defaultMuted = function _0x4f8f5d(_0x40e706) {
			if (_0x40e706 !== undefined) {
				return this.techCall_('setDefaultMuted', _0x40e706);
			}
			return this.techGet_('defaultMuted') || false;
		}, _0x128fcf.prototype.lastVolume_ = function _0x16e9ac(_0x94515d) {
			if (_0x94515d !== undefined && _0x94515d !== 0) {
				this.cache_.lastVolume = _0x94515d;
				return;
			}
			return this.cache_.lastVolume;
		}, _0x128fcf.prototype.supportsFullScreen = function _0x2d790b() {
			return this.techGet_('supportsFullScreen') || false;
		}, _0x128fcf.prototype.isFullscreen = function _0x315435(_0x2387b9) {
			if (_0x2387b9 !== undefined) {
				this.isFullscreen_ = !!_0x2387b9;
				return;
			}
			return !!this.isFullscreen_;
		}, _0x128fcf.prototype.requestFullscreen = function _0x5e2b6f() {
			var _0x5d284c = _0x30351b;
			this.isFullscreen(true);
			if (_0x5d284c.requestFullscreen) {
				_0x7b0228(_0x5d8ee4, _0x5d284c.fullscreenchange, _0x2e578a(this, function _0x3d43e0(_0x2b5464) {
					this.isFullscreen(_0x5d8ee4[_0x5d284c.fullscreenElement]);
					this.isFullscreen() === false && _0x706013(_0x5d8ee4, _0x5d284c.fullscreenchange, _0x3d43e0);
					this.trigger('fullscreenchange');
				}));
				this.el_[_0x5d284c.requestFullscreen]();
			} else {
				this.tech_.supportsFullScreen() ? this.techCall_('enterFullScreen') : (this.enterFullWindow(), this.trigger('fullscreenchange'));
			}
		}, _0x128fcf.prototype.exitFullscreen = function _0x3c210a() {
			var _0x57f802 = _0x30351b;
			this.isFullscreen(false);
			if (_0x57f802.requestFullscreen) {
				_0x5d8ee4[_0x57f802.exitFullscreen]();
			} else {
				this.tech_.supportsFullScreen() ? this.techCall_('exitFullScreen') : (this.exitFullWindow(), this.trigger('fullscreenchange'));
			}
		}, _0x128fcf.prototype.enterFullWindow = function _0x5c3c82() {
			this.isFullWindow = true;
			this.docOrigOverflow = _0x5d8ee4.documentElement.style.overflow;
			_0x7b0228(_0x5d8ee4, 'keydown', _0x2e578a(this, this.fullWindowOnEscKey));
			_0x5d8ee4.documentElement.style.overflow = 'hidden';
			_0x235eb5(_0x5d8ee4.body, 'vjs-full-window');
			this.trigger('enterFullWindow');
		}, _0x128fcf.prototype.fullWindowOnEscKey = function _0x3ab8de(_0x4e2480) {
			_0x4e2480.keyCode === 27 && (this.isFullscreen() === true ? this.exitFullscreen() : this.exitFullWindow());
		}, _0x128fcf.prototype.exitFullWindow = function _0x8c0a20() {
			this.isFullWindow = false;
			_0x706013(_0x5d8ee4, 'keydown', this.fullWindowOnEscKey);
			_0x5d8ee4.documentElement.style.overflow = this.docOrigOverflow;
			_0x564c01(_0x5d8ee4.body, 'vjs-full-window');
			this.trigger('exitFullWindow');
		}, _0x128fcf.prototype.canPlayType = function _0x15c287(_0x4a6122) {
			var _0x3ba920 = void 0;
			for (var _0x1f908f = 0, _0x295ffa = this.options_.techOrder; _0x1f908f < _0x295ffa.length; _0x1f908f++) {
				var _0x1d057f = _0x295ffa[_0x1f908f], _0x1cc397 = _0x3ed9ba.getTech(_0x1d057f);
				!_0x1cc397 && (_0x1cc397 = _0x197ed7.getComponent(_0x1d057f));
				if (!_0x1cc397) {
					_0x50330f.error('The "' + _0x1d057f + '" tech is undefined. Skipped browser support check for that tech.');
					continue;
				}
				if (_0x1cc397.isSupported()) {
					_0x3ba920 = _0x1cc397.canPlayType(_0x4a6122);
					if (_0x3ba920) {
						return _0x3ba920;
					}
				}
			}
			return '';
		}, _0x128fcf.prototype.selectSource = function _0x171045(_0x320cd9) {
			var _0x2582e7 = this, _0x409508 = this.options_.techOrder.map(function (_0x5beff2) {
				return [
					_0x5beff2,
					_0x3ed9ba.getTech(_0x5beff2)
				];
			}).filter(function (_0x4c9da6) {
				var _0x53be6a = _0x4c9da6[0], _0x3f44d9 = _0x4c9da6[1];
				if (_0x3f44d9) {
					return _0x3f44d9.isSupported();
				}
				return _0x50330f.error('The "' + _0x53be6a + '" tech is undefined. Skipped browser support check for that tech.'), false;
			}), _0x355532 = function _0x2bbee1(_0x50440e, _0xfc6ed8, _0x2cfbec) {
				var _0x52a5dd = void 0;
				return _0x50440e.some(function (_0x374568) {
					return _0xfc6ed8.some(function (_0x98167) {
						_0x52a5dd = _0x2cfbec(_0x374568, _0x98167);
						if (_0x52a5dd) {
							return true;
						}
					});
				}), _0x52a5dd;
			}, _0x281c7a = void 0, _0x48c4ee = function _0x46c84c(_0x46d5ef) {
				return function (_0x459b77, _0x31d1bc) {
					return _0x46d5ef(_0x31d1bc, _0x459b77);
				};
			}, _0x220525 = function _0x44c9c1(_0x4e4a35, _0x90b614) {
				var _0x45b59f = _0x4e4a35[0], _0x954ae6 = _0x4e4a35[1];
				if (_0x954ae6.canPlaySource(_0x90b614, _0x2582e7.options_[_0x45b59f.toLowerCase()])) {
					return {
						'source': _0x90b614,
						'tech': _0x45b59f
					};
				}
			};
			return this.options_.sourceOrder ? _0x281c7a = _0x355532(_0x320cd9, _0x409508, _0x48c4ee(_0x220525)) : _0x281c7a = _0x355532(_0x409508, _0x320cd9, _0x220525), _0x281c7a || false;
		}, _0x128fcf.prototype.src = function _0x2cb395(_0x493690) {
			var _0x2ffd0e = this;
			if (typeof _0x493690 === 'undefined') {
				return this.cache_.src || '';
			}
			var _0x435d8d = _0x5aa643(_0x493690);
			if (!_0x435d8d.length) {
				this.setTimeout(function () {
					this.error({
						'code': 4,
						'message': this.localize(this.options_.notSupportedMessage)
					});
				}, 0);
				return;
			}
			this.changingSrc_ = true;
			this.cache_.sources = _0x435d8d;
			this.updateSourceCaches_(_0x435d8d[0]);
			_0x34d5f9(this, _0x435d8d[0], function (_0x421a39, _0x6fe829) {
				_0x2ffd0e.middleware_ = _0x6fe829;
				_0x2ffd0e.cache_.sources = _0x435d8d;
				_0x2ffd0e.updateSourceCaches_(_0x421a39);
				var _0x2c3fc5 = _0x2ffd0e.src_(_0x421a39);
				if (_0x2c3fc5) {
					if (_0x435d8d.length > 1) {
						return _0x2ffd0e.src(_0x435d8d.slice(1));
					}
					_0x2ffd0e.changingSrc_ = false;
					_0x2ffd0e.setTimeout(function () {
						this.error({
							'code': 4,
							'message': this.localize(this.options_.notSupportedMessage)
						});
					}, 0);
					_0x2ffd0e.triggerReady();
					return;
				}
				_0x1f3438(_0x6fe829, _0x2ffd0e.tech_);
			});
		}, _0x128fcf.prototype.src_ = function _0x26d708(_0x2b4946) {
			var _0x4acae7 = this, _0x3d1b0d = this.selectSource([_0x2b4946]);
			if (!_0x3d1b0d) {
				return true;
			}
			if (!_0x3eb97d(_0x3d1b0d.tech, this.techName_)) {
				return this.changingSrc_ = true, this.loadTech_(_0x3d1b0d.tech, _0x3d1b0d.source), this.tech_.ready(function () {
					_0x4acae7.changingSrc_ = false;
				}), false;
			}
			return this.ready(function () {
				this.tech_.constructor.prototype.hasOwnProperty('setSource') ? this.techCall_('setSource', _0x2b4946) : this.techCall_('src', _0x2b4946.src);
				this.changingSrc_ = false;
			}, true), false;
		}, _0x128fcf.prototype.load = function _0x34ee64() {
			this.techCall_('load');
		}, _0x128fcf.prototype.reset = function _0x4d69d1() {
			this.tech_ && this.tech_.clearTracks('text');
			this.loadTech_(this.options_.techOrder[0], null);
			this.techCall_('reset');
		}, _0x128fcf.prototype.currentSources = function _0x22eec4() {
			var _0x2db8f9 = this.currentSource(), _0x5c5a5f = [];
			return Object.keys(_0x2db8f9).length !== 0 && _0x5c5a5f.push(_0x2db8f9), this.cache_.sources || _0x5c5a5f;
		}, _0x128fcf.prototype.currentSource = function _0x5c8566() {
			return this.cache_.source || {};
		}, _0x128fcf.prototype.currentSrc = function _0x8d1789() {
			return this.currentSource() && this.currentSource().src || '';
		}, _0x128fcf.prototype.currentType = function _0xb1611d() {
			return this.currentSource() && this.currentSource().type || '';
		}, _0x128fcf.prototype.preload = function _0x4ad365(_0x3b4de9) {
			if (_0x3b4de9 !== undefined) {
				this.techCall_('setPreload', _0x3b4de9);
				this.options_.preload = _0x3b4de9;
				return;
			}
			return this.techGet_('preload');
		}, _0x128fcf.prototype.autoplay = function _0x3effe6(_0x45b432) {
			if (_0x45b432 === undefined) {
				return this.options_.autoplay || false;
			}
			var _0x1d05e3 = void 0;
			if (typeof _0x45b432 === 'string' && /(any|play|muted)/.test(_0x45b432)) {
				this.options_.autoplay = _0x45b432;
				this.manualAutoplay_(_0x45b432);
				_0x1d05e3 = false;
			} else {
				!_0x45b432 ? this.options_.autoplay = false : this.options_.autoplay = true;
			}
			_0x1d05e3 = _0x1d05e3 || this.options_.autoplay;
			this.tech_ && this.techCall_('setAutoplay', _0x1d05e3);
		}, _0x128fcf.prototype.playsinline = function _0x51e8a(_0x12e203) {
			if (_0x12e203 !== undefined) {
				return this.techCall_('setPlaysinline', _0x12e203), this.options_.playsinline = _0x12e203, this;
			}
			return this.techGet_('playsinline');
		}, _0x128fcf.prototype.loop = function _0x13e4fa(_0xceeb4c) {
			if (_0xceeb4c !== undefined) {
				this.techCall_('setLoop', _0xceeb4c);
				this.options_.loop = _0xceeb4c;
				return;
			}
			return this.techGet_('loop');
		}, _0x128fcf.prototype.poster = function _0x51b566(_0x24b29e) {
			if (_0x24b29e === undefined) {
				return this.poster_;
			}
			!_0x24b29e && (_0x24b29e = '');
			if (_0x24b29e === this.poster_) {
				return;
			}
			this.poster_ = _0x24b29e;
			this.techCall_('setPoster', _0x24b29e);
			this.isPosterFromTech_ = false;
			this.trigger('posterchange');
		}, _0x128fcf.prototype.handleTechPosterChange_ = function _0x51d7db() {
			if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
				var _0x16bb1a = this.tech_.poster() || '';
				if (_0x16bb1a !== this.poster_) {
					this.poster_ = _0x16bb1a;
					this.isPosterFromTech_ = true;
					this.trigger('posterchange');
				}
			}
		}, _0x128fcf.prototype.controls = function _0x321992(_0x1e9db8) {
			if (_0x1e9db8 === undefined) {
				return !!this.controls_;
			}
			_0x1e9db8 = !!_0x1e9db8;
			if (this.controls_ === _0x1e9db8) {
				return;
			}
			this.controls_ = _0x1e9db8;
			this.usingNativeControls() && this.techCall_('setControls', _0x1e9db8);
			this.controls_ ? (this.removeClass('vjs-controls-disabled'), this.addClass('vjs-controls-enabled'), this.trigger('controlsenabled'), !this.usingNativeControls() && this.addTechControlsListeners_()) : (this.removeClass('vjs-controls-enabled'), this.addClass('vjs-controls-disabled'), this.trigger('controlsdisabled'), !this.usingNativeControls() && this.removeTechControlsListeners_());
		}, _0x128fcf.prototype.usingNativeControls = function _0x52d6cb(_0x411e25) {
			if (_0x411e25 === undefined) {
				return !!this.usingNativeControls_;
			}
			_0x411e25 = !!_0x411e25;
			if (this.usingNativeControls_ === _0x411e25) {
				return;
			}
			this.usingNativeControls_ = _0x411e25;
			this.usingNativeControls_ ? (this.addClass('vjs-using-native-controls'), this.trigger('usingnativecontrols')) : (this.removeClass('vjs-using-native-controls'), this.trigger('usingcustomcontrols'));
		}, _0x128fcf.prototype.error = function _0x566ad0(_0x5c35f0) {
			if (_0x5c35f0 === undefined) {
				return this.error_ || null;
			}
			if (_0x5c35f0 === null) {
				this.error_ = _0x5c35f0;
				this.removeClass('vjs-error');
				this.errorDisplay && this.errorDisplay.close();
				return;
			}
			this.error_ = new _0x41ecc7(_0x5c35f0);
			this.addClass('vjs-error');
			_0x50330f.error('(CODE:' + this.error_.code + ' ' + _0x41ecc7.errorTypes[this.error_.code] + ')', this.error_.message, this.error_);
			this.trigger('error');
			return;
		}, _0x128fcf.prototype.reportUserActivity = function _0x3c7b3b(_0x437c37) {
			this.userActivity_ = true;
		}, _0x128fcf.prototype.userActive = function _0x4ed713(_0x30ca0d) {
			if (_0x30ca0d === undefined) {
				return this.userActive_;
			}
			_0x30ca0d = !!_0x30ca0d;
			if (_0x30ca0d === this.userActive_) {
				return;
			}
			this.userActive_ = _0x30ca0d;
			if (this.userActive_) {
				this.userActivity_ = true;
				this.removeClass('vjs-user-inactive');
				this.addClass('vjs-user-active');
				this.trigger('useractive');
				return;
			}
			this.tech_ && this.tech_.one('mousemove', function (_0x1c1441) {
				_0x1c1441.stopPropagation();
				_0x1c1441.preventDefault();
			});
			this.userActivity_ = false;
			this.removeClass('vjs-user-active');
			this.addClass('vjs-user-inactive');
			this.trigger('userinactive');
		}, _0x128fcf.prototype.listenForUserActivity_ = function _0x3920aa() {
			var _0x3181a8 = void 0, _0x5a5d9e = void 0, _0x11aa0c = void 0, _0x17aab9 = _0x2e578a(this, this.reportUserActivity), _0x553e21 = function _0x10e38d(_0x46bb81) {
				(_0x46bb81.screenX !== _0x5a5d9e || _0x46bb81.screenY !== _0x11aa0c) && (_0x5a5d9e = _0x46bb81.screenX, _0x11aa0c = _0x46bb81.screenY, _0x17aab9());
			}, _0x3058d0 = function _0x15d4a9() {
				_0x17aab9();
				this.clearInterval(_0x3181a8);
				_0x3181a8 = this.setInterval(_0x17aab9, 250);
			}, _0x216b45 = function _0x19e5f4(_0x53fb4c) {
				_0x17aab9();
				this.clearInterval(_0x3181a8);
			};
			this.on('mousedown', _0x3058d0);
			this.on('mousemove', _0x553e21);
			this.on('mouseup', _0x216b45);
			this.on('keydown', _0x17aab9);
			this.on('keyup', _0x17aab9);
			var _0x32b22c = void 0;
			this.setInterval(function () {
				if (!this.userActivity_) {
					return;
				}
				this.userActivity_ = false;
				this.userActive(true);
				this.clearTimeout(_0x32b22c);
				var _0x38144d = this.options_.inactivityTimeout;
				if (_0x38144d <= 0) {
					return;
				}
				_0x32b22c = this.setTimeout(function () {
					!this.userActivity_ && this.userActive(false);
				}, _0x38144d);
			}, 250);
		}, _0x128fcf.prototype.playbackRate = function _0x2e8ca7(_0x33c017) {
			if (_0x33c017 !== undefined) {
				this.techCall_('setPlaybackRate', _0x33c017);
				return;
			}
			if (this.tech_ && this.tech_.featuresPlaybackRate) {
				return this.cache_.lastPlaybackRate || this.techGet_('playbackRate');
			}
			return 1;
		}, _0x128fcf.prototype.defaultPlaybackRate = function _0x277037(_0x272c8f) {
			if (_0x272c8f !== undefined) {
				return this.techCall_('setDefaultPlaybackRate', _0x272c8f);
			}
			if (this.tech_ && this.tech_.featuresPlaybackRate) {
				return this.techGet_('defaultPlaybackRate');
			}
			return 1;
		}, _0x128fcf.prototype.isAudio = function _0x4e3da5(_0x3825af) {
			if (_0x3825af !== undefined) {
				this.isAudio_ = !!_0x3825af;
				return;
			}
			return !!this.isAudio_;
		}, _0x128fcf.prototype.addTextTrack = function _0x3efb7e(_0x12c8dc, _0x544012, _0x5969a6) {
			if (this.tech_) {
				return this.tech_.addTextTrack(_0x12c8dc, _0x544012, _0x5969a6);
			}
		}, _0x128fcf.prototype.addRemoteTextTrack = function _0x6da70b(_0xcd6339, _0x4cd231) {
			if (this.tech_) {
				return this.tech_.addRemoteTextTrack(_0xcd6339, _0x4cd231);
			}
		}, _0x128fcf.prototype.removeRemoteTextTrack = function _0x5b8428() {
			var _0x4e1396 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _0x418329 = _0x4e1396.track, _0x32a6d4 = _0x418329 === undefined ? arguments[0] : _0x418329;
			if (this.tech_) {
				return this.tech_.removeRemoteTextTrack(_0x32a6d4);
			}
		}, _0x128fcf.prototype.getVideoPlaybackQuality = function _0x2926d5() {
			return this.techGet_('getVideoPlaybackQuality');
		}, _0x128fcf.prototype.videoWidth = function _0x3ad551() {
			return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0;
		}, _0x128fcf.prototype.videoHeight = function _0x3339eb() {
			return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0;
		}, _0x128fcf.prototype.language = function _0x22e68a(_0x202284) {
			if (_0x202284 === undefined) {
				return this.language_;
			}
			this.language_ = String(_0x202284).toLowerCase();
		}, _0x128fcf.prototype.languages = function _0x3e81bd() {
			return _0x47ec58(_0x128fcf.prototype.options_.languages, this.languages_);
		}, _0x128fcf.prototype.toJSON = function _0x5f2c60() {
			var _0x1553de = _0x47ec58(this.options_), _0x314c43 = _0x1553de.tracks;
			_0x1553de.tracks = [];
			for (var _0x377794 = 0; _0x377794 < _0x314c43.length; _0x377794++) {
				var _0x1597a4 = _0x314c43[_0x377794];
				_0x1597a4 = _0x47ec58(_0x1597a4);
				_0x1597a4.player = undefined;
				_0x1553de.tracks[_0x377794] = _0x1597a4;
			}
			return _0x1553de;
		}, _0x128fcf.prototype.createModal = function _0x2d28d0(_0x3a6e7d, _0x14f0e7) {
			var _0x61ff23 = this;
			_0x14f0e7 = _0x14f0e7 || {};
			_0x14f0e7.content = _0x3a6e7d || '';
			var _0xca47c1 = new _0xb4c1b9(this, _0x14f0e7);
			return this.addChild(_0xca47c1), _0xca47c1.on('dispose', function () {
				_0x61ff23.removeChild(_0xca47c1);
			}), _0xca47c1.open(), _0xca47c1;
		}, _0x128fcf.getTagSettings = function _0x172082(_0x353caa) {
			var _0x55fd9d = {
				'sources': [],
				'tracks': []
			}, _0x57ee7b = _0x1ac51a(_0x353caa), _0x2409b7 = _0x57ee7b['data-setup'];
			_0x46db82(_0x353caa, 'vjs-fluid') && (_0x57ee7b.fluid = true);
			if (_0x2409b7 !== null) {
				var _0x57a52a = _0x46b4f0(_0x2409b7 || '{}'), _0x315d0c = _0x57a52a[0], _0x47df91 = _0x57a52a[1];
				_0x315d0c && _0x50330f.error(_0x315d0c);
				_0x2476f0(_0x57ee7b, _0x47df91);
			}
			_0x2476f0(_0x55fd9d, _0x57ee7b);
			if (_0x353caa.hasChildNodes()) {
				var _0x4200a7 = _0x353caa.childNodes;
				for (var _0x16f33a = 0, _0x248a1d = _0x4200a7.length; _0x16f33a < _0x248a1d; _0x16f33a++) {
					var _0x46ecce = _0x4200a7[_0x16f33a], _0x4da9e6 = _0x46ecce.nodeName.toLowerCase();
					if (_0x4da9e6 === 'source') {
						_0x55fd9d.sources.push(_0x1ac51a(_0x46ecce));
					} else {
						_0x4da9e6 === 'track' && _0x55fd9d.tracks.push(_0x1ac51a(_0x46ecce));
					}
				}
			}
			return _0x55fd9d;
		}, _0x128fcf.prototype.flexNotSupported_ = function _0x132d56() {
			var _0xbb977e = _0x5d8ee4.createElement('i');
			return !('flexBasis' in _0xbb977e.style || 'webkitFlexBasis' in _0xbb977e.style || 'mozFlexBasis' in _0xbb977e.style || 'msFlexBasis' in _0xbb977e.style || 'msFlexOrder' in _0xbb977e.style);
		}, _0x128fcf;
	}(_0x197ed7);
	_0x39a6af.names.forEach(function (_0x438d82) {
		var _0x419090 = _0x39a6af[_0x438d82];
		_0x18b894.prototype[_0x419090.getterName] = function () {
			if (this.tech_) {
				return this.tech_[_0x419090.getterName]();
			}
			return this[_0x419090.privateName] = this[_0x419090.privateName] || new _0x419090.ListClass(), this[_0x419090.privateName];
		};
	});
	_0x18b894.players = {};
	var _0x193d74 = _0x562c10.navigator;
	_0x18b894.prototype.options_ = {
		'techOrder': _0x3ed9ba.defaultTechOrder_,
		'html5': {},
		'flash': {},
		'inactivityTimeout': 2000,
		'playbackRates': [],
		'children': [
			'mediaLoader',
			'posterImage',
			'textTrackDisplay',
			'loadingSpinner',
			'bigPlayButton',
			'controlBar',
			'errorDisplay',
			'textTrackSettings',
			'resizeManager'
		],
		'language': _0x193d74 && (_0x193d74.languages && _0x193d74.languages[0] || _0x193d74.userLanguage || _0x193d74.language) || 'en',
		'languages': {},
		'notSupportedMessage': 'No compatible source was found for this media.'
	};
	[
		'ended',
		'seeking',
		'seekable',
		'networkState',
		'readyState'
	].forEach(function (_0x58f5a8) {
		_0x18b894.prototype[_0x58f5a8] = function () {
			return this.techGet_(_0x58f5a8);
		};
	});
	_0x188678.forEach(function (_0x2c23ed) {
		_0x18b894.prototype['handleTech' + _0x104f7f(_0x2c23ed) + '_'] = function () {
			return this.trigger(_0x2c23ed);
		};
	});
	_0x197ed7.registerComponent('Player', _0x18b894);
	Object.defineProperty(_0x197ed7.components_, 'Player', {
		'configurable': false,
		'writable': false
	});
	var _0x2ae968 = 'plugin', _0x28a0d1 = 'activePlugins_', _0x259734 = {}, _0x1e0198 = function _0x223701(_0x5181fe) {
		return _0x259734.hasOwnProperty(_0x5181fe);
	}, _0x44bce8 = function _0x405a1d(_0x5f25c6) {
		return _0x1e0198(_0x5f25c6) ? _0x259734[_0x5f25c6] : undefined;
	}, _0x53643d = function _0x48bf6a(_0x4c1d5c, _0xe5c1b2) {
		_0x4c1d5c[_0x28a0d1] = _0x4c1d5c[_0x28a0d1] || {};
		_0x4c1d5c[_0x28a0d1][_0xe5c1b2] = true;
	}, _0x27363d = function _0xf66f36(_0x1609ff, _0x44d098, _0x3d6cd2) {
		var _0x2d4658 = (_0x3d6cd2 ? 'before' : '') + 'pluginsetup';
		_0x1609ff.trigger(_0x2d4658, _0x44d098);
		_0x1609ff.trigger(_0x2d4658 + ':' + _0x44d098.name, _0x44d098);
	}, _0x5b1c55 = function _0x3121de(_0x37f92f, _0x467bee) {
		var _0xb83996 = function _0x2965f1() {
			_0x27363d(this, {
				'name': _0x37f92f,
				'plugin': _0x467bee,
				'instance': null
			}, true);
			var _0x54409b = _0x467bee.apply(this, arguments);
			return _0x53643d(this, _0x37f92f), _0x27363d(this, {
				'name': _0x37f92f,
				'plugin': _0x467bee,
				'instance': _0x54409b
			}), _0x54409b;
		};
		return Object.keys(_0x467bee).forEach(function (_0x32b9c0) {
			_0xb83996[_0x32b9c0] = _0x467bee[_0x32b9c0];
		}), _0xb83996;
	}, _0x252fe1 = function _0xa387f8(_0x4f4bd9, _0x4c718e) {
		return _0x4c718e.prototype.name = _0x4f4bd9, function () {
			_0x27363d(this, {
				'name': _0x4f4bd9,
				'plugin': _0x4c718e,
				'instance': null
			}, true);
			for (var _0x43de7c = arguments.length, _0x3f8d2d = Array(_0x43de7c), _0xe3bc5e = 0; _0xe3bc5e < _0x43de7c; _0xe3bc5e++) {
				_0x3f8d2d[_0xe3bc5e] = arguments[_0xe3bc5e];
			}
			var _0x5843a0 = new (Function.prototype.bind.apply(_0x4c718e, [null].concat([this].concat(_0x3f8d2d))))();
			return this[_0x4f4bd9] = function () {
				return _0x5843a0;
			}, _0x27363d(this, _0x5843a0.getEventHash()), _0x5843a0;
		};
	}, _0x50ba6b = (function () {
		function _0x556d73(_0x3f183e) {
			_0x2ab3d2(this, _0x556d73);
			if (this.constructor === _0x556d73) {
				throw new Error('Plugin must be sub-classed; not directly instantiated.');
			}
			this.player = _0x3f183e;
			_0x3d7203(this);
			delete this.trigger;
			_0x42a346(this, this.constructor.defaultState);
			_0x53643d(_0x3f183e, this.name);
			this.dispose = _0x2e578a(this, this.dispose);
			_0x3f183e.on('dispose', this.dispose);
		}
		return _0x556d73.prototype.version = function _0x3fe51b() {
			return this.constructor.VERSION;
		}, _0x556d73.prototype.getEventHash = function _0xfa1c90() {
			var _0x188c78 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			return _0x188c78.name = this.name, _0x188c78.plugin = this.constructor, _0x188c78.instance = this, _0x188c78;
		}, _0x556d73.prototype.trigger = function _0x173bac(_0x2c1d38) {
			var _0x2f9022 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			return _0x3c77e0(this.eventBusEl_, _0x2c1d38, this.getEventHash(_0x2f9022));
		}, _0x556d73.prototype.handleStateChanged = function _0x5e52a1(_0x4f0518) {
		}, _0x556d73.prototype.dispose = function _0x2d9328() {
			var _0x2759e4 = this.name, _0x4b8dd8 = this.player;
			this.trigger('dispose');
			this.off();
			_0x4b8dd8.off('dispose', this.dispose);
			_0x4b8dd8[_0x28a0d1][_0x2759e4] = false;
			this.player = this.state = null;
			_0x4b8dd8[_0x2759e4] = _0x252fe1(_0x2759e4, _0x259734[_0x2759e4]);
		}, _0x556d73.isBasic = function _0x4b3600(_0x27d6ad) {
			var _0x2fbbc5 = typeof _0x27d6ad === 'string' ? _0x44bce8(_0x27d6ad) : _0x27d6ad;
			return typeof _0x2fbbc5 === 'function' && !_0x556d73.prototype.isPrototypeOf(_0x2fbbc5.prototype);
		}, _0x556d73.registerPlugin = function _0x457961(_0x13561b, _0xee7d8a) {
			if (typeof _0x13561b !== 'string') {
				throw new Error('Illegal plugin name, "' + _0x13561b + '", must be a string, was ' + (typeof _0x13561b === 'undefined' ? 'undefined' : _0x65b994(_0x13561b)) + '.');
			}
			if (_0x1e0198(_0x13561b)) {
				_0x50330f.warn('A plugin named "' + _0x13561b + '" already exists. You may want to avoid re-registering plugins!');
			} else {
				if (_0x18b894.prototype.hasOwnProperty(_0x13561b)) {
					throw new Error('Illegal plugin name, "' + _0x13561b + '", cannot share a name with an existing player method!');
				}
			}
			if (typeof _0xee7d8a !== 'function') {
				throw new Error('Illegal plugin for "' + _0x13561b + '", must be a function, was ' + (typeof _0xee7d8a === 'undefined' ? 'undefined' : _0x65b994(_0xee7d8a)) + '.');
			}
			return _0x259734[_0x13561b] = _0xee7d8a, _0x13561b !== _0x2ae968 && (_0x556d73.isBasic(_0xee7d8a) ? _0x18b894.prototype[_0x13561b] = _0x5b1c55(_0x13561b, _0xee7d8a) : _0x18b894.prototype[_0x13561b] = _0x252fe1(_0x13561b, _0xee7d8a)), _0xee7d8a;
		}, _0x556d73.deregisterPlugin = function _0x10ff14(_0x539812) {
			if (_0x539812 === _0x2ae968) {
				throw new Error('Cannot de-register base plugin.');
			}
			_0x1e0198(_0x539812) && (delete _0x259734[_0x539812], delete _0x18b894.prototype[_0x539812]);
		}, _0x556d73.getPlugins = function _0x5d8019() {
			var _0x50fdfd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.keys(_0x259734), _0x19e200 = void 0;
			return _0x50fdfd.forEach(function (_0x27bea2) {
				var _0x4ab2a2 = _0x44bce8(_0x27bea2);
				_0x4ab2a2 && (_0x19e200 = _0x19e200 || {}, _0x19e200[_0x27bea2] = _0x4ab2a2);
			}), _0x19e200;
		}, _0x556d73.getPluginVersion = function _0x1ed622(_0xc596fe) {
			var _0x21bca2 = _0x44bce8(_0xc596fe);
			return _0x21bca2 && _0x21bca2.VERSION || '';
		}, _0x556d73;
	}());
	_0x50ba6b.getPlugin = _0x44bce8;
	_0x50ba6b.BASE_PLUGIN_NAME = _0x2ae968;
	_0x50ba6b.registerPlugin(_0x2ae968, _0x50ba6b);
	_0x18b894.prototype.usingPlugin = function (_0x2df413) {
		return !!this[_0x28a0d1] && this[_0x28a0d1][_0x2df413] === true;
	};
	_0x18b894.prototype.hasPlugin = function (_0x2da70a) {
		return !!_0x1e0198(_0x2da70a);
	};
	var _0x5cf64f = function _0x2e32fc(_0x572dda, _0x1bd026) {
		if (typeof _0x1bd026 !== 'function' && _0x1bd026 !== null) {
			throw new TypeError('Super expression must either be null or a function, not ' + (typeof _0x1bd026 === 'undefined' ? 'undefined' : _0x65b994(_0x1bd026)));
		}
		_0x572dda.prototype = Object.create(_0x1bd026 && _0x1bd026.prototype, {
			'constructor': {
				'value': _0x572dda,
				'enumerable': false,
				'writable': true,
				'configurable': true
			}
		});
		_0x1bd026 && (_0x572dda.super_ = _0x1bd026);
	}, _0x54d335 = function _0x2a1264(_0x365ac2) {
		var _0xe65dcd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _0x115f91 = function _0x3574a3() {
			_0x365ac2.apply(this, arguments);
		}, _0x51e8cf = {};
		if ((typeof _0xe65dcd === 'undefined' ? 'undefined' : _0x65b994(_0xe65dcd)) === 'object') {
			_0xe65dcd.constructor !== Object.prototype.constructor && (_0x115f91 = _0xe65dcd.constructor);
			_0x51e8cf = _0xe65dcd;
		} else {
			typeof _0xe65dcd === 'function' && (_0x115f91 = _0xe65dcd);
		}
		_0x5cf64f(_0x115f91, _0x365ac2);
		for (var _0x1ced2f in _0x51e8cf) {
			_0x51e8cf.hasOwnProperty(_0x1ced2f) && (_0x115f91.prototype[_0x1ced2f] = _0x51e8cf[_0x1ced2f]);
		}
		return _0x115f91;
	}, _0xbc631a = function _0x2b5d08(_0x114c9c) {
		return _0x114c9c.indexOf('#') === 0 ? _0x114c9c.slice(1) : _0x114c9c;
	};
	function _0x1dff89(_0x399566, _0x384083, _0x28f48a) {
		var _0x24c044 = _0x1dff89.getPlayer(_0x399566);
		if (_0x24c044) {
			return _0x384083 && _0x50330f.warn('Player "' + _0x399566 + '" is already initialised. Options will not be applied.'), _0x28f48a && _0x24c044.ready(_0x28f48a), _0x24c044;
		}
		var _0x3e1c44 = typeof _0x399566 === 'string' ? _0x12e31e('#' + _0xbc631a(_0x399566)) : _0x399566;
		if (!_0x21e288(_0x3e1c44)) {
			throw new TypeError('The element or ID supplied is not valid. (videojs)');
		}
		!_0x5d8ee4.body.contains(_0x3e1c44) && _0x50330f.warn('The element supplied is not included in the DOM');
		_0x384083 = _0x384083 || {};
		_0x1dff89.hooks('beforesetup').forEach(function (_0x395d77) {
			return;
			var _0x159a1c = _0x395d77(_0x3e1c44, _0x47ec58(_0x384083));
			if (!_0x2d2c83(_0x159a1c) || Array.isArray(_0x159a1c)) {
				_0x50330f.error('please return an object in beforesetup hooks');
				return;
			}
			_0x384083 = _0x47ec58(_0x384083, _0x159a1c);
		});
		var _0x4af5f6 = _0x197ed7.getComponent('Player');
		return _0x24c044 = new _0x4af5f6(_0x3e1c44, _0x384083, _0x28f48a), _0x1dff89.hooks('setup').forEach(function (_0x2489fb) {
			return;
			return _0x2489fb(_0x24c044);
		}), _0x24c044;
	}
	_0x1dff89.hooks_ = {};
	_0x1dff89.hooks = function (_0x5798e5, _0x50af84) {
		return _0x1dff89.hooks_[_0x5798e5] = _0x1dff89.hooks_[_0x5798e5] || [], _0x50af84 && (_0x1dff89.hooks_[_0x5798e5] = _0x1dff89.hooks_[_0x5798e5].concat(_0x50af84)), _0x1dff89.hooks_[_0x5798e5];
	};
	_0x1dff89.hook = function (_0x3d0df2, _0x21be0f) {
		_0x1dff89.hooks(_0x3d0df2, _0x21be0f);
	};
	_0x1dff89.hookOnce = function (_0x3e85b4, _0x1b7423) {
		_0x1dff89.hooks(_0x3e85b4, [].concat(_0x1b7423).map(function (_0x358f42) {
			var _0x31104e = function _0x5191ed() {
				return _0x1dff89.removeHook(_0x3e85b4, _0x5191ed), _0x358f42.apply(undefined, arguments);
			};
			return _0x31104e;
		}));
	};
	_0x1dff89.removeHook = function (_0x1438a6, _0x221ab8) {
		var _0x11c997 = _0x1dff89.hooks(_0x1438a6).indexOf(_0x221ab8);
		if (_0x11c997 <= -1) {
			return false;
		}
		return _0x1dff89.hooks_[_0x1438a6] = _0x1dff89.hooks_[_0x1438a6].slice(), _0x1dff89.hooks_[_0x1438a6].splice(_0x11c997, 1), true;
	};
	if (_0x562c10.VIDEOJS_NO_DYNAMIC_STYLE !== true && _0x2e6e42()) {
		var _0x427003 = _0x12e31e('.vjs-styles-defaults');
		if (!_0x427003) {
			_0x427003 = _0xf5e320('vjs-styles-defaults');
			var _0x498d3a = _0x12e31e('head');
			_0x498d3a && _0x498d3a.insertBefore(_0x427003, _0x498d3a.firstChild);
			_0x12a3e6(_0x427003, '\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ');
		}
	}
	_0x4157c6(1, _0x1dff89);
	_0x1dff89.VERSION = _0x4aafcf;
	_0x1dff89.options = _0x18b894.prototype.options_;
	_0x1dff89.getPlayers = function () {
		return _0x18b894.players;
	};
	_0x1dff89.getPlayer = function (_0x32f443) {
		var _0x52605f = _0x18b894.players, _0xe9a3b3 = void 0;
		if (typeof _0x32f443 === 'string') {
			var _0x1b75de = _0xbc631a(_0x32f443), _0x750294 = _0x52605f[_0x1b75de];
			if (_0x750294) {
				return _0x750294;
			}
			_0xe9a3b3 = _0x12e31e('#' + _0x1b75de);
		} else {
			_0xe9a3b3 = _0x32f443;
		}
		if (_0x21e288(_0xe9a3b3)) {
			var _0x57c7fd = _0xe9a3b3, _0x57fc71 = _0x57c7fd.player, _0x43597c = _0x57c7fd.playerId;
			if (_0x57fc71 || _0x52605f[_0x43597c]) {
				return _0x57fc71 || _0x52605f[_0x43597c];
			}
		}
	};
	_0x1dff89.getAllPlayers = function () {
		return Object.keys(_0x18b894.players).map(function (_0xde7ae0) {
			return _0x18b894.players[_0xde7ae0];
		}).filter(Boolean);
	};
	_0x1dff89.players = _0x18b894.players;
	_0x1dff89.getComponent = _0x197ed7.getComponent;
	_0x1dff89.registerComponent = function (_0x515a20, _0x393a97) {
		_0x3ed9ba.isTech(_0x393a97) && _0x50330f.warn('The ' + _0x515a20 + ' tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)');
		_0x197ed7.registerComponent.call(_0x197ed7, _0x515a20, _0x393a97);
	};
	_0x1dff89.getTech = _0x3ed9ba.getTech;
	_0x1dff89.registerTech = _0x3ed9ba.registerTech;
	_0x1dff89.use = _0x438703;
	Object.defineProperty(_0x1dff89, 'middleware', {
		'value': {},
		'writeable': false,
		'enumerable': true
	});
	Object.defineProperty(_0x1dff89.middleware, 'TERMINATOR', {
		'value': _0x1ae7e6,
		'writeable': false,
		'enumerable': true
	});
	_0x1dff89.browser = _0x1455c0;
	_0x1dff89.TOUCH_ENABLED = _0x721419;
	_0x1dff89.extend = _0x54d335;
	_0x1dff89.mergeOptions = _0x47ec58;
	_0x1dff89.bind = _0x2e578a;
	_0x1dff89.registerPlugin = _0x50ba6b.registerPlugin;
	_0x1dff89.deregisterPlugin = _0x50ba6b.deregisterPlugin;
	_0x1dff89.plugin = function (_0x5c38e6, _0x3ef756) {
		return _0x50330f.warn('videojs.plugin() is deprecated; use videojs.registerPlugin() instead'), _0x50ba6b.registerPlugin(_0x5c38e6, _0x3ef756);
	};
	_0x1dff89.getPlugins = _0x50ba6b.getPlugins;
	_0x1dff89.getPlugin = _0x50ba6b.getPlugin;
	_0x1dff89.getPluginVersion = _0x50ba6b.getPluginVersion;
	_0x1dff89.addLanguage = function (_0x1258ab, _0x3ee0f7) {
		var _0x381990;
		return _0x1258ab = ('' + _0x1258ab).toLowerCase(), _0x1dff89.options.languages = _0x47ec58(_0x1dff89.options.languages, (_0x381990 = {}, _0x381990[_0x1258ab] = _0x3ee0f7, _0x381990)), _0x1dff89.options.languages[_0x1258ab];
	};
	_0x1dff89.log = _0x50330f;
	_0x1dff89.createTimeRange = _0x1dff89.createTimeRanges = _0x5e23d4;
	_0x1dff89.formatTime = _0x298a89;
	_0x1dff89.setFormatTime = _0x53179b;
	_0x1dff89.resetFormatTime = _0x2c9647;
	_0x1dff89.parseUrl = _0x24fe04;
	_0x1dff89.isCrossOrigin = _0x6e9b63;
	_0x1dff89.EventTarget = _0x37a20c;
	_0x1dff89.on = _0x7b0228;
	_0x1dff89.one = _0x53446c;
	_0x1dff89.off = _0x706013;
	_0x1dff89.trigger = _0x3c77e0;
	_0x1dff89.xhr = _0x36f92f;
	_0x1dff89.TextTrack = _0x5a9a69;
	_0x1dff89.AudioTrack = _0x1336a9;
	_0x1dff89.VideoTrack = _0x140294;
	[
		'isEl',
		'isTextNode',
		'createEl',
		'hasClass',
		'addClass',
		'removeClass',
		'toggleClass',
		'setAttributes',
		'getAttributes',
		'emptyEl',
		'appendContent',
		'insertContent'
	].forEach(function (_0x4c8847) {
		_0x1dff89[_0x4c8847] = function () {
			return _0x50330f.warn('videojs.' + _0x4c8847 + '() is deprecated; use videojs.dom.' + _0x4c8847 + '() instead'), _0x561a5e[_0x4c8847].apply(null, arguments);
		};
	});
	_0x1dff89.computedStyle = _0x39019d;
	_0x1dff89.dom = _0x561a5e;
	_0x1dff89.url = _0x2177ed;
	var _0xd42db6 = _0x3b14ad(function (_0x42c61a, _0x308c53) {
		(function (_0x1b7133) {
			var _0x135455 = {
				'buildAbsoluteURL': function _0x2322fe(_0x3d77b1, _0x3d85d4, _0x145f26) {
					_0x145f26 = _0x145f26 || {};
					_0x3d77b1 = _0x3d77b1.trim();
					_0x3d85d4 = _0x3d85d4.trim();
					if (!_0x3d85d4) {
						if (!_0x145f26.alwaysNormalize) {
							return _0x3d77b1;
						}
						var _0x22e190 = _0x135455.parseURL(_0x3d77b1);
						if (!_0x22e190) {
							throw new Error('Error trying to parse base URL.');
						}
						return _0x22e190.path = _0x135455.normalizePath(_0x22e190.path), _0x135455.buildURLFromParts(_0x22e190);
					}
					var _0x56cede = _0x135455.parseURL(_0x3d85d4);
					if (!_0x56cede) {
						throw new Error('Error trying to parse relative URL.');
					}
					if (_0x56cede.scheme) {
						if (!_0x145f26.alwaysNormalize) {
							return _0x3d85d4;
						}
						return _0x56cede.path = _0x135455.normalizePath(_0x56cede.path), _0x135455.buildURLFromParts(_0x56cede);
					}
					var _0x558e5b = _0x135455.parseURL(_0x3d77b1);
					if (!_0x558e5b) {
						throw new Error('Error trying to parse base URL.');
					}
					if (!_0x558e5b.netLoc && _0x558e5b.path && _0x558e5b.path[0] !== '/') {
						var _0x3ee06c = /^([^\/;?#]*)(.*)$/.exec(_0x558e5b.path);
						_0x558e5b.netLoc = _0x3ee06c[1];
						_0x558e5b.path = _0x3ee06c[2];
					}
					_0x558e5b.netLoc && !_0x558e5b.path && (_0x558e5b.path = '/');
					var _0x1dc2fb = {
						'scheme': _0x558e5b.scheme,
						'netLoc': _0x56cede.netLoc,
						'path': null,
						'params': _0x56cede.params,
						'query': _0x56cede.query,
						'fragment': _0x56cede.fragment
					};
					if (!_0x56cede.netLoc) {
						_0x1dc2fb.netLoc = _0x558e5b.netLoc;
						if (_0x56cede.path[0] !== '/') {
							if (!_0x56cede.path) {
								_0x1dc2fb.path = _0x558e5b.path;
								!_0x56cede.params && (_0x1dc2fb.params = _0x558e5b.params, !_0x56cede.query && (_0x1dc2fb.query = _0x558e5b.query));
							} else {
								var _0x575f19 = _0x558e5b.path, _0x4570bb = _0x575f19.substring(0, _0x575f19.lastIndexOf('/') + 1) + _0x56cede.path;
								_0x1dc2fb.path = _0x135455.normalizePath(_0x4570bb);
							}
						}
					}
					return _0x1dc2fb.path === null && (_0x1dc2fb.path = _0x145f26.alwaysNormalize ? _0x135455.normalizePath(_0x56cede.path) : _0x56cede.path), _0x135455.buildURLFromParts(_0x1dc2fb);
				},
				'parseURL': function _0x2d08f7(_0x372529) {
					var _0x17e98b = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/.exec(_0x372529);
					if (!_0x17e98b) {
						return null;
					}
					return {
						'scheme': _0x17e98b[1] || '',
						'netLoc': _0x17e98b[2] || '',
						'path': _0x17e98b[3] || '',
						'params': _0x17e98b[4] || '',
						'query': _0x17e98b[5] || '',
						'fragment': _0x17e98b[6] || ''
					};
				},
				'normalizePath': function _0x4ff014(_0x1eeaa9) {
					_0x1eeaa9 = _0x1eeaa9.split('').reverse().join('').replace(/(?:\/|^)\.(?=\/)/g, '');
					while (_0x1eeaa9.length !== (_0x1eeaa9 = _0x1eeaa9.replace(/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, '')).length) {
					}
					return _0x1eeaa9.split('').reverse().join('');
				},
				'buildURLFromParts': function _0x3c0d1a(_0x18be70) {
					return _0x18be70.scheme + _0x18be70.netLoc + _0x18be70.path + _0x18be70.params + _0x18be70.query + _0x18be70.fragment;
				}
			};
			_0x42c61a.exports = _0x135455;
		}(_0x260c1f));
	}), _0x2ad457 = function _0x9b7cd1(_0x315751, _0x344993) {
		if (!(_0x315751 instanceof _0x344993)) {
			throw new TypeError('Cannot call a class as a function');
		}
	}, _0xbbf3c7 = Object.assign || function (_0x404503) {
		for (var _0x2cf148 = 1; _0x2cf148 < arguments.length; _0x2cf148++) {
			var _0x84a055 = arguments[_0x2cf148];
			for (var _0x1179fc in _0x84a055) {
				Object.prototype.hasOwnProperty.call(_0x84a055, _0x1179fc) && (_0x404503[_0x1179fc] = _0x84a055[_0x1179fc]);
			}
		}
		return _0x404503;
	}, _0xb6641 = function _0x1c8605(_0xea67a9, _0x372e33) {
		if (typeof _0x372e33 !== 'function' && _0x372e33 !== null) {
			throw new TypeError('Super expression must either be null or a function, not ' + (typeof _0x372e33 === 'undefined' ? 'undefined' : _0x65b994(_0x372e33)));
		}
		_0xea67a9.prototype = Object.create(_0x372e33 && _0x372e33.prototype, {
			'constructor': {
				'value': _0xea67a9,
				'enumerable': false,
				'writable': true,
				'configurable': true
			}
		});
		if (_0x372e33) {
			Object.setPrototypeOf ? Object.setPrototypeOf(_0xea67a9, _0x372e33) : _0xea67a9['__proto__'] = _0x372e33;
		}
	}, _0x1b1b55 = function _0x51a8ab(_0x46c95e, _0x5a3b83) {
		if (!_0x46c95e) {
			throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
		}
		return _0x5a3b83 && ((typeof _0x5a3b83 === 'undefined' ? 'undefined' : _0x65b994(_0x5a3b83)) === 'object' || typeof _0x5a3b83 === 'function') ? _0x5a3b83 : _0x46c95e;
	}, _0x2f48b8 = (function () {
		function _0x5cb544() {
			_0x2ad457(this, _0x5cb544);
			this.listeners = {};
		}
		return _0x5cb544.prototype.on = function _0x561a6e(_0x4e9308, _0x5b1b58) {
			!this.listeners[_0x4e9308] && (this.listeners[_0x4e9308] = []);
			this.listeners[_0x4e9308].push(_0x5b1b58);
		}, _0x5cb544.prototype.off = function _0x26d428(_0x5979d3, _0x5063e5) {
			if (!this.listeners[_0x5979d3]) {
				return false;
			}
			var _0x2a3314 = this.listeners[_0x5979d3].indexOf(_0x5063e5);
			return this.listeners[_0x5979d3].splice(_0x2a3314, 1), _0x2a3314 > -1;
		}, _0x5cb544.prototype.trigger = function _0x49871f(_0x2f1e12) {
			var _0x2efc79 = this.listeners[_0x2f1e12], _0x17cdda = void 0, _0x10bc7e = void 0, _0x5b44a2 = void 0;
			if (!_0x2efc79) {
				return;
			}
			if (arguments.length === 2) {
				_0x10bc7e = _0x2efc79.length;
				for (_0x17cdda = 0; _0x17cdda < _0x10bc7e; ++_0x17cdda) {
					_0x2efc79[_0x17cdda].call(this, arguments[1]);
				}
			} else {
				_0x5b44a2 = Array.prototype.slice.call(arguments, 1);
				_0x10bc7e = _0x2efc79.length;
				for (_0x17cdda = 0; _0x17cdda < _0x10bc7e; ++_0x17cdda) {
					_0x2efc79[_0x17cdda].apply(this, _0x5b44a2);
				}
			}
		}, _0x5cb544.prototype.dispose = function _0x33dbcc() {
			this.listeners = {};
		}, _0x5cb544.prototype.pipe = function _0x3b1b99(_0x38d2b6) {
			this.on('data', function (_0xb3344d) {
				_0x38d2b6.push(_0xb3344d);
			});
		}, _0x5cb544;
	}()), _0x4169cd = function (_0x1fde39) {
		_0xb6641(_0x424acf, _0x1fde39);
		function _0x424acf() {
			_0x2ad457(this, _0x424acf);
			var _0x3a7dc5 = _0x1b1b55(this, _0x1fde39.call(this));
			return _0x3a7dc5.buffer = '', _0x3a7dc5;
		}
		return _0x424acf.prototype.push = function _0x3f2d01(_0x4d2677) {
			var _0x1cb9a5 = void 0;
			this.buffer += _0x4d2677;
			_0x1cb9a5 = this.buffer.indexOf('\n');
			for (; _0x1cb9a5 > -1; _0x1cb9a5 = this.buffer.indexOf('\n')) {
				this.trigger('data', this.buffer.substring(0, _0x1cb9a5));
				this.buffer = this.buffer.substring(_0x1cb9a5 + 1);
			}
		}, _0x424acf;
	}(_0x2f48b8), _0x2b0350 = function _0x2d7c41() {
		var _0x1871ae = '[^=]*', _0x18a0ef = '"[^"]*"|[^,]*', _0xefeb1 = '(?:' + _0x1871ae + ')=(?:' + _0x18a0ef + ')';
		return new RegExp('(?:^|,)(' + _0xefeb1 + ')');
	}, _0x1515bc = function _0x4b9dca(_0x43ded4) {
		var _0x172b3b = _0x43ded4.split(_0x2b0350()), _0x2b942d = {}, _0x3fcc27 = _0x172b3b.length, _0x517afa = void 0;
		while (_0x3fcc27--) {
			if (_0x172b3b[_0x3fcc27] === '') {
				continue;
			}
			_0x517afa = /([^=]*)=(.*)/.exec(_0x172b3b[_0x3fcc27]).slice(1);
			_0x517afa[0] = _0x517afa[0].replace(/^\s+|\s+$/g, '');
			_0x517afa[1] = _0x517afa[1].replace(/^\s+|\s+$/g, '');
			_0x517afa[1] = _0x517afa[1].replace(/^['"](.*)['"]$/g, '$1');
			_0x2b942d[_0x517afa[0]] = _0x517afa[1];
		}
		return _0x2b942d;
	}, _0xd4a549 = function (_0x89a1ae) {
		_0xb6641(_0x2d45d2, _0x89a1ae);
		function _0x2d45d2() {
			_0x2ad457(this, _0x2d45d2);
			var _0x4a3c85 = _0x1b1b55(this, _0x89a1ae.call(this));
			return _0x4a3c85.customParsers = [], _0x4a3c85;
		}
		return _0x2d45d2.prototype.push = function _0x3081b7(_0x2012d4) {
			var _0x551f63 = void 0, _0x4f9492 = void 0;
			_0x2012d4 = _0x2012d4.replace(/^[\u0000\s]+|[\u0000\s]+$/g, '');
			if (_0x2012d4.length === 0) {
				return;
			}
			if (_0x2012d4[0] !== '#') {
				this.trigger('data', {
					'type': 'uri',
					'uri': _0x2012d4
				});
				return;
			}
			for (var _0x4192b5 = 0; _0x4192b5 < this.customParsers.length; _0x4192b5++) {
				if (this.customParsers[_0x4192b5].call(this, _0x2012d4)) {
					return;
				}
			}
			if (_0x2012d4.indexOf('#EXT') !== 0) {
				this.trigger('data', {
					'type': 'comment',
					'text': _0x2012d4.slice(1)
				});
				return;
			}
			_0x2012d4 = _0x2012d4.replace('\r', '');
			_0x551f63 = /^#EXTM3U/.exec(_0x2012d4);
			if (_0x551f63) {
				this.trigger('data', {
					'type': 'tag',
					'tagType': 'm3u'
				});
				return;
			}
			_0x551f63 = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'inf'
				};
				_0x551f63[1] && (_0x4f9492.duration = parseFloat(_0x551f63[1]));
				_0x551f63[2] && (_0x4f9492.title = _0x551f63[2]);
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'targetduration'
				};
				_0x551f63[1] && (_0x4f9492.duration = parseInt(_0x551f63[1], 10));
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'totalduration'
				};
				_0x551f63[1] && (_0x4f9492.duration = parseInt(_0x551f63[1], 10));
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'version'
				};
				_0x551f63[1] && (_0x4f9492.version = parseInt(_0x551f63[1], 10));
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'media-sequence'
				};
				_0x551f63[1] && (_0x4f9492.number = parseInt(_0x551f63[1], 10));
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'discontinuity-sequence'
				};
				_0x551f63[1] && (_0x4f9492.number = parseInt(_0x551f63[1], 10));
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'playlist-type'
				};
				_0x551f63[1] && (_0x4f9492.playlistType = _0x551f63[1]);
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'byterange'
				};
				_0x551f63[1] && (_0x4f9492.length = parseInt(_0x551f63[1], 10));
				_0x551f63[2] && (_0x4f9492.offset = parseInt(_0x551f63[2], 10));
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'allow-cache'
				};
				_0x551f63[1] && (_0x4f9492.allowed = !/NO/.test(_0x551f63[1]));
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-MAP:?(.*)$/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'map'
				};
				if (_0x551f63[1]) {
					var _0x48157d = _0x1515bc(_0x551f63[1]);
					_0x48157d.URI && (_0x4f9492.uri = _0x48157d.URI);
					if (_0x48157d.BYTERANGE) {
						var _0x5721fc = _0x48157d.BYTERANGE.split('@'), _0x4fa353 = _0x5721fc[0], _0xdab8a7 = _0x5721fc[1];
						_0x4f9492.byterange = {};
						_0x4fa353 && (_0x4f9492.byterange.length = parseInt(_0x4fa353, 10));
						_0xdab8a7 && (_0x4f9492.byterange.offset = parseInt(_0xdab8a7, 10));
					}
				}
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-STREAM-INF:?(.*)$/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'stream-inf'
				};
				if (_0x551f63[1]) {
					_0x4f9492.attributes = _0x1515bc(_0x551f63[1]);
					if (_0x4f9492.attributes.RESOLUTION) {
						var _0x24e718 = _0x4f9492.attributes.RESOLUTION.split('x'), _0x470548 = {};
						_0x24e718[0] && (_0x470548.width = parseInt(_0x24e718[0], 10));
						_0x24e718[1] && (_0x470548.height = parseInt(_0x24e718[1], 10));
						_0x4f9492.attributes.RESOLUTION = _0x470548;
					}
					_0x4f9492.attributes.BANDWIDTH && (_0x4f9492.attributes.BANDWIDTH = parseInt(_0x4f9492.attributes.BANDWIDTH, 10));
					_0x4f9492.attributes['PROGRAM-ID'] && (_0x4f9492.attributes['PROGRAM-ID'] = parseInt(_0x4f9492.attributes['PROGRAM-ID'], 10));
				}
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-MEDIA:?(.*)$/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'media'
				};
				_0x551f63[1] && (_0x4f9492.attributes = _0x1515bc(_0x551f63[1]));
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-ENDLIST/.exec(_0x2012d4);
			if (_0x551f63) {
				this.trigger('data', {
					'type': 'tag',
					'tagType': 'endlist'
				});
				return;
			}
			_0x551f63 = /^#EXT-X-DISCONTINUITY/.exec(_0x2012d4);
			if (_0x551f63) {
				this.trigger('data', {
					'type': 'tag',
					'tagType': 'discontinuity'
				});
				return;
			}
			_0x551f63 = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'program-date-time'
				};
				_0x551f63[1] && (_0x4f9492.dateTimeString = _0x551f63[1], _0x4f9492.dateTimeObject = new Date(_0x551f63[1]));
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-KEY:?(.*)$/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'key'
				};
				_0x551f63[1] && (_0x4f9492.attributes = _0x1515bc(_0x551f63[1]), _0x4f9492.attributes.IV && (_0x4f9492.attributes.IV.substring(0, 2).toLowerCase() === '0x' && (_0x4f9492.attributes.IV = _0x4f9492.attributes.IV.substring(2)), _0x4f9492.attributes.IV = _0x4f9492.attributes.IV.match(/.{8}/g), _0x4f9492.attributes.IV[0] = parseInt(_0x4f9492.attributes.IV[0], 16), _0x4f9492.attributes.IV[1] = parseInt(_0x4f9492.attributes.IV[1], 16), _0x4f9492.attributes.IV[2] = parseInt(_0x4f9492.attributes.IV[2], 16), _0x4f9492.attributes.IV[3] = parseInt(_0x4f9492.attributes.IV[3], 16), _0x4f9492.attributes.IV = new Uint32Array(_0x4f9492.attributes.IV)));
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-START:?(.*)$/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'start'
				};
				_0x551f63[1] && (_0x4f9492.attributes = _0x1515bc(_0x551f63[1]), _0x4f9492.attributes['TIME-OFFSET'] = parseFloat(_0x4f9492.attributes['TIME-OFFSET']), _0x4f9492.attributes.PRECISE = /YES/.test(_0x4f9492.attributes.PRECISE));
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'cue-out-cont'
				};
				_0x551f63[1] ? _0x4f9492.data = _0x551f63[1] : _0x4f9492.data = '';
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'cue-out'
				};
				_0x551f63[1] ? _0x4f9492.data = _0x551f63[1] : _0x4f9492.data = '';
				this.trigger('data', _0x4f9492);
				return;
			}
			_0x551f63 = /^#EXT-X-CUE-IN:?(.*)?$/.exec(_0x2012d4);
			if (_0x551f63) {
				_0x4f9492 = {
					'type': 'tag',
					'tagType': 'cue-in'
				};
				_0x551f63[1] ? _0x4f9492.data = _0x551f63[1] : _0x4f9492.data = '';
				this.trigger('data', _0x4f9492);
				return;
			}
			this.trigger('data', {
				'type': 'tag',
				'data': _0x2012d4.slice(4)
			});
		}, _0x2d45d2.prototype.addParser = function _0xa7754d(_0x41bb5d) {
			var _0x41f2e1 = this, _0x2fd154 = _0x41bb5d.expression, _0x12e89d = _0x41bb5d.customType, _0x17652 = _0x41bb5d.dataParser, _0x33b9d8 = _0x41bb5d.segment;
			typeof _0x17652 !== 'function' && (_0x17652 = function _0x52fdab(_0x886c16) {
				return _0x886c16;
			});
			this.customParsers.push(function (_0x1f7e50) {
				var _0x3efe01 = _0x2fd154.exec(_0x1f7e50);
				if (_0x3efe01) {
					return _0x41f2e1.trigger('data', {
						'type': 'custom',
						'data': _0x17652(_0x1f7e50),
						'customType': _0x12e89d,
						'segment': _0x33b9d8
					}), true;
				}
			});
		}, _0x2d45d2;
	}(_0x2f48b8), _0x3d4998 = function (_0x547437) {
		_0xb6641(_0xc35ee7, _0x547437);
		function _0xc35ee7() {
			_0x2ad457(this, _0xc35ee7);
			var _0x5278ca = _0x1b1b55(this, _0x547437.call(this));
			_0x5278ca.lineStream = new _0x4169cd();
			_0x5278ca.parseStream = new _0xd4a549();
			_0x5278ca.lineStream.pipe(_0x5278ca.parseStream);
			var _0x384dac = _0x5278ca, _0x3365a1 = [], _0x42a344 = {
				discontinuity: true,
				dateTimeString: _0x12a1b5.dateTimeString,
				dateTimeObject: _0x12a1b5.dateTimeObject,
				cueOut: _0x12a1b5.data,
				cueOutCont: _0x12a1b5.data,
				cueIn: _0x12a1b5.data,
				uri: _0x12a1b5.uri,
				timeline: _0x5b8430
			}, _0x5e8ae8 = void 0, _0x4887cc = void 0, _0x587b69 = function _0x23234d() {
			}, _0x1b4e73 = {
				'AUDIO': {},
				'VIDEO': {},
				'CLOSED-CAPTIONS': {},
				'SUBTITLES': {}
			}, _0x5b8430 = 0;
			return _0x5278ca.manifest = {
				'allowCache': true,
				'discontinuityStarts': [],
				'segments': []
			}, _0x5278ca.parseStream.on('data', function (_0x12a1b5) {
				var _0x4d2479 = void 0, _0x22083d = void 0;
				({
					'tag': function _0x52ab29() {
						({
							'allow-cache': function _0x4b5ac4() {
								this.manifest.allowCache = _0x12a1b5.allowed;
								!('allowed' in _0x12a1b5) && (this.trigger('info', { 'message': 'defaulting allowCache to YES' }), this.manifest.allowCache = true);
							},
							'byterange': function _0x4d7a8b() {
								var _0x4fd3ce = {};
								if ('length' in _0x12a1b5) {
									_0x42a344.byterange = _0x4fd3ce;
									_0x4fd3ce.length = _0x12a1b5.length;
									!('offset' in _0x12a1b5) && (this.trigger('info', { 'message': 'defaulting offset to zero' }), _0x12a1b5.offset = 0);
								}
								if ('offset' in _0x12a1b5) {
									_0x42a344.byterange = _0x4fd3ce;
									_0x4fd3ce.offset = _0x12a1b5.offset;
								}
							},
							'endlist': function _0x1a92e8() {
								this.manifest.endList = true;
							},
							'inf': function _0x1d8059() {
								!('mediaSequence' in this.manifest) && (this.manifest.mediaSequence = 0, this.trigger('info', { 'message': 'defaulting media sequence to zero' }));
								!('discontinuitySequence' in this.manifest) && (this.manifest.discontinuitySequence = 0, this.trigger('info', { 'message': 'defaulting discontinuity sequence to zero' }));
								_0x12a1b5.duration > 0 && (_0x42a344.duration = _0x12a1b5.duration);
								if (_0x12a1b5.duration === 0) {
									_0x42a344.duration = 0.01;
									this.trigger('info', { 'message': 'updating zero segment duration to a small value' });
								}
								this.manifest.segments = _0x3365a1;
							},
							'key': function _0xe638b9() {
								if (!_0x12a1b5.attributes) {
									this.trigger('warn', { 'message': 'ignoring key declaration without attribute list' });
									return;
								}
								if (_0x12a1b5.attributes.METHOD === 'NONE') {
									_0x4887cc = null;
									return;
								}
								if (!_0x12a1b5.attributes.URI) {
									this.trigger('warn', { 'message': 'ignoring key declaration without URI' });
									return;
								}
								!_0x12a1b5.attributes.METHOD && this.trigger('warn', { 'message': 'defaulting key method to AES-128' });
								_0x4887cc = {
									'method': _0x12a1b5.attributes.METHOD || 'AES-128',
									'uri': _0x12a1b5.attributes.URI
								};
								typeof _0x12a1b5.attributes.IV !== 'undefined' && (_0x4887cc.iv = _0x12a1b5.attributes.IV);
							},
							'media-sequence': function _0x3f1037() {
								if (!isFinite(_0x12a1b5.number)) {
									this.trigger('warn', { 'message': 'ignoring invalid media sequence: ' + _0x12a1b5.number });
									return;
								}
								this.manifest.mediaSequence = _0x12a1b5.number;
							},
							'discontinuity-sequence': function _0x1c99d7() {
								if (!isFinite(_0x12a1b5.number)) {
									this.trigger('warn', { 'message': 'ignoring invalid discontinuity sequence: ' + _0x12a1b5.number });
									return;
								}
								this.manifest.discontinuitySequence = _0x12a1b5.number;
								_0x5b8430 = _0x12a1b5.number;
							},
							'playlist-type': function _0x4755b0() {
								if (!/VOD|EVENT/.test(_0x12a1b5.playlistType)) {
									this.trigger('warn', { 'message': 'ignoring unknown playlist type: ' + _0x12a1b5.playlist });
									return;
								}
								this.manifest.playlistType = _0x12a1b5.playlistType;
							},
							'map': function _0x48690d() {
								_0x5e8ae8 = {};
								_0x12a1b5.uri && (_0x5e8ae8.uri = _0x12a1b5.uri);
								_0x12a1b5.byterange && (_0x5e8ae8.byterange = _0x12a1b5.byterange);
							},
							'stream-inf': function _0x5ea141() {
								this.manifest.playlists = _0x3365a1;
								this.manifest.mediaGroups = this.manifest.mediaGroups || _0x1b4e73;
								if (!_0x12a1b5.attributes) {
									this.trigger('warn', { 'message': 'ignoring empty stream-inf attributes' });
									return;
								}
								!_0x42a344.attributes && (_0x42a344.attributes = {});
								_0xbbf3c7(_0x42a344.attributes, _0x12a1b5.attributes);
							},
							'media': function _0x190dd8() {
								this.manifest.mediaGroups = this.manifest.mediaGroups || _0x1b4e73;
								if (!(_0x12a1b5.attributes && _0x12a1b5.attributes.TYPE && _0x12a1b5.attributes['GROUP-ID'] && _0x12a1b5.attributes.NAME)) {
									this.trigger('warn', { 'message': 'ignoring incomplete or missing media group' });
									return;
								}
								var _0x5b2472 = this.manifest.mediaGroups[_0x12a1b5.attributes.TYPE];
								_0x5b2472[_0x12a1b5.attributes['GROUP-ID']] = _0x5b2472[_0x12a1b5.attributes['GROUP-ID']] || {};
								_0x4d2479 = _0x5b2472[_0x12a1b5.attributes['GROUP-ID']];
								_0x22083d = { 'default': /yes/i.test(_0x12a1b5.attributes.DEFAULT) };
								_0x22083d.default ? _0x22083d.autoselect = true : _0x22083d.autoselect = /yes/i.test(_0x12a1b5.attributes.AUTOSELECT);
								_0x12a1b5.attributes.LANGUAGE && (_0x22083d.language = _0x12a1b5.attributes.LANGUAGE);
								_0x12a1b5.attributes.URI && (_0x22083d.uri = _0x12a1b5.attributes.URI);
								_0x12a1b5.attributes['INSTREAM-ID'] && (_0x22083d.instreamId = _0x12a1b5.attributes['INSTREAM-ID']);
								_0x12a1b5.attributes.CHARACTERISTICS && (_0x22083d.characteristics = _0x12a1b5.attributes.CHARACTERISTICS);
								_0x12a1b5.attributes.FORCED && (_0x22083d.forced = /yes/i.test(_0x12a1b5.attributes.FORCED));
								_0x4d2479[_0x12a1b5.attributes.NAME] = _0x22083d;
							},
							'discontinuity': function _0xcf0cd1() {
								_0x5b8430 += 1;
								this.manifest.discontinuityStarts.push(_0x3365a1.length);
							},
							'program-date-time': function _0x503972() {
								if (typeof this.manifest.dateTimeString === 'undefined') {
									this.manifest.dateTimeString = _0x12a1b5.dateTimeString;
									this.manifest.dateTimeObject = _0x12a1b5.dateTimeObject;
								}
							},
							'targetduration': function _0x5e7975() {
								if (!isFinite(_0x12a1b5.duration) || _0x12a1b5.duration < 0) {
									this.trigger('warn', { 'message': 'ignoring invalid target duration: ' + _0x12a1b5.duration });
									return;
								}
								this.manifest.targetDuration = _0x12a1b5.duration;
							},
							'totalduration': function _0x10d9b4() {
								if (!isFinite(_0x12a1b5.duration) || _0x12a1b5.duration < 0) {
									this.trigger('warn', { 'message': 'ignoring invalid total duration: ' + _0x12a1b5.duration });
									return;
								}
								this.manifest.totalDuration = _0x12a1b5.duration;
							},
							'start': function _0x46e488() {
								if (!_0x12a1b5.attributes || isNaN(_0x12a1b5.attributes['TIME-OFFSET'])) {
									this.trigger('warn', { 'message': 'ignoring start declaration without appropriate attribute list' });
									return;
								}
								this.manifest.start = {
									'timeOffset': _0x12a1b5.attributes['TIME-OFFSET'],
									'precise': _0x12a1b5.attributes.PRECISE
								};
							},
							'cue-out': function _0x275d03() {
							},
							'cue-out-cont': function _0x19f23c() {
							},
							'cue-in': function _0x2f3220() {
							}
						}[_0x12a1b5.tagType] || _0x587b69).call(_0x384dac);
					},
					'uri': function _0x3cdeba() {
						_0x3365a1.push(_0x42a344);
						this.manifest.targetDuration && !('duration' in _0x42a344) && (this.trigger('warn', { 'message': 'defaulting segment duration to the target duration' }), _0x42a344.duration = this.manifest.targetDuration);
						_0x4887cc && (_0x42a344.key = _0x4887cc);
						_0x5e8ae8 && (_0x42a344.map = _0x5e8ae8);
						_0x42a344 = {};
					},
					'comment': function _0x198aa0() {
					},
					'custom': function _0x2e4609() {
						_0x12a1b5.segment ? (_0x42a344.custom = _0x42a344.custom || {}, _0x42a344.custom[_0x12a1b5.customType] = _0x12a1b5.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[_0x12a1b5.customType] = _0x12a1b5.data);
					}
				}[_0x12a1b5.type].call(_0x384dac));
			}), _0x5278ca;
		}
		return _0xc35ee7.prototype.push = function _0x614964(_0x1cd6f5) {
			this.lineStream.push(_0x1cd6f5);
		}, _0xc35ee7.prototype.end = function _0x734a54() {
			this.lineStream.push('\n');
		}, _0xc35ee7.prototype.addParser = function _0x262374(_0x41233e) {
			this.parseStream.addParser(_0x41233e);
		}, _0xc35ee7;
	}(_0x2f48b8), _0x521347 = function _0x455eb4(_0x1ccc28) {
		var _0x5244de, _0x44d934 = _0x1ccc28.attributes, _0xd1bfec = _0x1ccc28.segments, _0x1f80ea = {
			'attributes': (_0x5244de = {
				'NAME': _0x44d934.id,
				'BANDWIDTH': _0x44d934.bandwidth,
				'CODECS': _0x44d934.codecs
			}, _0x5244de['PROGRAM-ID'] = 1, _0x5244de),
			'uri': '',
			'endList': (_0x44d934.type || 'static') === 'static',
			'timeline': _0x44d934.periodIndex,
			'resolvedUri': '',
			'targetDuration': _0x44d934.duration,
			'segments': _0xd1bfec,
			'mediaSequence': _0xd1bfec.length ? _0xd1bfec[0].number : 1
		};
		return _0x44d934.contentProtection && (_0x1f80ea.contentProtection = _0x44d934.contentProtection), _0x1f80ea;
	}, _0xeae0dd = function _0x1a4571(_0x2ee23d) {
		var _0x1b7d85, _0x54dfe1 = _0x2ee23d.attributes, _0x293e6b = _0x2ee23d.segments;
		return typeof _0x293e6b === 'undefined' && (_0x293e6b = [{
			'uri': _0x54dfe1.baseUrl,
			'timeline': _0x54dfe1.periodIndex,
			'resolvedUri': _0x54dfe1.baseUrl || '',
			'duration': _0x54dfe1.sourceDuration,
			'number': 0
		}], _0x54dfe1.duration = _0x54dfe1.sourceDuration), {
			'attributes': (_0x1b7d85 = {
				'NAME': _0x54dfe1.id,
				'BANDWIDTH': _0x54dfe1.bandwidth
			}, _0x1b7d85['PROGRAM-ID'] = 1, _0x1b7d85),
			'uri': '',
			'endList': (_0x54dfe1.type || 'static') === 'static',
			'timeline': _0x54dfe1.periodIndex,
			'resolvedUri': _0x54dfe1.baseUrl || '',
			'targetDuration': _0x54dfe1.duration,
			'segments': _0x293e6b,
			'mediaSequence': _0x293e6b.length ? _0x293e6b[0].number : 1
		};
	}, _0x19ceb7 = function _0x4bad19(_0x59ec36) {
		return _0x59ec36.reduce(function (_0x5934c9, _0x545e58) {
			var _0x210db2 = _0x545e58.attributes.role && _0x545e58.attributes.role.value || 'main', _0x963dc4 = _0x545e58.attributes.lang || '', _0x5bf193 = 'main';
			_0x963dc4 && (_0x5bf193 = _0x545e58.attributes.lang + ' (' + _0x210db2 + ')');
			if (_0x5934c9[_0x5bf193] && _0x5934c9[_0x5bf193].playlists[0].attributes.BANDWIDTH > _0x545e58.attributes.bandwidth) {
				return _0x5934c9;
			}
			return _0x5934c9[_0x5bf193] = {
				'language': _0x963dc4,
				'autoselect': true,
				'default': _0x210db2 === 'main',
				'playlists': [_0x521347(_0x545e58)],
				'uri': ''
			}, _0x5934c9;
		}, {});
	}, _0x10dfa2 = function _0xc260f0(_0x17f199) {
		return _0x17f199.reduce(function (_0x3ae39a, _0x5d88d6) {
			var _0x362043 = _0x5d88d6.attributes.lang || 'text';
			if (_0x3ae39a[_0x362043]) {
				return _0x3ae39a;
			}
			return _0x3ae39a[_0x362043] = {
				'language': _0x362043,
				'default': false,
				'autoselect': false,
				'playlists': [_0xeae0dd(_0x5d88d6)],
				'uri': ''
			}, _0x3ae39a;
		}, {});
	}, _0x3be0e9 = function _0x17ac73(_0x2a3391) {
		var _0x5e742a, _0x4fec1f = _0x2a3391.attributes, _0xd1a8de = _0x2a3391.segments, _0x2c200e = {
			'attributes': (_0x5e742a = {
				'NAME': _0x4fec1f.id,
				'AUDIO': 'audio',
				'SUBTITLES': 'subs',
				'RESOLUTION': {
					'width': _0x4fec1f.width,
					'height': _0x4fec1f.height
				},
				'CODECS': _0x4fec1f.codecs,
				'BANDWIDTH': _0x4fec1f.bandwidth
			}, _0x5e742a['PROGRAM-ID'] = 1, _0x5e742a),
			'uri': '',
			'endList': (_0x4fec1f.type || 'static') === 'static',
			'timeline': _0x4fec1f.periodIndex,
			'resolvedUri': '',
			'targetDuration': _0x4fec1f.duration,
			'segments': _0xd1a8de,
			'mediaSequence': _0xd1a8de.length ? _0xd1a8de[0].number : 1
		};
		return _0x4fec1f.contentProtection && (_0x2c200e.contentProtection = _0x4fec1f.contentProtection), _0x2c200e;
	}, _0x140f42 = function _0x990803(_0x209173) {
		var _0x29610a;
		if (!_0x209173.length) {
			return {};
		}
		var _0x2243f3 = _0x209173[0].attributes, _0x3fc584 = _0x2243f3.sourceDuration, _0x22f6a0 = _0x2243f3.minimumUpdatePeriod, _0x3acc1c = _0x22f6a0 === undefined ? 0 : _0x22f6a0, _0x50eb9f = function _0x357b51(_0x5e1a44) {
			var _0x29936a = _0x5e1a44.attributes;
			return _0x29936a.mimeType === 'video/mp4' || _0x29936a.contentType === 'video';
		}, _0x2c2e2e = function _0x519d31(_0x534e30) {
			var _0x472a5e = _0x534e30.attributes;
			return _0x472a5e.mimeType === 'audio/mp4' || _0x472a5e.contentType === 'audio';
		}, _0x4ff6f3 = function _0x1026ca(_0x264f98) {
			var _0x3c9b81 = _0x264f98.attributes;
			return _0x3c9b81.mimeType === 'text/vtt' || _0x3c9b81.contentType === 'text';
		}, _0x12581c = _0x209173.filter(_0x50eb9f).map(_0x3be0e9), _0x46e0da = _0x209173.filter(_0x2c2e2e), _0x111ffe = _0x209173.filter(_0x4ff6f3), _0x298a54 = {
			'allowCache': true,
			'discontinuityStarts': [],
			'segments': [],
			'endList': true,
			'mediaGroups': (_0x29610a = {
				'AUDIO': {},
				'VIDEO': {}
			}, _0x29610a['CLOSED-CAPTIONS'] = {}, _0x29610a.SUBTITLES = {}, _0x29610a),
			'uri': '',
			'duration': _0x3fc584,
			'playlists': _0x12581c,
			'minimumUpdatePeriod': _0x3acc1c * 1000
		};
		return _0x46e0da.length && (_0x298a54.mediaGroups.AUDIO.audio = _0x19ceb7(_0x46e0da)), _0x111ffe.length && (_0x298a54.mediaGroups.SUBTITLES.subs = _0x10dfa2(_0x111ffe)), _0x298a54;
	}, _0x46d341 = typeof Symbol === 'function' && _0x65b994(Symbol.iterator) === 'symbol' ? function (_0x99267) {
		return typeof _0x99267 === 'undefined' ? 'undefined' : _0x65b994(_0x99267);
	} : function (_0x4476a5) {
		return _0x4476a5 && typeof Symbol === 'function' && _0x4476a5.constructor === Symbol && _0x4476a5 !== Symbol.prototype ? 'symbol' : typeof _0x4476a5 === 'undefined' ? 'undefined' : _0x65b994(_0x4476a5);
	}, _0x5bb0aa = function _0x10b03c(_0x53c94d) {
		return !!_0x53c94d && (typeof _0x53c94d === 'undefined' ? 'undefined' : _0x46d341(_0x53c94d)) === 'object';
	}, _0x1ca609 = function _0x5935a7() {
		for (var _0x2815e6 = arguments.length, _0x5a4a5f = Array(_0x2815e6), _0xa0fa32 = 0; _0xa0fa32 < _0x2815e6; _0xa0fa32++) {
			_0x5a4a5f[_0xa0fa32] = arguments[_0xa0fa32];
		}
		return _0x5a4a5f.reduce(function (_0x30be18, _0x20730c) {
			return Object.keys(_0x20730c).forEach(function (_0x4cb488) {
				if (Array.isArray(_0x30be18[_0x4cb488]) && Array.isArray(_0x20730c[_0x4cb488])) {
					_0x30be18[_0x4cb488] = _0x30be18[_0x4cb488].concat(_0x20730c[_0x4cb488]);
				} else {
					_0x5bb0aa(_0x30be18[_0x4cb488]) && _0x5bb0aa(_0x20730c[_0x4cb488]) ? _0x30be18[_0x4cb488] = _0x5935a7(_0x30be18[_0x4cb488], _0x20730c[_0x4cb488]) : _0x30be18[_0x4cb488] = _0x20730c[_0x4cb488];
				}
			}), _0x30be18;
		}, {});
	}, _0x256325 = function _0x52edbc(_0x5b199f, _0x4833ff) {
		if (/^[a-z]+:/i.test(_0x4833ff)) {
			return _0x4833ff;
		}
		return !/\/\//i.test(_0x5b199f) && (_0x5b199f = _0xd42db6.buildAbsoluteURL(_0x562c10.location.href, _0x5b199f)), _0xd42db6.buildAbsoluteURL(_0x5b199f, _0x4833ff);
	}, _0x230c08 = function _0x1e63b5(_0x53055f) {
		var _0x87ce6d = _0x53055f.baseUrl, _0x370ea4 = _0x87ce6d === undefined ? '' : _0x87ce6d, _0x13afe8 = _0x53055f.source, _0x2f310a = _0x13afe8 === undefined ? '' : _0x13afe8, _0x3790b7 = _0x53055f.range, _0x5f57a6 = _0x3790b7 === undefined ? '' : _0x3790b7, _0x5372cf = {
			'uri': _0x2f310a,
			'resolvedUri': _0x256325(_0x370ea4 || '', _0x2f310a)
		};
		if (_0x5f57a6) {
			var _0x3ee159 = _0x5f57a6.split('-'), _0x2f4a0d = parseInt(_0x3ee159[0], 10), _0x42427c = parseInt(_0x3ee159[1], 10);
			_0x5372cf.byterange = {
				'length': _0x42427c - _0x2f4a0d,
				'offset': _0x2f4a0d
			};
		}
		return _0x5372cf;
	}, _0x2fbdaf = function _0x2e1536(_0x1036e6, _0x2c8cc9, _0x232cfb) {
		var _0x4bed7f = _0x1036e6.NOW, _0x5109e8 = _0x1036e6.clientOffset, _0x52fa37 = _0x1036e6.availabilityStartTime, _0x3fea29 = _0x1036e6.timescale, _0x550301 = _0x3fea29 === undefined ? 1 : _0x3fea29, _0x2869ec = _0x1036e6.start, _0x4d2905 = _0x2869ec === undefined ? 0 : _0x2869ec, _0x3118fc = _0x1036e6.minimumUpdatePeriod, _0x2d21f0 = _0x3118fc === undefined ? 0 : _0x3118fc, _0x1ca768 = (_0x4bed7f + _0x5109e8) / 1000, _0x5f1d1e = _0x52fa37 + _0x4d2905, _0x36e0c8 = _0x1ca768 + _0x2d21f0, _0x3e4313 = _0x36e0c8 - _0x5f1d1e;
		return Math.ceil((_0x3e4313 * _0x550301 - _0x2c8cc9) / _0x232cfb);
	}, _0x50bed0 = function _0x506949(_0x1efd98, _0x54a9f8) {
		var _0x5de762 = _0x1efd98.type, _0x1a8395 = _0x5de762 === undefined ? 'static' : _0x5de762, _0x29bfa3 = _0x1efd98.minimumUpdatePeriod, _0x438bc6 = _0x29bfa3 === undefined ? 0 : _0x29bfa3, _0xc1eb9 = _0x1efd98.media, _0x361fd2 = _0xc1eb9 === undefined ? '' : _0xc1eb9, _0x50433f = _0x1efd98.sourceDuration, _0x3f5f30 = _0x1efd98.timescale, _0x22dd5b = _0x3f5f30 === undefined ? 1 : _0x3f5f30, _0x5f25c5 = _0x1efd98.startNumber, _0x60ba81 = _0x5f25c5 === undefined ? 1 : _0x5f25c5, _0x1822a6 = _0x1efd98.periodIndex, _0x2c286f = [], _0xe645e1 = -1;
		for (var _0x5f08c8 = 0; _0x5f08c8 < _0x54a9f8.length; _0x5f08c8++) {
			var _0x58b5fa = _0x54a9f8[_0x5f08c8], _0x3cbe1a = _0x58b5fa.d, _0x134f29 = _0x58b5fa.r || 0, _0x7a066b = _0x58b5fa.t || 0;
			_0xe645e1 < 0 && (_0xe645e1 = _0x7a066b);
			_0x7a066b && _0x7a066b > _0xe645e1 && (_0xe645e1 = _0x7a066b);
			var _0x50b65f = void 0;
			if (_0x134f29 < 0) {
				var _0x410f23 = _0x5f08c8 + 1;
				_0x410f23 === _0x54a9f8.length ? _0x1a8395 === 'dynamic' && _0x438bc6 > 0 && _0x361fd2.indexOf('$Number$') > 0 ? _0x50b65f = _0x2fbdaf(_0x1efd98, _0xe645e1, _0x3cbe1a) : _0x50b65f = (_0x50433f * _0x22dd5b - _0xe645e1) / _0x3cbe1a : _0x50b65f = (_0x54a9f8[_0x410f23].t - _0xe645e1) / _0x3cbe1a;
			} else {
				_0x50b65f = _0x134f29 + 1;
			}
			var _0x177801 = _0x60ba81 + _0x2c286f.length + _0x50b65f, _0x539e3d = _0x60ba81 + _0x2c286f.length;
			while (_0x539e3d < _0x177801) {
				_0x2c286f.push({
					'number': _0x539e3d,
					'duration': _0x3cbe1a / _0x22dd5b,
					'time': _0xe645e1,
					'timeline': _0x1822a6
				});
				_0xe645e1 += _0x3cbe1a;
				_0x539e3d++;
			}
		}
		return _0x2c286f;
	}, _0x9d5a21 = function _0x53257a(_0x28bb62, _0x570852) {
		var _0x307583 = [];
		for (var _0x2d2e9 = _0x28bb62; _0x2d2e9 < _0x570852; _0x2d2e9++) {
			_0x307583.push(_0x2d2e9);
		}
		return _0x307583;
	}, _0x49abc8 = function _0x4cedb2(_0x5789f2) {
		return _0x5789f2.reduce(function (_0x16ccba, _0x1d0f45) {
			return _0x16ccba.concat(_0x1d0f45);
		}, []);
	}, _0x558bc9 = function _0x23a5fa(_0x46f9ce) {
		if (!_0x46f9ce.length) {
			return [];
		}
		var _0x4cf234 = [];
		for (var _0x180db6 = 0; _0x180db6 < _0x46f9ce.length; _0x180db6++) {
			_0x4cf234.push(_0x46f9ce[_0x180db6]);
		}
		return _0x4cf234;
	}, _0x4be474 = {
		'static': function _0x58b1a2(_0x5567e0) {
			var _0x1467cc = _0x5567e0.duration, _0x5e9c5f = _0x5567e0.timescale, _0x7f5af4 = _0x5e9c5f === undefined ? 1 : _0x5e9c5f, _0x2428f1 = _0x5567e0.sourceDuration;
			return {
				'start': 0,
				'end': Math.ceil(_0x2428f1 / (_0x1467cc / _0x7f5af4))
			};
		},
		'dynamic': function _0x4e90fb(_0x29e894) {
			var _0x11139e = _0x29e894.NOW, _0x292f65 = _0x29e894.clientOffset, _0x7b447a = _0x29e894.availabilityStartTime, _0x3111c9 = _0x29e894.timescale, _0x57418c = _0x3111c9 === undefined ? 1 : _0x3111c9, _0xf0bd35 = _0x29e894.duration, _0x16695c = _0x29e894.start, _0x50d36b = _0x16695c === undefined ? 0 : _0x16695c, _0xd2bb1b = _0x29e894.minimumUpdatePeriod, _0x566899 = _0xd2bb1b === undefined ? 0 : _0xd2bb1b, _0xee09bd = _0x29e894.timeShiftBufferDepth, _0x43a3f2 = _0xee09bd === undefined ? Infinity : _0xee09bd, _0x50fd94 = (_0x11139e + _0x292f65) / 1000, _0x20c077 = _0x7b447a + _0x50d36b, _0x33dd1c = _0x50fd94 + _0x566899, _0x40d14d = _0x33dd1c - _0x20c077, _0x28c036 = Math.ceil(_0x40d14d * _0x57418c / _0xf0bd35), _0xf89f11 = Math.floor((_0x50fd94 - _0x20c077 - _0x43a3f2) * _0x57418c / _0xf0bd35), _0x5422a3 = Math.floor((_0x50fd94 - _0x20c077) * _0x57418c / _0xf0bd35);
			return {
				'start': Math.max(0, _0xf89f11),
				'end': Math.min(_0x28c036, _0x5422a3)
			};
		}
	}, _0x565c24 = function _0x5c8af4(_0x5dc847) {
		return function (_0x1c9fd1, _0x22c10f) {
			var _0x24a761 = _0x5dc847.duration, _0x1dd868 = _0x5dc847.timescale, _0x58cfe7 = _0x1dd868 === undefined ? 1 : _0x1dd868, _0x42d6bd = _0x5dc847.periodIndex, _0x52dd79 = _0x5dc847.startNumber, _0x535588 = _0x52dd79 === undefined ? 1 : _0x52dd79;
			return {
				'number': _0x535588 + _0x1c9fd1,
				'duration': _0x24a761 / _0x58cfe7,
				'timeline': _0x42d6bd,
				'time': _0x22c10f * _0x24a761
			};
		};
	}, _0x3b3f33 = function _0x431040(_0x50b240) {
		var _0x30b437 = _0x50b240.type, _0x39e73c = _0x30b437 === undefined ? 'static' : _0x30b437, _0x4a29cc = _0x50b240.duration, _0x5c7740 = _0x50b240.timescale, _0x57ca62 = _0x5c7740 === undefined ? 1 : _0x5c7740, _0x51020e = _0x50b240.sourceDuration, _0x46cf8f = _0x4be474[_0x39e73c](_0x50b240), _0x49964d = _0x46cf8f.start, _0x51acee = _0x46cf8f.end, _0x3bbb7e = _0x9d5a21(_0x49964d, _0x51acee).map(_0x565c24(_0x50b240));
		if (_0x39e73c === 'static') {
			var _0x493e06 = _0x3bbb7e.length - 1;
			_0x3bbb7e[_0x493e06].duration = _0x51020e - _0x4a29cc / _0x57ca62 * _0x493e06;
		}
		return _0x3bbb7e;
	}, _0xa881aa = function _0x46515d(_0x241ecd) {
		return function (_0x5c8687, _0x52e0d8, _0x4c146f, _0x5c21b6) {
			if (_0x5c8687 === '$$') {
				return '$';
			}
			if (typeof _0x241ecd[_0x52e0d8] === 'undefined') {
				return _0x5c8687;
			}
			var _0x4818eb = '' + _0x241ecd[_0x52e0d8];
			if (_0x52e0d8 === 'RepresentationID') {
				return _0x4818eb;
			}
			!_0x4c146f ? _0x5c21b6 = 1 : _0x5c21b6 = parseInt(_0x5c21b6, 10);
			if (_0x4818eb.length >= _0x5c21b6) {
				return _0x4818eb;
			}
			return '' + new Array(_0x5c21b6 - _0x4818eb.length + 1).join('0') + _0x4818eb;
		};
	}, _0x1d51ba = function _0x368ef7(_0x50cbcd, _0x15d238) {
		return _0x50cbcd.replace(/\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g, _0xa881aa(_0x15d238));
	}, _0x165202 = function _0x37a2eb(_0x361de5, _0x270a2d) {
		if (!_0x361de5.duration && !_0x270a2d) {
			return [{
				'number': _0x361de5.startNumber || 1,
				'duration': _0x361de5.sourceDuration,
				'time': 0,
				'timeline': _0x361de5.periodIndex
			}];
		}
		if (_0x361de5.duration) {
			return _0x3b3f33(_0x361de5);
		}
		return _0x50bed0(_0x361de5, _0x270a2d);
	}, _0x53da15 = function _0x30ba14(_0x178d01, _0xf8d8bf) {
		var _0x3d289a = {
			'RepresentationID': _0x178d01.id,
			'Bandwidth': _0x178d01.bandwidth || 0
		}, _0x48d8b8 = _0x178d01.initialization, _0x537489 = _0x48d8b8 === undefined ? {
			'sourceURL': '',
			'range': ''
		} : _0x48d8b8, _0x3e28fa = _0x230c08({
			'baseUrl': _0x178d01.baseUrl,
			'source': _0x1d51ba(_0x537489.sourceURL, _0x3d289a),
			'range': _0x537489.range
		}), _0x2eec40 = _0x165202(_0x178d01, _0xf8d8bf);
		return _0x2eec40.map(function (_0x2905b5) {
			_0x3d289a.Number = _0x2905b5.number;
			_0x3d289a.Time = _0x2905b5.time;
			var _0x2a9e9f = _0x1d51ba(_0x178d01.media || '', _0x3d289a);
			return {
				'uri': _0x2a9e9f,
				'timeline': _0x2905b5.timeline,
				'duration': _0x2905b5.duration,
				'resolvedUri': _0x256325(_0x178d01.baseUrl || '', _0x2a9e9f),
				'map': _0x3e28fa,
				'number': _0x2905b5.number
			};
		});
	}, _0x17b639 = {
		'INVALID_NUMBER_OF_PERIOD': 'INVALID_NUMBER_OF_PERIOD',
		'DASH_EMPTY_MANIFEST': 'DASH_EMPTY_MANIFEST',
		'DASH_INVALID_XML': 'DASH_INVALID_XML',
		'NO_BASE_URL': 'NO_BASE_URL',
		'MISSING_SEGMENT_INFORMATION': 'MISSING_SEGMENT_INFORMATION',
		'SEGMENT_TIME_UNSPECIFIED': 'SEGMENT_TIME_UNSPECIFIED',
		'UNSUPPORTED_UTC_TIMING_SCHEME': 'UNSUPPORTED_UTC_TIMING_SCHEME'
	}, _0x14c1da = function _0x2be0bb(_0x138a9d, _0x183c38) {
		var _0xf764e = _0x138a9d.baseUrl, _0x225732 = _0x138a9d.initialization, _0x4fafc9 = _0x225732 === undefined ? {} : _0x225732, _0x4bb4db = _0x230c08({
			'baseUrl': _0xf764e,
			'source': _0x4fafc9.sourceURL,
			'range': _0x4fafc9.range
		}), _0x333142 = _0x230c08({
			'baseUrl': _0xf764e,
			'source': _0x183c38.media,
			'range': _0x183c38.mediaRange
		});
		return _0x333142.map = _0x4bb4db, _0x333142;
	}, _0x590986 = function _0x2a1dac(_0x5c6945, _0xe6e6ca) {
		var _0x183c41 = _0x5c6945.duration, _0xbad0ba = _0x5c6945.segmentUrls, _0x38ce29 = _0xbad0ba === undefined ? [] : _0xbad0ba;
		if (!_0x183c41 && !_0xe6e6ca || _0x183c41 && _0xe6e6ca) {
			throw new Error(_0x17b639.SEGMENT_TIME_UNSPECIFIED);
		}
		var _0x523b71 = _0x38ce29.map(function (_0x234286) {
			return _0x14c1da(_0x5c6945, _0x234286);
		}), _0x4898ce = void 0;
		_0x183c41 && (_0x4898ce = _0x3b3f33(_0x5c6945));
		_0xe6e6ca && (_0x4898ce = _0x50bed0(_0x5c6945, _0xe6e6ca));
		var _0x19cda1 = _0x4898ce.map(function (_0x402a78, _0x443d9f) {
			if (_0x523b71[_0x443d9f]) {
				var _0x3e05ab = _0x523b71[_0x443d9f];
				return _0x3e05ab.timeline = _0x402a78.timeline, _0x3e05ab.duration = _0x402a78.duration, _0x3e05ab.number = _0x402a78.number, _0x3e05ab;
			}
		}).filter(function (_0x580f4b) {
			return _0x580f4b;
		});
		return _0x19cda1;
	}, _0x16787a = function _0x6a6633(_0x46652b) {
		var _0x58e82a = _0x46652b.baseUrl, _0x35dc3b = _0x46652b.initialization, _0x3d3380 = _0x35dc3b === undefined ? {} : _0x35dc3b, _0x4b963d = _0x46652b.sourceDuration, _0x28ab8c = _0x46652b.timescale, _0x23e2be = _0x28ab8c === undefined ? 1 : _0x28ab8c, _0x5ee23a = _0x46652b.indexRange, _0x31b3fd = _0x5ee23a === undefined ? '' : _0x5ee23a, _0x2f68ad = _0x46652b.duration;
		if (!_0x58e82a) {
			throw new Error(_0x17b639.NO_BASE_URL);
		}
		var _0x56a570 = _0x230c08({
			'baseUrl': _0x58e82a,
			'source': _0x3d3380.sourceURL,
			'range': _0x3d3380.range
		}), _0x1eac2c = _0x230c08({
			'baseUrl': _0x58e82a,
			'source': _0x58e82a,
			'range': _0x31b3fd
		});
		_0x1eac2c.map = _0x56a570;
		if (_0x2f68ad) {
			var _0x3cd7a6 = _0x3b3f33(_0x46652b);
			_0x3cd7a6.length && (_0x1eac2c.duration = _0x3cd7a6[0].duration, _0x1eac2c.timeline = _0x3cd7a6[0].timeline);
		} else {
			_0x4b963d && (_0x1eac2c.duration = _0x4b963d / _0x23e2be, _0x1eac2c.timeline = 0);
		}
		return _0x1eac2c.number = 0, [_0x1eac2c];
	}, _0xbb058b = function _0x4dbc6c(_0x6a0b21) {
		var _0x4f02aa = _0x6a0b21.attributes, _0x4b4691 = _0x6a0b21.segmentInfo, _0x5e1da5 = void 0, _0x3ebe61 = void 0;
		if (_0x4b4691.template) {
			_0x3ebe61 = _0x53da15;
			_0x5e1da5 = _0x1ca609(_0x4f02aa, _0x4b4691.template);
		} else {
			if (_0x4b4691.base) {
				_0x3ebe61 = _0x16787a;
				_0x5e1da5 = _0x1ca609(_0x4f02aa, _0x4b4691.base);
			} else {
				_0x4b4691.list && (_0x3ebe61 = _0x590986, _0x5e1da5 = _0x1ca609(_0x4f02aa, _0x4b4691.list));
			}
		}
		if (!_0x3ebe61) {
			return { 'attributes': _0x4f02aa };
		}
		var _0x423023 = _0x3ebe61(_0x5e1da5, _0x4b4691.timeline);
		if (_0x5e1da5.duration) {
			var _0x2c4eb8 = _0x5e1da5, _0x4d1975 = _0x2c4eb8.duration, _0x119da0 = _0x2c4eb8.timescale, _0x44b8fe = _0x119da0 === undefined ? 1 : _0x119da0;
			_0x5e1da5.duration = _0x4d1975 / _0x44b8fe;
		} else {
			_0x423023.length ? _0x5e1da5.duration = _0x423023.reduce(function (_0x1d04a6, _0x54baba) {
				return Math.max(_0x1d04a6, Math.ceil(_0x54baba.duration));
			}, 0) : _0x5e1da5.duration = 0;
		}
		return {
			'attributes': _0x5e1da5,
			'segments': _0x423023
		};
	}, _0x3dcfe8 = function _0x4ab29c(_0x2744dd) {
		return _0x2744dd.map(_0xbb058b);
	}, _0x205db0 = function _0xd70bac(_0x1374e4, _0x4eeaa7) {
		return _0x558bc9(_0x1374e4.childNodes).filter(function (_0x5222a5) {
			var _0x37fbbd = _0x5222a5.tagName;
			return _0x37fbbd === _0x4eeaa7;
		});
	}, _0x2b2200 = function _0x585ac4(_0x1a6930) {
		return _0x1a6930.textContent.trim();
	}, _0x2b845d = function _0xc232e2(_0x4e86c7) {
		var _0x458746 = 31536000, _0xe685a1 = 2592000, _0xaedb2c = 86400, _0xf38fb0 = 3600, _0x54c896 = 60, _0x5c4d10 = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/, _0x1f4bd2 = _0x5c4d10.exec(_0x4e86c7);
		if (!_0x1f4bd2) {
			return 0;
		}
		var _0x595d23 = _0x1f4bd2.slice(1), _0x1df86a = _0x595d23[0], _0x1d6700 = _0x595d23[1], _0x2db5d2 = _0x595d23[2], _0x54ffd3 = _0x595d23[3], _0x4f5112 = _0x595d23[4], _0x32fcce = _0x595d23[5];
		return parseFloat(_0x1df86a || 0) * _0x458746 + parseFloat(_0x1d6700 || 0) * _0xe685a1 + parseFloat(_0x2db5d2 || 0) * _0xaedb2c + parseFloat(_0x54ffd3 || 0) * _0xf38fb0 + parseFloat(_0x4f5112 || 0) * _0x54c896 + parseFloat(_0x32fcce || 0);
	}, _0x54772c = function _0xfa7c90(_0x2eaa80) {
		var _0x10436e = /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/;
		return _0x10436e.test(_0x2eaa80) && (_0x2eaa80 += 'Z'), Date.parse(_0x2eaa80);
	}, _0x4251f2 = {
		'mediaPresentationDuration': function _0x3ae620(_0x2ee64e) {
			return _0x2b845d(_0x2ee64e);
		},
		'availabilityStartTime': function _0x53b58a(_0xa695bc) {
			return _0x54772c(_0xa695bc) / 1000;
		},
		'minimumUpdatePeriod': function _0xafa0a6(_0x428300) {
			return _0x2b845d(_0x428300);
		},
		'timeShiftBufferDepth': function _0xf1b4c4(_0x1a5b7f) {
			return _0x2b845d(_0x1a5b7f);
		},
		'start': function _0x404eae(_0xeff307) {
			return _0x2b845d(_0xeff307);
		},
		'width': function _0x56846b(_0x22e4e9) {
			return parseInt(_0x22e4e9, 10);
		},
		'height': function _0x26886b(_0x443d5d) {
			return parseInt(_0x443d5d, 10);
		},
		'bandwidth': function _0x467d71(_0x1cdaba) {
			return parseInt(_0x1cdaba, 10);
		},
		'startNumber': function _0x3fad36(_0x36f524) {
			return parseInt(_0x36f524, 10);
		},
		'timescale': function _0x1dd4ee(_0x31df87) {
			return parseInt(_0x31df87, 10);
		},
		'duration': function _0x397ee2(_0x894906) {
			var _0x5838f7 = parseInt(_0x894906, 10);
			if (isNaN(_0x5838f7)) {
				return _0x2b845d(_0x894906);
			}
			return _0x5838f7;
		},
		'd': function _0x2d7b8a(_0x24e87e) {
			return parseInt(_0x24e87e, 10);
		},
		't': function _0x51e60d(_0x479290) {
			return parseInt(_0x479290, 10);
		},
		'r': function _0x180829(_0x4da7b2) {
			return parseInt(_0x4da7b2, 10);
		},
		'DEFAULT': function _0x52dad3(_0x1298f4) {
			return _0x1298f4;
		}
	}, _0x51f7bd = function _0x1df403(_0x2084cb) {
		if (!(_0x2084cb && _0x2084cb.attributes)) {
			return {};
		}
		return _0x558bc9(_0x2084cb.attributes).reduce(function (_0x3ef0b4, _0x1554d1) {
			var _0x290c76 = _0x4251f2[_0x1554d1.name] || _0x4251f2.DEFAULT;
			return _0x3ef0b4[_0x1554d1.name] = _0x290c76(_0x1554d1.value), _0x3ef0b4;
		}, {});
	};
	function _0x3628ba(_0x43b179) {
		var _0x1cbb68 = _0x562c10.atob(_0x43b179), _0xe6a75c = new Uint8Array(_0x1cbb68.length);
		for (var _0x5dbef4 = 0; _0x5dbef4 < _0x1cbb68.length; _0x5dbef4++) {
			_0xe6a75c[_0x5dbef4] = _0x1cbb68.charCodeAt(_0x5dbef4);
		}
		return _0xe6a75c;
	}
	var _0xc14bc8 = {
		'urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b': 'org.w3.clearkey',
		'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed': 'com.widevine.alpha',
		'urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95': 'com.microsoft.playready',
		'urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb': 'com.adobe.primetime'
	}, _0x31bca2 = function _0x17a7ba(_0x39f115, _0x3d6de6) {
		if (!_0x3d6de6.length) {
			return _0x39f115;
		}
		return _0x49abc8(_0x39f115.map(function (_0x5db8b3) {
			return _0x3d6de6.map(function (_0xf5724d) {
				return _0x256325(_0x5db8b3, _0x2b2200(_0xf5724d));
			});
		}));
	}, _0x2ff4f3 = function _0x245e86(_0x2f10f9) {
		var _0x17bd29 = _0x205db0(_0x2f10f9, 'SegmentTemplate')[0], _0x4e744d = _0x205db0(_0x2f10f9, 'SegmentList')[0], _0x52eb39 = _0x4e744d && _0x205db0(_0x4e744d, 'SegmentURL').map(function (_0xd6f54f) {
			return _0x1ca609({ 'tag': 'SegmentURL' }, _0x51f7bd(_0xd6f54f));
		}), _0x132d23 = _0x205db0(_0x2f10f9, 'SegmentBase')[0], _0x158610 = _0x4e744d || _0x17bd29, _0x16a910 = _0x158610 && _0x205db0(_0x158610, 'SegmentTimeline')[0], _0x406c19 = _0x4e744d || _0x132d23 || _0x17bd29, _0x5cd2cd = _0x406c19 && _0x205db0(_0x406c19, 'Initialization')[0], _0x463a38 = _0x17bd29 && _0x51f7bd(_0x17bd29);
		if (_0x463a38 && _0x5cd2cd) {
			_0x463a38.initialization = _0x5cd2cd && _0x51f7bd(_0x5cd2cd);
		} else {
			_0x463a38 && _0x463a38.initialization && (_0x463a38.initialization = { 'sourceURL': _0x463a38.initialization });
		}
		var _0x11fcae = {
			'template': _0x463a38,
			'timeline': _0x16a910 && _0x205db0(_0x16a910, 'S').map(function (_0xd8e581) {
				return _0x51f7bd(_0xd8e581);
			}),
			'list': _0x4e744d && _0x1ca609(_0x51f7bd(_0x4e744d), {
				'segmentUrls': _0x52eb39,
				'initialization': _0x51f7bd(_0x5cd2cd)
			}),
			'base': _0x132d23 && _0x1ca609(_0x51f7bd(_0x132d23), { 'initialization': _0x51f7bd(_0x5cd2cd) })
		};
		return Object.keys(_0x11fcae).forEach(function (_0x237e46) {
			!_0x11fcae[_0x237e46] && delete _0x11fcae[_0x237e46];
		}), _0x11fcae;
	}, _0x3828df = function _0x442e20(_0x548d64, _0x399f48, _0x5863ce) {
		return function (_0xbbdf03) {
			var _0x2ef432 = _0x205db0(_0xbbdf03, 'BaseURL'), _0x382ebd = _0x31bca2(_0x399f48, _0x2ef432), _0x4cba07 = _0x1ca609(_0x548d64, _0x51f7bd(_0xbbdf03)), _0x59b417 = _0x2ff4f3(_0xbbdf03);
			return _0x382ebd.map(function (_0x58e828) {
				return {
					'segmentInfo': _0x1ca609(_0x5863ce, _0x59b417),
					'attributes': _0x1ca609(_0x4cba07, { 'baseUrl': _0x58e828 })
				};
			});
		};
	}, _0x190d5c = function _0x101bce(_0x4b170c) {
		return _0x4b170c.reduce(function (_0x23d663, _0x18a5b8) {
			var _0xa52aa6 = _0x51f7bd(_0x18a5b8), _0x3f18bd = _0xc14bc8[_0xa52aa6.schemeIdUri];
			if (_0x3f18bd) {
				_0x23d663[_0x3f18bd] = { 'attributes': _0xa52aa6 };
				var _0x3aca3b = _0x205db0(_0x18a5b8, 'cenc:pssh')[0];
				if (_0x3aca3b) {
					var _0x2842ac = _0x2b2200(_0x3aca3b), _0x31d5b8 = _0x2842ac && _0x3628ba(_0x2842ac);
					_0x23d663[_0x3f18bd].pssh = _0x31d5b8;
				}
			}
			return _0x23d663;
		}, {});
	}, _0x299e3c = function _0x20c27a(_0x3f2dcb, _0x1e5ffa, _0x1d5ae1) {
		return function (_0x5d3d7c) {
			var _0x456268 = _0x51f7bd(_0x5d3d7c), _0x917141 = _0x31bca2(_0x1e5ffa, _0x205db0(_0x5d3d7c, 'BaseURL')), _0x23e299 = _0x205db0(_0x5d3d7c, 'Role')[0], _0x1ced4c = { 'role': _0x51f7bd(_0x23e299) }, _0x2461f2 = _0x1ca609(_0x3f2dcb, _0x456268, _0x1ced4c), _0x4548cf = _0x190d5c(_0x205db0(_0x5d3d7c, 'ContentProtection'));
			Object.keys(_0x4548cf).length && (_0x2461f2 = _0x1ca609(_0x2461f2, { 'contentProtection': _0x4548cf }));
			var _0x3f2f25 = _0x2ff4f3(_0x5d3d7c), _0x4e95f4 = _0x205db0(_0x5d3d7c, 'Representation'), _0x42ec21 = _0x1ca609(_0x1d5ae1, _0x3f2f25);
			return _0x49abc8(_0x4e95f4.map(_0x3828df(_0x2461f2, _0x917141, _0x42ec21)));
		};
	}, _0x339137 = function _0x326635(_0x280244, _0x9718c9) {
		return function (_0x300fec, _0x3bfd0d) {
			var _0x1139ed = _0x31bca2(_0x9718c9, _0x205db0(_0x300fec, 'BaseURL')), _0xa2568b = _0x51f7bd(_0x300fec), _0x1db1d7 = _0x1ca609(_0x280244, _0xa2568b, { 'periodIndex': _0x3bfd0d }), _0x19f4c6 = _0x205db0(_0x300fec, 'AdaptationSet'), _0x2169a1 = _0x2ff4f3(_0x300fec);
			return _0x49abc8(_0x19f4c6.map(_0x299e3c(_0x1db1d7, _0x1139ed, _0x2169a1)));
		};
	}, _0x338c06 = function _0x376639(_0x55bf5e) {
		var _0x27e760 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _0x1b9b31 = _0x27e760.manifestUri, _0x30ca91 = _0x1b9b31 === undefined ? '' : _0x1b9b31, _0x1bd77c = _0x27e760.NOW, _0x2dbf09 = _0x1bd77c === undefined ? Date.now() : _0x1bd77c, _0xb65f81 = _0x27e760.clientOffset, _0x293b5d = _0xb65f81 === undefined ? 0 : _0xb65f81, _0x39b7bc = _0x205db0(_0x55bf5e, 'Period');
		if (_0x39b7bc.length !== 1) {
			throw new Error(_0x17b639.INVALID_NUMBER_OF_PERIOD);
		}
		var _0x103047 = _0x51f7bd(_0x55bf5e), _0x3aa06b = _0x31bca2([_0x30ca91], _0x205db0(_0x55bf5e, 'BaseURL'));
		return _0x103047.sourceDuration = _0x103047.mediaPresentationDuration || 0, _0x103047.NOW = _0x2dbf09, _0x103047.clientOffset = _0x293b5d, _0x49abc8(_0x39b7bc.map(_0x339137(_0x103047, _0x3aa06b)));
	}, _0x234e4d = function _0xc333cd(_0x3962a6) {
		if (_0x3962a6 === '') {
			throw new Error(_0x17b639.DASH_EMPTY_MANIFEST);
		}
		var _0x20d1b4 = new _0x562c10.DOMParser(), _0x27a5fd = _0x20d1b4.parseFromString(_0x3962a6, 'application/xml'), _0x4444e7 = _0x27a5fd && _0x27a5fd.documentElement.tagName === 'MPD' ? _0x27a5fd.documentElement : null;
		if (!_0x4444e7 || _0x4444e7 && _0x4444e7.getElementsByTagName('parsererror').length > 0) {
			throw new Error(_0x17b639.DASH_INVALID_XML);
		}
		return _0x4444e7;
	}, _0x10a427 = function _0x403d1f(_0xbcdd44) {
		var _0x33288f = _0x205db0(_0xbcdd44, 'UTCTiming')[0];
		if (!_0x33288f) {
			return null;
		}
		var _0xc42730 = _0x51f7bd(_0x33288f);
		switch (_0xc42730.schemeIdUri) {
			case 'urn:mpeg:dash:utc:http-head:2014':
			case 'urn:mpeg:dash:utc:http-head:2012':
				_0xc42730.method = 'HEAD';
				break;
			case 'urn:mpeg:dash:utc:http-xsdate:2014':
			case 'urn:mpeg:dash:utc:http-iso:2014':
			case 'urn:mpeg:dash:utc:http-xsdate:2012':
			case 'urn:mpeg:dash:utc:http-iso:2012':
				_0xc42730.method = 'GET';
				break;
			case 'urn:mpeg:dash:utc:direct:2014':
			case 'urn:mpeg:dash:utc:direct:2012':
				_0xc42730.method = 'DIRECT', _0xc42730.value = Date.parse(_0xc42730.value);
				break;
			case 'urn:mpeg:dash:utc:http-ntp:2014':
			case 'urn:mpeg:dash:utc:ntp:2014':
			case 'urn:mpeg:dash:utc:sntp:2014':
			default:
				throw new Error(_0x17b639.UNSUPPORTED_UTC_TIMING_SCHEME);
		}
		return _0xc42730;
	}, _0x1632b3 = function _0x5c471b(_0x417594, _0x228916) {
		return _0x140f42(_0x3dcfe8(_0x338c06(_0x234e4d(_0x417594), _0x228916)));
	}, _0x7ab1bf = function _0x1eb646(_0x2f084b) {
		return _0x10a427(_0x234e4d(_0x2f084b));
	}, _0x50f0e0 = function _0x5dfbf4(_0x31fc86) {
		return _0x31fc86 >>> 0;
	}, _0x3d5c9e = { 'toUnsigned': _0x50f0e0 }, _0x2488b4 = _0x3d5c9e.toUnsigned, _0x5061c6 = Object.freeze({
		'default': _0x3d5c9e,
		'__moduleExports': _0x3d5c9e,
		'toUnsigned': _0x2488b4
	}), _0x3bffe8 = _0x5061c6 && _0x3d5c9e || _0x5061c6, _0x458eba = _0x3bffe8.toUnsigned, _0x168983, _0x34c04d, _0x35a3ac, _0x2e9fa8, _0xfea85b;
	_0x168983 = function _0x4a9748(_0x183be6, _0x54f84c) {
		var _0x4b10b0 = [], _0x30822d, _0x5482ae, _0x4362b7, _0x1c9ed8, _0x5e94c0;
		if (!_0x54f84c.length) {
			return null;
		}
		for (_0x30822d = 0; _0x30822d < _0x183be6.byteLength;) {
			_0x5482ae = _0x458eba(_0x183be6[_0x30822d] << 24 | _0x183be6[_0x30822d + 1] << 16 | _0x183be6[_0x30822d + 2] << 8 | _0x183be6[_0x30822d + 3]);
			_0x4362b7 = _0x34c04d(_0x183be6.subarray(_0x30822d + 4, _0x30822d + 8));
			_0x1c9ed8 = _0x5482ae > 1 ? _0x30822d + _0x5482ae : _0x183be6.byteLength;
			_0x4362b7 === _0x54f84c[0] && (_0x54f84c.length === 1 ? _0x4b10b0.push(_0x183be6.subarray(_0x30822d + 8, _0x1c9ed8)) : (_0x5e94c0 = _0x168983(_0x183be6.subarray(_0x30822d + 8, _0x1c9ed8), _0x54f84c.slice(1)), _0x5e94c0.length && (_0x4b10b0 = _0x4b10b0.concat(_0x5e94c0))));
			_0x30822d = _0x1c9ed8;
		}
		return _0x4b10b0;
	};
	_0x34c04d = function _0x3e2bb2(_0x22a7a1) {
		var _0x19ace6 = '';
		return _0x19ace6 += String.fromCharCode(_0x22a7a1[0]), _0x19ace6 += String.fromCharCode(_0x22a7a1[1]), _0x19ace6 += String.fromCharCode(_0x22a7a1[2]), _0x19ace6 += String.fromCharCode(_0x22a7a1[3]), _0x19ace6;
	};
	_0x35a3ac = function _0x262ec7(_0x54fca2) {
		var _0x5e6ff5 = {}, _0x1903e1 = _0x168983(_0x54fca2, [
			'moov',
			'trak'
		]);
		return _0x1903e1.reduce(function (_0xd0cd6c, _0x1458ce) {
			var _0x100cf0, _0x5a5eba, _0x54cd80, _0xac0848, _0x39d72f;
			_0x100cf0 = _0x168983(_0x1458ce, ['tkhd'])[0];
			if (!_0x100cf0) {
				return null;
			}
			_0x5a5eba = _0x100cf0[0];
			_0x54cd80 = _0x5a5eba === 0 ? 12 : 20;
			_0xac0848 = _0x458eba(_0x100cf0[_0x54cd80] << 24 | _0x100cf0[_0x54cd80 + 1] << 16 | _0x100cf0[_0x54cd80 + 2] << 8 | _0x100cf0[_0x54cd80 + 3]);
			_0x39d72f = _0x168983(_0x1458ce, [
				'mdia',
				'mdhd'
			])[0];
			if (!_0x39d72f) {
				return null;
			}
			return _0x5a5eba = _0x39d72f[0], _0x54cd80 = _0x5a5eba === 0 ? 12 : 20, _0xd0cd6c[_0xac0848] = _0x458eba(_0x39d72f[_0x54cd80] << 24 | _0x39d72f[_0x54cd80 + 1] << 16 | _0x39d72f[_0x54cd80 + 2] << 8 | _0x39d72f[_0x54cd80 + 3]), _0xd0cd6c;
		}, _0x5e6ff5);
	};
	_0x2e9fa8 = function _0x30a08d(_0x19d0d7, _0xca984a) {
		var _0x1d7693, _0x25fda1, _0x4e0424;
		return _0x1d7693 = _0x168983(_0xca984a, [
			'moof',
			'traf'
		]), _0x25fda1 = [].concat.apply([], _0x1d7693.map(function (_0x2bc8d2) {
			return _0x168983(_0x2bc8d2, ['tfhd']).map(function (_0x4e9646) {
				var _0x58a874, _0x1b215e, _0xe72fa8;
				return _0x58a874 = _0x458eba(_0x4e9646[4] << 24 | _0x4e9646[5] << 16 | _0x4e9646[6] << 8 | _0x4e9646[7]), _0x1b215e = _0x19d0d7[_0x58a874] || 90000, _0xe72fa8 = _0x168983(_0x2bc8d2, ['tfdt']).map(function (_0x2ad0d4) {
					var _0x564f0d, _0x4812c6;
					return _0x564f0d = _0x2ad0d4[0], _0x4812c6 = _0x458eba(_0x2ad0d4[4] << 24 | _0x2ad0d4[5] << 16 | _0x2ad0d4[6] << 8 | _0x2ad0d4[7]), _0x564f0d === 1 && (_0x4812c6 *= Math.pow(2, 32), _0x4812c6 += _0x458eba(_0x2ad0d4[8] << 24 | _0x2ad0d4[9] << 16 | _0x2ad0d4[10] << 8 | _0x2ad0d4[11])), _0x4812c6;
				})[0], _0xe72fa8 = _0xe72fa8 || Infinity, _0xe72fa8 / _0x1b215e;
			});
		})), _0x4e0424 = Math.min.apply(null, _0x25fda1), isFinite(_0x4e0424) ? _0x4e0424 : 0;
	};
	_0xfea85b = function _0x4cf95a(_0x16c5f7) {
		var _0xce1181 = _0x168983(_0x16c5f7, [
			'moov',
			'trak'
		]), _0x4dfcd6 = [];
		return _0xce1181.forEach(function (_0x539af5) {
			var _0x462406 = _0x168983(_0x539af5, [
				'mdia',
				'hdlr'
			]), _0x5ae58c = _0x168983(_0x539af5, ['tkhd']);
			_0x462406.forEach(function (_0x41a510, _0x135afb) {
				var _0x5c5dea = _0x34c04d(_0x41a510.subarray(8, 12)), _0x8a93dc = _0x5ae58c[_0x135afb], _0x320716, _0x529611, _0x233e08;
				if (_0x5c5dea === 'vide') {
					_0x320716 = new DataView(_0x8a93dc.buffer, _0x8a93dc.byteOffset, _0x8a93dc.byteLength);
					_0x529611 = _0x320716.getUint8(0);
					_0x233e08 = _0x529611 === 0 ? _0x320716.getUint32(12) : _0x320716.getUint32(20);
					_0x4dfcd6.push(_0x233e08);
				}
			});
		}), _0x4dfcd6;
	};
	var _0x104ab6 = {
		'findBox': _0x168983,
		'parseType': _0x34c04d,
		'timescale': _0x35a3ac,
		'startTime': _0x2e9fa8,
		'videoTrackIds': _0xfea85b
	}, _0x564e18 = Math.pow(2, 32) - 1, _0x540350, _0x44d7ad, _0x44804f, _0x1c298c, _0x1d84e0, _0x36a62a, _0x492539, _0x15a84c, _0x27824d, _0x4f8a25, _0x4d3bed, _0x1bd47e, _0x295df3, _0xc07e05, _0x3ebb65, _0x14a98a, _0x221ad6, _0x4903a6, _0x4ee4c3, _0x222962, _0x444caf, _0x4d3fd8, _0x49c070, _0x20b5e7, _0x52fbb5, _0x1dd92d, _0x888163, _0x5a093f, _0x174693, _0x51945f, _0x589fd3, _0x3986ec, _0x5ecd36, _0x4ea873, _0x178811, _0xc62291;
	(function () {
		var _0x2a7f53;
		_0x49c070 = {
			'avc1': [],
			'avcC': [],
			'btrt': [],
			'dinf': [],
			'dref': [],
			'esds': [],
			'ftyp': [],
			'hdlr': [],
			'mdat': [],
			'mdhd': [],
			'mdia': [],
			'mfhd': [],
			'minf': [],
			'moof': [],
			'moov': [],
			'mp4a': [],
			'mvex': [],
			'mvhd': [],
			'sdtp': [],
			'smhd': [],
			'stbl': [],
			'stco': [],
			'stsc': [],
			'stsd': [],
			'stsz': [],
			'stts': [],
			'styp': [],
			'tfdt': [],
			'tfhd': [],
			'traf': [],
			'trak': [],
			'trun': [],
			'trex': [],
			'tkhd': [],
			'vmhd': []
		};
		if (typeof Uint8Array === 'undefined') {
			return;
		}
		for (_0x2a7f53 in _0x49c070) {
			_0x49c070.hasOwnProperty(_0x2a7f53) && (_0x49c070[_0x2a7f53] = [
				_0x2a7f53.charCodeAt(0),
				_0x2a7f53.charCodeAt(1),
				_0x2a7f53.charCodeAt(2),
				_0x2a7f53.charCodeAt(3)
			]);
		}
		_0x20b5e7 = new Uint8Array([
			'i'.charCodeAt(0),
			's'.charCodeAt(0),
			'o'.charCodeAt(0),
			'm'.charCodeAt(0)
		]);
		_0x1dd92d = new Uint8Array([
			'a'.charCodeAt(0),
			'v'.charCodeAt(0),
			'c'.charCodeAt(0),
			'1'.charCodeAt(0)
		]);
		_0x52fbb5 = new Uint8Array([
			0,
			0,
			0,
			1
		]);
		_0x888163 = new Uint8Array([
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			118,
			105,
			100,
			101,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			86,
			105,
			100,
			101,
			111,
			72,
			97,
			110,
			100,
			108,
			101,
			114,
			0
		]);
		_0x5a093f = new Uint8Array([
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			115,
			111,
			117,
			110,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			83,
			111,
			117,
			110,
			100,
			72,
			97,
			110,
			100,
			108,
			101,
			114,
			0
		]);
		_0x174693 = {
			'video': _0x888163,
			'audio': _0x5a093f
		};
		_0x3986ec = new Uint8Array([
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			12,
			117,
			114,
			108,
			32,
			0,
			0,
			0,
			1
		]);
		_0x589fd3 = new Uint8Array([
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0
		]);
		_0x5ecd36 = new Uint8Array([
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0
		]);
		_0x4ea873 = _0x5ecd36;
		_0x178811 = new Uint8Array([
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0
		]);
		_0xc62291 = _0x5ecd36;
		_0x51945f = new Uint8Array([
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0
		]);
	}());
	_0x540350 = function _0x32d32e(_0x23a0b1) {
		var _0x2e593f = [], _0x4db996 = 0, _0xa99689, _0xa06df, _0x4592eb;
		for (_0xa99689 = 1; _0xa99689 < arguments.length; _0xa99689++) {
			_0x2e593f.push(arguments[_0xa99689]);
		}
		_0xa99689 = _0x2e593f.length;
		while (_0xa99689--) {
			_0x4db996 += _0x2e593f[_0xa99689].byteLength;
		}
		_0xa06df = new Uint8Array(_0x4db996 + 8);
		_0x4592eb = new DataView(_0xa06df.buffer, _0xa06df.byteOffset, _0xa06df.byteLength);
		_0x4592eb.setUint32(0, _0xa06df.byteLength);
		_0xa06df.set(_0x23a0b1, 4);
		for (_0xa99689 = 0, _0x4db996 = 8; _0xa99689 < _0x2e593f.length; _0xa99689++) {
			_0xa06df.set(_0x2e593f[_0xa99689], _0x4db996);
			_0x4db996 += _0x2e593f[_0xa99689].byteLength;
		}
		return _0xa06df;
	};
	_0x44d7ad = function _0x28973f() {
		return _0x540350(_0x49c070.dinf, _0x540350(_0x49c070.dref, _0x3986ec));
	};
	_0x44804f = function _0x482b18(_0x580de8) {
		return _0x540350(_0x49c070.esds, new Uint8Array([
			0,
			0,
			0,
			0,
			3,
			25,
			0,
			0,
			0,
			4,
			17,
			64,
			21,
			0,
			6,
			0,
			0,
			0,
			218,
			192,
			0,
			0,
			218,
			192,
			5,
			2,
			_0x580de8.audioobjecttype << 3 | _0x580de8.samplingfrequencyindex >>> 1,
			_0x580de8.samplingfrequencyindex << 7 | _0x580de8.channelcount << 3,
			6,
			1,
			2
		]));
	};
	_0x1c298c = function _0x24000e() {
		return _0x540350(_0x49c070.ftyp, _0x20b5e7, _0x52fbb5, _0x20b5e7, _0x1dd92d);
	};
	_0x14a98a = function _0x163c80(_0x184dd1) {
		return _0x540350(_0x49c070.hdlr, _0x174693[_0x184dd1]);
	};
	_0x1d84e0 = function _0x219053(_0x4347cd) {
		return _0x540350(_0x49c070.mdat, _0x4347cd);
	};
	_0x3ebb65 = function _0x4b45b0(_0x25c0e7) {
		var _0x33971a = new Uint8Array([
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			2,
			0,
			0,
			0,
			3,
			0,
			1,
			95,
			144,
			_0x25c0e7.duration >>> 24 & 255,
			_0x25c0e7.duration >>> 16 & 255,
			_0x25c0e7.duration >>> 8 & 255,
			_0x25c0e7.duration & 255,
			85,
			196,
			0,
			0
		]);
		return _0x25c0e7.samplerate && (_0x33971a[12] = _0x25c0e7.samplerate >>> 24 & 255, _0x33971a[13] = _0x25c0e7.samplerate >>> 16 & 255, _0x33971a[14] = _0x25c0e7.samplerate >>> 8 & 255, _0x33971a[15] = _0x25c0e7.samplerate & 255), _0x540350(_0x49c070.mdhd, _0x33971a);
	};
	_0xc07e05 = function _0x5e823f(_0xf2fb84) {
		return _0x540350(_0x49c070.mdia, _0x3ebb65(_0xf2fb84), _0x14a98a(_0xf2fb84.type), _0x492539(_0xf2fb84));
	};
	_0x36a62a = function _0x1c1ae7(_0x11e8bc) {
		return _0x540350(_0x49c070.mfhd, new Uint8Array([
			0,
			0,
			0,
			0,
			(_0x11e8bc & 4278190080) >> 24,
			(_0x11e8bc & 16711680) >> 16,
			(_0x11e8bc & 65280) >> 8,
			_0x11e8bc & 255
		]));
	};
	_0x492539 = function _0x1394c9(_0x50d2a3) {
		return _0x540350(_0x49c070.minf, _0x50d2a3.type === 'video' ? _0x540350(_0x49c070.vmhd, _0x51945f) : _0x540350(_0x49c070.smhd, _0x589fd3), _0x44d7ad(), _0x4903a6(_0x50d2a3));
	};
	_0x15a84c = function _0x2a7699(_0x3c1c1f, _0x2c64b0) {
		var _0x4da9d6 = [], _0x42b8af = _0x2c64b0.length;
		while (_0x42b8af--) {
			_0x4da9d6[_0x42b8af] = _0x222962(_0x2c64b0[_0x42b8af]);
		}
		return _0x540350.apply(null, [
			_0x49c070.moof,
			_0x36a62a(_0x3c1c1f)
		].concat(_0x4da9d6));
	};
	_0x27824d = function _0x4cc27e(_0x23c2d3) {
		var _0x307e20 = _0x23c2d3.length, _0x56f53b = [];
		while (_0x307e20--) {
			_0x56f53b[_0x307e20] = _0x1bd47e(_0x23c2d3[_0x307e20]);
		}
		return _0x540350.apply(null, [
			_0x49c070.moov,
			_0x4d3bed(4294967295)
		].concat(_0x56f53b).concat(_0x4f8a25(_0x23c2d3)));
	};
	_0x4f8a25 = function _0x3e19e2(_0x3bad5d) {
		var _0x216f37 = _0x3bad5d.length, _0x394155 = [];
		while (_0x216f37--) {
			_0x394155[_0x216f37] = _0x444caf(_0x3bad5d[_0x216f37]);
		}
		return _0x540350.apply(null, [_0x49c070.mvex].concat(_0x394155));
	};
	_0x4d3bed = function _0x582cd6(_0x59f6c6) {
		var _0x3dd70d = new Uint8Array([
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			2,
			0,
			1,
			95,
			144,
			(_0x59f6c6 & 4278190080) >> 24,
			(_0x59f6c6 & 16711680) >> 16,
			(_0x59f6c6 & 65280) >> 8,
			_0x59f6c6 & 255,
			0,
			1,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			64,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			255,
			255,
			255,
			255
		]);
		return _0x540350(_0x49c070.mvhd, _0x3dd70d);
	};
	_0x221ad6 = function _0x599506(_0x3d8c1d) {
		var _0x572160 = _0x3d8c1d.samples || [], _0x2a8af1 = new Uint8Array(4 + _0x572160.length), _0x55d931, _0x146bb5;
		for (_0x146bb5 = 0; _0x146bb5 < _0x572160.length; _0x146bb5++) {
			_0x55d931 = _0x572160[_0x146bb5].flags;
			_0x2a8af1[_0x146bb5 + 4] = _0x55d931.dependsOn << 4 | _0x55d931.isDependedOn << 2 | _0x55d931.hasRedundancy;
		}
		return _0x540350(_0x49c070.sdtp, _0x2a8af1);
	};
	_0x4903a6 = function _0x4cd1a4(_0x3d2ff6) {
		return _0x540350(_0x49c070.stbl, _0x4ee4c3(_0x3d2ff6), _0x540350(_0x49c070.stts, _0xc62291), _0x540350(_0x49c070.stsc, _0x4ea873), _0x540350(_0x49c070.stsz, _0x178811), _0x540350(_0x49c070.stco, _0x5ecd36));
	};
	(function () {
		var _0x378b14, _0x2bdca7;
		_0x4ee4c3 = function _0x53088d(_0xff2e0) {
			return _0x540350(_0x49c070.stsd, new Uint8Array([
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				1
			]), _0xff2e0.type === 'video' ? _0x378b14(_0xff2e0) : _0x2bdca7(_0xff2e0));
		};
		_0x378b14 = function _0x51385b(_0xe7264b) {
			var _0x4ed07d = _0xe7264b.sps || [], _0x139ee2 = _0xe7264b.pps || [], _0x245ca4 = [], _0x63ad07 = [], _0x11acf2;
			for (_0x11acf2 = 0; _0x11acf2 < _0x4ed07d.length; _0x11acf2++) {
				_0x245ca4.push((_0x4ed07d[_0x11acf2].byteLength & 65280) >>> 8);
				_0x245ca4.push(_0x4ed07d[_0x11acf2].byteLength & 255);
				_0x245ca4 = _0x245ca4.concat(Array.prototype.slice.call(_0x4ed07d[_0x11acf2]));
			}
			for (_0x11acf2 = 0; _0x11acf2 < _0x139ee2.length; _0x11acf2++) {
				_0x63ad07.push((_0x139ee2[_0x11acf2].byteLength & 65280) >>> 8);
				_0x63ad07.push(_0x139ee2[_0x11acf2].byteLength & 255);
				_0x63ad07 = _0x63ad07.concat(Array.prototype.slice.call(_0x139ee2[_0x11acf2]));
			}
			return _0x540350(_0x49c070.avc1, new Uint8Array([
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				(_0xe7264b.width & 65280) >> 8,
				_0xe7264b.width & 255,
				(_0xe7264b.height & 65280) >> 8,
				_0xe7264b.height & 255,
				0,
				72,
				0,
				0,
				0,
				72,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				1,
				19,
				118,
				105,
				100,
				101,
				111,
				106,
				115,
				45,
				99,
				111,
				110,
				116,
				114,
				105,
				98,
				45,
				104,
				108,
				115,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				24,
				17,
				17
			]), _0x540350(_0x49c070.avcC, new Uint8Array([
				1,
				_0xe7264b.profileIdc,
				_0xe7264b.profileCompatibility,
				_0xe7264b.levelIdc,
				255
			].concat([_0x4ed07d.length]).concat(_0x245ca4).concat([_0x139ee2.length]).concat(_0x63ad07))), _0x540350(_0x49c070.btrt, new Uint8Array([
				0,
				28,
				156,
				128,
				0,
				45,
				198,
				192,
				0,
				45,
				198,
				192
			])));
		};
		_0x2bdca7 = function _0x18948a(_0x19c795) {
			return _0x540350(_0x49c070.mp4a, new Uint8Array([
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				(_0x19c795.channelcount & 65280) >> 8,
				_0x19c795.channelcount & 255,
				(_0x19c795.samplesize & 65280) >> 8,
				_0x19c795.samplesize & 255,
				0,
				0,
				0,
				0,
				(_0x19c795.samplerate & 65280) >> 8,
				_0x19c795.samplerate & 255,
				0,
				0
			]), _0x44804f(_0x19c795));
		};
	}());
	_0x295df3 = function _0xb20aba(_0x4d5511) {
		var _0xdcf76b = new Uint8Array([
			0,
			0,
			0,
			7,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			(_0x4d5511.id & 4278190080) >> 24,
			(_0x4d5511.id & 16711680) >> 16,
			(_0x4d5511.id & 65280) >> 8,
			_0x4d5511.id & 255,
			0,
			0,
			0,
			0,
			(_0x4d5511.duration & 4278190080) >> 24,
			(_0x4d5511.duration & 16711680) >> 16,
			(_0x4d5511.duration & 65280) >> 8,
			_0x4d5511.duration & 255,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			64,
			0,
			0,
			0,
			(_0x4d5511.width & 65280) >> 8,
			_0x4d5511.width & 255,
			0,
			0,
			(_0x4d5511.height & 65280) >> 8,
			_0x4d5511.height & 255,
			0,
			0
		]);
		return _0x540350(_0x49c070.tkhd, _0xdcf76b);
	};
	_0x222962 = function _0x3bdfa9(_0x1a1a0e) {
		var _0xe12d41, _0x236a80, _0x35bec9, _0x447f9d, _0x30a9fe, _0x2d914d, _0x434b2c;
		_0xe12d41 = _0x540350(_0x49c070.tfhd, new Uint8Array([
			0,
			0,
			0,
			58,
			(_0x1a1a0e.id & 4278190080) >> 24,
			(_0x1a1a0e.id & 16711680) >> 16,
			(_0x1a1a0e.id & 65280) >> 8,
			_0x1a1a0e.id & 255,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0
		]));
		_0x2d914d = Math.floor(_0x1a1a0e.baseMediaDecodeTime / (_0x564e18 + 1));
		_0x434b2c = Math.floor(_0x1a1a0e.baseMediaDecodeTime % (_0x564e18 + 1));
		_0x236a80 = _0x540350(_0x49c070.tfdt, new Uint8Array([
			1,
			0,
			0,
			0,
			_0x2d914d >>> 24 & 255,
			_0x2d914d >>> 16 & 255,
			_0x2d914d >>> 8 & 255,
			_0x2d914d & 255,
			_0x434b2c >>> 24 & 255,
			_0x434b2c >>> 16 & 255,
			_0x434b2c >>> 8 & 255,
			_0x434b2c & 255
		]));
		_0x30a9fe = 92;
		if (_0x1a1a0e.type === 'audio') {
			return _0x35bec9 = _0x4d3fd8(_0x1a1a0e, _0x30a9fe), _0x540350(_0x49c070.traf, _0xe12d41, _0x236a80, _0x35bec9);
		}
		return _0x447f9d = _0x221ad6(_0x1a1a0e), _0x35bec9 = _0x4d3fd8(_0x1a1a0e, _0x447f9d.length + _0x30a9fe), _0x540350(_0x49c070.traf, _0xe12d41, _0x236a80, _0x35bec9, _0x447f9d);
	};
	_0x1bd47e = function _0x583c7e(_0x569230) {
		return _0x569230.duration = _0x569230.duration || 4294967295, _0x540350(_0x49c070.trak, _0x295df3(_0x569230), _0xc07e05(_0x569230));
	};
	_0x444caf = function _0x4bafee(_0x421abb) {
		var _0x4d7f29 = new Uint8Array([
			0,
			0,
			0,
			0,
			(_0x421abb.id & 4278190080) >> 24,
			(_0x421abb.id & 16711680) >> 16,
			(_0x421abb.id & 65280) >> 8,
			_0x421abb.id & 255,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			0,
			1
		]);
		return _0x421abb.type !== 'video' && (_0x4d7f29[_0x4d7f29.length - 1] = 0), _0x540350(_0x49c070.trex, _0x4d7f29);
	};
	(function () {
		var _0x24cd98, _0x3fee42, _0x300ba5;
		_0x300ba5 = function _0xb7d1af(_0x5c47ff, _0x56c808) {
			var _0x4ebba1 = 0, _0x4ed136 = 0, _0x7995e4 = 0, _0x1b8b72 = 0;
			return _0x5c47ff.length && (_0x5c47ff[0].duration !== undefined && (_0x4ebba1 = 1), _0x5c47ff[0].size !== undefined && (_0x4ed136 = 2), _0x5c47ff[0].flags !== undefined && (_0x7995e4 = 4), _0x5c47ff[0].compositionTimeOffset !== undefined && (_0x1b8b72 = 8)), [
				0,
				0,
				_0x4ebba1 | _0x4ed136 | _0x7995e4 | _0x1b8b72,
				1,
				(_0x5c47ff.length & 4278190080) >>> 24,
				(_0x5c47ff.length & 16711680) >>> 16,
				(_0x5c47ff.length & 65280) >>> 8,
				_0x5c47ff.length & 255,
				(_0x56c808 & 4278190080) >>> 24,
				(_0x56c808 & 16711680) >>> 16,
				(_0x56c808 & 65280) >>> 8,
				_0x56c808 & 255
			];
		};
		_0x3fee42 = function _0x3bc266(_0x28cc21, _0x198109) {
			var _0x21e911, _0x415a98, _0x43354a, _0xff8e5d;
			_0x415a98 = _0x28cc21.samples || [];
			_0x198109 += 20 + 16 * _0x415a98.length;
			_0x21e911 = _0x300ba5(_0x415a98, _0x198109);
			for (_0xff8e5d = 0; _0xff8e5d < _0x415a98.length; _0xff8e5d++) {
				_0x43354a = _0x415a98[_0xff8e5d];
				_0x21e911 = _0x21e911.concat([
					(_0x43354a.duration & 4278190080) >>> 24,
					(_0x43354a.duration & 16711680) >>> 16,
					(_0x43354a.duration & 65280) >>> 8,
					_0x43354a.duration & 255,
					(_0x43354a.size & 4278190080) >>> 24,
					(_0x43354a.size & 16711680) >>> 16,
					(_0x43354a.size & 65280) >>> 8,
					_0x43354a.size & 255,
					_0x43354a.flags.isLeading << 2 | _0x43354a.flags.dependsOn,
					_0x43354a.flags.isDependedOn << 6 | _0x43354a.flags.hasRedundancy << 4 | _0x43354a.flags.paddingValue << 1 | _0x43354a.flags.isNonSyncSample,
					_0x43354a.flags.degradationPriority & 240 << 8,
					_0x43354a.flags.degradationPriority & 15,
					(_0x43354a.compositionTimeOffset & 4278190080) >>> 24,
					(_0x43354a.compositionTimeOffset & 16711680) >>> 16,
					(_0x43354a.compositionTimeOffset & 65280) >>> 8,
					_0x43354a.compositionTimeOffset & 255
				]);
			}
			return _0x540350(_0x49c070.trun, new Uint8Array(_0x21e911));
		};
		_0x24cd98 = function _0x12ec62(_0x57edf9, _0x54f1dc) {
			var _0x1df2c3, _0x104d0f, _0x499d97, _0x15dbcd;
			_0x104d0f = _0x57edf9.samples || [];
			_0x54f1dc += 20 + 8 * _0x104d0f.length;
			_0x1df2c3 = _0x300ba5(_0x104d0f, _0x54f1dc);
			for (_0x15dbcd = 0; _0x15dbcd < _0x104d0f.length; _0x15dbcd++) {
				_0x499d97 = _0x104d0f[_0x15dbcd];
				_0x1df2c3 = _0x1df2c3.concat([
					(_0x499d97.duration & 4278190080) >>> 24,
					(_0x499d97.duration & 16711680) >>> 16,
					(_0x499d97.duration & 65280) >>> 8,
					_0x499d97.duration & 255,
					(_0x499d97.size & 4278190080) >>> 24,
					(_0x499d97.size & 16711680) >>> 16,
					(_0x499d97.size & 65280) >>> 8,
					_0x499d97.size & 255
				]);
			}
			return _0x540350(_0x49c070.trun, new Uint8Array(_0x1df2c3));
		};
		_0x4d3fd8 = function _0x4dc9e4(_0x12e50a, _0x194e22) {
			if (_0x12e50a.type === 'audio') {
				return _0x24cd98(_0x12e50a, _0x194e22);
			}
			return _0x3fee42(_0x12e50a, _0x194e22);
		};
	}());
	var _0x831c55 = {
		'ftyp': _0x1c298c,
		'mdat': _0x1d84e0,
		'moof': _0x15a84c,
		'moov': _0x27824d,
		'initSegment': function _0x24a829(_0x2d4680) {
			var _0xb31f64 = _0x1c298c(), _0x448d9f = _0x27824d(_0x2d4680), _0x564aae;
			return _0x564aae = new Uint8Array(_0xb31f64.byteLength + _0x448d9f.byteLength), _0x564aae.set(_0xb31f64), _0x564aae.set(_0x448d9f, _0xb31f64.byteLength), _0x564aae;
		}
	}, _0x560e8d = _0x831c55.ftyp, _0x43f807 = _0x831c55.mdat, _0x452b32 = _0x831c55.moof, _0x553fdd = _0x831c55.moov, _0x58617d = _0x831c55.initSegment, _0x4b7cef = Object.freeze({
		'default': _0x831c55,
		'__moduleExports': _0x831c55,
		'ftyp': _0x560e8d,
		'mdat': _0x43f807,
		'moof': _0x452b32,
		'moov': _0x553fdd,
		'initSegment': _0x58617d
	}), _0x1061c5 = function _0x501da4() {
		this.init = function () {
			var _0x52e745 = { _0x2a2cba: _0x52e745[_0x2a2cba].concat(_0x3265c3) };
			this.on = function (_0x2a2cba, _0x3265c3) {
				!_0x52e745[_0x2a2cba] && (_0x52e745[_0x2a2cba] = []);
			};
			this.off = function (_0x4e7c36, _0x1d4b37) {
				var _0x5c2e62;
				if (!_0x52e745[_0x4e7c36]) {
					return false;
				}
				return _0x5c2e62 = _0x52e745[_0x4e7c36].indexOf(_0x1d4b37), _0x52e745[_0x4e7c36] = _0x52e745[_0x4e7c36].slice(), _0x52e745[_0x4e7c36].splice(_0x5c2e62, 1), _0x5c2e62 > -1;
			};
			this.trigger = function (_0x5764fb) {
				var _0x37d61a, _0x202dd6, _0x314e44, _0x59b075;
				_0x37d61a = _0x52e745[_0x5764fb];
				if (!_0x37d61a) {
					return;
				}
				if (arguments.length === 2) {
					_0x314e44 = _0x37d61a.length;
					for (_0x202dd6 = 0; _0x202dd6 < _0x314e44; ++_0x202dd6) {
						_0x37d61a[_0x202dd6].call(this, arguments[1]);
					}
				} else {
					_0x59b075 = [];
					_0x202dd6 = arguments.length;
					for (_0x202dd6 = 1; _0x202dd6 < arguments.length; ++_0x202dd6) {
						_0x59b075.push(arguments[_0x202dd6]);
					}
					_0x314e44 = _0x37d61a.length;
					for (_0x202dd6 = 0; _0x202dd6 < _0x314e44; ++_0x202dd6) {
						_0x37d61a[_0x202dd6].apply(this, _0x59b075);
					}
				}
			};
			this.dispose = function () {
				_0x52e745 = {};
			};
		};
	};
	_0x1061c5.prototype.pipe = function (_0x393f9c) {
		return this.on('data', function (_0x3730f7) {
			_0x393f9c.push(_0x3730f7);
		}), this.on('done', function (_0x29e1bb) {
			_0x393f9c.flush(_0x29e1bb);
		}), _0x393f9c;
	};
	_0x1061c5.prototype.push = function (_0x2f7ecf) {
		this.trigger('data', _0x2f7ecf);
	};
	_0x1061c5.prototype.flush = function (_0x20101f) {
		this.trigger('done', _0x20101f);
	};
	var _0x23a4a1 = _0x1061c5, _0x32fc03 = Object.freeze({
		'default': _0x23a4a1,
		'__moduleExports': _0x23a4a1
	}), _0x10786d = function _0x4608d1(_0xc3d63a) {
		var _0x12e84f, _0x1837db, _0x46e614 = [], _0x510777 = [];
		_0x46e614.byteLength = 0;
		for (_0x12e84f = 0; _0x12e84f < _0xc3d63a.length; _0x12e84f++) {
			_0x1837db = _0xc3d63a[_0x12e84f];
			_0x1837db.nalUnitType === 'access_unit_delimiter_rbsp' ? (_0x46e614.length && (_0x46e614.duration = _0x1837db.dts - _0x46e614.dts, _0x510777.push(_0x46e614)), _0x46e614 = [_0x1837db], _0x46e614.byteLength = _0x1837db.data.byteLength, _0x46e614.pts = _0x1837db.pts, _0x46e614.dts = _0x1837db.dts) : (_0x1837db.nalUnitType === 'slice_layer_without_partitioning_rbsp_idr' && (_0x46e614.keyFrame = true), _0x46e614.duration = _0x1837db.dts - _0x46e614.dts, _0x46e614.byteLength += _0x1837db.data.byteLength, _0x46e614.push(_0x1837db));
		}
		return _0x510777.length && (!_0x46e614.duration || _0x46e614.duration <= 0) && (_0x46e614.duration = _0x510777[_0x510777.length - 1].duration), _0x510777.push(_0x46e614), _0x510777;
	}, _0x4a2031 = function _0x24f7c6(_0x2d9992) {
		var _0x4a1392, _0x4139b7, _0xc8ef1a = [], _0x974af4 = [];
		_0xc8ef1a.byteLength = 0;
		_0xc8ef1a.nalCount = 0;
		_0xc8ef1a.duration = 0;
		_0xc8ef1a.pts = _0x2d9992[0].pts;
		_0xc8ef1a.dts = _0x2d9992[0].dts;
		_0x974af4.byteLength = 0;
		_0x974af4.nalCount = 0;
		_0x974af4.duration = 0;
		_0x974af4.pts = _0x2d9992[0].pts;
		_0x974af4.dts = _0x2d9992[0].dts;
		for (_0x4a1392 = 0; _0x4a1392 < _0x2d9992.length; _0x4a1392++) {
			_0x4139b7 = _0x2d9992[_0x4a1392];
			_0x4139b7.keyFrame ? (_0xc8ef1a.length && (_0x974af4.push(_0xc8ef1a), _0x974af4.byteLength += _0xc8ef1a.byteLength, _0x974af4.nalCount += _0xc8ef1a.nalCount, _0x974af4.duration += _0xc8ef1a.duration), _0xc8ef1a = [_0x4139b7], _0xc8ef1a.nalCount = _0x4139b7.length, _0xc8ef1a.byteLength = _0x4139b7.byteLength, _0xc8ef1a.pts = _0x4139b7.pts, _0xc8ef1a.dts = _0x4139b7.dts, _0xc8ef1a.duration = _0x4139b7.duration) : (_0xc8ef1a.duration += _0x4139b7.duration, _0xc8ef1a.nalCount += _0x4139b7.length, _0xc8ef1a.byteLength += _0x4139b7.byteLength, _0xc8ef1a.push(_0x4139b7));
		}
		return _0x974af4.length && _0xc8ef1a.duration <= 0 && (_0xc8ef1a.duration = _0x974af4[_0x974af4.length - 1].duration), _0x974af4.byteLength += _0xc8ef1a.byteLength, _0x974af4.nalCount += _0xc8ef1a.nalCount, _0x974af4.duration += _0xc8ef1a.duration, _0x974af4.push(_0xc8ef1a), _0x974af4;
	}, _0x41be73 = function _0x14c18b(_0x23dfa6) {
		var _0x217b35;
		return !_0x23dfa6[0][0].keyFrame && _0x23dfa6.length > 1 && (_0x217b35 = _0x23dfa6.shift(), _0x23dfa6.byteLength -= _0x217b35.byteLength, _0x23dfa6.nalCount -= _0x217b35.nalCount, _0x23dfa6[0][0].dts = _0x217b35.dts, _0x23dfa6[0][0].pts = _0x217b35.pts, _0x23dfa6[0][0].duration += _0x217b35.duration), _0x23dfa6;
	}, _0x2328ba = function _0x15e2e6() {
		return {
			'size': 0,
			'flags': {
				'isLeading': 0,
				'dependsOn': 1,
				'isDependedOn': 0,
				'hasRedundancy': 0,
				'degradationPriority': 0,
				'isNonSyncSample': 1
			}
		};
	}, _0x1a93bb = function _0x2f0a7a(_0xb5d805, _0x5437c2) {
		var _0x12a147 = _0x2328ba();
		return _0x12a147.dataOffset = _0x5437c2, _0x12a147.compositionTimeOffset = _0xb5d805.pts - _0xb5d805.dts, _0x12a147.duration = _0xb5d805.duration, _0x12a147.size = 4 * _0xb5d805.length, _0x12a147.size += _0xb5d805.byteLength, _0xb5d805.keyFrame && (_0x12a147.flags.dependsOn = 2, _0x12a147.flags.isNonSyncSample = 0), _0x12a147;
	}, _0x542ae1 = function _0x29ff3c(_0x53ec68, _0x3f2c92) {
		var _0x19b669, _0xe4eed3, _0x16cff3, _0x35b5f3, _0x3ad653, _0x3d4e3e = _0x3f2c92 || 0, _0x2cca34 = [];
		for (_0x19b669 = 0; _0x19b669 < _0x53ec68.length; _0x19b669++) {
			_0x35b5f3 = _0x53ec68[_0x19b669];
			for (_0xe4eed3 = 0; _0xe4eed3 < _0x35b5f3.length; _0xe4eed3++) {
				_0x3ad653 = _0x35b5f3[_0xe4eed3];
				_0x16cff3 = _0x1a93bb(_0x3ad653, _0x3d4e3e);
				_0x3d4e3e += _0x16cff3.size;
				_0x2cca34.push(_0x16cff3);
			}
		}
		return _0x2cca34;
	}, _0x2f37a1 = function _0x1bdb40(_0x15ce1d) {
		var _0x1c878f, _0x36acea, _0x494353, _0x4e2cfa, _0x59ed22, _0x557144, _0x14a265 = 0, _0x17f243 = _0x15ce1d.byteLength, _0x4192ed = _0x15ce1d.nalCount, _0xa2853b = _0x17f243 + 4 * _0x4192ed, _0x5e937f = new Uint8Array(_0xa2853b), _0x3b41b8 = new DataView(_0x5e937f.buffer);
		for (_0x1c878f = 0; _0x1c878f < _0x15ce1d.length; _0x1c878f++) {
			_0x4e2cfa = _0x15ce1d[_0x1c878f];
			for (_0x36acea = 0; _0x36acea < _0x4e2cfa.length; _0x36acea++) {
				_0x59ed22 = _0x4e2cfa[_0x36acea];
				for (_0x494353 = 0; _0x494353 < _0x59ed22.length; _0x494353++) {
					_0x557144 = _0x59ed22[_0x494353];
					_0x3b41b8.setUint32(_0x14a265, _0x557144.data.byteLength);
					_0x14a265 += 4;
					_0x5e937f.set(_0x557144.data, _0x14a265);
					_0x14a265 += _0x557144.data.byteLength;
				}
			}
		}
		return _0x5e937f;
	}, _0x3646e6 = {
		'groupNalsIntoFrames': _0x10786d,
		'groupFramesIntoGops': _0x4a2031,
		'extendFirstKeyFrame': _0x41be73,
		'generateSampleTable': _0x542ae1,
		'concatenateNalData': _0x2f37a1
	}, _0x49f6bf = _0x3646e6.groupNalsIntoFrames, _0x326b21 = _0x3646e6.groupFramesIntoGops, _0x3e4762 = _0x3646e6.extendFirstKeyFrame, _0x4c7837 = _0x3646e6.generateSampleTable, _0x2809c3 = _0x3646e6.concatenateNalData, _0x1ad00d = Object.freeze({
		'default': _0x3646e6,
		'__moduleExports': _0x3646e6,
		'groupNalsIntoFrames': _0x49f6bf,
		'groupFramesIntoGops': _0x326b21,
		'extendFirstKeyFrame': _0x3e4762,
		'generateSampleTable': _0x4c7837,
		'concatenateNalData': _0x2809c3
	}), _0x34d70a = function _0x21c7ef(_0x5a3fa7, _0x460db3) {
		if (typeof _0x460db3.pts === 'number') {
			_0x5a3fa7.timelineStartInfo.pts === undefined && (_0x5a3fa7.timelineStartInfo.pts = _0x460db3.pts);
			_0x5a3fa7.minSegmentPts === undefined ? _0x5a3fa7.minSegmentPts = _0x460db3.pts : _0x5a3fa7.minSegmentPts = Math.min(_0x5a3fa7.minSegmentPts, _0x460db3.pts);
			_0x5a3fa7.maxSegmentPts === undefined ? _0x5a3fa7.maxSegmentPts = _0x460db3.pts : _0x5a3fa7.maxSegmentPts = Math.max(_0x5a3fa7.maxSegmentPts, _0x460db3.pts);
		}
		if (typeof _0x460db3.dts === 'number') {
			_0x5a3fa7.timelineStartInfo.dts === undefined && (_0x5a3fa7.timelineStartInfo.dts = _0x460db3.dts);
			_0x5a3fa7.minSegmentDts === undefined ? _0x5a3fa7.minSegmentDts = _0x460db3.dts : _0x5a3fa7.minSegmentDts = Math.min(_0x5a3fa7.minSegmentDts, _0x460db3.dts);
			_0x5a3fa7.maxSegmentDts === undefined ? _0x5a3fa7.maxSegmentDts = _0x460db3.dts : _0x5a3fa7.maxSegmentDts = Math.max(_0x5a3fa7.maxSegmentDts, _0x460db3.dts);
		}
	}, _0x52d5f3 = function _0x228597(_0x2886e8) {
		delete _0x2886e8.minSegmentDts;
		delete _0x2886e8.maxSegmentDts;
		delete _0x2886e8.minSegmentPts;
		delete _0x2886e8.maxSegmentPts;
	}, _0xa81a82 = function _0x2efc5f(_0x114be7, _0x483221) {
		var _0x24cd93, _0x59189f, _0xe19300 = _0x114be7.minSegmentDts;
		return !_0x483221 && (_0xe19300 -= _0x114be7.timelineStartInfo.dts), _0x24cd93 = _0x114be7.timelineStartInfo.baseMediaDecodeTime, _0x24cd93 += _0xe19300, _0x24cd93 = Math.max(0, _0x24cd93), _0x114be7.type === 'audio' && (_0x59189f = _0x114be7.samplerate / 90000, _0x24cd93 *= _0x59189f, _0x24cd93 = Math.floor(_0x24cd93)), _0x24cd93;
	}, _0x3d0c2b = {
		'clearDtsInfo': _0x52d5f3,
		'calculateTrackBaseMediaDecodeTime': _0xa81a82,
		'collectDtsInfo': _0x34d70a
	}, _0x5714c4 = _0x3d0c2b.clearDtsInfo, _0x4c9f8b = _0x3d0c2b.calculateTrackBaseMediaDecodeTime, _0x473844 = _0x3d0c2b.collectDtsInfo, _0x2377a5 = Object.freeze({
		'default': _0x3d0c2b,
		'__moduleExports': _0x3d0c2b,
		'clearDtsInfo': _0x5714c4,
		'calculateTrackBaseMediaDecodeTime': _0x4c9f8b,
		'collectDtsInfo': _0x473844
	}), _0x74bca5 = function _0x3f743c(_0x2e35ea) {
		var _0xac512 = 0, _0xa75ecb = {
			'payloadType': -1,
			'payloadSize': 0
		}, _0xef9a38 = 0, _0x4869ce = 0;
		while (_0xac512 < _0x2e35ea.byteLength) {
			if (_0x2e35ea[_0xac512] === 128) {
				break;
			}
			while (_0x2e35ea[_0xac512] === 255) {
				_0xef9a38 += 255;
				_0xac512++;
			}
			_0xef9a38 += _0x2e35ea[_0xac512++];
			while (_0x2e35ea[_0xac512] === 255) {
				_0x4869ce += 255;
				_0xac512++;
			}
			_0x4869ce += _0x2e35ea[_0xac512++];
			if (!_0xa75ecb.payload && _0xef9a38 === 4) {
				_0xa75ecb.payloadType = _0xef9a38;
				_0xa75ecb.payloadSize = _0x4869ce;
				_0xa75ecb.payload = _0x2e35ea.subarray(_0xac512, _0xac512 + _0x4869ce);
				break;
			}
			_0xac512 += _0x4869ce;
			_0xef9a38 = 0;
			_0x4869ce = 0;
		}
		return _0xa75ecb;
	}, _0x3783cf = function _0x5c6fd0(_0x14db11) {
		if (_0x14db11.payload[0] !== 181) {
			return null;
		}
		if ((_0x14db11.payload[1] << 8 | _0x14db11.payload[2]) !== 49) {
			return null;
		}
		if (String.fromCharCode(_0x14db11.payload[3], _0x14db11.payload[4], _0x14db11.payload[5], _0x14db11.payload[6]) !== 'GA94') {
			return null;
		}
		if (_0x14db11.payload[7] !== 3) {
			return null;
		}
		return _0x14db11.payload.subarray(8, _0x14db11.payload.length - 1);
	}, _0x2c55df = function _0x458509(_0x164ada, _0x4505d5) {
		var _0x8181ac = [], _0x15971b, _0x4dcbd8, _0x430b1f, _0x3f294c;
		if (!(_0x4505d5[0] & 64)) {
			return _0x8181ac;
		}
		_0x4dcbd8 = _0x4505d5[0] & 31;
		for (_0x15971b = 0; _0x15971b < _0x4dcbd8; _0x15971b++) {
			_0x430b1f = _0x15971b * 3;
			_0x3f294c = {
				'type': _0x4505d5[_0x430b1f + 2] & 3,
				'pts': _0x164ada
			};
			if (_0x4505d5[_0x430b1f + 2] & 4) {
				_0x3f294c.ccData = _0x4505d5[_0x430b1f + 3] << 8 | _0x4505d5[_0x430b1f + 4];
				_0x8181ac.push(_0x3f294c);
			}
		}
		return _0x8181ac;
	}, _0x56c5ce = function _0x41ab10(_0x464b31) {
		var _0x4f5d3b = _0x464b31.byteLength, _0x31e7b8 = [], _0x465218 = 1, _0x31d669, _0x4906ec;
		while (_0x465218 < _0x4f5d3b - 2) {
			_0x464b31[_0x465218] === 0 && _0x464b31[_0x465218 + 1] === 0 && _0x464b31[_0x465218 + 2] === 3 ? (_0x31e7b8.push(_0x465218 + 2), _0x465218 += 2) : _0x465218++;
		}
		if (_0x31e7b8.length === 0) {
			return _0x464b31;
		}
		_0x31d669 = _0x4f5d3b - _0x31e7b8.length;
		_0x4906ec = new Uint8Array(_0x31d669);
		var _0x3862e5 = 0;
		for (_0x465218 = 0; _0x465218 < _0x31d669; _0x3862e5++, _0x465218++) {
			if (_0x3862e5 === _0x31e7b8[0]) {
				_0x3862e5++;
				_0x31e7b8.shift();
			}
			_0x4906ec[_0x465218] = _0x464b31[_0x3862e5];
		}
		return _0x4906ec;
	}, _0x875e45 = {
		'parseSei': _0x74bca5,
		'parseUserData': _0x3783cf,
		'parseCaptionPackets': _0x2c55df,
		'discardEmulationPreventionBytes': _0x56c5ce,
		'USER_DATA_REGISTERED_ITU_T_T35': 4
	}, _0x336d87 = _0x875e45.parseSei, _0x38df28 = _0x875e45.parseUserData, _0x5ef783 = _0x875e45.parseCaptionPackets, _0x3feb9c = _0x875e45.discardEmulationPreventionBytes, _0x51fe38 = _0x875e45.USER_DATA_REGISTERED_ITU_T_T35, _0x368012 = Object.freeze({
		'default': _0x875e45,
		'__moduleExports': _0x875e45,
		'parseSei': _0x336d87,
		'parseUserData': _0x38df28,
		'parseCaptionPackets': _0x5ef783,
		'discardEmulationPreventionBytes': _0x3feb9c,
		'USER_DATA_REGISTERED_ITU_T_T35': _0x51fe38
	}), _0x53e998 = _0x32fc03 && _0x23a4a1 || _0x32fc03, _0x7b5076 = _0x368012 && _0x875e45 || _0x368012, _0x27fc08 = function _0x27ca64() {
		_0x27ca64.prototype.init.call(this);
		this.captionPackets_ = [];
		this.ccStreams_ = [
			new _0x19b218(0, 0),
			new _0x19b218(0, 1),
			new _0x19b218(1, 0),
			new _0x19b218(1, 1)
		];
		this.reset();
		this.ccStreams_.forEach(function (_0x26520d) {
			_0x26520d.on('data', this.trigger.bind(this, 'data'));
			_0x26520d.on('done', this.trigger.bind(this, 'done'));
		}, this);
	};
	_0x27fc08.prototype = new _0x53e998();
	_0x27fc08.prototype.push = function (_0x32e115) {
		var _0x532f99, _0x2dbe55, _0x2d110d;
		if (_0x32e115.nalUnitType !== 'sei_rbsp') {
			return;
		}
		_0x532f99 = _0x7b5076.parseSei(_0x32e115.escapedRBSP);
		if (_0x532f99.payloadType !== _0x7b5076.USER_DATA_REGISTERED_ITU_T_T35) {
			return;
		}
		_0x2dbe55 = _0x7b5076.parseUserData(_0x532f99);
		if (!_0x2dbe55) {
			return;
		}
		if (_0x32e115.dts < this.latestDts_) {
			this.ignoreNextEqualDts_ = true;
			return;
		} else {
			if (_0x32e115.dts === this.latestDts_ && this.ignoreNextEqualDts_) {
				this.numSameDts_--;
				!this.numSameDts_ && (this.ignoreNextEqualDts_ = false);
				return;
			}
		}
		_0x2d110d = _0x7b5076.parseCaptionPackets(_0x32e115.pts, _0x2dbe55);
		this.captionPackets_ = this.captionPackets_.concat(_0x2d110d);
		this.latestDts_ !== _0x32e115.dts && (this.numSameDts_ = 0);
		this.numSameDts_++;
		this.latestDts_ = _0x32e115.dts;
	};
	_0x27fc08.prototype.flush = function () {
		if (!this.captionPackets_.length) {
			this.ccStreams_.forEach(function (_0x2b7fbf) {
				_0x2b7fbf.flush();
			}, this);
			return;
		}
		this.captionPackets_.forEach(function (_0x1d7c90, _0x22420b) {
			_0x1d7c90.presortIndex = _0x22420b;
		});
		this.captionPackets_.sort(function (_0xc5191, _0x1cdfc2) {
			if (_0xc5191.pts === _0x1cdfc2.pts) {
				return _0xc5191.presortIndex - _0x1cdfc2.presortIndex;
			}
			return _0xc5191.pts - _0x1cdfc2.pts;
		});
		this.captionPackets_.forEach(function (_0x512fc6) {
			_0x512fc6.type < 2 && this.dispatchCea608Packet(_0x512fc6);
		}, this);
		this.captionPackets_.length = 0;
		this.ccStreams_.forEach(function (_0x1f5443) {
			_0x1f5443.flush();
		}, this);
		return;
	};
	_0x27fc08.prototype.reset = function () {
		this.latestDts_ = null;
		this.ignoreNextEqualDts_ = false;
		this.numSameDts_ = 0;
		this.activeCea608Channel_ = [
			null,
			null
		];
		this.ccStreams_.forEach(function (_0x3c5f37) {
			_0x3c5f37.reset();
		});
	};
	_0x27fc08.prototype.dispatchCea608Packet = function (_0x4012fc) {
		if (this.setsChannel1Active(_0x4012fc)) {
			this.activeCea608Channel_[_0x4012fc.type] = 0;
		} else {
			this.setsChannel2Active(_0x4012fc) && (this.activeCea608Channel_[_0x4012fc.type] = 1);
		}
		if (this.activeCea608Channel_[_0x4012fc.type] === null) {
			return;
		}
		this.ccStreams_[(_0x4012fc.type << 1) + this.activeCea608Channel_[_0x4012fc.type]].push(_0x4012fc);
	};
	_0x27fc08.prototype.setsChannel1Active = function (_0x414367) {
		return (_0x414367.ccData & 30720) === 4096;
	};
	_0x27fc08.prototype.setsChannel2Active = function (_0x5a5133) {
		return (_0x5a5133.ccData & 30720) === 6144;
	};
	var _0x33d080 = function _0x1719c4(_0x35704c) {
		if (_0x35704c === null) {
			return '';
		}
		return _0x35704c = _0xc7d615[_0x35704c] || _0x35704c, String.fromCharCode(_0x35704c);
	}, _0x459214 = [
		4352,
		4384,
		4608,
		4640,
		5376,
		5408,
		5632,
		5664,
		5888,
		5920,
		4096,
		4864,
		4896,
		5120,
		5152
	], _0x107760 = function _0x2fc3e8() {
		var _0x2f8b74 = [], _0x53683b = 15;
		while (_0x53683b--) {
			_0x2f8b74.push('');
		}
		return _0x2f8b74;
	}, _0x19b218 = function _0x64bfde(_0x4a6198, _0x375c3a) {
		_0x64bfde.prototype.init.call(this);
		this.field_ = _0x4a6198 || 0;
		this.dataChannel_ = _0x375c3a || 0;
		this.name_ = 'CC' + ((this.field_ << 1 | this.dataChannel_) + 1);
		this.setConstants();
		this.reset();
		this.push = function (_0x5650b1) {
			var _0x411559, _0x386208, _0x49c914, _0x401fee, _0x1a059c;
			_0x411559 = _0x5650b1.ccData & 32639;
			if (_0x411559 === this.lastControlCode_) {
				this.lastControlCode_ = null;
				return;
			}
			if ((_0x411559 & 61440) === 4096) {
				this.lastControlCode_ = _0x411559;
			} else {
				_0x411559 !== this.PADDING_ && (this.lastControlCode_ = null);
			}
			_0x49c914 = _0x411559 >>> 8;
			_0x401fee = _0x411559 & 255;
			if (_0x411559 === this.PADDING_) {
				return;
			} else {
				if (_0x411559 === this.RESUME_CAPTION_LOADING_) {
					this.mode_ = 'popOn';
				} else {
					if (_0x411559 === this.END_OF_CAPTION_) {
						this.mode_ = 'popOn';
						this.clearFormatting(_0x5650b1.pts);
						this.flushDisplayed(_0x5650b1.pts);
						_0x386208 = this.displayed_;
						this.displayed_ = this.nonDisplayed_;
						this.nonDisplayed_ = _0x386208;
						this.startPts_ = _0x5650b1.pts;
					} else {
						if (_0x411559 === this.ROLL_UP_2_ROWS_) {
							this.rollUpRows_ = 2;
							this.setRollUp(_0x5650b1.pts);
						} else {
							if (_0x411559 === this.ROLL_UP_3_ROWS_) {
								this.rollUpRows_ = 3;
								this.setRollUp(_0x5650b1.pts);
							} else {
								if (_0x411559 === this.ROLL_UP_4_ROWS_) {
									this.rollUpRows_ = 4;
									this.setRollUp(_0x5650b1.pts);
								} else {
									if (_0x411559 === this.CARRIAGE_RETURN_) {
										this.clearFormatting(_0x5650b1.pts);
										this.flushDisplayed(_0x5650b1.pts);
										this.shiftRowsUp_();
										this.startPts_ = _0x5650b1.pts;
									} else {
										if (_0x411559 === this.BACKSPACE_) {
											this.mode_ === 'popOn' ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
										} else {
											if (_0x411559 === this.ERASE_DISPLAYED_MEMORY_) {
												this.flushDisplayed(_0x5650b1.pts);
												this.displayed_ = _0x107760();
											} else {
												if (_0x411559 === this.ERASE_NON_DISPLAYED_MEMORY_) {
													this.nonDisplayed_ = _0x107760();
												} else {
													if (_0x411559 === this.RESUME_DIRECT_CAPTIONING_) {
														if (this.mode_ !== 'paintOn') {
															this.flushDisplayed(_0x5650b1.pts);
															this.displayed_ = _0x107760();
														}
														this.mode_ = 'paintOn';
														this.startPts_ = _0x5650b1.pts;
													} else {
														if (this.isSpecialCharacter(_0x49c914, _0x401fee)) {
															_0x49c914 = (_0x49c914 & 3) << 8;
															_0x1a059c = _0x33d080(_0x49c914 | _0x401fee);
															this[this.mode_](_0x5650b1.pts, _0x1a059c);
															this.column_++;
														} else {
															if (this.isExtCharacter(_0x49c914, _0x401fee)) {
																this.mode_ === 'popOn' ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
																_0x49c914 = (_0x49c914 & 3) << 8;
																_0x1a059c = _0x33d080(_0x49c914 | _0x401fee);
																this[this.mode_](_0x5650b1.pts, _0x1a059c);
																this.column_++;
															} else {
																if (this.isMidRowCode(_0x49c914, _0x401fee)) {
																	this.clearFormatting(_0x5650b1.pts);
																	this[this.mode_](_0x5650b1.pts, ' ');
																	this.column_++;
																	(_0x401fee & 14) === 14 && this.addFormatting(_0x5650b1.pts, ['i']);
																	(_0x401fee & 1) === 1 && this.addFormatting(_0x5650b1.pts, ['u']);
																} else {
																	if (this.isOffsetControlCode(_0x49c914, _0x401fee)) {
																		this.column_ += _0x401fee & 3;
																	} else {
																		if (this.isPAC(_0x49c914, _0x401fee)) {
																			var _0x2049c7 = _0x459214.indexOf(_0x411559 & 7968);
																			this.mode_ === 'rollUp' && this.setRollUp(_0x5650b1.pts, _0x2049c7);
																			if (_0x2049c7 !== this.row_) {
																				this.clearFormatting(_0x5650b1.pts);
																				this.row_ = _0x2049c7;
																			}
																			_0x401fee & 1 && this.formatting_.indexOf('u') === -1 && this.addFormatting(_0x5650b1.pts, ['u']);
																			(_0x411559 & 16) === 16 && (this.column_ = ((_0x411559 & 14) >> 1) * 4);
																			this.isColorPAC(_0x401fee) && ((_0x401fee & 14) === 14 && this.addFormatting(_0x5650b1.pts, ['i']));
																		} else {
																			this.isNormalChar(_0x49c914) && (_0x401fee === 0 && (_0x401fee = null), _0x1a059c = _0x33d080(_0x49c914), _0x1a059c += _0x33d080(_0x401fee), this[this.mode_](_0x5650b1.pts, _0x1a059c), this.column_ += _0x1a059c.length);
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		};
	};
	_0x19b218.prototype = new _0x53e998();
	_0x19b218.prototype.flushDisplayed = function (_0xe79887) {
		var _0x45e740 = this.displayed_.map(function (_0x256cb4) {
			return _0x256cb4.trim();
		}).join('\n').replace(/^\n+|\n+$/g, '');
		_0x45e740.length && this.trigger('data', {
			'startPts': this.startPts_,
			'endPts': _0xe79887,
			'text': _0x45e740,
			'stream': this.name_
		});
	};
	_0x19b218.prototype.reset = function () {
		this.mode_ = 'popOn';
		this.topRow_ = 0;
		this.startPts_ = 0;
		this.displayed_ = _0x107760();
		this.nonDisplayed_ = _0x107760();
		this.lastControlCode_ = null;
		this.column_ = 0;
		this.row_ = 14;
		this.rollUpRows_ = 2;
		this.formatting_ = [];
	};
	_0x19b218.prototype.setConstants = function () {
		if (this.dataChannel_ === 0) {
			this.BASE_ = 16;
			this.EXT_ = 17;
			this.CONTROL_ = (20 | this.field_) << 8;
			this.OFFSET_ = 23;
		} else {
			if (this.dataChannel_ === 1) {
				this.BASE_ = 24;
				this.EXT_ = 25;
				this.CONTROL_ = (28 | this.field_) << 8;
				this.OFFSET_ = 31;
			}
		}
		this.PADDING_ = 0;
		this.RESUME_CAPTION_LOADING_ = this.CONTROL_ | 32;
		this.END_OF_CAPTION_ = this.CONTROL_ | 47;
		this.ROLL_UP_2_ROWS_ = this.CONTROL_ | 37;
		this.ROLL_UP_3_ROWS_ = this.CONTROL_ | 38;
		this.ROLL_UP_4_ROWS_ = this.CONTROL_ | 39;
		this.CARRIAGE_RETURN_ = this.CONTROL_ | 45;
		this.RESUME_DIRECT_CAPTIONING_ = this.CONTROL_ | 41;
		this.BACKSPACE_ = this.CONTROL_ | 33;
		this.ERASE_DISPLAYED_MEMORY_ = this.CONTROL_ | 44;
		this.ERASE_NON_DISPLAYED_MEMORY_ = this.CONTROL_ | 46;
	};
	_0x19b218.prototype.isSpecialCharacter = function (_0x4e24aa, _0x2b3af4) {
		return _0x4e24aa === this.EXT_ && _0x2b3af4 >= 48 && _0x2b3af4 <= 63;
	};
	_0x19b218.prototype.isExtCharacter = function (_0x800441, _0x113c7b) {
		return (_0x800441 === this.EXT_ + 1 || _0x800441 === this.EXT_ + 2) && _0x113c7b >= 32 && _0x113c7b <= 63;
	};
	_0x19b218.prototype.isMidRowCode = function (_0x582211, _0x148cd8) {
		return _0x582211 === this.EXT_ && _0x148cd8 >= 32 && _0x148cd8 <= 47;
	};
	_0x19b218.prototype.isOffsetControlCode = function (_0x1bebca, _0x1fdbf7) {
		return _0x1bebca === this.OFFSET_ && _0x1fdbf7 >= 33 && _0x1fdbf7 <= 35;
	};
	_0x19b218.prototype.isPAC = function (_0x48751e, _0x25ab85) {
		return _0x48751e >= this.BASE_ && _0x48751e < this.BASE_ + 8 && _0x25ab85 >= 64 && _0x25ab85 <= 127;
	};
	_0x19b218.prototype.isColorPAC = function (_0x4fefeb) {
		return _0x4fefeb >= 64 && _0x4fefeb <= 79 || _0x4fefeb >= 96 && _0x4fefeb <= 127;
	};
	_0x19b218.prototype.isNormalChar = function (_0x4a0ce8) {
		return _0x4a0ce8 >= 32 && _0x4a0ce8 <= 127;
	};
	_0x19b218.prototype.setRollUp = function (_0x3e3e8f, _0x19cceb) {
		if (this.mode_ !== 'rollUp') {
			this.row_ = _0x17d268;
			this.mode_ = 'rollUp';
			this.flushDisplayed(_0x3e3e8f);
			this.nonDisplayed_ = _0x107760();
			this.displayed_ = _0x107760();
		}
		if (_0x19cceb !== undefined && _0x19cceb !== this.row_) {
			for (var _0x3ce92a = 0; _0x3ce92a < this.rollUpRows_; _0x3ce92a++) {
				this.displayed_[_0x19cceb - _0x3ce92a] = this.displayed_[this.row_ - _0x3ce92a];
				this.displayed_[this.row_ - _0x3ce92a] = '';
			}
		}
		_0x19cceb === undefined && (_0x19cceb = this.row_);
		this.topRow_ = _0x19cceb - this.rollUpRows_ + 1;
	};
	_0x19b218.prototype.addFormatting = function (_0x474059, _0x23748e) {
		this.formatting_ = this.formatting_.concat(_0x23748e);
		var _0x3c0b25 = _0x23748e.reduce(function (_0x20355d, _0x533acf) {
			return _0x20355d + '<' + _0x533acf + '>';
		}, '');
		this[this.mode_](_0x474059, _0x3c0b25);
	};
	_0x19b218.prototype.clearFormatting = function (_0x3e91b5) {
		if (!this.formatting_.length) {
			return;
		}
		var _0x77547e = this.formatting_.reverse().reduce(function (_0x2e5768, _0x5ab807) {
			return _0x2e5768 + '</' + _0x5ab807 + '>';
		}, '');
		this.formatting_ = [];
		this[this.mode_](_0x3e91b5, _0x77547e);
	};
	_0x19b218.prototype.popOn = function (_0x505349, _0xfe63ee) {
		var _0x4b6e5c = this.nonDisplayed_[this.row_];
		_0x4b6e5c += _0xfe63ee;
		this.nonDisplayed_[this.row_] = _0x4b6e5c;
	};
	_0x19b218.prototype.rollUp = function (_0x255a92, _0x27389b) {
		var _0xac6c4a = this.displayed_[this.row_];
		_0xac6c4a += _0x27389b;
		this.displayed_[this.row_] = _0xac6c4a;
	};
	_0x19b218.prototype.shiftRowsUp_ = function () {
		var _0x352b5d;
		for (_0x352b5d = 0; _0x352b5d < this.topRow_; _0x352b5d++) {
			this.displayed_[_0x352b5d] = '';
		}
		for (_0x352b5d = this.row_ + 1; _0x352b5d < 15; _0x352b5d++) {
			this.displayed_[_0x352b5d] = '';
		}
		for (_0x352b5d = this.topRow_; _0x352b5d < this.row_; _0x352b5d++) {
			this.displayed_[_0x352b5d] = this.displayed_[_0x352b5d + 1];
		}
		this.displayed_[this.row_] = '';
	};
	_0x19b218.prototype.paintOn = function (_0x56c414, _0x973e71) {
		var _0x155112 = this.displayed_[this.row_];
		_0x155112 += _0x973e71;
		this.displayed_[this.row_] = _0x155112;
	};
	var _0x2cf107 = {
		'CaptionStream': _0x27fc08,
		'Cea608Stream': _0x19b218
	}, _0x36d9e1 = _0x2cf107.CaptionStream, _0x14cadb = _0x2cf107.Cea608Stream, _0x58af44 = Object.freeze({
		'default': _0x2cf107,
		'__moduleExports': _0x2cf107,
		'CaptionStream': _0x36d9e1,
		'Cea608Stream': _0x14cadb
	}), _0x58468e = _0x280b68.H264_STREAM_TYPE, _0x44ac2f = _0x280b68.ADTS_STREAM_TYPE, _0x1decc8 = _0x280b68.METADATA_STREAM_TYPE, _0x172089 = Object.freeze({
		'default': _0x280b68,
		'__moduleExports': _0x280b68,
		'H264_STREAM_TYPE': _0x58468e,
		'ADTS_STREAM_TYPE': _0x44ac2f,
		'METADATA_STREAM_TYPE': _0x1decc8
	}), _0x4110b9 = function _0x30aaa4(_0x5e2924, _0x36d652) {
		var _0x2a6d1f = 1;
		_0x5e2924 > _0x36d652 && (_0x2a6d1f = -1);
		while (Math.abs(_0x36d652 - _0x5e2924) > 4294967296) {
			_0x5e2924 += _0x2a6d1f * 8589934592;
		}
		return _0x5e2924;
	}, _0x1b0047 = function _0x30116a(_0x456d5f) {
		var _0x3644cf, _0x169235;
		_0x30116a.prototype.init.call(this);
		this.type_ = _0x456d5f;
		this.push = function (_0x4a4497) {
			if (_0x4a4497.type !== this.type_) {
				return;
			}
			_0x169235 === undefined && (_0x169235 = _0x4a4497.dts);
			_0x4a4497.dts = _0x4110b9(_0x4a4497.dts, _0x169235);
			_0x4a4497.pts = _0x4110b9(_0x4a4497.pts, _0x169235);
			_0x3644cf = _0x4a4497.dts;
			this.trigger('data', _0x4a4497);
		};
		this.flush = function () {
			_0x169235 = _0x3644cf;
			this.trigger('done');
		};
		this.discontinuity = function () {
			_0x169235 = void 0;
			_0x3644cf = void 0;
		};
	};
	_0x1b0047.prototype = new _0x53e998();
	var _0x159cfb = {
		'TimestampRolloverStream': _0x1b0047,
		'handleRollover': _0x4110b9
	}, _0xe8e755 = _0x159cfb.TimestampRolloverStream, _0x5842ea = _0x159cfb.handleRollover, _0x14bb1e = Object.freeze({
		'default': _0x159cfb,
		'__moduleExports': _0x159cfb,
		'TimestampRolloverStream': _0xe8e755,
		'handleRollover': _0x5842ea
	}), _0x16877c = _0x172089 && _0x280b68 || _0x172089, _0x3c16b8 = function _0x5ecab6(_0x59dfa2, _0x78201d, _0x2752d0) {
		var _0x2b1dfd, _0x3b584d = '';
		for (_0x2b1dfd = _0x78201d; _0x2b1dfd < _0x2752d0; _0x2b1dfd++) {
			_0x3b584d += '%' + ('00' + _0x59dfa2[_0x2b1dfd].toString(16)).slice(-2);
		}
		return _0x3b584d;
	}, _0x33e872 = function _0x108aa7(_0x56e58e, _0x38ef53, _0x1b0eb8) {
		return decodeURIComponent(_0x3c16b8(_0x56e58e, _0x38ef53, _0x1b0eb8));
	}, _0x5f5e3e = function _0x55e56b(_0x3f6aed, _0x4166e6, _0x19156a) {
		return unescape(_0x3c16b8(_0x3f6aed, _0x4166e6, _0x19156a));
	}, _0x42717b = function _0x294298(_0x4cb454) {
		return _0x4cb454[0] << 21 | _0x4cb454[1] << 14 | _0x4cb454[2] << 7 | _0x4cb454[3];
	}, _0x2e2d7a = {
		'TXXX': function _0x5b7582(_0x440908) {
			var _0x373d29;
			if (_0x440908.data[0] !== 3) {
				return;
			}
			for (_0x373d29 = 1; _0x373d29 < _0x440908.data.length; _0x373d29++) {
				if (_0x440908.data[_0x373d29] === 0) {
					_0x440908.description = _0x33e872(_0x440908.data, 1, _0x373d29);
					_0x440908.value = _0x33e872(_0x440908.data, _0x373d29 + 1, _0x440908.data.length).replace(/\0*$/, '');
					break;
				}
			}
			_0x440908.data = _0x440908.value;
		},
		'WXXX': function _0x3f260d(_0x4178dd) {
			var _0x4836e0;
			if (_0x4178dd.data[0] !== 3) {
				return;
			}
			for (_0x4836e0 = 1; _0x4836e0 < _0x4178dd.data.length; _0x4836e0++) {
				if (_0x4178dd.data[_0x4836e0] === 0) {
					_0x4178dd.description = _0x33e872(_0x4178dd.data, 1, _0x4836e0);
					_0x4178dd.url = _0x33e872(_0x4178dd.data, _0x4836e0 + 1, _0x4178dd.data.length);
					break;
				}
			}
		},
		'PRIV': function _0x5a95ae(_0x4a1449) {
			var _0x25fde2;
			for (_0x25fde2 = 0; _0x25fde2 < _0x4a1449.data.length; _0x25fde2++) {
				if (_0x4a1449.data[_0x25fde2] === 0) {
					_0x4a1449.owner = _0x5f5e3e(_0x4a1449.data, 0, _0x25fde2);
					break;
				}
			}
			_0x4a1449.privateData = _0x4a1449.data.subarray(_0x25fde2 + 1);
			_0x4a1449.data = _0x4a1449.privateData;
		}
	}, _0x209512;
	_0x209512 = function _0x27020e(_0x3def82) {
		var _0x42cafe = {
			'debug': !!(_0x3def82 && _0x3def82.debug),
			'descriptor': _0x3def82 && _0x3def82.descriptor
		}, _0x1ac977 = 0, _0xf42ee2 = [], _0x3cf28d = 0, _0x1d885d;
		_0x209512.prototype.init.call(this);
		this.dispatchType = _0x16877c.METADATA_STREAM_TYPE.toString(16);
		if (_0x42cafe.descriptor) {
			for (_0x1d885d = 0; _0x1d885d < _0x42cafe.descriptor.length; _0x1d885d++) {
				this.dispatchType += ('00' + _0x42cafe.descriptor[_0x1d885d].toString(16)).slice(-2);
			}
		}
		this.push = function (_0x4c79c4) {
			var _0x3ea882, _0x2c94db, _0x1a7d45, _0x3d5df5, _0x5d78d7, _0x5bb6bb;
			if (_0x4c79c4.type !== 'timed-metadata') {
				return;
			}
			_0x4c79c4.dataAlignmentIndicator && (_0x3cf28d = 0, _0xf42ee2.length = 0);
			if (_0xf42ee2.length === 0 && (_0x4c79c4.data.length < 10 || _0x4c79c4.data[0] !== 'I'.charCodeAt(0) || _0x4c79c4.data[1] !== 'D'.charCodeAt(0) || _0x4c79c4.data[2] !== '3'.charCodeAt(0))) {
				_0x42cafe.debug && console.log('Skipping unrecognized metadata packet');
				return;
			}
			_0xf42ee2.push(_0x4c79c4);
			_0x3cf28d += _0x4c79c4.data.byteLength;
			if (_0xf42ee2.length === 1) {
				_0x1ac977 = _0x42717b(_0x4c79c4.data.subarray(6, 10));
				_0x1ac977 += 10;
			}
			if (_0x3cf28d < _0x1ac977) {
				return;
			}
			_0x3ea882 = {
				'data': new Uint8Array(_0x1ac977),
				'frames': [],
				'pts': _0xf42ee2[0].pts,
				'dts': _0xf42ee2[0].dts
			};
			for (_0x5d78d7 = 0; _0x5d78d7 < _0x1ac977;) {
				_0x3ea882.data.set(_0xf42ee2[0].data.subarray(0, _0x1ac977 - _0x5d78d7), _0x5d78d7);
				_0x5d78d7 += _0xf42ee2[0].data.byteLength;
				_0x3cf28d -= _0xf42ee2[0].data.byteLength;
				_0xf42ee2.shift();
			}
			_0x2c94db = 10;
			if (_0x3ea882.data[5] & 64) {
				_0x2c94db += 4;
				_0x2c94db += _0x42717b(_0x3ea882.data.subarray(10, 14));
				_0x1ac977 -= _0x42717b(_0x3ea882.data.subarray(16, 20));
			}
			do {
				_0x1a7d45 = _0x42717b(_0x3ea882.data.subarray(_0x2c94db + 4, _0x2c94db + 8));
				if (_0x1a7d45 < 1) {
					return console.log('Malformed ID3 frame encountered. Skipping metadata parsing.');
				}
				_0x5bb6bb = String.fromCharCode(_0x3ea882.data[_0x2c94db], _0x3ea882.data[_0x2c94db + 1], _0x3ea882.data[_0x2c94db + 2], _0x3ea882.data[_0x2c94db + 3]);
				_0x3d5df5 = {
					'id': _0x5bb6bb,
					'data': _0x3ea882.data.subarray(_0x2c94db + 10, _0x2c94db + _0x1a7d45 + 10)
				};
				_0x3d5df5.key = _0x3d5df5.id;
				if (_0x2e2d7a[_0x3d5df5.id]) {
					_0x2e2d7a[_0x3d5df5.id](_0x3d5df5);
					if (_0x3d5df5.owner === 'com.apple.streaming.transportStreamTimestamp') {
						var _0x1525a3 = _0x3d5df5.data, _0xaddd0b = (_0x1525a3[3] & 1) << 30 | _0x1525a3[4] << 22 | _0x1525a3[5] << 14 | _0x1525a3[6] << 6 | _0x1525a3[7] >>> 2;
						_0xaddd0b *= 4;
						_0xaddd0b += _0x1525a3[7] & 3;
						_0x3d5df5.timeStamp = _0xaddd0b;
						_0x3ea882.pts === undefined && _0x3ea882.dts === undefined && (_0x3ea882.pts = _0x3d5df5.timeStamp, _0x3ea882.dts = _0x3d5df5.timeStamp);
						this.trigger('timestamp', _0x3d5df5);
					}
				}
				_0x3ea882.frames.push(_0x3d5df5);
				_0x2c94db += 10;
				_0x2c94db += _0x1a7d45;
			} while (_0x2c94db < _0x1ac977);
			this.trigger('data', _0x3ea882);
		};
	};
	_0x209512.prototype = new _0x53e998();
	var _0x2c7b75 = _0x209512, _0x3e6eca = Object.freeze({
		'default': _0x2c7b75,
		'__moduleExports': _0x2c7b75
	}), _0x2bfe2e = _0x58af44 && _0x2cf107 || _0x58af44, _0x26dc46 = _0x14bb1e && _0x159cfb || _0x14bb1e, _0x5f51c5 = _0x3e6eca && _0x2c7b75 || _0x3e6eca, _0x29d712 = _0x26dc46.TimestampRolloverStream, _0x245c9c, _0x38db6b, _0x2150a6;
	_0x245c9c = function _0x133d43() {
		var _0x1ff04a = new Uint8Array(188), _0xbcb4c5 = 0;
		_0x245c9c.prototype.init.call(this);
		this.push = function (_0x5273da) {
			var _0x5bddf3 = 0, _0x83697c = 188, _0x37e97f;
			_0xbcb4c5 ? (_0x37e97f = new Uint8Array(_0x5273da.byteLength + _0xbcb4c5), _0x37e97f.set(_0x1ff04a.subarray(0, _0xbcb4c5)), _0x37e97f.set(_0x5273da, _0xbcb4c5), _0xbcb4c5 = 0) : _0x37e97f = _0x5273da;
			while (_0x83697c < _0x37e97f.byteLength) {
				if (_0x37e97f[_0x5bddf3] === 71 && _0x37e97f[_0x83697c] === 71) {
					this.trigger('data', _0x37e97f.subarray(_0x5bddf3, _0x83697c));
					_0x5bddf3 += 188;
					_0x83697c += 188;
					continue;
				}
				_0x5bddf3++;
				_0x83697c++;
			}
			if (_0x5bddf3 < _0x37e97f.byteLength) {
				_0x1ff04a.set(_0x37e97f.subarray(_0x5bddf3), 0);
				_0xbcb4c5 = _0x37e97f.byteLength - _0x5bddf3;
			}
		};
		this.flush = function () {
			_0xbcb4c5 === 188 && _0x1ff04a[0] === 71 && (this.trigger('data', _0x1ff04a), _0xbcb4c5 = 0);
			this.trigger('done');
		};
	};
	_0x245c9c.prototype = new _0x53e998();
	_0x38db6b = function _0x29543a() {
		var _0x7d87f4, _0x1b1d33, _0x9ab45c, _0x17dcc3;
		_0x38db6b.prototype.init.call(this);
		_0x17dcc3 = this;
		this.packetsWaitingForPmt = [];
		this.programMapTable = undefined;
		_0x7d87f4 = function _0x5be103(_0x43c3db, _0x11c279) {
			var _0x344383 = 0;
			_0x11c279.payloadUnitStartIndicator && (_0x344383 += _0x43c3db[_0x344383] + 1);
			_0x11c279.type === 'pat' ? _0x1b1d33(_0x43c3db.subarray(_0x344383), _0x11c279) : _0x9ab45c(_0x43c3db.subarray(_0x344383), _0x11c279);
		};
		_0x1b1d33 = function _0xbac7d3(_0x28881c, _0x4f9bdf) {
			_0x4f9bdf.section_number = _0x28881c[7];
			_0x4f9bdf.last_section_number = _0x28881c[8];
			_0x17dcc3.pmtPid = (_0x28881c[10] & 31) << 8 | _0x28881c[11];
			_0x4f9bdf.pmtPid = _0x17dcc3.pmtPid;
		};
		_0x9ab45c = function _0x3fe0ae(_0x434c5a, _0x2f7b62) {
			var _0x58928a, _0x31b29d, _0x5eb379, _0x150908;
			if (!(_0x434c5a[5] & 1)) {
				return;
			}
			_0x17dcc3.programMapTable = {
				'video': null,
				'audio': null,
				'timed-metadata': {}
			};
			_0x58928a = (_0x434c5a[1] & 15) << 8 | _0x434c5a[2];
			_0x31b29d = 3 + _0x58928a - 4;
			_0x5eb379 = (_0x434c5a[10] & 15) << 8 | _0x434c5a[11];
			_0x150908 = 12 + _0x5eb379;
			while (_0x150908 < _0x31b29d) {
				var _0x1da84f = _0x434c5a[_0x150908], _0x579837 = (_0x434c5a[_0x150908 + 1] & 31) << 8 | _0x434c5a[_0x150908 + 2];
				if (_0x1da84f === _0x16877c.H264_STREAM_TYPE && _0x17dcc3.programMapTable.video === null) {
					_0x17dcc3.programMapTable.video = _0x579837;
				} else {
					if (_0x1da84f === _0x16877c.ADTS_STREAM_TYPE && _0x17dcc3.programMapTable.audio === null) {
						_0x17dcc3.programMapTable.audio = _0x579837;
					} else {
						_0x1da84f === _0x16877c.METADATA_STREAM_TYPE && (_0x17dcc3.programMapTable['timed-metadata'][_0x579837] = _0x1da84f);
					}
				}
				_0x150908 += ((_0x434c5a[_0x150908 + 3] & 15) << 8 | _0x434c5a[_0x150908 + 4]) + 5;
			}
			_0x2f7b62.programMapTable = _0x17dcc3.programMapTable;
		};
		this.push = function (_0x13f73d) {
			var _0x1bab47 = {
				payloadUnitStartIndicator: !!(_0x13f73d[1] & 64),
				pid: _0x13f73d[1] & 31,
				pid: 8,
				pid: _0x13f73d[2],
				type: 'pat',
				type: 'pmt'
			}, _0xd347a8 = 4;
			(_0x13f73d[3] & 48) >>> 4 > 1 && (_0xd347a8 += _0x13f73d[_0xd347a8] + 1);
			if (_0x1bab47.pid === 0) {
				_0x7d87f4(_0x13f73d.subarray(_0xd347a8), _0x1bab47);
				this.trigger('data', _0x1bab47);
			} else {
				if (_0x1bab47.pid === this.pmtPid) {
					_0x7d87f4(_0x13f73d.subarray(_0xd347a8), _0x1bab47);
					this.trigger('data', _0x1bab47);
					while (this.packetsWaitingForPmt.length) {
						this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
					}
				} else {
					this.programMapTable === undefined ? this.packetsWaitingForPmt.push([
						_0x13f73d,
						_0xd347a8,
						_0x1bab47
					]) : this.processPes_(_0x13f73d, _0xd347a8, _0x1bab47);
				}
			}
		};
		this.processPes_ = function (_0x1f912f, _0x2d9c66, _0x56034d) {
			if (_0x56034d.pid === this.programMapTable.video) {
				_0x56034d.streamType = _0x16877c.H264_STREAM_TYPE;
			} else {
				_0x56034d.pid === this.programMapTable.audio ? _0x56034d.streamType = _0x16877c.ADTS_STREAM_TYPE : _0x56034d.streamType = this.programMapTable['timed-metadata'][_0x56034d.pid];
			}
			_0x56034d.type = 'pes';
			_0x56034d.data = _0x1f912f.subarray(_0x2d9c66);
			this.trigger('data', _0x56034d);
		};
	};
	_0x38db6b.prototype = new _0x53e998();
	_0x38db6b.STREAM_TYPES = {
		'h264': 27,
		'adts': 15
	};
	_0x2150a6 = function _0x25c840() {
		var _0x20b7c2 = this, _0x3731e2 = {
			'data': [],
			'size': 0
		}, _0x57bfde = {
			'data': [],
			'size': 0
		}, _0x18b02c = {
			'data': [],
			'size': 0
		}, _0x541c23 = function _0x5daa55(_0x447bb3, _0x5063a6) {
			var _0x3592a4;
			_0x5063a6.packetLength = 6 + (_0x447bb3[4] << 8 | _0x447bb3[5]);
			_0x5063a6.dataAlignmentIndicator = (_0x447bb3[6] & 4) !== 0;
			_0x3592a4 = _0x447bb3[7];
			if (_0x3592a4 & 192) {
				_0x5063a6.pts = (_0x447bb3[9] & 14) << 27 | (_0x447bb3[10] & 255) << 20 | (_0x447bb3[11] & 254) << 12 | (_0x447bb3[12] & 255) << 5 | (_0x447bb3[13] & 254) >>> 3;
				_0x5063a6.pts *= 4;
				_0x5063a6.pts += (_0x447bb3[13] & 6) >>> 1;
				_0x5063a6.dts = _0x5063a6.pts;
				if (_0x3592a4 & 64) {
					_0x5063a6.dts = (_0x447bb3[14] & 14) << 27 | (_0x447bb3[15] & 255) << 20 | (_0x447bb3[16] & 254) << 12 | (_0x447bb3[17] & 255) << 5 | (_0x447bb3[18] & 254) >>> 3;
					_0x5063a6.dts *= 4;
					_0x5063a6.dts += (_0x447bb3[18] & 6) >>> 1;
				}
			}
			_0x5063a6.data = _0x447bb3.subarray(9 + _0x447bb3[8]);
		}, _0x2d8e30 = function _0x407119(_0x509a75, _0x5e1a7c, _0x4d5fd9) {
			var _0x70edb0 = new Uint8Array(_0x509a75.size), _0xb2f86c = { 'type': _0x5e1a7c }, _0xbd9569 = 0, _0x467489 = 0, _0x3f8001 = false, _0x4ec1be;
			if (!_0x509a75.data.length || _0x509a75.size < 9) {
				return;
			}
			_0xb2f86c.trackId = _0x509a75.data[0].pid;
			for (_0xbd9569 = 0; _0xbd9569 < _0x509a75.data.length; _0xbd9569++) {
				_0x4ec1be = _0x509a75.data[_0xbd9569];
				_0x70edb0.set(_0x4ec1be.data, _0x467489);
				_0x467489 += _0x4ec1be.data.byteLength;
			}
			_0x541c23(_0x70edb0, _0xb2f86c);
			_0x3f8001 = _0x5e1a7c === 'video' || _0xb2f86c.packetLength <= _0x509a75.size;
			(_0x4d5fd9 || _0x3f8001) && (_0x509a75.size = 0, _0x509a75.data.length = 0);
			_0x3f8001 && _0x20b7c2.trigger('data', _0xb2f86c);
		};
		_0x2150a6.prototype.init.call(this);
		this.push = function (_0x1d7319) {
			({
				'pat': function _0x1116ec() {
				},
				'pes': function _0x3a3ad5() {
					var _0x2832d0, _0x3cce68;
					switch (_0x1d7319.streamType) {
						case _0x16877c.H264_STREAM_TYPE:
						case _0x16877c.H264_STREAM_TYPE:
							_0x2832d0 = _0x3731e2, _0x3cce68 = 'video';
							break;
						case _0x16877c.ADTS_STREAM_TYPE:
							_0x2832d0 = _0x57bfde, _0x3cce68 = 'audio';
							break;
						case _0x16877c.METADATA_STREAM_TYPE:
							_0x2832d0 = _0x18b02c, _0x3cce68 = 'timed-metadata';
							break;
						default:
							return;
					}
					_0x1d7319.payloadUnitStartIndicator && _0x2d8e30(_0x2832d0, _0x3cce68, true);
					_0x2832d0.data.push(_0x1d7319);
					_0x2832d0.size += _0x1d7319.data.byteLength;
				},
				'pmt': function _0x48b7a5() {
					var _0x1b6719 = {
						'type': 'metadata',
						'tracks': []
					}, _0x570a27 = _0x1d7319.programMapTable;
					_0x570a27.video !== null && _0x1b6719.tracks.push({
						'timelineStartInfo': { 'baseMediaDecodeTime': 0 },
						'id': +_0x570a27.video,
						'codec': 'avc',
						'type': 'video'
					});
					_0x570a27.audio !== null && _0x1b6719.tracks.push({
						'timelineStartInfo': { 'baseMediaDecodeTime': 0 },
						'id': +_0x570a27.audio,
						'codec': 'adts',
						'type': 'audio'
					});
					_0x20b7c2.trigger('data', _0x1b6719);
				}
			}[_0x1d7319.type]());
		};
		this.flush = function () {
			_0x2d8e30(_0x3731e2, 'video');
			_0x2d8e30(_0x57bfde, 'audio');
			_0x2d8e30(_0x18b02c, 'timed-metadata');
			this.trigger('done');
		};
	};
	_0x2150a6.prototype = new _0x53e998();
	var _0x3de99e = {
		'PAT_PID': 0,
		'MP2T_PACKET_LENGTH': 188,
		'TransportPacketStream': _0x245c9c,
		'TransportParseStream': _0x38db6b,
		'ElementaryStream': _0x2150a6,
		'TimestampRolloverStream': _0x29d712,
		'CaptionStream': _0x2bfe2e.CaptionStream,
		'Cea608Stream': _0x2bfe2e.Cea608Stream,
		'MetadataStream': _0x5f51c5
	};
	for (var _0x1ce4d4 in _0x16877c) {
		_0x16877c.hasOwnProperty(_0x1ce4d4) && (_0x3de99e[_0x1ce4d4] = _0x16877c[_0x1ce4d4]);
	}
	var _0x40d430 = _0x3de99e, _0x22259e = Object.freeze({
		'default': _0x40d430,
		'__moduleExports': _0x40d430
	}), _0x3d41c8, _0x16de10 = [
		96000,
		88200,
		64000,
		48000,
		44100,
		32000,
		24000,
		22050,
		16000,
		12000,
		11025,
		8000,
		7350
	];
	_0x3d41c8 = function _0x1c2d63() {
		var _0x4bab99;
		_0x3d41c8.prototype.init.call(this);
		this.push = function (_0x4f0359) {
			var _0x11d510 = 0, _0x1416a3 = 0, _0x117511, _0x5196c3, _0x20c4bb, _0x59e3d0, _0x1e2c63, _0x2a4b9c;
			if (_0x4f0359.type !== 'audio') {
				return;
			}
			_0x4bab99 ? (_0x59e3d0 = _0x4bab99, _0x4bab99 = new Uint8Array(_0x59e3d0.byteLength + _0x4f0359.data.byteLength), _0x4bab99.set(_0x59e3d0), _0x4bab99.set(_0x4f0359.data, _0x59e3d0.byteLength)) : _0x4bab99 = _0x4f0359.data;
			while (_0x11d510 + 5 < _0x4bab99.length) {
				if (_0x4bab99[_0x11d510] !== 255 || (_0x4bab99[_0x11d510 + 1] & 246) !== 240) {
					_0x11d510++;
					continue;
				}
				_0x5196c3 = (~_0x4bab99[_0x11d510 + 1] & 1) * 2;
				_0x117511 = (_0x4bab99[_0x11d510 + 3] & 3) << 11 | _0x4bab99[_0x11d510 + 4] << 3 | (_0x4bab99[_0x11d510 + 5] & 224) >> 5;
				_0x1e2c63 = ((_0x4bab99[_0x11d510 + 6] & 3) + 1) * 1024;
				_0x2a4b9c = _0x1e2c63 * 90000 / _0x16de10[(_0x4bab99[_0x11d510 + 2] & 60) >>> 2];
				_0x20c4bb = _0x11d510 + _0x117511;
				if (_0x4bab99.byteLength < _0x20c4bb) {
					return;
				}
				this.trigger('data', {
					'pts': _0x4f0359.pts + _0x1416a3 * _0x2a4b9c,
					'dts': _0x4f0359.dts + _0x1416a3 * _0x2a4b9c,
					'sampleCount': _0x1e2c63,
					'audioobjecttype': (_0x4bab99[_0x11d510 + 2] >>> 6 & 3) + 1,
					'channelcount': (_0x4bab99[_0x11d510 + 2] & 1) << 2 | (_0x4bab99[_0x11d510 + 3] & 192) >>> 6,
					'samplerate': _0x16de10[(_0x4bab99[_0x11d510 + 2] & 60) >>> 2],
					'samplingfrequencyindex': (_0x4bab99[_0x11d510 + 2] & 60) >>> 2,
					'samplesize': 16,
					'data': _0x4bab99.subarray(_0x11d510 + 7 + _0x5196c3, _0x20c4bb)
				});
				if (_0x4bab99.byteLength === _0x20c4bb) {
					_0x4bab99 = undefined;
					return;
				}
				_0x1416a3++;
				_0x4bab99 = _0x4bab99.subarray(_0x20c4bb);
			}
		};
		this.flush = function () {
			this.trigger('done');
		};
	};
	_0x3d41c8.prototype = new _0x53e998();
	var _0xe6c19b = _0x3d41c8, _0x299848 = Object.freeze({
		'default': _0xe6c19b,
		'__moduleExports': _0xe6c19b
	}), _0x1fd232;
	_0x1fd232 = function _0x26fd67(_0x3ea889) {
		var _0x298b7c = _0x3ea889.byteLength, _0xc11e42 = 0, _0x1def99 = 0;
		this.length = function () {
			return 8 * _0x298b7c;
		};
		this.bitsAvailable = function () {
			return 8 * _0x298b7c + _0x1def99;
		};
		this.loadWord = function () {
			var _0x318fb3 = _0x3ea889.byteLength - _0x298b7c, _0x621c31 = new Uint8Array(4), _0xf1ae85 = Math.min(4, _0x298b7c);
			if (_0xf1ae85 === 0) {
				throw new Error('no bytes available');
			}
			_0x621c31.set(_0x3ea889.subarray(_0x318fb3, _0x318fb3 + _0xf1ae85));
			_0xc11e42 = new DataView(_0x621c31.buffer).getUint32(0);
			_0x1def99 = _0xf1ae85 * 8;
			_0x298b7c -= _0xf1ae85;
		};
		this.skipBits = function (_0x21e03e) {
			var _0x42100c;
			_0x1def99 > _0x21e03e ? (_0xc11e42 <<= _0x21e03e, _0x1def99 -= _0x21e03e) : (_0x21e03e -= _0x1def99, _0x42100c = Math.floor(_0x21e03e / 8), _0x21e03e -= _0x42100c * 8, _0x298b7c -= _0x42100c, this.loadWord(), _0xc11e42 <<= _0x21e03e, _0x1def99 -= _0x21e03e);
		};
		this.readBits = function (_0x1a498c) {
			var _0x200da6 = Math.min(_0x1def99, _0x1a498c), _0x2e1915 = _0xc11e42 >>> 32 - _0x200da6;
			_0x1def99 -= _0x200da6;
			if (_0x1def99 > 0) {
				_0xc11e42 <<= _0x200da6;
			} else {
				_0x298b7c > 0 && this.loadWord();
			}
			_0x200da6 = _0x1a498c - _0x200da6;
			if (_0x200da6 > 0) {
				return _0x2e1915 << _0x200da6 | this.readBits(_0x200da6);
			}
			return _0x2e1915;
		};
		this.skipLeadingZeros = function () {
			var _0x2f59e8;
			for (_0x2f59e8 = 0; _0x2f59e8 < _0x1def99; ++_0x2f59e8) {
				if ((_0xc11e42 & 2147483648 >>> _0x2f59e8) !== 0) {
					return _0xc11e42 <<= _0x2f59e8, _0x1def99 -= _0x2f59e8, _0x2f59e8;
				}
			}
			return this.loadWord(), _0x2f59e8 + this.skipLeadingZeros();
		};
		this.skipUnsignedExpGolomb = function () {
			this.skipBits(1 + this.skipLeadingZeros());
		};
		this.skipExpGolomb = function () {
			this.skipBits(1 + this.skipLeadingZeros());
		};
		this.readUnsignedExpGolomb = function () {
			var _0x489a48 = this.skipLeadingZeros();
			return this.readBits(_0x489a48 + 1) - 1;
		};
		this.readExpGolomb = function () {
			var _0x5a51de = this.readUnsignedExpGolomb();
			if (1 & _0x5a51de) {
				return 1 + _0x5a51de >>> 1;
			}
			return -1 * (_0x5a51de >>> 1);
		};
		this.readBoolean = function () {
			return this.readBits(1) === 1;
		};
		this.readUnsignedByte = function () {
			return this.readBits(8);
		};
		this.loadWord();
	};
	var _0x1919c8 = _0x1fd232, _0x56f1e0 = Object.freeze({
		'default': _0x1919c8,
		'__moduleExports': _0x1919c8
	}), _0x2a4db9 = _0x56f1e0 && _0x1919c8 || _0x56f1e0, _0x15cc7f, _0x47dc81, _0x66a9c;
	_0x47dc81 = function _0x5ab33d() {
		var _0x421f22 = 0, _0xb2e3ac, _0x4382b4;
		_0x47dc81.prototype.init.call(this);
		this.push = function (_0x12961d) {
			var _0x104a57;
			!_0x4382b4 ? _0x4382b4 = _0x12961d.data : (_0x104a57 = new Uint8Array(_0x4382b4.byteLength + _0x12961d.data.byteLength), _0x104a57.set(_0x4382b4), _0x104a57.set(_0x12961d.data, _0x4382b4.byteLength), _0x4382b4 = _0x104a57);
			for (; _0x421f22 < _0x4382b4.byteLength - 3; _0x421f22++) {
				if (_0x4382b4[_0x421f22 + 2] === 1) {
					_0xb2e3ac = _0x421f22 + 5;
					break;
				}
			}
			while (_0xb2e3ac < _0x4382b4.byteLength) {
				switch (_0x4382b4[_0xb2e3ac]) {
					case 0:
						if (_0x4382b4[_0xb2e3ac - 1] !== 0) {
							_0xb2e3ac += 2;
							break;
						} else {
							if (_0x4382b4[_0xb2e3ac - 2] !== 0) {
								_0xb2e3ac++;
								break;
							}
						}
						_0x421f22 + 3 !== _0xb2e3ac - 2 && this.trigger('data', _0x4382b4.subarray(_0x421f22 + 3, _0xb2e3ac - 2));
						do {
							_0xb2e3ac++;
						} while (_0x4382b4[_0xb2e3ac] !== 1 && _0xb2e3ac < _0x4382b4.length);
						_0x421f22 = _0xb2e3ac - 2, _0xb2e3ac += 3;
						break;
					case 1:
						if (_0x4382b4[_0xb2e3ac - 1] !== 0 || _0x4382b4[_0xb2e3ac - 2] !== 0) {
							_0xb2e3ac += 3;
							break;
						}
						this.trigger('data', _0x4382b4.subarray(_0x421f22 + 3, _0xb2e3ac - 2)), _0x421f22 = _0xb2e3ac - 2, _0xb2e3ac += 3;
						break;
					default:
						_0xb2e3ac += 3;
						break;
				}
			}
			_0x4382b4 = _0x4382b4.subarray(_0x421f22);
			_0xb2e3ac -= _0x421f22;
			_0x421f22 = 0;
		};
		this.flush = function () {
			_0x4382b4 && _0x4382b4.byteLength > 3 && this.trigger('data', _0x4382b4.subarray(_0x421f22 + 3));
			_0x4382b4 = null;
			_0x421f22 = 0;
			this.trigger('done');
		};
	};
	_0x47dc81.prototype = new _0x53e998();
	_0x66a9c = {
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
	_0x15cc7f = function _0x258f28() {
		var _0x627155 = new _0x47dc81(), _0x4bf751, _0x401bfb, _0x53592a, _0x5c6f42, _0x47f1a5, _0x54e1be, _0x20389b;
		_0x15cc7f.prototype.init.call(this);
		_0x4bf751 = this;
		this.push = function (_0x2acce2) {
			if (_0x2acce2.type !== 'video') {
				return;
			}
			_0x401bfb = _0x2acce2.trackId;
			_0x53592a = _0x2acce2.pts;
			_0x5c6f42 = _0x2acce2.dts;
			_0x627155.push(_0x2acce2);
		};
		_0x627155.on('data', function (_0xebb1e3) {
			var _0x68865f = {
				'trackId': _0x401bfb,
				'pts': _0x53592a,
				'dts': _0x5c6f42,
				'data': _0xebb1e3
			};
			switch (_0xebb1e3[0] & 31) {
				case 5:
					_0x68865f.nalUnitType = 'slice_layer_without_partitioning_rbsp_idr';
					break;
				case 6:
					_0x68865f.nalUnitType = 'sei_rbsp', _0x68865f.escapedRBSP = _0x47f1a5(_0xebb1e3.subarray(1));
					break;
				case 7:
					_0x68865f.nalUnitType = 'seq_parameter_set_rbsp', _0x68865f.escapedRBSP = _0x47f1a5(_0xebb1e3.subarray(1)), _0x68865f.config = _0x54e1be(_0x68865f.escapedRBSP);
					break;
				case 8:
					_0x68865f.nalUnitType = 'pic_parameter_set_rbsp';
					break;
				case 9:
					_0x68865f.nalUnitType = 'access_unit_delimiter_rbsp';
					break;
				default:
					break;
			}
			_0x4bf751.trigger('data', _0x68865f);
		});
		_0x627155.on('done', function () {
			_0x4bf751.trigger('done');
		});
		this.flush = function () {
			_0x627155.flush();
		};
		_0x20389b = function _0x9edcad(_0x5160cf, _0x49eae9) {
			var _0xdf428c = 8, _0x19642e = 8, _0x528299, _0x497822;
			for (_0x528299 = 0; _0x528299 < _0x5160cf; _0x528299++) {
				if (_0x19642e !== 0) {
					_0x497822 = _0x49eae9.readExpGolomb();
					_0x19642e = (_0xdf428c + _0x497822 + 256) % 256;
				}
				_0xdf428c = _0x19642e === 0 ? _0xdf428c : _0x19642e;
			}
		};
		_0x47f1a5 = function _0x533c3d(_0xf343e) {
			var _0x458718 = _0xf343e.byteLength, _0x214086 = [], _0x40f730 = 1, _0x2d2838, _0x96a974;
			while (_0x40f730 < _0x458718 - 2) {
				_0xf343e[_0x40f730] === 0 && _0xf343e[_0x40f730 + 1] === 0 && _0xf343e[_0x40f730 + 2] === 3 ? (_0x214086.push(_0x40f730 + 2), _0x40f730 += 2) : _0x40f730++;
			}
			if (_0x214086.length === 0) {
				return _0xf343e;
			}
			_0x2d2838 = _0x458718 - _0x214086.length;
			_0x96a974 = new Uint8Array(_0x2d2838);
			var _0x52b838 = 0;
			for (_0x40f730 = 0; _0x40f730 < _0x2d2838; _0x52b838++, _0x40f730++) {
				if (_0x52b838 === _0x214086[0]) {
					_0x52b838++;
					_0x214086.shift();
				}
				_0x96a974[_0x40f730] = _0xf343e[_0x52b838];
			}
			return _0x96a974;
		};
		_0x54e1be = function _0xb6d955(_0x11e762) {
			var _0x443030 = 0, _0xad5044 = 0, _0x180dd0 = 0, _0x361515 = 0, _0x4b8845 = 1, _0x53fbf4, _0xff062d, _0x305506, _0x1cefe6, _0x2d8af3, _0x33f0d1, _0x500e1c, _0x4b522f, _0x196e2c, _0x498026, _0x381932, _0x2051d7, _0x35ef1d, _0x540cad;
			_0x53fbf4 = new _0x2a4db9(_0x11e762);
			_0xff062d = _0x53fbf4.readUnsignedByte();
			_0x1cefe6 = _0x53fbf4.readUnsignedByte();
			_0x305506 = _0x53fbf4.readUnsignedByte();
			_0x53fbf4.skipUnsignedExpGolomb();
			if (_0x66a9c[_0xff062d]) {
				_0x2d8af3 = _0x53fbf4.readUnsignedExpGolomb();
				_0x2d8af3 === 3 && _0x53fbf4.skipBits(1);
				_0x53fbf4.skipUnsignedExpGolomb();
				_0x53fbf4.skipUnsignedExpGolomb();
				_0x53fbf4.skipBits(1);
				if (_0x53fbf4.readBoolean()) {
					_0x381932 = _0x2d8af3 !== 3 ? 8 : 12;
					for (_0x540cad = 0; _0x540cad < _0x381932; _0x540cad++) {
						_0x53fbf4.readBoolean() && (_0x540cad < 6 ? _0x20389b(16, _0x53fbf4) : _0x20389b(64, _0x53fbf4));
					}
				}
			}
			_0x53fbf4.skipUnsignedExpGolomb();
			_0x33f0d1 = _0x53fbf4.readUnsignedExpGolomb();
			if (_0x33f0d1 === 0) {
				_0x53fbf4.readUnsignedExpGolomb();
			} else {
				if (_0x33f0d1 === 1) {
					_0x53fbf4.skipBits(1);
					_0x53fbf4.skipExpGolomb();
					_0x53fbf4.skipExpGolomb();
					_0x500e1c = _0x53fbf4.readUnsignedExpGolomb();
					for (_0x540cad = 0; _0x540cad < _0x500e1c; _0x540cad++) {
						_0x53fbf4.skipExpGolomb();
					}
				}
			}
			_0x53fbf4.skipUnsignedExpGolomb();
			_0x53fbf4.skipBits(1);
			_0x4b522f = _0x53fbf4.readUnsignedExpGolomb();
			_0x196e2c = _0x53fbf4.readUnsignedExpGolomb();
			_0x498026 = _0x53fbf4.readBits(1);
			_0x498026 === 0 && _0x53fbf4.skipBits(1);
			_0x53fbf4.skipBits(1);
			_0x53fbf4.readBoolean() && (_0x443030 = _0x53fbf4.readUnsignedExpGolomb(), _0xad5044 = _0x53fbf4.readUnsignedExpGolomb(), _0x180dd0 = _0x53fbf4.readUnsignedExpGolomb(), _0x361515 = _0x53fbf4.readUnsignedExpGolomb());
			if (_0x53fbf4.readBoolean()) {
				if (_0x53fbf4.readBoolean()) {
					_0x35ef1d = _0x53fbf4.readUnsignedByte();
					switch (_0x35ef1d) {
						case 1:
							_0x2051d7 = [
								1,
								1
							];
							break;
						case 2:
							_0x2051d7 = [
								12,
								11
							];
							break;
						case 3:
							_0x2051d7 = [
								10,
								11
							];
							break;
						case 4:
							_0x2051d7 = [
								16,
								11
							];
							break;
						case 5:
							_0x2051d7 = [
								40,
								33
							];
							break;
						case 6:
							_0x2051d7 = [
								24,
								11
							];
							break;
						case 7:
							_0x2051d7 = [
								20,
								11
							];
							break;
						case 8:
							_0x2051d7 = [
								32,
								11
							];
							break;
						case 9:
							_0x2051d7 = [
								80,
								33
							];
							break;
						case 10:
							_0x2051d7 = [
								18,
								11
							];
							break;
						case 11:
							_0x2051d7 = [
								15,
								11
							];
							break;
						case 12:
							_0x2051d7 = [
								64,
								33
							];
							break;
						case 13:
							_0x2051d7 = [
								160,
								99
							];
							break;
						case 14:
							_0x2051d7 = [
								4,
								3
							];
							break;
						case 15:
							_0x2051d7 = [
								3,
								2
							];
							break;
						case 16:
							_0x2051d7 = [
								2,
								1
							];
							break;
						case 255: {
							_0x2051d7 = [
								_0x53fbf4.readUnsignedByte() << 8 | _0x53fbf4.readUnsignedByte(),
								_0x53fbf4.readUnsignedByte() << 8 | _0x53fbf4.readUnsignedByte()
							];
							break;
						}
					}
					_0x2051d7 && (_0x4b8845 = _0x2051d7[0] / _0x2051d7[1]);
				}
			}
			return {
				'profileIdc': _0xff062d,
				'levelIdc': _0x305506,
				'profileCompatibility': _0x1cefe6,
				'width': Math.ceil(((_0x4b522f + 1) * 16 - _0x443030 * 2 - _0xad5044 * 2) * _0x4b8845),
				'height': (2 - _0x498026) * (_0x196e2c + 1) * 16 - _0x180dd0 * 2 - _0x361515 * 2
			};
		};
	};
	_0x15cc7f.prototype = new _0x53e998();
	var _0x1a768e = {
		'H264Stream': _0x15cc7f,
		'NalByteStream': _0x47dc81
	}, _0x194734 = _0x1a768e.H264Stream, _0x3bae57 = _0x1a768e.NalByteStream, _0xbed31a = Object.freeze({
		'default': _0x1a768e,
		'__moduleExports': _0x1a768e,
		'H264Stream': _0x194734,
		'NalByteStream': _0x3bae57
	}), _0x316826;
	_0x316826 = function _0x175daf() {
		var _0x4c115e = new Uint8Array(), _0x3008e1 = 0;
		_0x316826.prototype.init.call(this);
		this.setTimestamp = function (_0x53cfde) {
			_0x3008e1 = _0x53cfde;
		};
		this.parseId3TagSize = function (_0x2e3c28, _0x897ec2) {
			var _0x43cd9c = _0x2e3c28[_0x897ec2 + 6] << 21 | _0x2e3c28[_0x897ec2 + 7] << 14 | _0x2e3c28[_0x897ec2 + 8] << 7 | _0x2e3c28[_0x897ec2 + 9], _0x596132 = _0x2e3c28[_0x897ec2 + 5], _0x427696 = (_0x596132 & 16) >> 4;
			if (_0x427696) {
				return _0x43cd9c + 20;
			}
			return _0x43cd9c + 10;
		};
		this.parseAdtsSize = function (_0x196647, _0x5df3be) {
			var _0x3199f0 = (_0x196647[_0x5df3be + 5] & 224) >> 5, _0x246651 = _0x196647[_0x5df3be + 4] << 3, _0x3a9651 = _0x196647[_0x5df3be + 3] & 3 << 11;
			return _0x3a9651 | _0x246651 | _0x3199f0;
		};
		this.push = function (_0xc033b0) {
			var _0x16d575 = 0, _0x263869 = 0, _0x2ea291, _0x347737, _0x48e125, _0x19d30f;
			_0x4c115e.length ? (_0x19d30f = _0x4c115e.length, _0x4c115e = new Uint8Array(_0xc033b0.byteLength + _0x19d30f), _0x4c115e.set(_0x4c115e.subarray(0, _0x19d30f)), _0x4c115e.set(_0xc033b0, _0x19d30f)) : _0x4c115e = _0xc033b0;
			while (_0x4c115e.length - _0x263869 >= 3) {
				if (_0x4c115e[_0x263869] === 'I'.charCodeAt(0) && _0x4c115e[_0x263869 + 1] === 'D'.charCodeAt(0) && _0x4c115e[_0x263869 + 2] === '3'.charCodeAt(0)) {
					if (_0x4c115e.length - _0x263869 < 10) {
						break;
					}
					_0x16d575 = this.parseId3TagSize(_0x4c115e, _0x263869);
					if (_0x16d575 > _0x4c115e.length) {
						break;
					}
					_0x347737 = {
						'type': 'timed-metadata',
						'data': _0x4c115e.subarray(_0x263869, _0x263869 + _0x16d575)
					};
					this.trigger('data', _0x347737);
					_0x263869 += _0x16d575;
					continue;
				} else {
					if (_0x4c115e[_0x263869] & true && (_0x4c115e[_0x263869 + 1] & 240) === 240) {
						if (_0x4c115e.length - _0x263869 < 7) {
							break;
						}
						_0x16d575 = this.parseAdtsSize(_0x4c115e, _0x263869);
						if (_0x16d575 > _0x4c115e.length) {
							break;
						}
						_0x48e125 = {
							'type': 'audio',
							'data': _0x4c115e.subarray(_0x263869, _0x263869 + _0x16d575),
							'pts': _0x3008e1,
							'dts': _0x3008e1
						};
						this.trigger('data', _0x48e125);
						_0x263869 += _0x16d575;
						continue;
					}
				}
				_0x263869++;
			}
			_0x2ea291 = _0x4c115e.length - _0x263869;
			_0x2ea291 > 0 ? _0x4c115e = _0x4c115e.subarray(_0x263869) : _0x4c115e = new Uint8Array();
		};
	};
	_0x316826.prototype = new _0x53e998();
	var _0x473abe = _0x316826, _0x403097 = Object.freeze({
		'default': _0x473abe,
		'__moduleExports': _0x473abe
	}), _0x5ce262 = [
		33,
		16,
		5,
		32,
		164,
		27
	], _0x47bd0c = [
		33,
		65,
		108,
		84,
		1,
		2,
		4,
		8,
		168,
		2,
		4,
		8,
		17,
		191,
		252
	], _0x2a86d1 = function _0x7373a7(_0x14b840) {
		var _0x1ad7c5 = [];
		while (_0x14b840--) {
			_0x1ad7c5.push(0);
		}
		return _0x1ad7c5;
	}, _0x3eb411 = function _0x56ca94(_0x3378b7) {
		return Object.keys(_0x3378b7).reduce(function (_0xe334de, _0xa14065) {
			return _0xe334de[_0xa14065] = new Uint8Array(_0x3378b7[_0xa14065].reduce(function (_0x4eb31e, _0x34cb1f) {
				return _0x4eb31e.concat(_0x34cb1f);
			}, [])), _0xe334de;
		}, {});
	}, _0x1131d6 = {
		96000: [
			_0x5ce262,
			[
				227,
				64
			],
			_0x2a86d1(154),
			[56]
		],
		88200: [
			_0x5ce262,
			[231],
			_0x2a86d1(170),
			[56]
		],
		64000: [
			_0x5ce262,
			[
				248,
				192
			],
			_0x2a86d1(240),
			[56]
		],
		48000: [
			_0x5ce262,
			[
				255,
				192
			],
			_0x2a86d1(268),
			[
				55,
				148,
				128
			],
			_0x2a86d1(54),
			[112]
		],
		44100: [
			_0x5ce262,
			[
				255,
				192
			],
			_0x2a86d1(268),
			[
				55,
				163,
				128
			],
			_0x2a86d1(84),
			[112]
		],
		32000: [
			_0x5ce262,
			[
				255,
				192
			],
			_0x2a86d1(268),
			[
				55,
				234
			],
			_0x2a86d1(226),
			[112]
		],
		24000: [
			_0x5ce262,
			[
				255,
				192
			],
			_0x2a86d1(268),
			[
				55,
				255,
				128
			],
			_0x2a86d1(268),
			[
				111,
				112
			],
			_0x2a86d1(126),
			[224]
		],
		16000: [
			_0x5ce262,
			[
				255,
				192
			],
			_0x2a86d1(268),
			[
				55,
				255,
				128
			],
			_0x2a86d1(268),
			[
				111,
				255
			],
			_0x2a86d1(269),
			[
				223,
				108
			],
			_0x2a86d1(195),
			[
				1,
				192
			]
		],
		12000: [
			_0x47bd0c,
			_0x2a86d1(268),
			[
				3,
				127,
				248
			],
			_0x2a86d1(268),
			[
				6,
				255,
				240
			],
			_0x2a86d1(268),
			[
				13,
				255,
				224
			],
			_0x2a86d1(268),
			[
				27,
				253,
				128
			],
			_0x2a86d1(259),
			[56]
		],
		11025: [
			_0x47bd0c,
			_0x2a86d1(268),
			[
				3,
				127,
				248
			],
			_0x2a86d1(268),
			[
				6,
				255,
				240
			],
			_0x2a86d1(268),
			[
				13,
				255,
				224
			],
			_0x2a86d1(268),
			[
				27,
				255,
				192
			],
			_0x2a86d1(268),
			[
				55,
				175,
				128
			],
			_0x2a86d1(108),
			[112]
		],
		8000: [
			_0x47bd0c,
			_0x2a86d1(268),
			[
				3,
				121,
				16
			],
			_0x2a86d1(47),
			[7]
		]
	}, _0x18393b = _0x3eb411(_0x1131d6), _0x211973 = Object.freeze({
		'default': _0x18393b,
		'__moduleExports': _0x18393b
	}), _0x3f1a95, _0x4afba3, _0x181461, _0x4bf875, _0x24f0e0, _0x5db831;
	_0x3f1a95 = function _0x5d62f5(_0x51c74b) {
		return _0x51c74b * 90000;
	};
	_0x4afba3 = function _0x8608c6(_0x3ccd7c, _0xdb7c10) {
		return _0x3ccd7c * _0xdb7c10;
	};
	_0x181461 = function _0xebab04(_0x5c1595) {
		return _0x5c1595 / 90000;
	};
	_0x4bf875 = function _0x24f1f4(_0x3bb3e8, _0x1ad1fb) {
		return _0x3bb3e8 / _0x1ad1fb;
	};
	_0x24f0e0 = function _0x330f02(_0x1ce296, _0x1be1fe) {
		return _0x3f1a95(_0x4bf875(_0x1ce296, _0x1be1fe));
	};
	_0x5db831 = function _0x2eb1e2(_0x442261, _0x4226a6) {
		return _0x4afba3(_0x181461(_0x442261), _0x4226a6);
	};
	var _0x375158 = {
		'secondsToVideoTs': _0x3f1a95,
		'secondsToAudioTs': _0x4afba3,
		'videoTsToSeconds': _0x181461,
		'audioTsToSeconds': _0x4bf875,
		'audioTsToVideoTs': _0x24f0e0,
		'videoTsToAudioTs': _0x5db831
	}, _0x5a4ce6 = _0x375158.secondsToVideoTs, _0x3125d9 = _0x375158.secondsToAudioTs, _0x42bbc9 = _0x375158.videoTsToSeconds, _0xd6b1fc = _0x375158.audioTsToSeconds, _0x18f633 = _0x375158.audioTsToVideoTs, _0x53600a = _0x375158.videoTsToAudioTs, _0x227593 = Object.freeze({
		'default': _0x375158,
		'__moduleExports': _0x375158,
		'secondsToVideoTs': _0x5a4ce6,
		'secondsToAudioTs': _0x3125d9,
		'videoTsToSeconds': _0x42bbc9,
		'audioTsToSeconds': _0xd6b1fc,
		'audioTsToVideoTs': _0x18f633,
		'videoTsToAudioTs': _0x53600a
	}), _0x1ce55d = _0x4b7cef && _0x831c55 || _0x4b7cef, _0x5b703b = _0x1ad00d && _0x3646e6 || _0x1ad00d, _0x4c6b76 = _0x2377a5 && _0x3d0c2b || _0x2377a5, _0x3d94a3 = _0x22259e && _0x40d430 || _0x22259e, _0x3ef6cd = _0x299848 && _0xe6c19b || _0x299848, _0x3d20d7 = _0xbed31a && _0x1a768e || _0xbed31a, _0x4de899 = _0x403097 && _0x473abe || _0x403097, _0x4049a2 = _0x211973 && _0x18393b || _0x211973, _0x3f8e16 = _0x227593 && _0x375158 || _0x227593, _0x552f84 = _0x3d20d7.H264Stream, _0x20b968 = [
		'audioobjecttype',
		'channelcount',
		'samplerate',
		'samplingfrequencyindex',
		'samplesize'
	], _0x2ceefa = [
		'width',
		'height',
		'profileIdc',
		'levelIdc',
		'profileCompatibility'
	], _0x1fc426, _0x23a60d, _0x13257f, _0x255a26, _0x15ee77, _0x264ef1, _0x347aa5;
	_0x15ee77 = function _0x1fdee9(_0xa03aba) {
		if (_0xa03aba[0] === 'I'.charCodeAt(0) && _0xa03aba[1] === 'D'.charCodeAt(0) && _0xa03aba[2] === '3'.charCodeAt(0)) {
			return true;
		}
		return false;
	};
	_0x264ef1 = function _0x660eaf(_0x20900b, _0x3de1e6) {
		var _0x4ace2d;
		if (_0x20900b.length !== _0x3de1e6.length) {
			return false;
		}
		for (_0x4ace2d = 0; _0x4ace2d < _0x20900b.length; _0x4ace2d++) {
			if (_0x20900b[_0x4ace2d] !== _0x3de1e6[_0x4ace2d]) {
				return false;
			}
		}
		return true;
	};
	_0x347aa5 = function _0x47a80e(_0x5d1825) {
		var _0x3b350e, _0x583060, _0x3e17b8 = 0;
		for (_0x3b350e = 0; _0x3b350e < _0x5d1825.length; _0x3b350e++) {
			_0x583060 = _0x5d1825[_0x3b350e];
			_0x3e17b8 += _0x583060.data.byteLength;
		}
		return _0x3e17b8;
	};
	_0x23a60d = function _0x453380(_0x188128, _0xfa9c5b) {
		var _0x40b009 = [], _0x4db054 = 0, _0x36f025 = 0, _0x31e431 = 0, _0x37b2fb = Infinity;
		_0xfa9c5b = _0xfa9c5b || {};
		_0x23a60d.prototype.init.call(this);
		this.push = function (_0x2b965e) {
			_0x4c6b76.collectDtsInfo(_0x188128, _0x2b965e);
			_0x188128 && _0x20b968.forEach(function (_0x58cd9d) {
				_0x188128[_0x58cd9d] = _0x2b965e[_0x58cd9d];
			});
			_0x40b009.push(_0x2b965e);
		};
		this.setEarliestDts = function (_0x4912ce) {
			_0x36f025 = _0x4912ce - _0x188128.timelineStartInfo.baseMediaDecodeTime;
		};
		this.setVideoBaseMediaDecodeTime = function (_0x369cac) {
			_0x37b2fb = _0x369cac;
		};
		this.setAudioAppendStart = function (_0x2e9e0f) {
			_0x31e431 = _0x2e9e0f;
		};
		this.flush = function () {
			var _0x2d3557, _0x3c9ae0, _0x5667c5, _0x300e66;
			if (_0x40b009.length === 0) {
				this.trigger('done', 'AudioSegmentStream');
				return;
			}
			_0x2d3557 = this.trimAdtsFramesByEarliestDts_(_0x40b009);
			_0x188128.baseMediaDecodeTime = _0x4c6b76.calculateTrackBaseMediaDecodeTime(_0x188128, _0xfa9c5b.keepOriginalTimestamps);
			this.prefixWithSilence_(_0x188128, _0x2d3557);
			_0x188128.samples = this.generateSampleTable_(_0x2d3557);
			_0x5667c5 = _0x1ce55d.mdat(this.concatenateFrameData_(_0x2d3557));
			_0x40b009 = [];
			_0x3c9ae0 = _0x1ce55d.moof(_0x4db054, [_0x188128]);
			_0x300e66 = new Uint8Array(_0x3c9ae0.byteLength + _0x5667c5.byteLength);
			_0x4db054++;
			_0x300e66.set(_0x3c9ae0);
			_0x300e66.set(_0x5667c5, _0x3c9ae0.byteLength);
			_0x4c6b76.clearDtsInfo(_0x188128);
			this.trigger('data', {
				'track': _0x188128,
				'boxes': _0x300e66
			});
			this.trigger('done', 'AudioSegmentStream');
		};
		this.prefixWithSilence_ = function (_0x59e879, _0x431308) {
			var _0x2c374f, _0x109adf = 0, _0x21b66c = 0, _0x4253ba = 0, _0x35fefc = 0, _0x11faeb, _0x229e42;
			if (!_0x431308.length) {
				return;
			}
			_0x2c374f = _0x3f8e16.audioTsToVideoTs(_0x59e879.baseMediaDecodeTime, _0x59e879.samplerate);
			_0x109adf = Math.ceil(90000 / (_0x59e879.samplerate / 1024));
			_0x31e431 && _0x37b2fb && (_0x21b66c = _0x2c374f - Math.max(_0x31e431, _0x37b2fb), _0x4253ba = Math.floor(_0x21b66c / _0x109adf), _0x35fefc = _0x4253ba * _0x109adf);
			if (_0x4253ba < 1 || _0x35fefc > 45000) {
				return;
			}
			_0x11faeb = _0x4049a2[_0x59e879.samplerate];
			!_0x11faeb && (_0x11faeb = _0x431308[0].data);
			for (_0x229e42 = 0; _0x229e42 < _0x4253ba; _0x229e42++) {
				_0x431308.splice(_0x229e42, 0, { 'data': _0x11faeb });
			}
			_0x59e879.baseMediaDecodeTime -= Math.floor(_0x3f8e16.videoTsToAudioTs(_0x35fefc, _0x59e879.samplerate));
		};
		this.trimAdtsFramesByEarliestDts_ = function (_0x4dd2db) {
			if (_0x188128.minSegmentDts >= _0x36f025) {
				return _0x4dd2db;
			}
			return _0x188128.minSegmentDts = Infinity, _0x4dd2db.filter(function (_0x12e996) {
				if (_0x12e996.dts >= _0x36f025) {
					return _0x188128.minSegmentDts = Math.min(_0x188128.minSegmentDts, _0x12e996.dts), _0x188128.minSegmentPts = _0x188128.minSegmentDts, true;
				}
				return false;
			});
		};
		this.generateSampleTable_ = function (_0x2273cf) {
			var _0x896820, _0x134d35, _0x1aa9a6 = [];
			for (_0x896820 = 0; _0x896820 < _0x2273cf.length; _0x896820++) {
				_0x134d35 = _0x2273cf[_0x896820];
				_0x1aa9a6.push({
					'size': _0x134d35.data.byteLength,
					'duration': 1024
				});
			}
			return _0x1aa9a6;
		};
		this.concatenateFrameData_ = function (_0x5d4fd4) {
			var _0x353835, _0x1fd067, _0x459b12 = 0, _0x47c75b = new Uint8Array(_0x347aa5(_0x5d4fd4));
			for (_0x353835 = 0; _0x353835 < _0x5d4fd4.length; _0x353835++) {
				_0x1fd067 = _0x5d4fd4[_0x353835];
				_0x47c75b.set(_0x1fd067.data, _0x459b12);
				_0x459b12 += _0x1fd067.data.byteLength;
			}
			return _0x47c75b;
		};
	};
	_0x23a60d.prototype = new _0x53e998();
	_0x1fc426 = function _0xa865e8(_0x3f1077, _0x1cff19) {
		var _0x1225a9 = 0, _0x35c028 = [], _0x45f56c = [], _0x134208, _0x4915ce;
		_0x1cff19 = _0x1cff19 || {};
		_0x1fc426.prototype.init.call(this);
		delete _0x3f1077.minPTS;
		this.gopCache_ = [];
		this.push = function (_0x569da1) {
			_0x4c6b76.collectDtsInfo(_0x3f1077, _0x569da1);
			_0x569da1.nalUnitType === 'seq_parameter_set_rbsp' && !_0x134208 && (_0x134208 = _0x569da1.config, _0x3f1077.sps = [_0x569da1.data], _0x2ceefa.forEach(function (_0x2c0e90) {
				_0x3f1077[_0x2c0e90] = _0x134208[_0x2c0e90];
			}, this));
			_0x569da1.nalUnitType === 'pic_parameter_set_rbsp' && !_0x4915ce && (_0x4915ce = _0x569da1.data, _0x3f1077.pps = [_0x569da1.data]);
			_0x35c028.push(_0x569da1);
		};
		this.flush = function () {
			var _0x586c78, _0x3c2481, _0xd57dc, _0x3d468e, _0x53caf9, _0x26cd44;
			while (_0x35c028.length) {
				if (_0x35c028[0].nalUnitType === 'access_unit_delimiter_rbsp') {
					break;
				}
				_0x35c028.shift();
			}
			if (_0x35c028.length === 0) {
				this.resetStream_();
				this.trigger('done', 'VideoSegmentStream');
				return;
			}
			_0x586c78 = _0x5b703b.groupNalsIntoFrames(_0x35c028);
			_0xd57dc = _0x5b703b.groupFramesIntoGops(_0x586c78);
			!_0xd57dc[0][0].keyFrame && (_0x3c2481 = this.getGopForFusion_(_0x35c028[0], _0x3f1077), _0x3c2481 ? (_0xd57dc.unshift(_0x3c2481), _0xd57dc.byteLength += _0x3c2481.byteLength, _0xd57dc.nalCount += _0x3c2481.nalCount, _0xd57dc.pts = _0x3c2481.pts, _0xd57dc.dts = _0x3c2481.dts, _0xd57dc.duration += _0x3c2481.duration) : _0xd57dc = _0x5b703b.extendFirstKeyFrame(_0xd57dc));
			if (_0x45f56c.length) {
				var _0x370144;
				_0x1cff19.alignGopsAtEnd ? _0x370144 = this.alignGopsAtEnd_(_0xd57dc) : _0x370144 = this.alignGopsAtStart_(_0xd57dc);
				if (!_0x370144) {
					this.gopCache_.unshift({
						'gop': _0xd57dc.pop(),
						'pps': _0x3f1077.pps,
						'sps': _0x3f1077.sps
					});
					this.gopCache_.length = Math.min(6, this.gopCache_.length);
					_0x35c028 = [];
					this.resetStream_();
					this.trigger('done', 'VideoSegmentStream');
					return;
				}
				_0x4c6b76.clearDtsInfo(_0x3f1077);
				_0xd57dc = _0x370144;
			}
			_0x4c6b76.collectDtsInfo(_0x3f1077, _0xd57dc);
			_0x3f1077.samples = _0x5b703b.generateSampleTable(_0xd57dc);
			_0x53caf9 = _0x1ce55d.mdat(_0x5b703b.concatenateNalData(_0xd57dc));
			_0x3f1077.baseMediaDecodeTime = _0x4c6b76.calculateTrackBaseMediaDecodeTime(_0x3f1077, _0x1cff19.keepOriginalTimestamps);
			this.trigger('processedGopsInfo', _0xd57dc.map(function (_0x3f678b) {
				return {
					'pts': _0x3f678b.pts,
					'dts': _0x3f678b.dts,
					'byteLength': _0x3f678b.byteLength
				};
			}));
			this.gopCache_.unshift({
				'gop': _0xd57dc.pop(),
				'pps': _0x3f1077.pps,
				'sps': _0x3f1077.sps
			});
			this.gopCache_.length = Math.min(6, this.gopCache_.length);
			_0x35c028 = [];
			this.trigger('baseMediaDecodeTime', _0x3f1077.baseMediaDecodeTime);
			this.trigger('timelineStartInfo', _0x3f1077.timelineStartInfo);
			_0x3d468e = _0x1ce55d.moof(_0x1225a9, [_0x3f1077]);
			_0x26cd44 = new Uint8Array(_0x3d468e.byteLength + _0x53caf9.byteLength);
			_0x1225a9++;
			_0x26cd44.set(_0x3d468e);
			_0x26cd44.set(_0x53caf9, _0x3d468e.byteLength);
			this.trigger('data', {
				'track': _0x3f1077,
				'boxes': _0x26cd44
			});
			this.resetStream_();
			this.trigger('done', 'VideoSegmentStream');
		};
		this.resetStream_ = function () {
			_0x4c6b76.clearDtsInfo(_0x3f1077);
			_0x134208 = undefined;
			_0x4915ce = undefined;
		};
		this.getGopForFusion_ = function (_0x5e3769) {
			var _0x2b9ae1 = Infinity, _0x2f0484, _0x5405c1, _0x27e21d, _0x30127f, _0x2960df;
			for (_0x2960df = 0; _0x2960df < this.gopCache_.length; _0x2960df++) {
				_0x30127f = this.gopCache_[_0x2960df];
				_0x27e21d = _0x30127f.gop;
				if (!(_0x3f1077.pps && _0x264ef1(_0x3f1077.pps[0], _0x30127f.pps[0])) || !(_0x3f1077.sps && _0x264ef1(_0x3f1077.sps[0], _0x30127f.sps[0]))) {
					continue;
				}
				if (_0x27e21d.dts < _0x3f1077.timelineStartInfo.dts) {
					continue;
				}
				_0x2f0484 = _0x5e3769.dts - _0x27e21d.dts - _0x27e21d.duration;
				_0x2f0484 >= -10000 && _0x2f0484 <= 45000 && ((!_0x5405c1 || _0x2b9ae1 > _0x2f0484) && (_0x5405c1 = _0x30127f, _0x2b9ae1 = _0x2f0484));
			}
			if (_0x5405c1) {
				return _0x5405c1.gop;
			}
			return null;
		};
		this.alignGopsAtStart_ = function (_0x373812) {
			var _0x5a6dc3, _0x477a99, _0xe78800, _0x4221e7, _0xc3f077, _0x3c33df, _0x327a69, _0x358a30;
			_0xc3f077 = _0x373812.byteLength;
			_0x3c33df = _0x373812.nalCount;
			_0x327a69 = _0x373812.duration;
			_0x5a6dc3 = _0x477a99 = 0;
			while (_0x5a6dc3 < _0x45f56c.length && _0x477a99 < _0x373812.length) {
				_0xe78800 = _0x45f56c[_0x5a6dc3];
				_0x4221e7 = _0x373812[_0x477a99];
				if (_0xe78800.pts === _0x4221e7.pts) {
					break;
				}
				if (_0x4221e7.pts > _0xe78800.pts) {
					_0x5a6dc3++;
					continue;
				}
				_0x477a99++;
				_0xc3f077 -= _0x4221e7.byteLength;
				_0x3c33df -= _0x4221e7.nalCount;
				_0x327a69 -= _0x4221e7.duration;
			}
			if (_0x477a99 === 0) {
				return _0x373812;
			}
			if (_0x477a99 === _0x373812.length) {
				return null;
			}
			return _0x358a30 = _0x373812.slice(_0x477a99), _0x358a30.byteLength = _0xc3f077, _0x358a30.duration = _0x327a69, _0x358a30.nalCount = _0x3c33df, _0x358a30.pts = _0x358a30[0].pts, _0x358a30.dts = _0x358a30[0].dts, _0x358a30;
		};
		this.alignGopsAtEnd_ = function (_0x2da87e) {
			var _0x808a22, _0x184906, _0x1094c3, _0x16b5ff, _0x5dc69a, _0x593c2c;
			_0x808a22 = _0x45f56c.length - 1;
			_0x184906 = _0x2da87e.length - 1;
			_0x5dc69a = null;
			_0x593c2c = false;
			while (_0x808a22 >= 0 && _0x184906 >= 0) {
				_0x1094c3 = _0x45f56c[_0x808a22];
				_0x16b5ff = _0x2da87e[_0x184906];
				if (_0x1094c3.pts === _0x16b5ff.pts) {
					_0x593c2c = true;
					break;
				}
				if (_0x1094c3.pts > _0x16b5ff.pts) {
					_0x808a22--;
					continue;
				}
				_0x808a22 === _0x45f56c.length - 1 && (_0x5dc69a = _0x184906);
				_0x184906--;
			}
			if (!_0x593c2c && _0x5dc69a === null) {
				return null;
			}
			var _0x37bdf2;
			_0x593c2c ? _0x37bdf2 = _0x184906 : _0x37bdf2 = _0x5dc69a;
			if (_0x37bdf2 === 0) {
				return _0x2da87e;
			}
			var _0x4bea0 = _0x2da87e.slice(_0x37bdf2), _0x183d96 = _0x4bea0.reduce(function (_0x476220, _0x8f88ca) {
				return _0x476220.byteLength += _0x8f88ca.byteLength, _0x476220.duration += _0x8f88ca.duration, _0x476220.nalCount += _0x8f88ca.nalCount, _0x476220;
			}, {
				'byteLength': 0,
				'duration': 0,
				'nalCount': 0
			});
			return _0x4bea0.byteLength = _0x183d96.byteLength, _0x4bea0.duration = _0x183d96.duration, _0x4bea0.nalCount = _0x183d96.nalCount, _0x4bea0.pts = _0x4bea0[0].pts, _0x4bea0.dts = _0x4bea0[0].dts, _0x4bea0;
		};
		this.alignGopsWith = function (_0x1b938f) {
			_0x45f56c = _0x1b938f;
		};
	};
	_0x1fc426.prototype = new _0x53e998();
	_0x255a26 = function _0x5eb5d9(_0x1c6fdd, _0x233073) {
		this.numberOfTracks = 0;
		this.metadataStream = _0x233073;
		typeof _0x1c6fdd.remux !== 'undefined' ? this.remuxTracks = !!_0x1c6fdd.remux : this.remuxTracks = true;
		this.pendingTracks = [];
		this.videoTrack = null;
		this.pendingBoxes = [];
		this.pendingCaptions = [];
		this.pendingMetadata = [];
		this.pendingBytes = 0;
		this.emittedTracks = 0;
		_0x255a26.prototype.init.call(this);
		this.push = function (_0x202da6) {
			if (_0x202da6.text) {
				return this.pendingCaptions.push(_0x202da6);
			}
			if (_0x202da6.frames) {
				return this.pendingMetadata.push(_0x202da6);
			}
			this.pendingTracks.push(_0x202da6.track);
			this.pendingBoxes.push(_0x202da6.boxes);
			this.pendingBytes += _0x202da6.boxes.byteLength;
			_0x202da6.track.type === 'video' && (this.videoTrack = _0x202da6.track);
			_0x202da6.track.type === 'audio' && (this.audioTrack = _0x202da6.track);
		};
	};
	_0x255a26.prototype = new _0x53e998();
	_0x255a26.prototype.flush = function (_0x3f727f) {
		var _0xe40d22 = 0, _0x3cc2c5 = {
			'captions': [],
			'captionStreams': {},
			'metadata': [],
			'info': {}
		}, _0xc1b319, _0x28d07f, _0x59eca2, _0xbd4fa6 = 0, _0x33bc23;
		if (this.pendingTracks.length < this.numberOfTracks) {
			if (_0x3f727f !== 'VideoSegmentStream' && _0x3f727f !== 'AudioSegmentStream') {
				return;
			} else {
				if (this.remuxTracks) {
					return;
				} else {
					if (this.pendingTracks.length === 0) {
						this.emittedTracks++;
						if (this.emittedTracks >= this.numberOfTracks) {
							this.trigger('done');
							this.emittedTracks = 0;
						}
						return;
					}
				}
			}
		}
		if (this.videoTrack) {
			_0xbd4fa6 = this.videoTrack.timelineStartInfo.pts;
			_0x2ceefa.forEach(function (_0x4bf112) {
				_0x3cc2c5.info[_0x4bf112] = this.videoTrack[_0x4bf112];
			}, this);
		} else {
			this.audioTrack && (_0xbd4fa6 = this.audioTrack.timelineStartInfo.pts, _0x20b968.forEach(function (_0xfc03bf) {
				_0x3cc2c5.info[_0xfc03bf] = this.audioTrack[_0xfc03bf];
			}, this));
		}
		this.pendingTracks.length === 1 ? _0x3cc2c5.type = this.pendingTracks[0].type : _0x3cc2c5.type = 'combined';
		this.emittedTracks += this.pendingTracks.length;
		_0x59eca2 = _0x1ce55d.initSegment(this.pendingTracks);
		_0x3cc2c5.initSegment = new Uint8Array(_0x59eca2.byteLength);
		_0x3cc2c5.initSegment.set(_0x59eca2);
		_0x3cc2c5.data = new Uint8Array(this.pendingBytes);
		for (_0x33bc23 = 0; _0x33bc23 < this.pendingBoxes.length; _0x33bc23++) {
			_0x3cc2c5.data.set(this.pendingBoxes[_0x33bc23], _0xe40d22);
			_0xe40d22 += this.pendingBoxes[_0x33bc23].byteLength;
		}
		for (_0x33bc23 = 0; _0x33bc23 < this.pendingCaptions.length; _0x33bc23++) {
			_0xc1b319 = this.pendingCaptions[_0x33bc23];
			_0xc1b319.startTime = _0xc1b319.startPts - _0xbd4fa6;
			_0xc1b319.startTime /= 90000;
			_0xc1b319.endTime = _0xc1b319.endPts - _0xbd4fa6;
			_0xc1b319.endTime /= 90000;
			_0x3cc2c5.captionStreams[_0xc1b319.stream] = true;
			_0x3cc2c5.captions.push(_0xc1b319);
		}
		for (_0x33bc23 = 0; _0x33bc23 < this.pendingMetadata.length; _0x33bc23++) {
			_0x28d07f = this.pendingMetadata[_0x33bc23];
			_0x28d07f.cueTime = _0x28d07f.pts - _0xbd4fa6;
			_0x28d07f.cueTime /= 90000;
			_0x3cc2c5.metadata.push(_0x28d07f);
		}
		_0x3cc2c5.metadata.dispatchType = this.metadataStream.dispatchType;
		this.pendingTracks.length = 0;
		this.videoTrack = null;
		this.pendingBoxes.length = 0;
		this.pendingCaptions.length = 0;
		this.pendingBytes = 0;
		this.pendingMetadata.length = 0;
		this.trigger('data', _0x3cc2c5);
		if (this.emittedTracks >= this.numberOfTracks) {
			this.trigger('done');
			this.emittedTracks = 0;
		}
	};
	_0x13257f = function _0x5a2606(_0x1f0b8e) {
		var _0xdfb01 = this, _0x5dd51c = true, _0x36a704, _0x333ebe;
		_0x13257f.prototype.init.call(this);
		_0x1f0b8e = _0x1f0b8e || {};
		this.baseMediaDecodeTime = _0x1f0b8e.baseMediaDecodeTime || 0;
		this.transmuxPipeline_ = {};
		this.setupAacPipeline = function () {
			var _0x4ceed5 = {
				type: 'aac',
				metadataStream: new _0x3d94a3.MetadataStream(),
				aacStream: new _0x4de899(),
				audioTimestampRolloverStream: new _0x3d94a3.TimestampRolloverStream('audio'),
				timedMetadataTimestampRolloverStream: new _0x3d94a3.TimestampRolloverStream('timed-metadata'),
				adtsStream: new _0x3ef6cd(),
				coalesceStream: new _0x255a26(_0x1f0b8e, _0x4ceed5.metadataStream),
				headOfPipeline: _0x4ceed5.aacStream
			};
			this.transmuxPipeline_ = _0x4ceed5;
			_0x4ceed5.aacStream.pipe(_0x4ceed5.audioTimestampRolloverStream).pipe(_0x4ceed5.adtsStream);
			_0x4ceed5.aacStream.pipe(_0x4ceed5.timedMetadataTimestampRolloverStream).pipe(_0x4ceed5.metadataStream).pipe(_0x4ceed5.coalesceStream);
			_0x4ceed5.metadataStream.on('timestamp', function (_0x5f4212) {
				_0x4ceed5.aacStream.setTimestamp(_0x5f4212.timeStamp);
			});
			_0x4ceed5.aacStream.on('data', function (_0x3e264e) {
				_0x3e264e.type === 'timed-metadata' && !_0x4ceed5.audioSegmentStream && (_0x333ebe = _0x333ebe || {
					'timelineStartInfo': { 'baseMediaDecodeTime': _0xdfb01.baseMediaDecodeTime },
					'codec': 'adts',
					'type': 'audio'
				}, _0x4ceed5.coalesceStream.numberOfTracks++, _0x4ceed5.audioSegmentStream = new _0x23a60d(_0x333ebe, _0x1f0b8e), _0x4ceed5.adtsStream.pipe(_0x4ceed5.audioSegmentStream).pipe(_0x4ceed5.coalesceStream));
			});
			_0x4ceed5.coalesceStream.on('data', this.trigger.bind(this, 'data'));
			_0x4ceed5.coalesceStream.on('done', this.trigger.bind(this, 'done'));
		};
		this.setupTsPipeline = function () {
			var _0x45f0b8 = {
				type: 'ts',
				metadataStream: new _0x3d94a3.MetadataStream(),
				packetStream: new _0x3d94a3.TransportPacketStream(),
				parseStream: new _0x3d94a3.TransportParseStream(),
				elementaryStream: new _0x3d94a3.ElementaryStream(),
				videoTimestampRolloverStream: new _0x3d94a3.TimestampRolloverStream('video'),
				audioTimestampRolloverStream: new _0x3d94a3.TimestampRolloverStream('audio'),
				timedMetadataTimestampRolloverStream: new _0x3d94a3.TimestampRolloverStream('timed-metadata'),
				adtsStream: new _0x3ef6cd(),
				h264Stream: new _0x552f84(),
				captionStream: new _0x3d94a3.CaptionStream(),
				coalesceStream: new _0x255a26(_0x1f0b8e, _0x45f0b8.metadataStream),
				headOfPipeline: _0x45f0b8.packetStream
			};
			this.transmuxPipeline_ = _0x45f0b8;
			_0x45f0b8.packetStream.pipe(_0x45f0b8.parseStream).pipe(_0x45f0b8.elementaryStream);
			_0x45f0b8.elementaryStream.pipe(_0x45f0b8.videoTimestampRolloverStream).pipe(_0x45f0b8.h264Stream);
			_0x45f0b8.elementaryStream.pipe(_0x45f0b8.audioTimestampRolloverStream).pipe(_0x45f0b8.adtsStream);
			_0x45f0b8.elementaryStream.pipe(_0x45f0b8.timedMetadataTimestampRolloverStream).pipe(_0x45f0b8.metadataStream).pipe(_0x45f0b8.coalesceStream);
			_0x45f0b8.h264Stream.pipe(_0x45f0b8.captionStream).pipe(_0x45f0b8.coalesceStream);
			_0x45f0b8.elementaryStream.on('data', function (_0x2da130) {
				var _0x55f5e0;
				if (_0x2da130.type === 'metadata') {
					_0x55f5e0 = _0x2da130.tracks.length;
					while (_0x55f5e0--) {
						if (!_0x36a704 && _0x2da130.tracks[_0x55f5e0].type === 'video') {
							_0x36a704 = _0x2da130.tracks[_0x55f5e0];
							_0x36a704.timelineStartInfo.baseMediaDecodeTime = _0xdfb01.baseMediaDecodeTime;
						} else {
							!_0x333ebe && _0x2da130.tracks[_0x55f5e0].type === 'audio' && (_0x333ebe = _0x2da130.tracks[_0x55f5e0], _0x333ebe.timelineStartInfo.baseMediaDecodeTime = _0xdfb01.baseMediaDecodeTime);
						}
					}
					_0x36a704 && !_0x45f0b8.videoSegmentStream && (_0x45f0b8.coalesceStream.numberOfTracks++, _0x45f0b8.videoSegmentStream = new _0x1fc426(_0x36a704, _0x1f0b8e), _0x45f0b8.videoSegmentStream.on('timelineStartInfo', function (_0x36b8fb) {
						_0x333ebe && (_0x333ebe.timelineStartInfo = _0x36b8fb, _0x45f0b8.audioSegmentStream.setEarliestDts(_0x36b8fb.dts));
					}), _0x45f0b8.videoSegmentStream.on('processedGopsInfo', _0xdfb01.trigger.bind(_0xdfb01, 'gopInfo')), _0x45f0b8.videoSegmentStream.on('baseMediaDecodeTime', function (_0x4e5dbb) {
						_0x333ebe && _0x45f0b8.audioSegmentStream.setVideoBaseMediaDecodeTime(_0x4e5dbb);
					}), _0x45f0b8.h264Stream.pipe(_0x45f0b8.videoSegmentStream).pipe(_0x45f0b8.coalesceStream));
					_0x333ebe && !_0x45f0b8.audioSegmentStream && (_0x45f0b8.coalesceStream.numberOfTracks++, _0x45f0b8.audioSegmentStream = new _0x23a60d(_0x333ebe, _0x1f0b8e), _0x45f0b8.adtsStream.pipe(_0x45f0b8.audioSegmentStream).pipe(_0x45f0b8.coalesceStream));
				}
			});
			_0x45f0b8.coalesceStream.on('data', this.trigger.bind(this, 'data'));
			_0x45f0b8.coalesceStream.on('done', this.trigger.bind(this, 'done'));
		};
		this.setBaseMediaDecodeTime = function (_0x55c383) {
			var _0x4ea9af = this.transmuxPipeline_;
			this.baseMediaDecodeTime = _0x55c383;
			_0x333ebe && (_0x333ebe.timelineStartInfo.dts = undefined, _0x333ebe.timelineStartInfo.pts = undefined, _0x4c6b76.clearDtsInfo(_0x333ebe), _0x333ebe.timelineStartInfo.baseMediaDecodeTime = _0x55c383, _0x4ea9af.audioTimestampRolloverStream && _0x4ea9af.audioTimestampRolloverStream.discontinuity());
			_0x36a704 && (_0x4ea9af.videoSegmentStream && (_0x4ea9af.videoSegmentStream.gopCache_ = [], _0x4ea9af.videoTimestampRolloverStream.discontinuity()), _0x36a704.timelineStartInfo.dts = undefined, _0x36a704.timelineStartInfo.pts = undefined, _0x4c6b76.clearDtsInfo(_0x36a704), _0x4ea9af.captionStream.reset(), _0x36a704.timelineStartInfo.baseMediaDecodeTime = _0x55c383);
			_0x4ea9af.timedMetadataTimestampRolloverStream && _0x4ea9af.timedMetadataTimestampRolloverStream.discontinuity();
		};
		this.setAudioAppendStart = function (_0x3b7e12) {
			_0x333ebe && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(_0x3b7e12);
		};
		this.alignGopsWith = function (_0x5f00f2) {
			_0x36a704 && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(_0x5f00f2);
		};
		this.push = function (_0x303e3f) {
			if (_0x5dd51c) {
				var _0x2a5435 = _0x15ee77(_0x303e3f);
				if (_0x2a5435 && this.transmuxPipeline_.type !== 'aac') {
					this.setupAacPipeline();
				} else {
					!_0x2a5435 && this.transmuxPipeline_.type !== 'ts' && this.setupTsPipeline();
				}
				_0x5dd51c = false;
			}
			this.transmuxPipeline_.headOfPipeline.push(_0x303e3f);
		};
		this.flush = function () {
			_0x5dd51c = true;
			this.transmuxPipeline_.headOfPipeline.flush();
		};
		this.resetCaptions = function () {
			this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset();
		};
	};
	_0x13257f.prototype = new _0x53e998();
	var _0x5734e5 = {
		'Transmuxer': _0x13257f,
		'VideoSegmentStream': _0x1fc426,
		'AudioSegmentStream': _0x23a60d,
		'AUDIO_PROPERTIES': _0x20b968,
		'VIDEO_PROPERTIES': _0x2ceefa
	}, _0x1ad897 = _0x5734e5.Transmuxer, _0x1d8aa1 = _0x5734e5.VideoSegmentStream, _0x374fe3 = _0x5734e5.AudioSegmentStream, _0x47575a = _0x5734e5.AUDIO_PROPERTIES, _0xacaaee = _0x5734e5.VIDEO_PROPERTIES, _0x5aa7f8 = Object.freeze({
		'default': _0x5734e5,
		'__moduleExports': _0x5734e5,
		'Transmuxer': _0x1ad897,
		'VideoSegmentStream': _0x1d8aa1,
		'AudioSegmentStream': _0x374fe3,
		'AUDIO_PROPERTIES': _0x47575a,
		'VIDEO_PROPERTIES': _0xacaaee
	}), _0x325981, _0x1679dc, _0x1be40e = _0x104ab6.parseType, _0x5374f7 = function _0x3fd3dd(_0xaf3b95) {
		return new Date(_0xaf3b95 * 1000 - 2082844800000);
	}, _0x1cd189 = function _0x4aadd5(_0x101284) {
		return {
			'isLeading': (_0x101284[0] & 12) >>> 2,
			'dependsOn': _0x101284[0] & 3,
			'isDependedOn': (_0x101284[1] & 192) >>> 6,
			'hasRedundancy': (_0x101284[1] & 48) >>> 4,
			'paddingValue': (_0x101284[1] & 14) >>> 1,
			'isNonSyncSample': _0x101284[1] & 1,
			'degradationPriority': _0x101284[2] << 8 | _0x101284[3]
		};
	}, _0x21da4c = function _0x12cbf8(_0x4be874) {
		var _0x22ef15 = new DataView(_0x4be874.buffer, _0x4be874.byteOffset, _0x4be874.byteLength), _0x5b9e1a = [], _0x3a5c1c, _0x4961c1;
		for (_0x3a5c1c = 0; _0x3a5c1c + 4 < _0x4be874.length; _0x3a5c1c += _0x4961c1) {
			_0x4961c1 = _0x22ef15.getUint32(_0x3a5c1c);
			_0x3a5c1c += 4;
			if (_0x4961c1 <= 0) {
				_0x5b9e1a.push('<span style=\'color:red;\'>MALFORMED DATA</span>');
				continue;
			}
			switch (_0x4be874[_0x3a5c1c] & 31) {
				case 1:
					_0x5b9e1a.push('slice_layer_without_partitioning_rbsp');
					break;
				case 5:
					_0x5b9e1a.push('slice_layer_without_partitioning_rbsp_idr');
					break;
				case 6:
					_0x5b9e1a.push('sei_rbsp');
					break;
				case 7:
					_0x5b9e1a.push('seq_parameter_set_rbsp');
					break;
				case 8:
					_0x5b9e1a.push('pic_parameter_set_rbsp');
					break;
				case 9:
					_0x5b9e1a.push('access_unit_delimiter_rbsp');
					break;
				default:
					_0x5b9e1a.push('UNKNOWN NAL - ' + _0x4be874[_0x3a5c1c] & 31);
					break;
			}
		}
		return _0x5b9e1a;
	}, _0x77a226 = {
		'avc1': function _0x3cd7dc(_0x4e02b5) {
			var _0x5b6dda = new DataView(_0x4e02b5.buffer, _0x4e02b5.byteOffset, _0x4e02b5.byteLength);
			return {
				'dataReferenceIndex': _0x5b6dda.getUint16(6),
				'width': _0x5b6dda.getUint16(24),
				'height': _0x5b6dda.getUint16(26),
				'horizresolution': _0x5b6dda.getUint16(28) + _0x5b6dda.getUint16(30) / 16,
				'vertresolution': _0x5b6dda.getUint16(32) + _0x5b6dda.getUint16(34) / 16,
				'frameCount': _0x5b6dda.getUint16(40),
				'depth': _0x5b6dda.getUint16(74),
				'config': _0x325981(_0x4e02b5.subarray(78, _0x4e02b5.byteLength))
			};
		},
		'avcC': function _0x26caa9(_0x52e91e) {
			var _0x326bba = new DataView(_0x52e91e.buffer, _0x52e91e.byteOffset, _0x52e91e.byteLength), _0x46df70 = {
				'configurationVersion': _0x52e91e[0],
				'avcProfileIndication': _0x52e91e[1],
				'profileCompatibility': _0x52e91e[2],
				'avcLevelIndication': _0x52e91e[3],
				'lengthSizeMinusOne': _0x52e91e[4] & 3,
				'sps': [],
				'pps': []
			}, _0x1fa79d = _0x52e91e[5] & 31, _0x2f4254, _0xaada08, _0x206cdc, _0xf0b4d;
			_0x206cdc = 6;
			for (_0xf0b4d = 0; _0xf0b4d < _0x1fa79d; _0xf0b4d++) {
				_0xaada08 = _0x326bba.getUint16(_0x206cdc);
				_0x206cdc += 2;
				_0x46df70.sps.push(new Uint8Array(_0x52e91e.subarray(_0x206cdc, _0x206cdc + _0xaada08)));
				_0x206cdc += _0xaada08;
			}
			_0x2f4254 = _0x52e91e[_0x206cdc];
			_0x206cdc++;
			for (_0xf0b4d = 0; _0xf0b4d < _0x2f4254; _0xf0b4d++) {
				_0xaada08 = _0x326bba.getUint16(_0x206cdc);
				_0x206cdc += 2;
				_0x46df70.pps.push(new Uint8Array(_0x52e91e.subarray(_0x206cdc, _0x206cdc + _0xaada08)));
				_0x206cdc += _0xaada08;
			}
			return _0x46df70;
		},
		'btrt': function _0xd325be(_0x1c31bc) {
			var _0x209ac5 = new DataView(_0x1c31bc.buffer, _0x1c31bc.byteOffset, _0x1c31bc.byteLength);
			return {
				'bufferSizeDB': _0x209ac5.getUint32(0),
				'maxBitrate': _0x209ac5.getUint32(4),
				'avgBitrate': _0x209ac5.getUint32(8)
			};
		},
		'esds': function _0x36b6b2(_0x18f81c) {
			return {
				'version': _0x18f81c[0],
				'flags': new Uint8Array(_0x18f81c.subarray(1, 4)),
				'esId': _0x18f81c[6] << 8 | _0x18f81c[7],
				'streamPriority': _0x18f81c[8] & 31,
				'decoderConfig': {
					'objectProfileIndication': _0x18f81c[11],
					'streamType': _0x18f81c[12] >>> 2 & 63,
					'bufferSize': _0x18f81c[13] << 16 | _0x18f81c[14] << 8 | _0x18f81c[15],
					'maxBitrate': _0x18f81c[16] << 24 | _0x18f81c[17] << 16 | _0x18f81c[18] << 8 | _0x18f81c[19],
					'avgBitrate': _0x18f81c[20] << 24 | _0x18f81c[21] << 16 | _0x18f81c[22] << 8 | _0x18f81c[23],
					'decoderConfigDescriptor': {
						'tag': _0x18f81c[24],
						'length': _0x18f81c[25],
						'audioObjectType': _0x18f81c[26] >>> 3 & 31,
						'samplingFrequencyIndex': (_0x18f81c[26] & 7) << 1 | _0x18f81c[27] >>> 7 & 1,
						'channelConfiguration': _0x18f81c[27] >>> 3 & 15
					}
				}
			};
		},
		'ftyp': function _0xec40f1(_0x14c2d1) {
			var _0x426ac8 = new DataView(_0x14c2d1.buffer, _0x14c2d1.byteOffset, _0x14c2d1.byteLength), _0x2069fe = {
				'majorBrand': _0x1be40e(_0x14c2d1.subarray(0, 4)),
				'minorVersion': _0x426ac8.getUint32(4),
				'compatibleBrands': []
			}, _0x5e2081 = 8;
			while (_0x5e2081 < _0x14c2d1.byteLength) {
				_0x2069fe.compatibleBrands.push(_0x1be40e(_0x14c2d1.subarray(_0x5e2081, _0x5e2081 + 4)));
				_0x5e2081 += 4;
			}
			return _0x2069fe;
		},
		'dinf': function _0x124a64(_0x5c6a26) {
			return { 'boxes': _0x325981(_0x5c6a26) };
		},
		'dref': function _0x34569b(_0x3ceceb) {
			return {
				'version': _0x3ceceb[0],
				'flags': new Uint8Array(_0x3ceceb.subarray(1, 4)),
				'dataReferences': _0x325981(_0x3ceceb.subarray(8))
			};
		},
		'hdlr': function _0xc5247d(_0x460ae2) {
			var _0x8fe31c = new DataView(_0x460ae2.buffer, _0x460ae2.byteOffset, _0x460ae2.byteLength), _0x52540f = {
				'version': _0x8fe31c.getUint8(0),
				'flags': new Uint8Array(_0x460ae2.subarray(1, 4)),
				'handlerType': _0x1be40e(_0x460ae2.subarray(8, 12)),
				'name': ''
			}, _0x326f73 = 8;
			for (_0x326f73 = 24; _0x326f73 < _0x460ae2.byteLength; _0x326f73++) {
				if (_0x460ae2[_0x326f73] === 0) {
					_0x326f73++;
					break;
				}
				_0x52540f.name += String.fromCharCode(_0x460ae2[_0x326f73]);
			}
			return _0x52540f.name = decodeURIComponent(escape(_0x52540f.name)), _0x52540f;
		},
		'mdat': function _0x4b00f9(_0x5dc2f4) {
			return {
				'byteLength': _0x5dc2f4.byteLength,
				'nals': _0x21da4c(_0x5dc2f4)
			};
		},
		'mdhd': function _0x3135ba(_0x487baf) {
			var _0x1f36ce = new DataView(_0x487baf.buffer, _0x487baf.byteOffset, _0x487baf.byteLength), _0x3ab081 = 4, _0x54b879, _0x4f790a = {
				'version': _0x1f36ce.getUint8(0),
				'flags': new Uint8Array(_0x487baf.subarray(1, 4)),
				'language': ''
			};
			return _0x4f790a.version === 1 ? (_0x3ab081 += 4, _0x4f790a.creationTime = _0x5374f7(_0x1f36ce.getUint32(_0x3ab081)), _0x3ab081 += 8, _0x4f790a.modificationTime = _0x5374f7(_0x1f36ce.getUint32(_0x3ab081)), _0x3ab081 += 4, _0x4f790a.timescale = _0x1f36ce.getUint32(_0x3ab081), _0x3ab081 += 8, _0x4f790a.duration = _0x1f36ce.getUint32(_0x3ab081)) : (_0x4f790a.creationTime = _0x5374f7(_0x1f36ce.getUint32(_0x3ab081)), _0x3ab081 += 4, _0x4f790a.modificationTime = _0x5374f7(_0x1f36ce.getUint32(_0x3ab081)), _0x3ab081 += 4, _0x4f790a.timescale = _0x1f36ce.getUint32(_0x3ab081), _0x3ab081 += 4, _0x4f790a.duration = _0x1f36ce.getUint32(_0x3ab081)), _0x3ab081 += 4, _0x54b879 = _0x1f36ce.getUint16(_0x3ab081), _0x4f790a.language += String.fromCharCode((_0x54b879 >> 10) + 96), _0x4f790a.language += String.fromCharCode(((_0x54b879 & 992) >> 5) + 96), _0x4f790a.language += String.fromCharCode((_0x54b879 & 31) + 96), _0x4f790a;
		},
		'mdia': function _0x2a4985(_0x28af07) {
			return { 'boxes': _0x325981(_0x28af07) };
		},
		'mfhd': function _0x160c1f(_0x551c06) {
			return {
				'version': _0x551c06[0],
				'flags': new Uint8Array(_0x551c06.subarray(1, 4)),
				'sequenceNumber': _0x551c06[4] << 24 | _0x551c06[5] << 16 | _0x551c06[6] << 8 | _0x551c06[7]
			};
		},
		'minf': function _0x4b6d3a(_0x122ea3) {
			return { 'boxes': _0x325981(_0x122ea3) };
		},
		'mp4a': function _0x38e615(_0x5b70af) {
			var _0x5fda53 = new DataView(_0x5b70af.buffer, _0x5b70af.byteOffset, _0x5b70af.byteLength), _0x5cfcb8 = {
				'dataReferenceIndex': _0x5fda53.getUint16(6),
				'channelcount': _0x5fda53.getUint16(16),
				'samplesize': _0x5fda53.getUint16(18),
				'samplerate': _0x5fda53.getUint16(24) + _0x5fda53.getUint16(26) / 65536
			};
			return _0x5b70af.byteLength > 28 && (_0x5cfcb8.streamDescriptor = _0x325981(_0x5b70af.subarray(28))[0]), _0x5cfcb8;
		},
		'moof': function _0xe06ca0(_0x4d905a) {
			return { 'boxes': _0x325981(_0x4d905a) };
		},
		'moov': function _0x3a6a77(_0x5050ec) {
			return { 'boxes': _0x325981(_0x5050ec) };
		},
		'mvex': function _0x5de2ed(_0x20c5e2) {
			return { 'boxes': _0x325981(_0x20c5e2) };
		},
		'mvhd': function _0x51ae34(_0x10ed3c) {
			var _0x5942d1 = new DataView(_0x10ed3c.buffer, _0x10ed3c.byteOffset, _0x10ed3c.byteLength), _0x3bd1e6 = 4, _0x359ba0 = {
				'version': _0x5942d1.getUint8(0),
				'flags': new Uint8Array(_0x10ed3c.subarray(1, 4))
			};
			return _0x359ba0.version === 1 ? (_0x3bd1e6 += 4, _0x359ba0.creationTime = _0x5374f7(_0x5942d1.getUint32(_0x3bd1e6)), _0x3bd1e6 += 8, _0x359ba0.modificationTime = _0x5374f7(_0x5942d1.getUint32(_0x3bd1e6)), _0x3bd1e6 += 4, _0x359ba0.timescale = _0x5942d1.getUint32(_0x3bd1e6), _0x3bd1e6 += 8, _0x359ba0.duration = _0x5942d1.getUint32(_0x3bd1e6)) : (_0x359ba0.creationTime = _0x5374f7(_0x5942d1.getUint32(_0x3bd1e6)), _0x3bd1e6 += 4, _0x359ba0.modificationTime = _0x5374f7(_0x5942d1.getUint32(_0x3bd1e6)), _0x3bd1e6 += 4, _0x359ba0.timescale = _0x5942d1.getUint32(_0x3bd1e6), _0x3bd1e6 += 4, _0x359ba0.duration = _0x5942d1.getUint32(_0x3bd1e6)), _0x3bd1e6 += 4, _0x359ba0.rate = _0x5942d1.getUint16(_0x3bd1e6) + _0x5942d1.getUint16(_0x3bd1e6 + 2) / 16, _0x3bd1e6 += 4, _0x359ba0.volume = _0x5942d1.getUint8(_0x3bd1e6) + _0x5942d1.getUint8(_0x3bd1e6 + 1) / 8, _0x3bd1e6 += 2, _0x3bd1e6 += 2, _0x3bd1e6 += 8, _0x359ba0.matrix = new Uint32Array(_0x10ed3c.subarray(_0x3bd1e6, _0x3bd1e6 + 36)), _0x3bd1e6 += 36, _0x3bd1e6 += 24, _0x359ba0.nextTrackId = _0x5942d1.getUint32(_0x3bd1e6), _0x359ba0;
		},
		'pdin': function _0x2e56ed(_0x148c2a) {
			var _0x11c676 = new DataView(_0x148c2a.buffer, _0x148c2a.byteOffset, _0x148c2a.byteLength);
			return {
				'version': _0x11c676.getUint8(0),
				'flags': new Uint8Array(_0x148c2a.subarray(1, 4)),
				'rate': _0x11c676.getUint32(4),
				'initialDelay': _0x11c676.getUint32(8)
			};
		},
		'sdtp': function _0x320010(_0xa6f28c) {
			var _0x16a848 = {
				'version': _0xa6f28c[0],
				'flags': new Uint8Array(_0xa6f28c.subarray(1, 4)),
				'samples': []
			}, _0x4a0ee1;
			for (_0x4a0ee1 = 4; _0x4a0ee1 < _0xa6f28c.byteLength; _0x4a0ee1++) {
				_0x16a848.samples.push({
					'dependsOn': (_0xa6f28c[_0x4a0ee1] & 48) >> 4,
					'isDependedOn': (_0xa6f28c[_0x4a0ee1] & 12) >> 2,
					'hasRedundancy': _0xa6f28c[_0x4a0ee1] & 3
				});
			}
			return _0x16a848;
		},
		'sidx': function _0x5f41ce(_0xb68a6a) {
			var _0x4d23a6 = new DataView(_0xb68a6a.buffer, _0xb68a6a.byteOffset, _0xb68a6a.byteLength), _0x561d75 = {
				'version': _0xb68a6a[0],
				'flags': new Uint8Array(_0xb68a6a.subarray(1, 4)),
				'references': [],
				'referenceId': _0x4d23a6.getUint32(4),
				'timescale': _0x4d23a6.getUint32(8),
				'earliestPresentationTime': _0x4d23a6.getUint32(12),
				'firstOffset': _0x4d23a6.getUint32(16)
			}, _0x8748ca = _0x4d23a6.getUint16(22), _0x1d617e;
			for (_0x1d617e = 24; _0x8748ca; _0x1d617e += 12, _0x8748ca--) {
				_0x561d75.references.push({
					'referenceType': (_0xb68a6a[_0x1d617e] & 128) >>> 7,
					'referencedSize': _0x4d23a6.getUint32(_0x1d617e) & 2147483647,
					'subsegmentDuration': _0x4d23a6.getUint32(_0x1d617e + 4),
					'startsWithSap': !!(_0xb68a6a[_0x1d617e + 8] & 128),
					'sapType': (_0xb68a6a[_0x1d617e + 8] & 112) >>> 4,
					'sapDeltaTime': _0x4d23a6.getUint32(_0x1d617e + 8) & 268435455
				});
			}
			return _0x561d75;
		},
		'smhd': function _0x2601fd(_0x52f4e1) {
			return {
				'version': _0x52f4e1[0],
				'flags': new Uint8Array(_0x52f4e1.subarray(1, 4)),
				'balance': _0x52f4e1[4] + _0x52f4e1[5] / 256
			};
		},
		'stbl': function _0x311006(_0x4e14f6) {
			return { 'boxes': _0x325981(_0x4e14f6) };
		},
		'stco': function _0x1aa323(_0x2d328a) {
			var _0x3d571f = new DataView(_0x2d328a.buffer, _0x2d328a.byteOffset, _0x2d328a.byteLength), _0x1a9d3e = {
				'version': _0x2d328a[0],
				'flags': new Uint8Array(_0x2d328a.subarray(1, 4)),
				'chunkOffsets': []
			}, _0x176319 = _0x3d571f.getUint32(4), _0x29e57b;
			for (_0x29e57b = 8; _0x176319; _0x29e57b += 4, _0x176319--) {
				_0x1a9d3e.chunkOffsets.push(_0x3d571f.getUint32(_0x29e57b));
			}
			return _0x1a9d3e;
		},
		'stsc': function _0x188f61(_0x4b1c6d) {
			var _0x995836 = new DataView(_0x4b1c6d.buffer, _0x4b1c6d.byteOffset, _0x4b1c6d.byteLength), _0x1bd41e = _0x995836.getUint32(4), _0x3d106c = {
				'version': _0x4b1c6d[0],
				'flags': new Uint8Array(_0x4b1c6d.subarray(1, 4)),
				'sampleToChunks': []
			}, _0x4d4f72;
			for (_0x4d4f72 = 8; _0x1bd41e; _0x4d4f72 += 12, _0x1bd41e--) {
				_0x3d106c.sampleToChunks.push({
					'firstChunk': _0x995836.getUint32(_0x4d4f72),
					'samplesPerChunk': _0x995836.getUint32(_0x4d4f72 + 4),
					'sampleDescriptionIndex': _0x995836.getUint32(_0x4d4f72 + 8)
				});
			}
			return _0x3d106c;
		},
		'stsd': function _0x1831a4(_0x351135) {
			return {
				'version': _0x351135[0],
				'flags': new Uint8Array(_0x351135.subarray(1, 4)),
				'sampleDescriptions': _0x325981(_0x351135.subarray(8))
			};
		},
		'stsz': function _0x5c5a31(_0x421d1b) {
			var _0x478617 = new DataView(_0x421d1b.buffer, _0x421d1b.byteOffset, _0x421d1b.byteLength), _0x5afafa = {
				'version': _0x421d1b[0],
				'flags': new Uint8Array(_0x421d1b.subarray(1, 4)),
				'sampleSize': _0x478617.getUint32(4),
				'entries': []
			}, _0x1455d8;
			for (_0x1455d8 = 12; _0x1455d8 < _0x421d1b.byteLength; _0x1455d8 += 4) {
				_0x5afafa.entries.push(_0x478617.getUint32(_0x1455d8));
			}
			return _0x5afafa;
		},
		'stts': function _0xda14d(_0x140570) {
			var _0x47d181 = new DataView(_0x140570.buffer, _0x140570.byteOffset, _0x140570.byteLength), _0x454ae4 = {
				'version': _0x140570[0],
				'flags': new Uint8Array(_0x140570.subarray(1, 4)),
				'timeToSamples': []
			}, _0x35a19e = _0x47d181.getUint32(4), _0x906992;
			for (_0x906992 = 8; _0x35a19e; _0x906992 += 8, _0x35a19e--) {
				_0x454ae4.timeToSamples.push({
					'sampleCount': _0x47d181.getUint32(_0x906992),
					'sampleDelta': _0x47d181.getUint32(_0x906992 + 4)
				});
			}
			return _0x454ae4;
		},
		'styp': function _0x364dcd(_0x1d03b9) {
			return _0x77a226.ftyp(_0x1d03b9);
		},
		'tfdt': function _0x3c2237(_0x9acc1b) {
			var _0x2133ab = {
				'version': _0x9acc1b[0],
				'flags': new Uint8Array(_0x9acc1b.subarray(1, 4)),
				'baseMediaDecodeTime': _0x9acc1b[4] << 24 | _0x9acc1b[5] << 16 | _0x9acc1b[6] << 8 | _0x9acc1b[7]
			};
			return _0x2133ab.version === 1 && (_0x2133ab.baseMediaDecodeTime *= Math.pow(2, 32), _0x2133ab.baseMediaDecodeTime += _0x9acc1b[8] << 24 | _0x9acc1b[9] << 16 | _0x9acc1b[10] << 8 | _0x9acc1b[11]), _0x2133ab;
		},
		'tfhd': function _0x5bc8aa(_0x31a621) {
			var _0x481506 = new DataView(_0x31a621.buffer, _0x31a621.byteOffset, _0x31a621.byteLength), _0xe1b31a = {
				'version': _0x31a621[0],
				'flags': new Uint8Array(_0x31a621.subarray(1, 4)),
				'trackId': _0x481506.getUint32(4)
			}, _0x9a949a = _0xe1b31a.flags[2] & 1, _0x3bcafc = _0xe1b31a.flags[2] & 2, _0x3d7c24 = _0xe1b31a.flags[2] & 8, _0x5a3fc3 = _0xe1b31a.flags[2] & 16, _0x478bc5 = _0xe1b31a.flags[2] & 32, _0x567207 = _0xe1b31a.flags[0] & 65536, _0x12c0fd = _0xe1b31a.flags[0] & 131072, _0x291912;
			return _0x291912 = 8, _0x9a949a && (_0x291912 += 4, _0xe1b31a.baseDataOffset = _0x481506.getUint32(12), _0x291912 += 4), _0x3bcafc && (_0xe1b31a.sampleDescriptionIndex = _0x481506.getUint32(_0x291912), _0x291912 += 4), _0x3d7c24 && (_0xe1b31a.defaultSampleDuration = _0x481506.getUint32(_0x291912), _0x291912 += 4), _0x5a3fc3 && (_0xe1b31a.defaultSampleSize = _0x481506.getUint32(_0x291912), _0x291912 += 4), _0x478bc5 && (_0xe1b31a.defaultSampleFlags = _0x481506.getUint32(_0x291912)), _0x567207 && (_0xe1b31a.durationIsEmpty = true), !_0x9a949a && _0x12c0fd && (_0xe1b31a.baseDataOffsetIsMoof = true), _0xe1b31a;
		},
		'tkhd': function _0x57b3ed(_0x4fde20) {
			var _0x34a2b1 = new DataView(_0x4fde20.buffer, _0x4fde20.byteOffset, _0x4fde20.byteLength), _0x579673 = 4, _0xd44c5f = {
				'version': _0x34a2b1.getUint8(0),
				'flags': new Uint8Array(_0x4fde20.subarray(1, 4))
			};
			return _0xd44c5f.version === 1 ? (_0x579673 += 4, _0xd44c5f.creationTime = _0x5374f7(_0x34a2b1.getUint32(_0x579673)), _0x579673 += 8, _0xd44c5f.modificationTime = _0x5374f7(_0x34a2b1.getUint32(_0x579673)), _0x579673 += 4, _0xd44c5f.trackId = _0x34a2b1.getUint32(_0x579673), _0x579673 += 4, _0x579673 += 8, _0xd44c5f.duration = _0x34a2b1.getUint32(_0x579673)) : (_0xd44c5f.creationTime = _0x5374f7(_0x34a2b1.getUint32(_0x579673)), _0x579673 += 4, _0xd44c5f.modificationTime = _0x5374f7(_0x34a2b1.getUint32(_0x579673)), _0x579673 += 4, _0xd44c5f.trackId = _0x34a2b1.getUint32(_0x579673), _0x579673 += 4, _0x579673 += 4, _0xd44c5f.duration = _0x34a2b1.getUint32(_0x579673)), _0x579673 += 4, _0x579673 += 8, _0xd44c5f.layer = _0x34a2b1.getUint16(_0x579673), _0x579673 += 2, _0xd44c5f.alternateGroup = _0x34a2b1.getUint16(_0x579673), _0x579673 += 2, _0xd44c5f.volume = _0x34a2b1.getUint8(_0x579673) + _0x34a2b1.getUint8(_0x579673 + 1) / 8, _0x579673 += 2, _0x579673 += 2, _0xd44c5f.matrix = new Uint32Array(_0x4fde20.subarray(_0x579673, _0x579673 + 36)), _0x579673 += 36, _0xd44c5f.width = _0x34a2b1.getUint16(_0x579673) + _0x34a2b1.getUint16(_0x579673 + 2) / 16, _0x579673 += 4, _0xd44c5f.height = _0x34a2b1.getUint16(_0x579673) + _0x34a2b1.getUint16(_0x579673 + 2) / 16, _0xd44c5f;
		},
		'traf': function _0x421aef(_0x48c2d2) {
			return { 'boxes': _0x325981(_0x48c2d2) };
		},
		'trak': function _0x4fc16a(_0x1df231) {
			return { 'boxes': _0x325981(_0x1df231) };
		},
		'trex': function _0x44c7bc(_0x51c3e8) {
			var _0x40ec16 = new DataView(_0x51c3e8.buffer, _0x51c3e8.byteOffset, _0x51c3e8.byteLength);
			return {
				'version': _0x51c3e8[0],
				'flags': new Uint8Array(_0x51c3e8.subarray(1, 4)),
				'trackId': _0x40ec16.getUint32(4),
				'defaultSampleDescriptionIndex': _0x40ec16.getUint32(8),
				'defaultSampleDuration': _0x40ec16.getUint32(12),
				'defaultSampleSize': _0x40ec16.getUint32(16),
				'sampleDependsOn': _0x51c3e8[20] & 3,
				'sampleIsDependedOn': (_0x51c3e8[21] & 192) >> 6,
				'sampleHasRedundancy': (_0x51c3e8[21] & 48) >> 4,
				'samplePaddingValue': (_0x51c3e8[21] & 14) >> 1,
				'sampleIsDifferenceSample': !!(_0x51c3e8[21] & 1),
				'sampleDegradationPriority': _0x40ec16.getUint16(22)
			};
		},
		'trun': function _0x40845c(_0xfebd8c) {
			var _0x22a8bf = {
				'version': _0xfebd8c[0],
				'flags': new Uint8Array(_0xfebd8c.subarray(1, 4)),
				'samples': []
			}, _0x4158a6 = new DataView(_0xfebd8c.buffer, _0xfebd8c.byteOffset, _0xfebd8c.byteLength), _0x5716df = _0x22a8bf.flags[2] & 1, _0x48e02e = _0x22a8bf.flags[2] & 4, _0x23ced1 = _0x22a8bf.flags[1] & 1, _0x48deb8 = _0x22a8bf.flags[1] & 2, _0x3f1cf0 = _0x22a8bf.flags[1] & 4, _0x316bf0 = _0x22a8bf.flags[1] & 8, _0x23157b = _0x4158a6.getUint32(4), _0x17becd = 8, _0x154dd8;
			_0x5716df && (_0x22a8bf.dataOffset = _0x4158a6.getInt32(_0x17becd), _0x17becd += 4);
			_0x48e02e && _0x23157b && (_0x154dd8 = { 'flags': _0x1cd189(_0xfebd8c.subarray(_0x17becd, _0x17becd + 4)) }, _0x17becd += 4, _0x23ced1 && (_0x154dd8.duration = _0x4158a6.getUint32(_0x17becd), _0x17becd += 4), _0x48deb8 && (_0x154dd8.size = _0x4158a6.getUint32(_0x17becd), _0x17becd += 4), _0x316bf0 && (_0x154dd8.compositionTimeOffset = _0x4158a6.getUint32(_0x17becd), _0x17becd += 4), _0x22a8bf.samples.push(_0x154dd8), _0x23157b--);
			while (_0x23157b--) {
				_0x154dd8 = {};
				_0x23ced1 && (_0x154dd8.duration = _0x4158a6.getUint32(_0x17becd), _0x17becd += 4);
				_0x48deb8 && (_0x154dd8.size = _0x4158a6.getUint32(_0x17becd), _0x17becd += 4);
				_0x3f1cf0 && (_0x154dd8.flags = _0x1cd189(_0xfebd8c.subarray(_0x17becd, _0x17becd + 4)), _0x17becd += 4);
				_0x316bf0 && (_0x154dd8.compositionTimeOffset = _0x4158a6.getUint32(_0x17becd), _0x17becd += 4);
				_0x22a8bf.samples.push(_0x154dd8);
			}
			return _0x22a8bf;
		},
		'url ': function _0x153344(_0x1da6fd) {
			return {
				'version': _0x1da6fd[0],
				'flags': new Uint8Array(_0x1da6fd.subarray(1, 4))
			};
		},
		'vmhd': function _0x32d1e8(_0x427c4b) {
			var _0x2fab2f = new DataView(_0x427c4b.buffer, _0x427c4b.byteOffset, _0x427c4b.byteLength);
			return {
				'version': _0x427c4b[0],
				'flags': new Uint8Array(_0x427c4b.subarray(1, 4)),
				'graphicsmode': _0x2fab2f.getUint16(4),
				'opcolor': new Uint16Array([
					_0x2fab2f.getUint16(6),
					_0x2fab2f.getUint16(8),
					_0x2fab2f.getUint16(10)
				])
			};
		}
	};
	_0x325981 = function _0x4626e7(_0x37d8d4) {
		var _0x5618cb = 0, _0x3c107d = [], _0x1fe298, _0x4c04a7, _0x496588, _0x2cfbda, _0x17e5ea, _0x3ceecd = new ArrayBuffer(_0x37d8d4.length), _0x5e89d5 = new Uint8Array(_0x3ceecd);
		for (var _0x22b811 = 0; _0x22b811 < _0x37d8d4.length; ++_0x22b811) {
			_0x5e89d5[_0x22b811] = _0x37d8d4[_0x22b811];
		}
		_0x1fe298 = new DataView(_0x3ceecd);
		while (_0x5618cb < _0x37d8d4.byteLength) {
			_0x4c04a7 = _0x1fe298.getUint32(_0x5618cb);
			_0x496588 = _0x1be40e(_0x37d8d4.subarray(_0x5618cb + 4, _0x5618cb + 8));
			_0x2cfbda = _0x4c04a7 > 1 ? _0x5618cb + _0x4c04a7 : _0x37d8d4.byteLength;
			_0x17e5ea = (_0x77a226[_0x496588] || function (_0x1b38fd) {
				return { 'data': _0x1b38fd };
			})(_0x37d8d4.subarray(_0x5618cb + 8, _0x2cfbda));
			_0x17e5ea.size = _0x4c04a7;
			_0x17e5ea.type = _0x496588;
			_0x3c107d.push(_0x17e5ea);
			_0x5618cb = _0x2cfbda;
		}
		return _0x3c107d;
	};
	_0x1679dc = function _0x11426e(_0x2ee42d, _0x812ac5) {
		var _0x424fa5;
		return _0x812ac5 = _0x812ac5 || 0, _0x424fa5 = new Array(_0x812ac5 * 2 + 1).join(' '), _0x2ee42d.map(function (_0x4bc75c, _0x245770) {
			return _0x424fa5 + _0x4bc75c.type + '\n' + Object.keys(_0x4bc75c).filter(function (_0x2c1c2f) {
				return _0x2c1c2f !== 'type' && _0x2c1c2f !== 'boxes';
			}).map(function (_0x4745b0) {
				var _0x425b4a = _0x424fa5 + '  ' + _0x4745b0 + ': ', _0x2bc612 = _0x4bc75c[_0x4745b0];
				if (_0x2bc612 instanceof Uint8Array || _0x2bc612 instanceof Uint32Array) {
					var _0x31de3e = Array.prototype.slice.call(new Uint8Array(_0x2bc612.buffer, _0x2bc612.byteOffset, _0x2bc612.byteLength)).map(function (_0x2d2b3b) {
						return ' ' + ('00' + _0x2d2b3b.toString(16)).slice(-2);
					}).join('').match(/.{1,24}/g);
					if (!_0x31de3e) {
						return _0x425b4a + '<>';
					}
					if (_0x31de3e.length === 1) {
						return _0x425b4a + '<' + _0x31de3e.join('').slice(1) + '>';
					}
					return _0x425b4a + '<\n' + _0x31de3e.map(function (_0x410284) {
						return _0x424fa5 + '  ' + _0x410284;
					}).join('\n') + '\n' + _0x424fa5 + '  >';
				}
				return _0x425b4a + JSON.stringify(_0x2bc612, null, 2).split('\n').map(function (_0x4647b6, _0x27bf6f) {
					if (_0x27bf6f === 0) {
						return _0x4647b6;
					}
					return _0x424fa5 + '  ' + _0x4647b6;
				}).join('\n');
			}).join('\n') + (_0x4bc75c.boxes ? '\n' + _0x1679dc(_0x4bc75c.boxes, _0x812ac5 + 1) : '');
		}).join('\n');
	};
	var _0x46612f = {
		'inspect': _0x325981,
		'textify': _0x1679dc,
		'parseTfdt': _0x77a226.tfdt,
		'parseHdlr': _0x77a226.hdlr,
		'parseTfhd': _0x77a226.tfhd,
		'parseTrun': _0x77a226.trun
	}, _0x121bab = _0x46612f.inspect, _0xa01650 = _0x46612f.textify, _0x4d003f = _0x46612f.parseTfdt, _0x3356a5 = _0x46612f.parseHdlr, _0x20ee78 = _0x46612f.parseTfhd, _0x4a9ada = _0x46612f.parseTrun, _0x452ce5 = Object.freeze({
		'default': _0x46612f,
		'__moduleExports': _0x46612f,
		'inspect': _0x121bab,
		'textify': _0xa01650,
		'parseTfdt': _0x4d003f,
		'parseHdlr': _0x3356a5,
		'parseTfhd': _0x20ee78,
		'parseTrun': _0x4a9ada
	}), _0x3e2191 = _0x452ce5 && _0x46612f || _0x452ce5, _0x701c40 = _0x7b5076.discardEmulationPreventionBytes, _0x581408 = _0x2bfe2e.CaptionStream, _0x202348 = function _0x399d3a(_0x56e033, _0x2829d0) {
		var _0x3e2360 = _0x56e033;
		for (var _0xb0cb23 = 0; _0xb0cb23 < _0x2829d0.length; _0xb0cb23++) {
			var _0x40ecd8 = _0x2829d0[_0xb0cb23];
			if (_0x3e2360 < _0x40ecd8.size) {
				return _0x40ecd8;
			}
			_0x3e2360 -= _0x40ecd8.size;
		}
		return null;
	}, _0x415a55 = function _0x4d1fc8(_0x4068cc, _0x45d297, _0x361bb7) {
		var _0x5c1d53 = new DataView(_0x4068cc.buffer, _0x4068cc.byteOffset, _0x4068cc.byteLength), _0x3c8c61 = [], _0x563351, _0x398c85, _0x3b7de9, _0x599a94;
		for (_0x398c85 = 0; _0x398c85 + 4 < _0x4068cc.length; _0x398c85 += _0x3b7de9) {
			_0x3b7de9 = _0x5c1d53.getUint32(_0x398c85);
			_0x398c85 += 4;
			if (_0x3b7de9 <= 0) {
				continue;
			}
			switch (_0x4068cc[_0x398c85] & 31) {
				case 6:
					var _0x2fbcdb = _0x4068cc.subarray(_0x398c85 + 1, _0x398c85 + 1 + _0x3b7de9), _0x57e57e = _0x202348(_0x398c85, _0x45d297);
					_0x563351 = {
						'nalUnitType': 'sei_rbsp',
						'size': _0x3b7de9,
						'data': _0x2fbcdb,
						'escapedRBSP': _0x701c40(_0x2fbcdb),
						'trackId': _0x361bb7
					};
					_0x57e57e ? (_0x563351.pts = _0x57e57e.pts, _0x563351.dts = _0x57e57e.dts, _0x599a94 = _0x57e57e) : (_0x563351.pts = _0x599a94.pts, _0x563351.dts = _0x599a94.dts);
					_0x3c8c61.push(_0x563351);
					break;
				default:
					break;
			}
		}
		return _0x3c8c61;
	}, _0x1c7d36 = function _0x1ebb2c(_0x5d3a08, _0x124184, _0x2806b3) {
		var _0xc46e7d = _0x124184, _0x3a81b2 = _0x2806b3.defaultSampleDuration || 0, _0x10a9d5 = _0x2806b3.defaultSampleSize || 0, _0x2562d9 = _0x2806b3.trackId, _0xf18240 = [];
		return _0x5d3a08.forEach(function (_0x3d9ba9) {
			var _0x337906 = _0x3e2191.parseTrun(_0x3d9ba9), _0x16f825 = _0x337906.samples;
			_0x16f825.forEach(function (_0x15029c) {
				_0x15029c.duration === undefined && (_0x15029c.duration = _0x3a81b2);
				_0x15029c.size === undefined && (_0x15029c.size = _0x10a9d5);
				_0x15029c.trackId = _0x2562d9;
				_0x15029c.dts = _0xc46e7d;
				_0x15029c.compositionTimeOffset === undefined && (_0x15029c.compositionTimeOffset = 0);
				_0x15029c.pts = _0xc46e7d + _0x15029c.compositionTimeOffset;
				_0xc46e7d += _0x15029c.duration;
			});
			_0xf18240 = _0xf18240.concat(_0x16f825);
		}), _0xf18240;
	}, _0x19f9df = function _0x22409f(_0x40afcc, _0x246bff) {
		var _0x10a9b3 = _0x104ab6.findBox(_0x40afcc, [
			'moof',
			'traf'
		]), _0x4fae60 = _0x104ab6.findBox(_0x40afcc, ['mdat']), _0xb8515b = {}, _0x19801c = [];
		return _0x4fae60.forEach(function (_0x1ab4e5, _0x41e83e) {
			var _0x186d45 = _0x10a9b3[_0x41e83e];
			_0x19801c.push({
				'mdat': _0x1ab4e5,
				'traf': _0x186d45
			});
		}), _0x19801c.forEach(function (_0x18d7a5) {
			var _0x2a459f = _0x18d7a5.mdat, _0xb7eb24 = _0x18d7a5.traf, _0x60988e = _0x104ab6.findBox(_0xb7eb24, ['tfhd']), _0xfc19f2 = _0x3e2191.parseTfhd(_0x60988e[0]), _0xa35cce = _0xfc19f2.trackId, _0x249af5 = _0x104ab6.findBox(_0xb7eb24, ['tfdt']), _0x43c0ff = _0x249af5.length > 0 ? _0x3e2191.parseTfdt(_0x249af5[0]).baseMediaDecodeTime : 0, _0x13edf0 = _0x104ab6.findBox(_0xb7eb24, ['trun']), _0x1b2ee8, _0x123b86;
			_0x246bff === _0xa35cce && _0x13edf0.length > 0 && (_0x1b2ee8 = _0x1c7d36(_0x13edf0, _0x43c0ff, _0xfc19f2), _0x123b86 = _0x415a55(_0x2a459f, _0x1b2ee8, _0xa35cce), !_0xb8515b[_0xa35cce] && (_0xb8515b[_0xa35cce] = []), _0xb8515b[_0xa35cce] = _0xb8515b[_0xa35cce].concat(_0x123b86));
		}), _0xb8515b;
	}, _0x400cef = function _0x398450(_0x10a813, _0x3c4057, _0x3f4bbc) {
		var _0x54089f;
		if (!_0x3c4057) {
			return null;
		}
		return _0x54089f = _0x19f9df(_0x10a813, _0x3c4057), {
			'seiNals': _0x54089f[_0x3c4057],
			'timescale': _0x3f4bbc
		};
	}, _0x35a135 = function _0x30c171() {
		var _0x3e3619 = false, _0x1188e7, _0x446a42, _0x5a0212, _0x50f810, _0x509a37;
		this.isInitialized = function () {
			return _0x3e3619;
		};
		this.init = function () {
			_0x1188e7 = new _0x581408();
			_0x3e3619 = true;
			_0x1188e7.on('data', function (_0x342bef) {
				_0x342bef.startTime = _0x342bef.startPts / _0x50f810;
				_0x342bef.endTime = _0x342bef.endPts / _0x50f810;
				_0x509a37.captions.push(_0x342bef);
				_0x509a37.captionStreams[_0x342bef.stream] = true;
			});
		};
		this.isNewInit = function (_0x329f43, _0x44eabc) {
			if (_0x329f43 && _0x329f43.length === 0 || _0x44eabc && (typeof _0x44eabc === 'undefined' ? 'undefined' : _0x65b994(_0x44eabc)) === 'object' && Object.keys(_0x44eabc).length === 0) {
				return false;
			}
			return _0x5a0212 !== _0x329f43[0] || _0x50f810 !== _0x44eabc[_0x5a0212];
		};
		this.parse = function (_0x399a10, _0x54c087, _0xb77b32) {
			var _0x4ddcee;
			if (!this.isInitialized()) {
				return null;
			} else {
				if (!_0x54c087 || !_0xb77b32) {
					return null;
				} else {
					if (this.isNewInit(_0x54c087, _0xb77b32)) {
						_0x5a0212 = _0x54c087[0];
						_0x50f810 = _0xb77b32[_0x5a0212];
					} else {
						if (!_0x5a0212 || !_0x50f810) {
							return _0x446a42.push(_0x399a10), null;
						}
					}
				}
			}
			while (_0x446a42.length > 0) {
				var _0x422b9f = _0x446a42.shift();
				this.parse(_0x422b9f, _0x54c087, _0xb77b32);
			}
			_0x4ddcee = _0x400cef(_0x399a10, _0x5a0212, _0x50f810);
			if (_0x4ddcee === null || !_0x4ddcee.seiNals) {
				return null;
			}
			return this.pushNals(_0x4ddcee.seiNals), this.flushStream(), _0x509a37;
		};
		this.pushNals = function (_0x3d8507) {
			if (!this.isInitialized() || !_0x3d8507 || _0x3d8507.length === 0) {
				return null;
			}
			_0x3d8507.forEach(function (_0x4c87cb) {
				_0x1188e7.push(_0x4c87cb);
			});
		};
		this.flushStream = function () {
			if (!this.isInitialized()) {
				return null;
			}
			_0x1188e7.flush();
		};
		this.clearParsedCaptions = function () {
			_0x509a37.captions = [];
			_0x509a37.captionStreams = {};
		};
		this.resetCaptionStream = function () {
			if (!this.isInitialized()) {
				return null;
			}
			_0x1188e7.reset();
		};
		this.clearAllCaptions = function () {
			this.clearParsedCaptions();
			this.resetCaptionStream();
		};
		this.reset = function () {
			_0x446a42 = [];
			_0x5a0212 = null;
			_0x50f810 = null;
			!_0x509a37 ? _0x509a37 = {
				'captions': [],
				'captionStreams': {}
			} : this.clearParsedCaptions();
			this.resetCaptionStream();
		};
		this.reset();
	}, _0x5dcce6 = _0x35a135, _0x2b4e63 = Object.freeze({
		'default': _0x5dcce6,
		'__moduleExports': _0x5dcce6
	}), _0x3a5c82 = _0x5aa7f8 && _0x5734e5 || _0x5aa7f8, _0x360045 = _0x2b4e63 && _0x5dcce6 || _0x2b4e63, _0x14a208 = {
		'generator': _0x1ce55d,
		'probe': _0x104ab6,
		'Transmuxer': _0x3a5c82.Transmuxer,
		'AudioSegmentStream': _0x3a5c82.AudioSegmentStream,
		'VideoSegmentStream': _0x3a5c82.VideoSegmentStream,
		'CaptionParser': _0x360045
	}, _0x3a08e9 = _0x14a208.CaptionParser, _0x20b755 = function _0x1fa554(_0x23d748) {
		var _0x3344de = _0x23d748[1] & 31;
		return _0x3344de <<= 8, _0x3344de |= _0x23d748[2], _0x3344de;
	}, _0x3d9a4e = function _0x469beb(_0x4d9f67) {
		return !!(_0x4d9f67[1] & 64);
	}, _0x392fe4 = function _0x1b496b(_0x204e22) {
		var _0x362b96 = 0;
		return (_0x204e22[3] & 48) >>> 4 > 1 && (_0x362b96 += _0x204e22[4] + 1), _0x362b96;
	}, _0x117b98 = function _0xd1b3ea(_0x19b552, _0x2db8e2) {
		var _0x1b51ad = _0x20b755(_0x19b552);
		if (_0x1b51ad === 0) {
			return 'pat';
		} else {
			if (_0x1b51ad === _0x2db8e2) {
				return 'pmt';
			} else {
				if (_0x2db8e2) {
					return 'pes';
				}
			}
		}
		return null;
	}, _0x590dd5 = function _0x13f581(_0x1c7bc8) {
		var _0x2ccef4 = _0x3d9a4e(_0x1c7bc8), _0x254ac4 = 4 + _0x392fe4(_0x1c7bc8);
		return _0x2ccef4 && (_0x254ac4 += _0x1c7bc8[_0x254ac4] + 1), (_0x1c7bc8[_0x254ac4 + 10] & 31) << 8 | _0x1c7bc8[_0x254ac4 + 11];
	}, _0x330722 = function _0xf99cfb(_0x25ca15) {
		var _0x29096e = {}, _0x2b17ca = _0x3d9a4e(_0x25ca15), _0x2912d2 = 4 + _0x392fe4(_0x25ca15);
		_0x2b17ca && (_0x2912d2 += _0x25ca15[_0x2912d2] + 1);
		if (!(_0x25ca15[_0x2912d2 + 5] & 1)) {
			return;
		}
		var _0x2d4922, _0x7c7591, _0x254780;
		_0x2d4922 = (_0x25ca15[_0x2912d2 + 1] & 15) << 8 | _0x25ca15[_0x2912d2 + 2];
		_0x7c7591 = 3 + _0x2d4922 - 4;
		_0x254780 = (_0x25ca15[_0x2912d2 + 10] & 15) << 8 | _0x25ca15[_0x2912d2 + 11];
		var _0x314251 = 12 + _0x254780;
		while (_0x314251 < _0x7c7591) {
			var _0x5e6d24 = _0x2912d2 + _0x314251;
			_0x29096e[(_0x25ca15[_0x5e6d24 + 1] & 31) << 8 | _0x25ca15[_0x5e6d24 + 2]] = _0x25ca15[_0x5e6d24];
			_0x314251 += ((_0x25ca15[_0x5e6d24 + 3] & 15) << 8 | _0x25ca15[_0x5e6d24 + 4]) + 5;
		}
		return _0x29096e;
	}, _0x31add5 = function _0x1778cc(_0x47dd32, _0x31a5e5) {
		var _0x3a2726 = _0x20b755(_0x47dd32), _0x425e06 = _0x31a5e5[_0x3a2726];
		switch (_0x425e06) {
			case _0x16877c.H264_STREAM_TYPE:
				return 'video';
			case _0x16877c.ADTS_STREAM_TYPE:
				return 'audio';
			case _0x16877c.METADATA_STREAM_TYPE:
				return 'timed-metadata';
			default:
				return null;
		}
	}, _0x1b6507 = function _0x14d766(_0x2ddc27) {
		var _0x203d38 = _0x3d9a4e(_0x2ddc27);
		if (!_0x203d38) {
			return null;
		}
		var _0x50613d = 4 + _0x392fe4(_0x2ddc27);
		if (_0x50613d >= _0x2ddc27.byteLength) {
			return null;
		}
		var _0x315566 = null, _0x18ac8b;
		return _0x18ac8b = _0x2ddc27[_0x50613d + 7], _0x18ac8b & 192 && (_0x315566 = {}, _0x315566.pts = (_0x2ddc27[_0x50613d + 9] & 14) << 27 | (_0x2ddc27[_0x50613d + 10] & 255) << 20 | (_0x2ddc27[_0x50613d + 11] & 254) << 12 | (_0x2ddc27[_0x50613d + 12] & 255) << 5 | (_0x2ddc27[_0x50613d + 13] & 254) >>> 3, _0x315566.pts *= 4, _0x315566.pts += (_0x2ddc27[_0x50613d + 13] & 6) >>> 1, _0x315566.dts = _0x315566.pts, _0x18ac8b & 64 && (_0x315566.dts = (_0x2ddc27[_0x50613d + 14] & 14) << 27 | (_0x2ddc27[_0x50613d + 15] & 255) << 20 | (_0x2ddc27[_0x50613d + 16] & 254) << 12 | (_0x2ddc27[_0x50613d + 17] & 255) << 5 | (_0x2ddc27[_0x50613d + 18] & 254) >>> 3, _0x315566.dts *= 4, _0x315566.dts += (_0x2ddc27[_0x50613d + 18] & 6) >>> 1)), _0x315566;
	}, _0x3c46f0 = function _0x49caa1(_0x370f05) {
		switch (_0x370f05) {
			case 5:
				return 'slice_layer_without_partitioning_rbsp_idr';
			case 6:
				return 'sei_rbsp';
			case 7:
				return 'seq_parameter_set_rbsp';
			case 8:
				return 'pic_parameter_set_rbsp';
			case 9:
				return 'access_unit_delimiter_rbsp';
			default:
				return null;
		}
	}, _0x8689ab = function _0x52e9c6(_0x1b4ba2) {
		var _0x2b331a = 4 + _0x392fe4(_0x1b4ba2), _0x409696 = _0x1b4ba2.subarray(_0x2b331a), _0x3219a7 = 0, _0x2a733b = 0, _0x282d8f = false, _0x5b1b68;
		for (; _0x2a733b < _0x409696.byteLength - 3; _0x2a733b++) {
			if (_0x409696[_0x2a733b + 2] === 1) {
				_0x3219a7 = _0x2a733b + 5;
				break;
			}
		}
		while (_0x3219a7 < _0x409696.byteLength) {
			switch (_0x409696[_0x3219a7]) {
				case 0:
					if (_0x409696[_0x3219a7 - 1] !== 0) {
						_0x3219a7 += 2;
						break;
					} else {
						if (_0x409696[_0x3219a7 - 2] !== 0) {
							_0x3219a7++;
							break;
						}
					}
					if (_0x2a733b + 3 !== _0x3219a7 - 2) {
						_0x5b1b68 = _0x3c46f0(_0x409696[_0x2a733b + 3] & 31);
						_0x5b1b68 === 'slice_layer_without_partitioning_rbsp_idr' && (_0x282d8f = true);
					}
					do {
						_0x3219a7++;
					} while (_0x409696[_0x3219a7] !== 1 && _0x3219a7 < _0x409696.length);
					_0x2a733b = _0x3219a7 - 2, _0x3219a7 += 3;
					break;
				case 1:
					if (_0x409696[_0x3219a7 - 1] !== 0 || _0x409696[_0x3219a7 - 2] !== 0) {
						_0x3219a7 += 3;
						break;
					}
					_0x5b1b68 = _0x3c46f0(_0x409696[_0x2a733b + 3] & 31);
					_0x5b1b68 === 'slice_layer_without_partitioning_rbsp_idr' && (_0x282d8f = true);
					_0x2a733b = _0x3219a7 - 2, _0x3219a7 += 3;
					break;
				default:
					_0x3219a7 += 3;
					break;
			}
		}
		return _0x409696 = _0x409696.subarray(_0x2a733b), _0x3219a7 -= _0x2a733b, _0x2a733b = 0, _0x409696 && _0x409696.byteLength > 3 && (_0x5b1b68 = _0x3c46f0(_0x409696[_0x2a733b + 3] & 31), _0x5b1b68 === 'slice_layer_without_partitioning_rbsp_idr' && (_0x282d8f = true)), _0x282d8f;
	}, _0x1ea896 = {
		'parseType': _0x117b98,
		'parsePat': _0x590dd5,
		'parsePmt': _0x330722,
		'parsePayloadUnitStartIndicator': _0x3d9a4e,
		'parsePesType': _0x31add5,
		'parsePesTime': _0x1b6507,
		'videoPacketContainsKeyFrame': _0x8689ab
	}, _0xbb4554 = _0x1ea896.parseType, _0x382bf7 = _0x1ea896.parsePat, _0x7c2605 = _0x1ea896.parsePmt, _0x4f22ae = _0x1ea896.parsePayloadUnitStartIndicator, _0x2a2404 = _0x1ea896.parsePesType, _0x5981a9 = _0x1ea896.parsePesTime, _0x14269f = _0x1ea896.videoPacketContainsKeyFrame, _0x4ec9d9 = Object.freeze({
		'default': _0x1ea896,
		'__moduleExports': _0x1ea896,
		'parseType': _0xbb4554,
		'parsePat': _0x382bf7,
		'parsePmt': _0x7c2605,
		'parsePayloadUnitStartIndicator': _0x4f22ae,
		'parsePesType': _0x2a2404,
		'parsePesTime': _0x5981a9,
		'videoPacketContainsKeyFrame': _0x14269f
	}), _0x1f3005 = [
		96000,
		88200,
		64000,
		48000,
		44100,
		32000,
		24000,
		22050,
		16000,
		12000,
		11025,
		8000,
		7350
	], _0x20211f = function _0x20b220(_0x1239c9) {
		return _0x1239c9[0] << 21 | _0x1239c9[1] << 14 | _0x1239c9[2] << 7 | _0x1239c9[3];
	}, _0x49f85f = function _0x524210(_0x56c26d, _0x935ef, _0x1c14a3) {
		var _0x3bdedc, _0x8d37bb = '';
		for (_0x3bdedc = _0x935ef; _0x3bdedc < _0x1c14a3; _0x3bdedc++) {
			_0x8d37bb += '%' + ('00' + _0x56c26d[_0x3bdedc].toString(16)).slice(-2);
		}
		return _0x8d37bb;
	}, _0x4b5ec9 = function _0x442e95(_0x599092, _0x4bfac5, _0x24dc34) {
		return unescape(_0x49f85f(_0x599092, _0x4bfac5, _0x24dc34));
	}, _0x3a4cae = function _0xd0d395(_0x5b209d, _0x54af52) {
		var _0x27b5e7 = _0x5b209d[_0x54af52 + 6] << 21 | _0x5b209d[_0x54af52 + 7] << 14 | _0x5b209d[_0x54af52 + 8] << 7 | _0x5b209d[_0x54af52 + 9], _0x34008e = _0x5b209d[_0x54af52 + 5], _0x42f797 = (_0x34008e & 16) >> 4;
		if (_0x42f797) {
			return _0x27b5e7 + 20;
		}
		return _0x27b5e7 + 10;
	}, _0x285844 = function _0x4b8414(_0x24a632, _0x3f26db) {
		var _0x1605be = (_0x24a632[_0x3f26db + 5] & 224) >> 5, _0x5b2a3a = _0x24a632[_0x3f26db + 4] << 3, _0x1e985a = _0x24a632[_0x3f26db + 3] & 3 << 11;
		return _0x1e985a | _0x5b2a3a | _0x1605be;
	}, _0x3121d7 = function _0x5c3c64(_0x50cfaf, _0x43f7ec) {
		if (_0x50cfaf[_0x43f7ec] === 'I'.charCodeAt(0) && _0x50cfaf[_0x43f7ec + 1] === 'D'.charCodeAt(0) && _0x50cfaf[_0x43f7ec + 2] === '3'.charCodeAt(0)) {
			return 'timed-metadata';
		} else {
			if (_0x50cfaf[_0x43f7ec] & true && (_0x50cfaf[_0x43f7ec + 1] & 240) === 240) {
				return 'audio';
			}
		}
		return null;
	}, _0x110a23 = function _0x1f87dc(_0x1878e6) {
		var _0x3aedc7 = 0;
		while (_0x3aedc7 + 5 < _0x1878e6.length) {
			if (_0x1878e6[_0x3aedc7] !== 255 || (_0x1878e6[_0x3aedc7 + 1] & 246) !== 240) {
				_0x3aedc7++;
				continue;
			}
			return _0x1f3005[(_0x1878e6[_0x3aedc7 + 2] & 60) >>> 2];
		}
		return null;
	}, _0x4a081b = function _0xb62072(_0x1fe972) {
		var _0x4a68c0, _0x18f1e6, _0x38e3fc, _0x421f45;
		_0x4a68c0 = 10;
		if (_0x1fe972[5] & 64) {
			_0x4a68c0 += 4;
			_0x4a68c0 += _0x20211f(_0x1fe972.subarray(10, 14));
		}
		do {
			_0x18f1e6 = _0x20211f(_0x1fe972.subarray(_0x4a68c0 + 4, _0x4a68c0 + 8));
			if (_0x18f1e6 < 1) {
				return null;
			}
			_0x421f45 = String.fromCharCode(_0x1fe972[_0x4a68c0], _0x1fe972[_0x4a68c0 + 1], _0x1fe972[_0x4a68c0 + 2], _0x1fe972[_0x4a68c0 + 3]);
			if (_0x421f45 === 'PRIV') {
				_0x38e3fc = _0x1fe972.subarray(_0x4a68c0 + 10, _0x4a68c0 + _0x18f1e6 + 10);
				for (var _0xabf8c4 = 0; _0xabf8c4 < _0x38e3fc.byteLength; _0xabf8c4++) {
					if (_0x38e3fc[_0xabf8c4] === 0) {
						var _0x9633bb = _0x4b5ec9(_0x38e3fc, 0, _0xabf8c4);
						if (_0x9633bb === 'com.apple.streaming.transportStreamTimestamp') {
							var _0x4e0eec = _0x38e3fc.subarray(_0xabf8c4 + 1), _0x1d0e4f = (_0x4e0eec[3] & 1) << 30 | _0x4e0eec[4] << 22 | _0x4e0eec[5] << 14 | _0x4e0eec[6] << 6 | _0x4e0eec[7] >>> 2;
							return _0x1d0e4f *= 4, _0x1d0e4f += _0x4e0eec[7] & 3, _0x1d0e4f;
						}
						break;
					}
				}
			}
			_0x4a68c0 += 10;
			_0x4a68c0 += _0x18f1e6;
		} while (_0x4a68c0 < _0x1fe972.byteLength);
		return null;
	}, _0x589966 = {
		'parseId3TagSize': _0x3a4cae,
		'parseAdtsSize': _0x285844,
		'parseType': _0x3121d7,
		'parseSampleRate': _0x110a23,
		'parseAacTimestamp': _0x4a081b
	}, _0x286cc2 = _0x589966.parseId3TagSize, _0x1a44d6 = _0x589966.parseAdtsSize, _0x3bb731 = _0x589966.parseType, _0x4b0622 = _0x589966.parseSampleRate, _0x46195 = _0x589966.parseAacTimestamp, _0x1b60b0 = Object.freeze({
		'default': _0x589966,
		'__moduleExports': _0x589966,
		'parseId3TagSize': _0x286cc2,
		'parseAdtsSize': _0x1a44d6,
		'parseType': _0x3bb731,
		'parseSampleRate': _0x4b0622,
		'parseAacTimestamp': _0x46195
	}), _0x227a60 = _0x4ec9d9 && _0x1ea896 || _0x4ec9d9, _0x19fdf2 = _0x1b60b0 && _0x589966 || _0x1b60b0, _0x576360 = _0x26dc46.handleRollover, _0x38a224 = {
		ts: _0x227a60,
		aac: _0x19fdf2
	};
	var _0x3d6f2a = function _0x328435(_0x53f410) {
		if (_0x53f410[0] === 'I'.charCodeAt(0) && _0x53f410[1] === 'D'.charCodeAt(0) && _0x53f410[2] === '3'.charCodeAt(0)) {
			return true;
		}
		return false;
	}, _0x403a4d = function _0x1df6df(_0x5ac84f, _0x4415c2) {
		var _0x1260bc = 0, _0x66c256 = 188, _0x23aa8e, _0xe09b79;
		while (_0x66c256 < _0x5ac84f.byteLength) {
			if (_0x5ac84f[_0x1260bc] === 71 && _0x5ac84f[_0x66c256] === 71) {
				_0x23aa8e = _0x5ac84f.subarray(_0x1260bc, _0x66c256);
				_0xe09b79 = _0x38a224.ts.parseType(_0x23aa8e, _0x4415c2.pid);
				switch (_0xe09b79) {
					case 'pat':
						!_0x4415c2.pid && (_0x4415c2.pid = _0x38a224.ts.parsePat(_0x23aa8e));
						break;
					case 'pmt':
						!_0x4415c2.table && (_0x4415c2.table = _0x38a224.ts.parsePmt(_0x23aa8e));
						break;
					default:
						break;
				}
				if (_0x4415c2.pid && _0x4415c2.table) {
					return;
				}
				_0x1260bc += 188;
				_0x66c256 += 188;
				continue;
			}
			_0x1260bc++;
			_0x66c256++;
		}
	}, _0x5112b4 = function _0x6f803(_0x17b539, _0x1ef343, _0x537c3f) {
		var _0x4415db = 0, _0x489d43 = 188, _0x6308c5, _0x4b407f, _0x1b216c, _0x4d1745, _0x450b79, _0x9561a7 = false;
		while (_0x489d43 < _0x17b539.byteLength) {
			if (_0x17b539[_0x4415db] === 71 && _0x17b539[_0x489d43] === 71) {
				_0x6308c5 = _0x17b539.subarray(_0x4415db, _0x489d43);
				_0x4b407f = _0x38a224.ts.parseType(_0x6308c5, _0x1ef343.pid);
				switch (_0x4b407f) {
					case 'pes':
						_0x1b216c = _0x38a224.ts.parsePesType(_0x6308c5, _0x1ef343.table), _0x4d1745 = _0x38a224.ts.parsePayloadUnitStartIndicator(_0x6308c5);
						_0x1b216c === 'audio' && _0x4d1745 && (_0x450b79 = _0x38a224.ts.parsePesTime(_0x6308c5), _0x450b79 && (_0x450b79.type = 'audio', _0x537c3f.audio.push(_0x450b79), _0x9561a7 = true));
						break;
					default:
						break;
				}
				if (_0x9561a7) {
					break;
				}
				_0x4415db += 188;
				_0x489d43 += 188;
				continue;
			}
			_0x4415db++;
			_0x489d43++;
		}
		_0x489d43 = _0x17b539.byteLength;
		_0x4415db = _0x489d43 - 188;
		_0x9561a7 = false;
		while (_0x4415db >= 0) {
			if (_0x17b539[_0x4415db] === 71 && _0x17b539[_0x489d43] === 71) {
				_0x6308c5 = _0x17b539.subarray(_0x4415db, _0x489d43);
				_0x4b407f = _0x38a224.ts.parseType(_0x6308c5, _0x1ef343.pid);
				switch (_0x4b407f) {
					case 'pes':
						_0x1b216c = _0x38a224.ts.parsePesType(_0x6308c5, _0x1ef343.table), _0x4d1745 = _0x38a224.ts.parsePayloadUnitStartIndicator(_0x6308c5);
						_0x1b216c === 'audio' && _0x4d1745 && (_0x450b79 = _0x38a224.ts.parsePesTime(_0x6308c5), _0x450b79 && (_0x450b79.type = 'audio', _0x537c3f.audio.push(_0x450b79), _0x9561a7 = true));
						break;
					default:
						break;
				}
				if (_0x9561a7) {
					break;
				}
				_0x4415db -= 188;
				_0x489d43 -= 188;
				continue;
			}
			_0x4415db--;
			_0x489d43--;
		}
	}, _0x199119 = function _0x1c8db8(_0x3f7cda, _0x3c13dd, _0xe2c196) {
		var _0x54c75f = 0, _0x445724 = 188, _0x4ada6c, _0x360483, _0xa32839, _0x4db930, _0x171dbd, _0x33e696, _0x34bd6b, _0x53137b, _0x2f04c0 = false, _0x1e723a = {
			'data': [],
			'size': 0
		};
		while (_0x445724 < _0x3f7cda.byteLength) {
			if (_0x3f7cda[_0x54c75f] === 71 && _0x3f7cda[_0x445724] === 71) {
				_0x4ada6c = _0x3f7cda.subarray(_0x54c75f, _0x445724);
				_0x360483 = _0x38a224.ts.parseType(_0x4ada6c, _0x3c13dd.pid);
				switch (_0x360483) {
					case 'pes':
						_0xa32839 = _0x38a224.ts.parsePesType(_0x4ada6c, _0x3c13dd.table), _0x4db930 = _0x38a224.ts.parsePayloadUnitStartIndicator(_0x4ada6c);
						if (_0xa32839 === 'video') {
							_0x4db930 && !_0x2f04c0 && (_0x171dbd = _0x38a224.ts.parsePesTime(_0x4ada6c), _0x171dbd && (_0x171dbd.type = 'video', _0xe2c196.video.push(_0x171dbd), _0x2f04c0 = true));
							if (!_0xe2c196.firstKeyFrame) {
								if (_0x4db930) {
									if (_0x1e723a.size !== 0) {
										_0x33e696 = new Uint8Array(_0x1e723a.size);
										_0x34bd6b = 0;
										while (_0x1e723a.data.length) {
											_0x53137b = _0x1e723a.data.shift();
											_0x33e696.set(_0x53137b, _0x34bd6b);
											_0x34bd6b += _0x53137b.byteLength;
										}
										_0x38a224.ts.videoPacketContainsKeyFrame(_0x33e696) && (_0xe2c196.firstKeyFrame = _0x38a224.ts.parsePesTime(_0x33e696), _0xe2c196.firstKeyFrame.type = 'video');
										_0x1e723a.size = 0;
									}
								}
								_0x1e723a.data.push(_0x4ada6c);
								_0x1e723a.size += _0x4ada6c.byteLength;
							}
						}
						break;
					default:
						break;
				}
				if (_0x2f04c0 && _0xe2c196.firstKeyFrame) {
					break;
				}
				_0x54c75f += 188;
				_0x445724 += 188;
				continue;
			}
			_0x54c75f++;
			_0x445724++;
		}
		_0x445724 = _0x3f7cda.byteLength;
		_0x54c75f = _0x445724 - 188;
		_0x2f04c0 = false;
		while (_0x54c75f >= 0) {
			if (_0x3f7cda[_0x54c75f] === 71 && _0x3f7cda[_0x445724] === 71) {
				_0x4ada6c = _0x3f7cda.subarray(_0x54c75f, _0x445724);
				_0x360483 = _0x38a224.ts.parseType(_0x4ada6c, _0x3c13dd.pid);
				switch (_0x360483) {
					case 'pes':
						_0xa32839 = _0x38a224.ts.parsePesType(_0x4ada6c, _0x3c13dd.table), _0x4db930 = _0x38a224.ts.parsePayloadUnitStartIndicator(_0x4ada6c);
						_0xa32839 === 'video' && _0x4db930 && (_0x171dbd = _0x38a224.ts.parsePesTime(_0x4ada6c), _0x171dbd && (_0x171dbd.type = 'video', _0xe2c196.video.push(_0x171dbd), _0x2f04c0 = true));
						break;
					default:
						break;
				}
				if (_0x2f04c0) {
					break;
				}
				_0x54c75f -= 188;
				_0x445724 -= 188;
				continue;
			}
			_0x54c75f--;
			_0x445724--;
		}
	}, _0x157bf9 = function _0x126d1c(_0x3564d1, _0x3d0268) {
		if (_0x3564d1.audio && _0x3564d1.audio.length) {
			var _0x2a168e = _0x3d0268;
			typeof _0x2a168e === 'undefined' && (_0x2a168e = _0x3564d1.audio[0].dts);
			_0x3564d1.audio.forEach(function (_0x492b61) {
				_0x492b61.dts = _0x576360(_0x492b61.dts, _0x2a168e);
				_0x492b61.pts = _0x576360(_0x492b61.pts, _0x2a168e);
				_0x492b61.dtsTime = _0x492b61.dts / 90000;
				_0x492b61.ptsTime = _0x492b61.pts / 90000;
			});
		}
		if (_0x3564d1.video && _0x3564d1.video.length) {
			var _0x3ffd3e = _0x3d0268;
			typeof _0x3ffd3e === 'undefined' && (_0x3ffd3e = _0x3564d1.video[0].dts);
			_0x3564d1.video.forEach(function (_0x30752) {
				_0x30752.dts = _0x576360(_0x30752.dts, _0x3ffd3e);
				_0x30752.pts = _0x576360(_0x30752.pts, _0x3ffd3e);
				_0x30752.dtsTime = _0x30752.dts / 90000;
				_0x30752.ptsTime = _0x30752.pts / 90000;
			});
			if (_0x3564d1.firstKeyFrame) {
				var _0x384e13 = _0x3564d1.firstKeyFrame;
				_0x384e13.dts = _0x576360(_0x384e13.dts, _0x3ffd3e);
				_0x384e13.pts = _0x576360(_0x384e13.pts, _0x3ffd3e);
				_0x384e13.dtsTime = _0x384e13.dts / 90000;
				_0x384e13.ptsTime = _0x384e13.dts / 90000;
			}
		}
	}, _0x4c03d1 = function _0x2a029c(_0x26f814) {
		var _0x118721 = false, _0x33d71a = 0, _0x6e3144 = null, _0x2bedad = null, _0x31f48f = 0, _0x32ba62 = 0, _0x173d42;
		while (_0x26f814.length - _0x32ba62 >= 3) {
			var _0x1ae628 = _0x38a224.aac.parseType(_0x26f814, _0x32ba62);
			switch (_0x1ae628) {
				case 'timed-metadata':
					if (_0x26f814.length - _0x32ba62 < 10) {
						_0x118721 = true;
						break;
					}
					_0x31f48f = _0x38a224.aac.parseId3TagSize(_0x26f814, _0x32ba62);
					if (_0x31f48f > _0x26f814.length) {
						_0x118721 = true;
						break;
					}
					if (_0x2bedad === null) {
						_0x173d42 = _0x26f814.subarray(_0x32ba62, _0x32ba62 + _0x31f48f);
						_0x2bedad = _0x38a224.aac.parseAacTimestamp(_0x173d42);
					}
					_0x32ba62 += _0x31f48f;
					break;
				case 'audio':
					if (_0x26f814.length - _0x32ba62 < 7) {
						_0x118721 = true;
						break;
					}
					_0x31f48f = _0x38a224.aac.parseAdtsSize(_0x26f814, _0x32ba62);
					if (_0x31f48f > _0x26f814.length) {
						_0x118721 = true;
						break;
					}
					if (_0x6e3144 === null) {
						_0x173d42 = _0x26f814.subarray(_0x32ba62, _0x32ba62 + _0x31f48f);
						_0x6e3144 = _0x38a224.aac.parseSampleRate(_0x173d42);
					}
					_0x33d71a++, _0x32ba62 += _0x31f48f;
					break;
				default:
					_0x32ba62++;
					break;
			}
			if (_0x118721) {
				return null;
			}
		}
		if (_0x6e3144 === null || _0x2bedad === null) {
			return null;
		}
		var _0xebd1c6 = 90000 / _0x6e3144, _0xb81d4b = {
			'audio': [
				{
					'type': 'audio',
					'dts': _0x2bedad,
					'pts': _0x2bedad
				},
				{
					'type': 'audio',
					'dts': _0x2bedad + _0x33d71a * 1024 * _0xebd1c6,
					'pts': _0x2bedad + _0x33d71a * 1024 * _0xebd1c6
				}
			]
		};
		return _0xb81d4b;
	}, _0x8d461b = function _0x35206a(_0x4cf577) {
		var _0x1a2332 = {};
		_0x403a4d(_0x4cf577, _0x4b9381);
		for (var _0x1602fe in _0x4b9381.table) {
			if (_0x4b9381.table.hasOwnProperty(_0x1602fe)) {
				var _0x35fdfa = null[_0x1602fe];
				switch (_0x35fdfa) {
					case _0x16877c.H264_STREAM_TYPE:
						_0x1a2332.video = [], _0x199119(_0x4cf577, _0x4b9381, _0x1a2332);
						_0x1a2332.video.length === 0 && delete _0x1a2332.video;
						break;
					case _0x16877c.ADTS_STREAM_TYPE:
						_0x1a2332.audio = [], _0x5112b4(_0x4cf577, _0x4b9381, _0x1a2332);
						_0x1a2332.audio.length === 0 && delete _0x1a2332.audio;
						break;
					default:
						break;
				}
			}
		}
		return _0x1a2332;
	}, _0x532f1c = function _0x20396a(_0x296e31, _0x2c2159) {
		var _0x1bd4ad = _0x3d6f2a(_0x296e31), _0x9db113;
		_0x1bd4ad ? _0x9db113 = _0x4c03d1(_0x296e31) : _0x9db113 = _0x8d461b(_0x296e31);
		if (!_0x9db113 || !_0x9db113.audio && !_0x9db113.video) {
			return null;
		}
		return _0x157bf9(_0x9db113, _0x2c2159), _0x9db113;
	}, _0xd6254c = { 'inspect': _0x532f1c };
	function _0x1afd2c(_0x24530d) {
		return _0x24530d.subarray(0, _0x24530d.byteLength - _0x24530d[_0x24530d.byteLength - 1]);
	}
	var _0x5ce5d7 = function _0x3a25dd(_0x55bc44, _0x4f43dc) {
		if (!(_0x55bc44 instanceof _0x4f43dc)) {
			throw new TypeError('Cannot call a class as a function');
		}
	}, _0x6bf7d7 = (function () {
		function _0x21ef42(_0x2e5279, _0x4de455) {
			for (var _0x141499 = 0; _0x141499 < _0x4de455.length; _0x141499++) {
				var _0x3e8a90 = _0x4de455[_0x141499];
				_0x3e8a90.enumerable = _0x3e8a90.enumerable || false;
				_0x3e8a90.configurable = true;
				if ('value' in _0x3e8a90) {
					_0x3e8a90.writable = true;
				}
				Object.defineProperty(_0x2e5279, _0x3e8a90.key, _0x3e8a90);
			}
		}
		return function (_0x547eab, _0x30bbf0, _0x1c6470) {
			if (_0x30bbf0) {
				_0x21ef42(_0x547eab.prototype, _0x30bbf0);
			}
			if (_0x1c6470) {
				_0x21ef42(_0x547eab, _0x1c6470);
			}
			return _0x547eab;
		};
	}()), _0x1bb651 = function _0x338621(_0x5e4f66, _0xfac2bb) {
		if (typeof _0xfac2bb !== 'function' && _0xfac2bb !== null) {
			throw new TypeError('Super expression must either be null or a function, not ' + (typeof _0xfac2bb === 'undefined' ? 'undefined' : _0x65b994(_0xfac2bb)));
		}
		_0x5e4f66.prototype = Object.create(_0xfac2bb && _0xfac2bb.prototype, {
			'constructor': {
				'value': _0x5e4f66,
				'enumerable': false,
				'writable': true,
				'configurable': true
			}
		});
		if (_0xfac2bb) {
			Object.setPrototypeOf ? Object.setPrototypeOf(_0x5e4f66, _0xfac2bb) : _0x5e4f66['__proto__'] = _0xfac2bb;
		}
	}, _0x3f689a = function _0x52eeee(_0x254395, _0x3312fc) {
		if (!_0x254395) {
			throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
		}
		return _0x3312fc && ((typeof _0x3312fc === 'undefined' ? 'undefined' : _0x65b994(_0x3312fc)) === 'object' || typeof _0x3312fc === 'function') ? _0x3312fc : _0x254395;
	}, _0x28a791 = function _0x2a606e() {
		var _0x374f12 = [
			[
				[],
				[],
				[],
				[],
				[]
			],
			[
				[],
				[],
				[],
				[],
				[]
			]
		], _0x826ae8 = _0x374f12[0], _0x29554a = _0x374f12[1], _0x2b938b = _0x826ae8[4], _0x3e683e = _0x29554a[4], _0x87e385 = void 0, _0x4d429a = void 0, _0x56187c = void 0, _0x5d9766 = [], _0x4fd6a5 = [], _0x5e6957 = void 0, _0x8366bf = void 0, _0x20a747 = void 0, _0x5bdf51 = void 0, _0x51e501 = void 0, _0x2c24c3 = void 0;
		for (_0x87e385 = 0; _0x87e385 < 256; _0x87e385++) {
			_0x4fd6a5[(_0x5d9766[_0x87e385] = _0x87e385 << 1 ^ (_0x87e385 >> 7) * 283) ^ _0x87e385] = _0x87e385;
		}
		for (_0x4d429a = _0x56187c = 0; !_0x2b938b[_0x4d429a]; _0x4d429a ^= _0x5e6957 || 1, _0x56187c = _0x4fd6a5[_0x56187c] || 1) {
			_0x5bdf51 = _0x56187c ^ _0x56187c << 1 ^ _0x56187c << 2 ^ _0x56187c << 3 ^ _0x56187c << 4;
			_0x5bdf51 = _0x5bdf51 >> 8 ^ _0x5bdf51 & 255 ^ 99;
			_0x2b938b[_0x4d429a] = _0x5bdf51;
			_0x3e683e[_0x5bdf51] = _0x4d429a;
			_0x20a747 = _0x5d9766[_0x8366bf = _0x5d9766[_0x5e6957 = _0x5d9766[_0x4d429a]]];
			_0x2c24c3 = _0x20a747 * 16843009 ^ _0x8366bf * 65537 ^ _0x5e6957 * 257 ^ _0x4d429a * 16843008;
			_0x51e501 = _0x5d9766[_0x5bdf51] * 257 ^ _0x5bdf51 * 16843008;
			for (_0x87e385 = 0; _0x87e385 < 4; _0x87e385++) {
				_0x826ae8[_0x87e385][_0x4d429a] = _0x51e501 = _0x51e501 << 24 ^ _0x51e501 >>> 8;
				_0x29554a[_0x87e385][_0x5bdf51] = _0x2c24c3 = _0x2c24c3 << 24 ^ _0x2c24c3 >>> 8;
			}
		}
		for (_0x87e385 = 0; _0x87e385 < 5; _0x87e385++) {
			_0x826ae8[_0x87e385] = _0x826ae8[_0x87e385].slice(0);
			_0x29554a[_0x87e385] = _0x29554a[_0x87e385].slice(0);
		}
		return _0x374f12;
	}, _0x3b01dc = null, _0x2d9098 = (function () {
		function _0x328d4c(_0x276f75) {
			_0x5ce5d7(this, _0x328d4c);
			!_0x3b01dc && (_0x3b01dc = _0x28a791());
			this['_tables'] = [
				[
					_0x3b01dc[0][0].slice(),
					_0x3b01dc[0][1].slice(),
					_0x3b01dc[0][2].slice(),
					_0x3b01dc[0][3].slice(),
					_0x3b01dc[0][4].slice()
				],
				[
					_0x3b01dc[1][0].slice(),
					_0x3b01dc[1][1].slice(),
					_0x3b01dc[1][2].slice(),
					_0x3b01dc[1][3].slice(),
					_0x3b01dc[1][4].slice()
				]
			];
			var _0x547a2f = void 0, _0xc07eab = void 0, _0x305a28 = void 0, _0x4aedd0 = void 0, _0x1579fe = void 0, _0x3453f5 = this['_tables'][0][4], _0x42ca7d = this['_tables'][1], _0x39f57c = _0x276f75.length, _0x42ba96 = 1;
			if (_0x39f57c !== 4 && _0x39f57c !== 6 && _0x39f57c !== 8) {
				throw new Error('Invalid aes key size');
			}
			_0x4aedd0 = _0x276f75.slice(0);
			_0x1579fe = [];
			this['_key'] = [
				_0x4aedd0,
				_0x1579fe
			];
			for (_0x547a2f = _0x39f57c; _0x547a2f < 4 * _0x39f57c + 28; _0x547a2f++) {
				_0x305a28 = _0x4aedd0[_0x547a2f - 1];
				(_0x547a2f % _0x39f57c === 0 || _0x39f57c === 8 && _0x547a2f % _0x39f57c === 4) && (_0x305a28 = _0x3453f5[_0x305a28 >>> 24] << 24 ^ _0x3453f5[_0x305a28 >> 16 & 255] << 16 ^ _0x3453f5[_0x305a28 >> 8 & 255] << 8 ^ _0x3453f5[_0x305a28 & 255], _0x547a2f % _0x39f57c === 0 && (_0x305a28 = _0x305a28 << 8 ^ _0x305a28 >>> 24 ^ _0x42ba96 << 24, _0x42ba96 = _0x42ba96 << 1 ^ (_0x42ba96 >> 7) * 283));
				_0x4aedd0[_0x547a2f] = _0x4aedd0[_0x547a2f - _0x39f57c] ^ _0x305a28;
			}
			for (_0xc07eab = 0; _0x547a2f; _0xc07eab++, _0x547a2f--) {
				_0x305a28 = _0x4aedd0[_0xc07eab & 3 ? _0x547a2f : _0x547a2f - 4];
				_0x547a2f <= 4 || _0xc07eab < 4 ? _0x1579fe[_0xc07eab] = _0x305a28 : _0x1579fe[_0xc07eab] = _0x42ca7d[0][_0x3453f5[_0x305a28 >>> 24]] ^ _0x42ca7d[1][_0x3453f5[_0x305a28 >> 16 & 255]] ^ _0x42ca7d[2][_0x3453f5[_0x305a28 >> 8 & 255]] ^ _0x42ca7d[3][_0x3453f5[_0x305a28 & 255]];
			}
		}
		return _0x328d4c.prototype.decrypt = function _0x4d6eea(_0x167361, _0x500f8e, _0x3eb50a, _0x15cc6c, _0x43fcb3, _0x503042) {
			var _0x18cc1a = this['_key'][1], _0x131483 = _0x167361 ^ _0x18cc1a[0], _0x50a5c3 = _0x15cc6c ^ _0x18cc1a[1], _0x296ca4 = _0x3eb50a ^ _0x18cc1a[2], _0x4b9ebd = _0x500f8e ^ _0x18cc1a[3], _0x7c7ac6 = void 0, _0x38d076 = void 0, _0x3cbd54 = void 0, _0x3876a3 = _0x18cc1a.length / 4 - 2, _0x882580 = void 0, _0x5b1407 = 4, _0x2de003 = this['_tables'][1], _0x597165 = _0x2de003[0], _0x59a733 = _0x2de003[1], _0xeaf964 = _0x2de003[2], _0x4cfaef = _0x2de003[3], _0x1bfb24 = _0x2de003[4];
			for (_0x882580 = 0; _0x882580 < _0x3876a3; _0x882580++) {
				_0x7c7ac6 = _0x597165[_0x131483 >>> 24] ^ _0x59a733[_0x50a5c3 >> 16 & 255] ^ _0xeaf964[_0x296ca4 >> 8 & 255] ^ _0x4cfaef[_0x4b9ebd & 255] ^ _0x18cc1a[_0x5b1407];
				_0x38d076 = _0x597165[_0x50a5c3 >>> 24] ^ _0x59a733[_0x296ca4 >> 16 & 255] ^ _0xeaf964[_0x4b9ebd >> 8 & 255] ^ _0x4cfaef[_0x131483 & 255] ^ _0x18cc1a[_0x5b1407 + 1];
				_0x3cbd54 = _0x597165[_0x296ca4 >>> 24] ^ _0x59a733[_0x4b9ebd >> 16 & 255] ^ _0xeaf964[_0x131483 >> 8 & 255] ^ _0x4cfaef[_0x50a5c3 & 255] ^ _0x18cc1a[_0x5b1407 + 2];
				_0x4b9ebd = _0x597165[_0x4b9ebd >>> 24] ^ _0x59a733[_0x131483 >> 16 & 255] ^ _0xeaf964[_0x50a5c3 >> 8 & 255] ^ _0x4cfaef[_0x296ca4 & 255] ^ _0x18cc1a[_0x5b1407 + 3];
				_0x5b1407 += 4;
				_0x131483 = _0x7c7ac6;
				_0x50a5c3 = _0x38d076;
				_0x296ca4 = _0x3cbd54;
			}
			for (_0x882580 = 0; _0x882580 < 4; _0x882580++) {
				_0x43fcb3[(3 & -_0x882580) + _0x503042] = _0x1bfb24[_0x131483 >>> 24] << 24 ^ _0x1bfb24[_0x50a5c3 >> 16 & 255] << 16 ^ _0x1bfb24[_0x296ca4 >> 8 & 255] << 8 ^ _0x1bfb24[_0x4b9ebd & 255] ^ _0x18cc1a[_0x5b1407++];
				_0x7c7ac6 = _0x131483;
				_0x131483 = _0x50a5c3;
				_0x50a5c3 = _0x296ca4;
				_0x296ca4 = _0x4b9ebd;
				_0x4b9ebd = _0x7c7ac6;
			}
		}, _0x328d4c;
	}()), _0x194397 = (function () {
		function _0x141179() {
			_0x5ce5d7(this, _0x141179);
			this.listeners = {};
		}
		return _0x141179.prototype.on = function _0x40efdc(_0x2fb499, _0x2f9a3e) {
			!this.listeners[_0x2fb499] && (this.listeners[_0x2fb499] = []);
			this.listeners[_0x2fb499].push(_0x2f9a3e);
		}, _0x141179.prototype.off = function _0x2164c4(_0x3a5cc7, _0x16ed46) {
			if (!this.listeners[_0x3a5cc7]) {
				return false;
			}
			var _0x312ebf = this.listeners[_0x3a5cc7].indexOf(_0x16ed46);
			return this.listeners[_0x3a5cc7].splice(_0x312ebf, 1), _0x312ebf > -1;
		}, _0x141179.prototype.trigger = function _0x2ee1d2(_0xa21ee) {
			var _0x34b5ff = this.listeners[_0xa21ee];
			if (!_0x34b5ff) {
				return;
			}
			if (arguments.length === 2) {
				var _0x4cf9a7 = _0x34b5ff.length;
				for (var _0xe42d1 = 0; _0xe42d1 < _0x4cf9a7; ++_0xe42d1) {
					_0x34b5ff[_0xe42d1].call(this, arguments[1]);
				}
			} else {
				var _0x4cc596 = Array.prototype.slice.call(arguments, 1), _0x494d22 = _0x34b5ff.length;
				for (var _0x2a0db9 = 0; _0x2a0db9 < _0x494d22; ++_0x2a0db9) {
					_0x34b5ff[_0x2a0db9].apply(this, _0x4cc596);
				}
			}
		}, _0x141179.prototype.dispose = function _0x5b2108() {
			this.listeners = {};
		}, _0x141179.prototype.pipe = function _0x1f21fe(_0x55eb3b) {
			this.on('data', function (_0x25d6bf) {
				_0x55eb3b.push(_0x25d6bf);
			});
		}, _0x141179;
	}()), _0x416dbd = function (_0x27db4b) {
		_0x1bb651(_0x37d33c, _0x27db4b);
		function _0x37d33c() {
			_0x5ce5d7(this, _0x37d33c);
			var _0x120bca = _0x3f689a(this, _0x27db4b.call(this, _0x194397));
			return _0x120bca.jobs = [], _0x120bca.delay = 1, _0x120bca.timeout_ = null, _0x120bca;
		}
		return _0x37d33c.prototype.processJob_ = function _0x2363c4() {
			this.jobs.shift()();
			this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null;
		}, _0x37d33c.prototype.push = function _0x29190f(_0x5b0f95) {
			this.jobs.push(_0x5b0f95);
			!this.timeout_ && (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay));
		}, _0x37d33c;
	}(_0x194397), _0x249d0e = function _0x5b23d2(_0x4c5052) {
		return _0x4c5052 << 24 | (_0x4c5052 & 65280) << 8 | (_0x4c5052 & 16711680) >> 8 | _0x4c5052 >>> 24;
	}, _0x1f23b6 = function _0x5d64b1(_0x67193d, _0xa97fc0, _0x17287b) {
		var _0x184cab = new Int32Array(_0x67193d.buffer, _0x67193d.byteOffset, _0x67193d.byteLength >> 2), _0x39a8a8 = new _0x2d9098(Array.prototype.slice.call(_0xa97fc0)), _0x1401f8 = new Uint8Array(_0x67193d.byteLength), _0x504556 = new Int32Array(_0x1401f8.buffer), _0x4904c7 = void 0, _0x5ae82e = void 0, _0x32c676 = void 0, _0x219d3c = void 0, _0x5d8f3e = void 0, _0x26906b = void 0, _0x52a38c = void 0, _0x1e689b = void 0, _0x2e9267 = void 0;
		_0x4904c7 = _0x17287b[0];
		_0x5ae82e = _0x17287b[1];
		_0x32c676 = _0x17287b[2];
		_0x219d3c = _0x17287b[3];
		for (_0x2e9267 = 0; _0x2e9267 < _0x184cab.length; _0x2e9267 += 4) {
			_0x5d8f3e = _0x249d0e(_0x184cab[_0x2e9267]);
			_0x26906b = _0x249d0e(_0x184cab[_0x2e9267 + 1]);
			_0x52a38c = _0x249d0e(_0x184cab[_0x2e9267 + 2]);
			_0x1e689b = _0x249d0e(_0x184cab[_0x2e9267 + 3]);
			_0x39a8a8.decrypt(_0x5d8f3e, _0x26906b, _0x52a38c, _0x1e689b, _0x504556, _0x2e9267);
			_0x504556[_0x2e9267] = _0x249d0e(_0x504556[_0x2e9267] ^ _0x4904c7);
			_0x504556[_0x2e9267 + 1] = _0x249d0e(_0x504556[_0x2e9267 + 1] ^ _0x5ae82e);
			_0x504556[_0x2e9267 + 2] = _0x249d0e(_0x504556[_0x2e9267 + 2] ^ _0x32c676);
			_0x504556[_0x2e9267 + 3] = _0x249d0e(_0x504556[_0x2e9267 + 3] ^ _0x219d3c);
			_0x4904c7 = _0x5d8f3e;
			_0x5ae82e = _0x26906b;
			_0x32c676 = _0x52a38c;
			_0x219d3c = _0x1e689b;
		}
		return _0x1401f8;
	}, _0x15a30c = (function () {
		function _0x47835d(_0x439d0a, _0x3c3a12, _0x364db8, _0x4143c5) {
			_0x5ce5d7(this, _0x47835d);
			var _0xaab2f4 = _0x47835d.STEP, _0x4dcacb = new Int32Array(_0x439d0a.buffer), _0x4e15d3 = new Uint8Array(_0x439d0a.byteLength), _0x13effb = 0;
			this.asyncStream_ = new _0x416dbd();
			this.asyncStream_.push(this.decryptChunk_(_0x4dcacb.subarray(_0x13effb, _0x13effb + _0xaab2f4), _0x3c3a12, _0x364db8, _0x4e15d3));
			for (_0x13effb = _0xaab2f4; _0x13effb < _0x4dcacb.length; _0x13effb += _0xaab2f4) {
				_0x364db8 = new Uint32Array([
					_0x249d0e(_0x4dcacb[_0x13effb - 4]),
					_0x249d0e(_0x4dcacb[_0x13effb - 3]),
					_0x249d0e(_0x4dcacb[_0x13effb - 2]),
					_0x249d0e(_0x4dcacb[_0x13effb - 1])
				]);
				this.asyncStream_.push(this.decryptChunk_(_0x4dcacb.subarray(_0x13effb, _0x13effb + _0xaab2f4), _0x3c3a12, _0x364db8, _0x4e15d3));
			}
			this.asyncStream_.push(function () {
				_0x4143c5(null, _0x1afd2c(_0x4e15d3));
			});
		}
		return _0x47835d.prototype.decryptChunk_ = function _0x1b626a(_0x14a89d, _0x14bd03, _0x59a6ae, _0x5362bb) {
			return function () {
				var _0x492810 = _0x1f23b6(_0x14a89d, _0x14bd03, _0x59a6ae);
				_0x5362bb.set(_0x492810, _0x14a89d.byteOffset);
			};
		}, _0x6bf7d7(_0x47835d, null, [{
			'key': 'STEP',
			'get': function _0x331fc1() {
				return 32000;
			}
		}]), _0x47835d;
	}()), _0x1ef660 = function _0x315fba(_0x14097a, _0x40ae7b) {
		if (/^[a-z]+:/i.test(_0x40ae7b)) {
			return _0x40ae7b;
		}
		return !/\/\//i.test(_0x14097a) && (_0x14097a = _0xd42db6.buildAbsoluteURL(_0x562c10.location.href, _0x14097a)), _0xd42db6.buildAbsoluteURL(_0x14097a, _0x40ae7b);
	}, _0x2f247f = function _0x56295c(_0x165af5, _0x31d083) {
		if (!(_0x165af5 instanceof _0x31d083)) {
			throw new TypeError('Cannot call a class as a function');
		}
	}, _0x1430d3 = (function () {
		function _0x4cccef(_0x4f013d, _0x1ef006) {
			for (var _0x42eea8 = 0; _0x42eea8 < _0x1ef006.length; _0x42eea8++) {
				var _0x5ef5cf = _0x1ef006[_0x42eea8];
				_0x5ef5cf.enumerable = _0x5ef5cf.enumerable || false;
				_0x5ef5cf.configurable = true;
				if ('value' in _0x5ef5cf) {
					_0x5ef5cf.writable = true;
				}
				Object.defineProperty(_0x4f013d, _0x5ef5cf.key, _0x5ef5cf);
			}
		}
		return function (_0x2ddfc9, _0x52c26d, _0x4eafa9) {
			if (_0x52c26d) {
				_0x4cccef(_0x2ddfc9.prototype, _0x52c26d);
			}
			if (_0x4eafa9) {
				_0x4cccef(_0x2ddfc9, _0x4eafa9);
			}
			return _0x2ddfc9;
		};
	}()), _0x55fb99 = function _0x1f4651(_0x4e252c, _0x2790bd, _0x2cb6d8) {
		if (_0x4e252c === null) {
			_0x4e252c = Function.prototype;
		}
		var _0x1dfc10 = Object.getOwnPropertyDescriptor(_0x4e252c, _0x2790bd);
		if (_0x1dfc10 === undefined) {
			var _0x5e590e = Object.getPrototypeOf(_0x4e252c);
			return _0x5e590e === null ? undefined : _0x1f4651(_0x5e590e, _0x2790bd, _0x2cb6d8);
		} else {
			if ('value' in _0x1dfc10) {
				return _0x1dfc10.value;
			} else {
				var _0x397093 = _0x1dfc10.get;
				if (_0x397093 === undefined) {
					return undefined;
				}
				return _0x397093.call(_0x2cb6d8);
			}
		}
	}, _0x2b5e46 = function _0x280dbf(_0x32b9f7, _0x24a820) {
		if (typeof _0x24a820 !== 'function' && _0x24a820 !== null) {
			throw new TypeError('Super expression must either be null or a function, not ' + (typeof _0x24a820 === 'undefined' ? 'undefined' : _0x65b994(_0x24a820)));
		}
		_0x32b9f7.prototype = Object.create(_0x24a820 && _0x24a820.prototype, {
			'constructor': {
				'value': _0x32b9f7,
				'enumerable': false,
				'writable': true,
				'configurable': true
			}
		});
		if (_0x24a820) {
			Object.setPrototypeOf ? Object.setPrototypeOf(_0x32b9f7, _0x24a820) : _0x32b9f7['__proto__'] = _0x24a820;
		}
	}, _0x42d6e2 = function _0x56982f(_0x200c2e, _0x534859) {
		if (!_0x200c2e) {
			throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
		}
		return _0x534859 && ((typeof _0x534859 === 'undefined' ? 'undefined' : _0x65b994(_0x534859)) === 'object' || typeof _0x534859 === 'function') ? _0x534859 : _0x200c2e;
	}, _0xf8c145 = (function () {
		function _0x52bebf(_0x21b0cf, _0x24d6b0) {
			var _0x184659 = [], _0x408174 = true, _0x10df43 = false, _0xc38bda = undefined;
			try {
				for (var _0xba2c9f = _0x21b0cf[Symbol.iterator](), _0x606e20; !(_0x408174 = (_0x606e20 = _0xba2c9f.next()).done); _0x408174 = true) {
					_0x184659.push(_0x606e20.value);
					if (_0x24d6b0 && _0x184659.length === _0x24d6b0) {
						break;
					}
				}
			} catch (_0x10d1d6) {
				_0x10df43 = true;
				_0xc38bda = _0x10d1d6;
			} finally {
				try {
					if (!_0x408174 && _0xba2c9f.return) {
						_0xba2c9f.return();
					}
				} finally {
					if (_0x10df43) {
						throw _0xc38bda;
					}
				}
			}
			return _0x184659;
		}
		return function (_0x4ccfe6, _0x4bf690) {
			if (Array.isArray(_0x4ccfe6)) {
				return _0x4ccfe6;
			} else {
				if (Symbol.iterator in Object(_0x4ccfe6)) {
					return _0x52bebf(_0x4ccfe6, _0x4bf690);
				} else {
					throw new TypeError('Invalid attempt to destructure non-iterable instance');
				}
			}
		};
	}()), _0x1f3d44 = _0x1dff89.mergeOptions, _0x115152 = _0x1dff89.EventTarget, _0x1ae902 = _0x1dff89.log, _0xbd030b = function _0x4d8175(_0xf1e4b6, _0x5a978c) {
		[
			'AUDIO',
			'SUBTITLES'
		].forEach(function (_0x1f77c8) {
			for (var _0x59827e in _0xf1e4b6.mediaGroups[_0x1f77c8]) {
				for (var _0x313831 in _0xf1e4b6.mediaGroups[_0x1f77c8][_0x59827e]) {
					var _0x410846 = _0xf1e4b6.mediaGroups[_0x1f77c8][_0x59827e][_0x313831];
					_0x5a978c(_0x410846, _0x1f77c8, _0x59827e, _0x313831);
				}
			}
		});
	}, _0x49b44e = function _0x39b2ad(_0x2b7dd3, _0x3694ef, _0x108fbf) {
		var _0x3ec68f = _0x3694ef.slice();
		_0x108fbf = _0x108fbf || 0;
		var _0x1ece00 = Math.min(_0x2b7dd3.length, _0x3694ef.length + _0x108fbf);
		for (var _0x386329 = _0x108fbf; _0x386329 < _0x1ece00; _0x386329++) {
			_0x3ec68f[_0x386329 - _0x108fbf] = _0x1f3d44(_0x2b7dd3[_0x386329], _0x3ec68f[_0x386329 - _0x108fbf]);
		}
		return _0x3ec68f;
	}, _0x301fce = function _0x5477f0(_0x5c1d2c, _0x8301f8) {
		!_0x5c1d2c.resolvedUri && (_0x5c1d2c.resolvedUri = _0x1ef660(_0x8301f8, _0x5c1d2c.uri));
		_0x5c1d2c.key && !_0x5c1d2c.key.resolvedUri && (_0x5c1d2c.key.resolvedUri = _0x1ef660(_0x8301f8, _0x5c1d2c.key.uri));
		_0x5c1d2c.map && !_0x5c1d2c.map.resolvedUri && (_0x5c1d2c.map.resolvedUri = _0x1ef660(_0x8301f8, _0x5c1d2c.map.uri));
	}, _0x4b328f = function _0x3c80b8(_0x223b7d, _0x5541a7) {
		var _0x4ef38f = _0x1f3d44(_0x223b7d, {}), _0x33a0a6 = _0x4ef38f.playlists[_0x5541a7.uri];
		if (!_0x33a0a6) {
			return null;
		}
		if (_0x33a0a6.segments && _0x5541a7.segments && _0x33a0a6.segments.length === _0x5541a7.segments.length && _0x33a0a6.mediaSequence === _0x5541a7.mediaSequence) {
			return null;
		}
		var _0x50906b = _0x1f3d44(_0x33a0a6, _0x5541a7);
		_0x33a0a6.segments && (_0x50906b.segments = _0x49b44e(_0x33a0a6.segments, _0x5541a7.segments, _0x5541a7.mediaSequence - _0x33a0a6.mediaSequence));
		_0x50906b.segments.forEach(function (_0x1f366f) {
			_0x301fce(_0x1f366f, _0x50906b.resolvedUri);
		});
		for (var _0x1d8fdc = 0; _0x1d8fdc < _0x4ef38f.playlists.length; _0x1d8fdc++) {
			_0x4ef38f.playlists[_0x1d8fdc].uri === _0x5541a7.uri && (_0x4ef38f.playlists[_0x1d8fdc] = _0x50906b);
		}
		return _0x4ef38f.playlists[_0x5541a7.uri] = _0x50906b, _0x4ef38f;
	}, _0x327f96 = function _0xf6937d(_0x5bc5e1) {
		var _0x3c0bc1 = _0x5bc5e1.playlists.length;
		while (_0x3c0bc1--) {
			var _0x1e34e8 = _0x5bc5e1.playlists[_0x3c0bc1];
			_0x5bc5e1.playlists[_0x1e34e8.uri] = _0x1e34e8;
			_0x1e34e8.resolvedUri = _0x1ef660(_0x5bc5e1.uri, _0x1e34e8.uri);
			_0x1e34e8.id = _0x3c0bc1;
			!_0x1e34e8.attributes && (_0x1e34e8.attributes = {}, _0x1ae902.warn('Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.'));
		}
	}, _0x44bfbf = function _0x113993(_0x734b38) {
		_0xbd030b(_0x734b38, function (_0x6bbb78) {
			_0x6bbb78.uri && (_0x6bbb78.resolvedUri = _0x1ef660(_0x734b38.uri, _0x6bbb78.uri));
		});
	}, _0x590709 = function _0x419793(_0xb2afba, _0xdd56b0) {
		var _0x1285dd = _0xb2afba.segments[_0xb2afba.segments.length - 1], _0x3090ba = void 0;
		return _0xdd56b0 && _0x1285dd && _0x1285dd.duration ? _0x3090ba = _0x1285dd.duration * 1000 : _0x3090ba = (_0xb2afba.targetDuration || 10) * 500, _0x3090ba;
	}, _0x104207 = function (_0x80a7c4) {
		_0x2b5e46(_0x508eaa, _0x80a7c4);
		function _0x508eaa(_0x19f20d, _0x4e602d, _0x14ba5b) {
			_0x2f247f(this, _0x508eaa);
			var _0x23ce2d = _0x42d6e2(this, (_0x508eaa['__proto__'] || Object.getPrototypeOf(_0x508eaa)).call(this));
			_0x23ce2d.srcUrl = _0x19f20d;
			_0x23ce2d.hls_ = _0x4e602d;
			_0x23ce2d.withCredentials = _0x14ba5b;
			if (!_0x23ce2d.srcUrl) {
				throw new Error('A non-empty playlist URL is required');
			}
			return _0x23ce2d.state = 'HAVE_NOTHING', _0x23ce2d.on('mediaupdatetimeout', function () {
				if (_0x23ce2d.state !== 'HAVE_METADATA') {
					return;
				}
				_0x23ce2d.state = 'HAVE_CURRENT_METADATA';
				_0x23ce2d.request = _0x23ce2d.hls_.xhr({
					'uri': _0x1ef660(_0x23ce2d.master.uri, _0x23ce2d.media().uri),
					'withCredentials': _0x23ce2d.withCredentials
				}, function (_0x143703, _0x258cc2) {
					if (!_0x23ce2d.request) {
						return;
					}
					if (_0x143703) {
						return _0x23ce2d.playlistRequestError(_0x23ce2d.request, _0x23ce2d.media().uri, 'HAVE_METADATA');
					}
					_0x23ce2d.haveMetadata(_0x23ce2d.request, _0x23ce2d.media().uri);
				});
			}), _0x23ce2d;
		}
		return _0x1430d3(_0x508eaa, [
			{
				'key': 'playlistRequestError',
				'value': function _0x5ee60c(_0x48b24a, _0x7bdc7e, _0x457b2e) {
					this.request = null;
					_0x457b2e && (this.state = _0x457b2e);
					this.error = {
						'playlist': this.master.playlists[_0x7bdc7e],
						'status': _0x48b24a.status,
						'message': 'HLS playlist request error at URL: ' + _0x7bdc7e,
						'responseText': _0x48b24a.responseText,
						'code': _0x48b24a.status >= 500 ? 4 : 2
					};
					this.trigger('error');
				}
			},
			{
				'key': 'haveMetadata',
				'value': function _0x2812c3(_0x3862ba, _0x3ec3a5) {
					var _0x2b17e2 = this;
					this.request = null;
					this.state = 'HAVE_METADATA';
					var _0x4062a6 = new _0x3d4998();
					_0x4062a6.push(_0x3862ba.responseText);
					_0x4062a6.end();
					_0x4062a6.manifest.uri = _0x3ec3a5;
					_0x4062a6.manifest.attributes = _0x4062a6.manifest.attributes || {};
					var _0x1e31c9 = _0x4b328f(this.master, _0x4062a6.manifest);
					this.targetDuration = _0x4062a6.manifest.targetDuration;
					_0x1e31c9 ? (this.master = _0x1e31c9, this.media_ = this.master.playlists[_0x4062a6.manifest.uri]) : this.trigger('playlistunchanged');
					!this.media().endList && (_0x562c10.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = _0x562c10.setTimeout(function () {
						_0x2b17e2.trigger('mediaupdatetimeout');
					}, _0x590709(this.media(), !!_0x1e31c9)));
					this.trigger('loadedplaylist');
				}
			},
			{
				'key': 'dispose',
				'value': function _0x494a6a() {
					this.stopRequest();
					_0x562c10.clearTimeout(this.mediaUpdateTimeout);
				}
			},
			{
				'key': 'stopRequest',
				'value': function _0x5ceeb5() {
					if (this.request) {
						var _0x41f9e4 = this.request;
						this.request = null;
						_0x41f9e4.onreadystatechange = null;
						_0x41f9e4.abort();
					}
				}
			},
			{
				'key': 'media',
				'value': function _0xbde454(_0x21a76e) {
					var _0x55d59e = this;
					if (!_0x21a76e) {
						return this.media_;
					}
					if (this.state === 'HAVE_NOTHING') {
						throw new Error('Cannot switch media playlist from ' + this.state);
					}
					var _0x2264fd = this.state;
					if (typeof _0x21a76e === 'string') {
						if (!this.master.playlists[_0x21a76e]) {
							throw new Error('Unknown playlist URI: ' + _0x21a76e);
						}
						_0x21a76e = this.master.playlists[_0x21a76e];
					}
					var _0xfeebff = !this.media_ || _0x21a76e.uri !== this.media_.uri;
					if (this.master.playlists[_0x21a76e.uri].endList) {
						this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null);
						this.state = 'HAVE_METADATA';
						this.media_ = _0x21a76e;
						_0xfeebff && (this.trigger('mediachanging'), this.trigger('mediachange'));
						return;
					}
					if (!_0xfeebff) {
						return;
					}
					this.state = 'SWITCHING_MEDIA';
					if (this.request) {
						if (_0x1ef660(this.master.uri, _0x21a76e.uri) === this.request.url) {
							return;
						}
						this.request.onreadystatechange = null;
						this.request.abort();
						this.request = null;
					}
					this.media_ && this.trigger('mediachanging');
					this.request = this.hls_.xhr({
						'uri': _0x1ef660(this.master.uri, _0x21a76e.uri),
						'withCredentials': this.withCredentials
					}, function (_0x8c1156, _0x261d52) {
						if (!_0x55d59e.request) {
							return;
						}
						if (_0x8c1156) {
							return _0x55d59e.playlistRequestError(_0x55d59e.request, _0x21a76e.uri, _0x2264fd);
						}
						_0x55d59e.haveMetadata(_0x261d52, _0x21a76e.uri);
						_0x2264fd === 'HAVE_MASTER' ? _0x55d59e.trigger('loadedmetadata') : _0x55d59e.trigger('mediachange');
					});
				}
			},
			{
				'key': 'pause',
				'value': function _0x5ed12d() {
					this.stopRequest();
					_0x562c10.clearTimeout(this.mediaUpdateTimeout);
					this.state === 'HAVE_NOTHING' && (this.started = false);
					if (this.state === 'SWITCHING_MEDIA') {
						this.media_ ? this.state = 'HAVE_METADATA' : this.state = 'HAVE_MASTER';
					} else {
						this.state === 'HAVE_CURRENT_METADATA' && (this.state = 'HAVE_METADATA');
					}
				}
			},
			{
				'key': 'load',
				'value': function _0x512f8e(_0x2dfed0) {
					var _0x223b2e = this;
					_0x562c10.clearTimeout(this.mediaUpdateTimeout);
					var _0x3f3f0e = this.media();
					if (_0x2dfed0) {
						var _0x47a17d = _0x3f3f0e ? _0x3f3f0e.targetDuration / 2 * 1000 : 5000;
						this.mediaUpdateTimeout = _0x562c10.setTimeout(function () {
							return _0x223b2e.load();
						}, _0x47a17d);
						return;
					}
					if (!this.started) {
						this.start();
						return;
					}
					_0x3f3f0e && !_0x3f3f0e.endList ? this.trigger('mediaupdatetimeout') : this.trigger('loadedplaylist');
				}
			},
			{
				'key': 'start',
				'value': function _0x17cdd1() {
					var _0x5e231b = this;
					this.started = true;
					this.request = this.hls_.xhr({
						'uri': this.srcUrl,
						'withCredentials': this.withCredentials
					}, function (_0x2a8eac, _0x9b894b) {
						if (!_0x5e231b.request) {
							return;
						}
						_0x5e231b.request = null;
						if (_0x2a8eac) {
							return _0x5e231b.error = {
								'status': _0x9b894b.status,
								'message': 'HLS playlist request error at URL: ' + _0x5e231b.srcUrl,
								'responseText': _0x9b894b.responseText,
								'code': 2
							}, _0x5e231b.state === 'HAVE_NOTHING' && (_0x5e231b.started = false), _0x5e231b.trigger('error');
						}
						var _0x590e7d = new _0x3d4998();
						_0x590e7d.push(_0x9b894b.responseText);
						_0x590e7d.end();
						_0x5e231b.state = 'HAVE_MASTER';
						_0x590e7d.manifest.uri = _0x5e231b.srcUrl;
						if (_0x590e7d.manifest.playlists) {
							_0x5e231b.master = _0x590e7d.manifest;
							_0x327f96(_0x5e231b.master);
							_0x44bfbf(_0x5e231b.master);
							_0x5e231b.trigger('loadedplaylist');
							!_0x5e231b.request && _0x5e231b.media(_0x590e7d.manifest.playlists[0]);
							return;
						}
						return _0x5e231b.master = {
							'mediaGroups': {
								'AUDIO': {},
								'VIDEO': {},
								'CLOSED-CAPTIONS': {},
								'SUBTITLES': {}
							},
							'uri': _0x562c10.location.href,
							'playlists': [{
								'uri': _0x5e231b.srcUrl,
								'id': 0
							}]
						}, _0x5e231b.master.playlists[_0x5e231b.srcUrl] = _0x5e231b.master.playlists[0], _0x5e231b.master.playlists[0].resolvedUri = _0x5e231b.srcUrl, _0x5e231b.master.playlists[0].attributes = _0x5e231b.master.playlists[0].attributes || {}, _0x5e231b.haveMetadata(_0x9b894b, _0x5e231b.srcUrl), _0x5e231b.trigger('loadedmetadata');
					});
				}
			}
		]), _0x508eaa;
	}(_0x115152), _0x36bb24 = _0x1dff89.createTimeRange, _0x147b6b = function _0x3c61a8(_0x517bba, _0xd4a8d8) {
		var _0x9a0b41 = 0, _0x2e1759 = _0xd4a8d8 - _0x517bba.mediaSequence, _0x16a80b = _0x517bba.segments[_0x2e1759];
		if (_0x16a80b) {
			if (typeof _0x16a80b.start !== 'undefined') {
				return {
					'result': _0x16a80b.start,
					'precise': true
				};
			}
			if (typeof _0x16a80b.end !== 'undefined') {
				return {
					'result': _0x16a80b.end - _0x16a80b.duration,
					'precise': true
				};
			}
		}
		while (_0x2e1759--) {
			_0x16a80b = _0x517bba.segments[_0x2e1759];
			if (typeof _0x16a80b.end !== 'undefined') {
				return {
					'result': _0x9a0b41 + _0x16a80b.end,
					'precise': true
				};
			}
			_0x9a0b41 += _0x16a80b.duration;
			if (typeof _0x16a80b.start !== 'undefined') {
				return {
					'result': _0x9a0b41 + _0x16a80b.start,
					'precise': true
				};
			}
		}
		return {
			'result': _0x9a0b41,
			'precise': false
		};
	}, _0xde3f76 = function _0x520a94(_0x557db8, _0x4c7dd6) {
		var _0x55d37f = 0, _0x5e96ec = void 0, _0x4b161d = _0x4c7dd6 - _0x557db8.mediaSequence;
		for (; _0x4b161d < _0x557db8.segments.length; _0x4b161d++) {
			_0x5e96ec = _0x557db8.segments[_0x4b161d];
			if (typeof _0x5e96ec.start !== 'undefined') {
				return {
					'result': _0x5e96ec.start - _0x55d37f,
					'precise': true
				};
			}
			_0x55d37f += _0x5e96ec.duration;
			if (typeof _0x5e96ec.end !== 'undefined') {
				return {
					'result': _0x5e96ec.end - _0x55d37f,
					'precise': true
				};
			}
		}
		return {
			'result': -1,
			'precise': false
		};
	}, _0x277ce9 = function _0x384f9a(_0x494f6e, _0x471262, _0x16258d) {
		var _0x47fcc3 = void 0, _0x29d433 = void 0;
		typeof _0x471262 === 'undefined' && (_0x471262 = _0x494f6e.mediaSequence + _0x494f6e.segments.length);
		if (_0x471262 < _0x494f6e.mediaSequence) {
			return 0;
		}
		_0x47fcc3 = _0x147b6b(_0x494f6e, _0x471262);
		if (_0x47fcc3.precise) {
			return _0x47fcc3.result;
		}
		_0x29d433 = _0xde3f76(_0x494f6e, _0x471262);
		if (_0x29d433.precise) {
			return _0x29d433.result;
		}
		return _0x47fcc3.result + _0x16258d;
	}, _0xb1c1ae = function _0x506aa6(_0x23b22f, _0x37f0ae, _0x124eb0) {
		if (!_0x23b22f) {
			return 0;
		}
		typeof _0x124eb0 !== 'number' && (_0x124eb0 = 0);
		if (typeof _0x37f0ae === 'undefined') {
			if (_0x23b22f.totalDuration) {
				return _0x23b22f.totalDuration;
			}
			if (!_0x23b22f.endList) {
				return _0x562c10.Infinity;
			}
		}
		return _0x277ce9(_0x23b22f, _0x37f0ae, _0x124eb0);
	}, _0x459b9c = function _0x2b2c66(_0x2dc98d, _0x579d12, _0x333841) {
		var _0xad7757 = 0;
		if (_0x579d12 > _0x333841) {
			var _0x5288fb = [
				_0x333841,
				_0x579d12
			];
			_0x579d12 = _0x5288fb[0];
			_0x333841 = _0x5288fb[1];
		}
		if (_0x579d12 < 0) {
			for (var _0x5e274b = _0x579d12; _0x5e274b < Math.min(0, _0x333841); _0x5e274b++) {
				_0xad7757 += _0x2dc98d.targetDuration;
			}
			_0x579d12 = 0;
		}
		for (var _0x1b1036 = _0x579d12; _0x1b1036 < _0x333841; _0x1b1036++) {
			_0xad7757 += _0x2dc98d.segments[_0x1b1036].duration;
		}
		return _0xad7757;
	}, _0x4107b6 = function _0x4911e3(_0x303c7a) {
		if (!_0x303c7a.segments.length) {
			return 0;
		}
		var _0x5cfa3f = _0x303c7a.segments.length - 1, _0x36854d = _0x303c7a.segments[_0x5cfa3f].duration || _0x303c7a.targetDuration, _0x164ed9 = _0x36854d + _0x303c7a.targetDuration * 2;
		while (_0x5cfa3f--) {
			_0x36854d += _0x303c7a.segments[_0x5cfa3f].duration;
			if (_0x36854d >= _0x164ed9) {
				break;
			}
		}
		return Math.max(0, _0x5cfa3f);
	}, _0x481e10 = function _0x3da7eb(_0x443a7d, _0x4441ef, _0xcb4d14) {
		if (!_0x443a7d || !_0x443a7d.segments) {
			return null;
		}
		if (_0x443a7d.endList) {
			return _0xb1c1ae(_0x443a7d);
		}
		if (_0x4441ef === null) {
			return null;
		}
		_0x4441ef = _0x4441ef || 0;
		var _0x1d7022 = _0xcb4d14 ? _0x4107b6(_0x443a7d) : _0x443a7d.segments.length;
		return _0x277ce9(_0x443a7d, _0x443a7d.mediaSequence + _0x1d7022, _0x4441ef);
	}, _0x16d2b4 = function _0x2ce7c5(_0x442dd5, _0x1123aa) {
		var _0x44bd80 = true, _0x443958 = _0x1123aa || 0, _0x25d8d9 = _0x481e10(_0x442dd5, _0x1123aa, _0x44bd80);
		if (_0x25d8d9 === null) {
			return _0x36bb24();
		}
		return _0x36bb24(_0x443958, _0x25d8d9);
	}, _0x37024c = function _0x817c8e(_0x43797e) {
		return _0x43797e - Math.floor(_0x43797e) === 0;
	}, _0x58c294 = function _0x2adaa7(_0x2a9b2a, _0x5eedaa) {
		if (_0x37024c(_0x5eedaa)) {
			return _0x5eedaa + _0x2a9b2a * 0.1;
		}
		var _0x3709bd = _0x5eedaa.toString().split('.')[1].length;
		for (var _0x54c35b = 1; _0x54c35b <= _0x3709bd; _0x54c35b++) {
			var _0x25373a = Math.pow(10, _0x54c35b), _0x4ef66f = _0x5eedaa * _0x25373a;
			if (_0x37024c(_0x4ef66f) || _0x54c35b === _0x3709bd) {
				return (_0x4ef66f + _0x2a9b2a) / _0x25373a;
			}
		}
	}, _0x3d5b28 = _0x58c294.bind(null, 1), _0x4c5703 = _0x58c294.bind(null, -1), _0x38c999 = function _0x4f27b1(_0x192460, _0x3c814b, _0xb21b36, _0x580b8d) {
		var _0x313280 = void 0, _0x4d2599 = void 0, _0x595175 = _0x192460.segments.length, _0x4476c2 = _0x3c814b - _0x580b8d;
		if (_0x4476c2 < 0) {
			if (_0xb21b36 > 0) {
				for (_0x313280 = _0xb21b36 - 1; _0x313280 >= 0; _0x313280--) {
					_0x4d2599 = _0x192460.segments[_0x313280];
					_0x4476c2 += _0x4c5703(_0x4d2599.duration);
					if (_0x4476c2 > 0) {
						return {
							'mediaIndex': _0x313280,
							'startTime': _0x580b8d - _0x459b9c(_0x192460, _0xb21b36, _0x313280)
						};
					}
				}
			}
			return {
				'mediaIndex': 0,
				'startTime': _0x3c814b
			};
		}
		if (_0xb21b36 < 0) {
			for (_0x313280 = _0xb21b36; _0x313280 < 0; _0x313280++) {
				_0x4476c2 -= _0x192460.targetDuration;
				if (_0x4476c2 < 0) {
					return {
						'mediaIndex': 0,
						'startTime': _0x3c814b
					};
				}
			}
			_0xb21b36 = 0;
		}
		for (_0x313280 = _0xb21b36; _0x313280 < _0x595175; _0x313280++) {
			_0x4d2599 = _0x192460.segments[_0x313280];
			_0x4476c2 -= _0x3d5b28(_0x4d2599.duration);
			if (_0x4476c2 < 0) {
				return {
					'mediaIndex': _0x313280,
					'startTime': _0x580b8d + _0x459b9c(_0x192460, _0xb21b36, _0x313280)
				};
			}
		}
		return {
			'mediaIndex': _0x595175 - 1,
			'startTime': _0x3c814b
		};
	}, _0x3753af = function _0x3dd273(_0x196a37) {
		return _0x196a37.excludeUntil && _0x196a37.excludeUntil > Date.now();
	}, _0x54c586 = function _0x2aeb9e(_0x14e186) {
		return _0x14e186.excludeUntil && _0x14e186.excludeUntil === Infinity;
	}, _0x57fd3c = function _0x259fb8(_0x50f825) {
		var _0x9ded28 = _0x3753af(_0x50f825);
		return !_0x50f825.disabled && !_0x9ded28;
	}, _0x51e410 = function _0x8f6ac7(_0x5f8755) {
		return _0x5f8755.disabled;
	}, _0x1199b8 = function _0x13c5a0(_0x2aad1a) {
		for (var _0x5c0974 = 0; _0x5c0974 < _0x2aad1a.segments.length; _0x5c0974++) {
			if (_0x2aad1a.segments[_0x5c0974].key) {
				return true;
			}
		}
		return false;
	}, _0xd660cd = function _0x48b711(_0x21f880) {
		for (var _0x261cb2 = 0; _0x261cb2 < _0x21f880.segments.length; _0x261cb2++) {
			if (_0x21f880.segments[_0x261cb2].map) {
				return true;
			}
		}
		return false;
	}, _0x3df124 = function _0x255c5f(_0x11910c, _0x72254b) {
		return _0x72254b.attributes && _0x72254b.attributes[_0x11910c];
	}, _0x116820 = function _0x1e6b15(_0x2ab027, _0x18758f, _0x1b653d) {
		var _0x2a1b3f = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
		if (!_0x3df124('BANDWIDTH', _0x1b653d)) {
			return NaN;
		}
		var _0x32094f = _0x2ab027 * _0x1b653d.attributes.BANDWIDTH;
		return (_0x32094f - _0x2a1b3f * 8) / _0x18758f;
	}, _0x1695d5 = function _0x3a6407(_0x2fbefd, _0x5b6c31) {
		if (_0x2fbefd.playlists.length === 1) {
			return true;
		}
		var _0x4b79a0 = _0x5b6c31.attributes.BANDWIDTH || Number.MAX_VALUE;
		return _0x2fbefd.playlists.filter(function (_0x1aaeb4) {
			if (!_0x57fd3c(_0x1aaeb4)) {
				return false;
			}
			return (_0x1aaeb4.attributes.BANDWIDTH || 0) < _0x4b79a0;
		}).length === 0;
	}, _0x184b6a = {
		'duration': _0xb1c1ae,
		'seekable': _0x16d2b4,
		'safeLiveIndex': _0x4107b6,
		'getMediaInfoForTime': _0x38c999,
		'isEnabled': _0x57fd3c,
		'isDisabled': _0x51e410,
		'isBlacklisted': _0x3753af,
		'isIncompatible': _0x54c586,
		'playlistEnd': _0x481e10,
		'isAes': _0x1199b8,
		'isFmp4': _0xd660cd,
		'hasAttribute': _0x3df124,
		'estimateSegmentRequestTime': _0x116820,
		'isLowestEnabledRendition': _0x1695d5
	}, _0x37a73e = _0x1dff89.xhr, _0x50cc67 = _0x1dff89.mergeOptions, _0x4a26ec = function _0x7932a6() {
		var _0x2325b5 = function _0x478d7c(_0x38b74f, _0x592867) {
			_0x38b74f = _0x50cc67({ 'timeout': 45000 }, _0x38b74f);
			var _0x4f40c2 = _0x478d7c.beforeRequest || _0x1dff89.Hls.xhr.beforeRequest;
			if (_0x4f40c2 && typeof _0x4f40c2 === 'function') {
				var _0x2cc750 = _0x4f40c2(_0x38b74f);
				_0x2cc750 && (_0x38b74f = _0x2cc750);
			}
			var _0x4bc55e = _0x37a73e(_0x38b74f, function (_0x2c4feb, _0x475fc3) {
				var _0x2ead1a = _0x4bc55e.response;
				!_0x2c4feb && _0x2ead1a && (_0x4bc55e.responseTime = Date.now(), _0x4bc55e.roundTripTime = _0x4bc55e.responseTime - _0x4bc55e.requestTime, _0x4bc55e.bytesReceived = _0x2ead1a.byteLength || _0x2ead1a.length, !_0x4bc55e.bandwidth && (_0x4bc55e.bandwidth = Math.floor(_0x4bc55e.bytesReceived / _0x4bc55e.roundTripTime * 8 * 1000)));
				_0x475fc3.headers && (_0x4bc55e.responseHeaders = _0x475fc3.headers);
				_0x2c4feb && _0x2c4feb.code === 'ETIMEDOUT' && (_0x4bc55e.timedout = true);
				!_0x2c4feb && !_0x4bc55e.aborted && _0x475fc3.statusCode !== 200 && _0x475fc3.statusCode !== 206 && _0x475fc3.statusCode !== 0 && (_0x2c4feb = new Error('XHR Failed with a response of: ' + (_0x4bc55e && (_0x2ead1a || _0x4bc55e.responseText))));
				_0x592867(_0x2c4feb, _0x4bc55e);
			}), _0x2c956c = _0x4bc55e.abort;
			return _0x4bc55e.abort = function () {
				return _0x4bc55e.aborted = true, _0x2c956c.apply(_0x4bc55e, arguments);
			}, _0x4bc55e.uri = _0x38b74f.uri, _0x4bc55e.requestTime = Date.now(), _0x4bc55e;
		};
		return _0x2325b5;
	}, _0xe76613 = function _0x1ff0ab(_0x193c5b, _0x1ef085) {
		return _0x193c5b.start(_0x1ef085) + '-' + _0x193c5b.end(_0x1ef085);
	}, _0x5e69eb = function _0x2fe34a(_0x4777d0, _0x573127) {
		var _0xb62f8 = _0x4777d0.toString(16);
		return '00'.substring(0, 2 - _0xb62f8.length) + _0xb62f8 + (_0x573127 % 2 ? ' ' : '');
	}, _0x38ed7f = function _0x3f447e(_0x3cd6f4) {
		if (_0x3cd6f4 >= 32 && _0x3cd6f4 < 126) {
			return String.fromCharCode(_0x3cd6f4);
		}
		return '.';
	}, _0x58b357 = function _0x2410cc(_0x12a679) {
		var _0x2624a4 = {};
		return Object.keys(_0x12a679).forEach(function (_0x242a8e) {
			var _0x531181 = _0x12a679[_0x242a8e];
			ArrayBuffer.isView(_0x531181) ? _0x2624a4[_0x242a8e] = {
				'bytes': _0x531181.buffer,
				'byteOffset': _0x531181.byteOffset,
				'byteLength': _0x531181.byteLength
			} : _0x2624a4[_0x242a8e] = _0x531181;
		}), _0x2624a4;
	}, _0x2050df = function _0x10cc08(_0x424a3a) {
		var _0x156260 = _0x424a3a.byterange || {
			'length': Infinity,
			'offset': 0
		};
		return [
			_0x156260.length,
			_0x156260.offset,
			_0x424a3a.resolvedUri
		].join(',');
	}, _0x9b59f4 = function _0x4c484d(_0x2e6dac) {
		var _0x27d7bc = Array.prototype.slice.call(_0x2e6dac), _0x594129 = 16, _0x2e7605 = '', _0x484eaa = void 0, _0xf81a7e = void 0;
		for (var _0x35e1ff = 0; _0x35e1ff < _0x27d7bc.length / _0x594129; _0x35e1ff++) {
			_0x484eaa = _0x27d7bc.slice(_0x35e1ff * _0x594129, _0x35e1ff * _0x594129 + _0x594129).map(_0x5e69eb).join('');
			_0xf81a7e = _0x27d7bc.slice(_0x35e1ff * _0x594129, _0x35e1ff * _0x594129 + _0x594129).map(_0x38ed7f).join('');
			_0x2e7605 += _0x484eaa + ' ' + _0xf81a7e + '\n';
		}
		return _0x2e7605;
	}, _0x1a76d6 = function _0x419ea2(_0x1ae9ae) {
		var _0x550e62 = _0x1ae9ae.bytes;
		return _0x9b59f4(_0x550e62);
	}, _0xce6c3 = function _0x1e2c06(_0x179a1e) {
		var _0xc861b8 = '', _0x525bda = void 0;
		for (_0x525bda = 0; _0x525bda < _0x179a1e.length; _0x525bda++) {
			_0xc861b8 += _0xe76613(_0x179a1e, _0x525bda) + ' ';
		}
		return _0xc861b8;
	}, _0x46a14d = Object.freeze({
		'createTransferableMessage': _0x58b357,
		'initSegmentId': _0x2050df,
		'hexDump': _0x9b59f4,
		'tagDump': _0x1a76d6,
		'textRanges': _0xce6c3
	}), _0x43d632 = 0.1, _0x4c0f9f = function _0x555014(_0x574f02, _0x25eb20) {
		var _0x5017e3 = [], _0x1e9e05 = void 0;
		if (_0x574f02 && _0x574f02.length) {
			for (_0x1e9e05 = 0; _0x1e9e05 < _0x574f02.length; _0x1e9e05++) {
				_0x25eb20(_0x574f02.start(_0x1e9e05), _0x574f02.end(_0x1e9e05)) && _0x5017e3.push([
					_0x574f02.start(_0x1e9e05),
					_0x574f02.end(_0x1e9e05)
				]);
			}
		}
		return _0x1dff89.createTimeRanges(_0x5017e3);
	}, _0x4dd7d7 = function _0x31c3d2(_0x584aa8, _0x5f0fed) {
		return _0x4c0f9f(_0x584aa8, function (_0x44bc11, _0x51419b) {
			return _0x44bc11 - 0.03333333333333333 <= _0x5f0fed && _0x51419b + 0.03333333333333333 >= _0x5f0fed;
		});
	}, _0x56396d = function _0x3e8724(_0x5f179e, _0x90f7e8) {
		return _0x4c0f9f(_0x5f179e, function (_0x126d81) {
			return _0x126d81 - 0.03333333333333333 >= _0x90f7e8;
		});
	}, _0x43bfa0 = function _0xc8f30c(_0x122116) {
		if (_0x122116.length < 2) {
			return _0x1dff89.createTimeRanges();
		}
		var _0x1ade4c = [];
		for (var _0x4d4236 = 1; _0x4d4236 < _0x122116.length; _0x4d4236++) {
			var _0x5e0bd2 = _0x122116.end(_0x4d4236 - 1), _0x466963 = _0x122116.start(_0x4d4236);
			_0x1ade4c.push([
				_0x5e0bd2,
				_0x466963
			]);
		}
		return _0x1dff89.createTimeRanges(_0x1ade4c);
	}, _0x315dc9 = function _0x251f42(_0x551bb8) {
		var _0x2f9e6e = [];
		if (!_0x551bb8 || !_0x551bb8.length) {
			return '';
		}
		for (var _0x1e9387 = 0; _0x1e9387 < _0x551bb8.length; _0x1e9387++) {
			_0x2f9e6e.push(_0x551bb8.start(_0x1e9387) + ' => ' + _0x551bb8.end(_0x1e9387));
		}
		return _0x2f9e6e.join(', ');
	}, _0x45a2d6 = function _0x4e6865(_0x1a4a69, _0x2e2c0f) {
		var _0x3a8cee = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1, _0x238a1b = _0x1a4a69.length ? _0x1a4a69.end(_0x1a4a69.length - 1) : 0;
		return (_0x238a1b - _0x2e2c0f) / _0x3a8cee;
	}, _0xe304a = function _0x78bae6(_0x3330fe) {
		var _0x25b8fb = [];
		for (var _0x32d1f3 = 0; _0x32d1f3 < _0x3330fe.length; _0x32d1f3++) {
			_0x25b8fb.push({
				'start': _0x3330fe.start(_0x32d1f3),
				'end': _0x3330fe.end(_0x32d1f3)
			});
		}
		return _0x25b8fb;
	}, _0xd4b5fa = function _0x1969f9(_0x38264d, _0x20f79b, _0x2a22f8) {
		var _0x23a0a0 = _0x20f79b.player_;
		if (_0x2a22f8.captions && _0x2a22f8.captions.length) {
			!_0x38264d.inbandTextTracks_ && (_0x38264d.inbandTextTracks_ = {});
			for (var _0x929fbc in _0x2a22f8.captionStreams) {
				if (!_0x38264d.inbandTextTracks_[_0x929fbc]) {
					_0x23a0a0.tech_.trigger({
						'type': 'usage',
						'name': 'hls-608'
					});
					var _0x1001ea = _0x23a0a0.textTracks().getTrackById(_0x929fbc);
					_0x1001ea ? _0x38264d.inbandTextTracks_[_0x929fbc] = _0x1001ea : _0x38264d.inbandTextTracks_[_0x929fbc] = _0x23a0a0.addRemoteTextTrack({
						'kind': 'captions',
						'id': _0x929fbc,
						'label': _0x929fbc
					}, false).track;
				}
			}
		}
		_0x2a22f8.metadata && _0x2a22f8.metadata.length && !_0x38264d.metadataTrack_ && (_0x38264d.metadataTrack_ = _0x23a0a0.addRemoteTextTrack({
			'kind': 'metadata',
			'label': 'Timed Metadata'
		}, false).track, _0x38264d.metadataTrack_.inBandMetadataTrackDispatchType = _0x2a22f8.metadata.dispatchType);
	}, _0x594cb8 = function _0x33ab0e(_0x2ebf2d, _0x70c807, _0xcd996d) {
		var _0xbc190c = void 0, _0x235484 = void 0;
		if (!_0xcd996d) {
			return;
		}
		if (!_0xcd996d.cues) {
			return;
		}
		_0xbc190c = _0xcd996d.cues.length;
		while (_0xbc190c--) {
			_0x235484 = _0xcd996d.cues[_0xbc190c];
			_0x235484.startTime <= _0x70c807 && _0x235484.endTime >= _0x2ebf2d && _0xcd996d.removeCue(_0x235484);
		}
	}, _0x3c17ab = function _0xb75023(_0x4451bc) {
		Object.defineProperties(_0x4451bc.frame, {
			'id': {
				'get': function _0x368ca0() {
					return _0x1dff89.log.warn('cue.frame.id is deprecated. Use cue.value.key instead.'), _0x4451bc.value.key;
				}
			},
			'value': {
				'get': function _0x8c286b() {
					return _0x1dff89.log.warn('cue.frame.value is deprecated. Use cue.value.data instead.'), _0x4451bc.value.data;
				}
			},
			'privateData': {
				'get': function _0x5c1570() {
					return _0x1dff89.log.warn('cue.frame.privateData is deprecated. Use cue.value.data instead.'), _0x4451bc.value.data;
				}
			}
		});
	}, _0x2d0089 = function _0xc6c254(_0x88a2bb) {
		var _0x4bef8e = void 0;
		return isNaN(_0x88a2bb) || Math.abs(_0x88a2bb) === Infinity ? _0x4bef8e = Number.MAX_VALUE : _0x4bef8e = _0x88a2bb, _0x4bef8e;
	}, _0x313f98 = function _0x51be6b(_0x59a309, _0x737681, _0x97d216) {
		var _0x16e88c = _0x562c10.WebKitDataCue || _0x562c10.VTTCue;
		_0x737681 && _0x737681.forEach(function (_0x56b6c1) {
			var _0x512c41 = _0x56b6c1.stream;
			this.inbandTextTracks_[_0x512c41].addCue(new _0x16e88c(_0x56b6c1.startTime + this.timestampOffset, _0x56b6c1.endTime + this.timestampOffset, _0x56b6c1.text));
		}, _0x59a309);
		if (_0x97d216) {
			var _0x43bcf9 = _0x2d0089(_0x59a309.mediaSource_.duration);
			_0x97d216.forEach(function (_0x41351f) {
				var _0x121280 = _0x41351f.cueTime + this.timestampOffset;
				_0x41351f.frames.forEach(function (_0x1ba8a1) {
					var _0x81ad34 = new _0x16e88c(_0x121280, _0x121280, _0x1ba8a1.value || _0x1ba8a1.url || _0x1ba8a1.data || '');
					_0x81ad34.frame = _0x1ba8a1;
					_0x81ad34.value = _0x1ba8a1;
					_0x3c17ab(_0x81ad34);
					this.metadataTrack_.addCue(_0x81ad34);
				}, this);
			}, _0x59a309);
			if (_0x59a309.metadataTrack_ && _0x59a309.metadataTrack_.cues && _0x59a309.metadataTrack_.cues.length) {
				var _0x2573f7 = _0x59a309.metadataTrack_.cues, _0x4e752a = [];
				for (var _0xb66f65 = 0; _0xb66f65 < _0x2573f7.length; _0xb66f65++) {
					_0x2573f7[_0xb66f65] && _0x4e752a.push(_0x2573f7[_0xb66f65]);
				}
				var _0xee5d27 = _0x4e752a.reduce(function (_0x1b5497, _0x38edee) {
					var _0x39737f = _0x1b5497[_0x38edee.startTime] || [];
					return _0x39737f.push(_0x38edee), _0x1b5497[_0x38edee.startTime] = _0x39737f, _0x1b5497;
				}, {}), _0x22518b = Object.keys(_0xee5d27).sort(function (_0x31bc37, _0x2391d0) {
					return Number(_0x31bc37) - Number(_0x2391d0);
				});
				_0x22518b.forEach(function (_0x299cfb, _0x4b27c6) {
					var _0x1297b5 = _0xee5d27[_0x299cfb], _0x35a5b4 = Number(_0x22518b[_0x4b27c6 + 1]) || _0x43bcf9;
					_0x1297b5.forEach(function (_0x40197e) {
						_0x40197e.endTime = _0x35a5b4;
					});
				});
			}
		}
	}, _0x893044 = typeof window !== 'undefined' ? window : {}, _0x10e61f = typeof Symbol === 'undefined' ? '__target' : Symbol(), _0x2a0a57 = 'application/javascript', _0x9f5a77 = _0x893044.BlobBuilder || _0x893044.WebKitBlobBuilder || _0x893044.MozBlobBuilder || _0x893044.MSBlobBuilder, _0x24cbb1 = _0x893044.URL || _0x893044.webkitURL || _0x24cbb1 && _0x24cbb1.msURL, _0x3a79db = _0x893044.Worker;
	function _0x1ab5f4(_0x37d650, _0x10ef70) {
		return function _0xa8ba5f(_0x358dd9) {
			var _0x1e7761 = this;
			if (!_0x10ef70) {
				return new _0x3a79db(_0x37d650);
			} else {
				if (_0x3a79db && !_0x358dd9) {
					var _0x25bafb = _0x10ef70.toString().replace(/^function.+?{/, '').slice(0, -1), _0x50b6fb = _0x2f6401(_0x25bafb);
					return this[_0x10e61f] = new _0x3a79db(_0x50b6fb), _0x1a0ec5(this[_0x10e61f], _0x50b6fb), this[_0x10e61f];
				} else {
					var _0x1bd7d4 = {
						'postMessage': function _0x2d156a(_0x3c5298) {
							_0x1e7761.onmessage && setTimeout(function () {
								_0x1e7761.onmessage({
									'data': _0x3c5298,
									'target': _0x1bd7d4
								});
							});
						}
					};
					_0x10ef70.call(_0x1bd7d4);
					this.postMessage = function (_0x2c30c6) {
						setTimeout(function () {
							_0x1bd7d4.onmessage({
								'data': _0x2c30c6,
								'target': _0x1e7761
							});
						});
					};
					this.isThisThread = true;
				}
			}
		};
	}
	if (_0x3a79db) {
		var _0x20d6ee, _0x550681 = _0x2f6401('self.onmessage = function () {}'), _0x28fa2a = new Uint8Array(1);
		try {
			_0x20d6ee = new _0x3a79db(_0x550681);
			_0x20d6ee.postMessage(_0x28fa2a, [_0x28fa2a.buffer]);
		} catch (_0x15100e) {
			_0x3a79db = null;
		} finally {
			_0x24cbb1.revokeObjectURL(_0x550681);
			_0x20d6ee && _0x20d6ee.terminate();
		}
	}
	function _0x2f6401(_0x4116e0) {
		try {
			return _0x24cbb1.createObjectURL(new Blob([_0x4116e0], { 'type': _0x2a0a57 }));
		} catch (_0x4a3014) {
			var _0x1500d6 = new _0x9f5a77();
			return _0x1500d6.append(_0x4116e0), _0x24cbb1.createObjectURL(_0x1500d6.getBlob(type));
		}
	}
	function _0x1a0ec5(_0x46f611, _0x163f4d) {
		if (!_0x46f611 || !_0x163f4d) {
			return;
		}
		var _0x2b65d3 = _0x46f611.terminate;
		_0x46f611.objURL = _0x163f4d;
		_0x46f611.terminate = function () {
			if (_0x46f611.objURL) {
				_0x24cbb1.revokeObjectURL(_0x46f611.objURL);
			}
			_0x2b65d3.call(_0x46f611);
		};
	}
	var _0x268fc0 = new _0x1ab5f4('./transmuxer-worker.worker.js', function (_0x619d3a, _0x8ffd1) {
		var _0x3187e8 = this, _0x570939 = (function () {
			var _0x34f589 = Math.pow(2, 32) - 1, _0x4e9dda, _0x158099, _0x1aa347, _0xb4fbb7, _0x8273f3, _0x512346, _0x591f54, _0x41ab38, _0x4e848e, _0x572ab9, _0x2b59ba, _0x5e45ad, _0x3f8090, _0xb4f07, _0x3e9793, _0x1ab656, _0x445b9b, _0x141659, _0x2f54fe, _0x314f6c, _0xfab131, _0x2c2262, _0x39e4b4, _0x2cd91e, _0x90b289, _0xf62a74, _0x58fa7e, _0x4be6fc, _0x359705, _0x3291a2, _0x1fee7b, _0x5a3e81, _0x3a7b0c, _0x2b5ab8, _0x403518, _0x4a9f6d;
			(function () {
				var _0x15a146;
				_0x39e4b4 = {
					'avc1': [],
					'avcC': [],
					'btrt': [],
					'dinf': [],
					'dref': [],
					'esds': [],
					'ftyp': [],
					'hdlr': [],
					'mdat': [],
					'mdhd': [],
					'mdia': [],
					'mfhd': [],
					'minf': [],
					'moof': [],
					'moov': [],
					'mp4a': [],
					'mvex': [],
					'mvhd': [],
					'sdtp': [],
					'smhd': [],
					'stbl': [],
					'stco': [],
					'stsc': [],
					'stsd': [],
					'stsz': [],
					'stts': [],
					'styp': [],
					'tfdt': [],
					'tfhd': [],
					'traf': [],
					'trak': [],
					'trun': [],
					'trex': [],
					'tkhd': [],
					'vmhd': []
				};
				if (typeof Uint8Array === 'undefined') {
					return;
				}
				for (_0x15a146 in _0x39e4b4) {
					_0x39e4b4.hasOwnProperty(_0x15a146) && (_0x39e4b4[_0x15a146] = [
						_0x15a146.charCodeAt(0),
						_0x15a146.charCodeAt(1),
						_0x15a146.charCodeAt(2),
						_0x15a146.charCodeAt(3)
					]);
				}
				_0x2cd91e = new Uint8Array([
					'i'.charCodeAt(0),
					's'.charCodeAt(0),
					'o'.charCodeAt(0),
					'm'.charCodeAt(0)
				]);
				_0xf62a74 = new Uint8Array([
					'a'.charCodeAt(0),
					'v'.charCodeAt(0),
					'c'.charCodeAt(0),
					'1'.charCodeAt(0)
				]);
				_0x90b289 = new Uint8Array([
					0,
					0,
					0,
					1
				]);
				_0x58fa7e = new Uint8Array([
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					118,
					105,
					100,
					101,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					86,
					105,
					100,
					101,
					111,
					72,
					97,
					110,
					100,
					108,
					101,
					114,
					0
				]);
				_0x4be6fc = new Uint8Array([
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					115,
					111,
					117,
					110,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					83,
					111,
					117,
					110,
					100,
					72,
					97,
					110,
					100,
					108,
					101,
					114,
					0
				]);
				_0x359705 = {
					'video': _0x58fa7e,
					'audio': _0x4be6fc
				};
				_0x5a3e81 = new Uint8Array([
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					12,
					117,
					114,
					108,
					32,
					0,
					0,
					0,
					1
				]);
				_0x1fee7b = new Uint8Array([
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]);
				_0x3a7b0c = new Uint8Array([
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]);
				_0x2b5ab8 = _0x3a7b0c;
				_0x403518 = new Uint8Array([
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]);
				_0x4a9f6d = _0x3a7b0c;
				_0x3291a2 = new Uint8Array([
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]);
			}());
			_0x4e9dda = function _0x2a0e6a(_0x35e437) {
				var _0x34e587 = [], _0xdd271e = 0, _0x1afcef, _0xde7547, _0x3f0816;
				for (_0x1afcef = 1; _0x1afcef < arguments.length; _0x1afcef++) {
					_0x34e587.push(arguments[_0x1afcef]);
				}
				_0x1afcef = _0x34e587.length;
				while (_0x1afcef--) {
					_0xdd271e += _0x34e587[_0x1afcef].byteLength;
				}
				_0xde7547 = new Uint8Array(_0xdd271e + 8);
				_0x3f0816 = new DataView(_0xde7547.buffer, _0xde7547.byteOffset, _0xde7547.byteLength);
				_0x3f0816.setUint32(0, _0xde7547.byteLength);
				_0xde7547.set(_0x35e437, 4);
				for (_0x1afcef = 0, _0xdd271e = 8; _0x1afcef < _0x34e587.length; _0x1afcef++) {
					_0xde7547.set(_0x34e587[_0x1afcef], _0xdd271e);
					_0xdd271e += _0x34e587[_0x1afcef].byteLength;
				}
				return _0xde7547;
			};
			_0x158099 = function _0x28892b() {
				return _0x4e9dda(_0x39e4b4.dinf, _0x4e9dda(_0x39e4b4.dref, _0x5a3e81));
			};
			_0x1aa347 = function _0x3f6d68(_0x451b33) {
				return _0x4e9dda(_0x39e4b4.esds, new Uint8Array([
					0,
					0,
					0,
					0,
					3,
					25,
					0,
					0,
					0,
					4,
					17,
					64,
					21,
					0,
					6,
					0,
					0,
					0,
					218,
					192,
					0,
					0,
					218,
					192,
					5,
					2,
					_0x451b33.audioobjecttype << 3 | _0x451b33.samplingfrequencyindex >>> 1,
					_0x451b33.samplingfrequencyindex << 7 | _0x451b33.channelcount << 3,
					6,
					1,
					2
				]));
			};
			_0xb4fbb7 = function _0x5063f3() {
				return _0x4e9dda(_0x39e4b4.ftyp, _0x2cd91e, _0x90b289, _0x2cd91e, _0xf62a74);
			};
			_0x1ab656 = function _0x1e4eb3(_0x8288db) {
				return _0x4e9dda(_0x39e4b4.hdlr, _0x359705[_0x8288db]);
			};
			_0x8273f3 = function _0x2b9c77(_0x186dc9) {
				return _0x4e9dda(_0x39e4b4.mdat, _0x186dc9);
			};
			_0x3e9793 = function _0x4102e1(_0x23b3d1) {
				var _0x24002c = new Uint8Array([
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					2,
					0,
					0,
					0,
					3,
					0,
					1,
					95,
					144,
					_0x23b3d1.duration >>> 24 & 255,
					_0x23b3d1.duration >>> 16 & 255,
					_0x23b3d1.duration >>> 8 & 255,
					_0x23b3d1.duration & 255,
					85,
					196,
					0,
					0
				]);
				return _0x23b3d1.samplerate && (_0x24002c[12] = _0x23b3d1.samplerate >>> 24 & 255, _0x24002c[13] = _0x23b3d1.samplerate >>> 16 & 255, _0x24002c[14] = _0x23b3d1.samplerate >>> 8 & 255, _0x24002c[15] = _0x23b3d1.samplerate & 255), _0x4e9dda(_0x39e4b4.mdhd, _0x24002c);
			};
			_0xb4f07 = function _0x147a7b(_0x1109f2) {
				return _0x4e9dda(_0x39e4b4.mdia, _0x3e9793(_0x1109f2), _0x1ab656(_0x1109f2.type), _0x591f54(_0x1109f2));
			};
			_0x512346 = function _0x1c3642(_0x3451b7) {
				return _0x4e9dda(_0x39e4b4.mfhd, new Uint8Array([
					0,
					0,
					0,
					0,
					(_0x3451b7 & 4278190080) >> 24,
					(_0x3451b7 & 16711680) >> 16,
					(_0x3451b7 & 65280) >> 8,
					_0x3451b7 & 255
				]));
			};
			_0x591f54 = function _0x1b3122(_0x4a1aae) {
				return _0x4e9dda(_0x39e4b4.minf, _0x4a1aae.type === 'video' ? _0x4e9dda(_0x39e4b4.vmhd, _0x3291a2) : _0x4e9dda(_0x39e4b4.smhd, _0x1fee7b), _0x158099(), _0x141659(_0x4a1aae));
			};
			_0x41ab38 = function _0x3f8c0c(_0x2f819f, _0x29a543) {
				var _0x2a40ed = [], _0x13646d = _0x29a543.length;
				while (_0x13646d--) {
					_0x2a40ed[_0x13646d] = _0x314f6c(_0x29a543[_0x13646d]);
				}
				return _0x4e9dda.apply(null, [
					_0x39e4b4.moof,
					_0x512346(_0x2f819f)
				].concat(_0x2a40ed));
			};
			_0x4e848e = function _0x27b07e(_0x2dfeb9) {
				var _0x132393 = _0x2dfeb9.length, _0x860556 = [];
				while (_0x132393--) {
					_0x860556[_0x132393] = _0x5e45ad(_0x2dfeb9[_0x132393]);
				}
				return _0x4e9dda.apply(null, [
					_0x39e4b4.moov,
					_0x2b59ba(4294967295)
				].concat(_0x860556).concat(_0x572ab9(_0x2dfeb9)));
			};
			_0x572ab9 = function _0x110c45(_0x546b7c) {
				var _0x2e71bb = _0x546b7c.length, _0x7f555c = [];
				while (_0x2e71bb--) {
					_0x7f555c[_0x2e71bb] = _0xfab131(_0x546b7c[_0x2e71bb]);
				}
				return _0x4e9dda.apply(null, [_0x39e4b4.mvex].concat(_0x7f555c));
			};
			_0x2b59ba = function _0x312441(_0xc5b7ec) {
				var _0x3e4ebc = new Uint8Array([
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					2,
					0,
					1,
					95,
					144,
					(_0xc5b7ec & 4278190080) >> 24,
					(_0xc5b7ec & 16711680) >> 16,
					(_0xc5b7ec & 65280) >> 8,
					_0xc5b7ec & 255,
					0,
					1,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					64,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					255,
					255,
					255,
					255
				]);
				return _0x4e9dda(_0x39e4b4.mvhd, _0x3e4ebc);
			};
			_0x445b9b = function _0x162672(_0x18724a) {
				var _0x7c2683 = _0x18724a.samples || [], _0x35738a = new Uint8Array(4 + _0x7c2683.length), _0x2ab696, _0x4da840;
				for (_0x4da840 = 0; _0x4da840 < _0x7c2683.length; _0x4da840++) {
					_0x2ab696 = _0x7c2683[_0x4da840].flags;
					_0x35738a[_0x4da840 + 4] = _0x2ab696.dependsOn << 4 | _0x2ab696.isDependedOn << 2 | _0x2ab696.hasRedundancy;
				}
				return _0x4e9dda(_0x39e4b4.sdtp, _0x35738a);
			};
			_0x141659 = function _0x1425c8(_0x36f75c) {
				return _0x4e9dda(_0x39e4b4.stbl, _0x2f54fe(_0x36f75c), _0x4e9dda(_0x39e4b4.stts, _0x4a9f6d), _0x4e9dda(_0x39e4b4.stsc, _0x2b5ab8), _0x4e9dda(_0x39e4b4.stsz, _0x403518), _0x4e9dda(_0x39e4b4.stco, _0x3a7b0c));
			};
			(function () {
				var _0x234035, _0x770e5f;
				_0x2f54fe = function _0x52684f(_0x515943) {
					return _0x4e9dda(_0x39e4b4.stsd, new Uint8Array([
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						1
					]), _0x515943.type === 'video' ? _0x234035(_0x515943) : _0x770e5f(_0x515943));
				};
				_0x234035 = function _0x2f2585(_0x1c6e53) {
					var _0x5e9252 = _0x1c6e53.sps || [], _0x662036 = _0x1c6e53.pps || [], _0x38f2a3 = [], _0x4f66c5 = [], _0x5b0d05;
					for (_0x5b0d05 = 0; _0x5b0d05 < _0x5e9252.length; _0x5b0d05++) {
						_0x38f2a3.push((_0x5e9252[_0x5b0d05].byteLength & 65280) >>> 8);
						_0x38f2a3.push(_0x5e9252[_0x5b0d05].byteLength & 255);
						_0x38f2a3 = _0x38f2a3.concat(Array.prototype.slice.call(_0x5e9252[_0x5b0d05]));
					}
					for (_0x5b0d05 = 0; _0x5b0d05 < _0x662036.length; _0x5b0d05++) {
						_0x4f66c5.push((_0x662036[_0x5b0d05].byteLength & 65280) >>> 8);
						_0x4f66c5.push(_0x662036[_0x5b0d05].byteLength & 255);
						_0x4f66c5 = _0x4f66c5.concat(Array.prototype.slice.call(_0x662036[_0x5b0d05]));
					}
					return _0x4e9dda(_0x39e4b4.avc1, new Uint8Array([
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						1,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						(_0x1c6e53.width & 65280) >> 8,
						_0x1c6e53.width & 255,
						(_0x1c6e53.height & 65280) >> 8,
						_0x1c6e53.height & 255,
						0,
						72,
						0,
						0,
						0,
						72,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						1,
						19,
						118,
						105,
						100,
						101,
						111,
						106,
						115,
						45,
						99,
						111,
						110,
						116,
						114,
						105,
						98,
						45,
						104,
						108,
						115,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						24,
						17,
						17
					]), _0x4e9dda(_0x39e4b4.avcC, new Uint8Array([
						1,
						_0x1c6e53.profileIdc,
						_0x1c6e53.profileCompatibility,
						_0x1c6e53.levelIdc,
						255
					].concat([_0x5e9252.length]).concat(_0x38f2a3).concat([_0x662036.length]).concat(_0x4f66c5))), _0x4e9dda(_0x39e4b4.btrt, new Uint8Array([
						0,
						28,
						156,
						128,
						0,
						45,
						198,
						192,
						0,
						45,
						198,
						192
					])));
				};
				_0x770e5f = function _0xbd5b53(_0x2119b0) {
					return _0x4e9dda(_0x39e4b4.mp4a, new Uint8Array([
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						1,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						(_0x2119b0.channelcount & 65280) >> 8,
						_0x2119b0.channelcount & 255,
						(_0x2119b0.samplesize & 65280) >> 8,
						_0x2119b0.samplesize & 255,
						0,
						0,
						0,
						0,
						(_0x2119b0.samplerate & 65280) >> 8,
						_0x2119b0.samplerate & 255,
						0,
						0
					]), _0x1aa347(_0x2119b0));
				};
			}());
			_0x3f8090 = function _0x13fad8(_0x6226ab) {
				var _0x253fb3 = new Uint8Array([
					0,
					0,
					0,
					7,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					(_0x6226ab.id & 4278190080) >> 24,
					(_0x6226ab.id & 16711680) >> 16,
					(_0x6226ab.id & 65280) >> 8,
					_0x6226ab.id & 255,
					0,
					0,
					0,
					0,
					(_0x6226ab.duration & 4278190080) >> 24,
					(_0x6226ab.duration & 16711680) >> 16,
					(_0x6226ab.duration & 65280) >> 8,
					_0x6226ab.duration & 255,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					64,
					0,
					0,
					0,
					(_0x6226ab.width & 65280) >> 8,
					_0x6226ab.width & 255,
					0,
					0,
					(_0x6226ab.height & 65280) >> 8,
					_0x6226ab.height & 255,
					0,
					0
				]);
				return _0x4e9dda(_0x39e4b4.tkhd, _0x253fb3);
			};
			_0x314f6c = function _0x4224af(_0x45df31) {
				var _0x12587a, _0x3104b9, _0x1cde63, _0x47eda8, _0x3fc712, _0x3ae6a1, _0x5e2c3a;
				_0x12587a = _0x4e9dda(_0x39e4b4.tfhd, new Uint8Array([
					0,
					0,
					0,
					58,
					(_0x45df31.id & 4278190080) >> 24,
					(_0x45df31.id & 16711680) >> 16,
					(_0x45df31.id & 65280) >> 8,
					_0x45df31.id & 255,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]));
				_0x3ae6a1 = Math.floor(_0x45df31.baseMediaDecodeTime / (_0x34f589 + 1));
				_0x5e2c3a = Math.floor(_0x45df31.baseMediaDecodeTime % (_0x34f589 + 1));
				_0x3104b9 = _0x4e9dda(_0x39e4b4.tfdt, new Uint8Array([
					1,
					0,
					0,
					0,
					_0x3ae6a1 >>> 24 & 255,
					_0x3ae6a1 >>> 16 & 255,
					_0x3ae6a1 >>> 8 & 255,
					_0x3ae6a1 & 255,
					_0x5e2c3a >>> 24 & 255,
					_0x5e2c3a >>> 16 & 255,
					_0x5e2c3a >>> 8 & 255,
					_0x5e2c3a & 255
				]));
				_0x3fc712 = 92;
				if (_0x45df31.type === 'audio') {
					return _0x1cde63 = _0x2c2262(_0x45df31, _0x3fc712), _0x4e9dda(_0x39e4b4.traf, _0x12587a, _0x3104b9, _0x1cde63);
				}
				return _0x47eda8 = _0x445b9b(_0x45df31), _0x1cde63 = _0x2c2262(_0x45df31, _0x47eda8.length + _0x3fc712), _0x4e9dda(_0x39e4b4.traf, _0x12587a, _0x3104b9, _0x1cde63, _0x47eda8);
			};
			_0x5e45ad = function _0x5b8f8b(_0x599423) {
				return _0x599423.duration = _0x599423.duration || 4294967295, _0x4e9dda(_0x39e4b4.trak, _0x3f8090(_0x599423), _0xb4f07(_0x599423));
			};
			_0xfab131 = function _0x4fa096(_0x5f2040) {
				var _0x1b240f = new Uint8Array([
					0,
					0,
					0,
					0,
					(_0x5f2040.id & 4278190080) >> 24,
					(_0x5f2040.id & 16711680) >> 16,
					(_0x5f2040.id & 65280) >> 8,
					_0x5f2040.id & 255,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					0,
					1
				]);
				return _0x5f2040.type !== 'video' && (_0x1b240f[_0x1b240f.length - 1] = 0), _0x4e9dda(_0x39e4b4.trex, _0x1b240f);
			};
			(function () {
				var _0x1384fc, _0x3c0f11, _0x24d8ee;
				_0x24d8ee = function _0x3ede20(_0x340302, _0x1cacac) {
					var _0x3d03d1 = 0, _0xfed87f = 0, _0x45bf7b = 0, _0x5c443b = 0;
					return _0x340302.length && (_0x340302[0].duration !== undefined && (_0x3d03d1 = 1), _0x340302[0].size !== undefined && (_0xfed87f = 2), _0x340302[0].flags !== undefined && (_0x45bf7b = 4), _0x340302[0].compositionTimeOffset !== undefined && (_0x5c443b = 8)), [
						0,
						0,
						_0x3d03d1 | _0xfed87f | _0x45bf7b | _0x5c443b,
						1,
						(_0x340302.length & 4278190080) >>> 24,
						(_0x340302.length & 16711680) >>> 16,
						(_0x340302.length & 65280) >>> 8,
						_0x340302.length & 255,
						(_0x1cacac & 4278190080) >>> 24,
						(_0x1cacac & 16711680) >>> 16,
						(_0x1cacac & 65280) >>> 8,
						_0x1cacac & 255
					];
				};
				_0x3c0f11 = function _0x21a1ed(_0x22e3ef, _0x1aaeb1) {
					var _0x1e598b, _0xe3064b, _0x5b3345, _0x312a9a;
					_0xe3064b = _0x22e3ef.samples || [];
					_0x1aaeb1 += 20 + 16 * _0xe3064b.length;
					_0x1e598b = _0x24d8ee(_0xe3064b, _0x1aaeb1);
					for (_0x312a9a = 0; _0x312a9a < _0xe3064b.length; _0x312a9a++) {
						_0x5b3345 = _0xe3064b[_0x312a9a];
						_0x1e598b = _0x1e598b.concat([
							(_0x5b3345.duration & 4278190080) >>> 24,
							(_0x5b3345.duration & 16711680) >>> 16,
							(_0x5b3345.duration & 65280) >>> 8,
							_0x5b3345.duration & 255,
							(_0x5b3345.size & 4278190080) >>> 24,
							(_0x5b3345.size & 16711680) >>> 16,
							(_0x5b3345.size & 65280) >>> 8,
							_0x5b3345.size & 255,
							_0x5b3345.flags.isLeading << 2 | _0x5b3345.flags.dependsOn,
							_0x5b3345.flags.isDependedOn << 6 | _0x5b3345.flags.hasRedundancy << 4 | _0x5b3345.flags.paddingValue << 1 | _0x5b3345.flags.isNonSyncSample,
							_0x5b3345.flags.degradationPriority & 240 << 8,
							_0x5b3345.flags.degradationPriority & 15,
							(_0x5b3345.compositionTimeOffset & 4278190080) >>> 24,
							(_0x5b3345.compositionTimeOffset & 16711680) >>> 16,
							(_0x5b3345.compositionTimeOffset & 65280) >>> 8,
							_0x5b3345.compositionTimeOffset & 255
						]);
					}
					return _0x4e9dda(_0x39e4b4.trun, new Uint8Array(_0x1e598b));
				};
				_0x1384fc = function _0x23b5fd(_0xcf3129, _0x49479b) {
					var _0x24c783, _0x4c9bf7, _0x4bb6aa, _0x35591c;
					_0x4c9bf7 = _0xcf3129.samples || [];
					_0x49479b += 20 + 8 * _0x4c9bf7.length;
					_0x24c783 = _0x24d8ee(_0x4c9bf7, _0x49479b);
					for (_0x35591c = 0; _0x35591c < _0x4c9bf7.length; _0x35591c++) {
						_0x4bb6aa = _0x4c9bf7[_0x35591c];
						_0x24c783 = _0x24c783.concat([
							(_0x4bb6aa.duration & 4278190080) >>> 24,
							(_0x4bb6aa.duration & 16711680) >>> 16,
							(_0x4bb6aa.duration & 65280) >>> 8,
							_0x4bb6aa.duration & 255,
							(_0x4bb6aa.size & 4278190080) >>> 24,
							(_0x4bb6aa.size & 16711680) >>> 16,
							(_0x4bb6aa.size & 65280) >>> 8,
							_0x4bb6aa.size & 255
						]);
					}
					return _0x4e9dda(_0x39e4b4.trun, new Uint8Array(_0x24c783));
				};
				_0x2c2262 = function _0x115e65(_0x249327, _0x4ef3cd) {
					if (_0x249327.type === 'audio') {
						return _0x1384fc(_0x249327, _0x4ef3cd);
					}
					return _0x3c0f11(_0x249327, _0x4ef3cd);
				};
			}());
			var _0x17115f = {
				'ftyp': _0xb4fbb7,
				'mdat': _0x8273f3,
				'moof': _0x41ab38,
				'moov': _0x4e848e,
				'initSegment': function _0x1339df(_0x1c963d) {
					var _0x10cd2b = _0xb4fbb7(), _0x429b67 = _0x4e848e(_0x1c963d), _0x30ad09;
					return _0x30ad09 = new Uint8Array(_0x10cd2b.byteLength + _0x429b67.byteLength), _0x30ad09.set(_0x10cd2b), _0x30ad09.set(_0x429b67, _0x10cd2b.byteLength), _0x30ad09;
				}
			}, _0x4a7fbf = function _0x36f288(_0x594f60) {
				return _0x594f60 >>> 0;
			}, _0x44162e = { 'toUnsigned': _0x4a7fbf }, _0x36b505 = _0x44162e.toUnsigned, _0x5f0c6a, _0x2aac71, _0x36ad3d, _0x524b59, _0x303720;
			_0x5f0c6a = function _0x78a6bd(_0x5bc776, _0x1ae9ab) {
				var _0x4ef711 = [], _0x2a8517, _0x1722db, _0x3c0742, _0x4963bf, _0x2439dc;
				if (!_0x1ae9ab.length) {
					return null;
				}
				for (_0x2a8517 = 0; _0x2a8517 < _0x5bc776.byteLength;) {
					_0x1722db = _0x36b505(_0x5bc776[_0x2a8517] << 24 | _0x5bc776[_0x2a8517 + 1] << 16 | _0x5bc776[_0x2a8517 + 2] << 8 | _0x5bc776[_0x2a8517 + 3]);
					_0x3c0742 = _0x2aac71(_0x5bc776.subarray(_0x2a8517 + 4, _0x2a8517 + 8));
					_0x4963bf = _0x1722db > 1 ? _0x2a8517 + _0x1722db : _0x5bc776.byteLength;
					_0x3c0742 === _0x1ae9ab[0] && (_0x1ae9ab.length === 1 ? _0x4ef711.push(_0x5bc776.subarray(_0x2a8517 + 8, _0x4963bf)) : (_0x2439dc = _0x5f0c6a(_0x5bc776.subarray(_0x2a8517 + 8, _0x4963bf), _0x1ae9ab.slice(1)), _0x2439dc.length && (_0x4ef711 = _0x4ef711.concat(_0x2439dc))));
					_0x2a8517 = _0x4963bf;
				}
				return _0x4ef711;
			};
			_0x2aac71 = function _0x550a03(_0x542059) {
				var _0x5b1c44 = '';
				return _0x5b1c44 += String.fromCharCode(_0x542059[0]), _0x5b1c44 += String.fromCharCode(_0x542059[1]), _0x5b1c44 += String.fromCharCode(_0x542059[2]), _0x5b1c44 += String.fromCharCode(_0x542059[3]), _0x5b1c44;
			};
			_0x36ad3d = function _0xa99ae0(_0xf70c06) {
				var _0x569afe = {}, _0x5c52fb = _0x5f0c6a(_0xf70c06, [
					'moov',
					'trak'
				]);
				return _0x5c52fb.reduce(function (_0x20bd52, _0x5534e6) {
					var _0x26df50, _0x3522ea, _0x4e8ed1, _0x510fcd, _0x44e7c7;
					_0x26df50 = _0x5f0c6a(_0x5534e6, ['tkhd'])[0];
					if (!_0x26df50) {
						return null;
					}
					_0x3522ea = _0x26df50[0];
					_0x4e8ed1 = _0x3522ea === 0 ? 12 : 20;
					_0x510fcd = _0x36b505(_0x26df50[_0x4e8ed1] << 24 | _0x26df50[_0x4e8ed1 + 1] << 16 | _0x26df50[_0x4e8ed1 + 2] << 8 | _0x26df50[_0x4e8ed1 + 3]);
					_0x44e7c7 = _0x5f0c6a(_0x5534e6, [
						'mdia',
						'mdhd'
					])[0];
					if (!_0x44e7c7) {
						return null;
					}
					return _0x3522ea = _0x44e7c7[0], _0x4e8ed1 = _0x3522ea === 0 ? 12 : 20, _0x20bd52[_0x510fcd] = _0x36b505(_0x44e7c7[_0x4e8ed1] << 24 | _0x44e7c7[_0x4e8ed1 + 1] << 16 | _0x44e7c7[_0x4e8ed1 + 2] << 8 | _0x44e7c7[_0x4e8ed1 + 3]), _0x20bd52;
				}, _0x569afe);
			};
			_0x524b59 = function _0x7ae073(_0x36fac4, _0x509ca2) {
				var _0x461c11, _0x1d111b, _0x20369b;
				return _0x461c11 = _0x5f0c6a(_0x509ca2, [
					'moof',
					'traf'
				]), _0x1d111b = [].concat.apply([], _0x461c11.map(function (_0x22d7b0) {
					return _0x5f0c6a(_0x22d7b0, ['tfhd']).map(function (_0x5b995b) {
						var _0x30acb4, _0x14a38b, _0x5966db;
						return _0x30acb4 = _0x36b505(_0x5b995b[4] << 24 | _0x5b995b[5] << 16 | _0x5b995b[6] << 8 | _0x5b995b[7]), _0x14a38b = _0x36fac4[_0x30acb4] || 90000, _0x5966db = _0x5f0c6a(_0x22d7b0, ['tfdt']).map(function (_0x574394) {
							var _0x49681a, _0x42b2a8;
							return _0x49681a = _0x574394[0], _0x42b2a8 = _0x36b505(_0x574394[4] << 24 | _0x574394[5] << 16 | _0x574394[6] << 8 | _0x574394[7]), _0x49681a === 1 && (_0x42b2a8 *= Math.pow(2, 32), _0x42b2a8 += _0x36b505(_0x574394[8] << 24 | _0x574394[9] << 16 | _0x574394[10] << 8 | _0x574394[11])), _0x42b2a8;
						})[0], _0x5966db = _0x5966db || Infinity, _0x5966db / _0x14a38b;
					});
				})), _0x20369b = Math.min.apply(null, _0x1d111b), isFinite(_0x20369b) ? _0x20369b : 0;
			};
			_0x303720 = function _0x1ae700(_0xd7759e) {
				var _0x3c6181 = _0x5f0c6a(_0xd7759e, [
					'moov',
					'trak'
				]), _0x472ad1 = [];
				return _0x3c6181.forEach(function (_0x23c155) {
					var _0x5eb95d = _0x5f0c6a(_0x23c155, [
						'mdia',
						'hdlr'
					]), _0x42ce16 = _0x5f0c6a(_0x23c155, ['tkhd']);
					_0x5eb95d.forEach(function (_0x583549, _0x183a3b) {
						var _0x5e7561 = _0x2aac71(_0x583549.subarray(8, 12)), _0x576b43 = _0x42ce16[_0x183a3b], _0x5ced5a, _0x2c2650, _0x353fbf;
						if (_0x5e7561 === 'vide') {
							_0x5ced5a = new DataView(_0x576b43.buffer, _0x576b43.byteOffset, _0x576b43.byteLength);
							_0x2c2650 = _0x5ced5a.getUint8(0);
							_0x353fbf = _0x2c2650 === 0 ? _0x5ced5a.getUint32(12) : _0x5ced5a.getUint32(20);
							_0x472ad1.push(_0x353fbf);
						}
					});
				}), _0x472ad1;
			};
			var _0x4655bf = {
				'findBox': _0x5f0c6a,
				'parseType': _0x2aac71,
				'timescale': _0x36ad3d,
				'startTime': _0x524b59,
				'videoTrackIds': _0x303720
			}, _0x404071 = function _0x164b32() {
				this.init = function () {
					var _0x39c7f8 = { _0x40eb20: _0x39c7f8[_0x40eb20].concat(_0x46b075) };
					this.on = function (_0x40eb20, _0x46b075) {
						!_0x39c7f8[_0x40eb20] && (_0x39c7f8[_0x40eb20] = []);
					};
					this.off = function (_0x55c009, _0x28a4cf) {
						var _0x374b97;
						if (!_0x39c7f8[_0x55c009]) {
							return false;
						}
						return _0x374b97 = _0x39c7f8[_0x55c009].indexOf(_0x28a4cf), _0x39c7f8[_0x55c009] = _0x39c7f8[_0x55c009].slice(), _0x39c7f8[_0x55c009].splice(_0x374b97, 1), _0x374b97 > -1;
					};
					this.trigger = function (_0x19669e) {
						var _0x2534c3, _0x5b27d3, _0x19ae3a, _0x5900a9;
						_0x2534c3 = _0x39c7f8[_0x19669e];
						if (!_0x2534c3) {
							return;
						}
						if (arguments.length === 2) {
							_0x19ae3a = _0x2534c3.length;
							for (_0x5b27d3 = 0; _0x5b27d3 < _0x19ae3a; ++_0x5b27d3) {
								_0x2534c3[_0x5b27d3].call(this, arguments[1]);
							}
						} else {
							_0x5900a9 = [];
							_0x5b27d3 = arguments.length;
							for (_0x5b27d3 = 1; _0x5b27d3 < arguments.length; ++_0x5b27d3) {
								_0x5900a9.push(arguments[_0x5b27d3]);
							}
							_0x19ae3a = _0x2534c3.length;
							for (_0x5b27d3 = 0; _0x5b27d3 < _0x19ae3a; ++_0x5b27d3) {
								_0x2534c3[_0x5b27d3].apply(this, _0x5900a9);
							}
						}
					};
					this.dispose = function () {
						_0x39c7f8 = {};
					};
				};
			};
			_0x404071.prototype.pipe = function (_0x198e2f) {
				return this.on('data', function (_0x3ef790) {
					_0x198e2f.push(_0x3ef790);
				}), this.on('done', function (_0x8da03d) {
					_0x198e2f.flush(_0x8da03d);
				}), _0x198e2f;
			};
			_0x404071.prototype.push = function (_0x1c8d33) {
				this.trigger('data', _0x1c8d33);
			};
			_0x404071.prototype.flush = function (_0x278e42) {
				this.trigger('done', _0x278e42);
			};
			var _0x29ded3 = _0x404071, _0xe083f6 = function _0x3026b9(_0x50f4ca) {
				var _0x4c90a5, _0xdda161, _0xfddfde = [], _0x4dd5e4 = [];
				_0xfddfde.byteLength = 0;
				for (_0x4c90a5 = 0; _0x4c90a5 < _0x50f4ca.length; _0x4c90a5++) {
					_0xdda161 = _0x50f4ca[_0x4c90a5];
					_0xdda161.nalUnitType === 'access_unit_delimiter_rbsp' ? (_0xfddfde.length && (_0xfddfde.duration = _0xdda161.dts - _0xfddfde.dts, _0x4dd5e4.push(_0xfddfde)), _0xfddfde = [_0xdda161], _0xfddfde.byteLength = _0xdda161.data.byteLength, _0xfddfde.pts = _0xdda161.pts, _0xfddfde.dts = _0xdda161.dts) : (_0xdda161.nalUnitType === 'slice_layer_without_partitioning_rbsp_idr' && (_0xfddfde.keyFrame = true), _0xfddfde.duration = _0xdda161.dts - _0xfddfde.dts, _0xfddfde.byteLength += _0xdda161.data.byteLength, _0xfddfde.push(_0xdda161));
				}
				return _0x4dd5e4.length && (!_0xfddfde.duration || _0xfddfde.duration <= 0) && (_0xfddfde.duration = _0x4dd5e4[_0x4dd5e4.length - 1].duration), _0x4dd5e4.push(_0xfddfde), _0x4dd5e4;
			}, _0x5e657e = function _0x3a2fff(_0x468b38) {
				var _0x5af83d, _0x15ba50, _0x1f068a = [], _0xad8a0 = [];
				_0x1f068a.byteLength = 0;
				_0x1f068a.nalCount = 0;
				_0x1f068a.duration = 0;
				_0x1f068a.pts = _0x468b38[0].pts;
				_0x1f068a.dts = _0x468b38[0].dts;
				_0xad8a0.byteLength = 0;
				_0xad8a0.nalCount = 0;
				_0xad8a0.duration = 0;
				_0xad8a0.pts = _0x468b38[0].pts;
				_0xad8a0.dts = _0x468b38[0].dts;
				for (_0x5af83d = 0; _0x5af83d < _0x468b38.length; _0x5af83d++) {
					_0x15ba50 = _0x468b38[_0x5af83d];
					_0x15ba50.keyFrame ? (_0x1f068a.length && (_0xad8a0.push(_0x1f068a), _0xad8a0.byteLength += _0x1f068a.byteLength, _0xad8a0.nalCount += _0x1f068a.nalCount, _0xad8a0.duration += _0x1f068a.duration), _0x1f068a = [_0x15ba50], _0x1f068a.nalCount = _0x15ba50.length, _0x1f068a.byteLength = _0x15ba50.byteLength, _0x1f068a.pts = _0x15ba50.pts, _0x1f068a.dts = _0x15ba50.dts, _0x1f068a.duration = _0x15ba50.duration) : (_0x1f068a.duration += _0x15ba50.duration, _0x1f068a.nalCount += _0x15ba50.length, _0x1f068a.byteLength += _0x15ba50.byteLength, _0x1f068a.push(_0x15ba50));
				}
				return _0xad8a0.length && _0x1f068a.duration <= 0 && (_0x1f068a.duration = _0xad8a0[_0xad8a0.length - 1].duration), _0xad8a0.byteLength += _0x1f068a.byteLength, _0xad8a0.nalCount += _0x1f068a.nalCount, _0xad8a0.duration += _0x1f068a.duration, _0xad8a0.push(_0x1f068a), _0xad8a0;
			}, _0x17d88e = function _0x2fd359(_0x1b8853) {
				var _0x3cc048;
				return !_0x1b8853[0][0].keyFrame && _0x1b8853.length > 1 && (_0x3cc048 = _0x1b8853.shift(), _0x1b8853.byteLength -= _0x3cc048.byteLength, _0x1b8853.nalCount -= _0x3cc048.nalCount, _0x1b8853[0][0].dts = _0x3cc048.dts, _0x1b8853[0][0].pts = _0x3cc048.pts, _0x1b8853[0][0].duration += _0x3cc048.duration), _0x1b8853;
			}, _0x40dad8 = function _0x497e64() {
				return {
					'size': 0,
					'flags': {
						'isLeading': 0,
						'dependsOn': 1,
						'isDependedOn': 0,
						'hasRedundancy': 0,
						'degradationPriority': 0,
						'isNonSyncSample': 1
					}
				};
			}, _0x39c2bd = function _0x5c26d8(_0x5563d5, _0x59e8f0) {
				var _0x1f361c = _0x40dad8();
				return _0x1f361c.dataOffset = _0x59e8f0, _0x1f361c.compositionTimeOffset = _0x5563d5.pts - _0x5563d5.dts, _0x1f361c.duration = _0x5563d5.duration, _0x1f361c.size = 4 * _0x5563d5.length, _0x1f361c.size += _0x5563d5.byteLength, _0x5563d5.keyFrame && (_0x1f361c.flags.dependsOn = 2, _0x1f361c.flags.isNonSyncSample = 0), _0x1f361c;
			}, _0x2abfc3 = function _0x25d48f(_0x213660, _0xd8af42) {
				var _0x4189b1, _0x25f6a0, _0x1ac8af, _0x41f59a, _0x6cbe15, _0xf3228 = _0xd8af42 || 0, _0x349c54 = [];
				for (_0x4189b1 = 0; _0x4189b1 < _0x213660.length; _0x4189b1++) {
					_0x41f59a = _0x213660[_0x4189b1];
					for (_0x25f6a0 = 0; _0x25f6a0 < _0x41f59a.length; _0x25f6a0++) {
						_0x6cbe15 = _0x41f59a[_0x25f6a0];
						_0x1ac8af = _0x39c2bd(_0x6cbe15, _0xf3228);
						_0xf3228 += _0x1ac8af.size;
						_0x349c54.push(_0x1ac8af);
					}
				}
				return _0x349c54;
			}, _0x195179 = function _0x5eb0da(_0x397fdd) {
				var _0x4138c7, _0x330eb2, _0x4d84a0, _0xc78e2c, _0x54ba99, _0x5ab8bd, _0x249f5b = 0, _0x2034c6 = _0x397fdd.byteLength, _0x193cc4 = _0x397fdd.nalCount, _0xa5dbe0 = _0x2034c6 + 4 * _0x193cc4, _0x1ecfd7 = new Uint8Array(_0xa5dbe0), _0x1066a9 = new DataView(_0x1ecfd7.buffer);
				for (_0x4138c7 = 0; _0x4138c7 < _0x397fdd.length; _0x4138c7++) {
					_0xc78e2c = _0x397fdd[_0x4138c7];
					for (_0x330eb2 = 0; _0x330eb2 < _0xc78e2c.length; _0x330eb2++) {
						_0x54ba99 = _0xc78e2c[_0x330eb2];
						for (_0x4d84a0 = 0; _0x4d84a0 < _0x54ba99.length; _0x4d84a0++) {
							_0x5ab8bd = _0x54ba99[_0x4d84a0];
							_0x1066a9.setUint32(_0x249f5b, _0x5ab8bd.data.byteLength);
							_0x249f5b += 4;
							_0x1ecfd7.set(_0x5ab8bd.data, _0x249f5b);
							_0x249f5b += _0x5ab8bd.data.byteLength;
						}
					}
				}
				return _0x1ecfd7;
			}, _0xd7eb83 = {
				'groupNalsIntoFrames': _0xe083f6,
				'groupFramesIntoGops': _0x5e657e,
				'extendFirstKeyFrame': _0x17d88e,
				'generateSampleTable': _0x2abfc3,
				'concatenateNalData': _0x195179
			}, _0x5cf78f = function _0x45bc8b(_0x2ae6d8, _0x31a4d4) {
				if (typeof _0x31a4d4.pts === 'number') {
					_0x2ae6d8.timelineStartInfo.pts === undefined && (_0x2ae6d8.timelineStartInfo.pts = _0x31a4d4.pts);
					_0x2ae6d8.minSegmentPts === undefined ? _0x2ae6d8.minSegmentPts = _0x31a4d4.pts : _0x2ae6d8.minSegmentPts = Math.min(_0x2ae6d8.minSegmentPts, _0x31a4d4.pts);
					_0x2ae6d8.maxSegmentPts === undefined ? _0x2ae6d8.maxSegmentPts = _0x31a4d4.pts : _0x2ae6d8.maxSegmentPts = Math.max(_0x2ae6d8.maxSegmentPts, _0x31a4d4.pts);
				}
				if (typeof _0x31a4d4.dts === 'number') {
					_0x2ae6d8.timelineStartInfo.dts === undefined && (_0x2ae6d8.timelineStartInfo.dts = _0x31a4d4.dts);
					_0x2ae6d8.minSegmentDts === undefined ? _0x2ae6d8.minSegmentDts = _0x31a4d4.dts : _0x2ae6d8.minSegmentDts = Math.min(_0x2ae6d8.minSegmentDts, _0x31a4d4.dts);
					_0x2ae6d8.maxSegmentDts === undefined ? _0x2ae6d8.maxSegmentDts = _0x31a4d4.dts : _0x2ae6d8.maxSegmentDts = Math.max(_0x2ae6d8.maxSegmentDts, _0x31a4d4.dts);
				}
			}, _0x4a1aca = function _0x3f63ba(_0x491c8c) {
				delete _0x491c8c.minSegmentDts;
				delete _0x491c8c.maxSegmentDts;
				delete _0x491c8c.minSegmentPts;
				delete _0x491c8c.maxSegmentPts;
			}, _0x1e17cb = function _0x456356(_0x3a3bcc, _0x13eedd) {
				var _0x454fab, _0x583ac0, _0x3698d8 = _0x3a3bcc.minSegmentDts;
				return !_0x13eedd && (_0x3698d8 -= _0x3a3bcc.timelineStartInfo.dts), _0x454fab = _0x3a3bcc.timelineStartInfo.baseMediaDecodeTime, _0x454fab += _0x3698d8, _0x454fab = Math.max(0, _0x454fab), _0x3a3bcc.type === 'audio' && (_0x583ac0 = _0x3a3bcc.samplerate / 90000, _0x454fab *= _0x583ac0, _0x454fab = Math.floor(_0x454fab)), _0x454fab;
			}, _0x10705e = {
				'clearDtsInfo': _0x4a1aca,
				'calculateTrackBaseMediaDecodeTime': _0x1e17cb,
				'collectDtsInfo': _0x5cf78f
			}, _0xa08dd6 = function _0x5ef1a7(_0x3bca61) {
				var _0x13dd89 = 0, _0x24c629 = {
					'payloadType': -1,
					'payloadSize': 0
				}, _0x4d5d57 = 0, _0x196254 = 0;
				while (_0x13dd89 < _0x3bca61.byteLength) {
					if (_0x3bca61[_0x13dd89] === 128) {
						break;
					}
					while (_0x3bca61[_0x13dd89] === 255) {
						_0x4d5d57 += 255;
						_0x13dd89++;
					}
					_0x4d5d57 += _0x3bca61[_0x13dd89++];
					while (_0x3bca61[_0x13dd89] === 255) {
						_0x196254 += 255;
						_0x13dd89++;
					}
					_0x196254 += _0x3bca61[_0x13dd89++];
					if (!_0x24c629.payload && _0x4d5d57 === 4) {
						_0x24c629.payloadType = _0x4d5d57;
						_0x24c629.payloadSize = _0x196254;
						_0x24c629.payload = _0x3bca61.subarray(_0x13dd89, _0x13dd89 + _0x196254);
						break;
					}
					_0x13dd89 += _0x196254;
					_0x4d5d57 = 0;
					_0x196254 = 0;
				}
				return _0x24c629;
			}, _0x327286 = function _0x2c5a97(_0x5b919a) {
				if (_0x5b919a.payload[0] !== 181) {
					return null;
				}
				if ((_0x5b919a.payload[1] << 8 | _0x5b919a.payload[2]) !== 49) {
					return null;
				}
				if (String.fromCharCode(_0x5b919a.payload[3], _0x5b919a.payload[4], _0x5b919a.payload[5], _0x5b919a.payload[6]) !== 'GA94') {
					return null;
				}
				if (_0x5b919a.payload[7] !== 3) {
					return null;
				}
				return _0x5b919a.payload.subarray(8, _0x5b919a.payload.length - 1);
			}, _0x23d0c9 = function _0x8ddfcd(_0x4bacc6, _0x1c4095) {
				var _0x5e5a6a = [], _0x3eb745, _0x21c793, _0x31c71a, _0x283563;
				if (!(_0x1c4095[0] & 64)) {
					return _0x5e5a6a;
				}
				_0x21c793 = _0x1c4095[0] & 31;
				for (_0x3eb745 = 0; _0x3eb745 < _0x21c793; _0x3eb745++) {
					_0x31c71a = _0x3eb745 * 3;
					_0x283563 = {
						'type': _0x1c4095[_0x31c71a + 2] & 3,
						'pts': _0x4bacc6
					};
					if (_0x1c4095[_0x31c71a + 2] & 4) {
						_0x283563.ccData = _0x1c4095[_0x31c71a + 3] << 8 | _0x1c4095[_0x31c71a + 4];
						_0x5e5a6a.push(_0x283563);
					}
				}
				return _0x5e5a6a;
			}, _0x1823ed = function _0x281062(_0x93b02f) {
				var _0x45ed97 = _0x93b02f.byteLength, _0x204eb4 = [], _0x229cda = 1, _0x153ffd, _0x231cb8;
				while (_0x229cda < _0x45ed97 - 2) {
					_0x93b02f[_0x229cda] === 0 && _0x93b02f[_0x229cda + 1] === 0 && _0x93b02f[_0x229cda + 2] === 3 ? (_0x204eb4.push(_0x229cda + 2), _0x229cda += 2) : _0x229cda++;
				}
				if (_0x204eb4.length === 0) {
					return _0x93b02f;
				}
				_0x153ffd = _0x45ed97 - _0x204eb4.length;
				_0x231cb8 = new Uint8Array(_0x153ffd);
				var _0x3302e1 = 0;
				for (_0x229cda = 0; _0x229cda < _0x153ffd; _0x3302e1++, _0x229cda++) {
					if (_0x3302e1 === _0x204eb4[0]) {
						_0x3302e1++;
						_0x204eb4.shift();
					}
					_0x231cb8[_0x229cda] = _0x93b02f[_0x3302e1];
				}
				return _0x231cb8;
			}, _0x36a768 = {
				'parseSei': _0xa08dd6,
				'parseUserData': _0x327286,
				'parseCaptionPackets': _0x23d0c9,
				'discardEmulationPreventionBytes': _0x1823ed,
				'USER_DATA_REGISTERED_ITU_T_T35': 4
			}, _0x2f0f86 = function _0x52115f() {
				_0x52115f.prototype.init.call(this);
				this.captionPackets_ = [];
				this.ccStreams_ = [
					new _0xbd2818(0, 0),
					new _0xbd2818(0, 1),
					new _0xbd2818(1, 0),
					new _0xbd2818(1, 1)
				];
				this.reset();
				this.ccStreams_.forEach(function (_0x125a5d) {
					_0x125a5d.on('data', this.trigger.bind(this, 'data'));
					_0x125a5d.on('done', this.trigger.bind(this, 'done'));
				}, this);
			};
			_0x2f0f86.prototype = new _0x29ded3();
			_0x2f0f86.prototype.push = function (_0x11cb32) {
				var _0x5b7a45, _0x2bd5f2, _0x58b622;
				if (_0x11cb32.nalUnitType !== 'sei_rbsp') {
					return;
				}
				_0x5b7a45 = _0x36a768.parseSei(_0x11cb32.escapedRBSP);
				if (_0x5b7a45.payloadType !== _0x36a768.USER_DATA_REGISTERED_ITU_T_T35) {
					return;
				}
				_0x2bd5f2 = _0x36a768.parseUserData(_0x5b7a45);
				if (!_0x2bd5f2) {
					return;
				}
				if (_0x11cb32.dts < this.latestDts_) {
					this.ignoreNextEqualDts_ = true;
					return;
				} else {
					if (_0x11cb32.dts === this.latestDts_ && this.ignoreNextEqualDts_) {
						this.numSameDts_--;
						!this.numSameDts_ && (this.ignoreNextEqualDts_ = false);
						return;
					}
				}
				_0x58b622 = _0x36a768.parseCaptionPackets(_0x11cb32.pts, _0x2bd5f2);
				this.captionPackets_ = this.captionPackets_.concat(_0x58b622);
				this.latestDts_ !== _0x11cb32.dts && (this.numSameDts_ = 0);
				this.numSameDts_++;
				this.latestDts_ = _0x11cb32.dts;
			};
			_0x2f0f86.prototype.flush = function () {
				if (!this.captionPackets_.length) {
					this.ccStreams_.forEach(function (_0x1528d4) {
						_0x1528d4.flush();
					}, this);
					return;
				}
				this.captionPackets_.forEach(function (_0x5713d4, _0x53be4b) {
					_0x5713d4.presortIndex = _0x53be4b;
				});
				this.captionPackets_.sort(function (_0x488eb3, _0x59fd14) {
					if (_0x488eb3.pts === _0x59fd14.pts) {
						return _0x488eb3.presortIndex - _0x59fd14.presortIndex;
					}
					return _0x488eb3.pts - _0x59fd14.pts;
				});
				this.captionPackets_.forEach(function (_0x4f5bc1) {
					_0x4f5bc1.type < 2 && this.dispatchCea608Packet(_0x4f5bc1);
				}, this);
				this.captionPackets_.length = 0;
				this.ccStreams_.forEach(function (_0x274532) {
					_0x274532.flush();
				}, this);
				return;
			};
			_0x2f0f86.prototype.reset = function () {
				this.latestDts_ = null;
				this.ignoreNextEqualDts_ = false;
				this.numSameDts_ = 0;
				this.activeCea608Channel_ = [
					null,
					null
				];
				this.ccStreams_.forEach(function (_0x54da8f) {
					_0x54da8f.reset();
				});
			};
			_0x2f0f86.prototype.dispatchCea608Packet = function (_0x3e085b) {
				if (this.setsChannel1Active(_0x3e085b)) {
					this.activeCea608Channel_[_0x3e085b.type] = 0;
				} else {
					this.setsChannel2Active(_0x3e085b) && (this.activeCea608Channel_[_0x3e085b.type] = 1);
				}
				if (this.activeCea608Channel_[_0x3e085b.type] === null) {
					return;
				}
				this.ccStreams_[(_0x3e085b.type << 1) + this.activeCea608Channel_[_0x3e085b.type]].push(_0x3e085b);
			};
			_0x2f0f86.prototype.setsChannel1Active = function (_0xeedc95) {
				return (_0xeedc95.ccData & 30720) === 4096;
			};
			_0x2f0f86.prototype.setsChannel2Active = function (_0x365706) {
				return (_0x365706.ccData & 30720) === 6144;
			};
			var _0x248eff = function _0x5141a2(_0x1b4d86) {
				if (_0x1b4d86 === null) {
					return '';
				}
				return _0x1b4d86 = _0x135da8[_0x1b4d86] || _0x1b4d86, String.fromCharCode(_0x1b4d86);
			}, _0x5eb576 = [
				4352,
				4384,
				4608,
				4640,
				5376,
				5408,
				5632,
				5664,
				5888,
				5920,
				4096,
				4864,
				4896,
				5120,
				5152
			], _0x3e4da8 = function _0x470b83() {
				var _0x338abb = [], _0x48a5f0 = 15;
				while (_0x48a5f0--) {
					_0x338abb.push('');
				}
				return _0x338abb;
			}, _0xbd2818 = function _0x59e733(_0x5bc3d0, _0x3b88ec) {
				_0x59e733.prototype.init.call(this);
				this.field_ = _0x5bc3d0 || 0;
				this.dataChannel_ = _0x3b88ec || 0;
				this.name_ = 'CC' + ((this.field_ << 1 | this.dataChannel_) + 1);
				this.setConstants();
				this.reset();
				this.push = function (_0x599c69) {
					var _0x292e12, _0x3523ba, _0x441d53, _0x1380d1, _0x155cca;
					_0x292e12 = _0x599c69.ccData & 32639;
					if (_0x292e12 === this.lastControlCode_) {
						this.lastControlCode_ = null;
						return;
					}
					if ((_0x292e12 & 61440) === 4096) {
						this.lastControlCode_ = _0x292e12;
					} else {
						_0x292e12 !== this.PADDING_ && (this.lastControlCode_ = null);
					}
					_0x441d53 = _0x292e12 >>> 8;
					_0x1380d1 = _0x292e12 & 255;
					if (_0x292e12 === this.PADDING_) {
						return;
					} else {
						if (_0x292e12 === this.RESUME_CAPTION_LOADING_) {
							this.mode_ = 'popOn';
						} else {
							if (_0x292e12 === this.END_OF_CAPTION_) {
								this.mode_ = 'popOn';
								this.clearFormatting(_0x599c69.pts);
								this.flushDisplayed(_0x599c69.pts);
								_0x3523ba = this.displayed_;
								this.displayed_ = this.nonDisplayed_;
								this.nonDisplayed_ = _0x3523ba;
								this.startPts_ = _0x599c69.pts;
							} else {
								if (_0x292e12 === this.ROLL_UP_2_ROWS_) {
									this.rollUpRows_ = 2;
									this.setRollUp(_0x599c69.pts);
								} else {
									if (_0x292e12 === this.ROLL_UP_3_ROWS_) {
										this.rollUpRows_ = 3;
										this.setRollUp(_0x599c69.pts);
									} else {
										if (_0x292e12 === this.ROLL_UP_4_ROWS_) {
											this.rollUpRows_ = 4;
											this.setRollUp(_0x599c69.pts);
										} else {
											if (_0x292e12 === this.CARRIAGE_RETURN_) {
												this.clearFormatting(_0x599c69.pts);
												this.flushDisplayed(_0x599c69.pts);
												this.shiftRowsUp_();
												this.startPts_ = _0x599c69.pts;
											} else {
												if (_0x292e12 === this.BACKSPACE_) {
													this.mode_ === 'popOn' ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
												} else {
													if (_0x292e12 === this.ERASE_DISPLAYED_MEMORY_) {
														this.flushDisplayed(_0x599c69.pts);
														this.displayed_ = _0x3e4da8();
													} else {
														if (_0x292e12 === this.ERASE_NON_DISPLAYED_MEMORY_) {
															this.nonDisplayed_ = _0x3e4da8();
														} else {
															if (_0x292e12 === this.RESUME_DIRECT_CAPTIONING_) {
																if (this.mode_ !== 'paintOn') {
																	this.flushDisplayed(_0x599c69.pts);
																	this.displayed_ = _0x3e4da8();
																}
																this.mode_ = 'paintOn';
																this.startPts_ = _0x599c69.pts;
															} else {
																if (this.isSpecialCharacter(_0x441d53, _0x1380d1)) {
																	_0x441d53 = (_0x441d53 & 3) << 8;
																	_0x155cca = _0x248eff(_0x441d53 | _0x1380d1);
																	this[this.mode_](_0x599c69.pts, _0x155cca);
																	this.column_++;
																} else {
																	if (this.isExtCharacter(_0x441d53, _0x1380d1)) {
																		this.mode_ === 'popOn' ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
																		_0x441d53 = (_0x441d53 & 3) << 8;
																		_0x155cca = _0x248eff(_0x441d53 | _0x1380d1);
																		this[this.mode_](_0x599c69.pts, _0x155cca);
																		this.column_++;
																	} else {
																		if (this.isMidRowCode(_0x441d53, _0x1380d1)) {
																			this.clearFormatting(_0x599c69.pts);
																			this[this.mode_](_0x599c69.pts, ' ');
																			this.column_++;
																			(_0x1380d1 & 14) === 14 && this.addFormatting(_0x599c69.pts, ['i']);
																			(_0x1380d1 & 1) === 1 && this.addFormatting(_0x599c69.pts, ['u']);
																		} else {
																			if (this.isOffsetControlCode(_0x441d53, _0x1380d1)) {
																				this.column_ += _0x1380d1 & 3;
																			} else {
																				if (this.isPAC(_0x441d53, _0x1380d1)) {
																					var _0x58424d = _0x5eb576.indexOf(_0x292e12 & 7968);
																					this.mode_ === 'rollUp' && this.setRollUp(_0x599c69.pts, _0x58424d);
																					if (_0x58424d !== this.row_) {
																						this.clearFormatting(_0x599c69.pts);
																						this.row_ = _0x58424d;
																					}
																					_0x1380d1 & 1 && this.formatting_.indexOf('u') === -1 && this.addFormatting(_0x599c69.pts, ['u']);
																					(_0x292e12 & 16) === 16 && (this.column_ = ((_0x292e12 & 14) >> 1) * 4);
																					this.isColorPAC(_0x1380d1) && ((_0x1380d1 & 14) === 14 && this.addFormatting(_0x599c69.pts, ['i']));
																				} else {
																					this.isNormalChar(_0x441d53) && (_0x1380d1 === 0 && (_0x1380d1 = null), _0x155cca = _0x248eff(_0x441d53), _0x155cca += _0x248eff(_0x1380d1), this[this.mode_](_0x599c69.pts, _0x155cca), this.column_ += _0x155cca.length);
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				};
			};
			_0xbd2818.prototype = new _0x29ded3();
			_0xbd2818.prototype.flushDisplayed = function (_0x15d4ae) {
				var _0x3eec06 = this.displayed_.map(function (_0xa979c1) {
					return _0xa979c1.trim();
				}).join('\n').replace(/^\n+|\n+$/g, '');
				_0x3eec06.length && this.trigger('data', {
					'startPts': this.startPts_,
					'endPts': _0x15d4ae,
					'text': _0x3eec06,
					'stream': this.name_
				});
			};
			_0xbd2818.prototype.reset = function () {
				this.mode_ = 'popOn';
				this.topRow_ = 0;
				this.startPts_ = 0;
				this.displayed_ = _0x3e4da8();
				this.nonDisplayed_ = _0x3e4da8();
				this.lastControlCode_ = null;
				this.column_ = 0;
				this.row_ = 14;
				this.rollUpRows_ = 2;
				this.formatting_ = [];
			};
			_0xbd2818.prototype.setConstants = function () {
				if (this.dataChannel_ === 0) {
					this.BASE_ = 16;
					this.EXT_ = 17;
					this.CONTROL_ = (20 | this.field_) << 8;
					this.OFFSET_ = 23;
				} else {
					if (this.dataChannel_ === 1) {
						this.BASE_ = 24;
						this.EXT_ = 25;
						this.CONTROL_ = (28 | this.field_) << 8;
						this.OFFSET_ = 31;
					}
				}
				this.PADDING_ = 0;
				this.RESUME_CAPTION_LOADING_ = this.CONTROL_ | 32;
				this.END_OF_CAPTION_ = this.CONTROL_ | 47;
				this.ROLL_UP_2_ROWS_ = this.CONTROL_ | 37;
				this.ROLL_UP_3_ROWS_ = this.CONTROL_ | 38;
				this.ROLL_UP_4_ROWS_ = this.CONTROL_ | 39;
				this.CARRIAGE_RETURN_ = this.CONTROL_ | 45;
				this.RESUME_DIRECT_CAPTIONING_ = this.CONTROL_ | 41;
				this.BACKSPACE_ = this.CONTROL_ | 33;
				this.ERASE_DISPLAYED_MEMORY_ = this.CONTROL_ | 44;
				this.ERASE_NON_DISPLAYED_MEMORY_ = this.CONTROL_ | 46;
			};
			_0xbd2818.prototype.isSpecialCharacter = function (_0x269415, _0x478a16) {
				return _0x269415 === this.EXT_ && _0x478a16 >= 48 && _0x478a16 <= 63;
			};
			_0xbd2818.prototype.isExtCharacter = function (_0x297d7d, _0x3dd01d) {
				return (_0x297d7d === this.EXT_ + 1 || _0x297d7d === this.EXT_ + 2) && _0x3dd01d >= 32 && _0x3dd01d <= 63;
			};
			_0xbd2818.prototype.isMidRowCode = function (_0x147cbf, _0x8c72d3) {
				return _0x147cbf === this.EXT_ && _0x8c72d3 >= 32 && _0x8c72d3 <= 47;
			};
			_0xbd2818.prototype.isOffsetControlCode = function (_0x4fba70, _0x3fd487) {
				return _0x4fba70 === this.OFFSET_ && _0x3fd487 >= 33 && _0x3fd487 <= 35;
			};
			_0xbd2818.prototype.isPAC = function (_0x20af42, _0xbacac3) {
				return _0x20af42 >= this.BASE_ && _0x20af42 < this.BASE_ + 8 && _0xbacac3 >= 64 && _0xbacac3 <= 127;
			};
			_0xbd2818.prototype.isColorPAC = function (_0x461350) {
				return _0x461350 >= 64 && _0x461350 <= 79 || _0x461350 >= 96 && _0x461350 <= 127;
			};
			_0xbd2818.prototype.isNormalChar = function (_0x337baf) {
				return _0x337baf >= 32 && _0x337baf <= 127;
			};
			_0xbd2818.prototype.setRollUp = function (_0x3c2aa4, _0x2169b3) {
				if (this.mode_ !== 'rollUp') {
					this.row_ = _0x446576;
					this.mode_ = 'rollUp';
					this.flushDisplayed(_0x3c2aa4);
					this.nonDisplayed_ = _0x3e4da8();
					this.displayed_ = _0x3e4da8();
				}
				if (_0x2169b3 !== undefined && _0x2169b3 !== this.row_) {
					for (var _0x385d98 = 0; _0x385d98 < this.rollUpRows_; _0x385d98++) {
						this.displayed_[_0x2169b3 - _0x385d98] = this.displayed_[this.row_ - _0x385d98];
						this.displayed_[this.row_ - _0x385d98] = '';
					}
				}
				_0x2169b3 === undefined && (_0x2169b3 = this.row_);
				this.topRow_ = _0x2169b3 - this.rollUpRows_ + 1;
			};
			_0xbd2818.prototype.addFormatting = function (_0x20bc18, _0x1497a7) {
				this.formatting_ = this.formatting_.concat(_0x1497a7);
				var _0x11594f = _0x1497a7.reduce(function (_0x36db43, _0x4d6890) {
					return _0x36db43 + '<' + _0x4d6890 + '>';
				}, '');
				this[this.mode_](_0x20bc18, _0x11594f);
			};
			_0xbd2818.prototype.clearFormatting = function (_0x203f29) {
				if (!this.formatting_.length) {
					return;
				}
				var _0x3597f0 = this.formatting_.reverse().reduce(function (_0x13a23d, _0x3f804f) {
					return _0x13a23d + '</' + _0x3f804f + '>';
				}, '');
				this.formatting_ = [];
				this[this.mode_](_0x203f29, _0x3597f0);
			};
			_0xbd2818.prototype.popOn = function (_0x328585, _0x137796) {
				var _0x86f036 = this.nonDisplayed_[this.row_];
				_0x86f036 += _0x137796;
				this.nonDisplayed_[this.row_] = _0x86f036;
			};
			_0xbd2818.prototype.rollUp = function (_0x4f1b00, _0x274f73) {
				var _0x27a332 = this.displayed_[this.row_];
				_0x27a332 += _0x274f73;
				this.displayed_[this.row_] = _0x27a332;
			};
			_0xbd2818.prototype.shiftRowsUp_ = function () {
				var _0x3a3f8b;
				for (_0x3a3f8b = 0; _0x3a3f8b < this.topRow_; _0x3a3f8b++) {
					this.displayed_[_0x3a3f8b] = '';
				}
				for (_0x3a3f8b = this.row_ + 1; _0x3a3f8b < 15; _0x3a3f8b++) {
					this.displayed_[_0x3a3f8b] = '';
				}
				for (_0x3a3f8b = this.topRow_; _0x3a3f8b < this.row_; _0x3a3f8b++) {
					this.displayed_[_0x3a3f8b] = this.displayed_[_0x3a3f8b + 1];
				}
				this.displayed_[this.row_] = '';
			};
			_0xbd2818.prototype.paintOn = function (_0x5d6b62, _0x40382f) {
				var _0x4c8d62 = this.displayed_[this.row_];
				_0x4c8d62 += _0x40382f;
				this.displayed_[this.row_] = _0x4c8d62;
			};
			var _0xb38546 = {
				'CaptionStream': _0x2f0f86,
				'Cea608Stream': _0xbd2818
			}, _0x5a1573 = function _0x4da1b0(_0x1a3286, _0x3fc10f) {
				var _0x4e83cb = 1;
				_0x1a3286 > _0x3fc10f && (_0x4e83cb = -1);
				while (Math.abs(_0x3fc10f - _0x1a3286) > 4294967296) {
					_0x1a3286 += _0x4e83cb * 8589934592;
				}
				return _0x1a3286;
			}, _0x1e6d4d = function _0x76791a(_0x50f123) {
				var _0x4d0fb6, _0x82644c;
				_0x76791a.prototype.init.call(this);
				this.type_ = _0x50f123;
				this.push = function (_0xe5254c) {
					if (_0xe5254c.type !== this.type_) {
						return;
					}
					_0x82644c === undefined && (_0x82644c = _0xe5254c.dts);
					_0xe5254c.dts = _0x5a1573(_0xe5254c.dts, _0x82644c);
					_0xe5254c.pts = _0x5a1573(_0xe5254c.pts, _0x82644c);
					_0x4d0fb6 = _0xe5254c.dts;
					this.trigger('data', _0xe5254c);
				};
				this.flush = function () {
					_0x82644c = _0x4d0fb6;
					this.trigger('done');
				};
				this.discontinuity = function () {
					_0x82644c = void 0;
					_0x4d0fb6 = void 0;
				};
			};
			_0x1e6d4d.prototype = new _0x29ded3();
			var _0x61c748 = {
				'TimestampRolloverStream': _0x1e6d4d,
				'handleRollover': _0x5a1573
			}, _0x5bd1fd = function _0x2406c9(_0x2b826b, _0xafcbe9, _0x33312a) {
				var _0x3b86dc, _0x58bdcc = '';
				for (_0x3b86dc = _0xafcbe9; _0x3b86dc < _0x33312a; _0x3b86dc++) {
					_0x58bdcc += '%' + ('00' + _0x2b826b[_0x3b86dc].toString(16)).slice(-2);
				}
				return _0x58bdcc;
			}, _0x1e743c = function _0x68867f(_0x4ccc17, _0x34e1aa, _0x19f7d2) {
				return decodeURIComponent(_0x5bd1fd(_0x4ccc17, _0x34e1aa, _0x19f7d2));
			}, _0x2897cc = function _0x5dbde0(_0x4a5e53, _0x5f049c, _0x45142a) {
				return unescape(_0x5bd1fd(_0x4a5e53, _0x5f049c, _0x45142a));
			}, _0xedc641 = function _0x342f4b(_0xbf8663) {
				return _0xbf8663[0] << 21 | _0xbf8663[1] << 14 | _0xbf8663[2] << 7 | _0xbf8663[3];
			}, _0x19ad17 = {
				'TXXX': function _0x431bcb(_0x1506bd) {
					var _0x530bfe;
					if (_0x1506bd.data[0] !== 3) {
						return;
					}
					for (_0x530bfe = 1; _0x530bfe < _0x1506bd.data.length; _0x530bfe++) {
						if (_0x1506bd.data[_0x530bfe] === 0) {
							_0x1506bd.description = _0x1e743c(_0x1506bd.data, 1, _0x530bfe);
							_0x1506bd.value = _0x1e743c(_0x1506bd.data, _0x530bfe + 1, _0x1506bd.data.length).replace(/\0*$/, '');
							break;
						}
					}
					_0x1506bd.data = _0x1506bd.value;
				},
				'WXXX': function _0x529c53(_0x5405fc) {
					var _0x5bc02a;
					if (_0x5405fc.data[0] !== 3) {
						return;
					}
					for (_0x5bc02a = 1; _0x5bc02a < _0x5405fc.data.length; _0x5bc02a++) {
						if (_0x5405fc.data[_0x5bc02a] === 0) {
							_0x5405fc.description = _0x1e743c(_0x5405fc.data, 1, _0x5bc02a);
							_0x5405fc.url = _0x1e743c(_0x5405fc.data, _0x5bc02a + 1, _0x5405fc.data.length);
							break;
						}
					}
				},
				'PRIV': function _0x3b7cf4(_0x2bd2bc) {
					var _0x1c143d;
					for (_0x1c143d = 0; _0x1c143d < _0x2bd2bc.data.length; _0x1c143d++) {
						if (_0x2bd2bc.data[_0x1c143d] === 0) {
							_0x2bd2bc.owner = _0x2897cc(_0x2bd2bc.data, 0, _0x1c143d);
							break;
						}
					}
					_0x2bd2bc.privateData = _0x2bd2bc.data.subarray(_0x1c143d + 1);
					_0x2bd2bc.data = _0x2bd2bc.privateData;
				}
			}, _0x13e65f;
			_0x13e65f = function _0x4a0648(_0x24153f) {
				var _0x34c86d = {
					'debug': !!(_0x24153f && _0x24153f.debug),
					'descriptor': _0x24153f && _0x24153f.descriptor
				}, _0x26b4db = 0, _0x42cf40 = [], _0x30603a = 0, _0x21ac84;
				_0x13e65f.prototype.init.call(this);
				this.dispatchType = _0x308632.METADATA_STREAM_TYPE.toString(16);
				if (_0x34c86d.descriptor) {
					for (_0x21ac84 = 0; _0x21ac84 < _0x34c86d.descriptor.length; _0x21ac84++) {
						this.dispatchType += ('00' + _0x34c86d.descriptor[_0x21ac84].toString(16)).slice(-2);
					}
				}
				this.push = function (_0x55d749) {
					var _0x45927a, _0x4292fe, _0x2536da, _0x3fcc6d, _0x210767, _0x2b60fe;
					if (_0x55d749.type !== 'timed-metadata') {
						return;
					}
					_0x55d749.dataAlignmentIndicator && (_0x30603a = 0, _0x42cf40.length = 0);
					if (_0x42cf40.length === 0 && (_0x55d749.data.length < 10 || _0x55d749.data[0] !== 'I'.charCodeAt(0) || _0x55d749.data[1] !== 'D'.charCodeAt(0) || _0x55d749.data[2] !== '3'.charCodeAt(0))) {
						_0x34c86d.debug && console.log('Skipping unrecognized metadata packet');
						return;
					}
					_0x42cf40.push(_0x55d749);
					_0x30603a += _0x55d749.data.byteLength;
					if (_0x42cf40.length === 1) {
						_0x26b4db = _0xedc641(_0x55d749.data.subarray(6, 10));
						_0x26b4db += 10;
					}
					if (_0x30603a < _0x26b4db) {
						return;
					}
					_0x45927a = {
						'data': new Uint8Array(_0x26b4db),
						'frames': [],
						'pts': _0x42cf40[0].pts,
						'dts': _0x42cf40[0].dts
					};
					for (_0x210767 = 0; _0x210767 < _0x26b4db;) {
						_0x45927a.data.set(_0x42cf40[0].data.subarray(0, _0x26b4db - _0x210767), _0x210767);
						_0x210767 += _0x42cf40[0].data.byteLength;
						_0x30603a -= _0x42cf40[0].data.byteLength;
						_0x42cf40.shift();
					}
					_0x4292fe = 10;
					if (_0x45927a.data[5] & 64) {
						_0x4292fe += 4;
						_0x4292fe += _0xedc641(_0x45927a.data.subarray(10, 14));
						_0x26b4db -= _0xedc641(_0x45927a.data.subarray(16, 20));
					}
					do {
						_0x2536da = _0xedc641(_0x45927a.data.subarray(_0x4292fe + 4, _0x4292fe + 8));
						if (_0x2536da < 1) {
							return console.log('Malformed ID3 frame encountered. Skipping metadata parsing.');
						}
						_0x2b60fe = String.fromCharCode(_0x45927a.data[_0x4292fe], _0x45927a.data[_0x4292fe + 1], _0x45927a.data[_0x4292fe + 2], _0x45927a.data[_0x4292fe + 3]);
						_0x3fcc6d = {
							'id': _0x2b60fe,
							'data': _0x45927a.data.subarray(_0x4292fe + 10, _0x4292fe + _0x2536da + 10)
						};
						_0x3fcc6d.key = _0x3fcc6d.id;
						if (_0x19ad17[_0x3fcc6d.id]) {
							_0x19ad17[_0x3fcc6d.id](_0x3fcc6d);
							if (_0x3fcc6d.owner === 'com.apple.streaming.transportStreamTimestamp') {
								var _0x40b652 = _0x3fcc6d.data, _0x7d9d4e = (_0x40b652[3] & 1) << 30 | _0x40b652[4] << 22 | _0x40b652[5] << 14 | _0x40b652[6] << 6 | _0x40b652[7] >>> 2;
								_0x7d9d4e *= 4;
								_0x7d9d4e += _0x40b652[7] & 3;
								_0x3fcc6d.timeStamp = _0x7d9d4e;
								_0x45927a.pts === undefined && _0x45927a.dts === undefined && (_0x45927a.pts = _0x3fcc6d.timeStamp, _0x45927a.dts = _0x3fcc6d.timeStamp);
								this.trigger('timestamp', _0x3fcc6d);
							}
						}
						_0x45927a.frames.push(_0x3fcc6d);
						_0x4292fe += 10;
						_0x4292fe += _0x2536da;
					} while (_0x4292fe < _0x26b4db);
					this.trigger('data', _0x45927a);
				};
			};
			_0x13e65f.prototype = new _0x29ded3();
			var _0x5ced4d = _0x13e65f, _0x3b770a = _0x61c748.TimestampRolloverStream, _0xc3783a, _0x44824c, _0x4f7811;
			_0xc3783a = function _0x1d1c22() {
				var _0x57274e = new Uint8Array(188), _0x46e671 = 0;
				_0xc3783a.prototype.init.call(this);
				this.push = function (_0x2865b5) {
					var _0x10340a = 0, _0x33d282 = 188, _0x1867f1;
					_0x46e671 ? (_0x1867f1 = new Uint8Array(_0x2865b5.byteLength + _0x46e671), _0x1867f1.set(_0x57274e.subarray(0, _0x46e671)), _0x1867f1.set(_0x2865b5, _0x46e671), _0x46e671 = 0) : _0x1867f1 = _0x2865b5;
					while (_0x33d282 < _0x1867f1.byteLength) {
						if (_0x1867f1[_0x10340a] === 71 && _0x1867f1[_0x33d282] === 71) {
							this.trigger('data', _0x1867f1.subarray(_0x10340a, _0x33d282));
							_0x10340a += 188;
							_0x33d282 += 188;
							continue;
						}
						_0x10340a++;
						_0x33d282++;
					}
					if (_0x10340a < _0x1867f1.byteLength) {
						_0x57274e.set(_0x1867f1.subarray(_0x10340a), 0);
						_0x46e671 = _0x1867f1.byteLength - _0x10340a;
					}
				};
				this.flush = function () {
					_0x46e671 === 188 && _0x57274e[0] === 71 && (this.trigger('data', _0x57274e), _0x46e671 = 0);
					this.trigger('done');
				};
			};
			_0xc3783a.prototype = new _0x29ded3();
			_0x44824c = function _0x178c39() {
				var _0x4bccfb, _0x4b1041, _0x2aea0e, _0x3ee195;
				_0x44824c.prototype.init.call(this);
				_0x3ee195 = this;
				this.packetsWaitingForPmt = [];
				this.programMapTable = undefined;
				_0x4bccfb = function _0x224177(_0x3208d2, _0x5a0c72) {
					var _0x22b4b1 = 0;
					_0x5a0c72.payloadUnitStartIndicator && (_0x22b4b1 += _0x3208d2[_0x22b4b1] + 1);
					_0x5a0c72.type === 'pat' ? _0x4b1041(_0x3208d2.subarray(_0x22b4b1), _0x5a0c72) : _0x2aea0e(_0x3208d2.subarray(_0x22b4b1), _0x5a0c72);
				};
				_0x4b1041 = function _0x1a29e0(_0x1df269, _0x54d5ff) {
					_0x54d5ff.section_number = _0x1df269[7];
					_0x54d5ff.last_section_number = _0x1df269[8];
					_0x3ee195.pmtPid = (_0x1df269[10] & 31) << 8 | _0x1df269[11];
					_0x54d5ff.pmtPid = _0x3ee195.pmtPid;
				};
				_0x2aea0e = function _0x28c076(_0x593231, _0xcaae7d) {
					var _0x528aa9, _0x2f8535, _0x375a03, _0x370564;
					if (!(_0x593231[5] & 1)) {
						return;
					}
					_0x3ee195.programMapTable = {
						'video': null,
						'audio': null,
						'timed-metadata': {}
					};
					_0x528aa9 = (_0x593231[1] & 15) << 8 | _0x593231[2];
					_0x2f8535 = 3 + _0x528aa9 - 4;
					_0x375a03 = (_0x593231[10] & 15) << 8 | _0x593231[11];
					_0x370564 = 12 + _0x375a03;
					while (_0x370564 < _0x2f8535) {
						var _0xfbdabf = _0x593231[_0x370564], _0x4e45d0 = (_0x593231[_0x370564 + 1] & 31) << 8 | _0x593231[_0x370564 + 2];
						if (_0xfbdabf === _0x308632.H264_STREAM_TYPE && _0x3ee195.programMapTable.video === null) {
							_0x3ee195.programMapTable.video = _0x4e45d0;
						} else {
							if (_0xfbdabf === 15 && _0x3ee195.programMapTable.audio === null) {
								_0x3ee195.programMapTable.audio = _0x4e45d0;
							} else {
								_0xfbdabf === _0x308632.METADATA_STREAM_TYPE && (_0x3ee195.programMapTable['timed-metadata'][_0x4e45d0] = _0xfbdabf);
							}
						}
						_0x370564 += ((_0x593231[_0x370564 + 3] & 15) << 8 | _0x593231[_0x370564 + 4]) + 5;
					}
					_0xcaae7d.programMapTable = _0x3ee195.programMapTable;
				};
				this.push = function (_0x29f39e) {
					var _0x344955 = {
						payloadUnitStartIndicator: !!(_0x29f39e[1] & 64),
						pid: _0x29f39e[1] & 31,
						pid: 8,
						pid: _0x29f39e[2],
						type: 'pat',
						type: 'pmt'
					}, _0x2136ff = 4;
					(_0x29f39e[3] & 48) >>> 4 > 1 && (_0x2136ff += _0x29f39e[_0x2136ff] + 1);
					if (_0x344955.pid === 0) {
						_0x4bccfb(_0x29f39e.subarray(_0x2136ff), _0x344955);
						this.trigger('data', _0x344955);
					} else {
						if (_0x344955.pid === this.pmtPid) {
							_0x4bccfb(_0x29f39e.subarray(_0x2136ff), _0x344955);
							this.trigger('data', _0x344955);
							while (this.packetsWaitingForPmt.length) {
								this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
							}
						} else {
							this.programMapTable === undefined ? this.packetsWaitingForPmt.push([
								_0x29f39e,
								_0x2136ff,
								_0x344955
							]) : this.processPes_(_0x29f39e, _0x2136ff, _0x344955);
						}
					}
				};
				this.processPes_ = function (_0x340ffb, _0x535a61, _0x4271cc) {
					if (_0x4271cc.pid === this.programMapTable.video) {
						_0x4271cc.streamType = _0x308632.H264_STREAM_TYPE;
					} else {
						_0x4271cc.pid === this.programMapTable.audio ? _0x4271cc.streamType = _0x308632.ADTS_STREAM_TYPE : _0x4271cc.streamType = this.programMapTable['timed-metadata'][_0x4271cc.pid];
					}
					_0x4271cc.type = 'pes';
					_0x4271cc.data = _0x340ffb.subarray(_0x535a61);
					this.trigger('data', _0x4271cc);
				};
			};
			_0x44824c.prototype = new _0x29ded3();
			_0x44824c.STREAM_TYPES = {
				'h264': 27,
				'adts': 15
			};
			_0x4f7811 = function _0x38bc1e() {
				var _0xaaaa9 = this, _0x3320fd = {
					'data': [],
					'size': 0
				}, _0xfd1654 = {
					'data': [],
					'size': 0
				}, _0x166df8 = {
					'data': [],
					'size': 0
				}, _0xfc1a15 = function _0x12b259(_0x1ffbf3, _0x1b5f8) {
					var _0xadf39a;
					_0x1b5f8.packetLength = 6 + (_0x1ffbf3[4] << 8 | _0x1ffbf3[5]);
					_0x1b5f8.dataAlignmentIndicator = (_0x1ffbf3[6] & 4) !== 0;
					_0xadf39a = _0x1ffbf3[7];
					if (_0xadf39a & 192) {
						_0x1b5f8.pts = (_0x1ffbf3[9] & 14) << 27 | (_0x1ffbf3[10] & 255) << 20 | (_0x1ffbf3[11] & 254) << 12 | (_0x1ffbf3[12] & 255) << 5 | (_0x1ffbf3[13] & 254) >>> 3;
						_0x1b5f8.pts *= 4;
						_0x1b5f8.pts += (_0x1ffbf3[13] & 6) >>> 1;
						_0x1b5f8.dts = _0x1b5f8.pts;
						if (_0xadf39a & 64) {
							_0x1b5f8.dts = (_0x1ffbf3[14] & 14) << 27 | (_0x1ffbf3[15] & 255) << 20 | (_0x1ffbf3[16] & 254) << 12 | (_0x1ffbf3[17] & 255) << 5 | (_0x1ffbf3[18] & 254) >>> 3;
							_0x1b5f8.dts *= 4;
							_0x1b5f8.dts += (_0x1ffbf3[18] & 6) >>> 1;
						}
					}
					_0x1b5f8.data = _0x1ffbf3.subarray(9 + _0x1ffbf3[8]);
				}, _0x5c65e7 = function _0x59e500(_0x49af9a, _0x1b05e2, _0x162f99) {
					var _0x31ab88 = new Uint8Array(_0x49af9a.size), _0x5145b6 = { 'type': _0x1b05e2 }, _0x1a008f = 0, _0x2be2d2 = 0, _0x48560e = false, _0x149c90;
					if (!_0x49af9a.data.length || _0x49af9a.size < 9) {
						return;
					}
					_0x5145b6.trackId = _0x49af9a.data[0].pid;
					for (_0x1a008f = 0; _0x1a008f < _0x49af9a.data.length; _0x1a008f++) {
						_0x149c90 = _0x49af9a.data[_0x1a008f];
						_0x31ab88.set(_0x149c90.data, _0x2be2d2);
						_0x2be2d2 += _0x149c90.data.byteLength;
					}
					_0xfc1a15(_0x31ab88, _0x5145b6);
					_0x48560e = _0x1b05e2 === 'video' || _0x5145b6.packetLength <= _0x49af9a.size;
					(_0x162f99 || _0x48560e) && (_0x49af9a.size = 0, _0x49af9a.data.length = 0);
					_0x48560e && _0xaaaa9.trigger('data', _0x5145b6);
				};
				_0x4f7811.prototype.init.call(this);
				this.push = function (_0x2fb1a7) {
					({
						'pat': function _0x1a35cd() {
						},
						'pes': function _0xfa003a() {
							var _0x459944, _0x17c955;
							switch (_0x2fb1a7.streamType) {
								case 27:
								case _0x308632.H264_STREAM_TYPE:
									_0x459944 = _0x3320fd, _0x17c955 = 'video';
									break;
								case _0x308632.ADTS_STREAM_TYPE:
									_0x459944 = _0xfd1654, _0x17c955 = 'audio';
									break;
								case 21:
									_0x459944 = _0x166df8, _0x17c955 = 'timed-metadata';
									break;
								default:
									return;
							}
							_0x2fb1a7.payloadUnitStartIndicator && _0x5c65e7(_0x459944, _0x17c955, true);
							_0x459944.data.push(_0x2fb1a7);
							_0x459944.size += _0x2fb1a7.data.byteLength;
						},
						'pmt': function _0x66374c() {
							var _0x2dcdad = {
								'type': 'metadata',
								'tracks': []
							}, _0x1009ae = _0x2fb1a7.programMapTable;
							_0x1009ae.video !== null && _0x2dcdad.tracks.push({
								'timelineStartInfo': { 'baseMediaDecodeTime': 0 },
								'id': +_0x1009ae.video,
								'codec': 'avc',
								'type': 'video'
							});
							_0x1009ae.audio !== null && _0x2dcdad.tracks.push({
								'timelineStartInfo': { 'baseMediaDecodeTime': 0 },
								'id': +_0x1009ae.audio,
								'codec': 'adts',
								'type': 'audio'
							});
							_0xaaaa9.trigger('data', _0x2dcdad);
						}
					}[_0x2fb1a7.type]());
				};
				this.flush = function () {
					_0x5c65e7(_0x3320fd, 'video');
					_0x5c65e7(_0xfd1654, 'audio');
					_0x5c65e7(_0x166df8, 'timed-metadata');
					this.trigger('done');
				};
			};
			_0x4f7811.prototype = new _0x29ded3();
			var _0x1e5cfd = {
				'PAT_PID': 0,
				'MP2T_PACKET_LENGTH': 188,
				'TransportPacketStream': _0xc3783a,
				'TransportParseStream': _0x44824c,
				'ElementaryStream': _0x4f7811,
				'TimestampRolloverStream': _0x3b770a,
				'CaptionStream': _0xb38546.CaptionStream,
				'Cea608Stream': _0xb38546.Cea608Stream,
				'MetadataStream': _0x5ced4d
			};
			for (var _0x1077a1 in _0x308632) {
				_0x308632.hasOwnProperty(_0x1077a1) && (_0x1e5cfd[_0x1077a1] = _0x308632[_0x1077a1]);
			}
			var _0x97ace4 = _0x1e5cfd, _0x391c95, _0x38b39f = [
				96000,
				88200,
				64000,
				48000,
				44100,
				32000,
				24000,
				22050,
				16000,
				12000,
				11025,
				8000,
				7350
			];
			_0x391c95 = function _0xb7dae5() {
				var _0x2f54c0;
				_0x391c95.prototype.init.call(this);
				this.push = function (_0x347a4f) {
					var _0x59da29 = 0, _0x227d60 = 0, _0x494370, _0x1ad52b, _0x3f99ba, _0x4fe11a, _0x1c0eba, _0x347282;
					if (_0x347a4f.type !== 'audio') {
						return;
					}
					_0x2f54c0 ? (_0x4fe11a = _0x2f54c0, _0x2f54c0 = new Uint8Array(_0x4fe11a.byteLength + _0x347a4f.data.byteLength), _0x2f54c0.set(_0x4fe11a), _0x2f54c0.set(_0x347a4f.data, _0x4fe11a.byteLength)) : _0x2f54c0 = _0x347a4f.data;
					while (_0x59da29 + 5 < _0x2f54c0.length) {
						if (_0x2f54c0[_0x59da29] !== 255 || (_0x2f54c0[_0x59da29 + 1] & 246) !== 240) {
							_0x59da29++;
							continue;
						}
						_0x1ad52b = (~_0x2f54c0[_0x59da29 + 1] & 1) * 2;
						_0x494370 = (_0x2f54c0[_0x59da29 + 3] & 3) << 11 | _0x2f54c0[_0x59da29 + 4] << 3 | (_0x2f54c0[_0x59da29 + 5] & 224) >> 5;
						_0x1c0eba = ((_0x2f54c0[_0x59da29 + 6] & 3) + 1) * 1024;
						_0x347282 = _0x1c0eba * 90000 / _0x38b39f[(_0x2f54c0[_0x59da29 + 2] & 60) >>> 2];
						_0x3f99ba = _0x59da29 + _0x494370;
						if (_0x2f54c0.byteLength < _0x3f99ba) {
							return;
						}
						this.trigger('data', {
							'pts': _0x347a4f.pts + _0x227d60 * _0x347282,
							'dts': _0x347a4f.dts + _0x227d60 * _0x347282,
							'sampleCount': _0x1c0eba,
							'audioobjecttype': (_0x2f54c0[_0x59da29 + 2] >>> 6 & 3) + 1,
							'channelcount': (_0x2f54c0[_0x59da29 + 2] & 1) << 2 | (_0x2f54c0[_0x59da29 + 3] & 192) >>> 6,
							'samplerate': _0x38b39f[(_0x2f54c0[_0x59da29 + 2] & 60) >>> 2],
							'samplingfrequencyindex': (_0x2f54c0[_0x59da29 + 2] & 60) >>> 2,
							'samplesize': 16,
							'data': _0x2f54c0.subarray(_0x59da29 + 7 + _0x1ad52b, _0x3f99ba)
						});
						if (_0x2f54c0.byteLength === _0x3f99ba) {
							_0x2f54c0 = undefined;
							return;
						}
						_0x227d60++;
						_0x2f54c0 = _0x2f54c0.subarray(_0x3f99ba);
					}
				};
				this.flush = function () {
					this.trigger('done');
				};
			};
			_0x391c95.prototype = new _0x29ded3();
			var _0x16e5d6 = _0x391c95, _0x22c70d;
			_0x22c70d = function _0x193607(_0x3dce27) {
				var _0x7854a1 = _0x3dce27.byteLength, _0x491967 = 0, _0x3287c3 = 0;
				this.length = function () {
					return 8 * _0x7854a1;
				};
				this.bitsAvailable = function () {
					return 8 * _0x7854a1 + _0x3287c3;
				};
				this.loadWord = function () {
					var _0x28188f = _0x3dce27.byteLength - _0x7854a1, _0x2092fb = new Uint8Array(4), _0x978293 = Math.min(4, _0x7854a1);
					if (_0x978293 === 0) {
						throw new Error('no bytes available');
					}
					_0x2092fb.set(_0x3dce27.subarray(_0x28188f, _0x28188f + _0x978293));
					_0x491967 = new DataView(_0x2092fb.buffer).getUint32(0);
					_0x3287c3 = _0x978293 * 8;
					_0x7854a1 -= _0x978293;
				};
				this.skipBits = function (_0xaacd) {
					var _0x1b53fe;
					_0x3287c3 > _0xaacd ? (_0x491967 <<= _0xaacd, _0x3287c3 -= _0xaacd) : (_0xaacd -= _0x3287c3, _0x1b53fe = Math.floor(_0xaacd / 8), _0xaacd -= _0x1b53fe * 8, _0x7854a1 -= _0x1b53fe, this.loadWord(), _0x491967 <<= _0xaacd, _0x3287c3 -= _0xaacd);
				};
				this.readBits = function (_0x334df4) {
					var _0x34bc0f = Math.min(_0x3287c3, _0x334df4), _0x5a1542 = _0x491967 >>> 32 - _0x34bc0f;
					_0x3287c3 -= _0x34bc0f;
					if (_0x3287c3 > 0) {
						_0x491967 <<= _0x34bc0f;
					} else {
						_0x7854a1 > 0 && this.loadWord();
					}
					_0x34bc0f = _0x334df4 - _0x34bc0f;
					if (_0x34bc0f > 0) {
						return _0x5a1542 << _0x34bc0f | this.readBits(_0x34bc0f);
					}
					return _0x5a1542;
				};
				this.skipLeadingZeros = function () {
					var _0x12dac4;
					for (_0x12dac4 = 0; _0x12dac4 < _0x3287c3; ++_0x12dac4) {
						if ((_0x491967 & 2147483648 >>> _0x12dac4) !== 0) {
							return _0x491967 <<= _0x12dac4, _0x3287c3 -= _0x12dac4, _0x12dac4;
						}
					}
					return this.loadWord(), _0x12dac4 + this.skipLeadingZeros();
				};
				this.skipUnsignedExpGolomb = function () {
					this.skipBits(1 + this.skipLeadingZeros());
				};
				this.skipExpGolomb = function () {
					this.skipBits(1 + this.skipLeadingZeros());
				};
				this.readUnsignedExpGolomb = function () {
					var _0xae0f2d = this.skipLeadingZeros();
					return this.readBits(_0xae0f2d + 1) - 1;
				};
				this.readExpGolomb = function () {
					var _0xd1d3e = this.readUnsignedExpGolomb();
					if (1 & _0xd1d3e) {
						return 1 + _0xd1d3e >>> 1;
					}
					return -1 * (_0xd1d3e >>> 1);
				};
				this.readBoolean = function () {
					return this.readBits(1) === 1;
				};
				this.readUnsignedByte = function () {
					return this.readBits(8);
				};
				this.loadWord();
			};
			var _0x3ad767 = _0x22c70d, _0x334834, _0x284fe9, _0x3be86f;
			_0x284fe9 = function _0x1ac555() {
				var _0x176972 = 0, _0x32b4fb, _0x19f962;
				_0x284fe9.prototype.init.call(this);
				this.push = function (_0x53147e) {
					var _0x2059b4;
					!_0x19f962 ? _0x19f962 = _0x53147e.data : (_0x2059b4 = new Uint8Array(_0x19f962.byteLength + _0x53147e.data.byteLength), _0x2059b4.set(_0x19f962), _0x2059b4.set(_0x53147e.data, _0x19f962.byteLength), _0x19f962 = _0x2059b4);
					for (; _0x176972 < _0x19f962.byteLength - 3; _0x176972++) {
						if (_0x19f962[_0x176972 + 2] === 1) {
							_0x32b4fb = _0x176972 + 5;
							break;
						}
					}
					while (_0x32b4fb < _0x19f962.byteLength) {
						switch (_0x19f962[_0x32b4fb]) {
							case 0:
								if (_0x19f962[_0x32b4fb - 1] !== 0) {
									_0x32b4fb += 2;
									break;
								} else {
									if (_0x19f962[_0x32b4fb - 2] !== 0) {
										_0x32b4fb++;
										break;
									}
								}
								_0x176972 + 3 !== _0x32b4fb - 2 && this.trigger('data', _0x19f962.subarray(_0x176972 + 3, _0x32b4fb - 2));
								do {
									_0x32b4fb++;
								} while (_0x19f962[_0x32b4fb] !== 1 && _0x32b4fb < _0x19f962.length);
								_0x176972 = _0x32b4fb - 2, _0x32b4fb += 3;
								break;
							case 1:
								if (_0x19f962[_0x32b4fb - 1] !== 0 || _0x19f962[_0x32b4fb - 2] !== 0) {
									_0x32b4fb += 3;
									break;
								}
								this.trigger('data', _0x19f962.subarray(_0x176972 + 3, _0x32b4fb - 2)), _0x176972 = _0x32b4fb - 2, _0x32b4fb += 3;
								break;
							default:
								_0x32b4fb += 3;
								break;
						}
					}
					_0x19f962 = _0x19f962.subarray(_0x176972);
					_0x32b4fb -= _0x176972;
					_0x176972 = 0;
				};
				this.flush = function () {
					_0x19f962 && _0x19f962.byteLength > 3 && this.trigger('data', _0x19f962.subarray(_0x176972 + 3));
					_0x19f962 = null;
					_0x176972 = 0;
					this.trigger('done');
				};
			};
			_0x284fe9.prototype = new _0x29ded3();
			_0x3be86f = {
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
			_0x334834 = function _0x105fdc() {
				var _0x5e1678 = new _0x284fe9(), _0x2c94ae, _0x34777a, _0x44f373, _0x3c8531, _0x3c29e6, _0x19954e, _0x3a3de2;
				_0x334834.prototype.init.call(this);
				_0x2c94ae = this;
				this.push = function (_0x5715b2) {
					if (_0x5715b2.type !== 'video') {
						return;
					}
					_0x34777a = _0x5715b2.trackId;
					_0x44f373 = _0x5715b2.pts;
					_0x3c8531 = _0x5715b2.dts;
					_0x5e1678.push(_0x5715b2);
				};
				_0x5e1678.on('data', function (_0xaddfbd) {
					var _0x3f5540 = {
						'trackId': _0x34777a,
						'pts': _0x44f373,
						'dts': _0x3c8531,
						'data': _0xaddfbd
					};
					switch (_0xaddfbd[0] & 31) {
						case 5:
							_0x3f5540.nalUnitType = 'slice_layer_without_partitioning_rbsp_idr';
							break;
						case 6:
							_0x3f5540.nalUnitType = 'sei_rbsp', _0x3f5540.escapedRBSP = _0x3c29e6(_0xaddfbd.subarray(1));
							break;
						case 7:
							_0x3f5540.nalUnitType = 'seq_parameter_set_rbsp', _0x3f5540.escapedRBSP = _0x3c29e6(_0xaddfbd.subarray(1)), _0x3f5540.config = _0x19954e(_0x3f5540.escapedRBSP);
							break;
						case 8:
							_0x3f5540.nalUnitType = 'pic_parameter_set_rbsp';
							break;
						case 9:
							_0x3f5540.nalUnitType = 'access_unit_delimiter_rbsp';
							break;
						default:
							break;
					}
					_0x2c94ae.trigger('data', _0x3f5540);
				});
				_0x5e1678.on('done', function () {
					_0x2c94ae.trigger('done');
				});
				this.flush = function () {
					_0x5e1678.flush();
				};
				_0x3a3de2 = function _0x22ac2f(_0x1ace64, _0x43c67b) {
					var _0x938bd9 = 8, _0x95eef0 = 8, _0x2073e8, _0x553c87;
					for (_0x2073e8 = 0; _0x2073e8 < _0x1ace64; _0x2073e8++) {
						if (_0x95eef0 !== 0) {
							_0x553c87 = _0x43c67b.readExpGolomb();
							_0x95eef0 = (_0x938bd9 + _0x553c87 + 256) % 256;
						}
						_0x938bd9 = _0x95eef0 === 0 ? _0x938bd9 : _0x95eef0;
					}
				};
				_0x3c29e6 = function _0x48c2d4(_0x394509) {
					var _0xa75950 = _0x394509.byteLength, _0x1de418 = [], _0x120db9 = 1, _0x174a76, _0x3f5ce3;
					while (_0x120db9 < _0xa75950 - 2) {
						_0x394509[_0x120db9] === 0 && _0x394509[_0x120db9 + 1] === 0 && _0x394509[_0x120db9 + 2] === 3 ? (_0x1de418.push(_0x120db9 + 2), _0x120db9 += 2) : _0x120db9++;
					}
					if (_0x1de418.length === 0) {
						return _0x394509;
					}
					_0x174a76 = _0xa75950 - _0x1de418.length;
					_0x3f5ce3 = new Uint8Array(_0x174a76);
					var _0xe885c3 = 0;
					for (_0x120db9 = 0; _0x120db9 < _0x174a76; _0xe885c3++, _0x120db9++) {
						if (_0xe885c3 === _0x1de418[0]) {
							_0xe885c3++;
							_0x1de418.shift();
						}
						_0x3f5ce3[_0x120db9] = _0x394509[_0xe885c3];
					}
					return _0x3f5ce3;
				};
				_0x19954e = function _0x728721(_0x354b58) {
					var _0x1fe944 = 0, _0x475129 = 0, _0x24211a = 0, _0xb00d9f = 0, _0x3d35a9 = 1, _0x5349cd, _0x5c8f2b, _0xb9f42a, _0x48b95c, _0x39f61b, _0x26662f, _0x3d0a30, _0x297331, _0x1a2554, _0x4e1ff7, _0x587831, _0x396f54, _0x19b253, _0x433b22;
					_0x5349cd = new _0x3ad767(_0x354b58);
					_0x5c8f2b = _0x5349cd.readUnsignedByte();
					_0x48b95c = _0x5349cd.readUnsignedByte();
					_0xb9f42a = _0x5349cd.readUnsignedByte();
					_0x5349cd.skipUnsignedExpGolomb();
					if (_0x3be86f[_0x5c8f2b]) {
						_0x39f61b = _0x5349cd.readUnsignedExpGolomb();
						_0x39f61b === 3 && _0x5349cd.skipBits(1);
						_0x5349cd.skipUnsignedExpGolomb();
						_0x5349cd.skipUnsignedExpGolomb();
						_0x5349cd.skipBits(1);
						if (_0x5349cd.readBoolean()) {
							_0x587831 = _0x39f61b !== 3 ? 8 : 12;
							for (_0x433b22 = 0; _0x433b22 < _0x587831; _0x433b22++) {
								_0x5349cd.readBoolean() && (_0x433b22 < 6 ? _0x3a3de2(16, _0x5349cd) : _0x3a3de2(64, _0x5349cd));
							}
						}
					}
					_0x5349cd.skipUnsignedExpGolomb();
					_0x26662f = _0x5349cd.readUnsignedExpGolomb();
					if (_0x26662f === 0) {
						_0x5349cd.readUnsignedExpGolomb();
					} else {
						if (_0x26662f === 1) {
							_0x5349cd.skipBits(1);
							_0x5349cd.skipExpGolomb();
							_0x5349cd.skipExpGolomb();
							_0x3d0a30 = _0x5349cd.readUnsignedExpGolomb();
							for (_0x433b22 = 0; _0x433b22 < _0x3d0a30; _0x433b22++) {
								_0x5349cd.skipExpGolomb();
							}
						}
					}
					_0x5349cd.skipUnsignedExpGolomb();
					_0x5349cd.skipBits(1);
					_0x297331 = _0x5349cd.readUnsignedExpGolomb();
					_0x1a2554 = _0x5349cd.readUnsignedExpGolomb();
					_0x4e1ff7 = _0x5349cd.readBits(1);
					_0x4e1ff7 === 0 && _0x5349cd.skipBits(1);
					_0x5349cd.skipBits(1);
					_0x5349cd.readBoolean() && (_0x1fe944 = _0x5349cd.readUnsignedExpGolomb(), _0x475129 = _0x5349cd.readUnsignedExpGolomb(), _0x24211a = _0x5349cd.readUnsignedExpGolomb(), _0xb00d9f = _0x5349cd.readUnsignedExpGolomb());
					if (_0x5349cd.readBoolean()) {
						if (_0x5349cd.readBoolean()) {
							_0x19b253 = _0x5349cd.readUnsignedByte();
							switch (_0x19b253) {
								case 1:
									_0x396f54 = [
										1,
										1
									];
									break;
								case 2:
									_0x396f54 = [
										12,
										11
									];
									break;
								case 3:
									_0x396f54 = [
										10,
										11
									];
									break;
								case 4:
									_0x396f54 = [
										16,
										11
									];
									break;
								case 5:
									_0x396f54 = [
										40,
										33
									];
									break;
								case 6:
									_0x396f54 = [
										24,
										11
									];
									break;
								case 7:
									_0x396f54 = [
										20,
										11
									];
									break;
								case 8:
									_0x396f54 = [
										32,
										11
									];
									break;
								case 9:
									_0x396f54 = [
										80,
										33
									];
									break;
								case 10:
									_0x396f54 = [
										18,
										11
									];
									break;
								case 11:
									_0x396f54 = [
										15,
										11
									];
									break;
								case 12:
									_0x396f54 = [
										64,
										33
									];
									break;
								case 13:
									_0x396f54 = [
										160,
										99
									];
									break;
								case 14:
									_0x396f54 = [
										4,
										3
									];
									break;
								case 15:
									_0x396f54 = [
										3,
										2
									];
									break;
								case 16:
									_0x396f54 = [
										2,
										1
									];
									break;
								case 255: {
									_0x396f54 = [
										_0x5349cd.readUnsignedByte() << 8 | _0x5349cd.readUnsignedByte(),
										_0x5349cd.readUnsignedByte() << 8 | _0x5349cd.readUnsignedByte()
									];
									break;
								}
							}
							_0x396f54 && (_0x3d35a9 = _0x396f54[0] / _0x396f54[1]);
						}
					}
					return {
						'profileIdc': _0x5c8f2b,
						'levelIdc': _0xb9f42a,
						'profileCompatibility': _0x48b95c,
						'width': Math.ceil(((_0x297331 + 1) * 16 - _0x1fe944 * 2 - _0x475129 * 2) * _0x3d35a9),
						'height': (2 - _0x4e1ff7) * (_0x1a2554 + 1) * 16 - _0x24211a * 2 - _0xb00d9f * 2
					};
				};
			};
			_0x334834.prototype = new _0x29ded3();
			var _0x2ebe71 = {
				'H264Stream': _0x334834,
				'NalByteStream': _0x284fe9
			}, _0x4695e1;
			_0x4695e1 = function _0x2ee747() {
				var _0x4a3812 = new Uint8Array(), _0x356701 = 0;
				_0x4695e1.prototype.init.call(this);
				this.setTimestamp = function (_0x261ada) {
					_0x356701 = _0x261ada;
				};
				this.parseId3TagSize = function (_0x3c9d77, _0x19586b) {
					var _0x3a98a9 = _0x3c9d77[_0x19586b + 6] << 21 | _0x3c9d77[_0x19586b + 7] << 14 | _0x3c9d77[_0x19586b + 8] << 7 | _0x3c9d77[_0x19586b + 9], _0x2b93c0 = _0x3c9d77[_0x19586b + 5], _0x2f42c0 = (_0x2b93c0 & 16) >> 4;
					if (_0x2f42c0) {
						return _0x3a98a9 + 20;
					}
					return _0x3a98a9 + 10;
				};
				this.parseAdtsSize = function (_0x1347cd, _0x278593) {
					var _0x3a9d04 = (_0x1347cd[_0x278593 + 5] & 224) >> 5, _0x10c813 = _0x1347cd[_0x278593 + 4] << 3, _0x1db2f6 = _0x1347cd[_0x278593 + 3] & 3 << 11;
					return _0x1db2f6 | _0x10c813 | _0x3a9d04;
				};
				this.push = function (_0x5b479e) {
					var _0x5cee17 = 0, _0x2e7c2e = 0, _0x506538, _0x490136, _0x1caf1c, _0x2adb91;
					_0x4a3812.length ? (_0x2adb91 = _0x4a3812.length, _0x4a3812 = new Uint8Array(_0x5b479e.byteLength + _0x2adb91), _0x4a3812.set(_0x4a3812.subarray(0, _0x2adb91)), _0x4a3812.set(_0x5b479e, _0x2adb91)) : _0x4a3812 = _0x5b479e;
					while (_0x4a3812.length - _0x2e7c2e >= 3) {
						if (_0x4a3812[_0x2e7c2e] === 'I'.charCodeAt(0) && _0x4a3812[_0x2e7c2e + 1] === 'D'.charCodeAt(0) && _0x4a3812[_0x2e7c2e + 2] === '3'.charCodeAt(0)) {
							if (_0x4a3812.length - _0x2e7c2e < 10) {
								break;
							}
							_0x5cee17 = this.parseId3TagSize(_0x4a3812, _0x2e7c2e);
							if (_0x5cee17 > _0x4a3812.length) {
								break;
							}
							_0x490136 = {
								'type': 'timed-metadata',
								'data': _0x4a3812.subarray(_0x2e7c2e, _0x2e7c2e + _0x5cee17)
							};
							this.trigger('data', _0x490136);
							_0x2e7c2e += _0x5cee17;
							continue;
						} else {
							if (_0x4a3812[_0x2e7c2e] & true && (_0x4a3812[_0x2e7c2e + 1] & 240) === 240) {
								if (_0x4a3812.length - _0x2e7c2e < 7) {
									break;
								}
								_0x5cee17 = this.parseAdtsSize(_0x4a3812, _0x2e7c2e);
								if (_0x5cee17 > _0x4a3812.length) {
									break;
								}
								_0x1caf1c = {
									'type': 'audio',
									'data': _0x4a3812.subarray(_0x2e7c2e, _0x2e7c2e + _0x5cee17),
									'pts': _0x356701,
									'dts': _0x356701
								};
								this.trigger('data', _0x1caf1c);
								_0x2e7c2e += _0x5cee17;
								continue;
							}
						}
						_0x2e7c2e++;
					}
					_0x506538 = _0x4a3812.length - _0x2e7c2e;
					_0x506538 > 0 ? _0x4a3812 = _0x4a3812.subarray(_0x2e7c2e) : _0x4a3812 = new Uint8Array();
				};
			};
			_0x4695e1.prototype = new _0x29ded3();
			var _0x2f8b3b = _0x4695e1, _0x15f3d6 = [
				33,
				16,
				5,
				32,
				164,
				27
			], _0x27cf20 = [
				33,
				65,
				108,
				84,
				1,
				2,
				4,
				8,
				168,
				2,
				4,
				8,
				17,
				191,
				252
			], _0xa2c71b = function _0x1cb895(_0x12f12c) {
				var _0x11370f = [];
				while (_0x12f12c--) {
					_0x11370f.push(0);
				}
				return _0x11370f;
			}, _0x1572a2 = function _0x17dfc7(_0x14fc04) {
				return Object.keys(_0x14fc04).reduce(function (_0x308cd5, _0x4c85af) {
					return _0x308cd5[_0x4c85af] = new Uint8Array(_0x14fc04[_0x4c85af].reduce(function (_0x3e1084, _0xe4d793) {
						return _0x3e1084.concat(_0xe4d793);
					}, [])), _0x308cd5;
				}, {});
			}, _0x5ce099 = {
				96000: [
					_0x15f3d6,
					[
						227,
						64
					],
					_0xa2c71b(154),
					[56]
				],
				88200: [
					_0x15f3d6,
					[231],
					_0xa2c71b(170),
					[56]
				],
				64000: [
					_0x15f3d6,
					[
						248,
						192
					],
					_0xa2c71b(240),
					[56]
				],
				48000: [
					_0x15f3d6,
					[
						255,
						192
					],
					_0xa2c71b(268),
					[
						55,
						148,
						128
					],
					_0xa2c71b(54),
					[112]
				],
				44100: [
					_0x15f3d6,
					[
						255,
						192
					],
					_0xa2c71b(268),
					[
						55,
						163,
						128
					],
					_0xa2c71b(84),
					[112]
				],
				32000: [
					_0x15f3d6,
					[
						255,
						192
					],
					_0xa2c71b(268),
					[
						55,
						234
					],
					_0xa2c71b(226),
					[112]
				],
				24000: [
					_0x15f3d6,
					[
						255,
						192
					],
					_0xa2c71b(268),
					[
						55,
						255,
						128
					],
					_0xa2c71b(268),
					[
						111,
						112
					],
					_0xa2c71b(126),
					[224]
				],
				16000: [
					_0x15f3d6,
					[
						255,
						192
					],
					_0xa2c71b(268),
					[
						55,
						255,
						128
					],
					_0xa2c71b(268),
					[
						111,
						255
					],
					_0xa2c71b(269),
					[
						223,
						108
					],
					_0xa2c71b(195),
					[
						1,
						192
					]
				],
				12000: [
					_0x27cf20,
					_0xa2c71b(268),
					[
						3,
						127,
						248
					],
					_0xa2c71b(268),
					[
						6,
						255,
						240
					],
					_0xa2c71b(268),
					[
						13,
						255,
						224
					],
					_0xa2c71b(268),
					[
						27,
						253,
						128
					],
					_0xa2c71b(259),
					[56]
				],
				11025: [
					_0x27cf20,
					_0xa2c71b(268),
					[
						3,
						127,
						248
					],
					_0xa2c71b(268),
					[
						6,
						255,
						240
					],
					_0xa2c71b(268),
					[
						13,
						255,
						224
					],
					_0xa2c71b(268),
					[
						27,
						255,
						192
					],
					_0xa2c71b(268),
					[
						55,
						175,
						128
					],
					_0xa2c71b(108),
					[112]
				],
				8000: [
					_0x27cf20,
					_0xa2c71b(268),
					[
						3,
						121,
						16
					],
					_0xa2c71b(47),
					[7]
				]
			}, _0x245827 = _0x1572a2(_0x5ce099), _0x439f68, _0x320562, _0x479072, _0x2af37a, _0x40af39, _0xb35959;
			_0x439f68 = function _0x782788(_0x6f8270) {
				return _0x6f8270 * 90000;
			};
			_0x320562 = function _0x6b1e53(_0x29b028, _0x4ff218) {
				return _0x29b028 * _0x4ff218;
			};
			_0x479072 = function _0xf8f9df(_0x4d96eb) {
				return _0x4d96eb / 90000;
			};
			_0x2af37a = function _0x567244(_0x1e304b, _0x449bc4) {
				return _0x1e304b / _0x449bc4;
			};
			_0x40af39 = function _0x5af33c(_0x6ab54b, _0x34dd63) {
				return _0x439f68(_0x2af37a(_0x6ab54b, _0x34dd63));
			};
			_0xb35959 = function _0x90ba7d(_0x4faaa3, _0x429c60) {
				return _0x320562(_0x479072(_0x4faaa3), _0x429c60);
			};
			var _0x4f1104 = {
				'secondsToVideoTs': _0x439f68,
				'secondsToAudioTs': _0x320562,
				'videoTsToSeconds': _0x479072,
				'audioTsToSeconds': _0x2af37a,
				'audioTsToVideoTs': _0x40af39,
				'videoTsToAudioTs': _0xb35959
			}, _0x20333c = _0x2ebe71.H264Stream, _0x25d3fb = [
				'audioobjecttype',
				'channelcount',
				'samplerate',
				'samplingfrequencyindex',
				'samplesize'
			], _0xba121b = [
				'width',
				'height',
				'profileIdc',
				'levelIdc',
				'profileCompatibility'
			], _0x221426, _0x3fbf63, _0x484d87, _0x91a39b, _0x302023, _0x21157d, _0x2655bf;
			_0x302023 = function _0x6d34fd(_0x3a5442) {
				if (_0x3a5442[0] === 'I'.charCodeAt(0) && _0x3a5442[1] === 'D'.charCodeAt(0) && _0x3a5442[2] === '3'.charCodeAt(0)) {
					return true;
				}
				return false;
			};
			_0x21157d = function _0x55bfb2(_0x3ef918, _0x183d3a) {
				var _0x4b4d5b;
				if (_0x3ef918.length !== _0x183d3a.length) {
					return false;
				}
				for (_0x4b4d5b = 0; _0x4b4d5b < _0x3ef918.length; _0x4b4d5b++) {
					if (_0x3ef918[_0x4b4d5b] !== _0x183d3a[_0x4b4d5b]) {
						return false;
					}
				}
				return true;
			};
			_0x2655bf = function _0x6cf943(_0x5cdb5d) {
				var _0x54341b, _0x15550a, _0x3aa210 = 0;
				for (_0x54341b = 0; _0x54341b < _0x5cdb5d.length; _0x54341b++) {
					_0x15550a = _0x5cdb5d[_0x54341b];
					_0x3aa210 += _0x15550a.data.byteLength;
				}
				return _0x3aa210;
			};
			_0x3fbf63 = function _0xdaf2e4(_0x19ee2c, _0x24898d) {
				var _0x3d2cc4 = [], _0x3f080f = 0, _0x43cfa5 = 0, _0xd3fbc8 = 0, _0x16bcb9 = Infinity;
				_0x24898d = _0x24898d || {};
				_0x3fbf63.prototype.init.call(this);
				this.push = function (_0x32513e) {
					_0x10705e.collectDtsInfo(_0x19ee2c, _0x32513e);
					_0x19ee2c && _0x25d3fb.forEach(function (_0x553b1c) {
						_0x19ee2c[_0x553b1c] = _0x32513e[_0x553b1c];
					});
					_0x3d2cc4.push(_0x32513e);
				};
				this.setEarliestDts = function (_0x323242) {
					_0x43cfa5 = _0x323242 - _0x19ee2c.timelineStartInfo.baseMediaDecodeTime;
				};
				this.setVideoBaseMediaDecodeTime = function (_0x57b24e) {
					_0x16bcb9 = _0x57b24e;
				};
				this.setAudioAppendStart = function (_0x221301) {
					_0xd3fbc8 = _0x221301;
				};
				this.flush = function () {
					var _0x14e49d, _0x5e58d2, _0x4fece6, _0x4244b0;
					if (_0x3d2cc4.length === 0) {
						this.trigger('done', 'AudioSegmentStream');
						return;
					}
					_0x14e49d = this.trimAdtsFramesByEarliestDts_(_0x3d2cc4);
					_0x19ee2c.baseMediaDecodeTime = _0x10705e.calculateTrackBaseMediaDecodeTime(_0x19ee2c, _0x24898d.keepOriginalTimestamps);
					this.prefixWithSilence_(_0x19ee2c, _0x14e49d);
					_0x19ee2c.samples = this.generateSampleTable_(_0x14e49d);
					_0x4fece6 = _0x17115f.mdat(this.concatenateFrameData_(_0x14e49d));
					_0x3d2cc4 = [];
					_0x5e58d2 = _0x17115f.moof(_0x3f080f, [_0x19ee2c]);
					_0x4244b0 = new Uint8Array(_0x5e58d2.byteLength + _0x4fece6.byteLength);
					_0x3f080f++;
					_0x4244b0.set(_0x5e58d2);
					_0x4244b0.set(_0x4fece6, _0x5e58d2.byteLength);
					_0x10705e.clearDtsInfo(_0x19ee2c);
					this.trigger('data', {
						'track': _0x19ee2c,
						'boxes': _0x4244b0
					});
					this.trigger('done', 'AudioSegmentStream');
				};
				this.prefixWithSilence_ = function (_0x78585a, _0x2a05e9) {
					var _0x73d6b2, _0x2a3f61 = 0, _0x3052b3 = 0, _0x3b8195 = 0, _0x14b13a = 0, _0x451021, _0xacebb;
					if (!_0x2a05e9.length) {
						return;
					}
					_0x73d6b2 = _0x4f1104.audioTsToVideoTs(_0x78585a.baseMediaDecodeTime, _0x78585a.samplerate);
					_0x2a3f61 = Math.ceil(90000 / (_0x78585a.samplerate / 1024));
					_0xd3fbc8 && _0x16bcb9 && (_0x3052b3 = _0x73d6b2 - Math.max(_0xd3fbc8, _0x16bcb9), _0x3b8195 = Math.floor(_0x3052b3 / _0x2a3f61), _0x14b13a = _0x3b8195 * _0x2a3f61);
					if (_0x3b8195 < 1 || _0x14b13a > 45000) {
						return;
					}
					_0x451021 = _0x245827[_0x78585a.samplerate];
					!_0x451021 && (_0x451021 = _0x2a05e9[0].data);
					for (_0xacebb = 0; _0xacebb < _0x3b8195; _0xacebb++) {
						_0x2a05e9.splice(_0xacebb, 0, { 'data': _0x451021 });
					}
					_0x78585a.baseMediaDecodeTime -= Math.floor(_0x4f1104.videoTsToAudioTs(_0x14b13a, _0x78585a.samplerate));
				};
				this.trimAdtsFramesByEarliestDts_ = function (_0x3c8aaa) {
					if (_0x19ee2c.minSegmentDts >= _0x43cfa5) {
						return _0x3c8aaa;
					}
					return _0x19ee2c.minSegmentDts = Infinity, _0x3c8aaa.filter(function (_0xc09218) {
						if (_0xc09218.dts >= _0x43cfa5) {
							return _0x19ee2c.minSegmentDts = Math.min(_0x19ee2c.minSegmentDts, _0xc09218.dts), _0x19ee2c.minSegmentPts = _0x19ee2c.minSegmentDts, true;
						}
						return false;
					});
				};
				this.generateSampleTable_ = function (_0x1c3396) {
					var _0x20365d, _0x2c0e07, _0x4d73c6 = [];
					for (_0x20365d = 0; _0x20365d < _0x1c3396.length; _0x20365d++) {
						_0x2c0e07 = _0x1c3396[_0x20365d];
						_0x4d73c6.push({
							'size': _0x2c0e07.data.byteLength,
							'duration': 1024
						});
					}
					return _0x4d73c6;
				};
				this.concatenateFrameData_ = function (_0x53917d) {
					var _0x52381e, _0x51de4c, _0x56dcdd = 0, _0x513ad0 = new Uint8Array(_0x2655bf(_0x53917d));
					for (_0x52381e = 0; _0x52381e < _0x53917d.length; _0x52381e++) {
						_0x51de4c = _0x53917d[_0x52381e];
						_0x513ad0.set(_0x51de4c.data, _0x56dcdd);
						_0x56dcdd += _0x51de4c.data.byteLength;
					}
					return _0x513ad0;
				};
			};
			_0x3fbf63.prototype = new _0x29ded3();
			_0x221426 = function _0x25b998(_0x5cc493, _0x13c16c) {
				var _0x10b0d5 = 0, _0x2a5185 = [], _0x10c7ee = [], _0x57ff83, _0x143d53;
				_0x13c16c = _0x13c16c || {};
				_0x221426.prototype.init.call(this);
				delete _0x5cc493.minPTS;
				this.gopCache_ = [];
				this.push = function (_0x23e059) {
					_0x10705e.collectDtsInfo(_0x5cc493, _0x23e059);
					_0x23e059.nalUnitType === 'seq_parameter_set_rbsp' && !_0x57ff83 && (_0x57ff83 = _0x23e059.config, _0x5cc493.sps = [_0x23e059.data], _0xba121b.forEach(function (_0x53c710) {
						_0x5cc493[_0x53c710] = _0x57ff83[_0x53c710];
					}, this));
					_0x23e059.nalUnitType === 'pic_parameter_set_rbsp' && !_0x143d53 && (_0x143d53 = _0x23e059.data, _0x5cc493.pps = [_0x23e059.data]);
					_0x2a5185.push(_0x23e059);
				};
				this.flush = function () {
					var _0x435cf4, _0xba8486, _0x187eb1, _0x33229b, _0x46fe32, _0x356386;
					while (_0x2a5185.length) {
						if (_0x2a5185[0].nalUnitType === 'access_unit_delimiter_rbsp') {
							break;
						}
						_0x2a5185.shift();
					}
					if (_0x2a5185.length === 0) {
						this.resetStream_();
						this.trigger('done', 'VideoSegmentStream');
						return;
					}
					_0x435cf4 = _0xd7eb83.groupNalsIntoFrames(_0x2a5185);
					_0x187eb1 = _0xd7eb83.groupFramesIntoGops(_0x435cf4);
					!_0x187eb1[0][0].keyFrame && (_0xba8486 = this.getGopForFusion_(_0x2a5185[0], _0x5cc493), _0xba8486 ? (_0x187eb1.unshift(_0xba8486), _0x187eb1.byteLength += _0xba8486.byteLength, _0x187eb1.nalCount += _0xba8486.nalCount, _0x187eb1.pts = _0xba8486.pts, _0x187eb1.dts = _0xba8486.dts, _0x187eb1.duration += _0xba8486.duration) : _0x187eb1 = _0xd7eb83.extendFirstKeyFrame(_0x187eb1));
					if (_0x10c7ee.length) {
						var _0x591659;
						_0x13c16c.alignGopsAtEnd ? _0x591659 = this.alignGopsAtEnd_(_0x187eb1) : _0x591659 = this.alignGopsAtStart_(_0x187eb1);
						if (!_0x591659) {
							this.gopCache_.unshift({
								'gop': _0x187eb1.pop(),
								'pps': _0x5cc493.pps,
								'sps': _0x5cc493.sps
							});
							this.gopCache_.length = Math.min(6, this.gopCache_.length);
							_0x2a5185 = [];
							this.resetStream_();
							this.trigger('done', 'VideoSegmentStream');
							return;
						}
						_0x10705e.clearDtsInfo(_0x5cc493);
						_0x187eb1 = _0x591659;
					}
					_0x10705e.collectDtsInfo(_0x5cc493, _0x187eb1);
					_0x5cc493.samples = _0xd7eb83.generateSampleTable(_0x187eb1);
					_0x46fe32 = _0x17115f.mdat(_0xd7eb83.concatenateNalData(_0x187eb1));
					_0x5cc493.baseMediaDecodeTime = _0x10705e.calculateTrackBaseMediaDecodeTime(_0x5cc493, _0x13c16c.keepOriginalTimestamps);
					this.trigger('processedGopsInfo', _0x187eb1.map(function (_0x5745dd) {
						return {
							'pts': _0x5745dd.pts,
							'dts': _0x5745dd.dts,
							'byteLength': _0x5745dd.byteLength
						};
					}));
					this.gopCache_.unshift({
						'gop': _0x187eb1.pop(),
						'pps': _0x5cc493.pps,
						'sps': _0x5cc493.sps
					});
					this.gopCache_.length = Math.min(6, this.gopCache_.length);
					_0x2a5185 = [];
					this.trigger('baseMediaDecodeTime', _0x5cc493.baseMediaDecodeTime);
					this.trigger('timelineStartInfo', _0x5cc493.timelineStartInfo);
					_0x33229b = _0x17115f.moof(_0x10b0d5, [_0x5cc493]);
					_0x356386 = new Uint8Array(_0x33229b.byteLength + _0x46fe32.byteLength);
					_0x10b0d5++;
					_0x356386.set(_0x33229b);
					_0x356386.set(_0x46fe32, _0x33229b.byteLength);
					this.trigger('data', {
						'track': _0x5cc493,
						'boxes': _0x356386
					});
					this.resetStream_();
					this.trigger('done', 'VideoSegmentStream');
				};
				this.resetStream_ = function () {
					_0x10705e.clearDtsInfo(_0x5cc493);
					_0x57ff83 = undefined;
					_0x143d53 = undefined;
				};
				this.getGopForFusion_ = function (_0x200d7c) {
					var _0x5de028 = Infinity, _0x243474, _0xca9db3, _0x4090d8, _0x366ba0, _0x5ba177;
					for (_0x5ba177 = 0; _0x5ba177 < this.gopCache_.length; _0x5ba177++) {
						_0x366ba0 = this.gopCache_[_0x5ba177];
						_0x4090d8 = _0x366ba0.gop;
						if (!(_0x5cc493.pps && _0x21157d(_0x5cc493.pps[0], _0x366ba0.pps[0])) || !(_0x5cc493.sps && _0x21157d(_0x5cc493.sps[0], _0x366ba0.sps[0]))) {
							continue;
						}
						if (_0x4090d8.dts < _0x5cc493.timelineStartInfo.dts) {
							continue;
						}
						_0x243474 = _0x200d7c.dts - _0x4090d8.dts - _0x4090d8.duration;
						_0x243474 >= -10000 && _0x243474 <= 45000 && ((!_0xca9db3 || _0x5de028 > _0x243474) && (_0xca9db3 = _0x366ba0, _0x5de028 = _0x243474));
					}
					if (_0xca9db3) {
						return _0xca9db3.gop;
					}
					return null;
				};
				this.alignGopsAtStart_ = function (_0x6f3869) {
					var _0x368ae3, _0x55cd37, _0x275c0f, _0x5a929e, _0x592b73, _0xfef41c, _0x21a155, _0x430050;
					_0x592b73 = _0x6f3869.byteLength;
					_0xfef41c = _0x6f3869.nalCount;
					_0x21a155 = _0x6f3869.duration;
					_0x368ae3 = _0x55cd37 = 0;
					while (_0x368ae3 < _0x10c7ee.length && _0x55cd37 < _0x6f3869.length) {
						_0x275c0f = _0x10c7ee[_0x368ae3];
						_0x5a929e = _0x6f3869[_0x55cd37];
						if (_0x275c0f.pts === _0x5a929e.pts) {
							break;
						}
						if (_0x5a929e.pts > _0x275c0f.pts) {
							_0x368ae3++;
							continue;
						}
						_0x55cd37++;
						_0x592b73 -= _0x5a929e.byteLength;
						_0xfef41c -= _0x5a929e.nalCount;
						_0x21a155 -= _0x5a929e.duration;
					}
					if (_0x55cd37 === 0) {
						return _0x6f3869;
					}
					if (_0x55cd37 === _0x6f3869.length) {
						return null;
					}
					return _0x430050 = _0x6f3869.slice(_0x55cd37), _0x430050.byteLength = _0x592b73, _0x430050.duration = _0x21a155, _0x430050.nalCount = _0xfef41c, _0x430050.pts = _0x430050[0].pts, _0x430050.dts = _0x430050[0].dts, _0x430050;
				};
				this.alignGopsAtEnd_ = function (_0xc89206) {
					var _0x34a922, _0x52f27b, _0x42f627, _0x5e59d3, _0xeb4c26, _0x3e7b9b;
					_0x34a922 = _0x10c7ee.length - 1;
					_0x52f27b = _0xc89206.length - 1;
					_0xeb4c26 = null;
					_0x3e7b9b = false;
					while (_0x34a922 >= 0 && _0x52f27b >= 0) {
						_0x42f627 = _0x10c7ee[_0x34a922];
						_0x5e59d3 = _0xc89206[_0x52f27b];
						if (_0x42f627.pts === _0x5e59d3.pts) {
							_0x3e7b9b = true;
							break;
						}
						if (_0x42f627.pts > _0x5e59d3.pts) {
							_0x34a922--;
							continue;
						}
						_0x34a922 === _0x10c7ee.length - 1 && (_0xeb4c26 = _0x52f27b);
						_0x52f27b--;
					}
					if (!_0x3e7b9b && _0xeb4c26 === null) {
						return null;
					}
					var _0x3921bd;
					_0x3e7b9b ? _0x3921bd = _0x52f27b : _0x3921bd = _0xeb4c26;
					if (_0x3921bd === 0) {
						return _0xc89206;
					}
					var _0x366966 = _0xc89206.slice(_0x3921bd), _0x2c4fd1 = _0x366966.reduce(function (_0x59d39c, _0x5d006e) {
						return _0x59d39c.byteLength += _0x5d006e.byteLength, _0x59d39c.duration += _0x5d006e.duration, _0x59d39c.nalCount += _0x5d006e.nalCount, _0x59d39c;
					}, {
						'byteLength': 0,
						'duration': 0,
						'nalCount': 0
					});
					return _0x366966.byteLength = _0x2c4fd1.byteLength, _0x366966.duration = _0x2c4fd1.duration, _0x366966.nalCount = _0x2c4fd1.nalCount, _0x366966.pts = _0x366966[0].pts, _0x366966.dts = _0x366966[0].dts, _0x366966;
				};
				this.alignGopsWith = function (_0x1cbba8) {
					_0x10c7ee = _0x1cbba8;
				};
			};
			_0x221426.prototype = new _0x29ded3();
			_0x91a39b = function _0x329b81(_0x13c498, _0x398469) {
				this.numberOfTracks = 0;
				this.metadataStream = _0x398469;
				typeof _0x13c498.remux !== 'undefined' ? this.remuxTracks = !!_0x13c498.remux : this.remuxTracks = true;
				this.pendingTracks = [];
				this.videoTrack = null;
				this.pendingBoxes = [];
				this.pendingCaptions = [];
				this.pendingMetadata = [];
				this.pendingBytes = 0;
				this.emittedTracks = 0;
				_0x91a39b.prototype.init.call(this);
				this.push = function (_0x34b214) {
					if (_0x34b214.text) {
						return this.pendingCaptions.push(_0x34b214);
					}
					if (_0x34b214.frames) {
						return this.pendingMetadata.push(_0x34b214);
					}
					this.pendingTracks.push(_0x34b214.track);
					this.pendingBoxes.push(_0x34b214.boxes);
					this.pendingBytes += _0x34b214.boxes.byteLength;
					_0x34b214.track.type === 'video' && (this.videoTrack = _0x34b214.track);
					_0x34b214.track.type === 'audio' && (this.audioTrack = _0x34b214.track);
				};
			};
			_0x91a39b.prototype = new _0x29ded3();
			_0x91a39b.prototype.flush = function (_0x1d9267) {
				var _0x2d2ff5 = 0, _0x57475c = {
					'captions': [],
					'captionStreams': {},
					'metadata': [],
					'info': {}
				}, _0x3ca6ca, _0x38fd81, _0x531d0d, _0x48951b = 0, _0x57d991;
				if (this.pendingTracks.length < this.numberOfTracks) {
					if (_0x1d9267 !== 'VideoSegmentStream' && _0x1d9267 !== 'AudioSegmentStream') {
						return;
					} else {
						if (this.remuxTracks) {
							return;
						} else {
							if (this.pendingTracks.length === 0) {
								this.emittedTracks++;
								if (this.emittedTracks >= this.numberOfTracks) {
									this.trigger('done');
									this.emittedTracks = 0;
								}
								return;
							}
						}
					}
				}
				if (this.videoTrack) {
					_0x48951b = this.videoTrack.timelineStartInfo.pts;
					_0xba121b.forEach(function (_0x53920f) {
						_0x57475c.info[_0x53920f] = this.videoTrack[_0x53920f];
					}, this);
				} else {
					this.audioTrack && (_0x48951b = this.audioTrack.timelineStartInfo.pts, _0x25d3fb.forEach(function (_0x3289ae) {
						_0x57475c.info[_0x3289ae] = this.audioTrack[_0x3289ae];
					}, this));
				}
				this.pendingTracks.length === 1 ? _0x57475c.type = this.pendingTracks[0].type : _0x57475c.type = 'combined';
				this.emittedTracks += this.pendingTracks.length;
				_0x531d0d = _0x17115f.initSegment(this.pendingTracks);
				_0x57475c.initSegment = new Uint8Array(_0x531d0d.byteLength);
				_0x57475c.initSegment.set(_0x531d0d);
				_0x57475c.data = new Uint8Array(this.pendingBytes);
				for (_0x57d991 = 0; _0x57d991 < this.pendingBoxes.length; _0x57d991++) {
					_0x57475c.data.set(this.pendingBoxes[_0x57d991], _0x2d2ff5);
					_0x2d2ff5 += this.pendingBoxes[_0x57d991].byteLength;
				}
				for (_0x57d991 = 0; _0x57d991 < this.pendingCaptions.length; _0x57d991++) {
					_0x3ca6ca = this.pendingCaptions[_0x57d991];
					_0x3ca6ca.startTime = _0x3ca6ca.startPts - _0x48951b;
					_0x3ca6ca.startTime /= 90000;
					_0x3ca6ca.endTime = _0x3ca6ca.endPts - _0x48951b;
					_0x3ca6ca.endTime /= 90000;
					_0x57475c.captionStreams[_0x3ca6ca.stream] = true;
					_0x57475c.captions.push(_0x3ca6ca);
				}
				for (_0x57d991 = 0; _0x57d991 < this.pendingMetadata.length; _0x57d991++) {
					_0x38fd81 = this.pendingMetadata[_0x57d991];
					_0x38fd81.cueTime = _0x38fd81.pts - _0x48951b;
					_0x38fd81.cueTime /= 90000;
					_0x57475c.metadata.push(_0x38fd81);
				}
				_0x57475c.metadata.dispatchType = this.metadataStream.dispatchType;
				this.pendingTracks.length = 0;
				this.videoTrack = null;
				this.pendingBoxes.length = 0;
				this.pendingCaptions.length = 0;
				this.pendingBytes = 0;
				this.pendingMetadata.length = 0;
				this.trigger('data', _0x57475c);
				if (this.emittedTracks >= this.numberOfTracks) {
					this.trigger('done');
					this.emittedTracks = 0;
				}
			};
			_0x484d87 = function _0x5bcdb3(_0x34c5dc) {
				var _0x858cb0 = this, _0xd0299 = true, _0x366649, _0x42f162;
				_0x484d87.prototype.init.call(this);
				_0x34c5dc = _0x34c5dc || {};
				this.baseMediaDecodeTime = _0x34c5dc.baseMediaDecodeTime || 0;
				this.transmuxPipeline_ = {};
				this.setupAacPipeline = function () {
					var _0x3afabe = {
						type: 'aac',
						metadataStream: new _0x97ace4.MetadataStream(),
						aacStream: new _0x2f8b3b(),
						audioTimestampRolloverStream: new _0x97ace4.TimestampRolloverStream('audio'),
						timedMetadataTimestampRolloverStream: new _0x97ace4.TimestampRolloverStream('timed-metadata'),
						adtsStream: new _0x16e5d6(),
						coalesceStream: new _0x91a39b(_0x34c5dc, _0x3afabe.metadataStream),
						headOfPipeline: _0x3afabe.aacStream
					};
					this.transmuxPipeline_ = _0x3afabe;
					_0x3afabe.aacStream.pipe(_0x3afabe.audioTimestampRolloverStream).pipe(_0x3afabe.adtsStream);
					_0x3afabe.aacStream.pipe(_0x3afabe.timedMetadataTimestampRolloverStream).pipe(_0x3afabe.metadataStream).pipe(_0x3afabe.coalesceStream);
					_0x3afabe.metadataStream.on('timestamp', function (_0x5849d5) {
						_0x3afabe.aacStream.setTimestamp(_0x5849d5.timeStamp);
					});
					_0x3afabe.aacStream.on('data', function (_0x120f7c) {
						_0x120f7c.type === 'timed-metadata' && !_0x3afabe.audioSegmentStream && (_0x42f162 = _0x42f162 || {
							'timelineStartInfo': { 'baseMediaDecodeTime': _0x858cb0.baseMediaDecodeTime },
							'codec': 'adts',
							'type': 'audio'
						}, _0x3afabe.coalesceStream.numberOfTracks++, _0x3afabe.audioSegmentStream = new _0x3fbf63(_0x42f162, _0x34c5dc), _0x3afabe.adtsStream.pipe(_0x3afabe.audioSegmentStream).pipe(_0x3afabe.coalesceStream));
					});
					_0x3afabe.coalesceStream.on('data', this.trigger.bind(this, 'data'));
					_0x3afabe.coalesceStream.on('done', this.trigger.bind(this, 'done'));
				};
				this.setupTsPipeline = function () {
					var _0x38f5ca = {
						type: 'ts',
						metadataStream: new _0x97ace4.MetadataStream(),
						packetStream: new _0x97ace4.TransportPacketStream(),
						parseStream: new _0x97ace4.TransportParseStream(),
						elementaryStream: new _0x97ace4.ElementaryStream(),
						videoTimestampRolloverStream: new _0x97ace4.TimestampRolloverStream('video'),
						audioTimestampRolloverStream: new _0x97ace4.TimestampRolloverStream('audio'),
						timedMetadataTimestampRolloverStream: new _0x97ace4.TimestampRolloverStream('timed-metadata'),
						adtsStream: new _0x16e5d6(),
						h264Stream: new _0x20333c(),
						captionStream: new _0x97ace4.CaptionStream(),
						coalesceStream: new _0x91a39b(_0x34c5dc, _0x38f5ca.metadataStream),
						headOfPipeline: _0x38f5ca.packetStream
					};
					this.transmuxPipeline_ = _0x38f5ca;
					_0x38f5ca.packetStream.pipe(_0x38f5ca.parseStream).pipe(_0x38f5ca.elementaryStream);
					_0x38f5ca.elementaryStream.pipe(_0x38f5ca.videoTimestampRolloverStream).pipe(_0x38f5ca.h264Stream);
					_0x38f5ca.elementaryStream.pipe(_0x38f5ca.audioTimestampRolloverStream).pipe(_0x38f5ca.adtsStream);
					_0x38f5ca.elementaryStream.pipe(_0x38f5ca.timedMetadataTimestampRolloverStream).pipe(_0x38f5ca.metadataStream).pipe(_0x38f5ca.coalesceStream);
					_0x38f5ca.h264Stream.pipe(_0x38f5ca.captionStream).pipe(_0x38f5ca.coalesceStream);
					_0x38f5ca.elementaryStream.on('data', function (_0x52c2cd) {
						var _0x29354f;
						if (_0x52c2cd.type === 'metadata') {
							_0x29354f = _0x52c2cd.tracks.length;
							while (_0x29354f--) {
								if (!_0x366649 && _0x52c2cd.tracks[_0x29354f].type === 'video') {
									_0x366649 = _0x52c2cd.tracks[_0x29354f];
									_0x366649.timelineStartInfo.baseMediaDecodeTime = _0x858cb0.baseMediaDecodeTime;
								} else {
									!_0x42f162 && _0x52c2cd.tracks[_0x29354f].type === 'audio' && (_0x42f162 = _0x52c2cd.tracks[_0x29354f], _0x42f162.timelineStartInfo.baseMediaDecodeTime = _0x858cb0.baseMediaDecodeTime);
								}
							}
							_0x366649 && !_0x38f5ca.videoSegmentStream && (_0x38f5ca.coalesceStream.numberOfTracks++, _0x38f5ca.videoSegmentStream = new _0x221426(_0x366649, _0x34c5dc), _0x38f5ca.videoSegmentStream.on('timelineStartInfo', function (_0x125cb2) {
								_0x42f162 && (_0x42f162.timelineStartInfo = _0x125cb2, _0x38f5ca.audioSegmentStream.setEarliestDts(_0x125cb2.dts));
							}), _0x38f5ca.videoSegmentStream.on('processedGopsInfo', _0x858cb0.trigger.bind(_0x858cb0, 'gopInfo')), _0x38f5ca.videoSegmentStream.on('baseMediaDecodeTime', function (_0x370f4a) {
								_0x42f162 && _0x38f5ca.audioSegmentStream.setVideoBaseMediaDecodeTime(_0x370f4a);
							}), _0x38f5ca.h264Stream.pipe(_0x38f5ca.videoSegmentStream).pipe(_0x38f5ca.coalesceStream));
							_0x42f162 && !_0x38f5ca.audioSegmentStream && (_0x38f5ca.coalesceStream.numberOfTracks++, _0x38f5ca.audioSegmentStream = new _0x3fbf63(_0x42f162, _0x34c5dc), _0x38f5ca.adtsStream.pipe(_0x38f5ca.audioSegmentStream).pipe(_0x38f5ca.coalesceStream));
						}
					});
					_0x38f5ca.coalesceStream.on('data', this.trigger.bind(this, 'data'));
					_0x38f5ca.coalesceStream.on('done', this.trigger.bind(this, 'done'));
				};
				this.setBaseMediaDecodeTime = function (_0x4a32ff) {
					var _0x515629 = this.transmuxPipeline_;
					this.baseMediaDecodeTime = _0x4a32ff;
					_0x42f162 && (_0x42f162.timelineStartInfo.dts = undefined, _0x42f162.timelineStartInfo.pts = undefined, _0x10705e.clearDtsInfo(_0x42f162), _0x42f162.timelineStartInfo.baseMediaDecodeTime = _0x4a32ff, _0x515629.audioTimestampRolloverStream && _0x515629.audioTimestampRolloverStream.discontinuity());
					_0x366649 && (_0x515629.videoSegmentStream && (_0x515629.videoSegmentStream.gopCache_ = [], _0x515629.videoTimestampRolloverStream.discontinuity()), _0x366649.timelineStartInfo.dts = undefined, _0x366649.timelineStartInfo.pts = undefined, _0x10705e.clearDtsInfo(_0x366649), _0x515629.captionStream.reset(), _0x366649.timelineStartInfo.baseMediaDecodeTime = _0x4a32ff);
					_0x515629.timedMetadataTimestampRolloverStream && _0x515629.timedMetadataTimestampRolloverStream.discontinuity();
				};
				this.setAudioAppendStart = function (_0x1e9376) {
					_0x42f162 && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(_0x1e9376);
				};
				this.alignGopsWith = function (_0x79414) {
					_0x366649 && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(_0x79414);
				};
				this.push = function (_0x540047) {
					if (_0xd0299) {
						var _0x4dd8d2 = _0x302023(_0x540047);
						if (_0x4dd8d2 && this.transmuxPipeline_.type !== 'aac') {
							this.setupAacPipeline();
						} else {
							!_0x4dd8d2 && this.transmuxPipeline_.type !== 'ts' && this.setupTsPipeline();
						}
						_0xd0299 = false;
					}
					this.transmuxPipeline_.headOfPipeline.push(_0x540047);
				};
				this.flush = function () {
					_0xd0299 = true;
					this.transmuxPipeline_.headOfPipeline.flush();
				};
				this.resetCaptions = function () {
					this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset();
				};
			};
			_0x484d87.prototype = new _0x29ded3();
			var _0x37345b = {
				'Transmuxer': _0x484d87,
				'VideoSegmentStream': _0x221426,
				'AudioSegmentStream': _0x3fbf63,
				'AUDIO_PROPERTIES': _0x25d3fb,
				'VIDEO_PROPERTIES': _0xba121b
			}, _0x42415e, _0x402474, _0x75e279 = _0x4655bf.parseType, _0x5a4b4b = function _0x1952f0(_0x28791d) {
				return new Date(_0x28791d * 1000 - 2082844800000);
			}, _0x1ef13b = function _0x1efbd3(_0x57c418) {
				return {
					'isLeading': (_0x57c418[0] & 12) >>> 2,
					'dependsOn': _0x57c418[0] & 3,
					'isDependedOn': (_0x57c418[1] & 192) >>> 6,
					'hasRedundancy': (_0x57c418[1] & 48) >>> 4,
					'paddingValue': (_0x57c418[1] & 14) >>> 1,
					'isNonSyncSample': _0x57c418[1] & 1,
					'degradationPriority': _0x57c418[2] << 8 | _0x57c418[3]
				};
			}, _0x5948e1 = function _0x1ae4ed(_0x9407b1) {
				var _0x4973fb = new DataView(_0x9407b1.buffer, _0x9407b1.byteOffset, _0x9407b1.byteLength), _0x32f74d = [], _0x2520ce, _0x1ce21f;
				for (_0x2520ce = 0; _0x2520ce + 4 < _0x9407b1.length; _0x2520ce += _0x1ce21f) {
					_0x1ce21f = _0x4973fb.getUint32(_0x2520ce);
					_0x2520ce += 4;
					if (_0x1ce21f <= 0) {
						_0x32f74d.push('<span style=\'color:red;\'>MALFORMED DATA</span>');
						continue;
					}
					switch (_0x9407b1[_0x2520ce] & 31) {
						case 1:
							_0x32f74d.push('slice_layer_without_partitioning_rbsp');
							break;
						case 5:
							_0x32f74d.push('slice_layer_without_partitioning_rbsp_idr');
							break;
						case 6:
							_0x32f74d.push('sei_rbsp');
							break;
						case 7:
							_0x32f74d.push('seq_parameter_set_rbsp');
							break;
						case 8:
							_0x32f74d.push('pic_parameter_set_rbsp');
							break;
						case 9:
							_0x32f74d.push('access_unit_delimiter_rbsp');
							break;
						default:
							_0x32f74d.push('UNKNOWN NAL - ' + _0x9407b1[_0x2520ce] & 31);
							break;
					}
				}
				return _0x32f74d;
			}, _0x1efe22 = {
				'avc1': function _0x443ba4(_0x21eba6) {
					var _0x398129 = new DataView(_0x21eba6.buffer, _0x21eba6.byteOffset, _0x21eba6.byteLength);
					return {
						'dataReferenceIndex': _0x398129.getUint16(6),
						'width': _0x398129.getUint16(24),
						'height': _0x398129.getUint16(26),
						'horizresolution': _0x398129.getUint16(28) + _0x398129.getUint16(30) / 16,
						'vertresolution': _0x398129.getUint16(32) + _0x398129.getUint16(34) / 16,
						'frameCount': _0x398129.getUint16(40),
						'depth': _0x398129.getUint16(74),
						'config': _0x42415e(_0x21eba6.subarray(78, _0x21eba6.byteLength))
					};
				},
				'avcC': function _0x164b2d(_0x425d8f) {
					var _0x3c2c0d = new DataView(_0x425d8f.buffer, _0x425d8f.byteOffset, _0x425d8f.byteLength), _0xaf7ee3 = {
						'configurationVersion': _0x425d8f[0],
						'avcProfileIndication': _0x425d8f[1],
						'profileCompatibility': _0x425d8f[2],
						'avcLevelIndication': _0x425d8f[3],
						'lengthSizeMinusOne': _0x425d8f[4] & 3,
						'sps': [],
						'pps': []
					}, _0x473c8d = _0x425d8f[5] & 31, _0x310571, _0x32a7ea, _0x1856e8, _0x2e778b;
					_0x1856e8 = 6;
					for (_0x2e778b = 0; _0x2e778b < _0x473c8d; _0x2e778b++) {
						_0x32a7ea = _0x3c2c0d.getUint16(_0x1856e8);
						_0x1856e8 += 2;
						_0xaf7ee3.sps.push(new Uint8Array(_0x425d8f.subarray(_0x1856e8, _0x1856e8 + _0x32a7ea)));
						_0x1856e8 += _0x32a7ea;
					}
					_0x310571 = _0x425d8f[_0x1856e8];
					_0x1856e8++;
					for (_0x2e778b = 0; _0x2e778b < _0x310571; _0x2e778b++) {
						_0x32a7ea = _0x3c2c0d.getUint16(_0x1856e8);
						_0x1856e8 += 2;
						_0xaf7ee3.pps.push(new Uint8Array(_0x425d8f.subarray(_0x1856e8, _0x1856e8 + _0x32a7ea)));
						_0x1856e8 += _0x32a7ea;
					}
					return _0xaf7ee3;
				},
				'btrt': function _0x166930(_0x63ffc8) {
					var _0x19c204 = new DataView(_0x63ffc8.buffer, _0x63ffc8.byteOffset, _0x63ffc8.byteLength);
					return {
						'bufferSizeDB': _0x19c204.getUint32(0),
						'maxBitrate': _0x19c204.getUint32(4),
						'avgBitrate': _0x19c204.getUint32(8)
					};
				},
				'esds': function _0x375c6b(_0xa10f75) {
					return {
						'version': _0xa10f75[0],
						'flags': new Uint8Array(_0xa10f75.subarray(1, 4)),
						'esId': _0xa10f75[6] << 8 | _0xa10f75[7],
						'streamPriority': _0xa10f75[8] & 31,
						'decoderConfig': {
							'objectProfileIndication': _0xa10f75[11],
							'streamType': _0xa10f75[12] >>> 2 & 63,
							'bufferSize': _0xa10f75[13] << 16 | _0xa10f75[14] << 8 | _0xa10f75[15],
							'maxBitrate': _0xa10f75[16] << 24 | _0xa10f75[17] << 16 | _0xa10f75[18] << 8 | _0xa10f75[19],
							'avgBitrate': _0xa10f75[20] << 24 | _0xa10f75[21] << 16 | _0xa10f75[22] << 8 | _0xa10f75[23],
							'decoderConfigDescriptor': {
								'tag': _0xa10f75[24],
								'length': _0xa10f75[25],
								'audioObjectType': _0xa10f75[26] >>> 3 & 31,
								'samplingFrequencyIndex': (_0xa10f75[26] & 7) << 1 | _0xa10f75[27] >>> 7 & 1,
								'channelConfiguration': _0xa10f75[27] >>> 3 & 15
							}
						}
					};
				},
				'ftyp': function _0x370a82(_0x593641) {
					var _0x4f7c97 = new DataView(_0x593641.buffer, _0x593641.byteOffset, _0x593641.byteLength), _0x5265fd = {
						'majorBrand': _0x75e279(_0x593641.subarray(0, 4)),
						'minorVersion': _0x4f7c97.getUint32(4),
						'compatibleBrands': []
					}, _0x3b61f7 = 8;
					while (_0x3b61f7 < _0x593641.byteLength) {
						_0x5265fd.compatibleBrands.push(_0x75e279(_0x593641.subarray(_0x3b61f7, _0x3b61f7 + 4)));
						_0x3b61f7 += 4;
					}
					return _0x5265fd;
				},
				'dinf': function _0x4cbdf2(_0x11d881) {
					return { 'boxes': _0x42415e(_0x11d881) };
				},
				'dref': function _0x276b6e(_0x59448f) {
					return {
						'version': _0x59448f[0],
						'flags': new Uint8Array(_0x59448f.subarray(1, 4)),
						'dataReferences': _0x42415e(_0x59448f.subarray(8))
					};
				},
				'hdlr': function _0x6fc8d2(_0x102d08) {
					var _0x10d413 = new DataView(_0x102d08.buffer, _0x102d08.byteOffset, _0x102d08.byteLength), _0x11d87c = {
						'version': _0x10d413.getUint8(0),
						'flags': new Uint8Array(_0x102d08.subarray(1, 4)),
						'handlerType': _0x75e279(_0x102d08.subarray(8, 12)),
						'name': ''
					}, _0x5e3075 = 8;
					for (_0x5e3075 = 24; _0x5e3075 < _0x102d08.byteLength; _0x5e3075++) {
						if (_0x102d08[_0x5e3075] === 0) {
							_0x5e3075++;
							break;
						}
						_0x11d87c.name += String.fromCharCode(_0x102d08[_0x5e3075]);
					}
					return _0x11d87c.name = decodeURIComponent(escape(_0x11d87c.name)), _0x11d87c;
				},
				'mdat': function _0x1b1b39(_0x1c5799) {
					return {
						'byteLength': _0x1c5799.byteLength,
						'nals': _0x5948e1(_0x1c5799)
					};
				},
				'mdhd': function _0x371412(_0x490743) {
					var _0xf55ca4 = new DataView(_0x490743.buffer, _0x490743.byteOffset, _0x490743.byteLength), _0x41f782 = 4, _0x3b4579, _0x3632f8 = {
						'version': _0xf55ca4.getUint8(0),
						'flags': new Uint8Array(_0x490743.subarray(1, 4)),
						'language': ''
					};
					return _0x3632f8.version === 1 ? (_0x41f782 += 4, _0x3632f8.creationTime = _0x5a4b4b(_0xf55ca4.getUint32(_0x41f782)), _0x41f782 += 8, _0x3632f8.modificationTime = _0x5a4b4b(_0xf55ca4.getUint32(_0x41f782)), _0x41f782 += 4, _0x3632f8.timescale = _0xf55ca4.getUint32(_0x41f782), _0x41f782 += 8, _0x3632f8.duration = _0xf55ca4.getUint32(_0x41f782)) : (_0x3632f8.creationTime = _0x5a4b4b(_0xf55ca4.getUint32(_0x41f782)), _0x41f782 += 4, _0x3632f8.modificationTime = _0x5a4b4b(_0xf55ca4.getUint32(_0x41f782)), _0x41f782 += 4, _0x3632f8.timescale = _0xf55ca4.getUint32(_0x41f782), _0x41f782 += 4, _0x3632f8.duration = _0xf55ca4.getUint32(_0x41f782)), _0x41f782 += 4, _0x3b4579 = _0xf55ca4.getUint16(_0x41f782), _0x3632f8.language += String.fromCharCode((_0x3b4579 >> 10) + 96), _0x3632f8.language += String.fromCharCode(((_0x3b4579 & 992) >> 5) + 96), _0x3632f8.language += String.fromCharCode((_0x3b4579 & 31) + 96), _0x3632f8;
				},
				'mdia': function _0x2d2279(_0x571d90) {
					return { 'boxes': _0x42415e(_0x571d90) };
				},
				'mfhd': function _0x4c19c8(_0x152bb2) {
					return {
						'version': _0x152bb2[0],
						'flags': new Uint8Array(_0x152bb2.subarray(1, 4)),
						'sequenceNumber': _0x152bb2[4] << 24 | _0x152bb2[5] << 16 | _0x152bb2[6] << 8 | _0x152bb2[7]
					};
				},
				'minf': function _0x130cfd(_0x30c010) {
					return { 'boxes': _0x42415e(_0x30c010) };
				},
				'mp4a': function _0x1a5b11(_0x501ace) {
					var _0x5669a4 = new DataView(_0x501ace.buffer, _0x501ace.byteOffset, _0x501ace.byteLength), _0x41608e = {
						'dataReferenceIndex': _0x5669a4.getUint16(6),
						'channelcount': _0x5669a4.getUint16(16),
						'samplesize': _0x5669a4.getUint16(18),
						'samplerate': _0x5669a4.getUint16(24) + _0x5669a4.getUint16(26) / 65536
					};
					return _0x501ace.byteLength > 28 && (_0x41608e.streamDescriptor = _0x42415e(_0x501ace.subarray(28))[0]), _0x41608e;
				},
				'moof': function _0x403e50(_0x9e6333) {
					return { 'boxes': _0x42415e(_0x9e6333) };
				},
				'moov': function _0x590173(_0x22c840) {
					return { 'boxes': _0x42415e(_0x22c840) };
				},
				'mvex': function _0x1f6d96(_0x2594e1) {
					return { 'boxes': _0x42415e(_0x2594e1) };
				},
				'mvhd': function _0x3dc5df(_0x4f0073) {
					var _0x2f4961 = new DataView(_0x4f0073.buffer, _0x4f0073.byteOffset, _0x4f0073.byteLength), _0x5c17ad = 4, _0x5db941 = {
						'version': _0x2f4961.getUint8(0),
						'flags': new Uint8Array(_0x4f0073.subarray(1, 4))
					};
					return _0x5db941.version === 1 ? (_0x5c17ad += 4, _0x5db941.creationTime = _0x5a4b4b(_0x2f4961.getUint32(_0x5c17ad)), _0x5c17ad += 8, _0x5db941.modificationTime = _0x5a4b4b(_0x2f4961.getUint32(_0x5c17ad)), _0x5c17ad += 4, _0x5db941.timescale = _0x2f4961.getUint32(_0x5c17ad), _0x5c17ad += 8, _0x5db941.duration = _0x2f4961.getUint32(_0x5c17ad)) : (_0x5db941.creationTime = _0x5a4b4b(_0x2f4961.getUint32(_0x5c17ad)), _0x5c17ad += 4, _0x5db941.modificationTime = _0x5a4b4b(_0x2f4961.getUint32(_0x5c17ad)), _0x5c17ad += 4, _0x5db941.timescale = _0x2f4961.getUint32(_0x5c17ad), _0x5c17ad += 4, _0x5db941.duration = _0x2f4961.getUint32(_0x5c17ad)), _0x5c17ad += 4, _0x5db941.rate = _0x2f4961.getUint16(_0x5c17ad) + _0x2f4961.getUint16(_0x5c17ad + 2) / 16, _0x5c17ad += 4, _0x5db941.volume = _0x2f4961.getUint8(_0x5c17ad) + _0x2f4961.getUint8(_0x5c17ad + 1) / 8, _0x5c17ad += 2, _0x5c17ad += 2, _0x5c17ad += 8, _0x5db941.matrix = new Uint32Array(_0x4f0073.subarray(_0x5c17ad, _0x5c17ad + 36)), _0x5c17ad += 36, _0x5c17ad += 24, _0x5db941.nextTrackId = _0x2f4961.getUint32(_0x5c17ad), _0x5db941;
				},
				'pdin': function _0x143bd8(_0x5da973) {
					var _0x224076 = new DataView(_0x5da973.buffer, _0x5da973.byteOffset, _0x5da973.byteLength);
					return {
						'version': _0x224076.getUint8(0),
						'flags': new Uint8Array(_0x5da973.subarray(1, 4)),
						'rate': _0x224076.getUint32(4),
						'initialDelay': _0x224076.getUint32(8)
					};
				},
				'sdtp': function _0x28fdac(_0x45d41a) {
					var _0x2a84e4 = {
						'version': _0x45d41a[0],
						'flags': new Uint8Array(_0x45d41a.subarray(1, 4)),
						'samples': []
					}, _0x60b70a;
					for (_0x60b70a = 4; _0x60b70a < _0x45d41a.byteLength; _0x60b70a++) {
						_0x2a84e4.samples.push({
							'dependsOn': (_0x45d41a[_0x60b70a] & 48) >> 4,
							'isDependedOn': (_0x45d41a[_0x60b70a] & 12) >> 2,
							'hasRedundancy': _0x45d41a[_0x60b70a] & 3
						});
					}
					return _0x2a84e4;
				},
				'sidx': function _0xb1810e(_0x1d3033) {
					var _0xe721f1 = new DataView(_0x1d3033.buffer, _0x1d3033.byteOffset, _0x1d3033.byteLength), _0x271222 = {
						'version': _0x1d3033[0],
						'flags': new Uint8Array(_0x1d3033.subarray(1, 4)),
						'references': [],
						'referenceId': _0xe721f1.getUint32(4),
						'timescale': _0xe721f1.getUint32(8),
						'earliestPresentationTime': _0xe721f1.getUint32(12),
						'firstOffset': _0xe721f1.getUint32(16)
					}, _0x116b8b = _0xe721f1.getUint16(22), _0x58d861;
					for (_0x58d861 = 24; _0x116b8b; _0x58d861 += 12, _0x116b8b--) {
						_0x271222.references.push({
							'referenceType': (_0x1d3033[_0x58d861] & 128) >>> 7,
							'referencedSize': _0xe721f1.getUint32(_0x58d861) & 2147483647,
							'subsegmentDuration': _0xe721f1.getUint32(_0x58d861 + 4),
							'startsWithSap': !!(_0x1d3033[_0x58d861 + 8] & 128),
							'sapType': (_0x1d3033[_0x58d861 + 8] & 112) >>> 4,
							'sapDeltaTime': _0xe721f1.getUint32(_0x58d861 + 8) & 268435455
						});
					}
					return _0x271222;
				},
				'smhd': function _0x5ed7e4(_0x1ae471) {
					return {
						'version': _0x1ae471[0],
						'flags': new Uint8Array(_0x1ae471.subarray(1, 4)),
						'balance': _0x1ae471[4] + _0x1ae471[5] / 256
					};
				},
				'stbl': function _0x5e8e25(_0x156c21) {
					return { 'boxes': _0x42415e(_0x156c21) };
				},
				'stco': function _0x209b9c(_0x12ab31) {
					var _0x3f92b8 = new DataView(_0x12ab31.buffer, _0x12ab31.byteOffset, _0x12ab31.byteLength), _0x135131 = {
						'version': _0x12ab31[0],
						'flags': new Uint8Array(_0x12ab31.subarray(1, 4)),
						'chunkOffsets': []
					}, _0x510584 = _0x3f92b8.getUint32(4), _0x5206e1;
					for (_0x5206e1 = 8; _0x510584; _0x5206e1 += 4, _0x510584--) {
						_0x135131.chunkOffsets.push(_0x3f92b8.getUint32(_0x5206e1));
					}
					return _0x135131;
				},
				'stsc': function _0xc8c1b6(_0x3748c6) {
					var _0x2a0dff = new DataView(_0x3748c6.buffer, _0x3748c6.byteOffset, _0x3748c6.byteLength), _0xc399b3 = _0x2a0dff.getUint32(4), _0x5777d5 = {
						'version': _0x3748c6[0],
						'flags': new Uint8Array(_0x3748c6.subarray(1, 4)),
						'sampleToChunks': []
					}, _0x2ad8f7;
					for (_0x2ad8f7 = 8; _0xc399b3; _0x2ad8f7 += 12, _0xc399b3--) {
						_0x5777d5.sampleToChunks.push({
							'firstChunk': _0x2a0dff.getUint32(_0x2ad8f7),
							'samplesPerChunk': _0x2a0dff.getUint32(_0x2ad8f7 + 4),
							'sampleDescriptionIndex': _0x2a0dff.getUint32(_0x2ad8f7 + 8)
						});
					}
					return _0x5777d5;
				},
				'stsd': function _0x16d175(_0x35905) {
					return {
						'version': _0x35905[0],
						'flags': new Uint8Array(_0x35905.subarray(1, 4)),
						'sampleDescriptions': _0x42415e(_0x35905.subarray(8))
					};
				},
				'stsz': function _0xa43a19(_0x9c4dcb) {
					var _0x368b2f = new DataView(_0x9c4dcb.buffer, _0x9c4dcb.byteOffset, _0x9c4dcb.byteLength), _0x495cc5 = {
						'version': _0x9c4dcb[0],
						'flags': new Uint8Array(_0x9c4dcb.subarray(1, 4)),
						'sampleSize': _0x368b2f.getUint32(4),
						'entries': []
					}, _0x3d4cb2;
					for (_0x3d4cb2 = 12; _0x3d4cb2 < _0x9c4dcb.byteLength; _0x3d4cb2 += 4) {
						_0x495cc5.entries.push(_0x368b2f.getUint32(_0x3d4cb2));
					}
					return _0x495cc5;
				},
				'stts': function _0x3ce1e6(_0x59d380) {
					var _0x2c9dca = new DataView(_0x59d380.buffer, _0x59d380.byteOffset, _0x59d380.byteLength), _0x22885c = {
						'version': _0x59d380[0],
						'flags': new Uint8Array(_0x59d380.subarray(1, 4)),
						'timeToSamples': []
					}, _0x585676 = _0x2c9dca.getUint32(4), _0x1c5fec;
					for (_0x1c5fec = 8; _0x585676; _0x1c5fec += 8, _0x585676--) {
						_0x22885c.timeToSamples.push({
							'sampleCount': _0x2c9dca.getUint32(_0x1c5fec),
							'sampleDelta': _0x2c9dca.getUint32(_0x1c5fec + 4)
						});
					}
					return _0x22885c;
				},
				'styp': function _0x1fa6bb(_0x1f7240) {
					return _0x1efe22.ftyp(_0x1f7240);
				},
				'tfdt': function _0x51eb58(_0x544cb9) {
					var _0x22c100 = {
						'version': _0x544cb9[0],
						'flags': new Uint8Array(_0x544cb9.subarray(1, 4)),
						'baseMediaDecodeTime': _0x544cb9[4] << 24 | _0x544cb9[5] << 16 | _0x544cb9[6] << 8 | _0x544cb9[7]
					};
					return _0x22c100.version === 1 && (_0x22c100.baseMediaDecodeTime *= Math.pow(2, 32), _0x22c100.baseMediaDecodeTime += _0x544cb9[8] << 24 | _0x544cb9[9] << 16 | _0x544cb9[10] << 8 | _0x544cb9[11]), _0x22c100;
				},
				'tfhd': function _0x2f7806(_0xe47192) {
					var _0x23bfdb = new DataView(_0xe47192.buffer, _0xe47192.byteOffset, _0xe47192.byteLength), _0x1fdccc = {
						'version': _0xe47192[0],
						'flags': new Uint8Array(_0xe47192.subarray(1, 4)),
						'trackId': _0x23bfdb.getUint32(4)
					}, _0x4792f7 = _0x1fdccc.flags[2] & 1, _0x20aaf3 = _0x1fdccc.flags[2] & 2, _0xb75fd = _0x1fdccc.flags[2] & 8, _0x125e3e = _0x1fdccc.flags[2] & 16, _0x2c708c = _0x1fdccc.flags[2] & 32, _0x1ecf4e = _0x1fdccc.flags[0] & 65536, _0x4a3267 = _0x1fdccc.flags[0] & 131072, _0x574550;
					return _0x574550 = 8, _0x4792f7 && (_0x574550 += 4, _0x1fdccc.baseDataOffset = _0x23bfdb.getUint32(12), _0x574550 += 4), _0x20aaf3 && (_0x1fdccc.sampleDescriptionIndex = _0x23bfdb.getUint32(_0x574550), _0x574550 += 4), _0xb75fd && (_0x1fdccc.defaultSampleDuration = _0x23bfdb.getUint32(_0x574550), _0x574550 += 4), _0x125e3e && (_0x1fdccc.defaultSampleSize = _0x23bfdb.getUint32(_0x574550), _0x574550 += 4), _0x2c708c && (_0x1fdccc.defaultSampleFlags = _0x23bfdb.getUint32(_0x574550)), _0x1ecf4e && (_0x1fdccc.durationIsEmpty = true), !_0x4792f7 && _0x4a3267 && (_0x1fdccc.baseDataOffsetIsMoof = true), _0x1fdccc;
				},
				'tkhd': function _0x1f1b96(_0x16dbfc) {
					var _0x551012 = new DataView(_0x16dbfc.buffer, _0x16dbfc.byteOffset, _0x16dbfc.byteLength), _0xd77c46 = 4, _0x1b3928 = {
						'version': _0x551012.getUint8(0),
						'flags': new Uint8Array(_0x16dbfc.subarray(1, 4))
					};
					return _0x1b3928.version === 1 ? (_0xd77c46 += 4, _0x1b3928.creationTime = _0x5a4b4b(_0x551012.getUint32(_0xd77c46)), _0xd77c46 += 8, _0x1b3928.modificationTime = _0x5a4b4b(_0x551012.getUint32(_0xd77c46)), _0xd77c46 += 4, _0x1b3928.trackId = _0x551012.getUint32(_0xd77c46), _0xd77c46 += 4, _0xd77c46 += 8, _0x1b3928.duration = _0x551012.getUint32(_0xd77c46)) : (_0x1b3928.creationTime = _0x5a4b4b(_0x551012.getUint32(_0xd77c46)), _0xd77c46 += 4, _0x1b3928.modificationTime = _0x5a4b4b(_0x551012.getUint32(_0xd77c46)), _0xd77c46 += 4, _0x1b3928.trackId = _0x551012.getUint32(_0xd77c46), _0xd77c46 += 4, _0xd77c46 += 4, _0x1b3928.duration = _0x551012.getUint32(_0xd77c46)), _0xd77c46 += 4, _0xd77c46 += 8, _0x1b3928.layer = _0x551012.getUint16(_0xd77c46), _0xd77c46 += 2, _0x1b3928.alternateGroup = _0x551012.getUint16(_0xd77c46), _0xd77c46 += 2, _0x1b3928.volume = _0x551012.getUint8(_0xd77c46) + _0x551012.getUint8(_0xd77c46 + 1) / 8, _0xd77c46 += 2, _0xd77c46 += 2, _0x1b3928.matrix = new Uint32Array(_0x16dbfc.subarray(_0xd77c46, _0xd77c46 + 36)), _0xd77c46 += 36, _0x1b3928.width = _0x551012.getUint16(_0xd77c46) + _0x551012.getUint16(_0xd77c46 + 2) / 16, _0xd77c46 += 4, _0x1b3928.height = _0x551012.getUint16(_0xd77c46) + _0x551012.getUint16(_0xd77c46 + 2) / 16, _0x1b3928;
				},
				'traf': function _0x515ce0(_0x351b36) {
					return { 'boxes': _0x42415e(_0x351b36) };
				},
				'trak': function _0x509377(_0xc67175) {
					return { 'boxes': _0x42415e(_0xc67175) };
				},
				'trex': function _0x3e310b(_0x41b5ed) {
					var _0x2121fe = new DataView(_0x41b5ed.buffer, _0x41b5ed.byteOffset, _0x41b5ed.byteLength);
					return {
						'version': _0x41b5ed[0],
						'flags': new Uint8Array(_0x41b5ed.subarray(1, 4)),
						'trackId': _0x2121fe.getUint32(4),
						'defaultSampleDescriptionIndex': _0x2121fe.getUint32(8),
						'defaultSampleDuration': _0x2121fe.getUint32(12),
						'defaultSampleSize': _0x2121fe.getUint32(16),
						'sampleDependsOn': _0x41b5ed[20] & 3,
						'sampleIsDependedOn': (_0x41b5ed[21] & 192) >> 6,
						'sampleHasRedundancy': (_0x41b5ed[21] & 48) >> 4,
						'samplePaddingValue': (_0x41b5ed[21] & 14) >> 1,
						'sampleIsDifferenceSample': !!(_0x41b5ed[21] & 1),
						'sampleDegradationPriority': _0x2121fe.getUint16(22)
					};
				},
				'trun': function _0x5a8d53(_0x1fb274) {
					var _0x34a3a5 = {
						'version': _0x1fb274[0],
						'flags': new Uint8Array(_0x1fb274.subarray(1, 4)),
						'samples': []
					}, _0x465ee7 = new DataView(_0x1fb274.buffer, _0x1fb274.byteOffset, _0x1fb274.byteLength), _0x1beb11 = _0x34a3a5.flags[2] & 1, _0x2c5efb = _0x34a3a5.flags[2] & 4, _0x46dab5 = _0x34a3a5.flags[1] & 1, _0x2ae37b = _0x34a3a5.flags[1] & 2, _0x43c1bb = _0x34a3a5.flags[1] & 4, _0x2334b9 = _0x34a3a5.flags[1] & 8, _0x41d735 = _0x465ee7.getUint32(4), _0xae6149 = 8, _0x2b8a26;
					_0x1beb11 && (_0x34a3a5.dataOffset = _0x465ee7.getInt32(_0xae6149), _0xae6149 += 4);
					_0x2c5efb && _0x41d735 && (_0x2b8a26 = { 'flags': _0x1ef13b(_0x1fb274.subarray(_0xae6149, _0xae6149 + 4)) }, _0xae6149 += 4, _0x46dab5 && (_0x2b8a26.duration = _0x465ee7.getUint32(_0xae6149), _0xae6149 += 4), _0x2ae37b && (_0x2b8a26.size = _0x465ee7.getUint32(_0xae6149), _0xae6149 += 4), _0x2334b9 && (_0x2b8a26.compositionTimeOffset = _0x465ee7.getUint32(_0xae6149), _0xae6149 += 4), _0x34a3a5.samples.push(_0x2b8a26), _0x41d735--);
					while (_0x41d735--) {
						_0x2b8a26 = {};
						_0x46dab5 && (_0x2b8a26.duration = _0x465ee7.getUint32(_0xae6149), _0xae6149 += 4);
						_0x2ae37b && (_0x2b8a26.size = _0x465ee7.getUint32(_0xae6149), _0xae6149 += 4);
						_0x43c1bb && (_0x2b8a26.flags = _0x1ef13b(_0x1fb274.subarray(_0xae6149, _0xae6149 + 4)), _0xae6149 += 4);
						_0x2334b9 && (_0x2b8a26.compositionTimeOffset = _0x465ee7.getUint32(_0xae6149), _0xae6149 += 4);
						_0x34a3a5.samples.push(_0x2b8a26);
					}
					return _0x34a3a5;
				},
				'url ': function _0x2acb94(_0x439512) {
					return {
						'version': _0x439512[0],
						'flags': new Uint8Array(_0x439512.subarray(1, 4))
					};
				},
				'vmhd': function _0x32d1e7(_0x595837) {
					var _0x1ae82c = new DataView(_0x595837.buffer, _0x595837.byteOffset, _0x595837.byteLength);
					return {
						'version': _0x595837[0],
						'flags': new Uint8Array(_0x595837.subarray(1, 4)),
						'graphicsmode': _0x1ae82c.getUint16(4),
						'opcolor': new Uint16Array([
							_0x1ae82c.getUint16(6),
							_0x1ae82c.getUint16(8),
							_0x1ae82c.getUint16(10)
						])
					};
				}
			};
			_0x42415e = function _0xbd4783(_0x197f34) {
				var _0xd7c5e3 = 0, _0x131ebd = [], _0x5f21f6, _0x531ccd, _0x2495fa, _0x472196, _0x2cde2b, _0x283163 = new ArrayBuffer(_0x197f34.length), _0x5e685f = new Uint8Array(_0x283163);
				for (var _0x206afe = 0; _0x206afe < _0x197f34.length; ++_0x206afe) {
					_0x5e685f[_0x206afe] = _0x197f34[_0x206afe];
				}
				_0x5f21f6 = new DataView(_0x283163);
				while (_0xd7c5e3 < _0x197f34.byteLength) {
					_0x531ccd = _0x5f21f6.getUint32(_0xd7c5e3);
					_0x2495fa = _0x75e279(_0x197f34.subarray(_0xd7c5e3 + 4, _0xd7c5e3 + 8));
					_0x472196 = _0x531ccd > 1 ? _0xd7c5e3 + _0x531ccd : _0x197f34.byteLength;
					_0x2cde2b = (_0x1efe22[_0x2495fa] || function (_0x2ab2b7) {
						return { 'data': _0x2ab2b7 };
					})(_0x197f34.subarray(_0xd7c5e3 + 8, _0x472196));
					_0x2cde2b.size = _0x531ccd;
					_0x2cde2b.type = _0x2495fa;
					_0x131ebd.push(_0x2cde2b);
					_0xd7c5e3 = _0x472196;
				}
				return _0x131ebd;
			};
			_0x402474 = function _0x48e6b7(_0x226f27, _0x1a42f2) {
				var _0x17b4ac;
				return _0x1a42f2 = _0x1a42f2 || 0, _0x17b4ac = new Array(_0x1a42f2 * 2 + 1).join(' '), _0x226f27.map(function (_0x3a4675, _0x15b61e) {
					return _0x17b4ac + _0x3a4675.type + '\n' + Object.keys(_0x3a4675).filter(function (_0x38c3bf) {
						return _0x38c3bf !== 'type' && _0x38c3bf !== 'boxes';
					}).map(function (_0x5025d3) {
						var _0x223614 = _0x17b4ac + '  ' + _0x5025d3 + ': ', _0x11541a = _0x3a4675[_0x5025d3];
						if (_0x11541a instanceof Uint8Array || _0x11541a instanceof Uint32Array) {
							var _0x2b16ff = Array.prototype.slice.call(new Uint8Array(_0x11541a.buffer, _0x11541a.byteOffset, _0x11541a.byteLength)).map(function (_0x4ba577) {
								return ' ' + ('00' + _0x4ba577.toString(16)).slice(-2);
							}).join('').match(/.{1,24}/g);
							if (!_0x2b16ff) {
								return _0x223614 + '<>';
							}
							if (_0x2b16ff.length === 1) {
								return _0x223614 + '<' + _0x2b16ff.join('').slice(1) + '>';
							}
							return _0x223614 + '<\n' + _0x2b16ff.map(function (_0x576577) {
								return _0x17b4ac + '  ' + _0x576577;
							}).join('\n') + '\n' + _0x17b4ac + '  >';
						}
						return _0x223614 + JSON.stringify(_0x11541a, null, 2).split('\n').map(function (_0x3c0232, _0x5c45d8) {
							if (_0x5c45d8 === 0) {
								return _0x3c0232;
							}
							return _0x17b4ac + '  ' + _0x3c0232;
						}).join('\n');
					}).join('\n') + (_0x3a4675.boxes ? '\n' + _0x402474(_0x3a4675.boxes, _0x1a42f2 + 1) : '');
				}).join('\n');
			};
			var _0x8018e7 = {
				'inspect': _0x42415e,
				'textify': _0x402474,
				'parseTfdt': _0x1efe22.tfdt,
				'parseHdlr': _0x1efe22.hdlr,
				'parseTfhd': _0x1efe22.tfhd,
				'parseTrun': _0x1efe22.trun
			}, _0x2b5a59 = _0x36a768.discardEmulationPreventionBytes, _0x1c9374 = _0xb38546.CaptionStream, _0x3bb8e6 = function _0x12490a(_0x5d35de, _0x1cb2dd) {
				var _0x31fa08 = _0x5d35de;
				for (var _0x189c5c = 0; _0x189c5c < _0x1cb2dd.length; _0x189c5c++) {
					var _0x1e3780 = _0x1cb2dd[_0x189c5c];
					if (_0x31fa08 < _0x1e3780.size) {
						return _0x1e3780;
					}
					_0x31fa08 -= _0x1e3780.size;
				}
				return null;
			}, _0x1b1e01 = function _0x14d7a5(_0x21c097, _0xbe4889, _0x523efb) {
				var _0x255654 = new DataView(_0x21c097.buffer, _0x21c097.byteOffset, _0x21c097.byteLength), _0x490c9a = [], _0x8b45d, _0x32bd78, _0x5a0081, _0x26825f;
				for (_0x32bd78 = 0; _0x32bd78 + 4 < _0x21c097.length; _0x32bd78 += _0x5a0081) {
					_0x5a0081 = _0x255654.getUint32(_0x32bd78);
					_0x32bd78 += 4;
					if (_0x5a0081 <= 0) {
						continue;
					}
					switch (_0x21c097[_0x32bd78] & 31) {
						case 6:
							var _0x3b807e = _0x21c097.subarray(_0x32bd78 + 1, _0x32bd78 + 1 + _0x5a0081), _0x396973 = _0x3bb8e6(_0x32bd78, _0xbe4889);
							_0x8b45d = {
								'nalUnitType': 'sei_rbsp',
								'size': _0x5a0081,
								'data': _0x3b807e,
								'escapedRBSP': _0x2b5a59(_0x3b807e),
								'trackId': _0x523efb
							};
							_0x396973 ? (_0x8b45d.pts = _0x396973.pts, _0x8b45d.dts = _0x396973.dts, _0x26825f = _0x396973) : (_0x8b45d.pts = _0x26825f.pts, _0x8b45d.dts = _0x26825f.dts);
							_0x490c9a.push(_0x8b45d);
							break;
						default:
							break;
					}
				}
				return _0x490c9a;
			}, _0x9c9a2b = function _0x3158da(_0x283aa1, _0x121cb0, _0x375b9d) {
				var _0x5be07f = _0x121cb0, _0x4f37df = _0x375b9d.defaultSampleDuration || 0, _0x101b67 = _0x375b9d.defaultSampleSize || 0, _0x369745 = _0x375b9d.trackId, _0x3644bc = [];
				return _0x283aa1.forEach(function (_0x2c3de1) {
					var _0x1cc7c2 = _0x8018e7.parseTrun(_0x2c3de1), _0x31f9f0 = _0x1cc7c2.samples;
					_0x31f9f0.forEach(function (_0xbb7fb9) {
						_0xbb7fb9.duration === undefined && (_0xbb7fb9.duration = _0x4f37df);
						_0xbb7fb9.size === undefined && (_0xbb7fb9.size = _0x101b67);
						_0xbb7fb9.trackId = _0x369745;
						_0xbb7fb9.dts = _0x5be07f;
						_0xbb7fb9.compositionTimeOffset === undefined && (_0xbb7fb9.compositionTimeOffset = 0);
						_0xbb7fb9.pts = _0x5be07f + _0xbb7fb9.compositionTimeOffset;
						_0x5be07f += _0xbb7fb9.duration;
					});
					_0x3644bc = _0x3644bc.concat(_0x31f9f0);
				}), _0x3644bc;
			}, _0x21118c = function _0x6e8591(_0x2a0769, _0x5425fe) {
				var _0x3afe72 = _0x4655bf.findBox(_0x2a0769, [
					'moof',
					'traf'
				]), _0x3d235e = _0x4655bf.findBox(_0x2a0769, ['mdat']), _0x5631c4 = {}, _0x5d798a = [];
				return _0x3d235e.forEach(function (_0x660522, _0x9056e) {
					var _0x2f75e3 = _0x3afe72[_0x9056e];
					_0x5d798a.push({
						'mdat': _0x660522,
						'traf': _0x2f75e3
					});
				}), _0x5d798a.forEach(function (_0x19f3ca) {
					var _0x5f071a = _0x19f3ca.mdat, _0x459d27 = _0x19f3ca.traf, _0x3c8516 = _0x4655bf.findBox(_0x459d27, ['tfhd']), _0xc76bf0 = _0x8018e7.parseTfhd(_0x3c8516[0]), _0x5dfb77 = _0xc76bf0.trackId, _0x4eeac5 = _0x4655bf.findBox(_0x459d27, ['tfdt']), _0x2d990d = _0x4eeac5.length > 0 ? _0x8018e7.parseTfdt(_0x4eeac5[0]).baseMediaDecodeTime : 0, _0xd48ea6 = _0x4655bf.findBox(_0x459d27, ['trun']), _0x1a67dd, _0xea989e;
					_0x5425fe === _0x5dfb77 && _0xd48ea6.length > 0 && (_0x1a67dd = _0x9c9a2b(_0xd48ea6, _0x2d990d, _0xc76bf0), _0xea989e = _0x1b1e01(_0x5f071a, _0x1a67dd, _0x5dfb77), !_0x5631c4[_0x5dfb77] && (_0x5631c4[_0x5dfb77] = []), _0x5631c4[_0x5dfb77] = _0x5631c4[_0x5dfb77].concat(_0xea989e));
				}), _0x5631c4;
			}, _0x5fd31a = function _0x1731f7(_0x66255f, _0x39b5b8, _0x4f6d02) {
				var _0xbec494;
				if (!_0x39b5b8) {
					return null;
				}
				return _0xbec494 = _0x21118c(_0x66255f, _0x39b5b8), {
					'seiNals': _0xbec494[_0x39b5b8],
					'timescale': _0x4f6d02
				};
			}, _0x5c749c = function _0x239e9e() {
				var _0x49aa40 = false, _0x56ea89, _0x2bc562, _0x163f3a, _0xadafe6, _0xfb40c0;
				this.isInitialized = function () {
					return _0x49aa40;
				};
				this.init = function () {
					_0x56ea89 = new _0x1c9374();
					_0x49aa40 = true;
					_0x56ea89.on('data', function (_0x2db607) {
						_0x2db607.startTime = _0x2db607.startPts / _0xadafe6;
						_0x2db607.endTime = _0x2db607.endPts / _0xadafe6;
						_0xfb40c0.captions.push(_0x2db607);
						_0xfb40c0.captionStreams[_0x2db607.stream] = true;
					});
				};
				this.isNewInit = function (_0x548f5c, _0x3b726c) {
					if (_0x548f5c && _0x548f5c.length === 0 || _0x3b726c && (typeof _0x3b726c === 'undefined' ? 'undefined' : _0x65b994(_0x3b726c)) === 'object' && Object.keys(_0x3b726c).length === 0) {
						return false;
					}
					return _0x163f3a !== _0x548f5c[0] || _0xadafe6 !== _0x3b726c[_0x163f3a];
				};
				this.parse = function (_0x58fb78, _0x10cc2c, _0x5edc73) {
					var _0x1240fd;
					if (!this.isInitialized()) {
						return null;
					} else {
						if (!_0x10cc2c || !_0x5edc73) {
							return null;
						} else {
							if (this.isNewInit(_0x10cc2c, _0x5edc73)) {
								_0x163f3a = _0x10cc2c[0];
								_0xadafe6 = _0x5edc73[_0x163f3a];
							} else {
								if (!_0x163f3a || !_0xadafe6) {
									return _0x2bc562.push(_0x58fb78), null;
								}
							}
						}
					}
					while (_0x2bc562.length > 0) {
						var _0x263289 = _0x2bc562.shift();
						this.parse(_0x263289, _0x10cc2c, _0x5edc73);
					}
					_0x1240fd = _0x5fd31a(_0x58fb78, _0x163f3a, _0xadafe6);
					if (_0x1240fd === null || !_0x1240fd.seiNals) {
						return null;
					}
					return this.pushNals(_0x1240fd.seiNals), this.flushStream(), _0xfb40c0;
				};
				this.pushNals = function (_0xed1523) {
					if (!this.isInitialized() || !_0xed1523 || _0xed1523.length === 0) {
						return null;
					}
					_0xed1523.forEach(function (_0x31a83c) {
						_0x56ea89.push(_0x31a83c);
					});
				};
				this.flushStream = function () {
					if (!this.isInitialized()) {
						return null;
					}
					_0x56ea89.flush();
				};
				this.clearParsedCaptions = function () {
					_0xfb40c0.captions = [];
					_0xfb40c0.captionStreams = {};
				};
				this.resetCaptionStream = function () {
					if (!this.isInitialized()) {
						return null;
					}
					_0x56ea89.reset();
				};
				this.clearAllCaptions = function () {
					this.clearParsedCaptions();
					this.resetCaptionStream();
				};
				this.reset = function () {
					_0x2bc562 = [];
					_0x163f3a = null;
					_0xadafe6 = null;
					!_0xfb40c0 ? _0xfb40c0 = {
						'captions': [],
						'captionStreams': {}
					} : this.clearParsedCaptions();
					this.resetCaptionStream();
				};
				this.reset();
			}, _0x50d357 = _0x5c749c, _0x138ef8 = {
				'generator': _0x17115f,
				'probe': _0x4655bf,
				'Transmuxer': _0x37345b.Transmuxer,
				'AudioSegmentStream': _0x37345b.AudioSegmentStream,
				'VideoSegmentStream': _0x37345b.VideoSegmentStream,
				'CaptionParser': _0x50d357
			}, _0x66af58 = function _0x1772dc(_0x454e6b, _0x1a4d42) {
				if (!(_0x454e6b instanceof _0x1a4d42)) {
					throw new TypeError('Cannot call a class as a function');
				}
			}, _0x2873c6 = (function () {
				function _0x478839(_0x3a2953, _0x4b97c8) {
					for (var _0x15bde0 = 0; _0x15bde0 < _0x4b97c8.length; _0x15bde0++) {
						var _0x5658f5 = _0x4b97c8[_0x15bde0];
						_0x5658f5.enumerable = _0x5658f5.enumerable || false;
						_0x5658f5.configurable = true;
						if ('value' in _0x5658f5) {
							_0x5658f5.writable = true;
						}
						Object.defineProperty(_0x3a2953, _0x5658f5.key, _0x5658f5);
					}
				}
				return function (_0x3cf64e, _0x4cc007, _0x497dad) {
					if (_0x4cc007) {
						_0x478839(_0x3cf64e.prototype, _0x4cc007);
					}
					if (_0x497dad) {
						_0x478839(_0x3cf64e, _0x497dad);
					}
					return _0x3cf64e;
				};
			}()), _0x805dbc = function _0x4fc6c7(_0x46eb7c, _0x3ad331) {
				_0x3ad331.on('data', function (_0x3ae7fe) {
					var _0x3188a0 = _0x3ae7fe.initSegment;
					_0x3ae7fe.initSegment = {
						'data': _0x3188a0.buffer,
						'byteOffset': _0x3188a0.byteOffset,
						'byteLength': _0x3188a0.byteLength
					};
					var _0x3d1d84 = _0x3ae7fe.data;
					_0x3ae7fe.data = _0x3d1d84.buffer;
					_0x46eb7c.postMessage({
						'action': 'data',
						'segment': _0x3ae7fe,
						'byteOffset': _0x3d1d84.byteOffset,
						'byteLength': _0x3d1d84.byteLength
					}, [_0x3ae7fe.data]);
				});
				_0x3ad331.captionStream && _0x3ad331.captionStream.on('data', function (_0x36b9a1) {
					_0x46eb7c.postMessage({
						'action': 'caption',
						'data': _0x36b9a1
					});
				});
				_0x3ad331.on('done', function (_0x28b2c7) {
					_0x46eb7c.postMessage({ 'action': 'done' });
				});
				_0x3ad331.on('gopInfo', function (_0x552090) {
					_0x46eb7c.postMessage({
						'action': 'gopInfo',
						'gopInfo': _0x552090
					});
				});
			}, _0x361a23 = (function () {
				function _0x5a1c6c(_0x12a37b, _0x1ebf1a) {
					_0x66af58(this, _0x5a1c6c);
					this.options = _0x1ebf1a || {};
					this.self = _0x12a37b;
					this.init();
				}
				return _0x2873c6(_0x5a1c6c, [
					{
						'key': 'init',
						'value': function _0xd747b7() {
							this.transmuxer && this.transmuxer.dispose();
							this.transmuxer = new _0x138ef8.Transmuxer(this.options);
							_0x805dbc(this.self, this.transmuxer);
						}
					},
					{
						'key': 'push',
						'value': function _0x3170e2(_0x1ed848) {
							var _0x557fc6 = new Uint8Array(_0x1ed848.data, _0x1ed848.byteOffset, _0x1ed848.byteLength);
							this.transmuxer.push(_0x557fc6);
						}
					},
					{
						'key': 'reset',
						'value': function _0x31f20c() {
							this.init();
						}
					},
					{
						'key': 'setTimestampOffset',
						'value': function _0x4ccdcf(_0x3e90ca) {
							var _0x18d3ed = _0x3e90ca.timestampOffset || 0;
							this.transmuxer.setBaseMediaDecodeTime(Math.round(_0x18d3ed * 90000));
						}
					},
					{
						'key': 'setAudioAppendStart',
						'value': function _0x4d8e31(_0x27b080) {
							this.transmuxer.setAudioAppendStart(Math.ceil(_0x27b080.appendStart * 90000));
						}
					},
					{
						'key': 'flush',
						'value': function _0x55d9da(_0x24d649) {
							this.transmuxer.flush();
						}
					},
					{
						'key': 'resetCaptions',
						'value': function _0x5e7247() {
							this.transmuxer.resetCaptions();
						}
					},
					{
						'key': 'alignGopsWith',
						'value': function _0x4e72b6(_0x58f4c9) {
							this.transmuxer.alignGopsWith(_0x58f4c9.gopsToAlignWith.slice());
						}
					}
				]), _0x5a1c6c;
			}()), _0x227487 = function _0x51e21c(_0x212649) {
				_0x212649.onmessage = function (_0x635246) {
					if (_0x635246.data.action === 'init' && _0x635246.data.options) {
						this.messageHandlers = new _0x361a23(_0x212649, _0x635246.data.options);
						return;
					}
					!this.messageHandlers && (this.messageHandlers = new _0x361a23(_0x212649));
					_0x635246.data && _0x635246.data.action && _0x635246.data.action !== 'init' && (this.messageHandlers[_0x635246.data.action] && this.messageHandlers[_0x635246.data.action](_0x635246.data));
				};
			}, _0x431e2d = new _0x227487(_0x3187e8);
			return _0x431e2d;
		}());
	}), _0x9e2ace = {
		'videoCodec': 'avc1',
		'videoObjectTypeIndicator': '.4d400d',
		'audioProfile': '2'
	}, _0x184d0b = function _0x38a8e7(_0x41552e) {
		return _0x41552e.map(function (_0xaf06eb) {
			return _0xaf06eb.replace(/avc1\.(\d+)\.(\d+)/i, function (_0x555573, _0x4057f4, _0x3bd9c4) {
				var _0x5597f2 = ('00' + Number(_0x4057f4).toString(16)).slice(-2), _0x54ed2e = ('00' + Number(_0x3bd9c4).toString(16)).slice(-2);
				return 'avc1.' + _0x5597f2 + '00' + _0x54ed2e;
			});
		});
	}, _0x22c0d5 = function _0x186cd3() {
		var _0x2f6f37 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '', _0x3a0164 = void 0;
		return _0x4e0bf7.codecCount = _0x2f6f37.split(',').length, _0x4e0bf7.codecCount = _0x4e0bf7.codecCount || 2, _0x3a0164 = /(^|\s|,)+(avc[13])([^ ,]*)/i.exec(_0x2f6f37), _0x3a0164 && (_0x4e0bf7.videoCodec = _0x3a0164[2], _0x4e0bf7.videoObjectTypeIndicator = _0x3a0164[3]), _0x4e0bf7.audioProfile = /(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(_0x2f6f37), _0x4e0bf7.audioProfile = _0x4e0bf7.audioProfile && _0x4e0bf7.audioProfile[2], _0x4e0bf7;
	}, _0x10f809 = function _0x504b21(_0x27c65e) {
		return _0x27c65e.replace(/avc1\.(\d+)\.(\d+)/i, function (_0x748a7f) {
			return _0x184d0b([_0x748a7f])[0];
		});
	}, _0x429c2d = function _0x407295(_0x16a17b, _0x27a549, _0x46be79) {
		return _0x16a17b + '/' + _0x27a549 + '; codecs="' + _0x46be79.filter(function (_0x18502a) {
			return !!_0x18502a;
		}).join(', ') + '"';
	}, _0x58c4aa = function _0x282c42(_0x4b4d37) {
		if (_0x4b4d37.segments && _0x4b4d37.segments.length && _0x4b4d37.segments[0].map) {
			return 'mp4';
		}
		return 'mp2t';
	}, _0x3d1912 = function _0x56669a(_0x25a276) {
		var _0x4c6890 = _0x25a276.attributes || {};
		if (_0x4c6890.CODECS) {
			return _0x22c0d5(_0x4c6890.CODECS);
		}
		return _0x9e2ace;
	}, _0x3dd17a = function _0x3802a7(_0x52a6c0, _0x122ef8) {
		if (!_0x52a6c0.mediaGroups.AUDIO || !_0x122ef8) {
			return null;
		}
		var _0x15b16f = _0x52a6c0.mediaGroups.AUDIO[_0x122ef8];
		if (!_0x15b16f) {
			return null;
		}
		for (var _0xa4b74b in _0x15b16f) {
			var _0x54b5c1 = _0x15b16f[_0xa4b74b];
			if (_0x54b5c1.default && _0x54b5c1.playlists) {
				return _0x22c0d5(_0x54b5c1.playlists[0].attributes.CODECS).audioProfile;
			}
		}
		return null;
	}, _0x555529 = function _0x28bc08(_0x12259e, _0x17b7b8) {
		var _0x5806d9 = _0x58c4aa(_0x17b7b8), _0x4ef5e1 = _0x3d1912(_0x17b7b8), _0x243156 = _0x17b7b8.attributes || {}, _0xf3bea8 = true, _0x3f18d5 = false;
		if (!_0x17b7b8) {
			return [];
		}
		if (_0x12259e.mediaGroups.AUDIO && _0x243156.AUDIO) {
			var _0x49a0e6 = _0x12259e.mediaGroups.AUDIO[_0x243156.AUDIO];
			if (_0x49a0e6) {
				_0x3f18d5 = true;
				_0xf3bea8 = false;
				for (var _0x1526af in _0x49a0e6) {
					if (!_0x49a0e6[_0x1526af].uri && !_0x49a0e6[_0x1526af].playlists) {
						_0xf3bea8 = true;
						break;
					}
				}
			}
		}
		_0x3f18d5 && !_0x4ef5e1.audioProfile && (!_0xf3bea8 && (_0x4ef5e1.audioProfile = _0x3dd17a(_0x12259e, _0x243156.AUDIO)), !_0x4ef5e1.audioProfile && (_0x1dff89.log.warn('Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)'), _0x4ef5e1.audioProfile = _0x9e2ace.audioProfile));
		var _0x7bb946 = {};
		_0x4ef5e1.videoCodec && (_0x7bb946.video = '' + _0x4ef5e1.videoCodec + _0x4ef5e1.videoObjectTypeIndicator);
		_0x4ef5e1.audioProfile && (_0x7bb946.audio = 'mp4a.40.' + _0x4ef5e1.audioProfile);
		var _0x1e93f5 = _0x429c2d('audio', _0x5806d9, [_0x7bb946.audio]), _0x49e66a = _0x429c2d('video', _0x5806d9, [_0x7bb946.video]), _0x202858 = _0x429c2d('video', _0x5806d9, [
			_0x7bb946.video,
			_0x7bb946.audio
		]);
		if (_0x3f18d5) {
			if (!_0xf3bea8 && _0x7bb946.video) {
				return [
					_0x49e66a,
					_0x1e93f5
				];
			}
			if (!_0xf3bea8 && !_0x7bb946.video) {
				return [
					_0x1e93f5,
					_0x1e93f5
				];
			}
			return [
				_0x202858,
				_0x1e93f5
			];
		}
		if (!_0x7bb946.video) {
			return [_0x1e93f5];
		}
		return [_0x202858];
	}, _0xb26514 = function _0x5a3731(_0x38a3e9) {
		var _0x5586c4 = {
			'type': '',
			'parameters': {}
		}, _0x2cbe2b = _0x38a3e9.trim().split(';');
		return _0x5586c4.type = _0x2cbe2b.shift().trim(), _0x2cbe2b.forEach(function (_0x49a4ab) {
			var _0x450dd1 = _0x49a4ab.trim().split('=');
			if (_0x450dd1.length > 1) {
				var _0x1dec9f = _0x450dd1[0].replace(/"/g, '').trim(), _0x4603bb = _0x450dd1[1].replace(/"/g, '').trim();
				_0x5586c4.parameters[_0x1dec9f] = _0x4603bb;
			}
		}), _0x5586c4;
	}, _0xb0f3df = function _0x34f9bb(_0x260f56) {
		return /mp4a\.\d+.\d+/i.test(_0x260f56);
	}, _0x3e4f93 = function _0x364ade(_0x1cd4df) {
		return /avc1\.[\da-f]+/i.test(_0x1cd4df);
	}, _0x3a53a1 = function _0x1dc019(_0x52e610, _0x42add0, _0x1c7b9e) {
		if (typeof _0x42add0 === 'undefined' || _0x42add0 === null || !_0x52e610.length) {
			return [];
		}
		var _0x262da2 = Math.ceil((_0x42add0 - _0x1c7b9e + 3) * 90000), _0xe982db = void 0;
		for (_0xe982db = 0; _0xe982db < _0x52e610.length; _0xe982db++) {
			if (_0x52e610[_0xe982db].pts > _0x262da2) {
				break;
			}
		}
		return _0x52e610.slice(_0xe982db);
	}, _0x2d0242 = function _0x42e765(_0x3a6f38, _0x221c56, _0x58d50c) {
		if (!_0x221c56.length) {
			return _0x3a6f38;
		}
		if (_0x58d50c) {
			return _0x221c56.slice();
		}
		var _0x300b24 = _0x221c56[0].pts, _0x7be594 = 0;
		for (_0x7be594; _0x7be594 < _0x3a6f38.length; _0x7be594++) {
			if (_0x3a6f38[_0x7be594].pts >= _0x300b24) {
				break;
			}
		}
		return _0x3a6f38.slice(0, _0x7be594).concat(_0x221c56);
	}, _0x58a2ec = function _0x23041f(_0x3b024c, _0x12d65f, _0x55eb9f, _0x324cc1) {
		var _0x5c5d04 = Math.ceil((_0x12d65f - _0x324cc1) * 90000), _0x52fabc = Math.ceil((_0x55eb9f - _0x324cc1) * 90000), _0x352b6e = _0x3b024c.slice(), _0x4317b2 = _0x3b024c.length;
		while (_0x4317b2--) {
			if (_0x3b024c[_0x4317b2].pts <= _0x52fabc) {
				break;
			}
		}
		if (_0x4317b2 === -1) {
			return _0x352b6e;
		}
		var _0x1385f9 = _0x4317b2 + 1;
		while (_0x1385f9--) {
			if (_0x3b024c[_0x1385f9].pts <= _0x5c5d04) {
				break;
			}
		}
		return _0x1385f9 = Math.max(_0x1385f9, 0), _0x352b6e.splice(_0x1385f9, _0x4317b2 - _0x1385f9 + 1), _0x352b6e;
	}, _0x4a3419 = function _0x9190d5(_0x35e10d, _0x647990, _0x490e79) {
		var _0x47ca3a = null, _0x319690 = null, _0x2d1cf4 = 0, _0x340d5c = [], _0x5c9ab7 = [];
		if (!_0x35e10d && !_0x647990) {
			return _0x1dff89.createTimeRange();
		}
		if (!_0x35e10d) {
			return _0x647990.buffered;
		}
		if (!_0x647990) {
			return _0x35e10d.buffered;
		}
		if (_0x490e79) {
			return _0x35e10d.buffered;
		}
		if (_0x35e10d.buffered.length === 0 && _0x647990.buffered.length === 0) {
			return _0x1dff89.createTimeRange();
		}
		var _0x50dda5 = _0x35e10d.buffered, _0x157472 = _0x647990.buffered, _0x46475d = _0x50dda5.length;
		while (_0x46475d--) {
			_0x340d5c.push({
				'time': _0x50dda5.start(_0x46475d),
				'type': 'start'
			});
			_0x340d5c.push({
				'time': _0x50dda5.end(_0x46475d),
				'type': 'end'
			});
		}
		_0x46475d = _0x157472.length;
		while (_0x46475d--) {
			_0x340d5c.push({
				'time': _0x157472.start(_0x46475d),
				'type': 'start'
			});
			_0x340d5c.push({
				'time': _0x157472.end(_0x46475d),
				'type': 'end'
			});
		}
		_0x340d5c.sort(function (_0x137ccd, _0x173fd6) {
			return _0x137ccd.time - _0x173fd6.time;
		});
		for (_0x46475d = 0; _0x46475d < _0x340d5c.length; _0x46475d++) {
			if (_0x340d5c[_0x46475d].type === 'start') {
				_0x2d1cf4++;
				_0x2d1cf4 === 2 && (_0x47ca3a = _0x340d5c[_0x46475d].time);
			} else {
				if (_0x340d5c[_0x46475d].type === 'end') {
					_0x2d1cf4--;
					_0x2d1cf4 === 1 && (_0x319690 = _0x340d5c[_0x46475d].time);
				}
			}
			_0x47ca3a !== null && _0x319690 !== null && (_0x5c9ab7.push([
				_0x47ca3a,
				_0x319690
			]), _0x47ca3a = null, _0x319690 = null);
		}
		return _0x1dff89.createTimeRanges(_0x5c9ab7);
	}, _0x18ebb6 = function _0x1f53ce(_0xf42af1, _0x59d056) {
		var _0x261f78 = _0xf42af1.addSourceBuffer(_0x59d056), _0x3f4a9c = Object.create(null);
		_0x3f4a9c.updating = false;
		_0x3f4a9c.realBuffer_ = _0x261f78;
		var _0x1eef42 = function _0x326d80(_0x31b64a) {
			if (typeof _0x261f78[_0x31b64a] === 'function') {
				_0x3f4a9c[_0x31b64a] = function () {
					return _0x261f78[_0x31b64a].apply(_0x261f78, arguments);
				};
			} else {
				typeof _0x3f4a9c[_0x31b64a] === 'undefined' && Object.defineProperty(_0x3f4a9c, _0x31b64a, {
					'get': function _0x58b2ee() {
						return _0x261f78[_0x31b64a];
					},
					'set': function _0x39c40a(_0x2a5975) {
						return _0x261f78[_0x31b64a] = _0x2a5975;
					}
				});
			}
		};
		for (var _0x3606cb in _0x261f78) {
			_0x1eef42(_0x3606cb);
		}
		return _0x3f4a9c;
	}, _0x439b7b = function (_0x44d7e8) {
		_0x2b5e46(_0x50fb40, _0x44d7e8);
		function _0x50fb40(_0x27796a, _0x29bb9f) {
			_0x2f247f(this, _0x50fb40);
			var _0x4c99c8 = _0x42d6e2(this, (_0x50fb40['__proto__'] || Object.getPrototypeOf(_0x50fb40)).call(this, _0x1dff89.EventTarget));
			_0x4c99c8.timestampOffset_ = 0;
			_0x4c99c8.pendingBuffers_ = [];
			_0x4c99c8.bufferUpdating_ = false;
			_0x4c99c8.mediaSource_ = _0x27796a;
			_0x4c99c8.codecs_ = _0x29bb9f;
			_0x4c99c8.audioCodec_ = null;
			_0x4c99c8.videoCodec_ = null;
			_0x4c99c8.audioDisabled_ = false;
			_0x4c99c8.appendAudioInitSegment_ = true;
			_0x4c99c8.gopBuffer_ = [];
			_0x4c99c8.timeMapping_ = 0;
			_0x4c99c8.safeAppend_ = _0x1dff89.browser.IE_VERSION >= 11;
			var _0x486b9b = {
				'remux': false,
				'alignGopsAtEnd': _0x4c99c8.safeAppend_
			};
			return _0x4c99c8.codecs_.forEach(function (_0x1c7dde) {
				if (_0xb0f3df(_0x1c7dde)) {
					_0x4c99c8.audioCodec_ = _0x1c7dde;
				} else {
					_0x3e4f93(_0x1c7dde) && (_0x4c99c8.videoCodec_ = _0x1c7dde);
				}
			}), _0x4c99c8.transmuxer_ = new _0x268fc0(), _0x4c99c8.transmuxer_.postMessage({
				'action': 'init',
				'options': _0x486b9b
			}), _0x4c99c8.transmuxer_.onmessage = function (_0x194bf1) {
				if (_0x194bf1.data.action === 'data') {
					return _0x4c99c8.data_(_0x194bf1);
				}
				if (_0x194bf1.data.action === 'done') {
					return _0x4c99c8.done_(_0x194bf1);
				}
				if (_0x194bf1.data.action === 'gopInfo') {
					return _0x4c99c8.appendGopInfo_(_0x194bf1);
				}
			}, Object.defineProperty(_0x4c99c8, 'timestampOffset', {
				'get': function _0x27d0f6() {
					return this.timestampOffset_;
				},
				'set': function _0x56a9a4(_0x463383) {
					typeof _0x463383 === 'number' && _0x463383 >= 0 && (this.timestampOffset_ = _0x463383, this.appendAudioInitSegment_ = true, this.gopBuffer_.length = 0, this.timeMapping_ = 0, this.transmuxer_.postMessage({
						'action': 'setTimestampOffset',
						'timestampOffset': _0x463383
					}));
				}
			}), Object.defineProperty(_0x4c99c8, 'appendWindowStart', {
				'get': function _0x3369cd() {
					return (this.videoBuffer_ || this.audioBuffer_).appendWindowStart;
				},
				'set': function _0xdabc2b(_0x2dbd35) {
					this.videoBuffer_ && (this.videoBuffer_.appendWindowStart = _0x2dbd35);
					this.audioBuffer_ && (this.audioBuffer_.appendWindowStart = _0x2dbd35);
				}
			}), Object.defineProperty(_0x4c99c8, 'updating', {
				'get': function _0x32c384() {
					return !!(this.bufferUpdating_ || !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.updating || this.videoBuffer_ && this.videoBuffer_.updating);
				}
			}), Object.defineProperty(_0x4c99c8, 'buffered', {
				'get': function _0xe41828() {
					return _0x4a3419(this.videoBuffer_, this.audioBuffer_, this.audioDisabled_);
				}
			}), _0x4c99c8;
		}
		return _0x1430d3(_0x50fb40, [
			{
				'key': 'data_',
				'value': function _0x21291f(_0x15053d) {
					var _0x5d85ee = _0x15053d.data.segment;
					_0x5d85ee.data = new Uint8Array(_0x5d85ee.data, _0x15053d.data.byteOffset, _0x15053d.data.byteLength);
					_0x5d85ee.initSegment = new Uint8Array(_0x5d85ee.initSegment.data, _0x5d85ee.initSegment.byteOffset, _0x5d85ee.initSegment.byteLength);
					_0xd4b5fa(this, this.mediaSource_, _0x5d85ee);
					this.pendingBuffers_.push(_0x5d85ee);
					return;
				}
			},
			{
				'key': 'done_',
				'value': function _0x2f9ac9(_0x26be40) {
					if (this.mediaSource_.readyState === 'closed') {
						this.pendingBuffers_.length = 0;
						return;
					}
					this.processPendingSegments_();
					return;
				}
			},
			{
				'key': 'createRealSourceBuffers_',
				'value': function _0xee184c() {
					var _0x4f9bc2 = this, _0x2d7f0d = [
						'audio',
						'video'
					];
					_0x2d7f0d.forEach(function (_0x31a5f7) {
						if (!_0x4f9bc2[_0x31a5f7 + 'Codec_']) {
							return;
						}
						if (_0x4f9bc2[_0x31a5f7 + 'Buffer_']) {
							return;
						}
						var _0x201250 = null;
						if (_0x4f9bc2.mediaSource_[_0x31a5f7 + 'Buffer_']) {
							_0x201250 = _0x4f9bc2.mediaSource_[_0x31a5f7 + 'Buffer_'];
							_0x201250.updating = false;
						} else {
							var _0x485d7e = _0x31a5f7 + 'Codec_', _0x33133a = _0x31a5f7 + '/mp4;codecs="' + _0x4f9bc2[_0x485d7e] + '"';
							_0x201250 = _0x18ebb6(_0x4f9bc2.mediaSource_.nativeMediaSource_, _0x33133a);
							_0x4f9bc2.mediaSource_[_0x31a5f7 + 'Buffer_'] = _0x201250;
						}
						_0x4f9bc2[_0x31a5f7 + 'Buffer_'] = _0x201250;
						[
							'update',
							'updatestart',
							'updateend'
						].forEach(function (_0x2f8f82) {
							_0x201250.addEventListener(_0x2f8f82, function () {
								if (_0x31a5f7 === 'audio' && _0x4f9bc2.audioDisabled_) {
									return;
								}
								_0x2f8f82 === 'updateend' && (_0x4f9bc2[_0x31a5f7 + 'Buffer_'].updating = false);
								var _0x242d8f = _0x2d7f0d.every(function (_0x392466) {
									if (_0x392466 === 'audio' && _0x4f9bc2.audioDisabled_) {
										return true;
									}
									if (_0x31a5f7 !== _0x392466 && _0x4f9bc2[_0x392466 + 'Buffer_'] && _0x4f9bc2[_0x392466 + 'Buffer_'].updating) {
										return false;
									}
									return true;
								});
								if (_0x242d8f) {
									return _0x4f9bc2.trigger(_0x2f8f82);
								}
							});
						});
					});
				}
			},
			{
				'key': 'appendBuffer',
				'value': function _0x4b252c(_0x2160e3) {
					this.bufferUpdating_ = true;
					if (this.audioBuffer_ && this.audioBuffer_.buffered.length) {
						var _0x32a061 = this.audioBuffer_.buffered;
						this.transmuxer_.postMessage({
							'action': 'setAudioAppendStart',
							'appendStart': _0x32a061.end(_0x32a061.length - 1)
						});
					}
					this.videoBuffer_ && this.transmuxer_.postMessage({
						'action': 'alignGopsWith',
						'gopsToAlignWith': _0x3a53a1(this.gopBuffer_, this.mediaSource_.player_ ? this.mediaSource_.player_.currentTime() : null, this.timeMapping_)
					});
					this.transmuxer_.postMessage({
						'action': 'push',
						'data': _0x2160e3.buffer,
						'byteOffset': _0x2160e3.byteOffset,
						'byteLength': _0x2160e3.byteLength
					}, [_0x2160e3.buffer]);
					this.transmuxer_.postMessage({ 'action': 'flush' });
				}
			},
			{
				'key': 'appendGopInfo_',
				'value': function _0x3de453(_0x10d6a8) {
					this.gopBuffer_ = _0x2d0242(this.gopBuffer_, _0x10d6a8.data.gopInfo, this.safeAppend_);
				}
			},
			{
				'key': 'remove',
				'value': function _0x54c6bf(_0x1b5558, _0x48d913) {
					this.videoBuffer_ && (this.videoBuffer_.updating = true, this.videoBuffer_.remove(_0x1b5558, _0x48d913), this.gopBuffer_ = _0x58a2ec(this.gopBuffer_, _0x1b5558, _0x48d913, this.timeMapping_));
					!this.audioDisabled_ && this.audioBuffer_ && (this.audioBuffer_.updating = true, this.audioBuffer_.remove(_0x1b5558, _0x48d913));
					_0x594cb8(_0x1b5558, _0x48d913, this.metadataTrack_);
					if (this.inbandTextTracks_) {
						for (var _0x4e7699 in this.inbandTextTracks_) {
							_0x594cb8(_0x1b5558, _0x48d913, this.inbandTextTracks_[_0x4e7699]);
						}
					}
				}
			},
			{
				'key': 'processPendingSegments_',
				'value': function _0x578bb2() {
					var _0x2402e9 = {
						'video': {
							'segments': [],
							'bytes': 0
						},
						'audio': {
							'segments': [],
							'bytes': 0
						},
						'captions': [],
						'metadata': []
					};
					_0x2402e9 = this.pendingBuffers_.reduce(function (_0x3c895a, _0x8b2a67) {
						var _0x3f6f62 = _0x8b2a67.type, _0xbaa302 = _0x8b2a67.data, _0x1a798 = _0x8b2a67.initSegment;
						return _0x3c895a[_0x3f6f62].segments.push(_0xbaa302), _0x3c895a[_0x3f6f62].bytes += _0xbaa302.byteLength, _0x3c895a[_0x3f6f62].initSegment = _0x1a798, _0x8b2a67.captions && (_0x3c895a.captions = _0x3c895a.captions.concat(_0x8b2a67.captions)), _0x8b2a67.info && (_0x3c895a[_0x3f6f62].info = _0x8b2a67.info), _0x8b2a67.metadata && (_0x3c895a.metadata = _0x3c895a.metadata.concat(_0x8b2a67.metadata)), _0x3c895a;
					}, _0x2402e9);
					!this.videoBuffer_ && !this.audioBuffer_ && (_0x2402e9.video.bytes === 0 && (this.videoCodec_ = null), _0x2402e9.audio.bytes === 0 && (this.audioCodec_ = null), this.createRealSourceBuffers_());
					_0x2402e9.audio.info && this.mediaSource_.trigger({
						'type': 'audioinfo',
						'info': _0x2402e9.audio.info
					});
					_0x2402e9.video.info && this.mediaSource_.trigger({
						'type': 'videoinfo',
						'info': _0x2402e9.video.info
					});
					this.appendAudioInitSegment_ && (!this.audioDisabled_ && this.audioBuffer_ && (_0x2402e9.audio.segments.unshift(_0x2402e9.audio.initSegment), _0x2402e9.audio.bytes += _0x2402e9.audio.initSegment.byteLength), this.appendAudioInitSegment_ = false);
					var _0x2f7c23 = false;
					if (this.videoBuffer_ && _0x2402e9.video.bytes) {
						_0x2402e9.video.segments.unshift(_0x2402e9.video.initSegment);
						_0x2402e9.video.bytes += _0x2402e9.video.initSegment.byteLength;
						this.concatAndAppendSegments_(_0x2402e9.video, this.videoBuffer_);
						_0x313f98(this, _0x2402e9.captions, _0x2402e9.metadata);
					} else {
						this.videoBuffer_ && (this.audioDisabled_ || !this.audioBuffer_) && (_0x2f7c23 = true);
					}
					!this.audioDisabled_ && this.audioBuffer_ && this.concatAndAppendSegments_(_0x2402e9.audio, this.audioBuffer_);
					this.pendingBuffers_.length = 0;
					_0x2f7c23 && this.trigger('updateend');
					this.bufferUpdating_ = false;
				}
			},
			{
				'key': 'concatAndAppendSegments_',
				'value': function _0x3ca488(_0x4f1c5d, _0x3295c4) {
					var _0x95cffb = 0, _0x317d3c = void 0;
					if (_0x4f1c5d.bytes) {
						_0x317d3c = new Uint8Array(_0x4f1c5d.bytes);
						_0x4f1c5d.segments.forEach(function (_0x1149a7) {
							_0x317d3c.set(_0x1149a7, _0x95cffb);
							_0x95cffb += _0x1149a7.byteLength;
						});
						try {
							_0x3295c4.updating = true;
							_0x3295c4.appendBuffer(_0x317d3c);
						} catch (_0x6e0e8) {
							this.mediaSource_.player_ && this.mediaSource_.player_.error({
								'code': -3,
								'type': 'APPEND_BUFFER_ERR',
								'message': _0x6e0e8.message,
								'originalError': _0x6e0e8
							});
						}
					}
				}
			},
			{
				'key': 'abort',
				'value': function _0x165f70() {
					this.videoBuffer_ && this.videoBuffer_.abort();
					!this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.abort();
					this.transmuxer_ && this.transmuxer_.postMessage({ 'action': 'reset' });
					this.pendingBuffers_.length = 0;
					this.bufferUpdating_ = false;
				}
			}
		]), _0x50fb40;
	}(_0x1dff89.EventTarget), _0x330641 = function (_0x522d09) {
		_0x2b5e46(_0x52e1c9, _0x522d09);
		function _0x52e1c9() {
			_0x2f247f(this, _0x52e1c9);
			var _0x262984 = _0x42d6e2(this, (_0x52e1c9['__proto__'] || Object.getPrototypeOf(_0x52e1c9)).call(this)), _0x3fafb4 = void 0;
			_0x262984.nativeMediaSource_ = new _0x562c10.MediaSource();
			for (_0x3fafb4 in _0x262984.nativeMediaSource_) {
				!(_0x3fafb4 in _0x52e1c9.prototype) && typeof _0x262984.nativeMediaSource_[_0x3fafb4] === 'function' && (_0x262984[_0x3fafb4] = _0x262984.nativeMediaSource_[_0x3fafb4].bind(_0x262984.nativeMediaSource_));
			}
			return _0x262984.duration_ = NaN, Object.defineProperty(_0x262984, 'duration', {
				'get': function _0x3374bf() {
					if (this.duration_ === Infinity) {
						return this.duration_;
					}
					return this.nativeMediaSource_.duration;
				},
				'set': function _0xa06c16(_0x3a833a) {
					this.duration_ = _0x3a833a;
					if (_0x3a833a !== Infinity) {
						this.nativeMediaSource_.duration = _0x3a833a;
						return;
					}
				}
			}), Object.defineProperty(_0x262984, 'seekable', {
				'get': function _0x1de583() {
					if (this.duration_ === Infinity) {
						return _0x1dff89.createTimeRanges([[
							0,
							this.nativeMediaSource_.duration
						]]);
					}
					return this.nativeMediaSource_.seekable;
				}
			}), Object.defineProperty(_0x262984, 'readyState', {
				'get': function _0x1b170e() {
					return this.nativeMediaSource_.readyState;
				}
			}), Object.defineProperty(_0x262984, 'activeSourceBuffers', {
				'get': function _0x248d77() {
					return this.activeSourceBuffers_;
				}
			}), _0x262984.sourceBuffers = [], _0x262984.activeSourceBuffers_ = [], _0x262984.updateActiveSourceBuffers_ = function () {
				_0x262984.activeSourceBuffers_.length = 0;
				if (_0x262984.sourceBuffers.length === 1) {
					var _0x2cfb2f = _0x262984.sourceBuffers[0];
					_0x2cfb2f.appendAudioInitSegment_ = true;
					_0x2cfb2f.audioDisabled_ = !_0x2cfb2f.audioCodec_;
					_0x262984.activeSourceBuffers_.push(_0x2cfb2f);
					return;
				}
				var _0x527ad6 = false, _0x36cc3c = true;
				for (var _0x801a78 = 0; _0x801a78 < _0x262984.player_.audioTracks().length; _0x801a78++) {
					var _0x2ecadc = _0x262984.player_.audioTracks()[_0x801a78];
					if (_0x2ecadc.enabled && _0x2ecadc.kind !== 'main') {
						_0x527ad6 = true;
						_0x36cc3c = false;
						break;
					}
				}
				_0x262984.sourceBuffers.forEach(function (_0x23f2d2, _0x2e3340) {
					_0x23f2d2.appendAudioInitSegment_ = true;
					if (_0x23f2d2.videoCodec_ && _0x23f2d2.audioCodec_) {
						_0x23f2d2.audioDisabled_ = _0x527ad6;
					} else {
						if (_0x23f2d2.videoCodec_ && !_0x23f2d2.audioCodec_) {
							_0x23f2d2.audioDisabled_ = true;
							_0x36cc3c = false;
						} else {
							if (!_0x23f2d2.videoCodec_ && _0x23f2d2.audioCodec_) {
								_0x23f2d2.audioDisabled_ = _0x2e3340 ? _0x36cc3c : !_0x36cc3c;
								if (_0x23f2d2.audioDisabled_) {
									return;
								}
							}
						}
					}
					_0x262984.activeSourceBuffers_.push(_0x23f2d2);
				});
			}, _0x262984.onPlayerMediachange_ = function () {
				_0x262984.sourceBuffers.forEach(function (_0x4b7243) {
					_0x4b7243.appendAudioInitSegment_ = true;
				});
			}, _0x262984.onHlsReset_ = function () {
				_0x262984.sourceBuffers.forEach(function (_0x103dfb) {
					_0x103dfb.transmuxer_ && _0x103dfb.transmuxer_.postMessage({ 'action': 'resetCaptions' });
				});
			}, _0x262984.onHlsSegmentTimeMapping_ = function (_0x2f6b56) {
				_0x262984.sourceBuffers.forEach(function (_0x1b2aa6) {
					return _0x1b2aa6.timeMapping_ = _0x2f6b56.mapping;
				});
			}, [
				'sourceopen',
				'sourceclose',
				'sourceended'
			].forEach(function (_0x2d8f9b) {
				this.nativeMediaSource_.addEventListener(_0x2d8f9b, this.trigger.bind(this));
			}, _0x262984), _0x262984.on('sourceopen', function (_0x40f13e) {
				var _0x3cbd99 = _0x5d8ee4.querySelector('[src="' + _0x262984.url_ + '"]');
				if (!_0x3cbd99) {
					return;
				}
				_0x262984.player_ = _0x1dff89(_0x3cbd99.parentNode);
				_0x262984.player_.tech_.on('hls-reset', _0x262984.onHlsReset_);
				_0x262984.player_.tech_.on('hls-segment-time-mapping', _0x262984.onHlsSegmentTimeMapping_);
				_0x262984.player_.audioTracks && _0x262984.player_.audioTracks() && (_0x262984.player_.audioTracks().on('change', _0x262984.updateActiveSourceBuffers_), _0x262984.player_.audioTracks().on('addtrack', _0x262984.updateActiveSourceBuffers_), _0x262984.player_.audioTracks().on('removetrack', _0x262984.updateActiveSourceBuffers_));
				_0x262984.player_.on('mediachange', _0x262984.onPlayerMediachange_);
			}), _0x262984.on('sourceended', function (_0x2f82b9) {
				var _0x4de925 = _0x2d0089(_0x262984.duration);
				for (var _0x4dc147 = 0; _0x4dc147 < _0x262984.sourceBuffers.length; _0x4dc147++) {
					var _0x485780 = _0x262984.sourceBuffers[_0x4dc147], _0x549cce = _0x485780.metadataTrack_ && _0x485780.metadataTrack_.cues;
					_0x549cce && _0x549cce.length && (_0x549cce[_0x549cce.length - 1].endTime = _0x4de925);
				}
			}), _0x262984.on('sourceclose', function (_0x3f37ab) {
				this.sourceBuffers.forEach(function (_0x39b055) {
					_0x39b055.transmuxer_ && _0x39b055.transmuxer_.terminate();
				});
				this.sourceBuffers.length = 0;
				if (!this.player_) {
					return;
				}
				this.player_.audioTracks && this.player_.audioTracks() && (this.player_.audioTracks().off('change', this.updateActiveSourceBuffers_), this.player_.audioTracks().off('addtrack', this.updateActiveSourceBuffers_), this.player_.audioTracks().off('removetrack', this.updateActiveSourceBuffers_));
				this.player_.el_ && (this.player_.off('mediachange', this.onPlayerMediachange_), this.player_.tech_.off('hls-reset', this.onHlsReset_), this.player_.tech_.off('hls-segment-time-mapping', this.onHlsSegmentTimeMapping_));
			}), _0x262984;
		}
		return _0x1430d3(_0x52e1c9, [
			{
				'key': 'addSeekableRange_',
				'value': function _0x51c8bb(_0x43dddf, _0x3ddcdc) {
					var _0xa642bd = void 0;
					if (this.duration !== Infinity) {
						_0xa642bd = new Error('MediaSource.addSeekableRange() can only be invoked when the duration is Infinity');
						_0xa642bd.name = 'InvalidStateError';
						_0xa642bd.code = 11;
						throw _0xa642bd;
					}
					(_0x3ddcdc > this.nativeMediaSource_.duration || isNaN(this.nativeMediaSource_.duration)) && (this.nativeMediaSource_.duration = _0x3ddcdc);
				}
			},
			{
				'key': 'addSourceBuffer',
				'value': function _0x1e5889(_0x35756f) {
					var _0x518a40 = void 0, _0x31257b = _0xb26514(_0x35756f);
					if (/^(video|audio)\/mp2t$/i.test(_0x31257b.type)) {
						var _0x4e56db = [];
						_0x31257b.parameters && _0x31257b.parameters.codecs && (_0x4e56db = _0x31257b.parameters.codecs.split(','), _0x4e56db = _0x184d0b(_0x4e56db), _0x4e56db = _0x4e56db.filter(function (_0x40058c) {
							return _0xb0f3df(_0x40058c) || _0x3e4f93(_0x40058c);
						}));
						_0x4e56db.length === 0 && (_0x4e56db = [
							'avc1.4d400d',
							'mp4a.40.2'
						]);
						_0x518a40 = new _0x439b7b(this, _0x4e56db);
						if (this.sourceBuffers.length !== 0) {
							this.sourceBuffers[0].createRealSourceBuffers_();
							_0x518a40.createRealSourceBuffers_();
							this.sourceBuffers[0].audioDisabled_ = true;
						}
					} else {
						_0x518a40 = this.nativeMediaSource_.addSourceBuffer(_0x35756f);
					}
					return this.sourceBuffers.push(_0x518a40), _0x518a40;
				}
			}
		]), _0x52e1c9;
	}(_0x1dff89.EventTarget), _0x5f2589 = 0;
	_0x1dff89.mediaSources = {};
	var _0x1c04ff = function _0x2f158b(_0x30426b, _0x5001fc) {
		var _0x4c2775 = _0x1dff89.mediaSources[_0x30426b];
		if (_0x4c2775) {
			_0x4c2775.trigger({
				'type': 'sourceopen',
				'swfId': _0x5001fc
			});
		} else {
			throw new Error('Media Source not found (Video.js)');
		}
	}, _0x40a443 = function _0x2ab30f() {
		return !!_0x562c10.MediaSource && !!_0x562c10.MediaSource.isTypeSupported && _0x562c10.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"');
	}, _0x1ddc09 = function _0x4f07fd() {
		this.MediaSource = {
			'open': _0x1c04ff,
			'supportsNativeMediaSources': _0x40a443
		};
		if (_0x40a443()) {
			return new _0x330641();
		}
		throw new Error('Cannot use create a virtual MediaSource for this video');
	};
	_0x1ddc09.open = _0x1c04ff;
	_0x1ddc09.supportsNativeMediaSources = _0x40a443;
	var _0x16efa7 = {
		'createObjectURL': function _0x4721ff(_0x391479) {
			var _0x560851 = 'blob:vjs-media-source/', _0x5342f0 = void 0;
			if (_0x391479 instanceof _0x330641) {
				return _0x5342f0 = _0x562c10.URL.createObjectURL(_0x391479.nativeMediaSource_), _0x391479.url_ = _0x5342f0, _0x5342f0;
			}
			if (!(_0x391479 instanceof _0x330641)) {
				return _0x5342f0 = _0x562c10.URL.createObjectURL(_0x391479), _0x391479.url_ = _0x5342f0, _0x5342f0;
			}
			return _0x5342f0 = _0x560851 + _0x5f2589, _0x5f2589++, _0x1dff89.mediaSources[_0x5342f0] = _0x391479, _0x5342f0;
		}
	};
	_0x1dff89.MediaSource = _0x1ddc09;
	_0x1dff89.URL = _0x16efa7;
	var _0x12a1b3 = _0x1dff89.EventTarget, _0x340397 = _0x1dff89.mergeOptions, _0x1ec878 = function _0xdac8bd(_0x238261, _0x2ac00c) {
		var _0xc6562 = _0x340397(_0x238261, {
			'duration': _0x2ac00c.duration,
			'minimumUpdatePeriod': _0x2ac00c.minimumUpdatePeriod
		});
		for (var _0x3d5aa3 = 0; _0x3d5aa3 < _0x2ac00c.playlists.length; _0x3d5aa3++) {
			var _0x4daf8f = _0x4b328f(_0xc6562, _0x2ac00c.playlists[_0x3d5aa3]);
			_0x4daf8f && (_0xc6562 = _0x4daf8f);
		}
		return _0xbd030b(_0x2ac00c, function (_0x20a456, _0x2272a8, _0xc1253, _0x5a7dae) {
			if (_0x20a456.playlists && _0x20a456.playlists.length) {
				var _0x109249 = _0x20a456.playlists[0].uri, _0x3d5267 = _0x4b328f(_0xc6562, _0x20a456.playlists[0]);
				_0x3d5267 && (_0xc6562 = _0x3d5267, _0xc6562.mediaGroups[_0x2272a8][_0xc1253][_0x5a7dae].playlists[0] = _0xc6562.playlists[_0x109249]);
			}
		}), _0xc6562;
	}, _0x1ea357 = function (_0xfeee70) {
		_0x2b5e46(_0x16fde4, _0xfeee70);
		function _0x16fde4(_0x143ef3, _0xdc6b6, _0x190995, _0x227036) {
			_0x2f247f(this, _0x16fde4);
			var _0x5f08a9 = _0x42d6e2(this, (_0x16fde4['__proto__'] || Object.getPrototypeOf(_0x16fde4)).call(this));
			_0x5f08a9.hls_ = _0xdc6b6;
			_0x5f08a9.withCredentials = _0x190995;
			if (!_0x143ef3) {
				throw new Error('A non-empty playlist URL or playlist is required');
			}
			_0x5f08a9.on('minimumUpdatePeriod', function () {
				_0x5f08a9.refreshXml_();
			});
			_0x5f08a9.on('mediaupdatetimeout', function () {
				_0x5f08a9.refreshMedia_();
			});
			if (typeof _0x143ef3 === 'string') {
				return _0x5f08a9.srcUrl = _0x143ef3, _0x5f08a9.state = 'HAVE_NOTHING', _0x42d6e2(_0x5f08a9);
			}
			return _0x5f08a9.masterPlaylistLoader_ = _0x227036, _0x5f08a9.state = 'HAVE_METADATA', _0x5f08a9.started = true, _0x5f08a9.media(_0x143ef3), _0x562c10.setTimeout(function () {
				_0x5f08a9.trigger('loadedmetadata');
			}, 0), _0x5f08a9;
		}
		return _0x1430d3(_0x16fde4, [
			{
				'key': 'dispose',
				'value': function _0x4446bc() {
					this.stopRequest();
					_0x562c10.clearTimeout(this.mediaUpdateTimeout);
				}
			},
			{
				'key': 'stopRequest',
				'value': function _0x45e29f() {
					if (this.request) {
						var _0x5b05ac = this.request;
						this.request = null;
						_0x5b05ac.onreadystatechange = null;
						_0x5b05ac.abort();
					}
				}
			},
			{
				'key': 'media',
				'value': function _0x5dbe8a(_0x395569) {
					if (!_0x395569) {
						return this.media_;
					}
					if (this.state === 'HAVE_NOTHING') {
						throw new Error('Cannot switch media playlist from ' + this.state);
					}
					var _0x493ee4 = this.state;
					if (typeof _0x395569 === 'string') {
						if (!this.master.playlists[_0x395569]) {
							throw new Error('Unknown playlist URI: ' + _0x395569);
						}
						_0x395569 = this.master.playlists[_0x395569];
					}
					var _0x17d6f2 = !this.media_ || _0x395569.uri !== this.media_.uri;
					this.state = 'HAVE_METADATA';
					if (!_0x17d6f2) {
						return;
					}
					this.media_ && this.trigger('mediachanging');
					this.media_ = _0x395569;
					this.refreshMedia_();
					_0x493ee4 !== 'HAVE_MASTER' && this.trigger('mediachange');
				}
			},
			{
				'key': 'pause',
				'value': function _0x5ed5ea() {
					this.stopRequest();
					this.state === 'HAVE_NOTHING' && (this.started = false);
				}
			},
			{
				'key': 'load',
				'value': function _0x56c15c() {
					if (!this.started) {
						this.start();
						return;
					}
					this.trigger('loadedplaylist');
				}
			},
			{
				'key': 'parseMasterXml',
				'value': function _0x2653cf() {
					var _0x19e4f6 = _0x1632b3(this.masterXml_, {
						'manifestUri': this.srcUrl,
						'clientOffset': this.clientOffset_
					});
					_0x19e4f6.uri = this.srcUrl;
					for (var _0x5ab573 = 0; _0x5ab573 < _0x19e4f6.playlists.length; _0x5ab573++) {
						var _0x3e54b9 = 'placeholder-uri-' + _0x5ab573;
						_0x19e4f6.playlists[_0x5ab573].uri = _0x3e54b9;
						_0x19e4f6.playlists[_0x3e54b9] = _0x19e4f6.playlists[_0x5ab573];
					}
					return _0xbd030b(_0x19e4f6, function (_0x5d6dd4, _0x1e761d, _0x340f35, _0x1249f5) {
						if (_0x5d6dd4.playlists && _0x5d6dd4.playlists.length) {
							var _0x465454 = 'placeholder-uri-' + _0x1e761d + '-' + _0x340f35 + '-' + _0x1249f5;
							_0x5d6dd4.playlists[0].uri = _0x465454;
							_0x19e4f6.playlists[_0x465454] = _0x5d6dd4.playlists[0];
						}
					}), _0x327f96(_0x19e4f6), _0x44bfbf(_0x19e4f6), _0x19e4f6;
				}
			},
			{
				'key': 'start',
				'value': function _0x576cb6() {
					var _0x372266 = this;
					this.started = true;
					this.request = this.hls_.xhr({
						'uri': this.srcUrl,
						'withCredentials': this.withCredentials
					}, function (_0x4a8178, _0x573fba) {
						if (!_0x372266.request) {
							return;
						}
						_0x372266.request = null;
						if (_0x4a8178) {
							return _0x372266.error = {
								'status': _0x573fba.status,
								'message': 'DASH playlist request error at URL: ' + _0x372266.srcUrl,
								'responseText': _0x573fba.responseText,
								'code': 2
							}, _0x372266.state === 'HAVE_NOTHING' && (_0x372266.started = false), _0x372266.trigger('error');
						}
						_0x372266.masterXml_ = _0x573fba.responseText;
						_0x573fba.responseHeaders && _0x573fba.responseHeaders.date ? _0x372266.masterLoaded_ = Date.parse(_0x573fba.responseHeaders.date) : _0x372266.masterLoaded_ = Date.now();
						_0x372266.syncClientServerClock_(_0x372266.onClientServerClockSync_.bind(_0x372266));
					});
				}
			},
			{
				'key': 'syncClientServerClock_',
				'value': function _0x1b5af0(_0x82865a) {
					var _0x45b2c3 = this, _0x45b078 = _0x7ab1bf(this.masterXml_);
					if (_0x45b078 === null) {
						return this.clientOffset_ = this.masterLoaded_ - Date.now(), _0x82865a();
					}
					if (_0x45b078.method === 'DIRECT') {
						return this.clientOffset_ = _0x45b078.value - Date.now(), _0x82865a();
					}
					this.request = this.hls_.xhr({
						'uri': _0x1ef660(this.srcUrl, _0x45b078.value),
						'method': _0x45b078.method,
						'withCredentials': this.withCredentials
					}, function (_0x4407e9, _0x12b6cc) {
						if (!_0x45b2c3.request) {
							return;
						}
						if (_0x4407e9) {
							return _0x45b2c3.clientOffset_ = _0x45b2c3.masterLoaded_ - Date.now(), _0x82865a();
						}
						var _0x2338b3 = void 0;
						_0x45b078.method === 'HEAD' ? !_0x12b6cc.responseHeaders || !_0x12b6cc.responseHeaders.date ? _0x2338b3 = _0x45b2c3.masterLoaded_ : _0x2338b3 = Date.parse(_0x12b6cc.responseHeaders.date) : _0x2338b3 = Date.parse(_0x12b6cc.responseText);
						_0x45b2c3.clientOffset_ = _0x2338b3 - Date.now();
						_0x82865a();
					});
				}
			},
			{
				'key': 'onClientServerClockSync_',
				'value': function _0x5db4c5() {
					var _0x511cdc = this;
					this.master = this.parseMasterXml();
					this.state = 'HAVE_MASTER';
					this.trigger('loadedplaylist');
					!this.media_ && this.media(this.master.playlists[0]);
					_0x562c10.setTimeout(function () {
						_0x511cdc.trigger('loadedmetadata');
					}, 0);
					this.master.minimumUpdatePeriod && _0x562c10.setTimeout(function () {
						_0x511cdc.trigger('minimumUpdatePeriod');
					}, this.master.minimumUpdatePeriod);
				}
			},
			{
				'key': 'refreshXml_',
				'value': function _0x97b18() {
					var _0xcea391 = this;
					this.request = this.hls_.xhr({
						'uri': this.srcUrl,
						'withCredentials': this.withCredentials
					}, function (_0x5d52e7, _0xe42cd6) {
						if (!_0xcea391.request) {
							return;
						}
						_0xcea391.request = null;
						if (_0x5d52e7) {
							return _0xcea391.error = {
								'status': _0xe42cd6.status,
								'message': 'DASH playlist request error at URL: ' + _0xcea391.srcUrl,
								'responseText': _0xe42cd6.responseText,
								'code': 2
							}, _0xcea391.state === 'HAVE_NOTHING' && (_0xcea391.started = false), _0xcea391.trigger('error');
						}
						_0xcea391.masterXml_ = _0xe42cd6.responseText;
						var _0x2abaf4 = _0xcea391.parseMasterXml();
						_0xcea391.master = _0x1ec878(_0xcea391.master, _0x2abaf4);
						_0x562c10.setTimeout(function () {
							_0xcea391.trigger('minimumUpdatePeriod');
						}, _0xcea391.master.minimumUpdatePeriod);
					});
				}
			},
			{
				'key': 'refreshMedia_',
				'value': function _0x1dd00b() {
					var _0x93692f = this, _0x5e4c70 = void 0, _0x386e39 = void 0;
					this.masterPlaylistLoader_ ? (_0x5e4c70 = this.masterPlaylistLoader_.master, _0x386e39 = this.masterPlaylistLoader_.parseMasterXml()) : (_0x5e4c70 = this.master, _0x386e39 = this.parseMasterXml());
					var _0x5a681b = _0x1ec878(_0x5e4c70, _0x386e39);
					_0x5a681b ? (this.masterPlaylistLoader_ ? this.masterPlaylistLoader_.master = _0x5a681b : this.master = _0x5a681b, this.media_ = _0x5a681b.playlists[this.media_.uri]) : this.trigger('playlistunchanged');
					!this.media().endList && (this.mediaUpdateTimeout = _0x562c10.setTimeout(function () {
						_0x93692f.trigger('mediaupdatetimeout');
					}, _0x590709(this.media(), !!_0x5a681b)));
					this.trigger('loadedplaylist');
				}
			}
		]), _0x16fde4;
	}(_0x12a1b3), _0x5f01a6 = function _0x13522f(_0x1fd33e) {
		if (_0x1dff89.log.debug) {
			return _0x1dff89.log.debug.bind(_0x1dff89, 'VHS:', _0x1fd33e + ' >');
		}
		return function () {
		};
	};
	function _0x4c405b() {
	}
	var _0x51a0d0 = (function () {
		function _0x400de6(_0x27a2fb, _0x4bcde9, _0x5654a8, _0x3526b7) {
			_0x2f247f(this, _0x400de6);
			this.callbacks_ = [];
			this.pendingCallback_ = null;
			this.timestampOffset_ = 0;
			this.mediaSource = _0x27a2fb;
			this.processedAppend_ = false;
			this.type_ = _0x5654a8;
			this.mimeType_ = _0x4bcde9;
			this.logger_ = _0x5f01a6('SourceUpdater[' + _0x5654a8 + '][' + _0x4bcde9 + ']');
			_0x27a2fb.readyState === 'closed' ? _0x27a2fb.addEventListener('sourceopen', this.createSourceBuffer_.bind(this, _0x4bcde9, _0x3526b7)) : this.createSourceBuffer_(_0x4bcde9, _0x3526b7);
		}
		return _0x1430d3(_0x400de6, [
			{
				'key': 'createSourceBuffer_',
				'value': function _0x3b2fb(_0x2571e0, _0x39a9c3) {
					var _0x2fb04f = this;
					this.sourceBuffer_ = this.mediaSource.addSourceBuffer(_0x2571e0);
					this.logger_('created SourceBuffer');
					if (_0x39a9c3) {
						_0x39a9c3.trigger('sourcebufferadded');
						if (this.mediaSource.sourceBuffers.length < 2) {
							_0x39a9c3.on('sourcebufferadded', function () {
								_0x2fb04f.start_();
							});
							return;
						}
					}
					this.start_();
				}
			},
			{
				'key': 'start_',
				'value': function _0x1cf2b0() {
					var _0x1aed40 = this;
					this.started_ = true;
					this.onUpdateendCallback_ = function () {
						var _0x55cdf7 = _0x1aed40.pendingCallback_;
						_0x1aed40.pendingCallback_ = null;
						_0x1aed40.logger_('buffered [' + _0x315dc9(_0x1aed40.buffered()) + ']');
						_0x55cdf7 && _0x55cdf7();
						_0x1aed40.runCallback_();
					};
					this.sourceBuffer_.addEventListener('updateend', this.onUpdateendCallback_);
					this.runCallback_();
				}
			},
			{
				'key': 'abort',
				'value': function _0x194785(_0x313522) {
					var _0x3c3920 = this;
					this.processedAppend_ && this.queueCallback_(function () {
						_0x3c3920.sourceBuffer_.abort();
					}, _0x313522);
				}
			},
			{
				'key': 'appendBuffer',
				'value': function _0x2f688e(_0x14e04a, _0x1f1da4) {
					var _0x314458 = this;
					this.processedAppend_ = true;
					this.queueCallback_(function () {
						_0x314458.sourceBuffer_.appendBuffer(_0x14e04a);
					}, _0x1f1da4);
				}
			},
			{
				'key': 'buffered',
				'value': function _0x60f0db() {
					if (!this.sourceBuffer_) {
						return _0x1dff89.createTimeRanges();
					}
					return this.sourceBuffer_.buffered;
				}
			},
			{
				'key': 'remove',
				'value': function _0x15e822(_0x288639, _0x1e9c00) {
					var _0x5e7e38 = this, _0x468f35 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _0x4c405b;
					this.processedAppend_ && this.queueCallback_(function () {
						_0x5e7e38.logger_('remove [' + _0x288639 + ' => ' + _0x1e9c00 + ']');
						_0x5e7e38.sourceBuffer_.remove(_0x288639, _0x1e9c00);
					}, _0x468f35);
				}
			},
			{
				'key': 'updating',
				'value': function _0x483f8c() {
					return !this.sourceBuffer_ || this.sourceBuffer_.updating || this.pendingCallback_;
				}
			},
			{
				'key': 'timestampOffset',
				'value': function _0x4e1f2a(_0x17f51c) {
					var _0x36a86a = this;
					return typeof _0x17f51c !== 'undefined' && (this.queueCallback_(function () {
						_0x36a86a.sourceBuffer_.timestampOffset = _0x17f51c;
					}), this.timestampOffset_ = _0x17f51c), this.timestampOffset_;
				}
			},
			{
				'key': 'queueCallback_',
				'value': function _0xa4d230(_0x47dffb, _0x1177b3) {
					this.callbacks_.push([
						_0x47dffb.bind(this),
						_0x1177b3
					]);
					this.runCallback_();
				}
			},
			{
				'key': 'runCallback_',
				'value': function _0x151bc4() {
					var _0x5d477a = void 0;
					!this.updating() && this.callbacks_.length && this.started_ && (_0x5d477a = this.callbacks_.shift(), this.pendingCallback_ = _0x5d477a[1], _0x5d477a[0]());
				}
			},
			{
				'key': 'dispose',
				'value': function _0x4b33ac() {
					this.sourceBuffer_.removeEventListener('updateend', this.onUpdateendCallback_);
					this.sourceBuffer_ && this.mediaSource.readyState === 'open' && this.sourceBuffer_.abort();
				}
			}
		]), _0x400de6;
	}()), _0x4d93f7 = {
		'FAILURE': 2,
		'TIMEOUT': -101,
		'ABORTED': -102
	}, _0x52e75c = function _0x400843(_0x156ef8) {
		var _0xe74c6 = void 0, _0x307f27 = void 0;
		return _0x307f27 = _0x156ef8.offset + _0x156ef8.length - 1, _0xe74c6 = _0x156ef8.offset, 'bytes=' + _0xe74c6 + '-' + _0x307f27;
	}, _0x2e6c52 = function _0x4eb328(_0x3f91a0) {
		var _0x4d3165 = {};
		return _0x3f91a0.byterange && (_0x4d3165.Range = _0x52e75c(_0x3f91a0.byterange)), _0x4d3165;
	}, _0x5b0b74 = function _0x38bc68(_0x293471) {
		_0x293471.forEach(function (_0x45da5a) {
			_0x45da5a.abort();
		});
	}, _0x11bb5c = function _0x4f3f70(_0x21910d) {
		return {
			'bandwidth': _0x21910d.bandwidth,
			'bytesReceived': _0x21910d.bytesReceived || 0,
			'roundTripTime': _0x21910d.roundTripTime || 0
		};
	}, _0x1c62bf = function _0x245b1b(_0x4bb954) {
		var _0x4f99f6 = _0x4bb954.target, _0xcb0abf = Date.now() - _0x4f99f6.requestTime, _0x217740 = {
			'bandwidth': Infinity,
			'bytesReceived': 0,
			'roundTripTime': _0xcb0abf || 0
		};
		return _0x217740.bytesReceived = _0x4bb954.loaded, _0x217740.bandwidth = Math.floor(_0x217740.bytesReceived / _0x217740.roundTripTime * 8 * 1000), _0x217740;
	}, _0x2adc71 = function _0x117253(_0xcbd39a, _0x4061df) {
		if (_0x4061df.timedout) {
			return {
				'status': _0x4061df.status,
				'message': 'HLS request timed-out at URL: ' + _0x4061df.uri,
				'code': _0x4d93f7.TIMEOUT,
				'xhr': _0x4061df
			};
		}
		if (_0x4061df.aborted) {
			return {
				'status': _0x4061df.status,
				'message': 'HLS request aborted at URL: ' + _0x4061df.uri,
				'code': _0x4d93f7.ABORTED,
				'xhr': _0x4061df
			};
		}
		if (_0xcbd39a) {
			return {
				'status': _0x4061df.status,
				'message': 'HLS request errored at URL: ' + _0x4061df.uri,
				'code': _0x4d93f7.FAILURE,
				'xhr': _0x4061df
			};
		}
		return null;
	}, _0x52d96f = function _0x120969(_0x3a1488, _0x5e5a6c) {
		return function (_0x2267ad, _0x5501d9) {
			var _0x46c84e = _0x5501d9.response, _0x334662 = _0x2adc71(_0x2267ad, _0x5501d9);
			if (_0x334662) {
				return _0x5e5a6c(_0x334662, _0x3a1488);
			}
			if (_0x46c84e.byteLength !== 16) {
				return _0x5e5a6c({
					'status': _0x5501d9.status,
					'message': 'Invalid HLS key at URL: ' + _0x5501d9.uri,
					'code': _0x4d93f7.FAILURE,
					'xhr': _0x5501d9
				}, _0x3a1488);
			}
			var _0x5eeba1 = new DataView(_0x46c84e);
			return _0x3a1488.key.bytes = new Uint32Array([
				_0x5eeba1.getUint32(0),
				_0x5eeba1.getUint32(4),
				_0x5eeba1.getUint32(8),
				_0x5eeba1.getUint32(12)
			]), _0x5e5a6c(null, _0x3a1488);
		};
	}, _0x343de9 = function _0x30203f(_0x23bab8, _0x288a3d, _0x19913b) {
		return function (_0x12d653, _0x5b082e) {
			var _0x11e41c = _0x5b082e.response, _0x7e8f79 = _0x2adc71(_0x12d653, _0x5b082e);
			if (_0x7e8f79) {
				return _0x19913b(_0x7e8f79, _0x23bab8);
			}
			if (_0x11e41c.byteLength === 0) {
				return _0x19913b({
					'status': _0x5b082e.status,
					'message': 'Empty HLS segment content at URL: ' + _0x5b082e.uri,
					'code': _0x4d93f7.FAILURE,
					'xhr': _0x5b082e
				}, _0x23bab8);
			}
			return _0x23bab8.map.bytes = new Uint8Array(_0x5b082e.response), !_0x288a3d.isInitialized() && _0x288a3d.init(), _0x23bab8.map.timescales = _0x104ab6.timescale(_0x23bab8.map.bytes), _0x23bab8.map.videoTrackIds = _0x104ab6.videoTrackIds(_0x23bab8.map.bytes), _0x19913b(null, _0x23bab8);
		};
	}, _0x375d1a = function _0x3f7693(_0x102070, _0x4aba75, _0x196265) {
		return function (_0x3638b4, _0x290df3) {
			var _0x4e81df = _0x290df3.response, _0xc6183f = _0x2adc71(_0x3638b4, _0x290df3), _0xf0da7b = void 0;
			if (_0xc6183f) {
				return _0x196265(_0xc6183f, _0x102070);
			}
			if (_0x4e81df.byteLength === 0) {
				return _0x196265({
					'status': _0x290df3.status,
					'message': 'Empty HLS segment content at URL: ' + _0x290df3.uri,
					'code': _0x4d93f7.FAILURE,
					'xhr': _0x290df3
				}, _0x102070);
			}
			return _0x102070.stats = _0x11bb5c(_0x290df3), _0x102070.key ? _0x102070.encryptedBytes = new Uint8Array(_0x290df3.response) : _0x102070.bytes = new Uint8Array(_0x290df3.response), _0x102070.map && _0x102070.map.bytes && (!_0x4aba75.isInitialized() && _0x4aba75.init(), _0xf0da7b = _0x4aba75.parse(_0x102070.bytes, _0x102070.map.videoTrackIds, _0x102070.map.timescales), _0xf0da7b && _0xf0da7b.captions && (_0x102070.captionStreams = _0xf0da7b.captionStreams, _0x102070.fmp4Captions = _0xf0da7b.captions)), _0x196265(null, _0x102070);
		};
	}, _0x56317e = function _0x2676ef(_0x5c8d37, _0x250c69, _0x3ec347) {
		var _0x227ea0 = function _0x311c38(_0x4a61d8) {
			if (_0x4a61d8.data.source === _0x250c69.requestId) {
				_0x5c8d37.removeEventListener('message', _0x311c38);
				var _0x99dcde = _0x4a61d8.data.decrypted;
				return _0x250c69.bytes = new Uint8Array(_0x99dcde.bytes, _0x99dcde.byteOffset, _0x99dcde.byteLength), _0x3ec347(null, _0x250c69);
			}
		};
		_0x5c8d37.addEventListener('message', _0x227ea0);
		_0x5c8d37.postMessage(_0x58b357({
			'source': _0x250c69.requestId,
			'encrypted': _0x250c69.encryptedBytes,
			'key': _0x250c69.key.bytes,
			'iv': _0x250c69.key.iv
		}), [
			_0x250c69.encryptedBytes.buffer,
			_0x250c69.key.bytes.buffer
		]);
	}, _0x561da3 = function _0x408931(_0x343d9a) {
		return _0x343d9a.reduce(function (_0x3c20f6, _0x3af8b0) {
			return _0x3af8b0.code > _0x3c20f6.code ? _0x3af8b0 : _0x3c20f6;
		});
	}, _0xd537ec = function _0x1817d0(_0x1d2200, _0x156900, _0x516ddd) {
		var _0x1a591b = [], _0x34407d = 0;
		return function (_0x208577, _0x2dfa3f) {
			_0x208577 && (_0x5b0b74(_0x1d2200), _0x1a591b.push(_0x208577));
			_0x34407d += 1;
			if (_0x34407d === _0x1d2200.length) {
				_0x2dfa3f.endOfAllRequests = Date.now();
				if (_0x1a591b.length > 0) {
					var _0x2bf9fa = _0x561da3(_0x1a591b);
					return _0x516ddd(_0x2bf9fa, _0x2dfa3f);
				}
				if (_0x2dfa3f.encryptedBytes) {
					return _0x56317e(_0x156900, _0x2dfa3f, _0x516ddd);
				}
				return _0x516ddd(null, _0x2dfa3f);
			}
		};
	}, _0x1a0474 = function _0x73ff7c(_0x31395a, _0x2b3e55) {
		return function (_0x549509) {
			return _0x31395a.stats = _0x1dff89.mergeOptions(_0x31395a.stats, _0x1c62bf(_0x549509)), !_0x31395a.stats.firstBytesReceivedAt && _0x31395a.stats.bytesReceived && (_0x31395a.stats.firstBytesReceivedAt = Date.now()), _0x2b3e55(_0x549509, _0x31395a);
		};
	}, _0x28c4da = function _0x11039b(_0x3f6925, _0x53983d, _0x28ea64, _0x202989, _0x343a85, _0x14dcfe, _0x4f6809) {
		var _0x1da0bc = [], _0x44cc50 = _0xd537ec(_0x1da0bc, _0x28ea64, _0x4f6809);
		if (_0x343a85.key) {
			var _0x2ae49a = _0x1dff89.mergeOptions(_0x53983d, {
				'uri': _0x343a85.key.resolvedUri,
				'responseType': 'arraybuffer'
			}), _0x15696b = _0x52d96f(_0x343a85, _0x44cc50), _0xd3c8a5 = _0x3f6925(_0x2ae49a, _0x15696b);
			_0x1da0bc.push(_0xd3c8a5);
		}
		if (_0x343a85.map && !_0x343a85.map.bytes) {
			var _0x43951a = _0x1dff89.mergeOptions(_0x53983d, {
				'uri': _0x343a85.map.resolvedUri,
				'responseType': 'arraybuffer',
				'headers': _0x2e6c52(_0x343a85.map)
			}), _0x57a43f = _0x343de9(_0x343a85, _0x202989, _0x44cc50), _0x47cf82 = _0x3f6925(_0x43951a, _0x57a43f);
			_0x1da0bc.push(_0x47cf82);
		}
		var _0xb47c4 = _0x1dff89.mergeOptions(_0x53983d, {
			'uri': _0x343a85.resolvedUri,
			'responseType': 'arraybuffer',
			'headers': _0x2e6c52(_0x343a85)
		}), _0x3877e3 = _0x375d1a(_0x343a85, _0x202989, _0x44cc50), _0x59af34 = _0x3f6925(_0xb47c4, _0x3877e3);
		return _0x59af34.addEventListener('progress', _0x1a0474(_0x343a85, _0x14dcfe)), _0x1da0bc.push(_0x59af34), function () {
			return _0x5b0b74(_0x1da0bc);
		};
	}, _0x288f3c = function _0x3c3922(_0x1f587a, _0x2e2cd0) {
		var _0x170d90 = void 0;
		if (!_0x1f587a) {
			return '';
		}
		_0x170d90 = _0x562c10.getComputedStyle(_0x1f587a);
		if (!_0x170d90) {
			return '';
		}
		return _0x170d90[_0x2e2cd0];
	}, _0x5c48f3 = function _0x57d290(_0x276698, _0x18f9b2) {
		var _0x1dd653 = _0x276698.slice();
		_0x276698.sort(function (_0x520a8a, _0x2fef74) {
			var _0x1649c0 = _0x18f9b2(_0x520a8a, _0x2fef74);
			if (_0x1649c0 === 0) {
				return _0x1dd653.indexOf(_0x520a8a) - _0x1dd653.indexOf(_0x2fef74);
			}
			return _0x1649c0;
		});
	}, _0xf519df = function _0x32e6db(_0x3d512d, _0x433acc) {
		var _0x4a0986 = void 0, _0x1ae3d8 = void 0;
		return _0x3d512d.attributes.BANDWIDTH && (_0x4a0986 = _0x3d512d.attributes.BANDWIDTH), _0x4a0986 = _0x4a0986 || _0x562c10.Number.MAX_VALUE, _0x433acc.attributes.BANDWIDTH && (_0x1ae3d8 = _0x433acc.attributes.BANDWIDTH), _0x1ae3d8 = _0x1ae3d8 || _0x562c10.Number.MAX_VALUE, _0x4a0986 - _0x1ae3d8;
	}, _0xd45ba0 = function _0x37ae60(_0x599f70, _0x4925a9) {
		var _0x2e2617 = void 0, _0x1636f1 = void 0;
		_0x599f70.attributes.RESOLUTION && _0x599f70.attributes.RESOLUTION.width && (_0x2e2617 = _0x599f70.attributes.RESOLUTION.width);
		_0x2e2617 = _0x2e2617 || _0x562c10.Number.MAX_VALUE;
		_0x4925a9.attributes.RESOLUTION && _0x4925a9.attributes.RESOLUTION.width && (_0x1636f1 = _0x4925a9.attributes.RESOLUTION.width);
		_0x1636f1 = _0x1636f1 || _0x562c10.Number.MAX_VALUE;
		if (_0x2e2617 === _0x1636f1 && _0x599f70.attributes.BANDWIDTH && _0x4925a9.attributes.BANDWIDTH) {
			return _0x599f70.attributes.BANDWIDTH - _0x4925a9.attributes.BANDWIDTH;
		}
		return _0x2e2617 - _0x1636f1;
	}, _0x135ff0 = function _0x2160eb(_0x4e8d22, _0x3d6523, _0x19b093, _0x23960e) {
		var _0xd0c45a = _0x4e8d22.playlists.map(function (_0x16ecd1) {
			var _0x2c618b = void 0, _0x58427b = void 0, _0x242964 = void 0;
			return _0x2c618b = _0x16ecd1.attributes.RESOLUTION && _0x16ecd1.attributes.RESOLUTION.width, _0x58427b = _0x16ecd1.attributes.RESOLUTION && _0x16ecd1.attributes.RESOLUTION.height, _0x242964 = _0x16ecd1.attributes.BANDWIDTH, _0x242964 = _0x242964 || _0x562c10.Number.MAX_VALUE, {
				'bandwidth': _0x242964,
				'width': _0x2c618b,
				'height': _0x58427b,
				'playlist': _0x16ecd1
			};
		});
		_0x5c48f3(_0xd0c45a, function (_0x2067de, _0x155218) {
			return _0x2067de.bandwidth - _0x155218.bandwidth;
		});
		_0xd0c45a = _0xd0c45a.filter(function (_0x42c084) {
			return !_0x184b6a.isIncompatible(_0x42c084.playlist);
		});
		var _0x522bbb = _0xd0c45a.filter(function (_0x25af4e) {
			return _0x184b6a.isEnabled(_0x25af4e.playlist);
		});
		!_0x522bbb.length && (_0x522bbb = _0xd0c45a.filter(function (_0x361ae3) {
			return !_0x184b6a.isDisabled(_0x361ae3.playlist);
		}));
		var _0x2021d0 = _0x522bbb.filter(function (_0x773c76) {
			return _0x773c76.bandwidth * _0x229d75.BANDWIDTH_VARIANCE < _0x3d6523;
		}), _0x25594f = _0x2021d0[_0x2021d0.length - 1], _0x3aa841 = _0x2021d0.filter(function (_0x9d2e4f) {
			return _0x9d2e4f.bandwidth === _0x25594f.bandwidth;
		})[0], _0x5d5c57 = _0x2021d0.filter(function (_0x44e886) {
			return _0x44e886.width && _0x44e886.height;
		});
		_0x5c48f3(_0x5d5c57, function (_0x3c141d, _0x2234ad) {
			return _0x3c141d.width - _0x2234ad.width;
		});
		var _0x450d43 = _0x5d5c57.filter(function (_0x19087d) {
			return _0x19087d.width === _0x19b093 && _0x19087d.height === _0x23960e;
		});
		_0x25594f = _0x450d43[_0x450d43.length - 1];
		var _0x31e94f = _0x450d43.filter(function (_0x463d12) {
			return _0x463d12.bandwidth === _0x25594f.bandwidth;
		})[0], _0x356e5e = void 0, _0x405e75 = void 0, _0x5f204d = void 0;
		!_0x31e94f && (_0x356e5e = _0x5d5c57.filter(function (_0x2ebed9) {
			return _0x2ebed9.width > _0x19b093 || _0x2ebed9.height > _0x23960e;
		}), _0x405e75 = _0x356e5e.filter(function (_0x14194a) {
			return _0x14194a.width === _0x356e5e[0].width && _0x14194a.height === _0x356e5e[0].height;
		}), _0x25594f = _0x405e75[_0x405e75.length - 1], _0x5f204d = _0x405e75.filter(function (_0x39a38a) {
			return _0x39a38a.bandwidth === _0x25594f.bandwidth;
		})[0]);
		var _0x304308 = _0x5f204d || _0x31e94f || _0x3aa841 || _0x522bbb[0] || _0xd0c45a[0];
		return _0x304308 ? _0x304308.playlist : null;
	}, _0x31cc96 = function _0x3328ea() {
		return _0x135ff0(this.playlists.master, this.systemBandwidth, parseInt(_0x288f3c(this.tech_.el(), 'width'), 10), parseInt(_0x288f3c(this.tech_.el(), 'height'), 10));
	}, _0x239a81 = function _0x32ad3f(_0x17972a) {
		var _0x53af42 = _0x17972a.master, _0xd41af2 = _0x17972a.currentTime, _0xb0294c = _0x17972a.bandwidth, _0x106fc7 = _0x17972a.duration, _0x4c8a1f = _0x17972a.segmentDuration, _0x4b31b6 = _0x17972a.timeUntilRebuffer, _0x12c67f = _0x17972a.currentTimeline, _0xe660fb = _0x17972a.syncController, _0x43cddb = _0x53af42.playlists.filter(function (_0x5ce8c5) {
			return !_0x184b6a.isIncompatible(_0x5ce8c5);
		}), _0x126317 = _0x43cddb.filter(_0x184b6a.isEnabled);
		!_0x126317.length && (_0x126317 = _0x43cddb.filter(function (_0x8d5bc6) {
			return !_0x184b6a.isDisabled(_0x8d5bc6);
		}));
		var _0x1d2a23 = _0x126317.filter(_0x184b6a.hasAttribute.bind(null, 'BANDWIDTH')), _0x551025 = _0x1d2a23.map(function (_0x1065f5) {
			var _0x5e2718 = _0xe660fb.getSyncPoint(_0x1065f5, _0x106fc7, _0x12c67f, _0xd41af2), _0x4cac59 = _0x5e2718 ? 1 : 2, _0x4319ba = _0x184b6a.estimateSegmentRequestTime(_0x4c8a1f, _0xb0294c, _0x1065f5), _0x1b89b7 = _0x4319ba * _0x4cac59 - _0x4b31b6;
			return {
				'playlist': _0x1065f5,
				'rebufferingImpact': _0x1b89b7
			};
		}), _0x10cce2 = _0x551025.filter(function (_0x4745c2) {
			return _0x4745c2.rebufferingImpact <= 0;
		});
		_0x5c48f3(_0x10cce2, function (_0x15ebe6, _0x10804e) {
			return _0xf519df(_0x10804e.playlist, _0x15ebe6.playlist);
		});
		if (_0x10cce2.length) {
			return _0x10cce2[0];
		}
		return _0x5c48f3(_0x551025, function (_0x9bfc00, _0x3d9845) {
			return _0x9bfc00.rebufferingImpact - _0x3d9845.rebufferingImpact;
		}), _0x551025[0] || null;
	}, _0x1e5125 = function _0x41604d() {
		var _0x34859c = this.playlists.master.playlists.filter(_0x184b6a.isEnabled);
		_0x5c48f3(_0x34859c, function (_0x2b6e46, _0x34964b) {
			return _0xf519df(_0x2b6e46, _0x34964b);
		});
		var _0x18b617 = _0x34859c.filter(function (_0x3a5a0f) {
			return _0x22c0d5(_0x3a5a0f.attributes.CODECS).videoCodec;
		});
		return _0x18b617[0] || null;
	}, _0x5b7d69 = function _0x119eb2(_0x24bc55, _0x41d58c, _0x103133) {
		for (var _0x3ca716 in _0x103133) {
			if (!_0x24bc55[_0x3ca716]) {
				_0x41d58c.trigger({
					'type': 'usage',
					'name': 'hls-608'
				});
				var _0x2d63a8 = _0x41d58c.textTracks().getTrackById(_0x3ca716);
				_0x2d63a8 ? _0x24bc55[_0x3ca716] = _0x2d63a8 : _0x24bc55[_0x3ca716] = _0x41d58c.addRemoteTextTrack({
					'kind': 'captions',
					'id': _0x3ca716,
					'label': _0x3ca716
				}, false).track;
			}
		}
	}, _0x5d5a57 = function _0x44b624(_0x4d06c9) {
		var _0x4a0e7c = _0x4d06c9.inbandTextTracks, _0x40032c = _0x4d06c9.captionArray, _0x18bd57 = _0x4d06c9.timestampOffset;
		if (!_0x40032c) {
			return;
		}
		var _0x7ba226 = window.WebKitDataCue || window.VTTCue;
		_0x40032c.forEach(function (_0x8a9cba) {
			var _0x14321a = _0x8a9cba.stream, _0x57a2fe = _0x8a9cba.startTime, _0x19860a = _0x8a9cba.endTime;
			if (!_0x4a0e7c[_0x14321a]) {
				return;
			}
			_0x57a2fe += _0x18bd57;
			_0x19860a += _0x18bd57;
			_0x4a0e7c[_0x14321a].addCue(new _0x7ba226(_0x57a2fe, _0x19860a, _0x8a9cba.text));
		});
	}, _0x195a1e = function _0x1c18c1(_0x4883fe, _0x4f02d4, _0x46cbf2) {
		if (!_0x4883fe || !_0x4f02d4) {
			return false;
		}
		var _0x276579 = _0x4883fe.segments, _0xf9a4ec = _0x46cbf2 === _0x276579.length;
		return _0x4883fe.endList && _0x4f02d4.readyState === 'open' && _0xf9a4ec;
	}, _0x5347a2 = function _0x5dfe23(_0x527abe) {
		return typeof _0x527abe === 'number' && isFinite(_0x527abe);
	}, _0x5c1d4c = function _0x230da6(_0x49d37b, _0x416cac, _0x1de4eb) {
		if (_0x49d37b !== 'main' || !_0x416cac || !_0x1de4eb) {
			return null;
		}
		if (!_0x1de4eb.containsAudio && !_0x1de4eb.containsVideo) {
			return 'Neither audio nor video found in segment.';
		}
		if (_0x416cac.containsVideo && !_0x1de4eb.containsVideo) {
			return 'Only audio found in segment when we expected video. We can\'t switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest.';
		}
		if (!_0x416cac.containsVideo && _0x1de4eb.containsVideo) {
			return 'Video found in segment when we expected only audio. We can\'t switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest.';
		}
		return null;
	}, _0x3a069e = function _0x354629(_0x3e04b1, _0x1d50f7, _0x2285c0) {
		var _0x15f54c = void 0;
		return _0x3e04b1.length && _0x3e04b1.start(0) > 0 && _0x3e04b1.start(0) < _0x1d50f7 ? _0x15f54c = _0x3e04b1.start(0) : _0x15f54c = _0x1d50f7 - 30, Math.min(_0x15f54c, _0x1d50f7 - _0x2285c0);
	}, _0x1421ca = function _0x4eebb0(_0x528ce9) {
		var _0x1077b1 = _0x528ce9.segment, _0x339157 = _0x1077b1.start, _0x3e28c1 = _0x1077b1.end, _0x3ea103 = _0x528ce9.playlist, _0x184f21 = _0x3ea103.mediaSequence, _0x3fa8d9 = _0x3ea103.id, _0x1b904a = _0x3ea103.segments, _0x2684e8 = _0x1b904a === undefined ? [] : _0x1b904a, _0x1c2ff4 = _0x528ce9.mediaIndex, _0x5d57e1 = _0x528ce9.timeline;
		return [
			'appending [' + _0x1c2ff4 + '] of [' + _0x184f21 + ', ' + (_0x184f21 + _0x2684e8.length) + '] from playlist [' + _0x3fa8d9 + ']',
			'[' + _0x339157 + ' => ' + _0x3e28c1 + '] in timeline [' + _0x5d57e1 + ']'
		].join(' ');
	}, _0x2c21f4 = function (_0x3f3d41) {
		_0x2b5e46(_0x256a30, _0x3f3d41);
		function _0x256a30(_0x137c7d) {
			_0x2f247f(this, _0x256a30);
			var _0x493b8a = _0x42d6e2(this, (_0x256a30['__proto__'] || Object.getPrototypeOf(_0x256a30)).call(this));
			if (!_0x137c7d) {
				throw new TypeError('Initialization settings are required');
			}
			if (typeof _0x137c7d.currentTime !== 'function') {
				throw new TypeError('No currentTime getter specified');
			}
			if (!_0x137c7d.mediaSource) {
				throw new TypeError('No MediaSource specified');
			}
			return _0x493b8a.bandwidth = _0x137c7d.bandwidth, _0x493b8a.throughput = {
				'rate': 0,
				'count': 0
			}, _0x493b8a.roundTrip = NaN, _0x493b8a.resetStats_(), _0x493b8a.mediaIndex = null, _0x493b8a.hasPlayed_ = _0x137c7d.hasPlayed, _0x493b8a.currentTime_ = _0x137c7d.currentTime, _0x493b8a.seekable_ = _0x137c7d.seekable, _0x493b8a.seeking_ = _0x137c7d.seeking, _0x493b8a.duration_ = _0x137c7d.duration, _0x493b8a.mediaSource_ = _0x137c7d.mediaSource, _0x493b8a.hls_ = _0x137c7d.hls, _0x493b8a.loaderType_ = _0x137c7d.loaderType, _0x493b8a.startingMedia_ = void 0, _0x493b8a.segmentMetadataTrack_ = _0x137c7d.segmentMetadataTrack, _0x493b8a.goalBufferLength_ = _0x137c7d.goalBufferLength, _0x493b8a.sourceType_ = _0x137c7d.sourceType, _0x493b8a.inbandTextTracks_ = _0x137c7d.inbandTextTracks, _0x493b8a.state_ = 'INIT', _0x493b8a.checkBufferTimeout_ = null, _0x493b8a.error_ = void 0, _0x493b8a.currentTimeline_ = -1, _0x493b8a.pendingSegment_ = null, _0x493b8a.mimeType_ = null, _0x493b8a.sourceUpdater_ = null, _0x493b8a.xhrOptions_ = null, _0x493b8a.activeInitSegmentId_ = null, _0x493b8a.initSegments_ = {}, _0x493b8a.captionParser_ = new _0x3a08e9(), _0x493b8a.decrypter_ = _0x137c7d.decrypter, _0x493b8a.syncController_ = _0x137c7d.syncController, _0x493b8a.syncPoint_ = {
				'segmentIndex': 0,
				'time': 0
			}, _0x493b8a.syncController_.on('syncinfoupdate', function () {
				return _0x493b8a.trigger('syncinfoupdate');
			}), _0x493b8a.mediaSource_.addEventListener('sourceopen', function () {
				return _0x493b8a.ended_ = false;
			}), _0x493b8a.fetchAtBuffer_ = false, _0x493b8a.logger_ = _0x5f01a6('SegmentLoader[' + _0x493b8a.loaderType_ + ']'), Object.defineProperty(_0x493b8a, 'state', {
				'get': function _0x29026b() {
					return this.state_;
				},
				'set': function _0x4e3340(_0x38ad24) {
					if (_0x38ad24 !== this.state_) {
						this.logger_(this.state_ + ' -> ' + _0x38ad24);
						this.state_ = _0x38ad24;
					}
				}
			}), _0x493b8a;
		}
		return _0x1430d3(_0x256a30, [
			{
				'key': 'resetStats_',
				'value': function _0xd9695a() {
					this.mediaBytesTransferred = 0;
					this.mediaRequests = 0;
					this.mediaRequestsAborted = 0;
					this.mediaRequestsTimedout = 0;
					this.mediaRequestsErrored = 0;
					this.mediaTransferDuration = 0;
					this.mediaSecondsLoaded = 0;
				}
			},
			{
				'key': 'dispose',
				'value': function _0x41baa5() {
					this.state = 'DISPOSED';
					this.pause();
					this.abort_();
					this.sourceUpdater_ && this.sourceUpdater_.dispose();
					this.resetStats_();
					this.captionParser_.reset();
				}
			},
			{
				'key': 'abort',
				'value': function _0x2d08c5() {
					if (this.state !== 'WAITING') {
						this.pendingSegment_ && (this.pendingSegment_ = null);
						return;
					}
					this.abort_();
					this.state = 'READY';
					!this.paused() && this.monitorBuffer_();
				}
			},
			{
				'key': 'abort_',
				'value': function _0x1321c9() {
					this.pendingSegment_ && this.pendingSegment_.abortRequests();
					this.pendingSegment_ = null;
				}
			},
			{
				'key': 'error',
				'value': function _0x522649(_0x15c66b) {
					return typeof _0x15c66b !== 'undefined' && (this.error_ = _0x15c66b), this.pendingSegment_ = null, this.error_;
				}
			},
			{
				'key': 'endOfStream',
				'value': function _0x4dc7f8() {
					this.ended_ = true;
					this.pause();
					this.trigger('ended');
				}
			},
			{
				'key': 'buffered_',
				'value': function _0x4e5a6b() {
					if (!this.sourceUpdater_) {
						return _0x1dff89.createTimeRanges();
					}
					return this.sourceUpdater_.buffered();
				}
			},
			{
				'key': 'initSegment',
				'value': function _0x2a8f8f(_0x244984) {
					var _0x2f219c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
					if (!_0x244984) {
						return null;
					}
					var _0xb3594d = _0x2050df(_0x244984), _0x377c74 = this.initSegments_[_0xb3594d];
					return _0x2f219c && !_0x377c74 && _0x244984.bytes && (this.initSegments_[_0xb3594d] = _0x377c74 = {
						'resolvedUri': _0x244984.resolvedUri,
						'byterange': _0x244984.byterange,
						'bytes': _0x244984.bytes,
						'timescales': _0x244984.timescales,
						'videoTrackIds': _0x244984.videoTrackIds
					}), _0x377c74 || _0x244984;
				}
			},
			{
				'key': 'couldBeginLoading_',
				'value': function _0x22e01b() {
					return this.playlist_ && (this.sourceUpdater_ || this.mimeType_ && this.state === 'INIT') && !this.paused();
				}
			},
			{
				'key': 'load',
				'value': function _0x49c119() {
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
			},
			{
				'key': 'init_',
				'value': function _0x45d5a9() {
					return this.state = 'READY', this.sourceUpdater_ = new _0x51a0d0(this.mediaSource_, this.mimeType_, this.loaderType_, this.sourceBufferEmitter_), this.resetEverything(), this.monitorBuffer_();
				}
			},
			{
				'key': 'playlist',
				'value': function _0x42aa07(_0x8786c4) {
					var _0x1932a9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
					if (!_0x8786c4) {
						return;
					}
					var _0x2a8898 = this.playlist_, _0x379823 = this.pendingSegment_;
					this.playlist_ = _0x8786c4;
					this.xhrOptions_ = _0x1932a9;
					!this.hasPlayed_() && (_0x8786c4.syncInfo = {
						'mediaSequence': _0x8786c4.mediaSequence,
						'time': 0
					});
					var _0x74e0e6 = _0x2a8898 ? _0x2a8898.id : null;
					this.logger_('playlist update [' + _0x74e0e6 + ' => ' + _0x8786c4.id + ']');
					this.trigger('syncinfoupdate');
					if (this.state === 'INIT' && this.couldBeginLoading_()) {
						return this.init_();
					}
					if (!_0x2a8898 || _0x2a8898.uri !== _0x8786c4.uri) {
						this.mediaIndex !== null && this.resyncLoader();
						return;
					}
					var _0x4635a5 = _0x8786c4.mediaSequence - _0x2a8898.mediaSequence;
					this.logger_('live window shift [' + _0x4635a5 + ']');
					this.mediaIndex !== null && (this.mediaIndex -= _0x4635a5);
					_0x379823 && (_0x379823.mediaIndex -= _0x4635a5, _0x379823.mediaIndex >= 0 && (_0x379823.segment = _0x8786c4.segments[_0x379823.mediaIndex]));
					this.syncController_.saveExpiredSegmentInfo(_0x2a8898, _0x8786c4);
				}
			},
			{
				'key': 'pause',
				'value': function _0x332dff() {
					this.checkBufferTimeout_ && (_0x562c10.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null);
				}
			},
			{
				'key': 'paused',
				'value': function _0x2bf971() {
					return this.checkBufferTimeout_ === null;
				}
			},
			{
				'key': 'mimeType',
				'value': function _0x1ecb2b(_0x281c57, _0x229324) {
					if (this.mimeType_) {
						return;
					}
					this.mimeType_ = _0x281c57;
					this.sourceBufferEmitter_ = _0x229324;
					this.state === 'INIT' && this.couldBeginLoading_() && this.init_();
				}
			},
			{
				'key': 'resetEverything',
				'value': function _0x381dae(_0x56c424) {
					this.ended_ = false;
					this.resetLoader();
					this.remove(0, this.duration_(), _0x56c424);
					this.captionParser_.clearAllCaptions();
					this.trigger('reseteverything');
				}
			},
			{
				'key': 'resetLoader',
				'value': function _0x42ccf9() {
					this.fetchAtBuffer_ = false;
					this.resyncLoader();
				}
			},
			{
				'key': 'resyncLoader',
				'value': function _0x5ffad7() {
					this.mediaIndex = null;
					this.syncPoint_ = null;
					this.abort();
				}
			},
			{
				'key': 'remove',
				'value': function _0x247789(_0x497ed2, _0x143b1b, _0x1c25e7) {
					this.sourceUpdater_ && this.sourceUpdater_.remove(_0x497ed2, _0x143b1b, _0x1c25e7);
					_0x594cb8(_0x497ed2, _0x143b1b, this.segmentMetadataTrack_);
					if (this.inbandTextTracks_) {
						for (var _0x105edc in this.inbandTextTracks_) {
							_0x594cb8(_0x497ed2, _0x143b1b, this.inbandTextTracks_[_0x105edc]);
						}
					}
				}
			},
			{
				'key': 'monitorBuffer_',
				'value': function _0x53927f() {
					this.checkBufferTimeout_ && _0x562c10.clearTimeout(this.checkBufferTimeout_);
					this.checkBufferTimeout_ = _0x562c10.setTimeout(this.monitorBufferTick_.bind(this), 1);
				}
			},
			{
				'key': 'monitorBufferTick_',
				'value': function _0x275e06() {
					this.state === 'READY' && this.fillBuffer_();
					this.checkBufferTimeout_ && _0x562c10.clearTimeout(this.checkBufferTimeout_);
					this.checkBufferTimeout_ = _0x562c10.setTimeout(this.monitorBufferTick_.bind(this), 500);
				}
			},
			{
				'key': 'fillBuffer_',
				'value': function _0x46a66a() {
					if (this.sourceUpdater_.updating()) {
						return;
					}
					!this.syncPoint_ && (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
					var _0x4320b8 = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
					if (!_0x4320b8) {
						return;
					}
					var _0x9a5ef3 = _0x195a1e(this.playlist_, this.mediaSource_, _0x4320b8.mediaIndex);
					if (_0x9a5ef3) {
						this.endOfStream();
						return;
					}
					if (_0x4320b8.mediaIndex === this.playlist_.segments.length - 1 && this.mediaSource_.readyState === 'ended' && !this.seeking_()) {
						return;
					}
					(_0x4320b8.timeline !== this.currentTimeline_ || _0x4320b8.startOfSegment !== null && _0x4320b8.startOfSegment < this.sourceUpdater_.timestampOffset()) && (this.syncController_.reset(), _0x4320b8.timestampOffset = _0x4320b8.startOfSegment, this.captionParser_.clearAllCaptions());
					this.loadSegment_(_0x4320b8);
				}
			},
			{
				'key': 'checkBuffer_',
				'value': function _0x499fde(_0x56182f, _0x1a8af1, _0x5d69a7, _0x4ac51e, _0x1fa833, _0x223e25) {
					var _0x409513 = 0, _0x45c2fd = void 0;
					_0x56182f.length && (_0x409513 = _0x56182f.end(_0x56182f.length - 1));
					var _0x23571b = Math.max(0, _0x409513 - _0x1fa833);
					if (!_0x1a8af1.segments.length) {
						return null;
					}
					if (_0x23571b >= this.goalBufferLength_()) {
						return null;
					}
					if (!_0x4ac51e && _0x23571b >= 1) {
						return null;
					}
					if (_0x223e25 === null) {
						return _0x5d69a7 = this.getSyncSegmentCandidate_(_0x1a8af1), this.generateSegmentInfo_(_0x1a8af1, _0x5d69a7, null, true);
					}
					if (_0x5d69a7 !== null) {
						var _0x3892ea = _0x1a8af1.segments[_0x5d69a7];
						return _0x3892ea && _0x3892ea.end ? _0x45c2fd = _0x3892ea.end : _0x45c2fd = _0x409513, this.generateSegmentInfo_(_0x1a8af1, _0x5d69a7 + 1, _0x45c2fd, false);
					}
					if (this.fetchAtBuffer_) {
						var _0x246df1 = _0x184b6a.getMediaInfoForTime(_0x1a8af1, _0x409513, _0x223e25.segmentIndex, _0x223e25.time);
						_0x5d69a7 = _0x246df1.mediaIndex;
						_0x45c2fd = _0x246df1.startTime;
					} else {
						var _0x48c774 = _0x184b6a.getMediaInfoForTime(_0x1a8af1, _0x1fa833, _0x223e25.segmentIndex, _0x223e25.time);
						_0x5d69a7 = _0x48c774.mediaIndex;
						_0x45c2fd = _0x48c774.startTime;
					}
					return this.generateSegmentInfo_(_0x1a8af1, _0x5d69a7, _0x45c2fd, false);
				}
			},
			{
				'key': 'getSyncSegmentCandidate_',
				'value': function _0x175b29(_0xa5dba) {
					var _0x1d1aa2 = this;
					if (this.currentTimeline_ === -1) {
						return 0;
					}
					var _0x9a9715 = _0xa5dba.segments.map(function (_0x145c82, _0x578392) {
						return {
							'timeline': _0x145c82.timeline,
							'segmentIndex': _0x578392
						};
					}).filter(function (_0x4634c0) {
						return _0x4634c0.timeline === _0x1d1aa2.currentTimeline_;
					});
					if (_0x9a9715.length) {
						return _0x9a9715[Math.min(_0x9a9715.length - 1, 1)].segmentIndex;
					}
					return Math.max(_0xa5dba.segments.length - 1, 0);
				}
			},
			{
				'key': 'generateSegmentInfo_',
				'value': function _0x2d990b(_0x644c02, _0x5a558c, _0x55216c, _0x51dd98) {
					if (_0x5a558c < 0 || _0x5a558c >= _0x644c02.segments.length) {
						return null;
					}
					var _0x493f07 = _0x644c02.segments[_0x5a558c];
					return {
						'requestId': 'segment-loader-' + Math.random(),
						'uri': _0x493f07.resolvedUri,
						'mediaIndex': _0x5a558c,
						'isSyncRequest': _0x51dd98,
						'startOfSegment': _0x55216c,
						'playlist': _0x644c02,
						'bytes': null,
						'encryptedBytes': null,
						'timestampOffset': null,
						'timeline': _0x493f07.timeline,
						'duration': _0x493f07.duration,
						'segment': _0x493f07
					};
				}
			},
			{
				'key': 'abortRequestEarly_',
				'value': function _0x217303(_0x591a56) {
					if (this.hls_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) {
						return false;
					}
					if (Date.now() - (_0x591a56.firstBytesReceivedAt || Date.now()) < 1000) {
						return false;
					}
					var _0x469bc0 = this.currentTime_(), _0x11c5c8 = _0x591a56.bandwidth, _0x18a29b = this.pendingSegment_.duration, _0x1970b0 = _0x184b6a.estimateSegmentRequestTime(_0x18a29b, _0x11c5c8, this.playlist_, _0x591a56.bytesReceived), _0x5113e2 = _0x45a2d6(this.buffered_(), _0x469bc0, this.hls_.tech_.playbackRate()) - 1;
					if (_0x1970b0 <= _0x5113e2) {
						return false;
					}
					var _0x820ff8 = _0x239a81({
						'master': this.hls_.playlists.master,
						'currentTime': _0x469bc0,
						'bandwidth': _0x11c5c8,
						'duration': this.duration_(),
						'segmentDuration': _0x18a29b,
						'timeUntilRebuffer': _0x5113e2,
						'currentTimeline': this.currentTimeline_,
						'syncController': this.syncController_
					});
					if (!_0x820ff8) {
						return;
					}
					var _0x507ae5 = _0x1970b0 - _0x5113e2, _0x118051 = _0x507ae5 - _0x820ff8.rebufferingImpact, _0x4d5151 = 0.5;
					_0x5113e2 <= 0.03333333333333333 && (_0x4d5151 = 1);
					if (!_0x820ff8.playlist || _0x820ff8.playlist.uri === this.playlist_.uri || _0x118051 < _0x4d5151) {
						return false;
					}
					return this.bandwidth = _0x820ff8.playlist.attributes.BANDWIDTH * _0x229d75.BANDWIDTH_VARIANCE + 1, this.abort(), this.trigger('earlyabort'), true;
				}
			},
			{
				'key': 'handleProgress_',
				'value': function _0x5d6641(_0x567303, _0x5cc71a) {
					if (!this.pendingSegment_ || _0x5cc71a.requestId !== this.pendingSegment_.requestId || this.abortRequestEarly_(_0x5cc71a.stats)) {
						return;
					}
					this.trigger('progress');
				}
			},
			{
				'key': 'loadSegment_',
				'value': function _0x18669e(_0x12f9a3) {
					this.state = 'WAITING';
					this.pendingSegment_ = _0x12f9a3;
					this.trimBackBuffer_(_0x12f9a3);
					_0x12f9a3.abortRequests = _0x28c4da(this.hls_.xhr, this.xhrOptions_, this.decrypter_, this.captionParser_, this.createSimplifiedSegmentObj_(_0x12f9a3), this.handleProgress_.bind(this), this.segmentRequestFinished_.bind(this));
				}
			},
			{
				'key': 'trimBackBuffer_',
				'value': function _0x1ae3c2(_0x376f84) {
					var _0x35ba59 = _0x3a069e(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
					_0x35ba59 > 0 && this.remove(0, _0x35ba59);
				}
			},
			{
				'key': 'createSimplifiedSegmentObj_',
				'value': function _0x405826(_0x21e93c) {
					var _0x2dbc56 = _0x21e93c.segment, _0x545200 = {
						'resolvedUri': _0x2dbc56.resolvedUri,
						'byterange': _0x2dbc56.byterange,
						'requestId': _0x21e93c.requestId
					};
					if (_0x2dbc56.key) {
						var _0x342389 = _0x2dbc56.key.iv || new Uint32Array([
							0,
							0,
							0,
							_0x21e93c.mediaIndex + _0x21e93c.playlist.mediaSequence
						]);
						_0x545200.key = {
							'resolvedUri': _0x2dbc56.key.resolvedUri,
							'iv': _0x342389
						};
					}
					return _0x2dbc56.map && (_0x545200.map = this.initSegment(_0x2dbc56.map)), _0x545200;
				}
			},
			{
				'key': 'segmentRequestFinished_',
				'value': function _0x30e42b(_0x110f45, _0x384784) {
					this.mediaRequests += 1;
					_0x384784.stats && (this.mediaBytesTransferred += _0x384784.stats.bytesReceived, this.mediaTransferDuration += _0x384784.stats.roundTripTime);
					if (!this.pendingSegment_) {
						this.mediaRequestsAborted += 1;
						return;
					}
					if (_0x384784.requestId !== this.pendingSegment_.requestId) {
						return;
					}
					if (_0x110f45) {
						this.pendingSegment_ = null;
						this.state = 'READY';
						if (_0x110f45.code === _0x4d93f7.ABORTED) {
							this.mediaRequestsAborted += 1;
							return;
						}
						this.pause();
						if (_0x110f45.code === _0x4d93f7.TIMEOUT) {
							this.mediaRequestsTimedout += 1;
							this.bandwidth = 1;
							this.roundTrip = NaN;
							this.trigger('bandwidthupdate');
							return;
						}
						this.mediaRequestsErrored += 1;
						this.error(_0x110f45);
						this.trigger('error');
						return;
					}
					this.bandwidth = _0x384784.stats.bandwidth;
					this.roundTrip = _0x384784.stats.roundTripTime;
					_0x384784.map && (_0x384784.map = this.initSegment(_0x384784.map, true));
					this.processSegmentResponse_(_0x384784);
				}
			},
			{
				'key': 'processSegmentResponse_',
				'value': function _0x39b155(_0x5710f5) {
					var _0x5bc07b = this.pendingSegment_;
					_0x5bc07b.bytes = _0x5710f5.bytes;
					_0x5710f5.map && (_0x5bc07b.segment.map.bytes = _0x5710f5.map.bytes);
					_0x5bc07b.endOfAllRequests = _0x5710f5.endOfAllRequests;
					_0x5710f5.fmp4Captions && (_0x5b7d69(this.inbandTextTracks_, this.hls_.tech_, _0x5710f5.captionStreams), _0x5d5a57({
						'inbandTextTracks': this.inbandTextTracks_,
						'captionArray': _0x5710f5.fmp4Captions,
						'timestampOffset': 0
					}), this.captionParser_.clearParsedCaptions());
					this.handleSegment_();
				}
			},
			{
				'key': 'handleSegment_',
				'value': function _0x1d8a22() {
					var _0x2fea3 = this;
					if (!this.pendingSegment_) {
						this.state = 'READY';
						return;
					}
					var _0x40b664 = this.pendingSegment_, _0x11d91a = _0x40b664.segment, _0x3deb70 = this.syncController_.probeSegmentInfo(_0x40b664);
					typeof this.startingMedia_ === 'undefined' && _0x3deb70 && (_0x3deb70.containsAudio || _0x3deb70.containsVideo) && (this.startingMedia_ = {
						'containsAudio': _0x3deb70.containsAudio,
						'containsVideo': _0x3deb70.containsVideo
					});
					var _0x28b31 = _0x5c1d4c(this.loaderType_, this.startingMedia_, _0x3deb70);
					if (_0x28b31) {
						this.error({
							'message': _0x28b31,
							'blacklistDuration': Infinity
						});
						this.trigger('error');
						return;
					}
					if (_0x40b664.isSyncRequest) {
						this.trigger('syncinfoupdate');
						this.pendingSegment_ = null;
						this.state = 'READY';
						return;
					}
					_0x40b664.timestampOffset !== null && _0x40b664.timestampOffset !== this.sourceUpdater_.timestampOffset() && (this.sourceUpdater_.timestampOffset(_0x40b664.timestampOffset), this.trigger('timestampoffset'));
					var _0x2db5ea = this.syncController_.mappingForTimeline(_0x40b664.timeline);
					_0x2db5ea !== null && this.trigger({
						'type': 'segmenttimemapping',
						'mapping': _0x2db5ea
					});
					this.state = 'APPENDING';
					if (_0x11d91a.map) {
						var _0x20382c = _0x2050df(_0x11d91a.map);
						if (!this.activeInitSegmentId_ || this.activeInitSegmentId_ !== _0x20382c) {
							var _0x8a35d0 = this.initSegment(_0x11d91a.map);
							this.sourceUpdater_.appendBuffer(_0x8a35d0.bytes, function () {
								_0x2fea3.activeInitSegmentId_ = _0x20382c;
							});
						}
					}
					_0x40b664.byteLength = _0x40b664.bytes.byteLength;
					typeof _0x11d91a.start === 'number' && typeof _0x11d91a.end === 'number' ? this.mediaSecondsLoaded += _0x11d91a.end - _0x11d91a.start : this.mediaSecondsLoaded += _0x11d91a.duration;
					this.logger_(_0x1421ca(_0x40b664));
					this.sourceUpdater_.appendBuffer(_0x40b664.bytes, this.handleUpdateEnd_.bind(this));
				}
			},
			{
				'key': 'handleUpdateEnd_',
				'value': function _0x349955() {
					if (!this.pendingSegment_) {
						this.state = 'READY';
						!this.paused() && this.monitorBuffer_();
						return;
					}
					var _0x1fe094 = this.pendingSegment_, _0x3258af = _0x1fe094.segment, _0x1dbd66 = this.mediaIndex !== null;
					this.pendingSegment_ = null;
					this.recordThroughput_(_0x1fe094);
					this.addSegmentMetadataCue_(_0x1fe094);
					this.state = 'READY';
					this.mediaIndex = _0x1fe094.mediaIndex;
					this.fetchAtBuffer_ = true;
					this.currentTimeline_ = _0x1fe094.timeline;
					this.trigger('syncinfoupdate');
					if (_0x3258af.end && this.currentTime_() - _0x3258af.end > _0x1fe094.playlist.targetDuration * 3) {
						this.resetEverything();
						return;
					}
					_0x1dbd66 && this.trigger('bandwidthupdate');
					this.trigger('progress');
					var _0xc915ff = _0x195a1e(_0x1fe094.playlist, this.mediaSource_, _0x1fe094.mediaIndex + 1);
					_0xc915ff && this.endOfStream();
					!this.paused() && this.monitorBuffer_();
				}
			},
			{
				'key': 'recordThroughput_',
				'value': function _0x1ec220(_0x40032e) {
					var _0x460abc = this.throughput.rate, _0x28ae06 = Date.now() - _0x40032e.endOfAllRequests + 1, _0xb99cd1 = Math.floor(_0x40032e.byteLength / _0x28ae06 * 8 * 1000);
					this.throughput.rate += (_0xb99cd1 - _0x460abc) / ++this.throughput.count;
				}
			},
			{
				'key': 'addSegmentMetadataCue_',
				'value': function _0xc209be(_0x10fe11) {
					if (!this.segmentMetadataTrack_) {
						return;
					}
					var _0x2e5ef1 = _0x10fe11.segment, _0x342957 = _0x2e5ef1.start, _0x21fbc3 = _0x2e5ef1.end;
					if (!_0x5347a2(_0x342957) || !_0x5347a2(_0x21fbc3)) {
						return;
					}
					_0x594cb8(_0x342957, _0x21fbc3, this.segmentMetadataTrack_);
					var _0x500005 = _0x562c10.WebKitDataCue || _0x562c10.VTTCue, _0xf0191e = {
						'bandwidth': _0x10fe11.playlist.attributes.BANDWIDTH,
						'resolution': _0x10fe11.playlist.attributes.RESOLUTION,
						'codecs': _0x10fe11.playlist.attributes.CODECS,
						'byteLength': _0x10fe11.byteLength,
						'uri': _0x10fe11.uri,
						'timeline': _0x10fe11.timeline,
						'playlist': _0x10fe11.playlist.uri,
						'start': _0x342957,
						'end': _0x21fbc3
					}, _0x298398 = JSON.stringify(_0xf0191e), _0x4a1b43 = new _0x500005(_0x342957, _0x21fbc3, _0x298398);
					_0x4a1b43.value = _0xf0191e;
					this.segmentMetadataTrack_.addCue(_0x4a1b43);
				}
			}
		]), _0x256a30;
	}(_0x1dff89.EventTarget), _0x21adbf = function _0x1cb20f(_0x338e82) {
		return decodeURIComponent(escape(String.fromCharCode.apply(null, _0x338e82)));
	}, _0x3c2cd9 = new Uint8Array('\n\n'.split('').map(function (_0x250983) {
		return _0x250983.charCodeAt(0);
	})), _0x5753d8 = function (_0x135459) {
		_0x2b5e46(_0x4f4f34, _0x135459);
		function _0x4f4f34(_0x120f91) {
			var _0x419496 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			_0x2f247f(this, _0x4f4f34);
			var _0x1584e7 = _0x42d6e2(this, (_0x4f4f34['__proto__'] || Object.getPrototypeOf(_0x4f4f34)).call(this, _0x120f91, _0x419496));
			return _0x1584e7.mediaSource_ = null, _0x1584e7.subtitlesTrack_ = null, _0x1584e7;
		}
		return _0x1430d3(_0x4f4f34, [
			{
				'key': 'buffered_',
				'value': function _0x263585() {
					if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length) {
						return _0x1dff89.createTimeRanges();
					}
					var _0x49d7a0 = this.subtitlesTrack_.cues, _0x44c10a = _0x49d7a0[0].startTime, _0x2031d2 = _0x49d7a0[_0x49d7a0.length - 1].startTime;
					return _0x1dff89.createTimeRanges([[
						_0x44c10a,
						_0x2031d2
					]]);
				}
			},
			{
				'key': 'initSegment',
				'value': function _0x48af6a(_0x662461) {
					var _0x164636 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
					if (!_0x662461) {
						return null;
					}
					var _0x4fda0d = _0x2050df(_0x662461), _0x18a43f = this.initSegments_[_0x4fda0d];
					if (_0x164636 && !_0x18a43f && _0x662461.bytes) {
						var _0x3ecb72 = _0x3c2cd9.byteLength + _0x662461.bytes.byteLength, _0x521ff9 = new Uint8Array(_0x3ecb72);
						_0x521ff9.set(_0x662461.bytes);
						_0x521ff9.set(_0x3c2cd9, _0x662461.bytes.byteLength);
						this.initSegments_[_0x4fda0d] = _0x18a43f = {
							'resolvedUri': _0x662461.resolvedUri,
							'byterange': _0x662461.byterange,
							'bytes': _0x521ff9
						};
					}
					return _0x18a43f || _0x662461;
				}
			},
			{
				'key': 'couldBeginLoading_',
				'value': function _0x56536e() {
					return this.playlist_ && this.subtitlesTrack_ && !this.paused();
				}
			},
			{
				'key': 'init_',
				'value': function _0x45b53e() {
					return this.state = 'READY', this.resetEverything(), this.monitorBuffer_();
				}
			},
			{
				'key': 'track',
				'value': function _0x5f748d(_0x23000c) {
					if (typeof _0x23000c === 'undefined') {
						return this.subtitlesTrack_;
					}
					return this.subtitlesTrack_ = _0x23000c, this.state === 'INIT' && this.couldBeginLoading_() && this.init_(), this.subtitlesTrack_;
				}
			},
			{
				'key': 'remove',
				'value': function _0x13e08a(_0x239c87, _0x3fa681) {
					_0x594cb8(_0x239c87, _0x3fa681, this.subtitlesTrack_);
				}
			},
			{
				'key': 'fillBuffer_',
				'value': function _0x436904() {
					var _0x28a05b = this;
					!this.syncPoint_ && (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
					var _0x4d9ad5 = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
					_0x4d9ad5 = this.skipEmptySegments_(_0x4d9ad5);
					if (!_0x4d9ad5) {
						return;
					}
					if (this.syncController_.timestampOffsetForTimeline(_0x4d9ad5.timeline) === null) {
						var _0x22bf00 = function _0x28b94e() {
							_0x28a05b.state = 'READY';
							!_0x28a05b.paused() && _0x28a05b.monitorBuffer_();
						};
						this.syncController_.one('timestampoffset', _0x22bf00);
						this.state = 'WAITING_ON_TIMELINE';
						return;
					}
					this.loadSegment_(_0x4d9ad5);
				}
			},
			{
				'key': 'skipEmptySegments_',
				'value': function _0x5139d2(_0x13e81b) {
					while (_0x13e81b && _0x13e81b.segment.empty) {
						_0x13e81b = this.generateSegmentInfo_(_0x13e81b.playlist, _0x13e81b.mediaIndex + 1, _0x13e81b.startOfSegment + _0x13e81b.duration, _0x13e81b.isSyncRequest);
					}
					return _0x13e81b;
				}
			},
			{
				'key': 'handleSegment_',
				'value': function _0x40c67f() {
					var _0x4532d9 = this;
					if (!this.pendingSegment_ || !this.subtitlesTrack_) {
						this.state = 'READY';
						return;
					}
					this.state = 'APPENDING';
					var _0x1976c9 = this.pendingSegment_, _0x5bf626 = _0x1976c9.segment;
					if (typeof _0x562c10.WebVTT !== 'function' && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
						var _0x255de9 = function _0x3b1dce() {
							_0x4532d9.handleSegment_();
						};
						this.state = 'WAITING_ON_VTTJS';
						this.subtitlesTrack_.tech_.one('vttjsloaded', _0x255de9);
						this.subtitlesTrack_.tech_.one('vttjserror', function () {
							_0x4532d9.subtitlesTrack_.tech_.off('vttjsloaded', _0x255de9);
							_0x4532d9.error({ 'message': 'Error loading vtt.js' });
							_0x4532d9.state = 'READY';
							_0x4532d9.pause();
							_0x4532d9.trigger('error');
						});
						return;
					}
					_0x5bf626.requested = true;
					try {
						this.parseVTTCues_(_0x1976c9);
					} catch (_0x9c8645) {
						return this.error({ 'message': _0x9c8645.message }), this.state = 'READY', this.pause(), this.trigger('error');
					}
					this.updateTimeMapping_(_0x1976c9, this.syncController_.timelines[_0x1976c9.timeline], this.playlist_);
					if (_0x1976c9.isSyncRequest) {
						this.trigger('syncinfoupdate');
						this.pendingSegment_ = null;
						this.state = 'READY';
						return;
					}
					_0x1976c9.byteLength = _0x1976c9.bytes.byteLength;
					this.mediaSecondsLoaded += _0x5bf626.duration;
					_0x1976c9.cues.length && this.remove(_0x1976c9.cues[0].endTime, _0x1976c9.cues[_0x1976c9.cues.length - 1].endTime);
					_0x1976c9.cues.forEach(function (_0x2c8f60) {
						_0x4532d9.subtitlesTrack_.addCue(_0x2c8f60);
					});
					this.handleUpdateEnd_();
				}
			},
			{
				'key': 'parseVTTCues_',
				'value': function _0x5e415f(_0x2bac81) {
					var _0x2f8031 = void 0, _0x52d8ef = false;
					typeof _0x562c10.TextDecoder === 'function' ? _0x2f8031 = new _0x562c10.TextDecoder('utf8') : (_0x2f8031 = _0x562c10.WebVTT.StringDecoder(), _0x52d8ef = true);
					var _0x1e077a = new _0x562c10.WebVTT.Parser(_0x562c10, _0x562c10.vttjs, _0x2f8031);
					_0x2bac81.cues = [];
					_0x2bac81.timestampmap = {
						'MPEGTS': 0,
						'LOCAL': 0
					};
					_0x1e077a.oncue = _0x2bac81.cues.push.bind(_0x2bac81.cues);
					_0x1e077a.ontimestampmap = function (_0x54b6c0) {
						return _0x2bac81.timestampmap = _0x54b6c0;
					};
					_0x1e077a.onparsingerror = function (_0x597fb8) {
						_0x1dff89.log.warn('Error encountered when parsing cues: ' + _0x597fb8.message);
					};
					if (_0x2bac81.segment.map) {
						var _0x527ee3 = _0x2bac81.segment.map.bytes;
						_0x52d8ef && (_0x527ee3 = _0x21adbf(_0x527ee3));
						_0x1e077a.parse(_0x527ee3);
					}
					var _0x105a7c = _0x2bac81.bytes;
					_0x52d8ef && (_0x105a7c = _0x21adbf(_0x105a7c));
					_0x1e077a.parse(_0x105a7c);
					_0x1e077a.flush();
				}
			},
			{
				'key': 'updateTimeMapping_',
				'value': function _0x1ee5ce(_0x46fdc8, _0x35d871, _0x5e657b) {
					var _0x19726a = _0x46fdc8.segment;
					if (!_0x35d871) {
						return;
					}
					if (!_0x46fdc8.cues.length) {
						_0x19726a.empty = true;
						return;
					}
					var _0x35bdc2 = _0x46fdc8.timestampmap, _0x2fcabc = _0x35bdc2.MPEGTS / 90000 - _0x35bdc2.LOCAL + _0x35d871.mapping;
					_0x46fdc8.cues.forEach(function (_0x12321e) {
						_0x12321e.startTime += _0x2fcabc;
						_0x12321e.endTime += _0x2fcabc;
					});
					if (!_0x5e657b.syncInfo) {
						var _0x43bd00 = _0x46fdc8.cues[0].startTime, _0x40141e = _0x46fdc8.cues[_0x46fdc8.cues.length - 1].startTime;
						_0x5e657b.syncInfo = {
							'mediaSequence': _0x5e657b.mediaSequence + _0x46fdc8.mediaIndex,
							'time': Math.min(_0x43bd00, _0x40141e - _0x19726a.duration)
						};
					}
				}
			}
		]), _0x4f4f34;
	}(_0x2c21f4), _0x5506fb = function _0x3db386(_0xccc95f, _0x553b62) {
		var _0x1d6258 = _0xccc95f.cues;
		for (var _0x214e4a = 0; _0x214e4a < _0x1d6258.length; _0x214e4a++) {
			var _0x4be2a3 = _0x1d6258[_0x214e4a];
			if (_0x553b62 >= _0x4be2a3.adStartTime && _0x553b62 <= _0x4be2a3.adEndTime) {
				return _0x4be2a3;
			}
		}
		return null;
	}, _0x5e9e4e = function _0x5e2021(_0x2805f7, _0x2db1de) {
		var _0x25f87f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
		if (!_0x2805f7.segments) {
			return;
		}
		var _0x410c21 = _0x25f87f, _0x479046 = void 0;
		for (var _0x33041a = 0; _0x33041a < _0x2805f7.segments.length; _0x33041a++) {
			var _0x2b2663 = _0x2805f7.segments[_0x33041a];
			!_0x479046 && (_0x479046 = _0x5506fb(_0x2db1de, _0x410c21 + _0x2b2663.duration / 2));
			if (_0x479046) {
				if ('cueIn' in _0x2b2663) {
					_0x479046.endTime = _0x410c21;
					_0x479046.adEndTime = _0x410c21;
					_0x410c21 += _0x2b2663.duration;
					_0x479046 = null;
					continue;
				}
				if (_0x410c21 < _0x479046.endTime) {
					_0x410c21 += _0x2b2663.duration;
					continue;
				}
				_0x479046.endTime += _0x2b2663.duration;
			} else {
				if ('cueOut' in _0x2b2663) {
					_0x479046 = new _0x562c10.VTTCue(_0x410c21, _0x410c21 + _0x2b2663.duration, _0x2b2663.cueOut);
					_0x479046.adStartTime = _0x410c21;
					_0x479046.adEndTime = _0x410c21 + parseFloat(_0x2b2663.cueOut);
					_0x2db1de.addCue(_0x479046);
				}
				if ('cueOutCont' in _0x2b2663) {
					var _0x3d5277 = void 0, _0x35624e = void 0, _0x4ee93b = _0x2b2663.cueOutCont.split('/').map(parseFloat), _0x2b812d = _0xf8c145(_0x4ee93b, 2);
					_0x3d5277 = _0x2b812d[0];
					_0x35624e = _0x2b812d[1];
					_0x479046 = new _0x562c10.VTTCue(_0x410c21, _0x410c21 + _0x2b2663.duration, '');
					_0x479046.adStartTime = _0x410c21 - _0x3d5277;
					_0x479046.adEndTime = _0x479046.adStartTime + _0x35624e;
					_0x2db1de.addCue(_0x479046);
				}
			}
			_0x410c21 += _0x2b2663.duration;
		}
	}, _0x1c09d5 = _0xd6254c.inspect, _0x3b0c13 = [
		{
			'name': 'VOD',
			'run': function _0x16970e(_0x71caf0, _0x5654f3, _0x418245, _0x430414, _0x82095e) {
				if (_0x418245 !== Infinity) {
					return _0x49af29;
				}
				return null;
			}
		},
		{
			'name': 'ProgramDateTime',
			'run': function _0x5d2c69(_0x119d96, _0x3b2511, _0x157383, _0x13ef0c, _0x3bbde7) {
				if (!_0x119d96.datetimeToDisplayTime) {
					return null;
				}
				var _0x42c41b = _0x3b2511.segments || [], _0x1410b6 = null, _0x29011c = null;
				_0x3bbde7 = _0x3bbde7 || 0;
				for (var _0x15e506 = 0; _0x15e506 < _0x42c41b.length; _0x15e506++) {
					var _0x58dc73 = _0x42c41b[_0x15e506];
					if (_0x58dc73.dateTimeObject) {
						var _0x12c18b = _0x58dc73.dateTimeObject.getTime() / 1000, _0x3b5631 = _0x12c18b + _0x119d96.datetimeToDisplayTime, _0x2abad0 = Math.abs(_0x3bbde7 - _0x3b5631);
						if (_0x29011c !== null && _0x29011c < _0x2abad0) {
							break;
						}
						_0x29011c = _0x2abad0;
						_0x1410b6 = {
							'time': _0x3b5631,
							'segmentIndex': _0x15e506
						};
					}
				}
				return _0x1410b6;
			}
		},
		{
			'name': 'Segment',
			'run': function _0x1ed331(_0x4be467, _0x2a2f10, _0x161f41, _0x5cfd75, _0x4a89b7) {
				var _0x45124b = _0x2a2f10.segments || [], _0x4e24c9 = null, _0x39f422 = null;
				_0x4a89b7 = _0x4a89b7 || 0;
				for (var _0x203b08 = 0; _0x203b08 < _0x45124b.length; _0x203b08++) {
					var _0x4a2792 = _0x45124b[_0x203b08];
					if (_0x4a2792.timeline === _0x5cfd75 && typeof _0x4a2792.start !== 'undefined') {
						var _0x1c2c5b = Math.abs(_0x4a89b7 - _0x4a2792.start);
						if (_0x39f422 !== null && _0x39f422 < _0x1c2c5b) {
							break;
						}
						(!_0x4e24c9 || _0x39f422 === null || _0x39f422 >= _0x1c2c5b) && (_0x39f422 = _0x1c2c5b, _0x4e24c9 = {
							'time': _0x4a2792.start,
							'segmentIndex': _0x203b08
						});
					}
				}
				return _0x4e24c9;
			}
		},
		{
			'name': 'Discontinuity',
			'run': function _0x498e4a(_0x2d5af5, _0x3638db, _0x577800, _0x10b208, _0x4c459a) {
				var _0x32e0a2 = null;
				_0x4c459a = _0x4c459a || 0;
				if (_0x3638db.discontinuityStarts && _0x3638db.discontinuityStarts.length) {
					var _0x3dfb58 = null;
					for (var _0x457cb4 = 0; _0x457cb4 < _0x3638db.discontinuityStarts.length; _0x457cb4++) {
						var _0x492000 = _0x3638db.discontinuityStarts[_0x457cb4], _0x5a26b6 = _0x3638db.discontinuitySequence + _0x457cb4 + 1, _0x309048 = _0x2d5af5.discontinuities[_0x5a26b6];
						if (_0x309048) {
							var _0x2be822 = Math.abs(_0x4c459a - _0x309048.time);
							if (_0x3dfb58 !== null && _0x3dfb58 < _0x2be822) {
								break;
							}
							(!_0x32e0a2 || _0x3dfb58 === null || _0x3dfb58 >= _0x2be822) && (_0x3dfb58 = _0x2be822, _0x32e0a2 = {
								'time': _0x309048.time,
								'segmentIndex': _0x492000
							});
						}
					}
				}
				return _0x32e0a2;
			}
		},
		{
			'name': 'Playlist',
			'run': function _0x6a82f6(_0x33ed70, _0x10c799, _0x453053, _0x54b0f8, _0xfb6e30) {
				if (_0x10c799.syncInfo) {
					var _0x5613aa = {
						'time': _0x10c799.syncInfo.time,
						'segmentIndex': _0x10c799.syncInfo.mediaSequence - _0x10c799.mediaSequence
					};
					return _0x5613aa;
				}
				return null;
			}
		}
	], _0x3c8359 = function (_0x5cc463) {
		_0x2b5e46(_0x365607, _0x5cc463);
		function _0x365607() {
			_0x2f247f(this, _0x365607);
			var _0x31ab86 = _0x42d6e2(this, (_0x365607['__proto__'] || Object.getPrototypeOf(_0x365607)).call(this));
			return _0x31ab86.inspectCache_ = undefined, _0x31ab86.timelines = [], _0x31ab86.discontinuities = [], _0x31ab86.datetimeToDisplayTime = null, _0x31ab86.logger_ = _0x5f01a6('SyncController'), _0x31ab86;
		}
		return _0x1430d3(_0x365607, [
			{
				'key': 'getSyncPoint',
				'value': function _0x2ab283(_0x56609d, _0x1aa2b8, _0x81e1d4, _0x3d05fb) {
					var _0x212fae = this.runStrategies_(_0x56609d, _0x1aa2b8, _0x81e1d4, _0x3d05fb);
					if (!_0x212fae.length) {
						return null;
					}
					return this.selectSyncPoint_(_0x212fae, {
						'key': 'time',
						'value': _0x3d05fb
					});
				}
			},
			{
				'key': 'getExpiredTime',
				'value': function _0x2d8d81(_0x1646ce, _0x592819) {
					if (!_0x1646ce || !_0x1646ce.segments) {
						return null;
					}
					var _0x43dc91 = this.runStrategies_(_0x1646ce, _0x592819, _0x1646ce.discontinuitySequence, 0);
					if (!_0x43dc91.length) {
						return null;
					}
					var _0x4e8c4a = this.selectSyncPoint_(_0x43dc91, {
						'key': 'segmentIndex',
						'value': 0
					});
					return _0x4e8c4a.segmentIndex > 0 && (_0x4e8c4a.time *= -1), Math.abs(_0x4e8c4a.time + _0x459b9c(_0x1646ce, _0x4e8c4a.segmentIndex, 0));
				}
			},
			{
				'key': 'runStrategies_',
				'value': function _0x1876a6(_0x2ef2f5, _0x41a5a6, _0x3c2371, _0x1ad15c) {
					var _0x1c4c01 = [];
					for (var _0x3b9b10 = 0; _0x3b9b10 < _0x3b0c13.length; _0x3b9b10++) {
						var _0x1f07c0 = _0x3b0c13[_0x3b9b10], _0x44b0cd = _0x1f07c0.run(this, _0x2ef2f5, _0x41a5a6, _0x3c2371, _0x1ad15c);
						_0x44b0cd && (_0x44b0cd.strategy = _0x1f07c0.name, _0x1c4c01.push({
							'strategy': _0x1f07c0.name,
							'syncPoint': _0x44b0cd
						}));
					}
					return _0x1c4c01;
				}
			},
			{
				'key': 'selectSyncPoint_',
				'value': function _0x58c3f2(_0x3341fb, _0x1d1c52) {
					var _0x36a030 = _0x3341fb[0].syncPoint, _0x1c706d = Math.abs(_0x3341fb[0].syncPoint[_0x1d1c52.key] - _0x1d1c52.value), _0x28e5ee = _0x3341fb[0].strategy;
					for (var _0x348fab = 1; _0x348fab < _0x3341fb.length; _0x348fab++) {
						var _0x5a1a58 = Math.abs(_0x3341fb[_0x348fab].syncPoint[_0x1d1c52.key] - _0x1d1c52.value);
						if (_0x5a1a58 < _0x1c706d) {
							_0x1c706d = _0x5a1a58;
							_0x36a030 = _0x3341fb[_0x348fab].syncPoint;
							_0x28e5ee = _0x3341fb[_0x348fab].strategy;
						}
					}
					return this.logger_('syncPoint for [' + _0x1d1c52.key + ': ' + _0x1d1c52.value + '] chosen with strategy' + (' [' + _0x28e5ee + ']: [time:' + _0x36a030.time + ',') + (' segmentIndex:' + _0x36a030.segmentIndex + ']')), _0x36a030;
				}
			},
			{
				'key': 'saveExpiredSegmentInfo',
				'value': function _0x21c391(_0x2935c4, _0x1fd7e3) {
					var _0x52b715 = _0x1fd7e3.mediaSequence - _0x2935c4.mediaSequence;
					for (var _0x51fa05 = _0x52b715 - 1; _0x51fa05 >= 0; _0x51fa05--) {
						var _0x58da6c = _0x2935c4.segments[_0x51fa05];
						if (_0x58da6c && typeof _0x58da6c.start !== 'undefined') {
							_0x1fd7e3.syncInfo = {
								'mediaSequence': _0x2935c4.mediaSequence + _0x51fa05,
								'time': _0x58da6c.start
							};
							this.logger_('playlist refresh sync: [time:' + _0x1fd7e3.syncInfo.time + ',' + (' mediaSequence: ' + _0x1fd7e3.syncInfo.mediaSequence + ']'));
							this.trigger('syncinfoupdate');
							break;
						}
					}
				}
			},
			{
				'key': 'setDateTimeMapping',
				'value': function _0x349a40(_0x200ccc) {
					if (!this.datetimeToDisplayTime && _0x200ccc.segments && _0x200ccc.segments.length && _0x200ccc.segments[0].dateTimeObject) {
						var _0x258f45 = _0x200ccc.segments[0].dateTimeObject.getTime() / 1000;
						this.datetimeToDisplayTime = -_0x258f45;
					}
				}
			},
			{
				'key': 'reset',
				'value': function _0x2f7fa0() {
					this.inspectCache_ = undefined;
				}
			},
			{
				'key': 'probeSegmentInfo',
				'value': function _0x13ab70(_0x3e417) {
					var _0x1b8d42 = _0x3e417.segment, _0x40470b = _0x3e417.playlist, _0x66b5d7 = void 0;
					return _0x1b8d42.map ? _0x66b5d7 = this.probeMp4Segment_(_0x3e417) : _0x66b5d7 = this.probeTsSegment_(_0x3e417), _0x66b5d7 && (this.calculateSegmentTimeMapping_(_0x3e417, _0x66b5d7) && (this.saveDiscontinuitySyncInfo_(_0x3e417), !_0x40470b.syncInfo && (_0x40470b.syncInfo = {
						'mediaSequence': _0x40470b.mediaSequence + _0x3e417.mediaIndex,
						'time': _0x1b8d42.start
					}))), _0x66b5d7;
				}
			},
			{
				'key': 'probeMp4Segment_',
				'value': function _0x288b31(_0x57fcf2) {
					var _0x4cf35a = _0x57fcf2.segment, _0x438a0a = _0x104ab6.timescale(_0x4cf35a.map.bytes), _0x442460 = _0x104ab6.startTime(_0x438a0a, _0x57fcf2.bytes);
					return _0x57fcf2.timestampOffset !== null && (_0x57fcf2.timestampOffset -= _0x442460), {
						'start': _0x442460,
						'end': _0x442460 + _0x4cf35a.duration
					};
				}
			},
			{
				'key': 'probeTsSegment_',
				'value': function _0x445241(_0x319edd) {
					var _0x21af19 = _0x1c09d5(_0x319edd.bytes, this.inspectCache_), _0x27f44b = void 0, _0x283e6a = void 0;
					if (!_0x21af19) {
						return null;
					}
					if (_0x21af19.video && _0x21af19.video.length === 2) {
						this.inspectCache_ = _0x21af19.video[1].dts;
						_0x27f44b = _0x21af19.video[0].dtsTime;
						_0x283e6a = _0x21af19.video[1].dtsTime;
					} else {
						_0x21af19.audio && _0x21af19.audio.length === 2 && (this.inspectCache_ = _0x21af19.audio[1].dts, _0x27f44b = _0x21af19.audio[0].dtsTime, _0x283e6a = _0x21af19.audio[1].dtsTime);
					}
					return {
						'start': _0x27f44b,
						'end': _0x283e6a,
						'containsVideo': _0x21af19.video && _0x21af19.video.length === 2,
						'containsAudio': _0x21af19.audio && _0x21af19.audio.length === 2
					};
				}
			},
			{
				'key': 'timestampOffsetForTimeline',
				'value': function _0x56b8d4(_0x72a76a) {
					if (typeof this.timelines[_0x72a76a] === 'undefined') {
						return null;
					}
					return this.timelines[_0x72a76a].time;
				}
			},
			{
				'key': 'mappingForTimeline',
				'value': function _0x5ddfe3(_0x460c36) {
					if (typeof this.timelines[_0x460c36] === 'undefined') {
						return null;
					}
					return this.timelines[_0x460c36].mapping;
				}
			},
			{
				'key': 'calculateSegmentTimeMapping_',
				'value': function _0x3fffd9(_0x1ad5a1, _0x4a686c) {
					var _0x9eed82 = _0x1ad5a1.segment, _0x1445f9 = this.timelines[_0x1ad5a1.timeline];
					if (_0x1ad5a1.timestampOffset !== null) {
						_0x1445f9 = {
							'time': _0x1ad5a1.startOfSegment,
							'mapping': _0x1ad5a1.startOfSegment - _0x4a686c.start
						};
						this.timelines[_0x1ad5a1.timeline] = _0x1445f9;
						this.trigger('timestampoffset');
						this.logger_('time mapping for timeline ' + _0x1ad5a1.timeline + ': ' + ('[time: ' + _0x1445f9.time + '] [mapping: ' + _0x1445f9.mapping + ']'));
						_0x9eed82.start = _0x1ad5a1.startOfSegment;
						_0x9eed82.end = _0x4a686c.end + _0x1445f9.mapping;
					} else {
						if (_0x1445f9) {
							_0x9eed82.start = _0x4a686c.start + _0x1445f9.mapping;
							_0x9eed82.end = _0x4a686c.end + _0x1445f9.mapping;
						} else {
							return false;
						}
					}
					return true;
				}
			},
			{
				'key': 'saveDiscontinuitySyncInfo_',
				'value': function _0x2084f3(_0x5845c0) {
					var _0x4bcbbe = _0x5845c0.playlist, _0x153d5d = _0x5845c0.segment;
					if (_0x153d5d.discontinuity) {
						this.discontinuities[_0x153d5d.timeline] = {
							'time': _0x153d5d.start,
							'accuracy': 0
						};
					} else {
						if (_0x4bcbbe.discontinuityStarts && _0x4bcbbe.discontinuityStarts.length) {
							for (var _0x3ae5f9 = 0; _0x3ae5f9 < _0x4bcbbe.discontinuityStarts.length; _0x3ae5f9++) {
								var _0x3d7708 = _0x4bcbbe.discontinuityStarts[_0x3ae5f9], _0x1d9316 = _0x4bcbbe.discontinuitySequence + _0x3ae5f9 + 1, _0x40c63c = _0x3d7708 - _0x5845c0.mediaIndex, _0x53bbc8 = Math.abs(_0x40c63c);
								if (!this.discontinuities[_0x1d9316] || this.discontinuities[_0x1d9316].accuracy > _0x53bbc8) {
									var _0x138577 = void 0;
									_0x40c63c < 0 ? _0x138577 = _0x153d5d.start - _0x459b9c(_0x4bcbbe, _0x5845c0.mediaIndex, _0x3d7708) : _0x138577 = _0x153d5d.end + _0x459b9c(_0x4bcbbe, _0x5845c0.mediaIndex + 1, _0x3d7708);
									this.discontinuities[_0x1d9316] = {
										'time': _0x138577,
										'accuracy': _0x53bbc8
									};
								}
							}
						}
					}
				}
			}
		]), _0x365607;
	}(_0x1dff89.EventTarget), _0x13fedd = new _0x1ab5f4('./decrypter-worker.worker.js', function (_0x3af037, _0x2ad0b2) {
		var _0x270da4 = this, _0x374736 = (function () {
			function _0x68b2b4(_0x5b2801) {
				return _0x5b2801.subarray(0, _0x5b2801.byteLength - _0x5b2801[_0x5b2801.byteLength - 1]);
			}
			var _0x3b217d = function _0x4acd1b(_0x581f81, _0x269602) {
				if (!(_0x581f81 instanceof _0x269602)) {
					throw new TypeError('Cannot call a class as a function');
				}
			}, _0x2a7f88 = (function () {
				function _0x2a1f63(_0x4afc6a, _0x4be495) {
					for (var _0x49cd75 = 0; _0x49cd75 < _0x4be495.length; _0x49cd75++) {
						var _0x530b19 = _0x4be495[_0x49cd75];
						_0x530b19.enumerable = _0x530b19.enumerable || false;
						_0x530b19.configurable = true;
						if ('value' in _0x530b19) {
							_0x530b19.writable = true;
						}
						Object.defineProperty(_0x4afc6a, _0x530b19.key, _0x530b19);
					}
				}
				return function (_0xcab289, _0x1c0287, _0x43ea4a) {
					if (_0x1c0287) {
						_0x2a1f63(_0xcab289.prototype, _0x1c0287);
					}
					if (_0x43ea4a) {
						_0x2a1f63(_0xcab289, _0x43ea4a);
					}
					return _0xcab289;
				};
			}()), _0x29e189 = function _0x3cc6ab(_0x172c13, _0x31736b) {
				if (typeof _0x31736b !== 'function' && _0x31736b !== null) {
					throw new TypeError('Super expression must either be null or a function, not ' + (typeof _0x31736b === 'undefined' ? 'undefined' : _0x65b994(_0x31736b)));
				}
				_0x172c13.prototype = Object.create(_0x31736b && _0x31736b.prototype, {
					'constructor': {
						'value': _0x172c13,
						'enumerable': false,
						'writable': true,
						'configurable': true
					}
				});
				if (_0x31736b) {
					Object.setPrototypeOf ? Object.setPrototypeOf(_0x172c13, _0x31736b) : _0x172c13['__proto__'] = _0x31736b;
				}
			}, _0x389698 = function _0x2d8310(_0x2d1c3d, _0x20bf89) {
				if (!_0x2d1c3d) {
					throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
				}
				return _0x20bf89 && ((typeof _0x20bf89 === 'undefined' ? 'undefined' : _0x65b994(_0x20bf89)) === 'object' || typeof _0x20bf89 === 'function') ? _0x20bf89 : _0x2d1c3d;
			}, _0x37bd01 = function _0x540951() {
				var _0x5ba795 = [
					[
						[],
						[],
						[],
						[],
						[]
					],
					[
						[],
						[],
						[],
						[],
						[]
					]
				], _0x46854f = _0x5ba795[0], _0x46132f = _0x5ba795[1], _0x193b83 = _0x46854f[4], _0x9e4913 = _0x46132f[4], _0x56139f = void 0, _0x194d4f = void 0, _0x3a91d2 = void 0, _0x5b82a1 = [], _0xd62313 = [], _0x2b407e = void 0, _0x1a559f = void 0, _0x2b0c86 = void 0, _0x9b2c57 = void 0, _0x272edb = void 0, _0x192b78 = void 0;
				for (_0x56139f = 0; _0x56139f < 256; _0x56139f++) {
					_0xd62313[(_0x5b82a1[_0x56139f] = _0x56139f << 1 ^ (_0x56139f >> 7) * 283) ^ _0x56139f] = _0x56139f;
				}
				for (_0x194d4f = _0x3a91d2 = 0; !_0x193b83[_0x194d4f]; _0x194d4f ^= _0x2b407e || 1, _0x3a91d2 = _0xd62313[_0x3a91d2] || 1) {
					_0x9b2c57 = _0x3a91d2 ^ _0x3a91d2 << 1 ^ _0x3a91d2 << 2 ^ _0x3a91d2 << 3 ^ _0x3a91d2 << 4;
					_0x9b2c57 = _0x9b2c57 >> 8 ^ _0x9b2c57 & 255 ^ 99;
					_0x193b83[_0x194d4f] = _0x9b2c57;
					_0x9e4913[_0x9b2c57] = _0x194d4f;
					_0x2b0c86 = _0x5b82a1[_0x1a559f = _0x5b82a1[_0x2b407e = _0x5b82a1[_0x194d4f]]];
					_0x192b78 = _0x2b0c86 * 16843009 ^ _0x1a559f * 65537 ^ _0x2b407e * 257 ^ _0x194d4f * 16843008;
					_0x272edb = _0x5b82a1[_0x9b2c57] * 257 ^ _0x9b2c57 * 16843008;
					for (_0x56139f = 0; _0x56139f < 4; _0x56139f++) {
						_0x46854f[_0x56139f][_0x194d4f] = _0x272edb = _0x272edb << 24 ^ _0x272edb >>> 8;
						_0x46132f[_0x56139f][_0x9b2c57] = _0x192b78 = _0x192b78 << 24 ^ _0x192b78 >>> 8;
					}
				}
				for (_0x56139f = 0; _0x56139f < 5; _0x56139f++) {
					_0x46854f[_0x56139f] = _0x46854f[_0x56139f].slice(0);
					_0x46132f[_0x56139f] = _0x46132f[_0x56139f].slice(0);
				}
				return _0x5ba795;
			}, _0x5edd88 = null, _0x3c0266 = (function () {
				function _0x588fc4(_0x5e3072) {
					_0x3b217d(this, _0x588fc4);
					!_0x5edd88 && (_0x5edd88 = _0x37bd01());
					this['_tables'] = [
						[
							_0x5edd88[0][0].slice(),
							_0x5edd88[0][1].slice(),
							_0x5edd88[0][2].slice(),
							_0x5edd88[0][3].slice(),
							_0x5edd88[0][4].slice()
						],
						[
							_0x5edd88[1][0].slice(),
							_0x5edd88[1][1].slice(),
							_0x5edd88[1][2].slice(),
							_0x5edd88[1][3].slice(),
							_0x5edd88[1][4].slice()
						]
					];
					var _0x2c052f = void 0, _0x1eb3c0 = void 0, _0x2e2619 = void 0, _0x214ad5 = void 0, _0x5c36ac = void 0, _0x556008 = this['_tables'][0][4], _0x405ff6 = this['_tables'][1], _0x4efce5 = _0x5e3072.length, _0x2216a4 = 1;
					if (_0x4efce5 !== 4 && _0x4efce5 !== 6 && _0x4efce5 !== 8) {
						throw new Error('Invalid aes key size');
					}
					_0x214ad5 = _0x5e3072.slice(0);
					_0x5c36ac = [];
					this['_key'] = [
						_0x214ad5,
						_0x5c36ac
					];
					for (_0x2c052f = _0x4efce5; _0x2c052f < 4 * _0x4efce5 + 28; _0x2c052f++) {
						_0x2e2619 = _0x214ad5[_0x2c052f - 1];
						(_0x2c052f % _0x4efce5 === 0 || _0x4efce5 === 8 && _0x2c052f % _0x4efce5 === 4) && (_0x2e2619 = _0x556008[_0x2e2619 >>> 24] << 24 ^ _0x556008[_0x2e2619 >> 16 & 255] << 16 ^ _0x556008[_0x2e2619 >> 8 & 255] << 8 ^ _0x556008[_0x2e2619 & 255], _0x2c052f % _0x4efce5 === 0 && (_0x2e2619 = _0x2e2619 << 8 ^ _0x2e2619 >>> 24 ^ _0x2216a4 << 24, _0x2216a4 = _0x2216a4 << 1 ^ (_0x2216a4 >> 7) * 283));
						_0x214ad5[_0x2c052f] = _0x214ad5[_0x2c052f - _0x4efce5] ^ _0x2e2619;
					}
					for (_0x1eb3c0 = 0; _0x2c052f; _0x1eb3c0++, _0x2c052f--) {
						_0x2e2619 = _0x214ad5[_0x1eb3c0 & 3 ? _0x2c052f : _0x2c052f - 4];
						_0x2c052f <= 4 || _0x1eb3c0 < 4 ? _0x5c36ac[_0x1eb3c0] = _0x2e2619 : _0x5c36ac[_0x1eb3c0] = _0x405ff6[0][_0x556008[_0x2e2619 >>> 24]] ^ _0x405ff6[1][_0x556008[_0x2e2619 >> 16 & 255]] ^ _0x405ff6[2][_0x556008[_0x2e2619 >> 8 & 255]] ^ _0x405ff6[3][_0x556008[_0x2e2619 & 255]];
					}
				}
				return _0x588fc4.prototype.decrypt = function _0x34acf1(_0xfb0ec, _0x233753, _0x248a6a, _0x412a99, _0x591f66, _0x2f6e00) {
					var _0x918ef3 = this['_key'][1], _0x23abcb = _0xfb0ec ^ _0x918ef3[0], _0x4b0486 = _0x412a99 ^ _0x918ef3[1], _0x3ab7c0 = _0x248a6a ^ _0x918ef3[2], _0x54521b = _0x233753 ^ _0x918ef3[3], _0x4b0675 = void 0, _0x2091e0 = void 0, _0x20744d = void 0, _0x297825 = _0x918ef3.length / 4 - 2, _0x4a2ae2 = void 0, _0x59a99f = 4, _0x5e3450 = this['_tables'][1], _0x5383b3 = _0x5e3450[0], _0x243b66 = _0x5e3450[1], _0x1b66e8 = _0x5e3450[2], _0x1231e1 = _0x5e3450[3], _0x63d62b = _0x5e3450[4];
					for (_0x4a2ae2 = 0; _0x4a2ae2 < _0x297825; _0x4a2ae2++) {
						_0x4b0675 = _0x5383b3[_0x23abcb >>> 24] ^ _0x243b66[_0x4b0486 >> 16 & 255] ^ _0x1b66e8[_0x3ab7c0 >> 8 & 255] ^ _0x1231e1[_0x54521b & 255] ^ _0x918ef3[_0x59a99f];
						_0x2091e0 = _0x5383b3[_0x4b0486 >>> 24] ^ _0x243b66[_0x3ab7c0 >> 16 & 255] ^ _0x1b66e8[_0x54521b >> 8 & 255] ^ _0x1231e1[_0x23abcb & 255] ^ _0x918ef3[_0x59a99f + 1];
						_0x20744d = _0x5383b3[_0x3ab7c0 >>> 24] ^ _0x243b66[_0x54521b >> 16 & 255] ^ _0x1b66e8[_0x23abcb >> 8 & 255] ^ _0x1231e1[_0x4b0486 & 255] ^ _0x918ef3[_0x59a99f + 2];
						_0x54521b = _0x5383b3[_0x54521b >>> 24] ^ _0x243b66[_0x23abcb >> 16 & 255] ^ _0x1b66e8[_0x4b0486 >> 8 & 255] ^ _0x1231e1[_0x3ab7c0 & 255] ^ _0x918ef3[_0x59a99f + 3];
						_0x59a99f += 4;
						_0x23abcb = _0x4b0675;
						_0x4b0486 = _0x2091e0;
						_0x3ab7c0 = _0x20744d;
					}
					for (_0x4a2ae2 = 0; _0x4a2ae2 < 4; _0x4a2ae2++) {
						_0x591f66[(3 & -_0x4a2ae2) + _0x2f6e00] = _0x63d62b[_0x23abcb >>> 24] << 24 ^ _0x63d62b[_0x4b0486 >> 16 & 255] << 16 ^ _0x63d62b[_0x3ab7c0 >> 8 & 255] << 8 ^ _0x63d62b[_0x54521b & 255] ^ _0x918ef3[_0x59a99f++];
						_0x4b0675 = _0x23abcb;
						_0x23abcb = _0x4b0486;
						_0x4b0486 = _0x3ab7c0;
						_0x3ab7c0 = _0x54521b;
						_0x54521b = _0x4b0675;
					}
				}, _0x588fc4;
			}()), _0x384b38 = (function () {
				function _0x7279d0() {
					_0x3b217d(this, _0x7279d0);
					this.listeners = {};
				}
				return _0x7279d0.prototype.on = function _0xbda314(_0x202f0b, _0x1c4a4c) {
					!this.listeners[_0x202f0b] && (this.listeners[_0x202f0b] = []);
					this.listeners[_0x202f0b].push(_0x1c4a4c);
				}, _0x7279d0.prototype.off = function _0x9c8a06(_0x480c0a, _0x2eef06) {
					if (!this.listeners[_0x480c0a]) {
						return false;
					}
					var _0x62518f = this.listeners[_0x480c0a].indexOf(_0x2eef06);
					return this.listeners[_0x480c0a].splice(_0x62518f, 1), _0x62518f > -1;
				}, _0x7279d0.prototype.trigger = function _0x2849dc(_0x182cc6) {
					var _0x311e03 = this.listeners[_0x182cc6];
					if (!_0x311e03) {
						return;
					}
					if (arguments.length === 2) {
						var _0xfe14a6 = _0x311e03.length;
						for (var _0x230b25 = 0; _0x230b25 < _0xfe14a6; ++_0x230b25) {
							_0x311e03[_0x230b25].call(this, arguments[1]);
						}
					} else {
						var _0x3e606c = Array.prototype.slice.call(arguments, 1), _0x5c3ea5 = _0x311e03.length;
						for (var _0x163567 = 0; _0x163567 < _0x5c3ea5; ++_0x163567) {
							_0x311e03[_0x163567].apply(this, _0x3e606c);
						}
					}
				}, _0x7279d0.prototype.dispose = function _0x3ed007() {
					this.listeners = {};
				}, _0x7279d0.prototype.pipe = function _0x2c4f1f(_0x222454) {
					this.on('data', function (_0x5eaef1) {
						_0x222454.push(_0x5eaef1);
					});
				}, _0x7279d0;
			}()), _0x959767 = function (_0x4aebed) {
				_0x29e189(_0x573629, _0x4aebed);
				function _0x573629() {
					_0x3b217d(this, _0x573629);
					var _0x4dd190 = _0x389698(this, _0x4aebed.call(this, _0x384b38));
					return _0x4dd190.jobs = [], _0x4dd190.delay = 1, _0x4dd190.timeout_ = null, _0x4dd190;
				}
				return _0x573629.prototype.processJob_ = function _0x997c5() {
					this.jobs.shift()();
					this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null;
				}, _0x573629.prototype.push = function _0x251f7f(_0x502cb5) {
					this.jobs.push(_0x502cb5);
					!this.timeout_ && (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay));
				}, _0x573629;
			}(_0x384b38), _0x33ef35 = function _0x124ed6(_0x8729f9) {
				return _0x8729f9 << 24 | (_0x8729f9 & 65280) << 8 | (_0x8729f9 & 16711680) >> 8 | _0x8729f9 >>> 24;
			}, _0x5a2c2c = function _0xd2b8dd(_0x468f58, _0x4b20aa, _0x8f88da) {
				var _0x161acc = new Int32Array(_0x468f58.buffer, _0x468f58.byteOffset, _0x468f58.byteLength >> 2), _0x11d656 = new _0x3c0266(Array.prototype.slice.call(_0x4b20aa)), _0xb4e6d9 = new Uint8Array(_0x468f58.byteLength), _0x89d650 = new Int32Array(_0xb4e6d9.buffer), _0x548f3c = void 0, _0x1439c2 = void 0, _0x37af75 = void 0, _0x291e6a = void 0, _0x386bd5 = void 0, _0x29549e = void 0, _0xb56c74 = void 0, _0x475437 = void 0, _0x46d414 = void 0;
				_0x548f3c = _0x8f88da[0];
				_0x1439c2 = _0x8f88da[1];
				_0x37af75 = _0x8f88da[2];
				_0x291e6a = _0x8f88da[3];
				for (_0x46d414 = 0; _0x46d414 < _0x161acc.length; _0x46d414 += 4) {
					_0x386bd5 = _0x33ef35(_0x161acc[_0x46d414]);
					_0x29549e = _0x33ef35(_0x161acc[_0x46d414 + 1]);
					_0xb56c74 = _0x33ef35(_0x161acc[_0x46d414 + 2]);
					_0x475437 = _0x33ef35(_0x161acc[_0x46d414 + 3]);
					_0x11d656.decrypt(_0x386bd5, _0x29549e, _0xb56c74, _0x475437, _0x89d650, _0x46d414);
					_0x89d650[_0x46d414] = _0x33ef35(_0x89d650[_0x46d414] ^ _0x548f3c);
					_0x89d650[_0x46d414 + 1] = _0x33ef35(_0x89d650[_0x46d414 + 1] ^ _0x1439c2);
					_0x89d650[_0x46d414 + 2] = _0x33ef35(_0x89d650[_0x46d414 + 2] ^ _0x37af75);
					_0x89d650[_0x46d414 + 3] = _0x33ef35(_0x89d650[_0x46d414 + 3] ^ _0x291e6a);
					_0x548f3c = _0x386bd5;
					_0x1439c2 = _0x29549e;
					_0x37af75 = _0xb56c74;
					_0x291e6a = _0x475437;
				}
				return _0xb4e6d9;
			}, _0x3cb653 = (function () {
				function _0x2b127e(_0x2d5f26, _0x10ec59, _0x35aa2b, _0x54f3a5) {
					_0x3b217d(this, _0x2b127e);
					var _0x2de914 = _0x2b127e.STEP, _0x40ca53 = new Int32Array(_0x2d5f26.buffer), _0x1256c3 = new Uint8Array(_0x2d5f26.byteLength), _0x2478bf = 0;
					this.asyncStream_ = new _0x959767();
					this.asyncStream_.push(this.decryptChunk_(_0x40ca53.subarray(_0x2478bf, _0x2478bf + _0x2de914), _0x10ec59, _0x35aa2b, _0x1256c3));
					for (_0x2478bf = _0x2de914; _0x2478bf < _0x40ca53.length; _0x2478bf += _0x2de914) {
						_0x35aa2b = new Uint32Array([
							_0x33ef35(_0x40ca53[_0x2478bf - 4]),
							_0x33ef35(_0x40ca53[_0x2478bf - 3]),
							_0x33ef35(_0x40ca53[_0x2478bf - 2]),
							_0x33ef35(_0x40ca53[_0x2478bf - 1])
						]);
						this.asyncStream_.push(this.decryptChunk_(_0x40ca53.subarray(_0x2478bf, _0x2478bf + _0x2de914), _0x10ec59, _0x35aa2b, _0x1256c3));
					}
					this.asyncStream_.push(function () {
						_0x54f3a5(null, _0x68b2b4(_0x1256c3));
					});
				}
				return _0x2b127e.prototype.decryptChunk_ = function _0x200a3c(_0x4cf247, _0x5759b6, _0x575a1a, _0x5a2487) {
					return function () {
						var _0x3c77cf = _0x5a2c2c(_0x4cf247, _0x5759b6, _0x575a1a);
						_0x5a2487.set(_0x3c77cf, _0x4cf247.byteOffset);
					};
				}, _0x2a7f88(_0x2b127e, null, [{
					'key': 'STEP',
					'get': function _0x528d93() {
						return 32000;
					}
				}]), _0x2b127e;
			}()), _0x95a5b = function _0x478b01(_0x4b8d89) {
				var _0x2d3f6b = {};
				return Object.keys(_0x4b8d89).forEach(function (_0x3f9e96) {
					var _0x23d729 = _0x4b8d89[_0x3f9e96];
					ArrayBuffer.isView(_0x23d729) ? _0x2d3f6b[_0x3f9e96] = {
						'bytes': _0x23d729.buffer,
						'byteOffset': _0x23d729.byteOffset,
						'byteLength': _0x23d729.byteLength
					} : _0x2d3f6b[_0x3f9e96] = _0x23d729;
				}), _0x2d3f6b;
			}, _0x42a790 = function _0x168019(_0x4948da) {
				_0x4948da.onmessage = function (_0x4cd029) {
					var _0x35d605 = _0x4cd029.data, _0xf2c5b5 = new Uint8Array(_0x35d605.encrypted.bytes, _0x35d605.encrypted.byteOffset, _0x35d605.encrypted.byteLength), _0x5287f1 = new Uint32Array(_0x35d605.key.bytes, _0x35d605.key.byteOffset, _0x35d605.key.byteLength / 4), _0x521865 = new Uint32Array(_0x35d605.iv.bytes, _0x35d605.iv.byteOffset, _0x35d605.iv.byteLength / 4);
					new _0x3cb653(_0xf2c5b5, _0x5287f1, _0x521865, function (_0x275632, _0x636571) {
						_0x4948da.postMessage(_0x95a5b({
							'source': _0x35d605.source,
							'decrypted': _0x636571
						}), [_0x636571.buffer]);
					});
				};
			}, _0x2b5e40 = new _0x42a790(_0x270da4);
			return _0x2b5e40;
		}());
	}), _0xd50271 = function _0x37f288(_0x284583) {
		var _0x5caa12 = _0x284583.default ? 'main' : 'alternative';
		return _0x284583.characteristics && _0x284583.characteristics.indexOf('public.accessibility.describes-video') >= 0 && (_0x5caa12 = 'main-desc'), _0x5caa12;
	}, _0x4218cd = function _0x1d4927(_0x161abc, _0x3e0e74) {
		_0x161abc.abort();
		_0x161abc.pause();
		_0x3e0e74 && _0x3e0e74.activePlaylistLoader && (_0x3e0e74.activePlaylistLoader.pause(), _0x3e0e74.activePlaylistLoader = null);
	}, _0x31526b = function _0x72fb3e(_0x18c237, _0x2a88ea) {
		_0x2a88ea.activePlaylistLoader = _0x18c237;
		_0x18c237.load();
	}, _0x1d90b6 = function _0x4499a8(_0xbe230f, _0x566567) {
		return function () {
			var _0x3387de = _0x566567.segmentLoaders, _0x5c6bea = _0x3387de[_0xbe230f], _0x5b4751 = _0x3387de.main, _0x46dbc4 = _0x566567.mediaTypes[_0xbe230f], _0x45c974 = _0x46dbc4.activeTrack(), _0x5645d0 = _0x46dbc4.activeGroup(_0x45c974), _0x1d5538 = _0x46dbc4.activePlaylistLoader;
			_0x4218cd(_0x5c6bea, _0x46dbc4);
			if (!_0x5645d0) {
				return;
			}
			if (!_0x5645d0.playlistLoader) {
				_0x1d5538 && _0x5b4751.resetEverything();
				return;
			}
			_0x5c6bea.resyncLoader();
			_0x31526b(_0x5645d0.playlistLoader, _0x46dbc4);
		};
	}, _0x1204ac = function _0x308d86(_0x3696cf, _0x281379) {
		return function () {
			var _0x324551 = _0x281379.segmentLoaders, _0x3e5d89 = _0x324551[_0x3696cf], _0xb7eb70 = _0x324551.main, _0x4e1578 = _0x281379.mediaTypes[_0x3696cf], _0x1383dc = _0x4e1578.activeTrack(), _0x1b9ef0 = _0x4e1578.activeGroup(_0x1383dc), _0x3e7db0 = _0x4e1578.activePlaylistLoader;
			_0x4218cd(_0x3e5d89, _0x4e1578);
			if (!_0x1b9ef0) {
				return;
			}
			if (!_0x1b9ef0.playlistLoader) {
				_0xb7eb70.resetEverything();
				return;
			}
			if (_0x3e7db0 === _0x1b9ef0.playlistLoader) {
				_0x31526b(_0x1b9ef0.playlistLoader, _0x4e1578);
				return;
			}
			_0x3e5d89.track && _0x3e5d89.track(_0x1383dc);
			_0x3e5d89.resetEverything();
			_0x31526b(_0x1b9ef0.playlistLoader, _0x4e1578);
		};
	}, _0x3928f5 = {
		'AUDIO': function _0x274f2c(_0x8c4985, _0x51314c) {
			return function () {
				var _0x167baf = _0x51314c.segmentLoaders[_0x8c4985], _0x3b1df9 = _0x51314c.mediaTypes[_0x8c4985], _0x55b7d4 = _0x51314c.blacklistCurrentPlaylist;
				_0x4218cd(_0x167baf, _0x3b1df9);
				var _0x586407 = _0x3b1df9.activeTrack(), _0x143365 = _0x3b1df9.activeGroup(), _0x3f77fa = (_0x143365.filter(function (_0x201cd8) {
					return _0x201cd8.default;
				})[0] || _0x143365[0]).id, _0x247cbe = _0x3b1df9.tracks[_0x3f77fa];
				if (_0x586407 === _0x247cbe) {
					_0x55b7d4({ 'message': 'Problem encountered loading the default audio track.' });
					return;
				}
				_0x1dff89.log.warn('Problem encountered loading the alternate audio track.Switching back to default.');
				for (var _0x4763d1 in _0x3b1df9.tracks) {
					_0x3b1df9.tracks[_0x4763d1].enabled = _0x3b1df9.tracks[_0x4763d1] === _0x247cbe;
				}
				_0x3b1df9.onTrackChanged();
			};
		},
		'SUBTITLES': function _0xe3ec5f(_0x15092e, _0x4bdb2f) {
			return function () {
				var _0x48a9af = _0x4bdb2f.segmentLoaders[_0x15092e], _0x5a7c30 = _0x4bdb2f.mediaTypes[_0x15092e];
				_0x1dff89.log.warn('Problem encountered loading the subtitle track.Disabling subtitle track.');
				_0x4218cd(_0x48a9af, _0x5a7c30);
				var _0x3ed6ee = _0x5a7c30.activeTrack();
				_0x3ed6ee && (_0x3ed6ee.mode = 'disabled');
				_0x5a7c30.onTrackChanged();
			};
		}
	}, _0x22f473 = {
		'AUDIO': function _0x5d667d(_0x2da3b8, _0x102bbd, _0xc07bb8) {
			if (!_0x102bbd) {
				return;
			}
			var _0xb7b9c3 = _0xc07bb8.tech, _0x576b90 = _0xc07bb8.requestOptions, _0x26c398 = _0xc07bb8.segmentLoaders[_0x2da3b8];
			_0x102bbd.on('loadedmetadata', function () {
				var _0x25da40 = _0x102bbd.media();
				_0x26c398.playlist(_0x25da40, _0x576b90);
				(!_0xb7b9c3.paused() || _0x25da40.endList && _0xb7b9c3.preload() !== 'none') && _0x26c398.load();
			});
			_0x102bbd.on('loadedplaylist', function () {
				_0x26c398.playlist(_0x102bbd.media(), _0x576b90);
				!_0xb7b9c3.paused() && _0x26c398.load();
			});
			_0x102bbd.on('error', _0x3928f5[_0x2da3b8](_0x2da3b8, _0xc07bb8));
		},
		'SUBTITLES': function _0xe96c75(_0x16fb43, _0x3fa8cf, _0x1a57c3) {
			var _0x3d0dda = _0x1a57c3.tech, _0x138f4c = _0x1a57c3.requestOptions, _0x21df58 = _0x1a57c3.segmentLoaders[_0x16fb43], _0x485979 = _0x1a57c3.mediaTypes[_0x16fb43];
			_0x3fa8cf.on('loadedmetadata', function () {
				var _0x555083 = _0x3fa8cf.media();
				_0x21df58.playlist(_0x555083, _0x138f4c);
				_0x21df58.track(_0x485979.activeTrack());
				(!_0x3d0dda.paused() || _0x555083.endList && _0x3d0dda.preload() !== 'none') && _0x21df58.load();
			});
			_0x3fa8cf.on('loadedplaylist', function () {
				_0x21df58.playlist(_0x3fa8cf.media(), _0x138f4c);
				!_0x3d0dda.paused() && _0x21df58.load();
			});
			_0x3fa8cf.on('error', _0x3928f5[_0x16fb43](_0x16fb43, _0x1a57c3));
		}
	}, _0xca6d7b = function _0x369023(_0xb444a4, _0x41ae54) {
		return function (_0x80c755) {
			return _0x80c755.attributes[_0xb444a4] === _0x41ae54;
		};
	}, _0x27cf76 = function _0x3ab176(_0x51c75e) {
		return function (_0x240185) {
			return _0x240185.resolvedUri === _0x51c75e;
		};
	}, _0x566c34 = {
		'AUDIO': function _0x5c49b9(_0x58b05a, _0x3f9e6d) {
			var _0x589f6c = _0x3f9e6d.hls, _0xd818b6 = _0x3f9e6d.sourceType, _0x492c5c = _0x3f9e6d.segmentLoaders[_0x58b05a], _0x2a6464 = _0x3f9e6d.requestOptions.withCredentials, _0x31bf5d = _0x3f9e6d.master, _0x44b09b = _0x31bf5d.mediaGroups, _0x218e24 = _0x31bf5d.playlists, _0x131e2f = _0x3f9e6d.mediaTypes[_0x58b05a], _0x293319 = _0x131e2f.groups, _0x14f06c = _0x131e2f.tracks, _0x471e38 = _0x3f9e6d.masterPlaylistLoader;
			(!_0x44b09b[_0x58b05a] || Object.keys(_0x44b09b[_0x58b05a]).length === 0) && (_0x44b09b[_0x58b05a] = { 'main': { 'default': { 'default': true } } });
			for (var _0x3e37dc in _0x44b09b[_0x58b05a]) {
				!_0x293319[_0x3e37dc] && (_0x293319[_0x3e37dc] = []);
				var _0x1157c1 = _0x218e24.filter(_0xca6d7b(_0x58b05a, _0x3e37dc));
				for (var _0x14a29a in _0x44b09b[_0x58b05a][_0x3e37dc]) {
					var _0x3c2066 = _0x44b09b[_0x58b05a][_0x3e37dc][_0x14a29a], _0x4e9f65 = _0x1157c1.filter(_0x27cf76(_0x3c2066.resolvedUri));
					_0x4e9f65.length && delete _0x3c2066.resolvedUri;
					var _0x5067a2 = void 0;
					if (_0x3c2066.resolvedUri) {
						_0x5067a2 = new _0x104207(_0x3c2066.resolvedUri, _0x589f6c, _0x2a6464);
					} else {
						_0x3c2066.playlists && _0xd818b6 === 'dash' ? _0x5067a2 = new _0x1ea357(_0x3c2066.playlists[0], _0x589f6c, _0x2a6464, _0x471e38) : _0x5067a2 = null;
					}
					_0x3c2066 = _0x1dff89.mergeOptions({
						'id': _0x14a29a,
						'playlistLoader': _0x5067a2
					}, _0x3c2066);
					_0x22f473[_0x58b05a](_0x58b05a, _0x3c2066.playlistLoader, _0x3f9e6d);
					_0x293319[_0x3e37dc].push(_0x3c2066);
					if (typeof _0x14f06c[_0x14a29a] === 'undefined') {
						var _0x303a94 = new _0x1dff89.AudioTrack({
							'id': _0x14a29a,
							'kind': _0xd50271(_0x3c2066),
							'enabled': false,
							'language': _0x3c2066.language,
							'default': _0x3c2066.default,
							'label': _0x14a29a
						});
						_0x14f06c[_0x14a29a] = _0x303a94;
					}
				}
			}
			_0x492c5c.on('error', _0x3928f5[_0x58b05a](_0x58b05a, _0x3f9e6d));
		},
		'SUBTITLES': function _0x667f6d(_0x171580, _0x335626) {
			var _0x5ea3d2 = _0x335626.tech, _0x2e2a2d = _0x335626.hls, _0x4bacf1 = _0x335626.sourceType, _0x1fd5fb = _0x335626.segmentLoaders[_0x171580], _0x497bc4 = _0x335626.requestOptions.withCredentials, _0x26104d = _0x335626.master.mediaGroups, _0x1a69d9 = _0x335626.mediaTypes[_0x171580], _0x440845 = _0x1a69d9.groups, _0x19473d = _0x1a69d9.tracks, _0x11bd67 = _0x335626.masterPlaylistLoader;
			for (var _0x21d07b in _0x26104d[_0x171580]) {
				!_0x440845[_0x21d07b] && (_0x440845[_0x21d07b] = []);
				for (var _0x24c6f8 in _0x26104d[_0x171580][_0x21d07b]) {
					if (_0x26104d[_0x171580][_0x21d07b][_0x24c6f8].forced) {
						continue;
					}
					var _0x2eb6a1 = _0x26104d[_0x171580][_0x21d07b][_0x24c6f8], _0x1a649c = void 0;
					if (_0x4bacf1 === 'hls') {
						_0x1a649c = new _0x104207(_0x2eb6a1.resolvedUri, _0x2e2a2d, _0x497bc4);
					} else {
						_0x4bacf1 === 'dash' && (_0x1a649c = new _0x1ea357(_0x2eb6a1.playlists[0], _0x2e2a2d, _0x497bc4, _0x11bd67));
					}
					_0x2eb6a1 = _0x1dff89.mergeOptions({
						'id': _0x24c6f8,
						'playlistLoader': _0x1a649c
					}, _0x2eb6a1);
					_0x22f473[_0x171580](_0x171580, _0x2eb6a1.playlistLoader, _0x335626);
					_0x440845[_0x21d07b].push(_0x2eb6a1);
					if (typeof _0x19473d[_0x24c6f8] === 'undefined') {
						var _0x5ad4ae = _0x5ea3d2.addRemoteTextTrack({
							'id': _0x24c6f8,
							'kind': 'subtitles',
							'enabled': false,
							'language': _0x2eb6a1.language,
							'label': _0x24c6f8
						}, false).track;
						_0x19473d[_0x24c6f8] = _0x5ad4ae;
					}
				}
			}
			_0x1fd5fb.on('error', _0x3928f5[_0x171580](_0x171580, _0x335626));
		},
		'CLOSED-CAPTIONS': function _0x8f5474(_0x5453b5, _0xd54684) {
			var _0x2f7340 = _0xd54684.tech, _0x4330a5 = _0xd54684.master.mediaGroups, _0x303040 = _0xd54684.mediaTypes[_0x5453b5], _0x252c18 = _0x303040.groups, _0x334bfd = _0x303040.tracks;
			for (var _0x2bb801 in _0x4330a5[_0x5453b5]) {
				!_0x252c18[_0x2bb801] && (_0x252c18[_0x2bb801] = []);
				for (var _0x551b02 in _0x4330a5[_0x5453b5][_0x2bb801]) {
					var _0xc745b1 = _0x4330a5[_0x5453b5][_0x2bb801][_0x551b02];
					if (!_0xc745b1.instreamId.match(/CC\d/)) {
						continue;
					}
					_0x252c18[_0x2bb801].push(_0x1dff89.mergeOptions({ 'id': _0x551b02 }, _0xc745b1));
					if (typeof _0x334bfd[_0x551b02] === 'undefined') {
						var _0x33a8fb = _0x2f7340.addRemoteTextTrack({
							'id': _0xc745b1.instreamId,
							'kind': 'captions',
							'enabled': false,
							'language': _0xc745b1.language,
							'label': _0x551b02
						}, false).track;
						_0x334bfd[_0x551b02] = _0x33a8fb;
					}
				}
			}
		}
	}, _0x43e4cb = function _0x357ec0(_0x3e976f, _0x2437cc) {
		return function (_0x35130a) {
			var _0x1211a7 = _0x2437cc.masterPlaylistLoader, _0x5e35a2 = _0x2437cc.mediaTypes[_0x3e976f].groups, _0x4f73dc = _0x1211a7.media();
			if (!_0x4f73dc) {
				return null;
			}
			var _0x5eadb0 = null;
			_0x4f73dc.attributes[_0x3e976f] && (_0x5eadb0 = _0x5e35a2[_0x4f73dc.attributes[_0x3e976f]]);
			_0x5eadb0 = _0x5eadb0 || _0x5e35a2.main;
			if (typeof _0x35130a === 'undefined') {
				return _0x5eadb0;
			}
			if (_0x35130a === null) {
				return null;
			}
			return _0x5eadb0.filter(function (_0x1d226d) {
				return _0x1d226d.id === _0x35130a.id;
			})[0] || null;
		};
	}, _0x588136 = {
		'AUDIO': function _0x50d4b1(_0x25cf85, _0xeda9d7) {
			return function () {
				var _0x5d9c82 = _0xeda9d7.mediaTypes[_0x25cf85].tracks;
				for (var _0x2269b6 in _0x5d9c82) {
					if (_0x5d9c82[_0x2269b6].enabled) {
						return _0x5d9c82[_0x2269b6];
					}
				}
				return null;
			};
		},
		'SUBTITLES': function _0x9c2591(_0x38343b, _0xdef291) {
			return function () {
				var _0x5e87cb = _0xdef291.mediaTypes[_0x38343b].tracks;
				for (var _0x208e02 in _0x5e87cb) {
					if (_0x5e87cb[_0x208e02].mode === 'showing') {
						return _0x5e87cb[_0x208e02];
					}
				}
				return null;
			};
		}
	}, _0x146691 = function _0x2c4423(_0x555c69) {
		[
			'AUDIO',
			'SUBTITLES',
			'CLOSED-CAPTIONS'
		].forEach(function (_0x49fed6) {
			_0x566c34[_0x49fed6](_0x49fed6, _0x555c69);
		});
		var _0x499e61 = _0x555c69.mediaTypes, _0x48c303 = _0x555c69.masterPlaylistLoader, _0x2f9bf5 = _0x555c69.tech, _0x5463da = _0x555c69.hls;
		[
			'AUDIO',
			'SUBTITLES'
		].forEach(function (_0x413459) {
			_0x499e61[_0x413459].activeGroup = _0x43e4cb(_0x413459, _0x555c69);
			_0x499e61[_0x413459].activeTrack = _0x588136[_0x413459](_0x413459, _0x555c69);
			_0x499e61[_0x413459].onGroupChanged = _0x1d90b6(_0x413459, _0x555c69);
			_0x499e61[_0x413459].onTrackChanged = _0x1204ac(_0x413459, _0x555c69);
		});
		var _0x12b944 = _0x499e61.AUDIO.activeGroup(), _0x37efd4 = (_0x12b944.filter(function (_0x1eb835) {
			return _0x1eb835.default;
		})[0] || _0x12b944[0]).id;
		_0x499e61.AUDIO.tracks[_0x37efd4].enabled = true;
		_0x499e61.AUDIO.onTrackChanged();
		_0x48c303.on('mediachange', function () {
			[
				'AUDIO',
				'SUBTITLES'
			].forEach(function (_0x5ea72d) {
				return _0x499e61[_0x5ea72d].onGroupChanged();
			});
		});
		var _0x2cc668 = function _0x3a65ed() {
			_0x499e61.AUDIO.onTrackChanged();
			_0x2f9bf5.trigger({
				'type': 'usage',
				'name': 'hls-audio-change'
			});
		};
		_0x2f9bf5.audioTracks().addEventListener('change', _0x2cc668);
		_0x2f9bf5.remoteTextTracks().addEventListener('change', _0x499e61.SUBTITLES.onTrackChanged);
		_0x5463da.on('dispose', function () {
			_0x2f9bf5.audioTracks().removeEventListener('change', _0x2cc668);
			_0x2f9bf5.remoteTextTracks().removeEventListener('change', _0x499e61.SUBTITLES.onTrackChanged);
		});
		_0x2f9bf5.clearTracks('audio');
		for (var _0x14e25b in _0x499e61.AUDIO.tracks) {
			_0x2f9bf5.audioTracks().addTrack(_0x499e61.AUDIO.tracks[_0x14e25b]);
		}
	}, _0x458323 = function _0xed5721() {
		var _0x3fdf05 = {
			_0x482a92: {
				'groups': {},
				'tracks': {},
				'activePlaylistLoader': null,
				'activeGroup': _0x4c405b,
				'activeTrack': _0x4c405b,
				'onGroupChanged': _0x4c405b,
				'onTrackChanged': _0x4c405b
			}
		};
		return [
			'AUDIO',
			'SUBTITLES',
			'CLOSED-CAPTIONS'
		].forEach(function (_0x482a92) {
		}), _0x3fdf05;
	}, _0x576478 = void 0, _0x4907ae = [
		'mediaRequests',
		'mediaRequestsAborted',
		'mediaRequestsTimedout',
		'mediaRequestsErrored',
		'mediaTransferDuration',
		'mediaBytesTransferred'
	], _0x255a2c = function _0x16d739(_0x4f77a9) {
		return this.audioSegmentLoader_[_0x4f77a9] + this.mainSegmentLoader_[_0x4f77a9];
	}, _0x331683 = function (_0x591650) {
		_0x2b5e46(_0x2ec892, _0x591650);
		function _0x2ec892(_0x2669ad) {
			_0x2f247f(this, _0x2ec892);
			var _0xb0c4e0 = _0x42d6e2(this, (_0x2ec892['__proto__'] || Object.getPrototypeOf(_0x2ec892)).call(this)), _0x2a477c = _0x2669ad.url, _0x247be3 = _0x2669ad.withCredentials, _0x326d97 = _0x2669ad.tech, _0x2a08f8 = _0x2669ad.bandwidth, _0x1b1023 = _0x2669ad.externHls, _0x2a2f6d = _0x2669ad.useCueTags, _0x39a4f1 = _0x2669ad.blacklistDuration, _0x1b4d38 = _0x2669ad.enableLowInitialPlaylist, _0x5eebb8 = _0x2669ad.sourceType, _0x4d4a51 = _0x2669ad.seekTo;
			if (!_0x2a477c) {
				throw new Error('A non-empty playlist URL is required');
			}
			_0x576478 = _0x1b1023;
			_0xb0c4e0.withCredentials = _0x247be3;
			_0xb0c4e0.tech_ = _0x326d97;
			_0xb0c4e0.hls_ = _0x326d97.hls;
			_0xb0c4e0.seekTo_ = _0x4d4a51;
			_0xb0c4e0.sourceType_ = _0x5eebb8;
			_0xb0c4e0.useCueTags_ = _0x2a2f6d;
			_0xb0c4e0.blacklistDuration = _0x39a4f1;
			_0xb0c4e0.enableLowInitialPlaylist = _0x1b4d38;
			_0xb0c4e0.useCueTags_ && (_0xb0c4e0.cueTagsTrack_ = _0xb0c4e0.tech_.addTextTrack('metadata', 'ad-cues'), _0xb0c4e0.cueTagsTrack_.inBandMetadataTrackDispatchType = '');
			_0xb0c4e0.requestOptions_ = {
				'withCredentials': _0xb0c4e0.withCredentials,
				'timeout': null
			};
			_0xb0c4e0.mediaTypes_ = _0x458323();
			_0xb0c4e0.mediaSource = new _0x1dff89.MediaSource();
			_0xb0c4e0.mediaSource.addEventListener('sourceopen', _0xb0c4e0.handleSourceOpen_.bind(_0xb0c4e0));
			_0xb0c4e0.seekable_ = _0x1dff89.createTimeRanges();
			_0xb0c4e0.hasPlayed_ = function () {
				return false;
			};
			_0xb0c4e0.syncController_ = new _0x3c8359(_0x2669ad);
			_0xb0c4e0.segmentMetadataTrack_ = _0x326d97.addRemoteTextTrack({
				'kind': 'metadata',
				'label': 'segment-metadata'
			}, false).track;
			_0xb0c4e0.decrypter_ = new _0x13fedd();
			_0xb0c4e0.inbandTextTracks_ = {};
			var _0x5ebde3 = {
				'hls': _0xb0c4e0.hls_,
				'mediaSource': _0xb0c4e0.mediaSource,
				'currentTime': _0xb0c4e0.tech_.currentTime.bind(_0xb0c4e0.tech_),
				'seekable': function _0x554070() {
					return _0xb0c4e0.seekable();
				},
				'seeking': function _0x237f85() {
					return _0xb0c4e0.tech_.seeking();
				},
				'duration': function _0x495f3d() {
					return _0xb0c4e0.mediaSource.duration;
				},
				'hasPlayed': function _0x4882ab() {
					return _0xb0c4e0.hasPlayed_();
				},
				'goalBufferLength': function _0x1a5b6c() {
					return _0xb0c4e0.goalBufferLength();
				},
				'bandwidth': _0x2a08f8,
				'syncController': _0xb0c4e0.syncController_,
				'decrypter': _0xb0c4e0.decrypter_,
				'sourceType': _0xb0c4e0.sourceType_,
				'inbandTextTracks': _0xb0c4e0.inbandTextTracks_
			};
			return _0xb0c4e0.masterPlaylistLoader_ = _0xb0c4e0.sourceType_ === 'dash' ? new _0x1ea357(_0x2a477c, _0xb0c4e0.hls_, _0xb0c4e0.withCredentials) : new _0x104207(_0x2a477c, _0xb0c4e0.hls_, _0xb0c4e0.withCredentials), _0xb0c4e0.setupMasterPlaylistLoaderListeners_(), _0xb0c4e0.mainSegmentLoader_ = new _0x2c21f4(_0x1dff89.mergeOptions(_0x5ebde3, {
				'segmentMetadataTrack': _0xb0c4e0.segmentMetadataTrack_,
				'loaderType': 'main'
			}), _0x2669ad), _0xb0c4e0.audioSegmentLoader_ = new _0x2c21f4(_0x1dff89.mergeOptions(_0x5ebde3, { 'loaderType': 'audio' }), _0x2669ad), _0xb0c4e0.subtitleSegmentLoader_ = new _0x5753d8(_0x1dff89.mergeOptions(_0x5ebde3, { 'loaderType': 'vtt' }), _0x2669ad), _0xb0c4e0.setupSegmentLoaderListeners_(), _0x4907ae.forEach(function (_0x5c022b) {
				_0xb0c4e0[_0x5c022b + '_'] = _0x255a2c.bind(_0xb0c4e0, _0x5c022b);
			}), _0xb0c4e0.logger_ = _0x5f01a6('MPC'), _0xb0c4e0.masterPlaylistLoader_.load(), _0xb0c4e0;
		}
		return _0x1430d3(_0x2ec892, [
			{
				'key': 'setupMasterPlaylistLoaderListeners_',
				'value': function _0xb0975() {
					var _0x3c81ba = this;
					this.masterPlaylistLoader_.on('loadedmetadata', function () {
						var _0x17189f = _0x3c81ba.masterPlaylistLoader_.media(), _0x25f3a2 = _0x3c81ba.masterPlaylistLoader_.targetDuration * 1.5 * 1000;
						_0x1695d5(_0x3c81ba.masterPlaylistLoader_.master, _0x3c81ba.masterPlaylistLoader_.media()) ? _0x3c81ba.requestOptions_.timeout = 0 : _0x3c81ba.requestOptions_.timeout = _0x25f3a2;
						_0x17189f.endList && _0x3c81ba.tech_.preload() !== 'none' && (_0x3c81ba.mainSegmentLoader_.playlist(_0x17189f, _0x3c81ba.requestOptions_), _0x3c81ba.mainSegmentLoader_.load());
						_0x146691({
							'sourceType': _0x3c81ba.sourceType_,
							'segmentLoaders': {
								'AUDIO': _0x3c81ba.audioSegmentLoader_,
								'SUBTITLES': _0x3c81ba.subtitleSegmentLoader_,
								'main': _0x3c81ba.mainSegmentLoader_
							},
							'tech': _0x3c81ba.tech_,
							'requestOptions': _0x3c81ba.requestOptions_,
							'masterPlaylistLoader': _0x3c81ba.masterPlaylistLoader_,
							'hls': _0x3c81ba.hls_,
							'master': _0x3c81ba.master(),
							'mediaTypes': _0x3c81ba.mediaTypes_,
							'blacklistCurrentPlaylist': _0x3c81ba.blacklistCurrentPlaylist.bind(_0x3c81ba)
						});
						_0x3c81ba.triggerPresenceUsage_(_0x3c81ba.master(), _0x17189f);
						try {
							_0x3c81ba.setupSourceBuffers_();
						} catch (_0x5bdb7c) {
							return _0x1dff89.log.warn('Failed to create SourceBuffers', _0x5bdb7c), _0x3c81ba.mediaSource.endOfStream('decode');
						}
						_0x3c81ba.setupFirstPlay();
						_0x3c81ba.trigger('selectedinitialmedia');
					});
					this.masterPlaylistLoader_.on('loadedplaylist', function () {
						var _0x516af3 = _0x3c81ba.masterPlaylistLoader_.media();
						if (!_0x516af3) {
							_0x3c81ba.excludeUnsupportedVariants_();
							var _0x1687c7 = void 0;
							_0x3c81ba.enableLowInitialPlaylist && (_0x1687c7 = _0x3c81ba.selectInitialPlaylist());
							!_0x1687c7 && (_0x1687c7 = _0x3c81ba.selectPlaylist());
							_0x3c81ba.initialMedia_ = _0x1687c7;
							_0x3c81ba.masterPlaylistLoader_.media(_0x3c81ba.initialMedia_);
							return;
						}
						_0x3c81ba.useCueTags_ && _0x3c81ba.updateAdCues_(_0x516af3);
						_0x3c81ba.mainSegmentLoader_.playlist(_0x516af3, _0x3c81ba.requestOptions_);
						_0x3c81ba.updateDuration();
						!_0x3c81ba.tech_.paused() && (_0x3c81ba.mainSegmentLoader_.load(), _0x3c81ba.audioSegmentLoader_ && _0x3c81ba.audioSegmentLoader_.load());
						if (!_0x516af3.endList) {
							var _0x1d8e02 = function _0x382d2f() {
								var _0x86d50f = _0x3c81ba.seekable();
								_0x86d50f.length !== 0 && _0x3c81ba.mediaSource.addSeekableRange_(_0x86d50f.start(0), _0x86d50f.end(0));
							};
							if (_0x3c81ba.duration() !== Infinity) {
								var _0x1310e0 = function _0x3788de() {
									_0x3c81ba.duration() === Infinity ? _0x1d8e02() : _0x3c81ba.tech_.one('durationchange', _0x3788de);
								};
								_0x3c81ba.tech_.one('durationchange', _0x1310e0);
							} else {
								_0x1d8e02();
							}
						}
					});
					this.masterPlaylistLoader_.on('error', function () {
						_0x3c81ba.blacklistCurrentPlaylist(_0x3c81ba.masterPlaylistLoader_.error);
					});
					this.masterPlaylistLoader_.on('mediachanging', function () {
						_0x3c81ba.mainSegmentLoader_.abort();
						_0x3c81ba.mainSegmentLoader_.pause();
					});
					this.masterPlaylistLoader_.on('mediachange', function () {
						var _0x1f3a0 = _0x3c81ba.masterPlaylistLoader_.media(), _0x40829d = _0x3c81ba.masterPlaylistLoader_.targetDuration * 1.5 * 1000;
						_0x1695d5(_0x3c81ba.masterPlaylistLoader_.master, _0x3c81ba.masterPlaylistLoader_.media()) ? _0x3c81ba.requestOptions_.timeout = 0 : _0x3c81ba.requestOptions_.timeout = _0x40829d;
						_0x3c81ba.mainSegmentLoader_.playlist(_0x1f3a0, _0x3c81ba.requestOptions_);
						_0x3c81ba.mainSegmentLoader_.load();
						_0x3c81ba.tech_.trigger({
							'type': 'mediachange',
							'bubbles': true
						});
					});
					this.masterPlaylistLoader_.on('playlistunchanged', function () {
						var _0x155612 = _0x3c81ba.masterPlaylistLoader_.media(), _0x365f61 = _0x3c81ba.stuckAtPlaylistEnd_(_0x155612);
						_0x365f61 && (_0x3c81ba.blacklistCurrentPlaylist({ 'message': 'Playlist no longer updating.' }), _0x3c81ba.tech_.trigger('playliststuck'));
					});
					this.masterPlaylistLoader_.on('renditiondisabled', function () {
						_0x3c81ba.tech_.trigger({
							'type': 'usage',
							'name': 'hls-rendition-disabled'
						});
					});
					this.masterPlaylistLoader_.on('renditionenabled', function () {
						_0x3c81ba.tech_.trigger({
							'type': 'usage',
							'name': 'hls-rendition-enabled'
						});
					});
				}
			},
			{
				'key': 'triggerPresenceUsage_',
				'value': function _0x3ff10b(_0x45ab13, _0x53132d) {
					var _0x55f6fa = _0x45ab13.mediaGroups || {}, _0x1cf6db = true, _0x21c5b0 = Object.keys(_0x55f6fa.AUDIO);
					for (var _0x5150a8 in _0x55f6fa.AUDIO) {
						for (var _0x28864a in _0x55f6fa.AUDIO[_0x5150a8]) {
							var _0x1455bb = _0x55f6fa.AUDIO[_0x5150a8][_0x28864a];
							!_0x1455bb.uri && (_0x1cf6db = false);
						}
					}
					_0x1cf6db && this.tech_.trigger({
						'type': 'usage',
						'name': 'hls-demuxed'
					});
					Object.keys(_0x55f6fa.SUBTITLES).length && this.tech_.trigger({
						'type': 'usage',
						'name': 'hls-webvtt'
					});
					_0x576478.Playlist.isAes(_0x53132d) && this.tech_.trigger({
						'type': 'usage',
						'name': 'hls-aes'
					});
					_0x576478.Playlist.isFmp4(_0x53132d) && this.tech_.trigger({
						'type': 'usage',
						'name': 'hls-fmp4'
					});
					_0x21c5b0.length && Object.keys(_0x55f6fa.AUDIO[_0x21c5b0[0]]).length > 1 && this.tech_.trigger({
						'type': 'usage',
						'name': 'hls-alternate-audio'
					});
					this.useCueTags_ && this.tech_.trigger({
						'type': 'usage',
						'name': 'hls-playlist-cue-tags'
					});
				}
			},
			{
				'key': 'setupSegmentLoaderListeners_',
				'value': function _0x3fb8b1() {
					var _0x491fa6 = this;
					this.mainSegmentLoader_.on('bandwidthupdate', function () {
						var _0xa26779 = _0x491fa6.selectPlaylist(), _0xdd9e73 = _0x491fa6.masterPlaylistLoader_.media(), _0x54e450 = _0x491fa6.tech_.buffered(), _0xd597f0 = _0x54e450.length ? _0x54e450.end(_0x54e450.length - 1) - _0x491fa6.tech_.currentTime() : 0, _0x1e4016 = _0x491fa6.bufferLowWaterLine();
						(!_0xdd9e73.endList || _0x491fa6.duration() < _0x229d75.MAX_BUFFER_LOW_WATER_LINE || _0xa26779.attributes.BANDWIDTH < _0xdd9e73.attributes.BANDWIDTH || _0xd597f0 >= _0x1e4016) && _0x491fa6.masterPlaylistLoader_.media(_0xa26779);
						_0x491fa6.tech_.trigger('bandwidthupdate');
					});
					this.mainSegmentLoader_.on('progress', function () {
						_0x491fa6.trigger('progress');
					});
					this.mainSegmentLoader_.on('error', function () {
						_0x491fa6.blacklistCurrentPlaylist(_0x491fa6.mainSegmentLoader_.error());
					});
					this.mainSegmentLoader_.on('syncinfoupdate', function () {
						_0x491fa6.onSyncInfoUpdate_();
					});
					this.mainSegmentLoader_.on('timestampoffset', function () {
						_0x491fa6.tech_.trigger({
							'type': 'usage',
							'name': 'hls-timestamp-offset'
						});
					});
					this.audioSegmentLoader_.on('syncinfoupdate', function () {
						_0x491fa6.onSyncInfoUpdate_();
					});
					this.mainSegmentLoader_.on('ended', function () {
						_0x491fa6.onEndOfStream();
					});
					this.mainSegmentLoader_.on('earlyabort', function () {
						_0x491fa6.blacklistCurrentPlaylist({ 'message': 'Aborted early because there isn\'t enough bandwidth to complete the request without rebuffering.' }, 120);
					});
					this.mainSegmentLoader_.on('reseteverything', function () {
						_0x491fa6.tech_.trigger('hls-reset');
					});
					this.mainSegmentLoader_.on('segmenttimemapping', function (_0x398316) {
						_0x491fa6.tech_.trigger({
							'type': 'hls-segment-time-mapping',
							'mapping': _0x398316.mapping
						});
					});
					this.audioSegmentLoader_.on('ended', function () {
						_0x491fa6.onEndOfStream();
					});
				}
			},
			{
				'key': 'mediaSecondsLoaded_',
				'value': function _0x5506b9() {
					return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded);
				}
			},
			{
				'key': 'load',
				'value': function _0x501a53() {
					this.mainSegmentLoader_.load();
					this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load();
					this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load();
				}
			},
			{
				'key': 'smoothQualityChange_',
				'value': function _0xd5f587() {
					var _0x1de42b = this.selectPlaylist();
					if (_0x1de42b !== this.masterPlaylistLoader_.media()) {
						this.masterPlaylistLoader_.media(_0x1de42b);
						this.mainSegmentLoader_.resetLoader();
					}
				}
			},
			{
				'key': 'fastQualityChange_',
				'value': function _0x354246() {
					var _0x417272 = this, _0x49ad5c = this.selectPlaylist();
					if (_0x49ad5c === this.masterPlaylistLoader_.media()) {
						return;
					}
					this.masterPlaylistLoader_.media(_0x49ad5c);
					this.mainSegmentLoader_.resetEverything(function () {
						_0x417272.tech_.setCurrentTime(_0x417272.tech_.currentTime());
					});
				}
			},
			{
				'key': 'play',
				'value': function _0x10e7a1() {
					if (this.setupFirstPlay()) {
						return;
					}
					this.tech_.ended() && this.seekTo_(0);
					this.hasPlayed_() && this.load();
					var _0x389969 = this.tech_.seekable();
					if (this.tech_.duration() === Infinity) {
						if (this.tech_.currentTime() < _0x389969.start(0)) {
							return this.seekTo_(_0x389969.end(_0x389969.length - 1));
						}
					}
				}
			},
			{
				'key': 'setupFirstPlay',
				'value': function _0x484572() {
					var _0x15285e = this, _0x16383c = this.masterPlaylistLoader_.media();
					if (!_0x16383c || this.tech_.paused() || this.hasPlayed_()) {
						return false;
					}
					if (!_0x16383c.endList) {
						var _0xe48efe = this.seekable();
						if (!_0xe48efe.length) {
							return false;
						}
						if (_0x1dff89.browser.IE_VERSION && this.tech_.readyState() === 0) {
							return this.tech_.one('loadedmetadata', function () {
								_0x15285e.trigger('firstplay');
								_0x15285e.seekTo_(_0xe48efe.end(0));
								_0x15285e.hasPlayed_ = function () {
									return true;
								};
							}), false;
						}
						this.trigger('firstplay');
						this.seekTo_(_0xe48efe.end(0));
					}
					return this.hasPlayed_ = function () {
						return true;
					}, this.load(), true;
				}
			},
			{
				'key': 'handleSourceOpen_',
				'value': function _0x5c0230() {
					try {
						this.setupSourceBuffers_();
					} catch (_0x57a490) {
						return _0x1dff89.log.warn('Failed to create Source Buffers', _0x57a490), this.mediaSource.endOfStream('decode');
					}
					if (this.tech_.autoplay()) {
						var _0x385a6a = this.tech_.play();
						typeof _0x385a6a !== 'undefined' && typeof _0x385a6a.then === 'function' && _0x385a6a.then(null, function (_0x55872b) {
						});
					}
					this.trigger('sourceopen');
				}
			},
			{
				'key': 'onEndOfStream',
				'value': function _0x575aee() {
					var _0x337ec4 = this.mainSegmentLoader_.ended_;
					this.mediaTypes_.AUDIO.activePlaylistLoader && (!this.mainSegmentLoader_.startingMedia_ || this.mainSegmentLoader_.startingMedia_.containsVideo ? _0x337ec4 = _0x337ec4 && this.audioSegmentLoader_.ended_ : _0x337ec4 = this.audioSegmentLoader_.ended_);
					_0x337ec4 && this.mediaSource.endOfStream();
				}
			},
			{
				'key': 'stuckAtPlaylistEnd_',
				'value': function _0x5aee25(_0x3d36af) {
					var _0x40dcd0 = this.seekable();
					if (!_0x40dcd0.length) {
						return false;
					}
					var _0x474236 = this.syncController_.getExpiredTime(_0x3d36af, this.mediaSource.duration);
					if (_0x474236 === null) {
						return false;
					}
					var _0x4b441c = _0x576478.Playlist.playlistEnd(_0x3d36af, _0x474236), _0x606a07 = this.tech_.currentTime(), _0x326ef2 = this.tech_.buffered();
					if (!_0x326ef2.length) {
						return _0x4b441c - _0x606a07 <= _0x43d632;
					}
					var _0x489ae2 = _0x326ef2.end(_0x326ef2.length - 1);
					return _0x489ae2 - _0x606a07 <= _0x43d632 && _0x4b441c - _0x489ae2 <= _0x43d632;
				}
			},
			{
				'key': 'blacklistCurrentPlaylist',
				'value': function _0x12b045() {
					var _0x566b9d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _0x1db9be = arguments[1], _0x3060d2 = void 0, _0x483573 = void 0;
					_0x3060d2 = _0x566b9d.playlist || this.masterPlaylistLoader_.media();
					_0x1db9be = _0x1db9be || _0x566b9d.blacklistDuration || this.blacklistDuration;
					if (!_0x3060d2) {
						this.error = _0x566b9d;
						try {
							return this.mediaSource.endOfStream('network');
						} catch (_0x54c6be) {
							return this.trigger('error');
						}
					}
					var _0x2568b3 = this.masterPlaylistLoader_.master.playlists.filter(_0x57fd3c).length === 1;
					if (_0x2568b3) {
						return _0x1dff89.log.warn('Problem encountered with the current HLS playlist. Trying again since it is the final playlist.'), this.tech_.trigger('retryplaylist'), this.masterPlaylistLoader_.load(_0x2568b3);
					}
					return _0x3060d2.excludeUntil = Date.now() + _0x1db9be * 1000, this.tech_.trigger('blacklistplaylist'), this.tech_.trigger({
						'type': 'usage',
						'name': 'hls-rendition-blacklisted'
					}), _0x483573 = this.selectPlaylist(), _0x1dff89.log.warn('Problem encountered with the current HLS playlist.' + (_0x566b9d.message ? ' ' + _0x566b9d.message : '') + ' Switching to another playlist.'), this.masterPlaylistLoader_.media(_0x483573);
				}
			},
			{
				'key': 'pauseLoading',
				'value': function _0x45d3e5() {
					this.mainSegmentLoader_.pause();
					this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.pause();
					this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.pause();
				}
			},
			{
				'key': 'setCurrentTime',
				'value': function _0xf8da2c(_0x2f0398) {
					var _0x12fc99 = _0x4dd7d7(this.tech_.buffered(), _0x2f0398);
					if (!(this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media())) {
						return 0;
					}
					if (!this.masterPlaylistLoader_.media().segments) {
						return 0;
					}
					if (_0x12fc99 && _0x12fc99.length) {
						return _0x2f0398;
					}
					this.mainSegmentLoader_.resetEverything();
					this.mainSegmentLoader_.abort();
					this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort());
					this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(), this.subtitleSegmentLoader_.abort());
					this.load();
				}
			},
			{
				'key': 'duration',
				'value': function _0x49148d() {
					if (!this.masterPlaylistLoader_) {
						return 0;
					}
					if (this.mediaSource) {
						return this.mediaSource.duration;
					}
					return _0x576478.Playlist.duration(this.masterPlaylistLoader_.media());
				}
			},
			{
				'key': 'seekable',
				'value': function _0x2f9b1d() {
					return this.seekable_;
				}
			},
			{
				'key': 'onSyncInfoUpdate_',
				'value': function _0x704505() {
					var _0x58bc5a = void 0, _0x208714 = void 0;
					if (!this.masterPlaylistLoader_) {
						return;
					}
					var _0x495eba = this.masterPlaylistLoader_.media();
					if (!_0x495eba) {
						return;
					}
					var _0x17dfb9 = this.syncController_.getExpiredTime(_0x495eba, this.mediaSource.duration);
					if (_0x17dfb9 === null) {
						return;
					}
					_0x58bc5a = _0x576478.Playlist.seekable(_0x495eba, _0x17dfb9);
					if (_0x58bc5a.length === 0) {
						return;
					}
					if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
						_0x495eba = this.mediaTypes_.AUDIO.activePlaylistLoader.media();
						_0x17dfb9 = this.syncController_.getExpiredTime(_0x495eba, this.mediaSource.duration);
						if (_0x17dfb9 === null) {
							return;
						}
						_0x208714 = _0x576478.Playlist.seekable(_0x495eba, _0x17dfb9);
						if (_0x208714.length === 0) {
							return;
						}
					}
					if (!_0x208714) {
						this.seekable_ = _0x58bc5a;
					} else {
						_0x208714.start(0) > _0x58bc5a.end(0) || _0x58bc5a.start(0) > _0x208714.end(0) ? this.seekable_ = _0x58bc5a : this.seekable_ = _0x1dff89.createTimeRanges([[
							_0x208714.start(0) > _0x58bc5a.start(0) ? _0x208714.start(0) : _0x58bc5a.start(0),
							_0x208714.end(0) < _0x58bc5a.end(0) ? _0x208714.end(0) : _0x58bc5a.end(0)
						]]);
					}
					this.logger_('seekable updated [' + _0x315dc9(this.seekable_) + ']');
					this.tech_.trigger('seekablechanged');
				}
			},
			{
				'key': 'updateDuration',
				'value': function _0x28bd31() {
					var _0x324fbe = this, _0x3aa808 = this.mediaSource.duration, _0x5ca95b = _0x576478.Playlist.duration(this.masterPlaylistLoader_.media()), _0x1ecec0 = this.tech_.buffered(), _0x44c21c = function _0x41469a() {
						_0x324fbe.mediaSource.duration = _0x5ca95b;
						_0x324fbe.tech_.trigger('durationchange');
						_0x324fbe.mediaSource.removeEventListener('sourceopen', _0x41469a);
					};
					_0x1ecec0.length > 0 && (_0x5ca95b = Math.max(_0x5ca95b, _0x1ecec0.end(_0x1ecec0.length - 1)));
					_0x3aa808 !== _0x5ca95b && (this.mediaSource.readyState !== 'open' ? this.mediaSource.addEventListener('sourceopen', _0x44c21c) : _0x44c21c());
				}
			},
			{
				'key': 'dispose',
				'value': function _0x87f4b5() {
					var _0x373319 = this;
					this.decrypter_.terminate();
					this.masterPlaylistLoader_.dispose();
					this.mainSegmentLoader_.dispose();
					[
						'AUDIO',
						'SUBTITLES'
					].forEach(function (_0xd0d677) {
						var _0x49afa3 = _0x373319.mediaTypes_[_0xd0d677].groups;
						for (var _0x3f6205 in _0x49afa3) {
							_0x49afa3[_0x3f6205].forEach(function (_0x4a2b4f) {
								_0x4a2b4f.playlistLoader && _0x4a2b4f.playlistLoader.dispose();
							});
						}
					});
					this.audioSegmentLoader_.dispose();
					this.subtitleSegmentLoader_.dispose();
				}
			},
			{
				'key': 'master',
				'value': function _0x290edc() {
					return this.masterPlaylistLoader_.master;
				}
			},
			{
				'key': 'media',
				'value': function _0x1b144c() {
					return this.masterPlaylistLoader_.media() || this.initialMedia_;
				}
			},
			{
				'key': 'setupSourceBuffers_',
				'value': function _0x1dd67e() {
					var _0x3172a3 = this.masterPlaylistLoader_.media(), _0x5c2b1c = void 0;
					if (!_0x3172a3 || this.mediaSource.readyState !== 'open') {
						return;
					}
					_0x5c2b1c = _0x555529(this.masterPlaylistLoader_.master, _0x3172a3);
					if (_0x5c2b1c.length < 1) {
						return this.error = 'No compatible SourceBuffer configuration for the variant stream:' + _0x3172a3.resolvedUri, this.mediaSource.endOfStream('decode');
					}
					this.configureLoaderMimeTypes_(_0x5c2b1c);
					this.excludeIncompatibleVariants_(_0x3172a3);
				}
			},
			{
				'key': 'configureLoaderMimeTypes_',
				'value': function _0xfaee91(_0xda531e) {
					var _0x9a2ea8 = _0xda531e.length > 1 && _0xda531e[0].indexOf(',') === -1 && _0xda531e[0] !== _0xda531e[1] ? new _0x1dff89.EventTarget() : null;
					this.mainSegmentLoader_.mimeType(_0xda531e[0], _0x9a2ea8);
					_0xda531e[1] && this.audioSegmentLoader_.mimeType(_0xda531e[1], _0x9a2ea8);
				}
			},
			{
				'key': 'excludeUnsupportedVariants_',
				'value': function _0x3d8082() {
					this.master().playlists.forEach(function (_0x191d66) {
						_0x191d66.attributes.CODECS && _0x562c10.MediaSource && _0x562c10.MediaSource.isTypeSupported && !_0x562c10.MediaSource.isTypeSupported('video/mp4; codecs="' + _0x10f809(_0x191d66.attributes.CODECS) + '"') && (_0x191d66.excludeUntil = Infinity);
					});
				}
			},
			{
				'key': 'excludeIncompatibleVariants_',
				'value': function _0x319692(_0x23f2cd) {
					var _0xfcf8cc = 2, _0x48463e = null, _0x27787f = void 0;
					_0x23f2cd.attributes.CODECS && (_0x27787f = _0x22c0d5(_0x23f2cd.attributes.CODECS), _0x48463e = _0x27787f.videoCodec, _0xfcf8cc = _0x27787f.codecCount);
					this.master().playlists.forEach(function (_0x4e1c88) {
						_0x4e1c88.attributes.CODECS && (_0x59350e = _0x22c0d5(_0x4e1c88.attributes.CODECS));
						_0x59350e.codecCount !== _0xfcf8cc && (_0x4e1c88.excludeUntil = Infinity);
						_0x59350e.videoCodec !== _0x48463e && (_0x4e1c88.excludeUntil = Infinity);
					});
				}
			},
			{
				'key': 'updateAdCues_',
				'value': function _0x443d99(_0x11a5ba) {
					var _0x3d6ba9 = 0, _0x5abb03 = this.seekable();
					_0x5abb03.length && (_0x3d6ba9 = _0x5abb03.start(0));
					_0x5e9e4e(_0x11a5ba, this.cueTagsTrack_, _0x3d6ba9);
				}
			},
			{
				'key': 'goalBufferLength',
				'value': function _0x431c02() {
					var _0x17c9b6 = this.tech_.currentTime(), _0x3a674f = _0x229d75.GOAL_BUFFER_LENGTH, _0x93845f = 1, _0x2458d2 = Math.max(_0x3a674f, _0x229d75.MAX_GOAL_BUFFER_LENGTH);
					return Math.min(_0x3a674f + _0x17c9b6 * _0x93845f, _0x2458d2);
				}
			},
			{
				'key': 'bufferLowWaterLine',
				'value': function _0x528d3f() {
					var _0x41cc51 = this.tech_.currentTime(), _0xe6c27a = _0x229d75.BUFFER_LOW_WATER_LINE, _0x5875ab = 1, _0x48d360 = Math.max(_0xe6c27a, _0x229d75.MAX_BUFFER_LOW_WATER_LINE);
					return Math.min(_0xe6c27a + _0x41cc51 * _0x5875ab, _0x48d360);
				}
			}
		]), _0x2ec892;
	}(_0x1dff89.EventTarget), _0x4de6d4 = function _0x4c80cc(_0x56e30c, _0xba599, _0x55a380) {
		return function (_0x1592b8) {
			var _0x4d46d5 = _0x56e30c.master.playlists[_0xba599], _0x2b8616 = _0x54c586(_0x4d46d5), _0x3736a7 = _0x57fd3c(_0x4d46d5);
			if (typeof _0x1592b8 === 'undefined') {
				return _0x3736a7;
			}
			return _0x1592b8 ? delete _0x4d46d5.disabled : _0x4d46d5.disabled = true, _0x1592b8 !== _0x3736a7 && !_0x2b8616 && (_0x55a380(), _0x1592b8 ? _0x56e30c.trigger('renditionenabled') : _0x56e30c.trigger('renditiondisabled')), _0x1592b8;
		};
	}, _0x11abe8 = function _0x36fa1a(_0x46da3c, _0x155a3f, _0x543026) {
		_0x2f247f(this, _0x36fa1a);
		var _0x2fa4f7 = _0x46da3c.masterPlaylistController_.fastQualityChange_.bind(_0x46da3c.masterPlaylistController_);
		if (_0x155a3f.attributes.RESOLUTION) {
			var _0x1e222d = _0x155a3f.attributes.RESOLUTION;
			this.width = _0x1e222d.width;
			this.height = _0x1e222d.height;
		}
		this.bandwidth = _0x155a3f.attributes.BANDWIDTH;
		this.id = _0x543026;
		this.enabled = _0x4de6d4(_0x46da3c.playlists, _0x155a3f.uri, _0x2fa4f7);
	}, _0x45b18e = function _0x3bdd44(_0x561185) {
		var _0x31c9ec = _0x561185.playlists;
		_0x561185.representations = function () {
			return _0x31c9ec.master.playlists.filter(function (_0x2e9bbd) {
				return !_0x54c586(_0x2e9bbd);
			}).map(function (_0x5097a6, _0x252782) {
				return new _0x11abe8(_0x561185, _0x5097a6, _0x5097a6.uri);
			});
		};
	}, _0x8a4abb = [
		'seeking',
		'seeked',
		'pause',
		'playing',
		'error'
	], _0xf84b63 = (function () {
		function _0x923813(_0x5dcc7a) {
			var _0x1d2dbc = this;
			_0x2f247f(this, _0x923813);
			this.tech_ = _0x5dcc7a.tech;
			this.seekable = _0x5dcc7a.seekable;
			this.seekTo = _0x5dcc7a.seekTo;
			this.consecutiveUpdates = 0;
			this.lastRecordedTime = null;
			this.timer_ = null;
			this.checkCurrentTimeTimeout_ = null;
			this.logger_ = _0x5f01a6('PlaybackWatcher');
			this.logger_('initialize');
			var _0x8c1017 = function _0x67746e() {
				return _0x1d2dbc.monitorCurrentTime_();
			}, _0x261fe5 = function _0xc5522f() {
				return _0x1d2dbc.techWaiting_();
			}, _0x603410 = function _0x1d9388() {
				return _0x1d2dbc.cancelTimer_();
			}, _0x3a9f5f = function _0x238535() {
				return _0x1d2dbc.fixesBadSeeks_();
			};
			this.tech_.on('seekablechanged', _0x3a9f5f);
			this.tech_.on('waiting', _0x261fe5);
			this.tech_.on(_0x8a4abb, _0x603410);
			this.tech_.on('canplay', _0x8c1017);
			this.dispose = function () {
				_0x1d2dbc.logger_('dispose');
				_0x1d2dbc.tech_.off('seekablechanged', _0x3a9f5f);
				_0x1d2dbc.tech_.off('waiting', _0x261fe5);
				_0x1d2dbc.tech_.off(_0x8a4abb, _0x603410);
				_0x1d2dbc.tech_.off('canplay', _0x8c1017);
				_0x1d2dbc.checkCurrentTimeTimeout_ && _0x562c10.clearTimeout(_0x1d2dbc.checkCurrentTimeTimeout_);
				_0x1d2dbc.cancelTimer_();
			};
		}
		return _0x1430d3(_0x923813, [
			{
				'key': 'monitorCurrentTime_',
				'value': function _0x42c7b4() {
					this.checkCurrentTime_();
					this.checkCurrentTimeTimeout_ && _0x562c10.clearTimeout(this.checkCurrentTimeTimeout_);
					this.checkCurrentTimeTimeout_ = _0x562c10.setTimeout(this.monitorCurrentTime_.bind(this), 250);
				}
			},
			{
				'key': 'checkCurrentTime_',
				'value': function _0x1a79d1() {
					if (this.tech_.seeking() && this.fixesBadSeeks_()) {
						this.consecutiveUpdates = 0;
						this.lastRecordedTime = this.tech_.currentTime();
						return;
					}
					if (this.tech_.paused() || this.tech_.seeking()) {
						return;
					}
					var _0x4ea134 = this.tech_.currentTime(), _0x279c39 = this.tech_.buffered();
					if (this.lastRecordedTime === _0x4ea134 && (!_0x279c39.length || _0x4ea134 + _0x43d632 >= _0x279c39.end(_0x279c39.length - 1))) {
						return this.techWaiting_();
					}
					if (this.consecutiveUpdates >= 5 && _0x4ea134 === this.lastRecordedTime) {
						this.consecutiveUpdates++;
						this.waiting_();
					} else {
						_0x4ea134 === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = _0x4ea134);
					}
				}
			},
			{
				'key': 'cancelTimer_',
				'value': function _0x264c37() {
					this.consecutiveUpdates = 0;
					this.timer_ && (this.logger_('cancelTimer_'), clearTimeout(this.timer_));
					this.timer_ = null;
				}
			},
			{
				'key': 'fixesBadSeeks_',
				'value': function _0x30402f() {
					var _0x3882bc = this.tech_.seeking(), _0x4dbdcc = this.seekable(), _0x1fa48d = this.tech_.currentTime(), _0x1b465f = void 0;
					if (_0x3882bc && this.afterSeekableWindow_(_0x4dbdcc, _0x1fa48d)) {
						var _0x40e9d0 = _0x4dbdcc.end(_0x4dbdcc.length - 1);
						_0x1b465f = _0x40e9d0;
					}
					if (_0x3882bc && this.beforeSeekableWindow_(_0x4dbdcc, _0x1fa48d)) {
						var _0x22ac4b = _0x4dbdcc.start(0);
						_0x1b465f = _0x22ac4b + _0x43d632;
					}
					if (typeof _0x1b465f !== 'undefined') {
						return this.logger_('Trying to seek outside of seekable at time ' + _0x1fa48d + ' with ' + ('seekable range ' + _0x315dc9(_0x4dbdcc) + '. Seeking to ') + (_0x1b465f + '.')), this.seekTo(_0x1b465f), true;
					}
					return false;
				}
			},
			{
				'key': 'waiting_',
				'value': function _0x963049() {
					if (this.techWaiting_()) {
						return;
					}
					var _0x3deb62 = this.tech_.currentTime(), _0x4c152f = this.tech_.buffered(), _0x410911 = _0x4dd7d7(_0x4c152f, _0x3deb62);
					if (_0x410911.length && _0x3deb62 + 3 <= _0x410911.end(0)) {
						this.cancelTimer_();
						this.seekTo(_0x3deb62);
						this.logger_('Stopped at ' + _0x3deb62 + ' while inside a buffered region ' + ('[' + _0x410911.start(0) + ' -> ' + _0x410911.end(0) + ']. Attempting to resume ') + 'playback by seeking to the current time.');
						this.tech_.trigger({
							'type': 'usage',
							'name': 'hls-unknown-waiting'
						});
						return;
					}
				}
			},
			{
				'key': 'techWaiting_',
				'value': function _0x18b893() {
					var _0x3630b1 = this.seekable(), _0x2d78c6 = this.tech_.currentTime();
					if (this.tech_.seeking() && this.fixesBadSeeks_()) {
						return true;
					}
					if (this.tech_.seeking() || this.timer_ !== null) {
						return true;
					}
					if (this.beforeSeekableWindow_(_0x3630b1, _0x2d78c6)) {
						var _0x574b40 = _0x3630b1.end(_0x3630b1.length - 1);
						return this.logger_('Fell out of live window at time ' + _0x2d78c6 + '. Seeking to ' + ('live point (seekable end) ' + _0x574b40)), this.cancelTimer_(), this.seekTo(_0x574b40), this.tech_.trigger({
							'type': 'usage',
							'name': 'hls-live-resync'
						}), true;
					}
					var _0x37eda6 = this.tech_.buffered(), _0x4f1ad1 = _0x56396d(_0x37eda6, _0x2d78c6);
					if (this.videoUnderflow_(_0x4f1ad1, _0x37eda6, _0x2d78c6)) {
						return this.cancelTimer_(), this.seekTo(_0x2d78c6), this.tech_.trigger({
							'type': 'usage',
							'name': 'hls-video-underflow'
						}), true;
					}
					if (_0x4f1ad1.length > 0) {
						var _0x1d8736 = _0x4f1ad1.start(0) - _0x2d78c6;
						return this.logger_('Stopped at ' + _0x2d78c6 + ', setting timer for ' + _0x1d8736 + ', seeking ' + ('to ' + _0x4f1ad1.start(0))), this.timer_ = setTimeout(this.skipTheGap_.bind(this), _0x1d8736 * 1000, _0x2d78c6), true;
					}
					return false;
				}
			},
			{
				'key': 'afterSeekableWindow_',
				'value': function _0x169bcc(_0x52675f, _0x35d3d3) {
					if (!_0x52675f.length) {
						return false;
					}
					if (_0x35d3d3 > _0x52675f.end(_0x52675f.length - 1) + _0x43d632) {
						return true;
					}
					return false;
				}
			},
			{
				'key': 'beforeSeekableWindow_',
				'value': function _0x159881(_0x2f1ef2, _0x3fdf36) {
					if (_0x2f1ef2.length && _0x2f1ef2.start(0) > 0 && _0x3fdf36 < _0x2f1ef2.start(0) - _0x43d632) {
						return true;
					}
					return false;
				}
			},
			{
				'key': 'videoUnderflow_',
				'value': function _0x43b940(_0x2a5924, _0x3e56d3, _0x39545e) {
					if (_0x2a5924.length === 0) {
						var _0xebfdbf = this.gapFromVideoUnderflow_(_0x3e56d3, _0x39545e);
						if (_0xebfdbf) {
							return this.logger_('Encountered a gap in video from ' + _0xebfdbf.start + ' to ' + _0xebfdbf.end + '. ' + ('Seeking to current time ' + _0x39545e)), true;
						}
					}
					return false;
				}
			},
			{
				'key': 'skipTheGap_',
				'value': function _0x1315d8(_0x46a48d) {
					var _0xd5903 = this.tech_.buffered(), _0x548eff = this.tech_.currentTime(), _0x3e6a1c = _0x56396d(_0xd5903, _0x548eff);
					this.cancelTimer_();
					if (_0x3e6a1c.length === 0 || _0x548eff !== _0x46a48d) {
						return;
					}
					this.logger_('skipTheGap_:', 'currentTime:', _0x548eff, 'scheduled currentTime:', _0x46a48d, 'nextRange start:', _0x3e6a1c.start(0));
					this.seekTo(_0x3e6a1c.start(0) + 0.03333333333333333);
					this.tech_.trigger({
						'type': 'usage',
						'name': 'hls-gap-skip'
					});
				}
			},
			{
				'key': 'gapFromVideoUnderflow_',
				'value': function _0x233620(_0x238dac, _0x4b2b30) {
					var _0x49b79b = _0x43bfa0(_0x238dac);
					for (var _0x159f50 = 0; _0x159f50 < _0x49b79b.length; _0x159f50++) {
						var _0x535f60 = _0x49b79b.start(_0x159f50), _0x13ff5d = _0x49b79b.end(_0x159f50);
						if (_0x4b2b30 - _0x535f60 < 4 && _0x4b2b30 - _0x535f60 > 2) {
							return {
								'start': _0x535f60,
								'end': _0x13ff5d
							};
						}
					}
					return null;
				}
			}
		]), _0x923813;
	}()), _0x1ecad4 = {
		'errorInterval': 30,
		'getSource': function _0x4b12a8(_0x38257d) {
			var _0x4b077d = this.tech({ 'IWillNotUseThisInPlugins': true }), _0x2c7796 = _0x4b077d.currentSource_;
			return _0x38257d(_0x2c7796);
		}
	}, _0x1a7925 = function _0x174d01(_0x4d4089, _0x1481c1) {
		var _0x6e0bcd = 0, _0x1ccc03 = 0, _0x3cbb2f = _0x1dff89.mergeOptions(_0x1ecad4, _0x1481c1);
		_0x4d4089.ready(function () {
			_0x4d4089.trigger({
				'type': 'usage',
				'name': 'hls-error-reload-initialized'
			});
		});
		var _0x5be6ad = function _0x29bf99() {
			_0x1ccc03 && _0x4d4089.currentTime(_0x1ccc03);
		}, _0x463593 = function _0x141af0(_0x1b4657) {
			if (_0x1b4657 === null || _0x1b4657 === undefined) {
				return;
			}
			_0x1ccc03 = _0x4d4089.duration() !== Infinity && _0x4d4089.currentTime() || 0;
			_0x4d4089.one('loadedmetadata', _0x5be6ad);
			_0x4d4089.src(_0x1b4657);
			_0x4d4089.trigger({
				'type': 'usage',
				'name': 'hls-error-reload'
			});
			_0x4d4089.play();
		}, _0x42222d = function _0x2bec25() {
			if (Date.now() - _0x6e0bcd < _0x3cbb2f.errorInterval * 1000) {
				_0x4d4089.trigger({
					'type': 'usage',
					'name': 'hls-error-reload-canceled'
				});
				return;
			}
			if (!_0x3cbb2f.getSource || typeof _0x3cbb2f.getSource !== 'function') {
				_0x1dff89.log.error('ERROR: reloadSourceOnError - The option getSource must be a function!');
				return;
			}
			return _0x6e0bcd = Date.now(), _0x3cbb2f.getSource.call(_0x4d4089, _0x463593);
		}, _0x3ee96c = function _0x4377ca() {
			_0x4d4089.off('loadedmetadata', _0x5be6ad);
			_0x4d4089.off('error', _0x42222d);
			_0x4d4089.off('dispose', _0x4377ca);
		}, _0x2e98f9 = function _0x163642(_0x164e0f) {
			_0x3ee96c();
			_0x174d01(_0x4d4089, _0x164e0f);
		};
		_0x4d4089.on('error', _0x42222d);
		_0x4d4089.on('dispose', _0x3ee96c);
		_0x4d4089.reloadSourceOnError = _0x2e98f9;
	}, _0x80c1cd = function _0x52017c(_0x1d893a) {
		_0x1a7925(this, _0x1d893a);
	};
	_0x1dff89.use('*', function (_0x2c2a71) {
		return {
			'setSource': function _0x2ba06f(_0x328388, _0x12de84) {
				_0x12de84(null, _0x328388);
			},
			'setCurrentTime': function _0x5c84bb(_0x120ab6) {
				return _0x2c2a71.vhs && _0x2c2a71.currentSource().src === _0x2c2a71.vhs.source_.src && _0x2c2a71.vhs.setCurrentTime(_0x120ab6), _0x120ab6;
			}
		};
	});
	var _0x18fef6 = {
		'PlaylistLoader': _0x104207,
		'Playlist': _0x184b6a,
		'Decrypter': _0x15a30c,
		'AsyncStream': _0x416dbd,
		'decrypt': _0x1f23b6,
		'utils': _0x46a14d,
		'STANDARD_PLAYLIST_SELECTOR': _0x31cc96,
		'INITIAL_PLAYLIST_SELECTOR': _0x1e5125,
		'comparePlaylistBandwidth': _0xf519df,
		'comparePlaylistResolution': _0xd45ba0,
		'xhr': _0x4a26ec()
	};
	[
		'GOAL_BUFFER_LENGTH',
		'MAX_GOAL_BUFFER_LENGTH',
		'GOAL_BUFFER_LENGTH_RATE',
		'BUFFER_LOW_WATER_LINE',
		'MAX_BUFFER_LOW_WATER_LINE',
		'BUFFER_LOW_WATER_LINE_RATE',
		'BANDWIDTH_VARIANCE'
	].forEach(function (_0x25a441) {
		Object.defineProperty(_0x18fef6, _0x25a441, {
			'get': function _0x49682e() {
				return _0x1dff89.log.warn('using Hls.' + _0x25a441 + ' is UNSAFE be sure you know what you are doing'), _0x229d75[_0x25a441];
			},
			'set': function _0x595761(_0x39184a) {
				_0x1dff89.log.warn('using Hls.' + _0x25a441 + ' is UNSAFE be sure you know what you are doing');
				if (typeof _0x39184a !== 'number' || _0x39184a < 0) {
					_0x1dff89.log.warn('value of Hls.' + _0x25a441 + ' must be greater than or equal to 0');
					return;
				}
				_0x229d75[_0x25a441] = _0x39184a;
			}
		});
	});
	var _0x45f916 = function _0x275b4a(_0x12d97f) {
		var _0x2819fa = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i;
		if (_0x2819fa.test(_0x12d97f)) {
			return 'hls';
		}
		var _0xc0f6e5 = /^application\/dash\+xml/i;
		if (_0xc0f6e5.test(_0x12d97f)) {
			return 'dash';
		}
		return null;
	}, _0x2bfbb3 = function _0x2dea85(_0x3a3681, _0x3690fa) {
		var _0x3d7069 = _0x3690fa.media(), _0x4f8e16 = -1;
		for (var _0x27f9c1 = 0; _0x27f9c1 < _0x3a3681.length; _0x27f9c1++) {
			if (_0x3a3681[_0x27f9c1].id === _0x3d7069.uri) {
				_0x4f8e16 = _0x27f9c1;
				break;
			}
		}
		_0x3a3681.selectedIndex_ = _0x4f8e16;
		_0x3a3681.trigger({
			'selectedIndex': _0x4f8e16,
			'type': 'change'
		});
	}, _0x12923e = function _0x5c7b11(_0x36f98b, _0x28d4f9) {
		_0x28d4f9.representations().forEach(function (_0x3beca9) {
			_0x36f98b.addQualityLevel(_0x3beca9);
		});
		_0x2bfbb3(_0x36f98b, _0x28d4f9.playlists);
	};
	_0x18fef6.canPlaySource = function () {
		return _0x1dff89.log.warn('HLS is no longer a tech. Please remove it from your player\'s techOrder.');
	};
	var _0x26f021 = function _0x21ff69(_0x5a7b87, _0x35be36, _0x3f156a) {
		if (!_0x5a7b87) {
			return _0x5a7b87;
		}
		var _0x2b66 = {
			_0x1d325f: {
				'audioContentType': 'audio/mp4; codecs="' + _0x3f156a.attributes.CODECS + '"',
				'videoContentType': 'video/mp4; codecs="' + _0x35be36.attributes.CODECS + '"'
			}
		};
		for (var _0x1d325f in _0x5a7b87) {
			_0x35be36.contentProtection && _0x35be36.contentProtection[_0x1d325f] && _0x35be36.contentProtection[_0x1d325f].pssh && (_0x2b66[_0x1d325f].pssh = _0x35be36.contentProtection[_0x1d325f].pssh);
			typeof _0x5a7b87[_0x1d325f] === 'string' && (_0x2b66[_0x1d325f].url = _0x5a7b87[_0x1d325f]);
		}
		return _0x1dff89.mergeOptions(_0x5a7b87, _0x2b66);
	}, _0x77bf19 = function _0x2faaab(_0x5189e8) {
		if (_0x5189e8.options_.sourceType !== 'dash') {
			return;
		}
		var _0x28b743 = _0x1dff89.players[_0x5189e8.tech_.options_.playerId];
		if (_0x28b743.eme) {
			var _0x3a66ef = _0x26f021(_0x5189e8.source_.keySystems, _0x5189e8.playlists.media(), _0x5189e8.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader.media());
			_0x3a66ef && (_0x28b743.currentSource().keySystems = _0x3a66ef);
		}
	};
	_0x18fef6.supportsNativeHls = (function () {
		var _0x233a67 = _0x5d8ee4.createElement('video');
		if (!_0x1dff89.getTech('Html5').isSupported()) {
			return false;
		}
		var _0x54e2fb = [
			'application/vnd.apple.mpegurl',
			'audio/mpegurl',
			'audio/x-mpegurl',
			'application/x-mpegurl',
			'video/x-mpegurl',
			'video/mpegurl',
			'application/mpegurl'
		];
		return _0x54e2fb.some(function (_0x548b46) {
			return /maybe|probably/i.test(_0x233a67.canPlayType(_0x548b46));
		});
	}());
	_0x18fef6.supportsNativeDash = (function () {
		if (!_0x1dff89.getTech('Html5').isSupported()) {
			return false;
		}
		return /maybe|probably/i.test(_0x5d8ee4.createElement('video').canPlayType('application/dash+xml'));
	}());
	_0x18fef6.supportsTypeNatively = function (_0x5f19c9) {
		if (_0x5f19c9 === 'hls') {
			return _0x18fef6.supportsNativeHls;
		}
		if (_0x5f19c9 === 'dash') {
			return _0x18fef6.supportsNativeDash;
		}
		return false;
	};
	_0x18fef6.isSupported = function () {
		return _0x1dff89.log.warn('HLS is no longer a tech. Please remove it from your player\'s techOrder.');
	};
	var _0x532e1b = _0x1dff89.getComponent('Component'), _0xb3ab1e = function (_0x55ad10) {
		_0x2b5e46(_0x4899d6, _0x55ad10);
		function _0x4899d6(_0x59ea7e, _0x28ad63, _0x423f02) {
			_0x2f247f(this, _0x4899d6);
			var _0x1a8691 = _0x42d6e2(this, (_0x4899d6['__proto__'] || Object.getPrototypeOf(_0x4899d6)).call(this, _0x28ad63, _0x423f02.hls));
			if (_0x28ad63.options_ && _0x28ad63.options_.playerId) {
				var _0x2bb2d5 = _0x1dff89(_0x28ad63.options_.playerId);
				!_0x2bb2d5.hasOwnProperty('hls') && Object.defineProperty(_0x2bb2d5, 'hls', {
					'get': function _0x3c6368() {
						return _0x1dff89.log.warn('player.hls is deprecated. Use player.tech().hls instead.'), _0x28ad63.trigger({
							'type': 'usage',
							'name': 'hls-player-access'
						}), _0x1a8691;
					}
				});
				_0x2bb2d5.vhs = _0x1a8691;
				_0x2bb2d5.dash = _0x1a8691;
			}
			_0x1a8691.tech_ = _0x28ad63;
			_0x1a8691.source_ = _0x59ea7e;
			_0x1a8691.stats = {};
			_0x1a8691.setOptions_();
			if (_0x1a8691.options_.overrideNative && _0x28ad63.overrideNativeAudioTracks && _0x28ad63.overrideNativeVideoTracks) {
				_0x28ad63.overrideNativeAudioTracks(true);
				_0x28ad63.overrideNativeVideoTracks(true);
			} else {
				if (_0x1a8691.options_.overrideNative && (_0x28ad63.featuresNativeVideoTracks || _0x28ad63.featuresNativeAudioTracks)) {
					throw new Error('Overriding native HLS requires emulated tracks. See https://git.io/vMpjB');
				}
			}
			return _0x1a8691.on(_0x5d8ee4, [
				'fullscreenchange',
				'webkitfullscreenchange',
				'mozfullscreenchange',
				'MSFullscreenChange'
			], function (_0x56acaf) {
				var _0x1c07c3 = _0x5d8ee4.fullscreenElement || _0x5d8ee4.webkitFullscreenElement || _0x5d8ee4.mozFullScreenElement || _0x5d8ee4.msFullscreenElement;
				_0x1c07c3 && _0x1c07c3.contains(_0x1a8691.tech_.el()) && _0x1a8691.masterPlaylistController_.smoothQualityChange_();
			}), _0x1a8691.on(_0x1a8691.tech_, 'error', function () {
				this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading();
			}), _0x1a8691.on(_0x1a8691.tech_, 'play', _0x1a8691.play), _0x1a8691;
		}
		return _0x1430d3(_0x4899d6, [
			{
				'key': 'setOptions_',
				'value': function _0x12a584() {
					var _0x308ff7 = this;
					this.options_.withCredentials = this.options_.withCredentials || false;
					typeof this.options_.blacklistDuration !== 'number' && (this.options_.blacklistDuration = 300);
					typeof this.options_.bandwidth !== 'number' && (this.options_.bandwidth = 4194304);
					this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === 4194304;
					[
						'withCredentials',
						'bandwidth'
					].forEach(function (_0x40df20) {
						typeof _0x308ff7.source_[_0x40df20] !== 'undefined' && (_0x308ff7.options_[_0x40df20] = _0x308ff7.source_[_0x40df20]);
					});
					this.bandwidth = this.options_.bandwidth;
				}
			},
			{
				'key': 'src',
				'value': function _0x3b6376(_0x544a0f, _0x4c23f2) {
					var _0x43d5ac = this;
					if (!_0x544a0f) {
						return;
					}
					this.setOptions_();
					this.options_.url = this.source_.src;
					this.options_.tech = this.tech_;
					this.options_.externHls = _0x18fef6;
					this.options_.sourceType = _0x45f916(_0x4c23f2);
					this.options_.seekTo = function (_0x55fd30) {
						_0x43d5ac.tech_.setCurrentTime(_0x55fd30);
						_0x43d5ac.setCurrentTime(_0x55fd30);
					};
					this.masterPlaylistController_ = new _0x331683(this.options_);
					this.playbackWatcher_ = new _0xf84b63(_0x1dff89.mergeOptions(this.options_, {
						'seekable': function _0x592917() {
							return _0x43d5ac.seekable();
						}
					}));
					this.masterPlaylistController_.on('error', function () {
						var _0x184767 = _0x1dff89.players[_0x43d5ac.tech_.options_.playerId];
						_0x184767.error(_0x43d5ac.masterPlaylistController_.error);
					});
					this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : _0x18fef6.STANDARD_PLAYLIST_SELECTOR.bind(this);
					this.masterPlaylistController_.selectInitialPlaylist = _0x18fef6.INITIAL_PLAYLIST_SELECTOR.bind(this);
					this.playlists = this.masterPlaylistController_.masterPlaylistLoader_;
					this.mediaSource = this.masterPlaylistController_.mediaSource;
					Object.defineProperties(this, {
						'selectPlaylist': {
							'get': function _0x458d90() {
								return this.masterPlaylistController_.selectPlaylist;
							},
							'set': function _0x2b5936(_0x5b9ec1) {
								this.masterPlaylistController_.selectPlaylist = _0x5b9ec1.bind(this);
							}
						},
						'throughput': {
							'get': function _0x243950() {
								return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate;
							},
							'set': function _0x3b0d98(_0x15af7e) {
								this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = _0x15af7e;
								this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1;
							}
						},
						'bandwidth': {
							'get': function _0x1e0caa() {
								return this.masterPlaylistController_.mainSegmentLoader_.bandwidth;
							},
							'set': function _0xa0ead1(_0xac7752) {
								this.masterPlaylistController_.mainSegmentLoader_.bandwidth = _0xac7752;
								this.masterPlaylistController_.mainSegmentLoader_.throughput = {
									'rate': 0,
									'count': 0
								};
							}
						},
						'systemBandwidth': {
							'get': function _0x3f9c59() {
								var _0x5a528b = 1 / (this.bandwidth || 1), _0x13b982 = void 0;
								this.throughput > 0 ? _0x13b982 = 1 / this.throughput : _0x13b982 = 0;
								var _0x120cb0 = Math.floor(1 / (_0x5a528b + _0x13b982));
								return _0x120cb0;
							},
							'set': function _0x3c9c88() {
								_0x1dff89.log.error('The "systemBandwidth" property is read-only');
							}
						}
					});
					Object.defineProperties(this.stats, {
						'bandwidth': {
							'get': function _0x4a4902() {
								return _0x43d5ac.bandwidth || 0;
							},
							'enumerable': true
						},
						'mediaRequests': {
							'get': function _0x4cf1f9() {
								return _0x43d5ac.masterPlaylistController_.mediaRequests_() || 0;
							},
							'enumerable': true
						},
						'mediaRequestsAborted': {
							'get': function _0x4e88a1() {
								return _0x43d5ac.masterPlaylistController_.mediaRequestsAborted_() || 0;
							},
							'enumerable': true
						},
						'mediaRequestsTimedout': {
							'get': function _0x39fe78() {
								return _0x43d5ac.masterPlaylistController_.mediaRequestsTimedout_() || 0;
							},
							'enumerable': true
						},
						'mediaRequestsErrored': {
							'get': function _0x45e249() {
								return _0x43d5ac.masterPlaylistController_.mediaRequestsErrored_() || 0;
							},
							'enumerable': true
						},
						'mediaTransferDuration': {
							'get': function _0x2f1dc0() {
								return _0x43d5ac.masterPlaylistController_.mediaTransferDuration_() || 0;
							},
							'enumerable': true
						},
						'mediaBytesTransferred': {
							'get': function _0x42a6b7() {
								return _0x43d5ac.masterPlaylistController_.mediaBytesTransferred_() || 0;
							},
							'enumerable': true
						},
						'mediaSecondsLoaded': {
							'get': function _0x268c74() {
								return _0x43d5ac.masterPlaylistController_.mediaSecondsLoaded_() || 0;
							},
							'enumerable': true
						},
						'buffered': {
							'get': function _0x125c40() {
								return _0xe304a(_0x43d5ac.tech_.buffered());
							},
							'enumerable': true
						},
						'currentTime': {
							'get': function _0xc6d373() {
								return _0x43d5ac.tech_.currentTime();
							},
							'enumerable': true
						},
						'currentSource': {
							'get': function _0x23851b() {
								return _0x43d5ac.tech_.currentSource_;
							},
							'enumerable': true
						},
						'currentTech': {
							'get': function _0x17972e() {
								return _0x43d5ac.tech_.name_;
							},
							'enumerable': true
						},
						'duration': {
							'get': function _0x2ec611() {
								return _0x43d5ac.tech_.duration();
							},
							'enumerable': true
						},
						'master': {
							'get': function _0x4426da() {
								return _0x43d5ac.playlists.master;
							},
							'enumerable': true
						},
						'playerDimensions': {
							'get': function _0x576dd5() {
								return _0x43d5ac.tech_.currentDimensions();
							},
							'enumerable': true
						},
						'seekable': {
							'get': function _0x185de8() {
								return _0xe304a(_0x43d5ac.tech_.seekable());
							},
							'enumerable': true
						},
						'timestamp': {
							'get': function _0x10348e() {
								return Date.now();
							},
							'enumerable': true
						},
						'videoPlaybackQuality': {
							'get': function _0x2908a8() {
								return _0x43d5ac.tech_.getVideoPlaybackQuality();
							},
							'enumerable': true
						}
					});
					this.tech_.one('canplay', this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_));
					this.masterPlaylistController_.on('selectedinitialmedia', function () {
						_0x45b18e(_0x43d5ac);
						_0x77bf19(_0x43d5ac);
					});
					this.on(this.masterPlaylistController_, 'progress', function () {
						this.tech_.trigger('progress');
					});
					this.tech_.ready(function () {
						return _0x43d5ac.setupQualityLevels_();
					});
					if (!this.tech_.el()) {
						return;
					}
					this.tech_.src(_0x1dff89.URL.createObjectURL(this.masterPlaylistController_.mediaSource));
				}
			},
			{
				'key': 'setupQualityLevels_',
				'value': function _0x8d6001() {
					var _0x3f3dee = this, _0x34a2d4 = _0x1dff89.players[this.tech_.options_.playerId];
					_0x34a2d4 && _0x34a2d4.qualityLevels && (this.qualityLevels_ = _0x34a2d4.qualityLevels(), this.masterPlaylistController_.on('selectedinitialmedia', function () {
						_0x12923e(_0x3f3dee.qualityLevels_, _0x3f3dee);
					}), this.playlists.on('mediachange', function () {
						_0x2bfbb3(_0x3f3dee.qualityLevels_, _0x3f3dee.playlists);
					}));
				}
			},
			{
				'key': 'play',
				'value': function _0x2d59bb() {
					this.masterPlaylistController_.play();
				}
			},
			{
				'key': 'setCurrentTime',
				'value': function _0x4f1bff(_0x1d2e56) {
					this.masterPlaylistController_.setCurrentTime(_0x1d2e56);
				}
			},
			{
				'key': 'duration',
				'value': function _0x540084() {
					return this.masterPlaylistController_.duration();
				}
			},
			{
				'key': 'seekable',
				'value': function _0x2d2736() {
					return this.masterPlaylistController_.seekable();
				}
			},
			{
				'key': 'dispose',
				'value': function _0x267b6e() {
					this.playbackWatcher_ && this.playbackWatcher_.dispose();
					this.masterPlaylistController_ && this.masterPlaylistController_.dispose();
					this.qualityLevels_ && this.qualityLevels_.dispose();
					_0x55fb99(_0x4899d6.prototype['__proto__'] || Object.getPrototypeOf(_0x4899d6.prototype), 'dispose', this).call(this);
				}
			}
		]), _0x4899d6;
	}(_0x532e1b), _0x17e649 = {
		'name': 'videojs-http-streaming',
		'VERSION': '1.2.4',
		'canHandleSource': function _0x2a7bd2(_0x1cb588) {
			var _0x2885a4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _0x3677a4 = _0x1dff89.mergeOptions(_0x1dff89.options, _0x2885a4);
			return _0x17e649.canPlayType(_0x1cb588.type, _0x3677a4);
		},
		'handleSource': function _0x2222b4(_0x5c2e67, _0x4fd0bc) {
			var _0x57ecd0 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, _0x410694 = _0x1dff89.mergeOptions(_0x1dff89.options, _0x57ecd0);
			return _0x4fd0bc.hls = new _0xb3ab1e(_0x5c2e67, _0x4fd0bc, _0x410694), _0x4fd0bc.hls.xhr = _0x4a26ec(), _0x4fd0bc.hls.src(_0x5c2e67.src, _0x5c2e67.type), _0x4fd0bc.hls;
		},
		'canPlayType': function _0x4a97b5(_0xcee006) {
			var _0xa4e926 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _0x2ae14a = _0x1dff89.mergeOptions(_0x1dff89.options, _0xa4e926), _0x15f274 = _0x2ae14a.hls.overrideNative, _0x1bbcd2 = _0x45f916(_0xcee006), _0x2a8aa7 = _0x1bbcd2 && (!_0x18fef6.supportsTypeNatively(_0x1bbcd2) || _0x15f274);
			return _0x2a8aa7 ? 'maybe' : '';
		}
	};
	return (typeof _0x1dff89.MediaSource === 'undefined' || typeof _0x1dff89.URL === 'undefined') && (_0x1dff89.MediaSource = _0x1ddc09, _0x1dff89.URL = _0x16efa7), _0x1ddc09.supportsNativeMediaSources() && _0x1dff89.getTech('Html5').registerSourceHandler(_0x17e649, 0), _0x1dff89.HlsHandler = _0xb3ab1e, _0x1dff89.HlsSourceHandler = _0x17e649, _0x1dff89.Hls = _0x18fef6, !_0x1dff89.use && _0x1dff89.registerComponent('Hls', _0x18fef6), _0x1dff89.options.hls = _0x1dff89.options.hls || {}, _0x1dff89.registerPlugin ? _0x1dff89.registerPlugin('reloadSourceOnError', _0x80c1cd) : _0x1dff89.plugin('reloadSourceOnError', _0x80c1cd), _0x1dff89;
}));