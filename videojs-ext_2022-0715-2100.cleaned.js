Ext.define('ananas.ServerHosts', {
	'alternateClassName': 'ServerHosts',
	'singleton': true,
	'constructor': function () {
		var _0x47d2c1 = this;
		_0x47d2c1.callParent(arguments);
		var _0xb7b80d = document.domain;
		try {
			_0x47d2c1.MASTER_HOST = location.protocol + '//' + top.location.host;
		} catch (_0x26666e) {
			_0x47d2c1.MASTER_HOST = location.protocol + '//' + location.host;
		}
		try {
			_0x47d2c1.PARENT_HOST = parent.location.host !== '' ? location.protocol + '//' + parent.location.host : _0x47d2c1.MASTER_HOST;
		} catch (_0x1f7733) {
			_0x47d2c1.PARENT_HOST = location.protocol + '//' + location.host;
		}
		_0x47d2c1.P_HOST = location.protocol + '//p.ananas.chaoxing.com';
		_0x47d2c1.s1_HOST = location.protocol + '//s1.ananas.chaoxing.com';
		_0x47d2c1.s2_HOST = location.protocol + '//s2.ananas.chaoxing.com';
		_0x47d2c1.CLOUD_HOST = 'http://cloud.ananas.' + _0xb7b80d;
		_0x47d2c1.NEW_CLOUD_HOST = location.protocol + '//pan-yz.chaoxing.com';
		_0x47d2c1.CS_HOST = location.protocol + '//cs.ananas.' + _0xb7b80d;
		_0x47d2c1.FANYA_HOST = 'http://course.fanya.' + _0xb7b80d;
		_0x47d2c1.PAN_HOST = 'http://pan.ananas.' + _0xb7b80d;
		_0x47d2c1.CXLIVE_HOST = 'http://cxlive.' + _0xb7b80d;
		_0x47d2c1.ERYA_TSK_HOST = 'http://erya.tsk.' + _0xb7b80d;
		_0x47d2c1.QUESTIONNAIRE_HOST = 'http://surveyapp.fy.' + _0xb7b80d;
		_0x47d2c1.FX_HOST = 'http://www.' + _0xb7b80d;
		_0x47d2c1.PHONE_ZT_HOST = 'https://special.rhky.com';
		_0x47d2c1.CHAOXING_CLASS_HOST = 'https://k.chaoxing.com';
		_0x47d2c1.LIVE_HOST = location.protocol + '//live.chaoxing.com';
		_0x47d2c1.APPCD_HOST = location.protocol + '//appcd.chaoxing.com';
		_0x47d2c1.ZHIBO_HOST = 'https://zhibo.chaoxing.com';
		_0x47d2c1.CXCLASSTASL_HOST = location.protocol + '//noteyd.chaoxing.com';
	}
});
(function (_0x22801a) {
	function _0x3e419c(_0x1a243f, _0x40fbfa) {
		var _0x3cf45d = (_0x1a243f & 65535) + (_0x40fbfa & 65535), _0x23311e = (_0x1a243f >> 16) + (_0x40fbfa >> 16) + (_0x3cf45d >> 16);
		return _0x23311e << 16 | _0x3cf45d & 65535;
	}
	function _0x411c21(_0x4e6f36, _0x3435ce) {
		return _0x4e6f36 << _0x3435ce | _0x4e6f36 >>> 32 - _0x3435ce;
	}
	function _0x3c0c94(_0x500fb3, _0x57bf7e, _0x230502, _0x48ae2b, _0x11076e, _0x2770b0) {
		return _0x3e419c(_0x411c21(_0x3e419c(_0x3e419c(_0x57bf7e, _0x500fb3), _0x3e419c(_0x48ae2b, _0x2770b0)), _0x11076e), _0x230502);
	}
	function _0x5515e6(_0x467148, _0x3cf94a, _0xd33a53, _0x4359ec, _0x18156e, _0x176144, _0x435e8b) {
		return _0x3c0c94(_0x3cf94a & _0xd33a53 | ~_0x3cf94a & _0x4359ec, _0x467148, _0x3cf94a, _0x18156e, _0x176144, _0x435e8b);
	}
	function _0x23874e(_0x12c3a9, _0xed9758, _0x2cd11e, _0x3ca2de, _0x567c0b, _0x4916ee, _0x2254c5) {
		return _0x3c0c94(_0xed9758 & _0x3ca2de | _0x2cd11e & ~_0x3ca2de, _0x12c3a9, _0xed9758, _0x567c0b, _0x4916ee, _0x2254c5);
	}
	function _0x3a4737(_0x4edfe6, _0x2bd5d4, _0x1d0814, _0x535f92, _0x3f848e, _0x51374d, _0x47ebc7) {
		return _0x3c0c94(_0x2bd5d4 ^ _0x1d0814 ^ _0x535f92, _0x4edfe6, _0x2bd5d4, _0x3f848e, _0x51374d, _0x47ebc7);
	}
	function _0x19f0af(_0xb2dc34, _0x404a62, _0x2434b5, _0x5168d9, _0x33e650, _0x167b23, _0x1b44a6) {
		return _0x3c0c94(_0x2434b5 ^ (_0x404a62 | ~_0x5168d9), _0xb2dc34, _0x404a62, _0x33e650, _0x167b23, _0x1b44a6);
	}
	function _0x388e90(_0x436084, _0x70240d) {
		_0x436084[_0x70240d >> 5] |= 128 << _0x70240d % 32;
		_0x436084[(_0x70240d + 64 >>> 9 << 4) + 14] = _0x70240d;
		var _0x59bf6a, _0x5de874, _0x24dfb7, _0x2ed4af, _0x57e56e, _0x53150e = 1732584193, _0x4d521b = -271733879, _0x2d7d31 = -1732584194, _0x39c61f = 271733878;
		for (_0x59bf6a = 0; _0x59bf6a < _0x436084.length; _0x59bf6a += 16) {
			_0x5de874 = _0x53150e;
			_0x24dfb7 = _0x4d521b;
			_0x2ed4af = _0x2d7d31;
			_0x57e56e = _0x39c61f;
			_0x53150e = _0x5515e6(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a], 7, -680876936);
			_0x39c61f = _0x5515e6(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a + 1], 12, -389564586);
			_0x2d7d31 = _0x5515e6(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 2], 17, 606105819);
			_0x4d521b = _0x5515e6(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a + 3], 22, -1044525330);
			_0x53150e = _0x5515e6(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a + 4], 7, -176418897);
			_0x39c61f = _0x5515e6(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a + 5], 12, 1200080426);
			_0x2d7d31 = _0x5515e6(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 6], 17, -1473231341);
			_0x4d521b = _0x5515e6(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a + 7], 22, -45705983);
			_0x53150e = _0x5515e6(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a + 8], 7, 1770035416);
			_0x39c61f = _0x5515e6(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a + 9], 12, -1958414417);
			_0x2d7d31 = _0x5515e6(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 10], 17, -42063);
			_0x4d521b = _0x5515e6(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a + 11], 22, -1990404162);
			_0x53150e = _0x5515e6(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a + 12], 7, 1804603682);
			_0x39c61f = _0x5515e6(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a + 13], 12, -40341101);
			_0x2d7d31 = _0x5515e6(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 14], 17, -1502002290);
			_0x4d521b = _0x5515e6(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a + 15], 22, 1236535329);
			_0x53150e = _0x23874e(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a + 1], 5, -165796510);
			_0x39c61f = _0x23874e(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a + 6], 9, -1069501632);
			_0x2d7d31 = _0x23874e(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 11], 14, 643717713);
			_0x4d521b = _0x23874e(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a], 20, -373897302);
			_0x53150e = _0x23874e(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a + 5], 5, -701558691);
			_0x39c61f = _0x23874e(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a + 10], 9, 38016083);
			_0x2d7d31 = _0x23874e(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 15], 14, -660478335);
			_0x4d521b = _0x23874e(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a + 4], 20, -405537848);
			_0x53150e = _0x23874e(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a + 9], 5, 568446438);
			_0x39c61f = _0x23874e(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a + 14], 9, -1019803690);
			_0x2d7d31 = _0x23874e(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 3], 14, -187363961);
			_0x4d521b = _0x23874e(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a + 8], 20, 1163531501);
			_0x53150e = _0x23874e(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a + 13], 5, -1444681467);
			_0x39c61f = _0x23874e(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a + 2], 9, -51403784);
			_0x2d7d31 = _0x23874e(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 7], 14, 1735328473);
			_0x4d521b = _0x23874e(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a + 12], 20, -1926607734);
			_0x53150e = _0x3a4737(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a + 5], 4, -378558);
			_0x39c61f = _0x3a4737(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a + 8], 11, -2022574463);
			_0x2d7d31 = _0x3a4737(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 11], 16, 1839030562);
			_0x4d521b = _0x3a4737(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a + 14], 23, -35309556);
			_0x53150e = _0x3a4737(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a + 1], 4, -1530992060);
			_0x39c61f = _0x3a4737(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a + 4], 11, 1272893353);
			_0x2d7d31 = _0x3a4737(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 7], 16, -155497632);
			_0x4d521b = _0x3a4737(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a + 10], 23, -1094730640);
			_0x53150e = _0x3a4737(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a + 13], 4, 681279174);
			_0x39c61f = _0x3a4737(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a], 11, -358537222);
			_0x2d7d31 = _0x3a4737(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 3], 16, -722521979);
			_0x4d521b = _0x3a4737(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a + 6], 23, 76029189);
			_0x53150e = _0x3a4737(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a + 9], 4, -640364487);
			_0x39c61f = _0x3a4737(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a + 12], 11, -421815835);
			_0x2d7d31 = _0x3a4737(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 15], 16, 530742520);
			_0x4d521b = _0x3a4737(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a + 2], 23, -995338651);
			_0x53150e = _0x19f0af(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a], 6, -198630844);
			_0x39c61f = _0x19f0af(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a + 7], 10, 1126891415);
			_0x2d7d31 = _0x19f0af(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 14], 15, -1416354905);
			_0x4d521b = _0x19f0af(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a + 5], 21, -57434055);
			_0x53150e = _0x19f0af(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a + 12], 6, 1700485571);
			_0x39c61f = _0x19f0af(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a + 3], 10, -1894986606);
			_0x2d7d31 = _0x19f0af(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 10], 15, -1051523);
			_0x4d521b = _0x19f0af(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a + 1], 21, -2054922799);
			_0x53150e = _0x19f0af(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a + 8], 6, 1873313359);
			_0x39c61f = _0x19f0af(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a + 15], 10, -30611744);
			_0x2d7d31 = _0x19f0af(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 6], 15, -1560198380);
			_0x4d521b = _0x19f0af(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a + 13], 21, 1309151649);
			_0x53150e = _0x19f0af(_0x53150e, _0x4d521b, _0x2d7d31, _0x39c61f, _0x436084[_0x59bf6a + 4], 6, -145523070);
			_0x39c61f = _0x19f0af(_0x39c61f, _0x53150e, _0x4d521b, _0x2d7d31, _0x436084[_0x59bf6a + 11], 10, -1120210379);
			_0x2d7d31 = _0x19f0af(_0x2d7d31, _0x39c61f, _0x53150e, _0x4d521b, _0x436084[_0x59bf6a + 2], 15, 718787259);
			_0x4d521b = _0x19f0af(_0x4d521b, _0x2d7d31, _0x39c61f, _0x53150e, _0x436084[_0x59bf6a + 9], 21, -343485551);
			_0x53150e = _0x3e419c(_0x53150e, _0x5de874);
			_0x4d521b = _0x3e419c(_0x4d521b, _0x24dfb7);
			_0x2d7d31 = _0x3e419c(_0x2d7d31, _0x2ed4af);
			_0x39c61f = _0x3e419c(_0x39c61f, _0x57e56e);
		}
		return [
			_0x53150e,
			_0x4d521b,
			_0x2d7d31,
			_0x39c61f
		];
	}
	function _0x302bb6(_0x55ee64) {
		var _0x4ac36f, _0x1fa31e = '', _0x408024 = _0x55ee64.length * 32;
		for (_0x4ac36f = 0; _0x4ac36f < _0x408024; _0x4ac36f += 8) {
			_0x1fa31e += String.fromCharCode(_0x55ee64[_0x4ac36f >> 5] >>> _0x4ac36f % 32 & 255);
		}
		return _0x1fa31e;
	}
	function _0x2acd54(_0x1ef153) {
		var _0x514a4a, _0x19a421 = [];
		_0x19a421[(_0x1ef153.length >> 2) - 1] = undefined;
		for (_0x514a4a = 0; _0x514a4a < _0x19a421.length; _0x514a4a += 1) {
			_0x19a421[_0x514a4a] = 0;
		}
		var _0x273ac9 = _0x1ef153.length * 8;
		for (_0x514a4a = 0; _0x514a4a < _0x273ac9; _0x514a4a += 8) {
			_0x19a421[_0x514a4a >> 5] |= (_0x1ef153.charCodeAt(_0x514a4a / 8) & 255) << _0x514a4a % 32;
		}
		return _0x19a421;
	}
	function _0x47eb38(_0x4d3731) {
		return _0x302bb6(_0x388e90(_0x2acd54(_0x4d3731), _0x4d3731.length * 8));
	}
	function _0x6c3fa0(_0x2654d4, _0x26d852) {
		var _0x4349a0, _0x1991b0 = _0x2acd54(_0x2654d4), _0xd66bbb = [], _0x5e7c59 = [], _0x48ce73;
		_0xd66bbb[15] = _0x5e7c59[15] = undefined;
		_0x1991b0.length > 16 && (_0x1991b0 = _0x388e90(_0x1991b0, _0x2654d4.length * 8));
		for (_0x4349a0 = 0; _0x4349a0 < 16; _0x4349a0 += 1) {
			_0xd66bbb[_0x4349a0] = _0x1991b0[_0x4349a0] ^ 909522486;
			_0x5e7c59[_0x4349a0] = _0x1991b0[_0x4349a0] ^ 1549556828;
		}
		return _0x48ce73 = _0x388e90(_0xd66bbb.concat(_0x2acd54(_0x26d852)), 512 + _0x26d852.length * 8), _0x302bb6(_0x388e90(_0x5e7c59.concat(_0x48ce73), 640));
	}
	function _0x34711b(_0x3bca1f) {
		var _0x3e00b6 = '0123456789abcdef', _0x19cd0f = '', _0x56b8f3, _0x255252;
		for (_0x255252 = 0; _0x255252 < _0x3bca1f.length; _0x255252 += 1) {
			_0x56b8f3 = _0x3bca1f.charCodeAt(_0x255252);
			_0x19cd0f += _0x3e00b6.charAt(_0x56b8f3 >>> 4 & 15) + _0x3e00b6.charAt(_0x56b8f3 & 15);
		}
		return _0x19cd0f;
	}
	function _0x2988f4(_0x3e2ac5) {
		return unescape(encodeURIComponent(_0x3e2ac5));
	}
	function _0x356ada(_0x550ff0) {
		return _0x47eb38(_0x2988f4(_0x550ff0));
	}
	function _0xf38b1e(_0x499dc7) {
		return _0x34711b(_0x356ada(_0x499dc7));
	}
	function _0x3508ae(_0x596b45, _0x463220) {
		return _0x6c3fa0(_0x2988f4(_0x596b45), _0x2988f4(_0x463220));
	}
	function _0x4b5a7a(_0x187ac3, _0x4b1d42) {
		return _0x34711b(_0x3508ae(_0x187ac3, _0x4b1d42));
	}
	function _0x3b3d19(_0x59eba8, _0x469b59, _0xa05405) {
		if (!_0x469b59) {
			if (!_0xa05405) {
				return _0xf38b1e(_0x59eba8);
			}
			return _0x356ada(_0x59eba8);
		}
		if (!_0xa05405) {
			return _0x4b5a7a(_0x469b59, _0x59eba8);
		}
		return _0x3508ae(_0x469b59, _0x59eba8);
	}
	typeof define === 'function' && define.amd ? define(function () {
		return _0x3b3d19;
	}) : typeof module === 'object' && module.exports ? module.exports = _0x3b3d19 : _0x22801a.md5 = _0x3b3d19;
}(this));
Ext.apply(Ext, {
	'setCookie': function (_0x33ea05, _0x11a5e1) {
		var _0x3d37bb = arguments, _0x4d7689 = arguments.length, _0xcfd041 = _0x4d7689 > 2 ? _0x3d37bb[2] : null, _0x4dc37f = _0x4d7689 > 3 ? _0x3d37bb[3] : '/', _0x35ce10 = _0x4d7689 > 4 ? _0x3d37bb[4] : null, _0x22614a = _0x4d7689 > 5 ? _0x3d37bb[5] : false;
		document.cookie = _0x33ea05 + '=' + escape(_0x11a5e1) + (_0xcfd041 === null ? '' : '; expires=' + _0xcfd041.toGMTString()) + (_0x4dc37f === null ? '' : '; path=' + _0x4dc37f) + (_0x35ce10 === null ? '' : '; domain=' + _0x35ce10) + (_0x22614a === true ? '; secure' : '');
	},
	'getCookie': function (_0x4a5fad, _0x63fe56) {
		var _0x5d9497 = _0x4a5fad + '=', _0x295166 = _0x5d9497.length, _0x5edc06 = document.cookie.length, _0x103609 = 0, _0xcb965f = 0;
		while (_0x103609 < _0x5edc06) {
			_0xcb965f = _0x103609 + _0x295166;
			if (document.cookie.substring(_0x103609, _0xcb965f) == _0x5d9497) {
				return this.getCookieVal(_0xcb965f);
			}
			_0x103609 = document.cookie.indexOf(' ', _0x103609) + 1;
			if (_0x103609 === 0) {
				break;
			}
		}
		return _0x63fe56;
	},
	'getCookieVal': function (_0x4d93ed) {
		var _0x41f2bf = document.cookie.indexOf(';', _0x4d93ed);
		return _0x41f2bf == -1 && (_0x41f2bf = document.cookie.length), unescape(document.cookie.substring(_0x4d93ed, _0x41f2bf));
	}
});
Ext.define('ans.VideoJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x4ca6b6) {
		_0x4ca6b6 = _0x4ca6b6 || {};
		var _0x4a7ed4 = this;
		_0x4a7ed4.addEvents(['seekstart']);
		_0x4a7ed4.mixins.observable.constructor.call(_0x4a7ed4, _0x4ca6b6);
		var _0xf42238 = videojs(_0x4ca6b6.videojs, _0x4a7ed4.params2VideoOpt(_0x4ca6b6.params), function () {
		});
		Ext.fly(_0x4ca6b6.videojs).on('contextmenu', function (_0x4f9343) {
			_0x4f9343.preventDefault();
		});
		Ext.fly(_0x4ca6b6.videojs).on('keydown', function (_0x22a53e) {
			(_0x22a53e.keyCode == 32 || _0x22a53e.keyCode == 37 || _0x22a53e.keyCode == 39 || _0x22a53e.keyCode == 107) && _0x22a53e.preventDefault();
		});
		_0xf42238.videoJsResolutionSwitcher && _0xf42238.on('resolutionchange', function () {
			var _0x8de7bb = _0xf42238.currentResolution(), _0x1d19e0 = _0x8de7bb.sources ? _0x8de7bb.sources[0].res : false;
			Ext.setCookie('resolution', _0x1d19e0);
		});
		var _0x187109 = _0x4ca6b6.params && _0x4ca6b6.params.doublespeed ? 2 : 1;
		_0xf42238.on('ratechange', function () {
			var _0x10f1c2 = _0xf42238.playbackRate();
			if (_0x10f1c2 > _0x187109) {
				_0xf42238.pause();
				_0xf42238.playbackRate(1);
			}
		});
	},
	'params2VideoOpt': function (_0x5005a4) {
		var _0x2b66c1 = false, _0x18522a = [
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
		if (_0x5005a4.cdn) {
			try {
				top.window.app && top.window.app == 2 ? _0x18522a = _0x18522a.concat(_0x5005a4.cdn) : _0x18522a = _0x18522a.concat(_0x5005a4.cdn).sort(function (_0xbd91b4, _0x16a778) {
					return _0xbd91b4.indexorder - _0x16a778.indexorder;
				});
			} catch (_0x4a832c) {
				_0x18522a = _0x18522a.concat(_0x5005a4.cdn);
			}
		}
		function _0x1a7fdf(_0x114a30, _0x8e1b84, _0x5555a5) {
			return 'http://hls-ans.chaoxing.com/hls/m3u8/' + _0x114a30 + '/' + _0x8e1b84 + '.m3u8?cdn=' + encodeURIComponent(_0x5555a5);
		}
		function _0x33ac71(_0x27ca10, _0x44340b) {
			var _0x48ceeb = ServerHosts.s1_HOST.replace('http:/', '').replace('https:/', ''), _0x443447 = 0;
			_0x27ca10.src.indexOf(_0x48ceeb) > -1 && (_0x443447 = _0x27ca10.src.indexOf(_0x48ceeb) + _0x48ceeb.length);
			var _0x5b03da = _0x27ca10.src.substr(_0x443447);
			if (_0x44340b.ispublic && _0x443447 == 0) {
				return {
					'src': _0x5b03da,
					'type': 'video/mp4',
					'res': _0x27ca10.res
				};
			}
			return _0x44340b.ispublic ? _0x2b66c1 ? {
				'src': _0x1a7fdf(_0x5005a4.objectId, _0x27ca10.resolution, _0x44340b.url),
				'type': 'application/x-mpegURL',
				'res': _0x27ca10.res
			} : {
				'src': _0x44340b.url + _0x5b03da,
				'type': 'video/mp4',
				'res': _0x27ca10.res
			} : _0x2b66c1 ? {
				'src': _0x1a7fdf(_0x5005a4.objectId, _0x27ca10.resolution, _0x44340b.url + _0x48ceeb),
				'type': 'application/x-mpegURL',
				'res': _0x27ca10.res
			} : {
				'src': _0x44340b.url + _0x48ceeb + _0x5b03da,
				'type': 'video/mp4',
				'res': _0x27ca10.res
			};
		}
		var _0x468374 = [], _0x7fe52 = Ext.getCookie('resolution', 360);
		!_0x5005a4.rootPath && (_0x5005a4.rootPath = '');
		_0x5005a4.http && _0x468374.push({
			'src': _0x5005a4.http,
			'type': 'video/mp4',
			'label': '标清',
			'resolution': 'sd',
			'res': 360
		});
		_0x5005a4.httphd && _0x468374.push({
			'src': _0x5005a4.httphd,
			'type': 'video/mp4',
			'label': '高清',
			'resolution': 'hd',
			'res': 720
		});
		_0x5005a4.httpshd && _0x468374.push({
			'src': _0x5005a4.httpshd,
			'type': 'video/mp4',
			'label': '超高清',
			'resolution': 'shd',
			'res': 1080
		});
		_0x5005a4.httpmd && _0x468374.push({
			'src': _0x5005a4.httpmd,
			'type': 'video/mp4',
			'label': '极速',
			'resolution': 'md',
			'res': 240
		});
		if (_0x468374.length == 1) {
			var _0x275d4d = _0x468374[0];
			_0x275d4d.label = '高清';
		}
		var _0x458e84 = false;
		for (var _0x426228 = 0; _0x426228 < _0x468374.length; _0x426228++) {
			if (_0x468374[_0x426228].res == _0x7fe52) {
				_0x458e84 = true;
				break;
			}
		}
		!_0x458e84 && (_0x7fe52 = 360);
		var _0x258b95 = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid), _0x56ec59 = function (_0x511e0a, _0x113aec, _0x14c548) {
			try {
				if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && isUnFinishJob()) {
					return;
				}
				if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && isUnFinishJob()) {
					return;
				}
			} catch (_0x3bfd7a) {
				console.log(_0x3bfd7a);
			}
			if (_0x258b95) {
				return;
			}
			var _0x24d145 = this;
			!_0x24d145.logCount && (_0x24d145.logCount = 0);
			videojs.xhr({
				'uri': _0x113aec,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x21706b, _0x5b3178) {
				_0x24d145.logCount++;
				if (_0x5b3178.statusCode == 200) {
					_0x24d145.logCount = 0;
					if (_0x5b3178.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x5b3178.body);
					if (d.isPassed) {
						try {
							typeof d.hasJobLimit != 'undefined' && d.hasJobLimit === true && (top.allowNextVideo = false, top.hasJobLimit = true);
							typeof d.videoTimeLimit != 'undefined' && d.videoTimeLimit === true && (top.allowNextVideo = false, top.videoTimeLimit = true);
						} catch (_0x49a67a) {
							console.log(_0x49a67a);
						}
						_0x14c548();
					}
					return;
				}
				if (_0x24d145.logCount >= 4) {
					_0x24d145.logCount = 0;
					_0x511e0a.pause();
					if (_0x5b3178.statusCode != 0) {
						if (_0x5b3178.statusCode == 202 || _0x5b3178.statusCode == 302) {
							try {
								parent.location.reload();
							} catch (_0x391ff7) {
								console.log(_0x391ff7.message);
							}
						} else {
							alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x5b3178.statusCode + ')');
						}
					} else {
						alert('您的网络不稳定\uFF0C请您稍后继续...');
					}
				}
			});
		}, _0x57baa1 = function (_0x559ba0, _0xfd4d2b, _0x1bd520, _0x4296ec) {
			if (!_0x5005a4.reportUrl) {
				return;
			}
			if (_0x5005a4.isFiled == 1 || _0x5005a4.state == 1) {
				return;
			}
			var _0x91c471 = (_0x5005a4.startTime || '0') + '_' + (_0x5005a4.endTime || _0x5005a4.duration), _0x59eda4 = 0, _0x4428ad;
			_0x1bd520.toString().indexOf('-') != -1 ? (_0x4428ad = _0x1bd520.split('-'), _0x4428ad.length == 2 && (_0x59eda4 = parseInt(_0x4428ad[1]) * 1000)) : _0x59eda4 = _0x1bd520 * 1000;
			if (_0x59eda4 == _0x5005a4.duration * 1000 && _0xfd4d2b == 2) {
				return;
			}
			var _0x3c574b = Ext.String.format('[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x5005a4.clazzId, _0x5005a4.userid, _0x5005a4.jobid || '', _0x5005a4.objectId, _0x59eda4, 'd_yHJ!$pdA~5', _0x5005a4.duration * 1000, _0x91c471), _0x88ed3b = [
				_0x5005a4.reportUrl,
				'/',
				_0x5005a4.dtoken,
				'?clazzId=',
				_0x5005a4.clazzId,
				'&playingTime=',
				_0x1bd520,
				'&duration=',
				_0x5005a4.duration,
				'&clipTime=',
				_0x91c471,
				'&objectId=',
				_0x5005a4.objectId,
				'&otherInfo=',
				_0x5005a4.otherInfo,
				'&jobid=',
				_0x5005a4.jobid,
				'&userid=',
				_0x5005a4.userid,
				'&isdrag=',
				_0xfd4d2b,
				'&view=pc',
				'&enc=',
				md5(_0x3c574b),
				'&rt=',
				_0x5005a4.rt,
				'&dtype=Video',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x56ec59(_0x559ba0, _0x88ed3b, _0x4296ec);
		};
		return {
			'language': 'zh-CN',
			'poster': _0x5005a4.screenshot,
			'controls': true,
			'preload': 'none',
			'sources': _0x468374,
			'playlines': _0x18522a,
			'playbackRates': _0x5005a4.doublespeed != 0 ? [
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
					'default': _0x7fe52,
					'dynamicLabel': true,
					'customSourcePicker': function (_0x7ea48d, _0x213f4d, _0x131763) {
						var _0x1f5582 = _0x7ea48d.currentPlayline();
						return _0x7ea48d.src(_0x213f4d.map(function (_0x58fecc) {
							return _0x33ac71(_0x58fecc, _0x1f5582);
						})), _0x7ea48d;
					}
				},
				'videoJsPlayLine': {
					'dynamicLabel': true,
					'customSourcePicker': function (_0x259862, _0x20dd25, _0x35b8e1) {
						var _0x14c8df = _0x259862.currentResolution().sources[0];
						return _0x259862.src(_0x33ac71(_0x14c8df, _0x20dd25)), _0x259862;
					}
				},
				'studyControl': { 'enableSwitchWindow': _0x5005a4.enableSwitchWindow },
				'seekBarControl': {
					'headOffset': _0x5005a4.headOffset,
					'enableFastForward': _0x5005a4.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0x5005a4.control,
					'reportTimeInterval': _0x5005a4.reportTimeInterval,
					'isShowDanmu': _0x5005a4.danmaku,
					'chapterCapture': _0x5005a4.chapterCapture || 0,
					'captureInterval': _0x5005a4.captureInterval || 600,
					'chapterCollectionType': _0x5005a4.chapterCollectionType || 0,
					'startCapture': _0x5005a4.startCapture,
					'endCapture': _0x5005a4.endCapture,
					'playAginCapture': _0x5005a4.playAginCapture,
					'playingCapture': _0x5005a4.playingCapture,
					'playingLoopCapture': _0x5005a4.playingLoopCapture,
					'duration': _0x5005a4.duration,
					'isSupportFace': _0x5005a4.isSupportFace || false,
					'isShowFaceCollection': _0x5005a4.isShowFaceCollection,
					'jumpTimePointList': _0x5005a4.jumpTimePointList,
					'attachmentId': _0x5005a4.aId,
					'sendLog': function (_0x2d6902, _0x11c40d, _0x4d1dc0, _0x189586) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x3fe750 = 0;
						switch (_0x11c40d) {
							case 'playing':
								_0x3fe750 = 0;
								break;
							case 'drag':
								_0x3fe750 = 1;
								break;
							case 'play':
								_0x3fe750 = 3;
								break;
							case 'pause':
								_0x3fe750 = 2;
								break;
							case 'ended':
								_0x3fe750 = 4;
								break;
						}
						var _0x145b85 = this;
						_0x57baa1(_0x2d6902, _0x3fe750, _0x4d1dc0, function () {
							try {
								_0x3fe750 === 4 && typeof _0x189586 != 'undefined' && (_0x189586.sendDataLog('ended'), _0x189586.playNextVideo(_0x145b85.attachmentId));
							} catch (_0x53aef5) {
								console.log(_0x53aef5);
							}
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				'timelineObjects': {
					'url': _0x5005a4.rootPath + '/richvideo/initdatawithviewer?mid=' + _0x5005a4.mid + '&cpi=' + _0x5005a4.cpi + '&classid=' + _0x5005a4.clazzId,
					'quizErrorReportUrl': _0x5005a4.rootPath + '/question/addquestionerror?classid=' + _0x5005a4.clazzId + '&cpi=' + _0x5005a4.cpi,
					'validationUrl2': _0x5005a4.rootPath + '/question/quiz-validation?classid=' + _0x5005a4.clazzId + '&cpi=' + _0x5005a4.cpi + '&objectid=' + _0x5005a4.objectId,
					'quizRightCountUrl': _0x5005a4.rootPath + '/question/quiz-rightcount?classid=' + _0x5005a4.clazzId + '&cpi=' + _0x5005a4.cpi
				},
				'subtitle': {
					'translate': _0x5005a4.chapterVideoTranslate,
					'subtitleUrl': _0x5005a4.rootPath + '/richvideo/allsubtitle?mid=' + _0x5005a4.mid + '&objectid=' + _0x5005a4.objectId + '&courseid=' + _0x5005a4.courseid,
					'subtitle': _0x5005a4.rootPath + '/ananas/video-editor/sub?objectid=' + _0x5005a4.subobjectid
				},
				'marker': {
					'url': !_0x5005a4.isNotMark ? _0x5005a4.rootPath + '/ananas/getpoints?courseid=' + _0x5005a4.courseid + '&mid=' + _0x5005a4.mid : '',
					'ff': _0x5005a4.enableFastForward,
					'videoTopicCloud': _0x5005a4.videoTopicCloud
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
	var _0x406624 = videojs.getPlugin('plugin'), _0x479039 = videojs.extend(_0x406624, {
		'constructor': function (_0x5c8d77, _0x45be70) {
			_0x406624.call(this, _0x5c8d77, _0x45be70);
			var _0x2668f8 = this, _0x27d677 = _0x45be70.mouseElTarget, _0x26e568 = 1;
			_0x45be70.enableSwitchWindow !== 1 && (_0x26e568 = 0);
			if (!_0x27d677) {
				try {
					_0x27d677 = window.top ? window.top : window.document;
				} catch (_0x3c0a30) {
					_0x27d677 = window.parent ? window.parent : window.document;
				}
			}
			Ext.fly(_0x27d677).on('mouseout', function (_0x23da21) {
				_0x23da21 = _0x23da21 ? _0x23da21 : window.event;
				var _0x3ac8e5 = _0x23da21.relatedTarget || _0x23da21.toElement;
				!_0x3ac8e5 && (_0x26e568 != 1 && _0x5c8d77.pause());
			});
			_0x2668f8.singleton(_0x5c8d77);
		},
		'singleton': function (_0x7ae96b) {
			var _0x59cca9 = this, _0x26b26d = parseInt(Math.random() * 9999999);
			_0x7ae96b.on('play', function () {
				Ext.setCookie('videojs_id', _0x26b26d);
			});
			_0x7ae96b.setInterval(function () {
				var _0x9f8810 = Ext.getCookie('videojs_id');
				typeof _0x9f8810 != 'undefined' && _0x9f8810 != _0x26b26d && _0x7ae96b.pause();
			}, 1000);
		}
	});
	videojs.registerPlugin('studyControl', _0x479039);
}());
(function () {
	var _0x20f0b7 = videojs.getComponent('SeekBar'), _0x24883a = videojs.extend(_0x20f0b7, {
		'constructor': function (_0x245d4b, _0x428693) {
			_0x20f0b7.call(this, _0x245d4b, _0x428693);
			var _0xebfde7 = this;
			_0x245d4b.ignorePause = false;
			_0x245d4b.disableSeek = function (_0xd4db28) {
				_0xebfde7.disableSeek(_0xd4db28);
			};
			_0x245d4b.onlyBackward = function (_0x2aebfc) {
				_0xebfde7.onlyBackward(_0x2aebfc);
			};
			_0x245d4b.getSeekBar = function () {
				return _0xebfde7;
			};
			_0xebfde7.on('slideractive', function () {
				_0x245d4b.trigger('seekstart');
				_0x245d4b.ignorePause = true;
				_0x245d4b.ignorePlay = true;
				_0x245d4b.ignoreSeek = false;
			});
			_0xebfde7.on('sliderinactive', function () {
				_0x245d4b.trigger('seekend');
				_0x245d4b.ignoreSeek = false;
			});
			_0xebfde7.maxPercent = 0;
			_0x245d4b.on('timeupdate', function () {
				_0xebfde7.maxPercent = Math.max(_0xebfde7.getPercent(), _0xebfde7.maxPercent);
			});
		},
		'getCurrentTime_': function () {
			return this.player_.currentTime();
		},
		'getMaxPercent': function () {
			return this.maxPercent;
		},
		'isBackward': function (_0x5e4fe7) {
			return this.maxPercent > this.calculateDistance(_0x5e4fe7);
		},
		'handleMouseDown': function (_0x266a61) {
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x266a61)) {
					return;
				}
			}
			if (this['_disableSeek'] === true) {
				return;
			}
			_0x20f0b7.prototype.handleMouseDown.call(this, _0x266a61);
		},
		'handleMouseMove': function (_0x2de76f) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x2de76f)) {
					return;
				}
			}
			_0x20f0b7.prototype.handleMouseMove.call(this, _0x2de76f);
		},
		'handleMouseUp': function (_0x2185cf) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x2185cf)) {
					return;
				}
			}
			_0x20f0b7.prototype.handleMouseUp.call(this, _0x2185cf);
		},
		'disableSeek': function (_0x12893a) {
			var _0x31e622 = this;
			_0x31e622['_disableSeek'] = _0x12893a !== false;
			_0x31e622['_disableSeek'] ? _0x31e622.disable() : _0x31e622.enable();
		},
		'onlyBackward': function (_0x3513ff) {
			var _0x575880 = this;
			_0x575880['_onlyBackward'] = _0x3513ff !== false;
		}
	});
	videojs.registerComponent('SeekBar', _0x24883a);
}());
(function () {
	var _0x2833fb = videojs.getPlugin('plugin'), _0x339ce3 = videojs.extend(_0x2833fb, {
		'constructor': function (_0x5ce1ca, _0x2d9c48) {
			_0x2833fb.call(this, _0x5ce1ca, _0x2d9c48);
			var _0x3fdbcc = this;
			_0x3fdbcc.firstClick = true;
			_0x3fdbcc.isSendLog_ = !!_0x2d9c48.isSendLog;
			_0x3fdbcc.isShowDanmu_ = !!_0x2d9c48.isShowDanmu;
			_0x3fdbcc.damuLastGetTime = 0;
			_0x3fdbcc.firstPlay = true;
			_0x3fdbcc.firstPlayFace = true;
			_0x3fdbcc.pausePlayFace = false;
			_0x3fdbcc.playingFace = false;
			_0x3fdbcc.playingFaceTime = 0;
			_0x3fdbcc.chapterCapture = _0x2d9c48.chapterCapture || 0;
			_0x3fdbcc.captureInterval = _0x2d9c48.captureInterval * 60 || 600;
			_0x3fdbcc.chapterCollectionType = _0x2d9c48.chapterCollectionType || 0;
			_0x3fdbcc.isSupportFace = _0x2d9c48.isSupportFace;
			_0x3fdbcc.isAlertTip = false;
			_0x3fdbcc.startCapture = _0x2d9c48.startCapture;
			_0x3fdbcc.endCapture = _0x2d9c48.endCapture;
			_0x3fdbcc.playAginCapture = _0x2d9c48.playAginCapture;
			_0x3fdbcc.playingCapture = _0x2d9c48.playingCapture;
			_0x3fdbcc.playingLoopCapture = _0x2d9c48.playingLoopCapture;
			_0x3fdbcc.isShowFaceCollection = _0x2d9c48.isShowFaceCollection;
			_0x3fdbcc.duration = _0x2d9c48.duration;
			_0x3fdbcc.jumpTimePointList = _0x2d9c48.jumpTimePointList;
			_0x3fdbcc.loopCaptureInterval = Math.floor(Math.random() * (parseInt(_0x3fdbcc.duration) - 0) + 1);
			_0x3fdbcc.attachmentId = _0x2d9c48.attachmentId;
			_0x5ce1ca.on('ready', function () {
				_0x2d9c48.enableFastForward != 1 && _0x5ce1ca.disableSeek();
			});
			!_0x2d9c48.sendLog && (_0x2d9c48.sendLog = function () {
			});
			_0x2d9c48.headOffset && _0x5ce1ca.currentTime(_0x2d9c48.headOffset);
			var _0x2d8426 = 0, _0xe7849d = 0, _0x400a2f = _0x2d9c48.reportTimeInterval || 60, _0x5bd22f = _0x400a2f * 1000, _0x2e71f0 = function (_0x1efb56, _0x403467, _0x18e5b4) {
				if (!_0x3fdbcc.isSendLog_) {
					return;
				}
				var _0x2cb168 = _0x3fdbcc.now_() - _0x2d8426;
				(_0x2cb168 > _0x5bd22f || _0x403467 === true) && (typeof _0x18e5b4 != 'undefined' ? _0x2d9c48.sendLog(_0x5ce1ca, _0x1efb56, _0x18e5b4, _0x3fdbcc) : _0x2d9c48.sendLog(_0x5ce1ca, _0x1efb56, _0x3fdbcc.sec_(_0x5ce1ca), _0x3fdbcc), _0x2d8426 = _0x3fdbcc.now_());
			};
			_0x5ce1ca.on('play', function () {
				try {
					top.configFullScreen && reSizeVideoWindow();
				} catch (_0x133cc5) {
					console.log(_0x133cc5);
				}
				try {
					if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && _0x3fdbcc.firstClick && isUnFinishJob()) {
						_0x3fdbcc.firstClick = false;
						_0x5ce1ca.pause();
						checkJobCountLimit(_0x5ce1ca, 0);
						return;
					}
					if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && _0x3fdbcc.firstClick && isUnFinishJob()) {
						_0x3fdbcc.firstClick = false;
						_0x5ce1ca.pause();
						checkJobCountLimit(_0x5ce1ca, 1);
						return;
					}
				} catch (_0x32f505) {
					console.log(_0x32f505);
				}
				_0x3fdbcc.isAlertTip = false;
				if (_0x3fdbcc.chapterCapture == 0 || !_0x3fdbcc.isSupportFace || !_0x3fdbcc.isShowFaceCollection) {
					!_0x5ce1ca.ignorePlay ? (_0x2e71f0('play', true), _0x5ce1ca.ignoreSeek = true) : (_0x5ce1ca.ignorePlay = false, _0x5ce1ca.ignoreSeek = false);
					_0x3fdbcc.sendDataLog('play');
					_0x3fdbcc.receiveStudyLog();
					_0x3fdbcc.getDanmuList('play', _0x5ce1ca);
					_0x3fdbcc.firstPlay = false;
					_0x3fdbcc.pausePlayFace = true;
				} else {
					if (_0x3fdbcc.chapterCapture == 1) {
						if (_0x3fdbcc.firstPlay) {
							var _0x20e83d = _0x3fdbcc.sec_(_0x5ce1ca);
							if (_0x20e83d == 0 && (_0x3fdbcc.startCapture == 1 || typeof _0x3fdbcc.startCapture == 'undefined') && _0x3fdbcc.firstPlayFace) {
								_0x3fdbcc.playingFaceTime = _0x20e83d;
								_0x3fdbcc.playingFace = false;
								_0x3fdbcc.faceCollection('play', _0x5ce1ca, _0x3fdbcc.chapterCollectionType, 0);
								return;
							}
							!_0x5ce1ca.ignorePlay ? (_0x2e71f0('play', true), _0x5ce1ca.ignoreSeek = true) : (_0x5ce1ca.ignorePlay = false, _0x5ce1ca.ignoreSeek = false);
							_0x3fdbcc.sendDataLog('play');
							_0x3fdbcc.receiveStudyLog();
							_0x3fdbcc.getDanmuList('play', _0x5ce1ca);
							_0x3fdbcc.firstPlay = false;
							_0x3fdbcc.pausePlayFace = true;
						} else {
							if (_0x3fdbcc.playAginCapture == 1 && !_0x5ce1ca.ignorePlay && _0x3fdbcc.pausePlayFace) {
								_0x3fdbcc.playingFaceTime = _0x3fdbcc.sec_(_0x5ce1ca);
								_0x3fdbcc.playingFace = false;
								_0x3fdbcc.faceCollection('aginPlay', _0x5ce1ca, _0x3fdbcc.chapterCollectionType, -2);
								return;
							}
							_0x3fdbcc.pausePlayFace = true;
						}
					}
				}
			});
			_0x5ce1ca.on('seeked', function () {
				if (_0x2d9c48.enableFastForward != 1 && !_0x5ce1ca.switchStatus) {
					var _0x3003a8 = _0x5ce1ca.currentTime(), _0x20f501 = _0x2d9c48.headOffset ? _0x2d9c48.headOffset : 0;
					_0x3003a8 != 0 && _0x3003a8 > _0x20f501 && _0x5ce1ca.currentTime(_0x20f501);
				}
				!_0x5ce1ca.ignoreSeek ? _0x2e71f0('drag', true, _0xe7849d + '-' + _0x3fdbcc.sec_(_0x5ce1ca)) : _0x5ce1ca.ignoreSeek = false;
				_0xe7849d = _0x3fdbcc.sec_(_0x5ce1ca);
				_0x5ce1ca.ignorePlay = true;
				delete _0x5ce1ca.switchStatus;
			});
			_0x5ce1ca.on('pause', function () {
				!_0x5ce1ca.ignorePause ? (_0x2e71f0('pause', true), _0x5ce1ca.ignorePlay = false, _0x5ce1ca.ignoreSeek = false) : _0x5ce1ca.ignorePause = false;
				_0x3fdbcc.sendDataLog('pause');
				_0x3fdbcc.getDanmuList('pause', _0x5ce1ca);
			});
			_0x5ce1ca.on('timeupdate', function () {
				var _0x25be3b = _0x3fdbcc.sec_(_0x5ce1ca);
				_0x3fdbcc.isSupportFace && _0x3fdbcc.isShowFaceCollection && _0x3fdbcc.chapterCapture == 1 && _0x3fdbcc.playingCapture == 1 && _0x3fdbcc.playingFace && (_0x3fdbcc.playingFace = false, _0x3fdbcc.playingLoopCapture == 1 ? _0x25be3b == _0x3fdbcc.loopCaptureInterval && _0x3fdbcc.faceCollection('playing', _0x5ce1ca, _0x3fdbcc.chapterCollectionType, -1) : _0x25be3b >= _0x3fdbcc.captureInterval && _0x25be3b % _0x3fdbcc.captureInterval == 0 && _0x3fdbcc.faceCollection('playing', _0x5ce1ca, _0x3fdbcc.chapterCollectionType, _0x25be3b));
				!_0x3fdbcc.playingFace && _0x25be3b - _0x3fdbcc.playingFaceTime > 2 && (_0x3fdbcc.playingFace = true);
				if (typeof parent.videoTrialDuration != 'undefined' && parent.videoTrialDuration != '-1') {
					var _0x381e22 = parseInt(parent.videoTrialDuration) * 60;
					if (_0x381e22 < _0x3fdbcc.sec_(_0x5ce1ca) && !_0x3fdbcc.isAlertTip) {
						_0x5ce1ca.pause();
						alert('视频只允许试看' + parent.videoTrialDuration + '分钟');
						_0x3fdbcc.isAlertTip = true;
						return;
					}
				}
				parseInt(_0x5ce1ca.currentTime()) >= this.damuLastGetTime && _0x3fdbcc.getDanmuList('timeupdate', _0x5ce1ca);
				_0x3fdbcc.danmuDisplay(_0x5ce1ca);
				if (_0x2d8426 == 0) {
					return;
				}
				_0x3fdbcc.sec_(_0x5ce1ca) - _0xe7849d <= 1 && !_0x5ce1ca.ignorePlay && (_0xe7849d = _0x3fdbcc.sec_(_0x5ce1ca));
				_0x2e71f0('playing');
			});
			_0x5ce1ca.on('ended', function () {
				_0x3fdbcc.isShowFaceCollection && _0x3fdbcc.chapterCapture == 1 && _0x3fdbcc.endCapture == 1 && _0x3fdbcc.faceCollection('ended', _0x5ce1ca, _0x3fdbcc.chapterCollectionType, _0x3fdbcc.duration);
				_0x2e71f0('ended', true);
			});
		},
		'sec_': function (_0x572b14) {
			return parseInt(_0x572b14.currentTime());
		},
		'now_': function () {
			return new Date().getTime();
		},
		'isSendLog': function (_0x4e5fc0) {
			return _0x4e5fc0 && (this.isSendLog_ = !!_0x4e5fc0), this.isSendLog_;
		},
		'sendDataLog': function (_0x38eeee) {
			var _0x309f5a = _0x38eeee == 'pause' || _0x38eeee == 'end' ? 2 : 1;
			typeof sendReadZTMediaLog != 'undefined' && sendReadZTMediaLog(_0x309f5a);
		},
		'receiveStudyLog': function () {
			typeof receiveStudyLog != 'undefined' && setTimeout(function () {
				receiveStudyLog();
			}, 50);
		},
		'getDanmuList': function (_0x1467b0, _0x231e6f) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x1719f1 = this.sec_(_0x231e6f);
			if (_0x1467b0 == 'pause') {
				this.damuLastGetTime = 0;
				setTimeout(function () {
					getDanmuByTime(_0x1467b0, 0);
				}, 200);
				return;
			}
			typeof getDanmuByTime != 'undefined' && setTimeout(function () {
				getDanmuByTime(_0x1467b0, _0x1719f1);
			}, 200);
			if (_0x1719f1 < this.damuLastGetTime) {
				return;
			}
			this.damuLastGetTime = _0x1719f1 + 59;
		},
		'danmuDisplay': function (_0x5af16e) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0xcf29c6 = this.sec_(_0x5af16e);
			typeof danmuPlay != 'undefined' && danmuPlay(_0xcf29c6);
		},
		'timer': function (_0x369a7a) {
		},
		'faceCollection': function (_0x4d8414, _0x3c0691, _0x2d2561, _0x59820b) {
			if (_0x59820b != -2) {
				var _0x1982ff = this.jumpTimePointList;
				if (typeof _0x1982ff != 'undefined') {
					try {
						if (_0x1982ff.includes(_0x59820b)) {
							this.firstPlayFace = false;
							this.pausePlayFace = false;
							this.playingFace = false;
							return;
						}
					} catch (_0x285949) {
					}
				}
			}
			_0x4d8414 == 'play' ? typeof startFaceCollection != 'undefined' && (_0x3c0691.pause(), startFaceCollection(_0x3c0691, _0x2d2561, this, _0x59820b)) : _0x4d8414 == 'ended' ? typeof startFaceCollection != 'undefined' && (_0x3c0691.pause(), startFaceCollection(_0x3c0691, _0x2d2561, this, _0x59820b)) : _0x4d8414 == 'playing' ? (typeof startFaceCollection != 'undefined' && (_0x3c0691.pause(), this.playingFaceTime = this.sec_(_0x3c0691), startFaceCollection(_0x3c0691, _0x2d2561, this, _0x59820b), this.playingFace = false), this.pausePlayFace = false) : _0x4d8414 == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (_0x3c0691.pause(), startFaceCollection(_0x3c0691, _0x2d2561, this, _0x59820b)), this.pausePlayFace = false);
		},
		'playNextVideo': function (_0x1a1d3f) {
			if (typeof chapterPlayNextVideo != 'undefined') {
				if (typeof top.allowNextVideo != 'undefined' && top.allowNextVideo === false) {
					top.hasJobLimit === true ? top.showJobLimitTip() : top.showVideoTimeLimitTip();
					return;
				}
				chapterPlayNextVideo(_0x1a1d3f);
			}
		}
	});
	videojs.registerPlugin('seekBarControl', _0x339ce3);
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
		'<a class="tkParsing_dele" href="javascript:"></a>',
		'<div class="tkParsing_screll tkParsing_con" id="tkParsing_con"></div>',
		'</tpl>',
		'</div>',
		'</div>',
		{
			'getChecked': function (_0x43d972, _0x1c459d, _0x1f456e) {
				try {
					if (typeof _0x43d972 != 'undefined') {
						return _0x43d972.indexOf(_0x1c459d) != -1 && _0x1f456e == 'InteractiveQuiz' ? 'checked="checked"' : '';
					}
					return '';
				} catch (_0x4b5de7) {
					console.log(_0x4b5de7);
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
		var _0x2fbf4b = this, _0x5777a7 = _0x2fbf4b.renderData, _0x177d7c = _0x2fbf4b.quizRightCountUrl;
		typeof _0x177d7c != 'undefined' && Ext.Ajax.request({
			'url': _0x177d7c,
			'params': {
				'eventid': _0x5777a7.resourceId,
				'memberinfo': _0x5777a7.memberinfo
			},
			'method': 'get',
			'success': function (_0x133de1) {
				var _0x423a68 = Ext.decode(_0x133de1.responseText);
				_0x423a68.status && (Ext.get('rightNum').setHTML(_0x423a68.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
			}
		});
		_0x2fbf4b.callParent(arguments);
		var _0x44bcd1 = _0x2fbf4b.scrollEl, _0x25850a = $(_0x44bcd1.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#A5A5A5',
			'boxzoom': false,
			'autohidemode': false
		});
		_0x2fbf4b.scroller = _0x25850a;
		_0x2fbf4b.submitEl.on('click', function () {
			if (_0x2fbf4b.checkResult()) {
				if (Ext.get('videoquiz-continue').getStyle('display') == 'none') {
					try {
						top.configFullScreen && exitMediumSizeWindow();
					} catch (_0x41f40d) {
						console.log(_0x41f40d);
					}
					_0x2fbf4b.fireEvent('continue');
				}
			}
		});
		_0x2fbf4b.continueEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x2a578e) {
				console.log(_0x2a578e);
			}
			_0x2fbf4b.fireEvent('continue');
		});
		_0x2fbf4b.backEl && _0x2fbf4b.backEl.on('click', function () {
			_0x2fbf4b.onerror && _0x2fbf4b.onerror();
			_0x2fbf4b.fireEvent('continue');
		});
		_0x2fbf4b.viewAnalysisEl && _0x2fbf4b.viewAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'inline-block');
		});
		_0x2fbf4b.delAnalysisEl && _0x2fbf4b.delAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'none');
		});
	},
	'checkResult': function () {
		var _0x3899b1 = this, _0x36f406 = Ext.query('input', _0x3899b1.el.dom), _0x47c4a0 = true, _0x1a6247 = _0x3899b1.renderData, _0x2d73d6 = _0x1a6247.options, _0x3829f3 = [], _0x260ff3 = _0x3899b1.quizErrorReportUrl, _0x34b4b3 = _0x3899b1.validationUrl2, _0x15971e = _0x1a6247.dtype;
		Ext.each(_0x36f406, function (_0x2f98a2, _0x281e5f) {
			(_0x2f98a2.value == 'true' && !_0x2f98a2.checked || _0x2f98a2.value == 'false' && _0x2f98a2.checked) && (_0x47c4a0 = false);
			_0x2f98a2.checked && _0x3829f3.push(_0x2d73d6[_0x281e5f].name);
		});
		!_0x47c4a0 ? _0x1a6247.errorBackTime && _0x1a6247.errorBackTime > 0 ? (Ext.get('spanNotBack').setStyle('display', 'block'), Ext.get('videoquiz-submit').setStyle('display', 'none'), _0x15971e == 'InteractiveQuiz' ? Ext.get('knowledgeBack').setStyle('display', 'block') : Ext.get('videoquiz-continue').setStyle('display', 'block')) : _0x15971e == 'InteractiveQuiz' && _0x1a6247.errorBack == 1 && _0x1a6247.eBstartPoint != '' ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'block')) : Ext.get('spanNot').setStyle('display', 'block') : (Ext.get('spanHas').setStyle('display', 'block'), _0x15971e == 'InteractiveQuiz' && (Ext.get('videoquiz-continue').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'none'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('spanNot').setStyle('display', 'none'), Ext.get('spanNotBack').setStyle('display', 'none'), Ext.get('spanNotBackPoint').setStyle('display', 'none')));
		if (typeof _0x34b4b3 != 'undefined') {
			var _0x4600bd = _0x3829f3.join(',');
			Ext.Ajax.request({
				'url': _0x34b4b3,
				'params': {
					'eventid': _0x1a6247.resourceId,
					'isRight': _0x47c4a0,
					'memberinfo': _0x1a6247.memberinfo,
					'answerContent': _0x4600bd
				},
				'method': 'get',
				'success': function (_0x10793f) {
					_0x1a6247.answerContent = _0x4600bd;
					var _0x269263 = Ext.decode(_0x10793f.responseText);
					if (_0x269263.status) {
						if (_0x15971e == 'InteractiveQuiz') {
							Ext.get('rightNum').setHTML(_0x269263.rightAnswerCount);
							Ext.get('rightAnswerNum').setStyle('display', 'inline-block');
							var _0x5f5126 = '';
							_0x269263.showAnswer && _0x269263.showAnswer > 0 && (_0x5f5126 += '正确答案\uFF1A' + _0x269263.rightContent);
							if (_0x269263.showAnswer && _0x269263.showAnswer > 0 || _0x269263.isRight) {
								_0x269263.testAnalysis && (_0x5f5126 += '</br>解析\uFF1A' + _0x269263.testAnalysis);
								Ext.get('tkParsing_con').setHTML(_0x5f5126);
								Ext.get('tkParsing').setStyle('display', 'inline-block');
								Ext.get('viewAnalysis').setStyle('display', 'block');
								var _0x53bfb8 = _0x3899b1.tkParseScrollEl, _0x48c6cd = $(_0x53bfb8.dom).niceScroll({
									'cursorborder': '',
									'cursorwidth': 6,
									'cursorcolor': '#A5A5A5',
									'boxzoom': false,
									'autohidemode': true
								});
								_0x3899b1.tkParseScroll = _0x48c6cd;
							}
						}
						if (_0x269263.isRight && _0x15971e == 'InteractiveQuiz') {
							if (typeof _0x269263.showTip != 'undefined' && _0x269263.showTip) {
								var _0x47182e = _0x269263.percent;
								try {
									var _0x76f028 = Ext.getCookie('fid', 0);
									_0x47182e = parseInt(_0x47182e);
									_0x76f028 == '179952' && _0x47182e > 0 && (_0x47182e = 90 + _0x47182e * 0.1);
								} catch (_0x143f65) {
									console.log(_0x143f65);
								}
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01你的答题水准超过了' + _0x47182e + '%的同学</span></span>');
							} else {
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01</span></span>');
							}
						}
					}
				}
			});
			!_0x47c4a0 && _0x3899b1.onerror && _0x15971e != 'InteractiveQuiz' && _0x3899b1.onerror();
		} else {
			!_0x47c4a0 && (Ext.Ajax.request({
				'url': _0x260ff3,
				'params': {
					'eventid': _0x1a6247.resourceId,
					'memberinfo': _0x1a6247.memberinfo,
					'answerContent': _0x3829f3.join(',')
				},
				'method': 'get'
			}), _0x3899b1.onerror && _0x15971e != 'InteractiveQuiz' && _0x3899b1.onerror());
		}
		return !_0x47c4a0 && _0x1a6247.errorContinue == 1 && (_0x47c4a0 = true, Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('videoquiz-continue').setStyle('display', 'block')), _0x47c4a0;
	},
	'continueFun': function () {
		var _0x5b20ea = this;
		_0x5b20ea.fireEvent('continue');
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
		var _0x4096c3 = this;
		_0x4096c3.callParent(arguments);
		try {
			var _0x5707d3 = document.querySelector('.sp_video_img');
			_0x5707d3.addEventListener('load', function () {
				_0x5707d3.naturalWidth >= _0x5707d3.naturalHeight ? _0x5707d3.naturalWidth >= 400 && (_0x5707d3.style.width = '90%', _0x5707d3.style.height = '80%') : _0x5707d3.naturalHeight >= 400 && (_0x5707d3.style.height = '90%', _0x5707d3.style.width = '80%');
			});
		} catch (_0x14bbb0) {
			console.log(_0x14bbb0);
		}
		_0x4096c3.el.on('click', function () {
			_0x4096c3.fireEvent('continue');
		});
		_0x4096c3.closeEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x464dd5) {
				console.log(_0x464dd5);
			}
			_0x4096c3.fireEvent('continue');
		});
	}
});
Ext.define('ans.videojs.VideoAnnotation', {
	'extend': 'Ext.Component',
	'xtype': 'videoannotation',
	'cls': 'ans-videoannotation',
	'renderTpl': [
		'<div class="vidNota">',
		'<div class="vidNota_title"><h2 class="vidNota_h2">[批注]</h2><a class="vidNota_close" href="javascript:;"></a></div>',
		'<div class="vidNota_con" id="pizhuScroll" tabindex="1" style="overflow: hidden; outline: none;">',
		'<p>{description}</p>',
		'</div>',
		'</div>'
	],
	'renderSelectors': {
		'closeEl': 'a.vidNota_close',
		'contentEl': 'div.vidNota_con'
	},
	'afterRender': function () {
		var _0x2fcf04 = this, _0x6b356 = _0x2fcf04.contentEl;
		_0x2fcf04.callParent(arguments);
		_0x2fcf04.closeEl.on('click', function () {
			_0x2fcf04.fireEvent('continue');
		});
		var _0x9c08a6 = $(_0x6b356.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#e0e0e0',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x2fcf04.scroller = _0x9c08a6;
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
		'<div style="position:absolute;left:0;top:0;right:0;bottom:0;"></div>',
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
		var _0x28afec = this;
		_0x28afec.callParent(arguments);
		try {
			dragFn && dragFn('#sp_video_ppt_pic', '#video_html5_api');
		} catch (_0x3ad2a4) {
			console.log(_0x3ad2a4);
		}
		_0x28afec.sizeBigEl.on('click', function (_0x50b7ab) {
			_0x50b7ab.stopPropagation();
			_0x28afec.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			Ext.get('sp_size_big').setStyle('display', 'none');
			Ext.get('sp_size_small').setStyle('display', 'block');
			var _0xf5caca = Ext.get('video').getStyle('height'), _0x2e9e63 = Ext.get('sp_video_ppt_pic').getStyle('height'), _0x41d11f = (parseInt(_0xf5caca) - 60 - parseInt(_0x2e9e63)) / 2;
			Ext.get('sp_video_ppt_pic').setStyle('top', _0x41d11f + 'px');
			Ext.get('sp_video_ppt_pic').setStyle('left', '0');
		});
		_0x28afec.sizeSmallEl.on('click', function (_0x16c83d) {
			_0x16c83d.stopPropagation();
			_0x28afec.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			Ext.get('sp_size_big').setStyle('display', 'block');
			Ext.get('sp_size_small').setStyle('display', 'none');
			Ext.get('sp_video_ppt_pic').setStyle('top', '0px');
			Ext.get('sp_video_ppt_pic').setStyle('left', '0px');
		});
	}
});
Ext.define('ans.videojs.TimelineObjects', {
	'extend': 'Ext.container.Container',
	'cls': 'ans-timelineobjects',
	'autoScroll': true,
	'hidden': true,
	'hideMode': 'visibility',
	'constructor': function (_0x33f207) {
		var _0xb2f4f6 = this;
		_0xb2f4f6.callParent(arguments);
		_0xb2f4f6.bg = Ext.create('ans.videojs.TimelineObjectsBg', { 'renderTo': _0x33f207.renderTo });
		_0xb2f4f6.objects = _0x33f207.objects && _0x33f207.objects.sort ? _0xb2f4f6.sort_(_0x33f207.objects) : [];
		_0xb2f4f6.current = 0;
	},
	'showObject': function (_0x335055, _0x4e6551, _0x56b720) {
		var _0x578504 = this, _0xe8b664 = _0x578504.getBox(), _0x23b4d8 = _0x578504.items.getAt(0), _0x45120d, _0x5cef66 = function () {
			_0x45120d.destroy();
			_0x578504.hide();
			_0x335055.play();
		};
		_0x23b4d8 != null && _0x23b4d8.destroy();
		if (_0x4e6551 == 'IMG') {
			var _0x47eb2b = { 'src': _0x56b720.url.replace(/origin/, _0xe8b664.width + '_' + _0xe8b664.height) };
			_0x45120d = _0x578504.add({
				'xtype': 'videoimg',
				'renderData': _0x47eb2b
			});
		}
		if (_0x4e6551 == 'QUIZ') {
			var _0x4369b3 = function () {
			};
			if (_0x56b720.errorBackTime && _0x56b720.errorBackTime > 0) {
				var _0x5bf894 = _0x56b720.errorBackTime * 60;
				_0x4369b3 = function () {
					var _0x573f9c = Math.max(_0x335055.currentTime() - _0x5bf894, 0);
					_0x335055.switchStatus = true;
					_0x335055.currentTime(_0x573f9c);
				};
			}
			_0x45120d = _0x578504.add({
				'xtype': 'videoquiz',
				'renderData': _0x56b720,
				'quizErrorReportUrl': _0x578504.quizErrorReportUrl,
				'validationUrl2': _0x578504.validationUrl2,
				'onerror': _0x4369b3
			});
		}
		if (_0x4e6551 == 'InteractiveQuiz') {
			var _0x4369b3 = function () {
			};
			if (_0x56b720.errorBackTime && _0x56b720.errorBackTime > 0) {
				var _0x5bf894 = _0x56b720.errorBackTime * 60;
				_0x4369b3 = function () {
					var _0x28c1ce = Math.max(_0x335055.currentTime() - _0x5bf894, 0);
					_0x335055.switchStatus = true;
					_0x335055.currentTime(_0x28c1ce);
				};
			}
			if (_0x56b720.errorBack == 1 && _0x56b720.eBstartPoint != '') {
				var _0x5bf894 = 0, _0xf969b3 = _0x56b720.eBstartPoint.split(':'), _0x5531e3 = _0xf969b3.length;
				_0x5531e3 > 0 && (_0x5531e3 == 1 ? _0x5bf894 = parseInt(_0xf969b3[0]) * 60 : _0x5531e3 == 2 && (_0x5bf894 = parseInt(_0xf969b3[0]) * 60 + parseInt(_0xf969b3[1])));
				_0x4369b3 = function () {
					_0x335055.switchStatus = true;
					_0x335055.currentTime(_0x5bf894);
				};
			}
			_0x56b720.dtype = 'InteractiveQuiz';
			_0x45120d = _0x578504.add({
				'xtype': 'videoquiz',
				'renderData': _0x56b720,
				'quizErrorReportUrl': _0x578504.quizErrorReportUrl,
				'validationUrl2': _0x578504.validationUrl2,
				'quizRightCountUrl': _0x578504.quizRightCountUrl,
				'onerror': _0x4369b3
			});
		}
		if (_0x4e6551 == 'PPT') {
			if (_0x56b720.fp == 0) {
				return;
			}
			var _0x1c0396 = _0x56b720.url;
			_0x56b720.thumb ? _0x1c0396 = _0x56b720.thumb + _0x56b720.pageNo + '.png' : _0x1c0396 = _0x1c0396.replace(/swfv2\/.*$/, 'thumb/' + _0x56b720.fp + '.png');
			var _0x47eb2b = { 'src': _0x1c0396 };
			_0x45120d = _0x578504.add({
				'xtype': 'videoppt',
				'renderData': _0x47eb2b
			});
		}
		_0x4e6551 == 'SyncAnnotationEvent' && (_0x45120d = _0x578504.add({
			'xtype': 'videoannotation',
			'renderData': _0x56b720
		}));
		if (!_0x45120d) {
			return;
		}
		_0x45120d.on('continue', function () {
			_0x5cef66();
		});
		var _0x47f68a = !(_0x45120d.model === false);
		_0x578504.showModel(_0x47f68a);
		_0x47f68a && _0x335055.pause();
	},
	'showModel': function (_0x2390c2) {
		try {
			top.configFullScreen && mediumSizeWindow();
		} catch (_0x2a11e6) {
			console.log(_0x2a11e6);
		}
		var _0x1928b3 = this;
		_0x1928b3.show();
		_0x2390c2 ? (_0x1928b3.removeCls('ans-timelineobjects-autosize'), _0x1928b3.setAutoScroll(true), _0x1928b3.bg.show()) : (_0x1928b3.addCls('ans-timelineobjects-autosize'), _0x1928b3.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
		this.bg.hide.apply(this.bg, arguments);
	},
	'updateTime': function (_0x49eb59, _0x42ac59) {
		if (this.current >= this.objects.length || _0x49eb59.scrubbing()) {
			return;
		}
		var _0x9f6173 = this, _0x11f954 = _0x9f6173.objects[_0x9f6173.current], _0x503128 = _0x11f954.style, _0x3c1d55 = _0x11f954.datas[0];
		if (_0x42ac59 >= _0x3c1d55.startTime) {
			_0x9f6173.current++;
			setTimeout(function () {
				_0x9f6173.showObject(_0x49eb59, _0x503128, _0x3c1d55);
			}, 20);
		}
	},
	'resetTime': function (_0x303aab, _0x3a3348) {
		var _0x205d37 = this, _0x11463a;
		for (_0x11463a = 0; _0x11463a < _0x205d37.objects.length; _0x11463a++) {
			var _0x29300a = _0x205d37.objects[_0x11463a].datas[0].startTime;
			if (_0x3a3348 <= _0x29300a) {
				break;
			}
		}
		_0x205d37.current = _0x11463a;
	},
	'sort_': function (_0x2cfd75) {
		return _0x2cfd75 && _0x2cfd75.sort && _0x2cfd75.sort(function (_0xae4d81, _0x54d4d2) {
			var _0x573fbe = _0xae4d81.datas[0].startTime, _0x20e98d = _0x54d4d2.datas[0].startTime;
			return _0x573fbe - _0x20e98d;
		});
	}
});
(function () {
	var _0x1c13c1 = videojs.getPlugin('plugin'), _0x129098 = videojs.extend(_0x1c13c1, {
		'constructor': function (_0x5cf882, _0x3cf6b0) {
			_0x1c13c1.call(this, _0x5cf882, _0x3cf6b0);
			if (!_0x3cf6b0.url) {
				return;
			}
			var _0x5641ad = this;
			_0x5cf882.eventPoints = [];
			Ext.Ajax.request({
				'url': _0x3cf6b0.url,
				'async': false,
				'success': function (_0x12134b) {
					if (_0x12134b.status != 200) {
						return;
					}
					eval('var data=' + _0x12134b.responseText);
					if (data && data.length > 0) {
						var _0x1a4a9a = [];
						for (var _0x337344 = 0; _0x337344 < data.length; _0x337344++) {
							var _0x46c0ba = data[_0x337344];
							if (_0x46c0ba.style == 'InteractiveQuiz') {
								var _0x3f4cee = _0x46c0ba.datas;
								if (_0x3f4cee && _0x3f4cee.length > 0) {
									var _0x270985 = {
										'time': _0x3f4cee[0].startTime,
										'text': '互动测验'
									};
								}
								_0x1a4a9a.push(_0x270985);
							}
						}
						_0x5cf882.eventPoints = _0x1a4a9a;
					}
					var _0x299667 = Ext.create('ans.videojs.TimelineObjects', {
						'renderTo': _0x5cf882.el_,
						'quizErrorReportUrl': _0x3cf6b0.quizErrorReportUrl,
						'validationUrl2': _0x3cf6b0.validationUrl2,
						'quizRightCountUrl': _0x3cf6b0.quizRightCountUrl,
						'objects': data
					});
					_0x5cf882.on('play', function () {
						_0x299667.resetTime(_0x5cf882, _0x5cf882.currentTime());
					});
					_0x5cf882.on('seekend', function () {
						_0x299667.resetTime(_0x5cf882, _0x5cf882.currentTime());
					});
					_0x5cf882.on('timeupdate', function () {
						!_0x5cf882.paused() && _0x299667.updateTime(_0x5cf882, _0x5cf882.currentTime());
					});
				}
			});
		}
	});
	videojs.registerPlugin('timelineObjects', _0x129098);
}());
(function () {
	var _0x535da0 = videojs.getPlugin('plugin'), _0x56d691 = videojs.extend(_0x535da0, {
		'constructor': function (_0x2c1d6a, _0x5b9a89) {
			_0x535da0.call(this, _0x2c1d6a, _0x5b9a89);
			if (!_0x5b9a89.url) {
				return;
			}
			var _0xe72e98 = this;
			Ext.Ajax.request({
				'url': _0x5b9a89.url,
				'async': false,
				'success': function (_0x2a3f7c) {
					if (_0x2a3f7c.status != 200) {
						return;
					}
					eval('var data=' + _0x2a3f7c.responseText);
					if (!data.status) {
						return;
					}
					var _0x52fc15 = videojs('video');
					if (_0x52fc15 && typeof _0x52fc15.markers === 'function') {
						var _0x116798 = _0x2c1d6a.eventPoints;
						_0x116798.push.apply(_0x116798, data.list);
						_0x52fc15.markers({
							'markerTip': {
								'display': true,
								'text': function (_0x3c50d1) {
									return _0x3c50d1.text;
								}
							},
							'markers': _0x116798,
							'onMarkerClick': function (_0x2535b7) {
								if (_0x5b9a89.ff != 1) {
									return false;
								}
								var _0x454969 = $(this).data('marker-key');
								return _0x2c1d6a.currentTime(_0x2535b7.time), false;
							}
						});
					}
					if (data.list && data.list.length > 0) {
						var _0x4cd240 = [], _0x17d9f5 = {
							_0x3390cc: _0x29eeb3,
							_0x3390cc: _0x5c3c03
						};
						for (var _0x1a7b4d = 0; _0x1a7b4d < data.list.length; _0x1a7b4d++) {
							var _0x7c58cf = data.list[_0x1a7b4d], _0x3390cc = _0x7c58cf.text;
							if (!_0x17d9f5[_0x3390cc]) {
								var _0x29eeb3 = [];
								_0x29eeb3.push(_0x7c58cf);
								_0x4cd240.push(_0x3390cc);
							} else {
								var _0x5c3c03 = _0x17d9f5[_0x3390cc];
								_0x5c3c03.push(_0x7c58cf);
							}
						}
						function _0x2381ad(_0x3d3efd) {
							var _0x1b3af4 = '<div class="zsCloud_box"><h2 class="zsCloud_seltime">选择时间</h2><div class="zsCloud_div"><div class="zsCloud_div_list">';
							for (var _0x5869ec = 0; _0x5869ec < _0x3d3efd.length; _0x5869ec++) {
								var _0x2770a4 = _0x3d3efd[_0x5869ec], _0x651834 = Ext.fly(_0x183a30.elements[0]).select('.topicId' + _0x2770a4.topicid + ':not(.markertime)'), _0x157561 = videojs.formatTime(_0x2770a4.time);
								_0x651834 && _0x651834.elements[0] && _0x651834.elements[0].parentElement.remove();
								_0x1b3af4 += '<div class="zsCloud_item topicId' + _0x2770a4.topicid + '" data-marker-time="' + _0x2770a4.time + '" title="' + _0x157561 + '" onclick="markersPlayer(this)">' + _0x157561 + '</div>';
							}
							return _0x1b3af4 += '</div></div></div>', _0x1b3af4;
						}
						Ext.select('.zsCloud').setStyle('display', 'block');
						var _0x183a30 = Ext.select('.zsCloud_ul');
						if (_0x183a30 && _0x183a30.elements[0]) {
							var _0x808c9a;
							for (var _0x204993 = 0; _0x204993 < _0x4cd240.length; _0x204993++) {
								var _0x323178 = _0x4cd240[_0x204993], _0x2b5fee = _0x17d9f5[_0x323178], _0x159acd = '';
								if (_0x2b5fee) {
									if (_0x2b5fee.length == 1) {
										var _0x5bea14 = _0x2b5fee[0], _0x17fcd6 = Ext.fly(_0x183a30.elements[0]).select('.topicId' + _0x5bea14.topicid + ':not(.markertime)'), _0x10ed49 = videojs.formatTime(_0x5bea14.time);
										_0x17fcd6 && _0x17fcd6.elements[0] && _0x17fcd6.elements[0].parentElement.remove();
										_0x159acd = '<li><span class=\'topicId' + _0x5bea14.topicid + ' markertime\' data-marker-time=\'' + _0x5bea14.time + '\' title=\'' + _0x10ed49 + '\' onclick=\'markersPlayer(this)\'>' + _0x5bea14.text + '</span></li>';
									} else {
										_0x159acd = '<li class="zsCloud_select"><span class="zsCloud_span">' + _0x323178 + '</span>';
										_0x2b5fee && _0x2b5fee.length > 0 ? _0x159acd += _0x2381ad(_0x2b5fee) : _0x159acd += '</li>';
									}
								}
								_0x808c9a ? _0x808c9a = Ext.DomHelper.insertHtml('afterEnd', _0x808c9a.elements[0], _0x159acd) : _0x808c9a = Ext.DomHelper.insertHtml('afterBegin', _0x183a30.elements[0], _0x159acd);
								_0x808c9a = Ext.fly(_0x808c9a).select('');
							}
						}
						_0x5b9a89.videoTopicCloud && _0x5b9a89.videoTopicCloud == 1 && (Ext.select('.zsCloud_down').setStyle('display', 'block'), Ext.select('.zsCloud_body').setStyle('display', 'block'));
					}
					var _0x694e0a = new Map(), _0x32037e = new Array();
					if (data.list && data.list.length > 0) {
						for (var _0x1a7b4d = 0; _0x1a7b4d < data.list.length; _0x1a7b4d++) {
							var _0x3a3876 = data.list[_0x1a7b4d].topicid, _0x9b8d0b = _0x694e0a.get(_0x3a3876);
							!_0x9b8d0b && (_0x9b8d0b = {}, _0x9b8d0b.text = data.list[_0x1a7b4d].text, _0x9b8d0b.time = data.list[_0x1a7b4d].time, _0x9b8d0b.topicid = data.list[_0x1a7b4d].topicid, _0x9b8d0b.weight = 0, _0x9b8d0b.html = {
								'data-marker-time': data.list[_0x1a7b4d].time,
								'onclick': 'markersPlayer(this)'
							}, _0x694e0a.set(_0x3a3876, _0x9b8d0b), _0x32037e.push(_0x9b8d0b));
							_0x9b8d0b.weight += 1;
						}
					}
					$(function () {
						_0x32037e.length != 0 && $('#word_cloud').jQCloud(_0x32037e);
						function _0x1f36d2(_0x1cdc13) {
							$(_0x1cdc13).niceScroll({
								'cursorborder': '',
								'cursorwidth': 8,
								'cursorcolor': '#DADFE6',
								'boxzoom': false,
								'autohidemode': true
							});
							setInterval(function () {
								$(_0x1cdc13).getNiceScroll().resize();
							}, 300);
						}
						$('.zsCloud_box').each(function (_0x48adf9) {
							$(this).find('.zsCloud_div').attr('id', 'zsCloud_div_' + _0x48adf9);
							_0x1f36d2('#zsCloud_div_' + _0x48adf9);
						});
					});
					$('.zsCloud_down').click(function () {
						var _0x271242 = $('.zsCloud_body');
						_0x271242.is(':visible') ? (_0x271242.hide(), $(this).addClass('zsCloud_up'), $(this).text('展开')) : (_0x271242.show(), $(this).removeClass('zsCloud_up'), $(this).text('收起'));
					});
				}
			});
		}
	});
	videojs.registerPlugin('marker', _0x56d691);
}());
(function () {
	var _0x58f349 = videojs.getPlugin('plugin'), _0x5d2be9 = videojs.extend(_0x58f349, {
		'constructor': function (_0xa186b3, _0x5299bf) {
			_0x58f349.call(this, _0xa186b3, _0x5299bf);
			var _0x39885f = this, _0x18019e = _0x5299bf.subtitleUrl, _0x4933ec = function (_0x35ff0e) {
				var _0x6d5eed = _0x35ff0e.match(/support\/(\w+).\w+/);
				if (_0x6d5eed) {
					return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0x6d5eed[1];
				}
			}, _0x1291ea = function (_0x406168, _0x42063b, _0x3f91e8) {
				_0xa186b3.addRemoteTextTrack({
					'kind': 'subtitles',
					'srclang': 'cn',
					'label': _0x406168,
					'src': _0x42063b,
					'default': _0x3f91e8
				}, true);
			};
			_0xa186b3.ready(function () {
				_0x18019e && Ext.Ajax.request({
					'url': _0x18019e,
					'success': function (_0x3e63e8) {
						if (_0x3e63e8.status != 200) {
							return;
						}
						eval('var subs=' + _0x3e63e8.responseText);
						var _0x442513 = 0, _0x20ec03 = 0;
						subs.length > 0 && Ext.each(subs, function (_0x5cc4cf) {
							_0x5299bf.translate == 1 && _0x5cc4cf.name == 'English' ? (_0x5cc4cf.selected = true, _0x20ec03 = _0x442513) : _0x5cc4cf.selected = false;
							_0x1291ea(_0x5cc4cf.name, _0x4933ec(_0x5cc4cf.url), _0x5cc4cf.selected);
							_0x442513++;
						});
						if (_0x5299bf.translate == 1) {
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').setHTML('翻译');
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').addCls('vjs-hide-content');
						}
						setTimeout(function () {
							var _0x58daa3 = _0xa186b3.textTracks();
							_0x5299bf.translate == 1 ? _0x58daa3 && _0x58daa3[_0x20ec03] ? _0x58daa3[_0x20ec03].mode = 'showing' : _0x58daa3 && _0x58daa3[0] && (_0x58daa3[0].mode = 'showing') : _0x58daa3 && _0x58daa3[0] && (_0x58daa3[0].mode = 'showing');
						}, 500);
					}
				});
				var _0x1c15e0 = _0xa186b3.textTrackSettings;
				_0x1c15e0.setValues({
					'backgroundColor': '#000',
					'backgroundOpacity': '0',
					'edgeStyle': 'uniform'
				});
				_0x1c15e0.updateDisplay();
			});
		}
	});
	videojs.registerPlugin('subtitle', _0x5d2be9);
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
		var _0x138e9c = this;
		_0x138e9c.callParent(arguments);
		var _0x3d6a3f = Ext.query('input', _0x138e9c.el.dom);
		Ext.each(_0x3d6a3f, function (_0x130677, _0x1566dc) {
			Ext.fly(_0x130677).on('click', function () {
				_0x138e9c.onSelected(_0x1566dc);
			});
		});
		try {
			typeof createVideoTask === 'function' ? createVideoTask() : console.log('createVideoTask函数不存在\uFF01');
		} catch (_0x428e21) {
		}
	},
	'setErrorMsg': function (_0x3871c0) {
		Ext.fly(this.errorMsgEl).setHTML(_0x3871c0);
	}
});
Ext.define('ans.videojs.ErrorNote', {
	'extend': 'Ext.Component',
	'cls': 'ans-vjserrdisplay',
	'renderTpl': ['<div class="ans-vjserrdisplay-title">播放出现异常\u3002</div>']
});
(function () {
	var _0x26338f = videojs.getComponent('ErrorDisplay'), _0x3429ab = videojs.extend(_0x26338f, {
		'constructor': function (_0x28ff92, _0x3d1a54) {
			_0x26338f.call(this, _0x28ff92, _0x3d1a54);
		},
		'colse': function () {
			_0x26338f.prototype.colse.call(this);
			me.ansErrorDisplay && (me.ansErrorDisplay.destroy(), me.ansErrorDisplay = null);
		},
		'fill': function () {
			_0x26338f.prototype.fill.call(this);
			var _0x16f64a = this, _0x220ca7 = _0x16f64a.player_, _0x5b1d02 = _0x220ca7.options_.playlines, _0x41127e = Ext.query('.vjs-modal-dialog-content', _0x16f64a.el_)[0];
			_0x16f64a.ansErrorDisplay && (_0x16f64a.ansErrorDisplay.destroy(), delete _0x16f64a.ansErrorDisplay);
			if (!_0x220ca7.selectCDN || !_0x5b1d02) {
				_0x16f64a.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', { 'renderTo': _0x16f64a.el_ });
				return;
			}
			var _0x23e42e = _0x220ca7.currentPlayline(), _0x436bec = 0;
			Ext.each(_0x5b1d02, function (_0x1875fd, _0x1f4595) {
				_0x23e42e == _0x1875fd && (_0x436bec = _0x1f4595);
			});
			_0x16f64a.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
				'renderTo': _0x16f64a.el_,
				'onSelected': function (_0xdba0b4) {
					_0x220ca7.selectCDN(_0xdba0b4);
					_0x16f64a.close();
				},
				'renderData': {
					'playlines': _0x5b1d02,
					'errorMsg': _0x16f64a.content(),
					'selectedIndex': _0x436bec
				}
			});
		}
	});
	videojs.registerComponent('ErrorDisplay', _0x3429ab);
}());
(function () {
	var _0x229663 = null;
	typeof window.videojs === 'undefined' && typeof require === 'function' ? _0x229663 = require('video.js') : _0x229663 = window.videojs;
	(function (_0x2bb434, _0x7e0d84) {
		var _0x404ca5 = {}, _0x401ec9, _0x1c7ff6 = {}, _0x4a5771 = {};
		function _0x3d6b9d(_0x3a35f9, _0x1703d0, _0x439a12, _0x1104be) {
			_0x1c7ff6 = {
				'label': _0x439a12,
				'sources': _0x1703d0
			};
			if (typeof _0x1104be === 'function') {
				return _0x1104be(_0x3a35f9, _0x1703d0, _0x439a12);
			}
			return _0x3a35f9.src(_0x1703d0.map(function (_0x3ccf4c) {
				return {
					'src': _0x3ccf4c.src,
					'type': _0x3ccf4c.type,
					'res': _0x3ccf4c.res
				};
			})), _0x3a35f9;
		}
		var _0x4a3e2c = _0x7e0d84.getComponent('MenuItem'), _0x1b27d9 = _0x7e0d84.extend(_0x4a3e2c, {
			'constructor': function (_0x337eb0, _0x2fb303, _0x1cb7be, _0x230fc4) {
				this.onClickListener = _0x1cb7be;
				this.label = _0x230fc4;
				_0x4a3e2c.call(this, _0x337eb0, _0x2fb303);
				this.src = _0x2fb303.src;
				this.on('click', this.onClick);
				this.on('touchstart', this.onClick);
				_0x2fb303.initialySelected && (this.showAsLabel(), this.selected(true), this.addClass('vjs-selected'));
			},
			'showAsLabel': function () {
				this.label && (this.label.innerHTML = this.options_.label);
			},
			'onClick': function (_0x3bc52a) {
				this.onClickListener(this);
				var _0x36f968 = this.player_.currentTime(), _0x53a860 = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x53a860 && this.player_.bigPlayButton.hide();
				typeof _0x3bc52a !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x3bc52a = this.options_.customSourcePicker);
				var _0x2ed2d3 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x2ed2d3 = 'timeupdate');
				_0x3d6b9d(this.player_, this.src, this.options_.label, _0x3bc52a).one(_0x2ed2d3, function () {
					var _0x44a1e0 = this.player_;
					_0x44a1e0.switchStatus = true;
					_0x44a1e0.currentTime(_0x36f968);
					!_0x53a860 && _0x44a1e0.play();
					_0x44a1e0.trigger('resolutionchange');
				});
			}
		});
		_0x7e0d84.registerComponent('ResolutionMenuItem', _0x1b27d9);
		var _0x4de54e = _0x7e0d84.getComponent('MenuButton'), _0x32ac24 = _0x7e0d84.extend(_0x4de54e, {
			'constructor': function (_0x1aa47f, _0x44141a, _0x331830, _0x577807) {
				this.sources = _0x44141a.sources;
				this.label = _0x577807;
				this.label.innerHTML = _0x44141a.initialySelectedLabel;
				_0x4de54e.call(this, _0x1aa47f, _0x44141a, _0x331830);
				this.controlText('Quality');
				if (_0x331830.dynamicLabel) {
					this.el().appendChild(_0x577807);
				} else {
					var _0x152132 = document.createElement('span');
					_0x7e0d84.dom.addClass(_0x152132, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x152132);
				}
			},
			'createItems': function () {
				var _0x32cf07 = [], _0xaace77 = this.sources && this.sources.label || {}, _0x3f383d = function (_0x4fb500) {
					_0x32cf07.map(function (_0xe7b131) {
						_0xe7b131.selected(_0xe7b131 === _0x4fb500);
						_0xe7b131.removeClass('vjs-selected');
					});
				};
				for (var _0xbceef in _0xaace77) {
					_0xaace77.hasOwnProperty(_0xbceef) && (_0x32cf07.push(new _0x1b27d9(this.player_, {
						'label': _0xbceef,
						'src': _0xaace77[_0xbceef],
						'initialySelected': _0xbceef === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x3f383d, this.label)), _0x4a5771[_0xbceef] = _0x32cf07[_0x32cf07.length - 1]);
				}
				return _0x32cf07;
			}
		});
		_0x401ec9 = function (_0x6e4eb8) {
			var _0x1d903f = _0x7e0d84.mergeOptions(_0x404ca5, _0x6e4eb8), _0x2e454e = this, _0x7c7143 = document.createElement('span'), _0x54e4aa = {};
			_0x7e0d84.dom.addClass(_0x7c7143, 'vjs-resolution-button-label');
			_0x2e454e.updateSrc = function (_0x4ffb92) {
				if (!_0x4ffb92) {
					return _0x2e454e.src();
				}
				_0x2e454e.controlBar.resolutionSwitcher && (_0x2e454e.controlBar.resolutionSwitcher.dispose(), delete _0x2e454e.controlBar.resolutionSwitcher);
				_0x4ffb92 = _0x4ffb92.sort(_0x2526c4);
				_0x54e4aa = _0x5f4c77(_0x4ffb92);
				var _0x4a8826 = _0x3201a5(_0x54e4aa, _0x4ffb92), _0x5a86dc = new _0x32ac24(_0x2e454e, {
					'sources': _0x54e4aa,
					'initialySelectedLabel': _0x4a8826.label,
					'initialySelectedRes': _0x4a8826.res,
					'customSourcePicker': _0x1d903f.customSourcePicker
				}, _0x1d903f, _0x7c7143);
				return _0x7e0d84.dom.addClass(_0x5a86dc.el(), 'vjs-resolution-button'), _0x2e454e.controlBar.resolutionSwitcher = _0x2e454e.controlBar.el_.insertBefore(_0x5a86dc.el_, _0x2e454e.controlBar.getChild('fullscreenToggle').el_), _0x2e454e.controlBar.resolutionSwitcher.dispose = function () {
					this.parentNode.removeChild(this);
				}, _0x3d6b9d(_0x2e454e, _0x4a8826.sources, _0x4a8826.label, _0x1d903f.customSourcePicker);
			};
			_0x2e454e.currentResolution = function (_0x56f77d, _0x15786a) {
				if (_0x56f77d == null) {
					return _0x1c7ff6;
				}
				return _0x4a5771[_0x56f77d] != null && _0x4a5771[_0x56f77d].onClick(_0x15786a), _0x2e454e;
			};
			_0x2e454e.getGroupedSrc = function () {
				return _0x54e4aa;
			};
			function _0x2526c4(_0x3b2664, _0x2f5fbb) {
				if (!_0x3b2664.res || !_0x2f5fbb.res) {
					return 0;
				}
				return +_0x2f5fbb.res - +_0x3b2664.res;
			}
			function _0x5f4c77(_0x30d594) {
				var _0x5a15cc = {
					'label': {},
					'res': {},
					'type': {}
				};
				return _0x30d594.map(function (_0x5ea72a) {
					_0x39fea9(_0x5a15cc, 'label', _0x5ea72a);
					_0x39fea9(_0x5a15cc, 'res', _0x5ea72a);
					_0x39fea9(_0x5a15cc, 'type', _0x5ea72a);
					_0x2549fe(_0x5a15cc, 'label', _0x5ea72a);
					_0x2549fe(_0x5a15cc, 'res', _0x5ea72a);
					_0x2549fe(_0x5a15cc, 'type', _0x5ea72a);
				}), _0x5a15cc;
			}
			function _0x39fea9(_0x2023a5, _0x11b5cd, _0x2d4976) {
				_0x2023a5[_0x11b5cd][_0x2d4976[_0x11b5cd]] == null && (_0x2023a5[_0x11b5cd][_0x2d4976[_0x11b5cd]] = []);
			}
			function _0x2549fe(_0x10e5c2, _0x56628d, _0x4f1340) {
				_0x10e5c2[_0x56628d][_0x4f1340[_0x56628d]].push(_0x4f1340);
			}
			function _0x3201a5(_0x58cdd0, _0x134b44) {
				var _0x243ef8 = _0x1d903f.default, _0x3a41cc = '';
				return _0x243ef8 === 'high' ? (_0x243ef8 = _0x134b44[0].res, _0x3a41cc = _0x134b44[0].label) : _0x243ef8 === 'low' || _0x243ef8 == null || !_0x58cdd0.res[_0x243ef8] ? (_0x243ef8 = _0x134b44[_0x134b44.length - 1].res, _0x3a41cc = _0x134b44[_0x134b44.length - 1].label) : _0x58cdd0.res[_0x243ef8] && (_0x3a41cc = _0x58cdd0.res[_0x243ef8][0].label), {
					'res': _0x243ef8,
					'label': _0x3a41cc,
					'sources': _0x58cdd0.res[_0x243ef8]
				};
			}
			_0x2e454e.ready(function () {
				_0x2e454e.options_.sources.length > 0 && _0x2e454e.setTimeout(function () {
					_0x2e454e.updateSrc(_0x2e454e.options_.sources);
				}, 1);
			});
		};
		_0x7e0d84.registerPlugin('videoJsResolutionSwitcher', _0x401ec9);
	}(window, _0x229663));
}());
(function () {
	(function (_0x53003a, _0xf9afe2) {
		var _0x4e7c10 = {}, _0x45b430, _0x516113 = {}, _0xa3f96 = { _0x3f902f: _0x546a4d[_0x546a4d.length - 1] };
		function _0x5a2cd4(_0x166ebd, _0x35d250, _0x57ce8b, _0x30b286) {
			_0x516113 = _0x35d250;
			if (typeof _0x30b286 === 'function') {
				return _0x30b286(_0x166ebd, _0x35d250, _0x57ce8b);
			}
			return _0x166ebd;
		}
		var _0x47422d = _0xf9afe2.getComponent('ResolutionMenuItem'), _0x553b87 = _0xf9afe2.extend(_0x47422d, {
			'onClick': function (_0x28ab8b) {
				this.onClickListener(this);
				var _0x38da7c = this.player_.currentTime(), _0x2e32d6 = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x2e32d6 && this.player_.bigPlayButton.hide();
				typeof _0x28ab8b !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x28ab8b = this.options_.customSourcePicker);
				var _0x307a25 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x307a25 = 'timeupdate');
				var _0x442f52 = _0x5a2cd4(this.player_, this.src, this.options_.label, _0x28ab8b);
				_0x442f52 && _0x442f52.one(_0x307a25, function () {
					_0x442f52.switchStatus = true;
					_0x442f52.currentTime(_0x38da7c);
					!_0x2e32d6 && _0x442f52.play();
					_0x442f52.trigger('playlinechange');
				});
			}
		}), _0x5e6329 = _0xf9afe2.getComponent('MenuButton'), _0x475d2c = _0xf9afe2.extend(_0x5e6329, {
			'constructor': function (_0x49e805, _0x2dcf8a, _0x10b064, _0x26edae) {
				this.playlines = _0x2dcf8a.playlines;
				this.label = _0x26edae;
				this.label.innerHTML = _0x2dcf8a.initialySelectedLabel;
				_0x5e6329.call(this, _0x49e805, _0x2dcf8a, _0x10b064);
				this.controlText('Playline');
				if (_0x10b064.dynamicLabel) {
					this.el().appendChild(_0x26edae);
				} else {
					var _0x1d99d4 = document.createElement('span');
					_0xf9afe2.addClass(_0x1d99d4, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x1d99d4);
				}
			},
			'createItems': function () {
				var _0x546a4d = [], _0xc4c099 = this.playlines || [], _0x497850 = function (_0x17d7ae) {
					_0x546a4d.map(function (_0x1a2536) {
						_0x1a2536.selected(_0x1a2536 === _0x17d7ae);
						_0x1a2536.removeClass('vjs-selected');
					});
				};
				for (var _0x65329c = 0; _0x65329c < _0xc4c099.length; _0x65329c++) {
					var _0x3f902f = _0xc4c099[_0x65329c].label;
					_0x546a4d.push(new _0x553b87(this.player_, {
						'label': _0x3f902f,
						'src': _0xc4c099[_0x65329c],
						'initialySelected': _0x3f902f === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x497850, this.label));
				}
				return _0x546a4d;
			}
		});
		_0x45b430 = function (_0x5226e7) {
			var _0x403eb1 = _0xf9afe2.mergeOptions(_0x4e7c10, _0x5226e7), _0x421325 = this, _0x40b7c9 = document.createElement('span'), _0x163e00 = _0x421325.options_.playlines;
			_0xf9afe2.dom.addClass(_0x40b7c9, 'vjs-resolution-button-label');
			var _0x2d675c = new _0x475d2c(_0x421325, {
				'playlines': _0x163e00,
				'initialySelectedLabel': _0x163e00[0].label,
				'initialySelectedUrl': _0x163e00[0].url,
				'customSourcePicker': _0x403eb1.customSourcePicker
			}, _0x403eb1, _0x40b7c9);
			_0xf9afe2.dom.addClass(_0x2d675c.el(), 'vjs-resolution-button');
			_0xf9afe2.dom.addClass(_0x2d675c.el(), 'vjs-playline-button');
			_0x2d675c.show();
			_0x421325.selectCDN = function (_0xc88d88) {
				_0x2d675c.items[_0xc88d88].onClick(_0x403eb1.customSourcePicker);
				_0x421325.play();
			};
			_0x163e00.length > 0 && (_0x516113 = _0x163e00[0]);
			_0x421325.currentPlayline = function () {
				return _0x516113;
			};
			_0x421325.ready(function () {
				_0x421325.controlBar.videoJsPlayLine = _0x421325.controlBar.el_.insertBefore(_0x2d675c.el_, _0x421325.controlBar.getChild('fullscreenToggle').el_);
				_0x421325.controlBar.videoJsPlayLine.dispose = function () {
					this.parentNode.removeChild(this);
				};
			});
		};
		_0xf9afe2.registerPlugin('videoJsPlayLine', _0x45b430);
	}(window, videojs));
}());
Ext.define('ans.AudioJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x34bd06) {
		_0x34bd06 = _0x34bd06 || {};
		var _0x5a7a2b = this;
		_0x5a7a2b.addEvents(['seekstart']);
		_0x5a7a2b.mixins.observable.constructor.call(_0x5a7a2b, _0x34bd06);
		var _0x5b7e67 = videojs(_0x34bd06.videojs, _0x5a7a2b.params2VideoOpt(_0x34bd06.params), function () {
		});
		Ext.fly(_0x34bd06.videojs).on('contextmenu', function (_0x31158e) {
			_0x31158e.preventDefault();
		});
		Ext.fly(_0x34bd06.videojs).on('keydown', function (_0x538982) {
			(_0x538982.keyCode == 32 || _0x538982.keyCode == 37 || _0x538982.keyCode == 39) && _0x538982.preventDefault();
		});
	},
	'params2VideoOpt': function (_0x400898) {
		var _0x3796ae = [];
		!_0x400898.rootPath && (_0x400898.rootPath = '');
		_0x400898.http && _0x3796ae.push({
			'src': _0x400898.http,
			'type': 'audio/mp3'
		});
		var _0x46d769 = function (_0x177e28, _0x3f31ac, _0x4ec226) {
			var _0x3bbb6d = this;
			!_0x3bbb6d.logCount && (_0x3bbb6d.logCount = 0);
			videojs.xhr({
				'uri': _0x3f31ac,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x56f34c, _0x446644) {
				_0x3bbb6d.logCount++;
				if (_0x446644.statusCode == 200) {
					_0x3bbb6d.logCount = 0;
					if (_0x446644.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x446644.body);
					d.isPassed && _0x4ec226();
					return;
				}
				if (_0x3bbb6d.logCount >= 4) {
					_0x3bbb6d.logCount = 0;
					_0x177e28.pause();
					_0x446644.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x446644.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x2d98d5 = function (_0x583192, _0x21616a, _0x19c082, _0x57c782) {
			if (!_0x400898.reportUrl) {
				return;
			}
			var _0x4e7d9d = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x1f1aa3 = (_0x400898.startTime || '0') + '_' + (_0x400898.endTime || _0x400898.duration), _0x39201f = 0, _0x562ee7;
			_0x19c082.toString().indexOf('-') != -1 ? (_0x562ee7 = _0x19c082.split('-'), _0x562ee7.length == 2 && (_0x39201f = parseInt(_0x562ee7[1]) * 1000)) : _0x39201f = _0x19c082 * 1000;
			if (_0x39201f == _0x400898.duration * 1000 && _0x21616a == 2) {
				return;
			}
			var _0x464f79 = Ext.String.format(_0x4e7d9d, _0x400898.clazzId, _0x400898.userid, _0x400898.jobid ? _0x400898.jobid : '', _0x400898.objectId, _0x39201f, 'd_yHJ!$pdA~5', _0x400898.duration * 1000, _0x1f1aa3), _0x5b0a15 = [
				_0x400898.reportUrl,
				'/',
				_0x400898.dtoken,
				'?clazzId=',
				_0x400898.clazzId,
				'&playingTime=',
				_0x19c082,
				'&duration=',
				_0x400898.duration,
				'&clipTime=',
				_0x1f1aa3,
				'&objectId=',
				_0x400898.objectId,
				'&otherInfo=',
				_0x400898.otherInfo,
				'&jobid=',
				_0x400898.jobid,
				'&userid=',
				_0x400898.userid,
				'&isdrag=',
				_0x21616a,
				'&view=pc',
				'&enc=',
				md5(_0x464f79),
				'&rt=',
				_0x400898.rt,
				'&dtype=Audio',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x46d769(_0x583192, _0x5b0a15, _0x57c782);
		};
		return {
			'language': 'zh-CN',
			'controls': true,
			'preload': 'auto',
			'bigPlayButton': false,
			'sources': _0x3796ae,
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
				'audioNote': { 'title': _0x400898.filename },
				'studyControl': { 'enableSwitchWindow': 1 },
				'seekBarControl': {
					'headOffset': _0x400898.headOffset,
					'enableFastForward': _0x400898.enableFastForward,
					'isSendLog': true,
					'reportTimeInterval': _0x400898.reportTimeInterval,
					'sendLog': function (_0x2b1346, _0x475429, _0x52c9b8) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x3db5e9 = 0;
						switch (_0x475429) {
							case 'play':
								_0x3db5e9 = 3;
								break;
							case 'pause':
								_0x3db5e9 = 2;
								break;
							case 'ended':
								_0x3db5e9 = 4;
								break;
						}
						_0x2d98d5(_0x2b1346, _0x3db5e9, _0x52c9b8, function () {
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
	var _0x21380b = videojs.getPlugin('plugin'), _0x5db26a = videojs.extend(_0x21380b, {
		'constructor': function (_0x1413ea, _0x199b02) {
			_0x21380b.call(this, _0x1413ea, _0x199b02);
			Ext.create('ans.videojs.AudioNote', {
				'renderTo': _0x1413ea.el_,
				'html': _0x199b02.title
			});
		}
	});
	videojs.registerPlugin('audioNote', _0x5db26a);
}());