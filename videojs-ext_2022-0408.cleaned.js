Ext.define('ananas.ServerHosts', {
	'alternateClassName': 'ServerHosts',
	'singleton': true,
	'constructor': function () {
		var _0xe2574d = this;
		_0xe2574d.callParent(arguments);
		var _0x4e1071 = document.domain;
		try {
			_0xe2574d.MASTER_HOST = location.protocol + '//' + top.location.host;
		} catch (_0x5f4b28) {
			_0xe2574d.MASTER_HOST = location.protocol + '//' + location.host;
		}
		try {
			_0xe2574d.PARENT_HOST = location.protocol + '//' + parent.location.host;
		} catch (_0x19c336) {
			_0xe2574d.MASTER_HOST = location.protocol + '//' + location.host;
		}
		_0xe2574d.P_HOST = location.protocol + '//p.ananas.chaoxing.com';
		_0xe2574d.s1_HOST = location.protocol + '//s1.ananas.chaoxing.com';
		_0xe2574d.s2_HOST = location.protocol + '//s2.ananas.chaoxing.com';
		_0xe2574d.CLOUD_HOST = 'http://cloud.ananas.' + _0x4e1071;
		_0xe2574d.NEW_CLOUD_HOST = location.protocol + '//pan-yz.chaoxing.com';
		_0xe2574d.CS_HOST = location.protocol + '//cs.ananas.' + _0x4e1071;
		_0xe2574d.FANYA_HOST = 'http://course.fanya.' + _0x4e1071;
		_0xe2574d.PAN_HOST = 'http://pan.ananas.' + _0x4e1071;
		_0xe2574d.CXLIVE_HOST = 'http://cxlive.' + _0x4e1071;
		_0xe2574d.ERYA_TSK_HOST = 'http://erya.tsk.' + _0x4e1071;
		_0xe2574d.QUESTIONNAIRE_HOST = 'http://surveyapp.fy.' + _0x4e1071;
		_0xe2574d.FX_HOST = 'http://www.' + _0x4e1071;
		_0xe2574d.PHONE_ZT_HOST = 'https://special.rhky.com';
		_0xe2574d.CHAOXING_CLASS_HOST = 'https://k.chaoxing.com';
		_0xe2574d.LIVE_HOST = location.protocol + '//live.chaoxing.com';
		_0xe2574d.APPCD_HOST = location.protocol + '//appcd.chaoxing.com';
		_0xe2574d.ZHIBO_HOST = 'https://zhibo.chaoxing.com';
	}
});
(function (_0x9d27fb) {
	function _0x5b86b9(_0x4efef6, _0xe1f880) {
		var _0x1e0866 = (_0x4efef6 & 65535) + (_0xe1f880 & 65535), _0x147234 = (_0x4efef6 >> 16) + (_0xe1f880 >> 16) + (_0x1e0866 >> 16);
		return _0x147234 << 16 | _0x1e0866 & 65535;
	}
	function _0x2e0fe0(_0xe6229, _0x3aeb3f) {
		return _0xe6229 << _0x3aeb3f | _0xe6229 >>> 32 - _0x3aeb3f;
	}
	function _0x45983f(_0x267267, _0x270a81, _0x5d941d, _0x1d74ea, _0x2e046e, _0x51dee8) {
		return _0x5b86b9(_0x2e0fe0(_0x5b86b9(_0x5b86b9(_0x270a81, _0x267267), _0x5b86b9(_0x1d74ea, _0x51dee8)), _0x2e046e), _0x5d941d);
	}
	function _0x3888e5(_0x2c5b0a, _0x268b50, _0x3e7cfd, _0xb695bb, _0x325f60, _0x2c34b6, _0x52e978) {
		return _0x45983f(_0x268b50 & _0x3e7cfd | ~_0x268b50 & _0xb695bb, _0x2c5b0a, _0x268b50, _0x325f60, _0x2c34b6, _0x52e978);
	}
	function _0x1bf94e(_0x45f9ab, _0x1ef39a, _0x19a243, _0x5e36bf, _0x1b8692, _0x42c5d4, _0x3a67c6) {
		return _0x45983f(_0x1ef39a & _0x5e36bf | _0x19a243 & ~_0x5e36bf, _0x45f9ab, _0x1ef39a, _0x1b8692, _0x42c5d4, _0x3a67c6);
	}
	function _0x3ca926(_0x2fed7b, _0x455757, _0x42e7fa, _0xc42759, _0x5d99b8, _0xc4087a, _0x122823) {
		return _0x45983f(_0x455757 ^ _0x42e7fa ^ _0xc42759, _0x2fed7b, _0x455757, _0x5d99b8, _0xc4087a, _0x122823);
	}
	function _0x55b376(_0x4e8ca2, _0xfe3d0d, _0x40e1ab, _0x240655, _0xb2d3aa, _0x1a8a28, _0x1f4d2b) {
		return _0x45983f(_0x40e1ab ^ (_0xfe3d0d | ~_0x240655), _0x4e8ca2, _0xfe3d0d, _0xb2d3aa, _0x1a8a28, _0x1f4d2b);
	}
	function _0x1c35f6(_0x17c6b2, _0x484dc5) {
		_0x17c6b2[_0x484dc5 >> 5] |= 128 << _0x484dc5 % 32;
		_0x17c6b2[(_0x484dc5 + 64 >>> 9 << 4) + 14] = _0x484dc5;
		var _0x37da2e, _0x1b70cb, _0x5def27, _0x485f8a, _0x49aed0, _0x6159a8 = 1732584193, _0x4816c3 = -271733879, _0x1ad702 = -1732584194, _0x390a14 = 271733878;
		for (_0x37da2e = 0; _0x37da2e < _0x17c6b2.length; _0x37da2e += 16) {
			_0x1b70cb = _0x6159a8;
			_0x5def27 = _0x4816c3;
			_0x485f8a = _0x1ad702;
			_0x49aed0 = _0x390a14;
			_0x6159a8 = _0x3888e5(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e], 7, -680876936);
			_0x390a14 = _0x3888e5(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e + 1], 12, -389564586);
			_0x1ad702 = _0x3888e5(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 2], 17, 606105819);
			_0x4816c3 = _0x3888e5(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e + 3], 22, -1044525330);
			_0x6159a8 = _0x3888e5(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e + 4], 7, -176418897);
			_0x390a14 = _0x3888e5(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e + 5], 12, 1200080426);
			_0x1ad702 = _0x3888e5(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 6], 17, -1473231341);
			_0x4816c3 = _0x3888e5(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e + 7], 22, -45705983);
			_0x6159a8 = _0x3888e5(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e + 8], 7, 1770035416);
			_0x390a14 = _0x3888e5(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e + 9], 12, -1958414417);
			_0x1ad702 = _0x3888e5(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 10], 17, -42063);
			_0x4816c3 = _0x3888e5(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e + 11], 22, -1990404162);
			_0x6159a8 = _0x3888e5(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e + 12], 7, 1804603682);
			_0x390a14 = _0x3888e5(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e + 13], 12, -40341101);
			_0x1ad702 = _0x3888e5(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 14], 17, -1502002290);
			_0x4816c3 = _0x3888e5(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e + 15], 22, 1236535329);
			_0x6159a8 = _0x1bf94e(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e + 1], 5, -165796510);
			_0x390a14 = _0x1bf94e(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e + 6], 9, -1069501632);
			_0x1ad702 = _0x1bf94e(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 11], 14, 643717713);
			_0x4816c3 = _0x1bf94e(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e], 20, -373897302);
			_0x6159a8 = _0x1bf94e(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e + 5], 5, -701558691);
			_0x390a14 = _0x1bf94e(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e + 10], 9, 38016083);
			_0x1ad702 = _0x1bf94e(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 15], 14, -660478335);
			_0x4816c3 = _0x1bf94e(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e + 4], 20, -405537848);
			_0x6159a8 = _0x1bf94e(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e + 9], 5, 568446438);
			_0x390a14 = _0x1bf94e(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e + 14], 9, -1019803690);
			_0x1ad702 = _0x1bf94e(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 3], 14, -187363961);
			_0x4816c3 = _0x1bf94e(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e + 8], 20, 1163531501);
			_0x6159a8 = _0x1bf94e(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e + 13], 5, -1444681467);
			_0x390a14 = _0x1bf94e(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e + 2], 9, -51403784);
			_0x1ad702 = _0x1bf94e(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 7], 14, 1735328473);
			_0x4816c3 = _0x1bf94e(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e + 12], 20, -1926607734);
			_0x6159a8 = _0x3ca926(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e + 5], 4, -378558);
			_0x390a14 = _0x3ca926(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e + 8], 11, -2022574463);
			_0x1ad702 = _0x3ca926(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 11], 16, 1839030562);
			_0x4816c3 = _0x3ca926(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e + 14], 23, -35309556);
			_0x6159a8 = _0x3ca926(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e + 1], 4, -1530992060);
			_0x390a14 = _0x3ca926(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e + 4], 11, 1272893353);
			_0x1ad702 = _0x3ca926(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 7], 16, -155497632);
			_0x4816c3 = _0x3ca926(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e + 10], 23, -1094730640);
			_0x6159a8 = _0x3ca926(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e + 13], 4, 681279174);
			_0x390a14 = _0x3ca926(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e], 11, -358537222);
			_0x1ad702 = _0x3ca926(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 3], 16, -722521979);
			_0x4816c3 = _0x3ca926(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e + 6], 23, 76029189);
			_0x6159a8 = _0x3ca926(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e + 9], 4, -640364487);
			_0x390a14 = _0x3ca926(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e + 12], 11, -421815835);
			_0x1ad702 = _0x3ca926(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 15], 16, 530742520);
			_0x4816c3 = _0x3ca926(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e + 2], 23, -995338651);
			_0x6159a8 = _0x55b376(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e], 6, -198630844);
			_0x390a14 = _0x55b376(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e + 7], 10, 1126891415);
			_0x1ad702 = _0x55b376(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 14], 15, -1416354905);
			_0x4816c3 = _0x55b376(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e + 5], 21, -57434055);
			_0x6159a8 = _0x55b376(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e + 12], 6, 1700485571);
			_0x390a14 = _0x55b376(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e + 3], 10, -1894986606);
			_0x1ad702 = _0x55b376(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 10], 15, -1051523);
			_0x4816c3 = _0x55b376(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e + 1], 21, -2054922799);
			_0x6159a8 = _0x55b376(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e + 8], 6, 1873313359);
			_0x390a14 = _0x55b376(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e + 15], 10, -30611744);
			_0x1ad702 = _0x55b376(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 6], 15, -1560198380);
			_0x4816c3 = _0x55b376(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e + 13], 21, 1309151649);
			_0x6159a8 = _0x55b376(_0x6159a8, _0x4816c3, _0x1ad702, _0x390a14, _0x17c6b2[_0x37da2e + 4], 6, -145523070);
			_0x390a14 = _0x55b376(_0x390a14, _0x6159a8, _0x4816c3, _0x1ad702, _0x17c6b2[_0x37da2e + 11], 10, -1120210379);
			_0x1ad702 = _0x55b376(_0x1ad702, _0x390a14, _0x6159a8, _0x4816c3, _0x17c6b2[_0x37da2e + 2], 15, 718787259);
			_0x4816c3 = _0x55b376(_0x4816c3, _0x1ad702, _0x390a14, _0x6159a8, _0x17c6b2[_0x37da2e + 9], 21, -343485551);
			_0x6159a8 = _0x5b86b9(_0x6159a8, _0x1b70cb);
			_0x4816c3 = _0x5b86b9(_0x4816c3, _0x5def27);
			_0x1ad702 = _0x5b86b9(_0x1ad702, _0x485f8a);
			_0x390a14 = _0x5b86b9(_0x390a14, _0x49aed0);
		}
		return [
			_0x6159a8,
			_0x4816c3,
			_0x1ad702,
			_0x390a14
		];
	}
	function _0x4a3496(_0x50ee4d) {
		var _0x3b778c, _0x62e64e = '', _0x28c78f = _0x50ee4d.length * 32;
		for (_0x3b778c = 0; _0x3b778c < _0x28c78f; _0x3b778c += 8) {
			_0x62e64e += String.fromCharCode(_0x50ee4d[_0x3b778c >> 5] >>> _0x3b778c % 32 & 255);
		}
		return _0x62e64e;
	}
	function _0x5ed79d(_0x2e3f98) {
		var _0x457cb1, _0x23e42e = [];
		_0x23e42e[(_0x2e3f98.length >> 2) - 1] = undefined;
		for (_0x457cb1 = 0; _0x457cb1 < _0x23e42e.length; _0x457cb1 += 1) {
			_0x23e42e[_0x457cb1] = 0;
		}
		var _0x6a6318 = _0x2e3f98.length * 8;
		for (_0x457cb1 = 0; _0x457cb1 < _0x6a6318; _0x457cb1 += 8) {
			_0x23e42e[_0x457cb1 >> 5] |= (_0x2e3f98.charCodeAt(_0x457cb1 / 8) & 255) << _0x457cb1 % 32;
		}
		return _0x23e42e;
	}
	function _0xbb22c(_0x191ae8) {
		return _0x4a3496(_0x1c35f6(_0x5ed79d(_0x191ae8), _0x191ae8.length * 8));
	}
	function _0x17df17(_0x46381c, _0x5b5bb0) {
		var _0x56713a, _0x90b237 = _0x5ed79d(_0x46381c), _0x2092b7 = [], _0x3bee72 = [], _0x359736;
		_0x2092b7[15] = _0x3bee72[15] = undefined;
		_0x90b237.length > 16 && (_0x90b237 = _0x1c35f6(_0x90b237, _0x46381c.length * 8));
		for (_0x56713a = 0; _0x56713a < 16; _0x56713a += 1) {
			_0x2092b7[_0x56713a] = _0x90b237[_0x56713a] ^ 909522486;
			_0x3bee72[_0x56713a] = _0x90b237[_0x56713a] ^ 1549556828;
		}
		return _0x359736 = _0x1c35f6(_0x2092b7.concat(_0x5ed79d(_0x5b5bb0)), 512 + _0x5b5bb0.length * 8), _0x4a3496(_0x1c35f6(_0x3bee72.concat(_0x359736), 640));
	}
	function _0x5241bc(_0xef5b9e) {
		var _0x1f6bf6 = '', _0x57a7e2, _0x12f465;
		for (_0x12f465 = 0; _0x12f465 < _0xef5b9e.length; _0x12f465 += 1) {
			_0x57a7e2 = _0xef5b9e.charCodeAt(_0x12f465);
			_0x1f6bf6 += '0123456789abcdef'.charAt(_0x57a7e2 >>> 4 & 15) + '0123456789abcdef'.charAt(_0x57a7e2 & 15);
		}
		return _0x1f6bf6;
	}
	function _0x51ad97(_0x1852a0) {
		return unescape(encodeURIComponent(_0x1852a0));
	}
	function _0x2ff5f1(_0xaa0002) {
		return _0xbb22c(_0x51ad97(_0xaa0002));
	}
	function _0x4e4805(_0x3fc722) {
		return _0x5241bc(_0x2ff5f1(_0x3fc722));
	}
	function _0x57be24(_0x29f3ce, _0x19e572) {
		return _0x17df17(_0x51ad97(_0x29f3ce), _0x51ad97(_0x19e572));
	}
	function _0x12c897(_0x46b9e1, _0x40b348) {
		return _0x5241bc(_0x57be24(_0x46b9e1, _0x40b348));
	}
	function _0x50fd94(_0x2fa3f9, _0x269d69, _0x131471) {
		if (!_0x269d69) {
			if (!_0x131471) {
				return _0x4e4805(_0x2fa3f9);
			}
			return _0x2ff5f1(_0x2fa3f9);
		}
		if (!_0x131471) {
			return _0x12c897(_0x269d69, _0x2fa3f9);
		}
		return _0x57be24(_0x269d69, _0x2fa3f9);
	}
	typeof define === 'function' && define.amd ? define(function () {
		return _0x50fd94;
	}) : typeof module === 'object' && module.exports ? module.exports = _0x50fd94 : _0x9d27fb.md5 = _0x50fd94;
}(this));
Ext.apply(Ext, {
	'setCookie': function (_0xf0e448, _0x13bb64) {
		var _0x368275 = arguments, _0x4d57f4 = arguments.length, _0x4460f0 = _0x4d57f4 > 2 ? _0x368275[2] : null, _0x316c2f = _0x4d57f4 > 3 ? _0x368275[3] : '/', _0x111edb = _0x4d57f4 > 4 ? _0x368275[4] : null, _0x2bcf50 = _0x4d57f4 > 5 ? _0x368275[5] : false;
		document.cookie = _0xf0e448 + '=' + escape(_0x13bb64) + (_0x4460f0 === null ? '' : '; expires=' + _0x4460f0.toGMTString()) + (_0x316c2f === null ? '' : '; path=' + _0x316c2f) + (_0x111edb === null ? '' : '; domain=' + _0x111edb) + (_0x2bcf50 === true ? '; secure' : '');
	},
	'getCookie': function (_0x55c262, _0x38e09f) {
		var _0x535333 = _0x55c262 + '=', _0x66c706 = _0x535333.length, _0x16b32d = document.cookie.length, _0x32a2fd = 0, _0x293765 = 0;
		while (_0x32a2fd < _0x16b32d) {
			_0x293765 = _0x32a2fd + _0x66c706;
			if (document.cookie.substring(_0x32a2fd, _0x293765) == _0x535333) {
				return this.getCookieVal(_0x293765);
			}
			_0x32a2fd = document.cookie.indexOf(' ', _0x32a2fd) + 1;
			if (_0x32a2fd === 0) {
				break;
			}
		}
		return _0x38e09f;
	},
	'getCookieVal': function (_0x225937) {
		var _0x22bf80 = document.cookie.indexOf(';', _0x225937);
		return _0x22bf80 == -1 && (_0x22bf80 = document.cookie.length), unescape(document.cookie.substring(_0x225937, _0x22bf80));
	}
});
Ext.define('ans.VideoJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x313800) {
		_0x313800 = _0x313800 || {};
		var _0x31257c = this;
		_0x31257c.addEvents(['seekstart']);
		_0x31257c.mixins.observable.constructor.call(_0x31257c, _0x313800);
		var _0x4edf21 = videojs(_0x313800.videojs, _0x31257c.params2VideoOpt(_0x313800.params), function () {
		});
		Ext.fly(_0x313800.videojs).on('contextmenu', function (_0x502a9f) {
			_0x502a9f.preventDefault();
		});
		Ext.fly(_0x313800.videojs).on('keydown', function (_0x5f3a39) {
			(_0x5f3a39.keyCode == 32 || _0x5f3a39.keyCode == 37 || _0x5f3a39.keyCode == 39 || _0x5f3a39.keyCode == 107) && _0x5f3a39.preventDefault();
		});
		_0x4edf21.videoJsResolutionSwitcher && _0x4edf21.on('resolutionchange', function () {
			var _0x5ba589 = _0x4edf21.currentResolution(), _0xefec2b = _0x5ba589.sources ? _0x5ba589.sources[0].res : false;
			Ext.setCookie('resolution', _0xefec2b);
		});
		var _0x564513 = _0x313800.params && _0x313800.params.doublespeed ? 2 : 1;
		_0x4edf21.on('ratechange', function () {
			var _0x5e40c5 = _0x4edf21.playbackRate();
			if (_0x5e40c5 > _0x564513) {
				_0x4edf21.pause();
				_0x4edf21.playbackRate(1);
			}
		});
	},
	'params2VideoOpt': function (_0x264de4) {
		var _0x431029 = false, _0x3b923d = [
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
		if (_0x264de4.cdn) {
			try {
				top.window.app && top.window.app == 2 ? _0x3b923d = _0x3b923d.concat(_0x264de4.cdn) : _0x3b923d = _0x3b923d.concat(_0x264de4.cdn).sort(function (_0x5b6459, _0x26bcbd) {
					return _0x5b6459.indexorder - _0x26bcbd.indexorder;
				});
			} catch (_0x5d056e) {
				_0x3b923d = _0x3b923d.concat(_0x264de4.cdn);
			}
		}
		function _0x5df478(_0xd94773, _0x39bd4d, _0x493f23) {
			return 'http://hls-ans.chaoxing.com/hls/m3u8/' + _0xd94773 + '/' + _0x39bd4d + '.m3u8?cdn=' + encodeURIComponent(_0x493f23);
		}
		function _0x3bd30c(_0x553f66, _0x29bf8b) {
			var _0x1e78f2 = ServerHosts.s1_HOST.replace('http:/', '').replace('https:/', ''), _0x5d0326 = 0;
			_0x553f66.src.indexOf(_0x1e78f2) > -1 && (_0x5d0326 = _0x553f66.src.indexOf(_0x1e78f2) + _0x1e78f2.length);
			var _0x3a2bc9 = _0x553f66.src.substr(_0x5d0326);
			if (_0x29bf8b.ispublic && _0x5d0326 == 0) {
				return {
					'src': _0x3a2bc9,
					'type': 'video/mp4',
					'res': _0x553f66.res
				};
			}
			return _0x29bf8b.ispublic ? _0x431029 ? {
				'src': _0x5df478(_0x264de4.objectId, _0x553f66.resolution, _0x29bf8b.url),
				'type': 'application/x-mpegURL',
				'res': _0x553f66.res
			} : {
				'src': _0x29bf8b.url + _0x3a2bc9,
				'type': 'video/mp4',
				'res': _0x553f66.res
			} : _0x431029 ? {
				'src': _0x5df478(_0x264de4.objectId, _0x553f66.resolution, _0x29bf8b.url + _0x1e78f2),
				'type': 'application/x-mpegURL',
				'res': _0x553f66.res
			} : {
				'src': _0x29bf8b.url + _0x1e78f2 + _0x3a2bc9,
				'type': 'video/mp4',
				'res': _0x553f66.res
			};
		}
		var _0x5d6557 = [], _0xf4f211 = Ext.getCookie('resolution', 360);
		!_0x264de4.rootPath && (_0x264de4.rootPath = '');
		_0x264de4.http && _0x5d6557.push({
			'src': _0x264de4.http,
			'type': 'video/mp4',
			'label': '标清',
			'resolution': 'sd',
			'res': 360
		});
		_0x264de4.httphd && _0x5d6557.push({
			'src': _0x264de4.httphd,
			'type': 'video/mp4',
			'label': '高清',
			'resolution': 'hd',
			'res': 720
		});
		_0x264de4.httpshd && _0x5d6557.push({
			'src': _0x264de4.httpshd,
			'type': 'video/mp4',
			'label': '超高清',
			'resolution': 'shd',
			'res': 1080
		});
		_0x264de4.httpmd && _0x5d6557.push({
			'src': _0x264de4.httpmd,
			'type': 'video/mp4',
			'label': '极速',
			'resolution': 'md',
			'res': 240
		});
		if (_0x5d6557.length == 1) {
			var _0x581750 = _0x5d6557[0];
			_0x581750.label = '高清';
		}
		var _0x5a147c = false;
		for (var _0x3fbd5a = 0; _0x3fbd5a < _0x5d6557.length; _0x3fbd5a++) {
			if (_0x5d6557[_0x3fbd5a].res == _0xf4f211) {
				_0x5a147c = true;
				break;
			}
		}
		!_0x5a147c && (_0xf4f211 = 360);
		var _0x246832 = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid), _0x490574 = function (_0x80a465, _0x59c0df, _0x16daf2) {
			try {
				if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && isUnFinishJob()) {
					return;
				}
			} catch (_0x5cbb6) {
				console.log(_0x5cbb6);
			}
			if (_0x246832) {
				return;
			}
			var _0x50993e = this;
			!_0x50993e.logCount && (_0x50993e.logCount = 0);
			videojs.xhr({
				'uri': _0x59c0df,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0xdcdd97, _0x5e91e7) {
				_0x50993e.logCount++;
				if (_0x5e91e7.statusCode == 200) {
					_0x50993e.logCount = 0;
					if (_0x5e91e7.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x5e91e7.body);
					if (d.isPassed) {
						try {
							typeof d.hasJobLimit != 'undefined' && d.hasJobLimit === true && (top.allowNextVideo = false, top.hasJobLimit = true);
						} catch (_0x52da1a) {
							console.log(_0x52da1a);
						}
						_0x16daf2();
					}
					return;
				}
				if (_0x50993e.logCount >= 4) {
					_0x50993e.logCount = 0;
					_0x80a465.pause();
					_0x5e91e7.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x5e91e7.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x1256dd = function (_0xe2040e, _0x184df8, _0x465f6c, _0x526f8a) {
			if (!_0x264de4.reportUrl) {
				return;
			}
			if (_0x264de4.isFiled == 1 || _0x264de4.state == 1) {
				return;
			}
			var _0x23a411 = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x1466b1 = (_0x264de4.startTime || '0') + '_' + (_0x264de4.endTime || _0x264de4.duration), _0x5beeec = 0, _0x251b74;
			_0x465f6c.toString().indexOf('-') != -1 ? (_0x251b74 = _0x465f6c.split('-'), _0x251b74.length == 2 && (_0x5beeec = parseInt(_0x251b74[1]) * 1000)) : _0x5beeec = _0x465f6c * 1000;
			if (_0x5beeec == _0x264de4.duration * 1000 && _0x184df8 == 2) {
				return;
			}
			var _0x1366a5 = Ext.String.format(_0x23a411, _0x264de4.clazzId, _0x264de4.userid, _0x264de4.jobid || '', _0x264de4.objectId, _0x5beeec, 'd_yHJ!$pdA~5', _0x264de4.duration * 1000, _0x1466b1), _0x50e2de = [
				_0x264de4.reportUrl,
				'/',
				_0x264de4.dtoken,
				'?clazzId=',
				_0x264de4.clazzId,
				'&playingTime=',
				_0x465f6c,
				'&duration=',
				_0x264de4.duration,
				'&clipTime=',
				_0x1466b1,
				'&objectId=',
				_0x264de4.objectId,
				'&otherInfo=',
				_0x264de4.otherInfo,
				'&jobid=',
				_0x264de4.jobid,
				'&userid=',
				_0x264de4.userid,
				'&isdrag=',
				_0x184df8,
				'&view=pc',
				'&enc=',
				md5(_0x1366a5),
				'&rt=',
				_0x264de4.rt,
				'&dtype=Video',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x490574(_0xe2040e, _0x50e2de, _0x526f8a);
		};
		return {
			'language': 'zh-CN',
			'poster': _0x264de4.screenshot,
			'controls': true,
			'preload': 'none',
			'sources': _0x5d6557,
			'playlines': _0x3b923d,
			'playbackRates': _0x264de4.doublespeed != 0 ? [
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
					'default': _0xf4f211,
					'dynamicLabel': true,
					'customSourcePicker': function (_0x405589, _0xe97590, _0x58a547) {
						var _0x1980bc = _0x405589.currentPlayline();
						return _0x405589.src(_0xe97590.map(function (_0x3bc8d4) {
							return _0x3bd30c(_0x3bc8d4, _0x1980bc);
						})), _0x405589;
					}
				},
				'videoJsPlayLine': {
					'dynamicLabel': true,
					'customSourcePicker': function (_0x29dba3, _0x6b1742, _0x2ef2c0) {
						var _0x23e79d = _0x29dba3.currentResolution().sources[0];
						return _0x29dba3.src(_0x3bd30c(_0x23e79d, _0x6b1742)), _0x29dba3;
					}
				},
				'studyControl': { 'enableSwitchWindow': _0x264de4.enableSwitchWindow },
				'seekBarControl': {
					'headOffset': _0x264de4.headOffset,
					'enableFastForward': _0x264de4.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0x264de4.control,
					'reportTimeInterval': _0x264de4.reportTimeInterval,
					'isShowDanmu': _0x264de4.danmaku,
					'chapterCapture': _0x264de4.chapterCapture || 0,
					'captureInterval': _0x264de4.captureInterval || 600,
					'chapterCollectionType': _0x264de4.chapterCollectionType || 0,
					'startCapture': _0x264de4.startCapture,
					'endCapture': _0x264de4.endCapture,
					'playAginCapture': _0x264de4.playAginCapture,
					'playingCapture': _0x264de4.playingCapture,
					'playingLoopCapture': _0x264de4.playingLoopCapture,
					'duration': _0x264de4.duration,
					'isSupportFace': _0x264de4.isSupportFace || false,
					'isShowFaceCollection': _0x264de4.isShowFaceCollection,
					'attachmentId': _0x264de4.aId,
					'sendLog': function (_0xf0742f, _0x152b3d, _0x40f1d6, _0x2d1533) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x7e46cf = 0;
						switch (_0x152b3d) {
							case 'playing':
								_0x7e46cf = 0;
								break;
							case 'drag':
								_0x7e46cf = 1;
								break;
							case 'play':
								_0x7e46cf = 3;
								break;
							case 'pause':
								_0x7e46cf = 2;
								break;
							case 'ended':
								_0x7e46cf = 4;
								break;
						}
						var _0x83fcff = this;
						_0x1256dd(_0xf0742f, _0x7e46cf, _0x40f1d6, function () {
							try {
								_0x7e46cf === 4 && typeof _0x2d1533 != 'undefined' && (_0x2d1533.sendDataLog('ended'), _0x2d1533.playNextVideo(_0x83fcff.attachmentId));
							} catch (_0x45cc57) {
								console.log(_0x45cc57);
							}
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				'timelineObjects': {
					'url': _0x264de4.rootPath + '/richvideo/initdatawithviewer?mid=' + _0x264de4.mid + '&cpi=' + _0x264de4.cpi + '&classid=' + _0x264de4.clazzId,
					'quizErrorReportUrl': _0x264de4.rootPath + '/question/addquestionerror?classid=' + _0x264de4.clazzId + '&cpi=' + _0x264de4.cpi,
					'validationUrl2': _0x264de4.rootPath + '/question/quiz-validation?classid=' + _0x264de4.clazzId + '&cpi=' + _0x264de4.cpi + '&objectid=' + _0x264de4.objectId,
					'quizRightCountUrl': _0x264de4.rootPath + '/question/quiz-rightcount?classid=' + _0x264de4.clazzId + '&cpi=' + _0x264de4.cpi
				},
				'subtitle': {
					'translate': _0x264de4.chapterVideoTranslate,
					'subtitleUrl': _0x264de4.rootPath + '/richvideo/allsubtitle?mid=' + _0x264de4.mid + '&objectid=' + _0x264de4.objectId + '&courseid=' + _0x264de4.courseid,
					'subtitle': _0x264de4.rootPath + '/ananas/video-editor/sub?objectid=' + _0x264de4.subobjectid
				},
				'marker': {
					'url': !_0x264de4.isNotMark ? _0x264de4.rootPath + '/ananas/getpoints?courseid=' + _0x264de4.courseid + '&mid=' + _0x264de4.mid : '',
					'ff': _0x264de4.enableFastForward,
					'videoTopicCloud': _0x264de4.videoTopicCloud
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
	var _0x4c1000 = videojs.getPlugin('plugin'), _0xc0caf1 = videojs.extend(_0x4c1000, {
		'constructor': function (_0xe6b8f6, _0x2ab74c) {
			_0x4c1000.call(this, _0xe6b8f6, _0x2ab74c);
			var _0x305f71 = this, _0x4bc7fa = _0x2ab74c.mouseElTarget, _0x2b3540 = 1;
			_0x2ab74c.enableSwitchWindow !== 1 && (_0x2b3540 = 0);
			if (!_0x4bc7fa) {
				try {
					_0x4bc7fa = window.top ? window.top : window.document;
				} catch (_0x2309c3) {
					_0x4bc7fa = window.parent ? window.parent : window.document;
				}
			}
			Ext.fly(_0x4bc7fa).on('mouseout', function (_0x5ae228) {
				_0x5ae228 = _0x5ae228 ? _0x5ae228 : window.event;
				var _0x308939 = _0x5ae228.relatedTarget || _0x5ae228.toElement;
				!_0x308939 && (_0x2b3540 != 1 && _0xe6b8f6.pause());
			});
			_0x305f71.singleton(_0xe6b8f6);
		},
		'singleton': function (_0x39f47b) {
			var _0x2b9afd = this, _0x138dbf = parseInt(Math.random() * 9999999);
			_0x39f47b.on('play', function () {
				Ext.setCookie('videojs_id', _0x138dbf);
			});
			_0x39f47b.setInterval(function () {
				var _0x37a644 = Ext.getCookie('videojs_id');
				typeof _0x37a644 != 'undefined' && _0x37a644 != _0x138dbf && _0x39f47b.pause();
			}, 1000);
		}
	});
	videojs.registerPlugin('studyControl', _0xc0caf1);
}());
(function () {
	var _0x13345a = videojs.getComponent('SeekBar'), _0x297f62 = videojs.extend(_0x13345a, {
		'constructor': function (_0x35d556, _0x2abf5e) {
			_0x13345a.call(this, _0x35d556, _0x2abf5e);
			var _0x39fdde = this;
			_0x35d556.ignorePause = false;
			_0x35d556.disableSeek = function (_0x21e780) {
				_0x39fdde.disableSeek(_0x21e780);
			};
			_0x35d556.onlyBackward = function (_0x33ac78) {
				_0x39fdde.onlyBackward(_0x33ac78);
			};
			_0x35d556.getSeekBar = function () {
				return _0x39fdde;
			};
			_0x39fdde.on('slideractive', function () {
				_0x35d556.trigger('seekstart');
				_0x35d556.ignorePause = true;
				_0x35d556.ignorePlay = true;
				_0x35d556.ignoreSeek = false;
			});
			_0x39fdde.on('sliderinactive', function () {
				_0x35d556.trigger('seekend');
				_0x35d556.ignoreSeek = false;
			});
			_0x39fdde.maxPercent = 0;
			_0x35d556.on('timeupdate', function () {
				_0x39fdde.maxPercent = Math.max(_0x39fdde.getPercent(), _0x39fdde.maxPercent);
			});
		},
		'getCurrentTime_': function () {
			return this.player_.currentTime();
		},
		'getMaxPercent': function () {
			return this.maxPercent;
		},
		'isBackward': function (_0x4a9b69) {
			return this.maxPercent > this.calculateDistance(_0x4a9b69);
		},
		'handleMouseDown': function (_0x552947) {
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x552947)) {
					return;
				}
			}
			if (this['_disableSeek'] === true) {
				return;
			}
			_0x13345a.prototype.handleMouseDown.call(this, _0x552947);
		},
		'handleMouseMove': function (_0x4f3e50) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x4f3e50)) {
					return;
				}
			}
			_0x13345a.prototype.handleMouseMove.call(this, _0x4f3e50);
		},
		'handleMouseUp': function (_0x51a1c0) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x51a1c0)) {
					return;
				}
			}
			_0x13345a.prototype.handleMouseUp.call(this, _0x51a1c0);
		},
		'disableSeek': function (_0x3462d0) {
			var _0x53cdac = this;
			_0x53cdac['_disableSeek'] = _0x3462d0 !== false;
			_0x53cdac['_disableSeek'] ? _0x53cdac.disable() : _0x53cdac.enable();
		},
		'onlyBackward': function (_0x2a09a) {
			var _0xcd0d3c = this;
			_0xcd0d3c['_onlyBackward'] = _0x2a09a !== false;
		}
	});
	videojs.registerComponent('SeekBar', _0x297f62);
}());
(function () {
	var _0x3bdca5 = videojs.getPlugin('plugin'), _0x20095e = videojs.extend(_0x3bdca5, {
		'constructor': function (_0x49773f, _0x3475ab) {
			_0x3bdca5.call(this, _0x49773f, _0x3475ab);
			var _0x1625a4 = this;
			_0x1625a4.firstClick = true;
			_0x1625a4.isSendLog_ = !!_0x3475ab.isSendLog;
			_0x1625a4.isShowDanmu_ = !!_0x3475ab.isShowDanmu;
			_0x1625a4.damuLastGetTime = 0;
			_0x1625a4.timeCount = 0;
			_0x1625a4.isPlay = false;
			_0x1625a4.isEnd = false;
			_0x1625a4.playTimer;
			_0x1625a4.chapterCapture = _0x3475ab.chapterCapture || 0;
			_0x1625a4.captureInterval = _0x3475ab.captureInterval * 60 || 600;
			_0x1625a4.chapterCollectionType = _0x3475ab.chapterCollectionType || 0;
			_0x1625a4.isSupportFace = _0x3475ab.isSupportFace;
			_0x1625a4.isAlertTip = false;
			_0x1625a4.startCapture = _0x3475ab.startCapture;
			_0x1625a4.endCapture = _0x3475ab.endCapture;
			_0x1625a4.playAginCapture = _0x3475ab.playAginCapture;
			_0x1625a4.playingCapture = _0x3475ab.playingCapture;
			_0x1625a4.playingLoopCapture = _0x3475ab.playingLoopCapture;
			_0x1625a4.isShowFaceCollection = _0x3475ab.isShowFaceCollection;
			_0x1625a4.duration = _0x3475ab.duration;
			_0x1625a4.playingFace = false;
			_0x1625a4.loopCaptureInterval = Math.floor(Math.random() * (parseInt(_0x1625a4.duration) - 0) + 1);
			_0x1625a4.isAginFace = false;
			_0x1625a4.againStartTime = 0;
			_0x1625a4.attachmentId = _0x3475ab.attachmentId;
			_0x49773f.on('ready', function () {
				_0x3475ab.enableFastForward != 1 && _0x49773f.disableSeek();
			});
			!_0x3475ab.sendLog && (_0x3475ab.sendLog = function () {
			});
			_0x3475ab.headOffset && _0x49773f.currentTime(_0x3475ab.headOffset);
			var _0x41bee6 = 0, _0x27dad1 = 0, _0x19b842 = _0x3475ab.reportTimeInterval || 60, _0x4903f6 = _0x19b842 * 1000, _0x498ff3 = function (_0x1ea084, _0x233df7, _0xed2528) {
				if (!_0x1625a4.isSendLog_) {
					return;
				}
				var _0xcd28fa = _0x1625a4.now_() - _0x41bee6;
				(_0xcd28fa > _0x4903f6 || _0x233df7 === true) && (typeof _0xed2528 != 'undefined' ? (_0x3475ab.sendLog(_0x49773f, _0x1ea084, _0xed2528, _0x1625a4), _0x1625a4.playTimer && clearInterval(_0x1625a4.playTimer)) : _0x3475ab.sendLog(_0x49773f, _0x1ea084, _0x1625a4.sec_(_0x49773f), _0x1625a4), _0x41bee6 = _0x1625a4.now_());
			};
			_0x49773f.on('play', function () {
				try {
					if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && _0x1625a4.firstClick && isUnFinishJob()) {
						_0x1625a4.firstClick = false;
						_0x49773f.pause();
						checkJobCountLimit(_0x49773f);
						return;
					}
				} catch (_0x4e5aaf) {
					console.log(_0x4e5aaf);
				}
				_0x1625a4.isAlertTip = false;
				_0x1625a4.chapterCapture == 0 || !_0x1625a4.isSupportFace ? (!_0x49773f.ignorePlay ? (_0x498ff3('play', true), _0x49773f.ignoreSeek = true) : (_0x49773f.ignorePlay = false, _0x49773f.ignoreSeek = false), _0x1625a4.sendDataLog('play'), _0x1625a4.receiveStudyLog(), _0x1625a4.getDanmuList('play', _0x49773f)) : _0x1625a4.chapterCapture == 1 && (_0x1625a4.timeCount == 0 ? _0x1625a4.isShowFaceCollection && !_0x1625a4.isPlay && (_0x1625a4.startCapture == 1 || typeof _0x1625a4.startCapture == 'undefined') ? (_0x1625a4.faceCollection('play', _0x49773f, _0x1625a4.chapterCollectionType), _0x49773f.pause()) : (!_0x49773f.ignorePlay ? (_0x498ff3('play', true), _0x49773f.ignoreSeek = true) : (_0x49773f.ignorePlay = false, _0x49773f.ignoreSeek = false), _0x1625a4.sendDataLog('play'), _0x1625a4.receiveStudyLog(), _0x1625a4.getDanmuList('play', _0x49773f), (_0x1625a4.isShowFaceCollection && typeof _0x1625a4.playingCapture == 'undefined' || _0x1625a4.playingCapture == 1 && _0x1625a4.playingLoopCapture == 0) && _0x1625a4.timer(_0x49773f), _0x1625a4.isShowFaceCollection && _0x1625a4.playAginCapture == 1 && _0x49773f.ignorePlay && !_0x1625a4.isAginFace && (_0x1625a4.faceCollection('aginPlay', _0x49773f, _0x1625a4.chapterCollectionType), _0x49773f.pause())) : ((_0x1625a4.isShowFaceCollection && typeof _0x1625a4.playingCapture == 'undefined' || _0x1625a4.playingCapture == 1 && _0x1625a4.playingLoopCapture == 1) && _0x1625a4.timer(_0x49773f), _0x1625a4.isShowFaceCollection && _0x1625a4.playAginCapture == 1 && !_0x49773f.ignorePlay && !_0x1625a4.isAginFace && (_0x1625a4.faceCollection('aginPlay', _0x49773f, _0x1625a4.chapterCollectionType), _0x49773f.pause(), _0x1625a4.againStartTime = _0x1625a4.sec_(_0x49773f))));
			});
			_0x49773f.on('seeked', function () {
				if (_0x3475ab.enableFastForward != 1 && !_0x49773f.switchStatus) {
					var _0x4f2dee = _0x49773f.currentTime(), _0x1d737b = _0x3475ab.headOffset ? _0x3475ab.headOffset : 0;
					_0x4f2dee != 0 && _0x4f2dee > _0x1d737b && _0x49773f.currentTime(_0x1d737b);
				}
				!_0x49773f.ignoreSeek ? _0x498ff3('drag', true, _0x27dad1 + '-' + _0x1625a4.sec_(_0x49773f)) : _0x49773f.ignoreSeek = false;
				_0x27dad1 = _0x1625a4.sec_(_0x49773f);
				_0x49773f.ignorePlay = true;
				delete _0x49773f.switchStatus;
			});
			_0x49773f.on('pause', function () {
				!_0x49773f.ignorePause ? (_0x498ff3('pause', true), _0x49773f.ignorePlay = false, _0x49773f.ignoreSeek = false) : _0x49773f.ignorePause = false;
				_0x1625a4.sendDataLog('pause');
				_0x1625a4.getDanmuList('pause', _0x49773f);
			});
			_0x49773f.on('timeupdate', function () {
				_0x1625a4.sec_(_0x49773f) - _0x1625a4.againStartTime > 2 && (_0x1625a4.isAginFace = false);
				_0x1625a4.isShowFaceCollection && _0x1625a4.chapterCapture == 1 && _0x1625a4.playingCapture == 1 && _0x1625a4.playingLoopCapture == 1 && _0x1625a4.sec_(_0x49773f) == _0x1625a4.loopCaptureInterval && !_0x1625a4.playingFace && (_0x1625a4.faceCollection('playing', _0x49773f, _0x1625a4.chapterCollectionType), _0x49773f.pause());
				if (typeof parent.videoTrialDuration != 'undefined' && parent.videoTrialDuration != '-1') {
					var _0x59f6a7 = parseInt(parent.videoTrialDuration) * 60;
					if (_0x59f6a7 < _0x1625a4.sec_(_0x49773f) && !_0x1625a4.isAlertTip) {
						_0x49773f.pause();
						alert('视频只允许试看' + parent.videoTrialDuration + '分钟');
						_0x1625a4.isAlertTip = true;
						return;
					}
				}
				parseInt(_0x49773f.currentTime()) >= this.damuLastGetTime && _0x1625a4.getDanmuList('timeupdate', _0x49773f);
				_0x1625a4.danmuDisplay(_0x49773f);
				if (_0x41bee6 == 0) {
					return;
				}
				_0x1625a4.sec_(_0x49773f) - _0x27dad1 <= 1 && !_0x49773f.ignorePlay && (_0x27dad1 = _0x1625a4.sec_(_0x49773f));
				_0x498ff3('playing');
			});
			_0x49773f.on('ended', function () {
				_0x1625a4.playTimer && clearInterval(_0x1625a4.playTimer);
				_0x1625a4.isShowFaceCollection && !_0x1625a4.isEnd && _0x1625a4.chapterCapture == 1 && _0x1625a4.endCapture == 1 && _0x1625a4.faceCollection('ended', _0x49773f, _0x1625a4.chapterCollectionType);
				_0x498ff3('ended', true);
			});
		},
		'sec_': function (_0x1038a2) {
			return parseInt(_0x1038a2.currentTime());
		},
		'now_': function () {
			return new Date().getTime();
		},
		'isSendLog': function (_0x2201fd) {
			return _0x2201fd && (this.isSendLog_ = !!_0x2201fd), this.isSendLog_;
		},
		'sendDataLog': function (_0x3b6b1d) {
			var _0x5da8e8 = _0x3b6b1d == 'pause' || _0x3b6b1d == 'end' ? 2 : 1;
			typeof sendReadZTMediaLog != 'undefined' && sendReadZTMediaLog(_0x5da8e8);
		},
		'receiveStudyLog': function () {
			typeof receiveStudyLog != 'undefined' && setTimeout(function () {
				receiveStudyLog();
			}, 50);
		},
		'getDanmuList': function (_0x4b8329, _0x1cdc7b) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x33d367 = this.sec_(_0x1cdc7b);
			if (_0x4b8329 == 'pause') {
				this.damuLastGetTime = 0;
				setTimeout(function () {
					getDanmuByTime(_0x4b8329, 0);
				}, 200);
				return;
			}
			typeof getDanmuByTime != 'undefined' && setTimeout(function () {
				getDanmuByTime(_0x4b8329, _0x33d367);
			}, 200);
			if (_0x33d367 < this.damuLastGetTime) {
				return;
			}
			this.damuLastGetTime = _0x33d367 + 59;
		},
		'danmuDisplay': function (_0x33c4b0) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x37a5a9 = this.sec_(_0x33c4b0);
			typeof danmuPlay != 'undefined' && danmuPlay(_0x37a5a9);
		},
		'timer': function (_0x4e18b8) {
			var _0x10d2c5 = this;
			this.playTimer = setInterval(function () {
				_0x10d2c5.timeCount++;
				if (_0x10d2c5.timeCount >= _0x10d2c5.captureInterval) {
					_0x10d2c5.isPlay = false;
					_0x4e18b8.pause();
					_0x10d2c5.faceCollection('pause', _0x4e18b8, _0x10d2c5.chapterCollectionType);
				}
			}, 1000);
		},
		'faceCollection': function (_0x383cc7, _0x4aab1e, _0x3892e6) {
			_0x383cc7 == 'play' && this.timeCount == 0 ? typeof startFaceCollection != 'undefined' && startFaceCollection(_0x4aab1e, _0x3892e6, this) : _0x383cc7 == 'pause' ? (this.playTimer && clearInterval(this.playTimer), !this.isPlay && this.timeCount >= this.captureInterval && (typeof startFaceCollection != 'undefined' && startFaceCollection(_0x4aab1e, _0x3892e6, this), this.timeCount = 0)) : _0x383cc7 == 'ended' ? (this.playTimer && clearInterval(this.playTimer), typeof startFaceCollection != 'undefined' && (startFaceCollection(_0x4aab1e, _0x3892e6, this), this.isEnd = true), this.timeCount = 0) : _0x383cc7 == 'playing' ? typeof startFaceCollection != 'undefined' && (startFaceCollection(_0x4aab1e, _0x3892e6, this), this.playingFace = true) : _0x383cc7 == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (startFaceCollection(_0x4aab1e, _0x3892e6, this), this.isAginFace = true));
		},
		'playNextVideo': function (_0x2266b1) {
			if (typeof chapterPlayNextVideo != 'undefined') {
				if (typeof top.allowNextVideo != 'undefined' && top.allowNextVideo === false) {
					top.showJobLimitTip();
					return;
				}
				chapterPlayNextVideo(_0x2266b1);
			}
		}
	});
	videojs.registerPlugin('seekBarControl', _0x20095e);
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
		'<tpl if="dtype==\'InteractiveQuiz\'"><span id="spanHas"></span><tpl else><span class="spanHas fr" id="spanHas">回答正确</span></tpl>',
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
			'getChecked': function (_0xd3981, _0x2f78c0, _0x5bd136) {
				return _0xd3981.indexOf(_0x2f78c0) != -1 && _0x5bd136 == 'InteractiveQuiz' ? 'checked="checked"' : '';
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
		var _0x171bab = this, _0x5c1b49 = _0x171bab.renderData, _0x4b7fdc = _0x171bab.quizRightCountUrl;
		typeof _0x4b7fdc != 'undefined' && Ext.Ajax.request({
			'url': _0x4b7fdc,
			'params': {
				'eventid': _0x5c1b49.resourceId,
				'memberinfo': _0x5c1b49.memberinfo
			},
			'method': 'get',
			'success': function (_0x30f17b) {
				var _0x177e1b = Ext.decode(_0x30f17b.responseText);
				_0x177e1b.status && (Ext.get('rightNum').setHTML(_0x177e1b.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
			}
		});
		_0x171bab.callParent(arguments);
		var _0x4b3a50 = _0x171bab.scrollEl, _0x319554 = $(_0x4b3a50.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#A5A5A5',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x171bab.scroller = _0x319554;
		_0x171bab.submitEl.on('click', function () {
			_0x171bab.checkResult() && (Ext.get('videoquiz-continue').getStyle('display') == 'none' && _0x171bab.fireEvent('continue'));
		});
		_0x171bab.continueEl.on('click', function () {
			_0x171bab.fireEvent('continue');
		});
		_0x171bab.backEl && _0x171bab.backEl.on('click', function () {
			_0x171bab.onerror && _0x171bab.onerror();
			_0x171bab.fireEvent('continue');
		});
		_0x171bab.viewAnalysisEl && _0x171bab.viewAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'inline-block');
		});
		_0x171bab.delAnalysisEl && _0x171bab.delAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'none');
		});
	},
	'checkResult': function () {
		var _0x2980ec = this, _0x469f77 = Ext.query('input', _0x2980ec.el.dom), _0x4b9ded = true, _0x3150d9 = _0x2980ec.renderData, _0x33608d = _0x3150d9.options, _0x1958fb = [], _0x2a9fbb = _0x2980ec.quizErrorReportUrl, _0x449012 = _0x2980ec.validationUrl2, _0x60a5fc = _0x3150d9.dtype;
		Ext.each(_0x469f77, function (_0x324d87, _0x43e183) {
			(_0x324d87.value == 'true' && !_0x324d87.checked || _0x324d87.value == 'false' && _0x324d87.checked) && (_0x4b9ded = false);
			_0x324d87.checked && _0x1958fb.push(_0x33608d[_0x43e183].name);
		});
		!_0x4b9ded ? _0x3150d9.errorBackTime && _0x3150d9.errorBackTime > 0 ? (Ext.get('spanNotBack').setStyle('display', 'block'), Ext.get('videoquiz-submit').setStyle('display', 'none'), _0x60a5fc == 'InteractiveQuiz' ? Ext.get('knowledgeBack').setStyle('display', 'block') : Ext.get('videoquiz-continue').setStyle('display', 'block')) : _0x60a5fc == 'InteractiveQuiz' && _0x3150d9.errorBack == 1 && _0x3150d9.eBstartPoint != '' ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'block')) : Ext.get('spanNot').setStyle('display', 'block') : (Ext.get('spanHas').setStyle('display', 'block'), _0x60a5fc == 'InteractiveQuiz' && (Ext.get('videoquiz-continue').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'none'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('spanNot').setStyle('display', 'none'), Ext.get('spanNotBack').setStyle('display', 'none'), Ext.get('spanNotBackPoint').setStyle('display', 'none')));
		if (typeof _0x449012 != 'undefined') {
			var _0x582840 = _0x1958fb.join(',');
			Ext.Ajax.request({
				'url': _0x449012,
				'params': {
					'eventid': _0x3150d9.resourceId,
					'isRight': _0x4b9ded,
					'memberinfo': _0x3150d9.memberinfo,
					'answerContent': _0x582840
				},
				'method': 'get',
				'success': function (_0x4e736d) {
					_0x3150d9.answerContent = _0x582840;
					var _0x36353c = Ext.decode(_0x4e736d.responseText);
					if (_0x36353c.status) {
						if (_0x60a5fc == 'InteractiveQuiz') {
							Ext.get('rightNum').setHTML(_0x36353c.rightAnswerCount);
							Ext.get('rightAnswerNum').setStyle('display', 'inline-block');
						}
						if (_0x36353c.isRight && _0x60a5fc == 'InteractiveQuiz') {
							typeof _0x36353c.showTip != 'undefined' && _0x36353c.showTip ? Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01你的答题水准超过了' + _0x36353c.percent + '%的同学</span></span>') : Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01</span></span>');
							if (_0x36353c.testAnalysis) {
								Ext.get('tkParsing_con').setHTML('解析\uFF1A' + _0x36353c.testAnalysis);
								Ext.get('tkParsing').setStyle('display', 'inline-block');
								Ext.get('viewAnalysis').setStyle('display', 'block');
								var _0x364492 = _0x2980ec.tkParseScrollEl, _0x4da7c7 = $(_0x364492.dom).niceScroll({
									'cursorborder': '',
									'cursorwidth': 6,
									'cursorcolor': '#A5A5A5',
									'boxzoom': false,
									'autohidemode': true
								});
								_0x2980ec.tkParseScroll = _0x4da7c7;
							}
						}
					}
				}
			});
			!_0x4b9ded && _0x2980ec.onerror && _0x60a5fc != 'InteractiveQuiz' && _0x2980ec.onerror();
		} else {
			!_0x4b9ded && (Ext.Ajax.request({
				'url': _0x2a9fbb,
				'params': {
					'eventid': _0x3150d9.resourceId,
					'memberinfo': _0x3150d9.memberinfo,
					'answerContent': _0x1958fb.join(',')
				},
				'method': 'get'
			}), _0x2980ec.onerror && _0x60a5fc != 'InteractiveQuiz' && _0x2980ec.onerror());
		}
		return !_0x4b9ded && _0x3150d9.errorContinue == 1 && (_0x4b9ded = true, Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('videoquiz-continue').setStyle('display', 'block')), _0x4b9ded;
	},
	'continueFun': function () {
		var _0x21484d = this;
		_0x21484d.fireEvent('continue');
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
		var _0xdca3cb = this;
		_0xdca3cb.callParent(arguments);
		_0xdca3cb.el.on('click', function () {
			_0xdca3cb.fireEvent('continue');
		});
		_0xdca3cb.closeEl.on('click', function () {
			_0xdca3cb.fireEvent('continue');
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
		var _0x33ecb3 = this, _0x4a2f51 = _0x33ecb3.contentEl;
		_0x33ecb3.callParent(arguments);
		_0x33ecb3.closeEl.on('click', function () {
			_0x33ecb3.fireEvent('continue');
		});
		var _0x3e95b2 = $(_0x4a2f51.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#e0e0e0',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x33ecb3.scroller = _0x3e95b2;
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
		var _0x15ba29 = this;
		_0x15ba29.callParent(arguments);
		_0x15ba29.pptPicEl.on('click', function (_0x5a6468) {
			_0x5a6468.stopPropagation();
			_0x15ba29.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			if (_0x15ba29.pptPicEl.hasCls('sp_ppt_pic_fullScreen')) {
				Ext.get('sp_size_big').setStyle('display', 'none');
				Ext.get('sp_size_small').setStyle('display', 'block');
				var _0x1b3b46 = Ext.get('video').getStyle('height'), _0x27b931 = Ext.get('sp_video_ppt_pic').getStyle('height'), _0x33c1c2 = (parseInt(_0x1b3b46) - 60 - parseInt(_0x27b931)) / 2;
				Ext.get('sp_video_ppt_pic').setStyle('top', _0x33c1c2 + 'px');
				Ext.get('sp_video_ppt_pic').setStyle('left', '0');
			} else {
				Ext.get('sp_size_big').setStyle('display', 'block');
				Ext.get('sp_size_small').setStyle('display', 'none');
				Ext.get('sp_video_ppt_pic').setStyle('top', '0px');
				Ext.get('sp_video_ppt_pic').setStyle('left', '0px');
			}
		});
		_0x15ba29.sizeBigEl.on('click', function (_0x4b65e0) {
			_0x4b65e0.stopPropagation();
			_0x15ba29.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			Ext.get('sp_size_big').setStyle('display', 'none');
			Ext.get('sp_size_small').setStyle('display', 'block');
			var _0xe1ca7c = Ext.get('video').getStyle('height'), _0xbaa067 = Ext.get('sp_video_ppt_pic').getStyle('height'), _0x298aca = (parseInt(_0xe1ca7c) - 60 - parseInt(_0xbaa067)) / 2;
			Ext.get('sp_video_ppt_pic').setStyle('top', _0x298aca + 'px');
			Ext.get('sp_video_ppt_pic').setStyle('left', '0');
		});
		_0x15ba29.sizeSmallEl.on('click', function (_0x1c0266) {
			_0x1c0266.stopPropagation();
			_0x15ba29.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
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
	'constructor': function (_0x10519b) {
		var _0x8d810e = this;
		_0x8d810e.callParent(arguments);
		_0x8d810e.bg = Ext.create('ans.videojs.TimelineObjectsBg', { 'renderTo': _0x10519b.renderTo });
		_0x8d810e.objects = _0x10519b.objects && _0x10519b.objects.sort ? _0x8d810e.sort_(_0x10519b.objects) : [];
		_0x8d810e.current = 0;
	},
	'showObject': function (_0xb34e06, _0xd73ee2, _0x552fa0) {
		var _0x1ff906 = this, _0x356e7b = _0x1ff906.getBox(), _0x2a121c = _0x1ff906.items.getAt(0), _0x22fe42, _0x84b84 = function () {
			_0x22fe42.destroy();
			_0x1ff906.hide();
			_0xb34e06.play();
		};
		_0x2a121c != null && _0x2a121c.destroy();
		if (_0xd73ee2 == 'IMG') {
			var _0x124441 = { 'src': _0x552fa0.url.replace(/origin/, _0x356e7b.width + '_' + _0x356e7b.height) };
			_0x22fe42 = _0x1ff906.add({
				'xtype': 'videoimg',
				'renderData': _0x124441
			});
		}
		if (_0xd73ee2 == 'QUIZ') {
			var _0x25c86a = function () {
			};
			if (_0x552fa0.errorBackTime && _0x552fa0.errorBackTime > 0) {
				var _0x4acc3a = _0x552fa0.errorBackTime * 60;
				_0x25c86a = function () {
					var _0x404a18 = Math.max(_0xb34e06.currentTime() - _0x4acc3a, 0);
					_0xb34e06.switchStatus = true;
					_0xb34e06.currentTime(_0x404a18);
				};
			}
			_0x22fe42 = _0x1ff906.add({
				'xtype': 'videoquiz',
				'renderData': _0x552fa0,
				'quizErrorReportUrl': _0x1ff906.quizErrorReportUrl,
				'validationUrl2': _0x1ff906.validationUrl2,
				'onerror': _0x25c86a
			});
		}
		if (_0xd73ee2 == 'InteractiveQuiz') {
			var _0x25c86a = function () {
			};
			if (_0x552fa0.errorBackTime && _0x552fa0.errorBackTime > 0) {
				var _0x4acc3a = _0x552fa0.errorBackTime * 60;
				_0x25c86a = function () {
					var _0x40c2c7 = Math.max(_0xb34e06.currentTime() - _0x4acc3a, 0);
					_0xb34e06.switchStatus = true;
					_0xb34e06.currentTime(_0x40c2c7);
				};
			}
			if (_0x552fa0.errorBack == 1 && _0x552fa0.eBstartPoint != '') {
				var _0x4acc3a = 0, _0x42eab9 = _0x552fa0.eBstartPoint.split(':'), _0x2b626c = _0x42eab9.length;
				_0x2b626c > 0 && (_0x2b626c == 1 ? _0x4acc3a = parseInt(_0x42eab9[0]) * 60 : _0x2b626c == 2 && (_0x4acc3a = parseInt(_0x42eab9[0]) * 60 + parseInt(_0x42eab9[1])));
				_0x25c86a = function () {
					_0xb34e06.switchStatus = true;
					_0xb34e06.currentTime(_0x4acc3a);
				};
			}
			_0x552fa0.dtype = 'InteractiveQuiz';
			_0x22fe42 = _0x1ff906.add({
				'xtype': 'videoquiz',
				'renderData': _0x552fa0,
				'quizErrorReportUrl': _0x1ff906.quizErrorReportUrl,
				'validationUrl2': _0x1ff906.validationUrl2,
				'quizRightCountUrl': _0x1ff906.quizRightCountUrl,
				'onerror': _0x25c86a
			});
		}
		if (_0xd73ee2 == 'PPT') {
			if (_0x552fa0.fp == 0) {
				return;
			}
			var _0x49ab6e = _0x552fa0.url;
			_0x552fa0.thumb ? _0x49ab6e = _0x552fa0.thumb + _0x552fa0.pageNo + '.png' : _0x49ab6e = _0x49ab6e.replace(/swfv2\/.*$/, 'thumb/' + _0x552fa0.fp + '.png');
			var _0x124441 = { 'src': _0x49ab6e };
			_0x22fe42 = _0x1ff906.add({
				'xtype': 'videoppt',
				'renderData': _0x124441
			});
		}
		_0xd73ee2 == 'SyncAnnotationEvent' && (_0x22fe42 = _0x1ff906.add({
			'xtype': 'videoannotation',
			'renderData': _0x552fa0
		}));
		if (!_0x22fe42) {
			return;
		}
		_0x22fe42.on('continue', function () {
			_0x84b84();
		});
		var _0xa8a615 = !(_0x22fe42.model === false);
		_0x1ff906.showModel(_0xa8a615);
		_0xa8a615 && _0xb34e06.pause();
	},
	'showModel': function (_0x1590a2) {
		var _0x470845 = this;
		_0x470845.show();
		_0x1590a2 ? (_0x470845.removeCls('ans-timelineobjects-autosize'), _0x470845.setAutoScroll(true), _0x470845.bg.show()) : (_0x470845.addCls('ans-timelineobjects-autosize'), _0x470845.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
		this.bg.hide.apply(this.bg, arguments);
	},
	'updateTime': function (_0x15b638, _0x135a29) {
		if (this.current >= this.objects.length || _0x15b638.scrubbing()) {
			return;
		}
		var _0x51cb9d = this, _0x345e4b = _0x51cb9d.objects[_0x51cb9d.current], _0x1b6aad = _0x345e4b.style, _0x5b0124 = _0x345e4b.datas[0];
		if (_0x135a29 >= _0x5b0124.startTime) {
			_0x51cb9d.current++;
			_0x51cb9d.showObject(_0x15b638, _0x1b6aad, _0x5b0124);
		}
	},
	'resetTime': function (_0x41d40b, _0x47d363) {
		var _0x4f0746 = this, _0x1ae72b;
		for (_0x1ae72b = 0; _0x1ae72b < _0x4f0746.objects.length; _0x1ae72b++) {
			var _0x1e5d27 = _0x4f0746.objects[_0x1ae72b].datas[0].startTime;
			if (_0x47d363 <= _0x1e5d27) {
				break;
			}
		}
		_0x4f0746.current = _0x1ae72b;
	},
	'sort_': function (_0x136297) {
		return _0x136297 && _0x136297.sort && _0x136297.sort(function (_0x1d20d9, _0x5bfa38) {
			var _0x2ef75a = _0x1d20d9.datas[0].startTime, _0x63c1eb = _0x5bfa38.datas[0].startTime;
			return _0x2ef75a - _0x63c1eb;
		});
	}
});
(function () {
	var _0x2d6e58 = videojs.getPlugin('plugin'), _0x5efcd9 = videojs.extend(_0x2d6e58, {
		'constructor': function (_0x582c6e, _0x48b010) {
			_0x2d6e58.call(this, _0x582c6e, _0x48b010);
			if (!_0x48b010.url) {
				return;
			}
			var _0x47ee74 = this;
			_0x582c6e.eventPoints = [];
			Ext.Ajax.request({
				'url': _0x48b010.url,
				'async': false,
				'success': function (_0x58534c) {
					if (_0x58534c.status != 200) {
						return;
					}
					eval('var data=' + _0x58534c.responseText);
					if (data && data.length > 0) {
						var _0x12b0d3 = [];
						for (var _0x3dd757 = 0; _0x3dd757 < data.length; _0x3dd757++) {
							var _0x17f070 = data[_0x3dd757];
							if (_0x17f070.style == 'InteractiveQuiz') {
								var _0x4cb95b = _0x17f070.datas;
								if (_0x4cb95b && _0x4cb95b.length > 0) {
									var _0x139a9c = {
										'time': _0x4cb95b[0].startTime,
										'text': '互动测验'
									};
								}
								_0x12b0d3.push(_0x139a9c);
							}
						}
						_0x582c6e.eventPoints = _0x12b0d3;
					}
					var _0xe592e1 = Ext.create('ans.videojs.TimelineObjects', {
						'renderTo': _0x582c6e.el_,
						'quizErrorReportUrl': _0x48b010.quizErrorReportUrl,
						'validationUrl2': _0x48b010.validationUrl2,
						'quizRightCountUrl': _0x48b010.quizRightCountUrl,
						'objects': data
					});
					_0x582c6e.on('play', function () {
						_0xe592e1.resetTime(_0x582c6e, _0x582c6e.currentTime());
					});
					_0x582c6e.on('seekend', function () {
						_0xe592e1.resetTime(_0x582c6e, _0x582c6e.currentTime());
					});
					_0x582c6e.on('timeupdate', function () {
						!_0x582c6e.paused() && _0xe592e1.updateTime(_0x582c6e, _0x582c6e.currentTime());
					});
				}
			});
		}
	});
	videojs.registerPlugin('timelineObjects', _0x5efcd9);
}());
(function () {
	var _0x2e56b5 = videojs.getPlugin('plugin'), _0xe70a18 = videojs.extend(_0x2e56b5, {
		'constructor': function (_0xcc48eb, _0x4306ef) {
			_0x2e56b5.call(this, _0xcc48eb, _0x4306ef);
			if (!_0x4306ef.url) {
				return;
			}
			var _0x94838c = this;
			Ext.Ajax.request({
				'url': _0x4306ef.url,
				'async': false,
				'success': function (_0x477781) {
					if (_0x477781.status != 200) {
						return;
					}
					eval('var data=' + _0x477781.responseText);
					if (!data.status) {
						return;
					}
					var _0x3713db = videojs('video');
					if (_0x3713db && typeof _0x3713db.markers === 'function') {
						var _0xbecc66 = _0xcc48eb.eventPoints;
						_0xbecc66.push.apply(_0xbecc66, data.list);
						_0x3713db.markers({
							'markerTip': {
								'display': true,
								'text': function (_0xa13fff) {
									return _0xa13fff.text;
								}
							},
							'markers': _0xbecc66,
							'onMarkerClick': function (_0x43c675) {
								if (_0x4306ef.ff != 1) {
									return false;
								}
								var _0x1337eb = $(this).data('marker-key');
								return _0xcc48eb.currentTime(_0x43c675.time), false;
							}
						});
					}
					if (data.list && data.list.length > 0) {
						var _0x119922 = [], _0x41bd91 = {
							_0x1524c8: _0x21c4e6,
							_0x1524c8: _0x514caa
						};
						for (var _0x43c948 = 0; _0x43c948 < data.list.length; _0x43c948++) {
							var _0x1b655f = data.list[_0x43c948], _0x1524c8 = _0x1b655f.text;
							if (!_0x41bd91[_0x1524c8]) {
								var _0x21c4e6 = [];
								_0x21c4e6.push(_0x1b655f);
								_0x119922.push(_0x1524c8);
							} else {
								var _0x514caa = _0x41bd91[_0x1524c8];
								_0x514caa.push(_0x1b655f);
							}
						}
						function _0x41fed4(_0x3540c0) {
							var _0x10baad = '<div class="zsCloud_box"><h2 class="zsCloud_seltime">选择时间</h2><div class="zsCloud_div"><div class="zsCloud_div_list">';
							for (var _0x26cdba = 0; _0x26cdba < _0x3540c0.length; _0x26cdba++) {
								var _0x5f20ce = _0x3540c0[_0x26cdba], _0x4db83e = Ext.fly(_0x1b7fc4.elements[0]).select('.topicId' + _0x5f20ce.topicid + ':not(.markertime)'), _0x482701 = videojs.formatTime(_0x5f20ce.time);
								_0x4db83e && _0x4db83e.elements[0] && _0x4db83e.elements[0].parentElement.remove();
								_0x10baad += '<div class="zsCloud_item topicId' + _0x5f20ce.topicid + '" data-marker-time="' + _0x5f20ce.time + '" title="' + _0x482701 + '" onclick="markersPlayer(this)">' + _0x482701 + '</div>';
							}
							return _0x10baad += '</div></div></div>', _0x10baad;
						}
						Ext.select('.zsCloud').setStyle('display', 'block');
						var _0x1b7fc4 = Ext.select('.zsCloud_ul');
						if (_0x1b7fc4 && _0x1b7fc4.elements[0]) {
							var _0x560648;
							for (var _0x511b7c = 0; _0x511b7c < _0x119922.length; _0x511b7c++) {
								var _0x4a098e = _0x119922[_0x511b7c], _0x150fa1 = _0x41bd91[_0x4a098e], _0x22c3f1 = '';
								if (_0x150fa1) {
									if (_0x150fa1.length == 1) {
										var _0x41f08d = _0x150fa1[0], _0x4d7316 = Ext.fly(_0x1b7fc4.elements[0]).select('.topicId' + _0x41f08d.topicid + ':not(.markertime)'), _0x354049 = videojs.formatTime(_0x41f08d.time);
										_0x4d7316 && _0x4d7316.elements[0] && _0x4d7316.elements[0].parentElement.remove();
										_0x22c3f1 = '<li><span class=\'topicId' + _0x41f08d.topicid + ' markertime\' data-marker-time=\'' + _0x41f08d.time + '\' title=\'' + _0x354049 + '\' onclick=\'markersPlayer(this)\'>' + _0x41f08d.text + '</span></li>';
									} else {
										_0x22c3f1 = '<li class="zsCloud_select"><span class="zsCloud_span">' + _0x4a098e + '</span>';
										_0x150fa1 && _0x150fa1.length > 0 ? _0x22c3f1 += _0x41fed4(_0x150fa1) : _0x22c3f1 += '</li>';
									}
								}
								_0x560648 ? _0x560648 = Ext.DomHelper.insertHtml('afterEnd', _0x560648.elements[0], _0x22c3f1) : _0x560648 = Ext.DomHelper.insertHtml('afterBegin', _0x1b7fc4.elements[0], _0x22c3f1);
								_0x560648 = Ext.fly(_0x560648).select('');
							}
						}
						_0x4306ef.videoTopicCloud && _0x4306ef.videoTopicCloud == 1 && (Ext.select('.zsCloud_down').setStyle('display', 'block'), Ext.select('.zsCloud_body').setStyle('display', 'block'));
					}
					var _0x4f9b66 = new Map(), _0x20b970 = new Array();
					if (data.list && data.list.length > 0) {
						for (var _0x43c948 = 0; _0x43c948 < data.list.length; _0x43c948++) {
							var _0x2c84a9 = data.list[_0x43c948].topicid, _0x82a984 = _0x4f9b66.get(_0x2c84a9);
							!_0x82a984 && (_0x82a984 = {}, _0x82a984.text = data.list[_0x43c948].text, _0x82a984.time = data.list[_0x43c948].time, _0x82a984.topicid = data.list[_0x43c948].topicid, _0x82a984.weight = 0, _0x82a984.html = {
								'data-marker-time': data.list[_0x43c948].time,
								'onclick': 'markersPlayer(this)'
							}, _0x4f9b66.set(_0x2c84a9, _0x82a984), _0x20b970.push(_0x82a984));
							_0x82a984.weight += 1;
						}
					}
					$(function () {
						_0x20b970.length != 0 && $('#word_cloud').jQCloud(_0x20b970);
						function _0x5ee33e(_0x5bffea) {
							$(_0x5bffea).niceScroll({
								'cursorborder': '',
								'cursorwidth': 8,
								'cursorcolor': '#DADFE6',
								'boxzoom': false,
								'autohidemode': true
							});
							setInterval(function () {
								$(_0x5bffea).getNiceScroll().resize();
							}, 300);
						}
						$('.zsCloud_box').each(function (_0x28a993) {
							$(this).find('.zsCloud_div').attr('id', 'zsCloud_div_' + _0x28a993);
							_0x5ee33e('#zsCloud_div_' + _0x28a993);
						});
					});
					$('.zsCloud_down').click(function () {
						var _0x561ae4 = $('.zsCloud_body');
						_0x561ae4.is(':visible') ? (_0x561ae4.hide(), $(this).addClass('zsCloud_up'), $(this).text('展开')) : (_0x561ae4.show(), $(this).removeClass('zsCloud_up'), $(this).text('收起'));
					});
				}
			});
		}
	});
	videojs.registerPlugin('marker', _0xe70a18);
}());
(function () {
	var _0x53ea91 = videojs.getPlugin('plugin'), _0x2c8a37 = videojs.extend(_0x53ea91, {
		'constructor': function (_0x22d5bf, _0x54aacb) {
			_0x53ea91.call(this, _0x22d5bf, _0x54aacb);
			var _0x2cee10 = this, _0x43bb90 = _0x54aacb.subtitleUrl, _0x3b5dc7 = function (_0x28fdf4) {
				var _0x1c2fbd = _0x28fdf4.match(/support\/(\w+).\w+/);
				if (_0x1c2fbd) {
					return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0x1c2fbd[1];
				}
			}, _0x139341 = function (_0x255673, _0x4906fd, _0x40cd15) {
				_0x22d5bf.addRemoteTextTrack({
					'kind': 'subtitles',
					'srclang': 'cn',
					'label': _0x255673,
					'src': _0x4906fd,
					'default': _0x40cd15
				}, true);
			};
			_0x22d5bf.ready(function () {
				_0x43bb90 && Ext.Ajax.request({
					'url': _0x43bb90,
					'success': function (_0x504f5e) {
						if (_0x504f5e.status != 200) {
							return;
						}
						eval('var subs=' + _0x504f5e.responseText);
						var _0x38edbf = 0, _0x50dbd5 = 0;
						subs.length > 0 && Ext.each(subs, function (_0x482b7f) {
							_0x54aacb.translate == 1 && _0x482b7f.name == 'English' ? (_0x482b7f.selected = true, _0x50dbd5 = _0x38edbf) : _0x482b7f.selected = false;
							_0x139341(_0x482b7f.name, _0x3b5dc7(_0x482b7f.url), _0x482b7f.selected);
							_0x38edbf++;
						});
						if (_0x54aacb.translate == 1) {
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').setHTML('翻译');
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').addCls('vjs-hide-content');
						}
						setTimeout(function () {
							var _0x24a00d = _0x22d5bf.textTracks();
							_0x54aacb.translate == 1 ? _0x24a00d && _0x24a00d[_0x50dbd5] ? _0x24a00d[_0x50dbd5].mode = 'showing' : _0x24a00d && _0x24a00d[0] && (_0x24a00d[0].mode = 'showing') : _0x24a00d && _0x24a00d[0] && (_0x24a00d[0].mode = 'showing');
						}, 500);
					}
				});
				var _0x3ea797 = _0x22d5bf.textTrackSettings;
				_0x3ea797.setValues({
					'backgroundColor': '#000',
					'backgroundOpacity': '0',
					'edgeStyle': 'uniform'
				});
				_0x3ea797.updateDisplay();
			});
		}
	});
	videojs.registerPlugin('subtitle', _0x2c8a37);
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
		var _0x5496c9 = this;
		_0x5496c9.callParent(arguments);
		var _0x146799 = Ext.query('input', _0x5496c9.el.dom);
		Ext.each(_0x146799, function (_0x4c1a0e, _0x32bcda) {
			Ext.fly(_0x4c1a0e).on('click', function () {
				_0x5496c9.onSelected(_0x32bcda);
			});
		});
		try {
			typeof createVideoTask === 'function' ? createVideoTask() : console.log('createVideoTask函数不存在\uFF01');
		} catch (_0x7115d) {
		}
	},
	'setErrorMsg': function (_0x402a1b) {
		Ext.fly(this.errorMsgEl).setHTML(_0x402a1b);
	}
});
Ext.define('ans.videojs.ErrorNote', {
	'extend': 'Ext.Component',
	'cls': 'ans-vjserrdisplay',
	'renderTpl': ['<div class="ans-vjserrdisplay-title">播放出现异常\u3002</div>']
});
(function () {
	var _0x1ecc00 = videojs.getComponent('ErrorDisplay'), _0x2d9163 = videojs.extend(_0x1ecc00, {
		'constructor': function (_0x8474ed, _0x158ca8) {
			_0x1ecc00.call(this, _0x8474ed, _0x158ca8);
		},
		'colse': function () {
			_0x1ecc00.prototype.colse.call(this);
			me.ansErrorDisplay && (me.ansErrorDisplay.destroy(), me.ansErrorDisplay = null);
		},
		'fill': function () {
			_0x1ecc00.prototype.fill.call(this);
			var _0xa5542c = this, _0x179df9 = _0xa5542c.player_, _0x5e4126 = _0x179df9.options_.playlines, _0x5111f6 = Ext.query('.vjs-modal-dialog-content', _0xa5542c.el_)[0];
			_0xa5542c.ansErrorDisplay && (_0xa5542c.ansErrorDisplay.destroy(), delete _0xa5542c.ansErrorDisplay);
			if (!_0x179df9.selectCDN || !_0x5e4126) {
				_0xa5542c.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', { 'renderTo': _0xa5542c.el_ });
				return;
			}
			var _0x1fd3e = _0x179df9.currentPlayline(), _0xdd7be0 = 0;
			Ext.each(_0x5e4126, function (_0x4daea8, _0x214788) {
				_0x1fd3e == _0x4daea8 && (_0xdd7be0 = _0x214788);
			});
			_0xa5542c.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
				'renderTo': _0xa5542c.el_,
				'onSelected': function (_0x4b5180) {
					_0x179df9.selectCDN(_0x4b5180);
					_0xa5542c.close();
				},
				'renderData': {
					'playlines': _0x5e4126,
					'errorMsg': _0xa5542c.content(),
					'selectedIndex': _0xdd7be0
				}
			});
		}
	});
	videojs.registerComponent('ErrorDisplay', _0x2d9163);
}());
(function () {
	var _0x3640b9 = null;
	typeof window.videojs === 'undefined' && typeof require === 'function' ? _0x3640b9 = require('video.js') : _0x3640b9 = window.videojs;
	(function (_0x5598c0, _0x1c475a) {
		var _0xe8e829 = {}, _0x275cdf, _0x379c4a = {}, _0x38eb24 = {};
		function _0x5417b5(_0x483c43, _0x23561b, _0x28a1de, _0x2e49d2) {
			_0x379c4a = {
				'label': _0x28a1de,
				'sources': _0x23561b
			};
			if (typeof _0x2e49d2 === 'function') {
				return _0x2e49d2(_0x483c43, _0x23561b, _0x28a1de);
			}
			return _0x483c43.src(_0x23561b.map(function (_0x2559d3) {
				return {
					'src': _0x2559d3.src,
					'type': _0x2559d3.type,
					'res': _0x2559d3.res
				};
			})), _0x483c43;
		}
		var _0x14699d = _0x1c475a.getComponent('MenuItem'), _0x32f6bd = _0x1c475a.extend(_0x14699d, {
			'constructor': function (_0x3804d4, _0x2b0565, _0x106987, _0x259ebc) {
				this.onClickListener = _0x106987;
				this.label = _0x259ebc;
				_0x14699d.call(this, _0x3804d4, _0x2b0565);
				this.src = _0x2b0565.src;
				this.on('click', this.onClick);
				this.on('touchstart', this.onClick);
				_0x2b0565.initialySelected && (this.showAsLabel(), this.selected(true), this.addClass('vjs-selected'));
			},
			'showAsLabel': function () {
				this.label && (this.label.innerHTML = this.options_.label);
			},
			'onClick': function (_0x1735e8) {
				this.onClickListener(this);
				var _0x27d624 = this.player_.currentTime(), _0x23fac2 = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x23fac2 && this.player_.bigPlayButton.hide();
				typeof _0x1735e8 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x1735e8 = this.options_.customSourcePicker);
				var _0x188adb = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x188adb = 'timeupdate');
				_0x5417b5(this.player_, this.src, this.options_.label, _0x1735e8).one(_0x188adb, function () {
					var _0x50cece = this.player_;
					_0x50cece.switchStatus = true;
					_0x50cece.currentTime(_0x27d624);
					!_0x23fac2 && _0x50cece.play();
					_0x50cece.trigger('resolutionchange');
				});
			}
		});
		_0x1c475a.registerComponent('ResolutionMenuItem', _0x32f6bd);
		var _0x24cb71 = _0x1c475a.getComponent('MenuButton'), _0xbb177d = _0x1c475a.extend(_0x24cb71, {
			'constructor': function (_0x425d0d, _0x19edbc, _0x5e0093, _0xa58cc7) {
				this.sources = _0x19edbc.sources;
				this.label = _0xa58cc7;
				this.label.innerHTML = _0x19edbc.initialySelectedLabel;
				_0x24cb71.call(this, _0x425d0d, _0x19edbc, _0x5e0093);
				this.controlText('Quality');
				if (_0x5e0093.dynamicLabel) {
					this.el().appendChild(_0xa58cc7);
				} else {
					var _0x533748 = document.createElement('span');
					_0x1c475a.dom.addClass(_0x533748, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x533748);
				}
			},
			'createItems': function () {
				var _0x4664b9 = [], _0x46f9be = this.sources && this.sources.label || {}, _0x253d5d = function (_0x495f16) {
					_0x4664b9.map(function (_0x204153) {
						_0x204153.selected(_0x204153 === _0x495f16);
						_0x204153.removeClass('vjs-selected');
					});
				};
				for (var _0x10e2ca in _0x46f9be) {
					_0x46f9be.hasOwnProperty(_0x10e2ca) && (_0x4664b9.push(new _0x32f6bd(this.player_, {
						'label': _0x10e2ca,
						'src': _0x46f9be[_0x10e2ca],
						'initialySelected': _0x10e2ca === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x253d5d, this.label)), _0x38eb24[_0x10e2ca] = _0x4664b9[_0x4664b9.length - 1]);
				}
				return _0x4664b9;
			}
		});
		_0x275cdf = function (_0x14958f) {
			var _0x483658 = _0x1c475a.mergeOptions(_0xe8e829, _0x14958f), _0x1d3470 = this, _0x152400 = document.createElement('span'), _0xcb2f1e = {};
			_0x1c475a.dom.addClass(_0x152400, 'vjs-resolution-button-label');
			_0x1d3470.updateSrc = function (_0x5c36f2) {
				if (!_0x5c36f2) {
					return _0x1d3470.src();
				}
				_0x1d3470.controlBar.resolutionSwitcher && (_0x1d3470.controlBar.resolutionSwitcher.dispose(), delete _0x1d3470.controlBar.resolutionSwitcher);
				_0x5c36f2 = _0x5c36f2.sort(_0x55a302);
				_0xcb2f1e = _0x1201df(_0x5c36f2);
				var _0x41db6f = _0x101fd6(_0xcb2f1e, _0x5c36f2), _0x328a4d = new _0xbb177d(_0x1d3470, {
					'sources': _0xcb2f1e,
					'initialySelectedLabel': _0x41db6f.label,
					'initialySelectedRes': _0x41db6f.res,
					'customSourcePicker': _0x483658.customSourcePicker
				}, _0x483658, _0x152400);
				return _0x1c475a.dom.addClass(_0x328a4d.el(), 'vjs-resolution-button'), _0x1d3470.controlBar.resolutionSwitcher = _0x1d3470.controlBar.el_.insertBefore(_0x328a4d.el_, _0x1d3470.controlBar.getChild('fullscreenToggle').el_), _0x1d3470.controlBar.resolutionSwitcher.dispose = function () {
					this.parentNode.removeChild(this);
				}, _0x5417b5(_0x1d3470, _0x41db6f.sources, _0x41db6f.label, _0x483658.customSourcePicker);
			};
			_0x1d3470.currentResolution = function (_0x2de093, _0x38a587) {
				if (_0x2de093 == null) {
					return _0x379c4a;
				}
				return _0x38eb24[_0x2de093] != null && _0x38eb24[_0x2de093].onClick(_0x38a587), _0x1d3470;
			};
			_0x1d3470.getGroupedSrc = function () {
				return _0xcb2f1e;
			};
			function _0x55a302(_0x55a889, _0x14ee0b) {
				if (!_0x55a889.res || !_0x14ee0b.res) {
					return 0;
				}
				return +_0x14ee0b.res - +_0x55a889.res;
			}
			function _0x1201df(_0x441ff7) {
				var _0x66f054 = {
					'label': {},
					'res': {},
					'type': {}
				};
				return _0x441ff7.map(function (_0x2f1a31) {
					_0x218774(_0x66f054, 'label', _0x2f1a31);
					_0x218774(_0x66f054, 'res', _0x2f1a31);
					_0x218774(_0x66f054, 'type', _0x2f1a31);
					_0x138eb9(_0x66f054, 'label', _0x2f1a31);
					_0x138eb9(_0x66f054, 'res', _0x2f1a31);
					_0x138eb9(_0x66f054, 'type', _0x2f1a31);
				}), _0x66f054;
			}
			function _0x218774(_0x502ab8, _0x2c7c48, _0x47358e) {
				_0x502ab8[_0x2c7c48][_0x47358e[_0x2c7c48]] == null && (_0x502ab8[_0x2c7c48][_0x47358e[_0x2c7c48]] = []);
			}
			function _0x138eb9(_0x4afa9c, _0x498c20, _0x226993) {
				_0x4afa9c[_0x498c20][_0x226993[_0x498c20]].push(_0x226993);
			}
			function _0x101fd6(_0x7fbb37, _0x3c468) {
				var _0x53a74a = _0x483658.default, _0x2a8f8f = '';
				return _0x53a74a === 'high' ? (_0x53a74a = _0x3c468[0].res, _0x2a8f8f = _0x3c468[0].label) : _0x53a74a === 'low' || _0x53a74a == null || !_0x7fbb37.res[_0x53a74a] ? (_0x53a74a = _0x3c468[_0x3c468.length - 1].res, _0x2a8f8f = _0x3c468[_0x3c468.length - 1].label) : _0x7fbb37.res[_0x53a74a] && (_0x2a8f8f = _0x7fbb37.res[_0x53a74a][0].label), {
					'res': _0x53a74a,
					'label': _0x2a8f8f,
					'sources': _0x7fbb37.res[_0x53a74a]
				};
			}
			_0x1d3470.ready(function () {
				_0x1d3470.options_.sources.length > 0 && _0x1d3470.setTimeout(function () {
					_0x1d3470.updateSrc(_0x1d3470.options_.sources);
				}, 1);
			});
		};
		_0x1c475a.registerPlugin('videoJsResolutionSwitcher', _0x275cdf);
	}(window, _0x3640b9));
}());
(function () {
	(function (_0x598a25, _0x5eb00e) {
		var _0x3d7271 = {}, _0x2baaa8, _0x38a913 = {}, _0x11590b = { _0x303d97: _0x424e1d[_0x424e1d.length - 1] };
		function _0x17a761(_0x581cd8, _0x70e5bb, _0x4746ec, _0x54a941) {
			_0x38a913 = _0x70e5bb;
			if (typeof _0x54a941 === 'function') {
				return _0x54a941(_0x581cd8, _0x70e5bb, _0x4746ec);
			}
			return _0x581cd8;
		}
		var _0x1b1b9e = _0x5eb00e.getComponent('ResolutionMenuItem'), _0x18af2e = _0x5eb00e.extend(_0x1b1b9e, {
			'onClick': function (_0x2d2f9f) {
				this.onClickListener(this);
				var _0x405bab = this.player_.currentTime(), _0x4b9d66 = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x4b9d66 && this.player_.bigPlayButton.hide();
				typeof _0x2d2f9f !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x2d2f9f = this.options_.customSourcePicker);
				var _0x52370b = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x52370b = 'timeupdate');
				var _0x3f48f7 = _0x17a761(this.player_, this.src, this.options_.label, _0x2d2f9f);
				_0x3f48f7 && _0x3f48f7.one(_0x52370b, function () {
					_0x3f48f7.switchStatus = true;
					_0x3f48f7.currentTime(_0x405bab);
					!_0x4b9d66 && _0x3f48f7.play();
					_0x3f48f7.trigger('playlinechange');
				});
			}
		}), _0x4b2e6a = _0x5eb00e.getComponent('MenuButton'), _0x422ce6 = _0x5eb00e.extend(_0x4b2e6a, {
			'constructor': function (_0x122041, _0x3a0952, _0x757ff1, _0x3ce790) {
				this.playlines = _0x3a0952.playlines;
				this.label = _0x3ce790;
				this.label.innerHTML = _0x3a0952.initialySelectedLabel;
				_0x4b2e6a.call(this, _0x122041, _0x3a0952, _0x757ff1);
				this.controlText('Playline');
				if (_0x757ff1.dynamicLabel) {
					this.el().appendChild(_0x3ce790);
				} else {
					var _0x52ebdb = document.createElement('span');
					_0x5eb00e.addClass(_0x52ebdb, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x52ebdb);
				}
			},
			'createItems': function () {
				var _0x424e1d = [], _0x47a58a = this.playlines || [], _0x1fcb53 = function (_0x1edf44) {
					_0x424e1d.map(function (_0x3e1030) {
						_0x3e1030.selected(_0x3e1030 === _0x1edf44);
						_0x3e1030.removeClass('vjs-selected');
					});
				};
				for (var _0x54089f = 0; _0x54089f < _0x47a58a.length; _0x54089f++) {
					var _0x303d97 = _0x47a58a[_0x54089f].label;
					_0x424e1d.push(new _0x18af2e(this.player_, {
						'label': _0x303d97,
						'src': _0x47a58a[_0x54089f],
						'initialySelected': _0x303d97 === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x1fcb53, this.label));
				}
				return _0x424e1d;
			}
		});
		_0x2baaa8 = function (_0x36ca52) {
			var _0x1a92aa = _0x5eb00e.mergeOptions(_0x3d7271, _0x36ca52), _0x5d9c3f = this, _0x389069 = document.createElement('span'), _0x2b80a3 = _0x5d9c3f.options_.playlines;
			_0x5eb00e.dom.addClass(_0x389069, 'vjs-resolution-button-label');
			var _0x2c97f2 = new _0x422ce6(_0x5d9c3f, {
				'playlines': _0x2b80a3,
				'initialySelectedLabel': _0x2b80a3[0].label,
				'initialySelectedUrl': _0x2b80a3[0].url,
				'customSourcePicker': _0x1a92aa.customSourcePicker
			}, _0x1a92aa, _0x389069);
			_0x5eb00e.dom.addClass(_0x2c97f2.el(), 'vjs-resolution-button');
			_0x5eb00e.dom.addClass(_0x2c97f2.el(), 'vjs-playline-button');
			_0x2c97f2.show();
			_0x5d9c3f.selectCDN = function (_0x105289) {
				_0x2c97f2.items[_0x105289].onClick(_0x1a92aa.customSourcePicker);
				_0x5d9c3f.play();
			};
			_0x2b80a3.length > 0 && (_0x38a913 = _0x2b80a3[0]);
			_0x5d9c3f.currentPlayline = function () {
				return _0x38a913;
			};
			_0x5d9c3f.ready(function () {
				_0x5d9c3f.controlBar.videoJsPlayLine = _0x5d9c3f.controlBar.el_.insertBefore(_0x2c97f2.el_, _0x5d9c3f.controlBar.getChild('fullscreenToggle').el_);
				_0x5d9c3f.controlBar.videoJsPlayLine.dispose = function () {
					this.parentNode.removeChild(this);
				};
			});
		};
		_0x5eb00e.registerPlugin('videoJsPlayLine', _0x2baaa8);
	}(window, videojs));
}());
Ext.define('ans.AudioJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x4bb582) {
		_0x4bb582 = _0x4bb582 || {};
		var _0x371990 = this;
		_0x371990.addEvents(['seekstart']);
		_0x371990.mixins.observable.constructor.call(_0x371990, _0x4bb582);
		var _0x28a382 = videojs(_0x4bb582.videojs, _0x371990.params2VideoOpt(_0x4bb582.params), function () {
		});
		Ext.fly(_0x4bb582.videojs).on('contextmenu', function (_0x5334c4) {
			_0x5334c4.preventDefault();
		});
		Ext.fly(_0x4bb582.videojs).on('keydown', function (_0x274a65) {
			(_0x274a65.keyCode == 32 || _0x274a65.keyCode == 37 || _0x274a65.keyCode == 39) && _0x274a65.preventDefault();
		});
	},
	'params2VideoOpt': function (_0x2aeede) {
		var _0x2b0635 = [];
		!_0x2aeede.rootPath && (_0x2aeede.rootPath = '');
		_0x2aeede.http && _0x2b0635.push({
			'src': _0x2aeede.http,
			'type': 'audio/mp3'
		});
		var _0x508929 = function (_0x1b1c52, _0x60e60a, _0x5b67f8) {
			var _0x20cefe = this;
			!_0x20cefe.logCount && (_0x20cefe.logCount = 0);
			videojs.xhr({
				'uri': _0x60e60a,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x3a1fe5, _0x5ec5e0) {
				_0x20cefe.logCount++;
				if (_0x5ec5e0.statusCode == 200) {
					_0x20cefe.logCount = 0;
					if (_0x5ec5e0.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x5ec5e0.body);
					d.isPassed && _0x5b67f8();
					return;
				}
				if (_0x20cefe.logCount >= 4) {
					_0x20cefe.logCount = 0;
					_0x1b1c52.pause();
					_0x5ec5e0.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x5ec5e0.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x483e07 = function (_0x3fe5bb, _0x538362, _0x314173, _0x39011c) {
			if (!_0x2aeede.reportUrl) {
				return;
			}
			var _0x204b14 = (_0x2aeede.startTime || '0') + '_' + (_0x2aeede.endTime || _0x2aeede.duration), _0x1e7694 = 0, _0x5bdda7;
			_0x314173.toString().indexOf('-') != -1 ? (_0x5bdda7 = _0x314173.split('-'), _0x5bdda7.length == 2 && (_0x1e7694 = parseInt(_0x5bdda7[1]) * 1000)) : _0x1e7694 = _0x314173 * 1000;
			if (_0x1e7694 == _0x2aeede.duration * 1000 && _0x538362 == 2) {
				return;
			}
			var _0x34bc26 = Ext.String.format('[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x2aeede.clazzId, _0x2aeede.userid, _0x2aeede.jobid ? _0x2aeede.jobid : '', _0x2aeede.objectId, _0x1e7694, 'd_yHJ!$pdA~5', _0x2aeede.duration * 1000, _0x204b14), _0x25a1c1 = [
				_0x2aeede.reportUrl,
				'/',
				_0x2aeede.dtoken,
				'?clazzId=',
				_0x2aeede.clazzId,
				'&playingTime=',
				_0x314173,
				'&duration=',
				_0x2aeede.duration,
				'&clipTime=',
				_0x204b14,
				'&objectId=',
				_0x2aeede.objectId,
				'&otherInfo=',
				_0x2aeede.otherInfo,
				'&jobid=',
				_0x2aeede.jobid,
				'&userid=',
				_0x2aeede.userid,
				'&isdrag=',
				_0x538362,
				'&view=pc',
				'&enc=',
				md5(_0x34bc26),
				'&rt=',
				_0x2aeede.rt,
				'&dtype=Audio',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x508929(_0x3fe5bb, _0x25a1c1, _0x39011c);
		};
		return {
			'language': 'zh-CN',
			'controls': true,
			'preload': 'auto',
			'bigPlayButton': false,
			'sources': _0x2b0635,
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
				'audioNote': { 'title': _0x2aeede.filename },
				'studyControl': { 'enableSwitchWindow': 1 },
				'seekBarControl': {
					'headOffset': _0x2aeede.headOffset,
					'enableFastForward': _0x2aeede.enableFastForward,
					'isSendLog': true,
					'reportTimeInterval': _0x2aeede.reportTimeInterval,
					'sendLog': function (_0xee312f, _0x3a3766, _0x6cd859) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x1c8bda = 0;
						switch (_0x3a3766) {
							case 'play':
								_0x1c8bda = 3;
								break;
							case 'pause':
								_0x1c8bda = 2;
								break;
							case 'ended':
								_0x1c8bda = 4;
								break;
						}
						_0x483e07(_0xee312f, _0x1c8bda, _0x6cd859, function () {
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
	var _0x337f27 = videojs.getPlugin('plugin'), _0x36665d = videojs.extend(_0x337f27, {
		'constructor': function (_0x5fc48e, _0x1bc837) {
			_0x337f27.call(this, _0x5fc48e, _0x1bc837);
			Ext.create('ans.videojs.AudioNote', {
				'renderTo': _0x5fc48e.el_,
				'html': _0x1bc837.title
			});
		}
	});
	videojs.registerPlugin('audioNote', _0x36665d);
}());