Ext.define('ananas.ServerHosts', {
	'alternateClassName': 'ServerHosts',
	'singleton': true,
	'constructor': function () {
		var _0x260afe = this;
		_0x260afe.callParent(arguments);
		var _0x39b18d = document.domain;
		try {
			_0x260afe.MASTER_HOST = location.protocol + '//' + top.location.host;
		} catch (_0xa0e9d1) {
			_0x260afe.MASTER_HOST = location.protocol + '//' + location.host;
		}
		try {
			_0x260afe.PARENT_HOST = parent.location.host !== '' ? location.protocol + '//' + parent.location.host : _0x260afe.MASTER_HOST;
		} catch (_0x563e05) {
			_0x260afe.PARENT_HOST = location.protocol + '//' + location.host;
		}
		_0x260afe.P_HOST = location.protocol + '//p.ananas.chaoxing.com';
		_0x260afe.s1_HOST = location.protocol + '//s1.ananas.chaoxing.com';
		_0x260afe.s2_HOST = location.protocol + '//s2.ananas.chaoxing.com';
		_0x260afe.CLOUD_HOST = 'http://cloud.ananas.' + _0x39b18d;
		_0x260afe.NEW_CLOUD_HOST = location.protocol + '//pan-yz.chaoxing.com';
		_0x260afe.CS_HOST = location.protocol + '//cs.ananas.' + _0x39b18d;
		_0x260afe.FANYA_HOST = 'http://course.fanya.' + _0x39b18d;
		_0x260afe.PAN_HOST = 'http://pan.ananas.' + _0x39b18d;
		_0x260afe.CXLIVE_HOST = 'http://cxlive.' + _0x39b18d;
		_0x260afe.ERYA_TSK_HOST = 'http://erya.tsk.' + _0x39b18d;
		_0x260afe.QUESTIONNAIRE_HOST = 'http://surveyapp.fy.' + _0x39b18d;
		_0x260afe.FX_HOST = 'http://www.' + _0x39b18d;
		_0x260afe.PHONE_ZT_HOST = 'https://special.rhky.com';
		_0x260afe.CHAOXING_CLASS_HOST = 'https://k.chaoxing.com';
		_0x260afe.LIVE_HOST = location.protocol + '//live.chaoxing.com';
		_0x260afe.APPCD_HOST = location.protocol + '//appcd.chaoxing.com';
		_0x260afe.ZHIBO_HOST = 'https://zhibo.chaoxing.com';
		_0x260afe.CXCLASSTASL_HOST = location.protocol + '//noteyd.chaoxing.com';
	}
});
(function (_0x35bbcd) {
	function _0x53796e(_0x497301, _0xf280c2) {
		var _0x1e5ec6 = (_0x497301 & 65535) + (_0xf280c2 & 65535), _0x1de3b7 = (_0x497301 >> 16) + (_0xf280c2 >> 16) + (_0x1e5ec6 >> 16);
		return _0x1de3b7 << 16 | _0x1e5ec6 & 65535;
	}
	function _0x51c143(_0x27c2d9, _0x583b95) {
		return _0x27c2d9 << _0x583b95 | _0x27c2d9 >>> 32 - _0x583b95;
	}
	function _0x1e938c(_0x2582b6, _0x1cd670, _0x4f490b, _0x4e692a, _0x5b1fad, _0x229595) {
		return _0x53796e(_0x51c143(_0x53796e(_0x53796e(_0x1cd670, _0x2582b6), _0x53796e(_0x4e692a, _0x229595)), _0x5b1fad), _0x4f490b);
	}
	function _0x5cb3fc(_0x40f007, _0x532c2a, _0x336b68, _0x92dbb1, _0x471911, _0x1f8c3f, _0x480c3e) {
		return _0x1e938c(_0x532c2a & _0x336b68 | ~_0x532c2a & _0x92dbb1, _0x40f007, _0x532c2a, _0x471911, _0x1f8c3f, _0x480c3e);
	}
	function _0x419c25(_0x319920, _0xe7d89f, _0x5382ee, _0x42114f, _0x5dc2cc, _0x46ff43, _0x3a4540) {
		return _0x1e938c(_0xe7d89f & _0x42114f | _0x5382ee & ~_0x42114f, _0x319920, _0xe7d89f, _0x5dc2cc, _0x46ff43, _0x3a4540);
	}
	function _0x5b685c(_0x1fa447, _0x5595ff, _0x503084, _0x2d62b4, _0xb3f3ef, _0x4847af, _0x4c8edf) {
		return _0x1e938c(_0x5595ff ^ _0x503084 ^ _0x2d62b4, _0x1fa447, _0x5595ff, _0xb3f3ef, _0x4847af, _0x4c8edf);
	}
	function _0x58778a(_0x153d3a, _0xd9f512, _0x4249c2, _0xd9b5f0, _0x86c522, _0x5cb3d2, _0x3e77c6) {
		return _0x1e938c(_0x4249c2 ^ (_0xd9f512 | ~_0xd9b5f0), _0x153d3a, _0xd9f512, _0x86c522, _0x5cb3d2, _0x3e77c6);
	}
	function _0x1e2800(_0x2a5650, _0x18af24) {
		_0x2a5650[_0x18af24 >> 5] |= 128 << _0x18af24 % 32;
		_0x2a5650[(_0x18af24 + 64 >>> 9 << 4) + 14] = _0x18af24;
		var _0x3ee5a1, _0x502fe3, _0x13ff1e, _0x2c4ab6, _0x2a881c, _0x3866a3 = 1732584193, _0x146d09 = -271733879, _0x4fc07c = -1732584194, _0xc904a = 271733878;
		for (_0x3ee5a1 = 0; _0x3ee5a1 < _0x2a5650.length; _0x3ee5a1 += 16) {
			_0x502fe3 = _0x3866a3;
			_0x13ff1e = _0x146d09;
			_0x2c4ab6 = _0x4fc07c;
			_0x2a881c = _0xc904a;
			_0x3866a3 = _0x5cb3fc(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1], 7, -680876936);
			_0xc904a = _0x5cb3fc(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1 + 1], 12, -389564586);
			_0x4fc07c = _0x5cb3fc(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 2], 17, 606105819);
			_0x146d09 = _0x5cb3fc(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1 + 3], 22, -1044525330);
			_0x3866a3 = _0x5cb3fc(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1 + 4], 7, -176418897);
			_0xc904a = _0x5cb3fc(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1 + 5], 12, 1200080426);
			_0x4fc07c = _0x5cb3fc(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 6], 17, -1473231341);
			_0x146d09 = _0x5cb3fc(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1 + 7], 22, -45705983);
			_0x3866a3 = _0x5cb3fc(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1 + 8], 7, 1770035416);
			_0xc904a = _0x5cb3fc(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1 + 9], 12, -1958414417);
			_0x4fc07c = _0x5cb3fc(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 10], 17, -42063);
			_0x146d09 = _0x5cb3fc(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1 + 11], 22, -1990404162);
			_0x3866a3 = _0x5cb3fc(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1 + 12], 7, 1804603682);
			_0xc904a = _0x5cb3fc(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1 + 13], 12, -40341101);
			_0x4fc07c = _0x5cb3fc(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 14], 17, -1502002290);
			_0x146d09 = _0x5cb3fc(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1 + 15], 22, 1236535329);
			_0x3866a3 = _0x419c25(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1 + 1], 5, -165796510);
			_0xc904a = _0x419c25(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1 + 6], 9, -1069501632);
			_0x4fc07c = _0x419c25(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 11], 14, 643717713);
			_0x146d09 = _0x419c25(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1], 20, -373897302);
			_0x3866a3 = _0x419c25(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1 + 5], 5, -701558691);
			_0xc904a = _0x419c25(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1 + 10], 9, 38016083);
			_0x4fc07c = _0x419c25(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 15], 14, -660478335);
			_0x146d09 = _0x419c25(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1 + 4], 20, -405537848);
			_0x3866a3 = _0x419c25(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1 + 9], 5, 568446438);
			_0xc904a = _0x419c25(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1 + 14], 9, -1019803690);
			_0x4fc07c = _0x419c25(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 3], 14, -187363961);
			_0x146d09 = _0x419c25(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1 + 8], 20, 1163531501);
			_0x3866a3 = _0x419c25(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1 + 13], 5, -1444681467);
			_0xc904a = _0x419c25(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1 + 2], 9, -51403784);
			_0x4fc07c = _0x419c25(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 7], 14, 1735328473);
			_0x146d09 = _0x419c25(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1 + 12], 20, -1926607734);
			_0x3866a3 = _0x5b685c(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1 + 5], 4, -378558);
			_0xc904a = _0x5b685c(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1 + 8], 11, -2022574463);
			_0x4fc07c = _0x5b685c(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 11], 16, 1839030562);
			_0x146d09 = _0x5b685c(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1 + 14], 23, -35309556);
			_0x3866a3 = _0x5b685c(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1 + 1], 4, -1530992060);
			_0xc904a = _0x5b685c(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1 + 4], 11, 1272893353);
			_0x4fc07c = _0x5b685c(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 7], 16, -155497632);
			_0x146d09 = _0x5b685c(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1 + 10], 23, -1094730640);
			_0x3866a3 = _0x5b685c(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1 + 13], 4, 681279174);
			_0xc904a = _0x5b685c(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1], 11, -358537222);
			_0x4fc07c = _0x5b685c(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 3], 16, -722521979);
			_0x146d09 = _0x5b685c(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1 + 6], 23, 76029189);
			_0x3866a3 = _0x5b685c(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1 + 9], 4, -640364487);
			_0xc904a = _0x5b685c(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1 + 12], 11, -421815835);
			_0x4fc07c = _0x5b685c(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 15], 16, 530742520);
			_0x146d09 = _0x5b685c(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1 + 2], 23, -995338651);
			_0x3866a3 = _0x58778a(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1], 6, -198630844);
			_0xc904a = _0x58778a(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1 + 7], 10, 1126891415);
			_0x4fc07c = _0x58778a(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 14], 15, -1416354905);
			_0x146d09 = _0x58778a(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1 + 5], 21, -57434055);
			_0x3866a3 = _0x58778a(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1 + 12], 6, 1700485571);
			_0xc904a = _0x58778a(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1 + 3], 10, -1894986606);
			_0x4fc07c = _0x58778a(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 10], 15, -1051523);
			_0x146d09 = _0x58778a(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1 + 1], 21, -2054922799);
			_0x3866a3 = _0x58778a(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1 + 8], 6, 1873313359);
			_0xc904a = _0x58778a(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1 + 15], 10, -30611744);
			_0x4fc07c = _0x58778a(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 6], 15, -1560198380);
			_0x146d09 = _0x58778a(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1 + 13], 21, 1309151649);
			_0x3866a3 = _0x58778a(_0x3866a3, _0x146d09, _0x4fc07c, _0xc904a, _0x2a5650[_0x3ee5a1 + 4], 6, -145523070);
			_0xc904a = _0x58778a(_0xc904a, _0x3866a3, _0x146d09, _0x4fc07c, _0x2a5650[_0x3ee5a1 + 11], 10, -1120210379);
			_0x4fc07c = _0x58778a(_0x4fc07c, _0xc904a, _0x3866a3, _0x146d09, _0x2a5650[_0x3ee5a1 + 2], 15, 718787259);
			_0x146d09 = _0x58778a(_0x146d09, _0x4fc07c, _0xc904a, _0x3866a3, _0x2a5650[_0x3ee5a1 + 9], 21, -343485551);
			_0x3866a3 = _0x53796e(_0x3866a3, _0x502fe3);
			_0x146d09 = _0x53796e(_0x146d09, _0x13ff1e);
			_0x4fc07c = _0x53796e(_0x4fc07c, _0x2c4ab6);
			_0xc904a = _0x53796e(_0xc904a, _0x2a881c);
		}
		return [
			_0x3866a3,
			_0x146d09,
			_0x4fc07c,
			_0xc904a
		];
	}
	function _0x39d48a(_0x108113) {
		var _0x3cb0c0, _0xf1499 = '', _0x36e524 = _0x108113.length * 32;
		for (_0x3cb0c0 = 0; _0x3cb0c0 < _0x36e524; _0x3cb0c0 += 8) {
			_0xf1499 += String.fromCharCode(_0x108113[_0x3cb0c0 >> 5] >>> _0x3cb0c0 % 32 & 255);
		}
		return _0xf1499;
	}
	function _0x1c3efd(_0x13e543) {
		var _0xc77ffb, _0x1455f5 = [];
		_0x1455f5[(_0x13e543.length >> 2) - 1] = undefined;
		for (_0xc77ffb = 0; _0xc77ffb < _0x1455f5.length; _0xc77ffb += 1) {
			_0x1455f5[_0xc77ffb] = 0;
		}
		var _0x4be7c9 = _0x13e543.length * 8;
		for (_0xc77ffb = 0; _0xc77ffb < _0x4be7c9; _0xc77ffb += 8) {
			_0x1455f5[_0xc77ffb >> 5] |= (_0x13e543.charCodeAt(_0xc77ffb / 8) & 255) << _0xc77ffb % 32;
		}
		return _0x1455f5;
	}
	function _0x132b75(_0x95b4c8) {
		return _0x39d48a(_0x1e2800(_0x1c3efd(_0x95b4c8), _0x95b4c8.length * 8));
	}
	function _0x4d42d3(_0x1d08ef, _0x515b11) {
		var _0x35317c, _0x46d721 = _0x1c3efd(_0x1d08ef), _0x24195b = [], _0x21f890 = [], _0x19195f;
		_0x24195b[15] = _0x21f890[15] = undefined;
		_0x46d721.length > 16 && (_0x46d721 = _0x1e2800(_0x46d721, _0x1d08ef.length * 8));
		for (_0x35317c = 0; _0x35317c < 16; _0x35317c += 1) {
			_0x24195b[_0x35317c] = _0x46d721[_0x35317c] ^ 909522486;
			_0x21f890[_0x35317c] = _0x46d721[_0x35317c] ^ 1549556828;
		}
		return _0x19195f = _0x1e2800(_0x24195b.concat(_0x1c3efd(_0x515b11)), 512 + _0x515b11.length * 8), _0x39d48a(_0x1e2800(_0x21f890.concat(_0x19195f), 640));
	}
	function _0x33c937(_0x32b19d) {
		var _0x3595a1 = '0123456789abcdef', _0xa33b73 = '', _0x2f3cda, _0x1fa557;
		for (_0x1fa557 = 0; _0x1fa557 < _0x32b19d.length; _0x1fa557 += 1) {
			_0x2f3cda = _0x32b19d.charCodeAt(_0x1fa557);
			_0xa33b73 += _0x3595a1.charAt(_0x2f3cda >>> 4 & 15) + _0x3595a1.charAt(_0x2f3cda & 15);
		}
		return _0xa33b73;
	}
	function _0x1f5f0b(_0x50193e) {
		return unescape(encodeURIComponent(_0x50193e));
	}
	function _0x4e6ef4(_0x129a0f) {
		return _0x132b75(_0x1f5f0b(_0x129a0f));
	}
	function _0xd77902(_0x59c8b5) {
		return _0x33c937(_0x4e6ef4(_0x59c8b5));
	}
	function _0x6300aa(_0x4cedf2, _0x279b95) {
		return _0x4d42d3(_0x1f5f0b(_0x4cedf2), _0x1f5f0b(_0x279b95));
	}
	function _0x5a6a5a(_0x25a419, _0x47e722) {
		return _0x33c937(_0x6300aa(_0x25a419, _0x47e722));
	}
	function _0x5ad170(_0x295c7a, _0x418836, _0x1ba0de) {
		if (!_0x418836) {
			if (!_0x1ba0de) {
				return _0xd77902(_0x295c7a);
			}
			return _0x4e6ef4(_0x295c7a);
		}
		if (!_0x1ba0de) {
			return _0x5a6a5a(_0x418836, _0x295c7a);
		}
		return _0x6300aa(_0x418836, _0x295c7a);
	}
	typeof define === 'function' && define.amd ? define(function () {
		return _0x5ad170;
	}) : typeof module === 'object' && module.exports ? module.exports = _0x5ad170 : _0x35bbcd.md5 = _0x5ad170;
}(this));
Ext.apply(Ext, {
	'setCookie': function (_0x26d2ac, _0x28bfc3) {
		var _0x1bfb38 = arguments, _0x165f8f = arguments.length, _0xe9974 = _0x165f8f > 2 ? _0x1bfb38[2] : null, _0x4a65b9 = _0x165f8f > 3 ? _0x1bfb38[3] : '/', _0x117f21 = _0x165f8f > 4 ? _0x1bfb38[4] : null, _0x4a43fb = _0x165f8f > 5 ? _0x1bfb38[5] : false;
		document.cookie = _0x26d2ac + '=' + escape(_0x28bfc3) + (_0xe9974 === null ? '' : '; expires=' + _0xe9974.toGMTString()) + (_0x4a65b9 === null ? '' : '; path=' + _0x4a65b9) + (_0x117f21 === null ? '' : '; domain=' + _0x117f21) + (_0x4a43fb === true ? '; secure' : '');
	},
	'getCookie': function (_0x1b557b, _0x1b6ded) {
		var _0x2a15d3 = _0x1b557b + '=', _0x3afa45 = _0x2a15d3.length, _0x486db8 = document.cookie.length, _0x483a90 = 0, _0x2d6e05 = 0;
		while (_0x483a90 < _0x486db8) {
			_0x2d6e05 = _0x483a90 + _0x3afa45;
			if (document.cookie.substring(_0x483a90, _0x2d6e05) == _0x2a15d3) {
				return this.getCookieVal(_0x2d6e05);
			}
			_0x483a90 = document.cookie.indexOf(' ', _0x483a90) + 1;
			if (_0x483a90 === 0) {
				break;
			}
		}
		return _0x1b6ded;
	},
	'getCookieVal': function (_0x87e3c9) {
		var _0x5022c6 = document.cookie.indexOf(';', _0x87e3c9);
		return _0x5022c6 == -1 && (_0x5022c6 = document.cookie.length), unescape(document.cookie.substring(_0x87e3c9, _0x5022c6));
	}
});
Ext.define('ans.VideoJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x166813) {
		_0x166813 = _0x166813 || {};
		var _0x4c4c40 = this;
		_0x4c4c40.addEvents(['seekstart']);
		_0x4c4c40.mixins.observable.constructor.call(_0x4c4c40, _0x166813);
		var _0x277f4c = videojs(_0x166813.videojs, _0x4c4c40.params2VideoOpt(_0x166813.params), function () {
		});
		_0x277f4c.eventCount = 0;
		Ext.fly(_0x166813.videojs).on('contextmenu', function (_0x17096d) {
			_0x17096d.preventDefault();
		});
		$('.video-js').attr('tabindex', 1);
		$('.vjs-big-play-button').on('click', function (_0x3f6cc6) {
			$('.video-js').focus();
		});
		Ext.fly(_0x166813.videojs).on('keydown', function (_0x192d32) {
			(_0x192d32.keyCode == 32 || _0x192d32.keyCode == 37 || _0x192d32.keyCode == 39 || _0x192d32.keyCode == 107) && _0x192d32.preventDefault();
			_0x192d32.keyCode == 32 && (_0x277f4c.paused() ? _0x277f4c.play() : _0x277f4c.pause());
		});
		_0x277f4c.videoJsResolutionSwitcher && _0x277f4c.on('resolutionchange', function () {
			var _0x2fbb5b = _0x277f4c.currentResolution(), _0x573cb8 = _0x2fbb5b.sources ? _0x2fbb5b.sources[0].res : false;
			Ext.setCookie('resolution', _0x573cb8);
		});
		var _0x485370 = _0x166813.params && _0x166813.params.doublespeed ? 2 : 1, _0x460b1c = true;
		_0x277f4c.on('ratechange', function () {
			var _0x2a0a47 = _0x277f4c.playbackRate();
			_0x2a0a47 > _0x485370 ? (_0x277f4c.pause(), _0x277f4c.playbackRate(1)) : Ext.setCookie('doubleSpeedValue', _0x2a0a47);
			if (typeof aplus_queue != 'undefined' && !_0x460b1c) {
				var _0x5d2abe = _0x166813.params && _0x166813.params.aplus_video_id ? _0x166813.params.aplus_video_id : '', _0x5ab6c4 = _0x166813.params && _0x166813.params.aplus_resource_id ? _0x166813.params.aplus_resource_id : '', _0x2b6d46 = _0x166813.params && _0x166813.params.knowledgename ? _0x166813.params.knowledgename : '', _0x29d16b = _0x166813.params && _0x166813.params.coursename ? _0x166813.params.coursename : '';
				aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_speed_click',
						'CLK',
						{
							'video_name': _0x2b6d46,
							'video_id': _0x5d2abe,
							'resource_id': _0x5ab6c4,
							'resource_name': _0x29d16b,
							'speed_type': _0x277f4c.playbackRate()
						}
					]
				});
			}
			_0x460b1c = false;
		});
		_0x277f4c.on('play', function () {
			try {
				$('.video-js').focus();
				if (_0x166813.params && _0x166813.params.doublespeed && parseInt(_0x166813.params.doublespeed) === 1) {
					var _0xa1e468 = Ext.getCookie('doubleSpeedValue', 1);
					_0x277f4c.playbackRate(_0xa1e468);
				}
				$('.vjs-playback-rate').removeClass('vjs-hidden');
				$('.vjs-playback-rate .vjs-menu .vjs-menu-content li').length == 0 && $('.vjs-playback-rate-value').css('opacity', '0.4');
			} catch (_0xa19e6d) {
				console.log(_0xa19e6d);
			}
		});
		_0x277f4c.on('ended', function () {
			try {
				_0x166813.params.enableFastForward = 1;
				_0x277f4c.finished = true;
				_0x277f4c.disableSeek(false);
				$('.vjs-progress-control').unbind('click');
			} catch (_0x4a0364) {
				console.log(_0x4a0364);
			}
		});
	},
	'params2VideoOpt': function (_0xd37b18) {
		var _0x2c5041 = typeof _0xd37b18.cpi == 'undefined' ? 0 : _0xd37b18.cpi, _0x30a5b8 = false, _0x145eaf = [
			{
				'indexorder': 0,
				'label': '公网1',
				'url': ServerHosts.s1_HOST,
				'ispublic': true
			},
			{
				'indexorder': 1,
				'label': '公网2',
				'url': ServerHosts.s2_HOST,
				'ispublic': true
			}
		];
		if (_0xd37b18.cdn) {
			try {
				top.window.app && top.window.app == 2 ? _0x145eaf = _0x145eaf.concat(_0xd37b18.cdn) : _0x145eaf = _0x145eaf.concat(_0xd37b18.cdn).sort(function (_0x157e92, _0x17e854) {
					return _0x157e92.indexorder - _0x17e854.indexorder;
				});
			} catch (_0x4431e1) {
				_0x145eaf = _0x145eaf.concat(_0xd37b18.cdn);
			}
		}
		function _0x50c861(_0x50902f, _0x293a70, _0x1db8c2) {
			return 'http://hls-ans.chaoxing.com/hls/m3u8/' + _0x50902f + '/' + _0x293a70 + '.m3u8?cdn=' + encodeURIComponent(_0x1db8c2);
		}
		function _0x13a3c8(_0x2fa652, _0x5d01a9) {
			var _0x48f837 = ServerHosts.s1_HOST.replace('http:/', '').replace('https:/', ''), _0x3b3563 = 0;
			_0x2fa652.src.indexOf(_0x48f837) > -1 && (_0x3b3563 = _0x2fa652.src.indexOf(_0x48f837) + _0x48f837.length);
			var _0x3998af = _0x2fa652.src.substr(_0x3b3563);
			if (_0x5d01a9.ispublic && _0x3b3563 == 0) {
				return {
					'src': _0x3998af,
					'type': 'video/mp4',
					'res': _0x2fa652.res
				};
			}
			return _0x5d01a9.ispublic ? _0x30a5b8 ? {
				'src': _0x50c861(_0xd37b18.objectId, _0x2fa652.resolution, _0x5d01a9.url),
				'type': 'application/x-mpegURL',
				'res': _0x2fa652.res
			} : {
				'src': _0x5d01a9.url + _0x3998af,
				'type': 'video/mp4',
				'res': _0x2fa652.res
			} : _0x30a5b8 ? {
				'src': _0x50c861(_0xd37b18.objectId, _0x2fa652.resolution, _0x5d01a9.url + _0x48f837),
				'type': 'application/x-mpegURL',
				'res': _0x2fa652.res
			} : {
				'src': _0x5d01a9.url + _0x48f837 + _0x3998af,
				'type': 'video/mp4',
				'res': _0x2fa652.res
			};
		}
		var _0x3f0555 = [], _0x1c1fc5 = Ext.getCookie('resolution', 360);
		!_0xd37b18.rootPath && (_0xd37b18.rootPath = '');
		_0xd37b18.http && _0x3f0555.push({
			'src': _0xd37b18.http,
			'type': 'video/mp4',
			'label': '标清',
			'resolution': 'sd',
			'res': 360
		});
		_0xd37b18.httphd && _0x3f0555.push({
			'src': _0xd37b18.httphd,
			'type': 'video/mp4',
			'label': '高清',
			'resolution': 'hd',
			'res': 720
		});
		_0xd37b18.httpshd && _0x3f0555.push({
			'src': _0xd37b18.httpshd,
			'type': 'video/mp4',
			'label': '超高清',
			'resolution': 'shd',
			'res': 1080
		});
		_0xd37b18.httpmd && _0x3f0555.push({
			'src': _0xd37b18.httpmd,
			'type': 'video/mp4',
			'label': '极速',
			'resolution': 'md',
			'res': 240
		});
		if (_0x3f0555.length == 1) {
			var _0x5e42ca = _0x3f0555[0];
			_0x5e42ca.label = '高清';
		}
		var _0x4500d4 = false;
		for (var _0x2c7094 = 0; _0x2c7094 < _0x3f0555.length; _0x2c7094++) {
			if (_0x3f0555[_0x2c7094].res == _0x1c1fc5) {
				_0x4500d4 = true;
				break;
			}
		}
		!_0x4500d4 && (_0x1c1fc5 = 360);
		var _0x41cd75 = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid), _0x511e5b = function (_0x42b2b3, _0x3410c1, _0x4d14fd, _0x4f83b4) {
			try {
				if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && isUnFinishJob()) {
					return;
				}
				if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && isUnFinishJob()) {
					return;
				}
			} catch (_0x5d5286) {
				console.log(_0x5d5286);
			}
			if (_0x41cd75) {
				return;
			}
			var _0x4daedf = this;
			!_0x4daedf.logCount && (_0x4daedf.logCount = 0);
			videojs.xhr({
				'uri': _0x3410c1,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x3d26ec, _0x246629) {
				_0x4daedf.logCount++;
				if (_0x246629.statusCode == 200) {
					_0x4daedf.logCount = 0;
					if (_0x246629.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x246629.body);
					if (d.isPassed) {
						try {
							typeof d.hasJobLimit != 'undefined' && d.hasJobLimit === true && (top.allowNextVideo = false, top.hasJobLimit = true);
							typeof d.videoTimeLimit != 'undefined' && d.videoTimeLimit === true && (top.allowNextVideo = false, top.videoTimeLimit = true);
						} catch (_0x5cf43b) {
							console.log(_0x5cf43b);
						}
						_0x4f83b4();
					} else {
						!_0x4d14fd && _0x4f83b4();
					}
					return;
				}
				if (_0x4daedf.logCount >= 4) {
					_0x4daedf.logCount = 0;
					_0x42b2b3.pause();
					if (_0x246629.statusCode != 0) {
						if (_0x246629.statusCode == 202 || _0x246629.statusCode == 302) {
							try {
								parent.location.reload();
							} catch (_0x559660) {
								console.log(_0x559660.message);
							}
						} else {
							alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x246629.statusCode + ')');
						}
					} else {
						alert('您的网络不稳定\uFF0C请您稍后继续...');
					}
				}
			});
		}, _0x19a219 = function (_0x5531fe, _0xb86450, _0x3130f9, _0x2b90fa) {
			if (!_0xd37b18.reportUrl) {
				return;
			}
			if (_0xd37b18.isFiled == 1 || _0xd37b18.state == 1) {
				return;
			}
			var _0x758ac = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x2561b0 = (_0xd37b18.startTime || '0') + '_' + (_0xd37b18.endTime || _0xd37b18.duration), _0x1e8b88 = 0, _0x5af8a1;
			_0x3130f9.toString().indexOf('-') != -1 ? (_0x5af8a1 = _0x3130f9.split('-'), _0x5af8a1.length == 2 && (_0x1e8b88 = parseInt(_0x5af8a1[1]) * 1000)) : _0x1e8b88 = _0x3130f9 * 1000;
			if (_0x1e8b88 == _0xd37b18.duration * 1000 && _0xb86450 == 2) {
				return;
			}
			var _0x399f19 = Ext.String.format(_0x758ac, _0xd37b18.clazzId, _0xd37b18.userid, _0xd37b18.jobid || '', _0xd37b18.objectId, _0x1e8b88, 'd_yHJ!$pdA~5', _0xd37b18.duration * 1000, _0x2561b0), _0x1da0a4 = [
				_0xd37b18.reportUrl,
				'/',
				_0xd37b18.dtoken,
				'?clazzId=',
				_0xd37b18.clazzId,
				'&playingTime=',
				_0x3130f9,
				'&duration=',
				_0xd37b18.duration,
				'&clipTime=',
				_0x2561b0,
				'&objectId=',
				_0xd37b18.objectId,
				'&otherInfo=',
				_0xd37b18.otherInfo,
				'&jobid=',
				_0xd37b18.jobid,
				'&userid=',
				_0xd37b18.userid,
				'&isdrag=',
				_0xb86450,
				'&view=pc',
				'&enc=',
				md5(_0x399f19),
				'&rt=',
				_0xd37b18.rt,
				'&dtype=Video',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x511e5b(_0x5531fe, _0x1da0a4, _0xd37b18.jobid, _0x2b90fa);
		};
		return {
			'language': 'zh-CN',
			'poster': _0xd37b18.screenshot,
			'controls': true,
			'preload': 'none',
			'sources': _0x3f0555,
			'playlines': _0x145eaf,
			'playbackRates': _0xd37b18.doublespeed != 0 ? [
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
					'default': _0x1c1fc5,
					'dynamicLabel': true,
					'customSourcePicker': function (_0x42f616, _0x25ee51, _0x395eeb) {
						var _0x337a57 = _0x42f616.currentPlayline();
						_0x42f616.src(_0x25ee51.map(function (_0x58c0f1) {
							return _0x13a3c8(_0x58c0f1, _0x337a57);
						}));
						if (typeof aplus_queue != 'undefined') {
							function _0x5ed39a() {
								var _0x44e56a = '';
								for (var _0x532396 = 1; _0x532396 <= 32; _0x532396++) {
									var _0x18463f = Math.floor(Math.random() * 16).toString(16);
									_0x44e56a += _0x18463f;
									(_0x532396 == 8 || _0x532396 == 12 || _0x532396 == 16 || _0x532396 == 20) && (_0x44e56a += '-');
								}
								return _0x44e56a;
							}
							typeof aplus_queue != 'undefined' && aplus_queue.push({
								'action': 'aplus.record',
								'arguments': [
									'video_positive_load',
									'CLK',
									{
										'video_name': _0xd37b18.knowledgename || '',
										'video_id': _0xd37b18.aplus_video_id || '',
										'resource_id': _0xd37b18.aplus_resource_id || '',
										'resource_name': _0xd37b18.coursename || '',
										'video_duration': _0xd37b18.duration,
										'request_id': _0x5ed39a()
									}
								]
							});
						}
						return _0x42f616;
					}
				},
				'videoJsPlayLine': {
					'dynamicLabel': true,
					'customSourcePicker': function (_0x4061a5, _0x4deaf9, _0x276cb2) {
						var _0x4ffb88 = _0x4061a5.currentResolution().sources[0];
						return _0x4061a5.src(_0x13a3c8(_0x4ffb88, _0x4deaf9)), _0x4061a5;
					}
				},
				'studyControl': { 'enableSwitchWindow': _0xd37b18.enableSwitchWindow },
				'seekBarControl': {
					'headOffset': _0xd37b18.headOffset,
					'enableFastForward': _0xd37b18.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0xd37b18.control,
					'reportTimeInterval': _0xd37b18.reportTimeInterval,
					'isShowDanmu': _0xd37b18.danmaku,
					'chapterCapture': _0xd37b18.chapterCapture || 0,
					'captureInterval': _0xd37b18.captureInterval || 600,
					'chapterCollectionType': _0xd37b18.chapterCollectionType || 0,
					'startCapture': _0xd37b18.startCapture,
					'endCapture': _0xd37b18.endCapture,
					'playAginCapture': _0xd37b18.playAginCapture,
					'playingCapture': _0xd37b18.playingCapture,
					'playingLoopCapture': _0xd37b18.playingLoopCapture,
					'duration': _0xd37b18.duration,
					'isSupportFace': _0xd37b18.isSupportFace || false,
					'isShowFaceCollection': _0xd37b18.isShowFaceCollection,
					'jumpTimePointList': _0xd37b18.jumpTimePointList,
					'attachmentId': _0xd37b18.aId,
					'aplusVideoId': _0xd37b18.aplus_video_id || '',
					'aplusResourseId': _0xd37b18.aplus_resource_id || '',
					'aplusVideoName': _0xd37b18.knowledgename || '',
					'aplusResourceName': _0xd37b18.coursename || '',
					'sourcePlayer': 'video',
					'sendLog': function (_0x44bbd7, _0x74d73a, _0x1b53cd, _0x5469af) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x3caa26 = 0;
						switch (_0x74d73a) {
							case 'playing':
								_0x3caa26 = 0;
								break;
							case 'drag':
								_0x3caa26 = 1;
								break;
							case 'play':
								_0x3caa26 = 3;
								break;
							case 'pause':
								_0x3caa26 = 2;
								break;
							case 'ended':
								_0x3caa26 = 4;
								break;
						}
						var _0x336897 = this;
						_0x19a219(_0x44bbd7, _0x3caa26, _0x1b53cd, function () {
							try {
								_0x3caa26 === 4 && typeof _0x5469af != 'undefined' && (_0x5469af.sendDataLog('ended'), _0x5469af.playNextVideo(_0x336897.attachmentId));
							} catch (_0xcc315) {
								console.log(_0xcc315);
							}
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				'timelineObjects': {
					'begins': _0xd37b18.begins,
					'ends': _0xd37b18.ends,
					'url': _0xd37b18.rootPath + '/richvideo/initdatawithviewerV2?mid=' + _0xd37b18.mid + '&cpi=' + _0xd37b18.cpi + '&classid=' + _0xd37b18.clazzId,
					'quizErrorReportUrl': _0xd37b18.rootPath + '/question/addquestionerror?classid=' + _0xd37b18.clazzId + '&cpi=' + _0xd37b18.cpi,
					'validationUrl2': _0xd37b18.rootPath + '/question/quiz-validation?classid=' + _0xd37b18.clazzId + '&cpi=' + _0x2c5041 + '&objectid=' + _0xd37b18.objectId,
					'quizRightCountUrl': _0xd37b18.rootPath + '/question/quiz-rightcount?classid=' + _0xd37b18.clazzId + '&cpi=' + _0x2c5041
				},
				'customIframePlugin': {
					'eventArray': _0xd37b18.eventArray,
					'supportHeartbeat': _0xd37b18.supportHeartbeat,
					'courseid': _0xd37b18.courseid,
					'clazzId': _0xd37b18.clazzId,
					'userId': _0xd37b18.userid,
					'cookieFid': _0xd37b18.cookieFid,
					'knowledgeid': _0xd37b18.knowledgeid,
					'objectid': _0xd37b18.objectid,
					'playTime': _0xd37b18.playTime,
					'videoEnc': _0xd37b18.videoEnc,
					'headOffset': _0xd37b18.headOffset
				},
				'subtitle': {
					'translate': _0xd37b18.chapterVideoTranslate,
					'subtitleUrl': _0xd37b18.rootPath + '/richvideo/allsubtitle?mid=' + _0xd37b18.mid + '&objectid=' + _0xd37b18.objectId + '&courseid=' + _0xd37b18.courseid,
					'subtitle': _0xd37b18.rootPath + '/ananas/video-editor/sub?objectid=' + _0xd37b18.subobjectid
				},
				'marker': {
					'url': !_0xd37b18.isNotMark ? _0xd37b18.rootPath + '/ananas/getpoints?courseid=' + _0xd37b18.courseid + '&mid=' + _0xd37b18.mid : '',
					'ff': _0xd37b18.enableFastForward,
					'videoTopicCloud': _0xd37b18.videoTopicCloud
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
	var _0x1fbab4 = videojs.getPlugin('plugin'), _0x6c00de = videojs.extend(_0x1fbab4, {
		'constructor': function (_0xa038e2, _0x3c7033) {
			_0x1fbab4.call(this, _0xa038e2, _0x3c7033);
			var _0x47a75a = this, _0x57a5bd = _0x3c7033.mouseElTarget, _0x1bdbe7 = 1;
			_0x3c7033.enableSwitchWindow !== 1 && (_0x1bdbe7 = 0);
			if (!_0x57a5bd) {
				try {
					_0x57a5bd = window.top ? window.top : window.document;
				} catch (_0x18cd75) {
					_0x57a5bd = window.parent ? window.parent : window.document;
				}
			}
			Ext.fly(_0x57a5bd).on('mouseout', function (_0x21bbec) {
				_0x21bbec = _0x21bbec ? _0x21bbec : window.event;
				var _0x2cd377 = _0x21bbec.relatedTarget || _0x21bbec.toElement;
				!_0x2cd377 && (_0x1bdbe7 != 1 && _0xa038e2.pause());
			});
			_0x47a75a.singleton(_0xa038e2);
		},
		'singleton': function (_0xf8d836) {
			var _0x202045 = this, _0x5320b7 = parseInt(Math.random() * 9999999);
			_0xf8d836.on('play', function () {
				Ext.setCookie('videojs_id', _0x5320b7);
			});
			_0xf8d836.setInterval(function () {
				var _0x52ba4b = Ext.getCookie('videojs_id');
				typeof _0x52ba4b != 'undefined' && _0x52ba4b != _0x5320b7 && _0xf8d836.pause();
			}, 1000);
		}
	});
	videojs.registerPlugin('studyControl', _0x6c00de);
}());
(function () {
	var _0xea5625 = videojs.getComponent('SeekBar'), _0x5e88cd = videojs.extend(_0xea5625, {
		'constructor': function (_0x5e0fc3, _0x364780) {
			_0xea5625.call(this, _0x5e0fc3, _0x364780);
			var _0x189395 = this;
			_0x5e0fc3.ignorePause = false;
			_0x5e0fc3.seekLog = false;
			_0x5e0fc3.disableSeek = function (_0x4c6194) {
				_0x189395.disableSeek(_0x4c6194);
			};
			_0x5e0fc3.onlyBackward = function (_0xd688c7) {
				_0x189395.onlyBackward(_0xd688c7);
			};
			_0x5e0fc3.getSeekBar = function () {
				return _0x189395;
			};
			_0x189395.on('slideractive', function () {
				_0x5e0fc3.trigger('seekstart');
				_0x5e0fc3.ignorePause = true;
				_0x5e0fc3.ignorePlay = true;
				_0x5e0fc3.ignoreSeek = false;
			});
			_0x189395.on('sliderinactive', function () {
				_0x5e0fc3.trigger('seekend');
				_0x5e0fc3.ignoreSeek = false;
			});
			_0x189395.maxPercent = 0;
			_0x5e0fc3.on('timeupdate', function () {
				_0x189395.maxPercent = Math.max(_0x189395.getPercent(), _0x189395.maxPercent);
			});
		},
		'getCurrentTime_': function () {
			return this.player_.currentTime();
		},
		'getMaxPercent': function () {
			return this.maxPercent;
		},
		'isBackward': function (_0x4e1092) {
			return this.maxPercent > this.calculateDistance(_0x4e1092);
		},
		'handleMouseDown': function (_0x36b160) {
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x36b160)) {
					return;
				}
			}
			if (this['_disableSeek'] === true) {
				return;
			}
			_0xea5625.prototype.handleMouseDown.call(this, _0x36b160);
		},
		'handleMouseMove': function (_0x3c23ab) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x3c23ab)) {
					return;
				}
			}
			_0xea5625.prototype.handleMouseMove.call(this, _0x3c23ab);
		},
		'handleMouseUp': function (_0x4395bd) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x4395bd)) {
					return;
				}
			}
			_0xea5625.prototype.handleMouseUp.call(this, _0x4395bd);
		},
		'disableSeek': function (_0x1808c0) {
			var _0x1138fc = this;
			_0x1138fc['_disableSeek'] = _0x1808c0 !== false;
			_0x1138fc['_disableSeek'] ? _0x1138fc.disable() : _0x1138fc.enable();
		},
		'onlyBackward': function (_0x46012c) {
			var _0x5aed83 = this;
			_0x5aed83['_onlyBackward'] = _0x46012c !== false;
		}
	});
	videojs.registerComponent('SeekBar', _0x5e88cd);
}());
(function () {
	var _0x510720 = videojs.getPlugin('plugin'), _0x395c6a = videojs.extend(_0x510720, {
		'constructor': function (_0x4ab026, _0x49a10f) {
			_0x510720.call(this, _0x4ab026, _0x49a10f);
			var _0x490a29 = this;
			_0x490a29.firstClick = true;
			_0x490a29.isSendLog_ = !!_0x49a10f.isSendLog;
			_0x490a29.isShowDanmu_ = !!_0x49a10f.isShowDanmu;
			_0x490a29.damuLastGetTime = 0;
			_0x490a29.firstPlay = true;
			_0x490a29.firstPlayFace = true;
			_0x490a29.pausePlayFace = false;
			_0x490a29.playingFace = false;
			_0x490a29.playingFaceTime = 0;
			_0x490a29.chapterCapture = _0x49a10f.chapterCapture || 0;
			_0x490a29.captureInterval = _0x49a10f.captureInterval * 60 || 600;
			_0x490a29.chapterCollectionType = _0x49a10f.chapterCollectionType || 0;
			_0x490a29.isSupportFace = _0x49a10f.isSupportFace;
			_0x490a29.isAlertTip = false;
			_0x490a29.startCapture = _0x49a10f.startCapture;
			_0x490a29.endCapture = _0x49a10f.endCapture;
			_0x490a29.playAginCapture = _0x49a10f.playAginCapture;
			_0x490a29.playingCapture = _0x49a10f.playingCapture;
			_0x490a29.playingLoopCapture = _0x49a10f.playingLoopCapture;
			_0x490a29.isShowFaceCollection = _0x49a10f.isShowFaceCollection;
			_0x490a29.duration = _0x49a10f.duration;
			_0x490a29.jumpTimePointList = _0x49a10f.jumpTimePointList;
			_0x490a29.loopCaptureInterval = Math.floor(Math.random() * (parseInt(_0x490a29.duration) - 0) + 1);
			_0x490a29.attachmentId = _0x49a10f.attachmentId;
			_0x490a29.aplusVideoId = _0x49a10f.aplusVideoId;
			_0x490a29.aplusResourseId = _0x49a10f.aplusResourseId;
			_0x490a29.aplusVideoName = _0x49a10f.aplusVideoName;
			_0x490a29.aplusResourceName = _0x49a10f.aplusResourceName;
			_0x4ab026.on('ready', function () {
				_0x49a10f.enableFastForward != 1 && _0x4ab026.disableSeek();
			});
			!_0x49a10f.sendLog && (_0x49a10f.sendLog = function () {
			});
			_0x49a10f.headOffset && _0x4ab026.currentTime(_0x49a10f.headOffset);
			function _0x57f9fa() {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'heartbeat',
						'CLK',
						{
							'video_name': _0x490a29.aplusVideoName,
							'video_id': _0x490a29.aplusVideoId,
							'resource_id': _0x490a29.aplusResourseId,
							'resource_name': _0x490a29.aplusResourceName,
							'request_id': _0x490a29.getNewGuid()
						}
					]
				});
			}
			var _0x41c5ba = null, _0x183c6c = 0, _0x1e9275 = 0, _0x17d593 = _0x49a10f.reportTimeInterval || 60, _0x2a8466 = _0x17d593 * 1000, _0x529319 = function (_0x4df2ab, _0x563870, _0x2b55c1) {
				var _0x11d684 = $('.vjs-tip2');
				_0x11d684.find('.vjs-tip-inner2').text(_0x2b55c1);
				_0x11d684.css({
					'left': _0x4df2ab / _0x563870.duration() * 100 + '%',
					'margin-left': -parseFloat(_0x11d684.width()) / 2 - 5 + 'px',
					'visibility': 'visible'
				});
				$('.vjs-default-skin').removeClass('vjs-user-inactive');
				$('.vjs-default-skin').addClass('vjs-user-active');
				setTimeout(function () {
					_0x11d684.css('visibility', 'hidden');
				}, 2000);
			}, _0x3406ac = function (_0x47c7da, _0x17290d, _0x4321ca) {
				if (!_0x490a29.isSendLog_) {
					return;
				}
				var _0x4c989c = _0x490a29.now_() - _0x183c6c;
				(_0x4c989c > _0x2a8466 || _0x17290d === true) && (typeof _0x4321ca != 'undefined' ? _0x49a10f.sendLog(_0x4ab026, _0x47c7da, _0x4321ca, _0x490a29) : _0x49a10f.sendLog(_0x4ab026, _0x47c7da, _0x490a29.sec_(_0x4ab026), _0x490a29), _0x183c6c = _0x490a29.now_());
			}, _0x3e6b94 = function (_0x3b4d2e) {
				return _0x3b4d2e && _0x3b4d2e.sort && _0x3b4d2e.sort(function (_0x3bae97, _0x45aeff) {
					return parseInt(_0x3bae97) - parseInt(_0x45aeff);
				});
			}, _0xc65457 = function (_0x5e099f) {
				try {
					var _0x5d7185 = _0x5e099f.otherPointTimes;
					if (_0x5d7185.length === 0) {
						return -1;
					}
					return _0x5d7185 = _0x3e6b94(_0x5d7185), _0x5d7185[0];
				} catch (_0x4e63c9) {
					console.log(_0x4e63c9);
				}
				return -1;
			}, _0x389a83 = function (_0x27df53) {
				try {
					var _0x4acbe7 = _0x27df53.otherPointTimes, _0x3a21fd = _0x4acbe7.length;
					if (_0x3a21fd === 0) {
						return -1;
					}
					return _0x4acbe7 = _0x3e6b94(_0x4acbe7), _0x4acbe7[_0x3a21fd - 1];
				} catch (_0x450a6c) {
					console.log(_0x450a6c);
				}
				return -1;
			}, _0x9b9835 = function (_0x5e0ab0, _0x27eec8) {
				try {
					if (!_0x5e0ab0.paused() && typeof _0x5e0ab0.eventPoints != 'undefined') {
						var _0x9cb23e = _0x5e0ab0.currentTime(), _0x13e202 = 0;
						_0x5e0ab0.eventPoints.forEach(function (_0x4cd880) {
							_0x4cd880.text == '片头' && (_0x13e202 = _0x4cd880.time);
						});
						if (_0x27eec8.headOffset > 0 && _0x27eec8.headOffset < _0x13e202) {
							return;
						}
						if (_0x13e202 > 0 && parseInt(_0x9cb23e) === 0) {
							var _0xe6ca14 = parseInt(_0xc65457(_0x5e0ab0));
							if (_0xe6ca14 >= 0 && _0x13e202 > _0xe6ca14) {
								return;
							}
							_0x5e0ab0.ignoreSeek = false;
							_0x5e0ab0.switchStatus = true;
							_0x5e0ab0.currentTime(_0x13e202);
							_0x529319(_0x13e202, _0x5e0ab0, '已跳过片头');
						}
					}
				} catch (_0x3ec744) {
					console.log(_0x3ec744);
				}
				try {
					var _0x547e0f = 0;
					if (!_0x5e0ab0.paused() && typeof _0x5e0ab0.eventPoints != 'undefined') {
						var _0x9cb23e = _0x5e0ab0.currentTime();
						_0x5e0ab0.eventPoints.forEach(function (_0x157acf) {
							_0x157acf.text == '片尾' && (_0x547e0f = _0x157acf.time);
						});
						if (_0x27eec8.headOffset > _0x547e0f) {
							return;
						}
						var _0x1538af = parseInt(_0x9cb23e);
						if (_0x547e0f > 0 && _0x1538af === _0x547e0f) {
							var _0x17651f = parseInt(_0x389a83(_0x5e0ab0));
							if (_0x17651f >= 0 && _0x547e0f < _0x17651f) {
								return;
							}
							_0x5e0ab0.ignoreSeek = false;
							_0x5e0ab0.switchStatus = true;
							_0x5e0ab0.currentTime(_0x27eec8.duration);
							_0x529319(_0x1538af, _0x5e0ab0, '已跳过片尾');
						}
					}
				} catch (_0x301427) {
					console.log(_0x301427);
				}
			};
			_0x4ab026.on('play', function () {
				try {
					top.configFullScreen && reSizeVideoWindow();
				} catch (_0x2d768e) {
					console.log(_0x2d768e);
				}
				_0x490a29.firstPlay && (typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_positive_pybk',
						'OTHER',
						{
							'video_name': _0x490a29.aplusVideoName,
							'video_id': _0x490a29.aplusVideoId,
							'resource_id': _0x490a29.aplusResourseId,
							'resource_name': _0x490a29.aplusResourceName,
							'request_id': _0x490a29.getNewGuid()
						}
					]
				}));
				try {
					if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && _0x490a29.firstClick && isUnFinishJob()) {
						_0x490a29.firstClick = false;
						_0x4ab026.pause();
						checkJobCountLimit(_0x4ab026, 0);
						return;
					}
					if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && _0x490a29.firstClick && isUnFinishJob()) {
						_0x490a29.firstClick = false;
						_0x4ab026.pause();
						checkJobCountLimit(_0x4ab026, 1);
						return;
					}
				} catch (_0x2bbc7e) {
					console.log(_0x2bbc7e);
				}
				_0x490a29.isAlertTip = false;
				!_0x4ab026.ignorePlay && !_0x490a29.firstPlay && (typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'continue_pybk_click',
						'CLK',
						{
							'video_name': _0x490a29.aplusVideoName,
							'video_id': _0x490a29.aplusVideoId,
							'resource_id': _0x490a29.aplusResourseId,
							'resource_name': _0x490a29.aplusResourceName
						}
					]
				}));
				if (_0x490a29.chapterCapture == 0 || !_0x490a29.isSupportFace || !_0x490a29.isShowFaceCollection) {
					!_0x4ab026.ignorePlay ? (_0x3406ac('play', true), _0x4ab026.ignoreSeek = true) : (_0x4ab026.ignorePlay = false, _0x4ab026.ignoreSeek = false, _0x4ab026.seekLog = false);
					_0x490a29.sendDataLog('play');
					_0x490a29.receiveStudyLog();
					_0x490a29.getDanmuList('play', _0x4ab026);
					_0x490a29.firstPlay = false;
					_0x490a29.pausePlayFace = true;
				} else {
					if (_0x490a29.chapterCapture == 1) {
						if (_0x490a29.firstPlay) {
							var _0x497a5c = _0x490a29.sec_(_0x4ab026);
							if (_0x497a5c == 0 && (_0x490a29.startCapture == 1 || typeof _0x490a29.startCapture == 'undefined') && _0x490a29.firstPlayFace) {
								_0x490a29.playingFaceTime = _0x497a5c;
								_0x490a29.playingFace = false;
								_0x490a29.faceCollection('play', _0x4ab026, _0x490a29.chapterCollectionType, 0);
								return;
							}
							!_0x4ab026.ignorePlay ? (_0x3406ac('play', true), _0x4ab026.ignoreSeek = true) : (_0x4ab026.ignorePlay = false, _0x4ab026.ignoreSeek = false, _0x4ab026.seekLog = false);
							_0x490a29.sendDataLog('play');
							_0x490a29.receiveStudyLog();
							_0x490a29.getDanmuList('play', _0x4ab026);
							_0x490a29.firstPlay = false;
							_0x490a29.pausePlayFace = true;
						} else {
							if (_0x490a29.playAginCapture == 1 && !_0x4ab026.ignorePlay && _0x490a29.pausePlayFace) {
								_0x490a29.playingFaceTime = _0x490a29.sec_(_0x4ab026);
								_0x490a29.playingFace = false;
								_0x490a29.faceCollection('aginPlay', _0x4ab026, _0x490a29.chapterCollectionType, -2);
								return;
							}
							_0x490a29.pausePlayFace = true;
						}
					}
				}
				typeof aplus_queue != 'undefined' && (_0x41c5ba = setInterval(_0x57f9fa, 20000));
				_0x490a29.seekLog = false;
			});
			_0x4ab026.on('seeked', function () {
				if (_0x49a10f.enableFastForward != 1 && !_0x4ab026.switchStatus && !_0x4ab026.finished) {
					var _0x3bd891 = _0x4ab026.currentTime(), _0x479f1f = _0x49a10f.headOffset ? _0x49a10f.headOffset : 0;
					_0x3bd891 != 0 && _0x3bd891 > _0x479f1f && _0x4ab026.currentTime(_0x479f1f);
				}
				'audio' == _0x49a10f.sourcePlayer && !_0x4ab026.seekLog && (_0x4ab026.seekStartTime = _0x1e9275);
				if (!_0x4ab026.ignoreSeek) {
					if ('audio' == _0x49a10f.sourcePlayer) {
						if (!_0x4ab026.seekLog) {
							function _0x1ba873() {
								_0x3406ac('drag', true, _0x4ab026.seekStartTime + '-' + _0x490a29.sec_(_0x4ab026));
								document.removeEventListener('mouseup', _0x1ba873);
							}
							document.addEventListener('mouseup', _0x1ba873);
						}
					} else {
						_0x3406ac('drag', true, _0x1e9275 + '-' + _0x490a29.sec_(_0x4ab026));
						typeof aplus_queue != 'undefined' && aplus_queue.push({
							'action': 'aplus.record',
							'arguments': [
								'time_shift_click',
								'OTHER',
								{
									'video_name': _0x490a29.aplusVideoName,
									'video_id': _0x490a29.aplusVideoId,
									'resource_id': _0x490a29.aplusResourseId,
									'resource_name': _0x490a29.aplusResourceName,
									'time_shift_time': _0x1e9275 + '',
									'time_shift_duration': Math.abs(parseInt(_0x490a29.sec_(_0x4ab026)) - parseInt(_0x1e9275))
								}
							]
						});
						typeof aplus_queue != 'undefined' && aplus_queue.push({
							'action': 'aplus.record',
							'arguments': [
								'video_progress_drag',
								'OTHER',
								{
									'video_name': _0x490a29.aplusVideoName,
									'video_id': _0x490a29.aplusVideoId,
									'resource_id': _0x490a29.aplusResourseId,
									'resource_name': _0x490a29.aplusResourceName
								}
							]
						});
					}
				} else {
					_0x4ab026.ignoreSeek = false;
				}
				_0x1e9275 = _0x490a29.sec_(_0x4ab026);
				_0x4ab026.ignorePlay = true;
				_0x4ab026.seekLog = true;
				delete _0x4ab026.switchStatus;
			});
			_0x4ab026.on('pause', function () {
				!_0x4ab026.ignorePause ? (_0x3406ac('pause', true), _0x4ab026.ignorePlay = false, _0x4ab026.ignoreSeek = false, _0x4ab026.seekLog = false, typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_pause_click',
						'CLK',
						{
							'video_name': _0x490a29.aplusVideoName,
							'video_id': _0x490a29.aplusVideoId,
							'resource_id': _0x490a29.aplusResourseId,
							'resource_name': _0x490a29.aplusResourceName
						}
					]
				})) : _0x4ab026.ignorePause = false;
				_0x490a29.sendDataLog('pause');
				_0x490a29.getDanmuList('pause', _0x4ab026);
				_0x41c5ba && clearInterval(_0x41c5ba);
			});
			_0x4ab026.on('timeupdate', function () {
				var _0x564134 = _0x490a29.sec_(_0x4ab026);
				_0x490a29.isSupportFace && _0x490a29.isShowFaceCollection && _0x490a29.chapterCapture == 1 && _0x490a29.playingCapture == 1 && _0x490a29.playingFace && (_0x490a29.playingFace = false, _0x490a29.playingLoopCapture == 1 ? _0x564134 == _0x490a29.loopCaptureInterval && _0x490a29.faceCollection('playing', _0x4ab026, _0x490a29.chapterCollectionType, -1) : _0x564134 >= _0x490a29.captureInterval && _0x564134 % _0x490a29.captureInterval == 0 && _0x490a29.faceCollection('playing', _0x4ab026, _0x490a29.chapterCollectionType, _0x564134));
				!_0x490a29.playingFace && _0x564134 - _0x490a29.playingFaceTime > 2 && (_0x490a29.playingFace = true);
				if (typeof parent.videoTrialDuration != 'undefined' && parent.videoTrialDuration != '-1') {
					var _0x2d41eb = parseInt(parent.videoTrialDuration) * 60;
					if (_0x2d41eb < _0x490a29.sec_(_0x4ab026) && !_0x490a29.isAlertTip) {
						_0x4ab026.pause();
						alert('视频只允许试看' + parent.videoTrialDuration + '分钟');
						_0x490a29.isAlertTip = true;
						return;
					}
				}
				parseInt(_0x4ab026.currentTime()) >= this.damuLastGetTime && _0x490a29.getDanmuList('timeupdate', _0x4ab026);
				_0x490a29.danmuDisplay(_0x4ab026);
				if (_0x183c6c == 0) {
					_0x9b9835(_0x4ab026, _0x49a10f);
					return;
				}
				_0x490a29.sec_(_0x4ab026) - _0x1e9275 <= 1 && !_0x4ab026.ignorePlay && (_0x1e9275 = _0x490a29.sec_(_0x4ab026));
				_0x3406ac('playing');
				_0x9b9835(_0x4ab026, _0x49a10f);
			});
			_0x4ab026.on('ended', function () {
				_0x490a29.isShowFaceCollection && _0x490a29.chapterCapture == 1 && _0x490a29.endCapture == 1 && _0x490a29.faceCollection('ended', _0x4ab026, _0x490a29.chapterCollectionType, _0x490a29.duration);
				_0x3406ac('ended', true);
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_end_click',
						'CLK',
						{
							'video_name': _0x490a29.aplusVideoName,
							'video_id': _0x490a29.aplusVideoId,
							'resource_id': _0x490a29.aplusResourseId,
							'resource_name': _0x490a29.aplusResourceName,
							'request_id': _0x490a29.getNewGuid(),
							'pybk_duration': _0x490a29.duration,
							'full_play_count': 1
						}
					]
				});
				_0x41c5ba && clearInterval(_0x41c5ba);
				_0x4ab026.seekLog = false;
			});
		},
		'sec_': function (_0xd8aaea) {
			return parseInt(_0xd8aaea.currentTime());
		},
		'now_': function () {
			return new Date().getTime();
		},
		'isSendLog': function (_0x40173e) {
			return _0x40173e && (this.isSendLog_ = !!_0x40173e), this.isSendLog_;
		},
		'sendDataLog': function (_0x4fe0fc) {
			var _0x37bd90 = _0x4fe0fc == 'pause' || _0x4fe0fc == 'end' ? 2 : 1;
			typeof sendReadZTMediaLog != 'undefined' && sendReadZTMediaLog(_0x37bd90);
		},
		'receiveStudyLog': function () {
			typeof receiveStudyLog != 'undefined' && setTimeout(function () {
				receiveStudyLog();
			}, 50);
		},
		'getDanmuList': function (_0x1d45b3, _0x152b37) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x2f3038 = this.sec_(_0x152b37);
			if (_0x1d45b3 == 'pause') {
				this.damuLastGetTime = 0;
				setTimeout(function () {
					getDanmuByTime(_0x1d45b3, 0);
				}, 200);
				return;
			}
			typeof getDanmuByTime != 'undefined' && setTimeout(function () {
				getDanmuByTime(_0x1d45b3, _0x2f3038);
			}, 200);
			if (_0x2f3038 < this.damuLastGetTime) {
				return;
			}
			this.damuLastGetTime = _0x2f3038 + 59;
		},
		'danmuDisplay': function (_0x382a2b) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x5b72ed = this.sec_(_0x382a2b);
			typeof danmuPlay != 'undefined' && danmuPlay(_0x5b72ed);
		},
		'timer': function (_0x3d2dd3) {
		},
		'faceCollection': function (_0x4968cc, _0x56b437, _0x952053, _0x46961a) {
			if (_0x46961a != -2) {
				var _0x11604b = this.jumpTimePointList;
				if (typeof _0x11604b != 'undefined') {
					try {
						if (_0x11604b.includes(_0x46961a)) {
							this.firstPlayFace = false;
							this.pausePlayFace = false;
							this.playingFace = false;
							return;
						}
					} catch (_0x4c726b) {
					}
				}
			}
			_0x4968cc == 'play' ? typeof startFaceCollection != 'undefined' && (_0x56b437.pause(), startFaceCollection(_0x56b437, _0x952053, this, _0x46961a)) : _0x4968cc == 'ended' ? typeof startFaceCollection != 'undefined' && (_0x56b437.pause(), startFaceCollection(_0x56b437, _0x952053, this, _0x46961a)) : _0x4968cc == 'playing' ? (typeof startFaceCollection != 'undefined' && (_0x56b437.pause(), this.playingFaceTime = this.sec_(_0x56b437), startFaceCollection(_0x56b437, _0x952053, this, _0x46961a), this.playingFace = false), this.pausePlayFace = false) : _0x4968cc == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (_0x56b437.pause(), startFaceCollection(_0x56b437, _0x952053, this, _0x46961a)), this.pausePlayFace = false);
		},
		'playNextVideo': function (_0x16bb94) {
			if (typeof chapterPlayNextVideo != 'undefined') {
				if (typeof top.allowNextVideo != 'undefined' && top.allowNextVideo === false) {
					top.hasJobLimit === true ? top.showJobLimitTip() : top.showVideoTimeLimitTip();
					return;
				}
				chapterPlayNextVideo(_0x16bb94);
			}
		},
		'getNewGuid': function () {
			var _0x41c9e = '';
			for (var _0x2c43c6 = 1; _0x2c43c6 <= 32; _0x2c43c6++) {
				var _0x11763e = Math.floor(Math.random() * 16).toString(16);
				_0x41c9e += _0x11763e;
				(_0x2c43c6 == 8 || _0x2c43c6 == 12 || _0x2c43c6 == 16 || _0x2c43c6 == 20) && (_0x41c9e += '-');
			}
			return _0x41c9e;
		}
	});
	videojs.registerPlugin('seekBarControl', _0x395c6a);
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
			'getChecked': function (_0x322400, _0x1f05ac, _0x5e02e7) {
				try {
					if (typeof _0x322400 != 'undefined') {
						return _0x322400.indexOf(_0x1f05ac) != -1 && _0x5e02e7 == 'InteractiveQuiz' ? 'checked="checked"' : '';
					}
					return '';
				} catch (_0x19f6b5) {
					console.log(_0x19f6b5);
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
		var _0x2dd538 = this, _0x3041b1 = _0x2dd538.renderData, _0x4ba0c9 = _0x2dd538.quizRightCountUrl;
		typeof _0x4ba0c9 != 'undefined' && Ext.Ajax.request({
			'url': _0x4ba0c9,
			'params': {
				'eventid': _0x3041b1.resourceId,
				'memberinfo': _0x3041b1.memberinfo
			},
			'method': 'get',
			'success': function (_0xff158d) {
				var _0x13d80b = Ext.decode(_0xff158d.responseText);
				_0x13d80b.status && (Ext.get('rightNum').setHTML(_0x13d80b.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
			}
		});
		_0x2dd538.callParent(arguments);
		var _0x59b2f9 = _0x2dd538.scrollEl, _0x3e45b7 = $(_0x59b2f9.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#A5A5A5',
			'boxzoom': false,
			'autohidemode': false
		});
		_0x2dd538.scroller = _0x3e45b7;
		_0x2dd538.submitEl.on('click', function () {
			_0x2dd538.checkResult();
		});
		_0x2dd538.continueEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x5e4e55) {
				console.log(_0x5e4e55);
			}
			_0x2dd538.fireEvent('continue');
		});
		_0x2dd538.backEl && _0x2dd538.backEl.on('click', function () {
			_0x2dd538.onerror && _0x2dd538.onerror();
			_0x2dd538.fireEvent('continue');
		});
		_0x2dd538.viewAnalysisEl && _0x2dd538.viewAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'inline-block');
		});
		_0x2dd538.delAnalysisEl && _0x2dd538.delAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'none');
		});
	},
	'checkResult': function () {
		var _0x5660f7 = this, _0xa05c74 = Ext.query('input', _0x5660f7.el.dom), _0x18d764 = true, _0x5d5409 = _0x5660f7.renderData, _0x1d17e7 = _0x5d5409.options, _0x332783 = [], _0x25e4e0 = _0x5660f7.quizErrorReportUrl, _0x12948a = _0x5660f7.validationUrl2, _0x33bf8d = _0x5d5409.dtype;
		if (Ext.get('videoquiz-continue').getStyle('display') == 'none' && window.parent.parent.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1) {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x5c0c3e) {
				console.log(_0x5c0c3e);
			}
			_0x5660f7.fireEvent('continue');
			return;
		}
		Ext.each(_0xa05c74, function (_0x11f116, _0x16cc1f) {
			_0x11f116.checked && _0x332783.push(_0x1d17e7[_0x16cc1f].name);
		});
		Ext.get('videoquiz-submit').setStyle('display', 'none');
		Ext.get('videoquiz-submitting').setStyle('display', 'block');
		if (typeof _0x12948a != 'undefined') {
			var _0x423f43 = _0x332783.join(',');
			Ext.Ajax.request({
				'url': _0x12948a,
				'params': {
					'eventid': _0x5d5409.resourceId,
					'memberinfo': _0x5d5409.memberinfo,
					'answerContent': _0x423f43
				},
				'method': 'get',
				'success': function (_0x44af9f) {
					Ext.get('videoquiz-submit').setStyle('display', 'block');
					Ext.get('videoquiz-submitting').setStyle('display', 'none');
					_0x5d5409.answerContent = _0x423f43;
					var _0x2ad502 = Ext.decode(_0x44af9f.responseText), _0x56eef6 = typeof _0x2ad502.isRight === 'undefined' ? false : _0x2ad502.isRight;
					!_0x56eef6 ? _0x5d5409.errorBackTime && _0x5d5409.errorBackTime > 0 ? (Ext.get('spanNotBack').setStyle('display', 'block'), Ext.get('videoquiz-submit').setStyle('display', 'none'), _0x33bf8d == 'InteractiveQuiz' ? Ext.get('knowledgeBack').setStyle('display', 'block') : Ext.get('videoquiz-continue').setStyle('display', 'block')) : _0x33bf8d == 'InteractiveQuiz' && _0x5d5409.errorBack == 1 && _0x5d5409.eBstartPoint != '' ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'block')) : Ext.get('spanNot').setStyle('display', 'block') : (Ext.get('spanHas').setStyle('display', 'block'), _0x33bf8d == 'InteractiveQuiz' && (Ext.get('videoquiz-continue').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'none'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('spanNot').setStyle('display', 'none'), Ext.get('spanNotBack').setStyle('display', 'none'), Ext.get('spanNotBackPoint').setStyle('display', 'none')));
					if (_0x2ad502.status) {
						if (_0x33bf8d == 'InteractiveQuiz') {
							_0x2ad502.rightAnswerCount && (Ext.get('rightNum').setHTML(_0x2ad502.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
							var _0x3a25ee = '', _0x1f68d1 = false;
							_0x2ad502.testAnalysis ? _0x2ad502.showAnswer && _0x2ad502.showAnswer > 0 ? (_0x3a25ee += '正确答案\uFF1A' + _0x2ad502.rightContent, _0x3a25ee += '</br>解析\uFF1A' + _0x2ad502.testAnalysis, Ext.get('viewAnalysis').setStyle('display', 'block'), _0x1f68d1 = true) : _0x2ad502.isRight && (_0x3a25ee += '解析\uFF1A' + _0x2ad502.testAnalysis, Ext.get('viewAnalysis').setStyle('display', 'block'), _0x1f68d1 = true) : _0x2ad502.showAnswer && _0x2ad502.showAnswer > 0 ? (Ext.get('tkParsingDele').setStyle('display', 'none'), Ext.get('viewAnalysis').setStyle('display', 'none'), _0x3a25ee += '正确答案\uFF1A' + _0x2ad502.rightContent, _0x1f68d1 = true) : Ext.get('viewAnalysis').setStyle('display', 'none');
							if (_0x1f68d1) {
								Ext.get('tkParsing_con').setHTML(_0x3a25ee);
								Ext.get('tkParsing').setStyle('display', 'inline-block');
								var _0x1729e9 = _0x5660f7.tkParseScrollEl, _0x126944 = $(_0x1729e9.dom).niceScroll({
									'cursorborder': '',
									'cursorwidth': 6,
									'cursorcolor': '#A5A5A5',
									'boxzoom': false,
									'autohidemode': true
								});
								_0x5660f7.tkParseScroll = _0x126944;
							}
						}
						if (_0x2ad502.isRight && _0x33bf8d == 'InteractiveQuiz') {
							if (typeof _0x2ad502.showTip != 'undefined' && _0x2ad502.showTip) {
								var _0x56b958 = _0x2ad502.percent;
								try {
									var _0x14c265 = Ext.getCookie('fid', 0);
									_0x56b958 = parseInt(_0x56b958);
									_0x14c265 == '179952' && _0x56b958 > 0 && (_0x56b958 = 90 + _0x56b958 * 0.1);
								} catch (_0x363e0a) {
									console.log(_0x363e0a);
								}
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01你的答题水准超过了' + _0x56b958 + '%的同学</span></span>');
							} else {
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01</span></span>');
							}
						}
					}
					!_0x56eef6 && _0x5660f7.onerror && _0x33bf8d != 'InteractiveQuiz' && _0x5660f7.onerror();
					!_0x56eef6 && _0x5d5409.errorContinue == 1 && (_0x18d764 = true, Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('videoquiz-continue').setStyle('display', 'block'));
					if (_0x56eef6 && Ext.get('videoquiz-continue').getStyle('display') == 'none') {
						try {
							top.configFullScreen && exitMediumSizeWindow();
						} catch (_0x2ca331) {
							console.log(_0x2ca331);
						}
						_0x5660f7.fireEvent('continue');
					}
				},
				'error': function () {
					Ext.get('videoquiz-submit').setStyle('display', 'block');
					Ext.get('videoquiz-submitting').setStyle('display', 'none');
					_0x5660f7.onerror && _0x33bf8d != 'InteractiveQuiz' && _0x5660f7.onerror();
				}
			});
		}
		return _0x18d764;
	},
	'continueFun': function () {
		var _0x2f852d = this;
		_0x2f852d.fireEvent('continue');
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
		var _0x43c407 = this;
		_0x43c407.callParent(arguments);
		try {
			var _0x56cdc8 = document.querySelector('.sp_video_img');
			_0x56cdc8.addEventListener('load', function () {
				_0x56cdc8.naturalWidth >= _0x56cdc8.naturalHeight ? _0x56cdc8.naturalWidth >= 400 && (_0x56cdc8.style.maxWidth = '70%', _0x56cdc8.style.maxHeight = '70%', _0x56cdc8.style.height = 'auto') : _0x56cdc8.naturalHeight >= 400 && (_0x56cdc8.style.maxHeight = '70%', _0x56cdc8.style.maxWidth = '70%', _0x56cdc8.style.width = 'auto');
			});
		} catch (_0x245766) {
			console.log(_0x245766);
		}
		_0x43c407.el.on('click', function () {
			_0x43c407.fireEvent('continue');
		});
		_0x43c407.closeEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x40088d) {
				console.log(_0x40088d);
			}
			_0x43c407.fireEvent('continue');
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
		var _0x1a1d12 = this, _0x52780b = _0x1a1d12.commentOpenEl, _0x48ea35 = _0x1a1d12.boxEl;
		_0x1a1d12.callParent(arguments);
		var _0x5c8191 = $('#video_html5_api').height();
		_0x48ea35.setStyle('height', _0x5c8191 + 'px');
		_0x52780b.on('click', function () {
			_0x52780b.setStyle('display', 'none');
			_0x48ea35.setStyle('display', 'block');
			$('.comment_con').getNiceScroll().resize();
		});
		_0x1a1d12.stowEl.on('click', function () {
			_0x48ea35.setStyle('display', 'none');
			_0x52780b.setStyle('display', 'block');
		});
		_0x1a1d12.continueEl.on('click', function () {
			_0x1a1d12.fireEvent('continue');
		});
		var _0x32c8e7 = $('.comment_con').niceScroll({
			'cursorborder': '',
			'cursorwidth': '8px',
			'cursorcolor': '#ACB4BF',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x1a1d12.scroller = _0x32c8e7;
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
		var _0x25494a = this;
		_0x25494a.callParent(arguments);
		try {
			dragFn && dragFn('#sp_video_ppt_pic', '#video_html5_api');
		} catch (_0x3b1148) {
			console.log(_0x3b1148);
		}
		var _0x30c964 = Ext.get('video_html5_api').getStyle('height'), _0x1662b = Ext.get('video_html5_api').getStyle('width'), _0x39449f = parseInt(_0x30c964) > parseInt(_0x1662b);
		_0x39449f ? Ext.get('sp_video_ppt_pic').addCls('sp_video_ppt_pic_w') : Ext.get('sp_video_ppt_pic').addCls('sp_video_ppt_pic_h');
		function _0x234df8() {
			Ext.get('sp_size_big').setStyle('display', 'none');
			Ext.get('sp_size_small').setStyle('display', 'block');
		}
		function _0x5ec586() {
			Ext.get('sp_size_big').setStyle('display', 'block');
			Ext.get('sp_size_small').setStyle('display', 'none');
		}
		_0x25494a.sizeBigEl.on('click', function (_0x362d42) {
			_0x362d42.stopPropagation();
			_0x39449f ? _0x25494a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0x25494a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x234df8();
		});
		_0x25494a.sizeSmallEl.on('click', function (_0x90abae) {
			_0x90abae.stopPropagation();
			_0x39449f ? _0x25494a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0x25494a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x5ec586();
		});
		_0x25494a.sizeBigEl.on('touchend', function (_0x2c364d) {
			_0x2c364d.stopPropagation();
			_0x39449f ? _0x25494a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0x25494a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x234df8();
		});
		_0x25494a.sizeSmallEl.on('touchend', function (_0x2c160b) {
			_0x2c160b.stopPropagation();
			_0x39449f ? _0x25494a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0x25494a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x5ec586();
		});
	}
});
Ext.define('ans.videojs.TimelineObjects', {
	'extend': 'Ext.container.Container',
	'cls': 'ans-timelineobjects',
	'autoScroll': true,
	'hidden': true,
	'hideMode': 'visibility',
	'constructor': function (_0x24dd4e) {
		var _0x32a32a = this;
		_0x32a32a.callParent(arguments);
		_0x32a32a.bg = Ext.create('ans.videojs.TimelineObjectsBg', { 'renderTo': _0x24dd4e.renderTo });
		_0x32a32a.objects = _0x24dd4e.objects && _0x24dd4e.objects.sort ? _0x32a32a.sort_(_0x24dd4e.objects) : [];
		_0x32a32a.current = 0;
		_0x32a32a.showAnnotation = false;
	},
	'hideTimeline': function () {
		var _0x1708fa = this;
		_0x1708fa.showAnnotation && (_0x1708fa.hide(), _0x1708fa.showAnnotation = false);
	},
	'showObject': function (_0xcfa9c1, _0x386c4c, _0x3cf611) {
		var _0x2c9128 = this, _0x3b8f01 = _0x2c9128.getBox(), _0xbe11a7 = _0x2c9128.items.getAt(0), _0x3c6f6d, _0x148a1f = function () {
			_0x3c6f6d.destroy();
			_0x2c9128.hide();
			_0xcfa9c1.play();
			try {
				_0xcfa9c1.eventCount && (_0xcfa9c1.eventCount = _0xcfa9c1.eventCount - 1);
			} catch (_0x4988df) {
				console.log(_0x4988df);
			}
		};
		_0xbe11a7 != null && _0xbe11a7.destroy();
		if (_0x3cf611) {
			_0x3cf611.description && (_0x3cf611.description = _0x2c9128.htmlEncodeByRegExp(_0x3cf611.description));
			if (_0x3cf611.options && _0x3cf611.options.length > 0) {
				for (let _0x49996f = 0; _0x49996f < _0x3cf611.options.length; _0x49996f++) {
					_0x3cf611.options[_0x49996f].description && (_0x3cf611.options[_0x49996f].description = _0x2c9128.htmlEncodeByRegExp(_0x3cf611.options[_0x49996f].description));
				}
			}
		}
		if (_0x386c4c == 'IMG') {
			var _0x47cc11 = { 'src': _0x3cf611.url.replace(/origin/, _0x3b8f01.width + '_' + _0x3b8f01.height) };
			_0x3c6f6d = _0x2c9128.add({
				'xtype': 'videoimg',
				'renderData': _0x47cc11
			});
			try {
				_0xcfa9c1.eventCount && (_0xcfa9c1.eventCount += 1);
			} catch (_0x38505c) {
				console.log(_0x38505c);
			}
		}
		if (_0x386c4c == 'QUIZ') {
			var _0x54a385 = function () {
			};
			if (_0x3cf611.errorBackTime && _0x3cf611.errorBackTime > 0) {
				var _0xeff246 = _0x3cf611.errorBackTime * 60;
				_0x54a385 = function () {
					var _0x577aa9 = Math.max(_0xcfa9c1.currentTime() - _0xeff246, 0);
					_0xcfa9c1.switchStatus = true;
					_0xcfa9c1.currentTime(_0x577aa9);
				};
			}
			_0x3c6f6d = _0x2c9128.add({
				'xtype': 'videoquiz',
				'renderData': _0x3cf611,
				'quizErrorReportUrl': _0x2c9128.quizErrorReportUrl,
				'validationUrl2': _0x2c9128.validationUrl2,
				'onerror': _0x54a385
			});
			try {
				_0xcfa9c1.eventCount && (_0xcfa9c1.eventCount += 1);
			} catch (_0x448211) {
				console.log(_0x448211);
			}
		}
		if (_0x386c4c == 'InteractiveQuiz') {
			var _0x54a385 = function () {
			};
			if (_0x3cf611.errorBackTime && _0x3cf611.errorBackTime > 0) {
				var _0xeff246 = _0x3cf611.errorBackTime * 60;
				_0x54a385 = function () {
					var _0x5ed2de = Math.max(_0xcfa9c1.currentTime() - _0xeff246, 0);
					_0xcfa9c1.switchStatus = true;
					_0xcfa9c1.currentTime(_0x5ed2de);
				};
			}
			if (_0x3cf611.errorBack == 1 && _0x3cf611.eBstartPoint != '') {
				var _0xeff246 = 0, _0x1ff7c3 = _0x3cf611.eBstartPoint.split(':'), _0x45f141 = _0x1ff7c3.length;
				_0x45f141 > 0 && (_0x45f141 == 1 ? _0xeff246 = parseInt(_0x1ff7c3[0]) * 60 : _0x45f141 == 2 && (_0xeff246 = parseInt(_0x1ff7c3[0]) * 60 + parseInt(_0x1ff7c3[1])));
				_0x54a385 = function () {
					_0xcfa9c1.switchStatus = true;
					_0xcfa9c1.currentTime(_0xeff246);
				};
			}
			_0x3cf611.dtype = 'InteractiveQuiz';
			_0x3c6f6d = _0x2c9128.add({
				'xtype': 'videoquiz',
				'renderData': _0x3cf611,
				'quizErrorReportUrl': _0x2c9128.quizErrorReportUrl,
				'validationUrl2': _0x2c9128.validationUrl2,
				'quizRightCountUrl': _0x2c9128.quizRightCountUrl,
				'onerror': _0x54a385
			});
			try {
				_0xcfa9c1.eventCount && (_0xcfa9c1.eventCount += 1);
			} catch (_0x6ab960) {
				console.log(_0x6ab960);
			}
		}
		if (_0x386c4c == 'PPT') {
			if (_0x3cf611.fp == 0) {
				return;
			}
			var _0x4894c9 = _0x3cf611.url;
			_0x3cf611.thumb ? _0x4894c9 = _0x3cf611.thumb + _0x3cf611.pageNo + '.png' : _0x4894c9 = _0x4894c9.replace(/swfv2\/.*$/, 'thumb/' + _0x3cf611.fp + '.png');
			var _0x47cc11 = { 'src': _0x4894c9 };
			_0x3c6f6d = _0x2c9128.add({
				'xtype': 'videoppt',
				'renderData': _0x47cc11
			});
			try {
				_0xcfa9c1.eventCount && (_0xcfa9c1.eventCount += 1);
			} catch (_0x1f8d02) {
				console.log(_0x1f8d02);
			}
		}
		if (_0x386c4c == 'SyncAnnotationEvent') {
			_0x3c6f6d = _0x2c9128.add({
				'xtype': 'videoannotation',
				'renderData': _0x3cf611
			});
			try {
				_0xcfa9c1.eventCount && (_0xcfa9c1.eventCount += 1);
			} catch (_0x6fffe0) {
				console.log(_0x6fffe0);
			}
			_0xcfa9c1.pause();
			_0x2c9128.showAnnotation = true;
		}
		if (!_0x3c6f6d) {
			return;
		}
		_0x3c6f6d.on('continue', function () {
			_0x148a1f();
		});
		var _0xd3b356 = !(_0x3c6f6d.model === false);
		_0x2c9128.showModel(_0xd3b356);
		_0xd3b356 && _0xcfa9c1.pause();
		_0x386c4c == 'PPT' ? Ext.select('.ans-timelineobjects').setStyle('position', 'unset') : Ext.select('.ans-timelineobjects').setStyle('position', 'absolute');
	},
	'htmlEncodeByRegExp': function (_0x3a2b4f) {
		var _0x4310d1 = '';
		if (_0x3a2b4f.length == 0) {
			return '';
		}
		return _0x4310d1 = _0x3a2b4f.replace(/&/g, '&amp;'), _0x4310d1 = _0x4310d1.replace(/</g, '&lt;'), _0x4310d1 = _0x4310d1.replace(/>/g, '&gt;'), _0x4310d1 = _0x4310d1.replace(/\s/g, '&nbsp;'), _0x4310d1 = _0x4310d1.replace(/\'/g, '&#39;'), _0x4310d1 = _0x4310d1.replace(/\"/g, '&quot;'), _0x4310d1;
	},
	'showModel': function (_0x182c57) {
		try {
			top.configFullScreen && mediumSizeWindow();
		} catch (_0x5c863f) {
			console.log(_0x5c863f);
		}
		var _0x508abc = this;
		_0x508abc.show();
		_0x182c57 ? (_0x508abc.removeCls('ans-timelineobjects-autosize'), _0x508abc.setAutoScroll(true), _0x508abc.bg.show()) : (_0x508abc.addCls('ans-timelineobjects-autosize'), _0x508abc.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
		this.bg.hide.apply(this.bg, arguments);
	},
	'updateTime': function (_0x5f0f15, _0x459178) {
		if (this.current >= this.objects.length || _0x5f0f15.scrubbing()) {
			return;
		}
		var _0x4c56d2 = this, _0x4d55d3 = _0x4c56d2.objects[_0x4c56d2.current], _0xfd5d54 = _0x4d55d3.style, _0x25c80f = _0x4d55d3.datas[0];
		if (_0x459178 >= _0x25c80f.startTime) {
			_0x4c56d2.current++;
			setTimeout(function () {
				_0x4c56d2.showObject(_0x5f0f15, _0xfd5d54, _0x25c80f);
			}, 20);
		}
	},
	'resetTime': function (_0x560752, _0x19a0b8) {
		var _0x11fc24 = this, _0x4c587b;
		for (_0x4c587b = 0; _0x4c587b < _0x11fc24.objects.length; _0x4c587b++) {
			var _0x1d1d9d = _0x11fc24.objects[_0x4c587b].datas[0].startTime;
			if (_0x19a0b8 <= _0x1d1d9d) {
				break;
			}
		}
		_0x11fc24.current = _0x4c587b;
	},
	'sort_': function (_0x183ca0) {
		return _0x183ca0 && _0x183ca0.sort && _0x183ca0.sort(function (_0x23c036, _0x542129) {
			var _0x239173 = _0x23c036.datas[0].startTime, _0x2be2fd = _0x542129.datas[0].startTime;
			return _0x239173 - _0x2be2fd;
		});
	}
});
(function () {
	var _0x1f5698 = videojs.getPlugin('plugin'), _0x49c0fb = videojs.extend(_0x1f5698, {
		'constructor': function (_0x2da717, _0x584a85) {
			_0x1f5698.call(this, _0x2da717, _0x584a85);
			if (!_0x584a85.url) {
				return;
			}
			var _0x5ec34e = function (_0x4532d1) {
				try {
					var _0x15ed1f = _0x4532d1.datas;
					if (_0x15ed1f && _0x15ed1f.length > 0) {
						return _0x15ed1f[0].startTime;
					}
				} catch (_0x20f869) {
					console.log(_0x20f869);
				}
				return -1;
			}, _0x27ddc3 = this;
			_0x2da717.eventPoints = [];
			_0x2da717.otherPointTimes = [];
			var _0x1fd156 = [];
			if (_0x584a85.begins && _0x584a85.begins > 0) {
				var _0x45ca10 = {
					'time': _0x584a85.begins,
					'text': '片头'
				};
				_0x1fd156.push(_0x45ca10);
			}
			if (_0x584a85.ends && _0x584a85.ends > 0) {
				var _0x45ca10 = {
					'time': _0x584a85.ends,
					'text': '片尾'
				};
				_0x1fd156.push(_0x45ca10);
			}
			_0x2da717.eventPoints = _0x1fd156;
			Ext.Ajax.request({
				'url': _0x584a85.url,
				'async': false,
				'success': function (_0x3ae597) {
					if (_0x3ae597.status != 200) {
						return;
					}
					eval('var data=' + _0x3ae597.responseText);
					if (data && data.length > 0) {
						var _0x1f16c2 = [];
						for (var _0x16f9d1 = 0; _0x16f9d1 < data.length; _0x16f9d1++) {
							var _0x4d60f4 = data[_0x16f9d1];
							if (_0x4d60f4.style == 'InteractiveQuiz') {
								var _0x50e424 = _0x4d60f4.datas;
								if (_0x50e424 && _0x50e424.length > 0) {
									var _0x5d18c4 = {
										'time': _0x50e424[0].startTime,
										'text': '互动测验'
									};
								}
								_0x1f16c2.push(_0x5d18c4);
							}
							var _0xa5af04 = _0x5ec34e(_0x4d60f4);
							_0xa5af04 >= 0 && _0x2da717.otherPointTimes.push(_0xa5af04);
						}
						_0x1f16c2.forEach(function (_0x425160) {
							_0x2da717.eventPoints.push(_0x425160);
						});
					}
					var _0x12e984 = Ext.create('ans.videojs.TimelineObjects', {
						'renderTo': _0x2da717.el_,
						'quizErrorReportUrl': _0x584a85.quizErrorReportUrl,
						'validationUrl2': _0x584a85.validationUrl2,
						'quizRightCountUrl': _0x584a85.quizRightCountUrl,
						'objects': data
					});
					_0x2da717.on('play', function () {
						_0x12e984.resetTime(_0x2da717, _0x2da717.currentTime());
						_0x12e984.hideTimeline();
					});
					_0x2da717.on('seekend', function () {
						_0x12e984.resetTime(_0x2da717, _0x2da717.currentTime());
						_0x12e984.hideTimeline();
					});
					_0x2da717.on('timeupdate', function () {
						!_0x2da717.paused() && (_0x12e984.updateTime(_0x2da717, _0x2da717.currentTime()), _0x12e984.hideTimeline());
					});
				}
			});
		}
	});
	videojs.registerPlugin('timelineObjects', _0x49c0fb);
}());
Ext.define('ans.videojs.customIframe', {
	'extend': 'Ext.Component',
	'xtype': 'customIframe',
	'renderTpl': ['<iframe src="{src}" class="configIframe" style="height: 100%;width: 100%;left: 0;top: 0;right: 0;bottom: 0; background: rgba(0,0,0,.6);"></iframe>'],
	'afterRender': function () {
		var _0x39cdae = this;
		_0x39cdae.callParent(arguments);
		window.addEventListener('message', function (_0x51c5e2) {
			typeof _0x51c5e2.data != 'undefined' && _0x51c5e2.data.opType === 'closeIframe' && _0x39cdae.fireEvent('continue');
		});
	}
});
Ext.define('ans.videojs.CustomIframe', {
	'extend': 'Ext.container.Container',
	'cls': 'ans-customIframe',
	'autoScroll': true,
	'hidden': true,
	'hideMode': 'visibility',
	'constructor': function (_0x4fec9e) {
		var _0x30d9b8 = this;
		_0x30d9b8.callParent(arguments);
		_0x30d9b8.supportHeartbeat = false;
		_0x30d9b8.courseid = '';
		_0x30d9b8.clazzId = '';
		_0x30d9b8.knowledgeid = '';
		_0x30d9b8.objectid = '';
		_0x30d9b8.playTime = 0;
		_0x30d9b8.requesting = false;
		_0x30d9b8.eventArray = [];
		_0x30d9b8.userId = '';
		_0x30d9b8.cookieFid = '';
		_0x30d9b8.headOffset = '';
		typeof _0x4fec9e.userId != 'undefined' && (_0x30d9b8.userId = _0x4fec9e.userId);
		typeof _0x4fec9e.cookieFid != 'undefined' && (_0x30d9b8.cookieFid = _0x4fec9e.cookieFid);
		typeof _0x4fec9e.headOffset != 'undefined' && (_0x30d9b8.headOffset = _0x4fec9e.headOffset);
		typeof _0x4fec9e.eventArray != 'undefined' && (_0x30d9b8.eventArray = _0x4fec9e.eventArray);
		typeof _0x4fec9e.supportHeartbeat != 'undefined' && (_0x30d9b8.supportHeartbeat = _0x4fec9e.supportHeartbeat);
		typeof _0x4fec9e.courseid != 'undefined' && (_0x30d9b8.courseid = _0x4fec9e.courseid);
		typeof _0x4fec9e.clazzId != 'undefined' && (_0x30d9b8.clazzId = _0x4fec9e.clazzId);
		typeof _0x4fec9e.knowledgeid != 'undefined' && (_0x30d9b8.knowledgeid = _0x4fec9e.knowledgeid);
		typeof _0x4fec9e.objectid != 'undefined' && (_0x30d9b8.objectid = _0x4fec9e.objectid);
		_0x30d9b8.lastHeartbeat = 0;
		_0x30d9b8.lastShowIFrame = 0;
		_0x30d9b8.objects = _0x4fec9e.objects && _0x4fec9e.objects.sort ? _0x30d9b8.sort_(_0x4fec9e.objects) : [];
		_0x30d9b8.eventArray.forEach(function (_0x37bfeb) {
			var _0x1bbf1b = parseInt(_0x37bfeb.eventIntervalType);
			_0x1bbf1b === 0 ? (_0x37bfeb.lastHeartbeat = 0, _0x37bfeb.pauseTimeRange = 0, _0x37bfeb.pauseTimeStamp = -1, _0x37bfeb.requesting = false) : _0x1bbf1b === 1 && (_0x37bfeb.timeArray = sortArray(_0x37bfeb.timeArray), _0x37bfeb.index = 0);
		});
	},
	'showIFrame': function (_0x104db4, _0x3ff838, _0x4efcad) {
		try {
			var _0x96db0e = this;
			parseInt(_0x3ff838) === 1 ? _0x96db0e.showObject(_0x104db4, 'customIframe', _0x4efcad) : parseInt(_0x3ff838) === 2 && showPopIframe(_0x4efcad, _0x104db4);
		} catch (_0x3d74b7) {
			console.log(_0x3d74b7);
		}
	},
	'initHeartbeat': function (_0x1f6162, _0x48e93a) {
		var _0x43a7a3 = this;
		if (typeof _0x1f6162 == 'undefined' || _0x1f6162 == '') {
			return;
		}
		Ext.Ajax.request({
			'url': _0x1f6162,
			'params': {
				'uid': _0x43a7a3.userId,
				'schoolId': _0x43a7a3.cookieFid,
				'moocClassId': _0x43a7a3.clazzId,
				'moocCourseId': _0x43a7a3.courseid,
				'chapterId': _0x43a7a3.knowledgeid,
				'objectId': _0x43a7a3.objectid,
				'videoProgress': _0x43a7a3.headOffset,
				'totalVideoDuration': window.duration,
				'enc': _0x43a7a3.videoEnc
			},
			'method': 'get',
			'success': function (_0x35f2b1) {
				if (typeof _0x48e93a != 'undefined') {
					_0x48e93a.requesting = false;
					console.log('requesting: false');
				}
			},
			'failure': function () {
				typeof _0x48e93a != 'undefined' && (_0x48e93a.requesting = false);
				console.log('heartbeatUrl request error');
			}
		});
	},
	'seekVideoTime': function (_0x44e914, _0x225e93) {
		try {
			var _0x3b64db = this;
			typeof _0x3b64db.cmp != 'undefined' && _0x3b64db.cmp != null && (_0x3b64db.cmp.destroy(), _0x3b64db.hide(), _0x44e914.eventCount = _0x44e914.eventCount - 1, _0x44e914.eventCount <= 0 && (_0x44e914.currentTime(_0x225e93), _0x44e914.play()));
		} catch (_0x2ee666) {
			console.log(_0x2ee666);
		}
	},
	'showObject': function (_0x6f7561, _0x54fc2c, _0x2548c5) {
		var _0x349ded = this, _0x3db957 = _0x349ded.items.getAt(0), _0x506dea, _0x553533 = function (_0x4e0ff8) {
			_0x506dea.destroy();
			_0x349ded.hide();
			_0x4e0ff8.eventCount = _0x4e0ff8.eventCount - 1;
			_0x4e0ff8.eventCount <= 0 && _0x4e0ff8.play();
		};
		_0x3db957 != null && _0x3db957.destroy();
		_0x349ded.cmp = null;
		if (_0x54fc2c == 'customIframe') {
			_0x506dea = _0x349ded.add({
				'xtype': 'customIframe',
				'renderData': { 'src': _0x2548c5 }
			});
			_0x6f7561.eventCount += 1;
		}
		if (!_0x506dea) {
			return;
		}
		_0x506dea.on('continue', function () {
			_0x553533(_0x6f7561);
		});
		var _0xa626b3 = !(_0x506dea.model === false);
		_0x349ded.showModel(_0xa626b3);
		_0x349ded.cmp = _0x506dea;
		_0xa626b3 && _0x6f7561.pause();
	},
	'showModel': function (_0x48beca) {
		var _0x374f7e = this;
		_0x374f7e.show();
		_0x48beca ? (_0x374f7e.removeCls('ans-timelineobjects-autosize'), _0x374f7e.setAutoScroll(true)) : (_0x374f7e.addCls('ans-timelineobjects-autosize'), _0x374f7e.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
	},
	'updateTime': function (_0x3f3cf8, _0x4b0798) {
		try {
			if (this.supportHeartbeat && isStuViewPage() && !_0x3f3cf8.paused()) {
				var _0x43df34 = new Date().getTime(), _0x4e1423 = this, _0x3fb3b3 = 0;
				for (var _0x10ccc0 = 0; _0x10ccc0 < _0x4e1423.eventArray.length; _0x10ccc0++) {
					var _0x41e298 = _0x4e1423.eventArray[_0x10ccc0], _0x546e7b = parseInt(_0x41e298.eventType), _0x3a91e2 = parseInt(_0x41e298.eventIntervalType);
					if (_0x3a91e2 === 0) {
						if (_0x41e298.requesting || _0x3f3cf8.scrubbing()) {
							continue;
						}
						var _0x59c914 = _0x43df34 - _0x41e298.lastHeartbeat;
						_0x41e298.pauseTimeRange > 0 && (_0x59c914 = _0x59c914 - _0x41e298.pauseTimeRange);
						var _0x270641 = _0x59c914 / 1000;
						_0x270641 = parseInt(_0x270641);
						if (_0x270641 > _0x41e298.eventInterval) {
							if (_0x546e7b === 1 || _0x546e7b === 2) {
								_0x3fb3b3++;
								if (_0x3fb3b3 > 1) {
									break;
								}
							}
							_0x41e298.pauseTimeRange = 0;
							_0x41e298.lastHeartbeat = _0x43df34;
							_0x546e7b === 0 ? (_0x41e298.requesting = true, this.initHeartbeat(_0x41e298.url, _0x41e298)) : (_0x546e7b === 1 || _0x546e7b === 2) && _0x4e1423.showIFrame(_0x3f3cf8, _0x546e7b, _0x41e298.url);
						}
					} else {
						if (_0x3a91e2 === 1) {
							if (_0x41e298.index >= _0x41e298.timeArray.length || _0x3f3cf8.scrubbing()) {
								continue;
							}
							var _0x59c366 = _0x41e298.timeArray[_0x41e298.index];
							if (typeof _0x59c366 == 'undefined') {
								continue;
							}
							if (_0x4b0798 >= _0x59c366) {
								if (_0x546e7b === 1 || _0x546e7b === 2) {
									_0x3fb3b3++;
									if (_0x3fb3b3 > 1) {
										break;
									}
								}
								_0x41e298.index++;
								var _0x1f2a4f = _0x41e298.url;
								_0x546e7b === 0 ? _0x4e1423.initHeartbeat(_0x1f2a4f) : (_0x546e7b === 1 || _0x546e7b === 2) && _0x4e1423.showIFrame(_0x3f3cf8, _0x546e7b, _0x1f2a4f);
							}
						}
					}
				}
			}
		} catch (_0x344d60) {
			console.log(_0x344d60);
		}
	},
	'resetTime': function (_0x370da5, _0x26aff6) {
		try {
			var _0x4d21ec = this, _0x4af869;
			for (_0x4af869 = 0; _0x4af869 < _0x4d21ec.eventArray.length; _0x4af869++) {
				var _0xcb3b9c = _0x4d21ec.eventArray[_0x4af869];
				if (_0x26aff6 <= _0xcb3b9c.startTime) {
					_0x4d21ec.index = _0x4af869;
					break;
				}
			}
		} catch (_0x284822) {
			console.log(_0x284822);
		}
	}
});
;
function sortArray(_0x55dae1) {
	try {
		return _0x55dae1 && _0x55dae1.sort && _0x55dae1.sort(function (_0x571e25, _0x224877) {
			return _0x571e25 - _0x224877;
		});
	} catch (_0x57eab7) {
		console.log(_0x57eab7);
	}
	return _0x55dae1;
}
;
(function () {
	var _0x594e2e = videojs.getPlugin('plugin'), _0x4b4850 = videojs.extend(_0x594e2e, {
		'constructor': function (_0x47dc59, _0x4a4120) {
			if (typeof _0x4a4120.supportHeartbeat == 'undefined' || !_0x4a4120.supportHeartbeat) {
				return;
			}
			_0x594e2e.call(this, _0x47dc59, _0x4a4120);
			_0x47dc59.pauseTimeStamp = 0;
			_0x47dc59.pauseTimeRange = 0;
			var _0x19ba83 = null;
			try {
				_0x19ba83 = Ext.create('ans.videojs.CustomIframe', {
					'renderTo': _0x47dc59.el_,
					'supportHeartbeat': _0x4a4120.supportHeartbeat,
					'eventArray': _0x4a4120.eventArray,
					'courseid': _0x4a4120.courseid,
					'clazzId': _0x4a4120.clazzId,
					'knowledgeid': _0x4a4120.knowledgeid,
					'objectid': _0x4a4120.objectid,
					'videoEnc': _0x4a4120.videoEnc,
					'userId': _0x4a4120.userId,
					'cookieFid': _0x4a4120.cookieFid,
					'headOffset': _0x4a4120.headOffset
				});
			} catch (_0x34c3a3) {
				console.log(_0x34c3a3);
			}
			if (_0x19ba83 == null) {
				return;
			}
			_0x47dc59.on('play', function () {
				try {
					var _0x3233c6 = new Date().getTime();
					_0x19ba83.eventArray.forEach(function (_0x415ef1) {
						var _0x262344 = parseInt(_0x415ef1.eventIntervalType);
						if (_0x262344 === 0) {
							if (_0x415ef1.pauseTimeStamp > 0) {
								_0x415ef1.pauseTimeStamp < _0x415ef1.lastHeartbeat && (_0x415ef1.pauseTimeStamp = _0x415ef1.lastHeartbeat);
								var _0x55e44c = _0x3233c6 - _0x415ef1.pauseTimeStamp;
								_0x415ef1.pauseTimeRange += _0x55e44c;
							}
							_0x415ef1.pauseTimeStamp = 0;
						}
					});
					_0x19ba83.resetTime(_0x47dc59, _0x47dc59.currentTime());
				} catch (_0x4f97d7) {
					console.log(_0x4f97d7);
				}
			});
			_0x47dc59.on('seekend', function () {
				_0x19ba83.resetTime(_0x47dc59, _0x47dc59.currentTime());
			});
			_0x47dc59.on('pause', function () {
				try {
					var _0x480817 = new Date().getTime();
					_0x19ba83.eventArray.forEach(function (_0x53db86) {
						var _0x1f60cf = parseInt(_0x53db86.eventIntervalType);
						_0x1f60cf === 0 && (_0x53db86.pauseTimeStamp = _0x480817);
					});
				} catch (_0x1315a4) {
					console.log(_0x1315a4);
				}
			});
			_0x47dc59.on('timeupdate', function () {
				try {
					!_0x47dc59.paused() && _0x19ba83.updateTime(_0x47dc59, parseInt(_0x47dc59.currentTime()));
					_0x19ba83.playTime = _0x47dc59.currentTime();
				} catch (_0x553efa) {
					console.log(_0x553efa);
				}
			});
			window.addEventListener('message', function (_0x813076) {
				try {
					if (!_0x4a4120.supportHeartbeat || !isStuViewPage()) {
						return;
					}
					var _0x2b7e89 = _0x813076.data;
					if (typeof _0x2b7e89 == 'undefined') {
						_0x19ba83.resetDiv(_0x47dc59);
						return;
					}
					var _0x2ef511 = parseInt(_0x4a4120.duration);
					if (_0x2b7e89.opType === 'fastForward') {
						var _0x14cbed = _0x2b7e89.value;
						if (typeof _0x14cbed === 'undefined') {
							_0x19ba83.resetDiv(_0x47dc59);
							return;
						}
						_0x14cbed = parseInt(_0x14cbed);
						if (!(_0x14cbed > 0)) {
							_0x19ba83.resetDiv(_0x47dc59);
							return;
						}
						_0x47dc59.ignoreSeek = false;
						_0x47dc59.switchStatus = true;
						var _0x1e50a3 = _0x47dc59.currentTime();
						_0x1e50a3 = parseInt(_0x1e50a3);
						var _0x3a47dd = _0x1e50a3 + _0x14cbed;
						if (_0x3a47dd > _0x2ef511) {
							_0x19ba83.resetDiv(_0x47dc59);
							return;
						}
						_0x19ba83.seekVideoTime(_0x47dc59, _0x3a47dd);
						return;
					}
					if (_0x2b7e89.opType === 'videoStartTime') {
						var _0x14cbed = _0x2b7e89.value;
						if (typeof _0x14cbed === 'undefined') {
							_0x19ba83.resetDiv(_0x47dc59);
							return;
						}
						_0x14cbed = parseInt(_0x14cbed);
						if (!(_0x14cbed >= 0) || _0x14cbed > _0x2ef511) {
							_0x19ba83.resetDiv(_0x47dc59);
							return;
						}
						_0x47dc59.ignoreSeek = false;
						_0x47dc59.switchStatus = true;
						_0x19ba83.seekVideoTime(_0x47dc59, _0x14cbed);
					}
				} catch (_0x21cec7) {
					console.log(_0x21cec7);
				}
			});
		}
	});
	videojs.registerPlugin('customIframePlugin', _0x4b4850);
}());
(function () {
	var _0xb50eaa = videojs.getPlugin('plugin'), _0x804dbf = videojs.extend(_0xb50eaa, {
		'constructor': function (_0x4617f0, _0x1ec6fa) {
			_0xb50eaa.call(this, _0x4617f0, _0x1ec6fa);
			if (!_0x1ec6fa.url) {
				return;
			}
			var _0x1b24a2 = this;
			Ext.Ajax.request({
				'url': _0x1ec6fa.url,
				'async': false,
				'success': function (_0x41647b) {
					if (_0x41647b.status != 200) {
						return;
					}
					eval('var data=' + _0x41647b.responseText);
					if (!data.status) {
						return;
					}
					var _0x529d3f = videojs('video');
					if (_0x529d3f && typeof _0x529d3f.markers === 'function') {
						var _0x546785 = _0x4617f0.eventPoints;
						_0x546785.push.apply(_0x546785, data.list);
						_0x529d3f.markers({
							'markerTip': {
								'display': true,
								'text': function (_0x2edae9) {
									return _0x2edae9.text;
								}
							},
							'markers': _0x546785,
							'onMarkerClick': function (_0x4fd6dc) {
								if (_0x1ec6fa.ff != 1) {
									return false;
								}
								var _0x7cd138 = $(this).data('marker-key');
								return _0x4617f0.currentTime(_0x4fd6dc.time), false;
							}
						});
					}
					if (data.list && data.list.length > 0) {
						var _0x75a52c = [], _0x2d8612 = {
							_0x269a35: _0x7cdac7,
							_0x269a35: _0x3e102a
						};
						for (var _0x513b0b = 0; _0x513b0b < data.list.length; _0x513b0b++) {
							var _0x1dd3d8 = data.list[_0x513b0b], _0x269a35 = _0x1dd3d8.text;
							if (!_0x2d8612[_0x269a35]) {
								var _0x7cdac7 = [];
								_0x7cdac7.push(_0x1dd3d8);
								_0x75a52c.push(_0x269a35);
							} else {
								var _0x3e102a = _0x2d8612[_0x269a35];
								_0x3e102a.push(_0x1dd3d8);
							}
						}
						function _0x5379bb(_0x253cd1) {
							var _0x4d0da8 = '<div class="zsCloud_box"><h2 class="zsCloud_seltime">选择时间</h2><div class="zsCloud_div"><div class="zsCloud_div_list">';
							for (var _0x371397 = 0; _0x371397 < _0x253cd1.length; _0x371397++) {
								var _0x5dda42 = _0x253cd1[_0x371397], _0x4423cc = Ext.fly(_0x38fcc2.elements[0]).select('.topicId' + _0x5dda42.topicid + ':not(.markertime)'), _0x3116e6 = videojs.formatTime(_0x5dda42.time);
								_0x4423cc && _0x4423cc.elements[0] && _0x4423cc.elements[0].parentElement.remove();
								_0x4d0da8 += '<div class="zsCloud_item topicId' + _0x5dda42.topicid + '" data-marker-time="' + _0x5dda42.time + '" title="' + _0x3116e6 + '" onclick="markersPlayer(this)">' + _0x3116e6 + '</div>';
							}
							return _0x4d0da8 += '</div></div></div>', _0x4d0da8;
						}
						Ext.select('.zsCloud').setStyle('display', 'block');
						var _0x38fcc2 = Ext.select('.zsCloud_ul');
						if (_0x38fcc2 && _0x38fcc2.elements[0]) {
							var _0x520467;
							for (var _0x44ca9c = 0; _0x44ca9c < _0x75a52c.length; _0x44ca9c++) {
								var _0x2675df = _0x75a52c[_0x44ca9c], _0x29f92d = _0x2d8612[_0x2675df], _0x14dcd6 = '';
								if (_0x29f92d) {
									if (_0x29f92d.length == 1) {
										var _0x283caa = _0x29f92d[0], _0x4f85a4 = Ext.fly(_0x38fcc2.elements[0]).select('.topicId' + _0x283caa.topicid + ':not(.markertime)'), _0x3db865 = videojs.formatTime(_0x283caa.time);
										_0x4f85a4 && _0x4f85a4.elements[0] && _0x4f85a4.elements[0].parentElement.remove();
										_0x14dcd6 = '<li><span class=\'topicId' + _0x283caa.topicid + ' markertime\' data-marker-time=\'' + _0x283caa.time + '\' title=\'' + _0x3db865 + '\' onclick=\'markersPlayer(this)\'>' + _0x283caa.text + '</span></li>';
									} else {
										_0x14dcd6 = '<li class="zsCloud_select"><span class="zsCloud_span">' + _0x2675df + '</span>';
										_0x29f92d && _0x29f92d.length > 0 ? _0x14dcd6 += _0x5379bb(_0x29f92d) : _0x14dcd6 += '</li>';
									}
								}
								_0x520467 ? _0x520467 = Ext.DomHelper.insertHtml('afterEnd', _0x520467.elements[0], _0x14dcd6) : _0x520467 = Ext.DomHelper.insertHtml('afterBegin', _0x38fcc2.elements[0], _0x14dcd6);
								_0x520467 = Ext.fly(_0x520467).select('');
							}
						}
						_0x1ec6fa.videoTopicCloud && _0x1ec6fa.videoTopicCloud == 1 && (Ext.select('.zsCloud_down').setStyle('display', 'block'), Ext.select('.zsCloud_body').setStyle('display', 'block'));
					}
					var _0x35e0ef = new Map(), _0x5a5629 = new Array();
					if (data.list && data.list.length > 0) {
						for (var _0x513b0b = 0; _0x513b0b < data.list.length; _0x513b0b++) {
							var _0x46ea0b = data.list[_0x513b0b].topicid, _0x3ddf27 = _0x35e0ef.get(_0x46ea0b);
							!_0x3ddf27 && (_0x3ddf27 = {}, _0x3ddf27.text = data.list[_0x513b0b].text, _0x3ddf27.time = data.list[_0x513b0b].time, _0x3ddf27.topicid = data.list[_0x513b0b].topicid, _0x3ddf27.weight = 0, _0x3ddf27.html = {
								'data-marker-time': data.list[_0x513b0b].time,
								'onclick': 'markersPlayer(this)'
							}, _0x35e0ef.set(_0x46ea0b, _0x3ddf27), _0x5a5629.push(_0x3ddf27));
							_0x3ddf27.weight += 1;
						}
					}
					$(function () {
						_0x5a5629.length != 0 && $('#word_cloud').jQCloud(_0x5a5629);
						function _0x1f7c84(_0x4ecaf7) {
							$(_0x4ecaf7).niceScroll({
								'cursorborder': '',
								'cursorwidth': 8,
								'cursorcolor': '#DADFE6',
								'boxzoom': false,
								'autohidemode': true
							});
							setInterval(function () {
								$(_0x4ecaf7).getNiceScroll().resize();
							}, 300);
						}
						$('.zsCloud_box').each(function (_0x575dc7) {
							$(this).find('.zsCloud_div').attr('id', 'zsCloud_div_' + _0x575dc7);
							_0x1f7c84('#zsCloud_div_' + _0x575dc7);
						});
					});
					$('.zsCloud_down').click(function () {
						var _0xf91254 = $('.zsCloud_body');
						_0xf91254.is(':visible') ? (_0xf91254.hide(), $(this).addClass('zsCloud_up'), $(this).text('展开')) : (_0xf91254.show(), $(this).removeClass('zsCloud_up'), $(this).text('收起'));
					});
				}
			});
		}
	});
	videojs.registerPlugin('marker', _0x804dbf);
}());
(function () {
	var _0x275893 = videojs.getPlugin('plugin'), _0x50e0f4 = videojs.extend(_0x275893, {
		'constructor': function (_0x4dd695, _0x4a50f9) {
			_0x275893.call(this, _0x4dd695, _0x4a50f9);
			var _0x1ef51a = this, _0x353071 = _0x4a50f9.subtitleUrl, _0x5030e6 = function (_0x5de9e8) {
				var _0x6e0cbd = _0x5de9e8.match(/support\/(\w+).\w+/);
				if (_0x6e0cbd) {
					return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0x6e0cbd[1];
				}
			}, _0x4a27b0 = function (_0x1bcc30, _0x31fd51, _0x27585b) {
				_0x4dd695.addRemoteTextTrack({
					'kind': 'subtitles',
					'srclang': 'cn',
					'label': _0x1bcc30,
					'src': _0x31fd51,
					'default': _0x27585b
				}, true);
			};
			_0x4dd695.ready(function () {
				_0x353071 && Ext.Ajax.request({
					'url': _0x353071,
					'success': function (_0x43f8b2) {
						if (_0x43f8b2.status != 200) {
							return;
						}
						eval('var subs=' + _0x43f8b2.responseText);
						var _0x363c0b = 0, _0x2dd37d = 0;
						subs.length > 0 && Ext.each(subs, function (_0x192d57) {
							_0x4a50f9.translate == 1 && _0x192d57.name == 'English' ? (_0x192d57.selected = true, _0x2dd37d = _0x363c0b) : _0x192d57.selected = false;
							_0x4a27b0(_0x192d57.name, _0x5030e6(_0x192d57.url), _0x192d57.selected);
							_0x363c0b++;
						});
						if (_0x4a50f9.translate == 1) {
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').setHTML('翻译');
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').addCls('vjs-hide-content');
						}
						setTimeout(function () {
							var _0x5d3301 = _0x4dd695.textTracks();
							_0x4a50f9.translate == 1 ? _0x5d3301 && _0x5d3301[_0x2dd37d] ? _0x5d3301[_0x2dd37d].mode = 'showing' : _0x5d3301 && _0x5d3301[0] && (_0x5d3301[0].mode = 'showing') : _0x5d3301 && _0x5d3301[0] && (_0x5d3301[0].mode = 'showing');
						}, 500);
					}
				});
				var _0x476119 = _0x4dd695.textTrackSettings;
				_0x476119.setValues({
					'backgroundColor': '#000',
					'backgroundOpacity': '0',
					'edgeStyle': 'uniform'
				});
				_0x476119.updateDisplay();
			});
		}
	});
	videojs.registerPlugin('subtitle', _0x50e0f4);
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
		var _0x1e3f9b = this;
		_0x1e3f9b.callParent(arguments);
		var _0x4b2c08 = Ext.query('input', _0x1e3f9b.el.dom);
		Ext.each(_0x4b2c08, function (_0x54e036, _0x48ca67) {
			Ext.fly(_0x54e036).on('click', function () {
				_0x1e3f9b.onSelected(_0x48ca67);
			});
		});
		try {
			typeof createVideoTask === 'function' ? createVideoTask() : console.log('createVideoTask函数不存在\uFF01');
		} catch (_0x450a57) {
		}
		try {
			if (typeof aplus_queue != 'undefined') {
				var _0x53f711 = parent.AttachmentSetting;
				if (_0x53f711) {
					var _0x2b781d = _0x53f711.aplus_video_id, _0x387656 = _0x53f711.aplus_resource_id, _0x46f7df = _0x53f711.knowledgename, _0x522538 = _0x53f711.coursename;
					aplus_queue.push({
						'action': 'aplus.record',
						'arguments': [
							'pybk_error',
							'OTHER',
							{
								'video_name': _0x46f7df,
								'video_id': _0x2b781d,
								'resource_id': _0x387656,
								'resource_name': _0x522538
							}
						]
					});
				}
			}
		} catch (_0x39d987) {
		}
	},
	'setErrorMsg': function (_0x15c5d0) {
		Ext.fly(this.errorMsgEl).setHTML(_0x15c5d0);
	}
});
Ext.define('ans.videojs.ErrorNote', {
	'extend': 'Ext.Component',
	'cls': 'ans-vjserrdisplay',
	'renderTpl': ['<div class="ans-vjserrdisplay-title">播放出现异常\u3002</div>']
});
(function () {
	var _0x1c5d3e = videojs.getComponent('ErrorDisplay'), _0x26c714 = videojs.extend(_0x1c5d3e, {
		'constructor': function (_0x3e5d2c, _0x491790) {
			_0x1c5d3e.call(this, _0x3e5d2c, _0x491790);
		},
		'colse': function () {
			_0x1c5d3e.prototype.colse.call(this);
			me.ansErrorDisplay && (me.ansErrorDisplay.destroy(), me.ansErrorDisplay = null);
		},
		'fill': function () {
			_0x1c5d3e.prototype.fill.call(this);
			var _0x2820bc = this, _0x36a38d = _0x2820bc.player_, _0x2473e6 = _0x36a38d.options_.playlines, _0x52b8f6 = Ext.query('.vjs-modal-dialog-content', _0x2820bc.el_)[0];
			_0x2820bc.ansErrorDisplay && (_0x2820bc.ansErrorDisplay.destroy(), delete _0x2820bc.ansErrorDisplay);
			if (!_0x36a38d.selectCDN || !_0x2473e6) {
				_0x2820bc.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', { 'renderTo': _0x2820bc.el_ });
				return;
			}
			var _0x398994 = _0x36a38d.currentPlayline(), _0x2b9a70 = 0;
			Ext.each(_0x2473e6, function (_0x2a7560, _0x392148) {
				_0x398994 == _0x2a7560 && (_0x2b9a70 = _0x392148);
			});
			_0x2820bc.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
				'renderTo': _0x2820bc.el_,
				'onSelected': function (_0x5432db) {
					_0x36a38d.selectCDN(_0x5432db);
					_0x2820bc.close();
				},
				'renderData': {
					'playlines': _0x2473e6,
					'errorMsg': _0x2820bc.content(),
					'selectedIndex': _0x2b9a70
				}
			});
		}
	});
	videojs.registerComponent('ErrorDisplay', _0x26c714);
}());
(function () {
	var _0x27ae8c = null;
	typeof window.videojs === 'undefined' && typeof require === 'function' ? _0x27ae8c = require('video.js') : _0x27ae8c = window.videojs;
	(function (_0x3217ab, _0x393c2e) {
		var _0x2125ee = {}, _0x53903e, _0x1fe7b9 = {}, _0x5a2740 = {};
		function _0x2a7147(_0x1f89b6, _0x44ec06, _0x495040, _0x105f6e) {
			_0x1fe7b9 = {
				'label': _0x495040,
				'sources': _0x44ec06
			};
			if (typeof _0x105f6e === 'function') {
				return _0x105f6e(_0x1f89b6, _0x44ec06, _0x495040);
			}
			return _0x1f89b6.src(_0x44ec06.map(function (_0x12e4b8) {
				return {
					'src': _0x12e4b8.src,
					'type': _0x12e4b8.type,
					'res': _0x12e4b8.res
				};
			})), _0x1f89b6;
		}
		var _0x2a98ba = _0x393c2e.getComponent('MenuItem'), _0x2633d1 = _0x393c2e.extend(_0x2a98ba, {
			'constructor': function (_0x3dab10, _0x530b87, _0x2bbf1d, _0x428a24) {
				this.onClickListener = _0x2bbf1d;
				this.label = _0x428a24;
				_0x2a98ba.call(this, _0x3dab10, _0x530b87);
				this.src = _0x530b87.src;
				this.on('click', this.onClick);
				this.on('touchstart', this.onClick);
				_0x530b87.initialySelected && (this.showAsLabel(), this.selected(true), this.addClass('vjs-selected'));
			},
			'showAsLabel': function () {
				this.label && (this.label.innerHTML = this.options_.label);
			},
			'onClick': function (_0x22d0e5) {
				this.onClickListener(this);
				var _0xb5e249 = this.player_.currentTime(), _0x269685 = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x269685 && this.player_.bigPlayButton.hide();
				typeof _0x22d0e5 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x22d0e5 = this.options_.customSourcePicker);
				var _0x5e21c8 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x5e21c8 = 'timeupdate');
				_0x2a7147(this.player_, this.src, this.options_.label, _0x22d0e5).one(_0x5e21c8, function () {
					var _0x48c91d = this.player_;
					_0x48c91d.switchStatus = true;
					_0x48c91d.currentTime(_0xb5e249);
					!_0x269685 && _0x48c91d.play();
					_0x48c91d.trigger('resolutionchange');
				});
			}
		});
		_0x393c2e.registerComponent('ResolutionMenuItem', _0x2633d1);
		var _0x47ac90 = _0x393c2e.getComponent('MenuButton'), _0x4a844b = _0x393c2e.extend(_0x47ac90, {
			'constructor': function (_0xa38928, _0x544e97, _0x4be89e, _0x4d4fff) {
				this.sources = _0x544e97.sources;
				this.label = _0x4d4fff;
				this.label.innerHTML = _0x544e97.initialySelectedLabel;
				_0x47ac90.call(this, _0xa38928, _0x544e97, _0x4be89e);
				this.controlText('Quality');
				if (_0x4be89e.dynamicLabel) {
					this.el().appendChild(_0x4d4fff);
				} else {
					var _0x32bbd1 = document.createElement('span');
					_0x393c2e.dom.addClass(_0x32bbd1, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x32bbd1);
				}
			},
			'createItems': function () {
				var _0x1c2d5b = [], _0x200eb7 = this.sources && this.sources.label || {}, _0x4e4de4 = function (_0x16dbcc) {
					_0x1c2d5b.map(function (_0x5c2b19) {
						_0x5c2b19.selected(_0x5c2b19 === _0x16dbcc);
						_0x5c2b19.removeClass('vjs-selected');
					});
				};
				for (var _0x1b1c04 in _0x200eb7) {
					_0x200eb7.hasOwnProperty(_0x1b1c04) && (_0x1c2d5b.push(new _0x2633d1(this.player_, {
						'label': _0x1b1c04,
						'src': _0x200eb7[_0x1b1c04],
						'initialySelected': _0x1b1c04 === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x4e4de4, this.label)), _0x5a2740[_0x1b1c04] = _0x1c2d5b[_0x1c2d5b.length - 1]);
				}
				return _0x1c2d5b;
			}
		});
		_0x53903e = function (_0x1cab45) {
			var _0xc14f95 = _0x393c2e.mergeOptions(_0x2125ee, _0x1cab45), _0x1116e9 = this, _0x432f9d = document.createElement('span'), _0xb7fb7c = {};
			_0x393c2e.dom.addClass(_0x432f9d, 'vjs-resolution-button-label');
			_0x1116e9.updateSrc = function (_0x12b99e) {
				if (!_0x12b99e) {
					return _0x1116e9.src();
				}
				_0x1116e9.controlBar.resolutionSwitcher && (_0x1116e9.controlBar.resolutionSwitcher.dispose(), delete _0x1116e9.controlBar.resolutionSwitcher);
				_0x12b99e = _0x12b99e.sort(_0x3d5b1);
				_0xb7fb7c = _0x1dc78a(_0x12b99e);
				var _0x180a91 = _0x4b71fa(_0xb7fb7c, _0x12b99e), _0x4ec65e = new _0x4a844b(_0x1116e9, {
					'sources': _0xb7fb7c,
					'initialySelectedLabel': _0x180a91.label,
					'initialySelectedRes': _0x180a91.res,
					'customSourcePicker': _0xc14f95.customSourcePicker
				}, _0xc14f95, _0x432f9d);
				return _0x393c2e.dom.addClass(_0x4ec65e.el(), 'vjs-resolution-button'), _0x1116e9.controlBar.resolutionSwitcher = _0x1116e9.controlBar.el_.insertBefore(_0x4ec65e.el_, _0x1116e9.controlBar.getChild('fullscreenToggle').el_), _0x1116e9.controlBar.resolutionSwitcher.dispose = function () {
					this.parentNode.removeChild(this);
				}, _0x2a7147(_0x1116e9, _0x180a91.sources, _0x180a91.label, _0xc14f95.customSourcePicker);
			};
			_0x1116e9.currentResolution = function (_0x2decdb, _0x49be62) {
				if (_0x2decdb == null) {
					return _0x1fe7b9;
				}
				return _0x5a2740[_0x2decdb] != null && _0x5a2740[_0x2decdb].onClick(_0x49be62), _0x1116e9;
			};
			_0x1116e9.getGroupedSrc = function () {
				return _0xb7fb7c;
			};
			function _0x3d5b1(_0x5514da, _0x2a4d2b) {
				if (!_0x5514da.res || !_0x2a4d2b.res) {
					return 0;
				}
				return +_0x2a4d2b.res - +_0x5514da.res;
			}
			function _0x1dc78a(_0x1f3fa3) {
				var _0x5663dd = {
					'label': {},
					'res': {},
					'type': {}
				};
				return _0x1f3fa3.map(function (_0x51a6f9) {
					_0xaedd04(_0x5663dd, 'label', _0x51a6f9);
					_0xaedd04(_0x5663dd, 'res', _0x51a6f9);
					_0xaedd04(_0x5663dd, 'type', _0x51a6f9);
					_0x5822c5(_0x5663dd, 'label', _0x51a6f9);
					_0x5822c5(_0x5663dd, 'res', _0x51a6f9);
					_0x5822c5(_0x5663dd, 'type', _0x51a6f9);
				}), _0x5663dd;
			}
			function _0xaedd04(_0x4a3fd3, _0x5a9254, _0x46be97) {
				_0x4a3fd3[_0x5a9254][_0x46be97[_0x5a9254]] == null && (_0x4a3fd3[_0x5a9254][_0x46be97[_0x5a9254]] = []);
			}
			function _0x5822c5(_0x282bee, _0x286680, _0x5d3feb) {
				_0x282bee[_0x286680][_0x5d3feb[_0x286680]].push(_0x5d3feb);
			}
			function _0x4b71fa(_0x2013d4, _0x54c333) {
				var _0x3d22c1 = _0xc14f95.default, _0x4be86e = '';
				return _0x3d22c1 === 'high' ? (_0x3d22c1 = _0x54c333[0].res, _0x4be86e = _0x54c333[0].label) : _0x3d22c1 === 'low' || _0x3d22c1 == null || !_0x2013d4.res[_0x3d22c1] ? (_0x3d22c1 = _0x54c333[_0x54c333.length - 1].res, _0x4be86e = _0x54c333[_0x54c333.length - 1].label) : _0x2013d4.res[_0x3d22c1] && (_0x4be86e = _0x2013d4.res[_0x3d22c1][0].label), {
					'res': _0x3d22c1,
					'label': _0x4be86e,
					'sources': _0x2013d4.res[_0x3d22c1]
				};
			}
			_0x1116e9.ready(function () {
				_0x1116e9.options_.sources.length > 0 && _0x1116e9.setTimeout(function () {
					_0x1116e9.updateSrc(_0x1116e9.options_.sources);
				}, 1);
			});
		};
		_0x393c2e.registerPlugin('videoJsResolutionSwitcher', _0x53903e);
	}(window, _0x27ae8c));
}());
(function () {
	(function (_0x1d8e3d, _0x33fe5b) {
		var _0x27874f = {}, _0x604508, _0x3233ca = {}, _0x1ed692 = { _0x14703c: _0x55fb35[_0x55fb35.length - 1] };
		function _0x2ace65(_0x698f42, _0x54d1ec, _0x248d3a, _0x3828fc) {
			_0x3233ca = _0x54d1ec;
			if (typeof _0x3828fc === 'function') {
				return _0x3828fc(_0x698f42, _0x54d1ec, _0x248d3a);
			}
			return _0x698f42;
		}
		var _0x20ea80 = _0x33fe5b.getComponent('ResolutionMenuItem'), _0x25dad6 = _0x33fe5b.extend(_0x20ea80, {
			'onClick': function (_0x27fd6a) {
				this.onClickListener(this);
				var _0x9dcef5 = this.player_.currentTime(), _0x1fc332 = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x1fc332 && this.player_.bigPlayButton.hide();
				typeof _0x27fd6a !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x27fd6a = this.options_.customSourcePicker);
				var _0x4b6811 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x4b6811 = 'timeupdate');
				var _0x49d5c5 = _0x2ace65(this.player_, this.src, this.options_.label, _0x27fd6a);
				_0x49d5c5 && _0x49d5c5.one(_0x4b6811, function () {
					_0x49d5c5.switchStatus = true;
					_0x49d5c5.currentTime(_0x9dcef5);
					!_0x1fc332 && _0x49d5c5.play();
					_0x49d5c5.trigger('playlinechange');
				});
			}
		}), _0x15942a = _0x33fe5b.getComponent('MenuButton'), _0x5ce48b = _0x33fe5b.extend(_0x15942a, {
			'constructor': function (_0x3937c9, _0x4c46da, _0x541cd3, _0x428959) {
				this.playlines = _0x4c46da.playlines;
				this.label = _0x428959;
				this.label.innerHTML = _0x4c46da.initialySelectedLabel;
				_0x15942a.call(this, _0x3937c9, _0x4c46da, _0x541cd3);
				this.controlText('Playline');
				if (_0x541cd3.dynamicLabel) {
					this.el().appendChild(_0x428959);
				} else {
					var _0x51c42d = document.createElement('span');
					_0x33fe5b.addClass(_0x51c42d, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x51c42d);
				}
			},
			'createItems': function () {
				var _0x55fb35 = [], _0x26d4c3 = this.playlines || [], _0x16925c = function (_0x399b2f) {
					_0x55fb35.map(function (_0x55cd22) {
						_0x55cd22.selected(_0x55cd22 === _0x399b2f);
						_0x55cd22.removeClass('vjs-selected');
					});
				};
				for (var _0x3a5e6e = 0; _0x3a5e6e < _0x26d4c3.length; _0x3a5e6e++) {
					var _0x14703c = _0x26d4c3[_0x3a5e6e].label;
					_0x55fb35.push(new _0x25dad6(this.player_, {
						'label': _0x14703c,
						'src': _0x26d4c3[_0x3a5e6e],
						'initialySelected': _0x14703c === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x16925c, this.label));
				}
				return _0x55fb35;
			}
		});
		_0x604508 = function (_0x4e868e) {
			var _0x552305 = _0x33fe5b.mergeOptions(_0x27874f, _0x4e868e), _0x4018c0 = this, _0x15d7b8 = document.createElement('span'), _0x156696 = _0x4018c0.options_.playlines;
			_0x33fe5b.dom.addClass(_0x15d7b8, 'vjs-resolution-button-label');
			var _0x21cd57 = new _0x5ce48b(_0x4018c0, {
				'playlines': _0x156696,
				'initialySelectedLabel': _0x156696[0].label,
				'initialySelectedUrl': _0x156696[0].url,
				'customSourcePicker': _0x552305.customSourcePicker
			}, _0x552305, _0x15d7b8);
			_0x33fe5b.dom.addClass(_0x21cd57.el(), 'vjs-resolution-button');
			_0x33fe5b.dom.addClass(_0x21cd57.el(), 'vjs-playline-button');
			_0x21cd57.show();
			_0x4018c0.selectCDN = function (_0x55ac8d) {
				_0x21cd57.items[_0x55ac8d].onClick(_0x552305.customSourcePicker);
				_0x4018c0.play();
			};
			_0x156696.length > 0 && (_0x3233ca = _0x156696[0]);
			_0x4018c0.currentPlayline = function () {
				return _0x3233ca;
			};
			_0x4018c0.ready(function () {
				_0x4018c0.controlBar.videoJsPlayLine = _0x4018c0.controlBar.el_.insertBefore(_0x21cd57.el_, _0x4018c0.controlBar.getChild('fullscreenToggle').el_);
				_0x4018c0.controlBar.videoJsPlayLine.dispose = function () {
					this.parentNode.removeChild(this);
				};
			});
		};
		_0x33fe5b.registerPlugin('videoJsPlayLine', _0x604508);
	}(window, videojs));
}());
Ext.define('ans.AudioJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x19e57f) {
		_0x19e57f = _0x19e57f || {};
		var _0x9b6a1f = this;
		_0x9b6a1f.addEvents(['seekstart']);
		_0x9b6a1f.mixins.observable.constructor.call(_0x9b6a1f, _0x19e57f);
		var _0x2ec24a = videojs(_0x19e57f.videojs, _0x9b6a1f.params2VideoOpt(_0x19e57f.params), function () {
		});
		Ext.fly(_0x19e57f.videojs).on('contextmenu', function (_0x1ade9b) {
			_0x1ade9b.preventDefault();
		});
		Ext.fly(_0x19e57f.videojs).on('keydown', function (_0x412d2c) {
			(_0x412d2c.keyCode == 32 || _0x412d2c.keyCode == 37 || _0x412d2c.keyCode == 39) && _0x412d2c.preventDefault();
			_0x412d2c.keyCode == 32 && (_0x2ec24a.paused() ? _0x2ec24a.play() : _0x2ec24a.pause());
		});
	},
	'params2VideoOpt': function (_0x736352) {
		var _0x360305 = [];
		!_0x736352.rootPath && (_0x736352.rootPath = '');
		_0x736352.http && _0x360305.push({
			'src': _0x736352.http,
			'type': 'audio/mp3'
		});
		var _0x1e5446 = function (_0x2fd59d, _0x1e068c, _0x42d194) {
			var _0x834a06 = this;
			!_0x834a06.logCount && (_0x834a06.logCount = 0);
			videojs.xhr({
				'uri': _0x1e068c,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x57d26b, _0x4e5fa8) {
				_0x834a06.logCount++;
				if (_0x4e5fa8.statusCode == 200) {
					_0x834a06.logCount = 0;
					if (_0x4e5fa8.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x4e5fa8.body);
					d.isPassed && _0x42d194();
					return;
				}
				if (_0x834a06.logCount >= 4) {
					_0x834a06.logCount = 0;
					_0x2fd59d.pause();
					_0x4e5fa8.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x4e5fa8.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x5aa82e = function (_0x461594, _0x4f9202, _0x3cb2ba, _0x222625) {
			if (!_0x736352.reportUrl) {
				return;
			}
			if (_0x736352.isFiled == 1 || _0x736352.state == 1) {
				return;
			}
			var _0x4db84a = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x5d96e7 = (_0x736352.startTime || '0') + '_' + (_0x736352.endTime || _0x736352.duration), _0x3a0371 = 0, _0x1eb59d;
			_0x3cb2ba.toString().indexOf('-') != -1 ? (_0x1eb59d = _0x3cb2ba.split('-'), _0x1eb59d.length == 2 && (_0x3a0371 = parseInt(_0x1eb59d[1]) * 1000)) : _0x3a0371 = _0x3cb2ba * 1000;
			if (_0x3a0371 == _0x736352.duration * 1000 && _0x4f9202 == 2) {
				return;
			}
			var _0x59f2d0 = Ext.String.format(_0x4db84a, _0x736352.clazzId, _0x736352.userid, _0x736352.jobid ? _0x736352.jobid : '', _0x736352.objectId, _0x3a0371, 'd_yHJ!$pdA~5', _0x736352.duration * 1000, _0x5d96e7), _0x555d53 = [
				_0x736352.reportUrl,
				'/',
				_0x736352.dtoken,
				'?clazzId=',
				_0x736352.clazzId,
				'&playingTime=',
				_0x3cb2ba,
				'&duration=',
				_0x736352.duration,
				'&clipTime=',
				_0x5d96e7,
				'&objectId=',
				_0x736352.objectId,
				'&otherInfo=',
				_0x736352.otherInfo,
				'&jobid=',
				_0x736352.jobid,
				'&userid=',
				_0x736352.userid,
				'&isdrag=',
				_0x4f9202,
				'&view=pc',
				'&enc=',
				md5(_0x59f2d0),
				'&rt=',
				_0x736352.rt,
				'&dtype=Audio',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x1e5446(_0x461594, _0x555d53, _0x222625);
		};
		return {
			'language': 'zh-CN',
			'controls': true,
			'preload': 'auto',
			'bigPlayButton': false,
			'sources': _0x360305,
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
				'audioNote': { 'title': _0x736352.filename },
				'studyControl': { 'enableSwitchWindow': 1 },
				'seekBarControl': {
					'headOffset': _0x736352.headOffset,
					'enableFastForward': _0x736352.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0x736352.control,
					'reportTimeInterval': _0x736352.reportTimeInterval,
					'sourcePlayer': 'audio',
					'sendLog': function (_0x9930bd, _0x3e84c5, _0x58fcdd) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x14381f = 0;
						switch (_0x3e84c5) {
							case 'playing':
								_0x14381f = 0;
								break;
							case 'drag':
								_0x14381f = 1;
								break;
							case 'play':
								_0x14381f = 3;
								break;
							case 'pause':
								_0x14381f = 2;
								break;
							case 'ended':
								_0x14381f = 4;
								break;
						}
						_0x5aa82e(_0x9930bd, _0x14381f, _0x58fcdd, function () {
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
	var _0x2257af = videojs.getPlugin('plugin'), _0x341d28 = videojs.extend(_0x2257af, {
		'constructor': function (_0x2f990d, _0x4880cf) {
			_0x2257af.call(this, _0x2f990d, _0x4880cf);
			Ext.create('ans.videojs.AudioNote', {
				'renderTo': _0x2f990d.el_,
				'html': _0x4880cf.title
			});
		}
	});
	videojs.registerPlugin('audioNote', _0x341d28);
}());