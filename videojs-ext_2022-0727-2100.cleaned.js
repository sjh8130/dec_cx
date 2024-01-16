Ext.define('ananas.ServerHosts', {
	'alternateClassName': 'ServerHosts',
	'singleton': true,
	'constructor': function () {
		var _0x1c6e44 = this;
		_0x1c6e44.callParent(arguments);
		var _0x4b4e57 = document.domain;
		try {
			_0x1c6e44.MASTER_HOST = location.protocol + '//' + top.location.host;
		} catch (_0x17c5cd) {
			_0x1c6e44.MASTER_HOST = location.protocol + '//' + location.host;
		}
		try {
			_0x1c6e44.PARENT_HOST = parent.location.host !== '' ? location.protocol + '//' + parent.location.host : _0x1c6e44.MASTER_HOST;
		} catch (_0x15cfd9) {
			_0x1c6e44.PARENT_HOST = location.protocol + '//' + location.host;
		}
		_0x1c6e44.P_HOST = location.protocol + '//p.ananas.chaoxing.com';
		_0x1c6e44.s1_HOST = location.protocol + '//s1.ananas.chaoxing.com';
		_0x1c6e44.s2_HOST = location.protocol + '//s2.ananas.chaoxing.com';
		_0x1c6e44.CLOUD_HOST = 'http://cloud.ananas.' + _0x4b4e57;
		_0x1c6e44.NEW_CLOUD_HOST = location.protocol + '//pan-yz.chaoxing.com';
		_0x1c6e44.CS_HOST = location.protocol + '//cs.ananas.' + _0x4b4e57;
		_0x1c6e44.FANYA_HOST = 'http://course.fanya.' + _0x4b4e57;
		_0x1c6e44.PAN_HOST = 'http://pan.ananas.' + _0x4b4e57;
		_0x1c6e44.CXLIVE_HOST = 'http://cxlive.' + _0x4b4e57;
		_0x1c6e44.ERYA_TSK_HOST = 'http://erya.tsk.' + _0x4b4e57;
		_0x1c6e44.QUESTIONNAIRE_HOST = 'http://surveyapp.fy.' + _0x4b4e57;
		_0x1c6e44.FX_HOST = 'http://www.' + _0x4b4e57;
		_0x1c6e44.PHONE_ZT_HOST = 'https://special.rhky.com';
		_0x1c6e44.CHAOXING_CLASS_HOST = 'https://k.chaoxing.com';
		_0x1c6e44.LIVE_HOST = location.protocol + '//live.chaoxing.com';
		_0x1c6e44.APPCD_HOST = location.protocol + '//appcd.chaoxing.com';
		_0x1c6e44.ZHIBO_HOST = 'https://zhibo.chaoxing.com';
		_0x1c6e44.CXCLASSTASL_HOST = location.protocol + '//noteyd.chaoxing.com';
	}
});
(function (_0x41166a) {
	function _0x4b3c96(_0x4b1abf, _0x33fb79) {
		var _0x2129c3 = (_0x4b1abf & 65535) + (_0x33fb79 & 65535), _0x12fd56 = (_0x4b1abf >> 16) + (_0x33fb79 >> 16) + (_0x2129c3 >> 16);
		return _0x12fd56 << 16 | _0x2129c3 & 65535;
	}
	function _0x37af93(_0x1f932b, _0x554324) {
		return _0x1f932b << _0x554324 | _0x1f932b >>> 32 - _0x554324;
	}
	function _0x58ad2b(_0xf8702d, _0x372f27, _0x16c123, _0x53c930, _0x233a7a, _0x6903bb) {
		return _0x4b3c96(_0x37af93(_0x4b3c96(_0x4b3c96(_0x372f27, _0xf8702d), _0x4b3c96(_0x53c930, _0x6903bb)), _0x233a7a), _0x16c123);
	}
	function _0xf83a65(_0x3a6814, _0xd17c31, _0x5dbe6c, _0x48334f, _0x2b9a46, _0x229134, _0x1db81b) {
		return _0x58ad2b(_0xd17c31 & _0x5dbe6c | ~_0xd17c31 & _0x48334f, _0x3a6814, _0xd17c31, _0x2b9a46, _0x229134, _0x1db81b);
	}
	function _0x314392(_0x10f3df, _0x28222a, _0x4923e6, _0x507c1e, _0x35da26, _0x1ef741, _0x591ac2) {
		return _0x58ad2b(_0x28222a & _0x507c1e | _0x4923e6 & ~_0x507c1e, _0x10f3df, _0x28222a, _0x35da26, _0x1ef741, _0x591ac2);
	}
	function _0x44ec45(_0x414832, _0x37ca1f, _0x30edad, _0x3aedc2, _0x14bbff, _0xee1007, _0x16615c) {
		return _0x58ad2b(_0x37ca1f ^ _0x30edad ^ _0x3aedc2, _0x414832, _0x37ca1f, _0x14bbff, _0xee1007, _0x16615c);
	}
	function _0x9c4671(_0xbdabce, _0x2e9a0c, _0x34026b, _0x3b0998, _0x3752ff, _0x121a5b, _0x54f16d) {
		return _0x58ad2b(_0x34026b ^ (_0x2e9a0c | ~_0x3b0998), _0xbdabce, _0x2e9a0c, _0x3752ff, _0x121a5b, _0x54f16d);
	}
	function _0x59c94e(_0x39ac0e, _0x165e31) {
		_0x39ac0e[_0x165e31 >> 5] |= 128 << _0x165e31 % 32;
		_0x39ac0e[(_0x165e31 + 64 >>> 9 << 4) + 14] = _0x165e31;
		var _0xbc2408, _0x570abf, _0x12db8a, _0x254f87, _0xb7e2ad, _0x4e6dd0 = 1732584193, _0x150375 = -271733879, _0x36f317 = -1732584194, _0x266fe7 = 271733878;
		for (_0xbc2408 = 0; _0xbc2408 < _0x39ac0e.length; _0xbc2408 += 16) {
			_0x570abf = _0x4e6dd0;
			_0x12db8a = _0x150375;
			_0x254f87 = _0x36f317;
			_0xb7e2ad = _0x266fe7;
			_0x4e6dd0 = _0xf83a65(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408], 7, -680876936);
			_0x266fe7 = _0xf83a65(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408 + 1], 12, -389564586);
			_0x36f317 = _0xf83a65(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 2], 17, 606105819);
			_0x150375 = _0xf83a65(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408 + 3], 22, -1044525330);
			_0x4e6dd0 = _0xf83a65(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408 + 4], 7, -176418897);
			_0x266fe7 = _0xf83a65(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408 + 5], 12, 1200080426);
			_0x36f317 = _0xf83a65(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 6], 17, -1473231341);
			_0x150375 = _0xf83a65(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408 + 7], 22, -45705983);
			_0x4e6dd0 = _0xf83a65(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408 + 8], 7, 1770035416);
			_0x266fe7 = _0xf83a65(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408 + 9], 12, -1958414417);
			_0x36f317 = _0xf83a65(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 10], 17, -42063);
			_0x150375 = _0xf83a65(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408 + 11], 22, -1990404162);
			_0x4e6dd0 = _0xf83a65(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408 + 12], 7, 1804603682);
			_0x266fe7 = _0xf83a65(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408 + 13], 12, -40341101);
			_0x36f317 = _0xf83a65(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 14], 17, -1502002290);
			_0x150375 = _0xf83a65(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408 + 15], 22, 1236535329);
			_0x4e6dd0 = _0x314392(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408 + 1], 5, -165796510);
			_0x266fe7 = _0x314392(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408 + 6], 9, -1069501632);
			_0x36f317 = _0x314392(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 11], 14, 643717713);
			_0x150375 = _0x314392(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408], 20, -373897302);
			_0x4e6dd0 = _0x314392(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408 + 5], 5, -701558691);
			_0x266fe7 = _0x314392(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408 + 10], 9, 38016083);
			_0x36f317 = _0x314392(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 15], 14, -660478335);
			_0x150375 = _0x314392(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408 + 4], 20, -405537848);
			_0x4e6dd0 = _0x314392(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408 + 9], 5, 568446438);
			_0x266fe7 = _0x314392(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408 + 14], 9, -1019803690);
			_0x36f317 = _0x314392(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 3], 14, -187363961);
			_0x150375 = _0x314392(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408 + 8], 20, 1163531501);
			_0x4e6dd0 = _0x314392(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408 + 13], 5, -1444681467);
			_0x266fe7 = _0x314392(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408 + 2], 9, -51403784);
			_0x36f317 = _0x314392(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 7], 14, 1735328473);
			_0x150375 = _0x314392(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408 + 12], 20, -1926607734);
			_0x4e6dd0 = _0x44ec45(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408 + 5], 4, -378558);
			_0x266fe7 = _0x44ec45(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408 + 8], 11, -2022574463);
			_0x36f317 = _0x44ec45(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 11], 16, 1839030562);
			_0x150375 = _0x44ec45(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408 + 14], 23, -35309556);
			_0x4e6dd0 = _0x44ec45(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408 + 1], 4, -1530992060);
			_0x266fe7 = _0x44ec45(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408 + 4], 11, 1272893353);
			_0x36f317 = _0x44ec45(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 7], 16, -155497632);
			_0x150375 = _0x44ec45(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408 + 10], 23, -1094730640);
			_0x4e6dd0 = _0x44ec45(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408 + 13], 4, 681279174);
			_0x266fe7 = _0x44ec45(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408], 11, -358537222);
			_0x36f317 = _0x44ec45(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 3], 16, -722521979);
			_0x150375 = _0x44ec45(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408 + 6], 23, 76029189);
			_0x4e6dd0 = _0x44ec45(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408 + 9], 4, -640364487);
			_0x266fe7 = _0x44ec45(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408 + 12], 11, -421815835);
			_0x36f317 = _0x44ec45(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 15], 16, 530742520);
			_0x150375 = _0x44ec45(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408 + 2], 23, -995338651);
			_0x4e6dd0 = _0x9c4671(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408], 6, -198630844);
			_0x266fe7 = _0x9c4671(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408 + 7], 10, 1126891415);
			_0x36f317 = _0x9c4671(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 14], 15, -1416354905);
			_0x150375 = _0x9c4671(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408 + 5], 21, -57434055);
			_0x4e6dd0 = _0x9c4671(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408 + 12], 6, 1700485571);
			_0x266fe7 = _0x9c4671(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408 + 3], 10, -1894986606);
			_0x36f317 = _0x9c4671(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 10], 15, -1051523);
			_0x150375 = _0x9c4671(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408 + 1], 21, -2054922799);
			_0x4e6dd0 = _0x9c4671(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408 + 8], 6, 1873313359);
			_0x266fe7 = _0x9c4671(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408 + 15], 10, -30611744);
			_0x36f317 = _0x9c4671(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 6], 15, -1560198380);
			_0x150375 = _0x9c4671(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408 + 13], 21, 1309151649);
			_0x4e6dd0 = _0x9c4671(_0x4e6dd0, _0x150375, _0x36f317, _0x266fe7, _0x39ac0e[_0xbc2408 + 4], 6, -145523070);
			_0x266fe7 = _0x9c4671(_0x266fe7, _0x4e6dd0, _0x150375, _0x36f317, _0x39ac0e[_0xbc2408 + 11], 10, -1120210379);
			_0x36f317 = _0x9c4671(_0x36f317, _0x266fe7, _0x4e6dd0, _0x150375, _0x39ac0e[_0xbc2408 + 2], 15, 718787259);
			_0x150375 = _0x9c4671(_0x150375, _0x36f317, _0x266fe7, _0x4e6dd0, _0x39ac0e[_0xbc2408 + 9], 21, -343485551);
			_0x4e6dd0 = _0x4b3c96(_0x4e6dd0, _0x570abf);
			_0x150375 = _0x4b3c96(_0x150375, _0x12db8a);
			_0x36f317 = _0x4b3c96(_0x36f317, _0x254f87);
			_0x266fe7 = _0x4b3c96(_0x266fe7, _0xb7e2ad);
		}
		return [
			_0x4e6dd0,
			_0x150375,
			_0x36f317,
			_0x266fe7
		];
	}
	function _0x524128(_0x101b11) {
		var _0x3fd6f2, _0x187cc3 = '', _0x5b9400 = _0x101b11.length * 32;
		for (_0x3fd6f2 = 0; _0x3fd6f2 < _0x5b9400; _0x3fd6f2 += 8) {
			_0x187cc3 += String.fromCharCode(_0x101b11[_0x3fd6f2 >> 5] >>> _0x3fd6f2 % 32 & 255);
		}
		return _0x187cc3;
	}
	function _0x31a4a4(_0x2962dd) {
		var _0x1ce650, _0x5d2d56 = [];
		_0x5d2d56[(_0x2962dd.length >> 2) - 1] = undefined;
		for (_0x1ce650 = 0; _0x1ce650 < _0x5d2d56.length; _0x1ce650 += 1) {
			_0x5d2d56[_0x1ce650] = 0;
		}
		var _0x24c127 = _0x2962dd.length * 8;
		for (_0x1ce650 = 0; _0x1ce650 < _0x24c127; _0x1ce650 += 8) {
			_0x5d2d56[_0x1ce650 >> 5] |= (_0x2962dd.charCodeAt(_0x1ce650 / 8) & 255) << _0x1ce650 % 32;
		}
		return _0x5d2d56;
	}
	function _0x39d252(_0x7e0c3) {
		return _0x524128(_0x59c94e(_0x31a4a4(_0x7e0c3), _0x7e0c3.length * 8));
	}
	function _0x343c98(_0x189291, _0x86088e) {
		var _0x3f7a97, _0xbb4f42 = _0x31a4a4(_0x189291), _0x3d043d = [], _0x1589f3 = [], _0x2685ff;
		_0x3d043d[15] = _0x1589f3[15] = undefined;
		_0xbb4f42.length > 16 && (_0xbb4f42 = _0x59c94e(_0xbb4f42, _0x189291.length * 8));
		for (_0x3f7a97 = 0; _0x3f7a97 < 16; _0x3f7a97 += 1) {
			_0x3d043d[_0x3f7a97] = _0xbb4f42[_0x3f7a97] ^ 909522486;
			_0x1589f3[_0x3f7a97] = _0xbb4f42[_0x3f7a97] ^ 1549556828;
		}
		return _0x2685ff = _0x59c94e(_0x3d043d.concat(_0x31a4a4(_0x86088e)), 512 + _0x86088e.length * 8), _0x524128(_0x59c94e(_0x1589f3.concat(_0x2685ff), 640));
	}
	function _0x3e3507(_0x3dbba2) {
		var _0x9bb38a = '', _0x208132, _0xda85f1;
		for (_0xda85f1 = 0; _0xda85f1 < _0x3dbba2.length; _0xda85f1 += 1) {
			_0x208132 = _0x3dbba2.charCodeAt(_0xda85f1);
			_0x9bb38a += '0123456789abcdef'.charAt(_0x208132 >>> 4 & 15) + '0123456789abcdef'.charAt(_0x208132 & 15);
		}
		return _0x9bb38a;
	}
	function _0x3b7f06(_0x29b83d) {
		return unescape(encodeURIComponent(_0x29b83d));
	}
	function _0x11a5f0(_0x19544b) {
		return _0x39d252(_0x3b7f06(_0x19544b));
	}
	function _0x31de0c(_0xe9baf6) {
		return _0x3e3507(_0x11a5f0(_0xe9baf6));
	}
	function _0x3735e2(_0x363890, _0x53a1f4) {
		return _0x343c98(_0x3b7f06(_0x363890), _0x3b7f06(_0x53a1f4));
	}
	function _0x31f029(_0xb6cc8d, _0x4b26ec) {
		return _0x3e3507(_0x3735e2(_0xb6cc8d, _0x4b26ec));
	}
	function _0x285696(_0x52d0a4, _0x59d855, _0xbf0fc6) {
		if (!_0x59d855) {
			if (!_0xbf0fc6) {
				return _0x31de0c(_0x52d0a4);
			}
			return _0x11a5f0(_0x52d0a4);
		}
		if (!_0xbf0fc6) {
			return _0x31f029(_0x59d855, _0x52d0a4);
		}
		return _0x3735e2(_0x59d855, _0x52d0a4);
	}
	typeof define === 'function' && define.amd ? define(function () {
		return _0x285696;
	}) : typeof module === 'object' && module.exports ? module.exports = _0x285696 : _0x41166a.md5 = _0x285696;
}(this));
Ext.apply(Ext, {
	'setCookie': function (_0x5b06f5, _0x34cdb9) {
		var _0x159dac = arguments, _0x3fa63c = arguments.length, _0x3e7eba = _0x3fa63c > 2 ? _0x159dac[2] : null, _0x10eb17 = _0x3fa63c > 3 ? _0x159dac[3] : '/', _0x50d3fb = _0x3fa63c > 4 ? _0x159dac[4] : null, _0x38a2b6 = _0x3fa63c > 5 ? _0x159dac[5] : false;
		document.cookie = _0x5b06f5 + '=' + escape(_0x34cdb9) + (_0x3e7eba === null ? '' : '; expires=' + _0x3e7eba.toGMTString()) + (_0x10eb17 === null ? '' : '; path=' + _0x10eb17) + (_0x50d3fb === null ? '' : '; domain=' + _0x50d3fb) + (_0x38a2b6 === true ? '; secure' : '');
	},
	'getCookie': function (_0x4c80d2, _0x1922a7) {
		var _0xa3e35 = _0x4c80d2 + '=', _0x8679e8 = _0xa3e35.length, _0x5051e9 = document.cookie.length, _0x4236ed = 0, _0x4b4eaf = 0;
		while (_0x4236ed < _0x5051e9) {
			_0x4b4eaf = _0x4236ed + _0x8679e8;
			if (document.cookie.substring(_0x4236ed, _0x4b4eaf) == _0xa3e35) {
				return this.getCookieVal(_0x4b4eaf);
			}
			_0x4236ed = document.cookie.indexOf(' ', _0x4236ed) + 1;
			if (_0x4236ed === 0) {
				break;
			}
		}
		return _0x1922a7;
	},
	'getCookieVal': function (_0x445656) {
		var _0x4360bd = document.cookie.indexOf(';', _0x445656);
		return _0x4360bd == -1 && (_0x4360bd = document.cookie.length), unescape(document.cookie.substring(_0x445656, _0x4360bd));
	}
});
Ext.define('ans.VideoJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x1daada) {
		_0x1daada = _0x1daada || {};
		var _0x983ff4 = this;
		_0x983ff4.addEvents(['seekstart']);
		_0x983ff4.mixins.observable.constructor.call(_0x983ff4, _0x1daada);
		var _0x45d3ff = videojs(_0x1daada.videojs, _0x983ff4.params2VideoOpt(_0x1daada.params), function () {
		});
		Ext.fly(_0x1daada.videojs).on('contextmenu', function (_0x477397) {
			_0x477397.preventDefault();
		});
		Ext.fly(_0x1daada.videojs).on('keydown', function (_0x2c9303) {
			(_0x2c9303.keyCode == 32 || _0x2c9303.keyCode == 37 || _0x2c9303.keyCode == 39 || _0x2c9303.keyCode == 107) && _0x2c9303.preventDefault();
		});
		_0x45d3ff.videoJsResolutionSwitcher && _0x45d3ff.on('resolutionchange', function () {
			var _0x4906e5 = _0x45d3ff.currentResolution(), _0x276a50 = _0x4906e5.sources ? _0x4906e5.sources[0].res : false;
			Ext.setCookie('resolution', _0x276a50);
		});
		var _0x4667cb = _0x1daada.params && _0x1daada.params.doublespeed ? 2 : 1;
		_0x45d3ff.on('ratechange', function () {
			var _0x5e6be4 = _0x45d3ff.playbackRate();
			_0x5e6be4 > _0x4667cb ? (_0x45d3ff.pause(), _0x45d3ff.playbackRate(1)) : Ext.setCookie('doubleSpeedValue', _0x5e6be4);
		});
		_0x45d3ff.on('play', function () {
			if (_0x1daada.params && _0x1daada.params.doublespeed) {
				var _0x2e2863 = Ext.getCookie('doubleSpeedValue', 1);
				_0x45d3ff.playbackRate(_0x2e2863);
			}
		});
	},
	'params2VideoOpt': function (_0x190e34) {
		var _0x167f75 = typeof _0x190e34.cpi == 'undefined' ? 0 : _0x190e34.cpi, _0x394f14 = false, _0x175941 = [
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
		if (_0x190e34.cdn) {
			try {
				top.window.app && top.window.app == 2 ? _0x175941 = _0x175941.concat(_0x190e34.cdn) : _0x175941 = _0x175941.concat(_0x190e34.cdn).sort(function (_0x6c7150, _0x1836da) {
					return _0x6c7150.indexorder - _0x1836da.indexorder;
				});
			} catch (_0x15e5e8) {
				_0x175941 = _0x175941.concat(_0x190e34.cdn);
			}
		}
		function _0x46f8ea(_0x3530ed, _0x5d16e6, _0x1b9855) {
			return 'http://hls-ans.chaoxing.com/hls/m3u8/' + _0x3530ed + '/' + _0x5d16e6 + '.m3u8?cdn=' + encodeURIComponent(_0x1b9855);
		}
		function _0xc141dc(_0x1940ab, _0x55d2cb) {
			var _0x5d8d28 = ServerHosts.s1_HOST.replace('http:/', '').replace('https:/', ''), _0x5981a8 = 0;
			_0x1940ab.src.indexOf(_0x5d8d28) > -1 && (_0x5981a8 = _0x1940ab.src.indexOf(_0x5d8d28) + _0x5d8d28.length);
			var _0x351e71 = _0x1940ab.src.substr(_0x5981a8);
			if (_0x55d2cb.ispublic && _0x5981a8 == 0) {
				return {
					'src': _0x351e71,
					'type': 'video/mp4',
					'res': _0x1940ab.res
				};
			}
			return _0x55d2cb.ispublic ? _0x394f14 ? {
				'src': _0x46f8ea(_0x190e34.objectId, _0x1940ab.resolution, _0x55d2cb.url),
				'type': 'application/x-mpegURL',
				'res': _0x1940ab.res
			} : {
				'src': _0x55d2cb.url + _0x351e71,
				'type': 'video/mp4',
				'res': _0x1940ab.res
			} : _0x394f14 ? {
				'src': _0x46f8ea(_0x190e34.objectId, _0x1940ab.resolution, _0x55d2cb.url + _0x5d8d28),
				'type': 'application/x-mpegURL',
				'res': _0x1940ab.res
			} : {
				'src': _0x55d2cb.url + _0x5d8d28 + _0x351e71,
				'type': 'video/mp4',
				'res': _0x1940ab.res
			};
		}
		var _0x446322 = [], _0x285fde = Ext.getCookie('resolution', 360);
		!_0x190e34.rootPath && (_0x190e34.rootPath = '');
		_0x190e34.http && _0x446322.push({
			'src': _0x190e34.http,
			'type': 'video/mp4',
			'label': '标清',
			'resolution': 'sd',
			'res': 360
		});
		_0x190e34.httphd && _0x446322.push({
			'src': _0x190e34.httphd,
			'type': 'video/mp4',
			'label': '高清',
			'resolution': 'hd',
			'res': 720
		});
		_0x190e34.httpshd && _0x446322.push({
			'src': _0x190e34.httpshd,
			'type': 'video/mp4',
			'label': '超高清',
			'resolution': 'shd',
			'res': 1080
		});
		_0x190e34.httpmd && _0x446322.push({
			'src': _0x190e34.httpmd,
			'type': 'video/mp4',
			'label': '极速',
			'resolution': 'md',
			'res': 240
		});
		if (_0x446322.length == 1) {
			var _0x3dd95c = _0x446322[0];
			_0x3dd95c.label = '高清';
		}
		var _0x5a0bec = false;
		for (var _0x1c921c = 0; _0x1c921c < _0x446322.length; _0x1c921c++) {
			if (_0x446322[_0x1c921c].res == _0x285fde) {
				_0x5a0bec = true;
				break;
			}
		}
		!_0x5a0bec && (_0x285fde = 360);
		var _0xdd28df = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid), _0x302aaa = function (_0x2d125a, _0x107c9e, _0x50f119) {
			try {
				if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && isUnFinishJob()) {
					return;
				}
				if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && isUnFinishJob()) {
					return;
				}
			} catch (_0xb95b4d) {
				console.log(_0xb95b4d);
			}
			if (_0xdd28df) {
				return;
			}
			var _0x1ba42f = this;
			!_0x1ba42f.logCount && (_0x1ba42f.logCount = 0);
			videojs.xhr({
				'uri': _0x107c9e,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x3a6660, _0x183c3f) {
				_0x1ba42f.logCount++;
				if (_0x183c3f.statusCode == 200) {
					_0x1ba42f.logCount = 0;
					if (_0x183c3f.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x183c3f.body);
					if (d.isPassed) {
						try {
							typeof d.hasJobLimit != 'undefined' && d.hasJobLimit === true && (top.allowNextVideo = false, top.hasJobLimit = true);
							typeof d.videoTimeLimit != 'undefined' && d.videoTimeLimit === true && (top.allowNextVideo = false, top.videoTimeLimit = true);
						} catch (_0xfd313d) {
							console.log(_0xfd313d);
						}
						_0x50f119();
					}
					return;
				}
				if (_0x1ba42f.logCount >= 4) {
					_0x1ba42f.logCount = 0;
					_0x2d125a.pause();
					if (_0x183c3f.statusCode != 0) {
						if (_0x183c3f.statusCode == 202 || _0x183c3f.statusCode == 302) {
							try {
								parent.location.reload();
							} catch (_0x46747c) {
								console.log(_0x46747c.message);
							}
						} else {
							alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x183c3f.statusCode + ')');
						}
					} else {
						alert('您的网络不稳定\uFF0C请您稍后继续...');
					}
				}
			});
		}, _0x1c5aaf = function (_0x3c707d, _0x519704, _0x303311, _0x3d9c76) {
			if (!_0x190e34.reportUrl) {
				return;
			}
			if (_0x190e34.isFiled == 1 || _0x190e34.state == 1) {
				return;
			}
			var _0x5007db = (_0x190e34.startTime || '0') + '_' + (_0x190e34.endTime || _0x190e34.duration), _0x4b3127 = 0, _0x17497d;
			_0x303311.toString().indexOf('-') != -1 ? (_0x17497d = _0x303311.split('-'), _0x17497d.length == 2 && (_0x4b3127 = parseInt(_0x17497d[1]) * 1000)) : _0x4b3127 = _0x303311 * 1000;
			if (_0x4b3127 == _0x190e34.duration * 1000 && _0x519704 == 2) {
				return;
			}
			var _0x3bc616 = Ext.String.format('[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x190e34.clazzId, _0x190e34.userid, _0x190e34.jobid || '', _0x190e34.objectId, _0x4b3127, 'd_yHJ!$pdA~5', _0x190e34.duration * 1000, _0x5007db), _0x51ca66 = [
				_0x190e34.reportUrl,
				'/',
				_0x190e34.dtoken,
				'?clazzId=',
				_0x190e34.clazzId,
				'&playingTime=',
				_0x303311,
				'&duration=',
				_0x190e34.duration,
				'&clipTime=',
				_0x5007db,
				'&objectId=',
				_0x190e34.objectId,
				'&otherInfo=',
				_0x190e34.otherInfo,
				'&jobid=',
				_0x190e34.jobid,
				'&userid=',
				_0x190e34.userid,
				'&isdrag=',
				_0x519704,
				'&view=pc',
				'&enc=',
				md5(_0x3bc616),
				'&rt=',
				_0x190e34.rt,
				'&dtype=Video',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x302aaa(_0x3c707d, _0x51ca66, _0x3d9c76);
		};
		return {
			'language': 'zh-CN',
			'poster': _0x190e34.screenshot,
			'controls': true,
			'preload': 'none',
			'sources': _0x446322,
			'playlines': _0x175941,
			'playbackRates': _0x190e34.doublespeed != 0 ? [
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
					'default': _0x285fde,
					'dynamicLabel': true,
					'customSourcePicker': function (_0x44a77a, _0x43a5ee, _0x297c07) {
						var _0x1267b5 = _0x44a77a.currentPlayline();
						return _0x44a77a.src(_0x43a5ee.map(function (_0x90ac87) {
							return _0xc141dc(_0x90ac87, _0x1267b5);
						})), _0x44a77a;
					}
				},
				'videoJsPlayLine': {
					'dynamicLabel': true,
					'customSourcePicker': function (_0xbc276d, _0x2e2227, _0x10297a) {
						var _0x58d0d0 = _0xbc276d.currentResolution().sources[0];
						return _0xbc276d.src(_0xc141dc(_0x58d0d0, _0x2e2227)), _0xbc276d;
					}
				},
				'studyControl': { 'enableSwitchWindow': _0x190e34.enableSwitchWindow },
				'seekBarControl': {
					'headOffset': _0x190e34.headOffset,
					'enableFastForward': _0x190e34.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0x190e34.control,
					'reportTimeInterval': _0x190e34.reportTimeInterval,
					'isShowDanmu': _0x190e34.danmaku,
					'chapterCapture': _0x190e34.chapterCapture || 0,
					'captureInterval': _0x190e34.captureInterval || 600,
					'chapterCollectionType': _0x190e34.chapterCollectionType || 0,
					'startCapture': _0x190e34.startCapture,
					'endCapture': _0x190e34.endCapture,
					'playAginCapture': _0x190e34.playAginCapture,
					'playingCapture': _0x190e34.playingCapture,
					'playingLoopCapture': _0x190e34.playingLoopCapture,
					'duration': _0x190e34.duration,
					'isSupportFace': _0x190e34.isSupportFace || false,
					'isShowFaceCollection': _0x190e34.isShowFaceCollection,
					'jumpTimePointList': _0x190e34.jumpTimePointList,
					'attachmentId': _0x190e34.aId,
					'sendLog': function (_0xbdf9b9, _0xa656b, _0x49fded, _0x198a44) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x2d5550 = 0;
						switch (_0xa656b) {
							case 'playing':
								_0x2d5550 = 0;
								break;
							case 'drag':
								_0x2d5550 = 1;
								break;
							case 'play':
								_0x2d5550 = 3;
								break;
							case 'pause':
								_0x2d5550 = 2;
								break;
							case 'ended':
								_0x2d5550 = 4;
								break;
						}
						var _0x505ac1 = this;
						_0x1c5aaf(_0xbdf9b9, _0x2d5550, _0x49fded, function () {
							try {
								_0x2d5550 === 4 && typeof _0x198a44 != 'undefined' && (_0x198a44.sendDataLog('ended'), _0x198a44.playNextVideo(_0x505ac1.attachmentId));
							} catch (_0x1a4114) {
								console.log(_0x1a4114);
							}
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				'timelineObjects': {
					'url': _0x190e34.rootPath + '/richvideo/initdatawithviewerV2?mid=' + _0x190e34.mid + '&cpi=' + _0x190e34.cpi + '&classid=' + _0x190e34.clazzId,
					'quizErrorReportUrl': _0x190e34.rootPath + '/question/addquestionerror?classid=' + _0x190e34.clazzId + '&cpi=' + _0x190e34.cpi,
					'validationUrl2': _0x190e34.rootPath + '/question/quiz-validation?classid=' + _0x190e34.clazzId + '&cpi=' + _0x167f75 + '&objectid=' + _0x190e34.objectId,
					'quizRightCountUrl': _0x190e34.rootPath + '/question/quiz-rightcount?classid=' + _0x190e34.clazzId + '&cpi=' + _0x167f75
				},
				'subtitle': {
					'translate': _0x190e34.chapterVideoTranslate,
					'subtitleUrl': _0x190e34.rootPath + '/richvideo/allsubtitle?mid=' + _0x190e34.mid + '&objectid=' + _0x190e34.objectId + '&courseid=' + _0x190e34.courseid,
					'subtitle': _0x190e34.rootPath + '/ananas/video-editor/sub?objectid=' + _0x190e34.subobjectid
				},
				'marker': {
					'url': !_0x190e34.isNotMark ? _0x190e34.rootPath + '/ananas/getpoints?courseid=' + _0x190e34.courseid + '&mid=' + _0x190e34.mid : '',
					'ff': _0x190e34.enableFastForward,
					'videoTopicCloud': _0x190e34.videoTopicCloud
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
	var _0x55d0c0 = videojs.getPlugin('plugin'), _0x1e16d7 = videojs.extend(_0x55d0c0, {
		'constructor': function (_0x23abc2, _0x25e437) {
			_0x55d0c0.call(this, _0x23abc2, _0x25e437);
			var _0x59c2b5 = this, _0xccfcb2 = _0x25e437.mouseElTarget, _0x2ba223 = 1;
			_0x25e437.enableSwitchWindow !== 1 && (_0x2ba223 = 0);
			if (!_0xccfcb2) {
				try {
					_0xccfcb2 = window.top ? window.top : window.document;
				} catch (_0x26a006) {
					_0xccfcb2 = window.parent ? window.parent : window.document;
				}
			}
			Ext.fly(_0xccfcb2).on('mouseout', function (_0x56dc8f) {
				_0x56dc8f = _0x56dc8f ? _0x56dc8f : window.event;
				var _0x29c2d4 = _0x56dc8f.relatedTarget || _0x56dc8f.toElement;
				!_0x29c2d4 && (_0x2ba223 != 1 && _0x23abc2.pause());
			});
			_0x59c2b5.singleton(_0x23abc2);
		},
		'singleton': function (_0x5457d6) {
			var _0x5e5d6a = this, _0x18057c = parseInt(Math.random() * 9999999);
			_0x5457d6.on('play', function () {
				Ext.setCookie('videojs_id', _0x18057c);
			});
			_0x5457d6.setInterval(function () {
				var _0x3949bc = Ext.getCookie('videojs_id');
				typeof _0x3949bc != 'undefined' && _0x3949bc != _0x18057c && _0x5457d6.pause();
			}, 1000);
		}
	});
	videojs.registerPlugin('studyControl', _0x1e16d7);
}());
(function () {
	var _0x4eb7de = videojs.getComponent('SeekBar'), _0x2aedb6 = videojs.extend(_0x4eb7de, {
		'constructor': function (_0x179082, _0x331b86) {
			_0x4eb7de.call(this, _0x179082, _0x331b86);
			var _0x5a56e6 = this;
			_0x179082.ignorePause = false;
			_0x179082.disableSeek = function (_0x8feee0) {
				_0x5a56e6.disableSeek(_0x8feee0);
			};
			_0x179082.onlyBackward = function (_0x24c752) {
				_0x5a56e6.onlyBackward(_0x24c752);
			};
			_0x179082.getSeekBar = function () {
				return _0x5a56e6;
			};
			_0x5a56e6.on('slideractive', function () {
				_0x179082.trigger('seekstart');
				_0x179082.ignorePause = true;
				_0x179082.ignorePlay = true;
				_0x179082.ignoreSeek = false;
			});
			_0x5a56e6.on('sliderinactive', function () {
				_0x179082.trigger('seekend');
				_0x179082.ignoreSeek = false;
			});
			_0x5a56e6.maxPercent = 0;
			_0x179082.on('timeupdate', function () {
				_0x5a56e6.maxPercent = Math.max(_0x5a56e6.getPercent(), _0x5a56e6.maxPercent);
			});
		},
		'getCurrentTime_': function () {
			return this.player_.currentTime();
		},
		'getMaxPercent': function () {
			return this.maxPercent;
		},
		'isBackward': function (_0x4cce4e) {
			return this.maxPercent > this.calculateDistance(_0x4cce4e);
		},
		'handleMouseDown': function (_0x5795cb) {
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x5795cb)) {
					return;
				}
			}
			if (this['_disableSeek'] === true) {
				return;
			}
			_0x4eb7de.prototype.handleMouseDown.call(this, _0x5795cb);
		},
		'handleMouseMove': function (_0xe2ab9f) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0xe2ab9f)) {
					return;
				}
			}
			_0x4eb7de.prototype.handleMouseMove.call(this, _0xe2ab9f);
		},
		'handleMouseUp': function (_0x448f37) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x448f37)) {
					return;
				}
			}
			_0x4eb7de.prototype.handleMouseUp.call(this, _0x448f37);
		},
		'disableSeek': function (_0x17f1b9) {
			var _0x35b572 = this;
			_0x35b572['_disableSeek'] = _0x17f1b9 !== false;
			_0x35b572['_disableSeek'] ? _0x35b572.disable() : _0x35b572.enable();
		},
		'onlyBackward': function (_0xd553d2) {
			var _0x3dbb97 = this;
			_0x3dbb97['_onlyBackward'] = _0xd553d2 !== false;
		}
	});
	videojs.registerComponent('SeekBar', _0x2aedb6);
}());
(function () {
	var _0x246edd = videojs.getPlugin('plugin'), _0x465430 = videojs.extend(_0x246edd, {
		'constructor': function (_0x40fb59, _0x540907) {
			_0x246edd.call(this, _0x40fb59, _0x540907);
			var _0x5ed231 = this;
			_0x5ed231.firstClick = true;
			_0x5ed231.isSendLog_ = !!_0x540907.isSendLog;
			_0x5ed231.isShowDanmu_ = !!_0x540907.isShowDanmu;
			_0x5ed231.damuLastGetTime = 0;
			_0x5ed231.firstPlay = true;
			_0x5ed231.firstPlayFace = true;
			_0x5ed231.pausePlayFace = false;
			_0x5ed231.playingFace = false;
			_0x5ed231.playingFaceTime = 0;
			_0x5ed231.chapterCapture = _0x540907.chapterCapture || 0;
			_0x5ed231.captureInterval = _0x540907.captureInterval * 60 || 600;
			_0x5ed231.chapterCollectionType = _0x540907.chapterCollectionType || 0;
			_0x5ed231.isSupportFace = _0x540907.isSupportFace;
			_0x5ed231.isAlertTip = false;
			_0x5ed231.startCapture = _0x540907.startCapture;
			_0x5ed231.endCapture = _0x540907.endCapture;
			_0x5ed231.playAginCapture = _0x540907.playAginCapture;
			_0x5ed231.playingCapture = _0x540907.playingCapture;
			_0x5ed231.playingLoopCapture = _0x540907.playingLoopCapture;
			_0x5ed231.isShowFaceCollection = _0x540907.isShowFaceCollection;
			_0x5ed231.duration = _0x540907.duration;
			_0x5ed231.jumpTimePointList = _0x540907.jumpTimePointList;
			_0x5ed231.loopCaptureInterval = Math.floor(Math.random() * (parseInt(_0x5ed231.duration) - 0) + 1);
			_0x5ed231.attachmentId = _0x540907.attachmentId;
			_0x40fb59.on('ready', function () {
				_0x540907.enableFastForward != 1 && _0x40fb59.disableSeek();
			});
			!_0x540907.sendLog && (_0x540907.sendLog = function () {
			});
			_0x540907.headOffset && _0x40fb59.currentTime(_0x540907.headOffset);
			var _0x20fafa = 0, _0x596b3b = 0, _0x3e85c1 = _0x540907.reportTimeInterval || 60, _0x123a21 = _0x3e85c1 * 1000, _0x1bd75d = function (_0x20a397, _0x26abc3, _0x12c12d) {
				if (!_0x5ed231.isSendLog_) {
					return;
				}
				var _0x27469b = _0x5ed231.now_() - _0x20fafa;
				(_0x27469b > _0x123a21 || _0x26abc3 === true) && (typeof _0x12c12d != 'undefined' ? _0x540907.sendLog(_0x40fb59, _0x20a397, _0x12c12d, _0x5ed231) : _0x540907.sendLog(_0x40fb59, _0x20a397, _0x5ed231.sec_(_0x40fb59), _0x5ed231), _0x20fafa = _0x5ed231.now_());
			};
			_0x40fb59.on('play', function () {
				try {
					top.configFullScreen && reSizeVideoWindow();
				} catch (_0x4064b7) {
					console.log(_0x4064b7);
				}
				try {
					if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && _0x5ed231.firstClick && isUnFinishJob()) {
						_0x5ed231.firstClick = false;
						_0x40fb59.pause();
						checkJobCountLimit(_0x40fb59, 0);
						return;
					}
					if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && _0x5ed231.firstClick && isUnFinishJob()) {
						_0x5ed231.firstClick = false;
						_0x40fb59.pause();
						checkJobCountLimit(_0x40fb59, 1);
						return;
					}
				} catch (_0x587c5f) {
					console.log(_0x587c5f);
				}
				_0x5ed231.isAlertTip = false;
				if (_0x5ed231.chapterCapture == 0 || !_0x5ed231.isSupportFace || !_0x5ed231.isShowFaceCollection) {
					!_0x40fb59.ignorePlay ? (_0x1bd75d('play', true), _0x40fb59.ignoreSeek = true) : (_0x40fb59.ignorePlay = false, _0x40fb59.ignoreSeek = false);
					_0x5ed231.sendDataLog('play');
					_0x5ed231.receiveStudyLog();
					_0x5ed231.getDanmuList('play', _0x40fb59);
					_0x5ed231.firstPlay = false;
					_0x5ed231.pausePlayFace = true;
				} else {
					if (_0x5ed231.chapterCapture == 1) {
						if (_0x5ed231.firstPlay) {
							var _0x4fe360 = _0x5ed231.sec_(_0x40fb59);
							if (_0x4fe360 == 0 && (_0x5ed231.startCapture == 1 || typeof _0x5ed231.startCapture == 'undefined') && _0x5ed231.firstPlayFace) {
								_0x5ed231.playingFaceTime = _0x4fe360;
								_0x5ed231.playingFace = false;
								_0x5ed231.faceCollection('play', _0x40fb59, _0x5ed231.chapterCollectionType, 0);
								return;
							}
							!_0x40fb59.ignorePlay ? (_0x1bd75d('play', true), _0x40fb59.ignoreSeek = true) : (_0x40fb59.ignorePlay = false, _0x40fb59.ignoreSeek = false);
							_0x5ed231.sendDataLog('play');
							_0x5ed231.receiveStudyLog();
							_0x5ed231.getDanmuList('play', _0x40fb59);
							_0x5ed231.firstPlay = false;
							_0x5ed231.pausePlayFace = true;
						} else {
							if (_0x5ed231.playAginCapture == 1 && !_0x40fb59.ignorePlay && _0x5ed231.pausePlayFace) {
								_0x5ed231.playingFaceTime = _0x5ed231.sec_(_0x40fb59);
								_0x5ed231.playingFace = false;
								_0x5ed231.faceCollection('aginPlay', _0x40fb59, _0x5ed231.chapterCollectionType, -2);
								return;
							}
							_0x5ed231.pausePlayFace = true;
						}
					}
				}
			});
			_0x40fb59.on('seeked', function () {
				if (_0x540907.enableFastForward != 1 && !_0x40fb59.switchStatus) {
					var _0x1c16f = _0x40fb59.currentTime(), _0x56df27 = _0x540907.headOffset ? _0x540907.headOffset : 0;
					_0x1c16f != 0 && _0x1c16f > _0x56df27 && _0x40fb59.currentTime(_0x56df27);
				}
				!_0x40fb59.ignoreSeek ? _0x1bd75d('drag', true, _0x596b3b + '-' + _0x5ed231.sec_(_0x40fb59)) : _0x40fb59.ignoreSeek = false;
				_0x596b3b = _0x5ed231.sec_(_0x40fb59);
				_0x40fb59.ignorePlay = true;
				delete _0x40fb59.switchStatus;
			});
			_0x40fb59.on('pause', function () {
				!_0x40fb59.ignorePause ? (_0x1bd75d('pause', true), _0x40fb59.ignorePlay = false, _0x40fb59.ignoreSeek = false) : _0x40fb59.ignorePause = false;
				_0x5ed231.sendDataLog('pause');
				_0x5ed231.getDanmuList('pause', _0x40fb59);
			});
			_0x40fb59.on('timeupdate', function () {
				var _0x183f51 = _0x5ed231.sec_(_0x40fb59);
				_0x5ed231.isSupportFace && _0x5ed231.isShowFaceCollection && _0x5ed231.chapterCapture == 1 && _0x5ed231.playingCapture == 1 && _0x5ed231.playingFace && (_0x5ed231.playingFace = false, _0x5ed231.playingLoopCapture == 1 ? _0x183f51 == _0x5ed231.loopCaptureInterval && _0x5ed231.faceCollection('playing', _0x40fb59, _0x5ed231.chapterCollectionType, -1) : _0x183f51 >= _0x5ed231.captureInterval && _0x183f51 % _0x5ed231.captureInterval == 0 && _0x5ed231.faceCollection('playing', _0x40fb59, _0x5ed231.chapterCollectionType, _0x183f51));
				!_0x5ed231.playingFace && _0x183f51 - _0x5ed231.playingFaceTime > 2 && (_0x5ed231.playingFace = true);
				if (typeof parent.videoTrialDuration != 'undefined' && parent.videoTrialDuration != '-1') {
					var _0x3271ea = parseInt(parent.videoTrialDuration) * 60;
					if (_0x3271ea < _0x5ed231.sec_(_0x40fb59) && !_0x5ed231.isAlertTip) {
						_0x40fb59.pause();
						alert('视频只允许试看' + parent.videoTrialDuration + '分钟');
						_0x5ed231.isAlertTip = true;
						return;
					}
				}
				parseInt(_0x40fb59.currentTime()) >= this.damuLastGetTime && _0x5ed231.getDanmuList('timeupdate', _0x40fb59);
				_0x5ed231.danmuDisplay(_0x40fb59);
				if (_0x20fafa == 0) {
					return;
				}
				_0x5ed231.sec_(_0x40fb59) - _0x596b3b <= 1 && !_0x40fb59.ignorePlay && (_0x596b3b = _0x5ed231.sec_(_0x40fb59));
				_0x1bd75d('playing');
			});
			_0x40fb59.on('ended', function () {
				_0x5ed231.isShowFaceCollection && _0x5ed231.chapterCapture == 1 && _0x5ed231.endCapture == 1 && _0x5ed231.faceCollection('ended', _0x40fb59, _0x5ed231.chapterCollectionType, _0x5ed231.duration);
				_0x1bd75d('ended', true);
			});
		},
		'sec_': function (_0x4c02a7) {
			return parseInt(_0x4c02a7.currentTime());
		},
		'now_': function () {
			return new Date().getTime();
		},
		'isSendLog': function (_0x30adb8) {
			return _0x30adb8 && (this.isSendLog_ = !!_0x30adb8), this.isSendLog_;
		},
		'sendDataLog': function (_0x2702d1) {
			var _0x191652 = _0x2702d1 == 'pause' || _0x2702d1 == 'end' ? 2 : 1;
			typeof sendReadZTMediaLog != 'undefined' && sendReadZTMediaLog(_0x191652);
		},
		'receiveStudyLog': function () {
			typeof receiveStudyLog != 'undefined' && setTimeout(function () {
				receiveStudyLog();
			}, 50);
		},
		'getDanmuList': function (_0x47bb5e, _0x21d106) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x186d83 = this.sec_(_0x21d106);
			if (_0x47bb5e == 'pause') {
				this.damuLastGetTime = 0;
				setTimeout(function () {
					getDanmuByTime(_0x47bb5e, 0);
				}, 200);
				return;
			}
			typeof getDanmuByTime != 'undefined' && setTimeout(function () {
				getDanmuByTime(_0x47bb5e, _0x186d83);
			}, 200);
			if (_0x186d83 < this.damuLastGetTime) {
				return;
			}
			this.damuLastGetTime = _0x186d83 + 59;
		},
		'danmuDisplay': function (_0x3fd9a5) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x5dc70b = this.sec_(_0x3fd9a5);
			typeof danmuPlay != 'undefined' && danmuPlay(_0x5dc70b);
		},
		'timer': function (_0x34692a) {
		},
		'faceCollection': function (_0x2f0252, _0x2ebc62, _0x42e0c5, _0x3d7441) {
			if (_0x3d7441 != -2) {
				var _0x28c2ea = this.jumpTimePointList;
				if (typeof _0x28c2ea != 'undefined') {
					try {
						if (_0x28c2ea.includes(_0x3d7441)) {
							this.firstPlayFace = false;
							this.pausePlayFace = false;
							this.playingFace = false;
							return;
						}
					} catch (_0x1bddee) {
					}
				}
			}
			_0x2f0252 == 'play' ? typeof startFaceCollection != 'undefined' && (_0x2ebc62.pause(), startFaceCollection(_0x2ebc62, _0x42e0c5, this, _0x3d7441)) : _0x2f0252 == 'ended' ? typeof startFaceCollection != 'undefined' && (_0x2ebc62.pause(), startFaceCollection(_0x2ebc62, _0x42e0c5, this, _0x3d7441)) : _0x2f0252 == 'playing' ? (typeof startFaceCollection != 'undefined' && (_0x2ebc62.pause(), this.playingFaceTime = this.sec_(_0x2ebc62), startFaceCollection(_0x2ebc62, _0x42e0c5, this, _0x3d7441), this.playingFace = false), this.pausePlayFace = false) : _0x2f0252 == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (_0x2ebc62.pause(), startFaceCollection(_0x2ebc62, _0x42e0c5, this, _0x3d7441)), this.pausePlayFace = false);
		},
		'playNextVideo': function (_0x2d1af1) {
			if (typeof chapterPlayNextVideo != 'undefined') {
				if (typeof top.allowNextVideo != 'undefined' && top.allowNextVideo === false) {
					top.hasJobLimit === true ? top.showJobLimitTip() : top.showVideoTimeLimitTip();
					return;
				}
				chapterPlayNextVideo(_0x2d1af1);
			}
		}
	});
	videojs.registerPlugin('seekBarControl', _0x465430);
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
			'getChecked': function (_0x1dec5f, _0x5040d4, _0x4774a1) {
				try {
					if (typeof _0x1dec5f != 'undefined') {
						return _0x1dec5f.indexOf(_0x5040d4) != -1 && _0x4774a1 == 'InteractiveQuiz' ? 'checked="checked"' : '';
					}
					return '';
				} catch (_0x20da44) {
					console.log(_0x20da44);
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
		var _0xf68c7b = this, _0x5a1fb5 = _0xf68c7b.renderData, _0x39b47b = _0xf68c7b.quizRightCountUrl;
		typeof _0x39b47b != 'undefined' && Ext.Ajax.request({
			'url': _0x39b47b,
			'params': {
				'eventid': _0x5a1fb5.resourceId,
				'memberinfo': _0x5a1fb5.memberinfo
			},
			'method': 'get',
			'success': function (_0x20e5e1) {
				var _0x26d590 = Ext.decode(_0x20e5e1.responseText);
				_0x26d590.status && (Ext.get('rightNum').setHTML(_0x26d590.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
			}
		});
		_0xf68c7b.callParent(arguments);
		var _0x443bd2 = _0xf68c7b.scrollEl, _0x116c14 = $(_0x443bd2.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#A5A5A5',
			'boxzoom': false,
			'autohidemode': false
		});
		_0xf68c7b.scroller = _0x116c14;
		_0xf68c7b.submitEl.on('click', function () {
			_0xf68c7b.checkResult();
		});
		_0xf68c7b.continueEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x193749) {
				console.log(_0x193749);
			}
			_0xf68c7b.fireEvent('continue');
		});
		_0xf68c7b.backEl && _0xf68c7b.backEl.on('click', function () {
			_0xf68c7b.onerror && _0xf68c7b.onerror();
			_0xf68c7b.fireEvent('continue');
		});
		_0xf68c7b.viewAnalysisEl && _0xf68c7b.viewAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'inline-block');
		});
		_0xf68c7b.delAnalysisEl && _0xf68c7b.delAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'none');
		});
	},
	'checkResult': function () {
		var _0x516598 = this, _0x2f92e5 = Ext.query('input', _0x516598.el.dom), _0x4a44fb = true, _0x4faa51 = _0x516598.renderData, _0x37ed0a = _0x4faa51.options, _0x5e850b = [], _0x4cf068 = _0x516598.quizErrorReportUrl, _0x2ffbce = _0x516598.validationUrl2, _0x4b2bbf = _0x4faa51.dtype;
		if (Ext.get('videoquiz-continue').getStyle('display') == 'none' && window.parent.parent.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1) {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x3cdbfb) {
				console.log(_0x3cdbfb);
			}
			_0x516598.fireEvent('continue');
			return;
		}
		Ext.each(_0x2f92e5, function (_0x5d0c67, _0x22eed4) {
			_0x5d0c67.checked && _0x5e850b.push(_0x37ed0a[_0x22eed4].name);
		});
		Ext.get('videoquiz-submit').setStyle('display', 'none');
		Ext.get('videoquiz-submitting').setStyle('display', 'block');
		if (typeof _0x2ffbce != 'undefined') {
			var _0x5b5bf0 = _0x5e850b.join(',');
			Ext.Ajax.request({
				'url': _0x2ffbce,
				'params': {
					'eventid': _0x4faa51.resourceId,
					'memberinfo': _0x4faa51.memberinfo,
					'answerContent': _0x5b5bf0
				},
				'method': 'get',
				'success': function (_0x18c4d5) {
					Ext.get('videoquiz-submit').setStyle('display', 'block');
					Ext.get('videoquiz-submitting').setStyle('display', 'none');
					_0x4faa51.answerContent = _0x5b5bf0;
					var _0x333775 = Ext.decode(_0x18c4d5.responseText), _0xef3ac5 = typeof _0x333775.isRight === 'undefined' ? false : _0x333775.isRight;
					!_0xef3ac5 ? _0x4faa51.errorBackTime && _0x4faa51.errorBackTime > 0 ? (Ext.get('spanNotBack').setStyle('display', 'block'), Ext.get('videoquiz-submit').setStyle('display', 'none'), _0x4b2bbf == 'InteractiveQuiz' ? Ext.get('knowledgeBack').setStyle('display', 'block') : Ext.get('videoquiz-continue').setStyle('display', 'block')) : _0x4b2bbf == 'InteractiveQuiz' && _0x4faa51.errorBack == 1 && _0x4faa51.eBstartPoint != '' ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'block')) : Ext.get('spanNot').setStyle('display', 'block') : (Ext.get('spanHas').setStyle('display', 'block'), _0x4b2bbf == 'InteractiveQuiz' && (Ext.get('videoquiz-continue').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'none'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('spanNot').setStyle('display', 'none'), Ext.get('spanNotBack').setStyle('display', 'none'), Ext.get('spanNotBackPoint').setStyle('display', 'none')));
					if (_0x333775.status) {
						if (_0x4b2bbf == 'InteractiveQuiz') {
							Ext.get('rightNum').setHTML(_0x333775.rightAnswerCount);
							Ext.get('rightAnswerNum').setStyle('display', 'inline-block');
							var _0x53c612 = '', _0x3abec1 = false;
							_0x333775.testAnalysis ? _0x333775.showAnswer && _0x333775.showAnswer > 0 ? (_0x53c612 += '正确答案\uFF1A' + _0x333775.rightContent, _0x53c612 += '</br>解析\uFF1A' + _0x333775.testAnalysis, Ext.get('viewAnalysis').setStyle('display', 'block'), _0x3abec1 = true) : _0x333775.isRight && (_0x53c612 += '解析\uFF1A' + _0x333775.testAnalysis, Ext.get('viewAnalysis').setStyle('display', 'block'), _0x3abec1 = true) : _0x333775.showAnswer && _0x333775.showAnswer > 0 ? (Ext.get('tkParsingDele').setStyle('display', 'none'), Ext.get('viewAnalysis').setStyle('display', 'none'), _0x53c612 += '正确答案\uFF1A' + _0x333775.rightContent, _0x3abec1 = true) : Ext.get('viewAnalysis').setStyle('display', 'none');
							if (_0x3abec1) {
								Ext.get('tkParsing_con').setHTML(_0x53c612);
								Ext.get('tkParsing').setStyle('display', 'inline-block');
								var _0x40024c = _0x516598.tkParseScrollEl, _0x46c1c9 = $(_0x40024c.dom).niceScroll({
									'cursorborder': '',
									'cursorwidth': 6,
									'cursorcolor': '#A5A5A5',
									'boxzoom': false,
									'autohidemode': true
								});
								_0x516598.tkParseScroll = _0x46c1c9;
							}
						}
						if (_0x333775.isRight && _0x4b2bbf == 'InteractiveQuiz') {
							if (typeof _0x333775.showTip != 'undefined' && _0x333775.showTip) {
								var _0x4dffb9 = _0x333775.percent;
								try {
									var _0x44c0e5 = Ext.getCookie('fid', 0);
									_0x4dffb9 = parseInt(_0x4dffb9);
									_0x44c0e5 == '179952' && _0x4dffb9 > 0 && (_0x4dffb9 = 90 + _0x4dffb9 * 0.1);
								} catch (_0x4b81bc) {
									console.log(_0x4b81bc);
								}
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01你的答题水准超过了' + _0x4dffb9 + '%的同学</span></span>');
							} else {
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01</span></span>');
							}
						}
					}
					!_0xef3ac5 && _0x516598.onerror && _0x4b2bbf != 'InteractiveQuiz' && _0x516598.onerror();
					!_0xef3ac5 && _0x4faa51.errorContinue == 1 && (_0x4a44fb = true, Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('videoquiz-continue').setStyle('display', 'block'));
					if (_0xef3ac5 && Ext.get('videoquiz-continue').getStyle('display') == 'none') {
						try {
							top.configFullScreen && exitMediumSizeWindow();
						} catch (_0x309cd7) {
							console.log(_0x309cd7);
						}
						_0x516598.fireEvent('continue');
					}
				},
				'error': function () {
					Ext.get('videoquiz-submit').setStyle('display', 'block');
					Ext.get('videoquiz-submitting').setStyle('display', 'none');
					_0x516598.onerror && _0x4b2bbf != 'InteractiveQuiz' && _0x516598.onerror();
				}
			});
		}
		return _0x4a44fb;
	},
	'continueFun': function () {
		var _0x57588e = this;
		_0x57588e.fireEvent('continue');
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
		var _0x563cc8 = this;
		_0x563cc8.callParent(arguments);
		try {
			var _0x2fe60e = document.querySelector('.sp_video_img');
			_0x2fe60e.addEventListener('load', function () {
				_0x2fe60e.naturalWidth >= _0x2fe60e.naturalHeight ? _0x2fe60e.naturalWidth >= 400 && (_0x2fe60e.style.width = '90%', _0x2fe60e.style.height = '80%') : _0x2fe60e.naturalHeight >= 400 && (_0x2fe60e.style.height = '90%', _0x2fe60e.style.width = '80%');
			});
		} catch (_0x4c9aa7) {
			console.log(_0x4c9aa7);
		}
		_0x563cc8.el.on('click', function () {
			_0x563cc8.fireEvent('continue');
		});
		_0x563cc8.closeEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x23c5ee) {
				console.log(_0x23c5ee);
			}
			_0x563cc8.fireEvent('continue');
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
		var _0x489975 = this, _0x52aec2 = _0x489975.contentEl;
		_0x489975.callParent(arguments);
		_0x489975.closeEl.on('click', function () {
			_0x489975.fireEvent('continue');
		});
		var _0x3cbd95 = $(_0x52aec2.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#e0e0e0',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x489975.scroller = _0x3cbd95;
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
		var _0x26bda0 = this;
		_0x26bda0.callParent(arguments);
		try {
			dragFn && dragFn('#sp_video_ppt_pic', '#video_html5_api');
		} catch (_0x3fee2b) {
			console.log(_0x3fee2b);
		}
		_0x26bda0.sizeBigEl.on('click', function (_0x56545a) {
			_0x56545a.stopPropagation();
			_0x26bda0.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			Ext.get('sp_size_big').setStyle('display', 'none');
			Ext.get('sp_size_small').setStyle('display', 'block');
			var _0x27ae67 = Ext.get('video').getStyle('height'), _0x2026b3 = Ext.get('sp_video_ppt_pic').getStyle('height'), _0x498903 = (parseInt(_0x27ae67) - 60 - parseInt(_0x2026b3)) / 2;
			Ext.get('sp_video_ppt_pic').setStyle('top', _0x498903 + 'px');
			Ext.get('sp_video_ppt_pic').setStyle('left', '0');
		});
		_0x26bda0.sizeSmallEl.on('click', function (_0x394642) {
			_0x394642.stopPropagation();
			_0x26bda0.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
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
	'constructor': function (_0x390ca5) {
		var _0x56f88e = this;
		_0x56f88e.callParent(arguments);
		_0x56f88e.bg = Ext.create('ans.videojs.TimelineObjectsBg', { 'renderTo': _0x390ca5.renderTo });
		_0x56f88e.objects = _0x390ca5.objects && _0x390ca5.objects.sort ? _0x56f88e.sort_(_0x390ca5.objects) : [];
		_0x56f88e.current = 0;
	},
	'showObject': function (_0x4328d0, _0x6606a2, _0x464086) {
		var _0x514856 = this, _0x731a1 = _0x514856.getBox(), _0x207a47 = _0x514856.items.getAt(0), _0x2bb194, _0x244570 = function () {
			_0x2bb194.destroy();
			_0x514856.hide();
			_0x4328d0.play();
		};
		_0x207a47 != null && _0x207a47.destroy();
		if (_0x6606a2 == 'IMG') {
			var _0x52c609 = { 'src': _0x464086.url.replace(/origin/, _0x731a1.width + '_' + _0x731a1.height) };
			_0x2bb194 = _0x514856.add({
				'xtype': 'videoimg',
				'renderData': _0x52c609
			});
		}
		if (_0x6606a2 == 'QUIZ') {
			var _0x21cae9 = function () {
			};
			if (_0x464086.errorBackTime && _0x464086.errorBackTime > 0) {
				var _0x5c5c12 = _0x464086.errorBackTime * 60;
				_0x21cae9 = function () {
					var _0x52f92f = Math.max(_0x4328d0.currentTime() - _0x5c5c12, 0);
					_0x4328d0.switchStatus = true;
					_0x4328d0.currentTime(_0x52f92f);
				};
			}
			_0x2bb194 = _0x514856.add({
				'xtype': 'videoquiz',
				'renderData': _0x464086,
				'quizErrorReportUrl': _0x514856.quizErrorReportUrl,
				'validationUrl2': _0x514856.validationUrl2,
				'onerror': _0x21cae9
			});
		}
		if (_0x6606a2 == 'InteractiveQuiz') {
			var _0x21cae9 = function () {
			};
			if (_0x464086.errorBackTime && _0x464086.errorBackTime > 0) {
				var _0x5c5c12 = _0x464086.errorBackTime * 60;
				_0x21cae9 = function () {
					var _0x339968 = Math.max(_0x4328d0.currentTime() - _0x5c5c12, 0);
					_0x4328d0.switchStatus = true;
					_0x4328d0.currentTime(_0x339968);
				};
			}
			if (_0x464086.errorBack == 1 && _0x464086.eBstartPoint != '') {
				var _0x5c5c12 = 0, _0x4459d9 = _0x464086.eBstartPoint.split(':'), _0x49e61d = _0x4459d9.length;
				_0x49e61d > 0 && (_0x49e61d == 1 ? _0x5c5c12 = parseInt(_0x4459d9[0]) * 60 : _0x49e61d == 2 && (_0x5c5c12 = parseInt(_0x4459d9[0]) * 60 + parseInt(_0x4459d9[1])));
				_0x21cae9 = function () {
					_0x4328d0.switchStatus = true;
					_0x4328d0.currentTime(_0x5c5c12);
				};
			}
			_0x464086.dtype = 'InteractiveQuiz';
			_0x2bb194 = _0x514856.add({
				'xtype': 'videoquiz',
				'renderData': _0x464086,
				'quizErrorReportUrl': _0x514856.quizErrorReportUrl,
				'validationUrl2': _0x514856.validationUrl2,
				'quizRightCountUrl': _0x514856.quizRightCountUrl,
				'onerror': _0x21cae9
			});
		}
		if (_0x6606a2 == 'PPT') {
			if (_0x464086.fp == 0) {
				return;
			}
			var _0x50b44f = _0x464086.url;
			_0x464086.thumb ? _0x50b44f = _0x464086.thumb + _0x464086.pageNo + '.png' : _0x50b44f = _0x50b44f.replace(/swfv2\/.*$/, 'thumb/' + _0x464086.fp + '.png');
			var _0x52c609 = { 'src': _0x50b44f };
			_0x2bb194 = _0x514856.add({
				'xtype': 'videoppt',
				'renderData': _0x52c609
			});
		}
		_0x6606a2 == 'SyncAnnotationEvent' && (_0x2bb194 = _0x514856.add({
			'xtype': 'videoannotation',
			'renderData': _0x464086
		}));
		if (!_0x2bb194) {
			return;
		}
		_0x2bb194.on('continue', function () {
			_0x244570();
		});
		var _0x4478ad = !(_0x2bb194.model === false);
		_0x514856.showModel(_0x4478ad);
		_0x4478ad && _0x4328d0.pause();
	},
	'showModel': function (_0xca296c) {
		try {
			top.configFullScreen && mediumSizeWindow();
		} catch (_0x558a39) {
			console.log(_0x558a39);
		}
		var _0x543433 = this;
		_0x543433.show();
		_0xca296c ? (_0x543433.removeCls('ans-timelineobjects-autosize'), _0x543433.setAutoScroll(true), _0x543433.bg.show()) : (_0x543433.addCls('ans-timelineobjects-autosize'), _0x543433.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
		this.bg.hide.apply(this.bg, arguments);
	},
	'updateTime': function (_0x32b2c9, _0x658e37) {
		if (this.current >= this.objects.length || _0x32b2c9.scrubbing()) {
			return;
		}
		var _0x5a61b2 = this, _0x6dcb48 = _0x5a61b2.objects[_0x5a61b2.current], _0x1dd663 = _0x6dcb48.style, _0x27d4a0 = _0x6dcb48.datas[0];
		if (_0x658e37 >= _0x27d4a0.startTime) {
			_0x5a61b2.current++;
			setTimeout(function () {
				_0x5a61b2.showObject(_0x32b2c9, _0x1dd663, _0x27d4a0);
			}, 20);
		}
	},
	'resetTime': function (_0x2bd05d, _0x5e6c33) {
		var _0x56ed1e = this, _0x4fb24f;
		for (_0x4fb24f = 0; _0x4fb24f < _0x56ed1e.objects.length; _0x4fb24f++) {
			var _0x5230c9 = _0x56ed1e.objects[_0x4fb24f].datas[0].startTime;
			if (_0x5e6c33 <= _0x5230c9) {
				break;
			}
		}
		_0x56ed1e.current = _0x4fb24f;
	},
	'sort_': function (_0x9e0016) {
		return _0x9e0016 && _0x9e0016.sort && _0x9e0016.sort(function (_0x2207e2, _0x490b18) {
			var _0x15240f = _0x2207e2.datas[0].startTime, _0x26dc82 = _0x490b18.datas[0].startTime;
			return _0x15240f - _0x26dc82;
		});
	}
});
(function () {
	var _0x49bce7 = videojs.getPlugin('plugin'), _0x3ef0a8 = videojs.extend(_0x49bce7, {
		'constructor': function (_0x164813, _0x119922) {
			_0x49bce7.call(this, _0x164813, _0x119922);
			if (!_0x119922.url) {
				return;
			}
			var _0xa71aef = this;
			_0x164813.eventPoints = [];
			Ext.Ajax.request({
				'url': _0x119922.url,
				'async': false,
				'success': function (_0x46ed0b) {
					if (_0x46ed0b.status != 200) {
						return;
					}
					eval('var data=' + _0x46ed0b.responseText);
					if (data && data.length > 0) {
						var _0x1b9b45 = [];
						for (var _0x3bb298 = 0; _0x3bb298 < data.length; _0x3bb298++) {
							var _0x11855a = data[_0x3bb298];
							if (_0x11855a.style == 'InteractiveQuiz') {
								var _0x52b2be = _0x11855a.datas;
								if (_0x52b2be && _0x52b2be.length > 0) {
									var _0x4b7b01 = {
										'time': _0x52b2be[0].startTime,
										'text': '互动测验'
									};
								}
								_0x1b9b45.push(_0x4b7b01);
							}
						}
						_0x164813.eventPoints = _0x1b9b45;
					}
					var _0x5f64ff = Ext.create('ans.videojs.TimelineObjects', {
						'renderTo': _0x164813.el_,
						'quizErrorReportUrl': _0x119922.quizErrorReportUrl,
						'validationUrl2': _0x119922.validationUrl2,
						'quizRightCountUrl': _0x119922.quizRightCountUrl,
						'objects': data
					});
					_0x164813.on('play', function () {
						_0x5f64ff.resetTime(_0x164813, _0x164813.currentTime());
					});
					_0x164813.on('seekend', function () {
						_0x5f64ff.resetTime(_0x164813, _0x164813.currentTime());
					});
					_0x164813.on('timeupdate', function () {
						!_0x164813.paused() && _0x5f64ff.updateTime(_0x164813, _0x164813.currentTime());
					});
				}
			});
		}
	});
	videojs.registerPlugin('timelineObjects', _0x3ef0a8);
}());
(function () {
	var _0x3d7ad2 = videojs.getPlugin('plugin'), _0x2fb632 = videojs.extend(_0x3d7ad2, {
		'constructor': function (_0x58588c, _0x33ea30) {
			_0x3d7ad2.call(this, _0x58588c, _0x33ea30);
			if (!_0x33ea30.url) {
				return;
			}
			var _0x2d0366 = this;
			Ext.Ajax.request({
				'url': _0x33ea30.url,
				'async': false,
				'success': function (_0x40239a) {
					if (_0x40239a.status != 200) {
						return;
					}
					eval('var data=' + _0x40239a.responseText);
					if (!data.status) {
						return;
					}
					var _0xec7d82 = videojs('video');
					if (_0xec7d82 && typeof _0xec7d82.markers === 'function') {
						var _0x102172 = _0x58588c.eventPoints;
						_0x102172.push.apply(_0x102172, data.list);
						_0xec7d82.markers({
							'markerTip': {
								'display': true,
								'text': function (_0x326be1) {
									return _0x326be1.text;
								}
							},
							'markers': _0x102172,
							'onMarkerClick': function (_0x345dc5) {
								if (_0x33ea30.ff != 1) {
									return false;
								}
								var _0x39ddc7 = $(this).data('marker-key');
								return _0x58588c.currentTime(_0x345dc5.time), false;
							}
						});
					}
					if (data.list && data.list.length > 0) {
						var _0x314e5a = [], _0x2d7761 = {
							_0x1115a1: _0x5d1ba9,
							_0x1115a1: _0x1a4973
						};
						for (var _0x481483 = 0; _0x481483 < data.list.length; _0x481483++) {
							var _0x3ddc92 = data.list[_0x481483], _0x1115a1 = _0x3ddc92.text;
							if (!_0x2d7761[_0x1115a1]) {
								var _0x5d1ba9 = [];
								_0x5d1ba9.push(_0x3ddc92);
								_0x314e5a.push(_0x1115a1);
							} else {
								var _0x1a4973 = _0x2d7761[_0x1115a1];
								_0x1a4973.push(_0x3ddc92);
							}
						}
						function _0x21d25a(_0x19ecf3) {
							var _0x2da0a0 = '<div class="zsCloud_box"><h2 class="zsCloud_seltime">选择时间</h2><div class="zsCloud_div"><div class="zsCloud_div_list">';
							for (var _0x54e720 = 0; _0x54e720 < _0x19ecf3.length; _0x54e720++) {
								var _0x3a2f0e = _0x19ecf3[_0x54e720], _0x24584a = Ext.fly(_0x140df9.elements[0]).select('.topicId' + _0x3a2f0e.topicid + ':not(.markertime)'), _0x6f1b25 = videojs.formatTime(_0x3a2f0e.time);
								_0x24584a && _0x24584a.elements[0] && _0x24584a.elements[0].parentElement.remove();
								_0x2da0a0 += '<div class="zsCloud_item topicId' + _0x3a2f0e.topicid + '" data-marker-time="' + _0x3a2f0e.time + '" title="' + _0x6f1b25 + '" onclick="markersPlayer(this)">' + _0x6f1b25 + '</div>';
							}
							return _0x2da0a0 += '</div></div></div>', _0x2da0a0;
						}
						Ext.select('.zsCloud').setStyle('display', 'block');
						var _0x140df9 = Ext.select('.zsCloud_ul');
						if (_0x140df9 && _0x140df9.elements[0]) {
							var _0x39cacc;
							for (var _0x226c90 = 0; _0x226c90 < _0x314e5a.length; _0x226c90++) {
								var _0x1191de = _0x314e5a[_0x226c90], _0x534567 = _0x2d7761[_0x1191de], _0xff479e = '';
								if (_0x534567) {
									if (_0x534567.length == 1) {
										var _0x14d3bf = _0x534567[0], _0x149ba5 = Ext.fly(_0x140df9.elements[0]).select('.topicId' + _0x14d3bf.topicid + ':not(.markertime)'), _0x1b3c0a = videojs.formatTime(_0x14d3bf.time);
										_0x149ba5 && _0x149ba5.elements[0] && _0x149ba5.elements[0].parentElement.remove();
										_0xff479e = '<li><span class=\'topicId' + _0x14d3bf.topicid + ' markertime\' data-marker-time=\'' + _0x14d3bf.time + '\' title=\'' + _0x1b3c0a + '\' onclick=\'markersPlayer(this)\'>' + _0x14d3bf.text + '</span></li>';
									} else {
										_0xff479e = '<li class="zsCloud_select"><span class="zsCloud_span">' + _0x1191de + '</span>';
										_0x534567 && _0x534567.length > 0 ? _0xff479e += _0x21d25a(_0x534567) : _0xff479e += '</li>';
									}
								}
								_0x39cacc ? _0x39cacc = Ext.DomHelper.insertHtml('afterEnd', _0x39cacc.elements[0], _0xff479e) : _0x39cacc = Ext.DomHelper.insertHtml('afterBegin', _0x140df9.elements[0], _0xff479e);
								_0x39cacc = Ext.fly(_0x39cacc).select('');
							}
						}
						_0x33ea30.videoTopicCloud && _0x33ea30.videoTopicCloud == 1 && (Ext.select('.zsCloud_down').setStyle('display', 'block'), Ext.select('.zsCloud_body').setStyle('display', 'block'));
					}
					var _0x31c805 = new Map(), _0x5f45af = new Array();
					if (data.list && data.list.length > 0) {
						for (var _0x481483 = 0; _0x481483 < data.list.length; _0x481483++) {
							var _0x46ba79 = data.list[_0x481483].topicid, _0x355835 = _0x31c805.get(_0x46ba79);
							!_0x355835 && (_0x355835 = {}, _0x355835.text = data.list[_0x481483].text, _0x355835.time = data.list[_0x481483].time, _0x355835.topicid = data.list[_0x481483].topicid, _0x355835.weight = 0, _0x355835.html = {
								'data-marker-time': data.list[_0x481483].time,
								'onclick': 'markersPlayer(this)'
							}, _0x31c805.set(_0x46ba79, _0x355835), _0x5f45af.push(_0x355835));
							_0x355835.weight += 1;
						}
					}
					$(function () {
						_0x5f45af.length != 0 && $('#word_cloud').jQCloud(_0x5f45af);
						function _0x16e275(_0x34e3f4) {
							$(_0x34e3f4).niceScroll({
								'cursorborder': '',
								'cursorwidth': 8,
								'cursorcolor': '#DADFE6',
								'boxzoom': false,
								'autohidemode': true
							});
							setInterval(function () {
								$(_0x34e3f4).getNiceScroll().resize();
							}, 300);
						}
						$('.zsCloud_box').each(function (_0x1a6373) {
							$(this).find('.zsCloud_div').attr('id', 'zsCloud_div_' + _0x1a6373);
							_0x16e275('#zsCloud_div_' + _0x1a6373);
						});
					});
					$('.zsCloud_down').click(function () {
						var _0x99575f = $('.zsCloud_body');
						_0x99575f.is(':visible') ? (_0x99575f.hide(), $(this).addClass('zsCloud_up'), $(this).text('展开')) : (_0x99575f.show(), $(this).removeClass('zsCloud_up'), $(this).text('收起'));
					});
				}
			});
		}
	});
	videojs.registerPlugin('marker', _0x2fb632);
}());
(function () {
	var _0x447d69 = videojs.getPlugin('plugin'), _0x49c4d3 = videojs.extend(_0x447d69, {
		'constructor': function (_0x2c5dc8, _0x92fa48) {
			_0x447d69.call(this, _0x2c5dc8, _0x92fa48);
			var _0x18369e = this, _0x47ca61 = _0x92fa48.subtitleUrl, _0x17d58f = function (_0x35691a) {
				var _0x437a79 = _0x35691a.match(/support\/(\w+).\w+/);
				if (_0x437a79) {
					return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0x437a79[1];
				}
			}, _0x58194c = function (_0x24a810, _0xc16498, _0x149bdb) {
				_0x2c5dc8.addRemoteTextTrack({
					'kind': 'subtitles',
					'srclang': 'cn',
					'label': _0x24a810,
					'src': _0xc16498,
					'default': _0x149bdb
				}, true);
			};
			_0x2c5dc8.ready(function () {
				_0x47ca61 && Ext.Ajax.request({
					'url': _0x47ca61,
					'success': function (_0xdfbecb) {
						if (_0xdfbecb.status != 200) {
							return;
						}
						eval('var subs=' + _0xdfbecb.responseText);
						var _0x5898bd = 0, _0x4d1db0 = 0;
						subs.length > 0 && Ext.each(subs, function (_0x2a0171) {
							_0x92fa48.translate == 1 && _0x2a0171.name == 'English' ? (_0x2a0171.selected = true, _0x4d1db0 = _0x5898bd) : _0x2a0171.selected = false;
							_0x58194c(_0x2a0171.name, _0x17d58f(_0x2a0171.url), _0x2a0171.selected);
							_0x5898bd++;
						});
						if (_0x92fa48.translate == 1) {
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').setHTML('翻译');
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').addCls('vjs-hide-content');
						}
						setTimeout(function () {
							var _0x5412e7 = _0x2c5dc8.textTracks();
							_0x92fa48.translate == 1 ? _0x5412e7 && _0x5412e7[_0x4d1db0] ? _0x5412e7[_0x4d1db0].mode = 'showing' : _0x5412e7 && _0x5412e7[0] && (_0x5412e7[0].mode = 'showing') : _0x5412e7 && _0x5412e7[0] && (_0x5412e7[0].mode = 'showing');
						}, 500);
					}
				});
				var _0x1ed098 = _0x2c5dc8.textTrackSettings;
				_0x1ed098.setValues({
					'backgroundColor': '#000',
					'backgroundOpacity': '0',
					'edgeStyle': 'uniform'
				});
				_0x1ed098.updateDisplay();
			});
		}
	});
	videojs.registerPlugin('subtitle', _0x49c4d3);
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
		var _0x46e8c8 = this;
		_0x46e8c8.callParent(arguments);
		var _0x2384f5 = Ext.query('input', _0x46e8c8.el.dom);
		Ext.each(_0x2384f5, function (_0x3c377c, _0x22bc06) {
			Ext.fly(_0x3c377c).on('click', function () {
				_0x46e8c8.onSelected(_0x22bc06);
			});
		});
		try {
			typeof createVideoTask === 'function' ? createVideoTask() : console.log('createVideoTask函数不存在\uFF01');
		} catch (_0x235fd9) {
		}
	},
	'setErrorMsg': function (_0x26eb65) {
		Ext.fly(this.errorMsgEl).setHTML(_0x26eb65);
	}
});
Ext.define('ans.videojs.ErrorNote', {
	'extend': 'Ext.Component',
	'cls': 'ans-vjserrdisplay',
	'renderTpl': ['<div class="ans-vjserrdisplay-title">播放出现异常\u3002</div>']
});
(function () {
	var _0x42dac1 = videojs.getComponent('ErrorDisplay'), _0x15e147 = videojs.extend(_0x42dac1, {
		'constructor': function (_0x3a9408, _0x1b9be0) {
			_0x42dac1.call(this, _0x3a9408, _0x1b9be0);
		},
		'colse': function () {
			_0x42dac1.prototype.colse.call(this);
			me.ansErrorDisplay && (me.ansErrorDisplay.destroy(), me.ansErrorDisplay = null);
		},
		'fill': function () {
			_0x42dac1.prototype.fill.call(this);
			var _0x37242d = this, _0x5a0917 = _0x37242d.player_, _0xb631be = _0x5a0917.options_.playlines, _0x28ea4a = Ext.query('.vjs-modal-dialog-content', _0x37242d.el_)[0];
			_0x37242d.ansErrorDisplay && (_0x37242d.ansErrorDisplay.destroy(), delete _0x37242d.ansErrorDisplay);
			if (!_0x5a0917.selectCDN || !_0xb631be) {
				_0x37242d.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', { 'renderTo': _0x37242d.el_ });
				return;
			}
			var _0x3e3cb2 = _0x5a0917.currentPlayline(), _0x54bc90 = 0;
			Ext.each(_0xb631be, function (_0x5ada3f, _0x4aec9f) {
				_0x3e3cb2 == _0x5ada3f && (_0x54bc90 = _0x4aec9f);
			});
			_0x37242d.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
				'renderTo': _0x37242d.el_,
				'onSelected': function (_0x2885e9) {
					_0x5a0917.selectCDN(_0x2885e9);
					_0x37242d.close();
				},
				'renderData': {
					'playlines': _0xb631be,
					'errorMsg': _0x37242d.content(),
					'selectedIndex': _0x54bc90
				}
			});
		}
	});
	videojs.registerComponent('ErrorDisplay', _0x15e147);
}());
(function () {
	var _0x1b611c = null;
	typeof window.videojs === 'undefined' && typeof require === 'function' ? _0x1b611c = require('video.js') : _0x1b611c = window.videojs;
	(function (_0x2c0194, _0x3e712) {
		var _0x590f57 = {}, _0x539f8d, _0x45e52f = {}, _0x166e2b = {};
		function _0x1678c1(_0x30cb39, _0x340518, _0x587ad8, _0x3bf438) {
			_0x45e52f = {
				'label': _0x587ad8,
				'sources': _0x340518
			};
			if (typeof _0x3bf438 === 'function') {
				return _0x3bf438(_0x30cb39, _0x340518, _0x587ad8);
			}
			return _0x30cb39.src(_0x340518.map(function (_0x387836) {
				return {
					'src': _0x387836.src,
					'type': _0x387836.type,
					'res': _0x387836.res
				};
			})), _0x30cb39;
		}
		var _0x3ccf77 = _0x3e712.getComponent('MenuItem'), _0x5e575f = _0x3e712.extend(_0x3ccf77, {
			'constructor': function (_0xb4c9cc, _0x5bf9d4, _0x514d5e, _0x30674d) {
				this.onClickListener = _0x514d5e;
				this.label = _0x30674d;
				_0x3ccf77.call(this, _0xb4c9cc, _0x5bf9d4);
				this.src = _0x5bf9d4.src;
				this.on('click', this.onClick);
				this.on('touchstart', this.onClick);
				_0x5bf9d4.initialySelected && (this.showAsLabel(), this.selected(true), this.addClass('vjs-selected'));
			},
			'showAsLabel': function () {
				this.label && (this.label.innerHTML = this.options_.label);
			},
			'onClick': function (_0x4224ef) {
				this.onClickListener(this);
				var _0x50fa7c = this.player_.currentTime(), _0x1173e1 = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x1173e1 && this.player_.bigPlayButton.hide();
				typeof _0x4224ef !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x4224ef = this.options_.customSourcePicker);
				var _0xe1349d = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0xe1349d = 'timeupdate');
				_0x1678c1(this.player_, this.src, this.options_.label, _0x4224ef).one(_0xe1349d, function () {
					var _0x10a0b6 = this.player_;
					_0x10a0b6.switchStatus = true;
					_0x10a0b6.currentTime(_0x50fa7c);
					!_0x1173e1 && _0x10a0b6.play();
					_0x10a0b6.trigger('resolutionchange');
				});
			}
		});
		_0x3e712.registerComponent('ResolutionMenuItem', _0x5e575f);
		var _0x3219e4 = _0x3e712.getComponent('MenuButton'), _0x47b4cf = _0x3e712.extend(_0x3219e4, {
			'constructor': function (_0x1a000a, _0x31d858, _0x3694d3, _0x2d9576) {
				this.sources = _0x31d858.sources;
				this.label = _0x2d9576;
				this.label.innerHTML = _0x31d858.initialySelectedLabel;
				_0x3219e4.call(this, _0x1a000a, _0x31d858, _0x3694d3);
				this.controlText('Quality');
				if (_0x3694d3.dynamicLabel) {
					this.el().appendChild(_0x2d9576);
				} else {
					var _0x18c9ca = document.createElement('span');
					_0x3e712.dom.addClass(_0x18c9ca, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x18c9ca);
				}
			},
			'createItems': function () {
				var _0x191e6a = [], _0x16bfb9 = this.sources && this.sources.label || {}, _0x35a1d0 = function (_0x540d13) {
					_0x191e6a.map(function (_0x1a4709) {
						_0x1a4709.selected(_0x1a4709 === _0x540d13);
						_0x1a4709.removeClass('vjs-selected');
					});
				};
				for (var _0x4d26b8 in _0x16bfb9) {
					_0x16bfb9.hasOwnProperty(_0x4d26b8) && (_0x191e6a.push(new _0x5e575f(this.player_, {
						'label': _0x4d26b8,
						'src': _0x16bfb9[_0x4d26b8],
						'initialySelected': _0x4d26b8 === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x35a1d0, this.label)), _0x166e2b[_0x4d26b8] = _0x191e6a[_0x191e6a.length - 1]);
				}
				return _0x191e6a;
			}
		});
		_0x539f8d = function (_0x1c46c1) {
			var _0x420f61 = _0x3e712.mergeOptions(_0x590f57, _0x1c46c1), _0x2fcc6a = this, _0x493a4e = document.createElement('span'), _0x21ebc5 = {};
			_0x3e712.dom.addClass(_0x493a4e, 'vjs-resolution-button-label');
			_0x2fcc6a.updateSrc = function (_0x248ece) {
				if (!_0x248ece) {
					return _0x2fcc6a.src();
				}
				_0x2fcc6a.controlBar.resolutionSwitcher && (_0x2fcc6a.controlBar.resolutionSwitcher.dispose(), delete _0x2fcc6a.controlBar.resolutionSwitcher);
				_0x248ece = _0x248ece.sort(_0x369b86);
				_0x21ebc5 = _0x10f859(_0x248ece);
				var _0x5b06e6 = _0x21d606(_0x21ebc5, _0x248ece), _0x588aed = new _0x47b4cf(_0x2fcc6a, {
					'sources': _0x21ebc5,
					'initialySelectedLabel': _0x5b06e6.label,
					'initialySelectedRes': _0x5b06e6.res,
					'customSourcePicker': _0x420f61.customSourcePicker
				}, _0x420f61, _0x493a4e);
				return _0x3e712.dom.addClass(_0x588aed.el(), 'vjs-resolution-button'), _0x2fcc6a.controlBar.resolutionSwitcher = _0x2fcc6a.controlBar.el_.insertBefore(_0x588aed.el_, _0x2fcc6a.controlBar.getChild('fullscreenToggle').el_), _0x2fcc6a.controlBar.resolutionSwitcher.dispose = function () {
					this.parentNode.removeChild(this);
				}, _0x1678c1(_0x2fcc6a, _0x5b06e6.sources, _0x5b06e6.label, _0x420f61.customSourcePicker);
			};
			_0x2fcc6a.currentResolution = function (_0x340383, _0x4eca6f) {
				if (_0x340383 == null) {
					return _0x45e52f;
				}
				return _0x166e2b[_0x340383] != null && _0x166e2b[_0x340383].onClick(_0x4eca6f), _0x2fcc6a;
			};
			_0x2fcc6a.getGroupedSrc = function () {
				return _0x21ebc5;
			};
			function _0x369b86(_0x84a40f, _0xd38849) {
				if (!_0x84a40f.res || !_0xd38849.res) {
					return 0;
				}
				return +_0xd38849.res - +_0x84a40f.res;
			}
			function _0x10f859(_0x4de1c6) {
				var _0x2d784a = {
					'label': {},
					'res': {},
					'type': {}
				};
				return _0x4de1c6.map(function (_0x22a854) {
					_0x1a188a(_0x2d784a, 'label', _0x22a854);
					_0x1a188a(_0x2d784a, 'res', _0x22a854);
					_0x1a188a(_0x2d784a, 'type', _0x22a854);
					_0x5b3185(_0x2d784a, 'label', _0x22a854);
					_0x5b3185(_0x2d784a, 'res', _0x22a854);
					_0x5b3185(_0x2d784a, 'type', _0x22a854);
				}), _0x2d784a;
			}
			function _0x1a188a(_0x364366, _0xf055ee, _0x30d1bf) {
				_0x364366[_0xf055ee][_0x30d1bf[_0xf055ee]] == null && (_0x364366[_0xf055ee][_0x30d1bf[_0xf055ee]] = []);
			}
			function _0x5b3185(_0x25ae95, _0x2d1ad9, _0x18c438) {
				_0x25ae95[_0x2d1ad9][_0x18c438[_0x2d1ad9]].push(_0x18c438);
			}
			function _0x21d606(_0x3ddf5e, _0x59085b) {
				var _0x256cf4 = _0x420f61.default, _0x54d3fc = '';
				return _0x256cf4 === 'high' ? (_0x256cf4 = _0x59085b[0].res, _0x54d3fc = _0x59085b[0].label) : _0x256cf4 === 'low' || _0x256cf4 == null || !_0x3ddf5e.res[_0x256cf4] ? (_0x256cf4 = _0x59085b[_0x59085b.length - 1].res, _0x54d3fc = _0x59085b[_0x59085b.length - 1].label) : _0x3ddf5e.res[_0x256cf4] && (_0x54d3fc = _0x3ddf5e.res[_0x256cf4][0].label), {
					'res': _0x256cf4,
					'label': _0x54d3fc,
					'sources': _0x3ddf5e.res[_0x256cf4]
				};
			}
			_0x2fcc6a.ready(function () {
				_0x2fcc6a.options_.sources.length > 0 && _0x2fcc6a.setTimeout(function () {
					_0x2fcc6a.updateSrc(_0x2fcc6a.options_.sources);
				}, 1);
			});
		};
		_0x3e712.registerPlugin('videoJsResolutionSwitcher', _0x539f8d);
	}(window, _0x1b611c));
}());
(function () {
	(function (_0xb9585d, _0x2de88e) {
		var _0x536066 = {}, _0x509644, _0x1397dc = {}, _0xf85ceb = { _0x3718b0: _0x5a4488[_0x5a4488.length - 1] };
		function _0x4c6272(_0x46c7a3, _0x507042, _0xff1504, _0x46cec6) {
			_0x1397dc = _0x507042;
			if (typeof _0x46cec6 === 'function') {
				return _0x46cec6(_0x46c7a3, _0x507042, _0xff1504);
			}
			return _0x46c7a3;
		}
		var _0x4e98c9 = _0x2de88e.getComponent('ResolutionMenuItem'), _0xa725fe = _0x2de88e.extend(_0x4e98c9, {
			'onClick': function (_0x279316) {
				this.onClickListener(this);
				var _0x137094 = this.player_.currentTime(), _0x1d7ebc = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x1d7ebc && this.player_.bigPlayButton.hide();
				typeof _0x279316 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x279316 = this.options_.customSourcePicker);
				var _0x37a317 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x37a317 = 'timeupdate');
				var _0x9452dc = _0x4c6272(this.player_, this.src, this.options_.label, _0x279316);
				_0x9452dc && _0x9452dc.one(_0x37a317, function () {
					_0x9452dc.switchStatus = true;
					_0x9452dc.currentTime(_0x137094);
					!_0x1d7ebc && _0x9452dc.play();
					_0x9452dc.trigger('playlinechange');
				});
			}
		}), _0x354259 = _0x2de88e.getComponent('MenuButton'), _0x9781f6 = _0x2de88e.extend(_0x354259, {
			'constructor': function (_0x4937ad, _0x518db8, _0x36e07d, _0x35611e) {
				this.playlines = _0x518db8.playlines;
				this.label = _0x35611e;
				this.label.innerHTML = _0x518db8.initialySelectedLabel;
				_0x354259.call(this, _0x4937ad, _0x518db8, _0x36e07d);
				this.controlText('Playline');
				if (_0x36e07d.dynamicLabel) {
					this.el().appendChild(_0x35611e);
				} else {
					var _0x157eda = document.createElement('span');
					_0x2de88e.addClass(_0x157eda, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x157eda);
				}
			},
			'createItems': function () {
				var _0x5a4488 = [], _0x3ecd93 = this.playlines || [], _0x3cd3cf = function (_0x4c511c) {
					_0x5a4488.map(function (_0xb0160) {
						_0xb0160.selected(_0xb0160 === _0x4c511c);
						_0xb0160.removeClass('vjs-selected');
					});
				};
				for (var _0x2fd05b = 0; _0x2fd05b < _0x3ecd93.length; _0x2fd05b++) {
					var _0x3718b0 = _0x3ecd93[_0x2fd05b].label;
					_0x5a4488.push(new _0xa725fe(this.player_, {
						'label': _0x3718b0,
						'src': _0x3ecd93[_0x2fd05b],
						'initialySelected': _0x3718b0 === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x3cd3cf, this.label));
				}
				return _0x5a4488;
			}
		});
		_0x509644 = function (_0x44772a) {
			var _0x447a79 = _0x2de88e.mergeOptions(_0x536066, _0x44772a), _0x5b7932 = this, _0x4b2343 = document.createElement('span'), _0x5d75dd = _0x5b7932.options_.playlines;
			_0x2de88e.dom.addClass(_0x4b2343, 'vjs-resolution-button-label');
			var _0x35eb55 = new _0x9781f6(_0x5b7932, {
				'playlines': _0x5d75dd,
				'initialySelectedLabel': _0x5d75dd[0].label,
				'initialySelectedUrl': _0x5d75dd[0].url,
				'customSourcePicker': _0x447a79.customSourcePicker
			}, _0x447a79, _0x4b2343);
			_0x2de88e.dom.addClass(_0x35eb55.el(), 'vjs-resolution-button');
			_0x2de88e.dom.addClass(_0x35eb55.el(), 'vjs-playline-button');
			_0x35eb55.show();
			_0x5b7932.selectCDN = function (_0x2b2549) {
				_0x35eb55.items[_0x2b2549].onClick(_0x447a79.customSourcePicker);
				_0x5b7932.play();
			};
			_0x5d75dd.length > 0 && (_0x1397dc = _0x5d75dd[0]);
			_0x5b7932.currentPlayline = function () {
				return _0x1397dc;
			};
			_0x5b7932.ready(function () {
				_0x5b7932.controlBar.videoJsPlayLine = _0x5b7932.controlBar.el_.insertBefore(_0x35eb55.el_, _0x5b7932.controlBar.getChild('fullscreenToggle').el_);
				_0x5b7932.controlBar.videoJsPlayLine.dispose = function () {
					this.parentNode.removeChild(this);
				};
			});
		};
		_0x2de88e.registerPlugin('videoJsPlayLine', _0x509644);
	}(window, videojs));
}());
Ext.define('ans.AudioJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x18bee8) {
		_0x18bee8 = _0x18bee8 || {};
		var _0x1e2d4f = this;
		_0x1e2d4f.addEvents(['seekstart']);
		_0x1e2d4f.mixins.observable.constructor.call(_0x1e2d4f, _0x18bee8);
		var _0xb9472 = videojs(_0x18bee8.videojs, _0x1e2d4f.params2VideoOpt(_0x18bee8.params), function () {
		});
		Ext.fly(_0x18bee8.videojs).on('contextmenu', function (_0x532f6b) {
			_0x532f6b.preventDefault();
		});
		Ext.fly(_0x18bee8.videojs).on('keydown', function (_0x468e38) {
			(_0x468e38.keyCode == 32 || _0x468e38.keyCode == 37 || _0x468e38.keyCode == 39) && _0x468e38.preventDefault();
		});
	},
	'params2VideoOpt': function (_0x27d675) {
		var _0x222a72 = [];
		!_0x27d675.rootPath && (_0x27d675.rootPath = '');
		_0x27d675.http && _0x222a72.push({
			'src': _0x27d675.http,
			'type': 'audio/mp3'
		});
		var _0xa929cb = function (_0x44a461, _0x3acee2, _0x3daabc) {
			var _0x531a64 = this;
			!_0x531a64.logCount && (_0x531a64.logCount = 0);
			videojs.xhr({
				'uri': _0x3acee2,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x3312ff, _0x2ea7b6) {
				_0x531a64.logCount++;
				if (_0x2ea7b6.statusCode == 200) {
					_0x531a64.logCount = 0;
					if (_0x2ea7b6.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x2ea7b6.body);
					d.isPassed && _0x3daabc();
					return;
				}
				if (_0x531a64.logCount >= 4) {
					_0x531a64.logCount = 0;
					_0x44a461.pause();
					_0x2ea7b6.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x2ea7b6.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x16bd55 = function (_0x356a71, _0x29ed17, _0x286720, _0x14945b) {
			if (!_0x27d675.reportUrl) {
				return;
			}
			var _0x556efb = (_0x27d675.startTime || '0') + '_' + (_0x27d675.endTime || _0x27d675.duration), _0x3de3cc = 0, _0x10fb48;
			_0x286720.toString().indexOf('-') != -1 ? (_0x10fb48 = _0x286720.split('-'), _0x10fb48.length == 2 && (_0x3de3cc = parseInt(_0x10fb48[1]) * 1000)) : _0x3de3cc = _0x286720 * 1000;
			if (_0x3de3cc == _0x27d675.duration * 1000 && _0x29ed17 == 2) {
				return;
			}
			var _0x1e5899 = Ext.String.format('[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x27d675.clazzId, _0x27d675.userid, _0x27d675.jobid ? _0x27d675.jobid : '', _0x27d675.objectId, _0x3de3cc, 'd_yHJ!$pdA~5', _0x27d675.duration * 1000, _0x556efb), _0x28c0ff = [
				_0x27d675.reportUrl,
				'/',
				_0x27d675.dtoken,
				'?clazzId=',
				_0x27d675.clazzId,
				'&playingTime=',
				_0x286720,
				'&duration=',
				_0x27d675.duration,
				'&clipTime=',
				_0x556efb,
				'&objectId=',
				_0x27d675.objectId,
				'&otherInfo=',
				_0x27d675.otherInfo,
				'&jobid=',
				_0x27d675.jobid,
				'&userid=',
				_0x27d675.userid,
				'&isdrag=',
				_0x29ed17,
				'&view=pc',
				'&enc=',
				md5(_0x1e5899),
				'&rt=',
				_0x27d675.rt,
				'&dtype=Audio',
				'&_t=',
				new Date().getTime()
			].join('');
			_0xa929cb(_0x356a71, _0x28c0ff, _0x14945b);
		};
		return {
			'language': 'zh-CN',
			'controls': true,
			'preload': 'auto',
			'bigPlayButton': false,
			'sources': _0x222a72,
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
				'audioNote': { 'title': _0x27d675.filename },
				'studyControl': { 'enableSwitchWindow': 1 },
				'seekBarControl': {
					'headOffset': _0x27d675.headOffset,
					'enableFastForward': _0x27d675.enableFastForward,
					'isSendLog': true,
					'reportTimeInterval': _0x27d675.reportTimeInterval,
					'sendLog': function (_0x1fa67d, _0x956a6c, _0x1287b0) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0xd83862 = 0;
						switch (_0x956a6c) {
							case 'play':
								_0xd83862 = 3;
								break;
							case 'pause':
								_0xd83862 = 2;
								break;
							case 'ended':
								_0xd83862 = 4;
								break;
						}
						_0x16bd55(_0x1fa67d, _0xd83862, _0x1287b0, function () {
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
	var _0x1946a6 = videojs.getPlugin('plugin'), _0x288244 = videojs.extend(_0x1946a6, {
		'constructor': function (_0x518f78, _0x22e6ff) {
			_0x1946a6.call(this, _0x518f78, _0x22e6ff);
			Ext.create('ans.videojs.AudioNote', {
				'renderTo': _0x518f78.el_,
				'html': _0x22e6ff.title
			});
		}
	});
	videojs.registerPlugin('audioNote', _0x288244);
}());