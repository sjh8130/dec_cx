Ext.define('ananas.ServerHosts', {
	'alternateClassName': 'ServerHosts',
	'singleton': true,
	'constructor': function () {
		var _0x49ba1e = this;
		_0x49ba1e.callParent(arguments);
		var _0x353624 = document.domain;
		try {
			_0x49ba1e.MASTER_HOST = location.protocol + '//' + top.location.host;
		} catch (_0x51e414) {
			_0x49ba1e.MASTER_HOST = location.protocol + '//' + location.host;
		}
		try {
			_0x49ba1e.PARENT_HOST = parent.location.host !== '' ? location.protocol + '//' + parent.location.host : _0x49ba1e.MASTER_HOST;
		} catch (_0x3b460d) {
			_0x49ba1e.PARENT_HOST = location.protocol + '//' + location.host;
		}
		_0x49ba1e.P_HOST = location.protocol + '//p.ananas.chaoxing.com';
		_0x49ba1e.s1_HOST = location.protocol + '//s1.ananas.chaoxing.com';
		_0x49ba1e.s2_HOST = location.protocol + '//s2.ananas.chaoxing.com';
		_0x49ba1e.CLOUD_HOST = 'http://cloud.ananas.' + _0x353624;
		_0x49ba1e.NEW_CLOUD_HOST = location.protocol + '//pan-yz.chaoxing.com';
		_0x49ba1e.CS_HOST = location.protocol + '//cs.ananas.' + _0x353624;
		_0x49ba1e.FANYA_HOST = 'http://course.fanya.' + _0x353624;
		_0x49ba1e.PAN_HOST = 'http://pan.ananas.' + _0x353624;
		_0x49ba1e.CXLIVE_HOST = 'http://cxlive.' + _0x353624;
		_0x49ba1e.ERYA_TSK_HOST = 'http://erya.tsk.' + _0x353624;
		_0x49ba1e.QUESTIONNAIRE_HOST = 'http://surveyapp.fy.' + _0x353624;
		_0x49ba1e.FX_HOST = 'http://www.' + _0x353624;
		_0x49ba1e.PHONE_ZT_HOST = 'https://special.rhky.com';
		_0x49ba1e.CHAOXING_CLASS_HOST = 'https://k.chaoxing.com';
		_0x49ba1e.LIVE_HOST = location.protocol + '//live.chaoxing.com';
		_0x49ba1e.APPCD_HOST = location.protocol + '//appcd.chaoxing.com';
		_0x49ba1e.ZHIBO_HOST = 'https://zhibo.chaoxing.com';
		_0x49ba1e.CXCLASSTASL_HOST = location.protocol + '//noteyd.chaoxing.com';
	}
});
(function (_0x483ba3) {
	function _0x23424c(_0x125a66, _0x47c496) {
		var _0x511d0b = (_0x125a66 & 65535) + (_0x47c496 & 65535), _0x41555f = (_0x125a66 >> 16) + (_0x47c496 >> 16) + (_0x511d0b >> 16);
		return _0x41555f << 16 | _0x511d0b & 65535;
	}
	function _0x58de91(_0x5eed85, _0x33ea66) {
		return _0x5eed85 << _0x33ea66 | _0x5eed85 >>> 32 - _0x33ea66;
	}
	function _0x4810ea(_0x45842d, _0x4d0434, _0x4159b, _0x4ee8f9, _0x57fa14, _0x297139) {
		return _0x23424c(_0x58de91(_0x23424c(_0x23424c(_0x4d0434, _0x45842d), _0x23424c(_0x4ee8f9, _0x297139)), _0x57fa14), _0x4159b);
	}
	function _0x35b2e4(_0x22619b, _0x548335, _0x59a67b, _0x282cf8, _0x20b617, _0x50ffb8, _0x1ad46e) {
		return _0x4810ea(_0x548335 & _0x59a67b | ~_0x548335 & _0x282cf8, _0x22619b, _0x548335, _0x20b617, _0x50ffb8, _0x1ad46e);
	}
	function _0x5b0250(_0x11c4fb, _0x1a1a05, _0x4b9ac9, _0x2fbf50, _0xe449a8, _0x516201, _0x150e0f) {
		return _0x4810ea(_0x1a1a05 & _0x2fbf50 | _0x4b9ac9 & ~_0x2fbf50, _0x11c4fb, _0x1a1a05, _0xe449a8, _0x516201, _0x150e0f);
	}
	function _0x347075(_0xa565ea, _0x408a2a, _0x5461bb, _0x9ebdba, _0x164561, _0x2b0f94, _0x26cd9b) {
		return _0x4810ea(_0x408a2a ^ _0x5461bb ^ _0x9ebdba, _0xa565ea, _0x408a2a, _0x164561, _0x2b0f94, _0x26cd9b);
	}
	function _0xd5374e(_0x42aa8e, _0x49779a, _0x28261a, _0x3be0ae, _0x497317, _0x3bd0ad, _0xfd663e) {
		return _0x4810ea(_0x28261a ^ (_0x49779a | ~_0x3be0ae), _0x42aa8e, _0x49779a, _0x497317, _0x3bd0ad, _0xfd663e);
	}
	function _0x2fb118(_0x1472dd, _0x5c26c9) {
		_0x1472dd[_0x5c26c9 >> 5] |= 128 << _0x5c26c9 % 32;
		_0x1472dd[(_0x5c26c9 + 64 >>> 9 << 4) + 14] = _0x5c26c9;
		var _0x2e605b, _0x2e838f, _0x491818, _0x559466, _0x2260be, _0x5f5dd5 = 1732584193, _0x4a3aa5 = -271733879, _0x2eb9e4 = -1732584194, _0x58184c = 271733878;
		for (_0x2e605b = 0; _0x2e605b < _0x1472dd.length; _0x2e605b += 16) {
			_0x2e838f = _0x5f5dd5;
			_0x491818 = _0x4a3aa5;
			_0x559466 = _0x2eb9e4;
			_0x2260be = _0x58184c;
			_0x5f5dd5 = _0x35b2e4(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b], 7, -680876936);
			_0x58184c = _0x35b2e4(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b + 1], 12, -389564586);
			_0x2eb9e4 = _0x35b2e4(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 2], 17, 606105819);
			_0x4a3aa5 = _0x35b2e4(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b + 3], 22, -1044525330);
			_0x5f5dd5 = _0x35b2e4(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b + 4], 7, -176418897);
			_0x58184c = _0x35b2e4(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b + 5], 12, 1200080426);
			_0x2eb9e4 = _0x35b2e4(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 6], 17, -1473231341);
			_0x4a3aa5 = _0x35b2e4(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b + 7], 22, -45705983);
			_0x5f5dd5 = _0x35b2e4(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b + 8], 7, 1770035416);
			_0x58184c = _0x35b2e4(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b + 9], 12, -1958414417);
			_0x2eb9e4 = _0x35b2e4(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 10], 17, -42063);
			_0x4a3aa5 = _0x35b2e4(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b + 11], 22, -1990404162);
			_0x5f5dd5 = _0x35b2e4(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b + 12], 7, 1804603682);
			_0x58184c = _0x35b2e4(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b + 13], 12, -40341101);
			_0x2eb9e4 = _0x35b2e4(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 14], 17, -1502002290);
			_0x4a3aa5 = _0x35b2e4(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b + 15], 22, 1236535329);
			_0x5f5dd5 = _0x5b0250(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b + 1], 5, -165796510);
			_0x58184c = _0x5b0250(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b + 6], 9, -1069501632);
			_0x2eb9e4 = _0x5b0250(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 11], 14, 643717713);
			_0x4a3aa5 = _0x5b0250(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b], 20, -373897302);
			_0x5f5dd5 = _0x5b0250(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b + 5], 5, -701558691);
			_0x58184c = _0x5b0250(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b + 10], 9, 38016083);
			_0x2eb9e4 = _0x5b0250(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 15], 14, -660478335);
			_0x4a3aa5 = _0x5b0250(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b + 4], 20, -405537848);
			_0x5f5dd5 = _0x5b0250(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b + 9], 5, 568446438);
			_0x58184c = _0x5b0250(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b + 14], 9, -1019803690);
			_0x2eb9e4 = _0x5b0250(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 3], 14, -187363961);
			_0x4a3aa5 = _0x5b0250(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b + 8], 20, 1163531501);
			_0x5f5dd5 = _0x5b0250(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b + 13], 5, -1444681467);
			_0x58184c = _0x5b0250(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b + 2], 9, -51403784);
			_0x2eb9e4 = _0x5b0250(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 7], 14, 1735328473);
			_0x4a3aa5 = _0x5b0250(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b + 12], 20, -1926607734);
			_0x5f5dd5 = _0x347075(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b + 5], 4, -378558);
			_0x58184c = _0x347075(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b + 8], 11, -2022574463);
			_0x2eb9e4 = _0x347075(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 11], 16, 1839030562);
			_0x4a3aa5 = _0x347075(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b + 14], 23, -35309556);
			_0x5f5dd5 = _0x347075(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b + 1], 4, -1530992060);
			_0x58184c = _0x347075(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b + 4], 11, 1272893353);
			_0x2eb9e4 = _0x347075(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 7], 16, -155497632);
			_0x4a3aa5 = _0x347075(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b + 10], 23, -1094730640);
			_0x5f5dd5 = _0x347075(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b + 13], 4, 681279174);
			_0x58184c = _0x347075(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b], 11, -358537222);
			_0x2eb9e4 = _0x347075(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 3], 16, -722521979);
			_0x4a3aa5 = _0x347075(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b + 6], 23, 76029189);
			_0x5f5dd5 = _0x347075(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b + 9], 4, -640364487);
			_0x58184c = _0x347075(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b + 12], 11, -421815835);
			_0x2eb9e4 = _0x347075(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 15], 16, 530742520);
			_0x4a3aa5 = _0x347075(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b + 2], 23, -995338651);
			_0x5f5dd5 = _0xd5374e(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b], 6, -198630844);
			_0x58184c = _0xd5374e(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b + 7], 10, 1126891415);
			_0x2eb9e4 = _0xd5374e(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 14], 15, -1416354905);
			_0x4a3aa5 = _0xd5374e(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b + 5], 21, -57434055);
			_0x5f5dd5 = _0xd5374e(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b + 12], 6, 1700485571);
			_0x58184c = _0xd5374e(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b + 3], 10, -1894986606);
			_0x2eb9e4 = _0xd5374e(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 10], 15, -1051523);
			_0x4a3aa5 = _0xd5374e(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b + 1], 21, -2054922799);
			_0x5f5dd5 = _0xd5374e(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b + 8], 6, 1873313359);
			_0x58184c = _0xd5374e(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b + 15], 10, -30611744);
			_0x2eb9e4 = _0xd5374e(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 6], 15, -1560198380);
			_0x4a3aa5 = _0xd5374e(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b + 13], 21, 1309151649);
			_0x5f5dd5 = _0xd5374e(_0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x58184c, _0x1472dd[_0x2e605b + 4], 6, -145523070);
			_0x58184c = _0xd5374e(_0x58184c, _0x5f5dd5, _0x4a3aa5, _0x2eb9e4, _0x1472dd[_0x2e605b + 11], 10, -1120210379);
			_0x2eb9e4 = _0xd5374e(_0x2eb9e4, _0x58184c, _0x5f5dd5, _0x4a3aa5, _0x1472dd[_0x2e605b + 2], 15, 718787259);
			_0x4a3aa5 = _0xd5374e(_0x4a3aa5, _0x2eb9e4, _0x58184c, _0x5f5dd5, _0x1472dd[_0x2e605b + 9], 21, -343485551);
			_0x5f5dd5 = _0x23424c(_0x5f5dd5, _0x2e838f);
			_0x4a3aa5 = _0x23424c(_0x4a3aa5, _0x491818);
			_0x2eb9e4 = _0x23424c(_0x2eb9e4, _0x559466);
			_0x58184c = _0x23424c(_0x58184c, _0x2260be);
		}
		return [
			_0x5f5dd5,
			_0x4a3aa5,
			_0x2eb9e4,
			_0x58184c
		];
	}
	function _0x27c9e3(_0x5547cc) {
		var _0xc1f6d7, _0x14cd9c = '', _0x37df5a = _0x5547cc.length * 32;
		for (_0xc1f6d7 = 0; _0xc1f6d7 < _0x37df5a; _0xc1f6d7 += 8) {
			_0x14cd9c += String.fromCharCode(_0x5547cc[_0xc1f6d7 >> 5] >>> _0xc1f6d7 % 32 & 255);
		}
		return _0x14cd9c;
	}
	function _0x176829(_0x4a83a7) {
		var _0x3cbd2c, _0x170b95 = [];
		_0x170b95[(_0x4a83a7.length >> 2) - 1] = undefined;
		for (_0x3cbd2c = 0; _0x3cbd2c < _0x170b95.length; _0x3cbd2c += 1) {
			_0x170b95[_0x3cbd2c] = 0;
		}
		var _0x203bee = _0x4a83a7.length * 8;
		for (_0x3cbd2c = 0; _0x3cbd2c < _0x203bee; _0x3cbd2c += 8) {
			_0x170b95[_0x3cbd2c >> 5] |= (_0x4a83a7.charCodeAt(_0x3cbd2c / 8) & 255) << _0x3cbd2c % 32;
		}
		return _0x170b95;
	}
	function _0x4f43f5(_0x3926b8) {
		return _0x27c9e3(_0x2fb118(_0x176829(_0x3926b8), _0x3926b8.length * 8));
	}
	function _0x282f2a(_0x203745, _0x6e2c1d) {
		var _0x25498c, _0x45a17d = _0x176829(_0x203745), _0xa6aa4f = [], _0x46bf42 = [], _0xe6ba99;
		_0xa6aa4f[15] = _0x46bf42[15] = undefined;
		_0x45a17d.length > 16 && (_0x45a17d = _0x2fb118(_0x45a17d, _0x203745.length * 8));
		for (_0x25498c = 0; _0x25498c < 16; _0x25498c += 1) {
			_0xa6aa4f[_0x25498c] = _0x45a17d[_0x25498c] ^ 909522486;
			_0x46bf42[_0x25498c] = _0x45a17d[_0x25498c] ^ 1549556828;
		}
		return _0xe6ba99 = _0x2fb118(_0xa6aa4f.concat(_0x176829(_0x6e2c1d)), 512 + _0x6e2c1d.length * 8), _0x27c9e3(_0x2fb118(_0x46bf42.concat(_0xe6ba99), 640));
	}
	function _0x5b2a2e(_0xce8dba) {
		var _0x4d8b5e = '0123456789abcdef', _0x4ecfa9 = '', _0x57bf83, _0x14304a;
		for (_0x14304a = 0; _0x14304a < _0xce8dba.length; _0x14304a += 1) {
			_0x57bf83 = _0xce8dba.charCodeAt(_0x14304a);
			_0x4ecfa9 += _0x4d8b5e.charAt(_0x57bf83 >>> 4 & 15) + _0x4d8b5e.charAt(_0x57bf83 & 15);
		}
		return _0x4ecfa9;
	}
	function _0x1fc363(_0x3a0d97) {
		return unescape(encodeURIComponent(_0x3a0d97));
	}
	function _0xc41ae(_0x3aba7e) {
		return _0x4f43f5(_0x1fc363(_0x3aba7e));
	}
	function _0x10950f(_0x4acc72) {
		return _0x5b2a2e(_0xc41ae(_0x4acc72));
	}
	function _0x2468dd(_0x79ae41, _0x5ce4be) {
		return _0x282f2a(_0x1fc363(_0x79ae41), _0x1fc363(_0x5ce4be));
	}
	function _0x1126ab(_0x10392f, _0x392617) {
		return _0x5b2a2e(_0x2468dd(_0x10392f, _0x392617));
	}
	function _0x2d9d6f(_0x3d1f77, _0x113bb3, _0x251ebb) {
		if (!_0x113bb3) {
			if (!_0x251ebb) {
				return _0x10950f(_0x3d1f77);
			}
			return _0xc41ae(_0x3d1f77);
		}
		if (!_0x251ebb) {
			return _0x1126ab(_0x113bb3, _0x3d1f77);
		}
		return _0x2468dd(_0x113bb3, _0x3d1f77);
	}
	typeof define === 'function' && define.amd ? define(function () {
		return _0x2d9d6f;
	}) : typeof module === 'object' && module.exports ? module.exports = _0x2d9d6f : _0x483ba3.md5 = _0x2d9d6f;
}(this));
Ext.apply(Ext, {
	'setCookie': function (_0x1369a0, _0x6f8759) {
		var _0x413a77 = arguments, _0x3bd9be = arguments.length, _0x1c3bad = _0x3bd9be > 2 ? _0x413a77[2] : null, _0x32d526 = _0x3bd9be > 3 ? _0x413a77[3] : '/', _0x3e389a = _0x3bd9be > 4 ? _0x413a77[4] : null, _0x126f2a = _0x3bd9be > 5 ? _0x413a77[5] : false;
		document.cookie = _0x1369a0 + '=' + escape(_0x6f8759) + (_0x1c3bad === null ? '' : '; expires=' + _0x1c3bad.toGMTString()) + (_0x32d526 === null ? '' : '; path=' + _0x32d526) + (_0x3e389a === null ? '' : '; domain=' + _0x3e389a) + (_0x126f2a === true ? '; secure' : '');
	},
	'getCookie': function (_0x1db9d0, _0x22247d) {
		var _0x398fee = _0x1db9d0 + '=', _0x3c7423 = _0x398fee.length, _0x48e826 = document.cookie.length, _0x56d57d = 0, _0x34535d = 0;
		while (_0x56d57d < _0x48e826) {
			_0x34535d = _0x56d57d + _0x3c7423;
			if (document.cookie.substring(_0x56d57d, _0x34535d) == _0x398fee) {
				return this.getCookieVal(_0x34535d);
			}
			_0x56d57d = document.cookie.indexOf(' ', _0x56d57d) + 1;
			if (_0x56d57d === 0) {
				break;
			}
		}
		return _0x22247d;
	},
	'getCookieVal': function (_0x3824a0) {
		var _0x388dfe = document.cookie.indexOf(';', _0x3824a0);
		return _0x388dfe == -1 && (_0x388dfe = document.cookie.length), unescape(document.cookie.substring(_0x3824a0, _0x388dfe));
	}
});
Ext.define('ans.VideoJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x3d8ca6) {
		_0x3d8ca6 = _0x3d8ca6 || {};
		var _0x4282e6 = this;
		_0x4282e6.addEvents(['seekstart']);
		_0x4282e6.mixins.observable.constructor.call(_0x4282e6, _0x3d8ca6);
		var _0xcf0dd4 = _0x3d8ca6 && _0x3d8ca6.callbackfn ? _0x3d8ca6.callbackfn : function () {
		}, _0x3e3a5d = videojs(_0x3d8ca6.videojs, _0x4282e6.params2VideoOpt(_0x3d8ca6.params), _0xcf0dd4);
		_0x3e3a5d.eventCount = 0;
		Ext.fly(_0x3d8ca6.videojs).on('contextmenu', function (_0x9bef74) {
			_0x9bef74.preventDefault();
		});
		$('.video-js').attr('tabindex', 1);
		$('.vjs-big-play-button').on('click', function (_0x5deeb6) {
			$('.video-js').focus();
		});
		Ext.fly(_0x3d8ca6.videojs).on('keydown', function (_0x373cb7) {
			(_0x373cb7.keyCode == 32 || _0x373cb7.keyCode == 107) && _0x373cb7.preventDefault();
			if (_0x373cb7.keyCode == 32) {
				_0x3e3a5d.paused() ? _0x3e3a5d.play() : _0x3e3a5d.pause();
			} else {
				if (_0x373cb7.keyCode == 37 || _0x373cb7.keyCode == 39) {
					var _0x14da16 = _0x3d8ca6.params.enableFastForward, _0x5858c2 = _0x3d8ca6.params.jobid;
					if (typeof _0x14da16 != 'undefined' && _0x14da16 === 0 && typeof _0x5858c2 != 'undefined' && _0x5858c2 != '' && window.parent.parent.location.href.indexOf('studentstudy') > -1) {
						videojs('video').tipFun(_0x373cb7.keyCode);
					} else {
						if (_0x373cb7.keyCode == 37) {
							var _0x246cb7 = parseInt(_0x3e3a5d.currentTime()), _0x4f86c8 = _0x246cb7 - 5 < 0 ? 0 : _0x246cb7 - 5;
							_0x3e3a5d.currentTime(_0x4f86c8);
						} else {
							if (_0x373cb7.keyCode == 39) {
								var _0x246cb7 = parseInt(_0x3e3a5d.currentTime()), _0x4f86c8 = _0x246cb7 + 5 > duration ? duration : _0x246cb7 + 5;
								_0x3e3a5d.currentTime(_0x4f86c8);
							}
						}
					}
				}
			}
		});
		_0x3e3a5d.videoJsResolutionSwitcher && _0x3e3a5d.on('resolutionchange', function () {
			var _0x2a26a5 = _0x3e3a5d.currentResolution(), _0x2a4f77 = _0x2a26a5.sources ? _0x2a26a5.sources[0].res : false;
			Ext.setCookie('resolution', _0x2a4f77);
		});
		_0x3e3a5d.videoJsPlayLine && _0x3e3a5d.on('playlinechange', function () {
			var _0x49f505 = _0x3e3a5d.currentPlayline();
			Ext.setCookie('net', _0x49f505.net);
		});
		var _0x5a37d7 = _0x3d8ca6.params && _0x3d8ca6.params.doublespeed ? 2 : 1, _0x5d282e = true;
		_0x3e3a5d.on('ratechange', function () {
			var _0x2ab5d7 = _0x3e3a5d.playbackRate();
			_0x2ab5d7 > _0x5a37d7 ? (_0x3e3a5d.pause(), _0x3e3a5d.playbackRate(1)) : Ext.setCookie('doubleSpeedValue', _0x2ab5d7);
			if (typeof aplus_queue != 'undefined' && !_0x5d282e) {
				var _0x455ec0 = _0x3d8ca6.params && _0x3d8ca6.params.aplus_video_id ? _0x3d8ca6.params.aplus_video_id : '', _0x573883 = _0x3d8ca6.params && _0x3d8ca6.params.aplus_resource_id ? _0x3d8ca6.params.aplus_resource_id : '', _0x559cac = _0x3d8ca6.params && _0x3d8ca6.params.knowledgename ? _0x3d8ca6.params.knowledgename : '', _0xaab2b1 = _0x3d8ca6.params && _0x3d8ca6.params.coursename ? _0x3d8ca6.params.coursename : '';
				aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_speed_click',
						'CLK',
						{
							'video_name': _0x559cac,
							'video_id': _0x455ec0,
							'resource_id': _0x573883,
							'resource_name': _0xaab2b1,
							'speed_type': _0x3e3a5d.playbackRate()
						}
					]
				});
			}
			_0x5d282e = false;
		});
		_0x3e3a5d.on('play', function () {
			try {
				$('.video-js').focus();
				if (_0x3d8ca6.params && _0x3d8ca6.params.doublespeed && parseInt(_0x3d8ca6.params.doublespeed) === 1) {
					var _0x5dc084 = Ext.getCookie('doubleSpeedValue', 1);
					_0x3e3a5d.playbackRate(_0x5dc084);
				}
				$('.vjs-playback-rate').removeClass('vjs-hidden');
				$('.vjs-playback-rate .vjs-menu .vjs-menu-content li').length == 0 && $('.vjs-playback-rate-value').css('opacity', '0.4');
			} catch (_0xfbe56) {
				console.log(_0xfbe56);
			}
		});
		_0x3e3a5d.on('ended', function () {
			try {
				_0x3d8ca6.params.enableFastForward = 1;
				_0x3e3a5d.finished = true;
				_0x3e3a5d.disableSeek(false);
				$('.vjs-progress-control').unbind('click');
			} catch (_0x467cf5) {
				console.log(_0x467cf5);
			}
		});
	},
	'params2VideoOpt': function (_0x5ab744) {
		var _0x5f4b6f = typeof _0x5ab744.cpi == 'undefined' ? 0 : _0x5ab744.cpi, _0x3912c3 = false, _0x544cac = [
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
		if (_0x5ab744.cdn) {
			for (var _0x13fb51 = 0; _0x13fb51 < _0x5ab744.cdn.length; _0x13fb51++) {
				var _0x34ea93 = _0x5ab744.cdn[_0x13fb51];
				_0x34ea93.net = 's' + _0x13fb51;
			}
			try {
				top.window.app && top.window.app == 2 ? _0x544cac = _0x544cac.concat(_0x5ab744.cdn) : _0x544cac = _0x544cac.concat(_0x5ab744.cdn).sort(function (_0x2e5746, _0x5d1940) {
					return _0x2e5746.indexorder - _0x5d1940.indexorder;
				});
			} catch (_0x24c0eb) {
				_0x544cac = _0x544cac.concat(_0x5ab744.cdn);
			}
		}
		function _0x291dfc(_0x3773be) {
			var _0x5bd21a = Ext.getCookie('net', 'p1'), _0x18389e = [];
			for (var _0x1ca9a4 = 0; _0x1ca9a4 < _0x3773be.length; _0x1ca9a4++) {
				if (_0x3773be[_0x1ca9a4].net == _0x5bd21a) {
					_0x18389e = _0x3773be[_0x1ca9a4];
					break;
				}
			}
			return _0x18389e;
		}
		function _0x156a4a(_0x40853a, _0x1e0e22, _0x415d41) {
			return 'http://hls-ans.chaoxing.com/hls/m3u8/' + _0x40853a + '/' + _0x1e0e22 + '.m3u8?cdn=' + encodeURIComponent(_0x415d41);
		}
		function _0x2cd8db(_0x2642cc, _0x26fa99) {
			var _0x42de8a = ServerHosts.s1_HOST.replace('http:/', '').replace('https:/', ''), _0x5ef869 = 0;
			_0x2642cc.src.indexOf(_0x42de8a) > -1 && (_0x5ef869 = _0x2642cc.src.indexOf(_0x42de8a) + _0x42de8a.length);
			var _0x44f71a = _0x2642cc.src.substr(_0x5ef869);
			if (_0x26fa99.ispublic && _0x5ef869 == 0) {
				return {
					'src': _0x44f71a,
					'type': 'video/mp4',
					'res': _0x2642cc.res
				};
			}
			return _0x26fa99.ispublic ? _0x3912c3 ? {
				'src': _0x156a4a(_0x5ab744.objectId, _0x2642cc.resolution, _0x26fa99.url),
				'type': 'application/x-mpegURL',
				'res': _0x2642cc.res
			} : {
				'src': _0x26fa99.url + _0x44f71a,
				'type': 'video/mp4',
				'res': _0x2642cc.res
			} : _0x3912c3 ? {
				'src': _0x156a4a(_0x5ab744.objectId, _0x2642cc.resolution, _0x26fa99.url + _0x42de8a),
				'type': 'application/x-mpegURL',
				'res': _0x2642cc.res
			} : {
				'src': _0x26fa99.url + _0x42de8a + _0x44f71a,
				'type': 'video/mp4',
				'res': _0x2642cc.res
			};
		}
		var _0x4886b8 = [], _0x15821b = Ext.getCookie('resolution', 360);
		!_0x5ab744.rootPath && (_0x5ab744.rootPath = '');
		_0x5ab744.http && _0x4886b8.push({
			'src': _0x5ab744.http,
			'type': 'video/mp4',
			'label': '标清',
			'resolution': 'sd',
			'res': 360
		});
		_0x5ab744.httphd && (_0x4886b8.push({
			'src': _0x5ab744.httphd,
			'type': 'video/mp4',
			'label': '高清',
			'resolution': 'hd',
			'res': 720
		}), _0x15821b = Ext.getCookie('resolution', 720));
		_0x5ab744.httpshd && _0x4886b8.push({
			'src': _0x5ab744.httpshd,
			'type': 'video/mp4',
			'label': '超高清',
			'resolution': 'shd',
			'res': 1080
		});
		_0x5ab744.httpmd && _0x4886b8.push({
			'src': _0x5ab744.httpmd,
			'type': 'video/mp4',
			'label': '极速',
			'resolution': 'md',
			'res': 240
		});
		if (_0x4886b8.length == 1) {
			var _0x34ea93 = _0x4886b8[0];
			_0x34ea93.label = '高清';
		}
		var _0x197d51 = false;
		for (var _0x13fb51 = 0; _0x13fb51 < _0x4886b8.length; _0x13fb51++) {
			if (_0x4886b8[_0x13fb51].res == _0x15821b) {
				_0x197d51 = true;
				break;
			}
		}
		!_0x197d51 && (_0x15821b = 360);
		var _0x265222 = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid), _0x23ab33 = function (_0x4a9190, _0x251ba5, _0x46c239, _0x34c67c) {
			try {
				if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && isUnFinishJob()) {
					return;
				}
				if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && isUnFinishJob()) {
					return;
				}
			} catch (_0x1b869c) {
				console.log(_0x1b869c);
			}
			if (_0x265222) {
				return;
			}
			var _0x420ebf = this;
			!_0x420ebf.logCount && (_0x420ebf.logCount = 0);
			videojs.xhr({
				'uri': _0x251ba5,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x1a7368, _0xc49c72) {
				_0x420ebf.logCount++;
				if (_0xc49c72.statusCode == 200) {
					_0x420ebf.logCount = 0;
					if (_0xc49c72.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0xc49c72.body);
					if (d.isPassed) {
						try {
							typeof d.hasJobLimit != 'undefined' && d.hasJobLimit === true && (top.allowNextVideo = false, top.hasJobLimit = true);
							typeof d.videoTimeLimit != 'undefined' && d.videoTimeLimit === true && (top.allowNextVideo = false, top.videoTimeLimit = true);
						} catch (_0x3202e3) {
							console.log(_0x3202e3);
						}
						_0x34c67c();
					} else {
						!_0x46c239 && _0x34c67c();
					}
					return;
				}
				if (_0x420ebf.logCount >= 4) {
					_0x420ebf.logCount = 0;
					_0x4a9190.pause();
					if (_0xc49c72.statusCode != 0) {
						if (_0xc49c72.statusCode == 202 || _0xc49c72.statusCode == 302) {
							try {
								parent.location.reload();
							} catch (_0x3e641e) {
								console.log(_0x3e641e.message);
							}
						} else {
							alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0xc49c72.statusCode + ')');
						}
					} else {
						alert('您的网络不稳定\uFF0C请您稍后继续...');
					}
				}
			});
		}, _0x34dec2 = function (_0x14c660, _0x21f53c, _0x1ade2a, _0x4e9302) {
			if (!_0x5ab744.reportUrl) {
				return;
			}
			if (_0x5ab744.isFiled == 1 || _0x5ab744.state == 1) {
				return;
			}
			var _0x320bab = (_0x5ab744.startTime || '0') + '_' + (_0x5ab744.endTime || _0x5ab744.duration), _0x19d88f = 0, _0xebb562;
			_0x1ade2a.toString().indexOf('-') != -1 ? (_0xebb562 = _0x1ade2a.split('-'), _0xebb562.length == 2 && (_0x19d88f = parseInt(_0xebb562[1]) * 1000)) : _0x19d88f = _0x1ade2a * 1000;
			if (_0x19d88f == _0x5ab744.duration * 1000 && _0x21f53c == 2) {
				return;
			}
			var _0x56e67b = Ext.String.format('[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x5ab744.clazzId, _0x5ab744.userid, _0x5ab744.jobid || '', _0x5ab744.objectId, _0x19d88f, 'd_yHJ!$pdA~5', _0x5ab744.duration * 1000, _0x320bab), _0x2bfb76 = [
				_0x5ab744.reportUrl,
				'/',
				_0x5ab744.dtoken,
				'?clazzId=',
				_0x5ab744.clazzId,
				'&playingTime=',
				_0x1ade2a,
				'&duration=',
				_0x5ab744.duration,
				'&clipTime=',
				_0x320bab,
				'&objectId=',
				_0x5ab744.objectId,
				'&otherInfo=',
				_0x5ab744.otherInfo,
				'&jobid=',
				_0x5ab744.jobid,
				'&userid=',
				_0x5ab744.userid,
				'&isdrag=',
				_0x21f53c,
				'&view=pc',
				'&enc=',
				md5(_0x56e67b),
				'&rt=',
				_0x5ab744.rt,
				'&dtype=Video',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x23ab33(_0x14c660, _0x2bfb76, _0x5ab744.jobid, _0x4e9302);
		};
		return {
			'language': 'zh-CN',
			'poster': _0x5ab744.screenshot,
			'controls': true,
			'preload': 'none',
			'sources': _0x4886b8,
			'playlines': _0x544cac,
			'playbackRates': _0x5ab744.doublespeed != 0 ? [
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
					'default': _0x15821b,
					'dynamicLabel': true,
					'customSourcePicker': function (_0x19e5ab, _0x9132ea, _0x3f67b8) {
						var _0x4cda3f = _0x19e5ab.currentPlayline();
						_0x19e5ab.src(_0x9132ea.map(function (_0xa05709) {
							return _0x2cd8db(_0xa05709, _0x4cda3f);
						}));
						if (typeof aplus_queue != 'undefined') {
							function _0x26aabb() {
								var _0xce150e = '';
								for (var _0x4090d4 = 1; _0x4090d4 <= 32; _0x4090d4++) {
									var _0x29ea18 = Math.floor(Math.random() * 16).toString(16);
									_0xce150e += _0x29ea18;
									(_0x4090d4 == 8 || _0x4090d4 == 12 || _0x4090d4 == 16 || _0x4090d4 == 20) && (_0xce150e += '-');
								}
								return _0xce150e;
							}
							typeof aplus_queue != 'undefined' && aplus_queue.push({
								'action': 'aplus.record',
								'arguments': [
									'video_positive_load',
									'CLK',
									{
										'video_name': _0x5ab744.knowledgename || '',
										'video_id': _0x5ab744.aplus_video_id || '',
										'resource_id': _0x5ab744.aplus_resource_id || '',
										'resource_name': _0x5ab744.coursename || '',
										'video_duration': _0x5ab744.duration,
										'request_id': _0x26aabb()
									}
								]
							});
						}
						return _0x19e5ab;
					}
				},
				'videoJsPlayLine': {
					'defaults': _0x291dfc(_0x544cac),
					'dynamicLabel': true,
					'customSourcePicker': function (_0x5ef3cc, _0x54640d, _0x584ff8) {
						var _0x17046d = _0x5ef3cc.currentResolution().sources[0];
						return _0x5ef3cc.src(_0x2cd8db(_0x17046d, _0x54640d)), _0x5ef3cc;
					}
				},
				'studyControl': { 'enableSwitchWindow': _0x5ab744.enableSwitchWindow },
				'seekBarControl': {
					'headOffset': _0x5ab744.headOffset,
					'enableFastForward': _0x5ab744.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0x5ab744.control,
					'reportTimeInterval': _0x5ab744.reportTimeInterval,
					'isShowDanmu': _0x5ab744.danmaku,
					'chapterCapture': _0x5ab744.chapterCapture || 0,
					'captureInterval': _0x5ab744.captureInterval || 600,
					'chapterCollectionType': _0x5ab744.chapterCollectionType || 0,
					'startCapture': _0x5ab744.startCapture,
					'endCapture': _0x5ab744.endCapture,
					'playAginCapture': _0x5ab744.playAginCapture,
					'playingCapture': _0x5ab744.playingCapture,
					'playingLoopCapture': _0x5ab744.playingLoopCapture,
					'duration': _0x5ab744.duration,
					'isSupportFace': _0x5ab744.isSupportFace || false,
					'isShowFaceCollection': _0x5ab744.isShowFaceCollection,
					'jumpTimePointList': _0x5ab744.jumpTimePointList,
					'attachmentId': _0x5ab744.aId,
					'aplusVideoId': _0x5ab744.aplus_video_id || '',
					'aplusResourseId': _0x5ab744.aplus_resource_id || '',
					'aplusVideoName': _0x5ab744.knowledgename || '',
					'aplusResourceName': _0x5ab744.coursename || '',
					'sourcePlayer': 'video',
					'sendLog': function (_0x12a42e, _0x585ebe, _0x3a5224, _0x46b544) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x1b9706 = 0;
						switch (_0x585ebe) {
							case 'playing':
								_0x1b9706 = 0;
								break;
							case 'drag':
								_0x1b9706 = 1;
								break;
							case 'play':
								_0x1b9706 = 3;
								break;
							case 'pause':
								_0x1b9706 = 2;
								break;
							case 'ended':
								_0x1b9706 = 4;
								break;
						}
						var _0x7a5501 = this;
						_0x34dec2(_0x12a42e, _0x1b9706, _0x3a5224, function () {
							try {
								_0x1b9706 === 4 && typeof _0x46b544 != 'undefined' && (_0x46b544.sendDataLog('ended'), _0x12a42e.isFullscreen() && (closeFullScreen && closeFullScreen()), _0x46b544.playNextVideo(_0x7a5501.attachmentId));
							} catch (_0x3c1373) {
								console.log(_0x3c1373);
							}
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				'timelineObjects': {
					'begins': _0x5ab744.begins,
					'ends': _0x5ab744.ends,
					'url': _0x5ab744.rootPath + '/richvideo/initdatawithviewerV2?mid=' + _0x5ab744.mid + '&cpi=' + _0x5ab744.cpi + '&classid=' + _0x5ab744.clazzId,
					'quizErrorReportUrl': _0x5ab744.rootPath + '/question/addquestionerror?classid=' + _0x5ab744.clazzId + '&cpi=' + _0x5ab744.cpi,
					'validationUrl2': _0x5ab744.rootPath + '/question/quiz-validation?classid=' + _0x5ab744.clazzId + '&cpi=' + _0x5f4b6f + '&objectid=' + _0x5ab744.objectId,
					'quizRightCountUrl': _0x5ab744.rootPath + '/question/quiz-rightcount?classid=' + _0x5ab744.clazzId + '&cpi=' + _0x5f4b6f
				},
				'customIframePlugin': {
					'eventArray': _0x5ab744.eventArray,
					'supportHeartbeat': _0x5ab744.supportHeartbeat,
					'courseid': _0x5ab744.courseid,
					'clazzId': _0x5ab744.clazzId,
					'userId': _0x5ab744.userid,
					'cookieFid': _0x5ab744.cookieFid,
					'knowledgeid': _0x5ab744.knowledgeid,
					'objectid': _0x5ab744.objectid,
					'playTime': _0x5ab744.playTime,
					'videoEnc': _0x5ab744.videoEnc,
					'headOffset': _0x5ab744.headOffset
				},
				'subtitle': {
					'translate': _0x5ab744.chapterVideoTranslate,
					'subtitleUrl': _0x5ab744.rootPath + '/richvideo/allsubtitle?mid=' + _0x5ab744.mid + '&objectid=' + _0x5ab744.objectId + '&courseid=' + _0x5ab744.courseid,
					'subtitle': _0x5ab744.rootPath + '/ananas/video-editor/sub?objectid=' + _0x5ab744.subobjectid
				},
				'marker': {
					'url': !_0x5ab744.isNotMark ? _0x5ab744.rootPath + '/ananas/getpoints?courseid=' + _0x5ab744.courseid + '&mid=' + _0x5ab744.mid : '',
					'ff': _0x5ab744.enableFastForward,
					'videoTopicCloud': _0x5ab744.videoTopicCloud
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
	var _0x4b6677 = videojs.getPlugin('plugin'), _0x1d352a = videojs.extend(_0x4b6677, {
		'constructor': function (_0x3e9f52, _0x1c6d51) {
			_0x4b6677.call(this, _0x3e9f52, _0x1c6d51);
			var _0x7a666a = this, _0x10d233 = _0x1c6d51.mouseElTarget, _0xc754db = 1;
			_0x1c6d51.enableSwitchWindow !== 1 && (_0xc754db = 0);
			if (!_0x10d233) {
				try {
					_0x10d233 = window.top ? window.top : window.document;
				} catch (_0xd219c9) {
					_0x10d233 = window.parent ? window.parent : window.document;
				}
			}
			Ext.fly(_0x10d233).on('mouseout', function (_0x5d4174) {
				_0x5d4174 = _0x5d4174 ? _0x5d4174 : window.event;
				var _0x3aaec4 = _0x5d4174.relatedTarget || _0x5d4174.toElement;
				!_0x3aaec4 && (_0xc754db != 1 && _0x3e9f52.pause());
			});
			_0x7a666a.singleton(_0x3e9f52);
		},
		'singleton': function (_0x532667) {
			var _0x2e1123 = this, _0x193f80 = parseInt(Math.random() * 9999999);
			_0x532667.on('play', function () {
				Ext.setCookie('videojs_id', _0x193f80);
			});
			_0x532667.setInterval(function () {
				var _0x1e87b8 = Ext.getCookie('videojs_id');
				typeof _0x1e87b8 != 'undefined' && _0x1e87b8 != _0x193f80 && _0x532667.pause();
			}, 1000);
		}
	});
	videojs.registerPlugin('studyControl', _0x1d352a);
}());
(function () {
	var _0x2f3dc8 = videojs.getComponent('SeekBar'), _0x57bad4 = videojs.extend(_0x2f3dc8, {
		'constructor': function (_0x2ebfea, _0x12e4f0) {
			_0x2f3dc8.call(this, _0x2ebfea, _0x12e4f0);
			var _0xfdb33f = this;
			_0x2ebfea.ignorePause = false;
			_0x2ebfea.seekLog = false;
			_0x2ebfea.firstSeek = true;
			_0x2ebfea.disableSeek = function (_0x553e37) {
				_0xfdb33f.disableSeek(_0x553e37);
			};
			_0x2ebfea.onlyBackward = function (_0x45c587) {
				_0xfdb33f.onlyBackward(_0x45c587);
			};
			_0x2ebfea.getSeekBar = function () {
				return _0xfdb33f;
			};
			_0xfdb33f.on('slideractive', function () {
				_0x2ebfea.trigger('seekstart');
				_0x2ebfea.ignorePause = true;
				_0x2ebfea.ignorePlay = true;
				_0x2ebfea.ignoreSeek = false;
			});
			_0xfdb33f.on('sliderinactive', function () {
				_0x2ebfea.trigger('seekend');
				_0x2ebfea.ignoreSeek = false;
			});
			_0xfdb33f.maxPercent = 0;
			_0x2ebfea.on('timeupdate', function () {
				_0xfdb33f.maxPercent = Math.max(_0xfdb33f.getPercent(), _0xfdb33f.maxPercent);
			});
		},
		'getCurrentTime_': function () {
			return this.player_.currentTime();
		},
		'getMaxPercent': function () {
			return this.maxPercent;
		},
		'isBackward': function (_0x51e73f) {
			return this.maxPercent > this.calculateDistance(_0x51e73f);
		},
		'handleMouseDown': function (_0x4500cb) {
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x4500cb)) {
					return;
				}
			}
			if (this['_disableSeek'] === true) {
				return;
			}
			_0x2f3dc8.prototype.handleMouseDown.call(this, _0x4500cb);
		},
		'handleMouseMove': function (_0x4bde04) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x4bde04)) {
					return;
				}
			}
			_0x2f3dc8.prototype.handleMouseMove.call(this, _0x4bde04);
		},
		'handleMouseUp': function (_0x120c3e) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x120c3e)) {
					return;
				}
			}
			_0x2f3dc8.prototype.handleMouseUp.call(this, _0x120c3e);
		},
		'disableSeek': function (_0x2ae79c) {
			var _0x22d44b = this;
			_0x22d44b['_disableSeek'] = _0x2ae79c !== false;
			_0x22d44b['_disableSeek'] ? _0x22d44b.disable() : _0x22d44b.enable();
		},
		'onlyBackward': function (_0x3bb2c0) {
			var _0x38f198 = this;
			_0x38f198['_onlyBackward'] = _0x3bb2c0 !== false;
		}
	});
	videojs.registerComponent('SeekBar', _0x57bad4);
}());
(function () {
	var _0x1351b6 = videojs.getPlugin('plugin'), _0x31a7ab = videojs.extend(_0x1351b6, {
		'constructor': function (_0x41a05a, _0x3393c0) {
			_0x1351b6.call(this, _0x41a05a, _0x3393c0);
			var _0x182402 = this;
			_0x182402.firstClick = true;
			_0x182402.isSendLog_ = !!_0x3393c0.isSendLog;
			_0x182402.isShowDanmu_ = !!_0x3393c0.isShowDanmu;
			_0x182402.damuLastGetTime = 0;
			_0x182402.firstPlay = true;
			_0x182402.firstPlayFace = true;
			_0x182402.pausePlayFace = false;
			_0x182402.playingFace = false;
			_0x182402.playingFaceTime = 0;
			_0x182402.chapterCapture = _0x3393c0.chapterCapture || 0;
			_0x182402.captureInterval = _0x3393c0.captureInterval * 60 || 600;
			_0x182402.chapterCollectionType = _0x3393c0.chapterCollectionType || 0;
			_0x182402.isSupportFace = _0x3393c0.isSupportFace;
			_0x182402.isAlertTip = false;
			_0x182402.startCapture = _0x3393c0.startCapture;
			_0x182402.endCapture = _0x3393c0.endCapture;
			_0x182402.playAginCapture = _0x3393c0.playAginCapture;
			_0x182402.playingCapture = _0x3393c0.playingCapture;
			_0x182402.playingLoopCapture = _0x3393c0.playingLoopCapture;
			_0x182402.isShowFaceCollection = _0x3393c0.isShowFaceCollection;
			_0x182402.duration = _0x3393c0.duration;
			_0x182402.jumpTimePointList = _0x3393c0.jumpTimePointList;
			_0x182402.loopCaptureInterval = Math.floor(Math.random() * (parseInt(_0x182402.duration) - 0) + 1);
			_0x182402.attachmentId = _0x3393c0.attachmentId;
			_0x182402.aplusVideoId = _0x3393c0.aplusVideoId;
			_0x182402.aplusResourseId = _0x3393c0.aplusResourseId;
			_0x182402.aplusVideoName = _0x3393c0.aplusVideoName;
			_0x182402.aplusResourceName = _0x3393c0.aplusResourceName;
			_0x41a05a.dragCutOffTime = _0x3393c0.headOffset ? _0x3393c0.headOffset : 0;
			_0x41a05a.canDragSeekBar = false;
			!_0x3393c0.sendLog && (_0x3393c0.sendLog = function () {
			});
			_0x3393c0.headOffset && _0x41a05a.currentTime(_0x3393c0.headOffset);
			function _0x42c740() {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'heartbeat',
						'CLK',
						{
							'video_name': _0x182402.aplusVideoName,
							'video_id': _0x182402.aplusVideoId,
							'resource_id': _0x182402.aplusResourseId,
							'resource_name': _0x182402.aplusResourceName,
							'request_id': _0x182402.getNewGuid()
						}
					]
				});
			}
			var _0x30407b = null, _0x55d2f7 = 0, _0x3fcd20 = 0, _0x210896 = _0x3393c0.reportTimeInterval || 60, _0x580413 = _0x210896 * 1000, _0x5ece1b = function (_0x27cb05, _0x58c33f, _0x302a25) {
				var _0x4ac88c = $('.vjs-tip2');
				_0x4ac88c.find('.vjs-tip-inner2').text(_0x302a25);
				_0x4ac88c.css({
					'left': _0x27cb05 / _0x58c33f.duration() * 100 + '%',
					'margin-left': -parseFloat(_0x4ac88c.width()) / 2 - 5 + 'px',
					'visibility': 'visible'
				});
				$('.vjs-default-skin').removeClass('vjs-user-inactive');
				$('.vjs-default-skin').addClass('vjs-user-active');
				setTimeout(function () {
					_0x4ac88c.css('visibility', 'hidden');
				}, 2000);
			}, _0x2b6e92 = function (_0x4f8e28, _0x4f2068, _0x1ae68f) {
				if (!_0x182402.isSendLog_) {
					return;
				}
				var _0xb1f5ab = _0x182402.now_() - _0x55d2f7;
				(_0xb1f5ab > _0x580413 || _0x4f2068 === true) && (typeof _0x1ae68f != 'undefined' ? _0x3393c0.sendLog(_0x41a05a, _0x4f8e28, _0x1ae68f, _0x182402) : _0x3393c0.sendLog(_0x41a05a, _0x4f8e28, _0x182402.sec_(_0x41a05a), _0x182402), _0x55d2f7 = _0x182402.now_());
			}, _0x1930e2 = function (_0xf28e31) {
				return _0xf28e31 && _0xf28e31.sort && _0xf28e31.sort(function (_0x59cd0e, _0x1f58ad) {
					return parseInt(_0x59cd0e) - parseInt(_0x1f58ad);
				});
			}, _0x310e2f = function (_0x6cab2e) {
				try {
					var _0x3308e3 = _0x6cab2e.otherPointTimes;
					if (_0x3308e3.length === 0) {
						return -1;
					}
					return _0x3308e3 = _0x1930e2(_0x3308e3), _0x3308e3[0];
				} catch (_0x5aae14) {
					console.log(_0x5aae14);
				}
				return -1;
			}, _0x427e59 = function (_0x5e875f) {
				try {
					var _0x38a99c = _0x5e875f.otherPointTimes, _0x18a286 = _0x38a99c.length;
					if (_0x18a286 === 0) {
						return -1;
					}
					return _0x38a99c = _0x1930e2(_0x38a99c), _0x38a99c[_0x18a286 - 1];
				} catch (_0x3df3f1) {
					console.log(_0x3df3f1);
				}
				return -1;
			}, _0xbd4557 = function (_0x33fb0e, _0x584b3c) {
				try {
					if (!_0x33fb0e.paused() && typeof _0x33fb0e.eventPoints != 'undefined') {
						var _0x1cf4cc = _0x33fb0e.currentTime(), _0x136486 = 0;
						_0x33fb0e.eventPoints.forEach(function (_0x2ce703) {
							_0x2ce703.text == '片头' && (_0x136486 = _0x2ce703.time);
						});
						if (_0x584b3c.headOffset > 0 && _0x584b3c.headOffset < _0x136486) {
							return;
						}
						if (_0x136486 > 0 && parseInt(_0x1cf4cc) === 0) {
							var _0x1b23a6 = parseInt(_0x310e2f(_0x33fb0e));
							if (_0x1b23a6 >= 0 && _0x136486 > _0x1b23a6) {
								return;
							}
							_0x33fb0e.ignoreSeek = false;
							_0x33fb0e.switchStatus = true;
							_0x33fb0e.currentTime(_0x136486);
							_0x5ece1b(_0x136486, _0x33fb0e, '已跳过片头');
						}
					}
				} catch (_0x233c01) {
					console.log(_0x233c01);
				}
				try {
					var _0x2daf9b = 0;
					if (!_0x33fb0e.paused() && typeof _0x33fb0e.eventPoints != 'undefined') {
						var _0x1cf4cc = _0x33fb0e.currentTime();
						_0x33fb0e.eventPoints.forEach(function (_0x5ca192) {
							_0x5ca192.text == '片尾' && (_0x2daf9b = _0x5ca192.time);
						});
						if (_0x584b3c.headOffset > _0x2daf9b) {
							return;
						}
						var _0x3ae32f = parseInt(_0x1cf4cc);
						if (_0x2daf9b > 0 && _0x3ae32f === _0x2daf9b) {
							var _0x591002 = parseInt(_0x427e59(_0x33fb0e));
							if (_0x591002 >= 0 && _0x2daf9b < _0x591002) {
								return;
							}
							_0x33fb0e.ignoreSeek = false;
							_0x33fb0e.switchStatus = true;
							_0x33fb0e.currentTime(_0x584b3c.duration);
							_0x5ece1b(_0x3ae32f, _0x33fb0e, '已跳过片尾');
						}
					}
				} catch (_0x2b799f) {
					console.log(_0x2b799f);
				}
			};
			_0x41a05a.on('play', function () {
				try {
					top.configFullScreen && reSizeVideoWindow();
				} catch (_0x59c6fb) {
					console.log(_0x59c6fb);
				}
				_0x182402.firstPlay && (typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_positive_pybk',
						'OTHER',
						{
							'video_name': _0x182402.aplusVideoName,
							'video_id': _0x182402.aplusVideoId,
							'resource_id': _0x182402.aplusResourseId,
							'resource_name': _0x182402.aplusResourceName,
							'request_id': _0x182402.getNewGuid()
						}
					]
				}));
				try {
					if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && _0x182402.firstClick && isUnFinishJob()) {
						_0x182402.firstClick = false;
						_0x41a05a.pause();
						checkJobCountLimit(_0x41a05a, 0);
						return;
					}
					if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && _0x182402.firstClick && isUnFinishJob()) {
						_0x182402.firstClick = false;
						_0x41a05a.pause();
						checkJobCountLimit(_0x41a05a, 1);
						return;
					}
				} catch (_0x256c63) {
					console.log(_0x256c63);
				}
				_0x182402.isAlertTip = false;
				!_0x41a05a.ignorePlay && !_0x182402.firstPlay && (typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'continue_pybk_click',
						'CLK',
						{
							'video_name': _0x182402.aplusVideoName,
							'video_id': _0x182402.aplusVideoId,
							'resource_id': _0x182402.aplusResourseId,
							'resource_name': _0x182402.aplusResourceName
						}
					]
				}));
				if (_0x182402.chapterCapture == 0 || !_0x182402.isSupportFace || !_0x182402.isShowFaceCollection) {
					!_0x41a05a.ignorePlay ? (_0x2b6e92('play', true), _0x41a05a.ignoreSeek = true) : (_0x41a05a.ignorePlay = false, _0x41a05a.ignoreSeek = false, _0x41a05a.seekLog = false);
					_0x182402.sendDataLog('play');
					_0x182402.receiveStudyLog();
					_0x182402.getDanmuList('play', _0x41a05a);
					_0x182402.firstPlay = false;
					_0x182402.pausePlayFace = true;
				} else {
					if (_0x182402.chapterCapture == 1) {
						if (_0x182402.firstPlay) {
							var _0x3ced4b = _0x182402.sec_(_0x41a05a);
							if (_0x3ced4b == 0 && (_0x182402.startCapture == 1 || typeof _0x182402.startCapture == 'undefined') && _0x182402.firstPlayFace) {
								_0x182402.playingFaceTime = _0x3ced4b;
								_0x182402.playingFace = false;
								var _0x5a799c = _0x182402.faceCollection('play', _0x41a05a, _0x182402.chapterCollectionType, 0);
								if (_0x5a799c != 1) {
									return;
								}
							}
							!_0x41a05a.ignorePlay ? (_0x2b6e92('play', true), _0x41a05a.ignoreSeek = true) : (_0x41a05a.ignorePlay = false, _0x41a05a.ignoreSeek = false, _0x41a05a.seekLog = false);
							_0x182402.sendDataLog('play');
							_0x182402.receiveStudyLog();
							_0x182402.getDanmuList('play', _0x41a05a);
							_0x182402.firstPlay = false;
							_0x182402.pausePlayFace = true;
						} else {
							if (_0x182402.playAginCapture == 1 && !_0x41a05a.ignorePlay && _0x182402.pausePlayFace) {
								_0x182402.playingFaceTime = _0x182402.sec_(_0x41a05a);
								_0x182402.playingFace = false;
								_0x182402.faceCollection('aginPlay', _0x41a05a, _0x182402.chapterCollectionType, -2);
								return;
							}
							_0x182402.pausePlayFace = true;
						}
					}
				}
				typeof aplus_queue != 'undefined' && (_0x30407b = setInterval(_0x42c740, 20000));
				_0x182402.seekLog = false;
			});
			_0x41a05a.tipFun = function (_0xb0f174) {
				var _0xfd87a7 = _0x182402.sec_(_0x41a05a);
				if (_0xb0f174 == 37) {
					var _0x50be42 = _0xfd87a7 - 5 < 0 ? 0 : _0xfd87a7 - 5;
					_0x41a05a.currentTime(_0x50be42);
				} else {
					if (_0xb0f174 == 39) {
						if (_0xfd87a7 + 5 < _0x41a05a.dragCutOffTime) {
							_0x41a05a.currentTime(_0xfd87a7 + 5);
						} else {
							_0x41a05a.currentTime(_0x41a05a.dragCutOffTime);
							if (!$('.toolTipBox1').is(':visible')) {
								$('.toolTipBox1').html($('#tipDiv .toolTipBox1').html());
								var _0x4f5ae4 = $('#video_html5_api').height();
								$('.toolTipBox1').css('top', parseInt(_0x4f5ae4 / 2) + 'px');
								$('.toolTipBox1').show();
								setTimeout(function () {
									$('.toolTipBox1').hide();
								}, 800);
							}
						}
					}
				}
			};
			_0x41a05a.on('seeked', function () {
				if (_0x3393c0.enableFastForward != 1 && !_0x41a05a.switchStatus && !_0x41a05a.finished) {
					var _0x246d06 = _0x41a05a.currentTime(), _0x41e552 = _0x3393c0.headOffset ? _0x3393c0.headOffset : 0;
					max = Math.max(_0x41e552, _0x41a05a.dragCutOffTime);
					if (parseInt(_0x246d06) > max) {
						_0x41a05a.canDragSeekBar = false;
						_0x246d06 != 0 && _0x41a05a.currentTime(max);
						bindVjsClick && bindVjsClick();
						return;
					} else {
						if (_0x246d06 == max) {
							return;
						} else {
							_0x246d06 < max && (_0x41a05a.canDragSeekBar = true);
						}
					}
				}
				!_0x41a05a.seekLog && (_0x41a05a.seekStartTime = _0x3fcd20);
				if (!_0x41a05a.ignoreSeek) {
					if (!_0x41a05a.seekLog) {
						_0x41a05a.firstSeek && (_0x2b6e92('drag', true, _0x41a05a.seekStartTime + '-' + _0x182402.sec_(_0x41a05a)), _0x41a05a.firstSeek = false);
						function _0xafa075() {
							_0x2b6e92('drag', true, _0x41a05a.seekStartTime + '-' + _0x182402.sec_(_0x41a05a));
							document.removeEventListener('mouseup', _0xafa075);
						}
						document.addEventListener('mouseup', _0xafa075);
					}
					if ('video' == _0x3393c0.sourcePlayer) {
						typeof aplus_queue != 'undefined' && aplus_queue.push({
							'action': 'aplus.record',
							'arguments': [
								'time_shift_click',
								'OTHER',
								{
									'video_name': _0x182402.aplusVideoName,
									'video_id': _0x182402.aplusVideoId,
									'resource_id': _0x182402.aplusResourseId,
									'resource_name': _0x182402.aplusResourceName,
									'time_shift_time': _0x3fcd20 + '',
									'time_shift_duration': Math.abs(parseInt(_0x182402.sec_(_0x41a05a)) - parseInt(_0x3fcd20))
								}
							]
						});
						typeof aplus_queue != 'undefined' && aplus_queue.push({
							'action': 'aplus.record',
							'arguments': [
								'video_progress_drag',
								'OTHER',
								{
									'video_name': _0x182402.aplusVideoName,
									'video_id': _0x182402.aplusVideoId,
									'resource_id': _0x182402.aplusResourseId,
									'resource_name': _0x182402.aplusResourceName
								}
							]
						});
					}
				} else {
					_0x41a05a.ignoreSeek = false;
				}
				_0x3fcd20 = _0x182402.sec_(_0x41a05a);
				_0x41a05a.ignorePlay = true;
				_0x41a05a.seekLog = true;
				delete _0x41a05a.switchStatus;
			});
			_0x41a05a.on('pause', function () {
				!_0x41a05a.ignorePause ? (_0x2b6e92('pause', true), _0x41a05a.ignorePlay = false, _0x41a05a.ignoreSeek = false, _0x41a05a.seekLog = false, typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_pause_click',
						'CLK',
						{
							'video_name': _0x182402.aplusVideoName,
							'video_id': _0x182402.aplusVideoId,
							'resource_id': _0x182402.aplusResourseId,
							'resource_name': _0x182402.aplusResourceName
						}
					]
				})) : _0x41a05a.ignorePause = false;
				_0x182402.sendDataLog('pause');
				_0x182402.getDanmuList('pause', _0x41a05a);
				_0x30407b && clearInterval(_0x30407b);
			});
			_0x41a05a.on('timeupdate', function () {
				var _0x3826ec = _0x182402.sec_(_0x41a05a);
				_0x3826ec > _0x41a05a.dragCutOffTime && _0x3826ec - _0x41a05a.dragCutOffTime < 2 && (_0x41a05a.dragCutOffTime = _0x3826ec);
				_0x182402.isSupportFace && _0x182402.isShowFaceCollection && _0x182402.chapterCapture == 1 && _0x182402.playingCapture == 1 && _0x182402.playingFace && (_0x182402.playingFace = false, _0x182402.playingLoopCapture == 1 ? _0x3826ec == _0x182402.loopCaptureInterval && _0x182402.faceCollection('playing', _0x41a05a, _0x182402.chapterCollectionType, -1) : _0x3826ec >= _0x182402.captureInterval && _0x3826ec % _0x182402.captureInterval == 0 && _0x182402.faceCollection('playing', _0x41a05a, _0x182402.chapterCollectionType, _0x3826ec));
				!_0x182402.playingFace && _0x3826ec - _0x182402.playingFaceTime > 2 && (_0x182402.playingFace = true);
				if (typeof parent.videoTrialDuration != 'undefined' && parent.videoTrialDuration != '-1') {
					var _0x5af14a = parseInt(parent.videoTrialDuration) * 60;
					if (_0x5af14a < _0x182402.sec_(_0x41a05a) && !_0x182402.isAlertTip) {
						_0x41a05a.pause();
						alert('视频只允许试看' + parent.videoTrialDuration + '分钟');
						_0x182402.isAlertTip = true;
						return;
					}
				}
				parseInt(_0x41a05a.currentTime()) >= this.damuLastGetTime && _0x182402.getDanmuList('timeupdate', _0x41a05a);
				_0x182402.danmuDisplay(_0x41a05a);
				if (_0x55d2f7 == 0) {
					_0xbd4557(_0x41a05a, _0x3393c0);
					return;
				}
				_0x182402.sec_(_0x41a05a) - _0x3fcd20 <= 1 && !_0x41a05a.ignorePlay && (_0x3fcd20 = _0x182402.sec_(_0x41a05a));
				_0x2b6e92('playing');
				_0xbd4557(_0x41a05a, _0x3393c0);
			});
			_0x41a05a.on('ended', function () {
				_0x182402.isShowFaceCollection && _0x182402.chapterCapture == 1 && _0x182402.endCapture == 1 && _0x182402.faceCollection('ended', _0x41a05a, _0x182402.chapterCollectionType, _0x182402.duration);
				_0x2b6e92('ended', true);
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_end_click',
						'CLK',
						{
							'video_name': _0x182402.aplusVideoName,
							'video_id': _0x182402.aplusVideoId,
							'resource_id': _0x182402.aplusResourseId,
							'resource_name': _0x182402.aplusResourceName,
							'request_id': _0x182402.getNewGuid(),
							'pybk_duration': _0x182402.duration,
							'full_play_count': 1
						}
					]
				});
				_0x30407b && clearInterval(_0x30407b);
				_0x41a05a.seekLog = false;
			});
		},
		'sec_': function (_0x45b64f) {
			return parseInt(_0x45b64f.currentTime());
		},
		'now_': function () {
			return new Date().getTime();
		},
		'isSendLog': function (_0x2de5cb) {
			return _0x2de5cb && (this.isSendLog_ = !!_0x2de5cb), this.isSendLog_;
		},
		'sendDataLog': function (_0x575e03) {
			var _0x3933dd = _0x575e03 == 'pause' || _0x575e03 == 'end' ? 2 : 1;
			typeof sendReadZTMediaLog != 'undefined' && sendReadZTMediaLog(_0x3933dd);
		},
		'receiveStudyLog': function () {
			typeof receiveStudyLog != 'undefined' && setTimeout(function () {
				receiveStudyLog();
			}, 50);
		},
		'getDanmuList': function (_0x42a3a2, _0x5e366c) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x616c00 = this.sec_(_0x5e366c);
			if (_0x42a3a2 == 'pause') {
				this.damuLastGetTime = 0;
				setTimeout(function () {
					getDanmuByTime(_0x42a3a2, 0);
				}, 200);
				return;
			}
			typeof getDanmuByTime != 'undefined' && setTimeout(function () {
				getDanmuByTime(_0x42a3a2, _0x616c00);
			}, 200);
			if (_0x616c00 < this.damuLastGetTime) {
				return;
			}
			this.damuLastGetTime = _0x616c00 + 59;
		},
		'danmuDisplay': function (_0x4ef5ef) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x44ffd6 = this.sec_(_0x4ef5ef);
			typeof danmuPlay != 'undefined' && danmuPlay(_0x44ffd6);
		},
		'timer': function (_0x51387d) {
		},
		'faceCollection': function (_0x39d9dd, _0x204a67, _0x300436, _0x1dd144) {
			if (_0x1dd144 != -2) {
				var _0x4796de = this.jumpTimePointList;
				if (typeof _0x4796de != 'undefined') {
					try {
						if (_0x4796de.includes(_0x1dd144)) {
							return this.firstPlayFace = false, this.pausePlayFace = false, this.playingFace = false, 1;
						}
					} catch (_0x4b52c7) {
					}
				}
			}
			_0x39d9dd == 'play' ? typeof startFaceCollection != 'undefined' && (_0x204a67.pause(), startFaceCollection(_0x204a67, _0x300436, this, _0x1dd144)) : _0x39d9dd == 'ended' ? typeof startFaceCollection != 'undefined' && (_0x204a67.pause(), startFaceCollection(_0x204a67, _0x300436, this, _0x1dd144)) : _0x39d9dd == 'playing' ? (typeof startFaceCollection != 'undefined' && (_0x204a67.pause(), this.playingFaceTime = this.sec_(_0x204a67), startFaceCollection(_0x204a67, _0x300436, this, _0x1dd144), this.playingFace = false), this.pausePlayFace = false) : _0x39d9dd == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (_0x204a67.pause(), startFaceCollection(_0x204a67, _0x300436, this, _0x1dd144)), this.pausePlayFace = false);
		},
		'playNextVideo': function (_0x161c2e) {
			if (typeof chapterPlayNextVideo != 'undefined') {
				if (typeof top.allowNextVideo != 'undefined' && top.allowNextVideo === false) {
					top.hasJobLimit === true ? top.showJobLimitTip() : top.showVideoTimeLimitTip();
					return;
				}
				chapterPlayNextVideo(_0x161c2e);
			}
		},
		'getNewGuid': function () {
			var _0x18f50e = '';
			for (var _0x2a6e39 = 1; _0x2a6e39 <= 32; _0x2a6e39++) {
				var _0x295088 = Math.floor(Math.random() * 16).toString(16);
				_0x18f50e += _0x295088;
				(_0x2a6e39 == 8 || _0x2a6e39 == 12 || _0x2a6e39 == 16 || _0x2a6e39 == 20) && (_0x18f50e += '-');
			}
			return _0x18f50e;
		}
	});
	videojs.registerPlugin('seekBarControl', _0x31a7ab);
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
			'getChecked': function (_0x4b5c3d, _0xdcdd34, _0x48b78f) {
				try {
					if (typeof _0x4b5c3d != 'undefined') {
						return _0x4b5c3d.indexOf(_0xdcdd34) != -1 && _0x48b78f == 'InteractiveQuiz' ? 'checked="checked"' : '';
					}
					return '';
				} catch (_0x60c62d) {
					console.log(_0x60c62d);
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
		var _0xad8bde = this, _0x30fbea = _0xad8bde.renderData, _0x4f87e0 = _0xad8bde.quizRightCountUrl;
		typeof _0x4f87e0 != 'undefined' && Ext.Ajax.request({
			'url': _0x4f87e0,
			'params': {
				'eventid': _0x30fbea.resourceId,
				'memberinfo': _0x30fbea.memberinfo
			},
			'method': 'get',
			'success': function (_0x4d81dd) {
				var _0x251471 = Ext.decode(_0x4d81dd.responseText);
				_0x251471.status && (Ext.get('rightNum').setHTML(_0x251471.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
			}
		});
		_0xad8bde.callParent(arguments);
		var _0x2bc30e = _0xad8bde.scrollEl, _0x51ed0b = $(_0x2bc30e.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#A5A5A5',
			'boxzoom': false,
			'autohidemode': false
		});
		setInterval(function () {
			$(_0x2bc30e.dom).getNiceScroll().resize();
		}, 300);
		_0xad8bde.scroller = _0x51ed0b;
		_0xad8bde.submitEl.on('click', function () {
			_0xad8bde.checkResult();
		});
		_0xad8bde.continueEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x50021a) {
				console.log(_0x50021a);
			}
			_0xad8bde.fireEvent('continue');
		});
		_0xad8bde.backEl && _0xad8bde.backEl.on('click', function () {
			_0xad8bde.onerror && _0xad8bde.onerror();
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x47c965) {
				console.log(_0x47c965);
			}
			_0xad8bde.fireEvent('continue');
		});
		_0xad8bde.viewAnalysisEl && _0xad8bde.viewAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'inline-block');
		});
		_0xad8bde.delAnalysisEl && _0xad8bde.delAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'none');
		});
	},
	'checkResult': function () {
		var _0x318154 = this, _0x15b903 = Ext.query('input', _0x318154.el.dom), _0x4b2b6b = true, _0x24830e = _0x318154.renderData, _0x48d395 = _0x24830e.options, _0x1dda02 = [], _0x4f9215 = _0x318154.quizErrorReportUrl, _0x593b35 = _0x318154.validationUrl2, _0x462806 = _0x24830e.dtype;
		if (Ext.get('videoquiz-continue').getStyle('display') == 'none' && window.parent.parent.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1) {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x18d302) {
				console.log(_0x18d302);
			}
			_0x318154.fireEvent('continue');
			return;
		}
		Ext.each(_0x15b903, function (_0x184932, _0x1294b3) {
			_0x184932.checked && _0x1dda02.push(_0x48d395[_0x1294b3].name);
		});
		Ext.get('videoquiz-submit').setStyle('display', 'none');
		Ext.get('videoquiz-submitting').setStyle('display', 'block');
		if (typeof _0x593b35 != 'undefined') {
			var _0x411d24 = _0x1dda02.join(',');
			Ext.Ajax.request({
				'url': _0x593b35,
				'params': {
					'eventid': _0x24830e.resourceId,
					'memberinfo': _0x24830e.memberinfo,
					'answerContent': _0x411d24
				},
				'method': 'get',
				'success': function (_0x1c535f) {
					Ext.get('videoquiz-submit').setStyle('display', 'block');
					Ext.get('videoquiz-submitting').setStyle('display', 'none');
					_0x24830e.answerContent = _0x411d24;
					var _0x230c23 = Ext.decode(_0x1c535f.responseText), _0x4aba36 = typeof _0x230c23.isRight === 'undefined' ? false : _0x230c23.isRight;
					!_0x4aba36 ? _0x24830e.errorBackTime && _0x24830e.errorBackTime > 0 ? (Ext.get('spanNotBack').setStyle('display', 'block'), Ext.get('videoquiz-submit').setStyle('display', 'none'), _0x462806 == 'InteractiveQuiz' ? Ext.get('knowledgeBack').setStyle('display', 'block') : Ext.get('videoquiz-continue').setStyle('display', 'block')) : _0x462806 == 'InteractiveQuiz' && _0x24830e.errorBack == 1 && _0x24830e.eBstartPoint != '' ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'block')) : Ext.get('spanNot').setStyle('display', 'block') : (Ext.get('spanHas').setStyle('display', 'block'), _0x462806 == 'InteractiveQuiz' && (Ext.get('videoquiz-continue').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'none'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('spanNot').setStyle('display', 'none'), Ext.get('spanNotBack').setStyle('display', 'none'), Ext.get('spanNotBackPoint').setStyle('display', 'none')));
					if (_0x230c23.status) {
						if (_0x462806 == 'InteractiveQuiz') {
							_0x230c23.rightAnswerCount && (Ext.get('rightNum').setHTML(_0x230c23.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
							var _0x526a36 = '', _0x2b241c = false;
							_0x230c23.testAnalysis ? _0x230c23.showAnswer && _0x230c23.showAnswer > 0 ? (_0x526a36 += '正确答案\uFF1A' + _0x230c23.rightContent, _0x526a36 += '</br>解析\uFF1A' + _0x230c23.testAnalysis, Ext.get('viewAnalysis').setStyle('display', 'block'), _0x2b241c = true) : _0x230c23.isRight && (_0x526a36 += '解析\uFF1A' + _0x230c23.testAnalysis, Ext.get('viewAnalysis').setStyle('display', 'block'), _0x2b241c = true) : _0x230c23.showAnswer && _0x230c23.showAnswer > 0 ? (Ext.get('tkParsingDele').setStyle('display', 'none'), Ext.get('viewAnalysis').setStyle('display', 'none'), _0x526a36 += '正确答案\uFF1A' + _0x230c23.rightContent, _0x2b241c = true) : Ext.get('viewAnalysis').setStyle('display', 'none');
							if (_0x2b241c) {
								Ext.get('tkParsing_con').setHTML(_0x526a36);
								Ext.get('tkParsing').setStyle('display', 'inline-block');
								var _0x464335 = _0x318154.tkParseScrollEl, _0x4539d8 = $(_0x464335.dom).niceScroll({
									'cursorborder': '',
									'cursorwidth': 6,
									'cursorcolor': '#A5A5A5',
									'boxzoom': false,
									'autohidemode': true
								});
								_0x318154.tkParseScroll = _0x4539d8;
							}
						}
						if (_0x230c23.isRight && _0x462806 == 'InteractiveQuiz') {
							if (typeof _0x230c23.showTip != 'undefined' && _0x230c23.showTip) {
								var _0x4eb661 = _0x230c23.percent;
								try {
									var _0x3a9110 = Ext.getCookie('fid', 0);
									_0x4eb661 = parseInt(_0x4eb661);
									_0x3a9110 == '179952' && _0x4eb661 > 0 && (_0x4eb661 = 90 + _0x4eb661 * 0.1);
								} catch (_0xb5ed05) {
									console.log(_0xb5ed05);
								}
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01你的答题水准超过了' + _0x4eb661 + '%的同学</span></span>');
							} else {
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01</span></span>');
							}
						}
					}
					!_0x4aba36 && _0x318154.onerror && _0x462806 != 'InteractiveQuiz' && _0x318154.onerror();
					!_0x4aba36 && _0x24830e.errorContinue == 1 && (_0x4b2b6b = true, Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('videoquiz-continue').setStyle('display', 'block'));
					if (_0x4aba36 && Ext.get('videoquiz-continue').getStyle('display') == 'none') {
						try {
							top.configFullScreen && exitMediumSizeWindow();
						} catch (_0xb42155) {
							console.log(_0xb42155);
						}
						_0x318154.fireEvent('continue');
					}
				},
				'error': function () {
					Ext.get('videoquiz-submit').setStyle('display', 'block');
					Ext.get('videoquiz-submitting').setStyle('display', 'none');
					_0x318154.onerror && _0x462806 != 'InteractiveQuiz' && _0x318154.onerror();
				}
			});
		}
		return _0x4b2b6b;
	},
	'continueFun': function () {
		var _0x44473b = this;
		_0x44473b.fireEvent('continue');
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
		var _0x2f9395 = this;
		_0x2f9395.callParent(arguments);
		try {
			var _0x58bd2c = document.querySelector('.sp_video_img');
			_0x58bd2c.addEventListener('load', function () {
				_0x58bd2c.naturalWidth >= _0x58bd2c.naturalHeight ? _0x58bd2c.naturalWidth >= 400 && (_0x58bd2c.style.maxWidth = '70%', _0x58bd2c.style.maxHeight = '70%', _0x58bd2c.style.height = 'auto') : _0x58bd2c.naturalHeight >= 400 && (_0x58bd2c.style.maxHeight = '70%', _0x58bd2c.style.maxWidth = '70%', _0x58bd2c.style.width = 'auto');
			});
		} catch (_0xecc1c) {
			console.log(_0xecc1c);
		}
		_0x2f9395.el.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x529d53) {
				console.log(_0x529d53);
			}
			_0x2f9395.fireEvent('continue');
		});
		_0x2f9395.closeEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x3d0506) {
				console.log(_0x3d0506);
			}
			_0x2f9395.fireEvent('continue');
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
		var _0x386c28 = this, _0x3d41cf = _0x386c28.commentOpenEl, _0x33eccb = _0x386c28.boxEl;
		_0x386c28.callParent(arguments);
		_0x3d41cf.on('click', function () {
			_0x3d41cf.setStyle('display', 'none');
			_0x33eccb.setStyle('display', 'block');
			$('.comment_con').getNiceScroll().resize();
		});
		_0x386c28.stowEl.on('click', function () {
			_0x33eccb.setStyle('display', 'none');
			_0x3d41cf.setStyle('display', 'block');
		});
		_0x386c28.continueEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x51c0f0) {
				console.log(_0x51c0f0);
			}
			_0x386c28.fireEvent('continue');
		});
		var _0x3b0ff7 = $('.comment_con').niceScroll({
			'cursorborder': '',
			'cursorwidth': '8px',
			'cursorcolor': '#ACB4BF',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x386c28.scroller = _0x3b0ff7;
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
		var _0xfd0ce1 = this;
		_0xfd0ce1.callParent(arguments);
		try {
			dragFn && dragFn('#sp_video_ppt_pic', '#video_html5_api');
		} catch (_0x2276e2) {
			console.log(_0x2276e2);
		}
		var _0x5a80ae = Ext.get('video_html5_api').getStyle('height'), _0x13cb45 = Ext.get('video_html5_api').getStyle('width'), _0x30afe2 = parseInt(_0x5a80ae) > parseInt(_0x13cb45);
		_0x30afe2 ? Ext.get('sp_video_ppt_pic').addCls('sp_video_ppt_pic_w') : Ext.get('sp_video_ppt_pic').addCls('sp_video_ppt_pic_h');
		function _0x5e62() {
			Ext.get('sp_size_big').setStyle('display', 'none');
			Ext.get('sp_size_small').setStyle('display', 'block');
		}
		function _0x45c184() {
			Ext.get('sp_size_big').setStyle('display', 'block');
			Ext.get('sp_size_small').setStyle('display', 'none');
		}
		_0xfd0ce1.sizeBigEl.on('click', function (_0x597747) {
			_0x597747.stopPropagation();
			_0x30afe2 ? _0xfd0ce1.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0xfd0ce1.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x5e62();
		});
		_0xfd0ce1.sizeSmallEl.on('click', function (_0x37623c) {
			_0x37623c.stopPropagation();
			_0x30afe2 ? _0xfd0ce1.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0xfd0ce1.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x45c184();
		});
		_0xfd0ce1.sizeBigEl.on('touchend', function (_0x527635) {
			_0x527635.stopPropagation();
			_0x30afe2 ? _0xfd0ce1.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0xfd0ce1.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x5e62();
		});
		_0xfd0ce1.sizeSmallEl.on('touchend', function (_0xdf09be) {
			_0xdf09be.stopPropagation();
			_0x30afe2 ? _0xfd0ce1.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : _0xfd0ce1.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x45c184();
		});
	}
});
Ext.define('ans.videojs.TimelineObjects', {
	'extend': 'Ext.container.Container',
	'cls': 'ans-timelineobjects',
	'autoScroll': true,
	'hidden': true,
	'hideMode': 'visibility',
	'constructor': function (_0x20a4c7) {
		var _0x5d24b9 = this;
		_0x5d24b9.callParent(arguments);
		_0x5d24b9.bg = Ext.create('ans.videojs.TimelineObjectsBg', { 'renderTo': _0x20a4c7.renderTo });
		_0x5d24b9.objects = _0x20a4c7.objects && _0x20a4c7.objects.sort ? _0x5d24b9.sort_(_0x20a4c7.objects) : [];
		_0x5d24b9.current = 0;
		_0x5d24b9.showAnnotation = false;
	},
	'hideTimeline': function () {
		var _0xc1b59f = this;
		_0xc1b59f.showAnnotation && (_0xc1b59f.hide(), _0xc1b59f.showAnnotation = false);
	},
	'showObject': function (_0x55f704, _0x44f6d9, _0x986f9c) {
		var _0x5630bc = this, _0x281a2a = _0x5630bc.getBox(), _0x215aab = _0x5630bc.items.getAt(0), _0x70d1ae, _0x15dce6 = function () {
			_0x70d1ae.destroy();
			_0x5630bc.hide();
			_0x55f704.play();
			try {
				_0x55f704.eventCount && (_0x55f704.eventCount = _0x55f704.eventCount - 1);
			} catch (_0x4866a1) {
				console.log(_0x4866a1);
			}
		};
		_0x215aab != null && _0x215aab.destroy();
		if (_0x986f9c) {
			_0x986f9c.description && (_0x986f9c.description = _0x5630bc.htmlEncodeByRegExp(_0x986f9c.description));
			if (_0x986f9c.options && _0x986f9c.options.length > 0) {
				for (let _0x218ae5 = 0; _0x218ae5 < _0x986f9c.options.length; _0x218ae5++) {
					_0x986f9c.options[_0x218ae5].description && (_0x986f9c.options[_0x218ae5].description = _0x5630bc.htmlEncodeByRegExp(_0x986f9c.options[_0x218ae5].description));
				}
			}
		}
		if (_0x44f6d9 == 'IMG') {
			var _0x5ed020 = { 'src': _0x986f9c.url.replace(/origin/, _0x281a2a.width + '_' + _0x281a2a.height) };
			_0x70d1ae = _0x5630bc.add({
				'xtype': 'videoimg',
				'renderData': _0x5ed020
			});
			try {
				_0x55f704.eventCount && (_0x55f704.eventCount += 1);
			} catch (_0x4ae209) {
				console.log(_0x4ae209);
			}
		}
		if (_0x44f6d9 == 'QUIZ') {
			var _0x32e42a = function () {
			};
			if (_0x986f9c.errorBackTime && _0x986f9c.errorBackTime > 0) {
				var _0x16a27e = _0x986f9c.errorBackTime * 60;
				_0x32e42a = function () {
					var _0xf19040 = Math.max(_0x55f704.currentTime() - _0x16a27e, 0);
					_0x55f704.switchStatus = true;
					_0x55f704.currentTime(_0xf19040);
				};
			}
			_0x70d1ae = _0x5630bc.add({
				'xtype': 'videoquiz',
				'renderData': _0x986f9c,
				'quizErrorReportUrl': _0x5630bc.quizErrorReportUrl,
				'validationUrl2': _0x5630bc.validationUrl2,
				'onerror': _0x32e42a
			});
			try {
				_0x55f704.eventCount && (_0x55f704.eventCount += 1);
			} catch (_0x3f39d7) {
				console.log(_0x3f39d7);
			}
		}
		if (_0x44f6d9 == 'InteractiveQuiz') {
			var _0x32e42a = function () {
			};
			if (_0x986f9c.errorBackTime && _0x986f9c.errorBackTime > 0) {
				var _0x16a27e = _0x986f9c.errorBackTime * 60;
				_0x32e42a = function () {
					var _0x1cc5cf = Math.max(_0x55f704.currentTime() - _0x16a27e, 0);
					_0x55f704.switchStatus = true;
					_0x55f704.currentTime(_0x1cc5cf);
				};
			}
			if (_0x986f9c.errorBack == 1 && _0x986f9c.eBstartPoint != '') {
				var _0x16a27e = 0, _0x471a26 = _0x986f9c.eBstartPoint.split(':'), _0x5b846e = _0x471a26.length;
				_0x5b846e > 0 && (_0x5b846e == 1 ? _0x16a27e = parseInt(_0x471a26[0]) * 60 : _0x5b846e == 2 && (_0x16a27e = parseInt(_0x471a26[0]) * 60 + parseInt(_0x471a26[1])));
				_0x32e42a = function () {
					_0x55f704.switchStatus = true;
					_0x55f704.currentTime(_0x16a27e);
				};
			}
			_0x986f9c.dtype = 'InteractiveQuiz';
			_0x70d1ae = _0x5630bc.add({
				'xtype': 'videoquiz',
				'renderData': _0x986f9c,
				'quizErrorReportUrl': _0x5630bc.quizErrorReportUrl,
				'validationUrl2': _0x5630bc.validationUrl2,
				'quizRightCountUrl': _0x5630bc.quizRightCountUrl,
				'onerror': _0x32e42a
			});
			try {
				_0x55f704.eventCount && (_0x55f704.eventCount += 1);
			} catch (_0x205c5d) {
				console.log(_0x205c5d);
			}
		}
		if (_0x44f6d9 == 'PPT') {
			if (_0x986f9c.fp == 0) {
				return;
			}
			var _0xbc1805 = _0x986f9c.url;
			_0x986f9c.thumb ? _0xbc1805 = _0x986f9c.thumb + _0x986f9c.pageNo + '.png' : _0xbc1805 = _0xbc1805.replace(/swfv2\/.*$/, 'thumb/' + _0x986f9c.fp + '.png');
			var _0x5ed020 = { 'src': _0xbc1805 };
			_0x70d1ae = _0x5630bc.add({
				'xtype': 'videoppt',
				'renderData': _0x5ed020
			});
			try {
				_0x55f704.eventCount && (_0x55f704.eventCount += 1);
			} catch (_0x753de9) {
				console.log(_0x753de9);
			}
		}
		if (_0x44f6d9 == 'SyncAnnotationEvent') {
			_0x70d1ae = _0x5630bc.add({
				'xtype': 'videoannotation',
				'renderData': _0x986f9c
			});
			try {
				_0x55f704.eventCount && (_0x55f704.eventCount += 1);
			} catch (_0x5534a3) {
				console.log(_0x5534a3);
			}
			_0x55f704.pause();
			_0x5630bc.showAnnotation = true;
		}
		if (!_0x70d1ae) {
			return;
		}
		_0x70d1ae.on('continue', function () {
			_0x15dce6();
		});
		var _0x56be42 = !(_0x70d1ae.model === false);
		_0x5630bc.showModel(_0x56be42, _0x44f6d9);
		_0x56be42 && _0x55f704.pause();
		_0x44f6d9 == 'PPT' ? Ext.select('.ans-timelineobjects').setStyle('position', 'unset') : Ext.select('.ans-timelineobjects').setStyle('position', 'absolute');
	},
	'htmlEncodeByRegExp': function (_0x55f215) {
		var _0x523aad = '';
		if (_0x55f215.length == 0) {
			return '';
		}
		return _0x523aad = _0x55f215.replace(/&/g, '&amp;'), _0x523aad = _0x523aad.replace(/</g, '&lt;'), _0x523aad = _0x523aad.replace(/>/g, '&gt;'), _0x523aad = _0x523aad.replace(/\s/g, '&nbsp;'), _0x523aad = _0x523aad.replace(/\'/g, '&#39;'), _0x523aad = _0x523aad.replace(/\"/g, '&quot;'), _0x523aad;
	},
	'showModel': function (_0x35af4b, _0x24bed4) {
		try {
			top.configFullScreen && _0x24bed4 != 'PPT' && mediumSizeWindow();
		} catch (_0x247d24) {
			console.log(_0x247d24);
		}
		var _0x50df5a = this;
		_0x50df5a.show();
		if (_0x24bed4 == 'SyncAnnotationEvent') {
			var _0x26f5b3 = $('#video_html5_api').height();
			Ext.select('.comment_box').setStyle('height', _0x26f5b3 + 'px');
		}
		_0x35af4b ? (_0x50df5a.removeCls('ans-timelineobjects-autosize'), _0x50df5a.setAutoScroll(true), _0x50df5a.bg.show()) : (_0x50df5a.addCls('ans-timelineobjects-autosize'), _0x50df5a.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
		this.bg.hide.apply(this.bg, arguments);
	},
	'updateTime': function (_0x470059, _0x1e7cf9) {
		if (this.current >= this.objects.length || _0x470059.scrubbing()) {
			return;
		}
		var _0x145e0b = this, _0x193f37 = _0x145e0b.objects[_0x145e0b.current], _0x4a18dc = _0x193f37.style, _0x27aab5 = _0x193f37.datas[0];
		if (_0x1e7cf9 >= _0x27aab5.startTime) {
			_0x145e0b.current++;
			setTimeout(function () {
				_0x145e0b.showObject(_0x470059, _0x4a18dc, _0x27aab5);
			}, 20);
		}
	},
	'resetTime': function (_0x289790, _0x7f016c) {
		var _0x478a00 = this, _0x304b2a;
		for (_0x304b2a = 0; _0x304b2a < _0x478a00.objects.length; _0x304b2a++) {
			var _0x2921e0 = _0x478a00.objects[_0x304b2a].datas[0].startTime;
			if (_0x7f016c <= _0x2921e0) {
				break;
			}
		}
		_0x478a00.current = _0x304b2a;
	},
	'sort_': function (_0x4e2fe7) {
		return _0x4e2fe7 && _0x4e2fe7.sort && _0x4e2fe7.sort(function (_0x19aeb1, _0x2f8ee4) {
			var _0x54b27b = _0x19aeb1.datas[0].startTime, _0x574d0e = _0x2f8ee4.datas[0].startTime;
			return _0x54b27b - _0x574d0e;
		});
	}
});
(function () {
	var _0x115075 = videojs.getPlugin('plugin'), _0x114efc = videojs.extend(_0x115075, {
		'constructor': function (_0xf4ac11, _0x31f7ec) {
			_0x115075.call(this, _0xf4ac11, _0x31f7ec);
			if (!_0x31f7ec.url) {
				return;
			}
			var _0x53f31b = function (_0xac119a) {
				try {
					var _0x3d2170 = _0xac119a.datas;
					if (_0x3d2170 && _0x3d2170.length > 0) {
						return _0x3d2170[0].startTime;
					}
				} catch (_0x3e0bd5) {
					console.log(_0x3e0bd5);
				}
				return -1;
			}, _0x1d5232 = this;
			_0xf4ac11.eventPoints = [];
			_0xf4ac11.otherPointTimes = [];
			var _0x30372b = [];
			if (_0x31f7ec.begins && _0x31f7ec.begins > 0) {
				var _0x148479 = {
					'time': _0x31f7ec.begins,
					'text': '片头'
				};
				_0x30372b.push(_0x148479);
			}
			if (_0x31f7ec.ends && _0x31f7ec.ends > 0) {
				var _0x148479 = {
					'time': _0x31f7ec.ends,
					'text': '片尾'
				};
				_0x30372b.push(_0x148479);
			}
			_0xf4ac11.eventPoints = _0x30372b;
			Ext.Ajax.request({
				'url': _0x31f7ec.url,
				'async': false,
				'success': function (_0x368fda) {
					if (_0x368fda.status != 200) {
						return;
					}
					eval('var data=' + _0x368fda.responseText);
					if (data && data.length > 0) {
						var _0x266a1a = [];
						for (var _0x4ddddc = 0; _0x4ddddc < data.length; _0x4ddddc++) {
							var _0x207f05 = data[_0x4ddddc];
							if (_0x207f05.style == 'InteractiveQuiz') {
								var _0x1a767a = _0x207f05.datas;
								if (_0x1a767a && _0x1a767a.length > 0) {
									var _0x492500 = {
										'time': _0x1a767a[0].startTime,
										'text': '互动测验'
									};
								}
								_0x266a1a.push(_0x492500);
							}
							var _0x3a161a = _0x53f31b(_0x207f05);
							_0x3a161a >= 0 && _0xf4ac11.otherPointTimes.push(_0x3a161a);
						}
						_0x266a1a.forEach(function (_0x48ef03) {
							_0xf4ac11.eventPoints.push(_0x48ef03);
						});
					}
					var _0x5bef5b = Ext.create('ans.videojs.TimelineObjects', {
						'renderTo': _0xf4ac11.el_,
						'quizErrorReportUrl': _0x31f7ec.quizErrorReportUrl,
						'validationUrl2': _0x31f7ec.validationUrl2,
						'quizRightCountUrl': _0x31f7ec.quizRightCountUrl,
						'objects': data
					});
					_0xf4ac11.on('play', function () {
						_0x5bef5b.resetTime(_0xf4ac11, _0xf4ac11.currentTime());
						_0x5bef5b.hideTimeline();
					});
					_0xf4ac11.on('seekend', function () {
						_0x5bef5b.resetTime(_0xf4ac11, _0xf4ac11.currentTime());
						_0x5bef5b.hideTimeline();
					});
					_0xf4ac11.on('timeupdate', function () {
						!_0xf4ac11.paused() && (_0x5bef5b.updateTime(_0xf4ac11, _0xf4ac11.currentTime()), _0x5bef5b.hideTimeline());
					});
				}
			});
		}
	});
	videojs.registerPlugin('timelineObjects', _0x114efc);
}());
Ext.define('ans.videojs.customIframe', {
	'extend': 'Ext.Component',
	'xtype': 'customIframe',
	'renderTpl': ['<iframe src="{src}" class="configIframe" style="height: 100%;width: 100%;left: 0;top: 0;right: 0;bottom: 0; background: rgba(0,0,0,.6);"></iframe>'],
	'afterRender': function () {
		var _0x3f1b88 = this;
		_0x3f1b88.callParent(arguments);
		window.addEventListener('message', function (_0x3dedc5) {
			typeof _0x3dedc5.data != 'undefined' && _0x3dedc5.data.opType === 'closeIframe' && _0x3f1b88.fireEvent('continue');
		});
	}
});
Ext.define('ans.videojs.CustomIframe', {
	'extend': 'Ext.container.Container',
	'cls': 'ans-customIframe',
	'autoScroll': true,
	'hidden': true,
	'hideMode': 'visibility',
	'constructor': function (_0x547bc9) {
		var _0x26e94f = this;
		_0x26e94f.callParent(arguments);
		_0x26e94f.supportHeartbeat = false;
		_0x26e94f.courseid = '';
		_0x26e94f.clazzId = '';
		_0x26e94f.knowledgeid = '';
		_0x26e94f.objectid = '';
		_0x26e94f.playTime = 0;
		_0x26e94f.requesting = false;
		_0x26e94f.eventArray = [];
		_0x26e94f.userId = '';
		_0x26e94f.cookieFid = '';
		_0x26e94f.headOffset = '';
		typeof _0x547bc9.userId != 'undefined' && (_0x26e94f.userId = _0x547bc9.userId);
		typeof _0x547bc9.cookieFid != 'undefined' && (_0x26e94f.cookieFid = _0x547bc9.cookieFid);
		typeof _0x547bc9.headOffset != 'undefined' && (_0x26e94f.headOffset = _0x547bc9.headOffset);
		typeof _0x547bc9.eventArray != 'undefined' && (_0x26e94f.eventArray = _0x547bc9.eventArray);
		typeof _0x547bc9.supportHeartbeat != 'undefined' && (_0x26e94f.supportHeartbeat = _0x547bc9.supportHeartbeat);
		typeof _0x547bc9.courseid != 'undefined' && (_0x26e94f.courseid = _0x547bc9.courseid);
		typeof _0x547bc9.clazzId != 'undefined' && (_0x26e94f.clazzId = _0x547bc9.clazzId);
		typeof _0x547bc9.knowledgeid != 'undefined' && (_0x26e94f.knowledgeid = _0x547bc9.knowledgeid);
		typeof _0x547bc9.objectid != 'undefined' && (_0x26e94f.objectid = _0x547bc9.objectid);
		_0x26e94f.lastHeartbeat = 0;
		_0x26e94f.lastShowIFrame = 0;
		_0x26e94f.objects = _0x547bc9.objects && _0x547bc9.objects.sort ? _0x26e94f.sort_(_0x547bc9.objects) : [];
		_0x26e94f.eventArray.forEach(function (_0x3025f1) {
			var _0x3fd642 = parseInt(_0x3025f1.eventIntervalType);
			_0x3fd642 === 0 ? (_0x3025f1.lastHeartbeat = 0, _0x3025f1.pauseTimeRange = 0, _0x3025f1.pauseTimeStamp = -1, _0x3025f1.requesting = false) : _0x3fd642 === 1 && (_0x3025f1.timeArray = sortArray(_0x3025f1.timeArray), _0x3025f1.index = 0);
		});
	},
	'showIFrame': function (_0x49d5c8, _0x48a0d5, _0x42ec55) {
		try {
			var _0x46d6b1 = this;
			parseInt(_0x48a0d5) === 1 ? _0x46d6b1.showObject(_0x49d5c8, 'customIframe', _0x42ec55) : parseInt(_0x48a0d5) === 2 && showPopIframe(_0x42ec55, _0x49d5c8);
		} catch (_0x4ef097) {
			console.log(_0x4ef097);
		}
	},
	'deleteTemporaryEvent': function () {
		try {
			this.eventArray.forEach(function (_0x5a6c90, _0x1d1c38, _0x14b764) {
				typeof _0x5a6c90.temporaryEvent != 'undefined' && _0x5a6c90.temporaryEvent && _0x14b764.splice(_0x1d1c38, 1);
			});
		} catch (_0x47b74a) {
			console.log(_0x47b74a);
		}
	},
	'initHeartbeat': function (_0x1a6466, _0x43ee96, _0x37cfe3) {
		var _0x9e6fdd = this;
		if (typeof _0x1a6466 == 'undefined' || _0x1a6466 == '') {
			return;
		}
		Ext.Ajax.request({
			'url': _0x1a6466,
			'params': {
				'uid': _0x9e6fdd.userId,
				'schoolId': _0x9e6fdd.cookieFid,
				'moocClassId': _0x9e6fdd.clazzId,
				'moocCourseId': _0x9e6fdd.courseid,
				'chapterId': _0x9e6fdd.knowledgeid,
				'objectId': _0x9e6fdd.objectid,
				'videoProgress': _0x9e6fdd.headOffset,
				'totalVideoDuration': window.duration,
				'enc': _0x9e6fdd.videoEnc
			},
			'method': 'get',
			'success': function (_0x58f3a5) {
				try {
					var _0x6ffe8c = eval('(' + _0x58f3a5.responseText + ')');
					if (typeof _0x6ffe8c.result !== 'undefined' && parseInt(_0x6ffe8c.result) === 1) {
						if (_0x6ffe8c.showPop && typeof _0x6ffe8c.event != 'undefined') {
							var _0x45e151 = _0x6ffe8c.event.url + '?uid=' + _0x9e6fdd.userId + '&schoolId=' + _0x9e6fdd.cookieFid + '&moocClassId=' + _0x9e6fdd.clazzId + '&moocCourseId=' + _0x9e6fdd.courseid + '&chapterId=' + _0x9e6fdd.knowledgeid + '&objectId=' + _0x9e6fdd.objectid + '&videoProgress=' + _0x9e6fdd.headOffset + '&totalVideoDuration=' + window.duration + '&enc=' + _0x9e6fdd.videoEnc, _0xc8d5a0 = {
								'url': _0x45e151,
								'temporaryEvent': true,
								'eventInterval': 0,
								'eventType': _0x6ffe8c.event.eventType,
								'eventIntervalType': 0,
								'requesting': false,
								'lastHeartbeat': 0
							};
							_0x9e6fdd.eventArray.push(_0xc8d5a0);
						}
					} else {
						typeof _0x6ffe8c.errorCode != 'undefined' && alert('同步学习数据失败\uFF0C错误码\uFF1A' + _0x6ffe8c.errorCode);
					}
					if (typeof _0x37cfe3 != 'undefined') {
						_0x37cfe3.requesting = false;
						console.log('requesting: false');
					}
				} catch (_0x27796d) {
					console.log(_0x27796d);
				}
			},
			'failure': function () {
				typeof _0x37cfe3 != 'undefined' && (_0x37cfe3.requesting = false);
				console.log('heartbeatUrl request error');
			}
		});
	},
	'seekVideoTime': function (_0x398768, _0x16a142) {
		try {
			var _0x4b714a = this;
			typeof _0x4b714a.cmp != 'undefined' && _0x4b714a.cmp != null && (_0x4b714a.cmp.destroy(), _0x4b714a.hide(), _0x398768.eventCount = _0x398768.eventCount - 1, _0x398768.eventCount <= 0 && (_0x398768.currentTime(_0x16a142), _0x398768.play()));
		} catch (_0x1a2ce4) {
			console.log(_0x1a2ce4);
		}
	},
	'showObject': function (_0xa95d1d, _0x434232, _0x1baf5f) {
		var _0x8ce1b2 = this, _0x17443a = _0x8ce1b2.items.getAt(0), _0x412cda, _0xddfd27 = function (_0x199def) {
			_0x412cda.destroy();
			_0x8ce1b2.hide();
			_0x199def.eventCount = _0x199def.eventCount - 1;
			_0x199def.eventCount <= 0 && _0x199def.play();
		};
		_0x17443a != null && _0x17443a.destroy();
		_0x8ce1b2.cmp = null;
		if (_0x434232 == 'customIframe') {
			_0x412cda = _0x8ce1b2.add({
				'xtype': 'customIframe',
				'renderData': { 'src': _0x1baf5f }
			});
			_0xa95d1d.eventCount += 1;
		}
		if (!_0x412cda) {
			return;
		}
		_0x412cda.on('continue', function () {
			_0xddfd27(_0xa95d1d);
		});
		var _0x5b9cb6 = !(_0x412cda.model === false);
		_0x8ce1b2.showModel(_0x5b9cb6);
		_0x8ce1b2.cmp = _0x412cda;
		_0x5b9cb6 && _0xa95d1d.pause();
	},
	'showModel': function (_0x248685) {
		var _0x193d35 = this;
		_0x193d35.show();
		_0x248685 ? (_0x193d35.removeCls('ans-timelineobjects-autosize'), _0x193d35.setAutoScroll(true)) : (_0x193d35.addCls('ans-timelineobjects-autosize'), _0x193d35.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
	},
	'updateTime': function (_0x25adb4, _0x2d350d) {
		try {
			if (this.supportHeartbeat && isStuViewPage() && !_0x25adb4.paused()) {
				var _0x40a432 = new Date().getTime(), _0x4e16ff = this, _0x351371 = 0;
				for (var _0x11d655 = 0; _0x11d655 < _0x4e16ff.eventArray.length; _0x11d655++) {
					var _0x13d96d = _0x4e16ff.eventArray[_0x11d655], _0x1ae674 = parseInt(_0x13d96d.eventType), _0x1287a8 = parseInt(_0x13d96d.eventIntervalType);
					if (_0x1287a8 === 0) {
						if (_0x1ae674 === 0 && _0x13d96d.requesting || _0x25adb4.scrubbing()) {
							continue;
						}
						var _0x2740a5 = _0x40a432 - _0x13d96d.lastHeartbeat;
						_0x13d96d.pauseTimeRange > 0 && (_0x2740a5 = _0x2740a5 - _0x13d96d.pauseTimeRange);
						var _0x6256ca = _0x2740a5 / 1000;
						_0x6256ca = parseInt(_0x6256ca);
						if (_0x6256ca > _0x13d96d.eventInterval) {
							if (_0x1ae674 === 1 || _0x1ae674 === 2) {
								_0x351371++;
								if (_0x351371 > 1) {
									break;
								}
							}
							_0x13d96d.pauseTimeRange = 0;
							_0x13d96d.lastHeartbeat = _0x40a432;
							_0x1ae674 === 0 ? (_0x13d96d.requesting = true, _0x4e16ff.initHeartbeat(_0x13d96d.url, _0x25adb4, _0x13d96d)) : (_0x1ae674 === 1 || _0x1ae674 === 2) && (_0x4e16ff.showIFrame(_0x25adb4, _0x1ae674, _0x13d96d.url), typeof _0x13d96d.temporaryEvent != 'undefined' && _0x13d96d.temporaryEvent && _0x4e16ff.deleteTemporaryEvent());
						}
					} else {
						if (_0x1287a8 === 1) {
							if (_0x13d96d.index >= _0x13d96d.timeArray.length || _0x25adb4.scrubbing()) {
								continue;
							}
							var _0x7f540c = _0x13d96d.timeArray[_0x13d96d.index];
							if (typeof _0x7f540c == 'undefined') {
								continue;
							}
							if (_0x2d350d >= parseInt(_0x7f540c)) {
								if (_0x1ae674 === 1 || _0x1ae674 === 2) {
									_0x351371++;
									if (_0x351371 > 1) {
										break;
									}
								}
								_0x13d96d.index++;
								var _0x118efb = _0x13d96d.url;
								_0x1ae674 === 0 ? _0x4e16ff.initHeartbeat(_0x118efb, _0x25adb4) : (_0x1ae674 === 1 || _0x1ae674 === 2) && _0x4e16ff.showIFrame(_0x25adb4, _0x1ae674, _0x118efb);
							}
						}
					}
				}
			}
		} catch (_0x1d53f4) {
			console.log(_0x1d53f4);
		}
	},
	'resetTime': function (_0x2d8fa1, _0x57bc04) {
		try {
			var _0x1338b5 = this, _0x3d50f7;
			for (_0x3d50f7 = 0; _0x3d50f7 < _0x1338b5.eventArray.length; _0x3d50f7++) {
				var _0x341b4e = _0x1338b5.eventArray[_0x3d50f7];
				if (parseInt(_0x341b4e.eventIntervalType) === 1) {
					for (var _0x23981a = 0; _0x23981a < _0x341b4e.timeArray.length; _0x23981a++) {
						var _0x2b0471 = _0x341b4e.timeArray[_0x23981a];
						if (_0x57bc04 <= _0x2b0471) {
							break;
						}
					}
					_0x341b4e.index = _0x23981a;
				}
			}
		} catch (_0x3ccd8f) {
			console.log(_0x3ccd8f);
		}
	}
});
;
function sortArray(_0xc75e24) {
	try {
		return _0xc75e24 && _0xc75e24.sort && _0xc75e24.sort(function (_0x5802b0, _0x24e0b1) {
			return _0x5802b0 - _0x24e0b1;
		});
	} catch (_0x275987) {
		console.log(_0x275987);
	}
	return _0xc75e24;
}
;
(function () {
	var _0x41c960 = videojs.getPlugin('plugin'), _0x1b0935 = videojs.extend(_0x41c960, {
		'constructor': function (_0x1d9556, _0x507fde) {
			if (typeof _0x507fde.supportHeartbeat == 'undefined' || !_0x507fde.supportHeartbeat) {
				return;
			}
			_0x41c960.call(this, _0x1d9556, _0x507fde);
			_0x1d9556.pauseTimeStamp = 0;
			_0x1d9556.pauseTimeRange = 0;
			var _0x352018 = null;
			try {
				_0x352018 = Ext.create('ans.videojs.CustomIframe', {
					'renderTo': _0x1d9556.el_,
					'supportHeartbeat': _0x507fde.supportHeartbeat,
					'eventArray': _0x507fde.eventArray,
					'courseid': _0x507fde.courseid,
					'clazzId': _0x507fde.clazzId,
					'knowledgeid': _0x507fde.knowledgeid,
					'objectid': _0x507fde.objectid,
					'videoEnc': _0x507fde.videoEnc,
					'userId': _0x507fde.userId,
					'cookieFid': _0x507fde.cookieFid,
					'headOffset': _0x507fde.headOffset
				});
			} catch (_0x53b581) {
				console.log(_0x53b581);
			}
			if (_0x352018 == null) {
				return;
			}
			_0x1d9556.on('play', function () {
				try {
					var _0x1e2d6d = new Date().getTime();
					_0x352018.eventArray.forEach(function (_0x438f14) {
						var _0x3f2c1c = parseInt(_0x438f14.eventIntervalType);
						if (_0x3f2c1c === 0) {
							if (_0x438f14.pauseTimeStamp > 0) {
								_0x438f14.pauseTimeStamp < _0x438f14.lastHeartbeat && (_0x438f14.pauseTimeStamp = _0x438f14.lastHeartbeat);
								var _0x480e5d = _0x1e2d6d - _0x438f14.pauseTimeStamp;
								_0x438f14.pauseTimeRange += _0x480e5d;
							}
							_0x438f14.pauseTimeStamp = 0;
						}
					});
					_0x352018.resetTime(_0x1d9556, _0x1d9556.currentTime());
				} catch (_0xb32a63) {
					console.log(_0xb32a63);
				}
			});
			_0x1d9556.on('seekend', function () {
				_0x352018.resetTime(_0x1d9556, _0x1d9556.currentTime());
			});
			_0x1d9556.on('pause', function () {
				try {
					var _0x2e24ca = new Date().getTime();
					_0x352018.eventArray.forEach(function (_0x2de7ae) {
						var _0x2df5c8 = parseInt(_0x2de7ae.eventIntervalType);
						_0x2df5c8 === 0 && (_0x2de7ae.pauseTimeStamp = _0x2e24ca);
					});
				} catch (_0x1da42c) {
					console.log(_0x1da42c);
				}
			});
			_0x1d9556.on('timeupdate', function () {
				try {
					!_0x1d9556.paused() && _0x352018.updateTime(_0x1d9556, parseInt(_0x1d9556.currentTime()));
					_0x352018.playTime = _0x1d9556.currentTime();
				} catch (_0x32c234) {
					console.log(_0x32c234);
				}
			});
			window.addEventListener('message', function (_0x49b1a4) {
				try {
					if (!_0x507fde.supportHeartbeat || !isStuViewPage()) {
						return;
					}
					var _0x5890ae = _0x49b1a4.data;
					if (typeof _0x5890ae == 'undefined') {
						_0x352018.resetDiv(_0x1d9556);
						return;
					}
					var _0x37fff8 = parseInt(_0x507fde.duration);
					if (_0x5890ae.opType === 'fastForward') {
						var _0x7b53b0 = _0x5890ae.value;
						if (typeof _0x7b53b0 === 'undefined') {
							_0x352018.resetDiv(_0x1d9556);
							return;
						}
						_0x7b53b0 = parseInt(_0x7b53b0);
						if (!(_0x7b53b0 > 0)) {
							_0x352018.resetDiv(_0x1d9556);
							return;
						}
						_0x1d9556.ignoreSeek = false;
						_0x1d9556.switchStatus = true;
						var _0x4c0d37 = _0x1d9556.currentTime();
						_0x4c0d37 = parseInt(_0x4c0d37);
						var _0x2cc263 = _0x4c0d37 + _0x7b53b0;
						if (_0x2cc263 > _0x37fff8) {
							_0x352018.resetDiv(_0x1d9556);
							return;
						}
						_0x352018.seekVideoTime(_0x1d9556, _0x2cc263);
						return;
					}
					if (_0x5890ae.opType === 'videoStartTime') {
						var _0x7b53b0 = _0x5890ae.value;
						if (typeof _0x7b53b0 === 'undefined') {
							_0x352018.resetDiv(_0x1d9556);
							return;
						}
						_0x7b53b0 = parseInt(_0x7b53b0);
						if (!(_0x7b53b0 >= 0) || _0x7b53b0 > _0x37fff8) {
							_0x352018.resetDiv(_0x1d9556);
							return;
						}
						_0x1d9556.ignoreSeek = false;
						_0x1d9556.switchStatus = true;
						_0x352018.seekVideoTime(_0x1d9556, _0x7b53b0);
					}
				} catch (_0x1c7a22) {
					console.log(_0x1c7a22);
				}
			});
		}
	});
	videojs.registerPlugin('customIframePlugin', _0x1b0935);
}());
(function () {
	var _0x37d8c9 = videojs.getPlugin('plugin'), _0x374846 = videojs.extend(_0x37d8c9, {
		'constructor': function (_0x3f5e89, _0x3fb475) {
			_0x37d8c9.call(this, _0x3f5e89, _0x3fb475);
			if (!_0x3fb475.url) {
				return;
			}
			var _0x2da85e = this;
			Ext.Ajax.request({
				'url': _0x3fb475.url,
				'async': false,
				'success': function (_0x43bf1e) {
					if (_0x43bf1e.status != 200) {
						return;
					}
					eval('var data=' + _0x43bf1e.responseText);
					if (!data.status) {
						return;
					}
					var _0x445e4d = videojs('video');
					if (_0x445e4d && typeof _0x445e4d.markers === 'function') {
						var _0x28e676 = _0x3f5e89.eventPoints;
						_0x28e676.push.apply(_0x28e676, data.list);
						_0x445e4d.markers({
							'markerTip': {
								'display': true,
								'text': function (_0x2c2cf1) {
									return _0x2c2cf1.text;
								}
							},
							'markers': _0x28e676,
							'onMarkerClick': function (_0x5bcac3) {
								if (_0x3fb475.ff != 1) {
									return false;
								}
								var _0x15b8e1 = $(this).data('marker-key');
								return _0x3f5e89.currentTime(_0x5bcac3.time), false;
							}
						});
					}
					if (data.list && data.list.length > 0) {
						var _0x3fd899 = [], _0x5a1cd0 = {
							_0x563390: _0x9e0537,
							_0x563390: _0xa807e5
						};
						for (var _0x2c6b52 = 0; _0x2c6b52 < data.list.length; _0x2c6b52++) {
							var _0x3667e6 = data.list[_0x2c6b52], _0x563390 = _0x3667e6.text;
							if (!_0x5a1cd0[_0x563390]) {
								var _0x9e0537 = [];
								_0x9e0537.push(_0x3667e6);
								_0x3fd899.push(_0x563390);
							} else {
								var _0xa807e5 = _0x5a1cd0[_0x563390];
								_0xa807e5.push(_0x3667e6);
							}
						}
						function _0x47ac16(_0x57ca62) {
							var _0x32e513 = '<div class="zsCloud_box"><h2 class="zsCloud_seltime">选择时间</h2><div class="zsCloud_div"><div class="zsCloud_div_list">';
							for (var _0x4e7fd7 = 0; _0x4e7fd7 < _0x57ca62.length; _0x4e7fd7++) {
								var _0x257ad6 = _0x57ca62[_0x4e7fd7], _0x2a8816 = Ext.fly(_0x1688da.elements[0]).select('.topicId' + _0x257ad6.topicid + ':not(.markertime)'), _0x1b012f = videojs.formatTime(_0x257ad6.time);
								_0x2a8816 && _0x2a8816.elements[0] && _0x2a8816.elements[0].parentElement.remove();
								_0x32e513 += '<div class="zsCloud_item topicId' + _0x257ad6.topicid + '" data-marker-time="' + _0x257ad6.time + '" title="' + _0x1b012f + '" onclick="markersPlayer(this)">' + _0x1b012f + '</div>';
							}
							return _0x32e513 += '</div></div></div>', _0x32e513;
						}
						Ext.select('.zsCloud').setStyle('display', 'block');
						var _0x1688da = Ext.select('.zsCloud_ul');
						if (_0x1688da && _0x1688da.elements[0]) {
							var _0x59a8f2;
							for (var _0x57dede = 0; _0x57dede < _0x3fd899.length; _0x57dede++) {
								var _0x1e8e61 = _0x3fd899[_0x57dede], _0xbe1625 = _0x5a1cd0[_0x1e8e61], _0x319c0f = '';
								if (_0xbe1625) {
									if (_0xbe1625.length == 1) {
										var _0x5aee3a = _0xbe1625[0], _0x38bd92 = Ext.fly(_0x1688da.elements[0]).select('.topicId' + _0x5aee3a.topicid + ':not(.markertime)'), _0x509cd4 = videojs.formatTime(_0x5aee3a.time);
										_0x38bd92 && _0x38bd92.elements[0] && _0x38bd92.elements[0].parentElement.remove();
										_0x319c0f = '<li><span class=\'topicId' + _0x5aee3a.topicid + ' markertime\' data-marker-time=\'' + _0x5aee3a.time + '\' title=\'' + _0x509cd4 + '\' onclick=\'markersPlayer(this)\'>' + _0x5aee3a.text + '</span></li>';
									} else {
										_0x319c0f = '<li class="zsCloud_select"><span class="zsCloud_span">' + _0x1e8e61 + '</span>';
										_0xbe1625 && _0xbe1625.length > 0 ? _0x319c0f += _0x47ac16(_0xbe1625) : _0x319c0f += '</li>';
									}
								}
								_0x59a8f2 ? _0x59a8f2 = Ext.DomHelper.insertHtml('afterEnd', _0x59a8f2.elements[0], _0x319c0f) : _0x59a8f2 = Ext.DomHelper.insertHtml('afterBegin', _0x1688da.elements[0], _0x319c0f);
								_0x59a8f2 = Ext.fly(_0x59a8f2).select('');
							}
						}
						_0x3fb475.videoTopicCloud && _0x3fb475.videoTopicCloud == 1 && (Ext.select('.zsCloud_down').setStyle('display', 'block'), Ext.select('.zsCloud_body').setStyle('display', 'block'));
					}
					var _0x3c9266 = new Map(), _0xc628a6 = new Array();
					if (data.list && data.list.length > 0) {
						for (var _0x2c6b52 = 0; _0x2c6b52 < data.list.length; _0x2c6b52++) {
							var _0x25d3dd = data.list[_0x2c6b52].topicid, _0x1357cb = _0x3c9266.get(_0x25d3dd);
							!_0x1357cb && (_0x1357cb = {}, _0x1357cb.text = data.list[_0x2c6b52].text, _0x1357cb.time = data.list[_0x2c6b52].time, _0x1357cb.topicid = data.list[_0x2c6b52].topicid, _0x1357cb.weight = 0, _0x1357cb.html = {
								'data-marker-time': data.list[_0x2c6b52].time,
								'onclick': 'markersPlayer(this)'
							}, _0x3c9266.set(_0x25d3dd, _0x1357cb), _0xc628a6.push(_0x1357cb));
							_0x1357cb.weight += 1;
						}
					}
					$(function () {
						_0xc628a6.length != 0 && $('#word_cloud').jQCloud(_0xc628a6);
						function _0x587a1e(_0x51a5c0) {
							$(_0x51a5c0).niceScroll({
								'cursorborder': '',
								'cursorwidth': 8,
								'cursorcolor': '#DADFE6',
								'boxzoom': false,
								'autohidemode': true
							});
							setInterval(function () {
								$(_0x51a5c0).getNiceScroll().resize();
							}, 300);
						}
						$('.zsCloud_box').each(function (_0x1c34e8) {
							$(this).find('.zsCloud_div').attr('id', 'zsCloud_div_' + _0x1c34e8);
							_0x587a1e('#zsCloud_div_' + _0x1c34e8);
						});
					});
					$('.zsCloud_down').click(function () {
						var _0x3a86f7 = $('.zsCloud_body');
						_0x3a86f7.is(':visible') ? (_0x3a86f7.hide(), $(this).addClass('zsCloud_up'), $(this).text('展开')) : (_0x3a86f7.show(), $(this).removeClass('zsCloud_up'), $(this).text('收起'));
					});
				}
			});
		}
	});
	videojs.registerPlugin('marker', _0x374846);
}());
(function () {
	var _0x35f279 = videojs.getPlugin('plugin'), _0xa785a4 = videojs.extend(_0x35f279, {
		'constructor': function (_0x92f297, _0x504841) {
			_0x35f279.call(this, _0x92f297, _0x504841);
			var _0x590303 = this, _0x40774f = _0x504841.subtitleUrl, _0x28f834 = function (_0x4fa4b9) {
				var _0x1a8f29 = _0x4fa4b9.match(/support\/(\w+).\w+/);
				if (_0x1a8f29) {
					return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0x1a8f29[1];
				}
			}, _0x3065c3 = function (_0x594a6c, _0x3d6384, _0x35b943) {
				_0x92f297.addRemoteTextTrack({
					'kind': 'subtitles',
					'srclang': 'cn',
					'label': _0x594a6c,
					'src': _0x3d6384,
					'default': _0x35b943
				}, true);
			};
			_0x92f297.ready(function () {
				_0x40774f && Ext.Ajax.request({
					'url': _0x40774f,
					'success': function (_0x5254d8) {
						if (_0x5254d8.status != 200) {
							return;
						}
						eval('var subs=' + _0x5254d8.responseText);
						var _0x2a484f = 0, _0x441f4a = 0;
						subs.length > 0 && Ext.each(subs, function (_0x520520) {
							_0x504841.translate == 1 && _0x520520.name == 'English' ? (_0x520520.selected = true, _0x441f4a = _0x2a484f) : _0x520520.selected = false;
							_0x3065c3(_0x520520.name, _0x28f834(_0x520520.url), _0x520520.selected);
							_0x2a484f++;
						});
						if (_0x504841.translate == 1) {
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').setHTML('翻译');
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').addCls('vjs-hide-content');
						}
						setTimeout(function () {
							var _0x2dfdc9 = _0x92f297.textTracks();
							_0x504841.translate == 1 ? _0x2dfdc9 && _0x2dfdc9[_0x441f4a] ? _0x2dfdc9[_0x441f4a].mode = 'showing' : _0x2dfdc9 && _0x2dfdc9[0] && (_0x2dfdc9[0].mode = 'showing') : _0x2dfdc9 && _0x2dfdc9[0] && (_0x2dfdc9[0].mode = 'showing');
						}, 500);
					}
				});
				var _0x481a09 = _0x92f297.textTrackSettings;
				_0x481a09.setValues({
					'backgroundColor': '#000',
					'backgroundOpacity': '0',
					'edgeStyle': 'uniform'
				});
				_0x481a09.updateDisplay();
			});
		}
	});
	videojs.registerPlugin('subtitle', _0xa785a4);
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
		var _0x56c4e7 = this;
		_0x56c4e7.callParent(arguments);
		var _0x459514 = Ext.query('input', _0x56c4e7.el.dom);
		Ext.each(_0x459514, function (_0x58dae9, _0x3adb5d) {
			Ext.fly(_0x58dae9).on('click', function () {
				_0x56c4e7.onSelected(_0x3adb5d);
			});
		});
		try {
			typeof createVideoTask === 'function' ? createVideoTask() : console.log('createVideoTask函数不存在\uFF01');
		} catch (_0x455035) {
		}
		try {
			if (typeof aplus_queue != 'undefined') {
				var _0x512cc0 = parent.AttachmentSetting;
				if (_0x512cc0) {
					var _0x3e8593 = _0x512cc0.aplus_video_id, _0x4ff86f = _0x512cc0.aplus_resource_id, _0x22379b = _0x512cc0.knowledgename, _0x28f80b = _0x512cc0.coursename;
					aplus_queue.push({
						'action': 'aplus.record',
						'arguments': [
							'pybk_error',
							'OTHER',
							{
								'video_name': _0x22379b,
								'video_id': _0x3e8593,
								'resource_id': _0x4ff86f,
								'resource_name': _0x28f80b
							}
						]
					});
				}
			}
		} catch (_0x56784e) {
		}
	},
	'setErrorMsg': function (_0x188c2e) {
		Ext.fly(this.errorMsgEl).setHTML(_0x188c2e);
	}
});
Ext.define('ans.videojs.ErrorNote', {
	'extend': 'Ext.Component',
	'cls': 'ans-vjserrdisplay',
	'renderTpl': ['<div class="ans-vjserrdisplay-title">播放出现异常\u3002</div>']
});
(function () {
	var _0x51c8b8 = videojs.getComponent('ErrorDisplay'), _0x51660e = videojs.extend(_0x51c8b8, {
		'constructor': function (_0x20fd3b, _0x474530) {
			_0x51c8b8.call(this, _0x20fd3b, _0x474530);
		},
		'colse': function () {
			_0x51c8b8.prototype.colse.call(this);
			me.ansErrorDisplay && (me.ansErrorDisplay.destroy(), me.ansErrorDisplay = null);
		},
		'fill': function () {
			_0x51c8b8.prototype.fill.call(this);
			var _0x128cc7 = this, _0x1e8f9e = _0x128cc7.player_, _0x1f491f = _0x1e8f9e.options_.playlines, _0x509968 = Ext.query('.vjs-modal-dialog-content', _0x128cc7.el_)[0];
			_0x128cc7.ansErrorDisplay && (_0x128cc7.ansErrorDisplay.destroy(), delete _0x128cc7.ansErrorDisplay);
			if (!_0x1e8f9e.selectCDN || !_0x1f491f) {
				_0x128cc7.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', { 'renderTo': _0x128cc7.el_ });
				return;
			}
			var _0x4db35e = _0x1e8f9e.currentPlayline(), _0x10af37 = 0;
			Ext.each(_0x1f491f, function (_0xbb81e3, _0x13657c) {
				_0x4db35e == _0xbb81e3 && (_0x10af37 = _0x13657c);
			});
			_0x128cc7.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
				'renderTo': _0x128cc7.el_,
				'onSelected': function (_0x223c5f) {
					_0x1e8f9e.selectCDN(_0x223c5f);
					_0x128cc7.close();
				},
				'renderData': {
					'playlines': _0x1f491f,
					'errorMsg': _0x128cc7.content(),
					'selectedIndex': _0x10af37
				}
			});
		}
	});
	videojs.registerComponent('ErrorDisplay', _0x51660e);
}());
(function () {
	var _0x3e21ac = null;
	typeof window.videojs === 'undefined' && typeof require === 'function' ? _0x3e21ac = require('video.js') : _0x3e21ac = window.videojs;
	(function (_0x229d27, _0x5de1a7) {
		var _0x5f3290 = {}, _0x9cce68, _0x1dc077 = {}, _0x1414de = {};
		function _0x4369c2(_0x32dfc8, _0x118fcd, _0x549c74, _0x19aad6) {
			_0x1dc077 = {
				'label': _0x549c74,
				'sources': _0x118fcd
			};
			if (typeof _0x19aad6 === 'function') {
				return _0x19aad6(_0x32dfc8, _0x118fcd, _0x549c74);
			}
			return _0x32dfc8.src(_0x118fcd.map(function (_0x2f178f) {
				return {
					'src': _0x2f178f.src,
					'type': _0x2f178f.type,
					'res': _0x2f178f.res
				};
			})), _0x32dfc8;
		}
		var _0x347fd8 = _0x5de1a7.getComponent('MenuItem'), _0x5be287 = _0x5de1a7.extend(_0x347fd8, {
			'constructor': function (_0x502d08, _0x3ce222, _0x468bfc, _0x52ccb5) {
				this.onClickListener = _0x468bfc;
				this.label = _0x52ccb5;
				_0x347fd8.call(this, _0x502d08, _0x3ce222);
				this.src = _0x3ce222.src;
				this.on('click', this.onClick);
				this.on('touchstart', this.onClick);
				_0x3ce222.initialySelected && (this.showAsLabel(), this.selected(true), this.addClass('vjs-selected'));
			},
			'showAsLabel': function () {
				this.label && (this.label.innerHTML = this.options_.label);
			},
			'onClick': function (_0x49079d) {
				this.onClickListener(this);
				var _0x3995ad = this.player_.currentTime(), _0x2feb59 = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x2feb59 && this.player_.bigPlayButton.hide();
				typeof _0x49079d !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x49079d = this.options_.customSourcePicker);
				var _0x13de45 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x13de45 = 'timeupdate');
				_0x4369c2(this.player_, this.src, this.options_.label, _0x49079d).one(_0x13de45, function () {
					var _0x374f5a = this.player_;
					_0x374f5a.switchStatus = true;
					_0x374f5a.currentTime(_0x3995ad);
					!_0x2feb59 && _0x374f5a.play();
					_0x374f5a.trigger('resolutionchange');
				});
			}
		});
		_0x5de1a7.registerComponent('ResolutionMenuItem', _0x5be287);
		var _0x172bce = _0x5de1a7.getComponent('MenuButton'), _0x2833b0 = _0x5de1a7.extend(_0x172bce, {
			'constructor': function (_0x20a737, _0xeb0412, _0x8926ad, _0x436766) {
				this.sources = _0xeb0412.sources;
				this.label = _0x436766;
				this.label.innerHTML = _0xeb0412.initialySelectedLabel;
				_0x172bce.call(this, _0x20a737, _0xeb0412, _0x8926ad);
				this.controlText('Quality');
				if (_0x8926ad.dynamicLabel) {
					this.el().appendChild(_0x436766);
				} else {
					var _0x20876c = document.createElement('span');
					_0x5de1a7.dom.addClass(_0x20876c, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x20876c);
				}
			},
			'createItems': function () {
				var _0x382e99 = [], _0x506193 = this.sources && this.sources.label || {}, _0x7079c1 = function (_0x9d4113) {
					_0x382e99.map(function (_0x36dc2d) {
						_0x36dc2d.selected(_0x36dc2d === _0x9d4113);
						_0x36dc2d.removeClass('vjs-selected');
					});
				};
				for (var _0x248c0f in _0x506193) {
					_0x506193.hasOwnProperty(_0x248c0f) && (_0x382e99.push(new _0x5be287(this.player_, {
						'label': _0x248c0f,
						'src': _0x506193[_0x248c0f],
						'initialySelected': _0x248c0f === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x7079c1, this.label)), _0x1414de[_0x248c0f] = _0x382e99[_0x382e99.length - 1]);
				}
				return _0x382e99;
			}
		});
		_0x9cce68 = function (_0x22e38b) {
			var _0x8decc1 = _0x5de1a7.mergeOptions(_0x5f3290, _0x22e38b), _0x3920da = this, _0xf4a7d7 = document.createElement('span'), _0x38ab34 = {};
			_0x5de1a7.dom.addClass(_0xf4a7d7, 'vjs-resolution-button-label');
			_0x3920da.updateSrc = function (_0x41a55e) {
				if (!_0x41a55e) {
					return _0x3920da.src();
				}
				_0x3920da.controlBar.resolutionSwitcher && (_0x3920da.controlBar.resolutionSwitcher.dispose(), delete _0x3920da.controlBar.resolutionSwitcher);
				_0x41a55e = _0x41a55e.sort(_0x38d1e2);
				_0x38ab34 = _0x17ab21(_0x41a55e);
				var _0x32059e = _0x18b163(_0x38ab34, _0x41a55e), _0x196d11 = new _0x2833b0(_0x3920da, {
					'sources': _0x38ab34,
					'initialySelectedLabel': _0x32059e.label,
					'initialySelectedRes': _0x32059e.res,
					'customSourcePicker': _0x8decc1.customSourcePicker
				}, _0x8decc1, _0xf4a7d7);
				return _0x5de1a7.dom.addClass(_0x196d11.el(), 'vjs-resolution-button'), _0x3920da.controlBar.resolutionSwitcher = _0x3920da.controlBar.el_.insertBefore(_0x196d11.el_, _0x3920da.controlBar.getChild('fullscreenToggle').el_), _0x3920da.controlBar.resolutionSwitcher.dispose = function () {
					this.parentNode.removeChild(this);
				}, _0x4369c2(_0x3920da, _0x32059e.sources, _0x32059e.label, _0x8decc1.customSourcePicker);
			};
			_0x3920da.currentResolution = function (_0x8e8e75, _0x2ed5e2) {
				if (_0x8e8e75 == null) {
					return _0x1dc077;
				}
				return _0x1414de[_0x8e8e75] != null && _0x1414de[_0x8e8e75].onClick(_0x2ed5e2), _0x3920da;
			};
			_0x3920da.getGroupedSrc = function () {
				return _0x38ab34;
			};
			function _0x38d1e2(_0x396d6e, _0x9f54a9) {
				if (!_0x396d6e.res || !_0x9f54a9.res) {
					return 0;
				}
				return +_0x9f54a9.res - +_0x396d6e.res;
			}
			function _0x17ab21(_0x49bc77) {
				var _0x2611af = {
					'label': {},
					'res': {},
					'type': {}
				};
				return _0x49bc77.map(function (_0x2ddc83) {
					_0x14c308(_0x2611af, 'label', _0x2ddc83);
					_0x14c308(_0x2611af, 'res', _0x2ddc83);
					_0x14c308(_0x2611af, 'type', _0x2ddc83);
					_0x1f1d08(_0x2611af, 'label', _0x2ddc83);
					_0x1f1d08(_0x2611af, 'res', _0x2ddc83);
					_0x1f1d08(_0x2611af, 'type', _0x2ddc83);
				}), _0x2611af;
			}
			function _0x14c308(_0x5e7957, _0xd0e7a1, _0xa42358) {
				_0x5e7957[_0xd0e7a1][_0xa42358[_0xd0e7a1]] == null && (_0x5e7957[_0xd0e7a1][_0xa42358[_0xd0e7a1]] = []);
			}
			function _0x1f1d08(_0x37bdf9, _0xa27553, _0x2df50e) {
				_0x37bdf9[_0xa27553][_0x2df50e[_0xa27553]].push(_0x2df50e);
			}
			function _0x18b163(_0x2770f3, _0x2fa91d) {
				var _0x1fd847 = _0x8decc1.default, _0x18bb1d = '';
				return _0x1fd847 === 'high' ? (_0x1fd847 = _0x2fa91d[0].res, _0x18bb1d = _0x2fa91d[0].label) : _0x1fd847 === 'low' || _0x1fd847 == null || !_0x2770f3.res[_0x1fd847] ? (_0x1fd847 = _0x2fa91d[_0x2fa91d.length - 1].res, _0x18bb1d = _0x2fa91d[_0x2fa91d.length - 1].label) : _0x2770f3.res[_0x1fd847] && (_0x18bb1d = _0x2770f3.res[_0x1fd847][0].label), {
					'res': _0x1fd847,
					'label': _0x18bb1d,
					'sources': _0x2770f3.res[_0x1fd847]
				};
			}
			_0x3920da.ready(function () {
				_0x3920da.options_.sources.length > 0 && _0x3920da.setTimeout(function () {
					_0x3920da.updateSrc(_0x3920da.options_.sources);
				}, 1);
			});
		};
		_0x5de1a7.registerPlugin('videoJsResolutionSwitcher', _0x9cce68);
	}(window, _0x3e21ac));
}());
(function () {
	(function (_0x5a03c4, _0xf2522c) {
		var _0x2f89e8 = {}, _0x1be4f9, _0x5a4eb0 = {}, _0x25b5a5 = { _0x415aea: _0x2b7101[_0x2b7101.length - 1] };
		function _0x3c4949(_0x5cddd7, _0x5ba794, _0x4b5e22, _0x474304) {
			_0x5a4eb0 = _0x5ba794;
			if (typeof _0x474304 === 'function') {
				return _0x474304(_0x5cddd7, _0x5ba794, _0x4b5e22);
			}
			return _0x5cddd7;
		}
		var _0x537cb0 = _0xf2522c.getComponent('ResolutionMenuItem'), _0x28e26f = _0xf2522c.extend(_0x537cb0, {
			'onClick': function (_0x46439f) {
				this.onClickListener(this);
				var _0x5675e8 = this.player_.currentTime(), _0x564104 = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x564104 && this.player_.bigPlayButton.hide();
				typeof _0x46439f !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x46439f = this.options_.customSourcePicker);
				var _0x181cf7 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x181cf7 = 'timeupdate');
				var _0x2efbf5 = _0x3c4949(this.player_, this.src, this.options_.label, _0x46439f);
				_0x2efbf5 && _0x2efbf5.one(_0x181cf7, function () {
					_0x2efbf5.switchStatus = true;
					_0x2efbf5.currentTime(_0x5675e8);
					!_0x564104 && _0x2efbf5.play();
					_0x2efbf5.trigger('playlinechange');
				});
			}
		}), _0x216862 = _0xf2522c.getComponent('MenuButton'), _0x5d230f = _0xf2522c.extend(_0x216862, {
			'constructor': function (_0x178459, _0x1d28c6, _0xbc79cb, _0x26196b) {
				this.playlines = _0x1d28c6.playlines;
				this.label = _0x26196b;
				this.label.innerHTML = _0x1d28c6.initialySelectedLabel;
				_0x216862.call(this, _0x178459, _0x1d28c6, _0xbc79cb);
				this.controlText('Playline');
				if (_0xbc79cb.dynamicLabel) {
					this.el().appendChild(_0x26196b);
				} else {
					var _0x2dba09 = document.createElement('span');
					_0xf2522c.addClass(_0x2dba09, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x2dba09);
				}
			},
			'createItems': function () {
				var _0x2b7101 = [], _0x21ddae = this.playlines || [], _0xbc2a81 = function (_0x5e2c9f) {
					_0x2b7101.map(function (_0x1e539f) {
						_0x1e539f.selected(_0x1e539f === _0x5e2c9f);
						_0x1e539f.removeClass('vjs-selected');
					});
				};
				for (var _0x2148d5 = 0; _0x2148d5 < _0x21ddae.length; _0x2148d5++) {
					var _0x415aea = _0x21ddae[_0x2148d5].label;
					_0x2b7101.push(new _0x28e26f(this.player_, {
						'label': _0x415aea,
						'src': _0x21ddae[_0x2148d5],
						'initialySelected': _0x415aea === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0xbc2a81, this.label));
				}
				return _0x2b7101;
			}
		});
		_0x1be4f9 = function (_0x4b3ede) {
			var _0x5cc4c5 = _0xf2522c.mergeOptions(_0x40e882, _0x4b3ede), _0x4c1f25 = this, _0x107182 = document.createElement('span'), _0x50890c = _0x4c1f25.options_.playlines, _0x40e882 = _0x5cc4c5.defaults;
			_0xf2522c.dom.addClass(_0x107182, 'vjs-resolution-button-label');
			var _0x367849 = new _0x5d230f(_0x4c1f25, {
				'playlines': _0x50890c,
				'initialySelectedLabel': _0x40e882 ? _0x40e882.label : _0x50890c[0].label,
				'initialySelectedUrl': _0x40e882 ? _0x40e882.url : _0x50890c[0].url,
				'customSourcePicker': _0x5cc4c5.customSourcePicker
			}, _0x5cc4c5, _0x107182);
			_0xf2522c.dom.addClass(_0x367849.el(), 'vjs-resolution-button');
			_0xf2522c.dom.addClass(_0x367849.el(), 'vjs-playline-button');
			_0x367849.show();
			_0x4c1f25.selectCDN = function (_0x1aa8ee) {
				_0x367849.items[_0x1aa8ee].onClick(_0x5cc4c5.customSourcePicker);
				_0x4c1f25.play();
			};
			_0x50890c.length > 0 && (_0x40e882 ? _0x5a4eb0 = _0x40e882 : _0x5a4eb0 = _0x50890c[0]);
			_0x4c1f25.currentPlayline = function () {
				return _0x5a4eb0;
			};
			_0x4c1f25.ready(function () {
				_0x4c1f25.controlBar.videoJsPlayLine = _0x4c1f25.controlBar.el_.insertBefore(_0x367849.el_, _0x4c1f25.controlBar.getChild('fullscreenToggle').el_);
				_0x4c1f25.controlBar.videoJsPlayLine.dispose = function () {
					this.parentNode.removeChild(this);
				};
			});
		};
		_0xf2522c.registerPlugin('videoJsPlayLine', _0x1be4f9);
	}(window, videojs));
}());
Ext.define('ans.AudioJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x449762) {
		_0x449762 = _0x449762 || {};
		var _0x2f258a = this;
		_0x2f258a.addEvents(['seekstart']);
		_0x2f258a.mixins.observable.constructor.call(_0x2f258a, _0x449762);
		var _0x201819 = videojs(_0x449762.videojs, _0x2f258a.params2VideoOpt(_0x449762.params), function () {
		});
		Ext.fly(_0x449762.videojs).on('contextmenu', function (_0x6012eb) {
			_0x6012eb.preventDefault();
		});
		Ext.fly(_0x449762.videojs).on('keydown', function (_0x461456) {
			(_0x461456.keyCode == 32 || _0x461456.keyCode == 37 || _0x461456.keyCode == 39) && _0x461456.preventDefault();
			_0x461456.keyCode == 32 && (_0x201819.paused() ? _0x201819.play() : _0x201819.pause());
		});
	},
	'params2VideoOpt': function (_0xc75eb9) {
		var _0x23d821 = [];
		!_0xc75eb9.rootPath && (_0xc75eb9.rootPath = '');
		_0xc75eb9.http && _0x23d821.push({
			'src': _0xc75eb9.http,
			'type': 'audio/mp3'
		});
		var _0x47910a = function (_0x1569b2, _0x50693a, _0xe4c2cc) {
			var _0x52d3e4 = this;
			!_0x52d3e4.logCount && (_0x52d3e4.logCount = 0);
			videojs.xhr({
				'uri': _0x50693a,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x3d1c67, _0x5996ac) {
				_0x52d3e4.logCount++;
				if (_0x5996ac.statusCode == 200) {
					_0x52d3e4.logCount = 0;
					if (_0x5996ac.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x5996ac.body);
					d.isPassed && _0xe4c2cc();
					return;
				}
				if (_0x52d3e4.logCount >= 4) {
					_0x52d3e4.logCount = 0;
					_0x1569b2.pause();
					_0x5996ac.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x5996ac.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0xb1f2d9 = function (_0x3618c9, _0x5d5598, _0x41153e, _0x199b8c) {
			if (!_0xc75eb9.reportUrl) {
				return;
			}
			if (_0xc75eb9.isFiled == 1 || _0xc75eb9.state == 1) {
				return;
			}
			var _0x24cc7f = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x3caf08 = (_0xc75eb9.startTime || '0') + '_' + (_0xc75eb9.endTime || _0xc75eb9.duration), _0x52dc48 = 0, _0x92fee0;
			_0x41153e.toString().indexOf('-') != -1 ? (_0x92fee0 = _0x41153e.split('-'), _0x92fee0.length == 2 && (_0x52dc48 = parseInt(_0x92fee0[1]) * 1000)) : _0x52dc48 = _0x41153e * 1000;
			if (_0x52dc48 == _0xc75eb9.duration * 1000 && _0x5d5598 == 2) {
				return;
			}
			var _0x515ac5 = Ext.String.format(_0x24cc7f, _0xc75eb9.clazzId, _0xc75eb9.userid, _0xc75eb9.jobid ? _0xc75eb9.jobid : '', _0xc75eb9.objectId, _0x52dc48, 'd_yHJ!$pdA~5', _0xc75eb9.duration * 1000, _0x3caf08), _0x457439 = [
				_0xc75eb9.reportUrl,
				'/',
				_0xc75eb9.dtoken,
				'?clazzId=',
				_0xc75eb9.clazzId,
				'&playingTime=',
				_0x41153e,
				'&duration=',
				_0xc75eb9.duration,
				'&clipTime=',
				_0x3caf08,
				'&objectId=',
				_0xc75eb9.objectId,
				'&otherInfo=',
				_0xc75eb9.otherInfo,
				'&jobid=',
				_0xc75eb9.jobid,
				'&userid=',
				_0xc75eb9.userid,
				'&isdrag=',
				_0x5d5598,
				'&view=pc',
				'&enc=',
				md5(_0x515ac5),
				'&rt=',
				_0xc75eb9.rt,
				'&dtype=Audio',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x47910a(_0x3618c9, _0x457439, _0x199b8c);
		};
		return {
			'language': 'zh-CN',
			'controls': true,
			'preload': 'auto',
			'bigPlayButton': false,
			'sources': _0x23d821,
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
				'audioNote': { 'title': _0xc75eb9.filename },
				'studyControl': { 'enableSwitchWindow': 1 },
				'seekBarControl': {
					'headOffset': _0xc75eb9.headOffset,
					'enableFastForward': _0xc75eb9.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0xc75eb9.control,
					'reportTimeInterval': _0xc75eb9.reportTimeInterval,
					'sourcePlayer': 'audio',
					'sendLog': function (_0xda76c4, _0x1d6c58, _0x5763e1) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x192e05 = 0;
						switch (_0x1d6c58) {
							case 'playing':
								_0x192e05 = 0;
								break;
							case 'drag':
								_0x192e05 = 1;
								break;
							case 'play':
								_0x192e05 = 3;
								break;
							case 'pause':
								_0x192e05 = 2;
								break;
							case 'ended':
								_0x192e05 = 4;
								break;
						}
						_0xb1f2d9(_0xda76c4, _0x192e05, _0x5763e1, function () {
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
	var _0x500d51 = videojs.getPlugin('plugin'), _0x42ff51 = videojs.extend(_0x500d51, {
		'constructor': function (_0x25725b, _0x5dbf58) {
			_0x500d51.call(this, _0x25725b, _0x5dbf58);
			Ext.create('ans.videojs.AudioNote', {
				'renderTo': _0x25725b.el_,
				'html': _0x5dbf58.title
			});
		}
	});
	videojs.registerPlugin('audioNote', _0x42ff51);
}());