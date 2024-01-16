Ext.define('ananas.ServerHosts', {
	'alternateClassName': 'ServerHosts',
	'singleton': true,
	'constructor': function () {
		var _0x42383a = this;
		_0x42383a.callParent(arguments);
		var _0x102861 = document.domain;
		try {
			_0x42383a.MASTER_HOST = location.protocol + '//' + top.location.host;
		} catch (_0x4e950b) {
			_0x42383a.MASTER_HOST = location.protocol + '//' + location.host;
		}
		try {
			_0x42383a.PARENT_HOST = location.protocol + '//' + parent.location.host;
		} catch (_0x4b8cda) {
			_0x42383a.MASTER_HOST = location.protocol + '//' + location.host;
		}
		_0x42383a.P_HOST = location.protocol + '//p.ananas.chaoxing.com';
		_0x42383a.s1_HOST = location.protocol + '//s1.ananas.chaoxing.com';
		_0x42383a.s2_HOST = location.protocol + '//s2.ananas.chaoxing.com';
		_0x42383a.CLOUD_HOST = 'http://cloud.ananas.' + _0x102861;
		_0x42383a.NEW_CLOUD_HOST = location.protocol + '//pan-yz.chaoxing.com';
		_0x42383a.CS_HOST = location.protocol + '//cs.ananas.' + _0x102861;
		_0x42383a.FANYA_HOST = 'http://course.fanya.' + _0x102861;
		_0x42383a.PAN_HOST = 'http://pan.ananas.' + _0x102861;
		_0x42383a.CXLIVE_HOST = 'http://cxlive.' + _0x102861;
		_0x42383a.ERYA_TSK_HOST = 'http://erya.tsk.' + _0x102861;
		_0x42383a.QUESTIONNAIRE_HOST = 'http://surveyapp.fy.' + _0x102861;
		_0x42383a.FX_HOST = 'http://www.' + _0x102861;
		_0x42383a.PHONE_ZT_HOST = 'https://special.rhky.com';
		_0x42383a.CHAOXING_CLASS_HOST = 'https://k.chaoxing.com';
		_0x42383a.LIVE_HOST = location.protocol + '//live.chaoxing.com';
		_0x42383a.APPCD_HOST = location.protocol + '//appcd.chaoxing.com';
		_0x42383a.ZHIBO_HOST = 'https://zhibo.chaoxing.com';
	}
});
(function (_0x1493ac) {
	function _0x529316(_0x43720d, _0x22007f) {
		var _0x2640ba = (_0x43720d & 65535) + (_0x22007f & 65535), _0x2f46c9 = (_0x43720d >> 16) + (_0x22007f >> 16) + (_0x2640ba >> 16);
		return _0x2f46c9 << 16 | _0x2640ba & 65535;
	}
	function _0x2166ed(_0x1facc9, _0x32b173) {
		return _0x1facc9 << _0x32b173 | _0x1facc9 >>> 32 - _0x32b173;
	}
	function _0x2f603f(_0x1394aa, _0x4669c5, _0x2af548, _0x55a82d, _0xe6376d, _0x58c16b) {
		return _0x529316(_0x2166ed(_0x529316(_0x529316(_0x4669c5, _0x1394aa), _0x529316(_0x55a82d, _0x58c16b)), _0xe6376d), _0x2af548);
	}
	function _0x3baceb(_0x1dfda4, _0x43da38, _0x92c1e8, _0x24f40a, _0x50f5f7, _0x18b866, _0x2a74f3) {
		return _0x2f603f(_0x43da38 & _0x92c1e8 | ~_0x43da38 & _0x24f40a, _0x1dfda4, _0x43da38, _0x50f5f7, _0x18b866, _0x2a74f3);
	}
	function _0x5e35c6(_0x189961, _0x94311a, _0x4b94d3, _0x4057c5, _0x42d581, _0x2200c6, _0x49ca39) {
		return _0x2f603f(_0x94311a & _0x4057c5 | _0x4b94d3 & ~_0x4057c5, _0x189961, _0x94311a, _0x42d581, _0x2200c6, _0x49ca39);
	}
	function _0x3c0c52(_0x4da1da, _0x29cb9c, _0x51700a, _0x392c9a, _0x580666, _0x16d191, _0x3109a5) {
		return _0x2f603f(_0x29cb9c ^ _0x51700a ^ _0x392c9a, _0x4da1da, _0x29cb9c, _0x580666, _0x16d191, _0x3109a5);
	}
	function _0xc69507(_0x27d564, _0x2d77b0, _0x20858f, _0x4571ef, _0x3b2fe5, _0x128bf2, _0x4c0cbe) {
		return _0x2f603f(_0x20858f ^ (_0x2d77b0 | ~_0x4571ef), _0x27d564, _0x2d77b0, _0x3b2fe5, _0x128bf2, _0x4c0cbe);
	}
	function _0x54f1e9(_0x419a2d, _0x4632f6) {
		_0x419a2d[_0x4632f6 >> 5] |= 128 << _0x4632f6 % 32;
		_0x419a2d[(_0x4632f6 + 64 >>> 9 << 4) + 14] = _0x4632f6;
		var _0x651325, _0x5a5209, _0x41126b, _0x5dc04e, _0x1a962c, _0x50b2c3 = 1732584193, _0x10678b = -271733879, _0x37005d = -1732584194, _0x32998b = 271733878;
		for (_0x651325 = 0; _0x651325 < _0x419a2d.length; _0x651325 += 16) {
			_0x5a5209 = _0x50b2c3;
			_0x41126b = _0x10678b;
			_0x5dc04e = _0x37005d;
			_0x1a962c = _0x32998b;
			_0x50b2c3 = _0x3baceb(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325], 7, -680876936);
			_0x32998b = _0x3baceb(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325 + 1], 12, -389564586);
			_0x37005d = _0x3baceb(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 2], 17, 606105819);
			_0x10678b = _0x3baceb(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325 + 3], 22, -1044525330);
			_0x50b2c3 = _0x3baceb(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325 + 4], 7, -176418897);
			_0x32998b = _0x3baceb(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325 + 5], 12, 1200080426);
			_0x37005d = _0x3baceb(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 6], 17, -1473231341);
			_0x10678b = _0x3baceb(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325 + 7], 22, -45705983);
			_0x50b2c3 = _0x3baceb(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325 + 8], 7, 1770035416);
			_0x32998b = _0x3baceb(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325 + 9], 12, -1958414417);
			_0x37005d = _0x3baceb(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 10], 17, -42063);
			_0x10678b = _0x3baceb(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325 + 11], 22, -1990404162);
			_0x50b2c3 = _0x3baceb(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325 + 12], 7, 1804603682);
			_0x32998b = _0x3baceb(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325 + 13], 12, -40341101);
			_0x37005d = _0x3baceb(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 14], 17, -1502002290);
			_0x10678b = _0x3baceb(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325 + 15], 22, 1236535329);
			_0x50b2c3 = _0x5e35c6(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325 + 1], 5, -165796510);
			_0x32998b = _0x5e35c6(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325 + 6], 9, -1069501632);
			_0x37005d = _0x5e35c6(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 11], 14, 643717713);
			_0x10678b = _0x5e35c6(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325], 20, -373897302);
			_0x50b2c3 = _0x5e35c6(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325 + 5], 5, -701558691);
			_0x32998b = _0x5e35c6(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325 + 10], 9, 38016083);
			_0x37005d = _0x5e35c6(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 15], 14, -660478335);
			_0x10678b = _0x5e35c6(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325 + 4], 20, -405537848);
			_0x50b2c3 = _0x5e35c6(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325 + 9], 5, 568446438);
			_0x32998b = _0x5e35c6(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325 + 14], 9, -1019803690);
			_0x37005d = _0x5e35c6(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 3], 14, -187363961);
			_0x10678b = _0x5e35c6(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325 + 8], 20, 1163531501);
			_0x50b2c3 = _0x5e35c6(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325 + 13], 5, -1444681467);
			_0x32998b = _0x5e35c6(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325 + 2], 9, -51403784);
			_0x37005d = _0x5e35c6(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 7], 14, 1735328473);
			_0x10678b = _0x5e35c6(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325 + 12], 20, -1926607734);
			_0x50b2c3 = _0x3c0c52(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325 + 5], 4, -378558);
			_0x32998b = _0x3c0c52(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325 + 8], 11, -2022574463);
			_0x37005d = _0x3c0c52(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 11], 16, 1839030562);
			_0x10678b = _0x3c0c52(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325 + 14], 23, -35309556);
			_0x50b2c3 = _0x3c0c52(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325 + 1], 4, -1530992060);
			_0x32998b = _0x3c0c52(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325 + 4], 11, 1272893353);
			_0x37005d = _0x3c0c52(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 7], 16, -155497632);
			_0x10678b = _0x3c0c52(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325 + 10], 23, -1094730640);
			_0x50b2c3 = _0x3c0c52(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325 + 13], 4, 681279174);
			_0x32998b = _0x3c0c52(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325], 11, -358537222);
			_0x37005d = _0x3c0c52(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 3], 16, -722521979);
			_0x10678b = _0x3c0c52(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325 + 6], 23, 76029189);
			_0x50b2c3 = _0x3c0c52(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325 + 9], 4, -640364487);
			_0x32998b = _0x3c0c52(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325 + 12], 11, -421815835);
			_0x37005d = _0x3c0c52(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 15], 16, 530742520);
			_0x10678b = _0x3c0c52(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325 + 2], 23, -995338651);
			_0x50b2c3 = _0xc69507(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325], 6, -198630844);
			_0x32998b = _0xc69507(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325 + 7], 10, 1126891415);
			_0x37005d = _0xc69507(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 14], 15, -1416354905);
			_0x10678b = _0xc69507(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325 + 5], 21, -57434055);
			_0x50b2c3 = _0xc69507(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325 + 12], 6, 1700485571);
			_0x32998b = _0xc69507(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325 + 3], 10, -1894986606);
			_0x37005d = _0xc69507(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 10], 15, -1051523);
			_0x10678b = _0xc69507(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325 + 1], 21, -2054922799);
			_0x50b2c3 = _0xc69507(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325 + 8], 6, 1873313359);
			_0x32998b = _0xc69507(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325 + 15], 10, -30611744);
			_0x37005d = _0xc69507(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 6], 15, -1560198380);
			_0x10678b = _0xc69507(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325 + 13], 21, 1309151649);
			_0x50b2c3 = _0xc69507(_0x50b2c3, _0x10678b, _0x37005d, _0x32998b, _0x419a2d[_0x651325 + 4], 6, -145523070);
			_0x32998b = _0xc69507(_0x32998b, _0x50b2c3, _0x10678b, _0x37005d, _0x419a2d[_0x651325 + 11], 10, -1120210379);
			_0x37005d = _0xc69507(_0x37005d, _0x32998b, _0x50b2c3, _0x10678b, _0x419a2d[_0x651325 + 2], 15, 718787259);
			_0x10678b = _0xc69507(_0x10678b, _0x37005d, _0x32998b, _0x50b2c3, _0x419a2d[_0x651325 + 9], 21, -343485551);
			_0x50b2c3 = _0x529316(_0x50b2c3, _0x5a5209);
			_0x10678b = _0x529316(_0x10678b, _0x41126b);
			_0x37005d = _0x529316(_0x37005d, _0x5dc04e);
			_0x32998b = _0x529316(_0x32998b, _0x1a962c);
		}
		return [
			_0x50b2c3,
			_0x10678b,
			_0x37005d,
			_0x32998b
		];
	}
	function _0x54f6bf(_0x3d7bd) {
		var _0x56484c, _0x2b46f6 = '', _0x322e86 = _0x3d7bd.length * 32;
		for (_0x56484c = 0; _0x56484c < _0x322e86; _0x56484c += 8) {
			_0x2b46f6 += String.fromCharCode(_0x3d7bd[_0x56484c >> 5] >>> _0x56484c % 32 & 255);
		}
		return _0x2b46f6;
	}
	function _0x19ee92(_0xd191da) {
		var _0x30ee5c, _0x43788c = [];
		_0x43788c[(_0xd191da.length >> 2) - 1] = undefined;
		for (_0x30ee5c = 0; _0x30ee5c < _0x43788c.length; _0x30ee5c += 1) {
			_0x43788c[_0x30ee5c] = 0;
		}
		var _0xa3122d = _0xd191da.length * 8;
		for (_0x30ee5c = 0; _0x30ee5c < _0xa3122d; _0x30ee5c += 8) {
			_0x43788c[_0x30ee5c >> 5] |= (_0xd191da.charCodeAt(_0x30ee5c / 8) & 255) << _0x30ee5c % 32;
		}
		return _0x43788c;
	}
	function _0x2662f1(_0x422346) {
		return _0x54f6bf(_0x54f1e9(_0x19ee92(_0x422346), _0x422346.length * 8));
	}
	function _0x2e64d8(_0x10ef99, _0x3cf285) {
		var _0x23ef61, _0x219244 = _0x19ee92(_0x10ef99), _0x5eda61 = [], _0x2df114 = [], _0x2eba6b;
		_0x5eda61[15] = _0x2df114[15] = undefined;
		_0x219244.length > 16 && (_0x219244 = _0x54f1e9(_0x219244, _0x10ef99.length * 8));
		for (_0x23ef61 = 0; _0x23ef61 < 16; _0x23ef61 += 1) {
			_0x5eda61[_0x23ef61] = _0x219244[_0x23ef61] ^ 909522486;
			_0x2df114[_0x23ef61] = _0x219244[_0x23ef61] ^ 1549556828;
		}
		return _0x2eba6b = _0x54f1e9(_0x5eda61.concat(_0x19ee92(_0x3cf285)), 512 + _0x3cf285.length * 8), _0x54f6bf(_0x54f1e9(_0x2df114.concat(_0x2eba6b), 640));
	}
	function _0x15c6c0(_0x362297) {
		var _0x56858e = '0123456789abcdef', _0x52254a = '', _0x26dbba, _0x1f4d0c;
		for (_0x1f4d0c = 0; _0x1f4d0c < _0x362297.length; _0x1f4d0c += 1) {
			_0x26dbba = _0x362297.charCodeAt(_0x1f4d0c);
			_0x52254a += _0x56858e.charAt(_0x26dbba >>> 4 & 15) + _0x56858e.charAt(_0x26dbba & 15);
		}
		return _0x52254a;
	}
	function _0x3d3d5d(_0x146b2c) {
		return unescape(encodeURIComponent(_0x146b2c));
	}
	function _0x11b4b1(_0x4ff811) {
		return _0x2662f1(_0x3d3d5d(_0x4ff811));
	}
	function _0x14efba(_0x1788d8) {
		return _0x15c6c0(_0x11b4b1(_0x1788d8));
	}
	function _0x2fe20e(_0x33cb17, _0x277607) {
		return _0x2e64d8(_0x3d3d5d(_0x33cb17), _0x3d3d5d(_0x277607));
	}
	function _0x386f9d(_0x324626, _0x582ec3) {
		return _0x15c6c0(_0x2fe20e(_0x324626, _0x582ec3));
	}
	function _0x34328b(_0x27c5ad, _0x3b06d3, _0x1df179) {
		if (!_0x3b06d3) {
			if (!_0x1df179) {
				return _0x14efba(_0x27c5ad);
			}
			return _0x11b4b1(_0x27c5ad);
		}
		if (!_0x1df179) {
			return _0x386f9d(_0x3b06d3, _0x27c5ad);
		}
		return _0x2fe20e(_0x3b06d3, _0x27c5ad);
	}
	typeof define === 'function' && define.amd ? define(function () {
		return _0x34328b;
	}) : typeof module === 'object' && module.exports ? module.exports = _0x34328b : _0x1493ac.md5 = _0x34328b;
}(this));
Ext.apply(Ext, {
	'setCookie': function (_0x13c2a1, _0x12f00e) {
		var _0x4e94e4 = arguments, _0x1f0cc7 = arguments.length, _0x55fc80 = _0x1f0cc7 > 2 ? _0x4e94e4[2] : null, _0x4dea8f = _0x1f0cc7 > 3 ? _0x4e94e4[3] : '/', _0x2ec594 = _0x1f0cc7 > 4 ? _0x4e94e4[4] : null, _0x39b58f = _0x1f0cc7 > 5 ? _0x4e94e4[5] : false;
		document.cookie = _0x13c2a1 + '=' + escape(_0x12f00e) + (_0x55fc80 === null ? '' : '; expires=' + _0x55fc80.toGMTString()) + (_0x4dea8f === null ? '' : '; path=' + _0x4dea8f) + (_0x2ec594 === null ? '' : '; domain=' + _0x2ec594) + (_0x39b58f === true ? '; secure' : '');
	},
	'getCookie': function (_0x46df9f, _0x1b5aa0) {
		var _0x44a930 = _0x46df9f + '=', _0xceb0 = _0x44a930.length, _0x31004c = document.cookie.length, _0x8fffef = 0, _0x4c4413 = 0;
		while (_0x8fffef < _0x31004c) {
			_0x4c4413 = _0x8fffef + _0xceb0;
			if (document.cookie.substring(_0x8fffef, _0x4c4413) == _0x44a930) {
				return this.getCookieVal(_0x4c4413);
			}
			_0x8fffef = document.cookie.indexOf(' ', _0x8fffef) + 1;
			if (_0x8fffef === 0) {
				break;
			}
		}
		return _0x1b5aa0;
	},
	'getCookieVal': function (_0xdb420a) {
		var _0x248854 = document.cookie.indexOf(';', _0xdb420a);
		return _0x248854 == -1 && (_0x248854 = document.cookie.length), unescape(document.cookie.substring(_0xdb420a, _0x248854));
	}
});
Ext.define('ans.VideoJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x4dc60f) {
		_0x4dc60f = _0x4dc60f || {};
		var _0xf1647c = this;
		_0xf1647c.addEvents(['seekstart']);
		_0xf1647c.mixins.observable.constructor.call(_0xf1647c, _0x4dc60f);
		var _0x39cec7 = videojs(_0x4dc60f.videojs, _0xf1647c.params2VideoOpt(_0x4dc60f.params), function () {
		});
		Ext.fly(_0x4dc60f.videojs).on('contextmenu', function (_0x5c5f4b) {
			_0x5c5f4b.preventDefault();
		});
		Ext.fly(_0x4dc60f.videojs).on('keydown', function (_0x56433d) {
			(_0x56433d.keyCode == 32 || _0x56433d.keyCode == 37 || _0x56433d.keyCode == 39 || _0x56433d.keyCode == 107) && _0x56433d.preventDefault();
		});
		_0x39cec7.videoJsResolutionSwitcher && _0x39cec7.on('resolutionchange', function () {
			var _0x1c0f67 = _0x39cec7.currentResolution(), _0x219400 = _0x1c0f67.sources ? _0x1c0f67.sources[0].res : false;
			Ext.setCookie('resolution', _0x219400);
		});
		var _0x4f4e2c = _0x4dc60f.params && _0x4dc60f.params.doublespeed ? 2 : 1;
		_0x39cec7.on('ratechange', function () {
			var _0xfc3f0 = _0x39cec7.playbackRate();
			if (_0xfc3f0 > _0x4f4e2c) {
				_0x39cec7.pause();
				_0x39cec7.playbackRate(1);
			}
		});
	},
	'params2VideoOpt': function (_0x1fa8e9) {
		var _0xf2829e = false, _0x574179 = [
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
		if (_0x1fa8e9.cdn) {
			try {
				top.window.app && top.window.app == 2 ? _0x574179 = _0x574179.concat(_0x1fa8e9.cdn) : _0x574179 = _0x574179.concat(_0x1fa8e9.cdn).sort(function (_0x579774, _0x159bdf) {
					return _0x579774.indexorder - _0x159bdf.indexorder;
				});
			} catch (_0x4bb4f1) {
				_0x574179 = _0x574179.concat(_0x1fa8e9.cdn);
			}
		}
		function _0x2a9b1b(_0x1b73e0, _0x23ce69, _0xeabce1) {
			return 'http://hls-ans.chaoxing.com/hls/m3u8/' + _0x1b73e0 + '/' + _0x23ce69 + '.m3u8?cdn=' + encodeURIComponent(_0xeabce1);
		}
		function _0x42b1ee(_0x12ceb8, _0x15854e) {
			var _0x2da2a9 = ServerHosts.s1_HOST.replace('http:/', '').replace('https:/', ''), _0x32a614 = 0;
			_0x12ceb8.src.indexOf(_0x2da2a9) > -1 && (_0x32a614 = _0x12ceb8.src.indexOf(_0x2da2a9) + _0x2da2a9.length);
			var _0x36a678 = _0x12ceb8.src.substr(_0x32a614);
			if (_0x15854e.ispublic && _0x32a614 == 0) {
				return {
					'src': _0x36a678,
					'type': 'video/mp4',
					'res': _0x12ceb8.res
				};
			}
			return _0x15854e.ispublic ? _0xf2829e ? {
				'src': _0x2a9b1b(_0x1fa8e9.objectId, _0x12ceb8.resolution, _0x15854e.url),
				'type': 'application/x-mpegURL',
				'res': _0x12ceb8.res
			} : {
				'src': _0x15854e.url + _0x36a678,
				'type': 'video/mp4',
				'res': _0x12ceb8.res
			} : _0xf2829e ? {
				'src': _0x2a9b1b(_0x1fa8e9.objectId, _0x12ceb8.resolution, _0x15854e.url + _0x2da2a9),
				'type': 'application/x-mpegURL',
				'res': _0x12ceb8.res
			} : {
				'src': _0x15854e.url + _0x2da2a9 + _0x36a678,
				'type': 'video/mp4',
				'res': _0x12ceb8.res
			};
		}
		var _0x3fe4bf = [], _0x386bbc = Ext.getCookie('resolution', 360);
		!_0x1fa8e9.rootPath && (_0x1fa8e9.rootPath = '');
		_0x1fa8e9.http && _0x3fe4bf.push({
			'src': _0x1fa8e9.http,
			'type': 'video/mp4',
			'label': '标清',
			'resolution': 'sd',
			'res': 360
		});
		_0x1fa8e9.httphd && _0x3fe4bf.push({
			'src': _0x1fa8e9.httphd,
			'type': 'video/mp4',
			'label': '高清',
			'resolution': 'hd',
			'res': 720
		});
		_0x1fa8e9.httpshd && _0x3fe4bf.push({
			'src': _0x1fa8e9.httpshd,
			'type': 'video/mp4',
			'label': '超高清',
			'resolution': 'shd',
			'res': 1080
		});
		_0x1fa8e9.httpmd && _0x3fe4bf.push({
			'src': _0x1fa8e9.httpmd,
			'type': 'video/mp4',
			'label': '极速',
			'resolution': 'md',
			'res': 240
		});
		if (_0x3fe4bf.length == 1) {
			var _0x56e9ac = _0x3fe4bf[0];
			_0x56e9ac.label = '高清';
		}
		var _0x27f166 = false;
		for (var _0x3aca15 = 0; _0x3aca15 < _0x3fe4bf.length; _0x3aca15++) {
			if (_0x3fe4bf[_0x3aca15].res == _0x386bbc) {
				_0x27f166 = true;
				break;
			}
		}
		!_0x27f166 && (_0x386bbc = 360);
		var _0x40fee0 = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid), _0x370677 = function (_0x244249, _0x1a8b18, _0x349b0c) {
			if (_0x40fee0) {
				return;
			}
			var _0x15efba = this;
			!_0x15efba.logCount && (_0x15efba.logCount = 0);
			videojs.xhr({
				'uri': _0x1a8b18,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x32351d, _0x3f818d) {
				_0x15efba.logCount++;
				if (_0x3f818d.statusCode == 200) {
					_0x15efba.logCount = 0;
					if (_0x3f818d.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x3f818d.body);
					d.isPassed && _0x349b0c();
					return;
				}
				if (_0x15efba.logCount >= 4) {
					_0x15efba.logCount = 0;
					_0x244249.pause();
					_0x3f818d.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x3f818d.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x2d0688 = function (_0x22db72, _0x28f545, _0x44b076, _0x355c77) {
			if (!_0x1fa8e9.reportUrl) {
				return;
			}
			if (_0x1fa8e9.isFiled == 1 || _0x1fa8e9.state == 1) {
				return;
			}
			var _0x22d226 = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x3b94e4 = (_0x1fa8e9.startTime || '0') + '_' + (_0x1fa8e9.endTime || _0x1fa8e9.duration), _0x1b0c0d = 0, _0x2a5a8a;
			_0x44b076.toString().indexOf('-') != -1 ? (_0x2a5a8a = _0x44b076.split('-'), _0x2a5a8a.length == 2 && (_0x1b0c0d = parseInt(_0x2a5a8a[1]) * 1000)) : _0x1b0c0d = _0x44b076 * 1000;
			if (_0x1b0c0d == _0x1fa8e9.duration * 1000 && _0x28f545 == 2) {
				return;
			}
			var _0x503e11 = Ext.String.format(_0x22d226, _0x1fa8e9.clazzId, _0x1fa8e9.userid, _0x1fa8e9.jobid || '', _0x1fa8e9.objectId, _0x1b0c0d, 'd_yHJ!$pdA~5', _0x1fa8e9.duration * 1000, _0x3b94e4), _0x404482 = [
				_0x1fa8e9.reportUrl,
				'/',
				_0x1fa8e9.dtoken,
				'?clazzId=',
				_0x1fa8e9.clazzId,
				'&playingTime=',
				_0x44b076,
				'&duration=',
				_0x1fa8e9.duration,
				'&clipTime=',
				_0x3b94e4,
				'&objectId=',
				_0x1fa8e9.objectId,
				'&otherInfo=',
				_0x1fa8e9.otherInfo,
				'&jobid=',
				_0x1fa8e9.jobid,
				'&userid=',
				_0x1fa8e9.userid,
				'&isdrag=',
				_0x28f545,
				'&view=pc',
				'&enc=',
				md5(_0x503e11),
				'&rt=',
				_0x1fa8e9.rt,
				'&dtype=Video',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x370677(_0x22db72, _0x404482, _0x355c77);
		};
		return {
			'language': 'zh-CN',
			'poster': _0x1fa8e9.screenshot,
			'controls': true,
			'preload': 'none',
			'sources': _0x3fe4bf,
			'playlines': _0x574179,
			'playbackRates': _0x1fa8e9.doublespeed != 0 ? [
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
					'default': _0x386bbc,
					'dynamicLabel': true,
					'customSourcePicker': function (_0x430890, _0x108f1b, _0x2889a8) {
						var _0x2cca9b = _0x430890.currentPlayline();
						return _0x430890.src(_0x108f1b.map(function (_0x1fc53b) {
							return _0x42b1ee(_0x1fc53b, _0x2cca9b);
						})), _0x430890;
					}
				},
				'videoJsPlayLine': {
					'dynamicLabel': true,
					'customSourcePicker': function (_0x379e9b, _0x34fbce, _0x4b24d6) {
						var _0xe7810a = _0x379e9b.currentResolution().sources[0];
						return _0x379e9b.src(_0x42b1ee(_0xe7810a, _0x34fbce)), _0x379e9b;
					}
				},
				'studyControl': { 'enableSwitchWindow': _0x1fa8e9.enableSwitchWindow },
				'seekBarControl': {
					'headOffset': _0x1fa8e9.headOffset,
					'enableFastForward': _0x1fa8e9.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0x1fa8e9.control,
					'reportTimeInterval': _0x1fa8e9.reportTimeInterval,
					'isShowDanmu': _0x1fa8e9.danmaku,
					'chapterCapture': _0x1fa8e9.chapterCapture || 0,
					'captureInterval': _0x1fa8e9.captureInterval || 600,
					'chapterCollectionType': _0x1fa8e9.chapterCollectionType || 0,
					'startCapture': _0x1fa8e9.startCapture,
					'endCapture': _0x1fa8e9.endCapture,
					'playAginCapture': _0x1fa8e9.playAginCapture,
					'playingCapture': _0x1fa8e9.playingCapture,
					'playingLoopCapture': _0x1fa8e9.playingLoopCapture,
					'duration': _0x1fa8e9.duration,
					'isSupportFace': _0x1fa8e9.isSupportFace || false,
					'isShowFaceCollection': _0x1fa8e9.isShowFaceCollection,
					'attachmentId': _0x1fa8e9.aId,
					'sendLog': function (_0x2f4df4, _0x3990f5, _0x22e963) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x1531bb = 0;
						switch (_0x3990f5) {
							case 'playing':
								_0x1531bb = 0;
								break;
							case 'drag':
								_0x1531bb = 1;
								break;
							case 'play':
								_0x1531bb = 3;
								break;
							case 'pause':
								_0x1531bb = 2;
								break;
							case 'ended':
								_0x1531bb = 4;
								break;
						}
						_0x2d0688(_0x2f4df4, _0x1531bb, _0x22e963, function () {
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				'timelineObjects': {
					'url': _0x1fa8e9.rootPath + '/richvideo/initdatawithviewer?mid=' + _0x1fa8e9.mid + '&cpi=' + _0x1fa8e9.cpi + '&classid=' + _0x1fa8e9.clazzId,
					'quizErrorReportUrl': _0x1fa8e9.rootPath + '/question/addquestionerror?classid=' + _0x1fa8e9.clazzId + '&cpi=' + _0x1fa8e9.cpi,
					'validationUrl2': _0x1fa8e9.rootPath + '/question/quiz-validation?classid=' + _0x1fa8e9.clazzId + '&cpi=' + _0x1fa8e9.cpi + '&objectid=' + _0x1fa8e9.objectId,
					'quizRightCountUrl': _0x1fa8e9.rootPath + '/question/quiz-rightcount?classid=' + _0x1fa8e9.clazzId + '&cpi=' + _0x1fa8e9.cpi
				},
				'subtitle': {
					'translate': _0x1fa8e9.chapterVideoTranslate,
					'subtitleUrl': _0x1fa8e9.rootPath + '/richvideo/allsubtitle?mid=' + _0x1fa8e9.mid + '&objectid=' + _0x1fa8e9.objectId + '&courseid=' + _0x1fa8e9.courseid,
					'subtitle': _0x1fa8e9.rootPath + '/ananas/video-editor/sub?objectid=' + _0x1fa8e9.subobjectid
				},
				'marker': {
					'url': !_0x1fa8e9.isNotMark ? _0x1fa8e9.rootPath + '/ananas/getpoints?courseid=' + _0x1fa8e9.courseid + '&mid=' + _0x1fa8e9.mid : '',
					'ff': _0x1fa8e9.enableFastForward,
					'videoTopicCloud': _0x1fa8e9.videoTopicCloud
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
	var _0x3fe72f = videojs.getPlugin('plugin'), _0x5b81f5 = videojs.extend(_0x3fe72f, {
		'constructor': function (_0x186bdc, _0x507f95) {
			_0x3fe72f.call(this, _0x186bdc, _0x507f95);
			var _0x45153c = this, _0x131bfd = _0x507f95.mouseElTarget, _0x3a7836 = 1;
			_0x507f95.enableSwitchWindow !== 1 && (_0x3a7836 = 0);
			if (!_0x131bfd) {
				try {
					_0x131bfd = window.top ? window.top : window.document;
				} catch (_0x2637a9) {
					_0x131bfd = window.parent ? window.parent : window.document;
				}
			}
			Ext.fly(_0x131bfd).on('mouseout', function (_0xceb6e1) {
				_0xceb6e1 = _0xceb6e1 ? _0xceb6e1 : window.event;
				var _0x53697e = _0xceb6e1.relatedTarget || _0xceb6e1.toElement;
				!_0x53697e && (_0x3a7836 != 1 && _0x186bdc.pause());
			});
			_0x45153c.singleton(_0x186bdc);
		},
		'singleton': function (_0x13c5e6) {
			var _0x46bfe9 = this, _0x260f81 = parseInt(Math.random() * 9999999);
			_0x13c5e6.on('play', function () {
				Ext.setCookie('videojs_id', _0x260f81);
			});
			_0x13c5e6.setInterval(function () {
				var _0x35d2b2 = Ext.getCookie('videojs_id');
				typeof _0x35d2b2 != 'undefined' && _0x35d2b2 != _0x260f81 && _0x13c5e6.pause();
			}, 1000);
		}
	});
	videojs.registerPlugin('studyControl', _0x5b81f5);
}());
(function () {
	var _0x3bb887 = videojs.getComponent('SeekBar'), _0x290722 = videojs.extend(_0x3bb887, {
		'constructor': function (_0x5ed8ff, _0x641b6f) {
			_0x3bb887.call(this, _0x5ed8ff, _0x641b6f);
			var _0x2033be = this;
			_0x5ed8ff.ignorePause = false;
			_0x5ed8ff.disableSeek = function (_0x273326) {
				_0x2033be.disableSeek(_0x273326);
			};
			_0x5ed8ff.onlyBackward = function (_0x524002) {
				_0x2033be.onlyBackward(_0x524002);
			};
			_0x5ed8ff.getSeekBar = function () {
				return _0x2033be;
			};
			_0x2033be.on('slideractive', function () {
				_0x5ed8ff.trigger('seekstart');
				_0x5ed8ff.ignorePause = true;
				_0x5ed8ff.ignorePlay = true;
				_0x5ed8ff.ignoreSeek = false;
			});
			_0x2033be.on('sliderinactive', function () {
				_0x5ed8ff.trigger('seekend');
				_0x5ed8ff.ignoreSeek = false;
			});
			_0x2033be.maxPercent = 0;
			_0x5ed8ff.on('timeupdate', function () {
				_0x2033be.maxPercent = Math.max(_0x2033be.getPercent(), _0x2033be.maxPercent);
			});
		},
		'getCurrentTime_': function () {
			return this.player_.currentTime();
		},
		'getMaxPercent': function () {
			return this.maxPercent;
		},
		'isBackward': function (_0x4cec78) {
			return this.maxPercent > this.calculateDistance(_0x4cec78);
		},
		'handleMouseDown': function (_0x17001c) {
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x17001c)) {
					return;
				}
			}
			if (this['_disableSeek'] === true) {
				return;
			}
			_0x3bb887.prototype.handleMouseDown.call(this, _0x17001c);
		},
		'handleMouseMove': function (_0xd6d120) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0xd6d120)) {
					return;
				}
			}
			_0x3bb887.prototype.handleMouseMove.call(this, _0xd6d120);
		},
		'handleMouseUp': function (_0x871d7) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x871d7)) {
					return;
				}
			}
			_0x3bb887.prototype.handleMouseUp.call(this, _0x871d7);
		},
		'disableSeek': function (_0x40bc59) {
			var _0x4c3548 = this;
			_0x4c3548['_disableSeek'] = _0x40bc59 !== false;
			_0x4c3548['_disableSeek'] ? _0x4c3548.disable() : _0x4c3548.enable();
		},
		'onlyBackward': function (_0xc378e) {
			var _0x2f70d0 = this;
			_0x2f70d0['_onlyBackward'] = _0xc378e !== false;
		}
	});
	videojs.registerComponent('SeekBar', _0x290722);
}());
(function () {
	var _0x3d9f57 = videojs.getPlugin('plugin'), _0xaad5df = videojs.extend(_0x3d9f57, {
		'constructor': function (_0xb600a0, _0x445bec) {
			_0x3d9f57.call(this, _0xb600a0, _0x445bec);
			var _0xe603ad = this;
			_0xe603ad.isSendLog_ = !!_0x445bec.isSendLog;
			_0xe603ad.isShowDanmu_ = !!_0x445bec.isShowDanmu;
			_0xe603ad.damuLastGetTime = 0;
			_0xe603ad.timeCount = 0;
			_0xe603ad.isPlay = false;
			_0xe603ad.isEnd = false;
			_0xe603ad.playTimer;
			_0xe603ad.chapterCapture = _0x445bec.chapterCapture || 0;
			_0xe603ad.captureInterval = _0x445bec.captureInterval * 60 || 600;
			_0xe603ad.chapterCollectionType = _0x445bec.chapterCollectionType || 0;
			_0xe603ad.isSupportFace = _0x445bec.isSupportFace;
			_0xe603ad.isAlertTip = false;
			_0xe603ad.startCapture = _0x445bec.startCapture;
			_0xe603ad.endCapture = _0x445bec.endCapture;
			_0xe603ad.playAginCapture = _0x445bec.playAginCapture;
			_0xe603ad.playingCapture = _0x445bec.playingCapture;
			_0xe603ad.playingLoopCapture = _0x445bec.playingLoopCapture;
			_0xe603ad.isShowFaceCollection = _0x445bec.isShowFaceCollection;
			_0xe603ad.duration = _0x445bec.duration;
			_0xe603ad.playingFace = false;
			_0xe603ad.loopCaptureInterval = Math.floor(Math.random() * (parseInt(_0xe603ad.duration) - 0) + 1);
			_0xe603ad.isAginFace = false;
			_0xe603ad.againStartTime = 0;
			_0xe603ad.attachmentId = _0x445bec.attachmentId;
			_0xb600a0.on('ready', function () {
				_0x445bec.enableFastForward != 1 && _0xb600a0.disableSeek();
			});
			!_0x445bec.sendLog && (_0x445bec.sendLog = function () {
			});
			_0x445bec.headOffset && _0xb600a0.currentTime(_0x445bec.headOffset);
			var _0x40e881 = 0, _0x5df628 = 0, _0x6ee7c9 = _0x445bec.reportTimeInterval || 60, _0x38d1b9 = _0x6ee7c9 * 1000, _0x44de03 = function (_0x2adb61, _0x3514fd, _0x30101d) {
				if (!_0xe603ad.isSendLog_) {
					return;
				}
				var _0x32981a = _0xe603ad.now_() - _0x40e881;
				(_0x32981a > _0x38d1b9 || _0x3514fd === true) && (typeof _0x30101d != 'undefined' ? (_0x445bec.sendLog(_0xb600a0, _0x2adb61, _0x30101d), _0xe603ad.playTimer && clearInterval(_0xe603ad.playTimer)) : _0x445bec.sendLog(_0xb600a0, _0x2adb61, _0xe603ad.sec_(_0xb600a0)), _0x40e881 = _0xe603ad.now_());
			};
			_0xb600a0.on('play', function () {
				_0xe603ad.isAlertTip = false;
				_0xe603ad.chapterCapture == 0 || !_0xe603ad.isSupportFace ? (!_0xb600a0.ignorePlay ? (_0x44de03('play', true), _0xb600a0.ignoreSeek = true) : (_0xb600a0.ignorePlay = false, _0xb600a0.ignoreSeek = false), _0xe603ad.sendDataLog('play'), _0xe603ad.receiveStudyLog(), _0xe603ad.getDanmuList('play', _0xb600a0)) : _0xe603ad.chapterCapture == 1 && (_0xe603ad.timeCount == 0 ? _0xe603ad.isShowFaceCollection && !_0xe603ad.isPlay && (_0xe603ad.startCapture == 1 || typeof _0xe603ad.startCapture == 'undefined') ? (_0xe603ad.faceCollection('play', _0xb600a0, _0xe603ad.chapterCollectionType), _0xb600a0.pause()) : (!_0xb600a0.ignorePlay ? (_0x44de03('play', true), _0xb600a0.ignoreSeek = true) : (_0xb600a0.ignorePlay = false, _0xb600a0.ignoreSeek = false), _0xe603ad.sendDataLog('play'), _0xe603ad.receiveStudyLog(), _0xe603ad.getDanmuList('play', _0xb600a0), (_0xe603ad.isShowFaceCollection && typeof _0xe603ad.playingCapture == 'undefined' || _0xe603ad.playingCapture == 1 && _0xe603ad.playingLoopCapture == 0) && _0xe603ad.timer(_0xb600a0), _0xe603ad.isShowFaceCollection && _0xe603ad.playAginCapture == 1 && _0xb600a0.ignorePlay && !_0xe603ad.isAginFace && (_0xe603ad.faceCollection('aginPlay', _0xb600a0, _0xe603ad.chapterCollectionType), _0xb600a0.pause())) : ((_0xe603ad.isShowFaceCollection && typeof _0xe603ad.playingCapture == 'undefined' || _0xe603ad.playingCapture == 1 && _0xe603ad.playingLoopCapture == 1) && _0xe603ad.timer(_0xb600a0), _0xe603ad.isShowFaceCollection && _0xe603ad.playAginCapture == 1 && !_0xb600a0.ignorePlay && !_0xe603ad.isAginFace && (_0xe603ad.faceCollection('aginPlay', _0xb600a0, _0xe603ad.chapterCollectionType), _0xb600a0.pause(), _0xe603ad.againStartTime = _0xe603ad.sec_(_0xb600a0))));
			});
			_0xb600a0.on('seeked', function () {
				if (_0x445bec.enableFastForward != 1 && !_0xb600a0.switchStatus) {
					var _0x5d5402 = _0xb600a0.currentTime(), _0x315cfc = _0x445bec.headOffset ? _0x445bec.headOffset : 0;
					_0x5d5402 != 0 && _0x5d5402 > _0x315cfc && _0xb600a0.currentTime(_0x315cfc);
				}
				!_0xb600a0.ignoreSeek ? _0x44de03('drag', true, _0x5df628 + '-' + _0xe603ad.sec_(_0xb600a0)) : _0xb600a0.ignoreSeek = false;
				_0x5df628 = _0xe603ad.sec_(_0xb600a0);
				_0xb600a0.ignorePlay = true;
				delete _0xb600a0.switchStatus;
			});
			_0xb600a0.on('pause', function () {
				!_0xb600a0.ignorePause ? (_0x44de03('pause', true), _0xb600a0.ignorePlay = false, _0xb600a0.ignoreSeek = false) : _0xb600a0.ignorePause = false;
				_0xe603ad.sendDataLog('pause');
				_0xe603ad.getDanmuList('pause', _0xb600a0);
			});
			_0xb600a0.on('timeupdate', function () {
				_0xe603ad.sec_(_0xb600a0) - _0xe603ad.againStartTime > 2 && (_0xe603ad.isAginFace = false);
				_0xe603ad.isShowFaceCollection && _0xe603ad.chapterCapture == 1 && _0xe603ad.playingCapture == 1 && _0xe603ad.playingLoopCapture == 1 && _0xe603ad.sec_(_0xb600a0) == _0xe603ad.loopCaptureInterval && !_0xe603ad.playingFace && (_0xe603ad.faceCollection('playing', _0xb600a0, _0xe603ad.chapterCollectionType), _0xb600a0.pause());
				if (typeof parent.videoTrialDuration != 'undefined' && parent.videoTrialDuration != '-1') {
					var _0x9581ca = parseInt(parent.videoTrialDuration) * 60;
					if (_0x9581ca < _0xe603ad.sec_(_0xb600a0) && !_0xe603ad.isAlertTip) {
						_0xb600a0.pause();
						alert('视频只允许试看' + parent.videoTrialDuration + '分钟');
						_0xe603ad.isAlertTip = true;
						return;
					}
				}
				parseInt(_0xb600a0.currentTime()) >= this.damuLastGetTime && _0xe603ad.getDanmuList('timeupdate', _0xb600a0);
				_0xe603ad.danmuDisplay(_0xb600a0);
				if (_0x40e881 == 0) {
					return;
				}
				_0xe603ad.sec_(_0xb600a0) - _0x5df628 <= 1 && !_0xb600a0.ignorePlay && (_0x5df628 = _0xe603ad.sec_(_0xb600a0));
				_0x44de03('playing');
			});
			_0xb600a0.on('ended', function () {
				_0xe603ad.playTimer && clearInterval(_0xe603ad.playTimer);
				_0xe603ad.isShowFaceCollection && !_0xe603ad.isEnd && _0xe603ad.chapterCapture == 1 && _0xe603ad.endCapture == 1 && _0xe603ad.faceCollection('ended', _0xb600a0, _0xe603ad.chapterCollectionType);
				_0x44de03('ended', true);
				_0xe603ad.sendDataLog('ended');
				_0xe603ad.playNextVideo(_0xe603ad.attachmentId);
			});
		},
		'sec_': function (_0x8146d5) {
			return parseInt(_0x8146d5.currentTime());
		},
		'now_': function () {
			return new Date().getTime();
		},
		'isSendLog': function (_0x28854b) {
			return _0x28854b && (this.isSendLog_ = !!_0x28854b), this.isSendLog_;
		},
		'sendDataLog': function (_0x1220fb) {
			var _0x1b015c = _0x1220fb == 'pause' || _0x1220fb == 'end' ? 2 : 1;
			typeof sendReadZTMediaLog != 'undefined' && sendReadZTMediaLog(_0x1b015c);
		},
		'receiveStudyLog': function () {
			typeof receiveStudyLog != 'undefined' && setTimeout(function () {
				receiveStudyLog();
			}, 50);
		},
		'getDanmuList': function (_0x1d1ad1, _0x13598b) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x22ad28 = this.sec_(_0x13598b);
			if (_0x1d1ad1 == 'pause') {
				this.damuLastGetTime = 0;
				setTimeout(function () {
					getDanmuByTime(_0x1d1ad1, 0);
				}, 200);
				return;
			}
			typeof getDanmuByTime != 'undefined' && setTimeout(function () {
				getDanmuByTime(_0x1d1ad1, _0x22ad28);
			}, 200);
			if (_0x22ad28 < this.damuLastGetTime) {
				return;
			}
			this.damuLastGetTime = _0x22ad28 + 59;
		},
		'danmuDisplay': function (_0x32a89e) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x73b8cc = this.sec_(_0x32a89e);
			typeof danmuPlay != 'undefined' && danmuPlay(_0x73b8cc);
		},
		'timer': function (_0x8fa830) {
			var _0x70dccb = this;
			this.playTimer = setInterval(function () {
				_0x70dccb.timeCount++;
				if (_0x70dccb.timeCount >= _0x70dccb.captureInterval) {
					_0x70dccb.isPlay = false;
					_0x8fa830.pause();
					_0x70dccb.faceCollection('pause', _0x8fa830, _0x70dccb.chapterCollectionType);
				}
			}, 1000);
		},
		'faceCollection': function (_0x579c0f, _0x1a9df4, _0x20480b) {
			_0x579c0f == 'play' && this.timeCount == 0 ? typeof startFaceCollection != 'undefined' && startFaceCollection(_0x1a9df4, _0x20480b, this) : _0x579c0f == 'pause' ? (this.playTimer && clearInterval(this.playTimer), !this.isPlay && this.timeCount >= this.captureInterval && (typeof startFaceCollection != 'undefined' && startFaceCollection(_0x1a9df4, _0x20480b, this), this.timeCount = 0)) : _0x579c0f == 'ended' ? (this.playTimer && clearInterval(this.playTimer), typeof startFaceCollection != 'undefined' && (startFaceCollection(_0x1a9df4, _0x20480b, this), this.isEnd = true), this.timeCount = 0) : _0x579c0f == 'playing' ? typeof startFaceCollection != 'undefined' && (startFaceCollection(_0x1a9df4, _0x20480b, this), this.playingFace = true) : _0x579c0f == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (startFaceCollection(_0x1a9df4, _0x20480b, this), this.isAginFace = true));
		},
		'playNextVideo': function (_0x1a89d2) {
			typeof chapterPlayNextVideo != 'undefined' && chapterPlayNextVideo(_0x1a89d2);
		}
	});
	videojs.registerPlugin('seekBarControl', _0xaad5df);
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
			'getChecked': function (_0xfbd625, _0x251c15, _0x4914ea) {
				return _0xfbd625.indexOf(_0x251c15) != -1 && _0x4914ea == 'InteractiveQuiz' ? 'checked="checked"' : '';
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
		var _0x4ebfb1 = this, _0x397d4f = _0x4ebfb1.renderData, _0x5a356b = _0x4ebfb1.quizRightCountUrl;
		typeof _0x5a356b != 'undefined' && Ext.Ajax.request({
			'url': _0x5a356b,
			'params': {
				'eventid': _0x397d4f.resourceId,
				'memberinfo': _0x397d4f.memberinfo
			},
			'method': 'get',
			'success': function (_0xc4533e) {
				var _0x140eaf = Ext.decode(_0xc4533e.responseText);
				_0x140eaf.status && (Ext.get('rightNum').setHTML(_0x140eaf.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
			}
		});
		_0x4ebfb1.callParent(arguments);
		var _0x133f59 = _0x4ebfb1.scrollEl, _0x243c65 = $(_0x133f59.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#A5A5A5',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x4ebfb1.scroller = _0x243c65;
		_0x4ebfb1.submitEl.on('click', function () {
			_0x4ebfb1.checkResult() && (Ext.get('videoquiz-continue').getStyle('display') == 'none' && _0x4ebfb1.fireEvent('continue'));
		});
		_0x4ebfb1.continueEl.on('click', function () {
			_0x4ebfb1.fireEvent('continue');
		});
		_0x4ebfb1.backEl && _0x4ebfb1.backEl.on('click', function () {
			_0x4ebfb1.onerror && _0x4ebfb1.onerror();
			_0x4ebfb1.fireEvent('continue');
		});
		_0x4ebfb1.viewAnalysisEl && _0x4ebfb1.viewAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'inline-block');
		});
		_0x4ebfb1.delAnalysisEl && _0x4ebfb1.delAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'none');
		});
	},
	'checkResult': function () {
		var _0x29856b = this, _0xe03c08 = Ext.query('input', _0x29856b.el.dom), _0x3e8a9b = true, _0x3bc17a = _0x29856b.renderData, _0x70be56 = _0x3bc17a.options, _0x243ef2 = [], _0x4c5bbf = _0x29856b.quizErrorReportUrl, _0x4abeb2 = _0x29856b.validationUrl2, _0x308d6a = _0x3bc17a.dtype;
		Ext.each(_0xe03c08, function (_0x5a7514, _0x3a14b0) {
			(_0x5a7514.value == 'true' && !_0x5a7514.checked || _0x5a7514.value == 'false' && _0x5a7514.checked) && (_0x3e8a9b = false);
			_0x5a7514.checked && _0x243ef2.push(_0x70be56[_0x3a14b0].name);
		});
		!_0x3e8a9b ? _0x3bc17a.errorBackTime && _0x3bc17a.errorBackTime > 0 ? (Ext.get('spanNotBack').setStyle('display', 'block'), Ext.get('videoquiz-submit').setStyle('display', 'none'), _0x308d6a == 'InteractiveQuiz' ? Ext.get('knowledgeBack').setStyle('display', 'block') : Ext.get('videoquiz-continue').setStyle('display', 'block')) : _0x308d6a == 'InteractiveQuiz' && _0x3bc17a.errorBack == 1 && _0x3bc17a.eBstartPoint != '' ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'block')) : Ext.get('spanNot').setStyle('display', 'block') : (Ext.get('spanHas').setStyle('display', 'block'), _0x308d6a == 'InteractiveQuiz' && (Ext.get('videoquiz-continue').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'none'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('spanNot').setStyle('display', 'none'), Ext.get('spanNotBack').setStyle('display', 'none'), Ext.get('spanNotBackPoint').setStyle('display', 'none')));
		if (typeof _0x4abeb2 != 'undefined') {
			var _0x2f292e = _0x243ef2.join(',');
			Ext.Ajax.request({
				'url': _0x4abeb2,
				'params': {
					'eventid': _0x3bc17a.resourceId,
					'isRight': _0x3e8a9b,
					'memberinfo': _0x3bc17a.memberinfo,
					'answerContent': _0x2f292e
				},
				'method': 'get',
				'success': function (_0xa93b46) {
					_0x3bc17a.answerContent = _0x2f292e;
					var _0x19857b = Ext.decode(_0xa93b46.responseText);
					if (_0x19857b.status) {
						if (_0x308d6a == 'InteractiveQuiz') {
							Ext.get('rightNum').setHTML(_0x19857b.rightAnswerCount);
							Ext.get('rightAnswerNum').setStyle('display', 'inline-block');
						}
						if (_0x19857b.isRight && _0x308d6a == 'InteractiveQuiz') {
							if (_0x19857b.testAnalysis) {
								Ext.get('tkParsing_con').setHTML('解析\uFF1A' + _0x19857b.testAnalysis);
								Ext.get('tkParsing').setStyle('display', 'inline-block');
								Ext.get('viewAnalysis').setStyle('display', 'block');
								var _0x4e9bc1 = _0x29856b.tkParseScrollEl, _0xbdd6c8 = $(_0x4e9bc1.dom).niceScroll({
									'cursorborder': '',
									'cursorwidth': 6,
									'cursorcolor': '#A5A5A5',
									'boxzoom': false,
									'autohidemode': true
								});
								_0x29856b.tkParseScroll = _0xbdd6c8;
							}
						}
					}
				}
			});
			!_0x3e8a9b && _0x29856b.onerror && _0x308d6a != 'InteractiveQuiz' && _0x29856b.onerror();
		} else {
			!_0x3e8a9b && (Ext.Ajax.request({
				'url': _0x4c5bbf,
				'params': {
					'eventid': _0x3bc17a.resourceId,
					'memberinfo': _0x3bc17a.memberinfo,
					'answerContent': _0x243ef2.join(',')
				},
				'method': 'get'
			}), _0x29856b.onerror && _0x308d6a != 'InteractiveQuiz' && _0x29856b.onerror());
		}
		return !_0x3e8a9b && _0x3bc17a.errorContinue == 1 && (_0x3e8a9b = true, Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('videoquiz-continue').setStyle('display', 'block')), _0x3e8a9b;
	},
	'continueFun': function () {
		var _0x376724 = this;
		_0x376724.fireEvent('continue');
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
		var _0x4ed36e = this;
		_0x4ed36e.callParent(arguments);
		_0x4ed36e.el.on('click', function () {
			_0x4ed36e.fireEvent('continue');
		});
		_0x4ed36e.closeEl.on('click', function () {
			_0x4ed36e.fireEvent('continue');
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
		var _0x5b8f58 = this, _0x1de232 = _0x5b8f58.contentEl;
		_0x5b8f58.callParent(arguments);
		_0x5b8f58.closeEl.on('click', function () {
			_0x5b8f58.fireEvent('continue');
		});
		var _0xae0109 = $(_0x1de232.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#e0e0e0',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x5b8f58.scroller = _0xae0109;
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
		var _0x47f7db = this;
		_0x47f7db.callParent(arguments);
		_0x47f7db.pptPicEl.on('click', function (_0x24d4be) {
			_0x24d4be.stopPropagation();
			_0x47f7db.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			if (_0x47f7db.pptPicEl.hasCls('sp_ppt_pic_fullScreen')) {
				Ext.get('sp_size_big').setStyle('display', 'none');
				Ext.get('sp_size_small').setStyle('display', 'block');
				var _0x2161c3 = Ext.get('video').getStyle('height'), _0x16e3e5 = Ext.get('sp_video_ppt_pic').getStyle('height'), _0x42a887 = (parseInt(_0x2161c3) - 60 - parseInt(_0x16e3e5)) / 2;
				Ext.get('sp_video_ppt_pic').setStyle('top', _0x42a887 + 'px');
				Ext.get('sp_video_ppt_pic').setStyle('left', '0');
			} else {
				Ext.get('sp_size_big').setStyle('display', 'block');
				Ext.get('sp_size_small').setStyle('display', 'none');
				Ext.get('sp_video_ppt_pic').setStyle('top', '0px');
				Ext.get('sp_video_ppt_pic').setStyle('left', '0px');
			}
		});
		_0x47f7db.sizeBigEl.on('click', function (_0x170753) {
			_0x170753.stopPropagation();
			_0x47f7db.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			Ext.get('sp_size_big').setStyle('display', 'none');
			Ext.get('sp_size_small').setStyle('display', 'block');
			var _0x31a653 = Ext.get('video').getStyle('height'), _0x3e75f4 = Ext.get('sp_video_ppt_pic').getStyle('height'), _0x31d956 = (parseInt(_0x31a653) - 60 - parseInt(_0x3e75f4)) / 2;
			Ext.get('sp_video_ppt_pic').setStyle('top', _0x31d956 + 'px');
			Ext.get('sp_video_ppt_pic').setStyle('left', '0');
		});
		_0x47f7db.sizeSmallEl.on('click', function (_0x546dfc) {
			_0x546dfc.stopPropagation();
			_0x47f7db.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
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
	'constructor': function (_0x77adfb) {
		var _0x27a352 = this;
		_0x27a352.callParent(arguments);
		_0x27a352.bg = Ext.create('ans.videojs.TimelineObjectsBg', { 'renderTo': _0x77adfb.renderTo });
		_0x27a352.objects = _0x77adfb.objects && _0x77adfb.objects.sort ? _0x27a352.sort_(_0x77adfb.objects) : [];
		_0x27a352.current = 0;
	},
	'showObject': function (_0x2c63a4, _0x2dcaaf, _0x433cc3) {
		var _0x2a5d41 = this, _0x4f7287 = _0x2a5d41.getBox(), _0x27247f = _0x2a5d41.items.getAt(0), _0x2b52fa, _0x567fb8 = function () {
			_0x2b52fa.destroy();
			_0x2a5d41.hide();
			_0x2c63a4.play();
		};
		_0x27247f != null && _0x27247f.destroy();
		if (_0x2dcaaf == 'IMG') {
			var _0x1ff17d = { 'src': _0x433cc3.url.replace(/origin/, _0x4f7287.width + '_' + _0x4f7287.height) };
			_0x2b52fa = _0x2a5d41.add({
				'xtype': 'videoimg',
				'renderData': _0x1ff17d
			});
		}
		if (_0x2dcaaf == 'QUIZ') {
			var _0x476147 = function () {
			};
			if (_0x433cc3.errorBackTime && _0x433cc3.errorBackTime > 0) {
				var _0xb1c946 = _0x433cc3.errorBackTime * 60;
				_0x476147 = function () {
					var _0x5f23c0 = Math.max(_0x2c63a4.currentTime() - _0xb1c946, 0);
					_0x2c63a4.currentTime(_0x5f23c0);
				};
			}
			_0x2b52fa = _0x2a5d41.add({
				'xtype': 'videoquiz',
				'renderData': _0x433cc3,
				'quizErrorReportUrl': _0x2a5d41.quizErrorReportUrl,
				'validationUrl2': _0x2a5d41.validationUrl2,
				'onerror': _0x476147
			});
		}
		if (_0x2dcaaf == 'InteractiveQuiz') {
			var _0x476147 = function () {
			};
			if (_0x433cc3.errorBackTime && _0x433cc3.errorBackTime > 0) {
				var _0xb1c946 = _0x433cc3.errorBackTime * 60;
				_0x476147 = function () {
					var _0x3c9c65 = Math.max(_0x2c63a4.currentTime() - _0xb1c946, 0);
					_0x2c63a4.currentTime(_0x3c9c65);
				};
			}
			if (_0x433cc3.errorBack == 1 && _0x433cc3.eBstartPoint != '') {
				var _0xb1c946 = 0, _0x573e86 = _0x433cc3.eBstartPoint.split(':'), _0x555ea8 = _0x573e86.length;
				_0x555ea8 > 0 && (_0x555ea8 == 1 ? _0xb1c946 = parseInt(_0x573e86[0]) * 60 : _0x555ea8 == 2 && (_0xb1c946 = parseInt(_0x573e86[0]) * 60 + parseInt(_0x573e86[1])));
				_0x476147 = function () {
					_0x2c63a4.currentTime(_0xb1c946);
				};
			}
			_0x433cc3.dtype = 'InteractiveQuiz';
			_0x2b52fa = _0x2a5d41.add({
				'xtype': 'videoquiz',
				'renderData': _0x433cc3,
				'quizErrorReportUrl': _0x2a5d41.quizErrorReportUrl,
				'validationUrl2': _0x2a5d41.validationUrl2,
				'quizRightCountUrl': _0x2a5d41.quizRightCountUrl,
				'onerror': _0x476147
			});
		}
		if (_0x2dcaaf == 'PPT') {
			if (_0x433cc3.fp == 0) {
				return;
			}
			var _0x2e7433 = _0x433cc3.url;
			_0x433cc3.thumb ? _0x2e7433 = _0x433cc3.thumb + _0x433cc3.pageNo + '.png' : _0x2e7433 = _0x2e7433.replace(/swfv2\/.*$/, 'thumb/' + _0x433cc3.fp + '.png');
			var _0x1ff17d = { 'src': _0x2e7433 };
			_0x2b52fa = _0x2a5d41.add({
				'xtype': 'videoppt',
				'renderData': _0x1ff17d
			});
		}
		_0x2dcaaf == 'SyncAnnotationEvent' && (_0x2b52fa = _0x2a5d41.add({
			'xtype': 'videoannotation',
			'renderData': _0x433cc3
		}));
		if (!_0x2b52fa) {
			return;
		}
		_0x2b52fa.on('continue', function () {
			_0x567fb8();
		});
		var _0x5cd143 = !(_0x2b52fa.model === false);
		_0x2a5d41.showModel(_0x5cd143);
		_0x5cd143 && _0x2c63a4.pause();
	},
	'showModel': function (_0x1fbfc9) {
		var _0x314015 = this;
		_0x314015.show();
		_0x1fbfc9 ? (_0x314015.removeCls('ans-timelineobjects-autosize'), _0x314015.setAutoScroll(true), _0x314015.bg.show()) : (_0x314015.addCls('ans-timelineobjects-autosize'), _0x314015.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
		this.bg.hide.apply(this.bg, arguments);
	},
	'updateTime': function (_0x108d19, _0x4dc3d0) {
		if (this.current >= this.objects.length || _0x108d19.scrubbing()) {
			return;
		}
		var _0x24c4d2 = this, _0x5466cd = _0x24c4d2.objects[_0x24c4d2.current], _0xe71297 = _0x5466cd.style, _0x343e42 = _0x5466cd.datas[0];
		if (_0x4dc3d0 >= _0x343e42.startTime) {
			_0x24c4d2.current++;
			_0x24c4d2.showObject(_0x108d19, _0xe71297, _0x343e42);
		}
	},
	'resetTime': function (_0xd55dec, _0x153b0f) {
		var _0x1140ee = this, _0x1182fa;
		for (_0x1182fa = 0; _0x1182fa < _0x1140ee.objects.length; _0x1182fa++) {
			var _0x4f69c6 = _0x1140ee.objects[_0x1182fa].datas[0].startTime;
			if (_0x153b0f <= _0x4f69c6) {
				break;
			}
		}
		_0x1140ee.current = _0x1182fa;
	},
	'sort_': function (_0x4622c7) {
		return _0x4622c7 && _0x4622c7.sort && _0x4622c7.sort(function (_0x1fa436, _0x2a7533) {
			var _0x582860 = _0x1fa436.datas[0].startTime, _0x1cdad7 = _0x2a7533.datas[0].startTime;
			return _0x582860 - _0x1cdad7;
		});
	}
});
(function () {
	var _0x1b35eb = videojs.getPlugin('plugin'), _0x26ebd0 = videojs.extend(_0x1b35eb, {
		'constructor': function (_0x4a2f45, _0x4fe0d9) {
			_0x1b35eb.call(this, _0x4a2f45, _0x4fe0d9);
			if (!_0x4fe0d9.url) {
				return;
			}
			var _0x12bc5a = this;
			Ext.Ajax.request({
				'url': _0x4fe0d9.url,
				'async': false,
				'success': function (_0x2180b3) {
					if (_0x2180b3.status != 200) {
						return;
					}
					eval('var data=' + _0x2180b3.responseText);
					if (data && data.length > 0) {
						var _0x225d3f = [];
						for (var _0x19b366 = 0; _0x19b366 < data.length; _0x19b366++) {
							var _0xf6a46f = data[_0x19b366];
							if (_0xf6a46f.style == 'InteractiveQuiz') {
								var _0x3297fe = _0xf6a46f.datas;
								if (_0x3297fe && _0x3297fe.length > 0) {
									var _0x3ac51d = {
										'time': _0x3297fe[0].startTime,
										'text': '互动测验'
									};
								}
							}
							_0x225d3f.push(_0x3ac51d);
						}
						if (_0x225d3f.length > 0) {
							var _0x529e35 = videojs('video');
							_0x529e35 && typeof _0x529e35.markers === 'function' && _0x529e35.markers({
								'markerTip': {
									'display': true,
									'text': function (_0x4aa40d) {
										return _0x4aa40d.text;
									}
								},
								'markers': _0x225d3f
							});
						}
					}
					var _0x172198 = Ext.create('ans.videojs.TimelineObjects', {
						'renderTo': _0x4a2f45.el_,
						'quizErrorReportUrl': _0x4fe0d9.quizErrorReportUrl,
						'validationUrl2': _0x4fe0d9.validationUrl2,
						'quizRightCountUrl': _0x4fe0d9.quizRightCountUrl,
						'objects': data
					});
					_0x4a2f45.on('play', function () {
						_0x172198.resetTime(_0x4a2f45, _0x4a2f45.currentTime());
					});
					_0x4a2f45.on('seekend', function () {
						_0x172198.resetTime(_0x4a2f45, _0x4a2f45.currentTime());
					});
					_0x4a2f45.on('timeupdate', function () {
						!_0x4a2f45.paused() && _0x172198.updateTime(_0x4a2f45, _0x4a2f45.currentTime());
					});
				}
			});
		}
	});
	videojs.registerPlugin('timelineObjects', _0x26ebd0);
}());
(function () {
	var _0x26cc1b = videojs.getPlugin('plugin'), _0x470dd9 = videojs.extend(_0x26cc1b, {
		'constructor': function (_0x169e48, _0x3386f7) {
			_0x26cc1b.call(this, _0x169e48, _0x3386f7);
			if (!_0x3386f7.url) {
				return;
			}
			var _0x1abe1f = this;
			Ext.Ajax.request({
				'url': _0x3386f7.url,
				'async': false,
				'success': function (_0xf05c6e) {
					if (_0xf05c6e.status != 200) {
						return;
					}
					eval('var data=' + _0xf05c6e.responseText);
					if (!data.status) {
						return;
					}
					var _0x462f6e = videojs('video');
					_0x462f6e && typeof _0x462f6e.markers === 'function' && _0x462f6e.markers({
						'markerTip': {
							'display': true,
							'text': function (_0x40c604) {
								return _0x40c604.text;
							}
						},
						'markers': data.list,
						'onMarkerClick': function (_0x4a4433) {
							if (_0x3386f7.ff != 1) {
								return false;
							}
							var _0x14c1f1 = $(this).data('marker-key');
							return _0x169e48.currentTime(_0x4a4433.time), false;
						}
					});
					if (data.list && data.list.length > 0) {
						Ext.select('.zsCloud').setStyle('display', 'block');
						var _0x53430f = Ext.select('.zsCloud_ul');
						if (_0x53430f && _0x53430f.elements[0]) {
							var _0x1a5686;
							for (var _0x189c53 = 0; _0x189c53 < data.list.length; _0x189c53++) {
								var _0x55c679 = data.list[_0x189c53], _0x5079f6 = Ext.fly(_0x53430f.elements[0]).select('.topicId' + _0x55c679.topicid + ':not(.markertime)'), _0x35ab0b = videojs.formatTime(_0x55c679.time);
								_0x5079f6 && _0x5079f6.elements[0] && _0x5079f6.elements[0].parentElement.remove();
								var _0x38358a = '<li><span class=\'topicId' + _0x55c679.topicid + ' markertime\' data-marker-time=\'' + _0x55c679.time + '\' title=\'' + _0x35ab0b + '\' onclick=\'markersPlayer(this)\'>' + _0x55c679.text + '</span></li>';
								_0x1a5686 ? _0x1a5686 = Ext.DomHelper.insertHtml('afterEnd', _0x1a5686.elements[0], _0x38358a) : _0x1a5686 = Ext.DomHelper.insertHtml('afterBegin', _0x53430f.elements[0], _0x38358a);
								_0x1a5686 = Ext.fly(_0x1a5686).select('');
							}
						}
						_0x3386f7.videoTopicCloud && _0x3386f7.videoTopicCloud == 1 && (Ext.select('.zsCloud_down').setStyle('display', 'block'), Ext.select('.zsCloud_body').setStyle('display', 'block'));
					}
					var _0x4ec443 = new Map(), _0x484c83 = new Array();
					if (data.list && data.list.length > 0) {
						for (var _0x189c53 = 0; _0x189c53 < data.list.length; _0x189c53++) {
							var _0x33ae22 = data.list[_0x189c53].topicid, _0x5e5cde = _0x4ec443.get(_0x33ae22);
							!_0x5e5cde && (_0x5e5cde = {}, _0x5e5cde.text = data.list[_0x189c53].text, _0x5e5cde.time = data.list[_0x189c53].time, _0x5e5cde.topicid = data.list[_0x189c53].topicid, _0x5e5cde.weight = 0, _0x5e5cde.html = {
								'data-marker-time': data.list[_0x189c53].time,
								'onclick': 'markersPlayer(this)'
							}, _0x4ec443.set(_0x33ae22, _0x5e5cde), _0x484c83.push(_0x5e5cde));
							_0x5e5cde.weight += 1;
						}
					}
					$(function () {
						_0x484c83.length != 0 && $('#word_cloud').jQCloud(_0x484c83);
					});
					$('.zsCloud_down').click(function () {
						var _0x4836e8 = $('.zsCloud_body');
						_0x4836e8.is(':visible') ? (_0x4836e8.hide(), $(this).addClass('zsCloud_up'), $(this).text('展开')) : (_0x4836e8.show(), $(this).removeClass('zsCloud_up'), $(this).text('收起'));
					});
				}
			});
		}
	});
	videojs.registerPlugin('marker', _0x470dd9);
}());
(function () {
	var _0x22cd05 = videojs.getPlugin('plugin'), _0x2d01c5 = videojs.extend(_0x22cd05, {
		'constructor': function (_0x1bf571, _0x8c5fbf) {
			_0x22cd05.call(this, _0x1bf571, _0x8c5fbf);
			var _0xaa8d6e = this, _0xc1e33f = _0x8c5fbf.subtitleUrl, _0x4a3d2d = function (_0x5077bb) {
				var _0x136590 = _0x5077bb.match(/support\/(\w+).\w+/);
				if (_0x136590) {
					return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0x136590[1];
				}
			}, _0xe49a27 = function (_0x879f2e, _0x31a0c0, _0x1bdfcb) {
				_0x1bf571.addRemoteTextTrack({
					'kind': 'subtitles',
					'srclang': 'cn',
					'label': _0x879f2e,
					'src': _0x31a0c0,
					'default': _0x1bdfcb
				}, true);
			};
			_0x1bf571.ready(function () {
				_0xc1e33f && Ext.Ajax.request({
					'url': _0xc1e33f,
					'success': function (_0x2bfe33) {
						if (_0x2bfe33.status != 200) {
							return;
						}
						eval('var subs=' + _0x2bfe33.responseText);
						var _0x4d7648 = 0, _0x250178 = 0;
						subs.length > 0 && Ext.each(subs, function (_0x262c48) {
							_0x8c5fbf.translate == 1 && _0x262c48.name == 'English' ? (_0x262c48.selected = true, _0x250178 = _0x4d7648) : _0x262c48.selected = false;
							_0xe49a27(_0x262c48.name, _0x4a3d2d(_0x262c48.url), _0x262c48.selected);
							_0x4d7648++;
						});
						if (_0x8c5fbf.translate == 1) {
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').setHTML('翻译');
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').addCls('vjs-hide-content');
						}
						setTimeout(function () {
							var _0x2ee4f9 = _0x1bf571.textTracks();
							_0x8c5fbf.translate == 1 ? _0x2ee4f9 && _0x2ee4f9[_0x250178] ? _0x2ee4f9[_0x250178].mode = 'showing' : _0x2ee4f9 && _0x2ee4f9[0] && (_0x2ee4f9[0].mode = 'showing') : _0x2ee4f9 && _0x2ee4f9[0] && (_0x2ee4f9[0].mode = 'showing');
						}, 500);
					}
				});
				var _0x2f568d = _0x1bf571.textTrackSettings;
				_0x2f568d.setValues({
					'backgroundColor': '#000',
					'backgroundOpacity': '0',
					'edgeStyle': 'uniform'
				});
				_0x2f568d.updateDisplay();
			});
		}
	});
	videojs.registerPlugin('subtitle', _0x2d01c5);
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
		var _0x43a4f2 = this;
		_0x43a4f2.callParent(arguments);
		var _0x339fc6 = Ext.query('input', _0x43a4f2.el.dom);
		Ext.each(_0x339fc6, function (_0x92c77c, _0x460ec8) {
			Ext.fly(_0x92c77c).on('click', function () {
				_0x43a4f2.onSelected(_0x460ec8);
			});
		});
		try {
			typeof createVideoTask === 'function' ? createVideoTask() : console.log('createVideoTask函数不存在\uFF01');
		} catch (_0x579130) {
		}
	},
	'setErrorMsg': function (_0x46affa) {
		Ext.fly(this.errorMsgEl).setHTML(_0x46affa);
	}
});
Ext.define('ans.videojs.ErrorNote', {
	'extend': 'Ext.Component',
	'cls': 'ans-vjserrdisplay',
	'renderTpl': ['<div class="ans-vjserrdisplay-title">播放出现异常\u3002</div>']
});
(function () {
	var _0x2752fb = videojs.getComponent('ErrorDisplay'), _0x5bdfb3 = videojs.extend(_0x2752fb, {
		'constructor': function (_0x1317e7, _0x2b7fff) {
			_0x2752fb.call(this, _0x1317e7, _0x2b7fff);
		},
		'colse': function () {
			_0x2752fb.prototype.colse.call(this);
			me.ansErrorDisplay && (me.ansErrorDisplay.destroy(), me.ansErrorDisplay = null);
		},
		'fill': function () {
			_0x2752fb.prototype.fill.call(this);
			var _0x794f80 = this, _0x2b4db4 = _0x794f80.player_, _0x5c1064 = _0x2b4db4.options_.playlines, _0x46384c = Ext.query('.vjs-modal-dialog-content', _0x794f80.el_)[0];
			_0x794f80.ansErrorDisplay && (_0x794f80.ansErrorDisplay.destroy(), delete _0x794f80.ansErrorDisplay);
			if (!_0x2b4db4.selectCDN || !_0x5c1064) {
				_0x794f80.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', { 'renderTo': _0x794f80.el_ });
				return;
			}
			var _0x103675 = _0x2b4db4.currentPlayline(), _0x1fd65a = 0;
			Ext.each(_0x5c1064, function (_0x1e1579, _0x5bccfa) {
				_0x103675 == _0x1e1579 && (_0x1fd65a = _0x5bccfa);
			});
			_0x794f80.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
				'renderTo': _0x794f80.el_,
				'onSelected': function (_0x2102dc) {
					_0x2b4db4.selectCDN(_0x2102dc);
					_0x794f80.close();
				},
				'renderData': {
					'playlines': _0x5c1064,
					'errorMsg': _0x794f80.content(),
					'selectedIndex': _0x1fd65a
				}
			});
		}
	});
	videojs.registerComponent('ErrorDisplay', _0x5bdfb3);
}());
(function () {
	var _0x43d444 = null;
	typeof window.videojs === 'undefined' && typeof require === 'function' ? _0x43d444 = require('video.js') : _0x43d444 = window.videojs;
	(function (_0x1fce89, _0x3670aa) {
		var _0x3c5449 = {}, _0x3bb88b, _0x4c3dba = {}, _0x3ea221 = {};
		function _0x44ed46(_0x3c8120, _0xf9ff6b, _0x4a2777, _0x496bce) {
			_0x4c3dba = {
				'label': _0x4a2777,
				'sources': _0xf9ff6b
			};
			if (typeof _0x496bce === 'function') {
				return _0x496bce(_0x3c8120, _0xf9ff6b, _0x4a2777);
			}
			return _0x3c8120.src(_0xf9ff6b.map(function (_0x14568f) {
				return {
					'src': _0x14568f.src,
					'type': _0x14568f.type,
					'res': _0x14568f.res
				};
			})), _0x3c8120;
		}
		var _0x708f8e = _0x3670aa.getComponent('MenuItem'), _0x577c82 = _0x3670aa.extend(_0x708f8e, {
			'constructor': function (_0x32531d, _0x4c07cc, _0x1f9f48, _0x246212) {
				this.onClickListener = _0x1f9f48;
				this.label = _0x246212;
				_0x708f8e.call(this, _0x32531d, _0x4c07cc);
				this.src = _0x4c07cc.src;
				this.on('click', this.onClick);
				this.on('touchstart', this.onClick);
				_0x4c07cc.initialySelected && (this.showAsLabel(), this.selected(true), this.addClass('vjs-selected'));
			},
			'showAsLabel': function () {
				this.label && (this.label.innerHTML = this.options_.label);
			},
			'onClick': function (_0x14ad90) {
				this.onClickListener(this);
				var _0x477598 = this.player_.currentTime(), _0x37e711 = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x37e711 && this.player_.bigPlayButton.hide();
				typeof _0x14ad90 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x14ad90 = this.options_.customSourcePicker);
				var _0x1ed698 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x1ed698 = 'timeupdate');
				_0x44ed46(this.player_, this.src, this.options_.label, _0x14ad90).one(_0x1ed698, function () {
					var _0x5234e5 = this.player_;
					_0x5234e5.switchStatus = true;
					_0x5234e5.currentTime(_0x477598);
					!_0x37e711 && _0x5234e5.play();
					_0x5234e5.trigger('resolutionchange');
				});
			}
		});
		_0x3670aa.registerComponent('ResolutionMenuItem', _0x577c82);
		var _0x9f55b6 = _0x3670aa.getComponent('MenuButton'), _0x1e60ee = _0x3670aa.extend(_0x9f55b6, {
			'constructor': function (_0x195f68, _0x34535b, _0x4b0002, _0x392259) {
				this.sources = _0x34535b.sources;
				this.label = _0x392259;
				this.label.innerHTML = _0x34535b.initialySelectedLabel;
				_0x9f55b6.call(this, _0x195f68, _0x34535b, _0x4b0002);
				this.controlText('Quality');
				if (_0x4b0002.dynamicLabel) {
					this.el().appendChild(_0x392259);
				} else {
					var _0x457f79 = document.createElement('span');
					_0x3670aa.dom.addClass(_0x457f79, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x457f79);
				}
			},
			'createItems': function () {
				var _0x2dc258 = [], _0x269ec8 = this.sources && this.sources.label || {}, _0x28a2bc = function (_0x4c91aa) {
					_0x2dc258.map(function (_0x3f7e2d) {
						_0x3f7e2d.selected(_0x3f7e2d === _0x4c91aa);
						_0x3f7e2d.removeClass('vjs-selected');
					});
				};
				for (var _0x3e2e7a in _0x269ec8) {
					_0x269ec8.hasOwnProperty(_0x3e2e7a) && (_0x2dc258.push(new _0x577c82(this.player_, {
						'label': _0x3e2e7a,
						'src': _0x269ec8[_0x3e2e7a],
						'initialySelected': _0x3e2e7a === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x28a2bc, this.label)), _0x3ea221[_0x3e2e7a] = _0x2dc258[_0x2dc258.length - 1]);
				}
				return _0x2dc258;
			}
		});
		_0x3bb88b = function (_0x29c076) {
			var _0x1800df = _0x3670aa.mergeOptions(_0x3c5449, _0x29c076), _0x53c833 = this, _0x3845af = document.createElement('span'), _0x430138 = {};
			_0x3670aa.dom.addClass(_0x3845af, 'vjs-resolution-button-label');
			_0x53c833.updateSrc = function (_0x51924e) {
				if (!_0x51924e) {
					return _0x53c833.src();
				}
				_0x53c833.controlBar.resolutionSwitcher && (_0x53c833.controlBar.resolutionSwitcher.dispose(), delete _0x53c833.controlBar.resolutionSwitcher);
				_0x51924e = _0x51924e.sort(_0x4bb4b4);
				_0x430138 = _0x544662(_0x51924e);
				var _0x5c5048 = _0x346661(_0x430138, _0x51924e), _0x13098e = new _0x1e60ee(_0x53c833, {
					'sources': _0x430138,
					'initialySelectedLabel': _0x5c5048.label,
					'initialySelectedRes': _0x5c5048.res,
					'customSourcePicker': _0x1800df.customSourcePicker
				}, _0x1800df, _0x3845af);
				return _0x3670aa.dom.addClass(_0x13098e.el(), 'vjs-resolution-button'), _0x53c833.controlBar.resolutionSwitcher = _0x53c833.controlBar.el_.insertBefore(_0x13098e.el_, _0x53c833.controlBar.getChild('fullscreenToggle').el_), _0x53c833.controlBar.resolutionSwitcher.dispose = function () {
					this.parentNode.removeChild(this);
				}, _0x44ed46(_0x53c833, _0x5c5048.sources, _0x5c5048.label, _0x1800df.customSourcePicker);
			};
			_0x53c833.currentResolution = function (_0x41bb2c, _0x16b8ca) {
				if (_0x41bb2c == null) {
					return _0x4c3dba;
				}
				return _0x3ea221[_0x41bb2c] != null && _0x3ea221[_0x41bb2c].onClick(_0x16b8ca), _0x53c833;
			};
			_0x53c833.getGroupedSrc = function () {
				return _0x430138;
			};
			function _0x4bb4b4(_0x18e852, _0x41ff10) {
				if (!_0x18e852.res || !_0x41ff10.res) {
					return 0;
				}
				return +_0x41ff10.res - +_0x18e852.res;
			}
			function _0x544662(_0x1ae3bb) {
				var _0x1b4a17 = {
					'label': {},
					'res': {},
					'type': {}
				};
				return _0x1ae3bb.map(function (_0x2cbc10) {
					_0x4dde84(_0x1b4a17, 'label', _0x2cbc10);
					_0x4dde84(_0x1b4a17, 'res', _0x2cbc10);
					_0x4dde84(_0x1b4a17, 'type', _0x2cbc10);
					_0x376e92(_0x1b4a17, 'label', _0x2cbc10);
					_0x376e92(_0x1b4a17, 'res', _0x2cbc10);
					_0x376e92(_0x1b4a17, 'type', _0x2cbc10);
				}), _0x1b4a17;
			}
			function _0x4dde84(_0x1bd1fc, _0x1f17fa, _0x212221) {
				_0x1bd1fc[_0x1f17fa][_0x212221[_0x1f17fa]] == null && (_0x1bd1fc[_0x1f17fa][_0x212221[_0x1f17fa]] = []);
			}
			function _0x376e92(_0x3aac1d, _0x1b960a, _0x186cba) {
				_0x3aac1d[_0x1b960a][_0x186cba[_0x1b960a]].push(_0x186cba);
			}
			function _0x346661(_0x2e5a39, _0x3cb7fb) {
				var _0x49333a = _0x1800df.default, _0x459330 = '';
				return _0x49333a === 'high' ? (_0x49333a = _0x3cb7fb[0].res, _0x459330 = _0x3cb7fb[0].label) : _0x49333a === 'low' || _0x49333a == null || !_0x2e5a39.res[_0x49333a] ? (_0x49333a = _0x3cb7fb[_0x3cb7fb.length - 1].res, _0x459330 = _0x3cb7fb[_0x3cb7fb.length - 1].label) : _0x2e5a39.res[_0x49333a] && (_0x459330 = _0x2e5a39.res[_0x49333a][0].label), {
					'res': _0x49333a,
					'label': _0x459330,
					'sources': _0x2e5a39.res[_0x49333a]
				};
			}
			_0x53c833.ready(function () {
				_0x53c833.options_.sources.length > 0 && _0x53c833.setTimeout(function () {
					_0x53c833.updateSrc(_0x53c833.options_.sources);
				}, 1);
			});
		};
		_0x3670aa.registerPlugin('videoJsResolutionSwitcher', _0x3bb88b);
	}(window, _0x43d444));
}());
(function () {
	(function (_0x531098, _0x4a3e71) {
		var _0x4bee0c = {}, _0x3b9a26, _0x4b6fa1 = {}, _0x31777a = { _0x5d0446: _0x4f55e7[_0x4f55e7.length - 1] };
		function _0x32e9fe(_0x20e1af, _0x2165c5, _0x36e407, _0x28dc62) {
			_0x4b6fa1 = _0x2165c5;
			if (typeof _0x28dc62 === 'function') {
				return _0x28dc62(_0x20e1af, _0x2165c5, _0x36e407);
			}
			return _0x20e1af;
		}
		var _0xac69b5 = _0x4a3e71.getComponent('ResolutionMenuItem'), _0x358b30 = _0x4a3e71.extend(_0xac69b5, {
			'onClick': function (_0x304d86) {
				this.onClickListener(this);
				var _0x1ed945 = this.player_.currentTime(), _0x264d6c = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x264d6c && this.player_.bigPlayButton.hide();
				typeof _0x304d86 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x304d86 = this.options_.customSourcePicker);
				var _0x4b59ed = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x4b59ed = 'timeupdate');
				var _0x4e2569 = _0x32e9fe(this.player_, this.src, this.options_.label, _0x304d86);
				_0x4e2569 && _0x4e2569.one(_0x4b59ed, function () {
					_0x4e2569.switchStatus = true;
					_0x4e2569.currentTime(_0x1ed945);
					!_0x264d6c && _0x4e2569.play();
					_0x4e2569.trigger('playlinechange');
				});
			}
		}), _0x1bbdd9 = _0x4a3e71.getComponent('MenuButton'), _0x5eeb81 = _0x4a3e71.extend(_0x1bbdd9, {
			'constructor': function (_0x3a41af, _0x1b4994, _0x59b593, _0x448018) {
				this.playlines = _0x1b4994.playlines;
				this.label = _0x448018;
				this.label.innerHTML = _0x1b4994.initialySelectedLabel;
				_0x1bbdd9.call(this, _0x3a41af, _0x1b4994, _0x59b593);
				this.controlText('Playline');
				if (_0x59b593.dynamicLabel) {
					this.el().appendChild(_0x448018);
				} else {
					var _0x156cc8 = document.createElement('span');
					_0x4a3e71.addClass(_0x156cc8, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x156cc8);
				}
			},
			'createItems': function () {
				var _0x4f55e7 = [], _0x1245f4 = this.playlines || [], _0x48d29e = function (_0x59500a) {
					_0x4f55e7.map(function (_0x28f9c1) {
						_0x28f9c1.selected(_0x28f9c1 === _0x59500a);
						_0x28f9c1.removeClass('vjs-selected');
					});
				};
				for (var _0x57c19b = 0; _0x57c19b < _0x1245f4.length; _0x57c19b++) {
					var _0x5d0446 = _0x1245f4[_0x57c19b].label;
					_0x4f55e7.push(new _0x358b30(this.player_, {
						'label': _0x5d0446,
						'src': _0x1245f4[_0x57c19b],
						'initialySelected': _0x5d0446 === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x48d29e, this.label));
				}
				return _0x4f55e7;
			}
		});
		_0x3b9a26 = function (_0x545174) {
			var _0x4ea1a1 = _0x4a3e71.mergeOptions(_0x4bee0c, _0x545174), _0x29b87c = this, _0x300bd7 = document.createElement('span'), _0xbd84a6 = _0x29b87c.options_.playlines;
			_0x4a3e71.dom.addClass(_0x300bd7, 'vjs-resolution-button-label');
			var _0x3a8e4c = new _0x5eeb81(_0x29b87c, {
				'playlines': _0xbd84a6,
				'initialySelectedLabel': _0xbd84a6[0].label,
				'initialySelectedUrl': _0xbd84a6[0].url,
				'customSourcePicker': _0x4ea1a1.customSourcePicker
			}, _0x4ea1a1, _0x300bd7);
			_0x4a3e71.dom.addClass(_0x3a8e4c.el(), 'vjs-resolution-button');
			_0x4a3e71.dom.addClass(_0x3a8e4c.el(), 'vjs-playline-button');
			_0x3a8e4c.show();
			_0x29b87c.selectCDN = function (_0x28a455) {
				_0x3a8e4c.items[_0x28a455].onClick(_0x4ea1a1.customSourcePicker);
				_0x29b87c.play();
			};
			_0xbd84a6.length > 0 && (_0x4b6fa1 = _0xbd84a6[0]);
			_0x29b87c.currentPlayline = function () {
				return _0x4b6fa1;
			};
			_0x29b87c.ready(function () {
				_0x29b87c.controlBar.videoJsPlayLine = _0x29b87c.controlBar.el_.insertBefore(_0x3a8e4c.el_, _0x29b87c.controlBar.getChild('fullscreenToggle').el_);
				_0x29b87c.controlBar.videoJsPlayLine.dispose = function () {
					this.parentNode.removeChild(this);
				};
			});
		};
		_0x4a3e71.registerPlugin('videoJsPlayLine', _0x3b9a26);
	}(window, videojs));
}());
Ext.define('ans.AudioJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x168cc6) {
		_0x168cc6 = _0x168cc6 || {};
		var _0x583479 = this;
		_0x583479.addEvents(['seekstart']);
		_0x583479.mixins.observable.constructor.call(_0x583479, _0x168cc6);
		var _0x5ea6c1 = videojs(_0x168cc6.videojs, _0x583479.params2VideoOpt(_0x168cc6.params), function () {
		});
		Ext.fly(_0x168cc6.videojs).on('contextmenu', function (_0x1b8ce9) {
			_0x1b8ce9.preventDefault();
		});
		Ext.fly(_0x168cc6.videojs).on('keydown', function (_0x5d79b2) {
			(_0x5d79b2.keyCode == 32 || _0x5d79b2.keyCode == 37 || _0x5d79b2.keyCode == 39) && _0x5d79b2.preventDefault();
		});
	},
	'params2VideoOpt': function (_0x1692d4) {
		var _0x20a977 = [];
		!_0x1692d4.rootPath && (_0x1692d4.rootPath = '');
		_0x1692d4.http && _0x20a977.push({
			'src': _0x1692d4.http,
			'type': 'audio/mp3'
		});
		var _0x5e5e5e = function (_0x3cd923, _0x1e3693, _0x50a9f2) {
			var _0x490ac8 = this;
			!_0x490ac8.logCount && (_0x490ac8.logCount = 0);
			videojs.xhr({
				'uri': _0x1e3693,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x20468a, _0x132c7c) {
				_0x490ac8.logCount++;
				if (_0x132c7c.statusCode == 200) {
					_0x490ac8.logCount = 0;
					if (_0x132c7c.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x132c7c.body);
					d.isPassed && _0x50a9f2();
					return;
				}
				if (_0x490ac8.logCount >= 4) {
					_0x490ac8.logCount = 0;
					_0x3cd923.pause();
					_0x132c7c.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x132c7c.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x3cc236 = function (_0xd0cdb9, _0x6304a5, _0x379371, _0x250935) {
			if (!_0x1692d4.reportUrl) {
				return;
			}
			var _0x5427d0 = (_0x1692d4.startTime || '0') + '_' + (_0x1692d4.endTime || _0x1692d4.duration), _0x2c1fc1 = 0, _0x3f3a76;
			_0x379371.toString().indexOf('-') != -1 ? (_0x3f3a76 = _0x379371.split('-'), _0x3f3a76.length == 2 && (_0x2c1fc1 = parseInt(_0x3f3a76[1]) * 1000)) : _0x2c1fc1 = _0x379371 * 1000;
			if (_0x2c1fc1 == _0x1692d4.duration * 1000 && _0x6304a5 == 2) {
				return;
			}
			var _0x2dedec = Ext.String.format('[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x1692d4.clazzId, _0x1692d4.userid, _0x1692d4.jobid ? _0x1692d4.jobid : '', _0x1692d4.objectId, _0x2c1fc1, 'd_yHJ!$pdA~5', _0x1692d4.duration * 1000, _0x5427d0), _0x1e0949 = [
				_0x1692d4.reportUrl,
				'/',
				_0x1692d4.dtoken,
				'?clazzId=',
				_0x1692d4.clazzId,
				'&playingTime=',
				_0x379371,
				'&duration=',
				_0x1692d4.duration,
				'&clipTime=',
				_0x5427d0,
				'&objectId=',
				_0x1692d4.objectId,
				'&otherInfo=',
				_0x1692d4.otherInfo,
				'&jobid=',
				_0x1692d4.jobid,
				'&userid=',
				_0x1692d4.userid,
				'&isdrag=',
				_0x6304a5,
				'&view=pc',
				'&enc=',
				md5(_0x2dedec),
				'&rt=',
				_0x1692d4.rt,
				'&dtype=Audio',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x5e5e5e(_0xd0cdb9, _0x1e0949, _0x250935);
		};
		return {
			'language': 'zh-CN',
			'controls': true,
			'preload': 'auto',
			'bigPlayButton': false,
			'sources': _0x20a977,
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
				'audioNote': { 'title': _0x1692d4.filename },
				'studyControl': { 'enableSwitchWindow': 1 },
				'seekBarControl': {
					'headOffset': _0x1692d4.headOffset,
					'enableFastForward': _0x1692d4.enableFastForward,
					'isSendLog': true,
					'reportTimeInterval': _0x1692d4.reportTimeInterval,
					'sendLog': function (_0x469ab8, _0x21afed, _0x55422f) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x44f8bd = 0;
						switch (_0x21afed) {
							case 'play':
								_0x44f8bd = 3;
								break;
							case 'pause':
								_0x44f8bd = 2;
								break;
							case 'ended':
								_0x44f8bd = 4;
								break;
						}
						_0x3cc236(_0x469ab8, _0x44f8bd, _0x55422f, function () {
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
	var _0x459c9b = videojs.getPlugin('plugin'), _0x373a85 = videojs.extend(_0x459c9b, {
		'constructor': function (_0x4098bf, _0x45f675) {
			_0x459c9b.call(this, _0x4098bf, _0x45f675);
			Ext.create('ans.videojs.AudioNote', {
				'renderTo': _0x4098bf.el_,
				'html': _0x45f675.title
			});
		}
	});
	videojs.registerPlugin('audioNote', _0x373a85);
}());
