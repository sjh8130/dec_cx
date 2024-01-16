(function (_0x32f181) {
	function _0x5672c2(_0x1fbb93, _0x3984f9) {
		var _0x1c1d58 = (_0x1fbb93 & 65535) + (_0x3984f9 & 65535), _0xd29aff = (_0x1fbb93 >> 16) + (_0x3984f9 >> 16) + (_0x1c1d58 >> 16);
		return _0xd29aff << 16 | _0x1c1d58 & 65535;
	}
	function _0x3560f9(_0x1907e8, _0x2f69b6) {
		return _0x1907e8 << _0x2f69b6 | _0x1907e8 >>> 32 - _0x2f69b6;
	}
	function _0x9aba4a(_0x23e5d1, _0x286bd1, _0x34fc22, _0x2e166b, _0x4ac7fe, _0x5ae60d) {
		return _0x5672c2(_0x3560f9(_0x5672c2(_0x5672c2(_0x286bd1, _0x23e5d1), _0x5672c2(_0x2e166b, _0x5ae60d)), _0x4ac7fe), _0x34fc22);
	}
	function _0x3682b7(_0x51d474, _0x649e, _0x4079e7, _0x4d6321, _0x30b474, _0x3fcef3, _0x3a076b) {
		return _0x9aba4a(_0x649e & _0x4079e7 | ~_0x649e & _0x4d6321, _0x51d474, _0x649e, _0x30b474, _0x3fcef3, _0x3a076b);
	}
	function _0x41f22c(_0x4a6dcf, _0x3bf3b4, _0x33dd2c, _0x1c0dea, _0x545c87, _0x3dbb16, _0x4e7e37) {
		return _0x9aba4a(_0x3bf3b4 & _0x1c0dea | _0x33dd2c & ~_0x1c0dea, _0x4a6dcf, _0x3bf3b4, _0x545c87, _0x3dbb16, _0x4e7e37);
	}
	function _0x1ede79(_0x3eb493, _0xdd94b2, _0x424fc8, _0x25a49a, _0x175bac, _0x3e1755, _0x128a44) {
		return _0x9aba4a(_0xdd94b2 ^ _0x424fc8 ^ _0x25a49a, _0x3eb493, _0xdd94b2, _0x175bac, _0x3e1755, _0x128a44);
	}
	function _0x5561de(_0x396e9d, _0x271a63, _0x13e2af, _0x5936cc, _0x31105a, _0x4e1616, _0x48cdc6) {
		return _0x9aba4a(_0x13e2af ^ (_0x271a63 | ~_0x5936cc), _0x396e9d, _0x271a63, _0x31105a, _0x4e1616, _0x48cdc6);
	}
	function _0x45a1ae(_0x4c1aa0, _0x58cdfe) {
		_0x4c1aa0[_0x58cdfe >> 5] |= 128 << _0x58cdfe % 32;
		_0x4c1aa0[(_0x58cdfe + 64 >>> 9 << 4) + 14] = _0x58cdfe;
		var _0x162034, _0x254fcf, _0x554042, _0x4c9cff, _0x249c87, _0x3512cb = 1732584193, _0x3ebf50 = -271733879, _0x1c3eaa = -1732584194, _0x19e7d9 = 271733878;
		for (_0x162034 = 0; _0x162034 < _0x4c1aa0.length; _0x162034 += 16) {
			_0x254fcf = _0x3512cb;
			_0x554042 = _0x3ebf50;
			_0x4c9cff = _0x1c3eaa;
			_0x249c87 = _0x19e7d9;
			_0x3512cb = _0x3682b7(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034], 7, -680876936);
			_0x19e7d9 = _0x3682b7(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034 + 1], 12, -389564586);
			_0x1c3eaa = _0x3682b7(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 2], 17, 606105819);
			_0x3ebf50 = _0x3682b7(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034 + 3], 22, -1044525330);
			_0x3512cb = _0x3682b7(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034 + 4], 7, -176418897);
			_0x19e7d9 = _0x3682b7(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034 + 5], 12, 1200080426);
			_0x1c3eaa = _0x3682b7(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 6], 17, -1473231341);
			_0x3ebf50 = _0x3682b7(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034 + 7], 22, -45705983);
			_0x3512cb = _0x3682b7(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034 + 8], 7, 1770035416);
			_0x19e7d9 = _0x3682b7(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034 + 9], 12, -1958414417);
			_0x1c3eaa = _0x3682b7(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 10], 17, -42063);
			_0x3ebf50 = _0x3682b7(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034 + 11], 22, -1990404162);
			_0x3512cb = _0x3682b7(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034 + 12], 7, 1804603682);
			_0x19e7d9 = _0x3682b7(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034 + 13], 12, -40341101);
			_0x1c3eaa = _0x3682b7(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 14], 17, -1502002290);
			_0x3ebf50 = _0x3682b7(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034 + 15], 22, 1236535329);
			_0x3512cb = _0x41f22c(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034 + 1], 5, -165796510);
			_0x19e7d9 = _0x41f22c(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034 + 6], 9, -1069501632);
			_0x1c3eaa = _0x41f22c(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 11], 14, 643717713);
			_0x3ebf50 = _0x41f22c(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034], 20, -373897302);
			_0x3512cb = _0x41f22c(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034 + 5], 5, -701558691);
			_0x19e7d9 = _0x41f22c(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034 + 10], 9, 38016083);
			_0x1c3eaa = _0x41f22c(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 15], 14, -660478335);
			_0x3ebf50 = _0x41f22c(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034 + 4], 20, -405537848);
			_0x3512cb = _0x41f22c(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034 + 9], 5, 568446438);
			_0x19e7d9 = _0x41f22c(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034 + 14], 9, -1019803690);
			_0x1c3eaa = _0x41f22c(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 3], 14, -187363961);
			_0x3ebf50 = _0x41f22c(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034 + 8], 20, 1163531501);
			_0x3512cb = _0x41f22c(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034 + 13], 5, -1444681467);
			_0x19e7d9 = _0x41f22c(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034 + 2], 9, -51403784);
			_0x1c3eaa = _0x41f22c(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 7], 14, 1735328473);
			_0x3ebf50 = _0x41f22c(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034 + 12], 20, -1926607734);
			_0x3512cb = _0x1ede79(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034 + 5], 4, -378558);
			_0x19e7d9 = _0x1ede79(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034 + 8], 11, -2022574463);
			_0x1c3eaa = _0x1ede79(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 11], 16, 1839030562);
			_0x3ebf50 = _0x1ede79(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034 + 14], 23, -35309556);
			_0x3512cb = _0x1ede79(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034 + 1], 4, -1530992060);
			_0x19e7d9 = _0x1ede79(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034 + 4], 11, 1272893353);
			_0x1c3eaa = _0x1ede79(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 7], 16, -155497632);
			_0x3ebf50 = _0x1ede79(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034 + 10], 23, -1094730640);
			_0x3512cb = _0x1ede79(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034 + 13], 4, 681279174);
			_0x19e7d9 = _0x1ede79(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034], 11, -358537222);
			_0x1c3eaa = _0x1ede79(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 3], 16, -722521979);
			_0x3ebf50 = _0x1ede79(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034 + 6], 23, 76029189);
			_0x3512cb = _0x1ede79(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034 + 9], 4, -640364487);
			_0x19e7d9 = _0x1ede79(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034 + 12], 11, -421815835);
			_0x1c3eaa = _0x1ede79(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 15], 16, 530742520);
			_0x3ebf50 = _0x1ede79(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034 + 2], 23, -995338651);
			_0x3512cb = _0x5561de(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034], 6, -198630844);
			_0x19e7d9 = _0x5561de(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034 + 7], 10, 1126891415);
			_0x1c3eaa = _0x5561de(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 14], 15, -1416354905);
			_0x3ebf50 = _0x5561de(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034 + 5], 21, -57434055);
			_0x3512cb = _0x5561de(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034 + 12], 6, 1700485571);
			_0x19e7d9 = _0x5561de(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034 + 3], 10, -1894986606);
			_0x1c3eaa = _0x5561de(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 10], 15, -1051523);
			_0x3ebf50 = _0x5561de(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034 + 1], 21, -2054922799);
			_0x3512cb = _0x5561de(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034 + 8], 6, 1873313359);
			_0x19e7d9 = _0x5561de(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034 + 15], 10, -30611744);
			_0x1c3eaa = _0x5561de(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 6], 15, -1560198380);
			_0x3ebf50 = _0x5561de(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034 + 13], 21, 1309151649);
			_0x3512cb = _0x5561de(_0x3512cb, _0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x4c1aa0[_0x162034 + 4], 6, -145523070);
			_0x19e7d9 = _0x5561de(_0x19e7d9, _0x3512cb, _0x3ebf50, _0x1c3eaa, _0x4c1aa0[_0x162034 + 11], 10, -1120210379);
			_0x1c3eaa = _0x5561de(_0x1c3eaa, _0x19e7d9, _0x3512cb, _0x3ebf50, _0x4c1aa0[_0x162034 + 2], 15, 718787259);
			_0x3ebf50 = _0x5561de(_0x3ebf50, _0x1c3eaa, _0x19e7d9, _0x3512cb, _0x4c1aa0[_0x162034 + 9], 21, -343485551);
			_0x3512cb = _0x5672c2(_0x3512cb, _0x254fcf);
			_0x3ebf50 = _0x5672c2(_0x3ebf50, _0x554042);
			_0x1c3eaa = _0x5672c2(_0x1c3eaa, _0x4c9cff);
			_0x19e7d9 = _0x5672c2(_0x19e7d9, _0x249c87);
		}
		return [
			_0x3512cb,
			_0x3ebf50,
			_0x1c3eaa,
			_0x19e7d9
		];
	}
	function _0x3a7644(_0x303594) {
		var _0x32495d, _0x1ccaf8 = '', _0x3d8415 = _0x303594.length * 32;
		for (_0x32495d = 0; _0x32495d < _0x3d8415; _0x32495d += 8) {
			_0x1ccaf8 += String.fromCharCode(_0x303594[_0x32495d >> 5] >>> _0x32495d % 32 & 255);
		}
		return _0x1ccaf8;
	}
	function _0x3717b8(_0x916750) {
		var _0x224ff8, _0x2bc23d = [];
		_0x2bc23d[(_0x916750.length >> 2) - 1] = undefined;
		for (_0x224ff8 = 0; _0x224ff8 < _0x2bc23d.length; _0x224ff8 += 1) {
			_0x2bc23d[_0x224ff8] = 0;
		}
		var _0x111fa8 = _0x916750.length * 8;
		for (_0x224ff8 = 0; _0x224ff8 < _0x111fa8; _0x224ff8 += 8) {
			_0x2bc23d[_0x224ff8 >> 5] |= (_0x916750.charCodeAt(_0x224ff8 / 8) & 255) << _0x224ff8 % 32;
		}
		return _0x2bc23d;
	}
	function _0x1d749a(_0x35ae95) {
		return _0x3a7644(_0x45a1ae(_0x3717b8(_0x35ae95), _0x35ae95.length * 8));
	}
	function _0x14e8d3(_0x17756a, _0x294485) {
		var _0x39f040, _0xabfdbe = _0x3717b8(_0x17756a), _0x4228eb = [], _0x3a8a74 = [], _0x4a9622;
		_0x4228eb[15] = _0x3a8a74[15] = undefined;
		_0xabfdbe.length > 16 && (_0xabfdbe = _0x45a1ae(_0xabfdbe, _0x17756a.length * 8));
		for (_0x39f040 = 0; _0x39f040 < 16; _0x39f040 += 1) {
			_0x4228eb[_0x39f040] = _0xabfdbe[_0x39f040] ^ 909522486;
			_0x3a8a74[_0x39f040] = _0xabfdbe[_0x39f040] ^ 1549556828;
		}
		return _0x4a9622 = _0x45a1ae(_0x4228eb.concat(_0x3717b8(_0x294485)), 512 + _0x294485.length * 8), _0x3a7644(_0x45a1ae(_0x3a8a74.concat(_0x4a9622), 640));
	}
	function _0x5e044c(_0x2138e5) {
		var _0xc71a0a = '0123456789abcdef', _0x1857a7 = '', _0x2d4ae8, _0x2e4fdc;
		for (_0x2e4fdc = 0; _0x2e4fdc < _0x2138e5.length; _0x2e4fdc += 1) {
			_0x2d4ae8 = _0x2138e5.charCodeAt(_0x2e4fdc);
			_0x1857a7 += _0xc71a0a.charAt(_0x2d4ae8 >>> 4 & 15) + _0xc71a0a.charAt(_0x2d4ae8 & 15);
		}
		return _0x1857a7;
	}
	function _0x39dd2a(_0x23042f) {
		return unescape(encodeURIComponent(_0x23042f));
	}
	function _0x4d4aa3(_0x1cd7f8) {
		return _0x1d749a(_0x39dd2a(_0x1cd7f8));
	}
	function _0x1c86fb(_0x22951d) {
		return _0x5e044c(_0x4d4aa3(_0x22951d));
	}
	function _0x369632(_0x434f6f, _0x20c49b) {
		return _0x14e8d3(_0x39dd2a(_0x434f6f), _0x39dd2a(_0x20c49b));
	}
	function _0x575252(_0x219f1f, _0xa0761c) {
		return _0x5e044c(_0x369632(_0x219f1f, _0xa0761c));
	}
	function _0x21a5c1(_0x1add2d, _0x404e2e, _0x4bbb85) {
		if (!_0x404e2e) {
			if (!_0x4bbb85) {
				return _0x1c86fb(_0x1add2d);
			}
			return _0x4d4aa3(_0x1add2d);
		}
		if (!_0x4bbb85) {
			return _0x575252(_0x404e2e, _0x1add2d);
		}
		return _0x369632(_0x404e2e, _0x1add2d);
	}
	typeof define === 'function' && define.amd ? define(function () {
		return _0x21a5c1;
	}) : typeof module === 'object' && module.exports ? module.exports = _0x21a5c1 : _0x32f181.md5 = _0x21a5c1;
}(this));
Ext.apply(Ext, {
	'setCookie': function (_0x4936a7, _0x2cf4c0) {
		var _0x40b3cd = arguments, _0x946e9 = arguments.length, _0x12c2a5 = _0x946e9 > 2 ? _0x40b3cd[2] : null, _0x32d522 = _0x946e9 > 3 ? _0x40b3cd[3] : '/', _0x27df16 = _0x946e9 > 4 ? _0x40b3cd[4] : null, _0x45dd54 = _0x946e9 > 5 ? _0x40b3cd[5] : false;
		document.cookie = _0x4936a7 + '=' + escape(_0x2cf4c0) + (_0x12c2a5 === null ? '' : '; expires=' + _0x12c2a5.toGMTString()) + (_0x32d522 === null ? '' : '; path=' + _0x32d522) + (_0x27df16 === null ? '' : '; domain=' + _0x27df16) + (_0x45dd54 === true ? '; secure' : '');
	},
	'getCookie': function (_0x44016b, _0x392b9b) {
		var _0x4428ef = _0x44016b + '=', _0x43a632 = _0x4428ef.length, _0xc0673f = document.cookie.length, _0x16efe1 = 0, _0x524a83 = 0;
		while (_0x16efe1 < _0xc0673f) {
			_0x524a83 = _0x16efe1 + _0x43a632;
			if (document.cookie.substring(_0x16efe1, _0x524a83) == _0x4428ef) {
				return this.getCookieVal(_0x524a83);
			}
			_0x16efe1 = document.cookie.indexOf(' ', _0x16efe1) + 1;
			if (_0x16efe1 === 0) {
				break;
			}
		}
		return _0x392b9b;
	},
	'getCookieVal': function (_0x2845a7) {
		var _0x4963fc = document.cookie.indexOf(';', _0x2845a7);
		return _0x4963fc == -1 && (_0x4963fc = document.cookie.length), unescape(document.cookie.substring(_0x2845a7, _0x4963fc));
	}
});
Ext.define('ans.VideoJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x3af7c6) {
		_0x3af7c6 = _0x3af7c6 || {};
		var _0x3891f8 = this;
		_0x3891f8.addEvents(['seekstart']);
		_0x3891f8.mixins.observable.constructor.call(_0x3891f8, _0x3af7c6);
		var _0x454380 = _0x3af7c6 && _0x3af7c6.callbackfn ? _0x3af7c6.callbackfn : function () {
		}, _0x25a9b3 = videojs(_0x3af7c6.videojs, _0x3891f8.params2VideoOpt(_0x3af7c6.params), _0x454380);
		_0x25a9b3.eventCount = 0;
		Ext.fly(_0x3af7c6.videojs).on('contextmenu', function (_0x1ef75a) {
			_0x1ef75a.preventDefault();
		});
		$('.video-js').attr('tabindex', 1);
		$('.vjs-big-play-button').on('click', function (_0x2aa8ef) {
			$('.video-js').focus();
		});
		Ext.fly(_0x3af7c6.videojs).on('keydown', function (_0x213f31) {
			(_0x213f31.keyCode == 32 || _0x213f31.keyCode == 107) && _0x213f31.preventDefault();
			if (_0x213f31.keyCode == 32) {
				_0x25a9b3.paused() ? _0x25a9b3.play() : _0x25a9b3.pause();
			} else {
				if (_0x213f31.keyCode == 37 || _0x213f31.keyCode == 39) {
					var _0x2ca9ac = _0x3af7c6.params.enableFastForward, _0x193bac = _0x3af7c6.params.jobid;
					if (typeof _0x2ca9ac != 'undefined' && _0x2ca9ac === 0 && typeof _0x193bac != 'undefined' && _0x193bac != '' && window.parent.parent.location.href.indexOf('studentstudy') > -1) {
						videojs('video').tipFun(_0x213f31.keyCode);
					} else {
						if (_0x213f31.keyCode == 37) {
							var _0x56c704 = parseInt(_0x25a9b3.currentTime()), _0x318a14 = _0x56c704 - 5 < 0 ? 0 : _0x56c704 - 5;
							_0x25a9b3.currentTime(_0x318a14);
						} else {
							if (_0x213f31.keyCode == 39) {
								var _0x56c704 = parseInt(_0x25a9b3.currentTime()), _0x318a14 = _0x56c704 + 5 > duration ? duration : _0x56c704 + 5;
								_0x25a9b3.currentTime(_0x318a14);
							}
						}
					}
				}
			}
		});
		_0x25a9b3.videoJsResolutionSwitcher && _0x25a9b3.on('resolutionchange', function () {
			var _0x3ad471 = _0x25a9b3.currentResolution(), _0x3c54d5 = _0x3ad471.sources ? _0x3ad471.sources[0].res : false;
			Ext.setCookie('resolution', _0x3c54d5);
		});
		_0x25a9b3.videoJsPlayLine && _0x25a9b3.on('playlinechange', function () {
			var _0x321a57 = _0x25a9b3.currentPlayline();
			Ext.setCookie('net', _0x321a57.net);
		});
		var _0x448b8f = _0x3af7c6.params && _0x3af7c6.params.doublespeed ? 2 : 1, _0x595194 = true;
		_0x25a9b3.on('ratechange', function () {
			var _0x49db31 = _0x25a9b3.playbackRate();
			_0x49db31 > _0x448b8f ? (_0x25a9b3.pause(), _0x25a9b3.playbackRate(1)) : Ext.setCookie('doubleSpeedValue', _0x49db31);
			if (typeof aplus_queue != 'undefined' && !_0x595194) {
				var _0x1e6bf2 = _0x3af7c6.params && _0x3af7c6.params.aplus_video_id ? _0x3af7c6.params.aplus_video_id : '', _0x52df38 = _0x3af7c6.params && _0x3af7c6.params.aplus_resource_id ? _0x3af7c6.params.aplus_resource_id : '', _0x3661b4 = _0x3af7c6.params && _0x3af7c6.params.knowledgename ? _0x3af7c6.params.knowledgename : '', _0x44b39b = _0x3af7c6.params && _0x3af7c6.params.coursename ? _0x3af7c6.params.coursename : '';
				aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_speed_click',
						'CLK',
						{
							'video_name': _0x3661b4,
							'video_id': _0x1e6bf2,
							'resource_id': _0x52df38,
							'resource_name': _0x44b39b,
							'speed_type': _0x25a9b3.playbackRate()
						}
					]
				});
			}
			_0x595194 = false;
		});
		_0x25a9b3.on('play', function () {
			try {
				$('.video-js').focus();
				if (_0x3af7c6.params && _0x3af7c6.params.doublespeed && parseInt(_0x3af7c6.params.doublespeed) === 1) {
					var _0x2fdb49 = Ext.getCookie('doubleSpeedValue', 1);
					_0x25a9b3.playbackRate(_0x2fdb49);
				}
				$('.vjs-playback-rate').removeClass('vjs-hidden');
				$('.vjs-playback-rate .vjs-menu .vjs-menu-content li').length == 0 && $('.vjs-playback-rate-value').css('opacity', '0.4');
			} catch (_0x53bf0c) {
				console.log(_0x53bf0c);
			}
		});
		_0x25a9b3.on('ended', function () {
			try {
				_0x3af7c6.params.enableFastForward = 1;
				_0x25a9b3.finished = true;
				_0x25a9b3.disableSeek(false);
				$('.vjs-progress-control').unbind('click');
			} catch (_0x215d87) {
				console.log(_0x215d87);
			}
		});
	},
	'params2VideoOpt': function (_0xc8e4ef) {
		var _0x2415d0 = typeof _0xc8e4ef.cpi == 'undefined' ? 0 : _0xc8e4ef.cpi, _0x250eac = false, _0x1c4e9e = [
			{
				'indexorder': 0,
				'label': '公网1',
				'url': ServerHosts.s1_HOST,
				'ispublic': true,
				'net': 'p1'
			},
			{
				'indexorder': 1,
				'label': '公网2',
				'url': ServerHosts.s2_HOST,
				'ispublic': true,
				'net': 'p2'
			}
		];
		if (_0xc8e4ef.cdn) {
			for (var _0x4afa57 = 0; _0x4afa57 < _0xc8e4ef.cdn.length; _0x4afa57++) {
				var _0x110329 = _0xc8e4ef.cdn[_0x4afa57];
				_0x110329.net = 's' + _0x4afa57;
			}
			try {
				top.window.app && top.window.app == 2 ? _0x1c4e9e = _0x1c4e9e.concat(_0xc8e4ef.cdn) : _0x1c4e9e = _0x1c4e9e.concat(_0xc8e4ef.cdn).sort(function (_0x151066, _0x49e379) {
					return _0x151066.indexorder - _0x49e379.indexorder;
				});
			} catch (_0x5dc6dc) {
				_0x1c4e9e = _0x1c4e9e.concat(_0xc8e4ef.cdn);
			}
		}
		function _0x2ed11b(_0x2e0f22) {
			var _0x27748c = Ext.getCookie('net', 'p1'), _0x3d75c2 = [];
			for (var _0xe41e7b = 0; _0xe41e7b < _0x2e0f22.length; _0xe41e7b++) {
				if (_0x2e0f22[_0xe41e7b].net == _0x27748c) {
					_0x3d75c2 = _0x2e0f22[_0xe41e7b];
					break;
				}
			}
			return _0x3d75c2;
		}
		function _0x262c17(_0x332dd9, _0x567dab, _0x48763d) {
			return ServerHosts.HLS_ANS_HOST + '/hls/m3u8/' + _0x332dd9 + '/' + _0x567dab + '.m3u8?cdn=' + encodeURIComponent(_0x48763d);
		}
		function _0xcfe023(_0x1e2a62, _0x45720d) {
			var _0x32de1e = ServerHosts.s1_HOST.replace('http:/', '').replace('https:/', ''), _0x1ca225 = 0;
			_0x1e2a62.src.indexOf(_0x32de1e) > -1 && (_0x1ca225 = _0x1e2a62.src.indexOf(_0x32de1e) + _0x32de1e.length);
			var _0x421919 = _0x1e2a62.src.substr(_0x1ca225);
			if (_0x45720d.ispublic && _0x1ca225 == 0) {
				return {
					'src': _0x421919,
					'type': 'video/mp4',
					'res': _0x1e2a62.res
				};
			}
			return _0x45720d.ispublic ? _0x250eac ? {
				'src': _0x262c17(_0xc8e4ef.objectId, _0x1e2a62.resolution, _0x45720d.url),
				'type': 'application/x-mpegURL',
				'res': _0x1e2a62.res
			} : {
				'src': _0x45720d.url + _0x421919,
				'type': 'video/mp4',
				'res': _0x1e2a62.res
			} : _0x250eac ? {
				'src': _0x262c17(_0xc8e4ef.objectId, _0x1e2a62.resolution, _0x45720d.url + _0x32de1e),
				'type': 'application/x-mpegURL',
				'res': _0x1e2a62.res
			} : {
				'src': _0x45720d.url + _0x32de1e + _0x421919,
				'type': 'video/mp4',
				'res': _0x1e2a62.res
			};
		}
		var _0x22d99f = [], _0x556970 = Ext.getCookie('resolution', 360);
		!_0xc8e4ef.rootPath && (_0xc8e4ef.rootPath = '/mooc-ans');
		_0xc8e4ef.http && _0x22d99f.push({
			'src': _0xc8e4ef.http,
			'type': 'video/mp4',
			'label': '标清',
			'resolution': 'sd',
			'res': 360
		});
		_0xc8e4ef.httphd && (_0x22d99f.push({
			'src': _0xc8e4ef.httphd,
			'type': 'video/mp4',
			'label': '高清',
			'resolution': 'hd',
			'res': 720
		}), _0x556970 = Ext.getCookie('resolution', 720));
		_0xc8e4ef.httpshd && _0x22d99f.push({
			'src': _0xc8e4ef.httpshd,
			'type': 'video/mp4',
			'label': '超高清',
			'resolution': 'shd',
			'res': 1080
		});
		_0xc8e4ef.httpmd && _0x22d99f.push({
			'src': _0xc8e4ef.httpmd,
			'type': 'video/mp4',
			'label': '极速',
			'resolution': 'md',
			'res': 240
		});
		if (_0x22d99f.length == 1) {
			var _0x110329 = _0x22d99f[0];
			_0x110329.label = '高清';
		}
		var _0x56d9e6 = false;
		for (var _0x4afa57 = 0; _0x4afa57 < _0x22d99f.length; _0x4afa57++) {
			if (_0x22d99f[_0x4afa57].res == _0x556970) {
				_0x56d9e6 = true;
				break;
			}
		}
		!_0x56d9e6 && (_0x556970 = 360);
		var _0xfc04d0 = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid), _0x525d26 = function (_0x152715, _0x13d862, _0x55415d, _0x3c20e4) {
			try {
				if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && isUnFinishJob()) {
					return;
				}
				if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && isUnFinishJob()) {
					return;
				}
			} catch (_0x57ab06) {
				console.log(_0x57ab06);
			}
			if (_0xfc04d0) {
				return;
			}
			var _0x50fd62 = this;
			!_0x50fd62.logCount && (_0x50fd62.logCount = 0);
			videojs.xhr({
				'uri': _0x13d862,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0xf10b61, _0x215fcc) {
				_0x50fd62.logCount++;
				if (_0x215fcc.statusCode == 200) {
					_0x50fd62.logCount = 0;
					if (_0x215fcc.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x215fcc.body);
					if (d.isPassed) {
						try {
							typeof d.hasJobLimit != 'undefined' && d.hasJobLimit === true && (top.allowNextVideo = false, top.hasJobLimit = true);
							typeof d.videoTimeLimit != 'undefined' && d.videoTimeLimit === true && (top.allowNextVideo = false, top.videoTimeLimit = true);
						} catch (_0x521341) {
							console.log(_0x521341);
						}
						_0x3c20e4();
					} else {
						!_0x55415d && _0x3c20e4();
					}
					return;
				}
				if (_0x50fd62.logCount >= 4) {
					_0x50fd62.logCount = 0;
					_0x152715.pause();
					if (_0x215fcc.statusCode != 0) {
						if (_0x215fcc.statusCode == 202 || _0x215fcc.statusCode == 302) {
							try {
								parent.location.reload();
							} catch (_0xf0c7bd) {
								console.log(_0xf0c7bd.message);
							}
						} else {
							alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x215fcc.statusCode + ')');
						}
					} else {
						alert('您的网络不稳定\uFF0C请您稍后继续...');
					}
				}
			});
		}, _0x202ceb = function (_0x3ede3c, _0x2de24f, _0x74d979, _0x3737d2) {
			if (!_0xc8e4ef.reportUrl) {
				return;
			}
			if (_0xc8e4ef.isFiled == 1 || _0xc8e4ef.state == 1) {
				return;
			}
			var _0x4b890f = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x302454 = (_0xc8e4ef.startTime || '0') + '_' + (_0xc8e4ef.endTime || _0xc8e4ef.duration), _0x40e8d5 = 0, _0x35a5e8;
			_0x74d979.toString().indexOf('-') != -1 ? (_0x35a5e8 = _0x74d979.split('-'), _0x35a5e8.length == 2 && (_0x40e8d5 = parseInt(_0x35a5e8[1]) * 1000)) : _0x40e8d5 = _0x74d979 * 1000;
			if (_0x40e8d5 == _0xc8e4ef.duration * 1000 && _0x2de24f == 2) {
				return;
			}
			var _0x17f657 = Ext.String.format(_0x4b890f, _0xc8e4ef.clazzId, _0xc8e4ef.userid, _0xc8e4ef.jobid || '', _0xc8e4ef.objectId, _0x40e8d5, 'd_yHJ!$pdA~5', _0xc8e4ef.duration * 1000, _0x302454), _0x45ab4b = [
				_0xc8e4ef.reportUrl,
				'/',
				_0xc8e4ef.dtoken,
				'?clazzId=',
				_0xc8e4ef.clazzId,
				'&playingTime=',
				_0x74d979,
				'&duration=',
				_0xc8e4ef.duration,
				'&clipTime=',
				_0x302454,
				'&objectId=',
				_0xc8e4ef.objectId,
				'&otherInfo=',
				_0xc8e4ef.otherInfo,
				'&jobid=',
				_0xc8e4ef.jobid,
				'&userid=',
				_0xc8e4ef.userid,
				'&isdrag=',
				_0x2de24f,
				'&view=pc',
				'&enc=',
				md5(_0x17f657),
				'&rt=',
				_0xc8e4ef.rt,
				'&dtype=Video',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x525d26(_0x3ede3c, _0x45ab4b, _0xc8e4ef.jobid, _0x3737d2);
		};
		return {
			'language': 'zh-CN',
			'poster': _0xc8e4ef.screenshot,
			'controls': true,
			'preload': 'none',
			'sources': _0x22d99f,
			'playlines': _0x1c4e9e,
			'playbackRates': _0xc8e4ef.doublespeed != 0 ? [
				1,
				1.25,
				1.5,
				2
			] : false,
			'textTrackDisplay': true,
			'controlBar': {
				'volumePanel': { 'inline': false },
				'children': [
					'playToggle',
					'playbackRateMenuButton',
					'currentTimeDisplay',
					'timeDivider',
					'durationDisplay',
					'progressControl',
					'volumePanel',
					'subsCapsButton',
					'fullscreenToggle',
					'videoJsPlayLine',
					'textTrackButton'
				]
			},
			'plugins': {
				'videoJsResolutionSwitcher': {
					'default': _0x556970,
					'dynamicLabel': true,
					'customSourcePicker': function (_0x4dc979, _0x2e8277, _0x4138fd) {
						var _0x46c57e = _0x4dc979.currentPlayline();
						_0x4dc979.src(_0x2e8277.map(function (_0x3bb4bb) {
							return _0xcfe023(_0x3bb4bb, _0x46c57e);
						}));
						if (typeof aplus_queue != 'undefined') {
							function _0x44f927() {
								var _0x1709d6 = '';
								for (var _0x320db3 = 1; _0x320db3 <= 32; _0x320db3++) {
									var _0x3af087 = Math.floor(Math.random() * 16).toString(16);
									_0x1709d6 += _0x3af087;
									(_0x320db3 == 8 || _0x320db3 == 12 || _0x320db3 == 16 || _0x320db3 == 20) && (_0x1709d6 += '-');
								}
								return _0x1709d6;
							}
							typeof aplus_queue != 'undefined' && aplus_queue.push({
								'action': 'aplus.record',
								'arguments': [
									'video_positive_load',
									'CLK',
									{
										'video_name': _0xc8e4ef.knowledgename || '',
										'video_id': _0xc8e4ef.aplus_video_id || '',
										'resource_id': _0xc8e4ef.aplus_resource_id || '',
										'resource_name': _0xc8e4ef.coursename || '',
										'video_duration': _0xc8e4ef.duration,
										'request_id': _0x44f927()
									}
								]
							});
						}
						return _0x4dc979;
					}
				},
				'videoJsPlayLine': {
					'defaults': _0x2ed11b(_0x1c4e9e),
					'dynamicLabel': true,
					'customSourcePicker': function (_0x3c727c, _0x48fb1d, _0x4796aa) {
						var _0x2256f0 = _0x3c727c.currentResolution().sources[0];
						return _0x3c727c.src(_0xcfe023(_0x2256f0, _0x48fb1d)), _0x3c727c;
					}
				},
				'studyControl': { 'enableSwitchWindow': _0xc8e4ef.enableSwitchWindow },
				'seekBarControl': {
					'headOffset': _0xc8e4ef.headOffset,
					'enableFastForward': _0xc8e4ef.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0xc8e4ef.control,
					'reportTimeInterval': _0xc8e4ef.reportTimeInterval,
					'isShowDanmu': _0xc8e4ef.danmaku,
					'chapterCapture': _0xc8e4ef.chapterCapture || 0,
					'captureInterval': _0xc8e4ef.captureInterval || 600,
					'chapterCollectionType': _0xc8e4ef.chapterCollectionType || 0,
					'startCapture': _0xc8e4ef.startCapture,
					'endCapture': _0xc8e4ef.endCapture,
					'playAginCapture': _0xc8e4ef.playAginCapture,
					'playingCapture': _0xc8e4ef.playingCapture,
					'playingLoopCapture': _0xc8e4ef.playingLoopCapture,
					'duration': _0xc8e4ef.duration,
					'isSupportFace': _0xc8e4ef.isSupportFace || false,
					'isShowFaceCollection': _0xc8e4ef.isShowFaceCollection,
					'jumpTimePointList': _0xc8e4ef.jumpTimePointList,
					'attachmentId': _0xc8e4ef.aId,
					'aplusVideoId': _0xc8e4ef.aplus_video_id || '',
					'aplusResourseId': _0xc8e4ef.aplus_resource_id || '',
					'aplusVideoName': _0xc8e4ef.knowledgename || '',
					'aplusResourceName': _0xc8e4ef.coursename || '',
					'sourcePlayer': 'video',
					'deviceType': _0xc8e4ef.deviceType || 0,
					'danmuSet': _0xc8e4ef.danmaku || 0,
					'sendLog': function (_0x366228, _0x25d493, _0x5ca51d, _0x4bd120) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x40c47f = 0;
						switch (_0x25d493) {
							case 'playing':
								_0x40c47f = 0;
								break;
							case 'drag':
								_0x40c47f = 1;
								break;
							case 'play':
								_0x40c47f = 3;
								break;
							case 'pause':
								_0x40c47f = 2;
								break;
							case 'ended':
								_0x40c47f = 4;
								break;
						}
						var _0x531b4a = this;
						_0x202ceb(_0x366228, _0x40c47f, _0x5ca51d, function () {
							try {
								_0x40c47f === 4 && typeof _0x4bd120 != 'undefined' && (_0x4bd120.sendDataLog('ended'), _0x366228.isFullscreen() && (closeFullScreen && closeFullScreen()), _0x4bd120.playNextVideo(_0x531b4a.attachmentId));
							} catch (_0x3d480f) {
								console.log(_0x3d480f);
							}
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				'timelineObjects': {
					'begins': _0xc8e4ef.begins,
					'ends': _0xc8e4ef.ends,
					'url': _0xc8e4ef.rootPath + '/richvideo/initdatawithviewerV2?mid=' + _0xc8e4ef.mid + '&cpi=' + _0xc8e4ef.cpi + '&classid=' + _0xc8e4ef.clazzId,
					'quizErrorReportUrl': _0xc8e4ef.rootPath + '/question/addquestionerror?classid=' + _0xc8e4ef.clazzId + '&cpi=' + _0xc8e4ef.cpi,
					'validationUrl2': _0xc8e4ef.rootPath + '/question/quiz-validation?classid=' + _0xc8e4ef.clazzId + '&cpi=' + _0x2415d0 + '&objectid=' + _0xc8e4ef.objectId,
					'quizRightCountUrl': _0xc8e4ef.rootPath + '/question/quiz-rightcount?classid=' + _0xc8e4ef.clazzId + '&cpi=' + _0x2415d0
				},
				'customIframePlugin': {
					'eventArray': _0xc8e4ef.eventArray,
					'supportHeartbeat': _0xc8e4ef.supportHeartbeat,
					'courseid': _0xc8e4ef.courseid,
					'clazzId': _0xc8e4ef.clazzId,
					'userId': _0xc8e4ef.userid,
					'cookieFid': _0xc8e4ef.cookieFid,
					'knowledgeid': _0xc8e4ef.knowledgeid,
					'objectid': _0xc8e4ef.objectid,
					'playTime': _0xc8e4ef.playTime,
					'videoEnc': _0xc8e4ef.videoEnc,
					'headOffset': _0xc8e4ef.headOffset
				},
				'subtitle': {
					'translate': _0xc8e4ef.chapterVideoTranslate,
					'subtitleUrl': _0xc8e4ef.rootPath + '/richvideo/allsubtitle?mid=' + _0xc8e4ef.mid + '&objectid=' + _0xc8e4ef.objectId + '&courseid=' + _0xc8e4ef.courseid,
					'subtitle': '/ananas/video-editor/sub?objectid=' + _0xc8e4ef.subobjectid
				},
				'marker': {
					'url': !_0xc8e4ef.isNotMark ? '/ananas/getpoints?courseid=' + _0xc8e4ef.courseid + '&mid=' + _0xc8e4ef.mid : '',
					'ff': _0xc8e4ef.enableFastForward,
					'videoTopicCloud': _0xc8e4ef.videoTopicCloud
				}
			}
		};
	}
});
Object.defineProperty(ans.VideoJs.prototype, 'params2VideoOpt', {
	'configurable': false,
	'writable': false
});
Object.freeze(ans.VideoJs.prototype.params2VideoOpt);
;
(function () {
	var _0x16fd0e = videojs.getPlugin('plugin'), _0x5b3a67 = videojs.extend(_0x16fd0e, {
		'constructor': function (_0x492898, _0x4347b6) {
			_0x16fd0e.call(this, _0x492898, _0x4347b6);
			var _0x1a743a = this, _0x54b536 = _0x4347b6.mouseElTarget, _0x58ff98 = 1;
			_0x4347b6.enableSwitchWindow !== 1 && (_0x58ff98 = 0);
			if (!_0x54b536) {
				try {
					_0x54b536 = window.top ? window.top : window.document;
				} catch (_0x472949) {
					_0x54b536 = window.parent ? window.parent : window.document;
				}
			}
			try {
				Ext.fly(_0x54b536).on('mouseout', function (_0x271509) {
					_0x271509 = _0x271509 ? _0x271509 : window.event;
					var _0x5c2075 = _0x271509.relatedTarget || _0x271509.toElement;
					!_0x5c2075 && (_0x58ff98 != 1 && _0x492898.pause());
				});
			} catch (_0x57ff4f) {
				console.log(_0x57ff4f.message);
			}
			_0x1a743a.singleton(_0x492898);
		},
		'singleton': function (_0x12c2d7) {
			var _0x121c6b = this, _0x3a4c4a = parseInt(Math.random() * 9999999);
			_0x12c2d7.on('play', function () {
				Ext.setCookie('videojs_id', _0x3a4c4a);
			});
			_0x12c2d7.setInterval(function () {
				var _0x3c303d = Ext.getCookie('videojs_id');
				typeof _0x3c303d != 'undefined' && _0x3c303d != _0x3a4c4a && _0x12c2d7.pause();
			}, 1000);
		}
	});
	videojs.registerPlugin('studyControl', _0x5b3a67);
}());
(function () {
	var _0x1eb4ce = videojs.getComponent('SeekBar'), _0x1e06f9 = videojs.extend(_0x1eb4ce, {
		'constructor': function (_0x22f918, _0x585377) {
			_0x1eb4ce.call(this, _0x22f918, _0x585377);
			var _0x12bf12 = this;
			_0x22f918.ignorePause = false;
			_0x22f918.seekLog = false;
			_0x22f918.firstSeek = true;
			_0x22f918.disableSeek = function (_0x3940e7) {
				_0x12bf12.disableSeek(_0x3940e7);
			};
			_0x22f918.onlyBackward = function (_0x5a2c13) {
				_0x12bf12.onlyBackward(_0x5a2c13);
			};
			_0x22f918.getSeekBar = function () {
				return _0x12bf12;
			};
			_0x12bf12.on('slideractive', function () {
				_0x22f918.trigger('seekstart');
				_0x22f918.ignorePause = true;
				_0x22f918.ignorePlay = true;
				_0x22f918.ignoreSeek = false;
			});
			_0x12bf12.on('sliderinactive', function () {
				_0x22f918.trigger('seekend');
				_0x22f918.ignoreSeek = false;
			});
			_0x12bf12.maxPercent = 0;
			_0x22f918.on('timeupdate', function () {
				_0x12bf12.maxPercent = Math.max(_0x12bf12.getPercent(), _0x12bf12.maxPercent);
			});
		},
		'getCurrentTime_': function () {
			return this.player_.currentTime();
		},
		'getMaxPercent': function () {
			return this.maxPercent;
		},
		'isBackward': function (_0x450a64) {
			return this.maxPercent > this.calculateDistance(_0x450a64);
		},
		'handleMouseDown': function (_0x332ffa) {
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x332ffa)) {
					return;
				}
			}
			if (this['_disableSeek'] === true) {
				return;
			}
			_0x1eb4ce.prototype.handleMouseDown.call(this, _0x332ffa);
		},
		'handleMouseMove': function (_0xa11dde) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0xa11dde)) {
					return;
				}
			}
			_0x1eb4ce.prototype.handleMouseMove.call(this, _0xa11dde);
		},
		'handleMouseUp': function (_0x3c295e) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x3c295e)) {
					return;
				}
			}
			_0x1eb4ce.prototype.handleMouseUp.call(this, _0x3c295e);
		},
		'disableSeek': function (_0x5f58eb) {
			var _0x3f3bb7 = this;
			_0x3f3bb7['_disableSeek'] = _0x5f58eb !== false;
			_0x3f3bb7['_disableSeek'] ? _0x3f3bb7.disable() : _0x3f3bb7.enable();
		},
		'onlyBackward': function (_0x45822b) {
			var _0x5dd3fd = this;
			_0x5dd3fd['_onlyBackward'] = _0x45822b !== false;
		}
	});
	videojs.registerComponent('SeekBar', _0x1e06f9);
}());
(function () {
	var _0x47b808 = videojs.getPlugin('plugin'), _0x3ca567 = videojs.extend(_0x47b808, {
		'constructor': function (_0x236973, _0x2b98c7) {
			_0x47b808.call(this, _0x236973, _0x2b98c7);
			var _0x2eed7e = this;
			_0x2eed7e.firstClick = true;
			_0x2eed7e.isSendLog_ = !!_0x2b98c7.isSendLog;
			_0x2eed7e.isShowDanmu_ = !!_0x2b98c7.isShowDanmu;
			_0x2eed7e.damuLastGetTime = 0;
			_0x2eed7e.firstPlay = true;
			_0x2eed7e.firstPlayFace = true;
			_0x2eed7e.pausePlayFace = false;
			_0x2eed7e.playingFace = false;
			_0x2eed7e.playingFaceTime = 0;
			_0x2eed7e.chapterCapture = _0x2b98c7.chapterCapture || 0;
			_0x2eed7e.captureInterval = _0x2b98c7.captureInterval * 60 || 600;
			_0x2eed7e.chapterCollectionType = _0x2b98c7.chapterCollectionType || 0;
			_0x2eed7e.isSupportFace = _0x2b98c7.isSupportFace;
			_0x2eed7e.isAlertTip = false;
			_0x2eed7e.startCapture = _0x2b98c7.startCapture;
			_0x2eed7e.endCapture = _0x2b98c7.endCapture;
			_0x2eed7e.playAginCapture = _0x2b98c7.playAginCapture;
			_0x2eed7e.playingCapture = _0x2b98c7.playingCapture;
			_0x2eed7e.playingLoopCapture = _0x2b98c7.playingLoopCapture;
			_0x2eed7e.isShowFaceCollection = _0x2b98c7.isShowFaceCollection;
			_0x2eed7e.duration = _0x2b98c7.duration;
			_0x2eed7e.jumpTimePointList = _0x2b98c7.jumpTimePointList;
			_0x2eed7e.loopCaptureInterval = Math.floor(Math.random() * (parseInt(_0x2eed7e.duration) - 0) + 1);
			_0x2eed7e.attachmentId = _0x2b98c7.attachmentId;
			_0x2eed7e.aplusVideoId = _0x2b98c7.aplusVideoId;
			_0x2eed7e.aplusResourseId = _0x2b98c7.aplusResourseId;
			_0x2eed7e.aplusVideoName = _0x2b98c7.aplusVideoName;
			_0x2eed7e.aplusResourceName = _0x2b98c7.aplusResourceName;
			_0x236973.dragCutOffTime = _0x2b98c7.headOffset ? _0x2b98c7.headOffset : 0;
			_0x236973.canDragSeekBar = false;
			_0x236973.playStatus = 'start';
			_0x2eed7e.danmuSet = _0x2b98c7.danmuSet;
			_0x2eed7e.deviceType = _0x2b98c7.deviceType || 0;
			!_0x2b98c7.sendLog && (_0x2b98c7.sendLog = function () {
			});
			_0x2b98c7.headOffset && _0x236973.currentTime(_0x2b98c7.headOffset);
			function _0x95142b() {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'heartbeat',
						'CLK',
						{
							'video_name': _0x2eed7e.aplusVideoName,
							'video_id': _0x2eed7e.aplusVideoId,
							'resource_id': _0x2eed7e.aplusResourseId,
							'resource_name': _0x2eed7e.aplusResourceName,
							'request_id': _0x2eed7e.getNewGuid()
						}
					]
				});
			}
			var _0x9e2ef5 = null, _0x21d7fa = 0, _0x276fef = 0, _0x1fc95d = _0x2b98c7.reportTimeInterval || 60, _0x1f0dd7 = _0x1fc95d * 1000, _0x26c182 = function (_0xf072a0, _0x195d2c, _0x378e04) {
				var _0x3853a8 = $('.vjs-tip2');
				_0x3853a8.find('.vjs-tip-inner2').text(_0x378e04);
				_0x3853a8.css({
					'left': _0xf072a0 / _0x195d2c.duration() * 100 + '%',
					'margin-left': -parseFloat(_0x3853a8.width()) / 2 - 5 + 'px',
					'visibility': 'visible'
				});
				$('.vjs-default-skin').removeClass('vjs-user-inactive');
				$('.vjs-default-skin').addClass('vjs-user-active');
				setTimeout(function () {
					_0x3853a8.css('visibility', 'hidden');
				}, 2000);
			}, _0x433039 = function (_0x59afb0, _0x37abe7, _0x5e459e) {
				if (!_0x2eed7e.isSendLog_) {
					return;
				}
				var _0xb2e70 = _0x2eed7e.now_() - _0x21d7fa;
				(_0xb2e70 > _0x1f0dd7 || _0x37abe7 === true) && (typeof _0x5e459e != 'undefined' ? _0x2b98c7.sendLog(_0x236973, _0x59afb0, _0x5e459e, _0x2eed7e) : _0x2b98c7.sendLog(_0x236973, _0x59afb0, _0x2eed7e.sec_(_0x236973), _0x2eed7e), _0x21d7fa = _0x2eed7e.now_());
			}, _0x2de2c6 = function (_0x35f206) {
				return _0x35f206 && _0x35f206.sort && _0x35f206.sort(function (_0x4ef8c9, _0x5bf07b) {
					return parseInt(_0x4ef8c9) - parseInt(_0x5bf07b);
				});
			}, _0x33aaee = function (_0x304eac) {
				try {
					var _0x592b82 = _0x304eac.otherPointTimes;
					if (_0x592b82.length === 0) {
						return -1;
					}
					return _0x592b82 = _0x2de2c6(_0x592b82), _0x592b82[0];
				} catch (_0x52753d) {
					console.log(_0x52753d);
				}
				return -1;
			}, _0x4f9c71 = function (_0x408935) {
				try {
					var _0x3ed64f = _0x408935.otherPointTimes, _0x4997e2 = _0x3ed64f.length;
					if (_0x4997e2 === 0) {
						return -1;
					}
					return _0x3ed64f = _0x2de2c6(_0x3ed64f), _0x3ed64f[_0x4997e2 - 1];
				} catch (_0x3baa8b) {
					console.log(_0x3baa8b);
				}
				return -1;
			}, _0x560766 = function (_0xfcdff6, _0x56949c) {
				try {
					if (!_0xfcdff6.paused() && typeof _0xfcdff6.eventPoints != 'undefined') {
						var _0x3186bd = _0xfcdff6.currentTime(), _0xe30034 = 0;
						_0xfcdff6.eventPoints.forEach(function (_0x16a5c1) {
							_0x16a5c1.text == '片头' && (_0xe30034 = _0x16a5c1.time);
						});
						if (_0x56949c.headOffset > 0 && _0x56949c.headOffset < _0xe30034) {
							return;
						}
						if (_0xe30034 > 0 && parseInt(_0x3186bd) === 0) {
							var _0x2d525a = parseInt(_0x33aaee(_0xfcdff6));
							if (_0x2d525a >= 0 && _0xe30034 > _0x2d525a) {
								return;
							}
							_0xfcdff6.ignoreSeek = false;
							_0xfcdff6.switchStatus = true;
							_0xfcdff6.currentTime(_0xe30034);
							_0x26c182(_0xe30034, _0xfcdff6, '已跳过片头');
						}
					}
				} catch (_0x3cd69a) {
					console.log(_0x3cd69a);
				}
				try {
					var _0x4d9a3f = 0;
					if (!_0xfcdff6.paused() && typeof _0xfcdff6.eventPoints != 'undefined') {
						var _0x3186bd = _0xfcdff6.currentTime();
						_0xfcdff6.eventPoints.forEach(function (_0x2d3410) {
							_0x2d3410.text == '片尾' && (_0x4d9a3f = _0x2d3410.time);
						});
						if (_0x56949c.headOffset > _0x4d9a3f) {
							return;
						}
						var _0x5d5865 = parseInt(_0x3186bd);
						if (_0x4d9a3f > 0 && _0x5d5865 === _0x4d9a3f) {
							var _0x2aa496 = parseInt(_0x4f9c71(_0xfcdff6));
							if (_0x2aa496 >= 0 && _0x4d9a3f < _0x2aa496) {
								return;
							}
							_0xfcdff6.ignoreSeek = false;
							_0xfcdff6.switchStatus = true;
							_0xfcdff6.currentTime(_0x56949c.duration);
							_0x26c182(_0x5d5865, _0xfcdff6, '已跳过片尾');
						}
					}
				} catch (_0x560813) {
					console.log(_0x560813);
				}
			};
			_0x236973.on('play', function () {
				try {
					if (typeof top.supportH5Screen != 'undefined' && top.supportH5Screen == 'true') {
						top.openScreen();
						return;
					}
				} catch (_0x4995e3) {
					console.log(_0x4995e3);
				}
				try {
					top.configFullScreen && reSizeVideoWindow();
				} catch (_0x532778) {
					console.log(_0x532778);
				}
				_0x236973.playStatus = 'play';
				if (_0x2eed7e.deviceType == 2) {
					$('#reader .videoMaskDiv').remove();
					if ($('.barMask').length == 0) {
						var _0x4dfd3d = '<div class="barMask"></div>';
						$('.vjs-control-bar').append(_0x4dfd3d);
					}
				}
				if (_0x2eed7e.deviceType == 1 && $('.vjs-fullscreen-control-self').length == 0) {
					$('.vjs-control-bar').append('<span class=\'vjs-fullscreen-control-self\' title=\'全屏\'><i></i></span>');
					$('.vjs-control-bar .vjs-fullscreen-control').remove();
					$('.vjs-fullscreen-control-self').click(function () {
						toggleFullScreen();
					});
				}
				parent.parent.videoPlayingFrame = window.frameElement;
				if (parent.parent.MultiEditor && parent.parent.insertEditorScreenShot || parent.MultiEditor && parent.insertEditorScreenShot) {
					if (_0x2eed7e.deviceType == 1) {
						var _0x556348 = '<span class="vjs-screen-shot" title="截屏"></span>';
						$('.vjs-control-bar').append(_0x556348);
						if ($('.vjs-control-bar .vjs-screen-shot').length > 0) {
							var _0x2c2660 = $('#video_html5_api').height(), _0x72be4b = parseInt(_0x2c2660) / 2;
							$('.vjs-control-bar .vjs-screen-shot').css('top', _0x72be4b + 'px');
							$('.vjs-control-bar .vjs-screen-shot').click(function () {
								parent.parent.getClazzNote && parent.parent.getClazzNote();
								parent.parent.changePan && parent.parent.changePan('3');
								$('#editor1 .edui-for-screenshot').show();
								parent.parent.videoNoteFrame = window.frameElement;
								$('.formTopic', parent.parent.document).slideDown(300);
								parent.parent.insertEditorScreenShot && parent.parent.insertEditorScreenShot();
							});
						}
					} else {
						if (_0x2eed7e.deviceType == 2) {
							var _0x556348 = '<span class="vjs-screen-shot" title="截屏"></span>';
							if ($('.vjs-control-bar .vjs-screen-shot').length == 0) {
								$('.vjs-control-bar').append(_0x556348);
								$('.vjs-control-bar .vjs-screen-shot').css('top', '90px');
							}
							$('.vjs-control-bar .vjs-screen-shot').click(function () {
								(isFullScreenStatus() || isFullScreen) && ($('.vjs-fullscreen-control').click(), $('.writeDanmu').hide(), $('.fastBox span').removeClass('full'), $('.fastBox').removeClass('full'), $('.vjs-fullscreen-control').removeClass('full'), $('.video-js .vjs-paused .vjs-icon-placeholder').removeClass('full'), $('.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder').removeClass('full'), $('.vjs-screen-shot').css('top', '90px'), $('.vjs-screen-shot').css('margin-top', '-13px'));
								parent.videoScreenFrame = window.frameElement;
								parent.insertEditorScreenShot && parent.insertEditorScreenShot();
							});
						}
					}
				}
				_0x2eed7e.danmuSet == 1 && !_0x236973.ignorePlay && _0x2eed7e.getDanmuList('play', _0x236973);
				cancelOneSpan = false;
				leftcancel = false;
				_0x2eed7e.firstPlay && (typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_positive_pybk',
						'OTHER',
						{
							'video_name': _0x2eed7e.aplusVideoName,
							'video_id': _0x2eed7e.aplusVideoId,
							'resource_id': _0x2eed7e.aplusResourseId,
							'resource_name': _0x2eed7e.aplusResourceName,
							'request_id': _0x2eed7e.getNewGuid()
						}
					]
				}));
				try {
					if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && _0x2eed7e.firstClick && isUnFinishJob()) {
						_0x2eed7e.firstClick = false;
						_0x236973.pause();
						checkJobCountLimit(_0x236973, 0);
						return;
					}
					if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && _0x2eed7e.firstClick && isUnFinishJob()) {
						_0x2eed7e.firstClick = false;
						_0x236973.pause();
						checkJobCountLimit(_0x236973, 1);
						return;
					}
				} catch (_0x196fc2) {
					console.log(_0x196fc2);
				}
				_0x2eed7e.isAlertTip = false;
				!_0x236973.ignorePlay && !_0x2eed7e.firstPlay && (typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'continue_pybk_click',
						'CLK',
						{
							'video_name': _0x2eed7e.aplusVideoName,
							'video_id': _0x2eed7e.aplusVideoId,
							'resource_id': _0x2eed7e.aplusResourseId,
							'resource_name': _0x2eed7e.aplusResourceName
						}
					]
				}));
				if (_0x2eed7e.chapterCapture == 0 || !_0x2eed7e.isSupportFace || !_0x2eed7e.isShowFaceCollection) {
					!_0x236973.ignorePlay ? (_0x433039('play', true), _0x236973.ignoreSeek = true) : (_0x236973.ignorePlay = false, _0x236973.ignoreSeek = false, _0x236973.seekLog = false);
					_0x2eed7e.sendDataLog('play');
					_0x2eed7e.receiveStudyLog();
					_0x2eed7e.firstPlay = false;
					_0x2eed7e.pausePlayFace = true;
				} else {
					if (_0x2eed7e.chapterCapture == 1) {
						if (_0x2eed7e.firstPlay) {
							var _0x42e4b1 = _0x2eed7e.sec_(_0x236973);
							if (_0x42e4b1 == 0 && (_0x2eed7e.startCapture == 1 || typeof _0x2eed7e.startCapture == 'undefined') && _0x2eed7e.firstPlayFace) {
								_0x2eed7e.playingFaceTime = _0x42e4b1;
								_0x2eed7e.playingFace = false;
								var _0x3d18cf = _0x2eed7e.faceCollection('play', _0x236973, _0x2eed7e.chapterCollectionType, 0);
								if (_0x3d18cf != 1) {
									return;
								}
							}
							!_0x236973.ignorePlay ? (_0x433039('play', true), _0x236973.ignoreSeek = true) : (_0x236973.ignorePlay = false, _0x236973.ignoreSeek = false, _0x236973.seekLog = false);
							_0x2eed7e.sendDataLog('play');
							_0x2eed7e.receiveStudyLog();
							_0x2eed7e.firstPlay = false;
							_0x2eed7e.pausePlayFace = true;
						} else {
							if (_0x2eed7e.playAginCapture == 1 && !_0x236973.ignorePlay && _0x2eed7e.pausePlayFace) {
								_0x2eed7e.playingFaceTime = _0x2eed7e.sec_(_0x236973);
								_0x2eed7e.playingFace = false;
								_0x2eed7e.faceCollection('aginPlay', _0x236973, _0x2eed7e.chapterCollectionType, -2);
								return;
							}
							_0x2eed7e.pausePlayFace = true;
						}
					}
				}
				typeof aplus_queue != 'undefined' && (_0x9e2ef5 = setInterval(_0x95142b, 20000));
				_0x2eed7e.seekLog = false;
			});
			_0x236973.tipFun = function (_0x147cf8) {
				var _0x2571f1 = _0x2eed7e.sec_(_0x236973);
				if (_0x147cf8 == 37) {
					var _0x58f3f3 = _0x2571f1 - 5 < 0 ? 0 : _0x2571f1 - 5;
					_0x236973.currentTime(_0x58f3f3);
				} else {
					if (_0x147cf8 == 39) {
						if (_0x2571f1 + 5 < _0x236973.dragCutOffTime) {
							_0x236973.currentTime(_0x2571f1 + 5);
						} else {
							_0x236973.currentTime(_0x236973.dragCutOffTime);
							if (!$('.toolTipBox1').is(':visible')) {
								$('.toolTipBox1').html($('#tipDiv .toolTipBox1').html());
								var _0x58363a = $('#video_html5_api').height();
								$('.toolTipBox1').css('top', parseInt(_0x58363a / 2) + 'px');
								$('.toolTipBox1').show();
								setTimeout(function () {
									$('.toolTipBox1').hide();
								}, 800);
							}
						}
					}
				}
			};
			_0x236973.on('seeked', function () {
				_0x236973.playStatus = 'seeked';
				if (_0x2b98c7.enableFastForward != 1 && !_0x236973.switchStatus && !_0x236973.finished) {
					var _0x17ba21 = _0x236973.currentTime(), _0x6b432a = _0x2b98c7.headOffset ? _0x2b98c7.headOffset : 0;
					max = Math.max(_0x6b432a, _0x236973.dragCutOffTime);
					if (parseInt(_0x17ba21) > max) {
						_0x236973.canDragSeekBar = false;
						_0x17ba21 != 0 && _0x236973.currentTime(max);
						bindVjsClick && bindVjsClick();
						return;
					} else {
						if (_0x17ba21 == max) {
							return;
						} else {
							_0x17ba21 < max && (_0x236973.canDragSeekBar = true);
						}
					}
				}
				!_0x236973.seekLog && (_0x236973.seekStartTime = _0x276fef);
				if (!_0x236973.ignoreSeek) {
					if (!_0x236973.seekLog) {
						_0x236973.firstSeek && (_0x433039('drag', true, _0x236973.seekStartTime + '-' + _0x2eed7e.sec_(_0x236973)), _0x236973.firstSeek = false);
						function _0xb4fe19() {
							_0x433039('drag', true, _0x236973.seekStartTime + '-' + _0x2eed7e.sec_(_0x236973));
							document.removeEventListener('mouseup', _0xb4fe19);
						}
						document.addEventListener('mouseup', _0xb4fe19);
						_0x2eed7e.danmuSet == 1 && _0x2eed7e.getDanmuList('seeked', _0x236973);
					}
					if ('video' == _0x2b98c7.sourcePlayer) {
						typeof aplus_queue != 'undefined' && aplus_queue.push({
							'action': 'aplus.record',
							'arguments': [
								'time_shift_click',
								'OTHER',
								{
									'video_name': _0x2eed7e.aplusVideoName,
									'video_id': _0x2eed7e.aplusVideoId,
									'resource_id': _0x2eed7e.aplusResourseId,
									'resource_name': _0x2eed7e.aplusResourceName,
									'time_shift_time': _0x276fef + '',
									'time_shift_duration': Math.abs(parseInt(_0x2eed7e.sec_(_0x236973)) - parseInt(_0x276fef))
								}
							]
						});
						typeof aplus_queue != 'undefined' && aplus_queue.push({
							'action': 'aplus.record',
							'arguments': [
								'video_progress_drag',
								'OTHER',
								{
									'video_name': _0x2eed7e.aplusVideoName,
									'video_id': _0x2eed7e.aplusVideoId,
									'resource_id': _0x2eed7e.aplusResourseId,
									'resource_name': _0x2eed7e.aplusResourceName
								}
							]
						});
					}
				} else {
					_0x236973.ignoreSeek = false;
				}
				_0x276fef = _0x2eed7e.sec_(_0x236973);
				_0x236973.ignorePlay = true;
				_0x236973.seekLog = true;
				delete _0x236973.switchStatus;
			});
			_0x236973.on('pause', function () {
				_0x236973.playStatus = 'pause';
				!_0x236973.ignorePause ? (_0x433039('pause', true), _0x236973.ignorePlay = false, _0x236973.ignoreSeek = false, _0x236973.seekLog = false, typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_pause_click',
						'CLK',
						{
							'video_name': _0x2eed7e.aplusVideoName,
							'video_id': _0x2eed7e.aplusVideoId,
							'resource_id': _0x2eed7e.aplusResourseId,
							'resource_name': _0x2eed7e.aplusResourceName
						}
					]
				})) : _0x236973.ignorePause = false;
				_0x2eed7e.sendDataLog('pause');
				cancelOneSpan = true;
				leftcancel = true;
				_0x9e2ef5 && clearInterval(_0x9e2ef5);
			});
			_0x236973.on('timeupdate', function () {
				_0x236973.playStatus = 'playing';
				var _0x266754 = _0x2eed7e.sec_(_0x236973);
				_0x266754 > _0x236973.dragCutOffTime && _0x266754 - _0x236973.dragCutOffTime < 2 && (_0x236973.dragCutOffTime = _0x266754);
				_0x2eed7e.isSupportFace && _0x2eed7e.isShowFaceCollection && _0x2eed7e.chapterCapture == 1 && _0x2eed7e.playingCapture == 1 && _0x2eed7e.playingFace && (_0x2eed7e.playingFace = false, _0x2eed7e.playingLoopCapture == 1 ? _0x266754 == _0x2eed7e.loopCaptureInterval && _0x2eed7e.faceCollection('playing', _0x236973, _0x2eed7e.chapterCollectionType, -1) : _0x266754 >= _0x2eed7e.captureInterval && _0x266754 % _0x2eed7e.captureInterval == 0 && _0x2eed7e.faceCollection('playing', _0x236973, _0x2eed7e.chapterCollectionType, _0x266754));
				!_0x2eed7e.playingFace && _0x266754 - _0x2eed7e.playingFaceTime > 2 && (_0x2eed7e.playingFace = true);
				if (typeof parent.videoTrialDuration != 'undefined' && parent.videoTrialDuration != '-1') {
					var _0x81f623 = parseInt(parent.videoTrialDuration) * 60;
					if (_0x81f623 < _0x2eed7e.sec_(_0x236973) && !_0x2eed7e.isAlertTip) {
						_0x236973.pause();
						alert('视频只允许试看' + parent.videoTrialDuration + '分钟');
						_0x2eed7e.isAlertTip = true;
						return;
					}
				}
				_0x2eed7e.danmuSet == 1 && parseInt(_0x236973.currentTime()) >= this.damuLastGetTime && _0x2eed7e.getDanmuList('timeupdate', _0x236973);
				_0x2eed7e.danmuDisplay(_0x236973);
				if (_0x21d7fa == 0) {
					_0x560766(_0x236973, _0x2b98c7);
					return;
				}
				_0x2eed7e.sec_(_0x236973) - _0x276fef <= 1 && !_0x236973.ignorePlay && (_0x276fef = _0x2eed7e.sec_(_0x236973));
				_0x433039('playing');
				_0x560766(_0x236973, _0x2b98c7);
			});
			_0x236973.on('ended', function () {
				_0x236973.playStatus = 'ended';
				_0x2eed7e.isShowFaceCollection && _0x2eed7e.chapterCapture == 1 && _0x2eed7e.endCapture == 1 && _0x2eed7e.faceCollection('ended', _0x236973, _0x2eed7e.chapterCollectionType, _0x2eed7e.duration);
				_0x433039('ended', true);
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_end_click',
						'CLK',
						{
							'video_name': _0x2eed7e.aplusVideoName,
							'video_id': _0x2eed7e.aplusVideoId,
							'resource_id': _0x2eed7e.aplusResourseId,
							'resource_name': _0x2eed7e.aplusResourceName,
							'request_id': _0x2eed7e.getNewGuid(),
							'pybk_duration': _0x2eed7e.duration,
							'full_play_count': 1
						}
					]
				});
				_0x9e2ef5 && clearInterval(_0x9e2ef5);
				cancelOneSpan = false;
				leftcancel = false;
				_0x236973.seekLog = false;
			});
		},
		'sec_': function (_0x5c6e33) {
			return parseInt(_0x5c6e33.currentTime());
		},
		'now_': function () {
			return new Date().getTime();
		},
		'isSendLog': function (_0x5e98b6) {
			return _0x5e98b6 && (this.isSendLog_ = !!_0x5e98b6), this.isSendLog_;
		},
		'sendDataLog': function (_0x462b9a) {
			var _0x2daf1f = _0x462b9a == 'pause' || _0x462b9a == 'end' ? 2 : 1;
			typeof sendReadZTMediaLog != 'undefined' && sendReadZTMediaLog(_0x2daf1f);
		},
		'receiveStudyLog': function () {
			typeof receiveStudyLog != 'undefined' && setTimeout(function () {
				receiveStudyLog();
			}, 50);
		},
		'getDanmuList': function (_0x22954b, _0x4256ec) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x2568e9 = this.sec_(_0x4256ec);
			if (_0x22954b == 'pause') {
				this.damuLastGetTime = 0;
				setTimeout(function () {
					getDanmuByTime(_0x22954b, 0);
				}, 200);
				return;
			}
			_0x22954b == 'seeked' && this.danmuSet == 1 && $('.channel').empty();
			typeof getDanmuByTime != 'undefined' && setTimeout(function () {
				getDanmuByTime(_0x22954b, _0x2568e9);
			}, 200);
			if (_0x2568e9 < this.damuLastGetTime) {
				return;
			}
			this.damuLastGetTime = _0x2568e9 + 59;
		},
		'danmuDisplay': function (_0x28dac9) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x5ce2e7 = this.sec_(_0x28dac9);
			typeof danmuPlay != 'undefined' && danmuPlay(_0x5ce2e7);
		},
		'timer': function (_0x1dcee8) {
		},
		'faceCollection': function (_0x55dcd8, _0x5a5ba9, _0xbe8781, _0x209957) {
			if (_0x209957 != -2) {
				var _0x200d6b = this.jumpTimePointList;
				if (typeof _0x200d6b != 'undefined') {
					try {
						if (_0x200d6b.includes(_0x209957)) {
							return this.firstPlayFace = false, this.pausePlayFace = false, this.playingFace = false, 1;
						}
					} catch (_0x4473df) {
					}
				}
			}
			_0x55dcd8 == 'play' ? typeof startFaceCollection != 'undefined' && (_0x5a5ba9.pause(), startFaceCollection(_0x5a5ba9, _0xbe8781, this, _0x209957)) : _0x55dcd8 == 'ended' ? typeof startFaceCollection != 'undefined' && (_0x5a5ba9.pause(), startFaceCollection(_0x5a5ba9, _0xbe8781, this, _0x209957)) : _0x55dcd8 == 'playing' ? (typeof startFaceCollection != 'undefined' && (_0x5a5ba9.pause(), this.playingFaceTime = this.sec_(_0x5a5ba9), startFaceCollection(_0x5a5ba9, _0xbe8781, this, _0x209957), this.playingFace = false), this.pausePlayFace = false) : _0x55dcd8 == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (_0x5a5ba9.pause(), startFaceCollection(_0x5a5ba9, _0xbe8781, this, _0x209957)), this.pausePlayFace = false);
		},
		'playNextVideo': function (_0x41b3e6) {
			if (typeof chapterPlayNextVideo != 'undefined') {
				if (typeof top.allowNextVideo != 'undefined' && top.allowNextVideo === false) {
					top.hasJobLimit === true ? top.showJobLimitTip() : top.showVideoTimeLimitTip();
					return;
				}
				chapterPlayNextVideo(_0x41b3e6);
			}
		},
		'getNewGuid': function () {
			var _0x3d8cdb = '';
			for (var _0xe35463 = 1; _0xe35463 <= 32; _0xe35463++) {
				var _0x222ba7 = Math.floor(Math.random() * 16).toString(16);
				_0x3d8cdb += _0x222ba7;
				(_0xe35463 == 8 || _0xe35463 == 12 || _0xe35463 == 16 || _0xe35463 == 20) && (_0x3d8cdb += '-');
			}
			return _0x3d8cdb;
		}
	});
	videojs.registerPlugin('seekBarControl', _0x3ca567);
}());
Ext.define('ans.videojs.TimelineObjectsBg', {
	'extend': 'Ext.Component',
	'cls': 'ans-timelineobjectsbg',
	'hidden': true
});
Ext.define('ans.videojs.VideoQuiz', {
	'extend': 'Ext.Component',
	'xtype': 'videoquiz',
	'cls': 'ans-videoquiz',
	'renderTpl': [
		'<div class="tkTopic">',
		'<tpl if="dtype==\'InteractiveQuiz\'">',
		'<div class="tkTopic_numbar fr">共 {interactiveQuestionCount} 题<span id="rightAnswerNum">\uFF0C已答对 <i id="rightNum"></i> 题</span></div>',
		'</tpl> ',
		'<div class="tkTopic_title">[{questionType}]</div>',
		'<div class="tkTopic_con tkScroll">',
		'<div class="tkItem">',
		'<div class="tkItem_title">{description}</div>',
		'<ul class="tkItem_ul">',
		'<tpl for="options">',
		'<li class="ans-videoquiz-opt"><label>',
		'<span class="tkRadio"><input type="{[parent.questionType=="多选题"?"checkbox":"radio"]}" <tpl if="parent.dtype==\'InteractiveQuiz\'">{[this.getChecked(parent.answerContent, values.name, parent.dtype)]}</tpl> name="ans-videoquiz-opt" value="{isRight}"/><i></i></span>',
		'{name}\u3001{description}',
		'</label></li>',
		'</tpl> ',
		'</ul>',
		'</div>',
		'</div>',
		'<div class="tkTopic_oper">',
		'<a class="ans-videoquiz-submit bntLinear fr" id="videoquiz-submit">提交</a>',
		'<a class="ans-videoquiz-submit bntLinear fr" id="videoquiz-submitting" style="display:none">提交中</a>',
		'<a class="ans-videoquiz-continue bntLinear fr" id="videoquiz-continue"><tpl if="dtype==\'InteractiveQuiz\'">继续学习<tpl else>继续</tpl></a>',
		'<tpl if="dtype==\'InteractiveQuiz\'">',
		'<a class="bntWhiteBorder ans-videoquiz-back fr" id="knowledgeBack">知识点回看</a>',
		'</tpl>',
		'<tpl if="dtype==\'InteractiveQuiz\'"><span id="spanHas" class="rightInfo"></span><tpl else><span class="spanHas fr" id="spanHas">回答正确</span></tpl>',
		'<span class="spanNot fr" id="spanNot"><tpl if="dtype==\'InteractiveQuiz\'">真遗憾\uFF0C再接再厉\uFF01<tpl else>回答错误</tpl></span>',
		'<span class="spanNotBack fr" id="spanNotBack"><tpl if="dtype==\'InteractiveQuiz\'">真遗憾\uFF0C再接再厉\uFF01<tpl else>回答错误\uFF0C</tpl>回看 {errorBackTime} 分钟</span>',
		'<tpl if="dtype==\'InteractiveQuiz\'">',
		'<span class="spanNotBack fr" id="spanNotBackPoint">真遗憾\uFF0C再接再厉\uFF01</span>',
		'<a class="spanHref fl" href="javascript:" id="viewAnalysis">查看解析</a>',
		'</div>',
		'<div class="tkParsing" id="tkParsing">',
		'<a class="tkParsing_dele" id="tkParsingDele" href="javascript:"></a>',
		'<div class="tkParsing_screll tkParsing_con" id="tkParsing_con"></div>',
		'</tpl>',
		'</div>',
		'</div>',
		{
			'getChecked': function (_0x17cbaf, _0x236b87, _0x46a1fd) {
				try {
					if (typeof _0x17cbaf != 'undefined') {
						return _0x17cbaf.indexOf(_0x236b87) != -1 && _0x46a1fd == 'InteractiveQuiz' ? 'checked="checked"' : '';
					}
					return '';
				} catch (_0x49b50d) {
					console.log(_0x49b50d);
				}
			}
		}
	],
	'renderSelectors': {
		'submitEl': 'a.ans-videoquiz-submit',
		'continueEl': 'a.ans-videoquiz-continue',
		'scrollEl': 'div.tkScroll',
		'backEl': 'a.ans-videoquiz-back',
		'tkParseScrollEl': 'div.tkParsing_screll',
		'viewAnalysisEl': 'a.spanHref',
		'delAnalysisEl': 'a.tkParsing_dele'
	},
	'afterRender': function () {
		var _0x407d24 = this, _0x2c3716 = _0x407d24.renderData, _0x3282d6 = _0x407d24.quizRightCountUrl;
		typeof _0x3282d6 != 'undefined' && Ext.Ajax.request({
			'url': _0x3282d6,
			'params': {
				'eventid': _0x2c3716.resourceId,
				'memberinfo': _0x2c3716.memberinfo
			},
			'method': 'get',
			'success': function (_0x203773) {
				var _0x1c4f25 = Ext.decode(_0x203773.responseText);
				_0x1c4f25.status && (Ext.get('rightNum').setHTML(_0x1c4f25.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
			}
		});
		_0x407d24.callParent(arguments);
		var _0x57999e = _0x407d24.scrollEl, _0xea4a12 = $(_0x57999e.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#A5A5A5',
			'boxzoom': false,
			'autohidemode': false
		});
		setInterval(function () {
			$(_0x57999e.dom).getNiceScroll().resize();
		}, 300);
		_0x407d24.scroller = _0xea4a12;
		_0x407d24.submitEl.on('click', function () {
			_0x407d24.checkResult();
		});
		_0x407d24.continueEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x34421e) {
				console.log(_0x34421e);
			}
			_0x407d24.fireEvent('continue');
		});
		_0x407d24.backEl && _0x407d24.backEl.on('click', function () {
			_0x407d24.onerror && _0x407d24.onerror();
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x5f1295) {
				console.log(_0x5f1295);
			}
			_0x407d24.fireEvent('continue');
		});
		_0x407d24.viewAnalysisEl && _0x407d24.viewAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'inline-block');
		});
		_0x407d24.delAnalysisEl && _0x407d24.delAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'none');
		});
	},
	'checkResult': function () {
		var _0x3d4f20 = this, _0x572ea8 = Ext.query('input', _0x3d4f20.el.dom), _0x3fe846 = true, _0x497fe9 = _0x3d4f20.renderData, _0x5c3972 = _0x497fe9.options, _0x1f9fb2 = [], _0x10f7f6 = _0x3d4f20.quizErrorReportUrl, _0x18591a = _0x3d4f20.validationUrl2, _0x379523 = _0x497fe9.dtype;
		if (Ext.get('videoquiz-continue').getStyle('display') == 'none' && window.parent.parent.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1) {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x19c940) {
				console.log(_0x19c940);
			}
			_0x3d4f20.fireEvent('continue');
			return;
		}
		Ext.each(_0x572ea8, function (_0x3c3dfc, _0xdf6b25) {
			_0x3c3dfc.checked && _0x1f9fb2.push(_0x5c3972[_0xdf6b25].name);
		});
		Ext.get('videoquiz-submit').setStyle('display', 'none');
		Ext.get('videoquiz-submitting').setStyle('display', 'block');
		if (typeof _0x18591a != 'undefined') {
			var _0x69718d = _0x1f9fb2.join(',');
			Ext.Ajax.request({
				'url': _0x18591a,
				'params': {
					'eventid': _0x497fe9.resourceId,
					'memberinfo': _0x497fe9.memberinfo,
					'answerContent': _0x69718d
				},
				'method': 'get',
				'success': function (_0x1c8892) {
					Ext.get('videoquiz-submit').setStyle('display', 'block');
					Ext.get('videoquiz-submitting').setStyle('display', 'none');
					_0x497fe9.answerContent = _0x69718d;
					var _0x3044ca = Ext.decode(_0x1c8892.responseText), _0x246922 = typeof _0x3044ca.isRight === 'undefined' ? false : _0x3044ca.isRight;
					!_0x246922 ? _0x379523 == 'InteractiveQuiz' ? (_0x497fe9.errorBack && _0x497fe9.errorBack == 1 && (_0x497fe9.errorBackTime && _0x497fe9.errorBackTime > 0 || _0x497fe9.eBstartPoint && _0x497fe9.eBstartPoint != '') && (Ext.get('spanNotBackPoint').setStyle('display', 'block'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('knowledgeBack').setStyle('display', 'block')), _0x497fe9.errorContinue && _0x497fe9.errorContinue == 1 ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'), Ext.get('videoquiz-continue').setStyle('display', 'block')) : (Ext.get('videoquiz-submit').setStyle('display', 'block'), Ext.get('spanNotBackPoint').setStyle('display', 'block'))) : _0x497fe9.errorBackTime && _0x497fe9.errorBackTime > 0 ? (Ext.get('spanNotBack').setStyle('display', 'block'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('videoquiz-continue').setStyle('display', 'block')) : Ext.get('spanNot').setStyle('display', 'block') : (Ext.get('spanHas').setStyle('display', 'block'), _0x379523 == 'InteractiveQuiz' && (Ext.get('videoquiz-continue').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'none'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('spanNot').setStyle('display', 'none'), Ext.get('spanNotBack').setStyle('display', 'none'), Ext.get('spanNotBackPoint').setStyle('display', 'none')));
					if (_0x3044ca.status) {
						if (_0x379523 == 'InteractiveQuiz') {
							_0x3044ca.rightAnswerCount && (Ext.get('rightNum').setHTML(_0x3044ca.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
							var _0xcaf570 = '', _0x5ae971 = false;
							_0x3044ca.testAnalysis ? _0x3044ca.showAnswer && _0x3044ca.showAnswer > 0 ? (_0xcaf570 += '正确答案\uFF1A' + _0x3044ca.rightContent, _0xcaf570 += '</br>解析\uFF1A' + _0x3044ca.testAnalysis, Ext.get('viewAnalysis').setStyle('display', 'block'), _0x5ae971 = true) : _0x3044ca.isRight && (_0xcaf570 += '解析\uFF1A' + _0x3044ca.testAnalysis, Ext.get('viewAnalysis').setStyle('display', 'block'), _0x5ae971 = true) : _0x3044ca.showAnswer && _0x3044ca.showAnswer > 0 ? (Ext.get('tkParsingDele').setStyle('display', 'none'), Ext.get('viewAnalysis').setStyle('display', 'none'), _0xcaf570 += '正确答案\uFF1A' + _0x3044ca.rightContent, _0x5ae971 = true) : Ext.get('viewAnalysis').setStyle('display', 'none');
							if (_0x5ae971) {
								Ext.get('tkParsing_con').setHTML(_0xcaf570);
								Ext.get('tkParsing').setStyle('display', 'inline-block');
								var _0x176225 = _0x3d4f20.tkParseScrollEl, _0x1dee55 = $(_0x176225.dom).niceScroll({
									'cursorborder': '',
									'cursorwidth': 6,
									'cursorcolor': '#A5A5A5',
									'boxzoom': false,
									'autohidemode': true
								});
								_0x3d4f20.tkParseScroll = _0x1dee55;
							}
						}
						if (_0x3044ca.isRight && _0x379523 == 'InteractiveQuiz') {
							if (typeof _0x3044ca.showTip != 'undefined' && _0x3044ca.showTip) {
								var _0x28fc60 = _0x3044ca.percent;
								try {
									var _0x32ebf3 = Ext.getCookie('fid', 0);
									_0x28fc60 = parseInt(_0x28fc60);
									_0x32ebf3 == '179952' && _0x28fc60 > 0 && (_0x28fc60 = 90 + _0x28fc60 * 0.1);
								} catch (_0x23b786) {
									console.log(_0x23b786);
								}
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01你的答题水准超过了' + _0x28fc60 + '%的同学</span></span>');
							} else {
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01</span></span>');
							}
						}
					}
					!_0x246922 && _0x3d4f20.onerror && _0x379523 != 'InteractiveQuiz' && _0x3d4f20.onerror();
					!_0x246922 && _0x497fe9.errorContinue == 1 && (_0x3fe846 = true, Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('videoquiz-continue').setStyle('display', 'block'));
					if (_0x246922 && Ext.get('videoquiz-continue').getStyle('display') == 'none') {
						try {
							top.configFullScreen && exitMediumSizeWindow();
						} catch (_0x58e166) {
							console.log(_0x58e166);
						}
						_0x3d4f20.fireEvent('continue');
					}
				},
				'error': function () {
					Ext.get('videoquiz-submit').setStyle('display', 'block');
					Ext.get('videoquiz-submitting').setStyle('display', 'none');
					_0x3d4f20.onerror && _0x379523 != 'InteractiveQuiz' && _0x3d4f20.onerror();
				}
			});
		}
		return _0x3fe846;
	},
	'continueFun': function () {
		var _0x30d1a5 = this;
		_0x30d1a5.fireEvent('continue');
	}
});
Ext.define('ans.videojs.VideoImg', {
	'extend': 'Ext.Component',
	'xtype': 'videoimg',
	'renderTpl': [
		'<div class="sp_video_pic">',
		'<img src="{src}" class="sp_video_img" />',
		'<a class="jb_btn jb_btn_92 fs14 sp_video_pic_dele2" style="position:absolute;bottom:14px;right:20px;z-index:6;" href="javascript:">继续学习</a>',
		'</div>'
	],
	'renderSelectors': { 'closeEl': 'a.sp_video_pic_dele2' },
	'afterRender': function () {
		var _0x362128 = this;
		_0x362128.callParent(arguments);
		try {
			var _0x467c1e = document.querySelector('.sp_video_img');
			_0x467c1e.addEventListener('load', function () {
				_0x467c1e.naturalWidth >= _0x467c1e.naturalHeight ? _0x467c1e.naturalWidth >= 400 && (_0x467c1e.style.maxWidth = '70%', _0x467c1e.style.maxHeight = '70%', _0x467c1e.style.height = 'auto') : _0x467c1e.naturalHeight >= 400 && (_0x467c1e.style.maxHeight = '70%', _0x467c1e.style.maxWidth = '70%', _0x467c1e.style.width = 'auto');
			});
		} catch (_0x1ce7ec) {
			console.log(_0x1ce7ec);
		}
		_0x362128.el.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x1550da) {
				console.log(_0x1550da);
			}
			_0x362128.fireEvent('continue');
		});
		_0x362128.closeEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x94cbc9) {
				console.log(_0x94cbc9);
			}
			_0x362128.fireEvent('continue');
		});
	}
});
Ext.define('ans.videojs.VideoAnnotation', {
	'extend': 'Ext.Component',
	'xtype': 'videoannotation',
	'cls': 'ans-videoannotation',
	'width': '259px',
	'model': false,
	'renderTpl': [
		'<div class="comment_icon"><img src="/ananas/modules/video/pz_icon.png"/></div>',
		'<div class="comment_box" style="display:block">',
		'<div class="comment_tit"><a href="javascript:;" class="stow_icon fr"><img src="/ananas/modules/video/stow_icon.png" /></a><p class="fl">[批注]</p></div>',
		'<p class="comment_con">{description}</p>',
		'<a href="javascript:;" class="continueLearn fr">继续学习</a>',
		'</div>'
	],
	'renderSelectors': {
		'stowEl': 'a.stow_icon',
		'commentOpenEl': 'div.comment_icon',
		'boxEl': 'div.comment_box',
		'continueEl': 'a.continueLearn'
	},
	'afterRender': function () {
		var _0x39c2c6 = this, _0x598a59 = _0x39c2c6.commentOpenEl, _0x36439e = _0x39c2c6.boxEl;
		_0x39c2c6.callParent(arguments);
		_0x598a59.on('click', function () {
			_0x598a59.setStyle('display', 'none');
			_0x36439e.setStyle('display', 'block');
			$('.comment_con').getNiceScroll().resize();
		});
		_0x39c2c6.stowEl.on('click', function () {
			_0x36439e.setStyle('display', 'none');
			_0x598a59.setStyle('display', 'block');
		});
		_0x39c2c6.continueEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x11b092) {
				console.log(_0x11b092);
			}
			_0x39c2c6.fireEvent('continue');
		});
		var _0x15f833 = $('.comment_con').niceScroll({
			'cursorborder': '',
			'cursorwidth': '8px',
			'cursorcolor': '#ACB4BF',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x39c2c6.scroller = _0x15f833;
	}
});
Ext.define('ans.videojs.VideoPpt', {
	'extend': 'Ext.Component',
	'xtype': 'videoppt',
	'cls': 'ans-videoppt',
	'width': '100%',
	'model': false,
	'renderTpl': [
		'<div class="sp_video_ppt_pic" id="sp_video_ppt_pic">',
		'<img src="{src}" class="sp_video_img" style="width: 100%;"/>',
		'<a class="sp_size_big" id="sp_size_big" href="javascript:;"></a>',
		'<a class="sp_size_small" href="javascript:;" style="display:none;" id="sp_size_small"></a>',
		'</div>'
	],
	'renderSelectors': {
		'pptPicEl': 'div.sp_video_ppt_pic',
		'sizeBigEl': 'a.sp_size_big',
		'sizeSmallEl': 'a.sp_size_small'
	},
	'afterRender': function () {
		var _0x157287 = this;
		_0x157287.callParent(arguments);
		try {
			dragFn && dragFn('#sp_video_ppt_pic', '#video_html5_api');
		} catch (_0x4e67a1) {
			console.log(_0x4e67a1);
		}
		var _0x3e202b = Ext.get('video_html5_api').getStyle('height'), _0x4ea1c2 = Ext.get('video_html5_api').getStyle('width'), _0x34d531 = parseInt(_0x3e202b) > parseInt(_0x4ea1c2);
		_0x34d531 ? Ext.get('sp_video_ppt_pic').addCls('sp_video_ppt_pic_w') : Ext.get('sp_video_ppt_pic').addCls('sp_video_ppt_pic_h');
		function _0x26b27a() {
			Ext.get('sp_size_big').setStyle('display', 'none');
			Ext.get('sp_size_small').setStyle('display', 'block');
		}
		function _0x108aad() {
			Ext.get('sp_size_big').setStyle('display', 'block');
			Ext.get('sp_size_small').setStyle('display', 'none');
		}
		_0x157287.sizeBigEl.on('click', function (_0x40d6c7) {
			_0x40d6c7.stopPropagation();
			_0x34d531 ? _0x157287.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0x157287.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x26b27a();
		});
		_0x157287.sizeSmallEl.on('click', function (_0x4c3a88) {
			_0x4c3a88.stopPropagation();
			_0x34d531 ? _0x157287.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0x157287.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x108aad();
		});
		_0x157287.sizeBigEl.on('touchend', function (_0x457b4a) {
			_0x457b4a.stopPropagation();
			_0x34d531 ? _0x157287.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0x157287.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x26b27a();
		});
		_0x157287.sizeSmallEl.on('touchend', function (_0x4a4313) {
			_0x4a4313.stopPropagation();
			_0x34d531 ? _0x157287.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0x157287.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x108aad();
		});
	}
});
Ext.define('ans.videojs.TimelineObjects', {
	'extend': 'Ext.container.Container',
	'cls': 'ans-timelineobjects',
	'autoScroll': true,
	'hidden': true,
	'hideMode': 'visibility',
	'constructor': function (_0x4d1bf5) {
		var _0x34bc2a = this;
		_0x34bc2a.callParent(arguments);
		_0x34bc2a.bg = Ext.create('ans.videojs.TimelineObjectsBg', { 'renderTo': _0x4d1bf5.renderTo });
		_0x34bc2a.objects = _0x4d1bf5.objects && _0x4d1bf5.objects.sort ? _0x34bc2a.sort_(_0x4d1bf5.objects) : [];
		_0x34bc2a.current = 0;
		_0x34bc2a.showAnnotation = false;
	},
	'hideTimeline': function () {
		var _0x3693e8 = this;
		_0x3693e8.showAnnotation && (_0x3693e8.hide(), _0x3693e8.showAnnotation = false);
	},
	'showObject': function (_0xb5147e, _0x595816, _0x911e61) {
		var _0x284430 = this, _0x31c9d3 = _0x284430.getBox(), _0x3738f4 = _0x284430.items.getAt(0), _0x26cb98, _0x273562 = function () {
			_0x26cb98.destroy();
			_0x284430.hide();
			_0xb5147e.play();
			try {
				_0xb5147e.eventCount && (_0xb5147e.eventCount = _0xb5147e.eventCount - 1);
			} catch (_0x134ee1) {
				console.log(_0x134ee1);
			}
		};
		_0x3738f4 != null && _0x3738f4.destroy();
		if (_0x911e61) {
			_0x911e61.description && (_0x911e61.description = _0x284430.htmlEncodeByRegExp(_0x911e61.description));
			if (_0x911e61.options && _0x911e61.options.length > 0) {
				for (let _0x2602fc = 0; _0x2602fc < _0x911e61.options.length; _0x2602fc++) {
					_0x911e61.options[_0x2602fc].description && (_0x911e61.options[_0x2602fc].description = _0x284430.htmlEncodeByRegExp(_0x911e61.options[_0x2602fc].description));
				}
			}
		}
		if (_0x595816 == 'IMG') {
			var _0x227f31 = { 'src': _0x911e61.url.replace(/origin/, _0x31c9d3.width + '_' + _0x31c9d3.height) };
			_0x26cb98 = _0x284430.add({
				'xtype': 'videoimg',
				'renderData': _0x227f31
			});
			try {
				_0xb5147e.eventCount && (_0xb5147e.eventCount += 1);
			} catch (_0x8264b8) {
				console.log(_0x8264b8);
			}
		}
		if (_0x595816 == 'QUIZ') {
			var _0xfbffb5 = function () {
			};
			if (_0x911e61.errorBackTime && _0x911e61.errorBackTime > 0) {
				var _0x390438 = _0x911e61.errorBackTime * 60;
				_0xfbffb5 = function () {
					var _0x15d4d0 = Math.max(_0xb5147e.currentTime() - _0x390438, 0);
					_0xb5147e.switchStatus = true;
					_0xb5147e.currentTime(_0x15d4d0);
				};
			}
			_0x26cb98 = _0x284430.add({
				'xtype': 'videoquiz',
				'renderData': _0x911e61,
				'quizErrorReportUrl': _0x284430.quizErrorReportUrl,
				'validationUrl2': _0x284430.validationUrl2,
				'onerror': _0xfbffb5
			});
			try {
				_0xb5147e.eventCount && (_0xb5147e.eventCount += 1);
			} catch (_0x3988c0) {
				console.log(_0x3988c0);
			}
		}
		if (_0x595816 == 'InteractiveQuiz') {
			var _0xfbffb5 = function () {
			};
			if (_0x911e61.errorBackTime && _0x911e61.errorBackTime > 0) {
				var _0x390438 = _0x911e61.errorBackTime * 60;
				_0xfbffb5 = function () {
					var _0x304b67 = Math.max(_0xb5147e.currentTime() - _0x390438, 0);
					_0xb5147e.switchStatus = true;
					_0xb5147e.currentTime(_0x304b67);
				};
			}
			if (_0x911e61.errorBack == 1 && _0x911e61.eBstartPoint != '') {
				var _0x390438 = 0, _0x3d0b86 = _0x911e61.eBstartPoint.split(':'), _0x85bffc = _0x3d0b86.length;
				_0x85bffc > 0 && (_0x85bffc == 1 ? _0x390438 = parseInt(_0x3d0b86[0]) * 60 : _0x85bffc == 2 && (_0x390438 = parseInt(_0x3d0b86[0]) * 60 + parseInt(_0x3d0b86[1])));
				_0xfbffb5 = function () {
					_0xb5147e.switchStatus = true;
					_0xb5147e.currentTime(_0x390438);
				};
			}
			_0x911e61.dtype = 'InteractiveQuiz';
			_0x26cb98 = _0x284430.add({
				'xtype': 'videoquiz',
				'renderData': _0x911e61,
				'quizErrorReportUrl': _0x284430.quizErrorReportUrl,
				'validationUrl2': _0x284430.validationUrl2,
				'quizRightCountUrl': _0x284430.quizRightCountUrl,
				'onerror': _0xfbffb5
			});
			try {
				_0xb5147e.eventCount && (_0xb5147e.eventCount += 1);
			} catch (_0x53c46d) {
				console.log(_0x53c46d);
			}
		}
		if (_0x595816 == 'PPT') {
			if (_0x911e61.fp == 0) {
				return;
			}
			var _0x4ae9a8 = _0x911e61.url;
			_0x911e61.thumb ? _0x4ae9a8 = _0x911e61.thumb + _0x911e61.pageNo + '.png' : _0x4ae9a8 = _0x4ae9a8.replace(/swfv2\/.*$/, 'thumb/' + _0x911e61.fp + '.png');
			var _0x227f31 = { 'src': _0x4ae9a8 };
			_0x26cb98 = _0x284430.add({
				'xtype': 'videoppt',
				'renderData': _0x227f31
			});
			try {
				_0xb5147e.eventCount && (_0xb5147e.eventCount += 1);
			} catch (_0x4669a7) {
				console.log(_0x4669a7);
			}
		}
		if (_0x595816 == 'SyncAnnotationEvent') {
			_0x26cb98 = _0x284430.add({
				'xtype': 'videoannotation',
				'renderData': _0x911e61
			});
			try {
				_0xb5147e.eventCount && (_0xb5147e.eventCount += 1);
			} catch (_0x5598ac) {
				console.log(_0x5598ac);
			}
			_0xb5147e.pause();
			_0x284430.showAnnotation = true;
		}
		if (!_0x26cb98) {
			return;
		}
		_0x26cb98.on('continue', function () {
			_0x273562();
		});
		var _0x1c760a = !(_0x26cb98.model === false);
		_0x284430.showModel(_0x1c760a, _0x595816);
		_0x1c760a && _0xb5147e.pause();
		_0x595816 == 'PPT' ? Ext.select('.ans-timelineobjects').setStyle('position', 'unset') : Ext.select('.ans-timelineobjects').setStyle('position', 'absolute');
	},
	'htmlEncodeByRegExp': function (_0x272601) {
		var _0x1f5cff = '';
		if (_0x272601.length == 0) {
			return '';
		}
		return _0x1f5cff = _0x272601.replace(/&/g, '&amp;'), _0x1f5cff = _0x1f5cff.replace(/</g, '&lt;'), _0x1f5cff = _0x1f5cff.replace(/>/g, '&gt;'), _0x1f5cff = _0x1f5cff.replace(/\s/g, '&nbsp;'), _0x1f5cff = _0x1f5cff.replace(/\'/g, '&#39;'), _0x1f5cff = _0x1f5cff.replace(/\"/g, '&quot;'), _0x1f5cff;
	},
	'showModel': function (_0x377291, _0x3717f4) {
		try {
			top.configFullScreen && _0x3717f4 != 'PPT' && mediumSizeWindow();
		} catch (_0x5b5891) {
			console.log(_0x5b5891);
		}
		var _0x249f59 = this;
		_0x249f59.show();
		if (_0x3717f4 == 'SyncAnnotationEvent') {
			var _0x5e938f = $('#video_html5_api').height();
			Ext.select('.comment_box').setStyle('height', _0x5e938f + 'px');
		}
		_0x377291 ? (_0x249f59.removeCls('ans-timelineobjects-autosize'), _0x249f59.setAutoScroll(true), _0x249f59.bg.show()) : (_0x249f59.addCls('ans-timelineobjects-autosize'), _0x249f59.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
		this.bg.hide.apply(this.bg, arguments);
	},
	'updateTime': function (_0x59f832, _0x5e2441) {
		if (this.current >= this.objects.length || _0x59f832.scrubbing()) {
			return;
		}
		var _0x35c167 = this, _0x4f7554 = _0x35c167.objects[_0x35c167.current], _0x5bb0f1 = _0x4f7554.style, _0x225df3 = _0x4f7554.datas[0];
		if (_0x5e2441 >= _0x225df3.startTime) {
			_0x35c167.current++;
			setTimeout(function () {
				_0x35c167.showObject(_0x59f832, _0x5bb0f1, _0x225df3);
			}, 20);
		}
	},
	'resetTime': function (_0x8fa9e9, _0xe49eec) {
		var _0x36733d = this, _0x19fe6e;
		for (_0x19fe6e = 0; _0x19fe6e < _0x36733d.objects.length; _0x19fe6e++) {
			var _0x4146e2 = _0x36733d.objects[_0x19fe6e].datas[0].startTime;
			if (_0xe49eec <= _0x4146e2) {
				break;
			}
		}
		_0x36733d.current = _0x19fe6e;
	},
	'sort_': function (_0x208ad0) {
		return _0x208ad0 && _0x208ad0.sort && _0x208ad0.sort(function (_0x1674d8, _0x4c59d4) {
			var _0x34c8c6 = _0x1674d8.datas[0].startTime, _0x36686b = _0x4c59d4.datas[0].startTime;
			return _0x34c8c6 - _0x36686b;
		});
	}
});
(function () {
	var _0x19841a = videojs.getPlugin('plugin'), _0x2e2c30 = videojs.extend(_0x19841a, {
		'constructor': function (_0x22b39d, _0x487997) {
			_0x19841a.call(this, _0x22b39d, _0x487997);
			if (!_0x487997.url) {
				return;
			}
			var _0x5e6b61 = function (_0x9f845b) {
				try {
					var _0x33f72b = _0x9f845b.datas;
					if (_0x33f72b && _0x33f72b.length > 0) {
						return _0x33f72b[0].startTime;
					}
				} catch (_0xdac0a6) {
					console.log(_0xdac0a6);
				}
				return -1;
			}, _0x666883 = this;
			_0x22b39d.eventPoints = [];
			_0x22b39d.otherPointTimes = [];
			var _0x590f9c = [];
			if (_0x487997.begins && _0x487997.begins > 0) {
				var _0x1fca55 = {
					'time': _0x487997.begins,
					'text': '片头'
				};
				_0x590f9c.push(_0x1fca55);
			}
			if (_0x487997.ends && _0x487997.ends > 0) {
				var _0x1fca55 = {
					'time': _0x487997.ends,
					'text': '片尾'
				};
				_0x590f9c.push(_0x1fca55);
			}
			_0x22b39d.eventPoints = _0x590f9c;
			Ext.Ajax.request({
				'url': _0x487997.url,
				'async': false,
				'success': function (_0x7f3fc5) {
					if (_0x7f3fc5.status != 200) {
						return;
					}
					eval('var data=' + _0x7f3fc5.responseText);
					if (data && data.length > 0) {
						var _0x1444d1 = [];
						for (var _0x4d8506 = 0; _0x4d8506 < data.length; _0x4d8506++) {
							var _0x157718 = data[_0x4d8506];
							if (_0x157718.style == 'InteractiveQuiz') {
								var _0xe5c63a = _0x157718.datas;
								if (_0xe5c63a && _0xe5c63a.length > 0) {
									var _0x51a52f = {
										'time': _0xe5c63a[0].startTime,
										'text': '互动测验'
									};
								}
								_0x1444d1.push(_0x51a52f);
							}
							var _0x4d87d4 = _0x5e6b61(_0x157718);
							_0x4d87d4 >= 0 && _0x22b39d.otherPointTimes.push(_0x4d87d4);
						}
						_0x1444d1.forEach(function (_0x1a68ae) {
							_0x22b39d.eventPoints.push(_0x1a68ae);
						});
					}
					var _0x5c61ee = Ext.create('ans.videojs.TimelineObjects', {
						'renderTo': _0x22b39d.el_,
						'quizErrorReportUrl': _0x487997.quizErrorReportUrl,
						'validationUrl2': _0x487997.validationUrl2,
						'quizRightCountUrl': _0x487997.quizRightCountUrl,
						'objects': data
					});
					_0x22b39d.on('play', function () {
						_0x5c61ee.resetTime(_0x22b39d, _0x22b39d.currentTime());
						_0x5c61ee.hideTimeline();
					});
					_0x22b39d.on('seekend', function () {
						_0x5c61ee.resetTime(_0x22b39d, _0x22b39d.currentTime());
						_0x5c61ee.hideTimeline();
					});
					_0x22b39d.on('timeupdate', function () {
						!_0x22b39d.paused() && (_0x5c61ee.updateTime(_0x22b39d, _0x22b39d.currentTime()), _0x5c61ee.hideTimeline());
					});
				}
			});
		}
	});
	videojs.registerPlugin('timelineObjects', _0x2e2c30);
}());
Ext.define('ans.videojs.customIframe', {
	'extend': 'Ext.Component',
	'xtype': 'customIframe',
	'renderTpl': ['<iframe src="{src}" class="configIframe" style="height: 100%;width: 100%;left: 0;top: 0;right: 0;bottom: 0; background: rgba(0,0,0,.6);"></iframe>'],
	'afterRender': function () {
		var _0x44eaa8 = this;
		_0x44eaa8.callParent(arguments);
		window.addEventListener('message', function (_0x4bff02) {
			typeof _0x4bff02.data != 'undefined' && _0x4bff02.data.opType === 'closeIframe' && _0x44eaa8.fireEvent('continue');
		});
	}
});
Ext.define('ans.videojs.CustomIframe', {
	'extend': 'Ext.container.Container',
	'cls': 'ans-customIframe',
	'autoScroll': true,
	'hidden': true,
	'hideMode': 'visibility',
	'constructor': function (_0x3f1f80) {
		var _0x195155 = this;
		_0x195155.callParent(arguments);
		_0x195155.supportHeartbeat = false;
		_0x195155.courseid = '';
		_0x195155.clazzId = '';
		_0x195155.knowledgeid = '';
		_0x195155.objectid = '';
		_0x195155.playTime = 0;
		_0x195155.requesting = false;
		_0x195155.eventArray = [];
		_0x195155.userId = '';
		_0x195155.cookieFid = '';
		_0x195155.headOffset = '';
		typeof _0x3f1f80.userId != 'undefined' && (_0x195155.userId = _0x3f1f80.userId);
		typeof _0x3f1f80.cookieFid != 'undefined' && (_0x195155.cookieFid = _0x3f1f80.cookieFid);
		typeof _0x3f1f80.headOffset != 'undefined' && (_0x195155.headOffset = _0x3f1f80.headOffset);
		typeof _0x3f1f80.eventArray != 'undefined' && (_0x195155.eventArray = _0x3f1f80.eventArray);
		typeof _0x3f1f80.supportHeartbeat != 'undefined' && (_0x195155.supportHeartbeat = _0x3f1f80.supportHeartbeat);
		typeof _0x3f1f80.courseid != 'undefined' && (_0x195155.courseid = _0x3f1f80.courseid);
		typeof _0x3f1f80.clazzId != 'undefined' && (_0x195155.clazzId = _0x3f1f80.clazzId);
		typeof _0x3f1f80.knowledgeid != 'undefined' && (_0x195155.knowledgeid = _0x3f1f80.knowledgeid);
		typeof _0x3f1f80.objectid != 'undefined' && (_0x195155.objectid = _0x3f1f80.objectid);
		_0x195155.lastHeartbeat = 0;
		_0x195155.lastShowIFrame = 0;
		_0x195155.objects = _0x3f1f80.objects && _0x3f1f80.objects.sort ? _0x195155.sort_(_0x3f1f80.objects) : [];
		_0x195155.eventArray.forEach(function (_0x5d4552) {
			var _0x2a2b17 = parseInt(_0x5d4552.eventIntervalType);
			_0x2a2b17 === 0 ? (_0x5d4552.lastHeartbeat = 0, _0x5d4552.pauseTimeRange = 0, _0x5d4552.pauseTimeStamp = -1, _0x5d4552.requesting = false) : _0x2a2b17 === 1 && (_0x5d4552.timeArray = sortArray(_0x5d4552.timeArray), _0x5d4552.index = 0);
		});
	},
	'showIFrame': function (_0x54dfe5, _0x5a4917, _0x4b1510) {
		try {
			var _0x47dff2 = this;
			parseInt(_0x5a4917) === 1 ? _0x47dff2.showObject(_0x54dfe5, 'customIframe', _0x4b1510) : parseInt(_0x5a4917) === 2 && showPopIframe(_0x4b1510, _0x54dfe5);
		} catch (_0x300773) {
			console.log(_0x300773);
		}
	},
	'deleteTemporaryEvent': function () {
		try {
			this.eventArray.forEach(function (_0x360764, _0x27ffe5, _0x120d0e) {
				typeof _0x360764.temporaryEvent != 'undefined' && _0x360764.temporaryEvent && _0x120d0e.splice(_0x27ffe5, 1);
			});
		} catch (_0x2e510d) {
			console.log(_0x2e510d);
		}
	},
	'initHeartbeat': function (_0x2bc4ce, _0x483821, _0x13ee93) {
		var _0x33c041 = this;
		if (typeof _0x2bc4ce == 'undefined' || _0x2bc4ce == '') {
			return;
		}
		Ext.Ajax.request({
			'url': _0x2bc4ce,
			'params': {
				'uid': _0x33c041.userId,
				'schoolId': _0x33c041.cookieFid,
				'moocClassId': _0x33c041.clazzId,
				'moocCourseId': _0x33c041.courseid,
				'chapterId': _0x33c041.knowledgeid,
				'objectId': _0x33c041.objectid,
				'videoProgress': _0x33c041.headOffset,
				'totalVideoDuration': window.duration,
				'enc': _0x33c041.videoEnc
			},
			'method': 'get',
			'success': function (_0x51b532) {
				try {
					var _0x24df15 = eval('(' + _0x51b532.responseText + ')');
					if (typeof _0x24df15.result !== 'undefined' && parseInt(_0x24df15.result) === 1) {
						if (_0x24df15.showPop && typeof _0x24df15.event != 'undefined') {
							var _0x354cc3 = _0x24df15.event.url + '?uid=' + _0x33c041.userId + '&schoolId=' + _0x33c041.cookieFid + '&moocClassId=' + _0x33c041.clazzId + '&moocCourseId=' + _0x33c041.courseid + '&chapterId=' + _0x33c041.knowledgeid + '&objectId=' + _0x33c041.objectid + '&videoProgress=' + _0x33c041.headOffset + '&totalVideoDuration=' + window.duration + '&enc=' + _0x33c041.videoEnc, _0x5bc182 = {
								'url': _0x354cc3,
								'temporaryEvent': true,
								'eventInterval': 0,
								'eventType': _0x24df15.event.eventType,
								'eventIntervalType': 0,
								'requesting': false,
								'lastHeartbeat': 0
							};
							_0x33c041.eventArray.push(_0x5bc182);
						}
					} else {
						typeof _0x24df15.errorCode != 'undefined' && alert('同步学习数据失败\uFF0C错误码\uFF1A' + _0x24df15.errorCode);
					}
					if (typeof _0x13ee93 != 'undefined') {
						_0x13ee93.requesting = false;
						console.log('requesting: false');
					}
				} catch (_0x4854bf) {
					console.log(_0x4854bf);
				}
			},
			'failure': function () {
				typeof _0x13ee93 != 'undefined' && (_0x13ee93.requesting = false);
				console.log('heartbeatUrl request error');
			}
		});
	},
	'seekVideoTime': function (_0x13332c, _0x2b10ac) {
		try {
			var _0x5dc80d = this;
			typeof _0x5dc80d.cmp != 'undefined' && _0x5dc80d.cmp != null && (_0x5dc80d.cmp.destroy(), _0x5dc80d.hide(), _0x13332c.eventCount = _0x13332c.eventCount - 1, _0x13332c.eventCount <= 0 && (_0x13332c.currentTime(_0x2b10ac), _0x13332c.play()));
		} catch (_0x2871cf) {
			console.log(_0x2871cf);
		}
	},
	'showObject': function (_0x429c7e, _0x399692, _0x31e81f) {
		var _0x19ca0e = this, _0x492001 = _0x19ca0e.items.getAt(0), _0x423c47, _0x44b957 = function (_0x3759c2) {
			_0x423c47.destroy();
			_0x19ca0e.hide();
			_0x3759c2.eventCount = _0x3759c2.eventCount - 1;
			_0x3759c2.eventCount <= 0 && _0x3759c2.play();
		};
		_0x492001 != null && _0x492001.destroy();
		_0x19ca0e.cmp = null;
		if (_0x399692 == 'customIframe') {
			_0x423c47 = _0x19ca0e.add({
				'xtype': 'customIframe',
				'renderData': { 'src': _0x31e81f }
			});
			_0x429c7e.eventCount += 1;
		}
		if (!_0x423c47) {
			return;
		}
		_0x423c47.on('continue', function () {
			_0x44b957(_0x429c7e);
		});
		var _0x10e42d = !(_0x423c47.model === false);
		_0x19ca0e.showModel(_0x10e42d);
		_0x19ca0e.cmp = _0x423c47;
		_0x10e42d && _0x429c7e.pause();
	},
	'showModel': function (_0x36218c) {
		var _0x558dbe = this;
		_0x558dbe.show();
		_0x36218c ? (_0x558dbe.removeCls('ans-timelineobjects-autosize'), _0x558dbe.setAutoScroll(true)) : (_0x558dbe.addCls('ans-timelineobjects-autosize'), _0x558dbe.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
	},
	'updateTime': function (_0x1d0f7a, _0x14904f) {
		try {
			if (this.supportHeartbeat && isStuViewPage() && !_0x1d0f7a.paused()) {
				var _0x8b5cb2 = new Date().getTime(), _0x4a70da = this, _0x4e2a6e = 0;
				for (var _0x27f406 = 0; _0x27f406 < _0x4a70da.eventArray.length; _0x27f406++) {
					var _0x19102e = _0x4a70da.eventArray[_0x27f406], _0x33bf22 = parseInt(_0x19102e.eventType), _0xe8ca7f = parseInt(_0x19102e.eventIntervalType);
					if (_0xe8ca7f === 0) {
						if (_0x33bf22 === 0 && _0x19102e.requesting || _0x1d0f7a.scrubbing()) {
							continue;
						}
						var _0x29c5bb = _0x8b5cb2 - _0x19102e.lastHeartbeat;
						_0x19102e.pauseTimeRange > 0 && (_0x29c5bb = _0x29c5bb - _0x19102e.pauseTimeRange);
						var _0x567c2e = _0x29c5bb / 1000;
						_0x567c2e = parseInt(_0x567c2e);
						if (_0x567c2e > _0x19102e.eventInterval) {
							if (_0x33bf22 === 1 || _0x33bf22 === 2) {
								_0x4e2a6e++;
								if (_0x4e2a6e > 1) {
									break;
								}
							}
							_0x19102e.pauseTimeRange = 0;
							_0x19102e.lastHeartbeat = _0x8b5cb2;
							_0x33bf22 === 0 ? (_0x19102e.requesting = true, _0x4a70da.initHeartbeat(_0x19102e.url, _0x1d0f7a, _0x19102e)) : (_0x33bf22 === 1 || _0x33bf22 === 2) && (_0x4a70da.showIFrame(_0x1d0f7a, _0x33bf22, _0x19102e.url), typeof _0x19102e.temporaryEvent != 'undefined' && _0x19102e.temporaryEvent && _0x4a70da.deleteTemporaryEvent());
						}
					} else {
						if (_0xe8ca7f === 1) {
							if (_0x19102e.index >= _0x19102e.timeArray.length || _0x1d0f7a.scrubbing()) {
								continue;
							}
							var _0x3c1184 = _0x19102e.timeArray[_0x19102e.index];
							if (typeof _0x3c1184 == 'undefined') {
								continue;
							}
							if (_0x14904f >= parseInt(_0x3c1184)) {
								if (_0x33bf22 === 1 || _0x33bf22 === 2) {
									_0x4e2a6e++;
									if (_0x4e2a6e > 1) {
										break;
									}
								}
								_0x19102e.index++;
								var _0x223470 = _0x19102e.url;
								_0x33bf22 === 0 ? _0x4a70da.initHeartbeat(_0x223470, _0x1d0f7a) : (_0x33bf22 === 1 || _0x33bf22 === 2) && _0x4a70da.showIFrame(_0x1d0f7a, _0x33bf22, _0x223470);
							}
						}
					}
				}
			}
		} catch (_0x19e5de) {
			console.log(_0x19e5de);
		}
	},
	'resetTime': function (_0x5a47c5, _0x4e2d62) {
		try {
			var _0x2a2d80 = this, _0x78849a;
			for (_0x78849a = 0; _0x78849a < _0x2a2d80.eventArray.length; _0x78849a++) {
				var _0x260ab8 = _0x2a2d80.eventArray[_0x78849a];
				if (parseInt(_0x260ab8.eventIntervalType) === 1) {
					for (var _0x40bdaf = 0; _0x40bdaf < _0x260ab8.timeArray.length; _0x40bdaf++) {
						var _0xba6cfb = _0x260ab8.timeArray[_0x40bdaf];
						if (_0x4e2d62 <= _0xba6cfb) {
							break;
						}
					}
					_0x260ab8.index = _0x40bdaf;
				}
			}
		} catch (_0x54f5d1) {
			console.log(_0x54f5d1);
		}
	}
});
;
;
function sortArray(_0x141a56) {
	try {
		return _0x141a56 && _0x141a56.sort && _0x141a56.sort(function (_0x719614, _0x319d81) {
			return _0x719614 - _0x319d81;
		});
	} catch (_0x1905f1) {
		console.log(_0x1905f1);
	}
	return _0x141a56;
}
;
(function () {
	var _0x5861b7 = videojs.getPlugin('plugin'), _0x4759e8 = videojs.extend(_0x5861b7, {
		'constructor': function (_0x5a5153, _0x368b68) {
			if (typeof _0x368b68.supportHeartbeat == 'undefined' || !_0x368b68.supportHeartbeat) {
				return;
			}
			_0x5861b7.call(this, _0x5a5153, _0x368b68);
			_0x5a5153.pauseTimeStamp = 0;
			_0x5a5153.pauseTimeRange = 0;
			var _0x45eb33 = null;
			try {
				_0x45eb33 = Ext.create('ans.videojs.CustomIframe', {
					'renderTo': _0x5a5153.el_,
					'supportHeartbeat': _0x368b68.supportHeartbeat,
					'eventArray': _0x368b68.eventArray,
					'courseid': _0x368b68.courseid,
					'clazzId': _0x368b68.clazzId,
					'knowledgeid': _0x368b68.knowledgeid,
					'objectid': _0x368b68.objectid,
					'videoEnc': _0x368b68.videoEnc,
					'userId': _0x368b68.userId,
					'cookieFid': _0x368b68.cookieFid,
					'headOffset': _0x368b68.headOffset
				});
			} catch (_0xff90f1) {
				console.log(_0xff90f1);
			}
			if (_0x45eb33 == null) {
				return;
			}
			_0x5a5153.on('play', function () {
				try {
					var _0x3032dd = new Date().getTime();
					_0x45eb33.eventArray.forEach(function (_0x15737f) {
						var _0x2b1169 = parseInt(_0x15737f.eventIntervalType);
						if (_0x2b1169 === 0) {
							if (_0x15737f.pauseTimeStamp > 0) {
								_0x15737f.pauseTimeStamp < _0x15737f.lastHeartbeat && (_0x15737f.pauseTimeStamp = _0x15737f.lastHeartbeat);
								var _0x695ff3 = _0x3032dd - _0x15737f.pauseTimeStamp;
								_0x15737f.pauseTimeRange += _0x695ff3;
							}
							_0x15737f.pauseTimeStamp = 0;
						}
					});
					_0x45eb33.resetTime(_0x5a5153, _0x5a5153.currentTime());
				} catch (_0x16f968) {
					console.log(_0x16f968);
				}
			});
			_0x5a5153.on('seekend', function () {
				_0x45eb33.resetTime(_0x5a5153, _0x5a5153.currentTime());
			});
			_0x5a5153.on('pause', function () {
				try {
					var _0x1a7cd5 = new Date().getTime();
					_0x45eb33.eventArray.forEach(function (_0x503230) {
						var _0x3edecc = parseInt(_0x503230.eventIntervalType);
						_0x3edecc === 0 && (_0x503230.pauseTimeStamp = _0x1a7cd5);
					});
				} catch (_0x366ede) {
					console.log(_0x366ede);
				}
			});
			_0x5a5153.on('timeupdate', function () {
				try {
					!_0x5a5153.paused() && _0x45eb33.updateTime(_0x5a5153, parseInt(_0x5a5153.currentTime()));
					_0x45eb33.playTime = _0x5a5153.currentTime();
				} catch (_0x134de6) {
					console.log(_0x134de6);
				}
			});
			window.addEventListener('message', function (_0x4177fe) {
				try {
					if (!_0x368b68.supportHeartbeat || !isStuViewPage()) {
						return;
					}
					var _0x495cea = _0x4177fe.data;
					if (typeof _0x495cea == 'undefined') {
						_0x45eb33.resetDiv(_0x5a5153);
						return;
					}
					var _0x4b2758 = parseInt(_0x368b68.duration);
					if (_0x495cea.opType === 'fastForward') {
						var _0x90236a = _0x495cea.value;
						if (typeof _0x90236a === 'undefined') {
							_0x45eb33.resetDiv(_0x5a5153);
							return;
						}
						_0x90236a = parseInt(_0x90236a);
						if (!(_0x90236a > 0)) {
							_0x45eb33.resetDiv(_0x5a5153);
							return;
						}
						_0x5a5153.ignoreSeek = false;
						_0x5a5153.switchStatus = true;
						var _0x29c75b = _0x5a5153.currentTime();
						_0x29c75b = parseInt(_0x29c75b);
						var _0x1ad353 = _0x29c75b + _0x90236a;
						if (_0x1ad353 > _0x4b2758) {
							_0x45eb33.resetDiv(_0x5a5153);
							return;
						}
						_0x45eb33.seekVideoTime(_0x5a5153, _0x1ad353);
						return;
					}
					if (_0x495cea.opType === 'videoStartTime') {
						var _0x90236a = _0x495cea.value;
						if (typeof _0x90236a === 'undefined') {
							_0x45eb33.resetDiv(_0x5a5153);
							return;
						}
						_0x90236a = parseInt(_0x90236a);
						if (!(_0x90236a >= 0) || _0x90236a > _0x4b2758) {
							_0x45eb33.resetDiv(_0x5a5153);
							return;
						}
						_0x5a5153.ignoreSeek = false;
						_0x5a5153.switchStatus = true;
						_0x45eb33.seekVideoTime(_0x5a5153, _0x90236a);
					}
				} catch (_0x328f5e) {
					console.log(_0x328f5e);
				}
			});
		}
	});
	videojs.registerPlugin('customIframePlugin', _0x4759e8);
}());
(function () {
	var _0x37b895 = videojs.getPlugin('plugin'), _0x3aba45 = videojs.extend(_0x37b895, {
		'constructor': function (_0x164ec9, _0x664250) {
			_0x37b895.call(this, _0x164ec9, _0x664250);
			if (!_0x664250.url) {
				return;
			}
			var _0x35bdb5 = this;
			Ext.Ajax.request({
				'url': _0x664250.url,
				'async': false,
				'success': function (_0x43b8cc) {
					if (_0x43b8cc.status != 200) {
						return;
					}
					eval('var data=' + _0x43b8cc.responseText);
					if (!data.status) {
						return;
					}
					var _0x12d059 = videojs('video');
					if (_0x12d059 && typeof _0x12d059.markers === 'function') {
						var _0x3d4c03 = _0x164ec9.eventPoints;
						_0x3d4c03.push.apply(_0x3d4c03, data.list);
						_0x12d059.markers({
							'markerTip': {
								'display': true,
								'text': function (_0xa8081b) {
									return _0xa8081b.text;
								}
							},
							'markers': _0x3d4c03,
							'onMarkerClick': function (_0x5190f2) {
								if (_0x664250.ff != 1) {
									return false;
								}
								var _0x388e75 = $(this).data('marker-key');
								return _0x164ec9.currentTime(_0x5190f2.time), false;
							}
						});
					}
					if (data.list && data.list.length > 0) {
						var _0x548867 = [], _0x1b38c7 = {
							_0x29351b: _0x1cc5f6,
							_0x29351b: _0x4a4113
						};
						for (var _0x1322b4 = 0; _0x1322b4 < data.list.length; _0x1322b4++) {
							var _0x469bd2 = data.list[_0x1322b4], _0x29351b = _0x469bd2.text;
							if (!_0x1b38c7[_0x29351b]) {
								var _0x1cc5f6 = [];
								_0x1cc5f6.push(_0x469bd2);
								_0x548867.push(_0x29351b);
							} else {
								var _0x4a4113 = _0x1b38c7[_0x29351b];
								_0x4a4113.push(_0x469bd2);
							}
						}
						function _0x44746e(_0x20088e) {
							var _0x1099e6 = '<div class="zsCloud_box"><h2 class="zsCloud_seltime">选择时间</h2><div class="zsCloud_div"><div class="zsCloud_div_list">';
							for (var _0x36a2a2 = 0; _0x36a2a2 < _0x20088e.length; _0x36a2a2++) {
								var _0x34b69c = _0x20088e[_0x36a2a2], _0x32fbe9 = Ext.fly(_0x1f312b.elements[0]).select('.topicId' + _0x34b69c.topicid + ':not(.markertime)'), _0x18c824 = videojs.formatTime(_0x34b69c.time);
								_0x32fbe9 && _0x32fbe9.elements[0] && _0x32fbe9.elements[0].parentElement.remove();
								_0x1099e6 += '<div class="zsCloud_item topicId' + _0x34b69c.topicid + '" data-marker-time="' + _0x34b69c.time + '" title="' + _0x18c824 + '" onclick="markersPlayer(this)">' + _0x18c824 + '</div>';
							}
							return _0x1099e6 += '</div></div></div>', _0x1099e6;
						}
						Ext.select('.zsCloud').setStyle('display', 'block');
						var _0x1f312b = Ext.select('.zsCloud_ul');
						if (_0x1f312b && _0x1f312b.elements[0]) {
							var _0x58380e;
							for (var _0x14afac = 0; _0x14afac < _0x548867.length; _0x14afac++) {
								var _0x132b18 = _0x548867[_0x14afac], _0x3c2974 = _0x1b38c7[_0x132b18], _0x1efe06 = '';
								if (_0x3c2974) {
									if (_0x3c2974.length == 1) {
										var _0x49649b = _0x3c2974[0], _0x48832f = Ext.fly(_0x1f312b.elements[0]).select('.topicId' + _0x49649b.topicid + ':not(.markertime)'), _0x46c4a2 = videojs.formatTime(_0x49649b.time);
										_0x48832f && _0x48832f.elements[0] && _0x48832f.elements[0].parentElement.remove();
										_0x1efe06 = '<li><span class=\'topicId' + _0x49649b.topicid + ' markertime\' data-marker-time=\'' + _0x49649b.time + '\' title=\'' + _0x46c4a2 + '\' onclick=\'markersPlayer(this)\'>' + _0x49649b.text + '</span></li>';
									} else {
										_0x1efe06 = '<li class="zsCloud_select"><span class="zsCloud_span">' + _0x132b18 + '</span>';
										_0x3c2974 && _0x3c2974.length > 0 ? _0x1efe06 += _0x44746e(_0x3c2974) : _0x1efe06 += '</li>';
									}
								}
								_0x58380e ? _0x58380e = Ext.DomHelper.insertHtml('afterEnd', _0x58380e.elements[0], _0x1efe06) : _0x58380e = Ext.DomHelper.insertHtml('afterBegin', _0x1f312b.elements[0], _0x1efe06);
								_0x58380e = Ext.fly(_0x58380e).select('');
							}
						}
						_0x664250.videoTopicCloud && _0x664250.videoTopicCloud == 1 && (Ext.select('.zsCloud_down').setStyle('display', 'block'), Ext.select('.zsCloud_body').setStyle('display', 'block'));
					}
					var _0x1d7baa = new Map(), _0x5b0d44 = new Array();
					if (data.list && data.list.length > 0) {
						for (var _0x1322b4 = 0; _0x1322b4 < data.list.length; _0x1322b4++) {
							var _0x267182 = data.list[_0x1322b4].topicid, _0x3f96a1 = _0x1d7baa.get(_0x267182);
							!_0x3f96a1 && (_0x3f96a1 = {}, _0x3f96a1.text = data.list[_0x1322b4].text, _0x3f96a1.time = data.list[_0x1322b4].time, _0x3f96a1.topicid = data.list[_0x1322b4].topicid, _0x3f96a1.weight = 0, _0x3f96a1.html = {
								'data-marker-time': data.list[_0x1322b4].time,
								'onclick': 'markersPlayer(this)'
							}, _0x1d7baa.set(_0x267182, _0x3f96a1), _0x5b0d44.push(_0x3f96a1));
							_0x3f96a1.weight += 1;
						}
					}
					$(function () {
						_0x5b0d44.length != 0 && $('#word_cloud').jQCloud(_0x5b0d44);
						function _0x37971a(_0x595048) {
							$(_0x595048).niceScroll({
								'cursorborder': '',
								'cursorwidth': 8,
								'cursorcolor': '#DADFE6',
								'boxzoom': false,
								'autohidemode': true
							});
							setInterval(function () {
								$(_0x595048).getNiceScroll().resize();
							}, 300);
						}
						$('.zsCloud_box').each(function (_0x372e97) {
							$(this).find('.zsCloud_div').attr('id', 'zsCloud_div_' + _0x372e97);
							_0x37971a('#zsCloud_div_' + _0x372e97);
						});
					});
					$('.zsCloud_down').click(function () {
						var _0x3c244e = $('.zsCloud_body');
						_0x3c244e.is(':visible') ? (_0x3c244e.hide(), $(this).addClass('zsCloud_up'), $(this).text('展开')) : (_0x3c244e.show(), $(this).removeClass('zsCloud_up'), $(this).text('收起'));
					});
				}
			});
		}
	});
	videojs.registerPlugin('marker', _0x3aba45);
}());
(function () {
	var _0x461635 = videojs.getPlugin('plugin'), _0x27bfd4 = videojs.extend(_0x461635, {
		'constructor': function (_0x47582b, _0x930e71) {
			_0x461635.call(this, _0x47582b, _0x930e71);
			var _0x3f6139 = this, _0x1368fd = _0x930e71.subtitleUrl, _0x44e623 = function (_0x468eff) {
				var _0x4b292c = _0x468eff.match(/support\/(\w+).\w+/);
				if (_0x4b292c) {
					return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0x4b292c[1];
				}
			}, _0x3dedf7 = function (_0x14a369, _0x15a74e, _0x1e3cff) {
				_0x47582b.addRemoteTextTrack({
					'kind': 'subtitles',
					'srclang': 'cn',
					'label': _0x14a369,
					'src': _0x15a74e,
					'default': _0x1e3cff
				}, true);
			};
			_0x47582b.ready(function () {
				_0x1368fd && Ext.Ajax.request({
					'url': _0x1368fd,
					'success': function (_0x35b308) {
						if (_0x35b308.status != 200) {
							return;
						}
						eval('var subs=' + _0x35b308.responseText);
						var _0x530df9 = 0, _0x4aad72 = 0;
						subs.length > 0 && Ext.each(subs, function (_0x21f593) {
							_0x930e71.translate == 1 && _0x21f593.name == 'English' ? (_0x21f593.selected = true, _0x4aad72 = _0x530df9) : _0x21f593.selected = false;
							_0x3dedf7(_0x21f593.name, _0x44e623(_0x21f593.url), _0x21f593.selected);
							_0x530df9++;
						});
						if (_0x930e71.translate == 1) {
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').setHTML('翻译');
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').addCls('vjs-hide-content');
						}
						setTimeout(function () {
							var _0x4ff4a2 = _0x47582b.textTracks();
							_0x930e71.translate == 1 ? _0x4ff4a2 && _0x4ff4a2[_0x4aad72] ? _0x4ff4a2[_0x4aad72].mode = 'showing' : _0x4ff4a2 && _0x4ff4a2[0] && (_0x4ff4a2[0].mode = 'showing') : _0x4ff4a2 && _0x4ff4a2[0] && (_0x4ff4a2[0].mode = 'showing');
						}, 500);
					}
				});
				var _0x295f13 = _0x47582b.textTrackSettings;
				_0x295f13.setValues({
					'backgroundColor': '#000',
					'backgroundOpacity': '0',
					'edgeStyle': 'uniform'
				});
				_0x295f13.updateDisplay();
			});
		}
	});
	videojs.registerPlugin('subtitle', _0x27bfd4);
}());
Ext.define('ans.videojs.ErrorDisplay', {
	'extend': 'Ext.Component',
	'xtype': 'vjserrdisplay',
	'cls': 'ans-vjserrdisplay',
	'renderTpl': [
		'<div class="ans-vjserrdisplay-title">{errorMsg}</div>',
		'<ul class="ans-vjserrdisplay-opts">',
		'您可以尝试其他线路: ',
		'<tpl for="playlines">',
		'<li class="ans-vjserrdisplay-opt"><label>',
		'<input type="radio" name="ans-vjserrdisplay-opt" {[xindex-1 === parent.selectedIndex ? "checked disabled":""]}>',
		'{label}',
		'</label></li>',
		'</tpl> ',
		'</ul>'
	],
	'renderSelectors': { 'errorMsgEl': 'div.ans-vjserrdisplay-title' },
	'afterRender': function () {
		var _0x1a1034 = this;
		_0x1a1034.callParent(arguments);
		var _0x3ba287 = Ext.query('input', _0x1a1034.el.dom);
		Ext.each(_0x3ba287, function (_0x23ddce, _0x490669) {
			Ext.fly(_0x23ddce).on('click', function () {
				_0x1a1034.onSelected(_0x490669);
			});
		});
		try {
			typeof createVideoTask === 'function' ? createVideoTask() : console.log('createVideoTask函数不存在\uFF01');
		} catch (_0x55db46) {
		}
		try {
			if (typeof aplus_queue != 'undefined') {
				var _0x2d65fe = parent.AttachmentSetting;
				if (_0x2d65fe) {
					var _0x1aee4e = _0x2d65fe.aplus_video_id, _0x5bd3c4 = _0x2d65fe.aplus_resource_id, _0x4a6323 = _0x2d65fe.knowledgename, _0x45219e = _0x2d65fe.coursename;
					aplus_queue.push({
						'action': 'aplus.record',
						'arguments': [
							'pybk_error',
							'OTHER',
							{
								'video_name': _0x4a6323,
								'video_id': _0x1aee4e,
								'resource_id': _0x5bd3c4,
								'resource_name': _0x45219e
							}
						]
					});
				}
			}
		} catch (_0x3bd09f) {
		}
	},
	'setErrorMsg': function (_0x4abd6e) {
		Ext.fly(this.errorMsgEl).setHTML(_0x4abd6e);
	}
});
Ext.define('ans.videojs.ErrorNote', {
	'extend': 'Ext.Component',
	'cls': 'ans-vjserrdisplay',
	'renderTpl': ['<div class="ans-vjserrdisplay-title">播放出现异常\u3002</div>']
});
(function () {
	var _0x520b81 = videojs.getComponent('ErrorDisplay'), _0x18556f = videojs.extend(_0x520b81, {
		'constructor': function (_0x380dc7, _0x434150) {
			_0x520b81.call(this, _0x380dc7, _0x434150);
		},
		'colse': function () {
			_0x520b81.prototype.colse.call(this);
			me.ansErrorDisplay && (me.ansErrorDisplay.destroy(), me.ansErrorDisplay = null);
		},
		'fill': function () {
			_0x520b81.prototype.fill.call(this);
			var _0x3ca85e = this, _0x3afd1a = _0x3ca85e.player_, _0xa8e2b0 = _0x3afd1a.options_.playlines, _0x2b14a8 = Ext.query('.vjs-modal-dialog-content', _0x3ca85e.el_)[0];
			_0x3ca85e.ansErrorDisplay && (_0x3ca85e.ansErrorDisplay.destroy(), delete _0x3ca85e.ansErrorDisplay);
			if (!_0x3afd1a.selectCDN || !_0xa8e2b0) {
				_0x3ca85e.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', { 'renderTo': _0x3ca85e.el_ });
				return;
			}
			var _0x232896 = _0x3afd1a.currentPlayline(), _0x436154 = 0;
			Ext.each(_0xa8e2b0, function (_0x26291f, _0x440594) {
				_0x232896 == _0x26291f && (_0x436154 = _0x440594);
			});
			_0x3ca85e.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
				'renderTo': _0x3ca85e.el_,
				'onSelected': function (_0x3b809a) {
					_0x3afd1a.selectCDN(_0x3b809a);
					_0x3ca85e.close();
				},
				'renderData': {
					'playlines': _0xa8e2b0,
					'errorMsg': _0x3ca85e.content(),
					'selectedIndex': _0x436154
				}
			});
		}
	});
	videojs.registerComponent('ErrorDisplay', _0x18556f);
}());
(function () {
	var _0x475501 = null;
	typeof window.videojs === 'undefined' && typeof require === 'function' ? _0x475501 = require('video.js') : _0x475501 = window.videojs;
	(function (_0x5a68e2, _0xba51c7) {
		var _0x5807e1 = {}, _0x1925dc, _0x3ee74a = {}, _0x3be1ae = {};
		function _0x33f3ed(_0x1bd111, _0x950e0a, _0x411bec, _0x17f860) {
			_0x3ee74a = {
				'label': _0x411bec,
				'sources': _0x950e0a
			};
			if (typeof _0x17f860 === 'function') {
				return _0x17f860(_0x1bd111, _0x950e0a, _0x411bec);
			}
			return _0x1bd111.src(_0x950e0a.map(function (_0x3f90f7) {
				return {
					'src': _0x3f90f7.src,
					'type': _0x3f90f7.type,
					'res': _0x3f90f7.res
				};
			})), _0x1bd111;
		}
		var _0x11afcd = _0xba51c7.getComponent('MenuItem'), _0x3f2927 = _0xba51c7.extend(_0x11afcd, {
			'constructor': function (_0x16c6cd, _0x2e28f0, _0x32ed94, _0x30e212) {
				this.onClickListener = _0x32ed94;
				this.label = _0x30e212;
				_0x11afcd.call(this, _0x16c6cd, _0x2e28f0);
				this.src = _0x2e28f0.src;
				this.on('click', this.onClick);
				this.on('touchstart', this.onClick);
				_0x2e28f0.initialySelected && (this.showAsLabel(), this.selected(true), this.addClass('vjs-selected'));
			},
			'showAsLabel': function () {
				this.label && (this.label.innerHTML = this.options_.label);
			},
			'onClick': function (_0xd21cfd) {
				this.onClickListener(this);
				var _0x474c97 = this.player_.currentTime(), _0x599d0e = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x599d0e && this.player_.bigPlayButton.hide();
				typeof _0xd21cfd !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0xd21cfd = this.options_.customSourcePicker);
				var _0x67ab24 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x67ab24 = 'timeupdate');
				_0x33f3ed(this.player_, this.src, this.options_.label, _0xd21cfd).one(_0x67ab24, function () {
					var _0x45305b = this.player_;
					_0x45305b.switchStatus = true;
					_0x45305b.currentTime(_0x474c97);
					!_0x599d0e && _0x45305b.play();
					_0x45305b.trigger('resolutionchange');
				});
			}
		});
		_0xba51c7.registerComponent('ResolutionMenuItem', _0x3f2927);
		var _0x5b5f4a = _0xba51c7.getComponent('MenuButton'), _0x3a75a4 = _0xba51c7.extend(_0x5b5f4a, {
			'constructor': function (_0x1eb333, _0x175e1b, _0x3d9a44, _0x45e113) {
				this.sources = _0x175e1b.sources;
				this.label = _0x45e113;
				this.label.innerHTML = _0x175e1b.initialySelectedLabel;
				_0x5b5f4a.call(this, _0x1eb333, _0x175e1b, _0x3d9a44);
				this.controlText('Quality');
				if (_0x3d9a44.dynamicLabel) {
					this.el().appendChild(_0x45e113);
				} else {
					var _0x2a6d77 = document.createElement('span');
					_0xba51c7.dom.addClass(_0x2a6d77, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x2a6d77);
				}
			},
			'createItems': function () {
				var _0x198ea2 = [], _0x5b1d4e = this.sources && this.sources.label || {}, _0x364a6e = function (_0x3e4fd8) {
					_0x198ea2.map(function (_0x4add38) {
						_0x4add38.selected(_0x4add38 === _0x3e4fd8);
						_0x4add38.removeClass('vjs-selected');
					});
				};
				for (var _0x365ad1 in _0x5b1d4e) {
					_0x5b1d4e.hasOwnProperty(_0x365ad1) && (_0x198ea2.push(new _0x3f2927(this.player_, {
						'label': _0x365ad1,
						'src': _0x5b1d4e[_0x365ad1],
						'initialySelected': _0x365ad1 === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x364a6e, this.label)), _0x3be1ae[_0x365ad1] = _0x198ea2[_0x198ea2.length - 1]);
				}
				return _0x198ea2;
			}
		});
		_0x1925dc = function (_0x2fdb6c) {
			var _0x4c6c9e = _0xba51c7.mergeOptions(_0x5807e1, _0x2fdb6c), _0x3f9dbd = this, _0x2f02c9 = document.createElement('span'), _0x58a940 = {};
			_0xba51c7.dom.addClass(_0x2f02c9, 'vjs-resolution-button-label');
			_0x3f9dbd.updateSrc = function (_0x2db141) {
				if (!_0x2db141) {
					return _0x3f9dbd.src();
				}
				_0x3f9dbd.controlBar.resolutionSwitcher && (_0x3f9dbd.controlBar.resolutionSwitcher.dispose(), delete _0x3f9dbd.controlBar.resolutionSwitcher);
				_0x2db141 = _0x2db141.sort(_0x19d7fa);
				_0x58a940 = _0x46b1ea(_0x2db141);
				var _0x16530e = _0x4a6b57(_0x58a940, _0x2db141), _0x2095b4 = new _0x3a75a4(_0x3f9dbd, {
					'sources': _0x58a940,
					'initialySelectedLabel': _0x16530e.label,
					'initialySelectedRes': _0x16530e.res,
					'customSourcePicker': _0x4c6c9e.customSourcePicker
				}, _0x4c6c9e, _0x2f02c9);
				return _0xba51c7.dom.addClass(_0x2095b4.el(), 'vjs-resolution-button'), _0x3f9dbd.controlBar.resolutionSwitcher = _0x3f9dbd.controlBar.el_.insertBefore(_0x2095b4.el_, _0x3f9dbd.controlBar.getChild('fullscreenToggle').el_), _0x3f9dbd.controlBar.resolutionSwitcher.dispose = function () {
					this.parentNode.removeChild(this);
				}, _0x33f3ed(_0x3f9dbd, _0x16530e.sources, _0x16530e.label, _0x4c6c9e.customSourcePicker);
			};
			_0x3f9dbd.currentResolution = function (_0x3a7b56, _0x366884) {
				if (_0x3a7b56 == null) {
					return _0x3ee74a;
				}
				return _0x3be1ae[_0x3a7b56] != null && _0x3be1ae[_0x3a7b56].onClick(_0x366884), _0x3f9dbd;
			};
			_0x3f9dbd.getGroupedSrc = function () {
				return _0x58a940;
			};
			function _0x19d7fa(_0x1346dd, _0x1649fd) {
				if (!_0x1346dd.res || !_0x1649fd.res) {
					return 0;
				}
				return +_0x1649fd.res - +_0x1346dd.res;
			}
			function _0x46b1ea(_0x15c382) {
				var _0x29bd71 = {
					'label': {},
					'res': {},
					'type': {}
				};
				return _0x15c382.map(function (_0x40e3bb) {
					_0x20ebdb(_0x29bd71, 'label', _0x40e3bb);
					_0x20ebdb(_0x29bd71, 'res', _0x40e3bb);
					_0x20ebdb(_0x29bd71, 'type', _0x40e3bb);
					_0x510726(_0x29bd71, 'label', _0x40e3bb);
					_0x510726(_0x29bd71, 'res', _0x40e3bb);
					_0x510726(_0x29bd71, 'type', _0x40e3bb);
				}), _0x29bd71;
			}
			function _0x20ebdb(_0x4b3565, _0x31c2cf, _0x11de9a) {
				_0x4b3565[_0x31c2cf][_0x11de9a[_0x31c2cf]] == null && (_0x4b3565[_0x31c2cf][_0x11de9a[_0x31c2cf]] = []);
			}
			function _0x510726(_0x5579a7, _0x30fe65, _0x36dd82) {
				_0x5579a7[_0x30fe65][_0x36dd82[_0x30fe65]].push(_0x36dd82);
			}
			function _0x4a6b57(_0x4cccef, _0x5706d3) {
				var _0x1bdb85 = _0x4c6c9e.default, _0x10bb6a = '';
				return _0x1bdb85 === 'high' ? (_0x1bdb85 = _0x5706d3[0].res, _0x10bb6a = _0x5706d3[0].label) : _0x1bdb85 === 'low' || _0x1bdb85 == null || !_0x4cccef.res[_0x1bdb85] ? (_0x1bdb85 = _0x5706d3[_0x5706d3.length - 1].res, _0x10bb6a = _0x5706d3[_0x5706d3.length - 1].label) : _0x4cccef.res[_0x1bdb85] && (_0x10bb6a = _0x4cccef.res[_0x1bdb85][0].label), {
					'res': _0x1bdb85,
					'label': _0x10bb6a,
					'sources': _0x4cccef.res[_0x1bdb85]
				};
			}
			_0x3f9dbd.ready(function () {
				_0x3f9dbd.options_.sources.length > 0 && _0x3f9dbd.setTimeout(function () {
					_0x3f9dbd.updateSrc(_0x3f9dbd.options_.sources);
				}, 1);
			});
		};
		_0xba51c7.registerPlugin('videoJsResolutionSwitcher', _0x1925dc);
	}(window, _0x475501));
}());
(function () {
	(function (_0x256d03, _0x4be99e) {
		var _0x34596d = {}, _0x54b92e, _0x1d287c = {}, _0x8de32d = { _0x1e93a7: _0x2259dc[_0x2259dc.length - 1] };
		function _0x14a8bc(_0x5b5637, _0x1367c4, _0x12369e, _0x2f59c2) {
			_0x1d287c = _0x1367c4;
			if (typeof _0x2f59c2 === 'function') {
				return _0x2f59c2(_0x5b5637, _0x1367c4, _0x12369e);
			}
			return _0x5b5637;
		}
		var _0x3a7895 = _0x4be99e.getComponent('ResolutionMenuItem'), _0x3951e4 = _0x4be99e.extend(_0x3a7895, {
			'onClick': function (_0x1edc64) {
				this.onClickListener(this);
				var _0x174d69 = this.player_.currentTime(), _0x249d38 = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x249d38 && this.player_.bigPlayButton.hide();
				typeof _0x1edc64 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x1edc64 = this.options_.customSourcePicker);
				var _0x564a00 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x564a00 = 'timeupdate');
				var _0x50fbbd = _0x14a8bc(this.player_, this.src, this.options_.label, _0x1edc64);
				_0x50fbbd && _0x50fbbd.one(_0x564a00, function () {
					_0x50fbbd.switchStatus = true;
					_0x50fbbd.currentTime(_0x174d69);
					!_0x249d38 && _0x50fbbd.play();
					_0x50fbbd.trigger('playlinechange');
				});
			}
		}), _0x3d7434 = _0x4be99e.getComponent('MenuButton'), _0x1bcc37 = _0x4be99e.extend(_0x3d7434, {
			'constructor': function (_0x4af7ab, _0x2e5bc6, _0x418f30, _0x57d09f) {
				this.playlines = _0x2e5bc6.playlines;
				this.label = _0x57d09f;
				this.label.innerHTML = _0x2e5bc6.initialySelectedLabel;
				_0x3d7434.call(this, _0x4af7ab, _0x2e5bc6, _0x418f30);
				this.controlText('Playline');
				if (_0x418f30.dynamicLabel) {
					this.el().appendChild(_0x57d09f);
				} else {
					var _0x690942 = document.createElement('span');
					_0x4be99e.addClass(_0x690942, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x690942);
				}
			},
			'createItems': function () {
				var _0x2259dc = [], _0x1a14cc = this.playlines || [], _0x2cbf01 = function (_0x443677) {
					_0x2259dc.map(function (_0x1b5207) {
						_0x1b5207.selected(_0x1b5207 === _0x443677);
						_0x1b5207.removeClass('vjs-selected');
					});
				};
				for (var _0x1175d6 = 0; _0x1175d6 < _0x1a14cc.length; _0x1175d6++) {
					var _0x1e93a7 = _0x1a14cc[_0x1175d6].label;
					_0x2259dc.push(new _0x3951e4(this.player_, {
						'label': _0x1e93a7,
						'src': _0x1a14cc[_0x1175d6],
						'initialySelected': _0x1e93a7 === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x2cbf01, this.label));
				}
				return _0x2259dc;
			}
		});
		_0x54b92e = function (_0x2be08a) {
			var _0x4c1cda = _0x4be99e.mergeOptions(_0x82bb76, _0x2be08a), _0x455ecb = this, _0x38a6a8 = document.createElement('span'), _0x1fca16 = _0x455ecb.options_.playlines, _0x82bb76 = _0x4c1cda.defaults;
			_0x4be99e.dom.addClass(_0x38a6a8, 'vjs-resolution-button-label');
			var _0xf961b6 = new _0x1bcc37(_0x455ecb, {
				'playlines': _0x1fca16,
				'initialySelectedLabel': _0x82bb76 ? _0x82bb76.label : _0x1fca16[0].label,
				'initialySelectedUrl': _0x82bb76 ? _0x82bb76.url : _0x1fca16[0].url,
				'customSourcePicker': _0x4c1cda.customSourcePicker
			}, _0x4c1cda, _0x38a6a8);
			_0x4be99e.dom.addClass(_0xf961b6.el(), 'vjs-resolution-button');
			_0x4be99e.dom.addClass(_0xf961b6.el(), 'vjs-playline-button');
			_0xf961b6.show();
			_0x455ecb.selectCDN = function (_0x28072c) {
				_0xf961b6.items[_0x28072c].onClick(_0x4c1cda.customSourcePicker);
				_0x455ecb.play();
			};
			_0x1fca16.length > 0 && (_0x82bb76 ? _0x1d287c = _0x82bb76 : _0x1d287c = _0x1fca16[0]);
			_0x455ecb.currentPlayline = function () {
				return _0x1d287c;
			};
			_0x455ecb.ready(function () {
				_0x455ecb.controlBar.videoJsPlayLine = _0x455ecb.controlBar.el_.insertBefore(_0xf961b6.el_, _0x455ecb.controlBar.getChild('fullscreenToggle').el_);
				_0x455ecb.controlBar.videoJsPlayLine.dispose = function () {
					this.parentNode.removeChild(this);
				};
			});
		};
		_0x4be99e.registerPlugin('videoJsPlayLine', _0x54b92e);
	}(window, videojs));
}());
Ext.define('ans.AudioJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x39cc4f) {
		_0x39cc4f = _0x39cc4f || {};
		var _0x4b2bc5 = this;
		_0x4b2bc5.addEvents(['seekstart']);
		_0x4b2bc5.mixins.observable.constructor.call(_0x4b2bc5, _0x39cc4f);
		var _0x1c60b5 = videojs(_0x39cc4f.videojs, _0x4b2bc5.params2VideoOpt(_0x39cc4f.params), function () {
		});
		Ext.fly(_0x39cc4f.videojs).on('contextmenu', function (_0x460b66) {
			_0x460b66.preventDefault();
		});
		Ext.fly(_0x39cc4f.videojs).on('keydown', function (_0x6a089d) {
			(_0x6a089d.keyCode == 32 || _0x6a089d.keyCode == 37 || _0x6a089d.keyCode == 39) && _0x6a089d.preventDefault();
			_0x6a089d.keyCode == 32 && (_0x1c60b5.paused() ? _0x1c60b5.play() : _0x1c60b5.pause());
		});
	},
	'params2VideoOpt': function (_0x19f18d) {
		var _0x38311f = [];
		!_0x19f18d.rootPath && (_0x19f18d.rootPath = '');
		_0x19f18d.http && _0x38311f.push({
			'src': _0x19f18d.http,
			'type': 'audio/mp3'
		});
		var _0x3fd863 = function (_0xd60c64, _0x28d4de, _0xecf05a) {
			var _0x20f2cc = this;
			!_0x20f2cc.logCount && (_0x20f2cc.logCount = 0);
			videojs.xhr({
				'uri': _0x28d4de,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x411787, _0x849d7a) {
				_0x20f2cc.logCount++;
				if (_0x849d7a.statusCode == 200) {
					_0x20f2cc.logCount = 0;
					if (_0x849d7a.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x849d7a.body);
					d.isPassed && _0xecf05a();
					return;
				}
				if (_0x20f2cc.logCount >= 4) {
					_0x20f2cc.logCount = 0;
					_0xd60c64.pause();
					_0x849d7a.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x849d7a.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x1840b9 = function (_0x2161a3, _0x48a4a7, _0x2f2866, _0x2664b3) {
			if (!_0x19f18d.reportUrl) {
				return;
			}
			if (_0x19f18d.isFiled == 1 || _0x19f18d.state == 1) {
				return;
			}
			var _0x5d24ad = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0xfb0148 = (_0x19f18d.startTime || '0') + '_' + (_0x19f18d.endTime || _0x19f18d.duration), _0x1b68b8 = 0, _0x3d5ee5;
			_0x2f2866.toString().indexOf('-') != -1 ? (_0x3d5ee5 = _0x2f2866.split('-'), _0x3d5ee5.length == 2 && (_0x1b68b8 = parseInt(_0x3d5ee5[1]) * 1000)) : _0x1b68b8 = _0x2f2866 * 1000;
			if (_0x1b68b8 == _0x19f18d.duration * 1000 && _0x48a4a7 == 2) {
				return;
			}
			var _0x3c4c1e = Ext.String.format(_0x5d24ad, _0x19f18d.clazzId, _0x19f18d.userid, _0x19f18d.jobid ? _0x19f18d.jobid : '', _0x19f18d.objectId, _0x1b68b8, 'd_yHJ!$pdA~5', _0x19f18d.duration * 1000, _0xfb0148), _0x56e89e = [
				_0x19f18d.reportUrl,
				'/',
				_0x19f18d.dtoken,
				'?clazzId=',
				_0x19f18d.clazzId,
				'&playingTime=',
				_0x2f2866,
				'&duration=',
				_0x19f18d.duration,
				'&clipTime=',
				_0xfb0148,
				'&objectId=',
				_0x19f18d.objectId,
				'&otherInfo=',
				_0x19f18d.otherInfo,
				'&jobid=',
				_0x19f18d.jobid,
				'&userid=',
				_0x19f18d.userid,
				'&isdrag=',
				_0x48a4a7,
				'&view=pc',
				'&enc=',
				md5(_0x3c4c1e),
				'&rt=',
				_0x19f18d.rt,
				'&dtype=Audio',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x3fd863(_0x2161a3, _0x56e89e, _0x2664b3);
		};
		return {
			'language': 'zh-CN',
			'controls': true,
			'preload': 'auto',
			'bigPlayButton': false,
			'sources': _0x38311f,
			'textTrackDisplay': true,
			'controlBar': {
				'volumePanel': { 'inline': true },
				'children': [
					'playToggle',
					'currentTimeDisplay',
					'timeDivider',
					'durationDisplay',
					'progressControl',
					'volumePanel'
				]
			},
			'plugins': {
				'audioNote': { 'title': _0x19f18d.filename },
				'studyControl': { 'enableSwitchWindow': 1 },
				'seekBarControl': {
					'headOffset': _0x19f18d.headOffset,
					'enableFastForward': _0x19f18d.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0x19f18d.control,
					'reportTimeInterval': _0x19f18d.reportTimeInterval,
					'sourcePlayer': 'audio',
					'sendLog': function (_0x57efaa, _0x5f3329, _0x1b31b4) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x9b9655 = 0;
						switch (_0x5f3329) {
							case 'playing':
								_0x9b9655 = 0;
								break;
							case 'drag':
								_0x9b9655 = 1;
								break;
							case 'play':
								_0x9b9655 = 3;
								break;
							case 'pause':
								_0x9b9655 = 2;
								break;
							case 'ended':
								_0x9b9655 = 4;
								break;
						}
						_0x1840b9(_0x57efaa, _0x9b9655, _0x1b31b4, function () {
							window.proxy_completed && window.proxy_completed();
						});
					}
				}
			}
		};
	}
});
Ext.define('ans.AudioJsNew', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x34dfeb) {
		_0x34dfeb = _0x34dfeb || {};
		var _0x1f7940 = this;
		_0x1f7940.addEvents(['seekstart']);
		_0x1f7940.mixins.observable.constructor.call(_0x1f7940, _0x34dfeb);
		var _0x4d4f4d = videojs(_0x34dfeb.videojs, _0x1f7940.params2VideoOpt(_0x34dfeb.params), function () {
		});
		_0x34dfeb.params.control && _0x34dfeb.params.doublespeed != 1 && !_0x34dfeb.params.isPass && _0x4d4f4d.controlBar.getChild('playbackRateMenuButton').disable();
		$(_0x4d4f4d.controlBar.progressControl.el_).find('.vjs-play-progress').append('<i></i>');
		_0x4d4f4d.controlBar.addChild('button', {
			'el': videojs.createEl('button', {
				'id': 'vjs-fast-replay-button',
				'title': '快退十秒',
				'className': 'vjs-icon-previous-item vjs-fast-replay-button vjs-control vjs-button',
				'innerHTML': '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">快退</span>',
				'onclick': function () {
					(_0x34dfeb.params.enableFastForward == 1 || _0x4d4f4d.switchStatus || _0x4d4f4d.finished) && _0x4d4f4d.currentTime(_0x4d4f4d.currentTime() - 10);
				}
			})
		});
		_0x4d4f4d.controlBar.addChild('button', {
			'text': '快进',
			'el': videojs.createEl('button', {
				'id': 'vjs-fast-forward-button',
				'title': '快进十秒',
				'className': 'vjs-icon-next-item vjs-fast-forward-button vjs-control vjs-button',
				'innerHTML': '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">快进</span>',
				'onclick': function () {
					(_0x34dfeb.params.enableFastForward == 1 || _0x4d4f4d.switchStatus || _0x4d4f4d.finished) && _0x4d4f4d.currentTime(_0x4d4f4d.currentTime() + 10);
				}
			})
		});
		_0x34dfeb.params.control && _0x34dfeb.params.enableFastForward != 1 && !_0x4d4f4d.switchStatus && !_0x4d4f4d.finished && (_0x4d4f4d.controlBar.getChildById('vjs-fast-replay-button').disable(), _0x4d4f4d.controlBar.getChildById('vjs-fast-forward-button').disable());
		Ext.fly(_0x34dfeb.videojs).on('contextmenu', function (_0x1a909d) {
			_0x1a909d.preventDefault();
		});
		Ext.fly(_0x34dfeb.videojs).on('keydown', function (_0x264754) {
			(_0x264754.keyCode == 32 || _0x264754.keyCode == 37 || _0x264754.keyCode == 39) && _0x264754.preventDefault();
			_0x264754.keyCode == 32 && (_0x4d4f4d.paused() ? _0x4d4f4d.play() : _0x4d4f4d.pause());
		});
	},
	'params2VideoOpt': function (_0x1b469b) {
		var _0x5655b4 = [];
		!_0x1b469b.rootPath && (_0x1b469b.rootPath = '');
		_0x1b469b.http && _0x5655b4.push({
			'src': _0x1b469b.http,
			'type': 'audio/mp3'
		});
		var _0x5cf7cf = function (_0x3afd81, _0x18affb, _0x31abeb) {
			var _0xe0418d = this;
			!_0xe0418d.logCount && (_0xe0418d.logCount = 0);
			videojs.xhr({
				'uri': _0x18affb,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x4960b1, _0x5ec110) {
				_0xe0418d.logCount++;
				if (_0x5ec110.statusCode == 200) {
					_0xe0418d.logCount = 0;
					if (_0x5ec110.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x5ec110.body);
					d.isPassed && (_0x3afd81.finished = true, _0x3afd81.controlBar.getChild('playbackRateMenuButton').enable(), _0x3afd81.controlBar.getChildById('vjs-fast-replay-button').enable(), _0x3afd81.controlBar.getChildById('vjs-fast-forward-button').enable(), _0x31abeb());
					return;
				}
				if (_0xe0418d.logCount >= 4) {
					_0xe0418d.logCount = 0;
					_0x3afd81.pause();
					_0x5ec110.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x5ec110.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x3ec015 = function (_0x57493d, _0x171ea1, _0x3cf41a, _0x580c7e) {
			if (!_0x1b469b.reportUrl) {
				return;
			}
			if (_0x1b469b.isFiled == 1 || _0x1b469b.state == 1) {
				return;
			}
			var _0x34e463 = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x31f68e = (_0x1b469b.startTime || '0') + '_' + (_0x1b469b.endTime || _0x1b469b.duration), _0x14226f = 0, _0x5f2342;
			_0x3cf41a.toString().indexOf('-') != -1 ? (_0x5f2342 = _0x3cf41a.split('-'), _0x5f2342.length == 2 && (_0x14226f = parseInt(_0x5f2342[1]) * 1000)) : _0x14226f = _0x3cf41a * 1000;
			if (_0x14226f == _0x1b469b.duration * 1000 && _0x171ea1 == 2) {
				return;
			}
			var _0x6f3dc3 = Ext.String.format(_0x34e463, _0x1b469b.clazzId, _0x1b469b.userid, _0x1b469b.jobid ? _0x1b469b.jobid : '', _0x1b469b.objectId, _0x14226f, 'd_yHJ!$pdA~5', _0x1b469b.duration * 1000, _0x31f68e), _0x2e29af = [
				_0x1b469b.reportUrl,
				'/',
				_0x1b469b.dtoken,
				'?clazzId=',
				_0x1b469b.clazzId,
				'&playingTime=',
				_0x3cf41a,
				'&duration=',
				_0x1b469b.duration,
				'&clipTime=',
				_0x31f68e,
				'&objectId=',
				_0x1b469b.objectId,
				'&otherInfo=',
				_0x1b469b.otherInfo,
				'&jobid=',
				_0x1b469b.jobid,
				'&userid=',
				_0x1b469b.userid,
				'&isdrag=',
				_0x171ea1,
				'&view=pc',
				'&enc=',
				md5(_0x6f3dc3),
				'&rt=',
				_0x1b469b.rt,
				'&dtype=Audio',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x5cf7cf(_0x57493d, _0x2e29af, _0x580c7e);
		};
		return {
			'language': 'zh-CN',
			'controls': true,
			'preload': 'auto',
			'bigPlayButton': false,
			'sources': _0x5655b4,
			'textTrackDisplay': true,
			'controlBar': {
				'playToggle': true,
				'children': [
					'playToggle',
					'currentTimeDisplay',
					'progressControl',
					'durationDisplay',
					{
						'name': 'playbackRateMenuButton',
						'playbackRates': [
							0.5,
							1,
							1.25,
							1.5,
							2
						]
					}
				]
			},
			'plugins': {
				'audioNote': { 'title': _0x1b469b.filename },
				'studyControl': { 'enableSwitchWindow': 1 },
				'seekBarControl': {
					'headOffset': _0x1b469b.headOffset,
					'enableFastForward': _0x1b469b.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0x1b469b.control,
					'reportTimeInterval': _0x1b469b.reportTimeInterval,
					'sourcePlayer': 'audio',
					'sendLog': function (_0x944cc7, _0x50ca5e, _0x14f627) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x58c817 = 0;
						switch (_0x50ca5e) {
							case 'playing':
								_0x58c817 = 0;
								break;
							case 'drag':
								_0x58c817 = 1;
								break;
							case 'play':
								_0x58c817 = 3;
								break;
							case 'pause':
								_0x58c817 = 2;
								break;
							case 'ended':
								_0x58c817 = 4;
								break;
						}
						_0x3ec015(_0x944cc7, _0x58c817, _0x14f627, function () {
							window.proxy_completed && window.proxy_completed();
						});
					}
				}
			}
		};
	}
});
Ext.define('ans.videojs.AudioNote', {
	'extend': 'Ext.Component',
	'cls': 'ans-audionote'
});
(function () {
	var _0x4ce129 = videojs.getPlugin('plugin'), _0x5ea095 = videojs.extend(_0x4ce129, {
		'constructor': function (_0x5bc3c8, _0x161a19) {
			_0x4ce129.call(this, _0x5bc3c8, _0x161a19);
			Ext.create('ans.videojs.AudioNote', {
				'renderTo': _0x5bc3c8.el_,
				'html': _0x161a19.title
			});
		}
	});
	videojs.registerPlugin('audioNote', _0x5ea095);
}());