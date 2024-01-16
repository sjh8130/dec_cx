(function (_0x46e106) {
	function _0x21d1e1(_0x1e0b30, _0x2e36e8) {
		var _0x5428ae = (_0x1e0b30 & 65535) + (_0x2e36e8 & 65535), _0x4319d8 = (_0x1e0b30 >> 16) + (_0x2e36e8 >> 16) + (_0x5428ae >> 16);
		return _0x4319d8 << 16 | _0x5428ae & 65535;
	}
	function _0x597c33(_0x1d1a0b, _0x4350c7) {
		return _0x1d1a0b << _0x4350c7 | _0x1d1a0b >>> 32 - _0x4350c7;
	}
	function _0x361163(_0x147662, _0x1c3731, _0xd41e03, _0x442f7d, _0x498040, _0x30483e) {
		return _0x21d1e1(_0x597c33(_0x21d1e1(_0x21d1e1(_0x1c3731, _0x147662), _0x21d1e1(_0x442f7d, _0x30483e)), _0x498040), _0xd41e03);
	}
	function _0x4119af(_0x30880d, _0x61d118, _0x29057b, _0x255c31, _0x3f7db4, _0x57cd2b, _0x43ccd4) {
		return _0x361163(_0x61d118 & _0x29057b | ~_0x61d118 & _0x255c31, _0x30880d, _0x61d118, _0x3f7db4, _0x57cd2b, _0x43ccd4);
	}
	function _0x5a6285(_0x25fe1e, _0x1d3192, _0xae65d6, _0x4fcbd3, _0x4107b8, _0x30181d, _0x529c06) {
		return _0x361163(_0x1d3192 & _0x4fcbd3 | _0xae65d6 & ~_0x4fcbd3, _0x25fe1e, _0x1d3192, _0x4107b8, _0x30181d, _0x529c06);
	}
	function _0x25760b(_0x39dc77, _0x282560, _0x17a7e8, _0x202b5d, _0x3c7a58, _0x12d9c6, _0x69fbe0) {
		return _0x361163(_0x282560 ^ _0x17a7e8 ^ _0x202b5d, _0x39dc77, _0x282560, _0x3c7a58, _0x12d9c6, _0x69fbe0);
	}
	function _0x4b5d27(_0x136b20, _0x50ae25, _0x37d2b6, _0x49d916, _0x207882, _0x5d6e86, _0x2f18da) {
		return _0x361163(_0x37d2b6 ^ (_0x50ae25 | ~_0x49d916), _0x136b20, _0x50ae25, _0x207882, _0x5d6e86, _0x2f18da);
	}
	function _0x27c7b2(_0x10bc78, _0x21e37c) {
		_0x10bc78[_0x21e37c >> 5] |= 128 << _0x21e37c % 32;
		_0x10bc78[(_0x21e37c + 64 >>> 9 << 4) + 14] = _0x21e37c;
		var _0x518763, _0x2948d8, _0x15f58f, _0x260edb, _0x3fbdea, _0x54a1b7 = 1732584193, _0x1b3142 = -271733879, _0x8cef5b = -1732584194, _0x56752d = 271733878;
		for (_0x518763 = 0; _0x518763 < _0x10bc78.length; _0x518763 += 16) {
			_0x2948d8 = _0x54a1b7;
			_0x15f58f = _0x1b3142;
			_0x260edb = _0x8cef5b;
			_0x3fbdea = _0x56752d;
			_0x54a1b7 = _0x4119af(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763], 7, -680876936);
			_0x56752d = _0x4119af(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763 + 1], 12, -389564586);
			_0x8cef5b = _0x4119af(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 2], 17, 606105819);
			_0x1b3142 = _0x4119af(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763 + 3], 22, -1044525330);
			_0x54a1b7 = _0x4119af(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763 + 4], 7, -176418897);
			_0x56752d = _0x4119af(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763 + 5], 12, 1200080426);
			_0x8cef5b = _0x4119af(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 6], 17, -1473231341);
			_0x1b3142 = _0x4119af(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763 + 7], 22, -45705983);
			_0x54a1b7 = _0x4119af(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763 + 8], 7, 1770035416);
			_0x56752d = _0x4119af(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763 + 9], 12, -1958414417);
			_0x8cef5b = _0x4119af(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 10], 17, -42063);
			_0x1b3142 = _0x4119af(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763 + 11], 22, -1990404162);
			_0x54a1b7 = _0x4119af(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763 + 12], 7, 1804603682);
			_0x56752d = _0x4119af(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763 + 13], 12, -40341101);
			_0x8cef5b = _0x4119af(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 14], 17, -1502002290);
			_0x1b3142 = _0x4119af(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763 + 15], 22, 1236535329);
			_0x54a1b7 = _0x5a6285(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763 + 1], 5, -165796510);
			_0x56752d = _0x5a6285(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763 + 6], 9, -1069501632);
			_0x8cef5b = _0x5a6285(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 11], 14, 643717713);
			_0x1b3142 = _0x5a6285(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763], 20, -373897302);
			_0x54a1b7 = _0x5a6285(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763 + 5], 5, -701558691);
			_0x56752d = _0x5a6285(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763 + 10], 9, 38016083);
			_0x8cef5b = _0x5a6285(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 15], 14, -660478335);
			_0x1b3142 = _0x5a6285(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763 + 4], 20, -405537848);
			_0x54a1b7 = _0x5a6285(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763 + 9], 5, 568446438);
			_0x56752d = _0x5a6285(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763 + 14], 9, -1019803690);
			_0x8cef5b = _0x5a6285(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 3], 14, -187363961);
			_0x1b3142 = _0x5a6285(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763 + 8], 20, 1163531501);
			_0x54a1b7 = _0x5a6285(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763 + 13], 5, -1444681467);
			_0x56752d = _0x5a6285(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763 + 2], 9, -51403784);
			_0x8cef5b = _0x5a6285(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 7], 14, 1735328473);
			_0x1b3142 = _0x5a6285(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763 + 12], 20, -1926607734);
			_0x54a1b7 = _0x25760b(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763 + 5], 4, -378558);
			_0x56752d = _0x25760b(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763 + 8], 11, -2022574463);
			_0x8cef5b = _0x25760b(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 11], 16, 1839030562);
			_0x1b3142 = _0x25760b(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763 + 14], 23, -35309556);
			_0x54a1b7 = _0x25760b(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763 + 1], 4, -1530992060);
			_0x56752d = _0x25760b(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763 + 4], 11, 1272893353);
			_0x8cef5b = _0x25760b(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 7], 16, -155497632);
			_0x1b3142 = _0x25760b(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763 + 10], 23, -1094730640);
			_0x54a1b7 = _0x25760b(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763 + 13], 4, 681279174);
			_0x56752d = _0x25760b(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763], 11, -358537222);
			_0x8cef5b = _0x25760b(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 3], 16, -722521979);
			_0x1b3142 = _0x25760b(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763 + 6], 23, 76029189);
			_0x54a1b7 = _0x25760b(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763 + 9], 4, -640364487);
			_0x56752d = _0x25760b(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763 + 12], 11, -421815835);
			_0x8cef5b = _0x25760b(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 15], 16, 530742520);
			_0x1b3142 = _0x25760b(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763 + 2], 23, -995338651);
			_0x54a1b7 = _0x4b5d27(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763], 6, -198630844);
			_0x56752d = _0x4b5d27(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763 + 7], 10, 1126891415);
			_0x8cef5b = _0x4b5d27(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 14], 15, -1416354905);
			_0x1b3142 = _0x4b5d27(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763 + 5], 21, -57434055);
			_0x54a1b7 = _0x4b5d27(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763 + 12], 6, 1700485571);
			_0x56752d = _0x4b5d27(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763 + 3], 10, -1894986606);
			_0x8cef5b = _0x4b5d27(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 10], 15, -1051523);
			_0x1b3142 = _0x4b5d27(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763 + 1], 21, -2054922799);
			_0x54a1b7 = _0x4b5d27(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763 + 8], 6, 1873313359);
			_0x56752d = _0x4b5d27(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763 + 15], 10, -30611744);
			_0x8cef5b = _0x4b5d27(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 6], 15, -1560198380);
			_0x1b3142 = _0x4b5d27(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763 + 13], 21, 1309151649);
			_0x54a1b7 = _0x4b5d27(_0x54a1b7, _0x1b3142, _0x8cef5b, _0x56752d, _0x10bc78[_0x518763 + 4], 6, -145523070);
			_0x56752d = _0x4b5d27(_0x56752d, _0x54a1b7, _0x1b3142, _0x8cef5b, _0x10bc78[_0x518763 + 11], 10, -1120210379);
			_0x8cef5b = _0x4b5d27(_0x8cef5b, _0x56752d, _0x54a1b7, _0x1b3142, _0x10bc78[_0x518763 + 2], 15, 718787259);
			_0x1b3142 = _0x4b5d27(_0x1b3142, _0x8cef5b, _0x56752d, _0x54a1b7, _0x10bc78[_0x518763 + 9], 21, -343485551);
			_0x54a1b7 = _0x21d1e1(_0x54a1b7, _0x2948d8);
			_0x1b3142 = _0x21d1e1(_0x1b3142, _0x15f58f);
			_0x8cef5b = _0x21d1e1(_0x8cef5b, _0x260edb);
			_0x56752d = _0x21d1e1(_0x56752d, _0x3fbdea);
		}
		return [
			_0x54a1b7,
			_0x1b3142,
			_0x8cef5b,
			_0x56752d
		];
	}
	function _0x5b49b1(_0xae5c5e) {
		var _0x58facf, _0x563231 = '', _0x22f7ec = _0xae5c5e.length * 32;
		for (_0x58facf = 0; _0x58facf < _0x22f7ec; _0x58facf += 8) {
			_0x563231 += String.fromCharCode(_0xae5c5e[_0x58facf >> 5] >>> _0x58facf % 32 & 255);
		}
		return _0x563231;
	}
	function _0x210baa(_0x2673d3) {
		var _0x499675, _0x110728 = [];
		_0x110728[(_0x2673d3.length >> 2) - 1] = undefined;
		for (_0x499675 = 0; _0x499675 < _0x110728.length; _0x499675 += 1) {
			_0x110728[_0x499675] = 0;
		}
		var _0x3dd35f = _0x2673d3.length * 8;
		for (_0x499675 = 0; _0x499675 < _0x3dd35f; _0x499675 += 8) {
			_0x110728[_0x499675 >> 5] |= (_0x2673d3.charCodeAt(_0x499675 / 8) & 255) << _0x499675 % 32;
		}
		return _0x110728;
	}
	function _0x35ed2a(_0x293f7f) {
		return _0x5b49b1(_0x27c7b2(_0x210baa(_0x293f7f), _0x293f7f.length * 8));
	}
	function _0x3d6e40(_0x29d082, _0x19aebc) {
		var _0x12fb6d, _0x308ade = _0x210baa(_0x29d082), _0x12257f = [], _0x2634c8 = [], _0x86f737;
		_0x12257f[15] = _0x2634c8[15] = undefined;
		_0x308ade.length > 16 && (_0x308ade = _0x27c7b2(_0x308ade, _0x29d082.length * 8));
		for (_0x12fb6d = 0; _0x12fb6d < 16; _0x12fb6d += 1) {
			_0x12257f[_0x12fb6d] = _0x308ade[_0x12fb6d] ^ 909522486;
			_0x2634c8[_0x12fb6d] = _0x308ade[_0x12fb6d] ^ 1549556828;
		}
		return _0x86f737 = _0x27c7b2(_0x12257f.concat(_0x210baa(_0x19aebc)), 512 + _0x19aebc.length * 8), _0x5b49b1(_0x27c7b2(_0x2634c8.concat(_0x86f737), 640));
	}
	function _0x529855(_0x5192dd) {
		var _0x1be2e9 = '0123456789abcdef', _0x3c609a = '', _0x188b95, _0x33b297;
		for (_0x33b297 = 0; _0x33b297 < _0x5192dd.length; _0x33b297 += 1) {
			_0x188b95 = _0x5192dd.charCodeAt(_0x33b297);
			_0x3c609a += _0x1be2e9.charAt(_0x188b95 >>> 4 & 15) + _0x1be2e9.charAt(_0x188b95 & 15);
		}
		return _0x3c609a;
	}
	function _0x3f2cbb(_0x43d041) {
		return unescape(encodeURIComponent(_0x43d041));
	}
	function _0x44a8be(_0x9296de) {
		return _0x35ed2a(_0x3f2cbb(_0x9296de));
	}
	function _0x3da351(_0x4985ee) {
		return _0x529855(_0x44a8be(_0x4985ee));
	}
	function _0x34e354(_0x230246, _0x1325a6) {
		return _0x3d6e40(_0x3f2cbb(_0x230246), _0x3f2cbb(_0x1325a6));
	}
	function _0x4f015a(_0x47d0f2, _0x4d8f68) {
		return _0x529855(_0x34e354(_0x47d0f2, _0x4d8f68));
	}
	function _0x16f645(_0x1b94e3, _0x461efa, _0xa15fdb) {
		if (!_0x461efa) {
			if (!_0xa15fdb) {
				return _0x3da351(_0x1b94e3);
			}
			return _0x44a8be(_0x1b94e3);
		}
		if (!_0xa15fdb) {
			return _0x4f015a(_0x461efa, _0x1b94e3);
		}
		return _0x34e354(_0x461efa, _0x1b94e3);
	}
	typeof define === 'function' && define.amd ? define(function () {
		return _0x16f645;
	}) : typeof module === 'object' && module.exports ? module.exports = _0x16f645 : _0x46e106.md5 = _0x16f645;
}(this));
Ext.apply(Ext, {
	'setCookie': function (_0x52bf09, _0x2dd258) {
		var _0x52ab24 = arguments, _0x328629 = arguments.length, _0x1ee9ae = _0x328629 > 2 ? _0x52ab24[2] : null, _0x4637bc = _0x328629 > 3 ? _0x52ab24[3] : '/', _0x4c55b5 = _0x328629 > 4 ? _0x52ab24[4] : null, _0xcfda1 = _0x328629 > 5 ? _0x52ab24[5] : false;
		document.cookie = _0x52bf09 + '=' + escape(_0x2dd258) + (_0x1ee9ae === null ? '' : '; expires=' + _0x1ee9ae.toGMTString()) + (_0x4637bc === null ? '' : '; path=' + _0x4637bc) + (_0x4c55b5 === null ? '' : '; domain=' + _0x4c55b5) + (_0xcfda1 === true ? '; secure' : '');
	},
	'getCookie': function (_0x34d23b, _0x21964c) {
		var _0x4ecaee = _0x34d23b + '=', _0xdff41c = _0x4ecaee.length, _0x49ee35 = document.cookie.length, _0x2a7e08 = 0, _0x3a281a = 0;
		while (_0x2a7e08 < _0x49ee35) {
			_0x3a281a = _0x2a7e08 + _0xdff41c;
			if (document.cookie.substring(_0x2a7e08, _0x3a281a) == _0x4ecaee) {
				return this.getCookieVal(_0x3a281a);
			}
			_0x2a7e08 = document.cookie.indexOf(' ', _0x2a7e08) + 1;
			if (_0x2a7e08 === 0) {
				break;
			}
		}
		return _0x21964c;
	},
	'getCookieVal': function (_0x3bc232) {
		var _0x5f14e1 = document.cookie.indexOf(';', _0x3bc232);
		return _0x5f14e1 == -1 && (_0x5f14e1 = document.cookie.length), unescape(document.cookie.substring(_0x3bc232, _0x5f14e1));
	}
});
Ext.define('ans.VideoJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x565728) {
		_0x565728 = _0x565728 || {};
		var _0x166c2f = this;
		_0x166c2f.addEvents(['seekstart']);
		_0x166c2f.mixins.observable.constructor.call(_0x166c2f, _0x565728);
		var _0x53da2 = _0x565728 && _0x565728.callbackfn ? _0x565728.callbackfn : function () {
		}, _0x503aa1 = videojs(_0x565728.videojs, _0x166c2f.params2VideoOpt(_0x565728.params), _0x53da2);
		_0x503aa1.eventCount = 0;
		Ext.fly(_0x565728.videojs).on('contextmenu', function (_0xf259e9) {
			_0xf259e9.preventDefault();
		});
		$('.video-js').attr('tabindex', 1);
		$('.vjs-big-play-button').on('click', function (_0x5ab490) {
			$('.video-js').focus();
		});
		Ext.fly(_0x565728.videojs).on('keydown', function (_0x3c572d) {
			(_0x3c572d.keyCode == 32 || _0x3c572d.keyCode == 107) && _0x3c572d.preventDefault();
			if (_0x3c572d.keyCode == 32) {
				_0x503aa1.paused() ? _0x503aa1.play() : _0x503aa1.pause();
			} else {
				if (_0x3c572d.keyCode == 37 || _0x3c572d.keyCode == 39) {
					var _0x29a08e = _0x565728.params.enableFastForward, _0x8695f3 = _0x565728.params.jobid;
					if (typeof _0x29a08e != 'undefined' && _0x29a08e === 0 && typeof _0x8695f3 != 'undefined' && _0x8695f3 != '' && window.parent.parent.location.href.indexOf('studentstudy') > -1) {
						videojs('video').tipFun(_0x3c572d.keyCode);
					} else {
						if (_0x3c572d.keyCode == 37) {
							var _0x28b1d1 = parseInt(_0x503aa1.currentTime()), _0x34e023 = _0x28b1d1 - 5 < 0 ? 0 : _0x28b1d1 - 5;
							_0x503aa1.currentTime(_0x34e023);
						} else {
							if (_0x3c572d.keyCode == 39) {
								var _0x28b1d1 = parseInt(_0x503aa1.currentTime()), _0x34e023 = _0x28b1d1 + 5 > duration ? duration : _0x28b1d1 + 5;
								_0x503aa1.currentTime(_0x34e023);
							}
						}
					}
				}
			}
		});
		_0x503aa1.videoJsResolutionSwitcher && _0x503aa1.on('resolutionchange', function () {
			var _0x36db41 = _0x503aa1.currentResolution(), _0x447d15 = _0x36db41.sources ? _0x36db41.sources[0].res : false;
			Ext.setCookie('resolution', _0x447d15);
		});
		_0x503aa1.videoJsPlayLine && _0x503aa1.on('playlinechange', function () {
			var _0x457f6d = _0x503aa1.currentPlayline();
			Ext.setCookie('net', _0x457f6d.net);
		});
		var _0xf62f66 = _0x565728.params && _0x565728.params.doublespeed ? 2 : 1, _0x2fc8fb = true;
		_0x503aa1.on('ratechange', function () {
			var _0x97f124 = _0x503aa1.playbackRate();
			_0x97f124 > _0xf62f66 ? (_0x503aa1.pause(), _0x503aa1.playbackRate(1)) : Ext.setCookie('doubleSpeedValue', _0x97f124);
			if (typeof aplus_queue != 'undefined' && !_0x2fc8fb) {
				var _0x15836a = _0x565728.params && _0x565728.params.aplus_video_id ? _0x565728.params.aplus_video_id : '', _0x46c584 = _0x565728.params && _0x565728.params.aplus_resource_id ? _0x565728.params.aplus_resource_id : '', _0x258b98 = _0x565728.params && _0x565728.params.knowledgename ? _0x565728.params.knowledgename : '', _0x5e3d82 = _0x565728.params && _0x565728.params.coursename ? _0x565728.params.coursename : '';
				aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_speed_click',
						'CLK',
						{
							'video_name': _0x258b98,
							'video_id': _0x15836a,
							'resource_id': _0x46c584,
							'resource_name': _0x5e3d82,
							'speed_type': _0x503aa1.playbackRate()
						}
					]
				});
			}
			_0x2fc8fb = false;
		});
		_0x503aa1.on('play', function () {
			try {
				$('.video-js').focus();
				if (_0x565728.params && _0x565728.params.doublespeed && parseInt(_0x565728.params.doublespeed) === 1) {
					var _0x466f22 = Ext.getCookie('doubleSpeedValue', 1);
					_0x503aa1.playbackRate(_0x466f22);
				}
				$('.vjs-playback-rate').removeClass('vjs-hidden');
				$('.vjs-playback-rate .vjs-menu .vjs-menu-content li').length == 0 && $('.vjs-playback-rate-value').css('opacity', '0.4');
			} catch (_0x15c838) {
				console.log(_0x15c838);
			}
		});
		_0x503aa1.on('ended', function () {
			try {
				_0x565728.params.enableFastForward = 1;
				_0x503aa1.finished = true;
				_0x503aa1.disableSeek(false);
				$('.vjs-progress-control').unbind('click');
			} catch (_0x55f47d) {
				console.log(_0x55f47d);
			}
		});
	},
	'params2VideoOpt': function (_0x25111f) {
		var _0x430fba = typeof _0x25111f.cpi == 'undefined' ? 0 : _0x25111f.cpi, _0x3a7a77 = false, _0x51ef2c = [
			{
				'indexorder': 0,
				'label': isEn ? 'Line 1' : '公网1',
				'url': ServerHosts.s1_HOST,
				'ispublic': true,
				'net': 'p1'
			},
			{
				'indexorder': 1,
				'label': isEn ? 'Line 2' : '公网2',
				'url': ServerHosts.s2_HOST,
				'ispublic': true,
				'net': 'p2'
			}
		];
		if (_0x25111f.cdn) {
			for (var _0x5b29d7 = 0; _0x5b29d7 < _0x25111f.cdn.length; _0x5b29d7++) {
				var _0x580942 = _0x25111f.cdn[_0x5b29d7];
				_0x580942.net = 's' + _0x5b29d7;
			}
			try {
				top.window.app && top.window.app == 2 ? _0x51ef2c = _0x51ef2c.concat(_0x25111f.cdn) : _0x51ef2c = _0x51ef2c.concat(_0x25111f.cdn).sort(function (_0x1f100b, _0x14b165) {
					return _0x1f100b.indexorder - _0x14b165.indexorder;
				});
			} catch (_0x1ec5ac) {
				_0x51ef2c = _0x51ef2c.concat(_0x25111f.cdn);
			}
		}
		function _0x2eb7e7(_0x187290) {
			var _0x36ac1b = Ext.getCookie('net', 'p1'), _0x3e4377 = [];
			for (var _0x2171dd = 0; _0x2171dd < _0x187290.length; _0x2171dd++) {
				if (_0x187290[_0x2171dd].net == _0x36ac1b) {
					_0x3e4377 = _0x187290[_0x2171dd];
					break;
				}
			}
			return _0x3e4377;
		}
		function _0x515f4d(_0x51c45f, _0x44488f, _0x18bda4) {
			return ServerHosts.HLS_ANS_HOST + '/hls/m3u8/' + _0x51c45f + '/' + _0x44488f + '.m3u8?cdn=' + encodeURIComponent(_0x18bda4);
		}
		function _0x197561(_0x3709e4, _0x5dd805) {
			var _0xbfff3a = ServerHosts.s1_HOST.replace('http:/', '').replace('https:/', ''), _0x516ca1 = 0;
			_0x3709e4.src.indexOf(_0xbfff3a) > -1 && (_0x516ca1 = _0x3709e4.src.indexOf(_0xbfff3a) + _0xbfff3a.length);
			var _0x4de004 = _0x3709e4.src.substr(_0x516ca1);
			if (_0x5dd805.ispublic && _0x516ca1 == 0) {
				return {
					'src': _0x4de004,
					'type': 'video/mp4',
					'res': _0x3709e4.res
				};
			}
			return _0x5dd805.ispublic ? _0x3a7a77 ? {
				'src': _0x515f4d(_0x25111f.objectId, _0x3709e4.resolution, _0x5dd805.url),
				'type': 'application/x-mpegURL',
				'res': _0x3709e4.res
			} : {
				'src': _0x5dd805.url + _0x4de004,
				'type': 'video/mp4',
				'res': _0x3709e4.res
			} : _0x3a7a77 ? {
				'src': _0x515f4d(_0x25111f.objectId, _0x3709e4.resolution, _0x5dd805.url + _0xbfff3a),
				'type': 'application/x-mpegURL',
				'res': _0x3709e4.res
			} : {
				'src': _0x5dd805.url + _0xbfff3a + _0x4de004,
				'type': 'video/mp4',
				'res': _0x3709e4.res
			};
		}
		var _0x400542 = [], _0x1343bf = Ext.getCookie('resolution', 360);
		!_0x25111f.rootPath && (_0x25111f.rootPath = '/mooc-ans');
		_0x25111f.http && _0x400542.push({
			'src': _0x25111f.http,
			'type': 'video/mp4',
			'label': isEn ? 'SD' : '标清',
			'resolution': 'sd',
			'res': 360
		});
		_0x25111f.httphd && (_0x400542.push({
			'src': _0x25111f.httphd,
			'type': 'video/mp4',
			'label': isEn ? 'HD' : '高清',
			'resolution': 'hd',
			'res': 720
		}), _0x1343bf = Ext.getCookie('resolution', 720));
		_0x25111f.httpshd && _0x400542.push({
			'src': _0x25111f.httpshd,
			'type': 'video/mp4',
			'label': isEn ? 'UHD' : '超高清',
			'resolution': 'shd',
			'res': 1080
		});
		_0x25111f.httpmd && _0x400542.push({
			'src': _0x25111f.httpmd,
			'type': 'video/mp4',
			'label': isEn ? 'Extreme speed' : '极速',
			'resolution': 'md',
			'res': 240
		});
		if (_0x400542.length == 1) {
			var _0x580942 = _0x400542[0];
			_0x580942.label = isEn ? 'HD' : '高清';
		}
		var _0x198c52 = false;
		for (var _0x5b29d7 = 0; _0x5b29d7 < _0x400542.length; _0x5b29d7++) {
			if (_0x400542[_0x5b29d7].res == _0x1343bf) {
				_0x198c52 = true;
				break;
			}
		}
		!_0x198c52 && (_0x1343bf = 360);
		var _0x55dabe = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid), _0x385ccc = function (_0x498e7b, _0x5216f6, _0x438e8a, _0xa25d51) {
			try {
				if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && isUnFinishJob()) {
					return;
				}
				if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && isUnFinishJob()) {
					return;
				}
			} catch (_0x5a24a0) {
				console.log(_0x5a24a0);
			}
			if (_0x55dabe) {
				return;
			}
			var _0x2db79b = this;
			!_0x2db79b.logCount && (_0x2db79b.logCount = 0);
			videojs.xhr({
				'uri': _0x5216f6,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x4c14db, _0x214acb) {
				_0x2db79b.logCount++;
				if (_0x214acb.statusCode == 200) {
					_0x2db79b.logCount = 0;
					if (_0x214acb.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x214acb.body);
					if (d.isPassed) {
						try {
							typeof d.hasJobLimit != 'undefined' && d.hasJobLimit === true && (top.allowNextVideo = false, top.hasJobLimit = true);
							typeof d.videoTimeLimit != 'undefined' && d.videoTimeLimit === true && (top.allowNextVideo = false, top.videoTimeLimit = true);
						} catch (_0xcb4f60) {
							console.log(_0xcb4f60);
						}
						_0xa25d51();
					} else {
						!_0x438e8a && _0xa25d51();
					}
					return;
				}
				if (_0x2db79b.logCount >= 4) {
					_0x2db79b.logCount = 0;
					_0x498e7b.pause();
					if (_0x214acb.statusCode != 0) {
						if (_0x214acb.statusCode == 202 || _0x214acb.statusCode == 302) {
							try {
								parent.location.reload();
							} catch (_0x1e332a) {
								console.log(_0x1e332a.message);
							}
						} else {
							alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x214acb.statusCode + ')');
						}
					} else {
						alert('您的网络不稳定\uFF0C请您稍后继续...');
					}
				}
			});
		}, _0x5c2235 = function (_0x15200e, _0x53e848, _0x304960, _0x9edfaf) {
			if (!_0x25111f.reportUrl) {
				return;
			}
			if (_0x25111f.isFiled == 1 || _0x25111f.state == 1) {
				return;
			}
			var _0x2b766f = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x40de06 = (_0x25111f.startTime || '0') + '_' + (_0x25111f.endTime || _0x25111f.duration), _0x28c8d8 = 0, _0x54b134;
			_0x304960.toString().indexOf('-') != -1 ? (_0x54b134 = _0x304960.split('-'), _0x54b134.length == 2 && (_0x28c8d8 = parseInt(_0x54b134[1]) * 1000)) : _0x28c8d8 = _0x304960 * 1000;
			if (_0x28c8d8 == _0x25111f.duration * 1000 && _0x53e848 == 2) {
				return;
			}
			var _0x315a82 = Ext.String.format(_0x2b766f, _0x25111f.clazzId, _0x25111f.userid, _0x25111f.jobid || '', _0x25111f.objectId, _0x28c8d8, 'd_yHJ!$pdA~5', _0x25111f.duration * 1000, _0x40de06), _0x837dd1 = [
				_0x25111f.reportUrl,
				'/',
				_0x25111f.dtoken,
				'?clazzId=',
				_0x25111f.clazzId,
				'&playingTime=',
				_0x304960,
				'&duration=',
				_0x25111f.duration,
				'&clipTime=',
				_0x40de06,
				'&objectId=',
				_0x25111f.objectId,
				'&otherInfo=',
				_0x25111f.otherInfo,
				'&jobid=',
				_0x25111f.jobid,
				'&userid=',
				_0x25111f.userid,
				'&isdrag=',
				_0x53e848,
				'&view=pc',
				'&enc=',
				md5(_0x315a82),
				'&rt=',
				_0x25111f.rt,
				'&dtype=Video',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x385ccc(_0x15200e, _0x837dd1, _0x25111f.jobid, _0x9edfaf);
		};
		return {
			'language': 'zh-CN',
			'poster': _0x25111f.screenshot,
			'controls': true,
			'preload': 'none',
			'sources': _0x400542,
			'playlines': _0x51ef2c,
			'playbackRates': _0x25111f.doublespeed != 0 ? [
				0.75,
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
					'default': _0x1343bf,
					'dynamicLabel': true,
					'customSourcePicker': function (_0x11fa97, _0x253128, _0x14602e) {
						var _0x1c773c = _0x11fa97.currentPlayline();
						_0x11fa97.src(_0x253128.map(function (_0x131779) {
							return _0x197561(_0x131779, _0x1c773c);
						}));
						if (typeof aplus_queue != 'undefined') {
							function _0x331166() {
								var _0x24c310 = '';
								for (var _0x5e6162 = 1; _0x5e6162 <= 32; _0x5e6162++) {
									var _0x4011b3 = Math.floor(Math.random() * 16).toString(16);
									_0x24c310 += _0x4011b3;
									(_0x5e6162 == 8 || _0x5e6162 == 12 || _0x5e6162 == 16 || _0x5e6162 == 20) && (_0x24c310 += '-');
								}
								return _0x24c310;
							}
							typeof aplus_queue != 'undefined' && aplus_queue.push({
								'action': 'aplus.record',
								'arguments': [
									'video_positive_load',
									'CLK',
									{
										'video_name': _0x25111f.knowledgename || '',
										'video_id': _0x25111f.aplus_video_id || '',
										'resource_id': _0x25111f.aplus_resource_id || '',
										'resource_name': _0x25111f.coursename || '',
										'video_duration': _0x25111f.duration,
										'request_id': _0x331166()
									}
								]
							});
						}
						return _0x11fa97;
					}
				},
				'studyControl': { 'enableSwitchWindow': _0x25111f.enableSwitchWindow },
				'seekBarControl': {
					'objectId': _0x25111f.objectId,
					'headOffset': _0x25111f.headOffset,
					'enableFastForward': _0x25111f.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0x25111f.control,
					'reportTimeInterval': _0x25111f.reportTimeInterval,
					'isShowDanmu': _0x25111f.danmaku,
					'chapterCapture': _0x25111f.chapterCapture || 0,
					'captureInterval': _0x25111f.captureInterval || 600,
					'chapterCollectionType': _0x25111f.chapterCollectionType || 0,
					'startCapture': _0x25111f.startCapture,
					'endCapture': _0x25111f.endCapture,
					'playAginCapture': _0x25111f.playAginCapture,
					'playingCapture': _0x25111f.playingCapture,
					'playingLoopCapture': _0x25111f.playingLoopCapture,
					'duration': _0x25111f.duration,
					'isSupportFace': _0x25111f.isSupportFace || false,
					'isShowFaceCollection': _0x25111f.isShowFaceCollection,
					'jumpTimePointList': _0x25111f.jumpTimePointList,
					'attachmentId': _0x25111f.aId,
					'aplusVideoId': _0x25111f.aplus_video_id || '',
					'aplusResourseId': _0x25111f.aplus_resource_id || '',
					'aplusVideoName': _0x25111f.knowledgename || '',
					'aplusResourceName': _0x25111f.coursename || '',
					'sourcePlayer': 'video',
					'deviceType': _0x25111f.deviceType || 0,
					'danmuSet': _0x25111f.danmaku || 0,
					'sendLog': function (_0x171090, _0x7961d, _0x1e8c30, _0x4c6269) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x4e3a41 = 0;
						switch (_0x7961d) {
							case 'playing':
								_0x4e3a41 = 0;
								break;
							case 'drag':
								_0x4e3a41 = 1;
								break;
							case 'play':
								_0x4e3a41 = 3;
								break;
							case 'pause':
								_0x4e3a41 = 2;
								break;
							case 'ended':
								_0x4e3a41 = 4;
								break;
						}
						var _0x269757 = this;
						_0x5c2235(_0x171090, _0x4e3a41, _0x1e8c30, function () {
							try {
								_0x4e3a41 === 4 && typeof _0x4c6269 != 'undefined' && (_0x4c6269.sendDataLog('ended'), _0x171090.isFullscreen() && (closeFullScreen && closeFullScreen()), _0x4c6269.playNextVideo(_0x269757.attachmentId));
							} catch (_0x58cb2f) {
								console.log(_0x58cb2f);
							}
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				'timelineObjects': {
					'begins': _0x25111f.begins,
					'ends': _0x25111f.ends,
					'url': _0x25111f.rootPath + '/richvideo/initdatawithviewerV2?mid=' + _0x25111f.mid + '&cpi=' + _0x25111f.cpi + '&classid=' + _0x25111f.clazzId,
					'quizErrorReportUrl': _0x25111f.rootPath + '/question/addquestionerror?classid=' + _0x25111f.clazzId + '&cpi=' + _0x25111f.cpi,
					'validationUrl2': _0x25111f.rootPath + '/question/quiz-validation?classid=' + _0x25111f.clazzId + '&cpi=' + _0x430fba + '&objectid=' + _0x25111f.objectId,
					'quizRightCountUrl': _0x25111f.rootPath + '/question/quiz-rightcount?classid=' + _0x25111f.clazzId + '&cpi=' + _0x430fba
				},
				'customIframePlugin': {
					'eventArray': _0x25111f.eventArray,
					'supportHeartbeat': _0x25111f.supportHeartbeat,
					'courseid': _0x25111f.courseid,
					'clazzId': _0x25111f.clazzId,
					'userId': _0x25111f.userid,
					'cookieFid': _0x25111f.cookieFid,
					'knowledgeid': _0x25111f.knowledgeid,
					'objectid': _0x25111f.objectid,
					'playTime': _0x25111f.playTime,
					'videoEnc': _0x25111f.videoEnc,
					'headOffset': _0x25111f.headOffset
				},
				'customIframePluginV2': {
					'eventArray': _0x25111f.eventArray,
					'supportVideoPluginV1': _0x25111f.supportVideoPluginV1,
					'courseid': _0x25111f.courseid,
					'clazzId': _0x25111f.clazzId,
					'userId': _0x25111f.userid,
					'cookieFid': _0x25111f.cookieFid,
					'knowledgeid': _0x25111f.knowledgeid,
					'objectid': _0x25111f.objectid,
					'playTime': _0x25111f.playTime,
					'videoEnc': _0x25111f.videoEnc,
					'headOffset': _0x25111f.headOffset
				},
				'subtitle': {
					'translate': _0x25111f.chapterVideoTranslate,
					'subtitleUrl': _0x25111f.rootPath + '/richvideo/allsubtitle?mid=' + _0x25111f.mid + '&objectid=' + _0x25111f.objectId + '&courseid=' + _0x25111f.courseid,
					'subtitle': '/ananas/video-editor/sub?objectid=' + _0x25111f.subobjectid,
					'cookieFid': _0x25111f.cFid,
					'deviceType': _0x25111f.deviceType || 0
				},
				'marker': {
					'url': !_0x25111f.isNotMark ? '/ananas/getpoints?courseid=' + _0x25111f.courseid + '&mid=' + _0x25111f.mid : '',
					'ff': _0x25111f.enableFastForward,
					'videoTopicCloud': _0x25111f.videoTopicCloud
				},
				'videoJsPlayLine': {
					'defaults': _0x2eb7e7(_0x51ef2c),
					'dynamicLabel': true,
					'customSourcePicker': function (_0x427a40, _0x4e5b92, _0x568b09) {
						var _0x595d44 = _0x427a40.currentResolution().sources[0];
						return _0x427a40.src(_0x197561(_0x595d44, _0x4e5b92)), _0x427a40;
					}
				},
				'videoSelfSetting': {
					'cookieFid': _0x25111f.cFid,
					'subtitle': {
						'translate': _0x25111f.chapterVideoTranslate,
						'subtitleUrl': _0x25111f.rootPath + '/richvideo/allsubtitle?mid=' + _0x25111f.mid + '&objectid=' + _0x25111f.objectId + '&courseid=' + _0x25111f.courseid,
						'subtitle': '/ananas/video-editor/sub?objectid=' + _0x25111f.subobjectid
					},
					'deviceType': _0x25111f.deviceType || 0
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
	var _0x1189a4 = videojs.getPlugin('plugin'), _0x4119e6 = videojs.extend(_0x1189a4, {
		'constructor': function (_0x1c36f4, _0x465ddf) {
			_0x1189a4.call(this, _0x1c36f4, _0x465ddf);
			var _0x16474b = this, _0x108aaa = _0x465ddf.mouseElTarget, _0x1d3662 = 1;
			_0x465ddf.enableSwitchWindow !== 1 && (_0x1d3662 = 0);
			if (!_0x108aaa) {
				try {
					_0x108aaa = window.top ? window.top : window.document;
				} catch (_0x4214f7) {
					_0x108aaa = window.parent ? window.parent : window.document;
				}
			}
			try {
				Ext.fly(_0x108aaa).on('mouseout', function (_0x1cda22) {
					_0x1cda22 = _0x1cda22 ? _0x1cda22 : window.event;
					var _0x3fc629 = _0x1cda22.relatedTarget || _0x1cda22.toElement;
					!_0x3fc629 && (_0x1d3662 != 1 && _0x1c36f4.pause());
				});
			} catch (_0x528780) {
				console.log(_0x528780.message);
			}
			_0x16474b.singleton(_0x1c36f4);
		},
		'singleton': function (_0x3c5b1d) {
			var _0x53e454 = this, _0x5e7357 = parseInt(Math.random() * 9999999);
			_0x3c5b1d.on('play', function () {
				Ext.setCookie('videojs_id', _0x5e7357);
			});
			_0x3c5b1d.setInterval(function () {
				var _0x2fff5f = Ext.getCookie('videojs_id');
				typeof _0x2fff5f != 'undefined' && _0x2fff5f != _0x5e7357 && _0x3c5b1d.pause();
			}, 1000);
		}
	});
	videojs.registerPlugin('studyControl', _0x4119e6);
}());
(function () {
	var _0x5e39de = videojs.getComponent('SeekBar'), _0xdfecb8 = videojs.extend(_0x5e39de, {
		'constructor': function (_0x438a45, _0x40c774) {
			_0x5e39de.call(this, _0x438a45, _0x40c774);
			var _0x8e4131 = this;
			_0x438a45.ignorePause = false;
			_0x438a45.seekLog = false;
			_0x438a45.firstSeek = true;
			_0x438a45.disableSeek = function (_0x5e0a8b) {
				_0x8e4131.disableSeek(_0x5e0a8b);
			};
			_0x438a45.onlyBackward = function (_0x138e5b) {
				_0x8e4131.onlyBackward(_0x138e5b);
			};
			_0x438a45.getSeekBar = function () {
				return _0x8e4131;
			};
			_0x8e4131.on('slideractive', function () {
				_0x438a45.trigger('seekstart');
				_0x438a45.ignorePause = true;
				_0x438a45.ignorePlay = true;
				_0x438a45.ignoreSeek = false;
			});
			_0x8e4131.on('sliderinactive', function () {
				_0x438a45.trigger('seekend');
				_0x438a45.ignoreSeek = false;
			});
			_0x8e4131.maxPercent = 0;
			_0x438a45.on('timeupdate', function () {
				_0x8e4131.maxPercent = Math.max(_0x8e4131.getPercent(), _0x8e4131.maxPercent);
			});
		},
		'getCurrentTime_': function () {
			return this.player_.currentTime();
		},
		'getMaxPercent': function () {
			return this.maxPercent;
		},
		'isBackward': function (_0x38fc7d) {
			return this.maxPercent > this.calculateDistance(_0x38fc7d);
		},
		'handleMouseDown': function (_0x20e35c) {
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x20e35c)) {
					return;
				}
			}
			if (this['_disableSeek'] === true) {
				return;
			}
			_0x5e39de.prototype.handleMouseDown.call(this, _0x20e35c);
		},
		'handleMouseMove': function (_0x484352) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x484352)) {
					return;
				}
			}
			_0x5e39de.prototype.handleMouseMove.call(this, _0x484352);
		},
		'handleMouseUp': function (_0x256942) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x256942)) {
					return;
				}
			}
			_0x5e39de.prototype.handleMouseUp.call(this, _0x256942);
		},
		'disableSeek': function (_0x14284f) {
			var _0x346b62 = this;
			_0x346b62['_disableSeek'] = _0x14284f !== false;
			_0x346b62['_disableSeek'] ? _0x346b62.disable() : _0x346b62.enable();
		},
		'onlyBackward': function (_0x12f144) {
			var _0x1b0da1 = this;
			_0x1b0da1['_onlyBackward'] = _0x12f144 !== false;
		}
	});
	videojs.registerComponent('SeekBar', _0xdfecb8);
}());
(function () {
	var _0x338e38 = videojs.getPlugin('plugin'), _0x1edee4 = videojs.extend(_0x338e38, {
		'constructor': function (_0x18ce89, _0x1a204f) {
			_0x338e38.call(this, _0x18ce89, _0x1a204f);
			var _0x501dfc = this;
			_0x501dfc.objectId = _0x1a204f.objectId;
			_0x501dfc.firstClick = true;
			_0x501dfc.isSendLog_ = !!_0x1a204f.isSendLog;
			_0x501dfc.isShowDanmu_ = !!_0x1a204f.isShowDanmu;
			_0x501dfc.damuLastGetTime = 0;
			_0x501dfc.firstPlay = true;
			_0x501dfc.firstPlayFace = true;
			_0x501dfc.pausePlayFace = false;
			_0x501dfc.playingFace = false;
			_0x501dfc.playingFaceTime = 0;
			_0x501dfc.chapterCapture = _0x1a204f.chapterCapture || 0;
			_0x501dfc.captureInterval = _0x1a204f.captureInterval * 60 || 600;
			_0x501dfc.chapterCollectionType = _0x1a204f.chapterCollectionType || 0;
			_0x501dfc.isSupportFace = _0x1a204f.isSupportFace;
			_0x501dfc.isAlertTip = false;
			_0x501dfc.startCapture = _0x1a204f.startCapture;
			_0x501dfc.endCapture = _0x1a204f.endCapture;
			_0x501dfc.playAginCapture = _0x1a204f.playAginCapture;
			_0x501dfc.playingCapture = _0x1a204f.playingCapture;
			_0x501dfc.playingLoopCapture = _0x1a204f.playingLoopCapture;
			_0x501dfc.isShowFaceCollection = _0x1a204f.isShowFaceCollection;
			_0x501dfc.duration = _0x1a204f.duration;
			_0x501dfc.jumpTimePointList = _0x1a204f.jumpTimePointList;
			_0x501dfc.loopCaptureInterval = Math.floor(Math.random() * (parseInt(_0x501dfc.duration) - 0) + 1);
			_0x501dfc.attachmentId = _0x1a204f.attachmentId;
			_0x501dfc.aplusVideoId = _0x1a204f.aplusVideoId;
			_0x501dfc.aplusResourseId = _0x1a204f.aplusResourseId;
			_0x501dfc.aplusVideoName = _0x1a204f.aplusVideoName;
			_0x501dfc.aplusResourceName = _0x1a204f.aplusResourceName;
			_0x18ce89.dragCutOffTime = _0x1a204f.headOffset ? _0x1a204f.headOffset : 0;
			_0x18ce89.canDragSeekBar = false;
			_0x18ce89.playStatus = 'start';
			_0x501dfc.danmuSet = _0x1a204f.danmuSet;
			_0x501dfc.deviceType = _0x1a204f.deviceType || 0;
			!_0x1a204f.sendLog && (_0x1a204f.sendLog = function () {
			});
			_0x1a204f.headOffset && _0x18ce89.currentTime(_0x1a204f.headOffset);
			function _0x31df3b() {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'heartbeat',
						'CLK',
						{
							'video_name': _0x501dfc.aplusVideoName,
							'video_id': _0x501dfc.aplusVideoId,
							'resource_id': _0x501dfc.aplusResourseId,
							'resource_name': _0x501dfc.aplusResourceName,
							'request_id': _0x501dfc.getNewGuid()
						}
					]
				});
			}
			var _0x2d4f41 = null, _0x2df71b = 0, _0x315f7b = 0, _0x219a57 = _0x1a204f.reportTimeInterval || 60, _0x48803b = _0x219a57 * 1000, _0x2cdb7f = function (_0x45bd42, _0x21ad4c, _0x7ce7ce) {
				var _0x18d6ca = $('.vjs-tip2');
				_0x18d6ca.find('.vjs-tip-inner2').text(_0x7ce7ce);
				_0x18d6ca.css({
					'left': _0x45bd42 / _0x21ad4c.duration() * 100 + '%',
					'margin-left': -parseFloat(_0x18d6ca.width()) / 2 - 5 + 'px',
					'visibility': 'visible'
				});
				$('.vjs-default-skin').removeClass('vjs-user-inactive');
				$('.vjs-default-skin').addClass('vjs-user-active');
				setTimeout(function () {
					_0x18d6ca.css('visibility', 'hidden');
				}, 2000);
			}, _0x29ccbc = function (_0x157e8b, _0xb37bf, _0x2686d2) {
				if (!_0x501dfc.isSendLog_) {
					return;
				}
				var _0x2fe0ae = _0x501dfc.now_() - _0x2df71b;
				(_0x2fe0ae > _0x48803b || _0xb37bf === true) && (typeof _0x2686d2 != 'undefined' ? _0x1a204f.sendLog(_0x18ce89, _0x157e8b, _0x2686d2, _0x501dfc) : _0x1a204f.sendLog(_0x18ce89, _0x157e8b, _0x501dfc.sec_(_0x18ce89), _0x501dfc), _0x2df71b = _0x501dfc.now_());
			}, _0x1a4faa = function (_0x3bbe5d) {
				return _0x3bbe5d && _0x3bbe5d.sort && _0x3bbe5d.sort(function (_0x41bcd9, _0x47a22a) {
					return parseInt(_0x41bcd9) - parseInt(_0x47a22a);
				});
			}, _0x58631a = function (_0xfff3ae) {
				try {
					var _0x414908 = _0xfff3ae.otherPointTimes;
					if (_0x414908.length === 0) {
						return -1;
					}
					return _0x414908 = _0x1a4faa(_0x414908), _0x414908[0];
				} catch (_0x4732e4) {
					console.log(_0x4732e4);
				}
				return -1;
			}, _0x50312b = function (_0x19da03) {
				try {
					var _0x34b545 = _0x19da03.otherPointTimes, _0x4cca74 = _0x34b545.length;
					if (_0x4cca74 === 0) {
						return -1;
					}
					return _0x34b545 = _0x1a4faa(_0x34b545), _0x34b545[_0x4cca74 - 1];
				} catch (_0x38148b) {
					console.log(_0x38148b);
				}
				return -1;
			}, _0x164488 = function (_0x3c5831, _0x328729) {
				try {
					if (!_0x3c5831.paused() && typeof _0x3c5831.eventPoints != 'undefined') {
						var _0x522715 = _0x3c5831.currentTime(), _0x5dbf30 = 0;
						_0x3c5831.eventPoints.forEach(function (_0xa3e315) {
							_0xa3e315.text == '片头' && (_0x5dbf30 = _0xa3e315.time);
						});
						if (_0x328729.headOffset > 0 && _0x328729.headOffset < _0x5dbf30) {
							return;
						}
						if (_0x5dbf30 > 0 && parseInt(_0x522715) === 0) {
							var _0x44302c = parseInt(_0x58631a(_0x3c5831));
							if (_0x44302c >= 0 && _0x5dbf30 > _0x44302c) {
								return;
							}
							_0x3c5831.ignoreSeek = false;
							_0x3c5831.switchStatus = true;
							_0x3c5831.currentTime(_0x5dbf30);
							_0x2cdb7f(_0x5dbf30, _0x3c5831, '已跳过片头');
						}
					}
				} catch (_0x160e03) {
					console.log(_0x160e03);
				}
				try {
					var _0x5f057b = 0;
					if (!_0x3c5831.paused() && typeof _0x3c5831.eventPoints != 'undefined') {
						var _0x522715 = _0x3c5831.currentTime();
						_0x3c5831.eventPoints.forEach(function (_0x16a213) {
							_0x16a213.text == '片尾' && (_0x5f057b = _0x16a213.time);
						});
						if (_0x328729.headOffset > _0x5f057b) {
							return;
						}
						var _0x314487 = parseInt(_0x522715);
						if (_0x5f057b > 0 && _0x314487 === _0x5f057b) {
							var _0x1d6233 = parseInt(_0x50312b(_0x3c5831));
							if (_0x1d6233 >= 0 && _0x5f057b < _0x1d6233) {
								return;
							}
							_0x3c5831.ignoreSeek = false;
							_0x3c5831.switchStatus = true;
							_0x3c5831.currentTime(_0x328729.duration);
							_0x2cdb7f(_0x314487, _0x3c5831, '已跳过片尾');
						}
					}
				} catch (_0x952d5) {
					console.log(_0x952d5);
				}
			};
			_0x18ce89.on('play', function () {
				if (_0x1a204f.enableFastForward != 1 && !_0x18ce89.finished) {
					var _0x19af5d = _0x18ce89.currentTime(), _0x31d7db = _0x1a204f.headOffset ? _0x1a204f.headOffset : 0, _0x87a35 = Math.max(_0x31d7db, _0x18ce89.dragCutOffTime);
					if (parseInt(_0x19af5d) > _0x87a35) {
						_0x19af5d != 0 && _0x18ce89.currentTime(_0x87a35);
						bindVjsClick && bindVjsClick();
					}
				}
				try {
					if (typeof parent.supportH5Screen != 'undefined' && parent.supportH5Screen == true) {
						typeof parent.playVideoScreen != 'undefined' ? parent.playVideoScreen(_0x501dfc.objectId) : top.openScreen();
						return;
					}
				} catch (_0x26c3e0) {
					console.log(_0x26c3e0);
				}
				try {
					top.configFullScreen && reSizeVideoWindow();
				} catch (_0x130142) {
					console.log(_0x130142);
				}
				_0x18ce89.playStatus = 'play';
				if (_0x501dfc.deviceType == 2) {
					$('#reader .videoMaskDiv').remove();
					if ($('.barMask').length == 0) {
						var _0x44b2f0 = '<div class="barMask"></div>';
						$('.vjs-control-bar').append(_0x44b2f0);
					}
				}
				if (_0x501dfc.deviceType == 1 && $('.vjs-fullscreen-control-self').length == 0) {
					var _0x276ea7 = '<span class=\'vjs-fullscreen-control-self\' title=\'' + (isEn ? 'Fullscreen' : '全屏') + '\'><i></i></span>';
					$('.vjs-control-bar').append(_0x276ea7);
					$('.vjs-control-bar .vjs-fullscreen-control').remove();
					$('.vjs-fullscreen-control-self').click(function () {
						toggleFullScreen();
					});
				}
				parent.parent.videoPlayingFrame = window.frameElement;
				if (parent.parent.MultiEditor && parent.parent.insertEditorScreenShot || parent.MultiEditor && parent.insertEditorScreenShot) {
					if (_0x501dfc.deviceType == 1) {
						var _0xc712e = '<span class="vjs-screen-shot" title="' + (isEn ? 'Screenshot' : '截屏') + '"></span>';
						$('.vjs-control-bar').append(_0xc712e);
						if ($('.vjs-control-bar .vjs-screen-shot').length > 0) {
							var _0x254e95 = $('#video_html5_api').height(), _0x3af50c = parseInt(_0x254e95) / 2;
							$('.vjs-control-bar .vjs-screen-shot').css('top', _0x3af50c + 'px');
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
						if (_0x501dfc.deviceType == 2) {
							var _0xc712e = '<span class="vjs-screen-shot" title="' + (isEn ? 'Screenshot' : '截屏') + '"></span>';
							if ($('.vjs-control-bar .vjs-screen-shot').length == 0) {
								$('.vjs-control-bar').append(_0xc712e);
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
				_0x501dfc.danmuSet == 1 && !_0x18ce89.ignorePlay && _0x501dfc.getDanmuList('play', _0x18ce89);
				cancelOneSpan = false;
				leftcancel = false;
				_0x501dfc.firstPlay && (typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_positive_pybk',
						'OTHER',
						{
							'video_name': _0x501dfc.aplusVideoName,
							'video_id': _0x501dfc.aplusVideoId,
							'resource_id': _0x501dfc.aplusResourseId,
							'resource_name': _0x501dfc.aplusResourceName,
							'request_id': _0x501dfc.getNewGuid()
						}
					]
				}), typeof showHotMap == 'function' && showHotMap());
				try {
					if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && _0x501dfc.firstClick && isUnFinishJob()) {
						_0x501dfc.firstClick = false;
						_0x18ce89.pause();
						checkJobCountLimit(_0x18ce89, 0);
						return;
					}
					if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && _0x501dfc.firstClick && isUnFinishJob()) {
						_0x501dfc.firstClick = false;
						_0x18ce89.pause();
						checkJobCountLimit(_0x18ce89, 1);
						return;
					}
				} catch (_0x4262cf) {
					console.log(_0x4262cf);
				}
				_0x501dfc.isAlertTip = false;
				!_0x18ce89.ignorePlay && !_0x501dfc.firstPlay && (typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'continue_pybk_click',
						'CLK',
						{
							'video_name': _0x501dfc.aplusVideoName,
							'video_id': _0x501dfc.aplusVideoId,
							'resource_id': _0x501dfc.aplusResourseId,
							'resource_name': _0x501dfc.aplusResourceName
						}
					]
				}));
				if (_0x501dfc.chapterCapture == 0 || !_0x501dfc.isSupportFace || !_0x501dfc.isShowFaceCollection) {
					!_0x18ce89.ignorePlay ? (_0x29ccbc('play', true), _0x18ce89.ignoreSeek = true) : (_0x18ce89.ignorePlay = false, _0x18ce89.ignoreSeek = false, _0x18ce89.seekLog = false);
					_0x501dfc.sendDataLog('play');
					_0x501dfc.receiveStudyLog();
					_0x501dfc.firstPlay = false;
					_0x501dfc.pausePlayFace = true;
				} else {
					if (_0x501dfc.chapterCapture == 1) {
						if (_0x501dfc.firstPlay) {
							var _0x160922 = _0x501dfc.sec_(_0x18ce89);
							if (_0x160922 == 0 && (_0x501dfc.startCapture == 1 || typeof _0x501dfc.startCapture == 'undefined') && _0x501dfc.firstPlayFace) {
								_0x501dfc.playingFaceTime = _0x160922;
								_0x501dfc.playingFace = false;
								var _0x5a2fc6 = _0x501dfc.faceCollection('play', _0x18ce89, _0x501dfc.chapterCollectionType, 0);
								if (_0x5a2fc6 != 1) {
									return;
								}
							}
							!_0x18ce89.ignorePlay ? (_0x29ccbc('play', true), _0x18ce89.ignoreSeek = true) : (_0x18ce89.ignorePlay = false, _0x18ce89.ignoreSeek = false, _0x18ce89.seekLog = false);
							_0x501dfc.sendDataLog('play');
							_0x501dfc.receiveStudyLog();
							_0x501dfc.firstPlay = false;
							_0x501dfc.pausePlayFace = true;
						} else {
							if (_0x501dfc.playAginCapture == 1 && !_0x18ce89.ignorePlay && _0x501dfc.pausePlayFace) {
								_0x501dfc.playingFaceTime = _0x501dfc.sec_(_0x18ce89);
								_0x501dfc.playingFace = false;
								_0x501dfc.faceCollection('aginPlay', _0x18ce89, _0x501dfc.chapterCollectionType, -2);
								return;
							}
							_0x501dfc.pausePlayFace = true;
						}
					}
				}
				typeof aplus_queue != 'undefined' && (_0x2d4f41 = setInterval(_0x31df3b, 20000));
				_0x501dfc.seekLog = false;
			});
			_0x18ce89.tipFun = function (_0xc23ffd) {
				var _0x545571 = _0x501dfc.sec_(_0x18ce89);
				if (_0xc23ffd == 37) {
					var _0x1f3712 = _0x545571 - 5 < 0 ? 0 : _0x545571 - 5;
					_0x18ce89.currentTime(_0x1f3712);
				} else {
					if (_0xc23ffd == 39) {
						if (_0x545571 + 5 < _0x18ce89.dragCutOffTime) {
							_0x18ce89.currentTime(_0x545571 + 5);
						} else {
							_0x18ce89.currentTime(_0x18ce89.dragCutOffTime);
							if (!$('.toolTipBox1').is(':visible')) {
								$('.toolTipBox1').html($('#tipDiv .toolTipBox1').html());
								var _0x30678c = $('#video_html5_api').height();
								$('.toolTipBox1').css('top', parseInt(_0x30678c / 2) + 'px');
								$('.toolTipBox1').show();
								setTimeout(function () {
									$('.toolTipBox1').hide();
								}, 800);
							}
						}
					}
				}
			};
			_0x18ce89.on('seeked', function () {
				_0x18ce89.playStatus = 'seeked';
				if (_0x1a204f.enableFastForward != 1 && !_0x18ce89.switchStatus && !_0x18ce89.finished) {
					var _0x52256b = _0x18ce89.currentTime(), _0x4cd2db = _0x1a204f.headOffset ? _0x1a204f.headOffset : 0;
					max = Math.max(_0x4cd2db, _0x18ce89.dragCutOffTime);
					if (parseInt(_0x52256b) > max) {
						_0x18ce89.canDragSeekBar = false;
						_0x52256b != 0 && _0x18ce89.currentTime(max);
						bindVjsClick && bindVjsClick();
						return;
					} else {
						if (_0x52256b == max) {
							return;
						} else {
							_0x52256b < max && (_0x18ce89.canDragSeekBar = true);
						}
					}
				}
				!_0x18ce89.seekLog && (_0x18ce89.seekStartTime = _0x315f7b);
				if (!_0x18ce89.ignoreSeek) {
					if (!_0x18ce89.seekLog) {
						_0x18ce89.firstSeek && (_0x29ccbc('drag', true, _0x18ce89.seekStartTime + '-' + _0x501dfc.sec_(_0x18ce89)), _0x18ce89.firstSeek = false);
						function _0x453ec3() {
							_0x29ccbc('drag', true, _0x18ce89.seekStartTime + '-' + _0x501dfc.sec_(_0x18ce89));
							document.removeEventListener('mouseup', _0x453ec3);
						}
						document.addEventListener('mouseup', _0x453ec3);
						_0x501dfc.danmuSet == 1 && _0x501dfc.getDanmuList('seeked', _0x18ce89);
					}
					if ('video' == _0x1a204f.sourcePlayer) {
						typeof aplus_queue != 'undefined' && aplus_queue.push({
							'action': 'aplus.record',
							'arguments': [
								'time_shift_click',
								'OTHER',
								{
									'video_name': _0x501dfc.aplusVideoName,
									'video_id': _0x501dfc.aplusVideoId,
									'resource_id': _0x501dfc.aplusResourseId,
									'resource_name': _0x501dfc.aplusResourceName,
									'time_shift_time': _0x315f7b + '',
									'time_shift_duration': Math.abs(parseInt(_0x501dfc.sec_(_0x18ce89)) - parseInt(_0x315f7b))
								}
							]
						});
						typeof aplus_queue != 'undefined' && aplus_queue.push({
							'action': 'aplus.record',
							'arguments': [
								'video_progress_drag',
								'OTHER',
								{
									'video_name': _0x501dfc.aplusVideoName,
									'video_id': _0x501dfc.aplusVideoId,
									'resource_id': _0x501dfc.aplusResourseId,
									'resource_name': _0x501dfc.aplusResourceName
								}
							]
						});
					}
				} else {
					_0x18ce89.ignoreSeek = false;
				}
				_0x315f7b = _0x501dfc.sec_(_0x18ce89);
				_0x18ce89.ignorePlay = true;
				_0x18ce89.seekLog = true;
				delete _0x18ce89.switchStatus;
			});
			_0x18ce89.on('pause', function () {
				_0x18ce89.playStatus = 'pause';
				!_0x18ce89.ignorePause ? (_0x29ccbc('pause', true), _0x18ce89.ignorePlay = false, _0x18ce89.ignoreSeek = false, _0x18ce89.seekLog = false, typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_pause_click',
						'CLK',
						{
							'video_name': _0x501dfc.aplusVideoName,
							'video_id': _0x501dfc.aplusVideoId,
							'resource_id': _0x501dfc.aplusResourseId,
							'resource_name': _0x501dfc.aplusResourceName
						}
					]
				})) : _0x18ce89.ignorePause = false;
				_0x501dfc.sendDataLog('pause');
				cancelOneSpan = true;
				leftcancel = true;
				_0x2d4f41 && clearInterval(_0x2d4f41);
			});
			_0x18ce89.on('timeupdate', function () {
				_0x18ce89.playStatus = 'playing';
				var _0x3f7c2c = _0x501dfc.sec_(_0x18ce89);
				_0x3f7c2c > _0x18ce89.dragCutOffTime && _0x3f7c2c - _0x18ce89.dragCutOffTime < 2 && (_0x18ce89.dragCutOffTime = _0x3f7c2c);
				_0x501dfc.isSupportFace && _0x501dfc.isShowFaceCollection && _0x501dfc.chapterCapture == 1 && _0x501dfc.playingCapture == 1 && _0x501dfc.playingFace && (_0x501dfc.playingFace = false, _0x501dfc.playingLoopCapture == 1 ? _0x3f7c2c == _0x501dfc.loopCaptureInterval && _0x501dfc.faceCollection('playing', _0x18ce89, _0x501dfc.chapterCollectionType, -1) : _0x3f7c2c >= _0x501dfc.captureInterval && _0x3f7c2c % _0x501dfc.captureInterval == 0 && _0x501dfc.faceCollection('playing', _0x18ce89, _0x501dfc.chapterCollectionType, _0x3f7c2c));
				!_0x501dfc.playingFace && _0x3f7c2c - _0x501dfc.playingFaceTime > 2 && (_0x501dfc.playingFace = true);
				if (typeof parent.videoTrialDuration != 'undefined' && parent.videoTrialDuration != '-1') {
					var _0x172ab6 = parseInt(parent.videoTrialDuration) * 60;
					if (_0x172ab6 < _0x501dfc.sec_(_0x18ce89) && !_0x501dfc.isAlertTip) {
						_0x18ce89.pause();
						alert('视频只允许试看' + parent.videoTrialDuration + '分钟');
						_0x501dfc.isAlertTip = true;
						return;
					}
				}
				_0x501dfc.danmuSet == 1 && parseInt(_0x18ce89.currentTime()) >= this.damuLastGetTime && _0x501dfc.getDanmuList('timeupdate', _0x18ce89);
				_0x501dfc.danmuDisplay(_0x18ce89);
				if (_0x2df71b == 0) {
					_0x164488(_0x18ce89, _0x1a204f);
					return;
				}
				_0x501dfc.sec_(_0x18ce89) - _0x315f7b <= 1 && !_0x18ce89.ignorePlay && (_0x315f7b = _0x501dfc.sec_(_0x18ce89));
				_0x29ccbc('playing');
				_0x164488(_0x18ce89, _0x1a204f);
			});
			_0x18ce89.on('ended', function () {
				_0x18ce89.playStatus = 'ended';
				_0x501dfc.isShowFaceCollection && _0x501dfc.chapterCapture == 1 && _0x501dfc.endCapture == 1 && _0x501dfc.faceCollection('ended', _0x18ce89, _0x501dfc.chapterCollectionType, _0x501dfc.duration);
				_0x29ccbc('ended', true);
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_end_click',
						'CLK',
						{
							'video_name': _0x501dfc.aplusVideoName,
							'video_id': _0x501dfc.aplusVideoId,
							'resource_id': _0x501dfc.aplusResourseId,
							'resource_name': _0x501dfc.aplusResourceName,
							'request_id': _0x501dfc.getNewGuid(),
							'pybk_duration': _0x501dfc.duration,
							'full_play_count': 1
						}
					]
				});
				_0x2d4f41 && clearInterval(_0x2d4f41);
				cancelOneSpan = false;
				leftcancel = false;
				_0x18ce89.seekLog = false;
			});
		},
		'sec_': function (_0x3736a3) {
			return parseInt(_0x3736a3.currentTime());
		},
		'now_': function () {
			return new Date().getTime();
		},
		'isSendLog': function (_0x122658) {
			return _0x122658 && (this.isSendLog_ = !!_0x122658), this.isSendLog_;
		},
		'sendDataLog': function (_0x3ba309) {
			var _0x408564 = _0x3ba309 == 'pause' || _0x3ba309 == 'end' ? 2 : 1;
			typeof sendReadZTMediaLog != 'undefined' && sendReadZTMediaLog(_0x408564);
		},
		'receiveStudyLog': function () {
			typeof receiveStudyLog != 'undefined' && setTimeout(function () {
				receiveStudyLog();
			}, 50);
		},
		'getDanmuList': function (_0x5b6113, _0x13a1e1) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x24b730 = this.sec_(_0x13a1e1);
			if (_0x5b6113 == 'pause') {
				this.damuLastGetTime = 0;
				setTimeout(function () {
					getDanmuByTime(_0x5b6113, 0);
				}, 200);
				return;
			}
			_0x5b6113 == 'seeked' && this.danmuSet == 1 && $('.channel').empty();
			typeof getDanmuByTime != 'undefined' && setTimeout(function () {
				getDanmuByTime(_0x5b6113, _0x24b730);
			}, 200);
			if (_0x24b730 < this.damuLastGetTime) {
				return;
			}
			this.damuLastGetTime = _0x24b730 + 59;
		},
		'danmuDisplay': function (_0x558d72) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x445e55 = this.sec_(_0x558d72);
			typeof danmuPlay != 'undefined' && danmuPlay(_0x445e55);
		},
		'timer': function (_0x3f7161) {
		},
		'faceCollection': function (_0x2f903b, _0x3dd313, _0x1cc4d1, _0xe4efb0) {
			if (_0xe4efb0 != -2) {
				var _0x5a055a = this.jumpTimePointList;
				if (typeof _0x5a055a != 'undefined') {
					try {
						if (_0x5a055a.includes(_0xe4efb0)) {
							return this.firstPlayFace = false, this.pausePlayFace = false, this.playingFace = false, 1;
						}
					} catch (_0x7fac2f) {
					}
				}
			}
			_0x2f903b == 'play' ? typeof startFaceCollection != 'undefined' && (_0x3dd313.pause(), startFaceCollection(_0x3dd313, _0x1cc4d1, this, _0xe4efb0)) : _0x2f903b == 'ended' ? typeof startFaceCollection != 'undefined' && (_0x3dd313.pause(), startFaceCollection(_0x3dd313, _0x1cc4d1, this, _0xe4efb0)) : _0x2f903b == 'playing' ? (typeof startFaceCollection != 'undefined' && (_0x3dd313.pause(), this.playingFaceTime = this.sec_(_0x3dd313), startFaceCollection(_0x3dd313, _0x1cc4d1, this, _0xe4efb0), this.playingFace = false), this.pausePlayFace = false) : _0x2f903b == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (_0x3dd313.pause(), startFaceCollection(_0x3dd313, _0x1cc4d1, this, _0xe4efb0)), this.pausePlayFace = false);
		},
		'playNextVideo': function (_0x17de1a) {
			if (typeof chapterPlayNextVideo != 'undefined') {
				if (typeof top.allowNextVideo != 'undefined' && top.allowNextVideo === false) {
					top.hasJobLimit === true ? top.showJobLimitTip() : top.showVideoTimeLimitTip();
					return;
				}
				chapterPlayNextVideo(_0x17de1a);
			}
		},
		'getNewGuid': function () {
			var _0x4af6ef = '';
			for (var _0x3877f0 = 1; _0x3877f0 <= 32; _0x3877f0++) {
				var _0x18dd83 = Math.floor(Math.random() * 16).toString(16);
				_0x4af6ef += _0x18dd83;
				(_0x3877f0 == 8 || _0x3877f0 == 12 || _0x3877f0 == 16 || _0x3877f0 == 20) && (_0x4af6ef += '-');
			}
			return _0x4af6ef;
		}
	});
	videojs.registerPlugin('seekBarControl', _0x1edee4);
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
		'<div class="tkTopic_numbar fr">' + langMap.qTotal + ' {interactiveQuestionCount}' + langMap.qs + '<span id="rightAnswerNum">\uFF0C' + langMap.qAnsweR + ' <i id="rightNum"></i> ' + langMap.qs + '</span></div>',
		'</tpl> ',
		'<div class="tkTopic_title"><tpl if="questionType==\'多选题\'">' + langMap.multiQuestion + '<tpl elseif="questionType==\'单选题\'">' + langMap.singleQuestion + '<tpl else>' + langMap.trueQuestion + '</tpl></div>',
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
		'<a class="ans-videoquiz-submit bntLinear fr" id="videoquiz-submit">' + langMap.submitBtn + '</a>',
		'<a class="ans-videoquiz-submit bntLinear fr" id="videoquiz-submitting" style="display:none">' + langMap.Submitting + '</a>',
		'<a class="ans-videoquiz-continue bntLinear fr" id="videoquiz-continue"><tpl if="dtype==\'InteractiveQuiz\'">' + langMap.continueStudy + '<tpl else>' + langMap.continue2 + '</tpl></a>',
		'<tpl if="dtype==\'InteractiveQuiz\'">',
		'<a class="bntWhiteBorder ans-videoquiz-back fr" id="knowledgeBack">' + langMap.lookBack + '</a>',
		'</tpl>',
		'<tpl if="dtype==\'InteractiveQuiz\'"><span id="spanHas" class="rightInfo"></span><tpl else><span class="spanHas fr" id="spanHas">' + langMap.answerR + '</span></tpl>',
		'<span class="spanNot fr" id="spanNot"><tpl if="dtype==\'InteractiveQuiz\'">' + langMap.keepGood + '<tpl else>' + langMap.answerErr + '</tpl></span>',
		'<span class="spanNotBack fr" id="spanNotBack"><tpl if="dtype==\'InteractiveQuiz\'">' + langMap.keepGood + '<tpl else>' + langMap.answerErr + '\uFF0C</tpl>' + langMap.backView + ' {errorBackTime} ' + langMap.backMinutes + '</span>',
		'<tpl if="dtype==\'InteractiveQuiz\'">',
		'<span class="spanNotBack fr" id="spanNotBackPoint">' + langMap.keepGood + '</span>',
		'<a class="spanHref fl" href="javascript:" id="viewAnalysis">' + langMap.viewAnalysis + '</a>',
		'</div>',
		'<div class="tkParsing" id="tkParsing">',
		'<a class="tkParsing_dele" id="tkParsingDele" href="javascript:"></a>',
		'<div class="tkParsing_screll tkParsing_con" id="tkParsing_con"></div>',
		'</tpl>',
		'</div>',
		'</div>',
		{
			'getChecked': function (_0x110399, _0x542ea0, _0x5ccbfb) {
				try {
					if (typeof _0x110399 != 'undefined') {
						return _0x110399.indexOf(_0x542ea0) != -1 && _0x5ccbfb == 'InteractiveQuiz' ? 'checked="checked"' : '';
					}
					return '';
				} catch (_0x476093) {
					console.log(_0x476093);
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
		var _0x5e0827 = this, _0x28b0c8 = _0x5e0827.renderData, _0x52eed9 = _0x5e0827.quizRightCountUrl;
		typeof _0x52eed9 != 'undefined' && Ext.Ajax.request({
			'url': _0x52eed9,
			'params': {
				'eventid': _0x28b0c8.resourceId,
				'memberinfo': _0x28b0c8.memberinfo
			},
			'method': 'get',
			'success': function (_0xd339cb) {
				var _0x2c79fb = Ext.decode(_0xd339cb.responseText);
				_0x2c79fb.status && (Ext.get('rightNum').setHTML(_0x2c79fb.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
			}
		});
		_0x5e0827.callParent(arguments);
		var _0x3bad57 = _0x5e0827.scrollEl, _0x262d86 = $(_0x3bad57.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#A5A5A5',
			'boxzoom': false,
			'autohidemode': false
		});
		setInterval(function () {
			$(_0x3bad57.dom).getNiceScroll().resize();
		}, 300);
		_0x5e0827.scroller = _0x262d86;
		_0x5e0827.submitEl.on('click', function () {
			_0x5e0827.checkResult();
		});
		_0x5e0827.continueEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0xb53d6b) {
				console.log(_0xb53d6b);
			}
			_0x5e0827.fireEvent('continue');
		});
		_0x5e0827.backEl && _0x5e0827.backEl.on('click', function () {
			_0x5e0827.onerror && _0x5e0827.onerror();
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x40b825) {
				console.log(_0x40b825);
			}
			_0x5e0827.fireEvent('continue');
		});
		_0x5e0827.viewAnalysisEl && _0x5e0827.viewAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'inline-block');
		});
		_0x5e0827.delAnalysisEl && _0x5e0827.delAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'none');
		});
	},
	'checkResult': function () {
		var _0x281f09 = this, _0x547b80 = Ext.query('input', _0x281f09.el.dom), _0x471e46 = true, _0x5eacef = _0x281f09.renderData, _0x5d1746 = _0x5eacef.options, _0x290d96 = [], _0x103da1 = _0x281f09.quizErrorReportUrl, _0x2c93cc = _0x281f09.validationUrl2, _0x5b71eb = _0x5eacef.dtype;
		if (window.parent.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1) {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x58802e) {
				console.log(_0x58802e);
			}
			_0x281f09.fireEvent('continue');
			return;
		}
		Ext.each(_0x547b80, function (_0x3a5729, _0x17abf6) {
			_0x3a5729.checked && _0x290d96.push(_0x5d1746[_0x17abf6].name);
		});
		Ext.get('videoquiz-submit').setStyle('display', 'none');
		Ext.get('videoquiz-submitting').setStyle('display', 'block');
		if (typeof _0x2c93cc != 'undefined') {
			var _0x3fe8be = _0x290d96.join(',');
			Ext.Ajax.request({
				'url': _0x2c93cc,
				'params': {
					'eventid': _0x5eacef.resourceId,
					'memberinfo': _0x5eacef.memberinfo,
					'answerContent': _0x3fe8be
				},
				'method': 'get',
				'success': function (_0x1cb889) {
					Ext.get('videoquiz-submit').setStyle('display', 'block');
					Ext.get('videoquiz-submitting').setStyle('display', 'none');
					_0x5eacef.answerContent = _0x3fe8be;
					var _0x2f5e8f = Ext.decode(_0x1cb889.responseText), _0x11e5c0 = typeof _0x2f5e8f.isRight === 'undefined' ? false : _0x2f5e8f.isRight;
					!_0x11e5c0 ? _0x5b71eb == 'InteractiveQuiz' ? (_0x5eacef.errorBack && _0x5eacef.errorBack == 1 && (_0x5eacef.errorBackTime && _0x5eacef.errorBackTime > 0 || _0x5eacef.eBstartPoint && _0x5eacef.eBstartPoint != '') && (Ext.get('spanNotBackPoint').setStyle('display', 'block'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('knowledgeBack').setStyle('display', 'block')), _0x5eacef.errorContinue && _0x5eacef.errorContinue == 1 ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'), Ext.get('videoquiz-continue').setStyle('display', 'block')) : _0x5eacef.errorMustBack && _0x5eacef.errorMustBack == 1 ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'), Ext.get('videoquiz-continue').setStyle('display', 'none')) : (Ext.get('videoquiz-submit').setStyle('display', 'block'), Ext.get('spanNotBackPoint').setStyle('display', 'block'))) : _0x5eacef.errorBackTime && _0x5eacef.errorBackTime > 0 ? (Ext.get('spanNotBack').setStyle('display', 'block'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('videoquiz-continue').setStyle('display', 'block')) : Ext.get('spanNot').setStyle('display', 'block') : (Ext.get('spanHas').setStyle('display', 'block'), _0x5b71eb == 'InteractiveQuiz' && (Ext.get('videoquiz-continue').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'none'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('spanNot').setStyle('display', 'none'), Ext.get('spanNotBack').setStyle('display', 'none'), Ext.get('spanNotBackPoint').setStyle('display', 'none')));
					if (_0x2f5e8f.status) {
						if (_0x5b71eb == 'InteractiveQuiz') {
							_0x2f5e8f.rightAnswerCount && (Ext.get('rightNum').setHTML(_0x2f5e8f.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
							var _0x2ce6e4 = '', _0x332a6e = false;
							_0x2f5e8f.testAnalysis ? _0x2f5e8f.showAnswer && _0x2f5e8f.showAnswer > 0 ? (_0x2ce6e4 += langMap.answerR + '\uFF1A' + _0x2f5e8f.rightContent, _0x2ce6e4 += '</br>' + langMap.Analysis + '\uFF1A' + _0x2f5e8f.testAnalysis, Ext.get('viewAnalysis').setStyle('display', 'block'), _0x332a6e = true) : _0x2f5e8f.isRight && (_0x2ce6e4 += langMap.Analysis + '\uFF1A' + _0x2f5e8f.testAnalysis, Ext.get('viewAnalysis').setStyle('display', 'block'), _0x332a6e = true) : _0x2f5e8f.showAnswer && _0x2f5e8f.showAnswer > 0 ? (Ext.get('tkParsingDele').setStyle('display', 'none'), Ext.get('viewAnalysis').setStyle('display', 'none'), _0x2ce6e4 += langMap.answerR + '\uFF1A' + _0x2f5e8f.rightContent, _0x332a6e = true) : Ext.get('viewAnalysis').setStyle('display', 'none');
							if (_0x332a6e) {
								Ext.get('tkParsing_con').setHTML(_0x2ce6e4);
								Ext.get('tkParsing').setStyle('display', 'inline-block');
								var _0x1613d2 = _0x281f09.tkParseScrollEl, _0x3ae9c4 = $(_0x1613d2.dom).niceScroll({
									'cursorborder': '',
									'cursorwidth': 6,
									'cursorcolor': '#A5A5A5',
									'boxzoom': false,
									'autohidemode': true
								});
								_0x281f09.tkParseScroll = _0x3ae9c4;
							}
						}
						if (_0x2f5e8f.isRight && _0x5b71eb == 'InteractiveQuiz') {
							if (typeof _0x2f5e8f.showTip != 'undefined' && _0x2f5e8f.showTip) {
								var _0x3d21fb = _0x2f5e8f.percent;
								try {
									var _0x5793b8 = Ext.getCookie('fid', 0);
									_0x3d21fb = parseInt(_0x3d21fb);
									_0x5793b8 == '179952' && _0x3d21fb > 0 && (_0x3d21fb = 90 + _0x3d21fb * 0.1);
								} catch (_0x5da479) {
									console.log(_0x5da479);
								}
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">' + langMap.corretTip1 + langMap.corretTip2 + _0x3d21fb + langMap.corretTip3 + '</span></span>');
							} else {
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">' + langMap.corretTip1 + '</span></span>');
							}
						}
					}
					!_0x11e5c0 && _0x281f09.onerror && _0x5b71eb != 'InteractiveQuiz' && _0x281f09.onerror();
					!_0x11e5c0 && _0x5eacef.errorContinue == 1 && (_0x471e46 = true, Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('videoquiz-continue').setStyle('display', 'block'));
					if (_0x11e5c0 && Ext.get('videoquiz-continue').getStyle('display') == 'none') {
						try {
							top.configFullScreen && exitMediumSizeWindow();
						} catch (_0x5d5746) {
							console.log(_0x5d5746);
						}
						_0x281f09.fireEvent('continue');
					}
				},
				'error': function () {
					Ext.get('videoquiz-submit').setStyle('display', 'block');
					Ext.get('videoquiz-submitting').setStyle('display', 'none');
					_0x281f09.onerror && _0x5b71eb != 'InteractiveQuiz' && _0x281f09.onerror();
				}
			});
		}
		return _0x471e46;
	},
	'continueFun': function () {
		var _0x4b46f5 = this;
		_0x4b46f5.fireEvent('continue');
	}
});
Ext.define('ans.videojs.VideoImg', {
	'extend': 'Ext.Component',
	'xtype': 'videoimg',
	'renderTpl': [
		'<div class="sp_video_pic">',
		'<img src="{src}" class="sp_video_img" />',
		'<a class="jb_btn jb_btn_92 fs14 sp_video_pic_dele2" style="position:absolute;bottom:14px;right:20px;z-index:6;" href="javascript:">' + langMap.continueStudy + '</a>',
		'</div>'
	],
	'renderSelectors': { 'closeEl': 'a.sp_video_pic_dele2' },
	'afterRender': function () {
		var _0x3870e0 = this;
		_0x3870e0.callParent(arguments);
		try {
			var _0x1312e8 = document.querySelector('.sp_video_img');
			_0x1312e8.addEventListener('load', function () {
				_0x1312e8.naturalWidth >= _0x1312e8.naturalHeight ? _0x1312e8.naturalWidth >= 400 && (_0x1312e8.style.maxWidth = '70%', _0x1312e8.style.maxHeight = '70%', _0x1312e8.style.height = 'auto') : _0x1312e8.naturalHeight >= 400 && (_0x1312e8.style.maxHeight = '70%', _0x1312e8.style.maxWidth = '70%', _0x1312e8.style.width = 'auto');
			});
		} catch (_0x551b24) {
			console.log(_0x551b24);
		}
		_0x3870e0.el.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x3678b5) {
				console.log(_0x3678b5);
			}
			_0x3870e0.fireEvent('continue');
		});
		_0x3870e0.closeEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x49fd5a) {
				console.log(_0x49fd5a);
			}
			_0x3870e0.fireEvent('continue');
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
		'<div class="comment_tit"><a href="javascript:;" class="stow_icon fr"><img src="/ananas/modules/video/stow_icon.png" /></a><p class="fl">[' + langMap.Annotations + ']</p></div>',
		'<p class="comment_con">{description}</p>',
		'<a href="javascript:;" class="continueLearn fr">' + langMap.continueStudy + '</a>',
		'</div>'
	],
	'renderSelectors': {
		'stowEl': 'a.stow_icon',
		'commentOpenEl': 'div.comment_icon',
		'boxEl': 'div.comment_box',
		'continueEl': 'a.continueLearn'
	},
	'afterRender': function () {
		var _0x36b4cf = this, _0x4c646b = _0x36b4cf.commentOpenEl, _0x4e3837 = _0x36b4cf.boxEl;
		_0x36b4cf.callParent(arguments);
		_0x4c646b.on('click', function () {
			_0x4c646b.setStyle('display', 'none');
			_0x4e3837.setStyle('display', 'block');
			$('.comment_con').getNiceScroll().resize();
		});
		_0x36b4cf.stowEl.on('click', function () {
			_0x4e3837.setStyle('display', 'none');
			_0x4c646b.setStyle('display', 'block');
		});
		_0x36b4cf.continueEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x43388c) {
				console.log(_0x43388c);
			}
			_0x36b4cf.fireEvent('continue');
		});
		var _0x3d59bf = $('.comment_con').niceScroll({
			'cursorborder': '',
			'cursorwidth': '8px',
			'cursorcolor': '#ACB4BF',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x36b4cf.scroller = _0x3d59bf;
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
		var _0x331e54 = this;
		_0x331e54.callParent(arguments);
		try {
			dragFn && dragFn('#sp_video_ppt_pic', '#video_html5_api');
		} catch (_0x2ed29a) {
			console.log(_0x2ed29a);
		}
		var _0x3f68cc = Ext.get('video_html5_api').getStyle('height'), _0x1a3138 = Ext.get('video_html5_api').getStyle('width'), _0x16479b = parseInt(_0x3f68cc) > parseInt(_0x1a3138);
		_0x16479b ? Ext.get('sp_video_ppt_pic').addCls('sp_video_ppt_pic_w') : Ext.get('sp_video_ppt_pic').addCls('sp_video_ppt_pic_h');
		function _0xa1b5f2() {
			Ext.get('sp_size_big').setStyle('display', 'none');
			Ext.get('sp_size_small').setStyle('display', 'block');
		}
		function _0x776953() {
			Ext.get('sp_size_big').setStyle('display', 'block');
			Ext.get('sp_size_small').setStyle('display', 'none');
		}
		_0x331e54.sizeBigEl.on('click', function (_0x6bdde2) {
			_0x6bdde2.stopPropagation();
			_0x16479b ? _0x331e54.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0x331e54.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0xa1b5f2();
		});
		_0x331e54.sizeSmallEl.on('click', function (_0x252b9e) {
			_0x252b9e.stopPropagation();
			_0x16479b ? _0x331e54.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0x331e54.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x776953();
		});
		_0x331e54.sizeBigEl.on('touchend', function (_0x5b70ad) {
			_0x5b70ad.stopPropagation();
			_0x16479b ? _0x331e54.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0x331e54.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0xa1b5f2();
		});
		_0x331e54.sizeSmallEl.on('touchend', function (_0x3c83ef) {
			_0x3c83ef.stopPropagation();
			_0x16479b ? _0x331e54.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0x331e54.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x776953();
		});
	}
});
Ext.define('ans.videojs.TimelineObjects', {
	'extend': 'Ext.container.Container',
	'cls': 'ans-timelineobjects',
	'autoScroll': true,
	'hidden': true,
	'hideMode': 'visibility',
	'constructor': function (_0x4f06ee) {
		var _0x225b53 = this;
		_0x225b53.callParent(arguments);
		_0x225b53.bg = Ext.create('ans.videojs.TimelineObjectsBg', { 'renderTo': _0x4f06ee.renderTo });
		_0x225b53.objects = _0x4f06ee.objects && _0x4f06ee.objects.sort ? _0x225b53.sort_(_0x4f06ee.objects) : [];
		_0x225b53.current = 0;
		_0x225b53.showAnnotation = false;
	},
	'hideTimeline': function () {
		var _0x1b1960 = this;
		_0x1b1960.showAnnotation && (_0x1b1960.hide(), _0x1b1960.showAnnotation = false);
	},
	'showObject': function (_0x3ccd31, _0x25ddbd, _0x12ef9b) {
		var _0x48454c = this, _0x368979 = _0x48454c.getBox(), _0x535c8e = _0x48454c.items.getAt(0), _0x2d9c05, _0x4ec1e7 = function () {
			_0x2d9c05.destroy();
			_0x48454c.hide();
			_0x3ccd31.play();
			try {
				_0x3ccd31.eventCount && (_0x3ccd31.eventCount = _0x3ccd31.eventCount - 1);
			} catch (_0x420a72) {
				console.log(_0x420a72);
			}
		};
		_0x535c8e != null && _0x535c8e.destroy();
		if (_0x12ef9b) {
			_0x12ef9b.description && (_0x12ef9b.description = _0x48454c.htmlEncodeByRegExp(_0x12ef9b.description));
			if (_0x12ef9b.options && _0x12ef9b.options.length > 0) {
				for (let _0x1b0bc6 = 0; _0x1b0bc6 < _0x12ef9b.options.length; _0x1b0bc6++) {
					_0x12ef9b.options[_0x1b0bc6].description && (_0x12ef9b.options[_0x1b0bc6].description = _0x48454c.htmlEncodeByRegExp(_0x12ef9b.options[_0x1b0bc6].description));
				}
			}
		}
		if (_0x25ddbd == 'IMG') {
			var _0xf69440 = { 'src': _0x12ef9b.url.replace(/origin/, _0x368979.width + '_' + _0x368979.height) };
			_0x2d9c05 = _0x48454c.add({
				'xtype': 'videoimg',
				'renderData': _0xf69440
			});
			try {
				_0x3ccd31.eventCount && (_0x3ccd31.eventCount += 1);
			} catch (_0x1b4b66) {
				console.log(_0x1b4b66);
			}
		}
		if (_0x25ddbd == 'QUIZ') {
			var _0x172799 = function () {
			};
			if (_0x12ef9b.errorBackTime && _0x12ef9b.errorBackTime > 0) {
				var _0x2520a4 = _0x12ef9b.errorBackTime * 60;
				_0x172799 = function () {
					var _0x2d4ba1 = Math.max(_0x3ccd31.currentTime() - _0x2520a4, 0);
					_0x3ccd31.switchStatus = true;
					_0x3ccd31.currentTime(_0x2d4ba1);
				};
			}
			_0x2d9c05 = _0x48454c.add({
				'xtype': 'videoquiz',
				'renderData': _0x12ef9b,
				'quizErrorReportUrl': _0x48454c.quizErrorReportUrl,
				'validationUrl2': _0x48454c.validationUrl2,
				'onerror': _0x172799
			});
			try {
				_0x3ccd31.eventCount && (_0x3ccd31.eventCount += 1);
			} catch (_0x1402fb) {
				console.log(_0x1402fb);
			}
		}
		if (_0x25ddbd == 'InteractiveQuiz') {
			var _0x172799 = function () {
			};
			if (_0x12ef9b.errorBackTime && _0x12ef9b.errorBackTime > 0) {
				var _0x2520a4 = _0x12ef9b.errorBackTime * 60;
				_0x172799 = function () {
					var _0x428a7e = Math.max(_0x3ccd31.currentTime() - _0x2520a4, 0);
					_0x3ccd31.switchStatus = true;
					_0x3ccd31.currentTime(_0x428a7e);
				};
			}
			if (_0x12ef9b.errorBack == 1 && _0x12ef9b.eBstartPoint != '') {
				var _0x2520a4 = 0, _0x996816 = _0x12ef9b.eBstartPoint.split(':'), _0x38cd76 = _0x996816.length;
				_0x38cd76 > 0 && (_0x38cd76 == 1 ? _0x2520a4 = parseInt(_0x996816[0]) * 60 : _0x38cd76 == 2 && (_0x2520a4 = parseInt(_0x996816[0]) * 60 + parseInt(_0x996816[1])));
				_0x172799 = function () {
					_0x3ccd31.switchStatus = true;
					_0x3ccd31.currentTime(_0x2520a4);
				};
			}
			_0x12ef9b.dtype = 'InteractiveQuiz';
			_0x2d9c05 = _0x48454c.add({
				'xtype': 'videoquiz',
				'renderData': _0x12ef9b,
				'quizErrorReportUrl': _0x48454c.quizErrorReportUrl,
				'validationUrl2': _0x48454c.validationUrl2,
				'quizRightCountUrl': _0x48454c.quizRightCountUrl,
				'onerror': _0x172799
			});
			try {
				_0x3ccd31.eventCount && (_0x3ccd31.eventCount += 1);
			} catch (_0x21aab5) {
				console.log(_0x21aab5);
			}
		}
		if (_0x25ddbd == 'PPT') {
			if (_0x12ef9b.fp == 0) {
				return;
			}
			var _0x79fb1b = _0x12ef9b.url;
			_0x12ef9b.thumb ? _0x79fb1b = _0x12ef9b.thumb + _0x12ef9b.pageNo + '.png' : _0x79fb1b = _0x79fb1b.replace(/swfv2\/.*$/, 'thumb/' + _0x12ef9b.fp + '.png');
			var _0xf69440 = { 'src': _0x79fb1b };
			_0x2d9c05 = _0x48454c.add({
				'xtype': 'videoppt',
				'renderData': _0xf69440
			});
			try {
				_0x3ccd31.eventCount && (_0x3ccd31.eventCount += 1);
			} catch (_0x36bf37) {
				console.log(_0x36bf37);
			}
		}
		if (_0x25ddbd == 'SyncAnnotationEvent') {
			_0x2d9c05 = _0x48454c.add({
				'xtype': 'videoannotation',
				'renderData': _0x12ef9b
			});
			try {
				_0x3ccd31.eventCount && (_0x3ccd31.eventCount += 1);
			} catch (_0x15e0e2) {
				console.log(_0x15e0e2);
			}
			_0x3ccd31.pause();
			_0x48454c.showAnnotation = true;
		}
		if (!_0x2d9c05) {
			return;
		}
		_0x2d9c05.on('continue', function () {
			_0x4ec1e7();
		});
		var _0x4e9742 = !(_0x2d9c05.model === false);
		_0x48454c.showModel(_0x4e9742, _0x25ddbd);
		_0x4e9742 && _0x3ccd31.pause();
		_0x25ddbd == 'PPT' ? Ext.select('.ans-timelineobjects').setStyle('position', 'unset') : Ext.select('.ans-timelineobjects').setStyle('position', 'absolute');
	},
	'htmlEncodeByRegExp': function (_0x2d4d58) {
		var _0xc46e0e = '';
		if (_0x2d4d58.length == 0) {
			return '';
		}
		return _0xc46e0e = _0x2d4d58.replace(/&/g, '&amp;'), _0xc46e0e = _0xc46e0e.replace(/</g, '&lt;'), _0xc46e0e = _0xc46e0e.replace(/>/g, '&gt;'), _0xc46e0e = _0xc46e0e.replace(/\'/g, '&#39;'), _0xc46e0e = _0xc46e0e.replace(/\"/g, '&quot;'), _0xc46e0e;
	},
	'showModel': function (_0x15ef34, _0x2f0b84) {
		try {
			top.configFullScreen && _0x2f0b84 != 'PPT' && mediumSizeWindow();
		} catch (_0x5324dc) {
			console.log(_0x5324dc);
		}
		var _0x56516a = this;
		_0x56516a.show();
		if (_0x2f0b84 == 'SyncAnnotationEvent') {
			var _0x38ea50 = $('#video_html5_api').height();
			Ext.select('.comment_box').setStyle('height', _0x38ea50 + 'px');
		}
		_0x15ef34 ? (_0x56516a.removeCls('ans-timelineobjects-autosize'), _0x56516a.setAutoScroll(true), _0x56516a.bg.show()) : (_0x56516a.addCls('ans-timelineobjects-autosize'), _0x56516a.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
		this.bg.hide.apply(this.bg, arguments);
	},
	'updateTime': function (_0x19883c, _0x3476d5) {
		if (this.current >= this.objects.length || _0x19883c.scrubbing()) {
			return;
		}
		var _0x1973a1 = this, _0x152670 = _0x1973a1.objects[_0x1973a1.current], _0x6beacc = _0x152670.style, _0x3b482d = _0x152670.datas[0];
		if (_0x3476d5 >= _0x3b482d.startTime) {
			_0x1973a1.current++;
			setTimeout(function () {
				_0x1973a1.showObject(_0x19883c, _0x6beacc, _0x3b482d);
			}, 20);
		}
	},
	'resetTime': function (_0x867b4f, _0xcf3a48) {
		var _0x29c891 = this, _0x272264;
		for (_0x272264 = 0; _0x272264 < _0x29c891.objects.length; _0x272264++) {
			var _0x3c512c = _0x29c891.objects[_0x272264].datas[0].startTime;
			if (_0xcf3a48 <= _0x3c512c) {
				break;
			}
		}
		_0x29c891.current = _0x272264;
	},
	'sort_': function (_0x58058e) {
		return _0x58058e && _0x58058e.sort && _0x58058e.sort(function (_0x35b47a, _0x4acc55) {
			var _0x32d259 = _0x35b47a.datas[0].startTime, _0x318938 = _0x4acc55.datas[0].startTime;
			return _0x32d259 - _0x318938;
		});
	}
});
(function () {
	var _0x4496de = videojs.getPlugin('plugin'), _0x52f540 = videojs.extend(_0x4496de, {
		'constructor': function (_0x4fd558, _0x2a8fa4) {
			_0x4496de.call(this, _0x4fd558, _0x2a8fa4);
			if (!_0x2a8fa4.url) {
				return;
			}
			var _0xf59bbc = function (_0x6ffbfe) {
				try {
					var _0x1b1d8e = _0x6ffbfe.datas;
					if (_0x1b1d8e && _0x1b1d8e.length > 0) {
						return _0x1b1d8e[0].startTime;
					}
				} catch (_0x4076cd) {
					console.log(_0x4076cd);
				}
				return -1;
			}, _0x95f46c = this;
			_0x4fd558.eventPoints = [];
			_0x4fd558.otherPointTimes = [];
			var _0x213a56 = [];
			if (_0x2a8fa4.begins && _0x2a8fa4.begins > 0) {
				var _0x52bb5a = {
					'time': _0x2a8fa4.begins,
					'text': langMap.videoTitles
				};
				_0x213a56.push(_0x52bb5a);
			}
			if (_0x2a8fa4.ends && _0x2a8fa4.ends > 0) {
				var _0x52bb5a = {
					'time': _0x2a8fa4.ends,
					'text': langMap.videoTrailer
				};
				_0x213a56.push(_0x52bb5a);
			}
			_0x4fd558.eventPoints = _0x213a56;
			Ext.Ajax.request({
				'url': _0x2a8fa4.url,
				'async': false,
				'success': function (_0x9763a2) {
					if (_0x9763a2.status != 200) {
						return;
					}
					eval('var data=' + _0x9763a2.responseText);
					if (data && data.length > 0) {
						var _0x32ba67 = [];
						for (var _0x2bfeb5 = 0; _0x2bfeb5 < data.length; _0x2bfeb5++) {
							var _0x4801ee = data[_0x2bfeb5];
							if (_0x4801ee.style == 'InteractiveQuiz') {
								var _0x496513 = _0x4801ee.datas;
								if (_0x496513 && _0x496513.length > 0) {
									var _0x38d55c = {
										'time': _0x496513[0].startTime,
										'text': langMap.InteractiveQuizzes
									};
								}
								_0x32ba67.push(_0x38d55c);
							}
							var _0x58d50c = _0xf59bbc(_0x4801ee);
							_0x58d50c >= 0 && _0x4fd558.otherPointTimes.push(_0x58d50c);
						}
						_0x32ba67.forEach(function (_0x474eec) {
							_0x4fd558.eventPoints.push(_0x474eec);
						});
					}
					var _0x543974 = Ext.create('ans.videojs.TimelineObjects', {
						'renderTo': _0x4fd558.el_,
						'quizErrorReportUrl': _0x2a8fa4.quizErrorReportUrl,
						'validationUrl2': _0x2a8fa4.validationUrl2,
						'quizRightCountUrl': _0x2a8fa4.quizRightCountUrl,
						'objects': data
					});
					_0x4fd558.on('play', function () {
						_0x543974.resetTime(_0x4fd558, _0x4fd558.currentTime());
						_0x543974.hideTimeline();
					});
					_0x4fd558.on('seekend', function () {
						_0x543974.resetTime(_0x4fd558, _0x4fd558.currentTime());
						_0x543974.hideTimeline();
					});
					_0x4fd558.on('timeupdate', function () {
						!_0x4fd558.paused() && (_0x543974.updateTime(_0x4fd558, _0x4fd558.currentTime()), _0x543974.hideTimeline());
					});
				}
			});
		}
	});
	videojs.registerPlugin('timelineObjects', _0x52f540);
}());
Ext.define('ans.videojs.customIframe', {
	'extend': 'Ext.Component',
	'xtype': 'customIframe',
	'renderTpl': ['<iframe src="{src}" class="configIframe" style="height: 100%;width: 100%;left: 0;top: 0;right: 0;bottom: 0; background: rgba(0,0,0,.6);"></iframe>'],
	'afterRender': function () {
		var _0x1d5834 = this;
		_0x1d5834.callParent(arguments);
		window.addEventListener('message', function (_0x1d73e8) {
			typeof _0x1d73e8.data != 'undefined' && _0x1d73e8.data.opType === 'closeIframe' && _0x1d5834.fireEvent('continue');
		});
	}
});
Ext.define('ans.videojs.CustomIframe', {
	'extend': 'Ext.container.Container',
	'cls': 'ans-customIframe',
	'autoScroll': true,
	'hidden': true,
	'hideMode': 'visibility',
	'constructor': function (_0x27892e) {
		var _0x276a25 = this;
		_0x276a25.callParent(arguments);
		_0x276a25.supportHeartbeat = false;
		_0x276a25.courseid = '';
		_0x276a25.clazzId = '';
		_0x276a25.knowledgeid = '';
		_0x276a25.objectid = '';
		_0x276a25.playTime = 0;
		_0x276a25.requesting = false;
		_0x276a25.eventArray = [];
		_0x276a25.userId = '';
		_0x276a25.cookieFid = '';
		_0x276a25.headOffset = '';
		typeof _0x27892e.userId != 'undefined' && (_0x276a25.userId = _0x27892e.userId);
		typeof _0x27892e.cookieFid != 'undefined' && (_0x276a25.cookieFid = _0x27892e.cookieFid);
		typeof _0x27892e.headOffset != 'undefined' && (_0x276a25.headOffset = _0x27892e.headOffset);
		typeof _0x27892e.eventArray != 'undefined' && (_0x276a25.eventArray = _0x27892e.eventArray);
		typeof _0x27892e.supportHeartbeat != 'undefined' && (_0x276a25.supportHeartbeat = _0x27892e.supportHeartbeat);
		typeof _0x27892e.courseid != 'undefined' && (_0x276a25.courseid = _0x27892e.courseid);
		typeof _0x27892e.clazzId != 'undefined' && (_0x276a25.clazzId = _0x27892e.clazzId);
		typeof _0x27892e.knowledgeid != 'undefined' && (_0x276a25.knowledgeid = _0x27892e.knowledgeid);
		typeof _0x27892e.objectid != 'undefined' && (_0x276a25.objectid = _0x27892e.objectid);
		_0x276a25.lastHeartbeat = 0;
		_0x276a25.lastShowIFrame = 0;
		_0x276a25.objects = _0x27892e.objects && _0x27892e.objects.sort ? _0x276a25.sort_(_0x27892e.objects) : [];
		_0x276a25.eventArray.forEach(function (_0x59cdbe) {
			var _0x553465 = parseInt(_0x59cdbe.eventIntervalType);
			_0x553465 === 0 ? (_0x59cdbe.lastHeartbeat = 0, _0x59cdbe.pauseTimeRange = 0, _0x59cdbe.pauseTimeStamp = -1, _0x59cdbe.requesting = false) : _0x553465 === 1 && (_0x59cdbe.timeArray = sortArray(_0x59cdbe.timeArray), _0x59cdbe.index = 0);
		});
	},
	'showIFrame': function (_0x5204ff, _0x42e7db, _0x127302) {
		try {
			var _0x34576e = this;
			parseInt(_0x42e7db) === 1 ? _0x34576e.showObject(_0x5204ff, 'customIframe', _0x127302) : parseInt(_0x42e7db) === 2 && showPopIframe(_0x127302, _0x5204ff);
		} catch (_0x4184b8) {
			console.log(_0x4184b8);
		}
	},
	'deleteTemporaryEvent': function () {
		try {
			this.eventArray.forEach(function (_0x19c41b, _0x309aa3, _0x28e630) {
				typeof _0x19c41b.temporaryEvent != 'undefined' && _0x19c41b.temporaryEvent && _0x28e630.splice(_0x309aa3, 1);
			});
		} catch (_0x158faa) {
			console.log(_0x158faa);
		}
	},
	'initHeartbeat': function (_0x18d2ba, _0x3dffb5, _0x27b7a2) {
		var _0x459f4c = this;
		if (typeof _0x18d2ba == 'undefined' || _0x18d2ba == '') {
			return;
		}
		Ext.Ajax.request({
			'url': _0x18d2ba,
			'params': {
				'uid': _0x459f4c.userId,
				'schoolId': _0x459f4c.cookieFid,
				'moocClassId': _0x459f4c.clazzId,
				'moocCourseId': _0x459f4c.courseid,
				'chapterId': _0x459f4c.knowledgeid,
				'objectId': _0x459f4c.objectid,
				'videoProgress': _0x459f4c.headOffset,
				'totalVideoDuration': window.duration,
				'enc': _0x459f4c.videoEnc
			},
			'method': 'get',
			'success': function (_0x3e8bc1) {
				try {
					var _0x13affa = eval('(' + _0x3e8bc1.responseText + ')');
					if (typeof _0x13affa.result !== 'undefined' && parseInt(_0x13affa.result) === 1) {
						if (_0x13affa.showPop && typeof _0x13affa.event != 'undefined') {
							var _0x3c8b00 = _0x13affa.event.url + '?uid=' + _0x459f4c.userId + '&schoolId=' + _0x459f4c.cookieFid + '&moocClassId=' + _0x459f4c.clazzId + '&moocCourseId=' + _0x459f4c.courseid + '&chapterId=' + _0x459f4c.knowledgeid + '&objectId=' + _0x459f4c.objectid + '&videoProgress=' + _0x459f4c.headOffset + '&totalVideoDuration=' + window.duration + '&enc=' + _0x459f4c.videoEnc, _0x41e6e6 = {
								'url': _0x3c8b00,
								'temporaryEvent': true,
								'eventInterval': 0,
								'eventType': _0x13affa.event.eventType,
								'eventIntervalType': 0,
								'requesting': false,
								'lastHeartbeat': 0
							};
							_0x459f4c.eventArray.push(_0x41e6e6);
						}
					} else {
						typeof _0x13affa.errorCode != 'undefined' && alert('同步学习数据失败\uFF0C错误码\uFF1A' + _0x13affa.errorCode);
					}
					if (typeof _0x27b7a2 != 'undefined') {
						_0x27b7a2.requesting = false;
						console.log('requesting: false');
					}
				} catch (_0x2264f9) {
					console.log(_0x2264f9);
				}
			},
			'failure': function () {
				typeof _0x27b7a2 != 'undefined' && (_0x27b7a2.requesting = false);
				console.log('heartbeatUrl request error');
			}
		});
	},
	'seekVideoTime': function (_0x1c89ba, _0x163ccd) {
		try {
			var _0x3e342a = this;
			typeof _0x3e342a.cmp != 'undefined' && _0x3e342a.cmp != null && (_0x3e342a.cmp.destroy(), _0x3e342a.hide(), _0x1c89ba.eventCount = _0x1c89ba.eventCount - 1, _0x1c89ba.eventCount <= 0 && (_0x1c89ba.currentTime(_0x163ccd), _0x1c89ba.play()));
		} catch (_0x1b8889) {
			console.log(_0x1b8889);
		}
	},
	'showObject': function (_0x326946, _0x5dfda1, _0x44f103) {
		var _0x10ab87 = this, _0x56ed02 = _0x10ab87.items.getAt(0), _0x534a39, _0x32472e = function (_0x43ee04) {
			_0x534a39.destroy();
			_0x10ab87.hide();
			_0x43ee04.eventCount = _0x43ee04.eventCount - 1;
			_0x43ee04.eventCount <= 0 && _0x43ee04.play();
		};
		_0x56ed02 != null && _0x56ed02.destroy();
		_0x10ab87.cmp = null;
		if (_0x5dfda1 == 'customIframe') {
			_0x534a39 = _0x10ab87.add({
				'xtype': 'customIframe',
				'renderData': { 'src': _0x44f103 }
			});
			_0x326946.eventCount += 1;
		}
		if (!_0x534a39) {
			return;
		}
		_0x534a39.on('continue', function () {
			_0x32472e(_0x326946);
		});
		var _0x28d1a2 = !(_0x534a39.model === false);
		_0x10ab87.showModel(_0x28d1a2);
		_0x10ab87.cmp = _0x534a39;
		_0x28d1a2 && _0x326946.pause();
	},
	'showModel': function (_0x143020) {
		var _0x376bec = this;
		_0x376bec.show();
		_0x143020 ? (_0x376bec.removeCls('ans-timelineobjects-autosize'), _0x376bec.setAutoScroll(true)) : (_0x376bec.addCls('ans-timelineobjects-autosize'), _0x376bec.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
	},
	'updateTime': function (_0x2bb962, _0x514370) {
		try {
			if (this.supportHeartbeat && isStuViewPage() && !_0x2bb962.paused()) {
				var _0x476630 = new Date().getTime(), _0x45be29 = this, _0x550ec3 = 0;
				for (var _0x1a2dea = 0; _0x1a2dea < _0x45be29.eventArray.length; _0x1a2dea++) {
					var _0x2997dd = _0x45be29.eventArray[_0x1a2dea], _0x103c90 = parseInt(_0x2997dd.eventType), _0xe5e57b = parseInt(_0x2997dd.eventIntervalType);
					if (_0xe5e57b === 0) {
						if (_0x103c90 === 0 && _0x2997dd.requesting || _0x2bb962.scrubbing()) {
							continue;
						}
						var _0x3f5777 = _0x476630 - _0x2997dd.lastHeartbeat;
						_0x2997dd.pauseTimeRange > 0 && (_0x3f5777 = _0x3f5777 - _0x2997dd.pauseTimeRange);
						var _0x590fd9 = _0x3f5777 / 1000;
						_0x590fd9 = parseInt(_0x590fd9);
						if (_0x590fd9 >= _0x2997dd.eventInterval) {
							if (_0x103c90 === 1 || _0x103c90 === 2) {
								_0x550ec3++;
								if (_0x550ec3 > 1) {
									break;
								}
							}
							_0x2997dd.pauseTimeRange = 0;
							_0x2997dd.lastHeartbeat = _0x476630;
							_0x103c90 === 0 ? (_0x2997dd.requesting = true, _0x45be29.initHeartbeat(_0x2997dd.url, _0x2bb962, _0x2997dd)) : (_0x103c90 === 1 || _0x103c90 === 2) && (_0x45be29.showIFrame(_0x2bb962, _0x103c90, _0x2997dd.url), typeof _0x2997dd.temporaryEvent != 'undefined' && _0x2997dd.temporaryEvent && _0x45be29.deleteTemporaryEvent());
						}
					} else {
						if (_0xe5e57b === 1) {
							if (_0x2997dd.index >= _0x2997dd.timeArray.length || _0x2bb962.scrubbing()) {
								continue;
							}
							var _0x437e75 = _0x2997dd.timeArray[_0x2997dd.index];
							if (typeof _0x437e75 == 'undefined') {
								continue;
							}
							if (_0x514370 >= parseInt(_0x437e75)) {
								if (_0x103c90 === 1 || _0x103c90 === 2) {
									_0x550ec3++;
									if (_0x550ec3 > 1) {
										break;
									}
								}
								_0x2997dd.index++;
								var _0x3e8fc9 = _0x2997dd.url;
								_0x103c90 === 0 ? _0x45be29.initHeartbeat(_0x3e8fc9, _0x2bb962) : (_0x103c90 === 1 || _0x103c90 === 2) && _0x45be29.showIFrame(_0x2bb962, _0x103c90, _0x3e8fc9);
							}
						}
					}
				}
			}
		} catch (_0x5eb4fc) {
			console.log(_0x5eb4fc);
		}
	},
	'resetTime': function (_0xce9f69, _0x26768f) {
		try {
			var _0x545eda = this, _0x238432;
			for (_0x238432 = 0; _0x238432 < _0x545eda.eventArray.length; _0x238432++) {
				var _0x59ffe4 = _0x545eda.eventArray[_0x238432];
				if (parseInt(_0x59ffe4.eventIntervalType) === 1) {
					for (var _0x1cb176 = 0; _0x1cb176 < _0x59ffe4.timeArray.length; _0x1cb176++) {
						var _0x4f470f = _0x59ffe4.timeArray[_0x1cb176];
						if (_0x26768f <= _0x4f470f) {
							break;
						}
					}
					_0x59ffe4.index = _0x1cb176;
				}
			}
		} catch (_0x1eb6af) {
			console.log(_0x1eb6af);
		}
	}
});
;
;
function sortArray(_0x1d8182) {
	try {
		return _0x1d8182 && _0x1d8182.sort && _0x1d8182.sort(function (_0x525a64, _0x117a11) {
			return _0x525a64 - _0x117a11;
		});
	} catch (_0x251a8b) {
		console.log(_0x251a8b);
	}
	return _0x1d8182;
}
(function () {
	var _0x1df5c1 = videojs.getPlugin('plugin'), _0x58653c = videojs.extend(_0x1df5c1, {
		'constructor': function (_0x16a471, _0x10afe8) {
			if (typeof _0x10afe8.supportHeartbeat == 'undefined' || !_0x10afe8.supportHeartbeat) {
				return;
			}
			_0x1df5c1.call(this, _0x16a471, _0x10afe8);
			_0x16a471.pauseTimeStamp = 0;
			_0x16a471.pauseTimeRange = 0;
			var _0xbe32cc = null;
			try {
				_0xbe32cc = Ext.create('ans.videojs.CustomIframe', {
					'renderTo': _0x16a471.el_,
					'supportHeartbeat': _0x10afe8.supportHeartbeat,
					'eventArray': _0x10afe8.eventArray,
					'courseid': _0x10afe8.courseid,
					'clazzId': _0x10afe8.clazzId,
					'knowledgeid': _0x10afe8.knowledgeid,
					'objectid': _0x10afe8.objectid,
					'videoEnc': _0x10afe8.videoEnc,
					'userId': _0x10afe8.userId,
					'cookieFid': _0x10afe8.cookieFid,
					'headOffset': _0x10afe8.headOffset
				});
			} catch (_0x581142) {
				console.log(_0x581142);
			}
			if (_0xbe32cc == null) {
				return;
			}
			_0x16a471.on('play', function () {
				try {
					var _0x5046de = new Date().getTime();
					_0xbe32cc.eventArray.forEach(function (_0x5f1195) {
						var _0x25b51e = parseInt(_0x5f1195.eventIntervalType);
						if (_0x25b51e === 0) {
							if (_0x5f1195.pauseTimeStamp > 0) {
								_0x5f1195.pauseTimeStamp < _0x5f1195.lastHeartbeat && (_0x5f1195.pauseTimeStamp = _0x5f1195.lastHeartbeat);
								var _0x49d31a = _0x5046de - _0x5f1195.pauseTimeStamp;
								_0x5f1195.pauseTimeRange += _0x49d31a;
							}
							_0x5f1195.pauseTimeStamp = 0;
						}
					});
					_0xbe32cc.resetTime(_0x16a471, _0x16a471.currentTime());
				} catch (_0x169e2f) {
					console.log(_0x169e2f);
				}
			});
			_0x16a471.on('seekend', function () {
				_0xbe32cc.resetTime(_0x16a471, _0x16a471.currentTime());
			});
			_0x16a471.on('pause', function () {
				try {
					var _0x231973 = new Date().getTime();
					_0xbe32cc.eventArray.forEach(function (_0x2f0bbd) {
						var _0x102d8b = parseInt(_0x2f0bbd.eventIntervalType);
						_0x102d8b === 0 && (_0x2f0bbd.pauseTimeStamp = _0x231973);
					});
				} catch (_0x524dc7) {
					console.log(_0x524dc7);
				}
			});
			_0x16a471.on('timeupdate', function () {
				try {
					!_0x16a471.paused() && _0xbe32cc.updateTime(_0x16a471, parseInt(_0x16a471.currentTime()));
					_0xbe32cc.playTime = _0x16a471.currentTime();
				} catch (_0x3815c3) {
					console.log(_0x3815c3);
				}
			});
			window.addEventListener('message', function (_0xf2cc70) {
				try {
					if (!_0x10afe8.supportHeartbeat || !isStuViewPage()) {
						return;
					}
					var _0x2db5f4 = _0xf2cc70.data;
					if (typeof _0x2db5f4 == 'undefined') {
						_0xbe32cc.resetDiv(_0x16a471);
						return;
					}
					var _0x4841d6 = parseInt(_0x10afe8.duration);
					if (_0x2db5f4.opType === 'fastForward') {
						var _0x7c993f = _0x2db5f4.value;
						if (typeof _0x7c993f === 'undefined') {
							_0xbe32cc.resetDiv(_0x16a471);
							return;
						}
						_0x7c993f = parseInt(_0x7c993f);
						if (!(_0x7c993f > 0)) {
							_0xbe32cc.resetDiv(_0x16a471);
							return;
						}
						_0x16a471.ignoreSeek = false;
						_0x16a471.switchStatus = true;
						var _0x53d2cc = _0x16a471.currentTime();
						_0x53d2cc = parseInt(_0x53d2cc);
						var _0x4eac8a = _0x53d2cc + _0x7c993f;
						if (_0x4eac8a > _0x4841d6) {
							_0xbe32cc.resetDiv(_0x16a471);
							return;
						}
						_0xbe32cc.seekVideoTime(_0x16a471, _0x4eac8a);
						return;
					}
					if (_0x2db5f4.opType === 'videoStartTime') {
						var _0x7c993f = _0x2db5f4.value;
						if (typeof _0x7c993f === 'undefined') {
							_0xbe32cc.resetDiv(_0x16a471);
							return;
						}
						_0x7c993f = parseInt(_0x7c993f);
						if (!(_0x7c993f >= 0) || _0x7c993f > _0x4841d6) {
							_0xbe32cc.resetDiv(_0x16a471);
							return;
						}
						_0x16a471.ignoreSeek = false;
						_0x16a471.switchStatus = true;
						_0xbe32cc.seekVideoTime(_0x16a471, _0x7c993f);
					}
				} catch (_0x2ae435) {
					console.log(_0x2ae435);
				}
			});
		}
	});
	videojs.registerPlugin('customIframePlugin', _0x58653c);
}());
Ext.define('ans.videojs.customIframeV2', {
	'extend': 'Ext.Component',
	'xtype': 'customIframeV2',
	'renderTpl': ['<iframe src="{src}" class="configIframe" style="height: 100%;width: 100%;left: 0;top: 0;right: 0;bottom: 0; background: rgba(0,0,0,.6);"></iframe>'],
	'afterRender': function () {
		var _0x4feba4 = this;
		_0x4feba4.callParent(arguments);
		window.addEventListener('message', function (_0x1f31e4) {
			try {
				typeof _0x1f31e4.data != 'undefined' && typeof _0x1f31e4.data.eventType != 'undefined' && _0x1f31e4.data.eventType === 'closeInnerPagePop' && _0x4feba4.fireEvent('continue');
			} catch (_0x1d5910) {
				console.log(_0x1d5910);
			}
		});
	}
});
Ext.define('ans.videojs.CustomIframeV2', {
	'extend': 'Ext.container.Container',
	'cls': 'ans-customIframeV2',
	'autoScroll': true,
	'hidden': true,
	'hideMode': 'visibility',
	'constructor': function (_0x28f107) {
		var _0x2d9b9f = this;
		_0x2d9b9f.callParent(arguments);
		_0x2d9b9f.firstClick = true;
		_0x2d9b9f.supportVideoPluginV1 = false;
		_0x2d9b9f.courseid = '';
		_0x2d9b9f.clazzId = '';
		_0x2d9b9f.knowledgeid = '';
		_0x2d9b9f.objectid = '';
		_0x2d9b9f.playTime = 0;
		_0x2d9b9f.eventArray = [];
		_0x2d9b9f.userId = '';
		_0x2d9b9f.cookieFid = '';
		_0x2d9b9f.headOffset = '';
		typeof _0x28f107.userId != 'undefined' && (_0x2d9b9f.userId = _0x28f107.userId);
		typeof _0x28f107.cookieFid != 'undefined' && (_0x2d9b9f.cookieFid = _0x28f107.cookieFid);
		typeof _0x28f107.headOffset != 'undefined' && (_0x2d9b9f.headOffset = _0x28f107.headOffset);
		typeof _0x28f107.eventArray != 'undefined' && (_0x2d9b9f.eventArray = _0x28f107.eventArray);
		typeof _0x28f107.supportVideoPluginV1 != 'undefined' && (_0x2d9b9f.supportVideoPluginV1 = _0x28f107.supportVideoPluginV1);
		typeof _0x28f107.courseid != 'undefined' && (_0x2d9b9f.courseid = _0x28f107.courseid);
		typeof _0x28f107.clazzId != 'undefined' && (_0x2d9b9f.clazzId = _0x28f107.clazzId);
		typeof _0x28f107.knowledgeid != 'undefined' && (_0x2d9b9f.knowledgeid = _0x28f107.knowledgeid);
		typeof _0x28f107.objectid != 'undefined' && (_0x2d9b9f.objectid = _0x28f107.objectid);
		_0x2d9b9f.lastHeartbeat = 0;
		_0x2d9b9f.lastShowIFrame = 0;
		_0x2d9b9f.objects = _0x28f107.objects && _0x28f107.objects.sort ? _0x2d9b9f.sort_(_0x28f107.objects) : [];
		_0x2d9b9f.eventArray.forEach(function (_0x53826a) {
			var _0x34d8b3 = parseInt(_0x53826a.eventIntervalType);
			_0x34d8b3 === 0 ? (_0x53826a.lastHeartbeat = 0, _0x53826a.pauseTimeRange = 0, _0x53826a.pauseTimeStamp = -1) : _0x34d8b3 === 1 && (_0x53826a.timeArray = sortArray(_0x53826a.timeArray), _0x53826a.index = 0);
		});
	},
	'showIFrame': function (_0x4edbc6, _0x1c53b2, _0x30a094) {
		try {
			var _0x320263 = this;
			parseInt(_0x1c53b2) === 1 ? _0x320263.showObject(_0x4edbc6, 'customIframeV2', _0x30a094) : parseInt(_0x1c53b2) === 2 && showPopIframe(_0x30a094, _0x4edbc6);
		} catch (_0x2ce5a3) {
			console.log(_0x2ce5a3);
		}
	},
	'deleteTemporaryEvent': function () {
		try {
			this.eventArray.forEach(function (_0x49df0a, _0xc5a15e, _0x169d53) {
				typeof _0x49df0a.temporaryEvent != 'undefined' && _0x49df0a.temporaryEvent && _0x169d53.splice(_0xc5a15e, 1);
			});
		} catch (_0x1c7053) {
			console.log(_0x1c7053);
		}
	},
	'pushVideoInfo2Window': function (_0x31c4f5) {
		var _0x487804 = this, _0x2cbef3 = {
			'eventType': _0x31c4f5,
			'videoMessage': {
				'fid': _0x487804.cookieFid,
				'uid': _0x487804.userId,
				'moocClassId': _0x487804.clazzId,
				'moocCourseId': _0x487804.courseid,
				'chapterId': _0x487804.knowledgeid,
				'objectId': _0x487804.objectid,
				'videoProgress': _0x487804.headOffset,
				'totalVideoDuration': window.duration,
				'enc': _0x487804.videoEnc
			}
		};
		pushVideoInfo(_0x2cbef3);
	},
	'seekVideoTime': function (_0x587a89, _0x5ea9db) {
		try {
			var _0x173fa7 = this;
			typeof _0x173fa7.cmp != 'undefined' && _0x173fa7.cmp != null && (_0x173fa7.cmp.destroy(), _0x173fa7.hide(), _0x587a89.eventCount = _0x587a89.eventCount - 1, _0x587a89.eventCount <= 0 && (_0x587a89.currentTime(_0x5ea9db), _0x587a89.play()));
		} catch (_0x32c318) {
			console.log(_0x32c318);
		}
	},
	'showObject': function (_0x5db9c4, _0x196eb1, _0x4711cc) {
		var _0x1b1f46 = this, _0x33ec70 = _0x1b1f46.items.getAt(0), _0x505c6d, _0x51c4f7 = function (_0x2d9499) {
			_0x505c6d.destroy();
			_0x1b1f46.hide();
			_0x2d9499.eventCount = _0x2d9499.eventCount - 1;
			_0x2d9499.eventCount <= 0 && _0x2d9499.play();
		};
		_0x33ec70 != null && _0x33ec70.destroy();
		_0x1b1f46.cmp = null;
		if (_0x196eb1 == 'customIframeV2') {
			_0x505c6d = _0x1b1f46.add({
				'xtype': 'customIframeV2',
				'renderData': { 'src': _0x4711cc }
			});
			_0x5db9c4.eventCount += 1;
		}
		if (!_0x505c6d) {
			return;
		}
		_0x505c6d.on('continue', function () {
			_0x51c4f7(_0x5db9c4);
		});
		var _0x52e054 = !(_0x505c6d.model === false);
		_0x1b1f46.showModel(_0x52e054);
		_0x1b1f46.cmp = _0x505c6d;
		_0x52e054 && _0x5db9c4.pause();
	},
	'showModel': function (_0x25e9e0) {
		var _0x595e9f = this;
		_0x595e9f.show();
		_0x25e9e0 ? (_0x595e9f.removeCls('ans-timelineobjects-autosize'), _0x595e9f.setAutoScroll(true)) : (_0x595e9f.addCls('ans-timelineobjects-autosize'), _0x595e9f.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
	},
	'updateTime': function (_0x32b52f, _0x44ef9a) {
		try {
			if (this.supportVideoPluginV1 && isStuViewPage() && !_0x32b52f.paused()) {
				var _0x3a002e = new Date().getTime(), _0x381b0d = this, _0x482a78 = 0;
				for (var _0x14a065 = 0; _0x14a065 < _0x381b0d.eventArray.length; _0x14a065++) {
					var _0x397945 = _0x381b0d.eventArray[_0x14a065], _0x10759d = parseInt(_0x397945.eventType), _0x231c37 = parseInt(_0x397945.eventIntervalType);
					if (_0x231c37 === 0) {
						if (_0x32b52f.scrubbing()) {
							continue;
						}
						var _0x49c9ba = _0x397945.lastHeartbeat == 0, _0x202af7 = _0x3a002e - _0x397945.lastHeartbeat;
						_0x397945.pauseTimeRange > 0 && (_0x202af7 = _0x202af7 - _0x397945.pauseTimeRange);
						var _0x3539cc = _0x202af7 / 1000;
						_0x3539cc = parseInt(_0x3539cc);
						if (_0x3539cc >= _0x397945.eventInterval) {
							if (_0x10759d === 1 || _0x10759d === 2) {
								_0x482a78++;
								if (_0x482a78 > 1) {
									break;
								}
							}
							_0x397945.pauseTimeRange = 0;
							_0x397945.lastHeartbeat = _0x3a002e;
							_0x10759d === 0 ? !_0x49c9ba && _0x381b0d.pushVideoInfo2Window('playing') : (_0x10759d === 1 || _0x10759d === 2) && (_0x381b0d.showIFrame(_0x32b52f, _0x10759d, _0x397945.url), typeof _0x397945.temporaryEvent != 'undefined' && _0x397945.temporaryEvent && _0x381b0d.deleteTemporaryEvent());
						}
					} else {
						if (_0x231c37 === 1) {
							if (_0x397945.index >= _0x397945.timeArray.length || _0x32b52f.scrubbing()) {
								continue;
							}
							var _0x3254d6 = _0x397945.timeArray[_0x397945.index];
							if (typeof _0x3254d6 == 'undefined') {
								continue;
							}
							if (_0x44ef9a >= parseInt(_0x3254d6)) {
								if (_0x10759d === 1 || _0x10759d === 2) {
									_0x482a78++;
									if (_0x482a78 > 1) {
										break;
									}
								}
								_0x397945.index++;
								var _0x2d1d65 = _0x397945.url;
								_0x10759d === 0 ? _0x381b0d.pushVideoInfo2Window('playing') : (_0x10759d === 1 || _0x10759d === 2) && _0x381b0d.showIFrame(_0x32b52f, _0x10759d, _0x2d1d65);
							}
						}
					}
				}
			}
		} catch (_0x2bc345) {
			console.log(_0x2bc345);
		}
	},
	'resetTime': function (_0x641603, _0x447c32) {
		try {
			var _0x2b3615 = this, _0x23f328;
			for (_0x23f328 = 0; _0x23f328 < _0x2b3615.eventArray.length; _0x23f328++) {
				var _0x75cd00 = _0x2b3615.eventArray[_0x23f328];
				if (parseInt(_0x75cd00.eventIntervalType) === 1) {
					for (var _0x4b3606 = 0; _0x4b3606 < _0x75cd00.timeArray.length; _0x4b3606++) {
						var _0x552b5c = _0x75cd00.timeArray[_0x4b3606];
						if (_0x447c32 <= _0x552b5c) {
							break;
						}
					}
					_0x75cd00.index = _0x4b3606;
				}
			}
		} catch (_0x149ee8) {
			console.log(_0x149ee8);
		}
	}
});
;
function sortArray(_0x49150f) {
	try {
		return _0x49150f && _0x49150f.sort && _0x49150f.sort(function (_0x2f18f8, _0xf95724) {
			return _0x2f18f8 - _0xf95724;
		});
	} catch (_0x2575e0) {
		console.log(_0x2575e0);
	}
	return _0x49150f;
}
;
(function () {
	var _0x39c373 = videojs.getPlugin('plugin'), _0x438174 = videojs.extend(_0x39c373, {
		'constructor': function (_0x36d198, _0x29e973) {
			if (typeof _0x29e973.supportVideoPluginV1 == 'undefined' || !_0x29e973.supportVideoPluginV1) {
				return;
			}
			_0x39c373.call(this, _0x36d198, _0x29e973);
			_0x36d198.pauseTimeStamp = 0;
			_0x36d198.pauseTimeRange = 0;
			var _0x481f0c = null;
			try {
				_0x481f0c = Ext.create('ans.videojs.CustomIframeV2', {
					'renderTo': _0x36d198.el_,
					'supportVideoPluginV1': _0x29e973.supportVideoPluginV1,
					'eventArray': _0x29e973.eventArray,
					'courseid': _0x29e973.courseid,
					'clazzId': _0x29e973.clazzId,
					'knowledgeid': _0x29e973.knowledgeid,
					'objectid': _0x29e973.objectid,
					'videoEnc': _0x29e973.videoEnc,
					'userId': _0x29e973.userId,
					'cookieFid': _0x29e973.cookieFid,
					'headOffset': _0x29e973.headOffset
				});
			} catch (_0x1af5c5) {
				console.log(_0x1af5c5);
			}
			if (_0x481f0c == null) {
				return;
			}
			_0x36d198.on('play', function () {
				if (typeof parent.parent.frameInitSuccess != 'undefined' && parent.parent.frameInitSuccess == false) {
					alert('配置文件加载中,请稍后重新播放');
					_0x36d198.pause();
					return;
				}
				!_0x481f0c.firstClick ? _0x481f0c.pushVideoInfo2Window('continuePlay') : _0x481f0c.pushVideoInfo2Window('play');
				_0x481f0c.firstClick = false;
				try {
					var _0x36693a = new Date().getTime();
					_0x481f0c.eventArray.forEach(function (_0x4b27d3) {
						var _0xb1e399 = parseInt(_0x4b27d3.eventIntervalType);
						if (_0xb1e399 === 0) {
							if (_0x4b27d3.pauseTimeStamp > 0) {
								_0x4b27d3.pauseTimeStamp < _0x4b27d3.lastHeartbeat && (_0x4b27d3.pauseTimeStamp = _0x4b27d3.lastHeartbeat);
								var _0x14c60c = _0x36693a - _0x4b27d3.pauseTimeStamp;
								_0x4b27d3.pauseTimeRange += _0x14c60c;
							}
							_0x4b27d3.pauseTimeStamp = 0;
						}
					});
					_0x481f0c.resetTime(_0x36d198, _0x36d198.currentTime());
				} catch (_0x45fe77) {
					console.log(_0x45fe77);
				}
			});
			_0x36d198.on('seekend', function () {
				_0x481f0c.resetTime(_0x36d198, _0x36d198.currentTime());
			});
			_0x36d198.on('pause', function () {
				try {
					if (typeof parent.parent.frameInitSuccess != 'undefined' && parent.parent.frameInitSuccess == false) {
						return;
					}
					_0x36d198.currentTime() < window.duration && _0x481f0c.pushVideoInfo2Window('pause');
					var _0x4d6f4b = new Date().getTime();
					_0x481f0c.eventArray.forEach(function (_0x591cb8) {
						var _0x5ade2a = parseInt(_0x591cb8.eventIntervalType);
						_0x5ade2a === 0 && (_0x591cb8.pauseTimeStamp = _0x4d6f4b);
					});
				} catch (_0x2c4464) {
					console.log(_0x2c4464);
				}
			});
			_0x36d198.on('timeupdate', function () {
				try {
					!_0x36d198.paused() && _0x481f0c.updateTime(_0x36d198, parseInt(_0x36d198.currentTime()));
					_0x481f0c.playTime = _0x36d198.currentTime();
				} catch (_0x5b34f4) {
					console.log(_0x5b34f4);
				}
			});
			_0x36d198.on('ended', function () {
				_0x481f0c.pushVideoInfo2Window('end');
			});
			window.addEventListener('message', function (_0x8c1d6b) {
				try {
					if (!_0x29e973.supportVideoPluginV1 || !isStuViewPage()) {
						return;
					}
					var _0x4162ab = _0x8c1d6b.data;
					if (typeof _0x4162ab == 'undefined') {
						return;
					}
					if (typeof _0x4162ab.eventType == 'undefined') {
						return;
					}
					var _0x5b0973 = _0x4162ab.eventType, _0x1a1f7b = _0x4162ab.pageUrl;
					if (_0x5b0973 == 'outPagePop') {
						if (_0x36d198.paused()) {
							return;
						}
						if (typeof _0x1a1f7b == 'undefined') {
							return;
						}
						showPopIframe(_0x1a1f7b, _0x36d198);
						return;
					}
					if (_0x5b0973 == 'innerPagePop') {
						if (_0x36d198.paused()) {
							return;
						}
						if (typeof _0x1a1f7b == 'undefined') {
							return;
						}
						_0x481f0c.showObject(_0x36d198, 'customIframeV2', _0x1a1f7b);
					}
				} catch (_0x5970bb) {
					console.log(_0x5970bb);
				}
			});
		}
	});
	videojs.registerPlugin('customIframePluginV2', _0x438174);
}());
(function () {
	var _0x50d2d3 = videojs.getPlugin('plugin'), _0x144f63 = videojs.extend(_0x50d2d3, {
		'constructor': function (_0x1f2ecb, _0xf16af8) {
			_0x50d2d3.call(this, _0x1f2ecb, _0xf16af8);
			if (!_0xf16af8.url) {
				return;
			}
			var _0x22abda = this;
			Ext.Ajax.request({
				'url': _0xf16af8.url,
				'async': false,
				'success': function (_0x3e703d) {
					if (_0x3e703d.status != 200) {
						return;
					}
					eval('var data=' + _0x3e703d.responseText);
					if (!data.status) {
						return;
					}
					var _0x1a1a69 = videojs('video');
					if (_0x1a1a69 && typeof _0x1a1a69.markers === 'function') {
						var _0x1d95ff = _0x1f2ecb.eventPoints;
						_0x1d95ff.push.apply(_0x1d95ff, data.list);
						_0x1a1a69.markers({
							'markerTip': {
								'display': true,
								'text': function (_0x229c31) {
									return _0x229c31.text;
								}
							},
							'markers': _0x1d95ff,
							'onMarkerClick': function (_0x30515b) {
								if (_0xf16af8.ff != 1) {
									return false;
								}
								var _0x2d9e60 = $(this).data('marker-key');
								return _0x1f2ecb.currentTime(_0x30515b.time), false;
							}
						});
					}
					if (data.list && data.list.length > 0) {
						var _0x3532a7 = [], _0x472b2b = {
							_0x3f0060: _0x48f0f4,
							_0x3f0060: _0x1045e1
						};
						for (var _0x3b7bd3 = 0; _0x3b7bd3 < data.list.length; _0x3b7bd3++) {
							var _0x476cf7 = data.list[_0x3b7bd3], _0x3f0060 = _0x476cf7.text;
							if (!_0x472b2b[_0x3f0060]) {
								var _0x48f0f4 = [];
								_0x48f0f4.push(_0x476cf7);
								_0x3532a7.push(_0x3f0060);
							} else {
								var _0x1045e1 = _0x472b2b[_0x3f0060];
								_0x1045e1.push(_0x476cf7);
							}
						}
						function _0x42d30c(_0x2ae50d) {
							var _0x1b7a30 = '<div class="zsCloud_box"><h2 class="zsCloud_seltime">选择时间</h2><div class="zsCloud_div"><div class="zsCloud_div_list">';
							for (var _0x32bacc = 0; _0x32bacc < _0x2ae50d.length; _0x32bacc++) {
								var _0x1c95e8 = _0x2ae50d[_0x32bacc], _0x58e7af = Ext.fly(_0x299e57.elements[0]).select('.topicId' + _0x1c95e8.topicid + ':not(.markertime)'), _0x5e393e = videojs.formatTime(_0x1c95e8.time);
								_0x58e7af && _0x58e7af.elements[0] && _0x58e7af.elements[0].parentElement.remove();
								_0x1b7a30 += '<div class="zsCloud_item topicId' + _0x1c95e8.topicid + '" data-marker-time="' + _0x1c95e8.time + '" title="' + _0x5e393e + '" onclick="markersPlayer(this)">' + _0x5e393e + '</div>';
							}
							return _0x1b7a30 += '</div></div></div>', _0x1b7a30;
						}
						Ext.select('.zsCloud').setStyle('display', 'block');
						var _0x299e57 = Ext.select('.zsCloud_ul');
						if (_0x299e57 && _0x299e57.elements[0]) {
							var _0x52b1ed;
							for (var _0x5ed69e = 0; _0x5ed69e < _0x3532a7.length; _0x5ed69e++) {
								var _0x590351 = _0x3532a7[_0x5ed69e], _0x2e9105 = _0x472b2b[_0x590351], _0x49d3f4 = '';
								if (_0x2e9105) {
									if (_0x2e9105.length == 1) {
										var _0x14b932 = _0x2e9105[0], _0x53f87b = Ext.fly(_0x299e57.elements[0]).select('.topicId' + _0x14b932.topicid + ':not(.markertime)'), _0x56c323 = videojs.formatTime(_0x14b932.time);
										_0x53f87b && _0x53f87b.elements[0] && _0x53f87b.elements[0].parentElement.remove();
										_0x49d3f4 = '<li><span class=\'topicId' + _0x14b932.topicid + ' markertime\' data-marker-time=\'' + _0x14b932.time + '\' title=\'' + _0x56c323 + '\' onclick=\'markersPlayer(this)\'>' + _0x14b932.text + '</span></li>';
									} else {
										_0x49d3f4 = '<li class="zsCloud_select"><span class="zsCloud_span">' + _0x590351 + '</span>';
										_0x2e9105 && _0x2e9105.length > 0 ? _0x49d3f4 += _0x42d30c(_0x2e9105) : _0x49d3f4 += '</li>';
									}
								}
								_0x52b1ed ? _0x52b1ed = Ext.DomHelper.insertHtml('afterEnd', _0x52b1ed.elements[0], _0x49d3f4) : _0x52b1ed = Ext.DomHelper.insertHtml('afterBegin', _0x299e57.elements[0], _0x49d3f4);
								_0x52b1ed = Ext.fly(_0x52b1ed).select('');
							}
						}
						_0xf16af8.videoTopicCloud && _0xf16af8.videoTopicCloud == 1 && (Ext.select('.zsCloud_down').setStyle('display', 'block'), Ext.select('.zsCloud_body').setStyle('display', 'block'));
					}
					var _0x5381f8 = new Map(), _0x3e55f9 = new Array();
					if (data.list && data.list.length > 0) {
						for (var _0x3b7bd3 = 0; _0x3b7bd3 < data.list.length; _0x3b7bd3++) {
							var _0x1168e4 = data.list[_0x3b7bd3].topicid, _0x1ccbc3 = _0x5381f8.get(_0x1168e4);
							!_0x1ccbc3 && (_0x1ccbc3 = {}, _0x1ccbc3.text = data.list[_0x3b7bd3].text, _0x1ccbc3.time = data.list[_0x3b7bd3].time, _0x1ccbc3.topicid = data.list[_0x3b7bd3].topicid, _0x1ccbc3.weight = 0, _0x1ccbc3.html = {
								'data-marker-time': data.list[_0x3b7bd3].time,
								'onclick': 'markersPlayer(this)'
							}, _0x5381f8.set(_0x1168e4, _0x1ccbc3), _0x3e55f9.push(_0x1ccbc3));
							_0x1ccbc3.weight += 1;
						}
					}
					$(function () {
						_0x3e55f9.length != 0 && $('#word_cloud').jQCloud(_0x3e55f9);
						function _0x2914d1(_0x5a011d) {
							$(_0x5a011d).niceScroll({
								'cursorborder': '',
								'cursorwidth': 8,
								'cursorcolor': '#DADFE6',
								'boxzoom': false,
								'autohidemode': true
							});
							setInterval(function () {
								$(_0x5a011d).getNiceScroll().resize();
							}, 300);
						}
						$('.zsCloud_box').each(function (_0x27d832) {
							$(this).find('.zsCloud_div').attr('id', 'zsCloud_div_' + _0x27d832);
							_0x2914d1('#zsCloud_div_' + _0x27d832);
						});
					});
					$('.zsCloud_down').click(function () {
						var _0x4e5d1d = $('.zsCloud_body');
						_0x4e5d1d.is(':visible') ? (_0x4e5d1d.hide(), $(this).addClass('zsCloud_up'), $(this).text('展开')) : (_0x4e5d1d.show(), $(this).removeClass('zsCloud_up'), $(this).text('收起'));
					});
				}
			});
		}
	});
	videojs.registerPlugin('marker', _0x144f63);
}());
(function () {
	var _0x4395c3 = videojs.getPlugin('plugin'), _0x40eb63 = videojs.extend(_0x4395c3, {
		'constructor': function (_0x564ab1, _0x1874f4) {
			_0x4395c3.call(this, _0x564ab1, _0x1874f4);
			var _0x2f65b3 = this, _0x72386 = _0x1874f4.subtitleUrl, _0x1062ea = function (_0x143a49) {
				var _0x289204 = _0x143a49.match(/support\/(\w+).\w+/);
				if (_0x289204) {
					return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0x289204[1];
				}
			}, _0x19c713 = function (_0x16dd8d, _0xbff1ad, _0x566d15) {
				_0x564ab1.addRemoteTextTrack({
					'kind': 'subtitles',
					'srclang': 'cn',
					'label': _0x16dd8d,
					'src': _0xbff1ad,
					'default': _0x566d15
				}, true);
			};
			_0x564ab1.ready(function () {
				if (_0x1874f4.cookieFid == 179952 && _0x1874f4.deviceType == 1) {
					return;
				}
				_0x72386 && Ext.Ajax.request({
					'url': _0x72386,
					'success': function (_0x49ed56) {
						if (_0x49ed56.status != 200) {
							return;
						}
						eval('var subs=' + _0x49ed56.responseText);
						var _0x10fb5e = 0, _0x13108d = 0;
						subs.length > 0 && Ext.each(subs, function (_0x2c130e) {
							_0x1874f4.translate == 1 && _0x2c130e.name == 'English' ? (_0x2c130e.selected = true, _0x13108d = _0x10fb5e) : _0x2c130e.selected = false;
							_0x19c713(_0x2c130e.name, _0x1062ea(_0x2c130e.url), _0x2c130e.selected);
							_0x10fb5e++;
						});
						if (_0x1874f4.translate == 1) {
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').setHTML(isEn ? 'Translate' : '翻译');
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').addCls('vjs-hide-content');
						}
						setTimeout(function () {
							var _0x229181 = _0x564ab1.textTracks();
							_0x1874f4.translate == 1 ? _0x229181 && _0x229181[_0x13108d] ? _0x229181[_0x13108d].mode = 'showing' : _0x229181 && _0x229181[0] && (_0x229181[0].mode = 'showing') : _0x229181 && _0x229181[0] && (_0x229181[0].mode = 'showing');
						}, 500);
					}
				});
				var _0x3b2ec9 = _0x564ab1.textTrackSettings;
				_0x3b2ec9.setValues({
					'backgroundColor': '#000',
					'backgroundOpacity': '0',
					'edgeStyle': 'uniform'
				});
				_0x3b2ec9.updateDisplay();
			});
		}
	});
	videojs.registerPlugin('subtitle', _0x40eb63);
}());
(function () {
	(function (_0x44a5d3, _0xa272fb) {
		var _0x12f146 = {}, _0x31bd57, _0x1e0757, _0x4d891a, _0x588be9, _0x3b7475 = _0xa272fb.getComponent('MenuButton'), _0x23d9f4 = _0xa272fb.extend(_0x3b7475, {
			'constructor': function (_0x2e699b, _0x4b6ff1, _0x6d03b4) {
				this.label = _0x6d03b4;
				_0x3b7475.call(this, _0x2e699b, _0x4b6ff1);
				this.controlText('Setting');
				this.el().appendChild(_0x6d03b4);
			}
		});
		function _0x427c5c(_0x13c721, _0x263d1e) {
			var _0x3d4d1a = _0x263d1e.subtitle || {};
			if (_0x3d4d1a) {
				var _0x133787 = _0x3d4d1a.subtitleUrl, _0x3c1a3b = _0x3d4d1a.translate, _0x43642b = function (_0x5ba3fd) {
					var _0x4e8ebe = _0x5ba3fd.match(/support\/(\w+).\w+/);
					if (_0x4e8ebe) {
						return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0x4e8ebe[1];
					}
				}, _0x50594d = function (_0xd4dd93, _0x440057, _0x33ba52) {
					_0x13c721.addRemoteTextTrack({
						'kind': 'subtitles',
						'srclang': 'cn',
						'label': _0xd4dd93,
						'src': _0x440057,
						'default': _0x33ba52
					}, true);
				};
				_0x13c721.ready(function () {
					var _0x3a9526 = document.createElement('li'), _0x582e4b = document.createElement('div');
					_0x582e4b.className = 'vjs_base_setting';
					_0x3a9526.appendChild(_0x582e4b);
					var _0x2185ea = document.createElement('div');
					_0x2185ea.className = 'vjs_advanced_setting';
					_0x3a9526.appendChild(_0x2185ea);
					Ext.select('.vjs-self-setting .vjs-menu-content').appendChild(_0x3a9526);
					var _0x23a83b = document.createElement('div');
					_0x23a83b.className = 'video_setting_hotmap';
					_0x23a83b.innerHTML = '<div class="videoTitle vjs_hotmap_title"><span>' + langMap.viewHeart + '</span><div class="zmSwitch swithOn hotmapSwitch"></div></div>';
					_0x582e4b.appendChild(_0x23a83b);
					_0x133787 && _0x263d1e.cookieFid == '179952' && _0x263d1e.deviceType == 1 && Ext.Ajax.request({
						'url': _0x133787,
						'success': function (_0x3ba417) {
							if (_0x3ba417.status != 200) {
								return;
							}
							var _0x53958b = eval('(' + _0x3ba417.responseText + ')'), _0x58a32a = 0, _0x4c34af = 0;
							if (_0x53958b.length > 0) {
								Ext.select('.vjs-control-bar .vjs-self-setting').setStyle('display', 'block');
								Ext.select('.vjs-resolution-button').setStyle('right', '140px');
								Ext.select('.vjs-playline-button').setStyle('right', '100px');
								var _0x4c4f0e = document.createElement('div');
								_0x4c4f0e.className = 'videoTitle vjs-sub-title';
								_0x4c4f0e.innerHTML = '<span>' + langMap.Subtitles + '</span><div class="zmSwitch swithOn"></div>';
								_0x582e4b.appendChild(_0x4c4f0e);
								var _0x4295fc = document.createElement('ul');
								_0x4295fc.className = 'vjs-sub-ul video_line zmList clearfix';
								Ext.each(_0x53958b, function (_0x3452ca) {
									var _0x259716 = document.createElement('li');
									_0x259716.className = 'vjs-sub-item';
									_0x259716.innerHTML = _0x3452ca.name;
									_0x3c1a3b == 1 && _0x3452ca.name == 'English' ? (_0x3452ca.selected = true, _0x4c34af = _0x58a32a, _0x259716.className = 'vjs-sub-item active') : _0x3452ca.selected = false;
									_0x259716.setAttribute('label', _0x3452ca.name);
									_0x50594d(_0x3452ca.name, _0x43642b(_0x3452ca.url), _0x3452ca.selected);
									_0x4295fc.appendChild(_0x259716);
									_0x58a32a++;
								});
								_0x582e4b.appendChild(_0x4295fc);
								var _0x3d896d = document.createElement('div');
								_0x3d896d.className = 'vjs-sub-setting-btn videoTitle toHighSetting';
								_0x3d896d.innerHTML = '<span>' + langMap.advancedetting + '</span><span class="rightArrow"></span>';
								_0x582e4b.appendChild(_0x3d896d);
								Ext.select('.vjs-self-setting .vjs-sub-title .zmSwitch').on('click', function (_0xb72e67) {
									Ext.get(this).hasCls('swithOn') ? (Ext.get(this).removeCls('swithOn'), Ext.select('.zmList').setStyle('display', 'none'), Ext.select('.vjs-text-track-display').setStyle('display', 'none')) : (Ext.get(this).addCls('swithOn'), Ext.select('.zmList').setStyle('display', 'block'), Ext.select('.vjs-text-track-display').setStyle('display', 'block'));
								});
								Ext.select('.vjs-sub-item').on('click', function (_0x4b64d6) {
									Ext.select('.vjs-sub-item').removeCls('active');
									Ext.get(this).addCls('active');
									var _0x840d12 = Ext.get(this).getAttribute('label');
									_0x1e0757 && (_0x1e0757.mode = 'disabled');
									var _0xc89f0a = _0x13c721.textTracks(), _0x2bfce0;
									for (var _0x2e80f1 = 0; _0x2e80f1 < _0xc89f0a.length; _0x2e80f1++) {
										var _0x2b15a3 = _0xc89f0a[_0x2e80f1];
										_0x2b15a3.kind === 'subtitles' && _0x2b15a3.label === _0x840d12 && (_0x2b15a3.mode = 'showing', _0x2bfce0 = _0x2b15a3, _0x1e0757 = _0x2b15a3, _0x2bfce0.addEventListener('cuechange', _0x13c721.textTrackDisplay.updateDisplay));
									}
								});
								_0x2185ea.innerHTML = '<div class="toZimuBx">\n\t\t\t\t\t\t\t\t<span class="toZimu"><span class="rightArrow"></span>' + langMap.moreSubSettings + '</span>\n\t\t\t\t\t\t\t\t<span class="resetBtn">' + langMap.reset + '</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="itemLineBx marTop24">\n\t\t\t\t\t\t\t\t<span class="leftFontWid">' + langMap.textColr + '</span>\n\t\t\t\t\t\t\t\t<div class="rightbox">\n\t\t\t\t\t\t\t\t\t<div class="selectBox vjs_font_color">\n\t\t\t\t\t\t\t\t\t\t<p>' + langMap.White + '</p>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#000" p_txt="' + langMap.Black + '" class="active"><a href="javascript:void(0)">' + langMap.Black + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#FFF" p_txt="' + langMap.White + '"><a href="javascript:void(0)">' + langMap.White + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#F00" p_txt="' + langMap.Red + '"><a href="javascript:void(0)">' + langMap.Red + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#0F0" p_txt="' + langMap.Green + '"><a href="javascript:void(0)">' + langMap.Green + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#00F" p_txt="' + langMap.Blue + '"><a href="javascript:void(0)">' + langMap.Blue + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#FF0" p_txt="' + langMap.Yellow + '"><a href="javascript:void(0)">' + langMap.Yellow + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#F0F" p_txt="' + langMap.Magenta + '"><a href="javascript:void(0)">' + langMap.Magenta + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#0FF" p_txt="' + langMap.Cyan + '"><a href="javascript:void(0)">' + langMap.Cyan + '</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="itemLineBx marTop12">\n\t\t\t\t\t\t\t\t<span class="leftFontWid">' + langMap.textOpacity + '</span>\n\t\t\t\t\t\t\t\t<div class="rightbox">\n\t\t\t\t\t\t\t\t\t<div class="dragBx">\n\t\t\t\t\t\t\t\t\t\t<div class="dragCon">\n\t\t\t\t\t\t\t\t\t\t\t<span class="dragStart"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class="dragEnd"></span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="dragCircle" id="1" style="left:110px"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<span class="dragFont fontTran">100%</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="itemLineBx marTop24">\n\t\t\t\t\t\t\t\t<span class="leftFontWid">' + langMap.backgroundColor + '</span>\n\t\t\t\t\t\t\t\t<div class="rightbox">\n\t\t\t\t\t\t\t\t\t<div class="selectBox vjs_bgc">\n\t\t\t\t\t\t\t\t\t\t<p>' + langMap.Black + '</p>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#000" p_txt="' + langMap.Black + '" class="active"><a href="javascript:void(0)">' + langMap.Black + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#FFF" p_txt="' + langMap.White + '"><a href="javascript:void(0)">' + langMap.White + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#F00" p_txt="' + langMap.Red + '"><a href="javascript:void(0)">' + langMap.Red + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#0F0" p_txt="' + langMap.Green + '"><a href="javascript:void(0)">' + langMap.Green + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#00F" p_txt="' + langMap.Blue + '"><a href="javascript:void(0)">' + langMap.Blue + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#FF0" p_txt="' + langMap.Yellow + '"><a href="javascript:void(0)">' + langMap.Yellow + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#F0F" p_txt="' + langMap.Magenta + '"><a href="javascript:void(0)">' + langMap.Magenta + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#0FF" p_txt="' + langMap.Cyan + '"><a href="javascript:void(0)">' + langMap.Cyan + '</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="itemLineBx marTop12">\n\t\t\t\t\t\t\t\t<span class="leftFontWid">' + langMap.backgroundOpacity + '</span>\n\t\t\t\t\t\t\t\t<div class="rightbox">\n\t\t\t\t\t\t\t\t\t<div class="dragBx">\n\t\t\t\t\t\t\t\t\t\t<div class="dragCon">\n\t\t\t\t\t\t\t\t\t\t\t<span class="dragStart"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class="dragMiddle"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class="dragEnd"></span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="dragCircle" id="2"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<span class="dragFont bgTran">0%</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="itemLineBx marTop24">\n\t\t\t\t\t\t\t\t<span class="leftFontWid">' + langMap.windowColor + '</span>\n\t\t\t\t\t\t\t\t<div class="rightbox">\n\t\t\t\t\t\t\t\t\t<div class="selectBox vjs_view_color">\n\t\t\t\t\t\t\t\t\t\t<p>' + langMap.Black + '</p>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#000" p_txt="' + langMap.Black + '" class="active"><a href="javascript:void(0)">' + langMap.Black + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#FFF" p_txt="' + langMap.White + '"><a href="javascript:void(0)">' + langMap.White + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#F00" p_txt="' + langMap.Red + '"><a href="javascript:void(0)">' + langMap.Red + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#0F0" p_txt="' + langMap.Green + '"><a href="javascript:void(0)">' + langMap.Green + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#00F" p_txt="' + langMap.Blue + '"><a href="javascript:void(0)">' + langMap.Blue + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#FF0" p_txt="' + langMap.Yellow + '"><a href="javascript:void(0)">' + langMap.Yellow + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#F0F" p_txt="' + langMap.Magenta + '"><a href="javascript:void(0)">' + langMap.Magenta + '</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li value="#0FF" p_txt="' + langMap.Cyan + '"><a href="javascript:void(0)">' + langMap.Cyan + '</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="itemLineBx marTop12">\n\t\t\t\t\t\t\t\t<span class="leftFontWid">' + langMap.windowOpacity + '</span>\n\t\t\t\t\t\t\t\t<div class="rightbox">\n\t\t\t\t\t\t\t\t\t<div class="dragBx">\n\t\t\t\t\t\t\t\t\t\t<div class="dragCon">\n\t\t\t\t\t\t\t\t\t\t\t<span class="dragStart"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class="dragMiddle"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class="dragEnd"></span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="dragCircle" id="3"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<span class="dragFont viewTran">0%</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class="videoTitle marTop24 fontBord">\n\t\t\t\t\t\t\t\t<span>' + langMap.textStroke + '</span>\n\t\t\t\t\t\t\t\t<div class="zmSwitch swithOn"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ul class="video_line fontBordList">\n\t\t\t\t\t\t\t\t<li class="active" value="uniform">' + langMap.None + '</li>\n\t\t\t\t\t\t\t\t<li value="raised">' + langMap.Raised + '</li>\n\t\t\t\t\t\t\t\t<li value="depressed">' + langMap.Depressed + '</li>\n\t\t\t\t\t\t\t\t<li value="uniform">' + langMap.Uniform + '</li>\n\t\t\t\t\t\t\t\t<li value="dropshadow">' + langMap.Dropshadow + '</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class="itemLineBx marTop24">\n\t\t\t\t\t\t\t\t<span class="leftFontWid">' + langMap.subtitlePosition + '</span>\n\t\t\t\t\t\t\t\t<div class="rightbox">\n\t\t\t\t\t\t\t\t\t<div class="dragBx">\n\t\t\t\t\t\t\t\t\t\t<div class="dragCon">\n\t\t\t\t\t\t\t\t\t\t\t<span class="dragStart"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class="dragMiddle"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class="dragEnd"></span>\n\t\t\t\t\t\t\t\t\t\t\t<div class="dragCircle" style="left:50px" id="4"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<span class="zmdragFont">' + langMap.moderate + '</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>';
								function _0x25cd63() {
									return document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || null;
								}
								function _0x1324e9() {
									return !!(document.webkitIsFullScreen || _0x25cd63());
								}
								function _0x21e793(_0x281e7f, _0x25e99d, _0x10c752) {
									if (!(_0x281e7f && _0x25e99d && _0x10c752)) {
										return;
									}
									if (_0x25e99d == 'fontFamily') {
										Ext.select('.vjs-text-track-display>div>div>div').setStyle('font-family', _0x10c752);
										return;
									}
									if (_0x25e99d == 'subPosition') {
										_0x10c752 == '0' ? _0x1324e9() ? document.querySelector('.vjs-text-track-display').style.setProperty('bottom', '2em', 'important') : document.querySelector('.vjs-text-track-display').style.setProperty('bottom', '1em', 'important') : _0x10c752 == '0.5' ? _0x1324e9() ? document.querySelector('.vjs-text-track-display').style.setProperty('bottom', '6em', 'important') : document.querySelector('.vjs-text-track-display').style.setProperty('bottom', '3em', 'important') : _0x10c752 == '1' && (_0x1324e9() ? document.querySelector('.vjs-text-track-display').style.setProperty('bottom', '10em', 'important') : document.querySelector('.vjs-text-track-display').style.setProperty('bottom', '6em', 'important'));
										var _0xcbf1cd = _0x281e7f.textTrackSettings;
										_0xcbf1cd.updateDisplay();
										return;
									}
									_0x25e99d == 'fontPercent' && (_0x10c752 = parseFloat(_0x10c752));
									var _0xcbf1cd = _0x281e7f.textTrackSettings, _0x1bc9a9 = _0xcbf1cd.getValues();
									_0x1bc9a9[_0x25e99d] = _0x10c752;
									_0xcbf1cd.setValues(_0x1bc9a9);
									_0xcbf1cd.updateDisplay();
								}
								function _0x2f1982() {
									var _0x2ce2ca = _0x13c721.textTrackSettings;
									_0x4d891a = _0x2ce2ca.getValues();
									if (_0x4d891a) {
										var _0x50ae3a = _0x4d891a.color || '#FFF', _0x467218 = Ext.select('.vjs_font_color li').elements;
										Ext.select('.vjs_font_color li').removeCls('active');
										var _0x53c450 = '';
										Ext.each(_0x467218, function (_0x1ad551) {
											if (_0x1ad551.getAttribute('value') == _0x50ae3a) {
												Ext.get(_0x1ad551).addCls('active');
												_0x53c450 = _0x1ad551.getAttribute('p_txt');
											}
										});
										Ext.select('.vjs_font_color p').setHTML(_0x53c450);
										Ext.select('.vjs_font_color p').elements[0].setAttribute('value', _0x50ae3a);
										var _0x2c8941 = _0x4d891a.textOpacity || '1';
										_0x2c8941 == '0.5' ? (Ext.select('#1').setStyle('left', '0'), Ext.select('.fontTran').setHTML('50%')) : _0x2c8941 == '1' && (Ext.select('#1').setStyle('left', '110px'), Ext.select('.fontTran').setHTML('100%'));
										var _0x451e39 = _0x4d891a.backgroundColor || '#000', _0x184e8a = Ext.select('.vjs_bgc li').elements;
										Ext.select('.vjs_bgc li').removeCls('active');
										var _0x10a00c = '';
										Ext.each(_0x184e8a, function (_0x51556e) {
											if (_0x51556e.getAttribute('value') == _0x451e39) {
												Ext.get(_0x51556e).addCls('active');
												_0x10a00c = _0x51556e.getAttribute('p_txt');
											}
										});
										Ext.select('.vjs_bgc p').setHTML(_0x10a00c);
										Ext.select('.vjs_bgc p').elements[0].setAttribute('value', _0x451e39);
										var _0x246c80 = _0x4d891a.backgroundOpacity || '0';
										_0x246c80 == '0' ? (Ext.select('#2').setStyle('left', '0'), Ext.select('.bgTran').setHTML('0%')) : _0x246c80 == '1' ? (Ext.select('#2').setStyle('left', '110px'), Ext.select('.bgTran').setHTML('100%')) : _0x246c80 == '0.5' && (Ext.select('#2').setStyle('left', '55px'), Ext.select('.bgTran').setHTML('50%'));
										var _0x432904 = _0x4d891a.windowColor || '#000', _0x20e721 = Ext.select('.vjs_view_color li').elements;
										Ext.select('.vjs_view_color li').removeCls('active');
										var _0x13714e = '';
										Ext.each(_0x20e721, function (_0xfb3127) {
											if (_0xfb3127.getAttribute('value') == _0x432904) {
												Ext.get(_0xfb3127).addCls('active');
												_0x13714e = _0xfb3127.getAttribute('p_txt');
											}
										});
										Ext.select('.vjs_view_color p').setHTML(_0x13714e);
										Ext.select('.vjs_view_color p').elements[0].setAttribute('value', _0x432904);
										var _0x584aad = _0x4d891a.windowOpacity || '0';
										_0x584aad == '0' ? (Ext.select('#3').setStyle('left', '0'), Ext.select('.viewTran').setHTML('0%')) : _0x246c80 == '1' ? (Ext.select('#3').setStyle('left', '110px'), Ext.select('.viewTran').setHTML('100%')) : _0x246c80 == '0.5' && (Ext.select('#3').setStyle('left', '55px'), Ext.select('.viewTran').setHTML('50%'));
									}
								}
								isEn && Ext.select('.fontBordList li').setStyle('width', '90px');
								Ext.select('.toHighSetting').on('click', function () {
									_0x2f1982();
									Ext.select('.vjs_base_setting').setStyle('display', 'none');
									Ext.select('.vjs_advanced_setting').setStyle('display', 'block');
								});
								Ext.select('.resetBtn').on('click', function () {
									var _0x51caba = _0xa272fb('video'), _0x3799af = _0x51caba.textTrackSettings;
									_0x3799af.setValues(_0x588be9);
									_0x3799af.updateDisplay();
									_0x2f1982();
								});
								Ext.select('.toZimu').on('click', function () {
									Ext.select('.vjs_base_setting').setStyle('display', 'block');
									Ext.select('.vjs_advanced_setting').setStyle('display', 'none');
								});
								$('.selectBox').click(function () {
									var _0x32d533 = $(this).find('ul'), _0x29e947 = _0x32d533.css('display');
									return _0x29e947 = _0x29e947 == 'block' ? 0 : 1, $('.selectBox ul').css('display', 'none'), _0x29e947 ? (_0x32d533.css('display', 'block'), $(this).addClass('dropDown'), _0x29e947 = 0, _0x32d533.find('li').each(function () {
										_0x29e947 += $(this).height();
									}), _0x32d533.css('display', 'none'), _0x29e947 > 200 && (_0x32d533.css('height', 200), _0x32d533.css('overflow', 'auto')), _0x32d533.slideDown(100)) : (_0x32d533.slideUp(), $(this).removeClass('dropDown')), false;
								});
								$('.selectBox ul li').on('click', function () {
									var _0x1ae9b5 = $(this).parent().parent().find('p');
									_0x1ae9b5.text($(this).find('a').text());
									_0x1ae9b5.attr('value', $(this).attr('value'));
									$(this).addClass('active').siblings().removeClass('active');
									var _0x1ce205 = $(this).parent().parent(), _0x5ea90f = _0xa272fb('video');
									$(_0x1ce205).hasClass('vjs_fontsize') ? _0x21e793(_0x5ea90f, 'fontPercent', $(this).attr('value')) : $(_0x1ce205).hasClass('vjs_font_color') ? _0x21e793(_0x5ea90f, 'color', $(this).attr('value')) : $(_0x1ce205).hasClass('vjs_sub_fontfamily') ? _0x21e793(_0x5ea90f, 'fontFamily', $(this).attr('value')) : $(_0x1ce205).hasClass('vjs_bgc') ? _0x21e793(_0x5ea90f, 'backgroundColor', $(this).attr('value')) : $(_0x1ce205).hasClass('vjs_view_color') && _0x21e793(_0x5ea90f, 'windowColor', $(this).attr('value'));
								});
								$(document).on('click', function () {
									$('.selectBox ul').slideUp();
								});
								$('.fontBord .zmSwitch').click(function () {
									$(this).hasClass('swithOn') ? ($(this).removeClass('swithOn'), $('.fontBordList').hide()) : ($(this).addClass('swithOn'), $('.fontBordList').show());
								});
								$('.fontBordList li').click(function () {
									$('.fontBordList li').removeClass('active');
									$(this).addClass('active');
									var _0x1a8db7 = $(this).attr('value'), _0x39f57d = _0xa272fb('video');
									_0x21e793(_0x39f57d, 'edgeStyle', _0x1a8db7);
								});
								var _0x1d968b = false, _0xba9722, _0x31f3da = 0, _0x3f5379, _0x2adbc9 = document.getElementsByClassName('dragCircle'), _0x225387, _0x15d203;
								for (var _0x53b4b5 = 0; _0x53b4b5 < _0x2adbc9.length; _0x53b4b5++) {
									var _0xe9afb0 = _0x2adbc9[_0x53b4b5];
									_0xe9afb0.addEventListener('mousedown', function (_0x59ce94) {
										_0x1d968b = true;
										_0xba9722 = _0x59ce94.clientX - _0x59ce94.srcElement.offsetLeft;
										_0x3f5379 = _0x31f3da;
										_0x15d203 = _0x59ce94.srcElement.getAttribute('id');
									});
								}
								document.addEventListener('mouseup', function () {
									_0x225387 = document.getElementById(_0x15d203);
									var _0x42526e = _0xa272fb('video');
									_0x1d968b = false;
									var _0x41dec6 = '';
									_0x15d203 == '1' ? _0x41dec6 = 'textOpacity' : _0x15d203 == '2' ? _0x41dec6 = 'backgroundOpacity' : _0x15d203 == 3 ? _0x41dec6 = 'windowOpacity' : _0x15d203 == 4 && (_0x41dec6 = 'subPosition');
									if (_0x15d203 == 1) {
										_0x31f3da < 55 ? (_0x31f3da = 0, _0x225387.style.left = _0x31f3da + 'px', _0x225387.parentNode.parentNode.children[1].innerHTML = '50%', _0x21e793(_0x42526e, _0x41dec6, '0.5')) : _0x31f3da > 55 && (_0x31f3da = 110, _0x225387.style.left = _0x31f3da + 'px', _0x225387.parentNode.parentNode.children[1].innerHTML = '100%', _0x21e793(_0x42526e, _0x41dec6, '1'));
										return;
									}
									_0x3f5379 < _0x31f3da && _0x31f3da < 55 ? (_0x31f3da = 55, _0x225387.style.left = _0x31f3da + 'px', _0x225387.parentNode.parentNode.children[1].innerHTML = _0x15d203 == 4 ? langMap.moderate : '50%', _0x21e793(_0x42526e, _0x41dec6, '0.5')) : _0x3f5379 < _0x31f3da && _0x31f3da > 55 ? (_0x31f3da = 110, _0x225387.style.left = _0x31f3da + 'px', _0x225387.parentNode.parentNode.children[1].innerHTML = _0x15d203 == 4 ? langMap.sHigh : '100%', _0x21e793(_0x42526e, _0x41dec6, '1')) : _0x3f5379 > _0x31f3da && _0x31f3da > 55 ? (_0x31f3da = 55, _0x225387.style.left = _0x31f3da + 'px', _0x225387.parentNode.parentNode.children[1].innerHTML = _0x15d203 == 4 ? langMap.moderate : '50%', _0x21e793(_0x42526e, _0x41dec6, '0.5')) : _0x3f5379 > _0x31f3da && _0x31f3da < 55 && (_0x31f3da = 0, _0x225387.style.left = _0x31f3da + 'px', _0x225387.parentNode.parentNode.children[1].innerHTML = _0x15d203 == 4 ? langMap.sLow : '0%', _0x21e793(_0x42526e, _0x41dec6, '0'));
								});
								document.addEventListener('mousemove', function (_0x5971ac) {
									_0x225387 = document.getElementById(_0x15d203);
									_0x1d968b && (_0x31f3da = _0x5971ac.clientX - _0xba9722, _0x31f3da <= 0 ? (_0x31f3da = 0, _0x225387.style.left = _0x31f3da + 'px', _0x225387.parentNode.parentNode.children[1].innerHTML = _0x15d203 == 4 ? langMap.sLow : '0%') : _0x31f3da >= 110 ? (_0x31f3da = 110, _0x225387.style.left = _0x31f3da + 'px', _0x225387.parentNode.parentNode.children[1].innerHTML = _0x15d203 == 4 ? langMap.sHigh : '100%') : _0x225387.style.left = _0x31f3da + 'px');
								});
							}
							setTimeout(function () {
								var _0xa73ca2 = _0x13c721.textTracks();
								_0x3c1a3b == 1 ? _0xa73ca2 && _0xa73ca2[_0x4c34af] ? (_0xa73ca2[_0x4c34af].mode = 'showing', _0x1e0757 = _0xa73ca2[_0x4c34af]) : _0xa73ca2 && _0xa73ca2[0] && (_0xa73ca2[0].mode = 'showing', _0x1e0757 = _0xa73ca2[0]) : _0xa73ca2 && _0xa73ca2[0] && (_0xa73ca2[0].mode = 'showing', _0x1e0757 = _0xa73ca2[0]);
							}, 500);
						}
					});
					var _0x443866 = _0x13c721.textTrackSettings;
					_0x443866.setValues({
						'backgroundColor': '#000',
						'backgroundOpacity': '0',
						'edgeStyle': 'uniform'
					});
					_0x443866.updateDisplay();
					_0x588be9 = _0x443866.getValues();
				});
			}
		}
		_0x31bd57 = function (_0x14830b) {
			var _0x304d0d = this, _0x4247fa = document.createElement('span');
			_0xa272fb.dom.addClass(_0x4247fa, 'vjs-setting-button-label');
			var _0x3ea0cc = new _0x23d9f4(_0x304d0d, _0x14830b, _0x4247fa);
			_0xa272fb.dom.addClass(_0x3ea0cc.el(), 'vjs-self-setting');
			_0x3ea0cc.show();
			_0x304d0d.ready(function () {
				_0x304d0d.controlBar.videoSelfSetting = _0x304d0d.controlBar.el_.insertBefore(_0x3ea0cc.el_, _0x304d0d.controlBar.getChild('fullscreenToggle').el_);
				_0x304d0d.controlBar.videoSelfSetting.dispose = function () {
					this.parentNode.removeChild(this);
				};
				_0x427c5c(_0x304d0d, _0x14830b);
			});
		};
		_0xa272fb.registerPlugin('videoSelfSetting', _0x31bd57);
	}(window, videojs));
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
		var _0x5f425d = this;
		_0x5f425d.callParent(arguments);
		var _0x22effa = Ext.query('input', _0x5f425d.el.dom);
		Ext.each(_0x22effa, function (_0x381beb, _0xe3f6f0) {
			Ext.fly(_0x381beb).on('click', function () {
				_0x5f425d.onSelected(_0xe3f6f0);
			});
		});
		try {
			typeof createVideoTask === 'function' ? createVideoTask() : console.log('createVideoTask函数不存在\uFF01');
		} catch (_0x185d46) {
		}
		try {
			if (typeof aplus_queue != 'undefined') {
				var _0x20c6d8 = parent.AttachmentSetting;
				if (_0x20c6d8) {
					var _0x44ebc6 = _0x20c6d8.aplus_video_id, _0x553251 = _0x20c6d8.aplus_resource_id, _0x5c9f17 = _0x20c6d8.knowledgename, _0x37069f = _0x20c6d8.coursename;
					aplus_queue.push({
						'action': 'aplus.record',
						'arguments': [
							'pybk_error',
							'OTHER',
							{
								'video_name': _0x5c9f17,
								'video_id': _0x44ebc6,
								'resource_id': _0x553251,
								'resource_name': _0x37069f
							}
						]
					});
				}
			}
		} catch (_0x1a268b) {
		}
	},
	'setErrorMsg': function (_0x1b45f4) {
		Ext.fly(this.errorMsgEl).setHTML(_0x1b45f4);
	}
});
Ext.define('ans.videojs.ErrorNote', {
	'extend': 'Ext.Component',
	'cls': 'ans-vjserrdisplay',
	'renderTpl': ['<div class="ans-vjserrdisplay-title">播放出现异常\u3002</div>']
});
(function () {
	var _0x5829dc = videojs.getComponent('ErrorDisplay'), _0x28d46d = videojs.extend(_0x5829dc, {
		'constructor': function (_0x16c787, _0x465a80) {
			_0x5829dc.call(this, _0x16c787, _0x465a80);
		},
		'colse': function () {
			_0x5829dc.prototype.colse.call(this);
			me.ansErrorDisplay && (me.ansErrorDisplay.destroy(), me.ansErrorDisplay = null);
		},
		'fill': function () {
			_0x5829dc.prototype.fill.call(this);
			var _0x53c56f = this, _0x3b2d8f = _0x53c56f.player_, _0x379f2e = _0x3b2d8f.options_.playlines, _0x135e78 = Ext.query('.vjs-modal-dialog-content', _0x53c56f.el_)[0];
			_0x53c56f.ansErrorDisplay && (_0x53c56f.ansErrorDisplay.destroy(), delete _0x53c56f.ansErrorDisplay);
			if (!_0x3b2d8f.selectCDN || !_0x379f2e) {
				_0x53c56f.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', { 'renderTo': _0x53c56f.el_ });
				return;
			}
			var _0xea2507 = _0x3b2d8f.currentPlayline(), _0x2f0611 = 0;
			Ext.each(_0x379f2e, function (_0x34676e, _0xf17fb8) {
				_0xea2507 == _0x34676e && (_0x2f0611 = _0xf17fb8);
			});
			_0x53c56f.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
				'renderTo': _0x53c56f.el_,
				'onSelected': function (_0x59bfeb) {
					_0x3b2d8f.selectCDN(_0x59bfeb);
					_0x53c56f.close();
				},
				'renderData': {
					'playlines': _0x379f2e,
					'errorMsg': _0x53c56f.content(),
					'selectedIndex': _0x2f0611
				}
			});
		}
	});
	videojs.registerComponent('ErrorDisplay', _0x28d46d);
}());
(function () {
	var _0x801f49 = null;
	typeof window.videojs === 'undefined' && typeof require === 'function' ? _0x801f49 = require('video.js') : _0x801f49 = window.videojs;
	(function (_0x21cab1, _0xa494ec) {
		var _0x4a3678 = {}, _0x751aa8, _0x186744 = {}, _0x1f7ebb = {};
		function _0x333db0(_0x4a2bce, _0x486b2a, _0x129716, _0x2bcc7f) {
			_0x186744 = {
				'label': _0x129716,
				'sources': _0x486b2a
			};
			if (typeof _0x2bcc7f === 'function') {
				return _0x2bcc7f(_0x4a2bce, _0x486b2a, _0x129716);
			}
			return _0x4a2bce.src(_0x486b2a.map(function (_0x35e245) {
				return {
					'src': _0x35e245.src,
					'type': _0x35e245.type,
					'res': _0x35e245.res
				};
			})), _0x4a2bce;
		}
		var _0x42e505 = _0xa494ec.getComponent('MenuItem'), _0x43cdd8 = _0xa494ec.extend(_0x42e505, {
			'constructor': function (_0x368e9b, _0x4c2912, _0x50cf75, _0x4b0cf9) {
				this.onClickListener = _0x50cf75;
				this.label = _0x4b0cf9;
				_0x42e505.call(this, _0x368e9b, _0x4c2912);
				this.src = _0x4c2912.src;
				this.on('click', this.onClick);
				this.on('touchstart', this.onClick);
				_0x4c2912.initialySelected && (this.showAsLabel(), this.selected(true), this.addClass('vjs-selected'));
			},
			'showAsLabel': function () {
				this.label && (this.label.innerHTML = this.options_.label);
			},
			'onClick': function (_0x50d0b8) {
				this.onClickListener(this);
				var _0x1925aa = this.player_.currentTime(), _0x3b655c = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x3b655c && this.player_.bigPlayButton.hide();
				typeof _0x50d0b8 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x50d0b8 = this.options_.customSourcePicker);
				var _0x2a117f = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x2a117f = 'timeupdate');
				_0x333db0(this.player_, this.src, this.options_.label, _0x50d0b8).one(_0x2a117f, function () {
					var _0xfd194e = this.player_;
					_0xfd194e.switchStatus = true;
					_0xfd194e.currentTime(_0x1925aa);
					!_0x3b655c && _0xfd194e.play();
					_0xfd194e.trigger('resolutionchange');
				});
			}
		});
		_0xa494ec.registerComponent('ResolutionMenuItem', _0x43cdd8);
		var _0x144c4e = _0xa494ec.getComponent('MenuButton'), _0x23eb1a = _0xa494ec.extend(_0x144c4e, {
			'constructor': function (_0x3228c8, _0x3ecf93, _0x2c5c24, _0x53a84d) {
				this.sources = _0x3ecf93.sources;
				this.label = _0x53a84d;
				this.label.innerHTML = _0x3ecf93.initialySelectedLabel;
				_0x144c4e.call(this, _0x3228c8, _0x3ecf93, _0x2c5c24);
				this.controlText('Quality');
				if (_0x2c5c24.dynamicLabel) {
					this.el().appendChild(_0x53a84d);
				} else {
					var _0x3979d0 = document.createElement('span');
					_0xa494ec.dom.addClass(_0x3979d0, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x3979d0);
				}
			},
			'createItems': function () {
				var _0x591f9c = [], _0x4d629d = this.sources && this.sources.label || {}, _0x5d5820 = function (_0x58cc46) {
					_0x591f9c.map(function (_0x240786) {
						_0x240786.selected(_0x240786 === _0x58cc46);
						_0x240786.removeClass('vjs-selected');
					});
				};
				for (var _0x587d8f in _0x4d629d) {
					_0x4d629d.hasOwnProperty(_0x587d8f) && (_0x591f9c.push(new _0x43cdd8(this.player_, {
						'label': _0x587d8f,
						'src': _0x4d629d[_0x587d8f],
						'initialySelected': _0x587d8f === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x5d5820, this.label)), _0x1f7ebb[_0x587d8f] = _0x591f9c[_0x591f9c.length - 1]);
				}
				return _0x591f9c;
			}
		});
		_0x751aa8 = function (_0xc018e4) {
			var _0x5802a2 = _0xa494ec.mergeOptions(_0x4a3678, _0xc018e4), _0x36e107 = this, _0x5517fb = document.createElement('span'), _0x2ea14e = {};
			_0xa494ec.dom.addClass(_0x5517fb, 'vjs-resolution-button-label');
			_0x36e107.updateSrc = function (_0x3fe923) {
				if (!_0x3fe923) {
					return _0x36e107.src();
				}
				_0x36e107.controlBar.resolutionSwitcher && (_0x36e107.controlBar.resolutionSwitcher.dispose(), delete _0x36e107.controlBar.resolutionSwitcher);
				_0x3fe923 = _0x3fe923.sort(_0x460bb5);
				_0x2ea14e = _0x2d99b6(_0x3fe923);
				var _0x179be = _0x45bcba(_0x2ea14e, _0x3fe923), _0x5ce8a1 = new _0x23eb1a(_0x36e107, {
					'sources': _0x2ea14e,
					'initialySelectedLabel': _0x179be.label,
					'initialySelectedRes': _0x179be.res,
					'customSourcePicker': _0x5802a2.customSourcePicker
				}, _0x5802a2, _0x5517fb);
				return _0xa494ec.dom.addClass(_0x5ce8a1.el(), 'vjs-resolution-button'), _0x36e107.controlBar.resolutionSwitcher = _0x36e107.controlBar.el_.insertBefore(_0x5ce8a1.el_, _0x36e107.controlBar.getChild('fullscreenToggle').el_), _0x36e107.controlBar.resolutionSwitcher.dispose = function () {
					this.parentNode.removeChild(this);
				}, _0x333db0(_0x36e107, _0x179be.sources, _0x179be.label, _0x5802a2.customSourcePicker);
			};
			_0x36e107.currentResolution = function (_0x3e943d, _0x5ed370) {
				if (_0x3e943d == null) {
					return _0x186744;
				}
				return _0x1f7ebb[_0x3e943d] != null && _0x1f7ebb[_0x3e943d].onClick(_0x5ed370), _0x36e107;
			};
			_0x36e107.getGroupedSrc = function () {
				return _0x2ea14e;
			};
			function _0x460bb5(_0x29c8f4, _0x215671) {
				if (!_0x29c8f4.res || !_0x215671.res) {
					return 0;
				}
				return +_0x215671.res - +_0x29c8f4.res;
			}
			function _0x2d99b6(_0x176e97) {
				var _0x3c79a0 = {
					'label': {},
					'res': {},
					'type': {}
				};
				return _0x176e97.map(function (_0x54c75e) {
					_0x1a4d8b(_0x3c79a0, 'label', _0x54c75e);
					_0x1a4d8b(_0x3c79a0, 'res', _0x54c75e);
					_0x1a4d8b(_0x3c79a0, 'type', _0x54c75e);
					_0x23914f(_0x3c79a0, 'label', _0x54c75e);
					_0x23914f(_0x3c79a0, 'res', _0x54c75e);
					_0x23914f(_0x3c79a0, 'type', _0x54c75e);
				}), _0x3c79a0;
			}
			function _0x1a4d8b(_0x5f4edc, _0x319422, _0x469073) {
				_0x5f4edc[_0x319422][_0x469073[_0x319422]] == null && (_0x5f4edc[_0x319422][_0x469073[_0x319422]] = []);
			}
			function _0x23914f(_0x57314c, _0xb6b5d3, _0x48a6a6) {
				_0x57314c[_0xb6b5d3][_0x48a6a6[_0xb6b5d3]].push(_0x48a6a6);
			}
			function _0x45bcba(_0x3a495a, _0x484958) {
				var _0x335350 = _0x5802a2.default, _0x3bc94f = '';
				return _0x335350 === 'high' ? (_0x335350 = _0x484958[0].res, _0x3bc94f = _0x484958[0].label) : _0x335350 === 'low' || _0x335350 == null || !_0x3a495a.res[_0x335350] ? (_0x335350 = _0x484958[_0x484958.length - 1].res, _0x3bc94f = _0x484958[_0x484958.length - 1].label) : _0x3a495a.res[_0x335350] && (_0x3bc94f = _0x3a495a.res[_0x335350][0].label), {
					'res': _0x335350,
					'label': _0x3bc94f,
					'sources': _0x3a495a.res[_0x335350]
				};
			}
			_0x36e107.ready(function () {
				_0x36e107.options_.sources.length > 0 && _0x36e107.setTimeout(function () {
					_0x36e107.updateSrc(_0x36e107.options_.sources);
				}, 1);
			});
		};
		_0xa494ec.registerPlugin('videoJsResolutionSwitcher', _0x751aa8);
	}(window, _0x801f49));
}());
(function () {
	(function (_0x562696, _0x439303) {
		var _0x34e037 = {}, _0x21e0e1, _0x33011f = {}, _0x5ebeb9 = { _0x4c0ee2: _0x411330[_0x411330.length - 1] };
		function _0x3ec952(_0x512b65, _0x5ba73f, _0x3122d6, _0x9d5845) {
			_0x33011f = _0x5ba73f;
			if (typeof _0x9d5845 === 'function') {
				return _0x9d5845(_0x512b65, _0x5ba73f, _0x3122d6);
			}
			return _0x512b65;
		}
		var _0x589ca5 = _0x439303.getComponent('ResolutionMenuItem'), _0x23bdc7 = _0x439303.extend(_0x589ca5, {
			'onClick': function (_0xe1af3c) {
				this.onClickListener(this);
				var _0x4933ca = this.player_.currentTime(), _0x266d31 = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x266d31 && this.player_.bigPlayButton.hide();
				typeof _0xe1af3c !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0xe1af3c = this.options_.customSourcePicker);
				var _0x2eb7e0 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x2eb7e0 = 'timeupdate');
				var _0x42977c = _0x3ec952(this.player_, this.src, this.options_.label, _0xe1af3c);
				_0x42977c && _0x42977c.one(_0x2eb7e0, function () {
					_0x42977c.switchStatus = true;
					_0x42977c.currentTime(_0x4933ca);
					!_0x266d31 && _0x42977c.play();
					_0x42977c.trigger('playlinechange');
				});
			}
		}), _0x47952d = _0x439303.getComponent('MenuButton'), _0x76ff20 = _0x439303.extend(_0x47952d, {
			'constructor': function (_0x377826, _0x5e124b, _0x3ca1ca, _0x10d031) {
				this.playlines = _0x5e124b.playlines;
				this.label = _0x10d031;
				this.label.innerHTML = _0x5e124b.initialySelectedLabel;
				_0x47952d.call(this, _0x377826, _0x5e124b, _0x3ca1ca);
				this.controlText('Playline');
				if (_0x3ca1ca.dynamicLabel) {
					this.el().appendChild(_0x10d031);
				} else {
					var _0x1ece3d = document.createElement('span');
					_0x439303.addClass(_0x1ece3d, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x1ece3d);
				}
			},
			'createItems': function () {
				var _0x411330 = [], _0x581159 = this.playlines || [], _0x46c513 = function (_0x1da66f) {
					_0x411330.map(function (_0x39d0b1) {
						_0x39d0b1.selected(_0x39d0b1 === _0x1da66f);
						_0x39d0b1.removeClass('vjs-selected');
					});
				};
				for (var _0x463454 = 0; _0x463454 < _0x581159.length; _0x463454++) {
					var _0x4c0ee2 = _0x581159[_0x463454].label;
					_0x411330.push(new _0x23bdc7(this.player_, {
						'label': _0x4c0ee2,
						'src': _0x581159[_0x463454],
						'initialySelected': _0x4c0ee2 === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x46c513, this.label));
				}
				return _0x411330;
			}
		});
		_0x21e0e1 = function (_0xee94f8) {
			var _0x26f8b8 = _0x439303.mergeOptions(_0x21d77a, _0xee94f8), _0x39786d = this, _0x1844c1 = document.createElement('span'), _0x17e172 = _0x39786d.options_.playlines, _0x21d77a = _0x26f8b8.defaults;
			_0x439303.dom.addClass(_0x1844c1, 'vjs-resolution-button-label');
			var _0x2a1140 = new _0x76ff20(_0x39786d, {
				'playlines': _0x17e172,
				'initialySelectedLabel': _0x21d77a ? _0x21d77a.label : _0x17e172[0].label,
				'initialySelectedUrl': _0x21d77a ? _0x21d77a.url : _0x17e172[0].url,
				'customSourcePicker': _0x26f8b8.customSourcePicker
			}, _0x26f8b8, _0x1844c1);
			_0x439303.dom.addClass(_0x2a1140.el(), 'vjs-resolution-button');
			_0x439303.dom.addClass(_0x2a1140.el(), 'vjs-playline-button');
			_0x2a1140.show();
			_0x39786d.selectCDN = function (_0xe466c4) {
				_0x2a1140.items[_0xe466c4].onClick(_0x26f8b8.customSourcePicker);
				_0x39786d.play();
			};
			_0x17e172.length > 0 && (_0x21d77a ? _0x33011f = _0x21d77a : _0x33011f = _0x17e172[0]);
			_0x39786d.currentPlayline = function () {
				return _0x33011f;
			};
			_0x39786d.ready(function () {
				_0x39786d.controlBar.videoJsPlayLine = _0x39786d.controlBar.el_.insertBefore(_0x2a1140.el_, _0x39786d.controlBar.getChild('fullscreenToggle').el_);
				_0x39786d.controlBar.videoJsPlayLine.dispose = function () {
					this.parentNode.removeChild(this);
				};
			});
		};
		_0x439303.registerPlugin('videoJsPlayLine', _0x21e0e1);
	}(window, videojs));
}());
Ext.define('ans.AudioJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x39b0b9) {
		_0x39b0b9 = _0x39b0b9 || {};
		var _0xce2ec = this;
		_0xce2ec.addEvents(['seekstart']);
		_0xce2ec.mixins.observable.constructor.call(_0xce2ec, _0x39b0b9);
		var _0x4fe958 = videojs(_0x39b0b9.videojs, _0xce2ec.params2VideoOpt(_0x39b0b9.params), function () {
		});
		Ext.fly(_0x39b0b9.videojs).on('contextmenu', function (_0xa7fdb0) {
			_0xa7fdb0.preventDefault();
		});
		Ext.fly(_0x39b0b9.videojs).on('keydown', function (_0x432644) {
			(_0x432644.keyCode == 32 || _0x432644.keyCode == 37 || _0x432644.keyCode == 39) && _0x432644.preventDefault();
			_0x432644.keyCode == 32 && (_0x4fe958.paused() ? _0x4fe958.play() : _0x4fe958.pause());
		});
	},
	'params2VideoOpt': function (_0x5e0e49) {
		var _0x349a6c = [];
		!_0x5e0e49.rootPath && (_0x5e0e49.rootPath = '');
		_0x5e0e49.http && _0x349a6c.push({
			'src': _0x5e0e49.http,
			'type': 'audio/mp3'
		});
		var _0x3a3c8e = function (_0x4a2883, _0x1f7514, _0x1ebb60) {
			var _0x575b28 = this;
			!_0x575b28.logCount && (_0x575b28.logCount = 0);
			videojs.xhr({
				'uri': _0x1f7514,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x4f338e, _0x559274) {
				_0x575b28.logCount++;
				if (_0x559274.statusCode == 200) {
					_0x575b28.logCount = 0;
					if (_0x559274.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x559274.body);
					d.isPassed && _0x1ebb60();
					return;
				}
				if (_0x575b28.logCount >= 4) {
					_0x575b28.logCount = 0;
					_0x4a2883.pause();
					_0x559274.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x559274.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x1569ea = function (_0x4653a6, _0x46effb, _0x2e56e0, _0x2ea017) {
			if (!_0x5e0e49.reportUrl) {
				return;
			}
			if (_0x5e0e49.isFiled == 1 || _0x5e0e49.state == 1) {
				return;
			}
			var _0x475aa1 = (_0x5e0e49.startTime || '0') + '_' + (_0x5e0e49.endTime || _0x5e0e49.duration), _0x5792a7 = 0, _0xb82ad5;
			_0x2e56e0.toString().indexOf('-') != -1 ? (_0xb82ad5 = _0x2e56e0.split('-'), _0xb82ad5.length == 2 && (_0x5792a7 = parseInt(_0xb82ad5[1]) * 1000)) : _0x5792a7 = _0x2e56e0 * 1000;
			if (_0x5792a7 == _0x5e0e49.duration * 1000 && _0x46effb == 2) {
				return;
			}
			var _0x2d14b8 = Ext.String.format('[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x5e0e49.clazzId, _0x5e0e49.userid, _0x5e0e49.jobid ? _0x5e0e49.jobid : '', _0x5e0e49.objectId, _0x5792a7, 'd_yHJ!$pdA~5', _0x5e0e49.duration * 1000, _0x475aa1), _0x40ccf0 = [
				_0x5e0e49.reportUrl,
				'/',
				_0x5e0e49.dtoken,
				'?clazzId=',
				_0x5e0e49.clazzId,
				'&playingTime=',
				_0x2e56e0,
				'&duration=',
				_0x5e0e49.duration,
				'&clipTime=',
				_0x475aa1,
				'&objectId=',
				_0x5e0e49.objectId,
				'&otherInfo=',
				_0x5e0e49.otherInfo,
				'&jobid=',
				_0x5e0e49.jobid,
				'&userid=',
				_0x5e0e49.userid,
				'&isdrag=',
				_0x46effb,
				'&view=pc',
				'&enc=',
				md5(_0x2d14b8),
				'&rt=',
				_0x5e0e49.rt,
				'&dtype=Audio',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x3a3c8e(_0x4653a6, _0x40ccf0, _0x2ea017);
		};
		return {
			'language': 'zh-CN',
			'controls': true,
			'preload': 'auto',
			'bigPlayButton': false,
			'sources': _0x349a6c,
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
				'audioNote': { 'title': _0x5e0e49.filename },
				'studyControl': { 'enableSwitchWindow': 1 },
				'seekBarControl': {
					'headOffset': _0x5e0e49.headOffset,
					'enableFastForward': _0x5e0e49.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0x5e0e49.control,
					'reportTimeInterval': _0x5e0e49.reportTimeInterval,
					'sourcePlayer': 'audio',
					'sendLog': function (_0x1561e8, _0x1fa82e, _0x531d73) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x2c1334 = 0;
						switch (_0x1fa82e) {
							case 'playing':
								_0x2c1334 = 0;
								break;
							case 'drag':
								_0x2c1334 = 1;
								break;
							case 'play':
								_0x2c1334 = 3;
								break;
							case 'pause':
								_0x2c1334 = 2;
								break;
							case 'ended':
								_0x2c1334 = 4;
								break;
						}
						_0x1569ea(_0x1561e8, _0x2c1334, _0x531d73, function () {
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
	'constructor': function (_0x45c1e7) {
		_0x45c1e7 = _0x45c1e7 || {};
		var _0x4ec201 = this;
		_0x4ec201.addEvents(['seekstart']);
		_0x4ec201.mixins.observable.constructor.call(_0x4ec201, _0x45c1e7);
		var _0x13007f = videojs(_0x45c1e7.videojs, _0x4ec201.params2VideoOpt(_0x45c1e7.params), function () {
		});
		_0x45c1e7.params.control && _0x45c1e7.params.doublespeed != 1 && !_0x45c1e7.params.isPass && _0x13007f.controlBar.getChild('playbackRateMenuButton').disable();
		$(_0x13007f.controlBar.progressControl.el_).find('.vjs-play-progress').append('<i></i>');
		_0x13007f.controlBar.addChild('button', {
			'el': videojs.createEl('button', {
				'id': 'vjs-fast-replay-button',
				'title': langMap.back10,
				'className': 'vjs-icon-previous-item vjs-fast-replay-button vjs-control vjs-button',
				'innerHTML': '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">快退</span>',
				'onclick': function () {
					(_0x45c1e7.params.enableFastForward == 1 || _0x13007f.switchStatus || _0x13007f.finished) && _0x13007f.currentTime(_0x13007f.currentTime() - 10);
				}
			})
		});
		_0x13007f.controlBar.addChild('button', {
			'text': '快进',
			'el': videojs.createEl('button', {
				'id': 'vjs-fast-forward-button',
				'title': langMap.fast10,
				'className': 'vjs-icon-next-item vjs-fast-forward-button vjs-control vjs-button',
				'innerHTML': '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">快进</span>',
				'onclick': function () {
					(_0x45c1e7.params.enableFastForward == 1 || _0x13007f.switchStatus || _0x13007f.finished) && _0x13007f.currentTime(_0x13007f.currentTime() + 10);
				}
			})
		});
		_0x45c1e7.params.control && _0x45c1e7.params.enableFastForward != 1 && !_0x13007f.switchStatus && !_0x13007f.finished && (_0x13007f.controlBar.getChildById('vjs-fast-replay-button').disable(), _0x13007f.controlBar.getChildById('vjs-fast-forward-button').disable());
		Ext.fly(_0x45c1e7.videojs).on('contextmenu', function (_0x2973d2) {
			_0x2973d2.preventDefault();
		});
		Ext.fly(_0x45c1e7.videojs).on('keydown', function (_0x4f9ad2) {
			(_0x4f9ad2.keyCode == 32 || _0x4f9ad2.keyCode == 37 || _0x4f9ad2.keyCode == 39) && _0x4f9ad2.preventDefault();
			_0x4f9ad2.keyCode == 32 && (_0x13007f.paused() ? _0x13007f.play() : _0x13007f.pause());
		});
	},
	'params2VideoOpt': function (_0x1793a9) {
		var _0x2ccc90 = [];
		!_0x1793a9.rootPath && (_0x1793a9.rootPath = '');
		_0x1793a9.http && _0x2ccc90.push({
			'src': _0x1793a9.http,
			'type': 'audio/mp3'
		});
		var _0x1c851f = function (_0x11cc88, _0x2ecc20, _0x4ac9ce) {
			var _0x58012d = this;
			!_0x58012d.logCount && (_0x58012d.logCount = 0);
			videojs.xhr({
				'uri': _0x2ecc20,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x52afc6, _0x12484e) {
				_0x58012d.logCount++;
				if (_0x12484e.statusCode == 200) {
					_0x58012d.logCount = 0;
					if (_0x12484e.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x12484e.body);
					d.isPassed && (_0x11cc88.finished = true, _0x11cc88.controlBar.getChild('playbackRateMenuButton').enable(), _0x11cc88.controlBar.getChildById('vjs-fast-replay-button').enable(), _0x11cc88.controlBar.getChildById('vjs-fast-forward-button').enable(), _0x4ac9ce());
					return;
				}
				if (_0x58012d.logCount >= 4) {
					_0x58012d.logCount = 0;
					_0x11cc88.pause();
					_0x12484e.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x12484e.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x3f14f8 = function (_0x4ea22d, _0x8c6c7f, _0x13f43a, _0x347941) {
			if (!_0x1793a9.reportUrl) {
				return;
			}
			if (_0x1793a9.isFiled == 1 || _0x1793a9.state == 1) {
				return;
			}
			var _0x573ec9 = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x1ec08f = (_0x1793a9.startTime || '0') + '_' + (_0x1793a9.endTime || _0x1793a9.duration), _0x9954c7 = 0, _0x2767e1;
			_0x13f43a.toString().indexOf('-') != -1 ? (_0x2767e1 = _0x13f43a.split('-'), _0x2767e1.length == 2 && (_0x9954c7 = parseInt(_0x2767e1[1]) * 1000)) : _0x9954c7 = _0x13f43a * 1000;
			if (_0x9954c7 == _0x1793a9.duration * 1000 && _0x8c6c7f == 2) {
				return;
			}
			var _0x331b80 = Ext.String.format(_0x573ec9, _0x1793a9.clazzId, _0x1793a9.userid, _0x1793a9.jobid ? _0x1793a9.jobid : '', _0x1793a9.objectId, _0x9954c7, 'd_yHJ!$pdA~5', _0x1793a9.duration * 1000, _0x1ec08f), _0x5baa58 = [
				_0x1793a9.reportUrl,
				'/',
				_0x1793a9.dtoken,
				'?clazzId=',
				_0x1793a9.clazzId,
				'&playingTime=',
				_0x13f43a,
				'&duration=',
				_0x1793a9.duration,
				'&clipTime=',
				_0x1ec08f,
				'&objectId=',
				_0x1793a9.objectId,
				'&otherInfo=',
				_0x1793a9.otherInfo,
				'&jobid=',
				_0x1793a9.jobid,
				'&userid=',
				_0x1793a9.userid,
				'&isdrag=',
				_0x8c6c7f,
				'&view=pc',
				'&enc=',
				md5(_0x331b80),
				'&rt=',
				_0x1793a9.rt,
				'&dtype=Audio',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x1c851f(_0x4ea22d, _0x5baa58, _0x347941);
		};
		return {
			'language': 'zh-CN',
			'controls': true,
			'preload': 'auto',
			'bigPlayButton': false,
			'sources': _0x2ccc90,
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
				'audioNote': { 'title': _0x1793a9.filename },
				'studyControl': { 'enableSwitchWindow': 1 },
				'seekBarControl': {
					'headOffset': _0x1793a9.headOffset,
					'enableFastForward': _0x1793a9.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0x1793a9.control,
					'reportTimeInterval': _0x1793a9.reportTimeInterval,
					'sourcePlayer': 'audio',
					'sendLog': function (_0x1ce82c, _0x1413cb, _0x5a5b4d) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x4a45a5 = 0;
						switch (_0x1413cb) {
							case 'playing':
								_0x4a45a5 = 0;
								break;
							case 'drag':
								_0x4a45a5 = 1;
								break;
							case 'play':
								_0x4a45a5 = 3;
								break;
							case 'pause':
								_0x4a45a5 = 2;
								break;
							case 'ended':
								_0x4a45a5 = 4;
								break;
						}
						_0x3f14f8(_0x1ce82c, _0x4a45a5, _0x5a5b4d, function () {
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
	var _0x59480e = videojs.getPlugin('plugin'), _0x55cbf2 = videojs.extend(_0x59480e, {
		'constructor': function (_0x4f2c68, _0x2959e5) {
			_0x59480e.call(this, _0x4f2c68, _0x2959e5);
			Ext.create('ans.videojs.AudioNote', {
				'renderTo': _0x4f2c68.el_,
				'html': _0x2959e5.title
			});
		}
	});
	videojs.registerPlugin('audioNote', _0x55cbf2);
}());