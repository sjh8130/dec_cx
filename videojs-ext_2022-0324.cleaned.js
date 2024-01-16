Ext.define('ananas.ServerHosts', {
	'alternateClassName': 'ServerHosts',
	'singleton': true,
	'constructor': function () {
		var _0x444f93 = this;
		_0x444f93.callParent(arguments);
		var _0x1b900d = document.domain;
		try {
			_0x444f93.MASTER_HOST = location.protocol + '//' + top.location.host;
		} catch (_0x3794c6) {
			_0x444f93.MASTER_HOST = location.protocol + '//' + location.host;
		}
		try {
			_0x444f93.PARENT_HOST = location.protocol + '//' + parent.location.host;
		} catch (_0x3dd955) {
			_0x444f93.MASTER_HOST = location.protocol + '//' + location.host;
		}
		_0x444f93.P_HOST = location.protocol + '//p.ananas.chaoxing.com';
		_0x444f93.s1_HOST = location.protocol + '//s1.ananas.chaoxing.com';
		_0x444f93.s2_HOST = location.protocol + '//s2.ananas.chaoxing.com';
		_0x444f93.CLOUD_HOST = 'http://cloud.ananas.' + _0x1b900d;
		_0x444f93.NEW_CLOUD_HOST = location.protocol + '//pan-yz.chaoxing.com';
		_0x444f93.CS_HOST = location.protocol + '//cs.ananas.' + _0x1b900d;
		_0x444f93.FANYA_HOST = 'http://course.fanya.' + _0x1b900d;
		_0x444f93.PAN_HOST = 'http://pan.ananas.' + _0x1b900d;
		_0x444f93.CXLIVE_HOST = 'http://cxlive.' + _0x1b900d;
		_0x444f93.ERYA_TSK_HOST = 'http://erya.tsk.' + _0x1b900d;
		_0x444f93.QUESTIONNAIRE_HOST = 'http://surveyapp.fy.' + _0x1b900d;
		_0x444f93.FX_HOST = 'http://www.' + _0x1b900d;
		_0x444f93.PHONE_ZT_HOST = 'https://special.rhky.com';
		_0x444f93.CHAOXING_CLASS_HOST = 'https://k.chaoxing.com';
		_0x444f93.LIVE_HOST = location.protocol + '//live.chaoxing.com';
		_0x444f93.APPCD_HOST = location.protocol + '//appcd.chaoxing.com';
		_0x444f93.ZHIBO_HOST = 'https://zhibo.chaoxing.com';
	}
});
(function (_0x489788) {
	function _0x4b4107(_0x34d70c, _0x2ae9f7) {
		var _0x389081 = (_0x34d70c & 65535) + (_0x2ae9f7 & 65535), _0x1cd293 = (_0x34d70c >> 16) + (_0x2ae9f7 >> 16) + (_0x389081 >> 16);
		return _0x1cd293 << 16 | _0x389081 & 65535;
	}
	function _0x5f3deb(_0x25eabc, _0x5c34ae) {
		return _0x25eabc << _0x5c34ae | _0x25eabc >>> 32 - _0x5c34ae;
	}
	function _0x25cb9a(_0x451e5d, _0x392528, _0x287a94, _0x382caf, _0x1eae9e, _0x52c341) {
		return _0x4b4107(_0x5f3deb(_0x4b4107(_0x4b4107(_0x392528, _0x451e5d), _0x4b4107(_0x382caf, _0x52c341)), _0x1eae9e), _0x287a94);
	}
	function _0x49addd(_0x56ebd6, _0x133783, _0x337cf7, _0x29d3fc, _0x212262, _0x73ced8, _0x36aaa9) {
		return _0x25cb9a(_0x133783 & _0x337cf7 | ~_0x133783 & _0x29d3fc, _0x56ebd6, _0x133783, _0x212262, _0x73ced8, _0x36aaa9);
	}
	function _0x55574d(_0x10fb3a, _0xf8a244, _0x120fec, _0x4917fe, _0xb09b9f, _0x337684, _0x57640b) {
		return _0x25cb9a(_0xf8a244 & _0x4917fe | _0x120fec & ~_0x4917fe, _0x10fb3a, _0xf8a244, _0xb09b9f, _0x337684, _0x57640b);
	}
	function _0x112ec9(_0x10569f, _0x441fe8, _0x1a1dcc, _0x269eda, _0x541997, _0x15262f, _0x2b1722) {
		return _0x25cb9a(_0x441fe8 ^ _0x1a1dcc ^ _0x269eda, _0x10569f, _0x441fe8, _0x541997, _0x15262f, _0x2b1722);
	}
	function _0x2413de(_0x590d7d, _0x32b7fd, _0xce5cdf, _0x370912, _0x54cd63, _0x499d5f, _0x53a515) {
		return _0x25cb9a(_0xce5cdf ^ (_0x32b7fd | ~_0x370912), _0x590d7d, _0x32b7fd, _0x54cd63, _0x499d5f, _0x53a515);
	}
	function _0x518310(_0x488909, _0x16b110) {
		_0x488909[_0x16b110 >> 5] |= 128 << _0x16b110 % 32;
		_0x488909[(_0x16b110 + 64 >>> 9 << 4) + 14] = _0x16b110;
		var _0x5b5ce9, _0x5028a7, _0x37d3f4, _0x1c4f11, _0x5e774a, _0x5b3fec = 1732584193, _0x313c19 = -271733879, _0x26017d = -1732584194, _0x4dfd3f = 271733878;
		for (_0x5b5ce9 = 0; _0x5b5ce9 < _0x488909.length; _0x5b5ce9 += 16) {
			_0x5028a7 = _0x5b3fec;
			_0x37d3f4 = _0x313c19;
			_0x1c4f11 = _0x26017d;
			_0x5e774a = _0x4dfd3f;
			_0x5b3fec = _0x49addd(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9], 7, -680876936);
			_0x4dfd3f = _0x49addd(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9 + 1], 12, -389564586);
			_0x26017d = _0x49addd(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 2], 17, 606105819);
			_0x313c19 = _0x49addd(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9 + 3], 22, -1044525330);
			_0x5b3fec = _0x49addd(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9 + 4], 7, -176418897);
			_0x4dfd3f = _0x49addd(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9 + 5], 12, 1200080426);
			_0x26017d = _0x49addd(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 6], 17, -1473231341);
			_0x313c19 = _0x49addd(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9 + 7], 22, -45705983);
			_0x5b3fec = _0x49addd(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9 + 8], 7, 1770035416);
			_0x4dfd3f = _0x49addd(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9 + 9], 12, -1958414417);
			_0x26017d = _0x49addd(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 10], 17, -42063);
			_0x313c19 = _0x49addd(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9 + 11], 22, -1990404162);
			_0x5b3fec = _0x49addd(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9 + 12], 7, 1804603682);
			_0x4dfd3f = _0x49addd(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9 + 13], 12, -40341101);
			_0x26017d = _0x49addd(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 14], 17, -1502002290);
			_0x313c19 = _0x49addd(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9 + 15], 22, 1236535329);
			_0x5b3fec = _0x55574d(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9 + 1], 5, -165796510);
			_0x4dfd3f = _0x55574d(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9 + 6], 9, -1069501632);
			_0x26017d = _0x55574d(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 11], 14, 643717713);
			_0x313c19 = _0x55574d(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9], 20, -373897302);
			_0x5b3fec = _0x55574d(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9 + 5], 5, -701558691);
			_0x4dfd3f = _0x55574d(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9 + 10], 9, 38016083);
			_0x26017d = _0x55574d(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 15], 14, -660478335);
			_0x313c19 = _0x55574d(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9 + 4], 20, -405537848);
			_0x5b3fec = _0x55574d(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9 + 9], 5, 568446438);
			_0x4dfd3f = _0x55574d(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9 + 14], 9, -1019803690);
			_0x26017d = _0x55574d(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 3], 14, -187363961);
			_0x313c19 = _0x55574d(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9 + 8], 20, 1163531501);
			_0x5b3fec = _0x55574d(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9 + 13], 5, -1444681467);
			_0x4dfd3f = _0x55574d(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9 + 2], 9, -51403784);
			_0x26017d = _0x55574d(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 7], 14, 1735328473);
			_0x313c19 = _0x55574d(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9 + 12], 20, -1926607734);
			_0x5b3fec = _0x112ec9(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9 + 5], 4, -378558);
			_0x4dfd3f = _0x112ec9(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9 + 8], 11, -2022574463);
			_0x26017d = _0x112ec9(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 11], 16, 1839030562);
			_0x313c19 = _0x112ec9(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9 + 14], 23, -35309556);
			_0x5b3fec = _0x112ec9(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9 + 1], 4, -1530992060);
			_0x4dfd3f = _0x112ec9(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9 + 4], 11, 1272893353);
			_0x26017d = _0x112ec9(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 7], 16, -155497632);
			_0x313c19 = _0x112ec9(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9 + 10], 23, -1094730640);
			_0x5b3fec = _0x112ec9(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9 + 13], 4, 681279174);
			_0x4dfd3f = _0x112ec9(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9], 11, -358537222);
			_0x26017d = _0x112ec9(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 3], 16, -722521979);
			_0x313c19 = _0x112ec9(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9 + 6], 23, 76029189);
			_0x5b3fec = _0x112ec9(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9 + 9], 4, -640364487);
			_0x4dfd3f = _0x112ec9(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9 + 12], 11, -421815835);
			_0x26017d = _0x112ec9(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 15], 16, 530742520);
			_0x313c19 = _0x112ec9(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9 + 2], 23, -995338651);
			_0x5b3fec = _0x2413de(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9], 6, -198630844);
			_0x4dfd3f = _0x2413de(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9 + 7], 10, 1126891415);
			_0x26017d = _0x2413de(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 14], 15, -1416354905);
			_0x313c19 = _0x2413de(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9 + 5], 21, -57434055);
			_0x5b3fec = _0x2413de(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9 + 12], 6, 1700485571);
			_0x4dfd3f = _0x2413de(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9 + 3], 10, -1894986606);
			_0x26017d = _0x2413de(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 10], 15, -1051523);
			_0x313c19 = _0x2413de(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9 + 1], 21, -2054922799);
			_0x5b3fec = _0x2413de(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9 + 8], 6, 1873313359);
			_0x4dfd3f = _0x2413de(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9 + 15], 10, -30611744);
			_0x26017d = _0x2413de(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 6], 15, -1560198380);
			_0x313c19 = _0x2413de(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9 + 13], 21, 1309151649);
			_0x5b3fec = _0x2413de(_0x5b3fec, _0x313c19, _0x26017d, _0x4dfd3f, _0x488909[_0x5b5ce9 + 4], 6, -145523070);
			_0x4dfd3f = _0x2413de(_0x4dfd3f, _0x5b3fec, _0x313c19, _0x26017d, _0x488909[_0x5b5ce9 + 11], 10, -1120210379);
			_0x26017d = _0x2413de(_0x26017d, _0x4dfd3f, _0x5b3fec, _0x313c19, _0x488909[_0x5b5ce9 + 2], 15, 718787259);
			_0x313c19 = _0x2413de(_0x313c19, _0x26017d, _0x4dfd3f, _0x5b3fec, _0x488909[_0x5b5ce9 + 9], 21, -343485551);
			_0x5b3fec = _0x4b4107(_0x5b3fec, _0x5028a7);
			_0x313c19 = _0x4b4107(_0x313c19, _0x37d3f4);
			_0x26017d = _0x4b4107(_0x26017d, _0x1c4f11);
			_0x4dfd3f = _0x4b4107(_0x4dfd3f, _0x5e774a);
		}
		return [
			_0x5b3fec,
			_0x313c19,
			_0x26017d,
			_0x4dfd3f
		];
	}
	function _0x2f367c(_0x1f965b) {
		var _0x13242a, _0x33be0e = '', _0x1f20dd = _0x1f965b.length * 32;
		for (_0x13242a = 0; _0x13242a < _0x1f20dd; _0x13242a += 8) {
			_0x33be0e += String.fromCharCode(_0x1f965b[_0x13242a >> 5] >>> _0x13242a % 32 & 255);
		}
		return _0x33be0e;
	}
	function _0x38514c(_0x56b00c) {
		var _0x14ffd3, _0xf34ed3 = [];
		_0xf34ed3[(_0x56b00c.length >> 2) - 1] = undefined;
		for (_0x14ffd3 = 0; _0x14ffd3 < _0xf34ed3.length; _0x14ffd3 += 1) {
			_0xf34ed3[_0x14ffd3] = 0;
		}
		var _0x25dba3 = _0x56b00c.length * 8;
		for (_0x14ffd3 = 0; _0x14ffd3 < _0x25dba3; _0x14ffd3 += 8) {
			_0xf34ed3[_0x14ffd3 >> 5] |= (_0x56b00c.charCodeAt(_0x14ffd3 / 8) & 255) << _0x14ffd3 % 32;
		}
		return _0xf34ed3;
	}
	function _0x275448(_0x483d25) {
		return _0x2f367c(_0x518310(_0x38514c(_0x483d25), _0x483d25.length * 8));
	}
	function _0x2eb1e0(_0x384cce, _0x5135c8) {
		var _0x17f706, _0x52c13f = _0x38514c(_0x384cce), _0x5b4241 = [], _0x2462b0 = [], _0x27a633;
		_0x5b4241[15] = _0x2462b0[15] = undefined;
		_0x52c13f.length > 16 && (_0x52c13f = _0x518310(_0x52c13f, _0x384cce.length * 8));
		for (_0x17f706 = 0; _0x17f706 < 16; _0x17f706 += 1) {
			_0x5b4241[_0x17f706] = _0x52c13f[_0x17f706] ^ 909522486;
			_0x2462b0[_0x17f706] = _0x52c13f[_0x17f706] ^ 1549556828;
		}
		return _0x27a633 = _0x518310(_0x5b4241.concat(_0x38514c(_0x5135c8)), 512 + _0x5135c8.length * 8), _0x2f367c(_0x518310(_0x2462b0.concat(_0x27a633), 640));
	}
	function _0x5abc4a(_0x4911c4) {
		var _0x25026b = '0123456789abcdef', _0x3423a5 = '', _0x43feb8, _0x4a4d3f;
		for (_0x4a4d3f = 0; _0x4a4d3f < _0x4911c4.length; _0x4a4d3f += 1) {
			_0x43feb8 = _0x4911c4.charCodeAt(_0x4a4d3f);
			_0x3423a5 += _0x25026b.charAt(_0x43feb8 >>> 4 & 15) + _0x25026b.charAt(_0x43feb8 & 15);
		}
		return _0x3423a5;
	}
	function _0x255ff1(_0x3a2ad1) {
		return unescape(encodeURIComponent(_0x3a2ad1));
	}
	function _0x400768(_0x5fc2b4) {
		return _0x275448(_0x255ff1(_0x5fc2b4));
	}
	function _0xb21ba6(_0x3ec957) {
		return _0x5abc4a(_0x400768(_0x3ec957));
	}
	function _0x82b94a(_0x3ba10b, _0x7190b8) {
		return _0x2eb1e0(_0x255ff1(_0x3ba10b), _0x255ff1(_0x7190b8));
	}
	function _0x2a811a(_0x5be5f5, _0x455c5a) {
		return _0x5abc4a(_0x82b94a(_0x5be5f5, _0x455c5a));
	}
	function _0x116a87(_0xf59c05, _0x26b27d, _0x5ca0ed) {
		if (!_0x26b27d) {
			if (!_0x5ca0ed) {
				return _0xb21ba6(_0xf59c05);
			}
			return _0x400768(_0xf59c05);
		}
		if (!_0x5ca0ed) {
			return _0x2a811a(_0x26b27d, _0xf59c05);
		}
		return _0x82b94a(_0x26b27d, _0xf59c05);
	}
	typeof define === 'function' && define.amd ? define(function () {
		return _0x116a87;
	}) : typeof module === 'object' && module.exports ? module.exports = _0x116a87 : _0x489788.md5 = _0x116a87;
}(this));
Ext.apply(Ext, {
	'setCookie': function (_0x2f2976, _0x8ed0cd) {
		var _0x4f710b = arguments, _0x40ed1d = arguments.length, _0x123e1b = _0x40ed1d > 2 ? _0x4f710b[2] : null, _0x1ed2cf = _0x40ed1d > 3 ? _0x4f710b[3] : '/', _0x38c52a = _0x40ed1d > 4 ? _0x4f710b[4] : null, _0x410234 = _0x40ed1d > 5 ? _0x4f710b[5] : false;
		document.cookie = _0x2f2976 + '=' + escape(_0x8ed0cd) + (_0x123e1b === null ? '' : '; expires=' + _0x123e1b.toGMTString()) + (_0x1ed2cf === null ? '' : '; path=' + _0x1ed2cf) + (_0x38c52a === null ? '' : '; domain=' + _0x38c52a) + (_0x410234 === true ? '; secure' : '');
	},
	'getCookie': function (_0xa90a69, _0x20998e) {
		var _0xdc08ea = _0xa90a69 + '=', _0x6097a = _0xdc08ea.length, _0x3f0faf = document.cookie.length, _0x20c20c = 0, _0x23987c = 0;
		while (_0x20c20c < _0x3f0faf) {
			_0x23987c = _0x20c20c + _0x6097a;
			if (document.cookie.substring(_0x20c20c, _0x23987c) == _0xdc08ea) {
				return this.getCookieVal(_0x23987c);
			}
			_0x20c20c = document.cookie.indexOf(' ', _0x20c20c) + 1;
			if (_0x20c20c === 0) {
				break;
			}
		}
		return _0x20998e;
	},
	'getCookieVal': function (_0x4896ed) {
		var _0x2e9280 = document.cookie.indexOf(';', _0x4896ed);
		return _0x2e9280 == -1 && (_0x2e9280 = document.cookie.length), unescape(document.cookie.substring(_0x4896ed, _0x2e9280));
	}
});
Ext.define('ans.VideoJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x2d871f) {
		_0x2d871f = _0x2d871f || {};
		var _0x405b5d = this;
		_0x405b5d.addEvents(['seekstart']);
		_0x405b5d.mixins.observable.constructor.call(_0x405b5d, _0x2d871f);
		var _0x3b2da1 = videojs(_0x2d871f.videojs, _0x405b5d.params2VideoOpt(_0x2d871f.params), function () {
		});
		Ext.fly(_0x2d871f.videojs).on('contextmenu', function (_0x58634d) {
			_0x58634d.preventDefault();
		});
		Ext.fly(_0x2d871f.videojs).on('keydown', function (_0x5a5949) {
			(_0x5a5949.keyCode == 32 || _0x5a5949.keyCode == 37 || _0x5a5949.keyCode == 39 || _0x5a5949.keyCode == 107) && _0x5a5949.preventDefault();
		});
		_0x3b2da1.videoJsResolutionSwitcher && _0x3b2da1.on('resolutionchange', function () {
			var _0x4a893e = _0x3b2da1.currentResolution(), _0x43e329 = _0x4a893e.sources ? _0x4a893e.sources[0].res : false;
			Ext.setCookie('resolution', _0x43e329);
		});
		var _0x4e0879 = _0x2d871f.params && _0x2d871f.params.doublespeed ? 2 : 1;
		_0x3b2da1.on('ratechange', function () {
			var _0x165a54 = _0x3b2da1.playbackRate();
			if (_0x165a54 > _0x4e0879) {
				_0x3b2da1.pause();
				_0x3b2da1.playbackRate(1);
			}
		});
	},
	'params2VideoOpt': function (_0x5b81f0) {
		var _0x1b6beb = false, _0x242329 = [
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
		if (_0x5b81f0.cdn) {
			try {
				top.window.app && top.window.app == 2 ? _0x242329 = _0x242329.concat(_0x5b81f0.cdn) : _0x242329 = _0x242329.concat(_0x5b81f0.cdn).sort(function (_0x5ca9b0, _0x34119b) {
					return _0x5ca9b0.indexorder - _0x34119b.indexorder;
				});
			} catch (_0x4a4a50) {
				_0x242329 = _0x242329.concat(_0x5b81f0.cdn);
			}
		}
		function _0x2115f3(_0x4bcc9a, _0x321aeb, _0x5a7a72) {
			return 'http://hls-ans.chaoxing.com/hls/m3u8/' + _0x4bcc9a + '/' + _0x321aeb + '.m3u8?cdn=' + encodeURIComponent(_0x5a7a72);
		}
		function _0x12540b(_0x3103d2, _0x965488) {
			var _0x128910 = ServerHosts.s1_HOST.replace('http:/', '').replace('https:/', ''), _0x2d8904 = 0;
			_0x3103d2.src.indexOf(_0x128910) > -1 && (_0x2d8904 = _0x3103d2.src.indexOf(_0x128910) + _0x128910.length);
			var _0x44a7d1 = _0x3103d2.src.substr(_0x2d8904);
			if (_0x965488.ispublic && _0x2d8904 == 0) {
				return {
					'src': _0x44a7d1,
					'type': 'video/mp4',
					'res': _0x3103d2.res
				};
			}
			return _0x965488.ispublic ? _0x1b6beb ? {
				'src': _0x2115f3(_0x5b81f0.objectId, _0x3103d2.resolution, _0x965488.url),
				'type': 'application/x-mpegURL',
				'res': _0x3103d2.res
			} : {
				'src': _0x965488.url + _0x44a7d1,
				'type': 'video/mp4',
				'res': _0x3103d2.res
			} : _0x1b6beb ? {
				'src': _0x2115f3(_0x5b81f0.objectId, _0x3103d2.resolution, _0x965488.url + _0x128910),
				'type': 'application/x-mpegURL',
				'res': _0x3103d2.res
			} : {
				'src': _0x965488.url + _0x128910 + _0x44a7d1,
				'type': 'video/mp4',
				'res': _0x3103d2.res
			};
		}
		var _0x138ed6 = [], _0x4cc9cf = Ext.getCookie('resolution', 360);
		!_0x5b81f0.rootPath && (_0x5b81f0.rootPath = '');
		_0x5b81f0.http && _0x138ed6.push({
			'src': _0x5b81f0.http,
			'type': 'video/mp4',
			'label': '标清',
			'resolution': 'sd',
			'res': 360
		});
		_0x5b81f0.httphd && _0x138ed6.push({
			'src': _0x5b81f0.httphd,
			'type': 'video/mp4',
			'label': '高清',
			'resolution': 'hd',
			'res': 720
		});
		_0x5b81f0.httpshd && _0x138ed6.push({
			'src': _0x5b81f0.httpshd,
			'type': 'video/mp4',
			'label': '超高清',
			'resolution': 'shd',
			'res': 1080
		});
		_0x5b81f0.httpmd && _0x138ed6.push({
			'src': _0x5b81f0.httpmd,
			'type': 'video/mp4',
			'label': '极速',
			'resolution': 'md',
			'res': 240
		});
		if (_0x138ed6.length == 1) {
			var _0xfc86b = _0x138ed6[0];
			_0xfc86b.label = '高清';
		}
		var _0x301610 = false;
		for (var _0x5a4a32 = 0; _0x5a4a32 < _0x138ed6.length; _0x5a4a32++) {
			if (_0x138ed6[_0x5a4a32].res == _0x4cc9cf) {
				_0x301610 = true;
				break;
			}
		}
		!_0x301610 && (_0x4cc9cf = 360);
		var _0x4cc1cc = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid), _0x48fcdb = function (_0x44cf98, _0x1a68c8, _0x2a8b4a) {
			try {
				if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && isUnFinishJob()) {
					return;
				}
			} catch (_0x1ee2d0) {
				console.log(_0x1ee2d0);
			}
			if (_0x4cc1cc) {
				return;
			}
			var _0xc73bb5 = this;
			!_0xc73bb5.logCount && (_0xc73bb5.logCount = 0);
			videojs.xhr({
				'uri': _0x1a68c8,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x429780, _0x5aa688) {
				_0xc73bb5.logCount++;
				if (_0x5aa688.statusCode == 200) {
					_0xc73bb5.logCount = 0;
					if (_0x5aa688.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x5aa688.body);
					if (d.isPassed) {
						try {
							typeof d.hasJobLimit != 'undefined' && d.hasJobLimit === true && (top.allowNextVideo = false, top.hasJobLimit = true);
						} catch (_0x397540) {
							console.log(_0x397540);
						}
						_0x2a8b4a();
					}
					return;
				}
				if (_0xc73bb5.logCount >= 4) {
					_0xc73bb5.logCount = 0;
					_0x44cf98.pause();
					_0x5aa688.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x5aa688.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x235f1e = function (_0x16ebf7, _0x4338e6, _0x42c143, _0x429fad) {
			if (!_0x5b81f0.reportUrl) {
				return;
			}
			if (_0x5b81f0.isFiled == 1 || _0x5b81f0.state == 1) {
				return;
			}
			var _0x16d92e = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x18117f = (_0x5b81f0.startTime || '0') + '_' + (_0x5b81f0.endTime || _0x5b81f0.duration), _0x5d2a66 = 0, _0x2ddc9c;
			_0x42c143.toString().indexOf('-') != -1 ? (_0x2ddc9c = _0x42c143.split('-'), _0x2ddc9c.length == 2 && (_0x5d2a66 = parseInt(_0x2ddc9c[1]) * 1000)) : _0x5d2a66 = _0x42c143 * 1000;
			if (_0x5d2a66 == _0x5b81f0.duration * 1000 && _0x4338e6 == 2) {
				return;
			}
			var _0x15fb53 = Ext.String.format(_0x16d92e, _0x5b81f0.clazzId, _0x5b81f0.userid, _0x5b81f0.jobid || '', _0x5b81f0.objectId, _0x5d2a66, 'd_yHJ!$pdA~5', _0x5b81f0.duration * 1000, _0x18117f), _0x289c9c = [
				_0x5b81f0.reportUrl,
				'/',
				_0x5b81f0.dtoken,
				'?clazzId=',
				_0x5b81f0.clazzId,
				'&playingTime=',
				_0x42c143,
				'&duration=',
				_0x5b81f0.duration,
				'&clipTime=',
				_0x18117f,
				'&objectId=',
				_0x5b81f0.objectId,
				'&otherInfo=',
				_0x5b81f0.otherInfo,
				'&jobid=',
				_0x5b81f0.jobid,
				'&userid=',
				_0x5b81f0.userid,
				'&isdrag=',
				_0x4338e6,
				'&view=pc',
				'&enc=',
				md5(_0x15fb53),
				'&rt=',
				_0x5b81f0.rt,
				'&dtype=Video',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x48fcdb(_0x16ebf7, _0x289c9c, _0x429fad);
		};
		return {
			'language': 'zh-CN',
			'poster': _0x5b81f0.screenshot,
			'controls': true,
			'preload': 'none',
			'sources': _0x138ed6,
			'playlines': _0x242329,
			'playbackRates': _0x5b81f0.doublespeed != 0 ? [
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
					'default': _0x4cc9cf,
					'dynamicLabel': true,
					'customSourcePicker': function (_0x326dc7, _0xc4c607, _0x358615) {
						var _0x33f429 = _0x326dc7.currentPlayline();
						return _0x326dc7.src(_0xc4c607.map(function (_0x2b7e20) {
							return _0x12540b(_0x2b7e20, _0x33f429);
						})), _0x326dc7;
					}
				},
				'videoJsPlayLine': {
					'dynamicLabel': true,
					'customSourcePicker': function (_0x2ebc9f, _0x27299d, _0x5d66ca) {
						var _0x55dd6a = _0x2ebc9f.currentResolution().sources[0];
						return _0x2ebc9f.src(_0x12540b(_0x55dd6a, _0x27299d)), _0x2ebc9f;
					}
				},
				'studyControl': { 'enableSwitchWindow': _0x5b81f0.enableSwitchWindow },
				'seekBarControl': {
					'headOffset': _0x5b81f0.headOffset,
					'enableFastForward': _0x5b81f0.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0x5b81f0.control,
					'reportTimeInterval': _0x5b81f0.reportTimeInterval,
					'isShowDanmu': _0x5b81f0.danmaku,
					'chapterCapture': _0x5b81f0.chapterCapture || 0,
					'captureInterval': _0x5b81f0.captureInterval || 600,
					'chapterCollectionType': _0x5b81f0.chapterCollectionType || 0,
					'startCapture': _0x5b81f0.startCapture,
					'endCapture': _0x5b81f0.endCapture,
					'playAginCapture': _0x5b81f0.playAginCapture,
					'playingCapture': _0x5b81f0.playingCapture,
					'playingLoopCapture': _0x5b81f0.playingLoopCapture,
					'duration': _0x5b81f0.duration,
					'isSupportFace': _0x5b81f0.isSupportFace || false,
					'isShowFaceCollection': _0x5b81f0.isShowFaceCollection,
					'attachmentId': _0x5b81f0.aId,
					'sendLog': function (_0x2e2bf1, _0x1770c2, _0x96c326, _0x552485) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x366a70 = 0;
						switch (_0x1770c2) {
							case 'playing':
								_0x366a70 = 0;
								break;
							case 'drag':
								_0x366a70 = 1;
								break;
							case 'play':
								_0x366a70 = 3;
								break;
							case 'pause':
								_0x366a70 = 2;
								break;
							case 'ended':
								_0x366a70 = 4;
								break;
						}
						var _0x4a335b = this;
						_0x235f1e(_0x2e2bf1, _0x366a70, _0x96c326, function () {
							try {
								_0x366a70 === 4 && typeof _0x552485 != 'undefined' && (_0x552485.sendDataLog('ended'), _0x552485.playNextVideo(_0x4a335b.attachmentId));
							} catch (_0x3dd37e) {
								console.log(_0x3dd37e);
							}
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				'timelineObjects': {
					'url': _0x5b81f0.rootPath + '/richvideo/initdatawithviewer?mid=' + _0x5b81f0.mid + '&cpi=' + _0x5b81f0.cpi + '&classid=' + _0x5b81f0.clazzId,
					'quizErrorReportUrl': _0x5b81f0.rootPath + '/question/addquestionerror?classid=' + _0x5b81f0.clazzId + '&cpi=' + _0x5b81f0.cpi,
					'validationUrl2': _0x5b81f0.rootPath + '/question/quiz-validation?classid=' + _0x5b81f0.clazzId + '&cpi=' + _0x5b81f0.cpi + '&objectid=' + _0x5b81f0.objectId,
					'quizRightCountUrl': _0x5b81f0.rootPath + '/question/quiz-rightcount?classid=' + _0x5b81f0.clazzId + '&cpi=' + _0x5b81f0.cpi
				},
				'subtitle': {
					'translate': _0x5b81f0.chapterVideoTranslate,
					'subtitleUrl': _0x5b81f0.rootPath + '/richvideo/allsubtitle?mid=' + _0x5b81f0.mid + '&objectid=' + _0x5b81f0.objectId + '&courseid=' + _0x5b81f0.courseid,
					'subtitle': _0x5b81f0.rootPath + '/ananas/video-editor/sub?objectid=' + _0x5b81f0.subobjectid
				},
				'marker': {
					'url': !_0x5b81f0.isNotMark ? _0x5b81f0.rootPath + '/ananas/getpoints?courseid=' + _0x5b81f0.courseid + '&mid=' + _0x5b81f0.mid : '',
					'ff': _0x5b81f0.enableFastForward,
					'videoTopicCloud': _0x5b81f0.videoTopicCloud
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
	var _0x160aaf = videojs.getPlugin('plugin'), _0x3a74bf = videojs.extend(_0x160aaf, {
		'constructor': function (_0x1db108, _0x7214f1) {
			_0x160aaf.call(this, _0x1db108, _0x7214f1);
			var _0x221781 = this, _0x4a0da0 = _0x7214f1.mouseElTarget, _0x4b85ea = 1;
			_0x7214f1.enableSwitchWindow !== 1 && (_0x4b85ea = 0);
			if (!_0x4a0da0) {
				try {
					_0x4a0da0 = window.top ? window.top : window.document;
				} catch (_0x58e0d6) {
					_0x4a0da0 = window.parent ? window.parent : window.document;
				}
			}
			Ext.fly(_0x4a0da0).on('mouseout', function (_0x41af75) {
				_0x41af75 = _0x41af75 ? _0x41af75 : window.event;
				var _0x1564ae = _0x41af75.relatedTarget || _0x41af75.toElement;
				!_0x1564ae && (_0x4b85ea != 1 && _0x1db108.pause());
			});
			_0x221781.singleton(_0x1db108);
		},
		'singleton': function (_0x3feccd) {
			var _0x558a39 = this, _0x5964f2 = parseInt(Math.random() * 9999999);
			_0x3feccd.on('play', function () {
				Ext.setCookie('videojs_id', _0x5964f2);
			});
			_0x3feccd.setInterval(function () {
				var _0x1e8b59 = Ext.getCookie('videojs_id');
				typeof _0x1e8b59 != 'undefined' && _0x1e8b59 != _0x5964f2 && _0x3feccd.pause();
			}, 1000);
		}
	});
	videojs.registerPlugin('studyControl', _0x3a74bf);
}());
(function () {
	var _0x2bc694 = videojs.getComponent('SeekBar'), _0x4ff1a6 = videojs.extend(_0x2bc694, {
		'constructor': function (_0x4fd3ed, _0x130b0f) {
			_0x2bc694.call(this, _0x4fd3ed, _0x130b0f);
			var _0x29b1c5 = this;
			_0x4fd3ed.ignorePause = false;
			_0x4fd3ed.disableSeek = function (_0x26d3ae) {
				_0x29b1c5.disableSeek(_0x26d3ae);
			};
			_0x4fd3ed.onlyBackward = function (_0x49e618) {
				_0x29b1c5.onlyBackward(_0x49e618);
			};
			_0x4fd3ed.getSeekBar = function () {
				return _0x29b1c5;
			};
			_0x29b1c5.on('slideractive', function () {
				_0x4fd3ed.trigger('seekstart');
				_0x4fd3ed.ignorePause = true;
				_0x4fd3ed.ignorePlay = true;
				_0x4fd3ed.ignoreSeek = false;
			});
			_0x29b1c5.on('sliderinactive', function () {
				_0x4fd3ed.trigger('seekend');
				_0x4fd3ed.ignoreSeek = false;
			});
			_0x29b1c5.maxPercent = 0;
			_0x4fd3ed.on('timeupdate', function () {
				_0x29b1c5.maxPercent = Math.max(_0x29b1c5.getPercent(), _0x29b1c5.maxPercent);
			});
		},
		'getCurrentTime_': function () {
			return this.player_.currentTime();
		},
		'getMaxPercent': function () {
			return this.maxPercent;
		},
		'isBackward': function (_0x2c638c) {
			return this.maxPercent > this.calculateDistance(_0x2c638c);
		},
		'handleMouseDown': function (_0x493777) {
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x493777)) {
					return;
				}
			}
			if (this['_disableSeek'] === true) {
				return;
			}
			_0x2bc694.prototype.handleMouseDown.call(this, _0x493777);
		},
		'handleMouseMove': function (_0x5836f7) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x5836f7)) {
					return;
				}
			}
			_0x2bc694.prototype.handleMouseMove.call(this, _0x5836f7);
		},
		'handleMouseUp': function (_0x333571) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x333571)) {
					return;
				}
			}
			_0x2bc694.prototype.handleMouseUp.call(this, _0x333571);
		},
		'disableSeek': function (_0x4a9062) {
			var _0x547f4b = this;
			_0x547f4b['_disableSeek'] = _0x4a9062 !== false;
			_0x547f4b['_disableSeek'] ? _0x547f4b.disable() : _0x547f4b.enable();
		},
		'onlyBackward': function (_0x5dd62b) {
			var _0x1504d1 = this;
			_0x1504d1['_onlyBackward'] = _0x5dd62b !== false;
		}
	});
	videojs.registerComponent('SeekBar', _0x4ff1a6);
}());
(function () {
	var _0x3956e5 = videojs.getPlugin('plugin'), _0x5c5544 = videojs.extend(_0x3956e5, {
		'constructor': function (_0x5ebd4f, _0xd93dbb) {
			_0x3956e5.call(this, _0x5ebd4f, _0xd93dbb);
			var _0x4cbce5 = this;
			_0x4cbce5.firstClick = true;
			_0x4cbce5.isSendLog_ = !!_0xd93dbb.isSendLog;
			_0x4cbce5.isShowDanmu_ = !!_0xd93dbb.isShowDanmu;
			_0x4cbce5.damuLastGetTime = 0;
			_0x4cbce5.timeCount = 0;
			_0x4cbce5.isPlay = false;
			_0x4cbce5.isEnd = false;
			_0x4cbce5.playTimer;
			_0x4cbce5.chapterCapture = _0xd93dbb.chapterCapture || 0;
			_0x4cbce5.captureInterval = _0xd93dbb.captureInterval * 60 || 600;
			_0x4cbce5.chapterCollectionType = _0xd93dbb.chapterCollectionType || 0;
			_0x4cbce5.isSupportFace = _0xd93dbb.isSupportFace;
			_0x4cbce5.isAlertTip = false;
			_0x4cbce5.startCapture = _0xd93dbb.startCapture;
			_0x4cbce5.endCapture = _0xd93dbb.endCapture;
			_0x4cbce5.playAginCapture = _0xd93dbb.playAginCapture;
			_0x4cbce5.playingCapture = _0xd93dbb.playingCapture;
			_0x4cbce5.playingLoopCapture = _0xd93dbb.playingLoopCapture;
			_0x4cbce5.isShowFaceCollection = _0xd93dbb.isShowFaceCollection;
			_0x4cbce5.duration = _0xd93dbb.duration;
			_0x4cbce5.playingFace = false;
			_0x4cbce5.loopCaptureInterval = Math.floor(Math.random() * (parseInt(_0x4cbce5.duration) - 0) + 1);
			_0x4cbce5.isAginFace = false;
			_0x4cbce5.againStartTime = 0;
			_0x4cbce5.attachmentId = _0xd93dbb.attachmentId;
			_0x5ebd4f.on('ready', function () {
				_0xd93dbb.enableFastForward != 1 && _0x5ebd4f.disableSeek();
			});
			!_0xd93dbb.sendLog && (_0xd93dbb.sendLog = function () {
			});
			_0xd93dbb.headOffset && _0x5ebd4f.currentTime(_0xd93dbb.headOffset);
			var _0x1cfb06 = 0, _0x42ccfc = 0, _0x2c219d = _0xd93dbb.reportTimeInterval || 60, _0x1456b1 = _0x2c219d * 1000, _0x227f35 = function (_0x123798, _0x284261, _0x19bd85) {
				if (!_0x4cbce5.isSendLog_) {
					return;
				}
				var _0x344905 = _0x4cbce5.now_() - _0x1cfb06;
				(_0x344905 > _0x1456b1 || _0x284261 === true) && (typeof _0x19bd85 != 'undefined' ? (_0xd93dbb.sendLog(_0x5ebd4f, _0x123798, _0x19bd85, _0x4cbce5), _0x4cbce5.playTimer && clearInterval(_0x4cbce5.playTimer)) : _0xd93dbb.sendLog(_0x5ebd4f, _0x123798, _0x4cbce5.sec_(_0x5ebd4f), _0x4cbce5), _0x1cfb06 = _0x4cbce5.now_());
			};
			_0x5ebd4f.on('play', function () {
				try {
					if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && _0x4cbce5.firstClick && isUnFinishJob()) {
						_0x4cbce5.firstClick = false;
						_0x5ebd4f.pause();
						checkJobCountLimit(_0x5ebd4f);
						return;
					}
				} catch (_0x4f3b94) {
					console.log(_0x4f3b94);
				}
				_0x4cbce5.isAlertTip = false;
				_0x4cbce5.chapterCapture == 0 || !_0x4cbce5.isSupportFace ? (!_0x5ebd4f.ignorePlay ? (_0x227f35('play', true), _0x5ebd4f.ignoreSeek = true) : (_0x5ebd4f.ignorePlay = false, _0x5ebd4f.ignoreSeek = false), _0x4cbce5.sendDataLog('play'), _0x4cbce5.receiveStudyLog(), _0x4cbce5.getDanmuList('play', _0x5ebd4f)) : _0x4cbce5.chapterCapture == 1 && (_0x4cbce5.timeCount == 0 ? _0x4cbce5.isShowFaceCollection && !_0x4cbce5.isPlay && (_0x4cbce5.startCapture == 1 || typeof _0x4cbce5.startCapture == 'undefined') ? (_0x4cbce5.faceCollection('play', _0x5ebd4f, _0x4cbce5.chapterCollectionType), _0x5ebd4f.pause()) : (!_0x5ebd4f.ignorePlay ? (_0x227f35('play', true), _0x5ebd4f.ignoreSeek = true) : (_0x5ebd4f.ignorePlay = false, _0x5ebd4f.ignoreSeek = false), _0x4cbce5.sendDataLog('play'), _0x4cbce5.receiveStudyLog(), _0x4cbce5.getDanmuList('play', _0x5ebd4f), (_0x4cbce5.isShowFaceCollection && typeof _0x4cbce5.playingCapture == 'undefined' || _0x4cbce5.playingCapture == 1 && _0x4cbce5.playingLoopCapture == 0) && _0x4cbce5.timer(_0x5ebd4f), _0x4cbce5.isShowFaceCollection && _0x4cbce5.playAginCapture == 1 && _0x5ebd4f.ignorePlay && !_0x4cbce5.isAginFace && (_0x4cbce5.faceCollection('aginPlay', _0x5ebd4f, _0x4cbce5.chapterCollectionType), _0x5ebd4f.pause())) : ((_0x4cbce5.isShowFaceCollection && typeof _0x4cbce5.playingCapture == 'undefined' || _0x4cbce5.playingCapture == 1 && _0x4cbce5.playingLoopCapture == 1) && _0x4cbce5.timer(_0x5ebd4f), _0x4cbce5.isShowFaceCollection && _0x4cbce5.playAginCapture == 1 && !_0x5ebd4f.ignorePlay && !_0x4cbce5.isAginFace && (_0x4cbce5.faceCollection('aginPlay', _0x5ebd4f, _0x4cbce5.chapterCollectionType), _0x5ebd4f.pause(), _0x4cbce5.againStartTime = _0x4cbce5.sec_(_0x5ebd4f))));
			});
			_0x5ebd4f.on('seeked', function () {
				if (_0xd93dbb.enableFastForward != 1 && !_0x5ebd4f.switchStatus) {
					var _0x4c6acd = _0x5ebd4f.currentTime(), _0x20556a = _0xd93dbb.headOffset ? _0xd93dbb.headOffset : 0;
					_0x4c6acd != 0 && _0x4c6acd > _0x20556a && _0x5ebd4f.currentTime(_0x20556a);
				}
				!_0x5ebd4f.ignoreSeek ? _0x227f35('drag', true, _0x42ccfc + '-' + _0x4cbce5.sec_(_0x5ebd4f)) : _0x5ebd4f.ignoreSeek = false;
				_0x42ccfc = _0x4cbce5.sec_(_0x5ebd4f);
				_0x5ebd4f.ignorePlay = true;
				delete _0x5ebd4f.switchStatus;
			});
			_0x5ebd4f.on('pause', function () {
				!_0x5ebd4f.ignorePause ? (_0x227f35('pause', true), _0x5ebd4f.ignorePlay = false, _0x5ebd4f.ignoreSeek = false) : _0x5ebd4f.ignorePause = false;
				_0x4cbce5.sendDataLog('pause');
				_0x4cbce5.getDanmuList('pause', _0x5ebd4f);
			});
			_0x5ebd4f.on('timeupdate', function () {
				_0x4cbce5.sec_(_0x5ebd4f) - _0x4cbce5.againStartTime > 2 && (_0x4cbce5.isAginFace = false);
				_0x4cbce5.isShowFaceCollection && _0x4cbce5.chapterCapture == 1 && _0x4cbce5.playingCapture == 1 && _0x4cbce5.playingLoopCapture == 1 && _0x4cbce5.sec_(_0x5ebd4f) == _0x4cbce5.loopCaptureInterval && !_0x4cbce5.playingFace && (_0x4cbce5.faceCollection('playing', _0x5ebd4f, _0x4cbce5.chapterCollectionType), _0x5ebd4f.pause());
				if (typeof parent.videoTrialDuration != 'undefined' && parent.videoTrialDuration != '-1') {
					var _0x18e88f = parseInt(parent.videoTrialDuration) * 60;
					if (_0x18e88f < _0x4cbce5.sec_(_0x5ebd4f) && !_0x4cbce5.isAlertTip) {
						_0x5ebd4f.pause();
						alert('视频只允许试看' + parent.videoTrialDuration + '分钟');
						_0x4cbce5.isAlertTip = true;
						return;
					}
				}
				parseInt(_0x5ebd4f.currentTime()) >= this.damuLastGetTime && _0x4cbce5.getDanmuList('timeupdate', _0x5ebd4f);
				_0x4cbce5.danmuDisplay(_0x5ebd4f);
				if (_0x1cfb06 == 0) {
					return;
				}
				_0x4cbce5.sec_(_0x5ebd4f) - _0x42ccfc <= 1 && !_0x5ebd4f.ignorePlay && (_0x42ccfc = _0x4cbce5.sec_(_0x5ebd4f));
				_0x227f35('playing');
			});
			_0x5ebd4f.on('ended', function () {
				_0x4cbce5.playTimer && clearInterval(_0x4cbce5.playTimer);
				_0x4cbce5.isShowFaceCollection && !_0x4cbce5.isEnd && _0x4cbce5.chapterCapture == 1 && _0x4cbce5.endCapture == 1 && _0x4cbce5.faceCollection('ended', _0x5ebd4f, _0x4cbce5.chapterCollectionType);
				_0x227f35('ended', true);
			});
		},
		'sec_': function (_0x39bb71) {
			return parseInt(_0x39bb71.currentTime());
		},
		'now_': function () {
			return new Date().getTime();
		},
		'isSendLog': function (_0x3097d5) {
			return _0x3097d5 && (this.isSendLog_ = !!_0x3097d5), this.isSendLog_;
		},
		'sendDataLog': function (_0x380cbe) {
			var _0x4e9af6 = _0x380cbe == 'pause' || _0x380cbe == 'end' ? 2 : 1;
			typeof sendReadZTMediaLog != 'undefined' && sendReadZTMediaLog(_0x4e9af6);
		},
		'receiveStudyLog': function () {
			typeof receiveStudyLog != 'undefined' && setTimeout(function () {
				receiveStudyLog();
			}, 50);
		},
		'getDanmuList': function (_0x99ad34, _0x13be0e) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x1356d6 = this.sec_(_0x13be0e);
			if (_0x99ad34 == 'pause') {
				this.damuLastGetTime = 0;
				setTimeout(function () {
					getDanmuByTime(_0x99ad34, 0);
				}, 200);
				return;
			}
			typeof getDanmuByTime != 'undefined' && setTimeout(function () {
				getDanmuByTime(_0x99ad34, _0x1356d6);
			}, 200);
			if (_0x1356d6 < this.damuLastGetTime) {
				return;
			}
			this.damuLastGetTime = _0x1356d6 + 59;
		},
		'danmuDisplay': function (_0x244428) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x33e76f = this.sec_(_0x244428);
			typeof danmuPlay != 'undefined' && danmuPlay(_0x33e76f);
		},
		'timer': function (_0x52eb94) {
			var _0x3eb461 = this;
			this.playTimer = setInterval(function () {
				_0x3eb461.timeCount++;
				if (_0x3eb461.timeCount >= _0x3eb461.captureInterval) {
					_0x3eb461.isPlay = false;
					_0x52eb94.pause();
					_0x3eb461.faceCollection('pause', _0x52eb94, _0x3eb461.chapterCollectionType);
				}
			}, 1000);
		},
		'faceCollection': function (_0x125c2f, _0x213bf9, _0x12e288) {
			_0x125c2f == 'play' && this.timeCount == 0 ? typeof startFaceCollection != 'undefined' && startFaceCollection(_0x213bf9, _0x12e288, this) : _0x125c2f == 'pause' ? (this.playTimer && clearInterval(this.playTimer), !this.isPlay && this.timeCount >= this.captureInterval && (typeof startFaceCollection != 'undefined' && startFaceCollection(_0x213bf9, _0x12e288, this), this.timeCount = 0)) : _0x125c2f == 'ended' ? (this.playTimer && clearInterval(this.playTimer), typeof startFaceCollection != 'undefined' && (startFaceCollection(_0x213bf9, _0x12e288, this), this.isEnd = true), this.timeCount = 0) : _0x125c2f == 'playing' ? typeof startFaceCollection != 'undefined' && (startFaceCollection(_0x213bf9, _0x12e288, this), this.playingFace = true) : _0x125c2f == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (startFaceCollection(_0x213bf9, _0x12e288, this), this.isAginFace = true));
		},
		'playNextVideo': function (_0x21e11e) {
			if (typeof chapterPlayNextVideo != 'undefined') {
				if (typeof top.allowNextVideo != 'undefined' && top.allowNextVideo === false) {
					top.showJobLimitTip();
					return;
				}
				chapterPlayNextVideo(_0x21e11e);
			}
		}
	});
	videojs.registerPlugin('seekBarControl', _0x5c5544);
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
		'<span class="spanHas fr" id="spanHas"><tpl if="dtype==\'InteractiveQuiz\'">恭喜你\uFF0C答对了\uFF01<tpl else>回答正确</tpl></span>',
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
			'getChecked': function (_0x275db9, _0x389e54, _0x457505) {
				return _0x275db9.indexOf(_0x389e54) != -1 && _0x457505 == 'InteractiveQuiz' ? 'checked="checked"' : '';
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
		var _0x576e5b = this, _0x1972c8 = _0x576e5b.renderData, _0x40a9bd = _0x576e5b.quizRightCountUrl;
		typeof _0x40a9bd != 'undefined' && Ext.Ajax.request({
			'url': _0x40a9bd,
			'params': {
				'eventid': _0x1972c8.resourceId,
				'memberinfo': _0x1972c8.memberinfo
			},
			'method': 'get',
			'success': function (_0xf175cf) {
				var _0x4647d5 = Ext.decode(_0xf175cf.responseText);
				_0x4647d5.status && (Ext.get('rightNum').setHTML(_0x4647d5.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
			}
		});
		_0x576e5b.callParent(arguments);
		var _0x1b3882 = _0x576e5b.scrollEl, _0x5c1000 = $(_0x1b3882.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#A5A5A5',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x576e5b.scroller = _0x5c1000;
		_0x576e5b.submitEl.on('click', function () {
			_0x576e5b.checkResult() && (Ext.get('videoquiz-continue').getStyle('display') == 'none' && _0x576e5b.fireEvent('continue'));
		});
		_0x576e5b.continueEl.on('click', function () {
			_0x576e5b.fireEvent('continue');
		});
		_0x576e5b.backEl && _0x576e5b.backEl.on('click', function () {
			_0x576e5b.onerror && _0x576e5b.onerror();
			_0x576e5b.fireEvent('continue');
		});
		_0x576e5b.viewAnalysisEl && _0x576e5b.viewAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'inline-block');
		});
		_0x576e5b.delAnalysisEl && _0x576e5b.delAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'none');
		});
	},
	'checkResult': function () {
		var _0x36582a = this, _0x8cf7ca = Ext.query('input', _0x36582a.el.dom), _0x1943fa = true, _0x5e9e6f = _0x36582a.renderData, _0x4c92b4 = _0x5e9e6f.options, _0xf7ee3 = [], _0x31b85b = _0x36582a.quizErrorReportUrl, _0x5de17e = _0x36582a.validationUrl2, _0x3df39a = _0x5e9e6f.dtype;
		Ext.each(_0x8cf7ca, function (_0x3898c0, _0xa54102) {
			(_0x3898c0.value == 'true' && !_0x3898c0.checked || _0x3898c0.value == 'false' && _0x3898c0.checked) && (_0x1943fa = false);
			_0x3898c0.checked && _0xf7ee3.push(_0x4c92b4[_0xa54102].name);
		});
		!_0x1943fa ? _0x5e9e6f.errorBackTime && _0x5e9e6f.errorBackTime > 0 ? (Ext.get('spanNotBack').setStyle('display', 'block'), Ext.get('videoquiz-submit').setStyle('display', 'none'), _0x3df39a == 'InteractiveQuiz' ? Ext.get('knowledgeBack').setStyle('display', 'block') : Ext.get('videoquiz-continue').setStyle('display', 'block')) : _0x3df39a == 'InteractiveQuiz' && _0x5e9e6f.errorBack == 1 && _0x5e9e6f.eBstartPoint != '' ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'block')) : Ext.get('spanNot').setStyle('display', 'block') : (Ext.get('spanHas').setStyle('display', 'block'), _0x3df39a == 'InteractiveQuiz' && (Ext.get('videoquiz-continue').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'none'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('spanNot').setStyle('display', 'none'), Ext.get('spanNotBack').setStyle('display', 'none'), Ext.get('spanNotBackPoint').setStyle('display', 'none')));
		if (typeof _0x5de17e != 'undefined') {
			var _0x7455d8 = _0xf7ee3.join(',');
			Ext.Ajax.request({
				'url': _0x5de17e,
				'params': {
					'eventid': _0x5e9e6f.resourceId,
					'isRight': _0x1943fa,
					'memberinfo': _0x5e9e6f.memberinfo,
					'answerContent': _0x7455d8
				},
				'method': 'get',
				'success': function (_0x4164fa) {
					_0x5e9e6f.answerContent = _0x7455d8;
					var _0x1c8bbc = Ext.decode(_0x4164fa.responseText);
					if (_0x1c8bbc.status) {
						if (_0x3df39a == 'InteractiveQuiz') {
							Ext.get('rightNum').setHTML(_0x1c8bbc.rightAnswerCount);
							Ext.get('rightAnswerNum').setStyle('display', 'inline-block');
						}
						if (_0x1c8bbc.isRight && _0x3df39a == 'InteractiveQuiz') {
							if (_0x1c8bbc.testAnalysis) {
								Ext.get('tkParsing_con').setHTML('解析\uFF1A' + _0x1c8bbc.testAnalysis);
								Ext.get('tkParsing').setStyle('display', 'inline-block');
								Ext.get('viewAnalysis').setStyle('display', 'block');
								var _0xbc9602 = _0x36582a.tkParseScrollEl, _0x3f42ee = $(_0xbc9602.dom).niceScroll({
									'cursorborder': '',
									'cursorwidth': 6,
									'cursorcolor': '#A5A5A5',
									'boxzoom': false,
									'autohidemode': true
								});
								_0x36582a.tkParseScroll = _0x3f42ee;
							}
						}
					}
				}
			});
			!_0x1943fa && _0x36582a.onerror && _0x3df39a != 'InteractiveQuiz' && _0x36582a.onerror();
		} else {
			!_0x1943fa && (Ext.Ajax.request({
				'url': _0x31b85b,
				'params': {
					'eventid': _0x5e9e6f.resourceId,
					'memberinfo': _0x5e9e6f.memberinfo,
					'answerContent': _0xf7ee3.join(',')
				},
				'method': 'get'
			}), _0x36582a.onerror && _0x3df39a != 'InteractiveQuiz' && _0x36582a.onerror());
		}
		return !_0x1943fa && _0x5e9e6f.errorContinue == 1 && (_0x1943fa = true, Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('videoquiz-continue').setStyle('display', 'block')), _0x1943fa;
	},
	'continueFun': function () {
		var _0xf15100 = this;
		_0xf15100.fireEvent('continue');
	}
});
Ext.define('ans.videojs.VideoImg', {
	'extend': 'Ext.Component',
	'xtype': 'videoimg',
	'renderTpl': [
		'<div class="sp_video_pic">',
		'<img src="{src}" class="sp_video_img" />',
		'<a class="sp_video_pic_dele" href="javascript:;"></a>',
		'</div>'
	],
	'renderSelectors': { 'closeEl': 'a.sp_video_pic_dele' },
	'afterRender': function () {
		var _0x47fd78 = this;
		_0x47fd78.callParent(arguments);
		_0x47fd78.el.on('click', function () {
			_0x47fd78.fireEvent('continue');
		});
		_0x47fd78.closeEl.on('click', function () {
			_0x47fd78.fireEvent('continue');
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
		var _0x1ecd3b = this, _0x3b04ae = _0x1ecd3b.contentEl;
		_0x1ecd3b.callParent(arguments);
		_0x1ecd3b.closeEl.on('click', function () {
			_0x1ecd3b.fireEvent('continue');
		});
		var _0x21877c = $(_0x3b04ae.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#e0e0e0',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x1ecd3b.scroller = _0x21877c;
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
		var _0x3c0c32 = this;
		_0x3c0c32.callParent(arguments);
		_0x3c0c32.pptPicEl.on('click', function (_0x1e5da0) {
			_0x1e5da0.stopPropagation();
			_0x3c0c32.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			if (_0x3c0c32.pptPicEl.hasCls('sp_ppt_pic_fullScreen')) {
				Ext.get('sp_size_big').setStyle('display', 'none');
				Ext.get('sp_size_small').setStyle('display', 'block');
				var _0x5bd1e9 = Ext.get('video').getStyle('height'), _0x87502d = Ext.get('sp_video_ppt_pic').getStyle('height'), _0x452379 = (parseInt(_0x5bd1e9) - 60 - parseInt(_0x87502d)) / 2;
				Ext.get('sp_video_ppt_pic').setStyle('top', _0x452379 + 'px');
				Ext.get('sp_video_ppt_pic').setStyle('left', '0');
			} else {
				Ext.get('sp_size_big').setStyle('display', 'block');
				Ext.get('sp_size_small').setStyle('display', 'none');
				Ext.get('sp_video_ppt_pic').setStyle('top', '0px');
				Ext.get('sp_video_ppt_pic').setStyle('left', '0px');
			}
		});
		_0x3c0c32.sizeBigEl.on('click', function (_0x2c837c) {
			_0x2c837c.stopPropagation();
			_0x3c0c32.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			Ext.get('sp_size_big').setStyle('display', 'none');
			Ext.get('sp_size_small').setStyle('display', 'block');
			var _0x3d65ed = Ext.get('video').getStyle('height'), _0x2d78ca = Ext.get('sp_video_ppt_pic').getStyle('height'), _0xba24da = (parseInt(_0x3d65ed) - 60 - parseInt(_0x2d78ca)) / 2;
			Ext.get('sp_video_ppt_pic').setStyle('top', _0xba24da + 'px');
			Ext.get('sp_video_ppt_pic').setStyle('left', '0');
		});
		_0x3c0c32.sizeSmallEl.on('click', function (_0x40e01c) {
			_0x40e01c.stopPropagation();
			_0x3c0c32.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
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
	'constructor': function (_0x487b3f) {
		var _0x4ca428 = this;
		_0x4ca428.callParent(arguments);
		_0x4ca428.bg = Ext.create('ans.videojs.TimelineObjectsBg', { 'renderTo': _0x487b3f.renderTo });
		_0x4ca428.objects = _0x487b3f.objects && _0x487b3f.objects.sort ? _0x4ca428.sort_(_0x487b3f.objects) : [];
		_0x4ca428.current = 0;
	},
	'showObject': function (_0x53fcad, _0x50830f, _0xa40922) {
		var _0x483f52 = this, _0x7e7e2d = _0x483f52.getBox(), _0x25e357 = _0x483f52.items.getAt(0), _0x532212, _0x50affc = function () {
			_0x532212.destroy();
			_0x483f52.hide();
			_0x53fcad.play();
		};
		_0x25e357 != null && _0x25e357.destroy();
		if (_0x50830f == 'IMG') {
			var _0x3c9362 = { 'src': _0xa40922.url.replace(/origin/, _0x7e7e2d.width + '_' + _0x7e7e2d.height) };
			_0x532212 = _0x483f52.add({
				'xtype': 'videoimg',
				'renderData': _0x3c9362
			});
		}
		if (_0x50830f == 'QUIZ') {
			var _0xb4e4c7 = function () {
			};
			if (_0xa40922.errorBackTime && _0xa40922.errorBackTime > 0) {
				var _0xf4be5c = _0xa40922.errorBackTime * 60;
				_0xb4e4c7 = function () {
					var _0x531bf3 = Math.max(_0x53fcad.currentTime() - _0xf4be5c, 0);
					_0x53fcad.switchStatus = true;
					_0x53fcad.currentTime(_0x531bf3);
				};
			}
			_0x532212 = _0x483f52.add({
				'xtype': 'videoquiz',
				'renderData': _0xa40922,
				'quizErrorReportUrl': _0x483f52.quizErrorReportUrl,
				'validationUrl2': _0x483f52.validationUrl2,
				'onerror': _0xb4e4c7
			});
		}
		if (_0x50830f == 'InteractiveQuiz') {
			var _0xb4e4c7 = function () {
			};
			if (_0xa40922.errorBackTime && _0xa40922.errorBackTime > 0) {
				var _0xf4be5c = _0xa40922.errorBackTime * 60;
				_0xb4e4c7 = function () {
					var _0x571a44 = Math.max(_0x53fcad.currentTime() - _0xf4be5c, 0);
					_0x53fcad.switchStatus = true;
					_0x53fcad.currentTime(_0x571a44);
				};
			}
			if (_0xa40922.errorBack == 1 && _0xa40922.eBstartPoint != '') {
				var _0xf4be5c = 0, _0x5c56e7 = _0xa40922.eBstartPoint.split(':'), _0x425211 = _0x5c56e7.length;
				_0x425211 > 0 && (_0x425211 == 1 ? _0xf4be5c = parseInt(_0x5c56e7[0]) * 60 : _0x425211 == 2 && (_0xf4be5c = parseInt(_0x5c56e7[0]) * 60 + parseInt(_0x5c56e7[1])));
				_0xb4e4c7 = function () {
					_0x53fcad.switchStatus = true;
					_0x53fcad.currentTime(_0xf4be5c);
				};
			}
			_0xa40922.dtype = 'InteractiveQuiz';
			_0x532212 = _0x483f52.add({
				'xtype': 'videoquiz',
				'renderData': _0xa40922,
				'quizErrorReportUrl': _0x483f52.quizErrorReportUrl,
				'validationUrl2': _0x483f52.validationUrl2,
				'quizRightCountUrl': _0x483f52.quizRightCountUrl,
				'onerror': _0xb4e4c7
			});
		}
		if (_0x50830f == 'PPT') {
			if (_0xa40922.fp == 0) {
				return;
			}
			var _0x30be07 = _0xa40922.url;
			_0xa40922.thumb ? _0x30be07 = _0xa40922.thumb + _0xa40922.pageNo + '.png' : _0x30be07 = _0x30be07.replace(/swfv2\/.*$/, 'thumb/' + _0xa40922.fp + '.png');
			var _0x3c9362 = { 'src': _0x30be07 };
			_0x532212 = _0x483f52.add({
				'xtype': 'videoppt',
				'renderData': _0x3c9362
			});
		}
		_0x50830f == 'SyncAnnotationEvent' && (_0x532212 = _0x483f52.add({
			'xtype': 'videoannotation',
			'renderData': _0xa40922
		}));
		if (!_0x532212) {
			return;
		}
		_0x532212.on('continue', function () {
			_0x50affc();
		});
		var _0x616042 = !(_0x532212.model === false);
		_0x483f52.showModel(_0x616042);
		_0x616042 && _0x53fcad.pause();
	},
	'showModel': function (_0x3612c8) {
		var _0x1438a8 = this;
		_0x1438a8.show();
		_0x3612c8 ? (_0x1438a8.removeCls('ans-timelineobjects-autosize'), _0x1438a8.setAutoScroll(true), _0x1438a8.bg.show()) : (_0x1438a8.addCls('ans-timelineobjects-autosize'), _0x1438a8.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
		this.bg.hide.apply(this.bg, arguments);
	},
	'updateTime': function (_0x5c4463, _0x2ab6ea) {
		if (this.current >= this.objects.length || _0x5c4463.scrubbing()) {
			return;
		}
		var _0x3de117 = this, _0x357b24 = _0x3de117.objects[_0x3de117.current], _0x361e07 = _0x357b24.style, _0x1ba52d = _0x357b24.datas[0];
		if (_0x2ab6ea >= _0x1ba52d.startTime) {
			_0x3de117.current++;
			_0x3de117.showObject(_0x5c4463, _0x361e07, _0x1ba52d);
		}
	},
	'resetTime': function (_0x311e54, _0x1bcad1) {
		var _0xd4fba6 = this, _0x36cbba;
		for (_0x36cbba = 0; _0x36cbba < _0xd4fba6.objects.length; _0x36cbba++) {
			var _0x2b5a55 = _0xd4fba6.objects[_0x36cbba].datas[0].startTime;
			if (_0x1bcad1 <= _0x2b5a55) {
				break;
			}
		}
		_0xd4fba6.current = _0x36cbba;
	},
	'sort_': function (_0x55dd4a) {
		return _0x55dd4a && _0x55dd4a.sort && _0x55dd4a.sort(function (_0x5d1ef8, _0x5a125e) {
			var _0xd47a85 = _0x5d1ef8.datas[0].startTime, _0x4f6cfe = _0x5a125e.datas[0].startTime;
			return _0xd47a85 - _0x4f6cfe;
		});
	}
});
(function () {
	var _0x968dd5 = videojs.getPlugin('plugin'), _0x162549 = videojs.extend(_0x968dd5, {
		'constructor': function (_0x337984, _0x2c6b36) {
			_0x968dd5.call(this, _0x337984, _0x2c6b36);
			if (!_0x2c6b36.url) {
				return;
			}
			var _0x16f2ea = this;
			_0x337984.eventPoints = [];
			Ext.Ajax.request({
				'url': _0x2c6b36.url,
				'async': false,
				'success': function (_0x3f472f) {
					if (_0x3f472f.status != 200) {
						return;
					}
					eval('var data=' + _0x3f472f.responseText);
					if (data && data.length > 0) {
						var _0x265923 = [];
						for (var _0x5a9e53 = 0; _0x5a9e53 < data.length; _0x5a9e53++) {
							var _0x5b7522 = data[_0x5a9e53];
							if (_0x5b7522.style == 'InteractiveQuiz') {
								var _0x4115f7 = _0x5b7522.datas;
								if (_0x4115f7 && _0x4115f7.length > 0) {
									var _0xdfc469 = {
										'time': _0x4115f7[0].startTime,
										'text': '互动测验'
									};
								}
								_0x265923.push(_0xdfc469);
							}
						}
						_0x337984.eventPoints = _0x265923;
					}
					var _0x1ae203 = Ext.create('ans.videojs.TimelineObjects', {
						'renderTo': _0x337984.el_,
						'quizErrorReportUrl': _0x2c6b36.quizErrorReportUrl,
						'validationUrl2': _0x2c6b36.validationUrl2,
						'quizRightCountUrl': _0x2c6b36.quizRightCountUrl,
						'objects': data
					});
					_0x337984.on('play', function () {
						_0x1ae203.resetTime(_0x337984, _0x337984.currentTime());
					});
					_0x337984.on('seekend', function () {
						_0x1ae203.resetTime(_0x337984, _0x337984.currentTime());
					});
					_0x337984.on('timeupdate', function () {
						!_0x337984.paused() && _0x1ae203.updateTime(_0x337984, _0x337984.currentTime());
					});
				}
			});
		}
	});
	videojs.registerPlugin('timelineObjects', _0x162549);
}());
(function () {
	var _0x3c86e0 = videojs.getPlugin('plugin'), _0x5e2223 = videojs.extend(_0x3c86e0, {
		'constructor': function (_0x56fb2e, _0x37a184) {
			_0x3c86e0.call(this, _0x56fb2e, _0x37a184);
			if (!_0x37a184.url) {
				return;
			}
			var _0x4b9b4f = this;
			Ext.Ajax.request({
				'url': _0x37a184.url,
				'async': false,
				'success': function (_0x350a11) {
					if (_0x350a11.status != 200) {
						return;
					}
					eval('var data=' + _0x350a11.responseText);
					if (!data.status) {
						return;
					}
					var _0x4d3138 = videojs('video');
					if (_0x4d3138 && typeof _0x4d3138.markers === 'function') {
						var _0x4bd73f = _0x56fb2e.eventPoints;
						_0x4bd73f.push.apply(_0x4bd73f, data.list);
						_0x4d3138.markers({
							'markerTip': {
								'display': true,
								'text': function (_0x2a70a6) {
									return _0x2a70a6.text;
								}
							},
							'markers': _0x4bd73f,
							'onMarkerClick': function (_0x289401) {
								if (_0x37a184.ff != 1) {
									return false;
								}
								var _0x1e8d97 = $(this).data('marker-key');
								return _0x56fb2e.currentTime(_0x289401.time), false;
							}
						});
					}
					if (data.list && data.list.length > 0) {
						var _0x2ede13 = [], _0x4dc646 = {
							_0x3af652: _0x3a2c1c,
							_0x3af652: _0x1cd981
						};
						for (var _0x277301 = 0; _0x277301 < data.list.length; _0x277301++) {
							var _0xb216a6 = data.list[_0x277301], _0x3af652 = _0xb216a6.text;
							if (!_0x4dc646[_0x3af652]) {
								var _0x3a2c1c = [];
								_0x3a2c1c.push(_0xb216a6);
								_0x2ede13.push(_0x3af652);
							} else {
								var _0x1cd981 = _0x4dc646[_0x3af652];
								_0x1cd981.push(_0xb216a6);
							}
						}
						function _0x38c8b6(_0xdee011) {
							var _0x434297 = '<div class="zsCloud_box"><h2 class="zsCloud_seltime">选择时间</h2><div class="zsCloud_div"><div class="zsCloud_div_list">';
							for (var _0x493647 = 0; _0x493647 < _0xdee011.length; _0x493647++) {
								var _0x20f57f = _0xdee011[_0x493647], _0x271915 = Ext.fly(_0x3c0add.elements[0]).select('.topicId' + _0x20f57f.topicid + ':not(.markertime)'), _0x278068 = videojs.formatTime(_0x20f57f.time);
								_0x271915 && _0x271915.elements[0] && _0x271915.elements[0].parentElement.remove();
								_0x434297 += '<div class="zsCloud_item topicId' + _0x20f57f.topicid + '" data-marker-time="' + _0x20f57f.time + '" title="' + _0x278068 + '" onclick="markersPlayer(this)">' + _0x278068 + '</div>';
							}
							return _0x434297 += '</div></div></div>', _0x434297;
						}
						Ext.select('.zsCloud').setStyle('display', 'block');
						var _0x3c0add = Ext.select('.zsCloud_ul');
						if (_0x3c0add && _0x3c0add.elements[0]) {
							var _0x4f9a66;
							for (var _0x546009 = 0; _0x546009 < _0x2ede13.length; _0x546009++) {
								var _0x749753 = _0x2ede13[_0x546009], _0x45d005 = _0x4dc646[_0x749753], _0x1d3d5b = '';
								if (_0x45d005) {
									if (_0x45d005.length == 1) {
										var _0x5dc4d1 = _0x45d005[0], _0x3f3e54 = Ext.fly(_0x3c0add.elements[0]).select('.topicId' + _0x5dc4d1.topicid + ':not(.markertime)'), _0x5af9e3 = videojs.formatTime(_0x5dc4d1.time);
										_0x3f3e54 && _0x3f3e54.elements[0] && _0x3f3e54.elements[0].parentElement.remove();
										_0x1d3d5b = '<li><span class=\'topicId' + _0x5dc4d1.topicid + ' markertime\' data-marker-time=\'' + _0x5dc4d1.time + '\' title=\'' + _0x5af9e3 + '\' onclick=\'markersPlayer(this)\'>' + _0x5dc4d1.text + '</span></li>';
									} else {
										_0x1d3d5b = '<li class="zsCloud_select"><span class="zsCloud_span">' + _0x749753 + '</span>';
										_0x45d005 && _0x45d005.length > 0 ? _0x1d3d5b += _0x38c8b6(_0x45d005) : _0x1d3d5b += '</li>';
									}
								}
								_0x4f9a66 ? _0x4f9a66 = Ext.DomHelper.insertHtml('afterEnd', _0x4f9a66.elements[0], _0x1d3d5b) : _0x4f9a66 = Ext.DomHelper.insertHtml('afterBegin', _0x3c0add.elements[0], _0x1d3d5b);
								_0x4f9a66 = Ext.fly(_0x4f9a66).select('');
							}
						}
						_0x37a184.videoTopicCloud && _0x37a184.videoTopicCloud == 1 && (Ext.select('.zsCloud_down').setStyle('display', 'block'), Ext.select('.zsCloud_body').setStyle('display', 'block'));
					}
					var _0x45b0df = new Map(), _0x39d347 = new Array();
					if (data.list && data.list.length > 0) {
						for (var _0x277301 = 0; _0x277301 < data.list.length; _0x277301++) {
							var _0x4ccbdb = data.list[_0x277301].topicid, _0x996a91 = _0x45b0df.get(_0x4ccbdb);
							!_0x996a91 && (_0x996a91 = {}, _0x996a91.text = data.list[_0x277301].text, _0x996a91.time = data.list[_0x277301].time, _0x996a91.topicid = data.list[_0x277301].topicid, _0x996a91.weight = 0, _0x996a91.html = {
								'data-marker-time': data.list[_0x277301].time,
								'onclick': 'markersPlayer(this)'
							}, _0x45b0df.set(_0x4ccbdb, _0x996a91), _0x39d347.push(_0x996a91));
							_0x996a91.weight += 1;
						}
					}
					$(function () {
						_0x39d347.length != 0 && $('#word_cloud').jQCloud(_0x39d347);
						function _0x5e9b5e(_0x2fe6d3) {
							$(_0x2fe6d3).niceScroll({
								'cursorborder': '',
								'cursorwidth': 8,
								'cursorcolor': '#DADFE6',
								'boxzoom': false,
								'autohidemode': true
							});
							setInterval(function () {
								$(_0x2fe6d3).getNiceScroll().resize();
							}, 300);
						}
						$('.zsCloud_box').each(function (_0x36ae11) {
							$(this).find('.zsCloud_div').attr('id', 'zsCloud_div_' + _0x36ae11);
							_0x5e9b5e('#zsCloud_div_' + _0x36ae11);
						});
					});
					$('.zsCloud_down').click(function () {
						var _0xaf9284 = $('.zsCloud_body');
						_0xaf9284.is(':visible') ? (_0xaf9284.hide(), $(this).addClass('zsCloud_up'), $(this).text('展开')) : (_0xaf9284.show(), $(this).removeClass('zsCloud_up'), $(this).text('收起'));
					});
				}
			});
		}
	});
	videojs.registerPlugin('marker', _0x5e2223);
}());
(function () {
	var _0x540ec4 = videojs.getPlugin('plugin'), _0x3d44a1 = videojs.extend(_0x540ec4, {
		'constructor': function (_0x2a620c, _0xbf25ab) {
			_0x540ec4.call(this, _0x2a620c, _0xbf25ab);
			var _0x23d768 = this, _0x4404e8 = _0xbf25ab.subtitleUrl, _0x2da1af = function (_0x2e8572) {
				var _0x435374 = _0x2e8572.match(/support\/(\w+).\w+/);
				if (_0x435374) {
					return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0x435374[1];
				}
			}, _0x424e10 = function (_0x5c4582, _0x5dca0, _0x10fa5e) {
				_0x2a620c.addRemoteTextTrack({
					'kind': 'subtitles',
					'srclang': 'cn',
					'label': _0x5c4582,
					'src': _0x5dca0,
					'default': _0x10fa5e
				}, true);
			};
			_0x2a620c.ready(function () {
				_0x4404e8 && Ext.Ajax.request({
					'url': _0x4404e8,
					'success': function (_0xa50644) {
						if (_0xa50644.status != 200) {
							return;
						}
						eval('var subs=' + _0xa50644.responseText);
						var _0x2123ad = 0, _0x1cd898 = 0;
						subs.length > 0 && Ext.each(subs, function (_0x1db91f) {
							_0xbf25ab.translate == 1 && _0x1db91f.name == 'English' ? (_0x1db91f.selected = true, _0x1cd898 = _0x2123ad) : _0x1db91f.selected = false;
							_0x424e10(_0x1db91f.name, _0x2da1af(_0x1db91f.url), _0x1db91f.selected);
							_0x2123ad++;
						});
						if (_0xbf25ab.translate == 1) {
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').setHTML('翻译');
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').addCls('vjs-hide-content');
						}
						setTimeout(function () {
							var _0x462a04 = _0x2a620c.textTracks();
							_0xbf25ab.translate == 1 ? _0x462a04 && _0x462a04[_0x1cd898] ? _0x462a04[_0x1cd898].mode = 'showing' : _0x462a04 && _0x462a04[0] && (_0x462a04[0].mode = 'showing') : _0x462a04 && _0x462a04[0] && (_0x462a04[0].mode = 'showing');
						}, 500);
					}
				});
				var _0x46ab35 = _0x2a620c.textTrackSettings;
				_0x46ab35.setValues({
					'backgroundColor': '#000',
					'backgroundOpacity': '0',
					'edgeStyle': 'uniform'
				});
				_0x46ab35.updateDisplay();
			});
		}
	});
	videojs.registerPlugin('subtitle', _0x3d44a1);
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
		var _0x13f32b = this;
		_0x13f32b.callParent(arguments);
		var _0x458808 = Ext.query('input', _0x13f32b.el.dom);
		Ext.each(_0x458808, function (_0x568005, _0x5cbdf4) {
			Ext.fly(_0x568005).on('click', function () {
				_0x13f32b.onSelected(_0x5cbdf4);
			});
		});
		try {
			typeof createVideoTask === 'function' ? createVideoTask() : console.log('createVideoTask函数不存在\uFF01');
		} catch (_0x1d3e06) {
		}
	},
	'setErrorMsg': function (_0x962544) {
		Ext.fly(this.errorMsgEl).setHTML(_0x962544);
	}
});
Ext.define('ans.videojs.ErrorNote', {
	'extend': 'Ext.Component',
	'cls': 'ans-vjserrdisplay',
	'renderTpl': ['<div class="ans-vjserrdisplay-title">播放出现异常\u3002</div>']
});
(function () {
	var _0x4e7e09 = videojs.getComponent('ErrorDisplay'), _0x59b2e5 = videojs.extend(_0x4e7e09, {
		'constructor': function (_0x1735c4, _0xb12972) {
			_0x4e7e09.call(this, _0x1735c4, _0xb12972);
		},
		'colse': function () {
			_0x4e7e09.prototype.colse.call(this);
			me.ansErrorDisplay && (me.ansErrorDisplay.destroy(), me.ansErrorDisplay = null);
		},
		'fill': function () {
			_0x4e7e09.prototype.fill.call(this);
			var _0x3ff9aa = this, _0x478a9e = _0x3ff9aa.player_, _0x2824cd = _0x478a9e.options_.playlines, _0x2b645d = Ext.query('.vjs-modal-dialog-content', _0x3ff9aa.el_)[0];
			_0x3ff9aa.ansErrorDisplay && (_0x3ff9aa.ansErrorDisplay.destroy(), delete _0x3ff9aa.ansErrorDisplay);
			if (!_0x478a9e.selectCDN || !_0x2824cd) {
				_0x3ff9aa.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', { 'renderTo': _0x3ff9aa.el_ });
				return;
			}
			var _0x369111 = _0x478a9e.currentPlayline(), _0x50b9ff = 0;
			Ext.each(_0x2824cd, function (_0x46a37b, _0x34d5f5) {
				_0x369111 == _0x46a37b && (_0x50b9ff = _0x34d5f5);
			});
			_0x3ff9aa.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
				'renderTo': _0x3ff9aa.el_,
				'onSelected': function (_0x24d50b) {
					_0x478a9e.selectCDN(_0x24d50b);
					_0x3ff9aa.close();
				},
				'renderData': {
					'playlines': _0x2824cd,
					'errorMsg': _0x3ff9aa.content(),
					'selectedIndex': _0x50b9ff
				}
			});
		}
	});
	videojs.registerComponent('ErrorDisplay', _0x59b2e5);
}());
(function () {
	var _0x28704c = null;
	typeof window.videojs === 'undefined' && typeof require === 'function' ? _0x28704c = require('video.js') : _0x28704c = window.videojs;
	(function (_0x17c11d, _0x5c0e30) {
		var _0x1c2598 = {}, _0x196cd9, _0x438ba7 = {}, _0x432dc4 = {};
		function _0x131eef(_0x375f7f, _0x4ea8cf, _0x7ef0a3, _0x1de3ff) {
			_0x438ba7 = {
				'label': _0x7ef0a3,
				'sources': _0x4ea8cf
			};
			if (typeof _0x1de3ff === 'function') {
				return _0x1de3ff(_0x375f7f, _0x4ea8cf, _0x7ef0a3);
			}
			return _0x375f7f.src(_0x4ea8cf.map(function (_0x5e0f00) {
				return {
					'src': _0x5e0f00.src,
					'type': _0x5e0f00.type,
					'res': _0x5e0f00.res
				};
			})), _0x375f7f;
		}
		var _0x54a905 = _0x5c0e30.getComponent('MenuItem'), _0x212212 = _0x5c0e30.extend(_0x54a905, {
			'constructor': function (_0x46e70a, _0x267baf, _0x37aa62, _0x2f82b9) {
				this.onClickListener = _0x37aa62;
				this.label = _0x2f82b9;
				_0x54a905.call(this, _0x46e70a, _0x267baf);
				this.src = _0x267baf.src;
				this.on('click', this.onClick);
				this.on('touchstart', this.onClick);
				_0x267baf.initialySelected && (this.showAsLabel(), this.selected(true), this.addClass('vjs-selected'));
			},
			'showAsLabel': function () {
				this.label && (this.label.innerHTML = this.options_.label);
			},
			'onClick': function (_0x55ef49) {
				this.onClickListener(this);
				var _0x599c30 = this.player_.currentTime(), _0x3f2f6e = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x3f2f6e && this.player_.bigPlayButton.hide();
				typeof _0x55ef49 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x55ef49 = this.options_.customSourcePicker);
				var _0x886eae = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x886eae = 'timeupdate');
				_0x131eef(this.player_, this.src, this.options_.label, _0x55ef49).one(_0x886eae, function () {
					var _0x86f8d9 = this.player_;
					_0x86f8d9.switchStatus = true;
					_0x86f8d9.currentTime(_0x599c30);
					!_0x3f2f6e && _0x86f8d9.play();
					_0x86f8d9.trigger('resolutionchange');
				});
			}
		});
		_0x5c0e30.registerComponent('ResolutionMenuItem', _0x212212);
		var _0x40f346 = _0x5c0e30.getComponent('MenuButton'), _0x1d23b5 = _0x5c0e30.extend(_0x40f346, {
			'constructor': function (_0x173827, _0x37b4cd, _0xd2d1a0, _0x30fde2) {
				this.sources = _0x37b4cd.sources;
				this.label = _0x30fde2;
				this.label.innerHTML = _0x37b4cd.initialySelectedLabel;
				_0x40f346.call(this, _0x173827, _0x37b4cd, _0xd2d1a0);
				this.controlText('Quality');
				if (_0xd2d1a0.dynamicLabel) {
					this.el().appendChild(_0x30fde2);
				} else {
					var _0x1188be = document.createElement('span');
					_0x5c0e30.dom.addClass(_0x1188be, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x1188be);
				}
			},
			'createItems': function () {
				var _0x42954e = [], _0x4be203 = this.sources && this.sources.label || {}, _0x349d2a = function (_0x1f3ae5) {
					_0x42954e.map(function (_0x542b30) {
						_0x542b30.selected(_0x542b30 === _0x1f3ae5);
						_0x542b30.removeClass('vjs-selected');
					});
				};
				for (var _0x52a2ab in _0x4be203) {
					_0x4be203.hasOwnProperty(_0x52a2ab) && (_0x42954e.push(new _0x212212(this.player_, {
						'label': _0x52a2ab,
						'src': _0x4be203[_0x52a2ab],
						'initialySelected': _0x52a2ab === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x349d2a, this.label)), _0x432dc4[_0x52a2ab] = _0x42954e[_0x42954e.length - 1]);
				}
				return _0x42954e;
			}
		});
		_0x196cd9 = function (_0xb4d96) {
			var _0x22f0e2 = _0x5c0e30.mergeOptions(_0x1c2598, _0xb4d96), _0x1f1834 = this, _0x41e8c0 = document.createElement('span'), _0x3ae7c9 = {};
			_0x5c0e30.dom.addClass(_0x41e8c0, 'vjs-resolution-button-label');
			_0x1f1834.updateSrc = function (_0x2157dc) {
				if (!_0x2157dc) {
					return _0x1f1834.src();
				}
				_0x1f1834.controlBar.resolutionSwitcher && (_0x1f1834.controlBar.resolutionSwitcher.dispose(), delete _0x1f1834.controlBar.resolutionSwitcher);
				_0x2157dc = _0x2157dc.sort(_0x238ef8);
				_0x3ae7c9 = _0x3d93f6(_0x2157dc);
				var _0x5e04f5 = _0x101106(_0x3ae7c9, _0x2157dc), _0x3ebeec = new _0x1d23b5(_0x1f1834, {
					'sources': _0x3ae7c9,
					'initialySelectedLabel': _0x5e04f5.label,
					'initialySelectedRes': _0x5e04f5.res,
					'customSourcePicker': _0x22f0e2.customSourcePicker
				}, _0x22f0e2, _0x41e8c0);
				return _0x5c0e30.dom.addClass(_0x3ebeec.el(), 'vjs-resolution-button'), _0x1f1834.controlBar.resolutionSwitcher = _0x1f1834.controlBar.el_.insertBefore(_0x3ebeec.el_, _0x1f1834.controlBar.getChild('fullscreenToggle').el_), _0x1f1834.controlBar.resolutionSwitcher.dispose = function () {
					this.parentNode.removeChild(this);
				}, _0x131eef(_0x1f1834, _0x5e04f5.sources, _0x5e04f5.label, _0x22f0e2.customSourcePicker);
			};
			_0x1f1834.currentResolution = function (_0x34f642, _0x2e3b78) {
				if (_0x34f642 == null) {
					return _0x438ba7;
				}
				return _0x432dc4[_0x34f642] != null && _0x432dc4[_0x34f642].onClick(_0x2e3b78), _0x1f1834;
			};
			_0x1f1834.getGroupedSrc = function () {
				return _0x3ae7c9;
			};
			function _0x238ef8(_0x5d9a2c, _0x1fabe4) {
				if (!_0x5d9a2c.res || !_0x1fabe4.res) {
					return 0;
				}
				return +_0x1fabe4.res - +_0x5d9a2c.res;
			}
			function _0x3d93f6(_0x349f3b) {
				var _0x5875a6 = {
					'label': {},
					'res': {},
					'type': {}
				};
				return _0x349f3b.map(function (_0x498ee4) {
					_0x1b4c85(_0x5875a6, 'label', _0x498ee4);
					_0x1b4c85(_0x5875a6, 'res', _0x498ee4);
					_0x1b4c85(_0x5875a6, 'type', _0x498ee4);
					_0xaac076(_0x5875a6, 'label', _0x498ee4);
					_0xaac076(_0x5875a6, 'res', _0x498ee4);
					_0xaac076(_0x5875a6, 'type', _0x498ee4);
				}), _0x5875a6;
			}
			function _0x1b4c85(_0x1d05ff, _0xe1782b, _0x222c10) {
				_0x1d05ff[_0xe1782b][_0x222c10[_0xe1782b]] == null && (_0x1d05ff[_0xe1782b][_0x222c10[_0xe1782b]] = []);
			}
			function _0xaac076(_0x10c2ca, _0x3e83cc, _0x4c508e) {
				_0x10c2ca[_0x3e83cc][_0x4c508e[_0x3e83cc]].push(_0x4c508e);
			}
			function _0x101106(_0x17d859, _0x4dcce7) {
				var _0x2a4292 = _0x22f0e2.default, _0x332b35 = '';
				return _0x2a4292 === 'high' ? (_0x2a4292 = _0x4dcce7[0].res, _0x332b35 = _0x4dcce7[0].label) : _0x2a4292 === 'low' || _0x2a4292 == null || !_0x17d859.res[_0x2a4292] ? (_0x2a4292 = _0x4dcce7[_0x4dcce7.length - 1].res, _0x332b35 = _0x4dcce7[_0x4dcce7.length - 1].label) : _0x17d859.res[_0x2a4292] && (_0x332b35 = _0x17d859.res[_0x2a4292][0].label), {
					'res': _0x2a4292,
					'label': _0x332b35,
					'sources': _0x17d859.res[_0x2a4292]
				};
			}
			_0x1f1834.ready(function () {
				_0x1f1834.options_.sources.length > 0 && _0x1f1834.setTimeout(function () {
					_0x1f1834.updateSrc(_0x1f1834.options_.sources);
				}, 1);
			});
		};
		_0x5c0e30.registerPlugin('videoJsResolutionSwitcher', _0x196cd9);
	}(window, _0x28704c));
}());
(function () {
	(function (_0x59a894, _0x19a07f) {
		var _0x5b7f46 = {}, _0x258f56, _0x3a68cf = {}, _0x3aa18d = { _0xbfcb73: _0x374161[_0x374161.length - 1] };
		function _0x386693(_0x2b5c47, _0x1d2565, _0x402192, _0x2038e1) {
			_0x3a68cf = _0x1d2565;
			if (typeof _0x2038e1 === 'function') {
				return _0x2038e1(_0x2b5c47, _0x1d2565, _0x402192);
			}
			return _0x2b5c47;
		}
		var _0x20efac = _0x19a07f.getComponent('ResolutionMenuItem'), _0xc6fafc = _0x19a07f.extend(_0x20efac, {
			'onClick': function (_0x31ee56) {
				this.onClickListener(this);
				var _0x32f3a0 = this.player_.currentTime(), _0x322dad = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x322dad && this.player_.bigPlayButton.hide();
				typeof _0x31ee56 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x31ee56 = this.options_.customSourcePicker);
				var _0x57f2c7 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x57f2c7 = 'timeupdate');
				var _0x5c026e = _0x386693(this.player_, this.src, this.options_.label, _0x31ee56);
				_0x5c026e && _0x5c026e.one(_0x57f2c7, function () {
					_0x5c026e.switchStatus = true;
					_0x5c026e.currentTime(_0x32f3a0);
					!_0x322dad && _0x5c026e.play();
					_0x5c026e.trigger('playlinechange');
				});
			}
		}), _0x294976 = _0x19a07f.getComponent('MenuButton'), _0xd16347 = _0x19a07f.extend(_0x294976, {
			'constructor': function (_0x17dd16, _0x30253a, _0x3f3d94, _0x4cd5cb) {
				this.playlines = _0x30253a.playlines;
				this.label = _0x4cd5cb;
				this.label.innerHTML = _0x30253a.initialySelectedLabel;
				_0x294976.call(this, _0x17dd16, _0x30253a, _0x3f3d94);
				this.controlText('Playline');
				if (_0x3f3d94.dynamicLabel) {
					this.el().appendChild(_0x4cd5cb);
				} else {
					var _0x5856bf = document.createElement('span');
					_0x19a07f.addClass(_0x5856bf, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x5856bf);
				}
			},
			'createItems': function () {
				var _0x374161 = [], _0x5b590e = this.playlines || [], _0x3dee6c = function (_0x50564e) {
					_0x374161.map(function (_0x5eb4bc) {
						_0x5eb4bc.selected(_0x5eb4bc === _0x50564e);
						_0x5eb4bc.removeClass('vjs-selected');
					});
				};
				for (var _0x1f4166 = 0; _0x1f4166 < _0x5b590e.length; _0x1f4166++) {
					var _0xbfcb73 = _0x5b590e[_0x1f4166].label;
					_0x374161.push(new _0xc6fafc(this.player_, {
						'label': _0xbfcb73,
						'src': _0x5b590e[_0x1f4166],
						'initialySelected': _0xbfcb73 === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x3dee6c, this.label));
				}
				return _0x374161;
			}
		});
		_0x258f56 = function (_0x38b7d2) {
			var _0x591ed5 = _0x19a07f.mergeOptions(_0x5b7f46, _0x38b7d2), _0x1ba08a = this, _0x162c67 = document.createElement('span'), _0x22a570 = _0x1ba08a.options_.playlines;
			_0x19a07f.dom.addClass(_0x162c67, 'vjs-resolution-button-label');
			var _0x167954 = new _0xd16347(_0x1ba08a, {
				'playlines': _0x22a570,
				'initialySelectedLabel': _0x22a570[0].label,
				'initialySelectedUrl': _0x22a570[0].url,
				'customSourcePicker': _0x591ed5.customSourcePicker
			}, _0x591ed5, _0x162c67);
			_0x19a07f.dom.addClass(_0x167954.el(), 'vjs-resolution-button');
			_0x19a07f.dom.addClass(_0x167954.el(), 'vjs-playline-button');
			_0x167954.show();
			_0x1ba08a.selectCDN = function (_0x2c0e40) {
				_0x167954.items[_0x2c0e40].onClick(_0x591ed5.customSourcePicker);
				_0x1ba08a.play();
			};
			_0x22a570.length > 0 && (_0x3a68cf = _0x22a570[0]);
			_0x1ba08a.currentPlayline = function () {
				return _0x3a68cf;
			};
			_0x1ba08a.ready(function () {
				_0x1ba08a.controlBar.videoJsPlayLine = _0x1ba08a.controlBar.el_.insertBefore(_0x167954.el_, _0x1ba08a.controlBar.getChild('fullscreenToggle').el_);
				_0x1ba08a.controlBar.videoJsPlayLine.dispose = function () {
					this.parentNode.removeChild(this);
				};
			});
		};
		_0x19a07f.registerPlugin('videoJsPlayLine', _0x258f56);
	}(window, videojs));
}());
Ext.define('ans.AudioJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0xe30dec) {
		_0xe30dec = _0xe30dec || {};
		var _0x3d63fb = this;
		_0x3d63fb.addEvents(['seekstart']);
		_0x3d63fb.mixins.observable.constructor.call(_0x3d63fb, _0xe30dec);
		var _0x5a405a = videojs(_0xe30dec.videojs, _0x3d63fb.params2VideoOpt(_0xe30dec.params), function () {
		});
		Ext.fly(_0xe30dec.videojs).on('contextmenu', function (_0x1f22ba) {
			_0x1f22ba.preventDefault();
		});
		Ext.fly(_0xe30dec.videojs).on('keydown', function (_0x3f5c3d) {
			(_0x3f5c3d.keyCode == 32 || _0x3f5c3d.keyCode == 37 || _0x3f5c3d.keyCode == 39) && _0x3f5c3d.preventDefault();
		});
	},
	'params2VideoOpt': function (_0x213855) {
		var _0xcc5cb7 = [];
		!_0x213855.rootPath && (_0x213855.rootPath = '');
		_0x213855.http && _0xcc5cb7.push({
			'src': _0x213855.http,
			'type': 'audio/mp3'
		});
		var _0x4987c7 = function (_0x5ea90e, _0x4bf588, _0x10fcea) {
			var _0x57b874 = this;
			!_0x57b874.logCount && (_0x57b874.logCount = 0);
			videojs.xhr({
				'uri': _0x4bf588,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x2ce7bf, _0x101899) {
				_0x57b874.logCount++;
				if (_0x101899.statusCode == 200) {
					_0x57b874.logCount = 0;
					if (_0x101899.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x101899.body);
					d.isPassed && _0x10fcea();
					return;
				}
				if (_0x57b874.logCount >= 4) {
					_0x57b874.logCount = 0;
					_0x5ea90e.pause();
					_0x101899.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x101899.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x939bd4 = function (_0x362a8e, _0x20a0e9, _0x4a8eb4, _0x4b2b53) {
			if (!_0x213855.reportUrl) {
				return;
			}
			var _0x30a49c = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x3ea1c7 = (_0x213855.startTime || '0') + '_' + (_0x213855.endTime || _0x213855.duration), _0x40b6ba = 0, _0x3ba61b;
			_0x4a8eb4.toString().indexOf('-') != -1 ? (_0x3ba61b = _0x4a8eb4.split('-'), _0x3ba61b.length == 2 && (_0x40b6ba = parseInt(_0x3ba61b[1]) * 1000)) : _0x40b6ba = _0x4a8eb4 * 1000;
			if (_0x40b6ba == _0x213855.duration * 1000 && _0x20a0e9 == 2) {
				return;
			}
			var _0xfc601d = Ext.String.format(_0x30a49c, _0x213855.clazzId, _0x213855.userid, _0x213855.jobid ? _0x213855.jobid : '', _0x213855.objectId, _0x40b6ba, 'd_yHJ!$pdA~5', _0x213855.duration * 1000, _0x3ea1c7), _0x2b6173 = [
				_0x213855.reportUrl,
				'/',
				_0x213855.dtoken,
				'?clazzId=',
				_0x213855.clazzId,
				'&playingTime=',
				_0x4a8eb4,
				'&duration=',
				_0x213855.duration,
				'&clipTime=',
				_0x3ea1c7,
				'&objectId=',
				_0x213855.objectId,
				'&otherInfo=',
				_0x213855.otherInfo,
				'&jobid=',
				_0x213855.jobid,
				'&userid=',
				_0x213855.userid,
				'&isdrag=',
				_0x20a0e9,
				'&view=pc',
				'&enc=',
				md5(_0xfc601d),
				'&rt=',
				_0x213855.rt,
				'&dtype=Audio',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x4987c7(_0x362a8e, _0x2b6173, _0x4b2b53);
		};
		return {
			'language': 'zh-CN',
			'controls': true,
			'preload': 'auto',
			'bigPlayButton': false,
			'sources': _0xcc5cb7,
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
				'audioNote': { 'title': _0x213855.filename },
				'studyControl': { 'enableSwitchWindow': 1 },
				'seekBarControl': {
					'headOffset': _0x213855.headOffset,
					'enableFastForward': _0x213855.enableFastForward,
					'isSendLog': true,
					'reportTimeInterval': _0x213855.reportTimeInterval,
					'sendLog': function (_0xd41367, _0x473561, _0x45d458) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x3fa715 = 0;
						switch (_0x473561) {
							case 'play':
								_0x3fa715 = 3;
								break;
							case 'pause':
								_0x3fa715 = 2;
								break;
							case 'ended':
								_0x3fa715 = 4;
								break;
						}
						_0x939bd4(_0xd41367, _0x3fa715, _0x45d458, function () {
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
	var _0x160277 = videojs.getPlugin('plugin'), _0x36bb5d = videojs.extend(_0x160277, {
		'constructor': function (_0x507a08, _0x2e1a64) {
			_0x160277.call(this, _0x507a08, _0x2e1a64);
			Ext.create('ans.videojs.AudioNote', {
				'renderTo': _0x507a08.el_,
				'html': _0x2e1a64.title
			});
		}
	});
	videojs.registerPlugin('audioNote', _0x36bb5d);
}());